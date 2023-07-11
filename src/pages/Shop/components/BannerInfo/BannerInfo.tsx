import { Banner } from '../../../../components/Banner/Banner'
import styles from './BannerInfo.module.css'

export const BannerInfo = () => {
  return (

    <Banner
        background={
            <picture className={styles.background}>
                <img src='images/shop-banner-module.webp' className={styles['img-2']} alt='' loading='lazy' decoding='async'/>
            </picture>
        }
        content={
            <div className={styles.content}>
                <h2 className={'title'}>Create Your Own Console</h2>
                <p className={'subtitle'}>Add-on to make it perfect.</p>
            </div>
        }

    />
  )
}
