import React from 'react';

export default function PatientTable({ patients }) {
  return (
    <table border="1" cellPadding="8" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Name</th><th>Age</th><th>Gender</th><th>Contact</th><th>Next Visit</th>
        </tr>
      </thead>
      <tbody>
        {patients.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{p.gender}</td>
            <td>{p.contact}</td>
            <td>{p.nextVisit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
