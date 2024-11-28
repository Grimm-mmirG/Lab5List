import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ToDoList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {tasks.map((task) => (
        <View key={task.id} style={[styles.task, task.completed && styles.completed]}>
          <TouchableOpacity onPress={() => toggleCompletion(task.id)} style={styles.checkbox}>
            <Icon name={task.completed ? 'check-square' : 'square-o'} size={24} color={task.completed ? '#4AB596' : '#B0B0B0'} />
          </TouchableOpacity>
          <Text style={[styles.taskText, task.completed && styles.completedText]}>{task.text}</Text>
          <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
            <Icon name="trash" size={18} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1d1c1c', 
    padding: 14,
    borderColor: '#0c0300', 
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  completed: {
    backgroundColor: '#555',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 14,
    color: '#b3b3b4', 
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#4AB596',
  },
  checkbox: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#3E3E3E',
  },
});

export default ToDoList;
