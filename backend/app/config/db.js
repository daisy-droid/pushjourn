const {Client} = require("pg");

const client =new Client({
    connectionString:"postgres://hyblesupupddxt:2eea07189b396ade1565aaf9a00adbe9d6ca0d06c0de8281d14fa837b075af40@ec2-52-207-15-147.compute-1.amazonaws.com:5432/dfttocis2v1iur",

    ssl:{require:true , rejectUnauthorized:false //allows external access to database when usin nodejs
}


});

module.exports=client;