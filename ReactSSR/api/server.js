const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: "http://localhost:3001"
}));

app.get('/api/index', (req, res) => {
  const list = [{ name: '张三' }, { name: '李四' }]
  res.json(list)
})

app.listen(4000, () => console.log('http://localhost:4000/api/index'))