const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/novoCliente",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/CadastroPage.vue") },
    ],
  },
  {
    path: "/novoLogin",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/LoginPage.vue") },
    ],
  },
  {
    path: "/mouses",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/MousePage.vue") }],
  },
  {
    path: "/keyboards",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/KeyboardPage.vue") }],
  },
  {
    path: "/headsets",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/HeadsetPage.vue") }],
  },
  {
    path: "/boards",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/BoardPage.vue") }],
  },
  {
    path: "/ram",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/RamPage.vue") }],
  },
  {
    path: "/storages",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/StoragePage.vue") }],
  },
  {
    path: "/phones",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/PhonePage.vue") }],
  },
  {
    path: "/monitors",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/productpage/MonitorPage.vue") }],
  },
  {
    path: "/checkout",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/CheckoutPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
