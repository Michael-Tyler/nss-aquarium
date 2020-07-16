const locationCollection = [{
        name: "South Pacific Ocean",
        url: "https://www.nationalgeographic.com/environment/oceans/reference/pacific-ocean/",
        linkTitle: "South Pacific Ocean Link",
        description: "The Caribbean is filled with warm water and coral reefs. It is home to many differnt tropical fish, sharks, and other animals like porpoise.",
        image: "./images/southPacific.jpeg"
    }, {
        name: "Caribbean",
        url: "https://www.nationalgeographic.com/travel/destinations/north-america/caribbean-hot-spots/",
        linkTitle: "Caribbean link",
        description: "The Caribbean is filled with warm water and coral reefs. It is home to many differnt tropical fish, sharks, and other animals like porpoise.",
        image: "./images/caribbean.jpg"
    }, {
        name: "Indian River Lagoon",
        url: "https://www.floridastateparks.org/parks-and-trails/indian-river-lagoon-preserve-state-park",
        linkTitle: "Indian river lagoon link",
        description: "The Indian river lagon located on the east coast of florida flows for 156 miles.  The lagoon consists of brackish water which is a mixture of fresh and salt water.  The lagoon features many species of fish as well as porpoise, manatee, and the occational lost whale or bull shark.",
        image: "./images/indian-river-lagoon.jpg"
    }

]

export const useLocation = () => {
    return locationCollection.slice()
}