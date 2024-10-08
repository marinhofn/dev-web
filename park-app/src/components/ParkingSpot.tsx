import React, { useContext } from 'react';
import { ParkingContext } from './components/ParkingContext.tsx';

const ParkingSpot = ({ key, spot }) => {
  const { selectSpot } = useContext(ParkingContext);

  return (
    <div 
      className={`parking-spot ${spot.reserved ? 'reserved' : ''}`} 
      onClick={() => !spot.reserved && selectSpot(spot.id)}
    >
      {spot.number}
    </div>
  );
};

export default ParkingSpot;
