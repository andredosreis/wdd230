const baseUrl = "https://andredosreis.github.io/wdd230/";
const links = "https://andredosreis.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(links);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    const weekLinks = document.querySelector("#week-links");
    data.weeks.forEach(week => {
        const weekItem = document.createElement("li");
        weekItem.innerHTML = `${week.week}: ${week.links.map(link => `<a href="${baseUrl + link.url}">${link.title}</a>`).join(" | ")}`;
        weekLinks.appendChild(weekItem);
    });
}

getLinks();
