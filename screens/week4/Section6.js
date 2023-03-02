import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ padding: 20, borderBottomWidth: 1, borderColor: 'gray' }}>
            {/* ก้อนที่3 */}
            <View>
                <Text>Location</Text>
                <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 550, height: 175 }} source={require('../../assets/week3/map.jpg')} />

            </View>
        </View>
    );
}
