import React, { Component } from 'react'
import LandingKR from "../KR/LandingKR";
import LandingEN from "../EN/LandingEN";
import LoanKR from '../KR/LoanKR';
import LoanEN from '../EN/LoanEN';
import AccountKR from '../KR/AccountKR';
import AccountEN from '../EN/AccountEN';
import DepositKR from '../KR/DepositKR';
import DepositEN from '../EN/DepositEN';
import { createPortal } from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import adventure from '../pics/adventure.jpg'

export class HeaderKR extends Component {
    constructor(props){
        super(props);
        this.state={
          bodypage: 'landingKR',
          loggedin: false,
          username: '',
            scrolled: false,
        };
        this.handleClick=this.handleClick.bind(this);
    }



    // handleClick(val){
    //     this.setState({
    //         bodypage: bpage.val,
    //     })
    // }

    handleClick(){
        // this.setState({
        //     bodypage: 'loanKR',
        // })
    }





    render() {

        return (<Router>
            <Route path="/" render={props=>(
                <React.Fragment>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                      <div style={heading1}>
                        <table style={hStyle}>
                            <tr>
                                <td valign="bottom">
                                    <h1><Link to="/" style={hStyle}>fbank</Link></h1>
                                </td>
                                <td valign="bottom">
                                    <input type="text"></input>
                                </td>
                                <td valign="bottom">
                                    <button style={magStyle}><i className="fa fa-search"/></button>
                                </td>
                            </tr>
                        </table>

                        <div className='dropdown'>
                        <table style={mStyle} cellSpacing="10px">
                            <tr>
                                <td className='menuTD'>
                                    <Link to="/KR/loan" className="menuLoanKR">대출</Link>
                                </td>
                                <td className='menuTD'>
                                    <Link to="/KR/deposit" className="menuDepositKR">예금</Link>
                                </td>
                                <td className='menuTD'>
                                    <Link to="/KR/account" className="menuAccountKR">계정</Link>
                                </td>
                            </tr>
                        </table>
                        <table width='100%' className="dropdownMenu">
                            <tr>
                                <Link to="/KR/loan">대출</Link>
                            </tr>
                        </table>
                        </div>
                    </div>
                </React.Fragment>
            )}/>



            <Route exact path="/" component={LandingKR}/>
            <Route path="/EN/landing" component={LandingEN}/>
            <Route path="/KR/loan" component={LoanKR}/>
            <Route path="/EN/loan" component={LoanEN}/>
            <Route path="/KR/deposit" component={DepositKR}/>
            <Route path="/EN/deposit" component={DepositEN}/>
            <Route path="/KR/account" component={AccountKR}/>
            <Route path="/EN/account" component={AccountEN}/>

            {/*<div>*/}



            {/*    <div className="bPage">*/}
            {/*        {bpage[this.state.bodypage]}*/}
            {/*    </div>*/}
            {/*</div>*/}

        </Router>)

    }
}

const magStyle={
    height: '40px',
    width: '40px',
    border: 'none',
    marginLeft: '-55px',
    marginBottom: '16px',
    fontSize: '17px',
    cursor: 'pointer',


}

const heading1={
    width: '100%',
    zIndex: '1',
    position: 'sticky',
    top: '0',
}



const mStyle={
    fontWeight: 'bold',
    backgroundColor: '#282b31',
    color: 'white',
    // margin: 'auto',
    // width: '25%',
    fontSize: 'calc(10px + 2vmin)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',

}



const hStyle={
    backgroundColor: '#282b31',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textDecoration: 'none',

}

const logStyle={
    width: '50px',
    height: '40px',
}

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



export default HeaderKR
