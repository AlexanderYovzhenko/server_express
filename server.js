import Express from "express";

const server = new Express();

const Port = 3000;

server.listen(Port, () => {
  console.log('server is running');
});

server.use('/', (req, res) => {
  res.header('content-type: text');
  res.status(200);
  res.send('server express');
  res.end();
})
