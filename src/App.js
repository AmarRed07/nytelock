import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {
  return (
    // ************************** Particles ***************************
    <>
    <Particles
      params= {{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area:900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 3,
              color: "#6f6f6f"
            }
          }
        }
      }}
     />
     {/* ************************** COMPONENTS ****************************** */}
    <Navbar />
    <Header />
    </>
  )
};

export default App;
