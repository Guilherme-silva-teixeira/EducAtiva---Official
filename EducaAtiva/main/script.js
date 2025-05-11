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

$('.parallax-window').parallax({imageSrc: 'edHeader.png'});
