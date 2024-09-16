"use client"
import styles from './sectionFour.module.scss'
import { useState } from "react"
import api from '@/libs/api'
import { toast } from 'react-toastify'

export default function SectionFour() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: ""
  })
  console.log(formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post(`/newsletter`, formData);
      setFormData(
        {
          firstName: "",
          email: ""
        }
      )
      toast.success(res.data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  }

  return (
    <div className={styles.sectionFour}>
      <div className={styles.services}>
        <h1 className={styles.footerHeading}>Social Media</h1>
        <ul>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        <h1 className={styles.footerHeading}>Newsletter Subscription</h1>
        <ul>
          <li>Subscribe to our newsletter for updates on upcoming estate sales and special offers.</li>
          <li>
            <form className={styles.newsletter} onSubmit={handleSubmit}>
              <input name="firstName" type="text" placeholder='Name' onChange={handleChange} required/>
              <input name="email" type="email" placeholder='Enter your email' onChange={handleChange} required/>
              <button>Submit</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
