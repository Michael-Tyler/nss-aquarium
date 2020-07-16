export const quoteAsHtml = (quoteObj) => {
    return `
            <section class="quote card">
                <div class="quote__text">${quoteObj.quote}</div>
                <div class="quote__author">${quoteObj.author}</div>
            </section>
        `
}