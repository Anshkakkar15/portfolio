import React, { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({ yourname: '', email: '', message: '' })
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({ yourname: '', email: '', message: '' })
    }
    return (
        <div className='color-bg p-5 '>
            <h2 className='text-center'>Drop me a message</h2>
            <form className='container d-flex flex-column  align-items-center ' onSubmit={handleSubmit}>
                <div className="form-group pt-2">
                    <input type="text" className="form-control form" id="exampleInputEmail1" aria-describedby="name" name='yourname'
                        onChange={handleChange} value={formData.yourname} placeholder="Name" />
                </div>
                <div className="form-group pt-2" >
                    <input type="email" className="form-control form" id="exampleInputEmail1" aria-describedby="email" name='email'
                        onChange={handleChange} value={formData.email} placeholder="Email" />
                </div>
                <div className="form-group pt-2" >
                    <input type="text" className="form-control message" id="exampleInputEmail1" aria-describedby="message" name='message'
                        onChange={handleChange} value={formData.message} placeholder="Message" />
                </div>
                <div className='pt-2'>
                    <button type="submit" className="button">Submit</button>
                </div>
            </form>
        </div>
    )
}
