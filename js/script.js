
(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
    var nav = document.querySelector("nav");
window.addEventListener('scroll',function(){
    if(window.pageYOffset >100){
        nav.classList.add('bg-light','shadow');
    }else{
        nav.classList.remove('bg-light','shadow');
    }
    
});

    
function validateEmail420669000000330023()
{
var form = document.forms['WebToLeads420669000000330023'];
var emailFld = form.querySelectorAll('[ftype=email]');
var i;
for (i = 0; i < emailFld.length; i++)
{
var emailVal = emailFld[i].value;
if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
{
var atpos=emailVal.indexOf('@');
var dotpos=emailVal.lastIndexOf('.');
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
{
alert('Please enter a valid email address. ');
emailFld[i].focus();
return false;
}
}
}
return true;
}

  function checkMandatory420669000000330023() {
var mndFileds = new Array('Last Name','Mobile');
var fldLangVal = new Array('Last\x20Name','Mobile');
for(i=0;i<mndFileds.length;i++) {
  var fieldObj=document.forms['WebToLeads420669000000330023'][mndFileds[i]];
  if(fieldObj) {
if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
if(fieldObj.type =='file')
{
alert('Please select a file to upload.');
fieldObj.focus();
return false;
}
alert(fldLangVal[i] +' cannot be empty.');
          fieldObj.focus();
          return false;
}  else if(fieldObj.nodeName=='SELECT') {
        if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
alert(fldLangVal[i] +' cannot be none.');
fieldObj.focus();
return false;
   }
} else if(fieldObj.type =='checkbox'){
if(fieldObj.checked == false){
alert('Please accept  '+fldLangVal[i]);
fieldObj.focus();
return false;
   }
}
try {
     if(fieldObj.name == 'Last Name') {
name = fieldObj.value;
    }
} catch (e) {}
    }
}
if(!validateEmail420669000000330023()){return false;}
document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
}

function tooltipShow420669000000330023(el){
var tooltip = el.nextElementSibling;
var tooltipDisplay = tooltip.style.display;
if(tooltipDisplay == 'none'){
var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
for(i=0; i<allTooltip.length; i++){
allTooltip[i].style.display='none';
}
tooltip.style.display = 'block';
}else{
tooltip.style.display='none';
}
}
