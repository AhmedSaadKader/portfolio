import epharmacyAllDrugs from "./projectImages/epharmacy/allDrugs.PNG";
import pokeMemory from "./projectImages/memoryGame/pokemonMemory.PNG";
import waldoFirst from "./projectImages/waldo/Capture.PNG";
import cvTemplate from "./projectImages/cvTemplate/cvTemplate.PNG";
import { v4 } from "uuid";

export const projectsList = [
  {
    id: v4(),
    images: [
      epharmacyAllDrugs,
      "./projectImages/epharmacy/epharmacy screenshots.PNG",
      "./projectImages/epharmacy/sale.PNG",
    ],
    name: "ePharmacy ERP system",
    description: "html css javascript react firebase",
    code: "",
    link: "https://epharmacy-az.web.app/",
  },
  {
    id: v4(),
    images: [pokeMemory],
    name: "Memory Game",
    description: "html css javascript react",
    code: "https://github.com/AhmedSaadKader/memory-game",
    link: "https://ahmedsaadkader.github.io/memory-game/",
  },
  {
    id: v4(),
    images: [waldoFirst],
    name: "Finding Waldo",
    description: "html css javascript react firebase",
    code: "https://github.com/AhmedSaadKader/where-s-waldos",
    link: "https://where-s-waldo-aza.web.app/",
  },
  {
    id: v4(),
    images: [cvTemplate],
    name: "CV Template",
    description: "html css javascript react firebase",
    code: "https://github.com/AhmedSaadKader/cv-project",
    link: "https://ahmedsaadkader.github.io/cv-project/",
  },
];
