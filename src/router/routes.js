const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {path: '/information',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/inoformation.vue') }
    ]
  },
  {path: '/information/t-shirt',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/information.vue') }
    ]
  },
  {path: '/information/ball',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ball.vue') }
    ]
  },
  {path: '/information/phone',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/phone.vue') }
    ]
  },
  {path: '/information/korzina',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/korzina.vue') }
    ]
  },
  {path: '/information/breakingBadCup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/BreakingBadCup.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
