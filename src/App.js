import { Avatar } from './components/Avatar';
import Footer from "./components/Footer"
import Colors from './helper/Colors';
import { createGlobalStyle } from 'styled-components';
import VerticalToggle from './components/VerticalToggle';
import { useState, useEffect } from 'react';

function App() {
const [page, setPage] = useState(0);


  return (
    <div styles={{overflowY: 'auto'}} onScroll={()=>{console.log("scrolled___")}}>
      <GlobalStyle/>
      <VerticalToggle page={page} setPage={setPage} />
      <Avatar/>
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
