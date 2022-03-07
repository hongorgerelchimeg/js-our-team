
//Ogni membro deve avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },
]

const teamContainer = document.querySelector('.team-container');

cardCreator();

const btnAdd = document.querySelector('#addMemberButton');

btnAdd.addEventListener('click', function() {
   
    const inputName = document.querySelector('#name');
    const inputRole = document.querySelector('#role');
    const inputImage = document.querySelector('#image');

    let name = inputName.value ;
    let role = inputRole.value ;
    let image = inputImage.value ;
    console.log(image);

    let newMember = {};
    newMember.name = name;
    newMember.role = role;
    newMember.image = image;

    members.push(newMember);

    cardCreator();





})

// Loop per creare cards
function cardCreator() {
    teamContainer.innerHTML = ' '
    for (i = 0; i < members.length; i++) {


        let div = document.createElement("div");
        div.classList.add("team-card");
       
        const imgHTML = members[i].img;
        const roleHTML = members[i].role;
        const nameHTML = members[i].name;


        div.innerHTML = `
                        <div class="card-image">
                            <img
                                src="img/${imgHTML}"
                                alt="${nameHTML}"
                            />
                        </div>
                        <div class="card-text">
                            <h3>${nameHTML}</h3>
                            <p>${roleHTML}</p>
                        </div>
                        `;
        
        teamContainer.append(div);

    }

}




