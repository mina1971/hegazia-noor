  
    function calecNoor(){
      let past =parseInt (document.getElementById('past').value);
      let present =parseInt(document.getElementById('present').value);
      if (present > past){
         document.getElementById('result').value=((present - past)* 0.843);

        }
        else if (present < past){
         document.write(" present must > past ")
        }
    }
    calecNoor();

    function calecGaas(){
      let past_g =parseInt (document.getElementById('past_g').value);
      let present_g =parseInt(document.getElementById('present_g').value);
      if (present_g > past_g){
         document.getElementById('result_g').value = ((present_g - past_g) * 3);

        }
        else if (present_g < past_g){
         document.write(" present_g must > past_g ")
        }
    }
    calecGaas();

    