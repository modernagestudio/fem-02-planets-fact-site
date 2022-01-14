import { useState } from "react";
import { styled } from "styles/stitches.config";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledNavbar = styled("div", {
    height: 86,
    position: "relative",
    top: 0,
    width: "100%",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "$4",
    paddingRight: "$2",
    "@tablet": {
        justifyContent: "center",
        height: "auto",
        flexDirection: "column",
        padding: 0,
        paddingTop: 32,
        paddingBottom: 27,
        gap: 39,
    },
    "@desktop": {
        height: 86,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        paddingInline: "$4",
    },
});

const StyledLogo = styled("div", {
    fontFamily: "$antonio",
    textTransform: "uppercase",
    fontSize: "28px",
    whiteSpace: "nowrap",
});

const StyledNav = styled("nav", {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 86,
    left: 0,
    padding: "$3",
    width: "100%",
    fontSize: "15px",
    justifyContent: "space-between",
    background: "$navy",
    "@tablet": {
        position: "static",
        flexDirection: "row",
        padding: 0,
        maxWidth: 665,
        fontSize: "11px",
        lineHeight: "25px",
    },
    "@desktop": {
        height: "stretch",
    },
    variants: {
        closed: {
            true: {
                display: "none",
                "@tablet": {
                    display: "flex",
                },
            },
        },
    },
    defaultVariants: {
        closed: true,
    },
});

const StyledNavItem = styled("a", {
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "$spartan",
    fontWeight: "bold",
    height: 66,
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.75)",
    letterSpacing: "1px",
    "--nav-accent": "yellow",
    background:
        "transparent url(/assets/icon-chevron.svg) no-repeat center right",
    gap: "$3",
    "&:last-child": {
        borderBottom: 0,
    },
    "&::before": {
        content: "",
        width: "20px",
        height: "20px",
        display: "block",
        background: "var(--nav-accent)",
        borderRadius: "50%",
    },
    "@tablet": {
        background: "none",
        "&::before": {
            display: "none",
        },
        height: "auto",
        borderBottom: 0,
    },
    "@desktop": {
        position: "relative",
        height: "stretch",
        "&::after": {
            content: "",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "var(--nav-accent)",
            opacity: 0,
        },
    },
    variants: {
        planet: {
            mercury: {
                "--nav-accent": "var(--color-mercury)",
            },
            venus: {
                "--nav-accent": "var(--color-venus)",
            },
            earth: {
                "--nav-accent": "var(--color-earth)",
            },
            mars: {
                "--nav-accent": "var(--color-mars)",
            },
            jupiter: {
                "--nav-accent": "var(--color-jupiter)",
            },
            saturn: {
                "--nav-accent": "var(--color-saturn)",
            },
            uranus: {
                "--nav-accent": "var(--color-uranus)",
            },
            neptune: {
                "--nav-accent": "var(--color-neptune)",
            },
        },
        active: {
            true: {
                color: "rgba(255,255,255,1)",
                "@desktop": {
                    "&::after": {
                        opacity: 1,
                    },
                },
            },
        },
    },
});

const StyledBurger = styled("button", {
    width: 40,
    height: 40,
    background:
        "transparent url('/assets/icon-hamburger.svg') no-repeat center",
    border: 0,
    right: "$2",
    top: "$2",
    opacity: 1,
    cursor: "pointer",
    "@tablet": {
        display: "none",
    },
    variants: {
        active: {
            true: {
                opacity: 0.25,
            },
        },
    },
});

const NavLink = (props: any) => {
    const { text, href, planet } = props;
    const router = useRouter();
    return (
        <Link href={href || "#"} passHref>
            <StyledNavItem planet={planet} active={router.pathname == href}>
                {text || "Link"}
            </StyledNavItem>
        </Link>
    );
};

export const Navbar = () => {
    const [navOpen, updateNavOpen] = useState(false);
    return (
        <StyledNavbar>
            <StyledLogo>The Planets</StyledLogo>
            <StyledBurger
                onClick={() => {
                    updateNavOpen(!navOpen);
                }}
                active={navOpen}
            />
            <StyledNav closed={!navOpen}>
                <NavLink text="Mercury" planet="mercury" href="/" />
                <NavLink text="Venus" planet="venus" href="/venus" />
                <NavLink text="Earth" planet="earth" href="/earth" />
                <NavLink text="Mars" planet="mars" href="/mars" />
                <NavLink text="Jupiter" planet="jupiter" href="/jupiter" />
                <NavLink text="Saturn" planet="saturn" href="/saturn" />
                <NavLink text="Uranus" planet="uranus" href="/uranus" />
                <NavLink text="Neptune" planet="neptune" href="/neptune" />
            </StyledNav>
        </StyledNavbar>
    );
};
