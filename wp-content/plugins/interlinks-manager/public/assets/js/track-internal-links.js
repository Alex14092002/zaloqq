jQuery(document).ready(function($) {
    'use strict';
    $(document.body).on('mousedown', 'a[data-ail]', function() {
        'use strict';
        const link_type = 'ail';
        track_link(link_type, $(this));
    });
    $(document.body).on('mousedown', 'a[data-mil]', function() {
        'use strict';
        const link_type = 'mil';
        track_link(link_type, $(this));
    });

    function track_link(link_type, caller_element) {
        'use strict';
        const source_post_id = caller_element.attr('data-' + link_type);
        const target_url = caller_element.attr('href');
        const data = {
            "action": "track_internal_link",
            "security": window.DAIM_PARAMETERS.nonce,
            "link_type": link_type,
            "source_post_id": source_post_id,
            "target_url": target_url
        };
        $.post(window.DAIM_PARAMETERS.ajax_url, data, function(data) {});
    }
});