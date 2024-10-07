'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Prepare the data to send, map the form fields to EmailJS fields
        const emailData = {
            from_name: formData.name,
            to_name: 'Maciej Marchel',
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send('service_z7v8xxu', 'template_ml5fpst', emailData, 'qLYZD5W6bsKEoWT0L')
            .then(() => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            }, () => {
                setStatus('Failed to send message.');
            });
    };

    return (
        <div className="p-6 bg-base-200">
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

            {/* Social Media Section */}
            <div className="mt-12">
                <h2 className="text-xl mb-4">Check out my social media pages:</h2>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/maciej-m-marchel/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Image
                            src="https://simpleicons.org/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={24}  // specify width
                            height={24} // specify height
                            className="mr-2"
                        />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/maciejmarchel12" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Image
                            src="https://simpleicons.org/icons/github.svg"
                            alt="GitHub"
                            width={24}  // specify width
                            height={24} // specify height
                            className="mr-2"
                        />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
