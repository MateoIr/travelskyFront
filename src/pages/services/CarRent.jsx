import { Service } from "./servicesComponents/Service";

const CarRent = () => {
  const information = [
    {
      id: "1",
      img: "https://www.karvi.com.ar/blog/wp-content/uploads/2022/01/Cronos0-850x524.jpg",
      imgDesc: "desx",
      name: "Auto 1",
      cost: "6000",
      desc: "Auto 1 descrition",
    },
  ];
  return (
    <div>
      <Service information={information}></Service>
    </div>
  );
};

export default CarRent;
