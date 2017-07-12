
; /* Start:"a:4:{s:4:"full";s:88:"/bitrix/components/mscoder/banner.main/templates/peronal_slider/script.js?14883593187308";s:6:"source";s:73:"/bitrix/components/mscoder/banner.main/templates/peronal_slider/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var bannerTimer;
var bannerTime = 7000;
var canClick = true;
var mouseOnBanner = false;
var fakeclick = false;

function repeatFunction() {
    clearTimeout(bannerTimer);
    if (!mouseOnBanner) {
        fakeclick = true;
        $(".mainSliderItemWrapper:eq(0) .bjqs-controls .bjqs-next").trigger("click");
        fakeclick = false;
    }
    if (!mouseOnBanner) {
        bannerTimer = setTimeout('repeatFunction()', bannerTime);
    }
}
$.fn.animateBanner = function(inOptions) {
    var $obj = $(this);
    var defaultOptions = {
        time: 500,
        fade: 0.5,
        indx: 0
    };
    var options = $.extend(defaultOptions, inOptions);

    function generateNav(indx) {
        var size = $obj.find(".bjqs > li").size();
        if (size > 0) {
            var navArrows = "<ul class=\"bjqs-controls\">\n<li>\n<a class=\"bjqs-next\" href=\"#\">Next</a>\n";
            navArrows += "</li><li><a class=\"bjqs-prev\" href=\"#\">Prev</a></li></ul>";
            $obj.append(navArrows);
            $obj.find(".bjqs-controls").css("z-index", 30);
            var navString = "<ol class=\"bjqs-markers\">";
            var i = 1;
            while (i <= size) {
                navString += "<li";
                if (i == (indx + 1)) {
                    navString += " class=\"active-marker\"";
                }
                navString += ">\n<a href=\"#\">" + i + "</a>\n</li>\n";
                i++;
            }
            navString += "</ol>";
            $obj.append(navString);
            $obj.find(".bjqs-markers").css("z-index", 30);
        }
    }

    function activeMenuItem(indx) {
        //console.log('activeMenuItem: ' + indx);
        $(".searchBlock > .nav > .navWrapper:eq(0) > ul > li").removeClass("active");
        $(".searchBlock > .nav > .navWrapper:eq(0) > ul > li").eq(indx + 1).addClass("active");
        var i = 1;
        var width = 125;
        while (i < indx + 1) {
            width += parseInt($(".searchBlock > .nav > .navWrapper:eq(0) > ul > li").eq(i).innerWidth());
            i++;
        }
        width += Math.ceil((parseInt($(".searchBlock > .nav > .navWrapper:eq(0) > ul > li").eq(indx + 1).innerWidth())) / 2) - 10;
        if ($(".searchBlock > .nav > .navWrapper:eq(0) .runner").css("display") == "none") {
            if (!fakeclick) {
                $(".searchBlock > .nav > .navWrapper:eq(0) .runner").css("left", width + "px").fadeIn(options.time);
            } else {
                $(".searchBlock > .nav > .navWrapper:eq(0) .runner").css("left", width + "px");
            }
        } else {
            if (!fakeclick) {
                $(".searchBlock > .nav > .navWrapper:eq(0) .runner").animate({
                    left: width + "px"
                }, options.time);
            } else {
                $(".searchBlock > .nav > .navWrapper:eq(0) .runner").css("left", width + "px");
            }
        }
    }

    function initBanner(indx) {
        $obj.find(".bjqs > li").css({
            opacity: 0,
            "z-index": 10
        }).eq(indx).css({
            opacity: 1,
            "z-index": 20
        });
    }

    $obj.find(".bjqs-markers a").live("click", function() {
        canClick = false;
        clearTimeout(bannerTimer);
        if (fakeclick === true && !mouseOnBanner) {
            bannerTimer = setTimeout('repeatFunction()', bannerTime);
        }
        var $item = $(this);
        if ($(this).parent().hasClass("active-marker")) {
            canClick = true;
            return false;
        }
        var indx = $obj.find(".bjqs-markers .active-marker").index();
        $obj.find(".bjqs-markers > li").removeClass("active-marker");
        $obj.find(".bjqs > li").eq(indx).css("z-index", 20).animate({
            opacity: 0
        }, options.time);
        indx = $item.parent().index();
        $obj.find(".bjqs > li").eq(indx).find(".content").css("display", "none");
        $obj.find(".bjqs > li").eq(indx).css("z-index", 10).animate({
            opacity: 1
        }, options.time, function() {
            $obj.find(".bjqs > li").css("z-index", 10);
            $obj.find(".bjqs > li").eq(indx).css("z-index", 20);
            $item.parent().addClass("active-marker");
            var temp = $(this).find(".content");
            if (temp.length > 0) {
                temp.css({
                    display: "block",
                    opacity: 0
                }).animate({
                    opacity: 1
                }, options.time, function() {
                    canClick = true;
                });
            } else {
                canClick = true;
            }

        });

        activeMenuItem($item.parent().index());
        return false;
    });
    $(".searchBlock > .nav > .navWrapper:eq(0) > ul > li a").live("click", function() {
        mouseOnBanner = true;
        if (!canClick) {
            return false;
        }
        if ($(this).parent().index() !== 0) {
            if ($(this).parent().hasClass("active")) {
                return false;
            }
            $obj.find(".bjqs-markers a").eq(parseInt($(this).parent().index()) - 1).trigger("click");
            clearTimeout(bannerTimer);
            return false;
        }
    });
    $obj.find(".bjqs-controls .bjqs-next").live("click", function() {
        if (fakeclick !== true) {
            mouseOnBanner = true;
        }
        if (!canClick) {
            return false;
        }
        clearTimeout(bannerTimer);
        var indx = $obj.find(".bjqs-markers .active-marker").index();
        indx = (indx + 1) % $obj.find(".bjqs > li").size();
        $obj.find(".bjqs-markers a").eq(indx).trigger("click");
        return false;
    });
    $obj.find(".bjqs-controls .bjqs-prev").live("click", function() {
        mouseOnBanner = true;
        if (!canClick) {
            return false;
        }
        clearTimeout(bannerTimer);
        var indx = $obj.find(".bjqs-markers .active-marker").index();
        indx = (indx - 1) % $obj.find(".bjqs > li").size();
        $obj.find(".bjqs-markers a").eq(indx).trigger("click");
        return false;
    });

    //СѓРєР°Р·Р°РЅ РїР°СЂР°РјРµС‚СЂ 5 РґР»СЏ РЅР°С‡Р°Р»Р° СЂРѕС‚Р°С†РёРё СЃ 6 Р±Р°РЅРµСЂР°
    initBanner(options.indx);
    generateNav(options.indx);
    activeMenuItem(options.indx);
};
$(document).ready(function() {
    $(".mainSliderItemWrapper:eq(0) .bannerWrapper").animateBanner({
        time: 500,
        fade: 0.5,
        indx: 0
    });
    $(".bannerWrapper .personal_potreb input[type=text]").live("keyup", function() {
        var val = parseInt($(this).val());
        if (isNaN(val)) {
            val = 0;
        }
        $(this).val(val);
    });
    $(".bannerWrapper .personal_potreb .redButton").live("click", function() {
        $(".bannerWrapper .personal_potreb form").submit();
        return false;
    });
    $(".bannerWrapper .personal_express input[type=text]").live("keyup", function() {
        var val = parseInt($(this).val());
        if (isNaN(val)) {
            val = 0;
        }
        $(this).val(val);
    });
    $(".bannerWrapper .personal_express .redButton").live("click", function() {
        $(".bannerWrapper .personal_express form").submit();
        return false;
    });
    $(".bannerWrapper .personal_mortgage .redButton.goto").live("click", function() {
        //location.href = $(".bannerWrapper .personal_mortgage select").val();
        location.href = $(this).parents('.bannerWrapper .personal_mortgage').find('select').val();
        return false;
    });
    //.bannerWrapper,
    $(".mainSliderItemWrapper:eq(0) .bannerWrapper, .mainSliderItemWrapper:eq(0) .bannerWrapper .bjqs-next, .mainSliderItemWrapper:eq(0) .bannerWrapper .bjqs-prev, .searchBlock .navWrapper:eq(0) a, .selectArea, .select-center").live("mouseover", function() {
        mouseOnBanner = true;
        clearTimeout(bannerTimer);
    });
    //.bannerWrapper,
    $(".mainSliderItemWrapper:eq(0) .bannerWrapper, .mainSliderItemWrapper:eq(0) .bannerWrapper .bjqs-next, .mainSliderItemWrapper:eq(0) .bannerWrapper .bjqs-prev, .searchBlock .navWrapper:eq(0) a, .selectArea, .select-center").live("mouseout", function() {
        mouseOnBanner = false;
        clearTimeout(bannerTimer);
        bannerTimer = setTimeout('repeatFunction()', bannerTime);
    });

    $(".bannerWrapper .personal_deposit .redButton").live("click", function() {
        $(".bannerWrapper .personal_deposit form").submit();
        return false;
    });


    $(window).load(function() {
        var activeIndex = $(".mainNav a.active").parents("li").index();
        if (activeIndex == 0) {
            bannerTimer = setTimeout('repeatFunction()', bannerTime);
        }
    });

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:84:"/bitrix/components/mscoder/banner.main/templates/sme_slider/script.js?14272085881356";s:6:"source";s:69:"/bitrix/components/mscoder/banner.main/templates/sme_slider/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
    $(".bannerWrapper .sme_credit input[type=text]").live("keyup", function(){
        var val = parseInt($(this).val());
        if (isNaN(val))
            val = 0;
        $(this).val(val);
    });

    $(".bannerWrapper.sme").find('input[name="summ"], input[name="month"]').prop('disabled', true);
    $(".bannerWrapper .sme-" + 1).find('input[name="summ"], input[name="month"]').prop('disabled', false);

    $("#ns1SmeCalc").live("change", function(){
        var val = $(this).val();
        if (parseInt(val) > 0) {
            $(".bannerWrapper .sme_credit .clearing").hide();
            $(".bannerWrapper .sme_credit .buttons").hide();
            $(".bannerWrapper.sme").find('input[name="summ"], input[name="month"]').prop('disabled', true);
            $(".bannerWrapper .sme-" + val).show();
            $(".bannerWrapper .sme-" + val).find('input[name="summ"], input[name="month"]').prop('disabled', false);
        }
    });

    $(".bannerWrapper .sme_credit .redButton").live("click", function(){
        var val = $("#ns1").val();
        if (val == 1 || val == 2 || val == 4) {
            var url = '/sme/credits/calc/?calc=Y&type=' + val;
            url += '&summ=' + $(".bannerWrapper .sme_credit .sme-" + val + " input[name=summ]").val();
            url += '&month=' + $(".bannerWrapper .sme_credit .sme-" + val + " input[name=month]").val();
            location.href = url;

            return false;
        }
        $(".bannerWrapper .sme_credit form").submit();
    });
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/bitrix/components/mscoder/banner.main/templates/corporate_slider/script.js?14116479766859";s:6:"source";s:75:"/bitrix/components/mscoder/banner.main/templates/corporate_slider/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var bannerTimer2;
var bannerTime2 = 7000;
var canClick2 = true;
var mouseOnBanner2 = false;
var fakeclick2 = false;

function repeatFunction2() {
    clearTimeout(bannerTimer2);
    if (!mouseOnBanner2) {
        fakeclick2 = true;
        $(".mainSliderItemWrapper:eq(2) .bjqs-controls .bjqs-next").trigger("click");
        fakeclick2 = false;
    }
    if (!mouseOnBanner2) {
        bannerTimer2 = setTimeout('repeatFunction2()', bannerTime2);
    }
}
$.fn.animateBanner2 = function(inOptions) {
    var $obj = $(this);
    var defaultOptions = {
        time: 500,
        fade: 0.5
    };
    var options = $.extend(defaultOptions, inOptions);

    function generateNav2() {
        var size = $obj.find(".bjqs > li").size();
        if (size > 0) {
            var navArrows = "<ul class=\"bjqs-controls\">\n<li>\n<a class=\"bjqs-next\" href=\"#\">Next</a>\n";
            navArrows += "</li><li><a class=\"bjqs-prev\" href=\"#\">Prev</a></li></ul>";
            $obj.append(navArrows);
            $obj.find(".bjqs-controls").css("z-index", 30);
            var navString = "<ol class=\"bjqs-markers\">";
            var i = 1;
            while (i <= size) {
                navString += "<li";
                if (i == 1) {
                    navString += " class=\"active-marker\"";
                }
                navString += ">\n<a href=\"#\">" + i + "</a>\n</li>\n";
                i++;
            }
            navString += "</ol>";
            $obj.append(navString);
            $obj.find(".bjqs-markers").css("z-index", 30);
        }
    }

    function activeMenuItem2(indx) {
        $(".searchBlock > .nav > .navWrapper:eq(2) > ul > li").removeClass("active");
        $(".searchBlock > .nav > .navWrapper:eq(2) > ul > li").eq(indx + 1).addClass("active");
        var i = 1;
        var width = 125;
        while (i < indx + 1) {
            width += parseInt($(".searchBlock > .nav > .navWrapper:eq(2) > ul > li").eq(i).css("width")) + 42;
            i++;
        }
        width += Math.ceil((parseInt($(".searchBlock > .nav > .navWrapper:eq(2) > ul > li").eq(indx + 1).css("width")) + 42) / 2);
        if ($(".searchBlock > .nav > .navWrapper:eq(2) .runner").css("display") == "none") {
            if (!fakeclick2) {
                $(".searchBlock > .nav > .navWrapper:eq(2) .runner").css("left", width + "px").fadeIn(options.time);
            } else {
                $(".searchBlock > .nav > .navWrapper:eq(2) .runner").css("left", width + "px");
            }
        } else {
            if (!fakeclick2) {
                $(".searchBlock > .nav > .navWrapper:eq(2) .runner").animate({
                    left: width + "px"
                }, options.time);
            } else {
                $(".searchBlock > .nav > .navWrapper:eq(2) .runner").css("left", width + "px");
            }
        }
    }

    function initBanner2() {
        $obj.find(".bjqs > li").css({
            opacity: 0,
            "z-index": 10
        }).eq(0).css({
            opacity: 1,
            "z-index": 20
        });
    }
    $obj.find(".bjqs-markers a").live("click", function() {
        canClick2 = false;
        clearTimeout(bannerTimer2);
        if (fakeclick2 === true && !mouseOnBanner2) {
            bannerTimer2 = setTimeout('repeatFunction2()', bannerTime2);
        }
        var $item = $(this);
        if ($(this).parent().hasClass("active-marker")) {
            canClick2 = true;
            return false;
        }
        var indx = $obj.find(".bjqs-markers .active-marker").index();
        $obj.find(".bjqs-markers > li").removeClass("active-marker");
        $obj.find(".bjqs > li").eq(indx).css("z-index", 20).animate({
            opacity: 0
        }, options.time);
        indx = $item.parent().index();
        $obj.find(".bjqs > li").eq(indx).find(".content").css("display", "none");
        $obj.find(".bjqs > li").eq(indx).css("z-index", 10).animate({
            opacity: 1
        }, options.time, function() {
            $obj.find(".bjqs > li").css("z-index", 10);
            $obj.find(".bjqs > li").eq(indx).css("z-index", 20);
            $item.parent().addClass("active-marker");
            $(this).find(".content").css({
                display: "block",
                opacity: 0
            }).animate({
                opacity: 1
            }, options.time, function() {
                canClick2 = true;
            });
        });
        activeMenuItem2($item.parent().index());
        return false;
    });
    $(".searchBlock > .nav > .navWrapper:eq(2) > ul > li a").live("click", function() {
        mouseOnBanner2 = true;
        if (!canClick2) return false;
        if ($(this).parent().index() !== 0) {
            if ($(this).parent().hasClass("active")) return false;
            $obj.find(".bjqs-markers a").eq(parseInt($(this).parent().index()) - 1).trigger("click");
            clearTimeout(bannerTimer2);
            return false;
        }
    });
    $obj.find(".bjqs-controls .bjqs-next").live("click", function() {
        if (fakeclick2 !== true) mouseOnBanner2 = true;
        if (!canClick2) return false;
        clearTimeout(bannerTimer2);
        var indx = $obj.find(".bjqs-markers .active-marker").index();
        indx = (indx + 1) % $obj.find(".bjqs > li").size();
        $obj.find(".bjqs-markers a").eq(indx).trigger("click");

        return false;
    });
    $obj.find(".bjqs-controls .bjqs-prev").live("click", function() {
        mouseOnBanner2 = true;
        if (!canClick2) return false;
        clearTimeout(bannerTimer2);
        var indx = $obj.find(".bjqs-markers .active-marker").index();
        indx = (indx - 1) % $obj.find(".bjqs > li").size();
        $obj.find(".bjqs-markers a").eq(indx).trigger("click");
        return false;
    });
    initBanner2();
    generateNav2();
    activeMenuItem2(0);
};
$(document).ready(function() {
    $(".mainSliderItemWrapper:eq(2) .bannerWrapper").animateBanner2();
    $(".mainSliderItemWrapper:eq(2) .bannerWrapper, .mainSliderItemWrapper:eq(2) .bannerWrapper .bjqs-next, .mainSliderItemWrapper:eq(2) .bannerWrapper .bjqs-prev, .searchBlock .navWrapper:eq(2) a, .selectArea, .select-center").live("mouseover", function() {
        mouseOnBanner2 = true;
        clearTimeout(bannerTimer2);
    });
    $(".mainSliderItemWrapper:eq(2) .bannerWrapper, .mainSliderItemWrapper:eq(2) .bannerWrapper .bjqs-next, .mainSliderItemWrapper:eq(2) .bannerWrapper .bjqs-prev, .searchBlock .navWrapper:eq(2) a, .selectArea, .select-center").live("mouseout", function() {
        mouseOnBanner2 = false;
        clearTimeout(bannerTimer2);
        bannerTimer2 = setTimeout('repeatFunction2()', bannerTime2);
    });

    var activeIndex = $(".mainNav a.active").parents("li").index();
    if (activeIndex == 2)
        bannerTimer2 = setTimeout('repeatFunction2()', bannerTime2);
});
/* End */
;; /* /bitrix/components/mscoder/banner.main/templates/peronal_slider/script.js?14883593187308*/
; /* /bitrix/components/mscoder/banner.main/templates/sme_slider/script.js?14272085881356*/
; /* /bitrix/components/mscoder/banner.main/templates/corporate_slider/script.js?14116479766859*/
