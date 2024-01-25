import { Avatar } from './components/avatar/Avatar';
import Footer from "./components/Footer"
import Colors from './helper/Colors';
import { createGlobalStyle } from 'styled-components';
import VerticalToggle from './components/VerticalToggle';
import { useState, useEffect } from 'react';
import Me from './components/me/Me'

function App() {
const [page, setPage] = useState(1);


  return (
    <div styles={{overflowY: 'auto'}} onScroll={()=>{console.log("scrolled___")}}>
      <GlobalStyle/>
      <VerticalToggle page={page} setPage={setPage} />
      {page === 0 && <Avatar/>}
      {page === 1 && <Me/>}
      <Footer/>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.offWhite}; /* Your desired color */
    overflowY: 'auto'
  }
`;


export default App;
