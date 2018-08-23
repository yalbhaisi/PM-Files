var requiredDocs = [];
var InvalidDocs = [];
$("#label0000000001").css({"font-size":"25px","text-align":"center","font-weight":"900","background-color":"#2425aa","color":"#fff","padding":"5px 0 0 5px"});
//$("#label0000000001").parent().css({"background-color":"#2425aa"});
function addCssToLabel(control){
  $("#"+control).css({"background-color": "#http://localhost:8087/sysworkflow/en/neoclassic/processes/main2425aa","color": "#ffffff","font-size": "10px","font-stretch": "expanded","line-height": "20px","text-align": "left","padding": "2px 15px"}); 
}
addCssToLabel("label0000000002");
addCssToLabel("label0000000003");
addCssToLabel("label0000000004");
addCssToLabel("label0000000005");
addCssToLabel("label0000000006");

function addStylesToFormLabels(controlId){ 
  $("#"+controlId).find("label").css({"font-size": "12px","font-stretch": "expanded","line-height": "20px","text-align": "left"}); 
}
addStylesToFormLabels("requesterName");

addStylesToFormLabels("requesterPhone");

addStylesToFormLabels("requestSource");
addStylesToFormLabels("requesterEmail");
addStylesToFormLabels("customerName");
addStylesToFormLabels("customerType");
addStylesToFormLabels("customerPhone");
addStylesToFormLabels("customerEmail");
addStylesToFormLabels("dateOfLoss");
addStylesToFormLabels("timeOfLoss");
addStylesToFormLabels("claimType");
addStylesToFormLabels("dateLogged");
addStylesToFormLabels("policyNumber");
addStylesToFormLabels("claimsKey");
addStylesToFormLabels("claimsForm");
addStylesToFormLabels("relManager");
addStylesToFormLabels("damagedVehiclePhotos");
addStylesToFormLabels("estimateOfLoss");
addStylesToFormLabels("otherDocuments");
addStylesToFormLabels("reason_for_claims");
addStylesToFormLabels("listInvalidDocs");
addStylesToFormLabels("showRequiredDocs");
addStylesToFormLabels("estimateOfRepairs");
addStylesToFormLabels("policeReport");
addStylesToFormLabels("certificateOfInsurance");
addStylesToFormLabels("medicalReport");
addStylesToFormLabels("deathCertificate");
addStylesToFormLabels("threeMonthsPaySlip");
addStylesToFormLabels("threeMonthsPaySlip1");
addStylesToFormLabels("medicalBill");
addStylesToFormLabels("purchaseReceipts");
addStylesToFormLabels("replacementInvoice");
addStylesToFormLabels("auditedAccountOfCompany");
addStylesToFormLabels("stockValuationBeforeAfterLoss");
addStylesToFormLabels("statementOfLoss");
addStylesToFormLabels("statementOfClaims");
addStylesToFormLabels("cashBookLedger");
addStylesToFormLabels("securityReport");
addStylesToFormLabels("statementFomEmployee");
addStylesToFormLabels("statementFromWitnesses");
addStylesToFormLabels("evidenceOfAmountStolen");
addStylesToFormLabels("deliveryWayBill");
addStylesToFormLabels("debitNote");
addStylesToFormLabels("photographs");
addStylesToFormLabels("claimLetterFromThirdParty");
addStylesToFormLabels("billOfQuantity");
addStylesToFormLabels("medicalCertCauseDeath");
addStylesToFormLabels("loanRepayment");
addStylesToFormLabels("terminationLetter");
addStylesToFormLabels("appointmentLetter");
addStylesToFormLabels("loanOfferLetter");
addStylesToFormLabels("letterOfIntroduction");
addStylesToFormLabels("deathRegistration");
addStylesToFormLabels("motorRegNo");
addStylesToFormLabels("areDocumentsValid");

function addStlesToLabels(labelId){
  
  //console.log($("#"+labelId).parent().parent());
  $("#"+labelId).parent().parent().css({"border-top-style":"solid","border-top-width":"1px","border-top-color":"#2425aa","padding-top":"5px"});
}
addStlesToLabels("label0000000002");
addStlesToLabels("label0000000003");
addStlesToLabels("label0000000004");
addStlesToLabels("label0000000005");
addStlesToLabels("label0000000006");

$("#button0000000001").click(function(){
	//alert("you clicked me!!");
  $("#3015008285b61d3d710d058012824594").showFormModal();
  $("#3015008285b61d3d710d058012824594").saveForm();
  $("#3015008285b61d3d710d058012824594").hideFormModal();
});

var searchBtn = "<button type='button' name='searchAIMS' id='searchAIMS' class='btn btn-sm btn-info' style='font-size:12px;'>SEARCH</button>";
$("#policyNumber").find("input.form-control").css({"width":"68%"});
$("#policyNumber").find("div.pmdynaform-field-control").append(searchBtn);
$("#searchAIMS").click(function(){
	//$("#3015008285b61d3d710d058012824594").showFormModal();
  alert("you just clicked me");
  fnExcelReport();
});

$("#damagedVehiclePhotos").find("div.pmdynaform-multiplefile-control").css({"padding":"0"});

var uploadedFiles = $("#5884399415b65bff0196aa9086662629").find("div.multiplefile-row");
//console.log(uploadedFiles);
var num = 0;
$.each(uploadedFiles, function(){
  	var parentDiv = $(this).parent().parent();
  	var labelText = parentDiv.find("label > span.textlabel").html();
	var container = $(this).find("div.multiplefile-container");
  	container.find("div.multiplefile-buttons").css({"width":"6%"});
  	container.append("<div><input id='validateCheckbox"+num+"' class='validateCheckbox' type='checkbox' name='checkbox' value='1' data-toggle='tooltip' title='Is this Document NOT Valid? Please Tick to mark as invalid!' onchange=\"placeInvalidDocInCart(\'"+labelText+"\','validateCheckbox"+num+"')\"></div>");
  	num ++;
});
num = 0;

function addCheckboxOnFileInput(fileControlId, index){
  var control = $("#"+fileControlId).find("div.link-container");
  var labelText = $("#"+fileControlId).find("label > span.textlabel").html();
  control.find("a").css({"width":"90%"});
  control.append("<div><input id='validateCheckbox_1"+index+"' class='validateCheckbox' type='checkbox' name='checkbox' value='1' data-toggle='tooltip' title='Is this Document NOT Valid? Please Tick to mark as invalid!' onchange=\"placeInvalidDocInCart(\'"+labelText+"\','validateCheckbox_1"+index+"')\"></div>");
  
}
addCheckboxOnFileInput('claimsForm',0);
addCheckboxOnFileInput('estimateOfRepairs',1);
addCheckboxOnFileInput('policeReport',2);
addCheckboxOnFileInput('certificateOfInsurance',3);
addCheckboxOnFileInput('medicalReport',4);
addCheckboxOnFileInput('deathCertificate',5);
addCheckboxOnFileInput('threeMonthsPaySlip',6);
addCheckboxOnFileInput('threeMonthsPaySlip1',7);
addCheckboxOnFileInput('medicalBill',8);
addCheckboxOnFileInput('auditedAccountOfCompany',9);
addCheckboxOnFileInput('statementOfLoss',10);
addCheckboxOnFileInput('statementOfClaims',11);
addCheckboxOnFileInput('statementFomEmployee',12);
addCheckboxOnFileInput('deliveryWayBill',13);
addCheckboxOnFileInput('debitNote',14);
addCheckboxOnFileInput('claimLetterFromThirdParty',15);
addCheckboxOnFileInput('billOfQuantity',16);
addCheckboxOnFileInput('medicalCertCauseDeath',17);
addCheckboxOnFileInput('deathRegistration',18);
$('[data-toggle="tooltip"]').tooltip();

function hideFormParentDiv(controlId){
	$("#"+controlId).parent().parent().hide();
}
function showFormParentDiv(controlId){
	$("#"+controlId).parent().parent().show();
}

function getFormControlLabel(controlId){
	var label = $("#"+controlId).find("label.control-label");
  	var text = label.find("span.textlabel").html();
  return text;
}

function hideDivs(){
  hideFormParentDiv('damagedVehiclePhotos');
  hideFormParentDiv("estimateOfLoss");
  hideFormParentDiv("otherDocuments");
  hideFormParentDiv("reason_for_claims");
  //hideFormParentDiv("listInvalidDocs");
  hideFormParentDiv("estimateOfRepairs");
  hideFormParentDiv("policeReport");
  hideFormParentDiv("certificateOfInsurance");
  hideFormParentDiv("medicalReport");
  hideFormParentDiv("deathCertificate");
  hideFormParentDiv("threeMonthsPaySlip");
  hideFormParentDiv("threeMonthsPaySlip1");
  hideFormParentDiv("medicalBill");
  hideFormParentDiv("purchaseReceipts");
  hideFormParentDiv("replacementInvoice");
  hideFormParentDiv("auditedAccountOfCompany");
  hideFormParentDiv("stockValuationBeforeAfterLoss");
  hideFormParentDiv("statementOfLoss");
  hideFormParentDiv("statementOfClaims");
  hideFormParentDiv("cashBookLedger");
  hideFormParentDiv("securityReport");
  hideFormParentDiv("statementFomEmployee");
  hideFormParentDiv("statementFromWitnesses");
  hideFormParentDiv("evidenceOfAmountStolen");
  hideFormParentDiv("deliveryWayBill");
  hideFormParentDiv("debitNote");
  hideFormParentDiv("photographs");
  hideFormParentDiv("claimLetterFromThirdParty");
  hideFormParentDiv("billOfQuantity");
  hideFormParentDiv("medicalCertCauseDeath");
  hideFormParentDiv("loanRepayment");
  hideFormParentDiv("terminationLetter");
  hideFormParentDiv("appointmentLetter");
  hideFormParentDiv("loanOfferLetter");
  hideFormParentDiv("letterOfIntroduction");
  hideFormParentDiv("deathRegistration");
}

hideDivs();
var showText = "LIST OF REQUIRED DOCUMENTS "+$("#claimType").getText();
function ToggleMotorDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
    
  	showFormParentDiv("damagedVehiclePhotos");
	showFormParentDiv("estimateOfRepairs");
	showFormParentDiv("policeReport");
    showFormParentDiv("motorRegNo");
    var dTextL = getFormControlLabel('damagedVehiclePhotos');
    showText =  dTextL;
    requiredDocs.push(dTextL);
    var eTextL = getFormControlLabel('estimateOfRepairs');
    showText = showText +"\n" + eTextL;
    requiredDocs.push(eTextL);
    var pTextL = getFormControlLabel('policeReport');
    showText = showText +"\n" + pTextL;
    requiredDocs.push(pTextL);
    var cTextL = getFormControlLabel('claimsForm');
    showText = showText +"\n" + cTextL;
    requiredDocs.push(cTextL);
    console.log(requiredDocs);
    $("#showRequiredDocs").setValue(showText);
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}
function ToggleGroupLifeDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
   
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("medicalCertCauseDeath");
	showFormParentDiv("deathRegistration");
	showFormParentDiv("policeReport");
    showFormParentDiv("otherDocuments");
    
    var cTextL = getFormControlLabel('claimsForm');
    showText = cTextL;
    requiredDocs.push(cTextL);
    var mTextL = getFormControlLabel('medicalCertCauseDeath');
    showText =  showText +"\n" +mTextL;
    requiredDocs.push(mTextL);
    var dTextL = getFormControlLabel('deathRegistration');
    showText =  showText +"\n" +dTextL;
    requiredDocs.push(dTextL);
    var pTextL = getFormControlLabel('policeReport');
    showText =  showText +"\n" +pTextL;
    requiredDocs.push(pTextL);
    var oTextL = getFormControlLabel('otherDocuments');
    showText =  showText +"\n" +oTextL;
    requiredDocs.push(oTextL);
    $("#showRequiredDocs").setValue(showText);
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleIndividualLifeDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
   
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("medicalReport");
    showFormParentDiv("medicalBill");
    showFormParentDiv("photographs");   
    showFormParentDiv("medicalCertCauseDeath");
	showFormParentDiv("deathRegistration");
	showFormParentDiv("policeReport");
    showFormParentDiv("otherDocuments");
    
    var cTextL = getFormControlLabel('claimsForm');
    showText = showText +"\n" + cTextL;
    requiredDocs.push(cTextL);
    var mTextL = getFormControlLabel('medicalReport');
    showText =  mTextL;
    requiredDocs.push(mTextL);
    var mbTextL = getFormControlLabel('medicalBill');
    showText =  mbTextL;
    requiredDocs.push(mbTextL);
    var phTextL = getFormControlLabel('photographs');
    showText =  phTextL;
    requiredDocs.push(phTextL);
    var mcTextL = getFormControlLabel('medicalCertCauseDeath');
    showText =  mcTextL;
    requiredDocs.push(mcTextL);
    var dTextL = getFormControlLabel('deathRegistration');
    showText =  dTextL;
    requiredDocs.push(dTextL);
    var pTextL = getFormControlLabel('policeReport');
    showText =  pTextL;
    requiredDocs.push(pTextL);
    var oTextL = getFormControlLabel('otherDocuments');
    showText =  oTextL;
    requiredDocs.push(oTextL);
    $("#showRequiredDocs").setValue(showText);
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleCreditLifeDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("loanRepayment");
    showFormParentDiv("terminationLetter");
    showFormParentDiv("appointmentLetter"); 
    showFormParentDiv("loanOfferLetter");
    showFormParentDiv("letterOfIntroduction");
    
    showFormParentDiv("medicalCertCauseDeath");
	showFormParentDiv("deathRegistration");
	showFormParentDiv("policeReport");
    showFormParentDiv("otherDocuments");
    
    var cTextL = getFormControlLabel('claimsForm');
    showText = cTextL;
    requiredDocs.push(cTextL);
    var lTextL = getFormControlLabel('loanRepayment');
    showText =  showText +"\n" +lTextL;
    requiredDocs.push(lTextL);
    var tTextL = getFormControlLabel('terminationLetter');
    showText =  showText +"\n" +tTextL;
    requiredDocs.push(tTextL);
    var aTextL = getFormControlLabel('appointmentLetter');
    showText =  showText +"\n" +aTextL;
    requiredDocs.push(aTextL);
    var loffTextL = getFormControlLabel('loanOfferLetter');
    showText =  showText +"\n" +loffTextL;
    requiredDocs.push(loffTextL);
    var lettTextL = getFormControlLabel('letterOfIntroduction');
    showText =  showText +"\n" +lettTextL;
    requiredDocs.push(lettTextL);
        var medTextL = getFormControlLabel('medicalCertCauseDeath');
    showText =  showText +"\n" +medTextL;
    requiredDocs.push(medTextL);
    var dTextL = getFormControlLabel('deathRegistration');
    showText =  showText +"\n" +dTextL;
    requiredDocs.push(dTextL);
    var pTextL = getFormControlLabel('policeReport');
    showText =  showText +"\n" +pTextL;
    requiredDocs.push(pTextL);
    var oTextL = getFormControlLabel('otherDocuments');
    showText =  showText +"\n" +oTextL;
    requiredDocs.push(oTextL);
    $("#showRequiredDocs").setValue(showText);
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleMarineCargoDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("certificateOfInsurance");
    
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleMarineHullDocuments(isToShow){
  if(isToShow == "1"){
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
    hideDivs();
  	showFormParentDiv("damagedVehiclePhotos");
    var dTextL = getFormControlLabel('damagedVehiclePhotos');
    requiredDocs.push(dTextL);
    showText = showText +"\n" + dTextL
    var cTextL = getFormControlLabel('claimsForm');
    requiredDocs.push(cTextL);
    console.log(requiredDocs);
    showText = showText +"\n" + cTextL
    $("#showRequiredDocs").setValue(showText);
    
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}


function ToggleGrPersAccdDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("medicalReport");
	showFormParentDiv("medicalBill");
	showFormParentDiv("threeMonthsPaySlip1");
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}
function ToggleGrPersAccdDocuments1(isToShow){
  if(isToShow == "1"){
   
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
    
  	showFormParentDiv("medicalReport");
	showFormParentDiv("deathCertificate");
	showFormParentDiv("threeMonthsPaySlip");
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleHouseholderDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("damagedVehiclePhotos");
	showFormParentDiv("purchaseReceipts");
	showFormParentDiv("replacementInvoice");
    
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleConseqLossDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("auditedAccountOfCompany");
	showFormParentDiv("stockValuationBeforeAfterLoss");
	
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleBurglaryDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("damagedVehiclePhotos");
	showFormParentDiv("statementOfLoss");
	showFormParentDiv("policeReport");
    showFormParentDiv("estimateOfRepairs");
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleMoneyInsuranceDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("cashBookLedger");
	showFormParentDiv("statementOfClaims");
	showFormParentDiv("policeReport");
    showFormParentDiv("securityReport");
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleFidelityDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("evidenceOfAmountStolen");
	showFormParentDiv("statementFomEmployee");
	showFormParentDiv("policeReport");
    showFormParentDiv("statementFromWitnesses");
	
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleGoodsInTransDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("deliveryWayBill");
	showFormParentDiv("debitNote");
	showFormParentDiv("policeReport");
    showFormParentDiv("photographs");
	
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function TogglePublicLiabilityDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
   
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("claimLetterFromThirdParty");
    
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function TogglePlantAllRiskDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("estimateOfRepairs");
	
    showFormParentDiv("photographs");
	
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleContractorAllRiskDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("billOfQuantity");
	showFormParentDiv("estimateOfRepairs");
    showFormParentDiv("photographs");
	
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleAllRiskDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("purchaseReceipts");
	showFormParentDiv("replacementInvoice");
    showFormParentDiv("policeReport");
	showFormParentDiv("estimateOfLoss");
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function ToggleMachineryBreakdownDocuments(isToShow){
  if(isToShow == "1"){
    hideDivs();
    
    $("#showRequiredDocs").find("label.control-label > span.textlabel").html(showText);
  	showFormParentDiv("replacementInvoice");
	showFormParentDiv("estimateOfRepairs");
    showFormParentDiv("purchaseReceipts");
	showFormParentDiv("photographs");
  }else if(isToShow == "0"){
  	hideDivs();
    
  }
}

function claimTypeChangeListener(){
	var claimType = $("#claimType").getValue();
  
  if(claimType == '1'){
  	ToggleAllRiskDocuments('1');
  }else if(claimType == '2'){
  	ToggleBurglaryDocuments('1');
  }else if(claimType == '3'){
  	ToggleContractorAllRiskDocuments('1');
  }else if(claimType == '4' || claimType == '10'){
  	ToggleGrPersAccdDocuments('1');
  }else if(claimType == '5' || claimType == '16'){
  	ToggleGrPersAccdDocuments1('1');
  }else if(claimType == '6'){
  	ToggleMarineCargoDocuments('1');
  }else if(claimType == '7'){
  	ToggleMarineHullDocuments('1');
  }else if(claimType == '8'){
  	ToggleMoneyInsuranceDocuments('1');
  }else if(claimType == '9'){
  	ToggleMotorDocuments('1');
  }else if(claimType == '11'){
  	TogglePlantAllRiskDocuments('1');
  }else if(claimType == '13'){
  	TogglePublicLiabilityDocuments('1');
  }else if(claimType == '14'){
  	ToggleGrPersAccdDocuments('1');
  }else if(claimType == '15'){
  	ToggleGrPersAccdDocuments1('1');
  }else if(claimType == '17'){
  	ToggleMarineHullDocuments('1');
  }else if(claimType == '18'){
  	ToggleHouseholderDocuments('1');
  }else if(claimType == '19'){
  	ToggleConseqLossDocuments('1');
  }else if(claimType == '20'){
  	ToggleFidelityDocuments('1');
  }else if(claimType == '21'){
  	ToggleGoodsInTransDocuments('1');
  }else if(claimType == '22'){
  	ToggleMachineryBreakdownDocuments('1');
  }else if(claimType == '23'){
  	ToggleGroupLifeDocuments('1');
  }else if(claimType == '24'){
  	ToggleIndividualLifeDocuments('1');
  }else if(claimType == '25'){
  	ToggleCreditLifeDocuments('1');
  }else{
  	hideDivs();
  }
}

claimTypeChangeListener();

//$("#claimType").setOnchange(claimTypeChangeListener);
$("#registerClaim").find("button").attr("disabled","disabled");
$("#submit0000000001").find("button").attr("disabled","disabled");
var confirmDiag = "<div style='display:none;'><div id='n-dialog-confirm' title='Are you sure there are missing or invalid Documents?'>";
confirmDiag = confirmDiag+ "<p><span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>This option will be saved and can NOT be altered. Are you sure?</p>";
confirmDiag = confirmDiag + "</div>";
confirmDiag = confirmDiag +"<div id='y-dialog-confirm' title='Are you sure all Documents are valid/provided?'>";
confirmDiag = confirmDiag+ "<p><span class='ui-icon ui-icon-alert' style='float:left; margin:12px 12px 20px 0;'></span>Once confirmed, You can proceed to register claim & Generate Claims Key. Are you sure?</p>";
confirmDiag = confirmDiag + "</div></div>";
$("#registerClaim").parent().parent().append(confirmDiag);

function showConfirmD(){
  var areDocumentsValid = $("#areDocumentsValid").getValue();
  if(areDocumentsValid == '0'){
    $( "#n-dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 475,
      modal: true,
      buttons: {
        "Yes": function() {
          $("#5884399415b65bff0196aa9086662629").saveForm();
          $("#areDocumentsValid").find("input").attr("disabled","disabled");
          $(".validateCheckbox").attr("disabled","disabled");
          $("#submit0000000001").find("button").removeAttr("disabled");
          $( this ).dialog( "close" );
        },
        "No ": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  }else if(areDocumentsValid == '1'){
    $( "#y-dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 475,
      modal: true,
      buttons: {
        "Yes": function() {
          $("#5884399415b65bff0196aa9086662629").saveForm();
          $("#areDocumentsValid").find("input").attr("disabled","disabled");
          $(".validateCheckbox").attr("disabled","disabled");
          $("#registerClaim").find("button").removeAttr("disabled");
          $( this ).dialog( "close" );
        },
        "No ": function() {
          $( this ).dialog( "close" );
        }
      }
    });
  }
}

$("#areDocumentsValid").setOnchange(showConfirmD);
var areDocumentsValid = $("#areDocumentsValid").getValue();
if(areDocumentsValid == '0' || areDocumentsValid == '1'){
  $("#areDocumentsValid").find("input").attr("disabled","disabled");
  $(".validateCheckbox").attr("disabled","disabled");
}
if(areDocumentsValid == '0'){
	$("#submit0000000001").find("button").removeAttr("disabled");
}
function getTextIndext(text){
  var result =-1;
  for(var j = 0; j < InvalidDocs.length; j++){
    if(InvalidDocs[j] == text){
    	result = j;
      break;
    }
  }
  return result;
}
function placeInvalidDocInCart(textToAdd,checkboxId){
  	var tIndex = getTextIndext(textToAdd);
  
  if(tIndex != -1){
  	InvalidDocs.splice(tIndex,1);
  }
	//InvalidDocs.pop(textToAdd);
  if($("#"+checkboxId).is(":checked")){
      InvalidDocs.push(textToAdd);
    }	
  //console.log(InvalidDocs);
  var invalidDocText = "";
  for(var i = 0; i< InvalidDocs.length; i++){
  	invalidDocText = invalidDocText + InvalidDocs[i] + "\n";
  }
  $("#listInvalidDocs").setValue(invalidDocText);
}

$("#5884399415b65bff0196aa9086662629").find("input[type=text],select,textarea").css({"padding":"2px 5px","font-size":"0.85em"});
$("#5884399415b65bff0196aa9086662629").find("textarea").css({"padding":"2px 5px","font-size":"0.60em"});

console.log($("#claimType").getText());