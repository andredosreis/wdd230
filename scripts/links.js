const baseUrl = "https://andredosreis.github.io/wdd230/"
const links = "https://andredosreis.github.io/wdd230/data/links.json"

async function getLinks() {
    const response = await fetch(links);
    const data = await response.json();
    console.log(data);
    //displayLinks(data.weeks);
}
getLinks();