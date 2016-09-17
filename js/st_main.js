var st_main_obj = {};

st_main_obj.controls = {
	st_nav_icon : function(){
		return $("#st_nav_icon");
	},
	st_nav_div : function(){
		return $("#st_nav_div");
	},
	st_nav_close_icon : function(){
		return $("#st_nav_close_icon");
	},
	st_scroll_down_btn : function(){
		return $("#st_scroll_down_btn");
	},
	st_menu_item_work : function(){
		return $("#st_menu_item_work");
	},
	st_menu_item_about: function(){
		return $("#st_menu_item_about");
	},
	st_menu_item_contact: function(){
		return $("#st_menu_item_contact");
	},
	st_menu_item_resume: function(){
		return $("#st_menu_item_resume");
	},
	st_about_screen : function(){
		return $("#st_about_screen");
	},
	st_contact_screen : function(){
		return $("#st_contact_screen");
	},
	st_logo: function(){
		return $("#st_logo");
	},
	st_landing_screen_left: function(){
		return $("#st_landing_screen_left");
	},
	st_landing_screen_right: function(){
		return $("#st_landing_screen_right");
	},
	st_say_hello_btn:function(){
		return $("#st_say_hello_btn");
	},
	st_main_send_message_btn: function(){
		return $("#st_main_send_message_btn");
	},
	st_contact_name: function(){
		return $("#st_contact_name");
	},
	st_contact_email: function(){
		return $("#st_contact_email");
	},
	st_contact_message: function(){
		return $("#st_contact_message");
	},
	st_main_send_notify: function(){
		return $("#st_main_send_notify");
	}
};

st_main_obj._windowHeight = $(window).height();
st_main_obj._windowWidth = $(window).width();

st_main_obj.init = function(){
	st_main_obj.controls.st_nav_div().css("top" , "-" + st_main_obj._windowHeight + "px");
	st_main_obj.controls.st_nav_div().height(st_main_obj._windowHeight);
	$(document).find(".st_page").css('min-height', st_main_obj._windowHeight + 'px');
	
	st_main_obj.createHandlers();
	
	new Vivus('st_logo_svg', {duration: 400});
	
	/*For Screen Responsiveness*/
	if(st_main_obj._windowWidth <= 1024){
		st_main_obj.controls.st_scroll_down_btn().hide();
		st_main_obj.controls.st_landing_screen_right().hide();
		st_main_obj.controls.st_landing_screen_left().removeClass("col-sm-7").addClass("col-sm-12");
	}
	
	if(st_main_obj._windowWidth <= 768){
		st_main_obj.controls.st_nav_div().find(".st_nav_item_text").css('font-size','4.5em');
	}
	
	if(st_main_obj._windowWidth <= 640){
		st_main_obj.controls.st_nav_div().find(".st_nav_item_text").css('font-size','4em');
		st_main_obj.controls.st_nav_div().find(".st_nav_item_icon").css('font-size','3em');
	}
	
	if(st_main_obj._windowWidth <= 480){
		st_main_obj.controls.st_nav_div().find(".st_nav_item_text").css('font-size','3em');
		st_main_obj.controls.st_nav_div().find(".st_nav_item_icon").css('font-size','2em');
		$(".st_main_btn").css('left','30px');
		$(".st_main_btn").css('top','-2px');
		$(".st_main_btn").css('width','280px');
	}
	/*For Screen Responsiveness End*/
}

st_main_obj.createHandlers = function(){
	if(st_main_obj.controls.st_nav_icon() !== null){
		st_main_obj.controls.st_nav_icon().unbind('click').bind('click', st_main_obj.onClickNavIcon);
	}
	if(st_main_obj.controls.st_nav_close_icon() !== null){
		st_main_obj.controls.st_nav_close_icon().unbind('click').bind('click', st_main_obj.onClickNavDivCloseIcon);
	}
	if(st_main_obj.controls.st_scroll_down_btn() !== null){
		st_main_obj.controls.st_scroll_down_btn().unbind('click').bind('click', st_main_obj.onClickScrollDownBtn);
	}
	if(st_main_obj.controls.st_menu_item_work() !== null){
		st_main_obj.controls.st_menu_item_work().unbind('click').bind('click', st_main_obj.onClickMenuItemWork);
	}
	if(st_main_obj.controls.st_menu_item_about() !== null){
		st_main_obj.controls.st_menu_item_about().unbind('click').bind('click', st_main_obj.onClickMenuItemAbout);
	}
	if(st_main_obj.controls.st_menu_item_contact() !== null){
		st_main_obj.controls.st_menu_item_contact().unbind('click').bind('click', st_main_obj.onClickMenuItemContact);
	}
	if(st_main_obj.controls.st_menu_item_resume() !== null){
		st_main_obj.controls.st_menu_item_resume().unbind('click').bind('click', st_main_obj.onClickMenuItemResume);
	}
	if(st_main_obj.controls.st_logo() !== null){
		st_main_obj.controls.st_logo().unbind('click').bind('click', st_main_obj.onClickLogo);
	}
	if(st_main_obj.controls.st_say_hello_btn() !== null){
		st_main_obj.controls.st_say_hello_btn().unbind('click').bind('click', st_main_obj.onClickSayHelloBtn);
	}
	if(st_main_obj.controls.st_main_send_message_btn() !== null){
		st_main_obj.controls.st_main_send_message_btn().unbind('click').bind('click', st_main_obj.onClickSendMessage);
	}
}

st_main_obj.onClickNavIcon = function(e){
	st_main_obj.controls.st_nav_div()[0].style.display = "block";
	st_main_obj.controls.st_nav_div().animate({ top: 0 },800);
}

st_main_obj.onClickNavDivCloseIcon = function(e){
	st_main_obj.controls.st_nav_div().animate({ top: "-" + st_main_obj._windowHeight },800, function(){
		st_main_obj.controls.st_nav_div()[0].style.display = "none";
	});
}

st_main_obj.onClickScrollDownBtn = function(e){
	$('body').animate({ scrollTop : st_main_obj._windowHeight-50},800);
}

st_main_obj.onClickMenuItemAbout = function(e){
	st_main_obj.controls.st_nav_close_icon().click();
	var screenScrollTop = st_main_obj.controls.st_about_screen().offset().top;
	$('body').animate({ scrollTop : screenScrollTop-50},800);
}

st_main_obj.onClickMenuItemContact = function(e){
	st_main_obj.controls.st_nav_close_icon().click();
	var screenScrollTop = st_main_obj.controls.st_contact_screen().offset().top;
	$('body').animate({ scrollTop : screenScrollTop-50},800);
}

st_main_obj.onClickMenuItemWork = function(e){
	window.location.href = "https://github.com/sahilthakral23";
}

st_main_obj.onClickMenuItemResume = function(e){
	window.location.href = "./SahilThakral.pdf";
}

st_main_obj.onClickLogo = function(e){
	$('body').animate({ scrollTop : 0},800);
}

st_main_obj.onClickSayHelloBtn = function(){
	var screenScrollTop = st_main_obj.controls.st_contact_screen().offset().top;
	$('body').animate({ scrollTop : screenScrollTop-50},800);
}

st_main_obj.onClickSendMessage = function(){
	var senderName = st_main_obj.controls.st_contact_name().val();
	var senderEmail = st_main_obj.controls.st_contact_email().val();
	var senderMessage = st_main_obj.controls.st_contact_message().val();
	$.ajax({
		method: "POST",
		url: " https://9hj23ob5ie.execute-api.us-east-1.amazonaws.com/prod",
		contentType: "application/json",
		data: { "from" : senderEmail, "subject" : "From-" + senderName+" (Sahil Portfolio)", "message" : senderMessage },
		success: function(data){
			setTimeout(function(){
				st_main_obj.controls.st_main_send_notify().text("Message send Successfully.");
			}, 2000);
			st_main_obj.controls.st_main_send_notify().text();
		},
		error: function(err){
			setTimeout(function(){
				st_main_obj.controls.st_main_send_notify().text("Some error occurred while sending message.");
			}, 2000);
			st_main_obj.controls.st_main_send_notify().text();
		}
	});
}

$(document).ready(function(){
	st_main_obj.init();
});