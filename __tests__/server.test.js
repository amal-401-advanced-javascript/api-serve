const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const superGooseServer = supergoose(server);

describe('Products',()=>{
  it('New product Added',()=>{
    const catObj = {
      'category': 'fruits',
      'name': 'pineapple',
      'display_name': 'pineapple',
      'description': 'pineapple'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const record = result.body;
        Object.keys(catObj).forEach(key=>{
          expect(record[key]).toEqual(catObj[key]);
        });
      });
  });

  it('Get new Product',()=>{
    const catObj = {
      'category': 'fruits',
      'name': 'banana',
      'display_name': 'banana',
      'description': 'banana'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        return superGooseServer.get('/api/v1/products')
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('Get Product by id',()=>{
    const catObj = {
      'category': 'fruits',
      'name': 'mango',
      'display_name': 'mango',
      'description': 'mango'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.get(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body[0][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('Update by id',()=>{
    const catObj = {
      'category': 'fruits',
      'name': 'blue-Berry',
      'display_name': 'blue-Berry',
      'description': 'blue-Berry'};
    const obj2 = {
      'category': 'fruits',
      'name': 'orange',
      'display_name': 'orange',
      'description': 'orange'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.put(`/api/v1/products/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });

      });
  });

  it('Delete By id',()=>{
    const catObj = {
      'category': 'fruits',
      'name': 'apple',
      'display_name': 'apple',
      'description': 'apple'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.delete(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });

      });
  });
});

describe('categories routs',()=>{
  it('it should post a new record',()=>{
    const catObj = {
      'name': 'orange',
      'display_name': 'orange',
      'description': 'orange'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const record = result.body;
        Object.keys(catObj).forEach(key=>{
          expect(record[key]).toEqual(catObj[key]);
        });
      });
  });

  it('it should get a new record',()=>{
    const catObj = {
      'name': 'mango',
      'display_name': 'mango',
      'description': 'mango'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        return superGooseServer.get('/api/v1/categories')
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('it should get a record by id',()=>{
    const catObj = {
      'name': 'banana',
      'display_name': 'banana',
      'description': 'banana'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.get(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body[0][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('it should update a record by id',()=>{
    const catObj = {
      'name': 'grocery products',
      'display_name': 'grocery products',
      'description': 'grocery products'};
    const obj2 = {
      'name': 'vegetables and fruits',
      'display_name': 'vegetables and fruits',
      'description': 'vegetables and fruits'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.put(`/api/v1/categories/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });

      });
  });

  it('it should delete a record by id',()=>{
    const catObj = {
      'name': 'lemon',
      'display_name': 'lemon',
      'description': 'lemon'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.delete(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });

      });
  });
}); 