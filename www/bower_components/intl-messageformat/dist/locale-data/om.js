"use strict";

IntlMessageFormat.__addLocaleData({ "locale": "om", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";return n == 1 ? "one" : "other";
  } });
IntlMessageFormat.__addLocaleData({ "locale": "om-KE", "parentLocale": "om" });