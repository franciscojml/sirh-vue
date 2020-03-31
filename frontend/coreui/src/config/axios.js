import axios from 'axios'

axios.interceptors.response
    .use(
        response => {
            return response
        },
        error => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        break
                }
            }
            return Promise.reject(error.response)
        })