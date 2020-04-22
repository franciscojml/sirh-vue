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
  ],
}
