import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment-timezone'

export default function App() {

  const [time,setTime] = React.useState("")

    function getCurrenTime(){
      return moment.tz("Japan").format("hh:mm")
    }

  // function getCurrenTime() {
  //   const d = new Date();
  //   const japanDate = new Date(d.toLocaleString('en-US',{ timeZone: 'JST' }));
  //   const hour = japanDate.getHours().toString().padStart(2, '0');
  //   const minutes = japanDate.getMinutes().toString().padStart(2, '0');
  //   const seconds = japanDate.getSeconds().toString().padStart(2, '0');
  //   return `${hour}:${minutes}`
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {time}
      </Text>
      <Button
          onPress={ ()=>{setTime(getCurrenTime())}}
          title="Get Current Time"
          color="#841584"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
