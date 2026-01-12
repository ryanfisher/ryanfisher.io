import Headline from "@/components/Headline"
import H2 from "@/components/H2"
import PageWrap from "@/components/PageWrap"
import Image from "next/image"
import Paragraph from "@/components/Paragraph"
import ChampagneLoquatImage from "@/images/plants/loquat/champagne-20241016_175314.jpg"
import GoldNuggetLoquatImage from "@/images/plants/loquat/gold-nugget-20240324_174654.jpg"

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Plants", link: "/garden/plants"},
    {text: "Loquat"},
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>Loquat</Headline>
            <Paragraph>
                Gold Nugget was my first Loquat variety. This picture was taken in March 2024.
                <Image src={GoldNuggetLoquatImage} alt="Gold Nugget Loquat" />
            </Paragraph>
            <Paragraph>
                A Champagne variety was added later. This image is from October 2024.
                <Image src={ChampagneLoquatImage} alt="Champagne Loquat in October 2024" />
            </Paragraph>
            <H2>Varieties</H2>
            <ul>
                <li>Gold Nugget</li>
                <li>Champagne</li>
            </ul>
        </PageWrap>
    )
}
