import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

const MultipleBoxInOneElement = () => {
  return (
    <>
        <View style={style.main} >
            <Text style={style.box1} >This is Box one</Text>
            <Text style={style.box2} >This is box two</Text>
            <Text style={style.box3} >This is box three</Text>
        </View>
    </>
  )
}

const style = StyleSheet.create({
    main : {
            width:"95%",
            marginTop:100,
            marginHorizontal:10,
            borderWidth:3,
            borderColor:"black",
           

    },
    box1 : {
        backgroundColor:"red",
        borderColor:"blue",
        textAlign:"center",
        color:"white",
        margin:25,
        padding:15,
        borderWidth:3


    },
    box2 : {
        backgroundColor:"blue",
        borderColor:"blue",
        textAlign:"center",
        color:"white",
        margin:25,
        padding:15,
        borderWidth:3
    },
    box3 : {
        backgroundColor:"yellow",
        borderColor:"blue",
        textAlign:"center",
        color:"black",
        margin:25,
        padding:15,
        borderWidth:3
    }
})

export default MultipleBoxInOneElement;