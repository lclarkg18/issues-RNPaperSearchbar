import React from 'react';
import {SafeAreaView} from 'react-native';
import {Searchbar} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Searchbar
        // style={{
        //   shadowColor: '#010A0A',
        //   shadowOffset: {width: 0, height: 0},
        //   shadowOpacity: 0.1,
        //   shadowRadius: 4,
        //   backgroundColor: 'white',
        // }}
        value={'Test'}
        // elevation={0}
      />
    </SafeAreaView>
  );
}

export default App;
