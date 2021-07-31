[![123MwanjeMike](https://circleci.com/gh/123MwanjeMike/deployment-utility.svg?style=shield)](https://app.circleci.com/pipelines/github/123MwanjeMike/deployment-utility) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/327795a5-819b-44ad-8c00-cd7eaf52584a/deploy-status)](https://app.netlify.com/sites/naughty-wozniak-83568f/deploys)

# deployment-utility
The is a utility that takes a container image and deploys it to a container orchestration platform.

## Access
- The application interface is at [this link](https://deployer-b88d2.web.app/)
- The application server is hosted at [this link](https://container-deployer.herokuapp.com/)

### Local setup and usage
#### Setup
1. Clone the repository with 
  `git clone https://github.com/123MwanjeMike/deployment-utility.git`
2. While at the root directory run `yarn --cwd ./client/ install` to install the client dependencies
3. While still at the root directory run `yarn --cwd ./server/ install` to install the server dependencies
#### Usage
1. Run `yarn --cwd ./client/ start` to start the client
2. Run `yarn --cwd ./server/ start` to start the server
3. Access address http://127.0.0.1:3000/ or http://localhost:3000/ in your web browser<br/>
4. Voila

## Asumptions
- The user entered url is a correct container image uri.
- The container container is in healthy state.
- The container in use is a docker container.

## Technical decisions
- The application will only deploy docker containers
- The container will be deployed to kubernetes

## Approach and next steps
The user enters their container url at the client interfacing application, that sends it to the backend.
Next, the backend application will;
- [ ] Check to confirm container is a docker image
- [ ] Build the docker container
- [ ] Publish the docker image
- [ ] Deploy the image
  
