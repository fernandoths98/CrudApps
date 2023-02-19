<?php

if($_SERVER['REQUEST_METHOD']=='POST'){

  $id_user = $_POST['id_user'];
  $name_user = $_POST['name_user'];
  $posisi_user = $_POST['posisi_user'];
  $no_ktp_user = $_POST['no_ktp_user'];
  $ttl_user = $_POST['ttl_user'];
  $jenis_kelamin = $_POST['jenis_kelamin'];
  $agama_user = $_POST['agama_user'];
  $goldar_user = $_POST['goldar_user'];
  $status_user = $_POST['status_user'];
  $alamat_ktp = $_POST['alamat_ktp'];
  $alamat_tinggal = $_POST['alamat_tinggal'];
  $email_user = $_POST['email_user'];
  $no_telp = $_POST['no_telp'];
  $orang_terdekat = $_POST['orang_terdekat'];
  $jenjang_pend = $_POST['jenjang_pend'];
  $nama_institut = $_POST['nama_institut'];
  $jurusan = $_POST['jurusan'];
  $tahun_lulus = $_POST['tahun_lulus'];
  $ipk = $_POST['ipk'];
  $nama_kursus = $_POST['nama_kursus'];
  $sertifikat = $_POST['sertifikat'];
  $tahun_sertif = $_POST['tahun_sertif'];
  $nama_perusahaan = $_POST['nama_perusahaan'];
  $posisi_terakhir = $_POST['posisi_terakhir'];
  $pendapatan_terakhir = $_POST['pendapatan_terakhir'];
  $tahun_bekerja = $_POST['tahun_bekerja'];
  $skill_user = $_POST['skill_user'];
  $penempatan_user = $_POST['penempatan_user'];
  $penghasilan_user = $_POST['penghasilan_user'];
  $tgl = $_POST['tgl'];
  $nama_pelamar = $_POST['nama_pelamar'];
  $status_keaktifan = $_POST['status_keaktifan'];

  include "koneksi.php";

  $sql = "UPDATE tbl_user 
  SET name_user='$name_user',
  posisi_user='$posisi_user',
  no_ktp_user='$no_ktp_user',
  ttl_user='$ttl_user',
  jenis_kelamin='$jenis_kelamin',
  agama_user='$agama_user',
  goldar_user='$goldar_user',
  status_user='$status_user',
  alamat_ktp='$alamat_ktp',
  alamat_tinggal='$alamat_tinggal',
  email_user='$email_user',
  no_telp='$no_telp',
  orang_terdekat='$orang_terdekat',
  jenjang_pend='$jenjang_pend',
  nama_institut='$nama_institut',
  jurusan='$jurusan',
  tahun_lulus='$tahun_lulus',
  ipk='$ipk',
  nama_kursus='$nama_kursus',
  sertifikat='$sertifikat',
  tahun_sertif='$tahun_sertif',
  nama_perusahaan='$nama_perusahaan',
  posisi_terakhir='$posisi_terakhir',
  pendapatan_terakhir='$pendapatan_terakhir',
  tahun_bekerja='$tahun_bekerja',
  skill_user='$skill_user',
  penempatan_user='$penempatan_user',
  penghasilan_user='$penghasilan_user',
  tgl='$tgl',
  nama_pelamar='$nama_pelamar',
  status_keaktifan='$status_keaktifan'
  WHERE id_user = '$id_user'";

$query = mysqli_query($koneksi, $sql);

if ($query) {
  # code...
  echo json_encode(array("response"=>"Success"));
} 
 else {
  echo json_encode(array("response"=>"Failed"));
}

}