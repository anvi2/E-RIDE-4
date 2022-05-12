import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon : ({focused,color,size})=>{
            var icon;
            if(route.name === "Transaction"){
              icon = "book"
            }else{
              icon = "search"
            }

            return(
              <Ionicons name={icon} size={size} color={color}/>
            )
          }
        })}
        
        tabBarOptions={{
          activeTintColor:"white",
          inactiveTintColor:"grey",
          labelStyle:{
            fontSize:15,
            fontFamily:'Rajdhani_600SemiBold'
          },
          labelPosition:"beside-icon",
          tabStyle:{
            marginTop:15,
            marginLeft:10,
            marginRight:10,
            borderRadius:30,
            backgroundColor:"#5653D4",
            borderWidth:2,
            alignItems:"center",
            justifyContent:"center"
          }
        }}>
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
