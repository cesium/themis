import Image from 'next/image'

import styles from './PreLoader.module.css'
import Logo from 'public/images/logo.svg'

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

      <div className='absolute top-20 flex justify-center lg:top-10'>
        <Image
          className="text-slate-900 w-36 aspect-video md:w-80"
          src={Logo}
          alt=""
          // width={50}
          // height={25}
          // priority
          // unoptimized
        />
      </div>
    </div>
  )
}
