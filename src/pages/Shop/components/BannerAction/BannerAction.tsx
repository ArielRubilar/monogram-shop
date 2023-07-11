import { Banner } from '../../../../components/Banner/Banner'
import { Icons } from '../../../../components/Icons'
import styles from './BannerAction.module.css'

interface BannerActionProps {
  url: string
}

export const BannerAction = ({ url }: BannerActionProps) => {
  const scroll = () => {
    const element = document.getElementById(url)
    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
        <Banner
            background={
                <picture className={styles.background}>
                     <img src='images/shop_cta.webp' className={styles.img} alt='' loading='lazy' decoding='async'/>
                </picture>
            }
            content={
                <div className={styles.content}>
                    <div>
                        <h1 className={'title c-primary-200 '}>A Console for Every Workflow</h1>
                        <p className={'subtitle c-primary-200 '}>Discover the perfect console for yours.</p>
                    </div>
                    <a className={`icon-button ${styles.action}`} href={url} onClick={ e => { scroll() }}>
                        <Icons.arrow/>
                    </a>

                </div>
            }
        />
  )
}
