/*
 ### jQuery Star Rating Plugin v3.13 - 2009-03-26 ###
 * Home: http://www.fyneworks.com/jquery/star-rating/
 * Code: http://code.google.com/p/jquery-star-rating-plugin/
 *
	* Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 ###
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';5(29.1j)(7($){5($.1L.1J)1I{1t.1H("1K",J,H)}1M(e){};$.n.3=7(i){5(4.Q==0)k 4;5(A I[0]==\'1h\'){5(4.Q>1){8 j=I;k 4.W(7(){$.n.3.y($(4),j)})};$.n.3[I[0]].y(4,$.1T(I).1U(1)||[]);k 4};8 i=$.12({},$.n.3.1s,i||{});$.n.3.K++;4.2a(\'.9-3-1f\').o(\'9-3-1f\').W(7(){8 a,l=$(4);8 b=(4.23||\'21-3\').1v(/\\[|\\]/g,\'Z\').1v(/^\\Z+|\\Z+$/g,\'\');8 c=$(4.1X||1t.1W);8 d=c.6(\'3\');5(!d||d.18!=$.n.3.K)d={z:0,18:$.n.3.K};8 e=d[b];5(e)a=e.6(\'3\');5(e&&a)a.z++;x{a=$.12({},i||{},($.1b?l.1b():($.1S?l.6():s))||{},{z:0,F:[],v:[]});a.w=d.z++;e=$(\'<1R V="9-3-1Q"/>\');l.1P(e);e.o(\'3-15-T-17\');5(l.S(\'R\'))a.m=H;e.1c(a.E=$(\'<P V="3-E"><a 14="\'+a.E+\'">\'+a.1d+\'</a></P>\').1g(7(){$(4).3(\'O\');$(4).o(\'9-3-N\')}).1i(7(){$(4).3(\'u\');$(4).G(\'9-3-N\')}).1l(7(){$(4).3(\'r\')}).6(\'3\',a))};8 f=$(\'<P V="9-3 q-\'+a.w+\'"><a 14="\'+(4.14||4.1p)+\'">\'+4.1p+\'</a></P>\');e.1c(f);5(4.11)f.S(\'11\',4.11);5(4.1r)f.o(4.1r);5(a.1F)a.t=2;5(A a.t==\'1u\'&&a.t>0){8 g=($.n.10?f.10():0)||a.1w;8 h=(a.z%a.t),Y=1y.1z(g/a.t);f.10(Y).1A(\'a\').1B({\'1C-1D\':\'-\'+(h*Y)+\'1E\'})};5(a.m)f.o(\'9-3-1o\');x f.o(\'9-3-1G\').1g(7(){$(4).3(\'1n\');$(4).3(\'D\')}).1i(7(){$(4).3(\'u\');$(4).3(\'C\')}).1l(7(){$(4).3(\'r\')});5(4.L)a.p=f;l.1q();l.1N(7(){$(4).3(\'r\')});f.6(\'3.l\',l.6(\'3.9\',f));a.F[a.F.Q]=f[0];a.v[a.v.Q]=l[0];a.q=d[b]=e;a.1O=c;l.6(\'3\',a);e.6(\'3\',a);f.6(\'3\',a);c.6(\'3\',d)});$(\'.3-15-T-17\').3(\'u\').G(\'3-15-T-17\');k 4};$.12($.n.3,{K:0,D:7(){8 a=4.6(\'3\');5(!a)k 4;5(!a.D)k 4;8 b=$(4).6(\'3.l\')||$(4.U==\'13\'?4:s);5(a.D)a.D.y(b[0],[b.M(),$(\'a\',b.6(\'3.9\'))[0]])},C:7(){8 a=4.6(\'3\');5(!a)k 4;5(!a.C)k 4;8 b=$(4).6(\'3.l\')||$(4.U==\'13\'?4:s);5(a.C)a.C.y(b[0],[b.M(),$(\'a\',b.6(\'3.9\'))[0]])},1n:7(){8 a=4.6(\'3\');5(!a)k 4;5(a.m)k;4.3(\'O\');4.1a().19().X(\'.q-\'+a.w).o(\'9-3-N\')},O:7(){8 a=4.6(\'3\');5(!a)k 4;5(a.m)k;a.q.1V().X(\'.q-\'+a.w).G(\'9-3-1k\').G(\'9-3-N\')},u:7(){8 a=4.6(\'3\');5(!a)k 4;4.3(\'O\');5(a.p){a.p.6(\'3.l\').S(\'L\',\'L\');a.p.1a().19().X(\'.q-\'+a.w).o(\'9-3-1k\')}x $(a.v).1m(\'L\');a.E[a.m||a.1Y?\'1q\':\'1Z\']();4.20()[a.m?\'o\':\'G\'](\'9-3-1o\')},r:7(a,b){8 c=4.6(\'3\');5(!c)k 4;5(c.m)k;c.p=s;5(A a!=\'B\'){5(A a==\'1u\')k $(c.F[a]).3(\'r\',B,b);5(A a==\'1h\')$.W(c.F,7(){5($(4).6(\'3.l\').M()==a)$(4).3(\'r\',B,b)})}x c.p=4[0].U==\'13\'?4.6(\'3.9\'):(4.22(\'.q-\'+c.w)?4:s);4.6(\'3\',c);4.3(\'u\');8 d=$(c.p?c.p.6(\'3.l\'):s);5((b||b==B)&&c.1e)c.1e.y(d[0],[d.M(),$(\'a\',c.p)[0]])},m:7(a,b){8 c=4.6(\'3\');5(!c)k 4;c.m=a||a==B?H:J;5(b)$(c.v).S("R","R");x $(c.v).1m("R");4.6(\'3\',c);4.3(\'u\')},1x:7(){4.3(\'m\',H,H)},24:7(){4.3(\'m\',J,J)}});$.n.3.1s={E:\'25 26\',1d:\'\',t:0,1w:16};$(7(){$(\'l[27=28].9\').3()})})(1j);',62,135,'|||rating|this|if|data|function|var|star|||||||||||return|input|readOnly|fn|addClass|current|rater|select|null|split|draw|inputs|serial|else|apply|count|typeof|undefined|blur|focus|cancel|stars|removeClass|true|arguments|false|calls|checked|val|hover|drain|div|length|disabled|attr|be|tagName|class|each|filter|spw|_|width|id|extend|INPUT|title|to||drawn|call|andSelf|prevAll|metadata|append|cancelValue|callback|applied|mouseover|string|mouseout|jQuery|on|click|removeAttr|fill|readonly|value|hide|className|options|document|number|replace|starWidth|disable|Math|floor|find|css|margin|left|px|half|live|execCommand|try|msie|BackgroundImageCache|browser|catch|change|context|before|control|span|meta|makeArray|slice|children|body|form|required|show|siblings|unnamed|is|name|enable|Cancel|Rating|type|radio|window|not'.split('|'),0,{}))


/* Ratings.js */

$(function(){

	var dbRow = 0,
		rating = false,
		comments = false;
		
		$('#rating').delay(2000).fadeIn(1000);

	// Show ratings
	$('div.star-rating').each(function(){
		var id = $(this).attr('id'),
			label = $('td label[for="' + id + '"]').html();
		$(this).append('<div class="label">' + label + '</div>');
	});
	
	// Process star ratings 
	$('div.star-rating a').click(function(e){
		e.preventDefault();
	
		var star = $(this).attr('title'),
			width = $(window).width(),
			height = $(window).height(),
			text = 'Tell us more...';
		
		// Submit Ratings
		$.ajax({
			type: "POST",
			data: "stars=" + star + "&uid=" + dbRow + "&width=" + width + "&height=" + height,
			url: 'processForm.php',
			success: function(data) {
				if(dbRow == 0) {
					dbRow = data;
					log('Load was performed. UID = ' + data);
				} else {
					log('Rating updated. UID = ' + dbRow);
				}
			}
		});
		
		// Add the comment fields if they're not showing yet
		switch(star){
			case '1':
				text = "Yikes! Tell us what’s so terrible...";
				break;
			case '2':
				text = "Got it. Tell us what needs to change...";
				break;
			case '3':
				text = "No problem. Tell us how we can improve it...";
				break;
			case '4':
				text = "Great! Tell us what you like or don’t like...";
				break;
			case '5':
				text = "Thanks! Tell us what you like so much...";
				break;
		}
		
		if(!rating) {
			rating = true;
			$('form#rating table tbody').append('<tr id="comment"><td class="label" id="commentlabel"><a href="#">' + text + '</a></td><td class="input" id="commentbox"></td></tr>');
			$('#commentlabel a').hide().slideDown(150);
			
		} else if (!comments) {
			$('#commentlabel a').html(text);
		}
	});
	
	
	
	// Add the comment box when people ask for it
	$('#rating').delegate('#commentlabel a', 'click', function(e){
		e.preventDefault();
	
		var initHeight = $('#rating').height();	
	
		$('#commentlabel').html('<label for="commentfield">Comments</label');
		$('#commentbox').html('<textarea id="commentfield" name="commentfield"></textarea>');
		$('form#rating table tbody').append('<tr id="email"><td class="label" id="emaillabel"><label for="emailfield">Email Address</label></td><td class="input" id="emailbox"><input id="emailfield" name="emailfield" type="text" /></td></tr>');
		$('#emailbox').append('<p>Add your email if you’d like to keep up with future developments. <br />We promise not to send too much mail or give your address to anyone :)</p>');
		$('form#rating table tbody').append('<tr id="submit"><td>&nbsp;</td><td><a href="#" id="feedbacksubmit">Send my feedback</a></td></tr>');
	});
	
	
	
	// Submit info when the submit button is clicked
	$('#rating').delegate('#feedbacksubmit', 'click', function(e){
		e.preventDefault();
				
		var comments = $('#commentfield').val(),
			email = $('#emailfield').val(),
			stars = $('.star-rating-on:last a').attr('title');
			comments = encodeURIComponent(comments); // This is necessary to prevent comments getting cut off because of special characters being used.
		
		$.ajax({
			type: "POST",
			data: "uid=" + dbRow + "&comments=" + comments + "&email=" + email + "&stars=" + stars,
			url: 'processForm.php',
			success: function(data) {
				log('Comments updated. UID = ' + dbRow);
				log('Feedback: ' + data);
			}
		});
		
		$('#rating').slideUp(250, function(){
			$(this)
				.find('table')
				.html('<tr><td class="label" id="thankslabel">Thanks for the comments!</td><td class="input" id="thanksbox">Feel free to come back often and leave more feedback or check our progress! <a href="http://web.byu.edu/wiki/whats_happening_redesign" class="moreinfolink">Learn about the BYU Community website project</a><a href="http://beta.byu.edu/stats" class="moreinfolink">View live stats for this test</a></td></tr>')
				.end().slideDown(250);
		});
	});
	
	
	
	// Close the comment box if you want to
	$('#closebox').click(function(e){
		e.preventDefault();
		$('#rating').fadeOut(300);
	});
	
	

});