"use strict";

IntlMessageFormat.__addLocaleData({ "locale": "hsb", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);if (ord) return "other";return v0 && i100 == 1 || f100 == 1 ? "one" : v0 && i100 == 2 || f100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? "few" : "other";
  } });