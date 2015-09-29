$(function () {
    var countries = {
        GB: { url: 'UK URL',
              tag: 'UK TAG',
              name: "United Kingdom" },
        CA: { url: "http://www.amazon.ca/exec/obidos/external-search",
              tag: "effectivecharities-21",
              name: "Canada" },
        US: { url: 'USA URL',
              tag: 'USA TAG',
              name: "United States" },
    }

    var dropdown = $('#amazon-country');
    for (var c in countries) {
        var country = countries[c];
        $('<option>').val(c).text(country.name).appendTo(dropdown);
    }
    dropdown.show();

    var manuallySelected = false;
    dropdown.on('change', function () {
        setCountry($(this).val());
        manuallySelected = true;
    });

    $.get("http://ipinfo.io", function (response) {
        if (manuallySelected)
            return;

        setCountry(response.country);
        $('#amazon-country').val(response.country);
    }, "jsonp");

    function setCountry(code) {
        var country = countries[code];
        $('#amazon-form').attr('action', country.url);
        $('#amazon-tag').val(country.tag);
    }
})
