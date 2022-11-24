const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
 // serverUrl: 'http://ec2-65-2-125-32.ap-south-1.compute.amazonaws.com:9000//',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	   // 'sonar.login': 'squ_7d24dd1e8ab896e1048111eefabd496b15c667e0',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
