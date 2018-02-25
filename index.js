module.exports = {

  before: config => {
    require('sharp-pad-dump-react')
    global.React = require('react')
  }

}
