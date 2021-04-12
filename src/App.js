
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <div className="py-2">
            <Switch>
              <Route path='/' exact component={Contact} />
              <Route path='/contact/add' exact component={AddContact} />
              <Route path='/contact/edit/:id' exact component={EditContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
