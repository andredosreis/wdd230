const CompaniesElement = document.querySelector("#companies");
const memberUrl1 = "data/members.json";
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getMembers() {
    const response = await fetch(memberUrl1);
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();

function displayMembers(members) {
    const activeBtn = document.querySelector(".active");

    CompaniesElement.innerHTML = ''; // Limpar o container antes de adicionar novos elementos

    if (activeBtn.id === "gridBtn") {
        CompaniesElement.classList.remove("list");
        CompaniesElement.classList.add("grid");

        members.forEach((member) => {
            const company = document.createElement("div");
            company.classList.add("company-card");
            company.innerHTML = `
                <div class="company-logo">
                    <img src="${member.logo}" alt="${member.name}">
                </div>
                <div class="company-info">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <a href="https://${member.website}">${member.website}</a>
                    <p>${member.phone}</p>
                    <p>${member.membershipLevel}</p>
                </div>
            `;
            CompaniesElement.appendChild(company);
        });
    } else {
        CompaniesElement.classList.remove("grid");
        CompaniesElement.classList.add("list");

        members.forEach((member) => {
            const company = document.createElement("section");
            company.classList.add("company-info");
            company.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <a href="https://${member.website}">${member.website}</a>
                <p>${member.phone}</p>
                <p>${member.membershipLevel}</p>
            `;
            CompaniesElement.appendChild(company);
        });
    }
}

// Event listener for the buttons
gridBtn.addEventListener("click", () => {
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    displayMembers(data.members); // Call the function to display companies
});

listBtn.addEventListener("click", () => {
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    displayMembers(data.members); // Call the function to display companies
});
