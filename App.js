import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header.js'
import Tasks from './src/components/Tasks/Tasks.js'
import Form from './src/components/Form/Form.js'
import styles from './src/styles/main.js'
import uuid from 'react-uuid';
import { useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Entypo } from '@expo/vector-icons';




export default function App(){

  
  const Tab = createBottomTabNavigator() 

  const [tasks, setTasks] = useState(
    [{
    id : uuid(),
    description : 'Wash the car',
    taskstatus : true
    },
    {
      id : uuid(),
      description : 'Prepare a meal',
      taskstatus : false
    },
    {
    id : uuid(),
    description : 'Go through the assignment',
    taskstatus : true
    }]
  );
  
  
  
  const handleAddTask = (taskDescription, taskStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks.push(
      {
        id : uuid(),
        description : taskDescription,
        taskstatus : taskStatus
      }
    );
    setTasks(updatedTasks)
  }
  

const handleStatusChange = (id) =>{
  const updatedTasks = tasks.map((task)=>{
    if(task.id == id){
      // if(task.done){
      //   Alert.alert(task.done+'');
      // }
      // 
      task.taskstatus = !task.taskstatus
      //task.done = !task.done
    }
    return task
  })

  setTasks(updatedTasks)
}

const handleTaskRemoval = (id) => {
  const updatedTasks = tasks.filter(
    (task) => task.id !== id
  );
  setTasks(updatedTasks);
}

  return(
   

    <NavigationContainer>
          <StatusBar/> 
          <Header/>
        
        <Tab.Navigator>
        <Tab.Screen name='List' options={{
            headerShown: false,
            title: 'List Tasks',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='list-ul' size={size} color={color} />
            )
          }}>
                  {(props)=> <Tasks {...props}  onStatusChange = {handleStatusChange} onTaskRemoval = {handleTaskRemoval} tasks = {tasks}/>}
            </Tab.Screen>
            <Tab.Screen name='Add' options={{
            title: 'Add Task',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#001010'
            },
            tabBarIcon: ({ color, size }) => (
              <Entypo name='add-to-list' size={size} color={color} />
            )
          }}>
                  {(props)=> <Form {...props} onAddTask={handleAddTask}/>}
            </Tab.Screen>
        </Tab.Navigator>
     </NavigationContainer>
   
    );

}