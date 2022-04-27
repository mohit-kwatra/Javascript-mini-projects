"use strict";

window.onload = function() {

       let findButton = document.querySelector('.find-btn');
       let searchBox = document.querySelector('.search-box');
       let pokeIdNode = document.querySelector('.pokemon-id');
       let pokeNameNode = document.querySelector('.pokemon-name');
       let pokeHeightNode = document.querySelector('.pokemon-height');
       let pokeWeightNode = document.querySelector('.pokemon-weight');
       let pokeMovesNode = document.querySelector('.pokemon-moves');
       let pokeImageNode = document.querySelector('.pokemon-image'); 
       let searchPattern = /[a-z\d]+/; 

        searchBox.addEventListener("input", function(e) {
            
            let searchText = this.value.trim().toLowerCase();

            if(searchText == "") {
                this.classList.add('invalid-input');
            } else if(searchPattern.exec(searchText) == null) {
                this.classList.add('invalid-input');
            } else if(searchPattern.exec(searchText)[0] != searchText) {
                this.classList.add('invalid-input');
            } else {
                this.classList.remove('invalid-input');
            }

        });

       findButton.addEventListener('click', function(e) {

            let searchText = searchBox.value.trim().toLowerCase();
            
            if(searchText == "")
            {
                searchBox.classList.add('invalid-input');
            } else if(searchPattern.exec(searchText) == null) {
                searchBox.classList.add('invalid-input');
            } else if(searchPattern.exec(searchText)[0] != searchText) {
                searchBox.classList.add('invalid-input');
            } else {

                const xhr = new XMLHttpRequest();
                const data = null;

                xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${searchText}`, true);
                xhr.onreadystatechange = function() {

                    if(this.readyState == this.DONE) {
                        searchBox.value = "";
                        if(this.status == 200) {
                            let pokeData = JSON.parse(this.responseText);
                            let pokeName = pokeData.name;
                            let pokeHeight = pokeData.height;
                            let pokeId = pokeData.id;
                            let pokeMoves = pokeData.moves.length;
                            let pokeWeight = pokeData.weight;
                            let pokeImageURL = pokeData.sprites.front_default;

                            pokeIdNode.innerText = pokeId;
                            pokeNameNode.innerText = pokeName;
                            pokeHeightNode.innerText = pokeHeight;
                            pokeWeightNode.innerText = pokeWeight;
                            pokeMovesNode.innerText = pokeMoves;
                            pokeImageNode.src = pokeImageURL;
                        } else if(this.status == 404) {
                            alert("Pokemon with the given name does'nt exist!")
                        } else {
                            alert("Something went wrong!");
                        }
                    }
                };
                
                xhr.send(data);
                                
            }
        
       });

};