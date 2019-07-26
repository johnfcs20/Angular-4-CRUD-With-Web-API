pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        bat(script: 'npm install', returnStatus: true, returnStdout: true)
      }
    }
  }
}