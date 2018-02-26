module.exports = {

  before: config => {
    require('sharp-pad-dump-react')
    const React = require('react')
    global.React = React
    global.Component = React.Component
    global.Fragment = React.Fragment
  }

}
