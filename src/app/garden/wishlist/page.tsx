import Headline from "@/components/Headline"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Wishlist"},
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>The Wishlist</Headline>
        </PageWrap>
    )
}
