pipeline {
    agent any

    environment {
        APP_NAME = 'auth-lab'  // Change to your application name
        BUILD_DIR = 'build'   // or 'build', 'dist' for your project
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
                bat 'npm install '
                bat 'npm run build'
                bat 'echo Build step — replace with your command'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test -- --watchAll=false --passWithNoTests --ci'
                bat 'echo Test step — replace with your command'
            }
           // post {
               // always {
                   // junit '**/target/surefire-reports/*.xml'
               // }
           // }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'target/*.jar', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                sshagent(['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y']) {
                    bat '''
                        ssh -o StrictHostKeyChecking=no user@your.server.ip ^
                        "cd /var/www/your-app && git pull && npm install && pm2 restart app"
                    '''
                }
            }
        }
    }
}
  

    post {
    success {
        mail to: 'nuacc2031@gmail.com',
             subject: "BUILD SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
             body: "Good news! Build ${env.BUILD_URL} completed successfully."
    }
    failure {
        mail to: 'nuacc2031@gmail.com',
             subject: "BUILD FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
             body: "Build ${env.BUILD_URL} has failed. Please check the logs."
    }
}

    

