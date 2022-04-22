import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './index.js';
import Landing from './pages/Landing.js';
import Backstory from './pages/Backstory';
import Adventures from './pages/Adventures';
import SkillsProficiencies from './pages/SkillsProficiencies';
import Message from './components/Message'
import Resume from './pages/Resume'
import testPage from './pages/testPage'

export const CastMessageContext = React.createContext({
});

function App() {
  //state and function to populate <Message/> Contact Div.
  const [castMessage, setCastMessage] = useState(false);
  const [visible, setVisible] = useState(false)

  const handleMessageCasting = e => {
    e.preventDefault();
    // console.log('ready to cast');
    setCastMessage(!castMessage);
    setVisible(!visible)
  }

  return (
      <CastMessageContext.Provider value={{ handleMessageCasting, setVisible, setCastMessage }}>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Backstory" component={Backstory} />
          <Route exact path="/Adventures" component={Adventures} />
          <Route exact path="/SkillsProficiencies" component={SkillsProficiencies} />
          <Route exact path="/Test" component={testPage} />
          {castMessage && visible && <Message />}
          <Route exact path="/Resume" component={Resume} />
        </Router>
      </CastMessageContext.Provider>
  );
}

export default App;
