import Headline from "@/components/Headline"
import H2 from "@/components/H2"
import PageWrap from "@/components/PageWrap"
import Image from "next/image"
import Paragraph from "@/components/Paragraph"
import chungiiImage from "@/images/plants/bamboo/bambusa-chungii-20240407_181511.jpg"
import alphonseKarrImage from "@/images/plants/bamboo/bambusa-alphonse-karr-20240407_181205.jpg"
import H3 from "@/components/H3"

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Plants", link: "/garden/plants"},
    {text: "Bamboo"},
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>Bamboo</Headline>
            <H2>In the garden</H2>
            <Paragraph>I have a small collection of clumping bamboos.</Paragraph>
            <H3>Bambusa 'New Guinea Black'</H3>
            <H3>Bambusa chungii 'Barbelletta'</H3>
            <Paragraph>
                <Image src={chungiiImage} alt="image of Bambusa bhungii 'Barbelletta'" />
            </Paragraph>
            <H3>Bambusa multiplex 'Alphonse Karr'</H3>
            <Paragraph>
                <Image src={alphonseKarrImage} alt="image of Alphone Karr" />
            </Paragraph>
        </PageWrap>
    )
}
