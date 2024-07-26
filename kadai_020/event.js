const Btn = document.getElementById('btn');

Btn.addEventListener('click',()=>{
  const oldText = document.getElementById("text");
  oldText.style.display ='none';

  const newText = document.createElement("div");
  newText.textContent = 'ボタンをクリックしました';
  ntext.appendChild(newText);

})