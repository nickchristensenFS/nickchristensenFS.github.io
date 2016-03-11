/* Placeholders function that puts the label as a placeholder in input type text, textarea, and option 
/* To use replace 'form' with whatever you want to target, 'form' will do all forms on site:
//=============================================
/* placeHolders('form');
//=============================================*/

function placeHolders(form) {


  $(form).find('.portal-login div, .form-row, .e2ma_signup_form_row').each(function() {

    //if form has class
    if($(form).hasClass('fdpc_designready_order_form')) {
      return;
    }

    //if 'this' has class
    if($(this).hasClass('form-row--file')) {
      return;
    }
    if($(this).hasClass('form-row--date')) {
      return;
    }
    if($(this).hasClass('form-row--datetime')) {
      return;
    }
    if($(this).hasClass('form-row--time')) {
      return;
    }
    if($(this).hasClass('payment--cc-exp')) {
      return;
    }

    //if any parents have classes
    if ($(this).parents('.checkout_process, .event-calendar-search__jump').length) {
      return;
    }

    var label = $(this).find('.form-row__label label, .e2ma_signup_form_label');
    var input = $(this).find('.form-row__controls input[type="text"], .form-row__controls input[type="email"], .form-row__controls input[type="password"], .e2ma_signup_form_element input[type="text"]');
    var textarea = $(this).find('textarea');
    var text = $.trim(label.text()).replace(/ +(?= )/g,'');
    var isRequired = false;

    if($(this).hasClass('form-row--required')) {
      isRequired = true;
    }

    if(isRequired) {
      text = text + ' *';
    }

    if (!text) {
      return;
    }

    if(input.length) {
      $(input).attr("placeholder", text);
      label.hide();
      $(this).find('.form-row__label').hide();
    }

    if(textarea.length) {
      $(textarea).attr("placeholder", text);
      label.hide();
      $(this).find('.form-row__label').hide();
    }

    //show things that should be showing
    if( $(this).hasClass('payment--cc-csc') ){
      $(this).find('.form-row__label').show();  
    }

  });
}