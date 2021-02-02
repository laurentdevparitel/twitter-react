import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './styles/App.css';

// -- Components
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

// -- Views
import HomeView from './views/HomeView';
import NoMatchView from './views/NoMatchView';

function App() {
    return (
        <Router>
            <div className="App">

                <Switch>

                    <Route exact path="/">
                        <ErrorBoundary>
                            <HomeView/>
                        </ErrorBoundary>
                    </Route>

                    <Route path="*">
                        <ErrorBoundary>
                            <NoMatchView/>
                        </ErrorBoundary>
                    </Route>
                    
                </Switch>

            </div>
        </Router>
    );
}

export default App;
