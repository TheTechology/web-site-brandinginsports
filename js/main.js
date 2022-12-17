$(document).ready(function () {
  $("#signature").hide();
  $(".arrow-img").hide();
  $(".look-up-label").hide();
  // $(".number").hide();

  $(".hero .headline").hide();
  $(".hero .inner-content").hide();

  $("#montenegro").hide();
  $("#football").hide();
  $("#basketball").hide();
  $("#world").hide();
  $(".hello .first").hide();
  $(".hello .second").hide();
  $(".hello .third").hide();

  $(".stats-headline").hide();
  $("#nike").hide();
  $(".review-inner").hide();
  $(".inner-clubs").hide();
  $(".inner-games").hide();

  $(".moto-headline-first").hide();
  $(".moto-headline-second").hide();
  $(".moto .button").hide();
  $(".blog-headline").hide();
  $(".date").hide();

  $(".contact-desc-first").hide();
  $(".contact-story").hide();
  $(".contact-visit").hide();
  $(".contact-desc").hide();
  $(".contact-headline").hide();
  $(".contact-form").hide();
  $(".sponsors").hide();

  $(".proud-bottom").hide();
  $(".instagram").hide();
  $(".basketball_path-headlines").hide();
  $(".basketball_path .timeline").hide();

  lookup();

  function typedAnimation(id, text, time) {
    window.setTimeout(function () {
      var app = document.getElementById(id);

      var typewriter = new Typewriter(app, {
        loop: false,
        typingSpeed: 80,
        cursor: "",
      });

      typewriter.typeString(text).start();
    }, time);
  }

  function svgAnimation(id, animation, time) {
    window.setTimeout(function () {
      new Vivus(
        id,
        {
          type: animation,
          duration: 80,
          start: "autostart",
          animTimingFunction: Vivus.EASE_OUT,
        },
        function () {}
      );
      $("#" + id).show();
    }, time);
  }

  function animationCss(className, animation, time) {
    setTimeout(function () {
      $(className).show();
      $(className).show().addClass(animation);
    }, time);
  }

  // functions start for each section

  function lookup() {
    $(".lookup .logo").addClass("animated fadeInUp");

    // animationCss('.lookup .number', 'animated fadeInUp', 0);

    typedAnimation(
      "lookup-headline",
      "“Concentrating before the free throw is the only reason to look down.”",
      100
    );

    svgAnimation("signature", "oneByOne", 6000);

    $(".arrow-img").delay(8000).fadeIn();
    $(".look-up-label").delay(8000).fadeIn();

    lookup = function () {};
  }

  function proud() {
    // animationCss('.proud .number', 'animated fadeInUp', 0);

    typedAnimation(
      "proud-headline",
      "Awards are great, but you gotta be careful. # The problem with awards is that you cannot depend on them.#They are here just to push you forward and up.",
      0
    );

    animationCss(".proud-bottom", "animated fadeInUp", 0);

    function scrollToBottom(id) {
      div_height = $("#" + id).height();
      div_offset = $("#" + id).offset().top;
      window_height = $(window).height();
      $(".inner-proud").animate(
        {
          scrollTop: div_offset - window_height + div_height + 800,
        },
        "slow"
      );
    }

    setTimeout(function () {
      scrollToBottom("item-proud-last");
    }, 100);

    proud = function () {};
  }

  function hero() {
    animationCss(".hero .headline", "animated fadeInDown", 400);
    // animationCss('.hero .number', 'animated fadeInUp', 0);

    typedAnimation("hero-headline", "You are my#hero.", 1100);

    animationCss(".hero .inner-content", "animated fadeInLeft", 4000);

    typedAnimation("hero-bottom", "Everyday.", 5000);

    hero = function () {};
  }

  function hello() {
    typedAnimation(
      "hello-headline",
      "Hi, I am Nikola Mirotic,#basketball player.",
      0
    );

    svgAnimation("montenegro", "sync", 4000);

    animationCss(".montengro .first", "animated fadeInUp", 5000);

    animationCss(".montengro .second", "animated fadeInUp", 6000);

    animationCss(".montengro .third", "animated fadeInUp", 7000);

    svgAnimation("football", "sync", 8000);

    animationCss(".football .first", "animated fadeInUp", 9000);

    animationCss(".football .second", "animated fadeInUp", 10000);

    animationCss(".football .third", "animated fadeInUp", 11000);

    svgAnimation("basketball", "sync", 12000);

    animationCss(".basketball .first", "animated fadeInUp", 13000);

    animationCss(".basketball .second", "animated fadeInUp", 14000);

    svgAnimation("world", "sync", 15000);

    animationCss(".world .first", "animated fadeInUp", 16000);

    animationCss(".world .second", "animated fadeInUp", 17000);

    hello = function () {};
  }

  function basketball_path() {
    // animationCss('.basketball_path .number', 'animated fadeInUp', 0);

    animationCss(
      ".basketball_path .basketball_path-headlines",
      "animated fadeInLeft",
      0
    );
    animationCss(".basketball_path .timeline", "animated fadeInRight", 0);

    function scrollToBottom(id) {
      div_height = $("#" + id).height();
      div_offset = $("#" + id).offset().top;
      window_height = $(window).height();
      $("#timeline-scroll").animate(
        {
          scrollTop: div_offset - window_height + div_height + 150,
        },
        "slow"
      );
    }

    setTimeout(function () {
      scrollToBottom("last-timeline-item");
    }, 1000);

    basketball_path = function () {};
  }

  function stats() {
    animationCss(".stats-headline", "animated fadeInLeft", 1000);

    // animationCss('.stats .number', 'animated fadeInUp', 0);

    typedAnimation(
      "stats-main-headline",
      "Get up.#Get better.#Everyday.™",
      1000
    );

    svgAnimation("nike", "oneByOne", 1000);

    animationCss(".review-inner", "animated fadeInRight", 1000);

    animationCss(".inner-clubs", "animated fadeInLeft", 1000);

    animationCss(".inner-games", "animated fadeInLeft", 1000);

    typedAnimation(
      "bottom-played-games",
      "In order to get better,#you must practice and#endure.",
      1000
    );

    stats = function () {};
  }

  function moto() {
    animationCss(".moto-headline-first", "animated fadeInLeft", 0);
    animationCss(".date", "animated fadeInRight", 0);
    animationCss(".moto-headline-second", "animated fadeInRight", 0);

    // animationCss('.moto .number', 'animated fadeInUp', 0);

    typedAnimation(
      "moto-headline-third",
      "Get up.#Get better.#Everyday.™",
      800
    );

    animationCss(".moto .button", "animated fadeInUp", 0);

    typedAnimation(
      "blog-post",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qurunt mollit anim id est laborum",
      0
    );

    animationCss(".blog-headline", "animated fadeInRight", 0);

    moto = function () {};
  }

  function hero_is_you() {
    typedAnimation(
      "contact-main-headline",
      "Whose hero have you#been today?",
      0
    );

    // animationCss('.hero_is_you .number', 'animated fadeInUp', 0);

    animationCss(".contact-desc-first", "animated fadeInLeft", 0);

    typedAnimation("contact-main-subheadline", "Let me know", 0);

    animationCss(".contact-story", "animated fadeInUp", 0);

    animationCss(".contact-visit", "animated fadeInUp", 0);

    animationCss(".contact-desc", "animated fadeInRight", 0);

    animationCss(".contact-headline", "animated fadeInRight", 0);

    animationCss(".contact-form", "animated fadeInDown", 0);

    animationCss(".sponsors", "animated fadeInUp", 0);

    hero_is_you = function () {};
  }

  $("#fullpage").fullpage({
    navigation: true,
    anchors: [
      "hero_is_you",
      "life_moto",
      "makes_me_proud",
      "my_stats",
      "basketball_path",
      "hello_there",
      "intro",
      "look_up",
    ],
    navigationPosition: "right",
    showActiveTooltip: true,
    autoScrolling: true,
    fitToSection: true,
    normalScrollElements: ".inner-scroll",
    navigationTooltips: [
      "Hero is you_08",
      "Life moto_07",
      "Makes me proud_06",
      "My stats_05",
      "Basketball path_04",
      "Hello there_03",
      "Hero: Intro_02",
      "Look up!_01",
    ],

    afterLoad: function (anchorLink, index) {
      if (index == 7) {
        hero();
      }

      if (index == 6) {
        hello();
      }

      if (index == 5) {
        basketball_path();
      }

      if (index == 4) {
        stats();
      }

      if (index == 3) {
        proud();
      }

      if (index == 2) {
        moto();
      }

      if (index == 1) {
        hero_is_you();
      }
    },
  });

  jQuery(".basketball_menu").click(function () {
    $(this).addClass("active");
    $(".instagram_menu").removeClass("active");
    $(".instagram").hide();
    $(".basketball-path").show();
  });

  jQuery(".instagram_menu").click(function () {
    $(this).addClass("active");
    $(".basketball_menu").removeClass("active");
    $(".basketball-path").hide();
    $(".instagram").show();
  });
});

(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-right"),
      activeClass: "timeline-item--active",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    var itemLength = selectors.item.length;
    $(".basketball-path.inner-scroll").scroll(function () {
      var pos = $(this).context.scrollTop;
      var max = $(this).context.scrollHeight - $(this).context.clientHeight;
      var elementIndex = Math.round((pos / max) * itemLength);
      selectors.item.each(function (i) {
        if (i == elementIndex) {
          selectors.item.removeClass(selectors.activeClass);
          $(selectors.item[i]).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$(".timeline").timeline();

(function ($) {
  $.fn.proud = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".item-group"),
      activeClass: "item-proud--active",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    var itemLength = selectors.item.length;
    $(".inner-proud").scroll(function () {
      var pos = $(this).context.scrollTop;
      var max = $(this).context.scrollHeight - $(this).context.clientHeight;
      var elementIndex = Math.round((pos / max) * itemLength);
      selectors.item.each(function (i) {
        if (i == elementIndex) {
          selectors.item.removeClass(selectors.activeClass);
          $(selectors.item[i]).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

// $(".inner-proud").proud();

$(".landscape").hide();

function isLandscape() {
  return window.orientation === 90 || window.orientation === -90;
}

if (isLandscape()) {
  $("#fullpage").hide();
  $(".footer").hide();
  $(".landscape").show();
}

$(document).ready(function () {
  $(window).on("orientationchange", function (event) {
    if (isLandscape()) {
      $("#fullpage").hide();
      $(".footer").hide();
      $(".landscape").show();
    } else {
      $("#fullpage").show();
      $(".footer").show();
      $(".landscape").hide();
    }
  });

  updateImage();
  $(window).bind("resize", function (e) {
    updateImage();
  });

  $(".popup-trigger").on("click", function (event) {
    event.preventDefault();
    $(".popup").addClass("is-visible");
    $(".contact-content").hide();
  });

  //close popup
  $(".popup").on("click", function (event) {
    if (
      $(event.target).is(".close") ||
      $(event.target).is(".popup") ||
      $(event.target).is(".close-thankyou")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
      $(".contact-content").show();
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $(".popup").removeClass("is-visible");
      $(".contact-content").show();
    }
  });
});

function updateImage() {
  var calc = $(".bg-image").width() / $(".bg-image").height();

  if (calc < 2) {
    $(".bg-image").css("object-fit", "cover");
  } else {
    $(".bg-image").css("object-fit", "contain");
  }
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".circle").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

$(".inner-proud").on("DOMMouseScroll mousewheel", function (event) {
  var div = $(this);
  if (
    div[0].scrollHeight - div.scrollTop() == div.height() &&
    (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0)
  ) {
    location.hash = "#my_stats";
  } else if (
    div.scrollTop() == 0 &&
    (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0)
  ) {
    location.hash = "#life_moto";
  }
});

$(function () {
  // Get the form.
  var form = $("#ajax-contact");

  // Get the messages div.
  var formMessages = $("#form-messages");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
      contentType: false, // The content type used when sending data to the server.
      cache: false, // To unable request pages to be cached
      processData: false,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).append(
          "<h2>Thank You!</h2>you may expect the notification about<br/>the approval of your story in the next three weeks.If you are finding<br/>your notifications in your junk email folder, please whitelist (safe<br/>sender) PackageTrack.<br/><br/>Sincerely<div class='signature-contact'>Niko Mirotic</div><img src='img/close.png' class='close-thankyou' alt='Close button'>"
        );

        // Clear the form.
        $(".form").hide();
        // $('#name, #email, #country, #age, #city', '#story', '#storysubject').val('');
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent."
          );
        }
      });
  });
});
