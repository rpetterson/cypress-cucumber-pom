pipeline {
    agent any
    // rest of your pipeline configuration...

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

    // rest of your pipeline configuration...
}
