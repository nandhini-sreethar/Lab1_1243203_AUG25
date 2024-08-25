import * as React from 'react'
import { useState } from 'react'
import {View, Text, Pressable, Modal, Button, Switch} from 'react-native'
import styles from './styles.js'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Task(props){

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }


    const handleStatusChangePress = () => {
        
        props.onStatusChange(props.task.id)
        
    }

    const handleRemovePress = () => {
        props.onTaskRemoval(props.task.id)
    }

return(
    <View>
        <Pressable onPress={toggleModal}>
            <View style = {styles.container}>
                    {/* <Text>Id: {props.task.id}</Text> */}
                    <Text>Title: {props.task.description}</Text>
                    <Text>Status: {props.task.taskstatus? 'Done' : 'Due'}</Text>
                </View>
        </Pressable>
          <Modal visible={showModal} transparent={true}>
        <View style={styles.modal.container}>
          <View style={styles.modal.box}>

            {/* Close Modal */}
            <Pressable onPress={toggleModal}>
              <View style={styles.close.container}>
                <AntDesign name="closesquare" size={25} color="#c00" />
                <Text style={styles.close.text}>Close</Text>
              </View>
            </Pressable>

            {/* Task title */}
            <Text style={styles.title}>Title: {props.task.description}</Text>

            <View style={styles.options}>

              {/* Change Status */}
              <View style={styles.switch.container}>
                <Switch
                  value={props.task.taskstatus}
                  onValueChange={handleStatusChangePress}
                />
                <Pressable onPress={handleStatusChangePress}>
                  <Text style={styles.switch.label}>Toggle Status</Text>
                </Pressable>
              </View>

              {/* Remove Button */}
              <View style={styles.remove.container}>
                <Pressable onPress={handleRemovePress}>
                  <MaterialIcons name='delete-sweep' size={32} style={styles.remove.icon} />
                  <Text style={styles.remove.label}>Remove</Text>
                </Pressable>
              </View>
              
            </View>
          </View>
        </View>
      </Modal>
           
    </View>
    );
} 