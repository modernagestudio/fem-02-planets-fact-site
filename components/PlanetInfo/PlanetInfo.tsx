import { styled } from "styles/stitches.config";
import { useState } from "react";
import Image from "next/image";
// import Mercury from "public/assets/planet-mercury.svg";

const LayoutWrapper = styled("div", {
    paddingInline: "$3",
    "@tablet": {
        margin: "0 auto",
        maxWidth: 1110,
        paddingInline: "$5",
        columnGap: "$8",
        display: "grid",
        gridTemplateColumns: "1fr 280px",
        gridTemplateAreas: `
                            "imagesection imagesection"
                            "textsection tabcontainer"
                            "infoboxes infoboxes"
                        `,
    },
    "@desktop": {
        gridTemplateColumns: "1fr minmax(350px, 0.5fr)",
        gridTemplateAreas: `
                            "imagesection textsection"
                            "imagesection tabcontainer"
                            "infoboxes infoboxes"
                        `,
    },
});

const TabContainer = styled("div", {
    gridArea: "tabcontainer",
    display: "flex",
    height: 51,
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    justifyContent: "space-between",
    paddingInline: "$3",

    "@tablet": {
        flexDirection: "column",
        justifyContent: "end",
        height: "auto",
        borderBottom: 0,
        padding: 0,
        paddingBottom: 72,
    },
});

const StyledTabItem = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "$spartan",
    fontWeight: "bold",
    fontSize: 9,
    letterSpacing: 2,
    color: "rgba(255,255,255,0.5)",
    height: "stretch",
    position: "relative",
    cursor: "pointer",
    "--accent-color": "",
    "@tablet": {
        height: 40,
        textAlign: "left",
        justifyContent: "start",
        border: "1px solid rgba(255,255,255,0.2)",
        paddingInline: 20,
        counterIncrement: "my-sec-counter",
        gap: "$2",
        "& + *": {
            marginTop: "$2",
        },
        "&::before": {
            content: "'0' counter(my-sec-counter)",
            color: "rgba(255,255,255,0.5)",
        },
    },
    variants: {
        active: {
            true: {
                color: "rgba(255,255,255,1)",
                cursor: "default",
                "&::after": {
                    content: "",
                    display: "block",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "var(--accent-color)",
                },
                "@tablet": {
                    background: "var(--accent-color)",
                    "&::after": {
                        display: "none",
                    },
                },
            },
        },
        planet: {
            mercury: {
                "--accent-color": "var(--color-mercury)",
            },
        },
    },
    defaultVariants: {
        planet: "mercury",
    },
});

const TabItem = (props: any) => {
    const { label, active, onClick } = props;
    return (
        <StyledTabItem active={active} onClick={onClick}>
            {label}
        </StyledTabItem>
    );
};

TabItem.defaultProps = {
    label: "Tab item",
};

const TextSection = styled("div", {
    gridArea: "textsection",
    "& h1": {
        fontSize: 48,
        fontWeight: 300,
        textTransform: "uppercase",
        fontFamily: "$antonio",
    },
    "& p": {
        maxWidth: "60ch",
    },
});

const ImageSection = styled("div", {
    gridArea: "imagesection",
    background: "red",
    minHeight: 314,
    "@tablet": {
        minHeight: 466,
    },
    "@desktop": {
        minHeight: 0,
    },
});

const StyledInfoBoxContainer = styled("div", {
    gridArea: "infoboxes",
});
const StyledInfoBoxItem = styled("div", {
    height: "$6",
    border: "1px solid rgba(255,255,255,0.2)",
});

const InfoBoxes = (props: any) => {
    const { data } = props;
    return (
        <StyledInfoBoxContainer>
            <StyledInfoBoxItem>Item</StyledInfoBoxItem>
            <StyledInfoBoxItem>Item</StyledInfoBoxItem>
            <StyledInfoBoxItem>Item</StyledInfoBoxItem>
            <StyledInfoBoxItem>Item</StyledInfoBoxItem>
        </StyledInfoBoxContainer>
    );
};

export const PlanetInfo = (props: any) => {
    const { activePlanet } = props;
    const [activeTab, updateActiveTab] = useState("overview");
    const handleClick = (tabName: string) => {
        updateActiveTab(tabName);
    };
    return (
        <LayoutWrapper>
            <TabContainer>
                <TabItem
                    label="Overview"
                    active={activeTab === "overview"}
                    onClick={() => handleClick("overview")}
                />
                <TabItem
                    label="Structure"
                    active={activeTab === "structure"}
                    onClick={() => handleClick("structure")}
                />
                <TabItem
                    label="Surface"
                    active={activeTab === "surface"}
                    onClick={() => handleClick("surface")}
                />
            </TabContainer>

            <ImageSection>kgjygyg</ImageSection>

            <TextSection>
                <h1>{activePlanet || "Planet"}</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet rerum odit vero? Velit accusantium, incidunt
                    asperiores aperiam vero iusto! Voluptatem ipsa tempora
                    nostrum natus numquam labore fuga aspernatur eaque dolore
                    corrupti. Velit odit, iusto, ab sit libero sed repellat
                    ipsam possimus tenetur, hic vitae quasi saepe nam mollitia
                    maxime. At tempore, quod omnis est officiis, illum quisquam
                    velit a soluta deserunt ab, dolor rem adipisci nesciunt! A
                    nam, quis ipsum hic rem maiores adipisci minus quam, eaque
                    maxime veniam consectetur asperiores. Voluptatem beatae
                    consequatur, non nam dicta possimus sapiente alias placeat
                    provident quod in commodi. Aliquam voluptates eaque error
                    corrupti!
                </p>
            </TextSection>
            <InfoBoxes />
        </LayoutWrapper>
    );
};
