const backgroundColor = '#FFFFFF'
const foregroundColor = '#000000'

const cursorColor = '#f0f8ff'

const colors = [
  backgroundColor,
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  '#49483E', // brown gray
  '#F92672', // pink
  '#A6E22E', // green
  '#FD971F', // orange
  '#AE81FF', // purple
  '#66D9EF', // blue
  '#38CCD1', // cyan
  '#ffffff', // white
  foregroundColor
]

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