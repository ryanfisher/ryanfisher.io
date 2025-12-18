import H2 from "@/components/H2"
import Headline from "@/components/Headline"
import List from "@/components/List"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import Link from "@/components/Link"

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
        node: <span><Link href="https://www.floragrubb.com/" external>
            Flora Grubb Gardens
        </Link> - Garden store in LA and SF. Lots of plant info.</span>,
    },
    {
        node: <Link href="https://www.junglemusic.net/palmadvice/palms-seed-germination.htm" external>
            Palm Seed Germination
        </Link>,
    },
    {
        node: <Link href="https://waterwisegardenplanner.org/" external>
            Waterwise Garden Planner
        </Link>,
    }
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>The Garden</Headline>
            <Paragraph>
                <Link href="/garden/plants">the plant list</Link>
                <br />
                <Link href="/garden/wishlist">the wishlist</Link>
            </Paragraph>
            <H2>Inspiration</H2>
            <List items={inspirationItems} />
            <H2>Resources</H2>
            <List items={resourceItems} />
        </PageWrap>
    )
}
