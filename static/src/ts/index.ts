///<amd-module name='jowe_test.index'/>

import * as publicWidget from 'web.public.widget';
import { Component, tags } from '@odoo/owl';
import { createOWLApp } from 'jowebutils.owl_app';
import { Route } from '@odoo/owl/dist/types/router/router';
import { Dashboard } from './pages/Dashboard';

class NotFound extends Component {}
NotFound.template = tags.xml /* xml */ `<p>Not Found!</p>`;

const ROUTES: Partial<Route>[] = [
    { name: "dashboard", path: "/jowe", component: Dashboard },
    { name: "404", path: "*", redirect: { to: "dashboard" }, params: [] },
    // { name: "404_page", path: "*", params: [], component: NotFound },
]

publicWidget.registry.JCRMPortalApp = createOWLApp({
    selector: '.jowe_test_app',
    routes: ROUTES,
    xmlDependencies: ['/web/owl/qweb/' + Date.now()]
})
