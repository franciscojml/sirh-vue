import axios from 'axios'
import { baseApiUrl } from '@/global'

export default class EmpregadoService {

	getEmpregados(page) {
        const url = `${baseApiUrl}/api/dadoscadastrais?page=${page}`
        return axios.get(url).then(res => res.data)
	}
}