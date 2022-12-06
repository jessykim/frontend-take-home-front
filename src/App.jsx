// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InfoForm from './components/InfoForm';

import * as formService from './services/formService'

function App() {
  const [forms, setForms] = useState([])

  const handleAddForm = async (formData) => {
    const newForm = await formService.create(formData)
    setForms([newForm, ...forms])
    // navigate('/')
  }


  return (
    <div>
      <h1>Information Form</h1>
      <InfoForm handleAddForm={handleAddForm}/>
    </div>
  );
}

export default App;
