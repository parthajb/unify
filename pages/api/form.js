import axios from 'axios';
export default async function handler(req, res) {
try{
   const headers = { 
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        };
   const url = "https://sheet.best/api/sheets/245477da-df7c-4a16-9da4-33cab7ac1ef8";
   await axios.post(url , req.body).then(response => {
      
      const data = response.data
      res.status(200).json(data)
    })
   // const data = 200
   // res.status(200).json(data)
 } catch (error) {
    console.error(error)
    return res.status(error.status || 500).end(error.message)
  }
}