import { useState } from "react";
import HouseCard from "./HouseCard";

const houseToRent = [
  {
    id: 1,
    name: "Modern flat",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://www.v-immo.fr/wp-content/uploads/sites/84/2022/05/obtenir-maison-reves.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Beautiful design house",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true,
  },
  {
    id: 3,
    name: "Beautiful House",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://i.pinimg.com/originals/67/90/dc/6790dc46e5b063c871b0698723acbe98.jpg",
    available: false,
  },
  {
    id: 4,
    name: "Wonderful house with Garden",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: false,
  },
  {
    id: 5,
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://realty-luxe.com/wp-content/uploads/2019/04/La-maison-de-vos-r%C3%AAve-piscine.jpg",
    available: false,
  },
  {
    id: 6,
    name: "My top Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://realty-luxe.com/wp-content/uploads/2019/04/La-maison-de-vos-r%C3%AAve-piscine.jpg",
    available: false,
  },
];

export default function HousesList() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.currentTarget.value);
  };

  const filteredHouse = houseToRent
    .filter((house) => (type === "" ? house : house.type === type))
    .filter((house) => house.name.includes(name));

  return (
    <main>
      <h1>Maisons à louer</h1>
      <section className="filter">
        <input
          type="text"
          placeholder="Cherchez une maison..."
          onChange={handleChangeName}
        />
        <select onChange={handleChangeType}>
          <option value="">All</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>
      </section>

      <section className="houses">
        <h3>Il y a {filteredHouse.length} maisons disponibles</h3>
        {filteredHouse.length ? (
          filteredHouse.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))
        ) : (
          <p>Aucun résultat</p>
        )}
      </section>
    </main>
  );
}
