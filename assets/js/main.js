let suspectInfo = document.getElementById('suspectInfo')
let weapon = document.getElementById('weapon')
let rooms = document.getElementById('rooms')

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: '../img/JacobGreen.jpeg'
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology',
        image: '../img/DoctorOrchid.jpg'
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer ',
        image: '../img/VictorPlum.jpg'
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actress',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: '../img/Kasandra.jpg'
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: '../img/Eleanorcluedo.jpg'
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory ',
        image: '../img/JackMustard.jpg'
    }
];

const weaponsArray = ['rope', 'knife', 'candelstick', 'dumbbell', 'poison', 'axe', 'bat', 'trophy', 'pistol']

const roomsArray = ['Dining Room ', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function findTheKiller() {

    let killer = suspectsArray[getRandomInt(suspectsArray.length)]
    let weapon = weaponsArray[getRandomInt(weaponsArray.length)]
    let rooms = roomsArray[getRandomInt(roomsArray.length)]
    console.log(`${killer.firstName} ${killer.lastName} killed Mr.Boddy using the ${weapon} in the ${rooms}.`)
}

console.log(findTheKiller())