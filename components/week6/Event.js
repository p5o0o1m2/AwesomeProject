import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props) {
    const [onlineEvent, setOnlineEvent] = useState([]);
    const loadOnlineEvent = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineEvent(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineEvent();
    }, []);
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Upcoming Event</Text>
            <Text style={{ color: "gray", marginVertical: 10 }}> What's the Worst that Could Happend</Text>
         <FlatList
              horizontal={true}
              data={onlineEvent}
              renderItem={
                  ({ item, index }) => {
                    console.log(item, index, item.uri);
                      return (
                          <View style={{ marginRight: 20 }}>
                              <Image source={{ uri: item.uri }}
                                  style={{ height: 100, width: 210, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                              <View style={{ flexDirection: 'row', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 0.5, borderColor: "black" }}>
                                 <View style={{ padding: 1 }}>
                                     <Text style={{ fontSize: 15, color: 'red', textAlign: "left" }}>DEC</Text>
                                      <Text style={{ fontSize: 10, color: 'gray', textAlign: 'center' }}>{item.date}</Text>
                                  </View>
                                  <View style={{ padding: 2 }}>
                                      <Text style={{ fontSize: 15, color: 'black', }}>{item.title}</Text>
                                      <Text style={{ color: 'gray', fontSize: 12 }}>{item.mouth}{item.date}{item.datetime}</Text>
                                      <Text style={{ color: 'gray', fontSize: 12 }}>{item.place}</Text>
                                  </View>
                              </View>
                       </View>
                      );
                }
               }
               keyExtractor={item => item.id}
           />
     </View>
 );
}
