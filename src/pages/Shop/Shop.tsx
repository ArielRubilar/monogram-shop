import { BannerAction } from './components/BannerAction'
import { BannerInfo } from './components/BannerInfo'
import { AllProducts } from './components/AllProducts'
import { NewReleases } from './components/NewReleases'

export const Shop = () => {
  return (

    <main>
        <BannerAction
            url='#news'
        />
        <NewReleases />
        <BannerInfo />
        <AllProducts />
    </main>
  )
}
