// import logo from './logo.svg';
import './App.css';
import TeamLead from './components/teamLead/teamLead'
// import Details from './components/Details/Details';
import Artist from './components/Artist/Artist';
import Footer from './components/Footer/Footer';
import Faq from './components/FAQ/Faq';
import Founder from './components/Founder/Founder';
import Legend from './components/Legend/Legend';
import MainImage from './components/MainImage/MainImage';
// import Section from './components/Section/Section';
import TeamLead2 from './components/TeamLead2/TeamLead2';
import Corosel from './components/Corosel/Corosel';
import Roadmap  from './components/Roadmap/Roadmap';
import Header from './components/Header/Header';

function App() {
  return (
      <>
      <Header />
      {/* <Section /> */}
      <MainImage />
      
      <Legend />
      <Roadmap />
      <Corosel />
      <Founder />
      <TeamLead2 />
      <Artist />
    
      <TeamLead />
      {/* <Details /> */}
      <Faq />
      <Footer />
      </>
  );
}

export default App;
