import { Avatar } from './components/avatar/Avatar';
import Footer from "./components/Footer"
import Colors from './helper/Colors';
import { createGlobalStyle } from 'styled-components';
import VerticalToggle from './components/VerticalToggle';
import { useState, useEffect } from 'react';
import Me from './components/me/Me'
import RaisedFooter from './components/RaisedFooter';

function App() {
const [page, setPage] = useState(0);


  return (
    <div styles={{overflowY: 'auto'}} onScroll={()=>{console.log("scrolled___")}}>
      <GlobalStyle/>
      <VerticalToggle page={page} setPage={setPage} />
      {page === 0 && <Avatar/>}
      {page === 1 && <Me/>}
      <Footer/>
      {/* {page === 1 && <RaisedFooter/>} */}
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.offWhite};
  }
`;


export default App;
