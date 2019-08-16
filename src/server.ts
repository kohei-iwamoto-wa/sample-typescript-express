import * as Express from 'express';
const ejs = require('ejs');

const app = Express();
app.engine('ejs', ejs.renderFile);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


app.get(
    '/',
    (req: Express.Request, res: Express.Response) => {
        const msg :string = 'This is Index Page'
          + '※メッセージを書いて送信してください';
          res.render('index.ejs',
          {
              title: 'Index',
              content: msg
          }) 
    });

app.post(
    '/',
    (req: Express.Request, res: Express.Response) => {
        const msg :string = 'This is Other Page!<br>'
          + 'あなたは' + req.body.message + '送信しました';
        res.render('../views/index.ejs',
            { title: 'Posted',
                content: msg,
            });
    });

app.listen(
    3000,
    () => {
        console.log('Example app listening on port 3000!');
    });

export default app;