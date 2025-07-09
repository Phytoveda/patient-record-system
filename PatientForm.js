import React, { useState } from 'react';

export default function PatientForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '', age: '', gender: '', contact: '', history: '', notes: '', nextVisit: '', files: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', age: '', gender: '', contact: '', history: '', notes: '', nextVisit: '', files: null });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
      {['name','age','gender','contact','history','notes','nextVisit'].map(key => (
        <div key={key} style={{ marginBottom: 8 }}>
          <input
            placeholder={key.replace(/([A-Z])/g, ' $1')}
            value={form[key]}
            onChange={e => setForm({ ...form, [key]: e.target.value })}
            style={{ width: '100%', padding: 8 }}
          />
        </div>
      ))}
      <div style={{ marginBottom: 8 }}>
        <input
          type="file"
          onChange={e => setForm({ ...form, files: e.target.files })}
          multiple
        />
      </div>
      <button type="submit" style={{ padding: '8px 16px' }}>Add Patient</button>
    </form>
  );
}
