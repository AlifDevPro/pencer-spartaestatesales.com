'use client'

import api from '@/libs/api'
import { useState } from 'react'
import Style from './form.module.scss'

//toster
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Button from '@/components/global/button/button'

export default function CtaForm(){
    const [formData, setFormData] = useState({
        firstName:"",
        email:""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData((prev)=>{
            return {...prev, [event.target.name]:event.target.value}
        })
    }

    //post data to api
    const handleSubmit = async()=>{
        try {
            const res = await api.post("/newsletter", formData)
            toast.success(res.data);
            setFormData({
                firstName:"",
                email:""
            })
        } catch (error: any) {
            toast.error(error)
        }
    }
    
    return(
        <div className={Style.form}>
            <h1>Subscribe our Newsletter</h1>
            <form>
                <input 
                name="firstName" 
                type="text" 
                placeholder='Name' 
                onChange={handleChange}
                value={formData.firstName}/>
                <input name="email"
                type="text"
                placeholder='Email Address'
                onChange={handleChange}
                value={formData.email}
                />
                <Button onclick={handleSubmit} lebel="Subscribe" varient="primary" style={{backgroundColor: "black", color:"white",maxWidth:"8rem"}} />
            </form>
        </div>
    )
}