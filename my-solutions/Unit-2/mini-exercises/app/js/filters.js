app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g, "-");
  };
});

app.filter('redact', function () {
  return function (items, word) {
    var itemArr = items.split(' ');
    for (var i = 0; i < itemArr.length; i++) {
      var item = itemArr[i];
      if (item === word) {
        itemArr[i] = 'REDACTED';
      }
    }
    return itemArr.join(' ');
  };
});
