<?php
if(isset($_SESSION["USER_LOGGED"]) && $_SESSION["USER_LOGGED"] != '' && isset($_SESSION["USR_USERNAME"]) && $_SESSION["USR_USERNAME"] != ''){
?>
<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
<title>REFUND REPORT</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
</head>

<body>
<img src="http://192.168.0.21/sysworkflow/en/neoclassic/setup/showLogoFile.php?id=c29saWRfbG9nby5wbmc=" class="logo_company">
<div class="container">
<h3 style="background-color:#ccc;padding:5px;">AUTO POST REFUND MASTER</h3>
<table class="table table-bordered table-striped" id = "autoPostMaster" width="90%">
	<thead>
		<tr>
			<th>CONTROL_NO</th>
			<th>COST_TYPE</th>
			<th>BRANCH</th>
			<th>OFFICE</th>
			<th>VOUCHER_YEAR</th>
			<th>VOUCHER_MONTH</th>
			<th>VOUCHER_DATE</th>
			<th>CURRENCY</th>
			<th>REMARKS</th>
			<th>VALUE</th>
			<th>SBU</th>
			<th>PERCENT</th>
			<th>POLICY_KEY</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>
<button type='button' id='generate'>Download Excel</button>
<input type = 'hidden' id="fileName" name="fileName">
</div>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
	(function($){
    $.fn.extend({
        csvExport: function(options) {
            this.defaultOptions = {
                escapeContent: true,
                title: $("#fileName").val(),//'Exported_Table',
                beforeStart: function(table) {},
                onStringReady: function(currentString) {}
            };

            let settings = $.extend({}, this.defaultOptions, options);

            //MULTIPLE OBJECTS HANDLER
            return this.each(function() {
                let $this = $(this);
                let real = {x:0,y:0};
                let toExpand = {x:[],y:[]}; // Objects to insert : { ori : {x:0,y:O}, toDo : xxx, done : xxx }
                let theString = '';
                
                //BEFORESTART CALLBACK
                settings.beforeStart.call(undefined,$this);
                
                $('tr',$this).each(function(){ 
                	let currentTR = $(this);
                	
                	currentTR.children().each(function(){ 
                		let currentTD = $(this);
                		
                		spanChecker();
                		
                		/* CURRENT TD HANDLER __START */
                		if(currentTD.is('[colspan]')){
                			toExpand.x.push({
                							ori:{x:real.x,y:real.y},
                							toDo:+currentTD.attr('colspan'),
                							done:1
                						});
                		}
                	
		            	if(currentTD.is('[rowspan]')){
		        			toExpand.y.push({
		        							ori:{x:real.x,y:real.y},
		        							toDo:+currentTD.attr('rowspan'),
		        							done:1
		        						});
		        		}
                	
                		theString+='"'+contentCheckup(currentTD.html())+'",';
                		real.x++;
                		/* CURRENT TD HANDLER __END */
                		
                	});
                	
                	theString = theString.substring(0, theString.length - 1);
                	theString+='\r\n';
            		real.x=0;
            		real.y++;
                });
                
                settings.onStringReady.call(undefined,theString);
                
                var a = document.createElement('a');
        	    a.href = 'data:application/vnd.ms-excel;base64,' + window.btoa(unescape(encodeURIComponent(theString)));
        	    a.download = settings.title + '.csv';
        	    a.click();
    
    			function spanChecker(){
    				let colspanHandler = true;
            		while(colspanHandler){
						let broken = false;
						
						for(let direction of ['y','x']){
							let other = direction == 'y' ? 'x' : 'y';

							for(let i = 0; i < toExpand[direction].length; i++){
                        	
								if(deleteChecker(toExpand[direction],i) && i > 0){ // Move on if task done
									i--;
								} 
								
								if(toExpand[direction].length > 0){
									if(real[other] == toExpand[direction][i].ori[other]){
										if(real[direction] == toExpand[direction][i].ori[direction] + toExpand[direction][i].done){
											theString+='"",';
											toExpand[direction][i].done++;
											broken=true;
											real.x++;
											break;
										}
									}
								}
							}
						}
                        
                        if(!broken) colspanHandler=false;
            		}
    			}

            });
            
            function deleteChecker(parent,pos){
            	if(parent[pos].toDo == parent[pos].done){
            		parent.splice(pos,pos+1);
            		return true;
            	}
            	else return false;
            }
            
            function contentCheckup(data){
            	data = data.replace(/\./g, ',');
				if(settings.escapeContent) return data.replace(/([\\"])/g,'\\$1');
				else return data;
			}
            
        }
    });
})(jQuery);

$( "#generate" ).click(function() {
	$("#fileName").val("AUTO POST REFUND MASTER");
  $('#autoPostMaster').csvExport();
});
</script>
</body>
</html>
<?php
}else {
	
	echo "Access Denied !!";
}
?>