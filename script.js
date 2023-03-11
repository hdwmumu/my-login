console.log("잘 불려왔니?");

let elInputUsername = document.querySelector("#username");


let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

elInputUsername.onkeyup = function() { //이벤트코드 onkeyup키보드가 눌렸다 떼어졌을 때를 의미
  if(isMoreThan4Length (elInputUsername.value)){
  //4글자보다 크면 성공메세지가 보여한다.
  elSuccessMessage.classList.remove('hide')

  //실패 메세지가 가려져야 
  elFailureMessage.classList.add('hide')
  }else{
    //성공메세지가 가려져야 한다.
    
    elSuccessMessage.classList.add('hide')
  
  //실패 메세지가 보여야 함
  elFailureMessage.classList.remove('hide')
  }
}

function isMoreThan4Length(value){
    return value.length >= 4
}