import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const RegisterScreen = ({navigation}) => {
  const [regis, setRegis] = useState({
    name_user: '',
    email_user: '',
    password_user: '',
    check_name_user: false,
    check_email_user: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidpassword_user: true,
  });

  const name_userChange = val => {
    if (val.length > 50) {
      setRegis({
        ...regis,
        name_user: val,
        check_name_user: true,
      });
    } else {
      setRegis({
        ...regis,
        name_user: val,
        check_name_user: false,
      });
    }
  };

  const emailValidation = val => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(val)) {
      setRegis({
        ...regis,
        email_user: val,
        check_email: true,
      });
    } else if (!regEx.test(val) && val !== '') {
      setRegis({
        ...regis,
        email_user: val,
        check_email: false,
      });
    } else {
    }
  };

  const handlepassword_userChange = val => {
    if (val.trim().length >= 8) {
      setRegis({
        ...regis,
        password_user: val,
        isValidpassword_user: true,
      });
    } else {
      setRegis({
        ...regis,
        password_user: val,
        isValidpassword_user: false,
      });
    }
  };

  // http://192.168.0.106/api-crud/register-user.php
  let formRegister = new FormData();
  formRegister.append('name_user', regis.name_user);
  formRegister.append('email_user', regis.email_user);
  formRegister.append('password_user', regis.password_user);

  const onRegister = async () => {
    // console.log('Data Register', formRegister);
    await fetch('http://192.168.0.106/api-crud/register-user.php', {
      method: 'POST',
      body: formRegister,
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (body) {
        console.log(body);
      });
    navigation.navigate('Login');
  };

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, {textAlign: 'center'}]}>Selamat Datang</Text>
      <Text style={[styles.txt, {textAlign: 'center'}]}>
        Silahkan Register terlebih dahulu
      </Text>
      <View style={styles.bgInput}>
        <TextInput
          placeholderTextColor="black"
          placeholder="Your Name"
          maxLength={50}
          style={styles.textInput}
          onChangeText={val => name_userChange(val)}
        />
        <TextInput
          placeholderTextColor="black"
          placeholder="Your Email"
          inputMode="email"
          style={[styles.textInput, {marginTop: 10}]}
          onChangeText={emailValidation}
        />
        <TextInput
          placeholderTextColor="black"
          placeholder="Your Password"
          secureTextEntry
          style={[styles.textInput, {marginTop: 10}]}
          onChangeText={val => handlepassword_userChange(val)}
        />

        <TouchableOpacity onPress={onRegister} style={styles.btnLgn}>
          <Text style={styles.txt}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00fff3',
  },

  bgInput: {
    width: '95%',
    margin: 10,
    justifyContent: 'center',
  },

  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  input: {
    flex: 1,
  },
  textInput: {
    paddingLeft: 10,
    height: Platform.OS === 'ios' ? 30 : 35,
    backgroundColor: 'white',
  },

  btnLgn: {
    margin: 10,
    marginTop: 10,
    width: '95%',
    height: 50,
    backgroundColor: '#ecff00',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
