import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route } from 'react-router-dom';
import { Main, MyPage, PinList, RoomList } from 'pages';

class App extends Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>ChopChop</title>
                </Helmet>
                <Route exact path="/" component={Main} />
                <Route path="/pins" component={PinList} />
                <Route path="/rooms" component={RoomList} />
                <Route path="/mypage" component={MyPage} />
            </div>
        );
    }
}

export default App;