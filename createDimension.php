<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Create Dimension</title>
</head>

<body>
<form name="form1" method="post" action="">
	<table width="60%" border="0" cellspacing="2" cellpadding="2">
  <tr>
    <th scope="row">SECTION</th>
    <td><label>
      <select name="dimenSection" id="dimenSection">
        <option value="0">-Select Section-</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="H">H</option>
      </select>
    </label></td>
  </tr>
  <tr>
    <th scope="row">NAME</th>
    <td><label>
      <input type="text" name="dimenName" id="dimenName" class="form-control">
    </label></td>
  </tr>
  <tr>
    <th scope="row">GOALS &amp; OBJECTIVES</th>
    <td><label>
      <textarea name="dimenGoals" id="dimenGoals" cols="45" rows="5" class="form-control"></textarea>
    </label></td>
  </tr>
  <tr>
    <th scope="row">YEAR</th>
    <td><label>
      <select name="dimenYear" id="dimenYear" class="form-control">
        <option value="0">-Select Year-</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
      </select>
    </label></td>
  </tr>
  <tr>
    <th scope="row" align="right"><label>
      <input type="submit" name="submit" id="submit" value="Submit" class="btn btn-success">
    </label></th>
    <td><input type="reset" name="submit2" id="submit2" value="Cancel" class="btn btn-warning"></td>
  </tr>
</table>

</form>
</body>
</html>
