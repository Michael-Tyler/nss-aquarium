export const tipsAsHtml = (tipsObj) => {
    return `
        <section class="tips__text">
            <div class="tips__title">•${tipsObj.tipTitle}</div>
            <div class="tips__text">•${tipsObj.text}</div>
        </section>
    `
}