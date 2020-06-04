const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mochServer = supertest(server);

describe('404 middleware module',()=>{
  it('it should response with status 404',()=>{
    return mochServer.get('/Hi').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.delete('/Hi/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.put('/Hi/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.post('/Hi').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
});