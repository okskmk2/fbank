import React, { Component } from 'react'
import adventure from './../pics/adventure.jpg'

export class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={adventure} alt="adventure"/>
            <div>
                fbank 지금 개방 이벤트 진행합니다!<br/>
                첫 100고객님께 에어팟 공짜로 드립니다!<br/>
                이 기회를 절대 놓치지마세요!
            </div>
            </React.Fragment>
        )
    }
}

export default Landing
