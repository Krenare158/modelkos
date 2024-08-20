import logo from '../../../assets/images/logo.jpg'
import ab from '../../../assets/images/ab.webp'
import abo from '../../../assets/images/abo.webp'

export const data1 =[
    {
        img:logo
    }
]
export const data = [
   
    {
        category: 'AGENCY',
        linkss: [
          { link: 'About us', to: '/' },
          { link: 'Our Models', to: '/' },
          { link: 'Our Partners', to: '/' },
          { link: 'Our Team', to: '/' },
          { link: 'Our Partners', to: '/' },
          { link: 'Clients', to: '/' }
        ],
    },
    {
        category: 'MODELS',
        linkss: [
          { link: 'Be a Model', to: '/' },
          { link: 'Careers', to: '/' },
          { link: 'Magazine', to: '/' },
          { link: 'Lists', to: '/' },
          { link: 'New Faces', to: '/' },
          { link: 'Rankings', to: '/' }
        ],
    },
    {
        images: [
            { src: ab, alt: 'Image 1',rotate: true,position: 'top' },
            { src: abo, alt: 'Image 2',position: 'bottom' , text:'MODELKOS' , year:'2022'}
        ]
    }
    
    
  ];