// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import InfoForm from './components/InfoForm';

import * as formService from './services/formService'

function App() {
  const navigate = useNavigate()
  const [forms, setForms] = useState([])

  const handleAddForm = async (formData) => {
    const newForm = await formService.create(formData)
    setForms([newForm, ...forms])
    navigate('/form')
  }

  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/form" element={<InfoForm handleAddForm={handleAddForm} />} />
      </Routes>
    </>
  );
}

export default App;
