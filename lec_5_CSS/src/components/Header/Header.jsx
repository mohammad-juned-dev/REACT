import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.head}>
        <h1>Header</h1>
        <button className={styles.btn}>Log Out</button>
    </div>
  )
}

export default Header