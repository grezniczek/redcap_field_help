$(function() {
    const toggles = $('[data-toggle-toggle]')
    toggles.bind('click', function() {
        const toggle = $(this)
        const name = toggle.attr('data-toggle-toggle')
        if (name != undefined && name.length > 0) {
            $(`[data-toggle-target=${name}]`).each(function() {
                $(this).toggle()
            })
        }
        else {
            toggle.siblings('[data-toggle-target]').each(function() {
                $(this).toggle()
            })
        }
    })
    const targets = $('[data-toggle-target]')
    targets.each(function() {
        if (this.hasAttribute('hidden') || this.hasAttribute('data-toggle-hidden')) {
            this.removeAttribute('hidden')
            $(this).hide()
        }
    })
})