import React from 'react';
import { View, Image } from 'react-native';

export default function Cat() {

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanidiplacido%2Ffiles%2F2018%2F01%2FMBA7020_v008.1028-1200x633.jpg" }}
                style={{ width: '100%', height: 500 }}
            />

        </View>
    );
}