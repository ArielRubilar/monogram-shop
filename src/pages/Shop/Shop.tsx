import { BannerAction } from '../../components/BannerAction'
import { BannerInfo } from '../../components/BannerInfo'
import { AllProducts } from './components/AllProducts'
import { NewReleases } from './components/NewReleases'
import { useScrollTo } from '../../hooks'

export const Shop = () => {
  const { scroll } = useScrollTo('#news')

  return (

    <main>
        <BannerAction
            onAction={scroll}
            title='A Console for Every Workflow'
            description='Discover the perfect console for yours.'
        >
          <img src='images/shop_cta.webp' alt='' loading='lazy' decoding='async'/>
        </BannerAction>

        <NewReleases />

        <BannerInfo
          title='Create Your Own Console'
          description='Add-on to make it perfect.'
          backgroundColor='#C4C4C4'
        >
          <img src='images/shop-banner-module.webp' alt='' loading='lazy' decoding='async'/>
        </BannerInfo>

        <AllProducts />
    </main>
  )
}
