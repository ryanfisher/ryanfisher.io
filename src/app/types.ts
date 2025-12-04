export type Breadcrumb = {
    text: string
    link?: string
}

export type Plant = {
    name: string
    commonName: string | null
    areaId: number
    edible?: boolean
    link?: string
    displayName?: string
}
