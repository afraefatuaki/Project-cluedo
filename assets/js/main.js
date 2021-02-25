let suspectInfo = document.getElementById('suspectInfo')
let weapon = document.getElementById('weapon')
let rooms = document.getElementById('rooms')
let whoDidIt = document.getElementById('whoDidIt')
let description = document.getElementById('description')
let imageHTML = document.getElementById('image')
const suspectsArray = [
    {
        firstName: 'Jacob',
        agelastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'assets/img/JacobGreen.jpeg',
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology',
        image: 'assets/img/DoctorOrchid.jpg',
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer ',
        image: 'assets/img/VictorPlum.jpg',
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actress',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: "assets/img/Kasandra.jpg",
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family <br> and uses her status and money to earn popularity',
        image: "assets/img/Eleanorcluedo.jpg",
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player<br> who tries to get by on his former glory ',
        image: "assets/img/JackMustard.jpg",
    }
];

const weaponsArray = ['rope', 'knife', 'candelstick', 'dumbbell', 'poison', 'axe', 'bat', 'trophy', 'pistol']

const roomsArray = ['Dining Room ', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function findTheKiller() {

    let killer = suspectsArray[getRandomInt(suspectsArray.length)]
    let weapons = weaponsArray[getRandomInt(weaponsArray.length)]
    let place = roomsArray[getRandomInt(roomsArray.length)]
    whoDidIt.innerHTML = `${killer.firstName} ${killer.lastName}, killed Mr.Boddy using the ${weapons} in the ${place}!`
    suspectInfo.innerHTML = `<br>${killer.firstName} ${killer.lastName} (${killer.age})`
    imageHTML.innerHTML = `<img src="${killer.image}" height="400"/>`
    description.innerHTML = `${killer.description}`
    weapon.innerHTML = `<br>${weapons}`
    rooms.innerHTML = `<br>${place}`

}

console.log(findTheKiller())
