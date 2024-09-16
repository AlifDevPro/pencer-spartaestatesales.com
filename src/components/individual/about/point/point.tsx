import Style from './point.module.scss'

interface pointProps {
    heading?: String, 
    desc?: String,
}

export default function Point({heading, desc} : pointProps){
    return(
        <div className={Style.point}>
            <div className={Style.dot}></div>
            <div className={Style.text}>
                <h4>{heading}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}