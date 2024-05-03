import React from 'react'
import './collections.module.css'
import styles from './collections.module.css'

import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'

export const Collections = () => {
  return (
    <div className={styles.main}>
        <Header/>
       <Footer/>
    </div>
  )
}
