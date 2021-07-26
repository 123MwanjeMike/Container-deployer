[![123MwanjeMike](https://circleci.com/gh/123MwanjeMike/deployment-utility.svg?style=svg)](https://app.circleci.com/pipelines/github/123MwanjeMike/deployment-utility)

# deployment-utility
The is a utility that takes a container image and deploys it to a container orchestration platform.

## Access
- The application interface is at [this link](https://deployer-b88d2.web.app/)
- The application server is hosted at [this link](https://container-deployer.herokuapp.com/)

### Local setup and access
#### Setup
1. Clone the repository with 
  `git clone https://github.com/123MwanjeMike/deployment-utility.git`
2. While at the root directory run `yarn --cwd ./client/ install` to install the client dependencies
3. While still at the root directory run `yarn --cwd ./server/ install` to install the server dependencies
4. Run `yarn --cwd ./client/ start` to start the client application and `yarn --cwd ./server/ start` to start the server
5. You can now access the application interface at localhost:3000

## Asumptions
- The user entered url is a correct container image uri.
- The container container is in healthy state.
- The container in use is a docker container.

## Technical decisions
- The application will only deploy docker containers
- The container will be deployed to kubernetes
- The client and server are both managed differently by the yarn package manager to support seperate and independent development of each.

## Approach and next steps
The user enters their container url at the client interfacing application, that sends it to the backend.
Next, the backend application will;
- [ ] Check to confirm container is a docker image
- [ ] Build the docker container
- [ ] Publish the docker image
- [ ] Deploy the image
  
