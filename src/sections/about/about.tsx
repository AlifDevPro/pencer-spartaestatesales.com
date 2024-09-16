import Header from '@/components/individual/about/header/header'
import Body from '@/components/individual/about/body/body'
import Style from './about.module.scss'

export default function About(){
    return(
        <section className={Style.about} id='about-us'>
            <div className="container">
                <div className="aboutWrapper">
                    <Header />
                    <Body />
                </div>
            </div>
        </section>
    )
}