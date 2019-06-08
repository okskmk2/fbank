import React, { Component } from 'react'

export class HeaderKR extends Component {
    render() {
        return (
            <div>
                <table style={hStyle}>
                    <tr>
                        <td valign="bottom">
                            <h1>fbank</h1>
                        </td>
                        <td valign="bottom">
                            <input type="text"></input>
                        </td>
                        <td valign="bottom">
                            <button style={logStyle}>검색</button>
                        </td>     
                        <td valign="bottom">
                            <button style={logStyle}>로그인</button>
                        </td>                       
                    </tr>
                </table>
                
                    <table style={mStyle} cellspacing="10px">
                        <tr>
                            <td>대출</td>
                            <td>예금</td>
                            <td>계정</td>
                        </tr>
                    </table>
            </div>
        )
    }
}

const mStyle={
    cursor: 'pointer',
    fontWeight: 'bold',
    // margin: 'auto',
    // width: '25%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
}

const hStyle={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
}

const logStyle={
    width: '50px',
    height: '40px',
}
export default HeaderKR
