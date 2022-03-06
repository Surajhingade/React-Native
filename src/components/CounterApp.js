import React,{useState} from 'react'
import { Text,StyleSheet,Button     } from 'react-native';
 

const CounterApp = () => {

const [counter,setCounter] = useState(0);

const handlePlus = () =>{
    setCounter(counter + 10);
}

const handleSub = ()=>{
    setCounter(counter - 10);
    if(counter == 0){
        setCounter(0);
        alert('It does not value to substract please insert some value')
    }
}

const handleReset = ()=>{
    setCounter(0);
    // alert("value are reset")
}

  return (
    <>
    <Text style={style.heading}>Counter App </Text>
    <Text style={style.text}>{counter}</Text>

    <Button title="+10" onPress={handlePlus} style={[ style.Button1]}  color="black"  />
    <Text style={style.seperater} />
    
    <Button title='Reset' onPress={handleReset } style={[style.Button,style.Button2]} color="red" />
    <Text style={style.seperater} />
    <Button title="-10" onPress={handleSub}  style={[style.Button,style.Button3]} color="green" />
    

  </>
  )
}

const style = StyleSheet.create({
    text :{
        margin:15,
        padding:10,
        // borderWidth:2,
        // alignContent:'center'
        // alignItems:'center'
        textAlign:'center',
        fontSize:50,
    },
    // Button :{
    //         color:"white",
    //         backgroundColor:"black",
    //         marginBottom:10
 
    // },
    Button1:{
        marginBottom:10,
        borderWidth:3,
        color:'black'
    },
    Button2:{

    },
    Button3 :{

    },
    heading :{
        textAlign:'center',
        fontWeight:"bold",
        fontSize:35,
        // textDecorationStyle:"solid"
        marginTop:100


    },
    seperater : {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})

export default CounterApp