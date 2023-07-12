import { type PropsWithChildren } from 'react'
import { Banner } from '../Banner/Banner'
import { Icons } from '../Icons'
import styles from './BannerAction.module.css'

interface BannerActionProps {
  title: string
  description: string
  onAction: () => void
}

export const BannerAction = ({ title, description, children, onAction }: PropsWithChildren<BannerActionProps>) => {
  return (
        <Banner
            background={
              <picture className={styles.background}>
                {children}
              </picture>
            }
            content={
                <div className={styles.content}>
                    <div>
                        <h1 className={'title c-primary-200 '}>{title}</h1>
                        <p className={'subtitle c-primary-200 '}>{description}</p>
                    </div>
                    <button className={`icon-button ${styles.action}`} onClick={onAction}>
                        <Icons.arrow/>
                    </button>

                </div>
            }
        />
  )
}
