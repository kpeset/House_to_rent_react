interface HouseTypes {
  house: {
    name: string;
    type: string;
    desc: string;
    img: string;
  };
}

export default function HouseCard({ house }: HouseTypes) {
  return (
    <article>
      <div>
        <h2>{house.name}</h2>
        <h3>{house.type}</h3>
        <p>{house.desc}</p>
      </div>
      <img src={house.img} alt={house.name} />
    </article>
  );
}
