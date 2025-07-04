import axios from 'axios'

const Api_Base = 'http://localhost:4000/api-data/add-new-item'
export  const addItem = async (newItem)=>{
    return await axios.post(Api_Base, newItem)
}