import { forwardRef, type HTMLAttributes } from 'react'
import { ProductCard, type ProductCardProps } from '../../../../components/ProductCard'
import styles from './ProductList.module.css'

interface ProductListProps extends HTMLAttributes<HTMLDivElement> {
  items: ProductCardProps []
  maxWidthCard?: string
  title: string
}

export const ProductList = forwardRef<

HTMLDivElement,
ProductListProps
>(

  ({ className, title, maxWidthCard = '20rem', items = [], ...props }, ref) => {
    return (
        <section className={`${styles.section} className`} ref={ref} {...props} style={ { '--_max-width-card': maxWidthCard } }>
                <h2 className='sr-only'>{title}</h2>
                {items.map(p => (
                    <ProductCard key={p.title} {...p} />
                ))}
        </section>
    )
  }
)

ProductList.displayName = 'ProductList'
