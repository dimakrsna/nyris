import styles from './Card.module.scss'
import { ReactSVG } from 'react-svg'
import iconThumbUp from '../../../assets/svg/icon-thumb-up.svg'
import iconThumbDown from '../../../assets/svg/icon-thumb-down.svg'
import iconCardComment from '../../../assets/svg/icon-card-comment.svg'
import iconCardShare from '../../../assets/svg/icon-card-share.svg'
import iconCardZoom from '../../../assets/svg/icon-card-zoom.svg'
import { ApiTypes } from '../../../types'

interface Props extends ApiTypes.SearchResult { }

export const Card = (props: Props) => {
  const { customIds, title, images } = props

  return (
    <div className={styles.card}>
      <div className={styles.cardImage} style={{ backgroundImage: `url(${images[0]})` }}>
        <span className={`${styles.iconButton} ${styles.zoom}`}>
          <ReactSVG src={iconCardZoom} className={styles.iconZoom} />
        </span>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardNumber}>SKU: {customIds["oeM-ID"]}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardNavigation}>
          <div className={styles.cardLikes}>
            <ReactSVG className={styles.cardLikeIcon} src={iconThumbUp} />
            <ReactSVG className={styles.cardLikeIcon} src={iconThumbDown} />
          </div>
          <div className={styles.cardButtons}>
            <span className={`${styles.iconButton} ${styles.nav}`}>
              <ReactSVG src={iconCardShare} className={styles.iconShare} />
            </span>
            <span className={`${styles.iconButton} ${styles.nav}`}>
              <ReactSVG src={iconCardComment} className={styles.iconComment} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}