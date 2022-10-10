const rimraf = require('rimraf');

rimraf.sync('cypress/reports/assets/*');
rimraf.sync('cypress/reports/index.html');
rimraf.sync('cypress/videos/frontend/*.feature.mp4');
rimraf.sync('cypress/videos/backend/*.feature.mp4');
