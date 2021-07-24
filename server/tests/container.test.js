import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.use(chaiHttp);

describe('container tests', () => {
  it('deploy container successfull', (done) => {
    chai
      .request(app)
      .post('/container/deploy/')
      .send({
        imageURI: 'https://my.container.uri',
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('deploy container failure', (done) => {
    chai
      .request(app)
      .post('/container/deploy/')
      .send({
        imageURI: '',
      })
      .then((res) => {
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('err')
        done();
      });
  });
});
