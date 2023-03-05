import Image from 'next/image'

import styles from './PreLoader.module.css'
import Logo from 'public/images/logo.svg'

export function PreLoader() {
  return (
    <div className={`${styles.container}`}>
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

      {/* JORDI LOGO */}
      <div className="absolute top-20 flex justify-center lg:top-10">
        <Image
          className="aspect-video w-36 animate-horizontal-slide text-slate-900 md:w-80"
          src={Logo}
          alt="JORDI"
        />
      </div>

      <h1 className="absolute bottom-20 animate-horizontal-slide-reverse text-xl font-medium text-secondary md:text-4xl md:text-black">
        Jornadas de Direito Informático
      </h1>
    </div>
  )
}
