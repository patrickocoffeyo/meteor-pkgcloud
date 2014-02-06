#meteor-pkgcloud

[pkgcloud](https://github.com/pkgcloud/pkgcloud) wrapped for Meteor.
Standard library for node.js that abstracts differences among cloud providers

##Documentation
See [pkgcloud Npm module documentation](https://github.com/pkgcloud/pkgcloud) for full instructions on how to use this package.

Anywhere that ```require('pkgcloud')``` is used, use ```PkgCloud``` instead.

##Example: Uploading a File
```
  var fs = require('fs');
  var client = PkgCloud.storage.createClient({ /* ... */ });

  fs.createReadStream('a-file.txt').pipe(client.upload({
    container: 'a-container',
    remote: 'remote-file-name.txt'
  }));
```

