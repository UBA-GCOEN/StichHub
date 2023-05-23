import logo from '../assets/logo/Long - Logo Transparent (White).png'
import {
  designIcon,
  Measurement,
  CartIcon,
  tailor,
  appointment,
  menu,
  close,
  CreatProfileIcon,
  TakeOrdersIcon,
  HomeDelivery,
  delivery,

} from "../assets/MainLandingPage/Icons";

const navbar = [
  {title: "Home", id:""},
  {title: "Our Services", id:"ourServices"},
  {title: "How it Works?", id:"howitworks"},
  {title: "About us", id:"aboutus"},
  {title: "Contact us", id:"contactus"}
];

const hiwcustomer = [
  {step: '1', img: designIcon, title: 'DESIGN YOUR CLOTH', style: "sm:mb-7"},
  {step: '2', img: Measurement, title: 'TAKE ONLINE MEASUREMENTS', style: ""},
  {step: '3', img: tailor, title: 'SELECT YOUR FAVOURITE TAILOR', style: ""},
  {step: '4', img: CartIcon, title: 'PLACE YOUR ORDER', style: "sm:mb-7"},
];

const hiwtailor = [
  {step: '1', img: CreatProfileIcon, title: `CREATE PROFILE`, style: ""},
  {step: '2', img: TakeOrdersIcon, title: 'TAKE ORDER', style: ""},
  {step: '3', img: tailor, title: 'STITCH CLOTHES', style: ""},
  {step: '4', img: delivery, title: 'DELIVER IT', style: ""},
];

export {
    navbar,
    logo,
    menu,
    hiwcustomer,
    hiwtailor,
    appointment,
    close,
}
