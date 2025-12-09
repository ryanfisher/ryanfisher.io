export type Breadcrumb = {
    text: string
    link?: string
}

export type Plant = {
    name: string
    commonName: string | null
    areaId: number
    added?: Date
    edible?: boolean
    inContainer?: boolean
    link?: string
    displayName?: string
}
