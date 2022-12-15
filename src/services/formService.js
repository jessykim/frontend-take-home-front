const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/form`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (formData) => {
  try {
    // POST http://localhost:3001/api/form
    const res = await fetch("https://frontend-take-home.fetchrewards.com/form", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const formInfo = async () => {
  try {
    const res = await fetch("https://frontend-take-home.fetchrewards.com/form", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
	create,
  index,
  formInfo
}