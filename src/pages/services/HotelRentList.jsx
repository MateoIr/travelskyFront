
import { ServiceList } from "./servicesComponents/ServiceList"

const HotelRent = () => {
  const listado = [
    {
      id: "1",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
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
  return (
    <div>
      <ServiceList listado={listado}></ServiceList>
    </div>
  );
}

export default HotelRent
