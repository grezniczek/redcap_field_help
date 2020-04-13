$(function() {
    var toggles = $('[data-toggle-toggle]')
    // Fix for href.
    toggles.each(function() {
        if (this.hasAttribute('href')) {
            this.setAttribute('href','javascript:;')
        }
    });
    toggles.bind('click', function(e) {
        var toggle = $(this)
        var name = toggle.attr('data-toggle-toggle')
        // Set up for named targets.
        if (name != undefined && name.length > 0) {
            $('[data-toggle-target="' + name + '"]').each(function() {
                $(this).toggle()
            })
        }
        // Set up for unnamed (within same table row).
        else {
            toggle.closest('tr').find('[data-toggle-target]').each(function() {
                $(this).toggle()
            })
        }
        return false
    })
    $('[data-toggle-target]').each(function() {
        if (this.hasAttribute('hidden') || this.hasAttribute('data-toggle-hidden')) {
            this.removeAttribute('hidden')
            $(this).hide()
        }
    })
})