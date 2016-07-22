/**
 * Created by AChan on 2016/7/22.
 */
function saveStorage(id){
    var data = document.getElementById(id).value;
    var key = new Date().getTime();
    localStorage.setItem(key,data);
    alert("保存成功!");
    loadStorage('msg');
}

function loadStorage(id)
{
    var result = "<table border='1'>";
    for(var i=0;i<localStorage.length;i++)
    {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key);
        var datestr = date.toUTCString();
        result += "<tr><td>这是第"+i+"次留言</td><td>"+value+"</td><td>" +datestr+"</td></tr>";
    }
    result += "</table>";
    var target = document.getElementById('msg');
    target.innerHTML = result;
}

function clearStorage(id)
{
    localStorage.clear();
    alert("数据已经被成功清除");
    loadStorage('msg');
}