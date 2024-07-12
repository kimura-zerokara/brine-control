// script.js
function calculate() {
    // 入力値を取得
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input3 = parseFloat(document.getElementById('input3').value);

    // 出力値を計算（仮の計算ロジック、実際の計算ロジックをここに実装）
    const output1 = input1 + input2 + input3;
    const output2 = input1 * 2;
    const output3 = input2 * 2;
    const output4 = input3 * 2;
    const output5 = input1 + input2;
    const output6 = input2 + input3;
    const output7 = input1 + input3;

    // 結果を表示
    document.getElementById('output1').textContent = output1;
    document.getElementById('output2').textContent = output2;
    document.getElementById('output3').textContent = output3;
    document.getElementById('output4').textContent = output4;
    document.getElementById('output5').textContent = output5;
    document.getElementById('output6').textContent = output6;
    document.getElementById('output7').textContent = output7;
}
