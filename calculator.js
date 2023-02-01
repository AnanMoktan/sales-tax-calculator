"use strict"
var $ = (id) => document.getElementById(id);//creating anonymous function

var calculate = function()
{  console.log("called");
   var subtotal = $("Sub_total").value;//storing value from intput
   var taxRate  = document.sales_tax_calcutor_form.Tax_Rate.value; //another way to store value from input 
   var salesTax  = subtotal * taxRate * 0.01;
   document.sales_tax_calcutor_form.Sales_Tax.value=salesTax;
   var total=parseFloat(subtotal) + salesTax;//converting in float and adding to avoid string concatination
   console.log(total);
   document.sales_tax_calcutor_form.Total.value=total;
   console.log(subtotal);
   console.log(taxRate);
   console.log(document.sales_tax_calcutor_form.Sales_Tax.value);
   var errorMessage="";
   console.log(errorMessage);
   if(subtotal==""){
    errorMessage="Subtotal is required";
   } else if(taxRate==""){
    errorMessage="Tax Rate is required";
   }
   console.log(errorMessage);
   if(errorMessage==""){
    //doing nothing if run successfully

   }
   else{
    alert(errorMessage);
   }
}
onload = function(){//functin call onload of page page
    console.log("called");
    $("Calculate").onclick=calculate; 
  

}