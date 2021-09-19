import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import moment from 'moment-timezone';

export default function App() {

  const [time,setTime] = React.useState("00:00:00")
  const [count, setCount] = React.useState(1)

  React.useEffect(()=>{

      const intervalId = setInterval(()=>{
      setTime(moment().tz("Japan").format("hh:mm:ss"))
    });
    return ()=>{
      clearInterval(intervalId);
    }
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {time}
      </Text>
      <Button
          onPress={()=>{setCount(count + 1)}}
          title={count.toString()}
          color="#841584"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  //   padding: 8,
  // },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
