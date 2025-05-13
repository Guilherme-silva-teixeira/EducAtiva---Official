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
