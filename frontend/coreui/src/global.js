import Vue from 'vue'

export const userKey = '__sirhintegracao_user_key'
export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
    if(e && e && e.data && e.data.message) {
        Vue.toasted.global.defaultError({ msg : e.data.message })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }