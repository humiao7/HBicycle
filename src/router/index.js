let routes = [];

const pages = [
    "login",
    "main-page"
];

pages.forEach(page => {
    routes.push(...require(`../pages/${page}/router`).default);
})

export default routes;