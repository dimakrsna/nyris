import Loader from "react-loader-spinner";
import styles from './Spinner.module.scss'

interface Props {
  color?: string
}

export const Spinner = ({ color }: Props) => (
  <div className={styles.spinnerWrapper}>
    <Loader
      type="Oval"
      color={color || "#fff"}
      height={35}
      width={35}
    />
  </div>
)