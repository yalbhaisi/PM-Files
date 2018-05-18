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

<body>
<img src="http://192.168.0.21/sysworkflow/en/neoclassic/setup/showLogoFile.php?id=c29saWRfbG9nby5wbmc=" class="logo_company">
<div class="container">
<h3 style="background-color:#ccc;padding:5px;">MANAGE DIMENSIONS</h3>
<table width="75%" border="0" cellspacing="0" cellpadding="0" class="table table-striped table-bordered">
  <tr>
    <th scope="col">S/N</th>
    <th scope="col">SECTION</th>
    <th scope="col">NAME</th>
    <th scope="col">GOALS & OBJECTIVES</th>
	<th scope="col">YEAR</th>
    <th scope="col">MEASURES</th>
    <th scope="col">&nbsp;</th>
  </tr>
  <?php
    $con = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
    $result = mysqli_query($con,"SELECT * FROM PMT_PSS_DIMENSIONS ORDER BY DIM_YEAR,DIM_LETTER");
    $sno = 0;
    if(!empty($result)){
      foreach ($result as $key) {
        # code...
        $sno ++ ;
  ?>
  <tr>
    <td><?=$sno?></td>
    <td><?=$key['DIM_LETTER']?></td>
    <td><?=$key['DIM_NAME']?></td>
    <td><?=$key['DIM_GOALS_OBJECTIVES']?></td>
    <td><?=$key['DIM_YEAR']?></td>
	<td><a href="http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/manageMeasures.php?reqDimUID=<?=$key['DIM_UID']?>" data-toggle="tooltip" title="Click to View Measures"><span class='glyphicon glyphicon-list-alt'></span></a></td>
    <td>
	<input type ='checkbox' name='deleteDim' id="<?=$key['DIM_UID']?>" value="<?=$key['DIM_UID']?>" />
	<a href="http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/updateDimension.php?reqDimUID=<?=$key['DIM_UID']?>" data-toggle="tooltip" title="Click to Edit"><span class='glyphicon glyphicon-edit'></span></a>
	</td>
  </tr>
  <?php }
  ?>
  <tr>
    <td colspan="6"> <?= $sno?> Record(s) Found </td>
    <td>
	<a href='#' id='deleteSelected' class='btn btn-danger btn-sm' data-toggle="tooltip" title="Click to Delete Selected Items!"><span class='glyphicon glyphicon-trash'></span></a>
	</td>
  </tr>
  <?php 
  }
  
  ?>
</table>
<a href = "http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/createDimension.php" class="btn btn-sm btn-info"> <span class="glyphicon glyphicon-plus-sign"> [ Add New ] </span><a>
</div>

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
	$("#deleteSelected").click(function(){
		//alert("you click me!!");
		var chk = $("input:checkbox[name=deleteDim]:checked");
		//alert("no of items selected: "+chk.length);
		if(chk.length > 0){
			var option = confirm("Are you sure you want to delete the selected items?? This will not be reversed");
			alert("you selected: "+option);
			chk.each(function () {
				alert("Id: " + $(this).attr("id") + " Value: " + $(this).val());
			});
		}else{
			alert("You have not selected Item, please select one or more items to delete");
		}
	});
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