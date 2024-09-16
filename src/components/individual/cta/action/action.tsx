import Style from './action.module.scss'
import Button from "@/components/global/button/button"

export default function Action(){
    return(
        <div className={Style.action}>
            <h1> Explore Estate Liquidation Options</h1>
            <p>Discover quick estate buy-outs, professional on-site sales, and profitable online auctions. Schedule a free consultation today to maximize your estate&apos;s value.</p>
            <Button lebel="Call Us" varient="primary" style={{backgroundColor: "black", color:"white", maxWidth:"8rem"}} link='tel:423-497-2750'/>
        </div>
    )
}