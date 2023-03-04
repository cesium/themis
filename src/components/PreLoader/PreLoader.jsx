import styles from './PreLoader.module.css'

export function PreLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.cube}>
        <div className={styles.top} />

        <div className={styles.cubeFacesWrapper}>
          <div className={styles.face} />
          <div className={styles.face} />
          <div className={styles.face} />
          <div className={styles.face} />
        </div>

        <div className={styles.bottom} />
      </div>
    </div>
  )
}
