//__________________________NAVBAR MOBILE____________________________//

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

//__________________________MODAL____________________________//

// close Modal
const closePopup = () => {
  const buttonContainer = document.getElementById('close-popup-btn-container');
  const modal = document.getElementById('popup-modal');
  const innerModal = document.getElementById('popup-modal-inner');
  const closeBtn = document.createElement('img');
  closeBtn.classList.add('x-btn');
  closeBtn.src = '../../assets/images/Vector.png';
  buttonContainer.append(closeBtn);

  let button = document.getElementById('close-popup-btn-container');
  let button2 = document.getElementsByClassName('x-btn')[0];
  window.onclick = function (event) {
    if (event.target == modal || event.target == button || event.target == button2) {
      modal.style.display = 'none';
      button.innerHTML = '';
      document.getElementById('popup-content').innerHTML = '';
      document.getElementById('popup-img').innerHTML = '';
      document.getElementsByTagName('html')[0].style.overflow = 'scroll';
    }
  };
  window.onmousemove = function (event) {
    if (event.target == modal || event.target == button || event.target == button2) {
      button.classList.add('hovering');
      modal.style.cursor = 'pointer';
    }
    if (event.target != modal && event.target != button && event.target != button2) {
      button.classList.remove('hovering');
      modal.style.cursor = 'default';
    }
  };
};

// open Modal
const modal = () => {
  let allPets = document.getElementsByClassName('pet');
  [...allPets].forEach((pet) => {
    pet.addEventListener('click', (e) => {
      const modal = document.getElementById('popup-modal');

      if (modal.style.display === 'none') {
        modal.style.display = 'flex';
        closePopup();
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      }
      const index = pet.getAttribute('data');
      imageContainer = document.getElementById('popup-img');
      const sliderImg = document.createElement('img');
      imageContainer.append(sliderImg);
      sliderImg.classList.add('popup-img-image');
      sliderImg.src = pets[index].img;

      const contentPart = document.getElementById('popup-content');
      contentPart.innerHTML = `<h1 class="popup-title">${pets[index].name}</h1>
      <h3 class="popup-breed">${pets[index].type}-${pets[index].breed}</h3>
      <p>
      ${pets[index].description}
      </p>
     
      <ul>
        <li><strong>Age:</strong> ${pets[index].age}</li>
        <li><strong>Inoculations:</strong> ${pets[index].inoculations.map((inoculation) => inoculation)}</li>
        <li><strong>Diseases:</strong> ${pets[index].diseases.map((disease) => disease)}</li>
        <li><strong>Parasites:</strong> ${pets[index].parasites.map((parasite) => parasite)}</li>
      </ul>`;
    });
  });
};

//__________________________CAROUSEL____________________________//

// Slider Show
const pets = [
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
    name: 'Timmy',
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
  {
    name: 'Charly',
    img: '../../assets/images/pets-charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
  {
    name: 'Scarlett',
    img: '../../assets/images/pets-scarlett.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Freddie',
    img: '../../assets/images/pets-freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
];

const slider = document.querySelector('.pets-slider');
let lastIndex = [3, 4, 5, 6, 7].sort(() => 0.5 - Math.random()).slice(0, 1)[0];
let firstIndex = lastIndex - 2;

function createSingleSlide(z) {
  let sliderItemI = document.createElement('div');
  slider.append(sliderItemI);

  sliderItemI.classList.add('pet');
  sliderItemI.setAttribute('data', z);

  const sliderImg = document.createElement('img');
  sliderItemI.append(sliderImg);
  sliderImg.classList.add('our-friends-img');
  sliderImg.src = pets[z].img;

  const sliderName = document.createElement('p');
  sliderItemI.append(sliderName);
  sliderName.classList.add('pet-name');
  sliderName.textContent = pets[z].name;

  const sliderButton = document.createElement('button');
  sliderItemI.append(sliderButton);
  sliderButton.classList.add('pet-click');
  sliderButton.classList.add('btn-secondary');
  sliderButton.textContent = 'Learn more';
}

function createSlider(firstIndex, end) {
  for (let i = firstIndex; i <= end; i++) {
    createSingleSlide(i);
  }
}

const responsiveSlider = (firstIndex, lastIndex) => {
  if (screen.width >= 1280) {
    slider.innerHTML = '';
    createSlider(firstIndex, lastIndex);
  }
  if (screen.width < 1280 && screen.width >= 768) {
    slider.innerHTML = '';
    createSlider(firstIndex, lastIndex - 1);
  }
  if (screen.width < 768) {
    slider.innerHTML = '';
    console.log(firstIndex);
    createSlider(firstIndex, lastIndex - 2);
  }
  window.addEventListener('resize', () => {
    if (screen.width >= 1280) {
      slider.innerHTML = '';
      createSlider(firstIndex, lastIndex);
    }

    if (screen.width < 1280 && screen.width >= 768) {
      slider.innerHTML = '';
      createSlider(firstIndex, lastIndex - 1);
    }
    if (screen.width < 768) {
      slider.innerHTML = '';
      createSlider(firstIndex, lastIndex - 2);
    }
  });
};
responsiveSlider(firstIndex, lastIndex);

// Slider functional

let arrowRight = document.querySelector('.arrow-right');
let arrowLeft = document.querySelector('.arrow-left');
let nextIndx = null;

arrowRight.addEventListener('click', () => {
  slider.innerHTML = '';
  let newRandomSlides = [];
  [0, 1, 2, 3, 4, 5, 6, 7].forEach((num) => {
    if (num !== firstIndex && num !== firstIndex + 1 && num !== lastIndex) {
      newRandomSlides = [...newRandomSlides, num];
    }
  });

  let randomN = newRandomSlides.sort(() => 0.5 - Math.random()).slice(0, 1)[0];
  let randomLast = randomN <= 1 ? 2 : randomN;
  lastIndex = randomLast;

  if (screen.width >= 1280) {
    firstIndex = randomLast - 2;
    createSlider(firstIndex, lastIndex);
  }
  if (screen.width < 1280 && screen.width >= 768) {
    firstIndex = randomLast - 1;
    createSlider(firstIndex, lastIndex);
  }
  if (screen.width < 768) {
    firstIndex = randomLast - 0;
    createSlider(firstIndex, lastIndex);
  }
  modal();
});

arrowLeft.addEventListener('click', () => {
  slider.innerHTML = '';
  lastIndex = lastIndex - 2 <= 0 ? 7 : lastIndex - 1;
  if (screen.width >= 1280) {
    firstIndex = lastIndex - 2;
    createSlider(firstIndex, lastIndex);
  }
  if (screen.width < 1280 && screen.width >= 768) {
    firstIndex = lastIndex - 1;
    createSlider(firstIndex, lastIndex);
  }
  if (screen.width < 768) {
    firstIndex = lastIndex - 0;
    createSlider(firstIndex, lastIndex);
  }
  modal();
});

modal();
