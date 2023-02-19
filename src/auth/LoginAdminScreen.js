import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {contextApp} from '../utils/ContextApps';

const LoginAdminScreen = ({navigation}) => {
  const dataUser = useContext(contextApp);
  const {setDataLogin} = dataUser;

  const [data, setData] = useState({
    email_admin: '',
    password_admin: '',
    check_email: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidpassword_admin: true,
  });

  const emailValidation = val => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(val)) {
      setData({
        ...data,
        email_admin: val,
        check_email: true,
      });
    } else if (!regEx.test(val) && val !== '') {
      setData({
        ...data,
        email_admin: val,
        check_email: false,
      });
    } else {
    }
  };

  const handlepassword_userChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password_admin: val,
        isValidpassword_admin: true,
      });
    } else {
      setData({
        ...data,
        password_admin: val,
        isValidpassword_admin: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const onSignIn = async () => {
    // navigation.navigate("MainScreen");
    const formDataLogin = new FormData();
    formDataLogin.append('email_admin', data.email_admin);
    formDataLogin.append('password_admin', data.password_admin);
    console.log(formDataLogin);

    // 10.20.30.83

    await fetch('http://192.168.0.106/api-crud/login-admin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formDataLogin,
    }).then(async response => {
      const res = await response.json();
      console.log('Log : ', res);

      if (res.response === 'Success') {
        setDataLogin(res);
        navigation.navigate('HomeAdmin', {
          id_admin: res.id_admin,
          email_admin: formDataLogin._parts[0][1],
          password_admin: formDataLogin._parts[1][1],
          // getToken
        });

        // console.log("text : ", dataUserAll);
      } else {
        alert('Email or Password is incorrect');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.txt, {textAlign: 'center'}]}>Selamat Datang</Text>
      <Text style={[styles.txt, {textAlign: 'center'}]}>
        Silahkan Login Terlebih Dahulu
      </Text>
      <View style={styles.bgInput}>
        <TextInput
          placeholderTextColor="black"
          placeholder="Your Email"
          inputMode="email"
          style={styles.textInput}
          onChangeText={emailValidation}
        />
        <TextInput
          placeholderTextColor="black"
          placeholder="Your Password"
          secureTextEntry
          style={[styles.textInput, {marginTop: 10}]}
          onChangeText={val => handlepassword_userChange(val)}
        />

        <TouchableOpacity onPress={onSignIn} style={styles.btnLgn}>
          <Text style={styles.txt}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.btnLgn}>
          <Text style={styles.txt}> Login as User </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginAdminScreen;

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
