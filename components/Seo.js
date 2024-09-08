// components/Seo.js
import Head from "next/head";

const Seo = () => {
    return (
        <Head>
            <title>
                Balaji Gift Palace - Quality Umbrellas at Unbeatable Prices
            </title>
            <meta
                name="description"
                content="Discover the best quality umbrellas at unbeatable prices across Tamil Nadu. Wholesale and retail options available at Balaji Gift Palace."
            />
            <meta
                name="keywords"
                content="Balaji gift palace umbrellas,Balaji Gift Palace shop, Gift shop near me , Umbrella shop near me, Umbrella shop near me in nagercoil, Balaji Gift palace in Nagercoil  , wholesale umbrellas, retail umbrellas, Balaji Gift Palace Umbrella shop in nagercoil, affordable umbrellas, best umbrellas in Tamil Nadu, Umbrella shop in nagercoil , umbrella shop in tamilnadu, umbrella shop in kanyakumari, umbrella shop in marthandam, umbrella shop in thuckalay, umbrella shop in trivandrum, umbrella shop in kerala, umbrella shop in kanyakumari district"
            />
            <meta name="author" content="Balaji Gift Palace" />
            <meta
                property="og:title"
                content="Balaji Gift Palace - Quality Umbrellas"
            />
            <meta
                property="og:description"
                content="Wholesale and retail umbrellas at unbeatable prices in Tamil Nadu."
            />
            <meta property="og:image" content="/image.png" />
            <meta
                property="og:url"
                content="https://balajigiftpalace.live"
            />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                name="twitter:title"
                content="Balaji Gift Palace - Quality Umbrellas"
            />
            <meta
                name="twitter:description"
                content="Discover unbeatable prices for wholesale and retail umbrellas in Tamil Nadu."
            />
            <meta name="twitter:image" content="/image.png" />
            <link rel="canonical" href="https://balajigiftpalace.live" />
        
            <script type="application/ld+json">
                {{
                    "@context": "https://schema.org",
                    "@type": "Store",
                    name: "Balaji Gift Palace",
                    description:
                        "Quality umbrellas at unbeatable prices for wholesale and retail in Tamil Nadu.",
                    image: "https://balajigiftpalace.live/image.png",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Your street address",
                        addressLocality: "Tamil Nadu",
                        addressRegion: "TN",
                        postalCode: "Your postal code",
                        addressCountry: "IN",
                    },
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: "Your latitude",
                        longitude: "Your longitude",
                    },
                    url: "https://balajigiftpalace.live",
                    telephone: "+91-9442831671",
                }}
            </script>
        </Head>
    );
};

export default Seo;
