
const timeMiddleWare = require('../lib/middleware/timestamp.js');


describe('logger Middleware', () => {
  const req = {};
  const res = {};
  const next = jest.fn();


  
  it('moves to the next middleware', () => {
    timeMiddleWare(req, res, next);
    expect(next).toHaveBeenCalledWith();

  });
});