// change color

let changeColor = document.querySelectorAll(".point");
changeColor.forEach((number:any) => {
    number.addEventListener("click", function (e:any) {
        e.preventDefault()
        changeColor.forEach((num:any) => num.style.backgroundColor = "") ;
        number.style.backgroundColor = "red";
    })
})

//khỏi tạo đối tượng
interface IFeedback{
    id:number
    name:string
    score:number
}

class Feedback implements IFeedback{
    feedBack:IFeedback[];

    id:number
    name:string
    score:number
    constructor(id:number, name:string, score:number){
        const storedFeedback = localStorage.getItem("feedBack");
        this.feedBack = storedFeedback ? JSON.parse(storedFeedback) : [];
        this.id = id
        this.name = name
        this.score = score
    }

    renderFeedback(): void {
        const renderFeedbackContainer = document.getElementById(
          "renderFeedback"
        ) as HTMLDivElement;
      
        if (!renderFeedbackContainer) {
          console.error("Render feedback container not found");
          return;
        }
      
        renderFeedbackContainer.innerHTML = "";
      
        this.feedBack.forEach((feedback) => {
          const feedbackElement = document.createElement("div");
          feedbackElement.classList.add("action-col");
          feedbackElement.innerHTML = `
            <div class="action-row">
              <button class="point" style="background-color: rgb(240, 97, 233);">${feedback.score}</button>
              <div class="action">
                <span class="material-symbols-outlined" onclick = "editFeedback(${feedback.id})">edit_square</span>
                <span class="material-symbols-outlined" onclick = "deleteFeedback(${feedback.id})">close</span>
              </div>
            </div>
            <p style="margin-left: 50px;">${feedback.name}</p>
          `;
      
          renderFeedbackContainer.appendChild(feedbackElement);
        });
      }

    createFeedback(feedback:IFeedback):void{
        this.feedBack.push(feedback)
        this.saveFeedback()
        this.renderFeedback()
    }

    updateFeedback(id:number, updateFeedback:IFeedback):void{
        const index = this.feedBack.findIndex((feedback) => feedback.id === id);
        if (index !== -1) {
            this.feedBack[index] = updateFeedback;
            this.saveFeedback();
        }
    }

    deleteFeedback(id:number):void{
        const index = this.feedBack.findIndex((feedback) => feedback.id === id);
        if (index !== -1) {
            this.feedBack.splice(index, 1);
            this.saveFeedback();
            this.renderFeedback()
        }
    }

    saveFeedback(): void {
        const feedbacksToSave = JSON.stringify(this.feedBack, (key, value) => {
          if (key === "feedBack") {
            return undefined;
          }
          return value;
        });
        localStorage.setItem("feedBack", feedbacksToSave);
      }
}

// click feedback 

const pointButtons = document.querySelectorAll(".point-row .point");
const sendButton = document.getElementById("sendButton") as HTMLInputElement;

let selectedValue: number = 0;

pointButtons.forEach((button) => {
  button.addEventListener("click", function () {
    selectedValue = parseInt(button.getAttribute("value") || "");
  });
});

function sendFeedback():void {

    const valueInput = document.getElementById("inputReview") as HTMLInputElement;
    const name = valueInput.value;
    const score = selectedValue;
  
    const feedback = new Feedback(1, name, score);
  
    feedback.createFeedback(feedback);
}

//loading render
document.addEventListener("DOMContentLoaded", function() {
    const feedback = new Feedback(0, "", 0);
    feedback.renderFeedback();
});

// Delete
function deleteFeedback(id: number): void {
    const feedback = new Feedback(0, "", 0);
  
    // Display confirmation dialog
    const confirmDelete = confirm("Bạn có muốn xóa bình luận này không");
  
    if (confirmDelete) {
      feedback.deleteFeedback(id);
    }
}

// ...

// Edit
function editFeedback(id: number): void {
    const feedback = new Feedback(0, "", 0);
  
    const feedbackToEdit = feedback.feedBack.find((item) => item.id === id);
  
    if (feedbackToEdit) {
      const valueInput = document.getElementById("inputReview") as HTMLInputElement;
      const pointButtons = document.querySelectorAll(".point-row .point");
  
      valueInput.value = feedbackToEdit.name;
  
      pointButtons.forEach((button:any) => {
        const value = parseInt(button.getAttribute("value") || "");
        if (value === feedbackToEdit.score) {
          button.style.backgroundColor = "red";
        } else {
          button.style.backgroundColor = "";
        }
      });
  
      const sendButton = document.getElementById("sendButton") as HTMLButtonElement;
      sendButton.innerText = "Update";
      sendButton.removeEventListener("click", sendFeedback);
      sendButton.addEventListener("click", function () {
        updateFeedback(id);
      });
    }
}
  
// Update
function updateFeedback(id: number): void {
  const feedback = new Feedback(0, "", 0);

  const valueInput = document.getElementById("inputReview") as HTMLInputElement;
  const name = valueInput.value;
  const score = selectedValue;

  const updatedFeedback: IFeedback = {
    id: id,
    name: name,
    score: score,
  };

  feedback.updateFeedback(id, updatedFeedback);

  valueInput.value = "";
  selectedValue = 0;
  const pointButtons = document.querySelectorAll(".point-row .point");
  pointButtons.forEach((button:any) => {
    button.style.backgroundColor = "";
  });
  const sendButton = document.getElementById("sendButton") as HTMLButtonElement;
  sendButton.innerText = "Send";
  sendButton.removeEventListener("click", function () {
    updateFeedback(id);
  });
  sendButton.addEventListener("click", sendFeedback);
  feedback.deleteFeedback(id)
  feedback.renderFeedback()
}
