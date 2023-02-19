import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {contextApp} from '../utils/ContextApps';

const HomeScreen = ({navigation, route}) => {
  // const {id_user} = route.params;

  const userData = useContext(contextApp);
  const name = userData.dataLogin.name_user;
  const status = userData.dataLogin.status_keaktifan;
  // console.log('status : ', userData.dataLogin.status_keaktifan);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Selamat Datang, {name}</Text>
      <Text style={styles.txtDesc}>Status Pelamar , {status}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.btnEdit}>
        <Text style={styles.txtBtn}>Lengkapi Data Diri</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={[styles.btnEdit, {marginTop: 10}]}>
        <Text style={styles.txtBtn}>Lihat CV</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={[styles.btnEdit, {marginTop: 10}]}>
        <Text style={styles.txtBtn}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    margin: 10,
  },

  txtDesc: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    margin: 10,
  },

  txtBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  btnEdit: {
    width: '90%',
    height: 40,
    backgroundColor: '#009688',
    borderRadius: 5,
    justifyContent: 'center',
  },
});
