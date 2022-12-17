"use strict";
this.default_tr = this.default_tr || {};
(function (_) {
  var window = this;
  try {
    _.wg = function () {
      return _.u("Firefox") || _.u("FxiOS");
    };
    _.xg = function () {
      return ((_.u("Chrome") || _.u("CriOS")) && !_.u("Edge")) || _.u("Silk");
    };
    _.yg = function () {
      return (
        _.u("Safari") &&
        !(
          _.xg() ||
          _.u("Coast") ||
          _.u("Opera") ||
          _.u("Edge") ||
          _.u("Edg/") ||
          _.u("OPR") ||
          _.wg() ||
          _.u("Silk") ||
          _.u("Android")
        )
      );
    };
    _.zg = function () {
      return (
        _.u("Android") && !(_.xg() || _.wg() || _.u("Opera") || _.u("Silk"))
      );
    };
    _.Ag = _.wg();
    _.Bg = _.Ea() || _.u("iPod");
    _.Cg = _.u("iPad");
    _.Dg = _.zg();
    _.Eg = _.xg();
    _.Fg = _.yg() && !_.Fa();
  } catch (e) {
    _._DumpException(e);
  }
  try {
    var Og, Pg, Qg, Sg, Yg, $g, ah, hh, jh, gh, kh, nh, oh, ph, uh, xh, yh;
    _.Hg = function (a, b) {
      if (Gg) return (a[Gg] |= b);
      if (void 0 !== a.Lb) return (a.Lb |= b);
      Object.defineProperties(a, {
        Lb: { value: b, configurable: !0, writable: !0, enumerable: !1 },
      });
      return b;
    };
    _.Ig = function (a) {
      var b;
      Gg ? (b = a[Gg]) : (b = a.Lb);
      return null == b ? 0 : b;
    };
    _.Jg = function (a, b) {
      Gg
        ? (a[Gg] = b)
        : void 0 !== a.Lb
        ? (a.Lb = b)
        : Object.defineProperties(a, {
            Lb: { value: b, configurable: !0, writable: !0, enumerable: !1 },
          });
    };
    _.Kg = function (a) {
      _.Hg(a, 1);
      return a;
    };
    _.Lg = function (a) {
      return !!(_.Ig(a) & 2);
    };
    _.Mg = function (a) {
      _.Hg(a, 16);
      return a;
    };
    _.Ng = function (a, b) {
      _.Jg(b, (a | 0) & -51);
    };
    Og = function (a, b) {
      _.Jg(b, (a | 18) & -41);
    };
    Pg = function (a) {
      return (
        null !== a &&
        "object" === typeof a &&
        !Array.isArray(a) &&
        a.constructor === Object
      );
    };
    Qg = function (a) {
      var b = a.length;
      (b = b ? a[b - 1] : void 0) && Pg(b)
        ? (b.g = 1)
        : ((b = {}), a.push(((b.g = 1), b)));
    };
    Sg = function (a, b) {
      _.Rg = b;
      a = new a(b);
      _.Rg = void 0;
      return a;
    };
    _.Wg = function (a) {
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "object":
          if (a)
            if (Array.isArray(a)) {
              if (0 !== (_.Ig(a) & 128))
                return (a = Array.prototype.slice.call(a)), Qg(a), a;
            } else {
              if (_.Tg && null != a && a instanceof Uint8Array) return Ug(a);
              if (a instanceof Vg) {
                var b = a.Za;
                return null == b
                  ? ""
                  : "string" === typeof b
                  ? b
                  : (a.Za = Ug(b));
              }
            }
      }
      return a;
    };
    Yg = function (a, b, c, d) {
      if (null != a) {
        if (Array.isArray(a)) a = _.Xg(a, b, c, void 0 !== d);
        else if (Pg(a)) {
          var e = {},
            f;
          for (f in a) e[f] = Yg(a[f], b, c, d);
          a = e;
        } else a = b(a, d);
        return a;
      }
    };
    _.Xg = function (a, b, c, d) {
      var e = _.Ig(a);
      d = d ? !!(e & 16) : void 0;
      a = Array.prototype.slice.call(a);
      for (var f = 0; f < a.length; f++) a[f] = Yg(a[f], b, c, d);
      c(e, a);
      return a;
    };
    $g = function (a) {
      return a.ze === _.Zg ? a.toJSON() : _.Wg(a);
    };
    ah = function (a, b) {
      a & 128 && Qg(b);
    };
    _.ch = function (a, b, c, d) {
      a.j && (a.j = void 0);
      if (b >= a.h || d) return (bh(a)[b] = c), a;
      a.wa[b + a.Bc] = c;
      (c = a.ub) && b in c && delete c[b];
      return a;
    };
    _.eh = function (a, b, c, d) {
      _.dh(a);
      c !== d ? _.ch(a, b, c) : _.ch(a, b, void 0, !1);
      return a;
    };
    _.fh = function (a, b) {
      return null == a ? b : a;
    };
    hh = function (a) {
      var b = _.Ig(a);
      if (b & 2) return a;
      a = _.Rb(a, gh);
      Og(b, a);
      Object.freeze(a);
      return a;
    };
    jh = function (a, b, c) {
      c = void 0 === c ? Og : c;
      if (null != a) {
        if (_.Tg && a instanceof Uint8Array)
          return a.length
            ? new Vg(new Uint8Array(a))
            : ih || (ih = new Vg(null));
        if (Array.isArray(a)) {
          var d = _.Ig(a);
          if (d & 2) return a;
          if (b && !(d & 32) && (d & 16 || 0 === d)) return _.Jg(a, d | 2), a;
          a = _.Xg(a, jh, c, !0);
          b = _.Ig(a);
          b & 4 && b & 2 && Object.freeze(a);
          return a;
        }
        return a.ze === _.Zg ? gh(a) : a;
      }
    };
    gh = function (a) {
      if (_.Lg(a.wa)) return a;
      a = kh(a, !0);
      _.Hg(a.wa, 2);
      return a;
    };
    kh = function (a, b) {
      var c = a.wa,
        d = _.Mg([]),
        e = a.constructor.h;
      e && d.push(e);
      a.ub &&
        ((d.length = c.length),
        d.fill(void 0, d.length, c.length),
        (d[d.length - 1] = {}));
      0 !== (_.Ig(c) & 128) && Qg(d);
      b = b || _.Lg(a.wa) ? Og : _.Ng;
      d = Sg(a.constructor, d);
      a.Cd && (d.Cd = a.Cd.slice());
      e = !!(_.Ig(c) & 16);
      for (var f = 0; f < c.length; f++) {
        var g = c[f];
        if (f === c.length - 1 && Pg(g))
          for (var h in g) {
            var l = +h;
            if (Number.isNaN(l)) bh(d)[l] = g[l];
            else {
              var m = g[h],
                n = a.Va && a.Va[l];
              n ? _.lh(d, l, hh(n), !0) : _.H(d, l, jh(m, e, b), !0);
            }
          }
        else
          (l = f - a.Bc),
            (m = a.Va && a.Va[l])
              ? _.lh(d, l, hh(m), !1)
              : _.H(d, l, jh(g, e, b), !1);
      }
      return d;
    };
    _.mh = function (a) {
      if (!_.Lg(a.wa)) return a;
      var b = kh(a, !1);
      b.j = a;
      return b;
    };
    nh = function (a, b) {
      if (Array.isArray(a)) {
        var c = _.Ig(a),
          d = 1;
        !b || c & 2 || (d |= 16);
        (c & d) !== d && _.Jg(a, c | d);
      }
    };
    oh = {};
    ph = {};
    _.qh = function (a, b) {
      this.h = (a === oh && b) || "";
      this.j = ph;
    };
    _.qh.prototype.Eb = !0;
    _.qh.prototype.bb = function () {
      return this.h;
    };
    _.rh = function (a) {
      return new _.qh(oh, a);
    };
    _.sh = function (a, b) {
      return _.Zc(a.V, b);
    };
    _.th = function (a) {
      return a instanceof _.qh && a.constructor === _.qh && a.j === ph
        ? a.h
        : "type_error:Const";
    };
    uh = /^[\w+/_-]+[=]{0,2}$/;
    _.vh = function (a, b) {
      b = (b || _.t).document;
      return b.querySelector
        ? (a = b.querySelector(a)) &&
          (a = a.nonce || a.getAttribute("nonce")) &&
          uh.test(a)
          ? a
          : ""
        : "";
    };
    _.wh = function (a) {
      return _.vh("script[nonce]", a);
    };
    xh = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    };
    yh = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
    _.zh = function (a, b, c, d, e, f, g) {
      var h = new _.Vf();
      _.Yf.push(h);
      b && h.I("complete", b);
      h.pc("ready", h.oa);
      f && (h.o = Math.max(0, f));
      g && (h.O = g);
      h.send(a, c, d, e);
    };
    var Ah = {},
      Bh = null,
      Ug = function (a) {
        var b;
        void 0 === b && (b = 0);
        if (!Bh) {
          Bh = {};
          for (
            var c =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                  ""
                ),
              d = ["+/=", "+/", "-_=", "-_.", "-_"],
              e = 0;
            5 > e;
            e++
          ) {
            var f = c.concat(d[e].split(""));
            Ah[e] = f;
            for (var g = 0; g < f.length; g++) {
              var h = f[g];
              void 0 === Bh[h] && (Bh[h] = g);
            }
          }
        }
        b = Ah[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
          var l = a[f],
            m = a[f + 1];
          h = a[f + 2];
          g = b[l >> 2];
          l = b[((l & 3) << 4) | (m >> 4)];
          m = b[((m & 15) << 2) | (h >> 6)];
          h = b[h & 63];
          c[e++] = g + l + m + h;
        }
        g = 0;
        h = d;
        switch (a.length - f) {
          case 2:
            (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
          case 1:
            (a = a[f]),
              (c[e] = b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
        }
        return c.join("");
      };
    var Ch;
    _.Tg = "undefined" !== typeof Uint8Array;
    Ch = {};
    var ih,
      Vg = function (a) {
        if (Ch !== Ch) throw Error("da");
        this.Za = a;
        if (null != a && 0 === a.length) throw Error("ea");
      };
    Vg.prototype.cc = function () {
      return null == this.Za;
    };
    var Gg =
      "function" === typeof Symbol && "symbol" === typeof Symbol()
        ? Symbol()
        : void 0;
    var Fh;
    _.Zg = {};
    Fh = [];
    _.Jg(Fh, 23);
    _.Eh = Object.freeze(Fh);
    _.dh = function (a) {
      if (_.Lg(a.wa)) throw Error("fa");
    };
    var bh;
    bh = function (a) {
      var b = a.h + a.Bc;
      return a.ub || (a.ub = a.wa[b] = {});
    };
    _.Gh = function (a, b, c) {
      return -1 === b
        ? null
        : b >= a.h
        ? a.ub
          ? a.ub[b]
          : void 0
        : c && a.ub && ((c = a.ub[b]), null != c)
        ? c
        : a.wa[b + a.Bc];
    };
    _.H = function (a, b, c, d) {
      _.dh(a);
      return _.ch(a, b, c, d);
    };
    _.Hh = function (a, b, c, d) {
      var e = (d = void 0 === d ? !1 : d),
        f = _.Gh(a, c, e);
      var g = !1;
      var h =
        null == f ||
        "object" !== typeof f ||
        (g = Array.isArray(f)) ||
        f.ze !== _.Zg
          ? g
            ? new b(f)
            : void 0
          : f;
      h !== f && null != h && (_.ch(a, c, h, e), _.Hg(h.wa, _.Ig(a.wa) & 18));
      b = h;
      if (null == b) return b;
      _.Lg(a.wa) || ((e = _.mh(b)), e !== b && ((b = e), _.ch(a, c, b, d)));
      return b;
    };
    _.I = function (a, b, c) {
      _.dh(a);
      null == c && (c = void 0);
      return _.ch(a, b, c);
    };
    _.lh = function (a, b, c, d) {
      _.dh(a);
      if (null != c) {
        var e = _.Kg([]);
        for (var f = !1, g = 0; g < c.length; g++)
          (e[g] = c[g].wa), (f = f || _.Lg(e[g]));
        a.Va || (a.Va = {});
        a.Va[b] = c;
        c = e;
        f
          ? Gg
            ? c[Gg] && (c[Gg] &= -9)
            : void 0 !== c.Lb && (c.Lb &= -9)
          : _.Hg(c, 8);
      } else a.Va && (a.Va[b] = void 0), (e = _.Eh);
      return _.ch(a, b, e, d);
    };
    _.J = function (a, b, c) {
      null == a && (a = _.Rg);
      _.Rg = void 0;
      var d = this.constructor.j || 0,
        e = 0 < d,
        f = this.constructor.h,
        g = !1;
      if (null == a) {
        a = f ? [f] : [];
        var h = !0;
        _.Jg(a, 48);
      } else {
        if (!Array.isArray(a)) throw Error();
        if (f && f !== a[0]) throw Error();
        var l = _.Hg(a, 0),
          m = l;
        if ((h = 0 !== (16 & m))) (g = 0 !== (32 & m)) || (m |= 32);
        if (e)
          if (128 & m) d = 0;
          else {
            if (0 < a.length) {
              var n = a[a.length - 1];
              if (Pg(n) && "g" in n) {
                d = 0;
                m |= 128;
                delete n.g;
                var p = !0,
                  r;
                for (r in n) {
                  p = !1;
                  break;
                }
                p && a.pop();
              }
            }
          }
        else if (128 & m) throw Error();
        l !== m && _.Jg(a, m);
      }
      this.Bc = (f ? 0 : -1) - d;
      this.Va = void 0;
      this.wa = a;
      a: {
        f = this.wa.length;
        d = f - 1;
        if (f && ((f = this.wa[d]), Pg(f))) {
          this.ub = f;
          this.h = d - this.Bc;
          break a;
        }
        void 0 !== b && -1 < b
          ? ((this.h = Math.max(b, d + 1 - this.Bc)), (this.ub = void 0))
          : (this.h = Number.MAX_VALUE);
      }
      if (!e && this.ub && "g" in this.ub) throw Error("ia");
      if (c) {
        b = h && !g && !0;
        e = this.h;
        var q;
        for (h = 0; h < c.length; h++)
          (g = c[h]),
            g < e
              ? ((g += this.Bc), (d = a[g]) ? nh(d, b) : (a[g] = _.Eh))
              : (q || (q = bh(this)), (d = q[g]) ? nh(d, b) : (q[g] = _.Eh));
      }
    };
    _.J.prototype.toJSON = function () {
      var a = this.wa;
      return _.Dh ? a : _.Xg(a, $g, ah);
    };
    _.Ih = function (a, b) {
      if (null == b || "" == b) return new a();
      b = JSON.parse(b);
      if (!Array.isArray(b)) throw Error(void 0);
      return Sg(a, _.Mg(b));
    };
    _.J.prototype.ze = _.Zg;
    _.J.prototype.toString = function () {
      return this.wa.toString();
    };
    var Kh, Jh;
    _.K = function (a, b, c) {
      if ("string" === typeof b) (b = Jh(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = Jh(c, d);
          f && (c.style[f] = e);
        }
    };
    Kh = {};
    Jh = function (a, b) {
      var c = Kh[b];
      if (!c) {
        var d = xh(b);
        c = d;
        void 0 === a.style[d] &&
          ((d = (_.ac ? "Webkit" : _.$b ? "Moz" : _.C ? "ms" : null) + yh(d)),
          void 0 !== a.style[d] && (c = d));
        Kh[b] = c;
      }
      return c;
    };
    _.Lh = _.$b ? "MozUserSelect" : _.ac || _.Yb ? "WebkitUserSelect" : null;
  } catch (e) {
    _._DumpException(e);
  }
  try {
    var Qh;
    _.Mh = {};
    _.Nh = function (a) {
      return a instanceof _.vc && a.constructor === _.vc
        ? a.h
        : "type_error:SafeUrl";
    };
    _.Oh = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.Ph = function (a) {
      if (a instanceof _.vc) return a;
      a = "object" == typeof a && a.Eb ? a.bb() : String(a);
      _.Oh.test(a) || (a = "about:invalid#zClosurez");
      return _.wc(a);
    };
    Qh = {};
    _.Rh = function (a, b) {
      this.h = b === Qh ? a : "";
      this.Eb = !0;
    };
    _.Rh.prototype.toString = function () {
      return this.h.toString();
    };
    _.Rh.prototype.bb = function () {
      return this.h;
    };
    _.Sh = {};
    _.vf = function () {
      throw Error("P");
    };
    _.vf.prototype.jf = null;
    _.vf.prototype.Ba = function () {
      return this.h;
    };
    _.vf.prototype.toString = function () {
      return this.h;
    };
    var Th = function () {
      _.vf.call(this);
    };
    _.z(Th, _.vf);
    Th.prototype.Wb = _.Sh;
    var Uh = function () {
      _.vf.call(this);
    };
    _.z(Uh, _.vf);
    Uh.prototype.Wb = _.Mh;
    Uh.prototype.jf = 1;
    Uh.prototype.j = function () {
      return new _.Rh(this.toString(), Qh);
    };
    _.Vh = function (a, b) {
      return null != a && a.Wb === b;
    };
    var bi, Zh, Xh, Yh;
    _.L = (function (a) {
      function b(c) {
        this.h = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.jf = d);
        return c;
      };
    })(Th);
    _.Wh = (function (a) {
      function b(c) {
        this.h = c;
      }
      b.prototype = a.prototype;
      return function (c) {
        return new b(String(c));
      };
    })(Uh);
    _.M = function (a) {
      if (_.Vh(a, _.Sh)) {
        var b = String;
        a = String(a.Ba()).replace(Xh, "").replace(Yh, "&lt;");
        b = b(a).replace(Zh, _.$h);
      } else b = String(a).replace(_.ai, _.$h);
      return b;
    };
    bi = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    };
    _.$h = function (a) {
      return bi[a];
    };
    _.ai = /[\x00\x22\x26\x27\x3c\x3e]/g;
    Zh = /[\x00\x22\x27\x3c\x3e]/g;
    Xh = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
    Yh = /</g;
  } catch (e) {
    _._DumpException(e);
  }
  try {
    /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var ji,
      ki,
      mi,
      oi,
      qi,
      si,
      ti,
      ui,
      Ei,
      Gi,
      Ii,
      Ki,
      O,
      Qi,
      Si,
      Ti,
      Vi,
      Wi,
      Xi,
      Yi,
      Zi,
      $i,
      aj,
      bj,
      cj,
      dj,
      ej,
      fj,
      gj,
      jj,
      ij,
      lj,
      pi,
      ri,
      xi,
      nj,
      oj,
      qj,
      sj,
      uj,
      vj,
      wj,
      yj,
      Aj,
      Bj,
      Cj,
      Dj,
      Ej,
      Gj,
      Hj,
      Jj,
      Lj,
      Mj,
      Nj,
      Oj,
      Pj,
      Qj,
      Rj,
      Sj,
      Tj,
      Uj,
      Vj,
      Wj,
      Xj,
      mk,
      nk,
      ok,
      pk,
      qk,
      zi,
      tk,
      vk,
      wk,
      xk,
      zk,
      Ak,
      Bk,
      Ck,
      Dk,
      Gk,
      Fk,
      Hk,
      Jk,
      Kk,
      Lk,
      Mk,
      Nk,
      Ok,
      Pk,
      Rk,
      Sk,
      Uk,
      Vk,
      Xk,
      Yk,
      al,
      cl,
      el,
      gl,
      hl;
    ji = function (a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
      _.aa.call(this, c + a[d]);
    };
    ki = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    };
    mi = function () {
      var a = li,
        b;
      for (b in a) return !1;
      return !0;
    };
    _.ni = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    };
    oi = function (a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
          if (b) return !1;
          b = !0;
        } else if ("[" == e) {
          if (!b) return !1;
          b = !1;
        } else if (!b && !c.test(e)) return !1;
      }
      return b;
    };
    qi = function (a) {
      return a.replace(_.Cc, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (g, h, l) {
          f = h;
          return l;
        });
        b = (pi(d) || _.xc).bb();
        return c + f + b + f + e;
      });
    };
    si = function (a) {
      if (a instanceof _.vc)
        return (
          'url("' +
          _.Nh(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") +
          '")'
        );
      if (a instanceof _.qh) a = _.th(a);
      else {
        a = String(a);
        var b = a.replace(_.Dc, "$1").replace(_.Dc, "$1").replace(_.Cc, "url");
        if (_.Bc.test(b)) {
          if ((b = !ri.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
            }
            b = b && c && oi(a);
          }
          a = b ? qi(a) : "zClosurez";
        } else a = "zClosurez";
      }
      if (/[{;}]/.test(a))
        throw new ji("Value does not allow [{;}], got: %s.", [a]);
      return a;
    };
    ti = function (a) {
      return a
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    };
    ui = function (a) {
      var b = { nonce: _.wh() };
      b = void 0 === b ? {} : b;
      a = _.Eb(a).toString();
      var c = "<script";
      b.id && (c += ' id="' + ti(b.id) + '"');
      b.nonce && (c += ' nonce="' + ti(b.nonce) + '"');
      b.type && (c += ' type="' + ti(b.type) + '"');
      return _.Hc(c + (">" + a + "\x3c/script>"));
    };
    _.vi = function (a) {
      if ("script" === a.tagName.toLowerCase()) throw Error("N");
      if ("style" === a.tagName.toLowerCase()) throw Error("O");
    };
    _.yi = function (a) {
      return _.ya(a)
        ? a instanceof _.vf
          ? _.wi(a)
          : xi("zSoyz")
        : xi(String(a));
    };
    _.Bi = function (a, b) {
      b = a(b || zi, void 0);
      a = _.sh(_.Sc(), "DIV");
      b = _.yi(b);
      _.Ai(a, b);
      1 == a.childNodes.length &&
        ((b = a.firstChild), 1 == b.nodeType && (a = b));
      return a;
    };
    Ei = function (a, b, c) {
      var d = Array.prototype.slice.call(arguments);
      d.splice(0, 2);
      d =
        "l" +
        a.toString(16) +
        "i" +
        b.toString(16) +
        (d.length ? "-" + d.join("_") : "");
      _.Ci ? _.Ci.push(d) : _.Di(d);
    };
    Gi = function () {
      var a = _.Ih(
        Fi,
        '[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\n\'use strict\';var e\\u003dthis||self;function f(a){return a};var h;function k(a,c){this.g\\u003dc\\u003d\\u003d\\u003dl?a:\\"\\"}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nif(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]'
      );
      if (!a) return null;
      a = _.Gh(a, 6);
      var b;
      null === a || void 0 === a ? (b = null) : (b = _.Fb(a));
      return b;
    };
    _.Hi = function (a) {
      return {
        display_language: a,
        key: "AIzaSyBWDj0QJvVIx8XOhRegXX5_SrRWxhT5Hs4",
      };
    };
    _.Ji = function (a) {
      var b = a.targetLanguages || [];
      return { sl: Ii(a.sourceLanguages || []), tl: Ii(b) };
    };
    Ii = function (a) {
      var b = {};
      a = _.Wa(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value), (b[c.language] = c.name);
      return b;
    };
    Ki = function (a) {
      _.N.call(this);
      a = a || {};
      this.id = a.id || this.Xb();
      this.Lf = a.Lf || "";
      this.we = a.we || null;
      this.xe = a.xe || null;
      this.ff = a.ff || !1;
      this.className = a.className || null;
      this.s = null;
    };
    _.Oi = function () {
      for (var a in Object.prototype) {
        _.tc = function (d, e, f) {
          for (var g in d)
            d[g] !== Object.prototype[g] && e.call(f, d[g], g, d);
        };
        break;
      }
      var b = _.ub(),
        c = Li(Mi);
      c &&
        "function" == typeof c &&
        (1 == _.Ni
          ? c()
          : (function e() {
              var f = document.readyState;
              "undefined" == _.ob(f) ||
              "complete" == f ||
              "interactive" == f ||
              2e4 <= _.ub() - b
                ? c()
                : window.setTimeout(e, 500);
            })());
    };
    _.Pi = function (a, b) {
      a.pa ? b() : (a.da || (a.da = []), a.da.push(b));
    };
    O = function (a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0;
    };
    O.prototype.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    };
    O.prototype.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    };
    O.prototype.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    };
    O.prototype.translate = function (a, b) {
      a instanceof O
        ? ((this.x += a.x), (this.y += a.y))
        : ((this.x += Number(a)), "number" === typeof b && (this.y += b));
      return this;
    };
    Qi = function (a) {
      return new O(a.x, a.y);
    };
    _.Ri = function (a, b, c, d) {
      a = d || a;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
          d = {};
          for (var e = 0, f = 0, g; (g = a[f]); f++)
            b == g.nodeName && (d[e++] = g);
          d.length = e;
          return d;
        }
        return a;
      }
      a = a.getElementsByTagName(b || "*");
      if (c) {
        d = {};
        for (f = e = 0; (g = a[f]); f++)
          (b = g.className),
            "function" == typeof b.split &&
              _.ta(b.split(/\s+/), c) &&
              (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    };
    Si = function (a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
      else {
        c = document;
        var d = b || c;
        a =
          d.querySelectorAll && d.querySelector && a
            ? d.querySelector(a ? "." + a : "")
            : _.Ri(c, "*", a, b)[0] || null;
      }
      return a || null;
    };
    Ti = function (a) {
      return a.scrollingElement
        ? a.scrollingElement
        : !_.ac && _.Wc(a)
        ? a.documentElement
        : a.body || a.documentElement;
    };
    _.Ui = function (a) {
      var b = Ti(a);
      a = a.parentWindow || a.defaultView;
      return _.C && a.pageYOffset != b.scrollTop
        ? new O(b.scrollLeft, b.scrollTop)
        : new O(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    };
    Vi = function (a) {
      if (a.rb && "function" == typeof a.rb) return a.rb();
      if (
        ("undefined" !== typeof Map && a instanceof Map) ||
        ("undefined" !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (_.da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return _.Ha(a);
    };
    Wi = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    _.wi = function (a) {
      if (a.Wb !== _.Sh) throw Error("Q");
      return _.Hc(a.toString());
    };
    Xi = function (a) {
      a.Ic = void 0;
      a.nc = function () {
        return a.Ic ? a.Ic : (a.Ic = new a());
      };
    };
    Yi = {};
    _.z(ji, _.aa);
    ji.prototype.name = "AssertionError";
    Zi = /&/g;
    $i = /</g;
    aj = />/g;
    bj = /"/g;
    cj = /'/g;
    dj = /\x00/g;
    ej = /[\x00&<>"']/;
    fj = function (a) {
      if (!ej.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(Zi, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace($i, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(aj, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(bj, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(cj, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(dj, "&#0;"));
      return a;
    };
    gj = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
    _.hj = function (a, b) {
      var c = 0;
      a = (0, _.Ub)(String(a)).split(".");
      b = (0, _.Ub)(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c =
            gj(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            gj(0 == f[2].length, 0 == g[2].length) ||
            gj(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    };
    jj = function (a) {
      var b = ij;
      return Object.prototype.hasOwnProperty.call(b, "7.0")
        ? b["7.0"]
        : (b["7.0"] = a("7.0"));
    };
    ij = {};
    _.kj = function () {
      return jj(function () {
        return 0 <= _.hj(_.oc, "7.0");
      });
    };
    lj = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    };
    pi = function (a) {
      if (a instanceof _.vc) return a;
      a = "object" == typeof a && a.Eb ? a.bb() : String(a);
      _.Oh.test(a)
        ? (a = _.wc(a))
        : ((a = String(a).replace(/(%0A|%0D)/g, "")),
          (a = a.match(Wi) ? _.wc(a) : null));
      return a;
    };
    _.mj = function (a) {
      return a instanceof _.zc && a.constructor === _.zc
        ? a.h
        : "type_error:SafeStyle";
    };
    ri = /\/\*/;
    xi = function (a) {
      return a instanceof _.Fc
        ? a
        : _.Hc(fj("object" == typeof a && a.Eb ? a.bb() : String(a)));
    };
    nj = /^[a-zA-Z0-9-]+$/;
    oj = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    };
    _.pj = function (a) {
      if (!nj.test(a)) throw Error("A");
      if (a.toUpperCase() in oj) throw Error("A");
    };
    qj = function (a) {
      var b = xi(_.Jc),
        c = [],
        d = function (e) {
          Array.isArray(e)
            ? e.forEach(d)
            : ((e = xi(e)), c.push(_.Gc(e).toString()));
        };
      a.forEach(d);
      return _.Hc(c.join(_.Gc(b).toString()));
    };
    _.rj = function (a) {
      return qj(Array.prototype.slice.call(arguments));
    };
    sj = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    };
    _.tj = function (a) {
      var b = "";
      if (a)
        for (var c in a)
          if (Object.prototype.hasOwnProperty.call(a, c)) {
            if (!nj.test(c)) throw Error("A");
            var d = a[c];
            if (null != d) {
              var e = c;
              if (d instanceof _.qh) d = _.th(d);
              else if ("style" == e.toLowerCase()) {
                var f = d;
                if (!_.ya(f)) throw Error("A");
                if (!(f instanceof _.zc)) {
                  d = void 0;
                  var g = "";
                  for (d in f)
                    if (Object.prototype.hasOwnProperty.call(f, d)) {
                      if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("z`" + d);
                      var h = f[d];
                      null != h &&
                        ((h = Array.isArray(h) ? h.map(si).join(" ") : si(h)),
                        (g += d + ":" + h + ";"));
                    }
                  f = g ? new _.zc(g, _.yc) : _.Ac;
                }
                d = _.mj(f);
              } else {
                if (/^on/i.test(e)) throw Error("A");
                if (e.toLowerCase() in sj)
                  if (d instanceof _.Hb) d = _.Ma(d).toString();
                  else if (d instanceof _.vc) d = _.Nh(d);
                  else if ("string" === typeof d) d = (pi(d) || _.xc).bb();
                  else throw Error("A");
              }
              d.Eb && (d = d.bb());
              e = e + '="' + fj(String(d)) + '"';
              b += " " + e;
            }
          }
      return b;
    };
    uj = function (a) {
      _.pj("body");
      var b = a;
      a = "<body" + _.tj({});
      null == b ? (b = []) : Array.isArray(b) || (b = [b]);
      !0 === lj.body
        ? (a += ">")
        : ((b = _.rj(b)), (a += ">" + _.Gc(b).toString() + "</body>"));
      return _.Hc(a);
    };
    _.Ai = function (a, b) {
      if ((0, _.Kc)()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = _.Gc(b);
    };
    vj = function (a, b) {
      b = b instanceof _.vc ? b : _.Ph(b);
      a.action = _.Nh(b);
    };
    wj = function (a, b) {
      return new O(a.x - b.x, a.y - b.y);
    };
    _.xj = function (a) {
      return a.replace(/\xa0|[ \t]+/g, " ");
    };
    yj = function (a) {
      return a.replace(/[\s\xa0]+$/, "");
    };
    _.zj = function (a) {
      return (a = fj(a));
    };
    Aj = function (a) {
      return a.replace(/&([^;]+);/g, function (b, c) {
        switch (c) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            return "#" != c.charAt(0) ||
              ((c = Number("0" + c.slice(1))), isNaN(c))
              ? b
              : String.fromCharCode(c);
        }
      });
    };
    Bj = /&([^;\s<&]+);?/g;
    Cj = function (a) {
      var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
      var c = _.t.document.createElement("div");
      return a.replace(Bj, function (d, e) {
        var f = b[d];
        if (f) return f;
        "#" == e.charAt(0) &&
          ((e = Number("0" + e.slice(1))),
          isNaN(e) || (f = String.fromCharCode(e)));
        f ||
          ((f = _.Hc(d + " ")),
          _.Ai(c, f),
          (f = c.firstChild.nodeValue.slice(0, -1)));
        return (b[d] = f);
      });
    };
    Dj = function (a) {
      return -1 != a.indexOf("&") ? ("document" in _.t ? Cj(a) : Aj(a)) : a;
    };
    _.P = function (a) {
      return _.Tc(document, a);
    };
    Ej = function (a, b) {
      return (b || document).getElementsByTagName(String(a));
    };
    _.Fj = function (a, b, c) {
      return _.ad(document, arguments);
    };
    Gj = function (a, b) {
      _.$c(_.Rc(a), a, arguments, 1);
    };
    Hj = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
    };
    _.Ij = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    };
    Jj = function (a) {
      return _.ya(a) && 1 == a.nodeType;
    };
    _.Kj = function (a) {
      return a.contentDocument || a.contentWindow.document;
    };
    Lj = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 };
    Mj = { IMG: " ", BR: "\n" };
    Nj = function (a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a;
    };
    Oj = function (a, b) {
      b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
    };
    Pj = function (a, b, c) {
      if (!(a.nodeName in Lj))
        if (3 == a.nodeType)
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
            : b.push(a.nodeValue);
        else if (a.nodeName in Mj) b.push(Mj[a.nodeName]);
        else for (a = a.firstChild; a; ) Pj(a, b, c), (a = a.nextSibling);
    };
    Qj = function (a) {
      var b = [];
      Pj(a, b, !0);
      a = b.join("");
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      a = a.replace(/ +/g, " ");
      " " != a && (a = a.replace(/^\s*/, ""));
      return a;
    };
    Rj = function (a) {
      var b = [];
      Pj(a, b, !1);
      return b.join("");
    };
    Sj = function (a, b, c) {
      this.promise = a;
      this.resolve = b;
      this.reject = c;
    };
    Tj = function () {
      var a,
        b,
        c = new _.Zd(function (d, e) {
          a = d;
          b = e;
        });
      return new Sj(c, a, b);
    };
    Uj = function (a) {
      if (a.Ec && "function" == typeof a.Ec) return a.Ec();
      if (!a.rb || "function" != typeof a.rb) {
        if ("undefined" !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (_.da(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return ki(a);
        }
      }
    };
    Vj = function (a, b, c) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
      else if (_.da(a) || "string" === typeof a)
        Array.prototype.forEach.call(a, b, c);
      else
        for (var d = Uj(a), e = Vi(a), f = e.length, g = 0; g < f; g++)
          b.call(c, e[g], d && d[g], a);
    };
    Wj = function (a, b) {
      this.j = this.h = null;
      this.l = a || null;
      this.o = !!b;
    };
    Xj = function (a) {
      a.h ||
        ((a.h = new Map()),
        (a.j = 0),
        a.l &&
          _.qf(a.l, function (b, c) {
            a.add(_.Oc(b), c);
          }));
    };
    Wj.prototype.add = function (a, b) {
      Xj(this);
      this.l = null;
      a = Yj(this, a);
      var c = this.h.get(a);
      c || this.h.set(a, (c = []));
      c.push(b);
      this.j += 1;
      return this;
    };
    Wj.prototype.remove = function (a) {
      Xj(this);
      a = Yj(this, a);
      return this.h.has(a)
        ? ((this.l = null), (this.j -= this.h.get(a).length), this.h.delete(a))
        : !1;
    };
    Wj.prototype.cc = function () {
      Xj(this);
      return 0 == this.j;
    };
    var Zj = function (a, b) {
      Xj(a);
      b = Yj(a, b);
      return a.h.has(b);
    };
    _.k = Wj.prototype;
    _.k.forEach = function (a, b) {
      Xj(this);
      this.h.forEach(function (c, d) {
        c.forEach(function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };
    _.k.Ec = function () {
      Xj(this);
      for (
        var a = Array.from(this.h.values()),
          b = Array.from(this.h.keys()),
          c = [],
          d = 0;
        d < b.length;
        d++
      )
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
      return c;
    };
    _.k.rb = function (a) {
      Xj(this);
      var b = [];
      if ("string" === typeof a)
        Zj(this, a) && (b = b.concat(this.h.get(Yj(this, a))));
      else {
        a = Array.from(this.h.values());
        for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
      }
      return b;
    };
    _.k.set = function (a, b) {
      Xj(this);
      this.l = null;
      a = Yj(this, a);
      Zj(this, a) && (this.j -= this.h.get(a).length);
      this.h.set(a, [b]);
      this.j += 1;
      return this;
    };
    _.k.get = function (a, b) {
      if (!a) return b;
      a = this.rb(a);
      return 0 < a.length ? String(a[0]) : b;
    };
    var ak = function (a, b, c) {
      a.remove(b);
      0 < c.length &&
        ((a.l = null), a.h.set(Yj(a, b), _.wa(c)), (a.j += c.length));
    };
    Wj.prototype.toString = function () {
      if (this.l) return this.l;
      if (!this.h) return "";
      for (
        var a = [], b = Array.from(this.h.keys()), c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c],
          e = _.Nc(d);
        d = this.rb(d);
        for (var f = 0; f < d.length; f++) {
          var g = e;
          "" !== d[f] && (g += "=" + _.Nc(d[f]));
          a.push(g);
        }
      }
      return (this.l = a.join("&"));
    };
    var bk = function (a) {
        var b = new Wj();
        b.l = a.l;
        a.h && ((b.h = new Map(a.h)), (b.j = a.j));
        return b;
      },
      Yj = function (a, b) {
        b = String(b);
        a.o && (b = b.toLowerCase());
        return b;
      },
      ck = function (a, b) {
        b &&
          !a.o &&
          (Xj(a),
          (a.l = null),
          a.h.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), ak(this, e, c));
          }, a));
        a.o = b;
      };
    Wj.prototype.s = function (a) {
      for (var b = 0; b < arguments.length; b++)
        Vj(
          arguments[b],
          function (c, d) {
            this.add(d, c);
          },
          this
        );
    };
    var dk = /[#\/\?@]/g,
      ek = /[#\?]/g,
      fk = /[#\?:]/g,
      gk = /#/g,
      hk = function (a, b) {
        return a
          ? b
            ? decodeURI(a.replace(/%25/g, "%2525"))
            : decodeURIComponent(a)
          : "";
      },
      ik = /[#\?@]/g,
      jk = function (a) {
        a = a.charCodeAt(0);
        return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
      },
      kk = function (a, b, c) {
        return "string" === typeof a
          ? ((a = encodeURI(a).replace(b, jk)),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a)
          : null;
      },
      lk = function (a) {
        this.l = this.C = this.o = "";
        this.F = null;
        this.A = this.j = "";
        this.s = !1;
        var b;
        a instanceof lk
          ? ((this.s = a.s),
            mk(this, a.o),
            (this.C = a.C),
            (this.l = a.l),
            nk(this, a.F),
            (this.j = a.j),
            ok(this, bk(a.h)),
            (this.A = a.A))
          : a && (b = String(a).match(_.of))
          ? ((this.s = !1),
            mk(this, b[1] || "", !0),
            (this.C = hk(b[2] || "")),
            (this.l = hk(b[3] || "", !0)),
            nk(this, b[4]),
            (this.j = hk(b[5] || "", !0)),
            ok(this, b[6] || "", !0),
            (this.A = hk(b[7] || "")))
          : ((this.s = !1), (this.h = new Wj(null, this.s)));
      };
    lk.prototype.toString = function () {
      var a = [],
        b = this.o;
      b && a.push(kk(b, dk, !0), ":");
      var c = this.l;
      if (c || "file" == b)
        a.push("//"),
          (b = this.C) && a.push(kk(b, dk, !0), "@"),
          a.push(_.Nc(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          (c = this.F),
          null != c && a.push(":", String(c));
      if ((c = this.j))
        this.l && "/" != c.charAt(0) && a.push("/"),
          a.push(kk(c, "/" == c.charAt(0) ? ek : fk, !0));
      (c = this.h.toString()) && a.push("?", c);
      (c = this.A) && a.push("#", kk(c, gk));
      return a.join("");
    };
    lk.prototype.resolve = function (a) {
      var b = new lk(this),
        c = !!a.o;
      c ? mk(b, a.o) : (c = !!a.C);
      c ? (b.C = a.C) : (c = !!a.l);
      c ? (b.l = a.l) : (c = null != a.F);
      var d = a.j;
      if (c) nk(b, a.F);
      else if ((c = !!a.j)) {
        if ("/" != d.charAt(0))
          if (this.l && !this.j) d = "/" + d;
          else {
            var e = b.j.lastIndexOf("/");
            -1 != e && (d = b.j.slice(0, e + 1) + d);
          }
        e = d;
        if (".." == e || "." == e) d = "";
        else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
          d = 0 == e.lastIndexOf("/", 0);
          e = e.split("/");
          for (var f = [], g = 0; g < e.length; ) {
            var h = e[g++];
            "." == h
              ? d && g == e.length && f.push("")
              : ".." == h
              ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
                d && g == e.length && f.push(""))
              : (f.push(h), (d = !0));
          }
          d = f.join("/");
        } else d = e;
      }
      c ? (b.j = d) : (c = "" !== a.h.toString());
      c ? ok(b, bk(a.h)) : (c = !!a.A);
      c && (b.A = a.A);
      return b;
    };
    mk = function (a, b, c) {
      a.o = c ? hk(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    };
    nk = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("K`" + b);
        a.F = b;
      } else a.F = null;
    };
    ok = function (a, b, c) {
      b instanceof Wj
        ? ((a.h = b), ck(a.h, a.s))
        : (c || (b = kk(b, ik)), (a.h = new Wj(b, a.s)));
    };
    pk = function (a) {
      var b = Uj(a);
      if ("undefined" == typeof b) throw Error("M");
      var c = new Wj(null);
      a = Vi(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        Array.isArray(f) ? ak(c, e, f) : c.add(e, f);
      }
      return c;
    };
    qk = {};
    _.rk = {};
    zi = {};
    _.sk = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        128 > e
          ? (b[c++] = e)
          : (2048 > e
              ? (b[c++] = (e >> 6) | 192)
              : (55296 == (e & 64512) &&
                d + 1 < a.length &&
                56320 == (a.charCodeAt(d + 1) & 64512)
                  ? ((e =
                      65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                    (b[c++] = (e >> 18) | 240),
                    (b[c++] = ((e >> 12) & 63) | 128))
                  : (b[c++] = (e >> 12) | 224),
                (b[c++] = ((e >> 6) & 63) | 128)),
            (b[c++] = (e & 63) | 128));
      }
      return b;
    };
    tk = function (a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d;
    };
    tk.prototype.ceil = function () {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this;
    };
    tk.prototype.floor = function () {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this;
    };
    tk.prototype.round = function () {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this;
    };
    tk.prototype.translate = function (a, b) {
      a instanceof O
        ? ((this.left += a.x),
          (this.right += a.x),
          (this.top += a.y),
          (this.bottom += a.y))
        : ((this.left += a),
          (this.right += a),
          "number" === typeof b && ((this.top += b), (this.bottom += b)));
      return this;
    };
    var uk = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    };
    uk.prototype.ceil = function () {
      this.left = Math.ceil(this.left);
      this.top = Math.ceil(this.top);
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };
    uk.prototype.floor = function () {
      this.left = Math.floor(this.left);
      this.top = Math.floor(this.top);
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };
    uk.prototype.round = function () {
      this.left = Math.round(this.left);
      this.top = Math.round(this.top);
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };
    uk.prototype.translate = function (a, b) {
      a instanceof O
        ? ((this.left += a.x), (this.top += a.y))
        : ((this.left += a), "number" === typeof b && (this.top += b));
      return this;
    };
    vk = function (a, b) {
      var c = _.Rc(a);
      return c.defaultView &&
        c.defaultView.getComputedStyle &&
        (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    };
    wk = function (a, b) {
      return (
        vk(a, b) ||
        (a.currentStyle ? a.currentStyle[b] : null) ||
        (a.style && a.style[b])
      );
    };
    xk = function (a) {
      "number" == typeof a && (a += "px");
      return a;
    };
    _.yk = function (a, b) {
      if (b instanceof O) {
        var c = b.x;
        b = b.y;
      } else (c = b), (b = void 0);
      a.style.left = xk(c);
      a.style.top = xk(b);
    };
    zk = function (a) {
      a = a ? _.Rc(a) : document;
      return !_.C || 9 <= Number(_.rc) || _.Wc(_.Sc(a).V)
        ? a.documentElement
        : a.body;
    };
    Ak = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    };
    Bk = function (a) {
      if (_.C && !(8 <= Number(_.rc))) return a.offsetParent;
      var b = _.Rc(a),
        c = wk(a, "position"),
        d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = wk(a, "position")),
          (d = d && "static" == c && a != b.documentElement && a != b.body),
          !d &&
            (a.scrollWidth > a.clientWidth ||
              a.scrollHeight > a.clientHeight ||
              "fixed" == c ||
              "absolute" == c ||
              "relative" == c))
        )
          return a;
      return null;
    };
    Ck = function (a) {
      var b = _.Rc(a),
        c = new O(0, 0),
        d = zk(b);
      if (a == d) return c;
      a = Ak(a);
      b = _.Ui(_.Sc(b).V);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    };
    Dk = function (a) {
      for (
        var b = new tk(0, Infinity, Infinity, 0),
          c = _.Sc(a),
          d = c.V.body,
          e = c.V.documentElement,
          f = Ti(c.V);
        (a = Bk(a));

      )
        if (
          !(
            (_.C && 0 == a.clientWidth) ||
            (_.ac && 0 == a.clientHeight && a == d)
          ) &&
          a != d &&
          a != e &&
          "visible" != wk(a, "overflow")
        ) {
          var g = Ck(a),
            h = new O(a.clientLeft, a.clientTop);
          g.x += h.x;
          g.y += h.y;
          b.top = Math.max(b.top, g.y);
          b.right = Math.min(b.right, g.x + a.clientWidth);
          b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
          b.left = Math.max(b.left, g.x);
        }
      d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = _.Xc(_.ed(c) || window);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left
        ? b
        : null;
    };
    _.Ek = function (a, b) {
      var c = new O(0, 0),
        d = _.Yc(_.Rc(a));
      if (!_.Wb(d, "parent")) return c;
      do {
        if (d == b) var e = Ck(a);
        else (e = Ak(a)), (e = new O(e.left, e.top));
        c.x += e.x;
        c.y += e.y;
      } while (
        d &&
        d != b &&
        d != d.parent &&
        (a = d.frameElement) &&
        (d = d.parent)
      );
      return c;
    };
    Gk = function (a) {
      var b = Fk;
      if ("none" != wk(a, "display")) return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    };
    Fk = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = _.ac && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect
        ? ((a = Ak(a)), new _.Lc(a.right - a.left, a.bottom - a.top))
        : new _.Lc(b, c);
    };
    _.S = function (a, b) {
      a.style.display = b ? "" : "none";
    };
    Hk = function (a) {
      return "rtl" == wk(a, "direction");
    };
    _.Ik = function (a, b, c) {
      a = a.style;
      _.$b
        ? (a.MozBoxSizing = c)
        : _.ac
        ? (a.WebkitBoxSizing = c)
        : (a.boxSizing = c);
      a.width = Math.max(b.width, 0) + "px";
      a.height = Math.max(b.height, 0) + "px";
    };
    Jk = function (a, b) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var c = a.style.left,
        d = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = b;
      b = a.style.pixelLeft;
      a.style.left = c;
      a.runtimeStyle.left = d;
      return +b;
    };
    Kk = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? Jk(a, b) : 0;
    };
    Lk = function (a) {
      if (_.C) {
        var b = Kk(a, "paddingLeft"),
          c = Kk(a, "paddingRight"),
          d = Kk(a, "paddingTop");
        a = Kk(a, "paddingBottom");
        return new tk(d, c, a, b);
      }
      b = vk(a, "paddingLeft");
      c = vk(a, "paddingRight");
      d = vk(a, "paddingTop");
      a = vk(a, "paddingBottom");
      return new tk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    };
    Mk = { thin: 2, medium: 4, thick: 6 };
    Nk = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in Mk ? Mk[b] : Jk(a, b);
    };
    Ok = function (a) {
      if (_.C && !(9 <= Number(_.rc))) {
        var b = Nk(a, "borderLeft"),
          c = Nk(a, "borderRight"),
          d = Nk(a, "borderTop");
        a = Nk(a, "borderBottom");
        return new tk(d, c, a, b);
      }
      b = vk(a, "borderLeftWidth");
      c = vk(a, "borderRightWidth");
      d = vk(a, "borderTopWidth");
      a = vk(a, "borderBottomWidth");
      return new tk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    };
    Pk = function (a) {
      if (null != a)
        switch (a.jf) {
          case 1:
            return 1;
          case -1:
            return -1;
          case 0:
            return 0;
        }
      return null;
    };
    _.Qk = function (a, b) {
      return a && b && a.Lj && b.Lj
        ? a.Wb !== b.Wb
          ? !1
          : a.toString() === b.toString()
        : a instanceof _.vf && b instanceof _.vf
        ? a.Wb != b.Wb
          ? !1
          : a.toString() == b.toString()
        : a == b;
    };
    Rk = {};
    Sk = {};
    _.Tk = function (a, b) {
      var c = Rk["key_a:"];
      if (void 0 === c || a > c) (Rk["key_a:"] = a), (Sk["key_a:"] = b);
      else if (a == c) throw Error("ka`a`");
    };
    Uk = function () {
      return "";
    };
    Vk = {
      "\x00": "\\0 ",
      "\b": "\\8 ",
      "\t": "\\9 ",
      "\n": "\\a ",
      "\v": "\\b ",
      "\f": "\\c ",
      "\r": "\\d ",
      '"': "\\22 ",
      "&": "\\26 ",
      "'": "\\27 ",
      "(": "\\28 ",
      ")": "\\29 ",
      "*": "\\2a ",
      "/": "\\2f ",
      ":": "\\3a ",
      ";": "\\3b ",
      "<": "\\3c ",
      "=": "\\3d ",
      ">": "\\3e ",
      "@": "\\40 ",
      "\\": "\\5c ",
      "{": "\\7b ",
      "}": "\\7d ",
      "\u0085": "\\85 ",
      "\u00a0": "\\a0 ",
      "\u2028": "\\2028 ",
      "\u2029": "\\2029 ",
    };
    _.Wk = function (a) {
      return Vk[a];
    };
    Xk = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    };
    Yk = function (a) {
      return Xk[a];
    };
    _.Zk = function (a) {
      return _.Vh(a, _.Sh)
        ? a
        : a instanceof _.Fc
        ? (0, _.L)(_.Gc(a).toString())
        : a instanceof _.Fc
        ? (0, _.L)(_.Gc(a).toString())
        : (0, _.L)(String(String(a)).replace(_.ai, _.$h), Pk(a));
    };
    _.$k =
      /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
    al =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
    _.bl = function (a) {
      return String(a).replace(al, Yk);
    };
    cl = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i;
    _.dl = function (a) {
      _.Vh(a, qk) || _.Vh(a, _.rk)
        ? (a = _.bl(a))
        : a instanceof _.vc
        ? (a = _.bl(_.Nh(a)))
        : a instanceof _.vc
        ? (a = _.bl(_.Nh(a)))
        : a instanceof _.Hb
        ? (a = _.bl(_.Ma(a).toString()))
        : a instanceof _.Hb
        ? (a = _.bl(_.Ma(a).toString()))
        : ((a = String(a)),
          (a = cl.test(a) ? a.replace(al, Yk) : "about:invalid#zSoyz"));
      return a;
    };
    el =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    _.fl = function (a) {
      _.Vh(a, qk) || _.Vh(a, _.rk)
        ? (a = _.bl(a))
        : a instanceof _.vc
        ? (a = _.bl(_.Nh(a)))
        : a instanceof _.vc
        ? (a = _.bl(_.Nh(a)))
        : a instanceof _.Hb
        ? (a = _.bl(_.Ma(a).toString()))
        : a instanceof _.Hb
        ? (a = _.bl(_.Ma(a).toString()))
        : ((a = String(a)),
          (a = el.test(a) ? a.replace(al, Yk) : "about:invalid#zSoyz"));
      return a;
    };
    gl = function (a) {
      return function () {
        return a;
      };
    };
    hl = function (a, b) {
      for (var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? (a + d) & 4294967295 : a ^ d;
      }
      return a;
    };
    var il = window.google && google.translate && google.translate._const,
      Mi,
      ol,
      pl,
      tl,
      xl,
      zl;
    il ||
      (il = {
        _cac: "",
        _cam: "",
        _cest: new Date(),
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        Wl: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: "",
      });
    _.jl =
      (window.google && window.google.translate && window.google.translate.v) ||
      "";
    _.T = il._cl || "en";
    Mi = il._cuc;
    _.kl = il._cnad;
    _.ll = il._cest;
    _.ml = il._cnal || {};
    _.Ni = "lib" == il._cam ? 1 : 0;
    _.nl = (il._cac || "te") + (1 == _.Ni ? "_lib" : "");
    ol = (function () {
      function a(d) {
        return function () {
          return d;
        };
      }
      var b = String.fromCharCode(107),
        c = a(String.fromCharCode(116));
      b = a(b);
      c = [c(), c()];
      c[1] = b();
      return il["_c" + c.join(b())] || "";
    })();
    pl = il._pah || "";
    _.ql = il._pas || "https://";
    _.rl = il._pbi || "";
    _.sl = il._pci || "";
    tl = il._plla || "";
    _.ul = il._pli || "";
    _.vl = il._pmi || "";
    _.wl = il._ps || "";
    xl = il._puh || "";
    _.yl = "//" + xl + "/translate_suggestion?client=" + _.nl;
    zl = "//" + pl + "/translate_voting?client=" + _.nl;
    _.Al =
      "https://www.google.com/support/translate" +
      ("en" == _.T ? "" : "#googtrans/en/" + _.T);
    _.Bl = function (a) {
      var b = "Ic";
      if (a.Ic && a.hasOwnProperty(b)) return a.Ic;
      b = new a();
      return (a.Ic = b);
    };
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    _.Cl =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      );
    var Fl, Ml, Nl, Ol, Pl;
    _.Dl = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
      return b;
    };
    _.El = function (a) {
      this.j = a ? [a] : [];
      this.h = [0];
      this.l = !1;
    };
    _.El.prototype.register = function (a) {
      if (this.l) return a || function () {};
      this.h.push(0);
      var b = this.h.length - 1;
      return (0, _.y)(function () {
        this.h[b]++;
        a && a.apply(null, arguments);
        Fl(this);
      }, this);
    };
    _.El.prototype.delay = function (a) {
      return this.l
        ? a
        : (0, _.y)(function () {
            if (this.l) a.apply(null, arguments);
            else {
              var b = arguments;
              this.j.push(function () {
                a.apply(null, b);
              });
            }
          }, this);
    };
    _.El.prototype.finish = function () {
      this.h[0] = 1;
      Fl(this);
    };
    Fl = function (a) {
      for (var b = 0; b < a.h.length; ++b) if (0 == a.h[b]) return;
      a.l = !0;
      for (b = 0; b < a.j.length; ++b) {
        var c = a.j[b];
        a.j[b] = null;
        c.call();
      }
      a.j = [];
      a.h = [];
    };
    _.Gl = function (a) {
      this.l = a;
      this.j = this.h = !1;
    };
    _.Hl = function (a, b) {
      return (0, _.y)(function () {
        b && b.apply(null, arguments);
        this.j ? this.h || (this.l.call(), (this.h = !0)) : (this.h = !0);
      }, a);
    };
    _.Gl.prototype.finish = function () {
      this.j || ((this.j = !0), this.h && this.l.call());
    };
    var Il = function (a, b, c) {
        this.h = b;
        this.C = a;
        this.A = c || 0;
        this.l = this.j = !1;
      },
      Jl = function (a) {
        a.j || a.s();
      };
    Il.prototype.s = function () {
      (this.j = (this.l = !!this.C.call()) || 0 >= --this.A)
        ? (this.h.call(null, this.l), (this.o = 0))
        : (this.o = window.setTimeout((0, _.y)(this.s, this), 30));
    };
    Il.prototype.cancel = function () {
      this.o && window.clearTimeout(this.o);
      this.j = !0;
      this.h.call(null, this.l);
    };
    _.Kl = function (a, b) {
      return function () {
        a.dispatchEvent(b);
      };
    };
    _.Ll = function (a) {
      a = (0, _.Ub)(a).toLowerCase().replace("_", "-");
      if ("zh-cn" == a) return "zh-CN";
      if ("zh-tw" == a) return "zh-TW";
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      return "zh" == a ? "zh-CN" : a;
    };
    Ml = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a[c] !== Object.prototype[c]) {
          var d = _.Nc(c);
          if ("array" == _.ob(a[c]))
            for (var e = 0; e < a[c].length; ++e)
              b.push(d + "=" + _.Nc(a[c][e]));
          else b.push(d + "=" + _.Nc(a[c]));
        }
      return b.join("&");
    };
    _.Di = function (a, b) {
      b = b || {};
      b.nca = a;
      b.client = _.nl;
      _.jl && (b.logld = "v" + _.jl);
      var c = new Image();
      c.src = "//" + xl + "/gen204?" + Ml(b);
      c.onload = function () {
        c.onload = null;
      };
    };
    Nl = function () {
      var a = {};
      try {
        for (var b in Object.prototype) {
          var c = Object.prototype[b];
          delete Object.prototype[b];
          a[b] = c;
        }
      } catch (d) {
        return {};
      }
      return a;
    };
    Ol = function (a) {
      for (var b in a) Object.prototype[b] = a[b];
    };
    Pl = function (a) {
      for (var b in a) if (a[b] !== Object.prototype[b]) return !1;
      return !0;
    };
    var Ql;
    _.Ci = null;
    Ql = function () {};
    Ql.prototype.attach = function (a, b, c) {
      for (var d in c)
        c[d] !== Object.prototype[d] &&
          (b[d] =
            "function" === typeof c[d] ? c[d] : _.tb(Ei, a, Number(c[d])));
    };
    _.Rl = new Ql();
    var Fi = function (a) {
      _.J.call(this, a);
    };
    _.x(Fi, _.J);
    var Sl = function (a) {
        this.url = a;
        this.timeout = -1;
        this.l = this.j = "callback";
        this.h = this.Fc = null;
      },
      Wl = function (a, b) {
        b = void 0 === b ? {} : b;
        a.h = Tj();
        var c = new lk(a.url),
          d = new Map();
        a.l && d.set(a.l, a.j);
        c.h.s(pk(b), d);
        Tl(a)
          .then(function () {
            Ul(a, c.toString());
          })
          .then(function () {
            return a.h.promise;
          })
          .then(
            function () {
              Vl(a);
            },
            function () {
              Vl(a);
            }
          );
        0 < a.timeout &&
          (a.o = setTimeout(function () {
            a.h.reject("Timeout!");
          }, a.timeout));
        return a.h.promise;
      },
      Ul = function (a, b) {
        var c = new MessageChannel();
        a.Fc.contentWindow.postMessage({ url: b, callbackName: a.j }, "*", [
          c.port2,
        ]);
        c.port1.onmessage = function (d) {
          var e = {};
          void 0 !== a.o && (clearTimeout(a.o), (a.o = void 0));
          void 0 === d.data &&
            a.h.reject("Callback called, but no data received");
          "string" !== typeof d.data &&
            a.h.reject("Exploitation attempt! Data is not a string!");
          try {
            e = JSON.parse(d.data);
          } catch (f) {
            a.h.reject("Invalid Data received: " + f.message);
          }
          a.h.resolve(e);
        };
      },
      Tl = function (a) {
        var b = Tj(),
          c = _.Zc(document, "IFRAME");
        if (!c.sandbox) throw Error("la");
        c.sandbox.value = "allow-scripts";
        c.style.display = "none";
        a.Fc = c;
        a = Gi();
        a = _.rj(_.Ic, uj(ui(a)));
        c.srcdoc = _.Gc(a);
        a = _.Pa(
          "data:text/html;charset=UTF-8;base64," + btoa(_.Gc(a).toString())
        );
        c.src = _.Ma(a).toString();
        c.addEventListener(
          "load",
          function () {
            return b.resolve(c);
          },
          !1
        );
        c.addEventListener(
          "error",
          function (d) {
            b.reject(d);
          },
          !1
        );
        document.documentElement.appendChild(c);
        return b.promise;
      },
      Vl = function (a) {
        null !== a.Fc &&
          (document.documentElement.removeChild(a.Fc), (a.Fc = null));
      };
    var Xl = function (a, b) {
      _.A.call(this);
      this.h = new lk(a);
      if (b)
        for (var c in b) b[c] !== Object.prototype[c] && this.h.h.set(c, b[c]);
    };
    _.x(Xl, _.A);
    Xl.prototype.vb = function () {
      return !0;
    };
    Xl.prototype.Wa = function () {
      return this.vb();
    };
    Xl.prototype.send = function () {
      return null;
    };
    Xl.prototype.cancel = function () {};
    var Yl = function (a, b, c, d) {
      Xl.call(this, a, b);
      this.l = null == d || !!d;
      a = this.j = new Sl(this.h);
      a.j = "callback";
      a.l = void 0 === c ? "callback" : c;
    };
    _.x(Yl, Xl);
    Yl.prototype.vb = function () {
      return this.l;
    };
    Yl.prototype.send = function (a, b) {
      a = Wl(this.j, a);
      a.then(b);
      return a;
    };
    Yl.prototype.cancel = function (a) {
      a.cancel();
    };
    var Zl = function (a, b) {
      Xl.call(this, a, b);
      this.l = {};
      this.j = this.o = 0;
      window.XMLHttpRequest &&
        "withCredentials" in new XMLHttpRequest() &&
        (this.j = 1);
      !this.j &&
        window.XDomainRequest &&
        "file:" != window.location.protocol &&
        ((this.j = 2), this.h.h.set("u", window.location.href));
    };
    _.x(Zl, Xl);
    Zl.prototype.vb = function () {
      return !!this.j;
    };
    Zl.prototype.send = function (a, b) {
      var c = Nl(),
        d = ++this.o,
        e = {},
        f = {};
      "q" in a && ((f.q = a.q), delete a.q);
      a.mode = this.j;
      1 == this.j
        ? ((e.ic = new _.Vf()),
          _.D(
            e.ic,
            "complete",
            (0, _.y)(function () {
              e.sd ||
                (e.ic.se()
                  ? b(e.ic.Bd())
                  : (this.Fh(), b(null, e.ic.Bd() || null)),
                $l(this, d));
            }, this)
          ),
          _.D(
            e.ic,
            "timeout",
            (0, _.y)(function () {
              e.sd || (this.Gh(), $l(this, d));
            }, this)
          ),
          e.ic.send(this.h.toString() + "&" + Ml(a), "POST", Ml(f), {
            "Content-Type": "application/x-www-form-urlencoded",
          }))
        : ((e.Jb = new XDomainRequest()),
          (e.Jb.timeout = 2e4),
          (e.Jb.onload = (0, _.y)(function () {
            e.sd || (b(e.Jb.responseText), $l(this, d));
          }, this)),
          (e.Jb.onerror = (0, _.y)(function () {
            e.sd || (this.Fh(), b(null), $l(this, d));
          }, this)),
          (e.Jb.ontimeout = (0, _.y)(function () {
            e.sd || (this.Gh(), b(null), $l(this, d));
          }, this)),
          e.Jb.open("POST", this.h.toString() + "&" + Ml(a)),
          e.Jb.send(Ml(f)));
      this.l[d] = e;
      Ol(c);
      return d;
    };
    Zl.prototype.cancel = function (a) {
      var b = this.l[a];
      b && ((b.sd = !0), b.Jb && b.Jb.abort(), $l(this, a));
    };
    var $l = function (a, b) {
      var c = a.l[b];
      c &&
        (c.ic ? (c.ic.P(), (c.ic = null)) : c.Jb && (c.Jb = null),
        delete a.l[b]);
    };
    Zl.prototype.L = function () {
      Xl.prototype.L.call(this);
      for (var a in this.l) this.cancel(a);
    };
    _.Rl.attach(17170, Zl.prototype, { Gh: 1, Fh: 2 });
    var am = function (a, b, c) {
      Xl.call(this, a, c);
      this.l = b.proxyIsSupported;
      this.o = b.proxySend;
      this.j = b.proxyCancel;
    };
    _.x(am, Xl);
    am.prototype.vb = function () {
      return this.l();
    };
    am.prototype.send = function (a, b) {
      return this.o(this.h.toString(), a, b);
    };
    am.prototype.cancel = function (a) {
      this.j(a);
    };
    var bm = function (a, b) {
      _.A.call(this);
      this.j = a;
      this.h = b ? b : null;
    };
    _.x(bm, _.A);
    var cm = function (a) {
      if ("array" != _.ob(a)) var b = [[a, 200]];
      else if (2 == a.length && "array" != _.ob(a[0]) && "array" != _.ob(a[1]))
        b = [
          [a[0], 200, a[1]],
          [a[1], 200, a[1]],
        ];
      else {
        b = [];
        for (var c = 0; c < a.length; ++c)
          b[c] = "array" != _.ob(a[c]) ? [a[c], 200] : [a[c][0], 200, a[c][1]];
      }
      return b;
    };
    bm.prototype.o = function (a) {
      var b = this;
      return function (c) {
        if (c)
          try {
            var d = c.indexOf("\x00");
            0 <= d && (c = c.substr(0, d));
            var e = JSON.parse(c);
          } catch (f) {
            (e = null), b.Rj();
          }
        e ? a(cm(e), 200) : a([], 500);
      };
    };
    bm.prototype.l = function (a) {
      return function (b) {
        b ? a(cm(b), 200) : a([], 500);
      };
    };
    bm.prototype.L = function () {
      _.A.prototype.L.call(this);
    };
    _.Rl.attach(47504, bm.prototype, {
      Rj: function () {
        _.Di("te_afbr");
      },
    });
    _.dm = function (a) {
      return a;
    };
    _.fm = function (a, b, c, d) {
      _.A.call(this);
      var e;
      b
        ? (e = { client: b })
        : (e = { anno: 3, client: _.nl, format: "html", v: "1.0" });
      c && (e.sp = c);
      e.key = a;
      _.jl && (e.logld = "v" + _.jl);
      this.h = null;
      this.j = { td: (0, _.y)(this.F, this), Of: 300 };
      a = this.s = new bm(e, d);
      b = _.ql + tl;
      this.o = a.h
        ? new am(b, a.h, { client: _.nl })
        : new Yl(b, { client: _.nl });
      a = this.s;
      if (a.h) {
        if (!a.h) throw Error("ma");
        a = [
          {
            Ha: new am(_.ql + pl + "/translate_a/t", a.h, a.j),
            td: (0, _.y)(a.l, a),
            ye: 1900,
            Pf: 4294967295,
            Nf: -1,
            hg: 0,
            fe: !1,
          },
        ];
      } else
        (b = _.ql + pl),
          (a = [
            {
              Ha: new Zl(b + "/translate_a/t", a.j),
              td: (0, _.y)(a.o, a),
              ye: 30720,
              Pf: 4294967295,
              Nf: -1,
              hg: 0,
              fe: !1,
            },
            {
              Ha: new Yl(b + "/translate_a/t", a.j, "cb", _.C && 7 >= _.oc),
              td: (0, _.y)(a.l, a),
              ye: 1900,
              Pf: 4294967295,
              Nf: -1,
              hg: 3,
              fe: !0,
            },
          ]);
      this.A = new em(a);
      this.l = !1;
      for (b = 0; b < a.length; ++b) this.l = this.l || a[b].Ha.vb();
      this.l || this.Sj();
    };
    _.x(_.fm, _.A);
    _.fm.prototype.F = function (a) {
      return function (b) {
        if (b)
          try {
            var c = JSON.parse(b);
          } catch (d) {
            c = null;
          }
        a((c && c[1]) || void 0);
      };
    };
    _.fm.prototype.initialize = function (a) {
      this.C ||
        ((this.C = !0),
        this.A.start(
          (0, _.y)(function (b) {
            b && ((this.h = b), (this.j.Ha = b.Ha));
            a();
          }, this)
        ));
    };
    _.fm.prototype.vb = function () {
      return this.l;
    };
    _.fm.prototype.Wa = function () {
      return null !== this.h && null !== this.h.Ha && this.h.Ha.Wa();
    };
    _.gm = function (a, b, c) {
      b = a.j.td(b);
      a.j.Ha.send({ q: c.substring(0, a.j.Of), sl: "auto", tl: "en" }, b);
    };
    _.fm.prototype.translate = function (a, b, c, d, e, f, g, h) {
      a = this.h.td(a);
      c = { q: b, sl: c, tl: d };
      c = _.dm(c);
      c.tc = e;
      f && (c.ctt = 1);
      g && (c.dom = 1);
      h && (c.sr = 1);
      e = c;
      g = gl(String.fromCharCode(116));
      f = gl(String.fromCharCode(107));
      g = [g(), g()];
      g[1] = f();
      f = g.join("");
      h = ol.split(".");
      g = Number(h[0]) || 0;
      b = _.sk(b.join(""));
      d = g;
      for (var l = 0; l < b.length; l++) (d += b[l]), (d = hl(d, "+-a^+6"));
      d = hl(d, "+-3^+b+-f");
      d ^= Number(h[1]) || 0;
      0 > d && (d = (d & 2147483647) + 2147483648);
      b = d % 1e6;
      e[f] = b.toString() + "." + (b ^ g);
      return this.h.Ha.send(c, a);
    };
    var hm = function (a, b) {
        b instanceof _.Zd
          ? b.then(function (c) {
              a.h.Ha.cancel(c);
            })
          : a.h.Ha.cancel(b);
      },
      im = function (a) {
        return a.h.fe ? a.h.ye - new lk(a.h.Ha.h).toString().length : a.h.ye;
      };
    _.fm.prototype.L = function () {
      _.A.prototype.L.call(this);
      this.h && (this.h.Ha.P(), (this.h.Ha = null));
      this.j.Ha = null;
      this.o.P();
      this.o = null;
    };
    _.Rl.attach(7361, _.fm.prototype, {
      Sj: function () {
        _.Di("te_au");
      },
    });
    var em = function (a) {
      this.j = a;
    };
    em.prototype.start = function (a) {
      this.h = a;
      this.l = 0;
      jm(this);
    };
    var jm = function (a) {
      if (a.l >= a.j.length) a.h(null);
      else {
        var b = a.j[a.l++];
        b.rk
          ? Jl(
              new Il(
                (0, _.y)(b.Ha.Wa, b.Ha),
                (0, _.y)(function (c) {
                  c ? this.h(b) : jm(this);
                }, a),
                b.rk
              )
            )
          : b.Ha.Wa()
          ? a.h(b)
          : jm(a);
      }
    };
    var km = _.Dl(
        "A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR".split(
          " "
        )
      ),
      lm = _.Dl(
        "APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE".split(
          " "
        )
      ),
      mm = _.Dl(
        "BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")
      ),
      nm = _.Dl(["submit", "button"]);
    var om;
    _.pm = function (a, b, c, d, e) {
      this.j = !!b;
      this.node = null;
      this.h = 0;
      this.qg = !1;
      this.l = !c;
      a && om(this, a, d);
      this.depth = void 0 != e ? e : this.h || 0;
      this.j && (this.depth *= -1);
    };
    _.z(_.pm, _.Ue);
    om = function (a, b, c, d) {
      if ((a.node = b))
        a.h =
          "number" === typeof c ? c : 1 != a.node.nodeType ? 0 : a.j ? -1 : 1;
      "number" === typeof d && (a.depth = d);
    };
    _.qm = function (a) {
      var b = a.j ? -1 : 1;
      a.h == b && ((a.h = -1 * b), (a.depth += a.h * (a.j ? -1 : 1)));
    };
    _.pm.prototype.next = function () {
      if (this.qg) {
        if (!this.node || (this.l && 0 == this.depth)) return _.Ve;
        var a = this.node;
        var b = this.j ? -1 : 1;
        if (this.h == b) {
          var c = this.j ? a.lastChild : a.firstChild;
          c ? om(this, c) : om(this, a, -1 * b);
        } else
          (c = this.j ? a.previousSibling : a.nextSibling)
            ? om(this, c)
            : om(this, a.parentNode, -1 * b);
        this.depth += this.h * (this.j ? -1 : 1);
      } else this.qg = !0;
      return (a = this.node) ? { value: a, done: !1 } : _.Ve;
    };
    _.pm.prototype.splice = function (a) {
      var b = this.node,
        c = this.j ? 1 : -1;
      this.h == c &&
        ((this.h = -1 * c), (this.depth += this.h * (this.j ? -1 : 1)));
      this.j = !this.j;
      _.pm.prototype.next.call(this);
      this.j = !this.j;
      c = _.da(arguments[0]) ? arguments[0] : arguments;
      for (var d = c.length - 1; 0 <= d; d--) Hj(c[d], b);
      _.Ij(b);
    };
    var sm = function (a, b) {
        this.l = _.C ? [] : null;
        this.j = [];
        this.done = !1;
        for (
          this.h = new _.pm(a, !1, b, 3 === a.nodeType ? 0 : 1, 1);
          (a = a.parentNode);

        )
          rm(this, a, !0);
        this.j.push(!1);
        this.j.reverse();
        for (a = 1; a < this.j.length; ++a)
          null == this.j[a] && (this.j[a] = this.j[a - 1]);
      },
      rm = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = ((b.style && b.style.whiteSpace) || "").substring(0, 3);
        "pre" === d || (!d && "PRE" === b.tagName)
          ? a.j.push(!0)
          : d && "pre" !== d
          ? a.j.push(!1)
          : c
          ? a.j.push(null)
          : a.j.push(a.j[a.j.length - 1]);
      },
      tm = function (a) {
        return !!a.j[a.j.length - 1];
      };
    sm.prototype.node = function () {
      return this.h.node;
    };
    sm.prototype.depth = function () {
      return this.h.depth;
    };
    sm.prototype.next = function () {
      try {
        this.l && 0 < this.l.length && -1 === this.h.h && this.l.length--;
        -1 === this.h.h && this.j.length--;
        if (
          this.l &&
          0 < this.l.length &&
          1 !== this.h.h &&
          !this.h.node.nextSibling
        )
          om(this.h, this.l[this.l.length - 1], -1, this.h.depth - 1);
        else {
          if (this.h.next().done) {
            this.done = !0;
            return;
          }
          this.l && 1 === this.h.h && this.l.push(this.h.node);
        }
        1 === this.h.h && this.h.qg && rm(this, this.h.node);
      } catch (a) {
        this.Yj(a), (this.done = !0);
      }
    };
    _.Rl.attach(52754, sm.prototype, { Yj: 1 });
    var um;
    um = function () {
      return "[msg_undefined]";
    };
    _.U = {};
    (function () {
      var a = function (b) {
        return function () {
          return b;
        };
      };
      _.U = {
        af: a(0),
        Ne: a(1),
        wg: a(2),
        Bl: a(3),
        Hi: a(4),
        Bg: a(5),
        zi: a(45),
        Ai: a(6),
        Kg: a(7),
        nd: a(8),
        Ji: a(9),
        Ql: a(10),
        Ni: a(11),
        Mg: a(12),
        Nl: a(13),
        Ei: a(14),
        Ml: a(15),
        Ng: a(16),
        Sl: a(17),
        Li: a(18),
        Uk: a(19),
        Al: a(20),
        li: a(21),
        Fi: a(22),
        Hl: a(23),
        Gl: a(24),
        Ci: a(25),
        Rl: a(26),
        Ii: a(27),
        Di: a(28),
        Bi: a(29),
        Mi: a(30),
        Tk: a(32),
        Rk: a(33),
        Tl: a(34),
        fl: a(35),
        Zk: a(36),
        el: a(37),
        Gi: a(38),
        ql: a(39),
        Sk: a(40),
        Ze: a(41),
        Hg: a(46),
        Lg: a(47),
        Ag: a(48),
        zg: a(49),
        yg: a(50),
        Ki: a(51),
      };
    })();
    _.vm = function () {
      var a = Li("google.translate.m");
      if (a)
        for (var b in _.U)
          if (_.U[b] !== Object.prototype[_.U[b]] && _.U[b]) {
            var c = _.U[b]();
            _.U[b] = a[c] ? a[c] : um;
          }
    };
    var xm;
    _.wm = function (a) {
      var b = a.Zc,
        c = a.Hh;
      a.Ah
        ? (b =
            "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" +
            String(b).replace(_.$k, _.Wk) +
            "',sizingMethod='scale');\"></span>")
        : ((a = _.U.nd),
          (b =
            '<img src="' +
            _.M(_.fl(b)) +
            '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' +
            _.M(a) +
            '">'));
      a = _.U.nd;
      return (0, _.L)(
        '<span style="white-space:nowrap"><a class="goog-logo-link" href="' +
          _.M(_.dl(c)) +
          '" target="_blank">' +
          b +
          _.Zk(a) +
          "</a></span>"
      );
    };
    xm = function (a, b) {
      a = { Zc: a.Zc, dir: a.dir, Me: a.Me };
      var c = Sk["key_a:"];
      c || (c = Sk["key_a:"]);
      b = (c ? c : Uk)(a, b);
      return (0, _.L)(b);
    };
    _.Tk(0, function (a) {
      var b = a.Zc,
        c = _.U.nd,
        d = _.U.Ze;
      return (0,
      _.L)('<div id="goog-gt-tt" class="skiptranslate" dir="' + _.M(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + _.M(_.fl(b)) + '" width="20" height="20" alt="Google ' + _.M(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + _.Zk(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>');
    });
    var ym = function (a) {
        var b = a.method,
          c = a.dj,
          d = a.dir,
          e = _.U.Fi,
          f = _.U.Ne;
        a =
          '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' +
          _.M(_.dl(a.Oi)) +
          '" method="' +
          _.M(b) +
          '"><div class="form-buttons" style="text-align:' +
          (_.Qk(d, "rtl") ? "right" : "left") +
          '"><input class="activity-submit" type="button" value="' +
          _.M(e) +
          '"><input class="activity-cancel" type="button" value="' +
          _.M(f) +
          '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        b = c.length;
        for (d = 0; d < b; d++)
          a += '<input type="hidden" name="' + _.M(c[d]) + '"/>';
        return (0, _.L)(a + "</div></form></div>");
      },
      zm = function () {
        return (0, _.L)(
          '<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>'
        );
      };
    var Am = function () {};
    Xi(Am);
    Am.prototype.h = 0;
    var Hm, Im;
    _.N = function (a) {
      _.E.call(this);
      this.h = a || _.Sc();
      this.oa = Bm;
      this.X = null;
      this.tb = !1;
      this.l = null;
      this.J = void 0;
      this.N = this.F = this.C = null;
      this.Ga = !1;
    };
    _.z(_.N, _.E);
    _.N.prototype.Ma = Am.nc();
    var Bm = null,
      Cm = function (a, b) {
        switch (a) {
          case 1:
            return b ? "disable" : "enable";
          case 2:
            return b ? "highlight" : "unhighlight";
          case 4:
            return b ? "activate" : "deactivate";
          case 8:
            return b ? "select" : "unselect";
          case 16:
            return b ? "check" : "uncheck";
          case 32:
            return b ? "focus" : "blur";
          case 64:
            return b ? "open" : "close";
        }
        throw Error("na");
      };
    _.N.prototype.Xb = function () {
      return this.X || (this.X = ":" + (this.Ma.h++).toString(36));
    };
    var Dm = function (a, b) {
      if (a.C && a.C.N) {
        var c = a.C.N,
          d = a.X;
        d in c && delete c[d];
        c = a.C.N;
        if (null !== c && b in c) throw Error("x`" + b);
        c[b] = a;
      }
      a.X = b;
    };
    _.N.prototype.B = function () {
      return this.l;
    };
    var Em = function (a, b) {
        return a.l ? Si(b, a.l || a.h.V) : null;
      },
      Fm = function (a) {
        a.J || (a.J = new _.F(a));
        return a.J;
      };
    _.N.prototype.Fe = function (a) {
      if (this.C && this.C != a) throw Error("pa");
      _.N.R.Fe.call(this, a);
    };
    _.N.prototype.T = function () {
      this.l = _.sh(this.h, "DIV");
    };
    _.N.prototype.Ca = function (a) {
      _.Gm(this, a);
    };
    _.Gm = function (a, b, c) {
      if (a.tb) throw Error("qa");
      a.l || a.T();
      b ? b.insertBefore(a.l, c || null) : a.h.V.body.appendChild(a.l);
      (a.C && !a.C.tb) || a.ka();
    };
    Hm = function (a, b) {
      if (a.tb) throw Error("qa");
      if (b && a.Dg(b)) {
        a.Ga = !0;
        var c = _.Rc(b);
        (a.h && a.h.V == c) || (a.h = _.Sc(b));
        a.Aa(b);
        a.ka();
      } else throw Error("ra");
    };
    _.k = _.N.prototype;
    _.k.Dg = function () {
      return !0;
    };
    _.k.Aa = function (a) {
      this.l = a;
    };
    _.k.ka = function () {
      this.tb = !0;
      Im(this, function (a) {
        !a.tb && a.B() && a.ka();
      });
    };
    _.k.ia = function () {
      Im(this, function (a) {
        a.tb && a.ia();
      });
      this.J && _.Lf(this.J);
      this.tb = !1;
    };
    _.k.L = function () {
      this.tb && this.ia();
      this.J && (this.J.P(), delete this.J);
      Im(this, function (a) {
        a.P();
      });
      !this.Ga && this.l && _.Ij(this.l);
      this.C = this.l = this.N = this.F = null;
      _.N.R.L.call(this);
    };
    _.V = function (a, b) {
      return a.Xb() + "." + b;
    };
    Im = function (a, b) {
      a.F && a.F.forEach(b, void 0);
    };
    _.N.prototype.Zf = function (a) {
      for (var b = []; this.F && 0 != this.F.length; ) {
        var c = b,
          d = c.push,
          e = this.F ? this.F[0] || null : null,
          f = a;
        if (e) {
          var g = "string" === typeof e ? e : e.Xb();
          this.N && g
            ? ((e = this.N),
              (e = (null !== e && g in e ? e[g] : void 0) || null))
            : (e = null);
          if (g && e) {
            var h = this.N;
            g in h && delete h[g];
            _.va(this.F, e);
            f && (e.ia(), e.l && _.Ij(e.l));
            f = e;
            if (null == f) throw Error("oa");
            f.C = null;
            _.N.R.Fe.call(f, null);
          }
        }
        if (!e) throw Error("sa");
        d.call(c, e);
      }
      return b;
    };
    _.z(Ki, _.N);
    _.k = Ki.prototype;
    _.k.Ce = function (a) {
      this.s = a;
    };
    _.k.Nd = function () {
      if (!this.tb) throw Error("ta");
      if (!this.s) throw Error("ua");
    };
    _.k.dd = function () {};
    _.k.P = function () {
      this.pb() || (Ki.R.P.call(this), delete this.xe);
    };
    _.k.Oa = function () {
      return this.s;
    };
    var Lm = function () {
        _.E.call(this);
        this.l = "closure_frame" + Jm++;
        this.j = [];
        Km[this.l] = this;
      },
      Mm;
    _.z(Lm, _.E);
    var Km = {},
      Jm = 0,
      Nm = function (a, b) {
        var c = _.Sc(a);
        Vj(b, function (d, e) {
          Array.isArray(d) || (d = [d]);
          _.Qb(d, function (f) {
            f = c.T("INPUT", { type: "hidden", name: e, value: f });
            a.appendChild(f);
          });
        });
      };
    _.k = Lm.prototype;
    _.k.xa = null;
    _.k.sb = null;
    _.k.Wc = null;
    _.k.gk = 0;
    _.k.Kb = !1;
    _.k.Ke = !1;
    _.k.Jf = null;
    _.k.Gc = null;
    _.k.send = function (a, b, c, d) {
      if (this.Kb) throw Error("va");
      a = new lk(a);
      b = b ? b.toUpperCase() : "GET";
      c && ((c = _.Pc()), a.h.set("zx", c));
      Mm ||
        ((Mm = _.Fj("FORM")),
        (Mm.acceptCharset = "utf-8"),
        (c = Mm.style),
        (c.position = "absolute"),
        (c.visibility = "hidden"),
        (c.top = c.left = "-10px"),
        (c.width = c.height = "10px"),
        (c.overflow = "hidden"),
        document.body.appendChild(Mm));
      this.xa = Mm;
      "GET" == b && Nm(this.xa, a.h);
      d && Nm(this.xa, d);
      vj(this.xa, _.wc(a.toString()));
      this.xa.method = b;
      Om(this);
      Pm(this);
    };
    var Qm = function (a, b) {
      if (a.Kb) throw Error("va");
      var c = new lk(b.action);
      a.xa = b;
      vj(a.xa, c.toString());
      Om(a);
    };
    _.k = Lm.prototype;
    _.k.abort = function () {
      if (this.Kb) {
        var a = Rm(this);
        if (a)
          if (_.ld(a)) a.qb && _.sd(a.qb);
          else if ((a = _.zd(a))) {
            var b = 0,
              c;
            for (c in a.h)
              for (var d = a.h[c].concat(), e = 0; e < d.length; ++e)
                _.Ed(d[e]) && ++b;
          }
        this.Ke = this.Kb = !1;
        this.dispatchEvent("abort");
        Sm(this);
      }
    };
    _.k.L = function () {
      this.Kb && this.abort();
      Lm.R.L.call(this);
      this.sb && Tm(this);
      Pm(this);
      delete this.s;
      this.Jf = this.xa = null;
      delete Km[this.l];
    };
    _.k.se = function () {
      return this.Ke;
    };
    _.k.isActive = function () {
      return this.Kb;
    };
    _.k.Bd = function () {
      return this.Jf;
    };
    var Om = function (a) {
      a.Kb = !0;
      a.Wc = a.l + "_" + (a.gk++).toString(36);
      a.sb = _.Sc(a.xa).T("IFRAME", { name: a.Wc, id: a.Wc });
      _.C && 7 > Number(_.oc) && vj(a.sb, _.wc(_.th(_.rh('javascript:""'))));
      var b = a.sb.style;
      b.visibility = "hidden";
      b.width = b.height = "10px";
      b.display = "none";
      _.ac
        ? (b.marginTop = b.marginLeft = "-10px")
        : ((b.position = "absolute"), (b.top = b.left = "-10px"));
      _.Sc(a.xa).V.body.appendChild(a.sb);
      b = a.Wc + "_inner";
      var c = _.Kj(a.sb);
      if (document.baseURI) {
        var d = _.zj(b);
        d = _.Hc(
          '<head><base href="' +
            _.zj(document.baseURI) +
            '"></head><body><iframe id="' +
            d +
            '" name="' +
            d +
            '"></iframe>'
        );
      } else
        (d = _.zj(b)),
          (d = _.Hc('<body><iframe id="' + d + '" name="' + d + '"></iframe>'));
      c.write(_.Gc(d));
      _.D(c.getElementById(b), "load", a.h, !1, a);
      d = Ej("TEXTAREA", a.xa);
      for (var e = 0, f = d.length; e < f; e++) {
        var g = d[e].value;
        Rj(d[e]) != g && (_.dd(d[e], g), (d[e].value = g));
      }
      d = c.importNode(a.xa, !0);
      d.target = b;
      d.action = a.xa.action;
      c.body.appendChild(d);
      e = Ej("SELECT", a.xa);
      f = Ej("SELECT", d);
      g = 0;
      for (var h = e.length; g < h; g++)
        for (
          var l = Ej("OPTION", e[g]),
            m = Ej("OPTION", f[g]),
            n = 0,
            p = l.length;
          n < p;
          n++
        )
          m[n].selected = l[n].selected;
      e = Ej("INPUT", a.xa);
      f = Ej("INPUT", d);
      g = 0;
      for (h = e.length; g < h; g++)
        if ("file" == e[g].type && e[g].value != f[g].value) {
          a.xa.target = b;
          d = a.xa;
          break;
        }
      try {
        (a.A = !1), d.submit(), c.close(), _.$b && _.Uf(a.C, 250, a);
      } catch (r) {
        _.Dd(c.getElementById(b), "load", a.h, !1, a), c.close(), Um(a);
      }
    };
    Lm.prototype.h = function () {
      _.Dd(Rm(this), "load", this.h, !1, this);
      try {
        var a = this.sb ? _.Kj(Rm(this)) : null;
        this.Kb = !1;
        try {
          var b = a.body;
          this.Jf = b.textContent || b.innerText;
        } catch (e) {
          var c = 1;
        }
        var d;
        c || "function" != typeof this.s || ((d = this.s(a)) && (c = 4));
        c
          ? Um(this)
          : ((this.Ke = !0),
            this.dispatchEvent("complete"),
            this.dispatchEvent("success"),
            Sm(this));
      } catch (e) {
        Um(this);
      }
    };
    var Um = function (a) {
        a.A ||
          ((a.Ke = !1),
          (a.Kb = !1),
          a.dispatchEvent("complete"),
          a.dispatchEvent("error"),
          Sm(a),
          (a.A = !0));
      },
      Sm = function (a) {
        Tm(a);
        Pm(a);
        a.xa = null;
        a.dispatchEvent("ready");
      },
      Tm = function (a) {
        var b = a.sb;
        b &&
          ((b.onreadystatechange = null),
          (b.onload = null),
          (b.onerror = null),
          a.j.push(b));
        a.Gc && (_.t.clearTimeout(a.Gc), (a.Gc = null));
        _.$b ? (a.Gc = _.Uf(a.o, 2e3, a)) : a.o();
        a.sb = null;
        a.Wc = null;
      };
    Lm.prototype.o = function () {
      this.Gc && (_.t.clearTimeout(this.Gc), (this.Gc = null));
      for (; 0 != this.j.length; ) {
        var a = this.j.pop();
        _.Ij(a);
      }
    };
    var Pm = function (a) {
        a.xa && a.xa == Mm && _.bd(a.xa);
      },
      Rm = function (a) {
        return a.sb ? _.Kj(a.sb).getElementById(a.Wc + "_inner") : null;
      };
    Lm.prototype.C = function () {
      if (this.Kb) {
        var a = this.sb ? _.Kj(Rm(this)) : null;
        a && !_.Wb(a, "documentUri")
          ? (_.Dd(Rm(this), "load", this.h, !1, this), Um(this))
          : _.Uf(this.C, 250, this);
      }
    };
    var Xm = function (a, b, c, d, e, f) {
        if (_.cc && e) return Vm(a);
        if (e && !d) return !1;
        if (!_.$b) {
          "number" === typeof b && (b = Wm(b));
          var g = 17 == b || 18 == b || (_.cc && 91 == b);
          if (((!c || _.cc) && g) || (_.cc && 16 == b && (d || f))) return !1;
        }
        if ((_.ac || _.Yb) && d && c)
          switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
              return !1;
          }
        if (_.C && d && b == a) return !1;
        switch (a) {
          case 13:
            return _.$b ? (f || e ? !1 : !(c && d)) : !0;
          case 27:
            return !(_.ac || _.Yb || _.$b);
        }
        return _.$b && (d || e || f) ? !1 : Vm(a);
      },
      Vm = function (a) {
        if (
          (48 <= a && 57 >= a) ||
          (96 <= a && 106 >= a) ||
          (65 <= a && 90 >= a) ||
          ((_.ac || _.Yb) && 0 == a)
        )
          return !0;
        switch (a) {
          case 32:
          case 43:
          case 63:
          case 64:
          case 107:
          case 109:
          case 110:
          case 111:
          case 186:
          case 59:
          case 189:
          case 187:
          case 61:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
          case 219:
          case 220:
          case 221:
          case 163:
          case 58:
            return !0;
          case 173:
            return _.$b;
          default:
            return !1;
        }
      },
      Wm = function (a) {
        if (_.$b) a = Ym(a);
        else if (_.cc && _.ac)
          switch (a) {
            case 93:
              a = 91;
          }
        return a;
      },
      Ym = function (a) {
        switch (a) {
          case 61:
            return 187;
          case 59:
            return 186;
          case 173:
            return 189;
          case 224:
            return 91;
          case 0:
            return 224;
          default:
            return a;
        }
      };
    var Zm = function (a, b, c, d) {
      _.jd.call(this, d);
      this.type = "key";
      this.keyCode = a;
      this.charCode = b;
      this.repeat = c;
    };
    _.z(Zm, _.jd);
    var $m = function (a, b) {
      _.E.call(this);
      a && this.attach(a, b);
    };
    _.z($m, _.E);
    _.k = $m.prototype;
    _.k.Nc = null;
    _.k.te = null;
    _.k.Hf = null;
    _.k.ue = null;
    _.k.fb = -1;
    _.k.dc = -1;
    _.k.bf = !1;
    var an = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45,
      },
      bn = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45,
      },
      cn = _.cc && _.$b;
    _.k = $m.prototype;
    _.k.rj = function (a) {
      if (_.ac || _.Yb)
        if (
          (17 == this.fb && !a.ctrlKey) ||
          (18 == this.fb && !a.altKey) ||
          (_.cc && 91 == this.fb && !a.metaKey)
        )
          this.dc = this.fb = -1;
      -1 == this.fb &&
        (a.ctrlKey && 17 != a.keyCode
          ? (this.fb = 17)
          : a.altKey && 18 != a.keyCode
          ? (this.fb = 18)
          : a.metaKey && 91 != a.keyCode && (this.fb = 91));
      Xm(a.keyCode, this.fb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
        ? ((this.dc = Wm(a.keyCode)), cn && (this.bf = a.altKey))
        : this.handleEvent(a);
    };
    _.k.tj = function (a) {
      this.dc = this.fb = -1;
      this.bf = a.altKey;
    };
    _.k.handleEvent = function (a) {
      var b = a.h,
        c = b.altKey;
      if (_.C && "keypress" == a.type) {
        var d = this.dc;
        var e = 13 != d && 27 != d ? b.keyCode : 0;
      } else
        (_.ac || _.Yb) && "keypress" == a.type
          ? ((d = this.dc),
            (e =
              0 <= b.charCode && 63232 > b.charCode && Vm(d) ? b.charCode : 0))
          : ("keypress" == a.type
              ? (cn && (c = this.bf),
                b.keyCode == b.charCode
                  ? 32 > b.keyCode
                    ? ((d = b.keyCode), (e = 0))
                    : ((d = this.dc), (e = b.charCode))
                  : ((d = b.keyCode || this.dc), (e = b.charCode || 0)))
              : ((d = b.keyCode || this.dc), (e = b.charCode || 0)),
            _.cc && 63 == e && 224 == d && (d = 191));
      var f = (d = Wm(d));
      d
        ? 63232 <= d && d in an
          ? (f = an[d])
          : 25 == d && a.shiftKey && (f = 9)
        : b.keyIdentifier && b.keyIdentifier in bn && (f = bn[b.keyIdentifier]);
      if (
        !_.$b ||
        "keypress" != a.type ||
        Xm(f, this.fb, a.shiftKey, a.ctrlKey, c, a.metaKey)
      )
        (a = f == this.fb),
          (this.fb = f),
          (b = new Zm(f, e, a, b)),
          (b.altKey = c),
          this.dispatchEvent(b);
    };
    _.k.B = function () {
      return this.Nc;
    };
    _.k.attach = function (a, b) {
      this.ue && dn(this);
      this.Nc = a;
      this.te = _.D(this.Nc, "keypress", this, b);
      this.Hf = _.D(this.Nc, "keydown", this.rj, b, this);
      this.ue = _.D(this.Nc, "keyup", this.tj, b, this);
    };
    var dn = function (a) {
      a.te &&
        (_.Ed(a.te),
        _.Ed(a.Hf),
        _.Ed(a.ue),
        (a.te = null),
        (a.Hf = null),
        (a.ue = null));
      a.Nc = null;
      a.fb = -1;
      a.dc = -1;
    };
    $m.prototype.L = function () {
      $m.R.L.call(this);
      dn(this);
    };
    var en;
    var fn = function (a, b, c) {
      Array.isArray(c) && (c = c.join(" "));
      var d = "aria-" + b;
      "" === c || void 0 == c
        ? (en ||
            ((c = {}),
            (en =
              ((c.atomic = !1),
              (c.autocomplete = "none"),
              (c.dropeffect = "none"),
              (c.haspopup = !1),
              (c.live = "off"),
              (c.multiline = !1),
              (c.multiselectable = !1),
              (c.orientation = "vertical"),
              (c.readonly = !1),
              (c.relevant = "additions text"),
              (c.required = !1),
              (c.sort = "none"),
              (c.busy = !1),
              (c.disabled = !1),
              (c.hidden = !1),
              (c.invalid = "false"),
              c))),
          (c = en),
          b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
        : a.setAttribute(d, c);
    };
    var gn, hn, jn, kn, mn, on;
    gn = function (a) {
      return "string" == typeof a.className
        ? a.className
        : (a.getAttribute && a.getAttribute("class")) || "";
    };
    hn = function (a) {
      return a.classList ? a.classList : gn(a).match(/\S+/g) || [];
    };
    jn = function (a, b) {
      "string" == typeof a.className
        ? (a.className = b)
        : a.setAttribute && a.setAttribute("class", b);
    };
    kn = function (a, b) {
      return a.classList ? a.classList.contains(b) : _.ta(hn(a), b);
    };
    _.ln = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!kn(a, b)) {
        var c = gn(a);
        jn(a, c + (0 < c.length ? " " + b : b));
      }
    };
    mn = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          _.ln(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(hn(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = "";
        for (var d in c) b += 0 < b.length ? " " + d : d;
        jn(a, b);
      }
    };
    _.nn = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : kn(a, b) &&
          jn(
            a,
            Array.prototype.filter
              .call(hn(a), function (c) {
                return c != b;
              })
              .join(" ")
          );
    };
    on = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            _.nn(a, c);
          })
        : jn(
            a,
            Array.prototype.filter
              .call(hn(a), function (c) {
                return !_.ta(b, c);
              })
              .join(" ")
          );
    };
    var pn = function () {},
      qn;
    Xi(pn);
    var rn = {
      button: "pressed",
      checkbox: "checked",
      menuitem: "selected",
      menuitemcheckbox: "checked",
      menuitemradio: "checked",
      radio: "checked",
      tab: "selected",
      treeitem: "selected",
    };
    _.k = pn.prototype;
    _.k.ie = function () {};
    _.k.T = function (a) {
      return a.h.T("DIV", sn(this, a).join(" "), a.Ba());
    };
    _.k.Pe = function () {
      return !0;
    };
    _.k.yc = function (a, b) {
      b.id && Dm(a, b.id);
      b && b.firstChild
        ? tn(a, b.firstChild.nextSibling ? _.wa(b.childNodes) : b.firstChild)
        : (a.zc = null);
      var c = 0,
        d = this.mc(),
        e = this.mc(),
        f = !1,
        g = !1,
        h = _.wa(hn(b));
      h.forEach(function (l) {
        f || l != d
          ? g || l != e
            ? (c |= un(this, l))
            : (g = !0)
          : ((f = !0), e == d && (g = !0));
        1 == un(this, l) && b.hasAttribute("tabindex") && Nj(b) && Oj(b, !1);
      }, this);
      a.za = c;
      f || (h.push(d), e == d && (g = !0));
      g || h.push(e);
      (a = a.sf) && h.push.apply(h, a);
      (f && g && !a) || jn(b, h.join(" "));
      return b;
    };
    _.k.Ch = function (a) {
      null == a.oa && (a.oa = Hk(a.tb ? a.l : a.h.V.body));
      a.oa && this.Re(a.B(), !0);
      a.isEnabled() && this.hd(a, a.isVisible());
    };
    var vn = function (a, b) {
      if ((a = a.ie())) {
        var c = b.getAttribute("role") || null;
        a != c && (a ? b.setAttribute("role", a) : b.removeAttribute("role"));
      }
    };
    _.k = pn.prototype;
    _.k.Od = function (a, b) {
      var c = !b;
      b = _.C ? a.getElementsByTagName("*") : null;
      if (_.Lh) {
        if (((c = c ? "none" : ""), a.style && (a.style[_.Lh] = c), b)) {
          a = 0;
          for (var d; (d = b[a]); a++) d.style && (d.style[_.Lh] = c);
        }
      } else if (
        _.C &&
        ((c = c ? "on" : ""), a.setAttribute("unselectable", c), b)
      )
        for (a = 0; (d = b[a]); a++) d.setAttribute("unselectable", c);
    };
    _.k.Re = function (a, b) {
      var c = this.mc() + "-SIsrTd";
      (a = a.B ? a.B() : a) && (b ? mn : on)(a, [c]);
    };
    _.k.Qe = function (a) {
      var b;
      return a.Ya & 32 && (b = a.B())
        ? b.hasAttribute("tabindex") && Nj(b)
        : !1;
    };
    _.k.hd = function (a, b) {
      var c;
      if (a.Ya & 32 && (c = a.B())) {
        if (!b && a.za & 32) {
          try {
            c.blur();
          } catch (d) {}
          a.za & 32 && a.nh(null);
        }
        (c.hasAttribute("tabindex") && Nj(c)) != b && Oj(c, b);
      }
    };
    _.k.Y = function (a, b) {
      _.S(a, b);
      a && fn(a, "hidden", !b);
    };
    _.k.ld = function (a, b, c) {
      var d = a.B();
      if (d) {
        var e = wn(this, b);
        e && (a = a.B ? a.B() : a) && (c ? mn : on)(a, [e]);
        this.Hb(d, b, c);
      }
    };
    _.k.Hb = function (a, b, c) {
      qn ||
        (qn = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
      b = qn[b];
      var d = a.getAttribute("role") || null;
      d && ((d = rn[d] || b), (b = "checked" == b || "selected" == b ? d : b));
      b && fn(a, b, c);
    };
    _.k.Eg = function (a, b) {
      if (a && (_.bd(a), b))
        if ("string" === typeof b) _.dd(a, b);
        else {
          var c = function (d) {
            if (d) {
              var e = _.Rc(a);
              a.appendChild("string" === typeof d ? e.createTextNode(d) : d);
            }
          };
          Array.isArray(b)
            ? b.forEach(c)
            : !_.da(b) || "nodeType" in b
            ? c(b)
            : _.wa(b).forEach(c);
        }
    };
    _.k.mc = function () {
      return "VIpgJd-bMcfAe";
    };
    var sn = function (a, b) {
        var c = a.mc(),
          d = [c],
          e = a.mc();
        e != c && d.push(e);
        c = b.za;
        for (e = []; c; ) {
          var f = c & -c;
          e.push(wn(a, f));
          c &= ~f;
        }
        d.push.apply(d, e);
        (a = b.sf) && d.push.apply(d, a);
        return d;
      },
      wn = function (a, b) {
        a.h || xn(a);
        return a.h[b];
      },
      un = function (a, b) {
        if (!a.j) {
          a.h || xn(a);
          var c = a.h,
            d = {},
            e;
          for (e in c) d[c[e]] = e;
          a.j = d;
        }
        a = parseInt(a.j[b], 10);
        return isNaN(a) ? 0 : a;
      },
      xn = function (a) {
        var b = a.mc();
        a.h = {
          1: b + "-OWB6Me",
          2: b + "-ZmdkE",
          4: b + "-auswjd",
          8: b + "-gk6SMd",
          16: b + "-barxie",
          32: b + "-XpnDCe",
          64: b + "-FNFY6c",
        };
      };
    var yn = function () {};
    _.z(yn, pn);
    Xi(yn);
    _.k = yn.prototype;
    _.k.ie = function () {
      return "button";
    };
    _.k.Hb = function (a, b, c) {
      switch (b) {
        case 8:
        case 16:
          fn(a, "pressed", c);
          break;
        default:
        case 64:
        case 1:
          yn.R.Hb.call(this, a, b, c);
      }
    };
    _.k.T = function (a) {
      var b = yn.R.T.call(this, a);
      this.mg(b, a.Oa());
      var c = a.Fa();
      c && this.ob(b, c);
      a.Ya & 16 && this.Hb(b, 16, !!(a.za & 16));
      return b;
    };
    _.k.yc = function (a, b) {
      b = yn.R.yc.call(this, a, b);
      var c = this.Fa(b);
      a.Za = c;
      a.U = this.Oa(b);
      a.Ya & 16 && this.Hb(b, 16, !!(a.za & 16));
      return b;
    };
    _.k.Fa = function () {};
    _.k.ob = function () {};
    _.k.Oa = function (a) {
      return a.title;
    };
    _.k.mg = function (a, b) {
      a && (b ? (a.title = b) : a.removeAttribute("title"));
    };
    _.k.mc = function () {
      return "VIpgJd-LgbsSe";
    };
    var zn = {
      Xe: "mousedown",
      Ye: "mouseup",
      Ig: "mousecancel",
      xl: "mousemove",
      zl: "mouseover",
      yl: "mouseout",
      vl: "mouseenter",
      wl: "mouseleave",
    };
    var An = function (a, b) {
        if (!a) throw Error("wa`" + a);
        if ("function" !== typeof b) throw Error("xa`" + b);
      },
      Bn = {};
    var W = function (a, b, c) {
      _.N.call(this, c);
      if (!b) {
        for (b = this.constructor; b; ) {
          var d = _.za(b);
          if ((d = Bn[d])) break;
          b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
        }
        b = d ? ("function" === typeof d.nc ? d.nc() : new d()) : null;
      }
      this.j = b;
      this.zc = void 0 !== a ? a : null;
    };
    _.z(W, _.N);
    _.k = W.prototype;
    _.k.zc = null;
    _.k.za = 0;
    _.k.Ya = 39;
    _.k.ef = 255;
    _.k.Ib = !0;
    _.k.sf = null;
    _.k.Bf = !0;
    _.k.Ud = !1;
    var Dn = function (a) {
      a.tb && 0 != a.Bf && Cn(a, !1);
      a.Bf = !1;
    };
    W.prototype.T = function () {
      var a = this.j.T(this);
      this.l = a;
      vn(this.j, a);
      this.Ud || this.j.Od(a, !1);
      this.isVisible() || this.j.Y(a, !1);
    };
    W.prototype.Dg = function (a) {
      return this.j.Pe(a);
    };
    W.prototype.Aa = function (a) {
      this.l = a = this.j.yc(this, a);
      vn(this.j, a);
      this.Ud || this.j.Od(a, !1);
      this.Ib = "none" != a.style.display;
    };
    W.prototype.ka = function () {
      W.R.ka.call(this);
      var a = this.j,
        b = this.l;
      this.isVisible() || fn(b, "hidden", !this.isVisible());
      this.isEnabled() || a.Hb(b, 1, !this.isEnabled());
      this.Ya & 8 && a.Hb(b, 8, !!(this.za & 8));
      this.Ya & 16 && a.Hb(b, 16, !!(this.za & 16));
      this.Ya & 64 && a.Hb(b, 64, !!(this.za & 64));
      this.j.Ch(this);
      this.Ya & -2 &&
        (this.Bf && Cn(this, !0), this.Ya & 32 && (a = this.B())) &&
        ((b = this.A || (this.A = new $m())),
        b.attach(a),
        Fm(this)
          .I(b, "key", this.sj)
          .I(a, "focus", this.ni)
          .I(a, "blur", this.nh));
    };
    var Cn = function (a, b) {
      var c = Fm(a),
        d = a.B();
      b
        ? (c
            .I(d, zn.Xe, a.Af)
            .I(d, [zn.Ye, zn.Ig], a.Cf)
            .I(d, "mouseover", a.ma)
            .I(d, "mouseout", a.ta),
          a.O != _.yb && c.I(d, "contextmenu", a.O),
          _.C && !a.G && ((a.G = new En(a)), _.Pi(a, _.tb(_.ca, a.G))))
        : (c
            .Gb(d, zn.Xe, a.Af)
            .Gb(d, [zn.Ye, zn.Ig], a.Cf)
            .Gb(d, "mouseover", a.ma)
            .Gb(d, "mouseout", a.ta),
          a.O != _.yb && c.Gb(d, "contextmenu", a.O),
          _.C && (_.ca(a.G), (a.G = null)));
    };
    W.prototype.ia = function () {
      W.R.ia.call(this);
      this.A && dn(this.A);
      this.isVisible() && this.isEnabled() && this.j.hd(this, !1);
    };
    W.prototype.L = function () {
      W.R.L.call(this);
      this.A && (this.A.P(), delete this.A);
      delete this.j;
      this.G = this.sf = this.zc = null;
    };
    W.prototype.Ba = function () {
      return this.zc;
    };
    W.prototype.s = function (a) {
      this.j.Eg(this.B(), a);
      this.zc = a;
    };
    var tn = function (a, b) {
      a.zc = b;
    };
    _.k = W.prototype;
    _.k.ai = function (a) {
      this.s(a);
    };
    _.k.isVisible = function () {
      return this.Ib;
    };
    _.k.Y = function (a, b) {
      if (b || (this.Ib != a && this.dispatchEvent(a ? "show" : "hide")))
        (b = this.B()) && this.j.Y(b, a),
          this.isEnabled() && this.j.hd(this, a),
          (this.Ib = a);
    };
    _.k.isEnabled = function () {
      return !(this.za & 1);
    };
    _.k.mb = function (a) {
      var b = this.C;
      (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
        !Fn(this, 1, !a) ||
        (a || (Gn(this, !1), Hn(this, !1)),
        this.isVisible() && this.j.hd(this, a),
        In(this, 1, !a, !0));
    };
    var Hn = function (a, b) {
      Fn(a, 2, b) && In(a, 2, b);
    };
    W.prototype.isActive = function () {
      return !!(this.za & 4);
    };
    var Gn = function (a, b) {
        Fn(a, 4, b) && In(a, 4, b);
      },
      In = function (a, b, c, d) {
        d || 1 != b
          ? a.Ya & b &&
            c != !!(a.za & b) &&
            (a.j.ld(a, b, c), (a.za = c ? a.za | b : a.za & ~b))
          : a.mb(!c);
      },
      Jn = function (a) {
        if (a.tb && a.za & 32) throw Error("qa");
        a.za & 32 && In(a, 32, !1);
        a.Ya &= -33;
      },
      Kn = function (a, b) {
        return !!(a.ef & b) && !!(a.Ya & b);
      },
      Ln = function (a) {
        a.ef &= -256;
      },
      Fn = function (a, b, c) {
        return (
          !!(a.Ya & b) &&
          !!(a.za & b) != c &&
          (!(0 & b) || a.dispatchEvent(Cm(b, c))) &&
          !a.pb()
        );
      };
    W.prototype.ma = function (a) {
      !Mn(a, this.B()) &&
        this.dispatchEvent("enter") &&
        this.isEnabled() &&
        Kn(this, 2) &&
        Hn(this, !0);
    };
    W.prototype.ta = function (a) {
      !Mn(a, this.B()) &&
        this.dispatchEvent("leave") &&
        (Kn(this, 4) && Gn(this, !1), Kn(this, 2) && Hn(this, !1));
    };
    W.prototype.O = _.yb;
    var Mn = function (a, b) {
      return !!a.relatedTarget && _.cd(b, a.relatedTarget);
    };
    _.k = W.prototype;
    _.k.Af = function (a) {
      this.isEnabled() &&
        (Kn(this, 2) && Hn(this, !0),
        0 != a.h.button ||
          (_.cc && a.ctrlKey) ||
          (Kn(this, 4) && Gn(this, !0),
          this.j && this.j.Qe(this) && this.B().focus()));
      this.Ud || 0 != a.h.button || (_.cc && a.ctrlKey) || a.preventDefault();
    };
    _.k.Cf = function (a) {
      this.isEnabled() &&
        (Kn(this, 2) && Hn(this, !0),
        this.isActive() && this.Ee(a) && Kn(this, 4) && Gn(this, !1));
    };
    _.k.Ee = function (a) {
      if (Kn(this, 16)) {
        var b = !(this.za & 16);
        Fn(this, 16, b) && In(this, 16, b);
      }
      Kn(this, 8) && Fn(this, 8, !0) && In(this, 8, !0);
      Kn(this, 64) &&
        ((b = !(this.za & 64)), Fn(this, 64, b) && In(this, 64, b));
      b = new _.gd("action", this);
      a &&
        ((b.altKey = a.altKey),
        (b.ctrlKey = a.ctrlKey),
        (b.metaKey = a.metaKey),
        (b.shiftKey = a.shiftKey),
        (b.l = a.l));
      return this.dispatchEvent(b);
    };
    _.k.ni = function () {
      Kn(this, 32) && Fn(this, 32, !0) && In(this, 32, !0);
    };
    _.k.nh = function () {
      Kn(this, 4) && Gn(this, !1);
      Kn(this, 32) && Fn(this, 32, !1) && In(this, 32, !1);
    };
    _.k.sj = function (a) {
      return this.isVisible() && this.isEnabled() && this.zf(a)
        ? (a.preventDefault(), a.stopPropagation(), !0)
        : !1;
    };
    _.k.zf = function (a) {
      return 13 == a.keyCode && this.Ee(a);
    };
    if ("function" !== typeof W) throw Error("ya`" + W);
    if ("function" !== typeof pn) throw Error("za`" + pn);
    var Nn = _.za(W);
    Bn[Nn] = pn;
    An("VIpgJd-bMcfAe", function () {
      return new W(null);
    });
    var En = function (a) {
      _.A.call(this);
      this.j = a;
      this.h = !1;
      this.l = new _.F(this);
      _.Pi(this, _.tb(_.ca, this.l));
      a = this.j.l;
      this.l.I(a, zn.Xe, this.s).I(a, zn.Ye, this.A).I(a, "click", this.o);
    };
    _.z(En, _.A);
    var On = !_.C || 9 <= Number(_.rc);
    En.prototype.s = function () {
      this.h = !1;
    };
    En.prototype.A = function () {
      this.h = !0;
    };
    var Pn = function (a, b) {
      if (!On) return (a.button = 0), (a.type = b), a;
      var c = document.createEvent("MouseEvents");
      c.initMouseEvent(
        b,
        a.bubbles,
        a.cancelable,
        a.view || null,
        a.detail,
        a.screenX,
        a.screenY,
        a.clientX,
        a.clientY,
        a.ctrlKey,
        a.altKey,
        a.shiftKey,
        a.metaKey,
        0,
        a.relatedTarget || null
      );
      return c;
    };
    En.prototype.o = function (a) {
      if (this.h) this.h = !1;
      else {
        var b = a.h,
          c = b.button,
          d = b.type,
          e = Pn(b, "mousedown");
        this.j.Af(new _.jd(e, a.currentTarget));
        e = Pn(b, "mouseup");
        this.j.Cf(new _.jd(e, a.currentTarget));
        On || ((b.button = c), (b.type = d));
      }
    };
    En.prototype.L = function () {
      this.j = null;
      En.R.L.call(this);
    };
    var Qn = function () {};
    _.z(Qn, yn);
    Xi(Qn);
    _.k = Qn.prototype;
    _.k.ie = function () {};
    _.k.T = function (a) {
      Dn(a);
      Ln(a);
      Jn(a);
      var b = a.h,
        c = b.T,
        d = {
          class: sn(this, a).join(" "),
          disabled: !a.isEnabled(),
          title: a.Oa() || "",
          value: a.Fa() || "",
        };
      a = (a = a.Ba())
        ? ("string" === typeof a
            ? a
            : Array.isArray(a)
            ? a.map(Rj).join("")
            : Qj(a)
          )
            .replace(/[\t\r\n ]+/g, " ")
            .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        : "";
      return c.call(b, "BUTTON", d, a || "");
    };
    _.k.Pe = function (a) {
      return (
        "BUTTON" == a.tagName ||
        ("INPUT" == a.tagName &&
          ("button" == a.type || "submit" == a.type || "reset" == a.type))
      );
    };
    _.k.yc = function (a, b) {
      Dn(a);
      Ln(a);
      Jn(a);
      if (b.disabled) {
        var c = wn(this, 1);
        _.ln(b, c);
      }
      return Qn.R.yc.call(this, a, b);
    };
    _.k.Ch = function (a) {
      Fm(a).I(a.B(), "click", a.Ee);
    };
    _.k.Od = function () {};
    _.k.Re = function () {};
    _.k.Qe = function (a) {
      return a.isEnabled();
    };
    _.k.hd = function () {};
    _.k.ld = function (a, b, c) {
      Qn.R.ld.call(this, a, b, c);
      (a = a.B()) && 1 == b && (a.disabled = c);
    };
    _.k.Fa = function (a) {
      return a.value;
    };
    _.k.ob = function (a, b) {
      a && (a.value = b);
    };
    _.k.Hb = function () {};
    var Rn = function (a, b, c) {
      W.call(this, a, b || Qn.nc(), c);
    };
    _.z(Rn, W);
    _.k = Rn.prototype;
    _.k.Fa = function () {
      return this.Za;
    };
    _.k.ob = function (a) {
      this.Za = a;
      this.j.ob(this.B(), a);
    };
    _.k.Oa = function () {
      return this.U;
    };
    _.k.mg = function (a) {
      this.U = a;
      this.j.mg(this.B(), a);
    };
    _.k.L = function () {
      Rn.R.L.call(this);
      delete this.Za;
      delete this.U;
    };
    _.k.ka = function () {
      Rn.R.ka.call(this);
      if (this.Ya & 32) {
        var a = this.B();
        a && Fm(this).I(a, "keyup", this.zf);
      }
    };
    _.k.zf = function (a) {
      return (13 == a.keyCode && "key" == a.type) ||
        (32 == a.keyCode && "keyup" == a.type)
        ? this.Ee(a)
        : 32 == a.keyCode;
    };
    An("VIpgJd-LgbsSe", function () {
      return new Rn(null);
    });
    var Sn = function (a, b) {
      _.N.call(this);
      this.K = a || "";
      this.o = null;
      this.G = [];
      this.j = null;
      this.O = b || "GET";
      this.s = this.A = null;
    };
    _.x(Sn, _.N);
    Sn.prototype.T = function () {
      var a = {
        Oi: this.K,
        method: this.O,
        dj: this.G,
        dir: _.nf.test(_.T) ? "rtl" : "ltr",
      };
      this.Aa(_.Bi(ym, a));
    };
    Sn.prototype.Aa = function (a) {
      this.l = a;
      this.j = Em(this, "activity-form");
      a = Em(this, "activity-submit");
      this.s = new Rn("");
      Hm(this.s, a);
      a = Em(this, "activity-cancel");
      this.o = new Rn("");
      Hm(this.o, a);
    };
    Sn.prototype.ka = function () {
      var a = Fm(this);
      a.I(this.s, "action", (0, _.y)(this.U, this));
      a.I(this.o, "action", this.dispatchEvent.bind(this, "cancelled"));
    };
    Sn.prototype.U = function () {
      var a = !0;
      this.A && (a = this.A());
      a &&
        ((a = new Lm()),
        _.D(a, "success", function () {
          this.dispatchEvent("successful");
        }),
        _.D(a, "error", function () {
          this.dispatchEvent("failed");
        }),
        Qm(a, this.j));
      this.dispatchEvent("submitted");
    };
    var Tn = function (a, b) {
        for (var c in b) a.j[c] && (a.j[c].value = b[c]);
      },
      Un = function (a, b) {
        return a.j[b] ? a.j[b].value : "";
      };
    Sn.prototype.L = function () {
      this.s = this.j = this.o = null;
      _.N.prototype.L.call(this);
    };
    var Vn = function (a, b) {
      a.A = b;
    };
    var Wn = function () {};
    _.z(Wn, pn);
    Xi(Wn);
    _.k = Wn.prototype;
    _.k.ie = function () {};
    _.k.yc = function (a, b) {
      Dn(a);
      Ln(a);
      Jn(a);
      Wn.R.yc.call(this, a, b);
      a.s(b.value);
      return b;
    };
    _.k.T = function (a) {
      Dn(a);
      Ln(a);
      Jn(a);
      return a.h.T(
        "TEXTAREA",
        { class: sn(this, a).join(" "), disabled: !a.isEnabled() },
        a.Ba() || ""
      );
    };
    _.k.Pe = function (a) {
      return "TEXTAREA" == a.tagName;
    };
    _.k.Re = function () {};
    _.k.Qe = function (a) {
      return a.isEnabled();
    };
    _.k.hd = function () {};
    _.k.ld = function (a, b, c) {
      Wn.R.ld.call(this, a, b, c);
      (a = a.B()) && 1 == b && (a.disabled = c);
    };
    _.k.Hb = function () {};
    _.k.Eg = function (a, b) {
      a && (a.value = b);
    };
    _.k.mc = function () {
      return "VIpgJd-B7I4Od";
    };
    var Xn = function (a, b, c) {
      W.call(this, a, b || Wn.nc(), c);
      Dn(this);
      this.Ud = !0;
      (b = this.B()) && this.j.Od(b, !0);
      this.Uc = "" != a;
      a || (this.zc = "");
    };
    _.z(Xn, W);
    var Yn = !(_.C && !(11 <= Number(_.rc)));
    _.k = Xn.prototype;
    _.k.Xc = !1;
    _.k.pe = !1;
    _.k.Uc = !1;
    _.k.bc = 0;
    _.k.Jh = 0;
    _.k.Sf = 0;
    _.k.wh = !1;
    _.k.Ae = !1;
    _.k.gg = !1;
    _.k.fg = !1;
    _.k.fd = "";
    var Zn = function (a) {
        return a.o.top + a.o.bottom + a.Z.top + a.Z.bottom;
      },
      $n = function (a) {
        var b = a.Sf,
          c = a.B();
        b && c && a.Ae && (b -= Zn(a));
        return b;
      },
      bo = function (a) {
        a.Sf = 50;
        ao(a);
      },
      co = function (a) {
        a.Jh = 50;
        ao(a);
      };
    Xn.prototype.ob = function (a) {
      this.s(String(a));
    };
    Xn.prototype.Fa = function () {
      return this.B().value != this.fd || eo(this) || this.Uc
        ? this.B().value
        : "";
    };
    Xn.prototype.s = function (a) {
      Xn.R.s.call(this, a);
      this.Uc = "" != a;
      ao(this);
    };
    Xn.prototype.mb = function (a) {
      Xn.R.mb.call(this, a);
      this.B().disabled = !a;
    };
    var ao = function (a) {
        a.B() && a.K();
      },
      eo = function (a) {
        return "placeholder" in a.B();
      },
      fo = function (a) {
        a.fd &&
          (eo(a)
            ? (a.B().placeholder = a.fd)
            : !a.B() ||
              a.Uc ||
              a.pe ||
              (_.ln(a.B(), "B7I4Od-LwH6nd-YPqjbf"), (a.B().value = a.fd)));
      };
    Xn.prototype.ka = function () {
      Xn.R.ka.call(this);
      var a = this.B();
      _.K(a, {
        overflowY: "hidden",
        overflowX: "auto",
        boxSizing: "border-box",
        MsBoxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
      });
      this.o = Lk(a);
      this.Z = Ok(a);
      Fm(this)
        .I(a, "scroll", this.K)
        .I(a, "focus", this.K)
        .I(a, "keyup", this.K)
        .I(a, "mouseup", this.Bb)
        .I(a, "blur", this.La);
      fo(this);
      ao(this);
    };
    var go = function (a) {
        if (!a.wh) {
          var b = a.B().cloneNode(!1);
          _.K(b, {
            position: "absolute",
            height: "auto",
            top: "-9999px",
            margin: "0",
            padding: "1px",
            border: "1px solid #000",
            overflow: "hidden",
          });
          a.h.V.body.appendChild(b);
          var c = b.scrollHeight;
          b.style.padding = "10px";
          var d = b.scrollHeight;
          a.gg = d > c;
          b.style.borderWidth = "10px";
          a.fg = b.scrollHeight > d;
          b.style.height = "100px";
          100 != b.offsetHeight && (a.Ae = !0);
          _.Ij(b);
          a.wh = !0;
        }
        b = a.B();
        isNaN(a.o.top) && ((a.o = Lk(b)), (a.Z = Ok(b)));
        c = a.B().scrollHeight;
        var e = a.B();
        d = e.offsetHeight - e.clientHeight;
        if (!a.gg) {
          var f = a.o;
          d -= f.top + f.bottom;
        }
        a.fg || ((e = Ok(e)), (d -= e.top + e.bottom));
        c += 0 < d ? d : 0;
        a.Ae
          ? (c -= Zn(a))
          : (a.gg || ((d = a.o), (c += d.top + d.bottom)),
            a.fg || ((a = Ok(b)), (c += a.top + a.bottom)));
        return c;
      },
      ho = function (a, b) {
        a.bc != b && ((a.bc = b), (a.B().style.height = b + "px"));
      },
      io = function (a) {
        var b = a.B();
        b.style.height = "auto";
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.bc = 0;
      };
    Xn.prototype.La = function () {
      eo(this) ||
        ((this.pe = !1), "" == this.B().value && ((this.Uc = !1), fo(this)));
    };
    Xn.prototype.K = function (a) {
      if (!this.Xc) {
        var b = this.B();
        !eo(this) &&
          a &&
          "focus" == a.type &&
          (b.value == this.fd &&
            this.fd &&
            !this.pe &&
            (_.nn(b, "B7I4Od-LwH6nd-YPqjbf"), (b.value = "")),
          (this.pe = !0),
          (this.Uc = "" != b.value));
        var c = !1;
        this.Xc = !0;
        a = this.bc;
        if (b.scrollHeight) {
          var d = !1,
            e = !1,
            f = go(this),
            g = b.offsetHeight,
            h = $n(this);
          var l = this.Jh;
          var m = this.B();
          l && m && this.Ae && (l -= Zn(this));
          h && f < h
            ? (ho(this, h), (d = !0))
            : l && f > l
            ? (ho(this, l), (b.style.overflowY = ""), (e = !0))
            : g != f
            ? ho(this, f)
            : this.bc || (this.bc = f);
          d || e || !Yn || (c = !0);
        } else io(this);
        this.Xc = !1;
        c &&
          ((b = this.B()),
          this.Xc ||
            ((this.Xc = !0),
            (e = b.scrollHeight)
              ? ((f = go(this)),
                (c = $n(this)),
                (c && f <= c) ||
                  ((d = this.o),
                  (b.style.paddingTop = d.top + 1 + "px"),
                  go(this) == f &&
                    ((b.style.paddingTop = d.top + e + "px"),
                    (b.scrollTop = 0),
                    (e = go(this) - e),
                    e >= c ? ho(this, e) : ho(this, c)),
                  (b.style.paddingTop = d.top + "px")))
              : io(this),
            (this.Xc = !1)));
        a != this.bc && this.dispatchEvent("resize");
      }
    };
    Xn.prototype.Bb = function () {
      var a = this.B(),
        b = a.offsetHeight;
      a.filters &&
        a.filters.length &&
        (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) &&
        (b -= a.offX);
      b != this.bc && (this.bc = this.Sf = b);
    };
    var jo = function (a, b) {
      Ki.call(this, a);
      this.G = !1;
      this.A = b || {};
      this.o = null;
    };
    _.x(jo, Ki);
    _.k = jo.prototype;
    _.k.Ce = function (a) {
      Ki.prototype.Ce.call(this, a);
      Fm(this).I(this.o.B(), "keydown", (0, _.y)(this.Oa().Id, this.Oa(), !1));
      this.G = this.Oa().pd;
      this.Nd();
    };
    _.k.Nd = function () {
      Ki.prototype.Nd.call(this);
      this.o.s(this.Oa().U);
      var a = this.Oa().kb(),
        b = this.Oa().na();
      a &&
        b &&
        (Tn(this.j, {
          gtrans: this.Oa().U,
          text: this.Oa().Pd(),
          hl: _.T,
          langpair: a + "|" + b,
        }),
        Tn(this.j, this.A));
      this.dispatchEvent("ready");
      this.o.B().focus();
    };
    _.k.dd = function () {
      this.Oa().Id(this.G);
    };
    _.k.T = function () {
      this.Aa(_.Bi(zm));
    };
    _.k.Aa = function (a) {
      this.l = a;
      a = Em(this, "contribute-original-text");
      this.o = new Xn("");
      Hm(this.o, a);
      co(this.o);
      bo(this.o);
      a = Em(this, "activity-form-container");
      this.j = new Sn(_.yl, "POST");
      this.j.G = ki(this.A);
      Vn(
        this.j,
        (0, _.y)(function () {
          Tn(this.j, { utrans: (0, _.Ub)(this.o.Fa()) });
          return Un(this.j, "utrans") != Un(this.j, "gtrans");
        }, this)
      );
      this.j.Ca(a);
    };
    _.k.ka = function () {
      Ki.prototype.ka.call(this);
      var a = Fm(this);
      a.I(
        this.j,
        "cancelled",
        (0, _.y)(function () {
          this.dispatchEvent("cancelled");
        }, this)
      );
      a.I(
        this.j,
        "submitted",
        (0, _.y)(function () {
          var b = this.o.Fa();
          this.Oa().U = b && (0, _.Ub)(b);
          this.dispatchEvent("submitted");
          b = _.U.Gi;
          _.dd(this.Oa().Sc().B(), b);
        }, this)
      );
    };
    _.k.L = function () {
      this.o && this.o.P();
      this.o = null;
      this.j && this.j.P();
      this.j = null;
      Ki.prototype.L.call(this);
    };
    var ko = function (a) {
      _.E.call(this);
      this.ya = a;
      this.l = {};
      this.H = new _.F(this);
      this.j = null;
    };
    _.x(ko, _.E);
    ko.prototype.attach = function () {};
    ko.prototype.Fg = function () {};
    ko.prototype.L = function () {
      this.H.P();
      this.H = null;
    };
    var lo = function (a, b, c) {
      if ((b = a.ya.j[b])) {
        c = c || "undefined" == typeof c;
        for (var d = 0; d < b.Xa.length; ++d) b.Xa[d] && a.zh(b.Xa[d], c);
      }
    };
    ko.prototype.zh = function (a, b) {
      _.K(a, "backgroundColor", b ? "#E6ECF9" : "");
      _.K(a, "color", b ? "#000" : "");
    };
    var mo = function (a, b, c) {
      _.A.call(this);
      this.j = a;
      this.o = b || 0;
      this.l = c;
      this.h = (0, _.y)(this.oi, this);
    };
    _.z(mo, _.A);
    _.k = mo.prototype;
    _.k.md = 0;
    _.k.L = function () {
      mo.R.L.call(this);
      this.stop();
      delete this.j;
      delete this.l;
    };
    _.k.start = function (a) {
      this.stop();
      this.md = _.Uf(this.h, void 0 !== a ? a : this.o);
    };
    _.k.stop = function () {
      this.isActive() && _.t.clearTimeout(this.md);
      this.md = 0;
    };
    _.k.isActive = function () {
      return 0 != this.md;
    };
    _.k.oi = function () {
      this.md = 0;
      this.j && this.j.call(this.l);
    };
    var li = {},
      no = null,
      oo = function (a) {
        a = _.za(a);
        delete li[a];
        mi() && no && no.stop();
      },
      qo = function () {
        no ||
          (no = new mo(function () {
            po();
          }, 20));
        var a = no;
        a.isActive() || a.start();
      },
      po = function () {
        var a = _.ub();
        _.tc(li, function (b) {
          ro(b, a);
        });
        mi() || qo();
      };
    var so = function () {
      _.E.call(this);
      this.h = 0;
      this.endTime = this.startTime = null;
    };
    _.z(so, _.E);
    so.prototype.l = function () {
      this.j("begin");
    };
    so.prototype.yb = function () {
      this.j("end");
    };
    so.prototype.dd = function () {
      this.j("stop");
    };
    so.prototype.j = function (a) {
      this.dispatchEvent(a);
    };
    var to = function (a, b, c, d) {
      so.call(this);
      if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Aa");
      if (a.length != b.length) throw Error("Ba");
      this.o = a;
      this.J = b;
      this.duration = c;
      this.F = d;
      this.coords = [];
      this.progress = 0;
    };
    _.z(to, so);
    to.prototype.play = function (a) {
      if (a || 0 == this.h) (this.progress = 0), (this.coords = this.o);
      else if (1 == this.h) return !1;
      oo(this);
      this.startTime = a = _.ub();
      -1 == this.h && (this.startTime -= this.duration * this.progress);
      this.endTime = this.startTime + this.duration;
      this.progress || this.l();
      this.j("play");
      -1 == this.h && this.j("resume");
      this.h = 1;
      var b = _.za(this);
      b in li || (li[b] = this);
      qo();
      ro(this, a);
      return !0;
    };
    to.prototype.stop = function (a) {
      oo(this);
      this.h = 0;
      a && (this.progress = 1);
      uo(this, this.progress);
      this.dd();
      this.yb();
    };
    to.prototype.kg = function (a) {
      this.progress = a;
      1 == this.h &&
        ((this.startTime = _.ub() - this.duration * this.progress),
        (this.endTime = this.startTime + this.duration));
    };
    to.prototype.L = function () {
      0 == this.h || this.stop(!1);
      this.j("destroy");
      to.R.L.call(this);
    };
    var ro = function (a, b) {
        b < a.startTime &&
          ((a.endTime = b + a.endTime - a.startTime), (a.startTime = b));
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        uo(a, a.progress);
        1 == a.progress
          ? ((a.h = 0), oo(a), a.j("finish"), a.yb())
          : 1 == a.h && a.C();
      },
      uo = function (a, b) {
        "function" === typeof a.F && (b = a.F(b));
        a.coords = Array(a.o.length);
        for (var c = 0; c < a.o.length; c++)
          a.coords[c] = (a.J[c] - a.o[c]) * b + a.o[c];
      };
    to.prototype.C = function () {
      this.j("animate");
    };
    to.prototype.j = function (a) {
      this.dispatchEvent(new vo(a, this));
    };
    var vo = function (a, b) {
      _.gd.call(this, a);
      this.coords = b.coords;
      this.x = b.coords[0];
      this.y = b.coords[1];
      this.z = b.coords[2];
      this.duration = b.duration;
      this.progress = b.progress;
      this.state = b.h;
    };
    _.z(vo, _.gd);
    var wo = (function () {
      if (_.dc) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(_.Ba())) ? a[1] : "0";
      }
      return _.cc
        ? ((a = /1[0|1][_.][0-9_.]+/),
          (a = a.exec(_.Ba())) ? a[0].replace(/_/g, ".") : "10")
        : _.ec
        ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(_.Ba())) ? a[1] : "")
        : _.fc || _.gc || _.hc
        ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/),
          (a = a.exec(_.Ba())) ? a[1].replace(/_/g, ".") : "")
        : "";
    })();
    var xo = function (a) {
        return (a = a.exec(_.Ba())) ? a[1] : "";
      },
      yo = (function () {
        if (_.Ag) return xo(/Firefox\/([0-9.]+)/);
        if (_.C || _.Yb || _.Xb) return _.oc;
        if (_.Eg) {
          if (_.Fa() || _.u("Macintosh")) {
            var a = xo(/CriOS\/([0-9.]+)/);
            if (a) return a;
          }
          return xo(/Chrome\/([0-9.]+)/);
        }
        if (_.Fg && !_.Fa()) return xo(/Version\/([0-9.]+)/);
        if (_.Bg || _.Cg) {
          if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ba())))
            return a[1] + "." + a[2];
        } else if (_.Dg)
          return (a = xo(/Android\s+([0-9.]+)/)) ? a : xo(/Version\/([0-9.]+)/);
        return "";
      })();
    var zo = function (a, b, c, d, e) {
      to.call(this, b, c, d, e);
      this.element = a;
    };
    _.z(zo, to);
    zo.prototype.A = function () {};
    zo.prototype.C = function () {
      this.A();
      zo.R.C.call(this);
    };
    zo.prototype.yb = function () {
      this.A();
      zo.R.yb.call(this);
    };
    zo.prototype.l = function () {
      this.A();
      zo.R.l.call(this);
    };
    var Ao = function (a, b, c, d, e) {
      "number" === typeof b && (b = [b]);
      "number" === typeof c && (c = [c]);
      zo.call(this, a, b, c, d, e);
      if (1 != b.length || 1 != c.length) throw Error("Ca");
      this.s = -1;
    };
    _.z(Ao, zo);
    var Bo = 1 / 1024;
    Ao.prototype.A = function () {
      var a = this.coords[0];
      if (Math.abs(a - this.s) >= Bo) {
        var b = this.element.style;
        "opacity" in b
          ? (b.opacity = a)
          : "MozOpacity" in b
          ? (b.MozOpacity = a)
          : "filter" in b &&
            (b.filter =
              "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
        this.s = a;
      }
    };
    Ao.prototype.l = function () {
      this.s = -1;
      Ao.R.l.call(this);
    };
    Ao.prototype.yb = function () {
      this.s = -1;
      Ao.R.yb.call(this);
    };
    var Co = function (a, b, c) {
      Ao.call(this, a, 1, 0, b, c);
    };
    _.z(Co, Ao);
    Co.prototype.l = function () {
      this.element.style.display = "";
      Co.R.l.call(this);
    };
    Co.prototype.yb = function () {
      this.element.style.display = "none";
      Co.R.yb.call(this);
    };
    var Do = function (a, b, c) {
      Ao.call(this, a, 0, 1, b, c);
    };
    _.z(Do, Ao);
    Do.prototype.l = function () {
      this.element.style.display = "";
      Do.R.l.call(this);
    };
    var Eo = function () {
      _.N.call(this);
      this.j = null;
    };
    _.x(Eo, _.N);
    Eo.prototype.T = function () {
      this.Aa(this.h.T("DIV", { class: "status-message" }));
    };
    Eo.prototype.Aa = function (a) {
      this.l = a;
      a.style.display = "none";
    };
    var Go = function (a) {
        var b = c;
        var c = (0, _.y)(function () {
          _.dd(this.B(), "");
          b && b();
        }, a);
        c = (0, _.y)(a.o, a, 750, c);
        Fo(a, c);
      },
      Ho = function (a) {
        a.j && (a.j.stop(!0), (a.j = null));
        _.dd(a.B(), "");
        a.Y(!1);
      },
      Fo = function (a, b) {
        a.j = new Do(a.B(), 750);
        Fm(a).pc(
          a.j,
          "begin",
          (0, _.y)(function () {
            this.B().style.display = "block";
          }, a)
        );
        Fm(a).pc(
          a.j,
          "finish",
          (0, _.y)(function () {
            this.j = null;
            window.setTimeout(b, 2e3);
          }, a)
        );
        a.j.play();
      };
    Eo.prototype.o = function (a, b) {
      this.isVisible() &&
        ((this.j = new Co(this.B(), a)),
        Fm(this).pc(
          this.j,
          "finish",
          (0, _.y)(function () {
            b && b();
          }, this)
        ),
        this.j.play());
    };
    Eo.prototype.Y = function (a) {
      this.B().style.display = a ? "block" : "none";
      this.B().style.opacity = a ? "1" : "0";
    };
    Eo.prototype.isVisible = function () {
      return (
        "none" !== this.B().style.display && "0" !== this.B().style.opacity
      );
    };
    var Io = function (a, b) {
      _.E.call(this);
      this.s = new _.F(this);
      this.gd(a || null);
      b && (this.kd = b);
    };
    _.z(Io, _.E);
    _.k = Io.prototype;
    _.k.hb = null;
    _.k.pd = !0;
    _.k.Sg = null;
    _.k.Ac = !1;
    _.k.Kf = -1;
    _.k.kd = "toggle_display";
    _.k.B = function () {
      return this.hb;
    };
    _.k.gd = function (a) {
      if (this.Ac) throw Error("Da");
      this.hb = a;
    };
    _.k.Id = function (a) {
      if (this.Ac) throw Error("Da");
      this.pd = a;
    };
    _.k.isVisible = function () {
      return this.Ac;
    };
    _.k.Y = function (a) {
      this.Ma && this.Ma.stop();
      this.Ga && this.Ga.stop();
      if (a) {
        if (!this.Ac && this.Se()) {
          if (!this.hb) throw Error("Ea");
          this.Rb();
          a = _.Rc(this.hb);
          if (this.pd)
            if ((this.s.I(a, "mousedown", this.Tf, !0), _.C)) {
              try {
                var b = a.activeElement;
              } catch (d) {}
              for (; b && "IFRAME" == b.nodeName; ) {
                try {
                  var c = _.Kj(b);
                } catch (d) {
                  break;
                }
                a = c;
                b = a.activeElement;
              }
              this.s.I(a, "mousedown", this.Tf, !0);
              this.s.I(a, "deactivate", this.Oh);
            } else this.s.I(a, "blur", this.Oh);
          "toggle_display" == this.kd
            ? ((this.hb.style.visibility = "visible"), _.S(this.hb, !0))
            : "move_offscreen" == this.kd && this.Rb();
          this.Ac = !0;
          this.Kf = Date.now();
          this.Ma
            ? (_.wd(this.Ma, "end", this.Ph, !1, this), this.Ma.play())
            : this.Ph();
        }
      } else Jo(this);
    };
    _.k.Rb = function () {};
    var Jo = function (a, b) {
      a.Ac &&
        a.dispatchEvent({ type: "beforehide", target: b }) &&
        (a.s && _.Lf(a.s),
        (a.Ac = !1),
        a.Ga
          ? (_.wd(a.Ga, "end", _.tb(a.Vg, b), !1, a), a.Ga.play())
          : a.Vg(b));
    };
    _.k = Io.prototype;
    _.k.Vg = function (a) {
      "toggle_display" == this.kd
        ? this.Hj()
        : "move_offscreen" == this.kd && (this.hb.style.top = "-10000px");
      this.Vf(a);
    };
    _.k.Hj = function () {
      this.hb.style.visibility = "hidden";
      _.S(this.hb, !1);
    };
    _.k.Se = function () {
      return this.dispatchEvent("beforeshow");
    };
    _.k.Ph = function () {
      this.dispatchEvent("show");
    };
    _.k.Vf = function (a) {
      this.dispatchEvent({ type: "hide", target: a });
    };
    _.k.Tf = function (a) {
      a = a.target;
      _.cd(this.hb, a) ||
        Ko(this, a) ||
        150 > Date.now() - this.Kf ||
        Jo(this, a);
    };
    _.k.Oh = function (a) {
      var b = _.Rc(this.hb);
      if ("undefined" != typeof document.activeElement) {
        if (
          ((a = b.activeElement),
          !a || _.cd(this.hb, a) || "BODY" == a.tagName || Ko(this, a))
        )
          return;
      } else if (a.target != b) return;
      150 > Date.now() - this.Kf || Jo(this);
    };
    var Ko = function (a, b) {
      return _.Tb(a.Sg || [], function (c) {
        return b === c || _.cd(c, b);
      });
    };
    Io.prototype.L = function () {
      Io.R.L.call(this);
      this.s.P();
      _.ca(this.Ma);
      _.ca(this.Ga);
      delete this.hb;
      delete this.s;
      delete this.Sg;
    };
    var Lo = function (a) {
      _.E.call(this);
      this.h = a;
      a = _.C ? "focusout" : "blur";
      this.j = _.D(this.h, _.C ? "focusin" : "focus", this, !_.C);
      this.l = _.D(this.h, a, this, !_.C);
    };
    _.z(Lo, _.E);
    Lo.prototype.handleEvent = function (a) {
      var b = new _.jd(a.h);
      b.type =
        "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
      this.dispatchEvent(b);
    };
    Lo.prototype.L = function () {
      Lo.R.L.call(this);
      _.Ed(this.j);
      _.Ed(this.l);
      delete this.h;
    };
    var Mo = function () {};
    Mo.prototype.j = function () {};
    var Po = function (a, b, c, d, e, f, g) {
        var h;
        if ((h = c.offsetParent)) {
          var l = "HTML" == h.tagName || "BODY" == h.tagName;
          if (!l || "static" != wk(h, "position")) {
            var m = Ck(h);
            if (!l) {
              l = Hk(h);
              var n;
              if ((n = l)) {
                n = _.Fg && 0 <= _.hj(yo, 10);
                var p;
                if ((p = _.ic)) p = 0 <= _.hj(wo, 10);
                var r = _.Eg && 0 <= _.hj(yo, 85);
                n = _.$b || n || p || r;
              }
              l = n
                ? -h.scrollLeft
                : l && !_.Zb && "visible" != wk(h, "overflowX")
                ? h.scrollWidth - h.clientWidth - h.scrollLeft
                : h.scrollLeft;
              m = wj(m, new O(l, h.scrollTop));
            }
          }
        }
        h = m || new O();
        m = Ck(a);
        l = Gk(a);
        m = new uk(m.x, m.y, l.width, l.height);
        if ((l = Dk(a)))
          (r = new uk(l.left, l.top, l.right - l.left, l.bottom - l.top)),
            (l = Math.max(m.left, r.left)),
            (n = Math.min(m.left + m.width, r.left + r.width)),
            l <= n &&
              ((p = Math.max(m.top, r.top)),
              (r = Math.min(m.top + m.height, r.top + r.height)),
              p <= r &&
                ((m.left = l),
                (m.top = p),
                (m.width = n - l),
                (m.height = r - p)));
        l = _.Sc(a);
        p = _.Sc(c);
        l.V != p.V &&
          ((n = l.V.body),
          (p = _.Ek(n, _.ed(p))),
          (p = wj(p, Ck(n))),
          !_.C || 9 <= Number(_.rc) || _.Wc(l.V) || (p = wj(p, _.Ui(l.V))),
          (m.left += p.x),
          (m.top += p.y));
        a = No(a, b);
        b = m.left;
        a & 4 ? (b += m.width) : a & 2 && (b += m.width / 2);
        b = new O(b, m.top + (a & 1 ? m.height : 0));
        b = wj(b, h);
        e && ((b.x += (a & 4 ? -1 : 1) * e.x), (b.y += (a & 1 ? -1 : 1) * e.y));
        var q;
        g &&
          (q = Dk(c)) &&
          ((q.top -= h.y),
          (q.right -= h.x),
          (q.bottom -= h.y),
          (q.left -= h.x));
        return Oo(b, c, d, f, q, g);
      },
      Oo = function (a, b, c, d, e, f) {
        a = Qi(a);
        var g = No(b, c);
        c = Gk(b);
        var h = new _.Lc(c.width, c.height);
        a = Qi(a);
        h = new _.Lc(h.width, h.height);
        var l = 0;
        if (d || 0 != g)
          g & 4
            ? (a.x -= h.width + (d ? d.right : 0))
            : g & 2
            ? (a.x -= h.width / 2)
            : d && (a.x += d.left),
            g & 1
              ? (a.y -= h.height + (d ? d.bottom : 0))
              : d && (a.y += d.top);
        f &&
          (e
            ? ((d = h),
              (g = 0),
              65 == (f & 65) && (a.x < e.left || a.x >= e.right) && (f &= -2),
              132 == (f & 132) && (a.y < e.top || a.y >= e.bottom) && (f &= -5),
              a.x < e.left && f & 1 && ((a.x = e.left), (g |= 1)),
              f & 16 &&
                ((l = a.x),
                a.x < e.left && ((a.x = e.left), (g |= 4)),
                a.x + d.width > e.right &&
                  ((d.width = Math.min(e.right - a.x, l + d.width - e.left)),
                  (d.width = Math.max(d.width, 0)),
                  (g |= 4))),
              a.x + d.width > e.right &&
                f & 1 &&
                ((a.x = Math.max(e.right - d.width, e.left)), (g |= 1)),
              f & 2 &&
                (g |=
                  (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)),
              a.y < e.top && f & 4 && ((a.y = e.top), (g |= 2)),
              f & 32 &&
                ((l = a.y),
                a.y < e.top && ((a.y = e.top), (g |= 8)),
                a.y + d.height > e.bottom &&
                  ((d.height = Math.min(e.bottom - a.y, l + d.height - e.top)),
                  (d.height = Math.max(d.height, 0)),
                  (g |= 8))),
              a.y + d.height > e.bottom &&
                f & 4 &&
                ((a.y = Math.max(e.bottom - d.height, e.top)), (g |= 2)),
              f & 8 &&
                (g |=
                  (a.y < e.top ? 64 : 0) |
                  (a.y + d.height > e.bottom ? 128 : 0)),
              (e = g))
            : (e = 256),
          (l = e));
        e = new uk(0, 0, 0, 0);
        e.left = a.x;
        e.top = a.y;
        e.width = h.width;
        e.height = h.height;
        a = l;
        if (a & 496) return a;
        _.yk(b, new O(e.left, e.top));
        h = new _.Lc(e.width, e.height);
        _.Mc(c, h) || _.Ik(b, h, "border-box");
        return a;
      },
      No = function (a, b) {
        return (b & 8 && Hk(a) ? b ^ 4 : b) & -9;
      };
    var Qo = function (a, b, c) {
      this.element = a;
      this.l = b;
      this.o = c;
    };
    _.z(Qo, Mo);
    Qo.prototype.j = function (a, b, c) {
      Po(this.element, this.l, a, b, void 0, c, this.o);
    };
    var Ro = function (a, b) {
      this.h = a instanceof O ? a : new O(a, b);
    };
    _.z(Ro, Mo);
    Ro.prototype.j = function (a, b, c) {
      Po(zk(a), 0, a, b, this.h, c, null);
    };
    var So = function (a, b) {
      this.A = b || void 0;
      Io.call(this, a);
    };
    _.z(So, Io);
    So.prototype.Rb = function () {
      if (this.A) {
        var a = !this.isVisible() && "move_offscreen" != this.kd,
          b = this.B();
        a && ((b.style.visibility = "hidden"), _.S(b, !0));
        this.A.j(b, 8, this.Ij);
        a && _.S(b, !1);
      }
    };
    var X = function (a, b, c) {
      this.Z = c || (a ? _.Sc(_.P(a)) : _.Sc());
      So.call(
        this,
        this.Z.T("DIV", { style: "position:absolute;display:none;" })
      );
      this.rd = new O(1, 1);
      this.C = new _.df();
      this.J = null;
      a && this.attach(a);
      null != b && this.Ab(b);
    };
    _.z(X, So);
    var To = [];
    _.k = X.prototype;
    _.k.Ra = null;
    _.k.className = "VIpgJd-suEOdc";
    _.k.bi = 500;
    _.k.yh = 0;
    _.k.attach = function (a) {
      a = _.P(a);
      this.C.add(a);
      _.D(a, "mouseover", this.Te, !1, this);
      _.D(a, "mouseout", this.Tc, !1, this);
      _.D(a, "mousemove", this.eh, !1, this);
      _.D(a, "focus", this.de, !1, this);
      _.D(a, "blur", this.Tc, !1, this);
    };
    var Vo = function (a, b) {
        if (b) (b = _.P(b)), Uo(a, b), a.C.remove(b);
        else {
          for (var c = a.C.rb(), d = 0; (b = c[d]); d++) Uo(a, b);
          a = a.C;
          b = a.h;
          b.j = {};
          b.h.length = 0;
          b.size = 0;
          b.l = 0;
          a.size = 0;
        }
      },
      Uo = function (a, b) {
        _.Dd(b, "mouseover", a.Te, !1, a);
        _.Dd(b, "mouseout", a.Tc, !1, a);
        _.Dd(b, "mousemove", a.eh, !1, a);
        _.Dd(b, "focus", a.de, !1, a);
        _.Dd(b, "blur", a.Tc, !1, a);
      };
    X.prototype.Ab = function (a) {
      _.dd(this.B(), a);
    };
    X.prototype.gd = function (a) {
      var b = this.B();
      b && _.Ij(b);
      X.R.gd.call(this, a);
      a
        ? ((b = this.Z.V.body),
          b.insertBefore(a, b.lastChild),
          _.ca(this.J),
          (this.J = new Lo(this.B())),
          _.Pi(this, _.tb(_.ca, this.J)),
          _.D(this.J, "focusin", this.O, void 0, this),
          _.D(this.J, "focusout", this.Sb, void 0, this))
        : (_.ca(this.J), (this.J = null));
    };
    X.prototype.Pd = function () {
      return Qj(this.B());
    };
    var Wo = function (a) {
      return a.X ? (a.isVisible() ? 4 : 1) : a.ta ? 3 : a.isVisible() ? 2 : 0;
    };
    X.prototype.Se = function () {
      if (!Io.prototype.Se.call(this)) return !1;
      if (this.h)
        for (var a, b = 0; (a = To[b]); b++) _.cd(a.B(), this.h) || a.Y(!1);
      _.ua(To, this);
      a = this.B();
      a.className = this.className;
      this.O();
      _.D(a, "mouseover", this.ne, !1, this);
      _.D(a, "mouseout", this.me, !1, this);
      Xo(this);
      return !0;
    };
    X.prototype.Vf = function () {
      _.va(To, this);
      for (var a = this.B(), b, c = 0; (b = To[c]); c++)
        b.h && _.cd(a, b.h) && b.Y(!1);
      this.lh && this.lh.Sb();
      _.Dd(a, "mouseover", this.ne, !1, this);
      _.Dd(a, "mouseout", this.me, !1, this);
      this.h = void 0;
      0 == Wo(this) && (this.Bb = !1);
      Io.prototype.Vf.call(this);
    };
    X.prototype.Rf = function (a, b) {
      this.h == a &&
        _.bf(this.C.h, _.ef(this.h)) &&
        (this.Bb || !this.dm
          ? (this.Y(!1),
            this.isVisible() ||
              ((this.h = a),
              (this.A = b || new Yo(Qi(this.rd))),
              this.isVisible() && this.Rb(),
              this.Y(!0)))
          : (this.h = void 0));
      this.X = void 0;
    };
    X.prototype.Oj = function (a) {
      this.ta = void 0;
      if (a == this.h) {
        a = this.Z;
        var b = a.V;
        try {
          var c = b && b.activeElement;
          var d = c && c.nodeName ? c : null;
        } catch (e) {
          d = null;
        }
        d = d && this.B() && a.h(this.B(), d);
        (null != this.Ra &&
          (this.Ra == this.B() || _.bf(this.C.h, _.ef(this.Ra)))) ||
          d ||
          (this.ge && this.ge.Ra) ||
          this.Y(!1);
      }
    };
    var Zo = function (a, b) {
      var c = _.Ui(a.Z.V);
      a.rd.x = b.clientX + c.x;
      a.rd.y = b.clientY + c.y;
    };
    X.prototype.Te = function (a) {
      var b = $o(this, a.target);
      this.Ra = b;
      this.O();
      b != this.h && ((this.h = b), ap(this, b), bp(this), Zo(this, a));
    };
    var $o = function (a, b) {
      try {
        for (; b && !_.bf(a.C.h, _.ef(b)); ) b = b.parentNode;
        return b;
      } catch (c) {
        return null;
      }
    };
    X.prototype.eh = function (a) {
      Zo(this, a);
      this.Bb = !0;
    };
    X.prototype.de = function (a) {
      this.Ra = a = $o(this, a.target);
      this.Bb = !0;
      if (this.h != a) {
        this.h = a;
        var b = new cp(this.Ra);
        this.O();
        ap(this, a, b);
        bp(this);
      }
    };
    var bp = function (a) {
      if (a.h)
        for (var b, c = 0; (b = To[c]); c++)
          _.cd(b.B(), a.h) && ((b.ge = a), (a.lh = b));
    };
    X.prototype.Tc = function (a) {
      var b = $o(this, a.target),
        c = $o(this, a.relatedTarget);
      b != c &&
        (b == this.Ra && (this.Ra = null),
        Xo(this),
        (this.Bb = !1),
        !this.isVisible() ||
        (a.relatedTarget && _.cd(this.B(), a.relatedTarget))
          ? (this.h = void 0)
          : this.Sb());
    };
    X.prototype.ne = function () {
      var a = this.B();
      this.Ra != a && (this.O(), (this.Ra = a));
    };
    X.prototype.me = function (a) {
      var b = this.B();
      this.Ra != b ||
        (a.relatedTarget && _.cd(b, a.relatedTarget)) ||
        ((this.Ra = null), this.Sb());
    };
    var ap = function (a, b, c) {
        a.X || (a.X = _.Uf((0, _.y)(a.Rf, a, b, c), a.bi));
      },
      Xo = function (a) {
        a.X && (_.t.clearTimeout(a.X), (a.X = void 0));
      };
    X.prototype.Sb = function () {
      2 == Wo(this) &&
        (this.ta = _.Uf((0, _.y)(this.Oj, this, this.h), this.yh));
    };
    X.prototype.O = function () {
      this.ta && (_.t.clearTimeout(this.ta), (this.ta = void 0));
    };
    X.prototype.L = function () {
      this.Y(!1);
      Xo(this);
      Vo(this);
      this.B() && _.Ij(this.B());
      this.Ra = null;
      delete this.Z;
      X.R.L.call(this);
    };
    var Yo = function (a, b) {
      Ro.call(this, a, b);
    };
    _.z(Yo, Ro);
    Yo.prototype.j = function (a, b, c) {
      b = zk(a);
      b = Dk(b);
      c = c
        ? new tk(c.top + 10, c.right, c.bottom, c.left + 10)
        : new tk(10, 0, 0, 10);
      Oo(this.h, a, 8, c, b, 9) & 496 && Oo(this.h, a, 8, c, b, 5);
    };
    var cp = function (a) {
      Qo.call(this, a, 5);
    };
    _.z(cp, Qo);
    cp.prototype.j = function (a, b, c) {
      var d = new O(10, 0);
      Po(this.element, this.l, a, b, d, c, 9) & 496 &&
        Po(this.element, 4, a, 1, d, c, 5);
    };
    var dp = function () {
      X.call(this);
      this.oa = {};
      this.od = {};
      this.N = null;
      this.ee = !1;
      this.qd = this.j = this.K = null;
      this.ma = {};
      this.H = new _.F(this);
      this.F = this.W = this.l = this.Tb = this.o = this.U = this.La = null;
      this.G = !0;
      this.Ub = [];
    };
    _.x(dp, X);
    _.k = dp.prototype;
    _.k.Ca = function () {
      this.G = !1;
      var a = _.nf.test(_.T) ? "rtl" : "ltr";
      this.gd(
        _.Bi(xm, {
          Zc: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
          am: "https://www.google.com/images/cleardot.gif",
          cm: _.sl,
          dir: a,
          Me: zl,
        })
      );
      this.className += " skiptranslate";
      this.B() &&
        this.N &&
        this.Tb &&
        this.l.B() &&
        this.K &&
        this.F &&
        (this.H.I(window, "resize", (0, _.y)(this.Rb, this)),
        this.H.I(this, "hide", (0, _.y)(this.kk, this)),
        this.Ub.length && (this.Pg.apply(this, this.Ub), (this.Ub = [])));
    };
    _.k.Pg = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        var d = arguments[c];
        if (d)
          if (this.N || d.xe) {
            var e = _.Fj("SPAN", { class: d.className || "activity-link" });
            _.dd(e, d.Lf || "");
            b.push(e);
            Gj(d.xe || this.N, e);
            if (d.Ce && d.dd) {
              var f = (0, _.y)(this.kj, this, d);
              this.H.I(e, "click", f);
              d.we && this.H.I(this.K, d.we, f);
            }
            d.id = d.id || d.Xb();
            this.oa[d.id] && this.Wh(d);
            this.oa[d.id] = d;
            this.od[d.id] = e;
          } else this.Ub.push(d);
      }
      return b;
    };
    _.k.Wh = function (a) {
      for (var b = 0; b < arguments.length; ++b) {
        var c =
            "string" === typeof arguments[b] || arguments[b] instanceof String
              ? arguments[b]
              : arguments[b].id,
          d = this.oa[c],
          e = this.od[c];
        d &&
          e &&
          (this.j && this.j.id === c && this.gf(),
          this.H.Gb(d, ["submitted", "cancelled"]),
          d.P(),
          this.ma[c] && delete this.ma[c],
          delete this.oa[c],
          delete this.od[c],
          _.Ij(e));
      }
    };
    _.k.kj = function (a) {
      if (this.K) {
        a != this.j &&
          this.j &&
          (Ho(this.l),
          this.j.dd.call(this.j),
          this.j.B() && (this.j.B().style.display = "none"),
          ep(this, !1),
          (this.j = null));
        ep(this, !0);
        Ho(this.l);
        this.j = a;
        if (this.ma[a.id]) {
          var b = this.ma[a.id];
          var c = a.Nd;
        } else
          a.Ca(),
            (b = a.B()),
            (c = a.Ce),
            this.H.I(a, ["submitted", "cancelled"], (0, _.y)(this.gf, this)),
            a.ff && (this.ma[a.id] = b);
        Gj(this.K, b);
        c.call(a, this);
        a = new Do(b, 100);
        this.H.pc(a, "finish", (0, _.y)(this.Rb, this, !0, !0));
        a.play();
      }
    };
    _.k.gf = function () {
      if (this.j)
        if ((Ho(this.l), this.j.dd.call(this.j), this.j.B())) {
          var a = new Co(this.j.B(), 100);
          this.H.pc(
            a,
            "finish",
            (0, _.y)(function () {
              _.Ij(this.j.B());
              this.j = null;
              ep(this, !1);
              Qj(this.l.B()) && (Go(this.l), this.Rb(!0, !0));
            }, this)
          );
          a.play();
        } else ep(this, !1), (this.j = null);
    };
    _.k.Rf = function (a, b) {
      this.qd = a;
      X.prototype.Rf.call(this, a, b);
      this.B().style.display = "block";
    };
    _.k.Te = function (a) {
      if (!this.G) {
        var b = $o(this, a.target);
        this.Ra = b;
        this.O();
        b != this.h
          ? ((this.h = b), ap(this, b), bp(this), Zo(this, a))
          : ap(this, b);
      }
    };
    _.k.kk = function () {
      Ho(this.l);
      this.ee && this.gf();
    };
    _.k.L = function () {
      for (var a in this.oa) this.Wh(a);
      this.H && this.H.P();
      this.H = null;
      this.l && this.l.P();
      this.F = this.Tb = this.qd = this.K = this.N = this.l = null;
      X.prototype.L.call(this);
    };
    var ep = function (a, b) {
      a.ee = b;
      a.G = b;
      if (a.G) {
        var c = a.B();
        a.La = new O(c.offsetLeft, c.offsetTop);
      } else
        a.La &&
          (null != (a.A || null) && ((a.A || null).h = a.La),
          _.yk(a.B(), a.La),
          (a.La = null));
      a.N.style.display = b ? "none" : "inline-block";
      a.Tb.style.display = b ? "inline-block" : "none";
    };
    _.k = dp.prototype;
    _.k.Id = function (a) {
      if (this.isVisible()) {
        a = (this.pd = a) ? this.s.I : this.s.Gb;
        var b = _.Rc(this.B());
        a.call(this.s, b, "mousedown", this.Tf, !0);
      } else X.prototype.Id.call(this, a);
    };
    _.k.gd = function (a) {
      X.prototype.gd.call(this, a);
      if (a) {
        this.N = Si("activity-links", a);
        var b = Si("status-message", a);
        b && ((this.l = new Eo()), Hm(this.l, b));
        this.Tb = Si("started-activity-container", a);
        this.K = Si("activity-root", a);
        this.F = Si("original-text", a);
      }
    };
    _.k.Rb = function (a, b) {
      var c = Ck(document.body).y;
      if (this.A) {
        (this.A || null).h.y += c;
        X.prototype.Rb.call(this);
        var d = parseInt(this.B().style.left, 10);
        a = parseInt(this.B().style.top, 10) - (a ? 0 : c);
        b && ((b = this.Ij || {}), (a -= b.top || 10), (d -= b.left || 10));
        a -= c;
        (this.A || null).h.y = a;
        (this.A || null).h.x = d;
        c = new O(d, a);
        _.yk(this.B(), c);
      }
    };
    _.k.Y = function (a) {
      X.prototype.Y.call(this, a);
    };
    _.k.qc = function (a) {
      this.o = a;
    };
    _.k.sa = function (a) {
      this.W = a;
    };
    _.k.Ab = function (a) {
      a = a ? (0, _.Ub)(a) : "";
      this.F ? _.dd(this.F, a) : X.prototype.Ab.call(this, a);
    };
    _.k.kb = function () {
      return this.o;
    };
    _.k.Sc = function () {
      return this.l;
    };
    _.k.na = function () {
      return this.W;
    };
    _.k.Pd = function () {
      return this.F ? Qj(this.F) : X.prototype.Pd.call(this);
    };
    _.k.Tc = function (a) {
      this.G || X.prototype.Tc.call(this, a);
    };
    _.k.ne = function (a) {
      this.G || X.prototype.ne.call(this, a);
    };
    _.k.me = function (a) {
      this.G || X.prototype.me.call(this, a);
    };
    var fp = {
      set: function (a, b) {
        a.className = b;
      },
      get: function (a) {
        a = a.className;
        return ("string" === typeof a && a.match(/\S+/g)) || [];
      },
      add: function (a, b) {
        var c = fp.get(a),
          d = Array.prototype.slice.call(arguments, 1),
          e = c.length + d.length;
        fp.Qg(c, d);
        fp.set(a, c.join(" "));
        return c.length == e;
      },
      remove: function (a, b) {
        var c = fp.get(a),
          d = Array.prototype.slice.call(arguments, 1),
          e = fp.hh(c, d);
        fp.set(a, e.join(" "));
        return e.length == c.length - d.length;
      },
      Qg: function (a, b) {
        for (var c = 0; c < b.length; c++) _.ta(a, b[c]) || a.push(b[c]);
      },
      hh: function (a, b) {
        return a.filter(function (c) {
          return !_.ta(b, c);
        });
      },
      km: function (a, b, c) {
        for (var d = fp.get(a), e = !1, f = 0; f < d.length; f++)
          d[f] == b && (d.splice(f--, 1), (e = !0));
        e && (d.push(c), fp.set(a, d.join(" ")));
        return e;
      },
      Yl: function (a, b, c) {
        var d = fp.get(a);
        "string" === typeof b
          ? _.va(d, b)
          : Array.isArray(b) && (d = fp.hh(d, b));
        "string" !== typeof c || _.ta(d, c)
          ? Array.isArray(c) && fp.Qg(d, c)
          : d.push(c);
        fp.set(a, d.join(" "));
      },
      has: function (a, b) {
        return _.ta(fp.get(a), b);
      },
      enable: function (a, b, c) {
        c ? fp.add(a, b) : fp.remove(a, b);
      },
      toggle: function (a, b) {
        var c = !fp.has(a, b);
        fp.enable(a, b, c);
        return c;
      },
    };
    var gp = function (a, b) {
      ko.call(this, a);
      b = b || {};
      this.D = { apiKey: b.apiKey || "", lc: b.lc || 1 };
      this.h = null;
    };
    _.x(gp, ko);
    _.k = gp.prototype;
    _.k.attach = function (a, b) {
      b && ((b.Wd = a), this.h.attach(b));
    };
    _.k.Fg = function (a) {
      a && Vo(this.h, a);
    };
    _.k.ri = function () {
      var a = this.h.qd;
      if (a && void 0 !== a.Wd) {
        var b = a.Wd;
        a = this.ya.j[b];
        lo(this, this.j, !1);
        this.j = b;
        lo(this, b);
        this.h.qc(a.Gk);
        this.h.sa(a.Jk);
        var c = a.la;
        this.h.U = c && (0, _.Ub)(c);
        this.h.Ab(a.text);
      }
      b = new CustomEvent("goog-gt-popupShown", {
        detail: { Wd: b, Lk: this.h },
      });
      window.document.body.dispatchEvent(b);
    };
    _.k.pi = function () {
      lo(this, this.j, !1);
    };
    _.k.ik = function () {
      this.ya.j[this.j].aj.dispatchEvent("updating");
    };
    _.k.L = function () {
      this.h.P();
      this.h = null;
      ko.prototype.L.call(this);
    };
    _.k.zh = function (a, b) {
      fp[b ? "add" : "remove"](a, "goog-text-highlight");
    };
    var hp = function (a) {
      this.A = a;
      this.o = this.j = this.s = this.l = -1;
      this.h = !1;
      this.F = 0;
      this.J = "";
      this.G = 0;
    };
    hp.prototype.start = function () {
      if (!this.h) {
        this.h = !0;
        var a = [],
          b;
        for (b = 0; 15 > b; b++) a[b] = _.Cl[0 | (62 * Math.random())];
        this.J = a.join("");
        this.F = 0;
        this.o = this.j = this.s = this.l = -1;
        this.G = _.ub();
        _.Uf(this.C, 1e4, this);
      }
    };
    hp.prototype.stop = function () {
      this.h && ((this.h = !1), ip(this));
    };
    hp.prototype.C = function () {
      this.h && (ip(this), _.Uf(this.C, 1e3, this));
    };
    var ip = function (a) {
      var b = a.A.o,
        c = a.A.A,
        d = a.A.l,
        e = a.A.s;
      if (a.l != b || a.s != c || a.j != d || a.o != e) {
        var f = {};
        f.ct = b;
        f.cv = c;
        f.cts = d;
        f.cvs = e;
        f.sid = a.J;
        f.seq = a.F++;
        f.tat = _.ub() - a.G;
        if (0 <= a.l || 0 <= a.s || 0 <= a.j || 0 <= a.o)
          (f.pt = a.l), (f.pv = a.s), (f.pts = a.j), (f.pvs = a.o);
        _.Di("te_v", f);
        a.l = b;
        a.s = c;
        a.j = d;
        a.o = e;
      }
    };
    var jp = function () {
      this.s = this.l = this.A = this.o = 0;
      this.h = [];
      this.j =
        null != _.t.IntersectionObserver
          ? new IntersectionObserver((0, _.y)(this.C, this))
          : null;
    };
    jp.prototype.attach = function (a, b) {
      this.l += b;
      var c = this.h.length;
      this.h.push(b);
      for (b = 0; b < a.length; ++b) {
        var d = a[b];
        Jj(d)
          ? ((d[kp] = c), (this.o += Qj(d).length), this.j && this.j.observe(d))
          : this.Eh(d.nodeType);
      }
    };
    jp.prototype.reset = function () {
      this.s = this.l = this.A = this.o = 0;
      this.h = [];
    };
    jp.prototype.C = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (0 < c.intersectionRatio && null != c.target[kp]) {
          this.A += Qj(c.target).length;
          var d = c.target[kp];
          this.s += this.h[d];
          this.h[d] = 0;
          c.target[kp] = void 0;
        }
      }
    };
    _.Rl.attach(36546, jp.prototype, { Eh: 1 });
    var kp = "_gt_" + Math.random().toString(36).substr(2);
    _.lp = function (a, b) {
      _.A.call(this);
      a = a || {};
      this.D = _.ni(a);
      this.D.lc = a.lc;
      this.D.He = !!a.He;
      this.D.Ti = parseInt(a.Ti, 10) || 300;
      this.D.sk = a.sk;
      this.D.trackVisibility = a.trackVisibility || !1;
      this.s = 0;
      this.j = {};
      this.H = new _.F(this);
      this.l = new gp(this, this.D);
      b && (this.l.l = b || {});
      a = this.l;
      a.h = new dp({ Ek: a.D.Ek });
      a.h.yh = 300;
      a.h.bi = 1e3;
      a.h.Id(!0);
      a.H.I(a.h, "show", (0, _.y)(a.ri, a));
      a.H.I(a.h, "hide", (0, _.y)(a.pi, a));
      a.D.lc &&
        "te_cl" != _.nl &&
        ((b = new jo(
          { id: "contribute", Lf: _.U.li, we: "dblclick", ff: !0 },
          a.l
        )),
        a.h.Pg(b),
        a.H.I(b, "submitted", (0, _.y)(a.ik, a)));
      a.h.Ca();
      this.o = this.h = null;
      this.D.trackVisibility &&
        null != _.t.IntersectionObserver &&
        ((this.h = new jp()), (this.o = new hp(this.h)));
    };
    _.x(_.lp, _.A);
    var mp = function (a) {
      a.o && a.o.stop();
      for (var b in a.j) {
        var c = a,
          d = b,
          e = c.j[d];
        if (e) {
          if (c.h)
            for (var f = c.h, g = e.Xa, h = 0; h < g.length; ++h) {
              var l = f,
                m = g[h];
              Jj(m)
                ? ((m[kp] = void 0), l.j && l.j.unobserve(m))
                : l.Eh(m.nodeType);
            }
          for (f = 0; f < e.Xa.length; ++f) e.Xa[f] && c.l.Fg(e.Xa[f]);
          delete c.j[d];
        }
      }
      a.h && a.h.reset();
    };
    _.lp.prototype.L = function () {
      mp(this);
      this.H.P();
      this.H = null;
      this.l.P();
      this.l = null;
    };
    var np = function (a) {
        for (var b = 0; b < a.length; ++b)
          if (a[b] && a[b].node) return a[b].node;
        return null;
      },
      rp = function (a) {
        var b = np(a);
        if (!b) return null;
        var c = [],
          d = [],
          e = [];
        b = new sm(b, !0);
        var f = a[a.length - 1].node,
          g = 0,
          h = !1;
        do {
          b.next();
          var l = b.node();
          if (!l) break;
          var m = b.h.h,
            n = b.depth();
          for (1 == m && --n; g < a.length && !a[g].node; ) ++g;
          l == a[g].node ||
          (!h &&
            1 == m &&
            (null != l && null == l.previousSibling ? 0 : !op(pp(l))))
            ? ((m = qp(l)),
              d.push({ node: m, Ab: function () {} }),
              (e[d.length - 1] = n),
              l.parentNode && l.parentNode.insertBefore(m, l),
              l == a[g].node && ((c[g++] = d.length - 1), (h = !0)))
            : (h = !1);
        } while (l != f);
        return { vg: e, pk: c, Jj: d };
      },
      op = function (a) {
        return null != a && mm[a.tagName];
      },
      pp = function (a) {
        if (null == a) return null;
        for (
          a = a.previousSibling;
          null != a && null != a && 3 == a.nodeType && "" == (0, _.Ub)(Qj(a));

        )
          a = a.previousSibling;
        return a;
      },
      up = function (a, b, c, d, e, f, g) {
        _.E.call(this);
        this.h = [];
        for (var h = 0; h < a.length; ++h)
          this.h.push("nodeType" in a[h] ? sp(a[h]) : a[h]), tp(a[h].node);
        this.l = b;
        this.G = d || 0;
        this.U = e || 0;
        this.C = c;
        this.ya = f || null;
        this.Pc = g || "transparent";
        this.K = this.J = this.O = !1;
        this.s = [];
        this.A = [];
        this.j = [];
        this.X = [];
        this.H = new _.F(this);
        this.o = this.N = !1;
      },
      sp,
      tp,
      Cp,
      Ap,
      qp,
      Dp;
    _.x(up, _.E);
    var xp = function (a) {
        if (!a) return !1;
        if (3 != a.nodeType || !_.C) return vp in a && !!a[vp];
        if (!a.parentNode) return !0;
        if (!(wp in a.parentNode)) return !1;
        var b = a.parentNode[wp];
        if (!b || !b[a.nodeValue]) return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c) if (b[c] == a) return !0;
        return !1;
      },
      yp = function (a, b) {
        if (!a) return "";
        if ("TITLE" == a.tagName) return String(document.title);
        3 == a.nodeType ? (b = "nodeValue") : b || (b = "value");
        return a.getAttribute && a.getAttribute(b)
          ? String(a.getAttribute(b))
          : "string" === typeof a[b]
          ? String(a[b])
          : "";
      };
    up.prototype.Ba = function () {
      return this.l;
    };
    var zp = function (a, b, c) {
        b = { Qh: b, Wf: c, qa: [] };
        a.j.push(b);
        return b;
      },
      Bp = function (a) {
        if (!a.o && a.O && !a.J && !a.K) {
          a.J = !0;
          var b;
          if ((b = Ap(a.h))) {
            b = a.h;
            var c = a.j;
            if (1 == b.length && b[0] && b[0].tg) {
              for (var d = [], e = 0; e < c.length; ++e)
                for (var f = 0; f < c[e].qa.length; ++f) d.push(c[e].qa[f].la);
              b[0].Ab(d.join(" "), b[0].node);
              b = !0;
            } else b = !1;
            b = !b;
          }
          if (b && (b = rp(a.h))) {
            a.A = b.pk;
            a.s = b.Jj;
            d = a.h;
            e = a.A;
            f = a.s;
            var g = b.vg;
            c = [];
            for (var h = 0; h < d.length; ++h)
              if (((c[h] = []), d[h].node && void 0 !== e[h]))
                for (var l = 0; l < f.length; ++l)
                  if (!(g[l] > g[e[h]])) {
                    if (g[l] == g[e[h]]) {
                      if (f[l].node.parentNode != f[e[h]].node.parentNode)
                        continue;
                    } else {
                      for (
                        var m = g[e[h]] - g[l], n = f[e[h]].node.parentNode;
                        m-- && n && n != f[l].node.parentNode;

                      )
                        n = n.parentNode;
                      if (n != f[l].node.parentNode) continue;
                    }
                    c[h].push(l);
                  }
            d = a.h;
            e = a.j;
            f = -1;
            for (g = e.length - 1; 0 <= g; --g)
              for (h = e[g], l = h.qa.length - 1; 0 <= l; --l)
                if (((m = h.qa[l]), !(0 > m.ha) && d[m.ha] && d[m.ha].node))
                  if (0 > f)
                    (m.re = _.Dl(c[m.ha])), (f = c[m.ha][c[m.ha].length - 1]);
                  else
                    for (n = c[m.ha].length - 1; 0 <= n; --n)
                      if (c[m.ha][n] <= f) {
                        m.re = _.Dl(c[m.ha].slice(0, n + 1));
                        f = c[m.ha][n];
                        break;
                      }
            for (c = e = 0; c < a.j.length; ++c) {
              d = a.j[c];
              f = a.h;
              g = b.vg;
              h = a.A;
              l = "";
              for (m = 0; m < d.qa.length; ++m)
                if (((n = d.qa[m]), (l += n.la), 0 > n.ha)) {
                  var p = -1,
                    r = -1,
                    q = h[d.qa[m - 1].ha];
                  void 0 !== q && (p = g[q]);
                  m < d.qa.length - 1 &&
                    ((q = h[d.qa[m + 1].ha]), void 0 !== q && (r = g[q]));
                  if (0 <= p || 0 <= r)
                    a: if (
                      ((r = (0 > p || r < p) && m < d.qa.length - 1),
                      (p = d.qa[r ? m + 1 : m - 1]),
                      !(p.ha >= f.length || null == f[p.ha].node))
                    ) {
                      q = n.la;
                      n.la = "";
                      if (
                        /^ +$/.test(q) &&
                        ((n = r
                          ? p.la.charCodeAt(0)
                          : p.la.charCodeAt(p.la.length - 1)),
                        (3584 <= n && 3711 >= n) ||
                          (12288 <= n && 12351 >= n) ||
                          (12352 <= n && 12543 >= n) ||
                          (12784 <= n && 12799 >= n) ||
                          (19968 <= n && 40959 >= n) ||
                          (65280 <= n && 65519 >= n))
                      )
                        break a;
                      p.la = r ? q + p.la : p.la + q;
                    }
                }
              f = l;
              g = a.h;
              h = a.s;
              l = b.vg;
              m = a.A;
              n = [];
              for (p = 0; p < d.qa.length && !(e >= h.length); ++p)
                if (
                  ((r = d.qa[p]), r.re && !(0 > r.ha) && g[r.ha].node && r.la)
                )
                  if (
                    e == m[r.ha] ||
                    (e in r.re && (!(e + 1 in r.re) || e + 1 != m[r.ha]))
                  ) {
                    if (h[e] && h[e].node) {
                      q = qp(h[e].node);
                      n.push(q);
                      for (
                        var w = h[e].node,
                          Q = l[m[r.ha]] - l[e],
                          R = q,
                          Da = g[r.ha].node.parentNode,
                          ea = R;
                        Da && Q--;

                      )
                        (ea = Da.cloneNode(!1)),
                          ea.appendChild(R),
                          (Da = Da.parentNode),
                          (R = ea);
                      w.appendChild(ea);
                      w = g[r.ha].node;
                      g[r.ha].Le
                        ? g[r.ha].Bh || q.appendChild(w)
                        : ((w = g[r.ha].node.cloneNode(!1)),
                          w.id && (w.id = ""),
                          q.appendChild(w));
                      g[r.ha].Ab(r.la, w);
                    }
                  } else ++e, --p;
              g = n;
              n = a.h;
              h = a.C;
              if (d.Qh) h = d.Qh;
              else {
                m = n.length;
                l = -1;
                for (p = 0; p < d.qa.length; ++p)
                  (r = d.qa[p].ha),
                    0 <= r &&
                      n[r] &&
                      n[r].node &&
                      ((l = Math.max(l, r)), (m = Math.min(m, r)));
                for (n = ""; m <= l; ++m) h[m] && (n += h[m]);
                h = n;
              }
              m = g;
              n = h;
              if (a.ya) {
                if (3 != a.ya.D.lc) {
                  g = a.X;
                  h = g.push;
                  l = a.ya;
                  d = d.Wf;
                  p = a;
                  d = l.j[++l.s] = {
                    id: l.s.toString(),
                    aj: p,
                    text: n,
                    jm: d || n,
                    la: f,
                    Gk: l.A,
                    Jk: l.C,
                    Xa: m,
                  };
                  for (f = 0; f < m.length; ++f) m[f] && l.l.attach(d.id, m[f]);
                  l.h && l.h.attach(m, n.length);
                  l.o && l.o.start();
                  h.call(g, d.id);
                }
              } else for (d = 0; d < m.length; ++d) m[d].title = n;
            }
            b = a.h;
            for (c = 0; c < b.length; ++c)
              b[c].node && !b[c].Le && _.Ij(b[c].node);
            b = a.h;
            c = a.s;
            a = a.A;
            for (e = d = 0; e < c.length; ++e)
              if ((f = c[e].node)) {
                for (; d < b.length && e > a[d]; ) d++;
                (d >= b.length || e != a[d]) &&
                  !f.firstChild &&
                  (_.Ij(f), (c[e].node = null));
              }
          }
        }
      };
    up.prototype.restore = function () {
      if (this.J)
        if (
          ((this.J = !1),
          this.ya && mp(this.ya),
          (this.X = []),
          Ap(this.s),
          1 == this.h.length && this.h[0].tg)
        )
          this.h[0].Ab(this.C[0], this.h[0].node);
        else {
          for (var a = 0, b = 0; b < this.s.length; ++b) {
            var c = this.s[b].node;
            if (c) {
              for (; a < this.h.length && b > this.A[a]; ) {
                var d = a++;
                this.h[d].node && (Cp(this.h[d].node), (this.h[d].node = null));
              }
              if (a < this.h.length && b == this.A[a] && this.h[a].node) {
                this.h[a].Bh || (_.bd(c), c.appendChild(this.h[a].node));
                this.h[a].Ab(this.C[a], this.h[a].node);
                a++;
                var e = c.parentNode;
                if (e && 11 != e.nodeType)
                  if (c.removeNode) c.removeNode(!1);
                  else {
                    for (; (d = c.firstChild); ) e.insertBefore(d, c);
                    _.Ij(c);
                  }
              } else _.Ij(c);
            }
          }
          this.s = [];
        }
    };
    up.prototype.L = function () {
      _.E.prototype.L.call(this);
      this.restore();
      for (var a = 0; a < this.h.length; ++a)
        this.h[a].node && Cp(this.h[a].node);
      this.h = null;
    };
    tp = function (a) {
      if (a)
        if (3 == a.nodeType && _.C) {
          (wp in a.parentNode && a.parentNode[wp]) || (a.parentNode[wp] = {});
          var b = a.parentNode[wp];
          b[a.nodeValue] || (b[a.nodeValue] = []);
          b = b[a.nodeValue];
          for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
          b.push(a);
        } else a[vp] = 1;
    };
    Cp = function (a) {
      if (!a || (3 == a.nodeType && _.C)) {
        var b = a.parentNode;
        if (b && wp in b) {
          var c = b[wp];
          if (c && a && c[a.nodeValue]) {
            var d = c[a.nodeValue];
            if (d)
              for (var e = 0; e < d.length; ++e)
                if (d[e] == a) {
                  d.splice(e, 1);
                  break;
                }
            0 == d.length && delete c[a.nodeValue];
          }
          if (c && Pl(c))
            try {
              delete b[wp];
            } catch (f) {
              b[wp] = "";
            }
        }
      } else if (vp in a)
        try {
          delete a[vp];
        } catch (f) {
          a[vp] = "";
        }
    };
    Ap = function (a) {
      for (var b = 0; b < a.length; ++b)
        try {
          a[b].node && !a[b].node.parentNode && (a[b].node = null);
        } catch (c) {
          a[b].node = null;
        }
      for (b = a.length - 1; 0 <= b && !a[b].node; --b);
      a.length = b + 1;
      return a.length;
    };
    qp = function (a) {
      a = a.ownerDocument
        ? a.ownerDocument.createElement("font")
        : _.Zc(document, "font");
      tp(a);
      a.style.verticalAlign = "inherit";
      return a;
    };
    Dp = function (a) {
      for (var b = new Set(), c = 0; c < a.h.length; c++) {
        var d = a.h[c].node;
        null != d && b.add(d);
      }
      return b;
    };
    _.Ep = function () {
      this.j = {};
      this.h = {};
    };
    _.Ep.prototype.has = function (a, b) {
      return (
        null != this.j[a] ||
        null != this.h[a] ||
        (b && (a in this.j || a in this.h))
      );
    };
    _.Ep.prototype.write = function (a, b) {
      this.h[a] = b;
    };
    _.Ep.prototype.remove = function (a) {
      delete this.h[a];
      delete this.j[a];
    };
    _.Ep.prototype.cc = function () {
      return Pl(this.j);
    };
    var vp = "_gt_" + Math.random().toString(36).substr(2),
      wp = "_gtn_" + Math.random().toString(36).substr(2);
    (function () {
      function a(c) {
        document.title = c;
      }
      var b = {};
      sp = function (c, d) {
        if ("TITLE" == c.tagName)
          return { node: c, Ab: a, Le: !0, Bh: !0, tg: !0 };
        if (3 == c.nodeType)
          return {
            node: c,
            Ab: function (e, f) {
              _.dd(f, e);
            },
          };
        d || (d = "value");
        b[d] ||
          (b[d] = function (e, f) {
            f.setAttribute && f.setAttribute(d, e);
            "string" === typeof e && (f[d] = e);
          });
        c = { node: c, Ab: b[d], Le: !0 };
        "value" != d && (c.tg = !0);
        return c;
      };
    })();
    var Fp = function (a, b, c, d) {
        d =
          d.firstChild && 3 == d.firstChild.nodeType
            ? d.firstChild.nodeValue
            : Qj(d);
        d = { ha: c, la: Dj(d) };
        a.push(d);
        b[c] ? (b[c].end = d) : (b[c] = { start: d, end: d });
        return d;
      },
      Gp = function (a) {
        for (var b, c = a.firstChild; c; c = b)
          (b = c.nextSibling),
            3 != c.nodeType &&
              (c == a.firstChild
                ? a.parentNode && a.parentNode.insertBefore(c, a)
                : Hj(c, a),
              Gp(c));
      };
    var Hp = function () {
      this.h = [];
    };
    Hp.prototype.add = function (a) {
      this.h.push(a);
    };
    var Ip = function () {
      this.h = [];
    };
    _.x(Ip, Hp);
    Ip.prototype.add = function (a) {
      if (a) for (; a(); );
    };
    Ip.nc = function () {
      return _.Bl(Ip);
    };
    _.Kp = function (a) {
      this.h = [];
      this.j = 0.5;
      Jp(this, a);
      this.o = 0;
      this.l = !0;
      this.s = (0, _.y)(this.A, this);
    };
    _.x(_.Kp, Hp);
    var Jp = function (a, b) {
      1 < b ? (a.j = 1) : 0.001 > b ? (a.j = 0.001) : b && (a.j = b);
    };
    _.Kp.prototype.add = function (a) {
      Hp.prototype.add.call(this, a);
      this.l && Lp(this);
    };
    var Lp = function (a) {
      a.l = !1;
      window.setTimeout(a.s, Math.min(a.o, 5e3));
    };
    _.Kp.prototype.A = function () {
      var a = new Date().getTime();
      do {
        this.h.length && ((this.h[0] && this.h[0]()) || this.h.shift());
        var b = !!this.h.length;
        var c = 95 * this.j + 5;
        var d = new Date().getTime() - a;
      } while (b && d < c);
      this.o = Math.ceil(d * (1 / this.j - 1)) + 1;
      b ? Lp(this) : (this.l = !0);
    };
    var Mp = function (a, b) {
        this.J = a || null;
        this.da = b || Ip.nc();
        this.C = this.A = this.N = null;
        this.o = this.l = !1;
        this.s = null;
        this.h = [];
        this.j = 0;
      },
      Np = function (a, b) {
        a.l || (a.N = b);
      },
      Op = function (a, b, c) {
        a.A = c ? (0, _.y)(b, c) : b;
      },
      Pp = function (a, b, c) {
        a.C = c ? (0, _.y)(b, c) : b;
      },
      Qp = function (a, b) {
        a.l || ((a.l = !0), (a.G = b), a.j++, (a.s = a.N), a.F());
      };
    Mp.prototype.stop = function () {
      this.j++;
      this.l = !1;
      this.h = [];
    };
    var Rp = function (a) {
        if (!a.l) return null;
        for (var b = !1, c = 0; c < a.h.length; ++c)
          if (a.h[c].target === a) {
            a.h[c].ready = !1;
            a.h[c].ii = a.j + 1;
            b = !0;
            break;
          }
        b || a.h.push({ target: a, ready: !1, ii: a.j + 1 });
        return (0, _.y)(a.F, a, a, a.j + 1);
      },
      Sp = function (a) {
        if (!a.l) return !0;
        for (var b = 0; b < a.h.length; ++b)
          if (a.h[b].target === a && a.h[b].ii == a.j) return a.h[b].ready;
        return !0;
      };
    Mp.prototype.F = function (a, b) {
      if (this.l) {
        if (a)
          for (var c = 0; c < this.h.length; ++c)
            if (this.h[c].target === a) {
              this.h[c].ready = !0;
              break;
            }
        this.o || this.da.add((0, _.y)(this.K, this, b || this.j));
      }
    };
    Mp.prototype.K = function (a) {
      if (this.j != a) return !1;
      a = this.s;
      if (a == Tp)
        return this.stop(), this.A && this.A.call(this.J, this, this.G), !1;
      this.o = !0;
      try {
        var b = a.call(this.J, this, this.G);
        if (!b) throw Error();
      } catch (c) {
        this.stop();
        a = c;
        if (this.C) this.C.call(this.J, a, this, this.G);
        else throw a;
        return !1;
      } finally {
        this.o = !1;
      }
      b != Up && ((this.s = b), this.j++, this.F());
      return !1;
    };
    var Up = function () {},
      Tp = function () {};
    var Wp = function (a, b, c, d, e) {
        b = b || {};
        this.K = e || [];
        this.A = [];
        this.G = [];
        Vp(this, a || document.documentElement, void 0 === b.Yh || !!b.Yh);
        this.F = c || up;
        this.J = b.Qj;
        this.l = this.h = this.s = this.zd = null;
        this.C = !!b.Ok;
        this.pa = !!b.Nk;
        this.O = this.C ? 27 : 13;
        this.da = !0;
        this.N = [];
        this.o = new Mp(this, d);
      },
      Xp = function (a, b, c, d) {
        a.o.l ||
          ((b = {
            gi: b,
            ci: c,
            Xa: [],
            Rh: [],
            Cc: [],
            textLength: 0,
            size: 0,
            continuous: !0,
          }),
          (a.zd = null),
          Np(a.o, a.j),
          Op(a.o, d),
          Pp(
            a.o,
            (0, _.y)(function (e) {
              this.Xj(e);
              d();
            }, a)
          ),
          Qp(a.o, b));
      },
      Yp = function (a, b) {
        return 0 < a.Xa.length
          ? new b(a.Xa, a.Cc.join(""), a.Rh, a.textLength, a.size)
          : null;
      },
      Zp = function (a, b) {
        if (!a.l) return (a.zd = Yp(b, a.F)), !0;
        if (!b.continuous && 0 < b.Xa.length) return (a.zd = Yp(b, a.F)), !0;
        b.continuous = a.l.Mh;
        a: {
          var c = a.l;
          var d = a.O;
          if (b.size > b.ci || b.textLength > b.gi) c = !1;
          else {
            var e = c.size,
              f = c.text.length;
            if (
              0 != b.Xa.length &&
              ((e += 1 == b.Xa.length ? b.size + d + d : b.size + d),
              (f += b.textLength),
              e > b.ci || f > b.gi)
            ) {
              c = !1;
              break a;
            }
            b.size = e;
            b.textLength = f;
            b.Xa.push(c.node);
            b.Rh.push(c.text);
            d = b.Xa.length - 1;
            0 == d
              ? b.Cc.push(c.rf)
              : (1 == d && (b.Cc[0] = "<a i=0>" + b.Cc[0] + "</a>"),
                b.Cc.push("<a i=" + d + ">"),
                b.Cc.push(c.rf),
                b.Cc.push("</a>"));
            c = !0;
          }
        }
        if (c) return (a.l = null), !1;
        a.zd = Yp(b, a.F);
        return !0;
      },
      $p = function (a, b, c) {
        var d = yp(b, c);
        d && (0, _.Ub)(_.xj(d)) && a.N.push({ node: b, Qi: c, text: d });
      },
      gq,
      dq,
      bq,
      Vp,
      eq,
      cq,
      aq;
    Wp.prototype.j = function (a, b) {
      var c = this;
      if (this.l && Zp(this, b)) return Tp;
      if (!this.h) {
        this.da = !!this.A.length;
        if (!this.A.length && (a = this.N.shift()))
          return (
            (this.l = {
              Mh: !1,
              node: sp(a.node, a.Qi),
              text: a.text,
              rf: _.zj(a.text),
              size: this.C ? _.Nc(a.text).length : a.text.length,
            }),
            (b.continuous = !1),
            Zp(this, b),
            Tp
          );
        a = this.A.shift() || this.G.shift();
        if (!a) return (this.l = null), Zp(this, b), Tp;
        this.s = [a.Mk];
        this.h = new sm(a.root);
      }
      this.h.next();
      if (this.h.done) return (this.h = null), (b.continuous = !1), this.j;
      a = this.h.node();
      var d = this.h.h.h;
      if (-1 == d) return aq(this), bq(a) || (b.continuous = !1), this.j;
      cq(this, a);
      d = 1 == d;
      var e =
        !!a &&
        ((3 == a.nodeType && "string" === typeof a.nodeValue) ||
          ("TITLE" == a.tagName && "string" === typeof a.value) ||
          ("TEXTAREA" == a.tagName && kn(a, "translate")) ||
          ("INPUT" == a.tagName && (nm[a.type] || kn(a, "translate"))));
      if ((e || d) && this.da && !dq(a))
        return Vp(this, a, eq(this), !0), _.qm(this.h.h), aq(this), this.j;
      if (
        d &&
        eq(this) &&
        (this.pa && $p(this, a, "title"),
        $p(this, a, "alt"),
        $p(this, a, "placeholder"),
        $p(this, a, "aria-label"),
        $p(this, a, "aria-placeholder"),
        $p(this, a, "aria-roledescription"),
        $p(this, a, "aria-valuetext"),
        tm(this.h))
      )
        for (var f = a.firstChild; f; ) {
          if (3 == f.nodeType) {
            var g = f.nodeValue.split("\n");
            if (
              2 < g.length ||
              (2 == g.length && "" != (0, _.Ub)(g[0]) && "" != (0, _.Ub)(g[1]))
            ) {
              f.nodeValue = g[0];
              for (var h = 1; h < g.length; ++h) {
                var l = _.Rc(a).createElement("font");
                this.K.push(l);
                Hj(l, f);
                f = l;
                Hj(_.Rc(a).createTextNode("\n" + g[h]), f);
                f = f.nextSibling;
              }
            }
          }
          f = f.nextSibling;
        }
      a.shadowRoot &&
        Array.from(a.shadowRoot.childNodes).forEach(function (n) {
          Vp(c, n, eq(c));
        });
      if (e) {
        _.qm(this.h.h);
        if (eq(this)) {
          var m = yp(a);
          if (
            (0, _.Ub)(_.xj(m)) &&
            ((this.l = {
              Mh: !0,
              node: sp(a),
              text: m,
              rf: _.zj(m),
              size: this.C ? _.Nc(m).length : m.length,
            }),
            Zp(this, b))
          )
            return aq(this), Tp;
        }
        aq(this);
        return this.j;
      }
      if (d) {
        if (_.fq(a) || (!a.firstChild && "IFRAME" != a.tagName))
          return (
            (b.continuous = b.continuous && !!mm[a.tagName]),
            _.qm(this.h.h),
            aq(this),
            this.j
          );
        if ("IFRAME" == a.tagName) {
          try {
            (a.src.match(/https?:\/\//) &&
              _.pf(a.src.match(_.of)[3] || null) != window.location.hostname) ||
              ((m = _.Kj(a).documentElement) && Vp(this, m, eq(this)));
          } catch (n) {}
          b.continuous = !1;
          _.qm(this.h.h);
          aq(this);
          return this.j;
        }
        eq(this) && bq(a)
          ? this.J && "A" == a.tagName && a.href && this.J(a)
          : (b.continuous = !1);
        return this.j;
      }
      _.qm(this.h.h);
      aq(this);
      return this.j;
    };
    _.fq = function (a) {
      return (
        xp(a) ||
        (3 != a.nodeType &&
          (!a.tagName ||
            lm[a.tagName] ||
            mm[a.tagName] ||
            kn(a, "skiptranslate")))
      );
    };
    gq = function (a) {
      var b = _.Rc(a);
      return b.defaultView && b.defaultView.getComputedStyle
        ? b.defaultView.getComputedStyle(a, null)
        : a.currentStyle;
    };
    dq = function (a) {
      return 3 == a.nodeType
        ? !0
        : 1 != a.nodeType
        ? !1
        : a.offsetWidth && a.offsetHeight
        ? !0
        : ((a = gq(a)), !!a && "none" != a.display && "hidden" != a.visibility);
    };
    bq = function (a) {
      if (3 == a.nodeType) return !0;
      if (1 != a.nodeType) return !1;
      var b = gq(a);
      return !!km[a.tagName] && (!b || !b.display || "inline" == b.display);
    };
    Vp = function (a, b, c, d) {
      (d ? a.G : a.A).push({ root: b, Mk: void 0 === c || c });
    };
    eq = function (a) {
      return a.s[a.s.length - 1];
    };
    cq = function (a, b) {
      b =
        !xp(b) &&
        ((b.nodeType == Yi && eq(a)) ||
          (!(
            kn(b, "notranslate") ||
            (b.attributes &&
              b.attributes.translate &&
              "no" == b.attributes.translate.value)
          ) &&
            (kn(b, "translate") ||
              (!!b.attributes &&
                !!b.attributes.translate &&
                "yes" == b.attributes.translate.value) ||
              eq(a))));
      a.s.push(b);
    };
    aq = function (a) {
      a.s.pop();
    };
    _.Rl.attach(5762, Wp.prototype, { Xj: 1 });
    var hq = function () {
      _.A.call(this);
      this.h = [];
    };
    _.x(hq, _.A);
    hq.prototype.restore = function () {
      _.Uf(this.j, 0, this);
    };
    hq.prototype.j = function () {
      for (var a = 0; a < this.h.length; ++a) _.Ij(this.h[a]);
      this.h = [];
    };
    hq.prototype.L = function () {
      _.A.prototype.L.call(this);
      this.restore();
    };
    var iq = function (a) {
      var b = new Set();
      a.forEach(function (c) {
        if (Jj(c)) b.add(c);
        else {
          a: {
            var d;
            if (_.sc && (d = c.parentElement)) {
              c = d;
              break a;
            }
            d = c.parentNode;
            c = Jj(d) ? d : null;
          }
          null != c && b.add(c);
        }
      });
      return b;
    };
    var jq = function (a) {
      this.j = !0;
      this.o = a;
      this.l = !1;
      this.h = [];
    };
    jq.prototype.Ba = function () {
      return this.h.join("");
    };
    var kq = function (a, b) {
        this.s = a;
        this.o = !0;
        this.l = b;
        this.h = null;
        this.j = 0;
      },
      lq = function (a, b) {
        return a.o ? (b((0, _.y)(a.A, a), a.s, a.l ? "en" : ""), !0) : !1;
      };
    kq.prototype.A = function (a, b, c) {
      this.h = b;
      this.j = c;
      a();
    };
    var mq = function (a, b) {
        this.o = a;
        this.J = !!b;
        this.h = this.F = 0;
        this.s = this.l = -1;
        this.A = this.C = this.j = 0;
      },
      pq = function (a, b, c) {
        a.J && (b -= 9);
        for (var d = "", e = 0, f = a.F; f < a.o.length; ++f) {
          var g = a.o.charAt(f),
            h = g.charCodeAt(0);
          e++;
          a.j += a.J
            ? 127 >= h
              ? 32 >= h || nq[h]
                ? 3
                : 1
              : 2047 >= h ||
                (55296 <= h && 56319 >= h) ||
                (56320 <= h && 57343 >= h)
              ? 6
              : 9
            : 1;
          h = a.j >= b;
          oq[g]
            ? ((a.s = f), (a.C = a.j), (h = h || e > c))
            : " " == g && ((a.l = f), (a.A = a.j), (h = h || e > c));
          if (h)
            return (
              0 <= a.s
                ? ((d = a.o.substring(a.h, a.s + 1)),
                  (a.j -= a.C),
                  (a.h = a.s + 1),
                  a.s >= a.l ? ((a.l = -1), (a.A = 0)) : (a.A -= a.C),
                  (a.s = -1),
                  (a.C = 0))
                : 0 <= a.l
                ? ((d = a.o.substring(a.h, a.l + 1)),
                  (a.j -= a.A),
                  (a.h = a.l + 1),
                  (a.l = -1),
                  (a.A = 0))
                : ((d = a.o.substring(a.h, f + 1)),
                  (a.j = 0),
                  (a.h = f + 1),
                  (a.s = a.l = -1),
                  (a.A = a.C = 0)),
              (a.F = f + 1),
              d
            );
        }
        a.h < a.o.length && ((d = a.o.substring(a.h)), (a.h = a.o.length));
        return d;
      },
      oq = _.Dl(". , ; : \\? !".split(" ")),
      nq = _.Dl([
        34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93,
        94, 96, 123, 124, 125, 127,
      ]);
    var qq = function (a, b, c, d, e, f) {
        this.C = d || function () {};
        this.oa = f || function () {};
        this.O = !!e;
        this.l = a.h.Pf;
        this.o = 0;
        this.da = function () {};
        this.J = c;
        this.G = this.j = this.s = 0;
        this.h = null;
        this.K = 0;
        this.ta = !1;
        this.ma = a.h.Nf;
        this.pa = [];
        this.U = 0;
        this.pb = a.h.fe;
        this.A = im(a);
        this.La = this.O ? 1 : 6;
        this.Ma = a.h.hg;
        this.X = b;
        this.F = [];
        this.Z = a;
      },
      rq = function (a, b) {
        var c = 0;
        a.da = (0, _.y)(function () {
          ++c == this.F.length && b();
        }, a);
      },
      sq = function (a, b, c) {
        a.C = function () {};
        a.X = b;
        a.h = null;
        a.U = 0;
        a.F = [];
        a.da = function () {};
        a.J = c;
      },
      tq = function (a, b, c) {
        if (0 == a.j && ((a.j = b ? 860 : a.A), !c || c <= a.A)) {
          a.s = a.j;
          return;
        }
        do (b = a.j), a.j < a.A && ((a.j *= a.La), a.j > a.A && (a.j = a.A));
        while (b != a.j && c && a.j < c);
        a.s = a.j;
      },
      uq = function (a, b) {
        var c = null != b,
          d = !c && !a.ta;
        (d || c) && a.C(100, d, b);
      },
      vq = function (a) {
        return a.pb ? a.h.U : a.h.Ba().length;
      },
      wq = function (a, b, c, d, e) {
        return new Wp(
          a.X.shift(),
          { Ok: a.pb, Qj: b, Yh: !0, Nk: !!c },
          function () {
            var f = Array.prototype.slice.call(arguments);
            return new up(
              f.shift(),
              f.shift(),
              f.shift(),
              f.shift(),
              f.shift(),
              c,
              d
            );
          },
          a.J,
          e
        );
      },
      zq = function (a, b, c) {
        if (0 < a.ma && xq(b) >= a.ma) return !0;
        if (vq(a) > a.j) {
          if (0 < xq(b)) return !0;
          tq(a, c, vq(a));
          for (
            var d = a.h.Ba(), e = new mq(d, a.pb), f;
            (f = pq(e, a.j, a.l));

          )
            if (
              (b.l.push(new kq([f], !1)),
              (a.o += f.length),
              (a.l -= f.length),
              0 >= a.l)
            ) {
              b.J = d.substring(e.h);
              break;
            } else tq(a, c);
          yq(b, a.h, !0);
          a.h = null;
          return !0;
        }
        if (vq(a) > a.s) return !0;
        yq(b, a.h, !0);
        a.s -= vq(a) + a.Ma;
        a.o += a.h.G;
        a.l -= a.h.G;
        a.h = null;
        return !1;
      };
    var Aq = function (a, b) {
      _.A.call(this);
      this.o = b;
      this.l = { rootMargin: a };
      this.h = new IntersectionObserver((0, _.y)(this.j, this), this.l);
    };
    _.x(Aq, _.A);
    Aq.prototype.L = function () {
      _.A.prototype.L.call(this);
      this.h = null;
    };
    Aq.prototype.j = function (a) {
      for (var b = 0; b < a.length; b++)
        if (0 < a[b].intersectionRatio) {
          this.o();
          break;
        }
    };
    var Bq = function (a, b, c, d, e, f, g, h) {
        this.l = a;
        this.h = b;
        this.C = [];
        this.J = null;
        this.j = c;
        this.o = d;
        this.W = e;
        this.K = f;
        this.O = g;
        this.F = this.s = null;
        this.A = h || null;
        this.da = this.N = !1;
        this.G = {};
      },
      Cq = function (a) {
        for (var b = new Set(), c = 0; c < a.length; c++)
          Dp(a[c]).forEach(function (d) {
            return b.add(d);
          });
        return b;
      };
    Bq.prototype.trackVisibility = function (a) {
      a = this.s = new Aq("200px", (0, _.y)(this.pb, this, a));
      var b = iq(Cq([].concat(this.h, this.C)));
      Vj(b, (0, _.y)(a.h.observe, a.h));
      a = this.F = new Aq("0px", (0, _.y)(this.X, this));
      b = iq(Cq([].concat(this.h, this.C)));
      Vj(b, (0, _.y)(a.h.observe, a.h));
    };
    Bq.prototype.pb = function (a) {
      this.s && (this.s.h.disconnect(), (this.s = null));
      a();
    };
    Bq.prototype.X = function () {
      this.N = !0;
      Dq(this);
      !this.da && this.A && this.A.o();
    };
    var Dq = function (a) {
      a.F && (a.F.h.disconnect(), (a.F = null));
    };
    Bq.prototype.pa = function () {
      this.N && !this.da && this.A && this.A.l();
      this.s && (this.s.h.disconnect(), (this.s = null));
      Dq(this);
    };
    var yq = function (a, b, c) {
        c ? (a.h.push(b), (a.G[b.Ba()] = !0)) : a.C.push(b);
      },
      xq = function (a) {
        return a.h.length + a.C.length;
      },
      Eq = function (a) {
        if (0 == a.l.length) {
          for (var b = [], c = 0; c < a.h.length; ++c) b.push(a.h[c].Ba());
          a.l.push(new kq(b, !1));
        }
      };
    Bq.prototype.translate = function (a) {
      function b() {
        d++;
        d == c && e();
      }
      Eq(this);
      for (
        var c = 0,
          d = 0,
          e = function () {},
          f = this.j,
          g = this.o,
          h = this.W,
          l = this.K,
          m = this.O,
          n = 0;
        n < this.l.length;
        ++n
      )
        lq(this.l[n], function (p, r, q) {
          p = f.Z.translate(_.tb(p, b), r, q || g, h, ++f.U, l, m, f.O);
          f.pa.push(p);
          return p;
        }) && c++;
      0 != c && (e = Rp(a));
      return c;
    };
    var Fq = function (a, b) {
      _.A.call(this);
      this.h = [];
      this.j = [];
      this.o = a;
      this.W = b;
    };
    _.x(Fq, _.A);
    Fq.prototype.l = function (a) {
      var b = (0, _.Ub)(a.href);
      0 == b.indexOf("javascript:") ||
        0 <= b.indexOf("#") ||
        (this.j.push(a.href),
        this.h.push(a),
        (a.href = b + "#googtrans/" + this.o + "/" + this.W));
    };
    Fq.prototype.L = function () {
      _.A.prototype.L.call(this);
      this.restore();
    };
    Fq.prototype.restore = function () {
      if (this.h.length) {
        for (var a = 0; a < this.h.length; ++a) this.h[a].href = this.j[a];
        this.h = [];
        this.j = [];
      }
    };
    var Gq = function (a, b) {
      _.A.call(this);
      this.h = a;
      this.j = _.nf.test(b) ? "translated-rtl" : "translated-ltr";
      a = [].concat(this.h);
      for (b = 0; b < a.length; ++b) Jj(a[b]) && _.ln(a[b], this.j);
    };
    _.x(Gq, _.A);
    Gq.prototype.L = function () {
      _.A.prototype.L.call(this);
      this.restore();
    };
    Gq.prototype.restore = function () {
      for (var a = [].concat(this.h), b = 0; b < a.length; ++b)
        Jj(a[b]) && _.nn(a[b], this.j);
    };
    _.Hq = function (a, b, c, d, e, f, g, h, l, m) {
      _.A.call(this);
      this.C = a;
      this.od = b;
      this.ya = c || null;
      this.ma = m || null;
      this.N = null;
      this.Bb = !!d;
      this.rd = e || "transparent";
      this.qd = !!f;
      this.J = [];
      this.ta = this.G = this.h = !1;
      this.j = h || new _.Ep();
      this.ge = !h;
      this.oa = g || Ip.nc();
      this.Sb = new hq();
      this.La = this.Ga = this.K = !1;
      this.Tb = this.l = 0.5;
      this.Ub = 0.01;
      this.F = new _.Kp(this.l);
      this.U = (this.A = this.Z = !!l)
        ? new MutationObserver((0, _.y)(this.vj, this))
        : null;
      this.W = this.o = null;
      _.D(window, "blur", this.uh, !0, this);
      _.D(window, "focus", this.vh, !0, this);
    };
    _.x(_.Hq, _.A);
    _.k = _.Hq.prototype;
    _.k.kb = function () {
      return this.o ? this.o : "";
    };
    _.k.na = function () {
      return this.W ? this.W : "";
    };
    _.k.Xi = function (a) {
      this.Tj.apply(this, arguments);
      this.s && this.s(0, !1, 1);
    };
    _.k.ah = function (a) {
      this.Uj.apply(this, arguments);
      this.s && this.s(0, !1, 1);
    };
    _.k.Yi = function (a) {
      this.Vj.apply(this, arguments);
      this.s && this.s(0, !1, 1);
    };
    _.k.Zi = function (a) {
      this.Wj.apply(this, arguments);
      this.s && this.s(0, !1, 1);
    };
    _.k.translate = function (a, b, c, d, e) {
      if (d || a != this.o || b != this.W)
        Iq(this), this.ge && (this.j = new _.Ep());
      else if (this.h) return;
      this.s = c;
      this.de = e;
      this.A = this.Z;
      this.U &&
        this.U.observe(document.body, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        });
      this.h = !0;
      this.o = a;
      this.W = b;
      this.Bb && (this.N = new Fq(a, b));
      this.La = "auto" == this.o;
      this.ya && ((c = this.ya), a && (c.A = a), b && (c.C = b));
      this.Ma = new Gq(this.C, this.W);
      this.O = Jq(this);
      (a = this.C instanceof Node ? this.C : null) && Kq(a, this.W);
    };
    var Jq = function (a) {
      var b = new Mp(a, a.oa);
      Np(b, a.th);
      Pp(b, (0, _.y)(a.Xi, a));
      Qp(b, new qq(a.od, [].concat(a.C), a.oa, a.s, a.A, a.de));
      return b;
    };
    _.Hq.prototype.restore = function () {
      Iq(this);
      this.Sb.restore();
      var a = this.C instanceof Node ? this.C : null;
      a && Kq(a, this.kb());
    };
    _.Hq.prototype.L = function () {
      _.A.prototype.L.call(this);
      this.restore();
      _.Dd(window, "blur", this.uh, !0, this);
      _.Dd(window, "focus", this.vh, !0, this);
    };
    var Lq = function (a, b, c, d) {
      var e = a.j.cc(),
        f = new Mp(a, b.J);
      b.F.push(f);
      Op(f, b.da);
      tq(b, e);
      Np(f, d || a.ph);
      b = c || new Bq([], [], b, a.kb(), a.na(), a.ta, a.G, a.ma);
      Pp(f, a.Bj, a);
      a.A && Op(f, b.pa, b);
      Qp(f, b);
    };
    _.k = _.Hq.prototype;
    _.k.Bj = function (a, b, c) {
      c.pa();
      this.G ? this.Zi(a) : this.Yi(a);
      c.j.da();
    };
    _.k.vh = function () {
      this.K = !1;
      this.X = 0;
      Jp(this.F, this.l);
    };
    _.k.uh = function (a) {
      a.target == window && ((this.K = !0), (this.X = 0), Jp(this.F, 0.01));
    };
    _.k.vj = function (a) {
      if (this.h && this.A) {
        for (var b = 0; b < a.length; b++)
          if (
            a[b].target &&
            a[b].target.className &&
            "string" === typeof a[b].target.className &&
            (0 <= a[b].target.className.indexOf("translate") ||
              0 == a[b].target.className.indexOf("goog-"))
          )
            return;
        this.oa.add((0, _.y)(this.wk, this));
      }
    };
    _.k.wk = function () {
      this.G = !0;
      this.O.stop();
      this.O = Jq(this);
      return !1;
    };
    _.k.th = function (a, b) {
      rq(b, Rp(a));
      Lq(this, b);
      return this.Ej;
    };
    _.k.Ej = function (a, b) {
      if (!this.h) return Tp;
      if (!Sp(a)) return Up;
      if (!this.A)
        for (a = 0; a < this.J.length; ++a) {
          var c = (0, _.y)(this.Rg, this, b, this.J[a]);
          b.J.add(c);
        }
      return this.Dj;
    };
    _.k.oh = function (a, b) {
      if (this.X && !this.K) {
        a = new Date().getTime() - this.X;
        var c = this.l;
        900 > a && 0.01 < c
          ? (c = Math.max(0.9 * c, 0.01))
          : 1100 < a && 0.5 > c && (c = Math.min(1.5 * c, 0.5));
        this.l = c;
        this.Ga ? (this.Ub = 0.01) : (this.Tb = this.l);
      }
      this.G = this.h = !0;
      this.X = new Date().getTime();
      this.ee !=
      (a =
        document.body.innerText ||
        document.body.textContent ||
        document.body.innerHTML)
        ? ((this.ee = a), (a = !0))
        : (a = !1);
      a
        ? ((this.Ga = !1),
          (this.l = this.Tb),
          this.K || Jp(this.F, this.l),
          sq(b, [].concat(this.C), this.F),
          (a = new Mp(this, this.F)),
          Np(a, this.th),
          Pp(a, (0, _.y)(this.ah, this)),
          Qp(a, b),
          (this.O = a))
        : ((this.Ga = !0),
          (this.l = this.Ub),
          this.K || Jp(this.F, this.l),
          (a = new Mp(this, this.F)),
          Np(a, this.oh),
          Pp(a, (0, _.y)(this.ah, this)),
          Qp(a, b),
          (this.O = a));
      return Tp;
    };
    _.k.Dj = function (a, b) {
      if (!this.h) return Tp;
      this.G = this.h = !1;
      this.La ? uq(b, !0) : (uq(b), b.oa(b.o));
      if (this.qd) return this.oh;
      for (a = 0; a < b.F.length; ++a) b.F[a].stop();
      for (a = 0; a < b.pa.length; ++a) hm(b.Z, b.pa[a]);
      return Tp;
    };
    var Nq = function (a, b, c) {
        a: {
          var d = Mq(a),
            e = a.ya,
            f = a.rd,
            g = a.Sb.h;
          b = Rp(b);
          if (!c.N) {
            if (0 == c.X.length) {
              0 == c.o && 0 == c.U && c.C(0, !0);
              c = !1;
              break a;
            }
            c.N = wq(c, d, e, f, g);
          }
          c.Ga = !0;
          Xp(c.N, c.l, c.j, b);
          c = !0;
        }
        return c ? a.ph : a.le;
      },
      Mq = function (a) {
        return a.Bb ? (0, _.y)(a.N.l, a.N) : function () {};
      };
    _.k = _.Hq.prototype;
    _.k.ph = function (a, b) {
      if (!this.h) return Tp;
      var c = b.j;
      if (null == c.h) {
        if (!c.Ga) return Nq(this, a, b.j);
        if (!Sp(a)) return Up;
        c.Ga = !1;
        c.h = c.N.zd || null;
        var d = c.h ? c.h : (c.N = null);
        if (!d) return Nq(this, a, b.j);
        this.J.push(d);
        var e = d.Ba();
        if (this.j.has(e, !this.A) || (null != b.G[e] && b.G[e]))
          return (
            (e = c.h.G),
            (c.o += e),
            (c.l -= e),
            (c.h = null),
            this.A && yq(b, d, !1),
            Nq(this, a, b.j)
          );
        this.j.h[d.Ba()] = null;
      }
      0 < xq(b) && Jp(this.F, 0.5);
      d = this.j.cc();
      return zq(c, b, d) ? this.le : Nq(this, a, b.j);
    };
    _.k.le = function (a, b) {
      if (!this.h || 0 == xq(b)) return Tp;
      Lq(this, b.j);
      return this.A
        ? (b.trackVisibility(Rp(a)), this.Fj)
        : 0 == b.translate(a)
        ? Tp
        : this.rh;
    };
    _.k.Fj = function (a, b) {
      return this.h ? (Sp(a) ? (0 == b.translate(a) ? Tp : this.rh) : Up) : Tp;
    };
    _.k.Rg = function (a, b) {
      b.o && this.j.remove(b.l);
      if (!this.h) return !1;
      if (this.j.has(b.Ba(), !1)) {
        var c = this.j;
        if (c.has(b.l, !1)) {
          var d = b.l,
            e = c.h[d];
          e || ((e = c.j[d]), (c.h[d] = e));
          b.j = e;
          b.O = !0;
        } else c.remove(b.l), (b.o = !0);
        Bp(b);
      } else if (((c = this.j), b.o)) c.remove(b.l);
      else if (b.F) {
        d = b.F.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
        b.O = !0;
        delete b.F;
        b.F = null;
        b.j = [];
        e = _.Zc(document, "div");
        _.S(e, !1);
        d = _.Hc(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
        void 0 !== e.tagName && _.vi(e);
        e.innerHTML = _.Gc(d);
        document.body.appendChild(e);
        d = [];
        var f;
        for (f = e.firstChild; f; f = f.nextSibling)
          if ("I" == f.tagName) var g = zp(b, Qj(f), f.innerHTML);
          else if ("B" == f.tagName) {
            g || (g = zp(b, "", ""));
            if (1 == b.h.length) Fp(g.qa, d, 0, f);
            else {
              var h = f;
              var l = b.h;
              g = g.qa;
              for (var m = [], n = h.firstChild; n; n = p) {
                var p = n.nextSibling;
                Gp(n);
              }
              for (p = h.firstChild; p; p = p.nextSibling)
                p.attributes && p.attributes.i
                  ? ((h = parseInt(p.attributes.i.nodeValue, 10)),
                    !isNaN(h) &&
                      0 <= h &&
                      h < l.length &&
                      (l[h].Le && m[h]
                        ? (m[h].la +=
                            p.firstChild && 3 == p.firstChild.nodeType
                              ? p.firstChild.nodeValue
                              : Qj(p))
                        : (m[h] = Fp(g, d, h, p))))
                  : 3 == p.nodeType && g.push({ ha: -1, la: Dj(p.nodeValue) });
              null != g &&
                0 < g.length &&
                -1 == g[0].ha &&
                (1 == g.length
                  ? (g[0].ha = 0)
                  : ((g[1].la = g[0].la + g[1].la), g.shift()));
            }
            g = void 0;
          }
        f = b.j;
        for (l = 0; l < f.length - 1; ++l)
          (g = f[l]),
            (m = yj(g.qa[g.qa.length - 1].la)),
            (m = m.charCodeAt(m.length - 1)),
            (12288 <= m && 12351 >= m) ||
              (65280 <= m && 65519 >= m) ||
              (g.qa[g.qa.length - 1].la += " ");
        _.Ij(e);
        for (e = 0; e < b.h.length; ++e)
          e < d.length &&
            e < b.C.length &&
            null != d[e] &&
            ((f = b.C[e]),
            (l = d[e].start),
            null != l &&
              ((g = f.substring(
                0,
                f.length - f.replace(/^[\s\xa0]+/, "").length
              )),
              " " == g && (g = ""),
              g && (l.la = g + l.la.replace(/^[\s\xa0]+/, ""))),
            (l = d[e].end),
            null != l &&
              ((f = f.substring(yj(f).length)),
              " " == f && (f = ""),
              f && (l.la = yj(l.la) + f)));
        1 != b.j.length || b.j[0].Wf || (b.j[0].Wf = b.l);
        c.write(b.l, b.j);
        Bp(b);
      }
      b.N || (this.La = !1);
      c = b.o ? !0 : void 0;
      a.K += b.G;
      null != c && (a.ta = !0);
      b = Math.min(Math.floor((100 * a.K) / a.o), 100);
      if (a.G != b || c)
        (a.G = b), a.O ? (a.C(a.G, !0, c), a.oa(a.K)) : a.C(a.G, !1, c);
      return !1;
    };
    _.k.rh = function (a, b) {
      if (!this.h) return Tp;
      if (!Sp(a)) return Up;
      if (1 < xq(b)) {
        a = b.l[0];
        var c = b.h;
        if (a.l || 0 == c.length || null == a.h || 0 == a.h.length) a = null;
        else {
          for (var d = [], e = [], f = 0; f < a.h.length && f < c.length; ++f) {
            var g = a.h[f];
            (g && g[0] && 200 == g[1]) || (e.push(c[f]), d.push(a.s[f]));
          }
          a = 0 < e.length ? { xk: new kq(d, !0), yk: e } : null;
        }
        a = a ? new Bq([a.xk], a.yk, b.j, b.o, b.W, b.K, b.O, b.A) : null;
        null != a && Lq(this, b.j, a, this.le);
      } else {
        a = !1;
        for (c = 0; c < b.l.length; ++c)
          (d = b.l[c]),
            d.l || (200 == d.j && d.h && d.h[0])
              ? (d = d.o = !1)
              : ((d.l = !0), (d = d.o = !0)),
            (a = d || a);
        if (a) return this.le;
      }
      d = this.kb();
      a = this.na();
      if (1 < b.h.length)
        if (((c = b.l[0]), (e = "auto" == d), (d = b.h), 200 == c.j))
          for (f = 0; f < c.h.length && f < d.length; ++f)
            if ((g = c.h[f]) && 200 == g[1]) {
              var h = g[2],
                l = d[f],
                m = l,
                n = null != h && h == a;
              m.F = g[0];
              void 0 !== n && (m.K = n);
              l.N = e && null == h;
            } else d[f].o = !0;
        else for (a = 0; a < d.length; ++a) d[a].o = !0;
      else {
        c = new jq("auto" == d);
        for (d = 0; d < b.l.length; ++d)
          (f = b.l[d]),
            (e = a),
            200 == f.j && f.h && f.h[0]
              ? ((f = f.h[0]),
                c.h.push(f[0]),
                (f = f[2]),
                (c.j = c.j && null != f && f == e),
                null != f && (c.o = !1))
              : 500 != f.j && (c.l = !0);
        null != b.J && (c.h.push(b.J), (b.J = null));
        if ((a = b.h[0]))
          (d = c.j),
            (a.F = c.Ba()),
            void 0 !== d && (a.K = d),
            (a.N = c.o),
            (a.o = c.l);
      }
      if (this.A) {
        a = (0, _.y)(this.Rg, this);
        for (c = 0; c < b.h.length; c++) a(b.j, b.h[c]);
        for (c = 0; c < b.C.length; c++) a(b.j, b.C[c]);
        Dq(b);
        b.da = !0;
        b.N && b.A && b.A.l();
      }
      return Tp;
    };
    var Iq = function (a) {
        a.U && a.U.disconnect();
        a.ma && a.ma.reset();
        a.h && (a.O.stop(), (a.h = !1), (a.G = !1));
        if (a.J.length) {
          for (var b = 0; b < a.J.length; ++b) a.J[b].P();
          a.J = [];
        }
        null != a.N && (a.N.restore(), (a.N = null));
        null != a.Ma && (a.Ma.restore(), (a.Ma = null));
      },
      Kq = function (a, b) {
        a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b);
      };
    _.Rl.attach(3046, _.Hq.prototype, { Tj: 1, Vj: 2, Uj: 3, Wj: 4 });
    var Li = function (a) {
      if (a && ((a = String(a)), (a = a.split(".")), a.length)) {
        for (var b = window, c = 0; c < a.length; ++c) {
          var d = a[c];
          if (!(d && d in b)) return;
          b = b[d];
        }
        return b;
      }
    };
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.na("el_main");

    /*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
    var Sq = function (a, b, c, d) {
        a = _.Gh(a, b, c);
        Array.isArray(a) || (a = _.Eh);
        b = _.Ig(a);
        b & 1 || _.Kg(a);
        d && (b & 2 || _.Hg(a, 2));
        return a;
      },
      Tq = function (a, b) {
        return _.Wg(b);
      },
      Vq = function (a, b) {
        b.Cd && (a.Cd = b.Cd.slice());
        var c = b.Va;
        if (c) {
          b = b.ub;
          for (var d in c) {
            var e = c[d];
            if (e) {
              var f = !(!b || !b[d]),
                g = +d;
              if (Array.isArray(e)) {
                if (e.length)
                  for (
                    f = Uq(a, e[0].constructor, g, f), g = 0;
                    g < Math.min(f.length, e.length);
                    g++
                  )
                    Vq(f[g], e[g]);
              } else throw Error("ja`" + _.ob(e) + "`" + e);
            }
          }
        }
      },
      Xq = function (a) {
        if (!a) return a;
        if ("object" === typeof a) {
          if (_.Tg && null != a && a instanceof Uint8Array)
            return new Uint8Array(a);
          if (a.ze === _.Zg) return Wq(a);
        }
        return a;
      },
      Yq = function (a) {
        var b = {};
        a.forEach(function (c) {
          b[c[0]] = c[1];
        });
        return function (c) {
          return (
            b[
              c.find(function (d) {
                return d in b;
              })
            ] || ""
          );
        };
      },
      Zq = function (a) {
        var b = _.Ba();
        if ("Internet Explorer" === a) {
          if (_.Ca())
            if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
            else {
              a = "";
              var c = /MSIE +([\d\.]+)/.exec(b);
              if (c && c[1])
                if (((b = /Trident\/(\d.\d)/.exec(b)), "7.0" == c[1]))
                  if (b && b[1])
                    switch (b[1]) {
                      case "4.0":
                        a = "8.0";
                        break;
                      case "5.0":
                        a = "9.0";
                        break;
                      case "6.0":
                        a = "10.0";
                        break;
                      case "7.0":
                        a = "11.0";
                    }
                  else a = "7.0";
                else a = c[1];
              b = a;
            }
          else b = "";
          return b;
        }
        var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        c = [];
        for (var e; (e = d.exec(b)); ) c.push([e[1], e[2], e[3] || void 0]);
        b = Yq(c);
        switch (a) {
          case "Opera":
            if (_.u("Opera")) return b(["Version", "Opera"]);
            if (_.u("OPR")) return b(["OPR"]);
            break;
          case "Microsoft Edge":
            if (_.u("Edge")) return b(["Edge"]);
            if (_.u("Edg/")) return b(["Edg"]);
            break;
          case "Chromium":
            if (_.xg()) return b(["Chrome", "CriOS", "HeadlessChrome"]);
        }
        return ("Firefox" === a && _.wg()) ||
          ("Safari" === a && _.yg()) ||
          ("Android Browser" === a && _.zg()) ||
          ("Silk" === a && _.u("Silk"))
          ? ((b = c[2]) && b[1]) || ""
          : "";
      },
      $q = function (a) {
        a = Zq(a);
        if ("" === a) return NaN;
        a = a.split(".");
        return 0 === a.length ? NaN : Number(a[0]);
      },
      ar = function () {
        var a = _.Ba(),
          b = "";
        _.u("Windows")
          ? ((b = /Windows (?:NT|Phone) ([0-9.]+)/),
            (b = (a = b.exec(a)) ? a[1] : "0.0"))
          : _.Fa()
          ? ((b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
            (b = (a = b.exec(a)) && a[1].replace(/_/g, ".")))
          : _.u("Macintosh")
          ? ((b = /Mac OS X ([0-9_.]+)/),
            (b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10"))
          : -1 != _.Ba().toLowerCase().indexOf("kaios")
          ? ((b = /(?:KaiOS)\/(\S+)/i), (b = (a = b.exec(a)) && a[1]))
          : _.u("Android")
          ? ((b = /Android\s+([^\);]+)(\)|;)/), (b = (a = b.exec(a)) && a[1]))
          : _.u("CrOS") &&
            ((b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
            (b = (a = b.exec(a)) && a[1]));
        return 0 <= _.hj(b || "", 12);
      },
      br = function (a) {
        return _.Hh(a, this.kf, this.h, !0);
      },
      cr = function () {
        function a() {
          e[0] = 1732584193;
          e[1] = 4023233417;
          e[2] = 2562383102;
          e[3] = 271733878;
          e[4] = 3285377520;
          n = m = 0;
        }
        function b(p) {
          for (var r = g, q = 0; 64 > q; q += 4)
            r[q / 4] =
              (p[q] << 24) | (p[q + 1] << 16) | (p[q + 2] << 8) | p[q + 3];
          for (q = 16; 80 > q; q++)
            (p = r[q - 3] ^ r[q - 8] ^ r[q - 14] ^ r[q - 16]),
              (r[q] = ((p << 1) | (p >>> 31)) & 4294967295);
          p = e[0];
          var w = e[1],
            Q = e[2],
            R = e[3],
            Da = e[4];
          for (q = 0; 80 > q; q++) {
            if (40 > q)
              if (20 > q) {
                var ea = R ^ (w & (Q ^ R));
                var fe = 1518500249;
              } else (ea = w ^ Q ^ R), (fe = 1859775393);
            else
              60 > q
                ? ((ea = (w & Q) | (R & (w | Q))), (fe = 2400959708))
                : ((ea = w ^ Q ^ R), (fe = 3395469782));
            ea =
              ((((p << 5) | (p >>> 27)) & 4294967295) + ea + Da + fe + r[q]) &
              4294967295;
            Da = R;
            R = Q;
            Q = ((w << 30) | (w >>> 2)) & 4294967295;
            w = p;
            p = ea;
          }
          e[0] = (e[0] + p) & 4294967295;
          e[1] = (e[1] + w) & 4294967295;
          e[2] = (e[2] + Q) & 4294967295;
          e[3] = (e[3] + R) & 4294967295;
          e[4] = (e[4] + Da) & 4294967295;
        }
        function c(p, r) {
          if ("string" === typeof p) {
            p = unescape(encodeURIComponent(p));
            for (var q = [], w = 0, Q = p.length; w < Q; ++w)
              q.push(p.charCodeAt(w));
            p = q;
          }
          r || (r = p.length);
          q = 0;
          if (0 == m)
            for (; q + 64 < r; ) b(p.slice(q, q + 64)), (q += 64), (n += 64);
          for (; q < r; )
            if (((f[m++] = p[q++]), n++, 64 == m))
              for (m = 0, b(f); q + 64 < r; )
                b(p.slice(q, q + 64)), (q += 64), (n += 64);
        }
        function d() {
          var p = [],
            r = 8 * n;
          56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
          for (var q = 63; 56 <= q; q--) (f[q] = r & 255), (r >>>= 8);
          b(f);
          for (q = r = 0; 5 > q; q++)
            for (var w = 24; 0 <= w; w -= 8) p[r++] = (e[q] >> w) & 255;
          return p;
        }
        for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l)
          h[l] = 0;
        var m, n;
        a();
        return {
          reset: a,
          update: c,
          digest: d,
          Vi: function () {
            for (var p = d(), r = "", q = 0; q < p.length; q++)
              r +=
                "0123456789ABCDEF".charAt(Math.floor(p[q] / 16)) +
                "0123456789ABCDEF".charAt(p[q] % 16);
            return r;
          },
        };
      },
      dr = function (a, b, c) {
        _.zh(
          a.url,
          function (d) {
            d = d.target;
            d.se() ? b(d.Bd()) : c(d.Sc());
          },
          a.vk,
          a.body,
          a.dg,
          a.rg,
          a.withCredentials
        );
      },
      er = function () {
        this.o = "https://play.google.com/log?format=json&hasfast=true";
        this.A = dr;
        this.h = !1;
      },
      fr = function (a) {
        for (var b = a.length; 0 <= --b; ) a[b] = 0;
      },
      gr = function (a, b, c, d, e) {
        this.fi = a;
        this.fj = b;
        this.ej = c;
        this.Wi = d;
        this.ck = e;
        this.xh = a && a.length;
      },
      hr = function (a, b) {
        this.Yg = a;
        this.bd = 0;
        this.uc = b;
      },
      ir = function (a, b) {
        a.ra[a.pending++] = b & 255;
        a.ra[a.pending++] = (b >>> 8) & 255;
      },
      jr = function (a, b, c) {
        a.Ja > 16 - c
          ? ((a.Ta |= (b << a.Ja) & 65535),
            ir(a, a.Ta),
            (a.Ta = b >> (16 - a.Ja)),
            (a.Ja += c - 16))
          : ((a.Ta |= (b << a.Ja) & 65535), (a.Ja += c));
      },
      kr = function (a, b, c) {
        jr(a, c[2 * b], c[2 * b + 1]);
      },
      lr = function (a, b) {
        var c = 0;
        do (c |= a & 1), (a >>>= 1), (c <<= 1);
        while (0 < --b);
        return c >>> 1;
      },
      mr = function (a, b, c) {
        var d = Array(16),
          e = 0,
          f;
        for (f = 1; 15 >= f; f++) d[f] = e = (e + c[f - 1]) << 1;
        for (c = 0; c <= b; c++)
          (e = a[2 * c + 1]), 0 !== e && (a[2 * c] = lr(d[e]++, e));
      },
      nr = function (a) {
        var b;
        for (b = 0; 286 > b; b++) a.ab[2 * b] = 0;
        for (b = 0; 30 > b; b++) a.Dc[2 * b] = 0;
        for (b = 0; 19 > b; b++) a.Na[2 * b] = 0;
        a.ab[512] = 1;
        a.fc = a.jd = 0;
        a.xb = a.matches = 0;
      },
      or = function (a) {
        8 < a.Ja ? ir(a, a.Ta) : 0 < a.Ja && (a.ra[a.pending++] = a.Ta);
        a.Ta = 0;
        a.Ja = 0;
      },
      pr = function (a, b, c) {
        or(a);
        ir(a, c);
        ir(a, ~c);
        Y.Oc(a.ra, a.window, b, c, a.pending);
        a.pending += c;
      },
      qr = function (a, b, c, d) {
        var e = 2 * b,
          f = 2 * c;
        return a[e] < a[f] || (a[e] === a[f] && d[b] <= d[c]);
      },
      rr = function (a, b, c) {
        for (var d = a.va[c], e = c << 1; e <= a.ac; ) {
          e < a.ac && qr(b, a.va[e + 1], a.va[e], a.depth) && e++;
          if (qr(b, d, a.va[e], a.depth)) break;
          a.va[c] = a.va[e];
          c = e;
          e <<= 1;
        }
        a.va[c] = d;
      },
      yr = function (a, b, c) {
        var d = 0;
        if (0 !== a.xb) {
          do {
            var e = (a.ra[a.xd + 2 * d] << 8) | a.ra[a.xd + 2 * d + 1];
            var f = a.ra[a.If + d];
            d++;
            if (0 === e) kr(a, f, b);
            else {
              var g = sr[f];
              kr(a, g + 256 + 1, b);
              var h = tr[g];
              0 !== h && ((f -= ur[g]), jr(a, f, h));
              e--;
              g = 256 > e ? vr[e] : vr[256 + (e >>> 7)];
              kr(a, g, c);
              h = wr[g];
              0 !== h && ((e -= xr[g]), jr(a, e, h));
            }
          } while (d < a.xb);
        }
        kr(a, 256, b);
      },
      zr = function (a, b) {
        var c = b.Yg,
          d = b.uc.fi,
          e = b.uc.xh,
          f = b.uc.Wi,
          g,
          h = -1;
        a.ac = 0;
        a.Vc = 573;
        for (g = 0; g < f; g++)
          0 !== c[2 * g]
            ? ((a.va[++a.ac] = h = g), (a.depth[g] = 0))
            : (c[2 * g + 1] = 0);
        for (; 2 > a.ac; ) {
          var l = (a.va[++a.ac] = 2 > h ? ++h : 0);
          c[2 * l] = 1;
          a.depth[l] = 0;
          a.fc--;
          e && (a.jd -= d[2 * l + 1]);
        }
        b.bd = h;
        for (g = a.ac >> 1; 1 <= g; g--) rr(a, c, g);
        l = f;
        do
          (g = a.va[1]),
            (a.va[1] = a.va[a.ac--]),
            rr(a, c, 1),
            (d = a.va[1]),
            (a.va[--a.Vc] = g),
            (a.va[--a.Vc] = d),
            (c[2 * l] = c[2 * g] + c[2 * d]),
            (a.depth[l] =
              (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1),
            (c[2 * g + 1] = c[2 * d + 1] = l),
            (a.va[1] = l++),
            rr(a, c, 1);
        while (2 <= a.ac);
        a.va[--a.Vc] = a.va[1];
        g = b.Yg;
        l = b.bd;
        d = b.uc.fi;
        e = b.uc.xh;
        f = b.uc.fj;
        var m = b.uc.ej,
          n = b.uc.ck,
          p,
          r = 0;
        for (p = 0; 15 >= p; p++) a.Vb[p] = 0;
        g[2 * a.va[a.Vc] + 1] = 0;
        for (b = a.Vc + 1; 573 > b; b++) {
          var q = a.va[b];
          p = g[2 * g[2 * q + 1] + 1] + 1;
          p > n && ((p = n), r++);
          g[2 * q + 1] = p;
          if (!(q > l)) {
            a.Vb[p]++;
            var w = 0;
            q >= m && (w = f[q - m]);
            var Q = g[2 * q];
            a.fc += Q * (p + w);
            e && (a.jd += Q * (d[2 * q + 1] + w));
          }
        }
        if (0 !== r) {
          do {
            for (p = n - 1; 0 === a.Vb[p]; ) p--;
            a.Vb[p]--;
            a.Vb[p + 1] += 2;
            a.Vb[n]--;
            r -= 2;
          } while (0 < r);
          for (p = n; 0 !== p; p--)
            for (q = a.Vb[p]; 0 !== q; )
              (d = a.va[--b]),
                d > l ||
                  (g[2 * d + 1] !== p &&
                    ((a.fc += (p - g[2 * d + 1]) * g[2 * d]),
                    (g[2 * d + 1] = p)),
                  q--);
        }
        mr(c, h, a.Vb);
      },
      Ar = function (a, b, c) {
        var d,
          e = -1,
          f = b[1],
          g = 0,
          h = 7,
          l = 4;
        0 === f && ((h = 138), (l = 3));
        b[2 * (c + 1) + 1] = 65535;
        for (d = 0; d <= c; d++) {
          var m = f;
          f = b[2 * (d + 1) + 1];
          (++g < h && m === f) ||
            (g < l
              ? (a.Na[2 * m] += g)
              : 0 !== m
              ? (m !== e && a.Na[2 * m]++, a.Na[32]++)
              : 10 >= g
              ? a.Na[34]++
              : a.Na[36]++,
            (g = 0),
            (e = m),
            0 === f
              ? ((h = 138), (l = 3))
              : m === f
              ? ((h = 6), (l = 3))
              : ((h = 7), (l = 4)));
        }
      },
      Br = function (a, b, c) {
        var d,
          e = -1,
          f = b[1],
          g = 0,
          h = 7,
          l = 4;
        0 === f && ((h = 138), (l = 3));
        for (d = 0; d <= c; d++) {
          var m = f;
          f = b[2 * (d + 1) + 1];
          if (!(++g < h && m === f)) {
            if (g < l) {
              do kr(a, m, a.Na);
              while (0 !== --g);
            } else
              0 !== m
                ? (m !== e && (kr(a, m, a.Na), g--),
                  kr(a, 16, a.Na),
                  jr(a, g - 3, 2))
                : 10 >= g
                ? (kr(a, 17, a.Na), jr(a, g - 3, 3))
                : (kr(a, 18, a.Na), jr(a, g - 11, 7));
            g = 0;
            e = m;
            0 === f
              ? ((h = 138), (l = 3))
              : m === f
              ? ((h = 6), (l = 3))
              : ((h = 7), (l = 4));
          }
        }
      },
      Cr = function (a) {
        var b = 4093624447,
          c;
        for (c = 0; 31 >= c; c++, b >>>= 1)
          if (b & 1 && 0 !== a.ab[2 * c]) return 0;
        if (0 !== a.ab[18] || 0 !== a.ab[20] || 0 !== a.ab[26]) return 1;
        for (c = 32; 256 > c; c++) if (0 !== a.ab[2 * c]) return 1;
        return 0;
      },
      Dr = function (a, b, c) {
        a.ra[a.xd + 2 * a.xb] = (b >>> 8) & 255;
        a.ra[a.xd + 2 * a.xb + 1] = b & 255;
        a.ra[a.If + a.xb] = c & 255;
        a.xb++;
        0 === b
          ? a.ab[2 * c]++
          : (a.matches++,
            b--,
            a.ab[2 * (sr[c] + 256 + 1)]++,
            a.Dc[2 * (256 > b ? vr[b] : vr[256 + (b >>> 7)])]++);
        return a.xb === a.Dd - 1;
      },
      Fr = function (a, b) {
        a.msg = Er[b];
        return b;
      },
      Gr = function (a) {
        for (var b = a.length; 0 <= --b; ) a[b] = 0;
      },
      Hr = function (a) {
        var b = a.state,
          c = b.pending;
        c > a.ga && (c = a.ga);
        0 !== c &&
          (Y.Oc(a.Ed, b.ra, b.Fd, c, a.cd),
          (a.cd += c),
          (b.Fd += c),
          (a.sg += c),
          (a.ga -= c),
          (b.pending -= c),
          0 === b.pending && (b.Fd = 0));
      },
      Lr = function (a, b) {
        var c = 0 <= a.jb ? a.jb : -1,
          d = a.M - a.jb,
          e = 0;
        if (0 < a.level) {
          2 === a.ea.lf && (a.ea.lf = Cr(a));
          zr(a, a.ve);
          zr(a, a.ce);
          Ar(a, a.ab, a.ve.bd);
          Ar(a, a.Dc, a.ce.bd);
          zr(a, a.Tg);
          for (e = 18; 3 <= e && 0 === a.Na[2 * Ir[e] + 1]; e--);
          a.fc += 3 * (e + 1) + 14;
          var f = (a.fc + 3 + 7) >>> 3;
          var g = (a.jd + 3 + 7) >>> 3;
          g <= f && (f = g);
        } else f = g = d + 5;
        if (d + 4 <= f && -1 !== c) jr(a, b ? 1 : 0, 3), pr(a, c, d);
        else if (4 === a.Pb || g === f)
          jr(a, 2 + (b ? 1 : 0), 3), yr(a, Jr, Kr);
        else {
          jr(a, 4 + (b ? 1 : 0), 3);
          c = a.ve.bd + 1;
          d = a.ce.bd + 1;
          e += 1;
          jr(a, c - 257, 5);
          jr(a, d - 1, 5);
          jr(a, e - 4, 4);
          for (f = 0; f < e; f++) jr(a, a.Na[2 * Ir[f] + 1], 3);
          Br(a, a.ab, c - 1);
          Br(a, a.Dc, d - 1);
          yr(a, a.ab, a.Dc);
        }
        nr(a);
        b && or(a);
        a.jb = a.M;
        Hr(a.ea);
      },
      Z = function (a, b) {
        a.ra[a.pending++] = b;
      },
      Mr = function (a, b) {
        a.ra[a.pending++] = (b >>> 8) & 255;
        a.ra[a.pending++] = b & 255;
      },
      Nr = function (a, b) {
        var c = a.Kh,
          d = a.M,
          e = a.lb,
          f = a.Nh,
          g = a.M > a.Qa - 262 ? a.M - (a.Qa - 262) : 0,
          h = a.window,
          l = a.vc,
          m = a.Nb,
          n = a.M + 258,
          p = h[d + e - 1],
          r = h[d + e];
        a.lb >= a.kh && (c >>= 2);
        f > a.S && (f = a.S);
        do {
          var q = b;
          if (
            h[q + e] === r &&
            h[q + e - 1] === p &&
            h[q] === h[d] &&
            h[++q] === h[d + 1]
          ) {
            d += 2;
            for (
              q++;
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              d < n;

            );
            q = 258 - (n - d);
            d = n - 258;
            if (q > e) {
              a.ad = b;
              e = q;
              if (q >= f) break;
              p = h[d + e - 1];
              r = h[d + e];
            }
          }
        } while ((b = m[b & l]) > g && 0 !== --c);
        return e <= a.S ? e : a.S;
      },
      Qr = function (a) {
        var b = a.Qa,
          c;
        do {
          var d = a.ji - a.S - a.M;
          if (a.M >= b + (b - 262)) {
            Y.Oc(a.window, a.window, b, b, 0);
            a.ad -= b;
            a.M -= b;
            a.jb -= b;
            var e = (c = a.qe);
            do {
              var f = a.head[--e];
              a.head[e] = f >= b ? f - b : 0;
            } while (--c);
            e = c = b;
            do (f = a.Nb[--e]), (a.Nb[e] = f >= b ? f - b : 0);
            while (--c);
            d += b;
          }
          if (0 === a.ea.Sa) break;
          e = a.ea;
          c = a.window;
          f = a.M + a.S;
          var g = e.Sa;
          g > d && (g = d);
          0 === g
            ? (c = 0)
            : ((e.Sa -= g),
              Y.Oc(c, e.input, e.Lc, g, f),
              1 === e.state.Ia
                ? (e.ca = Or(e.ca, c, g, f))
                : 2 === e.state.Ia && (e.ca = Pr(e.ca, c, g, f)),
              (e.Lc += g),
              (e.Mc += g),
              (c = g));
          a.S += c;
          if (3 <= a.S + a.eb)
            for (
              d = a.M - a.eb,
                a.fa = a.window[d],
                a.fa = ((a.fa << a.Zb) ^ a.window[d + 1]) & a.Yb;
              a.eb &&
              !((a.fa = ((a.fa << a.Zb) ^ a.window[d + 3 - 1]) & a.Yb),
              (a.Nb[d & a.vc] = a.head[a.fa]),
              (a.head[a.fa] = d),
              d++,
              a.eb--,
              3 > a.S + a.eb);

            );
        } while (262 > a.S && 0 !== a.ea.Sa);
      },
      Rr = function (a, b) {
        for (var c; ; ) {
          if (262 > a.S) {
            Qr(a);
            if (262 > a.S && 0 === b) return 1;
            if (0 === a.S) break;
          }
          c = 0;
          3 <= a.S &&
            ((a.fa = ((a.fa << a.Zb) ^ a.window[a.M + 3 - 1]) & a.Yb),
            (c = a.Nb[a.M & a.vc] = a.head[a.fa]),
            (a.head[a.fa] = a.M));
          0 !== c && a.M - c <= a.Qa - 262 && (a.ja = Nr(a, c));
          if (3 <= a.ja)
            if (
              ((c = Dr(a, a.M - a.ad, a.ja - 3)),
              (a.S -= a.ja),
              a.ja <= a.Qf && 3 <= a.S)
            ) {
              a.ja--;
              do
                a.M++,
                  (a.fa = ((a.fa << a.Zb) ^ a.window[a.M + 3 - 1]) & a.Yb),
                  (a.Nb[a.M & a.vc] = a.head[a.fa]),
                  (a.head[a.fa] = a.M);
              while (0 !== --a.ja);
              a.M++;
            } else
              (a.M += a.ja),
                (a.ja = 0),
                (a.fa = a.window[a.M]),
                (a.fa = ((a.fa << a.Zb) ^ a.window[a.M + 1]) & a.Yb);
          else (c = Dr(a, 0, a.window[a.M])), a.S--, a.M++;
          if (c && (Lr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.eb = 2 > a.M ? a.M : 2;
        return 4 === b
          ? (Lr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.xb && (Lr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Sr = function (a, b) {
        for (var c, d; ; ) {
          if (262 > a.S) {
            Qr(a);
            if (262 > a.S && 0 === b) return 1;
            if (0 === a.S) break;
          }
          c = 0;
          3 <= a.S &&
            ((a.fa = ((a.fa << a.Zb) ^ a.window[a.M + 3 - 1]) & a.Yb),
            (c = a.Nb[a.M & a.vc] = a.head[a.fa]),
            (a.head[a.fa] = a.M));
          a.lb = a.ja;
          a.Uh = a.ad;
          a.ja = 2;
          0 !== c &&
            a.lb < a.Qf &&
            a.M - c <= a.Qa - 262 &&
            ((a.ja = Nr(a, c)),
            5 >= a.ja &&
              (1 === a.Pb || (3 === a.ja && 4096 < a.M - a.ad)) &&
              (a.ja = 2));
          if (3 <= a.lb && a.ja <= a.lb) {
            d = a.M + a.S - 3;
            c = Dr(a, a.M - 1 - a.Uh, a.lb - 3);
            a.S -= a.lb - 1;
            a.lb -= 2;
            do
              ++a.M <= d &&
                ((a.fa = ((a.fa << a.Zb) ^ a.window[a.M + 3 - 1]) & a.Yb),
                (a.Nb[a.M & a.vc] = a.head[a.fa]),
                (a.head[a.fa] = a.M));
            while (0 !== --a.lb);
            a.Kc = 0;
            a.ja = 2;
            a.M++;
            if (c && (Lr(a, !1), 0 === a.ea.ga)) return 1;
          } else if (a.Kc) {
            if (
              ((c = Dr(a, 0, a.window[a.M - 1])) && Lr(a, !1),
              a.M++,
              a.S--,
              0 === a.ea.ga)
            )
              return 1;
          } else (a.Kc = 1), a.M++, a.S--;
        }
        a.Kc && (Dr(a, 0, a.window[a.M - 1]), (a.Kc = 0));
        a.eb = 2 > a.M ? a.M : 2;
        return 4 === b
          ? (Lr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.xb && (Lr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Tr = function (a, b) {
        for (var c, d, e, f = a.window; ; ) {
          if (258 >= a.S) {
            Qr(a);
            if (258 >= a.S && 0 === b) return 1;
            if (0 === a.S) break;
          }
          a.ja = 0;
          if (
            3 <= a.S &&
            0 < a.M &&
            ((d = a.M - 1),
            (c = f[d]),
            c === f[++d] && c === f[++d] && c === f[++d])
          ) {
            for (
              e = a.M + 258;
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              d < e;

            );
            a.ja = 258 - (e - d);
            a.ja > a.S && (a.ja = a.S);
          }
          3 <= a.ja
            ? ((c = Dr(a, 1, a.ja - 3)),
              (a.S -= a.ja),
              (a.M += a.ja),
              (a.ja = 0))
            : ((c = Dr(a, 0, a.window[a.M])), a.S--, a.M++);
          if (c && (Lr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.eb = 0;
        return 4 === b
          ? (Lr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.xb && (Lr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Ur = function (a, b) {
        for (var c; ; ) {
          if (0 === a.S && (Qr(a), 0 === a.S)) {
            if (0 === b) return 1;
            break;
          }
          a.ja = 0;
          c = Dr(a, 0, a.window[a.M]);
          a.S--;
          a.M++;
          if (c && (Lr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.eb = 0;
        return 4 === b
          ? (Lr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.xb && (Lr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Vr = function (a, b, c, d, e) {
        this.ij = a;
        this.bk = b;
        this.hk = c;
        this.ak = d;
        this.hj = e;
      },
      Wr = function () {
        this.ea = null;
        this.status = 0;
        this.ra = null;
        this.Ia = this.pending = this.Fd = this.zb = 0;
        this.aa = null;
        this.Db = 0;
        this.method = 8;
        this.Yc = -1;
        this.vc = this.ug = this.Qa = 0;
        this.window = null;
        this.ji = 0;
        this.head = this.Nb = null;
        this.Nh =
          this.kh =
          this.Pb =
          this.level =
          this.Qf =
          this.Kh =
          this.lb =
          this.S =
          this.ad =
          this.M =
          this.Kc =
          this.Uh =
          this.ja =
          this.jb =
          this.Zb =
          this.Yb =
          this.Df =
          this.qe =
          this.fa =
            0;
        this.ab = new Y.Qb(1146);
        this.Dc = new Y.Qb(122);
        this.Na = new Y.Qb(78);
        Gr(this.ab);
        Gr(this.Dc);
        Gr(this.Na);
        this.Tg = this.ce = this.ve = null;
        this.Vb = new Y.Qb(16);
        this.va = new Y.Qb(573);
        Gr(this.va);
        this.Vc = this.ac = 0;
        this.depth = new Y.Qb(573);
        Gr(this.depth);
        this.Ja =
          this.Ta =
          this.eb =
          this.matches =
          this.jd =
          this.fc =
          this.xd =
          this.xb =
          this.Dd =
          this.If =
            0;
      },
      Yr = function (a, b) {
        if (!a || !a.state || 5 < b || 0 > b) return a ? Fr(a, -2) : -2;
        var c = a.state;
        if (!a.Ed || (!a.input && 0 !== a.Sa) || (666 === c.status && 4 !== b))
          return Fr(a, 0 === a.ga ? -5 : -2);
        c.ea = a;
        var d = c.Yc;
        c.Yc = b;
        if (42 === c.status)
          if (2 === c.Ia)
            (a.ca = 0),
              Z(c, 31),
              Z(c, 139),
              Z(c, 8),
              c.aa
                ? (Z(
                    c,
                    (c.aa.text ? 1 : 0) +
                      (c.aa.oc ? 2 : 0) +
                      (c.aa.kc ? 4 : 0) +
                      (c.aa.name ? 8 : 0) +
                      (c.aa.hf ? 16 : 0)
                  ),
                  Z(c, c.aa.time & 255),
                  Z(c, (c.aa.time >> 8) & 255),
                  Z(c, (c.aa.time >> 16) & 255),
                  Z(c, (c.aa.time >> 24) & 255),
                  Z(c, 9 === c.level ? 2 : 2 <= c.Pb || 2 > c.level ? 4 : 0),
                  Z(c, c.aa.fm & 255),
                  c.aa.kc &&
                    c.aa.kc.length &&
                    (Z(c, c.aa.kc.length & 255),
                    Z(c, (c.aa.kc.length >> 8) & 255)),
                  c.aa.oc && (a.ca = Pr(a.ca, c.ra, c.pending, 0)),
                  (c.Db = 0),
                  (c.status = 69))
                : (Z(c, 0),
                  Z(c, 0),
                  Z(c, 0),
                  Z(c, 0),
                  Z(c, 0),
                  Z(c, 9 === c.level ? 2 : 2 <= c.Pb || 2 > c.level ? 4 : 0),
                  Z(c, 3),
                  (c.status = 113));
          else {
            var e = (8 + ((c.ug - 8) << 4)) << 8;
            e |=
              (2 <= c.Pb || 2 > c.level
                ? 0
                : 6 > c.level
                ? 1
                : 6 === c.level
                ? 2
                : 3) << 6;
            0 !== c.M && (e |= 32);
            c.status = 113;
            Mr(c, e + (31 - (e % 31)));
            0 !== c.M && (Mr(c, a.ca >>> 16), Mr(c, a.ca & 65535));
            a.ca = 1;
          }
        if (69 === c.status)
          if (c.aa.kc) {
            for (
              e = c.pending;
              c.Db < (c.aa.kc.length & 65535) &&
              (c.pending !== c.zb ||
                (c.aa.oc &&
                  c.pending > e &&
                  (a.ca = Pr(a.ca, c.ra, c.pending - e, e)),
                Hr(a),
                (e = c.pending),
                c.pending !== c.zb));

            )
              Z(c, c.aa.kc[c.Db] & 255), c.Db++;
            c.aa.oc &&
              c.pending > e &&
              (a.ca = Pr(a.ca, c.ra, c.pending - e, e));
            c.Db === c.aa.kc.length && ((c.Db = 0), (c.status = 73));
          } else c.status = 73;
        if (73 === c.status)
          if (c.aa.name) {
            e = c.pending;
            do {
              if (
                c.pending === c.zb &&
                (c.aa.oc &&
                  c.pending > e &&
                  (a.ca = Pr(a.ca, c.ra, c.pending - e, e)),
                Hr(a),
                (e = c.pending),
                c.pending === c.zb)
              ) {
                var f = 1;
                break;
              }
              f =
                c.Db < c.aa.name.length
                  ? c.aa.name.charCodeAt(c.Db++) & 255
                  : 0;
              Z(c, f);
            } while (0 !== f);
            c.aa.oc &&
              c.pending > e &&
              (a.ca = Pr(a.ca, c.ra, c.pending - e, e));
            0 === f && ((c.Db = 0), (c.status = 91));
          } else c.status = 91;
        if (91 === c.status)
          if (c.aa.hf) {
            e = c.pending;
            do {
              if (
                c.pending === c.zb &&
                (c.aa.oc &&
                  c.pending > e &&
                  (a.ca = Pr(a.ca, c.ra, c.pending - e, e)),
                Hr(a),
                (e = c.pending),
                c.pending === c.zb)
              ) {
                f = 1;
                break;
              }
              f = c.Db < c.aa.hf.length ? c.aa.hf.charCodeAt(c.Db++) & 255 : 0;
              Z(c, f);
            } while (0 !== f);
            c.aa.oc &&
              c.pending > e &&
              (a.ca = Pr(a.ca, c.ra, c.pending - e, e));
            0 === f && (c.status = 103);
          } else c.status = 103;
        103 === c.status &&
          (c.aa.oc
            ? (c.pending + 2 > c.zb && Hr(a),
              c.pending + 2 <= c.zb &&
                (Z(c, a.ca & 255),
                Z(c, (a.ca >> 8) & 255),
                (a.ca = 0),
                (c.status = 113)))
            : (c.status = 113));
        if (0 !== c.pending) {
          if ((Hr(a), 0 === a.ga)) return (c.Yc = -1), 0;
        } else if (
          0 === a.Sa &&
          (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) &&
          4 !== b
        )
          return Fr(a, -5);
        if (666 === c.status && 0 !== a.Sa) return Fr(a, -5);
        if (0 !== a.Sa || 0 !== c.S || (0 !== b && 666 !== c.status)) {
          d =
            2 === c.Pb
              ? Ur(c, b)
              : 3 === c.Pb
              ? Tr(c, b)
              : Xr[c.level].hj(c, b);
          if (3 === d || 4 === d) c.status = 666;
          if (1 === d || 3 === d) return 0 === a.ga && (c.Yc = -1), 0;
          if (
            2 === d &&
            (1 === b
              ? (jr(c, 2, 3),
                kr(c, 256, Jr),
                16 === c.Ja
                  ? (ir(c, c.Ta), (c.Ta = 0), (c.Ja = 0))
                  : 8 <= c.Ja &&
                    ((c.ra[c.pending++] = c.Ta & 255),
                    (c.Ta >>= 8),
                    (c.Ja -= 8)))
              : 5 !== b &&
                (jr(c, 0, 3),
                pr(c, 0, 0),
                3 === b &&
                  (Gr(c.head),
                  0 === c.S && ((c.M = 0), (c.jb = 0), (c.eb = 0)))),
            Hr(a),
            0 === a.ga)
          )
            return (c.Yc = -1), 0;
        }
        if (4 !== b) return 0;
        if (0 >= c.Ia) return 1;
        2 === c.Ia
          ? (Z(c, a.ca & 255),
            Z(c, (a.ca >> 8) & 255),
            Z(c, (a.ca >> 16) & 255),
            Z(c, (a.ca >> 24) & 255),
            Z(c, a.Mc & 255),
            Z(c, (a.Mc >> 8) & 255),
            Z(c, (a.Mc >> 16) & 255),
            Z(c, (a.Mc >> 24) & 255))
          : (Mr(c, a.ca >>> 16), Mr(c, a.ca & 65535));
        Hr(a);
        0 < c.Ia && (c.Ia = -c.Ia);
        return 0 !== c.pending ? 0 : 1;
      },
      Zr = function (a) {
        if (!(this instanceof Zr)) return new Zr(a);
        a = this.options = Y.assign(
          { level: -1, method: 8, Si: 16384, wc: 15, dk: 8, Pb: 0, hi: "" },
          a || {}
        );
        a.raw && 0 < a.wc
          ? (a.wc = -a.wc)
          : a.jj && 0 < a.wc && 16 > a.wc && (a.wc += 16);
        this.qf = 0;
        this.msg = "";
        this.ended = !1;
        this.ud = [];
        this.ea = new $r();
        this.ea.ga = 0;
        var b = this.ea;
        var c = a.level,
          d = a.method,
          e = a.wc,
          f = a.dk,
          g = a.Pb;
        if (b) {
          var h = 1;
          -1 === c && (c = 6);
          0 > e ? ((h = 0), (e = -e)) : 15 < e && ((h = 2), (e -= 16));
          if (
            1 > f ||
            9 < f ||
            8 !== d ||
            8 > e ||
            15 < e ||
            0 > c ||
            9 < c ||
            0 > g ||
            4 < g
          )
            b = Fr(b, -2);
          else {
            8 === e && (e = 9);
            var l = new Wr();
            b.state = l;
            l.ea = b;
            l.Ia = h;
            l.aa = null;
            l.ug = e;
            l.Qa = 1 << l.ug;
            l.vc = l.Qa - 1;
            l.Df = f + 7;
            l.qe = 1 << l.Df;
            l.Yb = l.qe - 1;
            l.Zb = ~~((l.Df + 3 - 1) / 3);
            l.window = new Y.xc(2 * l.Qa);
            l.head = new Y.Qb(l.qe);
            l.Nb = new Y.Qb(l.Qa);
            l.Dd = 1 << (f + 6);
            l.zb = 4 * l.Dd;
            l.ra = new Y.xc(l.zb);
            l.xd = l.Dd;
            l.If = 3 * l.Dd;
            l.level = c;
            l.Pb = g;
            l.method = d;
            if (b && b.state) {
              b.Mc = b.sg = 0;
              b.lf = 2;
              c = b.state;
              c.pending = 0;
              c.Fd = 0;
              0 > c.Ia && (c.Ia = -c.Ia);
              c.status = c.Ia ? 42 : 113;
              b.ca = 2 === c.Ia ? 0 : 1;
              c.Yc = 0;
              if (!as) {
                d = Array(16);
                for (f = g = 0; 28 > f; f++)
                  for (ur[f] = g, e = 0; e < 1 << tr[f]; e++) sr[g++] = f;
                sr[g - 1] = f;
                for (f = g = 0; 16 > f; f++)
                  for (xr[f] = g, e = 0; e < 1 << wr[f]; e++) vr[g++] = f;
                for (g >>= 7; 30 > f; f++)
                  for (xr[f] = g << 7, e = 0; e < 1 << (wr[f] - 7); e++)
                    vr[256 + g++] = f;
                for (e = 0; 15 >= e; e++) d[e] = 0;
                for (e = 0; 143 >= e; ) (Jr[2 * e + 1] = 8), e++, d[8]++;
                for (; 255 >= e; ) (Jr[2 * e + 1] = 9), e++, d[9]++;
                for (; 279 >= e; ) (Jr[2 * e + 1] = 7), e++, d[7]++;
                for (; 287 >= e; ) (Jr[2 * e + 1] = 8), e++, d[8]++;
                mr(Jr, 287, d);
                for (e = 0; 30 > e; e++)
                  (Kr[2 * e + 1] = 5), (Kr[2 * e] = lr(e, 5));
                bs = new gr(Jr, tr, 257, 286, 15);
                cs = new gr(Kr, wr, 0, 30, 15);
                ds = new gr([], es, 0, 19, 7);
                as = !0;
              }
              c.ve = new hr(c.ab, bs);
              c.ce = new hr(c.Dc, cs);
              c.Tg = new hr(c.Na, ds);
              c.Ta = 0;
              c.Ja = 0;
              nr(c);
              c = 0;
            } else c = Fr(b, -2);
            0 === c &&
              ((b = b.state),
              (b.ji = 2 * b.Qa),
              Gr(b.head),
              (b.Qf = Xr[b.level].bk),
              (b.kh = Xr[b.level].ij),
              (b.Nh = Xr[b.level].hk),
              (b.Kh = Xr[b.level].ak),
              (b.M = 0),
              (b.jb = 0),
              (b.S = 0),
              (b.eb = 0),
              (b.ja = b.lb = 2),
              (b.Kc = 0),
              (b.fa = 0));
            b = c;
          }
        } else b = -2;
        if (0 !== b) throw Error(Er[b]);
        a.Gj &&
          (b = this.ea) &&
          b.state &&
          2 === b.state.Ia &&
          (b.state.aa = a.Gj);
        if (a.yd) {
          var m;
          "string" === typeof a.yd
            ? (m = fs(a.yd))
            : "[object ArrayBuffer]" === gs.call(a.yd)
            ? (m = new Uint8Array(a.yd))
            : (m = a.yd);
          a = this.ea;
          f = m;
          g = f.length;
          if (a && a.state)
            if (
              ((m = a.state),
              (b = m.Ia),
              2 === b || (1 === b && 42 !== m.status) || m.S)
            )
              b = -2;
            else {
              1 === b && (a.ca = Or(a.ca, f, g, 0));
              m.Ia = 0;
              g >= m.Qa &&
                (0 === b && (Gr(m.head), (m.M = 0), (m.jb = 0), (m.eb = 0)),
                (c = new Y.xc(m.Qa)),
                Y.Oc(c, f, g - m.Qa, m.Qa, 0),
                (f = c),
                (g = m.Qa));
              c = a.Sa;
              d = a.Lc;
              e = a.input;
              a.Sa = g;
              a.Lc = 0;
              a.input = f;
              for (Qr(m); 3 <= m.S; ) {
                f = m.M;
                g = m.S - 2;
                do
                  (m.fa = ((m.fa << m.Zb) ^ m.window[f + 3 - 1]) & m.Yb),
                    (m.Nb[f & m.vc] = m.head[m.fa]),
                    (m.head[m.fa] = f),
                    f++;
                while (--g);
                m.M = f;
                m.S = 2;
                Qr(m);
              }
              m.M += m.S;
              m.jb = m.M;
              m.eb = m.S;
              m.S = 0;
              m.ja = m.lb = 2;
              m.Kc = 0;
              a.Lc = d;
              a.input = e;
              a.Sa = c;
              m.Ia = b;
              b = 0;
            }
          else b = -2;
          if (0 !== b) throw Error(Er[b]);
          this.Xl = !0;
        }
      },
      hs = function (a) {
        var b = {};
        b = b || {};
        b.jj = !0;
        b = new Zr(b);
        b.push(a, !0);
        if (b.qf) throw b.msg || Er[b.qf];
        return b.result;
      },
      is = function (a) {
        return "translate:" + a;
      },
      os = function (a) {
        var b = new js();
        b = _.H(b, 1, a.name);
        var c = ks(a.startTime);
        b = _.I(b, 2, c);
        a = ls(a.duration);
        a = _.I(b, 3, a);
        b = new ms();
        return ns(a, 5, b);
      },
      ks = function (a) {
        var b = new ps();
        b.setSeconds(Math.floor(a / 1e3));
        _.eh(b, 2, Math.round(1e6 * a) % 1e3, 0);
        return b;
      },
      ls = function (a) {
        var b = new qs();
        b.setSeconds(Math.floor(a / 1e3));
        _.eh(b, 2, Math.round(1e6 * a) % 1e3, 0);
        return b;
      },
      rs = function (a) {
        performance &&
          performance.mark &&
          performance.getEntriesByName(a, "mark");
      },
      ss = function (a, b) {
        return performance && performance.measure
          ? performance.measure(a, b)
          : null;
      },
      ts = function (a) {
        var b = _.P("goog-gt-thumbUpButton"),
          c = _.P("goog-gt-thumbUpIcon"),
          d = _.P("goog-gt-thumbUpIconFilled"),
          e = _.P("goog-gt-thumbDownButton"),
          f = _.P("goog-gt-thumbDownIcon"),
          g = _.P("goog-gt-thumbDownIconFilled");
        b.setAttribute("aria-pressed", "false");
        c.style.display = "";
        d.style.display = "none";
        e.setAttribute("aria-pressed", "false");
        f.style.display = "";
        g.style.display = "none";
        switch (a) {
          case "up":
            b.setAttribute("aria-pressed", "true");
            c.style.display = "none";
            d.style.display = "";
            break;
          case "down":
            e.setAttribute("aria-pressed", "true"),
              (f.style.display = "none"),
              (g.style.display = "");
        }
        _.P("goog-gt-votingInputVote").value = a;
      },
      us = function (a) {
        var b = _.P("goog-gt-tt").dataset;
        return a.get(b.id);
      },
      vs = function (a, b) {
        us(a) === b && (b = "");
        ts(b);
        var c = _.P("goog-gt-tt").dataset;
        a.set(c.id, b);
        _.P("goog-gt-votingForm").submit();
      },
      Uq = function (a, b, c, d) {
        var e = _.Lg(a.wa);
        a.Va || (a.Va = {});
        var f = a.Va[c];
        var g = Sq(a, c, d, e);
        if (f)
          e ||
            (Object.isFrozen(f)
              ? e || ((f = Array.prototype.slice.call(f)), (a.Va[c] = f))
              : e && Object.freeze(f));
        else {
          f = [];
          var h = !!(_.Ig(a.wa) & 16),
            l = _.Lg(g);
          !e &&
            l &&
            ((g = _.Kg(Array.prototype.slice.call(g))), _.ch(a, c, g, d));
          for (var m = l, n = 0; n < g.length; n++) {
            var p = g[n];
            var r = b;
            var q = h,
              w = !1;
            w = void 0 === w ? !1 : w;
            q = void 0 === q ? !1 : q;
            r = Array.isArray(p)
              ? new r(q ? _.Mg(p) : p)
              : w
              ? new r()
              : void 0;
            void 0 !== r && ((m = m || _.Lg(p)), f.push(r), l && _.Hg(r.wa, 2));
          }
          a.Va[c] = f;
          Object.isFrozen(g) ||
            ((b = _.Ig(g) | 33), _.Jg(g, m ? b & -9 : b | 8));
          (e || (e && l)) && _.Hg(f, 2);
          (e || e) && Object.freeze(f);
        }
        a = Sq(a, c, d, e);
        if (!(e || _.Ig(a) & 8)) {
          for (e = 0; e < f.length; e++)
            (c = f[e]),
              (d = _.mh(c)),
              c !== d && ((f[e] = d), (a[e] = f[e].wa));
          _.Hg(a, 8);
        }
        return f;
      },
      ws = function (a) {
        _.Dh = !0;
        try {
          return JSON.stringify(a.toJSON(), Tq);
        } finally {
          _.Dh = !1;
        }
      },
      Wq = function (a) {
        var b = _.Xg(a.wa, Xq, _.Ng);
        _.Mg(b);
        _.Rg = b;
        b = new a.constructor(b);
        _.Rg = void 0;
        Vq(b, a);
        return b;
      },
      xs = null,
      ys = function () {
        xs && (_.Ed(xs), (xs = null));
        _.Ci && _.Ci.length && _.Di(_.Ci.join(""));
        _.Ci = null;
      },
      zs = function () {
        _.Ci && ys();
        _.Ci = [];
        xs = _.D(window, "pagehide", function () {
          ys();
        });
      },
      Bs = function (a, b) {
        b = As(b || {}, a.l ? a.l.h() : {});
        a.j(null, b.Wb);
        return b.j();
      },
      Cs = function (a) {
        return a instanceof _.Rh && a.constructor === _.Rh
          ? a.h
          : "type_error:SafeStyleSheet";
      },
      Ds = function (a, b) {
        return a + Math.random() * (b - a);
      },
      Es = function (a) {
        try {
          return (
            a.contentWindow ||
            (a.contentDocument ? _.Yc(a.contentDocument) : null)
          );
        } catch (b) {}
        return null;
      },
      Fs = function (a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
          d = c;
          var e = "";
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? (c ? c + "&" + b : b) : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
      },
      Gs = function (a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) _.rf(a[b], a[b + 1], c);
        return c.join("&");
      },
      Hs = function (a, b) {
        var c = 2 == arguments.length ? Gs(arguments[1], 0) : Gs(arguments, 1);
        return Fs(a, c);
      },
      Is = function (a, b, c) {
        c = null != c ? "=" + _.Nc(c) : "";
        return Fs(a, b + c);
      },
      Js = function (a, b, c) {
        for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
          var d = a.charCodeAt(b - 1);
          if (38 == d || 63 == d)
            if (
              ((d = a.charCodeAt(b + 6)), !d || 61 == d || 38 == d || 35 == d)
            )
              return b;
          b += 7;
        }
        return -1;
      },
      Ks = /#|$/,
      Ls = /[?&]($|#)/,
      Ms = function (a, b) {
        _.E.call(this);
        this.o = a || 1;
        this.l = b || _.t;
        this.s = (0, _.y)(this.C, this);
        this.A = _.ub();
      };
    _.z(Ms, _.E);
    Ms.prototype.j = !1;
    Ms.prototype.h = null;
    var Ns = function (a, b) {
      a.o = b;
      a.h && a.j ? (a.stop(), a.start()) : a.h && a.stop();
    };
    Ms.prototype.C = function () {
      if (this.j) {
        var a = _.ub() - this.A;
        0 < a && a < 0.8 * this.o
          ? (this.h = this.l.setTimeout(this.s, this.o - a))
          : (this.h && (this.l.clearTimeout(this.h), (this.h = null)),
            this.dispatchEvent("tick"),
            this.j && (this.stop(), this.start()));
      }
    };
    Ms.prototype.start = function () {
      this.j = !0;
      this.h ||
        ((this.h = this.l.setTimeout(this.s, this.o)), (this.A = _.ub()));
    };
    Ms.prototype.stop = function () {
      this.j = !1;
      this.h && (this.l.clearTimeout(this.h), (this.h = null));
    };
    Ms.prototype.L = function () {
      Ms.R.L.call(this);
      this.stop();
      delete this.l;
    };
    var ns = function (a, b, c) {
        var d = Os;
        _.dh(a);
        null == c && (c = void 0);
        _.dh(a);
        for (var e = 0, f = 0; f < d.length; f++) {
          var g = d[f];
          null != _.Gh(a, g) && (0 !== e && _.ch(a, e, void 0, !1), (e = g));
        }
        (d = e) && d !== b && null != c && _.ch(a, d, void 0, !1);
        return _.ch(a, b, c);
      },
      Ps = function (a, b) {
        b = Cs(b);
        _.C && void 0 !== a.cssText
          ? (a.cssText = b)
          : _.t.trustedTypes
          ? _.dd(a, b)
          : (a.innerHTML = b);
      },
      Qs = function (a, b) {
        b = _.Sc(b);
        var c = b.V;
        if (_.C && c.createStyleSheet) (b = c.createStyleSheet()), Ps(b, a);
        else {
          c = _.Ri(b.V, "HEAD")[0];
          if (!c) {
            var d = _.Ri(b.V, "BODY")[0];
            c = b.T("HEAD");
            d.parentNode.insertBefore(c, d);
          }
          d = b.T("STYLE");
          var e;
          (e = _.vh('style[nonce],link[rel="stylesheet"][nonce]')) &&
            d.setAttribute("nonce", e);
          Ps(d, a);
          b.appendChild(c, d);
        }
      },
      Rs = function (a) {
        return new _.Lc(a.offsetWidth, a.offsetHeight);
      },
      Ss = function (a, b) {
        _.Ik(a, b, "content-box");
      },
      Ts = function (a) {
        return a instanceof _.vf ? !!a.Ba() : !!a;
      },
      Us = function (a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
      },
      Vs = function (a) {
        return _.Vh(a, _.rk)
          ? a.Ba()
          : a instanceof _.Hb
          ? _.Ma(a).toString()
          : a instanceof _.Hb
          ? _.bl(_.Ma(a).toString())
          : "about:invalid#zSoyz";
      },
      Ws =
        /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
      Xs = function (a) {
        _.Vh(a, _.Mh)
          ? (a = Us(a.Ba()))
          : null == a
          ? (a = "")
          : a instanceof _.zc
          ? (a = Us(_.mj(a)))
          : a instanceof _.zc
          ? (a = Us(_.mj(a)))
          : a instanceof _.Rh
          ? (a = Us(Cs(a)))
          : a instanceof _.Rh
          ? (a = Us(Cs(a)))
          : ((a = String(a)), (a = Ws.test(a) ? a : "zSoyz"));
        return a;
      },
      Ys,
      Zs = function (a, b) {
        if ((_.C || _.Xb) && window.location.hostname != document.domain) {
          Ys = Ys ? Ys + 1 : 1;
          var c = "f" + Ys + "_" + _.ub().toString(36);
          window[c] = function () {
            window[c] = void 0;
            a.src = "javascript:void(0)";
            b &&
              window.setTimeout(function () {
                b();
              }, 0);
          };
          a.src =
            "javascript:void(document.write(\"<script>document.domain='" +
            document.domain +
            "';parent['" +
            c +
            "']();\x3c/script>\"))";
        } else b && b();
      },
      $s = function (a, b) {
        return "auto" != a && "zh-CN" != a && a == b;
      },
      at = function () {
        var a = window.location.hash.match(
          /google\.translate\.element\.sp=([^&]+)/
        );
        return a && a[1] ? a[1] : null;
      },
      bt = function (a) {
        return (0, _.L)('<span id="' + _.M(a.id) + '"></span>');
      },
      ct = function (a) {
        var b = a.id,
          c = a.Sh;
        return (0, _.L)(
          _.Zk(a.Th) + '<div id="' + _.M(b) + '"></div>' + _.Zk(c)
        );
      },
      As = function (a) {
        var b = a.top,
          c = a.left,
          d = a.bottom,
          e = a.right,
          f = a.id;
        return (0, _.Wh)(
          "." +
            Xs(a.className) +
            " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" +
            (Ts(b) || _.Qk(b, 0)
              ? "top:" +
                Xs(b) +
                "px; _top:expression((" +
                Xs(b) +
                "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
              : "top:auto;") +
            (Ts(c) || _.Qk(c, 0)
              ? "left:" +
                Xs(c) +
                "px; _left:expression((" +
                Xs(c) +
                "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
              : "left:auto;") +
            (Ts(d) || _.Qk(d, 0)
              ? "bottom:" +
                Xs(d) +
                "px; _top:expression((-" +
                Xs(d) +
                "-document.getElementById('" +
                String(f).replace(_.$k, _.Wk) +
                "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
              : "bottom:auto;") +
            (Ts(e) || _.Qk(e, 0)
              ? "right:" +
                Xs(e) +
                "px; _left:expression((-" +
                Xs(e) +
                "-document.getElementById('" +
                String(f).replace(_.$k, _.Wk) +
                "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
              : "right:auto;") +
            "}"
        );
      },
      dt = function () {
        return (0, _.L)(
          '<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>'
        );
      },
      et = function () {
        _.N.call(this);
      };
    _.x(et, _.N);
    et.prototype.T = function () {
      this.Aa(_.Bi(dt));
    };
    et.prototype.Aa = function (a) {
      this.l = a;
    };
    var ft = function (a) {
        _.nn(a.B(), "goog-te-spinner-pos-show");
        _.nn(a.B().firstChild, "goog-te-spinner-animation-show");
      },
      gt = function () {
        this.h = new et();
        this.h.T();
        this.h.Ca();
        this.j = 0;
      };
    gt.prototype.reset = function () {
      this.j = 0;
      ft(this.h);
    };
    gt.prototype.o = function () {
      if (0 == this.j++) {
        var a = this.h;
        _.ln(a.B(), "goog-te-spinner-pos-show");
        _.ln(a.B().firstChild, "goog-te-spinner-animation-show");
      }
    };
    gt.prototype.l = function () {
      0 == --this.j && ft(this.h);
    };
    var it = function (a) {
      _.J.call(this, a, -1, ht);
    };
    _.x(it, _.J);
    var ht = [2];
    var qs = function (a) {
      _.J.call(this, a);
    };
    _.x(qs, _.J);
    qs.prototype.getSeconds = function () {
      return _.fh(_.Gh(this, 1), 0);
    };
    qs.prototype.setSeconds = function (a) {
      return _.eh(this, 1, a, 0);
    };
    var ps = function (a) {
      _.J.call(this, a);
    };
    _.x(ps, _.J);
    ps.prototype.getSeconds = function () {
      return _.fh(_.Gh(this, 1), 0);
    };
    ps.prototype.setSeconds = function (a) {
      return _.eh(this, 1, a, 0);
    };
    var jt = function (a) {
      if (!a) return "";
      if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
      a = a.split("#")[0].split("?")[0];
      a = a.toLowerCase();
      0 == a.indexOf("//") && (a = window.location.protocol + a);
      /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
      var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/");
      -1 != c && (b = b.substring(0, c));
      c = a.substring(0, a.indexOf("://"));
      if (!c) throw Error("Fa`" + a);
      if (
        "http" !== c &&
        "https" !== c &&
        "chrome-extension" !== c &&
        "moz-extension" !== c &&
        "file" !== c &&
        "android-app" !== c &&
        "chrome-search" !== c &&
        "chrome-untrusted" !== c &&
        "chrome" !== c &&
        "app" !== c &&
        "devtools" !== c
      )
        throw Error("Ga`" + c);
      a = "";
      var d = b.indexOf(":");
      if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if (("http" === c && "80" !== e) || ("https" === c && "443" !== e))
          a = ":" + e;
      }
      return c + "://" + b + a;
    };
    var lt = function (a, b, c) {
        var d = String(_.t.location.href);
        return d && a && b ? [b, kt(jt(d), a, c || null)].join(" ") : null;
      },
      kt = function (a, b, c) {
        var d = [],
          e = [];
        if (1 == (Array.isArray(c) ? 2 : 1))
          return (
            (e = [b, a]),
            _.Qb(d, function (h) {
              e.push(h);
            }),
            mt(e.join(" "))
          );
        var f = [],
          g = [];
        _.Qb(c, function (h) {
          g.push(h.key);
          f.push(h.value);
        });
        c = Math.floor(new Date().getTime() / 1e3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        _.Qb(d, function (h) {
          e.push(h);
        });
        a = mt(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_");
      },
      mt = function (a) {
        var b = cr();
        b.update(a);
        return b.Vi().toLowerCase();
      };
    var nt = {};
    var ot = function () {
      this.h = document || { cookie: "" };
    };
    _.k = ot.prototype;
    _.k.isEnabled = function () {
      if (!_.t.navigator.cookieEnabled) return !1;
      if (!this.cc()) return !0;
      this.set("TESTCOOKIESENABLED", "1", { Ih: 60 });
      if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
      this.remove("TESTCOOKIESENABLED");
      return !0;
    };
    _.k.set = function (a, b, c) {
      var d = !1;
      if ("object" === typeof c) {
        var e = c.hm;
        d = c.im || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.Ih;
      }
      if (/[;=\s]/.test(a)) throw Error("Ha`" + a);
      if (/[;\r\n]/.test(b)) throw Error("Ia`" + b);
      void 0 === h && (h = -1);
      this.h.cookie =
        a +
        "=" +
        b +
        (f ? ";domain=" + f : "") +
        (g ? ";path=" + g : "") +
        (0 > h
          ? ""
          : 0 == h
          ? ";expires=" + new Date(1970, 1, 1).toUTCString()
          : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
        (d ? ";secure" : "") +
        (null != e ? ";samesite=" + e : "");
    };
    _.k.get = function (a, b) {
      for (
        var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f;
        e < d.length;
        e++
      ) {
        f = (0, _.Ub)(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return "";
      }
      return b;
    };
    _.k.remove = function (a, b, c) {
      var d = void 0 !== this.get(a);
      this.set(a, "", { Ih: 0, path: b, domain: c });
      return d;
    };
    _.k.Ec = function () {
      return pt(this).keys;
    };
    _.k.rb = function () {
      return pt(this).values;
    };
    _.k.cc = function () {
      return !this.h.cookie;
    };
    var pt = function (a) {
      a = (a.h.cookie || "").split(";");
      for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
        (e = (0, _.Ub)(a[f])),
          (d = e.indexOf("=")),
          -1 == d
            ? (b.push(""), c.push(e))
            : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
      return { keys: b, values: c };
    };
    var qt = function (a) {
        return !!nt.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
      },
      rt = function (a, b, c, d) {
        (a = _.t[a]) || (a = new ot().get(b));
        return a ? lt(a, c, d) : null;
      },
      st = function (a, b) {
        b = void 0 === b ? !1 : b;
        var c = jt(String(_.t.location.href)),
          d = [];
        var e = b;
        e = void 0 === e ? !1 : e;
        var f =
          _.t.__SAPISID ||
          _.t.__APISID ||
          _.t.__3PSAPISID ||
          _.t.__OVERRIDE_SID;
        qt(e) && (f = f || _.t.__1PSAPISID);
        if (f) e = !0;
        else {
          var g = new ot();
          f =
            g.get("SAPISID") ||
            g.get("APISID") ||
            g.get("__Secure-3PAPISID") ||
            g.get("SID");
          qt(e) && (f = f || g.get("__Secure-1PAPISID"));
          e = !!f;
        }
        e &&
          ((e = (c =
            0 == c.indexOf("https:") ||
            0 == c.indexOf("chrome-extension:") ||
            0 == c.indexOf("moz-extension:"))
            ? _.t.__SAPISID
            : _.t.__APISID),
          e ||
            ((e = new ot()),
            (e =
              e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"))),
          (e = e ? lt(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) &&
            d.push(e),
          c &&
            qt(b) &&
            ((b = rt("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) &&
              d.push(b),
            (a = rt("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) &&
              d.push(a)));
        return 0 == d.length ? null : d.join(" ");
      };
    var tt = function (a) {
      this.h = this.j = this.l = a;
    };
    tt.prototype.reset = function () {
      this.h = this.j = this.l;
    };
    tt.prototype.Fa = function () {
      return this.j;
    };
    var ut = function (a) {
      _.J.call(this, a);
    };
    _.x(ut, _.J);
    var wt = function (a) {
      _.J.call(this, a, -1, vt);
    };
    _.x(wt, _.J);
    var vt = [1];
    var xt = [
      "platform",
      "platformVersion",
      "architecture",
      "model",
      "uaFullVersion",
    ];
    new wt();
    var yt = function (a) {
      _.J.call(this, a);
    };
    _.x(yt, _.J);
    var At = function (a) {
      _.J.call(this, a, 31, zt);
    };
    _.x(At, _.J);
    var zt = [3, 20, 27];
    var Ct = function (a) {
      _.J.call(this, a, 17, Bt);
    };
    _.x(Ct, _.J);
    var Bt = [3, 5];
    var Et = function (a) {
      _.J.call(this, a, 6, Dt);
    };
    _.x(Et, _.J);
    var Dt = [5];
    var Ft = function (a) {
      _.J.call(this, a);
    };
    _.x(Ft, _.J);
    var Gt = new (function (a, b) {
      this.h = a;
      this.kf = b;
      this.j = br;
    })(175237375, Ft);
    var Kt = function (a, b, c, d, e, f, g, h, l, m, n) {
      _.E.call(this);
      var p = this;
      this.j = [];
      this.La = "";
      this.ma = !1;
      this.Ma = this.U = -1;
      this.ta = !1;
      this.F = this.l = null;
      this.A = 0;
      this.Tb = 1;
      this.rg = 0;
      this.X = !1;
      _.E.call(this);
      this.Ga = b || function () {};
      this.s = new Ht(a, f);
      this.Bb = d;
      this.oa = n;
      this.Ub = _.tb(Ds, 0, 1);
      this.G = e || null;
      this.C = c || null;
      this.N = g || !1;
      this.O = l || null;
      this.withCredentials = !h;
      this.Z = f || !1;
      this.Sb =
        !this.Z &&
        (65 <= $q("Chromium") ||
          45 <= $q("Firefox") ||
          12 <= $q("Safari") ||
          (_.Fa() && ar())) &&
        !!_.Yc() &&
        !!_.Yc().navigator &&
        !!_.Yc().navigator.sendBeacon;
      a = _.H(new yt(), 1, 1);
      It(this.s, a);
      this.o = new tt(1e4);
      this.h = new Ms(this.o.Fa());
      _.Pi(this, _.tb(_.ca, this.h));
      m = Jt(this, m);
      _.D(this.h, "tick", m, !1, this);
      this.J = new Ms(6e5);
      _.Pi(this, _.tb(_.ca, this.J));
      _.D(this.J, "tick", m, !1, this);
      this.N || this.J.start();
      this.Z ||
        (_.D(document, "visibilitychange", function () {
          "hidden" === document.visibilityState && p.K();
        }),
        _.D(document, "pagehide", this.K, !1, this));
    };
    _.x(Kt, _.E);
    var Jt = function (a, b) {
      return b
        ? function () {
            b().then(function () {
              a.flush();
            });
          }
        : function () {
            a.flush();
          };
    };
    Kt.prototype.L = function () {
      this.K();
      _.E.prototype.L.call(this);
    };
    var Lt = function (a) {
        a.G ||
          (a.G =
            0.01 > a.Ub()
              ? "https://www.google.com/log?format=json&hasfast=true"
              : "https://play.google.com/log?format=json&hasfast=true");
        return a.G;
      },
      Mt = function (a, b) {
        a.o = new tt(1 > b ? 1 : b);
        Ns(a.h, a.o.Fa());
      };
    Kt.prototype.log = function (a) {
      a = Wq(a);
      var b = this.Tb++;
      _.H(a, 21, b);
      _.Gh(a, 1) || _.H(a, 1, Date.now().toString());
      null == _.Gh(a, 15) && _.H(a, 15, 60 * new Date().getTimezoneOffset());
      this.l && ((b = Wq(this.l)), _.I(a, 16, b));
      for (; 1e3 <= this.j.length; ) this.j.shift(), ++this.A;
      this.j.push(a);
      this.dispatchEvent(new Nt(a));
      this.N || this.h.j || this.h.start();
    };
    Kt.prototype.flush = function (a, b) {
      var c = this;
      if (0 === this.j.length) a && a();
      else if (this.X) Ot(this);
      else {
        var d = Date.now();
        if (this.Ma > d && this.U < d) b && b("throttled");
        else {
          var e = Pt(this.s, this.j, this.A);
          d = {};
          var f = this.Ga();
          f && (d.Authorization = f);
          var g = Lt(this);
          this.C &&
            ((d["X-Goog-AuthUser"] = this.C), (g = Is(g, "authuser", this.C)));
          this.O &&
            ((d["X-Goog-PageId"] = this.O), (g = Is(g, "pageId", this.O)));
          if (f && this.La === f) b && b("stale-auth-token");
          else {
            this.j = [];
            this.h.j && this.h.stop();
            this.A = 0;
            var h = ws(e),
              l;
            this.F &&
              this.F.vb() &&
              (l = Promise.resolve(hs(Uint8Array.from(_.sk(h)))));
            var m = {
                url: g,
                body: h,
                Ri: 1,
                dg: d,
                vk: "POST",
                withCredentials: this.withCredentials,
                rg: this.rg,
              },
              n = function (q) {
                c.o.reset();
                Ns(c.h, c.o.Fa());
                if (q) {
                  var w = null;
                  try {
                    var Q = JSON.parse(q.replace(")]}'\n", ""));
                    w = new Et(Q);
                  } catch (R) {}
                  w &&
                    ((q = Number(_.fh(_.Gh(w, 1), "-1"))),
                    0 < q && ((c.U = Date.now()), (c.Ma = c.U + q)),
                    (w = Gt.j(w))) &&
                    ((w = _.fh(_.Gh(w, 1), -1)), -1 != w && (c.ta || Mt(c, w)));
                }
                a && a();
              },
              p = function (q, w) {
                var Q = Uq(e, At, 3),
                  R = c.o;
                R.h = Math.min(3e5, 2 * R.h);
                R.j = Math.min(
                  3e5,
                  R.h + Math.round(0.2 * (Math.random() - 0.5) * R.h)
                );
                Ns(c.h, c.o.Fa());
                401 === q && f && (c.La = f);
                void 0 === w &&
                  (w = (500 <= q && 600 > q) || 401 === q || 0 === q);
                w && ((c.j = Q.concat(c.j)), c.N || c.h.j || c.h.start());
                b && b("net-send-failed", q);
              },
              r = function () {
                c.oa ? c.oa.send(m, n, p) : c.Bb(m, n, p);
              };
            l
              ? l.then(
                  function (q) {
                    m.dg["Content-Encoding"] = "gzip";
                    m.dg["Content-Type"] = "application/binary";
                    m.body = q;
                    m.Ri = 2;
                    r();
                  },
                  function () {
                    r();
                  }
                )
              : r();
          }
        }
      }
    };
    Kt.prototype.K = function () {
      this.ma && Ot(this);
      this.flush();
    };
    var Ot = function (a) {
        Qt(a, function (b, c) {
          b = Is(b, "format", "json");
          b = _.Yc().navigator.sendBeacon(b, ws(c));
          a.X && !b && (a.X = !1);
          return b;
        });
      },
      Qt = function (a, b) {
        if (0 !== a.j.length) {
          var c = Lt(a);
          for (var d = c.search(Ks), e = 0, f, g = []; 0 <= (f = Js(c, e, d)); )
            g.push(c.substring(e, f)),
              (e = Math.min(c.indexOf("&", f) + 1 || d, d));
          g.push(c.slice(e));
          c = g.join("").replace(Ls, "$1");
          c = Hs(c, "auth", a.Ga(), "authuser", a.C || "0");
          for (d = 0; 10 > d && a.j.length; ++d) {
            e = a.j.slice(0, 32);
            f = Pt(a.s, e, a.A);
            if (!b(c, f)) break;
            a.A = 0;
            a.j = a.j.slice(e.length);
          }
          a.h.j && a.h.stop();
        }
      },
      Nt = function () {
        _.gd.call(this, "event-logged", void 0);
      };
    _.x(Nt, _.gd);
    var Ht = function (a, b) {
        this.l = b = void 0 === b ? !1 : b;
        this.j = this.locale = null;
        this.h = new Ct();
        _.H(this.h, 2, a);
        b || (this.locale = document.documentElement.getAttribute("lang"));
        It(this, new yt());
      },
      It = function (a, b) {
        _.I(a.h, 1, b);
        _.Gh(b, 1) || _.H(b, 1, 1);
        a.l || ((b = Rt(a)), _.Gh(b, 5) || _.H(b, 5, a.locale));
        a.j && ((b = Rt(a)), _.Hh(b, wt, 9) || _.I(b, 9, a.j));
      },
      St = function (a, b) {
        var c = void 0 === c ? xt : c;
        b(_.Yc(), c)
          .then(function (d) {
            a.j = d;
            d = Rt(a);
            _.I(d, 9, a.j);
            return !0;
          })
          .catch(function () {
            return !1;
          });
      },
      Rt = function (a) {
        a = _.Hh(a.h, yt, 1);
        var b = _.Hh(a, ut, 11);
        b || ((b = new ut()), _.I(a, 11, b));
        return b;
      },
      Pt = function (a, b, c) {
        c = void 0 === c ? 0 : c;
        a = Wq(a.h);
        a = _.H(a, 4, Date.now().toString());
        b = _.lh(a, 3, b);
        c && _.H(b, 14, c);
        return b;
      };
    var Tt = function (a) {
        a.l = _.jl;
        return a;
      },
      Vt = function (a) {
        a.j = new Ut();
        return a;
      },
      Wt = function (a) {
        var b = new er();
        b.o =
          "https://translate.googleapis.com/element/log?format=json&hasfast=true";
        b.s = a;
        return b;
      },
      Xt = function (a) {
        a.h = !0;
        return a;
      },
      Yt = function (a) {
        a.G = !0;
        return a;
      },
      Zt = function (a) {
        var b = new Kt(
          1871,
          a.s ? a.s : st,
          "0",
          a.A,
          a.o,
          !1,
          !1,
          a.G,
          void 0,
          void 0,
          a.C ? a.C : void 0
        );
        a.J && It(b.s, a.J);
        if (a.l) {
          var c = a.l,
            d = Rt(b.s);
          _.H(d, 7, c);
        }
        a.j && (b.F = a.j);
        a.F &&
          ((c = a.F)
            ? (b.l || (b.l = new it()), (c = ws(c)), _.H(b.l, 4, c))
            : b.l && _.H(b.l, 4, void 0, !1));
        if (a.da) {
          d = a.da;
          b.l || (b.l = new it());
          c = b.l;
          if (null == d) d = _.Eh;
          else {
            var e = _.Ig(d);
            1 !== (e & 1) &&
              (Object.isFrozen(d) && (d = Array.prototype.slice.call(d)),
              _.Jg(d, e | 1));
          }
          _.H(c, 2, d);
        }
        a.h && (b.ma = a.h && b.Sb);
        a.N && ((c = a.N), (b.ta = !0), Mt(b, c));
        a.K && St(b.s, a.K);
        return b;
      };
    var Y = {},
      $t =
        "undefined" !== typeof Uint8Array &&
        "undefined" !== typeof Uint16Array &&
        "undefined" !== typeof Int32Array;
    Y.assign = function (a) {
      for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
        var c = b.shift();
        if (c) {
          if ("object" !== typeof c) throw new TypeError("Ja`" + c);
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
        }
      }
      return a;
    };
    Y.og = function (a, b) {
      if (a.length === b) return a;
      if (a.subarray) return a.subarray(0, b);
      a.length = b;
      return a;
    };
    var au = {
        Oc: function (a, b, c, d, e) {
          if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
          else for (var f = 0; f < d; f++) a[e + f] = b[c + f];
        },
        bh: function (a) {
          var b, c;
          var d = (c = 0);
          for (b = a.length; d < b; d++) c += a[d].length;
          var e = new Uint8Array(c);
          d = c = 0;
          for (b = a.length; d < b; d++) {
            var f = a[d];
            e.set(f, c);
            c += f.length;
          }
          return e;
        },
      },
      bu = {
        Oc: function (a, b, c, d, e) {
          for (var f = 0; f < d; f++) a[e + f] = b[c + f];
        },
        bh: function (a) {
          return [].concat.apply([], a);
        },
      };
    Y.Bk = function () {
      $t
        ? ((Y.xc = Uint8Array),
          (Y.Qb = Uint16Array),
          (Y.ki = Int32Array),
          Y.assign(Y, au))
        : ((Y.xc = Array), (Y.Qb = Array), (Y.ki = Array), Y.assign(Y, bu));
    };
    Y.Bk();
    var cu = !0;
    try {
      new Uint8Array(1);
    } catch (a) {
      cu = !1;
    }
    for (var du = new Y.xc(256), eu = 0; 256 > eu; eu++)
      du[eu] =
        252 <= eu
          ? 6
          : 248 <= eu
          ? 5
          : 240 <= eu
          ? 4
          : 224 <= eu
          ? 3
          : 192 <= eu
          ? 2
          : 1;
    du[254] = du[254] = 1;
    var fs = function (a) {
      var b,
        c,
        d = a.length,
        e = 0;
      for (b = 0; b < d; b++) {
        var f = a.charCodeAt(b);
        if (55296 === (f & 64512) && b + 1 < d) {
          var g = a.charCodeAt(b + 1);
          56320 === (g & 64512) &&
            ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++);
        }
        e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4;
      }
      var h = new Y.xc(e);
      for (b = c = 0; c < e; b++)
        (f = a.charCodeAt(b)),
          55296 === (f & 64512) &&
            b + 1 < d &&
            ((g = a.charCodeAt(b + 1)),
            56320 === (g & 64512) &&
              ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++)),
          128 > f
            ? (h[c++] = f)
            : (2048 > f
                ? (h[c++] = 192 | (f >>> 6))
                : (65536 > f
                    ? (h[c++] = 224 | (f >>> 12))
                    : ((h[c++] = 240 | (f >>> 18)),
                      (h[c++] = 128 | ((f >>> 12) & 63))),
                  (h[c++] = 128 | ((f >>> 6) & 63))),
              (h[c++] = 128 | (f & 63)));
      return h;
    };
    var Or = {};
    Or = function (a, b, c, d) {
      var e = (a & 65535) | 0;
      a = ((a >>> 16) & 65535) | 0;
      for (var f; 0 !== c; ) {
        f = 2e3 < c ? 2e3 : c;
        c -= f;
        do (e = (e + b[d++]) | 0), (a = (a + e) | 0);
        while (--f);
        e %= 65521;
        a %= 65521;
      }
      return e | (a << 16) | 0;
    };
    for (var Pr = {}, fu, gu = [], hu = 0; 256 > hu; hu++) {
      fu = hu;
      for (var iu = 0; 8 > iu; iu++)
        fu = fu & 1 ? 3988292384 ^ (fu >>> 1) : fu >>> 1;
      gu[hu] = fu;
    }
    Pr = function (a, b, c, d) {
      c = d + c;
      for (a ^= -1; d < c; d++) a = (a >>> 8) ^ gu[(a ^ b[d]) & 255];
      return a ^ -1;
    };
    var Er = {};
    Er = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    };
    var tr = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ],
      wr = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ],
      es = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
      Ir = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      Jr = Array(576);
    fr(Jr);
    var Kr = Array(60);
    fr(Kr);
    var vr = Array(512);
    fr(vr);
    var sr = Array(256);
    fr(sr);
    var ur = Array(29);
    fr(ur);
    var xr = Array(30);
    fr(xr);
    var bs,
      cs,
      ds,
      as = !1;
    var Xr;
    Xr = [
      new Vr(0, 0, 0, 0, function (a, b) {
        var c = 65535;
        for (c > a.zb - 5 && (c = a.zb - 5); ; ) {
          if (1 >= a.S) {
            Qr(a);
            if (0 === a.S && 0 === b) return 1;
            if (0 === a.S) break;
          }
          a.M += a.S;
          a.S = 0;
          var d = a.jb + c;
          if (0 === a.M || a.M >= d)
            if (((a.S = a.M - d), (a.M = d), Lr(a, !1), 0 === a.ea.ga))
              return 1;
          if (a.M - a.jb >= a.Qa - 262 && (Lr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.eb = 0;
        if (4 === b) return Lr(a, !0), 0 === a.ea.ga ? 3 : 4;
        a.M > a.jb && Lr(a, !1);
        return 1;
      }),
      new Vr(4, 4, 8, 4, Rr),
      new Vr(4, 5, 16, 8, Rr),
      new Vr(4, 6, 32, 32, Rr),
      new Vr(4, 4, 16, 16, Sr),
      new Vr(8, 16, 32, 32, Sr),
      new Vr(8, 16, 128, 128, Sr),
      new Vr(8, 32, 128, 256, Sr),
      new Vr(32, 128, 258, 1024, Sr),
      new Vr(32, 258, 258, 4096, Sr),
    ];
    var $r = {};
    $r = function () {
      this.input = null;
      this.Mc = this.Sa = this.Lc = 0;
      this.Ed = null;
      this.sg = this.ga = this.cd = 0;
      this.msg = "";
      this.state = null;
      this.lf = 2;
      this.ca = 0;
    };
    var gs = Object.prototype.toString;
    Zr.prototype.push = function (a, b) {
      var c = this.ea,
        d = this.options.Si;
      if (this.ended) return !1;
      var e = b === ~~b ? b : !0 === b ? 4 : 0;
      "string" === typeof a
        ? (c.input = fs(a))
        : "[object ArrayBuffer]" === gs.call(a)
        ? (c.input = new Uint8Array(a))
        : (c.input = a);
      c.Lc = 0;
      c.Sa = c.input.length;
      do {
        0 === c.ga && ((c.Ed = new Y.xc(d)), (c.cd = 0), (c.ga = d));
        a = Yr(c, e);
        if (1 !== a && 0 !== a) return this.yb(a), (this.ended = !0), !1;
        if (0 === c.ga || (0 === c.Sa && (4 === e || 2 === e)))
          if ("string" === this.options.hi) {
            var f = Y.og(c.Ed, c.cd);
            b = f;
            f = f.length;
            if (65537 > f && ((b.subarray && cu) || !b.subarray))
              b = String.fromCharCode.apply(null, Y.og(b, f));
            else {
              for (var g = "", h = 0; h < f; h++)
                g += String.fromCharCode(b[h]);
              b = g;
            }
            this.ud.push(b);
          } else (b = Y.og(c.Ed, c.cd)), this.ud.push(b);
      } while ((0 < c.Sa || 0 === c.ga) && 1 !== a);
      if (4 === e)
        return (
          (c = this.ea) && c.state
            ? ((d = c.state.status),
              42 !== d &&
              69 !== d &&
              73 !== d &&
              91 !== d &&
              103 !== d &&
              113 !== d &&
              666 !== d
                ? (a = Fr(c, -2))
                : ((c.state = null), (a = 113 === d ? Fr(c, -3) : 0)))
            : (a = -2),
          this.yb(a),
          (this.ended = !0),
          0 === a
        );
      2 === e && (this.yb(0), (c.ga = 0));
      return !0;
    };
    Zr.prototype.yb = function (a) {
      0 === a &&
        (this.result =
          "string" === this.options.hi ? this.ud.join("") : Y.bh(this.ud));
      this.ud = [];
      this.qf = a;
      this.msg = this.ea.msg;
    };
    var Ut = function () {};
    Ut.prototype.vb = function () {
      try {
        return !!Uint8Array.from;
      } catch (a) {
        return !1;
      }
    };
    var ku = function () {
        this.h = ju();
      },
      ju = function () {
        return Zt(
          Tt(
            Vt(
              Xt(
                Yt(
                  Wt(function () {
                    return null;
                  })
                )
              )
            )
          )
        );
      };
    ku.prototype.log = function (a) {
      var b = this.h;
      if (a instanceof At) b.log(a);
      else {
        var c = new At();
        a = ws(a);
        c = _.H(c, 8, a);
        b.log(c);
      }
    };
    var lu = new ku();
    var mu = is("initialized"),
      nu = is("initiated"),
      ou = is("restored"),
      pu = is("page_load_to_initialized"),
      qu = is("initialization_to_translation_initiated");
    var ms = function (a) {
      _.J.call(this, a);
    };
    _.x(ms, _.J);
    var ru = function (a) {
      _.J.call(this, a);
    };
    _.x(ru, _.J);
    var js = function (a) {
      _.J.call(this, a);
    };
    _.x(js, _.J);
    var Os = [4, 5, 6];
    var su = function (a) {
      _.J.call(this, a);
    };
    _.x(su, _.J);
    var tu = function (a) {
      _.J.call(this, a);
    };
    _.x(tu, _.J);
    var uu = function (a) {
      _.J.call(this, a);
    };
    _.x(uu, _.J);
    var wu = function (a) {
      _.J.call(this, a, -1, vu);
    };
    _.x(wu, _.J);
    _.k = wu.prototype;
    _.k.kb = function () {
      return _.Gh(this, 16);
    };
    _.k.qc = function (a) {
      _.H(this, 16, a);
    };
    _.k.na = function () {
      return _.Gh(this, 1);
    };
    _.k.sa = function (a) {
      _.H(this, 1, a);
    };
    _.k.jh = function () {
      return _.Gh(this, 53);
    };
    var vu = [26, 80];
    for (var xu, yu = Array(36), zu = 0, Au, Bu = 0; 36 > Bu; Bu++)
      8 == Bu || 13 == Bu || 18 == Bu || 23 == Bu
        ? (yu[Bu] = "-")
        : 14 == Bu
        ? (yu[Bu] = "4")
        : (2 >= zu && (zu = (33554432 + 16777216 * Math.random()) | 0),
          (Au = zu & 15),
          (zu >>= 4),
          (yu[Bu] = _.Cl[19 == Bu ? (Au & 3) | 8 : Au]));
    xu = yu.join("");
    var Cu = function (a) {
        a = void 0 === a ? {} : a;
        this.Gf = void 0 === a.Gf ? xu : a.Gf;
        this.Md = this.Ld = null;
      },
      Gu = function (a) {
        var b = Du(a, 7);
        Eu(a, b);
        Fu(b);
      },
      Du = function (a, b) {
        var c = new wu();
        c = _.H(c, 50, _.T);
        var d = new su();
        b = _.H(d, 1, b);
        b = _.H(b, 2, _.nl);
        a = _.H(b, 3, a.Gf);
        return _.I(c, 112, a);
      },
      Fu = function (a) {
        var b = new At();
        a = ws(a);
        b = _.H(b, 8, a);
        lu.log(b);
      },
      Eu = function (a, b) {
        b.qc(a.Ld);
        b.sa(a.Md);
      };
    var Hu = _.Bl(Cu),
      Iu = function (a, b, c, d, e, f, g, h, l, m, n) {
        _.A.call(this);
        this.ya = b || null;
        this.K = !!c;
        this.Pc = d || "transparent";
        this.J = f || "";
        b = g || { fetchStart: 0, bm: 0 };
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.G = a && b ? b - a : 0;
        this.O = Date.now() - _.ll;
        this.s = !1;
        this.h = new _.fm(e || "", void 0, f, n);
        this.N = new _.Kp(1);
        this.A = new _.Ep();
        this.j = null;
        this.C = !0;
        this.l = null != _.t.IntersectionObserver;
        this.F = h || null;
        e = new _.El();
        f = new _.Gl(this.h.initialize.bind(this.h, e.register()));
        this.Rd = _.Hl(f, e.delay((0, _.y)(this.Rd, this)));
        this.Qd = _.Hl(f, e.delay((0, _.y)(this.Qd, this)));
        this.Sd = _.Hl(f, e.delay((0, _.y)(this.Sd, this)));
        this.restore = _.Hl(f, e.delay((0, _.y)(this.restore, this)));
        f.finish();
        e.finish();
        performance && performance.mark && performance.mark(mu, void 0);
        e = Du(Hu, 1);
        f = new tu();
        f = _.H(f, 1, window.location.origin);
        a: {
          if (
            performance &&
            ((h = performance.getEntriesByType("navigation")), 1 == h.length)
          ) {
            h = h[0];
            break a;
          }
          h = null;
        }
        if (h) {
          n = new js();
          n = _.H(n, 1, "");
          a = ks(h.startTime);
          n = _.I(n, 2, a);
          a = ls(h.duration);
          n = _.I(n, 3, a);
          a = new ru();
          a = _.H(a, 1, h.initiatorType);
          a = _.H(a, 2, h.nextHopProtocol);
          b = ks(h.workerStart || 0);
          a = _.I(a, 3, b);
          b = ks(h.redirectStart);
          a = _.I(a, 4, b);
          b = ks(h.redirectStart);
          a = _.I(a, 4, b);
          b = ks(h.redirectEnd);
          a = _.I(a, 5, b);
          b = ks(h.fetchStart);
          a = _.I(a, 6, b);
          b = ks(h.domainLookupStart);
          a = _.I(a, 7, b);
          b = ks(h.domainLookupEnd);
          a = _.I(a, 8, b);
          b = ks(h.connectStart);
          a = _.I(a, 9, b);
          b = ks(h.connectEnd);
          a = _.I(a, 10, b);
          b = ks(h.secureConnectionStart);
          a = _.I(a, 11, b);
          b = ks(h.responseStart);
          a = _.I(a, 13, b);
          b = ks(h.responseEnd);
          a = _.I(a, 14, b);
          a = _.H(a, 15, h.transferSize);
          a = _.H(a, 16, h.encodedBodySize);
          a = _.H(a, 17, h.decodedBodySize);
          n = ns(n, 6, a);
          _.I(f, 2, n);
          n = rs(mu);
          if (
            (h = ss(pu, { start: h.responseEnd, end: n || performance.now() }))
          )
            performance &&
              performance.clearMeasures &&
              performance.clearMeasures(pu),
              (h = os(h)),
              _.I(f, 3, h);
          h = _.Hh(e, su, 112);
          _.I(h, 4, f);
        }
        Fu(e);
      };
    _.z(Iu, _.A);
    _.Rl.attach(14097, Iu.prototype, {
      Mf: function () {
        _.Di(this.h.vb() ? "te_afas" : "te_afau");
      },
    });
    _.k = Iu.prototype;
    _.k.Ak = function (a) {
      this.l = a;
    };
    _.k.Wa = function () {
      return this.h.vb();
    };
    _.k.Rd = function (a, b) {
      this.h.Wa() ? this.h.o.send(_.Hi(b), a) : (this.Mf(), a(null));
    };
    _.k.Qd = function (a) {
      var b = document.documentElement.lang;
      if (b) a(b);
      else if (this.h.Wa()) {
        b = new _.pm(document.body, !1, !1, 1, 1);
        for (var c = [], d = 0, e = this.h.j.Of; c.length + d < e; ) {
          var f = b.next();
          if (f.done) break;
          f = f.value;
          1 == b.h && _.fq(f)
            ? _.qm(b)
            : 3 == f.nodeType &&
              (f = (0, _.Ub)(_.xj(f.nodeValue))) &&
              (c.push(f), (d += f.length));
        }
        _.gm(this.h, a, c.join(" "));
      } else this.Mf(), a(null, !0);
    };
    _.k.Sd = function (a, b, c, d, e) {
      Hu.Ld = a;
      Hu.Md = b;
      var f = Du(Hu, 2);
      Eu(Hu, f);
      var g = rs(mu);
      if (g) {
        var h = rs(nu);
        if ((g = ss(qu, { start: g, end: h || performance.now() })))
          (f = _.Hh(f, su, 112)),
            (h = new uu()),
            (g = os(g)),
            (g = _.I(h, 1, g)),
            _.I(f, 5, g),
            performance &&
              performance.clearMeasures &&
              performance.clearMeasures(qu);
      }
      f = { detail: { sourceLanguage: a, targetLanguage: b } };
      performance && performance.mark && performance.mark(nu, f);
      f = Date.now();
      zs();
      if (!a || $s(a, b)) a = "auto";
      if (e || a != this.o || b != this.W) this.A = new _.Ep();
      this.o = a;
      this.W = b;
      this.h.Wa()
        ? ((d = d || document.documentElement),
          this.j && this.j.P(),
          this.F.reset(),
          (this.j = new _.Hq(
            d,
            this.h,
            this.ya,
            this.K,
            this.Pc,
            !0,
            this.N,
            this.A,
            this.l,
            this.F
          )),
          (this.j.ta = this.s),
          (this.C = !0),
          this.j.translate(a, b, c, e, (0, _.y)(this.Zj, this, f, a, b)))
        : (this.Mf(), c(0, !1, !0));
    };
    _.k.si = function () {
      return !!this.j && this.j.h;
    };
    _.k.Gg = function (a) {
      this.s = a;
    };
    _.k.restore = function () {
      var a = Du(Hu, 3);
      Eu(Hu, a);
      Fu(a);
      performance && performance.mark && performance.mark(ou, void 0);
      zs();
      this.h.Wa() && this.j && this.j.restore();
    };
    _.k.L = function () {
      ys();
      Iu.R.L.call(this);
      this.h.P();
      this.j = this.h = null;
      this.A = new _.Ep();
    };
    _.k.Zj = function (a, b, c, d) {
      this.C &&
        ((this.C = !1),
        (b = { sl: b, tl: c, textlen: d }),
        this.s && (b.ctt = "1"),
        "" != this.J && (b.sp = this.J),
        (b.ttt = Date.now() - a),
        (b.ttl = this.O),
        this.G && (b.ttf = this.G),
        this.l && (b.sr = 1),
        _.Di("te_time", b));
    };
    var Ju = function (a) {
      _.N.call(this, a);
      this.H = new _.F(this);
    };
    _.x(Ju, _.N);
    Ju.prototype.T = function () {
      var a = _.sh(this.h, "select");
      a.className = "goog-te-combo";
      a.setAttribute("aria-label", _.U.Hg);
      this.Aa(a);
    };
    Ju.prototype.ka = function () {
      _.N.prototype.ka.call(this);
      this.Zg();
    };
    Ju.prototype.Zg = function () {
      _.D(this.B(), "change", _.Kl(this, "change"));
      this.dispatchEvent("load");
    };
    Ju.prototype.ia = function () {
      _.N.prototype.ia.call(this);
      this.H.P();
      this.H = null;
    };
    var Ku = function (a, b) {
      a.B().parentNode != b &&
        (a.B().parentNode.removeChild(a.B()), b.appendChild(a.B()));
    };
    _.k = Ju.prototype;
    _.k.Jd = function (a) {
      this.h.Zf(this.B());
      for (var b in a)
        if (a[b] !== Object.prototype[b]) {
          var c = this.h.T("OPTION", { value: b });
          this.h.rc(c, a[b]);
          this.B().appendChild(c);
        }
      this.B().selectedIndex = 0;
    };
    _.k.Fa = function () {
      return this.B().value;
    };
    _.k.ob = function (a) {
      if (this.B().value != a)
        for (var b = 0, c; (c = this.B().options.item(b)); ++b)
          if (c.value == a) {
            this.B().selectedIndex = b;
            break;
          }
    };
    _.k.Td = function (a) {
      if ("undefined" == _.ob(a))
        return this.B().options.item(this.B().selectedIndex).text;
      for (var b = 0, c; (c = this.B().options.item(b)); ++b)
        if (c.value == a) return c.text;
    };
    _.k.mb = function (a) {
      this.B().disabled = !a;
    };
    var Lu = function (a) {
      Ju.call(this, a);
    };
    _.x(Lu, Ju);
    Lu.prototype.Kd = function (a) {
      this.Jd.call(this, a);
    };
    var Mu = function (a, b) {
      Ju.call(this, b);
      this.D = (a && _.ni(a)) || {};
      this.D.eg = this.D.eg || 11;
      this.D.Ie = 0 != this.D.Ie;
      this.D.Fb || (this.D.Fb = _.wl);
    };
    _.x(Mu, Ju);
    _.k = Mu.prototype;
    _.k.be = function () {
      throw Error("Ka");
    };
    _.k.T = function () {
      this.be();
      this.A = this.B();
      this.o = _.Fj("IFRAME", {
        frameBorder: 0,
        class: "goog-te-menu-frame skiptranslate",
        title: _.U.Hg,
      });
      this.o.style.visibility = "visible";
      _.S(this.o, !1);
      document.body.appendChild(this.o);
    };
    _.k.Zg = function () {
      var a = _.nf.test(_.T) ? "rtl" : "ltr",
        b = _.Pa(this.D.Fb),
        c = _.V(this, "menuBody");
      this.H.I(this.o, "load", this.ti);
      Zs(
        this.o,
        (0, _.y)(function () {
          var d = _.Kj(this.o);
          var e = (0, _.L)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.M(Vs(b)) +
              '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' +
              _.M(a) +
              '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' +
              _.M(c) +
              '" class="goog-te-menu"></div></body>'
          );
          e = _.wi(e);
          d.write(_.Gc(e));
          d.close();
        }, this)
      );
    };
    _.k.ti = function () {
      this.j = new _.Qc(_.Kj(this.o));
      this.O = this.j.B(_.V(this, "menuBody"));
      this.H.I(this.A, "click", this.wf);
      _.C
        ? this.H.I(this.o, "blur", this.ke)
        : this.H.I(Es(this.o), "blur", this.ke);
      this.dispatchEvent("load");
    };
    _.k.ia = function () {
      Ju.prototype.ia.call(this);
      _.Ij(this.o);
      this.A = this.Z = this.s = this.O = this.j = this.o = null;
    };
    _.k.qh = function (a) {
      this.Za != a.currentTarget.value &&
        (this.ob(a.currentTarget.value), this.dispatchEvent("change"));
      this.ke();
    };
    _.k.wf = function () {
      Nu(this);
      Es(this.o).focus();
      this.ma = !0;
    };
    _.k.ke = function () {
      this.ma && ((this.ma = !1), Nu(this, !1), _.Yc(_.Rc(this.A)).focus());
    };
    _.k.ag = function () {};
    _.k.bg = function () {};
    var Nu = function (a, b) {
      if ("undefined" == typeof b || b) {
        a.bg();
        b = _.Ek(a.A, window);
        var c = b.y + a.A.offsetHeight,
          d = b.y - a.G.height,
          e = b.x,
          f = b.x + a.A.offsetWidth - a.G.width;
        if (_.C && !_.kj()) {
          var g = document.body;
          c -= g.offsetTop;
          d -= g.offsetTop;
          e -= g.offsetLeft;
          f -= g.offsetLeft;
        } else
          (g = _.Ui(document)), (c -= g.y), (d -= g.y), (e -= g.x), (f -= g.x);
        g = _.Xc(window);
        b.y = b.y <= g.height - a.G.height ? c : d;
        b.y > g.height - a.G.height && (b.y = g.height - a.G.height);
        0 > b.y && (b.y = 0);
        _.nf.test(_.T)
          ? (b.x = 0 <= f ? f : e)
          : (b.x = e <= g.width - a.G.width ? e : f);
        b.x > g.width - a.G.width && (b.x = g.width - a.G.width);
        0 > b.x && (b.x = 0);
        _.yk(a.o, b);
        _.S(a.o, !0);
        Ou(a);
      } else a.ag(), _.S(a.o, !1);
    };
    _.k = Mu.prototype;
    _.k.Fa = function () {
      return this.Za;
    };
    _.k.Jd = function (a) {
      this.j.Zf(this.O);
      _.S(this.o, !0);
      this.ta = a;
      this.s = [];
      for (var b in a)
        if (a[b] !== Object.prototype[b])
          if ("---" == a[b]) {
            var c = {
              link: this.j.T("DIV", {
                className: "goog-te-menu2-separator",
                value: b,
              }),
              Mj: !0,
            };
            this.s.push(c);
          } else {
            c = {
              link: this.j.T("A", {
                className: "goog-te-menu2-item-selected",
                href: "javascript:void(0)",
                value: b,
              }),
            };
            this.s.push(c);
            var d = this.j.T("DIV", { style: "white-space:nowrap" });
            this.j.appendChild(c.link, d);
            this.D.Ie &&
              this.j.appendChild(
                d,
                this.j.T("SPAN", { className: "indicator" }, "\u203a")
              );
            this.j.appendChild(
              d,
              this.j.T("SPAN", { className: "text" }, a[b])
            );
            this.H.I(c.link, "click", this.qh);
          }
      a = this.s.length - 1;
      a = Math.round((a - (a % this.D.eg)) / this.D.eg) + 1;
      this.Z = this.j.T("TABLE", { cellspacing: 0, cellpadding: 0, border: 0 });
      c = this.j.T("TBODY");
      b = this.j.T("TR", { valign: "top" });
      this.O.className = "goog-te-menu2";
      this.j.appendChild(this.O, this.Z);
      this.j.appendChild(this.Z, c);
      this.j.appendChild(c, b);
      for (d = c = 0; c < a; ++c) {
        var e = this.j.T("TD");
        this.j.appendChild(b, e);
        for (var f = 0; 11 > f && d < this.s.length; ++f, ++d)
          this.j.appendChild(e, this.s[d].link);
        c != a - 1 &&
          ((e = this.j.T("TD", { class: "goog-te-menu2-colpad" }, "\u00a0")),
          this.j.appendChild(b, e));
      }
      this.Za = null;
      this.ob(this.s[0].link.value);
      Ou(this);
      _.S(this.o, !1);
    };
    _.k.Td = function (a) {
      return this.ta["undefined" == _.ob(a) ? this.Za : a];
    };
    _.k.cg = function () {};
    _.k.ob = function (a) {
      if (this.Za != a) {
        this.Td(a) && ((this.Za = a), this.cg());
        for (var b = 0; b < this.s.length; ++b) {
          var c = this.s[b];
          c.Mj ||
            (c.link.className =
              c.link.value == a && this.D.Ie
                ? "goog-te-menu2-item-selected"
                : "goog-te-menu2-item");
        }
      }
    };
    var Ou = function (a) {
        Ss(a.O, Rs(a.Z));
        Ss(a.o, Rs(a.O));
        a.G = Rs(a.o);
      },
      Pu = function (a, b) {
        Mu.call(this, a, b);
      };
    _.x(Pu, Mu);
    _.k = Pu.prototype;
    _.k.be = function () {
      var a = this.h.T("a", { "aria-haspopup": "true" });
      a.className = "goog-te-menu-value";
      a.href = "javascript:void(0)";
      this.K = this.h.T("SPAN");
      a.appendChild(this.K);
      this.U = this.h.T("IMG", {
        src: "https://www.google.com/images/cleardot.gif",
        alt: "",
        style:
          "background-image:url(" +
          _.sl +
          ");background-position:-14px 0px;border:none",
        width: 14,
        height: 14,
      });
      a.appendChild(this.U);
      this.Aa(a);
    };
    _.k.ag = function () {
      _.K(this.U, "backgroundPosition", "-14px 0px");
    };
    _.k.bg = function () {
      _.K(this.U, "backgroundPosition", "0px 0px");
    };
    _.k.ia = function () {
      Mu.prototype.ia.call(this);
      this.U = this.K = null;
    };
    _.k.cg = function () {
      this.h.rc(this.K, this.Td(this.Za) || "");
    };
    _.k.Kd = function (a) {
      this.Jd.call(this, a);
    };
    var Qu = function (a, b) {
      Mu.call(this, a, b);
    };
    _.x(Qu, Mu);
    _.k = Qu.prototype;
    _.k.be = function () {
      var a = this.h.T("a", { "aria-haspopup": "true" });
      a.className = "goog-te-menu-value";
      a.href = "javascript:void(0)";
      this.K = this.h.T("SPAN");
      a.appendChild(this.K);
      a.appendChild(
        this.h.T("IMG", {
          src: "https://www.google.com/images/cleardot.gif",
          alt: "",
          width: 1,
          height: 1,
        })
      );
      a.appendChild(
        this.h.T("SPAN", { style: "border-left:1px solid #bbb" }, "\u200b")
      );
      a.appendChild(
        this.h.T("IMG", {
          src: "https://www.google.com/images/cleardot.gif",
          alt: "",
          width: 1,
          height: 1,
        })
      );
      this.U = this.h.T(
        "span",
        { style: "color:#767676", "aria-hidden": "true" },
        "\u25bc"
      );
      a.appendChild(this.U);
      this.Aa(a);
    };
    _.k.ag = function () {
      _.K(this.U, "color", "#9b9b9b");
    };
    _.k.bg = function () {
      _.K(this.U, "color", "#d5d5d5");
    };
    _.k.ia = function () {
      Mu.prototype.ia.call(this);
      this.U = this.K = null;
    };
    _.k.cg = function () {
      this.h.rc(this.K, this.Td(this.Za) || "");
    };
    _.k.Kd = function (a) {
      this.Jd.call(this, a);
    };
    var Ru = function (a, b) {
      Mu.call(this, a, b);
      this.D.Ie = !1;
    };
    _.x(Ru, Mu);
    Ru.prototype.be = function () {
      var a = _.sh(this.h, "div");
      a.className = "goog-te-button";
      var b = this.h.T("DIV", {
        style: "background: url(" + _.rl + ") repeat-x 0 -39px",
      });
      a.appendChild(b);
      this.K = _.sh(this.h, "button");
      b.appendChild(this.K);
      this.Aa(a);
    };
    Ru.prototype.ai = function (a) {
      _.bd(this.K);
      this.K.appendChild(this.h.V.createTextNode(String(a + "\u00a0\u25bc")));
    };
    Ru.prototype.ia = function () {
      Mu.prototype.ia.call(this);
      this.K = null;
    };
    Ru.prototype.qh = function (a) {
      this.ob(a.currentTarget.value);
      this.dispatchEvent("change");
      this.ke();
    };
    var Su = function () {
      this.j = {};
      this.h = 0;
    };
    Su.prototype.l = function (a, b) {
      a = this.j[b];
      if (!a) return b;
      b = "";
      a.pg && (b += "<" + a.pg + a.attributes + ">");
      a.Ef && (b += a.Ef);
      a.pf && (b += "</" + a.pf + ">");
      return b;
    };
    Su.prototype.pg = function (a, b) {
      _.pj(a);
      return Tu(this, { pg: a, attributes: _.tj(b) });
    };
    Su.prototype.pf = function (a) {
      _.pj(a);
      return Tu(this, { pf: a });
    };
    Su.prototype.text = function (a) {
      return Tu(this, { Ef: _.zj(a) });
    };
    var Tu = function (a, b) {
      a.h++;
      var c = "{SafeHtmlFormatter:" + a.h + "_" + _.Pc() + "}";
      a.j[_.zj(c)] = b;
      return c;
    };
    var Uu = function (a, b) {
      _.N.call(this, b);
      this.D = (a && _.ni(a)) || {};
      this.H = new _.F(this);
    };
    _.z(Uu, _.N);
    var Vu = { Ul: 0, nl: 1, Jl: 2 };
    _.k = Uu.prototype;
    _.k.T = function () {
      var a = _.sh(this.h, "div");
      _.ln(a, "skiptranslate");
      _.ln(a, "goog-te-gadget");
      a.dir = _.nf.test(_.T) ? "rtl" : "ltr";
      _.S(a, !1);
      if (2 == this.D.Jc) {
        var b = ct({ id: _.V(this, "targetLanguage"), Th: "", Sh: "" });
        _.Ai(a, _.yi(b));
      } else {
        b = new Su();
        var c = _.wm({
            Ah: _.C && !_.kj(),
            Zc: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
            Hh: "https://translate.google.com",
          }),
          d = _.U,
          e = d.Kg;
        c = _.wi(c);
        c = Tu(b, { Ef: _.Gc(c).toString() });
        d = e.call(d, c);
        e = _.zj("SafeHtmlFormatter:");
        b = _.zj(d).replace(
          new RegExp("\\{" + e + "[\\w&#;]+\\}", "g"),
          (0, _.y)(b.l, b, [])
        );
        b = _.Hc(b);
        b = ct({
          id: _.V(this, "targetLanguage"),
          Th: "",
          Sh: 1 == this.D.Jc ? _.rj("\u00a0", "\u00a0", b) : b,
        });
        _.Ai(a, _.yi(b));
      }
      this.Aa(a);
    };
    _.k.ka = function () {
      Uu.R.ka.call(this);
      this.o = 2 == this.D.Jc ? new Qu(null, this.h) : new Lu(this.h);
      this.H.I(this.o, "change", _.Kl(this, "chg_tgt_lang"));
      this.H.I(this.o, "load", this.ui);
      var a = this.h.B(_.V(this, "targetLanguage"));
      if (2 == this.D.Jc) {
        var b = this.h.T("IMG", {
          src: "https://www.google.com/images/cleardot.gif",
          class: "goog-te-gadget-icon",
          alt: "",
        });
        b.style.backgroundImage = "url(" + _.sl + ")";
        b.style.backgroundPosition = "-65px 0px";
        var c = this.h.T("SPAN", { style: "vertical-align: middle" });
        a.appendChild(b);
        a.appendChild(c);
        this.o.Ca(c);
        a.style.whiteSpace = "nowrap";
        a.className = "goog-te-gadget-simple";
      } else this.o.Ca(a), 1 == this.D.Jc && (a.style.display = "inline");
    };
    _.k.ui = function () {
      if (2 == this.D.Jc) {
        var a = this.o,
          b = this.h.B(_.V(this, "targetLanguage"));
        a.H.Gb(a.A, "click", a.wf);
        a.A = b;
        a.H.I(a.A, "click", a.wf);
      }
      this.dispatchEvent("load");
    };
    _.k.ia = function () {
      Uu.R.ia.call(this);
      this.H.P();
      this.H = null;
      this.o.P();
      this.o = null;
    };
    _.k.na = function () {
      return this.o.Fa();
    };
    _.k.Ob = function (a) {
      this.o.Kd(a);
    };
    _.k.sa = function (a) {
      "" == a ? this.O && this.Ob(this.O) : this.K && this.Ob(this.K);
      this.o.ob(a);
    };
    _.k.Y = function (a) {
      _.S(this.B(), a);
    };
    _.k.mb = function (a) {
      this.o.mb(a);
    };
    _.k.lg = function (a, b) {
      this.O = a;
      this.K = b;
    };
    var Wu = function (a, b) {
      _.N.call(this, b);
      this.D = (a && _.ni(a)) || {};
      this.D.Fb || (this.D.Fb = _.wl);
      this.H = new _.F(this);
    };
    _.z(Wu, _.N);
    var Xu = { Ol: 1, Pl: 2, Xk: 3, Wk: 4 };
    _.k = Wu.prototype;
    _.k.T = function () {
      var a = _.sh(this.h, "div");
      this.Ib = !1;
      _.S(a, !1);
      var b = _.V(this, "container");
      b = (0, _.L)(
        '<iframe id="' +
          _.M(b) +
          '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>'
      );
      _.Ai(a, _.yi(b));
      this.Aa(a);
    };
    _.k.ka = function () {
      Wu.R.ka.call(this);
      var a = _.nf.test(_.T) ? "rtl" : "ltr",
        b = _.Pa(this.D.Fb),
        c = _.V(this, "translate");
      this.B().id = _.V(this, "floatContainer");
      var d = { id: this.B().id, className: "goog-te-ftab-float" };
      this.B().className += " goog-te-ftab-float";
      switch (this.D.he) {
        case 2:
          var e = "goog-float-top";
          d.top = 0;
          d.right = 20;
          break;
        case 3:
          e = "goog-float-bottom";
          d.bottom = 0;
          d.right = 20;
          break;
        case 4:
          e = "goog-float-bottom";
          d.bottom = 0;
          d.left = 20;
          break;
        default:
          (e = "goog-float-top"), (d.top = 0), (d.left = 20);
      }
      Qs(Bs(new _.uf(), d), this.B());
      this.A = this.h.B(_.V(this, "container"));
      this.H.I(this.A, "load", this.vi);
      Zs(
        this.A,
        (0, _.y)(function () {
          var f = _.Kj(this.A);
          var g = e;
          var h = _.U.af;
          g = (0, _.L)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.M(Vs(b)) +
              '"></head><body class="goog-te-ftab ' +
              _.M(g) +
              '" scroll="no" style="overflow:hidden" dir="' +
              _.M(a) +
              '"><a id="' +
              _.M(c) +
              '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' +
              _.M(_.fl("https://www.google.com/images/cleardot.gif")) +
              '" style="background-image:url(' +
              _.M(_.fl(_.sl)) +
              ');background-position:-65px 0px"><span>' +
              _.Zk(h) +
              "</span></a></body>"
          );
          g = _.wi(g);
          f.write(_.Gc(g));
          f.close();
        }, this)
      );
    };
    _.k.vi = function () {
      this.j = new _.Qc(_.Kj(this.A)).B(_.V(this, "translate"));
      this.H.I(this.j, "click", _.Kl(this, "clk_trans"));
      _.S(this.B(), !0);
      var a = Rs(this.j);
      _.S(this.B(), !1);
      Ss(this.A, a);
      Ss(this.B(), a);
      this.dispatchEvent("load");
    };
    _.k.ia = function () {
      Wu.R.ia.call(this);
      this.H.P();
      this.H = null;
      _.Ij(this.A);
      this.j = this.A = null;
    };
    _.k.isVisible = function () {
      return this.Ib;
    };
    _.k.Y = function (a) {
      this.Ib = a;
      _.S(this.B(), a);
    };
    var Yu = function (a, b) {
      _.N.call(this, b);
      this.H = new _.F(this);
      this.D = (a && _.ni(a)) || {};
      this.D.Fb || (this.D.Fb = _.wl);
      this.D.ng = !1;
      _.K(this.h.V.body, "position", "relative");
      _.Dg || _.K(this.h.V.body, "minHeight", "100%");
      _.K(this.h.V.documentElement, "height", "100%");
      _.K(this.h.V.body, "top", "0px");
      _.C &&
        ((window._bannerquirkfixleft = -parseInt(
          "0" + this.h.V.body.leftMargin,
          10
        )),
        (window._bannerquirkfixtop =
          -parseInt("0" + this.h.V.body.topMargin, 10) - 40));
    };
    _.z(Yu, _.N);
    _.k = Yu.prototype;
    _.k.Ca = function () {
      var a = this.h.V.body.firstChild;
      _.Gm(this, a.parentNode, a);
    };
    _.k.T = function () {
      var a = _.sh(this.h, "div");
      this.Ib = !1;
      _.S(a, !1);
      _.ln(a, "skiptranslate");
      var b = _.V(this, "container");
      b = (0, _.L)(
        '<iframe id="' +
          _.M(b) +
          '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>'
      );
      _.Ai(a, _.yi(b));
      this.Aa(a);
    };
    _.k.ka = function () {
      Yu.R.ka.call(this);
      var a = _.nf.test(_.T) ? "rtl" : "ltr",
        b = _.Pa(this.D.Fb),
        c = _.V(this, "promptSection"),
        d = _.V(this, "confirm"),
        e = _.V(this, "progressSection"),
        f = _.V(this, "progressValue"),
        g = _.V(this, "cancel"),
        h = _.V(this, "finishSection"),
        l = _.V(this, "restore"),
        m = _.V(this, "errorSection"),
        n = _.V(this, "errorContent"),
        p = _.V(this, "close"),
        r = _.V(this, "noAutoPopup"),
        q,
        w = [];
      this.D.ng && w.push(bt({ id: _.V(this, "promptSourceLang") }));
      w.push(bt({ id: _.V(this, "promptTargetLang") }));
      var Q = _.Hc(_.U.Ni.apply(null, w));
      w = [];
      this.D.ng && w.push(bt({ id: _.V(this, "finishSourceLang") }));
      w.push(bt({ id: _.V(this, "finishTargetLang") }));
      var R = _.Hc(_.U.Hi.apply(null, w));
      this.D.ei && (q = this.D.ei);
      this.A = this.h.B(_.V(this, "container"));
      this.H.I(this.A, "load", this.wi);
      Zs(
        this.A,
        (0, _.y)(function () {
          var Da = _.Kj(this.A);
          var ea = q;
          var fe = _.U.nd,
            sw = _.U.af,
            tw = _.U.Ji,
            uw = _.U.Ne,
            vw = _.U.Mg,
            ww = _.U.wg,
            xw = _.U.wg;
          ea = (0, _.L)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.M(Vs(b)) +
              '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' +
              _.M(a) +
              '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' +
              _.M(_.dl("https://translate.google.com")) +
              '" class="goog-logo-link" target="_blank"><img src="' +
              _.M(
                _.fl(
                  "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png"
                )
              ) +
              '" alt="Google ' +
              _.M(fe) +
              '"></a></td>' +
              (ea
                ? '<td width=1><img src="' +
                  _.M(_.fl("https://www.google.com/images/cleardot.gif")) +
                  '" width="9" height="15" title="' +
                  _.M(ea) +
                  '" alt="' +
                  _.M(ea) +
                  '" style="background-image:url(' +
                  _.M(_.fl(_.sl)) +
                  ');background-position:-56px 0px;margin:0 4px"></td>'
                : "") +
              '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' +
              _.M(c) +
              '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' +
              _.Zk(Q) +
              '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.M(d) +
              '"><b>' +
              _.Zk(sw) +
              '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.M(r) +
              '"></button></div></div></td></tr><tr id="' +
              _.M(e) +
              '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' +
              _.Zk(tw) +
              '&nbsp;<span dir="ltr">(<b id="' +
              _.M(f) +
              '"></b>%)</span>&nbsp;<img src="' +
              _.M(_.fl(_.ul)) +
              '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.M(g) +
              '">' +
              _.Zk(uw) +
              '</button></div></div></td></tr><tr id="' +
              _.M(h) +
              '" style="display:none"><td><span class="goog-te-banner-content">' +
              _.Zk(R) +
              '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.M(l) +
              '">' +
              _.Zk(vw) +
              '</button></div></div></td></tr><tr id="' +
              _.M(m) +
              '" style="display:none" valign=middle><td><span id="' +
              _.M(n) +
              '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' +
              _.M(p) +
              '" class="goog-close-link" href="javascript:void(0)" title="' +
              _.M(ww) +
              '"><img src="' +
              _.M(_.fl("https://www.google.com/images/cleardot.gif")) +
              '" width="15" height="15" alt="' +
              _.M(xw) +
              '" style="background-image:url(' +
              _.M(_.fl(_.sl)) +
              ');background-position:-28px 0px"></a></td></tr></table></body>'
          );
          ea = _.wi(ea);
          Da.write(_.Gc(ea));
          Da.close();
        }, this)
      );
    };
    _.k.wi = function () {
      this.j = new _.Qc(_.Kj(this.A));
      Zu(this, _.U.Bg);
      if (this.D.Fb == _.wl) {
        var a = "url(" + _.rl + ")";
        _.K(this.j.V.body, "backgroundImage", a);
        for (
          var b = this.j.V.getElementsByTagName("button"), c = 0;
          c < b.length;
          ++c
        ) {
          var d = b[c].parentNode;
          _.K(d, "backgroundImage", a);
          _.K(d, "backgroundRepeat", "repeat-x");
          _.K(d, "backgroundPosition", "0 -39px");
        }
      }
      this.D.ng && (this.s = new Pu(this.D, this.j));
      this.o = new Pu(this.D, this.j);
      this.G = new Ru(this.D, this.j);
      this.H.I(
        this.j.B(_.V(this, "confirm")),
        "click",
        _.Kl(this, "clk_confirm")
      );
      this.H.I(
        this.j.B(_.V(this, "cancel")),
        "click",
        _.Kl(this, "clk_cancel")
      );
      this.H.I(
        this.j.B(_.V(this, "restore")),
        "click",
        _.Kl(this, "clk_restore")
      );
      this.H.I(this.j.B(_.V(this, "close")), "click", _.Kl(this, "clk_close"));
      this.U = this.j.B(_.V(this, "noAutoPopup"));
      this.H.I(this.U, "click", _.Kl(this, "clk_no_ap"));
      this.s && this.H.I(this.s, "change", _.Kl(this, "chg_src_lang"));
      this.H.I(this.o, "change", _.Kl(this, "chg_tgt_lang"));
      this.H.I(this.G, "change", this.wj);
      a = new _.El((0, _.y)(this.xi, this));
      this.s && this.H.I(this.s, "load", a.register());
      this.H.I(this.o, "load", a.register());
      this.H.I(this.G, "load", a.register());
      a.finish();
      this.s && this.s.Ca(this.j.B(_.V(this, "promptSourceLang")));
      this.o.Ca(this.j.B(_.V(this, "promptTargetLang")));
      this.G.Ca(this.j.B("options"));
    };
    _.k.xi = function () {
      this.G.ai(_.U.Bi);
      this.G.Jd({ turn_off_site: _.U.Mi, s1: "---", learn_more: _.U.Ai });
      this.dispatchEvent("load");
    };
    _.k.wj = function () {
      switch (this.G.Fa()) {
        case "learn_more":
          window.open(_.Al, "_blank");
          break;
        case "turn_off_site":
          this.dispatchEvent("clk_no_ap_site");
      }
    };
    _.k.ia = function () {
      this.Y(!1);
      Yu.R.ia.call(this);
      this.H.P();
      this.H = null;
      this.s && (this.s.P(), (this.s = null));
      this.o.P();
      this.o = null;
      this.G.P();
      this.G = null;
      _.Ij(this.A);
      this.wd = this.j = null;
    };
    _.k.kb = function () {
      return this.s ? this.s.Fa() : "";
    };
    _.k.na = function () {
      return this.o.Fa();
    };
    _.k.Ob = function (a) {
      this.o.Kd(a);
    };
    _.k.qc = function (a) {
      this.s && this.s.ob(a);
      this.Z && this.Z[a] && this.j.rc(this.U, _.U.Li(this.Z[a]));
    };
    _.k.sa = function (a) {
      this.o.ob(a);
    };
    var $u = function (a, b, c, d) {
      if (a.wd != b) {
        a.wd = b;
        if (0 == b) {
          a.s && Ku(a.s, a.j.B(_.V(a, "promptSourceLang")));
          if (a.O) {
            var e = a.na();
            a.Ob(a.O);
            a.sa(e);
          }
          Ku(a.o, a.j.B(_.V(a, "promptTargetLang")));
        } else
          2 == b &&
            (a.s && Ku(a.s, a.j.B(_.V(a, "finishSourceLang"))),
            a.K && ((e = a.na()), a.Ob(a.K), a.sa(e)),
            Ku(a.o, a.j.B(_.V(a, "finishTargetLang"))));
        e = {};
        e[-1] = a.j.B(_.V(a, "errorSection"));
        e[0] = a.j.B(_.V(a, "promptSection"));
        e[1] = a.j.B(_.V(a, "progressSection"));
        e[2] = a.j.B(_.V(a, "finishSection"));
        for (var f in e) e[f] !== Object.prototype[f] && _.S(e[f], f == b);
      }
      c && a.Y(!0);
      a.U.parentNode.parentNode.style.display = d ? "block" : "none";
    };
    Yu.prototype.isVisible = function () {
      return this.Ib;
    };
    Yu.prototype.Y = function (a) {
      if (this.Ib != a) {
        this.Ib = a;
        if (_.C)
          var b = parseInt("0" + this.h.V.body.leftMargin, 10),
            c = parseInt("0" + this.h.V.body.topMargin, 10);
        var d = "BackCompat" == this.h.V.compatMode;
        a
          ? (_.K(this.h.V.body, "top", "40px"),
            _.S(this.B(), !0),
            _.C &&
              (_.kj()
                ? ((window._bannerquirkfixleft = window._bannerquirkfixtop = 0),
                  d && (this.h.V.body.topMargin = c + 40))
                : d
                ? ((this.h.V.body.topMargin = c + 40),
                  (window._bannerquirkfixleft = window._bannerquirkfixtop = 0))
                : ((window._bannerquirkfixleft = -b),
                  (window._bannerquirkfixtop = -c - 40))))
          : (_.K(this.h.V.body, "top", "0px"),
            _.S(this.B(), !1),
            d && 40 <= c && (this.h.V.body.topMargin = c - 40));
      }
    };
    Yu.prototype.kg = function (a) {
      this.j.rc(this.j.B(_.V(this, "progressValue")), a);
    };
    var Zu = function (a, b) {
      a.j.rc(a.j.B(_.V(a, "errorContent")), b);
    };
    Yu.prototype.lg = function (a, b) {
      this.O = a;
      this.K = b;
      this.Ob(a);
    };
    var av = function (a, b) {
      _.A.call(this);
      "string" == _.ob(a) && ((b = a), (a = {}));
      "string" == _.ob(b) && (b = _.P(String(b)));
      this.G = b;
      this.H = new _.F(this);
      this.O = void 0;
      this.K = new Map();
      this.N = _.Bl(Cu);
      this.Xf(Object(a));
      this.ya = new _.lp(
        { apiKey: this.D.apiKey, lc: 1, He: !0, Ik: _.yl },
        { client: _.nl, u: window.location.href }
      );
      this.Ea = new Iu(
        void 0,
        this.ya,
        void 0,
        void 0,
        this.D.apiKey,
        void 0,
        void 0,
        new gt(),
        void 0,
        void 0,
        this.O
      );
      this.s = !1;
      this.H.I(window, "pagehide", this.P);
      this.Ff();
    };
    _.x(av, _.A);
    av.prototype.Xf = function (a) {
      this.ba = "auto";
      var b;
      !(b = window.parent != window) &&
        (b =
          (!window.external ||
            !window.external.googleToolbarVersion ||
            6.2 > parseFloat(window.external.googleToolbarVersion)) &&
          (!window.gtbExternal ||
            !window.gtbExternal.isTranslateEnabled ||
            !window.gtbExternal.isTranslateEnabled())) &&
        ((b =
          navigator.appVersion &&
          navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/)),
        (b = !(
          b &&
          b[2] &&
          b[3] &&
          4001 <= 1e3 * Number(b[2]) + Number(b[3])
        )));
      this.D = {
        cf: b,
        dh: !1,
        df: null,
        Vd: null,
        Hc: [],
        Qc: [],
        nf: !1,
        ec: !1,
        apiKey: "",
        fh: !1,
        tf: "",
        Jc: 0,
        Wg: !1,
      };
      this.X = { Fb: _.wl, ei: "https://" == _.ql ? _.U.Ei : null };
      this.J = { Fb: _.wl, he: null };
      a &&
        ("autoDisplay" in a && (this.D.cf = this.D.cf && !!a.autoDisplay),
        "multilanguagePage" in a && (this.D.ec = !!a.multilanguagePage),
        "gaTrack" in a && (this.D.fh = !!a.gaTrack),
        "layout" in a && (this.D.Jc = a.layout),
        a.pageLanguage && (this.D.Mb = _.Ll(a.pageLanguage)),
        a.includedLanguages && (this.D.Hc = a.includedLanguages.split(",")),
        a.excludedLanguages && (this.D.Qc = a.excludedLanguages.split(",")),
        this.D.Mb && (this.ba = this.D.Mb),
        a.key && (this.D.apiKey = a.key),
        a.gaId && (this.D.tf = a.gaId),
        (this.J.he = Number(a.floatPosition) || this.J.he),
        "disableAutoTranslation" in a &&
          (this.D.Wg = !!a.disableAutoTranslation),
        a.remoteApiProxyHandlers && (this.O = a.remoteApiProxyHandlers));
      !this.D.Wg && bv(this) && (this.D.dh = !0);
      this.o = {};
      if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
        for (this.o = {}, a = _.Oc(a[2]).split("|"), b = 0; b < a.length; ++b) {
          var c = a[b].split("=");
          c[0] && (this.o[c[0]] = c[1]);
        }
    };
    var bv = function (a) {
        function b(f, g) {
          if (
            (f = _.Oc(f).match(
              "^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)"
            ))
          ) {
            if (f[3]) return (g.D.df = f[2]), (g.D.Vd = f[3]), !0;
            if (f[6]) return (g.D.df = f[5]), (g.D.Vd = f[6]), !0;
          }
          return !1;
        }
        var c = {
            url: function () {
              var f = window.location.href.match(/#.*googtrans(.*)/);
              return f && f[1];
            },
            cookie: function () {
              var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
              return f && f[2];
            },
          },
          d;
        for (d in c)
          if (c[d] !== Object.prototype[d]) {
            var e = c[d]();
            if (e && b(e, a)) return d;
          }
        return "";
      },
      cv = function (a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length; )
          c.shift();
        c = ";domain=" + c.join(".");
        null != b
          ? (a = a + "=" + b)
          : ((b = new Date()),
            b.setTime(b.getTime() - 1),
            (a = a + "=none;expires=" + b.toGMTString()));
        a += ";path=/";
        document.cookie = a;
        try {
          document.cookie = a + c;
        } catch (d) {}
      },
      dv = function (a, b) {
        var c = null;
        void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
        cv("googtrans", c);
      };
    av.prototype.xf = function (a) {
      this.W = _.Ll(_.T);
      this.wb = _.Ji(a || {});
      this.Da = {};
      this.F = {};
      a = !this.D.Hc.length;
      var b = _.Dl(this.D.Hc),
        c = _.Dl(this.D.Qc);
      this.Da[_.T] = "";
      this.F[_.T] = "";
      for (var d in this.wb.tl)
        this.wb.tl[d] === Object.prototype[d] ||
          !(a || d in b) ||
          d in c ||
          ((this.F[d] = this.wb.tl[d]), d == this.D.Mb && !this.D.ec) ||
          (this.Da[d] = this.wb.tl[d]);
      this.Da[_.T] || delete this.Da[_.T];
      this.F[_.T] || delete this.F[_.T];
      this.Je = _.ni(this.wb.sl);
    };
    av.prototype.vf = function (a) {
      a && (this.ba = _.Ll(a));
    };
    av.prototype.yf = function () {
      delete this.cb;
      if (this.wb) {
        this.ba = this.ba || this.D.df;
        this.W = this.D.Vd || this.W;
        var a =
          this.D.dh ||
          (this.D.cf &&
            this.ba != this.W &&
            !(this.ba in _.ml) &&
            "1" != this.o.os &&
            "1" != this.o["o" + this.ba]);
        "zh-TW" == this.ba && (this.ba = "zh-CN");
        this.Je[this.ba] || ((a = !1), (this.ba = "auto"));
        if (!this.Da[this.W])
          if (((a = !1), this.Da.en)) this.W = "en";
          else
            for (var b in this.Da)
              if (this.Da[b] !== Object.prototype[b]) {
                this.W = b;
                break;
              }
        if (this.j) {
          b = this.Da;
          var c = { "": _.U.Ng },
            d;
          for (d in b) b[d] !== Object.prototype[d] && (c[d] = b[d]);
          this.j.lg(c, this.F);
          this.j.sa("");
        }
        !_.kl && a
          ? this.D.Vd
            ? _.Hl(this.C, this.A.delay((0, _.y)(this.Ge, this, !0, !0))).call()
            : ((this.s = !0),
              _.Hl(this.C, this.A.delay((0, _.y)(this.Ge, this))).call(),
              _.Di("te_ap", { sl: this.ba }))
          : (this.l && this.l.Y(!0), this.j && this.j.Y(!0));
        window.google.translate.TranslateService && this.mb(!1);
        this.C.finish();
      }
    };
    av.prototype.Ff = function () {
      this.cb = new _.El((0, _.y)(this.yf, this));
      this.A = new _.El((0, _.y)(this.uj, this));
      this.C = new _.Gl((0, _.y)(this.Pj, this));
      this.h = new Yu(this.X);
      this.Ea.Rd(this.cb.register((0, _.y)(this.xf, this)), _.T);
      this.G
        ? ((this.j = new Uu(this.D)),
          this.H.I(this.j, "load", this.cb.register()),
          this.H.I(
            this.j,
            "chg_tgt_lang",
            _.Hl(this.C, this.A.delay((0, _.y)(this.qj, this)))
          ),
          this.j.Ca(this.G))
        : this.J.he &&
          ((this.l = new Wu(this.J)),
          this.H.I(this.l, "load", this.cb.register()),
          this.H.I(
            this.l,
            "clk_trans",
            _.Hl(this.C, this.A.delay((0, _.y)(this.pj, this)))
          ),
          this.l.Ca());
      !this.D.Mb &&
        this.D.nf &&
        this.Ea.Qd(this.cb.register((0, _.y)(this.vf, this)));
      this.cb.finish();
      _.P("goog-gt-thumbUpButton") && (ev(this), fv(this), gv(this));
    };
    var ev = function (a) {
        var b = _.P("goog-gt-thumbUpButton"),
          c = a.K,
          d = a.N;
        b.addEventListener(
          "click",
          function () {
            if ("up" === us(c)) Gu(d);
            else {
              var e = Du(d, 5);
              Eu(d, e);
              Fu(e);
            }
            vs(c, "up");
          },
          !1
        );
      },
      fv = function (a) {
        var b = _.P("goog-gt-thumbDownButton"),
          c = a.K,
          d = a.N;
        b.addEventListener(
          "click",
          function () {
            if ("down" === us(c)) Gu(d);
            else {
              var e = Du(d, 6);
              Eu(d, e);
              Fu(e);
            }
            vs(c, "down");
          },
          !1
        );
      },
      gv = function (a) {
        var b = _.P("goog-gt-tt"),
          c = b.dataset,
          d = _.P("goog-gt-votingInputSrcLang"),
          e = _.P("goog-gt-votingInputTrgLang"),
          f = _.P("goog-gt-votingInputSrcText"),
          g = _.P("goog-gt-votingInputTrgText"),
          h = _.P("goog-gt-original-text"),
          l = _.P("goog-gt-translation"),
          m = a.K,
          n = a.N;
        window.document.body.addEventListener(
          "goog-gt-popupShown",
          function (p) {
            var r = Du(n, 4);
            Eu(n, r);
            Fu(r);
            p = p.detail;
            r = String(p.Wd);
            p = p.Lk;
            c.id = r;
            r = m.get(r) || "";
            ts(r);
            b.style.width =
              Math.max(Math.min(window.innerWidth - 16, 536), 288) + "px";
            r = p.kb() || "";
            var q = p.na() || "";
            d.value = r;
            e.value = q;
            f.value = p.Pd();
            g.value = p.U;
            l && (l.innerText = p.U);
            _.nf.test(r) && (h.classList.add("rtl"), (h.dir = "rtl"));
            l && _.nf.test(q) && (l.classList.add("rtl"), (l.dir = "rtl"));
          },
          !1
        );
      };
    _.k = av.prototype;
    _.k.uj = function () {
      var a = this.h,
        b = this.Je;
      a.s && a.s.Kd(b);
      a.Z = b;
      this.h.lg(this.Da, this.F);
      this.h.qc(this.ba);
      this.h.sa(this.W);
      this.H.I(this.h, "clk_confirm", this.mj);
      this.H.I(this.h, "clk_cancel", this.lj);
      this.H.I(this.h, "clk_restore", this.uf);
      this.H.I(this.h, "clk_close", this.je);
      this.H.I(this.h, "clk_no_ap", this.nj);
      this.H.I(this.h, "clk_no_ap_site", this.oj);
      this.H.I(this.h, "chg_src_lang", this.mh);
      this.H.I(this.h, "chg_tgt_lang", this.mh);
      this.j && this.j.Y(!0);
    };
    _.k.Pj = function () {
      this.H.I(this.h, "load", this.A.register());
      this.h.Ca();
      this.A.finish();
    };
    _.k.L = function () {
      this.Ea.restore();
      _.A.prototype.L.call(this);
      this.Ea.P();
      this.H.P();
      this.H = null;
      this.h && this.h.P();
      this.h = null;
      this.l && this.l.P();
      this.l = null;
      this.j && this.j.P();
      this.G = this.j = null;
    };
    _.k.mj = function () {
      !this.h.isVisible() ||
        (!this.D.ec && $s(this.ba, this.h.na())) ||
        (this.s && _.Di("te_apt", { sl: this.ba }),
        hv(this, !1),
        this.j && this.j.sa(this.h.na()));
    };
    _.k.lj = function () {
      this.h.isVisible() && (iv(this), $u(this.h, 0), this.j && this.j.sa(""));
    };
    _.k.uf = function () {
      this.h.isVisible() && (iv(this), $u(this.h, 0));
      this.j && this.j.sa("");
    };
    _.k.je = function () {
      this.h.isVisible() &&
        (this.s && ((this.s = !1), _.Di("te_apc", { sl: this.ba })),
        iv(this),
        this.h.Y(!1),
        this.j && this.j.sa(""),
        this.l && this.l.Y(!0));
    };
    _.k.nj = function () {
      this.h.isVisible() &&
        ((this.o["o" + this.ba] = "1"),
        _.Di("te_apr", { sl: this.ba }),
        (this.s = !1),
        this.je());
    };
    _.k.oj = function () {
      if (this.h.isVisible()) {
        this.s = !1;
        this.o.os = "1";
        var a = null;
        if (this.o) {
          a = [];
          for (var b in this.o)
            this.o[b] !== Object.prototype[b] && a.push(b + "=" + this.o[b]);
          a = a.join("|");
        }
        cv("googtransopt", a);
        this.je();
      }
    };
    _.k.mh = function () {
      this.h.isVisible() &&
        (!this.D.ec && $s(this.ba, this.h.na())
          ? this.uf()
          : ((this.ba = this.h.kb() || this.ba),
            (this.W = this.h.na()),
            2 == this.h.wd && (this.j && this.j.sa(this.h.na()), hv(this))));
    };
    _.k.Ge = function (a, b) {
      this.h.isVisible() ||
        (this.l && this.l.Y(!1), a ? hv(this, b) : $u(this.h, 0, !0, this.s));
    };
    _.k.Ck = function (a, b) {
      _.Hl(this.C, this.A.delay((0, _.y)(this.Ge, this, a, b))).call();
    };
    _.k.pj = function () {
      this.Ge(2 == this.h.wd);
    };
    _.k.qj = function () {
      this.j.na()
        ? !this.D.ec && $s(this.ba, this.h.na())
          ? this.uf()
          : ((this.W = this.j.na()), this.h.sa(this.W), hv(this))
        : this.j.sa(this.W);
    };
    var hv = function (a, b) {
      if (window.google.translate.TranslateService)
        try {
          window.google.translate.TranslateService.getInstance().restore();
        } catch (c) {}
      dv(a.ba, a.W);
      a.s = !1;
      !b && a.ba in _.ml && _.Di("te_ape", { sl: a.ba });
      a.h.kg(0);
      $u(a.h, 1, !0);
      a.Ea.Gg(!!b);
      window.setTimeout(
        (0, _.y)(
          a.Ea.Sd,
          a.Ea,
          a.D.ec ? "auto" : a.ba,
          a.W,
          (0, _.y)(a.U, a),
          void 0,
          void 0
        ),
        0
      );
      if (a.D.fh && window._gaq && window._gat)
        try {
          a.D.tf
            ? window._gat
                ._getTracker(a.D.tf)
                ._trackEvent("Google Website Translator", "Translate", a.W)
            : window._gat
                ._getTrackerByName()
                ._trackEvent("Google Website Translator", "Translate", a.W);
        } catch (c) {}
    };
    av.prototype.U = function (a, b, c) {
      "function" == typeof this.Z && this.Z();
      this.h.isVisible() &&
        1 == this.h.wd &&
        (c
          ? (iv(this),
            $u(this.h, -1, !0),
            2 == c ? Zu(this.h, _.U.zi) : Zu(this.h, _.U.Bg))
          : (this.h.kg(a),
            b &&
              (this.j && this.j.sa(this.W),
              this.h.qc(this.ba),
              $u(this.h, 2))));
    };
    var iv = function (a) {
      dv();
      window.setTimeout((0, _.y)(a.Ea.restore, a.Ea, null), 0);
    };
    av.prototype.mb = function (a) {
      a || this.je();
      this.j && this.j.mb(a);
      this.l && this.l.Y(a);
    };
    _.vm();
    if (1 == _.Ni) {
      var jv = null,
        kv = function (a) {
          if (!jv) {
            var b, c, d, e;
            a &&
              ("key" in a && (b = a.key),
              "serverParams" in a && (c = a.serverParams),
              "timeInfo" in a && (d = a.timeInfo),
              "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers),
              (a = at()) && (c = a));
            a = 0;
            if ("te_lib" == _.nl || _.bc) a = 3;
            jv = new Iu(
              void 0,
              new _.lp({
                apiKey: b,
                lc: a,
                He: !0,
                trackVisibility: "tvis" == c,
              }),
              void 0,
              void 0,
              b,
              c,
              d,
              new gt(),
              void 0,
              void 0,
              e
            );
            jv.constructor = function () {};
            jv.isAvailable = jv.Wa;
            jv.getSupportedLanguages = jv.Rd;
            jv.getPageLanguage = jv.Qd;
            jv.setClickThrough = jv.Gg;
            jv.translatePage = jv.Sd;
            jv.restore = jv.restore;
            jv.isTranslating = jv.si;
            jv.setCheckVisibility = jv.Ak;
          }
          return jv;
        };
      kv.getInstance = function () {
        return jv;
      };
      _.vb("google.translate.TranslateService", kv);
      _.Di("te_li");
    } else {
      var lv = null,
        mv = function (a, b) {
          lv || ((lv = new av(a, b)), (lv.constructor = function () {}));
          return lv;
        };
      mv.getInstance = function () {
        return lv;
      };
      _.vb("google.translate.TranslateElement", mv);
      av.prototype.dispose = av.prototype.P;
      av.prototype.showBanner = av.prototype.Ck;
      av.prototype.setEnabled = av.prototype.mb;
      _.vb("google.translate.TranslateElement.FloatPosition", Xu);
      Xu.TOP_LEFT = 1;
      Xu.TOP_RIGHT = 2;
      Xu.BOTTOM_RIGHT = 3;
      Xu.BOTTOM_LEFT = 4;
      _.vb("google.translate.TranslateElement.InlineLayout", Vu);
      Vu.VERTICAL = 0;
      Vu.HORIZONTAL = 1;
      Vu.SIMPLE = 2;
    }
    _.Oi();

    _.pa();
  } catch (e) {
    _._DumpException(e);
  }
}.call(this, this.default_tr));
// Google Inc.
