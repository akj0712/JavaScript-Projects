// console.log("News Website");

// Initialise the news api parameters
let source = "Gadgets360.com";
let apikey = "56711cb1a8d94ef7910e89c29bef25d8";
let country = "in"

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`,
    true
);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = "";
        // console.log(articles);
        articles.forEach(function (element, index) {
            // console.log(element, index);

            let news = `

                <div class="accordion-item"  id="heading${index}">
                    <h2 class="accordion-header mb-0">
                        <button
                        
                            class="btn  accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}"
                            aria-expanded="true"
                            aria-controls="collapse${index}"
                        >
                        <b>Breaking News ${index+1} ‎</b>  
                        ${element["title"]}
                        </button>
                        </h2>
                    <div
                        id="collapse${index}"
                        class="accordion-collapse collapse"
                        aria-labelledby="heading${index}"
                        data-bs-parent="#newsAccordian"
                    >
                        <div class="accordion-body">
                        </div>
                        ${element["content"]}. <a href = '${element["url"]}' target=_blank>Read more</a>
                    </div>
                </div>
                `;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    } else {
        console.log("File not found!");
    }
};

xhr.send();
