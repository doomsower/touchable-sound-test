import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.text} onPress={() => this.handlePress('Simple text, sound OFF')}>
          Simple text, sound OFF
        </Text>

        <Text style={styles.text} touchSoundEnabled={true} onPress={() => this.handlePress('Simple text, sound ON')}>
          Simple text, sound ON
        </Text>

        <TouchableOpacity onPress={() => this.handlePress('TouchableOpacity, sound OFF')}>
          <View style={styles.btn}>
            <Text>TouchableOpacity Sound OFF</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity touchSoundEnabled={true} onPress={() => this.handlePress('TouchableOpacity, sound ON')}>
          <View style={styles.btn}>
            <Text>TouchableOpacity Sound ON</Text>
          </View>
        </TouchableOpacity>


        <Text style={styles.text} onPress={() => this.handlePress('Top-level text Sound OFF')}>
          <Text style={styles.nestedText} onPress={() => this.handlePress('Nested text Sound OFF')}>Nested</Text>
          {' text '}
          <Text style={styles.nestedText} onPress={() => this.handlePress('Nested text Sound ON')} touchSoundEnabled={true}> sound </Text>
          {' OFF '}
        </Text>

        <Text touchSoundEnabled={true} style={styles.text} onPress={() => this.handlePress('Top-level text Sound ON')}>
          <Text style={styles.nestedText} onPress={() => this.handlePress('Nested text Sound OFF')}>Nested</Text>
          {' text '}
          <Text style={styles.nestedText} onPress={() => this.handlePress('Nested text Sound ON')} touchSoundEnabled={true}> sound </Text>
          {' OFF '}
        </Text>

      </View>
    );
  }

  handlePress = (text) => {
    Alert.alert('Touch', text);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: 16,
  },
  nestedText: {
    backgroundColor: 'green',
  },
  btn: {
    width: 160,
    height: 80,
    marginBottom: 16,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  }
});