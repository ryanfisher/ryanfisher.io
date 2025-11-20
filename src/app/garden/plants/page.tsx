import H2 from "@/components/H2"
import Headline from "@/components/Headline"
import PageWrap from "@/components/PageWrap"
import Paragraph from "@/components/Paragraph"
import { AREAS, PLANTS } from "../plants"

const breadcrumbs = [
    {text: "Garden", link: "/garden"}
]

type Plant = {
    plant: string
    commonName: string | null
    areaId: number
}

const AreaList = ({ name, plants }: { name: string, plants: Plant[]}) => (
    <>
        <H2>{name}</H2>
        <ul>
            {plants.map(plant => <li key={plant.plant}>{`${plant.plant}${plant.commonName ? ` (${plant.commonName})` : ''}`}</li>)}
        </ul>
    </>
)

const plantsByAreaId = (id: number): Plant[] =>
    PLANTS.filter(plant => plant.areaId === id)

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
