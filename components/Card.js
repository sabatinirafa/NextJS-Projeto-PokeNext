import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from '@/styles/Card.module.css'

const Card = ({pokemon}) => {

  let zeros = ""

  if(pokemon.id < 10) {
    zeros = '00'
  } else if (pokemon.id < 100) {
    zeros = '0'
  } 

  return (
    <div className={styles.card}>
      <Image 
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeros + pokemon.id}.png`}
        width='220'
        height='220'
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  )
}

export default Card