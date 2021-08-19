const backgroundColor = '#FFFFFF'
const foregroundColor = '#272822'

const cursorColor = 'rgba(249,38,114,0.8)'

const colors = {
  black: '#272822',
  red: '#F92672',
  green: '#6AAF19',
  yellow: '#F25A00',
  blue: '#AE81FF',
  magenta: '#F92672',
  cyan: '#22B1CC',
  white: '#f8f8f0',
  lightBlack: '#49483e',
  lightRed: '#F92672',
  lightGreen: '#6AAF19',
  lightYellow: '#F25A00',
  lightBlue: '#AE81FF',
  lightMagenta: '#F92672',
  lightCyan: '#22B1CC',
  lightWhite: '#f8f8f2'
}

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    cursorColor,
    colors
  })
}
