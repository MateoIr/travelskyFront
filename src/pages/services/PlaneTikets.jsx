import { Service } from "./servicesComponents/Service";

const PlaneTikets = () => {
  const information = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1499063078284-f78f7d89616a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgDesc: "desx",
      name: "Vuelo 1",
      cost: "6000",
      desc: "Vuelo 1 descrition",
    },
  ];
  return (
    <div>
      <Service information={information}></Service>
    </div>
  );
};

export default PlaneTikets;
