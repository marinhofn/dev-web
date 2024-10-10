import React from 'react';
import ParkingMap from './components/ParkingMap.tsx';
import Header from './components/Header.tsx'; // Importando o novo componente

function App() {
  return (
    <div className="App">
      <Header /> {/* Adicionando o cabeçalho */}
      <ParkingMap />
    </div>
  );
}

export default App;
