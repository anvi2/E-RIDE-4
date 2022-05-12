import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput ,ImageBackground,Image} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
      bookId:"",
      studentId : ""
    };
  }

  getCameraPermissions = async domState => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      domState: domState,
      scanned: false
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    const {domState} = this.state;
    if(domState === "bookId"){
      this.setState({
        bookId: data,
        domState: "normal",
        scanned: true
      });
    }else{
      this.setState({
        studentId: data,
        domState: "normal",
        scanned: true
      });
    }
  };

  render() {
    const { domState, hasCameraPermissions, scannedData, scanned } = this.state;
    if (domState !== "normal") {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/background2.png")} style={styles.bgImage}>
        <View style={styles.upperContainer}>
          <Image source={require("../assets/appIcon.png")} style={styles.appIcon}/>
          <Image source={require("../assets/appName.png") }style={styles.appName}/>
        </View>
       <View style={styles.lowerContainer}>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput}
            placeholder={"Book Id"}
            placeholderTextColor={"white"}
            value={this.state.bookId}
            />
              <TouchableOpacity style={styles.button} onPress={()=>this.getCameraPermissions('bookId')}>
              <Text style={styles.buttonText}> Scan</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput}
            placeholder={"Student Id"}
            placeholderTextColor={"white"}
            value={this.state.studentId}
            />
            <TouchableOpacity style={styles.button}  onPress={()=>this.getCameraPermissions('studentId')}>
              <Text style={styles.buttonText}> Scan</Text>
            </TouchableOpacity>
          </View>

       </View>
       </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 15
  },
  button: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius:10
  },
  buttonText: {
    fontSize: 24,
    color: "#DA0101",
    fontFamily:'Rajdhani_600SemiBold'
  },
  lowerContainer:{
    flex:0.5,
    alignItems:"center"
  },
  textInputContainer:{
    borderWidth:2,
    borderRadius:10,
    flexDirection:"row",
    backgroundColor:"#9DFD24",
    borderColor:"white"
  },
  textInput:{
    width:"57%",
    height:50,
    padding:10,
    borderColor:"white",
    borderRadius:10,
    borderWidth:3,
    fontSize:18,
    backgroundColor:"#5653D4",
    fontFamily:'Rajdhani_600SemiBold',
    color:"white"
  },
  upperContainer:{
    flex:0.5,
    justifyContent:"center",
    alignItems:"center"
  },
  bgImage:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
  },
  appIcon:{
    width:100,
    height:100,
    resizeMode:"contain",
    marginTop:80
  },
  appName:{
    width:80,
    height:80,
    resizeMode:"contain",
  }
})
