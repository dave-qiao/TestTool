const testTool = {
  // 加法
  add(x, y) {
    return x + y;
  },
  // 判断是不是一个数
  isNum(params) {
    return typeof params === 'number';
  },
  // 判断是不是undefined
  isUndefined(params) {
    return typeof params == 'undefined';
  },
  //获取当前的时间
  getTime(days) {
    var dd = new Date();
		dd.setDate(dd.getDate() + days);//获取AddDayCount天后的日期
		var y = dd.getFullYear();
		var m = dd.getMonth() + 1//获取当前月份的日期
		var d = dd.getDate();
		m = this.checkIsBiger10(m)
		d = this.checkIsBiger10(d)
		return y + "-" + m + "-" + d;
  },
  // 判断当前的数字是否大于10 大于不变 小于则在十位补零
  checkIsBiger10(num) {
		return num >= 10 ? num : ('0' + num);
	},

}

export default testTool;
