const rf = require("rimraf");

rf(
  "www", 
  {}, 
  (error) => console.log(error)
);

