import { Image, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ padding : 20  }}>
{/* ก้อนที่1 */}
            <View style={{flexDirection:'row'}}>
                <Image  style={{width:550,height:175}} source={require('../../assets/week3/room-6.jpg')}/>
                <View style={{marginLeft:10}}></View>
                
            </View>



        </View>    
    );
}