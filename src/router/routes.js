export default [
  {
    path: "/",
    component: () => import("layouts/default"),
    children: [
      {
        path: "",
        component: () => import("pages/index"),
        name: "index"
      },
      {
        path: "/users",
        component: () => import("pages/users"),
        name: "users"
      },
      {
        path: "/users/:id",
        component: () => import("pages/user"),
        name: "user",
        props: true
      }
    ]
  },

  {
    // Always leave this as last one
    path: "*",
    component: () => import("pages/404")
  }
];
