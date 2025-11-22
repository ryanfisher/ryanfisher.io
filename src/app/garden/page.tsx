import Headline from "@/components/Headline"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import Link from "next/link"

const breadcrumbs = [
    {text: "Garden"},
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>The Garden</Headline>
            <Paragraph><Link href="/garden/plants">the plant list</Link></Paragraph>
        </PageWrap>
    )
}
