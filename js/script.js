
//Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'
    },
]

const teamContainer = document.querySelector('.team-container');

// Loop per creare cards

for (i = 0; i < members.length; i++) {


    let div = document.createElement("div");
    div.classList.add("team-card");
    let img = document.createElement('img');

    div.innerHTML = `
    <div class="card-image">
        <img
            src="${members[i].img}"
            alt="${members[i].name}"
        />
    </div>
    <div class="card-text">
        <h3>${members[i].name}</h3>
        <p>${members[i].role}</p>
    </div>`;
    
    // let div = document.createElement("div");
    // div.classList.add('card-text');
    teamContainer.append(div);

}

   


