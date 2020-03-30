import axios from 'axios'

const success = res => res
const error = err => {
    console.log('l0')
    if (401 === err.response.status) {
        console.log('l1')
        window.location = '/'
    } else {
        console.log('l2')
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)