var $o = Object.defineProperty,
	Uo = Object.defineProperties;
var Po = Object.getOwnPropertyDescriptors;
var Ht = Object.getOwnPropertySymbols;
var No = Object.prototype.hasOwnProperty,
	Ro = Object.prototype.propertyIsEnumerable;
var Wt = (e, t, o) => t in e ? $o(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: o
	}) : e[t] = o,
	Vt = (e, t) => {
		for (var o in t || (t = {})) No.call(t, o) && Wt(e, o, t[o]);
		if (Ht)
			for (var o of Ht(t)) Ro.call(t, o) && Wt(e, o, t[o]);
		return e
	},
	Zt = (e, t) => Uo(e, Po(t));
import {
	n as ne,
	l as u,
	c as d,
	w as M,
	a as te,
	b as Oo,
	d as T,
	o as F,
	r as E,
	e as V,
	f as b,
	g as Q,
	F as O,
	h as w,
	i as m,
	j as A,
	t as Do,
	k as x,
	m as C,
	p as f,
	q as ie,
	s as W,
	v as ft,
	u as ce,
	x as J,
	y as Bo,
	z as Qt,
	A as nt,
	B as Z,
	C as Xe,
	D as re,
	E as j,
	G as Ho,
	H as Wo,
	I as Vo,
	J as Zo,
	K as jo,
	L as jt,
	M as Fo,
	N as Go,
	V as Yo
} from "./vendor.js";
const Ko = function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
	new MutationObserver(r => {
		for (const i of r)
			if (i.type === "childList")
				for (const n of i.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && a(n)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function o(r) {
		const i = {};
		return r.integrity && (i.integrity = r.integrity), r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? i.credentials = "include" : r.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
	}

	function a(r) {
		if (r.ep) return;
		r.ep = !0;
		const i = o(r);
		fetch(r.href, i)
	}
};
Ko();
const Jt = ["chatNoMessages", "chatTitle", "chatLogin", "chatSend", "chatPlaceholder", "chatErrorDisabled", "chatErrorUnknown", "serversHeading", "markersHeading", "markersSkeleton", "markersSetSkeleton", "markersUnnamed", "markersSearchPlaceholder", "markersSearchSkeleton", "worldsSkeleton", "playersSkeleton", "playersTitle", "playersTitleHidden", "playersTitleOtherWorld", "playersSearchPlaceholder", "playersSearchSkeleton", "followingHeading", "followingUnfollow", "followingTitleUnfollow", "followingHidden", "linkTitle", "loadingTitle", "locationRegion", "locationChunk", "contextMenuCopyLink", "contextMenuCenterHere", "toggleTitle", "mapTitle", "layersTitle", "copyToClipboardSuccess", "copyToClipboardError", "loginTitle", "loginHeading", "loginUsernameLabel", "loginPasswordLabel", "loginSubmit", "loginErrorUnknown", "loginErrorDisabled", "loginErrorIncorrect", "loginSuccess", "registerHeading", "registerDescription", "registerConfirmPasswordLabel", "registerCodeLabel", "registerSubmit", "registerErrorUnknown", "registerErrorDisabled", "registerErrorVerifyFailed", "registerErrorIncorrect", "logoutTitle", "logoutErrorUnknown", "logoutSuccess", "closeTitle", "showMore"],
	qo = ["chatPlayerJoin", "chatPlayerQuit", "chatAnonymousJoin", "chatAnonymousQuit", "chatErrorNotAllowed", "chatErrorRequiresLogin", "chatErrorCooldown", "worldsHeading", "playersHeading"],
	Qo = document.createRange(),
	Jo = /<br \/>/g,
	Xt = /§[0-9a-f]/ig,
	Xo = /[_\s]?nether([\s_]|$)/i,
	ea = /(^|[_\s])end([\s_]|$)/i,
	Et = e => {
		const t = e >= 0 && e < 13700;
		return {
			serverTime: e,
			days: Math.floor((e + 8e3) / 24e3),
			hours: (Math.floor(e / 1e3) + 6) % 24,
			minutes: Math.floor(e / 1e3 % 1 * 60),
			seconds: Math.floor(e / 1e3 % 1 * 60 % 1 * 60),
			day: t,
			night: !t
		}
	},
	ta = e => {
		const t = new URLSearchParams(e.search),
			o = e.hash.replace("#", "");
		return o ? oa(o) : aa(t)
	},
	oa = e => {
		let t, o, a, r;
		if (e = e.replace("#", ""), e[0] === "/" && e.split("/").length === 7) {
			const i = e.split("/");
			r = void 0, t = i[5], o = i[6], a = [i[1], i[2], i[3]].map(n => parseFloat(n)).filter(n => !isNaN(n) && isFinite(n))
		} else {
			const i = e.split(";");
			t = i[0] || void 0, o = i[1] || void 0, a = (i[2] || "").split(",").map(n => parseFloat(n)).filter(n => !isNaN(n) && isFinite(n)), r = typeof i[3] != "undefined" ? parseInt(i[3]) : void 0
		}
		return eo({
			world: t ? decodeURIComponent(t) : void 0,
			map: o ? decodeURIComponent(o) : void 0,
			location: a.length === 3 ? {
				x: a[0],
				y: a[1],
				z: a[2]
			} : void 0,
			zoom: r,
			legacy: !1
		})
	},
	aa = e => {
		let t = e.get("worldname") || e.get("world") || void 0,
			o = e.has("worldname") && e.get("mapname") || void 0;
		const a = [e.get("x") || "", e.get("y") || "64", e.get("z") || ""].map(i => parseFloat(i)).filter(i => !isNaN(i) && isFinite(i)),
			r = e.has("zoom") ? parseInt(e.get("zoom")) : void 0;
		return t = t ? decodeURIComponent(t) : void 0, o = o ? decodeURIComponent(o) : void 0, eo({
			world: t,
			map: o,
			location: a.length === 3 ? {
				x: a[0],
				y: a[1],
				z: a[2]
			} : void 0,
			zoom: r,
			legacy: !0
		})
	},
	eo = e => (typeof e.zoom != "undefined" && (isNaN(e.zoom) || e.zoom < 0 || !isFinite(e.zoom)) && (e.zoom = void 0), e.world ? e : null),
	to = (e, t, o) => {
		const a = Math.round(t.x),
			r = Math.round(t.y),
			i = Math.round(t.z),
			n = `${a},${r},${i}`;
		return e ? `#${e.world.name};${e.name};${n};${o}` : ""
	},
	ra = e => {
		const t = document.querySelector(e);
		t && t.focus()
	},
	Ft = document.createElement("textarea"),
	na = e => (Ft.innerHTML = e, Ft.textContent || ""),
	ee = e => Qo.createContextualFragment(e.replace(Jo, "&nbsp;")).textContent || "",
	oo = () => () => ne('Координаты скопированы'),
	ao = () => e => {
		ne({
			type: "error",
			text: _().state.messages.copyToClipboardError
		}), console.error("Error copying to clipboard", e)
	},
	ia = (e = {}) => Object.assign(At(Jt, e), At(qo, e)),
	sa = (e = {}) => At(Jt, e),
	At = (e, t = {}) => {
		const o = {};
		for (const a of e) o[a] = t[a] || `Missing message: ${a}`;
		return o
	},
	ro = (e, t, o) => ({
		min: {
			x: Math.min.apply(null, e),
			y: Math.min.apply(null, t),
			z: Math.min.apply(null, o)
		},
		max: {
			x: Math.max.apply(null, e),
			y: Math.max.apply(null, t),
			z: Math.max.apply(null, o)
		}
	}),
	xt = e => {
		const t = {
				max: {
					x: -1 / 0,
					y: -1 / 0,
					z: -1 / 0
				},
				min: {
					x: 1 / 0,
					y: 1 / 0,
					z: 1 / 0
				}
			},
			o = a => {
				Array.isArray(a) ? a.map(o) : (t.max.x = Math.max(a.x, t.max.x), t.max.y = Math.max(a.y, t.max.y), t.max.z = Math.max(a.z, t.max.z), t.min.x = Math.min(a.x, t.min.x), t.min.y = Math.min(a.y, t.min.y), t.min.z = Math.min(a.z, t.min.z))
			};
		return e.map(o), t
	},
	et = e => ({
		x: e.min.x + (e.max.x - e.min.x) / 2,
		y: e.min.y + (e.max.y - e.min.y) / 2,
		z: e.min.z + (e.max.z - e.min.z) / 2
	}),
	la = async () => {
		const e = document.createElement("iframe");
		return e.hidden = !0, e.sandbox.add("allow-scripts"), e.srcdoc = `<script>window.addEventListener("message", function(e) {	
		if(!e.data?.key) {
			console.warn('Ignoring postmessage without key');
			return;
		}
		
	 	try {
			e.source.postMessage({
				key: e.data.key,
				success: true,
				result: Function('', "'use strict';" + e.data.code)(),
			}, e.origin);
	 	} catch(ex) {
			e.source.postMessage({
				key: e.data.key,
				success: false,
				error: ex
			}, e.origin);
	 	}
	})<\/script>`, window.addEventListener("message", t => {
			var o;
			if (t.origin !== "null" || t.source !== e.contentWindow) {
				console.warn("Ignoring postmessage with invalid source");
				return
			}
			if (!((o = t.data) != null && o.key)) {
				console.warn("Ignoring postmessage without key");
				return
			}
			if (!Ct.has(t.data.key)) {
				console.warn("Ignoring postmessage with invalid key");
				return
			}
			t.data.success ? Ct.get(t.data.key).call(globalThis, t.data.result) : no.get(t.data.key).call(globalThis, t.data.error)
		}), new Promise(t => {
			document.body.appendChild(e), e.onload = () => {
				t(e.contentWindow)
			}
		})
	};
let kt = null;
const Ct = new Map,
	no = new Map,
	at = async e => (kt || (kt = await la()), new Promise((t, o) => {
		const a = Math.random();
		Ct.set(a, t), no.set(a, o), kt.postMessage({
			key: a,
			code: e
		}, "*")
	})), io = e => {
		let t = "overworld";
		return Xo.test(e) || e == "DIM-1" ? t = "nether" : (ea.test(e) || e == "DIM1") && (t = "end"), t
	}, da = {
		playerMarkersEnabled(e) {
			return e.components.players.markers !== void 0
		},
		markerUIEnabled(e) {
			return !e.ui.disableMarkerUI
		},
		coordinatesControlEnabled(e) {
			return e.components.coordinatesControl !== void 0
		},
		clockControlEnabled(e) {
			return e.components.clockControl !== void 0
		},
		loginEnabled(e) {
			return e.components.login || e.loginRequired
		},
		night(e) {
			return Et(e.currentWorldState.timeOfDay).night
		},
		mapBackground(e) {
			return e.currentMap ? e.currentMap.nightAndDay ? Et(e.currentWorldState.timeOfDay).night ? e.currentMap.backgroundNight || e.currentMap.background || "transparent" : e.currentMap.backgroundDay || e.currentMap.background || "transparent" : e.currentMap.background || "transparent" : "transparent"
		},
		url(e) {
			return !e.currentWorld || !e.currentMap ? "" : to(e.currentMap, e.currentLocation, e.currentZoom)
		},
		pageTitle(e) {
			var t, o;
			return e.configuration.title.replace(/{world}/gi, ((t = e.currentWorld) == null ? void 0 : t.displayName) || "No world").replace(/{map}/gi, ((o = e.currentMap) == null ? void 0 : o.displayName) || "No map")
		},
		playersHeading(e) {
			return e.messages.playersHeading.replace("{cur}", e.players.size.toString()).replace("{max}", e.maxPlayers.toString())
		}
	};
var c = (e => (e.INIT = "init", e.SET_SERVER_CONFIGURATION = "setServerConfiguration", e.SET_SERVER_CONFIGURATION_HASH = "setServerConfigurationHash", e.SET_SERVER_MESSAGES = "setServerMessages", e.SET_WORLDS = "setWorlds", e.SET_COMPONENTS = "setComponents", e.SET_MARKER_SETS = "setMarkerSets", e.SET_MARKERS = "setMarkers", e.SET_WORLD_STATE = "setWorldState", e.ADD_MARKER_SET_UPDATES = "addMarkerSetUpdates", e.ADD_MARKER_UPDATES = "addMarkerUpdates", e.ADD_TILE_UPDATES = "addTileUpdates", e.ADD_CHAT = "addChat", e.POP_MARKER_UPDATES = "popMarkerUpdates", e.POP_TILE_UPDATES = "popTileUpdates", e.SET_MAX_PLAYERS = "setMaxPlayers", e.SET_PLAYERS_ASYNC = "setPlayersAsync", e.SYNC_PLAYERS = "syncPlayers", e.SET_LOADED = "setLoaded", e.SET_CURRENT_SERVER = "setCurrentServer", e.SET_CURRENT_MAP = "setCurrentMap", e.SET_CURRENT_LOCATION = "setCurrentLocation", e.SET_CURRENT_ZOOM = "setCurrentZoom", e.SET_PARSED_URL = "setParsedUrl", e.CLEAR_PARSED_URL = "clearParsedUrl", e.SET_FOLLOW_TARGET = "setFollowTarget", e.SET_VIEW_TARGET = "setViewTarget", e.CLEAR_FOLLOW_TARGET = "clearFollow", e.CLEAR_VIEW_TARGET = "clearViewTarget", e.SET_SCREEN_SIZE = "setScreenSize", e.TOGGLE_UI_ELEMENT_VISIBILITY = "toggleUIElementVisibility", e.SET_UI_ELEMENT_VISIBILITY = "setUIElementVisibility", e.SHOW_UI_MODAL = "showUIModal", e.HIDE_UI_MODAL = "hideUIModal", e.TOGGLE_SIDEBAR_SECTION_COLLAPSED_STATE = "toggleSidebarSectionCollapsedState", e.SET_LOGGED_IN = "setLoggedIn", e.SET_LOGIN_REQUIRED = "setLoginRequired", e.RESET = "reset", e))(c || {}),
	dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUrHQ1DIAxsQi29jXOqfWYnGwr///9SPYm7iXK0hG20e2ScaUyQXkCKTD2CVDpAKhMzJBEvHw7GloC3gnKtgG22iWy+iGycclysdlqiakecY0aWX0CAUzR6TjMkGAjN/gIgAAAAbElEQVQY02XKRw7AIAxEUTuYGkJI79z/mDESO39pNk8D0wQ8rUvRGjgBrZxHDqCihG1Tap4Vd545SyDynmhdj8O5npPgvTHWhuCctcYQSbjvEJal4/b9ut5XQozPgzhwiDGmJKGesZXS9wn4AR4zCfm0oDjBAAAAAElFTkSuQmCC";
const it = new Map,
	rt = new Map,
	ct = new Set,
	Tt = [],
	so = e => {
		switch (e) {
			case "large":
			case "body":
				return 32;
			case "small":
			default:
				return 16
		}
	},
	lo = (e, t) => {
		const o = typeof e == "string" ? e : e.name,
			a = typeof e == "string" ? void 0 : e.uuid,
			r = `${o}-${t}`;
		if (it.has(r)) return Promise.resolve(it.get(r));
		if (rt.has(r)) return rt.get(r);
		const i = new Promise((n, s) => {
			const l = new Image;
			l.onload = function () {
				it.set(r, l), ct.delete(r), st(), n(l)
			}, l.onerror = function (p) {
				console.warn(`Failed to retrieve face of ${o} with size ${t}!`), ct.delete(r), st(), s(p)
			}, Tt.push({
				name: o,
				uuid: a,
				size: t,
				cacheKey: r,
				image: l
			})
		}).finally(() => rt.delete(r));
		return rt.set(r, i), st(), i
	},
	tt = () => dt,
	st = () => {
		if (ct.size > 8 || !Tt.length) return;
		const e = Tt.pop();
		ct.add(e.cacheKey), e.image.src = _().state.components.players.imageUrl(e), st()
	},
	Gt = () => {
		it.clear()
	},
	ca = {
		version: "3.1.0",
		firstLoad: !0,
		initialTitle: document.title,
		servers: new Map,
		configuration: {
			defaultMap: "",
			defaultWorld: "",
			defaultZoom: 0,
			followMap: "",
			followZoom: 0,
			title: "",
			expandUI: !1
		},
		configurationHash: void 0,
		messages: ia(),
		loggedIn: !1,
		loginRequired: !1,
		worlds: new Map,
		maps: new Map,
		players: new Map,
		sortedPlayers: [],
		maxPlayers: 0,
		chat: {
			unread: 0,
			messages: []
		},
		markerSets: new Map,
		pendingMarkerUpdates: [],
		pendingTileUpdates: [],
		components: {
			markers: {
				showLabels: !1
			},
			players: {
				markers: void 0,
				grayHiddenPlayers: !0,
				showImages: !1,
				imageUrl: tt
			},
			coordinatesControl: void 0,
			clockControl: void 0,
			linkControl: !1,
			layerControl: !1,
			logoControls: [],
			chatSending: void 0,
			chatBox: void 0,
			chatBalloons: !1,
			login: !1
		},
		followTarget: void 0,
		viewTarget: void 0,
		currentMapProvider: void 0,
		currentServer: void 0,
		currentWorld: void 0,
		currentMap: void 0,
		currentLocation: {
			x: 0,
			y: 0,
			z: 0
		},
		currentZoom: 0,
		currentWorldState: {
			raining: !1,
			thundering: !1,
			timeOfDay: 0
		},
		ui: {
			playersAboveMarkers: !0,
			playersSearch: !0,
			compactPlayerMarkers: !1,
			disableContextMenu: !1,
			disableMarkerUI: !1,
			customLoginUrl: null,
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight,
			smallScreen: !1,
			visibleElements: new Set,
			visibleModal: void 0,
			previouslyVisibleElements: new Set,
			sidebar: {
				servers: {},
				players: {},
				maps: {},
				markers: {}
			}
		}
	},
	Y = Object.freeze({
		markers: new Map
	});
class K extends Error {
	constructor(t) {
		super(t), this.name = ""
	}
}
class lt extends Error {
	constructor(t) {
		super(t), this.name = "ChatError"
	}
}
class me {
	constructor(t) {
		this.store = _(), this.config = t
	}
	async populateWorld(t) {}
	async populateMap(t) {}
	startUpdates() {}
	stopUpdates() {}
	sendChatMessage(t) {
		throw new Error("Provider does not support chat")
	}
	async login(t) {
		throw new Error("Provider does not support logging in")
	}
	async logout() {
		throw new Error("Provider does not support logging out")
	}
	async register(t) {
		throw new Error("Provider does not support registration")
	}
	static async fetch(t, o) {
		let a;
		try {
			a = await fetch(t, o)
		} catch (r) {
			throw r instanceof DOMException && r.name === "AbortError" ? (console.warn(`Request aborted (${t}`), r) : (console.error(r), new Error("Network request failed"))
		}
		if (!a.ok) throw new Error(`Network request failed (${a.statusText||"Unknown"})`);
		return a
	}
	static async fetchText(t, o) {
		const a = await this.fetch(t, o);
		let r;
		try {
			r = await a.text()
		} catch (i) {
			throw i instanceof DOMException && i.name === "AbortError" && console.warn(`Request aborted (${t}`), i
		}
		return r
	}
	static async fetchJSON(t, o) {
		const a = await this.fetch(t, o);
		let r;
		try {
			r = await a.json()
		} catch (i) {
			throw i instanceof DOMException && i.name === "AbortError" ? (console.warn(`Request aborted (${t}`), i) : new Error("Request returned invalid json")
		}
		return r
	}
	static async getText(t, o) {
		return me.fetchText(t, {
			signal: o,
			credentials: "include"
		})
	}
	static async getJSON(t, o) {
		return me.fetchJSON(t, {
			signal: o,
			credentials: "include"
		})
	}
}
var R = (e => (e.LOAD_CONFIGURATION = "loadConfiguration", e.START_UPDATES = "startUpdates", e.STOP_UPDATES = "stopUpdates", e.SET_PLAYERS = "setPlayers", e.POP_MARKER_UPDATES = "popMarkerUpdates", e.POP_TILE_UPDATES = "popTileUpdates", e.SEND_CHAT_MESSAGE = "sendChatMessage", e.LOGIN = "login", e.LOGOUT = "logout", e.REGISTER = "register", e))(R || {});
class zt extends u.exports.Polyline {
	constructor(t, o) {
		super(t, o.style), this.options.minZoom = o.minZoom, this.options.maxZoom = o.maxZoom
	}
}
class co extends u.exports.Polygon {
	constructor(t, o) {
		super(t, o.style)
	}
}
const qe = {
		direction: "top",
		sticky: !0,
		opacity: 1,
		interactive: !1
	},
	ma = (e, t) => JSON.stringify(e) === JSON.stringify(t),
	pa = (e, t) => e && t && e.color === t.color && e.weight === t.weight && e.opacity === t.opacity && e.fillColor === t.fillColor && e.fillOpacity === t.fillOpacity,
	Qe = (e, t) => {
		const o = document.createElement("span");
		return e.isPopupHTML ? (o.classList.add(t), o.insertAdjacentHTML("afterbegin", e.popup)) : o.textContent = e.popup, o
	},
	mo = (e, t) => {
		const o = !e.style.fillOpacity || e.style.fillOpacity <= 0,
			a = e.points.map($t, t),
			r = o ? new zt(a, e) : new co(a, e);
		return e.popup && r.bindPopup(() => Qe(e, "AreaPopup")), e.tooltip && r.bindTooltip(() => e.tooltipHTML || e.tooltip, qe), r
	},
	ua = (e, t, o) => {
		if (!e) return mo(t, o);
		const a = t.points.map($t, o),
			r = e.getLatLngs();
		let i = !1;
		return pa(e.options, t.style) || (e.setStyle(t.style), i = !0), ma(r.length === 1 ? r[0] : r, a) || (e.setLatLngs(a), i = !0), e.closePopup(), e.unbindPopup(), e.closeTooltip(), e.unbindTooltip(), t.popup && e.bindPopup(() => Qe(t, "AreaPopup")), t.tooltip && e.bindTooltip(() => t.tooltipHTML || t.tooltip, qe), i && e.redraw(), e
	},
	$t = function (e) {
		return Array.isArray(e) ? e.map($t, this) : this(e)
	},
	ha = (e, t, o, a) => e.length === 2 ? t[0] === t[1] ? fa(e, t, o, a) : ga(e, t, o) : t[0] === t[1] ? ba(e, t, o, a) : ya(e, t, o),
	ga = (e, t, o) => {
		const a = e[0],
			r = e[1],
			i = t[0],
			n = t[1],
			s = o[0],
			l = o[1];
		return [
			[{
				x: r,
				y: n,
				z: l
			}, {
				x: a,
				y: n,
				z: l
			}, {
				x: a,
				y: n,
				z: s
			}, {
				x: r,
				y: n,
				z: s
			}],
			[{
				x: r,
				y: i,
				z: l
			}, {
				x: a,
				y: i,
				z: l
			}, {
				x: a,
				y: i,
				z: s
			}, {
				x: r,
				y: i,
				z: s
			}],
			[{
				x: r,
				y: n,
				z: l
			}, {
				x: r,
				y: i,
				z: l
			}, {
				x: a,
				y: i,
				z: l
			}, {
				x: a,
				y: n,
				z: l
			}],
			[{
				x: a,
				y: n,
				z: l
			}, {
				x: a,
				y: i,
				z: l
			}, {
				x: a,
				y: i,
				z: s
			}, {
				x: a,
				y: n,
				z: s
			}],
			[{
				x: r,
				y: n,
				z: s
			}, {
				x: r,
				y: i,
				z: s
			}, {
				x: a,
				y: i,
				z: s
			}, {
				x: a,
				y: n,
				z: s
			}],
			[{
				x: r,
				y: n,
				z: l
			}, {
				x: r,
				y: i,
				z: l
			}, {
				x: r,
				y: i,
				z: s
			}, {
				x: r,
				y: n,
				z: s
			}]
		]
	},
	fa = (e, t, o, a) => {
		const r = e[0],
			i = e[1],
			n = t[1],
			s = o[0],
			l = o[1];
		return a ? [{
			x: i,
			y: n,
			z: l
		}, {
			x: r,
			y: n,
			z: l
		}, {
			x: r,
			y: n,
			z: s
		}, {
			x: i,
			y: n,
			z: s
		}, {
			x: i,
			y: n,
			z: l
		}] : [{
			x: i,
			y: n,
			z: l
		}, {
			x: r,
			y: n,
			z: l
		}, {
			x: r,
			y: n,
			z: s
		}, {
			x: i,
			y: n,
			z: s
		}]
	},
	ya = (e, t, o) => {
		const a = [],
			r = [],
			i = [];
		for (let n = 0; n < e.length; n++) a[n] = {
			x: e[n],
			y: t[0],
			z: o[n]
		}, r[n] = {
			x: e[n],
			y: t[1],
			z: o[n]
		};
		for (let n = 0; n < e.length; n++) i[n] = [a[n], r[n], r[(n + 1) % e.length], a[(n + 1) % e.length]];
		return i[e.length] = r, i[e.length + 1] = a, i
	},
	ba = (e, t, o, a) => {
		const r = [];
		for (let i = 0; i < e.length; i++) r[i] = {
			x: e[i],
			y: t[1],
			z: o[i]
		};
		return a && r.push(r[0]), r
	},
	po = (e, t) => {
		const o = e.points.map(Ut, t),
			a = new zt(o, e);
		return e.popup && a.bindPopup(() => Qe(e, "LinePopup")), e.tooltip && a.bindTooltip(() => e.tooltipHTML || e.tooltip, qe), a
	},
	va = (e, t, o) => e ? (e.closePopup(), e.unbindPopup(), e.closeTooltip(), e.unbindTooltip(), t.popup && e.bindPopup(() => Qe(t, "AreaPopup")), t.tooltip && e.bindTooltip(() => t.tooltipHTML || t.tooltip, qe), e.setStyle(t.style), e.setLatLngs(t.points.map(Ut, o)), e.redraw(), e) : po(t, o),
	Ut = function (e) {
		return Array.isArray(e) ? Ut(e) : this(e)
	},
	wa = (e, t, o) => {
		const a = [];
		for (let r = 0; r < e.length; r++) a.push({
			x: e[r],
			y: t[r],
			z: o[r]
		});
		return a
	};
class yt {
	constructor(t) {
		this.world = t.world, this.appendedWorld = t.appendedWorld, this.name = t.name, this.displayName = t.displayName || "", this.icon = t.icon || void 0, this.background = t.background || "#000000", this.nightAndDay = t.nightAndDay || !1, this.backgroundDay = t.backgroundDay || "#000000", this.backgroundNight = t.backgroundNight || "#000000", this.baseUrl = t.baseUrl, this.imageFormat = t.imageFormat, this.tileSize = t.tileSize, this.projection = t.projection || void 0, this.prefix = t.prefix || "", this.nativeZoomLevels = t.nativeZoomLevels || 1, this.extraZoomLevels = t.extraZoomLevels || 0, this.minZoom = t.minZoom || 0, this.maxZoom = t.maxZoom || void 0, this.defaultZoom = t.defaultZoom || void 0, this.tileUpdateInterval = t.tileUpdateInterval || void 0, this.center = t.center || void 0, this.overlays = t.overlays || new Map, this.scale = 1 / Math.pow(2, this.nativeZoomLevels)
	}
	locationToLatLng(t) {
		return this.projection ? this.projection.locationToLatLng(t) : new u.exports.LatLng(-t.z * this.scale, t.x * this.scale)
	}
	latLngToLocation(t, o) {
		return this.projection ? this.projection.latLngToLocation(t, o) : {
			x: t.lng / this.scale,
			y: o,
			z: -t.lat / this.scale
		}
	}
	hasCustomIcon() {
		return !!this.icon && !this.icon.startsWith("liveatlas_")
	}
	getIcon() {
		let t, o;
		if (this.icon) return this.icon.startsWith("liveatlas_") ? this.icon.replace("liveatlas_", "") : this.icon;
		let a = this.name.split(/[^a-zA-Z\d]/, 1)[0];
		switch (this.world.dimension) {
			case "nether":
				t = "nether", o = ["surface", "nether"].includes(a) ? "surface" : "flat";
				break;
			case "end":
				t = "the_end", o = ["surface", "the_end"].includes(a) ? "surface" : "flat";
				break;
			case "overworld":
			default:
				t = "world", o = ["surface", "flat", "biome", "cave"].includes(a) ? a : "flat";
				break
		}
		return `block_${t}_${o}`
	}
}
const uo = (e, t) => {
		const o = !e.style.fillOpacity || e.style.fillOpacity <= 0,
			a = ho(e, t, o),
			r = o ? new zt(a, e) : new co(a, e);
		return e.popup && r.bindPopup(() => Qe(e, "CirclePopup")), e.tooltip && r.bindTooltip(() => e.tooltipHTML || e.tooltip, qe), r
	},
	_a = (e, t, o) => {
		if (!e) return uo(t, o);
		const a = t.style && t.style.fillOpacity && t.style.fillOpacity <= 0;
		return e.closePopup(), e.unbindPopup(), e.closeTooltip(), e.unbindTooltip(), t.popup && e.bindPopup(() => Qe(t, "AreaPopup")), t.tooltip && e.bindTooltip(() => t.tooltipHTML || t.tooltip, qe), e.setStyle(t.style), e.setLatLngs(ho(t, o, a)), e.redraw(), e
	},
	ho = (e, t, o) => {
		const a = [];
		for (let r = 0; r < 360; r++) {
			const i = r * Math.PI / 180,
				n = e.radius[0] * Math.sin(i) + e.location.x,
				s = e.radius[1] * Math.cos(i) + e.location.z;
			a.push(t({
				x: n,
				y: e.location.y,
				z: s
			}))
		}
		return o && a.length && a.push(a[0]), a
	},
	go = document.createElement("div");
go.className = "marker";
const fo = document.createElement("img");
fo.className = "marker__icon";
const yo = document.createElement("span");
yo.className = "marker__label";
const ka = {
	iconUrl: "default",
	label: "",
	iconSize: void 0,
	popupAnchor: [0, 0],
	iconAnchor: [0, 0],
	tooltipAnchor: [0, 0],
	isHtml: !1,
	className: ""
};
class bo extends u.exports.Layer {
	constructor(t) {
		super(t), this._labelCreated = !1, this._onHover = () => {
			this.createLabel()
		}, u.exports.Util.setOptions(this, Object.assign(ka, t))
	}
	createIcon(t) {
		t && u.exports.DomUtil.remove(t);
		const o = go.cloneNode(!1);
		return this._image = fo.cloneNode(!1), o.appendChild(this._image), o.classList.add("marker", "leaflet-marker-icon"), this.options.className && o.classList.add(this.options.className), this._image.addEventListener("mouseover", this._onHover), this._container = o, this.update(), o
	}
	createLabel() {
		var t;
		!this._container || this._labelCreated || ((t = this._image) == null || t.removeEventListener("mouseover", this._onHover), this._label = yo.cloneNode(!1), this.update(), this._container.appendChild(this._label), this._labelCreated = !0)
	}
	removeLabel() {
		!this._container || !this._labelCreated || (this._label.remove(), this._label = void 0, this._labelCreated = !1)
	}
	update(t) {
		if (t && (this.options.iconUrl = t.iconUrl, this.options.iconSize = t.iconSize, this.options.iconAnchor = t.iconAnchor, this.options.isHtml = t.isHtml, this.options.label = t.label), !!this._container) {
			if (this._container.classList.toggle("marker--auto-size", !this.options.iconSize), this._image) {
				const o = this.options.iconSize ? u.exports.point(this.options.iconSize) : void 0,
					a = this.options.iconAnchor ? u.exports.point(this.options.iconAnchor) : void 0,
					r = a ? -a.x : o ? -(o.x / 2) : 0,
					i = a ? -a.y : o ? -(o.y / 2) : 0;
				o ? (this._image.width = o.x, this._image.height = o.y) : (this._image.removeAttribute("width"), this._image.removeAttribute("height")), this._container.style.marginLeft = r ? `${r}px` : "", this._container.style.marginTop = i ? `${i}px` : "", this._container.style.height = o ? `${o.y}px` : "auto", this._image.src !== this.options.iconUrl && (this._image.src = this.options.iconUrl)
			}
			this._label && (this.options.isHtml && this._label.innerHTML !== this.options.label ? this._label.innerHTML = this.options.label : this._label.textContent !== this.options.label && (this._label.textContent = this.options.label))
		}
	}
}
class mt extends u.exports.Marker {
	constructor(t, o) {
		super(t, {}), this.options.icon = new bo({
			iconUrl: o.iconUrl,
			label: o.tooltipHTML || o.tooltip,
			iconSize: o.iconSize,
			iconAnchor: o.iconAnchor,
			isHtml: !!o.tooltipHTML
		}), this.options.maxZoom = o.maxZoom, this.options.minZoom = o.maxZoom
	}
	_resetZIndex() {}
	getIcon() {
		return this.options.icon
	}
	createLabel() {
		this.options.icon.createLabel()
	}
	removeLabel() {
		this.options.icon.createLabel()
	}
	onRemove(t) {
		return this.options.icon.removeLabel(), super.onRemove(t), this
	}
}
const vo = (e, t) => {
		const o = new mt(t(e.location), e);
		return o.on("click", a => {
			(!a.target.getPopup() || a.target.isPopupOpen()) && a.target._map.panTo(a.target.getLatLng())
		}), e.popup && o.bindPopup(() => wo(e)), o
	},
	Sa = (e, t, o) => {
		if (!e) return vo(t, o);
		const a = e.getLatLng(),
			r = o(t.location);
		if (a.equals(r) || e.setLatLng(r), e instanceof mt) {
			const i = e.getIcon();
			i && i instanceof bo && i.update({
				iconUrl: t.iconUrl,
				label: t.tooltipHTML || t.tooltip,
				iconSize: t.iconSize,
				iconAnchor: t.iconAnchor,
				isHtml: !!t.tooltipHTML
			})
		}
		return e.closePopup(), e.unbindPopup(), t.popup && e.bindPopup(() => wo(t)), e
	},
	wo = e => {
		const t = document.createElement("span");
		return e.popup && (t.classList.add("MarkerPopup"), t.insertAdjacentHTML("afterbegin", e.popup)), t
	};
var D = (e => (e[e.POINT = 0] = "POINT", e[e.AREA = 1] = "AREA", e[e.LINE = 2] = "LINE", e[e.CIRCLE = 3] = "CIRCLE", e))(D || {});
let le = 0,
	Mt;
const Pt = new Set,
	de = {},
	La = () => {
		const e = _();
		Mt = d(() => e.state.pendingMarkerUpdates.length), M(Mt, (t, o) => {
			t && t > 0 && o === 0 && !le && (le = requestAnimationFrame(() => So()))
		})
	},
	Ea = () => {
		le && (cancelAnimationFrame(le), le = 0)
	},
	Aa = e => {
		Pt.add(e)
	},
	xa = e => {
		Pt.delete(e)
	},
	_o = (e, t) => {
		de[t] || (de[t] = new Set), de[t].add(e)
	},
	ko = (e, t) => {
		!de[t] || de[t].delete(e)
	},
	So = async () => {
		const e = _(),
			t = await e.dispatch(R.POP_MARKER_UPDATES, 10);
		for (const o of t) Pt.forEach(a => a(o)), de[o.set] && de[o.set].forEach(a => a(o));
		Mt.value ? le = requestAnimationFrame(() => So()) : le = 0
	}, Ca = (e, t) => {
		switch (e.type) {
			case 0:
				return vo(e, t);
			case 1:
				return mo(e, t);
			case 2:
				return po(e, t);
			case 3:
				return uo(e, t)
		}
	}, Yt = (e, t, o) => {
		switch (t.type) {
			case 0:
				return Sa(e, t, o);
			case 1:
				return ua(e, t, o);
			case 2:
				return va(e, t, o);
			case 3:
				return _a(e, t, o)
		}
	};
class Ta {
	constructor(t) {
		this.mapToWorld = t.mapToWorld || [0, 0, 0, 0, 0, 0, 0, 0], this.worldToMap = t.worldToMap || [0, 0, 0, 0, 0, 0, 0, 0], this.nativeZoomLevels = t.nativeZoomLevels || 1, this.tileSize = t.tileSize
	}
	locationToLatLng(t) {
		const o = this.worldToMap,
			a = o[3] * t.x + o[4] * t.y + o[5] * t.z,
			r = o[0] * t.x + o[1] * t.y + o[2] * t.z;
		return new u.exports.LatLng(-((this.tileSize - a) / (1 << this.nativeZoomLevels)), r / (1 << this.nativeZoomLevels))
	}
	latLngToLocation(t, o) {
		const a = this.mapToWorld,
			r = this.tileSize + t.lat * (1 << this.nativeZoomLevels),
			i = t.lng * (1 << this.nativeZoomLevels),
			n = a[0] * i + a[1] * r + a[2] * o,
			s = a[6] * i + a[7] * r + a[8] * o;
		return {
			x: n,
			y: o,
			z: s
		}
	}
}

function Ma(e) {
	let t = "Dynmap";
	e.title && (t = e.title.replace(Xt, "") || t);
	const o = parseInt(e.followzoom || "", 10);
	return {
		defaultMap: e.defaultmap || void 0,
		defaultWorld: e.defaultworld || void 0,
		defaultZoom: e.defaultzoom || 0,
		followMap: e.followmap || void 0,
		followZoom: isNaN(o) ? void 0 : o,
		title: t,
		expandUI: !!e.sidebaropened && e.sidebaropened !== "false"
	}
}

function Ia(e) {
	return {
		chatPlayerJoin: e.joinmessage || "",
		chatPlayerQuit: e.quitmessage || "",
		chatAnonymousJoin: e["msg-hiddennamejoin"] || "",
		chatAnonymousQuit: e["msg-hiddennamequit"] || "",
		chatErrorNotAllowed: e["msg-chatnotallowed"] || "",
		chatErrorRequiresLogin: e["msg-chatrequireslogin"] || "",
		chatErrorCooldown: e.spammessage || "",
		worldsHeading: e["msg-maptypes"] || "",
		playersHeading: e["msg-players"] ? `${e["msg-players"]} ({cur}/{max})` : ""
	}
}

function za(e, t) {
	const o = new Map;
	return (e.worlds || []).forEach(a => {
		o.set(a.name, {
			name: a.name,
			displayName: a.title || "",
			dimension: io(a.name),
			seaLevel: a.sealevel || 64,
			maps: new Set
		})
	}), (e.worlds || []).forEach(a => {
		(a.maps || []).forEach(r => {
			const i = o.get(a.name),
				n = r.append_to_world || a.name,
				s = o.get(n);
			if (!s || !i) {
				console.warn(`Ignoring map '${r.name}' associated with non-existent world '${n}'`);
				return
			}
			const l = 128 << (r.tilescale || 0),
				p = r.mapzoomout || 1,
				h = Object.freeze(new yt({
					world: i,
					appendedWorld: i !== s ? s : void 0,
					name: r.name || "(Unnamed map)",
					displayName: r.title,
					icon: r.icon || void 0,
					baseUrl: `${t.tiles}${i.name}/`,
					imageFormat: r["image-format"] || "png",
					tileSize: l,
					projection: new Ta({
						mapToWorld: r.maptoworld || void 0,
						worldToMap: r.worldtomap || void 0,
						nativeZoomLevels: p,
						tileSize: l
					}),
					prefix: r.prefix || "",
					background: r.background || "#000000",
					nightAndDay: r.nightandday,
					backgroundDay: r.backgroundday || "#000000",
					backgroundNight: r.backgroundnight || "#000000",
					center: {
						x: a.center.x || 0,
						y: a.center.y || 0,
						z: a.center.z || 0
					},
					nativeZoomLevels: p,
					extraZoomLevels: r.mapzoomin
				}));
			i.maps.add(h), i !== s && s.maps.add(h)
		})
	}), Array.from(o.values())
}

function $a(e, t) {
	const o = {
		markers: {
			showLabels: !1
		},
		chatBox: void 0,
		chatBalloons: !1,
		players: {
			markers: void 0,
			grayHiddenPlayers: !1,
			imageUrl: a => {
				const r = `${t.markers}faces/`;
				if (a.size === "body") return `${r}body/${a.name}.png`;
				const i = so(a.size);
				return `${r}${i}x${i}/${a.name}.png`
			},
			showImages: e.showplayerfacesinmenu || !1
		},
		coordinatesControl: void 0,
		layerControl: !!e.showlayercontrol && e.showlayercontrol !== "false",
		linkControl: !1,
		clockControl: void 0,
		logoControls: [],
		login: e["login-enabled"] || !1
	};
	return (e.components || []).forEach(a => {
		const r = a.type || "unknown";
		let i = "large";
		switch (r) {
			case "markers":
				o.markers = {
					showLabels: a.showlabel || !1
				};
				break;
			case "playermarkers":
				a.showplayerfaces ? a.smallplayerfaces ? i = "small" : a.showplayerbody && (i = "body") : i = "none", o.players.grayHiddenPlayers = e.grayplayerswhenhidden || !1, o.players.markers = {
					hideByDefault: a.hidebydefault || !1,
					layerName: a.label || "Игроки",
					layerPriority: a.layerprio || 0,
					imageSize: i,
					showHealth: a.showplayerhealth || !1,
					showArmor: a.showplayerhealth || !1,
					showYaw: !1
				};
				break;
			case "coord":
				o.coordinatesControl = {
					showY: !a.hidey,
					label: a.label || "Location: ",
					showRegion: a["show-mcr"] || !1,
					showChunk: a["show-chunk"] || !1
				};
				break;
			case "link":
				o.linkControl = !0;
				break;
			case "digitalclock":
				o.clockControl = {
					showDigitalClock: !0,
					showWeather: !1,
					showTimeOfDay: !1
				};
				break;
			case "timeofdayclock":
				o.clockControl = {
					showTimeOfDay: !0,
					showDigitalClock: a.showdigitalclock || !1,
					showWeather: a.showweather || !1
				};
				break;
			case "logo":
				o.logoControls.push({
					text: a.text || "",
					url: a.linkurl || void 0,
					position: a.position.replace("-", "") || "topleft",
					image: a.logourl || void 0
				});
				break;
			case "chat":
				e.allowwebchat && (o.chatSending = {
					loginRequired: e["webchat-requires-login"] || !1,
					maxLength: e.chatlengthlimit || 256,
					cooldown: e["webchat-interval"] || 5
				});
				break;
			case "chatbox":
				o.chatBox = {
					allowUrlName: a.allowurlname || !1,
					showPlayerFaces: a.showplayerfaces || !1,
					messageLifetime: a.messagettl || 1 / 0,
					messageHistory: a.scrollback || 1 / 0
				};
				break;
			case "chatballoon":
				o.chatBalloons = !0
		}
	}), o
}

function Lo(e, t) {
	return {
		id: e,
		label: t.label || "Unnamed set",
		hidden: t.hide || !1,
		priority: t.layerprio || 0,
		showLabels: t.showlabels || void 0,
		minZoom: typeof t.minzoom != "undefined" && t.minzoom > -1 ? t.minzoom : void 0,
		maxZoom: typeof t.maxzoom != "undefined" && t.maxzoom > -1 ? t.maxzoom : void 0
	}
}

function Ua(e, t, o) {
	let a;
	for (const r in e) !Object.prototype.hasOwnProperty.call(e, r) || (a = `point_${r}`, t.set(a, Eo(a, e[r], o)))
}

function Eo(e, t, o) {
	let a;
	t.dim && (a = t.dim.split("x").filter(i => !isNaN(Number(i))), a.length !== 2 && (a = void 0));
	const r = {
		id: e,
		type: D.POINT,
		location: {
			x: isNaN(t.x) ? 0 : Number.isInteger(t.x) ? t.x + .5 : t.x,
			y: isNaN(t.y) ? 0 : Number.isInteger(t.y) ? t.y + .5 : t.y,
			z: isNaN(t.z) ? 0 : Number.isInteger(t.z) ? t.z + .5 : t.z
		},
		iconUrl: `${o.markers}_markers_/${t.icon||"default"}.png`,
		iconSize: a || [16, 16],
		minZoom: typeof t.minzoom != "undefined" && t.minzoom > -1 ? t.minzoom : void 0,
		maxZoom: typeof t.maxzoom != "undefined" && t.maxzoom > -1 ? t.maxzoom : void 0,
		tooltip: t.markup ? ee(t.label) : t.label,
		tooltipHTML: t.markup ? t.label : void 0,
		popup: t.desc || void 0,
		isPopupHTML: !0
	};
	return r.tooltipHTML || (r.tooltip = na(r.tooltip)), r
}

function Pa(e, t) {
	let o;
	for (const a in e) !Object.prototype.hasOwnProperty.call(e, a) || (o = `area_${a}`, t.set(o, Ao(o, e[a])))
}

function Ao(e, t) {
	const o = t.x || [0, 0],
		a = [t.ybottom || 0, t.ytop || 0],
		r = t.z || [0, 0],
		i = ro(o, a, r),
		n = et(i);
	return {
		id: e,
		type: D.AREA,
		style: {
			color: t.color || "#ff0000",
			opacity: t.opacity || 1,
			weight: t.weight || 1,
			fillColor: t.fillcolor || "#ff0000",
			fillOpacity: t.fillopacity || 0
		},
		outline: !t.fillopacity,
		bounds: i,
		location: n,
		points: ha(o, a, r, !t.fillopacity),
		minZoom: typeof t.minzoom != "undefined" && t.minzoom > -1 ? t.minzoom : void 0,
		maxZoom: typeof t.maxzoom != "undefined" && t.maxzoom > -1 ? t.maxzoom : void 0,
		tooltip: t.markup ? ee(t.label) : t.label,
		tooltipHTML: t.markup ? t.label : void 0,
		popup: t.desc || t.label || void 0,
		isPopupHTML: t.desc ? !0 : t.markup || !1
	}
}

function Na(e, t) {
	let o;
	for (const a in e) !Object.prototype.hasOwnProperty.call(e, a) || (o = `line_${a}`, t.set(o, xo(o, e[a])))
}

function xo(e, t) {
	const o = t.x || [0, 0],
		a = t.y || [0, 0],
		r = t.z || [0, 0],
		i = ro(o, a, r),
		n = et(i);
	return {
		id: e,
		type: D.LINE,
		style: {
			color: t.color || "#ff0000",
			opacity: t.opacity || 1,
			weight: t.weight || 1
		},
		location: n,
		bounds: i,
		points: wa(o, a, r),
		minZoom: typeof t.minzoom != "undefined" && t.minzoom > -1 ? t.minzoom : void 0,
		maxZoom: typeof t.maxzoom != "undefined" && t.maxzoom > -1 ? t.maxzoom : void 0,
		tooltip: t.markup ? ee(t.label) : t.label,
		tooltipHTML: t.markup ? t.label : void 0,
		popup: t.desc || t.label || void 0,
		isPopupHTML: t.desc ? !0 : t.markup || !1
	}
}

function Ra(e, t) {
	let o;
	for (const a in e) !Object.prototype.hasOwnProperty.call(e, a) || (o = `circle_${a}`, t.set(o, Co(o, e[a])))
}

function Co(e, t) {
	return {
		id: e,
		type: D.CIRCLE,
		location: {
			x: t.x || 0,
			y: t.y || 0,
			z: t.z || 0
		},
		bounds: {
			max: {
				x: (t.x || 0) + (t.xr || 0),
				y: t.y || 0,
				z: (t.z || 0) + (t.zr || 0)
			},
			min: {
				x: (t.x || 0) - (t.xr || 0),
				y: t.y || 0,
				z: (t.z || 0) - (t.zr || 0)
			}
		},
		radius: [t.xr || 0, t.zr || 0],
		style: {
			fillColor: t.fillcolor || "#ff0000",
			fillOpacity: t.fillopacity || 0,
			color: t.color || "#ff0000",
			opacity: t.opacity || 1,
			weight: t.weight || 1
		},
		minZoom: typeof t.minzoom != "undefined" && t.minzoom > -1 ? t.minzoom : void 0,
		maxZoom: typeof t.maxzoom != "undefined" && t.maxzoom > -1 ? t.maxzoom : void 0,
		tooltip: t.markup ? ee(t.label) : t.label,
		tooltipHTML: t.markup ? t.label : void 0,
		popup: t.desc || t.label || void 0,
		isPopupHTML: t.desc ? !0 : t.markup || !1
	}
}

function Oa(e, t, o) {
	const a = {
			markerSets: [],
			markers: [],
			tiles: [],
			chat: []
		},
		r = {
			stale: 0,
			noSet: 0,
			noId: 0,
			unknownType: 0,
			unknownCType: 0,
			incomplete: 0,
			notImplemented: 0
		};
	let i = 0;
	for (const n of e) switch (n.type) {
		case "component": {
			if (t && n.timestamp < t) {
				r.stale++;
				continue
			}
			if (!n.id) {
				r.noId++;
				continue
			}
			const s = n.msg.startsWith("set") ? n.id : n.set;
			if (!s) {
				r.noSet++;
				continue
			}
			if (n.ctype !== "markers") {
				r.unknownCType++;
				continue
			}
			const l = {
				id: n.id,
				removed: n.msg.endsWith("deleted"),
				set: s
			};
			n.msg.startsWith("set") ? (l.removed || (l.payload = Lo(s, n)), a.markerSets.push(Object.freeze(l))) : (n.msg.startsWith("marker") ? (l.id = `point_${n.id}`, l.type = D.POINT, l.payload = l.removed ? void 0 : Eo(l.id, n, o)) : n.msg.startsWith("area") ? (l.id = `area_${n.id}`, l.type = D.AREA, l.payload = l.removed ? void 0 : Ao(l.id, n)) : n.msg.startsWith("circle") ? (l.id = `circle_${n.id}`, l.type = D.CIRCLE, l.payload = l.removed ? void 0 : Co(l.id, n)) : n.msg.startsWith("line") && (l.id = `line_${n.id}`, l.type = D.LINE, l.payload = l.removed ? void 0 : xo(l.id, n)), a.markers.push(Object.freeze(l))), i++;
			break
		}
		case "chat":
			if (!n.message || !n.timestamp) {
				r.incomplete++;
				continue
			}
			if (n.timestamp < t) {
				r.stale++;
				continue
			}
			if (n.source !== "player" && n.source !== "web" && n.source !== "plugin") {
				r.notImplemented++;
				continue
			}
			a.chat.push({
				type: "chat",
				source: n.source || void 0,
				playerAccount: n.account || void 0,
				playerName: n.playerName || void 0,
				message: n.message || "",
				timestamp: n.timestamp,
				channel: n.channel || void 0
			});
			break;
		case "playerjoin":
			if (!n.account || !n.timestamp) {
				r.incomplete++;
				continue
			}
			if (n.timestamp < t) {
				r.stale++;
				continue
			}
			a.chat.push({
				type: "playerjoin",
				playerAccount: n.account,
				playerName: n.playerName || "",
				timestamp: n.timestamp || void 0
			});
			break;
		case "playerquit":
			if (!n.account || !n.timestamp) {
				r.incomplete++;
				continue
			}
			if (n.timestamp < t) {
				r.stale++;
				continue
			}
			a.chat.push({
				type: "playerleave",
				playerAccount: n.account,
				playerName: n.playerName || "",
				timestamp: n.timestamp || void 0
			});
			break;
		case "tile":
			if (!n.name || !n.timestamp) {
				r.incomplete++;
				continue
			}
			if (t && n.timestamp < t) {
				r.stale++;
				continue
			}
			a.tiles.push({
				name: n.name,
				timestamp: n.timestamp
			}), i++;
			break;
		default:
			r.unknownType++
	}
	return a.chat = a.chat.sort((n, s) => s.timestamp - n.timestamp), console.debug(`Updates: ${i} accepted. Rejected: `, r), a
}
const Da = u.exports.Util.falseFn,
	To = class extends u.exports.TileLayer {
		constructor(e) {
			super("", {
				errorTileUrl: "images/blank.png",
				zoomReverse: !0,
				tileSize: e.tileSize,
				maxNativeZoom: e.nativeZoomLevels,
				minZoom: e.minZoom,
				maxZoom: e.maxZoom || e.nativeZoomLevels + (e.extraZoomLevels || 0)
			}), this.loadQueue = [], this.loadingTiles = Object.seal(new Set), u.exports.Util.setOptions(this, {
				imageFormat: e.imageFormat,
				baseUrl: e.baseUrl,
				tileUpdateInterval: e.tileUpdateInterval,
				nightAndDay: !!e.nightAndDay,
				prefix: e.prefix || "",
				extraZoomLevels: e.extraZoomLevels || 0,
				nativeZoomLevels: e.nativeZoomLevels
			}), this.tileTemplate = u.exports.DomUtil.create("img", "leaflet-tile"), this.tileTemplate.style.width = this.tileTemplate.style.height = this.options.tileSize + "px", this.tileTemplate.alt = "", this.tileTemplate.tileName = "", this.tileTemplate.callback = Da, this.tileTemplate.setAttribute("role", "presentation"), (this.options.crossOrigin || this.options.crossOrigin === "") && (this.tileTemplate.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), Object.seal(this.tileTemplate)
		}
		createTile(e, t) {
			const o = this.tileTemplate.cloneNode(!1);
			return this.loadQueue.push(o), o.onload = () => {
				URL.revokeObjectURL(o.src), this._tileOnLoad(t, o), this.loadingTiles.delete(o), this.tickLoadQueue()
			}, o.onerror = () => {
				this._tileOnError(t, o, To.genericLoadError), this.loadingTiles.delete(o), this.tickLoadQueue()
			}, o.url = this.getTileUrl(e), o.callback = t, this.tickLoadQueue(), o
		}
		async fetchTile(e) {
			e.abortController && !e.abortController.signal.aborted && e.abortController.abort(), e.abortController = new AbortController;
			try {
				const t = await fetch(e.url, {
					signal: e.abortController.signal
				});
				if (!t.ok) {
					this._tileOnError(e.callback, e, new Error("Response was not ok"));
					return
				}
				const o = await t.blob();
				e.src = URL.createObjectURL(o)
			} catch (t) {
				if (t instanceof DOMException && t.name === "AbortError") return;
				console.error(t), this._tileOnError(e.callback, e, t)
			}
		}
		tickLoadQueue() {
			if (this.loadingTiles.size > 6) return;
			const e = this.loadQueue.shift();
			!e || (this.loadingTiles.add(e), this.fetchTile(e))
		}
		refresh() {
			for (const e in this._tiles) {
				if (!Object.prototype.hasOwnProperty.call(this._tiles, e)) continue;
				const t = this._tiles[e];
				t.loaded && this.loadQueue.push(t.el)
			}
			this.tickLoadQueue()
		}
		_abortLoading() {
			let e;
			for (const t in this._tiles) !Object.prototype.hasOwnProperty.call(this._tiles, t) || (e = this._tiles[t], e.coords.z !== this._tileZoom && (!e.loaded && e.el && e.el.abortController && e.el.abortController.abort(), this.loadQueue.includes(e.el) && this.loadQueue.splice(this.loadQueue.indexOf(e.el), 1), this.loadingTiles.delete(e.el)));
			super._abortLoading.call(this)
		}
		_removeTile(e) {
			const t = this._tiles[e];
			!t || (this.loadingTiles.delete(t.el), this.loadQueue.includes(t.el) && this.loadQueue.splice(this.loadQueue.indexOf(t.el), 1), t.el.onerror = null, t.el.onload = null, !t.loaded && t.el.abortController && t.el.abortController.abort(), super._removeTile(e))
		}
		onAdd(e) {
			return this.options.tileUpdateInterval && (this.refreshTimeout = setTimeout(() => this.handlePeriodicRefresh(), this.options.tileUpdateInterval)), super.onAdd(e)
		}
		remove() {
			return this.refreshTimeout && clearTimeout(this.refreshTimeout), super.remove()
		}
		handlePeriodicRefresh() {
			this._map && this.refresh(), this.refreshTimeout = setTimeout(() => this.handlePeriodicRefresh(), this.options.tileUpdateInterval)
		}
	};
let bt = To;
bt.genericLoadError = new Error("Tile failed to load");
class Ba extends bt {
	constructor(t) {
		super(t), this._store = _(), this._nightUnwatch = null, this._updateUnwatch = null, this._updateFrame = 0, this._namedTiles = Object.seal(new Map), this._pendingUpdates = d(() => !!this._store.state.pendingTileUpdates.length), this._night = d(() => this._store.getters.night)
	}
	onAdd(t) {
		return super.onAdd(t), this._updateUnwatch = M(this._pendingUpdates, (o, a) => {
			o && !a && !this._updateFrame && this.handlePendingUpdates()
		}), this._nightUnwatch = M(this._night, () => {
			this.options.nightAndDay && this.redraw()
		}), this
	}
	getTileName(t) {
		const o = this.getTileInfo(t);
		return o.y = -o.y, o.scaledy = o.y >> 5, `${o.prefix}${o.nightday}/${o.scaledx}_${o.scaledy}/${o.zoom}${o.x}_${o.y}.${o.fmt}`
	}
	getTileUrl(t) {
		return this.getTileUrlFromName(this.getTileName(t))
	}
	getTileUrlFromName(t, o) {
		let a = this.options.baseUrl + t;
		return typeof o != "undefined" && (a += a.indexOf("?") === -1 ? `?timestamp=${o}` : `&timestamp=${o}`), a
	}
	updateNamedTile(t, o) {
		const a = this._namedTiles.get(t);
		a && (a.classList.remove("leaflet-tile-loaded"), a.dataset.src = this.getTileUrlFromName(t, o), this.loadQueue.push(a), this.tickLoadQueue())
	}
	createTile(t, o) {
		const a = super.createTile(t, o);
		return a.tileName = this.getTileName(t), this._namedTiles.set(a.tileName, a), a
	}
	_abortLoading() {
		let t;
		for (const o in this._tiles) !Object.prototype.hasOwnProperty.call(this._tiles, o) || (t = this._tiles[o], t.coords.z !== this._tileZoom && t.loaded && t.el && t.el.tileName && this._namedTiles.delete(t.el.tileName));
		super._abortLoading.call(this)
	}
	_removeTile(t) {
		const o = this._tiles[t];
		if (!o) return;
		const a = o.el.tileName;
		a && this._namedTiles.delete(a), super._removeTile.call(this, t)
	}
	zoomprefix(t) {
		return "z".repeat(t) + (t === 0 ? "" : "_")
	}
	getTileInfo(t) {
		const o = this._getZoomForUrl(),
			a = Math.max(0, o - (this.options.extraZoomLevels || 0)),
			r = 1 << a,
			i = r * t.x,
			n = r * t.y;
		return {
			prefix: this.options.prefix || "",
			nightday: this.options.nightAndDay && !this._night.value ? "_day" : "",
			scaledx: i >> 5,
			scaledy: n >> 5,
			zoom: this.zoomprefix(a),
			zoomprefix: a == 0 ? "" : this.zoomprefix(a) + "_",
			x: i,
			y: n,
			fmt: this.options.imageFormat || "png"
		}
	}
	async handlePendingUpdates() {
		const t = await this._store.dispatch(R.POP_TILE_UPDATES, 10);
		for (const o of t) this.updateNamedTile(o.name, o.timestamp);
		this._pendingUpdates.value ? this._updateFrame = requestAnimationFrame(() => this.handlePendingUpdates()) : this._updateFrame = 0
	}
	remove() {
		return super.remove(), this._nightUnwatch && this._nightUnwatch(), this._updateFrame && cancelAnimationFrame(this._updateFrame), this._updateUnwatch && this._updateUnwatch(), this
	}
}
class Ke extends me {
	constructor(t) {
		super(t), this.configurationAbort = void 0, this.markersAbort = void 0, this.updateAbort = void 0, this.updatesEnabled = !1, this.updateTimeout = null, this.updateTimestamp = new Date, this.updateInterval = 3e3, this.markerSets = new Map, this.markers = new Map, this.validateConfig()
	}
	validateConfig() {
		if (typeof this.config != "undefined") {
			if (!this.config || this.config.constructor !== Object) throw new K("Dynmap configuration object missing");
			if (!this.config.configuration) throw new K("Dynmap configuration URL missing");
			if (!this.config.update) throw new K("Dynmap update URL missing");
			if (!this.config.markers) throw new K("Dynmap markers URL missing");
			if (!this.config.tiles) throw new K("Dynmap tiles URL missing");
			if (!this.config.sendmessage) throw new K("Dynmap sendmessage URL missing")
		}
	}
	async getMarkerSets(t) {
		const o = `${this.config.markers}_markers_/marker_${t.name}.json`;
		this.markersAbort && this.markersAbort.abort(), this.markersAbort = new AbortController;
		const a = await this.getJSON(o, this.markersAbort.signal);
		a.sets = a.sets || {};
		for (const r in a.sets) {
			if (!Object.prototype.hasOwnProperty.call(a.sets, r)) continue;
			const i = a.sets[r],
				n = Lo(r, i),
				s = new Map;
			Ua(i.markers || {}, s, this.config), Pa(i.areas || {}, s), Na(i.lines || {}, s), Ra(i.circles || {}, s), this.markerSets.set(r, n), this.markers.set(r, s)
		}
	}
	async loadServerConfiguration() {
		this.configurationAbort && this.configurationAbort.abort(), this.configurationAbort = new AbortController;
		const t = await this.getJSON(this.config.configuration, this.configurationAbort.signal);
		if (t.error) throw new Error(t.error);
		const o = Ma(t);
		this.updateInterval = t.updaterate || 3e3, this.store.commit(c.SET_SERVER_CONFIGURATION, o), this.store.commit(c.SET_SERVER_CONFIGURATION_HASH, t.confighash || 0), this.store.commit(c.SET_MAX_PLAYERS, t.maxcount || 0), this.store.commit(c.SET_SERVER_MESSAGES, Ia(t)), this.store.commit(c.SET_WORLDS, za(t, this.config)), this.store.commit(c.SET_COMPONENTS, $a(t, this.config)), this.store.commit(c.SET_LOGGED_IN, t.loggedin || !1)
	}
	async populateWorld(t) {
		await this.getMarkerSets(t), this.store.commit(c.SET_MARKER_SETS, this.markerSets), this.store.commit(c.SET_MARKERS, this.markers), this.markerSets.clear(), this.markers.clear()
	}
	createTileLayer(t) {
		return new Ba(t)
	}
	async getUpdate() {
		let t = this.config.update;
		t = t.replace("{world}", this.store.state.currentWorld.name), t = t.replace("{timestamp}", this.updateTimestamp.getTime().toString()), this.updateAbort && this.updateAbort.abort(), this.updateAbort = new AbortController;
		const o = await this.getJSON(t, this.updateAbort.signal),
			a = new Set,
			r = Oa(o.updates || [], this.updateTimestamp, this.config),
			i = {
				timeOfDay: o.servertime || 0,
				thundering: o.isThundering || !1,
				raining: o.hasStorm || !1
			};
		(o.players || []).forEach(n => {
			const s = n.world && n.world !== "-some-other-bogus-world-" ? n.world : void 0;
			a.add({
				name: n.account || "",
				displayName: n.name || "",
				health: n.health || 0,
				armor: n.armor || 0,
				sort: n.sort || 0,
				hidden: !s,
				location: {
					x: isNaN(n.x) ? 0 : n.x + .5,
					y: isNaN(n.y) ? 0 : n.y,
					z: isNaN(n.z) ? 0 : n.z + .5,
					world: s
				}
			})
		}), this.updateTimestamp = new Date(o.timestamp || 0), this.store.commit(c.SET_WORLD_STATE, i), this.store.commit(c.ADD_MARKER_SET_UPDATES, r.markerSets), this.store.commit(c.ADD_MARKER_UPDATES, r.markers), this.store.commit(c.ADD_TILE_UPDATES, r.tiles), this.store.commit(c.ADD_CHAT, r.chat), o.confighash && this.store.commit(c.SET_SERVER_CONFIGURATION_HASH, o.confighash), await this.store.dispatch(R.SET_PLAYERS, a)
	}
	sendChatMessage(t) {
		return this.store.state.components.chatSending ? fetch(this.config.sendmessage, {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({
				name: null,
				message: t
			})
		}).then(o => {
			if (o.status === 403) throw new lt(this.store.state.messages.chatErrorCooldown.replace("%interval%", this.store.state.components.chatSending.cooldown.toString()));
			if (!o.ok) throw new Error("Network request failed");
			return o.json()
		}).then(o => {
			if (o.error !== "none") throw new lt(this.store.state.messages.chatErrorNotAllowed)
		}).catch(o => {
			throw o instanceof lt || (console.error(this.store.state.messages.chatErrorUnknown), console.trace(o)), o
		}) : Promise.reject(this.store.state.messages.chatErrorDisabled)
	}
	startUpdates() {
		this.updatesEnabled = !0, this.update()
	}
	async update() {
		try {
			await this.getUpdate()
		} finally {
			this.updatesEnabled && (this.updateTimeout && clearTimeout(this.updateTimeout), this.updateTimeout = setTimeout(() => this.update(), this.updateInterval))
		}
	}
	stopUpdates() {
		this.updatesEnabled = !1, this.updateTimeout && clearTimeout(this.updateTimeout), this.updateTimeout = null, this.configurationAbort && this.configurationAbort.abort(), this.updateAbort && this.updateAbort.abort(), this.markersAbort && this.markersAbort.abort()
	}
	async login(t) {
		if (!this.store.getters.loginEnabled) return Promise.reject(this.store.state.messages.loginErrorDisabled);
		this.store.commit(c.SET_LOGGED_IN, !1);
		try {
			const o = new URLSearchParams;
			switch (o.append("j_username", t.username || ""), o.append("j_password", t.password || ""), (await Ke.fetchJSON(this.config.login, {
				method: "POST",
				body: o
			})).result) {
				case "success":
					this.store.commit(c.SET_LOGGED_IN, !0);
					return;
				case "loginfailed":
					return Promise.reject(this.store.state.messages.loginErrorIncorrect);
				default:
					return Promise.reject(this.store.state.messages.loginErrorUnknown)
			}
		} catch (o) {
			return console.error(this.store.state.messages.loginErrorUnknown), console.trace(o), Promise.reject(this.store.state.messages.loginErrorUnknown)
		}
	}
	async logout() {
		if (!this.store.getters.loginEnabled) return Promise.reject(this.store.state.messages.loginErrorDisabled);
		try {
			await Ke.fetchJSON(this.config.login, {
				method: "POST"
			}), this.store.commit(c.SET_LOGGED_IN, !1)
		} catch {
			return Promise.reject(this.store.state.messages.logoutErrorUnknown)
		}
	}
	async register(t) {
		if (!this.store.getters.loginEnabled) return Promise.reject(this.store.state.messages.loginErrorDisabled);
		this.store.commit(c.SET_LOGGED_IN, !1);
		try {
			const o = new URLSearchParams;
			switch (o.append("j_username", t.username || ""), o.append("j_password", t.password || ""), o.append("j_verify_password", t.password || ""), o.append("j_passcode", t.code || ""), (await Ke.fetchJSON(this.config.register, {
				method: "POST",
				body: o
			})).result) {
				case "success":
					this.store.commit(c.SET_LOGGED_IN, !0);
					return;
				case "verifyfailed":
					return Promise.reject(this.store.state.messages.registerErrorVerifyFailed);
				case "registerfailed":
					return Promise.reject(this.store.state.messages.registerErrorIncorrect);
				default:
					return Promise.reject(this.store.state.messages.registerErrorUnknown)
			}
		} catch (o) {
			return console.error(this.store.state.messages.registerErrorUnknown), console.trace(o), Promise.reject(this.store.state.messages.registerErrorUnknown)
		}
	}
	async getJSON(t, o) {
		return me.fetchJSON(t, {
			signal: o,
			credentials: "include"
		}).then(a => {
			if (a.error === "login-required") throw this.store.commit(c.SET_LOGIN_REQUIRED, !0), new Error("Login required");
			return a
		})
	}
}
const Ha = 1,
	It = new Map,
	Nt = new Map,
	vt = (e, t) => {
		if (It.has(e)) throw new TypeError(`${e} is already registered`);
		It.set(e, t)
	},
	Wa = e => Nt.get(e),
	Va = e => {
		const t = `
Check your server configuration in index.html is correct.`,
			o = new Map;
		if (!Object.keys(e).length) throw new K(`No servers defined. ${t}`);
		for (const a in e) {
			if (!Object.hasOwnProperty.call(e, a)) continue;
			const r = e[a];
			let i = !1;
			for (const n of It)
				if (r && Object.hasOwnProperty.call(r, n[0])) {
					try {
						Nt.set(a, new n[1](r[n[0]]))
					} catch (s) {
						throw s.message = `Server "${a}": ${s.message}. ${t}`, s
					}
					o.set(a, r), i = !0
				} if (!i) throw new K(`Server "${a}": No configuration found for any supported map type. ${t}`);
			r.id = a
		}
		return o
	},
	Za = e => {
		const t = `
Check your standalone/config.js file exists and is being loaded correctly.`,
			o = new Map;
		o.set("dynmap", {
			id: "dynmap",
			label: "dynmap",
			dynmap: e
		});
		try {
			Nt.set("dynmap", new Ke(e))
		} catch (a) {
			throw a.message = `${a.message}. ${t}`, a
		}
		return o
	},
	ja = e => {
		var t;
		if (!e) throw new K(`No configuration found.
Check for any syntax errors in your configuration in index.html. Your browser console may contain additional information.`);
		if (e.version !== Ha) throw new K(`Configuration version mismatch.
Use a fresh copy of index.html from your current LiveAtlas version (${_().state.version}) and reapply any customisations.`);
		return typeof e.servers != "undefined" ? Va(e.servers) : Za(((t = window.config) == null ? void 0 : t.url) || null)
	},
	Fa = {
		[c.INIT](e, t) {
			const o = (t == null ? void 0 : t.messages) || {},
				a = (t == null ? void 0 : t.ui) || {};
			try {
				const r = JSON.parse(localStorage.getItem("uiSettings") || "{}");
				if (r && r.sidebar)
					for (const i in r.sidebar) {
						const n = r.sidebar[i];
						!n || typeof e.ui.sidebar[i] != "undefined" && (e.ui.sidebar[i].collapsed = !!n.collapsed)
					}
			} catch (r) {
				console.warn("Failed to load saved UI settings", r)
			}
			e.messages = Object.assign(e.messages, sa(o)), typeof a.playersAboveMarkers == "boolean" && (e.ui.playersAboveMarkers = a.playersAboveMarkers), typeof a.compactPlayerMarkers == "boolean" && (e.ui.compactPlayerMarkers = a.compactPlayerMarkers), typeof a.disableContextMenu == "boolean" && (e.ui.disableContextMenu = a.disableContextMenu), typeof a.disableMarkerUI == "boolean" && (e.ui.disableMarkerUI = a.disableMarkerUI), typeof a.playersSearch == "boolean" && (e.ui.playersSearch = a.playersSearch), typeof a.customLoginUrl == "string" && (e.ui.customLoginUrl = a.customLoginUrl), e.servers = t.servers, e.currentServer && !e.servers.has(e.currentServer.id) && (e.currentServer = void 0)
		},
		[c.SET_SERVER_CONFIGURATION](e, t) {
			e.configuration = Object.assign(e.configuration, t)
		},
		[c.SET_SERVER_CONFIGURATION_HASH](e, t) {
			e.configurationHash = t
		},
		[c.SET_SERVER_MESSAGES](e, t) {
			e.messages = Object.assign(e.messages, t)
		},
		[c.SET_WORLDS](e, t) {
			e.worlds.clear(), e.maps.clear(), e.followTarget = void 0, e.viewTarget = void 0, e.currentWorldState.timeOfDay = 0, e.currentWorldState.raining = !1, e.currentWorldState.thundering = !1, t.forEach(o => {
				e.worlds.set(o.name, o), o.maps.forEach(a => e.maps.set(`${a.world.name}_${a.name}`, a))
			}), e.currentWorld && e.worlds.has(e.currentWorld.name) ? e.currentWorld = e.worlds.get(e.currentWorld.name) : e.currentWorld = void 0, e.currentWorld && e.currentMap && e.maps.has(`${e.currentWorld.name}_${e.currentMap.name}`) ? e.currentMap = e.maps.get(`${e.currentWorld.name}_${e.currentMap.name}`) : e.currentMap = void 0
		},
		[c.SET_COMPONENTS](e, t) {
			e.components = Object.assign(e.components, t)
		},
		[c.SET_MARKER_SETS](e, t) {
			e.markerSets.clear(), e.pendingMarkerUpdates.splice(0), Y.markers.clear();
			for (const o of t) e.markerSets.set(o[0], o[1]), Y.markers.set(o[0], new Map)
		},
		[c.SET_MARKERS](e, t) {
			Y.markers.clear();
			for (const o of t) Y.markers.set(o[0], o[1])
		},
		[c.SET_WORLD_STATE](e, t) {
			e.currentWorldState = Object.assign(e.currentWorldState, t)
		},
		[c.ADD_MARKER_SET_UPDATES](e, t) {
			for (const o of t) {
				if (o.removed) {
					e.markerSets.delete(o.id), Y.markers.delete(o.id);
					continue
				}
				if (o.payload)
					if (e.markerSets.has(o.id)) {
						const a = e.markerSets.get(o.id);
						a.showLabels = o.payload.showLabels, a.minZoom = o.payload.minZoom, a.maxZoom = o.payload.maxZoom, a.priority = o.payload.priority, a.label = o.payload.label, a.hidden = o.payload.hidden
					} else e.markerSets.set(o.id, {
						id: o.id,
						showLabels: o.payload.showLabels,
						minZoom: o.payload.minZoom,
						maxZoom: o.payload.maxZoom,
						priority: o.payload.priority,
						label: o.payload.label,
						hidden: o.payload.hidden
					}), Y.markers.set(o.id, new Map)
			}
		},
		[c.ADD_MARKER_UPDATES](e, t) {
			let o;
			for (const a of t) !Y.markers.has(a.set) || (o = Y.markers.get(a.set), a.removed ? o.delete(a.id) : o.set(a.id, a.payload));
			e.pendingMarkerUpdates = e.pendingMarkerUpdates.concat(t)
		},
		[c.ADD_TILE_UPDATES](e, t) {
			e.pendingTileUpdates = e.pendingTileUpdates.concat(t)
		},
		[c.ADD_CHAT](e, t) {
			e.chat.messages.unshift(...t)
		},
		[c.POP_MARKER_UPDATES](e, t) {
			e.pendingMarkerUpdates.splice(0, t)
		},
		[c.POP_TILE_UPDATES](e, t) {
			e.pendingTileUpdates.splice(0, t)
		},
		[c.SET_MAX_PLAYERS](e, t) {
			e.maxPlayers = t
		},
		[c.SET_PLAYERS_ASYNC](e, t) {
			let o = 0;
			for (const a of t) {
				if (e.players.has(a.name)) {
					const r = e.players.get(a.name);
					r.health = a.health, r.uuid = a.uuid, r.armor = a.armor, r.location = Object.assign(r.location, a.location), r.yaw = a.yaw, r.hidden = a.hidden, r.displayName = a.displayName, r.sort = a.sort, (r.displayName !== a.displayName || r.sort !== a.sort) && (e.sortedPlayers.dirty = !0)
				} else e.sortedPlayers.dirty = !0, e.players.set(a.name, {
					name: a.name,
					uuid: a.uuid,
					health: a.health,
					armor: a.armor,
					location: a.location,
					yaw: a.yaw,
					displayName: a.displayName,
					sort: a.sort,
					hidden: a.hidden
				});
				if (t.delete(a), ++o >= 10) break
			}
			return !t.size && e.sortedPlayers.dirty && (e.sortedPlayers = [...e.players.values()].sort((a, r) => a.sort !== r.sort ? a.sort - r.sort : a.name.toLowerCase().localeCompare(r.name.toLowerCase()))), t
		},
		[c.SYNC_PLAYERS](e, t) {
			for (const [o, a] of e.players) t.has(a.name) || (e.sortedPlayers.splice(e.sortedPlayers.indexOf(a), 1), e.players.delete(o))
		},
		[c.SET_LOADED](e) {
			e.firstLoad = !1
		},
		[c.SET_CURRENT_SERVER](e, t) {
			if (!e.servers.has(t)) throw new RangeError(`Unknown server ${t}`);
			e.currentServer = e.servers.get(t), e.currentMapProvider && e.currentMapProvider.stopUpdates(), e.currentMapProvider = Wa(t)
		},
		[c.SET_CURRENT_MAP](e, {
			worldName: t,
			mapName: o
		}) {
			if (o = `${t}_${o}`, !e.worlds.has(t)) throw new RangeError(`Unknown world ${t}`);
			if (!e.maps.has(o)) throw new RangeError(`Unknown map ${o}`);
			const a = e.worlds.get(t);
			e.currentWorld !== a && (e.currentWorld = a, e.markerSets.clear(), e.pendingMarkerUpdates.splice(0), e.pendingTileUpdates.splice(0), e.followTarget && e.followTarget.location.world !== a.name && (e.followTarget = void 0)), e.currentMap = e.maps.get(o)
		},
		[c.SET_CURRENT_LOCATION](e, t) {
			e.currentLocation = t
		},
		[c.SET_CURRENT_ZOOM](e, t) {
			e.currentZoom = t
		},
		[c.SET_PARSED_URL](e, t) {
			e.parsedUrl = t
		},
		[c.CLEAR_PARSED_URL](e) {
			e.parsedUrl = void 0
		},
		[c.SET_FOLLOW_TARGET](e, t) {
			e.followTarget = t
		},
		[c.SET_VIEW_TARGET](e, t) {
			e.followTarget = void 0, e.viewTarget = t
		},
		[c.CLEAR_FOLLOW_TARGET](e) {
			e.followTarget = void 0
		},
		[c.CLEAR_VIEW_TARGET](e) {
			e.viewTarget = void 0
		},
		[c.SET_SCREEN_SIZE](e, t) {
			e.ui.screenWidth = t.width, e.ui.screenHeight = t.height;
			const o = e.ui.screenWidth < 480 || e.ui.screenHeight < 500;
			!e.ui.smallScreen && o && e.ui.visibleElements.size > 1 && e.ui.visibleElements.clear(), e.ui.smallScreen = o
		},
		[c.TOGGLE_UI_ELEMENT_VISIBILITY](e, t) {
			const o = !e.ui.visibleElements.has(t);
			o && e.ui.smallScreen && e.ui.visibleElements.clear(), e.ui.previouslyVisibleElements.add(t), o ? e.ui.visibleElements.add(t) : e.ui.visibleElements.delete(t)
		},
		[c.SET_UI_ELEMENT_VISIBILITY](e, t) {
			t.state && e.ui.smallScreen && e.ui.visibleElements.clear(), (t.state || e.ui.visibleElements.has(t.element)) && e.ui.previouslyVisibleElements.add(t.element), t.state ? e.ui.visibleElements.add(t.element) : e.ui.visibleElements.delete(t.element)
		},
		[c.SHOW_UI_MODAL](e, t) {
			e.ui.smallScreen && e.ui.visibleElements.clear(), e.ui.visibleModal = t
		},
		[c.HIDE_UI_MODAL](e, t) {
			e.ui.visibleModal === t && (e.ui.visibleModal = void 0)
		},
		[c.TOGGLE_SIDEBAR_SECTION_COLLAPSED_STATE](e, t) {
			e.ui.sidebar[t].collapsed = !e.ui.sidebar[t].collapsed
		},
		[c.SET_LOGGED_IN](e, t) {
			e.loggedIn = t
		},
		[c.SET_LOGIN_REQUIRED](e, t) {
			t && (e.loggedIn = !1), e.loginRequired = t
		},
		[c.RESET](e) {
			e.followTarget = void 0, e.viewTarget = void 0, e.players.clear(), e.sortedPlayers.splice(0, e.sortedPlayers.length), e.maxPlayers = 0, e.currentWorld = void 0, e.currentMap = void 0, e.markerSets.clear(), e.pendingMarkerUpdates.splice(0), e.pendingTileUpdates.splice(0), e.worlds.clear(), e.maps.clear(), e.currentZoom = 0, e.currentLocation = {
				x: 0,
				y: 0,
				z: 0
			}, e.currentWorldState.timeOfDay = 0, e.currentWorldState.raining = !1, e.currentWorldState.thundering = !1, e.configurationHash = void 0, e.configuration.title = "", e.components.markers.showLabels = !1, e.components.players = {
				markers: void 0,
				showImages: !0,
				grayHiddenPlayers: !0,
				imageUrl: tt
			}, e.components.coordinatesControl = void 0, e.components.clockControl = void 0, e.components.linkControl = !1, e.components.layerControl = !1, e.components.logoControls = [], e.components.chatSending = void 0, e.components.chatBox = void 0, e.components.chatBalloons = !1, e.components.login = !1, e.ui.visibleModal = void 0, e.chat.messages = [], e.loggedIn = !1, e.loginRequired = !1
		}
	},
	Ga = {
		async [R.LOAD_CONFIGURATION]({
			commit: e,
			state: t,
			dispatch: o
		}) {
			var i, n;
			if (await o(R.STOP_UPDATES, void 0), e(c.RESET, void 0), !t.currentServer) {
				console.warn("No current server");
				return
			}
			if (await t.currentMapProvider.loadServerConfiguration(), t.currentMap) return;
			!t.ui.visibleElements.size && t.configuration.expandUI && !t.ui.smallScreen && (e(c.SET_UI_ELEMENT_VISIBILITY, {
				element: "players",
				state: !0
			}), e(c.SET_UI_ELEMENT_VISIBILITY, {
				element: "maps",
				state: !0
			}), t.ui.disableMarkerUI || e(c.SET_UI_ELEMENT_VISIBILITY, {
				element: "markers",
				state: !0
			}));
			let a, r;
			if (t.configuration.defaultWorld && t.worlds.has(t.configuration.defaultWorld) && (a = t.configuration.defaultWorld), ((i = t.parsedUrl) == null ? void 0 : i.world) && t.worlds.has(t.parsedUrl.world) && (a = t.parsedUrl.world), a || (a = t.worlds.size ? t.worlds.entries().next().value[1].name : void 0), a && (t.configuration.defaultMap && t.maps.has(`${a}_${t.configuration.defaultMap}`) && (r = t.configuration.defaultMap), ((n = t.parsedUrl) == null ? void 0 : n.map) && t.maps.has(`${a}_${t.parsedUrl.map}`) && (r = t.parsedUrl.map), !r)) {
				const s = t.worlds.get(a);
				r = s.maps.size ? s.maps.values().next().value.name : void 0
			}
			a && r && e(c.SET_CURRENT_MAP, {
				worldName: a,
				mapName: r
			}), await te(() => e(c.SET_LOADED, void 0))
		},
		async [R.START_UPDATES]({
			state: e
		}) {
			if (!e.currentWorld) return Promise.reject("No current world");
			e.currentMapProvider.startUpdates(), La()
		},
		async [R.STOP_UPDATES]({
			state: e
		}) {
			e.currentMapProvider.stopUpdates(), Ea()
		},
		[R.SET_PLAYERS]({
			commit: e,
			state: t
		}, o) {
			const a = new Set;
			for (const i of o) a.add(i.name);
			e(c.SYNC_PLAYERS, a);
			const r = (i, n) => {
				e(c.SET_PLAYERS_ASYNC, i), i.size ? requestAnimationFrame(() => r(i, n)) : n()
			};
			return new Promise(i => {
				requestAnimationFrame(() => r(o, i))
			})
		},
		async [R.POP_MARKER_UPDATES]({
			commit: e,
			state: t
		}, o) {
			const a = t.pendingMarkerUpdates.slice(0, o);
			return e(c.POP_MARKER_UPDATES, o), a
		},
		async [R.POP_TILE_UPDATES]({
			commit: e,
			state: t
		}, o) {
			const a = t.pendingTileUpdates.slice(0, o);
			return e(c.POP_TILE_UPDATES, o), a
		},
		async [R.SEND_CHAT_MESSAGE]({
			commit: e,
			state: t
		}, o) {
			await t.currentMapProvider.sendChatMessage(o)
		},
		async [R.LOGIN]({
			state: e,
			commit: t
		}, o) {
			o ? await e.currentMapProvider.login(o) : e.ui.customLoginUrl ? window.location.href = e.ui.customLoginUrl : t(c.SHOW_UI_MODAL, "login")
		},
		async [R.LOGOUT]({
			state: e
		}) {
			await e.currentMapProvider.logout()
		},
		async [R.REGISTER]({
			state: e
		}, t) {
			await e.currentMapProvider.register(t)
		}
	},
	X = Oo({
		state: ca,
		mutations: Fa,
		getters: da,
		actions: Ga
	});

function _() {
	return X
}
const Ya = T({
		props: {
			options: {
				type: Object,
				required: !0
			},
			leaflet: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => e.options instanceof yt && e.options === t.state.currentMap);
			let a = t.state.currentMapProvider.createTileLayer(Object.freeze(JSON.parse(JSON.stringify(e.options))));
			const r = () => e.leaflet.addLayer(a),
				i = () => a.remove();
			M(o, n => n ? r() : i()), o.value && r(), F(() => i())
		},
		render() {
			return null
		}
	}),
	Rt = document.createElement("img");
Rt.src = dt;
Rt.className = "player__icon";
class Ka extends u.exports.Layer {
	constructor(t, o) {
		super(o), this._currentYaw = 0, u.exports.Util.setOptions(this, o), this._player = t
	}
	createIcon() {
		return this._container ? (this.update(), this._container) : (this._currentName = void 0, this._container = document.createElement("div"), 
		this._container.classList.add("marker", "marker--player", "leaflet-marker-icon"),
		this._playerInfo = document.createElement("div"), 
		this._playerInfo.className = "marker__label", 


		this._playerName = document.createElement("button"), 
		this._playerName.className = "player__name",

		this._playerName.addEventListener("click", () => {
			var coordinatesButton = document.querySelector('.player__name');
			var coordinatesText = coordinatesButton.textContent;
			var tempTextarea = document.createElement('textarea');
    		tempTextarea.value = coordinatesText;
    		document.body.appendChild(tempTextarea);
			tempTextarea.select();
			document.execCommand('copy');
			document.body.removeChild(tempTextarea);
			ne('Никнейм скопирован')
		}),

		this.options.compact && this._container.classList.add("marker--compact"), 
		this.options.imageSize != "none" && (this._playerImage = Rt.cloneNode(), 
		this._playerImage.height = this._playerImage.width = so(this.options.imageSize),
		this.updateImage(), this._playerInfo.appendChild(this._playerImage)), 
		this._playerInfo.appendChild(this._playerName),
		this.options.showHealth && (this._playerHealth = document.createElement("meter"), 
		this._playerHealth.className = "player__health", this._playerHealth.hidden = !0, 
		this._playerHealth.max = 20, this._playerInfo.appendChild(this._playerHealth)), 
		this.options.showArmor && (this._playerArmor = document.createElement("meter"),
		this._playerArmor.className = "player__armor", this._playerArmor.hidden = !0, 
		this._playerArmor.max = 20, this._playerInfo.appendChild(this._playerArmor)), 
		this.options.showYaw && (this._container.classList.add("player--yaw"), 
		this._playerYaw = document.createElement("div"), 
		this._playerYaw.className = "player__yaw", 
		this._container.appendChild(this._playerYaw)), 
		this._container.appendChild(this._playerInfo), 
		this.update(), 
		this._container)
	}
	updateImage() {
		lo(this._player, this.options.imageSize).then(t => {
			this._playerImage.src = t.src
		}).catch(() => {})
	}
	update() {
		if (!!this._container && (this._player.displayName !== this._currentName && (this._playerName.innerHTML = this._currentName = this._player.displayName), this.options.showHealth && (this._player.health !== void 0 ? (this._playerHealth.hidden = !1, this._playerHealth.value = this._player.health) : this._playerHealth.hidden = !0), this.options.showArmor && (this._player.armor !== void 0 ? (this._playerArmor.hidden = !1, this._playerArmor.value = this._player.armor) : this._playerArmor.hidden = !0), this.options.showYaw && this._player.yaw !== void 0)) {
			const t = ((this._player.yaw - this._currentYaw) % 360 + 540) % 360 - 180;
			this._currentYaw = this._currentYaw + t, this._playerYaw.style.setProperty("--player-yaw", `${this._currentYaw}deg`)
		}
	}
	detach() {
		this._container && this._container.parentNode && (this._container = this._container.parentNode.removeChild(this._container))
	}
}
class qa extends u.exports.Marker {
	constructor(t, o) {
		super(new u.exports.LatLng(0, 0), o), this._player = t, this._PlayerIcon = o.icon = new Ka(t, {
			imageSize: o.imageSize,
			showHealth: o.showHealth,
			showArmor: o.showArmor,
			showYaw: o.showYaw,
			compact: o.compact
		}), u.exports.Util.setOptions(this, o)
	}
	onAdd(t) {
		const o = d(() => _().state.components.players.imageUrl);
		return this._playerUnwatch = M(this._player, () => this._PlayerIcon.update(), {
			deep: !0
		}), this._imageUrlUnwatch = M(o, () => te(() => this._PlayerIcon.updateImage())), super.onAdd(t)
	}
	onRemove(t) {
		return this._playerUnwatch && this._playerUnwatch(), this._imageUrlUnwatch && this._imageUrlUnwatch(), this._icon && this._PlayerIcon.detach(), super.onRemove(t)
	}
	_resetZIndex() {}
}
const Qa = T({
	props: {
		player: {
			type: Object,
			required: !0
		},
		layerGroup: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = 0;
		const o = _(),
			a = d(() => o.state.components.players.markers),
			r = d(() => o.state.currentMap),
			i = d(() => o.state.currentWorld),
			n = d(() => o.state.components.chatBalloons),
			s = E(!1),
			l = new qa(e.player, {
				compact: o.state.ui.compactPlayerMarkers,
				imageSize: a.value.imageSize,
				showHealth: a.value.showHealth,
				showArmor: a.value.showArmor,
				showYaw: a.value.showYaw,
				pane: "players"
			}),
			p = new u.exports.Popup({
				autoClose: !1,
				autoPan: !1,
				keepInView: !1,
				closeButton: !1,
				closeOnEscapeKey: !1,
				closeOnClick: !1,
				className: "leaflet-popup--chat",
				minWidth: 0
			}),
			h = E(!1),
			g = E(null),
			y = d(() => {
				const S = [];
				if (!n.value) return S;
				for (const $ of o.state.chat.messages) {
					if ($.timestamp <= t || S.length === 5) break;
					$.type === "chat" && $.playerAccount === e.player.name && S.push($)
				}
				return !S.length && o.state.chat.messages.length && (t = o.state.chat.messages[0].timestamp), S
			}),
			L = () => {
				const S = y.value.reduceRight(($, k) => $ + `<span>${k.message}</span>`, "");
				(S != p.getContent() || !h.value) && (p.setContent(S), h.value || (e.layerGroup.addLayer(p), h.value = !0, t = y.value[y.value.length - 1].timestamp - 1), g.value && clearTimeout(g.value), g.value = setTimeout(() => I(), 8e3))
			},
			I = () => {
				e.layerGroup.removeLayer(p), h.value = !1, y.value[0] && (t = y.value[0].timestamp)
			},
			U = () => {
				if (r.value && !s.value) {
					const S = r.value.locationToLatLng(e.player.location);
					e.layerGroup.addLayer(l), l.setLatLng(S), p.setLatLng(S), s.value = !0, t = new Date().getTime()
				}
			},
			z = () => {
				s.value && (e.layerGroup.removeLayer(l), e.layerGroup.removeLayer(p), s.value = !1, I(), g.value && clearTimeout(g.value))
			};
		return V(() => {
			r.value && i.value.name === e.player.location.world && U()
		}), F(() => z()), {
			componentSettings: a,
			currentMap: r,
			currentWorld: i,
			chatBalloonsEnabled: n,
			marker: l,
			markerVisible: s,
			chatBalloon: p,
			playerChat: y,
			updateChatBalloon: L,
			enableLayer: U,
			disableLayer: z
		}
	},
	watch: {
		player: {
			deep: !0,
			handler(e) {
				if (this.currentMap && e.location.world === this.currentWorld.name)
					if (!this.markerVisible) this.enableLayer();
					else {
						const t = this.currentMap.locationToLatLng(e.location);
						this.marker.setLatLng(t), this.chatBalloon.setLatLng(t)
					}
				else this.markerVisible && this.disableLayer()
			}
		},
		playerChat(e) {
			!this.chatBalloonsEnabled || !this.markerVisible || !e.length || this.updateChatBalloon()
		},
		currentWorld(e) {
			e && e.name === this.player.location.world ? this.enableLayer() : this.markerVisible && this.disableLayer()
		},
		currentMap(e) {
			if (e) {
				const t = e.locationToLatLng(this.player.location);
				this.marker.setLatLng(t), this.chatBalloon.setLatLng(t)
			}
		}
	},
	render() {
		return null
	}
});
var P = (e, t) => {
	const o = e.__vccOpts || e;
	for (const [a, r] of t) o[a] = r;
	return o
};
const Ja = T({
	components: {
		PlayerMarker: Qa
	},
	props: {
		leaflet: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		const t = _(),
			o = e.leaflet.getPane("players") || e.leaflet.createPane("players"),
			a = d(() => t.state.players),
			r = d(() => t.state.players.size),
			i = d(() => t.state.ui.playersAboveMarkers),
			n = d(() => t.state.components.players.markers),
			s = new u.exports.LayerGroup([], {
				pane: "players"
			});
		return M(r, l => o.classList.toggle("no-animations", l > 150)), V(() => {
			n.value.hideByDefault ? e.leaflet.getLayerManager().addHiddenLayer(s, t.state.components.players.markers.layerName, n.value.layerPriority) : e.leaflet.getLayerManager().addLayer(s, !0, t.state.components.players.markers.layerName, n.value.layerPriority)
		}), F(() => e.leaflet.getLayerManager().removeLayer(s)), i.value && (o.style.zIndex = "600"), {
			players: a,
			componentSettings: n,
			layerGroup: s
		}
	},
	render() {
		return null
	}
});

function Xa(e, t, o, a, r, i) {
	const n = w("PlayerMarker");
	return m(!0), b(O, null, Q(e.players, ([s, l]) => (m(), A(n, {
		key: s,
		player: l,
		layerGroup: e.layerGroup
	}, null, 8, ["player", "layerGroup"]))), 128)
}
var er = P(Ja, [
	["render", Xa]
]);
class Ge extends u.exports.LayerGroup {
	constructor(t) {
		super([], t), this._zoomEndCallback = () => this._updateLayerVisibility(), u.exports.Util.setOptions(this, t), this._zoomLimitedLayers = new Set
	}
	onAdd(t) {
		return t.on("zoomend", this._zoomEndCallback, this), this._map = t, this._markerPane = t.getPane(`${this.options.id}-markers`) || t.createPane(`${this.options.id}-markers`), this._markerPane.classList.toggle("leaflet-pane--show-labels", this.options.showLabels), this._markerPane.style.zIndex = (401 + this.options.priority).toString(), this._updateLayerVisibility(!0), this
	}
	onRemove(t) {
		return super.onRemove(t), t.off("zoomend", this._zoomEndCallback, this), this
	}
	clearLayers() {
		return this._zoomLimitedLayers.clear(), super.clearLayers()
	}
	addLayer(t) {
		const o = this.getLayerId(t);
		this._layers[o] = t, t instanceof u.exports.Marker ? t.options.pane = `${this.options.id}-markers` : t instanceof u.exports.Path && (t.options.pane = "vectors");
		const a = Ge._isLayerZoomLimited(t);
		return a && this._zoomLimitedLayers.add(t), this._map && (a ? Ge._isLayerVisible(t, this._map.getZoom()) && this._addToMap(t) : this._addToMap(t)), this
	}
	removeLayer(t) {
		return this._zoomLimitedLayers.delete(t), super.removeLayer(t)
	}
	update(t) {
		this.options.showLabels !== t.showLabels && (this.eachLayer(o => {
			o instanceof mt && (t.showLabels ? o.createLabel() : o.removeLabel())
		}), this.options.showLabels = t.showLabels), this._markerPane && this._markerPane.classList.toggle("leaflet-pane--show-labels", t.showLabels), (t.minZoom !== this.options.minZoom || t.maxZoom !== this.options.maxZoom) && (this.options.minZoom = t.minZoom, this.options.maxZoom = t.maxZoom, this._updateLayerVisibility()), t.priority !== this.options.priority && (this.options.priority = t.priority, this._markerPane && (this._markerPane.style.zIndex = (401 + this.options.priority).toString()))
	}
	_updateLayerVisibility(t) {
		if (!this._map) return;
		const o = this._map.getZoom();
		if (this._isZoomLimited()) {
			const a = o >= (this.options.minZoom || -1 / 0) && o <= (this.options.maxZoom || 1 / 0);
			this.eachLayer(r => {
				this._zoomLimitedLayers.has(r) ? Ge._isLayerVisible(r, o) ? this._addToMap(r) : this._removeFromMap(r) : a ? this._addToMap(r) : this._removeFromMap(r)
			}, this)
		} else this._zoomLimitedLayers.size ? this._zoomLimitedLayers.forEach(a => {
			Ge._isLayerVisible(a, o) ? this._addToMap(a) : this._removeFromMap(a)
		}) : t && this.eachLayer(a => this._addToMap(a), this._map)
	}
	_isZoomLimited() {
		return this.options.maxZoom !== void 0 || this.options.minZoom !== void 0
	}
	static _isLayerZoomLimited(t) {
		return t.options && t.options.minZoom !== void 0 && t.options && t.options.maxZoom !== void 0
	}
	static _isLayerVisible(t, o) {
		let a = -1 / 0,
			r = 1 / 0;
		return t.options && t.options.minZoom !== void 0 && (a = t.options.minZoom), t.options && t.options.maxZoom !== void 0 && (r = t.options.maxZoom), o >= a && o <= r
	}
	_addToMap(t) {
		this._map.addLayer(t), t instanceof mt && this.options.showLabels && t.createLabel()
	}
	_removeFromMap(t) {
		this._map.removeLayer(t)
	}
}
const tr = T({
		props: {
			set: {
				type: Object,
				required: !0
			},
			layerGroup: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => t.state.currentMap),
				a = Object.freeze(new Map);
			let r = o.value.locationToLatLng.bind(o.value);
			const i = () => {
					Y.markers.get(e.set.id).forEach((l, p) => {
						const h = Ca(l, r);
						a.set(p, h), e.layerGroup.addLayer(h)
					})
				},
				n = l => {
					let p = a.get(l);
					!p || (e.layerGroup.removeLayer(p), a.delete(l))
				},
				s = l => {
					if (l.removed) n(l.id);
					else {
						const p = Yt(a.get(l.id), l.payload, r);
						a.has(l.id) || e.layerGroup.addLayer(p), a.set(l.id, p)
					}
				};
			M(o, (l, p) => {
				if (l && (!p || p.world === l.world) && Y.markers.has(e.set.id)) {
					r = l.locationToLatLng.bind(l);
					for (const [h, g] of Y.markers.get(e.set.id)) Yt(a.get(h), g, r)
				}
			}), V(() => {
				i(), _o(s, e.set.id)
			}), F(() => {
				ko(s, e.set.id)
			})
		},
		render() {
			return null
		}
	}),
	or = T({
		components: {
			Markers: tr
		},
		props: {
			leaflet: {
				type: Object,
				required: !0
			},
			markerSet: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => t.state.components.markers),
				a = new Ge({
					id: e.markerSet.id,
					minZoom: e.markerSet.minZoom,
					maxZoom: e.markerSet.maxZoom,
					showLabels: e.markerSet.showLabels || t.state.components.markers.showLabels,
					priority: e.markerSet.priority
				});
			return M(e.markerSet, r => {
				r && a && (a.update({
					id: e.markerSet.id,
					minZoom: e.markerSet.minZoom,
					maxZoom: e.markerSet.maxZoom,
					showLabels: e.markerSet.showLabels || t.state.components.markers.showLabels,
					priority: e.markerSet.priority
				}), r.hidden ? e.leaflet.getLayerManager().addHiddenLayer(a, r.label, e.markerSet.priority) : e.leaflet.getLayerManager().addLayer(a, !0, r.label, e.markerSet.priority))
			}, {
				deep: !0
			}), V(() => {
				e.markerSet.hidden ? e.leaflet.getLayerManager().addHiddenLayer(a, e.markerSet.label, e.markerSet.priority) : e.leaflet.getLayerManager().addLayer(a, !0, e.markerSet.label, e.markerSet.priority)
			}), F(() => e.leaflet.getLayerManager().removeLayer(a)), {
				markerSettings: o,
				layerGroup: a
			}
		},
		render() {
			return null
		}
	});

function ar(e, t, o, a, r, i) {
	const n = w("Markers");
	return m(), A(n, {
		"layer-group": e.layerGroup,
		set: e.markerSet
	}, null, 8, ["layer-group", "set"])
}
var rr = P(or, [
	["render", ar]
]);



const ue = _();
class Kt extends u.exports.Control {
	constructor(t) {
		super(t), this._locationChanged = !1, this._coordsContainer = u.exports.DomUtil.create("button", "value coordinates"), 
		this._chunkContainer = u.exports.DomUtil.create("button", "value chunk"), 
		this._regionContainer = u.exports.DomUtil.create("button", "value region"), 
		t.position = "bottomleft", u.exports.Util.setOptions(this, t)

	}
	onAdd(t) {
		const o = u.exports.DomUtil.create("div", "leaflet-control-coordinates");
		return this._coordsContainer.textContent = this.options.showY ? "-----, ---, -----" : "-----, -----", 
		this._coordsContainer.dataset.label = this.options.label, 
		o.appendChild(this._coordsContainer), 
		this.options.showRegion && (this._regionContainer.textContent = "--------------", 
		this._regionContainer.dataset.label = ue.state.messages.locationRegion, 
		o.appendChild(this._regionContainer)), 
		this.options.showChunk && (this._chunkContainer.textContent = "----, ----", 
		this._chunkContainer.dataset.label = ue.state.messages.locationChunk, 
		o.appendChild(this._chunkContainer)), 
		t.on("mousemove", this._onMouseMove, this), 
		t.on("mouseout", this._onMouseOut, this), 
		o.addEventListener("click", i => {
			var coordinatesButton = document.querySelector('.value.coordinates');
			var coordinatesText = coordinatesButton.textContent;
			var tempTextarea = document.createElement('textarea');
    		tempTextarea.value = coordinatesText;
    		document.body.appendChild(tempTextarea);
			tempTextarea.select();
			document.execCommand('copy');
			document.body.removeChild(tempTextarea);
			ne('Координаты скопированы')
		}), o
	}

	remove() {
		return this._map ? (this._map.off("mousemove", 
		this._onMouseMove, this), 
		this._map.off("mouseout", 
		this._onMouseOut, this),
		 super.remove(), this) : this
	}
	_onMouseMove(t) {
		!this._map || !ue.state.currentMap || (this._location = ue.state.currentMap.latLngToLocation(t.latlng, ue.state.currentWorld.seaLevel + 1), this._locationChanged || (this._locationChanged = !0, requestAnimationFrame(() => this._update())))
	}
	_onMouseOut() {
		// Оставляем координаты без изменений и не меняем флаг _locationChanged
		if (!this._map) return;

		requestAnimationFrame(() => this._update());
	}
	_update() {
		if (!this._map || !ue.state.currentWorld || !this._locationChanged) return;
		if (this._locationChanged = !1, !this._location) {
			this.options.showY ? this._coordsContainer.textContent = "-----, ---, -----" : this._coordsContainer.textContent = "-----, -----", this.options.showRegion && (this._regionContainer.textContent = "--------------"), this.options.showChunk && (this._chunkContainer.textContent = "----, ----");
			return
		}
		const t = Math.round(this._location.x).toString().padStart(5, " "),
			o = this._location.y.toString().padStart(3, " "),
			a = Math.round(this._location.z).toString().padStart(5, " "),
			r = Math.floor(this._location.x / 512).toString().padStart(3, " "),
			i = Math.floor(this._location.z / 512).toString().padStart(3, " "),
			n = Math.floor(this._location.x / 16).toString().padStart(4, " "),
			s = Math.floor(this._location.z / 16).toString().padStart(4, " ");
		this.options.showY ? this._coordsContainer.textContent = `${t}, ${o}, ${a}` : this._coordsContainer.textContent = `${t}, ${a}`, this.options.showRegion && (this._regionContainer.textContent = `r.${r}, ${i}.mca`), this.options.showChunk && (this._chunkContainer.textContent = `${n}, ${s}`)
	}
}
const nr = T({
	props: {
		leaflet: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		const t = _(),
			o = d(() => t.state.components.coordinatesControl);
		let a = new Kt(o.value);
		M(o, r => {
			e.leaflet.removeControl(a), r && (a = new Kt(r), e.leaflet.addControl(a))
		}, {
			deep: !0
		}), V(() => e.leaflet.addControl(a)), F(() => e.leaflet.removeControl(a))
	},
	render() {
		return null
	}
});
let ir = document.getElementById("icon--clock_moon"),
	he = document.getElementById("svg-sprite-component-wrap");
he || (he = document.createElementNS("http://www.w3.org/2000/svg", "svg"), he.id = "svg-sprite-component-wrap", he.style.setProperty("display", "none"), document.body.appendChild(he));
if (!ir) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	he.appendChild(e), e.setAttribute("id", "icon--clock_moon"), e.setAttribute("viewBox", "0 0 200 160"), e.innerHTML = '<path d="M85.562 65.682v9.225h6.469v6.75h-6.469V94.79h12.031V89h3.469v-3.625h5.406v9.415h8.203V65.683H98.874v4.974H92.25v-4.974h-6.687zm25.545 5.367v7.215h-7.521v-7.213l7.521-.002zM79.347 55.26a1.068 1.068 0 0 0-1.068 1.066v6.74a1.068 1.068 0 0 0 1.068 1.069 1.068 1.068 0 0 0 1.066-1.069v-6.74a1.068 1.068 0 0 0-1.066-1.066z"></path><path d="M75.973 58.629a1.068 1.068 0 0 0-1.066 1.068 1.068 1.068 0 0 0 1.066 1.067h6.74a1.068 1.068 0 0 0 1.069-1.067 1.068 1.068 0 0 0-1.069-1.068h-6.74zM115.424 98.608a1.068 1.068 0 0 0-1.068 1.068 1.068 1.068 0 0 0 1.069 1.069h6.74a1.068 1.068 0 0 0 1.068-1.069 1.068 1.068 0 0 0-1.068-1.068h-6.74z"></path><path d="M118.784 95.239a1.068 1.068 0 0 0-1.066 1.068v6.739a1.068 1.068 0 0 0 1.066 1.068 1.068 1.068 0 0 0 1.069-1.068v-6.739a1.068 1.068 0 0 0-1.069-1.068z"></path>'
}
let sr = document.getElementById("icon--clock_moon_rain"),
	ge = document.getElementById("svg-sprite-component-wrap");
ge || (ge = document.createElementNS("http://www.w3.org/2000/svg", "svg"), ge.id = "svg-sprite-component-wrap", ge.style.setProperty("display", "none"), document.body.appendChild(ge));
if (!sr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	ge.appendChild(e), e.setAttribute("id", "icon--clock_moon_rain"), e.setAttribute("viewBox", "0 0 200 160"), e.innerHTML = '<path d="M89.938 59.713v9.225h6.469v3.078c.242.244.462.516.664.808.91 1.027.916 1.781.916 1.781 4.571-2.083 9.359-1.688 10.61 4.801h2.247v5.62c1.729.898 2.598 2.319 2.875 3.794h5.328V59.713H103.25v4.975h-6.625v-4.975zm25.545 5.367v7.215h-7.521v-7.213zm-36.14-9.851a1.068 1.068 0 0 0-1.068 1.066v6.74a1.068 1.068 0 0 0 1.068 1.069 1.068 1.068 0 0 0 1.066-1.068v-6.74a1.068 1.068 0 0 0-1.066-1.067z"></path><path d="M75.972 58.598a1.068 1.068 0 0 0-1.066 1.068 1.068 1.068 0 0 0 1.066 1.067h6.74a1.068 1.068 0 0 0 1.069-1.067 1.068 1.068 0 0 0-1.069-1.068zm39.448 38.417a1.068 1.068 0 0 0-1.068 1.068 1.068 1.068 0 0 0 1.068 1.069h6.74a1.068 1.068 0 0 0 1.069-1.069 1.068 1.068 0 0 0-1.069-1.068z"></path><path d="M118.79 93.646a1.068 1.068 0 0 0-1.066 1.068v6.739a1.068 1.068 0 0 0 1.066 1.068 1.068 1.068 0 0 0 1.068-1.068v-6.739a1.068 1.068 0 0 0-1.068-1.068zm-27.686-22.58a9.532 9.532 0 0 0-3.443.615c-2.191.834-3.889 2.415-4.305 4.422-.416 2.008.344 4.71 3.793 8.031a1.071 1.071 0 0 1 .03 1.514 1.071 1.071 0 0 1-1.514.03c-1.215-1.17-2.147-2.321-2.856-3.446-4.735-1.035-7.512.638-8.758 3.023-1.22 2.338-.859 5.482 1.291 7.8h36.11c.846-.747 1.59-2.604 1.173-4.29-.418-1.692-1.724-3.247-5.195-3.562-.955 1.204-2.293 2.169-4.041 2.67a1.071 1.071 0 0 1-1.324-.735 1.071 1.071 0 0 1 .734-1.324c1.408-.403 2.444-1.178 3.146-2.139a1.071 1.071 0 0 1 .246-.365l.004-.006c.926-1.506 1.108-3.38.657-5.004-.396-1.422-1.26-2.577-2.537-3.154-1.21-.547-2.883-.616-5.123.33.126.756.184 1.562.127 2.438a1.071 1.071 0 0 1-1.14.998 1.071 1.071 0 0 1-.997-1.14c.218-3.333-1.042-5.06-2.89-5.995-.925-.468-2.035-.7-3.188-.711zM80.875 96.59a1.071 1.071 0 0 0-.902.496l-2.455 3.856a1.071 1.071 0 0 0 .328 1.478 1.071 1.071 0 0 0 1.478-.328l2.455-3.856a1.071 1.071 0 0 0-.326-1.478 1.071 1.071 0 0 0-.578-.168zm13.258 0a1.071 1.071 0 0 0-.9.496l-2.457 3.856a1.071 1.071 0 0 0 .328 1.478 1.071 1.071 0 0 0 1.478-.328l2.457-3.856a1.071 1.071 0 0 0-.328-1.478 1.071 1.071 0 0 0-.578-.168zm13.257 0a1.071 1.071 0 0 0-.9.496l-2.455 3.856a1.071 1.071 0 0 0 .328 1.478 1.071 1.071 0 0 0 1.478-.328l2.455-3.856a1.071 1.071 0 0 0-.328-1.478 1.071 1.071 0 0 0-.578-.168zm-21.212 7.95a1.071 1.071 0 0 0-.9.494l-2.457 3.856a1.071 1.071 0 0 0 .328 1.48 1.071 1.071 0 0 0 1.478-.328l2.457-3.855a1.071 1.071 0 0 0-.328-1.479 1.071 1.071 0 0 0-.578-.168zm13.26 0a1.071 1.071 0 0 0-.902.494l-2.455 3.856a1.071 1.071 0 0 0 .328 1.48 1.071 1.071 0 0 0 1.478-.328l2.455-3.855a1.071 1.071 0 0 0-.328-1.479 1.071 1.071 0 0 0-.576-.168z"></path>'
}
let lr = document.getElementById("icon--clock_moon_storm"),
	fe = document.getElementById("svg-sprite-component-wrap");
fe || (fe = document.createElementNS("http://www.w3.org/2000/svg", "svg"), fe.id = "svg-sprite-component-wrap", fe.style.setProperty("display", "none"), document.body.appendChild(fe));
if (!lr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	fe.appendChild(e), e.setAttribute("id", "icon--clock_moon_storm"), e.setAttribute("viewBox", "0 0 200 160"), e.innerHTML = '<path d="M89.938 59.713v9.225h6.469v3.078c.242.244.462.516.664.808.91 1.027.916 1.781.916 1.781 4.571-2.083 9.359-1.688 10.61 4.801h2.247v5.62c1.729.898 2.598 2.319 2.875 3.794h5.328V59.713H103.25v4.975h-6.625v-4.975zm25.545 5.367v7.215h-7.521v-7.213z"></path><path d="M91.104 71.066a9.532 9.532 0 0 0-3.443.615c-2.191.834-3.889 2.415-4.305 4.422-.416 2.008.344 4.71 3.793 8.031a1.071 1.071 0 0 1 .03 1.514 1.071 1.071 0 0 1-1.514.03c-1.215-1.17-2.147-2.321-2.856-3.446-4.735-1.035-7.512.638-8.758 3.023-1.22 2.338-.859 5.482 1.291 7.8h36.11c.846-.747 1.59-2.604 1.173-4.29-.418-1.692-1.724-3.247-5.195-3.562-.955 1.204-2.293 2.169-4.041 2.67a1.071 1.071 0 0 1-1.324-.735 1.071 1.071 0 0 1 .734-1.324c1.408-.403 2.444-1.178 3.146-2.139a1.071 1.071 0 0 1 .246-.365l.004-.006c.926-1.506 1.108-3.38.657-5.004-.396-1.422-1.26-2.577-2.537-3.154-1.21-.547-2.883-.616-5.123.33.126.756.184 1.562.127 2.438a1.071 1.071 0 0 1-1.14.998 1.071 1.071 0 0 1-.997-1.14c.218-3.333-1.042-5.06-2.89-5.995-.925-.468-2.035-.7-3.188-.711zm-4.758 24.989a1.071 1.071 0 0 0-.879.535l-2.506 4.34a1.071 1.071 0 0 0 .733 1.588l1.892.351-3.385 5.862a1.071 1.071 0 0 0 .393 1.463 1.071 1.071 0 0 0 1.463-.393l4.14-7.172a1.071 1.071 0 0 0-.732-1.588l-1.89-.351 1.747-3.03a1.071 1.071 0 0 0-.392-1.463 1.071 1.071 0 0 0-.584-.142zm15.464 0a1.071 1.071 0 0 0-.879.535l-2.506 4.34a1.071 1.071 0 0 0 .733 1.588l1.892.351-3.385 5.862a1.071 1.071 0 0 0 .393 1.463 1.071 1.071 0 0 0 1.463-.393l4.14-7.172a1.071 1.071 0 0 0-.732-1.588l-1.89-.351 1.747-3.03a1.071 1.071 0 0 0-.392-1.463 1.071 1.071 0 0 0-.584-.142z"></path>'
}
let dr = document.getElementById("icon--clock_sun"),
	ye = document.getElementById("svg-sprite-component-wrap");
ye || (ye = document.createElementNS("http://www.w3.org/2000/svg", "svg"), ye.id = "svg-sprite-component-wrap", ye.style.setProperty("display", "none"), document.body.appendChild(ye));
if (!dr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	ye.appendChild(e), e.setAttribute("id", "icon--clock_sun"), e.setAttribute("viewBox", "0 0 200 160"), e.innerHTML = '<path d="M118.96 79.605a1.068 1.068 0 0 0-1.068 1.068 1.068 1.068 0 0 0 1.068 1.069h6.74a1.068 1.068 0 0 0 1.069-1.069 1.068 1.068 0 0 0-1.069-1.068h-6.74zm6.63-11.654a1.068 1.068 0 0 0-.283.035l-6.512 1.744a1.068 1.068 0 0 0-.754 1.309 1.068 1.068 0 0 0 1.307.756l6.511-1.746a1.068 1.068 0 0 0 .754-1.307 1.068 1.068 0 0 0-1.023-.791zm-6.5 21.565a1.068 1.068 0 0 0-1.05.791 1.068 1.068 0 0 0 .753 1.309l6.512 1.744a1.068 1.068 0 0 0 1.306-.756 1.068 1.068 0 0 0-.753-1.307l-6.512-1.744a1.068 1.068 0 0 0-.256-.037zm4.84-33.807a1.068 1.068 0 0 0-.725.31l-4.765 4.766a1.068 1.068 0 0 0 0 1.512 1.068 1.068 0 0 0 1.51 0l4.765-4.766a1.068 1.068 0 0 0 0-1.511 1.068 1.068 0 0 0-.785-.311zM99.68 98.006a1.068 1.068 0 0 0-1.068 1.068v6.739a1.068 1.068 0 0 0 1.068 1.068 1.068 1.068 0 0 0 1.068-1.068v-6.739a1.068 1.068 0 0 0-1.068-1.068zm9.92.115a1.068 1.068 0 0 0-.283.035 1.068 1.068 0 0 0-.754 1.309l1.744 6.51a1.068 1.068 0 0 0 1.307.753 1.068 1.068 0 0 0 .755-1.306l-1.744-6.51a1.068 1.068 0 0 0-1.025-.791zm-19.811-.004a1.068 1.068 0 0 0-1.05.791l-1.745 6.51a1.068 1.068 0 0 0 .756 1.306 1.068 1.068 0 0 0 1.307-.753l1.746-6.51a1.068 1.068 0 0 0-.756-1.309 1.068 1.068 0 0 0-.258-.035zm28.991.129a1.068 1.068 0 0 0-.725.313 1.068 1.068 0 0 0 0 1.51l4.766 4.765a1.068 1.068 0 0 0 1.51 0 1.068 1.068 0 0 0 0-1.51l-4.766-4.765a1.068 1.068 0 0 0-.785-.313zM74.541 78.73a1.068 1.068 0 0 0-1.068 1.066 1.068 1.068 0 0 0 1.068 1.069h6.74a1.068 1.068 0 0 0 1.067-1.069 1.068 1.068 0 0 0-1.067-1.066h-6.74zm6.633 9.911a1.068 1.068 0 0 0-.285.037l-6.51 1.744a1.068 1.068 0 0 0-.754 1.309 1.068 1.068 0 0 0 1.307.754l6.51-1.744a1.068 1.068 0 0 0 .755-1.307 1.068 1.068 0 0 0-1.023-.793zm-6.496-21.565a1.068 1.068 0 0 0-1.049.791 1.068 1.068 0 0 0 .754 1.309l6.51 1.744a1.068 1.068 0 0 0 1.309-.756 1.068 1.068 0 0 0-.756-1.307l-6.51-1.744a1.068 1.068 0 0 0-.258-.037zm6.334 30.787a1.068 1.068 0 0 0-.727.313l-4.765 4.765a1.068 1.068 0 0 0 0 1.51 1.068 1.068 0 0 0 1.512 0l4.765-4.766a1.068 1.068 0 0 0 0-1.51 1.068 1.068 0 0 0-.785-.312zm19.548-44.371a1.068 1.068 0 0 0-1.068 1.066v6.74a1.068 1.068 0 0 0 1.068 1.069 1.068 1.068 0 0 0 1.066-1.068v-6.74a1.068 1.068 0 0 0-1.066-1.067zm-11.652.115a1.068 1.068 0 0 0-.285.035 1.068 1.068 0 0 0-.754 1.309l1.744 6.51a1.068 1.068 0 0 0 1.309.753 1.068 1.068 0 0 0 .754-1.306l-1.745-6.51a1.068 1.068 0 0 0-1.023-.791zm23.322.004a1.068 1.068 0 0 0-1.05.791l-1.745 6.51a1.068 1.068 0 0 0 .756 1.306 1.068 1.068 0 0 0 1.307-.753l1.744-6.51a1.068 1.068 0 0 0-.754-1.309 1.068 1.068 0 0 0-.258-.035zm-35.603 1.616a1.067 1.067 0 0 0-.725.313 1.067 1.067 0 0 0 0 1.51l4.766 4.765a1.067 1.067 0 0 0 1.51 0 1.067 1.067 0 0 0 0-1.51l-4.766-4.766a1.067 1.067 0 0 0-.785-.312zm8.936 10.454h29.108V94.79H85.563z"></path>'
}
let cr = document.getElementById("icon--clock_sun_rain"),
	be = document.getElementById("svg-sprite-component-wrap");
be || (be = document.createElementNS("http://www.w3.org/2000/svg", "svg"), be.id = "svg-sprite-component-wrap", be.style.setProperty("display", "none"), document.body.appendChild(be));
if (!cr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	be.appendChild(e), e.setAttribute("id", "icon--clock_sun_rain"), e.setAttribute("viewBox", "0 0 200 160"), e.innerHTML = '<path d="M123.33 73.355a1.068 1.068 0 0 0-1.068 1.068 1.068 1.068 0 0 0 1.068 1.069h6.74a1.068 1.068 0 0 0 1.069-1.069 1.068 1.068 0 0 0-1.069-1.068zm6.63-11.654a1.068 1.068 0 0 0-.283.035l-6.512 1.744a1.068 1.068 0 0 0-.754 1.309 1.068 1.068 0 0 0 1.307.756l6.511-1.746a1.068 1.068 0 0 0 .754-1.307 1.068 1.068 0 0 0-1.023-.791zm-6.5 21.565a1.068 1.068 0 0 0-1.05.791 1.068 1.068 0 0 0 .753 1.309l6.512 1.744a1.068 1.068 0 0 0 1.306-.756 1.068 1.068 0 0 0-.753-1.307l-6.512-1.744a1.068 1.068 0 0 0-.256-.037zm4.84-33.807a1.068 1.068 0 0 0-.725.31l-4.765 4.766a1.068 1.068 0 0 0 0 1.512 1.068 1.068 0 0 0 1.51 0l4.765-4.766a1.068 1.068 0 0 0 0-1.511 1.068 1.068 0 0 0-.785-.311zm-13.93 44.744a1.068 1.068 0 0 0-.283.047 1.068 1.068 0 0 0-.701 1.338l1.302 4.177a1.068 1.068 0 0 0 1.336.702 1.068 1.068 0 0 0 .703-1.336l-1.302-4.18a1.068 1.068 0 0 0-1.055-.748zm8.79-2.207a1.068 1.068 0 0 0-.725.313 1.068 1.068 0 0 0 0 1.51l4.766 4.765a1.068 1.068 0 0 0 1.51 0 1.068 1.068 0 0 0 0-1.51l-4.766-4.765a1.068 1.068 0 0 0-.785-.313zm-18.23-44.754a1.068 1.068 0 0 0-1.068 1.066v6.74a1.068 1.068 0 0 0 1.068 1.069 1.068 1.068 0 0 0 1.066-1.068v-6.74a1.068 1.068 0 0 0-1.066-1.067zm-11.647.115a1.068 1.068 0 0 0-.285.035 1.068 1.068 0 0 0-.754 1.309l1.744 6.51a1.068 1.068 0 0 0 1.309.753 1.068 1.068 0 0 0 .754-1.306l-1.745-6.51a1.068 1.068 0 0 0-1.023-.791zm23.317.004a1.068 1.068 0 0 0-1.05.791l-1.745 6.51a1.068 1.068 0 0 0 .756 1.306 1.068 1.068 0 0 0 1.307-.753l1.744-6.51a1.068 1.068 0 0 0-.754-1.309 1.068 1.068 0 0 0-.258-.035zm-35.598 1.616a1.068 1.068 0 0 0-.725.313 1.068 1.068 0 0 0 0 1.51l4.766 4.765a1.068 1.068 0 0 0 1.51 0 1.068 1.068 0 0 0 0-1.51l-4.766-4.766a1.068 1.068 0 0 0-.785-.312zm8.936 10.455v10.852c3.426-.394 6.93.938 7.992 4.61.404-.213.359-.19.446-.237 8.372-3.856 11.803 4.574 8.57 9.422 4.24.207 6.19 2.239 6.726 4.46h5.375V59.434zm8.621 15.486c-65.706-49.945-32.853-24.973 0 0zM80.875 96.59a1.071 1.071 0 0 0-.902.496l-2.455 3.856a1.071 1.071 0 0 0 .328 1.478 1.071 1.071 0 0 0 1.478-.328l2.455-3.856a1.071 1.071 0 0 0-.326-1.478 1.071 1.071 0 0 0-.578-.168zm13.258 0a1.071 1.071 0 0 0-.9.496l-2.457 3.856a1.071 1.071 0 0 0 .328 1.478 1.071 1.071 0 0 0 1.478-.328l2.457-3.856a1.071 1.071 0 0 0-.328-1.478 1.071 1.071 0 0 0-.578-.168zm13.257 0a1.071 1.071 0 0 0-.9.496l-2.455 3.856a1.071 1.071 0 0 0 .328 1.478 1.071 1.071 0 0 0 1.478-.328l2.455-3.856a1.071 1.071 0 0 0-.328-1.478 1.071 1.071 0 0 0-.578-.168zm-21.212 7.95a1.071 1.071 0 0 0-.9.494l-2.457 3.856a1.071 1.071 0 0 0 .328 1.48 1.071 1.071 0 0 0 1.478-.328l2.457-3.855a1.071 1.071 0 0 0-.328-1.479 1.071 1.071 0 0 0-.578-.168zm13.26 0a1.071 1.071 0 0 0-.902.494l-2.455 3.856a1.071 1.071 0 0 0 .328 1.48 1.071 1.071 0 0 0 1.478-.328l2.455-3.855a1.071 1.071 0 0 0-.328-1.479 1.071 1.071 0 0 0-.576-.168z"></path><path d="M91.104 71.066a9.532 9.532 0 0 0-3.443.615c-2.191.834-3.889 2.415-4.305 4.422-.416 2.008.344 4.71 3.793 8.031a1.071 1.071 0 0 1 .03 1.514 1.071 1.071 0 0 1-1.514.03c-1.215-1.17-2.147-2.321-2.856-3.446-4.735-1.035-7.512.638-8.758 3.023-1.22 2.338-.859 5.482 1.291 7.8h36.11c.846-.747 1.59-2.604 1.173-4.29-.418-1.692-1.724-3.247-5.195-3.562-.955 1.204-2.293 2.169-4.041 2.67a1.071 1.071 0 0 1-1.324-.735 1.071 1.071 0 0 1 .734-1.324c1.408-.403 2.444-1.178 3.146-2.139a1.071 1.071 0 0 1 .246-.365l.004-.006c.926-1.506 1.108-3.38.657-5.004-.396-1.422-1.26-2.577-2.537-3.154-1.21-.547-2.883-.616-5.123.33.126.756.184 1.562.127 2.438a1.071 1.071 0 0 1-1.14.998 1.071 1.071 0 0 1-.997-1.14c.218-3.333-1.042-5.06-2.89-5.995-.925-.468-2.035-.7-3.188-.711z"></path>'
}
let mr = document.getElementById("icon--clock_sun_storm"),
	ve = document.getElementById("svg-sprite-component-wrap");
ve || (ve = document.createElementNS("http://www.w3.org/2000/svg", "svg"), ve.id = "svg-sprite-component-wrap", ve.style.setProperty("display", "none"), document.body.appendChild(ve));
if (!mr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	ve.appendChild(e), e.setAttribute("id", "icon--clock_sun_storm"), e.setAttribute("viewBox", "0 0 200 160"), e.innerHTML = '<path d="M123.33 73.355a1.068 1.068 0 0 0-1.068 1.068 1.068 1.068 0 0 0 1.068 1.069h6.74a1.068 1.068 0 0 0 1.069-1.069 1.068 1.068 0 0 0-1.069-1.068zm6.63-11.654a1.068 1.068 0 0 0-.283.035l-6.512 1.744a1.068 1.068 0 0 0-.754 1.309 1.068 1.068 0 0 0 1.307.756l6.511-1.746a1.068 1.068 0 0 0 .754-1.307 1.068 1.068 0 0 0-1.023-.791zm-6.5 21.565a1.068 1.068 0 0 0-1.05.791 1.068 1.068 0 0 0 .753 1.309l6.512 1.744a1.068 1.068 0 0 0 1.306-.756 1.068 1.068 0 0 0-.753-1.307l-6.512-1.744a1.068 1.068 0 0 0-.256-.037zm4.84-33.807a1.068 1.068 0 0 0-.725.31l-4.765 4.766a1.068 1.068 0 0 0 0 1.512 1.068 1.068 0 0 0 1.51 0l4.765-4.766a1.068 1.068 0 0 0 0-1.511 1.068 1.068 0 0 0-.785-.311zm-13.93 44.744a1.068 1.068 0 0 0-.283.047 1.068 1.068 0 0 0-.701 1.338l1.302 4.177a1.068 1.068 0 0 0 1.336.702 1.068 1.068 0 0 0 .703-1.336l-1.302-4.18a1.068 1.068 0 0 0-1.055-.748zm8.79-2.207a1.068 1.068 0 0 0-.725.313 1.068 1.068 0 0 0 0 1.51l4.766 4.765a1.068 1.068 0 0 0 1.51 0 1.068 1.068 0 0 0 0-1.51l-4.766-4.765a1.068 1.068 0 0 0-.785-.313zm-18.23-44.754a1.068 1.068 0 0 0-1.068 1.066v6.74a1.068 1.068 0 0 0 1.068 1.069 1.068 1.068 0 0 0 1.066-1.068v-6.74a1.068 1.068 0 0 0-1.066-1.067zm-11.647.115a1.068 1.068 0 0 0-.285.035 1.068 1.068 0 0 0-.754 1.309l1.744 6.51a1.068 1.068 0 0 0 1.309.753 1.068 1.068 0 0 0 .754-1.306l-1.745-6.51a1.068 1.068 0 0 0-1.023-.791zm23.317.004a1.068 1.068 0 0 0-1.05.791l-1.745 6.51a1.068 1.068 0 0 0 .756 1.306 1.068 1.068 0 0 0 1.307-.753l1.744-6.51a1.068 1.068 0 0 0-.754-1.309 1.068 1.068 0 0 0-.258-.035zm-35.598 1.616a1.068 1.068 0 0 0-.725.313 1.068 1.068 0 0 0 0 1.51l4.766 4.765a1.068 1.068 0 0 0 1.51 0 1.068 1.068 0 0 0 0-1.51l-4.766-4.766a1.068 1.068 0 0 0-.785-.312zm8.936 10.455v10.852c3.426-.394 6.93.938 7.992 4.61.404-.213.359-.19.446-.237 8.372-3.856 11.803 4.574 8.57 9.422 4.24.207 6.19 2.239 6.726 4.46h5.375V59.434zm8.621 15.486c-65.706-49.945-32.853-24.973 0 0z"></path><path d="M91.104 71.066a9.532 9.532 0 0 0-3.443.615c-2.191.834-3.889 2.415-4.305 4.422-.416 2.008.344 4.71 3.793 8.031a1.071 1.071 0 0 1 .03 1.514 1.071 1.071 0 0 1-1.514.03c-1.215-1.17-2.147-2.321-2.856-3.446-4.735-1.035-7.512.638-8.758 3.023-1.22 2.338-.859 5.482 1.291 7.8h36.11c.846-.747 1.59-2.604 1.173-4.29-.418-1.692-1.724-3.247-5.195-3.562-.955 1.204-2.293 2.169-4.041 2.67a1.071 1.071 0 0 1-1.324-.735 1.071 1.071 0 0 1 .734-1.324c1.408-.403 2.444-1.178 3.146-2.139a1.071 1.071 0 0 1 .246-.365l.004-.006c.926-1.506 1.108-3.38.657-5.004-.396-1.422-1.26-2.577-2.537-3.154-1.21-.547-2.883-.616-5.123.33.126.756.184 1.562.127 2.438a1.071 1.071 0 0 1-1.14.998 1.071 1.071 0 0 1-.997-1.14c.218-3.333-1.042-5.06-2.89-5.995-.925-.468-2.035-.7-3.188-.711zm-4.758 24.989a1.071 1.071 0 0 0-.879.535l-2.506 4.34a1.071 1.071 0 0 0 .733 1.588l1.892.351-3.385 5.862a1.071 1.071 0 0 0 .393 1.463 1.071 1.071 0 0 0 1.463-.393l4.14-7.172a1.071 1.071 0 0 0-.732-1.588l-1.89-.351 1.747-3.03a1.071 1.071 0 0 0-.392-1.463 1.071 1.071 0 0 0-.584-.142zm15.464 0a1.071 1.071 0 0 0-.879.535l-2.506 4.34a1.071 1.071 0 0 0 .733 1.588l1.892.351-3.385 5.862a1.071 1.071 0 0 0 .393 1.463 1.071 1.071 0 0 0 1.463-.393l4.14-7.172a1.071 1.071 0 0 0-.732-1.588l-1.89-.351 1.747-3.03a1.071 1.071 0 0 0-.392-1.463 1.071 1.071 0 0 0-.584-.142z"></path>'
}
class qt extends u.exports.Control {
	constructor(t) {
		super(Object.assign(t, {
			position: "topcenter"
		})), u.exports.Util.setOptions(this, t)
	}
	onAdd() {
		const t = !this.options.showTimeOfDay && !this.options.showWeather && this.options.showDigitalClock,
			o = _().state.currentWorldState;
		return this._container = u.exports.DomUtil.create("div", "clock" + (t ? " clock--digital" : "")), this._sun = u.exports.DomUtil.create("div", "clock__sun", this._container), this._moon = u.exports.DomUtil.create("div", "clock__moon", this._container), this._sun.style.transform = "translate(-150px, -150px)", this._moon.style.transform = "translate(-150px, -150px)", this._sun.innerHTML = `
		<svg class="svg-icon" aria-hidden="true">
	  		<use xlink:href="#icon--clock_sun" />
		</svg>`, this._moon.innerHTML = `
		<svg class="svg-icon" aria-hidden="true">
	  		<use xlink:href="#icon--clock_moon" />
		</svg>`, this.options.showDigitalClock && (this._clock = u.exports.DomUtil.create("div", "clock__time", this._container)), this._unwatchHandler = M(o, a => {
			this._update(a)
		}, {
			deep: !0
		}), this._container
	}
	onRemove() {
		this._unwatchHandler && this._unwatchHandler()
	}
	_update(t) {
		const o = t.timeOfDay;
		let a;
		if (o > 23100 || o < 12900) {
			let n = o + 900;
			n = n >= 24e3 ? n - 24e3 : n, a = n / 27600 * 2 * Math.PI
		} else {
			const n = o - 12900;
			a = Math.PI + n / 20400 * 2 * Math.PI
		}
		const r = a + Math.PI;
		o >= 0 ? (this._sun.style.transform = "translate(" + Math.round(-50 * Math.cos(a)) + "px, " + Math.round(-50 * Math.sin(a)) + "px)", this._moon.style.transform = "translate(" + Math.round(-50 * Math.cos(r)) + "px, " + Math.round(-50 * Math.sin(r)) + "px)") : (this._sun.style.transform = "translate(-150px, -150px)", this._moon.style.transform = "translate(-150px, -150px)");
		const i = Et(o);
		this.options.showDigitalClock && (o >= 0 ? (this._clock.classList.remove(i.night ? "day" : "night"), this._clock.classList.add(i.day ? "day" : "night"), this._clock.textContent = [i.hours.toString().padStart(2, "0"), i.minutes.toString().padStart(2, "0")].join(":")) : (this._clock.classList.remove(i.night ? "day" : "night"), this._clock.textContent = "")), this.options.showWeather && (t.thundering ? (this._setSunIcon("clock_sun_storm"), this._setMoonIcon("clock_moon_storm")) : t.raining ? (this._setSunIcon("clock_sun_rain"), this._setMoonIcon("clock_moon_rain")) : (this._setSunIcon("clock_sun"), this._setMoonIcon("clock_moon")))
	}
	_setSunIcon(t) {
		this._sun && this._currentSunIcon !== t && (this._sun.innerHTML = `
				<svg class="svg-icon" aria-hidden="true">
					<use xlink:href="#icon--${t}" />
				</svg>`, this._currentSunIcon = t)
	}
	_setMoonIcon(t) {
		this._moon && this._currentMoonIcon !== t && (this._moon.innerHTML = `
				<svg class="svg-icon" aria-hidden="true">
					<use xlink:href="#icon--${t}" />
				</svg>`, this._currentMoonIcon = t)
	}
}
const pr = T({
	props: {
		leaflet: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
        const t = _(),
            o = d(() => t.state.components.clockControl);
        let a = new qt(o.value);
        $(o, r => {
                e.leaflet.removeControl(a),
                    r && (a = new qt(r),
                        e.leaflet.addControl(a))
            }, {
                deep: !0
            }),
            W(() => e.leaflet.addControl(a)),
            F(() => e.leaflet.removeControl(a))
    },
	render() {
		return null
	}
});
let ur = document.getElementById("icon--link"),
    we = document.getElementById("svg-sprite-component-wrap");
we || (we = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
	we.id = "svg-sprite-component-wrap",
	we.style.setProperty("display", "none"),
    document.body.appendChild(we));
if (!ur) {
    let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
    we.appendChild(e),
        e.setAttribute("viewBox", "0 0 22 22"),
        e.setAttribute("fill", "none"),
        e.setAttribute("id", "icon--link"),
        e.innerHTML = `
<path d="M19.9914 2.00862C17.3132 -0.669541 12.9711 -0.669541 10.2929 2.00862L8.22183 4.07969C7.8313 4.47021 7.8313 5.10338 8.22183 5.4939C8.61235 5.88443 9.24551 5.88443 9.63604 5.4939L11.7071 3.42284C13.6042 1.52572 16.68 1.52572 18.5772 3.42284C20.4743 5.31995 20.4743 8.39578 18.5772 10.2929L16.5061 12.364C16.1156 12.7545 16.1156 13.3877 16.5061 13.7782C16.8966 14.1687 17.5298 14.1687 17.9203 13.7782L19.9914 11.7071C22.6695 9.02894 22.6695 4.68678 19.9914 2.00862Z" fill="currentcolor"></path>
<path d="M15.8492 7.56497C16.2398 7.17445 16.2398 6.54128 15.8492 6.15076C15.4587 5.76023 14.8256 5.76023 14.435 6.15076L6.15076 14.435C5.76023 14.8256 5.76023 15.4587 6.15076 15.8492C6.54128 16.2398 7.17445 16.2398 7.56497 15.8492L15.8492 7.56497Z" fill="currentcolor"></path>
<path d="M5.4939 9.63604C5.88443 9.24551 5.88443 8.61235 5.4939 8.22183C5.10338 7.8313 4.47021 7.8313 4.07969 8.22183L2.00862 10.2929C-0.669541 12.9711 -0.669541 17.3132 2.00862 19.9914C4.68678 22.6695 9.02894 22.6695 11.7071 19.9914L13.7782 17.9203C14.1687 17.5298 14.1687 16.8966 13.7782 16.5061C13.3877 16.1156 12.7545 16.1156 12.364 16.5061L10.2929 18.5772C8.39578 20.4743 5.31995 20.4743 3.42284 18.5772C1.52572 16.68 1.52572 13.6042 3.42284 11.7071L5.4939 9.63604Z" fill="currentcolor"></path>
`
}
class hr extends u.exports.Control {
	constructor(t) {
		super(t)
	}
	onAdd() {
		const t = _(),
			o = u.exports.DomUtil.create("button", "leaflet-control-button leaflet-control-link"),
			a = d(() => t.state.messages.copyToClipboardSuccess),
			r = d(() => t.state.messages.copyToClipboardError);
		return o.type = "button", o.title = t.state.messages.linkTitle, o.innerHTML = `
		<svg class="svg-icon" aria-hidden="true">
		  <use xlink:href="#icon--link" />
		</svg>`, o.addEventListener("click", i => {
			i.preventDefault(), Do(window.location.href.split("#")[0] + t.getters.url).then(() => {
				ne('Координаты скопированы')
			}).catch(n => {
				ne({
					type: "error",
					text: r.value
				}), console.error("Error copying to clipboard", n)
			})
		}), o
	}
}
const gr = T({
	props: {
		leaflet: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		const t = new hr({
			position: "topleft"
		});
		V(() => e.leaflet.addControl(t)), F(() => e.leaflet.removeControl(t))
	},
	render() {
		return null
	}
});
let fr = document.getElementById("icon--chat"),
	_e = document.getElementById("svg-sprite-component-wrap");
_e || (_e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), _e.id = "svg-sprite-component-wrap", _e.style.setProperty("display", "none"), document.body.appendChild(_e));
if (!fr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	_e.appendChild(e), e.setAttribute("viewBox", "0 0 255.35 204.89"), e.setAttribute("id", "icon--chat"), e.innerHTML = '<path d="M61.254 0C27.32 0 0 27.318 0 61.252v42.163c0 33.934 27.319 61.252 61.254 61.252h15.259l-21.095 38.319c-.46 1.82.236 2.723 3.955.918 13.531-6.566 53.741-27.223 77.092-39.237h57.636c33.934 0 61.254-27.318 61.254-61.252V61.252C255.355 27.317 228.036 0 194.101 0zm.053 80.558a17.531 17.531 0 0 1 .095 0 17.531 17.531 0 0 1 17.53 17.531 17.531 17.531 0 0 1-17.53 17.531A17.531 17.531 0 0 1 43.87 98.089a17.531 17.531 0 0 1 17.436-17.531zm67.688 0a17.531 17.531 0 0 1 .095 0 17.531 17.531 0 0 1 17.53 17.531 17.531 17.531 0 0 1-17.53 17.531 17.531 17.531 0 0 1-17.531-17.531 17.531 17.531 0 0 1 17.436-17.531zm67.733 0a17.531 17.531 0 0 1 .095 0 17.531 17.531 0 0 1 17.53 17.531 17.531 17.531 0 0 1-17.53 17.531 17.531 17.531 0 0 1-17.531-17.531 17.531 17.531 0 0 1 17.436-17.531z"></path>'
}
class yr extends u.exports.Control {
	constructor(t) {
		super(t)
	}
	onAdd() {
		const t = _(),
			o = u.exports.DomUtil.create("button", "leaflet-control-bottom leaflet-control-button leaflet-control-chat");
		return o.type = "button", o.title = t.state.messages.chatTitle, o.innerHTML = `
		<svg class="svg-icon">
		  <use xlink:href="#icon--chat" />
		</svg>`, o.addEventListener("click", a => {
			t.commit(c.TOGGLE_UI_ELEMENT_VISIBILITY, "chat"), a.stopPropagation(), a.preventDefault()
		}), u.exports.DomEvent.on(o, "keydown", a => {
			a.key === "ArrowRight" && t.commit(c.SET_UI_ELEMENT_VISIBILITY, {
				element: "chat",
				state: !0
			})
		}), M(t.state.ui.visibleElements, a => {
			o.setAttribute("aria-expanded", a.has("chat").toString())
		}), o
	}
}
const br = T({
	props: {
		leaflet: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
        const t = new br({
            position: "topleft"
        });
        V(() => e.leaflet.addControl(t)),
            F(() => e.leaflet.removeControl(t))
	},
	render() {
		return null
	}
});
let _r = document.getElementById("icon--layers"),
	ke = document.getElementById("svg-sprite-component-wrap");
ke || (ke = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    ke.id = "svg-sprite-component-wrap",
    ke.style.setProperty("display", "none"),
    document.body.appendChild(ke));
if (!_r) {
    let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
    ke.appendChild(e),
        e.setAttribute("viewBox", "0 0 22 22"),
        e.setAttribute("fill", "none"),
        e.setAttribute("id", "icon--layers"),
        e.innerHTML = `
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.553 0.105573C10.8345 -0.0351909 11.1659 -0.0351909 11.4474 0.105573L21.4474 5.10557C21.7862 5.27496 22.0002 5.62123 22.0002 6C22.0002 6.37877 21.7862 6.72504 21.4474 6.89443L11.4474 11.8944C11.1659 12.0352 10.8345 12.0352 10.553 11.8944L0.553005 6.89443C0.214221 6.72504 0.000219048 6.37877 0.000219048 6C0.000219048 5.62123 0.214221 5.27496 0.553005 5.10557L10.553 0.105573ZM3.23629 6L11.0002 9.88197L18.7642 6L11.0002 2.11803L3.23629 6Z" fill="currentcolor"></path>
<path d="M0.105792 10.5528C0.352781 10.0588 0.953454 9.85858 1.44743 10.1056L11.0002 14.882L20.553 10.1056C21.047 9.85858 21.6477 10.0588 21.8946 10.5528C22.1416 11.0468 21.9414 11.6474 21.4474 11.8944L11.4474 16.8944C11.1659 17.0352 10.8345 17.0352 10.553 16.8944L0.553005 11.8944C0.059027 11.6474 -0.141197 11.0468 0.105792 10.5528Z" fill="currentcolor"></path>
<path d="M1.44743 15.1056C0.953454 14.8586 0.352781 15.0588 0.105792 15.5528C-0.141197 16.0468 0.059027 16.6474 0.553005 16.8944L10.553 21.8944C10.8345 22.0352 11.1659 22.0352 11.4474 21.8944L21.4474 16.8944C21.9414 16.6474 22.1416 16.0468 21.8946 15.5528C21.6477 15.0588 21.047 14.8586 20.553 15.1056L11.0002 19.882L1.44743 15.1056Z" fill="currentcolor"></path>
`
}

const Sr = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"]),
	wt = (e, t) => {
		if (!!e.target) {
			if (Sr.has(e.key)) {
				const o = t.indexOf(e.target);
				if (o < 0) return;
				let a = o;
				switch (e.key) {
					case "ArrowUp":
					case "ArrowLeft":
						a = o - 1;
						break;
					case "ArrowDown":
					case "ArrowRight":
						a = o + 1;
						break;
					case "Home":
						a = 0;
						break;
					case "End":
						a = t.length - 1;
						break
				}
				a < 0 ? a = t.length - 1 : a >= t.length && (a = 0), t[a].focus(), e.preventDefault()
			} else if (e.key === "Enter" && e.target) {
				const o = new MouseEvent("click", {
					ctrlKey: e.ctrlKey,
					shiftKey: e.shiftKey,
					metaKey: e.metaKey,
					altKey: e.altKey,
					bubbles: !0
				});
				e.target.dispatchEvent(o), e.preventDefault()
			}
		}
	};
u.exports.Control.LayersObject;
u.exports.Control.LayersOptions;
const oe = _();
class Lr extends u.exports.Control.Layers {
	constructor(t, o, a) {
		super(t, o, Object.assign(a || {}, {
			sortLayers: !0,
			sortFunction: (r, i, n, s) => {
				const l = this._layerPositions.get(r) || 0,
					p = this._layerPositions.get(i) || 0;
				return l !== p ? l - p : n < s ? -1 : n > s ? 1 : 0
			}
		})), this.visible = !1, this._layerPositions = new Map
	}
	hasLayer(t) {
		return !!super._getLayer(u.exports.Util.stamp(t))
	}
	expand() {
		this._layersButton.setAttribute("aria-expanded", "true"), this._section.style.display = "", this.handleResize();
		const t = this._container.querySelector("input");
		return t && t.focus(), super._checkDisabledLayers(), this
	}
	collapse() {
		return this._layersButton.setAttribute("aria-expanded", "false"), this._section.style.display = "none", this
	}
	_initLayout() {
		const t = "leaflet-control-layers",
			o = this._container = u.exports.DomUtil.create("div", t),
			a = this._section = u.exports.DomUtil.create("section", t + "-list"),
			r = this._layersButton = u.exports.DomUtil.create("button", t + "-toggle", o);
		u.exports.DomEvent.disableClickPropagation(o), u.exports.DomEvent.disableScrollPropagation(o), u.exports.DomEvent.on(r, "keydown", i => {
			i.key === "ArrowRight" && oe.commit(c.SET_UI_ELEMENT_VISIBILITY, {
				element: "layers",
				state: !0
			})
		}), u.exports.DomEvent.on(o, "keydown", i => {
			i.key === "ArrowLeft" && (i.preventDefault(), oe.commit(c.SET_UI_ELEMENT_VISIBILITY, {
				element: "layers",
				state: !1
			}), te(() => r.focus()));
			const n = Array.from(o.querySelectorAll("input"));
			wt(i, n)
		}), u.exports.DomEvent.on(r, "click", () => oe.commit(c.TOGGLE_UI_ELEMENT_VISIBILITY, "layers")), a.style.display = "none", r.title = oe.state.messages.layersTitle, r.setAttribute("aria-expanded", "false"), r.innerHTML = `
			<svg class="svg-icon" aria-hidden="true">
			  <use xlink:href="#icon--layers" />
			</svg>`, M(oe.state.ui.visibleElements, i => {
			i.has("layers") && !this.visible ? this.expand() : this.visible && !i.has("layers") && this.collapse(), this.visible = oe.state.ui.visibleElements.has("layers")
		}), M(oe.state.messages, i => r.title = i.layersTitle), this.visible = oe.state.ui.visibleElements.has("layers"), this.visible && this.expand(), this._baseLayersList = u.exports.DomUtil.create("div", t + "-base", a), this._separator = u.exports.DomUtil.create("div", t + "-separator", a), this._overlaysList = u.exports.DomUtil.create("div", t + "-overlays", a), o.appendChild(a), window.addEventListener("resize", () => this.handleResize()), this.handleResize()
	}
	handleResize() {
		const t = this._layersButton.getBoundingClientRect().y;
		this._section.style.maxHeight = `calc(100vh - ${t+30+10+55}px)`
	}
	addOverlayAtPosition(t, o, a) {
		return this._layerPositions.set(t, a), super.addOverlay(t, o)
	}
	addOverlay(t, o) {
		return this._layerPositions.set(t, 0), super.addOverlay(t, o)
	}
	removeLayer(t) {
		return this._layerPositions.delete(t), super.removeLayer(t)
	}
	_addItem(t) {
		const o = t.overlay ? this._overlaysList : this._baseLayersList,
			a = document.createElement("label"),
			r = document.createElement("span"),
			i = this._map.hasLayer(t.layer);
		let n;
		return a.className = "layer checkbox", t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = super._createRadioElement("leaflet-base-layers_" + u.exports.Util.stamp(this), i), n.layerId = u.exports.Util.stamp(t.layer), this._layerControlInputs.push(n), r.textContent = t.name, u.exports.DomEvent.on(n, "click", s => super._onInputClick(s), this), a.appendChild(n), a.insertAdjacentHTML("beforeend", `
		<svg class="svg-icon" aria-hidden="true" viewBox="0 0 12 10" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 0.804159C12.0976 1.2097 12.0976 1.86722 11.7071 2.27276L5.04044 9.19584C4.64992 9.60139 4.01675 9.60139 3.62623 9.19584L0.292894 5.7343C-0.0976312 5.32876 -0.0976312 4.67124 0.292894 4.2657C0.683418 3.86015 1.31658 3.86015 1.70711 4.2657L4.33333 6.99293L10.2929 0.804159C10.6834 0.398614 11.3166 0.398614 11.7071 0.804159Z" fill="currentcolor"></path>
		</svg>`), a.appendChild(r), o.appendChild(a), super._checkDisabledLayers(), r
	}
	onRemove(t) {
		this._layerControlInputs = [], super.onRemove(t)
	}
}
class Er {
	constructor(t) {
		const o = d(() => _().state.components.layerControl);
		this.map = t, this.layerControl = new Lr({}, {}, {
			position: "topleft"
		}), o.value && this.map.addControl(this.layerControl), M(o, a => {
			a ? this.map.addControl(this.layerControl) : this.map.removeControl(this.layerControl)
		})
	}
	addLayer(t, o, a, r) {
		this.map.addLayer(t), o && (this.layerControl.hasLayer(t) && this.layerControl.removeLayer(t), typeof r != "undefined" ? this.layerControl.addOverlayAtPosition(t, a, r) : this.layerControl.addOverlay(t, a))
	}
	addHiddenLayer(t, o, a) {
		this.layerControl.hasLayer(t) && this.layerControl.removeLayer(t), typeof a != "undefined" ? this.layerControl.addOverlayAtPosition(t, o, a) : this.layerControl.addOverlay(t, o)
	}
	removeLayer(t) {
		this.map.removeLayer(t), this.layerControl.removeLayer(t)
	}
}
class vr extends u.exports.Control {
	constructor(t) {
		super(t)
	}
	onAdd() {
		const t = u.exports.DomUtil.create("div", "leaflet-control-logo");
		let o;
		if (this.options.url && (o = u.exports.DomUtil.create("a", "", t), o.href = this.options.url, o.setAttribute("aria-label", this.options.text)), this.options.image) {
			const a = u.exports.DomUtil.create("img", "", o);
			a.src = this.options.image, a.alt = this.options.text
		} else t.textContent = this.options.text;
		return t
	}
}
const wr = T({
	props: {
		options: {
			type: Object,
			required: !0
		},
		leaflet: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		return {
			control: new vr(e.options)
		}
	},
	mounted() {
		this.leaflet.addControl(this.control)
	},
	unmounted() {
		this.leaflet.removeControl(this.control)
	},
	render() {
		return null
	}
});
class Ar extends u.exports.Map {
	constructor(t, o) {
		super(t, o), this._layerManager = Object.seal(new Er(this))
	}
	getLayerManager() {
		return this._layerManager
	}
	_initControlPos() {
		const t = this._controlCorners = {},
			o = "leaflet-",
			a = this._controlContainer = u.exports.DomUtil.create("div", o + "control-container", this._container);

		function r(i, n) {
			const s = o + i + " " + o + n;
			t[`${i}${n}`] = u.exports.DomUtil.create("div", s, a)
		}
		r("top", "left"), r("top", "right"), r("top", "center"), r("bottom", "center"), r("bottom", "left"), r("bottom", "right")
	}
}
let xr = document.getElementById("icon--loading"),
	Le = document.getElementById("svg-sprite-component-wrap");
Le || (Le = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Le.id = "svg-sprite-component-wrap", Le.style.setProperty("display", "none"), document.body.appendChild(Le));
if (!xr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Le.appendChild(e), e.setAttribute("stroke", "#fff"), e.setAttribute("id", "icon--loading"), e.setAttribute("viewBox", "0 0 38 38"), e.innerHTML = '<g transform="translate(1 1)" stroke-width="2" fill="none"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animatetransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animatetransform></path></g>'
}
class Cr extends u.exports.Control {
	constructor(t) {
		super(t), this._dataLoaders = new Set, this._delayIndicatorTimeout = null, this._loadingIndicator = u.exports.DomUtil.create("div", "leaflet-control-button leaflet-control-loading")
	}
	onAdd(t) {
		return this._loadingIndicator.title = _().state.messages.loadingTitle, this._loadingIndicator.hidden = !0, this._loadingIndicator.innerHTML = `
		<svg class="svg-icon">
		  <use xlink:href="#icon--loading" />
		</svg>`, this._addLayerListeners(t), this._addMapListeners(t), this._loadingIndicator
	}
	onRemove(t) {
		this._removeLayerListeners(t), this._removeMapListeners(t)
	}
	addLoader(t) {
		this._dataLoaders.add(t), this.options.delayIndicator && !this._delayIndicatorTimeout ? this._delayIndicatorTimeout = setTimeout(() => {
			this.updateIndicator(), this._delayIndicatorTimeout = null
		}, this.options.delayIndicator) : this.updateIndicator()
	}
	removeLoader(t) {
		this._dataLoaders.delete(t), this.updateIndicator(), this.options.delayIndicator && this._delayIndicatorTimeout && !this.isLoading() && (clearTimeout(this._delayIndicatorTimeout), this._delayIndicatorTimeout = null)
	}
	updateIndicator() {
		this.isLoading() ? this._showIndicator() : this._hideIndicator()
	}
	isLoading() {
		return this._countLoaders() > 0
	}
	_countLoaders() {
		return this._dataLoaders.size
	}
	_showIndicator() {
		this._loadingIndicator.hidden = !1
	}
	_hideIndicator() {
		this._loadingIndicator.hidden = !0
	}
	_handleLoading(t) {
		this.addLoader(this.getEventId(t))
	}
	_handleBaseLayerChange(t) {
		t.layer && t.layer.eachLayer && typeof t.layer.eachLayer == "function" && t.layer.eachLayer(o => {
			this._handleBaseLayerChange({
				layer: o
			})
		})
	}
	_handleLoad(t) {
		this.removeLoader(this.getEventId(t))
	}
	getEventId(t) {
		return t.id ? t.id : t.layer ? t.layer._leaflet_id : t.target._leaflet_id
	}
	_layerAdd(t) {
		if (t.layer instanceof u.exports.TileLayer) try {
			t.layer.isLoading() && this.addLoader(t.layer._leaflet_id), t.layer.on("loading", this._handleLoading, this), t.layer.on("load", this._handleLoad, this)
		} catch (o) {
			console.warn("L.Control.Loading: Tried and failed to add  event handlers to layer", t.layer), console.warn("L.Control.Loading: Full details", o)
		}
	}
	_layerRemove(t) {
		if (t.layer instanceof u.exports.TileLayer) try {
			t.layer.off("loading", this._handleLoading, this), t.layer.off("load", this._handleLoad, this)
		} catch (o) {
			console.warn("L.Control.Loading: Tried and failed to remove event handlers from layer", t.layer), console.warn("L.Control.Loading: Full details", o)
		}
	}
	_addLayerListeners(t) {
		t.eachLayer(o => {
			o instanceof u.exports.TileLayer && (o.isLoading() && this.addLoader(o._leaflet_id), o.on("loading", this._handleLoading, this), o.on("load", this._handleLoad, this))
		}), t.on("layeradd", this._layerAdd, this), t.on("layerremove", this._layerRemove, this)
	}
	_removeLayerListeners(t) {
		t.eachLayer(o => {
			o instanceof u.exports.TileLayer && (this.removeLoader(o._leaflet_id), o.off("loading", this._handleLoading, this), o.off("load", this._handleLoad, this))
		}), t.off("layeradd", this._layerAdd, this), t.off("layerremove", this._layerRemove, this)
	}
	_addMapListeners(t) {
		t.on("baselayerchange", this._handleBaseLayerChange, this), t.on("dataloading", this._handleLoading, this), t.on("dataload", this._handleLoad, this), t.on("layerremove", this._handleLoad, this)
	}
	_removeMapListeners(t) {
		t.off("baselayerchange", this._handleBaseLayerChange, this), t.off("dataloading", this._handleLoading, this), t.off("dataload", this._handleLoad, this), t.off("layerremove", this._handleLoad, this)
	}
}
const Tr = {
		name: "svg-icon",
		props: {
			name: {
				type: String,
				required: !0
			},
			title: {
				type: String,
				default: null
			}
		},
		setup(e) {
			const t = d(() => `#icon--${e.name}`),
				o = d(() => `svg-icon svg-icon--${e.name}`);
			return {
				iconPath: t,
				className: o
			}
		}
	},
	Mr = {
		key: 0
	},
	Ir = ["xlink:href"];

function zr(e, t, o, a, r, i) {
	return m(), b("svg", {
		class: ie(a.className),
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": "true"
	}, [o.title ? (m(), b("title", Mr, x(o.title), 1)) : C("", !0), f("use", {
		"xlink:href": a.iconPath
	}, null, 8, Ir)], 2)
}
var pe = P(Tr, [
	["render", zr]
]);
let $r = document.getElementById("icon--block_world_surface"),
	Ee = document.getElementById("svg-sprite-component-wrap");
Ee || (Ee = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ee.id = "svg-sprite-component-wrap", Ee.style.setProperty("display", "none"), document.body.appendChild(Ee));
if (!$r) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Ee.appendChild(e), e.setAttribute("viewBox", "0 0 194.86 225"), e.setAttribute("id", "icon--block_world_surface"), e.innerHTML = '<g transform="translate(-56.845 -44.525)"><path d="m154.27 44.525-97.428 56.25 19.486 11.25 77.942-45 77.942 45 19.486-11.25z" fill="#66a443"></path><path d="m154.27 157.02-77.942-45 77.942-45 77.942 45z" fill="#77b551"></path><path d="m56.845 213.27v-112.5l19.486 11.25v90l77.942 45v22.5z" fill="#468234"></path><path d="m76.33 202.02v-90l77.942 45v90z" fill="#549141"></path><path d="m232.21 202.02v-90l-77.942 45v90z" fill="#3b823b"></path><path d="m232.21 112.02v90l-77.942 45v22.5l97.428-56.25v-112.5z" fill="#2c722d"></path></g>'
}
let Ur = document.getElementById("icon--block_world_cave"),
	Ae = document.getElementById("svg-sprite-component-wrap");
Ae || (Ae = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ae.id = "svg-sprite-component-wrap", Ae.style.setProperty("display", "none"), document.body.appendChild(Ae));
if (!Ur) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Ae.appendChild(e), e.setAttribute("viewBox", "0 0 194.86 225"), e.setAttribute("id", "icon--block_world_cave"), e.innerHTML = '<g transform="translate(-56.845 -44.525)"><path d="m154.27 44.525-97.428 56.25 19.486 11.25 77.942-45 77.942 45 19.486-11.25z" fill="#636767"></path><path d="m154.27 157.02-77.942-45 77.942-45 77.942 45z" fill="#9ba2a3"></path><path d="m56.845 213.27v-112.5l19.486 11.25v90l77.942 45v22.5z" fill="#67656a"></path><path d="m76.33 202.02v-90l77.942 45z" fill="#776d70"></path><path d="m76.33 202.02 77.942-45v90z" fill="#837f84"></path><path d="m232.21 202.02v-90l-77.942 45v90z" fill="#84858b"></path><path d="m232.21 112.02v90l-77.942 45v22.5l97.428-56.25v-112.5z" fill="#72727c"></path></g>'
}
let Pr = document.getElementById("icon--block_world_biome"),
	xe = document.getElementById("svg-sprite-component-wrap");
xe || (xe = document.createElementNS("http://www.w3.org/2000/svg", "svg"), xe.id = "svg-sprite-component-wrap", xe.style.setProperty("display", "none"), document.body.appendChild(xe));
if (!Pr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	xe.appendChild(e), e.setAttribute("viewBox", "0 0 194.86 225"), e.setAttribute("id", "icon--block_world_biome"), e.innerHTML = '<g transform="translate(-56.845 -44.525)"><path d="m154.27 44.525-97.428 56.25 19.486 11.25 77.942-45 77.942 45 19.486-11.25z" fill="#2c8ed9"></path><path d="m154.27 157.02-77.942-45 77.942-45 77.942 45z" fill="#46c0f1"></path><path d="m56.845 213.27v-112.5l19.486 11.25v90l77.942 45v22.5z" fill="#e15915"></path><path d="m76.33 202.02v-90l77.942 45v90z" fill="#ea952b"></path><path d="m232.21 202.02v-90l-77.942 45v90z" fill="#b5279f"></path><path d="m232.21 112.02v90l-77.942 45v22.5l97.428-56.25v-112.5z" fill="#94116a"></path></g>'
}
let Nr = document.getElementById("icon--block_world_flat"),
	Ce = document.getElementById("svg-sprite-component-wrap");
Ce || (Ce = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ce.id = "svg-sprite-component-wrap", Ce.style.setProperty("display", "none"), document.body.appendChild(Ce));
if (!Nr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Ce.appendChild(e), e.setAttribute("viewBox", "0 0 224.88 224.88"), e.setAttribute("id", "icon--block_world_flat"), e.innerHTML = '<g transform="translate(-3.866 -14.578)"><rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="#56bc3a"></rect><path d="M62.314 231.96h145.41a13.493 13.493 0 0 0 13.523-13.523V86.977c-109.53-19.382-158.93 144.98-158.93 144.98z" fill="#36c1df"></path></g><path opacity=".335" d="M173.19 92.012c-2.987 6.581 23.116 21.259 7.869 36.129-18.502 16.613 8.56 36.592-21.823 51.472-16.422 4.782-43.518-38.241-47.51-10.136-2.672 36.879-43.356 18.551-16.493 53.526H48.02c-4.77-46.459 15.402-83.567 38.889-91.661 63.696-21.95 27.812-40.803 67.037-69.23 24.344-20.731 39.502-33.812 69.05-22.989l-.694 39.645c-15.225 10.522-44.572 3.239-49.113 13.244z" fill="#dece95"></path><g transform="translate(-3.866 -14.578)"><path d="M171.44 100.97c-2.987 6.581 23.116 21.259 7.869 36.129-18.502 16.613 8.56 36.592-21.823 51.472-16.422 4.782-43.518-38.241-47.51-10.136-2.672 36.879-43.356 18.551-16.493 53.526H46.27c-4.77-46.459 15.402-83.567 38.889-91.661 63.695-21.95 27.812-40.803 67.037-69.23 24.344-20.731 39.502-33.812 69.05-22.989l-.694 39.645c-15.225 10.522-44.572 3.239-49.113 13.244z" fill="#dece95"></path><rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="none" stroke="#437c33" stroke-width="15"></rect></g>'
}
let Rr = document.getElementById("icon--block_nether_flat"),
	Te = document.getElementById("svg-sprite-component-wrap");
Te || (Te = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Te.id = "svg-sprite-component-wrap", Te.style.setProperty("display", "none"), document.body.appendChild(Te));
if (!Rr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Te.appendChild(e), e.setAttribute("viewBox", "0 0 224.88 224.88"), e.setAttribute("id", "icon--block_nether_flat"), e.innerHTML = '<rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="#443937" transform="translate(-3.866 -14.578)"></rect><path d="M58.448 217.382h145.41a13.493 13.493 0 0 0 13.523-13.523V72.399c-109.53-19.382-158.93 144.98-158.93 144.98z" fill="#dc6725"></path><path opacity=".335" d="M173.19 92.012c-2.987 6.581 23.116 21.259 7.869 36.129-18.502 16.613 8.56 36.592-21.823 51.472-16.422 4.782-43.518-38.241-47.51-10.136-2.672 36.879-43.356 18.551-16.493 53.526H48.02c-4.77-46.459 15.402-83.567 38.889-91.661 63.696-21.95 27.812-40.803 67.037-69.23 24.344-20.731 39.502-33.812 69.05-22.989l-.694 39.645c-15.225 10.522-44.572 3.239-49.113 13.244z" fill="#932626"></path><path d="M167.574 86.392c-2.987 6.581 23.116 21.259 7.869 36.129-18.502 16.613 8.56 36.592-21.823 51.472-16.422 4.782-43.518-38.241-47.51-10.136-2.672 36.879-43.356 18.551-16.493 53.526H42.404c-4.77-46.459 15.402-83.567 38.889-91.661 63.695-21.95 27.812-40.803 67.037-69.23 24.344-20.731 39.502-33.812 69.051-22.989l-.695 39.645c-15.225 10.522-44.572 3.239-49.113 13.244z" fill="#932626"></path><rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="none" stroke="#532727" stroke-width="15" transform="translate(-3.866 -14.578)"></rect>'
}
let Or = document.getElementById("icon--block_nether_surface"),
	Me = document.getElementById("svg-sprite-component-wrap");
Me || (Me = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Me.id = "svg-sprite-component-wrap", Me.style.setProperty("display", "none"), document.body.appendChild(Me));
if (!Or) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Me.appendChild(e), e.setAttribute("viewBox", "0 0 194.86 225"), e.setAttribute("id", "icon--block_nether_surface"), e.innerHTML = '<g transform="translate(-56.845 -44.525)"><path d="m154.27 44.525-97.428 56.25 19.486 11.25 77.942-45 77.942 45 19.486-11.25z" fill="#ca2717"></path><path d="m154.27 157.02-77.942-45 77.942-45 77.942 45z" fill="#dc442b"></path><path d="m56.845 213.27v-112.5l19.486 11.25v90l77.942 45v22.5z" fill="#9d0a17"></path><path d="m76.33 202.02v-90l77.942 45v90z" fill="#b02222"></path><path d="m232.21 202.02v-90l-77.942 45v90z" fill="#9b212d"></path><path d="m232.21 112.02v90l-77.942 45v22.5l97.428-56.25v-112.5z" fill="#8a0822"></path></g>'
}
let Dr = document.getElementById("icon--block_the_end_flat"),
	Ie = document.getElementById("svg-sprite-component-wrap");
Ie || (Ie = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ie.id = "svg-sprite-component-wrap", Ie.style.setProperty("display", "none"), document.body.appendChild(Ie));
if (!Dr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Ie.appendChild(e), e.setAttribute("viewBox", "0 0 224.88 224.88"), e.setAttribute("id", "icon--block_the_end_flat"), e.innerHTML = '<g transform="translate(-3.866 -14.578)"><rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="#bfbd7a"></rect><path d="M62.314 231.96h145.41a13.493 13.493 0 0 0 13.523-13.523V86.977c-109.53-19.382-158.93 144.98-158.93 144.98z" fill="#0c0902"></path><path d="M171.44 100.97c-2.987 6.581 23.116 21.259 7.869 36.129-18.502 16.613 8.56 36.592-21.823 51.472-16.422 4.782-43.518-38.241-47.51-10.136-2.672 36.879-43.356 18.551-16.493 53.526H46.27c-4.77-46.459 15.402-83.567 38.889-91.661 63.695-21.95 27.812-40.803 67.037-69.23 24.344-20.731 39.502-33.812 69.05-22.989l-.694 39.645c-15.225 10.522-44.572 3.239-49.113 13.244z" fill="#e6eca4"></path><rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="none" stroke="#534427" stroke-width="15"></rect></g>'
}
let Br = document.getElementById("icon--block_the_end_surface"),
	ze = document.getElementById("svg-sprite-component-wrap");
ze || (ze = document.createElementNS("http://www.w3.org/2000/svg", "svg"), ze.id = "svg-sprite-component-wrap", ze.style.setProperty("display", "none"), document.body.appendChild(ze));
if (!Br) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	ze.appendChild(e), e.setAttribute("viewBox", "0 0 194.86 225"), e.setAttribute("id", "icon--block_the_end_surface"), e.innerHTML = '<g transform="translate(-56.845 -44.525)"><path d="m154.27 44.525-97.428 56.25 19.486 11.25 77.942-45 77.942 45 19.486-11.25z" fill="#cdc683"></path><path d="m154.27 157.02-77.942-45 77.942-45 77.942 45z" fill="#e1e5ab"></path><path d="m56.845 213.27v-112.5l19.486 11.25v90l77.942 45v22.5z" fill="#b8b372"></path><path d="m76.33 202.02v-90l77.942 45v90z" fill="#cdc683"></path><path d="m232.21 202.02v-90l-77.942 45v90z" fill="#b4a665"></path><path d="m232.21 112.02v90l-77.942 45v22.5l97.428-56.25v-112.5z" fill="#908046"></path></g>'
}
let Hr = document.getElementById("icon--block_other"),
	$e = document.getElementById("svg-sprite-component-wrap");
$e || ($e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), $e.id = "svg-sprite-component-wrap", $e.style.setProperty("display", "none"), document.body.appendChild($e));
if (!Hr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	$e.appendChild(e), e.setAttribute("viewBox", "0 0 194.86 225"), e.setAttribute("id", "icon--block_other"), e.innerHTML = '<g transform="translate(-56.845 -44.525)"><path d="m154.27 44.525-97.428 56.25 19.486 11.25 77.942-45 77.942 45 19.486-11.25z" fill="#5e6464"></path><path d="m154.27 157.02-77.942-45 77.942-45 77.942 45z" fill="#929594"></path><path d="m56.845 213.27v-112.5l19.486 11.25v90l77.942 45v22.5z" fill="#525252"></path><path d="m76.33 202.02v-90l77.942 45v90z" fill="#696969"></path><path d="m232.21 202.02v-90l-77.942 45v90z" fill="#555356"></path><path d="m232.21 112.02v90l-77.942 45v22.5l97.428-56.25v-112.5z" fill="#3c373d"></path></g>'
}
let Wr = document.getElementById("icon--block_other_flat"),
	Ue = document.getElementById("svg-sprite-component-wrap");
Ue || (Ue = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ue.id = "svg-sprite-component-wrap", Ue.style.setProperty("display", "none"), document.body.appendChild(Ue));
if (!Wr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Ue.appendChild(e), e.setAttribute("viewBox", "0 0 224.88 224.88"), e.setAttribute("id", "icon--block_other_flat"), e.innerHTML = '<g transform="translate(-3.866 -14.578)"><rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="#4c4b51"></rect><path d="M62.314 231.96h145.41a13.493 13.493 0 0 0 13.523-13.523V86.977c-109.53-19.382-158.93 144.98-158.93 144.98z" fill="#332f2e"></path></g><path opacity=".335" d="M173.19 92.012c-2.987 6.581 23.116 21.259 7.869 36.129-18.502 16.613 8.56 36.592-21.823 51.472-16.422 4.782-43.518-38.241-47.51-10.136-2.672 36.879-43.356 18.551-16.493 53.526H48.02c-4.77-46.459 15.402-83.567 38.889-91.661 63.696-21.95 27.812-40.803 67.037-69.23 24.344-20.731 39.502-33.812 69.05-22.989l-.694 39.645c-15.225 10.522-44.572 3.239-49.113 13.244z" fill="#6a7072"></path><g transform="translate(-3.866 -14.578)"><path d="M171.44 100.97c-2.987 6.581 23.116 21.259 7.869 36.129-18.502 16.613 8.56 36.592-21.823 51.472-16.422 4.782-43.518-38.241-47.51-10.136-2.672 36.879-43.356 18.551-16.493 53.526H46.27c-4.77-46.459 15.402-83.567 38.889-91.661 63.695-21.95 27.812-40.803 67.037-69.23 24.344-20.731 39.502-33.812 69.05-22.989l-.694 39.645c-15.225 10.522-44.572 3.239-49.113 13.244z" fill="#6a7072"></path><rect x="11.366" y="22.078" width="209.88" height="209.88" ry="13.523" fill="none" stroke="#13212c" stroke-width="15"></rect></g>'
}
let Vr = document.getElementById("icon--block_skylands"),
	Pe = document.getElementById("svg-sprite-component-wrap");
Pe || (Pe = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Pe.id = "svg-sprite-component-wrap", Pe.style.setProperty("display", "none"), document.body.appendChild(Pe));
if (!Vr) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Pe.appendChild(e), e.setAttribute("viewBox", "0 0 194.86 225"), e.setAttribute("id", "icon--block_skylands"), e.innerHTML = '<g transform="translate(-56.845 -44.525)"><path d="m154.27 44.525-97.428 56.25 19.486 11.25 77.942-45 77.942 45 19.486-11.25z" fill="#5cd1e9"></path><path d="m154.27 157.02-77.942-45 77.942-45 77.942 45z" fill="#79edf4"></path><path d="m56.845 213.27v-112.5l19.486 11.25v90l77.942 45v22.5z" fill="#2076bf"></path><path d="m76.33 202.02v-90l77.942 45v90z" fill="#34a7dc"></path><path d="m232.21 202.02v-90l-77.942 45v90z" fill="#005ec9"></path><path d="m232.21 112.02v90l-77.942 45v22.5l97.428-56.25v-112.5z" fill="#0043aa"></path></g>'
}
const Zr = T({
		name: "WorldListItem",
		components: {
			SvgIcon: pe
		},
		props: {
			world: {
				type: Object,
				required: !0
			},
			name: {
				type: String,
				default: "map"
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => {
					const r = [];
					return e.world.maps.forEach(i => {
						(!i.appendedWorld || i.appendedWorld.name === e.world.name) && r.push(i)
					}), r
				});
			return {
				currentMap: d({
					get: () => t.state.currentMap ? [t.state.currentWorld.name, t.state.currentMap.name] : void 0,
					set: r => r && t.commit(c.SET_CURRENT_MAP, {
						worldName: r[0],
						mapName: r[1]
					})
				}),
				maps: o
			}
		}
	}),
	jr = {
		key: 0,
		class: "world"
	},
	Fr = {
		class: "world__name",
		"aria-hidden": "true"
	},
	Gr = {
		class: "world__maps menu"
	},
	Yr = ["id", "name", "value", "aria-labelledby"],
	Kr = ["id", "for", "title"],
	qr = ["src"];

function Qr(e, t, o, a, r, i) {
	const n = w("SvgIcon");
	return e.maps.length ? (m(), b("div", jr, [f("span", Fr, x(e.world.displayName), 1), f("div", Gr, [(m(!0), b(O, null, Q(e.maps, s => (m(), b(O, {
		key: `${s.world.name}_${s.name}`
	}, [W(f("input", {
		id: `${e.name}-${s.world.name}-${s.name}`,
		type: "radio",
		name: e.name,
		value: [s.world.name, s.name],
		"onUpdate:modelValue": t[0] || (t[0] = l => e.currentMap = l),
		"aria-labelledby": `${e.name}-${s.world.name}-${s.name}-label`
	}, null, 8, Yr), [
		[ft, e.currentMap]
	]), f("label", {
		id: `${e.name}-${s.world.name}-${s.name}-label`,
		class: "map",
		for: `${e.name}-${s.world.name}-${s.name}`,
		title: `${s.world.displayName} - ${s.displayName}`
	}, [s.hasCustomIcon() ? (m(), b("img", {
		key: 0,
		src: s.getIcon(),
		alt: ""
	}, null, 8, qr)) : (m(), A(n, {
		key: 1,
		name: s.getIcon()
	}, null, 8, ["name"]))], 8, Kr)], 64))), 128))])])) : C("", !0)
}
var Mo = P(Zr, [
	["render", Qr],
	["__scopeId", "data-v-219749ac"]
]);
const Jr = T({
		name: "MapContextMenu",
		components: {
			WorldListItem: Mo
		},
		props: {
			leaflet: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _(),
				o = E(null),
				a = E(null),
				r = d(() => t.state.messages.contextMenuCopyLink),
				i = d(() => t.state.messages.contextMenuCenterHere),
				n = E(null),
				s = d(() => !!o.value),
				l = d(() => t.state.currentMap),
				p = d(() => t.state.currentZoom),
				h = d(() => {
					var v, H;
					return l.value ? (v = l.value) != null && v.appendedWorld ? (H = l.value) == null ? void 0 : H.appendedWorld.maps.size : l.value.world.maps.size : 0
				}),
				g = d(() => !o.value || !l.value ? {
					x: 0,
					y: 0,
					z: 0
				} : l.value.latLngToLocation(o.value.latlng, 64)),
				y = d(() => `X: ${Math.round(g.value.x)}, Z: ${Math.round(g.value.z)}`),
				L = d(() => `${Math.round(g.value.x)}, ${Math.round(g.value.z)}`),
				I = d(() => {
					if (!l.value) return "";
					const v = new URL(window.location.href);
					return v.hash = to(l.value, g.value, p.value), v
				}),
				U = d(() => {
					if (!o.value) return {
						visibility: "hidden",
						left: "-1000px"
					};
					const v = Math.min(window.innerWidth - n.value.offsetWidth - 10, o.value.originalEvent.clientX),
						H = Math.min(window.innerHeight - n.value.offsetHeight - 10, o.value.originalEvent.clientY);
					return {
						transform: `translate(${v}px, ${H}px)`
					}
				}),
				z = v => {
					v.key === "Escape" && s.value && k()
				},
				S = v => {
					wt(v, Array.from(n.value.querySelectorAll("button, input")))
				},
				$ = () => {
					if (n.value) {
						const v = n.value.querySelector("button");
						v && v.focus()
					}
				},
				k = () => o.value = null,
				N = () => {
					o.value && (e.leaflet.panTo(o.value.latlng), e.leaflet.getContainer().focus())
				};
			return M(o, v => {
				v && (e.leaflet.closePopup(), te(() => n.value && $()))
			}), V(() => {
				window.addEventListener("click", k), window.addEventListener("keyup", z)
			}), F(() => {
				window.removeEventListener("click", k), window.removeEventListener("keyup", z)
			}), e.leaflet.on("movestart", k), e.leaflet.on("zoomstart", k), e.leaflet.on("contextmenu", v => {
				v.originalEvent.target && v.originalEvent.target.closest(".leaflet-control") || (v.originalEvent.stopImmediatePropagation(), v.originalEvent.preventDefault(), o.value = v)
			}), e.leaflet.on("mousemove", v => {
				a.value = v
			}), window.addEventListener("contextmenu", v => {
				v.target && v.target instanceof HTMLElement && v.target.classList.contains("leaflet-zoom-animated") && (v.preventDefault(), v.stopImmediatePropagation(), a.value && (o.value = a.value))
			}), {
				messageCopyLink: r,
				messageCenterHere: i,
				copySuccess: oo(),
				copyError: ao(),
				menuVisible: s,
				menuElement: n,
				url: I,
				locationLabel: y,
				locationCopy: L,
				currentMap: l,
				mapCount: h,
				style: U,
				pan: N,
				handleKeydown: S
			}
		}
	}),
	Xr = {
		class: "menu",
		role: "menu"
	},
	en = {
		role: "none"
	},
	tn = {
		type: "button",
		role: "menuitem"
	},
	on = {
		role: "none"
	},
	an = {
		type: "button",
		role: "menuitem"
	},
	rn = {
		role: "none"
	};

function nn(e, t, o, a, r, i) {
	const n = w("WorldListItem"),
		s = Qt("clipboard");
	return m(), b("nav", {
		role: "none",
		id: "map-context-menu",
		ref: "menuElement",
		style: Bo(e.style),
		onKeydown: t[1] || (t[1] = (...l) => e.handleKeydown && e.handleKeydown(...l))
	}, [f("ul", Xr, [f("li", en, [W((m(), b("button", tn, [ce(x(e.locationLabel), 1)])), [
		[s, e.locationCopy, "copy"],
		[s, e.copySuccess, "success"],
		[s, e.copyError, "error"]
	])]), f("li", on, [W((m(), b("button", an, [ce(x(e.messageCopyLink), 1)])), [
		[s, e.url, "copy"],
		[s, e.copySuccess, "success"],
		[s, e.copyError, "error"]
	])]), f("li", rn, [f("button", {
		type: "button",
		role: "menuitem",
		onClick: t[0] || (t[0] = J((...l) => e.pan && e.pan(...l), ["prevent"]))
	}, x(e.messageCenterHere), 1)]), e.currentMap && e.mapCount > 1 ? (m(), A(n, {
		key: 0,
		world: e.currentMap.appendedWorld || e.currentMap.world,
		name: "context"
	}, null, 8, ["world"])) : C("", !0)])], 36)
}
var sn = P(Jr, [
	["render", nn],
	["__scopeId", "data-v-074fda55"]
]);
let ln = document.getElementById("icon--login"),
	Ne = document.getElementById("svg-sprite-component-wrap");
Ne || (Ne = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ne.id = "svg-sprite-component-wrap", Ne.style.setProperty("display", "none"), document.body.appendChild(Ne));
if (!ln) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Ne.appendChild(e), e.setAttribute("viewBox", "0 0 281.34 277.13"), e.setAttribute("id", "icon--login"), e.innerHTML = '<g stroke-linecap="round"><path d="M117.345 0c-15.437 0-28.178 12.74-28.178 28.176v87.008h20V28.176c0-4.702 3.476-8.175 8.178-8.175h135.817c4.703 0 8.177 3.473 8.177 8.175v220.778c0 4.702-3.474 8.176-8.176 8.176H117.344c-4.702 0-8.178-3.474-8.178-8.176V167.24h-20v81.712c0 15.437 12.742 28.178 28.178 28.178h135.817c15.437 0 28.176-12.741 28.176-28.178V28.176C281.339 12.74 268.6 0 253.163 0H117.345z"></path><path d="M148.458 77.933a12.5 12.5 0 0 0-8.848 3.643 12.5 12.5 0 0 0-.04 17.678l29.329 29.457H12.508a12.5 12.5 0 0 0-12.5 12.501 12.5 12.5 0 0 0 12.5 12.5h156.39l-29.328 29.457a12.5 12.5 0 0 0 .04 17.678 12.5 12.5 0 0 0 17.677-.038l50.552-50.777a12.501 12.501 0 0 0 0-17.64l-50.551-50.774a12.5 12.5 0 0 0-8.83-3.683z"></path></g>'
}
let dn = document.getElementById("icon--logout"),
	Re = document.getElementById("svg-sprite-component-wrap");
Re || (Re = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Re.id = "svg-sprite-component-wrap", Re.style.setProperty("display", "none"), document.body.appendChild(Re));
if (!dn) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Re.appendChild(e), e.setAttribute("viewBox", "0 0 281.34 277.13"), e.setAttribute("id", "icon--logout"), e.innerHTML = '<g stroke-linecap="round"><path d="M117.345 0c-15.437 0-28.178 12.74-28.178 28.176v87.008h20V28.176c0-4.702 3.476-8.175 8.178-8.175h135.817c4.703 0 8.177 3.473 8.177 8.175v220.778c0 4.702-3.474 8.176-8.176 8.176H117.344c-4.702 0-8.178-3.474-8.178-8.176V167.24h-20v81.712c0 15.437 12.742 28.178 28.178 28.178h135.817c15.437 0 28.176-12.741 28.176-28.178V28.176C281.339 12.74 268.6 0 253.163 0z"></path><path d="M63.024 77.933a12.5 12.5 0 0 1 8.848 3.643 12.5 12.5 0 0 1 .04 17.678l-29.329 29.457h156.39a12.5 12.5 0 0 1 12.5 12.501 12.5 12.5 0 0 1-12.5 12.5H42.583l29.328 29.457a12.5 12.5 0 0 1-.04 17.678 12.5 12.5 0 0 1-17.677-.038L3.642 150.032a12.501 12.501 0 0 1 0-17.64l50.552-50.774a12.5 12.5 0 0 1 8.83-3.683z"></path></g>'
}
class cn extends u.exports.Control {
	constructor(t) {
		super(t), this.store = _(), this.loggedIn = d(() => this.store.state.loggedIn), this._button = u.exports.DomUtil.create("button", "leaflet-control-bottom leaflet-control-button leaflet-control-login"), this._button.type = "button", this._button.addEventListener("click", async a => {
			a.stopPropagation(), a.preventDefault(), await this.handleClick()
		}), u.exports.DomEvent.on(this._button, "keydown", async a => {
			a.key === "ArrowRight" && (a.stopPropagation(), a.preventDefault(), await this.handleClick())
		}), M(this.loggedIn, () => {
			this.update()
		});
		const o = d(() => this.store.state.ui.visibleModal);
		M(o, (a, r) => {
			this._button.setAttribute("aria-expanded", (a === "login").toString()), this._map && !a && r === "login" && this._button.focus()
		}), this.update()
	}
	onAdd() {
		return this._button
	}
	update() {
		this._button.title = this.loggedIn.value ? this.store.state.messages.logoutTitle : this.store.state.messages.loginTitle, this._button.innerHTML = `
			<svg class="svg-icon">
			  <use xlink:href="#icon--${this.loggedIn.value?"logout":"login"}" />
			</svg>`
	}
	async handleClick() {
		const t = d(() => this.store.state.messages.logoutSuccess),
			o = d(() => this.store.state.messages.logoutErrorUnknown);
		if (this.loggedIn.value) try {
			await this.store.dispatch(R.LOGOUT, void 0), ne(t.value)
		} catch {
			ne(o.value)
		} else await this.store.dispatch(R.LOGIN, null)
	}
}
const mn = T({
		props: {
			leaflet: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = new cn({
				position: "topleft"
			});
			V(() => e.leaflet.addControl(t)), F(() => e.leaflet.removeControl(t))
		},
		render() {
			return null
		}
	}),
	pn = T({
		props: {
			options: {
				type: Object,
				required: !0
			},
			leaflet: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			let o = _().state.currentMapProvider.createTileLayer(Object.freeze(JSON.parse(JSON.stringify(e.options.tileLayerOptions))));
			e.leaflet.getLayerManager().addHiddenLayer(o, e.options.label, e.options.priority), F(() => {
				e.leaflet.getLayerManager().removeLayer(o), o.remove()
			})
		},
		render() {
			return null
		}
	});
const un = T({
		components: {
			TileLayerOverlay: pn,
			MapContextMenu: sn,
			TileLayer: Ya,
			PlayersLayer: er,
			MarkerSetLayer: rr,
			CoordinatesControl: nr,
			ClockControl: pr,
			LinkControl: gr,
			ChatControl: br,
			LogoControl: wr,
			LoginControl: mn
		},
		setup() {
			const e = _(),
				t = void 0,
				o = d(() => e.state.maps),
				a = d(() => {
					var H;
					return (H = e.state.currentMap) == null ? void 0 : H.overlays
				}),
				r = d(() => e.state.markerSets),
				i = d(() => e.state.configuration),
				n = d(() => e.getters.playerMarkersEnabled),
				s = d(() => e.getters.coordinatesControlEnabled),
				l = d(() => e.getters.clockControlEnabled),
				p = d(() => e.state.components.linkControl),
				h = d(() => e.state.components.chatBox),
				g = d(() => e.state.components.login),
				y = d(() => !e.state.ui.disableContextMenu),
				L = d(() => e.state.components.logoControls),
				I = d(() => e.state.currentWorld),
				U = d(() => e.state.currentMap),
				z = d(() => e.getters.mapBackground),
				S = d(() => e.state.followTarget),
				$ = d(() => e.state.viewTarget),
				k = d(() => e.state.parsedUrl),
				N = E(null),
				v = d(() => e.state.messages.mapTitle);
			return {
				leaflet: t,
				maps: o,
				overlays: a,
				markerSets: r,
				configuration: i,
				playerMarkersEnabled: n,
				coordinatesControlEnabled: s,
				clockControlEnabled: l,
				linkControlEnabled: p,
				chatBoxEnabled: h,
				loginEnabled: g,
				contextMenuEnabled: y,
				logoControls: L,
				followTarget: S,
				viewTarget: $,
				parsedUrl: k,
				mapBackground: z,
				currentWorld: I,
				currentMap: U,
				scheduledView: N,
				mapTitle: v
			}
		},
		watch: {
			followTarget: {
				handler(e, t) {
					e && this.updateFollow(e, !t || e.name !== t.name)
				},
				deep: !0
			},
			viewTarget: {
				handler(e) {
					e && (this.currentWorld && e.location.world === this.currentWorld.name && _().commit(c.CLEAR_VIEW_TARGET, void 0), this.setView(e))
				},
				deep: !0
			},
			currentMap(e, t) {
				const o = _();
				if (e && (o.state.currentMapProvider.populateMap(e), this.leaflet)) {
					let a = this.scheduledView;
					!a && t ? a = {
						location: t.latLngToLocation(this.leaflet.getCenter(), 64)
					} : a || (a = {
						location: {
							x: 0,
							y: 0,
							z: 0
						}
					}), a.options = {
						animate: !1,
						noMoveStart: !1
					}, this.setView(a), this.scheduledView = null
				}
			},
			currentWorld(e, t) {
				var a, r, i, n, s, l, p, h;
				const o = _();
				if (e) {
					o.state.currentMapProvider.populateWorld(e);
					let g = this.scheduledView || {};
					if (o.state.followTarget && o.state.followTarget.location.world === e.name) return;
					if (o.state.viewTarget && o.state.viewTarget.location.world === e.name) {
						o.commit(c.CLEAR_VIEW_TARGET, void 0);
						return
					} else(a = o.state.parsedUrl) != null && a.location ? (g.location = o.state.parsedUrl.location, t || (typeof ((r = o.state.parsedUrl) == null ? void 0 : r.zoom) != "undefined" ? g.zoom = (i = o.state.parsedUrl) == null ? void 0 : i.zoom : typeof ((n = o.state.currentMap) == null ? void 0 : n.defaultZoom) != "undefined" ? g.zoom = (s = o.state.currentMap) == null ? void 0 : s.defaultZoom : g.zoom = o.state.configuration.defaultZoom), o.commit(c.CLEAR_PARSED_URL, void 0)) : g.location = ((l = o.state.currentMap) == null ? void 0 : l.center) || e.center;
					g.zoom == null && (typeof ((p = o.state.currentMap) == null ? void 0 : p.defaultZoom) != "undefined" ? g.zoom = (h = o.state.currentMap) == null ? void 0 : h.defaultZoom : g.zoom = o.state.configuration.defaultZoom), this.scheduledView = g
				}
			},
			parsedUrl: {
				handler(e) {
					!e || !this.currentMap || !this.leaflet || this.setView({
						location: Zt(Vt({}, e.location), {
							world: e.world
						}),
						map: e.map,
						zoom: e.zoom,
						options: {
							animate: !1,
							noMoveStart: !0
						}
					})
				},
				deep: !0
			}
		},
		mounted() {
			this.leaflet = new Ar(this.$el.nextElementSibling, Object.freeze({
				zoom: this.configuration.defaultZoom,
				center: new u.exports.LatLng(0, 0),
				fadeAnimation: !1,
				zoomAnimation: !0,
				zoomControl: !0,
				preferCanvas: !0,
				attributionControl: !1,
				crs: u.exports.CRS.Simple,
				worldCopyJump: !1
			})), window.addEventListener("keydown", this.handleKeydown), this.leaflet.createPane("vectors"), this.leaflet.addControl(new Cr({
				position: "topleft",
				delayIndicator: 500
			})), this.leaflet.on("moveend", () => {
				this.currentMap && _().commit(c.SET_CURRENT_LOCATION, this.currentMap.latLngToLocation(this.leaflet.getCenter(), 64))
			}), this.leaflet.on("zoomend", () => {
				_().commit(c.SET_CURRENT_ZOOM, this.leaflet.getZoom())
			})
		},
		unmounted() {
			window.removeEventListener("keydown", this.handleKeydown), this.leaflet.remove()
		},
		methods: {
			handleKeydown(e) {
				e.key === "Escape" && (e.preventDefault(), this.leaflet.getContainer().focus())
			},
			setView(e) {
				var i, n, s, l;
				const t = _(),
					o = t.state.currentWorld,
					a = (i = t.state.currentMap) == null ? void 0 : i.name,
					r = e.location.world ? t.state.worlds.get(e.location.world) : o;
				if (!this.leaflet) {
					console.warn("Ignoring setView as leaflet not initialised");
					return
				}
				if (!r) {
					console.warn(`Ignoring setView with unknown world ${e.location.world}`);
					return
				}
				if (r && r !== o || e.map && a !== e.map) {
					const p = t.state.maps.get(`${r.name}_${e.map}`),
						h = p ? p.name : r.maps.values().next().value.name;
					this.scheduledView = e;
					try {
						t.commit(c.SET_CURRENT_MAP, {
							worldName: r.name,
							mapName: h
						})
					} catch (g) {
						console.warn("Failed to handle map setView", g), this.scheduledView = null
					}
				} else if (console.debug("Moving to", JSON.stringify(e)), typeof e.zoom != "undefined" && this.leaflet.setZoom(e.zoom, e.options), "min" in e.location) this.leaflet.fitBounds(new u.exports.LatLngBounds((n = t.state.currentMap) == null ? void 0 : n.locationToLatLng(e.location.min), (s = t.state.currentMap) == null ? void 0 : s.locationToLatLng(e.location.max)), e.options);
				else {
					const p = (l = t.state.currentMap) == null ? void 0 : l.locationToLatLng(e.location);
					this.leaflet.panTo(p, e.options)
				}
			},
			updateFollow(e, t) {
				const o = _(),
					a = o.state.currentWorld;
				let r;
				if (e.hidden) {
					console.warn(`Cannot follow ${e.name}. Player is hidden from the map.`);
					return
				}(!a || a.name !== e.location.world || t) && (r = o.state.configuration.followMap), this.setView({
					location: e.location,
					map: r,
					zoom: t ? o.state.configuration.followZoom : void 0
				})
			}
		}
	}),
	hn = ["aria-label"];

function gn(e, t, o, a, r, i) {
	const n = w("TileLayer"),
		s = w("TileLayerOverlay"),
		l = w("PlayersLayer"),
		p = w("MarkerSetLayer"),
		h = w("LogoControl"),
		g = w("CoordinatesControl"),
		y = w("LinkControl"),
		L = w("ClockControl"),
		I = w("LoginControl"),
		U = w("ChatControl"),
		z = w("MapContextMenu");
	return m(), b(O, null, [f("div", nt({
		class: "map",
		style: {
			backgroundColor: e.mapBackground
		}
	}, e.$attrs, {
		"aria-label": e.mapTitle
	}), [e.leaflet ? (m(), b(O, {
		key: 0
	}, [(m(!0), b(O, null, Q(e.maps, ([S, $]) => (m(), A(n, {
		key: S,
		options: $,
		leaflet: e.leaflet
	}, null, 8, ["options", "leaflet"]))), 128)), (m(!0), b(O, null, Q(e.overlays, ([S, $]) => (m(), A(s, {
		key: S,
		options: $,
		leaflet: e.leaflet
	}, null, 8, ["options", "leaflet"]))), 128)), e.playerMarkersEnabled ? (m(), A(l, {
		key: 0,
		leaflet: e.leaflet
	}, null, 8, ["leaflet"])) : C("", !0), (m(!0), b(O, null, Q(e.markerSets, ([S, $]) => (m(), A(p, {
		key: S,
		markerSet: $,
		leaflet: e.leaflet
	}, null, 8, ["markerSet", "leaflet"]))), 128)), (m(!0), b(O, null, Q(e.logoControls, S => (m(), A(h, {
		key: JSON.stringify(S),
		options: S,
		leaflet: e.leaflet
	}, null, 8, ["options", "leaflet"]))), 128)), e.coordinatesControlEnabled ? (m(), A(g, {
		key: 1,
		leaflet: e.leaflet
	}, null, 8, ["leaflet"])) : C("", !0), e.linkControlEnabled ? (m(), A(y, {
		key: 2,
		leaflet: e.leaflet
	}, null, 8, ["leaflet"])) : C("", !0), e.clockControlEnabled ? (m(), A(L, {
		key: 3,
		leaflet: e.leaflet
	}, null, 8, ["leaflet"])) : C("", !0), e.loginEnabled ? (m(), A(I, {
		key: 4,
		leaflet: e.leaflet
	}, null, 8, ["leaflet"])) : C("", !0), e.chatBoxEnabled ? (m(), A(U, {
		key: 5,
		leaflet: e.leaflet
	}, null, 8, ["leaflet"])) : C("", !0)], 64)) : C("", !0)], 16, hn), e.contextMenuEnabled && e.leaflet ? (m(), A(z, {
		key: 0,
		leaflet: e.leaflet
	}, null, 8, ["leaflet"])) : C("", !0)], 64)
}
var fn = P(un, [
	["render", gn],
	["__scopeId", "data-v-d68e1578"]
]);
let yn = document.getElementById("icon--cross"),
	Oe = document.getElementById("svg-sprite-component-wrap");
Oe || (Oe = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Oe.id = "svg-sprite-component-wrap", Oe.style.setProperty("display", "none"), document.body.appendChild(Oe));
if (!yn) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Oe.appendChild(e), 
	e.setAttribute("viewBox", "0 0 16 16"), 
	e.setAttribute("id", "icon--cross"), 
	e.setAttribute("fill", "none"), 
	e.innerHTML = '<path d="M1.70703 0.292969C1.31641 -0.0976562 0.683594 -0.0976562 0.292969 0.292969C-0.0976562 0.68335 -0.0976562 1.31665 0.292969 1.70703L6.58594 8L0.292969 14.293C-0.0976562 14.6833 -0.0976562 15.3167 0.292969 15.707C0.683594 16.0977 1.31641 16.0977 1.70703 15.707L8 9.41431L14.293 15.707C14.6836 16.0977 15.3164 16.0977 15.707 15.707C16.0977 15.3167 16.0977 14.6833 15.707 14.293L9.41406 8L15.707 1.70703C16.0977 1.31665 16.0977 0.68335 15.707 0.292969C15.3164 -0.0976562 14.6836 -0.0976562 14.293 0.292969L8 6.58569L1.70703 0.292969Z" fill="currentcolor"></path>'
}
const bn = T({
		name: "PlayerImage",
		components: {},
		props: {
			player: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _(),
				o = E(dt),
				a = d(() => typeof e.player == "string" ? e.player : e.player.name),
				r = d(() => t.state.components.players.showImages),
				i = d(() => t.state.components.players.imageUrl),
				n = async () => {
					if (o.value = dt, r.value) try {
						const s = await lo(e.player, "small");
						o.value = s.src
					} catch {}
				};
			return M(a, () => n()), M(i, () => n()), V(() => n()), {
				image: o
			}
		}
	}),
	vn = ["src"];

function wn(e, t, o, a, r, i) {
	return m(), b("img", {
		width: "16",
		height: "16",
		src: e.image,
		alt: ""
	}, null, 8, vn)
}
var Ot = P(bn, [
	["render", wn]
]);
const _n = T({
		name: "FollowTargetSection",
		components: {
			PlayerImage: Ot,
			SvgIcon: pe
		},
		props: {
			target: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => t.state.components.players.showImages),
				a = d(() => t.state.messages.followingHeading),
				r = d(() => t.state.messages.followingUnfollow),
				i = d(() => t.state.messages.followingTitleUnfollow),
				n = d(() => t.state.messages.followingHidden),
				s = d(() => {
					if (e.target.hidden) return n.value;
					const h = t.state.worlds.get(e.target.location.world || "");
					return h ? h.displayName : n.value
				}),
				l = d(() => e.target.hidden ? "" : `${Math.floor(e.target.location.x)}, ${e.target.location.y}, ${Math.floor(e.target.location.z)}`);
			return {
				imagesEnabled: o,
				unfollow: () => {
					t.commit(c.CLEAR_FOLLOW_TARGET, void 0)
				},
				heading: a,
				messageUnfollow: r,
				messageUnfollowTitle: i,
				messageHidden: n,
				status: s,
				location: l,
				copySuccess: oo(),
				copyError: ao()
			}
		}
	}),
	kn = {
		class: "sidebar__section following"
	},
	Sn = ["innerHTML"],
	Ln = {
		class: "target__status"
	},
	En = {
		class: "target__location"
	},
	An = ["title", "aria-label"];

function xn(e, t, o, a, r, i) {
	const n = w("PlayerImage"),
		s = w("SvgIcon"),
		l = Qt("clipboard");
	return m(), b("section", kn, [f("h2", null, x(e.heading), 1), f("div", {
		class: ie({
			following__target: !0,
			"following__target--hidden": e.target.hidden
		})
	}, [e.imagesEnabled ? (m(), A(n, {
		key: 0,
		player: e.target,
		class: "target__icon",
		width: "48",
		height: "48"
	}, null, 8, ["player"])) : C("", !0), f("span", {
		class: "target__name",
		innerHTML: e.target.displayName
	}, null, 8, Sn), f("span", Ln, x(e.status), 1), W((m(), b("span", En, [ce(x(e.location) + "\u2060", 1)])), [
		[l, e.location, "copy"],
		[l, e.copySuccess, "success"],
		[l, e.copyError, "error"]
	]), f("button", {
		class: "target__unfollow",
		type: "button",
		title: e.messageUnfollowTitle,
		onClick: t[0] || (t[0] = J((...p) => e.unfollow && e.unfollow(...p), ["prevent"])),
		"aria-label": e.messageUnfollow
	}, [Z(s, {
		name: "cross"
	})], 8, An)], 2)])
}
var Cn = P(_n, [
	["render", xn],
	["__scopeId", "data-v-20ac0cac"]
]);
let Tn = document.getElementById("icon--arrow"),
	De = document.getElementById("svg-sprite-component-wrap");
De || (De = document.createElementNS("http://www.w3.org/2000/svg", "svg"), De.id = "svg-sprite-component-wrap", De.style.setProperty("display", "none"), document.body.appendChild(De));
if (!Tn) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	De.appendChild(e), e.setAttribute("viewBox", "0 0 234.46 247.78"), e.setAttribute("id", "icon--arrow"), e.innerHTML = '<path d="M19.626 58.589a15.46 15.46 0 0 0-10.963 4.556l-1.165 1.164a15.47 15.47 0 0 0 0 21.925l98.421 98.421a15.436 15.436 0 0 0 11.312 4.537 15.435 15.435 0 0 0 11.31-4.537l98.42-98.42a15.47 15.47 0 0 0 0-21.926l-1.164-1.164a15.468 15.468 0 0 0-21.923 0L117.23 149.79 30.586 63.145a15.45 15.45 0 0 0-10.96-4.556z"></path>'
}
const Mn = T({
		name: "SidebarSection",
		components: {
			SvgIcon: pe
		},
		props: {
			name: {
				type: String,
				required: !0
			},
			collapsible: {
				type: Boolean,
				required: !1,
				default: !0
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => t.state.messages.toggleTitle),
				a = d(() => t.state.ui.sidebar[e.name].collapsed),
				r = d(() => t.state.ui.smallScreen);
			return {
				title: o,
				collapsed: a,
				smallScreen: r,
				toggle: () => {
					!e.collapsible || t.commit(c.TOGGLE_SIDEBAR_SECTION_COLLAPSED_STATE, e.name)
				}
			}
		}
	}),
	In = ["data-section"],
	zn = {
		class: "section__heading"
	},
	$n = ["id", "title", "aria-expanded", "aria-controls"],
	Un = ["id", "aria-hidden"];

function Pn(e, t, o, a, r, i) {
	const n = w("SvgIcon");
	return m(), b("section", {
		class: ie({
			sidebar__section: !0,
			"section--collapsible": e.collapsible,
			"section--collapsed": e.collapsed
		}),
		"data-section": e.name
	}, [f("h2", zn, [f("button", {
		id: `${e.name}-heading`,
		type: "button",
		onClick: t[0] || (t[0] = J((...s) => e.toggle && e.toggle(...s), ["prevent"])),
		title: e.title,
		"aria-expanded": !e.collapsed,
		"aria-controls": `${e.name}-content`
	}, [f("span", null, [Xe(e.$slots, "heading")]), e.collapsible ? (m(), A(n, {
		key: 0,
		name: "arrow"
	})) : C("", !0)], 8, $n)]), f("div", {
		id: `${e.name}-content`,
		class: "section__content",
		"aria-hidden": e.collapsed
	}, [Xe(e.$slots, "default")], 8, Un)], 10, In)
}
var _t = P(Mn, [
	["render", Pn]
]);
const Nn = T({
		name: "PlayerListItem",
		components: {
			PlayerImage: Ot
		},
		props: {
			player: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => t.state.components.players.showImages),
				a = d(() => t.state.components.players.grayHiddenPlayers && !e.player.hidden && (!t.state.currentWorld || t.state.currentWorld.name !== e.player.location.world)),
				r = d(() => e.player.hidden ? t.state.messages.playersTitleHidden : a.value ? t.state.messages.playersTitleOtherWorld : t.state.messages.playersTitle),
				i = d(() => {
					var h;
					return (h = t.state.followTarget) == null ? void 0 : h.name
				}),
				n = () => {
					e.player.hidden || t.commit(c.SET_VIEW_TARGET, {
						location: e.player.location
					})
				},
				s = () => t.commit(c.SET_FOLLOW_TARGET, e.player);
			return {
				imagesEnabled: o,
				title: r,
				otherWorld: a,
				followTarget: i,
				onInputClick: h => {
					h.preventDefault(), h.shiftKey ? s() : n()
				},
				onLabelClick: h => {
					h.shiftKey || h.detail === 2 ? s() : n()
				}
			}
		}
	}),
	Rn = ["id", "value"],
	On = ["for", "title"],
	Dn = ["innerHTML"];

function Bn(e, t, o, a, r, i) {
	const n = w("PlayerImage");
	return m(), b(O, null, [W(f("input", {
		id: `player-${e.player.name}`,
		type: "radio",
		name: "player",
		value: e.player.name,
		"onUpdate:modelValue": t[0] || (t[0] = s => e.followTarget = s),
		onClick: t[1] || (t[1] = J((...s) => e.onInputClick && e.onInputClick(...s), ["prevent"]))
	}, null, 8, Rn), [
		[ft, e.followTarget]
	]), f("label", {
		for: `player-${e.player.name}`,
		class: ie({
			player: !0,
			"player--hidden": !!e.player.hidden,
			"player--other-world": e.otherWorld
		}),
		title: e.title,
		onClick: t[2] || (t[2] = J((...s) => e.onLabelClick && e.onLabelClick(...s), ["prevent"]))
	}, [e.imagesEnabled ? (m(), A(n, {
		key: 0,
		player: e.player,
		width: "16",
		height: "16",
		class: "player__icon",
		"aria-hidden": "true"
	}, null, 8, ["player"])) : C("", !0), f("button", {
		class: "player__name",
		innerHTML: e.player.displayName
	}, null, 8, Dn)], 10, On)], 64)
}
var Hn = P(Nn, [
	["render", Bn],
	["__scopeId", "data-v-1f77067f"]
]);
const Wn = T({
	name: "RadioList",
	setup() {
		return {
			onKeydown: t => {
				wt(t, Array.from(t.currentTarget.elements))
			}
		}
	}
});

function Vn(e, t, o, a, r, i) {
	return m(), b("fieldset", {
		class: "menu",
		role: "radiogroup",
		onKeydown: t[0] || (t[0] = (...n) => e.onKeydown && e.onKeydown(...n))
	}, [Xe(e.$slots, "default")], 32)
}
var ot = P(Wn, [
	["render", Vn]
]);
const Zn = T({
		components: {
			RadioList: ot,
			PlayerListItem: Hn
		},
		props: {
			search: {
				type: Boolean,
				default: !0
			},
			players: {
				type: Object,
				required: !0
			},
			ariaLabelledby: {
				type: String,
				default: ""
			}
		},
		setup(e) {
			const t = _(),
				o = d(() => t.state.messages.playersSkeleton),
				a = d(() => t.state.messages.playersSearchSkeleton),
				r = d(() => t.state.messages.playersSearchPlaceholder),
				i = E(""),
				n = E(null),
				s = d(() => {
					const p = i.value.toLowerCase();
					return p ? e.players.filter(h => h.name.toLowerCase().indexOf(p) > -1) : e.players
				}),
				l = p => {
					p.stopImmediatePropagation()
				};
			return M(i, () => n.value.nextElementSibling.scrollIntoView()), {
				messageSkeletonPlayers: o,
				messageSkeletonPlayersSearch: a,
				messagePlayersSearchPlaceholder: r,
				searchQuery: i,
				searchInput: n,
				filteredPlayers: s,
				onKeydown: l
			}
		}
	}),
	jn = ["placeholder"],
	Fn = {
		key: 2,
		class: "section__skeleton"
	},
	Gn = {
		key: 3,
		class: "section__skeleton"
	};

function Yn(e, t, o, a, r, i) {
	const n = w("PlayerListItem"),
		s = w("RadioList");
	return m(), b(O, null, [e.filteredPlayers && e.search ? W((m(), b("input", {
		key: 0,
		ref: "searchInput",
		class: "section__search",
		type: "text",
		name: "search",
		"onUpdate:modelValue": t[0] || (t[0] = l => e.searchQuery = l),
		placeholder: e.messagePlayersSearchPlaceholder,
		onKeydown: t[1] || (t[1] = (...l) => e.onKeydown && e.onKeydown(...l))
	}, null, 40, jn)), [
		[re, e.searchQuery]
	]) : C("", !0), e.filteredPlayers.length ? (m(), A(s, {
		key: 1,
		"aria-labelledby": e.ariaLabelledby
	}, {
		default: j(() => [(m(!0), b(O, null, Q(e.filteredPlayers, l => (m(), A(n, {
			key: l.name,
			player: l
		}, null, 8, ["player"]))), 128))]),
		_: 1
	}, 8, ["aria-labelledby"])) : e.searchQuery ? (m(), b("div", Fn, x(e.messageSkeletonPlayersSearch), 1)) : (m(), b("div", Gn, x(e.messageSkeletonPlayers), 1))], 64)
}
var Kn = P(Zn, [
	["render", Yn]
]);
const qn = T({
	components: {
		PlayerList: Kn,
		SidebarSection: _t
	},
	setup() {
		const e = _(),
			t = d(() => e.getters.playersHeading),
			o = d(() => e.state.ui.playersSearch),
			a = d(() => e.state.sortedPlayers),
			r = d(() => e.state.maxPlayers || 0);
		return {
			messageHeading: t,
			searchEnabled: o,
			players: a,
			maxPlayers: r
		}
	}
});

function Qn(e, t, o, a, r, i) {
	const n = w("PlayerList"),
		s = w("SidebarSection");
	return m(), A(s, {
		name: "players",
		class: "players"
	}, {
		heading: j(() => [ce(x(e.messageHeading), 1)]),
		default: j(() => [Z(n, {
			players: e.players,
			search: e.searchEnabled,
			"aria-labelledby": "players-heading"
		}, null, 8, ["players", "search"])]),
		_: 1
	})
}
var Jn = P(qn, [
	["render", Qn],
	["__scopeId", "data-v-4f945470"]
]);
const Xn = T({
		name: "ServerListItem",
		props: {
			server: {
				type: Object,
				required: !0
			}
		},
		setup() {
			const e = _();
			return {
				currentServer: d({
					get: () => e.state.currentServer ? e.state.currentServer.id : void 0,
					set: o => o && e.commit(c.SET_CURRENT_SERVER, o)
				})
			}
		}
	}),
	ei = ["id", "value"],
	ti = ["for"];

function oi(e, t, o, a, r, i) {
	return m(), b(O, null, [W(f("input", {
		id: `server-${e.server.id}`,
		type: "radio",
		name: "server",
		value: e.server.id,
		"onUpdate:modelValue": t[0] || (t[0] = n => e.currentServer = n)
	}, null, 8, ei), [
		[ft, e.currentServer]
	]), f("label", {
		for: `server-${e.server.id}`
	}, x(e.server.label || e.server.id), 9, ti)], 64)
}
var ai = P(Xn, [
	["render", oi]
]);
const ri = T({
	name: "ServerList",
	components: {
		RadioList: ot,
		ServerListItem: ai
	},
	props: {
		servers: {
			type: Object,
			required: !0
		}
	}
});

function ni(e, t, o, a, r, i) {
	const n = w("ServerListItem"),
		s = w("RadioList");
	return m(), A(s, {
		"aria-labelledby": "servers-heading"
	}, {
		default: j(() => [(m(!0), b(O, null, Q(e.servers, ([l, p]) => (m(), A(n, {
			server: p,
			key: l
		}, null, 8, ["server"]))), 128))]),
		_: 1
	})
}
var ii = P(ri, [
	["render", ni]
]);
const si = T({
	name: "ServersSection",
	components: {
		ServerList: ii,
		SidebarSection: _t
	},
	setup() {
		const e = _(),
			t = d(() => e.state.messages.serversHeading),
			o = d(() => e.state.servers);
		return {
			heading: t,
			servers: o
		}
	}
});

function li(e, t, o, a, r, i) {
	const n = w("ServerList"),
		s = w("SidebarSection");
	return e.servers.size > 1 ? (m(), A(s, {
		key: 0,
		name: "servers"
	}, {
		heading: j(() => [ce(x(e.heading), 1)]),
		default: j(() => [Z(n, {
			servers: e.servers,
			"aria-labelledby": "servers-heading"
		}, null, 8, ["servers"])]),
		_: 1
	})) : C("", !0)
}
var di = P(si, [
	["render", li]
]);
const ci = T({
	name: "WorldList",
	components: {
		RadioList: ot,
		WorldListItem: Mo
	},
	props: {
		prefix: {
			type: String,
			default: "map"
		},
		worlds: {
			type: Object,
			required: !0
		}
	},
	setup() {
		const e = _();
		return {
			currentServer: d(() => e.state.currentServer ? e.state.currentServer.id : void 0)
		}
	}
});

function mi(e, t, o, a, r, i) {
	const n = w("WorldListItem"),
		s = w("RadioList");
	return e.worlds.size ? (m(), A(s, {
		key: 0,
		"aria-labelledby": "maps-heading"
	}, {
		default: j(() => [(m(!0), b(O, null, Q(e.worlds, ([l, p]) => (m(), A(n, {
			world: p,
			key: `${e.prefix}_${e.currentServer}_${l}`
		}, null, 8, ["world"]))), 128))]),
		_: 1
	})) : C("", !0)
}
var pi = P(ci, [
	["render", mi]
]);
const ui = T({
		name: "WorldsSection",
		components: {
			WorldList: pi,
			SidebarSection: _t
		},
		props: {
			prefix: {
				type: String,
				default: "map"
			}
		},
		setup() {
			const e = _(),
				t = d(() => e.state.messages.worldsHeading),
				o = d(() => e.state.messages.worldsSkeleton),
				a = d(() => e.state.worlds),
				r = d(() => e.state.currentServer ? e.state.currentServer.id : void 0);
			return {
				heading: t,
				skeleton: o,
				worlds: a,
				currentServer: r
			}
		}
	}),
	hi = {
		key: 1,
		class: "section__skeleton"
	};

function gi(e, t, o, a, r, i) {
	const n = w("WorldList"),
		s = w("SidebarSection");
	return m(), A(s, {
		name: "maps"
	}, {
		heading: j(() => [ce(x(e.heading), 1)]),
		default: j(() => [e.worlds.size ? (m(), A(n, {
			key: 0,
			worlds: e.worlds,
			prefix: e.prefix,
			"aria-labelledby": "maps-heading"
		}, null, 8, ["worlds", "prefix"])) : (m(), b("div", hi, x(e.skeleton), 1))]),
		_: 1
	})
}
var fi = P(ui, [
	["render", gi]
]);
let yi = document.getElementById("icon--marker_point"),
	Be = document.getElementById("svg-sprite-component-wrap");
Be || (Be = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Be.id = "svg-sprite-component-wrap", Be.style.setProperty("display", "none"), document.body.appendChild(Be));
if (!yi) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Be.appendChild(e), e.setAttribute("viewBox", "0 0 286.89162 286.89163"), e.setAttribute("id", "icon--marker_point"), e.innerHTML = `
   <path transform="translate(-59.399373,-0.17905527)" d="m 202.21483,0.17905527 c -49.2926,0 -89.25212,39.95956873 -89.25212,89.25210973 0,49.292555 82.37686,197.611115 89.25212,197.611115 7.99783,0 89.25211,-148.31856 89.25211,-197.611115 0,-49.292541 -39.95957,-89.25210973 -89.25211,-89.25210973 z m 0,51.39320173 c 20.91016,-0.0011 37.86223,16.948751 37.86389,37.858908 0.001,20.912125 -16.95177,37.865025 -37.86389,37.863935 -20.91214,0.001 -37.86506,-16.9518 -37.86394,-37.863935 0.002,-20.910176 16.95376,-37.86003 37.86394,-37.858908 z"></path>
`
}
let bi = document.getElementById("icon--marker_line"),
	He = document.getElementById("svg-sprite-component-wrap");
He || (He = document.createElementNS("http://www.w3.org/2000/svg", "svg"), He.id = "svg-sprite-component-wrap", He.style.setProperty("display", "none"), document.body.appendChild(He));
if (!bi) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	He.appendChild(e), e.setAttribute("viewBox", "0 0 286.89 286.89"), e.setAttribute("id", "icon--marker_line"), e.innerHTML = '<path d="m138.25 1.7383a8.5 8.5 0 0 0-6.125 2.1953l-115.74 105.05a8.5008 8.5008 0 0 0 2.084 13.98l222.54 105.04-84.184 41.338a8.5 8.5 0 0 0-3.8848 11.377 8.5 8.5 0 0 0 11.377 3.8828l100.03-49.119a8.5008 8.5008 0 0 0-0.11718-15.316l-227-107.15 106.32-96.5a8.5 8.5 0 0 0 0.58204-12.006 8.5 8.5 0 0 0-5.8828-2.7773z"></path>'
}
let vi = document.getElementById("icon--marker_area"),
	We = document.getElementById("svg-sprite-component-wrap");
We || (We = document.createElementNS("http://www.w3.org/2000/svg", "svg"), We.id = "svg-sprite-component-wrap", We.style.setProperty("display", "none"), document.body.appendChild(We));
if (!vi) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	We.appendChild(e), e.setAttribute("viewBox", "0 0 286.89 286.89"), e.setAttribute("id", "icon--marker_area"), e.innerHTML = '<path d="m80.789 0.381-78.122 110.68s84.697 175.47 87.791 173.92c3.094-1.5426 194.15-35.093 194.15-35.093l-23.978-169.3z"></path>'
}
let wi = document.getElementById("icon--marker_circle"),
	Ve = document.getElementById("svg-sprite-component-wrap");
Ve || (Ve = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Ve.id = "svg-sprite-component-wrap", Ve.style.setProperty("display", "none"), document.body.appendChild(Ve));
if (!wi) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Ve.appendChild(e), e.setAttribute("viewBox", "0 0 286.89 286.89"), e.setAttribute("id", "icon--marker_circle"), e.innerHTML = '<circle cx="142.68" cy="143.06" r="137.35"></circle>'
}
const _i = T({
		name: "MarkerListItem",
		components: {
			SvgIcon: pe
		},
		props: {
			id: {
				type: String,
				required: !0
			},
			marker: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = Ho(),
				o = d(() => t.state.messages.markersUnnamed),
				a = d(() => ({
					x: Math.round(e.marker.location.x),
					z: Math.round(e.marker.location.z)
				})),
				r = d(() => {
					if ("iconUrl" in e.marker) return e.marker.iconUrl
				}),
				i = d(() => {
					switch (e.marker.type) {
						case D.POINT:
							return "marker_point";
						case D.AREA:
							return "marker_area";
						case D.LINE:
							return "marker_line";
						case D.CIRCLE:
							return "marker_circle"
					}
				});
			return {
				icon: r,
				defaultIcon: i,
				messageUnnamed: o,
				pan: () => {
					e.marker.type === D.POINT ? t.commit(c.SET_VIEW_TARGET, {
						location: e.marker.location
					}) : t.commit(c.SET_VIEW_TARGET, {
						location: e.marker.bounds,
						options: {
							padding: [10, 10]
						}
					})
				},
				location: a
			}
		}
	}),
	ki = ["id", "value"],
	Si = ["for", "title"],
	Li = ["src"],
	Ei = {
		class: "marker__label"
	},
	Ai = {
		class: "marker__location"
	};

function xi(e, t, o, a, r, i) {
	const n = w("SvgIcon");
	return m(), b(O, null, [f("input", {
		id: `marker-${e.id}`,
		type: "radio",
		name: "marker",
		value: e.id,
		onClick: t[0] || (t[0] = J((...s) => e.pan && e.pan(...s), ["prevent"]))
	}, null, 8, ki), f("label", {
		for: `marker-${e.id}`,
		class: "marker",
		title: e.marker.tooltip,
		onClick: t[1] || (t[1] = J((...s) => e.pan && e.pan(...s), ["prevent"]))
	}, [e.icon ? (m(), b("img", {
		key: 0,
		width: "16",
		height: "16",
		class: "marker__icon",
		src: e.icon,
		alt: ""
	}, null, 8, Li)) : (m(), A(n, {
		key: 1,
		name: e.defaultIcon,
		class: "marker__icon"
	}, null, 8, ["name"])), f("span", Ei, x(e.marker.tooltip || e.messageUnnamed), 1), f("span", Ai, "X: " + x(e.location.x) + ", Z: " + x(e.location.z), 1)], 8, Si)], 64)
}
var Ci = P(_i, [
	["render", xi],
	["__scopeId", "data-v-3a029710"]
]);
const Ti = T({
		name: "MarkerList",
		components: {
			MarkerListItem: Ci,
			RadioList: ot
		},
		props: {
			markerSet: {
				type: Object,
				required: !0
			},
			search: {
				type: Boolean,
				default: !0
			}
		},
		setup(e) {
			let t = 0;
			const o = _(),
				a = d(() => o.state.messages.showMore),
				r = d(() => o.state.messages.markersSearchPlaceholder),
				i = d(() => o.state.messages.markersSearchSkeleton),
				n = d(() => o.state.messages.markersSetSkeleton),
				s = Y.markers.get(e.markerSet.id),
				l = E(""),
				p = E(new Map),
				h = E(null),
				g = E(0),
				y = E(0),
				L = E(50),
				I = E(null),
				U = v => {
					v.key === "f" && v.ctrlKey && (v.preventDefault(), I.value.focus())
				},
				z = () => {
					if (p.value.clear(), !s) return;
					y.value = s.size;
					let v = 0;
					s.forEach((H, B) => {
						l.value && !H.tooltip.toLowerCase().includes(l.value) || (v++, v < L.value && p.value.set(B, Vo(H)))
					}), g.value = v
				},
				S = () => {
					const v = h.value.previousElementSibling;
					L.value += 50, t = requestAnimationFrame(() => v.nextElementSibling.focus())
				},
				$ = v => {
					y.value = s.size, v.removed || l.value && !v.payload.tooltip.toLowerCase().includes(l.value) ? p.value.delete(v.id) : (p.value.has(v.id) || p.value.size < L.value) && p.value.set(v.id, v.payload)
				},
				k = v => {
					l.value = v.target.value.toLowerCase()
				},
				N = Wo(() => {
					L.value = 50, z(), I.value.nextElementSibling.scrollIntoView()
				}, 100);
			return z(), M(L, () => z()), M(l, () => N()), V(() => _o($, e.markerSet.id)), F(() => {
				t && cancelAnimationFrame(t), N.cancel(), ko($, e.markerSet.id)
			}), {
				messageShowMore: a,
				messageMarkersSearchPlaceholder: r,
				messageSkeletonMarkersSearch: i,
				messageSkeletonMarkers: n,
				searchQuery: l,
				markers: p,
				showMoreButton: h,
				viewLimit: L,
				total: g,
				unfilteredTotal: y,
				searchInput: I,
				showMore: S,
				onListKeydown: U,
				onSearchInput: k
			}
		}
	}),
	Mi = ["value", "placeholder"];

function Ii(e, t, o, a, r, i) {
	const n = w("MarkerListItem"),
		s = w("RadioList");
	return m(), b(O, null, [e.search && e.unfilteredTotal ? (m(), b("input", {
		key: 0,
		ref: "searchInput",
		id: "markers__search",
		class: "section__search",
		type: "text",
		name: "search",
		value: e.searchQuery,
		placeholder: e.messageMarkersSearchPlaceholder,
		onKeydown: t[0] || (t[0] = l => l.stopImmediatePropagation()),
		onInput: t[1] || (t[1] = (...l) => e.onSearchInput && e.onSearchInput(...l))
	}, null, 40, Mi)) : C("", !0), e.markers.size ? (m(), A(s, nt({
		key: 1
	}, e.$attrs, {
		onKeydown: e.onListKeydown
	}), {
		default: j(() => [(m(!0), b(O, null, Q(e.markers, ([l, p]) => (m(), A(n, {
			key: l,
			marker: p,
			id: l
		}, null, 8, ["marker", "id"]))), 128)), e.viewLimit < e.total ? (m(), b("button", {
			key: 0,
			type: "button",
			ref: "showMoreButton",
			onClick: t[2] || (t[2] = J((...l) => e.showMore && e.showMore(...l), ["prevent"]))
		}, x(e.messageShowMore), 513)) : C("", !0)]),
		_: 1
	}, 16, ["onKeydown"])) : e.searchQuery ? (m(), b("div", nt({
		key: 2,
		class: "section__skeleton"
	}, e.$attrs), x(e.messageSkeletonMarkersSearch), 17)) : (m(), b("div", nt({
		key: 3,
		class: "section__skeleton"
	}, e.$attrs), x(e.messageSkeletonMarkers), 17))], 64)
}
var zi = P(Ti, [
	["render", Ii]
]);
const $i = T({
		name: "MarkerSetList",
		components: {
			SvgIcon: pe,
			MarkerList: zi,
			RadioList: ot
		},
		props: {
			markerSets: {
				type: Object,
				required: !0
			},
			ariaLabelledby: {
				type: String,
				default: ""
			}
		},
		setup(e) {
			const t = E(new Map),
				o = E(void 0),
				a = E(null),
				r = E(null),
				i = E(null),
				n = () => {
					var g;
					(g = e.markerSets) == null || g.forEach(y => s(y))
				},
				s = g => {
					const y = Y.markers.get(g.id),
						L = y ? y.size : 0;
					t.value.set(g, L)
				},
				l = g => {
					s(e.markerSets.get(g.set))
				},
				p = g => {
					g.key === "Backspace" && (o.value = void 0, g.preventDefault())
				},
				h = (g, y) => {
					let L;
					g ? L = r.value.parentNode.querySelector(".menu input") || i.value : y && (L = a.value.$el.parentNode.querySelector(`[id="marker-set-${y.id}"]`)), L && L.focus()
				};
			return M(e.markerSets, () => n()), M(o, (g, y) => te(() => h(g, y))), V(() => {
				n(), Aa(l)
			}), F(() => {
				xa(l)
			}), {
				markerCounts: t,
				currentSet: o,
				list: a,
				subHeader: r,
				backButton: i,
				onSubmenuKeydown: p
			}
		}
	}),
	Ui = ["id", "value"],
	Pi = ["for"],
	Ni = {
		ref: "subHeader",
		class: "markers__header"
	},
	Ri = {
		class: "markers__set"
	};

function Oi(e, t, o, a, r, i) {
	const n = w("RadioList"),
		s = w("SvgIcon"),
		l = w("MarkerList");
	return e.currentSet ? (m(), b(O, {
		key: 1
	}, [f("div", Ni, [f("button", {
		ref: "backButton",
		class: "markers__back",
		onClick: t[1] || (t[1] = J(p => e.currentSet = void 0, ["prevent"]))
	}, [Z(s, {
		name: "arrow"
	})], 512), f("h3", Ri, x(e.currentSet.label), 1)], 512), Z(l, {
		ref: "submenu",
		"marker-set": e.currentSet,
		onKeydown: e.onSubmenuKeydown
	}, null, 8, ["marker-set", "onKeydown"])], 64)) : (m(), A(n, {
		key: 0,
		ref: "list",
		"aria-labelledby": e.ariaLabelledby
	}, {
		default: j(() => [(m(!0), b(O, null, Q(e.markerSets, ([p, h]) => (m(), b(O, {
			key: p
		}, [W(f("input", {
			id: `marker-set-${p}`,
			type: "radio",
			name: "marker-set",
			"onUpdate:modelValue": t[0] || (t[0] = g => e.currentSet = g),
			value: h
		}, null, 8, Ui), [
			[ft, e.currentSet]
		]), f("label", {
			for: `marker-set-${p}`
		}, [f("span", null, x(h.label || p), 1), f("span", null, x(e.markerCounts.get(h)) + " Marker(s)", 1)], 8, Pi)], 64))), 128))]),
		_: 1
	}, 8, ["aria-labelledby"]))
}
var Di = P($i, [
	["render", Oi],
	["__scopeId", "data-v-1a038d7e"]
]);
const Bi = T({
	name: "MarkersSection",
	components: {
		MarkerSetList: Di,
		SidebarSection: _t
	},
	setup() {
		const e = _(),
			t = d(() => e.state.messages.markersHeading),
			o = d(() => e.state.markerSets);
		return {
			heading: t,
			markerSets: o
		}
	}
});

function Hi(e, t, o, a, r, i) {
	const n = w("MarkerSetList"),
		s = w("SidebarSection");
	return e.markerSets.size ? (m(), A(s, {
		key: 0,
		name: "markers",
		class: "markers"
	}, {
		heading: j(() => [ce(x(e.heading), 1)]),
		default: j(() => [Z(n, {
			markerSets: e.markerSets,
			"aria-labelledby": "markers-heading"
		}, null, 8, ["markerSets"])]),
		_: 1
	})) : C("", !0)
}
var Wi = P(Bi, [
	["render", Hi],
	["__scopeId", "data-v-c7f0f58c"]
]);

let Vi = document.getElementById("icon--players"),
	Ze = document.getElementById("svg-sprite-component-wrap");
Ze || (Ze = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    Ze.id = "svg-sprite-component-wrap",
    Ze.style.setProperty("display", "none"),
    document.body.appendChild(Ze));
if (!Vi) {
    let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
    Ze.appendChild(e),
        e.setAttribute("viewBox", "0 0 23 22"),
        e.setAttribute("fill", "none"),
        e.setAttribute("id", "icon--players"),
        e.innerHTML = `
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 8.00048C10.0878 9.21465 8.6356 10 7 10C4.23858 10 2 7.76142 2 5C2 2.23858 4.23858 0 7 0C9.76142 0 12 2.23858 12 5C12 5.12427 11.9955 5.24749 11.9866 5.36949C11.9831 5.41692 11.979 5.46417 11.9742 5.51122C11.8799 6.43958 11.5317 7.29286 11 8.00048ZM10 5C10 6.65685 8.65685 8 7 8C5.34315 8 4 6.65685 4 5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5Z" fill="currentcolor"></path>
<path d="M14 5C14 5.46166 13.9553 5.91288 13.87 6.34958C14.1915 6.12904 14.5807 6 15 6C16.1046 6 17 6.89543 17 8C17 9.10457 16.1046 10 15 10C14.0683 10 13.2854 9.36292 13.0632 8.50062C12.6909 9.14398 12.2192 9.7226 11.6691 10.2154C12.386 11.2912 13.6102 12 15 12C17.2091 12 19 10.2091 19 8C19 5.79086 17.2091 4 15 4C14.6358 4 14.283 4.04867 13.9477 4.13986C13.9822 4.42174 14 4.70879 14 5Z" fill="currentcolor"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C2.68629 12 0 14.6863 0 18V20C0 21.1046 0.89543 22 2 22H12C13.1046 22 14 21.1046 14 20V18C14 14.6863 11.3137 12 8 12H6ZM6 14C3.79086 14 2 15.7909 2 18L2 20H12V18C12 15.7909 10.2091 14 8 14H6Z" fill="currentcolor"></path>
<path d="M17.0016 16H15.8641C15.6789 15.2897 15.3975 14.6184 15.0352 14H17.0016C19.763 14 22.0016 16.2386 22.0016 19V20C22.0016 21.1046 21.1062 22 20.0016 22H15.5842C15.9246 21.4117 16.1194 20.7286 16.1194 20H20.0016V19C20.0016 17.3431 18.6585 16 17.0016 16Z" fill="currentcolor"></path>
`
}

let Zi = document.getElementById("icon--maps"),
	je = document.getElementById("svg-sprite-component-wrap");
je || (je = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
	je.id = "svg-sprite-component-wrap",
    je.style.setProperty("display", "none"),
    document.body.appendChild(je));
if (!Zi) {
    let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
    je.appendChild(e),
        e.setAttribute("viewBox", "0 0 22 22"),
        e.setAttribute("fill", "none"),
        e.setAttribute("id", "icon--maps"),
        e.innerHTML = `
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7668 5.61367L8.78073 7.71398C8.29953 7.91668 7.91669 8.29953 7.71399 8.78072L5.61367 13.7668C4.91748 15.4195 6.58049 17.0825 8.23322 16.3863L13.2193 14.286C13.7005 14.0833 14.0833 13.7005 14.286 13.2193L16.3863 8.23321C17.0825 6.58049 15.4195 4.91748 13.7668 5.61367ZM14.5432 7.45681L12.4429 12.4429L7.45682 14.5432L9.55713 9.55713L14.5432 7.45681Z" fill="currentcolor"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20Z" fill="currentcolor"></path>
`
}


let ji = document.getElementById("icon--servers"),
	Fe = document.getElementById("svg-sprite-component-wrap");
Fe || (Fe = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Fe.id = "svg-sprite-component-wrap", Fe.style.setProperty("display", "none"), document.body.appendChild(Fe));
if (!ji) {
	let e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	Fe.appendChild(e), e.setAttribute("viewBox", "0 0 228.1 227.44"), e.setAttribute("id", "icon--servers"), e.innerHTML = '<g stroke-linecap="round" stroke-linejoin="bevel" stroke-width="30"><path d="M107.55 182.2v9.215h-.318a4.671 4.671 0 0 0-4.681 4.682v6.895h-.897a4.672 4.672 0 0 0-4.682 4.683v13.635a4.672 4.672 0 0 0 4.682 4.683h24.791a4.672 4.672 0 0 0 4.682-4.683v-13.635a4.672 4.672 0 0 0-4.682-4.683h-.895v-6.895a4.671 4.671 0 0 0-4.682-4.682h-.317V182.2zM11.637 0A11.611 11.611 0 0 0 0 11.637v30.895c0 6.447 5.19 11.637 11.637 11.637h204.82c6.447 0 11.638-5.19 11.638-11.637V11.637A11.613 11.613 0 0 0 216.457 0zm7.207 16.748h65.322a4.432 4.432 0 0 1 4.441 4.441V32.98a4.432 4.432 0 0 1-4.441 4.442H18.844a4.43 4.43 0 0 1-4.44-4.442V21.19a4.43 4.43 0 0 1 4.44-4.442zm184.49 0a10.336 10.336 0 0 1 10.337 10.337 10.336 10.336 0 0 1-10.337 10.336 10.336 10.336 0 0 1-10.336-10.336 10.336 10.336 0 0 1 10.336-10.337zM11.637 61.5A11.611 11.611 0 0 0 0 73.137v30.895c0 6.447 5.19 11.637 11.637 11.637h204.82c6.447 0 11.638-5.19 11.638-11.637V73.137A11.613 11.613 0 0 0 216.457 61.5zm7.207 16.748h65.322a4.432 4.432 0 0 1 4.441 4.441V94.48a4.432 4.432 0 0 1-4.441 4.442H18.844a4.43 4.43 0 0 1-4.44-4.442V82.69a4.43 4.43 0 0 1 4.44-4.442zm184.49 0a10.336 10.336 0 0 1 10.337 10.337 10.336 10.336 0 0 1-10.337 10.336 10.336 10.336 0 0 1-10.336-10.336 10.336 10.336 0 0 1 10.336-10.337zM11.637 123A11.612 11.612 0 0 0 0 134.637v30.895c0 6.447 5.19 11.637 11.637 11.637h204.82c6.447 0 11.638-5.19 11.638-11.637v-30.895A11.613 11.613 0 0 0 216.457 123zm7.207 16.748h65.322a4.432 4.432 0 0 1 4.441 4.441v11.791a4.432 4.432 0 0 1-4.441 4.442H18.844a4.43 4.43 0 0 1-4.44-4.442v-11.79a4.43 4.43 0 0 1 4.44-4.442zm184.49 0a10.336 10.336 0 0 1 10.337 10.337 10.336 10.336 0 0 1-10.337 10.336 10.336 10.336 0 0 1-10.336-10.336 10.336 10.336 0 0 1 10.336-10.337zM26.084 202.03a12.708 12.708 0 0 0-12.708 12.708 12.708 12.708 0 0 0 12.708 12.708 12.708 12.708 0 0 0 10.806-6.061h56v-13H37.087a12.708 12.708 0 0 0-11.002-6.353zm175.93 0a12.708 12.708 0 0 0-10.982 6.353h-55.824v13h56a12.708 12.708 0 0 0 10.806 6.061 12.708 12.708 0 0 0 12.708-12.707 12.708 12.708 0 0 0-12.708-12.708z"></path></g>'
}
const Fi = T({
		components: {
			MarkersSection: Wi,
			WorldsSection: fi,
			ServersSection: di,
			PlayersSection: Jn,
			FollowTargetSection: Cn,
			SvgIcon: pe
		},
		setup() {
			const e = _(),
				t = E(null),
				o = d(() => e.state.firstLoad),
				a = d(() => e.state.ui.visibleElements),
				r = d(() => e.state.ui.previouslyVisibleElements),
				i = d(() => e.state.ui.smallScreen),
				n = d(() => e.state.maps.size),
				s = d(() => e.state.servers.size),
				l = d(() => e.state.followTarget),
				p = d(() => e.state.messages.worldsHeading),
				h = d(() => e.state.messages.serversHeading),
				g = d(() => e.state.messages.markersHeading),
				y = d(() => e.getters.playersHeading),
				L = d(() => e.getters.markerUIEnabled),
				I = d(() => e.getters.playerMarkersEnabled),
				U = d(() => a.value.has("players")),
				z = d(() => a.value.has("maps")),
				S = d(() => a.value.has("markers")),
				$ = d(() => !i.value && l.value || i.value && U.value),
				k = B => {
					if (!B.target || !B.target.matches(".section__heading button")) return;
					const q = Array.from(t.value.querySelectorAll(".sidebar__section:not([hidden]) .section__heading button"));
					wt(B, q)
				},
				N = B => {
					const q = B.target.dataset.section;
					B.key === "ArrowDown" && q && (a.value.has(q) ? H(q) : e.commit(c.SET_UI_ELEMENT_VISIBILITY, {
						element: q,
						state: !0
					}))
				},
				v = B => {
					const q = B.target.dataset.section;
					q && e.commit(c.TOGGLE_UI_ELEMENT_VISIBILITY, q)
				},
				H = B => ra(`[data-section=${B}] .section__heading button`);
			return M(U, B => B && !o.value && te(() => H("players"))), M(z, B => B && !o.value && te(() => H("maps"))), M(S, B => B && !o.value && te(() => H("markers"))), {
				sidebar: t,
				mapCount: n,
				serverCount: s,
				following: l,
				messageWorlds: p,
				messageServers: h,
				messageMarkers: g,
				messagePlayers: y,
				previouslyVisible: r,
				playersVisible: U,
				mapsVisible: z,
				markersVisible: S,
				followVisible: $,
				playerMakersEnabled: I,
				markerUIEnabled: L,
				handleSidebarKeydown: k,
				handleSectionKeydown: N,
				handleSectionClick: v
			}
		}
	}),
	Gi = {
		class: "sidebar",
		role: "none",
		ref: "sidebar"
	},
	Yi = {
		class: "sidebar__buttons"
	},
	Ki = ["title", "aria-label", "aria-expanded"],
	qi = ["title", "aria-label", "aria-expanded"],
	Qi = ["title", "aria-label", "aria-expanded"];

function Ji(e, t, o, a, r, i) {
	const n = w("SvgIcon"),
		s = w("ServersSection"),
		l = w("WorldsSection"),
		p = w("MarkersSection"),
		h = w("PlayersSection"),
		g = w("FollowTargetSection");
	return m(), b("section", Gi, [f("header", Yi, [e.mapCount > 1 || e.serverCount > 1 ? (m(), b("button", {
		key: 0,
		class: "button--maps",
		"data-section": "maps",
		title: e.mapCount > 1 ? e.messageWorlds : e.messageServers,
		"aria-label": e.mapCount > 1 ? e.messageWorlds : e.messageServers,
		"aria-expanded": e.mapsVisible,
		onClick: t[0] || (t[0] = (...y) => e.handleSectionClick && e.handleSectionClick(...y)),
		onKeydown: t[1] || (t[1] = (...y) => e.handleSectionKeydown && e.handleSectionKeydown(...y))
	}, [Z(n, {
		name: e.mapCount > 1 ? "maps" : "servers"
	}, null, 8, ["name"])], 40, Ki)) : C("", !0), e.markerUIEnabled ? (m(), b("button", {
		key: 1,
		class: "button--markers",
		"data-section": "markers",
		title: e.messageMarkers,
		"aria-label": e.messageMarkers,
		"aria-expanded": e.markersVisible,
		onClick: t[2] || (t[2] = (...y) => e.handleSectionClick && e.handleSectionClick(...y)),
		onKeydown: t[3] || (t[3] = (...y) => e.handleSectionKeydown && e.handleSectionKeydown(...y))
	}, [Z(n, {
		name: "marker_point"
	})], 40, qi)) : C("", !0), e.playerMakersEnabled ? (m(), b("button", {
		key: 2,
		class: "button--players",
		"data-section": "players",
		title: e.messagePlayers,
		"aria-label": e.messagePlayers,
		"aria-expanded": e.playersVisible,
		onClick: t[4] || (t[4] = (...y) => e.handleSectionClick && e.handleSectionClick(...y)),
		onKeydown: t[5] || (t[5] = (...y) => e.handleSectionKeydown && e.handleSectionKeydown(...y))
	}, [Z(n, {
		name: "players"
	})], 40, Qi)) : C("", !0)]), f("div", {
		class: "sidebar__content",
		onKeydown: t[6] || (t[6] = (...y) => e.handleSidebarKeydown && e.handleSidebarKeydown(...y))
	}, [e.serverCount > 1 ? (m(), A(s, {
		key: 0,
		hidden: !e.mapsVisible
	}, null, 8, ["hidden"])) : C("", !0), e.mapCount > 1 ? (m(), A(l, {
		key: 1,
		hidden: !e.mapsVisible
	}, null, 8, ["hidden"])) : C("", !0), e.previouslyVisible.has("markers") ? (m(), A(p, {
		key: 2,
		hidden: !e.markersVisible
	}, null, 8, ["hidden"])) : C("", !0), e.playerMakersEnabled && e.previouslyVisible.has("players") ? (m(), A(h, {
		key: 3,
		hidden: !e.playersVisible
	}, null, 8, ["hidden"])) : C("", !0), e.following ? (m(), A(g, {
		key: 4,
		hidden: !e.followVisible,
		target: e.following
	}, null, 8, ["hidden", "target"])) : C("", !0)], 32)], 512)
}
var Xi = P(Fi, [
	["render", Ji]
]);
const es = T({
		components: {
			PlayerImage: Ot
		},
		props: {
			message: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const t = _();
			let o = d(() => {
					var n;
					return ((n = t.state.components.chatBox) == null ? void 0 : n.showPlayerFaces) && e.message.playerAccount
				}),
				a = d(() => e.message.playerName && e.message.type === "chat"),
				r = d(() => e.message.type === "chat" ? e.message.channel : void 0),
				i = d(() => {
					switch (e.message.type) {
						case "chat":
							return e.message.message;
						case "playerjoin":
							return e.message.playerName ? t.state.messages.chatPlayerJoin.replace("%playername%", e.message.playerName) : t.state.messages.chatAnonymousJoin;
						case "playerleave":
							return e.message.playerName ? t.state.messages.chatPlayerQuit.replace("%playername%", e.message.playerName) : t.state.messages.chatAnonymousQuit
					}
				});
			return {
				showFace: o,
				showSender: a,
				messageChannel: r,
				messageContent: i
			}
		}
	}),
	ts = ["innerHTML"],
	os = ["innerHTML"],
	as = ["innerHTML"];

function rs(e, t, o, a, r, i) {
	const n = w("PlayerImage");
	return m(), b("li", {
		class: ie(`message message--${e.message.type}`)
	}, [e.showFace && e.message.playerAccount ? (m(), A(n, {
		key: 0,
		player: e.message.playerAccount,
		width: "32",
		height: "32",
		class: "message__face"
	}, null, 8, ["player"])) : C("", !0), e.messageChannel ? (m(), b("span", {
		key: 1,
		class: "message__channel",
		innerHTML: e.messageChannel
	}, null, 8, ts)) : C("", !0), e.showSender ? (m(), b("span", {
		key: 2,
		class: "message__sender",
		innerHTML: e.message.playerName
	}, null, 8, os)) : C("", !0), f("span", {
		class: "message__content",
		innerHTML: e.messageContent
	}, null, 8, as)], 2)
}
var ns = P(es, [
	["render", rs]
]);
const is = T({
		components: {
			ChatMessage: ns
		},
		setup() {
			const e = _(),
				t = d(() => e.state.components.chatBox),
				o = d(() => e.state.ui.visibleElements.has("chat")),
				a = d(() => e.state.components.chatSending && e.state.components.chatSending.loginRequired && !e.state.loggedIn),
				r = d(() => e.state.components.chatSending && !a.value),
				i = d(() => {
					var S;
					return (S = e.state.components.chatSending) == null ? void 0 : S.maxLength
				}),
				n = E(null),
				s = E(""),
				l = E(!1),
				p = E(null),
				h = d(() => t.value.messageHistory ? e.state.chat.messages.slice(0, t.value.messageHistory) : e.state.chat.messages),
				g = d(() => e.state.messages.chatSend),
				y = d(() => e.state.messages.chatPlaceholder),
				L = d(() => e.state.messages.chatNoMessages),
				I = d(() => e.state.messages.chatLogin),
				U = async () => {
					const S = s.value.trim().substring(0, i.value);
					if (!!S) {
						l.value = !0, p.value = null;
						try {
							await e.dispatch(R.SEND_CHAT_MESSAGE, S), s.value = "", p.value = null
						} catch ($) {
							$ instanceof lt ? p.value = $.message : p.value = e.state.messages.chatErrorUnknown
						} finally {
							l.value = !1, requestAnimationFrame(() => n.value.focus())
						}
					}
				}, z = () => e.dispatch(R.LOGIN, null);
			return M(o, S => {
				S && r.value && requestAnimationFrame(() => n.value.focus())
			}), {
				chatInput: n,
				enteredMessage: s,
				sendMessage: U,
				login: z,
				chatMessages: h,
				loginRequired: a,
				sendingEnabled: r,
				sendingMessage: l,
				sendingError: p,
				maxMessageLength: i,
				messageLogin: I,
				messageSend: g,
				messageNoMessages: L,
				messagePlaceholder: y
			}
		}
	}),
	ss = {
		class: "chat"
	},
	ls = {
		class: "chat__messages",
		role: "log",
		"aria-live": "polite",
		"aria-relevant": "additions"
	},
	ds = {
		key: 0,
		class: "message message--skeleton",
		role: "none"
	},
	cs = {
		key: 0,
		role: "alert",
		class: "chat__error"
	},
	ms = ["maxlength", "placeholder", "disabled"],
	ps = ["disabled"];

function us(e, t, o, a, r, i) {
	const n = w("ChatMessage");
	return m(), b("section", ss, [f("ul", ls, [(m(!0), b(O, null, Q(e.chatMessages, s => (m(), A(n, {
		key: s.timestamp,
		message: s
	}, null, 8, ["message"]))), 128)), e.chatMessages.length ? C("", !0) : (m(), b("li", ds, x(e.messageNoMessages), 1))]), e.sendingEnabled ? (m(), b("form", {
		key: 0,
		class: "chat__form",
		onSubmit: t[1] || (t[1] = J((...s) => e.sendMessage && e.sendMessage(...s), ["prevent"]))
	}, [e.sendingError ? (m(), b("div", cs, x(e.sendingError), 1)) : C("", !0), W(f("input", {
		ref: "chatInput",
		"onUpdate:modelValue": t[0] || (t[0] = s => e.enteredMessage = s),
		class: "chat__input",
		type: "text",
		maxlength: e.maxMessageLength,
		placeholder: e.messagePlaceholder,
		disabled: e.sendingMessage
	}, null, 8, ms), [
		[re, e.enteredMessage]
	]), f("button", {
		class: "chat__send",
		disabled: !e.enteredMessage || e.sendingMessage
	}, x(e.messageSend), 9, ps)], 32)) : C("", !0), e.loginRequired ? (m(), b("button", {
		key: 1,
		type: "button",
		class: "chat__login",
		onClick: t[2] || (t[2] = (...s) => e.login && e.login(...s))
	}, x(e.messageLogin), 1)) : C("", !0)])
}
var hs = P(is, [
	["render", us]
]);
const pt = document.getElementById("app"),
	se = document.getElementById("splash"),
	ut = document.getElementById("splash__spinner"),
	ht = document.getElementById("splash__error"),
	St = document.getElementById("splash__error-message"),
	Ye = document.getElementById("splash__error-retry"),
	gs = function (e) {
		!se || !pt || (e && (ht && ht.setAttribute("aria-hidden", "true"), ut && (ut.style.visibility = "visible"), Ye && (Ye.hidden = !0)), se.hidden = !1, pt.setAttribute("aria-hidden", "true"), requestAnimationFrame(function () {
			se.style.opacity = "1"
		}))
	},
	fs = () => {
		!se || !pt || requestAnimationFrame(() => {
			se.style.opacity = "0", pt.removeAttribute("aria-hidden"), window.getComputedStyle(se).opacity === "0" && (se.hidden = !0)
		})
	},
	gt = (e, t, o) => {
		ht && ht.setAttribute("aria-hidden", "false"), St && St.innerText !== e && (St.innerText = e || "Unknown error"), ut && t && (ut.style.visibility = "hidden"), Ye && (t ? Ye.hidden = !0 : o && (Ye.hidden = !1, Ye.textContent = `Retrying... (${o.toString()})`))
	},
	ys = T({
		setup() {
			const e = _(),
				t = E(null),
				o = E(null),
				a = d(() => e.state.ui.visibleModal === "login"),
				r = d(() => e.state.messages.loginHeading),
				i = d(() => e.state.messages.loginHeading),
				n = d(() => e.state.messages.loginUsernameLabel),
				s = d(() => e.state.messages.loginPasswordLabel),
				l = d(() => e.state.messages.loginSubmit),
				p = d(() => e.state.messages.loginSuccess),
				h = E(""),
				g = E(""),
				y = E(!1),
				L = E(!1),
				I = E(null);
			return V(() => {
				Zo(async () => {
					await te(), a.value ? o.value.focus() : (h.value = "", g.value = "")
				})
			}), {
				form: t,
				usernameField: o,
				heading: r,
				loginHeading: i,
				usernameLabel: n,
				passwordLabel: s,
				loginSubmit: l,
				loginUsername: h,
				loginPassword: g,
				submitting: y,
				invalid: L,
				error: I,
				login: async () => {
					if (I.value = null, L.value = !t.value.reportValidity(), !L.value) try {
						y.value = !0, await e.dispatch(R.LOGIN, {
							username: h.value,
							password: g.value
						}), e.commit(c.HIDE_UI_MODAL, "login"), ne(p.value)
					} catch (z) {
						I.value = z
					} finally {
						y.value = !1
					}
				}
			}
		}
	}),
	bs = {
		class: "form__group"
	},
	vs = {
		for: "login-username",
		class: "form__label"
	},
	ws = {
		class: "form__group"
	},
	_s = {
		for: "login-password",
		class: "form__label"
	},
	ks = {
		key: 0,
		role: "alert",
		"aria-live": "assertive",
		class: "form__group alert"
	},
	Ss = {
		class: "form__group"
	},
	Ls = ["disabled"];

function Es(e, t, o, a, r, i) {
	return m(), b("form", {
		class: ie({
			form: !0,
			"form--invalid": e.invalid
		}),
		onSubmit: t[2] || (t[2] = J((...n) => e.login && e.login(...n), ["prevent"])),
		ref: "form",
		novalidate: ""
	}, [f("h3", null, x(e.loginHeading), 1), f("div", bs, [f("label", vs, x(e.usernameLabel), 1), W(f("input", {
		id: "login-username",
		type: "text",
		name: "username",
		autocomplete: "username",
		"onUpdate:modelValue": t[0] || (t[0] = n => e.loginUsername = n),
		required: "",
		ref: "usernameField"
	}, null, 512), [
		[re, e.loginUsername]
	])]), f("div", ws, [f("label", _s, x(e.passwordLabel), 1), W(f("input", {
		id: "login-password",
		type: "password",
		name: "password",
		autocomplete: "current-password",
		"onUpdate:modelValue": t[1] || (t[1] = n => e.loginPassword = n),
		required: ""
	}, null, 512), [
		[re, e.loginPassword]
	])]), e.error ? (m(), b("div", ks, x(e.error), 1)) : C("", !0), f("div", Ss, [f("button", {
		type: "submit",
		disabled: e.submitting
	}, x(e.loginSubmit), 9, Ls)])], 34)
}
var As = P(ys, [
	["render", Es]
]);
const xs = T({
		setup() {
			const e = _(),
				t = E(null),
				o = E(null),
				a = d(() => e.state.ui.visibleModal === "login"),
				r = d(() => e.state.messages.loginUsernameLabel),
				i = d(() => e.state.messages.loginPasswordLabel),
				n = d(() => e.state.messages.registerConfirmPasswordLabel),
				s = d(() => e.state.messages.registerCodeLabel),
				l = d(() => e.state.messages.registerHeading),
				p = d(() => e.state.messages.registerDescription),
				h = d(() => e.state.messages.registerSubmit),
				g = d(() => e.state.messages.registerErrorVerifyFailed),
				y = E(""),
				L = E(""),
				I = E(""),
				U = E(""),
				z = E(!1),
				S = E(!1),
				$ = E(null);
			M(a, v => {
				v || (y.value = "", L.value = "", I.value = "", U.value = "")
			});
			const k = () => {
				L.value !== I.value ? o.value.setCustomValidity(g.value) : o.value.setCustomValidity("")
			};
			return {
				form: t,
				confirmPasswordField: o,
				messageHeading: l,
				messageDescription: p,
				messageUsernameLabel: r,
				messagePasswordLabel: i,
				messageConfirmPasswordLabel: n,
				messageRegisterCodeLabel: s,
				messageSubmit: h,
				valueUsername: y,
				valuePassword: L,
				valuePassword2: I,
				valueCode: U,
				submitting: z,
				invalid: S,
				error: $,
				register: async () => {
					if ($.value = null, k(), S.value = !t.value.reportValidity(), !S.value) try {
						z.value = !0, await e.dispatch(R.REGISTER, {
							username: y.value,
							password: L.value,
							code: U.value
						}), e.commit(c.HIDE_UI_MODAL, "login")
					} catch (v) {
						$.value = v
					} finally {
						z.value = !1
					}
				}
			}
		}
	}),
	Cs = {
		class: "form__group"
	},
	Ts = {
		for: "register-username",
		class: "form__label"
	},
	Ms = {
		class: "form__group"
	},
	Is = {
		for: "register-password",
		class: "form__label"
	},
	zs = {
		class: "form__group"
	},
	$s = {
		for: "register-confirm-password",
		class: "form__label"
	},
	Us = {
		class: "form__group"
	},
	Ps = {
		for: "register-code",
		class: "form__label"
	},
	Ns = {
		key: 0,
		role: "alert",
		"aria-live": "assertive",
		class: "form__group alert"
	},
	Rs = {
		class: "form__group"
	},
	Os = ["disabled"];

function Ds(e, t, o, a, r, i) {
	return m(), b("form", {
		class: ie({
			form: !0,
			"form--invalid": e.invalid
		}),
		onSubmit: t[4] || (t[4] = J((...n) => e.register && e.register(...n), ["prevent"])),
		ref: "form",
		novalidate: ""
	}, [f("h3", null, x(e.messageHeading), 1), f("p", null, x(e.messageDescription), 1), f("div", Cs, [f("label", Ts, x(e.messageUsernameLabel), 1), W(f("input", {
		id: "register-username",
		type: "text",
		name: "username",
		autocomplete: "username",
		"onUpdate:modelValue": t[0] || (t[0] = n => e.valueUsername = n),
		required: ""
	}, null, 512), [
		[re, e.valueUsername]
	])]), f("div", Ms, [f("label", Is, x(e.messagePasswordLabel), 1), W(f("input", {
		id: "register-password",
		type: "password",
		name: "password",
		autocomplete: "new-password",
		"onUpdate:modelValue": t[1] || (t[1] = n => e.valuePassword = n),
		required: ""
	}, null, 512), [
		[re, e.valuePassword]
	])]), f("div", zs, [f("label", $s, x(e.messageConfirmPasswordLabel), 1), W(f("input", {
		id: "register-confirm-password",
		type: "password",
		name: "confirm_password",
		autocomplete: "new-password",
		"onUpdate:modelValue": t[2] || (t[2] = n => e.valuePassword2 = n),
		required: "",
		ref: "confirmPasswordField"
	}, null, 512), [
		[re, e.valuePassword2]
	])]), f("div", Us, [f("label", Ps, x(e.messageRegisterCodeLabel), 1), W(f("input", {
		id: "register-code",
		type: "tel",
		name: "code",
		minlength: "9",
		maxlength: "9",
		"onUpdate:modelValue": t[3] || (t[3] = n => e.valueCode = n),
		required: ""
	}, null, 512), [
		[re, e.valueCode]
	])]), e.error ? (m(), b("div", Ns, x(e.error), 1)) : C("", !0), f("div", Rs, [f("button", {
		type: "submit",
		disabled: e.submitting
	}, x(e.messageSubmit), 9, Os)])], 34)
}
var Bs = P(xs, [
	["render", Ds],
	["__scopeId", "data-v-be3a4872"]
]);
const Hs = T({
		components: {
			SvgIcon: pe
		},
		props: {
			id: {
				required: !0,
				type: String
			},
			closeable: {
				default: !0,
				type: Boolean
			},
			backdrop: {
				default: !0,
				type: Boolean
			}
		},
		setup(e) {
			const t = _(),
				o = E(null),
				a = d(() => t.state.messages.closeTitle),
				r = d(() => t.state.ui.visibleModal === e.id),
				i = l => {
					e.closeable && r.value && l.key === "Escape" && (s(), l.preventDefault(), l.stopImmediatePropagation())
				},
				n = l => {
					e.closeable && l.target === o.value && s()
				},
				s = () => e.closeable && t.commit(c.HIDE_UI_MODAL, e.id);
			return V(() => {
				window.addEventListener("keydown", i)
			}), F(() => {
				window.removeEventListener("keydown", i)
			}), {
				visible: r,
				modal: o,
				onBackdropClick: n,
				close: s,
				messageClose: a
			}
		}
	}),
	Ws = ["id", "aria-labelledby"],
	Vs = {
		class: "modal__header"
	},
	Zs = ["aria-label"],
	js = {
		class: "modal__content"
	};

function Fs(e, t, o, a, r, i) {
	const n = w("SvgIcon");
	return m(), b("div", {
		class: ie({
			modal: !0,
			"modal--visible": e.visible,
			"modal--backdrop": e.backdrop
		}),
		role: "dialog",
		id: `modal--${e.id}`,
		"aria-labelledby": `${e.id}__heading`,
		"aria-modal": "true",
		onClick: t[1] || (t[1] = (...s) => e.onBackdropClick && e.onBackdropClick(...s)),
		ref: "modal"
	}, [f("div", Vs, [Xe(e.$slots, "header"), e.closeable ? (m(), b("button", {
		key: 0,
		class: "modal__close",
		type: "button",
		onClick: t[0] || (t[0] = (...s) => e.close && e.close(...s)),
		"aria-label": e.messageClose
	}, [Z(n, {
		name: "cross"
	})], 8, Zs)) : C("", !0)]), f("div", js, [Xe(e.$slots, "default")])], 10, Ws)
}
var Gs = P(Hs, [
	["render", Fs]
]);
const Ys = T({
		components: {
			Modal: Gs,
			RegisterForm: Bs,
			LoginForm: As
		},
		props: {
			required: {
				default: !1,
				type: Boolean
			}
		},
		setup() {
			const e = _();
			return {
				heading: d(() => e.state.messages.loginTitle)
			}
		}
	}),
	Ks = {
		id: "login__heading"
	};

function qs(e, t, o, a, r, i) {
	const n = w("LoginForm"),
		s = w("RegisterForm"),
		l = w("Modal");
	return m(), A(l, {
		id: "login",
		closeable: !e.required,
		backdrop: !e.required
	}, {
		header: j(() => [f("h2", Ks, x(e.heading), 1)]),
		default: j(() => [Z(n), Z(s)]),
		_: 1
	}, 8, ["closeable", "backdrop"])
}
var Qs = P(Ys, [
	["render", qs],
	["__scopeId", "data-v-9c90fcb6"]
]);
const Js = T({
	name: "App",
	components: {
		Map: fn,
		Sidebar: Xi,
		ChatBox: hs,
		LoginModal: Qs
	},
	setup() {
		let e = null;
		const t = _(),
			o = d(() => t.getters.pageTitle),
			a = d(() => t.getters.url),
			r = d(() => t.state.currentServer),
			i = d(() => t.state.configurationHash),
			n = d(() => t.state.components.chatBox),
			s = d(() => t.state.ui.visibleElements.has("chat")),
			l = d(() => t.state.components.players.imageUrl),
			p = d(() => t.state.loggedIn),
			h = d(() => t.state.loginRequired),
			g = d(() => t.getters.loginEnabled),
			y = d(() => t.state.ui.visibleModal === "login" && (!h.value || !t.state.ui.visibleElements.has("maps"))),
			L = E(!1),
			I = E(0),
			U = async () => {
				try {
					clearTimeout(Number(e)), gs(!I.value), L.value = !0, await t.dispatch(R.LOAD_CONFIGURATION, void 0), await t.dispatch(R.START_UPDATES, void 0), requestAnimationFrame(() => {
						fs();
						const k = document.getElementById("#app");
						k && k.focus()
					})
				} catch (k) {
					if (!(k instanceof DOMException && k.name === "AbortError") && !h.value) {
						const N = `Failed to load server configuration for '${t.state.currentServer.id}'`;
						console.error(`${N}:`, k), gt(`${N}
${k}`, !1, ++I.value), clearTimeout(Number(e)), e = setTimeout(() => U(), 1e3)
					}
				} finally {
					L.value = !1
				}
			}, z = () => {
				const k = new URL(window.location.href),
					N = ta(k);
				N && (N.legacy && (k.searchParams.delete("worldname"), k.searchParams.delete("world"), k.searchParams.delete("mapname"), k.searchParams.delete("x"), k.searchParams.delete("y"), k.searchParams.delete("z"), k.searchParams.delete("zoom"), history.replaceState({}, "", k.toString())), t.commit(c.SET_PARSED_URL, N))
			}, S = () => {
				t.commit(c.SET_SCREEN_SIZE, {
					width: window.innerWidth,
					height: window.innerHeight
				})
			}, $ = k => {
				if (!k.ctrlKey || !k.shiftKey) return;
				let N;
				if (!(t.state.ui.visibleModal && (!h.value || k.key !== "M"))) {
					switch (k.key) {
						case "M":
							N = "maps";
							break;
						case "I":
							N = "markers";
							break;
						case "C":
							N = "chat";
							break;
						case "P":
							N = "players";
							break;
						case "L":
							N = "layers";
							break;
						default:
							return
					}
					k.preventDefault(), t.commit(c.TOGGLE_UI_ELEMENT_VISIBILITY, N)
				}
			};
		return M(o, k => document.title = k), M(a, k => window.history.replaceState({}, "", k)), M(r, k => {
			!k || (Gt(), I.value = 0, window.history.replaceState({}, "", k.id), U())
		}, {
			deep: !0
		}), M(i, async (k, N) => {
			k && N && await U()
		}), M(p, async () => {
			L.value || (console.log("Login state changed. Reloading configuration"), await U())
		}), M(h, k => {
			k ? (t.commit(c.SET_UI_ELEMENT_VISIBILITY, {
				element: "maps",
				state: !1
			}), t.dispatch(R.LOGIN, null), ne("Login required"), gt("Login required", !0, 1)) : t.commit(c.HIDE_UI_MODAL, "login")
		}), M(l, () => {
			Gt()
		}), z(), S(), V(() => {
			window.addEventListener("resize", S), window.addEventListener("keydown", $), window.addEventListener("hashchange", z), U()
		}), jo(() => {
			t.dispatch(R.STOP_UPDATES, void 0), clearTimeout(Number(e)), window.removeEventListener("resize", S), window.removeEventListener("keydown", $), window.removeEventListener("hashchange", z)
		}), {
			chatBoxEnabled: n,
			chatVisible: s,
			loginEnabled: g,
			loginRequired: h,
			loginModalVisible: y
		}
	}
});

function Xs(e, t, o, a, r, i) {
	const n = w("Map"),
		s = w("ChatBox"),
		l = w("LoginModal"),
		p = w("Sidebar"),
		h = w("notifications");
	return m(), b(O, null, [Z(n), e.chatBoxEnabled ? W((m(), A(s, {
		key: 0
	}, null, 512)), [
		[jt, e.chatBoxEnabled && e.chatVisible]
	]) : C("", !0), e.loginEnabled ? W((m(), A(l, {
		key: 1,
		required: e.loginRequired
	}, null, 8, ["required"])), [
		[jt, e.loginModalVisible]
	]) : C("", !0), Z(p), Z(h, {
		position: "bottom center",
		speed: 250,
		max: 3,
		ignoreDuplicates: !0,
		classes: "notification"
	})], 64)
}
var el = P(Js, [
	["render", Xs]
]);
class tl extends bt {
	constructor(t) {
		super(t), this._url = `${t.baseUrl}{z}/{x}_{y}.png`, u.exports.Util.setOptions(this, {
			zoomReverse: !1
		})
	}
}
class G extends me {
	constructor(t) {
		if (super(t), this.configurationAbort = void 0, this.markersAbort = void 0, this.playersAbort = void 0, this.updatesEnabled = !1, this.playerUpdateTimeout = null, this.playerUpdateTimestamp = new Date, this.playerUpdateInterval = 3e3, this.markerUpdateTimeout = null, this.markerUpdateInterval = 3e3, this.worldPlayerUpdateIntervals = new Map, this.worldMarkerUpdateIntervals = new Map, this.worldComponents = new Map, this.markerSets = new Map, this.markers = new Map, !this.config) throw new K("URL missing");
		this.config.slice(-1) !== "/" && (this.config = `${t}/`)
	}
	static buildServerConfig(t) {
		var o, a, r;
		return {
			title: (((o = t.ui) == null ? void 0 : o.title) || "Pl3xmap").replace(Xt, ""),
			expandUI: ((r = (a = t.ui) == null ? void 0 : a.sidebar) == null ? void 0 : r.pinned) === "pinned",
			defaultZoom: 1,
			defaultMap: void 0,
			defaultWorld: void 0,
			followMap: void 0,
			followZoom: void 0
		}
	}
	static buildMessagesConfig(t) {
		var o, a, r, i;
		return {
			worldsHeading: ((a = (o = t.ui) == null ? void 0 : o.sidebar) == null ? void 0 : a.world_list_label) || "",
			playersHeading: ((i = (r = t.ui) == null ? void 0 : r.sidebar) == null ? void 0 : i.player_list_label) || "",
			chatPlayerJoin: "",
			chatPlayerQuit: "",
			chatAnonymousJoin: "",
			chatAnonymousQuit: "",
			chatErrorNotAllowed: "",
			chatErrorRequiresLogin: "",
			chatErrorCooldown: ""
		}
	}
	buildWorlds(t, o) {
		const a = [];
		return this.worldComponents.clear(), this.worldMarkerUpdateIntervals.clear(), this.worldPlayerUpdateIntervals.clear(), (t.worlds || []).filter(i => i && !!i.name).sort((i, n) => i.order - n.order).forEach((i, n) => {
			var y, L, I, U, z, S, $, k, N, v, H, B;
			const s = o[n],
				l = {
					components: {
						players: {
							markers: void 0,
							imageUrl: tt,
							grayHiddenPlayers: !0,
							showImages: !0
						}
					}
				};
			if (this.worldMarkerUpdateIntervals.set(i.name, s.marker_update_interval || 3e3), (y = s.player_tracker) != null && y.enabled) {
				const q = !!((I = (L = s.player_tracker) == null ? void 0 : L.nameplates) != null && I.show_health),
					Dt = !!((z = (U = s.player_tracker) == null ? void 0 : U.nameplates) != null && z.show_armor),
					Io = !!(($ = (S = s.player_tracker) == null ? void 0 : S.nameplates) != null && $.show_heads),
					zo = s.player_tracker.update_interval ? s.player_tracker.update_interval * 1e3 : 3e3;
				this.worldPlayerUpdateIntervals.set(i.name, zo), (N = (k = s.player_tracker) == null ? void 0 : k.nameplates) != null && N.heads_url && (l.components.players.imageUrl = Bt => s.player_tracker.nameplates.heads_url.replace("{uuid}", Bt.uuid).replace("{name}", Bt.name)), l.components.players.markers = {
					hideByDefault: !!((v = s.player_tracker) != null && v.default_hidden),
					layerName: ((H = s.player_tracker) == null ? void 0 : H.label) || "",
					layerPriority: (B = s.player_tracker) == null ? void 0 : B.priority,
					imageSize: Io ? q && Dt ? "large" : "small" : "none",
					showHealth: q,
					showArmor: Dt,
					showYaw: !0
				}
			}
			if (this.worldComponents.set(i.name, l), !s) {
				console.warn(`World ${i.name} has no matching world config. Ignoring.`);
				return
			}
			let p = "overworld";
			i.type === "nether" ? p = "nether" : i.type === "the_end" && (p = "end");
			const h = new Set,
				g = {
					name: i.name || "(Unnamed world)",
					displayName: i.display_name || i.name,
					dimension: p,
					seaLevel: 0,
					maps: h
				};
			h.add(Object.freeze(new yt({
				world: g,
				name: "flat",
				displayName: "Flat",
				icon: i.icon ? `${this.config}images/icon/${i.icon}.png` : void 0,
				baseUrl: `${this.config}tiles/${g.name}/`,
				imageFormat: "png",
				tileSize: 512,
				background: "transparent",
				backgroundDay: "transparent",
				backgroundNight: "transparent",
				nativeZoomLevels: s.zoom.max || 1,
				extraZoomLevels: s.zoom.extra,
				defaultZoom: s.zoom.def || 1,
				tileUpdateInterval: s.tiles_update_interval ? s.tiles_update_interval * 1e3 : void 0,
				center: {
					x: s.spawn.x,
					y: 0,
					z: s.spawn.z
				}
			}))), a.push(g)
		}), Array.from(a.values())
	}
	static buildComponents(t) {
		var a, r, i, n, s, l, p, h;
		const o = {
			coordinatesControl: void 0,
			linkControl: !!((r = (a = t.ui) == null ? void 0 : a.link) != null && r.enabled),
			layerControl: !!((n = (i = t.ui) == null ? void 0 : i.coordinates) != null && n.enabled),
			players: {
				markers: void 0,
				imageUrl: tt,
				showImages: !0,
				grayHiddenPlayers: !0
			},
			markers: {
				showLabels: !1
			},
			chatBox: void 0,
			chatBalloons: !1,
			clockControl: void 0,
			logoControls: [],
			login: !1
		};
		if ((l = (s = t.ui) == null ? void 0 : s.coordinates) != null && l.enabled) {
			const g = (((h = (p = t.ui) == null ? void 0 : p.coordinates) == null ? void 0 : h.html) || "Location: ").replace(/{x}.*{z}/gi, "").trim(),
				y = new DOMParser().parseFromString(g, "text/html").body.textContent || "";
			o.coordinatesControl = {
				showY: !1,
				label: y,
				showRegion: !1,
				showChunk: !1
			}
		}
		return o
	}
	async getMarkerSets(t) {
		const o = `${this.config}tiles/${t.name}/markers.json`;
		this.markersAbort && this.markersAbort.abort(), this.markersAbort = new AbortController;
		const a = await G.getJSON(o, this.markersAbort.signal);
		!Array.isArray(a) || a.forEach(r => {
			if (!r || !r.id) {
				console.warn("Ignoring marker set without id");
				return
			}
			const i = r.id,
				n = Object.freeze(new Map);
			(r.markers || []).forEach(s => {
				let l;
				switch (s.type) {
					case "icon":
						l = `point_${n.size}`, n.set(l, this.buildMarker(l, s));
						break;
					case "polyline":
						l = `line_${n.size}`, n.set(l, G.buildLine(l, s));
						break;
					case "rectangle":
					case "polygon":
						l = `area_${n.size}`, n.set(l, G.buildArea(l, s));
						break;
					case "circle":
					case "ellipse":
						l = `circle_${n.size}`, n.set(l, G.buildCircle(l, s));
						break;
					default:
						console.warn("Marker type " + s.type + " not supported")
				}
			}), this.markerSets.set(i, {
				id: i,
				label: r.name || "Unnamed set",
				hidden: r.hide || !1,
				priority: r.order || 0,
				showLabels: !1
			}), this.markers.set(i, n)
		})
	}
	buildMarker(t, o) {
		var a, r;
		return {
			id: t,
			type: D.POINT,
			location: {
				x: ((a = o.point) == null ? void 0 : a.x) || 0,
				y: 0,
				z: ((r = o.point) == null ? void 0 : r.z) || 0
			},
			iconSize: o.size ? [o.size.x || 16, o.size.z || 16] : [16, 16],
			iconUrl: `${this.config}images/icon/registered/${o.icon||"default"}.png`,
			tooltip: o.tooltip ? ee(o.tooltip) : "",
			tooltipHTML: o.tooltip,
			popup: o.popup,
			isPopupHTML: !0
		}
	}
	static buildArea(t, o) {
		let a;
		o.type === "rectangle" ? a = [{
			x: o.points[0].x,
			y: 0,
			z: o.points[0].z
		}, {
			x: o.points[0].x,
			y: 0,
			z: o.points[1].z
		}, {
			x: o.points[1].x,
			y: 0,
			z: o.points[1].z
		}, {
			x: o.points[1].x,
			y: 0,
			z: o.points[0].z
		}] : a = this.addY(o.points);
		const r = xt(a);
		return {
			id: t,
			type: D.AREA,
			style: {
				stroke: (typeof o.stroke == "undefined" || !!o.stroke) && !!o.color,
				color: o.color || "#3388ff",
				weight: o.weight || 3,
				opacity: typeof o.opacity != "undefined" ? o.opacity : 1,
				fill: (typeof o.fill == "undefined" || !!o.fill) && !!o.fillColor,
				fillColor: o.fillColor || o.color || "#3388ff",
				fillOpacity: o.fillOpacity || .2,
				fillRule: o.fillRule
			},
			points: a,
			bounds: r,
			location: et(r),
			outline: !1,
			tooltip: o.tooltip ? ee(o.tooltip) : "",
			tooltipHTML: o.tooltip,
			popup: o.popup,
			isPopupHTML: !0
		}
	}
	static buildLine(t, o) {
		const a = this.addY(o.points),
			r = xt(a);
		return {
			id: t,
			type: D.LINE,
			style: {
				stroke: (typeof o.stroke == "undefined" || !!o.stroke) && !!o.color,
				color: o.color || "#3388ff",
				weight: o.weight || 3,
				opacity: typeof o.opacity != "undefined" ? o.opacity : 1
			},
			points: a,
			bounds: r,
			location: et(r),
			tooltip: o.tooltip ? ee(o.tooltip) : "",
			tooltipHTML: o.tooltip,
			popup: o.popup,
			isPopupHTML: !0
		}
	}
	static buildCircle(t, o) {
		var i, n;
		const a = [o.radiusX || o.radius || 0, o.radiusZ || o.radius || 0],
			r = {
				x: ((i = o.center) == null ? void 0 : i.x) || 0,
				y: 0,
				z: ((n = o.center) == null ? void 0 : n.z) || 0
			};
		return {
			id: t,
			type: D.CIRCLE,
			location: r,
			radius: a,
			bounds: {
				max: {
					x: r.x + a[0],
					y: 0,
					z: r.z + a[1]
				},
				min: {
					x: r.x - a[0],
					y: 0,
					z: r.z - a[1]
				}
			},
			style: {
				stroke: (typeof o.stroke == "undefined" || !!o.stroke) && !!o.color,
				color: o.color || "#3388ff",
				weight: o.weight || 3,
				opacity: typeof o.opacity != "undefined" ? o.opacity : 1,
				fill: (typeof o.fill == "undefined" || !!o.fill) && !!o.fillColor,
				fillColor: o.fillColor || o.color || "#3388ff",
				fillOpacity: o.fillOpacity || .2,
				fillRule: o.fillRule
			},
			tooltip: o.tooltip ? ee(o.tooltip) : "",
			tooltipHTML: o.tooltip,
			popup: o.popup,
			isPopupHTML: !0
		}
	}
	static addY(t) {
		for (const o of t) t.y = 0;
		return t
	}
	async loadServerConfiguration() {
		this.configurationAbort && this.configurationAbort.abort(), this.configurationAbort = new AbortController;
		const t = this.config,
			o = await G.getJSON(`${t}tiles/settings.json`, this.configurationAbort.signal);
		if (o.error) throw new Error(o.error);
		const a = G.buildServerConfig(o),
			r = (o.worlds || []).filter(n => n && !!n.name).map(n => n.name),
			i = await Promise.all(r.map(n => G.getJSON(`${t}tiles/${n}/settings.json`, this.configurationAbort.signal)));
		this.store.commit(c.SET_SERVER_CONFIGURATION, a), this.store.commit(c.SET_SERVER_MESSAGES, G.buildMessagesConfig(o)), this.store.commit(c.SET_WORLDS, this.buildWorlds(o, i)), this.store.commit(c.SET_COMPONENTS, G.buildComponents(o))
	}
	async populateWorld(t) {
		const o = this.worldComponents.get(t.name);
		await this.getMarkerSets(t), this.playerUpdateInterval = this.worldPlayerUpdateIntervals.get(t.name) || 3e3, this.markerUpdateInterval = this.worldMarkerUpdateIntervals.get(t.name) || 3e3, this.store.commit(c.SET_MARKER_SETS, this.markerSets), this.store.commit(c.SET_MARKERS, this.markers), this.store.commit(c.SET_COMPONENTS, o.components), this.markerSets.clear(), this.markers.clear()
	}
	createTileLayer(t) {
		return new tl(t)
	}
	async getPlayers() {
		const t = `${this.config}tiles/players.json`;
		this.playersAbort && this.playersAbort.abort(), this.playersAbort = new AbortController;
		const o = await G.getJSON(t, this.playersAbort.signal),
			a = new Set;
		return (o.players || []).forEach(r => {
			a.add({
				name: (r.name || "").toLowerCase(),
				uuid: r.uuid,
				displayName: r.display_name || r.name || "",
				health: r.health || 0,
				armor: r.armor || 0,
				sort: 0,
				hidden: !1,
				location: {
					x: isNaN(r.x) ? 0 : r.x + .5,
					y: 0,
					z: isNaN(r.z) ? 0 : r.z + .5,
					world: r.world
				},
				yaw: isNaN(r.yaw) ? 0 : parseFloat(r.yaw) + 180
			})
		}), this.store.commit(c.SET_MAX_PLAYERS, o.max || 0), a
	}
	startUpdates() {
		this.updatesEnabled = !0, this.updatePlayers(), this.updateMarkers()
	}
	async updatePlayers() {
		try {
			if (this.store.getters.playerMarkersEnabled) {
				const t = await this.getPlayers();
				this.playerUpdateTimestamp = new Date, await this.store.dispatch(R.SET_PLAYERS, t)
			}
		} finally {
			this.updatesEnabled && (this.playerUpdateTimeout && clearTimeout(this.playerUpdateTimeout), this.playerUpdateTimeout = setTimeout(() => this.updatePlayers(), this.playerUpdateInterval))
		}
	}
	async updateMarkers() {}
	stopUpdates() {
		this.updatesEnabled = !1, this.markerUpdateTimeout && clearTimeout(this.markerUpdateTimeout), this.playerUpdateTimeout && clearTimeout(this.playerUpdateTimeout), this.markerUpdateTimeout = null, this.playerUpdateTimeout = null, this.configurationAbort && this.configurationAbort.abort(), this.playersAbort && this.playersAbort.abort(), this.markersAbort && this.markersAbort.abort()
	}
}
class ol extends bt {
	constructor(t) {
		super(t), u.exports.Util.setOptions(this, {
			zoomReverse: !1
		})
	}
	getTileUrl(t) {
		let o = this.options.prefix;
		const a = t.z;
		if (t.x < 0 || t.x >= Math.pow(2, a) || t.y < 0 || t.y >= Math.pow(2, a)) o += "/blank";
		else if (a === 0) o += "/base";
		else
			for (let r = a - 1; r >= 0; --r) {
				const i = Math.floor(t.x / Math.pow(2, r)) % 2,
					n = Math.floor(t.y / Math.pow(2, r)) % 2;
				o += "/" + (i + 2 * n)
			}
		return o += `.${this.options.imageFormat}`, this.options.baseUrl + o
	}
}
class al {
	constructor(t) {
		this.upperRight = t.upperRight, this.lowerRight = t.lowerRight, this.lowerLeft = t.lowerLeft, this.northDirection = t.northDirection, this.nativeZoomLevels = t.nativeZoomLevels || 1, this.tileSize = t.tileSize, this.perPixel = 1 / (this.tileSize * Math.pow(2, this.nativeZoomLevels))
	}
	locationToLatLng(t) {
		let o = .5 - 1 / Math.pow(2, this.nativeZoomLevels + 1),
			a = .5;
		if (this.northDirection === this.upperRight) {
			const r = t.x;
			t.x = -t.z + 15, t.z = r
		} else if (this.northDirection === this.lowerRight) t.x = -t.x + 15, t.z = -t.z + 15;
		else if (this.northDirection === this.lowerLeft) {
			const r = t.x;
			t.x = t.z, t.z = -r + 15
		}
		return o += 12 * t.x * this.perPixel, a -= 6 * t.x * this.perPixel, o += 12 * t.z * this.perPixel, a += 6 * t.z * this.perPixel, o += 12 * this.perPixel, a += 12 * (256 - t.y) * this.perPixel, new u.exports.LatLng(-a * this.tileSize, o * this.tileSize)
	}
	latLngToLocation(t, o) {
		const a = -t.lat / this.tileSize - .5,
			r = t.lng / this.tileSize - (.5 - 1 / Math.pow(2, this.nativeZoomLevels + 1)),
			i = Math.floor((r - 2 * a) / (24 * this.perPixel)) + (256 - o),
			n = Math.floor((r + 2 * a) / (24 * this.perPixel)) - (256 - o);
		return this.northDirection == this.upperRight ? {
			x: n,
			y: o,
			z: -i + 15
		} : this.northDirection == this.lowerRight ? {
			x: -i + 15,
			y: o,
			z: -o + 15
		} : this.northDirection == this.lowerLeft ? {
			x: -n + 15,
			y: o,
			z: i
		} : {
			x: i,
			y: o,
			z: n
		}
	}
}
class ae extends me {
	constructor(t) {
		if (super(t), this.configurationAbort = void 0, this.markersAbort = void 0, this.markersRegex = /^overviewer.util.injectMarkerScript\('([\w.]+)'\);?$/mgi, this.mapMarkerSets = new Map, this.mapMarkers = Object.freeze(new Map), !this.config) throw new K("URL missing");
		this.config.slice(-1) !== "/" && (this.config = `${t}/`)
	}
	static buildServerConfig(t) {
		return {
			title: _().state.initialTitle,
			expandUI: !1,
			defaultZoom: 0,
			defaultMap: void 0,
			defaultWorld: void 0,
			followMap: void 0,
			followZoom: void 0
		}
	}
	static buildMessagesConfig(t) {
		return {
			worldsHeading: "Worlds",
			playersHeading: "",
			chatPlayerJoin: "",
			chatPlayerQuit: "",
			chatAnonymousJoin: "",
			chatAnonymousQuit: "",
			chatErrorNotAllowed: "",
			chatErrorRequiresLogin: "",
			chatErrorCooldown: ""
		}
	}
	buildWorlds(t) {
		const o = t.CONST.tileSize,
			a = new Map;
		return (t.worlds || []).forEach(r => {
			a.set(r, {
				name: r,
				displayName: r,
				dimension: io(r),
				seaLevel: 64,
				maps: new Set
			})
		}), (t.tilesets || []).forEach(r => {
			var I, U;
			if (!(r != null && r.world) || !a.has(r.world)) {
				console.warn(`Ignoring tileset with unknown world ${r.world}`);
				return
			}
			const i = a.get(r.world),
				n = r.base ? `${this.config}${r.base}/${r.path}` : this.config + r.path,
				s = r.base,
				l = r.imgextension,
				p = r.zoomLevels,
				h = r.minZoom,
				g = r.maxZoom;
			if (r.isOverlay) return;
			i.maps.add(new yt({
				world: i,
				name: r.path,
				displayName: r.name || r.path,
				baseUrl: n,
				tileSize: o,
				projection: new al({
					upperRight: t.CONST.UPPERRIGHT,
					lowerLeft: t.CONST.LOWERLEFT,
					lowerRight: t.CONST.LOWERRIGHT,
					northDirection: r.north_direction,
					nativeZoomLevels: p,
					tileSize: o
				}),
				prefix: s,
				background: r.bgcolor,
				imageFormat: l,
				nativeZoomLevels: p,
				minZoom: h,
				maxZoom: g,
				defaultZoom: r.defaultZoom,
				center: {
					x: (r == null ? void 0 : r.center[0]) || 0,
					y: (r == null ? void 0 : r.center[1]) || 64,
					z: (r == null ? void 0 : r.center[2]) || 0
				},
				overlays: new Map
			}));
			const y = new Map,
				L = new Map;
			if (Array.isArray(r.spawn)) {
				y.set("spawn", {
					id: "spawn",
					label: r.poititle,
					hidden: !1,
					priority: 0
				});
				const z = new Map;
				z.set("spawn", {
					id: "spawn",
					type: D.POINT,
					iconUrl: this.config + ((U = (I = t == null ? void 0 : t.CONST) == null ? void 0 : I.image) == null ? void 0 : U.spawnMarker),
					iconSize: [32, 37],
					iconAnchor: [15, 33],
					tooltip: "Spawn",
					location: {
						x: r.spawn[0] || 0,
						y: r.spawn[1] || 64,
						z: r.spawn[2] || 0
					}
				}), L.set("spawn", z)
			}
			this.mapMarkerSets.set(r.path, y), this.mapMarkers.set(r.path, L)
		}), (t.tilesets || []).forEach(r => {
			var n;
			if (!r.isOverlay) return;
			const i = {
				id: r.path,
				label: r.name || r.path,
				hidden: !0,
				priority: 0,
				tileLayerOptions: {
					baseUrl: r.base ? `${this.config}${r.base}/${r.path}` : this.config + r.path,
					tileSize: o,
					prefix: r.base,
					imageFormat: r.imgextension,
					nativeZoomLevels: r.zoomLevels,
					minZoom: r.minZoom,
					maxZoom: r.maxZoom
				}
			};
			(((n = a.get(r.world)) == null ? void 0 : n.maps) || []).forEach(s => {
				var l;
				(!((l = r == null ? void 0 : r.tilesets) != null && l.length) || r.tilesets.includes(s.name)) && s.overlays.set(r.path, i)
			})
		}), Array.from(a.values())
	}
	static buildComponents(t) {
		var a, r, i, n;
		const o = {
			coordinatesControl: void 0,
			linkControl: !0,
			layerControl: (r = (a = t == null ? void 0 : t.map) == null ? void 0 : a.controls) == null ? void 0 : r.overlays,
			markers: {
				showLabels: !1
			},
			players: {
				markers: void 0,
				imageUrl: tt,
				showImages: !1,
				grayHiddenPlayers: !1
			},
			chatBox: void 0,
			chatBalloons: !1,
			clockControl: void 0,
			logoControls: [],
			login: !1
		};
		return (n = (i = t == null ? void 0 : t.map) == null ? void 0 : i.controls) != null && n.coordsBox && (o.coordinatesControl = {
			showY: !1,
			label: "Location: ",
			showRegion: !0,
			showChunk: !1
		}), o
	}
	async getMarkerSets() {
		this.markersAbort = new AbortController;
		const t = await ae.getText(`${this.config}baseMarkers.js`, this.markersAbort.signal),
			o = t.matchAll(this.markersRegex);
		let a = {},
			r = {},
			i;
		for (const n of o) {
			let s = await ae.getText(`${this.config}${n[1]}`, this.markersAbort.signal);
			switch (n[1]) {
				case "markers.js":
					a = await at(s += "return markers || {};");
					break;
				case "markersDB.js":
					r = await at(s += "return markersDB || {};");
					break;
				default:
					i = await at(`var markers = {}, markersDB = {}; ${s} return {markers, markersDB}`), a = Object.assign(a, i.markers), r = Object.assign(r, i.markersDB);
					break
			}
		}
		for (const n in a) {
			if (!Object.prototype.hasOwnProperty.call(a, n) || !this.mapMarkerSets.has(n)) {
				console.warn(`Ignoring unknown map ${n} in marker set list`);
				continue
			}
			a[n].forEach((s, l) => {
				var h;
				this.mapMarkerSets.get(n).set(s.groupName, {
					id: s.groupName,
					hidden: !s.checked,
					label: s.displayName,
					priority: l
				});
				const p = new Map;
				(((h = r[s.groupName]) == null ? void 0 : h.raw) || []).forEach((g, y) => {
					const L = `marker_${y}`;
					p.set(L, this.buildMarker(L, g, s))
				}), this.mapMarkers.get(n).set(s.groupName, p)
			})
		}
	}
	buildMarker(t, o, a) {
		const r = {
			id: t,
			tooltip: ee(o.hovertext.trim()),
			tooltipHTML: o.hovertext.trim(),
			popup: a.createInfoWindow ? o.text : void 0,
			isPopupHTML: !0
		};
		return typeof o.points != "undefined" ? (r.style = {
			color: o.strokeColor,
			weight: o.strokeWeight,
			fill: o.fill
		}, r.location = et(xt(o.points)), r.points = o.points, r.type = o.isLine ? D.LINE : D.AREA) : (r.type = D.POINT, r.location = {
			x: o.x,
			y: o.y,
			z: o.z
		}, r.iconUrl = this.config + (o.icon || a.icon)), r
	}
	async loadServerConfiguration() {
		this.configurationAbort && this.configurationAbort.abort(), this.configurationAbort = new AbortController;
		const t = this.config,
			o = await ae.getText(`${t}overviewerConfig.js`, this.configurationAbort.signal);
		try {
			const a = await at(o + " return overviewerConfig;");
			this.store.commit(c.SET_SERVER_CONFIGURATION, ae.buildServerConfig(a)), this.store.commit(c.SET_SERVER_MESSAGES, ae.buildMessagesConfig(a)), this.store.commit(c.SET_WORLDS, this.buildWorlds(a)), this.store.commit(c.SET_COMPONENTS, ae.buildComponents(a)), await this.getMarkerSets()
		} catch (a) {
			throw console.error(a), a
		}
	}
	async populateMap(t) {
		this.store.commit(c.SET_MARKER_SETS, this.mapMarkerSets.get(t.name) || new Map), this.store.commit(c.SET_MARKERS, this.mapMarkers.get(t.name) || new Map)
	}
	createTileLayer(t) {
		return new ol(t)
	}
}
const Je = document.getElementById("splash");
Je && Je.addEventListener("transitionend", e => {
	e.target === Je && Je.style.opacity === "0" && (Je.hidden = !0)
});
console.log("%cУведомление"+"%c Тема создана https://vk.com/creativity_community","background: #3366ff; color: #FFFFFF;border-radius:5px;padding:3px","color:white;");
X.subscribe((e, t) => {
	(e.type === "toggleSidebarSectionCollapsedState" || e.type === "setSidebarSectionCollapsedState") && localStorage.setItem("uiSettings", JSON.stringify({
		sidebar: t.ui.sidebar
	}))
});
vt("dynmap", Ke);
vt("pl3xmap", G);
vt("squaremap", G);
vt("overviewer", ae);
const Lt = window.liveAtlasConfig;
window.liveAtlasLoaded = !0;
try {
	if (Lt.servers = ja(Lt), X.commit(c.INIT, Lt), X.state.servers.size > 1) {
		const t = window.location.pathname.split("/").pop(),
			o = t && X.state.servers.has(t) ? t : X.state.servers.keys().next().value;
		o !== t && window.history.replaceState({}, "", o + window.location.hash), X.commit(c.SET_CURRENT_SERVER, o)
	} else X.commit(c.SET_CURRENT_SERVER, X.state.servers.keys().next().value);
	Fo(el).use(X).use(Go).use(Yo).mount("#app")
} catch (e) {
	e instanceof K ? (console.error("LiveAtlas configuration is invalid:", e), gt(`LiveAtlas configuration is invalid:
` + e, !0)) : (console.error("LiveAtlas failed to load:", e), gt(`LiveAtlas failed to load:
` + e, !0))
}