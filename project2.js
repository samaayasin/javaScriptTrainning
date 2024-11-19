class Task{
    flag=1;
    constructor(){
       this.Tasks=[['T1','20/5/2023',2,false],['T2','20/6/2023',3,false],['T3','20/7/2022',1,true]];
    }
    printaction(){
        console.log("Welcome to JS TODO-APP\n");
        while(this.flag===1){
        let T = prompt("Select an action:\n____________________________\n"
        +"1) Add a new task\n"
        +"2) List all tasks\n"
        +"3) List completed tasks\n"
        +"4) Mark the task as done\n"
        +"5) Delete a task\n"+
        `6) Sort tasks by the due date\n7) Sort tasks by priority\n8) Clear all tasks\n9) Exit\n____________________________\nWhat's your choice? `);
  let num = parseInt(T);
  
      switch(num) {
        case 1: {
            let addTask = prompt("Enter New Task To be added:");
            let addDate = prompt("Enter Task Due Date:");
            let addPriority = parseInt(prompt("Enter Task Priority (1-5):"));
            let addCompleted = false;
            
            let newTask = [addTask, addDate, addPriority, addCompleted];
            this.Tasks.push(newTask);
            console.log("The Task added successfully\n");
            break;
          }
  case 2:{
    let c=0
    this.Tasks.forEach(element => {
        c++;
        console.log(c+')'+element+'\n');
    });
    if(this.Tasks.length==0){
        console.log("There are no tasks to display\n");
    }
    break;
  }
  case 3:{
    let c2=0
    this.Tasks.forEach(element => {
        c2++;
        if(element[3]==true)
        console.log(c2+')'+element+'\n');
    });
    break;
  }
  case 4:{
    const tasksetdone=prompt("Enter The Task :");
    let e;
    let f=0;
    this.Tasks.forEach(element => {
        if(element[0]==tasksetdone){
            if(element[3]==false){
                element[3]=true;
                e=element[0];
                f=1;
            }
            else {
                f=2;
                console.log("The Task already Was Done\n");
            }
        }
    } )
    if(f==1){
        console.log(e+" Mark As Done successfully\n");
    }
    if(f===0){
        console.log("The Task Not Found\n");
    }
    break;
  }
  case 5:{
    const Deletetask=prompt("Enter The Task You Want To Delete:");
    let deleteflag=0;
    this.Tasks.forEach(element => {
        if(element[0]==Deletetask){
            deleteflag=1;
            let index1=this.Tasks.indexOf(Deletetask);
            this.Tasks.splice(index1, 1)[0];

        }
    } )
    if(deleteflag===1){
        console.log("The Task Delteted successfully\n");
    }
    else  console.log("The Task Not Found\n");
    break;
  }
  case 6:{
    let compdate=(d1,d2) => {
        let [day1,month1,year1]=d1.split("/");
        let [day2,month2,year2]=d2.split("/");
        if(day1 !== day2){
            return day1>day2? 1:-1;
        }
        if(month1 !== month2){
            return month1>month2? 1:-1;
        }
        if(year1 !== year2){
            return year1>year2? 1:-1;
        }
        return 0;
    }
function f(d1,d2){
    return compdate(d1[1],d2[1]);
}
console.log(this.Tasks.sort(f));
break;
        
  }
  case 7:{
    let compdate=(p1,p2) => {
        if(p1 !== p2){
            return p1>p2? 1:-1;
        }
        return 0;
    }
function f2(p1,p2){
    return compdate(p1[2],p2[2]);
}
console.log(this.Tasks.sort(f2));
    break;
  }
  case 8:{
    this.Tasks=[];
    console.log("Clear all tasks done successfully\n");
    break;
  }
  case 9:{
    console.log("Good Bye ^_^\n");

    this.flag=0;
    break;
  }


  default:{
    console.log("Please, Enter Valid Number:");

}
}
    }
    }
}
T=new Task();
T.printaction();