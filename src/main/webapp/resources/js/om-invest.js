$(function(){
	console.log("OM Invest Robot started...");
	var omInvestRobot = new OMInvestRobot();
	omInvestRobot.start();
});


function OMInvestRobot()
{
	var _this = this;
	this.statusPane = "#statusPane";
	
	this.start = function() {
		_this.log("start() called...");
		_this.getStockSummary();
	};
	
	this.getStockSummary = function() {
		_this.log("getStockSummary() called...");
		
		$.ajax(
		{
			dataType: "html",
			url: "http://www.google.com/finance?q=mattel&ei=QrU8VeG1N8vs8QPPmYCYDg",
			//url:      "https://graph.facebook.com/10150232496792613",
			type: "GET",
			//contentType: "application/javascript",
			contentType: "text/html; charset=utf-8",
			//context: document.body
			/*headers: {
                "Accept" : "text/html; charset=utf-8",
                "Content-Type": "application/javascript; charset=utf-8",
                "Access-Control-Allow-Origin" : "*"
            },*/
		}).done(function(data) {
			//var dividend = $('tbody td .key[data-snapfield="latest_dividend-dividend_yield"]').closest("td").html();
			//var dividend = $('tbody td .key[data-snapfield="latest_dividend-dividend_yield"]').html();
			_this.log(data);
			_this.log("done");
		});
		
	};
	
	this.log = function(message) {
		console.log(message);
		$(_this.statusPane).html(message);
		$(_this.statusPane).effect("pulsate", 2500);
	};
}


/*
<!--http://finance.yahoo.com/q/hp?s=NLY+Historical+Prices
http://finance.yahoo.com/q/hp?s=NLY&a=09&b=8&c=1997&d=03&e=26&f=2015&g=v



https://www.google.com/finance?q=mattel&ei=QrU8VeG1N8vs8QPPmYCYDg

$('tbody td .key[data-snapfield="latest_dividend-dividend_yield"').closest("td").html();
<td class="key" data-snapfield="latest_dividend-dividend_yield" aria-label="Latest dividend/dividend yield Latest dividend is dividend per share paid to shareholders in the most recent quarter. Dividend yield is the value of the latest dividend, multiplied by the number of times dividends are typically paid per year, divided by the stock price.">Div/yield
</td>
<td class="val">0.38/5.03
</td>

-->
*/