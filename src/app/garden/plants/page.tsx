import H2 from "@/components/H2"
import Headline from "@/components/Headline"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import { AREAS, plantsByAreaId } from "../plants"
import Link from "next/link"
import { Plant } from "@/app/types"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plants in the Garden - Ryan Fisher",
  description: "The garden has a few themed areas with a variety of edible, sub-tropical, and drought tolerant plants.",
}

const breadcrumbs = [
    {text: "Garden", link: "/garden"},
    {text: "Plants"},
]

const PlantListItem = ({ plant }: { plant: Plant }) => (
    <li>
        {plant.link ? <Link href={plant.link}>{plant.displayName}</Link> : plant.displayName}
    </li>
)

const AreaList = ({ name, plants }: { name: string, plants: Plant[]}) => (
    <>
        <H2>{name}</H2>
        <ul>
            {plants.map(plant => <PlantListItem  key={plant.name} plant={plant} />)}
        </ul>
    </>
)

export default async function Page() {
    return (
        <PageWrap showHomeNav breadcrumbs={breadcrumbs}>
            <Headline>The Plant List</Headline>
            <Paragraph>
                This is a list of all the plants you can find in my garden
                separated by areas. Each area is very loosely themed with a
                focus on certain types of plants. But you'll find I have
                trouble sticking to a theme when there are so many plants to
                grow!
            </Paragraph>

            {AREAS.map((area, index) => <AreaList name={area.name} plants={plantsByAreaId(index)} key={index} />)}
        </PageWrap>
    )
}
