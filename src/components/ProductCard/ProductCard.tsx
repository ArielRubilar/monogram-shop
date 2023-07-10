import styles from './ProductCard.module.css'

export interface ProductCardImage {
  src: string
  alt: string
}

export interface ProductCardProps {
  title: string
  description: string
  price: string
  url: string
  badgeText?: string
  image: ProductCardImage
  imageHover?: ProductCardImage
}

export const ProductCard = ({ title, description, price, url, image, imageHover, badgeText = '' }: ProductCardProps) => {
  return (

    <article className={styles.card}>
        <a href={url} className='unstyle-link'>
            <header className={styles.image}>
                {badgeText !== '' ? <p className={styles.badge}>{badgeText}</p> : null }
                <img src={image.src} alt={image.alt} />
                { (imageHover != null) ? <img className={ styles.img__hover} src={imageHover.src} alt={imageHover.alt} /> : null}
            </header>
        </a>

        <footer className={styles.footer}>
            <div>
                <a href={url} className='unstyle-link '><h3 className={styles.title}>{title}</h3> </a>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.price}>
                <p>{price}</p>
            </div>
        </footer>
    </article>
  )
}
