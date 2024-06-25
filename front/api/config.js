import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.api_url_dev, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  withCredentials: false,
})

export default service