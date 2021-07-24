exports.deploy = async (req, res) => {
  const { imageURI } = req.body;
  if (!imageURI) {
    return res.status(400).json({
      err: 'image url was not provided',
    });
  }  
  try {
    // Code to deploy the docker image to kubernetes goes here
    return res.status(200).json(imageURI);
  } catch (err) {
    return res.status(500).json({
      err: err.message || 'Something went wrong',
    });
  }
};
