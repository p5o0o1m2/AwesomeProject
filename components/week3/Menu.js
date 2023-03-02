import React from 'react';
import { TextInput, View } from 'react-native';
import MyIcon from './MyIcon';


export default function Menu() {
    return (
        <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10, margin: 20, padding: 20 }}>
            {/* กอน1 */}
            <View>
                <TextInput placeholder="Whatre you looking for?"></TextInput>
            </View>
            {/* กอน2 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                <MyIcon title='hotel' name='building' size={30} color='orange' />
                <MyIcon title='tour' name='map-marker' size={30} color='tomato' />
                <MyIcon title='car' name='car' size={30} color='green' />
                <MyIcon title='flight' name='plane' size={30} color='red' />
            </View>
            {/* กอน3 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <MyIcon title='cruise' name='ship' size={30} color='orange' />
                <MyIcon title='bus' name='bus' size={30} color='tomato' />
                <MyIcon title='event' name='star' size={30} color='green' />
                <MyIcon title='more' name='ellipsis-h' size={30} color='red' />
            </View>
        </View>
    );
} 