function switchTab(tabId) {
    // Remove active classes from all tabs
    $('.ui-state-default').removeClass('ui-tabs-active ui-state-active');
    $('a[href="#' + tabId + '"]').parent().addClass('ui-tabs-active ui-state-active');
    
    // Hide all panels and show the selected one
    $('.ui-tabs-panel').hide();
    $('#' + tabId).show();
    
    // Update current tab and recalculate
    currentTab = tabId.replace('tabs-', '');
    calculate();
}

function calculate() {
    if (doTop) {
        refreshTop();
    } else {
        recalculate();
    }
}

function recalculate() {
    doTop = false;
    var numSelected = $("#tabs-"+currentTab+" tr.listHighlight").size();
    var totalCredits = 0;
    var totalGrade = 0;
    
    $("#tabs-"+currentTab+" td.listRow[grade]").each(
        function(i) {
            if ($(this).parent().hasClass("listHighlight")) {
                var gradeText = $(this).text();
                var grade = parseInt(gradeText);
                var credits = parseFloat($(this).attr("credits"));
                if (!(isNaN(grade) || isNaN(credits))) {
                    totalCredits += credits;
                    totalGrade += (credits * grade);
                }
            }
        }
    );
    
    var avgGrade = Math.round(totalGrade / totalCredits * 10) / 10;
    $("#calculator_result").text(isNaN(avgGrade) ? "0%" : avgGrade + "%");
}

$(document).ready(function() {
    // Initialize click handlers for tabs
    $('.ui-tabs-anchor').click(function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href').substring(1); // Remove the # from href
        switchTab(tabId);
    });
    
    // Initialize with 2024W tab
    switchTab('tabs-2025W');
});
