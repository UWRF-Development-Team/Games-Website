
const Html =  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const Body = {
    backgroundImage: "url(\"images/sky.jpg\")",
    backgroundSize: "cover",
    fontFamily: "\"Bodoni MT\", serif",
    textAlign: "center",
    width: "1000px",
    height: "1500px",
    flexWrap: "wrap",
    color: "cornsilk"
}

const H1 = {
    fontSize: "80px"
}
const H2 = {
    fontSize: "60px"
}
const H3 = {
    fontSize: "40px"
}
const H4 = {
    fontSize: "30px"
}
const Header = {
    marginTop: "20%",
    display:"inline-block",
    justifyContent: "center"
}
const BodyTop = {
    marginBottom: "3%"
}
const TicTacToeTitle = {
    margin: "0",
    padding: "0",
    letterSpacing: "10px"
}
const Button = {
    marginTop: "2%",
    background: "red",
    color: "black",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    fontFamily: "\"Oswald\", sans-serif",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px #000"
}
const Announcement = {
    background: "none",
    color: "#1a1818",
    border: "none",
    padding: "0"
}
const AnnouncementHover = {
    cursor: "pointer",
    textDecoration: "underline",
    transition: "color 250ms ease 50ms",
    filter: "brightness(150%)",
    boxShadow: "15px 15px 15px #000"
}
const ButtonActive = {
    boxShadow: "inset 4px 4px 15px #000"
}
const BoardImg = {
    border: "darkred 15px solid",
    borderRadius: "50px",
    webkitUserDrag: "none",
    backgroundImage: "url(\"images/DT Logo 5.png\")"
}
const Falcon = {
    width: "40%",
    position: "absolute",
    opacity: "25%",
    zIndex: "0",
    marginTop: "490px",
    marginLeft: "-350px",
    webkitUserDrag: "none"
}
const StartButton = {
    width: "22vw"
}
const FalconTwo = {
    width: "56px",
    display: "flex",
    borderRadius: "20%",
    marginTop: "10px",
    marginLeft: "5px"
}
const BoardContainer = {
    width: "600px",
    height: "600px",
    alignContent: "center",
    zIndex: "1",
    display: "flex",
    justifyItems: "center",
    position: "absolute",
    marginLeft: "175px",
    marginTop: "-660px"
}
const BoardContainerHover = {
    cursor: "pointer"
}
const RedX = {
    width: "75%",
    zIndex: "1"
}
const Row1Row2Row3 = {
    display: "inline-flex",
    width: "25%",
    padding: "5px 10px"
}
const XOneXTwoXThreeXFourXFiveXFiveXSixXSevenXEightXNine = {
    opacity: "0"
}
const OneTwoThreeFourFiveSixSevenEightNine = {
    zIndex: "5",
    width: "200px",
    height: "200px",
    opacity: "0.001",
    webkitUserDrag: "none"
}

const Nav = {
    backgroundColor: "#1a1818",
    margin: "0",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    right: "0",
    top: "0",
    height: "75px",
    width: "100%",
    color: "cornsilk",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "10px 5px 5px #1a1818"
};
const Ul = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    display:"flex"
};
const NavUlLiNavItems = {
    marginRight: "300px",
    marginLeft: "400px",
    marginTop: "15px"
};
const LiNavItemsImgFalconTwo = {
    width: "90px",
    height: "90px"
}
const NavItemsHover = {
    color: "red"
}
const Title = {
    whiteSpace : "nowrap"
}

const WebPage = {
    Html: Html,
    Body: Body,
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    Header: Header,
    BodyTop: BodyTop,
    Title: Title
}

const Style = {
    WebPage: WebPage,

    TicTacToeTitle: TicTacToeTitle,
    Button: Button,
    ButtonActive: ButtonActive,
    StartButton: StartButton,

    Announcement: Announcement,
    AnnouncementHover: AnnouncementHover,

    BoardImg: BoardImg,
    Falcon: Falcon,
    FalconTwo: FalconTwo,
    BoardContainer: BoardContainer,
    BoardContainerHover: BoardContainerHover,
    RedX: RedX,
    Row1Row2Row3: Row1Row2Row3,
    XOneXTwoXThreeXFourXFiveXFiveXSixXSevenXEightXNine: XOneXTwoXThreeXFourXFiveXFiveXSixXSevenXEightXNine,
    OneTwoThreeFourFiveSixSevenEightNine: OneTwoThreeFourFiveSixSevenEightNine,

    Nav: Nav,
    Ul: Ul,
    NavUlLiNavItems: NavUlLiNavItems,
    LiNavItemsImgFalconTwo: LiNavItemsImgFalconTwo,
    NavItemsHover: NavItemsHover
}

export default {Style}; //should only have to make one export
// export {Html};
// export {Body};
// export {H1};
// export {H2};
// export {H3};
// export {H4};
// export {Header};
// export {BodyTop};
// export {TicTacToeTitle};
// export {Button};
// export {Announcement};
// export {AnnouncementHover};
// export {ButtonActive};
// export {BoardImg};
// export {Falcon};
// export {StartButton};
// export {FalconTwo};
// export {BoardContainer};
// export {BoardContainerHover};
// export {RedX};
// export {Row1Row2Row3};
// export {XOneXTwoXThreeXFourXFiveXFiveXSixXSevenXEightXNine};
// export {OneTwoThreeFourFiveSixSevenEightNine};
// export {Nav};
// export {Ul};
// export {NavUlLiNavItems};
// export {LiNavItemsImgFalconTwo};
// export {NavItemsHover};
// export {Title};
