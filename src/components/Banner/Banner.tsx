import { Icons } from '../Icons'
import styles from './Banner.module.css'

interface BannerProps {
  background: JSX.Element
  content: JSX.Element
  url: string
}

export const Banner = ({ url, content, background }: BannerProps) => {
  const scroll = () => {
    const element = document.getElementById(url)
    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (

        <section className={styles.banner}>
            <div className={styles.background}>
                {background}
            </div>
            <div className={styles.content}>
                <div>
                    {content}
                </div>
                <a className={`icon-button ${styles.action}`} href={url} onClick={ e => { scroll() }}>
                        <Icons.arrow/>
                </a>
            </div>
        </section>
  )
}
