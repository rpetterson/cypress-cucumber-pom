def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {
    agent any
     environment {
        BUILD_USER = ''
    }
    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/features/*", description: 'Eg: cypress/e2e/features/*')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    options {
        ansiColor('xterm')
    }

    stages {
        stage('Build'){
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec \"${SPEC}\""
                // Or if you defined "test" in your package.json scripts
                // bat "npm test --browser ${BROWSER} --spec \"${SPEC}\""
            }
        }

        stage('Generate Reports'){
            steps {
                // Merge the reports and generate the Mochawesome report
                bat "npm run report:merge"
                bat "npm run report:mocha"
            }
        }

        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            publishHTML (target : [allowMissing: false,
 alwaysLinkToLastBuild: true,
 keepAll: true,
 reportDir: 'cypress/reports',
 reportFiles: 'myreport.html',
 reportName: 'My Reports',
 reportTitles: 'The Report'])
            //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}
