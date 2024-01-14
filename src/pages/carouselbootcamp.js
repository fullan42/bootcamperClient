import Link from "next/link";
import Image from "next/image";
import Card from "@/pages/bootcamptcard";
import Carouselimgcard from "@/pages/carouselimgcard";

const bootcamps = [
        {
      "link": "https://www.patika.dev/bootcamp/solana-acceleration-bootcamp",
      "name": "Advanced Solana Bootcamp ",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/659e3e70ae94d60be79bd925_Advanced%20Solana%20Bootcamp%20yatay.png",
      "date": "29/1/2024 - 3/3/2024",
      "place": "🌍 Turkey"
    },
    {
      "link": "https://www.patika.dev/programlar/gusto-remoteteam-node-js-bootcamp",
      "name": "Gusto & RemoteTeam Node.js Bootcamp ",
      "img_url": "https://assets-global.website-files.com/6097e0eca1e875de53031ff6/6193e6a9465e0462559cc0e8_remoteteam%20tw_v0.3.png",
      "date": "18/12/2021 - 6/2/2022",
      "place": "🌍"
    },
];
const carouselbootcamp = () => {
    return (
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-20 mt-4 mx-60">
            {bootcamps.map((bootcamp, index) => (
                <Carouselimgcard key={index} {...bootcamp} />
            ))}
        </div>
    );
};

export default carouselbootcamp;
