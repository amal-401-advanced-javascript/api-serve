'use strict';

const express = require('express');

const app = express();

const timestamp = require('../lib/middleware/timestamp.js');
const logRequest = require('../lib/middleware/logger.js');
const notFoundHandler = require('../lib/middleware/404.js');
const errorHandler = require('../lib/middleware/500.js');





app.use(express.json()); //body-parser to add body to the req

app.use(timestamp);
app.use(logRequest);



// app.use('/api/v1', catRoute);
// app.use('/api/v1', proRoute);

app.use('/api/v1', router);
//Products


app.post('/api/v1/products', (req, res) => {
  let {category, name, display_name, description} = req.body;
  let record = {category, name, display_name, description};
  record.id = db_products.length+1;
  db_products.push(record);
  res.json(record);
});


app.put('/api/v1/products/:id', (req, res) => {
  let {category, name, display_name, description} = req.body;
  let record = {category, name, display_name, description};
  const id = req.params.id;
  db_products.forEach((value,index) => {
    if(value.id == id){
      record.id = id;
      db_products[index] = record;
    }
  });
  res.json(record);
});

app.delete('/api/v1/products/:id',(req, res) => {
  const id= req.params.id;
  db_products = db_products.filter(value => {
    return (value.id != id ) ? true : false;
  });
  res.json({});
});
app.get('/api/v1/products',(req, res) => {
  const count = db_products.length;
  const result = db_products;
  res.json({count,result});
});

app.get('/api/v1/products/:id',(req, res) => {
  const id = req.params.id;
  let p_result;
  db_products.forEach(value => {
    if (value.id == id){
      p_result = value;
    }
  });
  res.json(p_result);
});



//Categories

// let db_categories = [];


app.post('/api/v1/categories',(req, res) => {
  let {name, display_name, description} = req.body;
  let record = {name, display_name, description};
  record.id = db_categories.length + 1;
  db_categories.push(record);
  res.json(record);
});

 

app.get('/api/v1/categories',(req, res) => {
  const count = db_categories.length;
  const result = db_categories;
  res.json({count,result});
});
  

app.get('/api/v1/categories/:id',(req, res) => {
  const id = req.params.id;
  let c_result;
  db_categories.forEach(value => {
    if(value.id == id){
      c_result = value;
    }
  });
  res.json(c_result);
});
  
app.put('/api/v1/categories/:id',(req, res) => {
  let {category, name, display_name, description} = req.body;
  let record = {category, name, display_name, description};
  const id = req.params.id;
  db_categories.forEach((value,index) => {
    if(value.id == id){
      record.id = id;
      db_categories[index] = record;
    }
  });
  res.json(record);
});
  

app.delete('/api/v1/categories/:id',(req, res) => {
  const id = req.params.id;
  db_categories = db_categories.filter(value =>{
    return (value.id != id )? true : false ;
  });
  res.json({});
});



app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
