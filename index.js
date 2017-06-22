const backgroundColor = '#FFFFFF'
const foregroundColor = '#272822'

const cursorColor = '#f0f8ff'

const colors = {
  black: '#272822',
  red: '#F92672',
  green: '#A6E22E',
  yellow: '#FD971F',
  blue: '#AE81FF',
  magenta: '#F92672',
  cyan: '#28C6E4',
  white: '#f8f8f0',
  lightBlack: '#49483e',
  lightRed: '#F92672',
  lightGreen: '#A6E22E',
  lightYellow: '#FD971F',
  lightBlue: '#AE81FF',
  lightMagenta: '#F92672',
  lightCyan: '#28C6E4',
  lightWhite: '#f8f8f2'
}

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_active:before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
