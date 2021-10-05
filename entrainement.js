


const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('writeMe.txt', data);
})

function duplicate(filename) {
    var readStream = fs.createReadStream(filename);
    var writeStream = fs.createWriteStream('writeMe.txt');
    var result = readStream.pipe(writeStream);
    console.log(result.toString());
    return result;
}

duplicate('readMe.txt')