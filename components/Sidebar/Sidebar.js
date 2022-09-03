import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link' ;
import { Button } from '@chakra-ui/react'
import status from './../../images/icons/white/status.svg';
import donate from './../../images/icons/white/donate.svg';
import donors from './../../images/icons/white/donors.svg';
import partners from './../../images/icons/white/partners.svg';
import analytics from './../../images/icons/white/analytics.svg';
import utm from './../../images/icons/white/utm.svg';
import withdraw from './../../images/icons/white/withdraw.svg';
import payment from './../../images/icons/white/payment.svg';
import user from './../../images/icons/white/user1.png';


function Sidebar() {
  return (
    <Box>
    <Box w="15%" h='95vh' bg='#454545' className='sidebarMenu'>
        <Box>
        <Box m={30} className='flex items-center'>
            <Image className='nav-img' src={status} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Status & Balance</a>
        </Link>
        </Box>
        <Box m={30} className='flex items-center'>
            <Image className='nav-img' src={donate} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Donations</a>
        </Link>
        </Box>
        <Box m={30}className='flex items-center'>
            <Image className='nav-img' src={donors} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Status & Balance</a>
        </Link>
        </Box>
        <Box m={30}className='flex items-center'>
            <Image className='nav-img' src={partners} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Status & Balance</a>
        </Link>
        </Box>
        <Box m={30}className='flex items-center'>
            <Image className='nav-img' src={status} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Status & Balance</a>
        </Link>
        </Box>
        <Box m={30}className='flex items-center'>
            <Image className='nav-img' src={payment} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Status & Balance</a>
        </Link>
        </Box>
        <Box m={30}className='flex items-center'>
            <Image className='nav-img' src={withdraw} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Withdrawals</a>
        </Link>
        </Box>
        <Box m={30}className='flex items-center'>
            <Image className='nav-img' src={utm} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>UTM Links</a>
        </Link>
        </Box>
        <Box m={30} className='flex items-center'>
            <Image className='nav-img' src={analytics} width='45' height='30' alt='logo icon' />
            <Link href="/">
            <a className='ml-2'>Analytics</a>
        </Link>
        </Box>
        </Box>

    <Box mb={5} pb={10} color='#fff'>
        <Box className='profile'>
            <Image  className='profile-img' src={user} width='70' height='70' alt='logo icon' />
            <h2>
                Israel Israeli
            </h2>
            <h4 className='profile-campaign'>
                Campaign Manager
            </h4>
            <Button m={4} color='#fff' bg='#ED604F' pr={10} pl={10}>
                Logout
            </Button>
        </Box>
    </Box>
        
    </Box>
    </Box>
  )
}

export default Sidebar
