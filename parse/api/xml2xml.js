import axios from 'axios'

module.exports = async (req,res) => {
  const {body} = req
  const {data} = await axios.get(body.url)
  res.send(data)
}
