function marks(gradScore, hscScore, sscScore, candidateName) {
   var res = gradScore>=70 || hscScore>=80 || sscScore>90
        ? `Congratulations ${candidateName} you are Eligible for TCS interview`
       :`Unfortunately ${candidateName} you are not eligible gor interview`
    console.log(res); 
   // if (gradScore>=70 || hscScore>=80 || sscScore>90) {
     //    console.log(`Congratulations ${candidateName} you are Eligible for TCS interview`);
      //}else{
      //  console.log(`Unfortunately ${candidateName} you are not eligible gor interview`);
      //}

    }

marks(80, 56, 90, "Adhiraj");
marks(70, 65, 55, "Shubham");
marks(60, 79, 88, "Rahul")