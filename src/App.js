import { ThemeProvider } from 'styled-components';
import './App.css';
import { Wrapper, GlobalStyles, dark } from './Styles';
import { Home } from './Components';
import { Route, Routes } from 'react-router-dom';
import { ProjectsViews } from './Pages';
import { useEffect, useState } from 'react';
import Cursor from './Components/Cursor';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position])

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Wrapper>
          <Cursor x={position.x} y={position.y} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectsViews />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
