import { Plant } from "../types"

export const AREAS = [
    {
        name: "The (Mostly) Drought Tolerant Front Yard Garden"
    },
    {
        name: "The Small Side Garden"
    },
    {
        name: "The Sub-Tropical Garden (Lower Backyard)"
    },
    {
        name: "The Upper Backyard (Mediterranean Influenced Edible Garden)"
    }
]

export const PLANTS: Plant[] = [
    // ---------------------------
    // 0: The (Mostly) Drought Tolerant Front Yard Garden
    // ---------------------------
    { name: "Senecio mandraliscae", commonName: "Blue Chalksticks", areaId: 0 },
    { name: "Agave 'Blue Flame'", commonName: null, areaId: 0 },
    { name: "Agave 'Blue Glow'", commonName: null, areaId: 0 },
    { name: "Aloe 'Blue Elf'", commonName: null, areaId: 0 },
    { name: "Euphorbia tirucalli", commonName: "Sticks on Fire", areaId: 0 },
    { name: "Rosmarinus officinalis", commonName: "Rosemary", areaId: 0 },
    { name: "Lavandula", commonName: "Lavender", areaId: 0 },
    { name: "Punica granatum 'Wonderful'", commonName: "Pomegranate 'Wonderful'", areaId: 0, edible: true },
    { name: "Citrus 'Moro'", commonName: null, areaId: 0, edible: true },
    { name: "Citrus 'Cara Cara'", commonName: null, areaId: 0, edible: true },
    { name: "Philodendron selloum", commonName: null, areaId: 0 },
    { name: "Strelitzia nicolai", commonName: "Giant White Bird of Paradise", areaId: 0 },
    { name: "Strelitzia reginae", commonName: "Bird of Paradise", areaId: 0 },
    { name: "Cordyline australis", commonName: null, areaId: 0 },
    { name: "Otatea acuminata", commonName: "Mexican Weeping Bamboo", areaId: 0 },
    { name: "Agave attenuata", commonName: null, areaId: 0 },

    // ---------------------------
    // 1: The Small Side Garden
    // ---------------------------
    { name: "Bambusa multiplex 'Alphonse Karr'", commonName: null, areaId: 1, link: "/garden/plants/bamboo" },
    { name: "Strelitzia nicolai", commonName: "Giant White Bird of Paradise", areaId: 1 },
    { name: "Bambusa chungii 'Barbelletta'", commonName: "Blue Bamboo", areaId: 1, link: "/garden/plants/bamboo" },
    { name: "Blue Java Banana", commonName: "Ice Cream Banana", areaId: 1 },
    { name: "Jasmine", commonName: null, areaId: 1 },

    // ---------------------------
    // 2: The Sub-Tropical Garden (Lower Backyard)
    // ---------------------------
    { name: "Chamaedorea plumosa", commonName: null, areaId: 2 },
    { name: "Chamaedorea costaricana", commonName: null, areaId: 2 },
    { name: "Ficus elastica 'Burgundy'", commonName: "Rubber Plant 'Burgundy'", areaId: 2 },
    { name: "Canna 'Pretoria'", commonName: null, areaId: 2 },
    { name: "Philodendron bipinnatifidum 'Xanadu'", commonName: null, areaId: 2 },
    { name: "Monstera deliciosa", commonName: "Monstera", areaId: 2 },
    { name: "Himalayacalamus hookerianus 'Teague's Blue'", commonName: null, areaId: 2 },
    { name: "Passiflora edulis 'Frederick'", commonName: "Passionfruit 'Frederick'", areaId: 2, edible: true },
    { name: "Bambusa 'New Guinea Black'", commonName: null, areaId: 2, link: "/garden/plants/bamboo" },
    { name: "Bambusa chungii 'Barbelletta'", commonName: "Blue Bamboo", areaId: 2, link: "/garden/plants/bamboo" },
    { name: "Aloe arborescens", commonName: null, areaId: 2 },
    { name: "Plumeria rubra", commonName: "Frangipani", areaId: 2 },
    { name: "Citrus 'Bearss Lime'", commonName: null, areaId: 2, edible: true },
    { name: "Archontophoenix alexandrae", commonName: "King Palm", areaId: 2 },
    { name: "Syagrus romanzoffiana", commonName: "Queen Palm", areaId: 2 },
    { name: "Dracaena marginata", commonName: "Dragon Tree", areaId: 2 },
    { name: "Cordyline fruticosa", commonName: "Ti Plant", areaId: 2 },
    { name: "Hibiscus", commonName: null, areaId: 2 },
    { name: "Nephrolepis exaltata", commonName: "Boston Fern", areaId: 2 },
    { name: "Cyperus papyrus", commonName: "Papyrus", areaId: 2 },
    { name: "Colocasia esculenta 'Coal Miner'", commonName: null, areaId: 2 },
    {
        name: "Dracaena draco",
        commonName: "Dragon Tree",
        inContainer: true,
        areaId: 2,
        added: new Date("2025-12-7")
    },

    // ---------------------------
    // 3: The Upper Backyard (Mediterranean Influenced Edible Garden)
    // ---------------------------
    { name: "Bougainvillea 'San Diego Red'", commonName: null, areaId: 3 },
    {
        name: "Punica granatum 'Angel Red'",
        commonName: "Pomegranate 'Angel Red'",
        areaId: 3,
        edible: true
    },
    {
        name: "Feijoa sellowiana",
        commonName: "Pineapple Guava",
        areaId: 3,
        edible: true
    },
    {
        name: "Citrus 'Murcott Mandarin'",
        commonName: null,
        areaId: 3,
        edible: true
    },
    { name: "Citrus 'Key Lime'", commonName: null, areaId: 3, edible: true },
    { name: "Citrus 'Meyer Improved Lemon'", commonName: null, areaId: 3, edible: true },
    { name: "Citrus 'Eureka Lemon'", commonName: null, areaId: 3, edible: true },
    { name: "Feijoa sellowiana 'Nazemetz'", commonName: "Pineapple Guava 'Nazemetz'", areaId: 3, edible: true },
    { name: "Ficus carica 'Panache Tiger'", commonName: "Fig 'Panache'", areaId: 3, edible: true },
    { name: "Ficus carica 'Kadota'", commonName: "Fig 'Kadota'", areaId: 3, edible: true },
    { name: "Persea americana 'Fuerte'", commonName: "Avocado 'Fuerte'", areaId: 3, edible: true },
    { name: "Persea americana 'Hass'", commonName: "Avocado 'Hass'", areaId: 3, edible: true },
    { name: "Malus domestica 'Anna'", commonName: "Apple 'Anna'", areaId: 3, edible: true },
    { name: "Malus domestica 'Dorsett Golden'", commonName: "Apple 'Dorsett Golden'", areaId: 3, edible: true },
    { name: "Vaccinium 'Misty'", commonName: "Blueberry 'Misty'", areaId: 3, edible: true },
    { name: "Vaccinium 'O'Neal'", commonName: "Blueberry 'O'Neal'", areaId: 3, edible: true },
    { name: "Artichoke", commonName: null, areaId: 3, edible: true },
    { name: "Acanthus mollis", commonName: "Bear's Breech", areaId: 3 },
    { name: "Alstroemeria", commonName: "Peruvian Lily", areaId: 3 },
    { name: "Eriobotrya japonica 'Gold Nugget'", commonName: "Loquat 'Gold Nugget'", areaId: 3, edible: true },
    { name: "Eriobotrya japonica 'Champagne'", commonName: "Loquat 'Champagne'", areaId: 3, edible: true },
    { name: "Blue Java Banana", commonName: "Ice Cream Banana", areaId: 3, edible: true },
    { name: "Prunus avium 'Minnie Royal'", commonName: "Cherry 'Minnie Royal'", areaId: 3, link: "/garden/plants/cherry", edible: true },
    { name: "Prunus avium 'Royal Lee'", commonName: "Cherry 'Royal Lee'", areaId: 3, link: "/garden/plants/cherry", edible: true },
]

export const plantName = (plant: Plant): string =>
    plant.edible ?
    (plant.commonName || plant.name) :
    `${plant.name}${plant.commonName ? ` (${plant.commonName})` : ''}`

export const plantsByAreaId = (id: number): Plant[] =>
    PLANTS
        .filter(plant => plant.areaId === id)
        .map(plant => ({...plant, displayName: plantName(plant)}))
        .sort((a, b) => a.displayName.localeCompare(b.displayName))
