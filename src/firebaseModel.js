import app, {auth} from "./firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth } from "firebase/auth";

const db= getDatabase(app)

const PATH="test/";
let id = getAuth(app).currentUser ? getAuth(app).currentUser.uid : "test";

function setGoalsToDatabase(input) {
    set(ref(db, PATH+id), input);
}

function getGoalsFromDatabase(){
    return get(ref(db, PATH+id)).then((val) => {return val.val()});
}

function setID(input_id){
    id=input_id;
}
  

export {setGoalsToDatabase, getGoalsFromDatabase, setID};
