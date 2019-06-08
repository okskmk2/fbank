import React, { Component } from 'react'

export class HeaderEN extends Component {
    render() {
        return (
            <div>
                <h1 style={hStyle}>fbank</h1>
                <h4>
                    <table>
                        <tr style={mStyle}>
                            <td>Loan</td>
                            <td>Deposit</td>
                            <td>Account</td>
                        </tr>
                    </table>
                </h4>
            </div>
        )
    }
}

const mStyle={
    background: '#f23d01',
}

const hStyle={
    background: '#f4f4f4',
}

export default HeaderEN
