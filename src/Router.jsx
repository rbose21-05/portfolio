import {
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";
import RootLayout from "./rootlayout";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

const rootRoute = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFound,
});

const homeRoute = createRoute({
    path: "/",
    getParentRoute: () => rootRoute,
    component: Home,
});
const routeTree = rootRoute.addChildren([homeRoute]);

const basepath = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createRouter({
    routeTree,
    basepath: basepath || "/",
});

export default function Router() {
    return <RouterProvider router={router} />;
}
