import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from "./src/store/configureStore";
import MainGrid from "./src/components/MainGrid";

// Loading the pre configured Store in ./src/store/configureStore to Wrap the Whole application with one store for state mainpulating
const store = configureStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainGrid/>
      </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});