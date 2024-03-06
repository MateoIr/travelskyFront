import { Service } from "./servicesComponents/Service";

const TrainTikets = () => {
  const information = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgDesc: "desx",
      name: "Tren 1",
      cost: "6000",
      desc: "Tren 1 descrition",
    },
  ];
  return <Service information={information} />;
};

export default TrainTikets;
