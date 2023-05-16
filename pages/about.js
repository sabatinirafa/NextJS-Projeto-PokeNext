import React from 'react'
import Image from 'next/image'

import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Image src='/../public/images/charizard.png' width='300' height='300' alt='Charizard'/>
    </div>
  )
}

export default About