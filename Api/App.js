import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Image, Alert } from 'react-native';
import { View, Text, Colors, Button } from 'react-native-ui-lib';
import { Picker } from '@react-native-community/picker';
import CstmInput from './components/CstmInput';
import CurrencyConv from './api/ConvertedAmount';

const SwitchExample = () => {
  const [language1, setlanguage1] = useState('');
  const [currencyData, setCurrencyData] = useState([])
  const [amount, setAmount] = useState(0);

  const updateValues1 = (itemValue) => {
    setlanguage1(itemValue);
  }

  useEffect(() => {
    CurrencyConv(language1).then(resp => {
      setCurrencyData(resp);
    }).catch(console.log);
  }, [])

  const setAmt = (value) => {
    setAmount(value);
  }

  const calculate = () => {
    const currentValue = currencyData.rates[language1];
    const final_amount = currentValue * amount;
    final_amount ?
      Alert.alert(
        "AMOUNT",
        (final_amount.toFixed(2)).toString(),
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      ) :
      Alert.alert(
        "No amount entered.",
        "Please enter amount!",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  }

  return (
    <View>
      <Text center marginT-80 style={styles.text}>Currency Converter</Text>

      <View marginT-40 style={styles.row}>
        <View>
          <Text style={{ fontSize: 20 }}>FROM</Text>
        </View>

        <View>
          <Text style={{ fontSize: 20, marginLeft: 20 }}>TO</Text>
        </View>
      </View>
      <View row>
        <View>
          <Text style={{ fontSize: 20, marginHorizontal: 55, marginTop: 10, }}>EUR</Text>
        </View>
        <View>
          <Image
            style={styles.stretch}
            source={require('./src/arrow.png')}
          />
        </View>
        <View flex right marginL-10>
          <Picker style={styles.pickerStyle}
            selectedValue={language1}
            onValueChange={updateValues1}
          >
            <Picker.Item label="AUD" value="AUD" />
            <Picker.Item label="CAD" value="CAD" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="EUR" />
            <Picker.Item label="HUF" value="HUF" />
            <Picker.Item label="INR" value="INR" />
            <Picker.Item label="JPY" value="JPY" />
            <Picker.Item label="SGD" value="SGD" />
            <Picker.Item label="USD" value="USD" />
          </Picker>
        </View>
      </View>
      <View marginH-30 key='amount'>
        <Text marginT-20>Amount</Text>
        <CstmInput
          placeholder="Enter amount"
          keyboardType="number-pad"
          placeholderTextColor={Colors.grey50}
          style={{ marginBottom: 5 }}
          onChangeText={setAmt}
        />
      </View>
      <View center marginT-20>
        <Button
          backgroundColor="grey"
          label="CALCULATE"
          labelStyle={{ fontWeight: '600' }}
          style={styles.button}
          onPress={calculate}
        />
      </View>

    </View>

  );
}
const styles = StyleSheet.create({
  row: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 70,
  },
  text: {
    fontSize: 50,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  button: {
    height: 50,
    width: 200,
  },
  pickerStyle: {
    height: 60,
    width: 120,
    color: '#344953',
    justifyContent: 'center',

  }
})

export default (SwitchExample);