const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const skillForm = document.getElementById("skillForm", "")
const nameInput = document.getElementById("name")
const skillInput = document.getElementById("skill")
const deleteForm = document.getElementById("delete-form")
const deleteInput = document.getElementById("delete-name")
const infoSection = document.getElementById("info")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
    });
};

    const postSkill = (event) => {
        event.preventDefault()
        infoSection.innerHTML = ""

    const body = {
        name: nameInput.value,
        skill: skillInput.value
    }

            nameInput.value = ""
            skillInput.value = ""


axios.post("http://localhost:4000/api/skill/", body)
    .then((res) => {
        const data = res.data
        showInfoOnDom(data)
            
            
    })
    .catch((err) => {
        console.log(err)
})

    // nameInput.value = ""
    // skillInput.value = ""
}

const deleteInfo = (event) => {
    event.preventDefault()
    infoSection.innerHTML = ""

    const name = deleteInput.value

    axios.delete(`"http://localhost:4000/api/delete/${name}`)
        .then((res) => {
            const data = res.data
            showInfoOnDom(data)
    })
}

const showInfoOnDom = (data)  => {
    for (let i = 0; i < data.length; i ++) {
        let para = document.createElement("p")

        para.innerHTML = `<span class= "name-text">${data[i].name}</span> is skilled at<span class="skill-text">
        ${data[i].skill}</span>`
        
        infoSection.appendChild(para)
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
skillForm.addEventListener('submit', postSkill)
deleteForm.addEventListener('submit', deleteInfo)