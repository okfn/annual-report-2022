const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  darkMode: false, // or 'media' or 'class'
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ['layouts/**/*.html', 'content/**/*.md'],
  theme: {
    colors: {
      'project': '#AEFFEC',
      'specialist': '#FF80DB',
      'skyblue': {
        500: '00D1FF',
      },
      'aeroblue':{
        500: '#AEFFEC'
      },
      'lightpink':{
        500: '#ff80db'
      },
      'blog': 'rgba(228, 255, 54, 0.25)',
    },
    extend: {
      backgroundImage: {
        'header-top': "url('/images/okf-report-2022-top-bg.png')",
        'bottom': "url('/images/background-bottom.png')"
      }
    },
    fontFamily: {
      'body': ['"DM Sans"'],
      'dmsans': ['"DM Sans"'],
      'miriam': ['"Miriam Libre"']
    },
  },
  variants: {},
  plugins: [],
})
