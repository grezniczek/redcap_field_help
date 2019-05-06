$(function() {
    const toggles = $('[data-toggle-toggle]')
    toggles.bind('click', function() {
        const toggle = $(this)
        // Fix for href.
        if (this.hasAttribute('href')) {
            this.setAttribute('href','javascript:;')
        }
        const name = toggle.attr('data-toggle-toggle')
        // Set up for named targets.
        if (name != undefined && name.length > 0) {
            $(`[data-toggle-target=${name}]`).each(function() {
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
    const targets = $('[data-toggle-target]')
    targets.each(function() {
        if (this.hasAttribute('hidden') || this.hasAttribute('data-toggle-hidden')) {
            this.removeAttribute('hidden')
            $(this).hide()
        }
    })
})