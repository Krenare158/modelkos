 import home2 from '../../../assets/images/home2.webp';
 import home3 from '../../../assets/images/home3.webp';
import { FaMapMarked } from 'react-icons/fa';  

export const data = [
  {
     images: [
       { src: home3, alt: 'Image 1', rotate: true, position: 'top' },
       { src: home2, alt: 'Image 2', position: 'bottom' }
     ]
  }
];

export const modelOptions = [
  { value: "female-models", label: "Female Models" },
  { value: "male-models", label: "Male Models" },
];

export const locationOptions = [
  { icon: <FaMapMarked/>, label: "Find Location" },
  { value: "Prishtine", label: "Prishtine" },
  { value: "Gjilan", label: "Gjilan" },
];
