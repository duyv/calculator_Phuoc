import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonCal from './ButtonCal';

const Operation = (props) => {
    const [value, setValue] = useState(0);
    const [preValue, setPreValue] = useState(0);
    const [symbol, setSymbol] = useState(null);
    const [point, setPoint] = useState(false);
    const inputHandle = (input) => {
        switch(typeof parseInt(input)) {
            case 'number':
                if(point){
                    if(symbol == '=' || symbol == '%' || symbol == '.'){
                        setValue(Number.isNaN(parseFloat(input))? value : parseFloat(input));
                        setSymbol(null);
                    } else {
                    setValue(parseFloat(value + input));};
                } else {
                    if(symbol == '=' || symbol == '%'){
                        setValue(Number.isNaN(parseFloat(input))? value : parseFloat(input));
                        setSymbol(null);
                    } else {
                        if(value < 0){
                            setValue((value * 10.0) - parseFloat(input));
                        } else {
                            setValue((value * 10.0) + parseFloat(input));
                        };
                    };
                }
            default:
                return inputStringHandle(input);
        }
    };
    const inputStringHandle = (input) => {
        switch(input) {
            case 'AC':
                setSymbol(null);
                setPreValue(0);
                setValue(0);
                setPoint(false);
                break;
            case '+/-':
                setValue(value * (-1));
                break;
            case '%':
                setValue(value/100);
                setSymbol(input);
                setPoint(false);
                break;
            case '.':
                if(!point){
                    setValue(value.toString().concat('.'));
                    setPoint(true);
                } else {
                    setSymbol(input);
                }
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                setSymbol(input);
                setPreValue(parseFloat(value));
                setValue(0);
                setPoint(false);
                break;
            case '=':
                setPreValue(0);
                setValue((symbol == '='||symbol == '%'||symbol == '.')? value :eval(preValue + symbol + value));
                setSymbol('=');
                setPoint(false);
                break;
        }
    };

    useEffect(() => {
        props.display(value);
        setPoint((value.toString().indexOf('.') == -1) ? false: true);
    });

    return(
      <View style={styles.operation}>
        <View style={styles.buttons}>
          <View style={styles.percent}>
            <ButtonCal value={'AC'} onPress={inputHandle.bind(this, 'AC')}></ButtonCal>
            <ButtonCal value={'+/-'} onPress={inputHandle.bind(this, '+/-')}></ButtonCal>
            <ButtonCal value={'%'} onPress={inputHandle.bind(this, '%')}></ButtonCal>
          </View>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <ButtonCal value={7} onPress={inputHandle.bind(this, '7')}></ButtonCal>
              <ButtonCal value={8} onPress={inputHandle.bind(this, '8')}></ButtonCal>
              <ButtonCal value={9} onPress={inputHandle.bind(this, '9')}></ButtonCal>
            </View>
            <View style={styles.row}>
              <ButtonCal value={4} onPress={inputHandle.bind(this, '4')}></ButtonCal>
              <ButtonCal value={5} onPress={inputHandle.bind(this, '5')}></ButtonCal>
              <ButtonCal value={6} onPress={inputHandle.bind(this, '6')}></ButtonCal>
            </View>
            <View style={styles.row}>
              <ButtonCal value={1} onPress={inputHandle.bind(this, '1')}></ButtonCal>
              <ButtonCal value={2} onPress={inputHandle.bind(this, '2')}></ButtonCal>
              <ButtonCal value={3} onPress={inputHandle.bind(this, '3')}></ButtonCal>
            </View>
            <View style={styles.row}>
              <ButtonCal style={{flex:2}} value={0} onPress={inputHandle.bind(this, '0')}></ButtonCal>
              <ButtonCal value={'.'} onPress={inputHandle.bind(this, '.')}></ButtonCal>
            </View>
          </View>
        </View>
        <View style={styles.calculation}>
          <ButtonCal value={'/'} onPress={inputHandle.bind(this, '/')}></ButtonCal>
          <ButtonCal value={'*'} onPress={inputHandle.bind(this, '*')}></ButtonCal>
          <ButtonCal value={'-'} onPress={inputHandle.bind(this, '-')}></ButtonCal>
          <ButtonCal value={'+'} onPress={inputHandle.bind(this, '+')}></ButtonCal>
          <ButtonCal value={'='} onPress={inputHandle.bind(this, '=')}></ButtonCal>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    operation: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: 'darkorange'
    },
    buttons: {
        flex: 3
    },
    calculation: {
        flex: 1
    },
    numbers: {
        flex: 4,
        backgroundColor: 'darkgray'
    },
    percent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'dimgray'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    calculation: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    textButton: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#e6e6e6',
    },
    buttonTouch:{
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Operation;