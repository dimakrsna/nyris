import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import logo from '../../../assets/svg/logo.svg'
import styles from './TopBar.module.scss'

export const TopBar = () => {
  return (
    <header className={styles.topbarWrapper}>
      <Link className={styles.logoWrapper} to="/">
        <ReactSVG src={logo} alt="logo" />
      </Link>
    </header>
  )
}

