const quoteCollection = [{
        quote: "When life gets you down, you know what you gotta do? Just keep swimming.",
        author: "Dory"
    }, {
        quote: "Fish are friends not food",
        author: "Bruce"
    },

]

export const useQuote = () => {
    return quoteCollection.slice()
}