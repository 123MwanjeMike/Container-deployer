import express from 'express';
import Container from '../controllers/container';
const router = express.Router();

router.route('/deploy/').post(Container.deploy);

module.exports = router;
