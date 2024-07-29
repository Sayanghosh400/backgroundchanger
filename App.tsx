import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [background, setBackground] = useState('white');
  const [buttonBackground, setButtonBackground] = useState('black');
  const [buttonText, setButtonText] = useState('white');
  const [circle, setCircle] = useState('black');
  const [square, setSquare] = useState('black');

  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let buttonColor = '#';
    let buttonText = '#';
    let circle = '#';
    let square = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      buttonColor += hexRange[Math.floor(Math.random() * 16)];
      buttonText += hexRange[Math.floor(Math.random() * 16)];
      circle += hexRange[Math.floor(Math.random() * 16)];
      square += hexRange[Math.floor(Math.random() * 16)];
    }
    setBackground(color);
    setButtonBackground(buttonColor);
    setButtonText(buttonText);
    setCircle(circle);
    setSquare(square);
  }

  return (
    <>
      <StatusBar backgroundColor={background} />
      <View style={[styles.container, { backgroundColor: background }]}>
        <View style={[styles.circle, { backgroundColor: circle }]} />
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={styles.actionBtn}>
            <Text style={[styles.actionBtnText, { backgroundColor: buttonBackground }, { color: buttonText }]}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.square, { backgroundColor: square }]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    padding: 10,
    borderRadius: 5,
  },
  actionBtnText: {
    padding: 10,
    borderRadius: 10,
    fontSize: 25,
    color: 'white',
    textTransform: 'uppercase',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 100,
  },
  square: {
    width: 100,
    height: 100,
    margin: 100,
  }
});

export default App;
