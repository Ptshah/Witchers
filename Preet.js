// (PREET'S PART) Function which is calleed on button press
const getValue = async (teamName) => {
    let data = await axios.get(uri + teamName)
    return data.data
  }