import PageWrap from "@/components/PageWrap"
import Headline from "@/components/Headline"

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Plants", link: "/garden/plants"},
    {text: "Avocado"},
]


export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>Avocado</Headline>
        </PageWrap>
    )
}
