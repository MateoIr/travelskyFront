import { Service } from "./servicesComponents/Service";

const BusTikets = () => {
  const information = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1617479625255-43666e3a3509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgDesc: "desx",
      name: "Colectivo 1",
      cost: "6000",
      desc: "Colectivo  1 descrition",
    },
  ];
  return <Service information={information} />;
};

export default BusTikets;
