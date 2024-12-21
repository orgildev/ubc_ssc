<!-- 
/*
 Pleas leave this notice.
 DHTML tip message version 1.2 copyright Essam Gamal 2003 (http://migoicons.tripod.com, migoicons@hotmail.com)
 All modifications are done in the style.js you should not modify this file.  Created on : 06/03/2003
 Script featured on and can be found at Dynamic Drive (http://www.dynamicdrive.com)
*/ 

var FiltersEnabled = 0 // if your not going to use transitions or filters in any of the tips set this to 0
var ua = navigator.userAgent
var ps = navigator.productSub 
var dom = (document.getElementById)? 1:0
var ie4 = (document.all&&!dom)? 1:0
var ie5 = (document.all&&dom)? 1:0
var nn4 =(navigator.appName.toLowerCase() == "netscape" && parseInt(navigator.appVersion) == 4)
var nn6 = (dom&&!ie5)? 1:0
var sNav = (nn4||nn6||ie4||ie5)? 1:0
var cssFilters = ((ua.indexOf("MSIE 5.5")>=0||ua.indexOf("MSIE 6")>=0)&&ua.indexOf("Opera")<0)? 1:0
var Style=[],Text=[],Count=0,sbw=0,move=0,hs="",mx,my,scl,sct,ww,wh,obj,sl,st,ih,iw,vl,hl,sv,evlh,evlw,tbody
var HideTip = "eval(obj+sv+hl+';'+obj+sl+'=0;'+obj+st+'=-800')"
var doc_root = ((ie5&&ua.indexOf("Opera")<0||ie4)&&document.compatMode=="CSS1Compat")? "document.documentElement":"document.body"
var PX = (nn6)? "px" :"" 

if(sNav) {
	window.onresize = ReloadTip
	document.onmousemove = MoveTip
	if(nn4) document.captureEvents(Event.MOUSEMOVE) 
}	
if(nn4||nn6) {
	mx = "e.pageX"
	my = "e.pageY"
	scl = "window.pageXOffset"
	sct = "window.pageYOffset"	
	if(nn4) {
		obj = "document.MessageLayer."
		sl = "left"
		st = "top"
		ih = "clip.height"
		iw = "clip.width"
		vl = "'show'"
		hl = "'hide'"
		sv = "visibility="
	}
	else obj = "document.getElementById('MessageLayer')."
} 
if(ie4||ie5) {
	obj = "MessageLayer."
	mx = "event.x"
	my = "event.y"
	scl = "eval(doc_root).scrollLeft"
	sct = "eval(doc_root).scrollTop"
	if(ie5) {
		mx = mx+"+"+scl 
		my = my+"+"+sct
	}
}
if(ie4||dom){
	sl = "style.left"
	st = "style.top"
	ih = "offsetHeight"
	iw = "offsetWidth"
	vl = "'visible'"
	hl = "'hidden'"
	sv = "style.visibility="
}
if(ie4||ie5||ps>=20020823) {
	ww = "eval(doc_root).clientWidth"
	wh = "eval(doc_root).clientHeight"
}	 
else { 
	ww = "window.innerWidth"
	wh = "window.innerHeight"
	evlh = eval(wh)
	evlw = eval(ww)
	sbw=15
}	

function applyCssFilter(){
	if(cssFilters&&FiltersEnabled) { 
		var dx = " progid:DXImageTransform.Microsoft."
		MessageLayer.style.filter = "revealTrans()"+dx+"Fade(Overlap=1.00 enabled=0)"+dx+"Inset(enabled=0)"+dx+"Iris(irisstyle=PLUS,motion=in enabled=0)"+dx+"Iris(irisstyle=PLUS,motion=out enabled=0)"+dx+"Iris(irisstyle=DIAMOND,motion=in enabled=0)"+dx+"Iris(irisstyle=DIAMOND,motion=out enabled=0)"+dx+"Iris(irisstyle=CROSS,motion=in enabled=0)"+dx+"Iris(irisstyle=CROSS,motion=out enabled=0)"+dx+"Iris(irisstyle=STAR,motion=in enabled=0)"+dx+"Iris(irisstyle=STAR,motion=out enabled=0)"+dx+"RadialWipe(wipestyle=CLOCK enabled=0)"+dx+"RadialWipe(wipestyle=WEDGE enabled=0)"+dx+"RadialWipe(wipestyle=RADIAL enabled=0)"+dx+"Pixelate(MaxSquare=35,enabled=0)"+dx+"Slide(slidestyle=HIDE,Bands=25 enabled=0)"+dx+"Slide(slidestyle=PUSH,Bands=25 enabled=0)"+dx+"Slide(slidestyle=SWAP,Bands=25 enabled=0)"+dx+"Spiral(GridSizeX=16,GridSizeY=16 enabled=0)"+dx+"Stretch(stretchstyle=HIDE enabled=0)"+dx+"Stretch(stretchstyle=PUSH enabled=0)"+dx+"Stretch(stretchstyle=SPIN enabled=0)"+dx+"Wheel(spokes=16 enabled=0)"+dx+"GradientWipe(GradientSize=1.00,wipestyle=0,motion=forward enabled=0)"+dx+"GradientWipe(GradientSize=1.00,wipestyle=0,motion=reverse enabled=0)"+dx+"GradientWipe(GradientSize=1.00,wipestyle=1,motion=forward enabled=0)"+dx+"GradientWipe(GradientSize=1.00,wipestyle=1,motion=reverse enabled=0)"+dx+"Zigzag(GridSizeX=8,GridSizeY=8 enabled=0)"+dx+"Alpha(enabled=0)"+dx+"Dropshadow(OffX=3,OffY=3,Positive=true,enabled=0)"+dx+"Shadow(strength=3,direction=135,enabled=0)"
	}
}

function popupMessage(t,s) {
  if(sNav) {
  	if(t.length<2||s.length<6) {
		var ErrorNotice = "DHTML TIP MESSAGE VERSION 1.2 ERROR NOTICE.\n"
		if(t.length<2&&s.length<6) alert(ErrorNotice+"It looks like you removed an entry or more from the Style Array and Text Array of this tip.\nTheir should be 6 entries in every Style Array even though empty and 2 in every Text Array. You defined only "+s.length+" entries in the Style Array and "+t.length+" entry in the Text Array. This tip won't be viewed to avoid errors")
		else if(t.length<2) alert(ErrorNotice+"It looks like you removed an entry or more from the Text Array of this tip.\nTheir should be 2 entries in every Text Array. You defined only "+t.length+" entry. This tip won't be viewed to avoid errors.")
		else if(s.length<6) alert(ErrorNotice+"It looks like you removed an entry or more from the Style Array of this tip.\nTheir should be 6 entries in every Style Array even though empty. You defined only "+s.length+" entries. This tip won't be viewed to avoid errors.")
 	}
  	else {
		if(!s[2]) s[2] = 200
		if(!s[4]) s[4] = 5
		if(!s[5]) s[5] = 10
		hs             = s[1].toLowerCase() 
		var add_height = (s[3])? "; height:"+s[3]+"px" : ""
		
		var titCol       = "#FFFFFF"
		var txtCol       = "#000000"
		var borBgCol     = "#002859"
		var titBgCol     = "#002859"
		var txtBgCol     = "#FFFFFF"
		var fontFamily   = "Arial,Verdana,Helvetica"
		var titFntSize   = "12px"
		var txtFntSize   = "12px"
		var borSize      = "2px"
		var txtPad       = "5px"

		var closeLink = (hs=="sticky") ? "<TD style='text-align:right; padding:"+txtPad+"; font-size:"+titFntSize+"; font-family:"+fontFamily+"'><A HREF='javascript:void(0)' ONCLICK='stickyhide()' STYLE='text-decoration:none; color:#666666; font-weight:bold'>Close</A></TD>" : "<TD></TD>"
		var title = (t[0]||hs=="sticky") ? "<TR style='border:0; border-spacing:0px; background-color:"+titBgCol+"'><TD style='padding:"+txtPad+"; font-size:"+titFntSize+"; font-family:"+fontFamily+"; font-weight:bold; color:"+titCol+"'>"+t[0]+"</TD>"+closeLink+"</TR>" : ""
		var msg = "<TR><TD colspan=2 style='border:0; border-spacing:0px; padding:"+txtPad+"; font-size:"+txtFntSize+"; font-family:"+fontFamily+"; color:"+txtCol+"'>"+t[1]+"</TD></TR>"
		var txt = "<TABLE style='width:"+s[2]+"px; border:"+borSize+" solid "+borBgCol+"; background-color:"+txtBgCol+"'>" + 
					title + 
					msg +
				  "</TABLE>"
		
		if(nn4) {
			with(eval(obj+"document")) {
				open()
				write(txt)
				close()
			}
		}
		else eval(obj+"innerHTML=txt")
		tbody = {
			Pos:s[0].toLowerCase(), 
			Xpos:s[4],
			Ypos:s[5], 
			Width:parseInt(eval(obj+iw)+3+sbw)
		}
		if(ie4) { 
			MessageLayer.style.width = s[2]
	 		tbody.Width = s[2]
		}
		Count=0	
		move=1
 	 }
  }
}

function MoveTip(e) {
	if(move) {
		var X,Y,MouseX = eval(mx),MouseY = eval(my); tbody.Height = parseInt(eval(obj+ih)+3)
		tbody.wiw = parseInt(eval(ww+"+"+scl)); tbody.wih = parseInt(eval(wh+"+"+sct))
		switch(tbody.Pos) {
			case "left" : X=MouseX-tbody.Width-tbody.Xpos; Y=MouseY+tbody.Ypos; break
			case "center": X=MouseX-(tbody.Width/2); Y=MouseY+tbody.Ypos; break
			default: X=MouseX+tbody.Xpos; Y=MouseY+tbody.Ypos
		}

		if(tbody.wiw<tbody.Width+X) X = tbody.wiw-tbody.Width
		if(tbody.wih<tbody.Height+Y+sbw) {
			if(tbody.Pos=="float"||tbody.Pos=="fixed") Y = tbody.wih-tbody.Height-sbw
			else Y = MouseY-tbody.Height
		}
		if(X<0) X=0 
		eval(obj+sl+"=X+PX;"+obj+st+"=Y+PX")
		ViewTip()
	}
}

function ViewTip() {
  	Count++
	if(Count == 1) {
		if(cssFilters&&FiltersEnabled) {	
			for(let Index=28; Index<31; Index++) { MessageLayer.filters[Index].enabled = 0 }
			for(let s=0; s<28; s++) { if(MessageLayer.filters[s].status == 2) MessageLayer.filters[s].stop() }
			if(tbody.Transition == 51) tbody.Transition = parseInt(Math.random()*50)
			var applyTrans = (tbody.Transition>-1&&tbody.Transition<24&&tbody.Duration>0)? 1:0
			var advFilters = (tbody.Transition>23&&tbody.Transition<51&&tbody.Duration>0)? 1:0
			var which = (applyTrans)?0:(advFilters)? tbody.Transition-23:0 
			if(tbody.Alpha>0&&tbody.Alpha<100) {
	  			MessageLayer.filters[28].enabled = 1
	  			MessageLayer.filters[28].opacity = tbody.Alpha
			}
			if(tbody.ShadowColor&&tbody.ShadowType == "simple") {
	  			MessageLayer.filters[29].enabled = 1
	  			MessageLayer.filters[29].color = tbody.ShadowColor
			}
			else if(tbody.ShadowColor&&tbody.ShadowType == "complex") {
	  			MessageLayer.filters[30].enabled = 1
	  			MessageLayer.filters[30].color = tbody.ShadowColor
			}
			if(applyTrans||advFilters) {
				eval(obj+sv+hl)
	  			if(applyTrans) MessageLayer.filters[0].transition = tbody.Transition
	  			MessageLayer.filters[which].duration = tbody.Duration 
	  			MessageLayer.filters[which].apply()
			}
		}
 		eval(obj+sv+vl)
		if(cssFilters&&FiltersEnabled&&(applyTrans||advFilters)) MessageLayer.filters[which].play()
		if(hs == "sticky") move=0
  	}
}

function stickyhide() {
	eval(HideTip)
}

function ReloadTip() {
	 if(nn4&&(evlw!=eval(ww)||evlh!=eval(wh))) location.reload()
	 else if(hs == "sticky") eval(HideTip)
}

function hideMessage() {
	if(sNav) {
		move=0; 
		if(hs!="sticky") eval(HideTip)
	} 
}

//-->


