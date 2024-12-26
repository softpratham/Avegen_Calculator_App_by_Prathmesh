import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calc by [Your Name]</Text>
      <TextInput
        style={styles.input}
        value={input}
        editable={false}
        placeholder="Enter calculation"
      />
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, item === '=' && styles.equalButton]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('C')}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    textAlign: 'right',
    fontSize: 24,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
  },
  result: {
    width: '100%',
    textAlign: 'right',
    fontSize: 32,
    marginBottom: 20,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    margin: 5,
    borderRadius: 10,
  },
  equalButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Calculator;
