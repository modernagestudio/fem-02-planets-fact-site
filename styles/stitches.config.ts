import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            white: "#FFFFFF",
            navy: "#070724",
            steel: "#38384F",
            grey: "#838391",
            cyan: "#419EBB",
            orangeLight: "#EDA249",
            orangeDark: "#CD5120",
            purple: "#6f2ed6",
            rust: "#D14C32",
            red: "#D83A34",
            teal: "#1ec2a4",
            blue: "#2d68f0",
        },
        fonts: {
            antonio: "Antonio, sans-serif",
            spartan: "Spartan, sans-serif",
        },
        space: {
            0.5: "4px",
            1: "8px",
            1.5: "12px",
            2: "16px",
            3: "24px",
            4: "32px",
            5: "40px",
            6: "48px",
            7: "56px",
            8: "64px",
            9: "72px",
            10: "80px",
        },
    },
    media: {
        tablet: "(min-width: 768px)",
        desktop: "(min-width: 1280px)",
    },
});