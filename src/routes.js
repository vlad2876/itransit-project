import { CREATE_TASK_ROUTE, HOMEPAGE_ROUTE, PROFILE_ROUTE} from "./utils/consts";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import CreateTask from "./components/CreateTask";

export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    }
]

export const privateRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: CREATE_TASK_ROUTE,
        Component: CreateTask
    }
]

