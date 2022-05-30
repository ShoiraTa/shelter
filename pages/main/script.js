const petsArr = [
  {
    name: 'Katrine',
    img: '../../assets/images/pets-katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: '../../assets/images/pets-woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: '../../assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Nika',
    img: '../../assets/images/pets-timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
];

const slider = document.querySelector('.pets-slider');
let lastIndex;
// Mobile menu

const burgerBtn = document.getElementsByClassName('burger-btn');
const mobileNav = document.getElementById('mobile-navbar');
const desktopheader1 = document.getElementById('desktop-header1');
const desktopheader2 = document.getElementById('desktop-header2');
const openBurger = document.getElementsByClassName('open-burger')[0];
const par = document.getElementsByClassName('main-p')[0];
const body = document.getElementsByTagName('body')[0];

Array.from(burgerBtn).forEach((btn) => {
  btn.addEventListener('click', () => {
    if (mobileNav.style.display === 'none') {
      mobileNav.style.display = 'block';
      desktopheader1.style.display = 'none';
      openBurger.style.display = 'none';
      par.style.margin = '0 0 0 2rem';
      body.style.position = 'fixed';
    } else {
      mobileNav.style.display = 'none';
      desktopheader1.style.display = 'block';
      openBurger.style.display = 'block';
      par.style.margin = '0';
      body.style.position = 'inherit';
    }
  });
});

window.addEventListener('resize', () => {
  if (screen.width > 767) {
    mobileNav.style.display = 'none';
    desktopheader1.style.display = 'block';
    openBurger.style.display = 'block';
    par.style.margin = '0';
    body.style.position = 'inherit';
  }
});
