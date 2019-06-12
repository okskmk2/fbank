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
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
    const log= this.state.loggedin ? this.state.username
        : this.state.langKR ? '로그인' : 'LOG IN';

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
          <div className="topbar">
            <br/>
            <table style={tStyle}>
              <tr>
                <td>
                  <button className="logStyle">
                    {log}
                  </button>

                </td>
                {/*<td>*/}
                {/*  <button className="langStyle" onClick={this.handleClick}>*/}
                {/*    {lang}*/}
                {/*  </button>*/}

                {/*</td>*/}
              </tr>
            </table>
        </div>

          <header style={headStyle}>

            {this.state.langKR ? <HeaderKR /> : <HeaderEN />}

          </header>

        </div>




      
      </React.Fragment>
    );
  }


}

const tStyle={
  width: '100%',
  margin: 'auto',
}

const headStyle={
  // position: 'sticky',
  // top: '0',
}

export default App;
