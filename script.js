const addButton = document.querySelector('#add');



const updateLSData = () => {
  
  const textAreaData = document.querySelectorAll('textarea');
  const notes = [];
  console.log(textAreaData);
  
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  })
  
  console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes));
  
};





const addNewNote = (text = "") => {

  const note = document.createElement('div');
  note.classList.add('note');

  const htmlData = `<div class="operation">
      <button class="edit"><i class="far fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main  ${text ? "" : "hidden" }  "></div>
    <textarea class=" ${text ? "hidden" : "" } "></textarea>
  </div>`
  
  
  note.insertAdjacentHTML('afterbegin', htmlData);
  document.body.appendChild(note);


  const editBtn = note.querySelector('.edit');
  const delBtn = note.querySelector('.delete');
  const mainDiv = note.querySelector('.main');
  const textArea = note.querySelector('textarea');
  
  
  delBtn.addEventListener("click", () =>  {
    note.remove();
    updateLSData();
    
  })
  
  textArea.value = text;
  mainDiv.innerHTML = text;
  
  editBtn.addEventListener("click", () => {
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });




  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;
    
    updateLSData();
    
  });




}
const notes =  JSON.parse(localStorage.getItem('notes'));

if(notes){
  notes.forEach((note) => addNewNote(note));
}



addButton.addEventListener("click", () => {
  addNewNote()
  
});