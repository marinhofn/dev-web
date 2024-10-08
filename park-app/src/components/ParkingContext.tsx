import React, { createContext, useState } from 'react';

export const ParkingContext = createContext();

export const ParkingProvider = ({ children }) => {
  const [parkingSpots, setParkingSpots] = useState([
    { id: 1, number: 'A1', reserved: false },
    { id: 2, number: 'A2', reserved: false },
    // mais vagas...
  ]);

  const reserveSpot = async (id) => {
    try {
      const response = await fetch(`/reservas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vagaId: id }), // Envia o ID da vaga para reserva
      });

      if (!response.ok) {
        throw new Error('Erro ao reservar a vaga');
      }

      const data = await response.json();

      // Atualiza o estado local somente se a reserva foi bem-sucedida
      setParkingSpots(
        parkingSpots.map(spot =>
          spot.id === id ? { ...spot, reserved: true } : spot
        )
      );
    } catch (error) {
      console.error('Erro ao reservar a vaga:', error);
    }
  };

  const selectSpot = (id) => {
    // Verifica se a vaga já está reservada
    const spot = parkingSpots.find(spot => spot.id === id);
    if (!spot || spot.reserved) {
      return;
    }

    // Faz a chamada à API para reservar a vaga
    reserveSpot(id);
  };

  return (
    <ParkingContext.Provider value={{ parkingSpots, selectSpot }}>
      {children}
    </ParkingContext.Provider>
  );
};
