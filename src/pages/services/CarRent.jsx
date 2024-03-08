import FetchComponent from "../../hooks/Fetch";

import { Service } from "./servicesComponents/Service";

const CarRent = () => {
  const information = FetchComponent("servicios");
  console.log(information);
  const information2 = [
    {
      id: "1",
      img: "https://www.karvi.com.ar/blog/wp-content/uploads/2022/01/Cronos0-850x524.jpg",
      imgDesc: "desx",
      name: "Auto 1",
      cost: "6000",
      desc: "Auto 1 descrition",
    },
  ];
  return <Service information={information} />;
};

export default CarRent;
