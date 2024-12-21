<!--this script is a reference from http://javascript.internet.com/-->

HM_DOM = document.getElementById ? true : false; //NOSONAR Global Variable
HM_IE  = document.all ? true : false; //NOSONAR Global Variable
HM_NS4 = document.layers ? true : false; //NOSONAR Global Variable

function toggle(show, elList, toggleBy) {
  if(!(HM_DOM||HM_IE||HM_NS4))
    return true;

  if(HM_NS4&&(toggleBy=="tag"))
    return true;

  for(var i = 0; i < elList.length; i++) {
     var ElementsToToggle = [];
     switch(toggleBy) {
        case "tag":
           ElementsToToggle = (HM_DOM)?document.getElementsByTagName(elList[i]) :
                              document.all.tags(elList[i]);
           break;
        case "id":
           ElementsToToggle[0] = (HM_DOM)?document.getElementById(elList[i]) :
                                 (HM_IE)?document.all(elList[i]) :
                                 document.layers[elList[i]];
           break;
     }
     for(var j = 0; j < ElementsToToggle.length; j++) {
        var theElement = ElementsToToggle[j];
        if(!theElement) continue;
        if(HM_DOM||HM_IE) {
           theElement.style.visibility = show?"inherit":"hidden";
           theElement.style.display = show?"block":"none";
        } else if (HM_NS4) {
           theElement.visibility = show?"inherit":"hide";
           theElement.display = show?"block":"none";
        }
     }
  }
}
