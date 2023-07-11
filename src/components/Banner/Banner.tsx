import styles from './Banner.module.css'

interface BannerProps {
  background: JSX.Element
  content: JSX.Element
}

export const Banner = ({ content, background }: BannerProps) => {
  return (

        <section className={styles.banner}>
            <div className={styles.background}>
                {background}
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </section>
  )
}
