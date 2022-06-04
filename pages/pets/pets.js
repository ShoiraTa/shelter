// Mobile menu

const burgerBtn = document.getElementsByClassName('burger-btn');
const mobileNav = document.getElementById('mobile-navbar');
const desktopheader1 = document.getElementById('desktop-header1');
const desktopheader2 = document.getElementById('desktop-header2');
const openBurger = document.getElementsByClassName('open-burger')[0];

const body = document.getElementsByTagName('body')[0];

Array.from(burgerBtn).forEach((btn) => {
  btn.addEventListener('click', () => {
    if (mobileNav.style.display === 'none') {
      mobileNav.style.display = 'block';
      desktopheader1.style.display = 'none';
      openBurger.style.display = 'none';

      body.style.position = 'fixed';
    } else {
      mobileNav.style.display = 'none';
      desktopheader1.style.display = 'block';
      openBurger.style.display = 'block';

      body.style.position = 'inherit';
    }
  });
});

window.addEventListener('resize', () => {
  if (screen.width > 767) {
    mobileNav.style.display = 'none';
    desktopheader1.style.display = 'block';
    openBurger.style.display = 'block';
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

  closeBtn.src = '../../assets/images/Vector.png';
  closeBtn.classList.add('x-btn');
  buttonContainer.append(closeBtn);

  let button = document.getElementById('close-popup-btn-container');
  let button2 = document.getElementsByClassName('x-btn')[0];
  window.onclick = function (event) {
    console.log(button);
    if (event.target == modal || event.target == button || event.target == button2) {
      modal.style.display = 'none';
      button.innerHTML = '';
      document.getElementById('popup-content').innerHTML = '';
      document.getElementById('popup-img').innerHTML = '';
      document.body.style.overflow = 'inherit';
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
  console.log([...allPets]);
  [...allPets].forEach((pet) => {
    pet.addEventListener('click', (e) => {
      const modal = document.getElementById('popup-modal');

      if (modal.style.display === 'none') {
        modal.style.display = 'flex';
        closePopup();
        document.body.style.overflow = 'hidden';
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

// PAgination

// SLIDER OUR PETS
const pets = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
let lastIndex = [7, 14, 21, 28, 34, 41, 47].sort(() => 0.5 - Math.random()).slice(0, 1)[0];
let firstIndex = lastIndex - 7;

function createSingleSlide(z) {
  let sliderItemI = 'sliderItem' + z;

  sliderItemI = document.createElement('div');
  slider.append(sliderItemI);

  sliderItemI.classList.add('pet');
  sliderItemI.setAttribute('data', pets[z].id - 1);

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

  lastIndex = z;
}

function createSliderShuffled(firstIndex, end) {
  let indexes = [];

  for (let i = firstIndex; i <= end; i++) {
    indexes.push(i);
  }
  indexes
    .sort((a, b) => 0.5 - Math.random())
    .forEach((inx) => {
      createSingleSlide(inx);
    });
}

function createSlider(firstIndex, end) {
  for (let i = firstIndex; i <= end; i++) {
    createSingleSlide(i);
  }
}

const responsiveSlider = (firstIndex, lastIndex, type) => {
  if (screen.width >= 1280) {
    slider.innerHTML = '';
    type === 'shuffled' ? createSliderShuffled(firstIndex, lastIndex) : createSlider(firstIndex, lastIndex);
  }
  if (screen.width < 1280 && screen.width >= 768) {
    slider.innerHTML = '';
    type === 'shuffled' ? createSliderShuffled(firstIndex, lastIndex - 2) : createSlider(firstIndex, lastIndex - 2);
  }
  if (screen.width < 768) {
    slider.innerHTML = '';
    console.log(firstIndex);
    type === 'shuffled' ? createSliderShuffled(firstIndex, lastIndex - 5) : createSlider(firstIndex, lastIndex - 5);
  }
  window.addEventListener('resize', () => {
    if (screen.width >= 1280) {
      slider.innerHTML = '';
      type === 'shuffled' ? createSliderShuffled(firstIndex, lastIndex) : createSlider(firstIndex, lastIndex);
    }

    if (screen.width < 1280 && screen.width >= 768) {
      slider.innerHTML = '';
      type === 'shuffled' ? createSliderShuffled(firstIndex, lastIndex - 2) : createSlider(firstIndex, lastIndex - 2);
    }
    if (screen.width < 768) {
      slider.innerHTML = '';
      type === 'shuffled' ? createSliderShuffled(firstIndex, lastIndex - 5) : createSlider(firstIndex, lastIndex - 5);
    }
  });
};

responsiveSlider(firstIndex, lastIndex, 'shudffled');

// Buttons functionality
const alwaysFirst = document.getElementById('always-first');
const alwaysLast = document.getElementById('always-last');
const previousPage = document.getElementById('previous-page');
const nextPage = document.getElementById('next-page');
const petsSlider = document.getElementById('pets-slider');
const pagination = document.getElementById('pagination-btn');
let page = 1;
let pageMax = null;
if (screen.width >= 1280) {
  pageMax = 6;
}
if (screen.width < 1280 && screen.width >= 768) {
  pageMax = 8;
}
if (screen.width < 768) {
  pageMax = 16;
}
window.addEventListener('resize', () => {
  if (screen.width >= 1280) {
    pageMax = 6;
    modal();
  }
  if (screen.width < 1280 && screen.width >= 768) {
    pageMax = 8;
    modal();
  }
  if (screen.width < 768) {
    pageMax = 16;
    modal();
  }
});
const setPageNum = (type) => {
  if (type == 'last') {
    page = pageMax;
    nextPage.disabled = true;
    alwaysLast.disabled = true;
    previousPage.disabled = false;
    alwaysFirst.disabled = false;
  } else if (type == 'first') {
    page = 1;
    nextPage.disabled = false;
    alwaysLast.disabled = false;
    previousPage.disabled = true;
    alwaysFirst.disabled = true;
  } else if (type == 'previous') {
    if (page - 1 === 1) {
      page -= 1;
      previousPage.disabled = true;
      alwaysFirst.disabled = true;
    } else {
      page -= 1;
      nextPage.disabled = false;
      alwaysLast.disabled = false;
      previousPage.disabled = false;
      alwaysFirst.disabled = false;
    }
  } else {
    if (page + 1 === pageMax) {
      page += 1;
      nextPage.disabled = true;
      alwaysLast.disabled = true;
    } else {
      page += 1;

      previousPage.disabled = false;
      alwaysFirst.disabled = false;
      nextPage.disabled = false;
      alwaysLast.disabled = false;
    }
  }
  modal();
  pagination.innerHTML = page;
};

alwaysFirst.addEventListener('click', (e) => {
  petsSlider.innerHTML = '';
  responsiveSlider(1, 8, 'notShuffled');
  setPageNum('first');
});

previousPage.addEventListener('click', (e) => {
  petsSlider.innerHTML = '';
  lastIndex = [7, 14, 21, 28, 34, 41, 47].sort(() => 0.5 - Math.random()).slice(0, 1)[0];
  firstIndex = lastIndex - 7;
  responsiveSlider(firstIndex, lastIndex, 'shuffled');
  setPageNum('previous');
});

alwaysLast.addEventListener('click', (e) => {
  petsSlider.innerHTML = '';
  responsiveSlider(47 - 7, 47, 'notShuffled');
  setPageNum('last');
});

nextPage.addEventListener('click', (e) => {
  petsSlider.innerHTML = '';
  lastIndex = [7, 14, 21, 28, 34, 41, 47].sort(() => 0.5 - Math.random()).slice(0, 1)[0];
  firstIndex = lastIndex - 7;
  responsiveSlider(firstIndex, lastIndex, 'shuffled');
  setPageNum('next');
});

modal();
