import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    html: {
        boxSizing: "border-box",
        height: "100%",
    },
    "*, *:before, *:after": {
        boxSizing: "inherit",
    },
    ":root": {
        "--color-mercury": "$colors$cyan",
        "--color-venus": "$colors$orangeLight",
        "--color-earth": "$colors$purple",
        "--color-mars": "$colors$rust",
        "--color-jupiter": "$colors$red",
        "--color-saturn": "$colors$orangeDark",
        "--color-uranus": "$colors$teal",
        "--color-neptune": "$colors$blue",
    },
    // reset
    "h1, h2, h3, h4, h5, h6, p": {
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: "Spartan, sans-serif",
        background: "$navy url(/assets/background-stars.svg) center",
        color: "$white",
        margin: 0,
        padding: 0,
        height: "100%",
    },
});
