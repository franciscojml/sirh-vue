import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = []

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes: [
    {
      path: '*',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: () => import('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
          default: true,
        },
        {
          name: 'pessoais',
          path: 'pessoais',
          component: EmptyParentComponent,
          children: [
            {
              name: 'informacoes-gerais',
              path: 'informacoes-gerais',
              component: () => import('../components/views/pessoais/InformacoesGerais'),
            },
          ],
        },
        {
          name: 'estagiario',
          path: 'estagiario',
          component: EmptyParentComponent,
          children: [
            {
              name: 'informacoes-gerais-estagiario',
              path: 'informacoes-gerais-estagiario',
              component: () => import('../components/views/estagiario/InformacoesGerais'),
            },
            {
              name: 'informacoes-funcionais-estagiario',
              path: 'informacoes-funcionais-estagiario',
              component: () => import('../components/views/estagiario/InformacoesFuncionais'),
            },
          ],
        },
        {
          name: 'funcionais',
          path: 'funcionais',
          component: EmptyParentComponent,
          children: [
            {
              name: 'informacoes-funcionais',
              path: 'informacoes-funcionais',
              component: () => import('../components/views/funcionais/Informacoes'),
            },
          ],
        },
      ],
    },
  ],
})
