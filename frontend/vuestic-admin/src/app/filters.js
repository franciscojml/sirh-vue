import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', value => {
	return value != null ? moment(String(value)).format('DD/MM/YYYY') : ''
})