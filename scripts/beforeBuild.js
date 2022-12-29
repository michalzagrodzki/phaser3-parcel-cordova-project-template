const Bundler = require('parcel-bundler');
const fs = require('fs');
const rf = require('rimraf');

const options = {
  //production: true,
  outDir: './www', // The out directory to put the build files in, defaults to dist
  // publicUrl: './', // The url to serve on, defaults to '/'
  watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  // cache: false, // Enabled or disables caching, defaults to true
  contentHash: false, // Disable content hash from being included on the filename
  // global: 'moduleName', // Expose modules as UMD under this name, disabled by default
  // minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
  // target: 'browser', // Browser/node/electron, defaults to browser
  bundleNodeModules: true, 
  sourceMaps: false, 
  detailedReport: true 
};

const bundler = new Bundler('src/index.html', options);
bundler.on('bundled', bundle => {
    const newIndex = bundle.entryAsset.generated.html.replace('<div id="cordova"></div>', '<script src="cordova.js"></script>');
    fs.writeFileSync('www/index.html', newIndex);
});
rf(
  'www', 
  {}, 
  (error) => console.log(error)
);
bundler.bundle();