import React from 'react'
import {View,StyleSheet,Images} from 'react-native'


const Imagess =()=>{
    return(
        <View style={styles.container} >
              <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://media.istockphoto.com/photos/family-spending-funny-time-together-at-home-picture-id1296165152?b=1&k=20&m=1296165152&s=170667a&w=0&h=2vNKhknnFWP5pRW-fdv_vumb-vGPkYMByrpPlOxYrAM=',
        }}
      />

        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
      },
      container: {
        paddingTop: 50,
      },
})

export default Imagess;