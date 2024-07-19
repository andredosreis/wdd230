const CompaniesElement = document.querySelector("#companies")
const memberUrl1 = "data/members.json"
const gridBtn = document.querySelector("#gridBtn")
const listBtn = document.querySelector("#listBtn")

async function getMembers() {
    const response = await fetch(memberUrl1)
    const data = await response.json()
    keys = Object.keys(data)
    displayMembers(data.members)

}
getMembers()

function displayMembers(data){
     const activeBtn = document.querySelector(".active")
     
}