import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src='/images/pokeball.png' width='30' height='30' alt='Pokenext logo'/>
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar