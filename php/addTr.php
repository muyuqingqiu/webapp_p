﻿<?php
	header("Content-type: text/html; charset=utf-8");
	mysql_connect('localhost','root','');
	mysql_select_db('qingqiu');
	mysql_query('set names utf8');

	$num = $_REQUEST['num'];
	$start = $_REQUEST['start'];
	$sql = "select * from tuniu_tr limit $start , $num";
	$query = mysql_query($sql);
	while($row = mysql_fetch_assoc($query)){
		$arr[] = $row;
	}
	echo json_encode($arr);
?>
