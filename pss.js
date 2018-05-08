var measContents = "";
var measContents1 = "";
var measCount = 0;
var Dimensions = [];
function loadMeasures(dimUID){
  var measCont = "";
  var measCont1 = "";
  
  $.ajax({
    //url:"http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/loadMeasures.php",
    url:"http://localhost:8087/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/loadMeasures.php",
    dataType:"json",
    data:{dimUID:dimUID},
    type:"POST",
    success:function(meas){
      //var content = "";
      //alert("passed dimension is: "+meas.noMeasures);
      measCount = meas.noMeasures;
      var x = 0;
      $.each(meas.measures, function(i, item) {

          //alert(item.DIM_UID);
        if(x == 0){
          measCont += "<td style='border:1px solid #ccc;font-size:9px'>"+item.MEAS_NAME+"</td>";
          measCont += "<td align='center' style='border:1px solid #ccc;font-size:9px'>"+item.MEAS_METRICS+"</td>";
          measCont += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' id='weighting"+dimUID+item.MEA_UID+"' name='weighting"+dimUID+"[]' /></td>";
          measCont += "<td align='center' rowspan='"+measCount+"' style='border:1px solid #ccc;font-size:9px'><input type='text' id='totalWT"+dimUID+"' style='width:90px' readonly /></td>";
          measCont += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont += "<td align='center' rowspan='"+measCount+"' style='border:1px solid #ccc;font-size:9px'><input type='text' id='sum"+dimUID+"' style='width:90px' readonly /></td>";

          measContents = measCont;
          //alert("contents: "+measContents);
        }else{
          measCont1 += "<tr>";
          measCont1 += "<td style='border:1px solid #ccc;font-size:9px'>"+item.MEAS_NAME+"</td>";
          measCont1 += "<td align='center' style='border:1px solid #ccc;font-size:9px'>"+item.MEAS_METRICS+"</td>";
          measCont1 += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont1 += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' id='weighting"+dimUID+item.MEA_UID+"' name='weighting"+dimUID+"[]' /></td>";
          //measCont1 += "<td rowspan='"+measCount+"' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont1 += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont1 += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          measCont1 += "<td align='center' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
          //measCont1 += "<td rowspan='"+measCount+"' style='border:1px solid #ccc;font-size:9px'><input type='text' style='width:90px' /></td>";
		  measCont1 += "</tr>";	
          measContents1 = measCont1;
        }
        
        x ++;
      });
      //alert("contents for "+dimUID+": "+measContents);
    },
    async: false
   
  }); 
  //alert("contents of measures: " + measContents);
}

$.ajax({
  //url:"http://192.168.0.21/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/loadDimensions.php",
  url:"http://localhost:8087/sysworkflow/en/neoclassic/5720443015a9fa7df2b1a13010604258/loadDimensions.php",
  dataType:"json",
  success:function(dimen){
  	var content = "";
    Dimensions = dimen.dimensions;
    $.each(dimen.dimensions, function(i, item) {
         
      loadMeasures(item.DIM_UID);
      content += "<tr>";
      content += "<td rowspan='"+measCount+"' style='border:1px solid #ccc;font-size:9px;'>"+item.DIM_LETTER+"</td>";
      content += "<td rowspan='"+measCount+"' style='border:1px solid #ccc;font-size:9px;'>"+item.DIM_NAME+"</td>";
      content += "<td rowspan='"+measCount+"' style='border:1px solid #ccc;font-size:9px;'>"+item.DIM_GOALS_OBJECTIVES+"</td>";
      /*if(measContents == ""){
      	measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
        measContents += "<td style='border:1px solid #ccc;font-size:9px'>&nbsp;</td>";
      }*/
      content += measContents;
      
      measCount = 0;
      measContents = "";
      content += "</tr>";
      content += measContents1;
      measContents1 = "";
      
	});
    $("#contentArea").html(content);
  },
  async: false
});
var y = 1;
$.each(Dimensions,function(i,item){
  
  $("input[name='weighting"+item.DIM_UID+"[]']").each(function() {
      //values.push($(this).val());
      //$("#weighting"+item.DIM_UID+y).maskNumber();
      y++;

  });
});