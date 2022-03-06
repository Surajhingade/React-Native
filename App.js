// import libraries to create component
import React from 'react'
import { Text,StyleSheet,View,Image} from 'react-native'
import BoxModelInReactNative from './src/components/BoxModelInReactNative';
import Btn from './src/components/Btn';
import CssPosition from './src/components/CssPosition';
import Flexbox from './src/components/Flexbox';
import MultipleBoxInOneElement from './src/components/MultipleBoxInOneElement';
import SampleCard from './src/components/SampleCard';
import ScrollingEffect from './src/components/ScrollingEffect';
import Touchable from './src/components/Touchable';
 

// Create component that return some jsx and simple function

const App = ()=>{
  return(
    <>
    <View style={style.app}>
      {/* button component */}
  {/* <Btn /> */}
  {/* touchableOpacity  */}
{/* <Touchable TouchTitle = "click here to join instagram page" /> */}
{/* Simple Card create */}
{/* <SampleCard /> */}

{/* MultipleBoxInOneElement component  */}
{/* <MultipleBoxInOneElement /> */}
{/*  box model  */}
{/* <BoxModelInReactNative / > */}
{/* scrolling effect  */}
<ScrollingEffect />
{/* flexbox */}
{/* css position */}
<CssPosition / >
   
{/* <Flexbox /> */}
    </View>
</>
    
  )
};

// create a stylesheet to style the component

const style = StyleSheet.create({
  textStyle : {
       color:"blue",
       marginTop:100,
       marginLeft:50,
       
       
  },

  app : {
      margin:50
  
  } 
   
});

// export the file , so that we can use it anywhere

export default App;
