const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mochServer = supertest(server);

describe('404 middleware module',()=>{
  it('it should response with status 404',()=>{
    return mochServer.get('/hi').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.delete('/hi/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.put('/hi/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mochServer.post('/hi').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
});