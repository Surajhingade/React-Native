import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native';
const ScrollingEffect = () => {

    const Data = [{
        name:"suraj hingade",
        index:1,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade2",
        index:9,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade3",
        index:10,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade4",
        index:2,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade5",
        index:3,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade6",
        index:4,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade7",
        index:5,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade",
        index:6,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade8",
        index:7,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    },{
        name:"suraj hingade9",
        index:8,
        age:20,
        address:"at post mulawa",
        education: "BCA"
    } ];

  return (
    <>

<View>
      <FlatList
        // style={style.flatList}
        data={Data}
        horizontal
        // numColumns={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(key)=>{
            return key.index
        }}

        
        renderItem={(element) => {
            
          return (
               <>
               <View style={style.main}>
                    <Text style={style.listStyle}>Index :{element.item.index}</Text>
                    <Text style={style.listStyle} >Name :{element.item.name}</Text>
                    <Text style={style.listStyle} >Age :{element.item.age}</Text>
                    <Text style={style.listStyle} >Address :{element.item.address}</Text>
                    <Text style={style.listStyle} >Education :{element.item.education}</Text>
                    </View>
                    </>
          )
        }}
      />
    </View>
    
    </>
  )
}

const style = StyleSheet.create({
    flatList: {
      fontSize: 30,
      borderBottomColor: "red",
      color: "red",
      padding: 10,
      borderWidth: 0.5,
      borderStyle: "solid",
      margin: 10,
    },
    listStyle: {
      textAlign: "center",
      fontSize:15,
    },
    main :{
        padding:50,
        borderWidth:3,
        margin:25,
        textAlign:"center",
        backgroundColor:"rgb(155,106,198)",
        fontSize:25,
    },
  });

export default ScrollingEffect