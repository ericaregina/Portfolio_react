import React, { useState, useEffect } from 'react';

function About() {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState(''); // Novo estado para descrição
  const [editIndex, setEditIndex] = useState(null);

  // Carregar agendamentos do localStorage quando o componente é montado
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (savedAppointments) {
      setAppointments(savedAppointments);
    }
  }, []);

  // Função para adicionar ou editar agendamento
  const handleSubmit = () => {
    if (date && time && description) { // Verificar se todos os campos estão preenchidos
      const newAppointment = { date, time, description };
      let updatedAppointments;

      if (editIndex !== null) {
        // Se estamos editando, atualiza o agendamento existente
        updatedAppointments = appointments.map((appointment, index) =>
          index === editIndex ? newAppointment : appointment
        );
      } else {
        // Se estamos criando um novo agendamento
        updatedAppointments = [...appointments, newAppointment];
      }

      setAppointments(updatedAppointments);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

      // Limpar campos e resetar estado de edição
      setDate('');
      setTime('');
      setDescription('');
      setEditIndex(null);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  // Função para excluir agendamento
  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  // Função para preencher os campos de edição
  const editAppointment = (index) => {
    setDate(appointments[index].date);
    setTime(appointments[index].time);
    setDescription(appointments[index].description); // Preencher descrição no formulário
    setEditIndex(index); // Marca que estamos editando
  };

  return (
    <div className="container">
      {/* Formulário de Agendamento */}
      <div className="form">
        <label htmlFor="date">Data:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="time">Hora:</label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Detalhes do agendamento"
        />

        <button onClick={handleSubmit}>
          {editIndex !== null ? 'Editar Agendamento' : 'Adicionar Agendamento'}
        </button>
      </div>

      {/* Lista de Agendamentos */}
      <div className="appointments-list">
        {appointments.length === 0 && <p>Nenhum agendamento disponível.</p>}
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <span>
              <strong>Data:</strong> {appointment.date} | <strong>Hora:</strong> {appointment.time} | <strong>Descrição:</strong> {appointment.description}
            </span>
            <div className="appointment-buttons">
              <button className="edit" onClick={() => editAppointment(index)}>Editar</button>
              <button className="delete" onClick={() => deleteAppointment(index)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
