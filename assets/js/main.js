let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ],

    }
]

// Output Nala
console.log(unsereHaustiere[0].names[1])

// Output Droopy
console.log(unsereHaustiere[1].names[2])

// Output all cat names
console.log(unsereHaustiere[0].names)

// Output all dog names
console.log(unsereHaustiere[1].names)


// use an object method (function) to change dog names
function newNames() {
    return unsereHaustiere[1].names = ['Balu', 'Snoopy']
}
newNames()
console.log(newNames())

