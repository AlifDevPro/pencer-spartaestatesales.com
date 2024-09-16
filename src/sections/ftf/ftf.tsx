import Style from './ftf.module.scss';
import Image from 'next/image';
import Link from 'next/link';

//components
import Button from '@/components/global/button/button';

import founderImg from '../../../public/homeAssets/founder.png'

export default function Ftf(){
    return(
        <section className={Style.ftf}>
            <div className="container">
                <div className={Style.ftfWrapper}>
                    <div className="image">
                        <Image src={founderImg} alt="Ron Fields" width={500} height={500} />
                    </div>
                    <div className={Style.body}>
                        <h1>Message from the Founder</h1>
                        <p>You will find the staff at Five Star Estate Liquidations very professional and experienced…lead by the owner, <b>Ron Fields</b>. With an extensive background in antiques and collectables, our company knows how to market a wide range of estate items to maximize the sales price. However, we don&apos;t know everything, and, in those cases, we have dozens of certified appraisers within our extended network who are always happy and ready to help. We are licensed and insured, and we think of ourselves as a fiduciary, so we maintain tight control of the process of liquidating your estate. You can rest assured you have placed your estate in very capable and caring hands when you hire Five Star Estate Liquidators.</p>
                        <Button lebel="Send a Email" varient="primary"  link='mailto:ronfields@gmail.com' style={{color:"white", backgroundColor:"black"}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}