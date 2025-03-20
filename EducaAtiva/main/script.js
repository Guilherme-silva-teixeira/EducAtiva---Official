let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

first.addEventListener("mouseenter",
    function()
    {
        this.style.transition = "1s ease";
        this.style.cursor = "pointer";
        this.style.transform = "translateY(7px)";
        this.addEventListener("mouseout",
            function()
            {
                this.style.transform = "translateY(0px)";
            }
        );
    }
);

second.addEventListener("mouseenter",
    function()
    {
        this.style.cursor = "pointer";
        this.style.transition = "1s ease";
        this.style.transform = "translateY(7px)";
        this.addEventListener("mouseout",
            function()
            {
                this.style.transform = "translateY(0px)";
            }
        );
    }
);

third.addEventListener("mouseenter",
    function()
    {
        this.style.cursor = "pointer";
        this.style.transition = "1s ease";
        this.style.transform = "translateY(7px)";
        this.addEventListener("mouseout",
            function()
            {
                this.style.transform = "translateY(0px)";
            }
        );
    }
);

//evento do click

first.addEventListener("mousedown",
    function()
    {
        this.style.transition = "0.3s ease";
        this.style.transform = "translateY(0px)";
        this.addEventListener("mouseup",
            function()
            {
                this.style.transition = "1s ease";
            }
        );
    }
);

second.addEventListener("mousedown",
    function()
    {
        this.style.transition = "0.3s ease";
        this.style.transform = "translateY(0px)";
        this.addEventListener("mouseup",
            function()
            {
                this.style.transition = "1s ease";
            }
        );
    }
);

third.addEventListener("mousedown",
    function()
    {
        this.style.transition = "0.3s ease";
        this.style.transform = "translateY(0px)";
        this.addEventListener("mouseup",
            function()
            {
                this.style.transition = "1s ease";
            }
        );
    }
);

let contentArray = [
    "jardim",
    "quintal",
    "floresta mágica",
    "o projeto",
    "roteiro",
    "descrição"
];

let desc = [
];

function search(array)
{
    let boxSearch = document.getElementById("searchBox");
    let mainContent = document.getElementById("mainContent");
    for(let i = 0; i <= array.length; i++)
    {
        if(array[i] == boxSearch.value)
        {
            mainContent.innerHTML = `
                <h1>Conteúdo encontrado</h1><br>
                <li><span id="searchedText">${array[i]}</span></li>
            `;
        }else if(array[i] != boxSearch.value && (array[i].value != "" ||
             array[i].value == " ") && (array[i] != "" || array[i] == " "))
        {
            mainContent.innerHTML = `
                <h1>Nenhum conteúdo encontrado</h1><br></br>
            `;
        }
        else if(array[i].value == "" || array[i].value == " " ||
            array[i] == "" || array[i] == " ")
        {
            mainContent.innerHTML = `
                <h1>Por favor insíra um conteúdo</h1>
            `;
        }
        let selectedText = document.getElementById("searchedText");
        selectedText.style.background = "#fd0";
    }
}

let searchButton = document.getElementById("icon");

searchButton.addEventListener("mousedown",
    function()
    {
        search(contentArray);
        console.log(boxSearch.value);
    }
);
