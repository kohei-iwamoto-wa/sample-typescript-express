const mongoose = require('mongoose');
// スキーマ定義
let formSchema = new mongoose.Schema({
    name: String,
});

const formModel = mongoose.model('form', formSchema);

// mongodbに接続
mongoose.connect('mongodb://localhost:27017/schedule', { useNewUrlParser: true },
  function(err :any) {
      if (err) {
          console.log(err);
      } else {
          console.log('connection success!');
      }
  },
);

module.exports.formRegist = function (req: String) {
    const form = new formModel({
        name: req,
    });
    form.save((err: any) => {
        if (err) console.error(err);
        console.log('saved');
        mongoose.disconnect();
    });
};
