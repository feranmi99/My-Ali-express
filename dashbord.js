let chatArr = []

if (localStorage.chat) {
    chatArr = JSON.parse(localStorage.getItem("chat")) 
}
const add = ()=>{
    if (title.value == "" && note.value == "") {
        done.innerHTML = "Please Fill The Input"
    } else {
        done.innerHTML = ""
        let item = {
            title:title.value,
            note:note.value
        }
        chatArr.push(item)
    
        localStorage.setItem("chat",JSON.stringify(chatArr));
    }

    title.value = "";
    note.value = "";

    displayChat();
};

const displayChat = () => {
    let localData = JSON.parse(localStorage.getItem("chat")) ;
    disp.innerHTML = "";
    localData.map((value , index) => {
        disp.innerHTML += `
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div class="h-full p-3 rounded-lg border-2 border-indigo-500 flex flex-col overflow-hidden">
                    <h2 class="text-2xl font-medium tracking-widest text-gray-900">${value.title}</h2>
                    <div class="py-2">
                        <hr>
                    </div>
                    <p class="flex items-center text-gray-600 mb-2">${value.note}</p>
                    <button class="flex items-center mt-auto text-white bg-indigo-700 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-800 rounded" onclick="deleteNote(${index})">Delete Note
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>`;
    });
}
const deleteNote = (e) => {
    chatArr.splice(e, 1);
    localStorage.setItem("chat", JSON.stringify(chatArr));
    // displayChat();
    location.reload()
  };
