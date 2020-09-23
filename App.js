import React, {useEffect, useState} from "react";
import {SafeAreaView, Text,Platform} from "react-native"
import NetInfo from "@react-native-community/netinfo"
const App =() =>{
  const [isInternetReachable, setIsInternetReachable]= useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsInternetReachable(state.isInternetReachable);

  });
  return () => {
    unsubscribe();
    }
  }, []);
  if(isInternetReachable){
    return null
  }
  return (
    
    <SafeAreaView style = {{backgroundColor:"red"}}>
      <Text
       style = {{
          color:"white" ,
           fontSize:18,
           padding:8,
           textAlign:"center",
           fontWeight:"500",
           letterSpacing:1
           }}>No Internet Connection</Text>
    </SafeAreaView>
  );
};

export default App;
