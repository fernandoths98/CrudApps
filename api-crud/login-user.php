<?php
session_start();
include "koneksi.php";

if($_SERVER['REQUEST_METHOD']=='POST'){

	$email_user = $_POST['email_user'];
	$password_user = $_POST['password_user'];
	$sql = "SELECT * FROM tbl_user 
    WHERE email_user='$email_user' and password_user='$password_user'";
	$query = mysqli_query($koneksi,$sql);
    $check = mysqli_num_rows( $query );
	if ($check != 0) {
  		// echo json_encode(array("response"=>"Success"));
		
		  $row=mysqli_fetch_assoc( $query );
		  $dataUser=(object) array_merge((array) array("response"=>"Success"), (array) $row);
		  $id_user=$row['id_user'];
		  $_SESSION['id_user'] = $id_user;
		  echo json_encode( $dataUser );
		  
} 
 else {
  echo json_encode(array("response"=>"Failed"));
	}
}