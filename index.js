module.exports = {

  before: config => {
    global.React = require('react')
    require('sharp-pad-dump-react')
  }

}
