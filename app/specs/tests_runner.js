// mocha
require('specs/ti-mocha');
mocha.setup({reporter: 'ti-spec'});

// specs
var require_path = 'specs/tests/';
var specs_dir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + require_path);
var spec_files = specs_dir.getDirectoryListing();
for (var i=0; i<spec_files.length; i++) {
	require(require_path + spec_files[i].replace('.js', ''));
}

// run
mocha.run(function(){
});
