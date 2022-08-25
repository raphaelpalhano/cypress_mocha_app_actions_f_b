#! /bin/bash
export BUILD_NUMBER='latest'

docker-compose build
docker-compose up --abort-on-container-exit --exit-code-from e2e