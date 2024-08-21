import * as fs from 'fs'; //Get the fs module
var readStream = fs.createReadStream('./file.txt');

readStream.on('data', function(data) {
    console.log(data)
});
readStream.on('end', function() {
    console.log('File Ended')
})