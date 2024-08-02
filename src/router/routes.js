
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },

  { path:'/job', component: () => import('pages/Jobpage.vue') },
  { path:'/jobPage2', component: () => import('pages/JobPage2.vue') },
  {
    path: '/SearchPage',
    children: [
      { path: '', component: () => import('pages/SearchPage.vue') }
    ]
  },
  {
    path: '/post',
    component: () => import ('layouts/PostLayout.vue'),
    children: [
      { path: '/post', component: () => import('pages/PostPage.vue') }
    ]
  },

  {
    path: '/adm',
    component: () => import ('layouts/MainLayout.vue'),
    children: [
      { path: '/adm', component: () => import('pages/AdminPage.vue') }
    ]
  },
  {
    path: '/detail',
    component: () => import ('layouts/MainLayout.vue'),
    children: [
      { path: '/detail', component: () => import('pages/DetailPage.vue') }
    ]
  },
  {
    path: '/opn',
    component: () => import ('layouts/MainLayout.vue'),
    children: [
      { path: '/opn', component: () => import('pages/OpeningPage.vue') }
    ]
  },

  {path:'/job3', component:() => import ('pages/JobPageThree.vue')}
]

export default routes;
