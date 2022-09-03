import Layout from 'pages/shared/Layout';
import React from 'react';
import Image from 'next/image';
import errorPic from './../../images/404.png';
import { Button ,Box} from '@chakra-ui/react';
import Link from 'next/link';

function index() {
  return (
    <div>
        <Layout>
            <Box className='text-center align-center'>
                <Image className='nav-img' src={errorPic} width='650' height='550' alt='logo icon' />
            </Box>
            <div className='text-center'> 
            <Link href='/'><Button className='justify-self-center' pl={10} pr={10} colorScheme='telegram'>Back to Main Page</Button></Link>
            </div>
        </Layout>
    </div>
  )
}

export default index