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
    body: {
        fontFamily: "Spartan, sans-serif",
        background: "$navy",
        color: "$white",
        margin: 0,
        padding: 0,
        height: "100%",
    },
});
