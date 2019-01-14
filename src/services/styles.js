import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
    paddingBottom: 2,
    paddingHorizontal: 2,
    paddingTop: 4
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
  text: {
    alignSelf: "center",
    marginTop: 8,
  }
});

export default styles;