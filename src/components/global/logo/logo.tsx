import Image from 'next/image'
import Link from 'next/link'

import Style from './logo.module.scss'

export default function Logo(){
    return(
        <Link href="/" className={Style.logo}>
            <Image src="/logo.png" alt="five star estate sales" width={50} height={50} quality={100}/>
        </Link>
    )
}