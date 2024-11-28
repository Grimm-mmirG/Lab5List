import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  
  const addTask = () => {
    if (newTask.trim()) {
      
      const isDuplicate = tasks.some(task => task.text.toLowerCase() === newTask.trim().toLowerCase());

      if (isDuplicate) {
       
        Alert.alert("Duplicate Task", "This task already exists in your list.");
      } else {
        
        const newTaskObj = {
          id: Math.random().toString(36).substring(7), 
          text: newTask,
          completed: false,
        };
        setTasks([...tasks, newTaskObj]);
        setNewTask(''); 
      }
    }
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <MainLayout>
      <View style={styles.content}>
        <Text style={styles.title}>Ultimate To-Do List</Text>
        <ToDoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        <ToDoList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
      </View>

      <View style={styles.footerContainer}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
          color="#6A5ACD" 
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    flex: 1, 
  },
  footerContainer: {
    marginBottom: 20, 
  },
});

export default HomeScreen;
