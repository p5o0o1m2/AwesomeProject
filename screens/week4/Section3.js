import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section3() {
    return (
        <View style={{ padding: 20 }}>
            {/* ก้อนที่1 */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: "white" }}>9.5</Text>
                </View>


                <View style={{ marginLeft: 10 }}></View>
                <View>
                    <Text style={{ fontSize: 40 }}>Excellent</Text>
                    <Text style={{ color: 'grey' }}>See 801 reviews</Text>
                </View>
            </View>


        </View>
    );
}