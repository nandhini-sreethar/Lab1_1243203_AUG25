import {StyleSheet, View, Text, TextLayoutLine} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';
import styles from './styles.js';

export default function Header(){

    return(
    <View style = {styles.container}>
            <FontAwesome5 name="tasks" size={20}/>  
            <Text> To do App By Nandhini</Text>
    </View>
    );
}