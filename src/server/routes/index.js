import { Router as routerFactory } from 'express';
import fs from 'fs';
import path from 'path';

const router = routerFactory();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/templates/:template', (req, res) => {
  res.render(`templates/${req.params.template}`);
});

router.get('/items', (req, res) => {
  fs.readFile(path.join(__dirname, '../../../mock/items.json'), (err, data) => {
    res.json(JSON.parse(data));
  });
});

router.get('/items/:id', (req, res) => {
  fs.readFile(path.join(__dirname, '../../../mock/items.json'), (err, data) => {
    const itemList = JSON.parse(data);
    res.json(itemList.find((item) => item.id === req.params.id));
  });
});

router.post('/submit', (req, res) => {
  res.json({ result: true });
});

export default router;
