"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";

function ContactPage() {
    const copyToClipboard = () => {
        const addressToCopy = 
            "76/A, Balaji Gift Palace, Thalavai Street, Meenakshipuram, Nagercoil, KanniyaKumari, TamilNadu";
        navigator.clipboard.writeText(addressToCopy);
    };

    const handleCallClick = () => {
        window.location.href = "tel:+919442831671";  // Phone number in international format
    };

    const handleWhatsAppClick = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=919442831671&text=Hello%20Balaji%20Gift%20Palace!", 
            "_blank"
        );  
    };

    return (
        <>
            <Head>
                
                <title>Contact Us - Balaji Gift Palace | Wholesale Umbrella Store in Tamil Nadu</title>
                <meta
                    name="description"
                    content="Contact Balaji Gift Palace, your one-stop wholesale and retail umbrella shop in Tamil Nadu. Visit us in Nagercoil or reach out via phone or WhatsApp for more information."
                />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Balaji Gift Palace, Umbrella Wholesale Tamil Nadu, Nagercoil Umbrella Store, Contact Umbrella Shop, Retail Umbrellas Tamil Nadu" />
                <link rel="canonical" href="https://balajigiftpalace.live/contact" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Contact Balaji Gift Palace | Umbrella Wholesale Store in Tamil Nadu" />
                <meta
                    property="og:description"
                    content="Visit Balaji Gift Palace, a premier wholesale and retail umbrella shop in Nagercoil, Tamil Nadu. Contact us today for more details."
                />
                <meta property="og:url" content="https://balajigiftpalace.live/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://balajigiftpalace.live/images/contact-us.jpg" />

                {/* Structured Data - Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Store",
                            "name": "Balaji Gift Palace",
                            "description": "Wholesale and retail umbrella shop in Tamil Nadu",
                            "image": "https://balajigiftpalace.live/images/contact-us.jpg",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "76/A, Thalavai Street, Meenakshipuram",
                                "addressLocality": "Nagercoil",
                                "addressRegion": "Tamil Nadu",
                                "postalCode": "629001",
                                "addressCountry": "IN",
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "8.1821166",
                                "longitude": "77.4367488",
                            },
                            "url": "https://balajigiftpalace.live",
                            "telephone": "+91-9442831671",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-9442831671",
                                "contactType": "customer service",
                                "availableLanguage": ["English", "Tamil"],
                            },
                        }),
                    }}
                />
            </Head>

            <div className="min-h-screen w-full p-4 pt-6">
                {/* Main Heading */}
                <h1 className="border-b-2 text-black border-[#b4b3b39d] w-5/6 mx-auto text-2xl text-center">
                    Contact Balaji Gift Palace
                </h1>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">Locate Us</h2>
                    <div className="mt-2">
                        {/* Google Map Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15796.819061037952!2d77.4367488!3d8.1821166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f100ef315961%3A0x4decf05880125e42!2sBajaji%20gift%20palace!5e0!3m2!1sen!2sin!4v1725716279716!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-64 border-2"
                        ></iframe>
                    </div>
                </section>

                <section className="mt-6">
                    {/* Address Information */}
                    <h3 className="text-xl font-bold">Address</h3>
                    <p className="text-lg mt-2">
                        76/A, Balaji Gift Palace, <br />
                        Thalavai Street, <br />
                        Meenakshipuram, <br />
                        Nagercoil, <br />
                        KanniyaKumari, <br />
                        TamilNadu, <br />
                        India - 629001
                    </p>
                    <button
                        onClick={copyToClipboard}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Copy Address
                    </button>
                </section>

                <section className="mt-6">
                    {/* Contact Icons with Actions */}
                    <h3 className="text-xl font-bold">Get in Touch</h3>
                    <div className="flex justify-evenly items-center my-6">
                        <div className="text-center">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-6xl border-2 rounded-full p-4 mx-2 cursor-pointer"
                                alt="Phone Icon"
                                onClick={handleCallClick}
                            />
                            <p className="text-lg mt-2">Call Us</p>
                        </div>

                        <div className="text-center">
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="text-6xl border-2 rounded-full p-4 mx-2 cursor-pointer"
                                alt="WhatsApp Icon"
                                onClick={handleWhatsAppClick}
                            />
                            <p className="text-lg mt-2">WhatsApp</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactPage;
