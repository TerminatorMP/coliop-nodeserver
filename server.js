const express = require('express');
const app = express();
const cors = require('cors');
const rpc = require('./rpc-request');


const port = 5000;

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())


app.post('/getJobId', async function(req, res) {
  const fileName = req.body.name;
  const result = await rpc.fetchJobId(fileName);

  res.json({
    jobId: result
  });
});

app.get('/getMessages', async (req, res) => {
  const jobId = req.query.jobId;
  const result = await rpc.getCmplMessages(jobId);

  console.log(result);
  res.json({
    message: result,
  });
})

app.get('/checkForSolution', async (req, res) => {
  const jobId = req.query.jobId;
  const result = await rpc.checkForSolution(jobId);

  console.log(result);
  res.json({
    solutionStatus: result,
  });
})

app.get('/getSolution', async (req, res) => {
  const jobId = req.query.jobId;
  const result = await rpc.fetchSolution(jobId);

  console.log(result);
  res.json({
    solution: result,
  });
})

app.post('/sendXML', async function(req, res) {
  const problemXml = req.body.xml;
  console.log(problemXml);
  const result = await rpc.sendXML(problemXml);

  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})