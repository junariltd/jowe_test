/// <amd-module name="jcrm_project.ProjectList" />
declare module "jcrm_project.ProjectList" {
    import { Component } from '@odoo/owl';
    import { IOWLEnv } from 'jowebutils.owl_env';
    import { INavBarBreadcrumb } from 'jowebutils.widgets.NavBar';
    export interface IDashboardState {
        loaded: boolean;
        navbar_breadcrumbs: INavBarBreadcrumb[];
        projects: any;
    }
    export class Dashboard extends Component<any, IOWLEnv> {
        state: IDashboardState;
        constructor();
        willStart(): Promise<void>;
        loadData(): Promise<void>;
        onClickCard(ev: any): void;
    }
}
/// <amd-module name="jowe_test.index" />
declare module "jowe_test.index" { }
