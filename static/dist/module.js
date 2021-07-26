///<amd-module name='jcrm_project.ProjectList'/>
define("jcrm_project.ProjectList", ["require", "exports", "@odoo/owl", "jowebutils.widgets.NavBar"], function (require, exports, owl_1, jowebutils_widgets_NavBar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Dashboard = void 0;
    class Dashboard extends owl_1.Component {
        constructor() {
            super(...arguments);
            this.state = owl_1.useState({
                loaded: false,
                navbar_breadcrumbs: [
                    { string: 'Dashboard' },
                ],
                projects: []
            });
        }
        async willStart() {
            // await this.loadData();
            this.state.loaded = true;
        }
        async loadData() {
            const projects = await this.env.services.rpc({
                model: 'project.project',
                method: 'search_read',
                kwargs: {
                    domain: [],
                    fields: ['name', 'proj_type', 'description', 'user_id', 'partner_id']
                },
            });
            if (projects) {
                this.state.projects = projects;
            }
        }
        onClickCard(ev) {
            ev.preventDefault();
            const projectId = ev.currentTarget.dataset.projectId;
            const project = this.state.projects.find((p) => p.id == projectId);
            if (project.proj_type == 'standard') {
                this.env.router.navigate({
                    path: '/projects/' + projectId + '/tasks/list?status=open'
                });
            }
            else if (project.proj_type == 'whiteboard') {
                this.env.router.navigate({
                    path: '/projects/' + projectId + '/tasks/kanban'
                });
            }
            else {
                this.env.router.navigate({ to: 'project_dashboard', params: { projectId } });
            }
        }
    }
    exports.Dashboard = Dashboard;
    Dashboard.components = { NavBar: jowebutils_widgets_NavBar_1.NavBar };
    Dashboard.template = owl_1.tags.xml /* xml */ `
<div>
    <h1>Hello OWL!</h1>
</div>`;
});
//'jowe_test.Dashboard';
///<amd-module name='jowe_test.index'/>
define("jowe_test.index", ["require", "exports", "web.public.widget", "@odoo/owl", "jowebutils.owl_app"], function (require, exports, publicWidget, owl_2, jowebutils_owl_app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class NotFound extends owl_2.Component {
    }
    NotFound.template = owl_2.tags.xml /* xml */ `<p>Not Found!</p>`;
    const ROUTES = [
        // { name: "dashboard", path: "/jowe", component: Dashboard },
        // { name: "404", path: "*", redirect: { to: "dashboard" }, params: [] },
        { name: "404_page", path: "*", params: [], component: NotFound },
    ];
    publicWidget.registry.JCRMPortalApp = jowebutils_owl_app_1.createOWLApp({
        selector: '.jowe_test_app',
        routes: ROUTES,
        xmlDependencies: ['/web/owl/qweb/' + Date.now()]
    });
});
