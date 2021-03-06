# Multi-purpose-automatic-chat-tool
用于在没有专门适配独轮车的聊天室或直播间进行定时随机发言
## json使用方法 ##
1. "example"对应独轮车中的 云端配置文件id
2. "textbox":输入内容的文本框的id
3. "button":发送按钮的id
4. "message":将要随机发送的内容，用 | 分割不同的内容
5. "cd":发送消息的时间间隔（单位 秒）
6. "start":控制独轮车开始停止，true为开启，false为停止
#### 注意！更改发送时间间隔前必须先将start设为false ####
## 云端配置文件使用方法 ##
1. 云端配置文件id填入在example位置的对应值
2. 云端配置文件url 填入json文件所在位置（建议存放在服务器，如果在本地有极大几率会无法访问）
