export const useScrollTo = (selector: string) => {
  const scroll = () => {
    const element = document.getElementById(selector)
    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    scroll
  }
}
