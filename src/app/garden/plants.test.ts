import { plantName, plantsByAreaId } from "./plants"

describe("#plantName", () => {
    it("returns name as expected", () => {
        const fig = {
            name: "Ficus carica 'Kadota'",
            commonName: "Fig 'Kadota'",
            areaId: 3,
            edible: true
        }
        expect(plantName(fig)).toEqual("Fig 'Kadota'")

        const strelitzia = {
            name: "Strelitzia nicolai",
            commonName: "Giant White Bird of Paradise",
            areaId: 1
        }
        expect(plantName(strelitzia)).toEqual("Strelitzia nicolai (Giant White Bird of Paradise)")

        const lime = {
            name: "Citrus 'Key Lime'",
            commonName: null,
            areaId: 3,
            edible: true
        }
        expect(plantName(lime)).toEqual("Citrus 'Key Lime'")
    })
})

describe("plantsByAreaId", () => {
    it("returns a sorted array", () => {
        expect(plantsByAreaId(1).find(plant => plant.commonName === "Blue Bamboo")).not.toBeNull()
    })
})