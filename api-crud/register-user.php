<?php


if($_SERVER['REQUEST_METHOD']=='POST'){

  $name_user = $_POST['name_user'];
  $email_user = $_POST['email_user'];
  $password_user = $_POST['password_user'];
  $id_user = $_POST['id_user'];


  include "koneksi.php";

  $sql = "INSERT INTO tbl_user (id_user,name_user,email_user,password_user) 
  VALUES ('$id_user','$name_user','$email_user','$password_user')";

$query = mysqli_query($koneksi, $sql);

if ($query) {
  # code...
  echo json_encode(array("response"=>"Success"));
} 
 else {
  echo json_encode(array("response"=>"Failed"));
}

}