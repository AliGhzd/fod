var fs = require('fs')

var data = { patterns: [] }
var sites = fs.readFileSync('domains').toString()

sites = sites.split('\n')

for (var site of sites) {
  var pattern = {
    enabled: true,
    name: site,
    pattern: "*" + site + "/*",
    isRegEx: false,
    caseSensitive: false,
    blackList: false,
    multiLine: false
  }
  data.patterns.push(pattern)
}
data = JSON.stringify(data)

fs.writeFileSync('foxyproxy-patterns.json', data)
console.log('done')
