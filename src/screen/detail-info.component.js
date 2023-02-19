import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import {contextApp} from '../../utils/ContextApps';

export const DetailInfo = ({value, route}) => {
  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <Text style={styles.txtOrder}>
          Posisi Pelamar : {value.posisi_user}
        </Text>
        <Text style={styles.txtOrder}>Nama Pelamar : {value.name_user}</Text>
        <Text style={styles.txtOrder}>TTL : {value.ttl_user}</Text>
        <Text style={styles.txtOrder}>Status : {value.status_keaktifan}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txtOrder: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

  bgCover: {
    margin: 10,
    width: '95%',
    height: 85,
    backgroundColor: '#FFFF00',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  line: {
    width: 20,
    height: 5,
    backgroundColor: '#000',
  },

  header: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF00',
  },

  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  txtDesc: {
    fontSize: 16,
    color: '#000',
  },

  txtPart: {
    width: 70,
    fontSize: 15,
    color: '#000',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 5 : -15,
    flex: 1,
    paddingLeft: 1,
    color: '#05375a',
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  flxDir: {
    flexDirection: 'row',
  },

  btnMin: {
    marginTop: 11,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 20,
    height: 20,
  },
});
