//create Context

import { createContext } from "react";
export const AppContext = createContext();

//create Provider

 export function UserProvider({children}) {
 
  const items = [
    {
      id: 1,
      category: "t-shirt",
      title: "Black T-Shirt",
      img: ".images\blackMen.avif",
      price: "999.00",
    },

    {
      id: 2,
      category: "t-shirt",
      title: "Beige T-Shirt",
      img: ".images\beigeTshirt.avif",
      price: "999.00",
    },

    {
      id: 3,
      category: "full t-shirt",
      title: "Black Full T-Shirt",
      img: ".images\blackFull.avif",
      price: "999.00",
    },

    {
      id: 4,
      category: " oversize t-shirt",
      title: "Black Oversize T-Shirt",
      img: ".images\blackOversize.jpg",
      price: "999.00",
    },

    {
      id: 5,
      category: "t-shirt",
      title: "White T-Shirt",
      img: ".imageswhiteTshirt.avif",
      price: "999.00",
    },

    {
      id: 6,
      category: "t-shirt",
      title: "Black Printed T-Shirt",
      img: ".images\blackPrint.avif",
      price: "999.00",
    },

    {
      id: 7,
      category: "t-shirt",
      title: "White T-Shirt",
      img: ".imageswhiteMen.avif",
      price: "999.00",
    },

    {
      id: 8,
      category: "vest",
      title: "White Vest",
      img: ".imageswhitevest.avif",
      price: "399.00",
    },

    {
      id: 9,
      category: "oversize t-shirt",
      title: "Brown Oversize T-Shirt",
      img: ".images\brownOversize.jpg",
      price: "999.00",
    },

    {
      id: 10,
      category: "t-shirt",
      title: "Back Printed T-Shirt",
      img: ".images\backPrint.avif",
      price: "999.00",
    },

    {
      id: 11,
      category: "t-shirt",
      title: "White T-Shirt",
      img: ".imageswhitePrint.avif",
      price: "999.00",
    },
  ];

  

 
  return (
    <AppContext.Provider value={items}>{children}</AppContext.Provider>
   
  );
}
