<?php
session_start();
include "koneksi.php";

if($_SERVER['REQUEST_METHOD']=='POST'){

	$email_admin = $_POST['email_admin'];
	$password_admin = $_POST['password_admin'];
	$sql = "SELECT * FROM tbl_admin 
    WHERE email_admin='$email_admin' and password_admin='$password_admin'";
	$query = mysqli_query($koneksi,$sql);
    $check = mysqli_num_rows( $query );
	if ($check != 0) {
  		// echo json_encode(array("response"=>"Success"));
		
		  $row=mysqli_fetch_assoc( $query );
		  $dataUser=(object) array_merge((array) array("response"=>"Success"), (array) $row);
		  $id_admin=$row['id_admin'];
		  $_SESSION['id_admin'] = $id_admin;
		  echo json_encode( $dataUser );
		  
} 
 else {
  echo json_encode(array("response"=>"Failed"));
	}
}