 let plus = document.querySelector('.plus'),
     minus = document.querySelector('.minus'),
     num = document.querySelector('.num');
     
     let a = 0;

     plus.addEventListener("click",()=>{
      a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText =a;

     console.log(a);
     });
     minus.addEventListener("click",()=>{
      if(a > 0){
         a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText =a;

      }
     });
////////////////////////////////////////////////////////////////////////////
    /*
$(Document).ready(function(){

      $(".hega").animate({
        top:'10px'
     },2000);

     $(".hega").animate({
         width:'600px'
      },2000);

      $(".hega").animate({
         height:'300px'
      },2000);

      $(".hega").animate({
         borderRadius:'50%'
      },2000);


      $(".hega").animate({
         fontSize:'10px'
      },2000);

      $(".hega").fadeOut(3000);

      
  });   
    
*/



