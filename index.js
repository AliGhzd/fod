let fs = require('fs')

let data = { patterns: [] }
let sites = fs.readFileSync('domains').toString()

sites = sites.split('\n')

for (let site of sites) {
  if (site !== '') {
    var pattern = {
      enabled: true,
      name: site,
      pattern: '*' + site.substr(1) + '/*',
      isRegEx: false,
      caseSensitive: false,
      blackList: false,
      multiLine: false
    }
    data.patterns.push(pattern)
  }
}
data = JSON.stringify(data)

fs.writeFileSync('foxyproxy-patterns.json', data)
console.log('done')
