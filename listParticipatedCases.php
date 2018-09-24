<?php
	//$username = 'poke';
	$casesList = array();
	if(isset($_POST['username'])){
		$con = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		$username = $_POST['username'];
		//$sql = "SELECT * FROM APP_CACHE_VIEW WHERE APP_NUMBER = 2809";
		$sql = "SELECT C.APP_NUMBER, C.APP_TITLE,C.APP_PRO_TITLE,C.APP_CURRENT_USER, C.APP_UPDATE_DATE,C.APP_STATUS FROM PMT_EXT_APPLICATION ex, APP_CACHE_VIEW C WHERE ex.USR_USERNAME = '$username' AND C.APP_UID = ex.APP_UID AND C.DEL_INDEX =  (SELECT MAX(DEL_INDEX)  AS MAX_INDEX FROM APP_CACHE_VIEW WHERE APP_UID = ex.APP_UID)";
		//echo $sql;
		$cases = mysqli_query($con,$sql) or die (mysqli_error($con));
		$index = 0;
		if(!empty($cases)){
			foreach($cases as $key){
				/*print_r($key);
				echo "<br/>";
				echo "<br/>";
				echo "<br/>";*/
				$casesList[$index]["APP_UID"] = $key["APP_UID"];
				$casesList[$index]["DEL_INDEX"] = $key["DEL_INDEX"];
				$casesList[$index]["APP_NUMBER"] = $key["APP_NUMBER"];
				$casesList[$index]["PRO_UID"] = $key["PRO_UID"];
				$casesList[$index]["TAS_UID"] = $key["TAS_UID"];
				$casesList[$index]["PRO_TITLE"] = $key["PRO_TITLE"];
				$casesList[$index]["TAS_TITLE"] = $key["TAS_TITLE"];
				$casesList[$index]["PREVIOUS_USR_UID"] = $key["PREVIOUS_USR_UID"];
				$casesList[$index]["DEL_DELEGATE_DATE"] = $key["DEL_DELEGATE_DATE"];
				$casesList[$index]["DEL_TASK_DUE_DATE"] = $key["DEL_TASK_DUE_DATE"];
				$casesList[$index]["SENT_BY"] = $key["SENT_BY"];
				$casesList[$index]["EDIT_LINK"] = $key["EDIT_LINK"];
				$index ++;
			}
		}
		mysqli_close($con);
	}
	echo json_encode(array("caseList" => $casesList, "noCases" => count($casesList)));
?>