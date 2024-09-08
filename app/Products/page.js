"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Seo from "../../components/Seo";

function page() {
    const prod = [
        {
            imageUrl: "/prod/2foldblack.png",
            short_title: "2 Fold Black",
            title: "MOTHERLAND 3 Fold Black Silver Coated Umbrella (Black)",
            description:
                "Motherland Umbrella is a superior quality umbrella best for both rainy and summer season. It has thick nylon fabric with silver coating which will help you from sun rays. Also its ribs are of best quality to restrict damage from wind. It is a heavy duty umbrella can be used in all seasons. It is very compact which fits into a bag. Good choice for home, office, school and college persons.",
        },
        {
            imageUrl: "/prod/2foldcolor.png",
            short_title: "2 Fold Color",
            title: "MOTHERLAND 2 Fold Mono Silver Coated Umbrella (Color)",
            description:
                "Motherland Umbrella is a superior quality umbrella best for both rainy and summer season. It has thick nylon fabric with silver coating which will help you from sun rays. Also its ribs are of best quality to restrict damage from wind. It is a heavy duty umbrella can be used in all seasons. It is very compact which fits into a bag. Good choice for home, office, school and college persons.",
        },
        {
            imageUrl: "/prod/2foldprint.png",
            short_title: "2 Fold Print",
            title: "MOTHERLAND 2 Fold Print Umbrella (Print)",
            description:
                "Motherland Umbrella is a superior quality umbrella best for both rainy and summer season. It has thick nylon fabric with silver coating which will help you from sun rays. Also its ribs are of best quality to restrict damage from wind. It is a heavy duty umbrella can be used in all seasons. It is very compact which fits into a bag. Good choice for home, office, school and college persons.",
        },
        {
            imageUrl: "/prod/3foldblack.png",
            short_title: "3 Fold Black",
            title: "MOTHERLAND 3 Fold Black Silver Coated Umbrella (Black)",
            description:
                "Motherland Umbrella is a superior quality umbrella best for both rainy and summer season. It has thick nylon fabric with silver coating which will help you from sun rays. Also its ribs are of best quality to restrict damage from wind. It is a heavy duty umbrella can be used in all seasons. It is very compact which fits into a bag. Good choice for home, office, school and college persons.",
        },
        {
            imageUrl: "/prod/3foldcolor.png",
            short_title: "3 Fold Color",
            title: "MOTHERLAND 3 Fold Mono Silver Coated Umbrella (Color)",
            description:
                "Motherland Umbrella is a superior quality umbrella best for both rainy and summer season. It has thick nylon fabric with silver coating which will help you from sun rays. Also its ribs are of best quality to restrict damage from wind. It is a heavy duty umbrella can be used in all seasons. It is very compact which fits into a bag. Good choice for home, office, school and college persons.",
        },
        {
            imageUrl: "/prod/3foldprint.png",
            short_title: "3 Fold Print",
            title: "MOTHERLAND 3 Fold Print Umbrella (Print)",
            description:
                "Motherland Umbrella is a superior quality umbrella best for both rainy and summer season. It has thick nylon fabric with silver coating which will help you from sun rays. Also its ribs are of best quality to restrict damage from wind. It is a heavy duty umbrella can be used in all seasons. It is very compact which fits into a bag. Good choice for home, office, school and college persons.",
        },
        {
            imageUrl: "/prod/baby.png",
            short_title: "Baby Umbrella MOTHERLAND",
            title: "MOTHERLAND Baby Umbrella",
            description:
                "Motherland Umbrella is a superior quality umbrella best for both rainy and summer season. It has thick nylon fabric with silver coating which will help you from sun rays. Also its ribs are of best quality to restrict damage from wind. It is a heavy duty umbrella can be used in all seasons. It is very compact which fits into a bag. Good choice for home, office, school and college persons.",
        },
    ];
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Balaji Gift Palace Umbrella Collection",
      "image": [
        "https://balajigiftpalace.live/prod/2foldblack.png",
        "https://balajigiftpalace.live/prod/3foldcolor.png"
      ],
      "description": "Explore a wide range of umbrellas including 2 Fold Black, 3 Fold Color, and Baby Umbrellas at Balaji Gift Palace, Tamil Nadu.",
      "brand": "Motherland",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "499",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "url": "https://balajigiftpalace.live/products"
      }
  };
    return (
        <div>
            <Seo
                title="Products - Balaji Gift Palace | Wholesale and Retail Umbrellas in Tamil Nadu"
                description="Browse a wide range of umbrellas including 2 Fold Black, 3 Fold Color, Baby Umbrellas and more at Balaji Gift Palace, your one-stop shop for quality umbrellas in Tamil Nadu."
                keywords="2 Fold Black Umbrella, 3 Fold Umbrella, Baby Umbrella, Wholesale Umbrella, Tamil Nadu, Balaji Gift Palace"
                url="https://balajigiftpalace.live/products"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <h1 className="text-4xl m-4 w-5/6 border-b-2">
                Our Umbrella Collection{" "}
            </h1>
            <div className="flex flex-wrap p-2 ">
                {prod.map((product, index) => (
                    <div
                        key={index}
                        className={`my-5 w-80 h-64  mx-auto border-2 `}
                    >
                        <div className="w-5/6 h-5/6 mx-auto  relative">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                priority={index === 0}
                                quality={75}
                            />
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h2 className="text-sm px-2 font-bold">
                                {product.short_title}
                            </h2>
                            <button className="text-xs bg-yellow-500 rounded-md p-2">
                                <Link href="tel:+919442831671">Get Price</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;
