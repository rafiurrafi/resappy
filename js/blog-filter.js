$(document).ready(function () {
  var itemSelector = ".blog-content__container";

  var $container = $("#blog-content__box").isotope({
    itemSelector: itemSelector,
    masonry: {
      columnWidth: itemSelector,
      isFitWidth: true,
    },
  });

  var $blogControls = $(".blog-controls");
  //Ascending order
  var responsiveIsotope = [
    [480, 4],
    [720, 6],
  ];

  var itemsPerPageDefault = 6;
  var itemsPerPage = defineItemsPerPage();
  var currentNumberPages = 1;
  var currentPage = 1;
  var currentFilter = "*";
  var filterAtribute = "data-filter";
  var pageAtribute = "data-page";
  var pagerClass = "isotope-pager";

  function changeFilter(selector) {
    $container.isotope({
      filter: selector,
    });
  }

  function goToPage(n) {
    currentPage = n;

    var selector = itemSelector;
    selector +=
      currentFilter != "*"
        ? "[" + filterAtribute + '="' + currentFilter + '"]'
        : "";
    selector += "[" + pageAtribute + '="' + currentPage + '"]';

    changeFilter(selector);
  }

  function defineItemsPerPage() {
    var pages = itemsPerPageDefault;

    for (var i = 0; i < responsiveIsotope.length; i++) {
      if ($(window).width() <= responsiveIsotope[i][0]) {
        pages = responsiveIsotope[i][1];
        break;
      }
    }

    return pages;
  }

  function setPagination() {
    var SettingsPagesOnItems = (function () {
      var itemsLength = $container.children(itemSelector).length;

      var pages = Math.ceil(itemsLength / itemsPerPage);
      var item = 1;
      var page = 1;
      var selector = itemSelector;
      selector +=
        currentFilter != "*"
          ? "[" + filterAtribute + '="' + currentFilter + '"]'
          : "";

      $container.children(selector).each(function () {
        if (item > itemsPerPage) {
          page++;
          item = 1;
        }
        $(this).attr(pageAtribute, page);
        item++;
      });

      currentNumberPages = page;
    })();

    var CreatePagers = (function () {
      var $isotopePager =
        $("." + pagerClass).length == 0
          ? $('<div class="' + pagerClass + '"></div>')
          : $("." + pagerClass);

      $isotopePager.html("");
      if (currentNumberPages == 1) return;
      for (var i = 0; i < currentNumberPages; i++) {
        var $pager = $(
          '<a href="javascript:void(0);" class="pager" ' +
            pageAtribute +
            '="' +
            (i + 1) +
            '"></a>'
        );
        $pager.html(i + 1);

        $pager.click(function () {
          var page = $(this).eq(0).attr(pageAtribute);
          $(".pager").removeClass("active");
          $(this).addClass("active");
          goToPage(page);
        });

        $pager.appendTo($isotopePager);
      }

      // $container.after($isotopePager);
      $isotopePager.appendTo($blogControls);
    })();
  } //End of setPagination

  setPagination();
  goToPage(1);
  $(".pager:first-of-type").addClass("active");

  //Adicionando Event de Click para as categorias
  $(".filters a").click(function () {
    var filter = $(this).attr(filterAtribute);
    currentFilter = filter;

    setPagination();
    goToPage(1);
    $(".pager:first-of-type").addClass("active");
  });

  //Evento Responsivo
  $(window).resize(function () {
    itemsPerPage = defineItemsPerPage();
    setPagination();
    goToPage(1);
  });
});
