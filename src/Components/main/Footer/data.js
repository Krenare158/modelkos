import { BiCopyright, BiLogoTiktok } from 'react-icons/bi';
import logo from '../../../assets/images/logo.jpg'
import { FiFacebook, FiInstagram,FiTwitter } from 'react-icons/fi';

export const FooterData = [
  {
    category: 'Models',
    linkss: [
      { link: 'Book Model', to: '/' },
      { link: 'Man Models', to: '/' },
      { link: 'Woman Models', to: '/' },
      { link: 'Kid Models', to: '/' },
      { link: 'Membership', to: '/' }
    ],
  },
  {
    category: 'About',
    linkss: [
      { link: 'Company', to: '/' },
      { link: 'Our Team', to: '/' },
      { link: 'Partners', to: '/' },
      { link: 'Career', to: '/' },
      { link: 'News & Events', to: '/' }
    ],
  },
  {
    category: 'Work',
    linkss: [
      { link: 'Photography', to: '/' },
      { link: 'Design', to: '/' },
      { link: 'Makeup Artist', to: '/' },
      { link: 'Fashion Show', to: '/' },
      { link: 'Advertising', to: '/' }
    ],
  },
  {
    category: 'Support',
    linkss: [
      { link: 'Privacy Statement', to: '/' },
      { link: 'Terms of Service', to: '/' },
      { link: 'Help', to: '/' },
      { link: 'FAQ', to: '/' },
      { link: 'Contacts', to: '/' },
    ],
  },
  {
    category1: 'Models',
    details: [
      { phone: 'Women - 0207 376 7764' },
      { phone: 'Men - 0207 376 7464' },
      { email: 'bookamodel@modelkos.com' }
    ]
  },
  {
    category1: 'Modelkos Management',
    details: [
      { description: '1st Floor' },
      { description: '5 Jubilee Place' },
      { address: 'Prishtina, Kosovo' }
    ]
  },
  {
    category1: 'Jobs',
    details: [
      { email: 'jobs@modelkos.com' }
    ]
  },
  {
    img:logo,
    category: 'MODELKOS',
    icon:<BiCopyright/>,
    name:'2022 MODELKOS',
    linka: [
      { link: 'Privacy Statement', to: '/' },
      { link: 'Terms of Service', to: '/' },
      { link: 'Help/FAQ', to: '/' }
    ],
    social:[
      {icon:<FiFacebook/>},
      {icon:<FiInstagram/>},
      {icon:<BiLogoTiktok/>},
      {icon:<FiTwitter/>}
    ],
    phone:'+383(44) 100 200'
  }
];
