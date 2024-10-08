import React from 'react';
import ParkingLotMap from '../../src/components/ParkingLotMap';
import { ParkingProvider } from '../../src/components/ParkingContext';

const Home = () => {
  return (
    <ParkingProvider children={undefined}>
      <div className="home">
        <h1>Estacionamento</h1>
        <ParkingLotMap />
      </div>
    </ParkingProvider>
  );
};

export default Home;
