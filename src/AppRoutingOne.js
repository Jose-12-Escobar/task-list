import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';


function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >|| HOME |</Link>
          <Link to='/about' >| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/(about|faqs)' component={Aboutpage} />
            {/* 404 - Page No Found */}
            <Route component={Notfoundpage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
