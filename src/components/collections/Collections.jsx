import React from 'react'
import './collection.module.css'
import styles from './collection.module.css'

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
