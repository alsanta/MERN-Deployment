import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ShowPets from './components/ShowPets';
import AddPet from './components/AddPet';
import EditPet from './components/EditPet';
import SinglePet from './components/SinglePet';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="main pt-3">
            <h1>Pet Shelter</h1>
            <Link to="/new">Add a pet to the shelter</Link>
          </div>
          <div className="main mt-3">
            <h3>These pets are looking for a good home</h3>
          </div>
          <ShowPets></ShowPets>
        </Route>
        <Route exact path="/new">
          <AddPet></AddPet>
        </Route>
        <Route exact path="/edit/:id">
          <EditPet></EditPet>
        </Route>
        <Route exact path="/pet/:id">
          <SinglePet></SinglePet>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
