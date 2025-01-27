'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';


const ContactSalesPage: React.FC = () => {
    const searchParams = useSearchParams();
    const fromParam = searchParams.get('from') || 'Direct';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Reset errors on change
    };

    const validate = () => {
        let valid = true;
        let newErrors = { name: '', email: '', company: '', phone: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
            valid = false;
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company is required.';
            valid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const whatsappNumber = '918152987692';
            const message = `*New Sales Inquiry*\nFrom: ${fromParam}\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
            // Reset form
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: '',
            });
        }
    };

    // Helper function to determine input styles
    const getInputStyles = (fieldValue: string) => {
        return fieldValue
            ? 'bg-blue-100 text-gray-800 border-green-500'
            : 'bg-white text-gray-700 border-gray-300';
    };

    return (
        <main className="bg-white min-h-screen mt-12 flex flex-col items-center justify-start pt-20 pb-16 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Sales</h1>
            <p className="text-gray-600 mb-8 text-center max-w-screen-md">
                We're here to help you with all your questions regarding our products and services.
                Fill out the form below, and a member of our sales team will get back to you soon.
            </p>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-8"
            >
                {/* Hidden field passing the "from" param */}
                <input type="hidden" name="from" value={fromParam} />

                {/* Row 1: Name & Email */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${getInputStyles(formData.name)}`}
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${getInputStyles(formData.email)}`}
                            placeholder="example@email.com"
                        />
                    </div>
                </div>

                {/* Row 2: Company & Phone */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <label htmlFor="company" className="block mb-2 text-sm font-semibold text-gray-700">
                            Company
                        </label>
                        <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${getInputStyles(formData.company)}`}
                            placeholder="Your Company"
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700">
                            Phone
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${getInputStyles(formData.phone)}`}
                            placeholder="+966 560 700103"
                        />
                    </div>
                </div>

                {/* Row 3: Message */}
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${getInputStyles(formData.message)}`}
                        placeholder="Tell us about your needs..."
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                >
                    Send Inquiry for {fromParam}
                </button>
                <p className="text-sm text-gray-600 mt-4 text-center">
                    Not for {fromParam}?{' '}
                    <Link href="/solutions"
                        className="text-blue-600 hover:underline"
                    >
                        Change
                    </Link>
                </p>
            </form>
        </main>
    );

};

export default ContactSalesPage;