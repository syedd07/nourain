'use client';
import React, { useState } from 'react';

interface CardItem {
    id: number;
    title: string;
    body: string;
    image: string;
}

// Card component with image & hover effect
const Card: React.FC<CardItem> = ({ title, body, image }) => {
    return (
        <div className="card group relative w-58 h-80 bg-gray-100 border-2 border-gray-300 rounded-2xl p-4 transition duration-500 ease-out overflow-visible hover:border-blue-500 hover:shadow-lg">
            {/* Card Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-44 object-cover rounded-md mb-2"
            />
            <div className="card-details text-black h-auto grid place-content-center gap-1">
                <p className="text-title text-lg font-bold">{title}</p>
                <p className="text-body text-gray-600">{body}</p>
            </div>
            <button className="card-button absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[125%] w-3/5 rounded-xl border-none bg-blue-500 text-white text-sm py-2 opacity-0 transition duration-300 ease-out hover:bg-blue-600 group-hover:translate-y-1/2 group-hover:opacity-100">
                More info
            </button>
        </div>
    );
};

const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'SuperbSigns' | 'NexCool' | 'Wayfindings'>('SuperbSigns');

    // Updated data for each tab with image URLs
    const cardsData: Record<'SuperbSigns' | 'NexCool' | 'Wayfindings', CardItem[]> = {
        SuperbSigns: [
            {
                id: 1,
                title: 'Signages',
                body: 'High-quality signages tailored to your brand.',
                image: '/images/signage.jpg',
            },
            {
                id: 2,
                title: 'Vinyl Graphics',
                body: 'Durable vinyl graphics for indoor and outdoor use.',
                image: '/images/vinyl-graphics.jpg',
            },
            {
                id: 3,
                title: 'Channel Letters',
                body: '3D letters to enhance visibility and style.',
                image: '/images/3d-signage.webp',
            },
            {
                id: 4,
                title: 'Digital Displays',
                body: 'Eye-catching digital signage solutions.',
                image: '/images/digital-signage.jpg',
            },
        ],
        NexCool: [
            {
                id: 1,
                title: 'HVAC Installation',
                body: 'Professional HVAC system setup and support.',
                image: '/images/hvac.jpg',
            },
        ],
        Wayfindings: [
            {
                id: 1,
                title: 'Directional Signage',
                body: 'Help people navigate large facilities with ease.',
                image: '/images/wayfinding-sign.jpg',
            },
        ],
    };

    return (
        <>
        {/* Services Section */}
        <section className="py-12 px-4 sm:px-10 mx-8 bg-gray-100 shadow-xl rounded-lg">
            <h1 
                className="mb-8 mt-32 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                style={{ cursor: "url('/images/thinking.png') 32 32, auto" }}
            >
                What We Offer
            </h1>
            <p className="mb-12 text-lg text-gray-500 lg:text-xl lg:leading-relaxed">
                Here's a quick overview of all the services we provide. We strive to offer solutions that meet your needs and exceed your expectations.
            </p>

            {/* Tabs */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <button
                            onClick={() => setActiveTab('SuperbSigns')}
                            className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'SuperbSigns'
                                ? 'text-blue-600 border-blue-600'
                                : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            SuperbSigns
                        </button>
                    </li>
                    <li className="mr-2">
                        <button
                            onClick={() => setActiveTab('NexCool')}
                            className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'NexCool'
                                ? 'text-blue-600 border-blue-600'
                                : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            NexCool
                        </button>
                    </li>
                    <li className="mr-2">
                        <button
                            onClick={() => setActiveTab('Wayfindings')}
                            className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'Wayfindings'
                                ? 'text-blue-600 border-blue-600'
                                : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            Wayfindings
                        </button>
                    </li>
                </ul>
            </div>

            {/* Cards */}
            {/* Reduced gap to 'gap-4' for tighter spacing */}
            <div className="mt-6 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {cardsData[activeTab].map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        body={card.body}
                        image={card.image}
                    />
                ))}
            </div>
            <div className='mb-16'></div>
        </section>
        </>
    );
};

export default Services;