import React, { useState } from "react";
import { Alert, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedCourse, setSubmittedCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && course) {
      Alert.alert("Confirmation", "Your information has been submitted.");
      setSubmittedName(name);
      setSubmittedCourse(course);
      setSubmitted(true);
    } else {
      Alert.alert("Error", "Please fill out all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Course:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your course"
        value={course}
        onChangeText={setCourse}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {submitted && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>
            Your name is <Text style={styles.highlight}>{submittedName}</Text> and you are from{" "}
            <Text style={styles.highlight}>{submittedCourse}</Text>.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000",
  },
  label: {
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#1e1e2f",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    alignItems: "center",
  },
  result: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#4CAF50",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 30, // Increased horizontal padding for a wider button
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
