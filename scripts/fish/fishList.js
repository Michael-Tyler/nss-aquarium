//I believe these imports allow this module to see the functions being defined in other modules
import { mostHolyFish, soldierFish, nonHolyFish } from "../fish/FishDataProvider.js"
import { fishAsHtml } from "../fish/fish.JS"

const contentElement = document.querySelector(".content--left")

const addFishToDom = (theArrayOfFish) => {
    let fishHtmlRepresentations = ""

    for (const fish of theArrayOfFish) {
        fishHtmlRepresentations += fishAsHtml(fish)
    }

    //updating html of the DOM element
    contentElement.innerHTML += `
        <article class="fishes">
        ${fishHtmlRepresentations}
        </article>
    `
}
export const FishList = () => {

    const holyFish = mostHolyFish()
    addFishToDom(holyFish)

    const soldiers = soldierFish()
    addFishToDom(soldiers)

    const plebs = nonHolyFish()
    addFishToDom(plebs)
}