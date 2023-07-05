// 関数名は、 <button onclick="clickTextBox1()">のonclickの部分
function clickTextBox1(){
    // 探索するデータ
    //  <input type="text" id="textBox1" value="テキストを入力してね">のid部分
    getTextBox1 = document.getElementById("textBox1");
    // 値を取得する
    text1 = getTextBox1.value;
    // text1の内容をアラーとする
    alert(text1);
}