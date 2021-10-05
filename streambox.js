


const fs = require('fs');

function duplicate(filename) {
    const [name, extensions] = filename.split('.')
    const readable = fs.createReadStream(filename)
    const writable = fs.createWriteStream(name + 'copy' + extensions)
    readable.pipe(writable)
}

module.exports = {
    duplicate,
  }