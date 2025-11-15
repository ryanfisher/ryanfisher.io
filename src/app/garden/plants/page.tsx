import H2 from "@/components/H2"
import Headline from "@/components/Headline"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import Link from "next/link"

const breadcrumbs = [
    {text: "garden", link: "/garden"}
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>The Plant List</Headline>
            <Paragraph>
                This is a list of all the plants you can find in my garden
                separated by areas. Each area is very loosely themed with a
                focus on certain types of plants. But you'll find I have
                trouble sticking to a theme when there are so many plants to
                grow!
            </Paragraph>

            <H2>The (Mostly) Drought Tolerant Front Yard Garden</H2>

            <Paragraph>
            <ul>
                <li>Senecio mandraliscae (Blue Chalksticks)</li>
                <li>Agave 'Blue Flame'</li>
                <li>Agave 'Blue Glow'</li>
                <li>Aloe 'Blue Elf'</li>
                <li>Euphorbia tirucalli 'Sticks on Fire'</li>

                <li>Rosemary</li>
                <li>Lavender</li>

                <li>Pomegranate 'Wonderful'</li>
                <li>Citrus 'Moro' (Blood Orange)</li>
                <li>Citrus 'Cara Cara' (2024-03-24)</li>

                <li>Philodendron selloum</li>

                <li>Strelitzia nicolai</li>
                <li>Strelitzia reginae</li>
                <li>Cordyline australis</li>
                <li>Otatea acuminata (Mexican Weeping Bamboo)</li>
                <li>Agave attenuata</li>
            </ul>
            </Paragraph>

            <H2>The Small Side Garden</H2>

            <Paragraph>
                <ul>
                    <li>Bambusa multiplex 'Alphonse Karr'</li>
                    <li>Strelitzia nicolai</li>
                    <li>Bambusa chungii 'Barbelletta' (Blue Bamboo)</li>
                    <li>Blue Java Banana (Ice Cream Banana)</li>
                    <li>Jasmine</li>
                </ul>
            </Paragraph>

            <H2>The Sub-Tropical Garden (Lower Backyard)</H2>

            <Paragraph>
                <ul>
                <li>Chamaedorea plumosa</li>
                <li>Chamaedorea costaricana</li>
                <li>Ficus elastica 'Burgundy'</li>
                <li>Canna 'Pretoria'</li>
                <li>Philodendron bipinnatifidum ‘Xanadu’</li>
                <li>Monstera deliciosa</li>
                <li>Himalayacalamus hookerianus 'Teague's Blue'</li>

                <li>Passiflora edulis (Passionfruit) 'Frederick'</li>

                <li>Bambusa New Guinea Black</li>

                <li>Aloe arborescens</li>
                <li>Plumeria rubra</li>

                <li>Citrus 'Bearss Lime'</li>

                <li>Archontophoenix alexandrae (King Palm)</li>
                <li>Syagrus romanzoffiana (Queen Palm)</li>
                <li>Dracaena marginata</li>
                <li>Cordyline fruticosa (Ti Plant)</li>
                <li>Hibiscus</li>

                <li>Nephrolepsis exaltata (Boston Fern)</li>
                <li>Cyperus papyrus</li>
                <li>Colocasia esculenta 'Coal Miner'</li>
                </ul>
            </Paragraph>

            <H2>The Upper Backyard (Mediterranean Influenced Garden)</H2>
            <Paragraph>
                <ul>
                <li>Citrus 'Moro' (Blood Orange)</li>
                <li>Bougainvillea 'San Diego Red'</li>
                <li>Pomegranate 'Angel Red'</li>
                <li>Feijoa sellowiana (Pineapple Guava)</li>
                <li>Citrus 'Murcott Mandarin'</li>

                <li>Citrus 'Key Lime'</li>
                <li>Citrus 'Meyer Improved Lemon'</li>
                <li>Citrus 'Eureka Lemon'</li>
                <li>Pineapple Guava 'Nazemetz'</li>

                <li>Panache 'Tiger' Fig</li>
                <li>Kadota Fig</li>

                <li>Avocado 'Fuerte'</li>
                <li>Avocado 'Hass'</li>

                <li>Apple 'Anna'</li>
                <li>Apple 'Dorsett Golden'</li>
                <li>Blueberry 'Misty'</li>
                <li>Blueberry 'O'Neal'</li>

                <li>Artichoke</li>
                <li>Acanthus mollis (Bear's Breech)</li>
                <li>Alstroemeria (Peruvian Lily)</li>
                <li>Loquat 'Gold Nugget'</li>

                <li>Loquat 'Champagne'</li>

                <li>Blue Java Banana (Ice Cream Banana)</li>

                <li>Cherry 'Minnie Royal'</li>
                <li>Cherry 'Royal Lee'</li>
                </ul>
            </Paragraph>
        </PageWrap>
    )
}
