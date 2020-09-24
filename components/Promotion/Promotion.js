import styles from "../../styles/HomePage.module.css";
import Card from "./Card";
const Elite4 = [
  {
    name: "Tendon McGee",
    age: "27",
    height: "6ft",
    weight: "215",
    url: "/arnold.jpg",
  },
  {
    name: "Chad Smith",
    age: "21",
    height: "6ft",
    weight: "215",
    url: "/enjoyer.jpg",
  },
  {
    name: "Jeff",
    age: "16",
    height: "6ft",
    weight: "215",
    url: "/gorilla.jpg",
  },
  {
    name: "???",
    age: "??",
    height: "???",
    weight: "???",
    url: "/character-locked.jpg",
  },
];
const Promotion = () => {
  return (
    <div className="border-2 border-blue-500 container mx-auto mt-5">
      <div className="text-center text-4xl">
        Defeat Tendon Clan's <span className="text-yellow-700">Elite 4</span>{" "}
        Win AirPods
      </div>
      <div className="flex flex-wrap justify-center">
        {Elite4.map((tendon) => {
          return <Card tendon={tendon} />;
        })}
      </div>
    </div>
  );
};

export default Promotion;
