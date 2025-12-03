import H2 from "@/components/H2"
import Headline from "@/components/Headline"
import List from "@/components/List"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import Link from "next/link"

const breadcrumbs = [
    {text: "Garden"},
]

const inspirationItems = [
    {
        node: <Link href="/garden/botanical-gardens">Botanical Gardens</Link>,
        key: "1"
    },
]

const resourceItems = [
    {
        node: <Link href="https://www.junglemusic.net/palmadvice/palms-seed-germination.htm">
            Palm Seed Germination
        </Link>
    }
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>The Garden</Headline>
            <Paragraph><Link href="/garden/plants">the plant list</Link></Paragraph>
            <H2>Inspiration</H2>
            <Paragraph>
                <List items={inspirationItems} />
            </Paragraph>
            <H2>Resources</H2>
            <Paragraph>
                <List items={resourceItems} />
            </Paragraph>
        </PageWrap>
    )
}
