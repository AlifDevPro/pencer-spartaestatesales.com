import Style from './whyUs.module.scss'
import Card from '@/components/individual/whyUs/card/card'

//data
import {whyUsData} from './whyUs.data'

export default function WhyUs(){
    return(
        <section className={Style.whyUs} id='why-us'>
            <div className="container">
                <div className="whyUsWrapper">
                    <div className={Style.header}>
                        <h1>Why Choose Us?</h1>
                    </div>
                    <div className="body">
                        <div className={Style.bodyWrapper}>
                        {
                            whyUsData.map((value, index)=>{
                                return(
                                    <Card 
                                    key={index}
                                    color={value.color}
                                    icon={value.icon}
                                    title={value.title}
                                    desc={value.desc}
                                    />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}