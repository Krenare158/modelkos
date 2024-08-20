import section1 from '../../../assets/images/section3.webp';
import section2 from '../../../assets/images/section2.webp';
import { CiCamera,} from 'react-icons/ci';
import { PiDressThin, PiGenderIntersexThin, PiInstagramLogoThin } from 'react-icons/pi';

export const data = [

  { 
    images: [
      { src: section1 },
      { src: section2 }
    ]
  }
];


export const whatWeOffer = [
  { icon:<PiDressThin/>,
    title:'Training',
    p:'We train actiors from commercials, campaigns, stores, showrooms, and retail outlets.',
    button:'View Details'
  },
  { icon:<CiCamera/>,
    title:'Training',
    p:'We train actiors from commercials, campaigns, stores, showrooms, and retail outlets.',
    button:'View Details'
  },
  { icon:<PiGenderIntersexThin/>,
    title:'Training',
    p:'We train actiors from commercials, campaigns, stores, showrooms, and retail outlets.',
    button:'View Details'
  },
  { icon:<PiInstagramLogoThin/>,
    title:'Training',
    p:'We train actiors from commercials, campaigns, stores, showrooms, and retail outlets.',
    button:'View Details'
  }
  
];
