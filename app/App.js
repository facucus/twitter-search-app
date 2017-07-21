import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from './routes';
import Nav from "components/Nav";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						{ routes.map( ( route, index ) => (
							<Route key={index} {...route} />
						) ) }
						<Route render={() => <p>Not Found</p>}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;
