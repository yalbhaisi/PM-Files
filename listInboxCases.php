<?php
	//$username = 'poke';
	$casesList = array();
	if(isset($_POST['username'])){
		$con = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		$username = $_POST['username'];
		//$sql = "SELECT * FROM APP_CACHE_VIEW WHERE APP_NUMBER = 2809";
		$sql = "SELECT D.APP_UID, D.DEL_INDEX, D.APP_NUMBER, D.PRO_UID, D.TAS_UID, P.PRO_TITLE,T.TAS_TITLE, D.PREVIOUS_USR_UID,D.DEL_DELEGATE_DATE, D.DEL_TASK_DUE_DATE,D.APP_TITLE, CONCAT(U.USR_FIRSTNAME,' ',U.USR_LASTNAME) AS SENT_BY, EX.EDIT_LINK FROM PMT_EXT_APP_DELEGATION EX, APP_CACHE_VIEW D,  USERS U, PROCESS P, TASK T WHERE EX.USR_USERNAME = '$username' AND D.APP_UID = EX.APP_UID AND D.DEL_INDEX = EX.DEL_INDEX AND P.PRO_UID = D.PRO_UID AND U.USR_UID = D.PREVIOUS_USR_UID AND T.TAS_UID = D.TAS_UID AND D.DEL_THREAD_STATUS = 'OPEN'";
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