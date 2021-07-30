const base = `${process.env.REACT_APP_SERVER_URL}`;
const endpoints = {
  deploy_container: `${base}/container/deploy`,
};

export default endpoints;