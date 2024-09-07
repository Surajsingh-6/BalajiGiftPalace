
import Link from "next/link";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className="min-h-screen w-full">
            <Seo />
            <main className="min-h-screen w-full p-1 flex overflow-hidden- flex-col items-center bg-[url('/image.png')] bg-center bg-cover text-white font-bold">
                <header>
                    <h1 className="playfair-display-sc-bold-italic text-4xl text-center w-full m-4 mt-24">
                        Quality <br /> Umbrellas At <br /> Unbeatable <br />{" "}
                        Prices Across <br /> TamilNadu!
                    </h1>
                </header>

                <Link href="/Products">
                    <button className="border-2 border-black p-2 w-fit prata rounded-2xl text-3xl bg-[#00000023] my-16">
                        Explore Umbrellas
                    </button>
                </Link>

                <section className="mt-10 font-medium text-xl font-serif text-center">
                    <p>
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            className="text-xs h-6 inline mr-3 mb-1"
                        />
                        Wholesale and Retail
                    </p>
                    <p className="mt-4">
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            className="text-xs h-6 inline mr-3 mb-1"
                        />
                        Lowest Prices in All of Tamil Nadu
                    </p>
                </section>
            </main>
        </div>
    );
}
