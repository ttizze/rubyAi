var content = function (e) {
    "use strict";
    const t = [{
            langCode: "DE",
            langCodeForSpeech: "de-DE",
            supportsFormality: !0
        }, {
            langCode: "EN-GB",
            langCodeForSpeech: "en",
            voice: "Google UK English Male"
        }, {
            langCode: "EN-US",
            langCodeForSpeech: "en",
            voice: "Google UK English Male"
        }, {
            langCode: "FR",
            langCodeForSpeech: "fr-FR",
            voice: "Thomas",
            supportsFormality: !0
        }, {
            langCode: "ES",
            langCodeForSpeech: "es-ES",
            voice: "Google español",
            label: "ES",
            supportsFormality: !0
        }, {
            langCode: "IT",
            langCodeForSpeech: "it-IT",
            supportsFormality: !0
        }, {
            langCode: "ID",
            langCodeForSpeech: "id-ID"
        }, {
            langCode: "PL",
            langCodeForSpeech: "pl-PL",
            supportsFormality: !0
        }, {
            langCode: "NL",
            langCodeForSpeech: "nl-NL",
            voice: "Google Nederlands",
            label: "NL",
            supportsFormality: !0
        }, {
            langCode: "PT-PT",
            langCodeForSpeech: "pt-PT",
            supportsFormality: !0
        }, {
            langCode: "PT-BR",
            langCodeForSpeech: "pt-PT",
            supportsFormality: !0
        }, {
            langCode: "RU",
            langCodeForSpeech: "ru-RU",
            supportsFormality: !0
        }, {
            langCode: "ZH",
            langCodeForSpeech: "zh-CN"
        }, {
            langCode: "JA",
            langCodeForSpeech: "ja-JP",
            supportsFormality: !0
        }, {
            langCode: "BG",
            langCodeForSpeech: "bg-BG"
        }, {
            langCode: "CS",
            langCodeForSpeech: "cs-CZ"
        }, {
            langCode: "DA",
            langCodeForSpeech: "da-DK"
        }, {
            langCode: "ET",
            langCodeForSpeech: "et"
        }, {
            langCode: "FI",
            langCodeForSpeech: "fi-FI",
            voice: "Satu"
        }, {
            langCode: "EL",
            langCodeForSpeech: "el-GR"
        }, {
            langCode: "HU",
            langCodeForSpeech: "hu-HU"
        }, {
            langCode: "LV",
            langCodeForSpeech: "lv"
        }, {
            langCode: "LT",
            langCodeForSpeech: "lt"
        }, {
            langCode: "RO",
            langCodeForSpeech: "ro-RO"
        }, {
            langCode: "SK",
            langCodeForSpeech: "sk-SK"
        }, {
            langCode: "SL",
            langCodeForSpeech: "sl"
        }, {
            langCode: "SV",
            langCodeForSpeech: "sv-SE"
        }, {
            langCode: "TR",
            langCodeForSpeech: "tr-TR"
        }, {
            langCode: "UK",
            langCodeForSpeech: "uk-UA"
        }, {
            langCode: "NB",
            langCodeForSpeech: "nb-NO"
        }, {
            langCode: "KO",
            langCodeForSpeech: "ko-KR"
        }],
        n = 1,
        o = 2,
        i = "",
        s = "ONGOING_TRANSLATION",
        a = "IS_TRANLSATION_COMPLETE",
        r = "SHOW_ORIGINAL",
        l = "ON_GOING_AUTODETECTION",
        c = "ANONYMOUS_USER_MAX_CHAR_EXCEEDED",
        d = 1,
        u = 2,
        p = "inline",
        g = "automatic",
        m = "manual",
        h = 1,
        f = 2,
        _ = 3,
        w = 1,
        v = 3,
        $ = 1,
        b = 2,
        y = 3,
        C = 1,
        x = 2,
        T = 1,
        L = 2,
        E = [/[^.]+\.deepl\.com/g, /[^.]+\.figma\.com/g],
        k = [/docs.google\.com\/spreadsheets/g],
        S = [/[^.]+\.deepl\.com/g],
        M = {
            deepl_inline_ui: {
                z_index: 2147483650
            }
        },
        I = "HINT_KEYBOARD_SHORTCUT",
        D = "INPUT_TRANSLATION",
        O = "INLINE_TRANSLATION",
        N = "FULL_PAGE_TRANSLATION",
        A = {
            green_theme: "green_theme"
        },
        R = "INLINE_TRANSLATION_TRIGGER_ICON",
        P = "INLINE_TRANSLATION_SETTINGS_ICON",
        z = "INLINE_TRANSLATION_SETTING_POPUP",
        H = "INPUT_TRANSLATION_TRIGGER_ICON",
        F = "INPUT_TRANSLATION_SETTINGS_ICON",
        B = "INPUT_TRANSLATION_SETTING_POPUP",
        U = "SETTINGS_PAGE_FPT",
        q = "SETTINGS_PAGE_READING",
        j = "SETTINGS_PAGE_WRITING",
        W = "FPT_HIDE_MODAL",
        G = "INPUT_TRANSLATION_READ_MORE_LINK",
        V = "INLINE_TRANSLATION_READ_MORE_LINK",
        Z = "FPT_TRANSLATION_READ_MORE_LINK",
        K = "EXTENSION_HUB_TOGGLE_SWITCH",
        X = "HUB_CUSTOMIZE_SHORTCUT",
        Q = "HUB_LOGIN_BUTTON",
        Y = "HUB_UPGRADE_TO_PRO_LINK",
        J = "HUB_TRY_PRO_LINK",
        ee = "SETTINGS_PAGE_CUSTOMIZE_SHORTCUT_BUTTON",
        te = "HUB_FPT_ENABLE_CHECKBOX",
        ne = "HUB_FPT_DISABLE_CHECKBOX",
        oe = "DEEPL_WRITE_ICON",
        ie = "gmailOnboardingPopup",
        se = "gmailOnboardingIcon",
        ae = "HUB_VIEW_INTEGRATIONS",
        re = "HUB_CLOSE_CUSTOMIZATIONS_WIDGET",
        le = "trigger-translation",
        ce = "CLICK_ON_SHORTCUT_NOTIFICATION",
        de = "CLICK_ON_INLINE_TRANSLATION_SHOW_ALTERNATIVES",
        ue = "CLICK_ON_INLINE_TRANSLATION_CLOSE_ICON",
        pe = "CLICK_ON_LOGOUT_MENU_ENTRY",
        ge = "DISABLE_PER_SITE",
        me = "DISABLE_EVERYWHERE",
        he = "INPUT_TRANSLATION",
        fe = "INLINE_TRANSLATION",
        _e = 1,
        we = 2,
        ve = 0,
        $e = 1,
        be = 2,
        ye = 3,
        Ce = "cofdbpoegempjloogbagkncekinflcnj",
        xe = "fancfknaplihpclbhbpclnmmjcjanbaf",
        Te = "ocpdpnakdghopjcifldjidbdmfobmmoi",
        Le = {
            deepl: /^(.*\.)?deepl\.com$/gm,
            linguee: /^(.*\.)?linguee\.[a-z]{2,3}$/gm,
            google_translate: /^translate\.google\.com$/gm,
            gmail: /^mail\.google\.com$/gm
        },
        Ee = {
            word_365: "euc-word-edit.officeapps.live.com",
            power_point_365: "euc-powerpoint.officeapps.live.com"
        },
        ke = {
            word_365: "WacFrame_Word_0",
            power_point_365: "WacFrame_PowerPoint_0"
        },
        Se = {
            initial: "INITIAL",
            feedback: "FEEDBACK",
            review: "REVIEW"
        },
        Me = 1,
        Ie = 2,
        De = 3,
        Oe = {
            default: "DEFAULT",
            gdocs: "GDOCS",
            zendesk: "ZENDESK",
            whatsappWeb: "WHATSAPP_WEB",
            twitter: "TWITTER",
            gmail: "GMAIL"
        },
        Ne = {
            translate: "TRANSLATE",
            write: "WRITE"
        },
        Ae = ["script", "style"],
        Re = ["a", "abbr", "acronym", "b", "bdo", "big", "br", "button", "cite", "code", "dfn", "em", "i", "img", "input", "kbd", "label", "map", "object", "q", "samp", "script", "select", "small", "span", "strong", "sub", "sup", "textarea", "time", "tt", "var", "font"],
        Pe = "OPEN_TICKET",
        ze = "DETECT_TICKET_LANGUAGE",
        He = "SWITCH_TICKET_LANGUAGE",
        Fe = "ENABLE_AUTOTRANSLATE",
        Be = "DISABLE_AUTOTRANSLATE",
        Ue = "TRANSLATE_MESSAGE",
        qe = "TRANSLATE_INPUT",
        je = "ERROR",
        We = "TICKET",
        Ge = "LIVE_CHAT",
        Ve = "free",
        Ze = "pro",
        Ke = "none",
        Xe = "TEXT_REFINEMENT_REQUEST",
        Qe = "GDOCS_INSERT_COPY",
        Ye = "GDOCS_DISCARD_COPY",
        Je = "GDOCS_CHAR_LIMIT_REACHED",
        et = "RESULT_ACCEPTED",
        tt = "RESULT_REVERTED",
        nt = "ERROR",
        ot = "RESULT_ACCEPTED",
        it = "RESULT_REVERTED",
        st = "SHOWN",
        at = "CLICKED",
        rt = "READING_VIEW_TRANSLATE",
        lt = "COMPOSE_VIEW_TRANSLATE",
        ct = "COMPOSE_VIEW_IMPROVE",
        dt = () => {
            const e = "https://docs.google.com";
            return window.location.href.substr(0, e.length) === e
        },
        ut = () => {
            const e = document.querySelector(".docs-texteventtarget-iframe") ? .contentWindow;
            return {
                iFrame: e,
                editable: e && e.document.querySelector("[contenteditable=true]")
            }
        },
        pt = () => {
            const {
                iFrame: e,
                editable: t
            } = ut();
            if (!e || !t) return;
            const n = new e.ClipboardEvent("copy", {
                bubbles: !0,
                clipboardData: new e.DataTransfer
            });
            t.dispatchEvent(n)
        },
        gt = () => {
            const {
                iFrame: e,
                editable: t
            } = ut();
            if (!e || !t) return;
            const n = new e.CustomEvent("copy", {
                bubbles: !0
            });
            t.dispatchEvent(n);
            const o = (e => {
                if (0 === e.length) return !0;
                for (let t = 0; t < e.length; t++)
                    if (8203 !== e.charCodeAt(t)) return !1;
                return !0
            })(t.innerText.trim());
            return {
                html: o ? "" : t.innerHTML,
                text: o ? "" : t.innerText
            }
        },
        mt = () => {
            const e = document.querySelector("deepl-gdocs-icon") ? .shadowRoot.querySelector(".dl-gdocs-icon");
            if (!e) return void console.error("GDocs Icon was not present while trying to get the coordinates");
            const t = e.getBoundingClientRect(),
                n = document.body.parentNode.getBoundingClientRect(),
                {
                    top: o,
                    left: i,
                    right: s,
                    bottom: a,
                    height: r,
                    width: l
                } = t;
            return {
                x: i - n.left,
                y: a - n.top,
                selectedTop: o,
                selectedBottom: a,
                selectedRight: n.width - s,
                selectedLeft: i + window.scrollX,
                selectedWidth: l,
                height: r
            }
        },
        ht = () => {
            const e = document.querySelector("#docs-instant-bubble"),
                t = document.querySelector(".kix-appview-editor"),
                n = document.querySelector(".kix-page-paginated"),
                o = 120,
                i = 40,
                s = t.getBoundingClientRect();
            let a = !1;
            const r = {
                top: 0,
                left: 0
            };
            try {
                if (!e) throw new Error;
                const t = e.getBoundingClientRect();
                if (t.left <= 0) throw new Error;
                const n = Math.round(t.top + 134 || 0);
                r.left = t.left, r.top = n ? n + 20 : 0, r.top + o / 2 < s.top + 10 && (r.top = s.top + 10), r.top - o / 2 > s.bottom && (a = !0)
            } catch (e) {
                if (n) {
                    const e = n.getBoundingClientRect();
                    r.left = e.right - i / 2, r.top = s.top + 30
                }
            }
            return r.left + i / 2 > s.right && (a = !0), {
                shouldBeOutOfViewport: a,
                newPosition: r
            }
        },
        ft = () => !!document.querySelector("#docs-toolbar-wrapper"),
        _t = e => {
            const t = e.clipboardData.getData("application/x-vnd.google-docs-document-slice-clip+wrapped"),
                n = JSON.parse(t),
                o = JSON.parse(n.data).resolved,
                i = [];
            let s = "";
            for (let e = 0; e < o.dsl_spacers.length; e++) {
                const t = o.dsl_spacers[e];
                o.dsl_styleslices.forEach((t => {
                    if (t.stsl_styles.length > 0 && t.stsl_styles[e]) {
                        const n = `a${i.length+1}`;
                        i.push({
                            entity_type: t.stsl_type,
                            entity_abbreviation: n,
                            entity: t.stsl_styles[e]
                        }), s += `<${n}>`
                    }
                })), s += t
            }
            const a = [],
                r = s.split("\n").map((e => {
                    const t = e.replace(/<a\d+>/g, "").trim().length > 0;
                    if (t) {
                        const {
                            leading: n,
                            trailing: o,
                            processedLine: i
                        } = wt(e);
                        return a.push(i), {
                            isTranslatable: t,
                            index: a.length - 1,
                            leading: n,
                            trailing: o
                        }
                    }
                    return {
                        isTranslatable: t,
                        line: e
                    }
                }));
            return {
                textLines: a,
                entities: i,
                contentReference: r,
                originalObject: n,
                originalText: o.dsl_spacers
            }
        },
        wt = e => {
            const {
                leadingEntities: t,
                processedLine: n
            } = vt(e), {
                trailingEntities: o,
                processedLine: i
            } = $t(n);
            return {
                leading: t,
                trailing: o,
                processedLine: i
            }
        },
        vt = e => {
            let t = "",
                n = "",
                o = "",
                i = !0;
            for (const s of e) {
                if (i) {
                    const e = o[o.length - 1];
                    if ("<" === s && 0 === o.length) {
                        o = "<";
                        continue
                    }
                    if (">" === s && o.length > 0 && e.match(/\d/)) {
                        t = t + o + ">", o = "";
                        continue
                    }
                    if ("a" === s && o.length > 0 && "<" === e) {
                        o += "a";
                        continue
                    }
                    if (s.match(/\d/) && o.length > 0 && ("a" === e || e.match(/\d/))) {
                        o += s;
                        continue
                    }
                    if (bt(s) && 0 === o.length) {
                        t += s;
                        continue
                    }
                    i = !1, o = ""
                }
                n += s
            }
            return {
                processedLine: n,
                leadingEntities: t
            }
        },
        $t = e => {
            let t = "",
                n = "",
                o = "",
                i = !0;
            for (const s of e.split("").reverse()) {
                if (i) {
                    if (">" === s && 0 === o.length) {
                        o = ">";
                        continue
                    }
                    if ("<" === s && o.length > 0 && "a" === o[0]) {
                        t = "<" + o + t, o = "";
                        continue
                    }
                    if ("a" === s && o.length > 0 && o[0].match(/\d/)) {
                        o = "a" + o;
                        continue
                    }
                    if (s.match(/\d/) && o.length > 0 && (">" === o[0] || o[0].match(/\d/))) {
                        o = s + o;
                        continue
                    }
                    if (bt(s) && 0 === o.length) {
                        t = s + t;
                        continue
                    }
                    i = !1, o = ""
                }
                n = s + n
            }
            return {
                processedLine: n,
                trailingEntities: t
            }
        },
        bt = e => [16, 17, 18, 28].includes(e.charCodeAt(0)),
        yt = ({
            textLines: e,
            entities: t,
            contentReference: n
        }) => {
            let o = n.map((t => t.isTranslatable ? `${t.leading}${e[t.index]}${t.trailing}` : t.line)).join("\n");
            o = o.replace(/<\/a(\d+)>/g, "<a$1>");
            let i = "",
                s = [],
                a = 0,
                r = 0;
            for (; a + r < o.length;) {
                const e = a + r;
                if ("<" === o[e] && "a" === o[e + 1]) {
                    let n = "<a",
                        i = !0,
                        l = !1,
                        c = !0;
                    for (; c;) {
                        const t = o[e + n.length];
                        ">" === t ? (n += t, l || (i = !1), c = !1) : t.match(/\d/) ? (n += t, l = !0) : (i = !1, c = !1)
                    }
                    if (i) {
                        r += n.length;
                        const e = t.find((e => `<${e.entity_abbreviation}>` === n));
                        s.push({
                            ...e,
                            new_position: a
                        });
                        continue
                    }
                }
                i += o[e], a++
            }
            return {
                processedText: i,
                processedEntities: s
            }
        },
        Ct = ({
            entities: e,
            text: t,
            originalObject: n
        }) => {
            const o = xt({
                entities: e,
                text: t,
                originalObject: n
            });
            Tt(o)
        },
        xt = ({
            entities: e,
            text: t,
            originalObject: n
        }) => {
            const o = JSON.parse(n.data),
                i = o.resolved.dsl_styleslices.map((t => {
                    const n = e.filter((e => e.entity_type === t.stsl_type));
                    if (0 === n.length) return t;
                    const o = {};
                    let i = 0;
                    n.forEach((e => {
                        i = e.new_position > i ? e.new_position : i, o[`${e.new_position}`] = e.entity
                    }));
                    const s = [];
                    for (let e = 0; e <= i; e++) s.push(o[`${e}`] || null);
                    return {
                        ...t,
                        stsl_styles: s
                    }
                })),
                s = {
                    ...o.resolved,
                    dsl_spacers: t,
                    dsl_styleslices: i
                },
                a = {
                    ...n,
                    data: JSON.stringify({
                        ...o,
                        resolved: s
                    })
                };
            return JSON.stringify(a)
        },
        Tt = e => {
            const {
                editable: t
            } = ut(), n = new DataTransfer;
            n.setData("application/x-vnd.google-docs-document-slice-clip+wrapped", e);
            const o = new ClipboardEvent("paste", {
                bubbles: !0,
                clipboardData: n
            });
            t.dispatchEvent(o)
        },
        Lt = (e = 25, t = null) => new Promise((n => setTimeout((() => n(t)), e)));

    function Et(e, t) {
        return St(e) === t
    }

    function kt(e) {
        return !!e && (["EN"].includes(e) ? e = "EN-GB" : ["PT"].includes(e) && (e = "PT-PT"), t.map((e => e.langCode)).includes(e))
    }
    const St = e => e.substring(0, 2).toUpperCase();
    async function Mt(e) {
        let t = "";
        const n = await chrome.i18n.detectLanguage(e);
        return n && n.languages ? .length > 0 && (t = n.languages.sort(((e, t) => t.percentage - e.percentage))[0].language.substr(0, 2).toUpperCase()), t
    }
    const It = () => {
        let e, n, o = !1;
        return t.map((t => {
            let i;
            return o = ["EN-US", "EN-GB", "PT-PT", "PT-BR"].includes(t.langCode), o && (({
                optionLabel: e,
                selectedLabel: n
            } = function (e) {
                switch (e.langCode) {
                    case "EN-US":
                        return {
                            optionLabel: chrome.i18n.getMessage("supported_languages_EN_US"), selectedLabel: chrome.i18n.getMessage("selected_languages_EN_US")
                        };
                    case "EN-GB":
                        return {
                            optionLabel: chrome.i18n.getMessage("supported_languages_EN_UK"), selectedLabel: chrome.i18n.getMessage("selected_languages_EN_UK")
                        };
                    case "PT-PT":
                        return {
                            optionLabel: chrome.i18n.getMessage("supported_languages_PT_PT"), selectedLabel: chrome.i18n.getMessage("selected_languages_PT_PT")
                        };
                    case "PT-BR":
                        return {
                            optionLabel: chrome.i18n.getMessage("supported_languages_PT_BR"), selectedLabel: chrome.i18n.getMessage("selected_languages_PT_BR")
                        };
                    default:
                        return {
                            optionLabel: chrome.i18n.getMessage("supported_languages_undefined"), selectedLabel: chrome.i18n.getMessage("supported_languages_undefined")
                        }
                }
            }(t)), i = t.langCode.slice(0, 2).toLowerCase() + t.langCode.slice(2)), {
                value: t.langCode,
                label: o ? e : chrome.i18n.getMessage(`supported_languages_${t.langCode}`),
                selectedOptionLabel: o ? n : chrome.i18n.getMessage(`supported_languages_${t.langCode}`),
                regionalVariant: i
            }
        })).sort(((e, t) => e.label.localeCompare(t.label, chrome.i18n.getUILanguage())))
    };

    function Dt(e) {
        return "EN" === e ? "EN-GB" : "PT" === e ? "PT-PT" : e
    }

    function Ot(e, t, n) {
        return "EN" === e ? t["EN-GB"] === n || t["EN-US"] === n : "PT" === e ? t["PT-PT"] === n || t["PT-BR"] === n : t[e] === n
    }
    const Nt = "production",
        At = "development";

    function Rt() {
        return Nt === At
    }

    function Pt(e) {
        chrome.runtime.sendMessage({
            action: "dlTrackError",
            errorMessage: e
        })
    }
    const zt = "PROTOCOL_ERROR",
        Ht = "NETWORK_ERROR",
        Ft = "FULL_PAGE_SERVER_ERROR",
        Bt = "-32003",
        Ut = "429",
        qt = "403",
        jt = "1045601",
        Wt = "1042902",
        Gt = "ENTRY_NOT_FOUND",
        Vt = "SERVER_ERROR",
        Zt = "TRANSLATED_INPUT_NOT_SET",
        Kt = "HTML_NODE_CHAR_LENGTH_TOO_LONG",
        Xt = () => {
            const e = window.location.hostname.split(".");
            if (e.length < 2) return !1;
            return "zendesk.com" === `${e[e.length-2]}.${e[e.length-1]}`
        },
        Qt = () => document.querySelector("deepl-zendesk-controller"),
        Yt = e => {
            const t = e.match(/^\/agent\/tickets\/(\d+)$/);
            if (t) return t[1]
        },
        Jt = () => {
            const e = document.querySelector("#main_panes");
            if (e) return Array.from(e.children).find((e => "hidden" !== window.getComputedStyle(e).visibility && "none" !== window.getComputedStyle(e).display))
        },
        en = e => e.querySelector("deepl-zendesk-ticket-controller"),
        tn = (e, t) => {
            const n = document.createElement("deepl-zendesk-ticket-controller");
            return e.appendChild(n), n.createDOM({
                pane: e,
                ticketId: t
            }), n
        },
        nn = (e, t) => {
            try {
                const n = e.getPane();
                if (n.querySelector("deepl-zendesk-top-icon") || rn(n, e), !t) return;
                e.getTicketLanguageInformation().isSupported ? (n.querySelector("deepl-zendesk-toolbar") || ln(n, e), n.querySelector("deepl-zendesk-input-icon") || cn(n, e)) : n.querySelector("deepl-zendesk-toolbar") || ln(n, e)
            } catch (e) {
                Rt() && console.error(e), Pt(e.message)
            }
        },
        on = () => {
            an(["deepl-zendesk-ticket-controller", "deepl-zendesk-top-icon", "deepl-zendesk-toolbar", "deepl-zendesk-input-icon", "deepl-zendesk-message-controller", "deepl-zendesk-submit-button-tooltip", "deepl-zendesk-onboarding-modal"])
        },
        sn = () => {
            an(["deepl-zendesk-toolbar", "deepl-zendesk-input-icon", "deepl-zendesk-message-controller", "deepl-zendesk-onboarding-modal"]);
            const e = Array.from(document.getElementsByTagName("deepl-zendesk-ticket-controller"));
            for (const t of e) t.setIsAutoTranslateEnabled(!1)
        },
        an = e => {
            try {
                for (const t of e)
                    if (t) {
                        const e = Array.from(document.getElementsByTagName(t));
                        for (const t of e) t.cleanupDOM(), t.remove()
                    }
            } catch (e) {
                Rt() && console.error(e), Pt(e.message)
            }
        },
        rn = (e, t) => {
            const n = document.createElement("deepl-zendesk-top-icon"),
                o = e.querySelector('[data-test-id="omni-header-filter-trigger"],[data-test-id="omni-header-ticket-actions-trigger"]');
            if (!o) return;
            const i = o.parentElement;
            return i ? (i.prepend(n), n.createDOM({
                controller: t
            }), n) : void 0
        },
        ln = (e, t) => {
            const n = document.createElement("deepl-zendesk-toolbar"),
                o = e.querySelector('[data-test-id="ticket-call-controls-action-bar"]');
            if (o) return o.after(n), n.createDOM({
                controller: t
            }), n.updateLanguageInformation(t.getTicketLanguageInformation()), n
        },
        cn = (e, t) => {
            const n = document.createElement("deepl-zendesk-input-icon"),
                o = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul'),
                i = e.querySelector('div[data-test-id="ticket-rich-text-editor"] [contenteditable="true"]');
            if (i && o && o) return o.append(n), n.createDOM({
                controller: t,
                editable: i
            }), n
        },
        dn = e => {
            const t = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul[data-test-id="ticket-editor-app-icon-view"][data-cy="ticket-editor-app-icon-view"]'),
                n = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul');
            return t ? We : n ? Ge : void 0
        },
        un = e => Array.from(e.querySelectorAll('article[data-test-id="omni-log-comment-item"]')),
        pn = e => {
            const t = un(e);
            if (!(t.length < 1)) return t.sort(((e, t) => {
                const n = e.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime"),
                    o = t.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime");
                return n === o ? 0 : new Date(n) < Date(o) ? -1 : 1
            })), t[0]
        },
        gn = (e, t) => {
            const n = un(e);
            if (n.length < 1) return;
            n.sort(((e, t) => {
                const n = e.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime"),
                    o = t.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime");
                return n === o ? 0 : new Date(n) < Date(o) ? -1 : 1
            }));
            const o = [];
            for (let e = 0; e < t; e++) n[e] && o.push(n[e]);
            return o
        },
        mn = e => e.querySelector('[data-test-id="omni-log-item-message"]'),
        hn = async e => {
            const t = pn(e);
            if (t) {
                const e = t ? mn(t).innerText : "";
                return await Mt(e)
            }
        }, fn = async e => {
            const t = gn(e, 12),
                n = [];
            for (const e in t) {
                const o = t[e],
                    i = o ? mn(o).innerText : "",
                    s = o.querySelector('[data-test-id="omni-log-item-sender"] a') ? .getAttribute("href"),
                    a = o.querySelector('[data-test-id="omni-log-item-sender"] a strong').innerText;
                if (0 == i.length) continue;
                let r = n.find((e => e.id === s));
                const l = i.includes(`: ${a}`) && i.indexOf(`: ${a}`) + `: ${a}`.length === i.length,
                    c = 0 === Number(e);
                r || (r = {
                    id: s,
                    name: a,
                    messages: [],
                    isLikelyCustomer: !1,
                    isFirstMessage: !1
                }, n.push(r)), l && (r.isLikelyCustomer = !0), c && (r.isFirstMessage = !0), r.messages.push({
                    message: i,
                    shouldBeSkipped: l || i.length <= 3
                })
            }
            const o = (1 === n.filter((e => e.isLikelyCustomer)).length ? n.find((e => e.isLikelyCustomer)) : n.find((e => !e.isFirstMessage))).messages.filter((e => !e.shouldBeSkipped)).map((e => e.message));
            o.sort(((e, t) => e.length > t.length ? -1 : e.length < t.length ? 1 : 0));
            const i = o[0];
            if (i) return await Mt(i)
        }, _n = (e, t) => {
            const n = e.querySelector("deepl-zendesk-toolbar");
            return !!n && (n.updateLanguageInformation(t), !0)
        }, wn = (e, {
            isEnabled: t
        }) => {
            const n = e.querySelector("deepl-zendesk-toolbar");
            return !!n && (n.updateAutoTranslateStatus(t), !0)
        }, vn = e => {
            const t = e.querySelector("deepl-zendesk-top-icon");
            return !!t && (t.triggerUpdateIconSettings(), !0)
        }, $n = (e, t) => {
            const n = e.querySelector("deepl-zendesk-input-icon");
            return !!n && (n.updateTargetLanguage(t), !0)
        }, bn = e => {
            try {
                const t = e.getPane(),
                    n = un(t);
                for (const t of n) yn(t) || Cn(t, e)
            } catch (e) {
                Rt() && console.error(e), Pt(e.message)
            }
        }, yn = e => e.querySelector("deepl-zendesk-message-controller"), Cn = (e, t) => {
            const n = document.createElement("deepl-zendesk-message-controller");
            return mn(e).after(n), n.createDOM({
                controller: t,
                message: e
            }), n
        }, xn = e => {
            const t = Array.from(e.getPane().querySelectorAll("deepl-zendesk-message-controller"));
            for (const e of t) e.triggerTranslateAgain()
        }, Tn = e => {
            const t = Array.from(e.querySelectorAll("iframe"));
            for (const e of t) e.contentWindow.postMessage("dl-zendesk-welcome-screen", "*")
        }, Ln = e => {
            const t = e.querySelector("deepl-zendesk-input-icon");
            return !!t && t.getInputHasSelection()
        }, En = e => {
            const t = e.getPane().querySelector('[data-test-id="submit_button-button"]'),
                n = t.closest('[data-garden-id="buttons.button_group_view"]'),
                o = t.getBoundingClientRect(),
                i = n.getBoundingClientRect(),
                s = document.createElement("deepl-zendesk-submit-button-tooltip");
            return s.createDOM({
                controller: e,
                coords: o,
                containerCoords: i
            }), n.prepend(s), s
        }, kn = e => {
            const t = e.querySelector('[data-test-id="conversation-translator-language-detection-prompt"]');
            t && t.remove()
        }, Sn = () => {
            Qt() ? .showOnboarding()
        };

    function Mn(e) {
        return new Promise(((t, n) => {
            chrome.runtime.sendMessage(e, (function (e) {
                e && e.error && n(e), t(e)
            }))
        }))
    }

    function In(e, t) {
        return Mn({
            action: "dlSendNotification",
            payload: {
                type: e,
                options: t
            }
        })
    }
    async function Dn(e) {
        if (!chrome.tabs) return;
        const t = await chrome.tabs.query({
            active: !0,
            currentWindow: !0
        });
        chrome.tabs.sendMessage(t[0].id, e)
    }
    const On = () => {
        const e = "https://mail.google.com";
        return window.location.href.substr(0, e.length) === e
    };

    function Nn(e, {
        isShadow: t = !1,
        exceptions: n = []
    } = {}) {
        const o = o => {
            const i = t ? o.composedPath()[0] : o.target;
            !e || e.contains(i) || o.defaultPrevented || function (e, t) {
                for (let n of t)
                    if (e.closest(n)) return !0;
                return !1
            }(i, n) || e.dispatchEvent(new CustomEvent("click_outside", e))
        };
        return document.addEventListener("click", o, !0), {
            destroy() {
                document.removeEventListener("click", o, !0)
            }
        }
    }

    function An(e) {
        document.addEventListener("deepl-reset-event", e)
    }

    function Rn(e) {
        const t = e || window.getSelection().getRangeAt(0),
            n = t.getBoundingClientRect(),
            o = document.body.parentNode.getBoundingClientRect(),
            {
                top: i,
                left: s,
                right: a,
                bottom: r,
                height: l,
                width: c
            } = n,
            d = {
                x: s - o.left,
                y: r - o.top,
                selectedTop: i,
                selectedBottom: r,
                selectedRight: o.width - a,
                selectedLeft: s + window.pageXOffset,
                selectedWidth: c,
                height: l
            };
        if (t.collapsed) {
            const e = t.commonAncestorContainer;
            d.x = e.getBoundingClientRect().left, d.y = e.getBoundingClientRect().top + e.offsetHeight
        }
        return d
    }

    function Pn(e) {
        let t = e.childNodes[0];
        for (let n of Array.from(e.childNodes))
            if (t.getBoundingClientRect || (t = n), n.getBoundingClientRect && (n.getBoundingClientRect().right > t.getBoundingClientRect().right && (t = n), n.hasChildNodes())) {
                const e = Pn(n);
                if (e && e.getBoundingClientRect) {
                    const o = n.getBoundingClientRect(),
                        i = e.getBoundingClientRect();
                    o.right < i.right && (t = e)
                }
            } return t
    }
    const zn = e => {
        const t = [],
            n = [];
        return Bn({
            domElements: t,
            strings: n,
            element: e
        }), {
            domElements: t,
            strings: n
        }
    };

    function Hn(e) {
        for (var t = 0; t < e.childNodes.length; ++t) {
            const n = e.childNodes[t];
            if ("#text" != n.nodeName && "#comment" != n.nodeName) {
                if ("block" == window.getComputedStyle(n).display) return !0;
                if (Hn(n)) return !0
            }
        }
        return !1
    }
    const Fn = ({
            strings: e,
            domElements: t
        }) => {
            for (const n in t) t[n].innerHTML = e[n]
        },
        Bn = ({
            domElements: e,
            strings: t,
            element: n
        }) => {
            if ("#text" != n.nodeName && "#comment" != n.nodeName)
                if (function (e) {
                        if (Un(e) || jn(e)) return !1;
                        for (const t of e.childNodes)
                            if ("#text" == t.nodeName && "" != t.wholeText.trim() || "font" == t.nodeName) return !0;
                        for (const t of e.childNodes)
                            if (!Un(t) && (!qn(t) || jn(t) || "inline" != window.getComputedStyle(t).display || Hn(e))) return !1;
                        if (void 0 === e.innerText || "" == e.innerText.trim()) return !1;
                        if (1 === e.childNodes.length) {
                            const t = e.childNodes[0];
                            return Un(t)
                        }
                        return !0
                    }(n)) e.push(n), t.push(n.innerHTML);
                else
                    for (const o of n.childNodes) Bn({
                        domElements: e,
                        strings: t,
                        element: o
                    })
        };
    const Un = e => "#text" == e.nodeName || "#comment" == e.nodeName,
        qn = e => Re.includes(e.nodeName.toLowerCase()),
        jn = e => Ae.includes(e.nodeName.toLowerCase());

    function Wn(e) {
        for (var t = []; null != e.parentNode;) {
            for (var n = 0, o = 0, i = 0; i < e.parentNode.childNodes.length; i++) {
                var s = e.parentNode.childNodes[i];
                s.nodeName === e.nodeName && (s === e && (o = n), n++)
            }
            e.hasAttribute("id") && "" != e.id ? t.unshift(e.nodeName.toLowerCase() + "#" + e.id) : n > 1 ? t.unshift(e.nodeName.toLowerCase() + ":nth-child(" + (o + 1) + ")") : t.unshift(e.nodeName.toLowerCase()), e = e.parentNode
        }
        return t.slice(1)
    }

    function Gn() {}
    const Vn = e => e;

    function Zn(e) {
        return e()
    }

    function Kn() {
        return Object.create(null)
    }

    function Xn(e) {
        e.forEach(Zn)
    }

    function Qn(e) {
        return "function" == typeof e
    }

    function Yn(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }

    function Jn(e, ...t) {
        if (null == e) return Gn;
        const n = e.subscribe(...t);
        return n.unsubscribe ? () => n.unsubscribe() : n
    }

    function eo(e, t, n) {
        e.$$.on_destroy.push(Jn(t, n))
    }

    function to(e, t, n, o) {
        if (e) {
            const i = no(e, t, n, o);
            return e[0](i)
        }
    }

    function no(e, t, n, o) {
        return e[1] && o ? function (e, t) {
            for (const n in t) e[n] = t[n];
            return e
        }(n.ctx.slice(), e[1](o(t))) : n.ctx
    }

    function oo(e, t, n, o) {
        if (e[2] && o) {
            const i = e[2](o(n));
            if (void 0 === t.dirty) return i;
            if ("object" == typeof i) {
                const e = [],
                    n = Math.max(t.dirty.length, i.length);
                for (let o = 0; o < n; o += 1) e[o] = t.dirty[o] | i[o];
                return e
            }
            return t.dirty | i
        }
        return t.dirty
    }

    function io(e, t, n, o, i, s) {
        if (i) {
            const a = no(t, n, o, s);
            e.p(a, i)
        }
    }

    function so(e) {
        if (e.ctx.length > 32) {
            const t = [],
                n = e.ctx.length / 32;
            for (let e = 0; e < n; e++) t[e] = -1;
            return t
        }
        return -1
    }

    function ao(e) {
        return null == e ? "" : e
    }

    function ro(e, t, n) {
        return e.set(n), t
    }

    function lo(e) {
        return e && Qn(e.destroy) ? e.destroy : Gn
    }
    const co = "undefined" != typeof window;
    let uo = co ? () => window.performance.now() : () => Date.now(),
        po = co ? e => requestAnimationFrame(e) : Gn;
    const go = new Set;

    function mo(e) {
        go.forEach((t => {
            t.c(e) || (go.delete(t), t.f())
        })), 0 !== go.size && po(mo)
    }

    function ho(e) {
        let t;
        return 0 === go.size && po(mo), {
            promise: new Promise((n => {
                go.add(t = {
                    c: e,
                    f: n
                })
            })),
            abort() {
                go.delete(t)
            }
        }
    }

    function fo(e, t) {
        e.appendChild(t)
    }

    function _o(e) {
        if (!e) return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }

    function wo(e) {
        const t = yo("style");
        return function (e, t) {
            fo(e.head || e, t), t.sheet
        }(_o(e), t), t.sheet
    }

    function vo(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function $o(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function bo(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function yo(e) {
        return document.createElement(e)
    }

    function Co(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function xo(e) {
        return document.createTextNode(e)
    }

    function To() {
        return xo(" ")
    }

    function Lo() {
        return xo("")
    }

    function Eo(e, t, n, o) {
        return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o)
    }

    function ko(e) {
        return function (t) {
            return t.preventDefault(), e.call(this, t)
        }
    }

    function So(e) {
        return function (t) {
            return t.stopPropagation(), e.call(this, t)
        }
    }

    function Mo(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function Io(e, t) {
        t = "" + t, e.wholeText !== t && (e.data = t)
    }

    function Do(e, t) {
        e.value = null == t ? "" : t
    }

    function Oo(e, t, n, o) {
        null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, o ? "important" : "")
    }

    function No(e, t) {
        for (let n = 0; n < e.options.length; n += 1) {
            const o = e.options[n];
            if (o.__value === t) return void(o.selected = !0)
        }
        e.selectedIndex = -1
    }
    let Ao;

    function Ro() {
        if (void 0 === Ao) {
            Ao = !1;
            try {
                "undefined" != typeof window && window.parent && window.parent.document
            } catch (e) {
                Ao = !0
            }
        }
        return Ao
    }

    function Po(e, t) {
        "static" === getComputedStyle(e).position && (e.style.position = "relative");
        const n = yo("iframe");
        n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1;
        const o = Ro();
        let i;
        return o ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = Eo(window, "message", (e => {
            e.source === n.contentWindow && t()
        }))) : (n.src = "about:blank", n.onload = () => {
            i = Eo(n.contentWindow, "resize", t)
        }), fo(e, n), () => {
            (o || i && n.contentWindow) && i(), $o(n)
        }
    }

    function zo(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }

    function Ho(e, t, {
        bubbles: n = !1,
        cancelable: o = !1
    } = {}) {
        const i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, n, o, t), i
    }
    class Fo {
        constructor(e = !1) {
            this.is_svg = !1, this.is_svg = e, this.e = this.n = null
        }
        c(e) {
            this.h(e)
        }
        m(e, t, n = null) {
            this.e || (this.is_svg ? this.e = Co(t.nodeName) : this.e = yo(t.nodeName), this.t = t, this.c(e)), this.i(n)
        }
        h(e) {
            this.e.innerHTML = e, this.n = Array.from(this.e.childNodes)
        }
        i(e) {
            for (let t = 0; t < this.n.length; t += 1) vo(this.t, this.n[t], e)
        }
        p(e) {
            this.d(), this.h(e), this.i(this.a)
        }
        d() {
            this.n.forEach($o)
        }
    }

    function Bo(e, t) {
        return new e(t)
    }
    const Uo = new Map;
    let qo, jo = 0;

    function Wo(e, t, n, o, i, s, a, r = 0) {
        const l = 16.666 / o;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const o = t + (n - t) * s(e);
            c += 100 * e + `%{${a(o,1-o)}}\n`
        }
        const d = c + `100% {${a(n,1-n)}}\n}`,
            u = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${r}`,
            p = _o(e),
            {
                stylesheet: g,
                rules: m
            } = Uo.get(p) || function (e, t) {
                const n = {
                    stylesheet: wo(t),
                    rules: {}
                };
                return Uo.set(e, n), n
            }(p, e);
        m[u] || (m[u] = !0, g.insertRule(`@keyframes ${u} ${d}`, g.cssRules.length));
        const h = e.style.animation || "";
        return e.style.animation = `${h?`${h}, `:""}${u} ${o}ms linear ${i}ms 1 both`, jo += 1, u
    }

    function Go(e, t) {
        const n = (e.style.animation || "").split(", "),
            o = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
            i = n.length - o.length;
        i && (e.style.animation = o.join(", "), jo -= i, jo || po((() => {
            jo || (Uo.forEach((e => {
                const {
                    ownerNode: t
                } = e.stylesheet;
                t && $o(t)
            })), Uo.clear())
        })))
    }

    function Vo(e) {
        qo = e
    }

    function Zo() {
        if (!qo) throw new Error("Function called outside component initialization");
        return qo
    }

    function Ko(e) {
        Zo().$$.on_mount.push(e)
    }

    function Xo(e) {
        Zo().$$.on_destroy.push(e)
    }

    function Qo() {
        const e = Zo();
        return (t, n, {
            cancelable: o = !1
        } = {}) => {
            const i = e.$$.callbacks[t];
            if (i) {
                const s = Ho(t, n, {
                    cancelable: o
                });
                return i.slice().forEach((t => {
                    t.call(e, s)
                })), !s.defaultPrevented
            }
            return !0
        }
    }

    function Yo(e, t) {
        return Zo().$$.context.set(e, t), t
    }

    function Jo(e) {
        return Zo().$$.context.get(e)
    }

    function ei(e, t) {
        const n = e.$$.callbacks[t.type];
        n && n.slice().forEach((e => e.call(this, t)))
    }
    const ti = [],
        ni = [],
        oi = [],
        ii = [],
        si = Promise.resolve();
    let ai = !1;

    function ri() {
        ai || (ai = !0, si.then(pi))
    }

    function li(e) {
        oi.push(e)
    }
    const ci = new Set;
    let di, ui = 0;

    function pi() {
        const e = qo;
        do {
            for (; ui < ti.length;) {
                const e = ti[ui];
                ui++, Vo(e), gi(e.$$)
            }
            for (Vo(null), ti.length = 0, ui = 0; ni.length;) ni.pop()();
            for (let e = 0; e < oi.length; e += 1) {
                const t = oi[e];
                ci.has(t) || (ci.add(t), t())
            }
            oi.length = 0
        } while (ti.length);
        for (; ii.length;) ii.pop()();
        ai = !1, ci.clear(), Vo(e)
    }

    function gi(e) {
        if (null !== e.fragment) {
            e.update(), Xn(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(li)
        }
    }

    function mi() {
        return di || (di = Promise.resolve(), di.then((() => {
            di = null
        }))), di
    }

    function hi(e, t, n) {
        e.dispatchEvent(Ho(`${t?"intro":"outro"}${n}`))
    }
    const fi = new Set;
    let _i;

    function wi() {
        _i = {
            r: 0,
            c: [],
            p: _i
        }
    }

    function vi() {
        _i.r || Xn(_i.c), _i = _i.p
    }

    function $i(e, t) {
        e && e.i && (fi.delete(e), e.i(t))
    }

    function bi(e, t, n, o) {
        if (e && e.o) {
            if (fi.has(e)) return;
            fi.add(e), _i.c.push((() => {
                fi.delete(e), o && (n && e.d(1), o())
            })), e.o(t)
        } else o && o()
    }
    const yi = {
        duration: 0
    };

    function Ci(e, t, n) {
        const o = {
            direction: "in"
        };
        let i, s, a = t(e, n, o),
            r = !1,
            l = 0;

        function c() {
            i && Go(e, i)
        }

        function d() {
            const {
                delay: t = 0,
                duration: n = 300,
                easing: o = Vn,
                tick: d = Gn,
                css: u
            } = a || yi;
            u && (i = Wo(e, 0, 1, n, t, o, u, l++)), d(0, 1);
            const p = uo() + t,
                g = p + n;
            s && s.abort(), r = !0, li((() => hi(e, !0, "start"))), s = ho((t => {
                if (r) {
                    if (t >= g) return d(1, 0), hi(e, !0, "end"), c(), r = !1;
                    if (t >= p) {
                        const e = o((t - p) / n);
                        d(e, 1 - e)
                    }
                }
                return r
            }))
        }
        let u = !1;
        return {
            start() {
                u || (u = !0, Go(e), Qn(a) ? (a = a(o), mi().then(d)) : d())
            },
            invalidate() {
                u = !1
            },
            end() {
                r && (c(), r = !1)
            }
        }
    }

    function xi(e, t, n) {
        const o = {
            direction: "out"
        };
        let i, s = t(e, n, o),
            a = !0;
        const r = _i;

        function l() {
            const {
                delay: t = 0,
                duration: n = 300,
                easing: o = Vn,
                tick: l = Gn,
                css: c
            } = s || yi;
            c && (i = Wo(e, 1, 0, n, t, o, c));
            const d = uo() + t,
                u = d + n;
            li((() => hi(e, !1, "start"))), ho((t => {
                if (a) {
                    if (t >= u) return l(0, 1), hi(e, !1, "end"), --r.r || Xn(r.c), !1;
                    if (t >= d) {
                        const e = o((t - d) / n);
                        l(1 - e, e)
                    }
                }
                return a
            }))
        }
        return r.r += 1, Qn(s) ? mi().then((() => {
            s = s(o), l()
        })) : l(), {
            end(t) {
                t && s.tick && s.tick(1, 0), a && (i && Go(e, i), a = !1)
            }
        }
    }

    function Ti(e) {
        e && e.c()
    }

    function Li(e, t, n, o) {
        const {
            fragment: i,
            after_update: s
        } = e.$$;
        i && i.m(t, n), o || li((() => {
            const t = e.$$.on_mount.map(Zn).filter(Qn);
            e.$$.on_destroy ? e.$$.on_destroy.push(...t) : Xn(t), e.$$.on_mount = []
        })), s.forEach(li)
    }

    function Ei(e, t) {
        const n = e.$$;
        null !== n.fragment && (Xn(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function ki(e, t, n, o, i, s, a, r = [-1]) {
        const l = qo;
        Vo(e);
        const c = e.$$ = {
            fragment: null,
            ctx: [],
            props: s,
            update: Gn,
            not_equal: i,
            bound: Kn(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(t.context || (l ? l.$$.context : [])),
            callbacks: Kn(),
            dirty: r,
            skip_bound: !1,
            root: t.target || l.$$.root
        };
        a && a(c.root);
        let d = !1;
        if (c.ctx = n ? n(e, t.props || {}, ((t, n, ...o) => {
                const s = o.length ? o[0] : n;
                return c.ctx && i(c.ctx[t], c.ctx[t] = s) && (!c.skip_bound && c.bound[t] && c.bound[t](s), d && function (e, t) {
                    -1 === e.$$.dirty[0] && (ti.push(e), ri(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
                }(e, t)), n
            })) : [], c.update(), d = !0, Xn(c.before_update), c.fragment = !!o && o(c.ctx), t.target) {
            if (t.hydrate) {
                const e = function (e) {
                    return Array.from(e.childNodes)
                }(t.target);
                c.fragment && c.fragment.l(e), e.forEach($o)
            } else c.fragment && c.fragment.c();
            t.intro && $i(e.$$.fragment), Li(e, t.target, t.anchor, t.customElement), pi()
        }
        Vo(l)
    }
    class Si {
        $destroy() {
            Ei(this, 1), this.$destroy = Gn
        }
        $on(e, t) {
            if (!Qn(t)) return Gn;
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t), () => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    }
    const Mi = [];

    function Ii(e, t = Gn) {
        let n;
        const o = new Set;

        function i(t) {
            if (Yn(e, t) && (e = t, n)) {
                const t = !Mi.length;
                for (const t of o) t[1](), Mi.push(t, e);
                if (t) {
                    for (let e = 0; e < Mi.length; e += 2) Mi[e][0](Mi[e + 1]);
                    Mi.length = 0
                }
            }
        }
        return {
            set: i,
            update: function (t) {
                i(t(e))
            },
            subscribe: function (s, a = Gn) {
                const r = [s, a];
                return o.add(r), 1 === o.size && (n = t(i) || Gn), s(e), () => {
                    o.delete(r), 0 === o.size && (n(), n = null)
                }
            }
        }
    }
    const Di = "Chrome",
        Oi = "Edge",
        Ni = "Brave",
        Ai = "Firefox",
        Ri = "Opera",
        Pi = "Safari";

    function zi() {
        return !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }

    function Hi(e, t) {
        let n;
        try {
            switch (e) {
                case Di:
                case Ni:
                    n = t.split("Chrome/")[1].split(" ")[0];
                    break;
                case Oi:
                    n = t.split("Edg/")[1].split(" ")[0];
                    break;
                case Ai:
                    n = t.split("Firefox/")[1].split(" ")[0];
                    break;
                case Ri:
                    n = t.split("OPR/")[1].split(" ")[0];
                    break;
                case Pi:
                    n = t.split("Version/")[1].split(" ")[0]
            }
        } catch (t) {
            console.error(`Could not get the browsers (${e}) version from user agent`, t)
        }
        try {
            !n && navigator ? .userAgentData && function (e) {
                return e === Di || e === Oi || e === Ni || e === Ri
            }(e) && (n = Fi(e).version)
        } catch (t) {
            console.error(`Could not get the chromium browsers (${e}) version`, t)
        }
        return n && "string" == typeof n ? n : "unknown_browser_version"
    }

    function Fi(e) {
        if (!navigator.userAgentData || !e) return;
        const t = new RegExp(`${e}`, "i");
        return navigator.userAgentData.brands.filter((e => t.test(e.brand)))[0]
    }
    const Bi = Ii(!1);
    const Ui = function () {
        let e = {
            isDarkMode: zi()
        };
        const {
            subscribe: t,
            update: n
        } = Ii(e);
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (() => {
            n((e => ({
                ...e,
                isDarkMode: zi()
            })))
        })), {
            subscribe: t,
            update: e => {
                if (Rt()) {
                    const t = "background-color: #403f3e;padding: 3px; font-size:12px;color:#c8e0c1; font-weight:600";
                    console.log(`%c${(new Date).toISOString()} UPDATE WEBSITE STATE`, t, e)
                }
                n((t => (e && e.error ? function (e) {
                    try {
                        const t = document.createElement("deepl-alert");
                        document.documentElement.appendChild(t), t.createDOM(e), An((() => t.cleanupDOM))
                    } catch (e) {
                        Rt() && console.log(e)
                    }
                }(e.error) : Bi.set(!1), {
                    ...t,
                    ...e,
                    error: e.error ? e.error : void 0
                })))
            }
        }
    }();
    e.websiteData = void 0;
    const qi = Ui.subscribe((t => {
        e.websiteData = {
            ...t
        }, t && Object.keys(t).length > 0 && Mn({
            action: "newWebsiteState",
            payload: {
                ...t
            }
        })
    }));

    function ji(e, t) {
        const n = t.filter((t => new RegExp(t).exec(e)));
        return n && n.length > 0
    }

    function Wi(e) {
        let t;
        try {
            t = new URL(e)
        } catch (e) {
            return !1
        }
        return "http:" === t.protocol || "https:" === t.protocol
    }

    function Gi(e, t) {
        if (e && t && "string" == typeof e && Array.isArray(t)) {
            if (0 === t.length) return e;
            for (const n of t) e.substr(0, n.length) === n && (e = e.substr(n.length));
            return e
        }
    }

    function Vi(e) {
        try {
            return new URL(e), !0
        } catch (e) {
            return !1
        }
    }

    function Zi() {
        const e = document.querySelector("deepl-whatsapp-messages-in-translator");
        if (e) {
            const t = document.body.querySelector("[data-testid=conversation-panel-messages]"),
                n = document.querySelector("footer").getBoundingClientRect(),
                o = t.getBoundingClientRect();
            return e.style.left = o.right - 58 + "px", void(e.style.top = n.top - 55 + "px")
        }
    }

    function Ki() {
        let e = new MutationObserver((() => {
            ! function () {
                const e = document.body.querySelectorAll(".message-in");
                for (let t of e)
                    if ("true" !== t.dataset.dlHasMessageTranslator && "true" !== t.dataset.dlIsTranslated) {
                        t.dataset.dlHasMessageTranslator = "true";
                        const e = t.querySelector(".selectable-text.copyable-text");
                        if (e && e.innerText && !Vi(e.innerText)) {
                            const n = document.createElement("deepl-whatsapp-message-in-translator");
                            n.createDOM(e, t), n.style.position = "absolute", n.style.top = "0px", t.appendChild(n)
                        }
                    }
            }()
        }));
        e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }), window.addEventListener("resize", Zi), An((() => {
            window.removeEventListener("resize", Zi), e.disconnect()
        }))
    }

    function Xi() {
        console.log("customizing for twitter");
        let e = new MutationObserver((() => {
            ! function () {
                const e = document.body.querySelectorAll("[data-testid='tweetText']");
                for (let t of e)
                    if ("true" !== t.dataset.dlHasMessageTranslator && (t.dataset.dlHasMessageTranslator = "true", t && t.innerText)) {
                        const e = document.createElement("deepl-twitter-tweet-link");
                        return e.createDOM(t), void t.appendChild(e)
                    }
            }()
        }));
        e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }), An((() => e.disconnect()))
    }

    function Qi(e) {
        try {
            return JSON.parse(atob(e.split(".")[1]))
        } catch (e) {
            return null
        }
    }
    const Yi = "DOCS_GOOGLE_COM_FEEDBACK_FORM",
        Ji = "DEEPL_COM_PRO",
        es = "DEEPL_COM_TRANSLATOR",
        ts = "DEEPL_COM_HOMEPAGE",
        ns = "DEEPL_COM_WRITE",
        os = "SHORTCUT_SETTINGS",
        is = "CHROME_WRITE_A_REVIEW",
        ss = "EDGE_WRITE_A_REVIEW",
        as = "DEEPL_SUPPORT";

    function rs(e) {
        switch (e) {
            case H:
                return 1;
            case R:
                return 2;
            case z:
                return 3;
            case B:
                return 4;
            case U:
                return 5;
            case q:
                return 6;
            case j:
                return 7;
            case W:
                return 8;
            case F:
                return 9;
            case P:
                return 10;
            case G:
                return 11;
            case V:
                return 12;
            case Z:
                return 13;
            case K:
                return 14;
            case X:
                return 15;
            case Q:
                return 16;
            case Y:
                return 17;
            case J:
                return 18;
            case ee:
                return 19;
            case te:
                return 20;
            case ne:
                return 21;
            case oe:
                return 22;
            case ie:
                return 25;
            case se:
                return 26;
            case ae:
                return 23;
            case re:
                return 24;
            default:
                return 0
        }
    }

    function ls(e) {
        switch (e) {
            case Ce:
                return $e;
            case xe:
                return be;
            case Te:
                return ye;
            default:
                return ve
        }
    }

    function cs(e) {
        switch (e) {
            case Ve:
                return 1;
            case Ze:
                return 2;
            case Ke:
                return 3;
            default:
                return 0
        }
    }

    function ds(e) {
        switch (e) {
            case rt:
                return 1;
            case lt:
                return 2;
            case ct:
                return 3;
            default:
                return 0
        }
    }
    async function us(e) {
        let t, n, o, i, s, a, r, l = !1;
        try {
            l = await ms()
        } catch (e) {
            console.error(`DAP: Failed to fetch logged in status. Error: ${e.message}`)
        }
        try {
            const e = await gs(["session", "installationId"]);
            n = e.session.id, t = e.installationId
        } catch (e) {
            console.error(`DAP: Failed to fetch settings. Error: ${e.message}`)
        }
        try {
            const e = await async function () {
                return await chrome.storage.local.get(["isLoggedIn", "isProUser", "sessionType", "translatorServiceType", "apiServiceType", "docTranslatorServiceType", "accountId"])
            }();
            o = cs(e.translatorServiceType), i = cs(e.apiServiceType), s = cs(e.docTranslatorServiceType), r = l ? 2 === o || 2 === i || 2 === s ? f : _ : h
        } catch (e) {
            console.error(`DAP: Failed to fetch user information. Error: ${e.message}`)
        }
        try {
            a = await async function () {
                return (await chrome.storage.local.get(["browserInstanceId"])).browserInstanceId
            }()
        } catch (e) {
            console.error(e)
        }
        const c = function () {
                const e = navigator ? .userAgent || "unknown_user_agent",
                    t = navigator ? .userAgentData ? .platform || navigator ? .platform || "unknown_platform";
                let n = "unknown_browser",
                    o = "unknown_browser_version";
                const i = navigator ? .language || "unknown_browser_language";
                try {
                    const t = e.match(/chrome|chromium|crios/i),
                        i = e.match(/edg/i) || Fi(Oi),
                        s = e.match(/firefox|fxios/i),
                        a = e.match(/opr\//i) || Fi(Ri),
                        r = e.match(/safari/i),
                        l = Fi(Ni);
                    t ? (n = Di, i && (n = Oi), a && (n = Ri), l && (n = Ni)) : i ? n = Oi : s ? n = Ai : a ? n = Ri : r && (n = Pi), o = Hi(n, e)
                } catch (e) {
                    console.error("Could not get the name of the brower", e)
                }
                return {
                    userAgent: e,
                    platform: t,
                    browser: n,
                    browserVersion: o,
                    browserLang: i
                }
            }(),
            d = {
                eventId: void 0,
                extensionVersion: "1.8.0",
                sessionId: n,
                installationId: t,
                browserInstanceId: a,
                originStore: ls(chrome.runtime.id),
                userInfos: {
                    userType: r,
                    translatorServiceType: o,
                    apiServiceType: i,
                    docTranslatorServiceType: s
                },
                userAgent: c.userAgent,
                platform: c.platform,
                browser: c.browser,
                browserVersion: c.browserVersion,
                browserLang: c.browserLang
            },
            u = e ? e(d) : d;
        return fetch("https://s.deepl.com/chrome/statistics", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(u)
        }).then((e => {
            e.ok || console.log(`DAP ${u.eventId} request failed: ${e}`)
        }))
    }
    async function ps() {
        if (!await ms()) return;
        const e = await async function () {
            const e = await chrome.storage.local.get(["accountId", "a_t", "i_t"]);
            if (e && e.accountId) return e.accountId;
            if (e && e.a_t) {
                const t = Qi(e.a_t),
                    n = Qi(e.i_t);
                return t.sub || n.sub
            }
        }();
        return us((t => ({
            ...t,
            eventId: 60067,
            accountData: {
                accountUuid: e
            }
        })))
    }
    async function gs(e) {
        if (e.includes("session")) {
            const e = await chrome.storage.sync.get(["session"]);
            e && !e.session && await async function () {
                const e = crypto.randomUUID();
                await chrome.storage.sync.set({
                    session: {
                        id: e,
                        timestamp: Date.now()
                    }
                });
                try {
                    await ps()
                } catch (e) {
                    console.error(e)
                }
            }()
        }
        return new Promise(((t, n) => {
            chrome.storage.sync.get(e, (o => {
                o ? t(o) : n(`Can not get ${e}`)
            }))
        }))
    }
    async function ms() {
        const e = await chrome.storage.local.get(["isLoggedIn"]);
        return !(!e || !e.isLoggedIn)
    }
    const hs = function () {
            const {
                subscribe: e,
                set: t,
                update: n
            } = Ii({});
            return chrome.storage.sync.get(null, (e => {
                t(e), chrome.storage.local.get(["isLoggedIn", "isProUser", "translatorServiceType", "apiServiceType", "docTranslatorServiceType", "browserInstanceId"], (e => {
                    n((t => ({
                        ...t,
                        ...e
                    })))
                }))
            })), chrome.storage.onChanged.addListener((e => {
                const t = ["a_t", "r_t", "i_t", "accountId"];
                let o = {};
                for (const [n, i] of Object.entries(e)) !1 === t.includes(n) && (o[n] = i.newValue);
                if (Rt()) {
                    const e = "background-color: #324054;padding: 3px; font-size:12px;color:#e1e8c3; font-weight:600";
                    console.log(`%c${(new Date).toISOString()} UPDATE USER SETTINGS`, e, o)
                }
                n((e => ({
                    ...e,
                    ...o
                })))
            })), {
                subscribe: e,
                set: e => chrome.storage.sync.set(e)
            }
        }(),
        fs = function () {
            const {
                subscribe: e,
                update: t
            } = Ii({});
            return chrome.runtime.onMessage.addListener((function (e, n) {
                switch (e.action) {
                    case "newWebsiteState":
                        e.payload && t((t => ({
                            ...t,
                            [n.tab.id]: {
                                ...t[n.tab.id],
                                ...e.payload,
                                error: e.payload.error ? e.payload.error : void 0
                            }
                        })));
                        break;
                    case "resetWebsiteState":
                        e.payload && t((t => ({
                            ...t,
                            [n.tab.id]: {
                                ...e.payload
                            }
                        })))
                }
            })), {
                subscribe: e,
                fetchCurrentWebsiteSettings: () => {
                    chrome.tabs && chrome.tabs.query({
                        active: !0,
                        currentWindow: !0
                    }, (function (e) {
                        chrome.tabs.sendMessage(e[0].id, {
                            action: "dlGetWebsiteData"
                        }, (function (n) {
                            t((t => ({
                                ...t,
                                [e[0].id]: {
                                    ...t[e[0].id],
                                    ...n
                                }
                            })))
                        }))
                    }))
                }
            }
        }();
    ! function (e, t, n) {
        const o = !Array.isArray(e),
            i = o ? [e] : e,
            s = t.length < 2;
        return a = e => {
            let n = !1;
            const a = [];
            let r = 0,
                l = Gn;
            const c = () => {
                    if (r) return;
                    l();
                    const n = t(o ? a[0] : a, e);
                    s ? e(n) : l = Qn(n) ? n : Gn
                },
                d = i.map(((e, t) => Jn(e, (e => {
                    a[t] = e, r &= ~(1 << t), n && c()
                }), (() => {
                    r |= 1 << t
                }))));
            return n = !0, c(),
                function () {
                    Xn(d), l()
                }
        }, {
            subscribe: Ii(n, a).subscribe
        };
        var a
    }(fs, (async (e, t) => {
        if (!chrome.tabs) return;
        t(e[(await chrome.tabs.query({
            active: !0,
            currentWindow: !0
        }))[0].id])
    }));
    const _s = {
        TRIGGER_HEIGHT: 25,
        TRIGGER_WIDTH: 25,
        TRIGGER_EXPENDED_WIDTH: 60
    };
    const ws = "deepl-gmail-translate-email-toolbar",
        vs = "deepl-gmail-header-toolbar",
        $s = "deepl-gmail-controller",
        bs = "deepl-gmail-message-write-ui",
        ys = "deepl-gmail-character-limit-popup",
        Cs = "deepl-writing-ui-added",
        xs = 5e3,
        Ts = () => document.querySelector($s),
        Ls = () => document.createElement($s),
        Es = e => {
            try {
                for (const t of e)
                    if (t) {
                        const e = Array.from(document.getElementsByTagName(t));
                        for (const t of e) t.cleanupDOM && t.cleanupDOM(), t.remove()
                    }
            } catch (e) {
                Rt() && console.error(e), Pt(e.message)
            }
        },
        ks = () => document.querySelectorAll("[data-message-id]").length > 0,
        Ss = () => document.querySelectorAll("[data-message-id]"),
        Ms = e => !!e && !!e.querySelector(ws),
        Is = e => {
            const {
                bottom: t,
                right: n
            } = e.getBoundingClientRect(), o = t - 30, i = n - 30;
            let s = !1;
            return document.querySelectorAll('[role="dialog"]').forEach((t => {
                const n = (a = i, r = o, l = t.getBoundingClientRect(), a >= l.left && a <= l.right && r >= l.top && r <= l.bottom);
                var a, r, l;
                const c = t.contains(e);
                n && !c && (s = !0)
            })), s
        },
        Ds = e => {
            if (e) return e.querySelector("table")
        },
        Os = e => [...[...It().filter((e => void 0 === e.regionalVariant)).map((e => ({
            value: e.value,
            label: e.value,
            selectedOptionLabel: e.value
        }))), {
            value: "EN",
            label: "EN",
            selectedOptionLabel: "EN"
        }, {
            value: "PT",
            label: "PT",
            selectedOptionLabel: "PT"
        }].map((t => e && t.value === e.value ? {
            ...t,
            label: `${t.label} ${chrome.i18n.getMessage("gmail_language_detected")}`
        } : t))].sort(((e, t) => e.value.localeCompare(t.value))),
        Ns = e => {
            const t = e.getBoundingClientRect();
            return {
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }
        },
        As = (e, t) => {
            const n = new MouseEvent("click", {
                view: window,
                bubbles: !0,
                cancelable: !0,
                clientX: e,
                clientY: t
            });
            document.elementFromPoint(e, t) ? .dispatchEvent(n)
        },
        Rs = e => {
            const {
                x: t,
                y: n
            } = Ns(e);
            As(t, n)
        },
        Ps = (e, t) => {
            const n = document.body;
            new MutationObserver(((o, i) => {
                for (const s of o)
                    if ("childList" === s.type && n.querySelector(e)) {
                        i.disconnect(), t(n.querySelector(e));
                        break
                    }
            })).observe(n, {
                childList: !0,
                subtree: !0
            })
        },
        zs = () => {
            const e = document.querySelectorAll("[data-message-id]");
            for (const t of e) {
                const e = t.nextElementSibling;
                if (e && "DIV" === e.tagName) return e
            }
            return null
        },
        Hs = () => {
            const e = document.querySelectorAll('span[role="link"]');
            let t;
            for (let n = 0; n < e.length; n++) {
                const o = e[n],
                    i = o.previousElementSibling;
                if (i && "SPAN" === i.tagName && "link" === i.getAttribute("role")) {
                    const e = o.parentElement,
                        n = e.querySelectorAll('span[role="link"]'),
                        i = e.querySelectorAll("span");
                    2 === n.length && 2 === i.length && (t = o)
                }
            }
            return t
        };
    let Fs, Bs, Us, qs, js, Ws, Gs, Vs, Zs;
    const {
        deepl_inline_ui: Ks
    } = M;

    function Xs({
        websiteData: e,
        platformBehaviour: t = Oe.default,
        textProcessingMode: n = Ne.translate
    }) {
        try {
            let o;
            switch (Qs(), Bs = document.createElement("deepl-inline-translate-tooltip"), Bs.platformBehaviour = t, Bs.textProcessingMode = n, Bs.style.zIndex = Ks.z_index, document.documentElement.appendChild(Bs), t) {
                case Oe.gdocs:
                    o = mt;
                    break;
                case Oe.default:
                default:
                    o = Rn
            }
            Bs.createDOM(o, Qs, e), Ui.update({
                isTranslationTooltipInjected: !0
            })
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function Qs() {
        try {
            Bs && (Bs.cleanupDOM(), Array.from(document.getElementsByTagName("deepl-inline-translate-tooltip"), (e => e.remove())), Ui.update({
                isTranslationTooltipInjected: !1
            }), Bs = void 0)
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function Ys(e = Oe.default) {
        try {
            if (Us) return;
            let t;
            switch (Us = document.createElement("deepl-inline-translate-settings-tooltip"), Us.style.zIndex = Ks.z_index, document.documentElement.appendChild(Us), e) {
                case Oe.gdocs:
                    t = "deepl-gdocs-icon";
                    break;
                case Oe.default:
                default:
                    t = "deepl-inline-trigger"
            }
            const n = function (e) {
                if (!e) return;
                const t = e.getBoundingClientRect(),
                    n = document.body.parentNode.getBoundingClientRect(),
                    {
                        top: o,
                        left: i,
                        right: s,
                        bottom: a,
                        height: r,
                        width: l
                    } = t;
                return {
                    x: i - n.left,
                    y: a - n.top,
                    top: o,
                    bottom: a,
                    right: n.width - s,
                    left: i + window.pageXOffset,
                    width: l,
                    height: r
                }
            }(document.querySelector(t).shadowRoot.querySelector('[data-qa="deepl-inline-translate-menu-icon"]'));
            Us.createDOM(n, Js), Ui.update({
                isInlineTranslateSettingsTooltipInjected: !0
            }), An((() => {
                Js()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function Js() {
        try {
            if (!Us) return;
            Us.cleanupDOM(), Array.from(document.getElementsByTagName("deepl-inline-translate-settings-tooltip"), (e => e.remove())), Ui.update({
                isInlineTranslateSettingsTooltipInjected: !1
            }), Us = void 0
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function ea() {
        try {
            if (document.querySelector("deepl-page-load-popup")) return;
            Fs = document.createElement("deepl-page-load-popup"), document.documentElement.appendChild(Fs), Fs.createDOM(), document.addEventListener("click", ta), An((() => {
                ta()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function ta() {
        try {
            Fs && (Fs.cleanupDOM(), Array.from(document.getElementsByTagName("deepl-page-load-popup"), (e => e.remove())), Fs = void 0, document.removeEventListener("click", ta))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function na() {
        try {
            if (document.querySelector("deepl-gdocs-icon")) return;
            Gs = document.createElement("deepl-gdocs-icon"), document.documentElement.appendChild(Gs), Gs.createDOM(), An((() => {
                oa()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function oa() {
        try {
            Gs && (Gs.cleanupDOM(), Array.from(document.getElementsByTagName("deepl-gdocs-icon"), (e => e.remove())), Gs = void 0, document.removeEventListener("click", oa))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function ia() {
        try {
            if (Qt()) return;
            Vs = document.createElement("deepl-zendesk-controller"), document.documentElement.appendChild(Vs), Vs.createDOM(), An((() => {
                sa()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function sa() {
        try {
            Vs && (Vs.cleanupDOM(), Array.from(document.getElementsByTagName("deepl-zendesk-controller"), (e => e.remove())), Vs = void 0, document.removeEventListener("click", sa))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function aa() {
        try {
            if (document.querySelector("deepl-input-controller")) return;
            js = document.createElement("deepl-input-controller"), document.body.appendChild(js), js.createDOM(), An((() => {
                ca()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function ra() {
        try {
            if (Ts()) return;
            Zs = Ls(), document.documentElement.appendChild(Zs), Zs.createDOM(), An((() => {
                la()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function la() {
        try {
            Zs && (Zs.cleanupDOM(), Array.from(document.getElementsByTagName($s), (e => e.remove())), Zs = void 0, document.removeEventListener("click", la))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function ca() {
        try {
            if (js) {
                js.cleanupDOM();
                const e = Array.from(document.querySelectorAll("deepl-input-controller"));
                for (const t of e) t.remove();
                js = void 0, document.removeEventListener("click", ca)
            }
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }
    async function da(e) {
        try {
            if (!qs) return;
            qs.cleanupDOM(), Array.from(document.getElementsByTagName("deepl-inline-trigger"), (e => e.remove())), qs = void 0;
            if (!(await gs(["isInlineHighlighterShown"])).isInlineHighlighterShown && !e.target.contains(qs)) {
                try {
                    Mn({
                        action: "dltrackCloseInlineHighlighter",
                        payload: {
                            trigger: De
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                hs.set({
                    isInlineHighlighterShown: !0
                })
            }
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function ua(e, t) {
        da();
        try {
            qs = document.createElement("deepl-inline-trigger"), qs.style.zIndex = Ks.z_index, document.documentElement.appendChild(qs), qs.createDOM(e, t), An((() => {
                da()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }

    function pa(e) {
        const t = t => {
            requestAnimationFrame((() => {
                const n = window.getSelection();
                if (!n.toString().trim()) return;
                if (2 === t ? .button) return;
                const o = n.getRangeAt(0) ? .commonAncestorContainer;
                if ((o.contains(t.target) || t.target.contains(o)) && !n.isCollapsed && !n.anchorNode ? .parentNode ? .isContentEditable) {
                    let n = {
                        clientX: t.clientX || 0,
                        pageY: t.pageY || 0,
                        detail: t ? .detail || 0,
                        isOutsideOfView: ha(t)
                    };
                    ua(e, n)
                }
            }))
        };
        document.addEventListener("mouseup", t), document.addEventListener("mousedown", da), An((() => {
            document.removeEventListener("mouseup", t), document.removeEventListener("mousedown", da)
        }))
    }

    function ga(e, t) {
        try {
            Ws = document.createElement("deepl-notification"), Ws.style.zIndex = Ks.z_index, document.documentElement.appendChild(Ws), Ws.createDOM(e, t), An((() => {
                Ws.cleanupDOM()
            }))
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }
    const ma = (e = Se.initial) => {
        const t = document.createElement("deepl-ask-for-review-popup");
        document.documentElement.appendChild(t), t.createDOM({
            reviewStage: e
        }), An((() => {
            t.cleanupDOM()
        }))
    };

    function ha({
        clientX: e = 0,
        pageY: t = 0
    } = {}) {
        const n = window.innerWidth || document.documentElement.innerWidth,
            o = window.scrollHeight || document.documentElement.scrollHeight;
        return e < 0 || e >= n || (t < 0 || t >= o)
    }

    function fa(e) {
        switch (e) {
            case "web.whatsapp.com":
                Ki();
                break;
            case "twitter.com":
            case "tweetdeck.twitter.com":
                Xi()
        }
    }
    async function _a(e) {
        const t = e.split(".");
        "deepl.com" === t.filter(((e, n) => n === t.length - 1 || n === t.length - 2)).join(".") && (document.body.dataset.dlBrowserExtensionPresent = "true")
    }
    async function wa(e) {
        const t = await gs(["shouldDisplayFeedbackPopup"]);
        if ("https://deepl.typeform.com/to/MkMfP2Y6" === e) t.shouldDisplayFeedbackPopup && (hs.set({
            shouldDisplayFeedbackPopup: !1
        }), ma(Se.feedback))
    }

    function va(e, t) {
        if ("web.whatsapp.com" === t) {
            const t = document.documentElement.querySelector("#side");
            return !t || !t.contains(e)
        }
        return !0
    }

    function $a(e, t) {
        if ("web.whatsapp.com" === t) {
            const t = document.documentElement.querySelector("#side");
            if (t && t.contains(e)) return !1
        }
        return !0
    }
    let ba, ya, Ca, xa, Ta, La, Ea, ka = 0,
        Sa = [];
    const Ma = Ui.subscribe((e => {
            ba = e.translationState, e.translatedDOM && (Sa = e.translatedDOM.map((e => e))), e.translationState !== Ta && (Ta = e.translationState, ba === r && Da())
        })),
        Ia = hs.subscribe((e => {
            if (0 !== Object.keys(e).length) {
                if (La = e.isProUser, Ea = e.isLoggedIn, xa && xa !== e.selectedTargetLanguage) {
                    const e = ba !== i;
                    e && Da(), Ui.update({
                        translatedDOM: []
                    }), Sa = [], e && Ui.update({
                        translationState: i
                    })
                }
                xa = e.selectedTargetLanguage
            }
        }));

    function Da() {
        Sa.forEach((e => {
            Fa(e.original, e.clone), za(e.original, e.clone), Oa(e.original, !1)
        })), Ca && (Ca.disconnect(), Ca = void 0), ya && (document.removeEventListener("scroll", ya), ya = void 0), ba = i
    }

    function Oa(e, t) {
        if ("#text" != e.nodeName && "#comment" != e.nodeName && e.dataset) {
            e.dataset.dlTranslated = t;
            for (var n = 0; n < e.childNodes.length; ++n) Oa(e.childNodes[n], t)
        }
    }

    function Na(e) {
        if (void 0 !== e.dataset) {
            void 0 === e.dataset.dlUid && (e.dataset.dlUid = ka++), void 0 === e.dataset.dlOriginal && (e.dataset.dlOriginal = !0);
            for (var t = 0; t < e.childNodes.length; ++t) Na(e.childNodes[t])
        }
    }

    function Aa(e) {
        if (void 0 !== e.attributes) {
            var t = null;
            for (void 0 !== e.dataset && void 0 !== e.dataset.dlUid && (t = e.dataset.dlUid); e.attributes.length > 0;) e.removeAttribute(e.attributes[0].name);
            null !== t && (e.dataset.dlUid = t)
        }
        for (var n = 0; n < e.childNodes.length; ++n) Aa(e.childNodes[n])
    }

    function Ra(e, t) {
        Na(t);
        var n = t.cloneNode(!0);
        Aa(n), e.push({
            original: t,
            clone: n
        }), Oa(t, !0)
    }

    function Pa(e, t) {
        if (void 0 === t.dataset) return null;
        if (e.dataset && e.dataset.dlUid && t.dataset.dlUid && e.dataset.dlUid === t.dataset.dlUid) return e;
        for (var n = 0; n < e.childNodes.length; ++n) {
            var o = Pa(e.childNodes[n], t);
            if (null !== o) return o
        }
        return null
    }

    function za(e, t) {
        for (var n = []; e.childNodes.length > 0;) n.push(e.removeChild(e.childNodes[0]));
        for (; t.childNodes.length > 0;) e.appendChild(t.childNodes[0]);
        for (var o = 0; o < n.length; ++o) t.appendChild(n[o])
    }

    function Ha(e, t) {
        if (null !== e.parentNode && null !== t.parentNode) {
            var n = document.createElement("div");
            e.parentNode.replaceChild(n, e), t.parentNode.replaceChild(e, t), n.parentNode.replaceChild(t, n), za(e, t)
        }
    }

    function Fa(e, t) {
        for (var n = 0; n < t.childNodes.length; ++n) {
            var o, i = t.childNodes[n],
                s = Pa(e, i);
            if (s) Ha(o = s.dataset && "true" === s.dataset.dlOriginal ? s : s.cloneNode(!1), i), Fa(e, o);
            else Fa(e, i)
        }
    }

    function Ba(t, n = true) {
        if ("#text" == t.nodeName || "#comment" == t.nodeName) return false;
        if (!$a(t, e.websiteData.hostname)) return false;
        if (t.isContentEditable && n) return false;
        if (function (e) {
                switch (e.tagName.toLowerCase()) {
                    case "input":
                        return "submit" !== e.getAttribute("type");
                    case "textarea":
                        return true;
                    default:
                        return false
                }
            }(t)) return false;
        if (jn(t)) return false;
        for (var o = 0; o < t.childNodes.length; ++o) {
            if ("#text" == (i = t.childNodes[o]).nodeName && "" != i.wholeText.trim() || "font" == i.nodeName) return true
        }
        for (o = 0; o < t.childNodes.length; ++o) {
            var i;
            if ("#text" != (i = t.childNodes[o]).nodeName && "#comment" != i.nodeName && (!qn(i) || jn(i) || "inline" != window.getComputedStyle(i).display || Hn(t))) return false
        }
        return void 0 !== t.innerText && "" != t.innerText.trim()
    }

    function Ua(e) {
        if (void 0 !== e.dataset && (void 0 === e.dataset.dlTranslated || "false" === e.dataset.dlTranslated)) return !1;
        for (var t = 0; t < e.childNodes.length; ++t) {
            var n = e.childNodes[t];
            if ("#text" != n.nodeName && "#comment" != n.nodeName && !Ua(n)) return !1
        }
        return !0
    }

    function qa(e, t) {
        if ("#text" != t.nodeName && "#comment" != t.nodeName && ! function (e) {
                if ("no" == e.getAttribute("translate")) return !0;
                var t = e.className;
                return !(null == t || null == t.split || !t.split(" ").includes("notranslate"))
            }(t))
            if (Ba(t))(function (e, t) {
                var n = e.getBoundingClientRect(),
                    o = window.innerWidth || document.documentElement.clientWidth,
                    i = window.innerHeight || document.documentElement.clientHeight;
                if (n.bottom < 0 - i * t || n.right < 0 - o * t) return !1;
                if (n.top > i * (1 + t)) return !1;
                if (n.left > o * (1 + t)) return !1;
                var s = window.getComputedStyle(e).position;
                return "absolute" === s || "fixed" === s || null !== e.offsetParent
            })(t, .3) && !Ua(t) && Ra(e, t);
            else
                for (var n = 0; n < t.childNodes.length; ++n) qa(e, t.childNodes[n])
    }
    async function ja(e, t) {
        if (!La || !Ea) return;
        const n = [];
        try {
            if (qa(n, document.documentElement), 0 === n.length) return;
            Ui.update({
                translationState: s
            }), await async function (e, t, n, o, i, s) {
                if (e.length > 0) return Mn({
                    action: "dlRequestHtmlTranslation",
                    payload: {
                        sourceLang: t,
                        trigger: o,
                        texts: e.map((e => e.clone.innerHTML.replace(/<!--(.|\s)*?-->/g, ""))),
                        isFirstTime: i,
                        domainName: s
                    }
                }).then((t => {
                    for (var n = 0; n < e.length; ++n) e[n].clone.innerHTML = t[n], Fa(e[n].original, e[n].clone), za(e[n].original, e[n].clone), Oa(e[n].original, !0)
                }))
            }(n, e.sourceLang, e.noTranslationLanguages, e.trigger, t, window.location.hostname)
        } catch (e) {
            console.error("error", e);
            for (var o = 0; o < n.length; ++o) Oa(n[o].original, !1);
            return Ui.update({
                translationState: i,
                error: e.name ? e.name : e
            }), Ca && Ca.disconnect, void(ya && document.removeEventListener("scroll", ya))
        }
        Ui.update({
            translationState: a
        }), n.length > 0 && Ui.update({
            translatedDOM: [...Sa, ...n]
        })
    }
    async function Wa(e) {
        Ca && (Ca.disconnect(), Ca = void 0), ya && (document.removeEventListener("scroll", ya), ya = void 0);
        let t, n, o = !1;
        Sa.length > 0 ? (Ui.update({
            translationState: s
        }), Da(), Sa.forEach((e => {
            za(e.original, e.clone), za(e.original, e.clone), Oa(e.original, !0)
        })), Ui.update({
            translationState: a
        })) : o = !0, await ja(e, o), ya = async () => {
            n = !0, window.clearTimeout(t), t = setTimeout((function () {
                ba === a && window.requestAnimationFrame((async () => {
                    await ja(e, !1), n = !1
                }))
            }), 100)
        }, document.addEventListener("scroll", ya), Ca = new MutationObserver((t => {
            if (n) return;
            if (ba !== a) return;
            t.filter((e => e.addedNodes && e.addedNodes.length > 0)).length > 0 && window.requestAnimationFrame((async () => {
                await ja(e, !1)
            }))
        })), Ca.observe(document.body, {
            childList: !0,
            subtree: !0
        }), An((() => {
            Ma(), Ia(), Ca && Ca.disconnect(), ya && document.removeEventListener("scroll", ya)
        }))
    }
    const Ga = t => {
            if (t.targetLang && window.getSelection() && window.getSelection().toString()) {
                var n = window.getSelection().toString();
                document.getElementsByTagName("deepl-inline-translate-tooltip").length || Xs({
                    websiteData: Ui
                }), Ui.update({
                    translationState: s,
                    translatedSnippet: "",
                    snippetDetectedSourceLang: "",
                    translatedDOMSnippet: "",
                    originalSnippet: ""
                }), Mn({
                    action: "dlRequestInlineTranslation",
                    payload: {
                        requests: [{
                            text: n
                        }],
                        domainName: window.location.hostname,
                        trigger: p,
                        sourceLang: e.websiteData.websiteLanguage
                    }
                }).then((e => {
                    Ui.update({
                        translationState: i,
                        translatedSnippet: e[0].text,
                        snippetDetectedSourceLang: e[0].detected_source_language,
                        originalSnippet: n,
                        websiteLanguage: e[0].detected_source_language
                    })
                })).catch((e => {
                    Ui.update({
                        translationState: i,
                        originalSnippet: n,
                        error: e.message ? e.message : e
                    })
                }))
            }
        },
        Va = async e => {
            const t = await Mn({
                action: "dlGetAppSettings"
            });
            let n = window.getSelection().anchorNode;
            "#text" === n.nodeName.toLowerCase() && (n = n.parentNode);
            const o = "textarea" === n.nodeName.toLowerCase(),
                i = n.closest('[contenteditable="true"]'),
                s = n.closest("textarea"),
                a = n.querySelector("textarea"),
                r = a && a.selectionStart !== a.selectionEnd,
                l = o && n || i || s || r && a;
            l ? ((e, t, n) => {
                const o = document.querySelector("deepl-input-controller");
                o && (t ? o.openSettingsFromShortcut() : n ? o.triggerTranslation() : o.openSettingsFromShortcut())
            })(0, e, t.targetLanguageUserInput) : Ga({
                targetLang: t.selectedTargetLanguage
            }), Mn({
                action: "dlTrackRightClick",
                payload: {
                    translationType: l ? u : d,
                    domainName: window.location.host
                }
            })
        }, Za = async (e, t) => {
            Qs();
            const n = await Mn({
                action: "dlGetAppSettings"
            });
            var o;
            Wa({
                sourceLang: e,
                trigger: t,
                isFirstTime: !0,
                noTranslationLanguages: (o = n.languagesForTranslation, Object.keys(o).filter((e => {
                    o[e]
                })))
            }).catch((e => {
                Ui.update({
                    translationState: i,
                    error: e.message ? e.message : e
                })
            }))
        }, Ka = async e => {
            if (e.length <= 5e3) return !1;
            const t = await nr();
            return !t.isLoggedIn || !t.isProUser
        }, Xa = async t => {
            const {
                event: n,
                targetLang: o
            } = t;
            if (o) {
                const {
                    originalText: t,
                    textLines: o,
                    entities: a,
                    contentReference: r,
                    originalObject: l
                } = _t(n);
                if (document.getElementsByTagName("deepl-inline-translate-tooltip").length || Xs({
                        websiteData: Ui,
                        platformBehaviour: Oe.gdocs
                    }), await Ka(t)) return void Ui.update({
                    translationState: c,
                    translatedSnippet: "",
                    originalSnippet: t
                });
                Ui.update({
                    translationState: s,
                    translatedSnippet: "",
                    snippetDetectedSourceLang: "",
                    translatedDOMSnippet: "",
                    originalSnippet: ""
                }), Mn({
                    action: "dlRequestInlineTranslation",
                    payload: {
                        requests: o.map((e => ({
                            text: e
                        }))),
                        domainName: window.location.hostname,
                        trigger: p,
                        sourceLang: e.websiteData.websiteLanguage,
                        nicheIntegration: Oe.gdocs
                    }
                }).then((e => {
                    try {
                        const {
                            processedText: n,
                            processedEntities: o
                        } = yt({
                            textLines: e.map((e => e.text)),
                            entities: a,
                            contentReference: r
                        }), s = document.getElementsByTagName("deepl-gdocs-icon")[0];
                        s && s.setReplaceData({
                            entities: o,
                            text: n,
                            originalObject: l
                        }), Ui.update({
                            translationState: i,
                            translatedSnippet: n,
                            snippetDetectedSourceLang: e[0].detected_source_language,
                            originalSnippet: t,
                            websiteLanguage: e[0].detected_source_language
                        })
                    } catch (e) {
                        console.error(e)
                    }
                })).catch((e => {
                    Ui.update({
                        translationState: i,
                        originalSnippet: t,
                        error: e.message ? e.message : e
                    })
                }))
            }
        }, Qa = async ({
            event: e,
            lang: t
        }) => {
            const {
                originalText: n,
                textLines: o,
                entities: a,
                contentReference: r,
                originalObject: l
            } = _t(e);
            document.getElementsByTagName("deepl-inline-translate-tooltip").length || Xs({
                websiteData: Ui,
                platformBehaviour: Oe.gdocs,
                textProcessingMode: Ne.write
            });
            const d = document.getElementsByTagName("deepl-gdocs-icon")[0],
                u = {
                    lang: t,
                    sourceLength: n.length,
                    targetLength: 0,
                    nicheIntegration: Oe.gdocs,
                    error: ""
                };
            if (await Ka(n)) return Ui.update({
                translationState: c,
                translatedSnippet: "",
                originalSnippet: n
            }), void(d && d.setDeeplWriteTrackingData(u));
            Ui.update({
                translationState: s,
                translatedSnippet: "",
                snippetDetectedSourceLang: "",
                translatedDOMSnippet: "",
                originalSnippet: ""
            }), Mn({
                action: "dlRequestImproveWriting",
                payload: {
                    requests: o.map((e => ({
                        text: e
                    }))),
                    domainName: window.location.hostname,
                    websiteLanguage: t
                }
            }).then((e => {
                try {
                    const {
                        processedText: t,
                        processedEntities: o
                    } = yt({
                        textLines: e[0].texts,
                        entities: a,
                        contentReference: r
                    });
                    u.targetLength = t.length, d && (d.setReplaceData({
                        entities: o,
                        text: t,
                        originalObject: l
                    }), d.setDeeplWriteTrackingData(u)), Ui.update({
                        translationState: i,
                        translatedSnippet: t,
                        snippetDetectedSourceLang: e[0].detected_source_language,
                        originalSnippet: n,
                        websiteLanguage: e[0].detected_source_language
                    }), dr({
                        eventType: Xe,
                        ...u
                    })
                } catch (e) {
                    console.error(e)
                }
            })).catch((e => {
                const t = e.message ? e.message : e;
                Ui.update({
                    translationState: i,
                    originalSnippet: n,
                    error: t
                }), dr({
                    eventType: nt,
                    ...u,
                    error: t
                })
            }))
        }, Ya = async e => {
            const {
                element: t,
                targetLang: n
            } = e;
            let o, i = "";
            if (n) {
                const {
                    domElements: s,
                    strings: a
                } = zn(t);
                try {
                    const o = await Mn({
                            action: "dlRequestInputTranslation",
                            payload: {
                                requests: a.map((e => ({
                                    text: e
                                }))),
                                domainName: window.location.hostname,
                                websiteLanguage: n,
                                targetLang: n,
                                platformBehavior: Oe.zendesk,
                                isHtml: !0,
                                ...e.formality && {
                                    formality: e.formality
                                }
                            }
                        }),
                        r = o[0] ? .texts;
                    r && r.length > 0 && (Fn({
                        strings: r,
                        domElements: s
                    }), i = t.innerHTML, t.innerHTML = "")
                } catch (e) {
                    console.error(e), o = e.message || e.error || e.name || e
                }
            }
            return [i, o]
        }, Ja = async e => {
            const {
                targetLang: t,
                sourceLang: n,
                text: o,
                trigger: i
            } = e;
            let s, a = "";
            if (n && t) try {
                const [e, r] = await Mn({
                    action: "dlRequestZendeskMessageTranslation",
                    payload: {
                        domainName: window.location.hostname,
                        sourceLang: n,
                        targetLang: t,
                        text: o,
                        trigger: i
                    }
                });
                r ? s = r : a = e
            } catch (e) {
                console.error(e), s = e
            }
            return [a, s]
        }, er = async () => {
            let e = document.body.innerText.substring(0, 200);
            if (!e || 1 === e.length) {
                const t = document.title;
                t.length >= e.length && (e = t)
            }
            let t = "";
            const n = await chrome.i18n.detectLanguage(e);
            n && n.languages ? .length > 0 && (t = n.languages.sort(((e, t) => t.percentage - e.percentage))[0].language.substr(0, 2).toUpperCase());
            try {
                Mn({
                    action: "dlTrackDetectLanguage",
                    payload: {
                        language: t,
                        domainName: window.location.host
                    }
                })
            } catch (e) {
                console.error(e)
            }
            return t
        }, tr = async () => {
            let t = document.documentElement.lang;
            !t && e.websiteData.websiteLanguage && (t = e.websiteData.websiteLanguage), Wi(window.location.href); {
                const t = async () => {
                    let t = document.documentElement.lang;
                    if (!t && e.websiteData.websiteLanguage && (t = e.websiteData.websiteLanguage), t) return t.substr(0, 2).toUpperCase();
                    try {
                        Ui.update({
                            translationState: l
                        });
                        const e = await er();
                        return Ui.update({
                            translationState: i
                        }), e
                    } catch (e) {
                        Ui.update({
                            translationState: i,
                            error: e.message ? e.message : chrome.i18n.getMessage(e)
                        })
                    }
                }, n = () => {
                    const e = document.documentElement.className;
                    return /translated/g.test(e)
                }, o = Wi(window.location.href), s = await t();
                Ui.update({
                    websiteLanguage: s,
                    hostname: window.location.hostname,
                    isSupportedLanguage: kt(s),
                    isGoogleTranslatedActive: n(),
                    isValidUrlForPopup: o
                });
                const a = new MutationObserver((async () => {
                    const e = await t();
                    Ui.update({
                        websiteLanguage: e,
                        isSupportedLanguage: kt(e),
                        isGoogleTranslatedActive: n(),
                        isValidUrlForPopup: o
                    })
                }));
                a.observe(document.documentElement, {
                    attributes: !0,
                    childList: !1,
                    characterData: !1,
                    subtree: !1,
                    attributeFilter: ["class"]
                }), An((() => {
                    a.disconnect()
                }))
            }
        }, nr = async () => await Mn({
            action: "dlGetUserState"
        }), or = async t => {
            if (!t.isTrusted) return;
            const i = await Mn({
                action: "dlGetAppSettings"
            });
            ar(), await tr();
            const s = await nr();
            s.isLoggedIn && s.isProUser && (kt(e.websiteData.websiteLanguage) && (Et(i.selectedTargetLanguage, e.websiteData.websiteLanguage) && !e.websiteData.isGoogleTranslatedActive || Ot(e.websiteData.websiteLanguage, i.languagesForTranslation, o) || i.blacklistDomains.includes(e.websiteData.hostname) || ji(window.location.host, S) || (Ot(e.websiteData.websiteLanguage, i.languagesForTranslation, n) && Za(e.websiteData.websiteLanguage, g), i.enableFullPageTranslation && window === window.parent && ea())))
        }, ir = async () => {
            await tr(), document.getElementsByTagName("deepl-input-controller").length || aa()
        }, sr = async () => {
            await tr(), pa(Ui)
        }, ar = () => {
            dt() && na(), Xt() && ia(), On() && ra()
        }, rr = e => {
            Bi.set(e)
        }, lr = async e => {
            const t = () => {
                    for (const t of Object.keys(Le))
                        if (Le[t] && e.match(Le[t])) return t;
                    if (document.querySelector("iframe#WebApplicationFrame")) {
                        const e = document.querySelector("form#frameForm, form#office_form"),
                            t = e && new URL(e.getAttribute("action")) ? .hostname ? .toLowerCase();
                        if (t)
                            for (const e of Object.keys(Ee))
                                if (Ee[e] && t.includes(Ee[e])) return e
                    }
                    if ("onedrive.live.com" === e)
                        for (const e of Object.keys(ke))
                            if (ke[e] && document.querySelector(`#${ke[e]}`)) return e;
                    return document.querySelector("body#jira") ? "jira" : document.querySelector("body#com-atlassian-confluence") ? "confluence" : void 0
                },
                n = t();
            n ? Mn({
                action: "dlTrackLandingOnWebsite",
                payload: {
                    website: n
                }
            }) : setTimeout((() => {
                const e = t();
                e && Mn({
                    action: "dlTrackLandingOnWebsite",
                    payload: {
                        website: e
                    }
                })
            }), 2e3)
        }, cr = async ({
            eventType: e,
            controller: t,
            sourceTextLength: n,
            targetTextLength: o,
            error: i,
            metaDataOverride: s = {}
        }) => {
            const a = t ? .getTicketLanguageInformation(),
                r = {
                    agentLanguage: (await Mn({
                        action: "dlGetAppSettings"
                    })).selectedTargetLanguage,
                    ticketLanguage: a ? .language,
                    isTicketLanguageAutodetected: a ? .isDetected,
                    isTicketLanguageSupported: a ? .isSupported,
                    isAutoTranslateEnabled: t.getIsAutoTranslatedEnabled(),
                    sourceTextLength: n,
                    targetTextLength: o,
                    inputHasSelection: t.getInputHasSelection(),
                    error: i,
                    ...s
                };
            await Mn({
                action: "dlTrackZendeskCustomizationEvent",
                payload: {
                    eventType: e,
                    zendeskMetaData: r
                }
            })
        }, dr = async ({
            eventType: e,
            lang: t,
            sourceLength: n,
            targetLength: o,
            nicheIntegration: i = Oe.default,
            error: s,
            metaDataOverride: a = {}
        }) => {
            await Mn({
                action: "dlTrackDeeplWriteEvent",
                payload: {
                    eventType: e,
                    deeplWriteMetaData: {
                        lang: t,
                        sourceLength: n,
                        targetLength: o,
                        nicheIntegration: i,
                        error: s,
                        ...a
                    }
                }
            })
        };

    function ur(t, n, o) {
        switch (t.action) {
            case "dlTranslate":
                t.sourceLang && Za(t.sourceLang, m), o();
                break;
            case "dlShowOriginal":
                Ui.update({
                    translationState: r
                }), o();
                break;
            case "dlDefaultPopUpMounting":
                e.websiteData.translationState === i && Qs(), ta(), o();
                break;
            case "dlTabChanged":
                setTimeout(tr, 500), o();
                break;
            case "dlTranslateInline":
                tr().then((() => Ga(t))), o();
                break;
            case "dlTranslateSelectionRightClick":
                tr().then((() => Va(t.payload))), o();
                break;
            case "dlGetWebsiteData":
                tr().then((() => o(e.websiteData)));
                break;
            case "dlShowNotification":
                ga(t.payload.type, t.payload.options), o();
                break;
            case "dlErrorVisibility":
                console.log("content listener", t), rr(t.payload.state), o();
                break;
            case "dlShowAskForAReviewPopup":
                ma(Se.initial), o()
        }
        return !0
    }

    function pr(e, t) {
        if (!e || !t) return !1;
        const n = /[\n\r\s]+/gm,
            o = e.replace(n, ""),
            i = t.replace(n, "");
        return o.includes(i)
    }

    function gr(e, t, n) {
        let o = {
            block: "end",
            position: e.length
        };
        return t.forEach((t => {
            const i = e.indexOf(`<${t}>`, n);
            i > -1 && i < o.position && (o = {
                block: t,
                position: i
            })
        })), [o.block, o.position]
    }

    function mr(e, t = []) {
        const n = [];
        let o = 0,
            i = !1;
        for (; !i;) {
            const [s, a] = gr(e, t, o);
            if ("end" === s && (i = !0), o < a && n.push({
                    block: "main",
                    text: e.substring(o, a)
                }), i) break;
            const r = e.indexOf(`</${s}>`, a); - 1 === r ? (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length)
            }), i = !0) : (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length, r)
            }), o = r + `</${s}>`.length)
        }
        return n
    }

    function hr(e) {
        return "IFRAME" === e.nodeName.toUpperCase() ? wr(e) : e.ownerDocument === document ? window : e.ownerDocument
    }

    function fr(e) {
        return e.ownerDocument === document ? document : e.ownerDocument
    }

    function _r(e) {
        return "IFRAME" !== e.nodeName.toUpperCase() ? e : wr(e).body
    }

    function wr(e) {
        return e.contentDocument || e.contentWindow.document
    }

    function vr(e) {
        if ("IFRAME" === e.nodeName.toUpperCase()) return window;
        if (e.ownerDocument !== document) {
            const t = e ? .ownerDocument ? .defaultView ? .frameElement ? .contentWindow;
            if (t) return t
        }
        return window
    }

    function $r(e) {
        return "IFRAME" === e.nodeName.toUpperCase() ? wr(e) : e.ownerDocument === document ? document : e.ownerDocument
    }

    function br(e) {
        return new Promise(((t, n) => {
            requestAnimationFrame((() => {
                const n = fr(e).createRange();
                n.selectNodeContents(_r(e));
                const o = hr(e).getSelection();
                o.removeAllRanges(), o.addRange(n), t(o)
            }))
        }))
    }
    const yr = async (e, t) => {
        const n = vr(e);
        await Lt(10);
        const o = new DataTransfer;
        o.setData("text/html", t.html), o.setData("text/plain", t.text), e.dispatchEvent(new n.ClipboardEvent("paste", {
            clipboardData: o,
            bubbles: !0,
            cancelable: !0
        })), o.clearData(), await Lt(10)
    }, Cr = async (e, t) => {
        const n = $r(e),
            o = vr(e),
            i = n.createEvent("TextEvent");
        i.initTextEvent("textInput", !0, !0, o, t.text), e.dispatchEvent(i), await Lt(10)
    }, xr = async (e, t) => {
        const n = $r(e);
        e.value && e.select(), n.execCommand("insertHTML", !1, t.html), await Lt(20), (e.value || "" === e.value) && (e.value = t.text)
    }, Tr = (e, t, n) => {
        let o = !0;
        return (e && !t || !pr(e, n) && e === t || !pr(t, n)) && (o = !1), o
    }, Lr = (e, t) => {
        const n = new(vr(t).KeyboardEvent)(e, {
            bubbles: !0,
            cancelable: !0,
            keyCode: 8,
            which: 8,
            location: 0,
            key: "Backspace"
        });
        return t.dispatchEvent(n)
    }, Er = (e, t) => {
        const n = new MouseEvent(e, {
            bubbles: !0,
            cancelable: !1
        });
        return t.dispatchEvent(n)
    }, kr = e => e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement && ["text", "search"].includes(e.type), Sr = e => e.selectionStart < e.selectionEnd, Mr = async (e, t, n) => {
        if (!kr(e)) return n || (e => {
            Er("mousedown", e);
            const t = window.getSelection();
            t.removeAllRanges();
            const n = new Range;
            n.setStart(e, 0), n.collapse(!1), t.addRange(n), Er("mouseup", e)
        })(e), await (async (e, t, n) => {
            n || e.focus();
            const o = _r(e).innerText,
                i = _r(e).value,
                s = [{
                    method: yr,
                    isSuccessful: () => Tr(o, _r(e).innerText, t.text)
                }, {
                    method: Cr,
                    isSuccessful: () => Tr(o, _r(e).innerText, t.text)
                }, {
                    method: xr,
                    isSuccessful: () => Tr(o, _r(e).innerText, t.text) || Tr(i, _r(e).value, t.text)
                }];
            for (const n of s)
                if (await n.method(e, t), n.isSuccessful()) return;
            throw await Lt(1e3), Mn({
                action: "dlTranslatedInputTextNotSet",
                payload: window.location.hostname
            }), new Error({
                error: Zt
            })
        })(e, t, !0);
        if (Sr(e) || ((e, {
                start: t,
                end: n
            }) => {
                e.selectionStart = t, e.selectionEnd = n
            })(e, {
                start: 0,
                end: e.value.length
            }), !document.execCommand("insertText", !1, t.text)) {
            const n = e.value.substring(0, e.selectionStart) + t.text + e.value.substring(e.selectionEnd);
            e.value = n
        }
    };

    function Ir(e, t) {
        if (!t) return !1;
        const n = t.getBoundingClientRect();
        if (kr(e)) return function (e, t) {
            const n = function (e) {
                const t = document.createElement("div");
                document.body.appendChild(t);
                var n = window.getComputedStyle(e);
                t.style.whiteSpace = "pre-wrap", t.style.wordWrap = "break-word", t.style.position = "fixed", t.style.overflow = "hidden", ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"].forEach((function (e) {
                    t.style[e] = n[e]
                }));
                const o = e.getBoundingClientRect();
                return t.style.top = Math.round(o.top) + "px", t.style.left = Math.round(o.left) + "px", t.innerText = e.value, t
            }(e);
            let o = !1;
            try {
                o = Dr(n, t)
            } catch (e) {}
            return n.remove(), o
        }(e, n); {
            const t = hr(e).getSelection(),
                o = function (e) {
                    return "IFRAME" === e.nodeName.toUpperCase() ? e.getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    }
                }(e);
            if (t.rangeCount) return Dr(_r(e), n, o)
        }
        return !1
    }

    function Dr(e, t, n = {
        top: 0,
        left: 0
    }) {
        const o = hr(e).getSelection();
        for (const a of e.childNodes)
            if ("#text" === a.nodeName.toLowerCase()) {
                const e = o.getRangeAt(0).cloneRange();
                e.setStart(a, 0), e.setEnd(a, a.textContent.length);
                const r = e.getClientRects();
                if (!r.length) continue;
                for (const e of r) {
                    const o = {
                        left: e.left + n.left,
                        right: e.right + n.left,
                        top: e.top + n.top,
                        bottom: e.bottom + n.top
                    };
                    if (s = t, (i = o).left <= s.right && i.right >= s.left && i.top <= s.bottom && i.bottom >= s.top) return !0
                }
            } else if (e.childNodes.length && Dr(a, t, n)) return !0;
        var i, s;
        return !1
    }
    const Or = [];
    window.onerror = function (e) {
        /ResizeObserver/gm.test(e) && Or.forEach((e => e.resize.disconnect()))
    };
    const Nr = e => "true" === e.contentEditable || "TEXTAREA" === e.nodeName && e.rows > 1;
    const Ar = ({
            inputArea: e
        }) => {
            const t = Hr(e);
            return {
                position: "absolute",
                top: t.top,
                left: t.left,
                width: t.width,
                height: t.height,
                isLanguageToolsPresent: !!document.querySelector("lt-toolbar"),
                isGrammarlyPresent: !!document.querySelector("grammarly-extension")
            }
        },
        Rr = ({
            inputArea: e
        }) => {
            const t = [];
            if (e)
                for (let n = e.parentElement; null !== n; n = n.parentElement) Pr(n) && t.push(n);
            return t
        },
        Pr = e => {
            const t = window.getComputedStyle(e),
                n = t.getPropertyValue("overflow-y"),
                o = t.getPropertyValue("overflow-x"),
                i = ["hidden", "scroll", "auto"];
            return i.includes(n) || i.includes(o)
        },
        zr = (e, t) => {
            let n = {
                left: Math.max(e.left, t.left),
                right: Math.min(e.right, t.right),
                top: Math.max(e.top, t.top),
                bottom: Math.min(e.bottom, t.bottom)
            };
            return n.left >= n.right || n.top >= n.bottom ? null : n
        },
        Hr = e => {
            let t = e.getBoundingClientRect(),
                n = {
                    left: t.left,
                    right: t.right,
                    bottom: t.bottom,
                    top: t.top
                };
            const o = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0
                },
                i = {
                    top: 0,
                    left: 0,
                    right: window.innerWidth,
                    bottom: window.innerHeight
                };
            for (let t = e.parentElement; null !== t && t !== e.ownerDocument.body; t = t.parentElement) {
                let e = t.getBoundingClientRect();
                const i = zr(n, e);
                if (i) n = i;
                else if (Pr(t)) return o
            }
            return n = zr(n, i), n ? {
                top: n.top,
                bottom: n.bottom,
                left: n.left,
                right: n.right,
                width: n.right - n.left,
                height: n.bottom - n.top
            } : o
        };

    function Fr(e) {
        const t = e - 1;
        return t * t * t + 1
    }

    function Br(e, {
        delay: t = 0,
        duration: n = 400,
        easing: o = Vn
    } = {}) {
        const i = +getComputedStyle(e).opacity;
        return {
            delay: t,
            duration: n,
            easing: o,
            css: e => "opacity: " + e * i
        }
    }

    function Ur(e, {
        delay: t = 0,
        duration: n = 400,
        easing: o = Fr,
        x: i = 0,
        y: s = 0,
        opacity: a = 0
    } = {}) {
        const r = getComputedStyle(e),
            l = +r.opacity,
            c = "none" === r.transform ? "" : r.transform,
            d = l * (1 - a);
        return {
            delay: t,
            duration: n,
            easing: o,
            css: (e, t) => `\n\t\t\ttransform: ${c} translate(${(1-e)*i}px, ${(1-e)*s}px);\n\t\t\topacity: ${l-d*t}`
        }
    }(function () {
        var e = window.Document.prototype.createElement,
            t = window.Document.prototype.createElementNS,
            n = window.Document.prototype.importNode,
            o = window.Document.prototype.prepend,
            i = window.Document.prototype.append,
            s = window.DocumentFragment.prototype.prepend,
            a = window.DocumentFragment.prototype.append,
            r = window.Node.prototype.cloneNode,
            l = window.Node.prototype.appendChild,
            c = window.Node.prototype.insertBefore,
            d = window.Node.prototype.removeChild,
            u = window.Node.prototype.replaceChild,
            p = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
            g = window.Element.prototype.attachShadow,
            m = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
            h = window.Element.prototype.getAttribute,
            f = window.Element.prototype.setAttribute,
            _ = window.Element.prototype.removeAttribute,
            w = window.Element.prototype.getAttributeNS,
            v = window.Element.prototype.setAttributeNS,
            $ = window.Element.prototype.removeAttributeNS,
            b = window.Element.prototype.insertAdjacentElement,
            y = window.Element.prototype.insertAdjacentHTML,
            C = window.Element.prototype.prepend,
            x = window.Element.prototype.append,
            T = window.Element.prototype.before,
            L = window.Element.prototype.after,
            E = window.Element.prototype.replaceWith,
            k = window.Element.prototype.remove,
            S = window.HTMLElement,
            M = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            I = window.HTMLElement.prototype.insertAdjacentElement,
            D = window.HTMLElement.prototype.insertAdjacentHTML,
            O = new Set;

        function N(e) {
            var t = O.has(e);
            return e = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(e), !t && e
        }
        "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach((function (e) {
            return O.add(e)
        }));
        var A = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);

        function R(e) {
            var t = e.isConnected;
            if (void 0 !== t) return t;
            if (A(e)) return !0;
            for (; e && !(e.__CE_isImportDocument || e instanceof Document);) e = e.parentNode || (window.ShadowRoot && e instanceof ShadowRoot ? e.host : void 0);
            return !(!e || !(e.__CE_isImportDocument || e instanceof Document))
        }

        function P(e) {
            var t = e.children;
            if (t) return Array.prototype.slice.call(t);
            for (t = [], e = e.firstChild; e; e = e.nextSibling) e.nodeType === Node.ELEMENT_NODE && t.push(e);
            return t
        }

        function z(e, t) {
            for (; t && t !== e && !t.nextSibling;) t = t.parentNode;
            return t && t !== e ? t.nextSibling : null
        }

        function H(e, t, n) {
            for (var o = e; o;) {
                if (o.nodeType === Node.ELEMENT_NODE) {
                    var i = o;
                    t(i);
                    var s = i.localName;
                    if ("link" === s && "import" === i.getAttribute("rel")) {
                        if (o = i.import, void 0 === n && (n = new Set), o instanceof Node && !n.has(o))
                            for (n.add(o), o = o.firstChild; o; o = o.nextSibling) H(o, t, n);
                        o = z(e, i);
                        continue
                    }
                    if ("template" === s) {
                        o = z(e, i);
                        continue
                    }
                    if (i = i.__CE_shadowRoot)
                        for (i = i.firstChild; i; i = i.nextSibling) H(i, t, n)
                }
                o = o.firstChild ? o.firstChild : z(e, o)
            }
        }

        function F() {
            var e = !(null == re || !re.noDocumentConstructionObserver),
                t = !(null == re || !re.shadyDomFastWalk);
            this.m = [], this.g = [], this.j = !1, this.shadyDomFastWalk = t, this.I = !e
        }

        function B(e, t, n, o) {
            var i = window.ShadyDOM;
            if (e.shadyDomFastWalk && i && i.inUse) {
                if (t.nodeType === Node.ELEMENT_NODE && n(t), t.querySelectorAll)
                    for (e = i.nativeMethods.querySelectorAll.call(t, "*"), t = 0; t < e.length; t++) n(e[t])
            } else H(t, n, o)
        }

        function U(e, t) {
            e.j && B(e, t, (function (t) {
                return q(e, t)
            }))
        }

        function q(e, t) {
            if (e.j && !t.__CE_patched) {
                t.__CE_patched = !0;
                for (var n = 0; n < e.m.length; n++) e.m[n](t);
                for (n = 0; n < e.g.length; n++) e.g[n](t)
            }
        }

        function j(e, t) {
            var n = [];
            for (B(e, t, (function (e) {
                    return n.push(e)
                })), t = 0; t < n.length; t++) {
                var o = n[t];
                1 === o.__CE_state ? e.connectedCallback(o) : V(e, o)
            }
        }

        function W(e, t) {
            var n = [];
            for (B(e, t, (function (e) {
                    return n.push(e)
                })), t = 0; t < n.length; t++) {
                var o = n[t];
                1 === o.__CE_state && e.disconnectedCallback(o)
            }
        }

        function G(e, t, n) {
            var o = (n = void 0 === n ? {} : n).J,
                i = n.upgrade || function (t) {
                    return V(e, t)
                },
                s = [];
            for (B(e, t, (function (t) {
                    if (e.j && q(e, t), "link" === t.localName && "import" === t.getAttribute("rel")) {
                        var n = t.import;
                        n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_registry = document.__CE_registry), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : t.addEventListener("load", (function () {
                            var n = t.import;
                            if (!n.__CE_documentLoadHandled) {
                                n.__CE_documentLoadHandled = !0;
                                var s = new Set;
                                o && (o.forEach((function (e) {
                                    return s.add(e)
                                })), s.delete(n)), G(e, n, {
                                    J: s,
                                    upgrade: i
                                })
                            }
                        }))
                    } else s.push(t)
                }), o), t = 0; t < s.length; t++) i(s[t])
        }

        function V(e, t) {
            try {
                var n = t.ownerDocument,
                    o = n.__CE_registry,
                    i = o && (n.defaultView || n.__CE_isImportDocument) ? oe(o, t.localName) : void 0;
                if (i && void 0 === t.__CE_state) {
                    i.constructionStack.push(t);
                    try {
                        try {
                            if (new i.constructorFunction !== t) throw Error("The custom element constructor did not produce the element being upgraded.")
                        } finally {
                            i.constructionStack.pop()
                        }
                    } catch (e) {
                        throw t.__CE_state = 2, e
                    }
                    if (t.__CE_state = 1, t.__CE_definition = i, i.attributeChangedCallback && t.hasAttributes()) {
                        var s = i.observedAttributes;
                        for (i = 0; i < s.length; i++) {
                            var a = s[i],
                                r = t.getAttribute(a);
                            null !== r && e.attributeChangedCallback(t, a, null, r, null)
                        }
                    }
                    R(t) && e.connectedCallback(t)
                }
            } catch (e) {
                K(e)
            }
        }

        function Z(n, o, i, s) {
            var a = o.__CE_registry;
            if (a && (null === s || "http://www.w3.org/1999/xhtml" === s) && (a = oe(a, i))) try {
                var r = new a.constructorFunction;
                if (void 0 === r.__CE_state || void 0 === r.__CE_definition) throw Error("Failed to construct '" + i + "': The returned value was not constructed with the HTMLElement constructor.");
                if ("http://www.w3.org/1999/xhtml" !== r.namespaceURI) throw Error("Failed to construct '" + i + "': The constructed element's namespace must be the HTML namespace.");
                if (r.hasAttributes()) throw Error("Failed to construct '" + i + "': The constructed element must not have any attributes.");
                if (null !== r.firstChild) throw Error("Failed to construct '" + i + "': The constructed element must not have any children.");
                if (null !== r.parentNode) throw Error("Failed to construct '" + i + "': The constructed element must not have a parent node.");
                if (r.ownerDocument !== o) throw Error("Failed to construct '" + i + "': The constructed element's owner document is incorrect.");
                if (r.localName !== i) throw Error("Failed to construct '" + i + "': The constructed element's local name is incorrect.");
                return r
            } catch (a) {
                return K(a), o = null === s ? e.call(o, i) : t.call(o, s, i), Object.setPrototypeOf(o, HTMLUnknownElement.prototype), o.__CE_state = 2, o.__CE_definition = void 0, q(n, o), o
            }
            return q(n, o = null === s ? e.call(o, i) : t.call(o, s, i)), o
        }

        function K(e) {
            var t = "",
                n = "",
                o = 0,
                i = 0;
            e instanceof Error ? (t = e.message, n = e.sourceURL || e.fileName || "", o = e.line || e.lineNumber || 0, i = e.column || e.columnNumber || 0) : t = "Uncaught " + String(e);
            var s = void 0;
            void 0 === ErrorEvent.prototype.initErrorEvent ? s = new ErrorEvent("error", {
                cancelable: !0,
                message: t,
                filename: n,
                lineno: o,
                colno: i,
                error: e
            }) : ((s = document.createEvent("ErrorEvent")).initErrorEvent("error", !1, !0, t, n, o), s.preventDefault = function () {
                Object.defineProperty(this, "defaultPrevented", {
                    configurable: !0,
                    get: function () {
                        return !0
                    }
                })
            }), void 0 === s.error && Object.defineProperty(s, "error", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return e
                }
            }), window.dispatchEvent(s), s.defaultPrevented || console.error(e)
        }

        function X() {
            var e = this;
            this.g = void 0, this.F = new Promise((function (t) {
                e.l = t
            }))
        }

        function Q(e) {
            var t = document;
            this.l = void 0, this.h = e, this.g = t, G(this.h, this.g), "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)), this.l.observe(this.g, {
                childList: !0,
                subtree: !0
            }))
        }

        function Y(e) {
            e.l && e.l.disconnect()
        }

        function J(e) {
            this.s = new Map, this.u = new Map, this.C = new Map, this.A = !1, this.B = new Map, this.o = function (e) {
                return e()
            }, this.i = !1, this.v = [], this.h = e, this.D = e.I ? new Q(e) : void 0
        }

        function ee(e, t) {
            if (!N(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
            if (oe(e, t)) throw Error("A custom element with name '" + t + "' has already been defined.");
            if (e.A) throw Error("A custom element is already being defined.")
        }

        function te(e, t, n) {
            var o;
            e.A = !0;
            try {
                var i = n.prototype;
                if (!(i instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                var s = function (e) {
                        var t = i[e];
                        if (void 0 !== t && !(t instanceof Function)) throw Error("The '" + e + "' callback must be a function.");
                        return t
                    },
                    a = s("connectedCallback"),
                    r = s("disconnectedCallback"),
                    l = s("adoptedCallback"),
                    c = (o = s("attributeChangedCallback")) && n.observedAttributes || []
            } catch (e) {
                throw e
            } finally {
                e.A = !1
            }
            return n = {
                localName: t,
                constructorFunction: n,
                connectedCallback: a,
                disconnectedCallback: r,
                adoptedCallback: l,
                attributeChangedCallback: o,
                observedAttributes: c,
                constructionStack: []
            }, e.u.set(t, n), e.C.set(n.constructorFunction, n), n
        }

        function ne(e) {
            if (!1 !== e.i) {
                e.i = !1;
                for (var t = [], n = e.v, o = new Map, i = 0; i < n.length; i++) o.set(n[i], []);
                for (G(e.h, document, {
                        upgrade: function (n) {
                            if (void 0 === n.__CE_state) {
                                var i = n.localName,
                                    s = o.get(i);
                                s ? s.push(n) : e.u.has(i) && t.push(n)
                            }
                        }
                    }), i = 0; i < t.length; i++) V(e.h, t[i]);
                for (i = 0; i < n.length; i++) {
                    for (var s = n[i], a = o.get(s), r = 0; r < a.length; r++) V(e.h, a[r]);
                    (s = e.B.get(s)) && s.resolve(void 0)
                }
                n.length = 0
            }
        }

        function oe(e, t) {
            var n = e.u.get(t);
            if (n) return n;
            if (n = e.s.get(t)) {
                e.s.delete(t);
                try {
                    return te(e, t, n())
                } catch (e) {
                    K(e)
                }
            }
        }

        function ie(e, t, n) {
            function o(t) {
                return function (n) {
                    for (var o = [], i = 0; i < arguments.length; ++i) o[i] = arguments[i];
                    i = [];
                    for (var s = [], a = 0; a < o.length; a++) {
                        var r = o[a];
                        if (r instanceof Element && R(r) && s.push(r), r instanceof DocumentFragment)
                            for (r = r.firstChild; r; r = r.nextSibling) i.push(r);
                        else i.push(r)
                    }
                    for (t.apply(this, o), o = 0; o < s.length; o++) W(e, s[o]);
                    if (R(this))
                        for (o = 0; o < i.length; o++)(s = i[o]) instanceof Element && j(e, s)
                }
            }
            void 0 !== n.prepend && (t.prepend = o(n.prepend)), void 0 !== n.append && (t.append = o(n.append))
        }

        function se(e) {
            function n(t, n) {
                Object.defineProperty(t, "innerHTML", {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function (t) {
                        var o = this,
                            i = void 0;
                        if (R(this) && (i = [], B(e, this, (function (e) {
                                e !== o && i.push(e)
                            }))), n.set.call(this, t), i)
                            for (var s = 0; s < i.length; s++) {
                                var a = i[s];
                                1 === a.__CE_state && e.disconnectedCallback(a)
                            }
                        return this.ownerDocument.__CE_registry ? G(e, this) : U(e, this), t
                    }
                })
            }

            function o(t, n) {
                t.insertAdjacentElement = function (t, o) {
                    var i = R(o);
                    return t = n.call(this, t, o), i && W(e, o), R(t) && j(e, o), t
                }
            }

            function i(t, n) {
                function o(t, n) {
                    for (var o = []; t !== n; t = t.nextSibling) o.push(t);
                    for (n = 0; n < o.length; n++) G(e, o[n])
                }
                t.insertAdjacentHTML = function (e, t) {
                    if ("beforebegin" === (e = e.toLowerCase())) {
                        var i = this.previousSibling;
                        n.call(this, e, t), o(i || this.parentNode.firstChild, this)
                    } else if ("afterbegin" === e) i = this.firstChild, n.call(this, e, t), o(this.firstChild, i);
                    else if ("beforeend" === e) i = this.lastChild, n.call(this, e, t), o(i || this.firstChild, null);
                    else {
                        if ("afterend" !== e) throw new SyntaxError("The value provided (" + String(e) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                        i = this.nextSibling, n.call(this, e, t), o(this.nextSibling, i)
                    }
                }
            }
            g && (Element.prototype.attachShadow = function (t) {
                    if (t = g.call(this, t), e.j && !t.__CE_patched) {
                        t.__CE_patched = !0;
                        for (var n = 0; n < e.m.length; n++) e.m[n](t)
                    }
                    return this.__CE_shadowRoot = t
                }), m && m.get ? n(Element.prototype, m) : M && M.get ? n(HTMLElement.prototype, M) : function (e, t) {
                    e.j = !0, e.g.push(t)
                }(e, (function (e) {
                    n(e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                            return r.call(this, !0).innerHTML
                        },
                        set: function (e) {
                            var n = "template" === this.localName,
                                o = n ? this.content : this,
                                i = t.call(document, this.namespaceURI, this.localName);
                            for (i.innerHTML = e; 0 < o.childNodes.length;) d.call(o, o.childNodes[0]);
                            for (e = n ? i.content : i; 0 < e.childNodes.length;) l.call(o, e.childNodes[0])
                        }
                    })
                })), Element.prototype.setAttribute = function (t, n) {
                    if (1 !== this.__CE_state) return f.call(this, t, n);
                    var o = h.call(this, t);
                    f.call(this, t, n), n = h.call(this, t), e.attributeChangedCallback(this, t, o, n, null)
                }, Element.prototype.setAttributeNS = function (t, n, o) {
                    if (1 !== this.__CE_state) return v.call(this, t, n, o);
                    var i = w.call(this, t, n);
                    v.call(this, t, n, o), o = w.call(this, t, n), e.attributeChangedCallback(this, n, i, o, t)
                }, Element.prototype.removeAttribute = function (t) {
                    if (1 !== this.__CE_state) return _.call(this, t);
                    var n = h.call(this, t);
                    _.call(this, t), null !== n && e.attributeChangedCallback(this, t, n, null, null)
                }, Element.prototype.removeAttributeNS = function (t, n) {
                    if (1 !== this.__CE_state) return $.call(this, t, n);
                    var o = w.call(this, t, n);
                    $.call(this, t, n);
                    var i = w.call(this, t, n);
                    o !== i && e.attributeChangedCallback(this, n, o, i, t)
                }, I ? o(HTMLElement.prototype, I) : b && o(Element.prototype, b), D ? i(HTMLElement.prototype, D) : y && i(Element.prototype, y), ie(e, Element.prototype, {
                    prepend: C,
                    append: x
                }),
                function (e) {
                    function t(t) {
                        return function (n) {
                            for (var o = [], i = 0; i < arguments.length; ++i) o[i] = arguments[i];
                            i = [];
                            for (var s = [], a = 0; a < o.length; a++) {
                                var r = o[a];
                                if (r instanceof Element && R(r) && s.push(r), r instanceof DocumentFragment)
                                    for (r = r.firstChild; r; r = r.nextSibling) i.push(r);
                                else i.push(r)
                            }
                            for (t.apply(this, o), o = 0; o < s.length; o++) W(e, s[o]);
                            if (R(this))
                                for (o = 0; o < i.length; o++)(s = i[o]) instanceof Element && j(e, s)
                        }
                    }
                    var n = Element.prototype;
                    void 0 !== T && (n.before = t(T)), void 0 !== L && (n.after = t(L)), void 0 !== E && (n.replaceWith = function (t) {
                        for (var n = [], o = 0; o < arguments.length; ++o) n[o] = arguments[o];
                        o = [];
                        for (var i = [], s = 0; s < n.length; s++) {
                            var a = n[s];
                            if (a instanceof Element && R(a) && i.push(a), a instanceof DocumentFragment)
                                for (a = a.firstChild; a; a = a.nextSibling) o.push(a);
                            else o.push(a)
                        }
                        for (s = R(this), E.apply(this, n), n = 0; n < i.length; n++) W(e, i[n]);
                        if (s)
                            for (W(e, this), n = 0; n < o.length; n++)(i = o[n]) instanceof Element && j(e, i)
                    }), void 0 !== k && (n.remove = function () {
                        var t = R(this);
                        k.call(this), t && W(e, this)
                    })
                }(e)
        }
        F.prototype.connectedCallback = function (e) {
            var t = e.__CE_definition;
            if (t.connectedCallback) try {
                t.connectedCallback.call(e)
            } catch (e) {
                K(e)
            }
        }, F.prototype.disconnectedCallback = function (e) {
            var t = e.__CE_definition;
            if (t.disconnectedCallback) try {
                t.disconnectedCallback.call(e)
            } catch (e) {
                K(e)
            }
        }, F.prototype.attributeChangedCallback = function (e, t, n, o, i) {
            var s = e.__CE_definition;
            if (s.attributeChangedCallback && -1 < s.observedAttributes.indexOf(t)) try {
                s.attributeChangedCallback.call(e, t, n, o, i)
            } catch (e) {
                K(e)
            }
        }, X.prototype.resolve = function (e) {
            if (this.g) throw Error("Already resolved.");
            this.g = e, this.l(e)
        }, Q.prototype.G = function (e) {
            var t = this.g.readyState;
            for ("interactive" !== t && "complete" !== t || Y(this), t = 0; t < e.length; t++)
                for (var n = e[t].addedNodes, o = 0; o < n.length; o++) G(this.h, n[o])
        }, J.prototype.H = function (e, t) {
            var n = this;
            if (!(t instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
            ee(this, e), this.s.set(e, t), this.v.push(e), this.i || (this.i = !0, this.o((function () {
                return ne(n)
            })))
        }, J.prototype.define = function (e, t) {
            var n = this;
            if (!(t instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            ee(this, e), te(this, e, t), this.v.push(e), this.i || (this.i = !0, this.o((function () {
                return ne(n)
            })))
        }, J.prototype.upgrade = function (e) {
            G(this.h, e)
        }, J.prototype.get = function (e) {
            if (e = oe(this, e)) return e.constructorFunction
        }, J.prototype.whenDefined = function (e) {
            if (!N(e)) return Promise.reject(new SyntaxError("'" + e + "' is not a valid custom element name."));
            var t = this.B.get(e);
            if (t) return t.F;
            t = new X, this.B.set(e, t);
            var n = this.u.has(e) || this.s.has(e);
            return e = -1 === this.v.indexOf(e), n && e && t.resolve(void 0), t.F
        }, J.prototype.polyfillWrapFlushCallback = function (e) {
            this.D && Y(this.D);
            var t = this.o;
            this.o = function (n) {
                return e((function () {
                    return t(n)
                }))
            }
        }, J.prototype.define = J.prototype.define, J.prototype.upgrade = J.prototype.upgrade, J.prototype.get = J.prototype.get, J.prototype.whenDefined = J.prototype.whenDefined, J.prototype.polyfillDefineLazy = J.prototype.H, J.prototype.polyfillWrapFlushCallback = J.prototype.polyfillWrapFlushCallback;
        var ae = {};
        var re = window.customElements;

        function le() {
            var t = new F;
            ! function (t) {
                function n() {
                    var n = this.constructor,
                        o = document.__CE_registry.C.get(n);
                    if (!o) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                    var i = o.constructionStack;
                    if (0 === i.length) return i = e.call(document, o.localName), Object.setPrototypeOf(i, n.prototype), i.__CE_state = 1, i.__CE_definition = o, q(t, i), i;
                    var s = i.length - 1,
                        a = i[s];
                    if (a === ae) throw Error("Failed to construct '" + o.localName + "': This element was already constructed.");
                    return i[s] = ae, Object.setPrototypeOf(a, n.prototype), q(t, a), a
                }
                n.prototype = S.prototype, Object.defineProperty(HTMLElement.prototype, "constructor", {
                    writable: !0,
                    configurable: !0,
                    enumerable: !1,
                    value: n
                }), window.HTMLElement = n
            }(t),
            function (e) {
                Document.prototype.createElement = function (t) {
                    return Z(e, this, t, null)
                }, Document.prototype.importNode = function (t, o) {
                    return t = n.call(this, t, !!o), this.__CE_registry ? G(e, t) : U(e, t), t
                }, Document.prototype.createElementNS = function (t, n) {
                    return Z(e, this, n, t)
                }, ie(e, Document.prototype, {
                    prepend: o,
                    append: i
                })
            }(t), ie(t, DocumentFragment.prototype, {
                    prepend: s,
                    append: a
                }),
                function (e) {
                    function t(t, n) {
                        Object.defineProperty(t, "textContent", {
                            enumerable: n.enumerable,
                            configurable: !0,
                            get: n.get,
                            set: function (t) {
                                if (this.nodeType === Node.TEXT_NODE) n.set.call(this, t);
                                else {
                                    var o = void 0;
                                    if (this.firstChild) {
                                        var i = this.childNodes,
                                            s = i.length;
                                        if (0 < s && R(this)) {
                                            o = Array(s);
                                            for (var a = 0; a < s; a++) o[a] = i[a]
                                        }
                                    }
                                    if (n.set.call(this, t), o)
                                        for (t = 0; t < o.length; t++) W(e, o[t])
                                }
                            }
                        })
                    }
                    Node.prototype.insertBefore = function (t, n) {
                        if (t instanceof DocumentFragment) {
                            var o = P(t);
                            if (t = c.call(this, t, n), R(this))
                                for (n = 0; n < o.length; n++) j(e, o[n]);
                            return t
                        }
                        return o = t instanceof Element && R(t), n = c.call(this, t, n), o && W(e, t), R(this) && j(e, t), n
                    }, Node.prototype.appendChild = function (t) {
                        if (t instanceof DocumentFragment) {
                            var n = P(t);
                            if (t = l.call(this, t), R(this))
                                for (var o = 0; o < n.length; o++) j(e, n[o]);
                            return t
                        }
                        return n = t instanceof Element && R(t), o = l.call(this, t), n && W(e, t), R(this) && j(e, t), o
                    }, Node.prototype.cloneNode = function (t) {
                        return t = r.call(this, !!t), this.ownerDocument.__CE_registry ? G(e, t) : U(e, t), t
                    }, Node.prototype.removeChild = function (t) {
                        var n = t instanceof Element && R(t),
                            o = d.call(this, t);
                        return n && W(e, t), o
                    }, Node.prototype.replaceChild = function (t, n) {
                        if (t instanceof DocumentFragment) {
                            var o = P(t);
                            if (t = u.call(this, t, n), R(this))
                                for (W(e, n), n = 0; n < o.length; n++) j(e, o[n]);
                            return t
                        }
                        o = t instanceof Element && R(t);
                        var i = u.call(this, t, n),
                            s = R(this);
                        return s && W(e, n), o && W(e, t), s && j(e, t), i
                    }, p && p.get ? t(Node.prototype, p) : function (e, t) {
                        e.j = !0, e.m.push(t)
                    }(e, (function (e) {
                        t(e, {
                            enumerable: !0,
                            configurable: !0,
                            get: function () {
                                for (var e = [], t = this.firstChild; t; t = t.nextSibling) t.nodeType !== Node.COMMENT_NODE && e.push(t.textContent);
                                return e.join("")
                            },
                            set: function (e) {
                                for (; this.firstChild;) d.call(this, this.firstChild);
                                null != e && "" !== e && l.call(this, document.createTextNode(e))
                            }
                        })
                    }))
                }(t), se(t), window.CustomElementRegistry = J, t = new J(t), document.__CE_registry = t, Object.defineProperty(window, "customElements", {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                })
        }
        re && !re.forcePolyfill && "function" == typeof re.define && "function" == typeof re.get || le(), window.__CE_installPolyfill = le
    }).call(self);
    const qr = "ACCESS_DENIED",
        jr = "INVALID_REQUEST",
        Wr = "INVALID_GRANT",
        Gr = "INVALID_NONCE";

    function Vr() {
        return !!chrome && !!chrome.tabs
    }

    function Zr(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), t.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>', Mo(t, "class", "dl-close-icon svelte-qdqw71")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", (function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })), n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function Kr(e) {
        let t, n, o, i, s, a;
        const r = e[2].default,
            l = to(r, e, e[1], null);
        let c = e[0] && Zr(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), n.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L10 10M10 10L12 8M10 10L8 8M10 10L12 12M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>', o = To(), i = yo("div"), l && l.c(), s = To(), c && c.c(), Mo(n, "class", "icon-container svelte-qdqw71"), Mo(i, "class", "message svelte-qdqw71"), Mo(t, "class", "error-msg svelte-qdqw71")
            },
            m(e, r) {
                vo(e, t, r), fo(t, n), fo(t, o), fo(t, i), l && l.m(i, null), fo(t, s), c && c.m(t, null), a = !0
            },
            p(e, [n]) {
                l && l.p && (!a || 2 & n) && io(l, r, e, e[1], a ? oo(r, e[1], n, null) : so(e[1]), null), e[0] ? c ? c.p(e, n) : (c = Zr(e), c.c(), c.m(t, null)) : c && (c.d(1), c = null)
            },
            i(e) {
                a || ($i(l, e), a = !0)
            },
            o(e) {
                bi(l, e), a = !1
            },
            d(e) {
                e && $o(t), l && l.d(e), c && c.d()
            }
        }
    }

    function Xr(e, t, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = t, {
            close: s
        } = t;
        return e.$$set = e => {
            "close" in e && n(0, s = e.close), "$$scope" in e && n(1, i = e.$$scope)
        }, [s, i, o]
    }
    class Qr extends Si {
        constructor(e) {
            super(), ki(this, e, Xr, Kr, Yn, {
                close: 0
            })
        }
    }

    function Yr(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), t.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>', Mo(t, "class", "dl-close-icon svelte-1jf0jj0")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", (function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })), n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function Jr(e) {
        let t, n, o, i, s, a;
        const r = e[2].default,
            l = to(r, e, e[1], null);
        let c = e[0] && Yr(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), n.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>', o = To(), i = yo("div"), l && l.c(), s = To(), c && c.c(), Mo(n, "class", "icon-container svelte-1jf0jj0"), Mo(i, "class", "message svelte-1jf0jj0"), Mo(t, "class", "warn-msg svelte-1jf0jj0")
            },
            m(e, r) {
                vo(e, t, r), fo(t, n), fo(t, o), fo(t, i), l && l.m(i, null), fo(t, s), c && c.m(t, null), a = !0
            },
            p(e, [n]) {
                l && l.p && (!a || 2 & n) && io(l, r, e, e[1], a ? oo(r, e[1], n, null) : so(e[1]), null), e[0] ? c ? c.p(e, n) : (c = Yr(e), c.c(), c.m(t, null)) : c && (c.d(1), c = null)
            },
            i(e) {
                a || ($i(l, e), a = !0)
            },
            o(e) {
                bi(l, e), a = !1
            },
            d(e) {
                e && $o(t), l && l.d(e), c && c.d()
            }
        }
    }

    function el(e, t, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = t, {
            close: s
        } = t;
        return e.$$set = e => {
            "close" in e && n(0, s = e.close), "$$scope" in e && n(1, i = e.$$scope)
        }, [s, i, o]
    }
    class tl extends Si {
        constructor(e) {
            super(), ki(this, e, el, Jr, Yn, {
                close: 0
            })
        }
    }

    function nl(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("error_message_generic_error")}`, Mo(t, "data-qa", "error-message-generic")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    class ol extends Si {
        constructor(e) {
            super(), ki(this, e, null, nl, Yn, {})
        }
    }

    function il(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("error_message_internet_connection")}`
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    class sl extends Si {
        constructor(e) {
            super(), ki(this, e, null, il, Yn, {})
        }
    }

    function al(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("full_page_translation_error_service_not_available")}`
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    class rl extends Si {
        constructor(e) {
            super(), ki(this, e, null, al, Yn, {})
        }
    }

    function ll(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = yo("div"), n = yo("div"), n.textContent = `${chrome.i18n.getMessage("warning_message_different_subscription_needed")}`, o = To(), i = yo("div"), i.textContent = `${chrome.i18n.getMessage("link_get_pro_license")}`, Mo(i, "class", "link svelte-1mpkjv7"), Mo(t, "class", "container svelte-1mpkjv7")
            },
            m(r, l) {
                vo(r, t, l), fo(t, n), fo(t, o), fo(t, i), s || (a = Eo(i, "click", e[0]), s = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), s = !1, a()
            }
        }
    }

    function cl(e) {
        return [function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ji,
                    utmContent: "warning_user_unauthorised"
                }
            })
        }]
    }
    class dl extends Si {
        constructor(e) {
            super(), ki(this, e, cl, ll, Yn, {})
        }
    }

    function ul(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = yo("div"), n = yo("div"), n.textContent = `${chrome.i18n.getMessage("warning_message_free_usage_limit_reached")}`, o = To(), i = yo("div"), i.textContent = `${chrome.i18n.getMessage("link_try_deepl")}`, Mo(i, "class", "link svelte-1mpkjv7"), Mo(t, "class", "container svelte-1mpkjv7")
            },
            m(r, l) {
                vo(r, t, l), fo(t, n), fo(t, o), fo(t, i), s || (a = Eo(i, "click", e[0]), s = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), s = !1, a()
            }
        }
    }

    function pl(e) {
        return [function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ji,
                    utmContent: "warning_user_blocked"
                }
            })
        }]
    }
    class gl extends Si {
        constructor(e) {
            super(), ki(this, e, pl, ul, Yn, {})
        }
    }

    function ml(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("error_message_please_login")}`
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    class hl extends Si {
        constructor(e) {
            super(), ki(this, e, null, ml, Yn, {})
        }
    }

    function fl(e, t, n) {
        const o = e.slice();
        return o[1] = t[n], o
    }

    function _l(e) {
        let t, n = e[1].text + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function wl(e) {
        let t, n, o, i, s, a = e[1].text + "";
        return {
            c() {
                t = yo("span"), n = xo(a), o = To(), Mo(t, "class", "link svelte-1mpkjv7")
            },
            m(a, r) {
                vo(a, t, r), fo(t, n), fo(t, o), i || (s = Eo(t, "click", e[0]), i = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), i = !1, s()
            }
        }
    }

    function vl(e) {
        let t;
        let n = function (e, t) {
                return "deeplSupportLink" === e[1].block ? wl : _l
            }(e),
            o = n(e);
        return {
            c() {
                o.c(), t = Lo()
            },
            m(e, n) {
                o.m(e, n), vo(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e), e && $o(t)
            }
        }
    }

    function $l(e) {
        let t, n = mr(chrome.i18n.getMessage("warning_message_account_limit_reached"), ["deeplSupportLink"]),
            o = [];
        for (let t = 0; t < n.length; t += 1) o[t] = vl(fl(e, n, t));
        return {
            c() {
                t = yo("div");
                for (let e = 0; e < o.length; e += 1) o[e].c();
                Mo(t, "class", "container svelte-1mpkjv7")
            },
            m(e, n) {
                vo(e, t, n);
                for (let e = 0; e < o.length; e += 1) o[e].m(t, null)
            },
            p(e, [i]) {
                if (1 & i) {
                    let s;
                    for (n = mr(chrome.i18n.getMessage("warning_message_account_limit_reached"), ["deeplSupportLink"]), s = 0; s < n.length; s += 1) {
                        const a = fl(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = vl(a), o[s].c(), o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1) o[s].d(1);
                    o.length = n.length
                }
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), bo(o, e)
            }
        }
    }

    function bl(e) {
        return [function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: as
                }
            })
        }]
    }
    class yl extends Si {
        constructor(e) {
            super(), ki(this, e, bl, $l, Yn, {})
        }
    }

    function Cl(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("error_message_technical_issue")}`
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    class xl extends Si {
        constructor(e) {
            super(), ki(this, e, null, Cl, Yn, {})
        }
    }

    function Tl(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("error_message_session_expired")}`
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    class Ll extends Si {
        constructor(e) {
            super(), ki(this, e, null, Tl, Yn, {})
        }
    }

    function El(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("full_page_translation_error_exceeds_char_limit")}`
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    class kl extends Si {
        constructor(e) {
            super(), ki(this, e, null, El, Yn, {})
        }
    }

    function Sl(e) {
        let t, n, o;
        var i = e[1];
        return i && (t = Bo(i, {})), {
            c() {
                t && Ti(t.$$.fragment), n = Lo()
            },
            m(e, i) {
                t && Li(t, e, i), vo(e, n, i), o = !0
            },
            p(e, o) {
                if (i !== (i = e[1])) {
                    if (t) {
                        wi();
                        const e = t;
                        bi(e.$$.fragment, 1, 0, (() => {
                            Ei(e, 1)
                        })), vi()
                    }
                    i ? (t = Bo(i, {}), Ti(t.$$.fragment), $i(t.$$.fragment, 1), Li(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && $i(t.$$.fragment, e), o = !0)
            },
            o(e) {
                t && bi(t.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(n), t && Ei(t, e)
            }
        }
    }

    function Ml(e) {
        let t, n;
        return t = new tl({
            props: {
                close: e[0],
                $$slots: {
                    default: [Dl]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.close = e[0]), 130 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Il(e) {
        let t, n;
        return t = new Qr({
            props: {
                close: e[0],
                $$slots: {
                    default: [Ol]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.close = e[0]), 130 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Dl(e) {
        let t, n, o;
        var i = e[1];
        return i && (t = Bo(i, {})), {
            c() {
                t && Ti(t.$$.fragment), n = Lo()
            },
            m(e, i) {
                t && Li(t, e, i), vo(e, n, i), o = !0
            },
            p(e, o) {
                if (i !== (i = e[1])) {
                    if (t) {
                        wi();
                        const e = t;
                        bi(e.$$.fragment, 1, 0, (() => {
                            Ei(e, 1)
                        })), vi()
                    }
                    i ? (t = Bo(i, {}), Ti(t.$$.fragment), $i(t.$$.fragment, 1), Li(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && $i(t.$$.fragment, e), o = !0)
            },
            o(e) {
                t && bi(t.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(n), t && Ei(t, e)
            }
        }
    }

    function Ol(e) {
        let t, n, o;
        var i = e[1];
        return i && (t = Bo(i, {})), {
            c() {
                t && Ti(t.$$.fragment), n = Lo()
            },
            m(e, i) {
                t && Li(t, e, i), vo(e, n, i), o = !0
            },
            p(e, o) {
                if (i !== (i = e[1])) {
                    if (t) {
                        wi();
                        const e = t;
                        bi(e.$$.fragment, 1, 0, (() => {
                            Ei(e, 1)
                        })), vi()
                    }
                    i ? (t = Bo(i, {}), Ti(t.$$.fragment), $i(t.$$.fragment, 1), Li(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && $i(t.$$.fragment, e), o = !0)
            },
            o(e) {
                t && bi(t.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(n), t && Ei(t, e)
            }
        }
    }

    function Nl(e) {
        let t, n, o, i;
        const s = [Il, Ml, Sl],
            a = [];

        function r(e, t) {
            return e[2] === e[3].SERIOUS || e[2] === e[3].UNKNOWN ? 0 : e[2] === e[3].WARNING ? 1 : e[2] === e[3].CUSTOM ? 2 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)), {
            c() {
                n && n.c(), o = Lo()
            },
            m(e, n) {
                ~t && a[t].m(e, n), vo(e, o, n), i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e), t === l ? ~t && a[t].p(e, i) : (n && (wi(), bi(a[l], 1, 1, (() => {
                    a[l] = null
                })), vi()), ~t ? (n = a[t], n ? n.p(e, i) : (n = a[t] = s[t](e), n.c()), $i(n, 1), n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || ($i(n), i = !0)
            },
            o(e) {
                bi(n), i = !1
            },
            d(e) {
                ~t && a[t].d(e), e && $o(o)
            }
        }
    }

    function Al(e, t, n) {
        let o, i, {
                error: s
            } = t,
            {
                close: a
            } = t;
        const r = {
                UNKNOWN: 1,
                WARNING: 2,
                SERIOUS: 3,
                CUSTOM: 4
            },
            l = {
                [zt]: ol,
                [Ht]: sl,
                [Ft]: rl,
                [qt]: hl,
                [qr]: Ll,
                [Wr]: Ll,
                [jr]: Ll,
                [Gr]: Ll,
                [Ut]: gl,
                [Wt]: gl,
                [Kt]: kl,
                [Bt]: dl,
                [jt]: yl,
                [Zt]: xl
            };
        return Ko((() => {
            Vr() ? Dn({
                action: "dlErrorVisibility",
                payload: {
                    state: !0
                }
            }) : Bi.set(!0)
        })), Xo((() => {
            Vr() ? Dn({
                action: "dlErrorVisibility",
                payload: {
                    state: !1
                }
            }) : Bi.set(!1)
        })), e.$$set = e => {
            "error" in e && n(4, s = e.error), "close" in e && n(0, a = e.close)
        }, e.$$.update = () => {
            16 & e.$$.dirty && n(2, o = function (e) {
                switch (e) {
                    case zt:
                    case Ht:
                    case Ft:
                    case qt:
                    case qr:
                    case Wr:
                    case jr:
                    case Gr:
                    case Zt:
                        return r.SERIOUS;
                    case Ut:
                    case Wt:
                    case Kt:
                    case Bt:
                    case jt:
                        return r.WARNING;
                    default:
                        return r.UNKNOWN
                }
            }(s ? s.error : "")), 16 & e.$$.dirty && n(1, i = s && l[s.error] || ol)
        }, [a, i, o, r, s]
    }
    class Rl extends Si {
        constructor(e) {
            super(), ki(this, e, Al, Nl, Yn, {
                error: 4,
                close: 0
            })
        }
    }

    function Pl(e) {
        let t, n, o, i, s;
        return n = new Rl({
            props: {
                error: e[1],
                close: e[2]
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "container svelte-1wstx56")
            },
            m(e, o) {
                vo(e, t, o), Li(n, t, null), s = !0
            },
            p(e, t) {
                const o = {};
                2 & t && (o.error = e[1]), 4 & t && (o.close = e[2]), n.$set(o)
            },
            i(e) {
                s || ($i(n.$$.fragment, e), li((() => {
                    i && i.end(1), o = Ci(t, Ur, {
                        x: 100,
                        duration: 1e3
                    }), o.start()
                })), s = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o && o.invalidate(), i = xi(t, Ur, {
                    x: 100,
                    duration: 1e3
                }), s = !1
            },
            d(e) {
                e && $o(t), Ei(n), e && i && i.end()
            }
        }
    }

    function zl(e) {
        let t, n, o = e[3] && !1 === e[0] && Pl(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                e[3] && !1 === e[0] ? o ? (o.p(e, n), 9 & n && $i(o, 1)) : (o = Pl(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function Hl(e, t, n) {
        let o;
        eo(e, Bi, (e => n(4, o = e)));
        let {
            error: i
        } = t, {
            close: s
        } = t, {
            errorAlreadyShown: a
        } = t, r = !1;
        return Ko((() => {
            setTimeout((() => {
                n(3, r = !0), n(0, a = o)
            }), 100)
        })), e.$$set = e => {
            "error" in e && n(1, i = e.error), "close" in e && n(2, s = e.close), "errorAlreadyShown" in e && n(0, a = e.errorAlreadyShown)
        }, [a, i, s, r]
    }
    class Fl extends Si {
        constructor(e) {
            super(), ki(this, e, Hl, zl, Yn, {
                error: 1,
                close: 2,
                errorAlreadyShown: 0
            })
        }
    }
    class Bl extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent = void 0;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM(e) {
            this.shadowContainer.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: ${M.deepl_inline_ui.z_index}`, this.mainComponent = new Fl({
                target: this.shadowContainer,
                props: {
                    error: e,
                    close: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy(), this.remove()
        }
    }

    function Ul(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "container svelte-1dicgbw")
            },
            m(i, s) {
                vo(i, t, s), t.innerHTML = e[1], n || (o = Eo(t, "click", e[0]), n = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function ql(e) {
        return [function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: os
                }
            }), Mn({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: ce
                }
            })
        }, chrome.i18n.getMessage("notification_keyboard_shortcut_hint", `<span style="color: #006494; text-decoration: underline;">${chrome.i18n.getMessage("notification_keyboard_shortcut_hint_placeholder")}</span>`)]
    }
    window.customElements.define("deepl-alert", Bl);
    class jl extends Si {
        constructor(e) {
            super(), ki(this, e, ql, Ul, Yn, {})
        }
    }
    const Wl = {
        developer_tools: "DEVELOPER_TOOLS",
        settings_page: "SETTINGS_PAGE",
        settings_writing: "SETTINGS_WRITING",
        settings_reading: "SETTINGS_READING",
        settings_customizations: "SETTINGS_CUSTOMIZATIONS",
        onboarding: "ONBOARDING"
    };

    function Gl(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "container svelte-1dicgbw"), Mo(t, "data-qa", "deepl-notification-open-settings-page-writing-link")
            },
            m(i, s) {
                vo(i, t, s), t.innerHTML = e[0], n || (o = Eo(t, "click", e[1]), n = !0)
            },
            p(e, [n]) {
                1 & n && (t.innerHTML = e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function Vl(e, t, n) {
        let {
            options: o
        } = t, i = o ? .settingsPageURL ? o ? .settingsPageURL : Wl.settings_page;
        let s = "",
            a = o ? .currentDomain ? o.currentDomain : "";
        switch (o.saveAction) {
            case me:
                s = chrome.i18n.getMessage("notification_input_translation_disabled_everywhere", `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_input_translation_link_to_settings_placeholder")}</span>`);
                break;
            case ge:
                s = chrome.i18n.getMessage("notification_input_translation_disabled_per_site", [a, `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_input_translation_link_to_settings_placeholder")}</span>`])
        }
        return e.$$set = e => {
            "options" in e && n(2, o = e.options)
        }, [s, function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: i
                }
            })
        }, o]
    }
    class Zl extends Si {
        constructor(e) {
            super(), ki(this, e, Vl, Gl, Yn, {
                options: 2
            })
        }
    }

    function Kl(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "container svelte-1dicgbw"), Mo(t, "data-qa", "deepl-notification-open-settings-page-reading-link")
            },
            m(i, s) {
                vo(i, t, s), t.innerHTML = e[0], n || (o = Eo(t, "click", e[1]), n = !0)
            },
            p(e, [n]) {
                1 & n && (t.innerHTML = e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function Xl(e, t, n) {
        let {
            options: o
        } = t, i = o ? .settingsPageURL ? o ? .settingsPageURL : Wl.settings_page;
        let s = "",
            a = o ? .currentDomain ? o.currentDomain : "";
        switch (o.saveAction) {
            case me:
                s = chrome.i18n.getMessage("notification_inline_translation_disabled_everywhere", `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_inline_translation_link_to_settings_placeholder")}</span>`);
                break;
            case ge:
                s = chrome.i18n.getMessage("notification_inline_translation_disabled_per_site", [a, `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_inline_translation_link_to_settings_placeholder")}</span>`])
        }
        return e.$$set = e => {
            "options" in e && n(2, o = e.options)
        }, [s, function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: i
                }
            })
        }, o]
    }
    class Ql extends Si {
        constructor(e) {
            super(), ki(this, e, Xl, Kl, Yn, {
                options: 2
            })
        }
    }

    function Yl(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), t.textContent = `${chrome.i18n.getMessage("ui_notification_fpt_hide")}`, Mo(t, "class", "container svelte-1uziz8q"), Mo(t, "data-qa", "deepl-notification-open-settings-page-reading-link")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", e[0]), n = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function Jl(e) {
        return [function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: Wl.settings_page
                }
            })
        }]
    }
    class ec extends Si {
        constructor(e) {
            super(), ki(this, e, Jl, Yl, Yn, {})
        }
    }

    function tc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        var h = e[5];

        function f(e) {
            return {
                props: {
                    options: e[1]
                }
            }
        }
        return h && (r = Bo(h, f(e))), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("button"), s = To(), a = yo("div"), r && Ti(r.$$.fragment), Mo(o, "class", i = "dl-close-icon " + e[4] + " svelte-7jgk9y"), Mo(n, "class", "header"), Mo(n, "notificationtheme", e[4]), Mo(a, "class", l = "body " + e[4] + " svelte-7jgk9y"), Mo(t, "class", c = "container " + e[4] + " svelte-7jgk9y"), zo(t, "contrast", e[0] === N)
            },
            m(i, l) {
                vo(i, t, l), fo(t, n), fo(n, o), fo(t, s), fo(t, a), r && Li(r, a, null), p = !0, g || (m = Eo(o, "click", (function () {
                    Qn(e[2]) && e[2].apply(this, arguments)
                })), g = !0)
            },
            p(s, d) {
                e = s, (!p || 16 & d && i !== (i = "dl-close-icon " + e[4] + " svelte-7jgk9y")) && Mo(o, "class", i), (!p || 16 & d) && Mo(n, "notificationtheme", e[4]);
                const u = {};
                if (2 & d && (u.options = e[1]), h !== (h = e[5])) {
                    if (r) {
                        wi();
                        const e = r;
                        bi(e.$$.fragment, 1, 0, (() => {
                            Ei(e, 1)
                        })), vi()
                    }
                    h ? (r = Bo(h, f(e)), Ti(r.$$.fragment), $i(r.$$.fragment, 1), Li(r, a, null)) : r = null
                } else h && r.$set(u);
                (!p || 16 & d && l !== (l = "body " + e[4] + " svelte-7jgk9y")) && Mo(a, "class", l), (!p || 16 & d && c !== (c = "container " + e[4] + " svelte-7jgk9y")) && Mo(t, "class", c), (!p || 17 & d) && zo(t, "contrast", e[0] === N)
            },
            i(e) {
                p || (r && $i(r.$$.fragment, e), li((() => {
                    u && u.end(1), d = Ci(t, Ur, {
                        x: 100,
                        duration: 1e3
                    }), d.start()
                })), p = !0)
            },
            o(e) {
                r && bi(r.$$.fragment, e), d && d.invalidate(), u = xi(t, Ur, {
                    x: 100,
                    duration: 1e3
                }), p = !1
            },
            d(e) {
                e && $o(t), r && Ei(r), e && u && u.end(), g = !1, m()
            }
        }
    }

    function nc(e) {
        let t, n, o = e[3] && tc(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                e[3] ? o ? (o.p(e, n), 8 & n && $i(o, 1)) : (o = tc(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function oc(e, t, n) {
        let o, i, {
                type: s
            } = t,
            {
                options: a
            } = t,
            {
                close: r
            } = t,
            l = !1;
        const c = {
            [I]: jl,
            [D]: Zl,
            [O]: Ql,
            [N]: ec
        };
        return Ko((() => {
            setTimeout((() => n(3, l = !0)), 100), setTimeout((() => n(3, l = !1)), 10100), setTimeout((() => r()), 11100)
        })), e.$$set = e => {
            "type" in e && n(0, s = e.type), "options" in e && n(1, a = e.options), "close" in e && n(2, r = e.close)
        }, e.$$.update = () => {
            1 & e.$$.dirty && n(5, o = c[s]), 2 & e.$$.dirty && n(4, i = A[a ? .theme] ? A[a ? .theme] : "")
        }, [s, a, r, l, i, o]
    }
    class ic extends Si {
        constructor(e) {
            super(), ki(this, e, oc, nc, Yn, {
                type: 0,
                options: 1,
                close: 2
            })
        }
    }
    class sc extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM(e, t) {
            this.shadowContainer.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: ${M.deepl_inline_ui.z_index}`, this.mainComponent = new ic({
                target: this.shadowContainer,
                props: {
                    type: e,
                    options: t,
                    close: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy(), this.remove()
        }
    }

    function ac(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("div"), n = yo("div"), Mo(n, "class", "close-button svelte-b85ux9"), Mo(t, "class", "close-button-container svelte-b85ux9")
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), o || (i = Eo(n, "click", (function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })), o = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && $o(t), o = !1, i()
            }
        }
    }

    function rc(e) {
        let t, n, o, i, s, a = e[0] && ac(e);
        const r = e[2].default,
            l = to(r, e, e[1], null);
        return {
            c() {
                a && a.c(), t = To(), n = yo("div"), o = yo("div"), i = To(), l && l.c(), Mo(o, "class", "logo svelte-b85ux9"), Mo(n, "class", "body svelte-b85ux9")
            },
            m(e, r) {
                a && a.m(e, r), vo(e, t, r), vo(e, n, r), fo(n, o), fo(n, i), l && l.m(n, null), s = !0
            },
            p(e, [n]) {
                e[0] ? a ? a.p(e, n) : (a = ac(e), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null), l && l.p && (!s || 2 & n) && io(l, r, e, e[1], s ? oo(r, e[1], n, null) : so(e[1]), null)
            },
            i(e) {
                s || ($i(l, e), s = !0)
            },
            o(e) {
                bi(l, e), s = !1
            },
            d(e) {
                a && a.d(e), e && $o(t), e && $o(n), l && l.d(e)
            }
        }
    }

    function lc(e, t, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = t, {
            onClose: s
        } = t;
        return e.$$set = e => {
            "onClose" in e && n(0, s = e.onClose), "$$scope" in e && n(1, i = e.$$scope)
        }, [s, i, o]
    }
    window.customElements.define("deepl-notification", sc);
    class cc extends Si {
        constructor(e) {
            super(), ki(this, e, lc, rc, Yn, {
                onClose: 0
            })
        }
    }

    function dc(e, t, n) {
        const o = e.slice();
        return o[35] = t[n], o
    }

    function uc(e) {
        let t, n, o, i = e[3],
            s = [];
        for (let t = 0; t < i.length; t += 1) s[t] = pc(dc(e, i, t));
        return {
            c() {
                t = yo("ul");
                for (let e = 0; e < s.length; e += 1) s[e].c();
                Mo(t, "id", "dropdown_list"), Mo(t, "class", "dropdown__list svelte-2296ww"), Mo(t, "role", "listbox"), Mo(t, "aria-labelledby", "dropdown_option"), Mo(t, "tabindex", "-1"), Mo(t, "style", n = "up" === e[12] ? "bottom: 30px" : `height: ${e[15].height}; top: ${e[15].top};`), Mo(t, "data-qa", e[6]), zo(t, "alternate-dropdown-list", "sm" === e[8]), zo(t, "align-right", e[9])
            },
            m(e, n) {
                vo(e, t, n);
                for (let e = 0; e < s.length; e += 1) s[e].m(t, null)
            },
            p(e, o) {
                if (262155 & o[0]) {
                    let n;
                    for (i = e[3], n = 0; n < i.length; n += 1) {
                        const a = dc(e, i, n);
                        s[n] ? s[n].p(a, o) : (s[n] = pc(a), s[n].c(), s[n].m(t, null))
                    }
                    for (; n < s.length; n += 1) s[n].d(1);
                    s.length = i.length
                }
                36864 & o[0] && n !== (n = "up" === e[12] ? "bottom: 30px" : `height: ${e[15].height}; top: ${e[15].top};`) && Mo(t, "style", n), 64 & o[0] && Mo(t, "data-qa", e[6]), 256 & o[0] && zo(t, "alternate-dropdown-list", "sm" === e[8]), 512 & o[0] && zo(t, "align-right", e[9])
            },
            i(e) {
                o || li((() => {
                    o = Ci(t, Ur, {
                        y: -5,
                        duration: 500
                    }), o.start()
                }))
            },
            o: Gn,
            d(e) {
                e && $o(t), bo(s, e)
            }
        }
    }

    function pc(e) {
        let t, n, o, i, s, a, r, l, c = e[35].label + "";

        function d() {
            return e[27](e[35])
        }
        return {
            c() {
                t = yo("li"), n = xo(c), o = To(), Mo(t, "role", "option"), Mo(t, "data-option-value", i = e[35].value), Mo(t, "data-option-regionalvariant", s = e[35].regionalVariant), Mo(t, "aria-selected", a = e[0] === e[35]), Mo(t, "class", "svelte-2296ww"), zo(t, "selected", e[0] === e[35])
            },
            m(i, s) {
                vo(i, t, s), fo(t, n), fo(t, o), r || (l = [Eo(t, "click", d), Eo(t, "mousedown", So(ko(e[24])))], r = !0)
            },
            p(o, r) {
                e = o, 8 & r[0] && c !== (c = e[35].label + "") && Io(n, c), 8 & r[0] && i !== (i = e[35].value) && Mo(t, "data-option-value", i), 8 & r[0] && s !== (s = e[35].regionalVariant) && Mo(t, "data-option-regionalvariant", s), 9 & r[0] && a !== (a = e[0] === e[35]) && Mo(t, "aria-selected", a), 9 & r[0] && zo(t, "selected", e[0] === e[35])
            },
            d(e) {
                e && $o(t), r = !1, Xn(l)
            }
        }
    }

    function gc(e) {
        let t, n, o, i, s, a, r, l, c = e[1] && uc(e);
        return {
            c() {
                t = yo("div"), n = yo("button"), o = xo(e[17]), i = To(), c && c.c(), Mo(n, "aria-haspopup", "listbox"), Mo(n, "id", "dropdown_button"), Mo(n, "aria-labelledby", "dropdown_option dropdown_button"), Mo(n, "aria-expanded", e[1]), Mo(n, "data-qa", e[5]), Mo(n, "class", "svelte-2296ww"), zo(n, "dropdown-label", "original" === e[7]), zo(n, "dropdown-label-alternate", "alternate" === e[7]), zo(n, "dropdown-label-zendesk", "zendesk" === e[7]), zo(n, "dropdown-label-full-width", e[10]), zo(n, "dropdown-label-borderless", e[11]), zo(n, "dropup", "up" === e[12]), Mo(t, "class", s = ao(`dropdown__wrapper ${e[4]}`) + " svelte-2296ww"), Mo(t, "style", e[16]), li((() => e[29].call(t))), zo(t, "disabled", e[2])
            },
            m(s, d) {
                vo(s, t, d), fo(t, n), fo(n, o), e[26](n), fo(t, i), c && c.m(t, null), a = Po(t, e[29].bind(t)), r || (l = [Eo(n, "click", e[19]), Eo(n, "mousedown", So(ko(e[25]))), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[28])], r = !0)
            },
            p(e, i) {
                131072 & i[0] && Io(o, e[17]), 2 & i[0] && Mo(n, "aria-expanded", e[1]), 32 & i[0] && Mo(n, "data-qa", e[5]), 128 & i[0] && zo(n, "dropdown-label", "original" === e[7]), 128 & i[0] && zo(n, "dropdown-label-alternate", "alternate" === e[7]), 128 & i[0] && zo(n, "dropdown-label-zendesk", "zendesk" === e[7]), 1024 & i[0] && zo(n, "dropdown-label-full-width", e[10]), 2048 & i[0] && zo(n, "dropdown-label-borderless", e[11]), 4096 & i[0] && zo(n, "dropup", "up" === e[12]), e[1] ? c ? (c.p(e, i), 2 & i[0] && $i(c, 1)) : (c = uc(e), c.c(), $i(c, 1), c.m(t, null)) : c && (c.d(1), c = null), 16 & i[0] && s !== (s = ao(`dropdown__wrapper ${e[4]}`) + " svelte-2296ww") && Mo(t, "class", s), 65536 & i[0] && Mo(t, "style", e[16]), 20 & i[0] && zo(t, "disabled", e[2])
            },
            i(e) {
                $i(c)
            },
            o: Gn,
            d(n) {
                n && $o(t), e[26](null), c && c.d(), a(), r = !1, Xn(l)
            }
        }
    }
    const mc = 300;

    function hc(e, t, n) {
        let o, {
                isOpen: i = !1
            } = t,
            {
                disabled: s = !1
            } = t,
            {
                items: a = []
            } = t,
            {
                placeholder: r = ""
            } = t,
            {
                customClass: l = ""
            } = t,
            {
                selectedOption: c
            } = t,
            {
                defaultOption: d
            } = t,
            {
                dataQaButton: u = "dl-dropdown-button"
            } = t,
            {
                dataQaList: p = "dl-dropdown-list"
            } = t,
            {
                variant: g = "original"
            } = t,
            {
                fontSize: m = "default"
            } = t,
            {
                alignRight: h = !0
            } = t,
            {
                extraText: f = ""
            } = t,
            {
                isFullWidth: _ = !1
            } = t,
            {
                isBorderless: w = !1
            } = t,
            {
                direction: v = "down"
            } = t;
        const $ = Jo("deepl_settings");
        let b, y = 0,
            C = {},
            x = {},
            T = {},
            L = "visibility: hidden; opacity:0; height:0;";
        const E = Qo();

        function k() {
            C.spaceAbove = Math.abs(b.getBoundingClientRect().top), C.spaceBelow = Math.abs(window.innerHeight - b.getBoundingClientRect().bottom)
        }
        d && (c = d), Ko((() => {
            setTimeout((() => {
                n(16, L = "")
            }), 100)
        }));
        return e.$$set = e => {
            "isOpen" in e && n(1, i = e.isOpen), "disabled" in e && n(2, s = e.disabled), "items" in e && n(3, a = e.items), "placeholder" in e && n(20, r = e.placeholder), "customClass" in e && n(4, l = e.customClass), "selectedOption" in e && n(0, c = e.selectedOption), "defaultOption" in e && n(21, d = e.defaultOption), "dataQaButton" in e && n(5, u = e.dataQaButton), "dataQaList" in e && n(6, p = e.dataQaList), "variant" in e && n(7, g = e.variant), "fontSize" in e && n(8, m = e.fontSize), "alignRight" in e && n(9, h = e.alignRight), "extraText" in e && n(22, f = e.extraText), "isFullWidth" in e && n(10, _ = e.isFullWidth), "isBorderless" in e && n(11, w = e.isBorderless), "direction" in e && n(12, v = e.direction)
        }, e.$$.update = () => {
            8396801 & e.$$.dirty[0] && (c && (T ? .value === c ? .value && T ? .regionalVariant === c ? .regionalVariant || (n(23, T = c), E("valueselected", {
                selectedOption: c
            }))), y && k()), 5242881 & e.$$.dirty[0] && n(17, o = `${c?c.selectedOptionLabel:r}${f?` ${f}`:""}`)
        }, [c, i, s, a, l, u, p, g, m, h, _, w, v, y, b, x, L, o, $, function () {
            "down" === v && function () {
                    if (k(), n(15, x.top = "auto", x), n(15, x.height = "300px", x), C.spaceBelow > C.spaceAbove) C.spaceBelow <= mc && n(15, x.height = Math.ceil(.8 * C.spaceBelow) + "px", x);
                    else {
                        let e = mc;
                        C.spaceAbove <= mc && (e = Math.ceil(.8 * C.spaceAbove)), n(15, x.height = `${e}px`, x), n(15, x.top = "-" + (e + 2) + "px", x)
                    }
                }(), n(1, i = !i),
                function () {
                    let e = b.getRootNode().querySelector("ul li[aria-selected=true]");
                    setTimeout((() => {
                        e ? .scrollIntoView({
                            block: "nearest"
                        })
                    }), 0)
                }()
        }, r, d, f, T, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (e) {
            ni[e ? "unshift" : "push"]((() => {
                b = e, n(14, b)
            }))
        }, e => {
            n(1, i = !1), n(0, c = e), $.set({
                regionalVariant: e.regionalVariant || ""
            })
        }, () => n(1, i = !1), function () {
            y = this.clientWidth, n(13, y)
        }]
    }
    class fc extends Si {
        constructor(e) {
            super(), ki(this, e, hc, gc, Yn, {
                isOpen: 1,
                disabled: 2,
                items: 3,
                placeholder: 20,
                customClass: 4,
                selectedOption: 0,
                defaultOption: 21,
                dataQaButton: 5,
                dataQaList: 6,
                variant: 7,
                fontSize: 8,
                alignRight: 9,
                extraText: 22,
                isFullWidth: 10,
                isBorderless: 11,
                direction: 12
            }, null, [-1, -1])
        }
    }

    function _c(e, t, n) {
        const o = e.slice();
        return o[17] = t[n], o
    }

    function wc(e) {
        let t, n, o, i, s;
        return n = new fc({
            props: {
                disabled: e[0],
                items: e[12],
                defaultOption: e[13],
                placeholder: e[10],
                dataQaButton: "deepl-language-selection-button",
                dataQaList: "deepl-language-selection-list",
                customClass: e[3],
                variant: e[5],
                fontSize: e[6],
                alignRight: e[7],
                isBorderless: e[8]
            }
        }), n.$on("valueselected", e[11]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment)
            },
            m(a, r) {
                vo(a, t, r), Li(n, t, null), o = !0, i || (s = Eo(t, "mousedown", So(ko(e[15]))), i = !0)
            },
            p(e, t) {
                const o = {};
                1 & t && (o.disabled = e[0]), 8 & t && (o.customClass = e[3]), 32 & t && (o.variant = e[5]), 64 & t && (o.fontSize = e[6]), 128 & t && (o.alignRight = e[7]), 256 & t && (o.isBorderless = e[8]), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n), i = !1, s()
            }
        }
    }

    function vc(e) {
        let t, n, o, i, s, a, r, l = e[2] && $c(),
            c = e[12],
            d = [];
        for (let t = 0; t < c.length; t += 1) d[t] = bc(_c(e, c, t));
        return {
            c() {
                t = yo("div"), n = yo("select"), l && l.c(), o = Lo();
                for (let e = 0; e < d.length; e += 1) d[e].c();
                i = xo(">"), Mo(n, "data-qa", "deepl-language-selection"), Mo(n, "class", "svelte-f4rh0n"), Mo(t, "class", s = ao("alternate" === e[5] ? "language-selector-alternate" : "language-selector") + " svelte-f4rh0n")
            },
            m(s, c) {
                vo(s, t, c), fo(t, n), l && l.m(n, null), fo(n, o);
                for (let e = 0; e < d.length; e += 1) d[e].m(n, null);
                fo(n, i), No(n, e[1]), a || (r = Eo(n, "change", ko(e[16])), a = !0)
            },
            p(e, a) {
                if (e[2] ? l ? l.p(e, a) : (l = $c(), l.c(), l.m(n, o)) : l && (l.d(1), l = null), 4096 & a) {
                    let t;
                    for (c = e[12], t = 0; t < c.length; t += 1) {
                        const o = _c(e, c, t);
                        d[t] ? d[t].p(o, a) : (d[t] = bc(o), d[t].c(), d[t].m(n, i))
                    }
                    for (; t < d.length; t += 1) d[t].d(1);
                    d.length = c.length
                }
                4098 & a && No(n, e[1]), 32 & a && s !== (s = ao("alternate" === e[5] ? "language-selector-alternate" : "language-selector") + " svelte-f4rh0n") && Mo(t, "class", s)
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), l && l.d(), bo(d, e), a = !1, r()
            }
        }
    }

    function $c(e) {
        let t, n, o, i = chrome.i18n.getMessage("supported_languages_undefined") + "";
        return {
            c() {
                t = yo("option"), n = xo(i), o = To(), t.__value = void 0, t.value = t.__value, Mo(t, "data-option-regionalvariant", void 0)
            },
            m(e, i) {
                vo(e, t, i), fo(t, n), fo(t, o)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function bc(e) {
        let t, n, o, i = e[17].label + "";
        return {
            c() {
                t = yo("option"), n = xo(i), o = To(), t.__value = e[17].value, t.value = t.__value, Mo(t, "data-option-regionalvariant", e[17].regionalVariant)
            },
            m(e, i) {
                vo(e, t, i), fo(t, n), fo(t, o)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function yc(e) {
        let t, n, o, i;
        const s = [vc, wc],
            a = [];
        return t = Vr() ? 0 : 1, n = a[t] = s[t](e), {
            c() {
                n.c(), o = Lo()
            },
            m(e, n) {
                a[t].m(e, n), vo(e, o, n), i = !0
            },
            p(e, [t]) {
                n.p(e, t)
            },
            i(e) {
                i || ($i(n), i = !0)
            },
            o(e) {
                bi(n), i = !1
            },
            d(e) {
                a[t].d(e), e && $o(o)
            }
        }
    }

    function Cc(e, t, n) {
        let o, a = Gn,
            r = () => (a(), a = Jn(p, (e => n(14, o = e))), p);
        e.$$.on_destroy.push((() => a()));
        const l = Qo();
        let {
            value: c
        } = t, {
            showChooseLanguageOption: d = !1
        } = t, {
            customClass: u = ""
        } = t, {
            websiteSettings: p
        } = t;
        r();
        let {
            disabled: g = !1
        } = t, {
            variant: m = "original"
        } = t, {
            fontSize: h = "default"
        } = t, {
            alignRight: f = !1
        } = t, {
            isBorderless: _ = !1
        } = t, w = d ? chrome.i18n.getMessage("supported_languages_undefined") : void 0;
        const v = It();
        let $ = c ? v.find((e => e.value === c)) : void 0;
        return e.$$set = e => {
            "value" in e && n(1, c = e.value), "showChooseLanguageOption" in e && n(2, d = e.showChooseLanguageOption), "customClass" in e && n(3, u = e.customClass), "websiteSettings" in e && r(n(4, p = e.websiteSettings)), "disabled" in e && n(0, g = e.disabled), "variant" in e && n(5, m = e.variant), "fontSize" in e && n(6, h = e.fontSize), "alignRight" in e && n(7, f = e.alignRight), "isBorderless" in e && n(8, _ = e.isBorderless)
        }, e.$$.update = () => {
            16384 & e.$$.dirty && (o && o.translationState === s ? n(0, g = !0) : o && o.translationState === i && n(0, g = !1))
        }, [g, c, d, u, p, m, h, f, _, l, w, function (e) {
            g || l("selection", e.detail)
        }, v, $, o, function (t) {
            ei.call(this, e, t)
        }, e => {
            if (g) return;
            const t = e.target.options[e.target.selectedIndex].getAttribute("data-option-regionalVariant") || void 0;
            l("selection", {
                selectedOption: {
                    value: e.target.value,
                    regionalVariant: t
                }
            })
        }]
    }
    class xc extends Si {
        constructor(e) {
            super(), ki(this, e, Cc, yc, Yn, {
                value: 1,
                showChooseLanguageOption: 2,
                customClass: 3,
                websiteSettings: 4,
                disabled: 0,
                variant: 5,
                fontSize: 6,
                alignRight: 7,
                isBorderless: 8
            })
        }
    }

    function Tc(e) {
        let t;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "loader svelte-c65fyl"), zo(t, "small", e[0])
            },
            m(e, n) {
                vo(e, t, n)
            },
            p(e, [n]) {
                1 & n && zo(t, "small", e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Lc(e, t, n) {
        let {
            small: o = !1
        } = t;
        return e.$$set = e => {
            "small" in e && n(0, o = e.small)
        }, [o]
    }
    class Ec extends Si {
        constructor(e) {
            super(), ki(this, e, Lc, Tc, Yn, {
                small: 0
            })
        }
    }

    function kc(e) {
        let t, n;
        return {
            c() {
                t = yo("div"), n = xo(e[0]), Mo(t, "class", "info-msg svelte-17qaccl")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, [t]) {
                1 & t && Io(n, e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Sc(e, t, n) {
        let {
            message: o
        } = t;
        return e.$$set = e => {
            "message" in e && n(0, o = e.message)
        }, [o]
    }
    class Mc extends Si {
        constructor(e) {
            super(), ki(this, e, Sc, kc, Yn, {
                message: 0
            })
        }
    }

    function Ic(e) {
        let t, n, o, i, s;
        const a = e[7].default,
            r = to(a, e, e[6], null);
        return {
            c() {
                t = yo("button"), r && r.c(), Mo(t, "type", "button"), Mo(t, "class", n = ao(e[0]) + " svelte-1b6vay0"), t.disabled = e[1], Mo(t, "id", e[5]), Mo(t, "data-qa", e[4]), zo(t, "disabled", e[1]), zo(t, "font-size-sm", "sm" === e[2]), zo(t, "padding-x-md", "md" === e[3]), zo(t, "padding-x-none", "none" === e[3])
            },
            m(n, a) {
                vo(n, t, a), r && r.m(t, null), o = !0, i || (s = [Eo(t, "click", e[8]), Eo(t, "mousedown", So(ko(e[9])))], i = !0)
            },
            p(e, [i]) {
                r && r.p && (!o || 64 & i) && io(r, a, e, e[6], o ? oo(a, e[6], i, null) : so(e[6]), null), (!o || 1 & i && n !== (n = ao(e[0]) + " svelte-1b6vay0")) && Mo(t, "class", n), (!o || 2 & i) && (t.disabled = e[1]), (!o || 32 & i) && Mo(t, "id", e[5]), (!o || 16 & i) && Mo(t, "data-qa", e[4]), (!o || 3 & i) && zo(t, "disabled", e[1]), (!o || 5 & i) && zo(t, "font-size-sm", "sm" === e[2]), (!o || 9 & i) && zo(t, "padding-x-md", "md" === e[3]), (!o || 9 & i) && zo(t, "padding-x-none", "none" === e[3])
            },
            i(e) {
                o || ($i(r, e), o = !0)
            },
            o(e) {
                bi(r, e), o = !1
            },
            d(e) {
                e && $o(t), r && r.d(e), i = !1, Xn(s)
            }
        }
    }

    function Dc(e, t, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = t, {
            className: s = "button-primary"
        } = t, {
            disabled: a = !1
        } = t, {
            fontSize: r = "default"
        } = t, {
            paddingX: l
        } = t, {
            dataQa: c = "dl-button"
        } = t, {
            id: d = ""
        } = t;
        return e.$$set = e => {
            "className" in e && n(0, s = e.className), "disabled" in e && n(1, a = e.disabled), "fontSize" in e && n(2, r = e.fontSize), "paddingX" in e && n(3, l = e.paddingX), "dataQa" in e && n(4, c = e.dataQa), "id" in e && n(5, d = e.id), "$$scope" in e && n(6, i = e.$$scope)
        }, [s, a, r, l, c, d, i, o, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }]
    }
    class Oc extends Si {
        constructor(e) {
            super(), ki(this, e, Dc, Ic, Yn, {
                className: 0,
                disabled: 1,
                fontSize: 2,
                paddingX: 3,
                dataQa: 4,
                id: 5
            })
        }
    }

    function Nc(e) {
        let t, n = chrome.i18n.getMessage("ui_fpt_hide_cancel") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Ac(e) {
        let t, n = chrome.i18n.getMessage("ui_fpt_hide_confirm") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Rc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y, C, x, T, L, E, k, S, M, I, D;
        return E = new Oc({
            props: {
                className: "button-link",
                paddingX: "none",
                $$slots: {
                    default: [Nc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), E.$on("click", (function () {
            Qn(e[0]) && e[0].apply(this, arguments)
        })), S = new Oc({
            props: {
                className: "button-primary",
                $$slots: {
                    default: [Ac]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), S.$on("click", e[4]), {
            c() {
                t = yo("div"), n = yo("p"), n.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_heading")}`, o = To(), i = yo("div"), s = yo("div"), a = yo("label"), r = yo("span"), l = yo("input"), c = To(), d = yo("span"), d.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_domain")}`, u = To(), p = yo("div"), g = yo("label"), m = yo("span"), h = yo("input"), f = To(), _ = yo("span"), _.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_lang")}`, w = To(), v = yo("div"), $ = yo("label"), b = yo("span"), y = yo("input"), C = To(), x = yo("span"), x.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_fpt")}`, T = To(), L = yo("div"), Ti(E.$$.fragment), k = To(), Ti(S.$$.fragment), Mo(n, "class", "font-bold svelte-8fn8ut"), Mo(l, "id", "option-website"), Mo(l, "name", "option"), Mo(l, "type", "radio"), l.__value = "website", l.value = l.__value, Mo(l, "class", "svelte-8fn8ut"), e[7][0].push(l), Mo(d, "class", "label svelte-8fn8ut"), Mo(a, "for", "option-website"), Mo(a, "class", "svelte-8fn8ut"), Mo(s, "class", "option svelte-8fn8ut"), Mo(h, "id", "option-lang"), Mo(h, "type", "radio"), Mo(h, "name", "option"), h.__value = "lang", h.value = h.__value, Mo(h, "class", "svelte-8fn8ut"), e[7][0].push(h), Mo(_, "class", "label svelte-8fn8ut"), Mo(g, "for", "option-lang"), Mo(g, "class", "svelte-8fn8ut"), Mo(p, "class", "option svelte-8fn8ut"), Mo(y, "id", "option-fpt"), Mo(y, "type", "radio"), Mo(y, "name", "option"), y.__value = "fpt", y.value = y.__value, Mo(y, "class", "svelte-8fn8ut"), e[7][0].push(y), Mo(x, "class", "label svelte-8fn8ut"), Mo($, "for", "option-fpt"), Mo($, "class", "svelte-8fn8ut"), Mo(v, "class", "option svelte-8fn8ut"), Mo(i, "class", "cancel-container svelte-8fn8ut"), Mo(t, "class", "cancel-translation-body svelte-8fn8ut"), Mo(L, "class", "cancel-translation-footer svelte-8fn8ut")
            },
            m(O, N) {
                vo(O, t, N), fo(t, n), fo(t, o), fo(t, i), fo(i, s), fo(s, a), fo(a, r), fo(r, l), l.checked = l.__value === e[1], fo(a, c), fo(a, d), fo(i, u), fo(i, p), fo(p, g), fo(g, m), fo(m, h), h.checked = h.__value === e[1], fo(g, f), fo(g, _), fo(i, w), fo(i, v), fo(v, $), fo($, b), fo(b, y), y.checked = y.__value === e[1], fo($, C), fo($, x), vo(O, T, N), vo(O, L, N), Li(E, L, null), fo(L, k), Li(S, L, null), M = !0, I || (D = [Eo(l, "change", e[6]), Eo(h, "change", e[8]), Eo(y, "change", e[9])], I = !0)
            },
            p(t, [n]) {
                e = t, 2 & n && (l.checked = l.__value === e[1]), 2 & n && (h.checked = h.__value === e[1]), 2 & n && (y.checked = y.__value === e[1]);
                const o = {};
                65536 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), E.$set(o);
                const i = {};
                65536 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), S.$set(i)
            },
            i(e) {
                M || ($i(E.$$.fragment, e), $i(S.$$.fragment, e), M = !0)
            },
            o(e) {
                bi(E.$$.fragment, e), bi(S.$$.fragment, e), M = !1
            },
            d(n) {
                n && $o(t), e[7][0].splice(e[7][0].indexOf(l), 1), e[7][0].splice(e[7][0].indexOf(h), 1), e[7][0].splice(e[7][0].indexOf(y), 1), n && $o(T), n && $o(L), Ei(E), Ei(S), I = !1, Xn(D)
            }
        }
    }

    function Pc(e, t, n) {
        let i, s;
        const a = Jo("deepl_settings");
        eo(e, a, (e => n(11, s = e)));
        const r = Jo("deepl_website_settings");
        eo(e, r, (e => n(10, i = e)));
        let {
            onClose: l
        } = t, {
            onCancel: c
        } = t, d = "fpt";
        return e.$$set = e => {
            "onClose" in e && n(5, l = e.onClose), "onCancel" in e && n(0, c = e.onCancel)
        }, [c, d, a, r, () => {
                const e = {
                    hideOption: void 0,
                    sourceLang: i.websiteLanguage,
                    domainName: i.hostname,
                    uiLocation: rs(W)
                };
                switch (d) {
                    case "website":
                        ro(a, s.blacklistDomains = [...s.blacklistDomains, i.hostname], s), e.hideOption = $;
                        break;
                    case "lang":
                        t = i.websiteLanguage, n = o, "EN" === t ? (ro(a, s.languagesForTranslation = {
                            ...s.languagesForTranslation,
                            "EN-GB": n
                        }, s), ro(a, s.languagesForTranslation = {
                            ...s.languagesForTranslation,
                            "EN-US": n
                        }, s)) : "PT" === t ? (ro(a, s.languagesForTranslation = {
                            ...s.languagesForTranslation,
                            "PT-PT": n
                        }, s), ro(a, s.languagesForTranslation = {
                            ...s.languagesForTranslation,
                            "PT-BR": n
                        }, s)) : ro(a, s.languagesForTranslation = {
                            ...s.languagesForTranslation,
                            [t]: n
                        }, s), e.hideOption = b;
                        break;
                    default:
                        e.hideOption = y, a.set({
                            enableFullPageTranslation: !1
                        })
                }
                var t, n;
                (() => {
                    const e = s.notificationsViewed;
                    e && e.fullPageTranslation || (ga(N), a.set({
                        notificationsViewed: {
                            ...e,
                            fullPageTranslation: !0
                        }
                    }))
                })(), Mn({
                    action: "dlTrackFptHide",
                    payload: e
                }), l()
            }, l, function () {
                d = this.__value, n(1, d)
            },
            [
                []
            ],
            function () {
                d = this.__value, n(1, d)
            },
            function () {
                d = this.__value, n(1, d)
            }
        ]
    }
    class zc extends Si {
        constructor(e) {
            super(), ki(this, e, Pc, Rc, Yn, {
                onClose: 5,
                onCancel: 0
            })
        }
    }

    function Hc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n], o
    }

    function Fc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n], o
    }

    function Bc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n], o
    }

    function Uc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n], o
    }

    function qc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n], o
    }

    function jc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p = chrome.i18n.getMessage("ui_fpt_hide_checkbox") + "";
        t = new cc({
            props: {
                onClose: e[0],
                $$slots: {
                    default: [ed]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let g = e[6] && td(e);
        return {
            c() {
                Ti(t.$$.fragment), n = To(), g && g.c(), o = To(), i = yo("div"), s = yo("label"), a = yo("input"), r = To(), l = xo(p), Mo(a, "type", "checkbox"), a.disabled = e[6], Mo(a, "class", "svelte-yijazm"), Mo(s, "class", "svelte-yijazm"), Mo(i, "class", "footer svelte-yijazm"), zo(i, "hasError", e[6])
            },
            m(p, m) {
                Li(t, p, m), vo(p, n, m), g && g.m(p, m), vo(p, o, m), vo(p, i, m), fo(i, s), fo(s, a), fo(s, r), fo(s, l), c = !0, d || (u = Eo(s, "click", e[15]), d = !0)
            },
            p(e, n) {
                const s = {};
                1 & n && (s.onClose = e[0]), 536870932 & n && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(s), e[6] ? g ? (g.p(e, n), 64 & n && $i(g, 1)) : (g = td(e), g.c(), $i(g, 1), g.m(o.parentNode, o)) : g && (wi(), bi(g, 1, 1, (() => {
                    g = null
                })), vi()), (!c || 64 & n) && (a.disabled = e[6]), (!c || 64 & n) && zo(i, "hasError", e[6])
            },
            i(e) {
                c || ($i(t.$$.fragment, e), $i(g), c = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), bi(g), c = !1
            },
            d(e) {
                Ei(t, e), e && $o(n), g && g.d(e), e && $o(o), e && $o(i), d = !1, u()
            }
        }
    }

    function Wc(e) {
        let t, n, o, i;
        return t = new cc({
            props: {
                onClose: e[0]
            }
        }), o = new zc({
            props: {
                onClose: e[0],
                onCancel: e[13]
            }
        }), {
            c() {
                Ti(t.$$.fragment), n = To(), Ti(o.$$.fragment)
            },
            m(e, s) {
                Li(t, e, s), vo(e, n, s), Li(o, e, s), i = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.onClose = e[0]), t.$set(i);
                const s = {};
                1 & n && (s.onClose = e[0]), 8 & n && (s.onCancel = e[13]), o.$set(s)
            },
            i(e) {
                i || ($i(t.$$.fragment, e), $i(o.$$.fragment, e), i = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), bi(o.$$.fragment, e), i = !1
            },
            d(e) {
                Ei(t, e), e && $o(n), Ei(o, e)
            }
        }
    }

    function Gc(e) {
        let t, n;
        return t = new cc({
            props: {
                $$slots: {
                    default: [wd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                536870966 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Vc(e) {
        let t, n;
        return t = new cc({
            props: {
                $$slots: {
                    default: [Cd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                536870928 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Zc(e) {
        let t, n;
        return t = new cc({
            props: {
                $$slots: {
                    default: [xd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Kc(e) {
        let t, n;
        return t = new cc({
            props: {
                $$slots: {
                    default: [Td]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Xc(e) {
        let t, n;
        return t = new cc({
            props: {
                $$slots: {
                    default: [Ld]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Qc(e) {
        let t, n;
        return t = new cc({
            props: {
                $$slots: {
                    default: [Ed]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Yc(e) {
        let t, n;
        return t = new cc({
            props: {
                $$slots: {
                    default: [kd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Jc(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("ui_fpt_translate_button")}`, Mo(t, "class", "svelte-yijazm")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function ed(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p;
        return l = new xc({
            props: {
                value: e[2].selectedTargetLanguage,
                variant: "alternate",
                alignRight: !1
            }
        }), l.$on("selection", e[14]), u = new Oc({
            props: {
                className: "btn-primary",
                paddingX: "md",
                dataQa: "dl-button-translate-page",
                $$slots: {
                    default: [Jc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), u.$on("click", e[10]), {
            c() {
                t = yo("div"), n = yo("div"), o = xo(e[4]), i = To(), s = yo("div"), a = To(), r = yo("div"), Ti(l.$$.fragment), c = To(), d = yo("div"), Ti(u.$$.fragment), Mo(n, "class", "website-lang svelte-yijazm"), Mo(s, "class", "translate-to-arrow svelte-yijazm"), Mo(r, "class", "language-switch svelte-yijazm"), Mo(t, "class", "language-selection svelte-yijazm"), Mo(d, "class", "translate-button svelte-yijazm")
            },
            m(e, g) {
                vo(e, t, g), fo(t, n), fo(n, o), fo(t, i), fo(t, s), fo(t, a), fo(t, r), Li(l, r, null), vo(e, c, g), vo(e, d, g), Li(u, d, null), p = !0
            },
            p(e, t) {
                (!p || 16 & t) && Io(o, e[4]);
                const n = {};
                4 & t && (n.value = e[2].selectedTargetLanguage), l.$set(n);
                const i = {};
                536870912 & t && (i.$$scope = {
                    dirty: t,
                    ctx: e
                }), u.$set(i)
            },
            i(e) {
                p || ($i(l.$$.fragment, e), $i(u.$$.fragment, e), p = !0)
            },
            o(e) {
                bi(l.$$.fragment, e), bi(u.$$.fragment, e), p = !1
            },
            d(e) {
                e && $o(t), Ei(l), e && $o(c), e && $o(d), Ei(u)
            }
        }
    }

    function td(e) {
        let t, n, o;
        return n = new Rl({
            props: {
                error: e[1].error
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "error-container svelte-yijazm")
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p(e, t) {
                const o = {};
                2 & t && (o.error = e[1].error), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function nd(e) {
        let t, n = mr(chrome.i18n.getMessage("ui_notice_no_translate_language", e[4]), ["strong"]),
            o = [];
        for (let t = 0; t < n.length; t += 1) o[t] = ad(Fc(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1) o[e].c();
                t = Lo()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1) o[t].m(e, n);
                vo(e, t, n)
            },
            p(e, i) {
                if (16 & i) {
                    let s;
                    for (n = mr(chrome.i18n.getMessage("ui_notice_no_translate_language", e[4]), ["strong"]), s = 0; s < n.length; s += 1) {
                        const a = Fc(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = ad(a), o[s].c(), o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1) o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                bo(o, e), e && $o(t)
            }
        }
    }

    function od(e) {
        let t;

        function n(e, t) {
            return e[5] ? ld : rd
        }
        let o = n(e),
            i = o(e);
        return {
            c() {
                i.c(), t = Lo()
            },
            m(e, n) {
                i.m(e, n), vo(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1), i = o(e), i && (i.c(), i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e), e && $o(t)
            }
        }
    }

    function id(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p(e, o) {
                16 & o && n !== (n = e[18].text + "") && Io(t, n)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function sd(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = yo("strong"), n = xo(o), Mo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, t) {
                16 & t && o !== (o = e[18].text + "") && Io(n, o)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function ad(e) {
        let t;

        function n(e, t) {
            return "strong" === e[18].block ? sd : id
        }
        let o = n(e),
            i = o(e);
        return {
            c() {
                i.c(), t = Lo()
            },
            m(e, n) {
                i.m(e, n), vo(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1), i = o(e), i && (i.c(), i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e), e && $o(t)
            }
        }
    }

    function rd(e) {
        let t, n = mr(chrome.i18n.getMessage("ui_notice_no_translate_website", e[1].hostname), ["strong"]),
            o = [];
        for (let t = 0; t < n.length; t += 1) o[t] = ud(Bc(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1) o[e].c();
                t = Lo()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1) o[t].m(e, n);
                vo(e, t, n)
            },
            p(e, i) {
                if (2 & i) {
                    let s;
                    for (n = mr(chrome.i18n.getMessage("ui_notice_no_translate_website", e[1].hostname), ["strong"]), s = 0; s < n.length; s += 1) {
                        const a = Bc(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = ud(a), o[s].c(), o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1) o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                bo(o, e), e && $o(t)
            }
        }
    }

    function ld(e) {
        let t, n = mr(chrome.i18n.getMessage("ui_notice_no_translate_website_and_language", [e[1].hostname, e[4]]), ["strong"]),
            o = [];
        for (let t = 0; t < n.length; t += 1) o[t] = md(Uc(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1) o[e].c();
                t = Lo()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1) o[t].m(e, n);
                vo(e, t, n)
            },
            p(e, i) {
                if (18 & i) {
                    let s;
                    for (n = mr(chrome.i18n.getMessage("ui_notice_no_translate_website_and_language", [e[1].hostname, e[4]]), ["strong"]), s = 0; s < n.length; s += 1) {
                        const a = Uc(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = md(a), o[s].c(), o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1) o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                bo(o, e), e && $o(t)
            }
        }
    }

    function cd(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p(e, o) {
                2 & o && n !== (n = e[18].text + "") && Io(t, n)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function dd(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = yo("strong"), n = xo(o), Mo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, t) {
                2 & t && o !== (o = e[18].text + "") && Io(n, o)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function ud(e) {
        let t;

        function n(e, t) {
            return "strong" === e[18].block ? dd : cd
        }
        let o = n(e),
            i = o(e);
        return {
            c() {
                i.c(), t = Lo()
            },
            m(e, n) {
                i.m(e, n), vo(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1), i = o(e), i && (i.c(), i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e), e && $o(t)
            }
        }
    }

    function pd(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p(e, o) {
                18 & o && n !== (n = e[18].text + "") && Io(t, n)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function gd(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = yo("strong"), n = xo(o), Mo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, t) {
                18 & t && o !== (o = e[18].text + "") && Io(n, o)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function md(e) {
        let t;

        function n(e, t) {
            return "strong" === e[18].block ? gd : pd
        }
        let o = n(e),
            i = o(e);
        return {
            c() {
                i.c(), t = Lo()
            },
            m(e, n) {
                i.m(e, n), vo(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1), i = o(e), i && (i.c(), i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e), e && $o(t)
            }
        }
    }

    function hd(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function fd(e) {
        let t, n, o, i, s = e[18].text + "";
        return {
            c() {
                t = yo("span"), n = xo(s), Mo(t, "class", "link svelte-yijazm")
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), o || (i = Eo(t, "click", e[9]), o = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), o = !1, i()
            }
        }
    }

    function _d(e) {
        let t;
        let n = function (e, t) {
                return "settingsLink" === e[18].block ? fd : hd
            }(e),
            o = n(e);
        return {
            c() {
                o.c(), t = Lo()
            },
            m(e, n) {
                o.m(e, n), vo(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e), e && $o(t)
            }
        }
    }

    function wd(e) {
        let t, n, o, i, s;

        function a(e, t) {
            return 6 & t && (o = null), null == o && (o = !!e[2].blacklistDomains.includes(e[1].hostname)), o ? od : e[5] ? nd : void 0
        }
        let r = a(e, -1),
            l = r && r(e),
            c = mr(chrome.i18n.getMessage("ui_notice_no_translate_change_option"), ["settingsLink"]),
            d = [];
        for (let t = 0; t < c.length; t += 1) d[t] = _d(Hc(e, c, t));
        return {
            c() {
                t = yo("div"), n = yo("p"), l && l.c(), i = To(), s = yo("p");
                for (let e = 0; e < d.length; e += 1) d[e].c();
                Mo(n, "class", "svelte-yijazm"), Mo(s, "class", "svelte-yijazm")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n), l && l.m(n, null), fo(t, i), fo(t, s);
                for (let e = 0; e < d.length; e += 1) d[e].m(s, null)
            },
            p(e, t) {
                if (r === (r = a(e, t)) && l ? l.p(e, t) : (l && l.d(1), l = r && r(e), l && (l.c(), l.m(n, null))), 512 & t) {
                    let n;
                    for (c = mr(chrome.i18n.getMessage("ui_notice_no_translate_change_option"), ["settingsLink"]), n = 0; n < c.length; n += 1) {
                        const o = Hc(e, c, n);
                        d[n] ? d[n].p(o, t) : (d[n] = _d(o), d[n].c(), d[n].m(s, null))
                    }
                    for (; n < d.length; n += 1) d[n].d(1);
                    d.length = c.length
                }
            },
            d(e) {
                e && $o(t), l && l.d(), bo(d, e)
            }
        }
    }

    function vd(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p(e, o) {
                16 & o && n !== (n = e[18].text + "") && Io(t, n)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function $d(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = yo("strong"), n = xo(o), Mo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, t) {
                16 & t && o !== (o = e[18].text + "") && Io(n, o)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function bd(e) {
        let t;

        function n(e, t) {
            return "strong" === e[18].block ? $d : vd
        }
        let o = n(e),
            i = o(e);
        return {
            c() {
                i.c(), t = Lo()
            },
            m(e, n) {
                i.m(e, n), vo(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1), i = o(e), i && (i.c(), i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e), e && $o(t)
            }
        }
    }

    function yd(e) {
        let t, n = chrome.i18n.getMessage("full_page_translation_show_original") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Cd(e) {
        let t, n, o, i, s, a, r = mr(chrome.i18n.getMessage("ui_translated_automatically", e[4]), ["strong"]),
            l = [];
        for (let t = 0; t < r.length; t += 1) l[t] = bd(qc(e, r, t));
        return s = new Oc({
            props: {
                className: "button-reload",
                $$slots: {
                    default: [yd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), s.$on("click", e[11]), {
            c() {
                t = yo("div"), n = yo("p");
                for (let e = 0; e < l.length; e += 1) l[e].c();
                o = To(), i = yo("p"), Ti(s.$$.fragment), Mo(n, "class", "mb-none svelte-yijazm"), Mo(i, "class", "svelte-yijazm")
            },
            m(e, r) {
                vo(e, t, r), fo(t, n);
                for (let e = 0; e < l.length; e += 1) l[e].m(n, null);
                fo(t, o), fo(t, i), Li(s, i, null), a = !0
            },
            p(e, t) {
                if (16 & t) {
                    let o;
                    for (r = mr(chrome.i18n.getMessage("ui_translated_automatically", e[4]), ["strong"]), o = 0; o < r.length; o += 1) {
                        const i = qc(e, r, o);
                        l[o] ? l[o].p(i, t) : (l[o] = bd(i), l[o].c(), l[o].m(n, null))
                    }
                    for (; o < l.length; o += 1) l[o].d(1);
                    l.length = r.length
                }
                const o = {};
                536870912 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), s.$set(o)
            },
            i(e) {
                a || ($i(s.$$.fragment, e), a = !0)
            },
            o(e) {
                bi(s.$$.fragment, e), a = !1
            },
            d(e) {
                e && $o(t), bo(l, e), Ei(s)
            }
        }
    }

    function xd(e) {
        let t;
        return {
            c() {
                t = yo("p"), t.textContent = `${chrome.i18n.getMessage("full_page_translation_ongoing_translation")}`, Mo(t, "class", "translation-in-progress svelte-yijazm")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Td(e) {
        let t;
        return {
            c() {
                t = yo("p"), t.textContent = `${chrome.i18n.getMessage("full_page_translation_auto_detect_lang")}`, Mo(t, "class", "translation-in-progress svelte-yijazm")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Ld(e) {
        let t, n;
        return t = new Mc({
            props: {
                message: chrome.i18n.getMessage("full_page_translation_info_google_translate")
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p: Gn,
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Ed(e) {
        let t, n;
        return t = new Mc({
            props: {
                message: chrome.i18n.getMessage("full_page_translation_no_website_data")
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p: Gn,
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function kd(e) {
        let t, n, o;
        return n = new Ec({}), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "translation-in-progress svelte-yijazm")
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p: Gn,
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function Sd(e) {
        let t, n, o, i, r, c;
        const d = [Yc, Qc, Xc, Kc, Zc, Vc, Gc, Wc, jc],
            u = [];

        function p(e, t) {
            return 2 & t && (n = null), 38 & t && (o = null), null == e[1] ? 0 : (null == n && (n = !(0 !== Object.keys(e[1]).length)), n ? 1 : e[1].isGoogleTranslatedActive ? 2 : e[1].translationState === l ? 3 : e[1].translationState === s ? 4 : e[1].translationState === a ? 5 : (null == o && (o = !(!e[2].blacklistDomains.includes(e[1].hostname) && !e[5])), o ? 6 : e[3] ? 7 : e[1].websiteLanguage ? 8 : -1))
        }
        return ~(i = p(e, -1)) && (r = u[i] = d[i](e)), {
            c() {
                t = yo("div"), r && r.c(), Mo(t, "class", "full-page-translation svelte-yijazm")
            },
            m(e, n) {
                vo(e, t, n), ~i && u[i].m(t, null), c = !0
            },
            p(e, [n]) {
                let o = i;
                i = p(e, n), i === o ? ~i && u[i].p(e, n) : (r && (wi(), bi(u[o], 1, 1, (() => {
                    u[o] = null
                })), vi()), ~i ? (r = u[i], r ? r.p(e, n) : (r = u[i] = d[i](e), r.c()), $i(r, 1), r.m(t, null)) : r = null)
            },
            i(e) {
                c || ($i(r), c = !0)
            },
            o(e) {
                bi(r), c = !1
            },
            d(e) {
                e && $o(t), ~i && u[i].d()
            }
        }
    }

    function Md(e, t, n) {
        let i, s, a, l;
        const c = Jo("deepl_settings");
        eo(e, c, (e => n(2, l = e)));
        const d = Jo("deepl_website_settings");
        eo(e, d, (e => n(1, a = e)));
        let u = w,
            {
                onClose: p
            } = t;
        let g, h, f = !1;
        return e.$$set = e => {
            "onClose" in e && n(0, p = e.onClose)
        }, e.$$.update = () => {
            2 & e.$$.dirty && n(6, i = a && a.error), 6 & e.$$.dirty && n(5, s = Ot(a.websiteLanguage, l.languagesForTranslation, o)), 6 & e.$$.dirty && a && l && Et(l.selectedTargetLanguage, a.websiteLanguage), 2 & e.$$.dirty && a && (a.isSupportedLanguage ? n(4, g = chrome.i18n.getMessage(`supported_languages_${a.websiteLanguage}`)) : n(4, g = chrome.i18n.getMessage("supported_languages_EN"))), 4098 & e.$$.dirty && a && a.hostname && a.hostname !== h && (n(12, h = a.hostname), Mn({
                action: "dlTrackExtensionOpenedEvent",
                payload: {
                    domainName: h,
                    extensionContext: u
                }
            }))
        }, [p, a, l, f, g, s, i, c, d, function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: Wl.settings_page
                }
            })
        }, function () {
            0 == l.isTargetLanguageConfirmed && c.set({
                isTargetLanguageConfirmed: !0
            }), Za(a.websiteLanguage, m)
        }, () => {
            d.update({
                translationState: r
            })
        }, h, () => {
            n(3, f = !1)
        }, e => c.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0,
            regionalVariant: e.detail.selectedOption.regionalVariant
        }), () => {
            i || n(3, f = !f)
        }]
    }
    class Id extends Si {
        constructor(e) {
            super(), ki(this, e, Md, Sd, Yn, {
                onClose: 0
            })
        }
    }

    function Dd(e) {
        let t, n, o;
        return n = new Id({
            props: {
                onClose: e[0]
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "app-popup svelte-1u84xsz"), Mo(t, "style", `z-index: ${e[3].z_index}`)
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p(e, t) {
                const o = {};
                1 & t && (o.onClose = e[0]), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function Od(e) {
        let t, n, o = !0 === e[1].isLoggedIn && !0 === e[1].isProUser && e[2] && e[2].isValidUrlForPopup && Dd(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                !0 === e[1].isLoggedIn && !0 === e[1].isProUser && e[2] && e[2].isValidUrlForPopup ? o ? (o.p(e, n), 6 & n && $i(o, 1)) : (o = Dd(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function Nd(e, t, n) {
        let o, i;
        eo(e, hs, (e => n(1, o = e))), eo(e, Ui, (e => n(2, i = e))), Yo("deepl_settings", hs), Yo("deepl_website_settings", Ui);
        let {
            onClose: s
        } = t;
        const {
            deepl_inline_ui: a
        } = M;
        return e.$$set = e => {
            "onClose" in e && n(0, s = e.onClose)
        }, [s, o, i, a]
    }
    class Ad extends Si {
        constructor(e) {
            super(), ki(this, e, Nd, Od, Yn, {
                onClose: 0
            })
        }
    }
    class Rd extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new Ad({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function Pd(e) {
        let t, n;
        const o = e[8].default,
            i = to(o, e, e[7], null);
        return {
            c() {
                t = yo("div"), i && i.c()
            },
            m(e, o) {
                vo(e, t, o), i && i.m(t, null), n = !0
            },
            p(e, t) {
                i && i.p && (!n || 128 & t) && io(i, o, e, e[7], n ? oo(o, e[7], t, null) : so(e[7]), null)
            },
            i(e) {
                n || ($i(i, e), n = !0)
            },
            o(e) {
                bi(i, e), n = !1
            },
            d(e) {
                e && $o(t), i && i.d(e)
            }
        }
    }

    function zd(e) {
        let t, n, o;
        const i = e[8].default,
            s = to(i, e, e[7], null);
        return {
            c() {
                t = yo("div"), s && s.c(), Mo(t, "data-tooltip", e[0]), Mo(t, "style", n = `z-index: ${e[2]}; ${e[5]}`), Mo(t, "class", "svelte-dzoyw0"), zo(t, "multiline", e[1]), zo(t, "isFlexItem", e[4])
            },
            m(e, n) {
                vo(e, t, n), s && s.m(t, null), o = !0
            },
            p(e, a) {
                s && s.p && (!o || 128 & a) && io(s, i, e, e[7], o ? oo(i, e[7], a, null) : so(e[7]), null), (!o || 1 & a) && Mo(t, "data-tooltip", e[0]), (!o || 36 & a && n !== (n = `z-index: ${e[2]}; ${e[5]}`)) && Mo(t, "style", n), (!o || 2 & a) && zo(t, "multiline", e[1]), (!o || 16 & a) && zo(t, "isFlexItem", e[4])
            },
            i(e) {
                o || ($i(s, e), o = !0)
            },
            o(e) {
                bi(s, e), o = !1
            },
            d(e) {
                e && $o(t), s && s.d(e)
            }
        }
    }

    function Hd(e) {
        let t, n, o, i;
        const s = [zd, Pd],
            a = [];

        function r(e, t) {
            return e[3] ? 0 : 1
        }
        return t = r(e), n = a[t] = s[t](e), {
            c() {
                n.c(), o = Lo()
            },
            m(e, n) {
                a[t].m(e, n), vo(e, o, n), i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e), t === l ? a[t].p(e, i) : (wi(), bi(a[l], 1, 1, (() => {
                    a[l] = null
                })), vi(), n = a[t], n ? n.p(e, i) : (n = a[t] = s[t](e), n.c()), $i(n, 1), n.m(o.parentNode, o))
            },
            i(e) {
                i || ($i(n), i = !0)
            },
            o(e) {
                bi(n), i = !1
            },
            d(e) {
                a[t].d(e), e && $o(o)
            }
        }
    }

    function Fd(e, t, n) {
        let o, {
            $$slots: i = {},
            $$scope: s
        } = t;
        const {
            deepl_inline_ui: a
        } = M;
        let {
            tooltip: r = !1
        } = t, {
            multiline: l = !1
        } = t, {
            zIndex: c = a.z_index
        } = t, {
            isEnabled: d = !0
        } = t, {
            isFlexItem: u = !1
        } = t, {
            width: p
        } = t;
        return e.$$set = e => {
            "tooltip" in e && n(0, r = e.tooltip), "multiline" in e && n(1, l = e.multiline), "zIndex" in e && n(2, c = e.zIndex), "isEnabled" in e && n(3, d = e.isEnabled), "isFlexItem" in e && n(4, u = e.isFlexItem), "width" in e && n(6, p = e.width), "$$scope" in e && n(7, s = e.$$scope)
        }, e.$$.update = () => {
            64 & e.$$.dirty && n(5, o = p ? `width: ${p}px` : "")
        }, [r, l, c, d, u, o, p, s, i]
    }
    window.customElements.define("deepl-page-load-popup", Rd);
    class Bd extends Si {
        constructor(e) {
            super(), ki(this, e, Fd, Hd, Yn, {
                tooltip: 0,
                multiline: 1,
                zIndex: 2,
                isEnabled: 3,
                isFlexItem: 4,
                width: 6
            })
        }
    }

    function Ud(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w;
        return {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), i = yo("div"), s = To(), a = yo("div"), r = yo("div"), r.textContent = `${chrome.i18n.getMessage("inline_translation_highlighter_tooltip_headline")}`, l = To(), c = yo("div"), c.textContent = `${chrome.i18n.getMessage("inline_translation_highlighter_tooltip_text")}`, d = To(), u = yo("button"), Mo(i, "class", "logo svelte-143q1m8"), Mo(r, "class", "headline svelte-143q1m8"), Mo(c, "class", "text svelte-143q1m8"), Mo(a, "class", "text-wrapper svelte-143q1m8"), Mo(o, "class", "content svelte-143q1m8"), Mo(u, "class", "close-icon svelte-143q1m8"), Mo(n, "class", p = ao(`body body__${e[1]}`) + " svelte-143q1m8"), Mo(t, "class", g = ao(`container container__${e[1]}`) + " svelte-143q1m8")
            },
            m(p, g) {
                vo(p, t, g), fo(t, n), fo(n, o), fo(o, i), fo(o, s), fo(o, a), fo(a, r), fo(a, l), fo(a, c), fo(n, d), fo(n, u), f = !0, _ || (w = Eo(u, "click", e[3]), _ = !0)
            },
            p(e, [o]) {
                (!f || 2 & o && p !== (p = ao(`body body__${e[1]}`) + " svelte-143q1m8")) && Mo(n, "class", p), (!f || 2 & o && g !== (g = ao(`container container__${e[1]}`) + " svelte-143q1m8")) && Mo(t, "class", g)
            },
            i(e) {
                f || (li((() => {
                    h && h.end(1), m = Ci(t, Ur, {
                        x: 100,
                        duration: 1e3
                    }), m.start()
                })), f = !0)
            },
            o(e) {
                m && m.invalidate(), h = xi(t, Ur, {
                    x: 100,
                    duration: 1e3
                }), f = !1
            },
            d(e) {
                e && $o(t), e && h && h.end(), _ = !1, w()
            }
        }
    }

    function qd(t, n, o) {
        let {
            closeInlineHighlighter: i = (() => {})
        } = n, {
            el: s
        } = n, a = "topLeft";
        Ko((async () => {
            try {
                Mn({
                    action: "dltrackOpenInlineHighlighter",
                    payload: {
                        domainName: e.websiteData.hostname
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }));
        return t.$$set = e => {
            "closeInlineHighlighter" in e && o(0, i = e.closeInlineHighlighter), "el" in e && o(2, s = e.el)
        }, t.$$.update = () => {
            if (4 & t.$$.dirty && s) {
                const e = s.getBoundingClientRect();
                let t = e.x > 387,
                    n = window.innerWidth - e.right > 387,
                    i = window.innerHeight - e.bottom > 150,
                    r = e.y > 150;
                r && t ? o(1, a = "topLeft") : r && n ? o(1, a = "topRight") : i && t ? o(1, a = "bottomLeft") : i && n && o(1, a = "bottomRight")
            }
        }, [i, a, s, () => i(Me)]
    }
    class jd extends Si {
        constructor(e) {
            super(), ki(this, e, qd, Ud, Yn, {
                closeInlineHighlighter: 0,
                el: 2
            })
        }
    }

    function Wd(e) {
        let t, n, o, i, s, a, r, l, c, d = e[3] && !e[1].isInlineHighlighterShown && Gd(e);
        return o = new Bd({
            props: {
                tooltip: e[2],
                $$slots: {
                    default: [Vd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), s = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("inline_translation_tooltip_turnoff"),
                $$slots: {
                    default: [Zd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                d && d.c(), t = To(), n = yo("div"), Ti(o.$$.fragment), i = To(), Ti(s.$$.fragment), Mo(n, "class", "icon-container svelte-l3ooav"), Mo(n, "data-qa", "deepl-inline-translate-icon-container")
            },
            m(a, u) {
                d && d.m(a, u), vo(a, t, u), vo(a, n, u), Li(o, n, null), fo(n, i), Li(s, n, null), e[24](n), r = !0, l || (c = [Eo(n, "blur", e[15]), Eo(n, "mouseenter", e[7]), Eo(n, "mouseleave", e[8])], l = !0)
            },
            p(e, n) {
                e[3] && !e[1].isInlineHighlighterShown ? d ? (d.p(e, n), 10 & n && $i(d, 1)) : (d = Gd(e), d.c(), $i(d, 1), d.m(t.parentNode, t)) : d && (wi(), bi(d, 1, 1, (() => {
                    d = null
                })), vi());
                const i = {};
                4 & n && (i.tooltip = e[2]), 67108864 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), o.$set(i);
                const a = {};
                67108880 & n && (a.$$scope = {
                    dirty: n,
                    ctx: e
                }), s.$set(a)
            },
            i(e) {
                r || ($i(d), $i(o.$$.fragment, e), $i(s.$$.fragment, e), a || li((() => {
                    a = Ci(n, Ur, {
                        x: -5,
                        duration: 300
                    }), a.start()
                })), r = !0)
            },
            o(e) {
                bi(d), bi(o.$$.fragment, e), bi(s.$$.fragment, e), r = !1
            },
            d(i) {
                d && d.d(i), i && $o(t), i && $o(n), Ei(o), Ei(s), e[24](null), l = !1, Xn(c)
            }
        }
    }

    function Gd(e) {
        let t, n;
        return t = new jd({
            props: {
                closeInlineHighlighter: e[11],
                el: e[3]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                8 & n && (o.el = e[3]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Vd(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "dl-logo svelte-l3ooav"), Mo(t, "data-qa", "deepl-inline-translate-menu-icon")
            },
            m(i, s) {
                vo(i, t, s), n || (o = [Eo(t, "click", So(ko(e[6]))), Eo(t, "focus", e[19]), Eo(t, "mouseup", So(ko(e[20]))), Eo(t, "mousedown", So(ko(e[21]))), Eo(t, "mouseenter", e[22])], n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, Xn(o)
            }
        }
    }

    function Zd(e) {
        let t, n, o, i, s;
        return {
            c() {
                t = yo("div"), Mo(t, "data-qa", "deepl-inline-translate-turnoff-icon"), Mo(t, "class", n = ao(`dl-turnoff-inline-icon ${e[4]?"":"hidden"} `) + " svelte-l3ooav")
            },
            m(n, o) {
                vo(n, t, o), i || (s = [Eo(t, "click", So(ko(e[9]))), Eo(t, "focus", e[16]), Eo(t, "mousedown", So(ko(e[17]))), Eo(t, "mouseup", So(ko(e[18]))), Eo(t, "mouseenter", e[23])], i = !0)
            },
            p(e, o) {
                16 & o && n !== (n = ao(`dl-turnoff-inline-icon ${e[4]?"":"hidden"} `) + " svelte-l3ooav") && Mo(t, "class", n)
            },
            i(e) {
                o || li((() => {
                    o = Ci(t, Ur, {
                        x: -5,
                        duration: 300
                    }), o.start()
                }))
            },
            o: Gn,
            d(e) {
                e && $o(t), i = !1, Xn(s)
            }
        }
    }

    function Kd(e) {
        let t, n, o = !e[5] && Wd(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                e[5] ? o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi()) : o ? (o.p(e, n), 32 & n && $i(o, 1)) : (o = Wd(e), o.c(), $i(o, 1), o.m(t.parentNode, t))
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function Xd(e, t, n) {
        let o, i, s, a = Gn,
            r = () => (a(), a = Jn(l, (e => n(14, s = e))), l);
        eo(e, hs, (e => n(1, i = e))), e.$$.on_destroy.push((() => a())), Yo("deepl_settings", hs);
        let {
            websiteSettings: l
        } = t;
        r();
        let c, d, {
                platformBehaviour: u = Oe.default
            } = t,
            p = "",
            g = !1;

        function m() {
            Js(), f(), Mn({
                action: "dlTriggerTranslateInline"
            }), p || In(I), w(Ie)
        }
        async function h(e, t, n) {
            if ("dlTriggerTranslationShortcut" === e.action) m(), Mn({
                action: "dlTrackUseOfShortcut",
                payload: {
                    shortcutType: le,
                    location: R,
                    nicheIntegration: u
                }
            }), n()
        }

        function f() {
            s && s.isInlineTranslateSettingsTooltipInjected || n(4, g = !1)
        }

        function _(e) {
            Mn({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host,
                    nicheIntegration: u
                }
            })
        }

        function w(e) {
            if (!i.isInlineHighlighterShown) {
                hs.set({
                    isInlineHighlighterShown: !0
                });
                try {
                    Mn({
                        action: "dltrackCloseInlineHighlighter",
                        payload: {
                            trigger: e
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }
        }
        Mn({
            action: "dlCheckCommandShortcuts"
        }).then((e => n(13, p = e ? e.filter((e => e.name == le))[0].shortcut : ""))), chrome.runtime.onMessage.addListener(h), Xo((() => {
            chrome.runtime.onMessage.removeListener(h)
        }));
        return e.$$set = e => {
            "websiteSettings" in e && r(n(0, l = e.websiteSettings)), "platformBehaviour" in e && n(12, u = e.platformBehaviour)
        }, e.$$.update = () => {
            if (2 & e.$$.dirty && n(5, o = i.blacklistDomainsForReading && i.blacklistDomainsForReading.includes(window.location.hostname) || !i.enableInlineTranslation), 24576 & e.$$.dirty) {
                let e;
                e = chrome.i18n.getMessage("context_menus_translate_section"), n(2, c = p ? `${e} (${p})` : e), !1 === s.isInlineTranslateSettingsTooltipInjected && n(4, g = !1)
            }
        }, [l, i, c, d, g, o, m, function () {
            n(4, g = !0)
        }, f, function () {
            s && !s.isInlineTranslateSettingsTooltipInjected && (n(4, g = !0), Ys(u), Mn({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: fe,
                    uiLocation: R,
                    nicheIntegration: u
                }
            })), w(Ie)
        }, _, w, u, p, s, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, () => _(R), () => _(P), function (e) {
            ni[e ? "unshift" : "push"]((() => {
                d = e, n(3, d)
            }))
        }]
    }
    class Qd extends Si {
        constructor(e) {
            super(), ki(this, e, Xd, Kd, Yn, {
                websiteSettings: 0,
                platformBehaviour: 12
            })
        }
    }
    class Yd extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.container = document.createElement("div"), this.mainComponent, this.cachedMouseEvent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.addChangeEvents = this.addChangeEvents.bind(this), this.removeChangeEvents = this.removeChangeEvents.bind(this), this.repositionContainer = this.repositionContainer.bind(this), this.cachedReposition = this.cachedReposition.bind(this), this.shadowRoot.addEventListener("mouseup", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.shadowRoot.addEventListener("mousedown", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            }))
        }
        createDOM(e, t) {
            this.shadowContainer && this.shadowContainer.childElementCount > 0 && this.cleanupDOM(), this.shadowContainer.appendChild(this.container), this.repositionContainer(t), this.mainComponent = new Qd({
                target: this.container,
                props: {
                    websiteSettings: e
                }
            }), this.addChangeEvents(), this.cachedMouseEvent = t
        }
        repositionContainer(e) {
            if (window.getSelection() && !window.getSelection().toString()) return void this.cleanupDOM();
            const {
                deepl_inline_ui: t
            } = M, n = Rn();
            let o = `position: absolute; top: 0px; left: 0px; width: 100%; z-index: ${t.z_index}`,
                i = `position: absolute; z-index: ${t.z_index};`;
            this.shadowContainer.style.cssText = o, this.container.style.cssText = i;
            const s = function (e, t) {
                let n = {
                    containerStyleTop: t.y > 0 ? t.y : 0,
                    containerStyleLeft: t.x > 0 ? t.x : 0
                };
                if (!e || !t) return n;
                const {
                    TRIGGER_EXPENDED_WIDTH: o,
                    TRIGGER_WIDTH: i,
                    TRIGGER_HEIGHT: s
                } = _s, a = e ? .detail;
                if (1 === a) {
                    if (e.isOutsideOfView) return n;
                    let a = parseInt(window.getComputedStyle(window.getSelection().anchorNode.parentElement, null).getPropertyValue("font-size"));
                    const r = document.body.parentNode.getBoundingClientRect();
                    let l = e.pageY + .5 * a,
                        c = t.selectedTop + t.height - a - r.y;
                    if (t.height < 1.5 * a) {
                        n.containerStyleLeft = e.clientX;
                        const s = t.x + t.selectedWidth;
                        e.clientX > s ? n.containerStyleLeft = t.selectedRight > o ? s : s - o : e.clientX - t.x < i && e.clientX < t.x && (n.containerStyleLeft = t.selectedLeft > o ? t.x : t.x + o)
                    } else l > c ? n.containerStyleLeft = e.clientX : l < c && (n.containerStyleTop = t.y - t.height - s - 5, n.containerStyleLeft = e.clientX)
                } else if (2 === a) {
                    n.containerStyleLeft = t.x + t.selectedWidth - i;
                    let e = parseInt(window.getComputedStyle(window.getSelection().anchorNode.parentElement, null).getPropertyValue("font-size"));
                    parseInt(t.height / 2) > e && (n.containerStyleTop = t.y - t.height + e + 2)
                }
                const r = window.innerWidth || document.documentElement.innerWidth,
                    l = window.scrollHeight || document.documentElement.scrollHeight;
                return n.containerStyleLeft + o > r && (n.containerStyleLeft = n.containerStyleLeft - o), (n.containerStyleTop + s > l || n.containerStyleTop < 0) && (n.containerStyleTop = t.y - s), n
            }(e, n);
            this.container.style.top = `${parseInt(s.containerStyleTop)}px`, this.container.style.left = `${parseInt(s.containerStyleLeft)}px`
        }
        cachedReposition() {
            return this.repositionContainer(this.cachedMouseEvent)
        }
        addChangeEvents() {
            window.addEventListener("scroll", this.cachedReposition), window.addEventListener("resize", this.cachedReposition)
        }
        removeChangeEvents() {
            window.removeEventListener("scroll", this.cachedReposition), window.removeEventListener("resize", this.cachedReposition)
        }
        cleanupDOM() {
            this.container.remove(), this.shadowContainer.remove(), this.shadowContainer = document.createElement("div"), this.container = document.createElement("div"), this.shadow.appendChild(this.shadowContainer), this.mainComponent && this.mainComponent.$destroy(), this.removeChangeEvents()
        }
    }

    function Jd(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), Mo(t, "type", "button"), Mo(t, "class", "dl-menu-icon dl-menu-icon--user svelte-feu83h")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "mousedown", ko(e[13])), n = !0)
            },
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function eu(e) {
        let t, n, o, i, s, a, r, l, c, d = Rt();

        function u(e, t) {
            return !0 === e[1].isLoggedIn ? nu : tu
        }
        let p = u(e),
            g = p && p(e),
            m = d && function (e) {
                let t, n, o;
                return {
                    c() {
                        t = yo("div"), t.textContent = "DEV_TOOLS", Mo(t, "class", "dl-menu-item svelte-feu83h")
                    },
                    m(i, s) {
                        vo(i, t, s), n || (o = Eo(t, "click", e[8]), n = !0)
                    },
                    p: Gn,
                    d(e) {
                        e && $o(t), n = !1, o()
                    }
                }
            }(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), n.innerHTML = '<span class="dl-menu-link dl-feedback-link svelte-feu83h"><div>Share feedback</div> \n          \n          \n          <div class="dl-feedback-icon svelte-feu83h"></div></span>', o = To(), i = yo("div"), i.textContent = `${chrome.i18n.getMessage("menu_settings_label")}`, s = To(), g && g.c(), a = To(), m && m.c(), Mo(n, "class", "dl-menu-item svelte-feu83h"), Mo(i, "class", "dl-menu-item svelte-feu83h"), Mo(t, "class", "dl-menu-list svelte-feu83h")
            },
            m(r, d) {
                vo(r, t, d), fo(t, n), fo(t, o), fo(t, i), fo(t, s), g && g.m(t, null), fo(t, a), m && m.m(t, null), l || (c = [Eo(n, "click", e[6]), Eo(i, "click", e[9])], l = !0)
            },
            p(e, n) {
                p === (p = u(e)) && g ? g.p(e, n) : (g && g.d(1), g = p && p(e), g && (g.c(), g.m(t, a))), d && m.p(e, n)
            },
            i(e) {
                r || li((() => {
                    r = Ci(t, Ur, {
                        y: -5,
                        duration: 500
                    }), r.start()
                }))
            },
            o: Gn,
            d(e) {
                e && $o(t), g && g.d(), m && m.d(), l = !1, Xn(c)
            }
        }
    }

    function tu(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = yo("div"), t.innerHTML = '<div class="divider svelte-feu83h"></div>', n = To(), o = yo("div"), i = yo("span"), i.textContent = `${chrome.i18n.getMessage("menu_login_label")}`, s = To(), a = yo("div"), r = yo("span"), r.textContent = `${chrome.i18n.getMessage("menu_trial_label")}`, Mo(t, "class", "dl-menu-item dl-menu-item--divider svelte-feu83h"), Mo(o, "class", "dl-menu-item svelte-feu83h"), Mo(r, "class", "dl-menu-link link svelte-feu83h"), Mo(a, "class", "dl-menu-item svelte-feu83h")
            },
            m(d, u) {
                vo(d, t, u), vo(d, n, u), vo(d, o, u), fo(o, i), vo(d, s, u), vo(d, a, u), fo(a, r), l || (c = [Eo(o, "click", e[4]), Eo(a, "click", e[5])], l = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), e && $o(n), e && $o(o), e && $o(s), e && $o(a), l = !1, Xn(c)
            }
        }
    }

    function nu(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = yo("div"), t.innerHTML = '<div class="divider svelte-feu83h"></div>', n = To(), o = yo("div"), i = yo("span"), i.textContent = `${chrome.i18n.getMessage("menu_logout_label")}`, Mo(t, "class", "dl-menu-item dl-menu-item--divider svelte-feu83h"), Mo(o, "class", "dl-menu-item svelte-feu83h")
            },
            m(r, l) {
                vo(r, t, l), vo(r, n, l), vo(r, o, l), fo(o, i), s || (a = Eo(o, "click", e[3]), s = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), e && $o(n), e && $o(o), s = !1, a()
            }
        }
    }

    function ou(e) {
        let t, n, o, i, s, a, r, l = !0 === e[1].isLoggedIn && Jd(e),
            c = e[0] && eu(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), l && l.c(), o = To(), i = yo("button"), s = To(), c && c.c(), Mo(i, "type", "button"), Mo(i, "class", "dl-menu-icon dl-menu-icon--hamburger svelte-feu83h"), zo(i, "isOpen", e[0]), Mo(n, "class", "dl-menu-icon-wrapper svelte-feu83h"), Mo(t, "class", "dl-container-menu svelte-feu83h")
            },
            m(d, u) {
                vo(d, t, u), fo(t, n), l && l.m(n, null), fo(n, o), fo(n, i), fo(t, s), c && c.m(t, null), a || (r = [Eo(i, "mousedown", ko(e[12])), Eo(n, "click", e[14]), Eo(n, "mousedown", So(ko(e[11]))), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[7]), Eo(t, "mousedown", So(ko(e[10])))], a = !0)
            },
            p(e, [s]) {
                !0 === e[1].isLoggedIn ? l || (l = Jd(e), l.c(), l.m(n, o)) : l && (l.d(1), l = null), 1 & s && zo(i, "isOpen", e[0]), e[0] ? c ? (c.p(e, s), 1 & s && $i(c, 1)) : (c = eu(e), c.c(), $i(c, 1), c.m(t, null)) : c && (c.d(1), c = null)
            },
            i(e) {
                $i(c)
            },
            o: Gn,
            d(e) {
                e && $o(t), l && l.d(), c && c.d(), a = !1, Xn(r)
            }
        }
    }

    function iu(e, t, n) {
        let o;
        const i = Jo("deepl_settings");
        eo(e, i, (e => n(1, o = e)));
        let s = !1;

        function a() {
            n(0, s = !1)
        }
        return [s, o, i, function () {
            Mn({
                action: "dlRequestLogout"
            }), Mn({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: pe
                }
            }), a()
        }, function () {
            Mn({
                action: "dlRequestLogin"
            }), a()
        }, function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ji,
                    utmContent: "menu"
                }
            }), a()
        }, function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Yi
                }
            }), a()
        }, a, function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: Wl.developer_tools
                }
            }), a()
        }, function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: Wl.settings_page
                }
            }), a()
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, () => {
            n(0, s = !s)
        }]
    }
    window.customElements.define("deepl-inline-trigger", Yd);
    class su extends Si {
        constructor(e) {
            super(), ki(this, e, iu, ou, Yn, {})
        }
    }

    function au(e) {
        let t;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "dl-logo svelte-1k53si1")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function ru(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "dl-logo dl-logo--clickable svelte-1k53si1")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", e[12]), n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function lu(e) {
        let t, n, o, i, s, a;
        return s = new xc({
            props: {
                value: e[9].selectedTargetLanguage,
                websiteSettings: e[4],
                customClass: "dropdown__wrapper--header",
                fontSize: "sm"
            }
        }), s.$on("selection", e[16]), {
            c() {
                t = yo("div"), n = yo("span"), n.textContent = `${chrome.i18n.getMessage("layout_header_label_language_switch_v2")}`, o = To(), i = yo("div"), Ti(s.$$.fragment), Mo(n, "class", "dl-actions-language-selector__label svelte-1k53si1"), Mo(i, "class", "dl-actions-language-selector__dropdown svelte-1k53si1"), Mo(t, "class", "dl-actions-language-selector svelte-1k53si1")
            },
            m(e, r) {
                vo(e, t, r), fo(t, n), fo(t, o), fo(t, i), Li(s, i, null), a = !0
            },
            p(e, t) {
                const n = {};
                512 & t && (n.value = e[9].selectedTargetLanguage), 16 & t && (n.websiteSettings = e[4]), s.$set(n)
            },
            i(e) {
                a || ($i(s.$$.fragment, e), a = !0)
            },
            o(e) {
                bi(s.$$.fragment, e), a = !1
            },
            d(e) {
                e && $o(t), Ei(s)
            }
        }
    }

    function cu(e) {
        let t;

        function n(e, t) {
            return null == e[8] || e[8].translationState === s ? uu : du
        }
        let o = n(e),
            i = o(e);
        return {
            c() {
                i.c(), t = Lo()
            },
            m(e, n) {
                i.m(e, n), vo(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1), i = o(e), i && (i.c(), i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e), e && $o(t)
            }
        }
    }

    function du(e) {
        let t;
        return {
            c() {
                t = yo("div"), t.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_done")}`, Mo(t, "class", "dl-write-heading svelte-1k53si1")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function uu(e) {
        let t;
        return {
            c() {
                t = yo("div"), t.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_loading")}`, Mo(t, "class", "dl-write-heading svelte-1k53si1")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function pu(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), Mo(t, "class", "dl-settings-icon svelte-1k53si1"), Mo(t, "data-qa", "deepl-layour-header-settings-link")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", e[13]), n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function gu(e) {
        let t, n;
        return t = new su({}), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function mu(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), Mo(t, "type", "button"), Mo(t, "class", "dl-close-icon svelte-1k53si1")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", (function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })), n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function hu(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        let p = function (e, t) {
                return e[12] ? ru : au
            }(e),
            g = p(e),
            m = e[6] === Ne.translate && e[2] && e[9] && e[4] && lu(e),
            h = e[6] === Ne.write && cu(e),
            f = e[7] && pu(e),
            _ = e[1] && gu(),
            w = e[0] && mu(e);
        return {
            c() {
                t = yo("div"), g.c(), n = To(), o = yo("div"), m && m.c(), i = To(), h && h.c(), s = To(), f && f.c(), a = To(), _ && _.c(), r = To(), w && w.c(), Mo(o, "class", "dl-actions svelte-1k53si1"), Mo(t, "class", l = ao("dl-header " + (e[2] ? "dl-header--with-lang-selector" : "")) + " svelte-1k53si1")
            },
            m(l, p) {
                vo(l, t, p), g.m(t, null), fo(t, n), fo(t, o), m && m.m(o, null), fo(o, i), h && h.m(o, null), fo(o, s), f && f.m(o, null), fo(o, a), _ && _.m(o, null), fo(o, r), w && w.m(o, null), c = !0, d || (u = Eo(t, "mousedown", So(ko(e[15]))), d = !0)
            },
            p(e, [n]) {
                g.p(e, n), e[6] === Ne.translate && e[2] && e[9] && e[4] ? m ? (m.p(e, n), 596 & n && $i(m, 1)) : (m = lu(e), m.c(), $i(m, 1), m.m(o, i)) : m && (wi(), bi(m, 1, 1, (() => {
                    m = null
                })), vi()), e[6] === Ne.write ? h ? h.p(e, n) : (h = cu(e), h.c(), h.m(o, s)) : h && (h.d(1), h = null), e[7] ? f ? f.p(e, n) : (f = pu(e), f.c(), f.m(o, a)) : f && (f.d(1), f = null), e[1] ? _ ? 2 & n && $i(_, 1) : (_ = gu(), _.c(), $i(_, 1), _.m(o, r)) : _ && (wi(), bi(_, 1, 1, (() => {
                    _ = null
                })), vi()), e[0] ? w ? w.p(e, n) : (w = mu(e), w.c(), w.m(o, null)) : w && (w.d(1), w = null), (!c || 4 & n && l !== (l = ao("dl-header " + (e[2] ? "dl-header--with-lang-selector" : "")) + " svelte-1k53si1")) && Mo(t, "class", l)
            },
            i(e) {
                c || ($i(m), $i(_), c = !0)
            },
            o(e) {
                bi(m), bi(_), c = !1
            },
            d(e) {
                e && $o(t), g.d(), m && m.d(), h && h.d(), f && f.d(), _ && _.d(), w && w.d(), d = !1, u()
            }
        }
    }

    function fu(e, t, n) {
        let o, a, r = Gn,
            l = () => (r(), r = Jn(f, (e => n(8, o = e))), f),
            c = Gn,
            d = () => (c(), c = Jn(h, (e => n(9, a = e))), h);
        e.$$.on_destroy.push((() => r())), e.$$.on_destroy.push((() => c()));
        let {
            closeWindow: u
        } = t, {
            showMenu: g = !1
        } = t, {
            showLangSelect: m = !1
        } = t, {
            settings: h
        } = t;
        d();
        let {
            websiteSettings: f
        } = t;
        l();
        let {
            extensionContext: _ = 0
        } = t, {
            platformBehaviour: w = Oe.default
        } = t, {
            textProcessingMode: v = Ne.translate
        } = t, {
            showSettingsIcon: $ = !0
        } = t;
        async function b(e) {
            await h.set({
                selectedTargetLanguage: e.value,
                isTargetLanguageConfirmed: !0,
                regionalVariant: e.regionalVariant || ""
            }), f.update({
                translationState: s
            }), Mn({
                action: "dlRequestInlineTranslation",
                payload: {
                    requests: [{
                        text: o.originalSnippet
                    }],
                    domainName: window.location.hostname,
                    trigger: p,
                    sourceLang: o.websiteLanguage
                }
            }).then((e => {
                f.update({
                    translationState: i,
                    translatedSnippet: e[0].text,
                    snippetDetectedSourceLang: e[0].detected_source_language,
                    websiteLanguage: e[0].detected_source_language
                })
            })).catch((e => {
                f.update({
                    translationState: i,
                    translatedSnippet: "",
                    snippetDetectedSourceLang: "",
                    error: e.message ? e.message : e
                })
            }))
        }
        async function y(e) {
            await h.set({
                selectedTargetLanguage: e.value,
                isTargetLanguageConfirmed: !0,
                regionalVariant: e.regionalVariant || ""
            });
            const t = document.getElementsByTagName("deepl-gdocs-icon")[0];
            t && t.requestNewTranslation(e)
        }
        return e.$$set = e => {
            "closeWindow" in e && n(0, u = e.closeWindow), "showMenu" in e && n(1, g = e.showMenu), "showLangSelect" in e && n(2, m = e.showLangSelect), "settings" in e && d(n(3, h = e.settings)), "websiteSettings" in e && l(n(4, f = e.websiteSettings)), "extensionContext" in e && n(14, _ = e.extensionContext), "platformBehaviour" in e && n(5, w = e.platformBehaviour), "textProcessingMode" in e && n(6, v = e.textProcessingMode), "showSettingsIcon" in e && n(7, $ = e.showSettingsIcon)
        }, [u, g, m, h, f, w, v, $, o, a, b, y, function () {
            let e = ts;
            Mn({
                action: "dlTrackLogoClickedEvent",
                payload: {
                    extensionContext: _
                }
            }), v === Ne.write && (e = ns), Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: e,
                    utmContent: "home"
                }
            })
        }, function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: Wl.settings_page
                }
            })
        }, _, function (t) {
            ei.call(this, e, t)
        }, e => {
            switch (w) {
                case Oe.gdocs:
                    y(e.detail.selectedOption);
                    break;
                case Oe.default:
                default:
                    b(e.detail.selectedOption)
            }
        }]
    }
    class _u extends Si {
        constructor(e) {
            super(), ki(this, e, fu, hu, Yn, {
                closeWindow: 0,
                showMenu: 1,
                showLangSelect: 2,
                settings: 3,
                websiteSettings: 4,
                extensionContext: 14,
                platformBehaviour: 5,
                textProcessingMode: 6,
                showSettingsIcon: 7
            })
        }
    }

    function wu(e) {
        let t, n;
        return t = new _u({
            props: {
                websiteSettings: e[5],
                settings: e[4],
                showLangSelect: e[2],
                showMenu: e[1],
                closeWindow: e[0],
                extensionContext: e[6],
                platformBehaviour: e[7],
                textProcessingMode: e[8],
                showSettingsIcon: e[9]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                32 & n && (o.websiteSettings = e[5]), 16 & n && (o.settings = e[4]), 4 & n && (o.showLangSelect = e[2]), 2 & n && (o.showMenu = e[1]), 1 & n && (o.closeWindow = e[0]), 64 & n && (o.extensionContext = e[6]), 128 & n && (o.platformBehaviour = e[7]), 256 & n && (o.textProcessingMode = e[8]), 512 & n && (o.showSettingsIcon = e[9]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function vu(e) {
        let t, n, o, i, s, a = e[3] && wu(e);
        const r = e[11].default,
            l = to(r, e, e[10], null);
        return {
            c() {
                t = yo("div"), a && a.c(), n = To(), o = yo("div"), l && l.c(), Mo(o, "class", "dl-content svelte-1dtlgso"), Mo(t, "class", i = ao(`dl-layout ${e[2]&&"dl-layout--with-lang-selector"}`) + " svelte-1dtlgso"), Mo(t, "translate", "no")
            },
            m(e, i) {
                vo(e, t, i), a && a.m(t, null), fo(t, n), fo(t, o), l && l.m(o, null), s = !0
            },
            p(e, [o]) {
                e[3] ? a ? (a.p(e, o), 8 & o && $i(a, 1)) : (a = wu(e), a.c(), $i(a, 1), a.m(t, n)) : a && (wi(), bi(a, 1, 1, (() => {
                    a = null
                })), vi()), l && l.p && (!s || 1024 & o) && io(l, r, e, e[10], s ? oo(r, e[10], o, null) : so(e[10]), null), (!s || 4 & o && i !== (i = ao(`dl-layout ${e[2]&&"dl-layout--with-lang-selector"}`) + " svelte-1dtlgso")) && Mo(t, "class", i)
            },
            i(e) {
                s || ($i(a), $i(l, e), s = !0)
            },
            o(e) {
                bi(a), bi(l, e), s = !1
            },
            d(e) {
                e && $o(t), a && a.d(), l && l.d(e)
            }
        }
    }

    function $u(e, t, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = t, {
            closeWindow: s
        } = t, {
            showMenu: a = !1
        } = t, {
            showLangSelect: r = !1
        } = t, {
            withHeader: l = !0
        } = t, {
            settings: c
        } = t, {
            websiteSettings: d
        } = t, {
            extensionContext: u
        } = t, {
            platformBehaviour: p = Oe.default
        } = t, {
            textProcessingMode: g = Ne.translate
        } = t, {
            showSettingsIcon: m = !0
        } = t;
        return e.$$set = e => {
            "closeWindow" in e && n(0, s = e.closeWindow), "showMenu" in e && n(1, a = e.showMenu), "showLangSelect" in e && n(2, r = e.showLangSelect), "withHeader" in e && n(3, l = e.withHeader), "settings" in e && n(4, c = e.settings), "websiteSettings" in e && n(5, d = e.websiteSettings), "extensionContext" in e && n(6, u = e.extensionContext), "platformBehaviour" in e && n(7, p = e.platformBehaviour), "textProcessingMode" in e && n(8, g = e.textProcessingMode), "showSettingsIcon" in e && n(9, m = e.showSettingsIcon), "$$scope" in e && n(10, i = e.$$scope)
        }, [s, a, r, l, c, d, u, p, g, m, i, o]
    }
    class bu extends Si {
        constructor(e) {
            super(), ki(this, e, $u, vu, Yn, {
                closeWindow: 0,
                showMenu: 1,
                showLangSelect: 2,
                withHeader: 3,
                settings: 4,
                websiteSettings: 5,
                extensionContext: 6,
                platformBehaviour: 7,
                textProcessingMode: 8,
                showSettingsIcon: 9
            })
        }
    }

    function yu(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return {
            c() {
                t = yo("div"), n = yo("input"), o = To(), i = yo("div"), s = To(), a = yo("label"), r = xo(e[3]), Mo(n, "id", e[1]), Mo(n, "name", e[4]), Mo(n, "type", "radio"), n.checked = e[2], Mo(n, "data-qa", e[6]), Mo(n, "class", "svelte-12100kl"), Mo(i, "class", "radio-icon svelte-12100kl"), Mo(a, "for", e[1]), Mo(a, "class", "svelte-12100kl"), Mo(t, "class", l = ao(`radio ${e[5]} ${e[2]?"radio--checked":""}`) + " svelte-12100kl")
            },
            m(l, u) {
                vo(l, t, u), fo(t, n), Do(n, e[0]), fo(t, o), fo(t, i), fo(t, s), fo(t, a), fo(a, r), c || (d = [Eo(n, "change", e[10]), Eo(n, "change", e[8]), Eo(n, "mousedown", So(ko(e[9]))), Eo(t, "click", e[7])], c = !0)
            },
            p(e, [o]) {
                2 & o && Mo(n, "id", e[1]), 16 & o && Mo(n, "name", e[4]), 4 & o && (n.checked = e[2]), 64 & o && Mo(n, "data-qa", e[6]), 1 & o && Do(n, e[0]), 8 & o && Io(r, e[3]), 2 & o && Mo(a, "for", e[1]), 36 & o && l !== (l = ao(`radio ${e[5]} ${e[2]?"radio--checked":""}`) + " svelte-12100kl") && Mo(t, "class", l)
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), c = !1, Xn(d)
            }
        }
    }

    function Cu(e, t, n) {
        let {
            id: o
        } = t, {
            checked: i = !1
        } = t, {
            label: s = ""
        } = t, {
            value: a = ""
        } = t, {
            name: r = ""
        } = t, {
            cssClassName: l = ""
        } = t, {
            dataQa: c = "deepl-radio-button"
        } = t;
        return e.$$set = e => {
            "id" in e && n(1, o = e.id), "checked" in e && n(2, i = e.checked), "label" in e && n(3, s = e.label), "value" in e && n(0, a = e.value), "name" in e && n(4, r = e.name), "cssClassName" in e && n(5, l = e.cssClassName), "dataQa" in e && n(6, c = e.dataQa)
        }, [a, o, i, s, r, l, c, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function () {
            a = this.value, n(0, a)
        }]
    }
    class xu extends Si {
        constructor(e) {
            super(), ki(this, e, Cu, yu, Yn, {
                id: 1,
                checked: 2,
                label: 3,
                value: 0,
                name: 4,
                cssClassName: 5,
                dataQa: 6
            })
        }
    }

    function Tu(e) {
        let t, n, o;
        return n = new bu({
            props: {
                withHeader: !1,
                $$slots: {
                    default: [Lu]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment)
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p(e, t) {
                const o = {};
                131081 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function Lu(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b = chrome.i18n.getMessage("inline_translation_setting_button_ok") + "";
        return l = new xu({
            props: {
                name: "disable_inline_translation",
                id: ge,
                value: ge,
                cssClassName: "radio--with-border",
                checked: e[3] === ge,
                label: chrome.i18n.getMessage("inline_translation_setting_radio_disable_per_site"),
                dataQa: "disable-per-site-radio-button"
            }
        }), l.$on("change", e[7]), l.$on("click", e[11]), d = new xu({
            props: {
                name: "disable_inline_translation",
                id: me,
                value: me,
                cssClassName: "radio--with-border",
                checked: e[3] === me,
                label: chrome.i18n.getMessage("inline_translation_setting_radio_disable_everywhere"),
                dataQa: "disable-everywhere-radio-button"
            }
        }), d.$on("change", e[7]), d.$on("click", e[12]), {
            c() {
                t = yo("div"), n = yo("button"), o = To(), i = yo("div"), s = yo("p"), s.textContent = `${chrome.i18n.getMessage("inline_translation_setting_label_title_v2")}`, a = To(), r = yo("div"), Ti(l.$$.fragment), c = To(), Ti(d.$$.fragment), u = To(), p = yo("div"), g = yo("span"), g.textContent = `${chrome.i18n.getMessage("inline_translation_setting_link_cancel")}`, m = To(), h = yo("button"), f = xo(b), Mo(n, "type", "button"), Mo(n, "class", "close-icon svelte-1frab6c"), Mo(t, "class", "header svelte-1frab6c"), Mo(s, "class", "font-bold svelte-1frab6c"), Mo(r, "class", "option-container svelte-1frab6c"), Mo(g, "class", "link svelte-1frab6c"), Mo(g, "data-qa", "close-settings-popup-link"), Mo(h, "class", _ = ao("btn btn-primary " + (e[3] ? "" : "disabled")) + " svelte-1frab6c"), Mo(h, "data-qa", "save-settings-change-button"), Mo(p, "class", "action-container svelte-1frab6c"), Mo(i, "class", "dl-widget svelte-1frab6c")
            },
            m(_, b) {
                vo(_, t, b), fo(t, n), vo(_, o, b), vo(_, i, b), fo(i, s), fo(i, a), fo(i, r), Li(l, r, null), fo(r, c), Li(d, r, null), fo(i, u), fo(i, p), fo(p, g), fo(p, m), fo(p, h), fo(h, f), w = !0, v || ($ = [Eo(n, "click", So(ko((function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })))), Eo(t, "mousedown", So(ko(e[10]))), Eo(g, "click", (function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })), Eo(h, "click", So(ko(e[6]))), Eo(i, "mousedown", So(ko(e[9])))], v = !0)
            },
            p(t, n) {
                e = t;
                const o = {};
                8 & n && (o.checked = e[3] === ge), l.$set(o);
                const i = {};
                8 & n && (i.checked = e[3] === me), d.$set(i), (!w || 8 & n && _ !== (_ = ao("btn btn-primary " + (e[3] ? "" : "disabled")) + " svelte-1frab6c")) && Mo(h, "class", _)
            },
            i(e) {
                w || ($i(l.$$.fragment, e), $i(d.$$.fragment, e), w = !0)
            },
            o(e) {
                bi(l.$$.fragment, e), bi(d.$$.fragment, e), w = !1
            },
            d(e) {
                e && $o(t), e && $o(o), e && $o(i), Ei(l), Ei(d), v = !1, Xn($)
            }
        }
    }

    function Eu(e) {
        let t, n, o, i, s, a = e[4].enableInlineTranslation && Tu(e);
        return {
            c() {
                t = yo("div"), a && a.c(), Mo(t, "class", "tooltip-wrapper tooltip-wrapper--settings svelte-1frab6c"), Mo(t, "data-qa", "deepl-inline-settings-tooltip"), Mo(t, "style", e[2]), li((() => e[13].call(t)))
            },
            m(r, l) {
                vo(r, t, l), a && a.m(t, null), n = Po(t, e[13].bind(t)), o = !0, i || (s = [lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[14])], i = !0)
            },
            p(e, [n]) {
                e[4].enableInlineTranslation ? a ? (a.p(e, n), 16 & n && $i(a, 1)) : (a = Tu(e), a.c(), $i(a, 1), a.m(t, null)) : a && (wi(), bi(a, 1, 1, (() => {
                    a = null
                })), vi()), (!o || 4 & n) && Mo(t, "style", e[2])
            },
            i(e) {
                o || ($i(a), o = !0)
            },
            o(e) {
                bi(a), o = !1
            },
            d(e) {
                e && $o(t), a && a.d(), n(), i = !1, Xn(s)
            }
        }
    }

    function ku(e, t, n) {
        let o;
        eo(e, hs, (e => n(4, o = e)));
        let i, {
                closeTooltip: s
            } = t,
            {
                replaceElement: a
            } = t,
            r = "visibility: hidden; opacity:0; height:0;",
            l = "";

        function c(e) {
            n(3, l = e)
        }
        Ko((() => {
            setTimeout((() => {
                n(2, r = "")
            }), 100)
        }));
        return e.$$set = e => {
            "closeTooltip" in e && n(0, s = e.closeTooltip), "replaceElement" in e && n(8, a = e.replaceElement)
        }, e.$$.update = () => {
            258 & e.$$.dirty && a(i)
        }, [s, i, r, l, o, c, function () {
            if (!l) return;
            switch (l) {
                case me:
                    hs.set({
                        enableInlineTranslation: !1
                    }), Mn({
                        action: "dlTrackSettingChanged",
                        payload: {
                            settingType: me,
                            domainName: window.location.hostname,
                            uiFunction: fe,
                            uiLocation: z
                        }
                    });
                    break;
                case ge:
                    ! function () {
                        let e = o.blacklistDomainsForReading;
                        e && !e.includes(window.location.hostname) && (e.push(window.location.hostname), hs.set({
                            blacklistDomainsForReading: e
                        }), Mn({
                            action: "dlTrackSettingChanged",
                            payload: {
                                settingType: ge,
                                domainName: window.location.hostname,
                                uiFunction: fe,
                                uiLocation: z
                            }
                        }))
                    }()
            }
            let e = Gi(window.location.hostname, ["www."]);
            s(), Mn({
                action: "dlSendNotification",
                payload: {
                    type: O,
                    options: {
                        theme: A.green_theme,
                        currentDomain: e,
                        saveAction: l,
                        settingsPageURL: Wl.settings_reading
                    }
                }
            })
        }, function (e) {
            n(3, l = e.currentTarget.value)
        }, a, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, () => c(ge), () => c(me), function () {
            i = this.clientHeight, n(1, i)
        }, () => s()]
    }
    class Su extends Si {
        constructor(e) {
            super(), ki(this, e, ku, Eu, Yn, {
                closeTooltip: 0,
                replaceElement: 8
            })
        }
    }
    class Mu extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.container = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t) {
            const {
                deepl_inline_ui: n
            } = M;
            this.shadowContainer && this.shadowContainer.childElementCount > 0 && this.cleanupDOM();
            const o = 300;
            this.shadowContainer.appendChild(this.container);
            const i = e ? .top,
                s = window.innerHeight - (e ? .bottom || 0);
            let a = "position: absolute; top: 0px; left: 0px; width: 100%; z-index: " + (n.z_index - 100),
                r = `position: absolute; top: 0px; left: 0px; z-index: ${n.z_index-100};`,
                l = e.y,
                c = e.x;
            this.shadowContainer.style.cssText = a, this.container.style.cssText = r, this.mainComponent = new Su({
                target: this.container,
                props: {
                    closeTooltip: t,
                    replaceElement: t => {
                        const d = i > o;
                        s > o ? l = e.y + 8 : d && (l = e.y - 30 - t - 4), s < o && i < o && (a = `position: fixed; top:50%; left:50%; transform:translate(-50%,-50%); z-index: ${n.z_index-100}; max-height:90vh;`, r = `z-index: ${n.z_index-100};`, c = 0, l = 0), e.right < 260 ? c = e.left - 260 + 60 : e.left < 260 && (c = e.left), this.container.style.top = `${parseInt(l)}px`, this.container.style.left = `${parseInt(c)}px`
                    }
                }
            })
        }
        cleanupDOM() {
            this.container.remove(), this.shadowContainer.remove(), this.shadowContainer = document.createElement("div"), this.container = document.createElement("div"), this.shadow.appendChild(this.shadowContainer), this.mainComponent && this.mainComponent.$destroy()
        }
    }
    window.customElements.define("deepl-inline-translate-settings-tooltip", Mu);
    const Iu = e => ({
            top: e ? .selectedTop,
            bottom: window.innerHeight - e ? .selectedBottom,
            right: e ? .selectedRight,
            left: e ? .selectedLeft
        }),
        Du = e => {
            const {
                coords: t,
                clientHeight: n
            } = e, o = Iu(t), i = {
                top: {
                    position: t.y - t.height,
                    isPossible: o.top >= 0
                },
                bottom: {
                    position: t.y - n,
                    isPossible: o.bottom >= 0
                },
                middle: {
                    position: window.pageYOffset + window.innerHeight / 2 - n / 2,
                    isPossible: !0
                }
            };
            for (const e of Object.values(i))
                if (e.isPossible) return e.position
        },
        Ou = ({
            coords: e,
            TOOLTIP_WIDTH: t
        }) => {
            const n = {
                right: {
                    position: e.x,
                    isPossible: e.x + t <= window.innerWidth
                },
                left: {
                    position: e.x + e.selectedWidth - t,
                    isPossible: e.x + e.selectedWidth - t >= 0
                },
                middle: {
                    position: window.innerWidth / 2 - t / 2,
                    isPossible: !0
                }
            };
            for (const e of Object.values(n))
                if (e.isPossible) return e.position
        },
        Nu = (e, t) => {
            const {
                coords: n,
                clientHeight: o,
                style: i,
                TOOLTIP_WIDTH: s,
                TRIGGER_MENU_ICON_HEIGHT: a
            } = t;
            switch (e) {
                case "top":
                    i.top = n.y - n.height - o - 2 - a + "px", i.left = `${Ou(t)}px`;
                    break;
                case "bottom":
                    i.top = `${n.y+2+a}px`, i.left = `${Ou(t)}px`;
                    break;
                case "left":
                    i.top = `${Du(t)}px`, i.left = n.x - s - 2 + "px";
                    break;
                case "right":
                    i.top = `${Du(t)}px`, i.left = `${n.x+n.selectedWidth+2}px`;
                    break;
                default:
                    i.top = window.pageYOffset + window.innerHeight / 2 - o / 2 + "px", i.left = window.innerWidth / 2 - s / 2 + "px"
            }
        },
        Au = (e, t) => {
            const {
                coords: n,
                clientHeight: o,
                TOOLTIP_WIDTH: i,
                style: s
            } = t;
            switch (s.left = n.x - i - 10 + "px", e) {
                case "top":
                    s.top = n.y - o + "px";
                    break;
                case "bottom":
                    s.top = n.y - n.height + "px";
                    break;
                default:
                    s.top = window.pageYOffset + window.innerHeight / 2 - o / 2 + "px"
            }
        },
        Ru = (e, t) => {
            const n = Pu(t);
            switch (e) {
                case "top":
                case "bottom":
                case "left":
                case "right":
                    return n[e];
                default:
                    return !0
            }
        },
        Pu = e => {
            const {
                TOOLTIP_WIDTH: t,
                clientHeight: n,
                coords: o
            } = e, i = Iu(o);
            return {
                left: i.left > t,
                right: i.right > t,
                bottom: i.bottom > n,
                top: i.top > n
            }
        };

    function zu(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = yo("div"), n = yo("div"), n.textContent = `${chrome.i18n.getMessage("ui_inline_translation_listen_to_translation")}`, o = To(), i = yo("button"), i.textContent = `${chrome.i18n.getMessage("ui_inline_translation_listen_to_original")}`, Mo(n, "class", "list-entry svelte-12gdpba"), Mo(n, "data-qa", "dl-toolbar-listener-button-target-lang"), zo(n, "dl-entry-notAvaiable", !e[0]), Mo(i, "class", "list-entry svelte-12gdpba"), Mo(i, "data-qa", "dl-toolbar-listener-button-source-lang"), zo(i, "dl-entry-notAvaiable", !e[1]), Mo(t, "class", "listen-list svelte-12gdpba"), Mo(t, "data-qa", "dl-toolbar-listener-element-langs")
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), fo(t, o), fo(t, i), r = !0, l || (c = [Eo(n, "click", (function () {
                    Qn(e[3](e[4].translatedSnippet, e[5].selectedTargetLanguage)) && e[3](e[4].translatedSnippet, e[5].selectedTargetLanguage).apply(this, arguments)
                })), Eo(i, "click", (function () {
                    Qn(e[3](e[4].originalSnippet, e[4].websiteLanguage)) && e[3](e[4].originalSnippet, e[4].websiteLanguage).apply(this, arguments)
                }))], l = !0)
            },
            p(t, [o]) {
                e = t, (!r || 1 & o) && zo(n, "dl-entry-notAvaiable", !e[0]), (!r || 2 & o) && zo(i, "dl-entry-notAvaiable", !e[1])
            },
            i(e) {
                r || (li((() => {
                    a && a.end(1), s = Ci(t, Ur, {
                        y: -5,
                        duration: 500
                    }), s.start()
                })), r = !0)
            },
            o(e) {
                s && s.invalidate(), a = xi(t, Ur, {
                    y: -5,
                    duration: 500
                }), r = !1
            },
            d(e) {
                e && $o(t), e && a && a.end(), l = !1, Xn(c)
            }
        }
    }

    function Hu(e, t, n) {
        let o, i, s = Gn,
            a = () => (s(), s = Jn(c, (e => n(4, o = e))), c);
        eo(e, hs, (e => n(5, i = e))), e.$$.on_destroy.push((() => s()));
        let {
            isAvailableSelectedTargetLang: r
        } = t, {
            isAvailableSourceLang: l
        } = t, {
            websiteSettings: c
        } = t;
        a();
        let {
            listen: d = (() => {})
        } = t;
        return e.$$set = e => {
            "isAvailableSelectedTargetLang" in e && n(0, r = e.isAvailableSelectedTargetLang), "isAvailableSourceLang" in e && n(1, l = e.isAvailableSourceLang), "websiteSettings" in e && a(n(2, c = e.websiteSettings)), "listen" in e && n(3, d = e.listen)
        }, [r, l, c, d, o, i]
    }
    class Fu extends Si {
        constructor(e) {
            super(), ki(this, e, Hu, zu, Yn, {
                isAvailableSelectedTargetLang: 0,
                isAvailableSourceLang: 1,
                websiteSettings: 2,
                listen: 3
            })
        }
    }

    function Bu(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("button"), Mo(t, "type", "button"), Mo(t, "class", "dl-replace-button svelte-37z2qn"), t.disabled = n = e[3] || !e[2] || e[4]
            },
            m(n, s) {
                vo(n, t, s), o || (i = Eo(t, "click", e[5]), o = !0)
            },
            p(e, o) {
                12 & o && n !== (n = e[3] || !e[2] || e[4]) && (t.disabled = n)
            },
            d(e) {
                e && $o(t), o = !1, i()
            }
        }
    }

    function Uu(e) {
        let t, n;
        return t = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_replace_cta"),
                multiline: !0,
                zIndex: "0",
                isEnabled: !e[3] && e[2] && !e[4],
                $$slots: {
                    default: [Bu]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, [n]) {
                const o = {};
                12 & n && (o.isEnabled = !e[3] && e[2] && !e[4]), 268 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function qu(e, t, n) {
        let o, i, s = Gn,
            a = () => (s(), s = Jn(d, (e => n(6, o = e))), d),
            r = Gn,
            l = () => (r(), r = Jn(p, (e => n(7, i = e))), p);
        e.$$.on_destroy.push((() => s())), e.$$.on_destroy.push((() => r()));
        let {
            websiteSettings: d
        } = t;
        a();
        let u, {
            settings: p
        } = t;
        l();
        let g = !1,
            m = o.translationState === c;
        return Ko((() => {
            n(2, u = ft())
        })), e.$$set = e => {
            "websiteSettings" in e && a(n(0, d = e.websiteSettings)), "settings" in e && l(n(1, p = e.settings))
        }, [d, p, u, g, m, function () {
            const e = gt().text;
            n(3, g = !0);
            const t = document.getElementsByTagName("deepl-gdocs-icon")[0];
            t && (t.applyReplacement(), Mn({
                action: "dlTrackGDocsReplaceText",
                payload: {
                    sourceLang: o.websiteLanguage,
                    targetLang: i.selectedTargetLanguage,
                    sourceLength: e.length,
                    targetLength: o.translatedSnippet.length
                }
            }))
        }]
    }
    class ju extends Si {
        constructor(e) {
            super(), ki(this, e, qu, Uu, Yn, {
                websiteSettings: 0,
                settings: 1
            })
        }
    }

    function Wu(e) {
        let t, n;
        return {
            c() {
                t = yo("div"), n = yo("div"), Mo(t, "class", "tooltip-linguee svelte-f3wkxu"), Mo(t, "style", `z-index: ${e[15].z_index}`)
            },
            m(o, i) {
                vo(o, t, i), fo(t, n), n.innerHTML = e[13]
            },
            p(e, t) {
                8192 & t[0] && (n.innerHTML = e[13])
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function Gu(e) {
        let t, n, o, i, s;
        return n = new Bd({
            props: {
                tooltip: e[12],
                $$slots: {
                    default: [Zu]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("fragment"), Ti(n.$$.fragment)
            },
            m(a, r) {
                vo(a, t, r), Li(n, t, null), o = !0, i || (s = [Eo(t, "mouseover", e[21]), Eo(t, "mouseleave", e[25])], i = !0)
            },
            p(e, t) {
                const o = {};
                4096 & t[0] && (o.tooltip = e[12]), 3841 & t[0] | 1 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n), i = !1, Xn(s)
            }
        }
    }

    function Vu(e) {
        let t, n;
        return t = new Fu({
            props: {
                websiteSettings: e[0],
                isAvailableSelectedTargetLang: e[10],
                isAvailableSourceLang: e[11],
                listen: e[17]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                1 & n[0] && (o.websiteSettings = e[0]), 1024 & n[0] && (o.isAvailableSelectedTargetLang = e[10]), 2048 & n[0] && (o.isAvailableSourceLang = e[11]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Zu(e) {
        let t, n, o, i, s, a, r = e[9] && Vu(e);
        return {
            c() {
                t = yo("button"), t.innerHTML = '<span class="dl-icon dl-icon-listen svelte-f3wkxu"></span>', n = To(), r && r.c(), o = Lo(), Mo(t, "type", "button"), Mo(t, "class", "dl-btn svelte-f3wkxu"), Mo(t, "data-qa", "dl-toolbar-listener-button"), zo(t, "dl-btn-active", e[8]), zo(t, "dl-btn-hovered", e[9])
            },
            m(l, c) {
                vo(l, t, c), vo(l, n, c), r && r.m(l, c), vo(l, o, c), i = !0, s || (a = Eo(t, "click", e[18]), s = !0)
            },
            p(e, n) {
                (!i || 256 & n[0]) && zo(t, "dl-btn-active", e[8]), (!i || 512 & n[0]) && zo(t, "dl-btn-hovered", e[9]), e[9] ? r ? (r.p(e, n), 512 & n[0] && $i(r, 1)) : (r = Vu(e), r.c(), $i(r, 1), r.m(o.parentNode, o)) : r && (wi(), bi(r, 1, 1, (() => {
                    r = null
                })), vi())
            },
            i(e) {
                i || ($i(r), i = !0)
            },
            o(e) {
                bi(r), i = !1
            },
            d(e) {
                e && $o(t), e && $o(n), r && r.d(e), e && $o(o), s = !1, a()
            }
        }
    }

    function Ku(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), t.innerHTML = '<span class="dl-icon dl-icon-copy svelte-f3wkxu"></span>', Mo(t, "type", "button"), Mo(t, "class", "dl-btn svelte-f3wkxu"), Mo(t, "data-qa", "dl-toolbar-copy-button"), zo(t, "dl-btn-active", e[14])
            },
            m(i, s) {
                vo(i, t, s), n || (o = [Eo(t, "click", e[19]), Eo(t, "mouseleave", e[20])], n = !0)
            },
            p(e, n) {
                16384 & n[0] && zo(t, "dl-btn-active", e[14])
            },
            d(e) {
                e && $o(t), n = !1, Xn(o)
            }
        }
    }

    function Xu(e) {
        let t, n;
        return t = new ju({
            props: {
                websiteSettings: e[0],
                settings: hs
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                1 & n[0] && (o.websiteSettings = e[0]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Qu(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y, C, x, T = !e[3] || !e[2]() || !e[5] || e[6],
            L = T && Wu(e),
            E = (e[10] || e[11]) && Gu(e);
        $ = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage(e[14] ? "ui_inline_translation_copied" : "ui_inline_translation_copy"),
                $$slots: {
                    default: [Ku]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let k = e[7] === Oe.gdocs && Xu(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), o = yo("button"), i = yo("span"), i.textContent = `${chrome.i18n.getMessage("ui_inline_translation_see_alternatives_v2")}`, s = To(), a = yo("span"), r = To(), l = yo("fragment"), c = yo("div"), d = yo("div"), d.textContent = `${chrome.i18n.getMessage("ui_inline_translation_dictionary")}`, u = To(), p = yo("div"), g = To(), m = yo("div"), f = To(), L && L.c(), _ = To(), w = yo("div"), E && E.c(), v = To(), Ti($.$$.fragment), b = To(), k && k.c(), Mo(a, "class", "icon icon-external-link svelte-f3wkxu"), Mo(o, "type", "button"), Mo(o, "class", "link svelte-f3wkxu"), Mo(n, "class", "dl-link-container"), Mo(d, "class", "dict-text svelte-f3wkxu"), Mo(p, "class", "img_book svelte-f3wkxu"), zo(p, "shown-dict", e[4] && e[3] && e[5]), Mo(m, "class", "img_arrow svelte-f3wkxu"), zo(m, "shown-dict", e[4] && e[3] && e[5]), Mo(c, "class", h = "dl-dictionary " + (e[3] && e[2]() && e[5] && !e[6] ? "" : "disable") + " " + (e[4] && e[3] ? "shown-dict" : "") + " svelte-f3wkxu"), Mo(c, "data-qa", "dl-toolbar-dictionary-button"), Oo(l, "position", "relative"), Mo(w, "class", "dl-btn-group svelte-f3wkxu"), Mo(t, "class", "dl-toolbar svelte-f3wkxu")
            },
            m(h, T) {
                vo(h, t, T), fo(t, n), fo(n, o), fo(o, i), fo(o, s), fo(o, a), fo(t, r), fo(t, l), fo(l, c), fo(c, d), fo(c, u), fo(c, p), fo(c, g), fo(c, m), fo(l, f), L && L.m(l, null), fo(t, _), fo(t, w), E && E.m(w, null), fo(w, v), Li($, w, null), fo(w, b), k && k.m(w, null), y = !0, C || (x = [Eo(o, "click", e[16]), Eo(c, "click", (function () {
                    Qn(e[1]) && e[1].apply(this, arguments)
                })), Eo(c, "mouseenter", e[22])], C = !0)
            },
            p(t, n) {
                e = t, (!y || 56 & n[0]) && zo(p, "shown-dict", e[4] && e[3] && e[5]), (!y || 56 & n[0]) && zo(m, "shown-dict", e[4] && e[3] && e[5]), (!y || 124 & n[0] && h !== (h = "dl-dictionary " + (e[3] && e[2]() && e[5] && !e[6] ? "" : "disable") + " " + (e[4] && e[3] ? "shown-dict" : "") + " svelte-f3wkxu")) && Mo(c, "class", h), 108 & n[0] && (T = !e[3] || !e[2]() || !e[5] || e[6]), T ? L ? L.p(e, n) : (L = Wu(e), L.c(), L.m(l, null)) : L && (L.d(1), L = null), e[10] || e[11] ? E ? (E.p(e, n), 3072 & n[0] && $i(E, 1)) : (E = Gu(e), E.c(), $i(E, 1), E.m(w, v)) : E && (wi(), bi(E, 1, 1, (() => {
                    E = null
                })), vi());
                const o = {};
                16384 & n[0] && (o.tooltip = chrome.i18n.getMessage(e[14] ? "ui_inline_translation_copied" : "ui_inline_translation_copy")), 16384 & n[0] | 1 & n[1] && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), $.$set(o), e[7] === Oe.gdocs ? k ? (k.p(e, n), 128 & n[0] && $i(k, 1)) : (k = Xu(e), k.c(), $i(k, 1), k.m(w, null)) : k && (wi(), bi(k, 1, 1, (() => {
                    k = null
                })), vi())
            },
            i(e) {
                y || ($i(E), $i($.$$.fragment, e), $i(k), y = !0)
            },
            o(e) {
                bi(E), bi($.$$.fragment, e), bi(k), y = !1
            },
            d(e) {
                e && $o(t), L && L.d(), E && E.d(), Ei($), k && k.d(), C = !1, Xn(x)
            }
        }
    }

    function Yu(e, t, n) {
        let o, i, s = Gn,
            a = () => (s(), s = Jn(r, (e => n(23, o = e))), r);
        eo(e, hs, (e => n(24, i = e))), e.$$.on_destroy.push((() => s()));
        let {
            websiteSettings: r
        } = t;
        a();
        let l, c, d, u, {
                switchVisibilityDictionary: p
            } = t,
            {
                isSingleWord: g
            } = t,
            {
                dictionaryHTML: m
            } = t,
            {
                showDictionary: h = !1
            } = t,
            {
                langPair: f
            } = t,
            {
                errorMessageDict: _
            } = t,
            {
                platformBehaviour: w = Oe.default
            } = t,
            v = !1,
            $ = !1;
        const {
            deepl_inline_ui: b
        } = M;
        let y = !1;

        function T() {
            Mn({
                action: "dlStopSpeech"
            }), n(8, d = !1)
        }

        function L(e) {
            try {
                Mn({
                    action: "dlTrackInlineListen",
                    payload: e
                })
            } catch (e) {
                console.error(e)
            }
        }
        async function E(e, t, o) {
            if ("dlVoiceOverStopped" === e.action) n(8, d = !1), o()
        }

        function k(e) {
            try {
                Mn({
                    action: "dlTrackVoiceOverStops",
                    payload: e
                })
            } catch (e) {
                console.error(e)
            }
        }
        chrome.runtime.onMessage.addListener(E), Xo((() => {
            d && k({
                targetLang: i.selectedTargetLanguage,
                targetLength: o.translatedSnippet.length,
                triggerType: x,
                nicheIntegration: w
            }), T(), chrome.runtime.onMessage.removeListener(E)
        }));
        return e.$$set = e => {
            "websiteSettings" in e && a(n(0, r = e.websiteSettings)), "switchVisibilityDictionary" in e && n(1, p = e.switchVisibilityDictionary), "isSingleWord" in e && n(2, g = e.isSingleWord), "dictionaryHTML" in e && n(3, m = e.dictionaryHTML), "showDictionary" in e && n(4, h = e.showDictionary), "langPair" in e && n(5, f = e.langPair), "errorMessageDict" in e && n(6, _ = e.errorMessageDict), "platformBehaviour" in e && n(7, w = e.platformBehaviour)
        }, e.$$.update = () => {
            if (25166592 & e.$$.dirty[0] && (i.selectedTargetLanguage && Mn({
                    action: "dlGetSupportedVoices"
                }).then((e => {
                    n(10, l = e.includes(["EN-US", "EN-GB"].includes(i.selectedTargetLanguage) ? "EN" : ["PT-PT", "PT-BR"].includes(i.selectedTargetLanguage) ? "PT" : i.selectedTargetLanguage)), n(11, c = e.includes(o.websiteLanguage))
                })), !v && d ? setTimeout((() => {
                    n(12, $ = chrome.i18n.getMessage("ui_inline_translation_listen_stop"))
                }), 1e3) : n(12, $ = !1)), 100 & e.$$.dirty[0] && (_ ? n(13, u = _) : g() ? n(13, u = f ? chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary") : chrome.i18n.getMessage("ui_inline_translation_unavailable_lang_pair")) : n(13, u = chrome.i18n.getMessage("ui_inline_translation_translate_only_one_word"))), 16 & e.$$.dirty[0] && h) try {
                Mn({
                    action: "dlTrackOpenDictionarySection",
                    payload: {}
                })
            } catch (e) {
                console.log(e)
            }
        }, [r, p, g, m, h, f, _, w, d, v, l, c, $, u, y, b, function () {
            const e = {};
            o && i && (e.sourceLang = o.websiteLanguage, e.targetLang = i.selectedTargetLanguage, e.textToShare = o.originalSnippet), Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: es,
                    ...e
                }
            });
            try {
                Mn({
                    action: "dlTrackUiAction",
                    payload: {
                        uiAction: de,
                        nicheIntegration: w
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }, async function (e, t) {
                d || (Mn({
                    action: "dlTextToSpeech",
                    payload: {
                        text: e,
                        lang: t
                    }
                }), n(8, d = !0), L({
                    targetLang: i.selectedTargetLanguage,
                    targetLength: o.translatedSnippet.length,
                    actionType: _e,
                    nicheIntegration: w
                }), n(9, v = !1))
            },
            function () {
                d ? (T(), n(8, d = !1), k({
                    targetLang: i.selectedTargetLanguage,
                    targetLength: o.translatedSnippet.length,
                    triggerType: C,
                    nicheIntegration: w
                }), L({
                    targetLang: i.selectedTargetLanguage,
                    targetLength: o.translatedSnippet.length,
                    actionType: we,
                    nicheIntegration: w
                })) : n(9, v = !0)
            },
            function () {
                navigator.clipboard.writeText(o.translatedSnippet).then((function () {
                        n(14, y = !0)
                    }), (function (e) {
                        console.error(e)
                    })),
                    function (e) {
                        try {
                            Mn({
                                action: "dlTrackInlineCopy",
                                payload: e
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }({
                        targetLang: i.selectedTargetLanguage,
                        targetLength: o.translatedSnippet.length,
                        nicheIntegration: w
                    })
            },
            function () {
                setTimeout((() => {
                    n(14, y = !1)
                }), 300)
            },
            function () {
                d || n(9, v = !0)
            },
            function () {
                if (!m || !g()) try {
                    Mn({
                        action: "dlTrackDisabledDictionaryHover",
                        payload: {}
                    })
                } catch (e) {
                    console.log(e)
                }
            }, o, i, () => n(9, v = !1)]
    }
    class Ju extends Si {
        constructor(e) {
            super(), ki(this, e, Yu, Qu, Yn, {
                websiteSettings: 0,
                switchVisibilityDictionary: 1,
                isSingleWord: 2,
                dictionaryHTML: 3,
                showDictionary: 4,
                langPair: 5,
                errorMessageDict: 6,
                platformBehaviour: 7
            }, null, [-1, -1])
        }
    }

    function ep(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = yo("div"), n = yo("button"), n.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_cancel")}`, o = To(), i = yo("button"), i.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_accept")}`, Mo(n, "class", "btn-secondary svelte-asbnol"), Mo(i, "class", "btn-primary svelte-asbnol"), Mo(t, "class", "dl-toolbar svelte-asbnol")
            },
            m(r, l) {
                vo(r, t, l), fo(t, n), fo(t, o), fo(t, i), s || (a = [Eo(n, "click", e[1]), Eo(i, "click", e[0])], s = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), s = !1, Xn(a)
            }
        }
    }

    function tp(e, t, n) {
        let {
            onClose: o
        } = t;
        return e.$$set = e => {
            "onClose" in e && n(2, o = e.onClose)
        }, [() => {
            const e = document.getElementsByTagName("deepl-gdocs-icon")[0];
            e && (e.applyReplacement(), e.trackDeeplWriteInsertCopy()), o()
        }, () => {
            const e = document.getElementsByTagName("deepl-gdocs-icon")[0];
            e && e.trackDeeplWriteDiscardCopy(), o()
        }, o]
    }
    class np extends Si {
        constructor(e) {
            super(), ki(this, e, tp, ep, Yn, {
                onClose: 2
            })
        }
    }

    function op(e) {
        let t, n, o, i, s, a = JSON.stringify(e[1](), void 0, 2) + "";
        return {
            c() {
                t = yo("p"), n = xo(e[0]), o = To(), i = yo("pre"), s = xo(a), Mo(i, "class", "debug-settings svelte-mu7va1")
            },
            m(e, a) {
                vo(e, t, a), fo(t, n), vo(e, o, a), vo(e, i, a), fo(i, s)
            },
            p(e, [t]) {
                1 & t && Io(n, e[0]), 2 & t && a !== (a = JSON.stringify(e[1](), void 0, 2) + "") && Io(s, a)
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), e && $o(o), e && $o(i)
            }
        }
    }

    function ip(e, t, n) {
        let {
            headline: o = "JSON block"
        } = t, {
            jsonData: i = (() => {})
        } = t;
        return e.$$set = e => {
            "headline" in e && n(0, o = e.headline), "jsonData" in e && n(1, i = e.jsonData)
        }, [o, i]
    }
    class sp extends Si {
        constructor(e) {
            super(), ki(this, e, ip, op, Yn, {
                headline: 0,
                jsonData: 1
            })
        }
    }

    function ap(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("div"), n = yo("style"), n.textContent = '.lmt__dict {\n  background-color: white;\n  text-align: left;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  position: relative;\n  font-weight: 400;\n  font-family: "Open Sans", sans-serif;\n  padding: 0 24px;\n  border: 0;\n  width: 100%;\n  font-size: 14px;\n}\n.lmt__dict #dictionary .dict_headline_for_0 {\n  display: none;\n}\n.lmt__dict #dictionary .dict_headline_for_1 {\n  display: none;\n}\n.lmt__dict h1 {\n  font-family: "Open Sans", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.1;\n  font-size: 15px;\n}\n.lmt__dict h1.didyoumean {\n  display: none;\n}\n.lmt__dict #spelling_message_pane {\n  display: none;\n}\n.lmt__dict a {\n  text-decoration: none;\n  pointer-events: none;\n  font-family: "Open Sans", sans-serif;\n  color: #333;\n}\n.lmt__dict.lmt--hidden {\n  display: none;\n}\n.lmt__dict .semantic_field,\n.lmt__dict .sem,\n.lmt__dict .othertempora {\n  font-style: italic;\n  color: #999;\n  position: relative;\n  font-size: 12px;\n}\n.lmt__dict noindex:-o-prefocus,\n.lmt__dict .semantic_field,\n.lmt__dict .sem {\n  position: static;\n  z-index: 1;\n}\n.lmt__dict .placeholder {\n  font-size: smaller;\n}\n.lmt__dict #dictionary,\n.lmt__dict .dictionary {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 15px;\n  color: #999;\n  line-height: 1.35em;\n  position: relative;\n}\n.lmt__dict #dictionary .inexact {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 13px;\n  color: #999;\n  margin-top: 18px;\n}\n.lmt__dict .lemma {\n  vertical-align: top;\n  margin: 10px 0 25px 0;\n}\n.lmt__dict .lemma.last {\n  background: none;\n}\n.lmt__dict .lemma_desc {\n  padding: 0 0 10px 0;\n}\n.lmt__dict #dictionary h2.lemma_desc {\n  margin: 0px;\n}\n.lmt__dict .lemma_content {\n  padding: 0 0 0 0;\n  position: relative;\n  margin-bottom: 8px;\n}\n.lmt__dict .translation_group {\n  position: relative;\n  padding-top: 8px;\n}\n.lmt__dict .lemma_content .translation_group_line.with_pie {\n  padding-left: 18px;\n  text-indent: -18px;\n}\n.lmt__dict .exact .translation.featured {\n  margin-bottom: 8px;\n  clear: both;\n}\n.lmt__dict .translation_desc {\n  padding: 2px 0 0 0;\n  display: inline-block;\n}\n.lmt__dict h3.translation_desc {\n  margin: 0;\n  font-weight: 400;\n}\n.lmt__dict #dictionary h3.translation_desc {\n  margin-bottom: 0;\n}\n.lmt__dict .group_line .translation_desc {\n  text-indent: 0;\n  display: inline;\n  padding: 2px 10px 1px 0;\n  padding-left: 0;\n}\n.lmt__dict .comment {\n  margin: 15px 0 15px 0;\n  padding: 0 0 0 10px;\n}\n.lmt__dict .lemma_content {\n  padding-left: 40px;\n}\n.lmt__dict .meaninggroup_description_inner {\n  margin-left: -20px;\n  width: 20px;\n  display: inline-block;\n}\n.lmt__dict .meaninggroup_descriptions {\n  margin-left: -20px;\n  display: inline-block;\n}\n.lmt__dict .tag_t {\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .tag_s {\n  color: #006494;\n  font-style: normal;\n}\n.lmt__dict .tag_lemma {\n  font-size: 16px;\n  font-weight: 400;\n  color: #006494;\n  font-style: normal;\n}\n.lmt__dict .tag_lemma a {\n  color: #006494;\n}\n.lmt__dict .inexact .tag_lemma {\n  font-size: 14px;\n}\n.lmt__dict .tag_type,\n.lmt__dict .tag_wordtype {\n  font-style: italic;\n  font-size: 14px;\n  margin-right: 2px;\n  color: #999;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_type,\n.lmt__dict .inexact .tag_wordtype,\n.lmt__dict .example_lines .tag_type,\n.lmt__dict .example_lines .tag_wordtype,\n.lmt__dict .tag_forms .tag_wordtype {\n  font-size: 14px;\n}\n.lmt__dict .tag_wordtype {\n  font-size: 14px;\n  margin-left: 0;\n}\n.lmt__dict .tag_area,\n.lmt__dict .tag_usage {\n  color: #999;\n  font-style: italic;\n  font-size: 14px;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_area,\n.lmt__dict .inexact .tag_usage,\n.lmt__dict .inexact .tag_forms {\n  font-size: 10px;\n}\n.lmt__dict .tag_c {\n  color: #999;\n  font-size: 15px;\n  font-style: italic;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_c {\n  font-size: 13px;\n}\n.lmt__dict .tag_forms {\n  font-size: 13px;\n  color: #999;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_forms {\n  display: none;\n}\n.lmt__dict .lemma_desc .tag_forms {\n  display: none;\n  padding-left: 3px;\n}\n.lmt__dict .tag_trans_src_context {\n  color: #006494;\n  font-style: normal;\n  padding-right: 10px;\n  font-size: 14px;\n}\n.lmt__dict .tag_trans_src_context:before {\n  content: "(";\n}\n.lmt__dict .tag_trans_src_context:after {\n  content: ")";\n}\n.lmt__dict .tag_lemma_context {\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 14px;\n}\n.lmt__dict .inexact .tag_lemma_context {\n  padding-left: 5px;\n  font-size: 13px;\n}\n.lmt__dict .tag_lemma_context .placeholder {\n  font-size: inherit;\n}\n.lmt__dict #dictionary .tag_forms h3 {\n  display: inline;\n  padding-right: 10px;\n  font-size: 12px;\n  margin: 0 0 0 0;\n  color: #999;\n}\n.lmt__dict .tag_formname {\n  color: #999;\n}\n.lmt__dict .tag_c,\n.lmt__dict .tag_t,\n.lmt__dict .tag_s,\n.lmt__dict .tag_area,\n.lmt__dict .tag_usage {\n  font-size: 14px;\n}\n.lmt__dict .tag_trans {\n  font-size: 14px;\n  color: #333;\n  font-style: normal;\n  display: inline-block;\n  min-height: 20px;\n}\n.lmt__dict .inexact .tag_trans {\n  font-size: 14px;\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .inexact .tag_trans a {\n  color: #333;\n}\n.lmt__dict .exact .tag_trans a.featured {\n  line-height: 24px;\n}\n.lmt__dict .meaninggroup_notfirst {\n  padding-top: 8px;\n}\n.lmt__dict .meaninggroup_editing.meaninggroup_notfirst {\n  padding-top: 20px;\n}\n.lmt__dict .meaning_class_header {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n.lmt__dict .meaninggroup_outer_list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: inline;\n}\n.lmt__dict .meaninggroup_inner_list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.lmt__dict .meaninggroup_inner_list li {\n  display: inline;\n}\n.lmt__dict .meaninggroup_problematic .meaninggroup_description {\n  color: #e00;\n}\n.lmt__dict .meaninggroup_problematic .meaninggroup_description_index {\n  color: #e00;\n}\n.lmt__dict .isForeignTerm .meaninggroup_synonym,\n.lmt__dict .isForeignTerm .meaninggroup_valency,\n.lmt__dict .isForeignTerm .meaninggroup_valency,\n.lmt__dict .meaninggroup_descriptions {\n  color: #333;\n}\n.lmt__dict .isMainTerm .meaninggroup_synonym,\n.lmt__dict .isMainTerm .meaninggroup_valency,\n.lmt__dict .isMainTerm .meaninggroup_valency,\n.lmt__dict .meaninggroup_descriptions {\n  color: #265182;\n}\n.lmt__dict .meaninggroup_synonym {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_preliminary {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n  color: green;\n}\n.lmt__dict .meaninggroup_descriptions {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_valency {\n  font-size: 15px;\n  font-weight: 400;\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_usage {\n  color: #999;\n}\n.lmt__dict .meaninggroup_areas {\n  color: #999;\n  font-style: italic;\n}\n.lmt__dict .meaninggroup_editing .meaninggroup_descriptions,\n.lmt__dict .meaninggroup_editing .meaninggroup_synonym,\n.lmt__dict .meaninggroup_editing .meaninggroup_usage,\n.lmt__dict .meaninggroup_editing .meaninggroup_synonym,\n.lmt__dict .meaninggroup_editing .meaninggroup_description_index,\n.lmt__dict .meaninggroup_editing .meaninggroup_preliminary {\n  font-weight: 600;\n}\n.lmt__dict .meaninggroups_remark {\n  margin-left: -20px;\n}\n.lmt__dict .inflectioninfo,\n.lmt__dict .inflectioninfo .tag_c {\n  color: #006494;\n  font-style: normal;\n  font-size: 13px;\n}\n.lmt__dict .isForeignTerm .inflectioninfo {\n  color: #333;\n}\n.lmt__dict .isForeignTerm .tag_lemma,\n.lmt__dict .isForeignTerm .tag_lemma a,\n.lmt__dict .isForeignTerm .tag_s,\n.lmt__dict .isForeignTerm .tag_s a,\n.lmt__dict .isForeignTerm .tag_trans_src_context {\n  color: #333;\n}\n.lmt__dict .isForeignTerm .tag_trans,\n.lmt__dict .isForeignTerm .tag_trans a,\n.lmt__dict .isForeignTerm .tag_t,\n.lmt__dict .isForeignTerm .tag_t a,\n.lmt__dict .isForeignTerm .tag_trans {\n  color: #006494;\n}\n.lmt__dict .spell_suggestion.isForeignTerm,\n.lmt__dict .spell_suggestion.isForeignTerm .corrected {\n  color: #333;\n}\n.lmt__dict .spell_suggestion,\n.lmt__dict .spell_suggestion .corrected {\n  color: #006494;\n}\n.lmt__dict .line .translation {\n  display: inline-block;\n  line-height: 1em;\n  text-indent: 0;\n}\n.lmt__dict .line.inflectioninfo {\n  display: none;\n}\n.lmt__dict .sep {\n  font-size: 12px;\n  padding-right: 10px;\n  color: #6e6e6e;\n}\n.lmt__dict .tag_forms .sep {\n  padding-left: 5px;\n}\n.lmt__dict .inexact .sep {\n  font-size: 9px;\n}\n.lmt__dict .dash {\n  padding-right: 10px;\n}\n.lmt__dict .exact .lemma_desc .dash {\n  display: none;\n}\n.lmt__dict .lemma_desc .dash {\n  font-size: 14px;\n  font-style: normal;\n  color: #999;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.lmt__dict .inexact .lemma_desc {\n  padding: 0 0 0 0;\n}\n.lmt__dict .inexact .translation_lines,\n.lmt__dict .inexact .translation_group,\n.lmt__dict .inexact .line {\n  display: inline;\n}\n.lmt__dict .inexact .lemma_content {\n  display: inline;\n}\n.lmt__dict .inexact .lemma_desc,\n.lmt__dict #dictionary .inexact h2.lemma_desc {\n  display: inline-block;\n  padding-right: 0;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n}\n.lmt__dict .inexact .lemma_content {\n  padding-left: 0;\n}\n.lmt__dict .inexact .lemma {\n  margin: 1px 0 0 0;\n  text-indent: -10px;\n  padding-left: 20px;\n}\n.lmt__dict .inexact div.singleline {\n  text-indent: 0;\n  padding-left: 0;\n}\n.lmt__dict #dictionary > .expandable > .versionShort > .example_lines {\n  padding-bottom: 15px;\n}\n.lmt__dict #dictionary h3 {\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.lmt__dict a.audio {\n  display: none;\n  position: relative;\n  cursor: pointer;\n  top: 3px;\n  width: 19px;\n  height: 17px;\n  background-position: -40px -38px;\n  opacity: 0.5;\n}\n.lmt__dict .ie7 a.audio,\n.lmt__dict .ie8 a.audio {\n  filter: alpha(opacity=50);\n  background-position: -120px -92px;\n}\n.lmt__dict .inexact a.audio {\n  display: none;\n}\n.lmt__dict .inexact .lemma_desc a.audio,\n.lmt__dict .inexact .translation.expanded a.audio,\n.lmt__dict .inexact .translation.contracting a.audio {\n  display: inline-block;\n}\n.lmt__dict .exact .tag_lemma a.audio {\n  top: 2px;\n}\n.lmt__dict .mouse_device a.audio {\n  opacity: 0.45;\n}\n.lmt__dict .mouse_device a.audio:hover,\n.lmt__dict .mouse_device a.expand_i:hover {\n  opacity: 1;\n}\n.lmt__dict .grammar_info {\n  position: relative;\n  top: -4px;\n  vertical-align: middle;\n  font-size: 0.7em;\n  color: #999;\n  font-style: italic;\n  margin-left: 1px;\n  display: inline-block;\n  text-indent: 0;\n}\n.lmt__dict .exact .grammar_info {\n  top: -5px;\n  margin-left: 2px;\n}\n.lmt__dict #dictionary h2,\n.lmt__dict #dictionary h3 {\n  color: #333;\n  font-weight: 400;\n}\n.lmt__dict #dictionary h2 {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.lmt__dict #dictionary .tag_forms h2 {\n  font-size: 14px;\n}\n.lmt__dict .translation_row.singleline {\n  height: 20px;\n}\n.lmt__dict .singleline {\n  position: relative;\n  padding-right: 20px;\n  height: 20px;\n  overflow: hidden;\n}\n.lmt__dict .singleline > * {\n  line-height: 50px;\n  position: relative;\n  top: -15px;\n}\n.lmt__dict .ie8 .singleline > * {\n  top: -13px;\n  height: 22px;\n}\n.lmt__dict .singleline .tag_s {\n  white-space: nowrap;\n}\n.lmt__dict .expandable {\n  position: relative;\n}\n.lmt__dict .example_lines .expandM,\n.lmt__dict .inexact .expandM {\n  display: block;\n  height: 15px;\n  padding-left: 0px;\n  opacity: 0.7;\n}\n.lmt__dict a.expand_i {\n  width: 17px;\n  height: 17px;\n  position: relative;\n  top: 4px;\n  display: inline-block;\n  background-position: -20px -36px;\n  cursor: pointer;\n  opacity: 0.55;\n  filter: alpha(opacity=55);\n}\n.lmt__dict .translation a.expand_i {\n  background-color: white;\n}\n.lmt__dict .example {\n  padding-left: 45px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n.lmt__dict .expertmode .example {\n  padding-left: 50px;\n}\n.lmt__dict .example .tag_e {\n  display: block;\n  position: relative;\n  max-width: 700px;\n  line-height: 1.1em;\n}\n.lmt__dict .example .tag_s {\n  width: 47%;\n  float: left;\n}\n.lmt__dict .example .tag_t {\n  width: 50%;\n  float: right;\n}\n.lmt__dict .example .tag_e_end {\n  display: block;\n  clear: both;\n}\n.lmt__dict .example .dash {\n  display: none;\n}\n.lmt__dict #soundFlags {\n  display: none;\n}\n.lmt__dict .hidden,\n.lmt__dict #lingueecontent .hidden,\n.lmt__dict #attribution.hidden {\n  display: none;\n}\n.lmt__dict .notascommon {\n  display: block;\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 1.4em;\n}\n.lmt__dict .tag_wordtype {\n  display: inline-block;\n}\n.lmt__dict .tag_forms {\n  display: inline-block;\n}\n.lmt__dict .inexact .lemma {\n  padding-left: 20px;\n}\n.lmt__dict .example_lines > .expandable > .versionshort > .expandM {\n  margin-left: 0;\n}\n.lmt__dict .source_url_spacer {\n  margin-left: 0;\n}\n.lmt__dict .example {\n  padding-left: 30px;\n}\n.lmt__dict .translation_desc {\n  padding-bottom: 0;\n}\n.lmt__dict .translation a.expand_i,\n.lmt__dict .translation a.audio,\n.lmt__dict .inexact .lemma_desc a.audio,\n.lmt__dict .inexact .translation.expanded a.audio {\n  display: none;\n}\n.lmt__dict .inexact .lemma {\n  padding-left: 20px;\n}\n.lmt__dict .example_lines > .expandable > .versionshort > .expandM {\n  margin-left: 0;\n}\n.lmt__dict .source_url_spacer {\n  margin-left: 0;\n}\n.lmt__dict .example {\n  padding-left: 24px;\n}\n.lmt__dict .lemma_desc {\n  margin: 0;\n}\n.lmt__dict .lemma {\n  margin-top: 0;\n}\n.lmt__dict .source {\n  font-size: 24px;\n  color: #d0d0d0;\n}\n.lmt__dict .source .tag_lemma {\n  font-size: 20px;\n  font-weight: 400;\n}\n.lmt__dict .lemma_content {\n  padding-left: 20px;\n  padding-right: 0px;\n}\n.lmt__dict .source .tag_s,\n.lmt__dict .source .tag_usage,\n.lmt__dict .source .tag_formname,\n.lmt__dict .source .formlink,\n.lmt__dict .source .tag_forms,\n.lmt__dict .source .grammar_info {\n  color: #999 !important;\n}\n.lmt__dict .translation:first-of-type h3 {\n  line-height: 1;\n}\n.lmt__dict .translation:first-of-type h3 .dictlink {\n  font-size: 20px;\n}\n.lmt__dict .source {\n  position: relative;\n}\n.lmt__dict .sourceHint {\n  display: none;\n}\n.lmt__dict .notascommon {\n  color: #aaa;\n}\n.lmt__dict .tag_type,\n.lmt__dict .tag_wordtype,\n.lmt__dict .source .tag_s,\n.lmt__dict .source .tag_usage,\n.lmt__dict .source .tag_formname,\n.lmt__dict .source .tag_wordtype,\n.lmt__dict .source .formlink,\n.lmt__dict .source .tag_forms,\n.lmt__dict .source .grammar_info,\n.lmt__dict .tag_c {\n  font-style: normal;\n}\n.lmt__dict .tag_forms {\n  font-style: normal;\n}\n.lmt__dict .tag_forms .tag_s {\n  padding-left: 0px;\n  margin-right: -19px;\n}\n\n#LMT__dict_right {\n  margin-left: 59px;\n}\n\n@keyframes lmt__dict__appear_animation {\n  0% {\n    transform: scale(0.99) translateY(-5px);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.lmt__dict.lmt--is-dict-ready {\n  display: block;\n}\n.lmt__dict .lmt__dict__empty_state {\n  display: none;\n  padding: 16px 24px;\n  color: #6e6e6e;\n  font-size: 16px;\n}\n.lmt__dict #result_container,\n.lmt__dict #wikipedia-body,\n.lmt__dict #wikipedia-header,\n.lmt__dict .copyrightLineOuter,\n.lmt__dict .openTriangle,\n.lmt__dict .expandM {\n  display: none !important;\n}', o = To(), i = new Fo(!1), Mo(n, "lang", "scss"), i.a = null
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), fo(t, o), i.m(e[0], t)
            },
            p(e, [t]) {
                1 & t && i.p(e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function rp(e, t, n) {
        let {
            html: o
        } = t;
        return e.$$set = e => {
            "html" in e && n(0, o = e.html)
        }, [o]
    }
    class lp extends Si {
        constructor(e) {
            super(), ki(this, e, rp, ap, Yn, {
                html: 0
            })
        }
    }

    function cp(e) {
        return e && function (e) {
            return e.replace(/./gm, (function (e) {
                return e.match(/[a-z0-9\s]+/i) ? e : "&#" + e.charCodeAt(0) + ";"
            }))
        }(e).replaceAll("\n", "<br />")
    }
    const dp = new Set(["BG", "CS", "DA", "DE", "EL", "EN", "ES", "ET", "FI", "FR", "FR_CA", "HU", "IT", "JA", "KO", "LT", "LV", "MT", "NL", "PL", "PT", "PT_BR", "PT_PT", "RO", "RU", "SK", "SL", "SV", "ZH"]),
        up = new Map([
            ["ZH_EN", "chinese-english"],
            ["EN_ZH", "english-chinese"],
            ["NL_EN", "dutch-english"],
            ["EN_NL", "english-dutch"],
            ["FR_EN", "french-english"],
            ["EN_FR", "english-french"],
            ["FR_DE", "french-german"],
            ["DE_FR", "german-french"],
            ["FR_PT", "french-portuguese"],
            ["PT_FR", "portuguese-french"],
            ["FR_ES", "french-spanish"],
            ["ES_FR", "spanish-french"],
            ["DE_EN", "german-english"],
            ["EN_DE", "english-german"],
            ["DE_PT", "german-portuguese"],
            ["PT_DE", "portuguese-german"],
            ["DE_ES", "german-spanish"],
            ["ES_DE", "spanish-german"],
            ["IT_EN", "italian-english"],
            ["EN_IT", "english-italian"],
            ["JA_EN", "japanese-english"],
            ["EN_JA", "english-japanese"],
            ["PL_EN", "polish-english"],
            ["EN_PL", "english-polish"],
            ["PT_EN", "portuguese-english"],
            ["EN_PT", "english-portuguese"],
            ["PT_ES", "portuguese-spanish"],
            ["ES_PT", "spanish-portuguese"],
            ["RU_EN", "russian-english"],
            ["EN_RU", "english-russian"],
            ["ES_EN", "spanish-english"],
            ["EN_ES", "english-spanish"]
        ]);

    function pp(e) {
        let t, n, o, i;
        return t = new sp({
            props: {
                headline: "Response - Translated DOM",
                jsonData: e[18]
            }
        }), o = new sp({
            props: {
                headline: "Request - Original DOM",
                jsonData: e[19]
            }
        }), {
            c() {
                Ti(t.$$.fragment), n = To(), Ti(o.$$.fragment)
            },
            m(e, s) {
                Li(t, e, s), vo(e, n, s), Li(o, e, s), i = !0
            },
            p(e, n) {
                const i = {};
                32 & n && (i.jsonData = e[18]), t.$set(i);
                const s = {};
                32 & n && (s.jsonData = e[19]), o.$set(s)
            },
            i(e) {
                i || ($i(t.$$.fragment, e), $i(o.$$.fragment, e), i = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), bi(o.$$.fragment, e), i = !1
            },
            d(e) {
                Ei(t, e), e && $o(n), Ei(o, e)
            }
        }
    }

    function gp(e) {
        let t, n, o, i, s, a = cp(e[5].translatedSnippet) + "",
            r = e[3] === Ne.translate && _p(e),
            l = e[3] === Ne.write && wp(e);
        return {
            c() {
                t = yo("div"), n = To(), r && r.c(), o = To(), l && l.c(), i = Lo(), Mo(t, "class", "result-frame svelte-1rmo0hh")
            },
            m(e, c) {
                vo(e, t, c), t.innerHTML = a, vo(e, n, c), r && r.m(e, c), vo(e, o, c), l && l.m(e, c), vo(e, i, c), s = !0
            },
            p(e, n) {
                (!s || 32 & n) && a !== (a = cp(e[5].translatedSnippet) + "") && (t.innerHTML = a), e[3] === Ne.translate ? r ? (r.p(e, n), 8 & n && $i(r, 1)) : (r = _p(e), r.c(), $i(r, 1), r.m(o.parentNode, o)) : r && (wi(), bi(r, 1, 1, (() => {
                    r = null
                })), vi()), e[3] === Ne.write ? l ? (l.p(e, n), 8 & n && $i(l, 1)) : (l = wp(e), l.c(), $i(l, 1), l.m(i.parentNode, i)) : l && (wi(), bi(l, 1, 1, (() => {
                    l = null
                })), vi())
            },
            i(e) {
                s || ($i(r), $i(l), s = !0)
            },
            o(e) {
                bi(r), bi(l), s = !1
            },
            d(e) {
                e && $o(t), e && $o(n), r && r.d(e), e && $o(o), l && l.d(e), e && $o(i)
            }
        }
    }

    function mp(e) {
        let t, n;
        return t = new Rl({
            props: {
                error: e[5].error
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                32 & n && (o.error = e[5].error), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function hp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h = e[5].originalSnippet.length + "";
        return {
            c() {
                t = yo("div"), n = yo("p"), o = xo(h), i = xo("/5000"), s = To(), a = yo("div"), r = yo("h2"), r.textContent = `${chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_title")}`, l = To(), c = yo("p"), c.textContent = `${chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_body")}`, d = To(), u = yo("div"), p = yo("button"), p.textContent = `${chrome.i18n.getMessage("link_try_deepl")}`, Mo(n, "class", "counter svelte-1rmo0hh"), Mo(r, "class", "svelte-1rmo0hh"), Mo(p, "class", "svelte-1rmo0hh"), Mo(u, "class", "button-row svelte-1rmo0hh"), Mo(a, "class", "box svelte-1rmo0hh"), Mo(t, "class", "anonymous-user-max-char-exceeded svelte-1rmo0hh")
            },
            m(h, f) {
                vo(h, t, f), fo(t, n), fo(n, o), fo(n, i), fo(t, s), fo(t, a), fo(a, r), fo(a, l), fo(a, c), fo(a, d), fo(a, u), fo(u, p), g || (m = Eo(p, "click", e[13]), g = !0)
            },
            p(e, t) {
                32 & t && h !== (h = e[5].originalSnippet.length + "") && Io(o, h)
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), g = !1, m()
            }
        }
    }

    function fp(e) {
        let t, n, o;
        return n = new Ec({}), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "loading-spinner-container svelte-1rmo0hh")
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p: Gn,
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function _p(e) {
        let t, n;
        return t = new Ju({
            props: {
                platformBehaviour: e[2],
                websiteSettings: e[1],
                showDictionary: e[6],
                errorMessageDict: e[8],
                dictionaryHTML: e[7],
                langPair: e[4],
                switchVisibilityDictionary: e[12],
                isSingleWord: e[10]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.platformBehaviour = e[2]), 2 & n && (o.websiteSettings = e[1]), 64 & n && (o.showDictionary = e[6]), 256 & n && (o.errorMessageDict = e[8]), 128 & n && (o.dictionaryHTML = e[7]), 16 & n && (o.langPair = e[4]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function wp(e) {
        let t, n;
        return t = new np({
            props: {
                onClose: e[0]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.onClose = e[0]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function vp(e) {
        let t, n, o, i;
        return n = new lp({
            props: {
                html: e[7]
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "dl__dictionary svelte-1rmo0hh")
            },
            m(e, o) {
                vo(e, t, o), Li(n, t, null), i = !0
            },
            p(e, t) {
                const o = {};
                128 & t && (o.html = e[7]), n.$set(o)
            },
            i(e) {
                i || ($i(n.$$.fragment, e), o || li((() => {
                    o = Ci(t, Ur, {
                        y: -50,
                        duration: 700
                    }), o.start()
                })), i = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function $p(e) {
        let t, n, o, i, a, r, l;
        const d = [fp, hp, mp, gp, pp],
            u = [];

        function p(e, t) {
            return 32 & t && (n = null), null == e[5] || e[5].translationState === s ? 0 : e[5].translationState === c ? 1 : e[5].error ? 2 : e[5].translatedSnippet ? 3 : (null == n && (n = !(!Rt() || !e[5].translatedDOMSnippet)), n ? 4 : -1)
        }~(o = p(e, -1)) && (i = u[o] = d[o](e));
        let g = e[6] && e[7] && vp(e);
        return {
            c() {
                t = yo("div"), i && i.c(), a = To(), g && g.c(), r = Lo(), Mo(t, "class", "tooltip-container svelte-1rmo0hh"), Mo(t, "data-qa", "deepl-inline-translation-result-container")
            },
            m(e, n) {
                vo(e, t, n), ~o && u[o].m(t, null), vo(e, a, n), g && g.m(e, n), vo(e, r, n), l = !0
            },
            p(e, n) {
                let s = o;
                o = p(e, n), o === s ? ~o && u[o].p(e, n) : (i && (wi(), bi(u[s], 1, 1, (() => {
                    u[s] = null
                })), vi()), ~o ? (i = u[o], i ? i.p(e, n) : (i = u[o] = d[o](e), i.c()), $i(i, 1), i.m(t, null)) : i = null), e[6] && e[7] ? g ? (g.p(e, n), 192 & n && $i(g, 1)) : (g = vp(e), g.c(), $i(g, 1), g.m(r.parentNode, r)) : g && (wi(), bi(g, 1, 1, (() => {
                    g = null
                })), vi())
            },
            i(e) {
                l || ($i(i), $i(g), l = !0)
            },
            o(e) {
                bi(i), bi(g), l = !1
            },
            d(e) {
                e && $o(t), ~o && u[o].d(), e && $o(a), g && g.d(e), e && $o(r)
            }
        }
    }

    function bp(e) {
        let t, n, o;
        return n = new bu({
            props: {
                closeWindow: e[11],
                showLangSelect: !0,
                settings: hs,
                websiteSettings: e[1],
                extensionContext: e[9],
                platformBehaviour: e[2],
                textProcessingMode: e[3],
                showSettingsIcon: !0,
                $$slots: {
                    default: [$p]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment)
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p(e, [t]) {
                const o = {};
                2 & t && (o.websiteSettings = e[1]), 4 & t && (o.platformBehaviour = e[2]), 8 & t && (o.textProcessingMode = e[3]), 33554943 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function yp(e, t, n) {
        let o, s, a = Gn,
            r = () => (a(), a = Jn(d, (e => n(5, o = e))), d);
        eo(e, hs, (e => n(17, s = e))), e.$$.on_destroy.push((() => a()));
        let {
            closeTooltip: l
        } = t, {
            websiteSettings: d
        } = t;
        r();
        let u, p, g, m, {
                platformBehaviour: h = Oe.default
            } = t,
            {
                textProcessingMode: f = Ne.translate
            } = t,
            {
                setPositioningStatus: _
            } = t,
            w = "",
            $ = "",
            b = "",
            y = v;

        function C() {
            return !!m && 1 === m.trim().split(" ").length
        }

        function x() {
            const e = w && g && C() ? T : L;
            if (o.originalSnippet && o.originalSnippet !== b) {
                b = o.originalSnippet;
                try {
                    Mn({
                        action: "dltrackDictionaryStatus",
                        payload: {
                            status: e,
                            langPair: g
                        }
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }
        async function E() {
            let e = chrome.i18n.getUILanguage();
            var t;
            e && (t = e, dp.has(t.toUpperCase())) || (e = "EN"), e = e.substring(0, 2).toUpperCase(), n(8, $ = ""), await (ri(), si), Mn({
                action: "dlGetDictionary",
                payload: {
                    interfaceLang: e,
                    sourceLang: o.websiteLanguage,
                    targetLang: s.selectedTargetLanguage,
                    text: m
                }
            }).then((e => {
                n(7, w = e)
            })).catch((e => {
                switch (Mn({
                    action: "dlTrackLingueeErrorData",
                    payload: {
                        lingueeError: e.error
                    }
                }), e.error) {
                    case Vt:
                        n(8, $ = chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary"));
                        break;
                    case Gt:
                        n(8, $ = chrome.i18n.getMessage("ui_inline_translation_no_entry_dictionary", m));
                        break;
                    default:
                        n(8, $ = chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary"))
                }
            })).finally((() => {
                x(), n(6, u = !1)
            }))
        }
        async function k(e) {
            switch (f) {
                case Ne.translate: {
                    const t = await Mt(o.originalSnippet);
                    let n;
                    e === st && (n = "dlTrackGdocsMaxCharExceededShown"), e === at && (n = "dlTrackGDocsMaxCharExceededTryProClicked"), Mn({
                        action: n,
                        payload: {
                            sourceLang: t,
                            targetLang: s.selectedTargetLanguage,
                            sourceLength: o.originalSnippet.length
                        }
                    })
                }
                break;
            case Ne.write: {
                const t = document.getElementsByTagName("deepl-gdocs-icon")[0];
                t && t.trackMaxCharExceeded(e)
            }
            }
        }
        return e.$$set = e => {
            "closeTooltip" in e && n(0, l = e.closeTooltip), "websiteSettings" in e && r(n(1, d = e.websiteSettings)), "platformBehaviour" in e && n(2, h = e.platformBehaviour), "textProcessingMode" in e && n(3, f = e.textProcessingMode), "setPositioningStatus" in e && n(14, _ = e.setPositioningStatus)
        }, e.$$.update = () => {
            if (36 & e.$$.dirty && h === Oe.gdocs && o.translationState === c && o.originalSnippet.length > 0 && k(st), 131104 & e.$$.dirty && o && s && (o.websiteLanguage, s.selectedTargetLanguage, o.originalSnippet), 33 & e.$$.dirty && o && (!o.isTranslationTooltipInjected || o.translationState !== i || o.translatedSnippet || o.error || o.translatedDOMSnippet || l()), 16420 & e.$$.dirty && !o.translationState && h === Oe.default && _ && (_(!0), setTimeout((() => {
                    _(!1)
                }), 600)), 196656 & e.$$.dirty) {
                if (s.selectedTargetLanguage !== o.snippetDetectedSourceLang && o.snippetDetectedSourceLang) {
                    let e = o.snippetDetectedSourceLang,
                        t = s.selectedTargetLanguage;
                    ["EN-GB", "EN-US"].includes(e) && (e = "EN"), ["EN-GB", "EN-US"].includes(t) && (t = "EN"), ["PT-PT", "PT-BR"].includes(e) && (e = "PT"), ["PT-PT", "PT-BR"].includes(t) && (t = "PT"), n(4, g = function (e, t) {
                        const n = `${e.toUpperCase()}_${t.toUpperCase()}`;
                        return up.get(n)
                    }(e, t))
                } else n(4, g = "");
                o.originalSnippet && o.originalSnippet.trim() !== m ? (n(16, m = o.originalSnippet.trim()), n(8, $ = ""), g && C() ? (n(15, p = g), E()) : (n(7, w = ""), x(), n(6, u = !1))) : n(6, u = !1)
            }
            32784 & e.$$.dirty && g != p && g && C() && E()
        }, [l, d, h, f, g, o, u, w, $, y, C, function () {
            Mn({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: ue,
                    nicheIntegration: h
                }
            }), l()
        }, function () {
            g && C() && w && !$ && n(6, u = !u)
        }, function () {
            k(at), Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ji,
                    utmContent: "gdocs_customization"
                }
            })
        }, _, p, m, s, () => o.translatedDOMSnippet, () => o.originalSnippet]
    }
    class Cp extends Si {
        constructor(e) {
            super(), ki(this, e, yp, bp, Yn, {
                closeTooltip: 0,
                websiteSettings: 1,
                platformBehaviour: 2,
                textProcessingMode: 3,
                setPositioningStatus: 14
            })
        }
    }

    function xp(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return a = new Cp({
            props: {
                closeTooltip: e[0],
                websiteSettings: e[1],
                platformBehaviour: e[2],
                textProcessingMode: e[3],
                setPositioningStatus: e[7]
            }
        }), {
            c() {
                t = yo("div"), n = yo("div"), i = To(), s = yo("div"), Ti(a.$$.fragment), Mo(n, "class", "tooltip-drag-handle svelte-1ur3i4z"), Mo(n, "style", o = `max-height: ${e[4]}px`), Mo(s, "class", "tooltip-body svelte-1ur3i4z"), Mo(t, "class", "tooltip-wrapper svelte-1ur3i4z"), Mo(t, "style", e[6]), Mo(t, "draggable", e[5]), li((() => e[16].call(t)))
            },
            m(o, u) {
                vo(o, t, u), fo(t, n), fo(t, i), fo(t, s), Li(a, s, null), r = Po(t, e[16].bind(t)), l = !0, c || (d = [Eo(n, "mouseover", e[10]), Eo(n, "mouseout", e[11]), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[17]), Eo(t, "drag", e[9]), Eo(t, "dragstart", e[8])], c = !0)
            },
            p(e, [i]) {
                (!l || 16 & i && o !== (o = `max-height: ${e[4]}px`)) && Mo(n, "style", o);
                const s = {};
                1 & i && (s.closeTooltip = e[0]), 2 & i && (s.websiteSettings = e[1]), 4 & i && (s.platformBehaviour = e[2]), 8 & i && (s.textProcessingMode = e[3]), a.$set(s), (!l || 64 & i) && Mo(t, "style", e[6]), (!l || 32 & i) && Mo(t, "draggable", e[5])
            },
            i(e) {
                l || ($i(a.$$.fragment, e), l = !0)
            },
            o(e) {
                bi(a.$$.fragment, e), l = !1
            },
            d(e) {
                e && $o(t), Ei(a), r(), c = !1, Xn(d)
            }
        }
    }

    function Tp(e, t, n) {
        let o;
        eo(e, hs, (e => n(15, o = e))), Yo("deepl_settings", hs);
        let i, {
                closeTooltip: s
            } = t,
            {
                websiteSettings: a
            } = t,
            {
                replaceElement: r
            } = t,
            {
                actualPosition: l
            } = t,
            {
                dragContainerTo: c
            } = t,
            {
                platformBehaviour: d = Oe.default
            } = t,
            {
                textProcessingMode: u = Ne.translate
            } = t,
            p = !1,
            g = !1,
            m = "visibility: hidden; opacity:0; height:0;";
        let h = {
            x: 0,
            y: 0
        };
        Ko((() => {
            setTimeout((() => {
                n(6, m = "")
            }), 100)
        }));
        return e.$$set = e => {
            "closeTooltip" in e && n(0, s = e.closeTooltip), "websiteSettings" in e && n(1, a = e.websiteSettings), "replaceElement" in e && n(13, r = e.replaceElement), "actualPosition" in e && n(12, l = e.actualPosition), "dragContainerTo" in e && n(14, c = e.dragContainerTo), "platformBehaviour" in e && n(2, d = e.platformBehaviour), "textProcessingMode" in e && n(3, u = e.textProcessingMode)
        }, e.$$.update = () => {
            var t, s;
            32768 & e.$$.dirty && n(12, (t = o.inlineTranslateTooltipPosition, l = r(i, t))), 16 & e.$$.dirty && n(12, (s = i, l = g || d === Oe.gdocs ? r(s, o.inlineTranslateTooltipPosition) : l))
        }, [s, a, d, u, i, p, m, e => {
            g = e
        }, function (e) {
            const t = e.target.getBoundingClientRect();
            h.x = e.clientX - t.left, h.y = e.clientY - t.top;
            const n = document.createElement("img");
            n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.dataTransfer.setDragImage(n, 0, 0),
                function () {
                    try {
                        Mn({
                            action: "dlTrackInlineDragStart",
                            payload: {
                                nicheIntegration: d
                            }
                        })
                    } catch (e) {
                        console.error(e)
                    }
                }()
        }, function (e) {
            0 !== e.y && 0 !== e.x && c({
                x: e.pageX - h.x,
                y: e.pageY - h.y
            })
        }, function () {
            n(5, p = !0)
        }, function () {
            n(5, p = !1)
        }, l, r, c, o, function () {
            i = this.clientHeight, n(4, i)
        }, () => s()]
    }
    class Lp extends Si {
        constructor(e) {
            super(), ki(this, e, Tp, xp, Yn, {
                closeTooltip: 0,
                websiteSettings: 1,
                replaceElement: 13,
                actualPosition: 12,
                dragContainerTo: 14,
                platformBehaviour: 2,
                textProcessingMode: 3
            })
        }
    }
    class Ep extends HTMLElement {
        constructor() {
            super(), this.platformBehaviour = Oe.default, this.textProcessingMode = Ne.translate, this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.container = document.createElement("div"), this.mainComponent, this.selectionRange;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.dragContainerTo = this.dragContainerTo.bind(this)
        }
        createDOM(e, t, n) {
            const {
                deepl_inline_ui: o
            } = M;
            this.shadowContainer && this.shadowContainer.childElementCount > 0 && this.cleanupDOM(), this.platformBehaviour === Oe.default && (this.selectionRange = window.getSelection().getRangeAt(0));
            let i = e(this.selectionRange);
            this.shadowContainer.appendChild(this.container);
            let s = "position: absolute; top: 0px; left: 0px; width: 100%; z-index: " + (o.z_index - 100),
                a = `position: absolute; top: ${i.y}px; left: ${i.x-200}px; z-index: ${o.z_index-100};`;
            switch (this.platformBehaviour) {
                case Oe.gdocs:
                    a += "top: 600px; left: 10px;";
                    break;
                case Oe.default:
                default:
                    a += ""
            }
            this.shadowContainer.style.cssText = s, this.container.style.cssText = a, this.mainComponent = new Lp({
                target: this.container,
                props: {
                    closeTooltip: t,
                    websiteSettings: n,
                    replaceElement: (t, n) => {
                        i = e(this.selectionRange);
                        const o = {
                            coords: i,
                            clientHeight: t,
                            TOOLTIP_WIDTH: 550,
                            TRIGGER_MENU_ICON_HEIGHT: 30,
                            style: this.container.style
                        };
                        let s = n;
                        const a = Pu(o),
                            [r, l] = (e => {
                                const t = ["bottom", "top", "left", "right", "middle"];
                                return t.sort(((t, n) => t === e ? -1 : n === e ? 1 : 0)), [t, ["bottom", "top", "middle"]]
                            })(n);
                        if (this.platformBehaviour === Oe.gdocs) {
                            for (const e of l)
                                if (Ru(e, o)) {
                                    Au(e, o);
                                    break
                                }
                        } else
                            for (const e of r)
                                if (Ru(e, o)) {
                                    s = "middle" !== e ? e : void 0, Nu(e, o);
                                    break
                                } return {
                            ...a,
                            current: s
                        }
                    },
                    platformBehaviour: this.platformBehaviour,
                    textProcessingMode: this.textProcessingMode,
                    dragContainerTo: this.dragContainerTo
                }
            })
        }
        dragContainerTo(e) {
            this.container.style.top = `${e.y}px`, this.container.style.left = `${e.x}px`
        }
        cleanupDOM() {
            this.container.remove(), this.shadowContainer.remove(), this.shadowContainer = document.createElement("div"), this.container = document.createElement("div"), this.shadow.appendChild(this.shadowContainer), this.mainComponent && this.mainComponent.$destroy()
        }
    }
    window.customElements.define("deepl-inline-translate-tooltip", Ep);
    const kp = [{
        domain: "zendesk.com",
        selectors: ['div[data-test-id="ticket-rich-text-editor"] [contenteditable="true"]'],
        uniqueDataAttributes: [{
            key: "testId",
            value: "ticket-rich-text-editor"
        }]
    }];
    const Sp = "GENERAL_SETTINGS",
        Mp = "INPUT_SETTINGS",
        Ip = async e => {
            let t = e.ownerDocument,
                n = hr(e).getSelection();
            const o = n && n.baseNode && "#text" == n.baseNode.nodeName && "Range" == n.type && (e.contains(n.baseNode) || function (e, t) {
                return "IFRAME" === e.nodeName.toUpperCase() && wr(e) === t.ownerDocument
            }(e, n.baseNode));
            o || (e.focus(), await br(e)), n = hr(e).getSelection();
            const {
                domElements: i,
                strings: s,
                container: a
            } = function ({
                thisDocument: e,
                selection: t
            }) {
                let n;
                t.getRangeAt ? n = t.getRangeAt(0) : (n = e.createRange(), n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset));
                const o = n.cloneContents(),
                    i = document.createElement("div");
                i.appendChild(o), i.style.display = "none", document.body.appendChild(i);
                const {
                    domElements: s,
                    strings: a
                } = zn(i);
                return {
                    domElements: s,
                    strings: a,
                    container: i
                }
            }({
                thisDocument: t,
                selection: n
            });
            return {
                domElements: i,
                strings: s,
                container: a,
                isSubtextSelected: o
            }
        };
    const Dp = e => {
        const {
            domElements: t,
            strings: n,
            cloneContainer: o
        } = function (e) {
            const t = e.cloneNode(!0),
                n = document.createElement("div");
            n.appendChild(t), n.style.display = "none", document.body.appendChild(n);
            const {
                domElements: o,
                strings: i
            } = zn(n);
            return {
                domElements: o,
                strings: i,
                cloneContainer: n
            }
        }(e);
        return {
            domElements: t,
            strings: n,
            cloneContainer: o
        }
    };
    async function Op(e, t = !1, n = null) {
        let o, i = {},
            s = [];
        const a = !kr(e);
        if (a) i = await Ip(e), s = i.strings.map((e => ({
            text: e
        })));
        else {
            const t = e.value;
            Sr(e) && (i.isSubtextSelected = !0), o = i.isSubtextSelected ? t.substring(e.selectionStart, e.selectionEnd) : t, s.push({
                text: o
            })
        }
        if (0 === s.length) return;
        let r, l;
        try {
            r = document.documentElement.lang
        } catch (e) {
            console.error(e)
        }
        l = t ? await Mn({
            action: "dlRequestImproveWriting",
            payload: {
                requests: s,
                domainName: window.location.hostname,
                websiteLanguage: r
            }
        }) : await Mn({
            action: "dlRequestInputTranslation",
            payload: {
                requests: s,
                domainName: window.location.hostname,
                websiteLanguage: r,
                targetLang: n
            }
        });
        const c = {
            text: "",
            html: ""
        };
        a ? (Fn({
            strings: l[0] ? .texts,
            domElements: i.domElements
        }), c.text = i.container.innerText, c.html = i.container.innerHTML, i.container.remove()) : (c.text = l[0].text, c.html = l[0].text), a && !i.isSubtextSelected && (e => {
            const t = vr(e),
                n = fr(e);
            if (Lr("keydown", e)) {
                const o = new t.InputEvent("beforeinput", {
                    bubbles: !0,
                    cancelable: !0,
                    inputType: "deleteContent"
                });
                e.dispatchEvent(o) && n.execCommand("delete", !1)
            }
            Lr("keyup", e)
        })(e), await Mr(e, c, i.isSubtextSelected)
    }

    function Np(e) {
        let t;
        return {
            c() {
                t = yo("span"), Mo(t, "class", "svelte-rj6qvq")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Ap(e) {
        let t;
        return {
            c() {
                t = yo("span"), Mo(t, "class", "svelte-rj6qvq")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Rp(e) {
        let t;
        return {
            c() {
                t = yo("span"), Mo(t, "class", "svelte-rj6qvq")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Pp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        return o = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("input_translation_tooltip_turnoff"),
                $$slots: {
                    default: [Np]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), a = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("input_translation_tooltip_settings"),
                $$slots: {
                    default: [Ap]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), c = new Bd({
            props: {
                tooltip: e[4],
                $$slots: {
                    default: [Rp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("div"), n = yo("div"), Ti(o.$$.fragment), i = To(), s = yo("div"), Ti(a.$$.fragment), r = To(), l = yo("div"), Ti(c.$$.fragment), d = To(), u = yo("div"), Mo(n, "class", "dl-icon-circle dl-on-off svelte-rj6qvq"), Mo(s, "class", "dl-icon-circle dl-settings svelte-rj6qvq"), Mo(l, "class", "dl-icon-circle dl-icon svelte-rj6qvq"), Mo(u, "class", "dl-icon-circle dl-loading svelte-rj6qvq"), Mo(t, "class", "dl-input-icon svelte-rj6qvq"), zo(t, "is-input-translation-disabled", e[5]), zo(t, "is-loading", e[3]), zo(t, "is-minimized", e[2])
            },
            m(h, f) {
                vo(h, t, f), fo(t, n), Li(o, n, null), fo(t, i), fo(t, s), Li(a, s, null), fo(t, r), fo(t, l), Li(c, l, null), e[24](l), fo(t, d), fo(t, u), p = !0, g || (m = [Eo(n, "mouseenter", e[19]), Eo(n, "click", e[20]), Eo(s, "mouseenter", e[21]), Eo(s, "click", e[22]), Eo(l, "click", e[8]), Eo(l, "mouseenter", e[23])], g = !0)
            },
            p(e, n) {
                const i = {};
                1 & n[1] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), o.$set(i);
                const s = {};
                1 & n[1] && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }), a.$set(s);
                const r = {};
                16 & n[0] && (r.tooltip = e[4]), 1 & n[1] && (r.$$scope = {
                    dirty: n,
                    ctx: e
                }), c.$set(r), (!p || 32 & n[0]) && zo(t, "is-input-translation-disabled", e[5]), (!p || 8 & n[0]) && zo(t, "is-loading", e[3]), (!p || 4 & n[0]) && zo(t, "is-minimized", e[2])
            },
            i(e) {
                p || ($i(o.$$.fragment, e), $i(a.$$.fragment, e), $i(c.$$.fragment, e), p = !0)
            },
            o(e) {
                bi(o.$$.fragment, e), bi(a.$$.fragment, e), bi(c.$$.fragment, e), p = !1
            },
            d(n) {
                n && $o(t), Ei(o), Ei(a), Ei(c), e[24](null), g = !1, Xn(m)
            }
        }
    }

    function zp(e, t, n) {
        let o, i;
        const s = Jo("deepl_settings");
        eo(e, s, (e => n(18, i = e)));
        let a, r, {
                inputArea: l
            } = t,
            {
                lockActiveElement: c
            } = t,
            {
                openSettings: d
            } = t,
            {
                closeSettings: u
            } = t,
            {
                hideOnboardingHighlighter: p
            } = t,
            {
                registerIconCallbacks: g
            } = t,
            {
                unregisterIconCallbacks: m
            } = t,
            {
                getActiveElement: h
            } = t,
            {
                setErrorMessage: f
            } = t,
            _ = !1,
            w = !1,
            v = "";
        const $ = () => {
                b()
            },
            b = () => {
                n(2, _ = Ir(l, a))
            };
        async function y(e) {
            await s.set({
                targetLanguageUserInput: e.value,
                regionalVariant: e.regionalVariant
            }), x()
        }
        const C = async (e, t, o) => {
            const s = h();
            switch (e.action) {
                case "dlTriggerTranslationShortcut":
                    if (f(void 0), s !== l) return;
                    try {
                        Mn({
                            action: "dlTrackUseOfShortcut",
                            payload: {
                                shortcutType: le,
                                location: H
                            }
                        })
                    } catch (e) {
                        console.error(e)
                    }
                    if (i && i.targetLanguageUserInput) {
                        n(3, w = !0);
                        try {
                            await Op(l)
                        } catch (e) {
                            f(e)
                        }
                        n(3, w = !1)
                    } else d({
                        fromShortcut: !0
                    });
                    o();
                    break;
                case "dlChangeLanguageShortcut":
                    if (s !== l) return;
                    n(3, w = !0);
                    try {
                        d({
                            fromShortcut: !0
                        })
                    } catch (e) {
                        f(e)
                    }
                    n(3, w = !1), o()
            }
        };
        async function x() {
            if (f(void 0), p(), i.targetLanguageUserInput && "undefined" != i.targetLanguageUserInput) {
                u(), n(3, w = !0);
                try {
                    await Op(l), r || In(I)
                } catch (e) {
                    f(e)
                }
                n(3, w = !1)
            } else d()
        }

        function T(e) {
            Mn({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host
                }
            })
        }
        Ko((() => {
            chrome.runtime.onMessage.addListener(C), g({
                processRefreshCycle: $,
                languageChanged: y,
                triggerTranslation: x
            })
        })), Xo((() => {
            chrome.runtime.onMessage.removeListener(C), m()
        }));
        return e.$$set = e => {
            "inputArea" in e && n(9, l = e.inputArea), "lockActiveElement" in e && n(10, c = e.lockActiveElement), "openSettings" in e && n(0, d = e.openSettings), "closeSettings" in e && n(11, u = e.closeSettings), "hideOnboardingHighlighter" in e && n(12, p = e.hideOnboardingHighlighter), "registerIconCallbacks" in e && n(13, g = e.registerIconCallbacks), "unregisterIconCallbacks" in e && n(14, m = e.unregisterIconCallbacks), "getActiveElement" in e && n(15, h = e.getActiveElement), "setErrorMessage" in e && n(16, f = e.setErrorMessage)
        }, e.$$.update = () => {
            if (262144 & e.$$.dirty[0])
                if (i.targetLanguageUserInput && "undefined" != i.targetLanguageUserInput) {
                    let e;
                    Mn({
                        action: "dlCheckCommandShortcuts"
                    }).then((t => {
                        e = t ? t.filter((e => e.name == le))[0].shortcut : "", e ? (e = `(${e})`, r = !0) : r = !1, n(4, v = `${chrome.i18n.getMessage("input_translation_tooltip_translate")} ${e}`)
                    }))
                } else n(4, v = chrome.i18n.getMessage("input_translation_tooltip_translate_to_unknown"));
            var t, s;
            262144 & e.$$.dirty[0] && n(5, o = !i.enableInputTranslation || (t = window.location.host, s = window.location.href, ji(t, E) || ji(s, k)) || i.blacklistDomainsForWriting.includes(window.location.host) || i.isGmailEnabled && On())
        }, [d, a, _, w, v, o, s, T, () => {
            c(), i.targetLanguageUserInput ? x() : d()
        }, l, c, u, p, g, m, h, f, y, i, () => T(F), () => d({
            page: Mp
        }), () => T(F), () => d({
            page: Sp
        }), () => T(H), function (e) {
            ni[e ? "unshift" : "push"]((() => {
                a = e, n(1, a)
            }))
        }]
    }
    class Hp extends Si {
        constructor(e) {
            super(), ki(this, e, zp, Pp, Yn, {
                inputArea: 9,
                lockActiveElement: 10,
                openSettings: 0,
                closeSettings: 11,
                hideOnboardingHighlighter: 12,
                registerIconCallbacks: 13,
                unregisterIconCallbacks: 14,
                getActiveElement: 15,
                setErrorMessage: 16,
                onLanguageChanged: 17
            }, null, [-1, -1])
        }
        get onLanguageChanged() {
            return this.$$.ctx[17]
        }
    }

    function Fp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b;
        return {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), i = yo("div"), s = To(), a = yo("div"), r = yo("div"), r.textContent = `${chrome.i18n.getMessage("input_translation_highlighter_tooltip_headline")}`, l = To(), c = yo("div"), c.textContent = `${chrome.i18n.getMessage("input_translation_highlighter_tooltip_text")}`, d = To(), u = yo("div"), p = To(), g = yo("button"), Mo(i, "class", "logo svelte-1pcvyio"), Mo(r, "class", "headline svelte-1pcvyio"), Mo(a, "class", "text-wrapper svelte-1pcvyio"), Mo(o, "class", "content svelte-1pcvyio"), Mo(u, "class", "logo-picture svelte-1pcvyio"), Mo(g, "class", "close-icon svelte-1pcvyio"), Mo(n, "class", m = ao(`body body__${e[0]}`) + " svelte-1pcvyio"), Mo(t, "class", h = "container container__" + e[0] + " svelte-1pcvyio"), li((() => e[11].call(t)))
            },
            m(m, h) {
                vo(m, t, h), fo(t, n), fo(n, o), fo(o, i), fo(o, s), fo(o, a), fo(a, r), fo(a, l), fo(a, c), fo(n, d), fo(n, u), fo(n, p), fo(n, g), f = Po(t, e[11].bind(t)), v = !0, $ || (b = Eo(g, "click", e[10]), $ = !0)
            },
            p(e, o) {
                (!v || 1 & o && m !== (m = ao(`body body__${e[0]}`) + " svelte-1pcvyio")) && Mo(n, "class", m), (!v || 1 & o && h !== (h = "container container__" + e[0] + " svelte-1pcvyio")) && Mo(t, "class", h)
            },
            i(e) {
                v || (li((() => {
                    w && w.end(1), _ = Ci(t, Ur, {
                        x: 100,
                        duration: 1e3
                    }), _.start()
                })), v = !0)
            },
            o(e) {
                _ && _.invalidate(), w = xi(t, Ur, {
                    x: 100,
                    duration: 1e3
                }), v = !1
            },
            d(e) {
                e && $o(t), f(), e && w && w.end(), $ = !1, b()
            }
        }
    }

    function Bp(e) {
        let t, n, o = e[1] && Fp(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                e[1] ? o ? (o.p(e, n), 2 & n && $i(o, 1)) : (o = Fp(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function Up(t, n, o) {
        let {
            onClose: i
        } = n, {
            icon: s
        } = n, {
            position: a = "top"
        } = n, {
            registerHighlighterCallbacks: r
        } = n, {
            unregisterHighlighterCallbacks: l
        } = n, c = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, d = {
            height: 0,
            width: 0
        }, u = 140, p = 387;
        const g = () => {
            if (s) {
                const e = s.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"]) e[n] !== c[n] && (t[n] = e[n]);
                Object.keys(t).length && o(8, c = {
                    ...c,
                    ...t
                });
                let n = {};
                window.innerHeight !== d.height && (n.height = window.innerHeight), window.innerWidth !== d.width && (n.width = window.innerWidth), Object.keys(n).length && o(9, d = {
                    ...d,
                    ...n
                })
            } else o(8, c = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        };

        function m() {
            i(Me)
        }
        Ko((async () => {
            r({
                recalculateHighlighterCoords: g
            });
            try {
                Mn({
                    action: "dltrackOpenInputHighlighter",
                    payload: {
                        domainName: e.websiteData.hostname
                    }
                }), g()
            } catch (e) {
                console.error(e)
            }
        })), Xo((() => {
            l()
        }));
        return t.$$set = e => {
            "onClose" in e && o(5, i = e.onClose), "icon" in e && o(1, s = e.icon), "position" in e && o(0, a = e.position), "registerHighlighterCallbacks" in e && o(6, r = e.registerHighlighterCallbacks), "unregisterHighlighterCallbacks" in e && o(7, l = e.unregisterHighlighterCallbacks)
        }, t.$$.update = () => {
            780 & t.$$.dirty && o(0, a = (({
                iconCoordinates: e,
                viewportSize: t,
                highlighterHeight: n,
                highlighterWidth: o
            }) => {
                if (!s) return "top";
                const i = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e, t] of Object.entries(i))
                    if (t) return e;
                return "top"
            })({
                iconCoordinates: c,
                viewportSize: d,
                highlighterHeight: u,
                highlighterWidth: p
            }))
        }, [a, s, u, p, m, i, r, l, c, d, () => m(), function () {
            u = this.clientHeight, p = this.clientWidth, o(2, u), o(3, p)
        }]
    }
    class qp extends Si {
        constructor(e) {
            super(), ki(this, e, Up, Bp, Yn, {
                onClose: 5,
                icon: 1,
                position: 0,
                registerHighlighterCallbacks: 6,
                unregisterHighlighterCallbacks: 7
            })
        }
    }

    function jp(e) {
        let t, n, o, i, s;
        return i = new xc({
            props: {
                value: e[2].targetLanguageUserInput,
                showChooseLanguageOption: !0,
                fontSize: "sm"
            }
        }), i.$on("selection", e[5]), {
            c() {
                t = yo("p"), n = xo(e[0]), o = To(), Ti(i.$$.fragment), Mo(t, "class", "font-bold svelte-1bwyi2r")
            },
            m(e, a) {
                vo(e, t, a), fo(t, n), vo(e, o, a), Li(i, e, a), s = !0
            },
            p(e, t) {
                (!s || 1 & t) && Io(n, e[0]);
                const o = {};
                4 & t && (o.value = e[2].targetLanguageUserInput), i.$set(o)
            },
            i(e) {
                s || ($i(i.$$.fragment, e), s = !0)
            },
            o(e) {
                bi(i.$$.fragment, e), s = !1
            },
            d(e) {
                e && $o(t), e && $o(o), Ei(i, e)
            }
        }
    }

    function Wp(e) {
        let t, n, o = (e[2].enableInputTranslation || e[1]) && jp(e);
        return {
            c() {
                t = yo("div"), o && o.c()
            },
            m(e, i) {
                vo(e, t, i), o && o.m(t, null), n = !0
            },
            p(e, [n]) {
                e[2].enableInputTranslation || e[1] ? o ? (o.p(e, n), 6 & n && $i(o, 1)) : (o = jp(e), o.c(), $i(o, 1), o.m(t, null)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                e && $o(t), o && o.d()
            }
        }
    }

    function Gp(e, t, n) {
        let o;
        const i = Jo("deepl_settings");
        eo(e, i, (e => n(2, o = e)));
        const s = Qo();
        let {
            subHeaderText: a = chrome.i18n.getMessage("input_translation_settings_target_language")
        } = t, {
            fromShortcut: r
        } = t;

        function l(e) {
            s("languageChanged", {
                lang: e
            })
        }
        return e.$$set = e => {
            "subHeaderText" in e && n(0, a = e.subHeaderText), "fromShortcut" in e && n(1, r = e.fromShortcut)
        }, [a, r, o, i, l, e => l(e.detail.selectedOption)]
    }
    class Vp extends Si {
        constructor(e) {
            super(), ki(this, e, Gp, Wp, Yn, {
                subHeaderText: 0,
                fromShortcut: 1
            })
        }
    }

    function Zp(e) {
        let t, n, o, i, s, a, r, l, c;
        const d = e[4].default,
            u = to(d, e, e[3], null);
        return {
            c() {
                t = yo("div"), n = yo("div"), o = yo("button"), i = To(), s = yo("div"), u && u.c(), Mo(o, "type", "button"), Mo(o, "class", "close-icon svelte-1ux16nh"), Mo(n, "class", "header svelte-1ux16nh"), Mo(s, "class", "content"), Mo(t, "class", "container svelte-1ux16nh"), li((() => e[6].call(t)))
            },
            m(d, p) {
                vo(d, t, p), fo(t, n), fo(n, o), fo(t, i), fo(t, s), u && u.m(s, null), a = Po(t, e[6].bind(t)), r = !0, l || (c = Eo(o, "click", e[5]), l = !0)
            },
            p(e, [t]) {
                u && u.p && (!r || 8 & t) && io(u, d, e, e[3], r ? oo(d, e[3], t, null) : so(e[3]), null)
            },
            i(e) {
                r || ($i(u, e), r = !0)
            },
            o(e) {
                bi(u, e), r = !1
            },
            d(e) {
                e && $o(t), u && u.d(e), a(), l = !1, c()
            }
        }
    }

    function Kp(e, t, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = t;
        const s = Qo();
        let a, r;
        return e.$$set = e => {
            "$$scope" in e && n(3, i = e.$$scope)
        }, e.$$.update = () => {
            3 & e.$$.dirty && s("resize", {
                offsetHeight: a,
                offsetWidth: r
            })
        }, [a, r, s, i, o, () => s("close"), function () {
            a = this.offsetHeight, r = this.offsetWidth, n(0, a), n(1, r)
        }]
    }
    class Xp extends Si {
        constructor(e) {
            super(), ki(this, e, Kp, Zp, Yn, {})
        }
    }

    function Qp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w = chrome.i18n.getMessage("input_translation_setting_button_ok") + "";
        return s = new xu({
            props: {
                name: "disable_input_translation",
                id: ge,
                value: ge,
                cssClassName: "radio--with-border",
                checked: e[6] === ge,
                label: chrome.i18n.getMessage("input_translation_setting_radio_disable_per_site"),
                dataQa: "input-translation_hide-icon_disable-per-site"
            }
        }), s.$on("change", e[14]), r = new xu({
            props: {
                name: "disable_input_translation",
                id: me,
                value: me,
                cssClassName: "radio--with-border",
                checked: e[6] === me,
                label: chrome.i18n.getMessage("input_translation_setting_radio_disable_everywhere"),
                dataQa: "input-translation_hide-icon_disable-always"
            }
        }), r.$on("change", e[14]), {
            c() {
                t = yo("div"), n = yo("p"), n.textContent = `${chrome.i18n.getMessage("input_translation_setting_label_title_v2")}`, o = To(), i = yo("div"), Ti(s.$$.fragment), a = To(), Ti(r.$$.fragment), l = To(), c = yo("div"), d = yo("span"), d.textContent = `${chrome.i18n.getMessage("input_translation_setting_link_cancel")}`, u = To(), p = yo("button"), g = xo(w), Mo(n, "class", "font-bold svelte-1ogsz17"), Mo(i, "class", "option-container svelte-1ogsz17"), Mo(d, "class", "link svelte-1ogsz17"), Mo(p, "class", m = ao("btn btn-primary " + (e[6] ? "" : "disabled")) + " svelte-1ogsz17"), Mo(p, "data-qa", "input-translation_hide-icon_accept"), Mo(c, "class", "action-container svelte-1ogsz17"), Mo(t, "class", "dl-widget svelte-1ogsz17"), Mo(t, "data-qa", "dl-input-translate-turnoff-settings")
            },
            m(m, w) {
                vo(m, t, w), fo(t, n), fo(t, o), fo(t, i), Li(s, i, null), fo(i, a), Li(r, i, null), fo(t, l), fo(t, c), fo(c, d), fo(c, u), fo(c, p), fo(p, g), h = !0, f || (_ = [Eo(d, "click", (function () {
                    Qn(e[1] === Mp ? e[9] : e[11]) && (e[1] === Mp ? e[9] : e[11]).apply(this, arguments)
                })), Eo(p, "click", e[13])], f = !0)
            },
            p(t, n) {
                e = t;
                const o = {};
                64 & n && (o.checked = e[6] === ge), s.$set(o);
                const i = {};
                64 & n && (i.checked = e[6] === me), r.$set(i), (!h || 64 & n && m !== (m = ao("btn btn-primary " + (e[6] ? "" : "disabled")) + " svelte-1ogsz17")) && Mo(p, "class", m)
            },
            i(e) {
                h || ($i(s.$$.fragment, e), $i(r.$$.fragment, e), h = !0)
            },
            o(e) {
                bi(s.$$.fragment, e), bi(r.$$.fragment, e), h = !1
            },
            d(e) {
                e && $o(t), Ei(s), Ei(r), f = !1, Xn(_)
            }
        }
    }

    function Yp(e) {
        let t, n, o, i, s;
        n = new Vp({
            props: {
                fromShortcut: e[2]
            }
        }), n.$on("languageChanged", e[22]);
        let a = e[7] && e[7].targetLanguageUserInput && Jp(e);
        return {
            c() {
                t = yo("div"), Ti(n.$$.fragment), o = To(), a && a.c(), i = Lo(), Mo(t, "class", "dl-widget svelte-1ogsz17")
            },
            m(e, r) {
                vo(e, t, r), Li(n, t, null), vo(e, o, r), a && a.m(e, r), vo(e, i, r), s = !0
            },
            p(e, t) {
                const o = {};
                4 & t && (o.fromShortcut = e[2]), n.$set(o), e[7] && e[7].targetLanguageUserInput ? a ? a.p(e, t) : (a = Jp(e), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null)
            },
            i(e) {
                s || ($i(n.$$.fragment, e), s = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), s = !1
            },
            d(e) {
                e && $o(t), Ei(n), e && $o(o), a && a.d(e), e && $o(i)
            }
        }
    }

    function Jp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        return {
            c() {
                t = yo("div"), n = yo("div"), o = yo("p"), o.textContent = `${chrome.i18n.getMessage("input_translation_label_show_icon_switch")}`, i = To(), s = yo("span"), a = To(), r = yo("div"), l = yo("div"), c = yo("div"), d = yo("span"), d.textContent = `${chrome.i18n.getMessage("input_translation_link_more_settings")}`, u = To(), p = yo("span"), Mo(o, "class", "svelte-1ogsz17"), Mo(s, "class", "icon icon-toggle-on svelte-1ogsz17"), Mo(n, "class", "link-input-settings svelte-1ogsz17"), Mo(n, "data-qa", "deepl-input-translate-hide-extension"), Mo(t, "class", "dl-widget svelte-1ogsz17"), Mo(p, "class", "icon icon-external-link  svelte-1ogsz17"), Mo(c, "class", "link link-settings svelte-1ogsz17"), Mo(c, "data-qa", "dl-input-translate-open-settings-page"), Mo(l, "class", "action-container svelte-1ogsz17"), Mo(r, "class", "dl-widget svelte-1ogsz17")
            },
            m(h, f) {
                vo(h, t, f), fo(t, n), fo(n, o), fo(n, i), fo(n, s), vo(h, a, f), vo(h, r, f), fo(r, l), fo(l, c), fo(c, d), fo(c, u), fo(c, p), g || (m = [Eo(n, "click", e[10]), Eo(c, "click", e[12])], g = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), e && $o(a), e && $o(r), g = !1, Xn(m)
            }
        }
    }

    function eg(e) {
        let t, n, o, i;
        const s = [Yp, Qp],
            a = [];

        function r(e, t) {
            return e[5] === Sp ? 0 : e[5] === Mp ? 1 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)), {
            c() {
                n && n.c(), o = Lo()
            },
            m(e, n) {
                ~t && a[t].m(e, n), vo(e, o, n), i = !0
            },
            p(e, i) {
                let l = t;
                t = r(e), t === l ? ~t && a[t].p(e, i) : (n && (wi(), bi(a[l], 1, 1, (() => {
                    a[l] = null
                })), vi()), ~t ? (n = a[t], n ? n.p(e, i) : (n = a[t] = s[t](e), n.c()), $i(n, 1), n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || ($i(n), i = !0)
            },
            o(e) {
                bi(n), i = !1
            },
            d(e) {
                ~t && a[t].d(e), e && $o(o)
            }
        }
    }

    function tg(e) {
        let t, n, o, i, s;
        return n = new Xp({
            props: {
                $$slots: {
                    default: [eg]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), n.$on("close", e[23]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", o = "settings-container settings-container__" + e[0] + " svelte-1ogsz17"), li((() => e[24].call(t)))
            },
            m(o, a) {
                vo(o, t, a), Li(n, t, null), i = Po(t, e[24].bind(t)), s = !0
            },
            p(e, [i]) {
                const a = {};
                1073742054 & i && (a.$$scope = {
                    dirty: i,
                    ctx: e
                }), n.$set(a), (!s || 1 & i && o !== (o = "settings-container settings-container__" + e[0] + " svelte-1ogsz17")) && Mo(t, "class", o)
            },
            i(e) {
                s || ($i(n.$$.fragment, e), s = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), s = !1
            },
            d(e) {
                e && $o(t), Ei(n), i()
            }
        }
    }

    function ng(e, t, n) {
        let o;
        const i = Qo();
        let s = Sp;
        const a = Jo("deepl_settings");
        eo(e, a, (e => n(7, o = e)));
        let {
            startPage: r
        } = t, {
            fromShortcut: l = !1
        } = t, {
            icon: c
        } = t, {
            position: d = "top"
        } = t, {
            registerSettingsCallbacks: u
        } = t, {
            unregisterSettingsCallbacks: p
        } = t, {
            closeSettings: g
        } = t, m = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, h = {
            height: 0,
            width: 0
        }, f = 140, _ = 387, w = "";
        const v = () => {
            if (c) {
                const e = c.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"]) e[n] !== m[n] && (t[n] = e[n]);
                Object.keys(t).length && n(20, m = {
                    ...m,
                    ...t
                });
                let o = {};
                window.innerHeight !== h.height && (o.height = window.innerHeight), window.innerWidth !== h.width && (o.width = window.innerWidth), Object.keys(o).length && n(21, h = {
                    ...h,
                    ...o
                })
            } else n(20, m = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        };

        function $(e) {
            n(5, s = e)
        }
        return Ko((() => {
            v(), u({
                recalculateSettingsCoords: v
            })
        })), Xo((() => {
            p()
        })), e.$$set = e => {
            "startPage" in e && n(1, r = e.startPage), "fromShortcut" in e && n(2, l = e.fromShortcut), "icon" in e && n(15, c = e.icon), "position" in e && n(0, d = e.position), "registerSettingsCallbacks" in e && n(16, u = e.registerSettingsCallbacks), "unregisterSettingsCallbacks" in e && n(17, p = e.unregisterSettingsCallbacks), "closeSettings" in e && n(18, g = e.closeSettings)
        }, e.$$.update = () => {
            3145752 & e.$$.dirty && n(0, d = (({
                iconCoordinates: e,
                viewportSize: t,
                popupHeight: n,
                popupWidth: o
            }) => {
                if (!c) return "top";
                const i = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e, t] of Object.entries(i))
                    if (t) return e;
                return "top"
            })({
                iconCoordinates: m,
                viewportSize: h,
                popupHeight: f,
                popupWidth: _
            })), 2 & e.$$.dirty && r && n(5, s = r)
        }, [d, r, l, f, _, s, w, o, a, function () {
            i("close")
        }, function () {
            $(Mp)
        }, function () {
            n(6, w = ""), $(Sp)
        }, function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: Wl.settings_writing
                }
            })
        }, function () {
            if (!w) return;
            switch (w) {
                case me:
                    a.set({
                        enableInputTranslation: !1
                    }), Mn({
                        action: "dlTrackSettingChanged",
                        payload: {
                            settingType: me,
                            domainName: window.location.hostname,
                            uiFunction: he,
                            uiLocation: B
                        }
                    }), g();
                    break;
                case ge:
                    ! function () {
                        let e = o.blacklistDomainsForWriting;
                        e && !e.includes(window.location.hostname) && (e.push(window.location.hostname), a.set({
                            blacklistDomainsForWriting: e
                        }), Mn({
                            action: "dlTrackSettingChanged",
                            payload: {
                                settingType: ge,
                                domainName: window.location.hostname,
                                uiFunction: he,
                                uiLocation: B
                            }
                        }));
                        g()
                    }()
            }
            let e = Gi(window.location.hostname, ["www."]);
            Mn({
                action: "dlSendNotification",
                payload: {
                    type: D,
                    options: {
                        theme: A.green_theme,
                        currentDomain: e,
                        saveAction: w,
                        settingsPageURL: Wl.settings_writing
                    }
                }
            })
        }, function (e) {
            n(6, w = e.currentTarget.value)
        }, c, u, p, g, v, m, h, function (t) {
            ei.call(this, e, t)
        }, function (t) {
            ei.call(this, e, t)
        }, function () {
            f = this.clientHeight, _ = this.clientWidth, n(3, f), n(4, _)
        }]
    }
    class og extends Si {
        constructor(e) {
            super(), ki(this, e, ng, tg, Yn, {
                startPage: 1,
                fromShortcut: 2,
                icon: 15,
                position: 0,
                registerSettingsCallbacks: 16,
                unregisterSettingsCallbacks: 17,
                closeSettings: 18,
                recalculateSettingsCoords: 19
            })
        }
        get recalculateSettingsCoords() {
            return this.$$.ctx[19]
        }
    }

    function ig(e) {
        let t, n;
        return t = new Rl({
            props: {
                errorMessage: e[1]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                2 & n && (o.errorMessage = e[1]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function sg(e) {
        let t, n, o, i, s;
        return n = new Xp({
            props: {
                $$slots: {
                    default: [ig]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), n.$on("close", e[10]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", o = "error-container error-container__" + e[0] + " svelte-1h56a6t"), li((() => e[11].call(t)))
            },
            m(o, a) {
                vo(o, t, a), Li(n, t, null), i = Po(t, e[11].bind(t)), s = !0
            },
            p(e, [i]) {
                const a = {};
                8194 & i && (a.$$scope = {
                    dirty: i,
                    ctx: e
                }), n.$set(a), (!s || 1 & i && o !== (o = "error-container error-container__" + e[0] + " svelte-1h56a6t")) && Mo(t, "class", o)
            },
            i(e) {
                s || ($i(n.$$.fragment, e), s = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), s = !1
            },
            d(e) {
                e && $o(t), Ei(n), i()
            }
        }
    }

    function ag(e, t, n) {
        let {
            errorMessage: o
        } = t, {
            icon: i
        } = t, {
            position: s = "top"
        } = t, {
            registerErrorCallbacks: a
        } = t, {
            unregisterErrorCallbacks: r
        } = t, l = 140, c = 387, d = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, u = {
            height: 0,
            width: 0
        };
        const p = () => {
            if (i) {
                const e = i.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"]) e[n] !== d[n] && (t[n] = e[n]);
                Object.keys(t).length && n(8, d = {
                    ...d,
                    ...t
                });
                let o = {};
                window.innerHeight !== u.height && (o.height = window.innerHeight), window.innerWidth !== u.width && (o.width = window.innerWidth), Object.keys(o).length && n(9, u = {
                    ...u,
                    ...o
                })
            } else n(8, d = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        };
        return Ko((() => {
            p(), a({
                recalculateErrorCoords: p
            })
        })), Xo((() => {
            r()
        })), e.$$set = e => {
            "errorMessage" in e && n(1, o = e.errorMessage), "icon" in e && n(4, i = e.icon), "position" in e && n(0, s = e.position), "registerErrorCallbacks" in e && n(5, a = e.registerErrorCallbacks), "unregisterErrorCallbacks" in e && n(6, r = e.unregisterErrorCallbacks)
        }, e.$$.update = () => {
            780 & e.$$.dirty && n(0, s = (({
                iconCoordinates: e,
                viewportSize: t,
                highlighterHeight: n,
                highlighterWidth: o
            }) => {
                if (!i) return "top";
                const s = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e, t] of Object.entries(s))
                    if (t) return e;
                return "top"
            })({
                iconCoordinates: d,
                viewportSize: u,
                popupHeight: l,
                popupWidth: c
            }))
        }, [s, o, l, c, i, a, r, p, d, u, function (t) {
            ei.call(this, e, t)
        }, function () {
            l = this.clientHeight, c = this.clientWidth, n(2, l), n(3, c)
        }]
    }
    class rg extends Si {
        constructor(e) {
            super(), ki(this, e, ag, sg, Yn, {
                errorMessage: 1,
                icon: 4,
                position: 0,
                registerErrorCallbacks: 5,
                unregisterErrorCallbacks: 6,
                recalculateErrorCoords: 7
            })
        }
        get recalculateErrorCoords() {
            return this.$$.ctx[7]
        }
    }

    function lg(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div")
            },
            m(i, s) {
                vo(i, t, s), n || (o = [Eo(t, "click_outside", e[13]), lo(Nn.call(null, t, {
                    isShadow: !0
                }))], n = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), n = !1, Xn(o)
            }
        }
    }

    function cg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p;
        o = new Hp({
            props: {
                inputArea: e[1],
                lockActiveElement: e[14],
                openSettings: e[17],
                closeSettings: e[18],
                hideOnboardingHighlighter: e[15],
                registerIconCallbacks: e[19],
                unregisterIconCallbacks: e[20],
                getActiveElement: e[16],
                setErrorMessage: e[30]
            }
        });
        let g = e[3] && dg(e),
            m = e[4] && ug(e),
            h = e[7] && pg(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), Ti(o.$$.fragment), i = To(), g && g.c(), s = To(), m && m.c(), a = To(), h && h.c(), Mo(n, "class", "dl-input-placeholder svelte-16rwmnb"), zo(n, "reduced-space", !e[10]), zo(n, "other-extension-present", e[0].isLanguageToolsPresent || e[0].isGrammarlyPresent), Mo(t, "class", "dl-input-positioner svelte-16rwmnb"), Mo(t, "style", c = [`top: ${e[0].top}px;`, `left: ${e[0].left}px;`, `height: ${e[0].height}px;`, `width: ${e[0].width}px;`, `position: ${e[0].position};`].join(" ")), zo(t, "debug-mode", mg)
            },
            m(r, l) {
                vo(r, t, l), fo(t, n), Li(o, n, null), fo(n, i), g && g.m(n, null), fo(n, s), m && m.m(n, null), fo(n, a), h && h.m(n, null), e[34](n), d = !0, u || (p = [lo(Nn.call(null, n, {
                    isShadow: !0
                })), Eo(n, "click_outside", e[33]), Eo(n, "click", e[14])], u = !0)
            },
            p(e, i) {
                const r = {};
                2 & i[0] && (r.inputArea = e[1]), 128 & i[0] && (r.setErrorMessage = e[30]), o.$set(r), e[3] ? g ? (g.p(e, i), 8 & i[0] && $i(g, 1)) : (g = dg(e), g.c(), $i(g, 1), g.m(n, s)) : g && (wi(), bi(g, 1, 1, (() => {
                    g = null
                })), vi()), e[4] ? m ? (m.p(e, i), 16 & i[0] && $i(m, 1)) : (m = ug(e), m.c(), $i(m, 1), m.m(n, a)) : m && (wi(), bi(m, 1, 1, (() => {
                    m = null
                })), vi()), e[7] ? h ? (h.p(e, i), 128 & i[0] && $i(h, 1)) : (h = pg(e), h.c(), $i(h, 1), h.m(n, null)) : h && (wi(), bi(h, 1, 1, (() => {
                    h = null
                })), vi()), (!d || 1024 & i[0]) && zo(n, "reduced-space", !e[10]), (!d || 1 & i[0]) && zo(n, "other-extension-present", e[0].isLanguageToolsPresent || e[0].isGrammarlyPresent), (!d || 1 & i[0] && c !== (c = [`top: ${e[0].top}px;`, `left: ${e[0].left}px;`, `height: ${e[0].height}px;`, `width: ${e[0].width}px;`, `position: ${e[0].position};`].join(" "))) && Mo(t, "style", c)
            },
            i(e) {
                d || ($i(o.$$.fragment, e), $i(g), $i(m), $i(h), li((() => {
                    l && l.end(1), r = Ci(n, Br, {
                        duration: 100
                    }), r.start()
                })), d = !0)
            },
            o(e) {
                bi(o.$$.fragment, e), bi(g), bi(m), bi(h), r && r.invalidate(), l = xi(n, Br, {
                    duration: 150
                }), d = !1
            },
            d(n) {
                n && $o(t), Ei(o), g && g.d(), m && m.d(), h && h.d(), e[34](null), n && l && l.end(), u = !1, Xn(p)
            }
        }
    }

    function dg(e) {
        let t, n, o;
        return n = new qp({
            props: {
                onClose: e[15],
                position: "top",
                registerHighlighterCallbacks: e[25],
                unregisterHighlighterCallbacks: e[26],
                icon: e[2]
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "dl-onboarding-highlighter svelte-16rwmnb")
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p(e, t) {
                const o = {};
                4 & t[0] && (o.icon = e[2]), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function ug(e) {
        let t, n;
        return t = new og({
            props: {
                icon: e[2],
                startPage: e[5],
                fromShortcut: e[6],
                position: "top",
                registerSettingsCallbacks: e[21],
                unregisterSettingsCallbacks: e[22],
                closeSettings: e[18]
            }
        }), t.$on("languageChanged", e[31]), t.$on("close", e[18]), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                4 & n[0] && (o.icon = e[2]), 32 & n[0] && (o.startPage = e[5]), 64 & n[0] && (o.fromShortcut = e[6]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function pg(e) {
        let t, n;
        return t = new rg({
            props: {
                errorMessage: e[7],
                icon: e[2],
                position: "top",
                registerErrorCallbacks: e[23],
                unregisterErrorCallbacks: e[24]
            }
        }), t.$on("close", e[32]), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                128 & n[0] && (o.errorMessage = e[7]), 4 & n[0] && (o.icon = e[2]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function gg(e) {
        let t, n, o, i;
        const s = [cg, lg],
            a = [];

        function r(e, t) {
            return e[9] && e[0] && e[11] ? 0 : 1
        }
        return t = r(e), n = a[t] = s[t](e), {
            c() {
                n.c(), o = Lo()
            },
            m(e, n) {
                a[t].m(e, n), vo(e, o, n), i = !0
            },
            p(e, i) {
                let l = t;
                t = r(e), t === l ? a[t].p(e, i) : (wi(), bi(a[l], 1, 1, (() => {
                    a[l] = null
                })), vi(), n = a[t], n ? n.p(e, i) : (n = a[t] = s[t](e), n.c()), $i(n, 1), n.m(o.parentNode, o))
            },
            i(e) {
                i || ($i(n), i = !0)
            },
            o(e) {
                bi(n), i = !1
            },
            d(e) {
                a[t].d(e), e && $o(o)
            }
        }
    }
    const mg = !1;

    function hg(t, n, o) {
        let i, s, a;
        const r = Jo("deepl_settings");
        eo(t, r, (e => o(43, a = e)));
        const l = 20,
            c = 40;
        let d, u, p, g, m, h, f, _, w, v, $ = !1,
            b = !1,
            y = !1,
            C = !1,
            x = !1,
            {
                trackInputInjectionIfNecessary: T
            } = n,
            {
                registerPositionerCallbacks: L
            } = n,
            {
                unregisterPositionerCallbacks: E
            } = n,
            k = [],
            S = {
                top: 0,
                left: 0,
                height: 0,
                width: 0,
                position: "absolute",
                isLanguageToolsPresent: !1,
                isGrammarlyPresent: !1
            },
            M = !1;
        const I = () => {
                o(1, d = document.activeElement);
                const e = (t = window.location.href, kp.find((({
                    domain: e
                }) => {
                    const n = e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
                    return new RegExp(n).test(t)
                })) || null);
                var t;
                if (e ? .uniqueDataAttributes && e.uniqueDataAttributes.length > 0)
                    for (let t of e.uniqueDataAttributes)
                        if (d.dataset[t.key] === t.value) return;
                if (e ? .selectors && e.selectors.length > 0)
                    for (let t of e.selectors) {
                        const e = document.querySelector(t),
                            n = Wn(e),
                            o = Wn(d),
                            i = n.toString() === o.toString();
                        if (e === d || e.isSameNode(d) || i) return
                    }
                k = Rr({
                    inputArea: d
                }), U(), T(), N()
            },
            D = () => {
                A(), o(7, g = void 0), q(), k = [], o(1, d = void 0)
            },
            O = () => {
                $ = !1
            },
            N = () => {
                if (!a.isInputHighlighterShown) {
                    ro(r, a.isInputHighlighterShown = !0, a), o(3, b = !0);
                    try {
                        Mn({
                            action: "dltrackOpenInputHighlighter",
                            payload: {
                                domainName: e.websiteData.hostname
                            }
                        })
                    } catch (e) {
                        console.error(e)
                    }
                }
            },
            A = (e = De) => {
                o(3, b = !1);
                try {
                    Mn({
                        action: "dltrackCloseInputHighlighter",
                        payload: {
                            event: e
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            },
            R = () => {
                z(), M && (F(), v && v(), b && h && h(), y && f && f(), _ && _())
            },
            P = (e = document.activeElement) => {
                const t = e.contentDocument;
                return t && t.activeElement ? P(t.activeElement) : e
            },
            z = () => {
                const e = P(),
                    t = !$ && e !== d,
                    n = e && Nr(e),
                    o = d && !d.isConnected;
                !t || n || x ? (x = !1, t ? (D(), n && I()) : o && D()) : x = !0
            },
            F = () => {
                o(0, S = Ar({
                    inputArea: d
                }))
            },
            B = () => {
                F()
            },
            U = () => {
                o(9, M = !0), F();
                for (const e of k) e.addEventListener("scroll", B);
                window.addEventListener("scroll", B)
            },
            q = () => {
                o(9, M = !1);
                for (const e of k) e.removeEventListener("scroll", B);
                window.removeEventListener("scroll", B), G()
            },
            j = () => {
                m && m()
            },
            W = ({
                page: e,
                fromShortcut: t = !1
            } = {}) => {
                o(5, p = e), o(6, C = t), y || (o(4, y = !0), Mn({
                    action: "dlTrackInlineSettingOpened",
                    payload: {
                        uiFunction: he,
                        uiLocation: H
                    }
                }))
            },
            G = () => {
                y && o(4, y = !1)
            };
        Ko((() => {
            k = Rr({
                inputArea: d
            }), L({
                processRefreshCycle: R,
                triggerTranslation: j,
                openSettings: W
            })
        })), Xo((() => {
            for (const e of k) e.removeEventListener("scroll", B);
            E()
        }));
        return t.$$set = e => {
            "trackInputInjectionIfNecessary" in e && o(27, T = e.trackInputInjectionIfNecessary), "registerPositionerCallbacks" in e && o(28, L = e.registerPositionerCallbacks), "unregisterPositionerCallbacks" in e && o(29, E = e.unregisterPositionerCallbacks)
        }, t.$$.update = () => {
            1 & t.$$.dirty[0] && o(11, i = S.height >= l), 1 & t.$$.dirty[0] && o(10, s = S.height >= c)
        }, [S, d, u, b, y, p, C, g, w, M, s, i, r, O, () => {
            $ = !0
        }, A, P, W, G, ({
            processRefreshCycle: e,
            languageChanged: t,
            triggerTranslation: n
        }) => {
            v = e, o(8, w = t), m = n
        }, () => {
            v = void 0, o(8, w = void 0), m = void 0
        }, ({
            recalculateSettingsCoords: e
        }) => {
            f = e
        }, () => {
            f = void 0
        }, ({
            recalculateErrorCoords: e
        }) => {
            _ = e
        }, () => {
            _ = void 0
        }, ({
            recalculateHighlighterCoords: e
        }) => {
            h = e
        }, () => {
            h = void 0
        }, T, L, E, e => {
            o(7, g = e)
        }, e => w && w(e.detail.lang), () => {
            o(7, g = void 0)
        }, () => {
            O(), G()
        }, function (e) {
            ni[e ? "unshift" : "push"]((() => {
                u = e, o(2, u)
            }))
        }]
    }
    class fg extends Si {
        constructor(e) {
            super(), ki(this, e, hg, gg, Yn, {
                trackInputInjectionIfNecessary: 27,
                registerPositionerCallbacks: 28,
                unregisterPositionerCallbacks: 29
            }, null, [-1, -1])
        }
    }

    function _g(e) {
        let t, n, o;
        return n = new fg({
            props: {
                trackInputInjectionIfNecessary: e[0],
                registerPositionerCallbacks: e[1],
                unregisterPositionerCallbacks: e[2]
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "dl-input-translation-container svelte-ju4595")
            },
            m(e, i) {
                vo(e, t, i), Li(n, t, null), o = !0
            },
            p: Gn,
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function wg(e, t, n) {
        let o, i, s, a;
        Yo("deepl_settings", hs), Yo("deepl_website_settings", Ui);
        let r = !0,
            l = !1;
        const c = () => {
                o && o()
            },
            d = async e => {
                if ("dlChangeActiveTabStatus" === e.action) n(5, r = e.payload.isActive)
            }, u = () => {
                a && clearInterval(a), a = setInterval(c, 300)
            }, p = () => {
                clearInterval(a)
            };
        return Ko((() => {
            u(), chrome.runtime.onMessage.addListener(d)
        })), Xo((() => {
            a && p(), chrome.runtime.onMessage.removeListener(d)
        })), e.$$.update = () => {
            32 & e.$$.dirty && (r ? u() : p())
        }, [() => {
            l || (l = !0, Mn({
                action: "dlTrackInputTranslationInjection",
                payload: window.location.host
            }))
        }, ({
            processRefreshCycle: e,
            triggerTranslation: t,
            openSettings: n
        }) => {
            o = e, i = t, s = n
        }, () => {
            o = void 0, i = void 0, s = void 0
        }, () => {
            i && i()
        }, () => {
            s && s({
                fromShortcut: !1
            })
        }, r]
    }
    class vg extends Si {
        constructor(e) {
            super(), ki(this, e, wg, _g, Yn, {
                triggerTranslation: 3,
                openSettingsFromShortcut: 4
            })
        }
        get triggerTranslation() {
            return this.$$.ctx[3]
        }
        get openSettingsFromShortcut() {
            return this.$$.ctx[4]
        }
    }
    class $g extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this), this.triggerTranslation = this.triggerTranslation.bind(this), this.openSettingsFromShortcut = this.openSettingsFromShortcut.bind(this)
        }
        createDOM() {
            this.mainComponent = new vg({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this
                }
            })
        }
        triggerTranslation() {
            this.mainComponent.triggerTranslation()
        }
        openSettingsFromShortcut() {
            this.mainComponent.openSettingsFromShortcut()
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function bg(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("p"), n = yo("strong"), n.textContent = `${chrome.i18n.getMessage("ui_toaster_feedback_form_line_1")}`, o = To(), i = yo("p"), i.textContent = `${chrome.i18n.getMessage("ui_toaster_feedback_form_line_2")}`, Mo(n, "class", "svelte-rl2s44"), Mo(t, "class", "svelte-rl2s44"), Mo(i, "class", "svelte-rl2s44")
            },
            m(e, s) {
                vo(e, t, s), fo(t, n), vo(e, o, s), vo(e, i, s)
            },
            p: Gn,
            d(e) {
                e && $o(t), e && $o(o), e && $o(i)
            }
        }
    }

    function yg(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("p"), n = yo("strong"), n.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_line_1")}`, o = To(), i = yo("p"), i.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_line_2")}`, Mo(n, "class", "svelte-rl2s44"), Mo(t, "class", "svelte-rl2s44"), Mo(i, "class", "svelte-rl2s44")
            },
            m(e, s) {
                vo(e, t, s), fo(t, n), vo(e, o, s), vo(e, i, s)
            },
            p: Gn,
            d(e) {
                e && $o(t), e && $o(o), e && $o(i)
            }
        }
    }

    function Cg(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("p"), t.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_1")}`, n = To(), o = yo("p"), i = yo("strong"), i.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_2")}`, Mo(t, "class", "svelte-rl2s44"), Mo(i, "class", "svelte-rl2s44"), Mo(o, "class", "svelte-rl2s44")
            },
            m(e, s) {
                vo(e, t, s), vo(e, n, s), vo(e, o, s), fo(o, i)
            },
            p: Gn,
            d(e) {
                e && $o(t), e && $o(n), e && $o(o)
            }
        }
    }

    function xg(e) {
        let t;

        function n(e, t) {
            return e[0] === Se.initial ? Lg : e[0] === Se.review ? Tg : void 0
        }
        let o = n(e),
            i = o && o(e);
        return {
            c() {
                t = yo("div"), i && i.c(), Mo(t, "class", "buttons svelte-rl2s44")
            },
            m(e, n) {
                vo(e, t, n), i && i.m(t, null)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i && i.d(1), i = o && o(e), i && (i.c(), i.m(t, null)))
            },
            d(e) {
                e && $o(t), i && i.d()
            }
        }
    }

    function Tg(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("button"), n = yo("span"), n.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_cta")}`, Mo(t, "class", "svelte-rl2s44")
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), o || (i = Eo(t, "click", e[4]), o = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), o = !1, i()
            }
        }
    }

    function Lg(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        return {
            c() {
                t = yo("button"), n = yo("i"), o = To(), i = yo("span"), i.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_bad")}`, s = To(), a = yo("button"), r = yo("i"), l = To(), c = yo("span"), c.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_good")}`, Mo(n, "class", "icon-bad svelte-rl2s44"), Mo(t, "class", "svelte-rl2s44"), Mo(r, "class", "icon-good svelte-rl2s44"), Mo(a, "class", "svelte-rl2s44")
            },
            m(p, g) {
                vo(p, t, g), fo(t, n), fo(t, o), fo(t, i), vo(p, s, g), vo(p, a, g), fo(a, r), fo(a, l), fo(a, c), d || (u = [Eo(t, "click", e[2]), Eo(a, "click", e[3])], d = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), e && $o(s), e && $o(a), d = !1, Xn(u)
            }
        }
    }

    function Eg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m = [Se.initial, Se.review].includes(e[0]);

        function h(e, t) {
            return e[0] === Se.initial ? Cg : e[0] === Se.review ? yg : e[0] === Se.feedback ? bg : void 0
        }
        let f = h(e),
            _ = f && f(e),
            w = m && xg(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), i = To(), s = yo("div"), a = yo("button"), r = To(), _ && _.c(), l = To(), w && w.c(), Mo(o, "class", "logo svelte-rl2s44"), Mo(a, "class", "close-icon svelte-rl2s44"), Mo(s, "class", "content svelte-rl2s44"), Mo(n, "class", "body svelte-rl2s44"), Mo(t, "class", "container svelte-rl2s44")
            },
            m(c, d) {
                vo(c, t, d), fo(t, n), fo(n, o), fo(n, i), fo(n, s), fo(s, a), fo(s, r), _ && _.m(s, null), fo(t, l), w && w.m(t, null), u = !0, p || (g = Eo(a, "click", (function () {
                    Qn(e[1]) && e[1].apply(this, arguments)
                })), p = !0)
            },
            p(n, [o]) {
                f === (f = h(e = n)) && _ ? _.p(e, o) : (_ && _.d(1), _ = f && f(e), _ && (_.c(), _.m(s, null))), 1 & o && (m = [Se.initial, Se.review].includes(e[0])), m ? w ? w.p(e, o) : (w = xg(e), w.c(), w.m(t, null)) : w && (w.d(1), w = null)
            },
            i(e) {
                u || (li((() => {
                    d && d.end(1), c = Ci(t, fly, {
                        x: 100,
                        duration: 1e3
                    }), c.start()
                })), u = !0)
            },
            o(e) {
                c && c.invalidate(), d = xi(t, fly, {
                    x: 100,
                    duration: 1e3
                }), u = !1
            },
            d(e) {
                e && $o(t), _ && _.d(), w && w.d(), e && d && d.end(), p = !1, g()
            }
        }
    }

    function kg(e, t, n) {
        Yo("deepl_settings", hs), Yo("deepl_website_settings", Ui);
        let {
            onClose: o
        } = t, {
            reviewStage: i = Se.initial
        } = t;
        return e.$$set = e => {
            "onClose" in e && n(1, o = e.onClose), "reviewStage" in e && n(0, i = e.reviewStage)
        }, [i, o, function () {
            hs.set({
                shouldDisplayFeedbackPopup: !0
            }), Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Yi
                }
            }), o()
        }, function () {
            n(0, i = Se.review)
        }, function () {
            let e = is;
            chrome.runtime.id === xe && (e = ss), Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: e
                }
            }), o()
        }]
    }
    window.customElements.define("deepl-input-controller", $g);
    class Sg extends Si {
        constructor(e) {
            super(), ki(this, e, kg, Eg, Yn, {
                onClose: 1,
                reviewStage: 0
            })
        }
    }
    class Mg extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({
            reviewStage: e
        }) {
            this.shadowContainer.style.cssText = `position: fixed; bottom: 32px; right: 32px; z-index: ${M.deepl_inline_ui.z_index}`, this.mainComponent = new Sg({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    reviewStage: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }
    window.customElements.define("deepl-ask-for-review-popup", Mg);
    const Ig = () => {
            const e = window.location.hostname.split(".");
            if (e.length < 2) return !1;
            return "deepl.com" === `${e.at(-2)}.${e.at(-1)}`
        },
        Dg = () => !Ig();
    document.dispatchEvent(new CustomEvent("deepl-reset-event"));
    try {
        chrome.runtime.onMessage.addListener(ur), An((() => {
            Ui.update({
                translationState: r
            }), qi(), chrome.runtime.onMessage.removeListener(ur)
        }))
    } catch (e) {
        console.error(e), Pt(e.message)
    }
    try {
        _a(window.location.host), lr(window.location.host), wa(window.location.href), window.addEventListener("load", or), Dg() && ir(), sr(), fa(window.location.host)
    } catch (e) {
        console.error(e), Pt(e.message)
    }
    const Og = e => ({}),
        Ng = e => ({}),
        Ag = e => ({}),
        Rg = e => ({}),
        Pg = e => ({}),
        zg = e => ({}),
        Hg = e => ({}),
        Fg = e => ({}),
        Bg = e => ({}),
        Ug = e => ({}),
        qg = e => ({}),
        jg = e => ({});

    function Wg(e) {
        let t, n;
        const o = e[3].warning,
            i = to(o, e, e[2], jg);
        return {
            c() {
                t = yo("div"), i && i.c(), Mo(t, "class", "alert-warning svelte-febp1q")
            },
            m(e, o) {
                vo(e, t, o), i && i.m(t, null), n = !0
            },
            p(e, t) {
                i && i.p && (!n || 4 & t) && io(i, o, e, e[2], n ? oo(o, e[2], t, qg) : so(e[2]), jg)
            },
            i(e) {
                n || ($i(i, e), n = !0)
            },
            o(e) {
                bi(i, e), n = !1
            },
            d(e) {
                e && $o(t), i && i.d(e)
            }
        }
    }

    function Gg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y = e[1] && Wg(e);
        const C = e[3].header,
            x = to(C, e, e[2], Ug),
            T = e[3].usp1,
            L = to(T, e, e[2], Fg),
            E = e[3].usp2,
            k = to(E, e, e[2], zg),
            S = e[3].usp3,
            M = to(S, e, e[2], Rg),
            I = e[3].graphics,
            D = to(I, e, e[2], Ng);
        return {
            c() {
                t = yo("div"), n = yo("div"), o = yo("span"), i = To(), s = yo("button"), a = To(), y && y.c(), r = To(), l = yo("h2"), x && x.c(), c = To(), d = yo("ul"), u = yo("li"), L && L.c(), p = To(), g = yo("li"), k && k.c(), m = To(), h = yo("li"), M && M.c(), f = To(), _ = yo("div"), D && D.c(), Mo(o, "class", "logo svelte-febp1q"), Mo(s, "class", "close-button svelte-febp1q"), Mo(n, "class", "header svelte-febp1q"), Mo(l, "class", "header svelte-febp1q"), Mo(u, "class", "svelte-febp1q"), Mo(g, "class", "svelte-febp1q"), Mo(h, "class", "svelte-febp1q"), Mo(d, "class", "ups svelte-febp1q"), Mo(_, "class", "graphics"), Mo(t, "class", "dl-onboarding-container svelte-febp1q")
            },
            m(w, C) {
                vo(w, t, C), fo(t, n), fo(n, o), fo(n, i), fo(n, s), fo(t, a), y && y.m(t, null), fo(t, r), fo(t, l), x && x.m(l, null), fo(t, c), fo(t, d), fo(d, u), L && L.m(u, null), fo(d, p), fo(d, g), k && k.m(g, null), fo(d, m), fo(d, h), M && M.m(h, null), fo(t, f), fo(t, _), D && D.m(_, null), v = !0, $ || (b = Eo(s, "click", (function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })), $ = !0)
            },
            p(n, [o]) {
                (e = n)[1] ? y ? (y.p(e, o), 2 & o && $i(y, 1)) : (y = Wg(e), y.c(), $i(y, 1), y.m(t, r)): y && (wi(), bi(y, 1, 1, (() => {
                    y = null
                })), vi()), x && x.p && (!v || 4 & o) && io(x, C, e, e[2], v ? oo(C, e[2], o, Bg) : so(e[2]), Ug), L && L.p && (!v || 4 & o) && io(L, T, e, e[2], v ? oo(T, e[2], o, Hg) : so(e[2]), Fg), k && k.p && (!v || 4 & o) && io(k, E, e, e[2], v ? oo(E, e[2], o, Pg) : so(e[2]), zg), M && M.p && (!v || 4 & o) && io(M, S, e, e[2], v ? oo(S, e[2], o, Ag) : so(e[2]), Rg), D && D.p && (!v || 4 & o) && io(D, I, e, e[2], v ? oo(I, e[2], o, Og) : so(e[2]), Ng)
            },
            i(e) {
                v || ($i(y), $i(x, e), $i(L, e), $i(k, e), $i(M, e), $i(D, e), w || li((() => {
                    w = Ci(t, Ur, {
                        y: -5,
                        duration: 500
                    }), w.start()
                })), v = !0)
            },
            o(e) {
                bi(y), bi(x, e), bi(L, e), bi(k, e), bi(M, e), bi(D, e), v = !1
            },
            d(e) {
                e && $o(t), y && y.d(), x && x.d(e), L && L.d(e), k && k.d(e), M && M.d(e), D && D.d(e), $ = !1, b()
            }
        }
    }

    function Vg(e, t, n) {
        let {
            $$slots: o = {},
            $$scope: i
        } = t, {
            onClose: s
        } = t, {
            hasWarning: a
        } = t;
        return e.$$set = e => {
            "onClose" in e && n(0, s = e.onClose), "hasWarning" in e && n(1, a = e.hasWarning), "$$scope" in e && n(2, i = e.$$scope)
        }, [s, a, i, o]
    }
    class Zg extends Si {
        constructor(e) {
            super(), ki(this, e, Vg, Gg, Yn, {
                onClose: 0,
                hasWarning: 1
            })
        }
    }

    function Kg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_title") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "header")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Xg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_1") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "usp1")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Qg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_2") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "usp2")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Yg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_3") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "usp3")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Jg(e) {
        let t, n, o = chrome.i18n.getMessage("ui_gdocs_onboarding_image_text") + "";
        return {
            c() {
                t = yo("div"), n = yo("div"), Mo(n, "class", "text-box svelte-6bb15d"), Mo(t, "slot", "graphics"), Mo(t, "class", "onboarding-graphics svelte-6bb15d")
            },
            m(e, i) {
                vo(e, t, i), fo(t, n), n.innerHTML = o
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function em(e) {
        let t, n;
        return t = new Zg({
            props: {
                onClose: e[0],
                $$slots: {
                    graphics: [Jg],
                    usp3: [Yg],
                    usp2: [Qg],
                    usp1: [Xg],
                    header: [Kg]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.onClose = e[0]), 4 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function tm(e, t, n) {
        let {
            onClose: o
        } = t;
        return Ko((() => {
            Mn({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: Oe.gdocs
                }
            })
        })), e.$$set = e => {
            "onClose" in e && n(0, o = e.onClose)
        }, [o]
    }
    class nm extends Si {
        constructor(e) {
            super(), ki(this, e, tm, em, Yn, {
                onClose: 0
            })
        }
    }

    function om(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        o = new Bd({
            props: {
                tooltip: e[4],
                zIndex: "10000000000",
                $$slots: {
                    default: [im]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let p = e[3] && sm(e);
        return r = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_turn_off"),
                zIndex: "10000000000",
                $$slots: {
                    default: [rm]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("div"), n = yo("button"), Ti(o.$$.fragment), i = To(), p && p.c(), s = To(), a = yo("button"), Ti(r.$$.fragment), Mo(n, "class", "dl-icon-circle dl-icon svelte-1lzcuuj"), Mo(a, "class", "dl-icon-circle dl-on-off-icon svelte-1lzcuuj"), Mo(a, "data-qa", "deepl-inline-translate-menu-icon"), Mo(t, "class", "dl-gdocs-icon svelte-1lzcuuj"), Oo(t, "top", e[5].top), Oo(t, "left", e[5].left), zo(t, "has-deepl-write", e[3])
            },
            m(l, g) {
                vo(l, t, g), fo(t, n), Li(o, n, null), fo(t, i), p && p.m(t, null), fo(t, s), fo(t, a), Li(r, a, null), c = !0, d || (u = [Eo(n, "click", e[7]), Eo(n, "mouseenter", e[21]), Eo(a, "click", e[10]), Eo(a, "mouseenter", e[24])], d = !0)
            },
            p(e, n) {
                const i = {};
                16 & n[0] && (i.tooltip = e[4]), 2097152 & n[1] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), o.$set(i), e[3] ? p ? (p.p(e, n), 8 & n[0] && $i(p, 1)) : (p = sm(e), p.c(), $i(p, 1), p.m(t, s)) : p && (wi(), bi(p, 1, 1, (() => {
                    p = null
                })), vi());
                const a = {};
                2097152 & n[1] && (a.$$scope = {
                    dirty: n,
                    ctx: e
                }), r.$set(a), (!c || 32 & n[0]) && Oo(t, "top", e[5].top), (!c || 32 & n[0]) && Oo(t, "left", e[5].left), (!c || 8 & n[0]) && zo(t, "has-deepl-write", e[3])
            },
            i(e) {
                c || ($i(o.$$.fragment, e), $i(p), $i(r.$$.fragment, e), l || li((() => {
                    l = Ci(t, Br, {
                        x: -5,
                        duration: 300
                    }), l.start()
                })), c = !0)
            },
            o(e) {
                bi(o.$$.fragment, e), bi(p), bi(r.$$.fragment, e), c = !1
            },
            d(e) {
                e && $o(t), Ei(o), p && p.d(), Ei(r), d = !1, Xn(u)
            }
        }
    }

    function im(e) {
        let t;
        return {
            c() {
                t = yo("span"), Mo(t, "class", "svelte-1lzcuuj")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function sm(e) {
        let t, n, o, i, s;
        return n = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_deepl_write"),
                zIndex: "10000000000",
                $$slots: {
                    default: [am]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("button"), Ti(n.$$.fragment), Mo(t, "class", "dl-icon-circle dl-write-icon svelte-1lzcuuj")
            },
            m(a, r) {
                vo(a, t, r), Li(n, t, null), o = !0, i || (s = [Eo(t, "click", e[22]), Eo(t, "mouseenter", e[23])], i = !0)
            },
            p(e, t) {
                const o = {};
                2097152 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n), i = !1, Xn(s)
            }
        }
    }

    function am(e) {
        let t;
        return {
            c() {
                t = yo("span"), Mo(t, "class", "svelte-1lzcuuj")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function rm(e) {
        let t;
        return {
            c() {
                t = yo("span"), Mo(t, "class", "svelte-1lzcuuj")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function lm(e) {
        let t, n;
        return t = new nm({
            props: {
                onClose: e[25]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                4 & n[0] && (o.onClose = e[25]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function cm(e) {
        let t, n, o, i = e[6] && !e[0] && !e[1] && om(e),
            s = e[2] && lm(e);
        return {
            c() {
                i && i.c(), t = To(), s && s.c(), n = Lo()
            },
            m(e, a) {
                i && i.m(e, a), vo(e, t, a), s && s.m(e, a), vo(e, n, a), o = !0
            },
            p(e, o) {
                !e[6] || e[0] || e[1] ? i && (wi(), bi(i, 1, 1, (() => {
                    i = null
                })), vi()) : i ? (i.p(e, o), 67 & o[0] && $i(i, 1)) : (i = om(e), i.c(), $i(i, 1), i.m(t.parentNode, t)), e[2] ? s ? (s.p(e, o), 4 & o[0] && $i(s, 1)) : (s = lm(e), s.c(), $i(s, 1), s.m(n.parentNode, n)) : s && (wi(), bi(s, 1, 1, (() => {
                    s = null
                })), vi())
            },
            i(e) {
                o || ($i(i), $i(s), o = !0)
            },
            o(e) {
                bi(i), bi(s), o = !1
            },
            d(e) {
                i && i.d(e), e && $o(t), s && s.d(e), e && $o(n)
            }
        }
    }

    function dm(e, t, n) {
        let o, i;
        eo(e, hs, (e => n(20, i = e))), Yo("deepl_settings", hs), Yo("deepl_website_settings", Ui);
        let s, a, r, l, c, d, {
                replaceData: u
            } = t,
            {
                deeplWriteTrackingData: p = {
                    lang: "",
                    sourceLength: 0,
                    targetLength: 0,
                    nicheIntegration: Oe.gdocs,
                    error: ""
                }
            } = t,
            g = !0,
            m = !1,
            h = !1,
            f = "",
            _ = "",
            w = !1,
            v = "",
            $ = {
                top: 0,
                left: 0
            };
        async function b(e, t, n) {
            if ("dlTriggerTranslationShortcut" === e.action) C(), Mn({
                action: "dlTrackUseOfShortcut",
                payload: {
                    shortcutType: le,
                    location: R,
                    nicheIntegration: Oe.gdocs
                }
            }), n()
        }
        const y = e => {
                l = Ne.translate, e && (c = e), pt()
            },
            C = () => {
                y(i.selectedTargetLanguage)
            },
            x = () => {
                l = Ne.write, pt()
            },
            T = () => {
                const {
                    shouldBeOutOfViewport: e,
                    newPosition: {
                        left: t,
                        top: o
                    }
                } = ht();
                e !== m && n(1, m = e), n(5, $.left = `${Math.round(t)}px`, $), n(5, $.top = `${Math.round(o)}px`, $)
            };

        function L(e) {
            Mn({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host,
                    nicheIntegration: Oe.gdocs
                }
            })
        }
        const E = () => {
                s = setInterval((() => {
                    const e = gt(),
                        t = !e.text;
                    !t && g && T(), t && !g && (() => {
                        if (!i.isInlineHighlighterShown) {
                            hs.set({
                                isInlineHighlighterShown: !0
                            });
                            try {
                                Mn({
                                    action: "dltrackCloseInlineHighlighter",
                                    payload: {
                                        trigger: De
                                    }
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    })(), n(0, g = t), f !== e.text && n(18, f = e.text)
                }), 300)
            },
            k = () => {
                const e = document.querySelector("#docs-instant-bubble");
                r = new MutationObserver((() => {
                    T()
                }));
                return r.observe(e, {
                    attributes: !0,
                    childList: !1,
                    characterData: !1
                }), () => r.unobserve()
            },
            S = async e => {
                if (l && "ClipboardEvent" === e.constructor.name) {
                    switch (l) {
                        case Ne.translate:
                            Xa({
                                event: e,
                                targetLang: c
                            });
                            break;
                        case Ne.write:
                            Qa({
                                event: e,
                                lang: _
                            })
                    }
                    l = void 0
                }
            }, M = () => {
                E(), (() => {
                    const e = document.querySelector("#kix-appview");
                    a = new MutationObserver((() => {
                        document.querySelector("#docs-instant-bubble") && (T(), k())
                    })), a.observe(e, {
                        attributes: !1,
                        childList: !0,
                        characterData: !1
                    })
                })(), (() => {
                    const e = new ResizeObserver((() => {
                        T()
                    }));
                    e.observe(document.body)
                })(), document.querySelector("#kix-appview .kix-appview-editor").addEventListener("scroll", T), (() => {
                    const {
                        editable: e
                    } = ut();
                    e.addEventListener("copy", S)
                })()
            }, I = () => {
                a && a.disconnect(), r && r.disconnect(), s && clearInterval(s), document.querySelector("#kix-appview .kix-appview-editor").removeEventListener("scroll", T), (() => {
                    const {
                        editable: e
                    } = ut();
                    e.removeEventListener("copy", S)
                })()
            };
        Ko((() => {
            M(), i.isGDocsOnboardingShown || (n(2, h = !0), ro(hs, i.isGDocsOnboardingShown = !0, i)), chrome.runtime.onMessage.addListener(b), Mn({
                action: "dlCheckCommandShortcuts"
            }).then((e => n(19, v = e ? e.filter((e => e.name == le))[0].shortcut : "")))
        })), Xo((() => {
            I()
        }));
        return e.$$set = e => {
            "replaceData" in e && n(11, u = e.replaceData), "deeplWriteTrackingData" in e && n(12, p = e.deeplWriteTrackingData)
        }, e.$$.update = () => {
            if (1048576 & e.$$.dirty[0] && n(6, o = !i.blacklistDomainsForReading.includes("docs.google.com") && i.enableInlineTranslation), 262144 & e.$$.dirty[0] && (async e => {
                    const t = await Mt(e);
                    _ = t, n(3, w = ["DE", "EN"].includes(_ ? .toUpperCase()))
                })(f), 524288 & e.$$.dirty[0]) {
                let e = chrome.i18n.getMessage("ui_gdocs_translate_tooltip_2");
                n(4, d = v ? `${e} (${v})` : e)
            }
        }, [g, m, h, w, d, $, o, C, x, L, () => {
            Ys(Oe.gdocs), Mn({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: fe,
                    uiLocation: R,
                    nicheIntegration: Oe.gdocs
                }
            })
        }, u, p, () => {
            u && Ct(u)
        }, y, () => {
            dr({
                eventType: Qe,
                ...p
            })
        }, () => {
            dr({
                eventType: Ye,
                ...p
            })
        }, e => {
            switch (e) {
                case st:
                    dr({
                        eventType: Je,
                        ...p
                    });
                    break;
                case at:
                    Mn({
                        action: "dlTrackGDocsMaxCharExceededTryProClicked",
                        payload: {
                            sourceLang: p.lang,
                            targetLang: p.lang,
                            sourceLength: p.sourceLength
                        }
                    })
            }
        }, f, v, i, () => L(R), () => x(), () => L(oe), () => L(P), () => n(2, h = !1)]
    }
    class um extends Si {
        constructor(e) {
            super(), ki(this, e, dm, cm, Yn, {
                replaceData: 11,
                deeplWriteTrackingData: 12,
                applyReplacement: 13,
                requestTranslation: 14,
                trackDeeplWriteInsertCopy: 15,
                trackDeeplWriteDiscardCopy: 16,
                trackMaxCharExceeded: 17
            }, null, [-1, -1])
        }
        get applyReplacement() {
            return this.$$.ctx[13]
        }
        get requestTranslation() {
            return this.$$.ctx[14]
        }
        get trackDeeplWriteInsertCopy() {
            return this.$$.ctx[15]
        }
        get trackDeeplWriteDiscardCopy() {
            return this.$$.ctx[16]
        }
        get trackMaxCharExceeded() {
            return this.$$.ctx[17]
        }
    }
    class pm extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this), this.setReplaceData = this.setReplaceData.bind(this), this.applyReplacement = this.applyReplacement.bind(this), this.requestNewTranslation = this.requestNewTranslation.bind(this), this.setDeeplWriteTrackingData = this.setDeeplWriteTrackingData.bind(this), this.trackDeeplWriteInsertCopy = this.trackDeeplWriteInsertCopy.bind(this), this.trackDeeplWriteDiscardCopy = this.trackDeeplWriteDiscardCopy.bind(this), this.trackMaxCharExceeded = this.trackMaxCharExceeded.bind(this)
        }
        createDOM() {
            this.mainComponent = new um({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM
                }
            })
        }
        setReplaceData(e) {
            this.mainComponent.$$set({
                replaceData: e
            })
        }
        setDeeplWriteTrackingData(e) {
            this.mainComponent.$$set({
                deeplWriteTrackingData: e
            })
        }
        trackDeeplWriteInsertCopy() {
            return this.mainComponent.trackDeeplWriteInsertCopy()
        }
        trackDeeplWriteDiscardCopy() {
            return this.mainComponent.trackDeeplWriteDiscardCopy()
        }
        trackMaxCharExceeded(e) {
            return this.mainComponent.trackMaxCharExceeded(e)
        }
        applyReplacement() {
            this.mainComponent.applyReplacement()
        }
        requestNewTranslation(e) {
            this.mainComponent.requestTranslation(e)
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function gm(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = yo("div"), n = yo("span"), n.textContent = `${chrome.i18n.getMessage("inline_translation_link_more_settings")}`, o = To(), i = yo("span"), Mo(i, "class", "icon icon-external-link  svelte-zb9mtj"), Mo(t, "class", "settings-link svelte-zb9mtj")
            },
            m(r, l) {
                vo(r, t, l), fo(t, n), fo(t, o), fo(t, i), s || (a = Eo(t, "click", So(ko(e[0]))), s = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), s = !1, a()
            }
        }
    }

    function mm(e, t, n) {
        let {
            page: o = Wl.settings_page
        } = t;
        return e.$$set = e => {
            "page" in e && n(1, o = e.page)
        }, [function () {
            Mn({
                action: "dlOpenInternalPage",
                payload: {
                    destination: o
                }
            })
        }, o]
    }
    window.customElements.define("deepl-gdocs-icon", pm);
    class hm extends Si {
        constructor(e) {
            super(), ki(this, e, mm, gm, Yn, {
                page: 1
            })
        }
    }

    function fm(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), Mo(t, "type", "button"), Mo(t, "class", "close-icon svelte-90kudc")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", e[0]), n = !0)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function _m(e) {
        return [function (t) {
            ei.call(this, e, t)
        }]
    }
    class wm extends Si {
        constructor(e) {
            super(), ki(this, e, _m, fm, Yn, {})
        }
    }

    function vm(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g;
        return i = new wm({}), i.$on("click", e[2]), c = new xc({
            props: {
                value: e[0].selectedTargetLanguage
            }
        }), c.$on("selection", e[3]), p = new hm({}), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), Ti(i.$$.fragment), s = To(), a = yo("div"), r = yo("p"), r.textContent = `${chrome.i18n.getMessage("whatsapp_web_settings_languageswitch_label")}`, l = To(), Ti(c.$$.fragment), d = To(), u = yo("div"), Ti(p.$$.fragment), Mo(o, "class", "close-icon-container svelte-1xs7ag1"), Mo(n, "class", "header"), Mo(r, "class", "label-language-switch svelte-1xs7ag1"), Mo(a, "class", "body svelte-1xs7ag1"), Mo(u, "class", "footer svelte-1xs7ag1"), Mo(t, "class", "container svelte-1xs7ag1")
            },
            m(e, m) {
                vo(e, t, m), fo(t, n), fo(n, o), Li(i, o, null), fo(t, s), fo(t, a), fo(a, r), fo(a, l), Li(c, a, null), fo(t, d), fo(t, u), Li(p, u, null), g = !0
            },
            p(e, [t]) {
                const n = {};
                1 & t && (n.value = e[0].selectedTargetLanguage), c.$set(n)
            },
            i(e) {
                g || ($i(i.$$.fragment, e), $i(c.$$.fragment, e), $i(p.$$.fragment, e), g = !0)
            },
            o(e) {
                bi(i.$$.fragment, e), bi(c.$$.fragment, e), bi(p.$$.fragment, e), g = !1
            },
            d(e) {
                e && $o(t), Ei(i), Ei(c), Ei(p)
            }
        }
    }

    function $m(e, t, n) {
        let o;
        const i = Jo("deepl_settings");
        eo(e, i, (e => n(0, o = e)));
        const s = Qo();
        return [o, i, function () {
            s("close")
        }, e => i.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0,
            regionalVariant: e.detail.selectedOption.regionalVariant || ""
        })]
    }
    class bm extends Si {
        constructor(e) {
            super(), ki(this, e, $m, vm, Yn, {})
        }
    }

    function ym(e) {
        return /\bdark\b/gm.test(e)
    }
    const Cm = function () {
        let e = {
            isDarkMode: ym(document.body.className)
        };
        const {
            subscribe: t,
            update: n
        } = Ii(e);
        let o = new MutationObserver((e => {
            e.forEach((e => {
                "attributes" === e.type && "class" === e.attributeName && n((e => ({
                    ...e,
                    isDarkMode: ym(document.body.className)
                })))
            }))
        }));
        return o.observe(document.body, {
            attributes: !0
        }), An((() => {
            o.disconnect()
        })), {
            subscribe: t
        }
    }();

    function xm(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        const h = [Lm, Tm],
            f = [];

        function _(e, t) {
            return e[2] ? 0 : 1
        }
        return n = _(e), o = f[n] = h[n](e), {
            c() {
                t = yo("div"), o.c(), i = To(), s = yo("div"), s.textContent = `${chrome.i18n.getMessage("whatsapp_web_show_alternatives_link")}`, a = To(), r = yo("button"), l = Co("svg"), c = Co("path"), Mo(s, "class", "show-alternatives svelte-1csju44"), zo(s, "dark", e[5]), Mo(c, "d", "M3 9L9 3M3 3L9 9"), Mo(c, "stroke", d = e[3] && e[3].isDarkMode ? "#F2F4F7" : "#037171"), Mo(c, "stroke-width", "1.5"), Mo(c, "stroke-linecap", "round"), Mo(c, "stroke-linejoin", "round"), Mo(l, "width", "12"), Mo(l, "height", "12"), Mo(l, "viewBox", "0 0 12 12"), Mo(l, "fill", "none"), Mo(l, "xmlns", "http://www.w3.org/2000/svg"), Mo(r, "class", "svelte-1csju44"), Mo(t, "class", "container svelte-1csju44"), zo(t, "dark", e[5])
            },
            m(o, d) {
                vo(o, t, d), f[n].m(t, null), fo(t, i), fo(t, s), fo(t, a), fo(t, r), fo(r, l), fo(l, c), p = !0, g || (m = [Eo(s, "click", e[6]), Eo(r, "click", (function () {
                    Qn(e[1]) && e[1].apply(this, arguments)
                }))], g = !0)
            },
            p(a, r) {
                let l = n;
                n = _(e = a), n === l ? f[n].p(e, r) : (wi(), bi(f[l], 1, 1, (() => {
                    f[l] = null
                })), vi(), o = f[n], o ? o.p(e, r) : (o = f[n] = h[n](e), o.c()), $i(o, 1), o.m(t, i)), (!p || 32 & r) && zo(s, "dark", e[5]), (!p || 8 & r && d !== (d = e[3] && e[3].isDarkMode ? "#F2F4F7" : "#037171")) && Mo(c, "stroke", d), (!p || 32 & r) && zo(t, "dark", e[5])
            },
            i(e) {
                p || ($i(o), u || li((() => {
                    u = Ci(t, Ur, {
                        y: -10,
                        duration: 200
                    }), u.start()
                })), p = !0)
            },
            o(e) {
                bi(o), p = !1
            },
            d(e) {
                e && $o(t), f[n].d(), g = !1, Xn(m)
            }
        }
    }

    function Tm(e) {
        let t, n;
        return {
            c() {
                t = yo("span"), n = xo(e[0]), Mo(t, "class", "translatedText svelte-1csju44")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, t) {
                1 & t && Io(n, e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Lm(e) {
        let t, n;
        return t = new Rl({
            props: {
                error: e[2]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.error = e[2]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Em(e) {
        let t, n, o = e[4] && xm(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                e[4] ? o ? (o.p(e, n), 16 & n && $i(o, 1)) : (o = xm(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function km(e, t, n) {
        let o, i, s;
        eo(e, hs, (e => n(8, i = e))), eo(e, Cm, (e => n(3, s = e)));
        let a, r, {
                translatedText: l
            } = t,
            {
                sourceText: c
            } = t,
            {
                onClose: d
            } = t,
            {
                error: u
            } = t,
            p = !1;
        return setTimeout((() => n(4, p = !0)), 50), e.$$set = e => {
            "translatedText" in e && n(0, l = e.translatedText), "sourceText" in e && n(7, c = e.sourceText), "onClose" in e && n(1, d = e.onClose), "error" in e && n(2, u = e.error)
        }, e.$$.update = () => {
            8 & e.$$.dirty && n(5, o = s && s.isDarkMode), 128 & e.$$.dirty && Mt(c).then((e => {
                a = e
            })), 256 & e.$$.dirty && (r = i.selectedTargetLanguage)
        }, [l, d, u, s, p, o, function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: es,
                    sourceLang: a,
                    targetLang: r,
                    textToShare: c
                }
            })
        }, c, i]
    }
    class Sm extends Si {
        constructor(e) {
            super(), ki(this, e, km, Em, Yn, {
                translatedText: 0,
                sourceText: 7,
                onClose: 1,
                error: 2
            })
        }
    }
    class Mm extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t, n, o) {
            this.mainComponent = new Sm({
                target: this.shadowContainer,
                props: {
                    translatedText: e,
                    onClose: n,
                    sourceText: t,
                    error: o
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function Im(e) {
        let t, n, o, i;
        t = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_tooltip_translate_button"),
                multiline: !0,
                zIndex: "0",
                $$slots: {
                    default: [Om]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let s = e[7] && Nm(e);
        return {
            c() {
                Ti(t.$$.fragment), n = To(), s && s.c(), o = Lo()
            },
            m(e, a) {
                Li(t, e, a), vo(e, n, a), s && s.m(e, a), vo(e, o, a), i = !0
            },
            p(e, n) {
                const i = {};
                134217856 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(i), e[7] ? s ? (s.p(e, n), 128 & n && $i(s, 1)) : (s = Nm(e), s.c(), $i(s, 1), s.m(o.parentNode, o)) : s && (wi(), bi(s, 1, 1, (() => {
                    s = null
                })), vi())
            },
            i(e) {
                i || ($i(t.$$.fragment, e), $i(s), i = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), bi(s), i = !1
            },
            d(e) {
                Ei(t, e), e && $o(n), s && s.d(e), e && $o(o)
            }
        }
    }

    function Dm(e) {
        let t, n;
        return t = new Ec({
            props: {
                small: !0
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p: Gn,
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Om(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), t.innerHTML = '<svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ptnx4w"><g clip-path="url(#clip0)"><path d="M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z" fill="#0F2B46"></path><path d="M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z" fill="white"></path><path d="M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="18.5294" height="19" fill="white" transform="matrix(-1 0 0 1 18.5294 0)"></rect></clipPath></defs></svg>', Mo(t, "class", "translateTrigger svelte-ptnx4w")
            },
            m(i, s) {
                vo(i, t, s), n || (o = [Eo(t, "mouseover", e[20]), Eo(t, "click", e[13])], n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, Xn(o)
            }
        }
    }

    function Nm(e) {
        let t, n;
        return t = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_tooltip_settings_button"),
                multiline: !0,
                zIndex: "0",
                $$slots: {
                    default: [Am]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                134217792 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Am(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("div"), t.innerHTML = '<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ptnx4w"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.11001 16.2439H10.71L11.025 14.0488C11.565 13.8732 12.015 13.6098 12.465 13.2585L14.58 14.0488L16.38 10.9756L14.625 9.57073C14.67 9.30732 14.67 9.0439 14.67 8.78049C14.67 8.51707 14.67 8.25366 14.625 7.99024L16.38 6.58537L14.58 3.5122L12.465 4.30244C12.015 3.99512 11.52 3.73171 11.025 3.5122L10.665 1.31707H7.06501L6.70501 3.5122C6.16501 3.68781 5.71501 3.95122 5.26501 4.30244L3.15001 3.5122L1.35001 6.58537L3.10501 7.99024C3.06001 8.25366 3.06001 8.51707 3.06001 8.78049C3.06001 9.0439 3.06001 9.30732 3.10501 9.57073L1.35001 10.9756L3.15001 14.0488L5.31001 13.2585C5.76001 13.5659 6.25501 13.8293 6.75001 14.0488L7.11001 16.2439ZM9.94501 15.3659H7.83001L7.51501 13.3463L7.24501 13.2585C6.66001 13.0829 6.12001 12.7756 5.67001 12.3805L5.44501 12.2049L3.55501 12.9073L2.52001 11.1512L4.09501 9.87805L4.05001 9.61463C4.00501 9.30732 3.96001 9 3.96001 8.73659C3.96001 8.47317 4.00501 8.16585 4.05001 7.85854L4.09501 7.63902L2.52001 6.36585L3.55501 4.60976L5.44501 5.3122L5.67001 5.09268C6.12001 4.69756 6.66001 4.43415 7.24501 4.21463L7.51501 4.12683L7.83001 2.19512H9.94501L10.26 4.21463L10.53 4.30244C11.115 4.47805 11.655 4.78537 12.105 5.18049L12.285 5.3561L14.175 4.65366L15.21 6.40976L13.635 7.68293L13.68 7.94634C13.725 8.25366 13.77 8.56098 13.77 8.82439C13.77 9.08781 13.725 9.39512 13.68 9.70244L13.635 9.96585L15.21 11.239L14.175 12.9951L12.285 12.2927L12.105 12.4683C11.655 12.8634 11.115 13.1268 10.53 13.3463L10.26 13.4341L9.94501 15.3659ZM6.03018 8.78047C6.03018 10.3171 7.29018 11.5463 8.86518 11.5463C10.4402 11.5463 11.7002 10.3171 11.7002 8.78047C11.7002 7.24388 10.4402 6.01461 8.86518 6.01461C7.29018 6.01461 6.03018 7.24388 6.03018 8.78047ZM6.93018 8.78047C6.93018 7.72681 7.78518 6.89266 8.86518 6.89266C9.94518 6.89266 10.8002 7.72681 10.8002 8.78047C10.8002 9.83413 9.94518 10.6683 8.86518 10.6683C7.78518 10.6683 6.93018 9.83413 6.93018 8.78047Z" fill="#0F2B46"></path></svg>', Mo(t, "class", "settingsTrigger svelte-ptnx4w")
            },
            m(n, s) {
                vo(n, t, s), o || (i = [Eo(t, "click", e[21]), Eo(t, "mousedown", So(ko(e[19])))], o = !0)
            },
            p: Gn,
            i(e) {
                n || li((() => {
                    n = Ci(t, Ur, {
                        x: -8,
                        duration: 600
                    }), n.start()
                }))
            },
            o: Gn,
            d(e) {
                e && $o(t), o = !1, Xn(i)
            }
        }
    }

    function Rm(e) {
        let t, n, o, i, s;
        return n = new bm({}), n.$on("close", e[22]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "settingsContainer svelte-ptnx4w"), zo(t, "isTop", !e[9]), zo(t, "isLeft", !e[10])
            },
            m(e, o) {
                vo(e, t, o), Li(n, t, null), s = !0
            },
            p(e, n) {
                (!s || 512 & n) && zo(t, "isTop", !e[9]), (!s || 1024 & n) && zo(t, "isLeft", !e[10])
            },
            i(e) {
                s || ($i(n.$$.fragment, e), li((() => {
                    i && i.end(1), o = Ci(t, Ur, {
                        y: -10,
                        duration: 600
                    }), o.start()
                })), s = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o && o.invalidate(), i = xi(t, Ur, {
                    y: -10,
                    duration: 600
                }), s = !1
            },
            d(e) {
                e && $o(t), Ei(n), e && i && i.end()
            }
        }
    }

    function Pm(e) {
        let t, n, o, i, s, a, r, l;
        const c = [Dm, Im],
            d = [];

        function u(e, t) {
            return e[3] ? 0 : 1
        }
        n = u(e), o = d[n] = c[n](e);
        let p = e[6] && Rm(e);
        return {
            c() {
                t = yo("div"), o.c(), i = To(), p && p.c(), Mo(t, "class", "container svelte-ptnx4w"), Mo(t, "style", s = `top: ${e[5]}px; left: ${e[4]}px; z-index: ${e[12]}; opacity: ${e[11]};`), zo(t, "isTranslated", e[2]), zo(t, "isHidden", e[0]), zo(t, "messageHasReactionIcon", e[8]), zo(t, "isExpanded", e[7])
            },
            m(o, s) {
                vo(o, t, s), d[n].m(t, null), fo(t, i), p && p.m(t, null), e[23](t), a = !0, r || (l = [Eo(t, "mouseleave", e[24]), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[14]), Eo(t, "mousedown", So(ko(e[18])))], r = !0)
            },
            p(e, [r]) {
                let l = n;
                n = u(e), n === l ? d[n].p(e, r) : (wi(), bi(d[l], 1, 1, (() => {
                    d[l] = null
                })), vi(), o = d[n], o ? o.p(e, r) : (o = d[n] = c[n](e), o.c()), $i(o, 1), o.m(t, i)), e[6] ? p ? (p.p(e, r), 64 & r && $i(p, 1)) : (p = Rm(e), p.c(), $i(p, 1), p.m(t, null)) : p && (wi(), bi(p, 1, 1, (() => {
                    p = null
                })), vi()), (!a || 2096 & r && s !== (s = `top: ${e[5]}px; left: ${e[4]}px; z-index: ${e[12]}; opacity: ${e[11]};`)) && Mo(t, "style", s), (!a || 4 & r) && zo(t, "isTranslated", e[2]), (!a || 1 & r) && zo(t, "isHidden", e[0]), (!a || 256 & r) && zo(t, "messageHasReactionIcon", e[8]), (!a || 128 & r) && zo(t, "isExpanded", e[7])
            },
            i(e) {
                a || ($i(o), $i(p), a = !0)
            },
            o(e) {
                bi(o), bi(p), a = !1
            },
            d(o) {
                o && $o(t), d[n].d(), p && p.d(), e[23](null), r = !1, Xn(l)
            }
        }
    }

    function zm(e, t, n) {
        Yo("deepl_settings", hs), Yo("deepl_website_settings", Ui);
        let {
            textElement: o
        } = t, {
            messageContainer: i
        } = t;
        const s = 265,
            a = 150,
            r = 220;
        let l, c, d, u = !1,
            p = !0,
            g = 0,
            m = 0,
            h = !1,
            f = !1,
            _ = !1,
            w = M.deepl_inline_ui.z_index,
            v = !0,
            $ = !0,
            b = 0;

        function y() {
            const e = l.parentNode.getBoundingClientRect(),
                t = Pn(i);
            n(5, m = i.getBoundingClientRect().height / 2), n(4, g = t.getBoundingClientRect().right - e.left), setTimeout((() => {
                const t = i.querySelector('[data-icon="react"]');
                t && (n(4, g = t.getBoundingClientRect().right - e.left), n(17, d = !0)), n(11, b = 1)
            }), a);
            const o = i.querySelector('[data-a8n="reaction-bubble"]'),
                c = i.querySelector('[data-testid="reaction-bubble"]');
            n(8, _ = !(!o && !c)), window.innerHeight - e.bottom < r + m ? n(9, v = !1) : n(9, v = !0), i.getBoundingClientRect().right - t.getBoundingClientRect().right < s ? n(10, $ = !1) : n(10, $ = !0)
        }
        i.addEventListener("mouseover", (() => {
            n(0, p = !1)
        }), !1), i.addEventListener("mouseout", (() => {
            h || n(0, p = !0)
        }), !1);
        return e.$$set = e => {
            "textElement" in e && n(16, o = e.textElement), "messageContainer" in e && n(15, i = e.messageContainer)
        }, e.$$.update = () => {
            131073 & e.$$.dirty && (p || d || y())
        }, [p, l, c, u, g, m, h, f, _, v, $, b, w, async function () {
                if (c) return;
                n(3, u = !0), n(6, h = !1);
                let e, t, s = "";
                try {
                    s = await Mt(o.innerText)
                } catch (e) {
                    console.log(e)
                }
                try {
                    t = await Mn({
                        action: "dlRequestWhatsAppMessageTranslation",
                        payload: {
                            message: o.innerText,
                            messageLang: s,
                            domainName: window.location.hostname
                        }
                    })
                } catch (t) {
                    e = t, console.error(e)
                }
                n(2, c = e ? "" : t[0].text), n(3, u = !1);
                const a = document.createElement("deepl-whatsapp-translated-message");
                a.createDOM(c, o.innerText, (() => {
                    n(15, i.dataset.dlIsTranslated = "false", i), setTimeout((() => n(2, c = "")), 600), a.cleanupDOM(), a.remove()
                }), e), o.appendChild(a), n(15, i.dataset.dlIsTranslated = "true", i)
            },
            function () {
                n(6, h = !1)
            }, i, o, d,
            function (t) {
                ei.call(this, e, t)
            },
            function (t) {
                ei.call(this, e, t)
            }, () => n(7, f = !0), () => n(6, h = !h), () => n(6, h = !1),
            function (e) {
                ni[e ? "unshift" : "push"]((() => {
                    l = e, n(1, l)
                }))
            }, () => {
                h || n(7, f = !1)
            }]
    }
    window.customElements.define("deepl-whatsapp-translated-message", Mm);
    class Hm extends Si {
        constructor(e) {
            super(), ki(this, e, zm, Pm, Yn, {
                textElement: 16,
                messageContainer: 15
            })
        }
    }
    class Fm extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t) {
            this.mainComponent = new Hm({
                target: this.shadowContainer,
                props: {
                    textElement: e,
                    messageContainer: t
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }
    window.customElements.define("deepl-whatsapp-message-in-translator", Fm);

    function Bm(e) {
        return "rgb(0, 0, 0)" === e || "rgb(21, 32, 43)" === e
    }
    const Um = function () {
        let e = {
            isDarkMode: Bm(document.body.style.backgroundColor)
        };
        const {
            subscribe: t,
            update: n
        } = Ii(e);
        let o = new MutationObserver((e => {
            e.forEach((e => {
                "attributes" === e.type && "style" === e.attributeName && n((e => ({
                    ...e,
                    isDarkMode: Bm(document.body.style.backgroundColor)
                })))
            }))
        }));
        return o.observe(document.body, {
            attributes: !0
        }), An((() => {
            o.disconnect()
        })), {
            subscribe: t
        }
    }();

    function qm(e) {
        let t, n;
        return {
            c() {
                t = yo("span"), n = xo(e[0]), Mo(t, "class", "translatedText svelte-1dl3vos")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, t) {
                1 & t && Io(n, e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function jm(e) {
        let t, n;
        return t = new Rl({
            props: {
                error: e[2]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.error = e[2]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Wm(e) {
        let t, n, o = function (e) {
            let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h;
            const f = [jm, qm],
                _ = [];

            function w(e, t) {
                return e[2] ? 0 : 1
            }
            return o = w(e), i = _[o] = f[o](e), {
                c() {
                    t = yo("div"), n = yo("div"), i.c(), s = To(), a = yo("div"), a.textContent = `${chrome.i18n.getMessage("twitter_web_alternatives_link")}`, r = To(), l = yo("button"), c = Co("svg"), d = Co("path"), Mo(a, "class", "show-alternatives svelte-1dl3vos"), zo(a, "dark", e[3]), Mo(d, "d", "M3 9L9 3M3 3L9 9"), Mo(d, "stroke", u = e[3] ? "white" : "#037171"), Mo(d, "stroke-width", "1.5"), Mo(d, "stroke-linecap", "round"), Mo(d, "stroke-linejoin", "round"), Mo(c, "width", "12"), Mo(c, "height", "12"), Mo(c, "viewBox", "0 0 12 12"), Mo(c, "fill", "none"), Mo(c, "xmlns", "http://www.w3.org/2000/svg"), Mo(l, "class", "svelte-1dl3vos"), Mo(t, "class", "container svelte-1dl3vos"), zo(t, "dark", e[3])
                },
                m(i, u) {
                    vo(i, t, u), fo(t, n), _[o].m(n, null), fo(n, s), fo(n, a), fo(t, r), fo(t, l), fo(l, c), fo(c, d), g = !0, m || (h = [Eo(a, "click", e[4]), Eo(l, "click", (function () {
                        Qn(e[1]) && e[1].apply(this, arguments)
                    }))], m = !0)
                },
                p(r, l) {
                    let c = o;
                    o = w(e = r), o === c ? _[o].p(e, l) : (wi(), bi(_[c], 1, 1, (() => {
                        _[c] = null
                    })), vi(), i = _[o], i ? i.p(e, l) : (i = _[o] = f[o](e), i.c()), $i(i, 1), i.m(n, s)), (!g || 8 & l) && zo(a, "dark", e[3]), (!g || 8 & l && u !== (u = e[3] ? "white" : "#037171")) && Mo(d, "stroke", u), (!g || 8 & l) && zo(t, "dark", e[3])
                },
                i(e) {
                    g || ($i(i), p || li((() => {
                        p = Ci(t, Ur, {
                            y: -10,
                            duration: 200
                        }), p.start()
                    })), g = !0)
                },
                o(e) {
                    bi(i), g = !1
                },
                d(e) {
                    e && $o(t), _[o].d(), m = !1, Xn(h)
                }
            }
        }(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [t]) {
                o.p(e, t)
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function Gm(e, t, n) {
        let o, i, s;
        eo(e, hs, (e => n(6, i = e))), eo(e, Um, (e => n(7, s = e)));
        let a, r, {
                translatedText: l
            } = t,
            {
                sourceText: c
            } = t,
            {
                onClose: d
            } = t,
            {
                error: u
            } = t;
        return e.$$set = e => {
            "translatedText" in e && n(0, l = e.translatedText), "sourceText" in e && n(5, c = e.sourceText), "onClose" in e && n(1, d = e.onClose), "error" in e && n(2, u = e.error)
        }, e.$$.update = () => {
            128 & e.$$.dirty && n(3, o = s && s.isDarkMode), 32 & e.$$.dirty && Mt(c).then((e => {
                a = e
            })), 64 & e.$$.dirty && (r = i.selectedTargetLanguage)
        }, [l, d, u, o, function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: es,
                    sourceLang: a,
                    targetLang: r,
                    textToShare: c
                }
            })
        }, c, i, s]
    }
    class Vm extends Si {
        constructor(e) {
            super(), ki(this, e, Gm, Wm, Yn, {
                translatedText: 0,
                sourceText: 5,
                onClose: 1,
                error: 2
            })
        }
    }
    class Zm extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent = null;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t, n, o) {
            this.mainComponent = new Vm({
                target: this.shadowContainer,
                props: {
                    translatedText: e,
                    onClose: n,
                    sourceText: t,
                    error: o
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function Km(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        return {
            c() {
                t = yo("button"), n = yo("span"), n.textContent = `${chrome.i18n.getMessage("twitter_web_translate_tweet_link")}`, o = To(), i = Co("svg"), s = Co("g"), a = Co("path"), r = Co("path"), l = Co("path"), c = Co("defs"), d = Co("clipPath"), u = Co("rect"), Mo(a, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"), Mo(a, "class", "deepl-icon svelte-1uv8rvf"), Mo(r, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"), Mo(r, "fill", "white"), Mo(l, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"), Mo(l, "fill", "white"), Mo(s, "clip-path", "url(#clip0)"), Mo(u, "width", "18.5294"), Mo(u, "height", "19"), Mo(u, "fill", "white"), Mo(u, "transform", "matrix(-1 0 0 1 18.5294 0)"), Mo(d, "id", "clip0"), Mo(i, "width", "15"), Mo(i, "height", "15"), Mo(i, "viewBox", "0 0 19 19"), Mo(i, "fill", "none"), Mo(i, "xmlns", "http://www.w3.org/2000/svg"), Mo(t, "class", "tweetLink svelte-1uv8rvf"), t.disabled = p = !!e[0], zo(t, "dark", e[3])
            },
            m(p, h) {
                vo(p, t, h), fo(t, n), fo(t, o), fo(t, i), fo(i, s), fo(s, a), fo(s, r), fo(s, l), fo(i, c), fo(c, d), fo(d, u), g || (m = [Eo(t, "keydown", e[4]), Eo(t, "click", e[4])], g = !0)
            },
            p(e, n) {
                1 & n && p !== (p = !!e[0]) && (t.disabled = p), 8 & n && zo(t, "dark", e[3])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), g = !1, Xn(m)
            }
        }
    }

    function Xm(e) {
        let t, n;
        return t = new Ec({
            props: {
                small: !0
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p: Gn,
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Qm(e) {
        let t, n, o, i;
        const s = [Xm, Km],
            a = [];

        function r(e, t) {
            return e[1] ? 0 : e[2] ? 1 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)), {
            c() {
                n && n.c(), o = Lo()
            },
            m(e, n) {
                ~t && a[t].m(e, n), vo(e, o, n), i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e), t === l ? ~t && a[t].p(e, i) : (n && (wi(), bi(a[l], 1, 1, (() => {
                    a[l] = null
                })), vi()), ~t ? (n = a[t], n ? n.p(e, i) : (n = a[t] = s[t](e), n.c()), $i(n, 1), n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || ($i(n), i = !0)
            },
            o(e) {
                bi(n), i = !1
            },
            d(e) {
                ~t && a[t].d(e), e && $o(o)
            }
        }
    }

    function Ym(e, t, n) {
        let o, i, s;
        eo(e, hs, (e => n(6, i = e))), eo(e, Um, (e => n(7, s = e))), Yo("deepl_settings", hs), Yo("deepl_website_settings", Ui);
        let a, r, {
                tweetTextNode: l
            } = t,
            c = !1;
        return e.$$set = e => {
            "tweetTextNode" in e && n(5, l = e.tweetTextNode)
        }, e.$$.update = () => {
            if (128 & e.$$.dirty && n(3, o = s && s.isDarkMode), 64 & e.$$.dirty) {
                const e = i.blacklistDomainsForReading.includes(window.location.hostname);
                !i.enableInlineTranslation || e ? n(2, r = !1) : i.selectedTargetLanguage && async function () {
                    const e = l.innerText;
                    if (e.length < 20) return !1;
                    const t = await Mt(e);
                    return St(chrome.i18n.getUILanguage()) !== t && St(i.selectedTargetLanguage) !== t
                }().then((e => n(2, r = e))).catch((() => n(2, r = !1)))
            }
        }, [a, c, r, o, async function () {
            if (a) return;
            n(1, c = !0);
            let e, t, o = "";
            try {
                o = await Mt(l.innerText), o = Dt(o)
            } catch (e) {
                console.log(e)
            }
            try {
                t = await Mn({
                    action: "dlRequestTwitterTweetTranslation",
                    payload: {
                        message: l.innerText,
                        messageLang: o,
                        domainName: window.location.hostname
                    }
                })
            } catch (t) {
                e = t, console.error(e)
            }
            n(0, a = e ? "" : t[0].text), n(1, c = !1);
            const i = document.createElement("deepl-twitter-translated-tweet");
            i.createDOM(a, l.innerText, (() => {
                n(0, a = ""), i.cleanupDOM(), i.remove()
            }), e), l.appendChild(i)
        }, l, i, s]
    }
    window.customElements.define("deepl-twitter-translated-tweet", Zm);
    class Jm extends Si {
        constructor(e) {
            super(), ki(this, e, Ym, Qm, Yn, {
                tweetTextNode: 5
            })
        }
    }
    class eh extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent = null;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e) {
            this.mainComponent = new Jm({
                target: this.shadowContainer,
                props: {
                    tweetTextNode: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function th(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return i = new wm({}), i.$on("click", e[2]), c = new xc({
            props: {
                value: e[0].selectedTargetLanguage
            }
        }), c.$on("selection", e[3]), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), Ti(i.$$.fragment), s = To(), a = yo("div"), r = yo("p"), r.textContent = `${chrome.i18n.getMessage("whatsapp_web_chat_settings_languageswitch_label")}`, l = To(), Ti(c.$$.fragment), Mo(o, "class", "close-icon-container svelte-1vsdnvs"), Mo(n, "class", "header"), Mo(r, "class", "label-language-switch svelte-1vsdnvs"), Mo(a, "class", "body svelte-1vsdnvs"), Mo(t, "class", "container svelte-1vsdnvs")
            },
            m(e, u) {
                vo(e, t, u), fo(t, n), fo(n, o), Li(i, o, null), fo(t, s), fo(t, a), fo(a, r), fo(a, l), Li(c, a, null), d = !0
            },
            p(e, [t]) {
                const n = {};
                1 & t && (n.value = e[0].selectedTargetLanguage), c.$set(n)
            },
            i(e) {
                d || ($i(i.$$.fragment, e), $i(c.$$.fragment, e), d = !0)
            },
            o(e) {
                bi(i.$$.fragment, e), bi(c.$$.fragment, e), d = !1
            },
            d(e) {
                e && $o(t), Ei(i), Ei(c)
            }
        }
    }

    function nh(e, t, n) {
        let o;
        const i = Jo("deepl_settings");
        eo(e, i, (e => n(0, o = e)));
        const s = Qo();
        return [o, i, function () {
            s("close")
        }, e => i.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0
        })]
    }
    window.customElements.define("deepl-twitter-tweet-link", eh);
    class oh extends Si {
        constructor(e) {
            super(), ki(this, e, nh, th, Yn, {})
        }
    }

    function ih(e) {
        let t, n, o, i, s, a, r, l;
        return i = new wm({}), i.$on("click", e[1]), r = new Rl({
            props: {
                error: e[0]
            }
        }), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), Ti(i.$$.fragment), s = To(), a = yo("div"), Ti(r.$$.fragment), Mo(o, "class", "close-icon-container svelte-1l2i3ip"), Mo(n, "class", "header"), Mo(a, "class", "body svelte-1l2i3ip"), Mo(t, "class", "container svelte-1l2i3ip")
            },
            m(e, c) {
                vo(e, t, c), fo(t, n), fo(n, o), Li(i, o, null), fo(t, s), fo(t, a), Li(r, a, null), l = !0
            },
            p: Gn,
            i(e) {
                l || ($i(i.$$.fragment, e), $i(r.$$.fragment, e), l = !0)
            },
            o(e) {
                bi(i.$$.fragment, e), bi(r.$$.fragment, e), l = !1
            },
            d(e) {
                e && $o(t), Ei(i), Ei(r)
            }
        }
    }

    function sh(e) {
        const t = Qo();
        return [undefined, function () {
            t("close")
        }]
    }
    class ah extends Si {
        constructor(e) {
            super(), ki(this, e, sh, ih, Yn, {})
        }
    }

    function rh(e) {
        let t, n, o, i, s;
        return n = new ah({
            props: {
                error: e[3]
            }
        }), n.$on("close", e[6]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "errorContainer svelte-j6tuh")
            },
            m(e, o) {
                vo(e, t, o), Li(n, t, null), s = !0
            },
            p(e, t) {
                const o = {};
                8 & t && (o.error = e[3]), n.$set(o)
            },
            i(e) {
                s || ($i(n.$$.fragment, e), li((() => {
                    i && i.end(1), o = Ci(t, Ur, {
                        y: 30,
                        duration: 600
                    }), o.start()
                })), s = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o && o.invalidate(), i = xi(t, Ur, {
                    y: 30,
                    duration: 600
                }), s = !1
            },
            d(e) {
                e && $o(t), Ei(n), e && i && i.end()
            }
        }
    }

    function lh(e) {
        let t, n, o, i, s;
        return n = new oh({}), n.$on("close", e[7]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "settingsContainer svelte-j6tuh")
            },
            m(e, o) {
                vo(e, t, o), Li(n, t, null), s = !0
            },
            p: Gn,
            i(e) {
                s || ($i(n.$$.fragment, e), li((() => {
                    i && i.end(1), o = Ci(t, Ur, {
                        y: 30,
                        duration: 600
                    }), o.start()
                })), s = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o && o.invalidate(), i = xi(t, Ur, {
                    y: 30,
                    duration: 600
                }), s = !1
            },
            d(e) {
                e && $o(t), Ei(n), e && i && i.end()
            }
        }
    }

    function ch(e) {
        let t, n, o, i;
        return n = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_chat_translator_tooltip_settings_button"),
                multiline: !0,
                width: 34,
                $$slots: {
                    default: [dh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), Mo(t, "class", "expanded-background svelte-j6tuh")
            },
            m(e, o) {
                vo(e, t, o), Li(n, t, null), i = !0
            },
            p(e, t) {
                const o = {};
                16386 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), n.$set(o)
            },
            i(e) {
                i || ($i(n.$$.fragment, e), o || li((() => {
                    o = Ci(t, Ur, {
                        x: 9,
                        duration: 600
                    }), o.start()
                })), i = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && $o(t), Ei(n)
            }
        }
    }

    function dh(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), t.innerHTML = '<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.11001 16.2439H10.71L11.025 14.0488C11.565 13.8732 12.015 13.6098 12.465 13.2585L14.58 14.0488L16.38 10.9756L14.625 9.57073C14.67 9.30732 14.67 9.0439 14.67 8.78049C14.67 8.51707 14.67 8.25366 14.625 7.99024L16.38 6.58537L14.58 3.5122L12.465 4.30244C12.015 3.99512 11.52 3.73171 11.025 3.5122L10.665 1.31707H7.06501L6.70501 3.5122C6.16501 3.68781 5.71501 3.95122 5.26501 4.30244L3.15001 3.5122L1.35001 6.58537L3.10501 7.99024C3.06001 8.25366 3.06001 8.51707 3.06001 8.78049C3.06001 9.0439 3.06001 9.30732 3.10501 9.57073L1.35001 10.9756L3.15001 14.0488L5.31001 13.2585C5.76001 13.5659 6.25501 13.8293 6.75001 14.0488L7.11001 16.2439ZM9.94501 15.3659H7.83001L7.51501 13.3463L7.24501 13.2585C6.66001 13.0829 6.12001 12.7756 5.67001 12.3805L5.44501 12.2049L3.55501 12.9073L2.52001 11.1512L4.09501 9.87805L4.05001 9.61463C4.00501 9.30732 3.96001 9 3.96001 8.73659C3.96001 8.47317 4.00501 8.16585 4.05001 7.85854L4.09501 7.63902L2.52001 6.36585L3.55501 4.60976L5.44501 5.3122L5.67001 5.09268C6.12001 4.69756 6.66001 4.43415 7.24501 4.21463L7.51501 4.12683L7.83001 2.19512H9.94501L10.26 4.21463L10.53 4.30244C11.115 4.47805 11.655 4.78537 12.105 5.18049L12.285 5.3561L14.175 4.65366L15.21 6.40976L13.635 7.68293L13.68 7.94634C13.725 8.25366 13.77 8.56098 13.77 8.82439C13.77 9.08781 13.725 9.39512 13.68 9.70244L13.635 9.96585L15.21 11.239L14.175 12.9951L12.285 12.2927L12.105 12.4683C11.655 12.8634 11.115 13.1268 10.53 13.3463L10.26 13.4341L9.94501 15.3659ZM6.03018 8.78047C6.03018 10.3171 7.29018 11.5463 8.86518 11.5463C10.4402 11.5463 11.7002 10.3171 11.7002 8.78047C11.7002 7.24388 10.4402 6.01461 8.86518 6.01461C7.29018 6.01461 6.03018 7.24388 6.03018 8.78047ZM6.93018 8.78047C6.93018 7.72681 7.78518 6.89266 8.86518 6.89266C9.94518 6.89266 10.8002 7.72681 10.8002 8.78047C10.8002 9.83413 9.94518 10.6683 8.86518 10.6683C7.78518 10.6683 6.93018 9.83413 6.93018 8.78047Z" fill="#0F2B46"></path></svg>', Mo(t, "class", "icon-container svelte-j6tuh")
            },
            m(i, s) {
                vo(i, t, s), n || (o = [Eo(t, "click", e[8]), Eo(t, "mousedown", So(ko(e[5])))], n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, Xn(o)
            }
        }
    }

    function uh(e) {
        let t, n, o, i, s, a, r, l;
        return {
            c() {
                t = Co("svg"), n = Co("g"), o = Co("path"), i = Co("path"), s = Co("path"), a = Co("defs"), r = Co("clipPath"), l = Co("rect"), Mo(o, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"), Mo(o, "fill", "#0F2B46"), Mo(i, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"), Mo(i, "fill", "white"), Mo(s, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"), Mo(s, "fill", "white"), Mo(n, "clip-path", "url(#clip0)"), Mo(l, "width", "18.5294"), Mo(l, "height", "19"), Mo(l, "fill", "white"), Mo(l, "transform", "matrix(-1 0 0 1 18.5294 0)"), Mo(r, "id", "clip0"), Mo(t, "width", "22"), Mo(t, "height", "22"), Mo(t, "viewBox", "0 0 19 19"), Mo(t, "fill", "none"), Mo(t, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, c) {
                vo(e, t, c), fo(t, n), fo(n, o), fo(n, i), fo(n, s), fo(t, a), fo(a, r), fo(r, l)
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function ph(e) {
        let t, n;
        return t = new Ec({}), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function gh(e) {
        let t, n, o, i, s, a;
        const r = [ph, uh],
            l = [];

        function c(e, t) {
            return e[2] ? 0 : 1
        }
        return n = c(e), o = l[n] = r[n](e), {
            c() {
                t = yo("div"), o.c(), Mo(t, "class", "icon-container svelte-j6tuh")
            },
            m(o, r) {
                vo(o, t, r), l[n].m(t, null), i = !0, s || (a = [Eo(t, "click", e[4]), Eo(t, "mouseover", e[9])], s = !0)
            },
            p(e, i) {
                let s = n;
                n = c(e), n !== s && (wi(), bi(l[s], 1, 1, (() => {
                    l[s] = null
                })), vi(), o = l[n], o || (o = l[n] = r[n](e), o.c()), $i(o, 1), o.m(t, null))
            },
            i(e) {
                i || ($i(o), i = !0)
            },
            o(e) {
                bi(o), i = !1
            },
            d(e) {
                e && $o(t), l[n].d(), s = !1, Xn(a)
            }
        }
    }

    function mh(e) {
        let t, n, o, i, s, a, r, l, c = e[3] && rh(e),
            d = e[1] && lh(e),
            u = e[0] && ch(e);
        return s = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_chat_translator_tooltip_translate_button"),
                multiline: !0,
                $$slots: {
                    default: [gh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                c && c.c(), t = To(), d && d.c(), n = To(), o = yo("div"), u && u.c(), i = To(), Ti(s.$$.fragment), Mo(o, "class", "container svelte-j6tuh")
            },
            m(p, g) {
                c && c.m(p, g), vo(p, t, g), d && d.m(p, g), vo(p, n, g), vo(p, o, g), u && u.m(o, null), fo(o, i), Li(s, o, null), a = !0, r || (l = Eo(o, "mouseleave", e[10]), r = !0)
            },
            p(e, [a]) {
                e[3] ? c ? (c.p(e, a), 8 & a && $i(c, 1)) : (c = rh(e), c.c(), $i(c, 1), c.m(t.parentNode, t)) : c && (wi(), bi(c, 1, 1, (() => {
                    c = null
                })), vi()), e[1] ? d ? (d.p(e, a), 2 & a && $i(d, 1)) : (d = lh(e), d.c(), $i(d, 1), d.m(n.parentNode, n)) : d && (wi(), bi(d, 1, 1, (() => {
                    d = null
                })), vi()), e[0] ? u ? (u.p(e, a), 1 & a && $i(u, 1)) : (u = ch(e), u.c(), $i(u, 1), u.m(o, i)) : u && (wi(), bi(u, 1, 1, (() => {
                    u = null
                })), vi());
                const r = {};
                16389 & a && (r.$$scope = {
                    dirty: a,
                    ctx: e
                }), s.$set(r)
            },
            i(e) {
                a || ($i(c), $i(d), $i(u), $i(s.$$.fragment, e), a = !0)
            },
            o(e) {
                bi(c), bi(d), bi(u), bi(s.$$.fragment, e), a = !1
            },
            d(e) {
                c && c.d(e), e && $o(t), d && d.d(e), e && $o(n), e && $o(o), u && u.d(), Ei(s), r = !1, l()
            }
        }
    }

    function hh(e, t, n) {
        let o, i, s, a, r, l;

        function c() {
            l !== o.selectedTargetLanguage && function () {
                const e = document.body.querySelectorAll(".message-in");
                if (e)
                    for (let t of e) {
                        const e = t.querySelector("deepl-whatsapp-translated-message");
                        e && (t.dataset.dlIsTranslated = "false", e.remove())
                    }
            }();
            const e = [],
                t = document.body.querySelectorAll(".message-in"),
                n = Array.prototype.slice.call(t).reverse();
            let i = 0;
            for (let t of n) {
                const n = t.querySelector(".selectable-text.copyable-text");
                n && n.innerText && !Vi(n.innerText) && i < 1e3 - n.innerText.length && "true" !== t.dataset.dlIsTranslated && (i += n.innerText.length, e.push([t, n]))
            }
            return e
        }
        eo(e, hs, (e => n(12, o = e))), Yo("deepl_settings", hs), Yo("deepl_website_settings", Ui);
        return [i, s, a, r, async function () {
                const e = c();
                let t;
                n(3, r = void 0), n(2, a = !0);
                let i, s = [];
                try {
                    let t = new Map;
                    for (let n of e) {
                        const e = await Mt(n[1].innerText);
                        s.includes(e) ? t.set(e, t.get(e) + 1) : (s.push(e), t.set(e, 1))
                    }
                    i = [...t.entries()].reduce(((e, t) => t[1] > e[1] ? t : e))[0]
                } catch (e) {
                    console.error(e)
                }
                try {
                    t = await Mn({
                        action: "dlRequestWhatsAppMessagesTranslation",
                        payload: {
                            messages: e.map((e => e[1].innerText)),
                            messageLang: i,
                            detectedLanguages: s,
                            domainName: window.location.hostname
                        }
                    }), l = o.selectedTargetLanguage;
                    const n = t[0].texts;
                    for (let [t, o] of e.entries()) {
                        const e = document.createElement("deepl-whatsapp-translated-message"),
                            i = o[0].querySelector("deepl-whatsapp-message-in-translator");
                        i && (i.remove(), o[0].dataset.dlHasMessageTranslator = "false");
                        const s = () => {
                            o[0].dataset.dlIsTranslated = "false", setTimeout((() => {}), 600), e.cleanupDOM(), e.remove()
                        };
                        e.createDOM(n[t], o[1].innerText, s, void 0), o[1].appendChild(e), o[0].dataset.dlIsTranslated = "true"
                    }
                } catch (e) {
                    n(3, r = e), console.error(r)
                }
                n(2, a = !1)
            },
            function (t) {
                ei.call(this, e, t)
            }, () => n(3, r = void 0), () => n(1, s = !1), () => n(1, s = !s), () => n(0, i = !0), () => {
                s || n(0, i = !1)
            }]
    }
    class fh extends Si {
        constructor(e) {
            super(), ki(this, e, hh, mh, Yn, {})
        }
    }
    class _h extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.shadowContainer.addEventListener("click", (e => {
                e.stopPropagation(), e.stopImmediatePropagation()
            })), this.createDOM = this.createDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new fh({
                target: this.shadowContainer
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function wh(e) {
        let t, n, o, i, s, a, r, l;
        return {
            c() {
                t = Co("svg"), n = Co("g"), o = Co("path"), i = Co("path"), s = Co("path"), a = Co("defs"), r = Co("clipPath"), l = Co("rect"), Mo(o, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"), Mo(o, "fill", "#0F2B46"), Mo(i, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"), Mo(i, "fill", "white"), Mo(s, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"), Mo(s, "fill", "white"), Mo(n, "clip-path", "url(#clip0)"), Mo(l, "width", "18.5294"), Mo(l, "height", "19"), Mo(l, "fill", "white"), Mo(l, "transform", "matrix(-1 0 0 1 18.5294 0)"), Mo(r, "id", "clip0"), Mo(t, "width", e[1]), Mo(t, "height", e[0]), Mo(t, "class", "deepl-logo-icon"), Mo(t, "viewBox", "0 0 24 24"), Mo(t, "fill", "none"), Mo(t, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, c) {
                vo(e, t, c), fo(t, n), fo(n, o), fo(n, i), fo(n, s), fo(t, a), fo(a, r), fo(r, l)
            },
            p(e, [n]) {
                2 & n && Mo(t, "width", e[1]), 1 & n && Mo(t, "height", e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function vh(e, t, n) {
        let {
            height: o = "16px"
        } = t, {
            width: i = "16px"
        } = t;
        return e.$$set = e => {
            "height" in e && n(0, o = e.height), "width" in e && n(1, i = e.width)
        }, [o, i]
    }
    window.customElements.define("deepl-whatsapp-messages-in-translator", _h);
    class $h extends Si {
        constructor(e) {
            super(), ki(this, e, vh, wh, Yn, {
                height: 0,
                width: 1
            })
        }
    }

    function bh(e) {
        let t, n, o;
        return {
            c() {
                t = Co("svg"), n = Co("path"), Mo(n, "d", "M12.8332 5.83334H6.99984C5.71117 5.83334 4.6665 6.87801 4.6665 8.16667V21C4.6665 22.2887 5.71117 23.3333 6.99984 23.3333H19.8332C21.1218 23.3333 22.1665 22.2887 22.1665 21V15.1667M20.5166 4.18342C21.4278 3.27219 22.9052 3.27219 23.8164 4.18342C24.7276 5.09464 24.7276 6.57203 23.8164 7.48325L13.7997 17.5H10.4998L10.4998 14.2002L20.5166 4.18342Z"), Mo(n, "stroke", o = e[0] ? e[3] : e[4]), Mo(n, "stroke-width", "1.5"), Mo(n, "stroke-linecap", "round"), Mo(n, "stroke-linejoin", "round"), Mo(t, "width", e[2]), Mo(t, "height", e[1]), Mo(t, "class", "checkmark"), Mo(t, "viewBox", "0 0 26 26"), Mo(t, "fill", "none"), Mo(t, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, [i]) {
                25 & i && o !== (o = e[0] ? e[3] : e[4]) && Mo(n, "stroke", o), 4 & i && Mo(t, "width", e[2]), 2 & i && Mo(t, "height", e[1])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function yh(e, t, n) {
        let {
            disabled: o = !1
        } = t, {
            height: i = "16px"
        } = t, {
            width: s = "16px"
        } = t, {
            disabledColor: a = "#f1f1f1"
        } = t, {
            enabledColor: r = "#000"
        } = t;
        return e.$$set = e => {
            "disabled" in e && n(0, o = e.disabled), "height" in e && n(1, i = e.height), "width" in e && n(2, s = e.width), "disabledColor" in e && n(3, a = e.disabledColor), "enabledColor" in e && n(4, r = e.enabledColor)
        }, [o, i, s, a, r]
    }
    class Ch extends Si {
        constructor(e) {
            super(), ki(this, e, yh, bh, Yn, {
                disabled: 0,
                height: 1,
                width: 2,
                disabledColor: 3,
                enabledColor: 4
            })
        }
    }

    function xh(e) {
        let t, n, o, i, s, a, r;
        const l = [Lh, Th],
            c = [];

        function d(e, t) {
            return e[3] ? 0 : 1
        }
        return n = d(e), o = c[n] = l[n](e), {
            c() {
                t = yo("div"), o.c(), Mo(t, "class", "deepl-gmail-write-toolbar svelte-2n4lw0"), Mo(t, "style", i = `top: ${e[9]}px; left: ${e[10]}px`)
            },
            m(o, i) {
                vo(o, t, i), c[n].m(t, null), s = !0, a || (r = [Eo(t, "click", So(ko(e[25]))), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[26])], a = !0)
            },
            p(e, a) {
                let r = n;
                n = d(e), n === r ? c[n].p(e, a) : (wi(), bi(c[r], 1, 1, (() => {
                    c[r] = null
                })), vi(), o = c[n], o ? o.p(e, a) : (o = c[n] = l[n](e), o.c()), $i(o, 1), o.m(t, null)), (!s || 1536 & a[0] && i !== (i = `top: ${e[9]}px; left: ${e[10]}px`)) && Mo(t, "style", i)
            },
            i(e) {
                s || ($i(o), s = !0)
            },
            o(e) {
                bi(o), s = !1
            },
            d(e) {
                e && $o(t), c[n].d(), a = !1, Xn(r)
            }
        }
    }

    function Th(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $;
        return i = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_improve_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Eh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), r = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_translate_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [kh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), u = new xc({
            props: {
                value: e[12] || e[2].targetLanguageUserInput,
                disabled: !1,
                isBorderless: !0,
                fontSize: "sm"
            }
        }), u.$on("selection", e[22]), m = new fc({
            props: {
                selectedOption: e[1],
                items: e[7],
                placeholder: "...",
                dataQaButton: "deepl-language-selection-button",
                dataQaList: "deepl-language-selection-list",
                isBorderless: !0
            }
        }), m.$on("valueselected", e[23]), _ = new $h({
            props: {
                height: "24px",
                width: "24px"
            }
        }), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), Ti(i.$$.fragment), s = To(), a = yo("div"), Ti(r.$$.fragment), l = To(), c = yo("div"), d = yo("div"), Ti(u.$$.fragment), p = To(), g = yo("div"), Ti(m.$$.fragment), h = To(), f = yo("div"), Ti(_.$$.fragment), Mo(o, "class", "wrapper write-icon-wrapper svelte-2n4lw0"), Mo(a, "class", "wrapper translate-icon-wrapper svelte-2n4lw0"), Mo(d, "class", "dropdown"), Mo(c, "class", "wrapper language-wrapper svelte-2n4lw0"), Mo(g, "class", "wrapper shortcode-wrapper svelte-2n4lw0"), Mo(f, "class", "wrapper icon-wrapper svelte-2n4lw0"), Mo(n, "class", "dl-toolbar svelte-2n4lw0"), zo(n, "expanded", e[4]), Mo(t, "class", "dl-toolbar-positioner svelte-2n4lw0")
            },
            m(b, y) {
                vo(b, t, y), fo(t, n), fo(n, o), Li(i, o, null), fo(n, s), fo(n, a), Li(r, a, null), fo(n, l), fo(n, c), fo(c, d), Li(u, d, null), fo(n, p), fo(n, g), Li(m, g, null), fo(n, h), fo(n, f), Li(_, f, null), w = !0, v || ($ = Eo(f, "click", e[24]), v = !0)
            },
            p(e, t) {
                const o = {};
                96 & t[0] | 1048576 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), i.$set(o);
                const s = {};
                4128 & t[0] | 1048576 & t[1] && (s.$$scope = {
                    dirty: t,
                    ctx: e
                }), r.$set(s);
                const a = {};
                4100 & t[0] && (a.value = e[12] || e[2].targetLanguageUserInput), u.$set(a);
                const l = {};
                2 & t[0] && (l.selectedOption = e[1]), 128 & t[0] && (l.items = e[7]), m.$set(l), (!w || 16 & t[0]) && zo(n, "expanded", e[4])
            },
            i(e) {
                w || ($i(i.$$.fragment, e), $i(r.$$.fragment, e), $i(u.$$.fragment, e), $i(m.$$.fragment, e), $i(_.$$.fragment, e), w = !0)
            },
            o(e) {
                bi(i.$$.fragment, e), bi(r.$$.fragment, e), bi(u.$$.fragment, e), bi(m.$$.fragment, e), bi(_.$$.fragment, e), w = !1
            },
            d(e) {
                e && $o(t), Ei(i), Ei(r), Ei(u), Ei(m), Ei(_), v = !1, $()
            }
        }
    }

    function Lh(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return i = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_undo_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Sh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), r = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_accept_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Mh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), Ti(i.$$.fragment), s = To(), a = yo("div"), Ti(r.$$.fragment), Mo(o, "class", "wrapper undo-wrapper svelte-2n4lw0"), Mo(a, "class", "wrapper accept-wrapper svelte-2n4lw0"), Mo(n, "class", "dl-toolbar expanded accept-changes svelte-2n4lw0"), Mo(t, "class", "dl-toolbar-positioner svelte-2n4lw0")
            },
            m(u, p) {
                vo(u, t, p), fo(t, n), fo(n, o), Li(i, o, null), fo(n, s), fo(n, a), Li(r, a, null), l = !0, c || (d = [lo(Nn.call(null, n, {
                    isShadow: !0
                })), Eo(n, "click_outside", e[20])], c = !0)
            },
            p(e, t) {
                const n = {};
                1048576 & t[1] && (n.$$scope = {
                    dirty: t,
                    ctx: e
                }), i.$set(n);
                const o = {};
                1048576 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), r.$set(o)
            },
            i(e) {
                l || ($i(i.$$.fragment, e), $i(r.$$.fragment, e), l = !0)
            },
            o(e) {
                bi(i.$$.fragment, e), bi(r.$$.fragment, e), l = !1
            },
            d(e) {
                e && $o(t), Ei(i), Ei(r), c = !1, Xn(d)
            }
        }
    }

    function Eh(e) {
        let t, n, o, i, s, a;
        return n = new Ch({
            props: {
                height: "24px",
                width: "24px",
                disabled: !e[6]
            }
        }), {
            c() {
                t = yo("button"), Ti(n.$$.fragment), Mo(t, "class", "icon-button svelte-2n4lw0"), t.disabled = o = e[5] || !e[6], zo(t, "isTranslating", e[5])
            },
            m(o, r) {
                vo(o, t, r), Li(n, t, null), i = !0, s || (a = Eo(t, "click", So(ko(e[21]))), s = !0)
            },
            p(e, s) {
                const a = {};
                64 & s[0] && (a.disabled = !e[6]), n.$set(a), (!i || 96 & s[0] && o !== (o = e[5] || !e[6])) && (t.disabled = o), (!i || 32 & s[0]) && zo(t, "isTranslating", e[5])
            },
            i(e) {
                i || ($i(n.$$.fragment, e), i = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), i = !1
            },
            d(e) {
                e && $o(t), Ei(n), s = !1, a()
            }
        }
    }

    function kh(e) {
        let t, n, o, i, s, a, r;
        return {
            c() {
                t = yo("button"), n = Co("svg"), o = Co("path"), Mo(o, "d", "M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"), Mo(o, "stroke", i = e[5] || !e[12] ? "gray" : "#0F2B46"), Mo(o, "stroke-width", "1.5"), Mo(o, "stroke-linecap", "round"), Mo(o, "stroke-linejoin", "round"), Mo(n, "class", "translate-icon svelte-2n4lw0"), Mo(n, "width", "24"), Mo(n, "height", "24"), Mo(n, "viewBox", "0 0 24 24"), Mo(n, "fill", "none"), Mo(n, "xmlns", "http://www.w3.org/2000/svg"), t.disabled = s = e[5] || !e[12], Mo(t, "class", "icon-button svelte-2n4lw0"), zo(t, "isTranslating", e[5])
            },
            m(i, s) {
                vo(i, t, s), fo(t, n), fo(n, o), a || (r = Eo(t, "click", So(ko(e[14]))), a = !0)
            },
            p(e, n) {
                4128 & n[0] && i !== (i = e[5] || !e[12] ? "gray" : "#0F2B46") && Mo(o, "stroke", i), 4128 & n[0] && s !== (s = e[5] || !e[12]) && (t.disabled = s), 32 & n[0] && zo(t, "isTranslating", e[5])
            },
            d(e) {
                e && $o(t), a = !1, r()
            }
        }
    }

    function Sh(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), t.innerHTML = '<svg height="32px" width="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 8.33398H10.8333C14.5152 8.33398 17.5 11.3188 17.5 15.0007V16.6673M2.5 8.33398L7.5 13.334M2.5 8.33398L7.5 3.33398" stroke="#727A83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-2n4lw0"></path></svg>', Mo(t, "class", "confirm-button svelte-2n4lw0")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", So(ko(e[17]))), n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function Mh(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), t.innerHTML = '<svg width="24px" height="24px" class="checkmark" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L5 11L15 1" stroke="#727A83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-2n4lw0"></path></svg>', Mo(t, "class", "confirm-button svelte-2n4lw0")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", So(ko(e[16]))), n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function Ih(e) {
        let t, n, o = e[8] && xh(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, n) {
                e[8] ? o ? (o.p(e, n), 256 & n[0] && $i(o, 1)) : (o = xh(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function Dh(e, t, n) {
        let o;
        eo(e, hs, (e => n(2, o = e)));
        const {
            deepl_inline_ui: i
        } = M;
        let {
            messageContainer: s
        } = t, {
            updateLockStatus: a
        } = t;
        const r = "WRITE",
            l = "TRANSLATE";
        let c, d, u, p, g, m, h, f, _, w, v, $, b, y, C = null,
            x = !1,
            T = !1,
            L = !1;
        Yo("deepl_settings", hs), Ko((async () => {
            s && s && (s.addEventListener("input", S), s.addEventListener("paste", S), k()), n(7, p = Os()), n(12, b = o.targetLanguageUserInput), z(), F(), H(), window.addEventListener("popstate", O)
        })), Xo((() => {
            window.removeEventListener("popstate", O), s.removeEventListener("input", S), s.removeEventListener("paste", S)
        }));
        const E = async () => {
            if (!s) return;
            m = s.getInnerHTML();
            const e = s.innerText,
                t = e.length > xs;
            if (!c && t) return N(), void j(ct);
            n(5, u = !0), A(s);
            try {
                dr({
                    eventType: Xe,
                    lang: C.value,
                    sourceLength: e.length,
                    nicheIntegration: Oe.gmail
                }), await Op(s, !0), B({
                    lang: C.value,
                    sourceLength: e.length,
                    targetLength: s.innerText.length
                }), R(s), n(5, u = !1), I(!0, r)
            } catch (e) {
                P(e), R(s), n(5, u = !1), I(!1)
            }
        }, k = async () => {
            const e = s.getInnerHTML(),
                t = e.replace(/<[^>]+>/g, "");
            const o = await Mt(t);
            o.length && (e => {
                const t = p.find((t => t.value === e));
                t && n(1, C = t)
            })(o)
        }, S = () => {
            s && n(19, _ = s.innerText.length > 20), k()
        }, I = (e, t) => {
            if (!e) return n(3, x = !1), d = null, void(h = null);
            n(3, x = !0), d = t
        }, D = () => {
            d === l ? q(!0) : dr({
                eventType: et,
                ...h
            }), I(!1), m = null, n(4, T = !1)
        }, O = () => {
            document.querySelectorAll("deepl-gmail-character-limit-popup").forEach((e => {
                e.cleanupDOM, e.remove()
            }))
        }, N = () => {
            const e = (e => {
                for (; null !== e;) {
                    const t = e.getAttribute("role");
                    if ("TABLE" === e.tagName && ("dialog" === t || "presentation" === t)) return e.parentElement;
                    e = e.parentElement
                }
                return null
            })(s);
            e && (g = document.createElement("deepl-gmail-character-limit-popup"), g.createDOM({
                onCloseCharLimitPopup: O
            }), e.appendChild(g))
        }, A = e => {
            e && e.classList.add("deepl-selection-loading-skeleton")
        }, R = e => {
            e && e.classList.remove("deepl-selection-loading-skeleton")
        }, P = e => {
            Ui.update({
                error: e.message ? e.message : e
            })
        }, z = () => {
            const e = s;
            if (!e) return;
            y = new MutationObserver((() => {
                e && F()
            }));
            y.observe(e, {
                attributes: !1,
                childList: !0,
                characterData: !1
            })
        }, H = () => {
            window.addEventListener("scroll", (() => {
                F()
            }))
        }, F = () => {
            const e = s.getBoundingClientRect();
            e && (n(9, w = e.bottom - 30), n(10, v = e.right - 30))
        }, B = ({
            lang: e,
            sourceLength: t,
            targetLang: n,
            targetLength: o
        }) => {
            h = {
                lang: e,
                sourceLength: t,
                targetLang: n,
                targetLength: o,
                nicheIntegration: Oe.gmail
            }
        }, U = ({
            sourceLang: e,
            sourceLength: t,
            targetLang: n,
            targetLength: o
        }) => {
            h = {
                sourceLang: e,
                sourceLength: t,
                targetLang: n,
                targetLength: o,
                nicheIntegration: Oe.gmail
            }
        }, q = e => {
            Mn({
                action: "dlTrackTranslateAcceptOrRevertEvent",
                payload: {
                    eventType: e ? ot : it,
                    acceptOrRevertMetadata: h
                }
            })
        }, j = e => {
            Mn({
                action: "dlTrackGmailCharLimitReached",
                payload: {
                    gmailActionType: ds(e)
                }
            })
        };
        return e.$$set = e => {
            "messageContainer" in e && n(18, s = e.messageContainer), "updateLockStatus" in e && n(0, a = e.updateLockStatus)
        }, e.$$.update = () => {
            2 & e.$$.dirty[0] && n(7, p = Os(C)), 4 & e.$$.dirty[0] && (c = !0 === o.isLoggedIn && !0 === o.isProUser), 524290 & e.$$.dirty[0] && n(8, f = !!C && _), 2 & e.$$.dirty[0] && C && C.value && n(6, L = ["EN", "DE"].includes(C.value))
        }, [a, C, o, x, T, u, L, p, f, w, v, $, b, i, async () => {
            if (!s) return;
            m = s.getInnerHTML();
            const e = s.innerText,
                t = e.length > xs;
            if (!c && t) return N(), void j(lt);
            A(s);
            try {
                await Op(s, !1, b), R(s), n(5, u = !1), I(!0, l), U({
                    sourceLang: $.value,
                    targetLang: b,
                    sourceLength: e.length,
                    targetLength: s.innerText.length
                })
            } catch (e) {
                P(e), R(s), n(5, u = !1), I(!1)
            }
        }, E, D, () => {
            d === l ? q(!1) : dr({
                eventType: tt,
                ...h
            }), I(!1), n(18, s.innerHTML = m, s)
        }, s, _, () => {
            D()
        }, () => {
            E()
        }, async e => {
            n(12, b = e.detail.selectedOption.value)
        }, e => {
            n(11, $ = e.detail.selectedOption)
        }, () => {
            a(!0), n(4, T = !T)
        }, () => {
            a(!0)
        }, () => {
            a(!1), n(4, T = !1)
        }]
    }
    class Oh extends Si {
        constructor(e) {
            super(), ki(this, e, Dh, Ih, Yn, {
                messageContainer: 18,
                updateLockStatus: 0
            }, null, [-1, -1])
        }
    }
    class Nh extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({
            container: e,
            updateLockStatus: t
        }) {
            this.mainComponent = new Oh({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    messageContainer: e,
                    updateLockStatus: t
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function Ah(e) {
        let t;
        return {
            c() {
                t = yo("div"), Mo(t, "class", "dl-gmail")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }
    window.customElements.define(bs, Nh);

    function Rh(e, t, n) {
        let o, i, s, a, r;
        eo(e, hs, (e => n(5, o = e)));
        let l = !1;
        const c = () => {
                p(), o.isGmailEnabled ? d() : u()
            },
            d = () => {
                g(), m()
            },
            u = () => {
                Es([ys, ws, bs])
            },
            p = () => {
                const e = "data-has-dl-icon",
                    t = document.querySelector("header");
                if (!t || "banner" !== t.getAttribute("role") || t.hasAttribute(e)) return;
                const n = t.querySelector("[role='search']");
                if (!n) return;
                const o = n.parentNode;
                if (!o) return;
                const i = document.createElement(vs);
                o.insertAdjacentElement("afterend", i), i.createDOM(), t.setAttribute(e, !0)
            },
            g = () => {
                if (ks()) {
                    const e = Ss();
                    if (!e) return;
                    e.forEach((e => {
                        const t = Ds(e);
                        if (!t || Ms(e)) return;
                        const n = t.parentNode;
                        if (!n) return;
                        const o = document.createElement(ws);
                        n.after(o), o.createDOM({
                            container: e
                        })
                    }))
                }
            },
            m = () => {
                const e = document.activeElement;
                if (!e) return;
                const t = e.hasAttribute("contenteditable"),
                    n = Is(e),
                    o = e.hasAttribute(Cs),
                    i = e !== a,
                    s = !r && (!t || n || i),
                    c = t && (!o || i) && !n;
                !s || c || l ? (l = !1, s && f(), c && (f(), h(e))) : l = !0
            },
            h = e => {
                const t = document.createElement(bs);
                s = t, a = e, e.setAttribute(Cs, "true"), document.body.appendChild(t), t.createDOM({
                    container: e,
                    updateLockStatus: _
                })
            },
            f = () => {
                s && s.cleanupDOM();
                const e = Array.from(document.querySelectorAll(bs));
                for (const t of e) t.remove();
                document.querySelectorAll('[contenteditable][deepl-writing-ui-added="true"]').forEach((e => e.removeAttribute(Cs))), s = null
            },
            _ = e => {
                r = e
            },
            w = async e => {
                if ("dlChangeActiveTabStatus" === e.action) e.payload.isActive ? v() : $()
            }, v = () => {
                i && clearInterval(i), i = setInterval(c, 200)
            }, $ = () => {
                clearInterval(i)
            };
        return Ko((() => {
            v(), chrome.runtime.onMessage.addListener(w)
        })), Xo((() => {
            u(), i && $(), chrome.runtime.onMessage.removeListener(w)
        })), []
    }
    class Ph extends Si {
        constructor(e) {
            super(), ki(this, e, Rh, Ah, Yn, {})
        }
    }
    class zh extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new Ph({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
        showOnboarding() {
            this.mainComponent.showOnboarding()
        }
    }

    function Hh(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        return {
            c() {
                t = yo("div"), n = yo("div"), n.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_title")}`, o = To(), i = yo("div"), i.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_body")}`, s = To(), a = yo("div"), r = yo("button"), r.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_not_now_button")}`, l = To(), c = yo("button"), c.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_try_pro_button")}`, Mo(n, "class", "title svelte-1okvtgy"), Mo(i, "class", "body svelte-1okvtgy"), Mo(r, "class", "svelte-1okvtgy"), Mo(c, "class", "svelte-1okvtgy"), Mo(a, "class", "footer svelte-1okvtgy"), Mo(t, "class", "dl-gmail-character-limit-popup svelte-1okvtgy")
            },
            m(p, g) {
                vo(p, t, g), fo(t, n), fo(t, o), fo(t, i), fo(t, s), fo(t, a), fo(a, r), fo(a, l), fo(a, c), d || (u = [Eo(r, "click", (function () {
                    Qn(e[0]) && e[0].apply(this, arguments)
                })), Eo(c, "click", e[1]), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[2])], d = !0)
            },
            p(t, [n]) {
                e = t
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), d = !1, Xn(u)
            }
        }
    }

    function Fh(e, t, n) {
        let {
            onCloseCharLimitPopup: o
        } = t;
        return e.$$set = e => {
            "onCloseCharLimitPopup" in e && n(0, o = e.onCloseCharLimitPopup)
        }, [o, () => {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ji,
                    utmContent: "header_home"
                }
            }), o && o()
        }, () => o()]
    }
    window.customElements.define($s, zh);
    class Bh extends Si {
        constructor(e) {
            super(), ki(this, e, Fh, Hh, Yn, {
                onCloseCharLimitPopup: 0
            })
        }
    }
    class Uh extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({
            onCloseCharLimitPopup: e
        }) {
            this.mainComponent = new Bh({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    onCloseCharLimitPopup: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function qh(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("button"), n = yo("span"), Mo(n, "class", "svelte-1mtvz9f"), Mo(t, "class", "switch svelte-1mtvz9f"), Mo(t, "data-qa", e[1]), zo(t, "checked", e[0])
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), o || (i = Eo(t, "click", e[2]), o = !0)
            },
            p(e, [n]) {
                2 & n && Mo(t, "data-qa", e[1]), 1 & n && zo(t, "checked", e[0])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), o = !1, i()
            }
        }
    }

    function jh(e, t, n) {
        let {
            checked: o = !1
        } = t, {
            qaRoot: i = "dl-switch"
        } = t;
        const s = Qo();
        return e.$$set = e => {
            "checked" in e && n(0, o = e.checked), "qaRoot" in e && n(1, i = e.qaRoot)
        }, [o, i, function () {
            s("change", {
                checked: !o
            })
        }]
    }
    window.customElements.define(ys, Uh);
    class Wh extends Si {
        constructor(e) {
            super(), ki(this, e, jh, qh, Yn, {
                checked: 0,
                qaRoot: 1
            })
        }
    }

    function Gh(e) {
        let t, n, o, i;
        return {
            c() {
                t = Co("svg"), n = Co("path"), Mo(n, "d", "M1 7L5 11L15 1"), Mo(n, "stroke", o = e[0] ? e[3] : e[4]), Mo(n, "stroke-width", "2"), Mo(n, "stroke-linecap", "round"), Mo(n, "stroke-linejoin", "round"), Mo(n, "class", "svelte-mrm8jk"), Mo(t, "width", e[2]), Mo(t, "height", e[1]), Mo(t, "class", "checkmark svelte-mrm8jk"), Mo(t, "viewBox", "0 0 16 12"), Mo(t, "fill", "none"), Mo(t, "xmlns", "http://www.w3.org/2000/svg"), Mo(t, "style", i = `padding: ${e[6]};`), zo(t, "enableHover", e[5])
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, [s]) {
                25 & s && o !== (o = e[0] ? e[3] : e[4]) && Mo(n, "stroke", o), 4 & s && Mo(t, "width", e[2]), 2 & s && Mo(t, "height", e[1]), 64 & s && i !== (i = `padding: ${e[6]};`) && Mo(t, "style", i), 32 & s && zo(t, "enableHover", e[5])
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Vh(e, t, n) {
        let {
            disabled: o = !1
        } = t, {
            height: i = "16px"
        } = t, {
            width: s = "16px"
        } = t, {
            disabledColor: a = "#727A83"
        } = t, {
            enabledColor: r = "#007E5E"
        } = t, {
            enableHover: l = !1
        } = t, {
            padding: c
        } = t;
        return e.$$set = e => {
            "disabled" in e && n(0, o = e.disabled), "height" in e && n(1, i = e.height), "width" in e && n(2, s = e.width), "disabledColor" in e && n(3, a = e.disabledColor), "enabledColor" in e && n(4, r = e.enabledColor), "enableHover" in e && n(5, l = e.enableHover), "padding" in e && n(6, c = e.padding)
        }, [o, i, s, a, r, l, c]
    }
    class Zh extends Si {
        constructor(e) {
            super(), ki(this, e, Vh, Gh, Yn, {
                disabled: 0,
                height: 1,
                width: 2,
                disabledColor: 3,
                enabledColor: 4,
                enableHover: 5,
                padding: 6
            })
        }
    }

    function Kh(e) {
        let t, n, o, i, s, a, r, l, c, d = !e[2] && Xh(e);
        const u = [tf, ef],
            p = [];
        return s = 1, a = p[1] = u[1](e), {
            c() {
                t = yo("div"), n = yo("div"), d && d.c(), o = To(), i = yo("div"), a.c(), Mo(i, "class", "footer"), Mo(n, "class", "content svelte-9wl7eu"), Mo(t, "class", "onboarding-popup svelte-9wl7eu"), zo(t, "hasBackgroundImage", !e[2])
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), d && d.m(n, null), fo(n, o), fo(n, i), p[1].m(i, null), r = !0, l || (c = [lo(Nn.call(null, t, {
                    isShadow: !0,
                    exceptions: ["#dl-gmail-settings-icon"]
                })), Eo(t, "click_outside", e[7])], l = !0)
            },
            p(e, i) {
                e[2] ? d && (wi(), bi(d, 1, 1, (() => {
                    d = null
                })), vi()) : d ? (d.p(e, i), 4 & i && $i(d, 1)) : (d = Xh(e), d.c(), $i(d, 1), d.m(n, o)), a.p(e, i), (!r || 4 & i) && zo(t, "hasBackgroundImage", !e[2])
            },
            i(e) {
                r || ($i(d), $i(a), r = !0)
            },
            o(e) {
                bi(d), bi(a), r = !1
            },
            d(e) {
                e && $o(t), d && d.d(), p[1].d(), l = !1, Xn(c)
            }
        }
    }

    function Xh(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p;
        let g = Qh(e);
        const m = [Jh, Yh],
            h = [];
        return d = 1, u = h[1] = m[1](e), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), g.c(), i = To(), s = yo("div"), s.textContent = "BETA", a = To(), r = yo("div"), l = To(), c = yo("div"), u.c(), Mo(s, "class", "beta svelte-9wl7eu"), Mo(n, "class", "left svelte-9wl7eu"), Mo(r, "class", "right"), Mo(t, "class", "title svelte-9wl7eu"), Mo(c, "class", "body svelte-9wl7eu")
            },
            m(e, d) {
                vo(e, t, d), fo(t, n), fo(n, o), g.m(o, null), fo(n, i), fo(n, s), fo(t, a), fo(t, r), vo(e, l, d), vo(e, c, d), h[1].m(c, null), p = !0
            },
            p(e, t) {
                g.p(e, t), u.p(e, t)
            },
            i(e) {
                p || ($i(u), p = !0)
            },
            o(e) {
                bi(u), p = !1
            },
            d(e) {
                e && $o(t), g.d(), e && $o(l), e && $o(c), h[1].d()
            }
        }
    }

    function Qh(e) {
        let t, n = chrome.i18n.getMessage("gmail_onboarding_title") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Yh(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h;
        return n = new Zh({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }), r = new Zh({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }), p = new Zh({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }), {
            c() {
                t = yo("div"), Ti(n.$$.fragment), o = To(), i = yo("div"), i.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_1")}`, s = To(), a = yo("div"), Ti(r.$$.fragment), l = To(), c = yo("div"), c.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_2")}`, d = To(), u = yo("div"), Ti(p.$$.fragment), g = To(), m = yo("div"), m.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_3")}`, Mo(i, "class", "copy-text svelte-9wl7eu"), Mo(t, "class", "copy svelte-9wl7eu"), Mo(c, "class", "copy-text svelte-9wl7eu"), Mo(a, "class", "copy svelte-9wl7eu"), Mo(m, "class", "copy-text svelte-9wl7eu"), Mo(u, "class", "copy svelte-9wl7eu")
            },
            m(e, f) {
                vo(e, t, f), Li(n, t, null), fo(t, o), fo(t, i), vo(e, s, f), vo(e, a, f), Li(r, a, null), fo(a, l), fo(a, c), vo(e, d, f), vo(e, u, f), Li(p, u, null), fo(u, g), fo(u, m), h = !0
            },
            p: Gn,
            i(e) {
                h || ($i(n.$$.fragment, e), $i(r.$$.fragment, e), $i(p.$$.fragment, e), h = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), bi(r.$$.fragment, e), bi(p.$$.fragment, e), h = !1
            },
            d(e) {
                e && $o(t), Ei(n), e && $o(s), e && $o(a), Ei(r), e && $o(d), e && $o(u), Ei(p)
            }
        }
    }

    function Jh(e) {
        let t;
        return {
            c() {
                t = yo("span"), t.textContent = `${chrome.i18n.getMessage("gmail_onboarding_char_limit_reached_body")}`
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function ef(e) {
        let t, n, o, i, s, a, r;
        return a = new Wh({
            props: {
                checked: e[0].isGmailEnabled
            }
        }), a.$on("change", e[6]), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("p"), o.textContent = `${chrome.i18n.getMessage("gmail_onboarding_toggle")}`, i = To(), s = yo("div"), Ti(a.$$.fragment), Mo(n, "class", "switch-content svelte-9wl7eu"), Mo(s, "class", "switch"), Mo(t, "class", "switch-container svelte-9wl7eu")
            },
            m(e, l) {
                vo(e, t, l), fo(t, n), fo(n, o), fo(t, i), fo(t, s), Li(a, s, null), r = !0
            },
            p(e, t) {
                const n = {};
                1 & t && (n.checked = e[0].isGmailEnabled), a.$set(n)
            },
            i(e) {
                r || ($i(a.$$.fragment, e), r = !0)
            },
            o(e) {
                bi(a.$$.fragment, e), r = !1
            },
            d(e) {
                e && $o(t), Ei(a)
            }
        }
    }

    function tf(e) {
        let t;
        return {
            c() {
                t = yo("button"), t.textContent = `${chrome.i18n.getMessage("gmail_onboarding_char_limit_reached_button")}`, Mo(t, "class", "pro-button svelte-9wl7eu")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function nf(e) {
        let t, n, o, i, s, a, r = e[1] && Kh(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), o = To(), r && r.c(), Mo(n, "class", "icon svelte-9wl7eu"), Mo(n, "id", "dl-gmail-settings-icon"), zo(n, "isOnboardingPopupOpen", e[1]), Mo(t, "class", "deepl-gmail-header-toolbar svelte-9wl7eu")
            },
            m(l, c) {
                vo(l, t, c), fo(t, n), fo(t, o), r && r.m(t, null), i = !0, s || (a = Eo(n, "click", So(ko(e[5]))), s = !0)
            },
            p(e, [o]) {
                (!i || 2 & o) && zo(n, "isOnboardingPopupOpen", e[1]), e[1] ? r ? (r.p(e, o), 2 & o && $i(r, 1)) : (r = Kh(e), r.c(), $i(r, 1), r.m(t, null)) : r && (wi(), bi(r, 1, 1, (() => {
                    r = null
                })), vi())
            },
            i(e) {
                i || ($i(r), i = !0)
            },
            o(e) {
                bi(r), i = !1
            },
            d(e) {
                e && $o(t), r && r.d(), s = !1, a()
            }
        }
    }

    function of (e, t, n) {
        let o;
        eo(e, hs, (e => n(0, o = e)));
        let i = !1,
            s = !1;
        const a = () => {
                Mn({
                    action: "dlTrackOnboardingModalShown",
                    payload: {
                        nicheIntegration: Oe.gmail
                    }
                })
            },
            r = async e => {
                n(1, i = e), Mn({
                    action: "dlTrackUILocationClicked",
                    payload: se
                }), e && a()
            }, l = async e => {
                await hs.set({
                    isGmailEnabled: e
                }), Mn({
                    action: "dlTrackCustomizationEnabledEvent",
                    payload: {
                        nicheIntegration: Oe.gmail,
                        uiLocation: ie,
                        customizationEnabled: e
                    }
                })
            };
        Ko((async () => {
            o.wasGmailOnboardingShown || (n(1, i = !0), a(), await hs.set({
                wasGmailOnboardingShown: !0
            }))
        }));
        return e.$$.update = () => {
            1 & e.$$.dirty && n(2, s = !0 === o.isLoggedIn && !0 === o.isProUser)
        }, [o, i, s, r, l, () => {
            r(!i)
        }, e => l(e.detail.checked), () => {
            r(!1)
        }]
    }
    class sf extends Si {
        constructor(e) {
            super(), ki(this, e, of , nf, Yn, {})
        }
    }
    class af extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new sf({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function rf(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y, C, x, T, L, E, k, S, M, I, D, O, N, A, R, P = chrome.i18n.getMessage("gmail_reading_translate_button") + "",
            z = chrome.i18n.getMessage("gmail_reading_forward_button") + "",
            H = null != e[4] && lf(e);
        return l = new xc({
            props: {
                disabled: e[0],
                websiteSettings: Ui,
                value: e[1].selectedTargetLanguage
            }
        }), l.$on("selection", e[14]), x = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_reading_view_original_button"),
                multiline: !1,
                zIndex: 2,
                $$slots: {
                    default: [cf]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("div"), i = To(), s = yo("div"), H && H.c(), a = To(), r = yo("div"), Ti(l.$$.fragment), c = To(), d = yo("div"), u = yo("button"), p = Co("svg"), g = Co("g"), m = Co("path"), h = Co("path"), f = Co("path"), _ = Co("defs"), w = Co("clipPath"), v = Co("rect"), $ = To(), b = xo(P), y = To(), C = yo("div"), Ti(x.$$.fragment), T = To(), L = yo("div"), E = yo("button"), k = Co("svg"), S = Co("path"), I = To(), D = xo(z), Mo(o, "class", "language-icon svelte-1plsg6e"), Mo(s, "class", "language-selection-wrapper svelte-1plsg6e"), Mo(r, "class", "language-selection-wrapper svelte-1plsg6e"), Mo(m, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"), Mo(m, "class", "deepl-icon"), Mo(h, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"), Mo(h, "fill", "#0f2b46"), Mo(f, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"), Mo(f, "fill", "#0f2b46"), Mo(g, "clip-path", "url(#clip0)"), Mo(v, "width", "18.5294"), Mo(v, "height", "19"), Mo(v, "fill", "white"), Mo(v, "transform", "matrix(-1 0 0 1 18.5294 0)"), Mo(w, "id", "clip0"), Mo(p, "width", "15"), Mo(p, "height", "15"), Mo(p, "viewBox", "0 0 19 19"), Mo(p, "fill", "white"), Mo(p, "xmlns", "http://www.w3.org/2000/svg"), Mo(p, "class", "deepl-logo-svg svelte-1plsg6e"), Mo(u, "class", "translate-button svelte-1plsg6e"), u.disabled = e[0], Mo(u, "paddingx", "none"), Mo(n, "class", "left-side svelte-1plsg6e"), Mo(S, "d", "M15 1L19 5M19 5L15 9M19 5L1 5"), Mo(S, "stroke", M = e[2] ? "#0F2B46" : "#848F9B"), Mo(S, "stroke-width", "1.5"), Mo(S, "stroke-linecap", "round"), Mo(S, "stroke-linejoin", "round"), Mo(k, "width", "20"), Mo(k, "height", "10"), Mo(k, "viewBox", "0 0 20 10"), Mo(k, "fill", "none"), Mo(k, "xmlns", "http://www.w3.org/2000/svg"), Mo(k, "class", "svelte-1plsg6e"), E.disabled = O = !e[2], Mo(E, "class", "forward-button svelte-1plsg6e"), Mo(E, "paddingx", "none"), Mo(L, "class", "right-side svelte-1plsg6e"), Mo(t, "class", "dl-gmail-email-toolbar svelte-1plsg6e")
            },
            m(M, O) {
                vo(M, t, O), fo(t, n), fo(n, o), fo(n, i), fo(n, s), H && H.m(s, null), fo(n, a), fo(n, r), Li(l, r, null), fo(n, c), fo(n, d), fo(d, u), fo(u, p), fo(p, g), fo(g, m), fo(g, h), fo(g, f), fo(p, _), fo(_, w), fo(w, v), fo(u, $), fo(u, b), fo(n, y), fo(n, C), Li(x, C, null), fo(t, T), fo(t, L), fo(L, E), fo(E, k), fo(k, S), fo(E, I), fo(E, D), N = !0, A || (R = [Eo(u, "click", So(ko(e[8]))), Eo(E, "click", e[9])], A = !0)
            },
            p(e, t) {
                null != e[4] ? H ? (H.p(e, t), 16 & t && $i(H, 1)) : (H = lf(e), H.c(), $i(H, 1), H.m(s, null)) : H && (wi(), bi(H, 1, 1, (() => {
                    H = null
                })), vi());
                const n = {};
                1 & t && (n.disabled = e[0]), 2 & t && (n.value = e[1].selectedTargetLanguage), l.$set(n), (!N || 1 & t) && (u.disabled = e[0]);
                const o = {};
                268435460 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }), x.$set(o), (!N || 4 & t && M !== (M = e[2] ? "#0F2B46" : "#848F9B")) && Mo(S, "stroke", M), (!N || 4 & t && O !== (O = !e[2])) && (E.disabled = O)
            },
            i(e) {
                N || ($i(H), $i(l.$$.fragment, e), $i(x.$$.fragment, e), N = !0)
            },
            o(e) {
                bi(H), bi(l.$$.fragment, e), bi(x.$$.fragment, e), N = !1
            },
            d(e) {
                e && $o(t), H && H.d(), Ei(l), Ei(x), A = !1, Xn(R)
            }
        }
    }

    function lf(e) {
        let t, n;
        return t = new xc({
            props: {
                disabled: e[0],
                value: e[4],
                websiteSettings: Ui,
                customClass: "borderless",
                fontSize: "sm"
            }
        }), t.$on("selection", e[13]), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.disabled = e[0]), 16 & n && (o.value = e[4]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function cf(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = yo("button"), n = Co("svg"), o = Co("path"), Mo(o, "d", "M7 16L3 12M3 12L7 8M3 12L21 12"), Mo(o, "stroke", i = e[2] ? "#000" : "#848F9B"), Mo(o, "stroke-width", "2"), Mo(o, "stroke-linecap", "round"), Mo(o, "stroke-linejoin", "round"), Mo(n, "height", "20px"), Mo(n, "width", "20px"), Mo(n, "viewBox", "0 0 24 24"), Mo(n, "fill", "none"), Mo(n, "xmlns", "http://www.w3.org/2000/svg"), Mo(t, "class", "show-original-button svelte-1plsg6e"), Mo(t, "paddingx", "none"), zo(t, "enabled", e[2])
            },
            m(i, r) {
                vo(i, t, r), fo(t, n), fo(n, o), s || (a = Eo(t, "click", So(ko(e[7]))), s = !0)
            },
            p(e, n) {
                4 & n && i !== (i = e[2] ? "#000" : "#848F9B") && Mo(o, "stroke", i), 4 & n && zo(t, "enabled", e[2])
            },
            d(e) {
                e && $o(t), s = !1, a()
            }
        }
    }

    function df(e) {
        let t, n, o = e[5] && e[6] && rf(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                e[5] && e[6] ? o ? (o.p(e, n), 96 & n && $i(o, 1)) : (o = rf(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function uf(e, t, n) {
        let o, i, s, a, r, l;
        eo(e, hs, (e => n(1, o = e)));
        let c, d, u, p, g = !1,
            m = !1,
            h = !1,
            f = !1,
            _ = !1,
            {
                container: w
            } = t;
        Ko((async () => {
            C(), await b(), n(3, c = o.selectedTargetLanguage), setTimeout((() => {
                n(6, _ = !0)
            }), 250), window.addEventListener("popstate", $)
        })), Xo((() => {
            window.removeEventListener("popstate", $)
        }));
        const v = () => {
                i.innerText = s.innerText, i.innerHTML = s.innerHTML, n(11, m = !1)
            },
            $ = () => {
                document.querySelectorAll("deepl-gmail-character-limit-popup").forEach((e => {
                    e.cleanupDOM, e.remove()
                }))
            },
            b = async () => {
                if (!r) return;
                if (a = await Mt(r), n(5, p = kt(a)), !p) return;
                const e = Dt(St(a));
                n(4, u = e)
            }, y = async () => {
                const e = `<a href="https://www.deepl.com/pro" target="_blank">${chrome.i18n.getMessage("gmail_forwarding_link")}</a>`;
                let t;
                if (g) t = i.getInnerHTML();
                else {
                    const n = `<p style="text-align: center;">${chrome.i18n.getMessage("gmail_forwarding_title")} ${e}</p>`;
                    t = `${i.getInnerHTML()}<br>${n}`
                }
                const o = {
                        html: t,
                        text: (new DOMParser).parseFromString(t, "text/html").body.textContent
                    },
                    s = document.querySelector("[contenteditable='true']");
                s.focus(), setTimeout((() => {
                    s.focus(), yr(s, o), n(12, f = !1)
                }), 300)
            }, C = () => {
                const e = Array.from(w.children).filter((e => "div" === e.tagName.toLowerCase()));
                if (3 !== e.length) return;
                const t = e[1];
                if (!t) return;
                const n = Array.from(t.children).filter((e => "div" === e.tagName.toLowerCase()));
                if (!n || !n.length) return;
                const o = n[2];
                o && (s = o.cloneNode(!0), i = o, o.innerHTML, r = o.innerText)
            };
        return e.$$set = e => {
            "container" in e && n(10, w = e.container)
        }, e.$$.update = () => {
            6145 & e.$$.dirty && n(2, l = m && !h && !f), 2 & e.$$.dirty && (g = !0 === o.isLoggedIn && !0 === o.isProUser)
        }, [h, o, l, c, u, p, _, v, async () => {
            if (!i) return;
            let e = [];
            const {
                domElements: t,
                strings: o,
                cloneContainer: s
            } = Dp(i), a = o.reduce(((e, t) => e + t.length), 0);
            if (!g && a > xs) return Mn({
                action: "dlTrackGmailCharLimitReached",
                payload: {
                    gmailActionType: ds(rt)
                }
            }), d = document.createElement("deepl-gmail-character-limit-popup"), d.createDOM({
                onCloseCharLimitPopup: $
            }), void document.body.appendChild(d);
            n(0, h = !0), e = o.map((e => ({
                text: e
            }))), (e => {
                if (!e) return;
                const {
                    height: t
                } = e.getBoundingClientRect(), n = Math.floor(t / 20), o = [];
                for (let e = 0; e < n; e++) o.push(`<div style="width: ${i=35,s=99,Math.floor(Math.random()*(s-i+1))+i}%" class="deepl-gmail-loading-skeleton">line</div>`);
                var i, s;
                e.innerHTML = o.join("")
            })(i);
            try {
                const o = await Mn({
                    action: "dlRequestGmailReceivedEmailTranslation",
                    payload: {
                        targetLang: c,
                        sourceLang: u,
                        requests: e,
                        domainName: window.location.hostname
                    }
                });
                Fn({
                    strings: o[0] ? .texts,
                    domElements: t
                }), i.innerText = s.innerText, i.innerHTML = s.innerHTML, n(0, h = !1), n(11, m = !0)
            } catch (e) {
                (e => {
                    Ui.update({
                        error: e.message ? e.message : e
                    })
                })(e), n(0, h = !1), v()
            }
        }, () => {
            n(12, f = !0);
            if (!zs()) return void n(12, f = !1);
            const e = Hs();
            e ? (e.scrollIntoView(), setTimeout((() => {
                Rs(e), Ps("[contenteditable='true']", y)
            }), 300)) : n(12, f = !1)
        }, w, m, f, e => {
            n(4, u = e.detail.selectedOption.value)
        }, e => {
            n(3, c = e.detail.selectedOption.value)
        }]
    }
    window.customElements.define(vs, af);
    class pf extends Si {
        constructor(e) {
            super(), ki(this, e, uf, df, Yn, {
                container: 10
            })
        }
    }
    class gf extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({
            container: e
        }) {
            this.mainComponent = new pf({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    container: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function mf(e) {
        let t, n, o, i, s;
        return n = new fc({
            props: {
                items: e[1],
                selectedOption: e[2],
                alignRight: !1,
                dataQaButton: "deepl-formality-selection-button",
                dataQaList: "deepl-formality-selection-list",
                variant: "zendesk",
                isFullWidth: e[0],
                direction: "up"
            }
        }), n.$on("valueselected", e[3]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment)
            },
            m(a, r) {
                vo(a, t, r), Li(n, t, null), o = !0, i || (s = Eo(t, "mousedown", So(ko(e[5]))), i = !0)
            },
            p(e, [t]) {
                const o = {};
                2 & t && (o.items = e[1]), 4 & t && (o.selectedOption = e[2]), 1 & t && (o.isFullWidth = e[0]), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n), i = !1, s()
            }
        }
    }

    function hf(e, t, n) {
        let o, i;
        const s = Qo();
        let {
            value: a
        } = t, {
            isFullWidth: r = !1
        } = t;
        return e.$$set = e => {
            "value" in e && n(4, a = e.value), "isFullWidth" in e && n(0, r = e.isFullWidth)
        }, e.$$.update = () => {
            18 & e.$$.dirty && n(2, i = a ? o.find((e => e.value === a)) : o.find((e => "auto" === e.value)))
        }, n(1, o = [{
            value: "auto",
            label: chrome.i18n.getMessage("ui_formality_automatic"),
            selectedOptionLabel: chrome.i18n.getMessage("ui_formality_automatic")
        }, {
            value: "formal",
            label: chrome.i18n.getMessage("ui_formality_formal"),
            selectedOptionLabel: chrome.i18n.getMessage("ui_formality_formal")
        }, {
            value: "informal",
            label: chrome.i18n.getMessage("ui_formality_informal"),
            selectedOptionLabel: chrome.i18n.getMessage("ui_formality_informal")
        }]), [r, o, i, function (e) {
            e.detail.selectedOption.value !== a && s("selection", e.detail)
        }, a, function (t) {
            ei.call(this, e, t)
        }]
    }
    window.customElements.define(ws, gf);
    class ff extends Si {
        constructor(e) {
            super(), ki(this, e, hf, mf, Yn, {
                value: 4,
                isFullWidth: 0
            })
        }
    }

    function _f(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = yo("div"), n = yo("button"), o = To(), i = xo(e[3]), Mo(n, "class", "close-button svelte-13n3z3n"), Mo(t, "class", "dl-zendesk-error-message svelte-13n3z3n")
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), fo(t, o), fo(t, i), r = !0, l || (c = [Eo(n, "click", e[8]), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[8])], l = !0)
            },
            p(e, t) {
                (!r || 8 & t[0]) && Io(i, e[3])
            },
            i(e) {
                r || (li((() => {
                    a && a.end(1), s = Ci(t, Ur, {
                        y: -5,
                        duration: 300
                    }), s.start()
                })), r = !0)
            },
            o(e) {
                s && s.invalidate(), a = xi(t, Ur, {
                    y: -5,
                    duration: 300
                }), r = !1
            },
            d(e) {
                e && $o(t), e && a && a.end(), l = !1, Xn(c)
            }
        }
    }

    function wf(e) {
        let t, n;
        return t = new ff({
            props: {
                value: e[6].zendeskFormality
            }
        }), t.$on("selection", e[9]), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                64 & n[0] && (o.value = e[6].zendeskFormality), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function vf(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), t.innerHTML = '<span class="svelte-13n3z3n"></span>', Mo(t, "class", "dl-zendesk-input-icon svelte-13n3z3n"), zo(t, "is-active", e[1]), zo(t, "is-loading", e[2]), zo(t, "is-language-mismatching", e[0])
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", e[7]), n = !0)
            },
            p(e, n) {
                2 & n[0] && zo(t, "is-active", e[1]), 4 & n[0] && zo(t, "is-loading", e[2]), 1 & n[0] && zo(t, "is-language-mismatching", e[0])
            },
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function $f(e) {
        let t, n, o, i, s, a = e[3] && _f(e),
            r = e[4] && wf(e);
        return i = new Bd({
            props: {
                tooltip: e[5],
                zIndex: "0",
                $$slots: {
                    default: [vf]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                a && a.c(), t = To(), n = yo("div"), r && r.c(), o = To(), Ti(i.$$.fragment), Mo(n, "class", "dl-icons-holder svelte-13n3z3n"), zo(n, "has-formality", e[4])
            },
            m(e, l) {
                a && a.m(e, l), vo(e, t, l), vo(e, n, l), r && r.m(n, null), fo(n, o), Li(i, n, null), s = !0
            },
            p(e, l) {
                e[3] ? a ? (a.p(e, l), 8 & l[0] && $i(a, 1)) : (a = _f(e), a.c(), $i(a, 1), a.m(t.parentNode, t)) : a && (wi(), bi(a, 1, 1, (() => {
                    a = null
                })), vi()), e[4] ? r ? (r.p(e, l), 16 & l[0] && $i(r, 1)) : (r = wf(e), r.c(), $i(r, 1), r.m(n, o)) : r && (wi(), bi(r, 1, 1, (() => {
                    r = null
                })), vi());
                const c = {};
                32 & l[0] && (c.tooltip = e[5]), 7 & l[0] | 2 & l[1] && (c.$$scope = {
                    dirty: l,
                    ctx: e
                }), i.$set(c), (!s || 16 & l[0]) && zo(n, "has-formality", e[4])
            },
            i(e) {
                s || ($i(a), $i(r), $i(i.$$.fragment, e), s = !0)
            },
            o(e) {
                bi(a), bi(r), bi(i.$$.fragment, e), s = !1
            },
            d(e) {
                a && a.d(e), e && $o(t), e && $o(n), r && r.d(), Ei(i)
            }
        }
    }

    function bf(e, n, o) {
        let i, s, a;
        eo(e, hs, (e => o(6, a = e)));
        let r, l, c, d, {
                controller: u
            } = n,
            {
                editable: p
            } = n,
            g = !1,
            m = !1,
            h = !1,
            f = !1,
            _ = "",
            w = "",
            v = !1;
        const $ = () => {
                o(1, g = !0)
            },
            b = () => {
                o(1, g = !1)
            };
        async function y(e, t, n) {
            if ("dlTriggerTranslationShortcut" === e.action) {
                if (document.activeElement !== p) return;
                try {
                    Mn({
                        action: "dlTrackUseOfShortcut",
                        payload: {
                            shortcutType: le,
                            location: H
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                await C(), n()
            }
        }
        const C = async () => {
            if (f) return;
            const e = () => {
                    const e = new ClipboardEvent("copy", {
                        bubbles: !0,
                        clipboardData: new DataTransfer
                    });
                    m = !0, p.dispatchEvent(e)
                },
                t = window.getSelection(),
                n = t && t.baseNode && "#text" == t.baseNode.nodeName && "Range" == t.type && p.contains(t.baseNode);
            0 !== p.innerText.trim().length && (n ? e() : (await br(p), setTimeout(e, 300)))
        }, x = async e => {
            if (!m) return;
            m = !1, o(2, f = !0), o(0, v = !1);
            const t = u.getTicketLanguageInformation() ? .language,
                n = e.clipboardData.getData("text/html"),
                s = u.getInputWorkingArea();
            s.innerHTML = n;
            const [r, l] = await Ya({
                element: s,
                targetLang: t,
                ...i && ["formal", "informal"].includes(a.zendeskFormality) && {
                    formality: a.zendeskFormality
                }
            });
            l ? (console.error({
                e: l
            }), o(3, c = l), cr({
                eventType: je,
                controller: u,
                error: l
            })) : r && L(r, n), o(2, f = !1)
        }, T = () => {
            if (!h) return;
            h = !1;
            window.getSelection().collapse(null)
        }, L = (e, t) => {
            const n = new DataTransfer;
            n.setData("text/html", e);
            const o = new ClipboardEvent("paste", {
                bubbles: !0,
                clipboardData: n
            });
            h = !0, p.dispatchEvent(o), cr({
                eventType: qe,
                controller: u,
                sourceTextLength: t.length,
                targetTextLength: e.length
            })
        }, E = () => {
            const e = p.innerText;
            e !== w && (w = e, d && (clearTimeout(d), d = void 0), d = setTimeout(k, 400))
        }, k = async () => {
            const e = u.getTicketLanguageInformation();
            if (!e || !e.isSupported || !e.isDetected) return;
            const t = p.innerText;
            if (t.trim()) {
                console.log("There has content: ", `${t.trim()}`);
                let n = await Mt(t),
                    i = e.language;
                n = Dt(n), i = Dt(i);
                let s = !1;
                n && i && n !== i && (s = !0), v !== s && o(0, v = s)
            } else console.log("There is no content"), o(0, v = !1), S()
        }, S = () => {
            r && r.resetTooltip()
        };
        return Ko((() => {
            chrome.runtime.onMessage.addListener(y), Mn({
                action: "dlCheckCommandShortcuts"
            }).then((e => {
                o(14, _ = e ? e.filter((e => e.name == le))[0].shortcut : "")
            })), p.addEventListener("focus", $), p.addEventListener("blur", b), p.addEventListener("copy", x), p.addEventListener("paste", T), p.addEventListener("keydown", E), r = En(u), document.activeElement === p && $()
        })), Xo((() => {
            chrome.runtime.onMessage.removeListener(y), p && (p.removeEventListener("focus", $), p.removeEventListener("blur", b), p.removeEventListener("copy", x), p.removeEventListener("paste", T), p.removeEventListener("keydown", E), r && (r.cleanupDOM(), r.remove()))
        })), e.$$set = e => {
            "controller" in e && o(10, u = e.controller), "editable" in e && o(11, p = e.editable)
        }, e.$$.update = () => {
            32768 & e.$$.dirty[0] && o(4, i = (e => {
                const n = t.find((t => t.langCode === e));
                return n && n.supportsFormality
            })(l)), 49152 & e.$$.dirty[0] && o(5, s = t.find((e => e.langCode === l)) ? chrome.i18n.getMessage("ui_zendesk_input_tooltip") + (_ ? ` (${_})` : "") : ""), 1 & e.$$.dirty[0] && r && r.setIsLanguageMismatching(v)
        }, [v, g, f, c, i, s, a, C, () => {
            o(3, c = void 0)
        }, e => {
            const t = e.detail.selectedOption.value;
            ro(hs, a.zendeskFormality = t, a)
        }, u, p, e => {
            o(15, l = e)
        }, () => {
            const e = window.getSelection();
            return e && e.baseNode && "#text" == e.baseNode.nodeName && "Range" == e.type && p.contains(e.baseNode)
        }, _, l]
    }
    class yf extends Si {
        constructor(e) {
            super(), ki(this, e, bf, $f, Yn, {
                controller: 10,
                editable: 11,
                updateTargetLanguage: 12,
                getInputHasSelection: 13
            }, null, [-1, -1])
        }
        get updateTargetLanguage() {
            return this.$$.ctx[12]
        }
        get getInputHasSelection() {
            return this.$$.ctx[13]
        }
    }
    class Cf extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this), this.getInputHasSelection = this.getInputHasSelection.bind(this), this.updateTargetLanguage = this.updateTargetLanguage.bind(this)
        }
        createDOM({
            controller: e,
            editable: t
        }) {
            this.mainComponent = new yf({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e,
                    editable: t
                }
            })
        }
        getInputHasSelection() {
            return this.mainComponent.getInputHasSelection()
        }
        updateTargetLanguage(e) {
            this.mainComponent ? .updateTargetLanguage(e)
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function xf(e, t, n) {
        const o = e.slice();
        return o[16] = t[n], o[18] = n, o
    }

    function Tf(e) {
        let t, n, o = !e[0] && Ef(e),
            i = e[3],
            s = [];
        for (let t = 0; t < i.length; t += 1) s[t] = Mf(xf(e, i, t));
        return {
            c() {
                t = yo("div"), o && o.c(), n = To();
                for (let e = 0; e < s.length; e += 1) s[e].c();
                Mo(t, "class", "dl-zendesk-translation-placeholder svelte-qb7u0e"), zo(t, "loading-skeleton", e[0])
            },
            m(e, i) {
                vo(e, t, i), o && o.m(t, null), fo(t, n);
                for (let e = 0; e < s.length; e += 1) s[e].m(t, null)
            },
            p(e, a) {
                if (e[0] ? o && (o.d(1), o = null) : o ? o.p(e, a) : (o = Ef(e), o.c(), o.m(t, n)), 8 & a) {
                    let n;
                    for (i = e[3], n = 0; n < i.length; n += 1) {
                        const o = xf(e, i, n);
                        s[n] ? s[n].p(o, a) : (s[n] = Mf(o), s[n].c(), s[n].m(t, null))
                    }
                    for (; n < s.length; n += 1) s[n].d(1);
                    s.length = i.length
                }
                1 & a && zo(t, "loading-skeleton", e[0])
            },
            d(e) {
                e && $o(t), o && o.d(), bo(s, e)
            }
        }
    }

    function Lf(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = yo("div"), n = yo("button"), o = To(), i = xo(e[2]), Mo(n, "class", "close-button svelte-qb7u0e"), Mo(t, "class", "dl-zendesk-translation-placeholder has-error svelte-qb7u0e")
            },
            m(r, l) {
                vo(r, t, l), fo(t, n), fo(t, o), fo(t, i), s || (a = Eo(n, "click", e[6]), s = !0)
            },
            p(e, t) {
                4 & t && Io(i, e[2])
            },
            d(e) {
                e && $o(t), s = !1, a()
            }
        }
    }

    function Ef(e) {
        let t, n, o;
        return {
            c() {
                t = yo("button"), Mo(t, "class", "close-button svelte-qb7u0e")
            },
            m(i, s) {
                vo(i, t, s), n || (o = Eo(t, "click", e[5]), n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function kf(e) {
        let t, n, o = e[16] + "";
        return {
            c() {
                t = yo("span"), n = xo(o), Mo(t, "class", "svelte-qb7u0e")
            },
            m(e, o) {
                vo(e, t, o), fo(t, n)
            },
            p(e, t) {
                8 & t && o !== (o = e[16] + "") && Io(n, o)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function Sf(e) {
        let t;
        return {
            c() {
                t = yo("br")
            },
            m(e, n) {
                vo(e, t, n)
            },
            d(e) {
                e && $o(t)
            }
        }
    }

    function Mf(e) {
        let t, n, o = e[16] && kf(e),
            i = e[18] < e[3].length - 1 && Sf();
        return {
            c() {
                o && o.c(), t = To(), i && i.c(), n = Lo()
            },
            m(e, s) {
                o && o.m(e, s), vo(e, t, s), i && i.m(e, s), vo(e, n, s)
            },
            p(e, s) {
                e[16] ? o ? o.p(e, s) : (o = kf(e), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), e[18] < e[3].length - 1 ? i || (i = Sf(), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null)
            },
            d(e) {
                o && o.d(e), e && $o(t), i && i.d(e), e && $o(n)
            }
        }
    }

    function If(e) {
        let t, n, o, i, s, a;

        function r(e, t) {
            return e[2] ? Lf : e[1] || e[0] ? Tf : void 0
        }
        let l = r(e),
            c = l && l(e);
        return {
            c() {
                t = yo("div"), n = yo("button"), n.textContent = `${chrome.i18n.getMessage("ui_zendesk_message_translate")}`, o = To(), c && c.c(), i = Lo(), Mo(n, "class", "dl-zendesk-translate-this-ticket svelte-qb7u0e")
            },
            m(r, l) {
                vo(r, t, l), fo(t, n), vo(r, o, l), c && c.m(r, l), vo(r, i, l), s || (a = Eo(n, "click", e[4]), s = !0)
            },
            p(e, [t]) {
                l === (l = r(e)) && c ? c.p(e, t) : (c && c.d(1), c = l && l(e), c && (c.c(), c.m(i.parentNode, i)))
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), e && $o(o), c && c.d(e), e && $o(i), s = !1, a()
            }
        }
    }

    function Df(e, t, n) {
        let o, i;
        eo(e, hs, (e => n(14, i = e)));
        let s, {
                controller: a
            } = t,
            {
                message: r
            } = t,
            l = !1,
            c = !1,
            d = !1,
            u = "",
            p = !1;
        const h = async ({
            trigger: e
        }) => {
            n(1, d = !1), n(0, l = !0), n(2, s = void 0);
            let t = mn(r).innerText;
            n(11, u = t);
            const [o, c] = await Ja({
                targetLang: i.selectedTargetLanguage,
                sourceLang: a.getTicketLanguageInformation() ? .language,
                text: t,
                trigger: e
            });
            if (c) n(11, u = ""), n(1, d = !1), n(2, s = c), p = !0, cr({
                eventType: je,
                controller: a,
                error: c
            });
            else if (o) {
                n(11, u = o), n(1, d = !0), cr({
                    eventType: Ue,
                    controller: a,
                    sourceTextLength: t.length,
                    targetTextLength: u.length
                })
            } else n(1, d = !0);
            n(0, l = !1)
        };
        return e.$$set = e => {
            "controller" in e && n(7, a = e.controller), "message" in e && n(8, r = e.message)
        }, e.$$.update = () => {
            2048 & e.$$.dirty && n(3, o = u.split("\n"))
        }, [l, d, s, o, () => {
            l || h({
                trigger: m
            })
        }, () => {
            n(1, d = !1), n(0, l = !1), n(11, u = ""), a.getIsAutoTranslatedEnabled() && (c = !0)
        }, () => {
            n(2, s = void 0)
        }, a, r, () => {
            !a.getIsAutoTranslatedEnabled() || d || l || c || p || h({
                trigger: g
            })
        }, () => {
            !d || l || c || h({
                trigger: m
            })
        }, u]
    }
    window.customElements.define("deepl-zendesk-input-icon", Cf);
    class Of extends Si {
        constructor(e) {
            super(), ki(this, e, Df, If, Yn, {
                controller: 7,
                message: 8,
                processRefreshUI: 9,
                triggerTranslateAgain: 10
            })
        }
        get processRefreshUI() {
            return this.$$.ctx[9]
        }
        get triggerTranslateAgain() {
            return this.$$.ctx[10]
        }
    }
    class Nf extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this), this.processRefreshUI = this.processRefreshUI.bind(this), this.triggerTranslateAgain = this.triggerTranslateAgain.bind(this)
        }
        createDOM({
            controller: e,
            message: t
        }) {
            this.mainComponent = new Of({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e,
                    message: t
                }
            })
        }
        processRefreshUI() {
            this.mainComponent.processRefreshUI()
        }
        triggerTranslateAgain() {
            this.mainComponent.triggerTranslateAgain()
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function Af(e, t, n) {
        const o = e.slice();
        return o[3] = t[n], o
    }

    function Rf(e) {
        let t, n, o = e[3].text + "";
        return {
            c() {
                t = new Fo(!1), n = Lo(), t.a = n
            },
            m(e, i) {
                t.m(o, e, i), vo(e, n, i)
            },
            p: Gn,
            d(e) {
                e && $o(n), e && t.d()
            }
        }
    }

    function Pf(e) {
        let t, n, o, i = e[3].text + "";
        return {
            c() {
                t = yo("span"), Mo(t, "class", "dl-link svelte-pwdshq")
            },
            m(s, a) {
                vo(s, t, a), t.innerHTML = i, n || (o = Eo(t, "click", e[1]), n = !0)
            },
            p: Gn,
            d(e) {
                e && $o(t), n = !1, o()
            }
        }
    }

    function zf(e) {
        let t;
        let n = function (e, t) {
                return "loginLink" === e[3].block ? Pf : Rf
            }(e),
            o = n(e);
        return {
            c() {
                o.c(), t = Lo()
            },
            m(e, n) {
                o.m(e, n), vo(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e), e && $o(t)
            }
        }
    }

    function Hf(e) {
        let t, n = mr(chrome.i18n.getMessage("ui_zendesk_onboarding_free_trial_notice"), ["loginLink"]),
            o = [];
        for (let t = 0; t < n.length; t += 1) o[t] = zf(Af(e, n, t));
        return {
            c() {
                t = yo("span");
                for (let e = 0; e < o.length; e += 1) o[e].c();
                Mo(t, "slot", "warning")
            },
            m(e, n) {
                vo(e, t, n);
                for (let e = 0; e < o.length; e += 1) o[e].m(t, null)
            },
            p(e, i) {
                if (2 & i) {
                    let s;
                    for (n = mr(chrome.i18n.getMessage("ui_zendesk_onboarding_free_trial_notice"), ["loginLink"]), s = 0; s < n.length; s += 1) {
                        const a = Af(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = zf(a), o[s].c(), o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1) o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                e && $o(t), bo(o, e)
            }
        }
    }

    function Ff(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_title") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "header")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Bf(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_usp_1") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "usp1")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Uf(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_usp_2") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "usp2")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function qf(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_usp_3") + "";
        return {
            c() {
                t = yo("span"), Mo(t, "slot", "usp3")
            },
            m(e, o) {
                vo(e, t, o), t.innerHTML = n
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function jf(e) {
        let t;
        return {
            c() {
                t = yo("div"), Mo(t, "slot", "graphics"), Mo(t, "class", "onboarding-graphics svelte-pwdshq")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function Wf(e) {
        let t, n;
        return t = new Zg({
            props: {
                onClose: e[0],
                hasWarning: !0,
                $$slots: {
                    graphics: [jf],
                    usp3: [qf],
                    usp2: [Uf],
                    usp1: [Bf],
                    header: [Ff],
                    warning: [Hf]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.onClose = e[0]), 64 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Gf(e, t, n) {
        let {
            onClose: o
        } = t;
        return Ko((() => {
            Mn({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: Oe.zendesk
                }
            })
        })), e.$$set = e => {
            "onClose" in e && n(0, o = e.onClose)
        }, [o, function () {
            Mn({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Yi
                }
            })
        }]
    }
    window.customElements.define("deepl-zendesk-message-controller", Nf);
    class Vf extends Si {
        constructor(e) {
            super(), ki(this, e, Gf, Wf, Yn, {
                onClose: 0
            })
        }
    }

    function Zf(e) {
        let t, n;
        return t = new Vf({
            props: {
                onClose: e[3]
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.onClose = e[3]), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function Kf(e) {
        let t, n, o, i, s = e[0] && Zf(e);
        return {
            c() {
                t = yo("div"), n = To(), s && s.c(), o = Lo(), Mo(t, "class", "dl-zendesk-icon svelte-1tytp0d")
            },
            m(e, a) {
                vo(e, t, a), vo(e, n, a), s && s.m(e, a), vo(e, o, a), i = !0
            },
            p(e, [t]) {
                e[0] ? s ? (s.p(e, t), 1 & t && $i(s, 1)) : (s = Zf(e), s.c(), $i(s, 1), s.m(o.parentNode, o)) : s && (wi(), bi(s, 1, 1, (() => {
                    s = null
                })), vi())
            },
            i(e) {
                i || ($i(s), i = !0)
            },
            o(e) {
                bi(s), i = !1
            },
            d(e) {
                e && $o(t), e && $o(n), s && s.d(e), e && $o(o)
            }
        }
    }

    function Xf(e, t, n) {
        let o, i;
        eo(e, hs, (e => n(2, o = e)));
        let s = !1;
        const a = () => {
                const e = window.location.pathname,
                    t = Yt(e);
                if (t) {
                    const e = Jt();
                    if (!e) return;
                    const n = en(e) || tn(e, t);
                    n && n.processRefreshUI()
                }
            },
            r = async e => {
                if ("dlChangeActiveTabStatus" === e.action) e.payload.isActive ? l() : c()
            }, l = () => {
                i && clearInterval(i), i = setInterval(a, 800)
            }, c = () => {
                clearInterval(i)
            };
        Ko((() => {
            l(), chrome.runtime.onMessage.addListener(r)
        })), Xo((() => {
            i && c(), chrome.runtime.onMessage.removeListener(r), on()
        }));
        return e.$$.update = () => {
            4 & e.$$.dirty && (o.isZendeskEnabled || sn())
        }, [s, () => {
            n(0, s = !0)
        }, o, () => n(0, s = !1)]
    }
    class Qf extends Si {
        constructor(e) {
            super(), ki(this, e, Xf, Kf, Yn, {
                showOnboarding: 1
            })
        }
        get showOnboarding() {
            return this.$$.ctx[1]
        }
    }
    class Yf extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this), this.showOnboarding = this.showOnboarding.bind(this)
        }
        createDOM() {
            this.mainComponent = new Qf({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
        showOnboarding() {
            this.mainComponent.showOnboarding()
        }
    }

    function Jf(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), n = To(), o = yo("div"), Mo(t, "class", "dl-zendesk-icon svelte-i3vxpb"), Mo(o, "class", "dl-zendesk-working-area svelte-i3vxpb")
            },
            m(e, i) {
                vo(e, t, i), vo(e, n, i), vo(e, o, i)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), e && $o(n), e && $o(o)
            }
        }
    }

    function e_(e, n, o) {
        let i;
        eo(e, hs, (e => o(17, i = e)));
        let {
            pane: s
        } = n, {
            ticketId: a
        } = n, {
            controller: r
        } = n;
        const l = {
            language: "",
            isDetected: !1,
            isSupported: !1,
            hasAttemptedLanguageDetection: !1
        };
        let c, d = !1;
        const u = {
                inputIconLanguageUpdate: void 0,
                topIconLanguageUpdate: void 0,
                toolbarLanguageUpdate: void 0,
                toolbarAutoTranslateStatus: void 0,
                ticketTypeDetection: void 0
            },
            p = (e, t) => {
                u[e] = t
            },
            g = () => {
                for (const e of Object.keys(u))
                    if (u[e]) {
                        u[e]() && (u[e] = void 0)
                    }
            },
            m = async () => {
                if (!c) return;
                let e;
                switch (c) {
                    case We:
                        e = await hn(s);
                        break;
                    case Ge:
                        e = await fn(s)
                }
                e && (e = Dt(e), o(13, l.hasAttemptedLanguageDetection = !0, l), o(13, l.language = e, l), o(13, l.isDetected = !0, l), o(13, l.isSupported = !!t.find((t => t.langCode === e)), l), cr({
                    eventType: ze,
                    controller: r
                }), kn(s))
            };
        return Ko((() => {
            cr({
                eventType: Pe,
                controller: r
            }), p("ticketTypeDetection", (() => {
                const e = dn(s);
                return !!e && (c = e, m(), !0)
            }))
        })), e.$$set = e => {
            "pane" in e && o(0, s = e.pane), "ticketId" in e && o(1, a = e.ticketId), "controller" in e && o(2, r = e.controller)
        }, e.$$.update = () => {
            8193 & e.$$.dirty && p("toolbarLanguageUpdate", (() => _n(s, {
                language: l.language,
                isDetected: l.isDetected,
                isSupported: l.isSupported
            }))), 8193 & e.$$.dirty && (p("inputIconLanguageUpdate", (() => $n(s, l.language))), p("topIconLanguageUpdate", (() => vn(s)))), 16385 & e.$$.dirty && p("toolbarAutoTranslateStatus", (() => {
                wn(s, {
                    isEnabled: d
                })
            }))
        }, [s, a, r, () => s, () => a, () => l, () => d, e => {
            o(13, l.language = e.language, l), o(13, l.isDetected = e.isDetected, l), o(13, l.isSupported = e.isSupported, l)
        }, e => {
            o(14, d = e)
        }, () => c, e => {
            c = e
        }, async () => {
            if (l.hasAttemptedLanguageDetection || await m(), (l.language || i.isZendeskEnabled) && nn(r, i.isZendeskEnabled), l.isSupported && i.isZendeskEnabled) {
                bn(r);
                for (const e of un(s)) {
                    const t = yn(e);
                    t && t.processRefreshUI()
                }
            }
            Tn(s), g()
        }, () => {
            Ln(s)
        }, l, d]
    }
    window.customElements.define("deepl-zendesk-controller", Yf);
    class t_ extends Si {
        constructor(e) {
            super(), ki(this, e, e_, Jf, Yn, {
                pane: 0,
                ticketId: 1,
                controller: 2,
                getPane: 3,
                getTicketId: 4,
                getTicketLanguageInformation: 5,
                getIsAutoTranslatedEnabled: 6,
                setLanguageInformation: 7,
                setIsAutoTranslateEnabled: 8,
                getTicketType: 9,
                setTicketType: 10,
                processRefreshUI: 11,
                getInputHasSelection: 12
            })
        }
        get getPane() {
            return this.$$.ctx[3]
        }
        get getTicketId() {
            return this.$$.ctx[4]
        }
        get getTicketLanguageInformation() {
            return this.$$.ctx[5]
        }
        get getIsAutoTranslatedEnabled() {
            return this.$$.ctx[6]
        }
        get setLanguageInformation() {
            return this.$$.ctx[7]
        }
        get setIsAutoTranslateEnabled() {
            return this.$$.ctx[8]
        }
        get getTicketType() {
            return this.$$.ctx[9]
        }
        get setTicketType() {
            return this.$$.ctx[10]
        }
        get processRefreshUI() {
            return this.$$.ctx[11]
        }
        get getInputHasSelection() {
            return this.$$.ctx[12]
        }
    }
    class n_ extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this), this.getTicketId = this.getTicketId.bind(this), this.getPane = this.getPane.bind(this), this.getTicketLanguageInformation = this.getTicketLanguageInformation.bind(this), this.getIsAutoTranslatedEnabled = this.getIsAutoTranslatedEnabled.bind(this), this.setIsAutoTranslateEnabled = this.setIsAutoTranslateEnabled.bind(this), this.getInputWorkingArea = this.getInputWorkingArea.bind(this), this.setLanguageInformation = this.setLanguageInformation.bind(this), this.processRefreshUI = this.processRefreshUI.bind(this), this.getInputHasSelection = this.getInputHasSelection.bind(this)
        }
        createDOM({
            ticketId: e,
            pane: t
        }) {
            this.mainComponent = new t_({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this,
                    ticketId: e,
                    pane: t
                }
            })
        }
        getTicketId() {
            return this.mainComponent ? .getTicketId()
        }
        getPane() {
            return this.mainComponent ? .getPane()
        }
        getTicketLanguageInformation() {
            return this.mainComponent ? .getTicketLanguageInformation()
        }
        getIsAutoTranslatedEnabled() {
            return this.mainComponent ? .getIsAutoTranslatedEnabled()
        }
        setIsAutoTranslateEnabled(e) {
            this.mainComponent ? .setIsAutoTranslateEnabled(e)
        }
        getInputWorkingArea() {
            return this.shadowContainer.querySelector(".dl-zendesk-working-area")
        }
        setLanguageInformation(e) {
            this.mainComponent ? .setLanguageInformation(e)
        }
        getTicketType() {
            return this.mainComponent ? .getTicketType()
        }
        setTicketType(e) {
            this.mainComponent ? .setTicketType(e)
        }
        processRefreshUI() {
            this.mainComponent.processRefreshUI()
        }
        getInputHasSelection() {
            return this.mainComponent ? .getInputHasSelection()
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function o_(e) {
        let t, n, o, i, s, a, r, l, c, d = chrome.i18n.getMessage("ui_zendesk_input_language_mismatch") + "";
        return {
            c() {
                t = yo("div"), n = yo("button"), o = To(), i = xo(d), Mo(n, "class", "dismiss-tooltip svelte-1h7bxtg"), Mo(t, "class", "dl-zendesk-submit-button-tooltip svelte-1h7bxtg"), Oo(t, "max-width", (e[1].width || 0) + "px"), Oo(t, "bottom", e[0].height + 12 + "px")
            },
            m(s, a) {
                vo(s, t, a), fo(t, n), fo(t, o), fo(t, i), r = !0, l || (c = Eo(n, "click", e[4]), l = !0)
            },
            p(e, n) {
                (!r || 2 & n) && Oo(t, "max-width", (e[1].width || 0) + "px"), (!r || 1 & n) && Oo(t, "bottom", e[0].height + 12 + "px")
            },
            i(e) {
                r || (li((() => {
                    a && a.end(1), s = Ci(t, Ur, {
                        y: -5,
                        duration: 500
                    }), s.start()
                })), r = !0)
            },
            o(e) {
                s && s.invalidate(), a = xi(t, Ur, {
                    y: -5,
                    duration: 500
                }), r = !1
            },
            d(e) {
                e && $o(t), e && a && a.end(), l = !1, c()
            }
        }
    }

    function i_(e) {
        let t, n, o = e[2] && !e[3] && o_(e);
        return {
            c() {
                o && o.c(), t = Lo()
            },
            m(e, i) {
                o && o.m(e, i), vo(e, t, i), n = !0
            },
            p(e, [n]) {
                e[2] && !e[3] ? o ? (o.p(e, n), 12 & n && $i(o, 1)) : (o = o_(e), o.c(), $i(o, 1), o.m(t.parentNode, t)) : o && (wi(), bi(o, 1, 1, (() => {
                    o = null
                })), vi())
            },
            i(e) {
                n || ($i(o), n = !0)
            },
            o(e) {
                bi(o), n = !1
            },
            d(e) {
                o && o.d(e), e && $o(t)
            }
        }
    }

    function s_(e, t, n) {
        let {
            coords: o
        } = t, {
            containerCoords: i
        } = t, s = !1, a = !1;
        return e.$$set = e => {
            "coords" in e && n(0, o = e.coords), "containerCoords" in e && n(1, i = e.containerCoords)
        }, [o, i, s, a, () => {
            n(3, a = !0)
        }, e => {
            n(2, s = e)
        }, () => {
            console.log("Resetting tooltip..."), n(2, s = !1), n(3, a = !1)
        }]
    }
    window.customElements.define("deepl-zendesk-ticket-controller", n_);
    class a_ extends Si {
        constructor(e) {
            super(), ki(this, e, s_, i_, Yn, {
                coords: 0,
                containerCoords: 1,
                setIsLanguageMismatching: 5,
                resetTooltip: 6
            })
        }
        get setIsLanguageMismatching() {
            return this.$$.ctx[5]
        }
        get resetTooltip() {
            return this.$$.ctx[6]
        }
    }
    class r_ extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.setIsLanguageMismatching = this.setIsLanguageMismatching.bind(this), this.resetTooltip = this.resetTooltip.bind(this), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({
            coords: e,
            containerCoords: t
        }) {
            this.mainComponent = new a_({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    coords: e,
                    containerCoords: t
                }
            })
        }
        setIsLanguageMismatching(e) {
            this.mainComponent ? .setIsLanguageMismatching(e)
        }
        resetTooltip() {
            this.mainComponent ? .resetTooltip()
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function l_(e) {
        let t, n, o, i, s;
        return n = new fc({
            props: {
                items: e[3],
                selectedOption: e[2],
                alignRight: !1,
                dataQaButton: "deepl-language-selection-button",
                dataQaList: "deepl-language-selection-list",
                variant: "zendesk",
                isFullWidth: e[1],
                extraText: e[0] ? chrome.i18n.getMessage("ui_zendesk_language_detected") : ""
            }
        }), n.$on("valueselected", e[4]), {
            c() {
                t = yo("div"), Ti(n.$$.fragment)
            },
            m(a, r) {
                vo(a, t, r), Li(n, t, null), o = !0, i || (s = Eo(t, "mousedown", So(ko(e[7]))), i = !0)
            },
            p(e, [t]) {
                const o = {};
                8 & t && (o.items = e[3]), 4 & t && (o.selectedOption = e[2]), 2 & t && (o.isFullWidth = e[1]), 1 & t && (o.extraText = e[0] ? chrome.i18n.getMessage("ui_zendesk_language_detected") : ""), n.$set(o)
            },
            i(e) {
                o || ($i(n.$$.fragment, e), o = !0)
            },
            o(e) {
                bi(n.$$.fragment, e), o = !1
            },
            d(e) {
                e && $o(t), Ei(n), i = !1, s()
            }
        }
    }

    function c_(e, t, n) {
        let o, i;
        const s = Qo(),
            a = It();
        let {
            value: r
        } = t, {
            isDetected: l = !1
        } = t, {
            isSupported: c = !0
        } = t, {
            isFullWidth: d = !1
        } = t;
        const u = {
            label: chrome.i18n.getMessage("writing_config_tab_language_selector_empty"),
            selectedOptionLabel: chrome.i18n.getMessage("writing_config_tab_language_selector_empty"),
            value: "NOT_SUPPORTED"
        };
        return e.$$set = e => {
            "value" in e && n(5, r = e.value), "isDetected" in e && n(0, l = e.isDetected), "isSupported" in e && n(6, c = e.isSupported), "isFullWidth" in e && n(1, d = e.isFullWidth)
        }, e.$$.update = () => {
            64 & e.$$.dirty && n(3, o = [...c ? [] : [u], ...a]), 96 & e.$$.dirty && n(2, i = c ? r ? a.find((e => e.value === r)) : void 0 : u)
        }, [l, d, i, o, function (e) {
            e.detail.selectedOption.value !== r && s("selection", e.detail)
        }, r, c, function (t) {
            ei.call(this, e, t)
        }]
    }
    window.customElements.define("deepl-zendesk-submit-button-tooltip", r_);
    class d_ extends Si {
        constructor(e) {
            super(), ki(this, e, c_, l_, Yn, {
                value: 5,
                isDetected: 0,
                isSupported: 6,
                isFullWidth: 1
            })
        }
    }

    function u_(e) {
        let t, n, o, i;

        function s(e, t) {
            return e[2] ? m_ : g_
        }
        let a = s(e),
            r = a(e);
        return {
            c() {
                t = yo("button"), r.c(), Mo(t, "class", "translate-all svelte-1uw1ok2"), t.disabled = n = !e[1].isSupported
            },
            m(n, s) {
                vo(n, t, s), r.m(t, null), o || (i = Eo(t, "click", e[6]), o = !0)
            },
            p(e, o) {
                a === (a = s(e)) && r ? r.p(e, o) : (r.d(1), r = a(e), r && (r.c(), r.m(t, null))), 2 & o && n !== (n = !e[1].isSupported) && (t.disabled = n)
            },
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), r.d(), o = !1, i()
            }
        }
    }

    function p_(e) {
        let t, n;
        return t = new Bd({
            props: {
                tooltip: chrome.i18n.getMessage(e[2] ? "ui_zendesk_autotranslate_stop" : "ui_zendesk_autotranslate_start"),
                $$slots: {
                    default: [h_]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), {
            c() {
                Ti(t.$$.fragment)
            },
            m(e, o) {
                Li(t, e, o), n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.tooltip = chrome.i18n.getMessage(e[2] ? "ui_zendesk_autotranslate_stop" : "ui_zendesk_autotranslate_start")), 32770 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }), t.$set(o)
            },
            i(e) {
                n || ($i(t.$$.fragment, e), n = !0)
            },
            o(e) {
                bi(t.$$.fragment, e), n = !1
            },
            d(e) {
                Ei(t, e)
            }
        }
    }

    function g_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_autotranslate_start") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function m_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_autotranslate_stop") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function h_(e) {
        let t, n, o, i;
        return {
            c() {
                t = yo("button"), Mo(t, "class", "translate-all btn-icon svelte-1uw1ok2"), t.disabled = n = !e[1].isSupported
            },
            m(n, s) {
                vo(n, t, s), o || (i = Eo(t, "click", e[6]), o = !0)
            },
            p(e, o) {
                2 & o && n !== (n = !e[1].isSupported) && (t.disabled = n)
            },
            d(e) {
                e && $o(t), o = !1, i()
            }
        }
    }

    function f_(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _;
        c = new d_({
            props: {
                value: e[1].language,
                isDetected: e[1].isDetected,
                isSupported: e[1].isSupported,
                isFullWidth: "lg" !== e[4]
            }
        }), c.$on("selection", e[5]);
        const w = [p_, u_],
            v = [];

        function $(e, t) {
            return "sm" === e[4] ? 0 : 1
        }
        return p = $(e), g = v[p] = w[p](e), {
            c() {
                t = yo("div"), n = yo("div"), o = yo("button"), i = To(), s = yo("div"), a = yo("div"), a.textContent = `${chrome.i18n.getMessage("ui_zendesk_senders_language")}`, r = To(), l = yo("div"), Ti(c.$$.fragment), d = To(), u = yo("div"), g.c(), Mo(o, "class", "senders-language-toggle svelte-1uw1ok2"), Mo(a, "class", "label svelte-1uw1ok2"), Mo(l, "class", "dropdown-container svelte-1uw1ok2"), Mo(s, "class", "container svelte-1uw1ok2"), zo(s, "show", e[3]), Mo(n, "class", "senders-language svelte-1uw1ok2"), Mo(u, "class", "translate-all-container"), Mo(t, "class", "dl-zendesk-toolbar svelte-1uw1ok2"), li((() => e[12].call(t))), zo(t, "toolbar-sm", "sm" === e[4]), zo(t, "toolbar-md", "md" === e[4]), zo(t, "toolbar-lg", "lg" === e[4])
            },
            m(g, w) {
                vo(g, t, w), fo(t, n), fo(n, o), fo(n, i), fo(n, s), fo(s, a), fo(s, r), fo(s, l), Li(c, l, null), fo(t, d), fo(t, u), v[p].m(u, null), m = Po(t, e[12].bind(t)), h = !0, f || (_ = [Eo(o, "click", e[7]), lo(Nn.call(null, n, {
                    isShadow: !0
                })), Eo(n, "click_outside", e[11])], f = !0)
            },
            p(e, [n]) {
                const o = {};
                2 & n && (o.value = e[1].language), 2 & n && (o.isDetected = e[1].isDetected), 2 & n && (o.isSupported = e[1].isSupported), 16 & n && (o.isFullWidth = "lg" !== e[4]), c.$set(o), (!h || 8 & n) && zo(s, "show", e[3]);
                let i = p;
                p = $(e), p === i ? v[p].p(e, n) : (wi(), bi(v[i], 1, 1, (() => {
                    v[i] = null
                })), vi(), g = v[p], g ? g.p(e, n) : (g = v[p] = w[p](e), g.c()), $i(g, 1), g.m(u, null)), (!h || 16 & n) && zo(t, "toolbar-sm", "sm" === e[4]), (!h || 16 & n) && zo(t, "toolbar-md", "md" === e[4]), (!h || 16 & n) && zo(t, "toolbar-lg", "lg" === e[4])
            },
            i(e) {
                h || ($i(c.$$.fragment, e), $i(g), h = !0)
            },
            o(e) {
                bi(c.$$.fragment, e), bi(g), h = !1
            },
            d(e) {
                e && $o(t), Ei(c), v[p].d(), m(), f = !1, Xn(_)
            }
        }
    }

    function __(e, t, n) {
        let o;
        const i = [{
            key: "sm",
            max: 300
        }, {
            key: "md",
            min: 301,
            max: 650
        }, {
            key: "lg",
            min: 651,
            isDefault: !0
        }];
        let {
            controller: s
        } = t;
        const a = {
            language: "",
            isDetected: !1,
            isSupported: !1
        };
        let r, l = !1,
            c = !1;
        return e.$$set = e => {
            "controller" in e && n(8, s = e.controller)
        }, e.$$.update = () => {
            1 & e.$$.dirty && n(4, o = (e => {
                const t = i.find((e => e.isDefault));
                for (const t of i)
                    if (!(t.min && t.min > e || t.max && t.max < e)) return t.key;
                return t.key
            })(r))
        }, [r, a, l, c, o, e => {
            const t = e.detail.selectedOption.value;
            s.setLanguageInformation({
                language: t,
                isDetected: !1,
                isSupported: !0
            }), cr({
                eventType: He,
                controller: s,
                metaDataOverride: {
                    ticketLanguage: t,
                    isTicketLanguageAutodetected: !1
                }
            })
        }, () => {
            const e = !l;
            s.setIsAutoTranslateEnabled(e), cr({
                eventType: e ? Fe : Be,
                controller: s,
                metaDataOverride: {
                    isAutoTranslateEnabled: e
                }
            })
        }, () => {
            n(3, c = !c)
        }, s, ({
            language: e,
            isDetected: t,
            isSupported: o
        }) => {
            n(1, a.language = e, a), n(1, a.isDetected = t, a), n(1, a.isSupported = o, a)
        }, e => {
            n(2, l = e)
        }, () => n(3, c = !1), function () {
            r = this.clientWidth, n(0, r)
        }]
    }
    class w_ extends Si {
        constructor(e) {
            super(), ki(this, e, __, f_, Yn, {
                controller: 8,
                updateLanguageInformation: 9,
                updateAutoTranslateStatus: 10
            })
        }
        get updateLanguageInformation() {
            return this.$$.ctx[9]
        }
        get updateAutoTranslateStatus() {
            return this.$$.ctx[10]
        }
    }
    class v_ extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this), this.updateLanguageInformation = this.updateLanguageInformation.bind(this), this.updateAutoTranslateStatus = this.updateAutoTranslateStatus.bind(this)
        }
        createDOM({
            controller: e
        }) {
            this.mainComponent = new w_({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e
                }
            })
        }
        updateLanguageInformation(e) {
            this.mainComponent.updateLanguageInformation(e)
        }
        updateAutoTranslateStatus(e) {
            this.mainComponent.updateAutoTranslateStatus(e)
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }

    function $_(e) {
        let t, n, o, i, s;
        const a = [y_, b_],
            r = [];

        function l(e, t) {
            return "language_not_supported" === e[2] ? 0 : 1
        }
        n = l(e), o = r[n] = a[n](e);
        let c = (!e[3].isZendeskEnabled || "default" === e[2]) && L_(e);
        return {
            c() {
                t = yo("div"), o.c(), i = To(), c && c.c(), Mo(t, "class", "dl-zendesk-modal svelte-lmvrdu")
            },
            m(e, o) {
                vo(e, t, o), r[n].m(t, null), fo(t, i), c && c.m(t, null), s = !0
            },
            p(e, s) {
                let d = n;
                n = l(e), n === d ? r[n].p(e, s) : (wi(), bi(r[d], 1, 1, (() => {
                    r[d] = null
                })), vi(), o = r[n], o ? o.p(e, s) : (o = r[n] = a[n](e), o.c()), $i(o, 1), o.m(t, i)), e[3].isZendeskEnabled && "default" !== e[2] ? c && (c.d(1), c = null) : c ? c.p(e, s) : (c = L_(e), c.c(), c.m(t, null))
            },
            i(e) {
                s || ($i(o), s = !0)
            },
            o(e) {
                bi(o), s = !1
            },
            d(e) {
                e && $o(t), r[n].d(), c && c.d()
            }
        }
    }

    function b_(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m = chrome.i18n.getMessage("ui_zendesk_modal_ok") + "",
            h = "welcome" === e[2] && C_();

        function f(e, t) {
            return "welcome" === e[2] ? T_ : x_
        }
        let _ = f(e),
            w = _(e);
        return s = new xc({
            props: {
                value: e[3].selectedTargetLanguage,
                websiteSettings: Ui,
                disabled: !e[3].isZendeskEnabled,
                customClass: "dropdown__zendesk-top-icon",
                fontSize: "md"
            }
        }), s.$on("selection", e[8]), {
            c() {
                h && h.c(), t = To(), n = yo("div"), w.c(), o = To(), i = yo("div"), Ti(s.$$.fragment), a = To(), r = yo("div"), l = yo("button"), c = xo(m), Mo(i, "class", "dropdown svelte-lmvrdu"), Mo(l, "class", "btn-primary svelte-lmvrdu"), l.disabled = d = !e[3].isZendeskEnabled, Mo(r, "class", "right svelte-lmvrdu"), Mo(n, "class", "modal-section language-selector svelte-lmvrdu")
            },
            m(d, m) {
                h && h.m(d, m), vo(d, t, m), vo(d, n, m), w.m(n, null), fo(n, o), fo(n, i), Li(s, i, null), fo(n, a), fo(n, r), fo(r, l), fo(l, c), u = !0, p || (g = Eo(l, "click", e[9]), p = !0)
            },
            p(e, i) {
                "welcome" === e[2] ? h ? h.p(e, i) : (h = C_(), h.c(), h.m(t.parentNode, t)) : h && (h.d(1), h = null), _ === (_ = f(e)) && w ? w.p(e, i) : (w.d(1), w = _(e), w && (w.c(), w.m(n, o)));
                const a = {};
                8 & i && (a.value = e[3].selectedTargetLanguage), 8 & i && (a.disabled = !e[3].isZendeskEnabled), s.$set(a), (!u || 8 & i && d !== (d = !e[3].isZendeskEnabled)) && (l.disabled = d)
            },
            i(e) {
                u || ($i(s.$$.fragment, e), u = !0)
            },
            o(e) {
                bi(s.$$.fragment, e), u = !1
            },
            d(e) {
                h && h.d(e), e && $o(t), e && $o(n), w.d(), Ei(s), p = !1, g()
            }
        }
    }

    function y_(e) {
        let t, n, o;
        return {
            c() {
                t = yo("div"), t.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_language_not_supported_line_1")}`, n = To(), o = yo("div"), o.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_language_not_supported_line_2")}`, Mo(t, "class", "modal-section language-not-supported svelte-lmvrdu"), Mo(o, "class", "modal-section secondary-text svelte-lmvrdu")
            },
            m(e, i) {
                vo(e, t, i), vo(e, n, i), vo(e, o, i)
            },
            p: Gn,
            i: Gn,
            o: Gn,
            d(e) {
                e && $o(t), e && $o(n), e && $o(o)
            }
        }
    }

    function C_(e) {
        let t;
        return {
            c() {
                t = yo("div"), t.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_welcome")}`, Mo(t, "class", "modal-section welcome svelte-lmvrdu")
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function x_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_deepl_translate_into") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function T_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_what_is_your_primary_language") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function L_(e) {
        let t, n, o, i, s, a, r;

        function l(e, t) {
            return e[3].isZendeskEnabled ? k_ : E_
        }
        let c = l(e),
            d = c(e);
        return {
            c() {
                t = yo("div"), n = yo("div"), d.c(), o = To(), i = yo("div"), s = yo("span"), s.innerHTML = '<span class="svelte-lmvrdu"></span>', Mo(n, "class", "text"), Mo(s, "class", "on-off-switch svelte-lmvrdu"), zo(s, "on", e[3].isZendeskEnabled), Mo(i, "class", "switch"), Mo(t, "class", "modal-section switch-container svelte-lmvrdu")
            },
            m(l, c) {
                vo(l, t, c), fo(t, n), d.m(n, null), fo(t, o), fo(t, i), fo(i, s), a || (r = Eo(s, "click", e[5]), a = !0)
            },
            p(e, t) {
                c === (c = l(e)) && d ? d.p(e, t) : (d.d(1), d = c(e), d && (d.c(), d.m(n, null))), 8 & t && zo(s, "on", e[3].isZendeskEnabled)
            },
            d(e) {
                e && $o(t), d.d(), a = !1, r()
            }
        }
    }

    function E_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_turn_deepl_on") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function k_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_turn_deepl_off") + "";
        return {
            c() {
                t = xo(n)
            },
            m(e, n) {
                vo(e, t, n)
            },
            p: Gn,
            d(e) {
                e && $o(t)
            }
        }
    }

    function S_(e) {
        let t, n, o, i, s, a, r = e[1] && $_(e);
        return {
            c() {
                t = yo("div"), n = yo("button"), o = To(), r && r.c(), Mo(n, "class", "dl-zendesk-top-icon svelte-lmvrdu")
            },
            m(l, c) {
                vo(l, t, c), fo(t, n), fo(t, o), r && r.m(t, null), i = !0, s || (a = [Eo(n, "click", e[7]), lo(Nn.call(null, t, {
                    isShadow: !0
                })), Eo(t, "click_outside", e[4])], s = !0)
            },
            p(e, [n]) {
                e[1] ? r ? (r.p(e, n), 2 & n && $i(r, 1)) : (r = $_(e), r.c(), $i(r, 1), r.m(t, null)) : r && (wi(), bi(r, 1, 1, (() => {
                    r = null
                })), vi())
            },
            i(e) {
                i || ($i(r), i = !0)
            },
            o(e) {
                bi(r), i = !1
            },
            d(e) {
                e && $o(t), r && r.d(), s = !1, Xn(a)
            }
        }
    }

    function M_(e, t, n) {
        let o;
        eo(e, hs, (e => n(3, o = e)));
        let {
            controller: i
        } = t, s = !1, a = "default";
        const r = () => {
                i.getTicketLanguageInformation().isSupported ? o.isZendeskOnboarded ? (n(1, s = !1), n(2, a = "default")) : (ro(hs, o.isZendeskOnboarded = !0, o), n(2, a = "welcome"), n(1, s = !0)) : (n(2, a = "language_not_supported"), n(1, s = o.isZendeskEnabled && i.getTicketLanguageInformation().hasAttemptedLanguageDetection))
            },
            l = () => {
                "welcome" === a && n(2, a = "default"), n(1, s = !1)
            };
        Ko((() => {
            r(), o.isZendeskOnboardingShown || (Sn(), ro(hs, o.isZendeskOnboardingShown = !0, o))
        }));
        return e.$$set = e => {
            "controller" in e && n(0, i = e.controller)
        }, [i, s, a, o, l, () => {
            ro(hs, o.isZendeskEnabled = !o.isZendeskEnabled, o)
        }, r, () => {
            s ? l() : n(1, s = !0)
        }, e => {
            ro(hs, o.selectedTargetLanguage = e.detail.selectedOption.value, o), xn(i)
        }, () => {
            o.isZendeskEnabled && l()
        }]
    }
    window.customElements.define("deepl-zendesk-toolbar", v_);
    class I_ extends Si {
        constructor(e) {
            super(), ki(this, e, M_, S_, Yn, {
                controller: 0,
                updateIconSettings: 6
            })
        }
        get updateIconSettings() {
            return this.$$.ctx[6]
        }
    }
    class D_ extends HTMLElement {
        constructor() {
            super(), this.shadow = this.attachShadow({
                mode: "open"
            }), this.shadowContainer = document.createElement("div"), this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"), e.setAttribute("href", chrome.runtime.getURL("build/content.css")), this.shadow.appendChild(e), this.shadow.appendChild(this.shadowContainer), this.createDOM = this.createDOM.bind(this), this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({
            controller: e
        }) {
            this.mainComponent = new I_({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e
                }
            })
        }
        triggerUpdateIconSettings() {
            this.mainComponent.updateIconSettings()
        }
        cleanupDOM() {
            this.shadowContainer.remove(), this.mainComponent && this.mainComponent.$destroy()
        }
    }
    return window.customElements.define("deepl-zendesk-top-icon", D_), e.GMAIL_CHAR_LIMIT = xs, e.GMAIL_CHAR_LIMIT_POPUP = ys, e.GMAIL_CONTROLLER_UI = $s, e.GMAIL_ONBOARDING = vs, e.GMAIL_TRANSLATE_EMAIL_TOOLBAR = ws, e.GMAIL_UI_ADDED_ATTRIBUTE = Cs, e.GMAIL_WRITE_MESSAGE_UI = bs, e.autodetectLanguage = er, e.calculateNewIconPosition = ht, e.canInjectInputTranslation = Dg, e.canTranslateElementForDomain = $a, e.checkForIntersectionWithOpenDialogs = Is, e.checkIfInputHasSelection = Ln, e.clearMessageControllers = xn, e.clickAtCoordinates = As, e.clickOnElement = Rs, e.createGmailController = ra, e.createGmailControllerUtil = Ls, e.createGoogleDocsIcon = na, e.createInlineTranslateSettingsTooltip = Ys, e.createInlineTranslateTooltip = Xs, e.createInlineTranslationTrigger = ua, e.createInlineTranslationTriggerListener = pa, e.createInputTranslationController = aa, e.createNotification = ga, e.createPageLoadPopup = ea, e.createSubmitButtonTooltip = En, e.createTicketController = tn, e.customizePage = fa, e.detectTicketLanguageInLiveChat = fn, e.detectTicketLanguageInTicket = hn, e.detectTicketType = dn, e.disableExtension = sn, e.elementHasTranslateToolbar = Ms, e.enableZendeskOnboarding = Sn, e.findEditableContent = async function t(n, o) {
        try {
            if (o.dataset && "true" === o.dataset.dlInputTranslation || o.dataset && "true" === o.dataset.dlNoInputTranslation) return;
            if ("true" === o.contentEditable || "TEXTAREA" === o.nodeName && o.rows > 1) {
                if ("none" === window.getComputedStyle(o).display) return;
                if (! function (e) {
                        return e.getBoundingClientRect().width > 0 && e.getBoundingClientRect().height > 0
                    }(o)) return;
                if (!va(o, e.websiteData.hostname)) return;
                o.dataset.dlInputTranslation = "true", n.push(o)
            }
            for (const e of o.childNodes) t(n, e)
        } catch (e) {
            Rt() && console.error(e), Pt(e.message)
        }
    }, e.findEmailToAndFromAddressTable = Ds, e.findForwardButtonInDocument = Hs, e.findSiblingDivWithAnyMessageId = zs, e.generateLanguagesWithShortcodeForDropdown = Os, e.getActivePane = Jt, e.getContextMessages = e => {
        const t = [],
            n = un(e).map(mn).map((e => e.innerText)),
            o = [],
            i = [];
        for (let e = 0; e < n.length; e++) {
            const s = e % 2 == 0 ? "start" : "end";
            let a = Math.floor(e / 2);
            if ("end" === s && (a = n.length - 1 - a), t.includes(a)) break;
            if ([...o, ...i].reduce(((e, t) => e + t.length), 0) + n[a].length > 3e3) break;
            "end" === s ? i.unshift(n[a]) : o.push(n[a]), t.push(a)
        }
        return [...o, ...i]
    }, e.getControllerFromMessage = yn, e.getElementCenterCoordinates = Ns, e.getGDocsisEditMode = ft, e.getGmailControllerUtil = Ts, e.getIFrameAndEditable = ut, e.getIconCoordinates = mt, e.getMessageContent = mn, e.getMessageViewContainers = Ss, e.getMessageWriteContainers = () => {
        const e = Array.from(document.querySelectorAll('[role="textbox"]')).filter((e => "true" === e.getAttribute("contenteditable")));
        return e
    }, e.getMessagesFromTicket = un, e.getScrollableElements = Rr, e.getSelectionContent = gt, e.getTicketController = en, e.getTicketId = Yt, e.getTicketStartingMessage = pn, e.getTicketStartingMessages = gn, e.getUserState = nr, e.getWebsiteSettings = tr, e.getZendeskController = Qt, e.improveGDocsSelectionContent = Qa, e.injectAskAReviewPopup = ma, e.injectControllerInMessage = Cn, e.injectInlineTranslation = sr, e.injectInputTranslation = ir, e.injectMissingMessageControllers = bn, e.injectMissingUIElements = nn, e.isDeepLCom = Ig, e.isGDocs = dt, e.isGmail = On, e.isInputArea = Nr, e.isOnMessageViewScreen = ks, e.isZendesk = Xt, e.onOpenPage = or, e.pageListener = ur, e.processGDocsCopyEvent = _t, e.reassembleGDocsTranslatedResult = yt, e.removeAllDeeplElements = function () {
        ! function (e) {
            const t = document.getElementsByTagName(e);
            if (!t.length) return;
            for (let e = t.length - 1; e >= 0; --e) t[e].cleanupDOM(), t[e].remove()
        }("deepl-input-controller")
    }, e.removeGmailController = la, e.removeGoogleDocsIcon = oa, e.removeInlineTranslateSettingsTooltip = Js, e.removeInlineTranslateTooltip = Qs, e.removeInlineTranslateTrigger = da, e.removeInputTranslationController = ca, e.removePageLoadPopup = ta, e.removeUIElementsFromList = Es, e.removeZendeskController = sa, e.removeZendeskToolbar = kn, e.removeZendeskUIElements = on, e.replaceTranslatedGDocsContent = Ct, e.runCustomScriptsForDomain = _a, e.runCustomScriptsForSpecificUrl = wa, e.scanForTranslatables = Wa, e.setErrorVisibility = rr, e.shouldBeTranslated = Ba, e.shouldInjectInputIcon = va, e.trackDeeplWriteEvent = dr, e.trackPageLandingIfNeeded = lr, e.trackZendeskCustomizationEvent = cr, e.translateGDocsSelectionContent = Xa, e.translateInlineText = Ga, e.translateSelectionRightClick = Va, e.translateWebsite = Za, e.translateZendeskMessage = Ja, e.translateZendeskSelectionContent = Ya, e.triggerCopyEvent = pt, e.twitterState = Um, e.unsubscribeToWebsiteState = qi, e.updateInputIconLanguageInformation = $n, e.updateInputPositionerCoords = Ar, e.updateIntegrationPanelIfExists = Tn, e.updateToolbarAutoTranslateStatus = wn, e.updateToolbarLanguageInformation = _n, e.updateTopIconLanguageInformation = vn, e.waitForElement = Ps, e.websiteState = Ui, e.whatsAppState = Cm, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
//# sourceMappingURL=content.js.map