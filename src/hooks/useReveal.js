import { useEffect } from 'react'

/**
 * Ajoute la classe `is-visible` aux elements `.reveal` quand ils entrent
 * dans le viewport. Animation d'apparition au scroll, sans dependance.
 * Un MutationObserver surveille aussi les elements `.reveal` ajoutes plus
 * tard (ex: cartes projets qui apparaissent au changement de filtre).
 */
export default function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const observeAll = (root) => {
      root.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    }

    observeAll(document)

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.matches?.('.reveal')) io.observe(node)
          observeAll(node)
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
