/* eslint-disable no-undef */
//
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

describe('deploy tests', () => {
  it('deploy image successfull', (done) => {
    chai
      .request(app)
      .post('/deploy/')
      .send({
        imageURI: 'https://my.container.uri',
      })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('deploy image failure', (done) => {
    chai
      .request(app)
      .post('/deploy/')
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
