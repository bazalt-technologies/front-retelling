import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
var {height, width} = Dimensions.get('window');

const Settings = ({navigation}) => (
    <View style={styles.bg}>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>Настройки</Text>
        </View>
  
        <View style={styles.scrollPart}>
          <ScrollView>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={()=>navigation.navigate('Profile')}
          >
            <Text
                style={styles.submitButtonText}
            >
                Войти
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={()=>navigation.navigate('SignUp')}
          >
            <Text
                style={styles.submitButtonText}
            >
                Зарегестрироваться
            </Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
  
        
        <View style={styles.footer}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
          >
          <Image 
            source={require('../assets/menu.png')}
            style={styles.footerIcon}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Profile')}
          >
          <Image 
            source={require('../assets/account.png')}
            style={styles.footerIcon}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image 
            source={require('../assets/settings.png')}
            style={styles.footerIcon}
          />
          </TouchableOpacity>
        </View>
  
      </SafeAreaView>
    </View>
  );

  const styles = StyleSheet.create({
    bg:{
      backgroundColor: '#fdf8dd',
      flex:1,
    },
    header: {
      justifyContent: 'center',
      position: "fixed",
      backgroundColor: '#fdf8dd',
      borderBottomWidth: 3,
      borderBottomColor: '#e4c0ae',
      height: height * 0.075,
      
    },
    headerText: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: 'bold',
    },
    scrollPart: {
      backgroundColor: '#fdf8e1',
      justifyContent:"center",
      alignItems:"center",
    },
    submitButton: {
        width: width * 0.5,
        height: height * 0.05,
        borderRadius: 10,
        backgroundColor: '#e4c0ae',
        marginTop: height * 0.05,
    },
    submitButtonText: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: height * 0.01,
    },
    footer: {
      position: "absolute",
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: height * 0.9,
      height: height * 0.1,
      width: width,
      backgroundColor: "#f8eed4",
      borderTopWidth: 3,
      borderColor: "#ddd9c4",
    },
    footerIcon: {
      height: height * 0.05,
      width: height * 0.05,
      marginLeft: width * 0.09,
      marginRight: width * 0.09,
      marginTop: height * 0.01,
    }
  });

  export default Settings