import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [heart, setHeart] = useState(0);
    const onPressButton = () => {
        let output = (heart + 1);
        setHeart(output);
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', padding: 20, justifyContent: "space-around" }}></View>
            <View>
                <TouchableOpacity onPress={onPressButton}>
                    <View style={{flexDirection:'row', justifyContent:"center"}}>
                    <FontAwesome name="heart" size={50} color="orange"/>
                    <Text style={{fontsize:70}}>{heart}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}