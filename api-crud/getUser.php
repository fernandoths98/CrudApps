<?php
require_once('koneksi.php');

if($_SERVER['REQUEST_METHOD']=='GET') {
  $sql = "SELECT * FROM tbl_user ORDER BY id_user ASC";
  $res = mysqli_query($koneksi,$sql);
  $result = array();
  while($row = mysqli_fetch_array($res)){
    array_push($result, array
    ('id_user'=>$row["id_user"], 
    'name_user'=>$row["name_user"],
    'ttl_user'=>$row["ttl_user"], 
    'posisi_user'=>$row["posisi_user"],
    'status_keaktifan'=>$row["status_keaktifan"] ));
  }
  echo json_encode($result);
  mysqli_close($koneksi);
}