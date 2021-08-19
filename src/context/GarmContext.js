import React, { createContext, useState, useCallback } from "react";

export const GarmsContext = createContext(null);

export function GarmsProvider(props) {
  const [garms, setGarms] = useState([
    {
      title: "Peace Pants",
      type: "bottoms",
      brand: "Story MFG",
      cost: 450,
      condition: "new",
      season: "SS",
      id: "1",
      img: "./images/peacepants.webp",
      own: false,
    },
    {
      title: "Straight Leg Denim",
      type: "bottoms",
      brand: "Studio D'Artisan",
      cost: 300,
      condition: "vintage",
      season: "FW",
      id: "2",
      img: "./images/jeans.jpg",
      own: true,
    },
    {
      title: "Olive Chore Coat",
      type: "outerwear",
      brand: "Paynter Jacket Co.",
      cost: 195,
      condition: "vintage",
      season: "FW",
      id: "3",
      img: "./images/paynterjacket.webp",
      own: true,
    },
    {
      title: "Polite Pullover",
      type: "outerwear",
      brand: "Story MFG",
      cost: 400,
      condition: "new",
      season: "FW",
      id: "4",
      img: "./images/politepullover.webp",
      own: false,
    },
    {
      title: "Maritime Shirt",
      type: "top",
      brand: "Taylor Stitch",
      cost: 125,
      condition: "used",
      season: "all",
      id: "5",
      img: "./images/denimshirt.jpg",
      own: true,
    },
    {
      title: "White T-Shirt",
      type: "top",
      brand: "Taylor Stitch",
      cost: 45,
      condition: "used",
      season: "all",
      id: "6",
      img: "./images/whitetee.jpg",
      own: true,
    },
    {
      title: "Work Boots",
      type: "footwear",
      brand: "Oak Street Boots",
      cost: 295,
      condition: "new",
      season: "FW",
      id: "7",
      img: "./images/boots.jpg",
      own: false,
    },
    {
      title: "White High-tops",
      type: "footwear",
      brand: "Converse",
      cost: 75,
      condition: "new",
      season: "all",
      id: "8",
      img: "./images/converse.jpg",
      own: true,
    },
  ]);
  const addGarm = useCallback((toAdd) => {
    setGarms((curr) => [...curr, toAdd]);
  }, []);
  const deleteGarm = useCallback((id) => {
    setGarms((curr) => curr.filter((val) => val.id !== id));
  }, []);
  const edit = useCallback((id, key, newVal) => {
    setGarms((curr) => {
      return curr.map((val) => {
        if (val.id === id) {
          let copy = { ...val };
          console.log(copy);
          copy[key] = newVal;
          console.log(copy);
          //   console.log(newVal, copy, copy[key]);
          //   return (copy[key] = newVal);
          return copy;
        }
        return val;
      });
    });
  }, []);
  const toggleOwn = useCallback(
    (id, own) => {
      edit(id, "own", !own);
    },
    [edit]
  );
  const changeName = useCallback(
    (id, newName) => {
      edit(id, "name", newName);
    },
    [edit]
  );

  return (
    <GarmsContext.Provider value={{ garms, addGarm, deleteGarm, toggleOwn }}>
      {props.children}
    </GarmsContext.Provider>
  );
}
