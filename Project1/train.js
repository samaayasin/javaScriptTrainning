class Room{
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum,roomNum,price,isBooked){
        this.floorNum=floorNum;
        this.roomNum=roomNum;
        this.price=price;
        this.#isBooked=isBooked;
    }
    printRoom(){
        if(this.#isBooked){
         console.log("The Room Number:"+this.roomNum+"\nThe Floor Number:"+this.floorNum+"\nThe Price:"+this.price+"\n"
            + (this.#isBooked ?'':"Un")+"Booked Room\n") ;

        }
        else
        console.log("The Room Number:"+this.roomNum+"\nThe Floor Number:"+this.floorNum+"\nThe Price:"+this.price+"\n"  + (this.#isBooked ?'':"Un")+"Booked Room\n") ;
        
    }
    book(){
        this.#isBooked=true;
    }
    isBooked(){
                return this.#isBooked

    }
}


class Hotel {
    Address;
    NumberOfRooms;
    #minFloor;
    #maxFloor;
    rooms=[];
    constructor(Address,NumberOfRooms,minFloor,maxFloor,rooms=[]){
       this.Address=Address;
       this.NumberOfRooms=NumberOfRooms;
       this.#minFloor=minFloor;
       this.#maxFloor=maxFloor;
       this.rooms=rooms;
    }
    printAdvertisment(){
        console.log("Welcome In Our Hotel");
    }
     listBookedRooms(){
        for(let i=0;i<this.rooms.length;i++){
       ((this.rooms[i].isBooked()) ? (this.rooms[i].printRoom()):'');
        }
    }
}
class RoomWithView extends Room{
view;
numberOfBeds;
constructor(floorNum,roomNum,price,isBooked,view,numberOfBeds){
    super(floorNum,roomNum,price,isBooked);
this.view=view;
this.numberOfBeds=numberOfBeds;
}
}

class SleepingRoom extends Room{
    personCapacity;
    constructor(floorNum,roomNum,price,isBooked,personCapacity){
        super(floorNum,roomNum,price,isBooked);
        this.personCapacity=personCapacity;
    }

}
R=new Room(10,5,2000,false);
R2=new Room(9,3,1000,true);
R3=new RoomWithView(7,6,700,false,'sea',2);
R4=new RoomWithView(9,10,900,true,'mountain',2);
R5=new SleepingRoom(10,5,2000,false,5);
R2.book();
R.book();
R.printRoom();
H=new Hotel("Nablus",5,1,10,[R,R2,R3,R4,R5]);
H.listBookedRooms();

 

