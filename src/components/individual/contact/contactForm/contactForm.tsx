"use client"

import { useState } from 'react';
import api from '@/libs/api';
import axios from 'axios'
import styles from './contactForm.module.scss';
import Button from "@/components/global/button/button";

//toster
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        agreeToPolicy: false,
    });
    const [loading, setLoading]=useState(false)

    const handleValidate = () => {
      const {firstName, email, phone, address, message, agreeToPolicy} = formData

      if (!firstName || !email || !phone || !agreeToPolicy) {
        if (!firstName) toast.error("First Name is required.");
        if (!email) toast.error("Email is required.");
        if (!phone) toast.error("Phone number is required.");
        if (!agreeToPolicy) toast.error("You must agree to the policy.");
        return false;
    }
    return true;
    }

    const handleChange = (e: any) => {
        setLoading(false)
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async () => {
        if(!handleValidate()) return;
        
        try {
            setLoading(true)
            const response = await api.post(`/contact`, formData);
            toast.success(response.data);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                message: '',
                agreeToPolicy: false,
            })
            setLoading(false)
        } catch (error) {
            setLoading(false)
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message || 'An error occurred. Please try again.');
            } else {
                toast.error('An error occurred. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h2 className={styles.title}>Get In Touch</h2>
            <div className={styles.input}>
                <div className={styles.name}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className={styles.policy}>
                <input
                    type="checkbox"
                    id="checkbox"
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleChange}
                />
                <label htmlFor="checkbox">
                    By providing your mobile number and email address, you agree to receive text, calls and email messages from Five Star Estate Liquidations.
                </label>
            </div>
            <Button
                lebel="Submit"
                varient="primary"
                link='/#contact'
                onclick={handleSubmit}
                loading={loading}
                style={{ backgroundColor: "black", color: "white", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem" }}
            />
        </form>
    );
}