async function carregar() {
    try {
        const response = await fetch('data/members1.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (!data.members) {
            throw new Error('No members found in JSON');
        }

        const members = data.members;
        displayMembers(members);
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

function displayMembers(members) {
    const memberList = document.querySelector('#cardmember1');
    memberList.innerHTML = ''; // Limpar lista antes de adicionar novos elementos

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = member.logo;
        img.alt = member.name;

        const info = document.createElement('div');
        info.classList.add('info');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const description = document.createElement('p');
        description.textContent = member.description;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

      
        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = member.website;
        website.target = "_blank";

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        info.appendChild(name);
      
        info.appendChild(address);
        info.appendChild(phone);
    
        info.appendChild(website);
        info.appendChild(membershipLevel);

        card.appendChild(img);
        card.appendChild(info);

        memberList.appendChild(card);
    });
}

carregar();
