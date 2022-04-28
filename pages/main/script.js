function buttonToFriends() {
  window.location.hash = 'pet';
}

function buttonToFriendsPage() {
  window.open('https://rolling-scopes-school.github.io/yuliyashu-JSFE2022Q1/shelter/pages/pets/index.html', '_blank');
}

function inAdditionButton() {
  window.open('#', '_blank');
}

// SLIDER MAIN
const sliderPets = [
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

// slider create
function createSlide(z) {
  let sliderItemI = 'sliderItem' + z;
  sliderItemI = document.createElement('div'); // create element
  slider.append(sliderItemI); // add element to slider Item container
  sliderItemI.classList.add('pet');

  const sliderImg = document.createElement('img');
  sliderItemI.append(sliderImg);
  sliderImg.classList.add('pet-img');
  sliderImg.src = sliderPets[z].img;

  const sliderName = document.createElement('h4');
  sliderItemI.append(sliderName);
  sliderName.classList.add('pet-name');
  sliderName.textContent = sliderPets[z].name;

  const sliderButton = document.createElement('button');
  sliderItemI.append(sliderButton);
  sliderButton.classList.add('pet-click');
  sliderButton.classList.add('btn-secondary');
  sliderButton.textContent = 'Learn more';

  lastIndex = z;
}

function createSlider(x) {
  for (let i = 0; i <= x; i++) {
    createSlide(i);
  }
}

function createAdaptiveSlider() {
  if (window.screen.availWidth >= 1280) {
    slider.innerHTML = '';
    createSlider(2);
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768) {
    slider.innerHTML = '';
    createSlider(1);
  }
  if (window.screen.availWidth < 768) {
    slider.innerHTML = '';
    createSlider(0);
  }
}

createAdaptiveSlider();

// slider change

const goLeft = document.querySelector('.arrow-left');
const goRight = document.querySelector('.arrow-right');

goLeft.addEventListener('click', createAdaptiveNewSliderLeft);
goRight.addEventListener('click', createAdaptiveNewSliderRight);

// slider change RIGHT
let yRight;
function createNewSliderRight(x) {
  yRight = lastIndex;
  for (let i = 0; i <= x; i++) {
    yRight++;
    if (yRight === sliderPets.length) yRight = 0;
    createSlide(yRight);

    popupClickEvent();
  }
}

function createAdaptiveNewSliderRight() {
  if (window.screen.availWidth >= 1280) {
    slider.innerHTML = '';
    createNewSliderRight(2);
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768) {
    slider.innerHTML = '';
    createNewSliderRight(1);
  }
  if (window.screen.availWidth < 768) {
    slider.innerHTML = '';
    createNewSliderRight(0);
  }
}

//  slider change LEFT
let yLeft;
function createNewSliderLeft(x) {
  yLeft = lastIndex - 2 * (x + 1);
  for (let i = 0; i <= x; i++) {
    yLeft++;
    if (yLeft == -1) yLeft = sliderPets.length - 1;
    if (yLeft == -2) yLeft = sliderPets.length - 2;
    if (yLeft == -3) yLeft = sliderPets.length - 3;
    if (yLeft == -4) yLeft = sliderPets.length - 4;
    if (yLeft == -5) yLeft = sliderPets.length - 5;
    if (yLeft == sliderPets.length) yLeft = 0;

    createSlide(yLeft);
    popupClickEvent();
  }
}

function createAdaptiveNewSliderLeft() {
  if (window.screen.availWidth >= 1280) {
    slider.innerHTML = '';
    createNewSliderLeft(2);
  }
  if (window.screen.availWidth < 1280 && window.screen.availWidth >= 768) {
    slider.innerHTML = '';
    createNewSliderLeft(1);
  }
  if (window.screen.availWidth < 768) {
    slider.innerHTML = '';
    createNewSliderLeft(0);
  }
}

//burger-menu

const burger = document.querySelector('.nav-header-burger');
const burgerUl = document.querySelector('ul');
const navBurgerMenu = document.querySelector('.nav-burger-menu');
const navBurgerMenuContainer = document.querySelector('.nav-burger-menu-container');
const navBurgerMenuList = document.querySelector('.nav-burger-menu-list');
const navBurgerMenuLink1 = document.querySelector('.nav-burger-menu-link-1');
const navBurgerMenuLink2 = document.querySelector('.nav-burger-menu-link-2');
const navBurgerMenuLink3 = document.querySelector('.nav-burger-menu-link-3');
const navBurgerMenuLink4 = document.querySelector('.nav-burger-menu-link-4');
const logoBurger = document.querySelector('.logo-burger');
const bodyBurger = document.querySelector('.body-burger');
const htmlBurger = document.querySelector('html');

function toggleMenu() {
  htmlBurger.classList.toggle('open');
  bodyBurger.classList.toggle('overlay');
  logoBurger.classList.toggle('open');
  burgerUl.classList.toggle('open');
  navBurgerMenu.classList.toggle('open');
  navBurgerMenuContainer.classList.toggle('open');
  navBurgerMenuList.classList.toggle('open');
  navBurgerMenuLink1.classList.toggle('open');
  navBurgerMenuLink2.classList.toggle('open');
  navBurgerMenuLink3.classList.toggle('open');
  navBurgerMenuLink4.classList.toggle('open');
  burger.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);
navBurgerMenuLink1.addEventListener('click', toggleMenu);
navBurgerMenuLink2.addEventListener('click', toggleMenu);
navBurgerMenuLink3.addEventListener('click', toggleMenu);
navBurgerMenuLink4.addEventListener('click', toggleMenu);
bodyBurger.addEventListener('click', toggleMenu);

// POP UP START
let sliderItem;
const bodyPopup = document.querySelector('.body-popup');
const popupVisible = document.querySelector('.popup');
const popupItems = document.querySelector('.popup-items');
let sliderPetsIndex;

//CREATE
let nameOfPet;
function popupClickEvent() {
  sliderItem = document.querySelectorAll('.pet');
  for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].addEventListener('click', popUpCreateNew);
  }
}
popupClickEvent();

function popUpCreateNew(event) {
  nameOfPet = event.target.parentElement.children[1].textContent;
  for (let [a, b] of sliderPets.entries()) {
    if (b.name == nameOfPet) {
      sliderPetsIndex = a;
      break;
    }
  }
  htmlBurger.classList.add('open');
  bodyPopup.classList.toggle('overlay-popup');
  popupVisible.classList.toggle('popup-visible');
  popupVisible.children[0].classList.toggle('close');
  popupVisible.children[2].classList.toggle('pop-item');

  const popupImg = document.createElement('img');
  popupItems.append(popupImg);
  popupImg.classList.add('slider-img');
  popupImg.src = sliderPets[sliderPetsIndex].img;

  const popupTextBlock = document.createElement('div');
  popupItems.append(popupTextBlock);
  popupTextBlock.classList.add('popup-text-block');

  const popupName = document.createElement('p');
  popupTextBlock.append(popupName);
  popupName.classList.add('popup-name');
  popupName.innerHTML = sliderPets[sliderPetsIndex].name;

  const popupTypeBreed = document.createElement('p');
  popupTextBlock.append(popupTypeBreed);
  popupTypeBreed.classList.add('popup-type-breed');
  popupTypeBreed.innerHTML = `${sliderPets[sliderPetsIndex].type} - ${sliderPets[sliderPetsIndex].breed}`;

  const popupDescription = document.createElement('p');
  popupTextBlock.append(popupDescription);
  popupDescription.classList.add('popup-description');
  popupDescription.innerHTML = sliderPets[sliderPetsIndex].description;

  const popupList = document.createElement('ul');
  popupTextBlock.append(popupList);
  popupList.classList.add('popup-list');

  const popupListLi1 = document.createElement('li');
  popupList.append(popupListLi1);
  popupListLi1.classList.add('popup-list-li');
  popupListLi1.innerHTML = `${'Age:'.bold()} ${sliderPets[sliderPetsIndex].age}`;

  const popupListLi2 = document.createElement('li');
  popupList.append(popupListLi2);
  popupListLi2.classList.add('popup-list-li');
  popupListLi2.innerHTML = `${'Inoculations:'.bold()} ${sliderPets[sliderPetsIndex].inoculations}`;

  const popupListLi3 = document.createElement('li');
  popupList.append(popupListLi3);
  popupListLi3.classList.add('popup-list-li');
  popupListLi3.innerHTML = `${'Diseases:'.bold()} ${sliderPets[sliderPetsIndex].diseases}`;

  const popupListLi4 = document.createElement('li');
  popupList.append(popupListLi4);
  popupListLi4.classList.add('popup-list-li');
  popupListLi4.innerHTML = `${'Parasites:'.bold()} ${sliderPets[sliderPetsIndex].parasites}`;
}

// hover on close, when cursor on body-overlay
const closeHover = document.querySelector('.closeForHover');
const emptyCell1 = document.querySelector('.emptyCell1');
const emptyCell2 = document.querySelector('.emptyCell2');
// OVER
bodyPopup.onmouseover = function () {
  closeHover.classList.toggle('hover');
};
emptyCell1.onmouseover = function () {
  closeHover.classList.toggle('hover');
};
emptyCell2.onmouseover = function () {
  closeHover.classList.toggle('hover');
};
// OUT
bodyPopup.onmouseout = function () {
  closeHover.classList.toggle('hover');
};
emptyCell1.onmouseout = function () {
  closeHover.classList.toggle('hover');
};
emptyCell2.onmouseout = function () {
  closeHover.classList.toggle('hover');
};

// hide popup, when click on body-overlay

function bodyPopupOverlayHide() {
  htmlBurger.classList.remove('open');
  bodyPopup.classList.toggle('overlay-popup');
  popupVisible.classList.toggle('popup-visible');
  popupVisible.children[0].classList.toggle('close');
  popupVisible.children[2].classList.toggle('pop-item');
  popupVisible.children[0].innerHTML = '';
  popupVisible.children[2].innerHTML = '';
}
bodyPopup.addEventListener('click', bodyPopupOverlayHide);
emptyCell1.addEventListener('click', bodyPopupOverlayHide);
emptyCell2.addEventListener('click', bodyPopupOverlayHide);
closeHover.addEventListener('click', bodyPopupOverlayHide);
// POP UP END
