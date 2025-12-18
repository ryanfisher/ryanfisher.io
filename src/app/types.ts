export type Breadcrumb = {
    text: string
    link?: string
}

export type Plant = {
    name: string
    commonName: string | null
    displayName?: string
    edible?: boolean
}

export type GardenPlant = Plant & {
    areaId: number
    added?: Date
    inContainer?: boolean
    link?: string
}
