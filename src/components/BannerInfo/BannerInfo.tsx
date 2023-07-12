import { type PropsWithChildren, type CSSProperties } from 'react'
import { Banner } from '../Banner/Banner'
import styles from './BannerInfo.module.css'

interface BannerInfoProps {
  title: string
  description: string
  backgroundColor?: string
}

export interface CSSPropertiesWithVars extends CSSProperties {
  '--_background-color': string
}

export const BannerInfo = ({ title, description, children, backgroundColor = '' }: PropsWithChildren<BannerInfoProps>) => {
  const cssProperties: CSSPropertiesWithVars = { '--_background-color': backgroundColor }

  return (

    <Banner
        background={
            <picture className={styles.background} style={cssProperties}>
                {children}
            </picture>
        }
        content={
            <div className={styles.content}>
                <h2 className={'title'}>{title}</h2>
                <p className={'subtitle'}>{description}</p>
            </div>
        }

    />
  )
}
