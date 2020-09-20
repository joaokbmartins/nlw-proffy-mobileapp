import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: "#d4c2ff",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: "#04d361",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  okButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
  buttonOpenWebApp: {
    color: "#FFF",
    backgroundColor: "rgb(152, 113, 245);",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
    width: "95%",
    height: 58,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    maxWidth: 240,
  },
});

export default styles;
