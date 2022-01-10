import { history } from "../../../../App"
import styles from './Message.module.scss'

export const Message = () => (
  <div className={styles.notFoundWrapper}>
    <h3 className={styles.message}>This page does not exist</h3>
    <div className={styles.linkWrapper}>
      <span
        className={styles.goBack}
        onClick={() => { history.goBack() }}>
        Go back
      </span>
    </div>
  </div>
)