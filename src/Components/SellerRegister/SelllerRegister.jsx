import React, { useState } from 'react';
import axios from 'axios';
import Container from '../../CommonComponents/Container';

function SellerRegister() {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', company_name: '', company_details: '', contact_number: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/sellers/register', formData);
            alert(res.data.message);
        } catch (error) {
            alert('Error registering seller');
        }
    };

    return (
        <Container>
            <div className='h-[] top-[20rem] m-auto flex justify-center align-middle'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    <input type="text" name="company_name" placeholder="Company Name" onChange={handleChange} required />
                    <textarea name="company_details" placeholder="Company Details" onChange={handleChange} required />
                    <input type="text" name="contact_number" placeholder="Contact Number" onChange={handleChange} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </Container>

    );
}

export default SellerRegister;
