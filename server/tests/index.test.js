import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

describe('index route test', () => {
  it('gives welcome message', (done) => {
    chai
      .request(app)
      .get('/')
      .then((res) => {
        expect(res.body.message).toEqual('Welcome to the deployment utility');
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
