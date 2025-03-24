pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/rodrigoalesm/Paralelo_Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f7a2bb63-f24d-442d-9758-914a21d80462  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/rodrigoalesm/Paralelo_Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f7a2bb63-f24d-442d-9758-914a21d80462  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/rodrigoalesm/Paralelo_Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f7a2bb63-f24d-442d-9758-914a21d80462  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/rodrigoalesm/Paralelo_Pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key f7a2bb63-f24d-442d-9758-914a21d80462  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}