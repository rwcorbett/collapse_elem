/**
 * NAME   : collapse_elem.js
 * AUTHOR : Robb Corbett @rwcorbett
 * EMAIL  : robb.corbett@gmail.com || rwcorbett@live.ca
 * GITHUB : https://github.com/rwcorbett/collapse_elem.git
 * DESC   : this library provides a simple way to add a collapsible element anywhere in your page
 *
 * Copyright (c) 2015 Robb Corbett
 *
 */

var Collapse_Elem = Collapse_Elem | {};
Collapse_Elem = function () {
    Collapse_Elem.prototype.load = function (fromTop, fromLeft) {
        //** get expander items
        var expanderBlocks = document.getElementsByClassName("collapse_elem");
        var expanderInner = "<span style='font-size:75%;font-family:\"Source Code Pro\", Consolas, \"Courier New\", monospace;'>&nbsp;click to expand.</span>";
        //** build each and collapse
        for (var i = 0; i < expanderBlocks.length; i++) {
            var expander = document.createElement("i");
            expander.className = " expander fa fa-plus-square";
            expander.innerHTML = expanderInner;
            expander.style.cursor = "pointer";
            expander.style.display = "inline";
            expander.style.padding = "0 0.25em 0 0";
            expander.style.position = "absolute";
            expander.style.top = fromTop && fromTop != "" && typeof fromTop == "string" ? fromTop : "-0.5em";
            expander.style.left = fromLeft && fromLeft != "" && typeof fromLeft == "string" ? fromLeft : "0em";
            var element = expanderBlocks[i];
            var elementInner = element.innerHTML;
            var hiddenInner = document.createElement("span");
            hiddenInner.innerHTML = elementInner;
            hiddenInner.style.display = "none";
            hiddenInner.style.position = "relative";
            hiddenInner.style.top = "0.25em";
            hiddenInner.className = " collapse collapsed";
            element.innerHTML = "";
            element.style.position = "relative";
            element.style.display = "block";
            element.insertAdjacentHTML("afterbegin", expander.outerHTML);
            element.appendChild(hiddenInner);
        }
        //** get buttons
        var expanderButtons = document.getElementsByClassName("expander");
        //** add click event to each one
        for (var i = 0; i < expanderButtons.length; i++) {
            expanderButtons[i].addEventListener('click', function (e) {
                var E = this.parentElement.getElementsByClassName('collapse')[0];
                if (E.className.indexOf("collapsed") >= 0) {
                    E.className = " collapse";
                    E.style.display = "block";
                    this.className = " expander fa fa-minus-square";
                    this.innerHTML = "";
                } else {
                    E.className = " collapse collapsed";
                    E.style.display = "none";
                    this.className = " expander fa fa-plus-square";
                    this.innerHTML = expanderInner;
                }
                e.preventDefault();
            }, true);
        }
    }
};
