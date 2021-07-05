//
    jQuery(function($) {
    function logSubmit(event) {
        event.preventDefault();
        //alert(`Form Submitted! Time stamp: ${event.timeStamp}`);
        var _usuario = $.trim($("#user_name").val());
        var _password =$.trim($("#user_pwd").val()); 
        //alert(_usuario)
      }

      if (window.matchMedia("(max-width: 700px)").matches) {
          document.getElementById("site_logo").style.width = "80px";
          document.getElementById("site_logo").style.height = "80px";
        }else{
          document.getElementById("site_logo").style.width = "80px";
        }
      
      const form = document.getElementById('loginform');
      form.addEventListener('submit', logSubmit);
    })
//}); // document ready