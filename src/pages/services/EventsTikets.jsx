import { Service } from "./servicesComponents/Service";

const EventTikets = () => {
  const information = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1587407627257-27b7127c868c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgDesc: "desx",
      name: "Evento 1",
      cost: "6000",
      desc: "Evento  1 descrition",
    },
  ];
  return <Service information={information} />;
};

export default EventTikets;
