import Headline from "@/components/Headline"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import Link from "next/link"

export default async function Page() {
    return (
        <PageWrap showHomeNav>
            <Headline>The Garden</Headline>
            <Paragraph><Link href="/garden/plants">the plant list</Link></Paragraph>
        </PageWrap>
    )
}
