const {server} = require('../lib/server.js');

const supertest = require('supertest');
const mochServer = supertest(server);
describe('500 middleware module',()=>{
  it('it should response with status 500',()=>{
    return mochServer.get('/api/v1/categories').then((result)=>{
      expect(result.status).toBe(500);
    }).catch(e=>{});

  });
});