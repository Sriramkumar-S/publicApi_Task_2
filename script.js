const url = "https://thronesapi.com/api/v2/Characters";
const container_id = document.getElementById('container');
const row = createDiv('row section');
const displayData = [];
const responseData = fetchResponse(url).then((data) => {
    let newData = data.map((el) => el.family)
    this.displayData = newData;
    console.log(newData)
    console.log(data)
    displaySearchResults(data)
});

function fetchResponse(url) {
    return new Promise((resolve, reject) => {
        const searchResponse = fetch(`${url}`);
        try {
            searchResponse.then((data) => {
                if(data) {
                    return data.json();
                } else {
                    reject("No records found!")
                }
            }).then((resp) => {
                resolve(resp)

            })
        } catch (err) {
            reject(err)
        }
    })
    
}

function searchDetails() {
    
    
    
    
}

function displaySearchResults(data) {
    debugger
    data.forEach(element => {
        
        
        const col = createDiv('col-lg-3 column-div');
        const card = createDiv('card card-div');
        
        const img = document.createElement('img');
        img.src = element.imageUrl;
        img.className = 'card-img-top image-tag';
        img.alt = element.image;

        const ul = document.createElement('ul');
        ul.classList = 'list-group list-group-flush';

        const li_1 = document.createElement('li');
        li_1.className = 'list-group-item';
        li_1.innerHTML = `<b>First Name:</b> ${element.fullName}`;

        const li_2 = document.createElement('li');
        li_2.className = 'list-group-item';
        li_2.innerHTML = `<b>Family:</b> ${element.family}`;
        
        const li_3 = document.createElement('li');
        li_3.className = 'list-group-item';
        li_3.innerHTML = `<b>Title:</b> ${element.title}`;

        ul.append(li_1, li_2, li_3);
        card.append(img, ul);
        col.append(card);
        row.append(col);
        container_id.append(row)
        

    });
    
}
function createAnchor(href) {
    const a = document.createElement('a');
    a.href = href;
    return a;
}

function createDiv(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

function createParagraph(className) {
    const p = document.createElement('p');
    p.className = className;
    return p;
}