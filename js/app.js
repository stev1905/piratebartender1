//Constructor function for Questions
var Questionentry = function(question, id) {
    this.question = question;
    this.id = id;
    this.ingredient =[];
};
    Questionentry.prototype.print = function(){
        $('<label for="Questionlabel" id="label">'+this.question+'</label><br><select class="form-control question-dropdown" id="'+this.id+'"><option selected="true" disabled="disabled">Choose..</option><option id="0">Yes</option><option id="1">A little Bit</option><option id="2">No</option></select>').insertBefore('#button');
};    

var Question1 = new Questionentry("Do ye like yer drinks strong?","1");
var Question2 = new Questionentry("Do ye like it with a salty tang?","2");
var Question3 = new Questionentry("Are ye a lubber who likes it bitter?","3");
var Question4 = new Questionentry("Would ye like a bit of sweetness with yer poison?","4");
var Question5 = new Questionentry("Are ye one for a fruity finish?","5");
//console.log(Question1);

//Constructor function for Ingredients
var Ingredients = function(ingredient){
    this.ingredient = ingredient;
};
var strong = new Ingredients(["Glug of rum", "slug of whisky", "splash of gin"]);
var salty  = new Ingredients(["Olive on a stick", "salt-dusted rim", "rasher of bacon"]);
var bitter = new Ingredients(["Shake of bitters", "splash of tonic", "twist of lemon peel"]);
var sweet  = new Ingredients(["Sugar cube", "spoonful of honey", "splash of cola"]);
var fruity = new Ingredients(["Slice of orange", "dash of cassis", "cherry on top"]);

var Answer = {
    strong:'',
    salty:'',
    bitter:'',
    sweet:'',
    fruity:'',
}

$(document).ready(function(){
    Question1.print();
    Question2.print();
    Question3.print();
    Question4.print();
    Question5.print();

    $('.question-dropdown').change(function(){
        var id = $(this).attr('id');
        var answer_id = $(this).children(":selected").attr("id");
        switch (id) {
            case '1': 
                Answer.strong = strong.ingredient[answer_id];
                break; 
            case '2':
                Answer.salty = salty.ingredient[answer_id];
                break; 
            case '3':
                Answer.bitter = bitter.ingredient[answer_id];
                break; 
            case '4':
                Answer.sweet = sweet.ingredient[answer_id];
                break; 
            case '5':
                Answer.fruity = fruity.ingredient[answer_id];
                break; 
        }    
    });

    $('#button').click(function(){
            $('#myModal').modal('show');
            $('.modal-body').append('Here ye '+Answer.strong+' with a '+Answer.salty+', a '+Answer.bitter+' topped with a '+Answer.sweet+' and a '+Answer.fruity);
        }); 
});