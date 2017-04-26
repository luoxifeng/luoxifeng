
$(function(argument){
	
	Util.refreshData($("#Time"));
	var _GW01 = $("#GearWrapper01");
	var _GW02 = $("#GearWrapper02");
	_GW01.addClass("animated bounceInLeft");
	_GW02.addClass("animated bounceInRight");
	setTimeout(function(){
		_GW01.removeClass("animated bounceInLeft").addClass("rotating")
			.find(".J-GearInner").addClass("on");
		_GW02.removeClass("animated bounceInRight").addClass("reverse")
			.find(".J-GearInner").addClass("on");
		var arr = 	[{
						content: _GW01.find(".J-GearInner"),
						prolist: proArr1
					},{
						content: _GW02.find(".J-GearInner"),
						prolist: proArr2
					}];
		Gear.renderPro(arr, function(){
			setTimeout(function(){
				Gear.rotatePro([_GW01, _GW02]);
				Gear.initEvent();
			}, 200)
		});
	}, 900);
	var Gear = new GearConstructor();

	
	

	function GearConstructor(){
		this.renderPro = function(arr, callback){
			var self = this;
			$.each(arr, function(i, v){
				var _content = v.content;
				var prolist = v.prolist;
				var html = '';
				$.each(prolist, function(index, item){
					html = html
					+	'<a data-href="' + item.href + '" data-disabled="' + (item.usable === false)+ '" target="_blank" class="project J-Project" '
					+		'style="backgroud-color:' + item.back + '" '
					+		'data-name="' + item.name + '">'
					+		'<span class="name JP-Name"><img src="' + item.icon + '"/></span>'
					+	'</a>';
				})
				html += '<a class="pro"><span></span></a>';
				_content.append(html);

			});
			typeof callback == "function" && callback.call(self);

		}
		
		this.rotatePro = function(_contentArr){
			$.each(_contentArr, function(i, v){
				var dec = i ? 1 : -1;
				var _pro = $(this).find(".J-Project");
				var num = _pro.size();
				var avgDeg = 360/num;
				$.each(_pro, function(index, item){
					var _this = $(this);
					_this.css("transform", "rotateZ(" + index*avgDeg*dec + "deg)")
						.find(".JP-Name").css("transform", "rotateZ(" + (-index*avgDeg*dec) + "deg)")
				})
			});
			
		}

		this.initEvent = function(){
			$(".J-Project").hover(function(){
				var _this = $(this);
				var _parent = _this.parents(".J-GearInner");
				_parent.find(".pro").attr("href", _this.attr("href")).addClass("on")
					.find("span").text(_this.data("name"))
			})
			$(".J-GearInner").on("mouseleave", function(){
				var _this = $(this);
				_this.find(".pro").removeClass("on");
			})
			$(".container").on("click", 'a', function(){
				var _this = $(this);
				if(_this.data("disabled")) {
					swal({
						title: "很抱歉",
						text: "项目暂未上线，敬请期待！",
						type: "warning",
						confirmButtonColor: "#DD6B55",
						confirmButtonText: "好吧",
						closeOnConfirm: false
					});
					return;
				}
				_this.attr('href', _this.data('href'));
				
				
			})


		}
	}
	


});