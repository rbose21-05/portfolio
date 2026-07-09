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

const router = createRouter({ routeTree });

export default function Router() {
    return <RouterProvider router={router} />;
}
