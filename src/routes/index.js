export default (server) => {
  // Default route
  server.get('/', (req, res) => {      
    res.status(200).json({ message: 'Welcome to the deployment utility' })
  })
}