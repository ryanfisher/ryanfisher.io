import Headline from "@/components/Headline"
import List from "@/components/List"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Wishlist"},
]

const wishlist = [
    {node: "Aloe 'Hercules'"},
    {node: "Aloe Tongaensis 'Medusa' (Mozambique Tree Aloe)"},
    {node: "Aloidendron barberae (Tree Aloe)"},
    {node: "Dypsis lutescens (Areca Palm)"},
    {node: "Fig (various varieties)"}
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>The Wishlist</Headline>
            <List items={wishlist} />
        </PageWrap>
    )
}
