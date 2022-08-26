import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

function getMesages(){
  let mesages = [];
  if(tweets.length > 10){
    for(let i = tweets.length - 10; i < tweets.length; i++){
      mesages.push(tweets[i]);
    }
  }
  else {
    mesages = tweets;
  }
  mesages.map(
    tweet => {tweet.avatar = users.find(
      user => user.username === tweet.username
    ).avatar}
  );

  return mesages;
}

app.get('/tweets', (req, res)=> {
    const mesages = getMesages();
    console.log(tweets);
    console.log(mesages);
    res.send(mesages);
});

app.post('/tweets', (req, res)=>{
    tweets.push({
       id: tweets.length + 1,
       ...req.body
    });
   res.send('OK');
});

app.post('/sign-up', (req, res)=>{
    users.push({
      id: users.length + 1,
      ...req.body
    });
    res.send('OK');
});

app.listen(5000);