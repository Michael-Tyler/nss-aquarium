const fishCollection = [{
        name: "Freddie",
        food: "Shrimp",
        species: "Lion Fish",
        Length: 6,
        location: "Great Barrier Reef",
        image: "images/lionFish.jpg"

    },
    {
        name: "Spot",
        food: "Small fish",
        species: "Red Drum",
        Length: 28,
        location: "Indian River Lagoon",
        image: "images/red-drum.jpg"
    },
    {
        name: "Tammy",
        food: "Crustaceans",
        species: "Striped MandarinFish",
        Length: 2,
        location: "Caribbean",
        image: "images/Striped-Mandarinfish.png"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}