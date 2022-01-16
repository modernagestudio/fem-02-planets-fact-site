import { styled } from "styles/stitches.config";
import { useState } from "react";
import Image from "next/image";
import PlanetData from "data/data.json";

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
        paddingBottom: "$9",
    },
    "@desktop": {
        paddingBottom: 0,
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
        "&:hover": {
            backgroundColor: "rgba(216, 216, 216, 0.2)",
        },
        "& + *": {
            marginTop: "$2",
        },
        "&::before": {
            content: "'0' counter(my-sec-counter)",
            color: "rgba(255,255,255,0.5)",
        },
    },
    "@desktop": {
        height: 48,
        fontSize: 12,
        letterSpacing: 2.5,
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
                    "&:hover": {
                        background: "var(--accent-color)",
                    },
                    "&::after": {
                        display: "none",
                    },
                },
            },
        },
        planet: {
            0: {
                "--accent-color": "var(--color-mercury)",
            },
            1: {
                "--accent-color": "var(--color-venus)",
            },
            2: {
                "--accent-color": "var(--color-earth)",
            },
            3: {
                "--accent-color": "var(--color-mars)",
            },
            4: {
                "--accent-color": "var(--color-jupiter)",
            },
            5: {
                "--accent-color": "var(--color-saturn)",
            },
            6: {
                "--accent-color": "var(--color-uranus)",
            },
            7: {
                "--accent-color": "var(--color-neptune)",
            },
        },
    },
    defaultVariants: {
        planet: 0,
    },
});

const TabItem = (props: any) => {
    const { label, active, onClick, planet } = props;
    return (
        <StyledTabItem active={active} onClick={onClick} planet={planet}>
            {label}
        </StyledTabItem>
    );
};

TabItem.defaultProps = {
    label: "Tab item",
};

const TextSection = styled("div", {
    gridArea: "textsection",
    textAlign: "center",
    "& h1": {
        fontSize: 48,
        fontWeight: 300,
        textTransform: "uppercase",
        fontFamily: "$antonio",
        marginBottom: "$2",
    },
    "& p": {
        fontSize: 11,
        lineHeight: "22px",
    },
    "@tablet": {
        textAlign: "start",
        "& p": {
            maxWidth: "60ch",
        },
    },
    "@desktop": {
        paddingTop: 128,
        "& h1": {
            fontSize: 80,
        },
        "& p": {
            fontSize: 14,
            lineHeight: "25px",
        },
    },
});

const ImageSection = styled("div", {
    gridArea: "imagesection",
    minHeight: 314,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "& .img-wrapper": {
        position: "absolute",
        transform: "scale(0.39)",
    },
    "& .geology-wrapper": {
        position: "absolute",
        transform: "scale(0.5) translateY(150px)",
    },
    "@tablet": {
        minHeight: 466,
        "& .img-wrapper": {
            transform: "scale(0.63)",
        },
        "& .geology-wrapper": {
            transform: "scale(0.75) translateY(150px)",
        },
    },
    "@desktop": {
        minHeight: 664,
        "& .img-wrapper": {
            transform: "scale(1)",
        },
        "& .geology-wrapper": {
            transform: "scale(1) translateY(170px)",
        },
    },
});

const StyledInfoBoxContainer = styled("div", {
    gridArea: "infoboxes",
    marginTop: "$3",
    marginBottom: "$6",
    "& > * + *": {
        marginTop: "$1",
    },
    "@tablet": {
        display: "flex",
        gap: "$4",
        "& > * + *": {
            marginTop: 0,
        },
    },
    "@desktop": {
        marginTop: "$10",
    },
});
const StyledInfoBoxItem = styled("div", {
    height: "$6",
    border: "1px solid rgba(255,255,255,0.2)",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "$3",
    "& .infobox-label": {
        fontSize: 8,
        fontFamily: "$spartan",
        color: "rgba(255,255,255,0.5)",
        textTransform: "uppercase",
        letterSpacing: 0.75,
        fontWeight: "bold",
    },
    "& .infobox-value": {
        fontSize: 20,
        fontFamily: "$antonio",
        color: "$white",
        textTransform: "uppercase",
        letterSpacing: -0.75,
    },
    "@tablet": {
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        height: 88,
        gap: "$1",
        "& .infobox-value": {
            fontSize: 24,
        },
    },
    "@desktop": {
        height: 128,
        "& .infobox-label": {
            fontSize: 11,
        },
        "& .infobox-value": {
            fontSize: 40,
        },
    },
});

const StyledWikiLink = styled("div", {
    display: "inline-block",
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: "$4",
    "& > a": {
        textDecoration: "underline",
        color: "inherit",
        fontWeight: "bold",

        "&::after": {
            content: "",
            display: "inline-block",
            width: 12,
            height: 12,
            background: "url(/assets/icon-source.svg)",
            marginLeft: 4,
        },
    },
    "@desktop": {
        fontSize: 14,
        marginTop: "$3",
    },
});

const WikiLink = (props: any) => {
    const { href } = props;
    return (
        <StyledWikiLink>
            Source :{" "}
            <a href={href} target="_blank" rel="noreferrer">
                Wikipedia
            </a>
        </StyledWikiLink>
    );
};

export const PlanetInfo = (props: any) => {
    const { planetIndex } = props;
    const [activeTab, updateActiveTab] = useState("overview");
    const currentPlanet = PlanetData[planetIndex];
    const handleClick = (tabName: string) => {
        updateActiveTab(tabName);
    };
    return (
        <LayoutWrapper>
            <TabContainer>
                <TabItem
                    planet={planetIndex}
                    label="Overview"
                    active={activeTab === "overview"}
                    onClick={() => handleClick("overview")}
                />
                <TabItem
                    planet={planetIndex}
                    label="Structure"
                    active={activeTab === "structure"}
                    onClick={() => handleClick("structure")}
                />
                <TabItem
                    planet={planetIndex}
                    label="Surface"
                    active={activeTab === "surface"}
                    onClick={() => handleClick("surface")}
                />
            </TabContainer>

            <ImageSection>
                {activeTab === "overview" && (
                    <div className="img-wrapper">
                        <Image
                            src={currentPlanet.images.planet}
                            alt="planet"
                            width={currentPlanet.images.size}
                            height={currentPlanet.images.size}
                        />
                    </div>
                )}
                {activeTab === "structure" && (
                    <div className="img-wrapper">
                        <Image
                            src={currentPlanet.images.internal}
                            alt="planet"
                            width={currentPlanet.images.size}
                            height={currentPlanet.images.size}
                        />
                    </div>
                )}
                {activeTab === "surface" && (
                    <>
                        <div className="img-wrapper">
                            <Image
                                src={currentPlanet.images.planet}
                                alt="planet"
                                width={currentPlanet.images.size}
                                height={currentPlanet.images.size}
                            />
                        </div>
                        <div className="geology-wrapper">
                            <Image
                                className="img-geology"
                                src={currentPlanet.images.geology}
                                alt="planet"
                                width={163}
                                height={199}
                            />
                        </div>
                    </>
                )}
            </ImageSection>

            <TextSection>
                <h1>{currentPlanet.name}</h1>
                {activeTab === "overview" && (
                    <>
                        <p>{currentPlanet.overview.content}</p>
                        <WikiLink href={currentPlanet.overview.source} />
                    </>
                )}
                {activeTab === "structure" && (
                    <>
                        <p>{currentPlanet.structure.content}</p>
                        <WikiLink href={currentPlanet.structure.source} />
                    </>
                )}
                {activeTab === "surface" && (
                    <>
                        <p>{currentPlanet.geology.content}</p>
                        <WikiLink href={currentPlanet.geology.source} />
                    </>
                )}
            </TextSection>

            <StyledInfoBoxContainer>
                <StyledInfoBoxItem>
                    <div className="infobox-label">Rotation time</div>
                    <div className="infobox-value">
                        {currentPlanet.rotation}
                    </div>
                </StyledInfoBoxItem>
                <StyledInfoBoxItem>
                    <div className="infobox-label">Revolution time</div>
                    <div className="infobox-value">
                        {currentPlanet.revolution}
                    </div>
                </StyledInfoBoxItem>
                <StyledInfoBoxItem>
                    <div className="infobox-label">Radius</div>
                    <div className="infobox-value">{currentPlanet.radius}</div>
                </StyledInfoBoxItem>
                <StyledInfoBoxItem>
                    <div className="infobox-label">Average temp.</div>
                    <div className="infobox-value">
                        {currentPlanet.temperature}
                    </div>
                </StyledInfoBoxItem>
            </StyledInfoBoxContainer>
        </LayoutWrapper>
    );
};

PlanetInfo.defaultProps = {
    planetIndex: 0,
};
