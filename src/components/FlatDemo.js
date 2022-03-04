import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const FlatDemo = () => {
  const names = [
    {
        index:"1",
      name: "suraj",
    },
    {
        index:"2",
      name: "pavan",
    },
    {
        index:"3",
      name: "shubham",
    },
    {
        index:"4",
      name: "mangesh",
    },
    {
        index:"5",
      name: "shubham",
    },
    {
        index:"6",
      name: "shubham",
    },
    {
        index:"10",
      name: "shubham",
    },
    {
        index:"7",
      name: "shubham",
    },
    {
        index:"8",
      name: "shubham",
    },
    { 
        index:"9",
      name: "shubham",
    },
  ];
  return (
    <View>
      <FlatList
        style={style.listStyle}
        data={names}
        // horizontal
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(key)=>{
            return key.index
        }}

        
        renderItem={(element) => {
          return <Text style={style.flatList}>{element.item.name}</Text>;
        }}
      />
    </View>
  );
};

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
  },
});

export default FlatDemo;
