import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Hotel() {
    return (
        <View style={{}}>
            {/* ก้อน1 */}
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9, borderRadius: 10 }} source={require('../../assets/week3/room-1.jpg')} />
            </View>

            {/* ก้อน2 */}
            <View>
                <FontAwesome name='map-marker' size={32} color="orange" />
                <Text>553 Cislason Radial</Text>
            </View>

            {/* ก้อน3 */}
            <View>
                <Text style={{ fontSize: 20 }}>Boston Hotell</Text>
            </View>

            {/* ก้อน4 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="star" size={32} color="orange" />
                    <FontAwesome name="star" size={32} color="orange" />
                    <FontAwesome name="star" size={32} color="orange" />
                    <FontAwesome name="star" size={32} color="orange" />
                    <FontAwesome name="star-half" size={32} color="orange" />
                </View>
            </View>
            <View>
                <Text style={{ color: 'gray' }}>100Reviews</Text>
            </View>
            {/* ก้อน5 */}
            <View>
                <Text style={{ fontSize: 30, color: "tomato" }}> $125</Text>
            </View>

        </View>
    );
} 