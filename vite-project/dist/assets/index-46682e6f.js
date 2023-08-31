var A = Object.defineProperty;
var I = (e, t, n) =>
  t in e
    ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var p = (e, t, n) => (I(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const c of i.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function f() {}
function E(e) {
  return e();
}
function L() {
  return Object.create(null);
}
function g(e) {
  e.forEach(E);
}
function S(e) {
  return typeof e == "function";
}
function q(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
function B(e) {
  return Object.keys(e).length === 0;
}
function C(e, t, n) {
  e.insertBefore(t, n || null);
}
function N(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function M(e) {
  return document.createElement(e);
}
function V(e) {
  return Array.from(e.childNodes);
}
let k;
function h(e) {
  k = e;
}
const d = [],
  O = [];
let u = [];
const z = [],
  F = Promise.resolve();
let w = !1;
function H() {
  w || ((w = !0), F.then(j));
}
function b(e) {
  u.push(e);
}
const _ = new Set();
let l = 0;
function j() {
  if (l !== 0) return;
  const e = k;
  do {
    try {
      for (; l < d.length; ) {
        const t = d[l];
        l++, h(t), K(t.$$);
      }
    } catch (t) {
      throw ((d.length = 0), (l = 0), t);
    }
    for (h(null), d.length = 0, l = 0; O.length; ) O.pop()();
    for (let t = 0; t < u.length; t += 1) {
      const n = u[t];
      _.has(n) || (_.add(n), n());
    }
    u.length = 0;
  } while (d.length);
  for (; z.length; ) z.pop()();
  (w = !1), _.clear(), h(e);
}
function K(e) {
  if (e.fragment !== null) {
    e.update(), g(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(b);
  }
}
function R(e) {
  const t = [],
    n = [];
  u.forEach((o) => (e.indexOf(o) === -1 ? t.push(o) : n.push(o))),
    n.forEach((o) => o()),
    (u = t);
}
const T = new Set();
function U(e, t) {
  e && e.i && (T.delete(e), e.i(t));
}
function D(e, t, n) {
  const { fragment: o, after_update: r } = e.$$;
  o && o.m(t, n),
    b(() => {
      const i = e.$$.on_mount.map(E).filter(S);
      e.$$.on_destroy ? e.$$.on_destroy.push(...i) : g(i), (e.$$.on_mount = []);
    }),
    r.forEach(b);
}
function G(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (R(n.after_update),
    g(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function J(e, t) {
  e.$$.dirty[0] === -1 && (d.push(e), H(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Q(e, t, n, o, r, i, c, P = [-1]) {
  const m = k;
  h(e);
  const a = (e.$$ = {
    fragment: null,
    ctx: [],
    props: i,
    update: f,
    not_equal: r,
    bound: L(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (m ? m.$$.context : [])),
    callbacks: L(),
    dirty: P,
    skip_bound: !1,
    root: t.target || m.$$.root,
  });
  c && c(a.root);
  let y = !1;
  if (
    ((a.ctx = n
      ? n(e, t.props || {}, (s, $, ...v) => {
          const x = v.length ? v[0] : $;
          return (
            a.ctx &&
              r(a.ctx[s], (a.ctx[s] = x)) &&
              (!a.skip_bound && a.bound[s] && a.bound[s](x), y && J(e, s)),
            $
          );
        })
      : []),
    a.update(),
    (y = !0),
    g(a.before_update),
    (a.fragment = o ? o(a.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const s = V(t.target);
      a.fragment && a.fragment.l(s), s.forEach(N);
    } else a.fragment && a.fragment.c();
    t.intro && U(e.$$.fragment), D(e, t.target, t.anchor), j();
  }
  h(m);
}
class W {
  constructor() {
    p(this, "$$");
    p(this, "$$set");
  }
  $destroy() {
    G(this, 1), (this.$destroy = f);
  }
  $on(t, n) {
    if (!S(n)) return f;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      o.push(n),
      () => {
        const r = o.indexOf(n);
        r !== -1 && o.splice(r, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !B(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const X = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(X);
const Y = "/assets/svelte-a39f39b7.svg",
  Z = "/vite.svg";
function ee(e) {
  let t;
  return {
    c() {
      (t = M("main")),
        (t.innerHTML = `<div><a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="${Z}" class="logo svelte-bl7fmt" alt="Vite Logo"/></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="${Y}" class="logo svelte svelte-bl7fmt" alt="Svelte Logo"/></a></div> <h1>Vite + Svelte</h1> <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@dainezdainez/video/7266619578166414597" data-video-id="7266619578166414597" style="max-width: 605px;min-width: 325px;"><section><a target="_blank" title="@dainezdainez" href="https://www.tiktok.com/@dainezdainez?refer=embed">@dainezdainez</a>
      dolly chai wala
      <a title="comidaderua" target="_blank" href="https://www.tiktok.com/tag/comidaderua?refer=embed">#comidaderua</a> <a title="comidaderuaindiana" target="_blank" href="https://www.tiktok.com/tag/comidaderuaindiana?refer=embed">#comidaderuaindiana</a> <a title="india" target="_blank" href="https://www.tiktok.com/tag/india?refer=embed">#india</a> <a title="indian" target="_blank" href="https://www.tiktok.com/tag/indian?refer=embed">#indian</a> <a title="tiktokfood" target="_blank" href="https://www.tiktok.com/tag/tiktokfood?refer=embed">#tiktokfood</a> <a title="streetfood" target="_blank" href="https://www.tiktok.com/tag/streetfood?refer=embed">#streetfood</a> <a target="_blank" title="♬ som original - bruno dainez" href="https://www.tiktok.com/music/som-original-7266619669037615877?refer=embed">♬ som original - bruno dainez</a></section></blockquote> <script async="" src="https://www.tiktok.com/embed.js"><\/script>`);
    },
    m(n, o) {
      C(n, t, o);
    },
    p: f,
    i: f,
    o: f,
    d(n) {
      n && N(t);
    },
  };
}
class te extends W {
  constructor(t) {
    super(), Q(this, t, null, ee, q, {});
  }
}
new te({ target: document.getElementById("app") });
