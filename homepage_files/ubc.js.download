// set document domain to allow iframe to work
document.domain = "ubc.ca";

var message_anim_lock = false;

// resize height of iframe (this function is also called by iframed pages)
function resizeIframeDiv() {
	// set a short timer to call the actual resizing... this will give the css of the client page to render before resizing
	setTimeout(resizeIframeDivActual, 100);
}

function resizeIframeDivActual() {
	var minHeight = 500;
	var newHeight = minHeight;
	var iFrameElement = document.getElementById("iframe-main");

	if (iFrameElement) {
		try {
			// grab required height
			newHeight = $(iFrameElement.contentWindow.document).height();
			// set to new height if greater than minHeight
			iFrameElement.style.height = (newHeight > minHeight ? newHeight : minHeight) + 'px';
		}
		catch(e) {
			// can't access iframed document height... just set to 1200px
			iFrameElement.style.height = '1200px';
		}
	}
}

$(document).ready(function() {

    // set height of container
    $('#messages-unread').css('height', $('#messages-unread').height() + 'px');

    // hide unread messages
    $('#messages-unread').hide();
    $('#messages-unread-text').hide();

    // set onclick for link
    $('#messageShowLink').click(function() {

        if (!message_anim_lock)
        {
            // lock to prevent multiple animations queuing
            message_anim_lock = true;

            if ($('#messages-unread').css('display') == 'none')
            // show
            {
                $('#messages-unread').slideDown(700, function() {

                    // change icon
                    $('#messIndicator').attr('src', '/static/ssc/images/hasMessages-open.png');

                    // unlock
                    message_anim_lock = false;

                });

                $('#messages-unread-text').fadeIn(600);

                setTimeout("markMessagesAsRead()",3000);

            }
            else
            // hide
            {
                $('#messages-unread').slideUp(700, function() {

                    // change icon
                    $('#messIndicator').attr('src', '/static/ssc/images/hasMessages-closed.png');

                    // unlock
                    message_anim_lock = false;

                });

                $('#messages-unread-text').fadeOut(600);
            }
        }

    });

	
	// Bind to resize function.
	$('#iframe-main').load(function() {
			resizeIframeDiv();
		}
	);

    sscTitleToggle("ssc",true);
});

