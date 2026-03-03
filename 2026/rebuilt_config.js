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
      "defaultValue": "Chelsea",
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
 { "name": "Auto Shooting Location",
      "code": "asl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
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
        "2":  "< 2 seconds (FAST!) <br>",
        "5":  "< 5 seconds (Medium)><br>",
        "10": "> 5 seconds (slow)"
      },
      "defaultValue": "2"
    },
    { "name": "Auto Climb Location",
      "code": "acloc",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "29 30 36 37 43 44",
      "expectedMax": 25,
      "toggleClick": "true",
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
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
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
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
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
    { "name": "Fuel Percentage",
      "tooltip": "What percentage of the total fuel for this alliance did this robot score?",
      "code": "pct",
      "type": "number",
      "min": 0,
      "max": 100
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
