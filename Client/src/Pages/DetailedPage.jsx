import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailedPageComp = () => {
    const { id } = useParams()
    const [task, setTask ] = useState(null)

    useEffect(()=>{
        
    }, [id])
  return (
    <div>DetailedPageComp</div>
  )
}

export default DetailedPageComp








// const { id } = useParams();
//   const [car, setCar] = useState(null);

//   useEffect(() => {
//     let foundCar = null;

//     if (id.charAt(0) === "1") {
//       foundCar = Mockdata.find((car) => car.id === id);
//     } else if (id.charAt(0) === "2") {
//       foundCar = CaravanData.find((car) => car.id === id);
//     } else if (id.charAt(0) === "4") {
//       foundCar = TuningData.find((car) => car.id === id);
//     } else if (id.charAt(0) === "5") {
//       foundCar = UsedCarData.find((car) => car.id === id);
//     }

//     setCar(foundCar);
//   }, [id]);

//   if (!car) {
//     return <div>Loading or not found...</div>;
//   }