/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* This file contains standard FrozenForge JS commonly used by projects */

// MESSAGE OVERLAY
var confirmMessageOverlay = function () {
    $('#message-overlay').addClass('fading-out').removeClass('active fading-in');
};
$(document).ready(function () {
    $('#message-overlay button').click(confirmMessageOverlay);
    $(document).on($.support.transition.end, '#message-overlay.fading-in', function () {
        $(this).addClass('active').removeClass('fading-in');
    });
    $(document).on($.support.transition.end, '#message-overlay.fading-out', function () {
        $(this).removeClass('fading-out').css('display', '').children(':not(button)').remove();
    });
    setOnDocumentNodeAdd('#message-overlay',
            function () {
                if (!$(this).hasClass('active') && !$(this).hasClass('fading-in')) {
                    $(this).show(function () {
                        $(this).addClass('fading-in').find('button').focus();
                    });
                }
            });
});
// MESSAGE OVERLAY END

var functionReceiveContent = function (data) {

    //alert("Receiving content..");

    var $items = $(data).filter('[data-target]');
    $items.each(function () {
        var $data = $(this);
        var targetId = $data.data('target');
        var $target = $(targetId);
        //alert("Target acquired: " + targetId + " --> " + $target[0]);

        if ($target[0] === undefined)
            console.log("Target not found: " + targetId);

        // New html
        var newHtml = $data.html();

        var method = $data.data('method');

        // How will we put apply the content?
        if (method === 'append')
            $target.append(newHtml);
        else if (method === 'prepend')
            $target.prepend(newHtml);
        else if (method === 'before')
            $target.before(newHtml);
        else if (method === 'after')
            $target.after(newHtml);
        else if (method === 'remove')
            $target.remove();
        else if (method === 'replace') {
            $target.replaceWith(newHtml);
        }
        else if (method === 'temporary')
            $(newHtml).appendTo($target).remove();

        else
            $target.html(newHtml);

        // New value attribute
        if ($data.data('value') !== undefined) {
            var newValue = $data.data('value');
            $(targetId).val(newValue);
        }
        //alert("Data target done");

    });


    var $scripts = $(data).filter('script');
    $scripts.each(function () {
        $(this).appendTo('body').remove();
    });

    //alert("Successfully received content");    
};

var functionConnectionFailed = function (data) {
    alert("AJAX connection failed, sorry :/");
};

var addTask = function (uid) {
    $('#loading-indicator-container').prepend('<div id="' + uid + '"></div>');
};
var endTask = function (uid) {
    $('#loading-indicator-container').children('#' + uid).remove();
};

var doJsonPost = function (endpoint, method, params, onSuccess, onError) {

    $.jsonRPC.setup({
        endPoint: endpoint,
        namespace: ''
    });

    var id = (Math.random() * 1000000);

    if (onSuccess === undefined) {
        onSuccess = function (result) {
            //console.log("Default success: " + JSON.stringify(result)); 
            if (result.error !== undefined) {
                $('#message-overlay').prepend('<h2>' + result.error.message + '</h2>');
            }
        };
    }

    if (onError === undefined) {
        onError = function (result) {
            //console.log("Default error: " + JSON.stringify(result)); 
            if (result.error !== undefined) {
                $('#message-overlay').prepend('<h2>' + result.error.message + '</h2>');
            }
        };
    }

    $.jsonRPC.request(method, {
        params: params,
        success: onSuccess,
        error: onError,
        id: id
    });
};

function doPost(url, data, functionIfSuccessful) {
    var uid = new Date().getTime();
    addTask(uid);
    $.post(url, data)
            .done(functionReceiveContent)
            .done(functionIfSuccessful)
            .fail(functionConnectionFailed)
            .always(function () {
                endTask(uid);
            });
}

function toggleForm(target) {
    var $target = $(target);
    $target.slideToggle(function () {
        $(this).find('.has-error, .has-success, .has-warning, .form-control').val('').removeClass('has-error has-success has-warning');
    });
}

var validateField = function ($input) {

    var id = $input.attr('id');
    //console.log("Validating " + id);

    //if ($input.data('optional') === undefined)
    if (($input.is('select') && $input.children(':not([disabled])').size() === 0) || $input.val() === '') {
        // Required? Place error
        if ($input.data('required') !== undefined) {
            //console.log(id + " contains an illegal value");
            $input.parents('.form-group').removeClass('has-success has-warning').addClass('has-error');
        }
        // Not required?
        else {
            //console.log(id + " contains a suspect value");
            $input.parents('.form-group').removeClass('has-success has-error');//.addClass('has-warning');
        }
    }
    /*
     else {
     //console.log(id + " contains a legal value");
     $input.parents('.form-group').removeClass('has-error has-warning'); //.addClass('has-success');
     }
     */

    // Has sibling input?
    if ($input.is('input')) {
        var siblingId = '#' + (id.substr(-1) === '2' ? id.slice(0, -1) : id + '2');
        var $siblingInput = $input.siblings(siblingId);
        if ($siblingInput[0] !== undefined)
            if ($input.val().length + $siblingInput.val().length > 0) {
                if ($siblingInput.val() !== $input.val())
                    $input.parent('.form-group').removeClass('has-error has-warning').addClass('has-error');
                else
                    $input.parent('.form-group').removeClass('has-error has-warning');
            }
    }

};
$(document).on('blur', 'input,select', function () {
    validateField($(this));
});

var validateTwoFields = function (targetId) {
    var $target = $(targetId);
    var $target2 = $(targetId + "2");
    var $targets = $(targetId + "," + targetId + "2");

    if ($target.val() === '' || $target2.val() === '') {
        $targets.parents('.form-group').removeClass('has-error has-warning').addClass('has-error');
    }
    else if ($target.val() === $target2.val()) {
        $targets.parents('.form-group').removeClass('has-error has-warning').addClass('has-success');
        //alert($target.parent().html());
    }
    else {
        $targets.parents('.form-group').removeClass('has-warning has-success').addClass('has-error');
        //alert("Nothing wrong");
    }
};

var isFormValid = function ($form) {

    $form.find('input,select').each(function () {
        // alert("Validating " + this);
        validateField($(this));
    });

    var $errors = $form.find('.has-error, .has-warning');
    if ($errors.size() > 0) {
        $errors.first().find('input').focus();
        //console.log($form.attr('id') + " is NOT valid");
        return false;
    }
    //console.log($form.attr('id') + " is valid");
    return true;
};



// The node to be monitored
//var target = $( "#message-overlay" )[0];



// Perform function if parent gets new children:
function setOnDocumentNodeAdd(parent, functionToPerform) {

    var $parent = $(parent);

    if ($parent[0] === null || $parent[0] === undefined) {
        console.error("setOnDocumentNodeAdd ERROR: Parent must already be defined in DOM");
        return;
    }

    // Configuration of the observer:
    var config = {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
    };

    // Create an observer instance
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var newNodes = mutation.addedNodes; // DOM NodeList
            if (newNodes !== null && newNodes.length > 0) { // If there are new nodes added                
                /*
                 for(var i = 0; i < newNodes.length; i++)
                 alert("New node detected: " + newNodes[i].innerHTML);
                 */
                functionToPerform.call($parent[0]);
            }
        });
    });

    observer.observe($parent[0], config);
}


// Reset HTML File input:
function resetFormElement(elementId) {
    var $e = $(elementId);
    $e.wrap('<form>').closest('form').get(0).reset();
    $e.unwrap();
    //alert("Element reset");
}




// Pass in the target node, as well as the observer options
//observer.observe(target, config);

// Later, you can stop observing
//observer.disconnect();