<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Manage Dimensionst</title>
</head>

<body>
<div class="container">

<table width="100%" border="0" cellspacing="0" cellpadding="0" class="table table-striped">
  <tr>
    <th scope="col">S/N</th>
    <th scope="col">SECTION</th>
    <th scope="col">NAME</th>
    <th scope="col">GOALS & OBJECTIVES</th>
    <th scope="col">YEAR</th>
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
    <td>&nbsp;</td>
  </tr>
  <?php }
  ?>
  <tr>
    <td colspan="6"> <?= $sno?> Record(s) Found</td>
    
  </tr>
  <?php 
  }
  mysqli_close($con);
  ?>
</table>
</div>
</body>
</html>
