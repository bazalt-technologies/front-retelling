import React from "react";
import ID from "../App"
import { Dimensions, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, Linking } from "react-native";
var {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => (
    <View style={styles.bg}>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>Профиль</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
        <View style={styles.switchButton}>
          
          <Text style={styles.switchButtonText}>Нет аккаунта? Зарегестрироваться ➡️</Text>
          
        </View>
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Логин"
            style={styles.inputBox}
          />
          <TextInput
            placeholder="Пароль"
            style={styles.inputBox}
          />
          <TouchableOpacity
            style={styles.submitButton}
          >
            <Text
                style={styles.submitButtonText}
            >
                Войти 
            </Text>
          </TouchableOpacity>
            
        </View>
        <View style={styles.bottomThings}>
            <Text 
                style = {{textDecorationLine: 'underline'}} 
                onPress={()=>{Linking.openURL('http://www.google.com/')}}
            >
                Забыли пароль?
            </Text>
            <Text>Нажимая на кнопку "Войти", вы соглашаетесь</Text>
            <Text 
                style = {{textDecorationLine: 'underline'}}
                onPress={()=>{Linking.openURL('http://www.ya.ru/')}}
            >
                с условиями пользования
            </Text>
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
          <TouchableOpacity>
          <Image 
            source={require('../assets/account.png')}
            style={styles.footerIcon}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('Settings')}
          >
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
    switchButton: {
      justifyContent: "center",
      backgroundColor: "#e4c0ae",
      height: height * 0.045,
    },
    switchButtonText: {
      textAlign: "center",
    },
    inputView: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: height * 0.175,
    },
    inputBox: {
        width: width * 0.5,
        height: height * 0.05,
        borderColor: '#000',
        borderWidth: 2,
        marginTop: height * 0.05,
        padding: 8,
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
    bottomThings: {
        height: height * 0.05,
        marginTop: height * 0.475,
        marginLeft: width * 0.075,
        width: width * 0.85,
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


  
  export default SignIn