import { Banner } from '../../components/Banner/Banner'
import styles from './Shop.module.css'
import { AllProducts } from './components/AllProducts/AllProducts'
import { NewReleases } from './components/NewReleases/NewReleases'

export const Shop = () => {
  return (

    <main>
        <Banner
            url='#news'
            background={
                <img src='images/shop_cta.webp' className={styles.img} alt='' loading='lazy' decoding='async'/>
            }
            content={
                <>
                    <h1 className={styles.title}>A Console for Every Workflow</h1>
                    <p className={styles.subtitle}>Discover the perfect console for yours.</p>
                </>
            }
        />

        <NewReleases />

        <AllProducts />

    </main>
  )
}
