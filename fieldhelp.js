$(function() {
    const $toggles = $('[data-toggle-toggle]');
    // Fix for href.
    $toggles.each(function() {
        const $toggle = $(this);
        if (this.hasAttribute('href')) {
            this.setAttribute('href','javascript:;');
        }
        const target = $toggle.attr('data-toggle-toggle') ?? false;
        const mode_placement = ''+$toggle.attr('data-toggle-mode') ?? 'inline';
        const mode = mode_placement.split('-')[0];
        const placement = mode_placement.split('-')[1] ?? 'bottom';
        if (mode == 'tooltip') {
            const popover = new bootstrap.Popover($toggle.get(0), {
                content: $('[data-toggle-target="' + target + '"]').html(),
                html: true,
                placement: placement,
                trigger: 'click'
            });
        }
        else {
            $toggle.bind('click', function(e) {
                const name = $toggle.attr('data-toggle-toggle');
                // Set up for named targets.
                if (name != undefined && name.length > 0) {
                    $('[data-toggle-target="' + name + '"]').each(function() {
                        $(this).toggle();
                    });
                }
                // Set up for unnamed (within same table row).
                else {
                    $toggle.closest('tr').find('[data-toggle-target]').each(function() {
                        $(this).toggle();
                    });
                }
                return false;
            });
        }
    });
    $('[data-toggle-target]').each(function() {
        if (this.hasAttribute('hidden') || this.hasAttribute('data-toggle-hidden')) {
            this.removeAttribute('hidden');
            $(this).hide();
        }
    });
});