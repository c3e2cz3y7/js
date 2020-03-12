if ("undefined" == typeof kotlin) throw new Error("Error loading module 'block-breaker'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'block-breaker'.");
this["block-breaker"] = function(t, e) {
    "use strict";
    var r = t.$$importsForInline$$ || (t.$$importsForInline$$ = {}),
        n = e.defineInlineFunction,
        i = e.wrapFunction,
        o = e.kotlin.collections.firstOrNull_us0mfu$,
        s = e.kotlin.ranges.rangeTo_38ydlf$,
        a = e.Kind.CLASS,
        l = Math,
        c = e.kotlin.Enum,
        u = e.throwISE,
        d = e.kotlin.math,
        f = e.kotlin.Unit,
        h = e.getCallableRef,
        _ = e.kotlin.ranges.coerceIn_nig4hr$,
        p = e.kotlin.random.Random,
        y = e.throwCCE,
        v = e.kotlin.text.trimMargin_rjktp$,
        g = e.kotlin.text.split_o64adg$,
        b = e.ensureNotNull,
        k = e.kotlin.collections.collectionSizeOrDefault_ba2ldo$,
        P = e.kotlin.collections.ArrayList_init_ww73n8$,
        x = e.kotlin.collections.copyToArray,
        O = e.kotlin.collections.ArrayList_init_287e2$,
        w = e.kotlin.collections.checkIndexOverflow_za3lpa$,
        m = Array,
        $ = e.equals,
        C = e.kotlin.text.contains_li3zpu$;
    S.prototype = Object.create(c.prototype), S.prototype.constructor = S;
    n("block-breaker.Array2D_6qkxfg$", i(function() {
        var t = e.wrapFunction,
            r = Array;
        t(function() {
            var t = Array;
            return function(e, r) {
                return function(n) {
                    var i, o = t(e);
                    i = o.length - 1 | 0;
                    for (var s = 0; s <= i; s++) o[s] = r(n, s);
                    return o
                }
            }
        });
        return function(t, e, n, i, o) {
            var s, a = r(n);
            s = a.length - 1 | 0;
            for (var l = 0; l <= s; l++) {
                var c, u = r(i);
                c = u.length - 1 | 0;
                for (var d = 0; d <= c; d++) u[d] = o(l, d);
                a[l] = u
            }
            return a
        }
    }));

    function B(t, e, r, n) {
        t[e][r] = n
    }
    var j, A, T, E = n("block-breaker.forEachPosition_ftka3y$", function(t, e) {
        var r, n, i = 0;
        for (r = 0; r !== t.length; ++r) {
            var o, s, a = t[r],
                l = (i = (n = i) + 1 | 0, n),
                c = 0;
            for (o = 0; o !== a.length; ++o) {
                e(l, (c = (s = c) + 1 | 0, s), a[o])
            }
        }
    });

    function I(t, e) {
        void 0 === t && (t = new Nt(.5, .75)), void 0 === e && (e = new Nt(0, -3)), this.pos = t, this.speedMult = e
    }

    function S(t, e) {
        c.call(this), this.name$ = t, this.ordinal$ = e
    }

    function R() {
        R = function() {}, j = new S("NONE", 0), A = new S("A", 1), T = new S("B", 2)
    }

    function L() {
        return R(), j
    }

    function D() {
        return R(), A
    }

    function N() {
        return R(), T
    }

    function M() {
        return (new Date).getTime()
    }

    function K(t) {
        t.clearRect(0, 0, t.canvas.width, t.canvas.height)
    }

    function G(t, e, r, n) {
        t.arc(e, r, n, 0, 2 * d.PI)
    }

    function z(t, e, r, n, i, o, s) {
        var a = i - 2 * s;
        t.fillRect(e, r, n, s), t.fillRect(e, r + i - s, n, s), t.fillRect(e, r + s, o, a), t.fillRect(e + n - o, r + s, o, a)
    }

    function H(t, e, r, n, i, o, s) {
        z(t, e, r, n, i, o, s)
    }
    Object.defineProperty(I.prototype, "xSpeed", {
        get: function() {
            return this.speedMult.x * _t
        }
    }), Object.defineProperty(I.prototype, "ySpeed", {
        get: function() {
            return this.speedMult.y * _t
        }
    }), Object.defineProperty(I.prototype, "xGridPos", {
        get: function() {
            return $t + this.pos.x * Bt
        },
        set: function(t) {
            this.pos.x = (t - $t) / Bt
        }
    }), Object.defineProperty(I.prototype, "yGridPos", {
        get: function() {
            return Ct + this.pos.y * jt
        },
        set: function(t) {
            this.pos.y = (t - Ct) / jt
        }
    }), I.prototype.resolveBorderCollision_14dthe$ = function(t) {
        var e = $t + Lt / 2;
        if (this.xGridPos < e) {
            var r = this.speedMult,
                n = this.speedMult.x;
            r.x = l.abs(n), this.xGridPos = e
        }
        var i = Ct + Lt / 2;
        if (this.yGridPos < i) {
            var o = this.speedMult,
                a = this.speedMult.y;
            o.y = l.abs(a), this.yGridPos = i
        }
        var c = Bt + $t - Lt / 2;
        if (this.xGridPos > c) {
            var u = this.speedMult,
                d = this.speedMult.x;
            u.x = -l.abs(d), this.xGridPos = c
        }
        var f = (1 - dt - ct) * jt + Ct - Lt / 2;
        if (this.yGridPos > f) {
            if (!s(t, t + lt).contains_mef7kx$(this.pos.x)) return !0;
            this.yGridPos = f;
            var h = this.speedMult,
                _ = this.speedMult.y;
            h.y = -l.abs(_);
            var p = 5 * ((this.pos.x - t) / lt - .5);
            this.speedMult.x = this.speedMult.x + p
        }
        return !1
    }, I.prototype.resolveBlockCollision_en2ctu$ = function(t, e) {
        var r, n, i = {
                v: !1
            },
            o = {
                v: !1
            },
            a = {
                v: !1
            },
            c = {
                v: !1
            },
            u = 0;
        for (r = 0; r !== t.length; ++r) {
            var d, f, h = t[r],
                _ = (u = (n = u) + 1 | 0, n),
                p = 0;
            for (d = 0; d !== h.length; ++d) {
                var y = _,
                    v = (p = (f = p) + 1 | 0, f);
                if (h[d] !== L()) {
                    var g = $t + y * St,
                        b = Ct + v * Rt,
                        k = g + St,
                        P = b + Rt,
                        x = this.xGridPos,
                        O = this.yGridPos,
                        w = s(b, P).contains_mef7kx$(O - Lt / 2),
                        m = s(b, P).contains_mef7kx$(O + Lt / 2),
                        $ = s(g, k).contains_mef7kx$(x - Lt / 2),
                        C = s(g, k).contains_mef7kx$(x + Lt / 2),
                        B = w || m,
                        j = $ || C,
                        A = !1;
                    w && j && (i.v = !0, A = !0), m && j && (o.v = !0, A = !0), $ && B && (a.v = !0, A = !0), C && B && (c.v = !0, A = !0), A && e(y, v)
                }
            }
        }
        if (i.v && !o.v) {
            var T = this.speedMult,
                E = this.speedMult.y;
            T.y = l.abs(E) * pt
        }
        if (o.v && !i.v) {
            var I = this.speedMult,
                S = this.speedMult.y;
            I.y = -l.abs(S) * pt
        }
        if (a.v && !c.v) {
            var R = this.speedMult,
                D = this.speedMult.x;
            R.x = l.abs(D) * pt
        }
        if (c.v && !a.v) {
            var N = this.speedMult,
                M = this.speedMult.x;
            N.x = -l.abs(M) * pt
        }
    }, I.$metadata$ = {
        kind: a,
        simpleName: "Ball",
        interfaces: []
    }, S.$metadata$ = {
        kind: a,
        simpleName: "Block",
        interfaces: [c]
    }, S.values = function() {
        return [L(), D(), N()]
    }, S.valueOf_61zpoe$ = function(t) {
        switch (t) {
            case "NONE":
                return L();
            case "A":
                return D();
            case "B":
                return N();
            default:
                u("No enum constant Block." + t)
        }
    };
    var F, U, W = n("block-breaker.drawWithColor_szj7ga$", function(t, e, r) {
            var n = t.fillStyle;
            t.fillStyle = e, r(t), t.fillStyle = n
        }),
        q = n("block-breaker.drawWithFont_szj7ga$", function(t, e, r) {
            var n = t.font;
            t.font = e, r(t), t.font = n
        }),
        X = n("block-breaker.drawTextCentered_lcvvo8$", function(t, e) {
            var r = t.textBaseline,
                n = t.textAlign;
            t.textBaseline = "middle", t.textAlign = "center", e(t), t.textBaseline = r, t.textAlign = n
        }),
        Y = n("block-breaker.drawFilledPath_lcvvo8$", function(t, e) {
            t.beginPath(), e(t), t.fill()
        }),
        V = n("block-breaker.drawFilledPath_szj7ga$", function(t, e, r) {
            var n = t.fillStyle;
            t.fillStyle = e, t.beginPath(), r(t), t.fill(), t.fillStyle = n
        });
    i(function() {
        var t = Array;
        return function(e, r) {
            return function(n) {
                var i, o = t(e);
                i = o.length - 1 | 0;
                for (var s = 0; s <= i; s++) o[s] = r(n, s);
                return o
            }
        }
    });

    function Z() {
        var t, r, n;
        this.gameDiv_0 = e.isType(t = document.createElement("div"), HTMLDivElement) ? t : y(), this.canvas_0 = e.isType(r = document.createElement("canvas"), HTMLCanvasElement) ? r : y(), this.context_0 = e.isType(n = this.canvas_0.getContext("2d"), CanvasRenderingContext2D) ? n : y();
        var i, o = g(v("\n        |\n        |\n        |   oh my godness! geeky nerd spotted here.\n        |   oh my godness! geeky nerd spotted here.\n        |   oh my godness! geeky nerd spotted here.\n        |     \n    "), e.charArrayOf(10)),
            s = P(k(o, 10));
        for (i = o.iterator(); i.hasNext();) {
            var a = i.next();
            s.add_11rb$(x(g(a, e.charArrayOf(32))))
        }
        this.text_0 = x(s), this.keys_0 = new J, this.lastUpdateTime_0 = 0, this.balls_0 = O(), this.barPos_0 = .1, this.blocks_0 = this.generateBlocks_0();
        var l = this.gameDiv_0.style;
        l.visibility = "hidden", l.background = "rgba(100,100,100,0.9)", l.position = "fixed", l.width = "100%", l.height = "100%", l.left = "0", l.top = "0", b(document.body).appendChild(this.gameDiv_0), this.gameDiv_0.appendChild(this.canvas_0);
        var c = this.canvas_0;
        c.width = 800, c.height = 600;
        var u = c.style;
        u.backgroundColor = gt, u.outline = "none", u.position = "fixed", u.top = "50%", u.left = "50%", u.transform = "translate(-50%, -50%)";
        var d = this.context_0;
        d.shadowOffsetX = 0, d.shadowOffsetY = 0
    }

    function J(t, e, r) {
        void 0 === t && (t = "ArrowLeft"), void 0 === e && (e = "ArrowRight"), void 0 === r && (r = " "), this.leftKey_0 = t, this.rightKey_0 = e, this.restartKey_0 = r, this.leftPressed_res9ik$_0 = !1, this.rightPressed_vzzo93$_0 = !1, this.restartPressed_mp65om$_0 = !1
    }

    function Q() {
        var e, r, n = new Z;
        document.onkeydown = (r = n, e = function() {
            return r.start(), f
        }, function(r) {
            var n;
            return C(r.key, t.secretCode[(n = t.secretCodeIndex, t.secretCodeIndex = n + 1 | 0, n)], !0) ? t.secretCodeIndex === t.secretCode.length && (document.onkeydown = null, e()) : t.secretCodeIndex = 0, f
        })
    }
    Z.prototype.start = function() {
        return this.gameDiv_0.style.visibility = "visible", this.gameDiv_0.tabIndex = 0, this.canvas_0.tabIndex = 1, this.canvas_0.focus(), this.canvas_0.onkeydown = h("addKeyDown", function(t, e) {
            return t.addKeyDown_kc24xn$(e), f
        }.bind(null, this.keys_0)), this.canvas_0.onkeyup = h("addKeyUp", function(t, e) {
            return t.addKeyUp_kc24xn$(e), f
        }.bind(null, this.keys_0)), this.lastUpdateTime_0 = M(), this.update_0(), this
    }, Z.prototype.update_0 = function() {
        var t, e, r = this.updateTime_0();
        this.moveBar_0(r);
        var n = 0;
        for (t = this.balls_0.iterator(); t.hasNext();) {
            var i = t.next(),
                o = w((n = (e = n) + 1 | 0, e));
            this.move_0(i, r) && this.balls_0.removeAt_za3lpa$(o)
        }
        this.draw_0(), 0 === this.balls_0.size && this.keys_0.restartPressed && this.balls_0.add_11rb$(new I(new Nt(this.barPos_0 + lt / 2, .9), new Nt(0, -5))), window.setTimeout(h("update", function(t) {
            return t.update_0(), f
        }.bind(null, this)), 5)
    }, Z.prototype.generateBlocks_0 = function() {
        var t, e = m(13);
        t = e.length - 1 | 0;
        for (var r = 0; r <= t; r++) {
            var n, i = m(30);
            n = i.length - 1 | 0;
            for (var o = 0; o <= n; o++) {
                var s;
                s = 1 <= o && o <= 4 && 1 <= r && r <= 11 ? (r + o | 0) % 2 == 0 ? D() : N() : L(), i[o] = s
            }
            e[r] = i
        }
        return e
    }, Z.prototype.updateTime_0 = function() {
        var t = M() - this.lastUpdateTime_0;
        return this.lastUpdateTime_0 = M(), t
    }, Z.prototype.moveBar_0 = function(t) {
        this.keys_0.leftPressed && (this.barPos_0 -= ut * t), this.keys_0.rightPressed && (this.barPos_0 += ut * t), this.barPos_0 = _(this.barPos_0, 0, 1 - lt)
    }, Z.prototype.move_0 = function(t, e) {
        t.pos.x = t.pos.x + t.xSpeed * e, t.pos.y = t.pos.y + t.ySpeed * e;
        var r = t.resolveBorderCollision_14dthe$(this.barPos_0);
        return t.resolveBlockCollision_en2ctu$(this.blocks_0, h("hitBlock", function(t, e, r) {
            return t.hitBlock_0(e, r), f
        }.bind(null, this))), t.speedMult.x = _(t.speedMult.x, -yt, yt), t.speedMult.y = _(t.speedMult.y, -yt, yt), r
    }, Z.prototype.hitBlock_0 = function(t, e) {
        B(this.blocks_0, t, e, L()), p.Default.nextDouble() < vt && this.balls_0.add_11rb$(new I(new Nt((t + .5) * Et, (e + .5) * It), new Nt(0, 3)))
    }, Z.prototype.draw_0 = function() {
        K(this.context_0);
        var t, e, r, n = this.blocks_0,
            i = 0;
        for (t = 0; t !== n.length; ++t) {
            var o, s, a = n[t],
                l = (i = (e = i) + 1 | 0, e),
                c = 0;
            for (o = 0; o !== a.length; ++o) {
                var u = a[o];
                this.drawBlock_0(l, (c = (s = c) + 1 | 0, s), u)
            }
        }
        for (this.drawBar_0(), r = this.balls_0.iterator(); r.hasNext();) {
            var d = r.next();
            this.draw_1(d)
        }
        this.drawBorder_0(), 0 === this.balls_0.size && this.drawCenteredText_0(400, 300, "Press 'Space' for new ball!")
    }, Z.prototype.draw_1 = function(t) {
        var e = this.context_0,
            r = kt,
            n = e.fillStyle;
        e.fillStyle = r, e.beginPath(), G(e, t.xGridPos, t.yGridPos, Lt / 2), e.fill(), e.fillStyle = n
    }, Z.prototype.drawBar_0 = function() {
        var t = this.context_0,
            e = Pt,
            r = t.fillStyle;
        t.fillStyle = e;
        var n = (1 - dt - ct) * jt + Ct,
            i = this.barPos_0 * Bt + $t;
        t.fillRect(i, n, At, Tt), t.fillStyle = r
    }, Z.prototype.drawCenteredText_1 = function(t, e, r) {
        var n = this.context_0,
            i = xt,
            o = n.fillStyle;
        n.fillStyle = i;
        var s = mt,
            a = n.font;
        n.font = s;
        var l = n.textBaseline,
            c = n.textAlign;
        n.textBaseline = "middle", n.textAlign = "center", n.fillText(r, t, e), n.textBaseline = l, n.textAlign = c, n.font = a, n.fillStyle = o
    }, Z.prototype.drawCenteredText_0 = function(t, e, r) {
        this.drawCenteredText_1(t, e, r)
    }, Z.prototype.getBlockPosX_0 = function(t) {
        return $t + t * St
    }, Z.prototype.getBlockPosY_0 = function(t) {
        return Ct + t * Rt
    }, Z.prototype.drawBlock_0 = function(t, e, r) {
        var n;
        switch (r.name) {
            case "A":
                n = Ot;
                break;
            case "B":
                n = wt;
                break;
            default:
                n = ""
        }
        var i = n;
        if (r !== L()) {
            var o = this.context_0,
                s = o.fillStyle;
            o.fillStyle = i, o.fillRect(this.getBlockPosX_0(t) + 1, this.getBlockPosY_0(e) + 1, St - 2, Rt - 2), o.fillStyle = s
        } else this.text_0.length > e && this.text_0[e].length > t && this.drawCenteredText_1(this.getBlockPosX_0(t) + St / 2, this.getBlockPosY_0(e) + Rt / 2, this.text_0[e][t])
    }, Z.prototype.drawBorder_0 = function() {
        var t = this.context_0,
            e = bt,
            r = t.fillStyle;
        t.fillStyle = e, H(t, 0, 0, 800, 600, $t, Ct), t.fillStyle = r
    }, Z.$metadata$ = {
        kind: a,
        simpleName: "Game",
        interfaces: []
    }, Object.defineProperty(J.prototype, "leftPressed", {
        get: function() {
            return this.leftPressed_res9ik$_0
        },
        set: function(t) {
            this.leftPressed_res9ik$_0 = t
        }
    }), Object.defineProperty(J.prototype, "rightPressed", {
        get: function() {
            return this.rightPressed_vzzo93$_0
        },
        set: function(t) {
            this.rightPressed_vzzo93$_0 = t
        }
    }), Object.defineProperty(J.prototype, "restartPressed", {
        get: function() {
            return this.restartPressed_mp65om$_0
        },
        set: function(t) {
            this.restartPressed_mp65om$_0 = t
        }
    }), J.prototype.setKey_0 = function(t, e) {
        $(t, this.leftKey_0) ? this.leftPressed = e : $(t, this.rightKey_0) ? this.rightPressed = e : $(t, this.restartKey_0) && (this.restartPressed = e)
    }, J.prototype.addKeyDown_kc24xn$ = function(t) {
        this.setKey_0(t.key, !0)
    }, J.prototype.addKeyUp_kc24xn$ = function(t) {
        this.setKey_0(t.key, !1)
    }, J.$metadata$ = {
        kind: a,
        simpleName: "KeyStates",
        interfaces: []
    };
    var tt, et, rt, nt, it, ot, st, at, lt, ct, ut, dt, ft, ht, _t, pt, yt, vt, gt, bt, kt, Pt, xt, Ot, wt, mt, $t, Ct, Bt, jt, At, Tt, Et, It, St, Rt, Lt, Dt = n("block-breaker.onCodeEntered_o14v8n$", i(function() {
        var r = e.kotlin.text.contains_li3zpu$,
            n = e.kotlin.Unit;
        return function(e) {
            var i;
            document.onkeydown = (i = e, function(e) {
                var o;
                return r(e.key, t.secretCode[(o = t.secretCodeIndex, t.secretCodeIndex = o + 1 | 0, o)], !0) ? t.secretCodeIndex === t.secretCode.length && (document.onkeydown = null, i()) : t.secretCodeIndex = 0, n
            })
        }
    }));

    function Nt(t, e) {
        this.x = t, this.y = e
    }
    return Nt.$metadata$ = {
        kind: a,
        simpleName: "Vector",
        interfaces: []
    }, Nt.prototype.component1 = function() {
        return this.x
    }, Nt.prototype.component2 = function() {
        return this.y
    }, Nt.prototype.copy_xwzc9q$ = function(t, e) {
        return new Nt(void 0 === t ? this.x : t, void 0 === e ? this.y : e)
    }, Nt.prototype.toString = function() {
        return "Vector(x=" + e.toString(this.x) + ", y=" + e.toString(this.y) + ")"
    }, Nt.prototype.hashCode = function() {
        var t = 0;
        return t = 31 * (t = 31 * t + e.hashCode(this.x) | 0) + e.hashCode(this.y) | 0
    }, Nt.prototype.equals = function(t) {
        return this === t || null !== t && "object" == typeof t && Object.getPrototypeOf(this) === Object.getPrototypeOf(t) && e.equals(this.x, t.x) && e.equals(this.y, t.y)
    }, r["block-breaker"] = t, t.get_width_ms0z5x$ = function(t) {
        return t.length
    }, t.get_height_ms0z5x$ = function(t) {
        var e, r;
        return null != (r = null != (e = o(t)) ? e.length : null) ? r : 0
    }, t.get_7njmzx$ = function(t, e, r) {
        return t[e][r]
    }, t.set_4n5dw9$ = B, t.forEachPosition_ftka3y$ = E, t.Ball = I, Object.defineProperty(S, "NONE", {
        get: L
    }), Object.defineProperty(S, "A", {
        get: D
    }), Object.defineProperty(S, "B", {
        get: N
    }), t.Block = S, Object.defineProperty(t, "currentTime", {
        get: M
    }), t.clear_qtrdl1$ = K, t.drawCircle_2bvwl9$ = G, t.drawBox_mgi1rn$ = z, t.drawBox_zgdd5h$ = H, t.drawImage_cqal4x$ = function(t, e, r, n, i, o) {
        var s = n / o.width,
            a = i / o.height,
            c = l.min(s, a),
            u = l.min(1, c) / 2,
            d = o.width * u,
            f = o.height * u;
        t.drawImage(o, e + (n - d) / 2, r + (i - f) / 2, d, f)
    }, t.drawWithColor_szj7ga$ = W, t.drawWithFont_szj7ga$ = q, t.drawTextCentered_lcvvo8$ = X, t.drawFilledPath_lcvvo8$ = Y, t.drawFilledPath_szj7ga$ = V, t.Game = Z, t.KeyStates = J, t.main = Q, Object.defineProperty(t, "secretCode", {
        get: function() {
            return F
        }
    }), Object.defineProperty(t, "secretCodeIndex", {
        get: function() {
            return U
        },
        set: function(t) {
            U = t
        }
    }), t.onCodeEntered_o14v8n$ = Dt, Object.defineProperty(t, "WINDOW_HEIGHT", {
        get: function() {
            return tt
        }
    }), Object.defineProperty(t, "WINDOW_WIDTH", {
        get: function() {
            return et
        }
    }), Object.defineProperty(t, "BLOCK_COUNT_X", {
        get: function() {
            return rt
        }
    }), Object.defineProperty(t, "BLOCK_COUNT_Y", {
        get: function() {
            return nt
        }
    }), Object.defineProperty(t, "BLOCK_START_Y", {
        get: function() {
            return it
        }
    }), Object.defineProperty(t, "BLOCK_END_Y", {
        get: function() {
            return ot
        }
    }), Object.defineProperty(t, "BLOCK_START_X", {
        get: function() {
            return st
        }
    }), Object.defineProperty(t, "BLOCK_END_X", {
        get: function() {
            return at
        }
    }), Object.defineProperty(t, "BAR_WIDTH_FRACTION", {
        get: function() {
            return lt
        }
    }), Object.defineProperty(t, "BAR_HEIGHT_FRACTION", {
        get: function() {
            return ct
        }
    }), Object.defineProperty(t, "BAR_SPEED", {
        get: function() {
            return ut
        }
    }), Object.defineProperty(t, "BAR_OFFSET", {
        get: function() {
            return dt
        }
    }), Object.defineProperty(t, "BORDER_FRACTION", {
        get: function() {
            return ft
        }
    }), Object.defineProperty(t, "BALL_HEIGHT_FRACTION", {
        get: function() {
            return ht
        }
    }), Object.defineProperty(t, "BALL_BASE_SPEED", {
        get: function() {
            return _t
        }
    }), Object.defineProperty(t, "BALL_COLLISION_SPEED_MULTIPLIER", {
        get: function() {
            return pt
        }
    }), Object.defineProperty(t, "MAX_BALL_SPEED", {
        get: function() {
            return yt
        }
    }), Object.defineProperty(t, "EXTRA_BALL_CHANCE", {
        get: function() {
            return vt
        }
    }), Object.defineProperty(t, "BACKGROUND_COLOR", {
        get: function() {
            return gt
        }
    }), Object.defineProperty(t, "BORDER_COLOR", {
        get: function() {
            return bt
        }
    }), Object.defineProperty(t, "BALL_COLOR", {
        get: function() {
            return kt
        }
    }), Object.defineProperty(t, "BAR_COLOR", {
        get: function() {
            return Pt
        }
    }), Object.defineProperty(t, "TEXT_COLOR", {
        get: function() {
            return xt
        }
    }), Object.defineProperty(t, "BLOCK_A_COLOR", {
        get: function() {
            return Ot
        }
    }), Object.defineProperty(t, "BLOCK_B_COLOR", {
        get: function() {
            return wt
        }
    }), Object.defineProperty(t, "FONT", {
        get: function() {
            return mt
        }
    }), Object.defineProperty(t, "BORDER_SIZE_X", {
        get: function() {
            return $t
        }
    }), Object.defineProperty(t, "BORDER_SIZE_Y", {
        get: function() {
            return Ct
        }
    }), Object.defineProperty(t, "GAME_AREA_WIDTH", {
        get: function() {
            return Bt
        }
    }), Object.defineProperty(t, "GAME_AREA_HEIGHT", {
        get: function() {
            return jt
        }
    }), Object.defineProperty(t, "BAR_WIDTH", {
        get: function() {
            return At
        }
    }), Object.defineProperty(t, "BAR_HEIGHT", {
        get: function() {
            return Tt
        }
    }), Object.defineProperty(t, "BLOCK_WIDTH_FRACTION", {
        get: function() {
            return Et
        }
    }), Object.defineProperty(t, "BLOCK_HEIGHT_FRACTION", {
        get: function() {
            return It
        }
    }), Object.defineProperty(t, "BLOCK_WIDTH", {
        get: function() {
            return St
        }
    }), Object.defineProperty(t, "BLOCK_HEIGHT", {
        get: function() {
            return Rt
        }
    }), Object.defineProperty(t, "BALL_SIZE", {
        get: function() {
            return Lt
        }
    }), t.Vector = Nt, F = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "b"], U = 0, tt = 600, et = 800, rt = 13, nt = 30, it = 1, ot = 8, st = 1, at = 11, ut = 7e-4, dt = .01, _t = 1e-4, pt = 1.1, yt = 10, vt = .05, gt = "black", bt = "rgb(82, 83, 86)", kt = "white", Pt = "white", xt = "white", Ot = "GreenYellow", wt = "DarkViolet", mt = "Courier New", At = (lt = .15) * (Bt = 800 - 2 * ($t = 800 * (ft = .005))), Tt = (ct = .02) * (jt = 600 - 2 * (Ct = 600 * ft)), St = Bt * (Et = 1 / 13), Rt = jt * (It = 1 / 30), Lt = 600 * (ht = .015), Q(), e.defineModule("block-breaker", t), t
}(void 0 === this["block-breaker"] ? {} : this["block-breaker"], kotlin);