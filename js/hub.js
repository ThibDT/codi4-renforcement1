$(document).ready(function() {
    var form = $("#chat-form");
    var list = $('#messages-list');
    var activeBubbleColor = undefined;
    var activeTextColor = undefined;
    var bubbleBtn = $('#bubble');
    var textBtn = $('#text');
    var answers = [
        "J'aime me beurrer la biscotte.",
        "À l'occasion, je vous mettrai un petit coup de polish...",
        "J'aime quand on m'enduit d'huile...",
        "Comment est votre blanquette ?",
        "On me dit le plus grand bien des harengs pommes à l'huile ?",
        "Écoutez mon ptit, là j'viens d'tuer un croco'. Alors si vous voulez qu'on travaille d'égal à égal, faudrait vous y mettre.",
        "Une dictature c'est quand les gens sont communistes, déjà. Qu'ils ont froid, avec des chapeaux gris et des chaussures à fermeture éclair. C'est ça, une dictature, Dolorès.",
        "J’aime le bruit blanc de l’eau…",
        "C'est notre Raïs à nous : c'est M. René Coty.",
        "En tout cas, on peut dire que le Soviet éponge !",
        "Tu n'es pas seulement un lâche, tu es un traitre... comme ta petite taille le laissait deviner !",
        "Plaît-il ?",
        "Ne pas fumer me tue.",
        "Pourchasser des nazis avec des juifs ? Quelle drôle d'idée !",
        "Je n'y suis pour rien, c'est l'inexpugnable arrogance de votre beauté qui m'asperge.",
        "D'ailleurs, ne dit-on pas qu'une femme qui éclabousse un homme, c'est un peu comme la rosée d'une matinée de printemps. C'est la promesse d'une belle journée et la perspective d'une soirée enflammée.",
    ];
    
    
    function _isValidColor(color) {
        var validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        if(color.length == 7 && color[0] == '#') {
            for(let i=1; i<color.length; i++) {
                if(!validChars.includes(color[i].toLowerCase())) {
                    return false;
                }
            }
        } else {
            return false
        }
        return true;
    }
    
    form.submit(function() {
        var answer = $('<li></li>');
        answer.addClass('left');
        answer.text(answers[Math.floor(Math.random() * answers.length)]);
        if(activeBubbleColor) {
            answer.css({"background-color": activeBubbleColor});
        }
        if(activeTextColor) {
            answer.css({"color": activeTextColor});
        }
        
        setTimeout(function() {
            list.scrollTop(list.height());
        }, 50);
        
        setTimeout(function() {
            if(list.children.length) {
                $('main > div:last-of-type').append("<span>...</span>");
            }
        }, 200);
        
        setTimeout(function() {
            if(list.children.length) {
                list.append(answer);
                $('main div:last-of-type span').remove();
                list.scrollTop(list.height());
            }
        }, (answer.text().length * 15) + 200);
        
        return false;
    });
    
    bubbleBtn.on('click', function() {
        if(_isValidColor($('#bubble-hub').val())) {
            activeBubbleColor = $('#bubble-hub').val();
        }
    });
    
    textBtn.on('click', function() {
        if(_isValidColor($('#text-hub').val())) {
            activeTextColor = $('#text-hub').val();
        }
    })
});