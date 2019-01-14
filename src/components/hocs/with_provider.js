import React from "react";
import { Provider } from "react-redux";
import store from "../../services/redux_store";

function withProvider(ChildComponent) {
  const returnComponent = (props) => <Provider store={store}>
    <ChildComponent {...props}/>
  </Provider>;
  if (ChildComponent.navigationOptions) {
    returnComponent.navigationOptions = ChildComponent.navigationOptions;
  }

  return returnComponent;
}

export default withProvider;