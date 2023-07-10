import { Icons } from '../Icons'
import styles from './Header.module.css'

export const Header = () => {
  return (
        <header className={styles.header}>
            <div className={styles.content}>
                <a href="/" className={styles.logo}>
                    <Icons.fullLogo />
                </a>

                <button aria-label='Menu' className='icon-button'>
                    <Icons.menu />
                </button>
            </div>
        </header>
  )
}
