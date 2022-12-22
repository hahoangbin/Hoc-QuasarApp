
const routes = [
  {
    path: '',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '',
        component: () => import('pages/PageTodo.vue') 
      },
      { 
        path: '/settings',
        component: () => import('pages/PageSettings.vue') 
      },
      { 
        path: '/about',
        component: () => import('pages/About.vue') 
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes