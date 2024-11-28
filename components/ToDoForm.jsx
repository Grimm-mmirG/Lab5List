import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ToDoForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#b0b0b0" 
        value={newTask}
        onChangeText={setNewTask}
        maxLength={50}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    maxWidth: '100%',
    backgroundColor: '#0c0300', 
    borderRadius: 12, 
    elevation: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#1d1c1c', 
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#1d1c1c', 
    marginRight: 12,
    color: '#FFFFFF', 
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#d71522', 
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ToDoForm;
