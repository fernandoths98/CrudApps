import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {contextApp} from '../utils/ContextApps';

const DetailScreen = ({navigation}) => {
  const dataDetail = useContext(contextApp);
  console.log(dataDetail.dataLogin)

  const tgl = new Date().toDateString();

  return (
    <View style={styles.container}>
      <Text style={[styles.txtHead, {textAlign: 'center'}]}>EDII</Text>
      <Text style={[styles.txtAdd, {textAlign: 'center'}]}>MEMBER OF IPC</Text>
      <Text style={[styles.txtAdd, {textAlign: 'center'}]}>
        PT. EDI INDONESIA
      </Text>
      <Text style={[styles.txtAdd, {textAlign: 'center'}]}>
        Jln. Yos Sudarso Kav. 89, Jakarta. 14360, Indonesia
      </Text>
      <ScrollView>
        <ImageBackground source={require('../../assets/bg1.jpg')}>
          <View style={{flex: 1, margin: 10}}>
            <Text style={styles.txtTitle}>Posisi yang dilamar : </Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.posisi_user}
            </Text>
            <Text style={styles.txtTitle}>Nama :</Text>
            <Text style={styles.txtDecs}>{dataDetail.dataLogin.name_user}</Text>
            <Text style={styles.txtTitle}>No. KTP :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.no_ktp_user}
            </Text>
            <Text style={styles.txtTitle}>Tempat, Tanggal Lahir :</Text>
            <Text style={styles.txtDecs}>{dataDetail.dataLogin.ttl_user}</Text>
            <Text style={styles.txtTitle}>Jenis Kelamin :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.jenis_kelamin}
            </Text>
            <Text style={styles.txtTitle}>Agama :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.agama_user}
            </Text>
            <Text style={styles.txtTitle}>Golongan Darah :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.goldar_user}
            </Text>
            <Text style={styles.txtTitle}>Status :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.status_user}
            </Text>
            <Text style={styles.txtTitle}>Alamat KTP :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.alamat_ktp}
            </Text>
            <Text style={styles.txtTitle}>Alamat Tinggal :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.alamat_tinggal}
            </Text>
            <Text style={styles.txtTitle}>Email :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.email_user}
            </Text>
            <Text style={styles.txtTitle}>No. Telp :</Text>
            <Text style={styles.txtDecs}>{dataDetail.dataLogin.no_telp}</Text>
            <Text style={styles.txtTitle}>
              Orang terdekat yang dapat dihubungi :
            </Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.orang_terdekat}
            </Text>
            <Text style={styles.txtTitle}>Pendidikan Terakhir :</Text>
            <Text style={styles.txtDecs}>
              Jenjang Pendidikan : {dataDetail.dataLogin.jenjang_pend}, Nama
              Institut : {dataDetail.dataLogin.nama_institut}, Jurusan :{' '}
              {dataDetail.dataLogin.jurusan}, Tahun Lulus :{' '}
              {dataDetail.dataLogin.tahun_lulus}, IPK :{' '}
              {dataDetail.dataLogin.ipk}
            </Text>
            <Text style={styles.txtTitle}>Riwayat Pelatihan :</Text>
            <Text style={styles.txtDecs}>
              Nama Kursus : {dataDetail.dataLogin.nama_kurus}, Sertifikat :{' '}
              {dataDetail.dataLogin.sertifikat}, Jurusan :{' '}
              {dataDetail.dataLogin.tahun_sertif}
            </Text>
            <Text style={styles.txtTitle}>Riwayat Pekerjan :</Text>
            <Text style={styles.txtDecs}>
              Nama Perusahaan : {dataDetail.dataLogin.nama_perusahaan}, Posisi :{' '}
              {dataDetail.dataLogin.posisi_terakhir}, Pendapatan Terakhir :{' '}
              {dataDetail.dataLogin.pendapatan_terakhir}, Tahun :{' '}
              {dataDetail.dataLogin.tahun_bekerja}
            </Text>
            <Text style={styles.txtTitle}>Skill :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.skill_user}
            </Text>
            <Text style={styles.txtTitle}>
              Bersedia ditempatkan di seluruh kantor perusahaan :
            </Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.penempatan_user}
            </Text>
            <Text style={styles.txtTitle}>Penghasilan yang diharapkan :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.penghasilan_user} /Bulan
            </Text>
            <Text style={styles.txtTitle}>Date :</Text>
            <Text style={styles.txtDecs}>{dataDetail.dataLogin.tgl}</Text>
            <Text style={styles.txtTitle}>Hormat Saya :</Text>
            <Text style={styles.txtDecs}>
              {dataDetail.dataLogin.nama_pelamar}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={[styles.btnEdit, {marginTop: 10}]}>
              <Text style={styles.txtBtn}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  img: {
    flex: 1,
  },

  txtHead: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333',
  },

  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF0000',
  },

  txtAdd: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },

  txtDecs: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },

  bgInput: {
    width: '95%',
    margin: 10,
    justifyContent: 'center',
  },

  textInput: {
    paddingLeft: 10,
    height: Platform.OS === 'ios' ? 30 : 35,
    backgroundColor: 'white',
  },

  txtTgl: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
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
