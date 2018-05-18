<?php
if(isset($_SESSION["USER_LOGGED"]) && $_SESSION["USER_LOGGED"] != '' && isset($_SESSION["USR_USERNAME"]) && $_SESSION["USR_USERNAME"] != ''){
?>
<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
<title>Manage Dimensionst</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
</head>
<?php

$con = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
$measures = array();
$reqDimUID = "";
$dimenName = "";
$dimenSection = "";
if(isset($_GET['reqDimUID'])){
	$reqDimUID = $_GET['reqDimUID'];
	$dimension = mysqli_query($con,"SELECT * FROM PMT_PSS_DIMENSIONS WHERE DIM_UID = '$reqDimUID'");
	if($dimension){
		foreach($dimension as $key){			
			$dimenName = $key["DIM_NAME"];	
			$dimenSection = $key["DIM_LETTER"];			
		}
		$measures = mysqli_query($con,"SELECT * FROM PMT_PSS_MEASURES WHERE DIM_UID = '$reqDimUID'");
	}
	
	
	
}
?>
<body>
<img src="http://192.168.0.21/sysworkflow/en/neoclassic/setup/showLogoFile.php?id=c29saWRfbG9nby5wbmc=" class="logo_company">
<div class="container">
<h3 style="background-color:#ccc;padding:5px;">MANAGE MEASURES UNDER SECTION <?=$dimenSection?> (<?=$dimenName?>)</h3>
<table width="75%" border="0" cellspacing="0" cellpadding="0" class="table table-striped table-bordered">
  <tr>
    <th scope="col">S/N</th>
    
    <th scope="col">NAME</th>
    <th scope="col">METRICS</th>
	<th scope="col">FORMULA</th>
    
    <th scope="col">&nbsp;</th>
  </tr>
  <?php
    
    $sno = 0;
    if($measures){
      foreach ($measures as $key) {
        # code...
        $sno ++ ;
		$formula = "";
		if($key['MEA_CALC_FORM'] == 1){
			$formula = "";
			
		}else{
			$formula = "";
		}
  ?>
  <tr>
    <td><?=$sno?></td>
    
    <td><?=$key['MEAS_NAME']?></td>
    <td><?=$key['MEAS_METRICS']?></td>
    <td><?=$formula?></td>
	<td>
	<input type ='checkbox' name='deleteDim' id="<?=$key['MEA_UID']?>" value="<?=$key['MEA_UID']?>" />
	<a href="http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/updateMeasure.php?meaUID=<?=$key['MEA_UID']?>" data-toggle="tooltip" title="Click to Edit"><span class='glyphicon glyphicon-edit'></span></a>
	</td>
  </tr>
  <?php }
  ?>
  <tr>
    <td colspan="4"> <?= $sno?> Record(s) Found </td>
    <td>
	<a href='#' class='btn btn-danger btn-sm' data-toggle="tooltip" title="Click to Delete Selected Items!"><span class='glyphicon glyphicon-trash'></span></a>
	</td>
  </tr>
	<?php }?>
</table>
<a href = "http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/createMeasure.php" class="btn btn-sm btn-info"> <span class="glyphicon glyphicon-plus-sign"> [ Add New ] </span><a>
<a href = "http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/manageDynamens.php" class="btn btn-sm btn-info"> <span class="glyphicon glyphicon-circle-arrow-left"> [ Back ] </span><a>
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