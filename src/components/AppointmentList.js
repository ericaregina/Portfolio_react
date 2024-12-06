import React from 'react';

function AppointmentList({ appointments, onDelete, onEdit }) {
  return (
    <div className="appointments-list">
      {appointments.map((appointment, index) => (
        <div className="appointment-item" key={index}>
          <div className="appointment-info">
            <strong>{appointment.title}</strong> <br />
            {appointment.date} - {appointment.time}
          </div>
          <div className="appointment-buttons">
            <button onClick={() => onEdit(index)}>Editar</button>
            <button onClick={() => onDelete(index)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentList;
