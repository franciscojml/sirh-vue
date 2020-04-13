import axios from 'axios'

//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Request-Width, Content-Type, Accept';

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