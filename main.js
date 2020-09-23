/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
const question = alert('You got 5 guesses. Guess 1 to 5');

// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
let askAnswer = prompt('What do you guess?');

// 答えの数値を2で用意
const answer = [2];

// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。
let numbers = [1, 3, 4, 5];

for (let i = 0 ; i <= 5 ; i++) { //変数iの役割；候補１　配列のインデックス番号　候補２　繰り返し処理の回数　→候補２を選択
    // 何をどうしたいかは後でかく 1.if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。2.外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。

    // if文の基本構文をまずは書く 
    if (askAnswer = number) {//条件　推測が外れたら
        prompt('Ops! Maybe, another try?');//promptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示 
    } else　if (askAnswer = answer ) {//条件　推測が当たったら
        alert('Good job! See what happens next :)');//alertで'Good job! See what happens next :)'を表示
        //ミニオンの画像を表示する;
        break; //　繰り返しを終了する
    } 
}

/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。