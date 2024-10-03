module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  // mode: 'aot',//deployment mode
  mode: 'jit',//development mode
  theme: {
    extend: {
      colors: {
        'primary': '#802d3d',
        'secondary': '#e0bdba',
        'dark': '#2e2b28',
        // lines full white 3% opacity
      },
      screens: {
        'max-mobile': { 'max': '1024px' },
        'max-mobile-dashboard': { 'max': '640px' },
        'min-1440': { 'min': '1440px' }
      },
      fontFamily: {
        'gotham': ['Gotham']
        // 'Futura-Bk-BT-Medium': ['Futura-Bk-BT-Medium', 'Cairo-SemiBold', 'sans-serif'], // Banner Cairo-Semi-Bold //Button on Banner  Cairo-Bold // bottom section Cairo-Regular 
        // 'Futura-Bk-BT-Heavy': ['Futura-Bk-BT-Heavy', 'Cairo-Bold', 'sans-serif'], // Banner Cairo-Bold
        // // 
        // 'Poppins-Light': ['Poppins-Light', 'Cairo-Regular', 'sans-serif'], // Banner Cairo-Semi-Bold
        // 'Poppins-Medium': ['Poppins-Medium', 'Cairo-SemiBold', 'sans-serif'],
        // 'Poppins-Bold': ['Poppins-Bold', 'Cairo-Bold', 'sans-serif'],
        // // 
        // 'Cairo-Regular': ['Cairo-Regular', 'sans-serif'],

        // 'Cairo-Semi-Bold': ['Cairo-SemiBold', 'sans-serif'],
        // 'Cairo-Bold': ['Cairo-Bold', 'sans-serif'],

        // 'Noto-Sans-Medium': ['Noto-Sans-Medium', 'Cairo-SemiBold', 'sans-serif'],
        // 'Noto-Sans-Regular': ['Noto-Sans-Regular', 'Cairo-Regular', 'sans-serif'],

        // 'Roboto-Regular': ['Roboto-Regular', 'Cairo-Regular', 'sans-serif'],
      },
      // boxShadow: {
      //   'custom-1': '0px 40px 80px #0000001A',
      //   'custom-2': '0px 20px 40px #0000004D',
      //   'custom-3': '0px 10px 30px #00000033',
      //   'custom-4': '0px 3px 6px #00000029',
      //   'custom-5': '0 20px 40px #0000001A',
      //   'custom-6': '0px 1px 13px #0000001A',
      //   'custom-7': '0px 1px 3px #0000000D',
      //   'custom-8': '0px 0px 10px #0000001A',
      // },
      // dropShadow: {
      //   'widget': '0 3px 6px rgba(0, 0, 0, 0.16)',
      //   'map-shadow': '0px 10px 30px #00000033',
      //   'offer': '16px 16px 0px #00904A',
      //   'offer-RTL': '-16px 16px 0px #00904A'
      // },
      maxWidth: {
        'desktop-less': '1440px',//1074px
        'desktop': '1440px',
        'large-desktop': '1792px',
        // 1074px
      }
    },
  },
}
