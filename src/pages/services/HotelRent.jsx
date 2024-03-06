import { Service } from "./servicesComponents/Service";

const HotelRent = () => {
  const information = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
  ];
  return (
    <div>
      <Service information={information}></Service>
    </div>
  );
};

export default HotelRent;
