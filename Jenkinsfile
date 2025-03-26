pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Mayankparul/Smart-To-Do.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'cd frontend && /usr/bin/npm install'
            }
        }
        stage('Build Application') {
            steps {
                sh 'cd frontend && /usr/bin/npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment step here'
            }
        }
    }
}
