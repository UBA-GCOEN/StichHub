const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%#^&*])(?=.*[0-9]).{8,}$/;
const emailRegex =
  /^\w+([\.-]?\w+)*@(gmail\.com|yahoo\.com|hotmail\.com|aol\.com|outlook\.com)$/;
const phoneRegex = /^\d{10}$/;
const countryRegex = /^[A-Za-z]{4,}$/;
const pincodeRegex = /^[0-9]+$/;

const validate = {
  name: (value) => {
      return value.trim().length < 6
        ? { name: true, nameError: "Name must be atleast 6 characters long" }
        : { name: false, nameError: false };
  },
  email: (value) => {
    return emailRegex.test(value)
      ? { email: false, emailError: false }
      : { email: true, emailError: "Please enter a valid email address" };
  },

  password: (value) => {
    return passwordRegex.test(value)
      ? { password: false, passwordError: false }
      : {
          password: true,
          passwordError:
            "Minimum 8 characters, 1 uppercase, 1 lowercase, 1 symbol (@$%#^&*), 1 number (0-9)",
        };
  },

  phoneno: (value) => {
    return phoneRegex.test(value)
      ? { phoneno: false, phonenoError: false }
      : {
          phoneno: true,
          phonenoError: "Please Enter valid Phone number",
        };
  },

  contact: (value) => {
    return phoneRegex.test(value)
      ? { contact: false, contactError: false }
      : {
          contact: true,
          contactError: "Please Enter valid Phone number",
        };
  },

  message: (value) => {
    const numOfWords = value.trim().split(/\s+/).length;

    if (numOfWords < 10 || numOfWords > 100) {
      return {
        message: true,
        messageError: "Describe the issue in 10 to 100 words",
      };
    } else {
      return { message: false, messageError: false };
    }
  },

  country: (value) => {
      return countryRegex.test(value)
        ? { country: false, countryError: false }
        : { country: true, countryError: "Please Enter Valid Country" };
    
  },

  notEmpty: (name, value) => {
    const messageKey = name + "Error";
    if (!value) return { [name]: true, [messageKey]: "Please fill this field" };
    else return { [name]: false, [messageKey]: false };
  },

  bio: (value) => {
    const numOfWords = value.trim().split(" ").length;

    if (numOfWords < 10 || numOfWords > 50) {
      return { bio: true, bioError: "Describe yourself in 10 to 50 words" };
    } else {
      return { bio: false, bioError: false };
    }
  },

  files: (name, length)=>{
      const messageKey = name + "Error";
      return (length === 0)? {[name]: true, [messageKey]: "Plesae Fill this Field"} : {[name]: false, [messageKey]: false} 
  },

  pincode: (value)=>{
    return pincodeRegex.test(value)
    ? { pincode: false, pincodeError: false }
    : { pincode: true, pincodeError: "Please Enter Valid Pincode" };
  },

  firstname: (value)=>{
    return value.trim().length < 3
    ? { firstname: true, firstnameError: "First name must be atleast 3 characters long" }
    : { firstname: false, firstnameError: false };
  },

  lastname: (value)=>{
    return value.trim().length < 3
    ? { lastname: true, lastnameError: "First name must be atleast 3 characters long" }
    : { lastname: false, lastnameError: false };
  },

  contactInitialVal: {
    name: true,
    nameError: null,
    email: true,
    emailError: null,
    phoneno: true,
    phonenoError: null,
    message: true,
    messageError: null,
  },

  verificationInitialValue: {
    contact: true,
    country: true,
    address: true,    
    address2: true, 
    city: true,   
    state: true,   
    pincode:true,
    passport:true,
    aadhar:true,
    proffesionalDoc:true,
    bio: true
  },

  cartFormInitial: {
    firstname: true,
    lastname: true,
    email: true,
    contact: true,
    country: true,
    address: true,    
    address2: true, 
    city: true,   
    state: true,   
    pincode:true,

  }
};


export default validate;
