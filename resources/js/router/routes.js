import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";

export default () => [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/settings', name: 'settings', component: Settings },
]
