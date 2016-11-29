var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var ExifImage = require('exif').ExifImage;

  new ExifImage({ image: 'photo.jpg' }, function (error, exifData) {
    if (error)
      res.status(500).send('Error: ' + error.message);
    else
      res.header('Content-Type', 'application/json').send(exifData);
  });
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})