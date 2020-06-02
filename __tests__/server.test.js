'use strict';

const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('404 middleware module',()=>{
  it('it should response with status 404',()=>{
    return mockRequest.get('/api/v1/products/1').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.get('/api/v1/products').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.put('/api/v1/products/1').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.post('/api/v1/products').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.delete('/api/v1/products/1').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.get('/api/v1/categories/1').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.get('/api/v1/categories').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.put('/api/v1/categories/1').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.post('/api/v1/categories').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('it should response with status 404',()=>{
    return mockRequest.delete('/api/v1/categories/1').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
}); 