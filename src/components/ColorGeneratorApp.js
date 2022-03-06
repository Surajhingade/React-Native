import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from "react-native";
 

const ColorGeneratorApp = () => {

const [newColor, setNewColor] = useState([]);

   const handleRandomColor = () =>{
       const red = Math.floor(Math.random()*256);
    //    console.log(red);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`
    
   }
    
//    console.log(newColor);
  return (
      <>
 <View>

    <Text style={style.text}>ColorGeneratorApp</Text>
    <TouchableOpacity 
    onPress={()=>{
        // handleRandomColor();
        setNewColor([...newColor, handleRandomColor()])
        // alert("rgb"+handleRandomColor())
    }}
    
    >
        
        <Text style={style.touch} >Generate Color</Text>
    </TouchableOpacity>
 </View>

 <FlatList data={newColor} renderItem={({item})=>{
     return (
        <View>
        <Text
        style={{
            height:100,
            width:300,
            backgroundColor:item,
            // alignContent:"center"
            borderRadius:10,
            margin:30,
            textAlign:"center",
            
        }}
        >{item}</Text>
    
     </View>
     )
 }} />


        
 
 </>
 
  )
}

const style = StyleSheet.create({
   text : {
       color:"black",
       fontSize:30,
       textAlign:'center'
   },
   touch :{
       textAlign:'center',
       margin:15,
       borderWidth:3,
       padding:15,
       fontSize:30,
       borderRadius:10,
       backgroundColor:"black",
       color:"white"
       
   }
})

export default ColorGeneratorApp