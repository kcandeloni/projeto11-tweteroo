import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

app.get('/tweets', (req, res)=> {
  //
    res.send(tweets);
});

app.post('/tweets', (req, res)=>{
    tweets.push({
       id: tweets.length + 1,
       ...req.body
    });
   res.send('OK');
});

app.post('/sing-up', (req, res)=>{
    users.push({
      id: users.length + 1,
      ...req.body
    });
    res.send('OK');
});

app.listen(5000);