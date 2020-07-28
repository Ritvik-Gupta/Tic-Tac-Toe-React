import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import GamePage from './GamePage';
import LeaderBoard from './LeaderBoard';

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/game/:size' exact component={GamePage} />
					<Route path='/leaderboard' exact component={LeaderBoard} />
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
