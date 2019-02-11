import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    color: "white"
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#006094",
    borderRadius: 4,
    marginTop: 8,
    padding: 10
  },
  buttonText: {
    color: "white",
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    marginVertical: 10,
    paddingBottom: 2,
    paddingHorizontal: 2,
    paddingTop: 4
  },
  inputLabel: {
    color: "white",
    padding: 0,
    margin: 0
  },
  link: {
    alignItems: "center",
    borderRadius: 4,
    marginTop: 8,
    padding: 10
  },
  linkText: {
    color: "#006094"
  },
  rating: {
    backgroundColor: "#222"
  },
  text: {
    alignSelf: "center",
    marginTop: 8,
  }
});



export default styles;