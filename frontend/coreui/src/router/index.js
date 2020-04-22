import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Login = () => import('@/auth/login/Login')
const Dashboard = () => import('@/views/Dashboard')
const InformacoesGerais = () => import('@/views/pessoais/InformacoesGerais')

const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'pessoais',
          redirect: '/pessoais/informacoesGerais',
          name: 'Pessoais',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'informacoesGerais',
              name: 'Informações Gerais',
              component: InformacoesGerais
            }
          ]
        },
      ]
    },
    {
      path: '/auth',
      redirect: '/auth/login/login',
      name: 'Auth',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
}

