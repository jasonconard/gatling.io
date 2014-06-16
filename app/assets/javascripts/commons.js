(function ($) {
  hljs.configure({classPrefix: ''});
  hljs.initHighlightingOnLoad();

  $(document).ready(function () {
    $("a[rel=tooltip]").tooltip();
  });
}(jQuery));
