from odoo import http
from odoo.http import Controller, request


class JOWETestApp(Controller):

    @http.route(['/jowe', '/jowe/<path:path>'], type='http', auth="user", website=True)
    def jowe(self):
        return request.render('jowe_test.jowe_test_app')
