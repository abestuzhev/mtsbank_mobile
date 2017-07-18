
; /* Start:"a:4:{s:4:"full";s:97:"/bitrix/templates/about_bank/components/mscoder/about.atms.main/.default/script.js?14986528238009";s:6:"source";s:82:"/bitrix/templates/about_bank/components/mscoder/about.atms.main/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var arPlacemark = new Array();
var gCollection = new YMaps.GeoObjectCollection();
var bounds = new YMaps.GeoCollectionBounds();

function showOverlay() {	
	$(this).overlay({
		target: "#small_overlay",
		mask: '#6b6b6b',
		effect: 'apple',
		fixed: false,
		api: true,
		fadeInSpeed: 10,
		onBeforeLoad: function() {
			var topLoader = $(window).scrollTop() + $(window).height() / 2;
			$(".loader").css("display", "block");
			$(".loader").css("top", topLoader + "px");
            loaderAnimation();
			var wrap = this.getOverlay().find(".contentWrap");
			wrap.empty();
			wrap.load(this.getTrigger().attr("href")+"?ajax=Y");
		},
		onLoad: function() {
			$(".loader").css("display", "none");
            clearTimeout(loaderTimer);
			Cufon.replace(".titleWrapper > h2", {fontFamily:'PF Agora Slab Pro Medium', fontWeight:'normal', color: "-linear-gradient(#5db620, 0.3=#5db620, 0.7=#308704, #308704)"});
			Cufon.refresh('.titleWrapper > h2');
			$(".smallMapWrapper").trigger("reloadmap");
			this.getOverlay().css("padding-top", $(window).scrollTop() + "px");
			this.getOverlay().find(".close").css("margin-top", $(window).scrollTop() + "px");
		}
	});
	
	var api = $(this).data("overlay");
	api.load();
	
	return false;
}

$(document).ready(function(){
	$(".network ul > li > ul").css("display", "none");
	$(".network td > ul > li > a").live("click", function(){
		if (!$(this).hasClass("inCity")) {
			$(this).toggleClass("active");		  
			$(this).next().slideToggle('fast',"linear");
			return false;
		}
	});

	
	$("a.turn-off").die("click");
	$("a.turn-on").die("click");
	$(".tabsBlock .howToShow a").live("click", function(){
		var indx = $(this).parent().index();
		
		$(".howToShow li a.turn-on").removeClass("turn-on").addClass("turn-off");
		
		$(this).removeClass("turn-off").addClass("turn-on");
		
		$("#noSearch > div").css("display", "none");
		$("#noSearch > div").eq(indx).css("display", "block");
		
		if (indx == 2) {
			$(".bigMapOuterWrapper").trigger("reloadmap");
		}
		
		var searchText = $("#jsSearchMetro").val();
		if (searchText == 'Я ищу...')
			searchText = '';
		if (searchText.length >= 3) {
			$("#jsSearchMetro").trigger("keyup");
		}
		
		if ($(this).hasClass("mapOn")) {
			$('.tabsBlockWrapper').addClass('onMap');
			$('.bigMapWrapper').height("750px");
		}
		else {
			$('.tabsBlockWrapper').removeClass('onMap');
		}
		
		return false;
	});
	
	$(".network ul > li > .active").next().css("display", "block");
	
	$(".citysearchForm a").click(function(){
		$("#jsSearchMetro").val($(this).text());
		$("#jsSearchMetro").trigger("keyup");
		return false;
	});
	
	$("#jsSearchMetro").live("keyup", function(){
		var searchText = $("#jsSearchMetro").val();
		if (searchText == 'Я ищу...')
			searchText = '';
		if (searchText.length >= 3) {
			$("#noSearch").css("display", "none");
			$("#searchResult").css("display", "block");
			var seachCount = 0;
			$("#searchResult").empty();
			$("#searchResult").append('<ul></ul>');
			var row = 0;
			$("table.network td > ul > li").each(function(){
				row++;
				var text = $(this).html();
				if (row == 1) {
					text = text.replace("область", "Московская область");
				}
				
				var searchIndex = 0;
				var findText = false;
				searchText = searchText.toLowerCase();
				searchIndex = text.toLowerCase().indexOf(searchText, searchIndex);
				while (searchIndex >= 0) {
					findText = true;					
					text = text.substr(0, searchIndex) + "<span class='searchResultText'>" + text.substr(searchIndex, searchText.length) + "</span>" + text.substr(searchIndex + searchText.length);
					searchIndex += 32;
					searchIndex = text.toLowerCase().indexOf(searchText, searchIndex);
				}
				if (findText) {
					seachCount++;
					$("#searchResult > ul").append('<li>' + text + '</li>');
					
					if ($("#searchResult > ul").has(".inMoskow").text()) {
						var moscowItem = $("#searchResult > ul > li > .inMoskow").parent();
						
						if (moscowItem.find(".inMoskow > span").text()) {
							var oblText = '<a href="' + moscowItem.find("a").eq(1).attr("href") + '" id="' + moscowItem.find("a").eq(1).attr("id") + '">';
							if (searchText.length == 3) {
								oblText += "<span class='searchResultText'>Мос</span>ковская область</a>";
							}
							else {
								oblText += "<span class='searchResultText'>Моск</span>овская область</a>";
							}
							oblText += '<ul style="display:none">' + moscowItem.find("ul").html() + '</ul>';
							moscowItem.html('<a href="/about/branches/moscow/" class="inCity inMoskow" id="466">' + moscowItem.find(".inMoskow").html() + '</li>');
							moscowItem.parent().append("<li></li>");
							moscowItem.parent().find("li").eq(1).html(oblText);
						}
						else {
							var oblText = '<a href="' + moscowItem.find("a").eq(1).attr("href") + '" id="' + moscowItem.find("a").eq(1).attr("id") + '">';
							oblText += moscowItem.find("a").eq(1).html() + "</a>";
							oblText += '<ul style="display:none">' + moscowItem.find("ul").html() + '</ul>';
							moscowItem.html(oblText);
						}
					}
				}
			}); 
			$("#searchResult > ul > li > ul").css("display", "block");
			$("#searchResult > ul > li > a").toggleClass("active");
			if (seachCount == 0) {
				$(".noAtms").css("display", "block");
				$("#noSearch").css("display", "none");
				$("#searchResult").css("display", "none");
			}
			else {
				var tabIndex = parseInt($(".tabsBlock .howToShow a.turn-on").parent().index());
				
				$("#noSearch").css("display", "block");
				$(".noAtms").css("display", "none");
				
				$("#searchResult").css("display", "none");
				$("#atmsTable").css("display", "none");
				$("#js-abc").css("display", "none");
				$(".bigMapOuterWrapper").css("display", "none");
				
				switch (tabIndex) {
					case 0:
						$("#searchResult").css("display", "block");
						break;
					case 1:
						$("#searchResult").css("display", "block");
						break;
					case 2:
						$(".bigMapOuterWrapper").css("display", "block");
						break;
				}
				
				if (gCollection.length() > 0)
					gCollection.removeAll();
				var searchedId = new Array();
				$("#searchResult a > span").each(function(){
					if ($(this).parent().attr("id") > 0) {
						searchedId[searchedId.length] = $(this).parent().attr("id");
					}
				});
				searchedId = $.unique(searchedId);
				var placemark;
				for (var indx in searchedId) {
					if (arPlacemark[searchedId[indx]]) {
						for (var indx2 in arPlacemark[searchedId[indx]]) {
							placemark = arPlacemark[searchedId[indx]][indx2];
							gCollection.add(placemark);
						}
					}
				}
				
				if (tabIndex == 2)
					$(".bigMapOuterWrapper").trigger('reloadmap');
			}
		}
		else {
			var tabIndex = parseInt($(".tabsBlock .howToShow a.turn-on").parent().index());
				
			$("#noSearch").css("display", "block");
			$("#searchResult").css("display", "none");
			$(".noAtms").css("display", "none");
				
			$("#searchResult").css("display", "none");
			$("#atmsTable").css("display", "none");
			$("#js-abc").css("display", "none");
			$(".bigMapOuterWrapper").css("display", "none");
				
			switch (tabIndex) {
				case 0:
					$("#atmsTable").css("display", "block");
					break;
				case 1:
					$("#js-abc").css("display", "block");
					break;
				case 2:
					$(".bigMapOuterWrapper").css("display", "block");
					break;
			}
			
			var placemark;
			if (gCollection.length() > 0)
				gCollection.removeAll();
			for (var indx in arPlacemark) {
				for (var indx2 in arPlacemark[indx]) {
					if (arPlacemark[indx]) {
						placemark = arPlacemark[indx][indx2];
						gCollection.add(placemark);
					}
				}
			}
			$("#searchResult").css("display", "none");
			$(".noAtms").css("display", "none");
		}
	});
});

/* End */
;; /* /bitrix/templates/about_bank/components/mscoder/about.atms.main/.default/script.js?14986528238009*/
