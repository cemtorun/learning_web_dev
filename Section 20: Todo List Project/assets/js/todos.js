// check of specific todos by clicking

// normally we would have an li but if we want new lis to be able to be delete and completed, we need to put the parent element as being selected and give an extra argument after the event
// the listener needs to be added to an element that already exists when the page loads but make it so we are listening to only the lis when that ul
// must also be using on click and not just click
// same idea for span below
// lis that may or may not have been on the page when it loaded inside a ul that was definetly on the page when it loaded, add the listened to those lis
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// click on x to delete todo
// event bubbling where on event on a child element ripples up /bubbles up to all parent elements and triggering any parent click events
// we can add an object to the anonymous function called event (can be called anything) then we add in the event.stopPropogation method, jQuery method that stops this bubbling
$("ul").on("click", "span", function (event) {
    // when we click on span, we need to remove li
    // can do li span or span
    // parent lets us access the parent of span which is li
    // gives parent element of span as a jQuery element
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    // the two this arent the same, one is an span and second is a li
    // we put remove in bc if we just had fadeOut it would still be display="none" and we want to delete but we have to delete after the fadeOut runs, thats why we put in inside the function  
    event.stopPropagation(); // stops bubbling
});


// get input and add to todos

// effects all inputs where type is equal to text
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var newValue = $(this).val();
        $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + newValue + '</li>');
        $(this).val("") // set the text back to nothing so new todo can be entered w/o backspacing
    }
});


$(".plus").on("click", function(){
    $("input[type='text']").fadeToggle(1000);
})