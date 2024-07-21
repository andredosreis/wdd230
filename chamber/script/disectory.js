async function carregar() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (!data.members) {
            throw new Error('No members found in JSON');
        }

        const members = data.members;
        const memberList = document.querySelector('#cardmember');
        displayMembers(members, 'grid'); // Inicialmente mostrar em grid

        document.querySelector('#gridBtn').addEventListener('click', () => {
            displayMembers(members, 'grid');
        });

        document.querySelector('#listBtn').addEventListener('click', () => {
            displayMembers(members, 'list');
        });
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

function displayMembers(members, view) {
    const memberList = document.querySelector('#cardmember');
    memberList.innerHTML = ''; // Limpar lista antes de adicionar novos elementos

    if (view === 'grid') {
        memberList.classList.add('grid');
        memberList.classList.remove('list');
    } else {
        memberList.classList.add('list');
        memberList.classList.remove('grid');
    }

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add(view === 'grid' ? 'card-grid' : 'card-list');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${member.email}`;

        const website = document.createElement('a');
        website.href = ` site: ${member.website}`;
        website.textContent = member.website;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(email);

        if (view === 'grid') {
            const img = document.createElement('img');
            img.src = member.logo;
            img.alt = member.name;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${member.phone}`;

            const membershipLevel = document.createElement('p');
            membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

            card.appendChild(img);
            card.appendChild(phone);
            card.appendChild(membershipLevel);
        }

        memberList.appendChild(card);
    });
}

carregar();
