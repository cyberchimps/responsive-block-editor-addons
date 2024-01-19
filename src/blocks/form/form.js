/**
 * Frontend js file for Form Block.
 */
(function ($) {
    // document is ready.
    $('.responsive-block-editor-addons-form-submit-success-message, .responsive-block-editor-addons-form-submit-error-message').hide()
    $(function () {

        var $form = $('.responsive-block-editor-addons-form__form');

        function mergeDuplicateKeys(arr) {
            const result = {};
          
            arr.forEach(item => {
              const [key, value] = item.split(': ');
          
              if (result[key]) {
                // If the key already exists, append the value
                result[key] += `, ${value}`;
              } else {
                // If the key doesn't exist, create a new key-value pair
                result[key] = value;
              }
            });
          
            // Convert the object back to an array
            const mergedArray = Object.entries(result).map(([key, value]) => `${key}: ${value}`);
          
            return mergedArray;
          }

        $form.on('submit', function(e) {
            e.preventDefault();
            $('.responsive-block-editor-addons-form-submit-success-message, .responsive-block-editor-addons-form-submit-error-message').hide()

            let formId = $form.attr('id');
            let blockId = formId.replace('rba-form-', '');

            var form = document.getElementById(`rba-form-${blockId}`);
            var inputs = form.getElementsByTagName('input');
            var textareas = form.getElementsByTagName('textarea');

            var spanElement = $('<span>', {
                text: '',
                class: 'responsive-block-editor-addons-form-submit-button-spinner',
              }
            );
          
            // Append the span inside the button
            $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button`).attr('disabled', true);
            $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button`).css('cursor', 'not-allowed');
            $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button`).append(spanElement);

            // Convert HTMLCollection to Array and merge input and textarea arrays
            var inputFields = Array.from(inputs).concat(Array.from(textareas));

            var fields = [];

            inputFields.forEach(function (input) {
                var label = input.closest('.responsive-block-editor-addons-form-input').querySelector('.responsive-block-editor-addons-form-input-label .responsive-block-editor-addons-form-input__label');
                fields.push(`${label.textContent}: ${input.value}`)
            });

            let formEmailTo = $form.data('email-to')
                formEmailTo = formEmailTo === '' || formEmailTo === undefined ? rbea_form_block.adminEmail : formEmailTo
            let formSubject = $form.data('subject')

            $.ajax({
                type: 'POST',
                url: rbea_form_block.siteurl + '/wp-json/wp/v2/rba_process_form/',
                dataType: "json",
                data: {
                    form_data: mergeDuplicateKeys(fields),
                    page_url: window.location.href,
                    email_to: formEmailTo,
                    subject: formSubject,
                    site_name: rbea_form_block.siteName,
                    site_url: rbea_form_block.siteurl,
                },
                success: function(response) {  
                    if ( response.success ) {
                        $('.responsive-block-editor-addons-form-submit-success-message').show();
                            inputFields.forEach(function(input) {
                                console.log(input)
                                input.value = '';
                            });
                    } else {
                        $('.responsive-block-editor-addons-form-submit-error-message').show();
                    }
                    $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button .responsive-block-editor-addons-form-submit-button-spinner`).remove();
                    $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button`).css('cursor', 'pointer');
                    $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button`).attr('disabled', false);
                },
                error: function(error) {
                    $('.responsive-block-editor-addons-form-submit-error-message').show();
                    $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button .responsive-block-editor-addons-form-submit-button-spinner`).remove();
                    $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button`).css('cursor', 'pointer');
                    $(`#rba-form-${blockId} .responsive-block-editor-addons-form-submit-button`).attr('disabled', false);
                }
            });

        })
    });
})(jQuery)