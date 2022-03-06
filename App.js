// import libraries to create component
import React from 'react'
import { Text,StyleSheet,View,Image} from 'react-native'
import Btn from './src/components/Btn';
import MultipleBoxInOneElement from './src/components/MultipleBoxInOneElement';
import SampleCard from './src/components/SampleCard';
import Touchable from './src/components/Touchable';
 

// Create component that return some jsx and simple function

const App = ()=>{
  return(
    
    <View style={style.app}>
      {/* button component */}
  {/* <Btn /> */}
  {/* touchableOpacity  */}
{/* <Touchable TouchTitle = "click here to join instagram page" /> */}
{/* Simple Card create */}
{/* <SampleCard /> */}

{/* MultipleBoxInOneElement component  */}
<MultipleBoxInOneElement />
   
    </View>
    
  )
};

// create a stylesheet to style the component

const style = StyleSheet.create({
  textStyle : {
       color:"blue",
       marginTop:100,
       marginLeft:50
       
  },
  app : {
      margin:50
  
  } 
   
});

// export the file , so that we can use it anywhere

export default App;
