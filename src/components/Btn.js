import React from 'react'
import { View,Button ,Text,Alert,StyleSheet} from 'react-native'

const Btn = () => {
  return (
    <View>
    <Text style={styles.title}>
      The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
    </Text>
    <Button
      title="Press me"
      onPress={() => Alert.alert('We have clicked the btn')}
    />
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

export default Btn