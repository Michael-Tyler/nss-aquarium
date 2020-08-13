import { useLocation } from "../locations/LocationProvider.js"
import { locationAsHtml } from "../locations/Location.js"

export const locationList = () => {
    const contentElement = document.querySelector(".content--left")
    const allTheLocations = useLocation()
    contentElement.innerHTML += `
        <article class="locations">
            ${
                allTheLocations.map(location => 
                    locationAsHtml(location)
                ).join("")
            }
        </article>
    `
}