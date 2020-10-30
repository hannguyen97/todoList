var DSSV = [];
getItemLocalStore();
function getEle(id){
    return document.getElementById(id);
}
    



function add(){
    var user_Name = getEle('userName').value;
    var user_Email = getEle('email').value;
    var ma_SV = getEle('maSV').value;
    var data = {
user_Name,
user_Email,
ma_SV,
    };
    if(currIndex==-1){
        addTag(data);
    }else{
        DSSV[currIndex]=data;
        currIndex=-1;
        getEle("submitForm").innerHTML="Them sinh vien";
        setLocalStore();
        DisplayALL();
    }
   
    

}

function DisplayALL(){
    var datalist= getEle('tbody');
    datalist.innerHTML="";
    for(i=0;i<DSSV.length;i++){
        var data=DSSV[i];

        datalist.innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${data.user_Name}</td>
        <td>${data.user_Email}</td>
        <td>${data.ma_SV}</td>
        <td><button type="button" onClick='handleRemove(${i})' class="btn btn-outline-danger">Delete</button></td>
        <td><button type="button" class="btn btn-outline-light" id="EditUser" onClick='handleEdit(${i})'>Edit</button></td>
        </tr>
`
    }
    setLocalStore();
}

function addTag(data){
    DSSV.push(data);
    var datalist= getEle('tbody'); 
    datalist.innerHTML +=  `<tr>
    <td>${DSSV.length}</td>
    <td>${data.user_Name}</td>
    <td>${data.user_Email}</td>
    <td>${data.ma_SV}</td>
    <td><button type="button" onClick='handleRemove(${DSSV.length-1})' class="btn btn-outline-danger">Delete</button></td>
    <td><button type="button" class="btn btn-outline-light" id="EditUser" onClick='handleEdit(${DSSV.length-1})'>Edit</button></td>
    </tr>
`
setLocalStore();
}



 
var currIndex=-1;
function handleEdit(e){
    currIndex=e;
    var User = DSSV[e]; 
    getEle('userName').value=User.user_Name;
   getEle('email').value=User.user_Email;
    getEle('maSV').value=User.ma_SV;
    getEle("submitForm").innerHTML="Update";
    setLocalStore();

}      

function handleRemove(e){
   
         DSSV.splice(e,1);
        setLocalStore();
        DisplayALL();
     
    }
          
      

   




 
    


function setLocalStore(){
    localStorage.setItem('myName', JSON.stringify('Han Nguyen'));
   localStorage.setItem('DSSV', JSON.stringify(DSSV));
}
function getItemLocalStore(){
    if(localStorage.getItem('DSSV')){
        DSSV = JSON.parse(localStorage.getItem('DSSV'))
        console.log(DSSV);
        DisplayALL();
    }
    if(localStorage.getItem('myName')){
        console.log(JSON.parse(localStorage.getItem('myName')));
    }
}