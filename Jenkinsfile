pipeline {
    agent any

    environment {
        PATH = "/home/jenkins/yandex-cloud/bin:$PATH"
        // GITHUB_KEY = credentials('c86f6b66-20ca-46f6-b923-7997a9b455eb')
    }

    stages {
        stage('Prepare') {
            steps {
                echo "------------------------------";

                echo "Версия yc cli";
                sh 'echo $(yc version)';

                echo "------------------------------";

                echo "Версия node";
                sh 'echo $(node -v)';

                echo "------------------------------";

                echo "Проверяем содержимое папки";
                sh 'ls -a';

                echo "------------------------------";

                echo 'Проверяем наличие значения в переменной GITHUB_KEY';
                echo '${GITHUB_KEY}';

                echo "------------------------------";
            }
        }

        stage("Update version") {
          steps {
            sh 'npm version patch';
          }
        }

        stage('Build') {
            steps {
                echo "Проверяем содержимое папки до сборки";
                sh 'ls -la';

                echo "Сборка";
                sh 'yarn build';

                echo "Проверяем содержимое папки после сборки";
                sh 'ls -la';
                sh 'ls -la dist';
            }
        }

        stage("Commit Changes") {
          steps {
            sh 'git push origin HEAD:main';
            sh 'git tag $(npm run get:version --silent)';
            sh 'git push --tags';
          }
        }

        stage('Publish') {
            steps {
                dir("dist") {
                    echo "Проверяем содержимое папки";
                    sh 'ls -a';

                    echo "Lib Publishing..."
                    withNPM(npmrcConfig: GITHUB_KEY) {
                        echo "Start Lib Publishing..."
                        sh 'npm publish --access public';
                        echo "End Lib Publishing..."
                    }
                }
            }
        }
    }

    post {
        always {
            echo "------------------------------";

            echo "Очищаем workspace";
            deleteDir()

            echo "------------------------------";
        }
    }
}
