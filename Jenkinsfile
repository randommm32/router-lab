pipeline {
    agent any

    environment {
        APP_NAME = 'auth-lab'
        BUILD_DIR = 'build' 
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm install'
                bat 'npm run build'
            }
        }

      stage('Test') {
            steps {
                echo 'Running tests and generating report...'
                // 1. Install the tool that converts React tests to XML
                bat 'npm install jest-junit'
                
                // 2. Run the tests and output the results to 'junit.xml'
                bat 'npm test -- --watchAll=false --passWithNoTests --ci --testResultsProcessor="jest-junit"'
            }
            post {
                always {
                    // 3. Tell Jenkins exactly where the new XML file is
                    junit 'junit.xml', allowEmptyResults: true
                }
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                // FIXED: Now targets the React build folder
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: false
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment...'
                bat 'xcopy .\\build C:\\temp\\deployed-app /E /I /Y'
            }
        }
    } // stages block ends here

    // POST BLOCK MUST BE OUTSIDE STAGES
    post {
        success {
            mail to: 'your-email@example.com',
                 subject: "BUILD SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Good news! Build ${env.BUILD_URL} completed successfully."
        }
        failure {
            mail to: 'your-email@example.com',
                 subject: "BUILD FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Build ${env.BUILD_URL} has failed. Please check the logs."
        }
    }
} // pipeline ends here
