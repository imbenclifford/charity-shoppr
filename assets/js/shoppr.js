$(function () {
    var countries = {
        GB: { url: '...',
              tag: '...',
              name: "United Kingdom" },
        CA: { url: "http://www.amazon.ca/exec/obidos/external-search",
              tag: "effectivecharities-21",
              name: "Canada" },
        US: { url: '...',
              tag: '...',
              name: "United States" },
    }

    $.get("http://ipinfo.io", function (response) {
        var country = countries[response.country];
        $('#amazon-form').attr('action', country.url);
        $('#amzon-tag').val(country.tag);
        console.log(response);
    }, "jsonp");
})
