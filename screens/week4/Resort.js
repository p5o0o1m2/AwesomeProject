import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Section1 from '../../components/week4/Section1';
import Section2 from '../../components/week4/Section2';
import Section3 from '../../components/week4/Section3';
import Section4 from '../../components/week4/Section4';
import Section5 from '../../components/week4/Section5';
import Section6 from '../../components/week4/Section6';
import Section7 from '../../components/week4/Section7';
import Section8 from '../../components/week4/Section8';
export default function Resort() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                {/* <Text> Week 4 </Text> */}
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </View>
        </ScrollView>
    );
}