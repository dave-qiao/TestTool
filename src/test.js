const testTool = {
  // 加法
  add(x, y) {
    return x + y;
  },
  // 判断是不是一个数
  isNum(params) {
    return typeof params === 'number';
  }
}

export default testTool;
