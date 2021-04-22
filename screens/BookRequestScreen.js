import React from 'react';
import {View , Text , TouchableOpacity , TextInput} from 'react-native';

class BookRequestScreen extends React.Component{
  render()
  {
      return(
          <View>
              <Text>Book Request Screen</Text>
              <View>
                  <TextInput></TextInput>
              </View>
          </View>
      )
  }
}

export default BookRequestScreen;