import { useFish } from "./FishDataProvider.js"
import { fishAsHtml } from "./fish.JS"

export const FishList = () => {
    const contentElement = document.querySelector(".content--left")
    const fishes = useFish()

    let fishHtmlRepresentations = ""
    for (const fish of fishes) {
        fishHtmlRepresentations += fishAsHtml(fish)
    }
    console.log(fishHtmlRepresentations)

    //add to existing HTML in the content element (WHAT? ask a question here)
    contentElement.innerHTML += `
        <article class="fishes">
        ${fishHtmlRepresentations}
        </article>
    `
}