import './App.scss';
import React from 'react';
import Landing from './components/landing/Landing.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './Assets/pilot/PilotCommandCondensed-vmepL.woff'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main.js'
// import Footer from './components/landing/footer/Footer.js';
// import Navbar from './components/landing/header/Navbar.js';
// import LiquidtyP from './components/Liquidty/Liquidty';
// import SwapP from './components/Swap/Swap';
// import StakingP from './components/Staking/Staking';
// import EditionP from './components/Edition/Edition';
// import ComingP from './components/Comingsoon/Coming';
import StakingC from './components/Comingsoon/staking';
import SwapC from './components/Comingsoon/swap';
import LiquidityC from './components/Comingsoon/Liquidity';
import MarketC from './components/Comingsoon/Marketplace';
function App() {
  return (
    <>
        <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route exact path='/' component={Landing} />
          {/* <Route exact path='/liquidty' component={LiquidtyP} />
          <Route exact path='/Swap' component={SwapP} />
          <Route exact path='/Staking' component={StakingP} />
          <Route exact path='/Edition' component={EditionP} /> */}
          <Route exact path='/liquidty' component={LiquidityC} />
          <Route exact path='/Swap' component={SwapC} />
          <Route exact path='/Staking' component={StakingC} />
          <Route exact path='/Edition' component={StakingC} />
          <Route exact path='/Marketplace' component={MarketC} />

          {/* <Route exact path='/Coming' component={ComingP} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
