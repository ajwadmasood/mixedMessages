//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

let first_sentence = ["I am a cat", "I am a dog", "i am a rabbit"];
let second_sentence = ["I like eating tuna", "I like chicken", "I don't eat meat"];
let third_sentence = ["I live in New York", "I live in San Francisco", "I live in LA"];

let para = document.querySelector('p');
let element = document.querySelector('button');

function generate(){
  let new_first_sentence = first_sentence[Math.floor(Math.random()* first_sentence.length)]
  let new_second_sentence = second_sentence[Math.floor(Math.random()* second_sentence.length)]
  let new_third_sentence = third_sentence[Math.floor(Math.random()* third_sentence.length)]

  let final_sentence = new_first_sentence+". "+new_second_sentence+". "+new_third_sentence;
  para.innerHTML = final_sentence;
}

element.onclick = generate;