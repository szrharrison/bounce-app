import React from "react";
import { Provider } from "react-redux";
import store from "../../services/redux_store";

function withProvider(ChildComponent) {
  function ReturnComponent(props) {
    return <Provider store={store}>
      <ChildComponent {...props}/>
    </Provider>;
  }

  if (ChildComponent.navigationOptions) {
    ReturnComponent.navigationOptions = ChildComponent.navigationOptions;
  }

  return ReturnComponent;
}

export default withProvider;