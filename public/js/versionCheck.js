//版本检测

var chalk=require('chalk');
var semver=require('semver');
var packageConfig=require('../package.json');
//执行命令
var exec=function(cmd){
	return require('child_process')
	.execSync(cmd).toString().trim();
}

var shell=require('shelljs');
function exec(cmd){
	return require('child_process').execSync(cmd).toString().trim();
}
var versionRequirements=[
     {
     	name:'node',
     	currentVersion:semver.clean(process.version);
     	versionRequirement:packageConfig.engines.node
     },
     {
     	name:'npm',
     	currentVersion:exec('npm --version'),
     	versionRequirement:packageConfig.engines.npm
     }
];
module.exports=function(){
	var warnings=[];
	versionRequirements.forEach(function(item,index,arr){
          if(!semver.satisfies(item.currentVersion,item.versionRequirement)){
              warnings.push(
                  item.name+" : "+chalk.red(item.currentVersion)+"should be "+chalk.yellow(item.versionRequirement)
              )
          }

	});
	if(warnings.length){
		console.log("version check!");
		console.log("To use this template,you should update your node/npm to the version!");
		warnings.forEach(function(item){
             console.log(item);
		}
		process.exit(1);
	}
}