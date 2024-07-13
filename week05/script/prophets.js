const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelector('#cards')

async function getProphets() {
    const response = await fetch(url)
    const data = await response.json()
    displayProphets(data.prophets) // Referência ao array prophets do objeto JSON
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section')
        let fullName = document.createElement('h2') // Corrigir para criar um elemento 'h2'
        let portrait = document.createElement('img') // Corrigir erro de digitação (portrait)

        // Construir o conteúdo do h2 para mostrar o nome completo do profeta
        fullName.textContent = `${prophet.firstname} ${prophet.lastname}` // Corrigir para firstname e lastname

        // Construir o retrato da imagem definindo todos os atributos corretos
        portrait.setAttribute('src', prophet.imageurl)
        portrait.setAttribute('alt', `Retrato de ${prophet.firstname} ${prophet.lastname}`) // Corrigir para firstname e lastname
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height', '440')

        // Adicionar/anexar a seção (card) com os elementos criados
        card.appendChild(fullName) // Corrigir para adicionar fullName
        card.appendChild(portrait) // Corrigir erro de digitação (portrait)

        // Anexar a seção (card) com os elementos criados ao container de cards
        cards.appendChild(card)
    })
}

getProphets()
