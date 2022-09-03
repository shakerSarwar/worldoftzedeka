import React from 'react'
import Image from 'next/image';
import { Box } from '@chakra-ui/react'
import home from './../../images/home.svg'
import bell from './../../images/bell.svg'
import setting from './../../images/setting.svg'
import ques from './../../images/ques.svg'
import logoD from './../../images/logo-d.png'

function Navbar() {
  return (
    <div className='navbar'>
    <select className='select-menu' id="cars">
        <option value="audi">Admin Panel</option>
    </select>
    <select className='select-menu' id="cars">
        <option value="audi">Users Swither</option>
    </select>
    <select className='select-menu' id="cars">
        <option value="audi">English</option>
    </select>
    <Image className='nav-img' src={home} width='45' height='30' alt='logo icon' />
    <Image className='nav-img' src={bell} width='45' height='30' alt='logo icon' />
    <Image className='nav-img' src={setting} width='45' height='30' alt='logo icon' />
    <Image className='nav-img' src={ques} width='45' height='30' alt='logo icon' />
    <Image className='nav-img' src={logoD} width='320' height='35' alt='logo icon' />
    </div>
  )
}

export default Navbar
