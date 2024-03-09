/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var W_ = Object.create;
    var rn = Object.defineProperty;
    var X_ = Object.getOwnPropertyDescriptor;
    var k_ = Object.getOwnPropertyNames;
    var B_ = Object.getPrototypeOf,
        j_ = Object.prototype.hasOwnProperty;
    var ye = (e, t) => () => (e && (t = e((e = 0))), t);
    var c = (e, t) => () => (
            t || e((t = { exports: {} }).exports, t), t.exports
        ),
        De = (e, t) => {
            for (var r in t) rn(e, r, { get: t[r], enumerable: !0 });
        },
        xs = (e, t, r, n) => {
            if ((t && typeof t == "object") || typeof t == "function")
                for (let o of k_(t))
                    !j_.call(e, o) &&
                        o !== r &&
                        rn(e, o, {
                            get: () => t[o],
                            enumerable: !(n = X_(t, o)) || n.enumerable,
                        });
            return e;
        };
    var ce = (e, t, r) => (
            (r = e != null ? W_(B_(e)) : {}),
            xs(
                t || !e || !e.__esModule
                    ? rn(r, "default", { value: e, enumerable: !0 })
                    : r,
                e
            )
        ),
        et = (e) => xs(rn({}, "__esModule", { value: !0 }), e);
    var Cs = c(() => {
        "use strict";
        (function () {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function () {
                    return !1;
                };
                return;
            }
            let n = function (a) {
                    let u = window.getComputedStyle(a, null),
                        f = u.getPropertyValue("position"),
                        d = u.getPropertyValue("overflow"),
                        p = u.getPropertyValue("display");
                    (!f || f === "static") && (a.style.position = "relative"),
                        d !== "hidden" && (a.style.overflow = "hidden"),
                        (!p || p === "inline") && (a.style.display = "block"),
                        a.clientHeight === 0 && (a.style.height = "100%"),
                        a.className.indexOf("object-fit-polyfill") === -1 &&
                            (a.className += " object-fit-polyfill");
                },
                o = function (a) {
                    let u = window.getComputedStyle(a, null),
                        f = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px",
                        };
                    for (let d in f)
                        u.getPropertyValue(d) !== f[d] && (a.style[d] = f[d]);
                },
                i = function (a) {
                    let u = a.parentNode;
                    n(u),
                        o(a),
                        (a.style.position = "absolute"),
                        (a.style.height = "100%"),
                        (a.style.width = "auto"),
                        a.clientWidth > u.clientWidth
                            ? ((a.style.top = "0"),
                              (a.style.marginTop = "0"),
                              (a.style.left = "50%"),
                              (a.style.marginLeft = a.clientWidth / -2 + "px"))
                            : ((a.style.width = "100%"),
                              (a.style.height = "auto"),
                              (a.style.left = "0"),
                              (a.style.marginLeft = "0"),
                              (a.style.top = "50%"),
                              (a.style.marginTop = a.clientHeight / -2 + "px"));
                },
                s = function (a) {
                    if (typeof a > "u" || a instanceof Event)
                        a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName)
                        a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let f = a[u].nodeName.toLowerCase();
                        if (f === "img") {
                            if (t) continue;
                            a[u].complete
                                ? i(a[u])
                                : a[u].addEventListener("load", function () {
                                      i(this);
                                  });
                        } else
                            f === "video"
                                ? a[u].readyState > 0
                                    ? i(a[u])
                                    : a[u].addEventListener(
                                          "loadedmetadata",
                                          function () {
                                              i(this);
                                          }
                                      )
                                : i(a[u]);
                    }
                    return !0;
                };
            document.readyState === "loading"
                ? document.addEventListener("DOMContentLoaded", s)
                : s(),
                window.addEventListener("resize", s),
                (window.objectFitPolyfill = s);
        })();
    });
    var Rs = c(() => {
        "use strict";
        (function () {
            if (typeof window > "u") return;
            function e(n) {
                Webflow.env("design") ||
                    ($("video").each(function () {
                        n && $(this).prop("autoplay")
                            ? this.play()
                            : this.pause();
                    }),
                    $(".w-background-video--control").each(function () {
                        n ? r($(this)) : t($(this));
                    }));
            }
            function t(n) {
                n.find("> span").each(function (o) {
                    $(this).prop("hidden", () => o === 0);
                });
            }
            function r(n) {
                n.find("> span").each(function (o) {
                    $(this).prop("hidden", () => o === 1);
                });
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", (o) => {
                    e(!o.matches);
                }),
                    n.matches && e(!1),
                    $("video:not([autoplay])").each(function () {
                        $(this)
                            .parent()
                            .find(".w-background-video--control")
                            .each(function () {
                                t($(this));
                            });
                    }),
                    $(document).on(
                        "click",
                        ".w-background-video--control",
                        function (o) {
                            if (Webflow.env("design")) return;
                            let i = $(o.currentTarget),
                                s = $(`video#${i.attr("aria-controls")}`).get(
                                    0
                                );
                            if (s)
                                if (s.paused) {
                                    let a = s.play();
                                    r(i),
                                        a &&
                                            typeof a.catch == "function" &&
                                            a.catch(() => {
                                                t(i);
                                            });
                                } else s.pause(), t(i);
                        }
                    );
            });
        })();
    });
    var Ci = c(() => {
        "use strict";
        window.tram = (function (e) {
            function t(l, y) {
                var b = new D.Bare();
                return b.init(l, y);
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function (y) {
                    return "-" + y.toLowerCase();
                });
            }
            function n(l) {
                var y = parseInt(l.slice(1), 16),
                    b = (y >> 16) & 255,
                    I = (y >> 8) & 255,
                    m = 255 & y;
                return [b, I, m];
            }
            function o(l, y, b) {
                return (
                    "#" +
                    ((1 << 24) | (l << 16) | (y << 8) | b).toString(16).slice(1)
                );
            }
            function i() {}
            function s(l, y) {
                f(
                    "Type warning: Expected: [" +
                        l +
                        "] Got: [" +
                        typeof y +
                        "] " +
                        y
                );
            }
            function a(l, y, b) {
                f("Units do not match [" + l + "]: " + y + ", " + b);
            }
            function u(l, y, b) {
                if ((y !== void 0 && (b = y), l === void 0)) return b;
                var I = b;
                return (
                    At.test(l) || !lt.test(l)
                        ? (I = parseInt(l, 10))
                        : lt.test(l) && (I = 1e3 * parseFloat(l)),
                    0 > I && (I = 0),
                    I === I ? I : b
                );
            }
            function f(l) {
                le.debug && window && window.console.warn(l);
            }
            function d(l) {
                for (var y = -1, b = l ? l.length : 0, I = []; ++y < b; ) {
                    var m = l[y];
                    m && I.push(m);
                }
                return I;
            }
            var p = (function (l, y, b) {
                    function I(ne) {
                        return typeof ne == "object";
                    }
                    function m(ne) {
                        return typeof ne == "function";
                    }
                    function w() {}
                    function K(ne, ge) {
                        function G() {
                            var Re = new ie();
                            return (
                                m(Re.init) && Re.init.apply(Re, arguments), Re
                            );
                        }
                        function ie() {}
                        ge === b && ((ge = ne), (ne = Object)), (G.Bare = ie);
                        var se,
                            be = (w[l] = ne[l]),
                            Je = (ie[l] = G[l] = new w());
                        return (
                            (Je.constructor = G),
                            (G.mixin = function (Re) {
                                return (ie[l] = G[l] = K(G, Re)[l]), G;
                            }),
                            (G.open = function (Re) {
                                if (
                                    ((se = {}),
                                    m(Re)
                                        ? (se = Re.call(G, Je, be, G, ne))
                                        : I(Re) && (se = Re),
                                    I(se))
                                )
                                    for (var yr in se)
                                        y.call(se, yr) && (Je[yr] = se[yr]);
                                return m(Je.init) || (Je.init = ne), G;
                            }),
                            G.open(ge)
                        );
                    }
                    return K;
                })("prototype", {}.hasOwnProperty),
                v = {
                    ease: [
                        "ease",
                        function (l, y, b, I) {
                            var m = (l /= I) * l,
                                w = m * l;
                            return (
                                y +
                                b *
                                    (-2.75 * w * m +
                                        11 * m * m +
                                        -15.5 * w +
                                        8 * m +
                                        0.25 * l)
                            );
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (l, y, b, I) {
                            var m = (l /= I) * l,
                                w = m * l;
                            return (
                                y +
                                b * (-1 * w * m + 3 * m * m + -3 * w + 2 * m)
                            );
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (l, y, b, I) {
                            var m = (l /= I) * l,
                                w = m * l;
                            return (
                                y +
                                b *
                                    (0.3 * w * m +
                                        -1.6 * m * m +
                                        2.2 * w +
                                        -1.8 * m +
                                        1.9 * l)
                            );
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (l, y, b, I) {
                            var m = (l /= I) * l,
                                w = m * l;
                            return (
                                y + b * (2 * w * m + -5 * m * m + 2 * w + 2 * m)
                            );
                        },
                    ],
                    linear: [
                        "linear",
                        function (l, y, b, I) {
                            return (b * l) / I + y;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (l, y, b, I) {
                            return b * (l /= I) * l + y;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (l, y, b, I) {
                            return -b * (l /= I) * (l - 2) + y;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (l, y, b, I) {
                            return (l /= I / 2) < 1
                                ? (b / 2) * l * l + y
                                : (-b / 2) * (--l * (l - 2) - 1) + y;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (l, y, b, I) {
                            return b * (l /= I) * l * l + y;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (l, y, b, I) {
                            return b * ((l = l / I - 1) * l * l + 1) + y;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (l, y, b, I) {
                            return (l /= I / 2) < 1
                                ? (b / 2) * l * l * l + y
                                : (b / 2) * ((l -= 2) * l * l + 2) + y;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (l, y, b, I) {
                            return b * (l /= I) * l * l * l + y;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (l, y, b, I) {
                            return -b * ((l = l / I - 1) * l * l * l - 1) + y;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (l, y, b, I) {
                            return (l /= I / 2) < 1
                                ? (b / 2) * l * l * l * l + y
                                : (-b / 2) * ((l -= 2) * l * l * l - 2) + y;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (l, y, b, I) {
                            return b * (l /= I) * l * l * l * l + y;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (l, y, b, I) {
                            return (
                                b * ((l = l / I - 1) * l * l * l * l + 1) + y
                            );
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (l, y, b, I) {
                            return (l /= I / 2) < 1
                                ? (b / 2) * l * l * l * l * l + y
                                : (b / 2) * ((l -= 2) * l * l * l * l + 2) + y;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (l, y, b, I) {
                            return (
                                -b * Math.cos((l / I) * (Math.PI / 2)) + b + y
                            );
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (l, y, b, I) {
                            return b * Math.sin((l / I) * (Math.PI / 2)) + y;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (l, y, b, I) {
                            return (
                                (-b / 2) * (Math.cos((Math.PI * l) / I) - 1) + y
                            );
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (l, y, b, I) {
                            return l === 0
                                ? y
                                : b * Math.pow(2, 10 * (l / I - 1)) + y;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (l, y, b, I) {
                            return l === I
                                ? y + b
                                : b * (-Math.pow(2, (-10 * l) / I) + 1) + y;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (l, y, b, I) {
                            return l === 0
                                ? y
                                : l === I
                                ? y + b
                                : (l /= I / 2) < 1
                                ? (b / 2) * Math.pow(2, 10 * (l - 1)) + y
                                : (b / 2) * (-Math.pow(2, -10 * --l) + 2) + y;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (l, y, b, I) {
                            return -b * (Math.sqrt(1 - (l /= I) * l) - 1) + y;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (l, y, b, I) {
                            return b * Math.sqrt(1 - (l = l / I - 1) * l) + y;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (l, y, b, I) {
                            return (l /= I / 2) < 1
                                ? (-b / 2) * (Math.sqrt(1 - l * l) - 1) + y
                                : (b / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) +
                                      y;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (l, y, b, I, m) {
                            return (
                                m === void 0 && (m = 1.70158),
                                b * (l /= I) * l * ((m + 1) * l - m) + y
                            );
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (l, y, b, I, m) {
                            return (
                                m === void 0 && (m = 1.70158),
                                b *
                                    ((l = l / I - 1) * l * ((m + 1) * l + m) +
                                        1) +
                                    y
                            );
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (l, y, b, I, m) {
                            return (
                                m === void 0 && (m = 1.70158),
                                (l /= I / 2) < 1
                                    ? (b / 2) *
                                          l *
                                          l *
                                          (((m *= 1.525) + 1) * l - m) +
                                      y
                                    : (b / 2) *
                                          ((l -= 2) *
                                              l *
                                              (((m *= 1.525) + 1) * l + m) +
                                              2) +
                                      y
                            );
                        },
                    ],
                },
                h = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
                },
                E = document,
                _ = window,
                L = "bkwld-tram",
                S = /[\-\.0-9]/g,
                A = /[A-Z]/,
                O = "number",
                C = /^(rgb|#)/,
                R = /(em|cm|mm|in|pt|pc|px)$/,
                x = /(em|cm|mm|in|pt|pc|px|%)$/,
                U = /(deg|rad|turn)$/,
                X = "unitless",
                B = /(all|none) 0s ease 0s/,
                Y = /^(width|height)$/,
                re = " ",
                q = E.createElement("a"),
                T = ["Webkit", "Moz", "O", "ms"],
                N = ["-webkit-", "-moz-", "-o-", "-ms-"],
                k = function (l) {
                    if (l in q.style) return { dom: l, css: l };
                    var y,
                        b,
                        I = "",
                        m = l.split("-");
                    for (y = 0; y < m.length; y++)
                        I += m[y].charAt(0).toUpperCase() + m[y].slice(1);
                    for (y = 0; y < T.length; y++)
                        if (((b = T[y] + I), b in q.style))
                            return { dom: b, css: N[y] + l };
                },
                V = (t.support = {
                    bind: Function.prototype.bind,
                    transform: k("transform"),
                    transition: k("transition"),
                    backface: k("backface-visibility"),
                    timing: k("transition-timing-function"),
                });
            if (V.transition) {
                var ee = V.timing.dom;
                if (((q.style[ee] = v["ease-in-back"][0]), !q.style[ee]))
                    for (var te in h) v[te][0] = h[te];
            }
            var P = (t.frame = (function () {
                    var l =
                        _.requestAnimationFrame ||
                        _.webkitRequestAnimationFrame ||
                        _.mozRequestAnimationFrame ||
                        _.oRequestAnimationFrame ||
                        _.msRequestAnimationFrame;
                    return l && V.bind
                        ? l.bind(_)
                        : function (y) {
                              _.setTimeout(y, 16);
                          };
                })()),
                W = (t.now = (function () {
                    var l = _.performance,
                        y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                    return y && V.bind
                        ? y.bind(l)
                        : Date.now ||
                              function () {
                                  return +new Date();
                              };
                })()),
                j = p(function (l) {
                    function y(Z, ue) {
                        var me = d(("" + Z).split(re)),
                            fe = me[0];
                        ue = ue || {};
                        var Le = H[fe];
                        if (!Le) return f("Unsupported property: " + fe);
                        if (!ue.weak || !this.props[fe]) {
                            var Xe = Le[0],
                                Me = this.props[fe];
                            return (
                                Me || (Me = this.props[fe] = new Xe.Bare()),
                                Me.init(this.$el, me, Le, ue),
                                Me
                            );
                        }
                    }
                    function b(Z, ue, me) {
                        if (Z) {
                            var fe = typeof Z;
                            if (
                                (ue ||
                                    (this.timer && this.timer.destroy(),
                                    (this.queue = []),
                                    (this.active = !1)),
                                fe == "number" && ue)
                            )
                                return (
                                    (this.timer = new pe({
                                        duration: Z,
                                        context: this,
                                        complete: w,
                                    })),
                                    void (this.active = !0)
                                );
                            if (fe == "string" && ue) {
                                switch (Z) {
                                    case "hide":
                                        G.call(this);
                                        break;
                                    case "stop":
                                        K.call(this);
                                        break;
                                    case "redraw":
                                        ie.call(this);
                                        break;
                                    default:
                                        y.call(this, Z, me && me[1]);
                                }
                                return w.call(this);
                            }
                            if (fe == "function")
                                return void Z.call(this, this);
                            if (fe == "object") {
                                var Le = 0;
                                Je.call(
                                    this,
                                    Z,
                                    function (Te, H_) {
                                        Te.span > Le && (Le = Te.span),
                                            Te.stop(),
                                            Te.animate(H_);
                                    },
                                    function (Te) {
                                        "wait" in Te && (Le = u(Te.wait, 0));
                                    }
                                ),
                                    be.call(this),
                                    Le > 0 &&
                                        ((this.timer = new pe({
                                            duration: Le,
                                            context: this,
                                        })),
                                        (this.active = !0),
                                        ue && (this.timer.complete = w));
                                var Xe = this,
                                    Me = !1,
                                    tn = {};
                                P(function () {
                                    Je.call(Xe, Z, function (Te) {
                                        Te.active &&
                                            ((Me = !0),
                                            (tn[Te.name] = Te.nextStyle));
                                    }),
                                        Me && Xe.$el.css(tn);
                                });
                            }
                        }
                    }
                    function I(Z) {
                        (Z = u(Z, 0)),
                            this.active
                                ? this.queue.push({ options: Z })
                                : ((this.timer = new pe({
                                      duration: Z,
                                      context: this,
                                      complete: w,
                                  })),
                                  (this.active = !0));
                    }
                    function m(Z) {
                        return this.active
                            ? (this.queue.push({ options: Z, args: arguments }),
                              void (this.timer.complete = w))
                            : f(
                                  "No active transition timer. Use start() or wait() before then()."
                              );
                    }
                    function w() {
                        if (
                            (this.timer && this.timer.destroy(),
                            (this.active = !1),
                            this.queue.length)
                        ) {
                            var Z = this.queue.shift();
                            b.call(this, Z.options, !0, Z.args);
                        }
                    }
                    function K(Z) {
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1);
                        var ue;
                        typeof Z == "string"
                            ? ((ue = {}), (ue[Z] = 1))
                            : (ue =
                                  typeof Z == "object" && Z != null
                                      ? Z
                                      : this.props),
                            Je.call(this, ue, Re),
                            be.call(this);
                    }
                    function ne(Z) {
                        K.call(this, Z), Je.call(this, Z, yr, V_);
                    }
                    function ge(Z) {
                        typeof Z != "string" && (Z = "block"),
                            (this.el.style.display = Z);
                    }
                    function G() {
                        K.call(this), (this.el.style.display = "none");
                    }
                    function ie() {
                        this.el.offsetHeight;
                    }
                    function se() {
                        K.call(this),
                            e.removeData(this.el, L),
                            (this.$el = this.el = null);
                    }
                    function be() {
                        var Z,
                            ue,
                            me = [];
                        this.upstream && me.push(this.upstream);
                        for (Z in this.props)
                            (ue = this.props[Z]),
                                ue.active && me.push(ue.string);
                        (me = me.join(",")),
                            this.style !== me &&
                                ((this.style = me),
                                (this.el.style[V.transition.dom] = me));
                    }
                    function Je(Z, ue, me) {
                        var fe,
                            Le,
                            Xe,
                            Me,
                            tn = ue !== Re,
                            Te = {};
                        for (fe in Z)
                            (Xe = Z[fe]),
                                fe in ve
                                    ? (Te.transform || (Te.transform = {}),
                                      (Te.transform[fe] = Xe))
                                    : (A.test(fe) && (fe = r(fe)),
                                      fe in H
                                          ? (Te[fe] = Xe)
                                          : (Me || (Me = {}), (Me[fe] = Xe)));
                        for (fe in Te) {
                            if (((Xe = Te[fe]), (Le = this.props[fe]), !Le)) {
                                if (!tn) continue;
                                Le = y.call(this, fe);
                            }
                            ue.call(this, Le, Xe);
                        }
                        me && Me && me.call(this, Me);
                    }
                    function Re(Z) {
                        Z.stop();
                    }
                    function yr(Z, ue) {
                        Z.set(ue);
                    }
                    function V_(Z) {
                        this.$el.css(Z);
                    }
                    function We(Z, ue) {
                        l[Z] = function () {
                            return this.children
                                ? U_.call(this, ue, arguments)
                                : (this.el && ue.apply(this, arguments), this);
                        };
                    }
                    function U_(Z, ue) {
                        var me,
                            fe = this.children.length;
                        for (me = 0; fe > me; me++)
                            Z.apply(this.children[me], ue);
                        return this;
                    }
                    (l.init = function (Z) {
                        if (
                            ((this.$el = e(Z)),
                            (this.el = this.$el[0]),
                            (this.props = {}),
                            (this.queue = []),
                            (this.style = ""),
                            (this.active = !1),
                            le.keepInherited && !le.fallback)
                        ) {
                            var ue = F(this.el, "transition");
                            ue && !B.test(ue) && (this.upstream = ue);
                        }
                        V.backface &&
                            le.hideBackface &&
                            g(this.el, V.backface.css, "hidden");
                    }),
                        We("add", y),
                        We("start", b),
                        We("wait", I),
                        We("then", m),
                        We("next", w),
                        We("stop", K),
                        We("set", ne),
                        We("show", ge),
                        We("hide", G),
                        We("redraw", ie),
                        We("destroy", se);
                }),
                D = p(j, function (l) {
                    function y(b, I) {
                        var m = e.data(b, L) || e.data(b, L, new j.Bare());
                        return m.el || m.init(b), I ? m.start(I) : m;
                    }
                    l.init = function (b, I) {
                        var m = e(b);
                        if (!m.length) return this;
                        if (m.length === 1) return y(m[0], I);
                        var w = [];
                        return (
                            m.each(function (K, ne) {
                                w.push(y(ne, I));
                            }),
                            (this.children = w),
                            this
                        );
                    };
                }),
                M = p(function (l) {
                    function y() {
                        var w = this.get();
                        this.update("auto");
                        var K = this.get();
                        return this.update(w), K;
                    }
                    function b(w, K, ne) {
                        return K !== void 0 && (ne = K), w in v ? w : ne;
                    }
                    function I(w) {
                        var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
                        return (K ? o(K[1], K[2], K[3]) : w).replace(
                            /#(\w)(\w)(\w)$/,
                            "#$1$1$2$2$3$3"
                        );
                    }
                    var m = { duration: 500, ease: "ease", delay: 0 };
                    (l.init = function (w, K, ne, ge) {
                        (this.$el = w), (this.el = w[0]);
                        var G = K[0];
                        ne[2] && (G = ne[2]),
                            z[G] && (G = z[G]),
                            (this.name = G),
                            (this.type = ne[1]),
                            (this.duration = u(
                                K[1],
                                this.duration,
                                m.duration
                            )),
                            (this.ease = b(K[2], this.ease, m.ease)),
                            (this.delay = u(K[3], this.delay, m.delay)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = Y.test(this.name)),
                            (this.unit =
                                ge.unit || this.unit || le.defaultUnit),
                            (this.angle =
                                ge.angle || this.angle || le.defaultAngle),
                            le.fallback || ge.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition),
                                  (this.string =
                                      this.name +
                                      re +
                                      this.duration +
                                      "ms" +
                                      (this.ease != "ease"
                                          ? re + v[this.ease][0]
                                          : "") +
                                      (this.delay
                                          ? re + this.delay + "ms"
                                          : "")));
                    }),
                        (l.set = function (w) {
                            (w = this.convert(w, this.type)),
                                this.update(w),
                                this.redraw();
                        }),
                        (l.transition = function (w) {
                            (this.active = !0),
                                (w = this.convert(w, this.type)),
                                this.auto &&
                                    (this.el.style[this.name] == "auto" &&
                                        (this.update(this.get()),
                                        this.redraw()),
                                    w == "auto" && (w = y.call(this))),
                                (this.nextStyle = w);
                        }),
                        (l.fallback = function (w) {
                            var K =
                                this.el.style[this.name] ||
                                this.convert(this.get(), this.type);
                            (w = this.convert(w, this.type)),
                                this.auto &&
                                    (K == "auto" &&
                                        (K = this.convert(
                                            this.get(),
                                            this.type
                                        )),
                                    w == "auto" && (w = y.call(this))),
                                (this.tween = new J({
                                    from: K,
                                    to: w,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                    update: this.update,
                                    context: this,
                                }));
                        }),
                        (l.get = function () {
                            return F(this.el, this.name);
                        }),
                        (l.update = function (w) {
                            g(this.el, this.name, w);
                        }),
                        (l.stop = function () {
                            (this.active || this.nextStyle) &&
                                ((this.active = !1),
                                (this.nextStyle = null),
                                g(this.el, this.name, this.get()));
                            var w = this.tween;
                            w && w.context && w.destroy();
                        }),
                        (l.convert = function (w, K) {
                            if (w == "auto" && this.auto) return w;
                            var ne,
                                ge = typeof w == "number",
                                G = typeof w == "string";
                            switch (K) {
                                case O:
                                    if (ge) return w;
                                    if (G && w.replace(S, "") === "") return +w;
                                    ne = "number(unitless)";
                                    break;
                                case C:
                                    if (G) {
                                        if (w === "" && this.original)
                                            return this.original;
                                        if (K.test(w))
                                            return w.charAt(0) == "#" &&
                                                w.length == 7
                                                ? w
                                                : I(w);
                                    }
                                    ne = "hex or rgb string";
                                    break;
                                case R:
                                    if (ge) return w + this.unit;
                                    if (G && K.test(w)) return w;
                                    ne = "number(px) or string(unit)";
                                    break;
                                case x:
                                    if (ge) return w + this.unit;
                                    if (G && K.test(w)) return w;
                                    ne = "number(px) or string(unit or %)";
                                    break;
                                case U:
                                    if (ge) return w + this.angle;
                                    if (G && K.test(w)) return w;
                                    ne = "number(deg) or string(angle)";
                                    break;
                                case X:
                                    if (ge || (G && x.test(w))) return w;
                                    ne =
                                        "number(unitless) or string(unit or %)";
                            }
                            return s(ne, w), w;
                        }),
                        (l.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                Q = p(M, function (l, y) {
                    l.init = function () {
                        y.init.apply(this, arguments),
                            this.original ||
                                (this.original = this.convert(this.get(), C));
                    };
                }),
                oe = p(M, function (l, y) {
                    (l.init = function () {
                        y.init.apply(this, arguments),
                            (this.animate = this.fallback);
                    }),
                        (l.get = function () {
                            return this.$el[this.name]();
                        }),
                        (l.update = function (b) {
                            this.$el[this.name](b);
                        });
                }),
                ae = p(M, function (l, y) {
                    function b(I, m) {
                        var w, K, ne, ge, G;
                        for (w in I)
                            (ge = ve[w]),
                                (ne = ge[0]),
                                (K = ge[1] || w),
                                (G = this.convert(I[w], ne)),
                                m.call(this, K, G, ne);
                    }
                    (l.init = function () {
                        y.init.apply(this, arguments),
                            this.current ||
                                ((this.current = {}),
                                ve.perspective &&
                                    le.perspective &&
                                    ((this.current.perspective =
                                        le.perspective),
                                    g(
                                        this.el,
                                        this.name,
                                        this.style(this.current)
                                    ),
                                    this.redraw()));
                    }),
                        (l.set = function (I) {
                            b.call(this, I, function (m, w) {
                                this.current[m] = w;
                            }),
                                g(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (l.transition = function (I) {
                            var m = this.values(I);
                            this.tween = new ct({
                                current: this.current,
                                values: m,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                            });
                            var w,
                                K = {};
                            for (w in this.current)
                                K[w] = w in m ? m[w] : this.current[w];
                            (this.active = !0),
                                (this.nextStyle = this.style(K));
                        }),
                        (l.fallback = function (I) {
                            var m = this.values(I);
                            this.tween = new ct({
                                current: this.current,
                                values: m,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this,
                            });
                        }),
                        (l.update = function () {
                            g(this.el, this.name, this.style(this.current));
                        }),
                        (l.style = function (I) {
                            var m,
                                w = "";
                            for (m in I) w += m + "(" + I[m] + ") ";
                            return w;
                        }),
                        (l.values = function (I) {
                            var m,
                                w = {};
                            return (
                                b.call(this, I, function (K, ne, ge) {
                                    (w[K] = ne),
                                        this.current[K] === void 0 &&
                                            ((m = 0),
                                            ~K.indexOf("scale") && (m = 1),
                                            (this.current[K] = this.convert(
                                                m,
                                                ge
                                            )));
                                }),
                                w
                            );
                        });
                }),
                J = p(function (l) {
                    function y(G) {
                        ne.push(G) === 1 && P(b);
                    }
                    function b() {
                        var G,
                            ie,
                            se,
                            be = ne.length;
                        if (be)
                            for (P(b), ie = W(), G = be; G--; )
                                (se = ne[G]), se && se.render(ie);
                    }
                    function I(G) {
                        var ie,
                            se = e.inArray(G, ne);
                        se >= 0 &&
                            ((ie = ne.slice(se + 1)),
                            (ne.length = se),
                            ie.length && (ne = ne.concat(ie)));
                    }
                    function m(G) {
                        return Math.round(G * ge) / ge;
                    }
                    function w(G, ie, se) {
                        return o(
                            G[0] + se * (ie[0] - G[0]),
                            G[1] + se * (ie[1] - G[1]),
                            G[2] + se * (ie[2] - G[2])
                        );
                    }
                    var K = { ease: v.ease[1], from: 0, to: 1 };
                    (l.init = function (G) {
                        (this.duration = G.duration || 0),
                            (this.delay = G.delay || 0);
                        var ie = G.ease || K.ease;
                        v[ie] && (ie = v[ie][1]),
                            typeof ie != "function" && (ie = K.ease),
                            (this.ease = ie),
                            (this.update = G.update || i),
                            (this.complete = G.complete || i),
                            (this.context = G.context || this),
                            (this.name = G.name);
                        var se = G.from,
                            be = G.to;
                        se === void 0 && (se = K.from),
                            be === void 0 && (be = K.to),
                            (this.unit = G.unit || ""),
                            typeof se == "number" && typeof be == "number"
                                ? ((this.begin = se), (this.change = be - se))
                                : this.format(be, se),
                            (this.value = this.begin + this.unit),
                            (this.start = W()),
                            G.autoplay !== !1 && this.play();
                    }),
                        (l.play = function () {
                            this.active ||
                                (this.start || (this.start = W()),
                                (this.active = !0),
                                y(this));
                        }),
                        (l.stop = function () {
                            this.active && ((this.active = !1), I(this));
                        }),
                        (l.render = function (G) {
                            var ie,
                                se = G - this.start;
                            if (this.delay) {
                                if (se <= this.delay) return;
                                se -= this.delay;
                            }
                            if (se < this.duration) {
                                var be = this.ease(se, 0, 1, this.duration);
                                return (
                                    (ie = this.startRGB
                                        ? w(this.startRGB, this.endRGB, be)
                                        : m(this.begin + be * this.change)),
                                    (this.value = ie + this.unit),
                                    void this.update.call(
                                        this.context,
                                        this.value
                                    )
                                );
                            }
                            (ie = this.endHex || this.begin + this.change),
                                (this.value = ie + this.unit),
                                this.update.call(this.context, this.value),
                                this.complete.call(this.context),
                                this.destroy();
                        }),
                        (l.format = function (G, ie) {
                            if (((ie += ""), (G += ""), G.charAt(0) == "#"))
                                return (
                                    (this.startRGB = n(ie)),
                                    (this.endRGB = n(G)),
                                    (this.endHex = G),
                                    (this.begin = 0),
                                    void (this.change = 1)
                                );
                            if (!this.unit) {
                                var se = ie.replace(S, ""),
                                    be = G.replace(S, "");
                                se !== be && a("tween", ie, G),
                                    (this.unit = se);
                            }
                            (ie = parseFloat(ie)),
                                (G = parseFloat(G)),
                                (this.begin = this.value = ie),
                                (this.change = G - ie);
                        }),
                        (l.destroy = function () {
                            this.stop(),
                                (this.context = null),
                                (this.ease = this.update = this.complete = i);
                        });
                    var ne = [],
                        ge = 1e3;
                }),
                pe = p(J, function (l) {
                    (l.init = function (y) {
                        (this.duration = y.duration || 0),
                            (this.complete = y.complete || i),
                            (this.context = y.context),
                            this.play();
                    }),
                        (l.render = function (y) {
                            var b = y - this.start;
                            b < this.duration ||
                                (this.complete.call(this.context),
                                this.destroy());
                        });
                }),
                ct = p(J, function (l, y) {
                    (l.init = function (b) {
                        (this.context = b.context),
                            (this.update = b.update),
                            (this.tweens = []),
                            (this.current = b.current);
                        var I, m;
                        for (I in b.values)
                            (m = b.values[I]),
                                this.current[I] !== m &&
                                    this.tweens.push(
                                        new J({
                                            name: I,
                                            from: this.current[I],
                                            to: m,
                                            duration: b.duration,
                                            delay: b.delay,
                                            ease: b.ease,
                                            autoplay: !1,
                                        })
                                    );
                        this.play();
                    }),
                        (l.render = function (b) {
                            var I,
                                m,
                                w = this.tweens.length,
                                K = !1;
                            for (I = w; I--; )
                                (m = this.tweens[I]),
                                    m.context &&
                                        (m.render(b),
                                        (this.current[m.name] = m.value),
                                        (K = !0));
                            return K
                                ? void (
                                      this.update &&
                                      this.update.call(this.context)
                                  )
                                : this.destroy();
                        }),
                        (l.destroy = function () {
                            if ((y.destroy.call(this), this.tweens)) {
                                var b,
                                    I = this.tweens.length;
                                for (b = I; b--; ) this.tweens[b].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                le = (t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !V.transition,
                    agentTests: [],
                });
            (t.fallback = function (l) {
                if (!V.transition) return (le.fallback = !0);
                le.agentTests.push("(" + l + ")");
                var y = new RegExp(le.agentTests.join("|"), "i");
                le.fallback = y.test(navigator.userAgent);
            }),
                t.fallback("6.0.[2-5] Safari"),
                (t.tween = function (l) {
                    return new J(l);
                }),
                (t.delay = function (l, y, b) {
                    return new pe({ complete: y, duration: l, context: b });
                }),
                (e.fn.tram = function (l) {
                    return t.call(null, this, l);
                });
            var g = e.style,
                F = e.css,
                z = { transform: V.transform && V.transform.css },
                H = {
                    color: [Q, C],
                    background: [Q, C, "background-color"],
                    "outline-color": [Q, C],
                    "border-color": [Q, C],
                    "border-top-color": [Q, C],
                    "border-right-color": [Q, C],
                    "border-bottom-color": [Q, C],
                    "border-left-color": [Q, C],
                    "border-width": [M, R],
                    "border-top-width": [M, R],
                    "border-right-width": [M, R],
                    "border-bottom-width": [M, R],
                    "border-left-width": [M, R],
                    "border-spacing": [M, R],
                    "letter-spacing": [M, R],
                    margin: [M, R],
                    "margin-top": [M, R],
                    "margin-right": [M, R],
                    "margin-bottom": [M, R],
                    "margin-left": [M, R],
                    padding: [M, R],
                    "padding-top": [M, R],
                    "padding-right": [M, R],
                    "padding-bottom": [M, R],
                    "padding-left": [M, R],
                    "outline-width": [M, R],
                    opacity: [M, O],
                    top: [M, x],
                    right: [M, x],
                    bottom: [M, x],
                    left: [M, x],
                    "font-size": [M, x],
                    "text-indent": [M, x],
                    "word-spacing": [M, x],
                    width: [M, x],
                    "min-width": [M, x],
                    "max-width": [M, x],
                    height: [M, x],
                    "min-height": [M, x],
                    "max-height": [M, x],
                    "line-height": [M, X],
                    "scroll-top": [oe, O, "scrollTop"],
                    "scroll-left": [oe, O, "scrollLeft"],
                },
                ve = {};
            V.transform &&
                ((H.transform = [ae]),
                (ve = {
                    x: [x, "translateX"],
                    y: [x, "translateY"],
                    rotate: [U],
                    rotateX: [U],
                    rotateY: [U],
                    scale: [O],
                    scaleX: [O],
                    scaleY: [O],
                    skew: [U],
                    skewX: [U],
                    skewY: [U],
                })),
                V.transform &&
                    V.backface &&
                    ((ve.z = [x, "translateZ"]),
                    (ve.rotateZ = [U]),
                    (ve.scaleZ = [O]),
                    (ve.perspective = [R]));
            var At = /ms/,
                lt = /s|\./;
            return (e.tram = t);
        })(window.jQuery);
    });
    var Ns = c((MH, Ls) => {
        "use strict";
        var z_ = window.$,
            K_ = Ci() && z_.tram;
        Ls.exports = (function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                o = Function.prototype,
                i = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                f = n.hasOwnProperty,
                d = r.forEach,
                p = r.map,
                v = r.reduce,
                h = r.reduceRight,
                E = r.filter,
                _ = r.every,
                L = r.some,
                S = r.indexOf,
                A = r.lastIndexOf,
                O = Array.isArray,
                C = Object.keys,
                R = o.bind,
                x = (e.each = e.forEach = function (T, N, k) {
                    if (T == null) return T;
                    if (d && T.forEach === d) T.forEach(N, k);
                    else if (T.length === +T.length) {
                        for (var V = 0, ee = T.length; V < ee; V++)
                            if (N.call(k, T[V], V, T) === t) return;
                    } else
                        for (
                            var te = e.keys(T), V = 0, ee = te.length;
                            V < ee;
                            V++
                        )
                            if (N.call(k, T[te[V]], te[V], T) === t) return;
                    return T;
                });
            (e.map = e.collect = function (T, N, k) {
                var V = [];
                return T == null
                    ? V
                    : p && T.map === p
                    ? T.map(N, k)
                    : (x(T, function (ee, te, P) {
                          V.push(N.call(k, ee, te, P));
                      }),
                      V);
            }),
                (e.find = e.detect = function (T, N, k) {
                    var V;
                    return (
                        U(T, function (ee, te, P) {
                            if (N.call(k, ee, te, P)) return (V = ee), !0;
                        }),
                        V
                    );
                }),
                (e.filter = e.select = function (T, N, k) {
                    var V = [];
                    return T == null
                        ? V
                        : E && T.filter === E
                        ? T.filter(N, k)
                        : (x(T, function (ee, te, P) {
                              N.call(k, ee, te, P) && V.push(ee);
                          }),
                          V);
                });
            var U = (e.some = e.any = function (T, N, k) {
                N || (N = e.identity);
                var V = !1;
                return T == null
                    ? V
                    : L && T.some === L
                    ? T.some(N, k)
                    : (x(T, function (ee, te, P) {
                          if (V || (V = N.call(k, ee, te, P))) return t;
                      }),
                      !!V);
            });
            (e.contains = e.include = function (T, N) {
                return T == null
                    ? !1
                    : S && T.indexOf === S
                    ? T.indexOf(N) != -1
                    : U(T, function (k) {
                          return k === N;
                      });
            }),
                (e.delay = function (T, N) {
                    var k = s.call(arguments, 2);
                    return setTimeout(function () {
                        return T.apply(null, k);
                    }, N);
                }),
                (e.defer = function (T) {
                    return e.delay.apply(
                        e,
                        [T, 1].concat(s.call(arguments, 1))
                    );
                }),
                (e.throttle = function (T) {
                    var N, k, V;
                    return function () {
                        N ||
                            ((N = !0),
                            (k = arguments),
                            (V = this),
                            K_.frame(function () {
                                (N = !1), T.apply(V, k);
                            }));
                    };
                }),
                (e.debounce = function (T, N, k) {
                    var V,
                        ee,
                        te,
                        P,
                        W,
                        j = function () {
                            var D = e.now() - P;
                            D < N
                                ? (V = setTimeout(j, N - D))
                                : ((V = null),
                                  k ||
                                      ((W = T.apply(te, ee)),
                                      (te = ee = null)));
                        };
                    return function () {
                        (te = this), (ee = arguments), (P = e.now());
                        var D = k && !V;
                        return (
                            V || (V = setTimeout(j, N)),
                            D && ((W = T.apply(te, ee)), (te = ee = null)),
                            W
                        );
                    };
                }),
                (e.defaults = function (T) {
                    if (!e.isObject(T)) return T;
                    for (var N = 1, k = arguments.length; N < k; N++) {
                        var V = arguments[N];
                        for (var ee in V) T[ee] === void 0 && (T[ee] = V[ee]);
                    }
                    return T;
                }),
                (e.keys = function (T) {
                    if (!e.isObject(T)) return [];
                    if (C) return C(T);
                    var N = [];
                    for (var k in T) e.has(T, k) && N.push(k);
                    return N;
                }),
                (e.has = function (T, N) {
                    return f.call(T, N);
                }),
                (e.isObject = function (T) {
                    return T === Object(T);
                }),
                (e.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (e.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g,
                });
            var X = /(.)^/,
                B = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029",
                },
                Y = /\\|'|\r|\n|\u2028|\u2029/g,
                re = function (T) {
                    return "\\" + B[T];
                },
                q = /^\s*(\w|\$)+\s*$/;
            return (
                (e.template = function (T, N, k) {
                    !N && k && (N = k),
                        (N = e.defaults({}, N, e.templateSettings));
                    var V = RegExp(
                            [
                                (N.escape || X).source,
                                (N.interpolate || X).source,
                                (N.evaluate || X).source,
                            ].join("|") + "|$",
                            "g"
                        ),
                        ee = 0,
                        te = "__p+='";
                    T.replace(V, function (D, M, Q, oe, ae) {
                        return (
                            (te += T.slice(ee, ae).replace(Y, re)),
                            (ee = ae + D.length),
                            M
                                ? (te +=
                                      `'+
((__t=(` +
                                      M +
                                      `))==null?'':_.escape(__t))+
'`)
                                : Q
                                ? (te +=
                                      `'+
((__t=(` +
                                      Q +
                                      `))==null?'':__t)+
'`)
                                : oe &&
                                  (te +=
                                      `';
` +
                                      oe +
                                      `
__p+='`),
                            D
                        );
                    }),
                        (te += `';
`);
                    var P = N.variable;
                    if (P) {
                        if (!q.test(P))
                            throw new Error(
                                "variable is not a bare identifier: " + P
                            );
                    } else
                        (te =
                            `with(obj||{}){
` +
                            te +
                            `}
`),
                            (P = "obj");
                    te =
                        `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
                        te +
                        `return __p;
`;
                    var W;
                    try {
                        W = new Function(N.variable || "obj", "_", te);
                    } catch (D) {
                        throw ((D.source = te), D);
                    }
                    var j = function (D) {
                        return W.call(this, D, e);
                    };
                    return (
                        (j.source =
                            "function(" +
                            P +
                            `){
` +
                            te +
                            "}"),
                        j
                    );
                }),
                e
            );
        })();
    });
    var je = c((DH, Us) => {
        "use strict";
        var de = {},
            Vt = {},
            Ut = [],
            Li = window.Webflow || [],
            Et = window.jQuery,
            Be = Et(window),
            Y_ = Et(document),
            tt = Et.isFunction,
            ke = (de._ = Ns()),
            qs = (de.tram = Ci() && Et.tram),
            on = !1,
            Ni = !1;
        qs.config.hideBackface = !1;
        qs.config.keepInherited = !0;
        de.define = function (e, t, r) {
            Vt[e] && Ds(Vt[e]);
            var n = (Vt[e] = t(Et, ke, r) || {});
            return Ms(n), n;
        };
        de.require = function (e) {
            return Vt[e];
        };
        function Ms(e) {
            de.env() &&
                (tt(e.design) && Be.on("__wf_design", e.design),
                tt(e.preview) && Be.on("__wf_preview", e.preview)),
                tt(e.destroy) && Be.on("__wf_destroy", e.destroy),
                e.ready && tt(e.ready) && $_(e);
        }
        function $_(e) {
            if (on) {
                e.ready();
                return;
            }
            ke.contains(Ut, e.ready) || Ut.push(e.ready);
        }
        function Ds(e) {
            tt(e.design) && Be.off("__wf_design", e.design),
                tt(e.preview) && Be.off("__wf_preview", e.preview),
                tt(e.destroy) && Be.off("__wf_destroy", e.destroy),
                e.ready && tt(e.ready) && Q_(e);
        }
        function Q_(e) {
            Ut = ke.filter(Ut, function (t) {
                return t !== e.ready;
            });
        }
        de.push = function (e) {
            if (on) {
                tt(e) && e();
                return;
            }
            Li.push(e);
        };
        de.env = function (e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top;
        };
        var nn = navigator.userAgent.toLowerCase(),
            Fs = (de.env.touch =
                "ontouchstart" in window ||
                (window.DocumentTouch &&
                    document instanceof window.DocumentTouch)),
            Z_ = (de.env.chrome =
                /chrome/.test(nn) &&
                /Google/.test(navigator.vendor) &&
                parseInt(nn.match(/chrome\/(\d+)\./)[1], 10)),
            J_ = (de.env.ios = /(ipod|iphone|ipad)/.test(nn));
        de.env.safari = /safari/.test(nn) && !Z_ && !J_;
        var Ri;
        Fs &&
            Y_.on("touchstart mousedown", function (e) {
                Ri = e.target;
            });
        de.validClick = Fs
            ? function (e) {
                  return e === Ri || Et.contains(e, Ri);
              }
            : function () {
                  return !0;
              };
        var Gs = "resize.webflow orientationchange.webflow load.webflow",
            eb = "scroll.webflow " + Gs;
        de.resize = Pi(Be, Gs);
        de.scroll = Pi(Be, eb);
        de.redraw = Pi();
        function Pi(e, t) {
            var r = [],
                n = {};
            return (
                (n.up = ke.throttle(function (o) {
                    ke.each(r, function (i) {
                        i(o);
                    });
                })),
                e && t && e.on(t, n.up),
                (n.on = function (o) {
                    typeof o == "function" && (ke.contains(r, o) || r.push(o));
                }),
                (n.off = function (o) {
                    if (!arguments.length) {
                        r = [];
                        return;
                    }
                    r = ke.filter(r, function (i) {
                        return i !== o;
                    });
                }),
                n
            );
        }
        de.location = function (e) {
            window.location = e;
        };
        de.env() && (de.location = function () {});
        de.ready = function () {
            (on = !0),
                Ni ? tb() : ke.each(Ut, Ps),
                ke.each(Li, Ps),
                de.resize.up();
        };
        function Ps(e) {
            tt(e) && e();
        }
        function tb() {
            (Ni = !1), ke.each(Vt, Ms);
        }
        var xt;
        de.load = function (e) {
            xt.then(e);
        };
        function Vs() {
            xt && (xt.reject(), Be.off("load", xt.resolve)),
                (xt = new Et.Deferred()),
                Be.on("load", xt.resolve);
        }
        de.destroy = function (e) {
            (e = e || {}),
                (Ni = !0),
                Be.triggerHandler("__wf_destroy"),
                e.domready != null && (on = e.domready),
                ke.each(Vt, Ds),
                de.resize.off(),
                de.scroll.off(),
                de.redraw.off(),
                (Ut = []),
                (Li = []),
                xt.state() === "pending" && Vs();
        };
        Et(de.ready);
        Vs();
        Us.exports = window.Webflow = de;
    });
    var Xs = c((FH, Ws) => {
        "use strict";
        var Hs = je();
        Hs.define(
            "brand",
            (Ws.exports = function (e) {
                var t = {},
                    r = document,
                    n = e("html"),
                    o = e("body"),
                    i = ".w-webflow-badge",
                    s = window.location,
                    a = /PhantomJS/i.test(navigator.userAgent),
                    u =
                        "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                    f;
                t.ready = function () {
                    var h = n.attr("data-wf-status"),
                        E = n.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(E) && s.hostname !== E && (h = !0),
                        h &&
                            !a &&
                            ((f = f || p()),
                            v(),
                            setTimeout(v, 500),
                            e(r).off(u, d).on(u, d));
                };
                function d() {
                    var h =
                        r.fullScreen ||
                        r.mozFullScreen ||
                        r.webkitIsFullScreen ||
                        r.msFullscreenElement ||
                        !!r.webkitFullscreenElement;
                    e(f).attr("style", h ? "display: none !important;" : "");
                }
                function p() {
                    var h = e('<a class="w-webflow-badge"></a>').attr(
                            "href",
                            "https://webflow.com?utm_campaign=brandjs"
                        ),
                        E = e("<img>")
                            .attr(
                                "src",
                                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                            )
                            .attr("alt", "")
                            .css({ marginRight: "4px", width: "26px" }),
                        _ = e("<img>")
                            .attr(
                                "src",
                                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                            )
                            .attr("alt", "Made in Webflow");
                    return h.append(E, _), h[0];
                }
                function v() {
                    var h = o.children(i),
                        E = h.length && h.get(0) === f,
                        _ = Hs.env("editor");
                    if (E) {
                        _ && h.remove();
                        return;
                    }
                    h.length && h.remove(), _ || o.append(f);
                }
                return t;
            })
        );
    });
    var Bs = c((GH, ks) => {
        "use strict";
        var qi = je();
        qi.define(
            "edit",
            (ks.exports = function (e, t, r) {
                if (
                    ((r = r || {}),
                    (qi.env("test") || qi.env("frame")) && !r.fixture && !rb())
                )
                    return { exit: 1 };
                var n = {},
                    o = e(window),
                    i = e(document.documentElement),
                    s = document.location,
                    a = "hashchange",
                    u,
                    f = r.load || v,
                    d = !1;
                try {
                    d =
                        localStorage &&
                        localStorage.getItem &&
                        localStorage.getItem("WebflowEditor");
                } catch {}
                d
                    ? f()
                    : s.search
                    ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) ||
                          /\?edit$/.test(s.href)) &&
                      f()
                    : o.on(a, p).triggerHandler(a);
                function p() {
                    u || (/\?edit/.test(s.hash) && f());
                }
                function v() {
                    (u = !0),
                        (window.WebflowEditor = !0),
                        o.off(a, p),
                        A(function (C) {
                            e.ajax({
                                url: S(
                                    "https://editor-api.webflow.com/api/editor/view"
                                ),
                                data: { siteId: i.attr("data-wf-site") },
                                xhrFields: { withCredentials: !0 },
                                dataType: "json",
                                crossDomain: !0,
                                success: h(C),
                            });
                        });
                }
                function h(C) {
                    return function (R) {
                        if (!R) {
                            console.error("Could not load editor data");
                            return;
                        }
                        (R.thirdPartyCookiesSupported = C),
                            E(L(R.scriptPath), function () {
                                window.WebflowEditor(R);
                            });
                    };
                }
                function E(C, R) {
                    e.ajax({
                        type: "GET",
                        url: C,
                        dataType: "script",
                        cache: !0,
                    }).then(R, _);
                }
                function _(C, R, x) {
                    throw (
                        (console.error("Could not load editor script: " + R), x)
                    );
                }
                function L(C) {
                    return C.indexOf("//") >= 0
                        ? C
                        : S("https://editor-api.webflow.com" + C);
                }
                function S(C) {
                    return C.replace(/([^:])\/\//g, "$1/");
                }
                function A(C) {
                    var R = window.document.createElement("iframe");
                    (R.src =
                        "https://webflow.com/site/third-party-cookie-check.html"),
                        (R.style.display = "none"),
                        (R.sandbox = "allow-scripts allow-same-origin");
                    var x = function (U) {
                        U.data === "WF_third_party_cookies_unsupported"
                            ? (O(R, x), C(!1))
                            : U.data === "WF_third_party_cookies_supported" &&
                              (O(R, x), C(!0));
                    };
                    (R.onerror = function () {
                        O(R, x), C(!1);
                    }),
                        window.addEventListener("message", x, !1),
                        window.document.body.appendChild(R);
                }
                function O(C, R) {
                    window.removeEventListener("message", R, !1), C.remove();
                }
                return n;
            })
        );
        function rb() {
            try {
                return window.top.__Cypress__;
            } catch {
                return !1;
            }
        }
    });
    var zs = c((VH, js) => {
        "use strict";
        var nb = je();
        nb.define(
            "focus-visible",
            (js.exports = function () {
                function e(r) {
                    var n = !0,
                        o = !1,
                        i = null,
                        s = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0,
                        };
                    function a(O) {
                        return !!(
                            O &&
                            O !== document &&
                            O.nodeName !== "HTML" &&
                            O.nodeName !== "BODY" &&
                            "classList" in O &&
                            "contains" in O.classList
                        );
                    }
                    function u(O) {
                        var C = O.type,
                            R = O.tagName;
                        return !!(
                            (R === "INPUT" && s[C] && !O.readOnly) ||
                            (R === "TEXTAREA" && !O.readOnly) ||
                            O.isContentEditable
                        );
                    }
                    function f(O) {
                        O.getAttribute("data-wf-focus-visible") ||
                            O.setAttribute("data-wf-focus-visible", "true");
                    }
                    function d(O) {
                        O.getAttribute("data-wf-focus-visible") &&
                            O.removeAttribute("data-wf-focus-visible");
                    }
                    function p(O) {
                        O.metaKey ||
                            O.altKey ||
                            O.ctrlKey ||
                            (a(r.activeElement) && f(r.activeElement),
                            (n = !0));
                    }
                    function v() {
                        n = !1;
                    }
                    function h(O) {
                        a(O.target) && (n || u(O.target)) && f(O.target);
                    }
                    function E(O) {
                        a(O.target) &&
                            O.target.hasAttribute("data-wf-focus-visible") &&
                            ((o = !0),
                            window.clearTimeout(i),
                            (i = window.setTimeout(function () {
                                o = !1;
                            }, 100)),
                            d(O.target));
                    }
                    function _() {
                        document.visibilityState === "hidden" &&
                            (o && (n = !0), L());
                    }
                    function L() {
                        document.addEventListener("mousemove", A),
                            document.addEventListener("mousedown", A),
                            document.addEventListener("mouseup", A),
                            document.addEventListener("pointermove", A),
                            document.addEventListener("pointerdown", A),
                            document.addEventListener("pointerup", A),
                            document.addEventListener("touchmove", A),
                            document.addEventListener("touchstart", A),
                            document.addEventListener("touchend", A);
                    }
                    function S() {
                        document.removeEventListener("mousemove", A),
                            document.removeEventListener("mousedown", A),
                            document.removeEventListener("mouseup", A),
                            document.removeEventListener("pointermove", A),
                            document.removeEventListener("pointerdown", A),
                            document.removeEventListener("pointerup", A),
                            document.removeEventListener("touchmove", A),
                            document.removeEventListener("touchstart", A),
                            document.removeEventListener("touchend", A);
                    }
                    function A(O) {
                        (O.target.nodeName &&
                            O.target.nodeName.toLowerCase() === "html") ||
                            ((n = !1), S());
                    }
                    document.addEventListener("keydown", p, !0),
                        document.addEventListener("mousedown", v, !0),
                        document.addEventListener("pointerdown", v, !0),
                        document.addEventListener("touchstart", v, !0),
                        document.addEventListener("visibilitychange", _, !0),
                        L(),
                        r.addEventListener("focus", h, !0),
                        r.addEventListener("blur", E, !0);
                }
                function t() {
                    if (typeof document < "u")
                        try {
                            document.querySelector(":focus-visible");
                        } catch {
                            e(document);
                        }
                }
                return { ready: t };
            })
        );
    });
    var $s = c((UH, Ys) => {
        "use strict";
        var Ks = je();
        Ks.define(
            "focus",
            (Ys.exports = function () {
                var e = [],
                    t = !1;
                function r(s) {
                    t &&
                        (s.preventDefault(),
                        s.stopPropagation(),
                        s.stopImmediatePropagation(),
                        e.unshift(s));
                }
                function n(s) {
                    var a = s.target,
                        u = a.tagName;
                    return (
                        (/^a$/i.test(u) && a.href != null) ||
                        (/^(button|textarea)$/i.test(u) && a.disabled !== !0) ||
                        (/^input$/i.test(u) &&
                            /^(button|reset|submit|radio|checkbox)$/i.test(
                                a.type
                            ) &&
                            !a.disabled) ||
                        (!/^(button|input|textarea|select|a)$/i.test(u) &&
                            !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                        /^audio$/i.test(u) ||
                        (/^video$/i.test(u) && a.controls === !0)
                    );
                }
                function o(s) {
                    n(s) &&
                        ((t = !0),
                        setTimeout(() => {
                            for (t = !1, s.target.focus(); e.length > 0; ) {
                                var a = e.pop();
                                a.target.dispatchEvent(
                                    new MouseEvent(a.type, a)
                                );
                            }
                        }, 0));
                }
                function i() {
                    typeof document < "u" &&
                        document.body.hasAttribute("data-wf-focus-within") &&
                        Ks.env.safari &&
                        (document.addEventListener("mousedown", o, !0),
                        document.addEventListener("mouseup", r, !0),
                        document.addEventListener("click", r, !0));
                }
                return { ready: i };
            })
        );
    });
    var Js = c((HH, Zs) => {
        "use strict";
        var Mi = window.jQuery,
            rt = {},
            an = [],
            Qs = ".w-ix",
            sn = {
                reset: function (e, t) {
                    t.__wf_intro = null;
                },
                intro: function (e, t) {
                    t.__wf_intro ||
                        ((t.__wf_intro = !0),
                        Mi(t).triggerHandler(rt.types.INTRO));
                },
                outro: function (e, t) {
                    t.__wf_intro &&
                        ((t.__wf_intro = null),
                        Mi(t).triggerHandler(rt.types.OUTRO));
                },
            };
        rt.triggers = {};
        rt.types = { INTRO: "w-ix-intro" + Qs, OUTRO: "w-ix-outro" + Qs };
        rt.init = function () {
            for (var e = an.length, t = 0; t < e; t++) {
                var r = an[t];
                r[0](0, r[1]);
            }
            (an = []), Mi.extend(rt.triggers, sn);
        };
        rt.async = function () {
            for (var e in sn) {
                var t = sn[e];
                sn.hasOwnProperty(e) &&
                    (rt.triggers[e] = function (r, n) {
                        an.push([t, n]);
                    });
            }
        };
        rt.async();
        Zs.exports = rt;
    });
    var Fi = c((WH, ru) => {
        "use strict";
        var Di = Js();
        function eu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
        }
        var ib = window.jQuery,
            un = {},
            tu = ".w-ix",
            ob = {
                reset: function (e, t) {
                    Di.triggers.reset(e, t);
                },
                intro: function (e, t) {
                    Di.triggers.intro(e, t), eu(t, "COMPONENT_ACTIVE");
                },
                outro: function (e, t) {
                    Di.triggers.outro(e, t), eu(t, "COMPONENT_INACTIVE");
                },
            };
        un.triggers = {};
        un.types = { INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu };
        ib.extend(un.triggers, ob);
        ru.exports = un;
    });
    var nu = c((XH, ft) => {
        function Gi(e) {
            return (
                (ft.exports = Gi =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  typeof Symbol == "function" &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                (ft.exports.__esModule = !0),
                (ft.exports.default = ft.exports),
                Gi(e)
            );
        }
        (ft.exports = Gi),
            (ft.exports.__esModule = !0),
            (ft.exports.default = ft.exports);
    });
    var cn = c((kH, Er) => {
        var ab = nu().default;
        function iu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap(),
                r = new WeakMap();
            return (iu = function (o) {
                return o ? r : t;
            })(e);
        }
        function sb(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || (ab(e) !== "object" && typeof e != "function"))
                return { default: e };
            var r = iu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (
                    i !== "default" &&
                    Object.prototype.hasOwnProperty.call(e, i)
                ) {
                    var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    s && (s.get || s.set)
                        ? Object.defineProperty(n, i, s)
                        : (n[i] = e[i]);
                }
            return (n.default = e), r && r.set(e, n), n;
        }
        (Er.exports = sb),
            (Er.exports.__esModule = !0),
            (Er.exports.default = Er.exports);
    });
    var ou = c((BH, mr) => {
        function ub(e) {
            return e && e.__esModule ? e : { default: e };
        }
        (mr.exports = ub),
            (mr.exports.__esModule = !0),
            (mr.exports.default = mr.exports);
    });
    var Ee = c((jH, au) => {
        var ln = function (e) {
            return e && e.Math == Math && e;
        };
        au.exports =
            ln(typeof globalThis == "object" && globalThis) ||
            ln(typeof window == "object" && window) ||
            ln(typeof self == "object" && self) ||
            ln(typeof global == "object" && global) ||
            (function () {
                return this;
            })() ||
            Function("return this")();
    });
    var Ht = c((zH, su) => {
        su.exports = function (e) {
            try {
                return !!e();
            } catch {
                return !0;
            }
        };
    });
    var Ct = c((KH, uu) => {
        var cb = Ht();
        uu.exports = !cb(function () {
            return (
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1] != 7
            );
        });
    });
    var fn = c((YH, cu) => {
        var _r = Function.prototype.call;
        cu.exports = _r.bind
            ? _r.bind(_r)
            : function () {
                  return _r.apply(_r, arguments);
              };
    });
    var pu = c((du) => {
        "use strict";
        var lu = {}.propertyIsEnumerable,
            fu = Object.getOwnPropertyDescriptor,
            lb = fu && !lu.call({ 1: 2 }, 1);
        du.f = lb
            ? function (t) {
                  var r = fu(this, t);
                  return !!r && r.enumerable;
              }
            : lu;
    });
    var Vi = c((QH, gu) => {
        gu.exports = function (e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t,
            };
        };
    });
    var ze = c((ZH, hu) => {
        var vu = Function.prototype,
            Ui = vu.bind,
            Hi = vu.call,
            fb = Ui && Ui.bind(Hi);
        hu.exports = Ui
            ? function (e) {
                  return e && fb(Hi, e);
              }
            : function (e) {
                  return (
                      e &&
                      function () {
                          return Hi.apply(e, arguments);
                      }
                  );
              };
    });
    var mu = c((JH, Eu) => {
        var yu = ze(),
            db = yu({}.toString),
            pb = yu("".slice);
        Eu.exports = function (e) {
            return pb(db(e), 8, -1);
        };
    });
    var bu = c((eW, _u) => {
        var gb = Ee(),
            vb = ze(),
            hb = Ht(),
            yb = mu(),
            Wi = gb.Object,
            Eb = vb("".split);
        _u.exports = hb(function () {
            return !Wi("z").propertyIsEnumerable(0);
        })
            ? function (e) {
                  return yb(e) == "String" ? Eb(e, "") : Wi(e);
              }
            : Wi;
    });
    var Xi = c((tW, Tu) => {
        var mb = Ee(),
            _b = mb.TypeError;
        Tu.exports = function (e) {
            if (e == null) throw _b("Can't call method on " + e);
            return e;
        };
    });
    var br = c((rW, Iu) => {
        var bb = bu(),
            Tb = Xi();
        Iu.exports = function (e) {
            return bb(Tb(e));
        };
    });
    var nt = c((nW, Ou) => {
        Ou.exports = function (e) {
            return typeof e == "function";
        };
    });
    var Wt = c((iW, wu) => {
        var Ib = nt();
        wu.exports = function (e) {
            return typeof e == "object" ? e !== null : Ib(e);
        };
    });
    var Tr = c((oW, Su) => {
        var ki = Ee(),
            Ob = nt(),
            wb = function (e) {
                return Ob(e) ? e : void 0;
            };
        Su.exports = function (e, t) {
            return arguments.length < 2 ? wb(ki[e]) : ki[e] && ki[e][t];
        };
    });
    var xu = c((aW, Au) => {
        var Sb = ze();
        Au.exports = Sb({}.isPrototypeOf);
    });
    var Ru = c((sW, Cu) => {
        var Ab = Tr();
        Cu.exports = Ab("navigator", "userAgent") || "";
    });
    var Fu = c((uW, Du) => {
        var Mu = Ee(),
            Bi = Ru(),
            Lu = Mu.process,
            Nu = Mu.Deno,
            Pu = (Lu && Lu.versions) || (Nu && Nu.version),
            qu = Pu && Pu.v8,
            Ke,
            dn;
        qu &&
            ((Ke = qu.split(".")),
            (dn = Ke[0] > 0 && Ke[0] < 4 ? 1 : +(Ke[0] + Ke[1])));
        !dn &&
            Bi &&
            ((Ke = Bi.match(/Edge\/(\d+)/)),
            (!Ke || Ke[1] >= 74) &&
                ((Ke = Bi.match(/Chrome\/(\d+)/)), Ke && (dn = +Ke[1])));
        Du.exports = dn;
    });
    var ji = c((cW, Vu) => {
        var Gu = Fu(),
            xb = Ht();
        Vu.exports =
            !!Object.getOwnPropertySymbols &&
            !xb(function () {
                var e = Symbol();
                return (
                    !String(e) ||
                    !(Object(e) instanceof Symbol) ||
                    (!Symbol.sham && Gu && Gu < 41)
                );
            });
    });
    var zi = c((lW, Uu) => {
        var Cb = ji();
        Uu.exports = Cb && !Symbol.sham && typeof Symbol.iterator == "symbol";
    });
    var Ki = c((fW, Hu) => {
        var Rb = Ee(),
            Lb = Tr(),
            Nb = nt(),
            Pb = xu(),
            qb = zi(),
            Mb = Rb.Object;
        Hu.exports = qb
            ? function (e) {
                  return typeof e == "symbol";
              }
            : function (e) {
                  var t = Lb("Symbol");
                  return Nb(t) && Pb(t.prototype, Mb(e));
              };
    });
    var Xu = c((dW, Wu) => {
        var Db = Ee(),
            Fb = Db.String;
        Wu.exports = function (e) {
            try {
                return Fb(e);
            } catch {
                return "Object";
            }
        };
    });
    var Bu = c((pW, ku) => {
        var Gb = Ee(),
            Vb = nt(),
            Ub = Xu(),
            Hb = Gb.TypeError;
        ku.exports = function (e) {
            if (Vb(e)) return e;
            throw Hb(Ub(e) + " is not a function");
        };
    });
    var zu = c((gW, ju) => {
        var Wb = Bu();
        ju.exports = function (e, t) {
            var r = e[t];
            return r == null ? void 0 : Wb(r);
        };
    });
    var Yu = c((vW, Ku) => {
        var Xb = Ee(),
            Yi = fn(),
            $i = nt(),
            Qi = Wt(),
            kb = Xb.TypeError;
        Ku.exports = function (e, t) {
            var r, n;
            if (
                (t === "string" &&
                    $i((r = e.toString)) &&
                    !Qi((n = Yi(r, e)))) ||
                ($i((r = e.valueOf)) && !Qi((n = Yi(r, e)))) ||
                (t !== "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e))))
            )
                return n;
            throw kb("Can't convert object to primitive value");
        };
    });
    var Qu = c((hW, $u) => {
        $u.exports = !1;
    });
    var pn = c((yW, Ju) => {
        var Zu = Ee(),
            Bb = Object.defineProperty;
        Ju.exports = function (e, t) {
            try {
                Bb(Zu, e, { value: t, configurable: !0, writable: !0 });
            } catch {
                Zu[e] = t;
            }
            return t;
        };
    });
    var gn = c((EW, tc) => {
        var jb = Ee(),
            zb = pn(),
            ec = "__core-js_shared__",
            Kb = jb[ec] || zb(ec, {});
        tc.exports = Kb;
    });
    var Zi = c((mW, nc) => {
        var Yb = Qu(),
            rc = gn();
        (nc.exports = function (e, t) {
            return rc[e] || (rc[e] = t !== void 0 ? t : {});
        })("versions", []).push({
            version: "3.19.0",
            mode: Yb ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
        });
    });
    var oc = c((_W, ic) => {
        var $b = Ee(),
            Qb = Xi(),
            Zb = $b.Object;
        ic.exports = function (e) {
            return Zb(Qb(e));
        };
    });
    var mt = c((bW, ac) => {
        var Jb = ze(),
            eT = oc(),
            tT = Jb({}.hasOwnProperty);
        ac.exports =
            Object.hasOwn ||
            function (t, r) {
                return tT(eT(t), r);
            };
    });
    var Ji = c((TW, sc) => {
        var rT = ze(),
            nT = 0,
            iT = Math.random(),
            oT = rT((1).toString);
        sc.exports = function (e) {
            return (
                "Symbol(" + (e === void 0 ? "" : e) + ")_" + oT(++nT + iT, 36)
            );
        };
    });
    var eo = c((IW, dc) => {
        var aT = Ee(),
            sT = Zi(),
            uc = mt(),
            uT = Ji(),
            cc = ji(),
            fc = zi(),
            Xt = sT("wks"),
            Rt = aT.Symbol,
            lc = Rt && Rt.for,
            cT = fc ? Rt : (Rt && Rt.withoutSetter) || uT;
        dc.exports = function (e) {
            if (!uc(Xt, e) || !(cc || typeof Xt[e] == "string")) {
                var t = "Symbol." + e;
                cc && uc(Rt, e)
                    ? (Xt[e] = Rt[e])
                    : fc && lc
                    ? (Xt[e] = lc(t))
                    : (Xt[e] = cT(t));
            }
            return Xt[e];
        };
    });
    var hc = c((OW, vc) => {
        var lT = Ee(),
            fT = fn(),
            pc = Wt(),
            gc = Ki(),
            dT = zu(),
            pT = Yu(),
            gT = eo(),
            vT = lT.TypeError,
            hT = gT("toPrimitive");
        vc.exports = function (e, t) {
            if (!pc(e) || gc(e)) return e;
            var r = dT(e, hT),
                n;
            if (r) {
                if (
                    (t === void 0 && (t = "default"),
                    (n = fT(r, e, t)),
                    !pc(n) || gc(n))
                )
                    return n;
                throw vT("Can't convert object to primitive value");
            }
            return t === void 0 && (t = "number"), pT(e, t);
        };
    });
    var to = c((wW, yc) => {
        var yT = hc(),
            ET = Ki();
        yc.exports = function (e) {
            var t = yT(e, "string");
            return ET(t) ? t : t + "";
        };
    });
    var no = c((SW, mc) => {
        var mT = Ee(),
            Ec = Wt(),
            ro = mT.document,
            _T = Ec(ro) && Ec(ro.createElement);
        mc.exports = function (e) {
            return _T ? ro.createElement(e) : {};
        };
    });
    var io = c((AW, _c) => {
        var bT = Ct(),
            TT = Ht(),
            IT = no();
        _c.exports =
            !bT &&
            !TT(function () {
                return (
                    Object.defineProperty(IT("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a != 7
                );
            });
    });
    var oo = c((Tc) => {
        var OT = Ct(),
            wT = fn(),
            ST = pu(),
            AT = Vi(),
            xT = br(),
            CT = to(),
            RT = mt(),
            LT = io(),
            bc = Object.getOwnPropertyDescriptor;
        Tc.f = OT
            ? bc
            : function (t, r) {
                  if (((t = xT(t)), (r = CT(r)), LT))
                      try {
                          return bc(t, r);
                      } catch {}
                  if (RT(t, r)) return AT(!wT(ST.f, t, r), t[r]);
              };
    });
    var Ir = c((CW, Oc) => {
        var Ic = Ee(),
            NT = Wt(),
            PT = Ic.String,
            qT = Ic.TypeError;
        Oc.exports = function (e) {
            if (NT(e)) return e;
            throw qT(PT(e) + " is not an object");
        };
    });
    var Or = c((Ac) => {
        var MT = Ee(),
            DT = Ct(),
            FT = io(),
            wc = Ir(),
            GT = to(),
            VT = MT.TypeError,
            Sc = Object.defineProperty;
        Ac.f = DT
            ? Sc
            : function (t, r, n) {
                  if ((wc(t), (r = GT(r)), wc(n), FT))
                      try {
                          return Sc(t, r, n);
                      } catch {}
                  if ("get" in n || "set" in n)
                      throw VT("Accessors not supported");
                  return "value" in n && (t[r] = n.value), t;
              };
    });
    var vn = c((LW, xc) => {
        var UT = Ct(),
            HT = Or(),
            WT = Vi();
        xc.exports = UT
            ? function (e, t, r) {
                  return HT.f(e, t, WT(1, r));
              }
            : function (e, t, r) {
                  return (e[t] = r), e;
              };
    });
    var so = c((NW, Cc) => {
        var XT = ze(),
            kT = nt(),
            ao = gn(),
            BT = XT(Function.toString);
        kT(ao.inspectSource) ||
            (ao.inspectSource = function (e) {
                return BT(e);
            });
        Cc.exports = ao.inspectSource;
    });
    var Nc = c((PW, Lc) => {
        var jT = Ee(),
            zT = nt(),
            KT = so(),
            Rc = jT.WeakMap;
        Lc.exports = zT(Rc) && /native code/.test(KT(Rc));
    });
    var uo = c((qW, qc) => {
        var YT = Zi(),
            $T = Ji(),
            Pc = YT("keys");
        qc.exports = function (e) {
            return Pc[e] || (Pc[e] = $T(e));
        };
    });
    var hn = c((MW, Mc) => {
        Mc.exports = {};
    });
    var Hc = c((DW, Uc) => {
        var QT = Nc(),
            Vc = Ee(),
            co = ze(),
            ZT = Wt(),
            JT = vn(),
            lo = mt(),
            fo = gn(),
            eI = uo(),
            tI = hn(),
            Dc = "Object already initialized",
            go = Vc.TypeError,
            rI = Vc.WeakMap,
            yn,
            wr,
            En,
            nI = function (e) {
                return En(e) ? wr(e) : yn(e, {});
            },
            iI = function (e) {
                return function (t) {
                    var r;
                    if (!ZT(t) || (r = wr(t)).type !== e)
                        throw go("Incompatible receiver, " + e + " required");
                    return r;
                };
            };
        QT || fo.state
            ? ((_t = fo.state || (fo.state = new rI())),
              (Fc = co(_t.get)),
              (po = co(_t.has)),
              (Gc = co(_t.set)),
              (yn = function (e, t) {
                  if (po(_t, e)) throw new go(Dc);
                  return (t.facade = e), Gc(_t, e, t), t;
              }),
              (wr = function (e) {
                  return Fc(_t, e) || {};
              }),
              (En = function (e) {
                  return po(_t, e);
              }))
            : ((Lt = eI("state")),
              (tI[Lt] = !0),
              (yn = function (e, t) {
                  if (lo(e, Lt)) throw new go(Dc);
                  return (t.facade = e), JT(e, Lt, t), t;
              }),
              (wr = function (e) {
                  return lo(e, Lt) ? e[Lt] : {};
              }),
              (En = function (e) {
                  return lo(e, Lt);
              }));
        var _t, Fc, po, Gc, Lt;
        Uc.exports = { set: yn, get: wr, has: En, enforce: nI, getterFor: iI };
    });
    var kc = c((FW, Xc) => {
        var vo = Ct(),
            oI = mt(),
            Wc = Function.prototype,
            aI = vo && Object.getOwnPropertyDescriptor,
            ho = oI(Wc, "name"),
            sI = ho && function () {}.name === "something",
            uI = ho && (!vo || (vo && aI(Wc, "name").configurable));
        Xc.exports = { EXISTS: ho, PROPER: sI, CONFIGURABLE: uI };
    });
    var Yc = c((GW, Kc) => {
        var cI = Ee(),
            Bc = nt(),
            lI = mt(),
            jc = vn(),
            fI = pn(),
            dI = so(),
            zc = Hc(),
            pI = kc().CONFIGURABLE,
            gI = zc.get,
            vI = zc.enforce,
            hI = String(String).split("String");
        (Kc.exports = function (e, t, r, n) {
            var o = n ? !!n.unsafe : !1,
                i = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if (
                (Bc(r) &&
                    (String(a).slice(0, 7) === "Symbol(" &&
                        (a =
                            "[" +
                            String(a).replace(/^Symbol\(([^)]*)\)/, "$1") +
                            "]"),
                    (!lI(r, "name") || (pI && r.name !== a)) &&
                        jc(r, "name", a),
                    (u = vI(r)),
                    u.source ||
                        (u.source = hI.join(typeof a == "string" ? a : ""))),
                e === cI)
            ) {
                i ? (e[t] = r) : fI(t, r);
                return;
            } else o ? !s && e[t] && (i = !0) : delete e[t];
            i ? (e[t] = r) : jc(e, t, r);
        })(Function.prototype, "toString", function () {
            return (Bc(this) && gI(this).source) || dI(this);
        });
    });
    var yo = c((VW, $c) => {
        var yI = Math.ceil,
            EI = Math.floor;
        $c.exports = function (e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? EI : yI)(t);
        };
    });
    var Zc = c((UW, Qc) => {
        var mI = yo(),
            _I = Math.max,
            bI = Math.min;
        Qc.exports = function (e, t) {
            var r = mI(e);
            return r < 0 ? _I(r + t, 0) : bI(r, t);
        };
    });
    var el = c((HW, Jc) => {
        var TI = yo(),
            II = Math.min;
        Jc.exports = function (e) {
            return e > 0 ? II(TI(e), 9007199254740991) : 0;
        };
    });
    var rl = c((WW, tl) => {
        var OI = el();
        tl.exports = function (e) {
            return OI(e.length);
        };
    });
    var Eo = c((XW, il) => {
        var wI = br(),
            SI = Zc(),
            AI = rl(),
            nl = function (e) {
                return function (t, r, n) {
                    var o = wI(t),
                        i = AI(o),
                        s = SI(n, i),
                        a;
                    if (e && r != r) {
                        for (; i > s; ) if (((a = o[s++]), a != a)) return !0;
                    } else
                        for (; i > s; s++)
                            if ((e || s in o) && o[s] === r) return e || s || 0;
                    return !e && -1;
                };
            };
        il.exports = { includes: nl(!0), indexOf: nl(!1) };
    });
    var _o = c((kW, al) => {
        var xI = ze(),
            mo = mt(),
            CI = br(),
            RI = Eo().indexOf,
            LI = hn(),
            ol = xI([].push);
        al.exports = function (e, t) {
            var r = CI(e),
                n = 0,
                o = [],
                i;
            for (i in r) !mo(LI, i) && mo(r, i) && ol(o, i);
            for (; t.length > n; )
                mo(r, (i = t[n++])) && (~RI(o, i) || ol(o, i));
            return o;
        };
    });
    var mn = c((BW, sl) => {
        sl.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
        ];
    });
    var cl = c((ul) => {
        var NI = _o(),
            PI = mn(),
            qI = PI.concat("length", "prototype");
        ul.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return NI(t, qI);
            };
    });
    var fl = c((ll) => {
        ll.f = Object.getOwnPropertySymbols;
    });
    var pl = c((KW, dl) => {
        var MI = Tr(),
            DI = ze(),
            FI = cl(),
            GI = fl(),
            VI = Ir(),
            UI = DI([].concat);
        dl.exports =
            MI("Reflect", "ownKeys") ||
            function (t) {
                var r = FI.f(VI(t)),
                    n = GI.f;
                return n ? UI(r, n(t)) : r;
            };
    });
    var vl = c((YW, gl) => {
        var HI = mt(),
            WI = pl(),
            XI = oo(),
            kI = Or();
        gl.exports = function (e, t) {
            for (var r = WI(t), n = kI.f, o = XI.f, i = 0; i < r.length; i++) {
                var s = r[i];
                HI(e, s) || n(e, s, o(t, s));
            }
        };
    });
    var yl = c(($W, hl) => {
        var BI = Ht(),
            jI = nt(),
            zI = /#|\.prototype\./,
            Sr = function (e, t) {
                var r = YI[KI(e)];
                return r == QI ? !0 : r == $I ? !1 : jI(t) ? BI(t) : !!t;
            },
            KI = (Sr.normalize = function (e) {
                return String(e).replace(zI, ".").toLowerCase();
            }),
            YI = (Sr.data = {}),
            $I = (Sr.NATIVE = "N"),
            QI = (Sr.POLYFILL = "P");
        hl.exports = Sr;
    });
    var ml = c((QW, El) => {
        var bo = Ee(),
            ZI = oo().f,
            JI = vn(),
            eO = Yc(),
            tO = pn(),
            rO = vl(),
            nO = yl();
        El.exports = function (e, t) {
            var r = e.target,
                n = e.global,
                o = e.stat,
                i,
                s,
                a,
                u,
                f,
                d;
            if (
                (n
                    ? (s = bo)
                    : o
                    ? (s = bo[r] || tO(r, {}))
                    : (s = (bo[r] || {}).prototype),
                s)
            )
                for (a in t) {
                    if (
                        ((f = t[a]),
                        e.noTargetGet
                            ? ((d = ZI(s, a)), (u = d && d.value))
                            : (u = s[a]),
                        (i = nO(n ? a : r + (o ? "." : "#") + a, e.forced)),
                        !i && u !== void 0)
                    ) {
                        if (typeof f == typeof u) continue;
                        rO(f, u);
                    }
                    (e.sham || (u && u.sham)) && JI(f, "sham", !0),
                        eO(s, a, f, e);
                }
        };
    });
    var bl = c((ZW, _l) => {
        var iO = _o(),
            oO = mn();
        _l.exports =
            Object.keys ||
            function (t) {
                return iO(t, oO);
            };
    });
    var Il = c((JW, Tl) => {
        var aO = Ct(),
            sO = Or(),
            uO = Ir(),
            cO = br(),
            lO = bl();
        Tl.exports = aO
            ? Object.defineProperties
            : function (t, r) {
                  uO(t);
                  for (
                      var n = cO(r), o = lO(r), i = o.length, s = 0, a;
                      i > s;

                  )
                      sO.f(t, (a = o[s++]), n[a]);
                  return t;
              };
    });
    var wl = c((eX, Ol) => {
        var fO = Tr();
        Ol.exports = fO("document", "documentElement");
    });
    var Pl = c((tX, Nl) => {
        var dO = Ir(),
            pO = Il(),
            Sl = mn(),
            gO = hn(),
            vO = wl(),
            hO = no(),
            yO = uo(),
            Al = ">",
            xl = "<",
            Io = "prototype",
            Oo = "script",
            Rl = yO("IE_PROTO"),
            To = function () {},
            Ll = function (e) {
                return xl + Oo + Al + e + xl + "/" + Oo + Al;
            },
            Cl = function (e) {
                e.write(Ll("")), e.close();
                var t = e.parentWindow.Object;
                return (e = null), t;
            },
            EO = function () {
                var e = hO("iframe"),
                    t = "java" + Oo + ":",
                    r;
                return (
                    (e.style.display = "none"),
                    vO.appendChild(e),
                    (e.src = String(t)),
                    (r = e.contentWindow.document),
                    r.open(),
                    r.write(Ll("document.F=Object")),
                    r.close(),
                    r.F
                );
            },
            _n,
            bn = function () {
                try {
                    _n = new ActiveXObject("htmlfile");
                } catch {}
                bn =
                    typeof document < "u"
                        ? document.domain && _n
                            ? Cl(_n)
                            : EO()
                        : Cl(_n);
                for (var e = Sl.length; e--; ) delete bn[Io][Sl[e]];
                return bn();
            };
        gO[Rl] = !0;
        Nl.exports =
            Object.create ||
            function (t, r) {
                var n;
                return (
                    t !== null
                        ? ((To[Io] = dO(t)),
                          (n = new To()),
                          (To[Io] = null),
                          (n[Rl] = t))
                        : (n = bn()),
                    r === void 0 ? n : pO(n, r)
                );
            };
    });
    var Ml = c((rX, ql) => {
        var mO = eo(),
            _O = Pl(),
            bO = Or(),
            wo = mO("unscopables"),
            So = Array.prototype;
        So[wo] == null && bO.f(So, wo, { configurable: !0, value: _O(null) });
        ql.exports = function (e) {
            So[wo][e] = !0;
        };
    });
    var Dl = c(() => {
        "use strict";
        var TO = ml(),
            IO = Eo().includes,
            OO = Ml();
        TO(
            { target: "Array", proto: !0 },
            {
                includes: function (t) {
                    return IO(
                        this,
                        t,
                        arguments.length > 1 ? arguments[1] : void 0
                    );
                },
            }
        );
        OO("includes");
    });
    var Gl = c((oX, Fl) => {
        var wO = Ee(),
            SO = ze();
        Fl.exports = function (e, t) {
            return SO(wO[e].prototype[t]);
        };
    });
    var Ul = c((aX, Vl) => {
        Dl();
        var AO = Gl();
        Vl.exports = AO("Array", "includes");
    });
    var Wl = c((sX, Hl) => {
        var xO = Ul();
        Hl.exports = xO;
    });
    var kl = c((uX, Xl) => {
        var CO = Wl();
        Xl.exports = CO;
    });
    var Ao = c((cX, Bl) => {
        var RO =
            typeof global == "object" &&
            global &&
            global.Object === Object &&
            global;
        Bl.exports = RO;
    });
    var Ye = c((lX, jl) => {
        var LO = Ao(),
            NO =
                typeof self == "object" &&
                self &&
                self.Object === Object &&
                self,
            PO = LO || NO || Function("return this")();
        jl.exports = PO;
    });
    var kt = c((fX, zl) => {
        var qO = Ye(),
            MO = qO.Symbol;
        zl.exports = MO;
    });
    var Ql = c((dX, $l) => {
        var Kl = kt(),
            Yl = Object.prototype,
            DO = Yl.hasOwnProperty,
            FO = Yl.toString,
            Ar = Kl ? Kl.toStringTag : void 0;
        function GO(e) {
            var t = DO.call(e, Ar),
                r = e[Ar];
            try {
                e[Ar] = void 0;
                var n = !0;
            } catch {}
            var o = FO.call(e);
            return n && (t ? (e[Ar] = r) : delete e[Ar]), o;
        }
        $l.exports = GO;
    });
    var Jl = c((pX, Zl) => {
        var VO = Object.prototype,
            UO = VO.toString;
        function HO(e) {
            return UO.call(e);
        }
        Zl.exports = HO;
    });
    var bt = c((gX, rf) => {
        var ef = kt(),
            WO = Ql(),
            XO = Jl(),
            kO = "[object Null]",
            BO = "[object Undefined]",
            tf = ef ? ef.toStringTag : void 0;
        function jO(e) {
            return e == null
                ? e === void 0
                    ? BO
                    : kO
                : tf && tf in Object(e)
                ? WO(e)
                : XO(e);
        }
        rf.exports = jO;
    });
    var xo = c((vX, nf) => {
        function zO(e, t) {
            return function (r) {
                return e(t(r));
            };
        }
        nf.exports = zO;
    });
    var Co = c((hX, of) => {
        var KO = xo(),
            YO = KO(Object.getPrototypeOf, Object);
        of.exports = YO;
    });
    var dt = c((yX, af) => {
        function $O(e) {
            return e != null && typeof e == "object";
        }
        af.exports = $O;
    });
    var Ro = c((EX, uf) => {
        var QO = bt(),
            ZO = Co(),
            JO = dt(),
            ew = "[object Object]",
            tw = Function.prototype,
            rw = Object.prototype,
            sf = tw.toString,
            nw = rw.hasOwnProperty,
            iw = sf.call(Object);
        function ow(e) {
            if (!JO(e) || QO(e) != ew) return !1;
            var t = ZO(e);
            if (t === null) return !0;
            var r = nw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && sf.call(r) == iw;
        }
        uf.exports = ow;
    });
    var cf = c((Lo) => {
        "use strict";
        Object.defineProperty(Lo, "__esModule", { value: !0 });
        Lo.default = aw;
        function aw(e) {
            var t,
                r = e.Symbol;
            return (
                typeof r == "function"
                    ? r.observable
                        ? (t = r.observable)
                        : ((t = r("observable")), (r.observable = t))
                    : (t = "@@observable"),
                t
            );
        }
    });
    var lf = c((Po, No) => {
        "use strict";
        Object.defineProperty(Po, "__esModule", { value: !0 });
        var sw = cf(),
            uw = cw(sw);
        function cw(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var Bt;
        typeof self < "u"
            ? (Bt = self)
            : typeof window < "u"
            ? (Bt = window)
            : typeof global < "u"
            ? (Bt = global)
            : typeof No < "u"
            ? (Bt = No)
            : (Bt = Function("return this")());
        var lw = (0, uw.default)(Bt);
        Po.default = lw;
    });
    var qo = c((xr) => {
        "use strict";
        xr.__esModule = !0;
        xr.ActionTypes = void 0;
        xr.default = gf;
        var fw = Ro(),
            dw = pf(fw),
            pw = lf(),
            ff = pf(pw);
        function pf(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var df = (xr.ActionTypes = { INIT: "@@redux/INIT" });
        function gf(e, t, r) {
            var n;
            if (
                (typeof t == "function" &&
                    typeof r > "u" &&
                    ((r = t), (t = void 0)),
                typeof r < "u")
            ) {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(gf)(e, t);
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e,
                i = t,
                s = [],
                a = s,
                u = !1;
            function f() {
                a === s && (a = s.slice());
            }
            function d() {
                return i;
            }
            function p(_) {
                if (typeof _ != "function")
                    throw new Error("Expected listener to be a function.");
                var L = !0;
                return (
                    f(),
                    a.push(_),
                    function () {
                        if (L) {
                            (L = !1), f();
                            var A = a.indexOf(_);
                            a.splice(A, 1);
                        }
                    }
                );
            }
            function v(_) {
                if (!(0, dw.default)(_))
                    throw new Error(
                        "Actions must be plain objects. Use custom middleware for async actions."
                    );
                if (typeof _.type > "u")
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    (u = !0), (i = o(i, _));
                } finally {
                    u = !1;
                }
                for (var L = (s = a), S = 0; S < L.length; S++) L[S]();
                return _;
            }
            function h(_) {
                if (typeof _ != "function")
                    throw new Error(
                        "Expected the nextReducer to be a function."
                    );
                (o = _), v({ type: df.INIT });
            }
            function E() {
                var _,
                    L = p;
                return (
                    (_ = {
                        subscribe: function (A) {
                            if (typeof A != "object")
                                throw new TypeError(
                                    "Expected the observer to be an object."
                                );
                            function O() {
                                A.next && A.next(d());
                            }
                            O();
                            var C = L(O);
                            return { unsubscribe: C };
                        },
                    }),
                    (_[ff.default] = function () {
                        return this;
                    }),
                    _
                );
            }
            return (
                v({ type: df.INIT }),
                (n = {
                    dispatch: v,
                    subscribe: p,
                    getState: d,
                    replaceReducer: h,
                }),
                (n[ff.default] = E),
                n
            );
        }
    });
    var Do = c((Mo) => {
        "use strict";
        Mo.__esModule = !0;
        Mo.default = gw;
        function gw(e) {
            typeof console < "u" &&
                typeof console.error == "function" &&
                console.error(e);
            try {
                throw new Error(e);
            } catch {}
        }
    });
    var yf = c((Fo) => {
        "use strict";
        Fo.__esModule = !0;
        Fo.default = mw;
        var vf = qo(),
            vw = Ro(),
            TX = hf(vw),
            hw = Do(),
            IX = hf(hw);
        function hf(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function yw(e, t) {
            var r = t && t.type,
                n = (r && '"' + r.toString() + '"') || "an action";
            return (
                "Given action " +
                n +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state.'
            );
        }
        function Ew(e) {
            Object.keys(e).forEach(function (t) {
                var r = e[t],
                    n = r(void 0, { type: vf.ActionTypes.INIT });
                if (typeof n > "u")
                    throw new Error(
                        'Reducer "' +
                            t +
                            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                    );
                var o =
                    "@@redux/PROBE_UNKNOWN_ACTION_" +
                    Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, { type: o }) > "u")
                    throw new Error(
                        'Reducer "' +
                            t +
                            '" returned undefined when probed with a random type. ' +
                            ("Don't try to handle " +
                                vf.ActionTypes.INIT +
                                ' or other actions in "redux/*" ') +
                            "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
                    );
            });
        }
        function mw(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o]);
            }
            var i = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                Ew(r);
            } catch (u) {
                a = u;
            }
            return function () {
                var f =
                        arguments.length <= 0 || arguments[0] === void 0
                            ? {}
                            : arguments[0],
                    d = arguments[1];
                if (a) throw a;
                if (!1) var p;
                for (var v = !1, h = {}, E = 0; E < i.length; E++) {
                    var _ = i[E],
                        L = r[_],
                        S = f[_],
                        A = L(S, d);
                    if (typeof A > "u") {
                        var O = yw(_, d);
                        throw new Error(O);
                    }
                    (h[_] = A), (v = v || A !== S);
                }
                return v ? h : f;
            };
        }
    });
    var mf = c((Go) => {
        "use strict";
        Go.__esModule = !0;
        Go.default = _w;
        function Ef(e, t) {
            return function () {
                return t(e.apply(void 0, arguments));
            };
        }
        function _w(e, t) {
            if (typeof e == "function") return Ef(e, t);
            if (typeof e != "object" || e === null)
                throw new Error(
                    "bindActionCreators expected an object or a function, instead received " +
                        (e === null ? "null" : typeof e) +
                        '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o],
                    s = e[i];
                typeof s == "function" && (n[i] = Ef(s, t));
            }
            return n;
        }
    });
    var Uo = c((Vo) => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = bw;
        function bw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function (i) {
                    return i;
                };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                o = t.slice(0, -1);
            return function () {
                return o.reduceRight(function (i, s) {
                    return s(i);
                }, n.apply(void 0, arguments));
            };
        }
    });
    var _f = c((Ho) => {
        "use strict";
        Ho.__esModule = !0;
        var Tw =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n]);
                }
                return e;
            };
        Ho.default = Sw;
        var Iw = Uo(),
            Ow = ww(Iw);
        function ww(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function Sw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function (n) {
                return function (o, i, s) {
                    var a = n(o, i, s),
                        u = a.dispatch,
                        f = [],
                        d = {
                            getState: a.getState,
                            dispatch: function (v) {
                                return u(v);
                            },
                        };
                    return (
                        (f = t.map(function (p) {
                            return p(d);
                        })),
                        (u = Ow.default.apply(void 0, f)(a.dispatch)),
                        Tw({}, a, { dispatch: u })
                    );
                };
            };
        }
    });
    var Wo = c((He) => {
        "use strict";
        He.__esModule = !0;
        He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
        var Aw = qo(),
            xw = jt(Aw),
            Cw = yf(),
            Rw = jt(Cw),
            Lw = mf(),
            Nw = jt(Lw),
            Pw = _f(),
            qw = jt(Pw),
            Mw = Uo(),
            Dw = jt(Mw),
            Fw = Do(),
            xX = jt(Fw);
        function jt(e) {
            return e && e.__esModule ? e : { default: e };
        }
        He.createStore = xw.default;
        He.combineReducers = Rw.default;
        He.bindActionCreators = Nw.default;
        He.applyMiddleware = qw.default;
        He.compose = Dw.default;
    });
    var $e,
        Xo,
        it,
        Gw,
        Vw,
        Tn,
        Uw,
        ko = ye(() => {
            "use strict";
            ($e = {
                NAVBAR_OPEN: "NAVBAR_OPEN",
                NAVBAR_CLOSE: "NAVBAR_CLOSE",
                TAB_ACTIVE: "TAB_ACTIVE",
                TAB_INACTIVE: "TAB_INACTIVE",
                SLIDER_ACTIVE: "SLIDER_ACTIVE",
                SLIDER_INACTIVE: "SLIDER_INACTIVE",
                DROPDOWN_OPEN: "DROPDOWN_OPEN",
                DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                MOUSE_CLICK: "MOUSE_CLICK",
                MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                MOUSE_DOWN: "MOUSE_DOWN",
                MOUSE_UP: "MOUSE_UP",
                MOUSE_OVER: "MOUSE_OVER",
                MOUSE_OUT: "MOUSE_OUT",
                MOUSE_MOVE: "MOUSE_MOVE",
                MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                PAGE_START: "PAGE_START",
                PAGE_FINISH: "PAGE_FINISH",
                PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                PAGE_SCROLL: "PAGE_SCROLL",
            }),
                (Xo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
                (it = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
                (Gw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
                (Vw = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
                }),
                (Tn = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
                }),
                (Uw = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
                });
        });
    var Fe,
        Hw,
        In = ye(() => {
            "use strict";
            (Fe = {
                TRANSFORM_MOVE: "TRANSFORM_MOVE",
                TRANSFORM_SCALE: "TRANSFORM_SCALE",
                TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                TRANSFORM_SKEW: "TRANSFORM_SKEW",
                STYLE_OPACITY: "STYLE_OPACITY",
                STYLE_SIZE: "STYLE_SIZE",
                STYLE_FILTER: "STYLE_FILTER",
                STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                STYLE_BORDER: "STYLE_BORDER",
                STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                OBJECT_VALUE: "OBJECT_VALUE",
                PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                PLUGIN_SPLINE: "PLUGIN_SPLINE",
                PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                GENERAL_DISPLAY: "GENERAL_DISPLAY",
                GENERAL_START_ACTION: "GENERAL_START_ACTION",
                GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                GENERAL_LOOP: "GENERAL_LOOP",
                STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
            }),
                (Hw = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
                });
        });
    var Ww,
        bf = ye(() => {
            "use strict";
            Ww = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
                    "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION",
            };
        });
    var Xw,
        kw,
        Bw,
        jw,
        zw,
        Kw,
        Yw,
        Bo,
        Tf = ye(() => {
            "use strict";
            In();
            ({
                TRANSFORM_MOVE: Xw,
                TRANSFORM_SCALE: kw,
                TRANSFORM_ROTATE: Bw,
                TRANSFORM_SKEW: jw,
                STYLE_SIZE: zw,
                STYLE_FILTER: Kw,
                STYLE_FONT_VARIATION: Yw,
            } = Fe),
                (Bo = {
                    [Xw]: !0,
                    [kw]: !0,
                    [Bw]: !0,
                    [jw]: !0,
                    [zw]: !0,
                    [Kw]: !0,
                    [Yw]: !0,
                });
        });
    var Ie = {};
    De(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => dS,
        IX2_ANIMATION_FRAME_CHANGED: () => aS,
        IX2_CLEAR_REQUESTED: () => nS,
        IX2_ELEMENT_STATE_CHANGED: () => fS,
        IX2_EVENT_LISTENER_ADDED: () => iS,
        IX2_EVENT_STATE_CHANGED: () => oS,
        IX2_INSTANCE_ADDED: () => uS,
        IX2_INSTANCE_REMOVED: () => lS,
        IX2_INSTANCE_STARTED: () => cS,
        IX2_MEDIA_QUERIES_DEFINED: () => gS,
        IX2_PARAMETER_CHANGED: () => sS,
        IX2_PLAYBACK_REQUESTED: () => tS,
        IX2_PREVIEW_REQUESTED: () => eS,
        IX2_RAW_DATA_IMPORTED: () => $w,
        IX2_SESSION_INITIALIZED: () => Qw,
        IX2_SESSION_STARTED: () => Zw,
        IX2_SESSION_STOPPED: () => Jw,
        IX2_STOP_REQUESTED: () => rS,
        IX2_TEST_FRAME_RENDERED: () => vS,
        IX2_VIEWPORT_WIDTH_CHANGED: () => pS,
    });
    var $w,
        Qw,
        Zw,
        Jw,
        eS,
        tS,
        rS,
        nS,
        iS,
        oS,
        aS,
        sS,
        uS,
        cS,
        lS,
        fS,
        dS,
        pS,
        gS,
        vS,
        If = ye(() => {
            "use strict";
            ($w = "IX2_RAW_DATA_IMPORTED"),
                (Qw = "IX2_SESSION_INITIALIZED"),
                (Zw = "IX2_SESSION_STARTED"),
                (Jw = "IX2_SESSION_STOPPED"),
                (eS = "IX2_PREVIEW_REQUESTED"),
                (tS = "IX2_PLAYBACK_REQUESTED"),
                (rS = "IX2_STOP_REQUESTED"),
                (nS = "IX2_CLEAR_REQUESTED"),
                (iS = "IX2_EVENT_LISTENER_ADDED"),
                (oS = "IX2_EVENT_STATE_CHANGED"),
                (aS = "IX2_ANIMATION_FRAME_CHANGED"),
                (sS = "IX2_PARAMETER_CHANGED"),
                (uS = "IX2_INSTANCE_ADDED"),
                (cS = "IX2_INSTANCE_STARTED"),
                (lS = "IX2_INSTANCE_REMOVED"),
                (fS = "IX2_ELEMENT_STATE_CHANGED"),
                (dS = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
                (pS = "IX2_VIEWPORT_WIDTH_CHANGED"),
                (gS = "IX2_MEDIA_QUERIES_DEFINED"),
                (vS = "IX2_TEST_FRAME_RENDERED");
        });
    var Ce = {};
    De(Ce, {
        ABSTRACT_NODE: () => pA,
        AUTO: () => rA,
        BACKGROUND: () => $S,
        BACKGROUND_COLOR: () => YS,
        BAR_DELIMITER: () => oA,
        BORDER_COLOR: () => QS,
        BOUNDARY_SELECTOR: () => _S,
        CHILDREN: () => aA,
        COLON_DELIMITER: () => iA,
        COLOR: () => ZS,
        COMMA_DELIMITER: () => nA,
        CONFIG_UNIT: () => xS,
        CONFIG_VALUE: () => OS,
        CONFIG_X_UNIT: () => wS,
        CONFIG_X_VALUE: () => bS,
        CONFIG_Y_UNIT: () => SS,
        CONFIG_Y_VALUE: () => TS,
        CONFIG_Z_UNIT: () => AS,
        CONFIG_Z_VALUE: () => IS,
        DISPLAY: () => JS,
        FILTER: () => BS,
        FLEX: () => eA,
        FONT_VARIATION_SETTINGS: () => jS,
        HEIGHT: () => KS,
        HTML_ELEMENT: () => fA,
        IMMEDIATE_CHILDREN: () => sA,
        IX2_ID_DELIMITER: () => hS,
        OPACITY: () => kS,
        PARENT: () => cA,
        PLAIN_OBJECT: () => dA,
        PRESERVE_3D: () => lA,
        RENDER_GENERAL: () => vA,
        RENDER_PLUGIN: () => yA,
        RENDER_STYLE: () => hA,
        RENDER_TRANSFORM: () => gA,
        ROTATE_X: () => GS,
        ROTATE_Y: () => VS,
        ROTATE_Z: () => US,
        SCALE_3D: () => FS,
        SCALE_X: () => qS,
        SCALE_Y: () => MS,
        SCALE_Z: () => DS,
        SIBLINGS: () => uA,
        SKEW: () => HS,
        SKEW_X: () => WS,
        SKEW_Y: () => XS,
        TRANSFORM: () => CS,
        TRANSLATE_3D: () => PS,
        TRANSLATE_X: () => RS,
        TRANSLATE_Y: () => LS,
        TRANSLATE_Z: () => NS,
        WF_PAGE: () => yS,
        WIDTH: () => zS,
        WILL_CHANGE: () => tA,
        W_MOD_IX: () => mS,
        W_MOD_JS: () => ES,
    });
    var hS,
        yS,
        ES,
        mS,
        _S,
        bS,
        TS,
        IS,
        OS,
        wS,
        SS,
        AS,
        xS,
        CS,
        RS,
        LS,
        NS,
        PS,
        qS,
        MS,
        DS,
        FS,
        GS,
        VS,
        US,
        HS,
        WS,
        XS,
        kS,
        BS,
        jS,
        zS,
        KS,
        YS,
        $S,
        QS,
        ZS,
        JS,
        eA,
        tA,
        rA,
        nA,
        iA,
        oA,
        aA,
        sA,
        uA,
        cA,
        lA,
        fA,
        dA,
        pA,
        gA,
        vA,
        hA,
        yA,
        Of = ye(() => {
            "use strict";
            (hS = "|"),
                (yS = "data-wf-page"),
                (ES = "w-mod-js"),
                (mS = "w-mod-ix"),
                (_S = ".w-dyn-item"),
                (bS = "xValue"),
                (TS = "yValue"),
                (IS = "zValue"),
                (OS = "value"),
                (wS = "xUnit"),
                (SS = "yUnit"),
                (AS = "zUnit"),
                (xS = "unit"),
                (CS = "transform"),
                (RS = "translateX"),
                (LS = "translateY"),
                (NS = "translateZ"),
                (PS = "translate3d"),
                (qS = "scaleX"),
                (MS = "scaleY"),
                (DS = "scaleZ"),
                (FS = "scale3d"),
                (GS = "rotateX"),
                (VS = "rotateY"),
                (US = "rotateZ"),
                (HS = "skew"),
                (WS = "skewX"),
                (XS = "skewY"),
                (kS = "opacity"),
                (BS = "filter"),
                (jS = "font-variation-settings"),
                (zS = "width"),
                (KS = "height"),
                (YS = "backgroundColor"),
                ($S = "background"),
                (QS = "borderColor"),
                (ZS = "color"),
                (JS = "display"),
                (eA = "flex"),
                (tA = "willChange"),
                (rA = "AUTO"),
                (nA = ","),
                (iA = ":"),
                (oA = "|"),
                (aA = "CHILDREN"),
                (sA = "IMMEDIATE_CHILDREN"),
                (uA = "SIBLINGS"),
                (cA = "PARENT"),
                (lA = "preserve-3d"),
                (fA = "HTML_ELEMENT"),
                (dA = "PLAIN_OBJECT"),
                (pA = "ABSTRACT_NODE"),
                (gA = "RENDER_TRANSFORM"),
                (vA = "RENDER_GENERAL"),
                (hA = "RENDER_STYLE"),
                (yA = "RENDER_PLUGIN");
        });
    var wf = {};
    De(wf, {
        ActionAppliesTo: () => Hw,
        ActionTypeConsts: () => Fe,
        EventAppliesTo: () => Xo,
        EventBasedOn: () => it,
        EventContinuousMouseAxes: () => Gw,
        EventLimitAffectedElements: () => Vw,
        EventTypeConsts: () => $e,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => Ww,
        QuickEffectDirectionConsts: () => Uw,
        QuickEffectIds: () => Tn,
        ReducedMotionTypes: () => Bo,
    });
    var Ge = ye(() => {
        "use strict";
        ko();
        In();
        bf();
        Tf();
        If();
        Of();
        In();
        ko();
    });
    var EA,
        Sf,
        Af = ye(() => {
            "use strict";
            Ge();
            ({ IX2_RAW_DATA_IMPORTED: EA } = Ie),
                (Sf = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case EA:
                            return t.payload.ixData || Object.freeze({});
                        default:
                            return e;
                    }
                });
        });
    var zt = c((_e) => {
        "use strict";
        Object.defineProperty(_e, "__esModule", { value: !0 });
        var mA =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e &&
                          typeof Symbol == "function" &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                  };
        _e.clone = wn;
        _e.addLast = Rf;
        _e.addFirst = Lf;
        _e.removeLast = Nf;
        _e.removeFirst = Pf;
        _e.insert = qf;
        _e.removeAt = Mf;
        _e.replaceAt = Df;
        _e.getIn = Sn;
        _e.set = An;
        _e.setIn = xn;
        _e.update = Gf;
        _e.updateIn = Vf;
        _e.merge = Uf;
        _e.mergeDeep = Hf;
        _e.mergeIn = Wf;
        _e.omit = Xf;
        _e.addDefaults = kf;
        var xf = "INVALID_ARGS";
        function Cf(e) {
            throw new Error(e);
        }
        function jo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols
                ? t.concat(Object.getOwnPropertySymbols(e))
                : t;
        }
        var _A = {}.hasOwnProperty;
        function wn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o];
            }
            return r;
        }
        function Ve(e, t, r) {
            var n = r;
            n == null && Cf(xf);
            for (
                var o = !1,
                    i = arguments.length,
                    s = Array(i > 3 ? i - 3 : 0),
                    a = 3;
                a < i;
                a++
            )
                s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var f = s[u];
                if (f != null) {
                    var d = jo(f);
                    if (d.length)
                        for (var p = 0; p <= d.length; p++) {
                            var v = d[p];
                            if (!(e && n[v] !== void 0)) {
                                var h = f[v];
                                t &&
                                    On(n[v]) &&
                                    On(h) &&
                                    (h = Ve(e, t, n[v], h)),
                                    !(h === void 0 || h === n[v]) &&
                                        (o || ((o = !0), (n = wn(n))),
                                        (n[v] = h));
                            }
                        }
                }
            }
            return n;
        }
        function On(e) {
            var t = typeof e > "u" ? "undefined" : mA(e);
            return e != null && (t === "object" || t === "function");
        }
        function Rf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t]);
        }
        function Lf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e);
        }
        function Nf(e) {
            return e.length ? e.slice(0, e.length - 1) : e;
        }
        function Pf(e) {
            return e.length ? e.slice(1) : e;
        }
        function qf(e, t, r) {
            return e
                .slice(0, t)
                .concat(Array.isArray(r) ? r : [r])
                .concat(e.slice(t));
        }
        function Mf(e, t) {
            return t >= e.length || t < 0
                ? e
                : e.slice(0, t).concat(e.slice(t + 1));
        }
        function Df(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
            return (o[t] = r), o;
        }
        function Sn(e, t) {
            if ((!Array.isArray(t) && Cf(xf), e != null)) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (((r = r?.[o]), r === void 0)) return r;
                }
                return r;
            }
        }
        function An(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                o = e ?? n;
            if (o[t] === r) return o;
            var i = wn(o);
            return (i[t] = r), i;
        }
        function Ff(e, t, r, n) {
            var o = void 0,
                i = t[n];
            if (n === t.length - 1) o = r;
            else {
                var s =
                    On(e) && On(e[i])
                        ? e[i]
                        : typeof t[n + 1] == "number"
                        ? []
                        : {};
                o = Ff(s, t, r, n + 1);
            }
            return An(e, i, o);
        }
        function xn(e, t, r) {
            return t.length ? Ff(e, t, r, 0) : r;
        }
        function Gf(e, t, r) {
            var n = e?.[t],
                o = r(n);
            return An(e, t, o);
        }
        function Vf(e, t, r) {
            var n = Sn(e, t),
                o = r(n);
            return xn(e, t, o);
        }
        function Uf(e, t, r, n, o, i) {
            for (
                var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
                u < s;
                u++
            )
                a[u - 6] = arguments[u];
            return a.length
                ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, o, i].concat(a))
                : Ve(!1, !1, e, t, r, n, o, i);
        }
        function Hf(e, t, r, n, o, i) {
            for (
                var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
                u < s;
                u++
            )
                a[u - 6] = arguments[u];
            return a.length
                ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, o, i].concat(a))
                : Ve(!1, !0, e, t, r, n, o, i);
        }
        function Wf(e, t, r, n, o, i, s) {
            var a = Sn(e, t);
            a == null && (a = {});
            for (
                var u = void 0,
                    f = arguments.length,
                    d = Array(f > 7 ? f - 7 : 0),
                    p = 7;
                p < f;
                p++
            )
                d[p - 7] = arguments[p];
            return (
                d.length
                    ? (u = Ve.call.apply(
                          Ve,
                          [null, !1, !1, a, r, n, o, i, s].concat(d)
                      ))
                    : (u = Ve(!1, !1, a, r, n, o, i, s)),
                xn(e, t, u)
            );
        }
        function Xf(e, t) {
            for (
                var r = Array.isArray(t) ? t : [t], n = !1, o = 0;
                o < r.length;
                o++
            )
                if (_A.call(e, r[o])) {
                    n = !0;
                    break;
                }
            if (!n) return e;
            for (var i = {}, s = jo(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (i[u] = e[u]);
            }
            return i;
        }
        function kf(e, t, r, n, o, i) {
            for (
                var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
                u < s;
                u++
            )
                a[u - 6] = arguments[u];
            return a.length
                ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, o, i].concat(a))
                : Ve(!0, !1, e, t, r, n, o, i);
        }
        var bA = {
            clone: wn,
            addLast: Rf,
            addFirst: Lf,
            removeLast: Nf,
            removeFirst: Pf,
            insert: qf,
            removeAt: Mf,
            replaceAt: Df,
            getIn: Sn,
            set: An,
            setIn: xn,
            update: Gf,
            updateIn: Vf,
            merge: Uf,
            mergeDeep: Hf,
            mergeIn: Wf,
            omit: Xf,
            addDefaults: kf,
        };
        _e.default = bA;
    });
    var jf,
        TA,
        IA,
        OA,
        wA,
        SA,
        Bf,
        zf,
        Kf = ye(() => {
            "use strict";
            Ge();
            (jf = ce(zt())),
                ({
                    IX2_PREVIEW_REQUESTED: TA,
                    IX2_PLAYBACK_REQUESTED: IA,
                    IX2_STOP_REQUESTED: OA,
                    IX2_CLEAR_REQUESTED: wA,
                } = Ie),
                (SA = { preview: {}, playback: {}, stop: {}, clear: {} }),
                (Bf = Object.create(null, {
                    [TA]: { value: "preview" },
                    [IA]: { value: "playback" },
                    [OA]: { value: "stop" },
                    [wA]: { value: "clear" },
                })),
                (zf = (e = SA, t) => {
                    if (t.type in Bf) {
                        let r = [Bf[t.type]];
                        return (0, jf.setIn)(e, [r], { ...t.payload });
                    }
                    return e;
                });
        });
    var Ne,
        AA,
        xA,
        CA,
        RA,
        LA,
        NA,
        PA,
        qA,
        MA,
        DA,
        Yf,
        FA,
        $f,
        Qf = ye(() => {
            "use strict";
            Ge();
            (Ne = ce(zt())),
                ({
                    IX2_SESSION_INITIALIZED: AA,
                    IX2_SESSION_STARTED: xA,
                    IX2_TEST_FRAME_RENDERED: CA,
                    IX2_SESSION_STOPPED: RA,
                    IX2_EVENT_LISTENER_ADDED: LA,
                    IX2_EVENT_STATE_CHANGED: NA,
                    IX2_ANIMATION_FRAME_CHANGED: PA,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: qA,
                    IX2_VIEWPORT_WIDTH_CHANGED: MA,
                    IX2_MEDIA_QUERIES_DEFINED: DA,
                } = Ie),
                (Yf = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1,
                }),
                (FA = 20),
                ($f = (e = Yf, t) => {
                    switch (t.type) {
                        case AA: {
                            let {
                                hasBoundaryNodes: r,
                                reducedMotion: n,
                            } = t.payload;
                            return (0, Ne.merge)(e, {
                                hasBoundaryNodes: r,
                                reducedMotion: n,
                            });
                        }
                        case xA:
                            return (0, Ne.set)(e, "active", !0);
                        case CA: {
                            let {
                                payload: { step: r = FA },
                            } = t;
                            return (0, Ne.set)(e, "tick", e.tick + r);
                        }
                        case RA:
                            return Yf;
                        case PA: {
                            let {
                                payload: { now: r },
                            } = t;
                            return (0, Ne.set)(e, "tick", r);
                        }
                        case LA: {
                            let r = (0, Ne.addLast)(
                                e.eventListeners,
                                t.payload
                            );
                            return (0, Ne.set)(e, "eventListeners", r);
                        }
                        case NA: {
                            let { stateKey: r, newState: n } = t.payload;
                            return (0, Ne.setIn)(e, ["eventState", r], n);
                        }
                        case qA: {
                            let { actionListId: r, isPlaying: n } = t.payload;
                            return (0, Ne.setIn)(e, ["playbackState", r], n);
                        }
                        case MA: {
                            let { width: r, mediaQueries: n } = t.payload,
                                o = n.length,
                                i = null;
                            for (let s = 0; s < o; s++) {
                                let { key: a, min: u, max: f } = n[s];
                                if (r >= u && r <= f) {
                                    i = a;
                                    break;
                                }
                            }
                            return (0, Ne.merge)(e, {
                                viewportWidth: r,
                                mediaQueryKey: i,
                            });
                        }
                        case DA:
                            return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e;
                    }
                });
        });
    var Jf = c((KX, Zf) => {
        function GA() {
            (this.__data__ = []), (this.size = 0);
        }
        Zf.exports = GA;
    });
    var Cn = c((YX, ed) => {
        function VA(e, t) {
            return e === t || (e !== e && t !== t);
        }
        ed.exports = VA;
    });
    var Cr = c(($X, td) => {
        var UA = Cn();
        function HA(e, t) {
            for (var r = e.length; r--; ) if (UA(e[r][0], t)) return r;
            return -1;
        }
        td.exports = HA;
    });
    var nd = c((QX, rd) => {
        var WA = Cr(),
            XA = Array.prototype,
            kA = XA.splice;
        function BA(e) {
            var t = this.__data__,
                r = WA(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : kA.call(t, r, 1), --this.size, !0;
        }
        rd.exports = BA;
    });
    var od = c((ZX, id) => {
        var jA = Cr();
        function zA(e) {
            var t = this.__data__,
                r = jA(t, e);
            return r < 0 ? void 0 : t[r][1];
        }
        id.exports = zA;
    });
    var sd = c((JX, ad) => {
        var KA = Cr();
        function YA(e) {
            return KA(this.__data__, e) > -1;
        }
        ad.exports = YA;
    });
    var cd = c((ek, ud) => {
        var $A = Cr();
        function QA(e, t) {
            var r = this.__data__,
                n = $A(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        }
        ud.exports = QA;
    });
    var Rr = c((tk, ld) => {
        var ZA = Jf(),
            JA = nd(),
            ex = od(),
            tx = sd(),
            rx = cd();
        function Kt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        Kt.prototype.clear = ZA;
        Kt.prototype.delete = JA;
        Kt.prototype.get = ex;
        Kt.prototype.has = tx;
        Kt.prototype.set = rx;
        ld.exports = Kt;
    });
    var dd = c((rk, fd) => {
        var nx = Rr();
        function ix() {
            (this.__data__ = new nx()), (this.size = 0);
        }
        fd.exports = ix;
    });
    var gd = c((nk, pd) => {
        function ox(e) {
            var t = this.__data__,
                r = t.delete(e);
            return (this.size = t.size), r;
        }
        pd.exports = ox;
    });
    var hd = c((ik, vd) => {
        function ax(e) {
            return this.__data__.get(e);
        }
        vd.exports = ax;
    });
    var Ed = c((ok, yd) => {
        function sx(e) {
            return this.__data__.has(e);
        }
        yd.exports = sx;
    });
    var ot = c((ak, md) => {
        function ux(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function");
        }
        md.exports = ux;
    });
    var zo = c((sk, _d) => {
        var cx = bt(),
            lx = ot(),
            fx = "[object AsyncFunction]",
            dx = "[object Function]",
            px = "[object GeneratorFunction]",
            gx = "[object Proxy]";
        function vx(e) {
            if (!lx(e)) return !1;
            var t = cx(e);
            return t == dx || t == px || t == fx || t == gx;
        }
        _d.exports = vx;
    });
    var Td = c((uk, bd) => {
        var hx = Ye(),
            yx = hx["__core-js_shared__"];
        bd.exports = yx;
    });
    var wd = c((ck, Od) => {
        var Ko = Td(),
            Id = (function () {
                var e = /[^.]+$/.exec(
                    (Ko && Ko.keys && Ko.keys.IE_PROTO) || ""
                );
                return e ? "Symbol(src)_1." + e : "";
            })();
        function Ex(e) {
            return !!Id && Id in e;
        }
        Od.exports = Ex;
    });
    var Yo = c((lk, Sd) => {
        var mx = Function.prototype,
            _x = mx.toString;
        function bx(e) {
            if (e != null) {
                try {
                    return _x.call(e);
                } catch {}
                try {
                    return e + "";
                } catch {}
            }
            return "";
        }
        Sd.exports = bx;
    });
    var xd = c((fk, Ad) => {
        var Tx = zo(),
            Ix = wd(),
            Ox = ot(),
            wx = Yo(),
            Sx = /[\\^$.*+?()[\]{}|]/g,
            Ax = /^\[object .+?Constructor\]$/,
            xx = Function.prototype,
            Cx = Object.prototype,
            Rx = xx.toString,
            Lx = Cx.hasOwnProperty,
            Nx = RegExp(
                "^" +
                    Rx.call(Lx)
                        .replace(Sx, "\\$&")
                        .replace(
                            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                            "$1.*?"
                        ) +
                    "$"
            );
        function Px(e) {
            if (!Ox(e) || Ix(e)) return !1;
            var t = Tx(e) ? Nx : Ax;
            return t.test(wx(e));
        }
        Ad.exports = Px;
    });
    var Rd = c((dk, Cd) => {
        function qx(e, t) {
            return e?.[t];
        }
        Cd.exports = qx;
    });
    var Tt = c((pk, Ld) => {
        var Mx = xd(),
            Dx = Rd();
        function Fx(e, t) {
            var r = Dx(e, t);
            return Mx(r) ? r : void 0;
        }
        Ld.exports = Fx;
    });
    var Rn = c((gk, Nd) => {
        var Gx = Tt(),
            Vx = Ye(),
            Ux = Gx(Vx, "Map");
        Nd.exports = Ux;
    });
    var Lr = c((vk, Pd) => {
        var Hx = Tt(),
            Wx = Hx(Object, "create");
        Pd.exports = Wx;
    });
    var Dd = c((hk, Md) => {
        var qd = Lr();
        function Xx() {
            (this.__data__ = qd ? qd(null) : {}), (this.size = 0);
        }
        Md.exports = Xx;
    });
    var Gd = c((yk, Fd) => {
        function kx(e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
        }
        Fd.exports = kx;
    });
    var Ud = c((Ek, Vd) => {
        var Bx = Lr(),
            jx = "__lodash_hash_undefined__",
            zx = Object.prototype,
            Kx = zx.hasOwnProperty;
        function Yx(e) {
            var t = this.__data__;
            if (Bx) {
                var r = t[e];
                return r === jx ? void 0 : r;
            }
            return Kx.call(t, e) ? t[e] : void 0;
        }
        Vd.exports = Yx;
    });
    var Wd = c((mk, Hd) => {
        var $x = Lr(),
            Qx = Object.prototype,
            Zx = Qx.hasOwnProperty;
        function Jx(e) {
            var t = this.__data__;
            return $x ? t[e] !== void 0 : Zx.call(t, e);
        }
        Hd.exports = Jx;
    });
    var kd = c((_k, Xd) => {
        var e0 = Lr(),
            t0 = "__lodash_hash_undefined__";
        function r0(e, t) {
            var r = this.__data__;
            return (
                (this.size += this.has(e) ? 0 : 1),
                (r[e] = e0 && t === void 0 ? t0 : t),
                this
            );
        }
        Xd.exports = r0;
    });
    var jd = c((bk, Bd) => {
        var n0 = Dd(),
            i0 = Gd(),
            o0 = Ud(),
            a0 = Wd(),
            s0 = kd();
        function Yt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        Yt.prototype.clear = n0;
        Yt.prototype.delete = i0;
        Yt.prototype.get = o0;
        Yt.prototype.has = a0;
        Yt.prototype.set = s0;
        Bd.exports = Yt;
    });
    var Yd = c((Tk, Kd) => {
        var zd = jd(),
            u0 = Rr(),
            c0 = Rn();
        function l0() {
            (this.size = 0),
                (this.__data__ = {
                    hash: new zd(),
                    map: new (c0 || u0)(),
                    string: new zd(),
                });
        }
        Kd.exports = l0;
    });
    var Qd = c((Ik, $d) => {
        function f0(e) {
            var t = typeof e;
            return t == "string" ||
                t == "number" ||
                t == "symbol" ||
                t == "boolean"
                ? e !== "__proto__"
                : e === null;
        }
        $d.exports = f0;
    });
    var Nr = c((Ok, Zd) => {
        var d0 = Qd();
        function p0(e, t) {
            var r = e.__data__;
            return d0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
        }
        Zd.exports = p0;
    });
    var ep = c((wk, Jd) => {
        var g0 = Nr();
        function v0(e) {
            var t = g0(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
        }
        Jd.exports = v0;
    });
    var rp = c((Sk, tp) => {
        var h0 = Nr();
        function y0(e) {
            return h0(this, e).get(e);
        }
        tp.exports = y0;
    });
    var ip = c((Ak, np) => {
        var E0 = Nr();
        function m0(e) {
            return E0(this, e).has(e);
        }
        np.exports = m0;
    });
    var ap = c((xk, op) => {
        var _0 = Nr();
        function b0(e, t) {
            var r = _0(this, e),
                n = r.size;
            return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        }
        op.exports = b0;
    });
    var Ln = c((Ck, sp) => {
        var T0 = Yd(),
            I0 = ep(),
            O0 = rp(),
            w0 = ip(),
            S0 = ap();
        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        $t.prototype.clear = T0;
        $t.prototype.delete = I0;
        $t.prototype.get = O0;
        $t.prototype.has = w0;
        $t.prototype.set = S0;
        sp.exports = $t;
    });
    var cp = c((Rk, up) => {
        var A0 = Rr(),
            x0 = Rn(),
            C0 = Ln(),
            R0 = 200;
        function L0(e, t) {
            var r = this.__data__;
            if (r instanceof A0) {
                var n = r.__data__;
                if (!x0 || n.length < R0 - 1)
                    return n.push([e, t]), (this.size = ++r.size), this;
                r = this.__data__ = new C0(n);
            }
            return r.set(e, t), (this.size = r.size), this;
        }
        up.exports = L0;
    });
    var $o = c((Lk, lp) => {
        var N0 = Rr(),
            P0 = dd(),
            q0 = gd(),
            M0 = hd(),
            D0 = Ed(),
            F0 = cp();
        function Qt(e) {
            var t = (this.__data__ = new N0(e));
            this.size = t.size;
        }
        Qt.prototype.clear = P0;
        Qt.prototype.delete = q0;
        Qt.prototype.get = M0;
        Qt.prototype.has = D0;
        Qt.prototype.set = F0;
        lp.exports = Qt;
    });
    var dp = c((Nk, fp) => {
        var G0 = "__lodash_hash_undefined__";
        function V0(e) {
            return this.__data__.set(e, G0), this;
        }
        fp.exports = V0;
    });
    var gp = c((Pk, pp) => {
        function U0(e) {
            return this.__data__.has(e);
        }
        pp.exports = U0;
    });
    var hp = c((qk, vp) => {
        var H0 = Ln(),
            W0 = dp(),
            X0 = gp();
        function Nn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new H0(); ++t < r; ) this.add(e[t]);
        }
        Nn.prototype.add = Nn.prototype.push = W0;
        Nn.prototype.has = X0;
        vp.exports = Nn;
    });
    var Ep = c((Mk, yp) => {
        function k0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e)) return !0;
            return !1;
        }
        yp.exports = k0;
    });
    var _p = c((Dk, mp) => {
        function B0(e, t) {
            return e.has(t);
        }
        mp.exports = B0;
    });
    var Qo = c((Fk, bp) => {
        var j0 = hp(),
            z0 = Ep(),
            K0 = _p(),
            Y0 = 1,
            $0 = 2;
        function Q0(e, t, r, n, o, i) {
            var s = r & Y0,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var f = i.get(e),
                d = i.get(t);
            if (f && d) return f == t && d == e;
            var p = -1,
                v = !0,
                h = r & $0 ? new j0() : void 0;
            for (i.set(e, t), i.set(t, e); ++p < a; ) {
                var E = e[p],
                    _ = t[p];
                if (n) var L = s ? n(_, E, p, t, e, i) : n(E, _, p, e, t, i);
                if (L !== void 0) {
                    if (L) continue;
                    v = !1;
                    break;
                }
                if (h) {
                    if (
                        !z0(t, function (S, A) {
                            if (!K0(h, A) && (E === S || o(E, S, r, n, i)))
                                return h.push(A);
                        })
                    ) {
                        v = !1;
                        break;
                    }
                } else if (!(E === _ || o(E, _, r, n, i))) {
                    v = !1;
                    break;
                }
            }
            return i.delete(e), i.delete(t), v;
        }
        bp.exports = Q0;
    });
    var Ip = c((Gk, Tp) => {
        var Z0 = Ye(),
            J0 = Z0.Uint8Array;
        Tp.exports = J0;
    });
    var wp = c((Vk, Op) => {
        function eC(e) {
            var t = -1,
                r = Array(e.size);
            return (
                e.forEach(function (n, o) {
                    r[++t] = [o, n];
                }),
                r
            );
        }
        Op.exports = eC;
    });
    var Ap = c((Uk, Sp) => {
        function tC(e) {
            var t = -1,
                r = Array(e.size);
            return (
                e.forEach(function (n) {
                    r[++t] = n;
                }),
                r
            );
        }
        Sp.exports = tC;
    });
    var Np = c((Hk, Lp) => {
        var xp = kt(),
            Cp = Ip(),
            rC = Cn(),
            nC = Qo(),
            iC = wp(),
            oC = Ap(),
            aC = 1,
            sC = 2,
            uC = "[object Boolean]",
            cC = "[object Date]",
            lC = "[object Error]",
            fC = "[object Map]",
            dC = "[object Number]",
            pC = "[object RegExp]",
            gC = "[object Set]",
            vC = "[object String]",
            hC = "[object Symbol]",
            yC = "[object ArrayBuffer]",
            EC = "[object DataView]",
            Rp = xp ? xp.prototype : void 0,
            Zo = Rp ? Rp.valueOf : void 0;
        function mC(e, t, r, n, o, i, s) {
            switch (r) {
                case EC:
                    if (
                        e.byteLength != t.byteLength ||
                        e.byteOffset != t.byteOffset
                    )
                        return !1;
                    (e = e.buffer), (t = t.buffer);
                case yC:
                    return !(
                        e.byteLength != t.byteLength || !i(new Cp(e), new Cp(t))
                    );
                case uC:
                case cC:
                case dC:
                    return rC(+e, +t);
                case lC:
                    return e.name == t.name && e.message == t.message;
                case pC:
                case vC:
                    return e == t + "";
                case fC:
                    var a = iC;
                case gC:
                    var u = n & aC;
                    if ((a || (a = oC), e.size != t.size && !u)) return !1;
                    var f = s.get(e);
                    if (f) return f == t;
                    (n |= sC), s.set(e, t);
                    var d = nC(a(e), a(t), n, o, i, s);
                    return s.delete(e), d;
                case hC:
                    if (Zo) return Zo.call(e) == Zo.call(t);
            }
            return !1;
        }
        Lp.exports = mC;
    });
    var Pn = c((Wk, Pp) => {
        function _C(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; )
                e[o + r] = t[r];
            return e;
        }
        Pp.exports = _C;
    });
    var we = c((Xk, qp) => {
        var bC = Array.isArray;
        qp.exports = bC;
    });
    var Jo = c((kk, Mp) => {
        var TC = Pn(),
            IC = we();
        function OC(e, t, r) {
            var n = t(e);
            return IC(e) ? n : TC(n, r(e));
        }
        Mp.exports = OC;
    });
    var Fp = c((Bk, Dp) => {
        function wC(e, t) {
            for (
                var r = -1, n = e == null ? 0 : e.length, o = 0, i = [];
                ++r < n;

            ) {
                var s = e[r];
                t(s, r, e) && (i[o++] = s);
            }
            return i;
        }
        Dp.exports = wC;
    });
    var ea = c((jk, Gp) => {
        function SC() {
            return [];
        }
        Gp.exports = SC;
    });
    var ta = c((zk, Up) => {
        var AC = Fp(),
            xC = ea(),
            CC = Object.prototype,
            RC = CC.propertyIsEnumerable,
            Vp = Object.getOwnPropertySymbols,
            LC = Vp
                ? function (e) {
                      return e == null
                          ? []
                          : ((e = Object(e)),
                            AC(Vp(e), function (t) {
                                return RC.call(e, t);
                            }));
                  }
                : xC;
        Up.exports = LC;
    });
    var Wp = c((Kk, Hp) => {
        function NC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
            return n;
        }
        Hp.exports = NC;
    });
    var kp = c((Yk, Xp) => {
        var PC = bt(),
            qC = dt(),
            MC = "[object Arguments]";
        function DC(e) {
            return qC(e) && PC(e) == MC;
        }
        Xp.exports = DC;
    });
    var Pr = c(($k, zp) => {
        var Bp = kp(),
            FC = dt(),
            jp = Object.prototype,
            GC = jp.hasOwnProperty,
            VC = jp.propertyIsEnumerable,
            UC = Bp(
                (function () {
                    return arguments;
                })()
            )
                ? Bp
                : function (e) {
                      return (
                          FC(e) && GC.call(e, "callee") && !VC.call(e, "callee")
                      );
                  };
        zp.exports = UC;
    });
    var Yp = c((Qk, Kp) => {
        function HC() {
            return !1;
        }
        Kp.exports = HC;
    });
    var qn = c((qr, Zt) => {
        var WC = Ye(),
            XC = Yp(),
            Zp = typeof qr == "object" && qr && !qr.nodeType && qr,
            $p = Zp && typeof Zt == "object" && Zt && !Zt.nodeType && Zt,
            kC = $p && $p.exports === Zp,
            Qp = kC ? WC.Buffer : void 0,
            BC = Qp ? Qp.isBuffer : void 0,
            jC = BC || XC;
        Zt.exports = jC;
    });
    var Mn = c((Zk, Jp) => {
        var zC = 9007199254740991,
            KC = /^(?:0|[1-9]\d*)$/;
        function YC(e, t) {
            var r = typeof e;
            return (
                (t = t ?? zC),
                !!t &&
                    (r == "number" || (r != "symbol" && KC.test(e))) &&
                    e > -1 &&
                    e % 1 == 0 &&
                    e < t
            );
        }
        Jp.exports = YC;
    });
    var Dn = c((Jk, eg) => {
        var $C = 9007199254740991;
        function QC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $C;
        }
        eg.exports = QC;
    });
    var rg = c((e5, tg) => {
        var ZC = bt(),
            JC = Dn(),
            eR = dt(),
            tR = "[object Arguments]",
            rR = "[object Array]",
            nR = "[object Boolean]",
            iR = "[object Date]",
            oR = "[object Error]",
            aR = "[object Function]",
            sR = "[object Map]",
            uR = "[object Number]",
            cR = "[object Object]",
            lR = "[object RegExp]",
            fR = "[object Set]",
            dR = "[object String]",
            pR = "[object WeakMap]",
            gR = "[object ArrayBuffer]",
            vR = "[object DataView]",
            hR = "[object Float32Array]",
            yR = "[object Float64Array]",
            ER = "[object Int8Array]",
            mR = "[object Int16Array]",
            _R = "[object Int32Array]",
            bR = "[object Uint8Array]",
            TR = "[object Uint8ClampedArray]",
            IR = "[object Uint16Array]",
            OR = "[object Uint32Array]",
            he = {};
        he[hR] = he[yR] = he[ER] = he[mR] = he[_R] = he[bR] = he[TR] = he[
            IR
        ] = he[OR] = !0;
        he[tR] = he[rR] = he[gR] = he[nR] = he[vR] = he[iR] = he[oR] = he[
            aR
        ] = he[sR] = he[uR] = he[cR] = he[lR] = he[fR] = he[dR] = he[pR] = !1;
        function wR(e) {
            return eR(e) && JC(e.length) && !!he[ZC(e)];
        }
        tg.exports = wR;
    });
    var ig = c((t5, ng) => {
        function SR(e) {
            return function (t) {
                return e(t);
            };
        }
        ng.exports = SR;
    });
    var ag = c((Mr, Jt) => {
        var AR = Ao(),
            og = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
            Dr = og && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
            xR = Dr && Dr.exports === og,
            ra = xR && AR.process,
            CR = (function () {
                try {
                    var e = Dr && Dr.require && Dr.require("util").types;
                    return e || (ra && ra.binding && ra.binding("util"));
                } catch {}
            })();
        Jt.exports = CR;
    });
    var Fn = c((r5, cg) => {
        var RR = rg(),
            LR = ig(),
            sg = ag(),
            ug = sg && sg.isTypedArray,
            NR = ug ? LR(ug) : RR;
        cg.exports = NR;
    });
    var na = c((n5, lg) => {
        var PR = Wp(),
            qR = Pr(),
            MR = we(),
            DR = qn(),
            FR = Mn(),
            GR = Fn(),
            VR = Object.prototype,
            UR = VR.hasOwnProperty;
        function HR(e, t) {
            var r = MR(e),
                n = !r && qR(e),
                o = !r && !n && DR(e),
                i = !r && !n && !o && GR(e),
                s = r || n || o || i,
                a = s ? PR(e.length, String) : [],
                u = a.length;
            for (var f in e)
                (t || UR.call(e, f)) &&
                    !(
                        s &&
                        (f == "length" ||
                            (o && (f == "offset" || f == "parent")) ||
                            (i &&
                                (f == "buffer" ||
                                    f == "byteLength" ||
                                    f == "byteOffset")) ||
                            FR(f, u))
                    ) &&
                    a.push(f);
            return a;
        }
        lg.exports = HR;
    });
    var Gn = c((i5, fg) => {
        var WR = Object.prototype;
        function XR(e) {
            var t = e && e.constructor,
                r = (typeof t == "function" && t.prototype) || WR;
            return e === r;
        }
        fg.exports = XR;
    });
    var pg = c((o5, dg) => {
        var kR = xo(),
            BR = kR(Object.keys, Object);
        dg.exports = BR;
    });
    var Vn = c((a5, gg) => {
        var jR = Gn(),
            zR = pg(),
            KR = Object.prototype,
            YR = KR.hasOwnProperty;
        function $R(e) {
            if (!jR(e)) return zR(e);
            var t = [];
            for (var r in Object(e))
                YR.call(e, r) && r != "constructor" && t.push(r);
            return t;
        }
        gg.exports = $R;
    });
    var Nt = c((s5, vg) => {
        var QR = zo(),
            ZR = Dn();
        function JR(e) {
            return e != null && ZR(e.length) && !QR(e);
        }
        vg.exports = JR;
    });
    var Fr = c((u5, hg) => {
        var eL = na(),
            tL = Vn(),
            rL = Nt();
        function nL(e) {
            return rL(e) ? eL(e) : tL(e);
        }
        hg.exports = nL;
    });
    var Eg = c((c5, yg) => {
        var iL = Jo(),
            oL = ta(),
            aL = Fr();
        function sL(e) {
            return iL(e, aL, oL);
        }
        yg.exports = sL;
    });
    var bg = c((l5, _g) => {
        var mg = Eg(),
            uL = 1,
            cL = Object.prototype,
            lL = cL.hasOwnProperty;
        function fL(e, t, r, n, o, i) {
            var s = r & uL,
                a = mg(e),
                u = a.length,
                f = mg(t),
                d = f.length;
            if (u != d && !s) return !1;
            for (var p = u; p--; ) {
                var v = a[p];
                if (!(s ? v in t : lL.call(t, v))) return !1;
            }
            var h = i.get(e),
                E = i.get(t);
            if (h && E) return h == t && E == e;
            var _ = !0;
            i.set(e, t), i.set(t, e);
            for (var L = s; ++p < u; ) {
                v = a[p];
                var S = e[v],
                    A = t[v];
                if (n) var O = s ? n(A, S, v, t, e, i) : n(S, A, v, e, t, i);
                if (!(O === void 0 ? S === A || o(S, A, r, n, i) : O)) {
                    _ = !1;
                    break;
                }
                L || (L = v == "constructor");
            }
            if (_ && !L) {
                var C = e.constructor,
                    R = t.constructor;
                C != R &&
                    "constructor" in e &&
                    "constructor" in t &&
                    !(
                        typeof C == "function" &&
                        C instanceof C &&
                        typeof R == "function" &&
                        R instanceof R
                    ) &&
                    (_ = !1);
            }
            return i.delete(e), i.delete(t), _;
        }
        _g.exports = fL;
    });
    var Ig = c((f5, Tg) => {
        var dL = Tt(),
            pL = Ye(),
            gL = dL(pL, "DataView");
        Tg.exports = gL;
    });
    var wg = c((d5, Og) => {
        var vL = Tt(),
            hL = Ye(),
            yL = vL(hL, "Promise");
        Og.exports = yL;
    });
    var Ag = c((p5, Sg) => {
        var EL = Tt(),
            mL = Ye(),
            _L = EL(mL, "Set");
        Sg.exports = _L;
    });
    var ia = c((g5, xg) => {
        var bL = Tt(),
            TL = Ye(),
            IL = bL(TL, "WeakMap");
        xg.exports = IL;
    });
    var Un = c((v5, Mg) => {
        var oa = Ig(),
            aa = Rn(),
            sa = wg(),
            ua = Ag(),
            ca = ia(),
            qg = bt(),
            er = Yo(),
            Cg = "[object Map]",
            OL = "[object Object]",
            Rg = "[object Promise]",
            Lg = "[object Set]",
            Ng = "[object WeakMap]",
            Pg = "[object DataView]",
            wL = er(oa),
            SL = er(aa),
            AL = er(sa),
            xL = er(ua),
            CL = er(ca),
            Pt = qg;
        ((oa && Pt(new oa(new ArrayBuffer(1))) != Pg) ||
            (aa && Pt(new aa()) != Cg) ||
            (sa && Pt(sa.resolve()) != Rg) ||
            (ua && Pt(new ua()) != Lg) ||
            (ca && Pt(new ca()) != Ng)) &&
            (Pt = function (e) {
                var t = qg(e),
                    r = t == OL ? e.constructor : void 0,
                    n = r ? er(r) : "";
                if (n)
                    switch (n) {
                        case wL:
                            return Pg;
                        case SL:
                            return Cg;
                        case AL:
                            return Rg;
                        case xL:
                            return Lg;
                        case CL:
                            return Ng;
                    }
                return t;
            });
        Mg.exports = Pt;
    });
    var Xg = c((h5, Wg) => {
        var la = $o(),
            RL = Qo(),
            LL = Np(),
            NL = bg(),
            Dg = Un(),
            Fg = we(),
            Gg = qn(),
            PL = Fn(),
            qL = 1,
            Vg = "[object Arguments]",
            Ug = "[object Array]",
            Hn = "[object Object]",
            ML = Object.prototype,
            Hg = ML.hasOwnProperty;
        function DL(e, t, r, n, o, i) {
            var s = Fg(e),
                a = Fg(t),
                u = s ? Ug : Dg(e),
                f = a ? Ug : Dg(t);
            (u = u == Vg ? Hn : u), (f = f == Vg ? Hn : f);
            var d = u == Hn,
                p = f == Hn,
                v = u == f;
            if (v && Gg(e)) {
                if (!Gg(t)) return !1;
                (s = !0), (d = !1);
            }
            if (v && !d)
                return (
                    i || (i = new la()),
                    s || PL(e) ? RL(e, t, r, n, o, i) : LL(e, t, u, r, n, o, i)
                );
            if (!(r & qL)) {
                var h = d && Hg.call(e, "__wrapped__"),
                    E = p && Hg.call(t, "__wrapped__");
                if (h || E) {
                    var _ = h ? e.value() : e,
                        L = E ? t.value() : t;
                    return i || (i = new la()), o(_, L, r, n, i);
                }
            }
            return v ? (i || (i = new la()), NL(e, t, r, n, o, i)) : !1;
        }
        Wg.exports = DL;
    });
    var fa = c((y5, jg) => {
        var FL = Xg(),
            kg = dt();
        function Bg(e, t, r, n, o) {
            return e === t
                ? !0
                : e == null || t == null || (!kg(e) && !kg(t))
                ? e !== e && t !== t
                : FL(e, t, r, n, Bg, o);
        }
        jg.exports = Bg;
    });
    var Kg = c((E5, zg) => {
        var GL = $o(),
            VL = fa(),
            UL = 1,
            HL = 2;
        function WL(e, t, r, n) {
            var o = r.length,
                i = o,
                s = !n;
            if (e == null) return !i;
            for (e = Object(e); o--; ) {
                var a = r[o];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
            }
            for (; ++o < i; ) {
                a = r[o];
                var u = a[0],
                    f = e[u],
                    d = a[1];
                if (s && a[2]) {
                    if (f === void 0 && !(u in e)) return !1;
                } else {
                    var p = new GL();
                    if (n) var v = n(f, d, u, e, t, p);
                    if (!(v === void 0 ? VL(d, f, UL | HL, n, p) : v))
                        return !1;
                }
            }
            return !0;
        }
        zg.exports = WL;
    });
    var da = c((m5, Yg) => {
        var XL = ot();
        function kL(e) {
            return e === e && !XL(e);
        }
        Yg.exports = kL;
    });
    var Qg = c((_5, $g) => {
        var BL = da(),
            jL = Fr();
        function zL(e) {
            for (var t = jL(e), r = t.length; r--; ) {
                var n = t[r],
                    o = e[n];
                t[r] = [n, o, BL(o)];
            }
            return t;
        }
        $g.exports = zL;
    });
    var pa = c((b5, Zg) => {
        function KL(e, t) {
            return function (r) {
                return r == null
                    ? !1
                    : r[e] === t && (t !== void 0 || e in Object(r));
            };
        }
        Zg.exports = KL;
    });
    var ev = c((T5, Jg) => {
        var YL = Kg(),
            $L = Qg(),
            QL = pa();
        function ZL(e) {
            var t = $L(e);
            return t.length == 1 && t[0][2]
                ? QL(t[0][0], t[0][1])
                : function (r) {
                      return r === e || YL(r, e, t);
                  };
        }
        Jg.exports = ZL;
    });
    var Gr = c((I5, tv) => {
        var JL = bt(),
            eN = dt(),
            tN = "[object Symbol]";
        function rN(e) {
            return typeof e == "symbol" || (eN(e) && JL(e) == tN);
        }
        tv.exports = rN;
    });
    var Wn = c((O5, rv) => {
        var nN = we(),
            iN = Gr(),
            oN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            aN = /^\w*$/;
        function sN(e, t) {
            if (nN(e)) return !1;
            var r = typeof e;
            return r == "number" ||
                r == "symbol" ||
                r == "boolean" ||
                e == null ||
                iN(e)
                ? !0
                : aN.test(e) || !oN.test(e) || (t != null && e in Object(t));
        }
        rv.exports = sN;
    });
    var ov = c((w5, iv) => {
        var nv = Ln(),
            uN = "Expected a function";
        function ga(e, t) {
            if (typeof e != "function" || (t != null && typeof t != "function"))
                throw new TypeError(uN);
            var r = function () {
                var n = arguments,
                    o = t ? t.apply(this, n) : n[0],
                    i = r.cache;
                if (i.has(o)) return i.get(o);
                var s = e.apply(this, n);
                return (r.cache = i.set(o, s) || i), s;
            };
            return (r.cache = new (ga.Cache || nv)()), r;
        }
        ga.Cache = nv;
        iv.exports = ga;
    });
    var sv = c((S5, av) => {
        var cN = ov(),
            lN = 500;
        function fN(e) {
            var t = cN(e, function (n) {
                    return r.size === lN && r.clear(), n;
                }),
                r = t.cache;
            return t;
        }
        av.exports = fN;
    });
    var cv = c((A5, uv) => {
        var dN = sv(),
            pN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            gN = /\\(\\)?/g,
            vN = dN(function (e) {
                var t = [];
                return (
                    e.charCodeAt(0) === 46 && t.push(""),
                    e.replace(pN, function (r, n, o, i) {
                        t.push(o ? i.replace(gN, "$1") : n || r);
                    }),
                    t
                );
            });
        uv.exports = vN;
    });
    var va = c((x5, lv) => {
        function hN(e, t) {
            for (
                var r = -1, n = e == null ? 0 : e.length, o = Array(n);
                ++r < n;

            )
                o[r] = t(e[r], r, e);
            return o;
        }
        lv.exports = hN;
    });
    var hv = c((C5, vv) => {
        var fv = kt(),
            yN = va(),
            EN = we(),
            mN = Gr(),
            _N = 1 / 0,
            dv = fv ? fv.prototype : void 0,
            pv = dv ? dv.toString : void 0;
        function gv(e) {
            if (typeof e == "string") return e;
            if (EN(e)) return yN(e, gv) + "";
            if (mN(e)) return pv ? pv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -_N ? "-0" : t;
        }
        vv.exports = gv;
    });
    var Ev = c((R5, yv) => {
        var bN = hv();
        function TN(e) {
            return e == null ? "" : bN(e);
        }
        yv.exports = TN;
    });
    var Vr = c((L5, mv) => {
        var IN = we(),
            ON = Wn(),
            wN = cv(),
            SN = Ev();
        function AN(e, t) {
            return IN(e) ? e : ON(e, t) ? [e] : wN(SN(e));
        }
        mv.exports = AN;
    });
    var tr = c((N5, _v) => {
        var xN = Gr(),
            CN = 1 / 0;
        function RN(e) {
            if (typeof e == "string" || xN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -CN ? "-0" : t;
        }
        _v.exports = RN;
    });
    var Xn = c((P5, bv) => {
        var LN = Vr(),
            NN = tr();
        function PN(e, t) {
            t = LN(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[NN(t[r++])];
            return r && r == n ? e : void 0;
        }
        bv.exports = PN;
    });
    var kn = c((q5, Tv) => {
        var qN = Xn();
        function MN(e, t, r) {
            var n = e == null ? void 0 : qN(e, t);
            return n === void 0 ? r : n;
        }
        Tv.exports = MN;
    });
    var Ov = c((M5, Iv) => {
        function DN(e, t) {
            return e != null && t in Object(e);
        }
        Iv.exports = DN;
    });
    var Sv = c((D5, wv) => {
        var FN = Vr(),
            GN = Pr(),
            VN = we(),
            UN = Mn(),
            HN = Dn(),
            WN = tr();
        function XN(e, t, r) {
            t = FN(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var s = WN(t[n]);
                if (!(i = e != null && r(e, s))) break;
                e = e[s];
            }
            return i || ++n != o
                ? i
                : ((o = e == null ? 0 : e.length),
                  !!o && HN(o) && UN(s, o) && (VN(e) || GN(e)));
        }
        wv.exports = XN;
    });
    var xv = c((F5, Av) => {
        var kN = Ov(),
            BN = Sv();
        function jN(e, t) {
            return e != null && BN(e, t, kN);
        }
        Av.exports = jN;
    });
    var Rv = c((G5, Cv) => {
        var zN = fa(),
            KN = kn(),
            YN = xv(),
            $N = Wn(),
            QN = da(),
            ZN = pa(),
            JN = tr(),
            eP = 1,
            tP = 2;
        function rP(e, t) {
            return $N(e) && QN(t)
                ? ZN(JN(e), t)
                : function (r) {
                      var n = KN(r, e);
                      return n === void 0 && n === t
                          ? YN(r, e)
                          : zN(t, n, eP | tP);
                  };
        }
        Cv.exports = rP;
    });
    var Bn = c((V5, Lv) => {
        function nP(e) {
            return e;
        }
        Lv.exports = nP;
    });
    var ha = c((U5, Nv) => {
        function iP(e) {
            return function (t) {
                return t?.[e];
            };
        }
        Nv.exports = iP;
    });
    var qv = c((H5, Pv) => {
        var oP = Xn();
        function aP(e) {
            return function (t) {
                return oP(t, e);
            };
        }
        Pv.exports = aP;
    });
    var Dv = c((W5, Mv) => {
        var sP = ha(),
            uP = qv(),
            cP = Wn(),
            lP = tr();
        function fP(e) {
            return cP(e) ? sP(lP(e)) : uP(e);
        }
        Mv.exports = fP;
    });
    var It = c((X5, Fv) => {
        var dP = ev(),
            pP = Rv(),
            gP = Bn(),
            vP = we(),
            hP = Dv();
        function yP(e) {
            return typeof e == "function"
                ? e
                : e == null
                ? gP
                : typeof e == "object"
                ? vP(e)
                    ? pP(e[0], e[1])
                    : dP(e)
                : hP(e);
        }
        Fv.exports = yP;
    });
    var ya = c((k5, Gv) => {
        var EP = It(),
            mP = Nt(),
            _P = Fr();
        function bP(e) {
            return function (t, r, n) {
                var o = Object(t);
                if (!mP(t)) {
                    var i = EP(r, 3);
                    (t = _P(t)),
                        (r = function (a) {
                            return i(o[a], a, o);
                        });
                }
                var s = e(t, r, n);
                return s > -1 ? o[i ? t[s] : s] : void 0;
            };
        }
        Gv.exports = bP;
    });
    var Ea = c((B5, Vv) => {
        function TP(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e)) return i;
            return -1;
        }
        Vv.exports = TP;
    });
    var Hv = c((j5, Uv) => {
        var IP = /\s/;
        function OP(e) {
            for (var t = e.length; t-- && IP.test(e.charAt(t)); );
            return t;
        }
        Uv.exports = OP;
    });
    var Xv = c((z5, Wv) => {
        var wP = Hv(),
            SP = /^\s+/;
        function AP(e) {
            return e && e.slice(0, wP(e) + 1).replace(SP, "");
        }
        Wv.exports = AP;
    });
    var jn = c((K5, jv) => {
        var xP = Xv(),
            kv = ot(),
            CP = Gr(),
            Bv = 0 / 0,
            RP = /^[-+]0x[0-9a-f]+$/i,
            LP = /^0b[01]+$/i,
            NP = /^0o[0-7]+$/i,
            PP = parseInt;
        function qP(e) {
            if (typeof e == "number") return e;
            if (CP(e)) return Bv;
            if (kv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = kv(t) ? t + "" : t;
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = xP(e);
            var r = LP.test(e);
            return r || NP.test(e)
                ? PP(e.slice(2), r ? 2 : 8)
                : RP.test(e)
                ? Bv
                : +e;
        }
        jv.exports = qP;
    });
    var Yv = c((Y5, Kv) => {
        var MP = jn(),
            zv = 1 / 0,
            DP = 17976931348623157e292;
        function FP(e) {
            if (!e) return e === 0 ? e : 0;
            if (((e = MP(e)), e === zv || e === -zv)) {
                var t = e < 0 ? -1 : 1;
                return t * DP;
            }
            return e === e ? e : 0;
        }
        Kv.exports = FP;
    });
    var ma = c(($5, $v) => {
        var GP = Yv();
        function VP(e) {
            var t = GP(e),
                r = t % 1;
            return t === t ? (r ? t - r : t) : 0;
        }
        $v.exports = VP;
    });
    var Zv = c((Q5, Qv) => {
        var UP = Ea(),
            HP = It(),
            WP = ma(),
            XP = Math.max;
        function kP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = r == null ? 0 : WP(r);
            return o < 0 && (o = XP(n + o, 0)), UP(e, HP(t, 3), o);
        }
        Qv.exports = kP;
    });
    var _a = c((Z5, Jv) => {
        var BP = ya(),
            jP = Zv(),
            zP = BP(jP);
        Jv.exports = zP;
    });
    var rh = {};
    De(rh, {
        ELEMENT_MATCHES: () => KP,
        FLEX_PREFIXED: () => ba,
        IS_BROWSER_ENV: () => Qe,
        TRANSFORM_PREFIXED: () => Ot,
        TRANSFORM_STYLE_PREFIXED: () => Kn,
        withBrowser: () => zn,
    });
    var th,
        Qe,
        zn,
        KP,
        ba,
        Ot,
        eh,
        Kn,
        Yn = ye(() => {
            "use strict";
            (th = ce(_a())),
                (Qe = typeof window < "u"),
                (zn = (e, t) => (Qe ? e() : t)),
                (KP = zn(() =>
                    (0, th.default)(
                        [
                            "matches",
                            "matchesSelector",
                            "mozMatchesSelector",
                            "msMatchesSelector",
                            "oMatchesSelector",
                            "webkitMatchesSelector",
                        ],
                        (e) => e in Element.prototype
                    )
                )),
                (ba = zn(() => {
                    let e = document.createElement("i"),
                        t = [
                            "flex",
                            "-webkit-flex",
                            "-ms-flexbox",
                            "-moz-box",
                            "-webkit-box",
                        ],
                        r = "";
                    try {
                        let { length: n } = t;
                        for (let o = 0; o < n; o++) {
                            let i = t[o];
                            if (((e.style.display = i), e.style.display === i))
                                return i;
                        }
                        return r;
                    } catch {
                        return r;
                    }
                }, "flex")),
                (Ot = zn(() => {
                    let e = document.createElement("i");
                    if (e.style.transform == null) {
                        let t = ["Webkit", "Moz", "ms"],
                            r = "Transform",
                            { length: n } = t;
                        for (let o = 0; o < n; o++) {
                            let i = t[o] + r;
                            if (e.style[i] !== void 0) return i;
                        }
                    }
                    return "transform";
                }, "transform")),
                (eh = Ot.split("transform")[0]),
                (Kn = eh ? eh + "TransformStyle" : "transformStyle");
        });
    var Ta = c((J5, sh) => {
        var YP = 4,
            $P = 0.001,
            QP = 1e-7,
            ZP = 10,
            Ur = 11,
            $n = 1 / (Ur - 1),
            JP = typeof Float32Array == "function";
        function nh(e, t) {
            return 1 - 3 * t + 3 * e;
        }
        function ih(e, t) {
            return 3 * t - 6 * e;
        }
        function oh(e) {
            return 3 * e;
        }
        function Qn(e, t, r) {
            return ((nh(t, r) * e + ih(t, r)) * e + oh(t)) * e;
        }
        function ah(e, t, r) {
            return 3 * nh(t, r) * e * e + 2 * ih(t, r) * e + oh(t);
        }
        function eq(e, t, r, n, o) {
            var i,
                s,
                a = 0;
            do
                (s = t + (r - t) / 2),
                    (i = Qn(s, n, o) - e),
                    i > 0 ? (r = s) : (t = s);
            while (Math.abs(i) > QP && ++a < ZP);
            return s;
        }
        function tq(e, t, r, n) {
            for (var o = 0; o < YP; ++o) {
                var i = ah(t, r, n);
                if (i === 0) return t;
                var s = Qn(t, r, n) - e;
                t -= s / i;
            }
            return t;
        }
        sh.exports = function (t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = JP ? new Float32Array(Ur) : new Array(Ur);
            if (t !== r || n !== o)
                for (var s = 0; s < Ur; ++s) i[s] = Qn(s * $n, t, n);
            function a(u) {
                for (var f = 0, d = 1, p = Ur - 1; d !== p && i[d] <= u; ++d)
                    f += $n;
                --d;
                var v = (u - i[d]) / (i[d + 1] - i[d]),
                    h = f + v * $n,
                    E = ah(h, t, n);
                return E >= $P
                    ? tq(u, h, t, n)
                    : E === 0
                    ? h
                    : eq(u, f, f + $n, t, n);
            }
            return function (f) {
                return t === r && n === o
                    ? f
                    : f === 0
                    ? 0
                    : f === 1
                    ? 1
                    : Qn(a(f), r, o);
            };
        };
    });
    var Wr = {};
    De(Wr, {
        bounce: () => Fq,
        bouncePast: () => Gq,
        ease: () => rq,
        easeIn: () => nq,
        easeInOut: () => oq,
        easeOut: () => iq,
        inBack: () => xq,
        inCirc: () => Oq,
        inCubic: () => cq,
        inElastic: () => Lq,
        inExpo: () => bq,
        inOutBack: () => Rq,
        inOutCirc: () => Sq,
        inOutCubic: () => fq,
        inOutElastic: () => Pq,
        inOutExpo: () => Iq,
        inOutQuad: () => uq,
        inOutQuart: () => gq,
        inOutQuint: () => yq,
        inOutSine: () => _q,
        inQuad: () => aq,
        inQuart: () => dq,
        inQuint: () => vq,
        inSine: () => Eq,
        outBack: () => Cq,
        outBounce: () => Aq,
        outCirc: () => wq,
        outCubic: () => lq,
        outElastic: () => Nq,
        outExpo: () => Tq,
        outQuad: () => sq,
        outQuart: () => pq,
        outQuint: () => hq,
        outSine: () => mq,
        swingFrom: () => Mq,
        swingFromTo: () => qq,
        swingTo: () => Dq,
    });
    function aq(e) {
        return Math.pow(e, 2);
    }
    function sq(e) {
        return -(Math.pow(e - 1, 2) - 1);
    }
    function uq(e) {
        return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 2)
            : -0.5 * ((e -= 2) * e - 2);
    }
    function cq(e) {
        return Math.pow(e, 3);
    }
    function lq(e) {
        return Math.pow(e - 1, 3) + 1;
    }
    function fq(e) {
        return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function dq(e) {
        return Math.pow(e, 4);
    }
    function pq(e) {
        return -(Math.pow(e - 1, 4) - 1);
    }
    function gq(e) {
        return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function vq(e) {
        return Math.pow(e, 5);
    }
    function hq(e) {
        return Math.pow(e - 1, 5) + 1;
    }
    function yq(e) {
        return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function Eq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function mq(e) {
        return Math.sin(e * (Math.PI / 2));
    }
    function _q(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function bq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function Tq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function Iq(e) {
        return e === 0
            ? 0
            : e === 1
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function Oq(e) {
        return -(Math.sqrt(1 - e * e) - 1);
    }
    function wq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function Sq(e) {
        return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function Aq(e) {
        return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function xq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t);
    }
    function Cq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function Rq(e) {
        let t = pt;
        return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function Lq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0
            ? 0
            : e === 1
            ? 1
            : (r || (r = 0.3),
              n < 1
                  ? ((n = 1), (t = r / 4))
                  : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
              -(
                  n *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e - t) * (2 * Math.PI)) / r)
              ));
    }
    function Nq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0
            ? 0
            : e === 1
            ? 1
            : (r || (r = 0.3),
              n < 1
                  ? ((n = 1), (t = r / 4))
                  : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
              n *
                  Math.pow(2, -10 * e) *
                  Math.sin(((e - t) * (2 * Math.PI)) / r) +
                  1);
    }
    function Pq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0
            ? 0
            : (e /= 1 / 2) === 2
            ? 1
            : (r || (r = 0.3 * 1.5),
              n < 1
                  ? ((n = 1), (t = r / 4))
                  : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
              e < 1
                  ? -0.5 *
                    (n *
                        Math.pow(2, 10 * (e -= 1)) *
                        Math.sin(((e - t) * (2 * Math.PI)) / r))
                  : n *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e - t) * (2 * Math.PI)) / r) *
                        0.5 +
                    1);
    }
    function qq(e) {
        let t = pt;
        return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function Mq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t);
    }
    function Dq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function Fq(e) {
        return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function Gq(e) {
        return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
            ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
            : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
    var Hr,
        pt,
        rq,
        nq,
        iq,
        oq,
        Ia = ye(() => {
            "use strict";
            (Hr = ce(Ta())),
                (pt = 1.70158),
                (rq = (0, Hr.default)(0.25, 0.1, 0.25, 1)),
                (nq = (0, Hr.default)(0.42, 0, 1, 1)),
                (iq = (0, Hr.default)(0, 0, 0.58, 1)),
                (oq = (0, Hr.default)(0.42, 0, 0.58, 1));
        });
    var ch = {};
    De(ch, {
        applyEasing: () => Uq,
        createBezierEasing: () => Vq,
        optimizeFloat: () => Xr,
    });
    function Xr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            o = Number(Math.round(e * n) / n);
        return Math.abs(o) > 1e-4 ? o : 0;
    }
    function Vq(e) {
        return (0, uh.default)(...e);
    }
    function Uq(e, t, r) {
        return t === 0
            ? 0
            : t === 1
            ? 1
            : Xr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Wr[e] ? Wr[e](t) : t);
    }
    var uh,
        Oa = ye(() => {
            "use strict";
            Ia();
            uh = ce(Ta());
        });
    var dh = {};
    De(dh, {
        createElementState: () => fh,
        ixElements: () => eM,
        mergeActionState: () => wa,
    });
    function fh(e, t, r, n, o) {
        let i =
            r === Hq
                ? (0, rr.getIn)(o, ["config", "target", "objectId"])
                : null;
        return (0, rr.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function wa(e, t, r, n, o) {
        let i = rM(o);
        return (0, rr.mergeIn)(e, [t, Jq, r], n, i);
    }
    function rM(e) {
        let { config: t } = e;
        return tM.reduce((r, n) => {
            let o = n[0],
                i = n[1],
                s = t[o],
                a = t[i];
            return s != null && a != null && (r[i] = a), r;
        }, {});
    }
    var rr,
        tB,
        Hq,
        rB,
        Wq,
        Xq,
        kq,
        Bq,
        jq,
        zq,
        Kq,
        Yq,
        $q,
        Qq,
        Zq,
        lh,
        Jq,
        eM,
        tM,
        ph = ye(() => {
            "use strict";
            rr = ce(zt());
            Ge();
            ({
                HTML_ELEMENT: tB,
                PLAIN_OBJECT: Hq,
                ABSTRACT_NODE: rB,
                CONFIG_X_VALUE: Wq,
                CONFIG_Y_VALUE: Xq,
                CONFIG_Z_VALUE: kq,
                CONFIG_VALUE: Bq,
                CONFIG_X_UNIT: jq,
                CONFIG_Y_UNIT: zq,
                CONFIG_Z_UNIT: Kq,
                CONFIG_UNIT: Yq,
            } = Ce),
                ({
                    IX2_SESSION_STOPPED: $q,
                    IX2_INSTANCE_ADDED: Qq,
                    IX2_ELEMENT_STATE_CHANGED: Zq,
                } = Ie),
                (lh = {}),
                (Jq = "refState"),
                (eM = (e = lh, t = {}) => {
                    switch (t.type) {
                        case $q:
                            return lh;
                        case Qq: {
                            let {
                                    elementId: r,
                                    element: n,
                                    origin: o,
                                    actionItem: i,
                                    refType: s,
                                } = t.payload,
                                { actionTypeId: a } = i,
                                u = e;
                            return (
                                (0, rr.getIn)(u, [r, n]) !== n &&
                                    (u = fh(u, n, s, r, i)),
                                wa(u, r, a, o, i)
                            );
                        }
                        case Zq: {
                            let {
                                elementId: r,
                                actionTypeId: n,
                                current: o,
                                actionItem: i,
                            } = t.payload;
                            return wa(e, r, n, o, i);
                        }
                        default:
                            return e;
                    }
                });
            tM = [
                [Wq, jq],
                [Xq, zq],
                [kq, Kq],
                [Bq, Yq],
            ];
        });
    var gh = c((Se) => {
        "use strict";
        Object.defineProperty(Se, "__esModule", { value: !0 });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var nM = (e) => e.value;
        Se.getPluginConfig = nM;
        var iM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0
                ? r * 1e3
                : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
        };
        Se.getPluginDuration = iM;
        var oM = (e) => e || { value: 0 };
        Se.getPluginOrigin = oM;
        var aM = (e) => ({ value: e.value });
        Se.getPluginDestination = aM;
        var sM = (e) => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t;
        };
        Se.createPluginInstance = sM;
        var uM = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n);
        };
        Se.renderPlugin = uM;
        var cM = (e) => {
            window.Webflow.require("lottie").createInstance(e).stop();
        };
        Se.clearPlugin = cM;
    });
    var hh = c((Ae) => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", { value: !0 });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var lM = (e) => document.querySelector(`[data-w-id="${e}"]`),
            fM = () => window.Webflow.require("spline"),
            dM = (e, t) => e.filter((r) => !t.includes(r)),
            pM = (e, t) => e.value[t];
        Ae.getPluginConfig = pM;
        var gM = () => null;
        Ae.getPluginDuration = gM;
        var vh = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
            }),
            vM = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let i = Object.keys(e),
                        s = dM(n, i);
                    return s.length
                        ? s.reduce((u, f) => ((u[f] = vh[f]), u), e)
                        : e;
                }
                return n.reduce((i, s) => ((i[s] = vh[s]), i), {});
            };
        Ae.getPluginOrigin = vM;
        var hM = (e) => e.value;
        Ae.getPluginDestination = hM;
        var yM = (e, t) => {
            var r;
            let n =
                t == null ||
                (r = t.config) === null ||
                r === void 0 ||
                (r = r.target) === null ||
                r === void 0
                    ? void 0
                    : r.pluginElement;
            return n ? lM(n) : null;
        };
        Ae.createPluginInstance = yM;
        var EM = (e, t, r) => {
            let n = fM(),
                o = n.getInstance(e),
                i = r.config.target.objectId,
                s = (a) => {
                    if (!a)
                        throw new Error(
                            "Invalid spline app passed to renderSpline"
                        );
                    let u = i && a.findObjectById(i);
                    if (!u) return;
                    let { PLUGIN_SPLINE: f } = t;
                    f.positionX != null && (u.position.x = f.positionX),
                        f.positionY != null && (u.position.y = f.positionY),
                        f.positionZ != null && (u.position.z = f.positionZ),
                        f.rotationX != null && (u.rotation.x = f.rotationX),
                        f.rotationY != null && (u.rotation.y = f.rotationY),
                        f.rotationZ != null && (u.rotation.z = f.rotationZ),
                        f.scaleX != null && (u.scale.x = f.scaleX),
                        f.scaleY != null && (u.scale.y = f.scaleY),
                        f.scaleZ != null && (u.scale.z = f.scaleZ);
                };
            o ? s(o.spline) : n.setLoadHandler(e, s);
        };
        Ae.renderPlugin = EM;
        var mM = () => null;
        Ae.clearPlugin = mM;
    });
    var Eh = c((Oe) => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", { value: !0 });
        Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        Oe.normalizeColor = yh;
        Oe.renderPlugin = void 0;
        function yh(e) {
            let t,
                r,
                n,
                o = 1,
                i = e.replace(/\s/g, "").toLowerCase();
            if (i.startsWith("#")) {
                let s = i.substring(1);
                s.length === 3
                    ? ((t = parseInt(s[0] + s[0], 16)),
                      (r = parseInt(s[1] + s[1], 16)),
                      (n = parseInt(s[2] + s[2], 16)))
                    : s.length === 6 &&
                      ((t = parseInt(s.substring(0, 2), 16)),
                      (r = parseInt(s.substring(2, 4), 16)),
                      (n = parseInt(s.substring(4, 6), 16)));
            } else if (i.startsWith("rgba")) {
                let s = i.match(/rgba\(([^)]+)\)/)[1].split(",");
                (t = parseInt(s[0], 10)),
                    (r = parseInt(s[1], 10)),
                    (n = parseInt(s[2], 10)),
                    (o = parseFloat(s[3]));
            } else if (i.startsWith("rgb")) {
                let s = i.match(/rgb\(([^)]+)\)/)[1].split(",");
                (t = parseInt(s[0], 10)),
                    (r = parseInt(s[1], 10)),
                    (n = parseInt(s[2], 10));
            } else if (i.startsWith("hsla")) {
                let s = i.match(/hsla\(([^)]+)\)/)[1].split(","),
                    a = parseFloat(s[0]),
                    u = parseFloat(s[1].replace("%", "")) / 100,
                    f = parseFloat(s[2].replace("%", "")) / 100;
                o = parseFloat(s[3]);
                let d = (1 - Math.abs(2 * f - 1)) * u,
                    p = d * (1 - Math.abs(((a / 60) % 2) - 1)),
                    v = f - d / 2,
                    h,
                    E,
                    _;
                a >= 0 && a < 60
                    ? ((h = d), (E = p), (_ = 0))
                    : a >= 60 && a < 120
                    ? ((h = p), (E = d), (_ = 0))
                    : a >= 120 && a < 180
                    ? ((h = 0), (E = d), (_ = p))
                    : a >= 180 && a < 240
                    ? ((h = 0), (E = p), (_ = d))
                    : a >= 240 && a < 300
                    ? ((h = p), (E = 0), (_ = d))
                    : ((h = d), (E = 0), (_ = p)),
                    (t = Math.round((h + v) * 255)),
                    (r = Math.round((E + v) * 255)),
                    (n = Math.round((_ + v) * 255));
            } else if (i.startsWith("hsl")) {
                let s = i.match(/hsl\(([^)]+)\)/)[1].split(","),
                    a = parseFloat(s[0]),
                    u = parseFloat(s[1].replace("%", "")) / 100,
                    f = parseFloat(s[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * f - 1)) * u,
                    p = d * (1 - Math.abs(((a / 60) % 2) - 1)),
                    v = f - d / 2,
                    h,
                    E,
                    _;
                a >= 0 && a < 60
                    ? ((h = d), (E = p), (_ = 0))
                    : a >= 60 && a < 120
                    ? ((h = p), (E = d), (_ = 0))
                    : a >= 120 && a < 180
                    ? ((h = 0), (E = d), (_ = p))
                    : a >= 180 && a < 240
                    ? ((h = 0), (E = p), (_ = d))
                    : a >= 240 && a < 300
                    ? ((h = p), (E = 0), (_ = d))
                    : ((h = d), (E = 0), (_ = p)),
                    (t = Math.round((h + v) * 255)),
                    (r = Math.round((E + v) * 255)),
                    (n = Math.round((_ + v) * 255));
            }
            return (
                (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) &&
                    `${e}`,
                { red: t, green: r, blue: n, alpha: o }
            );
        }
        var _M = (e, t) => e.value[t];
        Oe.getPluginConfig = _M;
        var bM = () => null;
        Oe.getPluginDuration = bM;
        var TM = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                o = getComputedStyle(document.documentElement).getPropertyValue(
                    n
                );
            if (r.size != null) return { size: parseInt(o, 10) };
            if (r.red != null && r.green != null && r.blue != null)
                return yh(o);
        };
        Oe.getPluginOrigin = TM;
        var IM = (e) => e.value;
        Oe.getPluginDestination = IM;
        var OM = () => null;
        Oe.createPluginInstance = OM;
        var wM = (e, t, r) => {
            let n = r.config.target.objectId,
                o = r.config.value.unit,
                { PLUGIN_VARIABLE: i } = t,
                { size: s, red: a, green: u, blue: f, alpha: d } = i,
                p;
            s != null && (p = s + o),
                a != null &&
                    f != null &&
                    u != null &&
                    d != null &&
                    (p = `rgba(${a}, ${u}, ${f}, ${d})`),
                p != null && document.documentElement.style.setProperty(n, p);
        };
        Oe.renderPlugin = wM;
        var SM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r);
        };
        Oe.clearPlugin = SM;
    });
    var mh = c((Zn) => {
        "use strict";
        var Aa = cn().default;
        Object.defineProperty(Zn, "__esModule", { value: !0 });
        Zn.pluginMethodMap = void 0;
        var Sa = (Ge(), et(wf)),
            AM = Aa(gh()),
            xM = Aa(hh()),
            CM = Aa(Eh()),
            aB = (Zn.pluginMethodMap = new Map([
                [Sa.ActionTypeConsts.PLUGIN_LOTTIE, { ...AM }],
                [Sa.ActionTypeConsts.PLUGIN_SPLINE, { ...xM }],
                [Sa.ActionTypeConsts.PLUGIN_VARIABLE, { ...CM }],
            ]));
    });
    var _h = {};
    De(_h, {
        clearPlugin: () => Pa,
        createPluginInstance: () => LM,
        getPluginConfig: () => Ca,
        getPluginDestination: () => La,
        getPluginDuration: () => RM,
        getPluginOrigin: () => Ra,
        isPluginType: () => qt,
        renderPlugin: () => Na,
    });
    function qt(e) {
        return xa.pluginMethodMap.has(e);
    }
    var xa,
        Mt,
        Ca,
        Ra,
        RM,
        La,
        LM,
        Na,
        Pa,
        qa = ye(() => {
            "use strict";
            Yn();
            xa = ce(mh());
            (Mt = (e) => (t) => {
                if (!Qe) return () => null;
                let r = xa.pluginMethodMap.get(t);
                if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
                let n = r[e];
                if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
                return n;
            }),
                (Ca = Mt("getPluginConfig")),
                (Ra = Mt("getPluginOrigin")),
                (RM = Mt("getPluginDuration")),
                (La = Mt("getPluginDestination")),
                (LM = Mt("createPluginInstance")),
                (Na = Mt("renderPlugin")),
                (Pa = Mt("clearPlugin"));
        });
    var Th = c((cB, bh) => {
        function NM(e, t) {
            return e == null || e !== e ? t : e;
        }
        bh.exports = NM;
    });
    var Oh = c((lB, Ih) => {
        function PM(e, t, r, n) {
            var o = -1,
                i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
            return r;
        }
        Ih.exports = PM;
    });
    var Sh = c((fB, wh) => {
        function qM(e) {
            return function (t, r, n) {
                for (var o = -1, i = Object(t), s = n(t), a = s.length; a--; ) {
                    var u = s[e ? a : ++o];
                    if (r(i[u], u, i) === !1) break;
                }
                return t;
            };
        }
        wh.exports = qM;
    });
    var xh = c((dB, Ah) => {
        var MM = Sh(),
            DM = MM();
        Ah.exports = DM;
    });
    var Ma = c((pB, Ch) => {
        var FM = xh(),
            GM = Fr();
        function VM(e, t) {
            return e && FM(e, t, GM);
        }
        Ch.exports = VM;
    });
    var Lh = c((gB, Rh) => {
        var UM = Nt();
        function HM(e, t) {
            return function (r, n) {
                if (r == null) return r;
                if (!UM(r)) return e(r, n);
                for (
                    var o = r.length, i = t ? o : -1, s = Object(r);
                    (t ? i-- : ++i < o) && n(s[i], i, s) !== !1;

                );
                return r;
            };
        }
        Rh.exports = HM;
    });
    var Da = c((vB, Nh) => {
        var WM = Ma(),
            XM = Lh(),
            kM = XM(WM);
        Nh.exports = kM;
    });
    var qh = c((hB, Ph) => {
        function BM(e, t, r, n, o) {
            return (
                o(e, function (i, s, a) {
                    r = n ? ((n = !1), i) : t(r, i, s, a);
                }),
                r
            );
        }
        Ph.exports = BM;
    });
    var Dh = c((yB, Mh) => {
        var jM = Oh(),
            zM = Da(),
            KM = It(),
            YM = qh(),
            $M = we();
        function QM(e, t, r) {
            var n = $M(e) ? jM : YM,
                o = arguments.length < 3;
            return n(e, KM(t, 4), r, o, zM);
        }
        Mh.exports = QM;
    });
    var Gh = c((EB, Fh) => {
        var ZM = Ea(),
            JM = It(),
            e1 = ma(),
            t1 = Math.max,
            r1 = Math.min;
        function n1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var o = n - 1;
            return (
                r !== void 0 &&
                    ((o = e1(r)), (o = r < 0 ? t1(n + o, 0) : r1(o, n - 1))),
                ZM(e, JM(t, 3), o, !0)
            );
        }
        Fh.exports = n1;
    });
    var Uh = c((mB, Vh) => {
        var i1 = ya(),
            o1 = Gh(),
            a1 = i1(o1);
        Vh.exports = a1;
    });
    function Hh(e, t) {
        return e === t
            ? e !== 0 || t !== 0 || 1 / e === 1 / t
            : e !== e && t !== t;
    }
    function u1(e, t) {
        if (Hh(e, t)) return !0;
        if (
            typeof e != "object" ||
            e === null ||
            typeof t != "object" ||
            t === null
        )
            return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let o = 0; o < r.length; o++)
            if (!s1.call(t, r[o]) || !Hh(e[r[o]], t[r[o]])) return !1;
        return !0;
    }
    var s1,
        Fa,
        Wh = ye(() => {
            "use strict";
            s1 = Object.prototype.hasOwnProperty;
            Fa = u1;
        });
    var oy = {};
    De(oy, {
        cleanupHTMLElement: () => oD,
        clearAllStyles: () => iD,
        clearObjectCache: () => w1,
        getActionListProgress: () => sD,
        getAffectedElements: () => Wa,
        getComputedStyle: () => P1,
        getDestinationValues: () => U1,
        getElementId: () => C1,
        getInstanceId: () => A1,
        getInstanceOrigin: () => D1,
        getItemConfigByKey: () => V1,
        getMaxDurationItemIndex: () => iy,
        getNamespacedParameterId: () => lD,
        getRenderType: () => ty,
        getStyleProp: () => H1,
        mediaQueriesEqual: () => dD,
        observeStore: () => N1,
        reduceListToGroup: () => uD,
        reifyState: () => R1,
        renderHTMLElement: () => W1,
        shallowEqual: () => Fa,
        shouldAllowMediaQuery: () => fD,
        shouldNamespaceEventParameter: () => cD,
        stringifyTarget: () => pD,
    });
    function w1() {
        Jn.clear();
    }
    function A1() {
        return "i" + S1++;
    }
    function C1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id;
        }
        return "e" + x1++;
    }
    function R1({ events: e, actionLists: t, site: r } = {}) {
        let n = (0, ni.default)(
                e,
                (s, a) => {
                    let { eventTypeId: u } = a;
                    return s[u] || (s[u] = {}), (s[u][a.id] = a), s;
                },
                {}
            ),
            o = r && r.mediaQueries,
            i = [];
        return (
            o
                ? (i = o.map((s) => s.key))
                : ((o = []),
                  console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: o,
                    mediaQueryKeys: i,
                },
            }
        );
    }
    function N1({ store: e, select: t, onChange: r, comparator: n = L1 }) {
        let { getState: o, subscribe: i } = e,
            s = i(u),
            a = t(o());
        function u() {
            let f = t(o());
            if (f == null) {
                s();
                return;
            }
            n(f, a) || ((a = f), r(a, e));
        }
        return s;
    }
    function Bh(e) {
        let t = typeof e;
        if (t === "string") return { id: e };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: o,
                selectorGuids: i,
                appliesTo: s,
                useEventTarget: a,
            } = e;
            return {
                id: r,
                objectId: n,
                selector: o,
                selectorGuids: i,
                appliesTo: s,
                useEventTarget: a,
            };
        }
        return {};
    }
    function Wa({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: o,
    }) {
        if (!o) throw new Error("IX2 missing elementApi");
        let { targets: i } = e;
        if (Array.isArray(i) && i.length > 0)
            return i.reduce(
                (q, T) =>
                    q.concat(
                        Wa({
                            config: { target: T },
                            event: t,
                            eventTarget: r,
                            elementRoot: n,
                            elementApi: o,
                        })
                    ),
                []
            );
        let {
                getValidDocument: s,
                getQuerySelector: a,
                queryDocument: u,
                getChildElements: f,
                getSiblingElements: d,
                matchSelector: p,
                elementContains: v,
                isSiblingNode: h,
            } = o,
            { target: E } = e;
        if (!E) return [];
        let {
            id: _,
            objectId: L,
            selector: S,
            selectorGuids: A,
            appliesTo: O,
            useEventTarget: C,
        } = Bh(E);
        if (L) return [Jn.has(L) ? Jn.get(L) : Jn.set(L, {}).get(L)];
        if (O === Xo.PAGE) {
            let q = s(_);
            return q ? [q] : [];
        }
        let x = (t?.action?.config?.affectedElements ?? {})[_ || S] || {},
            U = !!(x.id || x.selector),
            X,
            B,
            Y,
            re = t && a(Bh(t.target));
        if (
            (U
                ? ((X = x.limitAffectedElements), (B = re), (Y = a(x)))
                : (B = Y = a({ id: _, selector: S, selectorGuids: A })),
            t && C)
        ) {
            let q = r && (Y || C === !0) ? [r] : u(re);
            if (Y) {
                if (C === T1) return u(Y).filter((T) => q.some((N) => v(T, N)));
                if (C === Xh) return u(Y).filter((T) => q.some((N) => v(N, T)));
                if (C === kh) return u(Y).filter((T) => q.some((N) => h(N, T)));
            }
            return q;
        }
        return B == null || Y == null
            ? []
            : Qe && n
            ? u(Y).filter((q) => n.contains(q))
            : X === Xh
            ? u(B, Y)
            : X === b1
            ? f(u(B)).filter(p(Y))
            : X === kh
            ? d(u(B)).filter(p(Y))
            : u(Y);
    }
    function P1({ element: e, actionItem: t }) {
        if (!Qe) return {};
        let { actionTypeId: r } = t;
        switch (r) {
            case sr:
            case ur:
            case cr:
            case lr:
            case oi:
                return window.getComputedStyle(e);
            default:
                return {};
        }
    }
    function D1(e, t = {}, r = {}, n, o) {
        let { getStyle: i } = o,
            { actionTypeId: s } = n;
        if (qt(s)) return Ra(s)(t[s], n);
        switch (n.actionTypeId) {
            case ir:
            case or:
            case ar:
            case zr:
                return t[n.actionTypeId] || Xa[n.actionTypeId];
            case Kr:
                return q1(t[n.actionTypeId], n.config.filters);
            case Yr:
                return M1(t[n.actionTypeId], n.config.fontVariations);
            case Zh:
                return { value: (0, gt.default)(parseFloat(i(e, ti)), 1) };
            case sr: {
                let a = i(e, at),
                    u = i(e, st),
                    f,
                    d;
                return (
                    n.config.widthUnit === wt
                        ? (f = jh.test(a) ? parseFloat(a) : parseFloat(r.width))
                        : (f = (0, gt.default)(
                              parseFloat(a),
                              parseFloat(r.width)
                          )),
                    n.config.heightUnit === wt
                        ? (d = jh.test(u)
                              ? parseFloat(u)
                              : parseFloat(r.height))
                        : (d = (0, gt.default)(
                              parseFloat(u),
                              parseFloat(r.height)
                          )),
                    { widthValue: f, heightValue: d }
                );
            }
            case ur:
            case cr:
            case lr:
                return tD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: i,
                });
            case oi:
                return { value: (0, gt.default)(i(e, ri), r.display) };
            case O1:
                return t[n.actionTypeId] || { value: 0 };
            default:
                return;
        }
    }
    function U1({ element: e, actionItem: t, elementApi: r }) {
        if (qt(t.actionTypeId)) return La(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case ir:
            case or:
            case ar:
            case zr: {
                let { xValue: n, yValue: o, zValue: i } = t.config;
                return { xValue: n, yValue: o, zValue: i };
            }
            case sr: {
                let { getStyle: n, setStyle: o, getProperty: i } = r,
                    { widthUnit: s, heightUnit: a } = t.config,
                    { widthValue: u, heightValue: f } = t.config;
                if (!Qe) return { widthValue: u, heightValue: f };
                if (s === wt) {
                    let d = n(e, at);
                    o(e, at, ""), (u = i(e, "offsetWidth")), o(e, at, d);
                }
                if (a === wt) {
                    let d = n(e, st);
                    o(e, st, ""), (f = i(e, "offsetHeight")), o(e, st, d);
                }
                return { widthValue: u, heightValue: f };
            }
            case ur:
            case cr:
            case lr: {
                let { rValue: n, gValue: o, bValue: i, aValue: s } = t.config;
                return { rValue: n, gValue: o, bValue: i, aValue: s };
            }
            case Kr:
                return t.config.filters.reduce(F1, {});
            case Yr:
                return t.config.fontVariations.reduce(G1, {});
            default: {
                let { value: n } = t.config;
                return { value: n };
            }
        }
    }
    function ty(e) {
        if (/^TRANSFORM_/.test(e)) return $h;
        if (/^STYLE_/.test(e)) return Ua;
        if (/^GENERAL_/.test(e)) return Va;
        if (/^PLUGIN_/.test(e)) return Qh;
    }
    function H1(e, t) {
        return e === Ua ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function W1(e, t, r, n, o, i, s, a, u) {
        switch (a) {
            case $h:
                return z1(e, t, r, o, s);
            case Ua:
                return rD(e, t, r, o, i, s);
            case Va:
                return nD(e, o, s);
            case Qh: {
                let { actionTypeId: f } = o;
                if (qt(f)) return Na(f)(u, t, o);
            }
        }
    }
    function z1(e, t, r, n, o) {
        let i = j1
                .map((a) => {
                    let u = Xa[a],
                        {
                            xValue: f = u.xValue,
                            yValue: d = u.yValue,
                            zValue: p = u.zValue,
                            xUnit: v = "",
                            yUnit: h = "",
                            zUnit: E = "",
                        } = t[a] || {};
                    switch (a) {
                        case ir:
                            return `${f1}(${f}${v}, ${d}${h}, ${p}${E})`;
                        case or:
                            return `${d1}(${f}${v}, ${d}${h}, ${p}${E})`;
                        case ar:
                            return `${p1}(${f}${v}) ${g1}(${d}${h}) ${v1}(${p}${E})`;
                        case zr:
                            return `${h1}(${f}${v}, ${d}${h})`;
                        default:
                            return "";
                    }
                })
                .join(" "),
            { setStyle: s } = o;
        Dt(e, Ot, o), s(e, Ot, i), $1(n, r) && s(e, Kn, y1);
    }
    function K1(e, t, r, n) {
        let o = (0, ni.default)(
                t,
                (s, a, u) => `${s} ${u}(${a}${B1(u, r)})`,
                ""
            ),
            { setStyle: i } = n;
        Dt(e, kr, n), i(e, kr, o);
    }
    function Y1(e, t, r, n) {
        let o = (0, ni.default)(
                t,
                (s, a, u) => (s.push(`"${u}" ${a}`), s),
                []
            ).join(", "),
            { setStyle: i } = n;
        Dt(e, Br, n), i(e, Br, o);
    }
    function $1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
        return (
            (e === ir && n !== void 0) ||
            (e === or && n !== void 0) ||
            (e === ar && (t !== void 0 || r !== void 0))
        );
    }
    function eD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : "";
    }
    function tD({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n,
    }) {
        let o = Ha[t],
            i = n(e, o),
            s = Z1.test(i) ? i : r[o],
            a = eD(J1, s).split(jr);
        return {
            rValue: (0, gt.default)(parseInt(a[0], 10), 255),
            gValue: (0, gt.default)(parseInt(a[1], 10), 255),
            bValue: (0, gt.default)(parseInt(a[2], 10), 255),
            aValue: (0, gt.default)(parseFloat(a[3]), 1),
        };
    }
    function rD(e, t, r, n, o, i) {
        let { setStyle: s } = i;
        switch (n.actionTypeId) {
            case sr: {
                let { widthUnit: a = "", heightUnit: u = "" } = n.config,
                    { widthValue: f, heightValue: d } = r;
                f !== void 0 &&
                    (a === wt && (a = "px"), Dt(e, at, i), s(e, at, f + a)),
                    d !== void 0 &&
                        (u === wt && (u = "px"), Dt(e, st, i), s(e, st, d + u));
                break;
            }
            case Kr: {
                K1(e, r, n.config, i);
                break;
            }
            case Yr: {
                Y1(e, r, n.config, i);
                break;
            }
            case ur:
            case cr:
            case lr: {
                let a = Ha[n.actionTypeId],
                    u = Math.round(r.rValue),
                    f = Math.round(r.gValue),
                    d = Math.round(r.bValue),
                    p = r.aValue;
                Dt(e, a, i),
                    s(
                        e,
                        a,
                        p >= 1
                            ? `rgb(${u},${f},${d})`
                            : `rgba(${u},${f},${d},${p})`
                    );
                break;
            }
            default: {
                let { unit: a = "" } = n.config;
                Dt(e, o, i), s(e, o, r.value + a);
                break;
            }
        }
    }
    function nD(e, t, r) {
        let { setStyle: n } = r;
        switch (t.actionTypeId) {
            case oi: {
                let { value: o } = t.config;
                o === E1 && Qe ? n(e, ri, ba) : n(e, ri, o);
                return;
            }
        }
    }
    function Dt(e, t, r) {
        if (!Qe) return;
        let n = ey[t];
        if (!n) return;
        let { getStyle: o, setStyle: i } = r,
            s = o(e, nr);
        if (!s) {
            i(e, nr, n);
            return;
        }
        let a = s.split(jr).map(Jh);
        a.indexOf(n) === -1 && i(e, nr, a.concat(n).join(jr));
    }
    function ry(e, t, r) {
        if (!Qe) return;
        let n = ey[t];
        if (!n) return;
        let { getStyle: o, setStyle: i } = r,
            s = o(e, nr);
        !s ||
            s.indexOf(n) === -1 ||
            i(
                e,
                nr,
                s
                    .split(jr)
                    .map(Jh)
                    .filter((a) => a !== n)
                    .join(jr)
            );
    }
    function iD({ store: e, elementApi: t }) {
        let { ixData: r } = e.getState(),
            { events: n = {}, actionLists: o = {} } = r;
        Object.keys(n).forEach((i) => {
            let s = n[i],
                { config: a } = s.action,
                { actionListId: u } = a,
                f = o[u];
            f && zh({ actionList: f, event: s, elementApi: t });
        }),
            Object.keys(o).forEach((i) => {
                zh({ actionList: o[i], elementApi: t });
            });
    }
    function zh({ actionList: e = {}, event: t, elementApi: r }) {
        let { actionItemGroups: n, continuousParameterGroups: o } = e;
        n &&
            n.forEach((i) => {
                Kh({ actionGroup: i, event: t, elementApi: r });
            }),
            o &&
                o.forEach((i) => {
                    let { continuousActionGroups: s } = i;
                    s.forEach((a) => {
                        Kh({ actionGroup: a, event: t, elementApi: r });
                    });
                });
    }
    function Kh({ actionGroup: e, event: t, elementApi: r }) {
        let { actionItems: n } = e;
        n.forEach((o) => {
            let { actionTypeId: i, config: s } = o,
                a;
            qt(i)
                ? (a = (u) => Pa(i)(u, o))
                : (a = ny({ effect: aD, actionTypeId: i, elementApi: r })),
                Wa({ config: s, event: t, elementApi: r }).forEach(a);
        });
    }
    function oD(e, t, r) {
        let { setStyle: n, getStyle: o } = r,
            { actionTypeId: i } = t;
        if (i === sr) {
            let { config: s } = t;
            s.widthUnit === wt && n(e, at, ""),
                s.heightUnit === wt && n(e, st, "");
        }
        o(e, nr) && ny({ effect: ry, actionTypeId: i, elementApi: r })(e);
    }
    function aD(e, t, r) {
        let { setStyle: n } = r;
        ry(e, t, r), n(e, t, ""), t === Ot && n(e, Kn, "");
    }
    function iy(e) {
        let t = 0,
            r = 0;
        return (
            e.forEach((n, o) => {
                let { config: i } = n,
                    s = i.delay + i.duration;
                s >= t && ((t = s), (r = o));
            }),
            r
        );
    }
    function sD(e, t) {
        let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
            { actionItem: o, verboseTimeElapsed: i = 0 } = t,
            s = 0,
            a = 0;
        return (
            r.forEach((u, f) => {
                if (n && f === 0) return;
                let { actionItems: d } = u,
                    p = d[iy(d)],
                    { config: v, actionTypeId: h } = p;
                o.id === p.id && (a = s + i);
                let E = ty(h) === Va ? 0 : v.duration;
                s += v.delay + E;
            }),
            s > 0 ? Xr(a / s) : 0
        );
    }
    function uD({ actionList: e, actionItemId: t, rawData: r }) {
        let { actionItemGroups: n, continuousParameterGroups: o } = e,
            i = [],
            s = (a) => (
                i.push(
                    (0, ii.mergeIn)(a, ["config"], { delay: 0, duration: 0 })
                ),
                a.id === t
            );
        return (
            n && n.some(({ actionItems: a }) => a.some(s)),
            o &&
                o.some((a) => {
                    let { continuousActionGroups: u } = a;
                    return u.some(({ actionItems: f }) => f.some(s));
                }),
            (0, ii.setIn)(r, ["actionLists"], {
                [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
            })
        );
    }
    function cD(e, { basedOn: t }) {
        return (
            (e === $e.SCROLLING_IN_VIEW && (t === it.ELEMENT || t == null)) ||
            (e === $e.MOUSE_MOVE && t === it.ELEMENT)
        );
    }
    function lD(e, t) {
        return e + I1 + t;
    }
    function fD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function dD(e, t) {
        return Fa(e && e.sort(), t && t.sort());
    }
    function pD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Ga + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
        return t + Ga + r + Ga + n;
    }
    var gt,
        ni,
        ei,
        ii,
        c1,
        l1,
        f1,
        d1,
        p1,
        g1,
        v1,
        h1,
        y1,
        E1,
        ti,
        kr,
        Br,
        at,
        st,
        Yh,
        m1,
        _1,
        Xh,
        b1,
        kh,
        T1,
        ri,
        nr,
        wt,
        jr,
        I1,
        Ga,
        $h,
        Va,
        Ua,
        Qh,
        ir,
        or,
        ar,
        zr,
        Zh,
        Kr,
        Yr,
        sr,
        ur,
        cr,
        lr,
        oi,
        O1,
        Jh,
        Ha,
        ey,
        Jn,
        S1,
        x1,
        L1,
        jh,
        q1,
        M1,
        F1,
        G1,
        V1,
        Xa,
        X1,
        k1,
        B1,
        j1,
        Q1,
        Z1,
        J1,
        ny,
        ay = ye(() => {
            "use strict";
            (gt = ce(Th())), (ni = ce(Dh())), (ei = ce(Uh())), (ii = ce(zt()));
            Ge();
            Wh();
            Oa();
            qa();
            Yn();
            ({
                BACKGROUND: c1,
                TRANSFORM: l1,
                TRANSLATE_3D: f1,
                SCALE_3D: d1,
                ROTATE_X: p1,
                ROTATE_Y: g1,
                ROTATE_Z: v1,
                SKEW: h1,
                PRESERVE_3D: y1,
                FLEX: E1,
                OPACITY: ti,
                FILTER: kr,
                FONT_VARIATION_SETTINGS: Br,
                WIDTH: at,
                HEIGHT: st,
                BACKGROUND_COLOR: Yh,
                BORDER_COLOR: m1,
                COLOR: _1,
                CHILDREN: Xh,
                IMMEDIATE_CHILDREN: b1,
                SIBLINGS: kh,
                PARENT: T1,
                DISPLAY: ri,
                WILL_CHANGE: nr,
                AUTO: wt,
                COMMA_DELIMITER: jr,
                COLON_DELIMITER: I1,
                BAR_DELIMITER: Ga,
                RENDER_TRANSFORM: $h,
                RENDER_GENERAL: Va,
                RENDER_STYLE: Ua,
                RENDER_PLUGIN: Qh,
            } = Ce),
                ({
                    TRANSFORM_MOVE: ir,
                    TRANSFORM_SCALE: or,
                    TRANSFORM_ROTATE: ar,
                    TRANSFORM_SKEW: zr,
                    STYLE_OPACITY: Zh,
                    STYLE_FILTER: Kr,
                    STYLE_FONT_VARIATION: Yr,
                    STYLE_SIZE: sr,
                    STYLE_BACKGROUND_COLOR: ur,
                    STYLE_BORDER: cr,
                    STYLE_TEXT_COLOR: lr,
                    GENERAL_DISPLAY: oi,
                    OBJECT_VALUE: O1,
                } = Fe),
                (Jh = (e) => e.trim()),
                (Ha = Object.freeze({ [ur]: Yh, [cr]: m1, [lr]: _1 })),
                (ey = Object.freeze({
                    [Ot]: l1,
                    [Yh]: c1,
                    [ti]: ti,
                    [kr]: kr,
                    [at]: at,
                    [st]: st,
                    [Br]: Br,
                })),
                (Jn = new Map());
            S1 = 1;
            x1 = 1;
            L1 = (e, t) => e === t;
            (jh = /px/),
                (q1 = (e, t) =>
                    t.reduce(
                        (r, n) => (
                            r[n.type] == null && (r[n.type] = X1[n.type]), r
                        ),
                        e || {}
                    )),
                (M1 = (e, t) =>
                    t.reduce(
                        (r, n) => (
                            r[n.type] == null &&
                                (r[n.type] = k1[n.type] || n.defaultValue || 0),
                            r
                        ),
                        e || {}
                    ));
            (F1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
                (G1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
                (V1 = (e, t, r) => {
                    if (qt(e)) return Ca(e)(r, t);
                    switch (e) {
                        case Kr: {
                            let n = (0, ei.default)(
                                r.filters,
                                ({ type: o }) => o === t
                            );
                            return n ? n.value : 0;
                        }
                        case Yr: {
                            let n = (0, ei.default)(
                                r.fontVariations,
                                ({ type: o }) => o === t
                            );
                            return n ? n.value : 0;
                        }
                        default:
                            return r[t];
                    }
                });
            (Xa = {
                [ir]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                [or]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
                [ar]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                [zr]: Object.freeze({ xValue: 0, yValue: 0 }),
            }),
                (X1 = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100,
                })),
                (k1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
                (B1 = (e, t) => {
                    let r = (0, ei.default)(
                        t.filters,
                        ({ type: n }) => n === e
                    );
                    if (r && r.unit) return r.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%";
                    }
                }),
                (j1 = Object.keys(Xa));
            (Q1 = "\\(([^)]+)\\)"), (Z1 = /^rgb/), (J1 = RegExp(`rgba?${Q1}`));
            ny = ({ effect: e, actionTypeId: t, elementApi: r }) => (n) => {
                switch (t) {
                    case ir:
                    case or:
                    case ar:
                    case zr:
                        e(n, Ot, r);
                        break;
                    case Kr:
                        e(n, kr, r);
                        break;
                    case Yr:
                        e(n, Br, r);
                        break;
                    case Zh:
                        e(n, ti, r);
                        break;
                    case sr:
                        e(n, at, r), e(n, st, r);
                        break;
                    case ur:
                    case cr:
                    case lr:
                        e(n, Ha[t], r);
                        break;
                    case oi:
                        e(n, ri, r);
                        break;
                }
            };
        });
    var Ft = c((Pe) => {
        "use strict";
        var fr = cn().default;
        Object.defineProperty(Pe, "__esModule", { value: !0 });
        Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
        var gD = fr((Yn(), et(rh)));
        Pe.IX2BrowserSupport = gD;
        var vD = fr((Ia(), et(Wr)));
        Pe.IX2Easings = vD;
        var hD = fr((Oa(), et(ch)));
        Pe.IX2EasingUtils = hD;
        var yD = fr((ph(), et(dh)));
        Pe.IX2ElementsReducer = yD;
        var ED = fr((qa(), et(_h)));
        Pe.IX2VanillaPlugins = ED;
        var mD = fr((ay(), et(oy)));
        Pe.IX2VanillaUtils = mD;
    });
    var si,
        vt,
        _D,
        bD,
        TD,
        ID,
        OD,
        wD,
        ai,
        sy,
        SD,
        AD,
        ka,
        xD,
        CD,
        RD,
        LD,
        uy,
        cy = ye(() => {
            "use strict";
            Ge();
            (si = ce(Ft())),
                (vt = ce(zt())),
                ({
                    IX2_RAW_DATA_IMPORTED: _D,
                    IX2_SESSION_STOPPED: bD,
                    IX2_INSTANCE_ADDED: TD,
                    IX2_INSTANCE_STARTED: ID,
                    IX2_INSTANCE_REMOVED: OD,
                    IX2_ANIMATION_FRAME_CHANGED: wD,
                } = Ie),
                ({
                    optimizeFloat: ai,
                    applyEasing: sy,
                    createBezierEasing: SD,
                } = si.IX2EasingUtils),
                ({ RENDER_GENERAL: AD } = Ce),
                ({
                    getItemConfigByKey: ka,
                    getRenderType: xD,
                    getStyleProp: CD,
                } = si.IX2VanillaUtils),
                (RD = (e, t) => {
                    let {
                            position: r,
                            parameterId: n,
                            actionGroups: o,
                            destinationKeys: i,
                            smoothing: s,
                            restingValue: a,
                            actionTypeId: u,
                            customEasingFn: f,
                            skipMotion: d,
                            skipToValue: p,
                        } = e,
                        { parameters: v } = t.payload,
                        h = Math.max(1 - s, 0.01),
                        E = v[n];
                    E == null && ((h = 1), (E = a));
                    let _ = Math.max(E, 0) || 0,
                        L = ai(_ - r),
                        S = d ? p : ai(r + L * h),
                        A = S * 100;
                    if (S === r && e.current) return e;
                    let O, C, R, x;
                    for (let X = 0, { length: B } = o; X < B; X++) {
                        let { keyframe: Y, actionItems: re } = o[X];
                        if ((X === 0 && (O = re[0]), A >= Y)) {
                            O = re[0];
                            let q = o[X + 1],
                                T = q && A !== Y;
                            (C = T ? q.actionItems[0] : null),
                                T &&
                                    ((R = Y / 100),
                                    (x = (q.keyframe - Y) / 100));
                        }
                    }
                    let U = {};
                    if (O && !C)
                        for (let X = 0, { length: B } = i; X < B; X++) {
                            let Y = i[X];
                            U[Y] = ka(u, Y, O.config);
                        }
                    else if (O && C && R !== void 0 && x !== void 0) {
                        let X = (S - R) / x,
                            B = O.config.easing,
                            Y = sy(B, X, f);
                        for (let re = 0, { length: q } = i; re < q; re++) {
                            let T = i[re],
                                N = ka(u, T, O.config),
                                ee = (ka(u, T, C.config) - N) * Y + N;
                            U[T] = ee;
                        }
                    }
                    return (0, vt.merge)(e, { position: S, current: U });
                }),
                (LD = (e, t) => {
                    let {
                            active: r,
                            origin: n,
                            start: o,
                            immediate: i,
                            renderType: s,
                            verbose: a,
                            actionItem: u,
                            destination: f,
                            destinationKeys: d,
                            pluginDuration: p,
                            instanceDelay: v,
                            customEasingFn: h,
                            skipMotion: E,
                        } = e,
                        _ = u.config.easing,
                        { duration: L, delay: S } = u.config;
                    p != null && (L = p),
                        (S = v ?? S),
                        s === AD ? (L = 0) : (i || E) && (L = S = 0);
                    let { now: A } = t.payload;
                    if (r && n) {
                        let O = A - (o + S);
                        if (a) {
                            let X = A - o,
                                B = L + S,
                                Y = ai(Math.min(Math.max(0, X / B), 1));
                            e = (0, vt.set)(e, "verboseTimeElapsed", B * Y);
                        }
                        if (O < 0) return e;
                        let C = ai(Math.min(Math.max(0, O / L), 1)),
                            R = sy(_, C, h),
                            x = {},
                            U = null;
                        return (
                            d.length &&
                                (U = d.reduce((X, B) => {
                                    let Y = f[B],
                                        re = parseFloat(n[B]) || 0,
                                        T = (parseFloat(Y) - re) * R + re;
                                    return (X[B] = T), X;
                                }, {})),
                            (x.current = U),
                            (x.position = C),
                            C === 1 && ((x.active = !1), (x.complete = !0)),
                            (0, vt.merge)(e, x)
                        );
                    }
                    return e;
                }),
                (uy = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case _D:
                            return t.payload.ixInstances || Object.freeze({});
                        case bD:
                            return Object.freeze({});
                        case TD: {
                            let {
                                    instanceId: r,
                                    elementId: n,
                                    actionItem: o,
                                    eventId: i,
                                    eventTarget: s,
                                    eventStateKey: a,
                                    actionListId: u,
                                    groupIndex: f,
                                    isCarrier: d,
                                    origin: p,
                                    destination: v,
                                    immediate: h,
                                    verbose: E,
                                    continuous: _,
                                    parameterId: L,
                                    actionGroups: S,
                                    smoothing: A,
                                    restingValue: O,
                                    pluginInstance: C,
                                    pluginDuration: R,
                                    instanceDelay: x,
                                    skipMotion: U,
                                    skipToValue: X,
                                } = t.payload,
                                { actionTypeId: B } = o,
                                Y = xD(B),
                                re = CD(Y, B),
                                q = Object.keys(v).filter(
                                    (N) =>
                                        v[N] != null && typeof v[N] != "string"
                                ),
                                { easing: T } = o.config;
                            return (0, vt.set)(e, r, {
                                id: r,
                                elementId: n,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: p,
                                destination: v,
                                destinationKeys: q,
                                immediate: h,
                                verbose: E,
                                current: null,
                                actionItem: o,
                                actionTypeId: B,
                                eventId: i,
                                eventTarget: s,
                                eventStateKey: a,
                                actionListId: u,
                                groupIndex: f,
                                renderType: Y,
                                isCarrier: d,
                                styleProp: re,
                                continuous: _,
                                parameterId: L,
                                actionGroups: S,
                                smoothing: A,
                                restingValue: O,
                                pluginInstance: C,
                                pluginDuration: R,
                                instanceDelay: x,
                                skipMotion: U,
                                skipToValue: X,
                                customEasingFn:
                                    Array.isArray(T) && T.length === 4
                                        ? SD(T)
                                        : void 0,
                            });
                        }
                        case ID: {
                            let { instanceId: r, time: n } = t.payload;
                            return (0, vt.mergeIn)(e, [r], {
                                active: !0,
                                complete: !1,
                                start: n,
                            });
                        }
                        case OD: {
                            let { instanceId: r } = t.payload;
                            if (!e[r]) return e;
                            let n = {},
                                o = Object.keys(e),
                                { length: i } = o;
                            for (let s = 0; s < i; s++) {
                                let a = o[s];
                                a !== r && (n[a] = e[a]);
                            }
                            return n;
                        }
                        case wD: {
                            let r = e,
                                n = Object.keys(e),
                                { length: o } = n;
                            for (let i = 0; i < o; i++) {
                                let s = n[i],
                                    a = e[s],
                                    u = a.continuous ? RD : LD;
                                r = (0, vt.set)(r, s, u(a, t));
                            }
                            return r;
                        }
                        default:
                            return e;
                    }
                });
        });
    var ND,
        PD,
        qD,
        ly,
        fy = ye(() => {
            "use strict";
            Ge();
            ({
                IX2_RAW_DATA_IMPORTED: ND,
                IX2_SESSION_STOPPED: PD,
                IX2_PARAMETER_CHANGED: qD,
            } = Ie),
                (ly = (e = {}, t) => {
                    switch (t.type) {
                        case ND:
                            return t.payload.ixParameters || {};
                        case PD:
                            return {};
                        case qD: {
                            let { key: r, value: n } = t.payload;
                            return (e[r] = n), e;
                        }
                        default:
                            return e;
                    }
                });
        });
    var gy = {};
    De(gy, { default: () => DD });
    var dy,
        py,
        MD,
        DD,
        vy = ye(() => {
            "use strict";
            dy = ce(Wo());
            Af();
            Kf();
            Qf();
            py = ce(Ft());
            cy();
            fy();
            ({ ixElements: MD } = py.IX2ElementsReducer),
                (DD = (0, dy.combineReducers)({
                    ixData: Sf,
                    ixRequest: zf,
                    ixSession: $f,
                    ixElements: MD,
                    ixInstances: uy,
                    ixParameters: ly,
                }));
        });
    var yy = c((DB, hy) => {
        var FD = bt(),
            GD = we(),
            VD = dt(),
            UD = "[object String]";
        function HD(e) {
            return typeof e == "string" || (!GD(e) && VD(e) && FD(e) == UD);
        }
        hy.exports = HD;
    });
    var my = c((FB, Ey) => {
        var WD = ha(),
            XD = WD("length");
        Ey.exports = XD;
    });
    var by = c((GB, _y) => {
        var kD = "\\ud800-\\udfff",
            BD = "\\u0300-\\u036f",
            jD = "\\ufe20-\\ufe2f",
            zD = "\\u20d0-\\u20ff",
            KD = BD + jD + zD,
            YD = "\\ufe0e\\ufe0f",
            $D = "\\u200d",
            QD = RegExp("[" + $D + kD + KD + YD + "]");
        function ZD(e) {
            return QD.test(e);
        }
        _y.exports = ZD;
    });
    var Ry = c((VB, Cy) => {
        var Iy = "\\ud800-\\udfff",
            JD = "\\u0300-\\u036f",
            e2 = "\\ufe20-\\ufe2f",
            t2 = "\\u20d0-\\u20ff",
            r2 = JD + e2 + t2,
            n2 = "\\ufe0e\\ufe0f",
            i2 = "[" + Iy + "]",
            Ba = "[" + r2 + "]",
            ja = "\\ud83c[\\udffb-\\udfff]",
            o2 = "(?:" + Ba + "|" + ja + ")",
            Oy = "[^" + Iy + "]",
            wy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Sy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            a2 = "\\u200d",
            Ay = o2 + "?",
            xy = "[" + n2 + "]?",
            s2 =
                "(?:" +
                a2 +
                "(?:" +
                [Oy, wy, Sy].join("|") +
                ")" +
                xy +
                Ay +
                ")*",
            u2 = xy + Ay + s2,
            c2 = "(?:" + [Oy + Ba + "?", Ba, wy, Sy, i2].join("|") + ")",
            Ty = RegExp(ja + "(?=" + ja + ")|" + c2 + u2, "g");
        function l2(e) {
            for (var t = (Ty.lastIndex = 0); Ty.test(e); ) ++t;
            return t;
        }
        Cy.exports = l2;
    });
    var Ny = c((UB, Ly) => {
        var f2 = my(),
            d2 = by(),
            p2 = Ry();
        function g2(e) {
            return d2(e) ? p2(e) : f2(e);
        }
        Ly.exports = g2;
    });
    var qy = c((HB, Py) => {
        var v2 = Vn(),
            h2 = Un(),
            y2 = Nt(),
            E2 = yy(),
            m2 = Ny(),
            _2 = "[object Map]",
            b2 = "[object Set]";
        function T2(e) {
            if (e == null) return 0;
            if (y2(e)) return E2(e) ? m2(e) : e.length;
            var t = h2(e);
            return t == _2 || t == b2 ? e.size : v2(e).length;
        }
        Py.exports = T2;
    });
    var Dy = c((WB, My) => {
        var I2 = "Expected a function";
        function O2(e) {
            if (typeof e != "function") throw new TypeError(I2);
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2]);
                }
                return !e.apply(this, t);
            };
        }
        My.exports = O2;
    });
    var za = c((XB, Fy) => {
        var w2 = Tt(),
            S2 = (function () {
                try {
                    var e = w2(Object, "defineProperty");
                    return e({}, "", {}), e;
                } catch {}
            })();
        Fy.exports = S2;
    });
    var Ka = c((kB, Vy) => {
        var Gy = za();
        function A2(e, t, r) {
            t == "__proto__" && Gy
                ? Gy(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                      writable: !0,
                  })
                : (e[t] = r);
        }
        Vy.exports = A2;
    });
    var Hy = c((BB, Uy) => {
        var x2 = Ka(),
            C2 = Cn(),
            R2 = Object.prototype,
            L2 = R2.hasOwnProperty;
        function N2(e, t, r) {
            var n = e[t];
            (!(L2.call(e, t) && C2(n, r)) || (r === void 0 && !(t in e))) &&
                x2(e, t, r);
        }
        Uy.exports = N2;
    });
    var ky = c((jB, Xy) => {
        var P2 = Hy(),
            q2 = Vr(),
            M2 = Mn(),
            Wy = ot(),
            D2 = tr();
        function F2(e, t, r, n) {
            if (!Wy(e)) return e;
            t = q2(t, e);
            for (
                var o = -1, i = t.length, s = i - 1, a = e;
                a != null && ++o < i;

            ) {
                var u = D2(t[o]),
                    f = r;
                if (
                    u === "__proto__" ||
                    u === "constructor" ||
                    u === "prototype"
                )
                    return e;
                if (o != s) {
                    var d = a[u];
                    (f = n ? n(d, u, a) : void 0),
                        f === void 0 &&
                            (f = Wy(d) ? d : M2(t[o + 1]) ? [] : {});
                }
                P2(a, u, f), (a = a[u]);
            }
            return e;
        }
        Xy.exports = F2;
    });
    var jy = c((zB, By) => {
        var G2 = Xn(),
            V2 = ky(),
            U2 = Vr();
        function H2(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var s = t[n],
                    a = G2(e, s);
                r(a, s) && V2(i, U2(s, e), a);
            }
            return i;
        }
        By.exports = H2;
    });
    var Ky = c((KB, zy) => {
        var W2 = Pn(),
            X2 = Co(),
            k2 = ta(),
            B2 = ea(),
            j2 = Object.getOwnPropertySymbols,
            z2 = j2
                ? function (e) {
                      for (var t = []; e; ) W2(t, k2(e)), (e = X2(e));
                      return t;
                  }
                : B2;
        zy.exports = z2;
    });
    var $y = c((YB, Yy) => {
        function K2(e) {
            var t = [];
            if (e != null) for (var r in Object(e)) t.push(r);
            return t;
        }
        Yy.exports = K2;
    });
    var Zy = c(($B, Qy) => {
        var Y2 = ot(),
            $2 = Gn(),
            Q2 = $y(),
            Z2 = Object.prototype,
            J2 = Z2.hasOwnProperty;
        function eF(e) {
            if (!Y2(e)) return Q2(e);
            var t = $2(e),
                r = [];
            for (var n in e)
                (n == "constructor" && (t || !J2.call(e, n))) || r.push(n);
            return r;
        }
        Qy.exports = eF;
    });
    var eE = c((QB, Jy) => {
        var tF = na(),
            rF = Zy(),
            nF = Nt();
        function iF(e) {
            return nF(e) ? tF(e, !0) : rF(e);
        }
        Jy.exports = iF;
    });
    var rE = c((ZB, tE) => {
        var oF = Jo(),
            aF = Ky(),
            sF = eE();
        function uF(e) {
            return oF(e, sF, aF);
        }
        tE.exports = uF;
    });
    var iE = c((JB, nE) => {
        var cF = va(),
            lF = It(),
            fF = jy(),
            dF = rE();
        function pF(e, t) {
            if (e == null) return {};
            var r = cF(dF(e), function (n) {
                return [n];
            });
            return (
                (t = lF(t)),
                fF(e, r, function (n, o) {
                    return t(n, o[0]);
                })
            );
        }
        nE.exports = pF;
    });
    var aE = c((ej, oE) => {
        var gF = It(),
            vF = Dy(),
            hF = iE();
        function yF(e, t) {
            return hF(e, vF(gF(t)));
        }
        oE.exports = yF;
    });
    var uE = c((tj, sE) => {
        var EF = Vn(),
            mF = Un(),
            _F = Pr(),
            bF = we(),
            TF = Nt(),
            IF = qn(),
            OF = Gn(),
            wF = Fn(),
            SF = "[object Map]",
            AF = "[object Set]",
            xF = Object.prototype,
            CF = xF.hasOwnProperty;
        function RF(e) {
            if (e == null) return !0;
            if (
                TF(e) &&
                (bF(e) ||
                    typeof e == "string" ||
                    typeof e.splice == "function" ||
                    IF(e) ||
                    wF(e) ||
                    _F(e))
            )
                return !e.length;
            var t = mF(e);
            if (t == SF || t == AF) return !e.size;
            if (OF(e)) return !EF(e).length;
            for (var r in e) if (CF.call(e, r)) return !1;
            return !0;
        }
        sE.exports = RF;
    });
    var lE = c((rj, cE) => {
        var LF = Ka(),
            NF = Ma(),
            PF = It();
        function qF(e, t) {
            var r = {};
            return (
                (t = PF(t, 3)),
                NF(e, function (n, o, i) {
                    LF(r, o, t(n, o, i));
                }),
                r
            );
        }
        cE.exports = qF;
    });
    var dE = c((nj, fE) => {
        function MF(e, t) {
            for (
                var r = -1, n = e == null ? 0 : e.length;
                ++r < n && t(e[r], r, e) !== !1;

            );
            return e;
        }
        fE.exports = MF;
    });
    var gE = c((ij, pE) => {
        var DF = Bn();
        function FF(e) {
            return typeof e == "function" ? e : DF;
        }
        pE.exports = FF;
    });
    var hE = c((oj, vE) => {
        var GF = dE(),
            VF = Da(),
            UF = gE(),
            HF = we();
        function WF(e, t) {
            var r = HF(e) ? GF : VF;
            return r(e, UF(t));
        }
        vE.exports = WF;
    });
    var EE = c((aj, yE) => {
        var XF = Ye(),
            kF = function () {
                return XF.Date.now();
            };
        yE.exports = kF;
    });
    var bE = c((sj, _E) => {
        var BF = ot(),
            Ya = EE(),
            mE = jn(),
            jF = "Expected a function",
            zF = Math.max,
            KF = Math.min;
        function YF(e, t, r) {
            var n,
                o,
                i,
                s,
                a,
                u,
                f = 0,
                d = !1,
                p = !1,
                v = !0;
            if (typeof e != "function") throw new TypeError(jF);
            (t = mE(t) || 0),
                BF(r) &&
                    ((d = !!r.leading),
                    (p = "maxWait" in r),
                    (i = p ? zF(mE(r.maxWait) || 0, t) : i),
                    (v = "trailing" in r ? !!r.trailing : v));
            function h(x) {
                var U = n,
                    X = o;
                return (n = o = void 0), (f = x), (s = e.apply(X, U)), s;
            }
            function E(x) {
                return (f = x), (a = setTimeout(S, t)), d ? h(x) : s;
            }
            function _(x) {
                var U = x - u,
                    X = x - f,
                    B = t - U;
                return p ? KF(B, i - X) : B;
            }
            function L(x) {
                var U = x - u,
                    X = x - f;
                return u === void 0 || U >= t || U < 0 || (p && X >= i);
            }
            function S() {
                var x = Ya();
                if (L(x)) return A(x);
                a = setTimeout(S, _(x));
            }
            function A(x) {
                return (a = void 0), v && n ? h(x) : ((n = o = void 0), s);
            }
            function O() {
                a !== void 0 && clearTimeout(a),
                    (f = 0),
                    (n = u = o = a = void 0);
            }
            function C() {
                return a === void 0 ? s : A(Ya());
            }
            function R() {
                var x = Ya(),
                    U = L(x);
                if (((n = arguments), (o = this), (u = x), U)) {
                    if (a === void 0) return E(u);
                    if (p) return clearTimeout(a), (a = setTimeout(S, t)), h(u);
                }
                return a === void 0 && (a = setTimeout(S, t)), s;
            }
            return (R.cancel = O), (R.flush = C), R;
        }
        _E.exports = YF;
    });
    var IE = c((uj, TE) => {
        var $F = bE(),
            QF = ot(),
            ZF = "Expected a function";
        function JF(e, t, r) {
            var n = !0,
                o = !0;
            if (typeof e != "function") throw new TypeError(ZF);
            return (
                QF(r) &&
                    ((n = "leading" in r ? !!r.leading : n),
                    (o = "trailing" in r ? !!r.trailing : o)),
                $F(e, t, { leading: n, maxWait: t, trailing: o })
            );
        }
        TE.exports = JF;
    });
    var wE = {};
    De(wE, {
        actionListPlaybackChanged: () => pr,
        animationFrameChanged: () => ci,
        clearRequested: () => OG,
        elementStateChanged: () => ns,
        eventListenerAdded: () => ui,
        eventStateChanged: () => es,
        instanceAdded: () => ts,
        instanceRemoved: () => rs,
        instanceStarted: () => li,
        mediaQueriesDefined: () => os,
        parameterChanged: () => dr,
        playbackRequested: () => TG,
        previewRequested: () => bG,
        rawDataImported: () => $a,
        sessionInitialized: () => Qa,
        sessionStarted: () => Za,
        sessionStopped: () => Ja,
        stopRequested: () => IG,
        testFrameRendered: () => wG,
        viewportWidthChanged: () => is,
    });
    var OE,
        eG,
        tG,
        rG,
        nG,
        iG,
        oG,
        aG,
        sG,
        uG,
        cG,
        lG,
        fG,
        dG,
        pG,
        gG,
        vG,
        hG,
        yG,
        EG,
        mG,
        _G,
        $a,
        Qa,
        Za,
        Ja,
        bG,
        TG,
        IG,
        OG,
        ui,
        wG,
        es,
        ci,
        dr,
        ts,
        li,
        rs,
        ns,
        pr,
        is,
        os,
        fi = ye(() => {
            "use strict";
            Ge();
            (OE = ce(Ft())),
                ({
                    IX2_RAW_DATA_IMPORTED: eG,
                    IX2_SESSION_INITIALIZED: tG,
                    IX2_SESSION_STARTED: rG,
                    IX2_SESSION_STOPPED: nG,
                    IX2_PREVIEW_REQUESTED: iG,
                    IX2_PLAYBACK_REQUESTED: oG,
                    IX2_STOP_REQUESTED: aG,
                    IX2_CLEAR_REQUESTED: sG,
                    IX2_EVENT_LISTENER_ADDED: uG,
                    IX2_TEST_FRAME_RENDERED: cG,
                    IX2_EVENT_STATE_CHANGED: lG,
                    IX2_ANIMATION_FRAME_CHANGED: fG,
                    IX2_PARAMETER_CHANGED: dG,
                    IX2_INSTANCE_ADDED: pG,
                    IX2_INSTANCE_STARTED: gG,
                    IX2_INSTANCE_REMOVED: vG,
                    IX2_ELEMENT_STATE_CHANGED: hG,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: yG,
                    IX2_VIEWPORT_WIDTH_CHANGED: EG,
                    IX2_MEDIA_QUERIES_DEFINED: mG,
                } = Ie),
                ({ reifyState: _G } = OE.IX2VanillaUtils),
                ($a = (e) => ({ type: eG, payload: { ..._G(e) } })),
                (Qa = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
                    type: tG,
                    payload: { hasBoundaryNodes: e, reducedMotion: t },
                })),
                (Za = () => ({ type: rG })),
                (Ja = () => ({ type: nG })),
                (bG = ({ rawData: e, defer: t }) => ({
                    type: iG,
                    payload: { defer: t, rawData: e },
                })),
                (TG = ({
                    actionTypeId: e = Fe.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: r,
                    eventId: n,
                    allowEvents: o,
                    immediate: i,
                    testManual: s,
                    verbose: a,
                    rawData: u,
                }) => ({
                    type: oG,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: r,
                        testManual: s,
                        eventId: n,
                        allowEvents: o,
                        immediate: i,
                        verbose: a,
                        rawData: u,
                    },
                })),
                (IG = (e) => ({ type: aG, payload: { actionListId: e } })),
                (OG = () => ({ type: sG })),
                (ui = (e, t) => ({
                    type: uG,
                    payload: { target: e, listenerParams: t },
                })),
                (wG = (e = 1) => ({ type: cG, payload: { step: e } })),
                (es = (e, t) => ({
                    type: lG,
                    payload: { stateKey: e, newState: t },
                })),
                (ci = (e, t) => ({
                    type: fG,
                    payload: { now: e, parameters: t },
                })),
                (dr = (e, t) => ({ type: dG, payload: { key: e, value: t } })),
                (ts = (e) => ({ type: pG, payload: { ...e } })),
                (li = (e, t) => ({
                    type: gG,
                    payload: { instanceId: e, time: t },
                })),
                (rs = (e) => ({ type: vG, payload: { instanceId: e } })),
                (ns = (e, t, r, n) => ({
                    type: hG,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: r,
                        actionItem: n,
                    },
                })),
                (pr = ({ actionListId: e, isPlaying: t }) => ({
                    type: yG,
                    payload: { actionListId: e, isPlaying: t },
                })),
                (is = ({ width: e, mediaQueries: t }) => ({
                    type: EG,
                    payload: { width: e, mediaQueries: t },
                })),
                (os = () => ({ type: mG }));
        });
    var qe = {};
    De(qe, {
        elementContains: () => us,
        getChildElements: () => MG,
        getClosestElement: () => $r,
        getProperty: () => RG,
        getQuerySelector: () => ss,
        getRefType: () => cs,
        getSiblingElements: () => DG,
        getStyle: () => CG,
        getValidDocument: () => NG,
        isSiblingNode: () => qG,
        matchSelector: () => LG,
        queryDocument: () => PG,
        setStyle: () => xG,
    });
    function xG(e, t, r) {
        e.style[t] = r;
    }
    function CG(e, t) {
        return e.style[t];
    }
    function RG(e, t) {
        return e[t];
    }
    function LG(e) {
        return (t) => t[as](e);
    }
    function ss({ id: e, selector: t }) {
        if (e) {
            let r = e;
            if (e.indexOf(SE) !== -1) {
                let n = e.split(SE),
                    o = n[0];
                if (
                    ((r = n[1]),
                    o !== document.documentElement.getAttribute(xE))
                )
                    return null;
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
        }
        return t;
    }
    function NG(e) {
        return e == null || e === document.documentElement.getAttribute(xE)
            ? document
            : null;
    }
    function PG(e, t) {
        return Array.prototype.slice.call(
            document.querySelectorAll(t ? e + " " + t : e)
        );
    }
    function us(e, t) {
        return e.contains(t);
    }
    function qG(e, t) {
        return e !== t && e.parentNode === t.parentNode;
    }
    function MG(e) {
        let t = [];
        for (let r = 0, { length: n } = e || []; r < n; r++) {
            let { children: o } = e[r],
                { length: i } = o;
            if (i) for (let s = 0; s < i; s++) t.push(o[s]);
        }
        return t;
    }
    function DG(e = []) {
        let t = [],
            r = [];
        for (let n = 0, { length: o } = e; n < o; n++) {
            let { parentNode: i } = e[n];
            if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
                continue;
            r.push(i);
            let s = i.firstElementChild;
            for (; s != null; )
                e.indexOf(s) === -1 && t.push(s), (s = s.nextElementSibling);
        }
        return t;
    }
    function cs(e) {
        return e != null && typeof e == "object"
            ? e instanceof Element
                ? SG
                : AG
            : null;
    }
    var AE,
        as,
        SE,
        SG,
        AG,
        xE,
        $r,
        CE = ye(() => {
            "use strict";
            AE = ce(Ft());
            Ge();
            ({ ELEMENT_MATCHES: as } = AE.IX2BrowserSupport),
                ({
                    IX2_ID_DELIMITER: SE,
                    HTML_ELEMENT: SG,
                    PLAIN_OBJECT: AG,
                    WF_PAGE: xE,
                } = Ce);
            $r = Element.prototype.closest
                ? (e, t) =>
                      document.documentElement.contains(e) ? e.closest(t) : null
                : (e, t) => {
                      if (!document.documentElement.contains(e)) return null;
                      let r = e;
                      do {
                          if (r[as] && r[as](t)) return r;
                          r = r.parentNode;
                      } while (r != null);
                      return null;
                  };
        });
    var ls = c((fj, LE) => {
        var FG = ot(),
            RE = Object.create,
            GG = (function () {
                function e() {}
                return function (t) {
                    if (!FG(t)) return {};
                    if (RE) return RE(t);
                    e.prototype = t;
                    var r = new e();
                    return (e.prototype = void 0), r;
                };
            })();
        LE.exports = GG;
    });
    var di = c((dj, NE) => {
        function VG() {}
        NE.exports = VG;
    });
    var gi = c((pj, PE) => {
        var UG = ls(),
            HG = di();
        function pi(e, t) {
            (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = void 0);
        }
        pi.prototype = UG(HG.prototype);
        pi.prototype.constructor = pi;
        PE.exports = pi;
    });
    var FE = c((gj, DE) => {
        var qE = kt(),
            WG = Pr(),
            XG = we(),
            ME = qE ? qE.isConcatSpreadable : void 0;
        function kG(e) {
            return XG(e) || WG(e) || !!(ME && e && e[ME]);
        }
        DE.exports = kG;
    });
    var UE = c((vj, VE) => {
        var BG = Pn(),
            jG = FE();
        function GE(e, t, r, n, o) {
            var i = -1,
                s = e.length;
            for (r || (r = jG), o || (o = []); ++i < s; ) {
                var a = e[i];
                t > 0 && r(a)
                    ? t > 1
                        ? GE(a, t - 1, r, n, o)
                        : BG(o, a)
                    : n || (o[o.length] = a);
            }
            return o;
        }
        VE.exports = GE;
    });
    var WE = c((hj, HE) => {
        var zG = UE();
        function KG(e) {
            var t = e == null ? 0 : e.length;
            return t ? zG(e, 1) : [];
        }
        HE.exports = KG;
    });
    var kE = c((yj, XE) => {
        function YG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
        }
        XE.exports = YG;
    });
    var zE = c((Ej, jE) => {
        var $G = kE(),
            BE = Math.max;
        function QG(e, t, r) {
            return (
                (t = BE(t === void 0 ? e.length - 1 : t, 0)),
                function () {
                    for (
                        var n = arguments,
                            o = -1,
                            i = BE(n.length - t, 0),
                            s = Array(i);
                        ++o < i;

                    )
                        s[o] = n[t + o];
                    o = -1;
                    for (var a = Array(t + 1); ++o < t; ) a[o] = n[o];
                    return (a[t] = r(s)), $G(e, this, a);
                }
            );
        }
        jE.exports = QG;
    });
    var YE = c((mj, KE) => {
        function ZG(e) {
            return function () {
                return e;
            };
        }
        KE.exports = ZG;
    });
    var ZE = c((_j, QE) => {
        var JG = YE(),
            $E = za(),
            eV = Bn(),
            tV = $E
                ? function (e, t) {
                      return $E(e, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: JG(t),
                          writable: !0,
                      });
                  }
                : eV;
        QE.exports = tV;
    });
    var em = c((bj, JE) => {
        var rV = 800,
            nV = 16,
            iV = Date.now;
        function oV(e) {
            var t = 0,
                r = 0;
            return function () {
                var n = iV(),
                    o = nV - (n - r);
                if (((r = n), o > 0)) {
                    if (++t >= rV) return arguments[0];
                } else t = 0;
                return e.apply(void 0, arguments);
            };
        }
        JE.exports = oV;
    });
    var rm = c((Tj, tm) => {
        var aV = ZE(),
            sV = em(),
            uV = sV(aV);
        tm.exports = uV;
    });
    var im = c((Ij, nm) => {
        var cV = WE(),
            lV = zE(),
            fV = rm();
        function dV(e) {
            return fV(lV(e, void 0, cV), e + "");
        }
        nm.exports = dV;
    });
    var sm = c((Oj, am) => {
        var om = ia(),
            pV = om && new om();
        am.exports = pV;
    });
    var cm = c((wj, um) => {
        function gV() {}
        um.exports = gV;
    });
    var fs = c((Sj, fm) => {
        var lm = sm(),
            vV = cm(),
            hV = lm
                ? function (e) {
                      return lm.get(e);
                  }
                : vV;
        fm.exports = hV;
    });
    var pm = c((Aj, dm) => {
        var yV = {};
        dm.exports = yV;
    });
    var ds = c((xj, vm) => {
        var gm = pm(),
            EV = Object.prototype,
            mV = EV.hasOwnProperty;
        function _V(e) {
            for (
                var t = e.name + "",
                    r = gm[t],
                    n = mV.call(gm, t) ? r.length : 0;
                n--;

            ) {
                var o = r[n],
                    i = o.func;
                if (i == null || i == e) return o.name;
            }
            return t;
        }
        vm.exports = _V;
    });
    var hi = c((Cj, hm) => {
        var bV = ls(),
            TV = di(),
            IV = 4294967295;
        function vi(e) {
            (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = IV),
                (this.__views__ = []);
        }
        vi.prototype = bV(TV.prototype);
        vi.prototype.constructor = vi;
        hm.exports = vi;
    });
    var Em = c((Rj, ym) => {
        function OV(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
            return t;
        }
        ym.exports = OV;
    });
    var _m = c((Lj, mm) => {
        var wV = hi(),
            SV = gi(),
            AV = Em();
        function xV(e) {
            if (e instanceof wV) return e.clone();
            var t = new SV(e.__wrapped__, e.__chain__);
            return (
                (t.__actions__ = AV(e.__actions__)),
                (t.__index__ = e.__index__),
                (t.__values__ = e.__values__),
                t
            );
        }
        mm.exports = xV;
    });
    var Im = c((Nj, Tm) => {
        var CV = hi(),
            bm = gi(),
            RV = di(),
            LV = we(),
            NV = dt(),
            PV = _m(),
            qV = Object.prototype,
            MV = qV.hasOwnProperty;
        function yi(e) {
            if (NV(e) && !LV(e) && !(e instanceof CV)) {
                if (e instanceof bm) return e;
                if (MV.call(e, "__wrapped__")) return PV(e);
            }
            return new bm(e);
        }
        yi.prototype = RV.prototype;
        yi.prototype.constructor = yi;
        Tm.exports = yi;
    });
    var wm = c((Pj, Om) => {
        var DV = hi(),
            FV = fs(),
            GV = ds(),
            VV = Im();
        function UV(e) {
            var t = GV(e),
                r = VV[t];
            if (typeof r != "function" || !(t in DV.prototype)) return !1;
            if (e === r) return !0;
            var n = FV(r);
            return !!n && e === n[0];
        }
        Om.exports = UV;
    });
    var Cm = c((qj, xm) => {
        var Sm = gi(),
            HV = im(),
            WV = fs(),
            ps = ds(),
            XV = we(),
            Am = wm(),
            kV = "Expected a function",
            BV = 8,
            jV = 32,
            zV = 128,
            KV = 256;
        function YV(e) {
            return HV(function (t) {
                var r = t.length,
                    n = r,
                    o = Sm.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function") throw new TypeError(kV);
                    if (o && !s && ps(i) == "wrapper") var s = new Sm([], !0);
                }
                for (n = s ? n : r; ++n < r; ) {
                    i = t[n];
                    var a = ps(i),
                        u = a == "wrapper" ? WV(i) : void 0;
                    u &&
                    Am(u[0]) &&
                    u[1] == (zV | BV | jV | KV) &&
                    !u[4].length &&
                    u[9] == 1
                        ? (s = s[ps(u[0])].apply(s, u[3]))
                        : (s = i.length == 1 && Am(i) ? s[a]() : s.thru(i));
                }
                return function () {
                    var f = arguments,
                        d = f[0];
                    if (s && f.length == 1 && XV(d)) return s.plant(d).value();
                    for (var p = 0, v = r ? t[p].apply(this, f) : d; ++p < r; )
                        v = t[p].call(this, v);
                    return v;
                };
            });
        }
        xm.exports = YV;
    });
    var Lm = c((Mj, Rm) => {
        var $V = Cm(),
            QV = $V();
        Rm.exports = QV;
    });
    var Pm = c((Dj, Nm) => {
        function ZV(e, t, r) {
            return (
                e === e &&
                    (r !== void 0 && (e = e <= r ? e : r),
                    t !== void 0 && (e = e >= t ? e : t)),
                e
            );
        }
        Nm.exports = ZV;
    });
    var Mm = c((Fj, qm) => {
        var JV = Pm(),
            gs = jn();
        function eU(e, t, r) {
            return (
                r === void 0 && ((r = t), (t = void 0)),
                r !== void 0 && ((r = gs(r)), (r = r === r ? r : 0)),
                t !== void 0 && ((t = gs(t)), (t = t === t ? t : 0)),
                JV(gs(e), t, r)
            );
        }
        qm.exports = eU;
    });
    var km,
        Bm,
        jm,
        zm,
        tU,
        rU,
        nU,
        iU,
        oU,
        aU,
        sU,
        uU,
        cU,
        lU,
        fU,
        dU,
        pU,
        gU,
        vU,
        Km,
        Ym,
        hU,
        yU,
        EU,
        $m,
        mU,
        _U,
        Qm,
        bU,
        vs,
        Zm,
        Dm,
        Fm,
        Jm,
        Zr,
        TU,
        ut,
        e_,
        IU,
        Ue,
        Ze,
        Jr,
        t_,
        hs,
        Gm,
        ys,
        OU,
        Qr,
        wU,
        SU,
        AU,
        r_,
        Vm,
        xU,
        Um,
        CU,
        RU,
        LU,
        Hm,
        Ei,
        mi,
        Wm,
        Xm,
        n_,
        i_ = ye(() => {
            "use strict";
            (km = ce(Lm())), (Bm = ce(kn())), (jm = ce(Mm()));
            Ge();
            Es();
            fi();
            (zm = ce(Ft())),
                ({
                    MOUSE_CLICK: tU,
                    MOUSE_SECOND_CLICK: rU,
                    MOUSE_DOWN: nU,
                    MOUSE_UP: iU,
                    MOUSE_OVER: oU,
                    MOUSE_OUT: aU,
                    DROPDOWN_CLOSE: sU,
                    DROPDOWN_OPEN: uU,
                    SLIDER_ACTIVE: cU,
                    SLIDER_INACTIVE: lU,
                    TAB_ACTIVE: fU,
                    TAB_INACTIVE: dU,
                    NAVBAR_CLOSE: pU,
                    NAVBAR_OPEN: gU,
                    MOUSE_MOVE: vU,
                    PAGE_SCROLL_DOWN: Km,
                    SCROLL_INTO_VIEW: Ym,
                    SCROLL_OUT_OF_VIEW: hU,
                    PAGE_SCROLL_UP: yU,
                    SCROLLING_IN_VIEW: EU,
                    PAGE_FINISH: $m,
                    ECOMMERCE_CART_CLOSE: mU,
                    ECOMMERCE_CART_OPEN: _U,
                    PAGE_START: Qm,
                    PAGE_SCROLL: bU,
                } = $e),
                (vs = "COMPONENT_ACTIVE"),
                (Zm = "COMPONENT_INACTIVE"),
                ({ COLON_DELIMITER: Dm } = Ce),
                ({ getNamespacedParameterId: Fm } = zm.IX2VanillaUtils),
                (Jm = (e) => (t) => (typeof t == "object" && e(t) ? !0 : t)),
                (Zr = Jm(({ element: e, nativeEvent: t }) => e === t.target)),
                (TU = Jm(({ element: e, nativeEvent: t }) =>
                    e.contains(t.target)
                )),
                (ut = (0, km.default)([Zr, TU])),
                (e_ = (e, t) => {
                    if (t) {
                        let { ixData: r } = e.getState(),
                            { events: n } = r,
                            o = n[t];
                        if (o && !OU[o.eventTypeId]) return o;
                    }
                    return null;
                }),
                (IU = ({ store: e, event: t }) => {
                    let { action: r } = t,
                        { autoStopEventId: n } = r.config;
                    return !!e_(e, n);
                }),
                (Ue = (
                    { store: e, event: t, element: r, eventStateKey: n },
                    o
                ) => {
                    let { action: i, id: s } = t,
                        { actionListId: a, autoStopEventId: u } = i.config,
                        f = e_(e, u);
                    return (
                        f &&
                            gr({
                                store: e,
                                eventId: u,
                                eventTarget: r,
                                eventStateKey: u + Dm + n.split(Dm)[1],
                                actionListId: (0, Bm.default)(
                                    f,
                                    "action.config.actionListId"
                                ),
                            }),
                        gr({
                            store: e,
                            eventId: s,
                            eventTarget: r,
                            eventStateKey: n,
                            actionListId: a,
                        }),
                        en({
                            store: e,
                            eventId: s,
                            eventTarget: r,
                            eventStateKey: n,
                            actionListId: a,
                        }),
                        o
                    );
                }),
                (Ze = (e, t) => (r, n) => (e(r, n) === !0 ? t(r, n) : n)),
                (Jr = { handler: Ze(ut, Ue) }),
                (t_ = { ...Jr, types: [vs, Zm].join(" ") }),
                (hs = [
                    {
                        target: window,
                        types: "resize orientationchange",
                        throttle: !0,
                    },
                    {
                        target: document,
                        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                        throttle: !0,
                    },
                ]),
                (Gm = "mouseover mouseout"),
                (ys = { types: hs }),
                (OU = { PAGE_START: Qm, PAGE_FINISH: $m }),
                (Qr = (() => {
                    let e = window.pageXOffset !== void 0,
                        r =
                            document.compatMode === "CSS1Compat"
                                ? document.documentElement
                                : document.body;
                    return () => ({
                        scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                        scrollTop: e ? window.pageYOffset : r.scrollTop,
                        stiffScrollTop: (0, jm.default)(
                            e ? window.pageYOffset : r.scrollTop,
                            0,
                            r.scrollHeight - window.innerHeight
                        ),
                        scrollWidth: r.scrollWidth,
                        scrollHeight: r.scrollHeight,
                        clientWidth: r.clientWidth,
                        clientHeight: r.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight,
                    });
                })()),
                (wU = (e, t) =>
                    !(
                        e.left > t.right ||
                        e.right < t.left ||
                        e.top > t.bottom ||
                        e.bottom < t.top
                    )),
                (SU = ({ element: e, nativeEvent: t }) => {
                    let { type: r, target: n, relatedTarget: o } = t,
                        i = e.contains(n);
                    if (r === "mouseover" && i) return !0;
                    let s = e.contains(o);
                    return !!(r === "mouseout" && i && s);
                }),
                (AU = (e) => {
                    let {
                            element: t,
                            event: { config: r },
                        } = e,
                        { clientWidth: n, clientHeight: o } = Qr(),
                        i = r.scrollOffsetValue,
                        u =
                            r.scrollOffsetUnit === "PX"
                                ? i
                                : (o * (i || 0)) / 100;
                    return wU(t.getBoundingClientRect(), {
                        left: 0,
                        top: u,
                        right: n,
                        bottom: o - u,
                    });
                }),
                (r_ = (e) => (t, r) => {
                    let { type: n } = t.nativeEvent,
                        o = [vs, Zm].indexOf(n) !== -1 ? n === vs : r.isActive,
                        i = { ...r, isActive: o };
                    return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
                }),
                (Vm = (e) => (t, r) => {
                    let n = { elementHovered: SU(t) };
                    return (
                        ((r
                            ? n.elementHovered !== r.elementHovered
                            : n.elementHovered) &&
                            e(t, n)) ||
                        n
                    );
                }),
                (xU = (e) => (t, r) => {
                    let n = { ...r, elementVisible: AU(t) };
                    return (
                        ((r
                            ? n.elementVisible !== r.elementVisible
                            : n.elementVisible) &&
                            e(t, n)) ||
                        n
                    );
                }),
                (Um = (e) => (t, r = {}) => {
                    let {
                            stiffScrollTop: n,
                            scrollHeight: o,
                            innerHeight: i,
                        } = Qr(),
                        {
                            event: { config: s, eventTypeId: a },
                        } = t,
                        { scrollOffsetValue: u, scrollOffsetUnit: f } = s,
                        d = f === "PX",
                        p = o - i,
                        v = Number((n / p).toFixed(2));
                    if (r && r.percentTop === v) return r;
                    let h = (d ? u : (i * (u || 0)) / 100) / p,
                        E,
                        _,
                        L = 0;
                    r &&
                        ((E = v > r.percentTop),
                        (_ = r.scrollingDown !== E),
                        (L = _ ? v : r.anchorTop));
                    let S = a === Km ? v >= L + h : v <= L - h,
                        A = {
                            ...r,
                            percentTop: v,
                            inBounds: S,
                            anchorTop: L,
                            scrollingDown: E,
                        };
                    return (
                        (r &&
                            S &&
                            (_ || A.inBounds !== r.inBounds) &&
                            e(t, A)) ||
                        A
                    );
                }),
                (CU = (e, t) =>
                    e.left > t.left &&
                    e.left < t.right &&
                    e.top > t.top &&
                    e.top < t.bottom),
                (RU = (e) => (t, r) => {
                    let n = { finished: document.readyState === "complete" };
                    return n.finished && !(r && r.finshed) && e(t), n;
                }),
                (LU = (e) => (t, r) => {
                    let n = { started: !0 };
                    return r || e(t), n;
                }),
                (Hm = (e) => (t, r = { clickCount: 0 }) => {
                    let n = { clickCount: (r.clickCount % 2) + 1 };
                    return (n.clickCount !== r.clickCount && e(t, n)) || n;
                }),
                (Ei = (e = !0) => ({
                    ...t_,
                    handler: Ze(
                        e ? ut : Zr,
                        r_((t, r) => (r.isActive ? Jr.handler(t, r) : r))
                    ),
                })),
                (mi = (e = !0) => ({
                    ...t_,
                    handler: Ze(
                        e ? ut : Zr,
                        r_((t, r) => (r.isActive ? r : Jr.handler(t, r)))
                    ),
                })),
                (Wm = {
                    ...ys,
                    handler: xU((e, t) => {
                        let { elementVisible: r } = t,
                            { event: n, store: o } = e,
                            { ixData: i } = o.getState(),
                            { events: s } = i;
                        return !s[n.action.config.autoStopEventId] &&
                            t.triggered
                            ? t
                            : (n.eventTypeId === Ym) === r
                            ? (Ue(e), { ...t, triggered: !0 })
                            : t;
                    }),
                }),
                (Xm = 0.05),
                (n_ = {
                    [cU]: Ei(),
                    [lU]: mi(),
                    [uU]: Ei(),
                    [sU]: mi(),
                    [gU]: Ei(!1),
                    [pU]: mi(!1),
                    [fU]: Ei(),
                    [dU]: mi(),
                    [_U]: { types: "ecommerce-cart-open", handler: Ze(ut, Ue) },
                    [mU]: {
                        types: "ecommerce-cart-close",
                        handler: Ze(ut, Ue),
                    },
                    [tU]: {
                        types: "click",
                        handler: Ze(
                            ut,
                            Hm((e, { clickCount: t }) => {
                                IU(e) ? t === 1 && Ue(e) : Ue(e);
                            })
                        ),
                    },
                    [rU]: {
                        types: "click",
                        handler: Ze(
                            ut,
                            Hm((e, { clickCount: t }) => {
                                t === 2 && Ue(e);
                            })
                        ),
                    },
                    [nU]: { ...Jr, types: "mousedown" },
                    [iU]: { ...Jr, types: "mouseup" },
                    [oU]: {
                        types: Gm,
                        handler: Ze(
                            ut,
                            Vm((e, t) => {
                                t.elementHovered && Ue(e);
                            })
                        ),
                    },
                    [aU]: {
                        types: Gm,
                        handler: Ze(
                            ut,
                            Vm((e, t) => {
                                t.elementHovered || Ue(e);
                            })
                        ),
                    },
                    [vU]: {
                        types: "mousemove mouseout scroll",
                        handler: (
                            {
                                store: e,
                                element: t,
                                eventConfig: r,
                                nativeEvent: n,
                                eventStateKey: o,
                            },
                            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
                        ) => {
                            let {
                                    basedOn: s,
                                    selectedAxis: a,
                                    continuousParameterGroupId: u,
                                    reverse: f,
                                    restingState: d = 0,
                                } = r,
                                {
                                    clientX: p = i.clientX,
                                    clientY: v = i.clientY,
                                    pageX: h = i.pageX,
                                    pageY: E = i.pageY,
                                } = n,
                                _ = a === "X_AXIS",
                                L = n.type === "mouseout",
                                S = d / 100,
                                A = u,
                                O = !1;
                            switch (s) {
                                case it.VIEWPORT: {
                                    S = _
                                        ? Math.min(p, window.innerWidth) /
                                          window.innerWidth
                                        : Math.min(v, window.innerHeight) /
                                          window.innerHeight;
                                    break;
                                }
                                case it.PAGE: {
                                    let {
                                        scrollLeft: C,
                                        scrollTop: R,
                                        scrollWidth: x,
                                        scrollHeight: U,
                                    } = Qr();
                                    S = _
                                        ? Math.min(C + h, x) / x
                                        : Math.min(R + E, U) / U;
                                    break;
                                }
                                case it.ELEMENT:
                                default: {
                                    A = Fm(o, u);
                                    let C = n.type.indexOf("mouse") === 0;
                                    if (
                                        C &&
                                        ut({ element: t, nativeEvent: n }) !==
                                            !0
                                    )
                                        break;
                                    let R = t.getBoundingClientRect(),
                                        {
                                            left: x,
                                            top: U,
                                            width: X,
                                            height: B,
                                        } = R;
                                    if (!C && !CU({ left: p, top: v }, R))
                                        break;
                                    (O = !0),
                                        (S = _ ? (p - x) / X : (v - U) / B);
                                    break;
                                }
                            }
                            return (
                                L &&
                                    (S > 1 - Xm || S < Xm) &&
                                    (S = Math.round(S)),
                                (s !== it.ELEMENT ||
                                    O ||
                                    O !== i.elementHovered) &&
                                    ((S = f ? 1 - S : S), e.dispatch(dr(A, S))),
                                {
                                    elementHovered: O,
                                    clientX: p,
                                    clientY: v,
                                    pageX: h,
                                    pageY: E,
                                }
                            );
                        },
                    },
                    [bU]: {
                        types: hs,
                        handler: ({ store: e, eventConfig: t }) => {
                            let {
                                    continuousParameterGroupId: r,
                                    reverse: n,
                                } = t,
                                {
                                    scrollTop: o,
                                    scrollHeight: i,
                                    clientHeight: s,
                                } = Qr(),
                                a = o / (i - s);
                            (a = n ? 1 - a : a), e.dispatch(dr(r, a));
                        },
                    },
                    [EU]: {
                        types: hs,
                        handler: (
                            {
                                element: e,
                                store: t,
                                eventConfig: r,
                                eventStateKey: n,
                            },
                            o = { scrollPercent: 0 }
                        ) => {
                            let {
                                    scrollLeft: i,
                                    scrollTop: s,
                                    scrollWidth: a,
                                    scrollHeight: u,
                                    clientHeight: f,
                                } = Qr(),
                                {
                                    basedOn: d,
                                    selectedAxis: p,
                                    continuousParameterGroupId: v,
                                    startsEntering: h,
                                    startsExiting: E,
                                    addEndOffset: _,
                                    addStartOffset: L,
                                    addOffsetValue: S = 0,
                                    endOffsetValue: A = 0,
                                } = r,
                                O = p === "X_AXIS";
                            if (d === it.VIEWPORT) {
                                let C = O ? i / a : s / u;
                                return (
                                    C !== o.scrollPercent &&
                                        t.dispatch(dr(v, C)),
                                    { scrollPercent: C }
                                );
                            } else {
                                let C = Fm(n, v),
                                    R = e.getBoundingClientRect(),
                                    x = (L ? S : 0) / 100,
                                    U = (_ ? A : 0) / 100;
                                (x = h ? x : 1 - x), (U = E ? U : 1 - U);
                                let X = R.top + Math.min(R.height * x, f),
                                    Y = R.top + R.height * U - X,
                                    re = Math.min(f + Y, u),
                                    T = Math.min(Math.max(0, f - X), re) / re;
                                return (
                                    T !== o.scrollPercent &&
                                        t.dispatch(dr(C, T)),
                                    { scrollPercent: T }
                                );
                            }
                        },
                    },
                    [Ym]: Wm,
                    [hU]: Wm,
                    [Km]: {
                        ...ys,
                        handler: Um((e, t) => {
                            t.scrollingDown && Ue(e);
                        }),
                    },
                    [yU]: {
                        ...ys,
                        handler: Um((e, t) => {
                            t.scrollingDown || Ue(e);
                        }),
                    },
                    [$m]: {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: Ze(Zr, RU(Ue)),
                    },
                    [Qm]: {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: Ze(Zr, LU(Ue)),
                    },
                });
        });
    var b_ = {};
    De(b_, {
        observeRequests: () => QU,
        startActionGroup: () => en,
        startEngine: () => wi,
        stopActionGroup: () => gr,
        stopAllActionGroups: () => E_,
        stopEngine: () => Si,
    });
    function QU(e) {
        Gt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: eH }),
            Gt({
                store: e,
                select: ({ ixRequest: t }) => t.playback,
                onChange: tH,
            }),
            Gt({
                store: e,
                select: ({ ixRequest: t }) => t.stop,
                onChange: rH,
            }),
            Gt({
                store: e,
                select: ({ ixRequest: t }) => t.clear,
                onChange: nH,
            });
    }
    function ZU(e) {
        Gt({
            store: e,
            select: ({ ixSession: t }) => t.mediaQueryKey,
            onChange: () => {
                Si(e),
                    g_({ store: e, elementApi: qe }),
                    wi({ store: e, allowEvents: !0 }),
                    v_();
            },
        });
    }
    function JU(e, t) {
        let r = Gt({
            store: e,
            select: ({ ixSession: n }) => n.tick,
            onChange: (n) => {
                t(n), r();
            },
        });
    }
    function eH({ rawData: e, defer: t }, r) {
        let n = () => {
            wi({ store: r, rawData: e, allowEvents: !0 }), v_();
        };
        t ? setTimeout(n, 0) : n();
    }
    function v_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function tH(e, t) {
        let {
                actionTypeId: r,
                actionListId: n,
                actionItemId: o,
                eventId: i,
                allowEvents: s,
                immediate: a,
                testManual: u,
                verbose: f = !0,
            } = e,
            { rawData: d } = e;
        if (n && o && d && a) {
            let p = d.actionLists[n];
            p && (d = UU({ actionList: p, actionItemId: o, rawData: d }));
        }
        if (
            (wi({ store: t, rawData: d, allowEvents: s, testManual: u }),
            (n && r === Fe.GENERAL_START_ACTION) || ms(r))
        ) {
            gr({ store: t, actionListId: n }),
                y_({ store: t, actionListId: n, eventId: i });
            let p = en({
                store: t,
                eventId: i,
                actionListId: n,
                immediate: a,
                verbose: f,
            });
            f && p && t.dispatch(pr({ actionListId: n, isPlaying: !a }));
        }
    }
    function rH({ actionListId: e }, t) {
        e ? gr({ store: t, actionListId: e }) : E_({ store: t }), Si(t);
    }
    function nH(e, t) {
        Si(t), g_({ store: t, elementApi: qe });
    }
    function wi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
        let { ixSession: o } = e.getState();
        t && e.dispatch($a(t)),
            o.active ||
                (e.dispatch(
                    Qa({
                        hasBoundaryNodes: !!document.querySelector(bi),
                        reducedMotion:
                            document.body.hasAttribute("data-wf-ix-vacation") &&
                            window.matchMedia("(prefers-reduced-motion)")
                                .matches,
                    })
                ),
                r &&
                    (cH(e),
                    iH(),
                    e.getState().ixSession.hasDefinedMediaQueries && ZU(e)),
                e.dispatch(Za()),
                oH(e, n));
    }
    function iH() {
        let { documentElement: e } = document;
        e.className.indexOf(o_) === -1 && (e.className += ` ${o_}`);
    }
    function oH(e, t) {
        let r = (n) => {
            let { ixSession: o, ixParameters: i } = e.getState();
            o.active &&
                (e.dispatch(ci(n, i)), t ? JU(e, r) : requestAnimationFrame(r));
        };
        r(window.performance.now());
    }
    function Si(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
            let { eventListeners: r } = t;
            r.forEach(aH), kU(), e.dispatch(Ja());
        }
    }
    function aH({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
    }
    function sH({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: o,
        actionListId: i,
        parameterGroup: s,
        smoothing: a,
        restingValue: u,
    }) {
        let { ixData: f, ixSession: d } = e.getState(),
            { events: p } = f,
            v = p[n],
            { eventTypeId: h } = v,
            E = {},
            _ = {},
            L = [],
            { continuousActionGroups: S } = s,
            { id: A } = s;
        HU(h, o) && (A = WU(t, A));
        let O = d.hasBoundaryNodes && r ? $r(r, bi) : null;
        S.forEach((C) => {
            let { keyframe: R, actionItems: x } = C;
            x.forEach((U) => {
                let { actionTypeId: X } = U,
                    { target: B } = U.config;
                if (!B) return;
                let Y = B.boundaryMode ? O : null,
                    re = BU(B) + _s + X;
                if (((_[re] = uH(_[re], R, U)), !E[re])) {
                    E[re] = !0;
                    let { config: q } = U;
                    Ti({
                        config: q,
                        event: v,
                        eventTarget: r,
                        elementRoot: Y,
                        elementApi: qe,
                    }).forEach((T) => {
                        L.push({ element: T, key: re });
                    });
                }
            });
        }),
            L.forEach(({ element: C, key: R }) => {
                let x = _[R],
                    U = (0, ht.default)(x, "[0].actionItems[0]", {}),
                    { actionTypeId: X } = U,
                    B = Oi(X) ? Ts(X)(C, U) : null,
                    Y = bs({ element: C, actionItem: U, elementApi: qe }, B);
                Is({
                    store: e,
                    element: C,
                    eventId: n,
                    actionListId: i,
                    actionItem: U,
                    destination: Y,
                    continuous: !0,
                    parameterId: A,
                    actionGroups: x,
                    smoothing: a,
                    restingValue: u,
                    pluginInstance: B,
                });
            });
    }
    function uH(e = [], t, r) {
        let n = [...e],
            o;
        return (
            n.some((i, s) => (i.keyframe === t ? ((o = s), !0) : !1)),
            o == null &&
                ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
            n[o].actionItems.push(r),
            n
        );
    }
    function cH(e) {
        let { ixData: t } = e.getState(),
            { eventTypeMap: r } = t;
        h_(e),
            (0, vr.default)(r, (o, i) => {
                let s = n_[i];
                if (!s) {
                    console.warn(`IX2 event type not configured: ${i}`);
                    return;
                }
                vH({ logic: s, store: e, events: o });
            });
        let { ixSession: n } = e.getState();
        n.eventListeners.length && fH(e);
    }
    function fH(e) {
        let t = () => {
            h_(e);
        };
        lH.forEach((r) => {
            window.addEventListener(r, t), e.dispatch(ui(window, [r, t]));
        }),
            t();
    }
    function h_(e) {
        let { ixSession: t, ixData: r } = e.getState(),
            n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let { mediaQueries: o } = r;
            e.dispatch(is({ width: n, mediaQueries: o }));
        }
    }
    function vH({ logic: e, store: t, events: r }) {
        hH(r);
        let { types: n, handler: o } = e,
            { ixData: i } = t.getState(),
            { actionLists: s } = i,
            a = dH(r, gH);
        if (!(0, u_.default)(a)) return;
        (0, vr.default)(a, (p, v) => {
            let h = r[v],
                { action: E, id: _, mediaQueries: L = i.mediaQueryKeys } = h,
                { actionListId: S } = E.config;
            jU(L, i.mediaQueryKeys) || t.dispatch(os()),
                E.actionTypeId === Fe.GENERAL_CONTINUOUS_ACTION &&
                    (Array.isArray(h.config) ? h.config : [h.config]).forEach(
                        (O) => {
                            let { continuousParameterGroupId: C } = O,
                                R = (0, ht.default)(
                                    s,
                                    `${S}.continuousParameterGroups`,
                                    []
                                ),
                                x = (0, s_.default)(R, ({ id: B }) => B === C),
                                U = (O.smoothing || 0) / 100,
                                X = (O.restingState || 0) / 100;
                            x &&
                                p.forEach((B, Y) => {
                                    let re = _ + _s + Y;
                                    sH({
                                        store: t,
                                        eventStateKey: re,
                                        eventTarget: B,
                                        eventId: _,
                                        eventConfig: O,
                                        actionListId: S,
                                        parameterGroup: x,
                                        smoothing: U,
                                        restingValue: X,
                                    });
                                });
                        }
                    ),
                (E.actionTypeId === Fe.GENERAL_START_ACTION ||
                    ms(E.actionTypeId)) &&
                    y_({ store: t, actionListId: S, eventId: _ });
        });
        let u = (p) => {
                let { ixSession: v } = t.getState();
                pH(a, (h, E, _) => {
                    let L = r[E],
                        S = v.eventState[_],
                        { action: A, mediaQueries: O = i.mediaQueryKeys } = L;
                    if (!Ii(O, v.mediaQueryKey)) return;
                    let C = (R = {}) => {
                        let x = o(
                            {
                                store: t,
                                element: h,
                                event: L,
                                eventConfig: R,
                                nativeEvent: p,
                                eventStateKey: _,
                            },
                            S
                        );
                        zU(x, S) || t.dispatch(es(_, x));
                    };
                    A.actionTypeId === Fe.GENERAL_CONTINUOUS_ACTION
                        ? (Array.isArray(L.config)
                              ? L.config
                              : [L.config]
                          ).forEach(C)
                        : C();
                });
            },
            f = (0, d_.default)(u, $U),
            d = ({ target: p = document, types: v, throttle: h }) => {
                v.split(" ")
                    .filter(Boolean)
                    .forEach((E) => {
                        let _ = h ? f : u;
                        p.addEventListener(E, _), t.dispatch(ui(p, [E, _]));
                    });
            };
        Array.isArray(n) ? n.forEach(d) : typeof n == "string" && d(e);
    }
    function hH(e) {
        if (!YU) return;
        let t = {},
            r = "";
        for (let n in e) {
            let { eventTypeId: o, target: i } = e[n],
                s = ss(i);
            t[s] ||
                ((o === $e.MOUSE_CLICK || o === $e.MOUSE_SECOND_CLICK) &&
                    ((t[s] = !0),
                    (r +=
                        s + "{cursor: pointer;touch-action: manipulation;}")));
        }
        if (r) {
            let n = document.createElement("style");
            (n.textContent = r), document.body.appendChild(n);
        }
    }
    function y_({ store: e, actionListId: t, eventId: r }) {
        let { ixData: n, ixSession: o } = e.getState(),
            { actionLists: i, events: s } = n,
            a = s[r],
            u = i[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, ht.default)(u, "actionItemGroups[0].actionItems", []),
                d = (0, ht.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Ii(d, o.mediaQueryKey)) return;
            f.forEach((p) => {
                let { config: v, actionTypeId: h } = p,
                    E =
                        v?.target?.useEventTarget === !0 &&
                        v?.target?.objectId == null
                            ? { target: a.target, targets: a.targets }
                            : v,
                    _ = Ti({ config: E, event: a, elementApi: qe }),
                    L = Oi(h);
                _.forEach((S) => {
                    let A = L ? Ts(h)(S, p) : null;
                    Is({
                        destination: bs(
                            { element: S, actionItem: p, elementApi: qe },
                            A
                        ),
                        immediate: !0,
                        store: e,
                        element: S,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: A,
                    });
                });
            });
        }
    }
    function E_({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, vr.default)(t, (r) => {
            if (!r.continuous) {
                let { actionListId: n, verbose: o } = r;
                Os(r, e),
                    o && e.dispatch(pr({ actionListId: n, isPlaying: !1 }));
            }
        });
    }
    function gr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: o,
    }) {
        let { ixInstances: i, ixSession: s } = e.getState(),
            a = s.hasBoundaryNodes && r ? $r(r, bi) : null;
        (0, vr.default)(i, (u) => {
            let f = (0, ht.default)(u, "actionItem.config.target.boundaryMode"),
                d = n ? u.eventStateKey === n : !0;
            if (u.actionListId === o && u.eventId === t && d) {
                if (a && f && !us(a, u.element)) return;
                Os(u, e),
                    u.verbose &&
                        e.dispatch(pr({ actionListId: o, isPlaying: !1 }));
            }
        });
    }
    function en({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: o,
        groupIndex: i = 0,
        immediate: s,
        verbose: a,
    }) {
        let { ixData: u, ixSession: f } = e.getState(),
            { events: d } = u,
            p = d[t] || {},
            { mediaQueries: v = u.mediaQueryKeys } = p,
            h = (0, ht.default)(u, `actionLists.${o}`, {}),
            { actionItemGroups: E, useFirstGroupAsInitialState: _ } = h;
        if (!E || !E.length) return !1;
        i >= E.length && (0, ht.default)(p, "config.loop") && (i = 0),
            i === 0 && _ && i++;
        let S =
                (i === 0 || (i === 1 && _)) && ms(p.action?.actionTypeId)
                    ? p.config.delay
                    : void 0,
            A = (0, ht.default)(E, [i, "actionItems"], []);
        if (!A.length || !Ii(v, f.mediaQueryKey)) return !1;
        let O = f.hasBoundaryNodes && r ? $r(r, bi) : null,
            C = FU(A),
            R = !1;
        return (
            A.forEach((x, U) => {
                let { config: X, actionTypeId: B } = x,
                    Y = Oi(B),
                    { target: re } = X;
                if (!re) return;
                let q = re.boundaryMode ? O : null;
                Ti({
                    config: X,
                    event: p,
                    eventTarget: r,
                    elementRoot: q,
                    elementApi: qe,
                }).forEach((N, k) => {
                    let V = Y ? Ts(B)(N, x) : null,
                        ee = Y ? KU(B)(N, x) : null;
                    R = !0;
                    let te = C === U && k === 0,
                        P = GU({ element: N, actionItem: x }),
                        W = bs(
                            { element: N, actionItem: x, elementApi: qe },
                            V
                        );
                    Is({
                        store: e,
                        element: N,
                        actionItem: x,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: o,
                        groupIndex: i,
                        isCarrier: te,
                        computedStyle: P,
                        destination: W,
                        immediate: s,
                        verbose: a,
                        pluginInstance: V,
                        pluginDuration: ee,
                        instanceDelay: S,
                    });
                });
            }),
            R
        );
    }
    function Is(e) {
        let { store: t, computedStyle: r, ...n } = e,
            {
                element: o,
                actionItem: i,
                immediate: s,
                pluginInstance: a,
                continuous: u,
                restingValue: f,
                eventId: d,
            } = n,
            p = !u,
            v = MU(),
            { ixElements: h, ixSession: E, ixData: _ } = t.getState(),
            L = qU(h, o),
            { refState: S } = h[L] || {},
            A = cs(o),
            O = E.reducedMotion && Bo[i.actionTypeId],
            C;
        if (O && u)
            switch (_.events[d]?.eventTypeId) {
                case $e.MOUSE_MOVE:
                case $e.MOUSE_MOVE_IN_VIEWPORT:
                    C = f;
                    break;
                default:
                    C = 0.5;
                    break;
            }
        let R = VU(o, S, r, i, qe, a);
        if (
            (t.dispatch(
                ts({
                    instanceId: v,
                    elementId: L,
                    origin: R,
                    refType: A,
                    skipMotion: O,
                    skipToValue: C,
                    ...n,
                })
            ),
            m_(document.body, "ix2-animation-started", v),
            s)
        ) {
            yH(t, v);
            return;
        }
        Gt({ store: t, select: ({ ixInstances: x }) => x[v], onChange: __ }),
            p && t.dispatch(li(v, E.tick));
    }
    function Os(e, t) {
        m_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState(),
        });
        let { elementId: r, actionItem: n } = e,
            { ixElements: o } = t.getState(),
            { ref: i, refType: s } = o[r] || {};
        s === p_ && XU(i, n, qe), t.dispatch(rs(e.id));
    }
    function m_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function yH(e, t) {
        let { ixParameters: r } = e.getState();
        e.dispatch(li(t, 0)), e.dispatch(ci(performance.now(), r));
        let { ixInstances: n } = e.getState();
        __(n[t], e);
    }
    function __(e, t) {
        let {
                active: r,
                continuous: n,
                complete: o,
                elementId: i,
                actionItem: s,
                actionTypeId: a,
                renderType: u,
                current: f,
                groupIndex: d,
                eventId: p,
                eventTarget: v,
                eventStateKey: h,
                actionListId: E,
                isCarrier: _,
                styleProp: L,
                verbose: S,
                pluginInstance: A,
            } = e,
            { ixData: O, ixSession: C } = t.getState(),
            { events: R } = O,
            x = R[p] || {},
            { mediaQueries: U = O.mediaQueryKeys } = x;
        if (Ii(U, C.mediaQueryKey) && (n || r || o)) {
            if (f || (u === PU && o)) {
                t.dispatch(ns(i, a, f, s));
                let { ixElements: X } = t.getState(),
                    { ref: B, refType: Y, refState: re } = X[i] || {},
                    q = re && re[a];
                (Y === p_ || Oi(a)) && DU(B, re, q, p, s, L, qe, u, A);
            }
            if (o) {
                if (_) {
                    let X = en({
                        store: t,
                        eventId: p,
                        eventTarget: v,
                        eventStateKey: h,
                        actionListId: E,
                        groupIndex: d + 1,
                        verbose: S,
                    });
                    S &&
                        !X &&
                        t.dispatch(pr({ actionListId: E, isPlaying: !1 }));
                }
                Os(e, t);
            }
        }
    }
    var s_,
        ht,
        u_,
        c_,
        l_,
        f_,
        vr,
        d_,
        _i,
        NU,
        ms,
        _s,
        bi,
        p_,
        PU,
        o_,
        Ti,
        qU,
        bs,
        Gt,
        MU,
        DU,
        g_,
        FU,
        GU,
        VU,
        UU,
        HU,
        WU,
        Ii,
        XU,
        kU,
        BU,
        jU,
        zU,
        Oi,
        Ts,
        KU,
        a_,
        YU,
        $U,
        lH,
        dH,
        pH,
        gH,
        Es = ye(() => {
            "use strict";
            (s_ = ce(_a())),
                (ht = ce(kn())),
                (u_ = ce(qy())),
                (c_ = ce(aE())),
                (l_ = ce(uE())),
                (f_ = ce(lE())),
                (vr = ce(hE())),
                (d_ = ce(IE()));
            Ge();
            _i = ce(Ft());
            fi();
            CE();
            i_();
            (NU = Object.keys(Tn)),
                (ms = (e) => NU.includes(e)),
                ({
                    COLON_DELIMITER: _s,
                    BOUNDARY_SELECTOR: bi,
                    HTML_ELEMENT: p_,
                    RENDER_GENERAL: PU,
                    W_MOD_IX: o_,
                } = Ce),
                ({
                    getAffectedElements: Ti,
                    getElementId: qU,
                    getDestinationValues: bs,
                    observeStore: Gt,
                    getInstanceId: MU,
                    renderHTMLElement: DU,
                    clearAllStyles: g_,
                    getMaxDurationItemIndex: FU,
                    getComputedStyle: GU,
                    getInstanceOrigin: VU,
                    reduceListToGroup: UU,
                    shouldNamespaceEventParameter: HU,
                    getNamespacedParameterId: WU,
                    shouldAllowMediaQuery: Ii,
                    cleanupHTMLElement: XU,
                    clearObjectCache: kU,
                    stringifyTarget: BU,
                    mediaQueriesEqual: jU,
                    shallowEqual: zU,
                } = _i.IX2VanillaUtils),
                ({
                    isPluginType: Oi,
                    createPluginInstance: Ts,
                    getPluginDuration: KU,
                } = _i.IX2VanillaPlugins),
                (a_ = navigator.userAgent),
                (YU = a_.match(/iPad/i) || a_.match(/iPhone/)),
                ($U = 12);
            lH = ["resize", "orientationchange"];
            (dH = (e, t) => (0, c_.default)((0, f_.default)(e, t), l_.default)),
                (pH = (e, t) => {
                    (0, vr.default)(e, (r, n) => {
                        r.forEach((o, i) => {
                            let s = n + _s + i;
                            t(o, n, s);
                        });
                    });
                }),
                (gH = (e) => {
                    let t = { target: e.target, targets: e.targets };
                    return Ti({ config: t, elementApi: qe });
                });
        });
    var I_ = c((yt) => {
        "use strict";
        var EH = cn().default,
            mH = ou().default;
        Object.defineProperty(yt, "__esModule", { value: !0 });
        yt.actions = void 0;
        yt.destroy = T_;
        yt.init = OH;
        yt.setEnv = IH;
        yt.store = void 0;
        kl();
        var _H = Wo(),
            bH = mH((vy(), et(gy))),
            ws = (Es(), et(b_)),
            TH = EH((fi(), et(wE)));
        yt.actions = TH;
        var Ss = (yt.store = (0, _H.createStore)(bH.default));
        function IH(e) {
            e() && (0, ws.observeRequests)(Ss);
        }
        function OH(e) {
            T_(),
                (0, ws.startEngine)({ store: Ss, rawData: e, allowEvents: !0 });
        }
        function T_() {
            (0, ws.stopEngine)(Ss);
        }
    });
    var A_ = c((jj, S_) => {
        "use strict";
        var O_ = je(),
            w_ = I_();
        w_.setEnv(O_.env);
        O_.define(
            "ix2",
            (S_.exports = function () {
                return w_;
            })
        );
    });
    var C_ = c((zj, x_) => {
        "use strict";
        var hr = je();
        hr.define(
            "links",
            (x_.exports = function (e, t) {
                var r = {},
                    n = e(window),
                    o,
                    i = hr.env(),
                    s = window.location,
                    a = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    d = /\/$/,
                    p,
                    v;
                r.ready = r.design = r.preview = h;
                function h() {
                    (o = i && hr.env("design")),
                        (v = hr.env("slug") || s.pathname || ""),
                        hr.scroll.off(_),
                        (p = []);
                    for (var S = document.links, A = 0; A < S.length; ++A)
                        E(S[A]);
                    p.length && (hr.scroll.on(_), _());
                }
                function E(S) {
                    if (!S.getAttribute("hreflang")) {
                        var A =
                            (o && S.getAttribute("href-disabled")) ||
                            S.getAttribute("href");
                        if (((a.href = A), !(A.indexOf(":") >= 0))) {
                            var O = e(S);
                            if (
                                a.hash.length > 1 &&
                                a.host + a.pathname === s.host + s.pathname
                            ) {
                                if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                                var C = e(a.hash);
                                C.length &&
                                    p.push({ link: O, sec: C, active: !1 });
                                return;
                            }
                            if (!(A === "#" || A === "")) {
                                var R =
                                    a.href === s.href ||
                                    A === v ||
                                    (f.test(A) && d.test(v));
                                L(O, u, R);
                            }
                        }
                    }
                }
                function _() {
                    var S = n.scrollTop(),
                        A = n.height();
                    t.each(p, function (O) {
                        if (!O.link.attr("hreflang")) {
                            var C = O.link,
                                R = O.sec,
                                x = R.offset().top,
                                U = R.outerHeight(),
                                X = A * 0.5,
                                B =
                                    R.is(":visible") &&
                                    x + U - X >= S &&
                                    x + X <= S + A;
                            O.active !== B && ((O.active = B), L(C, u, B));
                        }
                    });
                }
                function L(S, A, O) {
                    var C = S.hasClass(A);
                    (O && C) ||
                        (!O && !C) ||
                        (O ? S.addClass(A) : S.removeClass(A));
                }
                return r;
            })
        );
    });
    var L_ = c((Kj, R_) => {
        "use strict";
        var Ai = je();
        Ai.define(
            "scroll",
            (R_.exports = function (e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll",
                    },
                    r = window.location,
                    n = E() ? null : window.history,
                    o = e(window),
                    i = e(document),
                    s = e(document.body),
                    a =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        function (q) {
                            window.setTimeout(q, 15);
                        },
                    u = Ai.env("editor") ? ".w-editor-body" : "body",
                    f =
                        "header, " +
                        u +
                        " > .header, " +
                        u +
                        " > .w-nav:not([data-no-scroll])",
                    d = 'a[href="#"]',
                    p = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
                    v =
                        '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                    h = document.createElement("style");
                h.appendChild(document.createTextNode(v));
                function E() {
                    try {
                        return !!window.frameElement;
                    } catch {
                        return !0;
                    }
                }
                var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
                function L(q) {
                    return (
                        _.test(q.hash) &&
                        q.host + q.pathname === r.host + r.pathname
                    );
                }
                let S =
                    typeof window.matchMedia == "function" &&
                    window.matchMedia("(prefers-reduced-motion: reduce)");
                function A() {
                    return (
                        document.body.getAttribute("data-wf-scroll-motion") ===
                            "none" || S.matches
                    );
                }
                function O(q, T) {
                    var N;
                    switch (T) {
                        case "add":
                            (N = q.attr("tabindex")),
                                N
                                    ? q.attr("data-wf-tabindex-swap", N)
                                    : q.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (N = q.attr("data-wf-tabindex-swap")),
                                N
                                    ? (q.attr("tabindex", N),
                                      q.removeAttr("data-wf-tabindex-swap"))
                                    : q.removeAttr("tabindex");
                            break;
                    }
                    q.toggleClass("wf-force-outline-none", T === "add");
                }
                function C(q) {
                    var T = q.currentTarget;
                    if (
                        !(
                            Ai.env("design") ||
                            (window.$.mobile &&
                                /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
                        )
                    ) {
                        var N = L(T) ? T.hash : "";
                        if (N !== "") {
                            var k = e(N);
                            k.length &&
                                (q && (q.preventDefault(), q.stopPropagation()),
                                R(N, q),
                                window.setTimeout(
                                    function () {
                                        x(k, function () {
                                            O(k, "add"),
                                                k
                                                    .get(0)
                                                    .focus({
                                                        preventScroll: !0,
                                                    }),
                                                O(k, "remove");
                                        });
                                    },
                                    q ? 0 : 300
                                ));
                        }
                    }
                }
                function R(q) {
                    if (
                        r.hash !== q &&
                        n &&
                        n.pushState &&
                        !(Ai.env.chrome && r.protocol === "file:")
                    ) {
                        var T = n.state && n.state.hash;
                        T !== q && n.pushState({ hash: q }, "", q);
                    }
                }
                function x(q, T) {
                    var N = o.scrollTop(),
                        k = U(q);
                    if (N !== k) {
                        var V = X(q, N, k),
                            ee = Date.now(),
                            te = function () {
                                var P = Date.now() - ee;
                                window.scroll(0, B(N, k, P, V)),
                                    P <= V
                                        ? a(te)
                                        : typeof T == "function" && T();
                            };
                        a(te);
                    }
                }
                function U(q) {
                    var T = e(f),
                        N = T.css("position") === "fixed" ? T.outerHeight() : 0,
                        k = q.offset().top - N;
                    if (q.data("scroll") === "mid") {
                        var V = o.height() - N,
                            ee = q.outerHeight();
                        ee < V && (k -= Math.round((V - ee) / 2));
                    }
                    return k;
                }
                function X(q, T, N) {
                    if (A()) return 0;
                    var k = 1;
                    return (
                        s.add(q).each(function (V, ee) {
                            var te = parseFloat(
                                ee.getAttribute("data-scroll-time")
                            );
                            !isNaN(te) && te >= 0 && (k = te);
                        }),
                        (472.143 * Math.log(Math.abs(T - N) + 125) - 2e3) * k
                    );
                }
                function B(q, T, N, k) {
                    return N > k ? T : q + (T - q) * Y(N / k);
                }
                function Y(q) {
                    return q < 0.5
                        ? 4 * q * q * q
                        : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1;
                }
                function re() {
                    var { WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: T } = t;
                    i.on(T, p, C),
                        i.on(q, d, function (N) {
                            N.preventDefault();
                        }),
                        document.head.insertBefore(h, document.head.firstChild);
                }
                return { ready: re };
            })
        );
    });
    var P_ = c((Yj, N_) => {
        "use strict";
        var wH = je();
        wH.define(
            "touch",
            (N_.exports = function (e) {
                var t = {},
                    r = window.getSelection;
                (e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click",
                }),
                    (t.init = function (i) {
                        return (
                            (i = typeof i == "string" ? e(i).get(0) : i),
                            i ? new n(i) : null
                        );
                    });
                function n(i) {
                    var s = !1,
                        a = !1,
                        u = Math.min(Math.round(window.innerWidth * 0.04), 40),
                        f,
                        d;
                    i.addEventListener("touchstart", p, !1),
                        i.addEventListener("touchmove", v, !1),
                        i.addEventListener("touchend", h, !1),
                        i.addEventListener("touchcancel", E, !1),
                        i.addEventListener("mousedown", p, !1),
                        i.addEventListener("mousemove", v, !1),
                        i.addEventListener("mouseup", h, !1),
                        i.addEventListener("mouseout", E, !1);
                    function p(L) {
                        var S = L.touches;
                        (S && S.length > 1) ||
                            ((s = !0),
                            S
                                ? ((a = !0), (f = S[0].clientX))
                                : (f = L.clientX),
                            (d = f));
                    }
                    function v(L) {
                        if (s) {
                            if (a && L.type === "mousemove") {
                                L.preventDefault(), L.stopPropagation();
                                return;
                            }
                            var S = L.touches,
                                A = S ? S[0].clientX : L.clientX,
                                O = A - d;
                            (d = A),
                                Math.abs(O) > u &&
                                    r &&
                                    String(r()) === "" &&
                                    (o("swipe", L, {
                                        direction: O > 0 ? "right" : "left",
                                    }),
                                    E());
                        }
                    }
                    function h(L) {
                        if (s && ((s = !1), a && L.type === "mouseup")) {
                            L.preventDefault(), L.stopPropagation(), (a = !1);
                            return;
                        }
                    }
                    function E() {
                        s = !1;
                    }
                    function _() {
                        i.removeEventListener("touchstart", p, !1),
                            i.removeEventListener("touchmove", v, !1),
                            i.removeEventListener("touchend", h, !1),
                            i.removeEventListener("touchcancel", E, !1),
                            i.removeEventListener("mousedown", p, !1),
                            i.removeEventListener("mousemove", v, !1),
                            i.removeEventListener("mouseup", h, !1),
                            i.removeEventListener("mouseout", E, !1),
                            (i = null);
                    }
                    this.destroy = _;
                }
                function o(i, s, a) {
                    var u = e.Event(i, { originalEvent: s });
                    e(s.target).trigger(u, a);
                }
                return (t.instance = t.init(document)), t;
            })
        );
    });
    var q_ = c((As) => {
        "use strict";
        Object.defineProperty(As, "__esModule", { value: !0 });
        As.default = SH;
        function SH(e, t, r, n, o, i, s, a, u, f, d, p, v) {
            return function (h) {
                e(h);
                var E = h.form,
                    _ = {
                        name:
                            E.attr("data-name") ||
                            E.attr("name") ||
                            "Untitled Form",
                        pageId: E.attr("data-wf-page-id") || "",
                        elementId: E.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                            E.html()
                        ),
                        trackingCookies: n(),
                    };
                let L = E.attr("data-wf-flow");
                L && (_.wfFlow = L), o(h);
                var S = i(E, _.fields);
                if (S) return s(S);
                if (((_.fileUploads = a(E)), u(h), !f)) {
                    d(h);
                    return;
                }
                p.ajax({
                    url: v,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0,
                })
                    .done(function (A) {
                        A && A.code === 200 && (h.success = !0), d(h);
                    })
                    .fail(function () {
                        d(h);
                    });
            };
        }
    });
    var D_ = c((Qj, M_) => {
        "use strict";
        var xi = je();
        xi.define(
            "forms",
            (M_.exports = function (e, t) {
                var r = {},
                    n = e(document),
                    o,
                    i = window.location,
                    s = window.XDomainRequest && !window.atob,
                    a = ".w-form",
                    u,
                    f = /e(-)?mail/i,
                    d = /^\S+@\S+$/,
                    p = window.alert,
                    v = xi.env(),
                    h,
                    E,
                    _,
                    L = /list-manage[1-9]?.com/i,
                    S = t.debounce(function () {
                        p(
                            "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
                        );
                    }, 100);
                r.ready = r.design = r.preview = function () {
                    A(), !v && !h && C();
                };
                function A() {
                    (u = e("html").attr("data-wf-site")),
                        (E = "https://webflow.com/api/v1/form/" + u),
                        s &&
                            E.indexOf("https://webflow.com") >= 0 &&
                            (E = E.replace(
                                "https://webflow.com",
                                "https://formdata.webflow.com"
                            )),
                        (_ = `${E}/signFile`),
                        (o = e(a + " form")),
                        o.length && o.each(O);
                }
                function O(P, W) {
                    var j = e(W),
                        D = e.data(W, a);
                    D || (D = e.data(W, a, { form: j })), R(D);
                    var M = j.closest("div.w-form");
                    (D.done = M.find("> .w-form-done")),
                        (D.fail = M.find("> .w-form-fail")),
                        (D.fileUploads = M.find(".w-file-upload")),
                        D.fileUploads.each(function (ae) {
                            V(ae, D);
                        });
                    var Q =
                        D.form.attr("aria-label") ||
                        D.form.attr("data-name") ||
                        "Form";
                    D.done.attr("aria-label") || D.form.attr("aria-label", Q),
                        D.done.attr("tabindex", "-1"),
                        D.done.attr("role", "region"),
                        D.done.attr("aria-label") ||
                            D.done.attr("aria-label", Q + " success"),
                        D.fail.attr("tabindex", "-1"),
                        D.fail.attr("role", "region"),
                        D.fail.attr("aria-label") ||
                            D.fail.attr("aria-label", Q + " failure");
                    var oe = (D.action = j.attr("action"));
                    if (
                        ((D.handler = null),
                        (D.redirect = j.attr("data-redirect")),
                        L.test(oe))
                    ) {
                        D.handler = T;
                        return;
                    }
                    if (!oe) {
                        if (u) {
                            D.handler = (() => {
                                let ae = q_().default;
                                return ae(
                                    R,
                                    i,
                                    xi,
                                    Y,
                                    k,
                                    U,
                                    p,
                                    X,
                                    x,
                                    u,
                                    N,
                                    e,
                                    E
                                );
                            })();
                            return;
                        }
                        S();
                    }
                }
                function C() {
                    (h = !0),
                        n.on("submit", a + " form", function (ae) {
                            var J = e.data(this, a);
                            J.handler && ((J.evt = ae), J.handler(J));
                        });
                    let P = ".w-checkbox-input",
                        W = ".w-radio-input",
                        j = "w--redirected-checked",
                        D = "w--redirected-focus",
                        M = "w--redirected-focus-visible",
                        Q = ":focus-visible, [data-wf-focus-visible]",
                        oe = [
                            ["checkbox", P],
                            ["radio", W],
                        ];
                    n.on(
                        "change",
                        a + ' form input[type="checkbox"]:not(' + P + ")",
                        (ae) => {
                            e(ae.target).siblings(P).toggleClass(j);
                        }
                    ),
                        n.on(
                            "change",
                            a + ' form input[type="radio"]',
                            (ae) => {
                                e(
                                    `input[name="${ae.target.name}"]:not(${P})`
                                ).map((pe, ct) =>
                                    e(ct).siblings(W).removeClass(j)
                                );
                                let J = e(ae.target);
                                J.hasClass("w-radio-input") ||
                                    J.siblings(W).addClass(j);
                            }
                        ),
                        oe.forEach(([ae, J]) => {
                            n.on(
                                "focus",
                                a + ` form input[type="${ae}"]:not(` + J + ")",
                                (pe) => {
                                    e(pe.target).siblings(J).addClass(D),
                                        e(pe.target)
                                            .filter(Q)
                                            .siblings(J)
                                            .addClass(M);
                                }
                            ),
                                n.on(
                                    "blur",
                                    a +
                                        ` form input[type="${ae}"]:not(` +
                                        J +
                                        ")",
                                    (pe) => {
                                        e(pe.target)
                                            .siblings(J)
                                            .removeClass(`${D} ${M}`);
                                    }
                                );
                        });
                }
                function R(P) {
                    var W = (P.btn = P.form.find(':input[type="submit"]'));
                    (P.wait = P.btn.attr("data-wait") || null),
                        (P.success = !1),
                        W.prop("disabled", !1),
                        P.label && W.val(P.label);
                }
                function x(P) {
                    var W = P.btn,
                        j = P.wait;
                    W.prop("disabled", !0),
                        j && ((P.label = W.val()), W.val(j));
                }
                function U(P, W) {
                    var j = null;
                    return (
                        (W = W || {}),
                        P.find(
                            ':input:not([type="submit"]):not([type="file"])'
                        ).each(function (D, M) {
                            var Q = e(M),
                                oe = Q.attr("type"),
                                ae =
                                    Q.attr("data-name") ||
                                    Q.attr("name") ||
                                    "Field " + (D + 1),
                                J = Q.val();
                            if (oe === "checkbox") J = Q.is(":checked");
                            else if (oe === "radio") {
                                if (W[ae] === null || typeof W[ae] == "string")
                                    return;
                                J =
                                    P.find(
                                        'input[name="' +
                                            Q.attr("name") +
                                            '"]:checked'
                                    ).val() || null;
                            }
                            typeof J == "string" && (J = e.trim(J)),
                                (W[ae] = J),
                                (j = j || re(Q, oe, ae, J));
                        }),
                        j
                    );
                }
                function X(P) {
                    var W = {};
                    return (
                        P.find(':input[type="file"]').each(function (j, D) {
                            var M = e(D),
                                Q =
                                    M.attr("data-name") ||
                                    M.attr("name") ||
                                    "File " + (j + 1),
                                oe = M.attr("data-value");
                            typeof oe == "string" && (oe = e.trim(oe)),
                                (W[Q] = oe);
                        }),
                        W
                    );
                }
                let B = { _mkto_trk: "marketo" };
                function Y() {
                    return document.cookie.split("; ").reduce(function (W, j) {
                        let D = j.split("="),
                            M = D[0];
                        if (M in B) {
                            let Q = B[M],
                                oe = D.slice(1).join("=");
                            W[Q] = oe;
                        }
                        return W;
                    }, {});
                }
                function re(P, W, j, D) {
                    var M = null;
                    return (
                        W === "password"
                            ? (M = "Passwords cannot be submitted.")
                            : P.attr("required")
                            ? D
                                ? f.test(P.attr("type")) &&
                                  (d.test(D) ||
                                      (M =
                                          "Please enter a valid email address for: " +
                                          j))
                                : (M =
                                      "Please fill out the required field: " +
                                      j)
                            : j === "g-recaptcha-response" &&
                              !D &&
                              (M = "Please confirm you\u2019re not a robot."),
                        M
                    );
                }
                function q(P) {
                    k(P), N(P);
                }
                function T(P) {
                    R(P);
                    var W = P.form,
                        j = {};
                    if (/^https/.test(i.href) && !/^https/.test(P.action)) {
                        W.attr("method", "post");
                        return;
                    }
                    k(P);
                    var D = U(W, j);
                    if (D) return p(D);
                    x(P);
                    var M;
                    t.each(j, function (J, pe) {
                        f.test(pe) && (j.EMAIL = J),
                            /^((full[ _-]?)?name)$/i.test(pe) && (M = J),
                            /^(first[ _-]?name)$/i.test(pe) && (j.FNAME = J),
                            /^(last[ _-]?name)$/i.test(pe) && (j.LNAME = J);
                    }),
                        M &&
                            !j.FNAME &&
                            ((M = M.split(" ")),
                            (j.FNAME = M[0]),
                            (j.LNAME = j.LNAME || M[1]));
                    var Q = P.action.replace("/post?", "/post-json?") + "&c=?",
                        oe = Q.indexOf("u=") + 2;
                    oe = Q.substring(oe, Q.indexOf("&", oe));
                    var ae = Q.indexOf("id=") + 3;
                    (ae = Q.substring(ae, Q.indexOf("&", ae))),
                        (j["b_" + oe + "_" + ae] = ""),
                        e
                            .ajax({ url: Q, data: j, dataType: "jsonp" })
                            .done(function (J) {
                                (P.success =
                                    J.result === "success" ||
                                    /already/.test(J.msg)),
                                    P.success ||
                                        console.info(
                                            "MailChimp error: " + J.msg
                                        ),
                                    N(P);
                            })
                            .fail(function () {
                                N(P);
                            });
                }
                function N(P) {
                    var W = P.form,
                        j = P.redirect,
                        D = P.success;
                    if (D && j) {
                        xi.location(j);
                        return;
                    }
                    P.done.toggle(D),
                        P.fail.toggle(!D),
                        D ? P.done.focus() : P.fail.focus(),
                        W.toggle(!D),
                        R(P);
                }
                function k(P) {
                    P.evt && P.evt.preventDefault(), (P.evt = null);
                }
                function V(P, W) {
                    if (!W.fileUploads || !W.fileUploads[P]) return;
                    var j,
                        D = e(W.fileUploads[P]),
                        M = D.find("> .w-file-upload-default"),
                        Q = D.find("> .w-file-upload-uploading"),
                        oe = D.find("> .w-file-upload-success"),
                        ae = D.find("> .w-file-upload-error"),
                        J = M.find(".w-file-upload-input"),
                        pe = M.find(".w-file-upload-label"),
                        ct = pe.children(),
                        le = ae.find(".w-file-upload-error-msg"),
                        g = oe.find(".w-file-upload-file"),
                        F = oe.find(".w-file-remove-link"),
                        z = g.find(".w-file-upload-file-name"),
                        H = le.attr("data-w-size-error"),
                        ve = le.attr("data-w-type-error"),
                        At = le.attr("data-w-generic-error");
                    if (
                        (v ||
                            pe.on("click keydown", function (m) {
                                (m.type === "keydown" &&
                                    m.which !== 13 &&
                                    m.which !== 32) ||
                                    (m.preventDefault(), J.click());
                            }),
                        pe
                            .find(".w-icon-file-upload-icon")
                            .attr("aria-hidden", "true"),
                        F.find(".w-icon-file-upload-remove").attr(
                            "aria-hidden",
                            "true"
                        ),
                        v)
                    )
                        J.on("click", function (m) {
                            m.preventDefault();
                        }),
                            pe.on("click", function (m) {
                                m.preventDefault();
                            }),
                            ct.on("click", function (m) {
                                m.preventDefault();
                            });
                    else {
                        F.on("click keydown", function (m) {
                            if (m.type === "keydown") {
                                if (m.which !== 13 && m.which !== 32) return;
                                m.preventDefault();
                            }
                            J.removeAttr("data-value"),
                                J.val(""),
                                z.html(""),
                                M.toggle(!0),
                                oe.toggle(!1),
                                pe.focus();
                        }),
                            J.on("change", function (m) {
                                (j =
                                    m.target &&
                                    m.target.files &&
                                    m.target.files[0]),
                                    j &&
                                        (M.toggle(!1),
                                        ae.toggle(!1),
                                        Q.toggle(!0),
                                        Q.focus(),
                                        z.text(j.name),
                                        I() || x(W),
                                        (W.fileUploads[P].uploading = !0),
                                        ee(j, y));
                            });
                        var lt = pe.outerHeight();
                        J.height(lt), J.width(1);
                    }
                    function l(m) {
                        var w = m.responseJSON && m.responseJSON.msg,
                            K = At;
                        typeof w == "string" &&
                        w.indexOf("InvalidFileTypeError") === 0
                            ? (K = ve)
                            : typeof w == "string" &&
                              w.indexOf("MaxFileSizeError") === 0 &&
                              (K = H),
                            le.text(K),
                            J.removeAttr("data-value"),
                            J.val(""),
                            Q.toggle(!1),
                            M.toggle(!0),
                            ae.toggle(!0),
                            ae.focus(),
                            (W.fileUploads[P].uploading = !1),
                            I() || R(W);
                    }
                    function y(m, w) {
                        if (m) return l(m);
                        var K = w.fileName,
                            ne = w.postData,
                            ge = w.fileId,
                            G = w.s3Url;
                        J.attr("data-value", ge), te(G, ne, j, K, b);
                    }
                    function b(m) {
                        if (m) return l(m);
                        Q.toggle(!1),
                            oe.css("display", "inline-block"),
                            oe.focus(),
                            (W.fileUploads[P].uploading = !1),
                            I() || R(W);
                    }
                    function I() {
                        var m =
                            (W.fileUploads && W.fileUploads.toArray()) || [];
                        return m.some(function (w) {
                            return w.uploading;
                        });
                    }
                }
                function ee(P, W) {
                    var j = new URLSearchParams({ name: P.name, size: P.size });
                    e.ajax({ type: "GET", url: `${_}?${j}`, crossDomain: !0 })
                        .done(function (D) {
                            W(null, D);
                        })
                        .fail(function (D) {
                            W(D);
                        });
                }
                function te(P, W, j, D, M) {
                    var Q = new FormData();
                    for (var oe in W) Q.append(oe, W[oe]);
                    Q.append("file", j, D),
                        e
                            .ajax({
                                type: "POST",
                                url: P,
                                data: Q,
                                processData: !1,
                                contentType: !1,
                            })
                            .done(function () {
                                M(null);
                            })
                            .fail(function (ae) {
                                M(ae);
                            });
                }
                return r;
            })
        );
    });
    var G_ = c((Zj, F_) => {
        "use strict";
        var St = je(),
            AH = Fi(),
            xe = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35,
            };
        St.define(
            "navbar",
            (F_.exports = function (e, t) {
                var r = {},
                    n = e.tram,
                    o = e(window),
                    i = e(document),
                    s = t.debounce,
                    a,
                    u,
                    f,
                    d,
                    p = St.env(),
                    v = '<div class="w-nav-overlay" data-wf-ignore />',
                    h = ".w-nav",
                    E = "w--open",
                    _ = "w--nav-dropdown-open",
                    L = "w--nav-dropdown-toggle-open",
                    S = "w--nav-dropdown-list-open",
                    A = "w--nav-link-open",
                    O = AH.triggers,
                    C = e();
                (r.ready = r.design = r.preview = R),
                    (r.destroy = function () {
                        (C = e()), x(), u && u.length && u.each(Y);
                    });
                function R() {
                    (f = p && St.env("design")),
                        (d = St.env("editor")),
                        (a = e(document.body)),
                        (u = i.find(h)),
                        u.length && (u.each(B), x(), U());
                }
                function x() {
                    St.resize.off(X);
                }
                function U() {
                    St.resize.on(X);
                }
                function X() {
                    u.each(M);
                }
                function B(g, F) {
                    var z = e(F),
                        H = e.data(F, h);
                    H ||
                        (H = e.data(F, h, {
                            open: !1,
                            el: z,
                            config: {},
                            selectedIdx: -1,
                        })),
                        (H.menu = z.find(".w-nav-menu")),
                        (H.links = H.menu.find(".w-nav-link")),
                        (H.dropdowns = H.menu.find(".w-dropdown")),
                        (H.dropdownToggle = H.menu.find(".w-dropdown-toggle")),
                        (H.dropdownList = H.menu.find(".w-dropdown-list")),
                        (H.button = z.find(".w-nav-button")),
                        (H.container = z.find(".w-container")),
                        (H.overlayContainerId = "w-nav-overlay-" + g),
                        (H.outside = j(H));
                    var ve = z.find(".w-nav-brand");
                    ve &&
                        ve.attr("href") === "/" &&
                        ve.attr("aria-label") == null &&
                        ve.attr("aria-label", "home"),
                        H.button.attr("style", "-webkit-user-select: text;"),
                        H.button.attr("aria-label") == null &&
                            H.button.attr("aria-label", "menu"),
                        H.button.attr("role", "button"),
                        H.button.attr("tabindex", "0"),
                        H.button.attr("aria-controls", H.overlayContainerId),
                        H.button.attr("aria-haspopup", "menu"),
                        H.button.attr("aria-expanded", "false"),
                        H.el.off(h),
                        H.button.off(h),
                        H.menu.off(h),
                        T(H),
                        f
                            ? (re(H), H.el.on("setting" + h, N(H)))
                            : (q(H),
                              H.button.on("click" + h, P(H)),
                              H.menu.on("click" + h, "a", W(H)),
                              H.button.on("keydown" + h, k(H)),
                              H.el.on("keydown" + h, V(H))),
                        M(g, F);
                }
                function Y(g, F) {
                    var z = e.data(F, h);
                    z && (re(z), e.removeData(F, h));
                }
                function re(g) {
                    g.overlay &&
                        (le(g, !0), g.overlay.remove(), (g.overlay = null));
                }
                function q(g) {
                    g.overlay ||
                        ((g.overlay = e(v).appendTo(g.el)),
                        g.overlay.attr("id", g.overlayContainerId),
                        (g.parent = g.menu.parent()),
                        le(g, !0));
                }
                function T(g) {
                    var F = {},
                        z = g.config || {},
                        H = (F.animation =
                            g.el.attr("data-animation") || "default");
                    (F.animOver = /^over/.test(H)),
                        (F.animDirect = /left$/.test(H) ? -1 : 1),
                        z.animation !== H && g.open && t.defer(te, g),
                        (F.easing = g.el.attr("data-easing") || "ease"),
                        (F.easing2 = g.el.attr("data-easing2") || "ease");
                    var ve = g.el.attr("data-duration");
                    (F.duration = ve != null ? Number(ve) : 400),
                        (F.docHeight = g.el.attr("data-doc-height")),
                        (g.config = F);
                }
                function N(g) {
                    return function (F, z) {
                        z = z || {};
                        var H = o.width();
                        T(g),
                            z.open === !0 && pe(g, !0),
                            z.open === !1 && le(g, !0),
                            g.open &&
                                t.defer(function () {
                                    H !== o.width() && te(g);
                                });
                    };
                }
                function k(g) {
                    return function (F) {
                        switch (F.keyCode) {
                            case xe.SPACE:
                            case xe.ENTER:
                                return (
                                    P(g)(),
                                    F.preventDefault(),
                                    F.stopPropagation()
                                );
                            case xe.ESCAPE:
                                return (
                                    le(g),
                                    F.preventDefault(),
                                    F.stopPropagation()
                                );
                            case xe.ARROW_RIGHT:
                            case xe.ARROW_DOWN:
                            case xe.HOME:
                            case xe.END:
                                return g.open
                                    ? (F.keyCode === xe.END
                                          ? (g.selectedIdx = g.links.length - 1)
                                          : (g.selectedIdx = 0),
                                      ee(g),
                                      F.preventDefault(),
                                      F.stopPropagation())
                                    : (F.preventDefault(), F.stopPropagation());
                        }
                    };
                }
                function V(g) {
                    return function (F) {
                        if (g.open)
                            switch (
                                ((g.selectedIdx = g.links.index(
                                    document.activeElement
                                )),
                                F.keyCode)
                            ) {
                                case xe.HOME:
                                case xe.END:
                                    return (
                                        F.keyCode === xe.END
                                            ? (g.selectedIdx =
                                                  g.links.length - 1)
                                            : (g.selectedIdx = 0),
                                        ee(g),
                                        F.preventDefault(),
                                        F.stopPropagation()
                                    );
                                case xe.ESCAPE:
                                    return (
                                        le(g),
                                        g.button.focus(),
                                        F.preventDefault(),
                                        F.stopPropagation()
                                    );
                                case xe.ARROW_LEFT:
                                case xe.ARROW_UP:
                                    return (
                                        (g.selectedIdx = Math.max(
                                            -1,
                                            g.selectedIdx - 1
                                        )),
                                        ee(g),
                                        F.preventDefault(),
                                        F.stopPropagation()
                                    );
                                case xe.ARROW_RIGHT:
                                case xe.ARROW_DOWN:
                                    return (
                                        (g.selectedIdx = Math.min(
                                            g.links.length - 1,
                                            g.selectedIdx + 1
                                        )),
                                        ee(g),
                                        F.preventDefault(),
                                        F.stopPropagation()
                                    );
                            }
                    };
                }
                function ee(g) {
                    if (g.links[g.selectedIdx]) {
                        var F = g.links[g.selectedIdx];
                        F.focus(), W(F);
                    }
                }
                function te(g) {
                    g.open && (le(g, !0), pe(g, !0));
                }
                function P(g) {
                    return s(function () {
                        g.open ? le(g) : pe(g);
                    });
                }
                function W(g) {
                    return function (F) {
                        var z = e(this),
                            H = z.attr("href");
                        if (!St.validClick(F.currentTarget)) {
                            F.preventDefault();
                            return;
                        }
                        H && H.indexOf("#") === 0 && g.open && le(g);
                    };
                }
                function j(g) {
                    return (
                        g.outside && i.off("click" + h, g.outside),
                        function (F) {
                            var z = e(F.target);
                            (d &&
                                z.closest(".w-editor-bem-EditorOverlay")
                                    .length) ||
                                D(g, z);
                        }
                    );
                }
                var D = s(function (g, F) {
                    if (g.open) {
                        var z = F.closest(".w-nav-menu");
                        g.menu.is(z) || le(g);
                    }
                });
                function M(g, F) {
                    var z = e.data(F, h),
                        H = (z.collapsed = z.button.css("display") !== "none");
                    if ((z.open && !H && !f && le(z, !0), z.container.length)) {
                        var ve = oe(z);
                        z.links.each(ve), z.dropdowns.each(ve);
                    }
                    z.open && ct(z);
                }
                var Q = "max-width";
                function oe(g) {
                    var F = g.container.css(Q);
                    return (
                        F === "none" && (F = ""),
                        function (z, H) {
                            (H = e(H)),
                                H.css(Q, ""),
                                H.css(Q) === "none" && H.css(Q, F);
                        }
                    );
                }
                function ae(g, F) {
                    F.setAttribute("data-nav-menu-open", "");
                }
                function J(g, F) {
                    F.removeAttribute("data-nav-menu-open");
                }
                function pe(g, F) {
                    if (g.open) return;
                    (g.open = !0),
                        g.menu.each(ae),
                        g.links.addClass(A),
                        g.dropdowns.addClass(_),
                        g.dropdownToggle.addClass(L),
                        g.dropdownList.addClass(S),
                        g.button.addClass(E);
                    var z = g.config,
                        H = z.animation;
                    (H === "none" || !n.support.transform || z.duration <= 0) &&
                        (F = !0);
                    var ve = ct(g),
                        At = g.menu.outerHeight(!0),
                        lt = g.menu.outerWidth(!0),
                        l = g.el.height(),
                        y = g.el[0];
                    if (
                        (M(0, y),
                        O.intro(0, y),
                        St.redraw.up(),
                        f || i.on("click" + h, g.outside),
                        F)
                    ) {
                        m();
                        return;
                    }
                    var b = "transform " + z.duration + "ms " + z.easing;
                    if (
                        (g.overlay &&
                            ((C = g.menu.prev()),
                            g.overlay.show().append(g.menu)),
                        z.animOver)
                    ) {
                        n(g.menu)
                            .add(b)
                            .set({ x: z.animDirect * lt, height: ve })
                            .start({ x: 0 })
                            .then(m),
                            g.overlay && g.overlay.width(lt);
                        return;
                    }
                    var I = l + At;
                    n(g.menu).add(b).set({ y: -I }).start({ y: 0 }).then(m);
                    function m() {
                        g.button.attr("aria-expanded", "true");
                    }
                }
                function ct(g) {
                    var F = g.config,
                        z = F.docHeight ? i.height() : a.height();
                    return (
                        F.animOver
                            ? g.menu.height(z)
                            : g.el.css("position") !== "fixed" &&
                              (z -= g.el.outerHeight(!0)),
                        g.overlay && g.overlay.height(z),
                        z
                    );
                }
                function le(g, F) {
                    if (!g.open) return;
                    (g.open = !1), g.button.removeClass(E);
                    var z = g.config;
                    if (
                        ((z.animation === "none" ||
                            !n.support.transform ||
                            z.duration <= 0) &&
                            (F = !0),
                        O.outro(0, g.el[0]),
                        i.off("click" + h, g.outside),
                        F)
                    ) {
                        n(g.menu).stop(), y();
                        return;
                    }
                    var H = "transform " + z.duration + "ms " + z.easing2,
                        ve = g.menu.outerHeight(!0),
                        At = g.menu.outerWidth(!0),
                        lt = g.el.height();
                    if (z.animOver) {
                        n(g.menu)
                            .add(H)
                            .start({ x: At * z.animDirect })
                            .then(y);
                        return;
                    }
                    var l = lt + ve;
                    n(g.menu).add(H).start({ y: -l }).then(y);
                    function y() {
                        g.menu.height(""),
                            n(g.menu).set({ x: 0, y: 0 }),
                            g.menu.each(J),
                            g.links.removeClass(A),
                            g.dropdowns.removeClass(_),
                            g.dropdownToggle.removeClass(L),
                            g.dropdownList.removeClass(S),
                            g.overlay &&
                                g.overlay.children().length &&
                                (C.length
                                    ? g.menu.insertAfter(C)
                                    : g.menu.prependTo(g.parent),
                                g.overlay.attr("style", "").hide()),
                            g.el.triggerHandler("w-close"),
                            g.button.attr("aria-expanded", "false");
                    }
                }
                return r;
            })
        );
    });
    Cs();
    Rs();
    Xs();
    Bs();
    zs();
    $s();
    Fi();
    A_();
    C_();
    L_();
    P_();
    D_();
    G_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
    events: {
        e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-2",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "65d9c9182cf2ac8c814b2514",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "65d9c9182cf2ac8c814b2514",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: true,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1708892258917,
        },
        "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-2",
                    affectedElements: {},
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|30765628-4eff-f129-951a-5146bd437c25",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|30765628-4eff-f129-951a-5146bd437c25",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-2-p",
                    smoothing: 90,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 80,
                    startsExiting: false,
                    addEndOffset: true,
                    endOffsetValue: 80,
                },
            ],
            createdOn: 1708956418935,
        },
        "e-6": {
            id: "e-6",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInLeft", autoStopEventId: "e-7" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|237b0b9b-659b-0189-89aa-c0d692c2129a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|237b0b9b-659b-0189-89aa-c0d692c2129a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 100,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1708983354612,
        },
        "e-8": {
            id: "e-8",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInLeft", autoStopEventId: "e-9" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|eb17a75a-3546-100f-808d-82ba01de02a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|eb17a75a-3546-100f-808d-82ba01de02a3",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 100,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1709034442717,
        },
        "e-10": {
            id: "e-10",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: {
                    actionListId: "slideInLeft",
                    autoStopEventId: "e-11",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|bcf2e063-a9c2-2e9f-59f9-c82f8ba6bdc4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|bcf2e063-a9c2-2e9f-59f9-c82f8ba6bdc4",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 100,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1709034443578,
        },
        "e-19": {
            id: "e-19",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: {
                    actionListId: "slideInRight",
                    autoStopEventId: "e-20",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|5e417512-b2c3-6737-436f-112fc0f8afd7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|5e417512-b2c3-6737-436f-112fc0f8afd7",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1709044743799,
        },
        "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: {
                    actionListId: "slideInLeft",
                    autoStopEventId: "e-22",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|207ec5e6-e0c1-024a-b207-cd8efba5283e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|207ec5e6-e0c1-024a-b207-cd8efba5283e",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1709044766694,
        },
        "e-23": {
            id: "e-23",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: {
                    actionListId: "slideInLeft",
                    autoStopEventId: "e-24",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|8641497b-9e0d-3449-6ac4-5e43ec698846",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|8641497b-9e0d-3449-6ac4-5e43ec698846",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1709044779133,
        },
        "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-5",
                    affectedElements: {},
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".project-height",
                originalId:
                    "65d9c9182cf2ac8c814b2514|d0499efa-693d-7cc0-446a-83b7f5778b46",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".project-height",
                    originalId:
                        "65d9c9182cf2ac8c814b2514|d0499efa-693d-7cc0-446a-83b7f5778b46",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-5-p",
                    smoothing: 10,
                    startsEntering: false,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: true,
                    endOffsetValue: 15,
                },
            ],
            createdOn: 1697383969283,
        },
        "e-26": {
            id: "e-26",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SHRINK_BIG_EFFECT",
                instant: false,
                config: {
                    actionListId: "shrinkBigIn",
                    autoStopEventId: "e-27",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|48de2b3e-24bf-eadd-02ca-3d87935d765e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|48de2b3e-24bf-eadd-02ca-3d87935d765e",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1709204736868,
        },
        "e-28": {
            id: "e-28",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SHRINK_BIG_EFFECT",
                instant: false,
                config: {
                    actionListId: "shrinkBigIn",
                    autoStopEventId: "e-29",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|858ce855-db2d-ca9d-12c1-4d80fd8bbc85",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|858ce855-db2d-ca9d-12c1-4d80fd8bbc85",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 30,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1709204768115,
        },
        "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-6",
                    affectedElements: {},
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|a96a7720-ae91-91fc-e6aa-c2df72aee4bc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|a96a7720-ae91-91fc-e6aa-c2df72aee4bc",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    smoothing: 50,
                    startsEntering: true,
                    addStartOffset: true,
                    addOffsetValue: 35,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1709215369757,
        },
        "e-33": {
            id: "e-33",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-34" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|550124e7-6d6a-b1b3-d61a-05a1911909d3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|550124e7-6d6a-b1b3-d61a-05a1911909d3",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1709397335785,
        },
        "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-40",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id:
                    "65d9c9182cf2ac8c814b2514|ec8cf714-56ce-fc40-5edc-de91d24e01b1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id:
                        "65d9c9182cf2ac8c814b2514|ec8cf714-56ce-fc40-5edc-de91d24e01b1",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: true,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1709420232027,
        },
    },
    actionLists: {
        a: {
            id: "a",
            title: "Text Loop",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id:
                                        "65d9c9182cf2ac8c814b2514|0d9ab05e-3030-c605-55a5-aa65545be563",
                                },
                                xValue: 0,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 60000,
                                target: {
                                    id:
                                        "65d9c9182cf2ac8c814b2514|0d9ab05e-3030-c605-55a5-aa65545be563",
                                },
                                xValue: -202,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    id:
                                        "65d9c9182cf2ac8c814b2514|0d9ab05e-3030-c605-55a5-aa65545be563",
                                },
                                xValue: 0,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1708892285401,
        },
        "a-2": {
            id: "a-2",
            title: "Create Future Together Text",
            continuousParameterGroups: [
                {
                    id: "a-2-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-2-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id:
                                                "65d9c9182cf2ac8c814b2514|95136851-a8a1-4057-53c8-19b270f53e71",
                                        },
                                        xValue: 0,
                                        xUnit: "svw",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-2-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".text-block-5",
                                            selectorGuids: [
                                                "fc565a46-45e5-d818-5202-decd5de8856d",
                                            ],
                                        },
                                        xValue: 0,
                                        xUnit: "svw",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-2-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".text-block-4",
                                            selectorGuids: [
                                                "fd8f2b56-bb05-8d34-3033-899eb53db8d9",
                                            ],
                                        },
                                        yValue: 59,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 71,
                            actionItems: [
                                {
                                    id: "a-2-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".text-block-5",
                                            selectorGuids: [
                                                "fc565a46-45e5-d818-5202-decd5de8856d",
                                            ],
                                        },
                                        xValue: -25,
                                        xUnit: "svw",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-2-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            id:
                                                "65d9c9182cf2ac8c814b2514|95136851-a8a1-4057-53c8-19b270f53e71",
                                        },
                                        xValue: 25,
                                        xUnit: "svw",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1708956439412,
        },
        "a-5": {
            id: "a-5",
            title: "Horizontal scroll",
            continuousParameterGroups: [
                {
                    id: "a-5-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-5-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-track",
                                            selectorGuids: [
                                                "3f34785f-fdc6-59c1-a05e-72cc345b3d24",
                                            ],
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-5-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-track",
                                            selectorGuids: [
                                                "3f34785f-fdc6-59c1-a05e-72cc345b3d24",
                                            ],
                                        },
                                        xValue: -100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1697383995090,
        },
        "a-6": {
            id: "a-6",
            title: "Parallax zoom",
            continuousParameterGroups: [
                {
                    id: "a-6-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-6-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".portal-sky",
                                            selectorGuids: [
                                                "1578b57a-21a1-d554-3a80-ff0a7d83ef02",
                                            ],
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-6-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-7",
                                            selectorGuids: [
                                                "9e603c8d-b23f-7236-b53f-37aefae2910c",
                                            ],
                                        },
                                        xValue: 0,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-6-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-8",
                                            selectorGuids: [
                                                "8ecf5d2c-cb8d-8cbf-8c45-7addef98403c",
                                            ],
                                        },
                                        xValue: 0,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-6-n-7",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".portal-window-wrapper",
                                            selectorGuids: [
                                                "322a819d-174c-8cee-a2b0-953c48522e42",
                                            ],
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-6-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".main-img-girl",
                                            selectorGuids: [
                                                "31cd9836-770e-10e7-8f02-b773a8460b17",
                                            ],
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-6-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".portal-sky",
                                            selectorGuids: [
                                                "1578b57a-21a1-d554-3a80-ff0a7d83ef02",
                                            ],
                                        },
                                        yValue: -35,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-6-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-7",
                                            selectorGuids: [
                                                "9e603c8d-b23f-7236-b53f-37aefae2910c",
                                            ],
                                        },
                                        xValue: -80,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-6-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-8",
                                            selectorGuids: [
                                                "8ecf5d2c-cb8d-8cbf-8c45-7addef98403c",
                                            ],
                                        },
                                        xValue: 80,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-6-n-8",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".portal-window-wrapper",
                                            selectorGuids: [
                                                "322a819d-174c-8cee-a2b0-953c48522e42",
                                            ],
                                        },
                                        xValue: 12,
                                        yValue: 12,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-6-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".main-img-girl",
                                            selectorGuids: [
                                                "31cd9836-770e-10e7-8f02-b773a8460b17",
                                            ],
                                        },
                                        yValue: 80,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1709215399619,
        },
        "a-10": {
            id: "a-10",
            title: "Projects",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-10-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: true,
                                    id:
                                        "65d9c9182cf2ac8c814b2514|ec8cf714-56ce-fc40-5edc-de91d24e01b1",
                                },
                                xValue: 0,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-10-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 30000,
                                target: {
                                    useEventTarget: true,
                                    id:
                                        "65d9c9182cf2ac8c814b2514|ec8cf714-56ce-fc40-5edc-de91d24e01b1",
                                },
                                xValue: -620,
                                xUnit: "vw",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1709420238772,
        },
        slideInLeft: {
            id: "slideInLeft",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: -100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
        },
        slideInRight: {
            id: "slideInRight",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
        },
        shrinkBigIn: {
            id: "shrinkBigIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                duration: 0,
                                delay: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 4,
                                yValue: 4,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 1,
                                yValue: 1,
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0.7500000000000001,
                                yValue: 0.7500000000000001,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 1,
                                yValue: 1,
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});
