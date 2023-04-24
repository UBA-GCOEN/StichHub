import {
  collar1,
  collar2,
  collar3,
  collar4,
  collar5,
  cuff1,
  cuff2,
  cuff3,
  sleeve1,
  sleeve2,
  sleeve3,
  back1,
  back2,
  back3,
} from "../assets/3dConfigurator/configurator-icons";

const fabrics = [
  { name: "Cotton"},
  { name: "Wool"},
  // { name: "Linen", texture: linenTextureProps},
  { name: "Silk"},
];

const clothColor = [
  { color: "White", hex: "#ffffff" },
  { color: "Black", hex: "#000000" },
  { color: "Red", hex: "#FF0000" },
  { color: "Orange", hex: "#FF7F00" },
  { color: "Yellow", hex: "#FFFF00" },
  { color: "Green", hex: "#00FF00" },
  { color: "Blue", hex: "#0000FF" },
  { color: "Indigo", hex: "#4B0082" },
  { color: "Violet", hex: "#9400D3" },
];

const shirtPart = [
  {
    index: 0,
    text: "Sleeve",
    zoom: false,
    pos: [0, -1.26, 0],
    rot: [0, 0, 0],
    types: [
      {
        img: sleeve1,
        typeName: "Sleeve 1",
      },
      {
        img: sleeve2,
        typeName: "Sleeve 2",
      },
      {
        img: sleeve3,
        typeName: "Sleeve 3",
      },
    ],
  },
  {
    index: 1,
    text: "Collar",
    zoom: true,
    pos: [0, -0.17, 3.5],
    rot: [0, 0, 0],
    types: [
      {
        img: collar1,
        typeName: "Collar 1",
      },
      {
        img: collar2,
        typeName: "Collar 2",
      },
      {
        img: collar3,
        typeName: "Collar 3",
      },
      {
        img: collar4,
        typeName: "Collar 4",
      },
      {
        img: collar5,
        typeName: "Collar 5",
      },
    ],
  },
  {
    index: 2,
    text: "Back Details",
    zoom: false,
    pos: [0, -1.26, 0],
    rot: [0, 3.1, 0],
    types: [
      {
        img: back1,
        typeName: "Back 1",
        using: true,
      },
      {
        img: back2,
        typeName: "Back 2",
        using: true,
      },
      {
        img: back3,
        typeName: "Back 3",
        using: true,
      },
    ],
  },
  {
    index: 3,
    text: "Cuffs",
    zoom: true,
    pos: [0.25, 0.25, 3],
    rot: [0, 3.6, 0],
    types: [
      {
        img: cuff1,
        typeName: "Cuff 1",
        using: true,
      },
      {
        img: cuff2,
        typeName: "Cuff 2",
        using: true,
      },
      {
        img: cuff3,
        typeName: "Cuff 3",
        using: true,
      },
    ],
  },
  {
    index: 4,
    text: "Buttons",
    zoom: true,
    pos: [0.25, 0.25, 3],
    rot: [0, 3.6, 0],
    types: [],
  },
];

export { fabrics, shirtPart, clothColor };
