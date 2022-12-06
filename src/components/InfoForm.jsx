// import styles from './InfoForm.module.css'
import { useState } from 'react'

const InfoForm = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddForm(form)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Full Name</label>
        <input 
          type="text"
          required 
        />
        <label htmlFor="email-input">Email</label>
        <input 
          type="text"
          required 
        />
        <label htmlFor="password-input">Password</label>
        <input 
          type="text"
          required 
        />
        <label htmlFor="occupation-input">Occupation</label>
        <select
          required 
        >
          <option value="Head of Shrubbery">Head of Shrubbery</option>
          <option value="Interim Substitute Teacher">Interim Substitute Teacher</option>
          <option value="Water Softener">Water Softener</option>
          <option value="Listener of the House">Listener of the House</option>
          <option value="Really Good Dancer">Really Good Dancer</option>
          <option value="Gainfully Unemployed">Gainfully Unemployed</option>
          <option value="Alexa Impersonator">Alexa Impersonator</option>
          <option value="Chard Farmer">Chard Farmer</option>
          <option value="Chief Frolicker (Jolly)">Chief Frolicker (Jolly)</option>
          <option value="Entry-level Seat Recliner">Entry-level Seat Recliner</option>
          <option value="CEO (Summer Internship)">CEO (Summer Internship)</option>
          <option value="Widget Fabricator">Widget Fabricator</option>
          <option value="Underwater Basket Weaver">Underwater Basket Weaver</option>
        </select>
        <label htmlFor="state-input">State</label>
        <select
          required 
        >
          <option value="Alabama">AL</option>
          <option value="Alaska">AK</option>
          <option value="Arizona">AZ</option>
          <option value="Arkansas">AR</option>
          <option value="California">CA</option>
          <option value="Colorado">CO</option>
          <option value="Connecticut">CT</option>
          <option value="Delaware">DE</option>
          <option value="District Of Columbia">DC</option>
          <option value="Florida">FL</option>
          <option value="Georgia">GA</option>
          <option value="Hawaii">HI</option>
          <option value="Idaho">ID</option>
          <option value="Illinois">IL</option>
          <option value="Indiana">IN</option>
          <option value="Iowa">IA</option>
          <option value="Kansas">KS</option>
          <option value="Kentucky">KY</option>
          <option value="Louisiana">LA</option>
          <option value="Maine">ME</option>
          <option value="Maryland">MD</option>
          <option value="Massachusetts">MA</option>
          <option value="Michigan">MI</option>
          <option value="Minnesota">MN</option>
          <option value="Mississippi">MS</option>
          <option value="Missouri">MO</option>
          <option value="Montana">MT</option>
          <option value="Nebraska">NE</option>
          <option value="Nevada">NV</option>
          <option value="New Hampshire">NH</option>
          <option value="New Jersey">NJ</option>
          <option value="New Mexico">NM</option>
          <option value="New York">NY</option>
          <option value="North Carolina">NC</option>
          <option value="North Dakota">ND</option>
          <option value="Ohio">OH</option>
          <option value="Oklahoma">OK</option>
          <option value="Oregon">OR</option>
          <option value="Pennsylvania">PA</option>
          <option value="Rhode Island">RI</option>
          <option value="South Carolina">SC</option>
          <option value="South Dakota">SD</option>
          <option value="Tennessee">TN</option>
          <option value="Texas">TX</option>
          <option value="Utah">UT</option>
          <option value="Vermont">VT</option>
          <option value="Virginia">VA</option>
          <option value="Washington">WA</option>
          <option value="West Virginia">WV</option>
          <option value="Wisconsin">WI</option>
          <option value="Wyoming">WY</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  )
}

export default InfoForm