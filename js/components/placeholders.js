/* Placeholders function that puts the label as a placeholder in input type text, textarea, and option 
/* To use replace 'form' with whatever you want to target, 'form' will do all forms on site:
//=============================================
/* placeHolders('form');
//=============================================*/

function placeHolders(form) {

  var exit = false;

  if($(form).hasClass('fdpc_designready_order_form')) {
    exit = true;
  }

  $(form).parents().each(function() {
    if( $(this).hasClass('checkout_process') ) {
      exit = true;
    }
  });

  if (exit) {
    return;
  }

  $(form).find('.portal_login div, .form_row, .e2ma_signup_form_row').each(function() {

    var label = $(this).find('.form_label label, .e2ma_signup_form_label');
    var input = $(this).find('.form_field input[type="text"]');
    var textarea = $(this).find('textarea');
    var select = $(this).find('select');
    var text = $.trim(label.text()).replace(/ +(?= )/g,'');
    var isRequired = false;

    if($(this).hasClass('required_form_row')) {
      isRequired = true;
    }

    if(isRequired) {
      text = text + ' *';
    }

    if(input.length) {
      $(input).attr("placeholder", text);
      label.hide();
    }

    if(textarea.length) {
      $(textarea).attr("placeholder", text);
      label.hide();
    }

    if(select.length) {
      $(select).find('option').first().prop('disabled',true).text(text);
      label.hide();
    }

  });
}