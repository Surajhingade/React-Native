import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native';

const CssPosition = () => {
  return (
<>
    <View style={style.main}>
        <Text style={[style.box1,style.box]} >Box1</Text>
        <Text  style={[style.box2,style.box]} >Box2</Text>
        <Text  style={[style.box3,style.box]} >Box3</Text>
        <Text  style={[style.box4,style.box]} >Box4</Text>
        <Text  style={[style.box5,style.box]} >Box5</Text>
    </View>
</>
  )
}

const style = StyleSheet.create({
    main : {
        width:"95%",
        height:400,
        borderWidth:2,
        alignContent:"center",
        marginLeft:8,
        // flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        position:"relative"

        
        



    },
    box :{
        height:50,
        width:50,
        borderWidth:2,
        textAlign:"center",
        backgroundColor:"rgb(123,36,89)",
        padding:10,
        margin:10,
        
        


    },
    box1 : {
        position:'absolute',
        top:0,
        left:0,
    },
    box2 : {
        position:'absolute',
        top:0,
        right:0,
    },
    box3 : {
        position:'absolute',
        bottom:0,
        left:0,
    },
    box4 : {
        position:'absolute',
        bottom:0,
        right:0,
    },
    box5 : {
        position:'relative',
        // botta
    },
})

export default CssPosition