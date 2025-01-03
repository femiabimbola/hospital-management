interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}


const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Company" },
  { id: 3, text: "Resources" },
  { id: 4, text: "About" },
  { id: 5, text: "Contact" },
];


const socialLinks: socialLinks[] = [
  {
      imgSrc: '/assets/footer/facebook.svg',
      link: 'www.facebook.com',
      width: 10
  },
  {
      imgSrc: '/assets/footer/insta.svg',
      link: 'www.instagram.com',
      width: 14
  },
  {
      imgSrc: '/assets/footer/twitter.svg',
      link: 'www.twitter.com',
      width: 14
  },
]