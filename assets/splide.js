// < !--Splide JS Library-- >
    function r(n, t) {
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(n, r.key, r);
        }
    }
function Jt(n, t, i) {
    t && r(n.prototype, t),
        i && r(n, i),
        Object.defineProperty(n, "prototype", { writable: !1 });
}
/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n, t;
(n = this),
    (t = function () {
        "use strict";
        var v = "(prefers-reduced-motion: reduce)",
            G = 4,
            rn = 5,
            r = {
                CREATED: 1,
                MOUNTED: 2,
                IDLE: 3,
                MOVING: G,
                SCROLLING: rn,
                DRAGGING: 6,
                DESTROYED: 7,
            };
        function D(n) {
            n.length = 0;
        }
        function o(n, t, i) {
            return Array.prototype.slice.call(n, t, i);
        }
        function R(n) {
            return n.bind.apply(n, [null].concat(o(arguments, 1)));
        }
        function on() { }
        var p = setTimeout;
        function h(n) {
            return requestAnimationFrame(n);
        }
        function u(n, t) {
            return typeof t === n;
        }
        function un(n) {
            return !c(n) && u("object", n);
        }
        var e = Array.isArray,
            x = R(u, "function"),
            C = R(u, "string"),
            en = R(u, "undefined");
        function c(n) {
            return null === n;
        }
        function m(n) {
            try {
                return n instanceof (n.ownerDocument.defaultView || window).HTMLElement;
            } catch (n) {
                return !1;
            }
        }
        function y(n) {
            return e(n) ? n : [n];
        }
        function g(n, t) {
            y(n).forEach(t);
        }
        function b(n, t) {
            return -1 < n.indexOf(t);
        }
        function k(n, t) {
            return n.push.apply(n, y(t)), n;
        }
        function A(t, n, i) {
            t &&
                g(n, function (n) {
                    n && t.classList[i ? "add" : "remove"](n);
                });
        }
        function M(n, t) {
            A(n, C(t) ? t.split(" ") : t, !0);
        }
        function L(n, t) {
            g(t, n.appendChild.bind(n));
        }
        function O(n, i) {
            g(n, function (n) {
                var t = (i || n).parentNode;
                t && t.insertBefore(n, i);
            });
        }
        function cn(n, t) {
            return m(n) && (n.msMatchesSelector || n.matches).call(n, t);
        }
        function S(n, t) {
            n = n ? o(n.children) : [];
            return t
                ? n.filter(function (n) {
                    return cn(n, t);
                })
                : n;
        }
        function fn(n, t) {
            return t ? S(n, t)[0] : n.firstElementChild;
        }
        var E = Object.keys;
        function w(t, i, n) {
            t &&
                (n ? E(t).reverse() : E(t)).forEach(function (n) {
                    "__proto__" !== n && i(t[n], n);
                });
        }
        function an(r) {
            return (
                o(arguments, 1).forEach(function (i) {
                    w(i, function (n, t) {
                        r[t] = i[t];
                    });
                }),
                r
            );
        }
        function d(i) {
            return (
                o(arguments, 1).forEach(function (n) {
                    w(n, function (n, t) {
                        e(n)
                            ? (i[t] = n.slice())
                            : un(n)
                                ? (i[t] = d({}, un(i[t]) ? i[t] : {}, n))
                                : (i[t] = n);
                    });
                }),
                i
            );
        }
        function sn(t, n) {
            g(n || E(t), function (n) {
                delete t[n];
            });
        }
        function P(n, i) {
            g(n, function (t) {
                g(i, function (n) {
                    t && t.removeAttribute(n);
                });
            });
        }
        function I(i, t, r) {
            un(t)
                ? w(t, function (n, t) {
                    I(i, t, n);
                })
                : g(i, function (n) {
                    c(r) || "" === r ? P(n, t) : n.setAttribute(t, String(r));
                });
        }
        function j(n, t, i) {
            n = document.createElement(n);
            return t && (C(t) ? M : I)(n, t), i && L(i, n), n;
        }
        function _(n, t, i) {
            if (en(i)) return getComputedStyle(n)[t];
            c(i) || (n.style[t] = "" + i);
        }
        function ln(n, t) {
            _(n, "display", t);
        }
        function dn(n) {
            (n.setActive && n.setActive()) || n.focus({ preventScroll: !0 });
        }
        function z(n, t) {
            return n.getAttribute(t);
        }
        function vn(n, t) {
            return n && n.classList.contains(t);
        }
        function N(n) {
            return n.getBoundingClientRect();
        }
        function T(n) {
            g(n, function (n) {
                n && n.parentNode && n.parentNode.removeChild(n);
            });
        }
        function hn(n) {
            return fn(new DOMParser().parseFromString(n, "text/html").body);
        }
        function F(n, t) {
            n.preventDefault(),
                t && (n.stopPropagation(), n.stopImmediatePropagation());
        }
        function pn(n, t) {
            return n && n.querySelector(t);
        }
        function gn(n, t) {
            return t ? o(n.querySelectorAll(t)) : [];
        }
        function X(n, t) {
            A(n, t, !1);
        }
        function mn(n) {
            return n.timeStamp;
        }
        function W(n) {
            return C(n) ? n : n ? n + "px" : "";
        }
        var yn = "splide",
            f = "data-" + yn;
        function bn(n, t) {
            if (!n) throw new Error("[" + yn + "] " + (t || ""));
        }
        var Y = Math.min,
            wn = Math.max,
            xn = Math.floor,
            kn = Math.ceil,
            U = Math.abs;
        function Sn(n, t, i) {
            return U(n - t) < i;
        }
        function En(n, t, i, r) {
            var o = Y(t, i),
                t = wn(t, i);
            return r ? o < n && n < t : o <= n && n <= t;
        }
        function q(n, t, i) {
            var r = Y(t, i),
                t = wn(t, i);
            return Y(wn(r, n), t);
        }
        function Ln(n) {
            return (0 < n) - (n < 0);
        }
        function On(t, n) {
            return (
                g(n, function (n) {
                    t = t.replace("%s", "" + n);
                }),
                t
            );
        }
        function An(n) {
            return n < 10 ? "0" + n : "" + n;
        }
        var _n = {};
        function zn() {
            var c = [];
            function i(n, i, r) {
                g(n, function (t) {
                    t &&
                        g(i, function (n) {
                            n.split(" ").forEach(function (n) {
                                n = n.split(".");
                                r(t, n[0], n[1]);
                            });
                        });
                });
            }
            return {
                bind: function (n, t, u, e) {
                    i(n, t, function (n, t, i) {
                        var r = "addEventListener" in n,
                            o = r
                                ? n.removeEventListener.bind(n, t, u, e)
                                : n.removeListener.bind(n, u);
                        r ? n.addEventListener(t, u, e) : n.addListener(u),
                            c.push([n, t, i, u, o]);
                    });
                },
                unbind: function (n, t, o) {
                    i(n, t, function (t, i, r) {
                        c = c.filter(function (n) {
                            return (
                                !!(
                                    n[0] !== t ||
                                    n[1] !== i ||
                                    n[2] !== r ||
                                    (o && n[3] !== o)
                                ) || (n[4](), !1)
                            );
                        });
                    });
                },
                dispatch: function (n, t, i) {
                    var r;
                    return (
                        "function" == typeof CustomEvent
                            ? (r = new CustomEvent(t, { bubbles: !0, detail: i }))
                            : (r = document.createEvent("CustomEvent")).initCustomEvent(
                                t,
                                !0,
                                !1,
                                i
                            ),
                        n.dispatchEvent(r),
                        r
                    );
                },
                destroy: function () {
                    c.forEach(function (n) {
                        n[4]();
                    }),
                        D(c);
                },
            };
        }
        var B = "mounted",
            H = "move",
            Dn = "moved",
            Mn = "click",
            Pn = "active",
            In = "inactive",
            Rn = "visible",
            Cn = "hidden",
            J = "refresh",
            K = "updated",
            jn = "resize",
            Nn = "resized",
            Tn = "scroll",
            V = "scrolled",
            a = "destroy",
            Gn = "navigation:mounted",
            Fn = "autoplay:play",
            Xn = "autoplay:pause",
            Wn = "lazyload:loaded",
            Yn = "sk",
            Un = "sh";
        function Q(n) {
            var i = n ? n.event.bus : document.createDocumentFragment(),
                r = zn();
            return (
                n && n.event.on(a, r.destroy),
                an(r, {
                    bus: i,
                    on: function (n, t) {
                        r.bind(i, y(n).join(" "), function (n) {
                            t.apply(t, e(n.detail) ? n.detail : []);
                        });
                    },
                    off: R(r.unbind, i),
                    emit: function (n) {
                        r.dispatch(i, n, o(arguments, 1));
                    },
                })
            );
        }
        function qn(t, n, i, r) {
            var o,
                u,
                e = Date.now,
                c = 0,
                f = !0,
                a = 0;
            function s() {
                if (!f) {
                    if (
                        ((c = t ? Y((e() - o) / t, 1) : 1),
                            i && i(c),
                            1 <= c && (n(), (o = e()), r && ++a >= r))
                    )
                        return l();
                    u = h(s);
                }
            }
            function l() {
                f = !0;
            }
            function d() {
                u && cancelAnimationFrame(u), (f = !(u = c = 0));
            }
            return {
                start: function (n) {
                    n || d(), (o = e() - (n ? c * t : 0)), (f = !1), (u = h(s));
                },
                rewind: function () {
                    (o = e()), (c = 0), i && i(c);
                },
                pause: l,
                cancel: d,
                set: function (n) {
                    t = n;
                },
                isPaused: function () {
                    return f;
                },
            };
        }
        function s(n) {
            var t = n;
            return {
                set: function (n) {
                    t = n;
                },
                is: function (n) {
                    return b(y(n), t);
                },
            };
        }
        var n = "Arrow",
            Bn = n + "Left",
            Hn = n + "Right",
            t = n + "Up",
            n = n + "Down",
            Jn = "ttb",
            l = {
                width: ["height"],
                left: ["top", "right"],
                right: ["bottom", "left"],
                x: ["y"],
                X: ["Y"],
                Y: ["X"],
                ArrowLeft: [t, Hn],
                ArrowRight: [n, Bn],
            };
        var Z = "role",
            $ = "tabindex",
            i = "aria-",
            Kn = i + "controls",
            Vn = i + "current",
            Qn = i + "selected",
            nn = i + "label",
            Zn = i + "labelledby",
            $n = i + "hidden",
            nt = i + "orientation",
            tt = i + "roledescription",
            it = i + "live",
            rt = i + "busy",
            ot = i + "atomic",
            ut = [Z, $, "disabled", Kn, Vn, nn, Zn, $n, nt, tt],
            i = yn + "__",
            et = yn,
            ct = i + "track",
            ft = i + "list",
            at = i + "slide",
            st = at + "--clone",
            lt = at + "__container",
            dt = i + "arrows",
            vt = i + "arrow",
            ht = vt + "--prev",
            pt = vt + "--next",
            gt = i + "pagination",
            mt = gt + "__page",
            yt = i + "progress" + "__bar",
            bt = i + "toggle",
            wt = i + "sr",
            tn = "is-active",
            xt = "is-prev",
            kt = "is-next",
            St = "is-visible",
            Et = "is-loading",
            Lt = "is-focus-in",
            Ot = "is-overflow",
            At = [tn, St, xt, kt, Et, Lt, Ot];
        var _t = "touchstart mousedown",
            zt = "touchmove mousemove",
            Dt = "touchend touchcancel mouseup click";
        var Mt = "slide",
            Pt = "loop",
            It = "fade";
        function Rt(o, r, t, u) {
            var e,
                n = Q(o),
                i = n.on,
                c = n.emit,
                f = n.bind,
                a = o.Components,
                s = o.root,
                l = o.options,
                d = l.isNavigation,
                v = l.updateOnMove,
                h = l.i18n,
                p = l.pagination,
                g = l.slideFocus,
                m = a.Direction.resolve,
                y = z(u, "style"),
                b = z(u, nn),
                w = -1 < t,
                x = fn(u, "." + lt);
            function k() {
                var n = o.splides
                    .map(function (n) {
                        n = n.splide.Components.Slides.getAt(r);
                        return n ? n.slide.id : "";
                    })
                    .join(" ");
                I(u, nn, On(h.slideX, (w ? t : r) + 1)),
                    I(u, Kn, n),
                    I(u, Z, g ? "button" : ""),
                    g && P(u, tt);
            }
            function S() {
                e || E();
            }
            function E() {
                var n, t, i;
                e ||
                    ((n = o.index),
                        (i = L()) !== vn(u, tn) &&
                        (A(u, tn, i), I(u, Vn, (d && i) || ""), c(i ? Pn : In, O)),
                        (i = (function () {
                            if (o.is(It)) return L();
                            var n = N(a.Elements.track),
                                t = N(u),
                                i = m("left", !0),
                                r = m("right", !0);
                            return xn(n[i]) <= kn(t[i]) && xn(t[r]) <= kn(n[r]);
                        })()),
                        (t = !i && (!L() || w)),
                        o.state.is([G, rn]) || I(u, $n, t || ""),
                        I(gn(u, l.focusableNodes || ""), $, t ? -1 : ""),
                        g && I(u, $, t ? -1 : 0),
                        i !== vn(u, St) && (A(u, St, i), c(i ? Rn : Cn, O)),
                        i ||
                        document.activeElement !== u ||
                        ((t = a.Slides.getAt(o.index)) && dn(t.slide)),
                        A(u, xt, r === n - 1),
                        A(u, kt, r === n + 1));
            }
            function L() {
                var n = o.index;
                return n === r || (l.cloneStatus && n === t);
            }
            var O = {
                index: r,
                slideIndex: t,
                slide: u,
                container: x,
                isClone: w,
                mount: function () {
                    w ||
                        ((u.id = s.id + "-slide" + An(r + 1)),
                            I(u, Z, p ? "tabpanel" : "group"),
                            I(u, tt, h.slide),
                            I(u, nn, b || On(h.slideLabel, [r + 1, o.length]))),
                        f(u, "click", R(c, Mn, O)),
                        f(u, "keydown", R(c, Yn, O)),
                        i([Dn, Un, V], E),
                        i(Gn, k),
                        v && i(H, S);
                },
                destroy: function () {
                    (e = !0),
                        n.destroy(),
                        X(u, At),
                        P(u, ut),
                        I(u, "style", y),
                        I(u, nn, b || "");
                },
                update: E,
                style: function (n, t, i) {
                    _((i && x) || u, n, t);
                },
                isWithin: function (n, t) {
                    return (
                        (n = U(n - r)),
                        (n = w || (!l.rewind && !o.is(Pt)) ? n : Y(n, o.length - n)) <= t
                    );
                },
            };
            return O;
        }
        var Ct = f + "-interval";
        var jt = { passive: !1, capture: !0 };
        var Nt = { Spacebar: " ", Right: Hn, Left: Bn, Up: t, Down: n };
        function Tt(n) {
            return (n = C(n) ? n : n.key), Nt[n] || n;
        }
        var Gt = "keydown";
        var Ft = f + "-lazy",
            Xt = Ft + "-srcset",
            Wt = "[" + Ft + "], [" + Xt + "]";
        var Yt = [" ", "Enter"];
        var Ut = Object.freeze({
            __proto__: null,
            Media: function (r, n, o) {
                var u = r.state,
                    t = o.breakpoints || {},
                    e = o.reducedMotion || {},
                    i = zn(),
                    c = [];
                function f(n) {
                    n && i.destroy();
                }
                function a(n, t) {
                    t = matchMedia(t);
                    i.bind(t, "change", s), c.push([n, t]);
                }
                function s() {
                    var n = u.is(7),
                        t = o.direction,
                        i = c.reduce(function (n, t) {
                            return d(n, t[1].matches ? t[0] : {});
                        }, {});
                    sn(o),
                        l(i),
                        o.destroy
                            ? r.destroy("completely" === o.destroy)
                            : n
                                ? (f(!0), r.mount())
                                : t !== o.direction && r.refresh();
                }
                function l(n, t, i) {
                    d(o, n),
                        t && d(Object.getPrototypeOf(o), n),
                        (!i && u.is(1)) || r.emit(K, o);
                }
                return {
                    setup: function () {
                        var i = "min" === o.mediaQuery;
                        E(t)
                            .sort(function (n, t) {
                                return i ? +n - +t : +t - +n;
                            })
                            .forEach(function (n) {
                                a(t[n], "(" + (i ? "min" : "max") + "-width:" + n + "px)");
                            }),
                            a(e, v),
                            s();
                    },
                    destroy: f,
                    reduce: function (n) {
                        matchMedia(v).matches && (n ? d(o, e) : sn(o, E(e)));
                    },
                    set: l,
                };
            },
            Direction: function (n, t, o) {
                return {
                    resolve: function (n, t, i) {
                        var r =
                            "rtl" !== (i = i || o.direction) || t ? (i === Jn ? 0 : -1) : 1;
                        return (
                            (l[n] && l[n][r]) ||
                            n.replace(/width|left|right/i, function (n, t) {
                                n = l[n.toLowerCase()][r] || n;
                                return 0 < t ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                            })
                        );
                    },
                    orient: function (n) {
                        return n * ("rtl" === o.direction ? 1 : -1);
                    },
                };
            },
            Elements: function (n, t, i) {
                var r,
                    o,
                    u,
                    e = Q(n),
                    c = e.on,
                    f = e.bind,
                    a = n.root,
                    s = i.i18n,
                    l = {},
                    d = [],
                    v = [],
                    h = [];
                function p() {
                    (r = y("." + ct)),
                        (o = fn(r, "." + ft)),
                        bn(r && o, "A track/list element is missing."),
                        k(d, S(o, "." + at + ":not(." + st + ")")),
                        w(
                            {
                                arrows: dt,
                                pagination: gt,
                                prev: ht,
                                next: pt,
                                bar: yt,
                                toggle: bt,
                            },
                            function (n, t) {
                                l[t] = y("." + n);
                            }
                        ),
                        an(l, { root: a, track: r, list: o, slides: d });
                    var n =
                        a.id ||
                        (function (n) {
                            return "" + n + An((_n[n] = (_n[n] || 0) + 1));
                        })(yn),
                        t = i.role;
                    (a.id = n),
                        (r.id = r.id || n + "-track"),
                        (o.id = o.id || n + "-list"),
                        !z(a, Z) && "SECTION" !== a.tagName && t && I(a, Z, t),
                        I(a, tt, s.carousel),
                        I(o, Z, "presentation"),
                        m();
                }
                function g(n) {
                    var t = ut.concat("style");
                    D(d), X(a, v), X(r, h), P([r, o], t), P(a, n ? t : ["style", tt]);
                }
                function m() {
                    X(a, v),
                        X(r, h),
                        (v = b(et)),
                        (h = b(ct)),
                        M(a, v),
                        M(r, h),
                        I(a, nn, i.label),
                        I(a, Zn, i.labelledby);
                }
                function y(n) {
                    n = pn(a, n);
                    return n &&
                        (function (n, t) {
                            if (x(n.closest)) return n.closest(t);
                            for (var i = n; i && 1 === i.nodeType && !cn(i, t);)
                                i = i.parentElement;
                            return i;
                        })(n, "." + et) === a
                        ? n
                        : void 0;
                }
                function b(n) {
                    return [
                        n + "--" + i.type,
                        n + "--" + i.direction,
                        i.drag && n + "--draggable",
                        i.isNavigation && n + "--nav",
                        n === et && tn,
                    ];
                }
                return an(l, {
                    setup: p,
                    mount: function () {
                        c(J, g),
                            c(J, p),
                            c(K, m),
                            f(
                                document,
                                _t + " keydown",
                                function (n) {
                                    u = "keydown" === n.type;
                                },
                                { capture: !0 }
                            ),
                            f(a, "focusin", function () {
                                A(a, Lt, !!u);
                            });
                    },
                    destroy: g,
                });
            },
            Slides: function (r, o, u) {
                var n = Q(r),
                    t = n.on,
                    e = n.emit,
                    c = n.bind,
                    f = (n = o.Elements).slides,
                    a = n.list,
                    s = [];
                function i() {
                    f.forEach(function (n, t) {
                        d(n, t, -1);
                    });
                }
                function l() {
                    h(function (n) {
                        n.destroy();
                    }),
                        D(s);
                }
                function d(n, t, i) {
                    t = Rt(r, t, i, n);
                    t.mount(),
                        s.push(t),
                        s.sort(function (n, t) {
                            return n.index - t.index;
                        });
                }
                function v(n) {
                    return n
                        ? p(function (n) {
                            return !n.isClone;
                        })
                        : s;
                }
                function h(n, t) {
                    v(t).forEach(n);
                }
                function p(t) {
                    return s.filter(
                        x(t)
                            ? t
                            : function (n) {
                                return C(t) ? cn(n.slide, t) : b(y(t), n.index);
                            }
                    );
                }
                return {
                    mount: function () {
                        i(), t(J, l), t(J, i);
                    },
                    destroy: l,
                    update: function () {
                        h(function (n) {
                            n.update();
                        });
                    },
                    register: d,
                    get: v,
                    getIn: function (n) {
                        var t = o.Controller,
                            i = t.toIndex(n),
                            r = t.hasFocus() ? 1 : u.perPage;
                        return p(function (n) {
                            return En(n.index, i, i + r - 1);
                        });
                    },
                    getAt: function (n) {
                        return p(n)[0];
                    },
                    add: function (n, o) {
                        g(n, function (n) {
                            var t, i, r;
                            m((n = C(n) ? hn(n) : n)) &&
                                ((t = f[o]) ? O(n, t) : L(a, n),
                                    M(n, u.classes.slide),
                                    (t = n),
                                    (i = R(e, jn)),
                                    (t = gn(t, "img")),
                                    (r = t.length)
                                        ? t.forEach(function (n) {
                                            c(n, "load error", function () {
                                                --r || i();
                                            });
                                        })
                                        : i());
                        }),
                            e(J);
                    },
                    remove: function (n) {
                        T(
                            p(n).map(function (n) {
                                return n.slide;
                            })
                        ),
                            e(J);
                    },
                    forEach: h,
                    filter: p,
                    style: function (t, i, r) {
                        h(function (n) {
                            n.style(t, i, r);
                        });
                    },
                    getLength: function (n) {
                        return (n ? f : s).length;
                    },
                    isEnough: function () {
                        return s.length > u.perPage;
                    },
                };
            },
            Layout: function (t, n, i) {
                var r,
                    o,
                    u,
                    e = (a = Q(t)).on,
                    c = a.bind,
                    f = a.emit,
                    a = n.Slides,
                    s = n.Direction.resolve,
                    l = (n = n.Elements).root,
                    d = n.track,
                    v = n.list,
                    h = a.getAt,
                    p = a.style;
                function g() {
                    (r = i.direction === Jn),
                        _(l, "maxWidth", W(i.width)),
                        _(d, s("paddingLeft"), y(!1)),
                        _(d, s("paddingRight"), y(!0)),
                        m(!0);
                }
                function m(n) {
                    var t = N(l);
                    (!n && o.width === t.width && o.height === t.height) ||
                        (_(
                            d,
                            "height",
                            (function () {
                                var n = "";
                                r &&
                                    (bn((n = b()), "height or heightRatio is missing."),
                                        (n = "calc(" + n + " - " + y(!1) + " - " + y(!0) + ")"));
                                return n;
                            })()
                        ),
                            p(s("marginRight"), W(i.gap)),
                            p(
                                "width",
                                i.autoWidth ? null : W(i.fixedWidth) || (r ? "" : w())
                            ),
                            p(
                                "height",
                                W(i.fixedHeight) || (r ? (i.autoHeight ? null : w()) : b()),
                                !0
                            ),
                            (o = t),
                            f(Nn),
                            u !== (u = O()) && (A(l, Ot, u), f("overflow", u)));
                }
                function y(n) {
                    var t = i.padding,
                        n = s(n ? "right" : "left");
                    return (t && W(t[n] || (un(t) ? 0 : t))) || "0px";
                }
                function b() {
                    return W(i.height || N(v).width * i.heightRatio);
                }
                function w() {
                    var n = W(i.gap);
                    return (
                        "calc((100%" +
                        (n && " + " + n) +
                        ")/" +
                        (i.perPage || 1) +
                        (n && " - " + n) +
                        ")"
                    );
                }
                function x() {
                    return N(v)[s("width")];
                }
                function k(n, t) {
                    n = h(n || 0);
                    return n ? N(n.slide)[s("width")] + (t ? 0 : L()) : 0;
                }
                function S(n, t) {
                    var i,
                        n = h(n);
                    return n
                        ? ((n = N(n.slide)[s("right")]),
                            (i = N(v)[s("left")]),
                            U(n - i) + (t ? 0 : L()))
                        : 0;
                }
                function E(n) {
                    return S(t.length - 1) - S(0) + k(0, n);
                }
                function L() {
                    var n = h(0);
                    return (n && parseFloat(_(n.slide, s("marginRight")))) || 0;
                }
                function O() {
                    return t.is(It) || E(!0) > x();
                }
                return {
                    mount: function () {
                        var n, t, i;
                        g(),
                            c(
                                window,
                                "resize load",
                                ((n = R(f, jn)),
                                    (i = qn(t || 0, n, null, 1)),
                                    function () {
                                        i.isPaused() && i.start();
                                    })
                            ),
                            e([K, J], g),
                            e(jn, m);
                    },
                    resize: m,
                    listSize: x,
                    slideSize: k,
                    sliderSize: E,
                    totalSize: S,
                    getPadding: function (n) {
                        return (
                            parseFloat(_(d, s("padding" + (n ? "Right" : "Left")))) || 0
                        );
                    },
                    isOverflow: O,
                };
            },
            Clones: function (c, i, f) {
                var t,
                    r = Q(c),
                    n = r.on,
                    a = i.Elements,
                    s = i.Slides,
                    o = i.Direction.resolve,
                    l = [];
                function u() {
                    if ((n(J, d), n([K, jn], v), (t = h()))) {
                        var o = t,
                            u = s.get().slice(),
                            e = u.length;
                        if (e) {
                            for (; u.length < o;) k(u, u);
                            k(u.slice(-o), u.slice(0, o)).forEach(function (n, t) {
                                var i = t < o,
                                    r = (function (n, t) {
                                        n = n.cloneNode(!0);
                                        return (
                                            M(n, f.classes.clone),
                                            (n.id = c.root.id + "-clone" + An(t + 1)),
                                            n
                                        );
                                    })(n.slide, t);
                                i ? O(r, u[0].slide) : L(a.list, r),
                                    k(l, r),
                                    s.register(r, t - o + (i ? 0 : e), n.index);
                            });
                        }
                        i.Layout.resize(!0);
                    }
                }
                function d() {
                    e(), u();
                }
                function e() {
                    T(l), D(l), r.destroy();
                }
                function v() {
                    var n = h();
                    t !== n && (t < n || !n) && r.emit(J);
                }
                function h() {
                    var n,
                        t = f.clones;
                    return (
                        c.is(Pt)
                            ? en(t) &&
                            (t =
                                ((n = f[o("fixedWidth")] && i.Layout.slideSize(0)) &&
                                    kn(N(a.track)[o("width")] / n)) ||
                                (f[o("autoWidth")] && c.length) ||
                                2 * f.perPage)
                            : (t = 0),
                        t
                    );
                }
                return { mount: u, destroy: e };
            },
            Move: function (r, c, o) {
                var e,
                    n = Q(r),
                    t = n.on,
                    f = n.emit,
                    a = r.state.set,
                    u = (n = c.Layout).slideSize,
                    i = n.getPadding,
                    s = n.totalSize,
                    l = n.listSize,
                    d = n.sliderSize,
                    v = (n = c.Direction).resolve,
                    h = n.orient,
                    p = (n = c.Elements).list,
                    g = n.track;
                function m() {
                    c.Controller.isBusy() ||
                        (c.Scroll.cancel(), y(r.index), c.Slides.update());
                }
                function y(n) {
                    b(S(n, !0));
                }
                function b(n, t) {
                    r.is(It) ||
                        ((t = t
                            ? n
                            : (function (n) {
                                {
                                    var t, i;
                                    r.is(Pt) &&
                                        ((t = k(n)),
                                            (i = t > c.Controller.getEnd()),
                                            (t < 0 || i) && (n = w(n, i)));
                                }
                                return n;
                            })(n)),
                            _(p, "transform", "translate" + v("X") + "(" + t + "px)"),
                            n !== t && f(Un));
                }
                function w(n, t) {
                    var i = n - L(t),
                        r = d();
                    return (n -= h(r * (kn(U(i) / r) || 1)) * (t ? 1 : -1));
                }
                function x() {
                    b(E(), !0), e.cancel();
                }
                function k(n) {
                    for (
                        var t = c.Slides.get(), i = 0, r = 1 / 0, o = 0;
                        o < t.length;
                        o++
                    ) {
                        var u = t[o].index,
                            e = U(S(u, !0) - n);
                        if (!(e <= r)) break;
                        (r = e), (i = u);
                    }
                    return i;
                }
                function S(n, t) {
                    var i = h(
                        s(n - 1) -
                        ((n = n),
                            "center" === (i = o.focus)
                                ? (l() - u(n, !0)) / 2
                                : +i * u(n) || 0)
                    );
                    return t
                        ? ((n = i),
                            (n = o.trimSpace && r.is(Mt) ? q(n, 0, h(d(!0) - l())) : n))
                        : i;
                }
                function E() {
                    var n = v("left");
                    return N(p)[n] - N(g)[n] + h(i(!1));
                }
                function L(n) {
                    return S(n ? c.Controller.getEnd() : 0, !!o.trimSpace);
                }
                return {
                    mount: function () {
                        (e = c.Transition), t([B, Nn, K, J], m);
                    },
                    move: function (n, t, i, r) {
                        var o, u;
                        n !== t &&
                            ((o = i < n),
                                (u = h(w(E(), o))),
                                o ? 0 <= u : u <= p[v("scrollWidth")] - N(g)[v("width")]) &&
                            (x(), b(w(E(), i < n), !0)),
                            a(G),
                            f(H, t, i, n),
                            e.start(t, function () {
                                a(3), f(Dn, t, i, n), r && r();
                            });
                    },
                    jump: y,
                    translate: b,
                    shift: w,
                    cancel: x,
                    toIndex: k,
                    toPosition: S,
                    getPosition: E,
                    getLimit: L,
                    exceededLimit: function (n, t) {
                        t = en(t) ? E() : t;
                        var i = !0 !== n && h(t) < h(L(!1)),
                            n = !1 !== n && h(t) > h(L(!0));
                        return i || n;
                    },
                    reposition: m,
                };
            },
            Controller: function (o, u, e) {
                var c,
                    f,
                    a,
                    s,
                    n = Q(o),
                    t = n.on,
                    i = n.emit,
                    l = u.Move,
                    d = l.getPosition,
                    r = l.getLimit,
                    v = l.toPosition,
                    h = (n = u.Slides).isEnough,
                    p = n.getLength,
                    g = e.omitEnd,
                    m = o.is(Pt),
                    y = o.is(Mt),
                    b = R(L, !1),
                    w = R(L, !0),
                    x = e.start || 0,
                    k = x;
                function S() {
                    (f = p(!0)), (a = e.perMove), (s = e.perPage), (c = _());
                    var n = q(x, 0, g ? c : f - 1);
                    n !== x && ((x = n), l.reposition());
                }
                function E() {
                    c !== _() && i("ei");
                }
                function L(n, t) {
                    var i = a || (P() ? 1 : s),
                        i = O(x + i * (n ? -1 : 1), x, !(a || P()));
                    return -1 === i && y && !Sn(d(), r(!n), 1)
                        ? n
                            ? 0
                            : c
                        : t
                            ? i
                            : A(i);
                }
                function O(n, t, i) {
                    var r;
                    return (
                        h() || P()
                            ? ((r = (function (n) {
                                if (y && "move" === e.trimSpace && n !== x)
                                    for (
                                        var t = d();
                                        t === v(n, !0) && En(n, 0, o.length - 1, !e.rewind);

                                    )
                                        n < x ? --n : ++n;
                                return n;
                            })(n)) !== n && ((t = n), (n = r), (i = !1)),
                                n < 0 || c < n
                                    ? (n =
                                        a || (!En(0, n, t, !0) && !En(c, t, n, !0))
                                            ? m
                                                ? i
                                                    ? n < 0
                                                        ? -(f % s || s)
                                                        : f
                                                    : n
                                                : e.rewind
                                                    ? n < 0
                                                        ? c
                                                        : 0
                                                    : -1
                                            : z(D(n)))
                                    : i && n !== t && (n = z(D(t) + (n < t ? -1 : 1))))
                            : (n = -1),
                        n
                    );
                }
                function A(n) {
                    return m ? (n + f) % f || 0 : n;
                }
                function _() {
                    for (var n = f - (P() || (m && a) ? 1 : s); g && 0 < n--;)
                        if (v(f - 1, !0) !== v(n, !0)) {
                            n++;
                            break;
                        }
                    return q(n, 0, f - 1);
                }
                function z(n) {
                    return q(P() ? n : s * n, 0, c);
                }
                function D(n) {
                    return P() ? Y(n, c) : xn((c <= n ? f - 1 : n) / s);
                }
                function M(n) {
                    n !== x && ((k = x), (x = n));
                }
                function P() {
                    return !en(e.focus) || e.isNavigation;
                }
                function I() {
                    return o.state.is([G, rn]) && !!e.waitForTransition;
                }
                return {
                    mount: function () {
                        S(), t([K, J, "ei"], S), t(Nn, E);
                    },
                    go: function (n, t, i) {
                        var r;
                        I() ||
                            (-1 <
                                (r = A(
                                    (n = (function (n) {
                                        var t = x;
                                        {
                                            var i, r;
                                            C(n)
                                                ? ((r = n.match(/([+\-<>])(\d+)?/) || []),
                                                    (i = r[1]),
                                                    (r = r[2]),
                                                    "+" === i || "-" === i
                                                        ? (t = O(x + +("" + i + (+r || 1)), x))
                                                        : ">" === i
                                                            ? (t = r ? z(+r) : b(!0))
                                                            : "<" === i && (t = w(!0)))
                                                : (t = m ? n : q(n, 0, c));
                                        }
                                        return t;
                                    })(n))
                                )) &&
                                (t || r !== x) &&
                                (M(r), l.move(n, r, k, i)));
                    },
                    scroll: function (n, t, i, r) {
                        u.Scroll.scroll(n, t, i, function () {
                            var n = A(l.toIndex(d()));
                            M(g ? Y(n, c) : n), r && r();
                        });
                    },
                    getNext: b,
                    getPrev: w,
                    getAdjacent: L,
                    getEnd: _,
                    setIndex: M,
                    getIndex: function (n) {
                        return n ? k : x;
                    },
                    toIndex: z,
                    toPage: D,
                    toDest: function (n) {
                        return (n = l.toIndex(n)), y ? q(n, 0, c) : n;
                    },
                    hasFocus: P,
                    isBusy: I,
                };
            },
            Arrows: function (o, n, t) {
                var i,
                    r,
                    u = Q(o),
                    e = u.on,
                    c = u.bind,
                    f = u.emit,
                    a = t.classes,
                    s = t.i18n,
                    l = n.Elements,
                    d = n.Controller,
                    v = l.arrows,
                    h = l.track,
                    p = v,
                    g = l.prev,
                    m = l.next,
                    y = {};
                function b() {
                    var n = t.arrows;
                    !n ||
                        (g && m) ||
                        ((p = v || j("div", a.arrows)),
                            (g = S(!0)),
                            (m = S(!1)),
                            (i = !0),
                            L(p, [g, m]),
                            v || O(p, h)),
                        g &&
                        m &&
                        (an(y, { prev: g, next: m }),
                            ln(p, n ? "" : "none"),
                            M(p, (r = dt + "--" + t.direction)),
                            n &&
                            (e([B, Dn, J, V, "ei"], E),
                                c(m, "click", R(k, ">")),
                                c(g, "click", R(k, "<")),
                                E(),
                                I([g, m], Kn, h.id),
                                f("arrows:mounted", g, m))),
                        e(K, w);
                }
                function w() {
                    x(), b();
                }
                function x() {
                    u.destroy(),
                        X(p, r),
                        i ? (T(v ? [g, m] : p), (g = m = null)) : P([g, m], ut);
                }
                function k(n) {
                    d.go(n, !0);
                }
                function S(n) {
                    return hn(
                        '<button class="' +
                        a.arrow +
                        " " +
                        (n ? a.prev : a.next) +
                        '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                        (t.arrowPath ||
                            "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                        '" />'
                    );
                }
                function E() {
                    var n, t, i, r;
                    g &&
                        m &&
                        ((r = o.index),
                            (n = d.getPrev()),
                            (t = d.getNext()),
                            (i = -1 < n && r < n ? s.last : s.prev),
                            (r = -1 < t && t < r ? s.first : s.next),
                            (g.disabled = n < 0),
                            (m.disabled = t < 0),
                            I(g, nn, i),
                            I(m, nn, r),
                            f("arrows:updated", g, m, n, t));
                }
                return { arrows: y, mount: b, destroy: x, update: E };
            },
            Autoplay: function (n, t, i) {
                var r,
                    o,
                    u = Q(n),
                    e = u.on,
                    c = u.bind,
                    f = u.emit,
                    a = qn(i.interval, n.go.bind(n, ">"), function (n) {
                        var t = l.bar;
                        t && _(t, "width", 100 * n + "%"), f("autoplay:playing", n);
                    }),
                    s = a.isPaused,
                    l = t.Elements,
                    d = (u = t.Elements).root,
                    v = u.toggle,
                    h = i.autoplay,
                    p = "pause" === h;
                function g() {
                    s() &&
                        t.Slides.isEnough() &&
                        (a.start(!i.resetProgress), (o = r = p = !1), b(), f(Fn));
                }
                function m(n) {
                    (p = !!(n = void 0 === n ? !0 : n)), b(), s() || (a.pause(), f(Xn));
                }
                function y() {
                    p || (r || o ? m(!1) : g());
                }
                function b() {
                    v && (A(v, tn, !p), I(v, nn, i.i18n[p ? "play" : "pause"]));
                }
                function w(n) {
                    n = t.Slides.getAt(n);
                    a.set((n && +z(n.slide, Ct)) || i.interval);
                }
                return {
                    mount: function () {
                        h &&
                            (i.pauseOnHover &&
                                c(d, "mouseenter mouseleave", function (n) {
                                    (r = "mouseenter" === n.type), y();
                                }),
                                i.pauseOnFocus &&
                                c(d, "focusin focusout", function (n) {
                                    (o = "focusin" === n.type), y();
                                }),
                                v &&
                                c(v, "click", function () {
                                    p ? g() : m(!0);
                                }),
                                e([H, Tn, J], a.rewind),
                                e(H, w),
                                v && I(v, Kn, l.track.id),
                                p || g(),
                                b());
                    },
                    destroy: a.cancel,
                    play: g,
                    pause: m,
                    isPaused: s,
                };
            },
            Cover: function (n, t, i) {
                var r = Q(n).on;
                function o(i) {
                    t.Slides.forEach(function (n) {
                        var t = fn(n.container || n.slide, "img");
                        t && t.src && u(i, t, n);
                    });
                }
                function u(n, t, i) {
                    i.style(
                        "background",
                        n ? 'center/cover no-repeat url("' + t.src + '")' : "",
                        !0
                    ),
                        ln(t, n ? "none" : "");
                }
                return {
                    mount: function () {
                        i.cover && (r(Wn, R(u, !0)), r([B, K, J], R(o, !0)));
                    },
                    destroy: R(o, !1),
                };
            },
            Scroll: function (n, c, u) {
                var f,
                    a,
                    t = Q(n),
                    i = t.on,
                    s = t.emit,
                    l = n.state.set,
                    d = c.Move,
                    v = d.getPosition,
                    e = d.getLimit,
                    h = d.exceededLimit,
                    p = d.translate,
                    g = n.is(Mt),
                    m = 1;
                function y(n, t, i, r, o) {
                    var u,
                        e = v(),
                        i =
                            (x(),
                                !i ||
                                (g && h()) ||
                                ((i = c.Layout.sliderSize()),
                                    (u = Ln(n) * i * xn(U(n) / i) || 0),
                                    (n = d.toPosition(c.Controller.toDest(n % i)) + u)),
                                Sn(e, n, 1));
                    (m = 1),
                        (t = i ? 0 : t || wn(U(n - e) / 1.5, 800)),
                        (a = r),
                        (f = qn(t, b, R(w, e, n, o), 1)),
                        l(rn),
                        s(Tn),
                        f.start();
                }
                function b() {
                    l(3), a && a(), s(V);
                }
                function w(n, t, i, r) {
                    var o = v(),
                        r =
                            (n +
                                (t - n) *
                                ((t = r),
                                    (n = u.easingFunc) ? n(t) : 1 - Math.pow(1 - t, 4)) -
                                o) *
                            m;
                    p(o + r),
                        g &&
                        !i &&
                        h() &&
                        ((m *= 0.6), U(r) < 10 && y(e(h(!0)), 600, !1, a, !0));
                }
                function x() {
                    f && f.cancel();
                }
                function r() {
                    f && !f.isPaused() && (x(), b());
                }
                return {
                    mount: function () {
                        i(H, x), i([K, J], r);
                    },
                    destroy: x,
                    scroll: y,
                    cancel: r,
                };
            },
            Drag: function (e, o, c) {
                var f,
                    t,
                    u,
                    a,
                    s,
                    l,
                    d,
                    v,
                    n = Q(e),
                    i = n.on,
                    h = n.emit,
                    p = n.bind,
                    g = n.unbind,
                    m = e.state,
                    y = o.Move,
                    b = o.Scroll,
                    w = o.Controller,
                    x = o.Elements.track,
                    k = o.Media.reduce,
                    r = (n = o.Direction).resolve,
                    S = n.orient,
                    E = y.getPosition,
                    L = y.exceededLimit,
                    O = !1;
                function j() {
                    var n = c.drag;
                    C(!n), (a = "free" === n);
                }
                function N(n) {
                    var t, i, r;
                    (l = !1),
                        d ||
                        ((t = R(n)),
                            (i = n.target),
                            (r = c.noDrag),
                            cn(i, "." + mt + ", ." + vt) ||
                            (r && cn(i, r)) ||
                            (!t && n.button) ||
                            (w.isBusy()
                                ? F(n, !0)
                                : ((v = t ? x : window),
                                    (s = m.is([G, rn])),
                                    (u = null),
                                    p(v, zt, A, jt),
                                    p(v, Dt, _, jt),
                                    y.cancel(),
                                    b.cancel(),
                                    z(n))));
                }
                function A(n) {
                    var t, i, r, o, u;
                    m.is(6) || (m.set(6), h("drag")),
                        n.cancelable &&
                        (s
                            ? (y.translate(f + D(n) / (O && e.is(Mt) ? 5 : 1)),
                                (u = 200 < M(n)),
                                (t = O !== (O = L())),
                                (u || t) && z(n),
                                (l = !0),
                                h("dragging"),
                                F(n))
                            : U(D((u = n))) > U(D(u, !0)) &&
                            ((t = n),
                                (i = c.dragMinThreshold),
                                (r = un(i)),
                                (o = (r && i.mouse) || 0),
                                (r = (r ? i.touch : +i) || 10),
                                (s = U(D(t)) > (R(t) ? r : o)),
                                F(n)));
                }
                function _(n) {
                    var t, i, r;
                    m.is(6) && (m.set(3), h("dragged")),
                        s &&
                        ((i = (function (n) {
                            return (
                                E() +
                                Ln(n) *
                                Y(
                                    U(n) * (c.flickPower || 600),
                                    a ? 1 / 0 : o.Layout.listSize() * (c.flickMaxPages || 1)
                                )
                            );
                        })(
                            (t = (function (n) {
                                if (e.is(Pt) || !O) {
                                    var t = M(n);
                                    if (t && t < 200) return D(n) / t;
                                }
                                return 0;
                            })((t = n)))
                        )),
                            (r = c.rewind && c.rewindByDrag),
                            k(!1),
                            a
                                ? w.scroll(i, 0, c.snap)
                                : e.is(It)
                                    ? w.go(S(Ln(t)) < 0 ? (r ? "<" : "-") : r ? ">" : "+")
                                    : e.is(Mt) && O && r
                                        ? w.go(L(!0) ? ">" : "<")
                                        : w.go(w.toDest(i), !0),
                            k(!0),
                            F(n)),
                        g(v, zt, A),
                        g(v, Dt, _),
                        (s = !1);
                }
                function T(n) {
                    !d && l && F(n, !0);
                }
                function z(n) {
                    (u = t), (t = n), (f = E());
                }
                function D(n, t) {
                    return I(n, t) - I(P(n), t);
                }
                function M(n) {
                    return mn(n) - mn(P(n));
                }
                function P(n) {
                    return (t === n && u) || t;
                }
                function I(n, t) {
                    return (R(n) ? n.changedTouches[0] : n)["page" + r(t ? "Y" : "X")];
                }
                function R(n) {
                    return "undefined" != typeof TouchEvent && n instanceof TouchEvent;
                }
                function C(n) {
                    d = n;
                }
                return {
                    mount: function () {
                        p(x, zt, on, jt),
                            p(x, Dt, on, jt),
                            p(x, _t, N, jt),
                            p(x, "click", T, { capture: !0 }),
                            p(x, "dragstart", F),
                            i([B, K], j);
                    },
                    disable: C,
                    isDragging: function () {
                        return s;
                    },
                };
            },
            Keyboard: function (t, n, i) {
                var r,
                    o,
                    u = Q(t),
                    e = u.on,
                    c = u.bind,
                    f = u.unbind,
                    a = t.root,
                    s = n.Direction.resolve;
                function l() {
                    var n = i.keyboard;
                    n && ((r = "global" === n ? window : a), c(r, Gt, h));
                }
                function d() {
                    f(r, Gt);
                }
                function v() {
                    var n = o;
                    (o = !0),
                        p(function () {
                            o = n;
                        });
                }
                function h(n) {
                    o || ((n = Tt(n)) === s(Bn) ? t.go("<") : n === s(Hn) && t.go(">"));
                }
                return {
                    mount: function () {
                        l(), e(K, d), e(K, l), e(H, v);
                    },
                    destroy: d,
                    disable: function (n) {
                        o = n;
                    },
                };
            },
            LazyLoad: function (i, n, o) {
                var t = Q(i),
                    r = t.on,
                    u = t.off,
                    e = t.bind,
                    c = t.emit,
                    f = "sequential" === o.lazyLoad,
                    a = [Dn, V],
                    s = [];
                function l() {
                    D(s),
                        n.Slides.forEach(function (r) {
                            gn(r.slide, Wt).forEach(function (n) {
                                var t = z(n, Ft),
                                    i = z(n, Xt);
                                (t === n.src && i === n.srcset) ||
                                    ((t = o.classes.spinner),
                                        (t = fn((i = n.parentElement), "." + t) || j("span", t, i)),
                                        s.push([n, r, t]),
                                        n.src || ln(n, "none"));
                            });
                        }),
                        (f ? p : (u(a), r(a, d), d))();
                }
                function d() {
                    (s = s.filter(function (n) {
                        var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
                        return !n[1].isWithin(i.index, t) || v(n);
                    })).length || u(a);
                }
                function v(n) {
                    var t = n[0];
                    M(n[1].slide, Et),
                        e(t, "load error", R(h, n)),
                        I(t, "src", z(t, Ft)),
                        I(t, "srcset", z(t, Xt)),
                        P(t, Ft),
                        P(t, Xt);
                }
                function h(n, t) {
                    var i = n[0],
                        r = n[1];
                    X(r.slide, Et),
                        "error" !== t.type && (T(n[2]), ln(i, ""), c(Wn, i, r), c(jn)),
                        f && p();
                }
                function p() {
                    s.length && v(s.shift());
                }
                return {
                    mount: function () {
                        o.lazyLoad && (l(), r(J, l));
                    },
                    destroy: R(D, s),
                    check: d,
                };
            },
            Pagination: function (l, n, d) {
                var v,
                    h,
                    t = Q(l),
                    p = t.on,
                    g = t.emit,
                    m = t.bind,
                    y = n.Slides,
                    b = n.Elements,
                    w = n.Controller,
                    x = w.hasFocus,
                    r = w.getIndex,
                    e = w.go,
                    c = n.Direction.resolve,
                    k = b.pagination,
                    S = [];
                function E() {
                    v && (T(k ? o(v.children) : v), X(v, h), D(S), (v = null)),
                        t.destroy();
                }
                function L(n) {
                    e(">" + n, !0);
                }
                function O(n, t) {
                    var i = S.length,
                        r = Tt(t),
                        o = A(),
                        u = -1,
                        o =
                            (r === c(Hn, !1, o)
                                ? (u = ++n % i)
                                : r === c(Bn, !1, o)
                                    ? (u = (--n + i) % i)
                                    : "Home" === r
                                        ? (u = 0)
                                        : "End" === r && (u = i - 1),
                                S[u]);
                    o && (dn(o.button), e(">" + u), F(t, !0));
                }
                function A() {
                    return d.paginationDirection || d.direction;
                }
                function _(n) {
                    return S[w.toPage(n)];
                }
                function z() {
                    var n,
                        t = _(r(!0)),
                        i = _(r());
                    t && (X((n = t.button), tn), P(n, Qn), I(n, $, -1)),
                        i && (M((n = i.button), tn), I(n, Qn, !0), I(n, $, "")),
                        g("pagination:updated", { list: v, items: S }, t, i);
                }
                return {
                    items: S,
                    mount: function n() {
                        E(), p([K, J, "ei"], n);
                        var t = d.pagination;
                        if ((k && ln(k, t ? "" : "none"), t)) {
                            p([H, Tn, V], z);
                            var t = l.length,
                                i = d.classes,
                                r = d.i18n,
                                o = d.perPage,
                                u = x() ? w.getEnd() + 1 : kn(t / o);
                            M(
                                (v = k || j("ul", i.pagination, b.track.parentElement)),
                                (h = gt + "--" + A())
                            ),
                                I(v, Z, "tablist"),
                                I(v, nn, r.select),
                                I(v, nt, A() === Jn ? "vertical" : "");
                            for (var e = 0; e < u; e++) {
                                var c = j("li", null, v),
                                    f = j("button", { class: i.page, type: "button" }, c),
                                    a = y.getIn(e).map(function (n) {
                                        return n.slide.id;
                                    }),
                                    s = !x() && 1 < o ? r.pageX : r.slideX;
                                m(f, "click", R(L, e)),
                                    d.paginationKeyboard && m(f, "keydown", R(O, e)),
                                    I(c, Z, "presentation"),
                                    I(f, Z, "tab"),
                                    I(f, Kn, a.join(" ")),
                                    I(f, nn, On(s, e + 1)),
                                    I(f, $, -1),
                                    S.push({ li: c, button: f, page: e });
                            }
                            z(), g("pagination:mounted", { list: v, items: S }, _(l.index));
                        }
                    },
                    destroy: E,
                    getAt: _,
                    update: z,
                };
            },
            Sync: function (i, n, t) {
                var r = t.isNavigation,
                    o = t.slideFocus,
                    u = [];
                function e() {
                    var n, t;
                    i.splides.forEach(function (n) {
                        n.isParent || (f(i, n.splide), f(n.splide, i));
                    }),
                        r &&
                        ((n = Q(i)),
                            (t = n.on)(Mn, s),
                            t(Yn, l),
                            t([B, K], a),
                            u.push(n),
                            n.emit(Gn, i.splides));
                }
                function c() {
                    u.forEach(function (n) {
                        n.destroy();
                    }),
                        D(u);
                }
                function f(n, r) {
                    n = Q(n);
                    n.on(H, function (n, t, i) {
                        r.go(r.is(Pt) ? i : n);
                    }),
                        u.push(n);
                }
                function a() {
                    I(n.Elements.list, nt, t.direction === Jn ? "vertical" : "");
                }
                function s(n) {
                    i.go(n.index);
                }
                function l(n, t) {
                    b(Yt, Tt(t)) && (s(n), F(t));
                }
                return {
                    setup: R(n.Media.set, { slideFocus: en(o) ? r : o }, !0),
                    mount: e,
                    destroy: c,
                    remount: function () {
                        c(), e();
                    },
                };
            },
            Wheel: function (e, c, f) {
                var n = Q(e).bind,
                    a = 0;
                function t(n) {
                    var t, i, r, o, u;
                    n.cancelable &&
                        ((t = (u = n.deltaY) < 0),
                            (i = mn(n)),
                            (r = f.wheelMinThreshold || 0),
                            (o = f.wheelSleep || 0),
                            U(u) > r && o < i - a && (e.go(t ? "<" : ">"), (a = i)),
                            (u = t),
                            (f.releaseWheel &&
                                !e.state.is(G) &&
                                -1 === c.Controller.getAdjacent(u)) ||
                            F(n));
                }
                return {
                    mount: function () {
                        f.wheel && n(c.Elements.track, "wheel", t, jt);
                    },
                };
            },
            Live: function (n, t, i) {
                var r = Q(n).on,
                    o = t.Elements.track,
                    u = i.live && !i.isNavigation,
                    e = j("span", wt),
                    c = qn(90, R(f, !1));
                function f(n) {
                    I(o, rt, n), n ? (L(o, e), c.start()) : (T(e), c.cancel());
                }
                function a(n) {
                    u && I(o, it, n ? "off" : "polite");
                }
                return {
                    mount: function () {
                        u &&
                            (a(!t.Autoplay.isPaused()),
                                I(o, ot, !0),
                                (e.textContent = "…"),
                                r(Fn, R(a, !0)),
                                r(Xn, R(a, !1)),
                                r([Dn, V], R(f, !0)));
                    },
                    disable: a,
                    destroy: function () {
                        P(o, [it, ot, rt]), T(e);
                    },
                };
            },
        }),
            qt = {
                type: "slide",
                role: "region",
                speed: 400,
                perPage: 1,
                cloneStatus: !0,
                arrows: !0,
                pagination: !0,
                paginationKeyboard: !0,
                interval: 5e3,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                resetProgress: !0,
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                drag: !0,
                direction: "ltr",
                trimSpace: !0,
                focusableNodes: "a, button, textarea, input, select, iframe",
                live: !0,
                classes: {
                    slide: at,
                    clone: st,
                    arrows: dt,
                    arrow: vt,
                    prev: ht,
                    next: pt,
                    pagination: gt,
                    page: mt,
                    spinner: i + "spinner",
                },
                i18n: {
                    prev: "Previous slide",
                    next: "Next slide",
                    first: "Go to first slide",
                    last: "Go to last slide",
                    slideX: "Go to slide %s",
                    pageX: "Go to page %s",
                    play: "Start autoplay",
                    pause: "Pause autoplay",
                    carousel: "carousel",
                    slide: "slide",
                    select: "Select a slide to show",
                    slideLabel: "%s of %s",
                },
                reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
            };
        function Bt(n, t, i) {
            var r = t.Slides;
            function o() {
                r.forEach(function (n) {
                    n.style("transform", "translateX(-" + 100 * n.index + "%)");
                });
            }
            return {
                mount: function () {
                    Q(n).on([B, J], o);
                },
                start: function (n, t) {
                    r.style("transition", "opacity " + i.speed + "ms " + i.easing), p(t);
                },
                cancel: on,
            };
        }
        function Ht(u, n, e) {
            var c,
                f = n.Move,
                a = n.Controller,
                s = n.Scroll,
                t = n.Elements.list,
                l = R(_, t, "transition");
            function i() {
                l(""), s.cancel();
            }
            return {
                mount: function () {
                    Q(u).bind(t, "transitionend", function (n) {
                        n.target === t && c && (i(), c());
                    });
                },
                start: function (n, t) {
                    var i = f.toPosition(n, !0),
                        r = f.getPosition(),
                        o = (function (n) {
                            var t = e.rewindSpeed;
                            if (u.is(Mt) && t) {
                                var i = a.getIndex(!0),
                                    r = a.getEnd();
                                if ((0 === i && r <= n) || (r <= i && 0 === n)) return t;
                            }
                            return e.speed;
                        })(n);
                    1 <= U(i - r) && 1 <= o
                        ? e.useScroll
                            ? s.scroll(i, o, !1, t)
                            : (l("transform " + o + "ms " + e.easing),
                                f.translate(i, !0),
                                (c = t))
                        : (f.jump(n), t());
                },
                cancel: i,
            };
        }
        t = (function () {
            function i(n, t) {
                (this.event = Q()),
                    (this.Components = {}),
                    (this.state = s(1)),
                    (this.splides = []),
                    (this.n = {}),
                    (this.t = {});
                n = C(n) ? pn(document, n) : n;
                bn(n, n + " is invalid."),
                    (t = d(
                        {
                            label: z((this.root = n), nn) || "",
                            labelledby: z(n, Zn) || "",
                        },
                        qt,
                        i.defaults,
                        t || {}
                    ));
                try {
                    d(t, JSON.parse(z(n, f)));
                } catch (n) {
                    bn(!1, "Invalid JSON");
                }
                this.n = Object.create(d({}, t));
            }
            var n = i.prototype;
            return (
                (n.mount = function (n, t) {
                    var i = this,
                        r = this.state,
                        o = this.Components;
                    return (
                        bn(r.is([1, 7]), "Already mounted!"),
                        r.set(1),
                        (this.i = o),
                        (this.r = t || this.r || (this.is(It) ? Bt : Ht)),
                        (this.t = n || this.t),
                        w(an({}, Ut, this.t, { Transition: this.r }), function (n, t) {
                            n = n(i, o, i.n);
                            (o[t] = n).setup && n.setup();
                        }),
                        w(o, function (n) {
                            n.mount && n.mount();
                        }),
                        this.emit(B),
                        M(this.root, "is-initialized"),
                        r.set(3),
                        this.emit("ready"),
                        this
                    );
                }),
                (n.sync = function (n) {
                    return (
                        this.splides.push({ splide: n }),
                        n.splides.push({ splide: this, isParent: !0 }),
                        this.state.is(3) &&
                        (this.i.Sync.remount(), n.Components.Sync.remount()),
                        this
                    );
                }),
                (n.go = function (n) {
                    return this.i.Controller.go(n), this;
                }),
                (n.on = function (n, t) {
                    return this.event.on(n, t), this;
                }),
                (n.off = function (n) {
                    return this.event.off(n), this;
                }),
                (n.emit = function (n) {
                    var t;
                    return (
                        (t = this.event).emit.apply(t, [n].concat(o(arguments, 1))), this
                    );
                }),
                (n.add = function (n, t) {
                    return this.i.Slides.add(n, t), this;
                }),
                (n.remove = function (n) {
                    return this.i.Slides.remove(n), this;
                }),
                (n.is = function (n) {
                    return this.n.type === n;
                }),
                (n.refresh = function () {
                    return this.emit(J), this;
                }),
                (n.destroy = function (t) {
                    void 0 === t && (t = !0);
                    var n = this.event,
                        i = this.state;
                    return (
                        i.is(1)
                            ? Q(this).on("ready", this.destroy.bind(this, t))
                            : (w(
                                this.i,
                                function (n) {
                                    n.destroy && n.destroy(t);
                                },
                                !0
                            ),
                                n.emit(a),
                                n.destroy(),
                                t && D(this.splides),
                                i.set(7)),
                        this
                    );
                }),
                Jt(i, [
                    {
                        key: "options",
                        get: function () {
                            return this.n;
                        },
                        set: function (n) {
                            this.i.Media.set(n, !0, !0);
                        },
                    },
                    {
                        key: "length",
                        get: function () {
                            return this.i.Slides.getLength(!0);
                        },
                    },
                    {
                        key: "index",
                        get: function () {
                            return this.i.Controller.getIndex();
                        },
                    },
                ]),
                i
            );
        })();
        return (t.defaults = {}), (t.STATES = r), t;
    }),
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
            ? define(t)
            : ((n = "undefined" != typeof globalThis ? globalThis : n || self).Splide =
                t());
  //# sourceMappingURL=splide.min.js.map
