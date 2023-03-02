import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MyIcon(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome name={props.name} size={props.size} color={props.color} />
            <Text>{props.title}</Text>
        </View>

    );
}