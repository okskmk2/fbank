import React from 'react';
import './App.css';
import HeaderKR from './KR/HeaderKR';
import HeaderEN from './EN/HeaderEN';
import LandingKR from './KR/LandingKR';
import LandingEN from './EN/LandingEN';
import LoanKR from './KR/HeaderKR';
import LoanEN from './EN/HeaderEN';
import AccountKR from './KR/LandingKR';
import AccountEN from './EN/LandingEN';
import DepositKR from './KR/LandingKR';
import DepositEN from './EN/LandingEN';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      langKR: true,
      bodypage: 'landingKR',
      loggedin: false,
      username: '',
    };  
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      langKR: !this.state.langKR,
    })
  }

  render(){
    const lang=this.state.langKR ? 'EN' : 'KR';
    const bpage={ 
      'landingKR': <LandingKR />,
      'landingEN': <LandingEN />,
      'loanKR': <LoanKR />,
      'loanEN': <LoanEN />,
      'depositKR': <DepositKR />,
      'depositEN': <DepositEN />,
      'accountKR': <AccountKR />,
      'accountEN': <AccountEN />,
    }
    return (
      <React.Fragment>

      <div className="App">
        <br/>
        <button className="langStyle" onClick={this.handleClick}>
          {lang}
        </button>

        <header className="App-header">

          {this.state.langKR ? <HeaderKR /> : <HeaderEN />}

        </header>
        
      
        <div className="bPage">
          {bpage[this.state.bodypage]}
        </div>

      </div>
      
      </React.Fragment>
    );
  }


}

export default App;
