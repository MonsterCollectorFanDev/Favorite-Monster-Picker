var arrays = {
    "Neutral" : [
        [],
        [
            "ELEMENTIGER"
        ]
    ],
    "Fighter": [
        [],
        [
            "ELEMENTIGER"
        ]
    ]
    }

var rev_map = {}

var monster_aspect_array = ["Neutral"]

for (var aspect in monster_aspect_array) {
    let families = arrays[monster_aspect_array[aspect]];
    for(let i=1; i<families.length; i++) {
		for(let monster in families[i]) {
			if(!rev_map[families[i][monster]])
				rev_map[families[i][monster]] = [];
			rev_map[families[i][monster]].push(monster_aspect_array[aspect])
		}
	}
}
