import { type ProductCardProps } from '../../../../components/ProductCard'
import { ProductList } from '../ProductsList'

export const NewReleases = () => {
  const products: ProductCardProps[] = [
    {
      title: 'Mini Console',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
      price: '233,95 €',
      url: '/',
      image: {
        src: 'images/products/mini-console/base.webp',
        alt: ''
      },
      imageHover: {
        src: 'images/products/mini-console/hover.webp',
        alt: ''
      },
      badgeText: 'Pre-order'
    },
    {
      title: 'Mini Console 2',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
      price: '233,95 €',
      url: '/',
      image: {
        src: 'images/products/mini-console/base.webp',
        alt: ''
      },
      imageHover: {
        src: 'images/products/mini-console/hover.webp',
        alt: ''
      }
    },
    {
      title: 'Mini Console 3',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
      price: '233,95 €',
      url: '/',
      image: {
        src: 'images/products/mini-console/base.webp',
        alt: ''
      },
      imageHover: {
        src: 'images/products/mini-console/hover.webp',
        alt: ''
      }
    },
    {
      title: 'Mini Console 4',
      description: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
      price: '233,95 €',
      url: '/',
      image: {
        src: 'images/products/mini-console/base.webp',
        alt: ''
      },
      imageHover: {
        src: 'images/products/mini-console/hover.webp',
        alt: ''
      }
    }

  ]
  return (
        <ProductList id='#news' items={products} maxWidthCard='25rem' title='All Products' />
  )
}
