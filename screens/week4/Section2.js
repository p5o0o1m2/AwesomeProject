import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
    return (
        <View>
            <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10, margin: 20, padding: 20 }}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>Hilton San Francisco</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star-half" size={32} color="orange" />
                    </View>
                </View>
                <Text style={{ flexDirection: 'row', textAlign: 'center' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>







    );


}