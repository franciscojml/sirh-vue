export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        iconClass: 'vuestic-iconset vuestic-iconset-dashboard',
      },
    },
    {
      name: 'pessoais',
      displayName: 'menu.pessoais',
      meta: {
        iconClass: 'openwebicons openwebicons-persona',
      },
      disabled: true,
      children: [
        {
          name: 'informacoes-gerais',
          displayName: 'menu.informacoesgerais',
        }
      ],
    },
    {
      name: 'estagiario',
      displayName: 'menu.estagiario',
      meta: {
        iconClass: 'maki maki-college',
      },
      disabled: true,
      children: [
        {
          name: 'informacoes-gerais-estagiario',
          displayName: 'menu.informacoesgerais',
        }
      ],
    },
    {
      name: 'funcionais',
      displayName: 'menu.funcionais',
      meta: {
        iconClass: 'maki maki-college',
      },
      disabled: true,
      children: [
        {
          name: 'informacoes-funcionais',
          displayName: 'menu.informacoes',
        }
      ],
    },
  ],
}
