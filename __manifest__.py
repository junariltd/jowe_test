
{
    'name': 'Junari Odoo Web Utils test module',
    'version': '14.0.1.0.0',
    'summary': 'Junari Odoo Web Utils test module',
    'author': 'Junari Ltd',
    'category': 'CRM',
    'website': 'https://www.junari.com',
    'images': [],
    'depends': [
        'website',
        'jowebutils',
    ],
    'data': [
        'views/templates.xml',
        'views/assets.xml',
    ],
    'js': [],
    'qweb': [
        'static/src/xml/owl_templates.xml',
    ],
    'css': [],
    'demo': [],
    'test': [],
    'application': True,
    'installable': True,
    'auto_install': False,
}
