var mongoose = require('mongoose');

// スキーマ定義
const FormSchema: string = new mongoose.Schema({
  content: Number,
  title: String
});

var Form = mongoose.model('form', FormSchema);

// mongodbに接続
mongoose.connect('mongodb://localhost:27017/schedule', { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('connection success!');
    }
  }
);

module.exports.scheduleRegist = function (message){
    let form = new Form({
      title: message.text,
      content: ''
    });
    form.save(err => {
      if (err) console.error(err)
      console.log('saved')
    mongoose.disconnect();
  }); 
}
