import React from 'react'
import styles from './Home.module.css';
import SearchInput from '../components/SearchInput'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.main_div} >
      <div className={styles.myapp}>
        <h1>My App</h1>
      </div>
      <div className={styles.listLink}>
        <span>
          <NavLink to='/favorite_list'>Go to my favorite package list</NavLink>
        </span>
      </div>
      <div className={styles.searchBox}>
        <h2>Search for NPM Packages</h2>
        <SearchInput placeholder="Search NPM Packages"/>
      </div>
    </div>
  )
}
