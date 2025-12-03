import H2 from "@/components/H2";
import H3 from "@/components/H3";
import Headline from "@/components/Headline";
import PageWrap from "@/components/PageWrap";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Botanical Gardens"},
]

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>Botanical Gardens</Headline>
            <H2>Favorite Gardens</H2>
            <Paragraph>
                <H3>Water Conservation Garden</H3>
                <Link href="http://thegarden.org/" target="_blank">thegarden.org</Link><br />
                The Water Conservation Garden, as might be guessed from the name, focuses primarily on plants for low water gardens.
            </Paragraph>
            <Paragraph>
                <H3>San Diego Botanic Garden</H3>
                <Link href="http://sdbg.org/" target="_blank">sdbg.org</Link><br />
                A very large garden with several different areas including a fun children's garden, a California native area, a bamboo garden, and many more.
            </Paragraph>
            <Paragraph>
                <H3>San Diego Zoo</H3>
                <Link href="https://animals.sandiegozoo.org/plants" target="_blank">animals.sandiegozoo.org/plants</Link><br />
                While most might don't think of the zoo as a botanical garden, the plant collection is very impressive. There are several different plant collections. The zoo offers occasional botanical tours and a lot of information on their website.
            </Paragraph>
        </PageWrap>
    )
}
