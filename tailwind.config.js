/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      FSMeridian: ["FSMeridian"],
      GeneralSans: ["GeneralSans"],
      GeneralSansRegular: ["GeneralSansRegular"],
      Poppins: ["Poppins"]
    },
    extend: {
      colors: {
        primaryColor: "#AFBA14",
        textColor: "#0C0848",
        lighttextGray: "#414651",
        secondaryColor: "#FBF568",
        whiteColor: "#ffffff",
        bgColor: "#111826",
        coloredText: "#1FC77E",
        purpleColor: "#7F3DD2",
        inputColor: "#F7F7F8",
        shadowColor: "#2F4069",
        chatColor: "#29CC6A",
        omniGPTColor: "#CCD6DE",
      },
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        60: "60px",
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        320: "320px",
        340: "340px",
        370: "370px",
        420: "420px",
        495: "495px",
        510: "510px",
        568: "568px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  plugins: [],
};
