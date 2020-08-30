// Circle
//========================================================================================//
var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

var upWorkoutBtn = document.querySelector('#workout-time-up')
var downWorkoutBtn = document.querySelector('#workout-time-down')
var workoutTime = 0
var step = 10
var min = 0
var max = 100
var counter = 15

const input = document.querySelector('input');
setProgress(input.value);

function breakpointDown(x) {
  if (x.matches) { // If media query matches
    var circle = document.querySelector('circle');
    circle.setAttribute('r', '104');
    circle.setAttribute('cx', '120');
    circle.setAttribute('cy', '120');
  }
}

//Total Time Up Arrow - Workout
//========================================================================================//
upWorkoutBtn.addEventListener('click', function() {
  if (counter == 60) {
    //do nothing
  } else{
    counter += 5
    var workoutTimeText = document.querySelector('.time-total')
    workoutTimeText.textContent = parseInt(counter)

    const input = document.querySelector('input');
    input.value = parseInt(step) + parseInt(input.value)
    setProgress(input.value);

    input.addEventListener('change', function(e) {
      if (input.value < 101 && input.value > -1) {
        setProgress(input.value);
      }
    })  
  }
})

//Total Time Down Arrow - Workout
//========================================================================================//
downWorkoutBtn.addEventListener('click', function() {
  if (counter == 15) {
    //do nothing
  } else{
    counter -= 5
    var workoutTimeText = document.querySelector('.time-total')
    workoutTimeText.textContent = parseInt(counter)

    const input = document.querySelector('input');
    input.value = parseInt(input.value) - parseInt(step)
    setProgress(input.value);

    input.addEventListener('change', function(e) {
      if (input.value < 101 && input.value > -1) {
        setProgress(input.value);
      }
    })  
  }
})


// Interval Time Buttons
//========================================================================================//
var upWorkBtn = document.querySelector('#work-time-up')
var downWorkBtn = document.querySelector('#work-time-down')
var upRestBtn = document.querySelector('#rest-time-up')
var downRestBtn = document.querySelector('#rest-time-down')
var multiplier = 5
var workTime = 6
var restTime = 6
var totalTime

//Up Arrow - Work
upWorkBtn.addEventListener('click', function() {
  if (workTime == 12) {
    //do nothing
  } else{
  workTime += 1
  restTime -= 1
  totalWorkTime = workTime * multiplier
  totalRestTime = restTime * multiplier
  var workTimeText = document.querySelector('.total-work-time')
  var restTimeText = document.querySelector('.total-rest-time')
  workTimeText.textContent = parseInt(totalWorkTime)
    if (totalRestTime <= 5){
      restTimeText.textContent ='0' +  parseInt(totalRestTime)

    }else{
      restTimeText.textContent = parseInt(totalRestTime)

    }
  }
})
//Down Arrow - Work
downWorkBtn.addEventListener('click', function() {
  if (workTime == 3) {
    //do nothing
  } else{
    workTime -= 1
    restTime += 1
    totalWorkTime = workTime * multiplier
    totalRestTime = restTime * multiplier
    var workTimeText = document.querySelector('.total-work-time')
    var restTimeText = document.querySelector('.total-rest-time')
    workTimeText.textContent = parseInt(totalWorkTime)
      if (totalRestTime <= 5){
        restTimeText.textContent ='0' +  parseInt(totalRestTime)

      }else{
        restTimeText.textContent = parseInt(totalRestTime)

      }
    }
})

//Up Arrow - Rest
upRestBtn.addEventListener('click', function() {
  if (restTime == 9) {
    //do nothing
  } else{
  workTime -= 1
  restTime += 1
  totalWorkTime = workTime * multiplier
  totalRestTime = restTime * multiplier
  var workTimeText = document.querySelector('.total-work-time')
  var restTimeText = document.querySelector('.total-rest-time')
  workTimeText.textContent = parseInt(totalWorkTime)
    if (totalRestTime <= 5){
      restTimeText.textContent ='0' +  parseInt(totalRestTime)

    }else{
      restTimeText.textContent = parseInt(totalRestTime)

    }
  }
})

//Down Arrow - Rest
downRestBtn.addEventListener('click', function() {
  if (restTime == 0) {
    //do nothing
  } else{
    workTime += 1
    restTime -= 1
    totalWorkTime = workTime * multiplier
    totalRestTime = restTime * multiplier
    var workTimeText = document.querySelector('.total-work-time')
    var restTimeText = document.querySelector('.total-rest-time')
    workTimeText.textContent = parseInt(totalWorkTime)
      if (totalRestTime <= 5){
        restTimeText.textContent = '0' + parseInt(totalRestTime)

      }else{
        restTimeText.textContent = parseInt(totalRestTime)
      }
    }
})

in_eq = []
in_musc = []

//Muscle Groups 
//========================================================================================//
//Setting button to active and pushed to list
function setMuscleGroups(e, musclegroup){
  //console.log("musc" + musclegroup)
  if (!e.classList.contains("active")) {
    in_musc.push(musclegroup)
  }
  else {
    in_musc.pop(musclegroup)
  }
  //console.log("Muscle Input" + in_musc)
  e.classList.toggle("active")
}

//  Equipment
//========================================================================================//
function setEquipment(e, equipment){
  if (!e.classList.contains("active")) {
    in_eq.push(equipment)
  }
  else {
    in_eq.pop(equipment)
  }
  e.classList.toggle("active")
}

//Tool tip
//========================================================================================//
function hoverToolTip(s) {
s.nextElementSibling.classList.toggle("visible")

}

// Collate Exercise and Equipment
//========================================================================================//

//Pretty Exercise Name List
const p_ex = {
  "s_press" : "Shoulder Press",
  "s_a_s_press" : "Single Arm Shoulder Press",
  "lat_raise" : ["Lateral Raise"],
  "f_raise" : ["Front Raise"],
  "shrugs" : ["Shoulder Shrugs"],
  "c_press" : ["Chest Press"],
  "c_flys" : ["Chest Flys"],
  "c_press" : ["Chest Press"],
  "b_curls" : "Bicep Curls",
  "tri_ext" : ["Tricep Extension"],
  "hammer_curl" : ["Hammer Curls"],
  "tri_kick" : ["Tricep Kickbacks"],
  "b_row" : ["Bent Over Row"],
  "s_b_row" : ["Single Bent Over Row"],
  "d_lift" : ["Deadlifts"],
  "obl_twist" : ["Olique Twist"],
  "oh_s_ups" : ["Over Head Sit ups"],
  "lunges" : ["Lunges"],
  "squats" : ["Squats"],
  "s_plank" : ["Side Plank"],
  "w_tri_dips" : ["Wide Tricep Dips"],
  "p_ups" : ["Push Ups"],
  "dia_p_ups" : ["Diamond Push Ups"],
  "w_p_ups" : ["Wide Push ups"],
  "s_arm_p" : ["Straight arm Plank"],
  "tri_dips" : ["Tricep Dips"],
  "s_man" : ["Superman Extensions"],
  "plank" : ["Plank"],
  "bi_crunch" : ["Bicycle Crunch"],
  "v_snap" : ["V Snaps"],
  "v_hold" : ["V Hold"],
  "spri_s_up" : ["Sprinter Sit-Ups"],
  "s_ups" : ["Sit-Ups"],
  "t_taps" : ["Toe Taps"],
  "m_climb" : ["Moutain Climbers"],
  "c_raises" : ["Calf Raises"],
  "j_squat" : ["Jump Squats"],
  "s_lunges" : ["Side Lunges"],
  "ly_s_abd" : ["Lying Side Abduction"],
  "f_thrust" : ["Frog Thrust"],
  "g_bridge" : ["Glute Bridge"],
  "k_back" : ["Kickbacks"],
  "s_jumps" : ["Star Jumps"],
  "h_knees" : ["High Knees"],
  "t_jumps" : ["Tuck Jumps"],
  "burpees" : ["Burpees"],
  "m_press" : ["Miltary Press"],
  "c_j" : ["Clean and Jerk"],
  "f_squat" : ["Front Squat"],
  "skip" : ["Skippng Rope"],
  "obl_crunch" : ["Oblique Crunch"],
  "b_twist" : ["Ball Twist"],
  "ly_l_curls" : ["Lying Leg Curls"],
  "ham_curls" : ["Hamstring Curl"],
  "h_raises" : ["Hip Raise"],
  "w_squat" : ["Wall squat"],
  "add" : ["Sitting Adduction"],
  "l_raises" : ["Leg Raises"],
  "bridge" : ["Bridge"],
  "s_bi_curls" : ["Single Bicep Curls"],
  "rev_bridge" : ["Reverse Bridge"],
  "c_ext" : ["Chest Extensions"],
  "s_tri_ext" : ["Single Tricep Extension"],
  "sprint" : ["Sprint"],
  "eliptical" : ["Eliptical"],
};

//Exercise List
//"Exercise_shorthand" : [["Muscle Group"], ["Equipment"]]
const exercises = {
  "s_press" : [["Shoulders"],["Dumbbell","Barbell","Resistance Bands"]],
  "s_a_s_press" : [["Shoulders"],["Dumbbell","Resistance Bands"]],
  "lat_raise" : [["Shoulders"],["Dumbbell","Resistance Bands"]],
  "f_raise" : [["Shoulders"],["Dumbbell","Resistance Bands"]],
  "shrugs" : [["Shoulders"],["Dumbbell","Barbell"]],
  "c_press" : [["Chest"], ["Dumbbell","Barbell"]],
  "c_flys" : [["Chest"],["Dumbbell"]],
  "b_curls" : [["Arms"],["Dumbbell","Barbell"]],
  "tri_ext" : [["Arms"],["Dumbbell","Resistance Bands"]],
  "hammer_curl" : [["Arms"],["Dumbbell"]],
  "tri_kick" : [["Arms"],["Dumbbell"]],
  "b_row" : [["Back"],["Dumbbell","Barbell","Resistance Bands"]],
  "s_b_row" : [["Back"],["Dumbbell"]],
  "d_lift" : [["Back", "Legs"],["Dumbbell","Barbell"]],
  "obl_twist" : [["Abs"],["Dumbbell","Resistance Bands"]],
  "oh_s_ups" : [["Abs"],["Dumbbell","Exercise Ball"]],
  "lunges" : [["Legs","Glutes"],["Dumbbell","Barbell","Body Weight"]],
  "squats" : [["Legs","Glutes"],["Dumbbell","Barbell","Body Weight"]],
  "s_plank" : ["Shoulders", "Abs"],
  "w_tri_dips" : ["Abs"],
  "p_ups" : ["Chest"],
  "dia_p_ups" : ["Chest"],
  "w_p_ups" : ["Chest"],
  "s_arm_p" : ["Chest"],
  "tri_dips" : ["Arms"],
  "s_man" : ["Back","Glutes"],
  "plank" : ["Abs"],
  "bi_crunch" : ["Abs"],
  "v_snap" : ["Abs"],
  "v_hold" : ["Abs"],
  "spri_s_up" : ["Abs"],
  "s_ups" : ["Abs"],
  "t_taps" : ["Abs"],
  "m_climb" : ["Abs","Cardio"],
  "c_raises" : ["Legs"],
  "j_squat" : ["Legs","Cardio"],
  "s_lunges" : ["Legs","Hips"],
  "ly_s_abd" : ["Hips","Glutes"],
  "f_thrust" : ["Glutes"],
  "g_bridge" : ["Glutes"],
  "k_back" : ["Glutes"],
  "s_jumps" : ["Cardio"],
  "h_knees" : ["Cardio"],
  "t_jumps" : ["Cardio"],
  "burpees" : ["Cardio"],
  "m_press" : ["Shoulders"],
  "c_j" : ["Shoulders"],
  "f_squat" : ["Legs"],
  "skip" : ["Cardio"],
  "obl_crunch" : ["Abs"],
  "b_twist" : ["Abs"],
  "ly_l_curls" : ["Legs"],
  "ham_curls" : ["Legs"],
  "h_raises" : ["Legs", "Hips"],
  "w_squat" : ["Legs"],
  "add" : ["Hips"],
  "l_raises" : ["Abs","Hips"],
  "bridge" : ["Glutes"],
  "rev_bridge" : ["Glutes"],
  "s_bi_curls" : ["Arms"],
  "c_ext" : ["Chest"],
  "s_tri_ext" : [["Chest"],["Dumbbell","Resistance Bands"]],
  "sprint" : ["Cardio"],
  "eliptical" : ["Cardio"],
};
//Equipment List
//"Equipment" : "Exercise_shorthand"
const equipment = {
  "Dumbbells" : ["s_press", "s_a_s_press", "lat_raise","f_raise","shrugs","c_press","c_flys","b_curls", "tri_ext","hammer_curl","tri_kick","b_row", "s_b_row","d_lift","obl_twist","oh_s_ups","lunges","squats"],
  "None" : ["s_plank", "w_tri_dips", "p_ups", "dia_p_ups","w_p_ups", "s_arm_p", "tri_dips", "s_man", "plank", "bi_crunch", "v_snap", "v_hold", "spri_s_up", "s_ups", "obl_twist","t_taps", "m_climb","c_raises", "lunges", "j_squat","squats","s_lunges","ly_s_abd","f_thrust" ,"g_bridge", "k_back","s_jumps", "h_knees","t_jumps", "burpees"],
  "Barbells" : ["m_press","c_j", "c_press", "b_curls", "b_row" ,"d_lift","f_squat","lunges","squats","shrugs"],
  "Skipping Rope" : ["skip"],
  "Exercise Ball" : ["p_ups","obl_twist","obl_crunch","b_twist","lunges","ly_l_curls","ham_curls","h_raises","w_squat","add","l_raises","bridge","rev_bridge","oh_s_ups"],
  "Resistance Bands" : ["s_press", "lat_raise","c_ext","b_curls","tri_ext","s_bi_curls","s_tri_ext","tri_kick","b_row","obl_twist","squats","d_lift","f_raise","s_a_s_press"],
  "Tredmill" : ["sprint"],
  "Eliptical" : ["eliptical"],
};

function generateExercises() {
  //Init an output array of exercises to be printed
  var out_ex = []
  // Search through each input equipment 
  for (var eq of in_eq) {
    var tmp_ex;
    //Always include No equipment as an option
    if (!in_eq.includes("None")) {
      in_eq.push("None")
    }
    tmp_ex = equipment[eq];
    for (var ex of tmp_ex) {
      if(exercises[ex][0].constructor == Array) {
        //console.log("ARRAY")
        mus = exercises[ex][0]
        for (var m of mus) {
          //console.log("m is  " + m)
          if (in_musc.includes(m)) {
            //console.log("ex is  " + ex)
            out_ex.push(ex)
          }
        }
      }
      else{
        for (var m of exercises[ex]) {
          if (in_musc.includes(m)) {
            out_ex.push(ex)
          }
        }
      }
    }
  }
  var uniqueList = Array.from(new Set(out_ex))
  //console.log(uniqueList)

  //Shuffle List
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  var randomList = shuffle(uniqueList)
  //console.log(randomList)

  //Limit List to 10 Exercises
  if(randomList.length > 10){
    var randomList = randomList.slice(0,10)
  }
  var counter = 1

  for (ex of randomList) {
    if(exercises[ex][0].constructor == Array) {
      var ranIndex = Math.floor(Math.random() * exercises[ex][1].length)
      var ex_eq = exercises[ex][1][ranIndex] 
      ex = p_ex[ex]
      listExercise(ex_eq +" "+ ex, counter)
      counter += 1
    }
    else{
    listExercise(p_ex[ex], counter)
    counter += 1

    }
  }
}

// Add exercises to HTML list
function listExercise(exercise, counter) {
  //console.log("ex" + exercise)
  var listArr = [] 
  let exList = document.querySelector('#exercises')
  //console.log("list " + exList)
  var classText = "'col-5 s_exer'"
  exList.innerHTML += "<div class="+classText +"><li><h4>" +counter+ ". "+exercise + "</h4></li></div>"
}
