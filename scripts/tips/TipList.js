import { useTips } from "./TipDataProvider.js"
import { tipsAsHtml } from "./Tip.js"

export const tipsList = () => {
    const contentElement = document.querySelector(".content--right")
    const allTheTips = useTips()

    let tipsHtmlrRepresentaion = ""
    for (const tip of allTheTips) {
        tipsHtmlrRepresentaion += tipsAsHtml(tip)
    }
    contentElement.innerHTML += `
    <aside class="tips">
        ${tipsHtmlrRepresentaion}
    </aside>`
}