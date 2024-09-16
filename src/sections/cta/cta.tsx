import Style from './cta.module.scss'

//components
import Action from '@/components/individual/cta/action/action'
import CtaForm from '@/components/individual/cta/form/form'

export default function Cta(){
    return(
        <section className={Style.cta}>
            <div className="container">
                <div className={Style.ctaWrapper}>
                    <Action />
                    <CtaForm />
                </div>
            </div>
        </section>
    )
}