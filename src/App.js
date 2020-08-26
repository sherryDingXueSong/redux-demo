import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./reducers";

import Routers from "./routers";

function App() {
  return (
    // 必须用provider组件包裹住这样上下文才可以拿到store中的值
    <Provider store={store}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
