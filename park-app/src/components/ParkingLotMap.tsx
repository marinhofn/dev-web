import React, { useContext } from 'react';
import ParkingSpot from '../../../src/components/ParkingSpot.tsx';
import { ParkingContext } from './ParkingContext.tsx';

const ParkingLotMap = () => {
  const { parkingSpots } = useContext(ParkingContext);

  return (
    <div className="parking-lot">
      {parkingSpots.map(spot => (
        <ParkingSpot key={spot.id} spot={spot} />
      ))}
    </div>
  );
};

export default ParkingLotMap;
