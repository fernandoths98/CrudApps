import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {contextApp} from '../utils/ContextApps';

const ProfileScreen = ({navigation}) => {
  const getUser = useContext(contextApp);
  const {idUser} = getUser.dataLogin.id_user;
  const tgl = new Date().toDateString();

  const [data, setData] = useState({
    id_user: getUser.dataLogin.id_user,
    posisi_user: '',
    name_user: '',
    no_ktp_user: '',
    ttl_user: '',
    jenis_kelamin: '',
    agama_user: '',
    goldar_user: '',
    status_user: '',
    alamat_ktp: '',
    alamat_tinggal: '',
    email_user: '',
    no_telp: '',
    orang_terdekat: '',
    jenjang_pend: '',
    nama_institut: '',
    jurusan: '',
    tahun_lulus: '',
    ipk: '',
    nama_kursus: '',
    sertifikat: '',
    tahun_sertif: '',
    nama_perusahaan: '',
    posisi_terakhir: '',
    pendapatan_terakhir: '',
    tahun_bekerja: '',
    skill_user: '',
    penempatan_user: '',
    penghasilan_user: '',
    tgl: '',
    nama_pelamar: '',
    check_name_user: false,
    check_posisi_user: false,
    check_no_ktp_user: false,
    check_ttl_user: false,
    check_jenis_kelamin: false,
    check_agama_user: false,
    check_goldar_user: false,
    check_status_user: false,
    check_alamat_ktp: false,
    check_alamat_tinggal: false,
    check_email_user: false,
    check_no_telp: false,
    check_orang_terdekat: false,
    check_jenjang_pend: false,
    check_nama_institut: false,
    check_jurusan: false,
    check_tahun_lulus: false,
    check_ipk: false,
    check_nama_kursus: false,
    check_sertifikat: false,
    check_tahun_sertif: false,
    check_nama_perusahaan: false,
    check_posisi_terakhir: false,
    check_pendapatan_terakhir: false,
    check_tahun_bekerja: false,
    check_skill_user: false,
    check_penempatan_user: false,
    check_penghasilan_user: false,
    check_tgl: false,
    check_nama_pelamar: false,
  });

  const posisi_userChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        posisi_user: val,
        check_posisi_user: true,
      });
    } else {
      setData({
        ...data,
        posisi_user: val,
        check_posisi_user: false,
      });
    }
  };

  const name_userChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        name_user: val,
        check_name_user: true,
      });
    } else {
      setData({
        ...data,
        name_user: val,
        check_name_user: false,
      });
    }
  };

  const noKtpChange = val => {
    if (val.length > 16) {
      setData({
        ...data,
        no_ktp_user: val,
        check_no_ktp_user: true,
      });
    } else {
      setData({
        ...data,
        no_ktp_user: val,
        check_no_ktp_user: false,
      });
    }
  };

  const ttlUserChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        ttl_user: val,
        check_ttl_user: true,
      });
    } else {
      setData({
        ...data,
        ttl_user: val,
        check_ttl_user: false,
      });
    }
  };

  const jenisKelaminChange = val => {
    if (val.length > 2) {
      setData({
        ...data,
        jenis_kelamin: val,
        check_jenis_kelamin: true,
      });
    } else {
      setData({
        ...data,
        jenis_kelamin: val,
        check_jenis_kelamin: false,
      });
    }
  };

  const agamaChange = val => {
    if (val.length > 16) {
      setData({
        ...data,
        agama_user: val,
        check_agama_user: true,
      });
    } else {
      setData({
        ...data,
        agama_user: val,
        check_agama_user: false,
      });
    }
  };

  const goldarChange = val => {
    if (val.length > 2) {
      setData({
        ...data,
        goldar_user: val,
        check_goldar_user: true,
      });
    } else {
      setData({
        ...data,
        goldar_user: val,
        check_goldar_user: false,
      });
    }
  };

  const statusChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        status_user: val,
        check_status_user: true,
      });
    } else {
      setData({
        ...data,
        status_user: val,
        check_status_user: false,
      });
    }
  };

  const alamatKTPChange = val => {
    if (val.length > 100) {
      setData({
        ...data,
        alamat_ktp: val,
        check_alamat_ktp: true,
      });
    } else {
      setData({
        ...data,
        alamat_ktp: val,
        check_alamat_ktp: false,
      });
    }
  };

  const alamatTinggalChange = val => {
    if (val.length > 100) {
      setData({
        ...data,
        alamat_tinggal: val,
        check_alamat_tinggal: true,
      });
    } else {
      setData({
        ...data,
        alamat_tinggal: val,
        check_alamat_tinggal: false,
      });
    }
  };

  const noTelpChange = val => {
    if (val.length > 17) {
      setData({
        ...data,
        no_telp: val,
        check_no_telp: true,
      });
    } else {
      setData({
        ...data,
        no_telp: val,
        check_no_telp: false,
      });
    }
  };

  const orangTerdekatChange = val => {
    if (val.length > 100) {
      setData({
        ...data,
        orang_terdekat: val,
        check_orang_terdekat: true,
      });
    } else {
      setData({
        ...data,
        orang_terdekat: val,
        check_orang_terdekat: false,
      });
    }
  };

  const jenjangPendChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        jenjang_pend: val,
        check_jenjang_pend: true,
      });
    } else {
      setData({
        ...data,
        jenjang_pend: val,
        check_jenjang_pend: false,
      });
    }
  };

  const institutChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        nama_institut: val,
        check_nama_institut: true,
      });
    } else {
      setData({
        ...data,
        nama_institut: val,
        check_nama_institut: false,
      });
    }
  };

  const jurusanChange = val => {
    if (val.length > 6) {
      setData({
        ...data,
        jurusan: val,
        check_jurusan: true,
      });
    } else {
      setData({
        ...data,
        jurusan: val,
        check_jurusan: false,
      });
    }
  };

  const tahunLulusChange = val => {
    if (val.length > 6) {
      setData({
        ...data,
        tahun_lulus: val,
        check_tahun_lulus: true,
      });
    } else {
      setData({
        ...data,
        tahun_lulus: val,
        check_tahun_lulus: false,
      });
    }
  };

  const ipkChange = val => {
    if (val.length > 6) {
      setData({
        ...data,
        ipk: val,
        check_ipk: true,
      });
    } else {
      setData({
        ...data,
        ipk: val,
        check_ipk: false,
      });
    }
  };

  const namaKursusChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        nama_kursus: val,
        check_nama_kursus: true,
      });
    } else {
      setData({
        ...data,
        nama_kursus: val,
        check_nama_kursus: false,
      });
    }
  };

  const sertifikatChange = val => {
    if (val.length > 6) {
      setData({
        ...data,
        sertifikat: val,
        check_sertifikat: true,
      });
    } else {
      setData({
        ...data,
        sertifikat: val,
        check_sertifikat: false,
      });
    }
  };

  const tahunSertifChange = val => {
    if (val.length > 6) {
      setData({
        ...data,
        tahun_sertif: val,
        check_tahun_sertif: true,
      });
    } else {
      setData({
        ...data,
        tahun_sertif: val,
        check_tahun_sertif: false,
      });
    }
  };

  const namaPerusahanChange = val => {
    if (val.length > 100) {
      setData({
        ...data,
        nama_perusahaan: val,
        check_nama_perusahaan: true,
      });
    } else {
      setData({
        ...data,
        nama_perusahaan: val,
        check_nama_perusahaan: false,
      });
    }
  };

  const posisiTerakhirChange = val => {
    if (val.length > 100) {
      setData({
        ...data,
        posisi_terakhir: val,
        check_posisi_terakhir: true,
      });
    } else {
      setData({
        ...data,
        posisi_terakhir: val,
        check_posisi_terakhir: false,
      });
    }
  };

  const pendapatanChange = val => {
    if (val.length > 25) {
      setData({
        ...data,
        pendapatan_terakhir: val,
        check_pendapatan_terakhir: true,
      });
    } else {
      setData({
        ...data,
        pendapatan_terakhir: val,
        check_pendapatan_terakhir: false,
      });
    }
  };

  const tahunBekerjaChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        tahun_bekerja: val,
        check_tahun_bekerja: true,
      });
    } else {
      setData({
        ...data,
        tahun_bekerja: val,
        check_tahun_bekerja: false,
      });
    }
  };

  const skillChange = val => {
    if (val.length > 255) {
      setData({
        ...data,
        skill_user: val,
        check_skill_user: true,
      });
    } else {
      setData({
        ...data,
        skill_user: val,
        check_skill_user: false,
      });
    }
  };

  const penempatanUserChange = val => {
    if (val.length > 6) {
      setData({
        ...data,
        penempatan_user: val,
        check_penempatan_user: true,
      });
    } else {
      setData({
        ...data,
        penempatan_user: val,
        check_penempatan_user: false,
      });
    }
  };

  const penghasilanUserChange = val => {
    if (val.length > 25) {
      setData({
        ...data,
        penghasilan_user: val,
        check_penghasilan_user: true,
      });
    } else {
      setData({
        ...data,
        penghasilan_user: val,
        check_penghasilan_user: false,
      });
    }
  };

  const namaPelamarChange = val => {
    if (val.length > 50) {
      setData({
        ...data,
        nama_pelamar: val,
        check_nama_pelamar: true,
      });
    } else {
      setData({
        ...data,
        nama_pelamar: val,
        check_nama_pelamar: false,
      });
    }
  };

  const emailValidation = val => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(val)) {
      setData({
        ...data,
        email_user: val,
        check_email_user: true,
      });
    } else if (!regEx.test(val) && val !== '') {
      setData({
        ...data,
        email_user: val,
        check_email_user: false,
      });
    } else {
    }
  };

  let formEdit = new FormData();
  formEdit.append('id_user', data.id_user);
  formEdit.append('posisi_user', data.posisi_user);
  formEdit.append('name_user', data.name_user);
  formEdit.append('no_ktp_user', data.no_ktp_user);
  formEdit.append('ttl_user', data.ttl_user);
  formEdit.append('jenis_kelamin', data.jenis_kelamin);
  formEdit.append('agama_user', data.agama_user);
  formEdit.append('goldar_user', data.goldar_user);
  formEdit.append('status_user', data.status_user);
  formEdit.append('alamat_ktp', data.alamat_ktp);
  formEdit.append('alamat_tinggal', data.alamat_tinggal);
  formEdit.append('email_user', data.email_user);
  formEdit.append('no_telp', data.no_telp);
  formEdit.append('orang_terdekat', data.orang_terdekat);
  formEdit.append('jenjang_pend', data.jenjang_pend);
  formEdit.append('nama_institut', data.nama_institut);
  formEdit.append('jurusan', data.jurusan);
  formEdit.append('tahun_lulus', data.tahun_lulus);
  formEdit.append('ipk', data.ipk);
  formEdit.append('nama_kursus', data.nama_kursus);
  formEdit.append('sertifikat', data.sertifikat);
  formEdit.append('tahun_sertif', data.tahun_sertif);
  formEdit.append('nama_perusahaan', data.nama_perusahaan);
  formEdit.append('posisi_terakhir', data.posisi_terakhir);
  formEdit.append('pendapatan_terakhir', data.pendapatan_terakhir);
  formEdit.append('tahun_bekerja', data.tahun_bekerja);
  formEdit.append('skill_user', data.skill_user);
  formEdit.append('penempatan_user', data.penempatan_user);
  formEdit.append('penghasilan_user', data.penghasilan_user);
  formEdit.append('tgl', tgl);
  formEdit.append('nama_pelamar', data.nama_pelamar);
  formEdit.append('status_keaktifan', 'Tidak Aktif');

  const onUpdateProfile = async () => {
    console.log('Data Update : ', formEdit);
    await fetch('http://192.168.0.106/api-crud/update-user.php', {
      method: 'POST',
      body: formEdit,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('Log : ', responseJson);
        if (responseJson.response === 'Success') {
          Alert.alert('CRUD App', 'Success Edit CV', [
            {text: 'OK', onPress: () => navigation.navigate('Home')},
          ]);
          console.log('Log : ', responseJson);
        } else {
          alert('Edit Profile Failed');
        }
      });
  };

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
        <View style={{flex: 1, margin: 10}}>
          <Text style={styles.txtTitle}>Posisi yang dilamar : </Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Posisi"
            style={styles.textInput}
            onChangeText={val => posisi_userChange(val)}
          />
          <Text style={styles.txtTitle}>Nama :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Nama Lengkap"
            maxLength={50}
            style={styles.textInput}
            onChangeText={val => name_userChange(val)}
          />
          <Text style={styles.txtTitle}>No. KTP :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Nomor KTP"
            inputMode="numeric"
            maxLength={16}
            style={styles.textInput}
            onChangeText={val => noKtpChange(val)}
          />
          <Text style={styles.txtTitle}>Tempat, Tanggal Lahir :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Jakarta, dd/mm/yyyy"
            maxLength={45}
            style={styles.textInput}
            onChangeText={val => ttlUserChange(val)}
          />
          <Text style={styles.txtTitle}>Jenis Kelamin :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="L/P"
            maxLength={1}
            style={styles.textInput}
            onChangeText={val => jenisKelaminChange(val)}
          />
          <Text style={styles.txtTitle}>Agama :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Agama"
            maxLength={16}
            style={styles.textInput}
            onChangeText={val => agamaChange(val)}
          />
          <Text style={styles.txtTitle}>Golongan Darah :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Gol. Darah"
            maxLength={2}
            style={styles.textInput}
            onChangeText={val => goldarChange(val)}
          />
          <Text style={styles.txtTitle}>Status :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Status"
            style={styles.textInput}
            onChangeText={val => statusChange(val)}
          />
          <Text style={styles.txtTitle}>Alamat KTP :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Alamat KTP"
            maxLength={50}
            style={styles.textInput}
            onChangeText={val => alamatKTPChange(val)}
          />
          <Text style={styles.txtTitle}>Alamat Tinggal :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Alamat Tinggal"
            maxLength={50}
            style={styles.textInput}
            onChangeText={val => alamatTinggalChange(val)}
          />
          <Text style={styles.txtTitle}>Email :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Email"
            inputMode="email"
            style={styles.textInput}
            onChangeText={emailValidation}
          />
          <Text style={styles.txtTitle}>No. Telp :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="No. Telp"
            inputMode="numeric"
            style={styles.textInput}
            onChangeText={val => noTelpChange(val)}
          />
          <Text style={styles.txtTitle}>
            Orang terdekat yang dapat dihubungi :
          </Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Nama, No. Telp"
            maxLength={60}
            style={styles.textInput}
            onChangeText={val => orangTerdekatChange(val)}
          />
          <Text style={styles.txtTitle}>Pendidikan Terakhir :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Jenjang"
            maxLength={16}
            style={styles.textInput}
            onChangeText={val => jenjangPendChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Nama Institut"
            maxLength={25}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => institutChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Jurusan"
            maxLength={50}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => jurusanChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Tahun Lulus"
            inputMode="numeric"
            maxLength={4}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => tahunLulusChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="IPK"
            maxLength={5}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => ipkChange(val)}
          />
          <Text style={styles.txtTitle}>Riwayat Pelatihan :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Nama Kursus"
            maxLength={20}
            style={styles.textInput}
            onChangeText={val => namaKursusChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Sertifikat (Ada/Tidak)"
            maxLength={5}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => sertifikatChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Tahun"
            inputMode="numeric"
            maxLength={4}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => tahunSertifChange(val)}
          />
          <Text style={styles.txtTitle}>Riwayat Pekerjan :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Nama Perusahaan"
            maxLength={50}
            style={styles.textInput}
            onChangeText={val => namaPerusahanChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Posisi Terakhir"
            maxLength={25}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => posisiTerakhirChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Pendapatan Terakhir"
            inputMode="numeric"
            maxLength={16}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => pendapatanChange(val)}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Tahun"
            maxLength={25}
            style={[styles.textInput, {marginTop: 10}]}
            onChangeText={val => tahunBekerjaChange(val)}
          />
          <Text style={styles.txtTitle}>Skill :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Skill"
            style={styles.textInput}
            onChangeText={val => skillChange(val)}
          />
          <Text style={styles.txtTitle}>
            Bersedia ditempatkan di seluruh kantor perusahaan :
          </Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Ya / Tidak"
            maxLength={5}
            style={styles.textInput}
            onChangeText={val => penempatanUserChange(val)}
          />
          <Text style={styles.txtTitle}>Penghasilan yang diharapkan :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Pernghasilan /Bulan"
            maxLength={16}
            style={styles.textInput}
            onChangeText={val => penghasilanUserChange(val)}
          />
          <Text style={styles.txtTitle}>Date :</Text>
          <Text style={styles.txtTgl}>{tgl}</Text>
          <Text style={styles.txtTitle}>Hormat Saya :</Text>
          <TextInput
            placeholderTextColor="black"
            placeholder="Nama Pelamar"
            maxLength={25}
            style={styles.textInput}
            onChangeText={val => namaPelamarChange(val)}
          />
          <TouchableOpacity
            onPress={onUpdateProfile}
            style={[styles.btnEdit, {marginTop: 10}]}>
            <Text style={styles.txtBtn}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  txtHead: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333333',
  },

  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  txtAdd: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
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
