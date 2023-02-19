import {StyleSheet, Text, View, TouchableOpacity,
    ImageBackground,
    ScrollView,
    FlatList,
    Image,
    Alert,} from 'react-native';
import React, {useState, useEffect} from 'react';
import { DetailInfo } from './detail-info.component';

const HomeAdminScreen = ({navigation}) => {
  const [dataUser, setDataUser] = useState([]);

  const getUser = async () => {
    try {
      const data = await fetch(
        'http://192.168.0.106/api-crud/getUser.php',
      ).then(data => data.json());
      setDataUser(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Home Admin Screen</Text>
      <View style={{margin: 10}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={[styles.btnEdit, {marginTop: 10}]}>
        <Text style={styles.txtBtn}>Keluar</Text>
      </TouchableOpacity>
      </View>
      <FlatList
          data={dataUser}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                
                style={styles.bgCover}
              >
                <DetailInfo value={item} />
              </TouchableOpacity>
            );
          }}
        />
    </View>
  );
};

export default HomeAdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  txtTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
  bgCover: {
    margin: 10,
    width: "95%",
    height: 105,
    backgroundColor: "#FFFF00",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  txtBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  btnEdit: {
    width: '100%',
    height: 40,
    backgroundColor: '#009688',
    borderRadius: 5,
    justifyContent: 'center',
  },
});
