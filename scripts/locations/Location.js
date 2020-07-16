//this module holds the html that make up the location cards. 

export const locationAsHtml = (locationObj) => {
    return `
        <section class="location card">
        <div><img src= ${locationObj.image} class="location__image"></div>
            <div class="location__name">${locationObj.name} </div>
            <div class="location__url"><a src=${locationObj.url} >${locationObj.linkTitle} </a></div>
            <div class="location__description">${locationObj.description} </div>
        </section>
    `
}