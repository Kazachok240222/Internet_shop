import Header from './components/Header/Header';
import Welcome from './components/Main/Welcome';
import Katalog from './components/Main/Katalog';
import Why from './components/Main/WhyUs';
import Aktsii from './components/Main/Aktsii';
import Otsivi from './components/Main/Otsivi'
import Voprosi from './components/Main/Voprosi'
import Sotrud from './components/Main/Sotrudnichestvo'
import Priglosh from './components/Main/Priglashenie'
import Bottom from './components/Main/Bottom'
import Vhod from './components/Need/Vhod'
import Okno from './components/Need/Okno'
import Reg from './components/Need/Registration'
import Account from './components/Need/Account'
import Chat from './components/Need/Chat'

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Why />
      <Aktsii />
      <Otsivi />
      <Voprosi />
      <Sotrud />
      <Priglosh />
      <Bottom /> 
      {/* <Vhod />
      <Okno />
      <Reg />
      <Account />
      <Katalog />
      <Chat /> */}
    </div>
  );
}

export default App;
