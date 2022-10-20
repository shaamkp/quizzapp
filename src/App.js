import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./component/routes/router/MainRouter";
import allReducers from "./component/context/reducers";

function App() {
    const myStore = createStore(allReducers);
    return (
        <>
            <Provider store={myStore}>
                <BrowserRouter>
                    <MainRouter />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
