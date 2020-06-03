'use strict';
const express = require('express');
const products = require('../models/products/products-model.js');
const router = express.Router();

router.get('/products', getCategories);
router.get('/products/:id', getByIdCategories);
router.post('/products', postCategories);
router.put('/products/:id', updateByIdCategories);
router.delete('/products/:id', deleteByIdCategories);

async function getCategories(req,res,next){
  try {
    const data = await products.get();
    const count = data.length;
    const result = data;
    res.json({count,result});
  } catch (err) {
    next(err.message);
  }

}

async function getByIdCategories(req,res,next){
  const id = req.params.id;
  try {
    const data = await products.get(id);
    res.json(data);
  } catch (err) {
    next(err.message);
  }
  
}


async function postCategories(req,res,next){
  try {
    const data = await products.create(req.body);
    res.json(data);
  } catch (err) {
    next(err.message);
  }

}


async function updateByIdCategories(req,res,next){
  const id = req.params.id;
  try {
    const data = await products.update(id,req.body);
    res.json(data);
  } catch (err) {
    next(err.message);
  }
    
}

async function deleteByIdCategories(req,res,next){
  const id = req.params.id;
  try {
    await products.delete(id);
    res.json({});
  } catch (err) {
    next(err.message);
  }
}
module.exports = router;
