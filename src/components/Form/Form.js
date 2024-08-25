import {View, Text, TextInput, Switch, Button, Keyboard} from 'react-native'
import styles from './styles.js'
import { useState } from 'react';
import uuid from 'react-uuid';

export default function Form(props){

    const handleAddPress = () =>{
        if(taskDescription){
        props.onAddTask(taskDescription, taskStatus)
        setTaskDescription('')
        setTaskStatus(false)
        Keyboard.dismiss()
        setIsEnabled(true)
        }
        else{
            setIsEnabled(true)
        }
       } 
    
    //const [errorMessage, setErrorMessage] = useState(null)
    const [taskDescription, setTaskDescription] = useState('')
    const [taskStatus, setTaskStatus]  = useState(false)
    const [isEnabled, setIsEnabled] = useState(true);

    const handleDescriptionChange = (value) =>{
        if(value != ''){
            setTaskDescription(value)
            setIsEnabled(false)
        }
        
    }   
    const handleStatusChange = (value) =>{
        setTaskStatus(value)
    }
    

    return(
    <View style={styles.container}>
        <TextInput placeholder='Enter the task title' maxLength={150} 
        onChangeText={handleDescriptionChange} defaultValue={taskDescription}>
        </TextInput>
        <Text>Done: </Text>
        <Switch value={taskStatus} onValueChange={handleStatusChange}/>
        <Button title='Add' disabled={isEnabled} onPress={handleAddPress}/>
    </View>
    );
}  

