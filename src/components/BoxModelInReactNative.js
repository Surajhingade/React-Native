import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const BoxModelInReactNative = () => {
  return (
    
      <>
        <View style={style.main} >
            <Text style={[style.box1,style.common]} >This is Box one</Text>
            <Text style={[style.box2,style.common]} >This is box two</Text>
            <Text style={[style.box3,style.common]} >This is box three</Text>
        </View>
    </>
    
  )
}

const style = StyleSheet.create({
    main : {
        marginTop:10,
        borderWidth:2,
        backgroundColor:"rgb(36,65,98)",
        shadowColor:"black"
    },
    common : {
        borderWidth : 3,
        padding : 15,
        margin : 20,
        textAlign:'center',
        color :'black',
        backgroundColor:'rgb(150,123,254)'

    },

});

export default BoxModelInReactNative