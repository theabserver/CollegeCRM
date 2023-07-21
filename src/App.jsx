import "./App.css";
import Login from "./Views/Login";
import store from "./Store/store";
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
