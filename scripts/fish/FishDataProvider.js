const fishCollection = [{
        name: "Freddie",
        food: "Shrimp",
        species: "Lion Fish",
        length: 6,
        location: "Great Barrier Reef",
        image: "images/lionFish.jpg"

    },
    {
        name: "Spot",
        food: "Small fish",
        species: "Red Drum",
        length: 28,
        location: "Indian River Lagoon",
        image: "images/red-drum.jpg"
    },
    {
        name: "Tammy",
        food: "Crustaceans",
        species: "Striped MandarinFish",
        length: 2,
        location: "Caribbean",
        image: "images/Striped-Mandarinfish.png"
    }, {
        name: "Freddie",
        food: "Shrimp",
        species: "Lion Fish",
        length: 10,
        location: "Great Barrier Reef",
        image: "images/lionFish.jpg"

    },
    {
        name: "Spot",
        food: "Small fish",
        species: "Red Drum",
        length: 25,
        location: "Indian River Lagoon",
        image: "images/red-drum.jpg"
    },
    {
        name: "Tammy",
        food: "Crustaceans",
        species: "Striped MandarinFish",
        length: 18,
        location: "Caribbean",
        image: "images/Striped-Mandarinfish.png"
    }, {
        name: "Spot",
        food: "Small fish",
        species: "Red Drum",
        length: 15,
        location: "Indian River Lagoon",
        image: "images/red-drum.jpg"
    },
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const fishes of fishCollection) {
        if (fishes.length % 3 === 0) {
            holyFish.push(fishes)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fishes of fishCollection)
        if (fishes.length % 5 === 0 && fishes.length % 3 !== 0) {
            soldiers.push(fishes)
        }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const nonHoly = []
    for (const fishes of fishCollection)
        if (fishes.length % 5 !== 0 && fishes.length % 3 !== 0) {
            nonHoly.push(fishes)
        }
    return nonHoly
}