pipeline {
    agent any
    environment {
        NODE_HOME = "/usr/bin"
        PATH = "${NODE_HOME}:${PATH}"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Mayankparul/Smart-To-Do.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'cd frontend && ${NODE_HOME}/npm install'
            }
        }
        stage('Build Application') {
            steps {
                sh 'cd frontend && ${NODE_HOME}/npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment step here'
            }
        }
    }
}
