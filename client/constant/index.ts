interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Company" },
  { id: 3, text: "Resources" },
  { id: 4, text: "About" },
  { id: 5, text: "Contact" },
];


export const socialLinks: socialLinks[] = [
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

export const products: ProductType[] = [
  {
      id: 1,
      section: "Company",
      link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?'],
  },
  {
      id: 2,
      section: "Contact",
      link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners']
  }
  ,
  {
      id: 3,
      section: "More",
      link: ['Airline fees', 'Airlines', 'Low fare tips', 'Badges &', 'Certificates']
  }
]