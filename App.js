import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import DetailRow from './detail-row';
import DetailList from './flat-list';

export default function App() {

  const details1 = {
    circle: {
      color: 'yellow',
      imageSource: require('./assets/icon.png'), 
    },

    section1: {
      text: 'text 1',
      textColor: 'black',
      bgColor: 'red',
    },

    section2: {
      text: 'text 2',
      textColor: 'white',
      bgColor: 'black',
    },

    section3: {
      text: 'text 3',
      textColor: 'white',
      bgColor: 'orange',
    }
  }
  const details2 = {
    circle: {
      color: 'yellow',
      imageSource: require('./assets/icon.png'), 
    },

    section1: {
      text: 'text 4',
      textColor: 'black',
      bgColor: 'red',
    },

    section2: {
      text: 'text 2',
      textColor: 'white',
      bgColor: 'black',
    },

    section3: {
      text: 'text 3',
      textColor: 'white',
      bgColor: 'orange',
    }
  }
  const details3 = {
    circle: {
      color: 'yellow',
      imageSource: require('./assets/icon.png'), 
    },

    section1: {
      text: 'text 7',
      textColor: 'black',
      bgColor: 'red',
    },

    section2: {
      text: 'text 2',
      textColor: 'white',
      bgColor: 'black',
    },

    section3: {
      text: 'text 3',
      textColor: 'white',
      bgColor: 'orange',
    }
  }
  const details4 = {
    circle: {
      color: 'yellow',
      imageSource: require('./assets/icon.png'), 
    },

    section1: {
      text: 'text 7',
      textColor: 'black',
      bgColor: 'red',
    },

    section2: {
      text: 'text 2',
      textColor: 'white',
      bgColor: 'black',
    },

    section3: {
      text: 'text 3',
      textColor: 'white',
      bgColor: 'orange',
    }
  }

  const Data = [{id: 1, details: details1}, {id: 2, details: details2}, {id: 3, details: details3}, {id: 4, details: details3}]

  return (
    <View style={styles.container}>

      <DetailList props = {Data}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
