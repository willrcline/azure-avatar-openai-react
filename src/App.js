import { Avatar } from './components/avatar/Avatar';
import Footer from "./components/Footer"
import Colors from './helper/Colors';
import { createGlobalStyle } from 'styled-components';
import VerticalToggle from './components/VerticalToggle';
import { useState, useEffect } from 'react';
import Me from './components/me/Me'
import RaisedFooter from './components/RaisedFooter';
import Placeholder from './components/avatar/Placeholder';

function App() {
const isMobile = window.innerWidth < 600;
const [page, setPage] = useState((isMobile) ? 1 : 0);


  return (
    <div style={{padding: 0, margin: 0}} onScroll={()=>{console.log("scrolled___")}}>
      <GlobalStyle/>
      <VerticalToggle page={page} setPage={setPage} />
      
      {page === 0 && !isMobile && <Avatar/>}
      {page === 0 && isMobile && <Placeholder/>}
      {page === 1 && <Me/>}
      <Footer/>
      {/* {page === 1 && <RaisedFooter/>} */}
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.offWhite};
    margin: 0;
    padding: 0;
    display: flex;
    flexDirection: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    overflow-y: scroll;
  }
`;


export default App;
