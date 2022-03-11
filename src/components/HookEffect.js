import React,{useState,useEffect} from 'react'
import {View,Text,FlatList} from 'react-native';
 

const HookEffect = () => {

const url = "http://localhost:5000/api/notes";

const [first, setfirst] = useState([]);

useEffect( async() => {
  try{

    const result=  await fetch(url);
    const data = await result.json();
    console.log(data);
    setfirst(data);
    console.log(first);  
  }catch(e){
    console.log(e);
  }


}, [ ])


  return (
    <View>
        <Text>Hello from hook</Text>
        <FlatList data={first} renderItemd={({item})=>{
          <>
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
          </>
        }} />
    </View>
  )
}

export default HookEffect