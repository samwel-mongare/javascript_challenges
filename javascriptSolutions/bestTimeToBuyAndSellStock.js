var maxProfit = function(prices) {
  var left = 0, right = 1
  var mProfit = 0
  while(right < prices.length) {
      if(prices[left] < prices[right]) {
          profit = prices[right] - prices[left]
          mProfit = Math.max(profit, mProfit)
      } else {
          left = right
      }
      right += 1
  }
   
   return mProfit
};
