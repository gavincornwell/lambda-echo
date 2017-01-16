# Welcome to Echo
This project provides a set of lambda functions that echo the input from API Gateway.

## Pre-requisites
* [Node.js](https://nodejs.org)
* [AWS SDK](https://aws.amazon.com/sdk-for-node-js/) installed and configured
    
## Deploy
    aws cloudformation package --template-file sam-template.yaml --s3-bucket <bucket-name> --output-template-file sam-deploy.yaml
    aws cloudformation deploy --template-file sam-deploy.yaml --stack-name echo --capabilities CAPABILITY_IAM