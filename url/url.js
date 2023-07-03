const url = require('url')
const address = 'https://www.youtube.com/watch?v=h0GX3hHSoqk'


const parseUrl = new url.URL(address)
console.log(parseUrl)