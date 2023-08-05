import React from 'react'
import styles from './index.module.scss'
import { HashLoader } from 'react-spinners'

const Spinners = () => {
  return (
    <div className={styles.spinner}>
        <HashLoader
         size={30}
         color={"#F37A24"}
        />
    </div>
  )
}

export default Spinners