import { ServiceList } from "./servicesComponents/ServiceList";

const CarRent = () => {
  const list = [
    {
      id: "1",
      img: "https://www.karvi.com.ar/blog/wp-content/uploads/2022/01/Cronos0-850x524.jpg",
      imgDesc: "desx",
      name: "auto 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id: "2",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id: "3",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id: "4",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id: "5",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id: "6",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
  ];
  return <ServiceList list={list} />;
};

export default CarRent;
