///<amd-module name='jcrm_project.ProjectList'/>

import { Component, useState, tags } from '@odoo/owl';
import { IOWLEnv } from 'jowebutils.owl_env';
import { NavBar } from 'jowebutils.widgets.NavBar';
import { INavBarBreadcrumb } from 'jowebutils.widgets.NavBar';

export interface IDashboardState {
    loaded: boolean;
    navbar_breadcrumbs: INavBarBreadcrumb[];
    projects: any;
}

export class Dashboard extends Component<any, IOWLEnv> {
    state: IDashboardState;

    constructor() {
        super(...arguments);
        this.state = useState({
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

    onClickCard(ev: any){
        ev.preventDefault();
        const projectId = ev.currentTarget.dataset.projectId;
        const project = this.state.projects.find((p: any) => p.id == projectId);
        if (project.proj_type == 'standard') {
            this.env.router.navigate({
                path: '/projects/' + projectId + '/tasks/list?status=open' });
        }
        else if (project.proj_type == 'whiteboard') {
            this.env.router.navigate({
                path: '/projects/' + projectId + '/tasks/kanban' });
        }
        else {
            this.env.router.navigate({ to: 'project_dashboard', params: { projectId }})
        }
    }

}
Dashboard.components = { NavBar }
Dashboard.template = tags.xml /* xml */ `
<div>
    <h1>Hello OWL!</h1>
</div>`;
//'jowe_test.Dashboard';
