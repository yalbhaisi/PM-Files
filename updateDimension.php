<?php
if(isset($_SESSION["USER_LOGGED"]) && $_SESSION["USER_LOGGED"] != '' && isset($_SESSION["USR_USERNAME"]) && $_SESSION["USR_USERNAME"] != ''){
?>
<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
<title>Create Dimension</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
</head>
<?php

$con = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
$msg = "";
$css = "";
$dimenSection = "";
$dimenName = "";
$dimenGoals = "";
$dimenYear = "";
$reqDimUID = "";
if($_GET["reqDimUID"]){
	$reqDimUID = $_GET["reqDimUID"];
	$dimension = mysqli_query($con,"SELECT * FROM PMT_PSS_DIMENSIONS WHERE DIM_UID = '$reqDimUID'");
	if($dimension){
		foreach($dimension as $key){
			$dimenSection = $key["DIM_LETTER"];
			$dimenName = $key["DIM_NAME"];
			$dimenGoals = $key["DIM_GOALS_OBJECTIVES"];
			$dimenYear = $key["DIM_YEAR"];
		}
		
	}
}
	if(isset($_POST['submit'])){
		$dimenSection = isset($_POST['dimenSection']) ? $_POST['dimenSection'] : "";
		$dimenName = isset($_POST['dimenName']) ? $_POST['dimenName'] : "";
		$dimenGoals = isset($_POST['dimenGoals']) ? $_POST['dimenGoals'] : "";
		$dimenYear = isset($_POST['dimenYear']) ? $_POST['dimenYear'] : "";
		if($dimenName != "" && $dimenGoals != "" && $reqDimUID != "")  {
			
			
			
				$update = mysqli_query($con,"UPDATE PMT_PSS_DIMENSIONS SET DIM_NAME = '$dimenName', DIM_GOALS_OBJECTIVES = '$dimenGoals' WHERE DIM_UID = '$reqDimUID' ");
				if($update){
					$msg = "Dimension Updated successfully";
					$css = "success";
					
				}else{
					$msg = "Failed to Update Dimension, please try again!!";
					$css = "danger";
				}
			
				
		}else{
			$msg = "All Fields are required";
			$css = "warning";
		}
		
	}
?>
<body>
<img src="http://192.168.0.21/sysworkflow/en/neoclassic/setup/showLogoFile.php?id=c29saWRfbG9nby5wbmc=" class="logo_company">
<div class="container">
<h3 style="background-color:#ccc;padding:5px;">CREATE NEW DIMENSION</h3>
<h6 class="bg-<?=$css?>" style="padding:5px;"><?=$msg?></h6>
<form name="form1" method="post" action="">
	<table width="60%" border="0" cellspacing="2" cellpadding="2">
  <tr>
    <th scope="row">SECTION</th>
    <td><label>
      <select name="dimenSection" id="dimenSection" class="form-control" style="width:250px;" disabled>
        <option value="0">-Select Section-</option>
        <option value="A" <?=($dimenSection == "A")? "selected" : "" ?>>A</option>
        <option value="B" <?=($dimenSection == "B")? "selected" : "" ?>>B</option>
        <option value="C" <?=($dimenSection == "C")? "selected" : "" ?>>C</option>
        <option value="D" <?=($dimenSection == "D")? "selected" : "" ?>>D</option>
        <option value="E" <?=($dimenSection == "E")? "selected" : "" ?>>E</option>
        <option value="F" <?=($dimenSection == "F")? "selected" : "" ?>>F</option>
        <option value="G" <?=($dimenSection == "G")? "selected" : "" ?>>G</option>
        <option value="H" <?=($dimenSection == "H")? "selected" : "" ?>>H</option>
      </select>
    </label></td>
  </tr>
  <tr>
    <th scope="row">NAME</th>
    <td><label>
      <input type="text" name="dimenName" id="dimenName" class="form-control" style="width:250px;" value="<?=$dimenName?>">
    </label></td>
  </tr>
  <tr>
    <th scope="row">GOALS &amp; OBJECTIVES</th>
    <td><label>
      <textarea name="dimenGoals" id="dimenGoals" class="form-control" style="width:250px;"><?=$dimenGoals?></textarea>
    </label></td>
  </tr>
  <tr>
    <th scope="row">YEAR</th>
    <td><label>
      <select name="dimenYear" id="dimenYear" class="form-control" style="width:250px;" disabled>
        <option value="0">-Select Year-</option>
        <option value="2017" <?=($dimenYear == "2017")? "selected" : "" ?>>2017</option>
        <option value="2018" <?=($dimenYear == "2018")? "selected" : "" ?>>2018</option>
        <option value="2019" <?=($dimenYear == "2019")? "selected" : "" ?>>2019</option>
        <option value="2020" <?=($dimenYear == "2020")? "selected" : "" ?>>2020</option>
        <option value="2021" <?=($dimenYear == "2021")? "selected" : "" ?>>2021</option>
        <option value="2022" <?=($dimenYear == "2022")? "selected" : "" ?>>2022</option>
        <option value="2023" <?=($dimenYear == "2023")? "selected" : "" ?>>2023</option>
        <option value="2024" <?=($dimenYear == "2024")? "selected" : "" ?>>2024</option>
        <option value="2025" <?=($dimenYear == "2025")? "selected" : "" ?>>2025</option>
        <option value="2026" <?=($dimenYear == "2026")? "selected" : "" ?>>2026</option>
        <option value="2027" <?=($dimenYear == "2027")? "selected" : "" ?>>2027</option>
        <option value="2028" <?=($dimenYear == "2028")? "selected" : "" ?>>2028</option>
      </select>
    </label></td>
  </tr>
  <tr>
    <th scope="row" style="text-align:right; padding-right:10px;">
      <input type="submit" name="submit" id="submit" value="Submit" class="btn btn-success">
    </th>
    <td><input type="reset" name="submit2" id="submit2" value="Cancel" class="btn btn-warning"></td>
  </tr>
</table>
<a href = "http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/manageDynamens.php" class="btn btn-sm btn-info"> <span class="glyphicon glyphicon-circle-arrow-left"> [ Back ] </span><a>
</form>
</div>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>
</body>
</html>
<?php
mysqli_close($con);
}else {
	
	echo "Access Denied !!";
}
?>