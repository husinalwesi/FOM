// export const AppConfig = {
//   dateFormat: 'YYYY-MM-DD',
//   SKI_DUBAI: {
//     site_id: 1,
//     location: 'ski_dubai',
//     currency: (lang = 'en') => lang === 'en' ? 'AED' : 'درهم',
//     decimalNumber: 2,
//     code: 'ski-dubai',
//     title: "Ski Dubai",
//     containsShare: 'yes',
//     timezone: 'Asia/Dubai',
//     countryDetails: {
//       iso2: "ae",
//       iso3: "are",
//       dialCode: "+971"
//     },
//     mpassClientName: "MAFID-GLOBAL-SNOW",
//     // eslint-disable-next-line no-undef
//     siteBackground: require("@/assets/images/Dubai/gradient-noisy-sky-bg.webp"),
//     // eslint-disable-next-line no-undef
//     siteLogo: require("@/assets/images/Dubai/ski-dubai-logo.webp"),
//     socialMediaLinks: [
//       "https://www.facebook.com/skidxb",
//       "https://www.instagram.com/skidxb",
//       "https://twitter.com/skidxb",
//       "https://www.youtube.com/user/skidubai"
//     ],
//   },
//   SNOW_ABU_DHABI: {
//     site_id: 2,
//     location: 'snow_abu_dhabi',
//     currency: (lang = 'en') => lang === 'en' ? 'AED' : 'درهم',
//     decimalNumber: 2,
//     code: 'snow-abu-dhabi',
//     title: "Snow Abu Dhabi",
//     containsShare: 'yes',
//     timezone: 'Asia/Dubai',
//     countryDetails: {
//       iso2: "ae",
//       iso3: "are",
//       dialCode: "+971"
//     },
//     mpassClientName: "MAFID-GLOBAL-SNOW-AD",
//     // eslint-disable-next-line no-undef
//     siteBackground: require("@/assets/images/AbuDhabi/dark-blue-filtered.webp"),
//     // eslint-disable-next-line no-undef
//     siteLogo: require("@/assets/images/Dubai/ski-dubai-logo.webp"),
//     socialMediaLinks: [
//       "https://www.facebook.com/skidxb",
//       "https://www.instagram.com/skidxb",
//       "https://twitter.com/skidxb",
//       "https://www.youtube.com/user/skidubai"
//     ],
//   },
//   SNOW_OMAN: {
//     site_id: 3,
//     location: 'snow_oman',
//     currency: (lang = 'en') => lang === 'en' ? 'OMR' : 'ريال',
//     decimalNumber: 2,
//     code: 'snow-oman',
//     title: "Snow Oman",
//     containsShare: 'no',
//     timezone: 'Asia/Muscat',
//     countryDetails: {
//       iso2: "om",
//       iso3: "omn",
//       dialCode: "+968"
//     },
//     mpassClientName: "MAFID-GLOBAL-SNOW-OMAN",
//     // eslint-disable-next-line no-undef
//     siteBackground: require("@/assets/images/Oman/gradient-dark-purple-desktop.webp"),
//     // eslint-disable-next-line no-undef
//     siteLogo: require("@/assets/images/Oman/snow-oman-logo.webp"),
//     socialMediaLinks: [
//       "https://www.instagram.com/snow_omn",
//       "https://twitter.com/snow_omn",
//       "https://www.youtube.com/@snowoman",
//       "https://www.tiktok.com/@snow_omn"
//     ],
//   },
// }

// export const gearMeta = {
//   "equipments": [
//     {
//       "title": "Skis and poles",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/ski-and-poles.png",
//       "id": "eq01"
//     },
//     {
//       "title": "Regular snowboard",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/regular-snowboard.png",
//       "id": "eq02"
//     },
//     {
//       "title": "Goofy snowboard",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/goofy-snowboard.png",
//       "id": "eq03"
//     }
//   ],
//   "gear": [
//     {
//       "id": "gr01",
//       "title": "Long jacket",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/long-jacket.png",
//       "size": {
//         "adult": [
//           {
//             "label": "M",
//             "id": "gr0103"
//           },
//           {
//             "label": "L",
//             "id": "gr0104"
//           },
//           {
//             "label": "XL",
//             "id": "gr0105"
//           },
//           {
//             "label": "2XL",
//             "id": "gr0106"
//           },
//           {
//             "label": "3XL",
//             "id": "gr0307"
//           }
//         ]
//       },
//       "age_group": [
//         "1"
//       ],
//       "size_chart": {
//         "cm": [
//           {
//             "size": "M",
//             "length": "115cm",
//             "shoulder_length": "50cm",
//             "chest": "65cm",
//             "sleeves": "59cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "L",
//             "length": "118cm",
//             "shoulder_length": "54cm",
//             "chest": "68cm",
//             "sleeves": "60cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XL",
//             "length": "124cm",
//             "shoulder_length": "56cm",
//             "chest": "73cm",
//             "sleeves": "64cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXL",
//             "length": "127cm",
//             "shoulder_length": "58cm",
//             "chest": "77cm",
//             "sleeves": "65cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXL",
//             "length": "130cm",
//             "shoulder_length": "60cm",
//             "chest": "80cm",
//             "sleeves": "68cm",
//             "guest_type": "adult"
//           }
//         ],
//         "all": [
//           {
//             "size": "M",
//             "eur": 40,
//             "uk": 12,
//             "us": 10
//           },
//           {
//             "size": "L",
//             "eur": 42,
//             "uk": 14,
//             "us": 12
//           },
//           {
//             "size": "XL",
//             "eur": 44,
//             "uk": 16,
//             "us": 14
//           },
//           {
//             "size": "XXL",
//             "eur": 46,
//             "uk": 18,
//             "us": 16
//           },
//           {
//             "size": "XXXL",
//             "eur": 48,
//             "uk": 20,
//             "us": 18
//           }
//         ]
//       },
//       "isLongJacket": "long_jacket"
//     },
//     {
//       "id": "gr02",
//       "title": "Jumpsuit",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/jumpsuit.png",
//       "size": {
//         "child": [
//           {
//             "label": "2-3 yrs old",
//             "id": "gr0206"
//           },
//           {
//             "label": "4-5 yrs old",
//             "id": "gr0207"
//           },
//           {
//             "label": "6-7 yrs old",
//             "id": "gr0208"
//           },
//           {
//             "label": "8-9 yrs old",
//             "id": "gr0209"
//           },
//           {
//             "label": "10-11 yrs old",
//             "id": "gr0210"
//           }
//         ],
//         "junior": [
//           {
//             "label": "6-7 Years old",
//             "id": "gr0203"
//           },
//           {
//             "label": "8-9 Years old",
//             "id": "gr0204"
//           },
//           {
//             "label": "10-11 Years old",
//             "id": "gr0205"
//           }
//         ]
//       },
//       "age_group": [
//         "4",
//         "2"
//       ],
//       "size_chart": {
//         "cm": [
//           {
//             "size": "2-3 yrs old ",
//             "length": "80cm",
//             "shoulder_length": "34cm",
//             "chest": "84cm",
//             "sleeves": "34cm ",
//             "guest_type": "child"
//           },
//           {
//             "size": "4-5 yrs old ",
//             "length": "86cm",
//             "shoulder_length": "35cm",
//             "chest": "90cm",
//             "sleeves": "35cm",
//             "guest_type": "child"
//           },
//           {
//             "size": "6-7 yrs old ",
//             "length": "96cm ",
//             "shoulder_length": "37cm",
//             "chest": "94cm",
//             "sleeves": "41cm",
//             "guest_type": "child"
//           },
//           {
//             "size": "8-9 yrs old ",
//             "length": "108cm ",
//             "shoulder_length": "40cm",
//             "chest": "96cm",
//             "sleeves": "44cm",
//             "guest_type": "child"
//           },
//           {
//             "size": "10-11 yrs old ",
//             "length": "118cm ",
//             "shoulder_length": "41cm",
//             "chest": "100cm",
//             "sleeves": "47cm",
//             "guest_type": "child"
//           },
//           {
//             "size": "6-7 yrs old ",
//             "length": "96cm ",
//             "shoulder_length": "37cm",
//             "chest": "94cm",
//             "sleeves": "41cm",
//             "guest_type": "junior"
//           },
//           {
//             "size": "8-9 yrs old ",
//             "length": "108cm ",
//             "shoulder_length": "40cm",
//             "chest": "96cm",
//             "sleeves": "44cm",
//             "guest_type": "junior"
//           },
//           {
//             "size": "10-11 yrs old",
//             "length": "118cm ",
//             "shoulder_length": "41cm",
//             "chest": "100cm",
//             "sleeves": "47cm",
//             "guest_type": "junior"
//           }
//         ],
//         "all": []
//       },
//       "uuid": "jumpsuit"
//     },
//     {
//       "id": "gr03",
//       "title": "Trousers",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/trousers.png",
//       "size": {
//         "junior": [
//           {
//             "label": "12",
//             "id": "gr0310"
//           },
//           {
//             "label": "14",
//             "id": "gr0311"
//           }
//         ],
//         "adult": [
//           {
//             "label": "XS",
//             "id": "gr0301"
//           },
//           {
//             "label": "S",
//             "id": "gr0302"
//           },
//           {
//             "label": "M",
//             "id": "gr0303"
//           },
//           {
//             "label": "L",
//             "id": "gr0304"
//           },
//           {
//             "label": "XL",
//             "id": "gr0305"
//           },
//           {
//             "label": "2XL",
//             "id": "gr0306"
//           },
//           {
//             "label": "3XL",
//             "id": "gr0307"
//           },
//           {
//             "label": "4XL",
//             "id": "gr0308"
//           },
//           {
//             "label": "5XL",
//             "id": "gr0309"
//           }
//         ]
//       },
//       "age_group": [
//         "1",
//         "2"
//       ],
//       "size_chart": {
//         "cm": [
//           {
//             "size": 12,
//             "length": "98cm",
//             "waist": "82cm",
//             "legs": "64cm",
//             "guest_type": "junior"
//           },
//           {
//             "size": 14,
//             "length": "100cm",
//             "waist": "86cm",
//             "legs": "66cm",
//             "guest_type": "junior"
//           },
//           {
//             "size": "XS ",
//             "length": "103cm",
//             "waist": "88cm",
//             "legs": "68cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "S",
//             "length": "107cm",
//             "waist": "90cm",
//             "legs": "70cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "M",
//             "length": "110cm",
//             "waist": "92cm",
//             "legs": "72cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "L",
//             "length": "111cm",
//             "waist": "98cm",
//             "legs": "74cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XL",
//             "length": "113cm",
//             "waist": "108cm",
//             "legs": "76cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXL",
//             "length": "114cm",
//             "waist": "114cm",
//             "legs": "82cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXL",
//             "length": "114cm",
//             "waist": "120cm",
//             "legs": "86cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXL",
//             "length": "115cm",
//             "waist": "124cm",
//             "legs": "88cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXXL",
//             "length": "116cm",
//             "waist": "130cm",
//             "legs": "92cm",
//             "guest_type": "adult"
//           }
//         ],
//         "all": [
//           {
//             "size": "XS ",
//             "eur": 44,
//             "uk": 26,
//             "us": 4,
//             "guest_type": "adult"
//           },
//           {
//             "size": "S",
//             "eur": 46,
//             "uk": 28,
//             "us": 6,
//             "guest_type": "adult"
//           },
//           {
//             "size": "M",
//             "eur": 48,
//             "uk": 30,
//             "us": 8,
//             "guest_type": "adult"
//           },
//           {
//             "size": "L",
//             "eur": 50,
//             "uk": 32,
//             "us": 10,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XL",
//             "eur": 52,
//             "uk": 34,
//             "us": 12,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXL",
//             "eur": 54,
//             "uk": 36,
//             "us": 14,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXL",
//             "eur": 56,
//             "uk": 38,
//             "us": 16,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXL",
//             "eur": 56,
//             "uk": 40,
//             "us": 18,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXL",
//             "eur": 58,
//             "uk": 42,
//             "us": 20,
//             "guest_type": "adult"
//           }
//         ]
//       },
//       "uuid": "trousers"
//     },
//     {
//       "id": "gr04",
//       "title": "Jacket",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/jacket.png",
//       "size": {
//         "adult": [
//           {
//             "label": "XS",
//             "id": "gr0401"
//           },
//           {
//             "label": "S",
//             "id": "gr0402"
//           },
//           {
//             "label": "M",
//             "id": "gr0403"
//           },
//           {
//             "label": "L",
//             "id": "gr0404"
//           },
//           {
//             "label": "XL",
//             "id": "gr0405"
//           },
//           {
//             "label": "2XL",
//             "id": "gr0406"
//           },
//           {
//             "label": "3XL",
//             "id": "gr0407"
//           },
//           {
//             "label": "4XL",
//             "id": "gr0408"
//           },
//           {
//             "label": "5XL",
//             "id": "gr0409"
//           }
//         ],
//         "junior": [
//           {
//             "label": "12",
//             "id": "gr04002"
//           },
//           {
//             "label": "14",
//             "id": "gr04003"
//           }
//         ]
//       },
//       "age_group": [
//         "1",
//         "2"
//       ],
//       "size_chart": {
//         "cm": [
//           {
//             "size": 12,
//             "length": "65cm ",
//             "shoulder_length": "44cm",
//             "chest": "102cm ",
//             "sleeves": "55cm",
//             "guest_type": "junior"
//           },
//           {
//             "size": 14,
//             "length": "67cm ",
//             "shoulder_length": "45cm",
//             "chest": "106cm",
//             "sleeves": "60cm",
//             "guest_type": "junior"
//           },
//           {
//             "size": "XS ",
//             "length": "69cm",
//             "shoulder_length": "47cm",
//             "chest": "110cm",
//             "sleeves": "63cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "S",
//             "length": "72cm",
//             "shoulder_length": "48cm",
//             "chest": "116cm",
//             "sleeves": "68cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "M",
//             "length": "75cm",
//             "shoulder_length": "49cm",
//             "chest": "120cm",
//             "sleeves": "70cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "L",
//             "length": "76cm",
//             "shoulder_length": "52cm",
//             "chest": "124cm",
//             "sleeves": "70cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XL",
//             "length": "78cm",
//             "shoulder_length": "53cm",
//             "chest": "128cm",
//             "sleeves": "71cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXL",
//             "length": "79cm",
//             "shoulder_length": "55cm",
//             "chest": "132cm",
//             "sleeves": "72cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXL",
//             "length": "81cm",
//             "shoulder_length": "56cm",
//             "chest": "136cm",
//             "sleeves": "72cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXL",
//             "length": "82cm",
//             "shoulder_length": "57cm",
//             "chest": "138cm",
//             "sleeves": "74cm",
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXXL",
//             "length": "82cm",
//             "shoulder_length": "58cm",
//             "chest": "142cm",
//             "sleeves": "74cm",
//             "guest_type": "adult"
//           }
//         ],
//         "all": [
//           {
//             "size": "XS ",
//             "eur": 36,
//             "uk": 8,
//             "us": 6,
//             "guest_type": "adult"
//           },
//           {
//             "size": "S",
//             "eur": 38,
//             "uk": 10,
//             "us": 8,
//             "guest_type": "adult"
//           },
//           {
//             "size": "M",
//             "eur": 40,
//             "uk": 12,
//             "us": 10,
//             "guest_type": "adult"
//           },
//           {
//             "size": "L",
//             "eur": 42,
//             "uk": 14,
//             "us": 12,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XL",
//             "eur": 44,
//             "uk": 16,
//             "us": 14,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXL",
//             "eur": 46,
//             "uk": 18,
//             "us": 16,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXL",
//             "eur": 48,
//             "uk": 20,
//             "us": 18,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXL",
//             "eur": 50,
//             "uk": 22,
//             "us": 20,
//             "guest_type": "adult"
//           },
//           {
//             "size": "XXXXXL",
//             "eur": 52,
//             "uk": 24,
//             "us": 22,
//             "guest_type": "adult"
//           }
//         ]
//       },
//       "uuid": "jacket"
//     },
//     {
//       "id": "gr05",
//       "title": "Boots",
//       "image": "https://maf-skidubai-stg.sitefinity.cloud/images/default-source/gear-equipment/boot.png",
//       "size": [],
//       "age_group": [
//         "4",
//         "2",
//         "1"
//       ],
//       "size_chart": {
//         "adult": [
//           {
//             "size": 35,
//             "uk": 3,
//             "us": 3.5,
//             "gender": "male"
//           },
//           {
//             "size": 35.5,
//             "uk": 3.5,
//             "us": 4,
//             "gender": "male"
//           },
//           {
//             "size": 36,
//             "uk": 4,
//             "us": 4.5,
//             "gender": "male"
//           },
//           {
//             "size": 37,
//             "uk": 4.5,
//             "us": 5,
//             "gender": "male"
//           },
//           {
//             "size": 38,
//             "uk": 5.5,
//             "us": 6,
//             "gender": "male"
//           },
//           {
//             "size": 38.5,
//             "uk": 6,
//             "us": 6.5,
//             "gender": "male"
//           },
//           {
//             "size": 39,
//             "uk": 6.5,
//             "us": 7,
//             "gender": "male"
//           },
//           {
//             "size": 40,
//             "uk": 7,
//             "us": 7.5,
//             "gender": "male"
//           },
//           {
//             "size": 41,
//             "uk": 7.5,
//             "us": 8,
//             "gender": "male"
//           },
//           {
//             "size": 42,
//             "uk": 8,
//             "us": 8.5,
//             "gender": "male"
//           },
//           {
//             "size": 43,
//             "uk": 8.5,
//             "us": 9,
//             "gender": "male"
//           },
//           {
//             "size": 44,
//             "uk": 10,
//             "us": 10.5,
//             "gender": "male"
//           },
//           {
//             "size": 45,
//             "uk": 11,
//             "us": 11.5,
//             "gender": "male"
//           },
//           {
//             "size": 46.5,
//             "uk": 12,
//             "us": 12.5,
//             "gender": "male"
//           },
//           {
//             "size": 48.5,
//             "uk": 13.5,
//             "us": 14,
//             "gender": "male"
//           },
//           {
//             "size": 35,
//             "uk": 2.5,
//             "us": 5,
//             "gender": "female"
//           },
//           {
//             "size": 35.5,
//             "uk": 3,
//             "us": 5.5,
//             "gender": "female"
//           },
//           {
//             "size": 36,
//             "uk": 3.5,
//             "us": 6,
//             "gender": "female"
//           },
//           {
//             "size": 37,
//             "uk": 4,
//             "us": 6.5,
//             "gender": "female"
//           },
//           {
//             "size": 38,
//             "uk": 5,
//             "us": 7.5,
//             "gender": "female"
//           },
//           {
//             "size": 38.5,
//             "uk": 5.5,
//             "us": 8,
//             "gender": "female"
//           },
//           {
//             "size": 39,
//             "uk": 6,
//             "us": 8.5,
//             "gender": "female"
//           },
//           {
//             "size": 40,
//             "uk": 6.5,
//             "us": 9,
//             "gender": "female"
//           },
//           {
//             "size": 41,
//             "uk": 7,
//             "us": 9.5,
//             "gender": "female"
//           },
//           {
//             "size": 42,
//             "uk": 7.5,
//             "us": 10,
//             "gender": "female"
//           },
//           {
//             "size": 43,
//             "uk": 8,
//             "us": 10.5,
//             "gender": "female"
//           },
//           {
//             "size": 44,
//             "uk": 9.5,
//             "us": 12,
//             "gender": "female"
//           },
//           {
//             "size": 45,
//             "uk": 10.5,
//             "us": 13,
//             "gender": "female"
//           },
//           {
//             "size": 46.5,
//             "uk": 11.5,
//             "us": 14,
//             "gender": "female"
//           },
//           {
//             "size": 48.5,
//             "uk": 13,
//             "us": 15.5,
//             "gender": "female"
//           }
//         ],
//         "junior": [
//           {
//             "size": 29,
//             "uk": 11,
//             "us": 11.5,
//             "gender": "male"
//           },
//           {
//             "size": 31,
//             "uk": 12.5,
//             "us": 13,
//             "gender": "male"
//           },
//           {
//             "size": 33,
//             "uk": 13.5,
//             "us": 1,
//             "gender": "male"
//           },
//           {
//             "size": 34,
//             "uk": 1.5,
//             "us": 2,
//             "gender": "male"
//           },
//           {
//             "size": 35,
//             "uk": 2.5,
//             "us": 3,
//             "gender": "male"
//           },
//           {
//             "size": 35.5,
//             "uk": 3,
//             "us": 3.5,
//             "gender": "male"
//           },
//           {
//             "size": 36,
//             "uk": 3.5,
//             "us": 4,
//             "gender": "male"
//           },
//           {
//             "size": 37,
//             "uk": 4,
//             "us": 4.5,
//             "gender": "male"
//           },
//           {
//             "size": 38,
//             "uk": 5.5,
//             "us": 6,
//             "gender": "male"
//           },
//           {
//             "size": 38.5,
//             "uk": 6,
//             "us": 6.5,
//             "gender": "male"
//           },
//           {
//             "size": 39,
//             "uk": 6.5,
//             "us": 7,
//             "gender": "male"
//           },
//           {
//             "size": 40,
//             "uk": 7,
//             "us": 7.5,
//             "gender": "male"
//           },
//           {
//             "size": 26,
//             "uk": 8,
//             "us": 9.5,
//             "gender": "female"
//           },
//           {
//             "size": 27,
//             "uk": 9,
//             "us": 10.5,
//             "gender": "female"
//           },
//           {
//             "size": 28,
//             "uk": 10,
//             "us": 11.5,
//             "gender": "female"
//           },
//           {
//             "size": 29,
//             "uk": 11,
//             "us": 12.5,
//             "gender": "female"
//           },
//           {
//             "size": 30,
//             "uk": 11.5,
//             "us": 13,
//             "gender": "female"
//           },
//           {
//             "size": 31,
//             "uk": 12.5,
//             "us": 1,
//             "gender": "female"
//           },
//           {
//             "size": 32.5,
//             "uk": 13.5,
//             "us": 2,
//             "gender": "female"
//           },
//           {
//             "size": 34,
//             "uk": 2,
//             "us": 3.5,
//             "gender": "female"
//           },
//           {
//             "size": 35,
//             "uk": 2.5,
//             "us": 4,
//             "gender": "female"
//           },
//           {
//             "size": 36,
//             "uk": 3.5,
//             "us": 6,
//             "gender": "female"
//           },
//           {
//             "size": 37,
//             "uk": 4,
//             "us": 6.5,
//             "gender": "female"
//           },
//           {
//             "size": 38,
//             "uk": 5,
//             "us": 7.5,
//             "gender": "female"
//           }
//         ],
//         "child": [
//           {
//             "size": 29,
//             "uk": 11,
//             "us": 11.5,
//             "gender": "male"
//           },
//           {
//             "size": 31,
//             "uk": 12.5,
//             "us": 13,
//             "gender": "male"
//           },
//           {
//             "size": 33,
//             "uk": 13.5,
//             "us": 1,
//             "gender": "male"
//           },
//           {
//             "size": 34,
//             "uk": 1.5,
//             "us": 2,
//             "gender": "male"
//           },
//           {
//             "size": 35,
//             "uk": 2.5,
//             "us": 3,
//             "gender": "male"
//           },
//           {
//             "size": 35.5,
//             "uk": 3,
//             "us": 3.5,
//             "gender": "male"
//           },
//           {
//             "size": 36,
//             "uk": 3.5,
//             "us": 4,
//             "gender": "male"
//           },
//           {
//             "size": 37,
//             "uk": 4,
//             "us": 4.5,
//             "gender": "male"
//           },
//           {
//             "size": 26,
//             "uk": 8,
//             "us": 9.5,
//             "gender": "female"
//           },
//           {
//             "size": 27,
//             "uk": 9,
//             "us": 10.5,
//             "gender": "female"
//           },
//           {
//             "size": 28,
//             "uk": 10,
//             "us": 11.5,
//             "gender": "female"
//           },
//           {
//             "size": 29,
//             "uk": 11,
//             "us": 12.5,
//             "gender": "female"
//           },
//           {
//             "size": 30,
//             "uk": 11.5,
//             "us": 13,
//             "gender": "female"
//           },
//           {
//             "size": 31,
//             "uk": 12.5,
//             "us": 1,
//             "gender": "female"
//           },
//           {
//             "size": 32.5,
//             "uk": 13.5,
//             "us": 2,
//             "gender": "female"
//           },
//           {
//             "size": 34,
//             "uk": 2,
//             "us": 3.5,
//             "gender": "female"
//           },
//           {
//             "size": 35,
//             "uk": 2.5,
//             "us": 4,
//             "gender": "female"
//           }
//         ]
//       },
//       "uuid": "boots",
//       "isBoots": true
//     }
//   ],
//   "levels": [
//     {
//       "labels": "Beginner",
//       "id": "1"
//     },
//     {
//       "labels": "Level 1",
//       "id": "2"
//     },
//     {
//       "labels": "Level 2",
//       "id": "3"
//     },
//     {
//       "labels": "Level 3",
//       "id": "4"
//     },
//     {
//       "labels": "Level 4",
//       "id": "5"
//     }
//   ],
//   "height_meta": [
//     {
//       "id": "1",
//       "name": "< 148",
//       "value": "< 148"
//     },
//     {
//       "id": "2",
//       "name": "149 - 157",
//       "value": "149 - 157"
//     },
//     {
//       "id": "3",
//       "name": "158 - 166",
//       "value": "158 - 166"
//     },
//     {
//       "id": "4",
//       "name": "167 - 178",
//       "value": "167 - 178"
//     },
//     {
//       "id": "5",
//       "name": "179 - 194",
//       "value": "179 - 194"
//     },
//     {
//       "id": "6",
//       "name": "> 195",
//       "value": "> 195"
//     }
//   ],
//   "weight_meta": [
//     {
//       "id": "1",
//       "name": "10 - 13",
//       "value": "10 - 13"
//     },
//     {
//       "id": "2",
//       "name": "14 - 17",
//       "value": "14 - 17"
//     },
//     {
//       "id": "3",
//       "name": "18 - 21",
//       "value": "18 - 21"
//     },
//     {
//       "id": "4",
//       "name": "22 - 25",
//       "value": "22 - 25"
//     },
//     {
//       "id": "5",
//       "name": "26 - 30",
//       "value": "26 - 30"
//     },
//     {
//       "id": "6",
//       "name": "31 - 35",
//       "value": "31 - 35"
//     },
//     {
//       "id": "7",
//       "name": "36 - 41",
//       "value": "36 - 41"
//     },
//     {
//       "id": "8",
//       "name": "42 - 48",
//       "value": "42 - 48"
//     },
//     {
//       "id": "9",
//       "name": "49 - 57",
//       "value": "49 - 57"
//     },
//     {
//       "id": "10",
//       "name": "58 - 66",
//       "value": "58 - 66"
//     },
//     {
//       "id": "11",
//       "name": "67 - 78",
//       "value": "67 - 78"
//     },
//     {
//       "id": "12",
//       "name": "79 - 94",
//       "value": "79 - 94"
//     },
//     {
//       "id": "13",
//       "name": "> 95",
//       "value": "> 95"
//     }
//   ],
// }
