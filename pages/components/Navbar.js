import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src='/images/pokeball.png' width='30' height='30' alt='Pokenext logo'/>
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href={'/'} className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href={'/about'} className={styles.link}>Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar