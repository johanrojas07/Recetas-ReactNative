// import Expo from 'expo';

// import App from "./Containers/App";



// Expo.registerRootComponent(App);

import { KeepAwake, registerRootComponent } from 'expo';
import App from "./Containers/App";

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);
