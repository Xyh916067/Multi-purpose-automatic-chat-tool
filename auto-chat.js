//创建进入按钮
var start = document.createElement("input");
start.type = "button";
start.value = "独轮车控制台";
start.style = "display: inline-block;\n" +
  "  position: absolute;\n" +
  "  z-index:998;\n" +
  "  -webkit-box-sizing: content-box;\n" +
  "  -moz-box-sizing: content-box;\n" +
  "  float: right;\n" +
  "  top: 160px;\n" +
  "  right: 10px;\n" +
  "  box-sizing: content-box;\n" +
  "  cursor: pointer;\n" +
  "  padding: 10px 20px;\n" +
  "  border: none;\n" +
  "  -webkit-border-radius: 3px;\n" +
  "  border-radius: 3px;\n" +
  "  font: normal 21px/normal Impact, Charcoal, sans-serif;\n" +
  "  color: rgba(255,255,255,0.9);\n" +
  "  -o-text-overflow: clip;\n" +
  "  text-overflow: clip;\n" +
  "  background: #66ccff;\n" +
  "  -webkit-box-shadow: 0 0 6px 1px rgba(0,0,0,0.5) ;\n" +
  "  box-shadow: 0 0 6px 1px rgba(0,0,0,0.5) ;\n" +
  "  -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);";
//进入按钮的点击事件
start.id = "start";
start.onclick = function () {
  start.style.visibility = "hidden";
  contrual.style.visibility = "visible";
};
document.body.appendChild(start);
//创建控制台
var contrual = document.createElement("div");
contrual.style = " -webkit-box-sizing: content-box;\n" +
  "  -moz-box-sizing: content-box;\n" +
  "  position: absolute;\n" +
  "  z-index:998;\n" +
  "  box-sizing: content-box;\n" +
  "  float: right;\n" +
  "  top: 160px;\n" +
  "  right: 10px;\n" +
  "  width: 160px;\n" +
  "  padding: 26px 26px 100px;\n" +
  "  overflow: hidden;\n" +
  "  border: none;\n" +
  "  -webkit-border-radius: 6px;\n" +
  "  border-radius: 6px;\n" +
  "  font: normal 17px/1 Arial Black, Gadget, sans-serif;\n" +
  "  color: rgba(255,255,255,1);\n" +
  "  text-align: center;\n" +
  "  -o-text-overflow: ellipsis;\n" +
  "  text-overflow: ellipsis;\n" +
  "  background: #66ccff;\n" +
  "  -webkit-box-shadow: 0 0 9px 2px rgba(0,0,0,0.5) ;\n" +
  "  box-shadow: 0 0 9px 2px rgba(0,0,0,0.5) ;";
contrual.id = "contrual"
contrual.style.visibility = "hidden";
document.body.appendChild(contrual);
//创建退出按钮
var d = document.getElementById("contrual");
var x = document.createElement("input");
x.type = "button";
x.value = "X"
x.style = "-webkit-box-sizing: content-box;\n" +
  "  -moz-box-sizing: content-box;\n" +
  "  box-sizing: content-box;\n" +
  "  z-index:999;\n" +
  "  float: right;\n" +
  "  width: 5px;\n" +
  "  height: 5px;\n" +
  "  padding: 5px;\n" +
  "  overflow: hidden;\n" +
  "  border: none;\n" +
  "  font: normal 16px/0 \"Times New Roman\", Times, serif;\n" +
  "  color: rgba(0,0,0,1);\n" +
  "  -o-text-overflow: ellipsis;\n" +
  "  text-overflow: ellipsis;\n" +
  "  background: #ffffff;\n" +
  "  -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;\n" +
  "  box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;\n" +
  "  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;";
d.appendChild(x);
x.onclick = function () {
  start.style.visibility = "visible";
  contrual.style.visibility = "hidden";
}
//创建按键name或id选项
var classoridtext = document.createElement("a");
classoridtext.innerHTML = "----发送按键设置----";

var classon = document.createElement("input");
var classon_id = document.getElementById("classon");
var classontext = document.createElement("a");
classontext.innerHTML = "使用class name定位发送按钮";
classon.type = "checkbox";
d.appendChild(classoridtext);
d.appendChild(document.createElement("br"));
d.appendChild(classon);
d.appendChild(classontext);
d.appendChild(document.createElement("br"));
var postive = document.createElement("input");
postive.type = "text";
postive.style = "color:#000000;";
postive.placeholder = "输入发送按钮的id";
postive.id = "button";
d.appendChild(postive);

//创建发送框name或id选项
var classoridtext_textarea = document.createElement("a");
classoridtext_textarea.innerHTML = "---发送框设置---";
d.appendChild(classoridtext_textarea);
d.appendChild(document.createElement("br"));
var classon_textarea = document.createElement("input");
classon_textarea.type = "checkbox";
classon_textarea.id = classon_textarea;
d.appendChild(classon_textarea);

var classon_textarea_id = document.getElementById("classon_textarea");
var classontext_textarea = document.createElement("a");
classontext_textarea.innerHTML = "使用class name定位发送框";

d.appendChild(classontext_textarea);
d.appendChild(document.createElement("br"));
var postive_textarea = document.createElement("input");
postive_textarea.type = "text";
postive_textarea.style = "color:#000000;";
postive_textarea.id = "send";
postive_textarea.placeholder = "输入发送框id";
d.appendChild(postive_textarea);

var time = document.createElement("a");
time.innerHTML = "---时间间隔设置---";
d.appendChild(time);

var time_input = document.createElement("input");
time_input.placeholder = "输入时间间隔（s）";
time_input.style = "color:#000000;";
d.appendChild(time_input);

var mes = document.createElement("a");
mes.innerHTML = "---独轮车弹药内容---";
d.appendChild(mes);

var text = document.createElement("textarea");
text.id = "text";
text.style = "color:#000000;";
text.placeholder = "弹药用|隔开";
d.appendChild(text);
var text_id = document.getElementById("text").value;
// var text_value=text_id.innerHTML;
//弹药数组
var bullet;
bullet = text_id.split("|");
//发车
var on = document.createElement("input");
on.type = "button";
on.value = "发车";
on.style = "display: inline-block;\n" +
  "  -webkit-box-sizing: content-box;\n" +
  "  -moz-box-sizing: content-box;\n" +
  "  box-sizing: content-box;\n" +
  "  cursor: pointer;\n" +
  "  padding: 10px 20px;\n" +
  "  border: none;\n" +
  "  -webkit-border-radius: 5px;\n" +
  "  border-radius: 5px;\n" +
  "  font: normal 16px/normal Arial Black, Gadget, sans-serif;\n" +
  "  color: rgba(255,255,255,0.9);\n" +
  "  -o-text-overflow: clip;\n" +
  "  text-overflow: clip;\n" +
  "  background: #39c5bb;\n" +
  "  -webkit-box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.2) ;\n" +
  "  box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.2) ;\n" +
  "  -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);"
on.onclick = function () {
  caron();
};
d.appendChild(on);

//创建数组以存储发送框的class name或id
var send;
var target_text_box;
var button_id;
var stop = document.createElement("input");
stop.type = "button";
stop.style = "display: inline-block;\n" +
  "  -webkit-box-sizing: content-box;\n" +
  "  -moz-box-sizing: content-box;\n" +
  "  box-sizing: content-box;\n" +
  "  cursor: pointer;\n" +
  "  padding: 10px 20px;\n" +
  "  border: none;\n" +
  "  -webkit-border-radius: 5px;\n" +
  "  border-radius: 5px;\n" +
  "  font: normal 16px/normal Arial Black, Gadget, sans-serif;\n" +
  "  color: rgba(255,255,255,0.9);\n" +
  "  -o-text-overflow: clip;\n" +
  "  text-overflow: clip;\n" +
  "  background: #39c5bb;\n" +
  "  -webkit-box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.2) ;\n" +
  "  box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.2) ;\n" +
  "  -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);\n" +
  "  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);";
stop.value = "收车";

//判断使用id时的方法
function caron() {
  stop.onclick = function () {
    cycle = window.clearInterval(cycle);
  };
  var cycle = setInterval(function () {
    judge();
  }, time_input.value * 1000);
}

//停车


d.appendChild(stop);

function judge() {
  text_id = document.getElementById("text").value;
  bullet = text_id.split("|");
  send = document.getElementById("send").value;
  button_id = document.getElementById(button.id).value;
  if (classon_textarea.checked == false) {
    // alert(classon_textarea.checked);
    document.getElementById(send).value = bullet[Math.floor(Math.random() * bullet.length)];
  } else {
    // alert(classon_textarea.checked);
    document.getElementsByClassName(send).value = bullet[Math.floor(Math.random() * bullet.length)];
  }
  document.getElementById(button_id).click();
}

d.appendChild(document.createElement("br"));
var tip = document.createElement("a");
tip.innerHTML = "class定位尚不可使用，将来会更新。如遇到没有id的输入框或按钮，请F12手动添加。此脚本建议作为油猴脚本使用，把欲开车的网址加入 用户匹配 中.";
d.appendChild(tip);
