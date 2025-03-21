var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "Reefscape 1502 Scouting v1.2",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter name<br>(Firstname Lastname)",
      "code": "s",
      "type": "scouter",
      "size": 15,
      "maxSize": 15,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025misal",
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
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Team Name update 3",
      "code": "n",
      "type": "text",
      "size": 15,
      "maxSize": 50,
      "defaultValue": "Team Name"
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/2025_Reefscape_Field.png",
      "clickRestriction": "one",
      "allowableResponses": "6 7 18 19 30 31 42 43 54 55 66 67",
      "shape": "circle 5 black red true"
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
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "L1 Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "L2 Scores",
      "code": "asq",
      "type": "counter"
    },
    { "name": "L3 Scores",
      "code": "asw",
      "type": "counter"
    },
    { "name": "L4 Scores",
      "code": "ask",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "asd",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "asg",
      "type": "counter"
    }
  ],
  "teleop": [
 { "name": "L1 Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "L2 Scores",
      "code": "tsq",
      "type": "counter"
    },
    { "name": "L3 Scores",
      "code": "tsw",
      "type": "counter"
    },
    { "name": "L4 Scores",
      "code": "tsk",
      "type": "counter"
    },
    { "name": "Processor Scores",
      "code": "tsd",
      "type": "counter"
    },
    { "name": "Net Scores",
      "code": "tsg",
      "type": "counter"
    },
    { "name": "Penalties",
      "code": "pen",
      "type": "counter"
    },
    { "name": "Pickup Coral From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup Algae From",
      "code": "tpa",
      "type": "radio",
      "choices": {
        "r": "Reef<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Cage Timer",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "High Cage<br>",
        "s": "Low Cage<br>",
        "a": "Attempted/Failed & Parked<br>",
        "x": "No park or climb attempted"
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
    { "name": "Died/<br>Immobilized/<br>Gamepiece Stuck",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Coral (>2)",
      "code": "dn",
      "type": "bool"
    },
    { "name": "Would pick<br>for an alliance?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Would NOT pick<br>for an alliance?",
      "tooltip": "Would NOT pick this robot under any circumstances",
      "code": "dnp",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 250,
      "defaultValue": "None"
    }
  ]
}`;
