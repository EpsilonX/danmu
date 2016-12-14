$(function() {
	var dom = $('body')
	var arr = []
	var teamType = ''
	const adData = [{"text":"他大舅，他二舅都是他舅。"},{"text":"金鸡报春"},{"text":"他好我也好","isAd":true},{"text":"山顶的朋友，让我看到你的手"},{"text":"人生太短，只求中奖"},{"text":"要投就投，中国人寿","isAd":true},{"text":"想要的太多，如果非要加一个注释，我希望是8888"},{"text":"让红包来的更猛烈一点吧~~"},{"text":"用户第一 员工第二 股东第三"},{"text":"听说1月5日这天许下的愿望都会实现呢"},{"text":"奔波儿灞，霸波尔奔"},{"text":"看男科，到长海~","isAd":true},{"text":"一起装逼一起飞~~"},{"text":"做爱你的广告哟"},{"text":"十句话写到第五句的时候只能开始凑数了"},{"text":"多发年终奖"},{"text":"Impossible Is Nothing","isAd":true},{"text":"关键时刻，随时脉动回来","isAd":true},{"text":"充电5分钟，通话2小时","isAd":true},{"text":"金利來，男人嘅世界","isAd":true},{"text":"但求一人心，白首不分离。"},{"text":"同一个世界，同一个梦想","isAd":true},{"text":"哎呀，妈呀"},{"text":"钻石恒久远，一颗永流传","isAd":true},{"text":"一起漾！！！"},{"text":"蓝瓶的钙好喝的钙","isAd":true},{"text":"喔喔喔，鸡年快乐"},{"text":"德芙纵享丝滑","isAd":true},{"text":"vivo X9 照亮你的美","isAd":true},{"text":"五花马千金裘，呼儿将出换美酒"},{"text":"新的一年，no bugs！"},{"text":"新年好！"},{"text":"生命滿希望，前路由我創","isAd":true},{"text":"小身材，大味道","isAd":true},{"text":"别等动物替你说嗨","isAd":true},{"text":"繁荣民族文化 传播艺术经典","isAd":true},{"text":"Just Do It","isAd":true},{"text":"今時今日，噉嘅服務態度系唔夠嘎","isAd":true},{"text":"透心凉，心飞扬","isAd":true},{"text":"一起开黑吧！"},{"text":"他好，我也好","isAd":true},{"text":"来来，我是一颗菠菜，菜菜菜"},{"text":"柔光自拍照亮你的美","isAd":true},{"text":"根本停不下来","isAd":true},{"text":"今天过节不收礼，收礼还收脑白金","isAd":true},{"text":"青春无极限"},{"text":"人生不相见 动如参与商"},{"text":"我们是穿越银河的火箭队"},{"text":"我们的目标是：没有蛀牙","isAd":true},{"text":"我们不生产水，我们只是大自然的搬运工","isAd":true},{"text":"失眠，心煩，多夢，女人更年要靜心","isAd":true},{"text":"如果你的汽车会游泳的话，请照直开，不必刹车","isAd":true},{"text":"老板的吻和特等奖里，你选哪个？"},{"text":"只要人人都献出一点爱，世界将变成美好的人间"},{"text":"胸怀不宽广平坦，何以一统广告天下？"},{"text":"农夫山泉有点甜","isAd":true},{"text":"用心做广告"},{"text":"你值得拥有--巴黎欧莱雅","isAd":true},{"text":"饭后嚼两粒","isAd":true},{"text":"让我们荡起双桨"},{"text":"挖掘机哪家强","isAd":true},{"text":"自古深情留不住，唯有套路得人心"},{"text":"广平广告最最棒！"},{"text":"做爱 做的广告"},{"text":"不充值你会变的更强吗"},{"text":"何以解忧，唯有暴富"},{"text":"2017年广平要创新高"},{"text":"不是所有牛奶都叫特仑苏。","isAd":true},{"text":"多一些润滑，少一些摩擦","isAd":true},{"text":"鸡鸡鸡鸡鸡鸡鸡"},{"text":"我们的目标：没有蛀牙","isAd":true},{"text":"哈哈哈哈哈哈哈"},{"text":"年会好嗨啊"},{"text":"用飘柔，更自信","isAd":true},{"text":"充电五分钟拍照两小时","isAd":true},{"text":"我鹅威武"},{"text":"你才是老腊肉呢"},{"text":"臭名远扬，香飘万里 ","isAd":true},{"text":"OPPO R9 2000万流光自拍","isAd":true},{"text":"关爱牙齿更关心你","isAd":true},{"text":"老板，我错辣~"},{"text":"牙好，胃口就好","isAd":true},{"text":"有人模仿我的脸","isAd":true},{"text":"不在乎天長地久，只在乎曾經擁有","isAd":true},{"text":"我的愿望是世界和平"},{"text":"30岁的小鲜肉你见过吗？"},{"text":"人生无价，泰康有情","isAd":true},{"text":"多一些润滑,少一些摩擦","isAd":true},{"text":"我们的目标是没有蛀牙","isAd":true},{"text":"鲜肉还是腊肉主要看脸~~~"},{"text":"鲜肉腊肉一起漾～"},{"text":"求中大奖"},{"text":"啪啪啪啪啪啪"},{"text":"如果你中了8888，你愿意请在场所有人吃饭吗"},{"text":"I'm lovin'it","isAd":true},{"text":"我的地盘，听我的","isAd":true},{"text":"洗洗更健康","isAd":true},{"text":"没有什么大不了的","isAd":true},{"text":"中国平安，平安中国","isAd":true},{"text":"期待一场红包雨，下一年"},{"text":"甜过初恋","isAd":true},{"text":"鹅也是一种鸟，算是本命年"},{"text":"我爷爷的爷爷说好","isAd":true},{"text":"不知不觉就写到了第十句，只有两个字送你：再见"},{"text":"有汰渍没污渍","isAd":true},{"text":"用心做鸡"},{"text":"年会筹备会的童鞋辛苦啦"},{"text":"我爱广平~~~"},{"text":"是你的益达","isAd":true},{"text":"一切以用户价值为依归"},{"text":"一种可以世袭的古典浪漫。","isAd":true}]
	
	function callback (params) {
		console.log(params, teamType)
		    	
//  	$.ajax({
//  		type:"get",
//  		url:"/score",
//  		async:true,
//  		success: function(data) {
//  			console.log(data)
//  		}
//  	});
	}
	
	(function initData () {
		showScreen('#screen1')
	
    	for (var i = 0; i < adData.length; i++) {
    		arr.push({
    			close: false, 
    			color: '#000000', 
    			info: adData[i].text, 
    			speed: 4000,
    			isAd: adData[i].isAd,
    			callback: callback,
    			params: {
    				name: 'sheep'
    			}
			})
    	}
	})()
	
	function showScreen (index) {
		$('#screen1').hide()
		$('#screen2').hide()
		$('#screen3').hide()
		$(index).show()
	}
	
	function startDanmu () {
		var j = 0
    	setInterval(function() {
	        dom.barrager(arr[j])
	        j++
    	}, 500)
	}
	
	function selectTeam (team) {
		teamType = team
		showScreen('#screen2')
		var i = 2
		var timer = setInterval(function () {
			if (i === 0) {
				clearTimeout(timer)
				showScreen('#screen3')
				startDanmu()
			} else {
				var src = 'img/' + i + '.png'
    			$('#timer').attr('src', src)
    			i--
			}
		}, 1000)
	}
	
	var redDom = document.getElementById('red')
	redDom.addEventListener('touchstart', function() {
		selectTeam('red')
	})
	
	var redDom = document.getElementById('blue')
	redDom.addEventListener('touchstart', function() {
		selectTeam('blue')
	})
})
