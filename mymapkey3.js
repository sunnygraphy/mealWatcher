var config = {
    apiKey: "AIzaSyBmr2FUtd7SsrSH8L7gosjxPvkZ2WhtXyc",
    authDomain: "evaluate-list01.firebaseapp.com",
    databaseURL: "https://evaluate-list01.firebaseio.com",
    projectId: "evaluate-list01",
    storageBucket: "evaluate-list01.appspot.com",
    messagingSenderId: "760322409283"
  };
  firebase.initializeApp(config);
  
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
} 
  
function writeUserData(evaluator, ownerId, mealKey, name, val, comment,meal_d,fileId) {
  firebase.database().ref(evaluator).child(mealKey).set({
    ownerId: ownerId,
    mealId: mealKey,
    ownerName: name,
    val : val,
    fileId: fileId,
    comment:comment
  });
  
  if(evaluator.localeCompare("1") == 0)
   return;
  var d = formatDate(Date.now());
  
  firebase.database().ref('/evaluated_days').child(evaluator).child(ownerId).child(meal_d).set({
		serial:1
		
	});
	
 firebase.database().ref('/meals').child(mealKey).child(evaluator).set({
		serial:1
		
	});
	
  
}
// set_evaluate_other('" + meal.ownerId + "','" + meal.key +"','"+ownerName+"','"+eval.ToString()+"');");
function set_evaluate_other(evaluator,ownerId, mealKey, name, val,comment,meal_d, fileId)
{
	//log(evaluation_data);
	
	//writeUserData("alicelee", "honey", "aliceleesunny@gmail.com", "'" + evaluation_data+"'");
	writeUserData(evaluator,ownerId, mealKey, name, val,comment,meal_d,fileId);
 
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

function get_meal_list(memberKey, skey, ekey)
{
    mealList = "";
			
	firebase.database().ref(memberKey).orderByKey().startAt(skey).endAt(ekey).once("value", function(snapshot){
		cnt = snapshot.numChildren();
		snapshot.forEach(function(child){
			mealList = mealList + child.key +":";
		});
		
		invokeCSCode("mealList:" + mealList);
		
	});

    
  
}


function get_evaluated_dates_list(memberKey, skey, ekey, friend_key)  //사용안한다
{
    mealdatesList = "";
			
	firebase.database().ref("evaluated_days/"+memberKey).child(friend_key).orderByKey().startAt(skey).endAt(ekey).once("value", function(snapshot){
		cnt = snapshot.numChildren();
		snapshot.forEach(function(child){
			mealdatesList = mealdatesList + child.key +":";
		});
		
		invokeCSCode("mealDatesList:" + mealdatesList);
		
	});

    
  
}




// temporary로 데이터 변환하는데 사용하였다
function convert_data()
{
    var tmp_data = "temporary:";
 	firebase.database().ref("temp").once("value", function(snapshot){
		cnt = snapshot.numChildren();
		snapshot.forEach(function(child){
			tmp_data = tmp_data + child.key +":";
	

		});
		invokeCSCode( tmp_data);		
		
		
		
	});
 
}

function convert_data2(each_member_key)
{
    var tmp_data = "temporary2:";
 	firebase.database().ref("temp").child(each_member_key).once("value", function(snapshot){
		cnt = snapshot.numChildren();
		snapshot.forEach(function(child){
		    var friend = child.val().ownerId;
			tmp_data = tmp_data + child.key + "|" + friend +":";
			
	

		});
		invokeCSCode( tmp_data);		
		
		
		
	});
 
}

function convert_data3(member_key, friend_key, dstring)
{
    
 	firebase.database().ref('/evaluated_days').child(member_key).child(friend_key).child(dstring).set({
		serial:1
		
	});
 
}