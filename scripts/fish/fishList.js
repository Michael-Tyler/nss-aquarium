//I believe these imports allow this module to see the functions being defined in other modules
import { useFish } from "../fish/FishDataProvider.js"
import { fishAsHtml } from "../fish/fish.JS"

//this function puts the html together from fish.js and the information from fishDataProvider.js together to create the fish cards on the webpage
export const FishList = () => {
    //this looks at a specific location identified by the class "content--left" (keep in mind this looks for the first instance this happens) *check html for comment*
    const contentElement = document.querySelector(".content--left")

    // this catches the fish objects data in a "box"
    const allTheFish = useFish()
        // this variable is a place holder for the html that will be added
    let fishHtmlRepresentations = ""
        //this for loop will go through the fish array because fishes = the copy of that array, and fish is a variable
    for (const fish of allTheFish) {
        fishHtmlRepresentations += fishAsHtml(fish)
    }


    //(WHAT? ask a question here)
    contentElement.innerHTML += `
        <article class="fishes">
        ${fishHtmlRepresentations}
        </article>
    `
}