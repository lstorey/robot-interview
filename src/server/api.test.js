import server from './api';

import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('api', () => {
  it('gets a list of robots', (done) => {
    chai.request(server)
      .get('/api/robots')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf.at.least(2);
        done();
      });
  });
});
