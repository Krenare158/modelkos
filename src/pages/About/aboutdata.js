 import about1 from '../../../assets/images/about1.webp';
 import about2 from '../../../assets/images/about2.webp';

export const about = [
  {
    head: 'About US',
    para: 'ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent.'
  },
  {
    images: [
      {
        src: about1,
        alt: 'Image 1',
        rotate: true,
        class:'first',
        position: 'top',
        name: 'Dea Gashi',
        Details: [
          { description: 'Model' },
          { description: 'Photography' },
          { description: 'Artist' }
        ],
        date: '19 MAY 2022'
      },
      {
         src: about2,
        alt: 'Image 2',
        rotate: true,
        class:'second',
        position: 'bottom',
        name: 'Dea Gashi',
        Details: [
          { description: 'Model' },
          { description: 'Photography' },
          { description: 'Artist' }
        ],
        date: '19 MAY 2022'
      }
    ]
  }
];
