import { useLocation } from "../locations/LocationProvider.js"
import { locationAsHtml } from "../locations/Location.js"

export const locationList = () => {
    const contentElement = document.querySelector(".content--left")
    const allTheLocations = useLocation()
    let locationHtmlRepresentation = ""
    for (const location of allTheLocations) {
        locationHtmlRepresentation += locationAsHtml(location)
    }
    contentElement.innerHTML += `
    <article class="locations">
    ${locationHtmlRepresentation}
    </article>
    `
}