// 関数名は、 <button onclick="clickTextBox2()">のonclickの部分
function clickTextBox2(){
    // 探索するデータ
    //  <input type="text" id="textBox2" value="テキストを入力してね">のid部分
    getTextBox2 = document.getElementById("textBox2");
    // 値を取得する
    text2 = getTextBox2.value;
    text2 = "ほらね？「" + text2 + "」に変わってるでしょ？";

    DisplayText2 = document.getElementById("displayTextBox2");
    DisplayText2.innerHTML = text2;
}