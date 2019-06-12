import React, { Component } from 'react'
import adventure from '../pics/adventure.jpg'

export class LandingKR extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={cropStyle}>
                {/*<img style={iStyle} src={adventure} alt="adventure"/>*/}
                </div>
            <div>
                fbank 지금 개방 이벤트 진행합니다!<br/>
                첫 100고객님께 에어팟 공짜로 드립니다!<br/>
                이 기회를 절대 놓치지마세요!
            </div>

            </React.Fragment>
        )
    }
}




const cropStyle={
    // height: `${adventure.height}px`,
    height: '4000px',
    // overflow: 'hidden',
    // position: 'absolute',
    // top: '100px',
    width: '100%',
    backgroundImage: `url(${adventure})`,

};
const iStyle={
    // marginTop: '-400px',
    zIndex: '-99',
};

export default LandingKR
