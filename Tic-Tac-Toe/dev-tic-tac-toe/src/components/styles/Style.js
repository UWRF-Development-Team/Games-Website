const Html =  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const Body = {
    backgroundSize: "cover",
    fontFamily: "\"Bodoni MT\", serif",
    textAlign: "center",
    marginTop: "150px",
        /*width: "1000px",
    height: "1500px",*/
    width: "100vw", /*Using viewport ensures the rendering is dynamic*/
    height: "100vh",

    flexWrap: "wrap",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "center",
    color: "cornsilk"
};

const H1 = {
    fontSize: "80px"
};

const H2 = {
    fontSize: "60px"
};

const H3 = {
    fontSize: "40px"
};

const H4 = {
    fontSize: "30px"
};

const Header = {
    marginTop: "20%",
    display:"inline-block",
    justifyContent: "center"
};

const BodyTop = {
    marginBottom: "3%"
};

const TicTacToeTitle = {
    margin: "0",
    padding: "0",
    position: "relative",
    display: "flex",
    letterSpacing: "10px",
    justifyContent: "center",
    textAlign: "center"
};

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
};


const ButtonActive = {
    boxShadow: "inset 4px 4px 15px #000"
};

const StartButton = {
    width: "22vw"
};


const Title = {
    whiteSpace : "nowrap"
};

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
};



const Style =  {
    WebPage: WebPage,
    
    TicTacToeTitle: TicTacToeTitle,
    Button: Button,
    ButtonActive: ButtonActive,
    StartButton: StartButton,
    
};

export  {Style}; //should only have to make one export
export {Html};
export {Body};
export {H1};
export {H2};
export {H3};
export {H4};
export {Header};
export {BodyTop};
export {TicTacToeTitle};
export {Button};
export {ButtonActive};
export {StartButton};
export {Title};
export {WebPage};

