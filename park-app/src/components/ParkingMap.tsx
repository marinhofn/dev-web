import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Biblioteca para fazer as requisições HTTP
import './ParkingMap.css'; // Importando o arquivo de estilos

// Definindo uma interface para a estrutura da vaga
interface Vaga {
  id: string;
  numero: string;
  disponibilidade: boolean;
}

const ParkingMap = () => {
  const [vagas, setVagas] = useState<Vaga[]>([]); // Estado para armazenar as vagas
  const [vagaSelecionada, setVagaSelecionada] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState<string | null>(null);

  // Função para buscar as vagas ao carregar o componente
  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await axios.get('http://localhost:4000/vaga/vagas'); // Use o caminho correto da API
        setVagas(response.data); // Salva as vagas no estado
      } catch (error) {
        console.error('Erro ao buscar as vagas:', error);
        setMensagem('Erro ao carregar as vagas.');
      }
    };

    fetchVagas();
  }, []);

  // Função para lidar com a reserva de uma vaga
  const handleVagaClick = async (vagaId: string, vagaNumero: string) => {
    setVagaSelecionada(vagaId);

    try {
      // Faz a requisição para criar uma reserva com a vaga selecionada
      await axios.post('http://localhost:4000/reserva/reservas', {
        dataHoraEntrada: "2024-10-10T08:00:00Z",
        dataHoraSaida: "2024-10-10T12:00:00Z",
        userId: "f01f966e-690d-4895-8a8a-171cb7f4122d",
        vagaId,
        estacionamentoId: "9d734d72-de77-4988-9c65-f59fa8e66522",
      });
      setMensagem(`Vaga ${vagaNumero} reservada com sucesso!`);

      // Atualiza o estado das vagas para marcar a vaga como não disponível
      setVagas((prevVagas) =>
        prevVagas.map((vaga) =>
          vaga.id === vagaId ? { ...vaga, disponibilidade: false } : vaga
        )
      );

    } catch (error) {
      console.error('Erro ao reservar a vaga:', error);
      setMensagem('Erro ao realizar a reserva.');
    }
  };

  return (
    <div className="parking-map">
      <h2>Selecione sua Vaga no Estacionamento</h2>
      {mensagem && <p>{mensagem}</p>}

      {vagas.length > 0 ? (
        vagas.map((vaga) => (
          <div
            key={vaga.id}
            className={`vaga ${vaga.disponibilidade ? 'disponivel' : 'ocupada'}`}
            onClick={() => vaga.disponibilidade && handleVagaClick(vaga.id, vaga.numero)} // Adiciona verificação para que só chame a função se a vaga estiver disponível
          >
            {vaga.numero}
          </div>
        ))
      ) : (
        <p>Carregando vagas...</p>
      )}
      
      {vagaSelecionada && <p>Vaga selecionada: {vagaSelecionada}</p>}
    </div>
  );
};

export default ParkingMap;
