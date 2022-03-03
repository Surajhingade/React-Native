import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const FirstChallange = () => {
    const university = "santa gadge baba amravati university";

    const myElement = <Text>welcome to suraj hingade suraj hingade ta umarkhed dist yavatmal</Text>
  return (
     <View>
         <Text style={style.textOne}>Hello this is suraj hingade</Text>
         <Text style={style.textTwo}>From national university {university}</Text>
         {myElement}

     </View>
  )
};

//  create stylesheet
const style = StyleSheet.create({
    textOne : {
        color:"red",
        fontWeight:"bold",
        fontSize:30
    },
    textTwo:{
        color:"black",
        fontWeight:"bold",
        fontSize:30
    },
})

export default FirstChallange;