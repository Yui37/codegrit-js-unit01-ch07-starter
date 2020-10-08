/*   マイルストーン１   */
// alertで'You got 5 guesses. Guess 1 to 5'と言うメッセージを表示させ、１から５までの数値を当てるよう指示する。
alert('You got 5 guesses. Guess 1 to 5');

// promptで'What do you guess?'と言うメッセージとともに、記入欄を表示させる
let question = prompt('What do you guess?')


// 答えの数値を2で用意
let answer = [2];

// forループで１から５までの数値で、答えの2が当たるまで推測を促すpromptを表示させる。
// ヒント１：if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。
// ヒント２：外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。
let numbers = [1, 3, 4, 5];

for (let i = 0 ; i <= 5 ; i++) { //変数iの役割；候補１　配列のインデックス番号　候補２　繰り返し処理の回数　→候補２を選択
    // 何をどうしたいかは後でかく 1.if文とも組み合わせて、推測が当たった場合はalertで'Good job! See what happens next :)'を表示。当たったらゲーム終了にする。2.外れたらpromptで'Ops! Maybe, another try?'のメッセージとともに記入欄を表示。
    // if文の基本構文をまずは書く 
    // if (条件式) {
    //     文;
    // } else　if {
    //     文;
    // } else {
    //     文；
    // }
    if (question === answer){
        congrats = alert('Good job! See what happens next :)');
        const img = document.getElementById('bonus-img');
        console.log(img);
        img.innerHTML = `
            <h1>You made it! 🎮</h1>
            <iframe src="https://giphy.com/embed/11sBLVxNs7v6WA" width="480" height="217" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cheer-cheering-11sBLVxNs7v6WA"></a></p>
        `;
        break;
    } else if (
        question === numbers[0] ||
        question === numbers[1] ||
        question === numbers[2] ||
        question === numbers[3]
    ) {
        question = prompt('Ops! Maybe, another try?');
        console.log('はずれ');
    } else {
        question = prompt('Ops! Guess 1 to 5');
        console.log('それ以外');
    } 
}

/*   マイルストーン2   */
// for文で完成したら、for文箇所をコメントアウトし、while文で書き換えてみましょう。