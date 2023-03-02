import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Section7() {
    return (
        <View style={{ padding: 20 }}>
            {/* ก้อนที่3 */}
            <Text style={{ fontSize: 30 }}>Room Type</Text>
            <View style={{flexDirection:'row'}}>
                <Image  style={{width:100,height:100}} source={require('../../assets/week3/room-8.jpg')}/>
                <View style={{marginLeft:10}}></View>
                <View>
                    <Text style={{fontSize:30}}>Standard Twin Room</Text>
                    <Text style={{fontSize:30,color:'tomato'}}>$399.99</Text>
                    <Text style={{color:'skyblue'}}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}