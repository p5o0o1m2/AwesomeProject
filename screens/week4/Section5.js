import React from 'react';
import { Image, Text, View } from 'react-native';
import MyIcon from '../week3/MyIcon';

export default function Section5() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10, borderBottomWidth: 1, borderColor: "gray" }}>
            <MyIcon title='wifi' name='wifi' size={30} color='skyblue' />
            <MyIcon title='coffee' name='coffee' size={30} color='skyblue' />
            <MyIcon title='bath' name='bath' size={30} color='skyblue' />
            <MyIcon title='car' name='car' size={30} color='skyblue' />
            <MyIcon title='paw' name='paw' size={30} color='skyblue' />
        </View>
    );
}