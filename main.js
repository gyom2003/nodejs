

const { duplicate } = require('./streambox.js')
const [,,filename] = process.argv[2]
duplicate(filename)