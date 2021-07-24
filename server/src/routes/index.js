import containerRoutes from './container';

export default (server) => {
  // Default route
  server.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the deployment utility' });
  });
  server.use('/container', containerRoutes);
  // For non existent requests
  server.all('*', (req, res) => {
    res.status(404).json({ message: 'Resource not found' });
  });
};
