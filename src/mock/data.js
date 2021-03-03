import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website

};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'bikeup.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.keepandshare.com/doc8/24119/resume-dave-hernan-pdf-188k?da=y', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'plantito.jpg',
    title: 'Plantito',
    info: 'An online store based on amazon website \
    This was my practicum project in Robertson College.\
    I know 1 day this will be deployed and be used.',
    info2: 'This app was made tru MongoDB, Express.js, React and Node.js ',
    url: '',
    
  },
  {
    id: nanoid(),
    img: 'Simple MVC1.png',
    title: 'MVC in C#',
    info: 'A program that have the ability to store/view, create, edit and delete data. Language used was C# .NetFramwork and I used the inbuilt MYSQL as database',
    info2: 'Credits to my mentor who shared some go through.',
    url: '',
    
  },
  {
    id: nanoid(),
    img: 'DH Logo.png',
    title: 'Letter Logo',
    info: 'This was made with Adobe Photoshop',
    info2: '',
    url: '',
    
  },
  {
    id: nanoid(),
    img: 'Calling card.png',
    title: 'Calling card',
    info: 'A simple template for calling card',
    info2: 'App used was Adobe Illustrator',
    url: '',
    
  },
  {
    id: nanoid(),
    img: 'Spiral Vortex.png',
    title: 'Simple Vortex',
    info: 'App used was Adobe Illustrator',
    info2: '',
    url: '',
    
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hernankhristiandave@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/khristiandave.hernan',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/',
    },
  ],
};

