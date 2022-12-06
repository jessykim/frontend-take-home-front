// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import InfoForm from './components/InfoForm';

import * as formService from './services/formService'

function App() {
  const [forms, setForms] = useState([])

  const handleAddForm = async (formData) => {
    const newForm = await formService.create(formData)
    setForms([newForm, ...forms])
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<InfoForm handleAddForm={handleAddForm} />} />
      </Routes>
    </>
  );
}

export default App;
