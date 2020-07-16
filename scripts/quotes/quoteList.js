import { useQuote } from "./quotesDataProvider.js"
import { quoteAsHtml } from "./quote.js"

export const quoteList = () => {
    const contentElement = document.querySelector(".content--left")
    const allTheQuotes = useQuote()

    let quoteHtmlRepresentation = ""

    for (const quote of allTheQuotes) {
        quoteHtmlRepresentation += quoteAsHtml(quote)

    }

    contentElement.innerHTML += `
    <article class="quotes">
        ${quoteHtmlRepresentation}
    </article>
    `
}