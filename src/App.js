import {Fragment, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
// import { Route, Switch } from "react-router-dom";

import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";

//components
import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
// import CurrentSkills from './components/CurrentSkills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';


function App() {

  const [jsonData, setJsonData] = useState("")
  const resumeUrl ="https://drive.google.com/file/d/13vw6nMMYAdftRAe-vfwQMkZxQvGwpXPm/view?usp=sharing";

  useEffect(() => {
    const gitApiUrl = "https://api.github.com/users/primscode";
    const getData = async () => {
      try {
        const response = await axios.get(gitApiUrl);
        setJsonData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData()
  }, []); 

  return (
    <Fragment>
          <ThemeProvider theme={theme}>
            <NavBar primaData={jsonData} />
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home primaData={jsonData} resume={resumeUrl} />} />
                <Route exact path="/about-me" element={<AboutMe primaData={jsonData} resume={resumeUrl} />} />
                {/* <Route exact path="/skills" element={<CurrentSkills />} /> */}
                <Route exact path="/projects" element={<Projects resume={resumeUrl} />} />
                <Route exact path="/contact-me" element={<ContactForm />} />
              </Routes>
            </BrowserRouter>
         </ThemeProvider>
    </Fragment>

  );
}

export default App;
