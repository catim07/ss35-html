let listStaff = [
    {
        id: 1,
        name: "Nguyễn văn A",
        position: "developer"
    },
    {
        id: 2,
        name: "Trần Thị B",
        position: "designer"
    },
    {
        id: 3,
        name: "Phạm thị V",
        position: "Project manager"
    },
    {
        id: 4,
        name: "lê thị bưởi",
        position: "Tester"
    }
]
if (localStorage.getItem("listStaff")) {
    listStaff = JSON.parse(localStorage.getItem("listStaff"))
} else {
    localStorage.setItem("listStaff", JSON.stringify(listStaff))
}
function updateData() {
    localStorage.setItem("listStaff", JSON.stringify(listStaff))
}
function add(e) {
    e.preventDefault()
    temp = {
        id: listStaff[listStaff.length - 1].id + 1,
        name: e.target.name.value,
        position: e.target.position.value
    }
    listStaff.push(temp)
    updateData()
    render()
}
function render() {
    let links = document.getElementById("links")
    let data = ``
    let temp = listStaff.slice(cur * maxItem - maxItem, cur * maxItem)
    for (let i = 0; i < temp.length; i++) {
        data += `<tr>
                    <th scope="row">${temp[i].id}</th>
                    <td>${temp[i].name}</td>
                    <td>${temp[i].position}</td>
                  </tr>`
    }
    links.innerHTML = data
}

const maxItem = 3
let cur = 1

let paginButtom = document.getElementById("paginButtom")
function renderPagin() {
    const countPage = Math.ceil(listStaff.length / maxItem)
    let dataPagin = ``
    for (let i = 1; i <= countPage; i++) {
        dataPagin += `
        <button onclick="setPage(${i})" style="color: ${i == cur ? "red" : ""}" type="button" class="btn btn-outline-primary">${i}</button>
        `
    }
    paginButtom.innerHTML = `
    <button onclick="setPage(${cur - 1})" type="button" class="btn btn-outline-primary">Previous</button>
                ${dataPagin}
                <button onclick="setPage(${cur + 1})" type="button" class="btn btn-outline-primary">Next</button>

    `
    updateData()
}
function setPage(index) {
    const countPage = Math.ceil(listStaff.length / maxItem)
    if (index == 0) {
        index = 1
    }
    if (index > countPage) {
        index = countPage
    }
    cur = index
    render()
    renderPagin()
    updateData()
}
render()
renderPagin()