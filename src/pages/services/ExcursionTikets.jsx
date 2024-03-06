import { Service } from './servicesComponents/Service';

const ExcursionTikets = () => {
    const information = [
        {
          id: "1",
          img: "https://images.unsplash.com/photo-1621528833554-c7cc26249762?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imgDesc: "desx",
          name: "Excursion 1",
          cost: "6000",
          desc: "Excursion 1 descrition",
        },
      ];
      return (
        <div>
          <Service information={information}></Service>
        </div>
      );
}

export default ExcursionTikets
