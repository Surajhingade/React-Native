// import libraries to create component
import React from 'react'
import { Text,StyleSheet,View} from 'react-native'
// import { View } from 'react-native-web';
import First from './src/components/First';
import FirstChallange from './src/components/FirstChallange';

// Create component that return some jsx and simple function

const App = ()=>{
  return(
    <>
    <View style={style.app}>
    <Text style={style.textStyle}>Hello suraj bhau  </Text>
    <First/>
    <FirstChallange />
    </View>
    </>
  )
};

// create a stylesheet to style the component

const style = StyleSheet.create({
  textStyle : {
       color:"red",
       marginTop:100,
       marginLeft:50
       
  },
  app : {
      marginLeft:100,
       

  },
});

// export the file , so that we can use it anywhere

export default App;
