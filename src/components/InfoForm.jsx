import styles from './InfoForm.module.css'

const InfoForm = () => {
  return (
    <>
      <h1>Form</h1>
      <form>
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
        <input 
          type="text"
          required 
        />
        <label htmlFor="state-input">State</label>
        <input 
          type="text"
          required 
        />
      </form>
    </>
  )
}

export default InfoForm