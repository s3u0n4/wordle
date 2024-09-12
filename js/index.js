const answer = "APPLE";

let attempts = 0;
let index = 0;

function appStart() {
  const nextLine = () => {
    if (attempts === 6) return;
    gameover();
    attempts += 1;
    index = 0;
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
  };
  const handleEnterKey = () => {
    let correct = 0;
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-column[data-index='${attempts}${i}']`
      );
      const input_word = block.innerText;
      const asnwer_word = answer[i];
      if (input_word === asnwer_word) block.style.background = "#6AAA64";
      else if (answer.includes(input_word)) block.style.background = "#C9B458";
      else block.style.background = "#787C7E";
      block.style.color = "white";
    }

    if (correct === 5) gameover();
    else nextLine();
  };

  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );

    if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };

  window.addEventListener("keydown", handleKeydown);
}
appStart();
