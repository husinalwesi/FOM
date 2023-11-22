// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// For Local
export const environment = {
  production: false,
  baseURL: 'https://woqodapis.ihorizons.com',
  socialShareBaseURL: 'https://woqodweb.ihorizons.com',
  pwaEnabled: false,
  languages: {
    default: 'en',
    saveKey: 'LANGUAGE'
  },
  nonce: {
    isEnabled: false,
    value: ''
  },
  isMagicCursorEnabled: true,
  googleMapKey: 'AIzaSyCWng_3Uy1-O_BoaUt_z-FgTViRSTIuZCo',
  recaptchaSiteKey: '6LcTk6YoAAAAAFcWTrePzT5uCg_QyHiR2pbSO5Pd',
  // 6LcTk6YoAAAAAFcWTrePzT5uCg_QyHiR2pbSO5Pd
  // 6LcTk6YoAAAAAHUrgOF-08AjcVl3-ZNhacNfT7o5
  isScrollEnabled: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
