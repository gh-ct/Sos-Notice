const phoneForm = document.querySelector("#phoneForm");
const phoneNumberInput = phoneForm.querySelector("input");
const phoneList = document.querySelector("#phoneList");

const PHONE_LIST_KEY = "lists";
let phoneLists = [];


var noticeList = '';


function savePhoneLists(){
    localStorage.setItem(PHONE_LIST_KEY,JSON.stringify(phoneLists));
}

// 삭제 버튼 이벤트
function deleteList(event){
    const li = event.target.parentElement;
    phoneLists = phoneLists.filter(list=> list.id !==parseInt(li.id));
    li.remove();
    
    savePhoneLists();
}



// 보여주게 하기
function paintList(newPhoneNumber){
    const li = document.createElement("li");
    li.id = newPhoneNumber.id;
    const span = document.createElement("span");
    span.innerHTML = newPhoneNumber.text;

    // 
    noticeList += newPhoneNumber.text+',';
    // 

    // 삭제추가
    const button = document.createElement("button");
    button.innerHTML = "삭제";

    button.addEventListener("click",deleteList);
    
    li.appendChild(span);
    li.appendChild(button);
    phoneList.appendChild(li);
}


// 제출버튼 후 새로고침 미동작
function phoneListSubmit(event){
    event.preventDefault();

    const newPhoneNumber = phoneNumberInput.value;
    phoneNumberInput.value = "";

    const newPhoneNumberObj = {
        text:newPhoneNumber,
        id: Date.now(),
    };

    phoneLists.push(newPhoneNumberObj);
    paintList(newPhoneNumberObj);

    savePhoneLists();
}

phoneForm.addEventListener("submit",phoneListSubmit);


const savedPhoneLists = localStorage.getItem(PHONE_LIST_KEY);


if(savedPhoneLists!==null){
    
    var noticeList = '';
    
    const parsedPhoneLists = JSON.parse(savedPhoneLists);
    parsedPhoneLists.forEach(paintList);

    
}


