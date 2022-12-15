import styles from './InfoForm.module.css'
import { React, useState, useEffect } from 'react'

import * as formService from '../services/formService'

const InfoForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
  })
  const [occupations, setOccupations] = useState([])
  const [states, setStates] = useState([])
  
  const [
    isSuccesssfullySubmitted,
    setIsSuccessfullySubmitted,
  ] = useState(false)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddForm(form)
    setIsSuccessfullySubmitted(true)
    setForm({
      name: '',
      email: '',
      password: '',
      occupation: '',
      state: ''
    })
  }
  
  useEffect(() => {
    async function fetchData() {
      const data = await formService.formInfo()
      setOccupations(data.occupations)
      setStates(data.states)
    }
    fetchData()
  }, [])
  console.log({states})
  
  return (
    <>
      <main>
        <div className={styles.container}>
          <h1>Information Form</h1>
          <p>Please complete the entire form before submitting. Thank you!</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <label htmlFor="name-input" className="input-group-text" id="inputGroup-sizing-default"
              >
                Full Name
              </label>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                required 
              />
            </div>
            <div className="input-group mb-3">
              <label 
              htmlFor="email-input" className="input-group-text" id="inputGroup-sizing-default"
              >
                Email
              </label>
              <input 
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                required 
              />
            </div>
            <div className="input-group mb-3">
              <label
              htmlFor="password-input"
              className="input-group-text" id="inputGroup-sizing-default"
              >
                Password
              </label>
              <input 
                type="text"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                required 
              />
            </div>
            <div className="input-group mb-3">
              <label
              htmlFor="occupation-input"
              className="input-group-text" id="inputGroup-sizing-default"
              >
                Occupation
              </label>
              <select
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                className="form-select" aria-label="Default select example"
                required 
              >
                {occupations.map((occupation) => (
                  <option
                    value={occupation}
                  >
                    {occupation}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group mb-3">
              <label 
                htmlFor="state-input"
                className="input-group-text" id="inputGroup-sizing-default"
              >
                State
              </label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="form-select" aria-label="Default select example"
                required 
              >
                {states.map((state) => (
                  <option
                    value={state.name}
                  >
                    {state.abbreviation}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">SUBMIT</button>
            {isSuccesssfullySubmitted && (
              <div className={styles.success}>Form submitted successfully!</div>
            )}
          </form>
        </div>
      </main>
    </>
  )
}

export default InfoForm