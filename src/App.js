import React from "react";
import "./reset.css";
import "./App.css";

import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import woman_1 from "../src/Images/woman_1.jpg";
import man_1 from "../src/Images/man_1.jpg";
import woman_2 from "../src/Images/woman_2.jpg";
import man_2 from "../src/Images/man_2.jpg";

const itemList = [
  {
    id: 1,
    name: "Usługa 1",
    isNew: true,
  },
  {
    id: 2,
    name: "Usługa 2",
    isNew: false,
  },
  {
    id: 3,
    name: "Usługa 3",
    isNew: false,
  },
  {
    id: 4,
    name: "Usługa 4",
    isNew: false,
  },
  {
    id: 5,
    name: "Usługa 5",
    isNew: false,
  },
  {
    id: 6,
    name: "Usługa 6",
    isNew: false,
  },
];

const employeeList = [
  {
    id: 1,
    name: "Aleksandra",
    surname: "Janaszek",
    department: "[HR]",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur, iure sequi exercitationem veniam perspiciatis necessitatibus illum nam suscipit optio quam dolorem mollitia itaque nihil ad perferendis laudantium libero dolor.",
    src: woman_1,
  },
  {
    id: 2,
    name: "Mateusz",
    surname: "Borkowski",
    department: "[IT]",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur, iure sequi exercitationem veniam perspiciatis necessitatibus illum nam suscipit optio quam dolorem mollitia itaque nihil ad perferendis laudantium libero dolor.",
    src: man_1,
  },
  {
    id: 3,
    name: "Patrycja",
    surname: "Pominkiewicz",
    department: "[Marketing]",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur, iure sequi exercitationem veniam perspiciatis necessitatibus illum nam suscipit optio quam dolorem mollitia itaque nihil ad perferendis laudantium libero dolor.",
    src: woman_2,
  },
  {
    id: 4,
    name: "Karol",
    surname: "Kępiński",
    department: "[Sales]",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur, iure sequi exercitationem veniam perspiciatis necessitatibus illum nam suscipit optio quam dolorem mollitia itaque nihil ad perferendis laudantium libero dolor.",
    src: man_2,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Main employeeList={employeeList} itemList={itemList} />
      <Footer />
    </>
  );
}

export default App;
