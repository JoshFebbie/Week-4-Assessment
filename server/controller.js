

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["You gots IT going on player!", "You've got all the right moves!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune:  (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made!", "Accept something that you cannot change, and you will feel better!", "All will go well with your new project!", "You will have an amazing encounter with Big-foot!", "You will have wealth and knowlede beyond your wildest dreams!"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)

    },
    postSkill: (req, res) => {
        let name = req.body.name
        let skill = req.body.skill

        db.push ({
            name: name, skill: skill})
            res.status(200).send(db)
    },
    deleteInfo: (req, res) => {
        let {name} = req.params

        for (let i = 0; i < db.length; i++) {
            if(name === db[i].name) {
                db.splice(i, 1)
            }
        }
        res.send(db)
    }
}

const db = [
    {
        name: "Josh",
        skill: "Fishing"
    },
    {
        name: "Kyle",
        skill: "Acting"
    },
    {
        name: "Alex",
        skill: "Nin-jitsu/Coding"
    }
]