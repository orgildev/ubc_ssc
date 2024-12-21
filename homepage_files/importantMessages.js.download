var messagesToMark = false;

function rejectMessage(messageId) {
    window.location.href = 'SSCMain.jsp?logout=logout';
    return false;
}

function acceptMessage(messageId,studNo) {
    $("#msg-" + messageId).addClass("hidden");
    numBlocking -=1;	// NOSONAR
    if (numBlocking == 0) {
      $("#blocking-dialog").dialog("close");
    }    
    $.post("SRVPostMessageRead", { msgid: messageId, studno: studNo });
    return false;
}

function saveAffiliateMessage(messageId,ubcId) {
    $("#msg-" + messageId).addClass("hidden");
    numBlocking -=1;	// NOSONAR
    if (numBlocking == 0) {
      $("#blocking-dialog").dialog("close");
    }
    $.post("SRVPostMessageRead", { msgid: messageId, ubcId: ubcId,
        affilOpt: $("input[name=PARAM_DVCONTACT_AFFIL_OPT]:checked").val() });
    return false;
}
