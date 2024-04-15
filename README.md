# 一个运行在QuantumultX上的电子科技大学清水河电信登录脚本

使用说明

1. 通过浏览器的调试工具捕获uri为 “http://172.25.249.70/eportal/InterFace.do?method=login” 的body
2. 替换脚本内的body,内容格式就保持application/x-www-form-urlencoded，不需要转换为json
3. 在quanx的http请求内添加定时任务，cron表达式参考：0 45 6 * * ?

注意：确保你的分流规则里这个ip是直连
