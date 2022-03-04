import React from "react";
import { View, Text, Image, StyleSheet,Button, Linking } from "react-native";

const SampleCard = () => {
  return (
    <View style={style.container}>
      <Text style={style.header} >Netflix Card</Text>
      <View style={style.poster}  >
        <Image
        style={style.imageStyle}
          source={{
            uri: "https://images.unsplash.com/photo-1646357799937-a9fb1c17fd66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
        />
    
      <View style={style.posterInfo} >
          <Text style={style.posterTitle} >All of us Uk</Text>
          <Text style={style.posterText} >I am from umarkhed dist yavatmal now i am leavuing in maharashtra I am from umarkhed dist yavatmal now i am leavuing in maharashtra</Text>

      </View>
      <Button style={style.buttonStyle} title="Watch Now" onPress={()=>{
          Linking.openURL('https://www.youtube.com/watch?v=2nES00KwZuI&list=PLwGdqUZWnOp354xMD8u0hxX-1qmCvfLiY&index=28');
      }} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },
//   complete width of image
  imageStyle:{
    //   width:200,
    //   height:220,
    //   borderRadius:15,
    width:"100%",
    // height:100,
    // height:"undefinede",
    aspectRatio:1
  },
  posterInfo :{
      alignItems:"center",
      marginVertical:10,
  },
  posterTitle : {
      fontSize:20,
      marginBottom:10,
  },
  posterText : {
      color:'#999',
      paddingHorizontal:20,
      marginBottom:10,
  },
  
  buttonStyle :{
      borderWidth:0,
      borderRadius:20
  }
});

export default SampleCard;
