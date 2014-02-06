Package.describe({
  summary: 'A standard library for node.js that abstracts differences among cloud providers'
});

Package.on_use(function(api) {
  api.add_files(['lib/pkgcloud.js'], 'server');
  if (typeof api.export !== 'undefined') { api.export('PkgCloud', 'server'); }
});

Npm.depends({ 'pkgcloud': '0.9.0' });
