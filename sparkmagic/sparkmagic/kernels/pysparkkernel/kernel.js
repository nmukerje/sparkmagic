define(['base/js/namespace'], function(IPython){
        console.log ("debug : onload")
        var onload = function() {
            IPython.CodeCell.options_default.highlight_modes['magic_text/x-sql'] = {'reg':[/^%%sql/]};
            IPython.CodeCell.options_default.highlight_modes['text/x-python'] = {'reg':[/^%%python/]};
            IPython.CodeCell.options_default.highlight_modes['text/x-scala'] = {'reg':[/^%%scalaspark/]};
            IPython.CodeCell.options_default.highlight_modes['text/x-rsrc'] = {'reg':[/^%%sparkr/]};
        }

        return { onload: onload }
    })
