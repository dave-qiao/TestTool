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
  
}

export default testTool;
