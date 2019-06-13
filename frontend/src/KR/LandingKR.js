import React, { Component } from 'react'
import adventure from '../pics/adventure.jpg'

export class LandingKR extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={cropStyle}>
                {/*<img style={iStyle} src={adventure} alt="adventure"/>*/}
                {/*fbank 지금 개방 <br/>*/}
                {/*    이벤트 진행합니다!<br/><br/>*/}
                {/*첫 100고객님께 <br/>*/}
                {/*    에어팟 공짜로 드립니다!<br/><br/>*/}
                {/*이 기회를 절대 놓치지마세요!*/}
                </div>
            <div>

            </div>

            </React.Fragment>
        )
    }
}




const cropStyle={
    // height: `${adventure.height}px`,
    height: '2500px',
    // overflow: 'hidden',
    // position: 'absolute',
    // top: '-900px',
    width: '100%',
    backgroundImage: `url(${adventure})`,
    fontSize: 'calc(20px + 4vmin)',
    color: 'black',
    fontWeight: 'bold',

};
const iStyle={
    // marginTop: '-400px',
    zIndex: '-99',
    width: '100%',

};

export default LandingKR
