/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        extend: {
            cursor: {
                default: "url(/mouse.svg), default",
                pointer: "url(/mouse-hover.svg), pointer",
            },
            fontFamily: {
                mont: "mont",
                montSemiBold: "montSemiBold",
                montBold: "montBold",
                montHeavy: "montHeavy",
            },
            colors: {
                primary: "#5135ff",
                bgBlack: "#1c1c1c",
                light: "#cfcfcf",
                fog: "#f6f6f6",
                info: "#3498db",
                success: "#4cd964",
                warning: "#f1c40f",
                error: "#ef74c3c",
                grey: "rgb(102, 102, 102)",
                violet: "#64058A",
            },
            spacing: {
                22: "5.5rem",
            },
            fontSize: {
                "7.5xl": [
                    "5rem",
                    {
                        lineHeight: "1",
                    },
                ],
                "4.3xl": [
                    "2.5rem",
                    {
                        lineHeight: "1",
                    },
                ],
                "5.5xl": [
                    "3.375rem",
                    {
                        lineHeight: "1",
                    },
                ],
            },
        },
    },
    safelist: [
        {
            pattern: /bg-./,
        },
    ],
    plugins: [],
};
