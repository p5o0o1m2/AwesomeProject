import React from 'react';
import { Button, Image, Text, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ padding: -10}}>
            {/* ก้อนที่ 1 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Price </Text>
                    <Text style={{color:'tomato'}}>$399.99 </Text>
                    <Text>AVG/Night</Text>
                </View>
                <View >
                    <Button title='Book Now' color={"tomato"} />
                </View>
            </View>

        </View>
    );
}