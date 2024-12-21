// set document domain to allow iframe to work
document.domain = "ubc.ca";

var ssc_anim_lock = false;
var open_ssc_text = null;

function sscTitleToggle(which, oneAtATime) {
  // actions for ssc headlines
  // add click event
  var elm = $('.'+ which+'-title');

  elm.each(function() {

      $(this).click(function() {
              ssc_anim_lock = true;

              active_ssc_link = this; //NOSONAR Global Variable

              if ($('#' + $(this).attr('id') + '_text').css('display') == 'none') {
                  // close open text
                 if (oneAtATime && open_ssc_text) {
                   $(open_ssc_text).slideUp(400, function() {

                      id_arr = $(this).attr('id').split('_'); //NOSONAR Global Variable

                      $('#' + id_arr[0] + '_' + id_arr[1]).addClass('toggleOpen');
                      $('#' + id_arr[0] + '_' + id_arr[1]).removeClass('toggleClosed');

                  });
                 }


                  $('#' + $(this).attr('id') + '_text').slideDown(400, function() {

                      // change icon
                      id_arr = $(this).attr('id').split('_');
                      $('#' + id_arr[0] + '_' + id_arr[1]).addClass('toggleClosed');
                      $('#' + id_arr[0] + '_' + id_arr[1]).removeClass('toggleOpen');

                      open_ssc_text = this;

					  if (window.location != window.parent.location) {
						// need to resize the iFrame (mainly for the calculator in the Grades Summary page)
						parent.resizeIframeDiv();
					  }

                      // unlock
                      ssc_anim_lock = false;

                  });
              }
              else
              {
                  $('#' + $(this).attr('id') + '_text').slideUp(400, function() {

                      // change icon
                      id_arr = $(this).attr('id').split('_');

                      $('#' + id_arr[0] + '_' + id_arr[1]).addClass('toggleOpen');
                      $('#' + id_arr[0] + '_' + id_arr[1]).removeClass('toggleClosed');

					  if (window.location != window.parent.location) {
						// need to resize the iFrame (mainly for the calculator in the Grades Summary page)
						parent.resizeIframeDiv();
					  }

                      // unlock
                      ssc_anim_lock = false;

                  });
              }
			  
      });

  });

}
function markMessagesAsRead() {
    if (messagesToMark) {
        if ($('#messages-unread').css('display') != 'none') {
            $.post("SRVPostMessageRead", { msgid: messagesToMarkAsRead, studno: messagesStudNo });
        }
    }
    messagesToMark = false ; //NOSONAR Global Variable
}

function logoutRedirect(url) {
  $.post("SSCMain.jsp?logout=logout", {});

  try {
    for (let i=0; i<serversToLogout.length; i++) {
        $.post(serversToLogout[i] + "?ssclogout=ssclogout");
    }
  } catch (e) {}

  window.location.href = url;
  return false;
}

function openFAQDialog(item, parent, type) {
    $("#faq-dialog").remove();
    if (!type) {
      type = 3;
    }
    $.get("/sscportal/faqhelp.jsp?type=" + type, function(data){
        // create a modal dialog with the data
     $(data).dialog({
        modal: true,
        width: 500,
        height: 500,
        maxHeight:500
     });
      sscTitleToggle("faq",false);

      $('#' + parent + "_title").click();
//      alert('#' + parent + "-title " + $('#' + parent + "-title").size())
      $('#' + item + "ch_title").click();
      });


}

function highlightFAQ(textIn) {
  var text = textIn.toLowerCase();
  var highlight = text != "";

  $(".faq-title").css("background-color", "white");
  $(".faq-content").css("background-color", "white");

  $(".faq-title").each(
      function (i) {
        if (highlight && $(this).html().toLowerCase().indexOf(text) > 0) {
          $(this).css("background-color", "#f5dca0");
        }
      }
   );

  $(".faq-content").each(
      function (i) {
        if (highlight && $(this).html().toLowerCase().indexOf(text) > 0) {
          $(this).prev().css("background-color", "#f5dca0");
          if ($(this).children().size() == 0) {
            $(this).css("background-color", "#f5dca0");
          }
        }
      }
   );
}