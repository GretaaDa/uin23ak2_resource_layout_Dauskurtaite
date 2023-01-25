const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

//Variables created in global scope to later use in functions
let navBar = document.getElementById("navBar")
let main = document.getElementById("mainInfo")

//Mapped through the resources array, to create and appended the category value to different buttons. Help: https://www.w3schools.com/js/js_htmldom_nodes.asp
resources.map(item => {
    let button = document.createElement("button")
    let cat = document.createTextNode(item.category)
    button.appendChild(cat)
    navBar.appendChild(button)
    //Created an onclick method, to call the two functions when one of the category buttons are clicked
    button.onclick = function () {
        //Used this to pass the button, help: https://www.w3schools.com/js/js_this.asp
        changeCategory(this)
        changeContent(item)
    }
})

//Function that resets the active class and toggles the button that is clicked 
function changeCategory(e) {
    document.querySelectorAll("#navBar button").forEach(element => {
        element.classList.remove("active")
    })
    e.classList.toggle("active")

}

//Function that adds the header, text and sources to the main tag
function changeContent(item) {
    //Set the main value to an empty string so the content resets each time
    main.innerHTML = ""
    let header = document.createElement("h2")
    let headerText = document.createTextNode(item.category)
    header.appendChild(headerText)
    main.appendChild(header)
    let paragraph = document.createElement("p")
    let context = document.createTextNode(item.text)
    paragraph.appendChild(context)
    main.appendChild(paragraph)

    let ul = document.createElement("ul")
    main.appendChild(ul)
    //Mapped through just the item array to add the list items
    item.sources.map(i => {
        let list = document.createElement("li")
        ul.appendChild(list)
        let link = document.createElement("a")
        list.appendChild(link)
        link.setAttribute("href", i.url)
        let urlTitle = document.createTextNode(i.title)
        link.appendChild(urlTitle)
    })
}

//Added an onload method so that when the page loads the first item  that has the class. Help: https://www.w3schools.com/jsref/event_onload.asp
window.onload = function () {
    document.querySelector("#navBar button").click()
}