var config = {
    apiKey: "AIzaSyBmr2FUtd7SsrSH8L7gosjxPvkZ2WhtXyc",
    authDomain: "evaluate-list01.firebaseapp.com",
    databaseURL: "https://evaluate-list01.firebaseio.com",
    projectId: "evaluate-list01",
    storageBucket: "evaluate-list01.appspot.com",
    messagingSenderId: "760322409283"
  };
  firebase.initializeApp(config);
  
  
function writeUserData(evaluator, ownerId, mealKey, name, val, comment) {
  firebase.database().ref(evaluator).child(mealKey).set({
    ownerId: ownerId,
    mealId: mealKey,
    ownerName: name,
    val : val,
    comment:comment
  });
}
// set_evaluate_other('" + meal.ownerId + "','" + meal.key +"','"+ownerName+"','"+eval.ToString()+"');");
function set_evaluate_other(evaluator,ownerId, mealKey, name, val,comment)
{
	//log(evaluation_data);
	
	//writeUserData("alicelee", "honey", "aliceleesunny@gmail.com", "'" + evaluation_data+"'");
	writeUserData(evaluator,ownerId, mealKey, name, val,comment);
 
}
function get_evaluate_list()
{
	log("wow2");
 //alert("wow");
}
function invokeCSCode(data) {
	try {
	    log("Sending Data:" + data);
	    invokeCSharpAction(data);
	}
	catch (err){
	  	log(err);
	}
}

function myFunction()
{
	invokeCSCode("ready");
}
