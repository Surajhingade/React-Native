import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Image} from 'react-native'


const Touchable = (props) => {
  return (
      <>
      
        <TouchableOpacity  onPress = {()=>{
                console.log("text is clickable");
            }} style={style.touchable} >
           
           <Image
        style={style.tinyLogo}
        source={{
          uri: 'https://media.istockphoto.com/photos/family-spending-funny-time-together-at-home-picture-id1296165152?b=1&k=20&m=1296165152&s=170667a&w=0&h=2vNKhknnFWP5pRW-fdv_vumb-vGPkYMByrpPlOxYrAM=',
        }}
      />
            <Text>{props.TouchTitle}</Text>
        </TouchableOpacity>

       

      </>
    
    
  )
}

const style = StyleSheet.create({
    touchable : {
        margin:25,
        paddingTop:10
    },
    tinyLogo :{
        width:185,
        height:150,
        alignItems:'center',
    }
})

export default Touchable;