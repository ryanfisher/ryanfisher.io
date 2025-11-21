import Headline from "@/components/Headline"
import H2 from "@/components/H2"
import PageWrap from "@/components/PageWrap"
import Image from "next/image"
import Paragraph from "@/components/Paragraph"
import CherryTrees1125 from "@/images/plants/cherry/20251120_163621.jpg"

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Plants", link: "/garden/plants"},
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>Cherry</Headline>
            <Image src={CherryTrees1125} alt="cherry trees in November 2025" />
            <H2>Varieties</H2>
            <ul>
                <li>Minnie Royal</li>
                <li>Royal Lee</li>
            </ul>
        </PageWrap>
    )
}