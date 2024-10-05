// src/app/contact/page.tsx
'use client'; // Mark this component as a client component

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
            setStatus('Failed to send message.');
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl mb-4">Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
            {status && <p className="mt-4">{status}</p>}
        </div>
    );
}
