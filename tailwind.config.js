const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                itc: [
                    "ITC Avant Garde Gothic",
                    ...defaultTheme.fontFamily.sans,
                ],
                sans: ["Liberation Mono", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#00a24c",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
