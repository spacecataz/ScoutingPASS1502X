var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name",
      "code": "s",
      "type": "scouter",
      "size": 25,
      "maxSize": 50,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026miche",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Predicition",
      "code": "p",
      "type": "radio",
      "choices":{
        "r": "Red<br>",
        "b": "Blue<br>",
        "t": "Tie"
        },
        "defaultValue": "t"
    },
    { "name": "Auto Start Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
 { "name": "Auto Fuel Pickup Location",
      "code": "asl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "15 21 28 35 42 49 56 64 57",
      "expectedMax": 5,
      "shape": "circle 5 black red true"
    },
    { "name": "Fuel Scored",
      "code": "afs",
      "expectedMax": 32,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Neutral Zone",
      "code": "apn",
      "expectedMax": 60,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Approximate Accuracy",
      "code": "autac",
      "type": "radio",
      "choices": {
        "25":  " ~25% -- Low Accuracy<br>",
        "50":  " ~50% -- Medium Accuracy<br>",
        "75":  " ~75% -- High Accuracy<br>",
        "100": "~100% -- Near Perfect Accuracy"
        },
        "defaultValue": "25"
    },
    { "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "c": "Climbed<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Climb Speed",
      "code": "autocs",
      "type": "radio",
      "choices": {
        "0": "Did not attempt <br>",
        "2":  "< 2 seconds (FAST!) <br>",
        "5":  "< 5 seconds (Medium) <br>",
        "10": "> 5 seconds (slow)"
      },
      "defaultValue": "0"
    },
    { "name": "Auto Climb Location",
      "code": "acloc",
      "type": "clickable_image",
      "filename": "2026/rebuilt_tower_topview.png",
      "clickRestriction": "one",
      "dimensions": "4 6",
      "allowableResponses": "7 11 15 19",
      "shape": "circle 5 black red true"
    },
    { "name": "Pickup from Depot",
      "code": "afd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "afo",
      "type": "bool"
    },
    { "name": "Pickup from Neutral Zone",
      "code": "aff",
      "type": "bool"
    },
    { "name": "Can Traverse Bump",
      "code": "autobump",
      "type": "bool",
      "tooltip": "Bot can travel over the bump"
    },
    { "name": "Can Traverse Trench",
    "code": "autotrench",
    "type": "bool",
    "tooltip": "Bot can pass under the trench"
    }
  ],
  "teleop": [
    { "name": "Fuel Scored",
      "code": "tfs",
      "expectedMax": 150,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Neutral Zone",
      "code": "pnz",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Pass from Opp Alliance Zone",
      "code": "poa",
      "expectedMax": 250,
      "altInc1": 10,
      "altInc2": 5,
      "type": "counter"
    },
    { "name": "Approximate Accuracy",
      "code": "teleac",
      "type": "radio",
      "choices": {
        "25":  " ~25% -- Low Accuracy<br>",
        "50":  " ~50% -- Medium Accuracy<br>",
        "75":  " ~75% -- High Accuracy<br>",
        "100": "~100% -- Near Perfect Accuracy"
        },
      "defaultValue": "25"
    },
    { "name": "Pickup from Depot",
      "code": "tfd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "tfo",
      "type": "bool"
    },
    { "name": "Pickup from Floor",
      "code": "tff",
      "type": "bool"
    },
    { "name": "Can Traverse Bump",
      "code": "telebump",
      "type": "bool",
      "tooltip": "Bot can travel over the bump"
    },
    { "name": "Can Traverse Trench",
    "code": "teletrench",
    "type": "bool",
    "tooltip": "Bot can pass under the trench"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "0": "Attempted<br>",
        "-1": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Climb Speed",
      "code": "endcs",
      "type": "radio",
      "choices": {
        "0": "Did not attempt climb <br>",
        "2":  "< 2 seconds (FAST!) <br>",
        "5":  "< 5 seconds (Medium) <br>",
        "10": "> 5 seconds (slow)"
      },
      "defaultValue": "2"
    },
    { "name": "Endgame Climb Location",
      "code": "ecloc",
      "type": "clickable_image",
      "filename": "2026/rebuilt_tower_topview.png",
      "clickRestriction": "one",
      "dimensions": "4 6",
      "allowableResponses": "7 11 15 19",
      "shape": "circle 5 black red true"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "0": "Not Effective<br>",
        "1": "Average<br>",
        "2": "Very Effective<br>",
        "-1": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "0": "Below Average<br>",
        "1": "Average<br>",
        "3": "Good<br>",
        "5": "Excellent<br>",
        "-1": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Intake Rating",
      "code": "intake",
      "type": "radio",
      "choices": {
        "1": "1 (slow & few balls)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast & many balls)"
      },
      "defaultValue":"3"
    },
    { "name": "Crossed Bump",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "Crossed Trench",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Ball Surfing<br>(Gets stuck ontop of balls)",
      "code": "surf",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "def",
      "type": "bool"
    },
    { "name": "Excessive Penalties",
      "code": "pen",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 30,
      "maxSize": 100,
      "defaultValue": "None"
    }
  ]
}`;
