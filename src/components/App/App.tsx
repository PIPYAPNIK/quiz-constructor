import React, { memo } from 'react'
import styles from './App.module.scss'

export const App = memo(() => {
  return <h1 className={styles.title}>Title!</h1>
})
