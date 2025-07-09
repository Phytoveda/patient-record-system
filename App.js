import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientTable from './components/PatientTable';

function App() {
  const [patients, setPatients] = useState([]);

  const addPatient = (data) => {
    setPatients([...patients, { ...data, id: Date.now() }]);
  }

  return (
    <div style={{ padding: 16, maxWidth: 600, margin: 'auto' }}>
      <h2>Patient Record System</h2>
      <PatientForm onSubmit={addPatient} />
      <PatientTable patients={patients} />
    </div>
  );
}

export default App;
