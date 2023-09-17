var content = function(e) {
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
    }]
      , n = 1
      , o = 2
      , i = ""
      , s = "ONGOING_TRANSLATION"
      , a = "IS_TRANLSATION_COMPLETE"
      , r = "SHOW_ORIGINAL"
      , l = "ON_GOING_AUTODETECTION"
      , c = "ANONYMOUS_USER_MAX_CHAR_EXCEEDED"
      , d = 1
      , u = 2
      , p = "inline"
      , g = "automatic"
      , m = "manual"
      , h = 1
      , f = 2
      , _ = 1
      , w = 3
      , v = 1
      , $ = 2
      , b = 3
      , y = 1
      , C = 2
      , x = 1
      , T = 2
      , L = [/[^.]+\.deepl\.com/g, /[^.]+\.figma\.com/g]
      , E = [/docs.google\.com\/spreadsheets/g]
      , k = [/[^.]+\.deepl\.com/g]
      , S = {
        deepl_inline_ui: {
            z_index: 2147483650
        }
    }
      , M = "HINT_KEYBOARD_SHORTCUT"
      , I = "INPUT_TRANSLATION"
      , D = "INLINE_TRANSLATION"
      , O = "FULL_PAGE_TRANSLATION"
      , N = {
        green_theme: "green_theme"
    }
      , A = "INLINE_TRANSLATION_TRIGGER_ICON"
      , R = "INLINE_TRANSLATION_SETTINGS_ICON"
      , P = "INLINE_TRANSLATION_SETTING_POPUP"
      , z = "INPUT_TRANSLATION_TRIGGER_ICON"
      , H = "INPUT_TRANSLATION_SETTINGS_ICON"
      , F = "INPUT_TRANSLATION_SETTING_POPUP"
      , B = "SETTINGS_PAGE_FPT"
      , U = "SETTINGS_PAGE_READING"
      , q = "SETTINGS_PAGE_WRITING"
      , j = "FPT_HIDE_MODAL"
      , W = "INPUT_TRANSLATION_READ_MORE_LINK"
      , G = "INLINE_TRANSLATION_READ_MORE_LINK"
      , V = "FPT_TRANSLATION_READ_MORE_LINK"
      , Z = "EXTENSION_HUB_TOGGLE_SWITCH"
      , K = "HUB_CUSTOMIZE_SHORTCUT"
      , X = "HUB_LOGIN_BUTTON"
      , Q = "HUB_UPGRADE_TO_PRO_LINK"
      , Y = "HUB_TRY_PRO_LINK"
      , J = "SETTINGS_PAGE_CUSTOMIZE_SHORTCUT_BUTTON"
      , ee = "HUB_FPT_ENABLE_CHECKBOX"
      , te = "HUB_FPT_DISABLE_CHECKBOX"
      , ne = "DEEPL_WRITE_ICON"
      , oe = "gmailOnboardingPopup"
      , ie = "gmailOnboardingIcon"
      , se = "trigger-translation"
      , ae = "CLICK_ON_SHORTCUT_NOTIFICATION"
      , re = "CLICK_ON_INLINE_TRANSLATION_SHOW_ALTERNATIVES"
      , le = "CLICK_ON_INLINE_TRANSLATION_CLOSE_ICON"
      , ce = "CLICK_ON_LOGOUT_MENU_ENTRY"
      , de = "DISABLE_PER_SITE"
      , ue = "DISABLE_EVERYWHERE"
      , pe = "INPUT_TRANSLATION"
      , ge = "INLINE_TRANSLATION"
      , me = 1
      , he = 2
      , fe = 0
      , _e = 1
      , we = 2
      , ve = 3
      , $e = "cofdbpoegempjloogbagkncekinflcnj"
      , be = "fancfknaplihpclbhbpclnmmjcjanbaf"
      , ye = "ocpdpnakdghopjcifldjidbdmfobmmoi"
      , Ce = {
        deepl: /^(.*\.)?deepl\.com$/gm,
        linguee: /^(.*\.)?linguee\.[a-z]{2,3}$/gm,
        google_translate: /^translate\.google\.com$/gm,
        gmail: /^mail\.google\.com$/gm
    }
      , xe = {
        word_365: "euc-word-edit.officeapps.live.com",
        power_point_365: "euc-powerpoint.officeapps.live.com"
    }
      , Te = {
        word_365: "WacFrame_Word_0",
        power_point_365: "WacFrame_PowerPoint_0"
    }
      , Le = {
        initial: "INITIAL",
        feedback: "FEEDBACK",
        review: "REVIEW"
    }
      , Ee = 1
      , ke = 2
      , Se = 3
      , Me = {
        default: "DEFAULT",
        gdocs: "GDOCS",
        zendesk: "ZENDESK",
        whatsappWeb: "WHATSAPP_WEB",
        twitter: "TWITTER",
        gmail: "GMAIL"
    }
      , Ie = {
        translate: "TRANSLATE",
        write: "WRITE"
    }
      , De = ["script", "style"]
      , Oe = ["a", "abbr", "acronym", "b", "bdo", "big", "br", "button", "cite", "code", "dfn", "em", "i", "img", "input", "kbd", "label", "map", "object", "q", "samp", "script", "select", "small", "span", "strong", "sub", "sup", "textarea", "time", "tt", "var", "font"]
      , Ne = "OPEN_TICKET"
      , Ae = "DETECT_TICKET_LANGUAGE"
      , Re = "SWITCH_TICKET_LANGUAGE"
      , Pe = "ENABLE_AUTOTRANSLATE"
      , ze = "DISABLE_AUTOTRANSLATE"
      , He = "TRANSLATE_MESSAGE"
      , Fe = "TRANSLATE_INPUT"
      , Be = "ERROR"
      , Ue = "TICKET"
      , qe = "LIVE_CHAT"
      , je = "free"
      , We = "pro"
      , Ge = "none"
      , Ve = "TEXT_REFINEMENT_REQUEST"
      , Ze = "GDOCS_INSERT_COPY"
      , Ke = "GDOCS_DISCARD_COPY"
      , Xe = "GDOCS_CHAR_LIMIT_REACHED"
      , Qe = "RESULT_ACCEPTED"
      , Ye = "RESULT_REVERTED"
      , Je = "ERROR"
      , et = "RESULT_ACCEPTED"
      , tt = "RESULT_REVERTED"
      , nt = "SHOWN"
      , ot = "CLICKED"
      , it = "READING_VIEW_TRANSLATE"
      , st = "COMPOSE_VIEW_TRANSLATE"
      , at = "COMPOSE_VIEW_IMPROVE"
      , rt = ()=>{
        const e = "https://docs.google.com";
        return window.location.href.substr(0, e.length) === e
    }
      , lt = ()=>{
        const e = document.querySelector(".docs-texteventtarget-iframe")?.contentWindow;
        return {
            iFrame: e,
            editable: e && e.document.querySelector("[contenteditable=true]")
        }
    }
      , ct = ()=>{
        const {iFrame: e, editable: t} = lt();
        if (!e || !t)
            return;
        const n = new e.ClipboardEvent("copy",{
            bubbles: !0,
            clipboardData: new e.DataTransfer
        });
        t.dispatchEvent(n)
    }
      , dt = ()=>{
        const {iFrame: e, editable: t} = lt();
        if (!e || !t)
            return;
        const n = new e.CustomEvent("copy",{
            bubbles: !0
        });
        t.dispatchEvent(n);
        const o = (e=>{
            if (0 === e.length)
                return !0;
            for (let t = 0; t < e.length; t++)
                if (8203 !== e.charCodeAt(t))
                    return !1;
            return !0
        }
        )(t.innerText.trim());
        return {
            html: o ? "" : t.innerHTML,
            text: o ? "" : t.innerText
        }
    }
      , ut = ()=>{
        const e = document.querySelector("deepl-gdocs-icon")?.shadowRoot.querySelector(".dl-gdocs-icon");
        if (!e)
            return void console.error("GDocs Icon was not present while trying to get the coordinates");
        const t = e.getBoundingClientRect()
          , n = document.body.parentNode.getBoundingClientRect()
          , {top: o, left: i, right: s, bottom: a, height: r, width: l} = t;
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
    }
      , pt = ()=>{
        const e = document.querySelector("#docs-instant-bubble")
          , t = document.querySelector(".kix-appview-editor")
          , n = document.querySelector(".kix-page-paginated")
          , o = 120
          , i = 40
          , s = t.getBoundingClientRect();
        let a = !1;
        const r = {
            top: 0,
            left: 0
        };
        try {
            if (!e)
                throw new Error;
            const t = e.getBoundingClientRect();
            if (t.left <= 0)
                throw new Error;
            const n = Math.round(t.top + 134 || 0);
            r.left = t.left,
            r.top = n ? n + 20 : 0,
            r.top + o / 2 < s.top + 10 && (r.top = s.top + 10),
            r.top - o / 2 > s.bottom && (a = !0)
        } catch (e) {
            if (n) {
                const e = n.getBoundingClientRect();
                r.left = e.right - i / 2,
                r.top = s.top + 30
            }
        }
        return r.left + i / 2 > s.right && (a = !0),
        {
            shouldBeOutOfViewport: a,
            newPosition: r
        }
    }
      , gt = ()=>!!document.querySelector("#docs-toolbar-wrapper")
      , mt = e=>{
        const t = e.clipboardData.getData("application/x-vnd.google-docs-document-slice-clip+wrapped")
          , n = JSON.parse(t)
          , o = JSON.parse(n.data).resolved
          , i = [];
        let s = "";
        for (let e = 0; e < o.dsl_spacers.length; e++) {
            const t = o.dsl_spacers[e];
            o.dsl_styleslices.forEach((t=>{
                if (t.stsl_styles.length > 0 && t.stsl_styles[e]) {
                    const n = `a ${i.length + 1}`;
                    i.push({
                        entity_type: t.stsl_type,
                        entity_abbreviation: n,
                        entity: t.stsl_styles[e]
                    }),
                    s += `<${n}>`
                }
            }
            )),
            s += t
        }
        const a = []
          , r = s.split("\n").map((e=>{
            const t = e.replace(/<a\d+>/g, "").trim().length > 0;
            if (t) {
                const {leading: n, trailing: o, processedLine: i} = ht(e);
                return a.push(i),
                {
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
        }
        ));
        return {
            textLines: a,
            entities: i,
            contentReference: r,
            originalObject: n,
            originalText: o.dsl_spacers
        }
    }
      , ht = e=>{
        const {leadingEntities: t, processedLine: n} = ft(e)
          , {trailingEntities: o, processedLine: i} = _t(n);
        return {
            leading: t,
            trailing: o,
            processedLine: i
        }
    }
      , ft = e=>{
        let t = ""
          , n = ""
          , o = ""
          , i = !0;
        for (const s of e) {
            if (i) {
                const e = o[o.length - 1];
                if ("<" === s && 0 === o.length) {
                    o = "<";
                    continue
                }
                if (">" === s && o.length > 0 && e.match(/\d/)) {
                    t = t + o + ">",
                    o = "";
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
                if (wt(s) && 0 === o.length) {
                    t += s;
                    continue
                }
                i = !1,
                o = ""
            }
            n += s
        }
        return {
            processedLine: n,
            leadingEntities: t
        }
    }
      , _t = e=>{
        let t = ""
          , n = ""
          , o = ""
          , i = !0;
        for (const s of e.split("").reverse()) {
            if (i) {
                if (">" === s && 0 === o.length) {
                    o = ">";
                    continue
                }
                if ("<" === s && o.length > 0 && "a" === o[0]) {
                    t = "<" + o + t,
                    o = "";
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
                if (wt(s) && 0 === o.length) {
                    t = s + t;
                    continue
                }
                i = !1,
                o = ""
            }
            n = s + n
        }
        return {
            processedLine: n,
            trailingEntities: t
        }
    }
      , wt = e=>[16, 17, 18, 28].includes(e.charCodeAt(0))
      , vt = ({textLines: e, entities: t, contentReference: n})=>{
        let o = n.map((t=>t.isTranslatable ? `${t.leading}${e[t.index]}${t.trailing}` : t.line)).join("\n");
        o = o.replace(/<\/a(\d+)>/g, "<a$1>");
        let i = ""
          , s = []
          , a = 0
          , r = 0;
        for (; a + r < o.length; ) {
            const e = a + r;
            if ("<" === o[e] && "a" === o[e + 1]) {
                let n = "<a"
                  , i = !0
                  , l = !1
                  , c = !0;
                for (; c; ) {
                    const t = o[e + n.length];
                    ">" === t ? (n += t,
                    l || (i = !1),
                    c = !1) : t.match(/\d/) ? (n += t,
                    l = !0) : (i = !1,
                    c = !1)
                }
                if (i) {
                    r += n.length;
                    const e = t.find((e=>`<${e.entity_abbreviation}>` === n));
                    s.push({
                        ...e,
                        new_position: a
                    });
                    continue
                }
            }
            i += o[e],
            a++
        }
        return {
            processedText: i,
            processedEntities: s
        }
    }
      , $t = ({entities: e, text: t, originalObject: n})=>{
        const o = bt({
            entities: e,
            text: t,
            originalObject: n
        });
        yt(o)
    }
      , bt = ({entities: e, text: t, originalObject: n})=>{
        const o = JSON.parse(n.data)
          , i = o.resolved.dsl_styleslices.map((t=>{
            const n = e.filter((e=>e.entity_type === t.stsl_type));
            if (0 === n.length)
                return t;
            const o = {};
            let i = 0;
            n.forEach((e=>{
                i = e.new_position > i ? e.new_position : i,
                o[`${e.new_position}`] = e.entity
            }
            ));
            const s = [];
            for (let e = 0; e <= i; e++)
                s.push(o[`${e}`] || null);
            return {
                ...t,
                stsl_styles: s
            }
        }
        ))
          , s = {
            ...o.resolved,
            dsl_spacers: t,
            dsl_styleslices: i
        }
          , a = {
            ...n,
            data: JSON.stringify({
                ...o,
                resolved: s
            })
        };
        return JSON.stringify(a)
    }
      , yt = e=>{
        const {editable: t} = lt()
          , n = new DataTransfer;
        n.setData("application/x-vnd.google-docs-document-slice-clip+wrapped", e);
        const o = new ClipboardEvent("paste",{
            bubbles: !0,
            clipboardData: n
        });
        t.dispatchEvent(o)
    }
      , Ct = (e=25,t=null)=>new Promise((n=>setTimeout((()=>n(t)), e)));
    function xt(e, t) {
        return Lt(e) === t
    }
    function Tt(e) {
        return !!e && (["EN"].includes(e) ? e = "EN-GB" : ["PT"].includes(e) && (e = "PT-PT"),
        t.map((e=>e.langCode)).includes(e))
    }
    const Lt = e=>e.substring(0, 2).toUpperCase();
    async function Et(e) {
        let t = "";
        const n = await chrome.i18n.detectLanguage(e);
        return n && n.languages?.length > 0 && (t = n.languages.sort(((e,t)=>t.percentage - e.percentage))[0].language.substr(0, 2).toUpperCase()),
        t
    }
    const kt = ()=>{
        let e, n, o = !1;
        return t.map((t=>{
            let i;
            return o = ["EN-US", "EN-GB", "PT-PT", "PT-BR"].includes(t.langCode),
            o && (({optionLabel: e, selectedLabel: n} = function(e) {
                switch (e.langCode) {
                case "EN-US":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_EN_US"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_EN_US")
                    };
                case "EN-GB":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_EN_UK"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_EN_UK")
                    };
                case "PT-PT":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_PT_PT"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_PT_PT")
                    };
                case "PT-BR":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_PT_BR"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_PT_BR")
                    };
                default:
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_undefined"),
                        selectedLabel: chrome.i18n.getMessage("supported_languages_undefined")
                    }
                }
            }(t)),
            i = t.langCode.slice(0, 2).toLowerCase() + t.langCode.slice(2)),
            {
                value: t.langCode,
                label: o ? e : chrome.i18n.getMessage(`supported_languages_ ${t.langCode}`),
                selectedOptionLabel: o ? n : chrome.i18n.getMessage(`supported_languages_ ${t.langCode}`),
                regionalVariant: i
            }
        }
        )).sort(((e,t)=>e.label.localeCompare(t.label, chrome.i18n.getUILanguage())))
    }
    ;
    function St(e) {
        return "EN" === e ? "EN-GB" : "PT" === e ? "PT-PT" : e
    }
    function Mt(e, t, n) {
        return "EN" === e ? t["EN-GB"] === n || t["EN-US"] === n : "PT" === e ? t["PT-PT"] === n || t["PT-BR"] === n : t[e] === n
    }
    const It = "production"
      , Dt = "development";
    function Ot() {
        return It === Dt
    }
    function Nt(e) {
        chrome.runtime.sendMessage({
            action: "dlTrackError",
            errorMessage: e
        })
    }
    const At = "PROTOCOL_ERROR"
      , Rt = "NETWORK_ERROR"
      , Pt = "FULL_PAGE_SERVER_ERROR"
      , zt = "-32003"
      , Ht = "429"
      , Ft = "403"
      , Bt = "1045601"
      , Ut = "1042902"
      , qt = "ENTRY_NOT_FOUND"
      , jt = "SERVER_ERROR"
      , Wt = "TRANSLATED_INPUT_NOT_SET"
      , Gt = "HTML_NODE_CHAR_LENGTH_TOO_LONG"
      , Vt = ()=>{
        const e = window.location.hostname.split(".");
        if (e.length < 2)
            return !1;
        return "zendesk.com" === `${e[e.length - 2]}.${e[e.length - 1]}`
    }
      , Zt = ()=>document.querySelector("deepl-zendesk-controller")
      , Kt = e=>{
        const t = e.match(/^\/agent\/tickets\/(\d+)$/);
        if (t)
            return t[1]
    }
      , Xt = ()=>{
        const e = document.querySelector("#main_panes");
        if (e)
            return Array.from(e.children).find((e=>"hidden" !== window.getComputedStyle(e).visibility && "none" !== window.getComputedStyle(e).display))
    }
      , Qt = e=>e.querySelector("deepl-zendesk-ticket-controller")
      , Yt = (e,t)=>{
        const n = document.createElement("deepl-zendesk-ticket-controller");
        return e.appendChild(n),
        n.createDOM({
            pane: e,
            ticketId: t
        }),
        n
    }
      , Jt = (e,t)=>{
        try {
            const n = e.getPane();
            if (n.querySelector("deepl-zendesk-top-icon") || on(n, e),
            !t)
                return;
            e.getTicketLanguageInformation().isSupported ? (n.querySelector("deepl-zendesk-toolbar") || sn(n, e),
            n.querySelector("deepl-zendesk-input-icon") || an(n, e)) : n.querySelector("deepl-zendesk-toolbar") || sn(n, e)
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
      , en = ()=>{
        nn(["deepl-zendesk-ticket-controller", "deepl-zendesk-top-icon", "deepl-zendesk-toolbar", "deepl-zendesk-input-icon", "deepl-zendesk-message-controller", "deepl-zendesk-submit-button-tooltip", "deepl-zendesk-onboarding-modal"])
    }
      , tn = ()=>{
        nn(["deepl-zendesk-toolbar", "deepl-zendesk-input-icon", "deepl-zendesk-message-controller", "deepl-zendesk-onboarding-modal"]);
        const e = Array.from(document.getElementsByTagName("deepl-zendesk-ticket-controller"));
        for (const t of e)
            t.setIsAutoTranslateEnabled(!1)
    }
      , nn = e=>{
        try {
            for (const t of e)
                if (t) {
                    const e = Array.from(document.getElementsByTagName(t));
                    for (const t of e)
                        t.cleanupDOM(),
                        t.remove()
                }
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
      , on = (e,t)=>{
        const n = document.createElement("deepl-zendesk-top-icon")
          , o = e.querySelector('[data-test-id="omni-header-filter-trigger"],[data-test-id="omni-header-ticket-actions-trigger"]');
        if (!o)
            return;
        const i = o.parentElement;
        return i ? (i.prepend(n),
        n.createDOM({
            controller: t
        }),
        n) : void 0
    }
      , sn = (e,t)=>{
        const n = document.createElement("deepl-zendesk-toolbar")
          , o = e.querySelector('[data-test-id="ticket-call-controls-action-bar"]');
        if (o)
            return o.after(n),
            n.createDOM({
                controller: t
            }),
            n.updateLanguageInformation(t.getTicketLanguageInformation()),
            n
    }
      , an = (e,t)=>{
        const n = document.createElement("deepl-zendesk-input-icon")
          , o = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul')
          , i = e.querySelector('div[data-test-id="ticket-rich-text-editor"] [contenteditable="true"]');
        if (i && o && o)
            return o.append(n),
            n.createDOM({
                controller: t,
                editable: i
            }),
            n
    }
      , rn = e=>{
        const t = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul[data-test-id="ticket-editor-app-icon-view"][data-cy="ticket-editor-app-icon-view"]')
          , n = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul');
        return t ? Ue : n ? qe : void 0
    }
      , ln = e=>Array.from(e.querySelectorAll('article[data-test-id="omni-log-comment-item"]'))
      , cn = e=>{
        const t = ln(e);
        if (!(t.length < 1))
            return t.sort(((e,t)=>{
                const n = e.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime")
                  , o = t.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime");
                return n === o ? 0 : new Date(n) < Date(o) ? -1 : 1
            }
            )),
            t[0]
    }
      , dn = (e,t)=>{
        const n = ln(e);
        if (n.length < 1)
            return;
        n.sort(((e,t)=>{
            const n = e.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime")
              , o = t.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime");
            return n === o ? 0 : new Date(n) < Date(o) ? -1 : 1
        }
        ));
        const o = [];
        for (let e = 0; e < t; e++)
            n[e] && o.push(n[e]);
        return o
    }
      , un = e=>e.querySelector('[data-test-id="omni-log-item-message"]')
      , pn = async e=>{
        const t = cn(e);
        if (t) {
            const e = t ? un(t).innerText : "";
            return await Et(e)
        }
    }
      , gn = async e=>{
        const t = dn(e, 12)
          , n = [];
        for (const e in t) {
            const o = t[e]
              , i = o ? un(o).innerText : ""
              , s = o.querySelector('[data-test-id="omni-log-item-sender"] a')?.getAttribute("href")
              , a = o.querySelector('[data-test-id="omni-log-item-sender"] a strong').innerText;
            if (0 == i.length)
                continue;
            let r = n.find((e=>e.id === s));
            const l = i.includes(`: ${a}`) && i.indexOf(`: ${a}`) + `: ${a}`.length === i.length
              , c = 0 === Number(e);
            r || (r = {
                id: s,
                name: a,
                messages: [],
                isLikelyCustomer: !1,
                isFirstMessage: !1
            },
            n.push(r)),
            l && (r.isLikelyCustomer = !0),
            c && (r.isFirstMessage = !0),
            r.messages.push({
                message: i,
                shouldBeSkipped: l || i.length <= 3
            })
        }
        const o = (1 === n.filter((e=>e.isLikelyCustomer)).length ? n.find((e=>e.isLikelyCustomer)) : n.find((e=>!e.isFirstMessage))).messages.filter((e=>!e.shouldBeSkipped)).map((e=>e.message));
        o.sort(((e,t)=>e.length > t.length ? -1 : e.length < t.length ? 1 : 0));
        const i = o[0];
        if (i)
            return await Et(i)
    }
      , mn = (e,t)=>{
        const n = e.querySelector("deepl-zendesk-toolbar");
        return !!n && (n.updateLanguageInformation(t),
        !0)
    }
      , hn = (e,{isEnabled: t})=>{
        const n = e.querySelector("deepl-zendesk-toolbar");
        return !!n && (n.updateAutoTranslateStatus(t),
        !0)
    }
      , fn = e=>{
        const t = e.querySelector("deepl-zendesk-top-icon");
        return !!t && (t.triggerUpdateIconSettings(),
        !0)
    }
      , _n = (e,t)=>{
        const n = e.querySelector("deepl-zendesk-input-icon");
        return !!n && (n.updateTargetLanguage(t),
        !0)
    }
      , wn = e=>{
        try {
            const t = e.getPane()
              , n = ln(t);
            for (const t of n)
                vn(t) || $n(t, e)
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
      , vn = e=>e.querySelector("deepl-zendesk-message-controller")
      , $n = (e,t)=>{
        const n = document.createElement("deepl-zendesk-message-controller");
        return un(e).after(n),
        n.createDOM({
            controller: t,
            message: e
        }),
        n
    }
      , bn = e=>{
        const t = Array.from(e.getPane().querySelectorAll("deepl-zendesk-message-controller"));
        for (const e of t)
            e.triggerTranslateAgain()
    }
      , yn = e=>{
        const t = Array.from(e.querySelectorAll("iframe"));
        for (const e of t)
            e.contentWindow.postMessage("dl-zendesk-welcome-screen", "*")
    }
      , Cn = e=>{
        const t = e.querySelector("deepl-zendesk-input-icon");
        return !!t && t.getInputHasSelection()
    }
      , xn = e=>{
        const t = e.getPane().querySelector('[data-test-id="submit_button-button"]')
          , n = t.closest('[data-garden-id="buttons.button_group_view"]')
          , o = t.getBoundingClientRect()
          , i = n.getBoundingClientRect()
          , s = document.createElement("deepl-zendesk-submit-button-tooltip");
        return s.createDOM({
            controller: e,
            coords: o,
            containerCoords: i
        }),
        n.prepend(s),
        s
    }
      , Tn = e=>{
        const t = e.querySelector('[data-test-id="conversation-translator-language-detection-prompt"]');
        t && t.remove()
    }
      , Ln = ()=>{
        Zt()?.showOnboarding()
    }
    ;
    function En(e) {
        return new Promise(((t,n)=>{
            chrome.runtime.sendMessage(e, (function(e) {
                e && e.error && n(e),
                t(e)
            }
            ))
        }
        ))
    }
    function kn(e, t) {
        return En({
            action: "dlSendNotification",
            payload: {
                type: e,
                options: t
            }
        })
    }
    async function Sn(e) {
        if (!chrome.tabs)
            return;
        const t = await chrome.tabs.query({
            active: !0,
            currentWindow: !0
        });
        chrome.tabs.sendMessage(t[0].id, e)
    }
    const Mn = ()=>{
        const e = "https://mail.google.com";
        return window.location.href.substr(0, e.length) === e
    }
    ;
    function In(e, {isShadow: t=!1, exceptions: n=[]}={}) {
        const o = o=>{
            const i = t ? o.composedPath()[0] : o.target;
            !e || e.contains(i) || o.defaultPrevented || function(e, t) {
                for (let n of t)
                    if (e.closest(n))
                        return !0;
                return !1
            }(i, n) || e.dispatchEvent(new CustomEvent("click_outside",e))
        }
        ;
        return document.addEventListener("click", o, !0),
        {
            destroy() {
                document.removeEventListener("click", o, !0)
            }
        }
    }
    function Dn(e) {
        document.addEventListener("deepl-reset-event", e)
    }
    function On(e) {
        const t = e || window.getSelection().getRangeAt(0)
          , n = t.getBoundingClientRect()
          , o = document.body.parentNode.getBoundingClientRect()
          , {top: i, left: s, right: a, bottom: r, height: l, width: c} = n
          , d = {
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
            d.x = e.getBoundingClientRect().left,
            d.y = e.getBoundingClientRect().top + e.offsetHeight
        }
        return d
    }
    function Nn(e) {
        let t = e.childNodes[0];
        for (let n of Array.from(e.childNodes))
            if (t.getBoundingClientRect || (t = n),
            n.getBoundingClientRect && (n.getBoundingClientRect().right > t.getBoundingClientRect().right && (t = n),
            n.hasChildNodes())) {
                const e = Nn(n);
                if (e && e.getBoundingClientRect) {
                    const o = n.getBoundingClientRect()
                      , i = e.getBoundingClientRect();
                    o.right < i.right && (t = e)
                }
            }
        return t
    }
    const An = e=>{
        const t = []
          , n = [];
        return zn({
            domElements: t,
            strings: n,
            element: e
        }),
        {
            domElements: t,
            strings: n
        }
    }
    ;
    function Rn(e) {
        for (var t = 0; t < e.childNodes.length; ++t) {
            const n = e.childNodes[t];
            if ("#text" != n.nodeName && "#comment" != n.nodeName) {
                if ("block" == window.getComputedStyle(n).display)
                    return !0;
                if (Rn(n))
                    return !0
            }
        }
        return !1
    }
    const Pn = ({strings: e, domElements: t})=>{
        for (const n in t)
            t[n].innerHTML = e[n]
    }
      , zn = ({domElements: e, strings: t, element: n})=>{
        if ("#text" != n.nodeName && "#comment" != n.nodeName)
            if (function(e) {
                if (Hn(e) || Bn(e))
                    return !1;
                for (const t of e.childNodes)
                    if ("#text" == t.nodeName && "" != t.wholeText.trim() || "font" == t.nodeName)
                        return !0;
                for (const t of e.childNodes)
                    if (!Hn(t) && (!Fn(t) || Bn(t) || "inline" != window.getComputedStyle(t).display || Rn(e)))
                        return !1;
                if (void 0 === e.innerText || "" == e.innerText.trim())
                    return !1;
                if (1 === e.childNodes.length) {
                    const t = e.childNodes[0];
                    return Hn(t)
                }
                return !0
            }(n))
                e.push(n),
                t.push(n.innerHTML);
            else
                for (const o of n.childNodes)
                    zn({
                        domElements: e,
                        strings: t,
                        element: o
                    })
    }
    ;
    const Hn = e=>"#text" == e.nodeName || "#comment" == e.nodeName
      , Fn = e=>Oe.includes(e.nodeName.toLowerCase())
      , Bn = e=>De.includes(e.nodeName.toLowerCase());
    function Un() {}
    const qn = e=>e;
    function jn(e) {
        return e()
    }
    function Wn() {
        return Object.create(null)
    }
    function Gn(e) {
        e.forEach(jn)
    }
    function Vn(e) {
        return "function" == typeof e
    }
    function Zn(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    function Kn(e, ...t) {
        if (null == e)
            return Un;
        const n = e.subscribe(...t);
        return n.unsubscribe ? ()=>n.unsubscribe() : n
    }
    function Xn(e, t, n) {
        e.$$.on_destroy.push(Kn(t, n))
    }
    function Qn(e, t, n, o) {
        if (e) {
            const i = Yn(e, t, n, o);
            return e[0](i)
        }
    }
    function Yn(e, t, n, o) {
        return e[1] && o ? function(e, t) {
            for (const n in t)
                e[n] = t[n];
            return e
        }(n.ctx.slice(), e[1](o(t))) : n.ctx
    }
    function Jn(e, t, n, o) {
        if (e[2] && o) {
            const i = e[2](o(n));
            if (void 0 === t.dirty)
                return i;
            if ("object" == typeof i) {
                const e = []
                  , n = Math.max(t.dirty.length, i.length);
                for (let o = 0; o < n; o += 1)
                    e[o] = t.dirty[o] | i[o];
                return e
            }
            return t.dirty | i
        }
        return t.dirty
    }
    function eo(e, t, n, o, i, s) {
        if (i) {
            const a = Yn(t, n, o, s);
            e.p(a, i)
        }
    }
    function to(e) {
        if (e.ctx.length > 32) {
            const t = []
              , n = e.ctx.length / 32;
            for (let e = 0; e < n; e++)
                t[e] = -1;
            return t
        }
        return -1
    }
    function no(e) {
        return null == e ? "" : e
    }
    function oo(e, t, n) {
        return e.set(n),
        t
    }
    function io(e) {
        return e && Vn(e.destroy) ? e.destroy : Un
    }
    const so = "undefined" != typeof window;
    let ao = so ? ()=>window.performance.now() : ()=>Date.now()
      , ro = so ? e=>requestAnimationFrame(e) : Un;
    const lo = new Set;
    function co(e) {
        lo.forEach((t=>{
            t.c(e) || (lo.delete(t),
            t.f())
        }
        )),
        0 !== lo.size && ro(co)
    }
    function uo(e) {
        let t;
        return 0 === lo.size && ro(co),
        {
            promise: new Promise((n=>{
                lo.add(t = {
                    c: e,
                    f: n
                })
            }
            )),
            abort() {
                lo.delete(t)
            }
        }
    }
    function po(e, t) {
        e.appendChild(t)
    }
    function go(e) {
        if (!e)
            return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }
    function mo(e) {
        const t = wo("style");
        return function(e, t) {
            po(e.head || e, t),
            t.sheet
        }(go(e), t),
        t.sheet
    }
    function ho(e, t, n) {
        e.insertBefore(t, n || null)
    }
    function fo(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }
    function _o(e, t) {
        for (let n = 0; n < e.length; n += 1)
            e[n] && e[n].d(t)
    }
    function wo(e) {
        return document.createElement(e)
    }
    function vo(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }
    function $o(e) {
        return document.createTextNode(e)
    }
    function bo() {
        return $o(" ")
    }
    function yo() {
        return $o("")
    }
    function Co(e, t, n, o) {
        return e.addEventListener(t, n, o),
        ()=>e.removeEventListener(t, n, o)
    }
    function xo(e) {
        return function(t) {
            return t.preventDefault(),
            e.call(this, t)
        }
    }
    function To(e) {
        return function(t) {
            return t.stopPropagation(),
            e.call(this, t)
        }
    }
    function Lo(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }
    function Eo(e, t) {
        t = "" + t,
        e.wholeText !== t && (e.data = t)
    }
    function ko(e, t) {
        e.value = null == t ? "" : t
    }
    function So(e, t, n, o) {
        null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, o ? "important" : "")
    }
    function Mo(e, t) {
        for (let n = 0; n < e.options.length; n += 1) {
            const o = e.options[n];
            if (o.__value === t)
                return void (o.selected = !0)
        }
        e.selectedIndex = -1
    }
    let Io;
    function Do() {
        if (void 0 === Io) {
            Io = !1;
            try {
                "undefined" != typeof window && window.parent && window.parent.document
            } catch (e) {
                Io = !0
            }
        }
        return Io
    }
    function Oo(e, t) {
        "static" === getComputedStyle(e).position && (e.style.position = "relative");
        const n = wo("iframe");
        n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),
        n.setAttribute("aria-hidden", "true"),
        n.tabIndex = -1;
        const o = Do();
        let i;
        return o ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",
        i = Co(window, "message", (e=>{
            e.source === n.contentWindow && t()
        }
        ))) : (n.src = "about:blank",
        n.onload = ()=>{
            i = Co(n.contentWindow, "resize", t)
        }
        ),
        po(e, n),
        ()=>{
            (o || i && n.contentWindow) && i(),
            fo(n)
        }
    }
    function No(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }
    function Ao(e, t, {bubbles: n=!1, cancelable: o=!1}={}) {
        const i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, n, o, t),
        i
    }
    class Ro {
        constructor(e=!1) {
            this.is_svg = !1,
            this.is_svg = e,
            this.e = this.n = null
        }
        c(e) {
            this.h(e)
        }
        m(e, t, n=null) {
            this.e || (this.is_svg ? this.e = vo(t.nodeName) : this.e = wo(t.nodeName),
            this.t = t,
            this.c(e)),
            this.i(n)
        }
        h(e) {
            this.e.innerHTML = e,
            this.n = Array.from(this.e.childNodes)
        }
        i(e) {
            for (let t = 0; t < this.n.length; t += 1)
                ho(this.t, this.n[t], e)
        }
        p(e) {
            this.d(),
            this.h(e),
            this.i(this.a)
        }
        d() {
            this.n.forEach(fo)
        }
    }
    function Po(e, t) {
        return new e(t)
    }
    const zo = new Map;
    let Ho, Fo = 0;
    function Bo(e, t, n, o, i, s, a, r=0) {
        const l = 16.666 / o;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const o = t + (n - t) * s(e);
            c += 100 * e + `%{${a(o, 1 - o)}}\n`
        }
        const d = c + `100% {${a(n, 1 - n)}}\n}`
          , u = `__svelte_ ${function(e) {
            let t = 5381
              , n = e.length;
            for (; n--; )
                t = (t << 5) - t ^ e.charCodeAt(n);
            return t >>> 0
        }(d)}_ ${r}`
          , p = go(e)
          , {stylesheet: g, rules: m} = zo.get(p) || function(e, t) {
            const n = {
                stylesheet: mo(t),
                rules: {}
            };
            return zo.set(e, n),
            n
        }(p, e);
        m[u] || (m[u] = !0,
        g.insertRule(`@keyframes ${u} ${d}`, g.cssRules.length));
        const h = e.style.animation || "";
        return e.style.animation = `${h ? `${h}, ` : ""}${u} ${o}ms linear ${i}ms 1 both`,
        Fo += 1,
        u
    }
    function Uo(e, t) {
        const n = (e.style.animation || "").split(", ")
          , o = n.filter(t ? e=>e.indexOf(t) < 0 : e=>-1 === e.indexOf("__svelte"))
          , i = n.length - o.length;
        i && (e.style.animation = o.join(", "),
        Fo -= i,
        Fo || ro((()=>{
            Fo || (zo.forEach((e=>{
                const {ownerNode: t} = e.stylesheet;
                t && fo(t)
            }
            )),
            zo.clear())
        }
        )))
    }
    function qo(e) {
        Ho = e
    }
    function jo() {
        if (!Ho)
            throw new Error("Function called outside component initialization");
        return Ho
    }
    function Wo(e) {
        jo().$$.on_mount.push(e)
    }
    function Go(e) {
        jo().$$.on_destroy.push(e)
    }
    function Vo() {
        const e = jo();
        return (t,n,{cancelable: o=!1}={})=>{
            const i = e.$$.callbacks[t];
            if (i) {
                const s = Ao(t, n, {
                    cancelable: o
                });
                return i.slice().forEach((t=>{
                    t.call(e, s)
                }
                )),
                !s.defaultPrevented
            }
            return !0
        }
    }
    function Zo(e, t) {
        return jo().$$.context.set(e, t),
        t
    }
    function Ko(e) {
        return jo().$$.context.get(e)
    }
    function Xo(e, t) {
        const n = e.$$.callbacks[t.type];
        n && n.slice().forEach((e=>e.call(this, t)))
    }
    const Qo = []
      , Yo = []
      , Jo = []
      , ei = []
      , ti = Promise.resolve();
    let ni = !1;
    function oi() {
        ni || (ni = !0,
        ti.then(li))
    }
    function ii(e) {
        Jo.push(e)
    }
    const si = new Set;
    let ai, ri = 0;
    function li() {
        const e = Ho;
        do {
            for (; ri < Qo.length; ) {
                const e = Qo[ri];
                ri++,
                qo(e),
                ci(e.$$)
            }
            for (qo(null),
            Qo.length = 0,
            ri = 0; Yo.length; )
                Yo.pop()();
            for (let e = 0; e < Jo.length; e += 1) {
                const t = Jo[e];
                si.has(t) || (si.add(t),
                t())
            }
            Jo.length = 0
        } while (Qo.length);
        for (; ei.length; )
            ei.pop()();
        ni = !1,
        si.clear(),
        qo(e)
    }
    function ci(e) {
        if (null !== e.fragment) {
            e.update(),
            Gn(e.before_update);
            const t = e.dirty;
            e.dirty = [-1],
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(ii)
        }
    }
    function di() {
        return ai || (ai = Promise.resolve(),
        ai.then((()=>{
            ai = null
        }
        ))),
        ai
    }
    function ui(e, t, n) {
        e.dispatchEvent(Ao(`${t ? "intro" : "outro"}${n}`))
    }
    const pi = new Set;
    let gi;
    function mi() {
        gi = {
            r: 0,
            c: [],
            p: gi
        }
    }
    function hi() {
        gi.r || Gn(gi.c),
        gi = gi.p
    }
    function fi(e, t) {
        e && e.i && (pi.delete(e),
        e.i(t))
    }
    function _i(e, t, n, o) {
        if (e && e.o) {
            if (pi.has(e))
                return;
            pi.add(e),
            gi.c.push((()=>{
                pi.delete(e),
                o && (n && e.d(1),
                o())
            }
            )),
            e.o(t)
        } else
            o && o()
    }
    const wi = {
        duration: 0
    };
    function vi(e, t, n) {
        const o = {
            direction: "in"
        };
        let i, s, a = t(e, n, o), r = !1, l = 0;
        function c() {
            i && Uo(e, i)
        }
        function d() {
            const {delay: t=0, duration: n=300, easing: o=qn, tick: d=Un, css: u} = a || wi;
            u && (i = Bo(e, 0, 1, n, t, o, u, l++)),
            d(0, 1);
            const p = ao() + t
              , g = p + n;
            s && s.abort(),
            r = !0,
            ii((()=>ui(e, !0, "start"))),
            s = uo((t=>{
                if (r) {
                    if (t >= g)
                        return d(1, 0),
                        ui(e, !0, "end"),
                        c(),
                        r = !1;
                    if (t >= p) {
                        const e = o((t - p) / n);
                        d(e, 1 - e)
                    }
                }
                return r
            }
            ))
        }
        let u = !1;
        return {
            start() {
                u || (u = !0,
                Uo(e),
                Vn(a) ? (a = a(o),
                di().then(d)) : d())
            },
            invalidate() {
                u = !1
            },
            end() {
                r && (c(),
                r = !1)
            }
        }
    }
    function $i(e, t, n) {
        const o = {
            direction: "out"
        };
        let i, s = t(e, n, o), a = !0;
        const r = gi;
        function l() {
            const {delay: t=0, duration: n=300, easing: o=qn, tick: l=Un, css: c} = s || wi;
            c && (i = Bo(e, 1, 0, n, t, o, c));
            const d = ao() + t
              , u = d + n;
            ii((()=>ui(e, !1, "start"))),
            uo((t=>{
                if (a) {
                    if (t >= u)
                        return l(0, 1),
                        ui(e, !1, "end"),
                        --r.r || Gn(r.c),
                        !1;
                    if (t >= d) {
                        const e = o((t - d) / n);
                        l(1 - e, e)
                    }
                }
                return a
            }
            ))
        }
        return r.r += 1,
        Vn(s) ? di().then((()=>{
            s = s(o),
            l()
        }
        )) : l(),
        {
            end(t) {
                t && s.tick && s.tick(1, 0),
                a && (i && Uo(e, i),
                a = !1)
            }
        }
    }
    function bi(e) {
        e && e.c()
    }
    function yi(e, t, n, o) {
        const {fragment: i, after_update: s} = e.$$;
        i && i.m(t, n),
        o || ii((()=>{
            const t = e.$$.on_mount.map(jn).filter(Vn);
            e.$$.on_destroy ? e.$$.on_destroy.push(...t) : Gn(t),
            e.$$.on_mount = []
        }
        )),
        s.forEach(ii)
    }
    function Ci(e, t) {
        const n = e.$$;
        null !== n.fragment && (Gn(n.on_destroy),
        n.fragment && n.fragment.d(t),
        n.on_destroy = n.fragment = null,
        n.ctx = [])
    }
    function xi(e, t, n, o, i, s, a, r=[-1]) {
        const l = Ho;
        qo(e);
        const c = e.$$ = {
            fragment: null,
            ctx: [],
            props: s,
            update: Un,
            not_equal: i,
            bound: Wn(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(t.context || (l ? l.$$.context : [])),
            callbacks: Wn(),
            dirty: r,
            skip_bound: !1,
            root: t.target || l.$$.root
        };
        a && a(c.root);
        let d = !1;
        if (c.ctx = n ? n(e, t.props || {}, ((t,n,...o)=>{
            const s = o.length ? o[0] : n;
            return c.ctx && i(c.ctx[t], c.ctx[t] = s) && (!c.skip_bound && c.bound[t] && c.bound[t](s),
            d && function(e, t) {
                -1 === e.$$.dirty[0] && (Qo.push(e),
                oi(),
                e.$$.dirty.fill(0)),
                e.$$.dirty[t / 31 | 0] |= 1 << t % 31
            }(e, t)),
            n
        }
        )) : [],
        c.update(),
        d = !0,
        Gn(c.before_update),
        c.fragment = !!o && o(c.ctx),
        t.target) {
            if (t.hydrate) {
                const e = function(e) {
                    return Array.from(e.childNodes)
                }(t.target);
                c.fragment && c.fragment.l(e),
                e.forEach(fo)
            } else
                c.fragment && c.fragment.c();
            t.intro && fi(e.$$.fragment),
            yi(e, t.target, t.anchor, t.customElement),
            li()
        }
        qo(l)
    }
    class Ti {
        $destroy() {
            Ci(this, 1),
            this.$destroy = Un
        }
        $on(e, t) {
            if (!Vn(t))
                return Un;
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t),
            ()=>{
                const e = n.indexOf(t);
                -1 !== e && n.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e,
            0 !== Object.keys(t).length) && (this.$$.skip_bound = !0,
            this.$$set(e),
            this.$$.skip_bound = !1)
        }
    }
    const Li = [];
    function Ei(e, t=Un) {
        let n;
        const o = new Set;
        function i(t) {
            if (Zn(e, t) && (e = t,
            n)) {
                const t = !Li.length;
                for (const t of o)
                    t[1](),
                    Li.push(t, e);
                if (t) {
                    for (let e = 0; e < Li.length; e += 2)
                        Li[e][0](Li[e + 1]);
                    Li.length = 0
                }
            }
        }
        return {
            set: i,
            update: function(t) {
                i(t(e))
            },
            subscribe: function(s, a=Un) {
                const r = [s, a];
                return o.add(r),
                1 === o.size && (n = t(i) || Un),
                s(e),
                ()=>{
                    o.delete(r),
                    0 === o.size && (n(),
                    n = null)
                }
            }
        }
    }
    const ki = "Chrome"
      , Si = "Edge"
      , Mi = "Brave"
      , Ii = "Firefox"
      , Di = "Opera"
      , Oi = "Safari";
    function Ni() {
        return !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    function Ai(e, t) {
        let n;
        try {
            switch (e) {
            case ki:
            case Mi:
                n = t.split("Chrome/")[1].split(" ")[0];
                break;
            case Si:
                n = t.split("Edg/")[1].split(" ")[0];
                break;
            case Ii:
                n = t.split("Firefox/")[1].split(" ")[0];
                break;
            case Di:
                n = t.split("OPR/")[1].split(" ")[0];
                break;
            case Oi:
                n = t.split("Version/")[1].split(" ")[0]
            }
        } catch (t) {
            console.error(`Could not get the browsers (${e}) version from user agent`, t)
        }
        try {
            !n && navigator?.userAgentData && function(e) {
                return e === ki || e === Si || e === Mi || e === Di
            }(e) && (n = Ri(e).version)
        } catch (t) {
            console.error(`Could not get the chromium browsers (${e}) version`, t)
        }
        return n && "string" == typeof n ? n : "unknown_browser_version"
    }
    function Ri(e) {
        if (!navigator.userAgentData || !e)
            return;
        const t = new RegExp(`${e}`,"i");
        return navigator.userAgentData.brands.filter((e=>t.test(e.brand)))[0]
    }
    const Pi = Ei(!1);
    const zi = function() {
        let e = {
            isDarkMode: Ni()
        };
        const {subscribe: t, update: n} = Ei(e);
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (()=>{
            n((e=>({
                ...e,
                isDarkMode: Ni()
            })))
        }
        )),
        {
            subscribe: t,
            update: e=>{
                if (Ot()) {
                    const t = "background-color: #403f3e;padding: 3px; font-size:12px;color:#c8e0c1; font-weight:600";
                    console.log(`%c ${(new Date).toISOString()} UPDATE WEBSITE STATE`, t, e)
                }
                n((t=>(e && e.error ? function(e) {
                    try {
                        const t = document.createElement("deepl-alert");
                        document.documentElement.appendChild(t),
                        t.createDOM(e),
                        Dn((()=>t.cleanupDOM))
                    } catch (e) {
                        Ot() && console.log(e)
                    }
                }(e.error) : Pi.set(!1),
                {
                    ...t,
                    ...e,
                    error: e.error ? e.error : void 0
                })))
            }
        }
    }();
    e.websiteData = void 0;
    const Hi = zi.subscribe((t=>{
        e.websiteData = {
            ...t
        },
        t && Object.keys(t).length > 0 && En({
            action: "newWebsiteState",
            payload: {
                ...t
            }
        })
    }
    ));
    function Fi(e, t) {
        const n = t.filter((t=>new RegExp(t).exec(e)));
        return n && n.length > 0
    }
    function Bi(e) {
        let t;
        try {
            t = new URL(e)
        } catch (e) {
            return !1
        }
        return "http:" === t.protocol || "https:" === t.protocol
    }
    function Ui(e, t) {
        if (e && t && "string" == typeof e && Array.isArray(t)) {
            if (0 === t.length)
                return e;
            for (const n of t)
                e.substr(0, n.length) === n && (e = e.substr(n.length));
            return e
        }
    }
    function qi(e) {
        try {
            return new URL(e),
            !0
        } catch (e) {
            return !1
        }
    }
    function ji() {
        const e = document.querySelector("deepl-whatsapp-messages-in-translator");
        if (e) {
            const t = document.body.querySelector("[data-testid=conversation-panel-messages]")
              , n = document.querySelector("footer").getBoundingClientRect()
              , o = t.getBoundingClientRect();
            return e.style.left = o.right - 58 + "px",
            void (e.style.top = n.top - 55 + "px")
        }
    }
    function Wi() {
        let e = new MutationObserver((()=>{
            !function() {
                const e = document.body.querySelectorAll(".message-in");
                for (let t of e)
                    if ("true" !== t.dataset.dlHasMessageTranslator && "true" !== t.dataset.dlIsTranslated) {
                        t.dataset.dlHasMessageTranslator = "true";
                        const e = t.querySelector(".selectable-text.copyable-text");
                        if (e && e.innerText && !qi(e.innerText)) {
                            const n = document.createElement("deepl-whatsapp-message-in-translator");
                            n.createDOM(e, t),
                            n.style.position = "absolute",
                            n.style.top = "0px",
                            t.appendChild(n)
                        }
                    }
            }()
        }
        ));
        e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }),
        window.addEventListener("resize", ji),
        Dn((()=>{
            window.removeEventListener("resize", ji),
            e.disconnect()
        }
        ))
    }
    function Gi() {
        console.log("customizing for twitter");
        let e = new MutationObserver((()=>{
            !function() {
                const e = document.body.querySelectorAll("[data-testid='tweetText']");
                for (let t of e)
                    if ("true" !== t.dataset.dlHasMessageTranslator && (t.dataset.dlHasMessageTranslator = "true",
                    t && t.innerText)) {
                        const e = document.createElement("deepl-twitter-tweet-link");
                        return e.createDOM(t),
                        void t.appendChild(e)
                    }
            }()
        }
        ));
        e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }),
        Dn((()=>e.disconnect()))
    }
    function Vi(e) {
        try {
            return JSON.parse(atob(e.split(".")[1]))
        } catch (e) {
            return null
        }
    }
    const Zi = "DOCS_GOOGLE_COM_FEEDBACK_FORM"
      , Ki = "DEEPL_COM_PRO"
      , Xi = "DEEPL_COM_TRANSLATOR"
      , Qi = "DEEPL_COM_HOMEPAGE"
      , Yi = "DEEPL_COM_WRITE"
      , Ji = "SHORTCUT_SETTINGS"
      , es = "CHROME_WRITE_A_REVIEW"
      , ts = "EDGE_WRITE_A_REVIEW"
      , ns = "DEEPL_SUPPORT";
    function os(e) {
        switch (e) {
        case z:
            return 1;
        case A:
            return 2;
        case P:
            return 3;
        case F:
            return 4;
        case B:
            return 5;
        case U:
            return 6;
        case q:
            return 7;
        case j:
            return 8;
        case H:
            return 9;
        case R:
            return 10;
        case W:
            return 11;
        case G:
            return 12;
        case V:
            return 13;
        case Z:
            return 14;
        case K:
            return 15;
        case X:
            return 16;
        case Q:
            return 17;
        case Y:
            return 18;
        case J:
            return 19;
        case ee:
            return 20;
        case te:
            return 21;
        case ne:
            return 22;
        case oe:
            return 25;
        case ie:
            return 26;
        default:
            return 0
        }
    }
    function is(e) {
        switch (e) {
        case $e:
            return _e;
        case be:
            return we;
        case ye:
            return ve;
        default:
            return fe
        }
    }
    function ss(e) {
        switch (e) {
        case je:
            return 1;
        case We:
            return 2;
        case Ge:
            return 3;
        default:
            return 0
        }
    }
    function as(e) {
        switch (e) {
        case it:
            return 1;
        case st:
            return 2;
        case at:
            return 3;
        default:
            return 0
        }
    }
    async function rs(e) {
        let t, n, o, i, s, a, r = !1;
        try {
            r = await ds()
        } catch (e) {
            console.error(`DAP: Failed to fetch logged in status. Error: ${e.message}`)
        }
        try {
            const e = await cs(["session", "installationId"]);
            n = e.session.id,
            t = e.installationId
        } catch (e) {
            console.error(`DAP: Failed to fetch settings. Error: ${e.message}`)
        }
        try {
            const e = await async function() {
                return await chrome.storage.local.get(["isLoggedIn", "isProUser", "sessionType", "translatorServiceType", "apiServiceType", "docTranslatorServiceType", "accountId"])
            }();
            o = ss(e.translatorServiceType),
            i = ss(e.apiServiceType),
            s = ss(e.docTranslatorServiceType)
        } catch (e) {
            console.error(`DAP: Failed to fetch user information. Error: ${e.message}`)
        }
        try {
            a = await async function() {
                return (await chrome.storage.local.get(["browserInstanceId"])).browserInstanceId
            }()
        } catch (e) {
            console.error(e)
        }
        const l = function() {
            const e = navigator?.userAgent || "unknown_user_agent"
              , t = navigator?.userAgentData?.platform || navigator?.platform || "unknown_platform";
            let n = "unknown_browser"
              , o = "unknown_browser_version";
            const i = navigator?.language || "unknown_browser_language";
            try {
                const t = e.match(/chrome|chromium|crios/i)
                  , i = e.match(/edg/i) || Ri(Si)
                  , s = e.match(/firefox|fxios/i)
                  , a = e.match(/opr\//i) || Ri(Di)
                  , r = e.match(/safari/i)
                  , l = Ri(Mi);
                t ? (n = ki,
                i && (n = Si),
                a && (n = Di),
                l && (n = Mi)) : i ? n = Si : s ? n = Ii : a ? n = Di : r && (n = Oi),
                o = Ai(n, e)
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
        }()
          , c = {
            eventId: void 0,
            extensionVersion: "1.7.0",
            sessionId: n,
            installationId: t,
            browserInstanceId: a,
            originStore: is(chrome.runtime.id),
            userInfos: {
                userType: r ? f : h,
                translatorServiceType: o,
                apiServiceType: i,
                docTranslatorServiceType: s
            },
            userAgent: l.userAgent,
            platform: l.platform,
            browser: l.browser,
            browserVersion: l.browserVersion,
            browserLang: l.browserLang
        }
          , d = e ? e(c) : c;
        return fetch("https://s.deepl.com/chrome/statistics", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(d)
        }).then((e=>{
            e.ok || console.log(`DAP ${d.eventId} request failed: ${e}`)
        }
        ))
    }
    async function ls() {
        if (!await ds())
            return;
        const e = await async function() {
            const e = await chrome.storage.local.get(["accountId", "a_t", "i_t"]);
            if (e && e.accountId)
                return e.accountId;
            if (e && e.a_t) {
                const t = Vi(e.a_t)
                  , n = Vi(e.i_t);
                return t.sub || n.sub
            }
        }();
        return rs((t=>({
            ...t,
            eventId: 60067,
            accountData: {
                accountUuid: e
            }
        })))
    }
    async function cs(e) {
        if (e.includes("session")) {
            const e = await chrome.storage.sync.get(["session"]);
            e && !e.session && await async function() {
                const e = crypto.randomUUID();
                await chrome.storage.sync.set({
                    session: {
                        id: e,
                        timestamp: Date.now()
                    }
                });
                try {
                    await ls()
                } catch (e) {
                    console.error(e)
                }
            }()
        }
        return new Promise(((t,n)=>{
            chrome.storage.sync.get(e, (o=>{
                o ? t(o) : n(`Can not get ${e}`)
            }
            ))
        }
        ))
    }
    async function ds() {
        const e = await chrome.storage.local.get(["isLoggedIn"]);
        return !(!e || !e.isLoggedIn)
    }
    const us = function() {
        const {subscribe: e, set: t, update: n} = Ei({});
        return chrome.storage.sync.get(null, (e=>{
            t(e),
            chrome.storage.local.get(["isLoggedIn", "isProUser", "translatorServiceType", "apiServiceType", "docTranslatorServiceType", "browserInstanceId"], (e=>{
                n((t=>({
                    ...t,
                    ...e
                })))
            }
            ))
        }
        )),
        chrome.storage.onChanged.addListener((e=>{
            const t = ["a_t", "r_t", "i_t", "accountId"];
            let o = {};
            for (const [n,i] of Object.entries(e))
                !1 === t.includes(n) && (o[n] = i.newValue);
            if (Ot()) {
                const e = "background-color: #324054;padding: 3px; font-size:12px;color:#e1e8c3; font-weight:600";
                console.log(`%c ${(new Date).toISOString()} UPDATE USER SETTINGS`, e, o)
            }
            n((e=>({
                ...e,
                ...o
            })))
        }
        )),
        {
            subscribe: e,
            set: e=>chrome.storage.sync.set(e)
        }
    }()
      , ps = function() {
        const {subscribe: e, update: t} = Ei({});
        return chrome.runtime.onMessage.addListener((function(e, n) {
            switch (e.action) {
            case "newWebsiteState":
                e.payload && t((t=>({
                    ...t,
                    [n.tab.id]: {
                        ...t[n.tab.id],
                        ...e.payload,
                        error: e.payload.error ? e.payload.error : void 0
                    }
                })));
                break;
            case "resetWebsiteState":
                e.payload && t((t=>({
                    ...t,
                    [n.tab.id]: {
                        ...e.payload
                    }
                })))
            }
        }
        )),
        {
            subscribe: e,
            fetchCurrentWebsiteSettings: ()=>{
                chrome.tabs && chrome.tabs.query({
                    active: !0,
                    currentWindow: !0
                }, (function(e) {
                    chrome.tabs.sendMessage(e[0].id, {
                        action: "dlGetWebsiteData"
                    }, (function(n) {
                        t((t=>({
                            ...t,
                            [e[0].id]: {
                                ...t[e[0].id],
                                ...n
                            }
                        })))
                    }
                    ))
                }
                ))
            }
        }
    }();
    !function(e, t, n) {
        const o = !Array.isArray(e)
          , i = o ? [e] : e
          , s = t.length < 2;
        return a = e=>{
            let n = !1;
            const a = [];
            let r = 0
              , l = Un;
            const c = ()=>{
                if (r)
                    return;
                l();
                const n = t(o ? a[0] : a, e);
                s ? e(n) : l = Vn(n) ? n : Un
            }
              , d = i.map(((e,t)=>Kn(e, (e=>{
                a[t] = e,
                r &= ~(1 << t),
                n && c()
            }
            ), (()=>{
                r |= 1 << t
            }
            ))));
            return n = !0,
            c(),
            function() {
                Gn(d),
                l()
            }
        }
        ,
        {
            subscribe: Ei(n, a).subscribe
        };
        var a
    }(ps, (async(e,t)=>{
        if (!chrome.tabs)
            return;
        t(e[(await chrome.tabs.query({
            active: !0,
            currentWindow: !0
        }))[0].id])
    }
    ));
    const gs = {
        TRIGGER_HEIGHT: 25,
        TRIGGER_WIDTH: 25,
        TRIGGER_EXPENDED_WIDTH: 60
    };
    const ms = "deepl-gmail-translate-email-toolbar"
      , hs = "deepl-gmail-header-toolbar"
      , fs = "deepl-gmail-controller"
      , _s = "deepl-gmail-message-write-ui"
      , ws = "deepl-gmail-character-limit-popup"
      , vs = "deepl-writing-ui-added"
      , $s = 5e3
      , bs = ()=>document.querySelector(fs)
      , ys = ()=>document.createElement(fs)
      , Cs = e=>{
        try {
            for (const t of e)
                if (t) {
                    const e = Array.from(document.getElementsByTagName(t));
                    for (const t of e)
                        t.cleanupDOM && t.cleanupDOM(),
                        t.remove()
                }
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
      , xs = ()=>document.querySelectorAll("[data-message-id]").length > 0
      , Ts = ()=>document.querySelectorAll("[data-message-id]")
      , Ls = e=>!!e && !!e.querySelector(ms)
      , Es = e=>{
        const {bottom: t, right: n} = e.getBoundingClientRect()
          , o = t - 30
          , i = n - 30;
        let s = !1;
        return document.querySelectorAll('[role="dialog"]').forEach((t=>{
            const n = (a = i,
            r = o,
            l = t.getBoundingClientRect(),
            a >= l.left && a <= l.right && r >= l.top && r <= l.bottom);
            var a, r, l;
            const c = t.contains(e);
            n && !c && (s = !0)
        }
        )),
        s
    }
      , ks = e=>{
        if (e)
            return e.querySelector("table")
    }
      , Ss = e=>[...[...kt().filter((e=>void 0 === e.regionalVariant)).map((e=>({
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
    }].map((t=>e && t.value === e.value ? {
        ...t,
        label: `${t.label} ${chrome.i18n.getMessage("gmail_language_detected")}`
    } : t))].sort(((e,t)=>e.value.localeCompare(t.value)))
      , Ms = e=>{
        const t = e.getBoundingClientRect();
        return {
            x: t.left + t.width / 2,
            y: t.top + t.height / 2
        }
    }
      , Is = (e,t)=>{
        const n = new MouseEvent("click",{
            view: window,
            bubbles: !0,
            cancelable: !0,
            clientX: e,
            clientY: t
        });
        document.elementFromPoint(e, t)?.dispatchEvent(n)
    }
      , Ds = e=>{
        const {x: t, y: n} = Ms(e);
        Is(t, n)
    }
      , Os = (e,t)=>{
        const n = document.body;
        new MutationObserver(((o,i)=>{
            for (const s of o)
                if ("childList" === s.type && n.querySelector(e)) {
                    i.disconnect(),
                    t(n.querySelector(e));
                    break
                }
        }
        )).observe(n, {
            childList: !0,
            subtree: !0
        })
    }
      , Ns = ()=>{
        const e = document.querySelectorAll("[data-message-id]");
        for (const t of e) {
            const e = t.nextElementSibling;
            if (e && "DIV" === e.tagName)
                return e
        }
        return null
    }
      , As = ()=>{
        const e = document.querySelectorAll('span[role="link"]');
        let t;
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , i = o.previousElementSibling;
            if (i && "SPAN" === i.tagName && "link" === i.getAttribute("role")) {
                const e = o.parentElement
                  , n = e.querySelectorAll('span[role="link"]')
                  , i = e.querySelectorAll("span");
                2 === n.length && 2 === i.length && (t = o)
            }
        }
        return t
    }
    ;
    let Rs, Ps, zs, Hs, Fs, Bs, Us, qs, js;
    const {deepl_inline_ui: Ws} = S;
    function Gs({websiteData: e, platformBehaviour: t=Me.default, textProcessingMode: n=Ie.translate}) {
        try {
            let o;
            switch (Vs(),
            Ps = document.createElement("deepl-inline-translate-tooltip"),
            Ps.platformBehaviour = t,
            Ps.textProcessingMode = n,
            Ps.style.zIndex = Ws.z_index,
            document.documentElement.appendChild(Ps),
            t) {
            case Me.gdocs:
                o = ut;
                break;
            case Me.default:
            default:
                o = On
            }
            Ps.createDOM(o, Vs, e),
            zi.update({
                isTranslationTooltipInjected: !0
            })
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function Vs() {
        try {
            Ps && (Ps.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-inline-translate-tooltip"), (e=>e.remove())),
            zi.update({
                isTranslationTooltipInjected: !1
            }),
            Ps = void 0)
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function Zs(e=Me.default) {
        try {
            if (zs)
                return;
            let t;
            switch (zs = document.createElement("deepl-inline-translate-settings-tooltip"),
            zs.style.zIndex = Ws.z_index,
            document.documentElement.appendChild(zs),
            e) {
            case Me.gdocs:
                t = "deepl-gdocs-icon";
                break;
            case Me.default:
            default:
                t = "deepl-inline-trigger"
            }
            const n = function(e) {
                if (!e)
                    return;
                const t = e.getBoundingClientRect()
                  , n = document.body.parentNode.getBoundingClientRect()
                  , {top: o, left: i, right: s, bottom: a, height: r, width: l} = t;
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
            zs.createDOM(n, Ks),
            zi.update({
                isInlineTranslateSettingsTooltipInjected: !0
            }),
            Dn((()=>{
                Ks()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function Ks() {
        try {
            if (!zs)
                return;
            zs.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-inline-translate-settings-tooltip"), (e=>e.remove())),
            zi.update({
                isInlineTranslateSettingsTooltipInjected: !1
            }),
            zs = void 0
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function Xs() {
        try {
            if (document.querySelector("deepl-page-load-popup"))
                return;
            Rs = document.createElement("deepl-page-load-popup"),
            document.documentElement.appendChild(Rs),
            Rs.createDOM(),
            document.addEventListener("click", Qs),
            Dn((()=>{
                Qs()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function Qs() {
        try {
            Rs && (Rs.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-page-load-popup"), (e=>e.remove())),
            Rs = void 0,
            document.removeEventListener("click", Qs))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function Ys() {
        try {
            if (document.querySelector("deepl-gdocs-icon"))
                return;
            Us = document.createElement("deepl-gdocs-icon"),
            document.documentElement.appendChild(Us),
            Us.createDOM(),
            Dn((()=>{
                Js()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function Js() {
        try {
            Us && (Us.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-gdocs-icon"), (e=>e.remove())),
            Us = void 0,
            document.removeEventListener("click", Js))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function ea() {
        try {
            if (Zt())
                return;
            qs = document.createElement("deepl-zendesk-controller"),
            document.documentElement.appendChild(qs),
            qs.createDOM(),
            Dn((()=>{
                ta()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function ta() {
        try {
            qs && (qs.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-zendesk-controller"), (e=>e.remove())),
            qs = void 0,
            document.removeEventListener("click", ta))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function na() {
        try {
            if (document.querySelector("deepl-input-controller"))
                return;
            Fs = document.createElement("deepl-input-controller"),
            document.body.appendChild(Fs),
            Fs.createDOM(),
            Dn((()=>{
                sa()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function oa() {
        try {
            if (bs())
                return;
            js = ys(),
            document.documentElement.appendChild(js),
            js.createDOM(),
            Dn((()=>{
                ia()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function ia() {
        try {
            js && (js.cleanupDOM(),
            Array.from(document.getElementsByTagName(fs), (e=>e.remove())),
            js = void 0,
            document.removeEventListener("click", ia))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function sa() {
        try {
            if (Fs) {
                Fs.cleanupDOM();
                const e = Array.from(document.querySelectorAll("deepl-input-controller"));
                for (const t of e)
                    t.remove();
                Fs = void 0,
                document.removeEventListener("click", sa)
            }
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    async function aa(e) {
        try {
            if (!Hs)
                return;
            Hs.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-inline-trigger"), (e=>e.remove())),
            Hs = void 0;
            if (!(await cs(["isInlineHighlighterShown"])).isInlineHighlighterShown && !e.target.contains(Hs)) {
                try {
                    En({
                        action: "dltrackCloseInlineHighlighter",
                        payload: {
                            trigger: Se
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                us.set({
                    isInlineHighlighterShown: !0
                })
            }
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function ra(e, t) {
        aa();
        try {
            Hs = document.createElement("deepl-inline-trigger"),
            Hs.style.zIndex = Ws.z_index,
            document.documentElement.appendChild(Hs),
            Hs.createDOM(e, t),
            Dn((()=>{
                aa()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    function la(e) {
        const t = t=>{
            requestAnimationFrame((()=>{
                const n = window.getSelection();
                if (!n.toString().trim())
                    return;
                if (2 === t?.button)
                    return;
                const o = n.getRangeAt(0)?.commonAncestorContainer;
                if ((o.contains(t.target) || t.target.contains(o)) && !n.isCollapsed && !n.anchorNode?.parentNode?.isContentEditable) {
                    let n = {
                        clientX: t.clientX || 0,
                        pageY: t.pageY || 0,
                        detail: t?.detail || 0,
                        isOutsideOfView: ua(t)
                    };
                    ra(e, n)
                }
            }
            ))
        }
        ;
        document.addEventListener("mouseup", t),
        document.addEventListener("mousedown", aa),
        Dn((()=>{
            document.removeEventListener("mouseup", t),
            document.removeEventListener("mousedown", aa)
        }
        ))
    }
    function ca(e, t) {
        try {
            Bs = document.createElement("deepl-notification"),
            Bs.style.zIndex = Ws.z_index,
            document.documentElement.appendChild(Bs),
            Bs.createDOM(e, t),
            Dn((()=>{
                Bs.cleanupDOM()
            }
            ))
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    const da = (e=Le.initial)=>{
        const t = document.createElement("deepl-ask-for-review-popup");
        document.documentElement.appendChild(t),
        t.createDOM({
            reviewStage: e
        }),
        Dn((()=>{
            t.cleanupDOM()
        }
        ))
    }
    ;
    function ua({clientX: e=0, pageY: t=0}={}) {
        const n = window.innerWidth || document.documentElement.innerWidth
          , o = window.scrollHeight || document.documentElement.scrollHeight;
        return e < 0 || e >= n || (t < 0 || t >= o)
    }
    function pa(e) {
        switch (e) {
        case "web.whatsapp.com":
            Wi();
            break;
        case "twitter.com":
        case "tweetdeck.twitter.com":
            Gi()
        }
    }
    async function ga(e) {
        const t = e.split(".");
        "deepl.com" === t.filter(((e,n)=>n === t.length - 1 || n === t.length - 2)).join(".") && (document.body.dataset.dlBrowserExtensionPresent = "true")
    }
    async function ma(e) {
        const t = await cs(["shouldDisplayFeedbackPopup"]);
        if ("https://deepl.typeform.com/to/MkMfP2Y6" === e)
            t.shouldDisplayFeedbackPopup && (us.set({
                shouldDisplayFeedbackPopup: !1
            }),
            da(Le.feedback))
    }
    function ha(e, t) {
        if ("web.whatsapp.com" === t) {
            const t = document.documentElement.querySelector("#side");
            return !t || !t.contains(e)
        }
        return !0
    }
    function fa(e, t) {
        if ("web.whatsapp.com" === t) {
            const t = document.documentElement.querySelector("#side");
            if (t && t.contains(e))
                return !1
        }
        return !0
    }
    let _a, wa, va, $a, ba, ya, Ca, xa = 0, Ta = [];
    const La = zi.subscribe((e=>{
        _a = e.translationState,
        e.translatedDOM && (Ta = e.translatedDOM.map((e=>e))),
        e.translationState !== ba && (ba = e.translationState,
        _a === r && ka())
    }
    ))
      , Ea = us.subscribe((e=>{
        if (0 !== Object.keys(e).length) {
            if (ya = e.isProUser,
            Ca = e.isLoggedIn,
            $a && $a !== e.selectedTargetLanguage) {
                const e = _a !== i;
                e && ka(),
                zi.update({
                    translatedDOM: []
                }),
                Ta = [],
                e && zi.update({
                    translationState: i
                })
            }
            $a = e.selectedTargetLanguage
        }
    }
    ));
    function ka() {
        Ta.forEach((e=>{
            Ra(e.original, e.clone),
            Na(e.original, e.clone),
            Sa(e.original, !1)
        }
        )),
        va && (va.disconnect(),
        va = void 0),
        wa && (document.removeEventListener("scroll", wa),
        wa = void 0),
        _a = i
    }
    function Sa(e, t) {
        if ("#text" != e.nodeName && "#comment" != e.nodeName && e.dataset) {
            e.dataset.dlTranslated = t;
            for (var n = 0; n < e.childNodes.length; ++n)
                Sa(e.childNodes[n], t)
        }
    }
    function Ma(e) {
        if (void 0 !== e.dataset) {
            void 0 === e.dataset.dlUid && (e.dataset.dlUid = xa++),
            void 0 === e.dataset.dlOriginal && (e.dataset.dlOriginal = !0);
            for (var t = 0; t < e.childNodes.length; ++t)
                Ma(e.childNodes[t])
        }
    }
    function Ia(e) {
        if (void 0 !== e.attributes) {
            var t = null;
            for (void 0 !== e.dataset && void 0 !== e.dataset.dlUid && (t = e.dataset.dlUid); e.attributes.length > 0; )
                e.removeAttribute(e.attributes[0].name);
            null !== t && (e.dataset.dlUid = t)
        }
        for (var n = 0; n < e.childNodes.length; ++n)
            Ia(e.childNodes[n])
    }
    function Da(e, t) {
        Ma(t);
        var n = t.cloneNode(!0);
        Ia(n),
        e.push({
            original: t,
            clone: n
        }),
        Sa(t, !0)
    }
    function Oa(e, t) {
        if (void 0 === t.dataset)
            return null;
        if (e.dataset && e.dataset.dlUid && t.dataset.dlUid && e.dataset.dlUid === t.dataset.dlUid)
            return e;
        for (var n = 0; n < e.childNodes.length; ++n) {
            var o = Oa(e.childNodes[n], t);
            if (null !== o)
                return o
        }
        return null
    }
    function Na(e, t) {
        for (var n = []; e.childNodes.length > 0; )
            n.push(e.removeChild(e.childNodes[0]));
        for (; t.childNodes.length > 0; )
            e.appendChild(t.childNodes[0]);
        for (var o = 0; o < n.length; ++o)
            t.appendChild(n[o])
    }
    function Aa(e, t) {
        if (null !== e.parentNode && null !== t.parentNode) {
            var n = document.createElement("div");
            e.parentNode.replaceChild(n, e),
            t.parentNode.replaceChild(e, t),
            n.parentNode.replaceChild(t, n),
            Na(e, t)
        }
    }
    function Ra(e, t) {
        for (var n = 0; n < t.childNodes.length; ++n) {
            var o, i = t.childNodes[n], s = Oa(e, i);
            if (s)
                Aa(o = s.dataset && "true" === s.dataset.dlOriginal ? s : s.cloneNode(!1), i),
                Ra(e, o);
            else
                Ra(e, i)
        }
    }
    function Pa(t, n=!0) {
        if ("#text" == t.nodeName || "#comment" == t.nodeName)
            return !1;
        if (!fa(t, e.websiteData.hostname))
            return !1;
        if (t.isContentEditable && n)
            return !1;
        if (function(e) {
            switch (e.tagName.toLowerCase()) {
            case "input":
                return "submit" !== e.getAttribute("type");
            case "textarea":
                return !0;
            default:
                return !1
            }
        }(t))
            return !1;
        if (Bn(t))
            return !1;
        for (var o = 0; o < t.childNodes.length; ++o) {
            if ("#text" == (i = t.childNodes[o]).nodeName && "" != i.wholeText.trim() || "font" == i.nodeName)
                return !0
        }
        for (o = 0; o < t.childNodes.length; ++o) {
            var i;
            if ("#text" != (i = t.childNodes[o]).nodeName && "#comment" != i.nodeName && (!Fn(i) || Bn(i) || "inline" != window.getComputedStyle(i).display || Rn(t)))
                return !1
        }
        return void 0 !== t.innerText && "" != t.innerText.trim()
    }
    function za(e) {
        if (void 0 !== e.dataset && (void 0 === e.dataset.dlTranslated || "false" === e.dataset.dlTranslated))
            return !1;
        for (var t = 0; t < e.childNodes.length; ++t) {
            var n = e.childNodes[t];
            if ("#text" != n.nodeName && "#comment" != n.nodeName && !za(n))
                return !1
        }
        return !0
    }
    function Ha(e, t) {
        if ("#text" != t.nodeName && "#comment" != t.nodeName && !function(e) {
            if ("no" == e.getAttribute("translate"))
                return !0;
            var t = e.className;
            return !(null == t || null == t.split || !t.split(" ").includes("notranslate"))
        }(t))
            if (Pa(t))
                (function(e, t) {
                    var n = e.getBoundingClientRect()
                      , o = window.innerWidth || document.documentElement.clientWidth
                      , i = window.innerHeight || document.documentElement.clientHeight;
                    if (n.bottom < 0 - i * t || n.right < 0 - o * t)
                        return !1;
                    if (n.top > i * (1 + t))
                        return !1;
                    if (n.left > o * (1 + t))
                        return !1;
                    var s = window.getComputedStyle(e).position;
                    return "absolute" === s || "fixed" === s || null !== e.offsetParent
                }
                )(t, .3) && !za(t) && Da(e, t);
            else
                for (var n = 0; n < t.childNodes.length; ++n)
                    Ha(e, t.childNodes[n])
    }
    async function Fa(e, t) {
        if (!ya || !Ca)
            return;
        const n = [];
        try {
            if (Ha(n, document.documentElement),
            0 === n.length)
                return;
            zi.update({
                translationState: s
            }),
            await async function(e, t, n, o, i, s) {
                if (e.length > 0)
                    return En({
                        action: "dlRequestHtmlTranslation",
                        payload: {
                            sourceLang: t,
                            trigger: o,
                            texts: e.map((e=>e.clone.innerHTML.replace(/<!--(.|\s)*?-->/g, ""))),
                            isFirstTime: i,
                            domainName: s
                        }
                    }).then((t=>{
                        for (var n = 0; n < e.length; ++n)
                            e[n].clone.innerHTML = t[n],
                            Ra(e[n].original, e[n].clone),
                            Na(e[n].original, e[n].clone),
                            Sa(e[n].original, !0)
                    }
                    ))
            }(n, e.sourceLang, e.noTranslationLanguages, e.trigger, t, window.location.hostname)
        } catch (e) {
            console.error("error", e);
            for (var o = 0; o < n.length; ++o)
                Sa(n[o].original, !1);
            return zi.update({
                translationState: i,
                error: e.name ? e.name : e
            }),
            va && va.disconnect,
            void (wa && document.removeEventListener("scroll", wa))
        }
        zi.update({
            translationState: a
        }),
        n.length > 0 && zi.update({
            translatedDOM: [...Ta, ...n]
        })
    }
    async function Ba(e) {
        va && (va.disconnect(),
        va = void 0),
        wa && (document.removeEventListener("scroll", wa),
        wa = void 0);
        let t, n, o = !1;
        Ta.length > 0 ? (zi.update({
            translationState: s
        }),
        ka(),
        Ta.forEach((e=>{
            Na(e.original, e.clone),
            Na(e.original, e.clone),
            Sa(e.original, !0)
        }
        )),
        zi.update({
            translationState: a
        })) : o = !0,
        await Fa(e, o),
        wa = async()=>{
            n = !0,
            window.clearTimeout(t),
            t = setTimeout((function() {
                _a === a && window.requestAnimationFrame((async()=>{
                    await Fa(e, !1),
                    n = !1
                }
                ))
            }
            ), 100)
        }
        ,
        document.addEventListener("scroll", wa),
        va = new MutationObserver((t=>{
            if (n)
                return;
            if (_a !== a)
                return;
            t.filter((e=>e.addedNodes && e.addedNodes.length > 0)).length > 0 && window.requestAnimationFrame((async()=>{
                await Fa(e, !1)
            }
            ))
        }
        )),
        va.observe(document.body, {
            childList: !0,
            subtree: !0
        }),
        Dn((()=>{
            La(),
            Ea(),
            va && va.disconnect(),
            wa && document.removeEventListener("scroll", wa)
        }
        ))
    }
    const Ua = t=>{
        if (t.targetLang && window.getSelection() && window.getSelection().toString()) {
            var n = window.getSelection().toString();
            document.getElementsByTagName("deepl-inline-translate-tooltip").length || Gs({
                websiteData: zi
            }),
            zi.update({
                translationState: s,
                translatedSnippet: "",
                snippetDetectedSourceLang: "",
                translatedDOMSnippet: "",
                originalSnippet: ""
            }),
            En({
                action: "dlRequestInlineTranslation",
                payload: {
                    requests: [{
                        text: n
                    }],
                    domainName: window.location.hostname,
                    trigger: p,
                    sourceLang: e.websiteData.websiteLanguage
                }
            }).then((e=>{
                zi.update({
                    translationState: i,
                    translatedSnippet: e[0].text,
                    snippetDetectedSourceLang: e[0].detected_source_language,
                    originalSnippet: n,
                    websiteLanguage: e[0].detected_source_language
                })
            }
            )).catch((e=>{
                zi.update({
                    translationState: i,
                    originalSnippet: n,
                    error: e.message ? e.message : e
                })
            }
            ))
        }
    }
      , qa = async e=>{
        const t = await En({
            action: "dlGetAppSettings"
        });
        let n = window.getSelection().anchorNode;
        "#text" === n.nodeName.toLowerCase() && (n = n.parentNode);
        const o = "textarea" === n.nodeName.toLowerCase()
          , i = n.closest('[contenteditable="true"]')
          , s = n.closest("textarea")
          , a = n.querySelector("textarea")
          , r = a && a.selectionStart !== a.selectionEnd
          , l = o && n || i || s || r && a;
        l ? ((e,t,n)=>{
            const o = document.querySelector("deepl-input-controller");
            o && (t ? o.openSettingsFromShortcut() : n ? o.triggerTranslation() : o.openSettingsFromShortcut())
        }
        )(0, e, t.targetLanguageUserInput) : Ua({
            targetLang: t.selectedTargetLanguage
        }),
        En({
            action: "dlTrackRightClick",
            payload: {
                translationType: l ? u : d,
                domainName: window.location.host
            }
        })
    }
      , ja = async(e,t)=>{
        Vs();
        const n = await En({
            action: "dlGetAppSettings"
        });
        var o;
        Ba({
            sourceLang: e,
            trigger: t,
            isFirstTime: !0,
            noTranslationLanguages: (o = n.languagesForTranslation,
            Object.keys(o).filter((e=>{
                o[e]
            }
            )))
        }).catch((e=>{
            zi.update({
                translationState: i,
                error: e.message ? e.message : e
            })
        }
        ))
    }
      , Wa = async e=>{
        if (e.length <= 5e3)
            return !1;
        const t = await Ya();
        return !t.isLoggedIn || !t.isProUser
    }
      , Ga = async t=>{
        const {event: n, targetLang: o} = t;
        if (o) {
            const {originalText: t, textLines: o, entities: a, contentReference: r, originalObject: l} = mt(n);
            if (document.getElementsByTagName("deepl-inline-translate-tooltip").length || Gs({
                websiteData: zi,
                platformBehaviour: Me.gdocs
            }),
            await Wa(t))
                return void zi.update({
                    translationState: c,
                    translatedSnippet: "",
                    originalSnippet: t
                });
            zi.update({
                translationState: s,
                translatedSnippet: "",
                snippetDetectedSourceLang: "",
                translatedDOMSnippet: "",
                originalSnippet: ""
            }),
            En({
                action: "dlRequestInlineTranslation",
                payload: {
                    requests: o.map((e=>({
                        text: e
                    }))),
                    domainName: window.location.hostname,
                    trigger: p,
                    sourceLang: e.websiteData.websiteLanguage,
                    nicheIntegration: Me.gdocs
                }
            }).then((e=>{
                try {
                    const {processedText: n, processedEntities: o} = vt({
                        textLines: e.map((e=>e.text)),
                        entities: a,
                        contentReference: r
                    })
                      , s = document.getElementsByTagName("deepl-gdocs-icon")[0];
                    s && s.setReplaceData({
                        entities: o,
                        text: n,
                        originalObject: l
                    }),
                    zi.update({
                        translationState: i,
                        translatedSnippet: n,
                        snippetDetectedSourceLang: e[0].detected_source_language,
                        originalSnippet: t,
                        websiteLanguage: e[0].detected_source_language
                    })
                } catch (e) {
                    console.error(e)
                }
            }
            )).catch((e=>{
                zi.update({
                    translationState: i,
                    originalSnippet: t,
                    error: e.message ? e.message : e
                })
            }
            ))
        }
    }
      , Va = async({event: e, lang: t})=>{
        const {originalText: n, textLines: o, entities: a, contentReference: r, originalObject: l} = mt(e);
        document.getElementsByTagName("deepl-inline-translate-tooltip").length || Gs({
            websiteData: zi,
            platformBehaviour: Me.gdocs,
            textProcessingMode: Ie.write
        });
        const d = document.getElementsByTagName("deepl-gdocs-icon")[0]
          , u = {
            lang: t,
            sourceLength: n.length,
            targetLength: 0,
            nicheIntegration: Me.gdocs,
            error: ""
        };
        if (await Wa(n))
            return zi.update({
                translationState: c,
                translatedSnippet: "",
                originalSnippet: n
            }),
            void (d && d.setDeeplWriteTrackingData(u));
        zi.update({
            translationState: s,
            translatedSnippet: "",
            snippetDetectedSourceLang: "",
            translatedDOMSnippet: "",
            originalSnippet: ""
        }),
        En({
            action: "dlRequestImproveWriting",
            payload: {
                requests: o.map((e=>({
                    text: e
                }))),
                domainName: window.location.hostname,
                websiteLanguage: t
            }
        }).then((e=>{
            try {
                const {processedText: t, processedEntities: o} = vt({
                    textLines: e[0].texts,
                    entities: a,
                    contentReference: r
                });
                u.targetLength = t.length,
                d && (d.setReplaceData({
                    entities: o,
                    text: t,
                    originalObject: l
                }),
                d.setDeeplWriteTrackingData(u)),
                zi.update({
                    translationState: i,
                    translatedSnippet: t,
                    snippetDetectedSourceLang: e[0].detected_source_language,
                    originalSnippet: n,
                    websiteLanguage: e[0].detected_source_language
                }),
                ar({
                    eventType: Ve,
                    ...u
                })
            } catch (e) {
                console.error(e)
            }
        }
        )).catch((e=>{
            const t = e.message ? e.message : e;
            zi.update({
                translationState: i,
                originalSnippet: n,
                error: t
            }),
            ar({
                eventType: Je,
                ...u,
                error: t
            })
        }
        ))
    }
      , Za = async e=>{
        const {element: t, targetLang: n} = e;
        let o, i = "";
        if (n) {
            const {domElements: s, strings: a} = An(t);
            try {
                const o = await En({
                    action: "dlRequestInputTranslation",
                    payload: {
                        requests: a.map((e=>({
                            text: e
                        }))),
                        domainName: window.location.hostname,
                        websiteLanguage: n,
                        targetLang: n,
                        platformBehavior: Me.zendesk,
                        isHtml: !0,
                        ...e.formality && {
                            formality: e.formality
                        }
                    }
                })
                  , r = o[0]?.texts;
                r && r.length > 0 && (Pn({
                    strings: r,
                    domElements: s
                }),
                i = t.innerHTML,
                t.innerHTML = "")
            } catch (e) {
                console.error(e),
                o = e.message || e.error || e.name || e
            }
        }
        return [i, o]
    }
      , Ka = async e=>{
        const {targetLang: t, sourceLang: n, text: o, trigger: i} = e;
        let s, a = "";
        if (n && t)
            try {
                const [e,r] = await En({
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
                console.error(e),
                s = e
            }
        return [a, s]
    }
      , Xa = async()=>{
        let e = document.body.innerText.substring(0, 200);
        if (!e || 1 === e.length) {
            const t = document.title;
            t.length >= e.length && (e = t)
        }
        let t = "";
        const n = await chrome.i18n.detectLanguage(e);
        n && n.languages?.length > 0 && (t = n.languages.sort(((e,t)=>t.percentage - e.percentage))[0].language.substr(0, 2).toUpperCase());
        try {
            En({
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
    }
      , Qa = async()=>{
        let t = document.documentElement.lang;
        !t && e.websiteData.websiteLanguage && (t = e.websiteData.websiteLanguage),
        Bi(window.location.href);
        {
            const t = async()=>{
                let t = document.documentElement.lang;
                if (!t && e.websiteData.websiteLanguage && (t = e.websiteData.websiteLanguage),
                t)
                    return t.substr(0, 2).toUpperCase();
                try {
                    zi.update({
                        translationState: l
                    });
                    const e = await Xa();
                    return zi.update({
                        translationState: i
                    }),
                    e
                } catch (e) {
                    zi.update({
                        translationState: i,
                        error: e.message ? e.message : chrome.i18n.getMessage(e)
                    })
                }
            }
              , n = ()=>{
                const e = document.documentElement.className;
                return /translated/g.test(e)
            }
              , o = Bi(window.location.href)
              , s = await t();
            zi.update({
                websiteLanguage: s,
                hostname: window.location.hostname,
                isSupportedLanguage: Tt(s),
                isGoogleTranslatedActive: n(),
                isValidUrlForPopup: o
            });
            const a = new MutationObserver((async()=>{
                const e = await t();
                zi.update({
                    websiteLanguage: e,
                    isSupportedLanguage: Tt(e),
                    isGoogleTranslatedActive: n(),
                    isValidUrlForPopup: o
                })
            }
            ));
            a.observe(document.documentElement, {
                attributes: !0,
                childList: !1,
                characterData: !1,
                subtree: !1,
                attributeFilter: ["class"]
            }),
            Dn((()=>{
                a.disconnect()
            }
            ))
        }
    }
      , Ya = async()=>await En({
        action: "dlGetUserState"
    })
      , Ja = async t=>{
        if (!t.isTrusted)
            return;
        const i = await En({
            action: "dlGetAppSettings"
        });
        nr(),
        await Qa();
        const s = await Ya();
        s.isLoggedIn && s.isProUser && (Tt(e.websiteData.websiteLanguage) && (xt(i.selectedTargetLanguage, e.websiteData.websiteLanguage) && !e.websiteData.isGoogleTranslatedActive || Mt(e.websiteData.websiteLanguage, i.languagesForTranslation, o) || i.blacklistDomains.includes(e.websiteData.hostname) || Fi(window.location.host, k) || (Mt(e.websiteData.websiteLanguage, i.languagesForTranslation, n) && ja(e.websiteData.websiteLanguage, g),
        i.enableFullPageTranslation && window === window.parent && Xs())))
    }
      , er = async()=>{
        await Qa(),
        document.getElementsByTagName("deepl-input-controller").length || na()
    }
      , tr = async()=>{
        await Qa(),
        la(zi)
    }
      , nr = ()=>{
        rt() && Ys(),
        Vt() && ea(),
        Mn() && oa()
    }
      , or = e=>{
        Pi.set(e)
    }
      , ir = async e=>{
        const t = ()=>{
            for (const t of Object.keys(Ce))
                if (Ce[t] && e.match(Ce[t]))
                    return t;
            if (document.querySelector("iframe#WebApplicationFrame")) {
                const e = document.querySelector("form#frameForm, form#office_form")
                  , t = e && new URL(e.getAttribute("action"))?.hostname?.toLowerCase();
                if (t)
                    for (const e of Object.keys(xe))
                        if (xe[e] && t.includes(xe[e]))
                            return e
            }
            if ("onedrive.live.com" === e)
                for (const e of Object.keys(Te))
                    if (Te[e] && document.querySelector(`#${Te[e]}`))
                        return e;
            return document.querySelector("body#jira") ? "jira" : document.querySelector("body#com-atlassian-confluence") ? "confluence" : void 0
        }
          , n = t();
        n ? En({
            action: "dlTrackLandingOnWebsite",
            payload: {
                website: n
            }
        }) : setTimeout((()=>{
            const e = t();
            e && En({
                action: "dlTrackLandingOnWebsite",
                payload: {
                    website: e
                }
            })
        }
        ), 2e3)
    }
      , sr = async({eventType: e, controller: t, sourceTextLength: n, targetTextLength: o, error: i, metaDataOverride: s={}})=>{
        const a = t?.getTicketLanguageInformation()
          , r = {
            agentLanguage: (await En({
                action: "dlGetAppSettings"
            })).selectedTargetLanguage,
            ticketLanguage: a?.language,
            isTicketLanguageAutodetected: a?.isDetected,
            isTicketLanguageSupported: a?.isSupported,
            isAutoTranslateEnabled: t.getIsAutoTranslatedEnabled(),
            sourceTextLength: n,
            targetTextLength: o,
            inputHasSelection: t.getInputHasSelection(),
            error: i,
            ...s
        };
        await En({
            action: "dlTrackZendeskCustomizationEvent",
            payload: {
                eventType: e,
                zendeskMetaData: r
            }
        })
    }
      , ar = async({eventType: e, lang: t, sourceLength: n, targetLength: o, nicheIntegration: i=Me.default, error: s, metaDataOverride: a={}})=>{
        await En({
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
    }
    ;
    function rr(e) {
        const t = e - 1;
        return t * t * t + 1
    }
    function lr(e, {delay: t=0, duration: n=400, easing: o=qn}={}) {
        const i = +getComputedStyle(e).opacity;
        return {
            delay: t,
            duration: n,
            easing: o,
            css: e=>"opacity: " + e * i
        }
    }
    function cr(e, {delay: t=0, duration: n=400, easing: o=rr, x: i=0, y: s=0, opacity: a=0}={}) {
        const r = getComputedStyle(e)
          , l = +r.opacity
          , c = "none" === r.transform ? "" : r.transform
          , d = l * (1 - a);
        return {
            delay: t,
            duration: n,
            easing: o,
            css: (e,t)=>`\n\t\t\ttransform: ${c} translate(${(1 - e) * i}px, ${(1 - e) * s}px);\n\t\t\topacity: ${l - d * t}`
        }
    }
    (function() {
        var e = window.Document.prototype.createElement
          , t = window.Document.prototype.createElementNS
          , n = window.Document.prototype.importNode
          , o = window.Document.prototype.prepend
          , i = window.Document.prototype.append
          , s = window.DocumentFragment.prototype.prepend
          , a = window.DocumentFragment.prototype.append
          , r = window.Node.prototype.cloneNode
          , l = window.Node.prototype.appendChild
          , c = window.Node.prototype.insertBefore
          , d = window.Node.prototype.removeChild
          , u = window.Node.prototype.replaceChild
          , p = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent")
          , g = window.Element.prototype.attachShadow
          , m = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML")
          , h = window.Element.prototype.getAttribute
          , f = window.Element.prototype.setAttribute
          , _ = window.Element.prototype.removeAttribute
          , w = window.Element.prototype.getAttributeNS
          , v = window.Element.prototype.setAttributeNS
          , $ = window.Element.prototype.removeAttributeNS
          , b = window.Element.prototype.insertAdjacentElement
          , y = window.Element.prototype.insertAdjacentHTML
          , C = window.Element.prototype.prepend
          , x = window.Element.prototype.append
          , T = window.Element.prototype.before
          , L = window.Element.prototype.after
          , E = window.Element.prototype.replaceWith
          , k = window.Element.prototype.remove
          , S = window.HTMLElement
          , M = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML")
          , I = window.HTMLElement.prototype.insertAdjacentElement
          , D = window.HTMLElement.prototype.insertAdjacentHTML
          , O = new Set;
        function N(e) {
            var t = O.has(e);
            return e = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(e),
            !t && e
        }
        "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach((function(e) {
            return O.add(e)
        }
        ));
        var A = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
        function R(e) {
            var t = e.isConnected;
            if (void 0 !== t)
                return t;
            if (A(e))
                return !0;
            for (; e && !(e.__CE_isImportDocument || e instanceof Document); )
                e = e.parentNode || (window.ShadowRoot && e instanceof ShadowRoot ? e.host : void 0);
            return !(!e || !(e.__CE_isImportDocument || e instanceof Document))
        }
        function P(e) {
            var t = e.children;
            if (t)
                return Array.prototype.slice.call(t);
            for (t = [],
            e = e.firstChild; e; e = e.nextSibling)
                e.nodeType === Node.ELEMENT_NODE && t.push(e);
            return t
        }
        function z(e, t) {
            for (; t && t !== e && !t.nextSibling; )
                t = t.parentNode;
            return t && t !== e ? t.nextSibling : null
        }
        function H(e, t, n) {
            for (var o = e; o; ) {
                if (o.nodeType === Node.ELEMENT_NODE) {
                    var i = o;
                    t(i);
                    var s = i.localName;
                    if ("link" === s && "import" === i.getAttribute("rel")) {
                        if (o = i.import,
                        void 0 === n && (n = new Set),
                        o instanceof Node && !n.has(o))
                            for (n.add(o),
                            o = o.firstChild; o; o = o.nextSibling)
                                H(o, t, n);
                        o = z(e, i);
                        continue
                    }
                    if ("template" === s) {
                        o = z(e, i);
                        continue
                    }
                    if (i = i.__CE_shadowRoot)
                        for (i = i.firstChild; i; i = i.nextSibling)
                            H(i, t, n)
                }
                o = o.firstChild ? o.firstChild : z(e, o)
            }
        }
        function F() {
            var e = !(null == re || !re.noDocumentConstructionObserver)
              , t = !(null == re || !re.shadyDomFastWalk);
            this.m = [],
            this.g = [],
            this.j = !1,
            this.shadyDomFastWalk = t,
            this.I = !e
        }
        function B(e, t, n, o) {
            var i = window.ShadyDOM;
            if (e.shadyDomFastWalk && i && i.inUse) {
                if (t.nodeType === Node.ELEMENT_NODE && n(t),
                t.querySelectorAll)
                    for (e = i.nativeMethods.querySelectorAll.call(t, "*"),
                    t = 0; t < e.length; t++)
                        n(e[t])
            } else
                H(t, n, o)
        }
        function U(e, t) {
            e.j && B(e, t, (function(t) {
                return q(e, t)
            }
            ))
        }
        function q(e, t) {
            if (e.j && !t.__CE_patched) {
                t.__CE_patched = !0;
                for (var n = 0; n < e.m.length; n++)
                    e.m[n](t);
                for (n = 0; n < e.g.length; n++)
                    e.g[n](t)
            }
        }
        function j(e, t) {
            var n = [];
            for (B(e, t, (function(e) {
                return n.push(e)
            }
            )),
            t = 0; t < n.length; t++) {
                var o = n[t];
                1 === o.__CE_state ? e.connectedCallback(o) : V(e, o)
            }
        }
        function W(e, t) {
            var n = [];
            for (B(e, t, (function(e) {
                return n.push(e)
            }
            )),
            t = 0; t < n.length; t++) {
                var o = n[t];
                1 === o.__CE_state && e.disconnectedCallback(o)
            }
        }
        function G(e, t, n) {
            var o = (n = void 0 === n ? {} : n).J
              , i = n.upgrade || function(t) {
                return V(e, t)
            }
              , s = [];
            for (B(e, t, (function(t) {
                if (e.j && q(e, t),
                "link" === t.localName && "import" === t.getAttribute("rel")) {
                    var n = t.import;
                    n instanceof Node && (n.__CE_isImportDocument = !0,
                    n.__CE_registry = document.__CE_registry),
                    n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : t.addEventListener("load", (function() {
                        var n = t.import;
                        if (!n.__CE_documentLoadHandled) {
                            n.__CE_documentLoadHandled = !0;
                            var s = new Set;
                            o && (o.forEach((function(e) {
                                return s.add(e)
                            }
                            )),
                            s.delete(n)),
                            G(e, n, {
                                J: s,
                                upgrade: i
                            })
                        }
                    }
                    ))
                } else
                    s.push(t)
            }
            ), o),
            t = 0; t < s.length; t++)
                i(s[t])
        }
        function V(e, t) {
            try {
                var n = t.ownerDocument
                  , o = n.__CE_registry
                  , i = o && (n.defaultView || n.__CE_isImportDocument) ? oe(o, t.localName) : void 0;
                if (i && void 0 === t.__CE_state) {
                    i.constructionStack.push(t);
                    try {
                        try {
                            if (new i.constructorFunction !== t)
                                throw Error("The custom element constructor did not produce the element being upgraded.")
                        } finally {
                            i.constructionStack.pop()
                        }
                    } catch (e) {
                        throw t.__CE_state = 2,
                        e
                    }
                    if (t.__CE_state = 1,
                    t.__CE_definition = i,
                    i.attributeChangedCallback && t.hasAttributes()) {
                        var s = i.observedAttributes;
                        for (i = 0; i < s.length; i++) {
                            var a = s[i]
                              , r = t.getAttribute(a);
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
            if (a && (null === s || "http://www.w3.org/1999/xhtml" === s) && (a = oe(a, i)))
                try {
                    var r = new a.constructorFunction;
                    if (void 0 === r.__CE_state || void 0 === r.__CE_definition)
                        throw Error("Failed to construct '" + i + "': The returned value was not constructed with the HTMLElement constructor.");
                    if ("http://www.w3.org/1999/xhtml" !== r.namespaceURI)
                        throw Error("Failed to construct '" + i + "': The constructed element's namespace must be the HTML namespace.");
                    if (r.hasAttributes())
                        throw Error("Failed to construct '" + i + "': The constructed element must not have any attributes.");
                    if (null !== r.firstChild)
                        throw Error("Failed to construct '" + i + "': The constructed element must not have any children.");
                    if (null !== r.parentNode)
                        throw Error("Failed to construct '" + i + "': The constructed element must not have a parent node.");
                    if (r.ownerDocument !== o)
                        throw Error("Failed to construct '" + i + "': The constructed element's owner document is incorrect.");
                    if (r.localName !== i)
                        throw Error("Failed to construct '" + i + "': The constructed element's local name is incorrect.");
                    return r
                } catch (a) {
                    return K(a),
                    o = null === s ? e.call(o, i) : t.call(o, s, i),
                    Object.setPrototypeOf(o, HTMLUnknownElement.prototype),
                    o.__CE_state = 2,
                    o.__CE_definition = void 0,
                    q(n, o),
                    o
                }
            return q(n, o = null === s ? e.call(o, i) : t.call(o, s, i)),
            o
        }
        function K(e) {
            var t = ""
              , n = ""
              , o = 0
              , i = 0;
            e instanceof Error ? (t = e.message,
            n = e.sourceURL || e.fileName || "",
            o = e.line || e.lineNumber || 0,
            i = e.column || e.columnNumber || 0) : t = "Uncaught " + String(e);
            var s = void 0;
            void 0 === ErrorEvent.prototype.initErrorEvent ? s = new ErrorEvent("error",{
                cancelable: !0,
                message: t,
                filename: n,
                lineno: o,
                colno: i,
                error: e
            }) : ((s = document.createEvent("ErrorEvent")).initErrorEvent("error", !1, !0, t, n, o),
            s.preventDefault = function() {
                Object.defineProperty(this, "defaultPrevented", {
                    configurable: !0,
                    get: function() {
                        return !0
                    }
                })
            }
            ),
            void 0 === s.error && Object.defineProperty(s, "error", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return e
                }
            }),
            window.dispatchEvent(s),
            s.defaultPrevented || console.error(e)
        }
        function X() {
            var e = this;
            this.g = void 0,
            this.F = new Promise((function(t) {
                e.l = t
            }
            ))
        }
        function Q(e) {
            var t = document;
            this.l = void 0,
            this.h = e,
            this.g = t,
            G(this.h, this.g),
            "loading" === this.g.readyState && (this.l = new MutationObserver(this.G.bind(this)),
            this.l.observe(this.g, {
                childList: !0,
                subtree: !0
            }))
        }
        function Y(e) {
            e.l && e.l.disconnect()
        }
        function J(e) {
            this.s = new Map,
            this.u = new Map,
            this.C = new Map,
            this.A = !1,
            this.B = new Map,
            this.o = function(e) {
                return e()
            }
            ,
            this.i = !1,
            this.v = [],
            this.h = e,
            this.D = e.I ? new Q(e) : void 0
        }
        function ee(e, t) {
            if (!N(t))
                throw new SyntaxError("The element name '" + t + "' is not valid.");
            if (oe(e, t))
                throw Error("A custom element with name '" + t + "' has already been defined.");
            if (e.A)
                throw Error("A custom element is already being defined.")
        }
        function te(e, t, n) {
            var o;
            e.A = !0;
            try {
                var i = n.prototype;
                if (!(i instanceof Object))
                    throw new TypeError("The custom element constructor's prototype is not an object.");
                var s = function(e) {
                    var t = i[e];
                    if (void 0 !== t && !(t instanceof Function))
                        throw Error("The '" + e + "' callback must be a function.");
                    return t
                }
                  , a = s("connectedCallback")
                  , r = s("disconnectedCallback")
                  , l = s("adoptedCallback")
                  , c = (o = s("attributeChangedCallback")) && n.observedAttributes || []
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
            },
            e.u.set(t, n),
            e.C.set(n.constructorFunction, n),
            n
        }
        function ne(e) {
            if (!1 !== e.i) {
                e.i = !1;
                for (var t = [], n = e.v, o = new Map, i = 0; i < n.length; i++)
                    o.set(n[i], []);
                for (G(e.h, document, {
                    upgrade: function(n) {
                        if (void 0 === n.__CE_state) {
                            var i = n.localName
                              , s = o.get(i);
                            s ? s.push(n) : e.u.has(i) && t.push(n)
                        }
                    }
                }),
                i = 0; i < t.length; i++)
                    V(e.h, t[i]);
                for (i = 0; i < n.length; i++) {
                    for (var s = n[i], a = o.get(s), r = 0; r < a.length; r++)
                        V(e.h, a[r]);
                    (s = e.B.get(s)) && s.resolve(void 0)
                }
                n.length = 0
            }
        }
        function oe(e, t) {
            var n = e.u.get(t);
            if (n)
                return n;
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
                return function(n) {
                    for (var o = [], i = 0; i < arguments.length; ++i)
                        o[i] = arguments[i];
                    i = [];
                    for (var s = [], a = 0; a < o.length; a++) {
                        var r = o[a];
                        if (r instanceof Element && R(r) && s.push(r),
                        r instanceof DocumentFragment)
                            for (r = r.firstChild; r; r = r.nextSibling)
                                i.push(r);
                        else
                            i.push(r)
                    }
                    for (t.apply(this, o),
                    o = 0; o < s.length; o++)
                        W(e, s[o]);
                    if (R(this))
                        for (o = 0; o < i.length; o++)
                            (s = i[o])instanceof Element && j(e, s)
                }
            }
            void 0 !== n.prepend && (t.prepend = o(n.prepend)),
            void 0 !== n.append && (t.append = o(n.append))
        }
        function se(e) {
            function n(t, n) {
                Object.defineProperty(t, "innerHTML", {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function(t) {
                        var o = this
                          , i = void 0;
                        if (R(this) && (i = [],
                        B(e, this, (function(e) {
                            e !== o && i.push(e)
                        }
                        ))),
                        n.set.call(this, t),
                        i)
                            for (var s = 0; s < i.length; s++) {
                                var a = i[s];
                                1 === a.__CE_state && e.disconnectedCallback(a)
                            }
                        return this.ownerDocument.__CE_registry ? G(e, this) : U(e, this),
                        t
                    }
                })
            }
            function o(t, n) {
                t.insertAdjacentElement = function(t, o) {
                    var i = R(o);
                    return t = n.call(this, t, o),
                    i && W(e, o),
                    R(t) && j(e, o),
                    t
                }
            }
            function i(t, n) {
                function o(t, n) {
                    for (var o = []; t !== n; t = t.nextSibling)
                        o.push(t);
                    for (n = 0; n < o.length; n++)
                        G(e, o[n])
                }
                t.insertAdjacentHTML = function(e, t) {
                    if ("beforebegin" === (e = e.toLowerCase())) {
                        var i = this.previousSibling;
                        n.call(this, e, t),
                        o(i || this.parentNode.firstChild, this)
                    } else if ("afterbegin" === e)
                        i = this.firstChild,
                        n.call(this, e, t),
                        o(this.firstChild, i);
                    else if ("beforeend" === e)
                        i = this.lastChild,
                        n.call(this, e, t),
                        o(i || this.firstChild, null);
                    else {
                        if ("afterend" !== e)
                            throw new SyntaxError("The value provided (" + String(e) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                        i = this.nextSibling,
                        n.call(this, e, t),
                        o(this.nextSibling, i)
                    }
                }
            }
            g && (Element.prototype.attachShadow = function(t) {
                if (t = g.call(this, t),
                e.j && !t.__CE_patched) {
                    t.__CE_patched = !0;
                    for (var n = 0; n < e.m.length; n++)
                        e.m[n](t)
                }
                return this.__CE_shadowRoot = t
            }
            ),
            m && m.get ? n(Element.prototype, m) : M && M.get ? n(HTMLElement.prototype, M) : function(e, t) {
                e.j = !0,
                e.g.push(t)
            }(e, (function(e) {
                n(e, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        return r.call(this, !0).innerHTML
                    },
                    set: function(e) {
                        var n = "template" === this.localName
                          , o = n ? this.content : this
                          , i = t.call(document, this.namespaceURI, this.localName);
                        for (i.innerHTML = e; 0 < o.childNodes.length; )
                            d.call(o, o.childNodes[0]);
                        for (e = n ? i.content : i; 0 < e.childNodes.length; )
                            l.call(o, e.childNodes[0])
                    }
                })
            }
            )),
            Element.prototype.setAttribute = function(t, n) {
                if (1 !== this.__CE_state)
                    return f.call(this, t, n);
                var o = h.call(this, t);
                f.call(this, t, n),
                n = h.call(this, t),
                e.attributeChangedCallback(this, t, o, n, null)
            }
            ,
            Element.prototype.setAttributeNS = function(t, n, o) {
                if (1 !== this.__CE_state)
                    return v.call(this, t, n, o);
                var i = w.call(this, t, n);
                v.call(this, t, n, o),
                o = w.call(this, t, n),
                e.attributeChangedCallback(this, n, i, o, t)
            }
            ,
            Element.prototype.removeAttribute = function(t) {
                if (1 !== this.__CE_state)
                    return _.call(this, t);
                var n = h.call(this, t);
                _.call(this, t),
                null !== n && e.attributeChangedCallback(this, t, n, null, null)
            }
            ,
            Element.prototype.removeAttributeNS = function(t, n) {
                if (1 !== this.__CE_state)
                    return $.call(this, t, n);
                var o = w.call(this, t, n);
                $.call(this, t, n);
                var i = w.call(this, t, n);
                o !== i && e.attributeChangedCallback(this, n, o, i, t)
            }
            ,
            I ? o(HTMLElement.prototype, I) : b && o(Element.prototype, b),
            D ? i(HTMLElement.prototype, D) : y && i(Element.prototype, y),
            ie(e, Element.prototype, {
                prepend: C,
                append: x
            }),
            function(e) {
                function t(t) {
                    return function(n) {
                        for (var o = [], i = 0; i < arguments.length; ++i)
                            o[i] = arguments[i];
                        i = [];
                        for (var s = [], a = 0; a < o.length; a++) {
                            var r = o[a];
                            if (r instanceof Element && R(r) && s.push(r),
                            r instanceof DocumentFragment)
                                for (r = r.firstChild; r; r = r.nextSibling)
                                    i.push(r);
                            else
                                i.push(r)
                        }
                        for (t.apply(this, o),
                        o = 0; o < s.length; o++)
                            W(e, s[o]);
                        if (R(this))
                            for (o = 0; o < i.length; o++)
                                (s = i[o])instanceof Element && j(e, s)
                    }
                }
                var n = Element.prototype;
                void 0 !== T && (n.before = t(T)),
                void 0 !== L && (n.after = t(L)),
                void 0 !== E && (n.replaceWith = function(t) {
                    for (var n = [], o = 0; o < arguments.length; ++o)
                        n[o] = arguments[o];
                    o = [];
                    for (var i = [], s = 0; s < n.length; s++) {
                        var a = n[s];
                        if (a instanceof Element && R(a) && i.push(a),
                        a instanceof DocumentFragment)
                            for (a = a.firstChild; a; a = a.nextSibling)
                                o.push(a);
                        else
                            o.push(a)
                    }
                    for (s = R(this),
                    E.apply(this, n),
                    n = 0; n < i.length; n++)
                        W(e, i[n]);
                    if (s)
                        for (W(e, this),
                        n = 0; n < o.length; n++)
                            (i = o[n])instanceof Element && j(e, i)
                }
                ),
                void 0 !== k && (n.remove = function() {
                    var t = R(this);
                    k.call(this),
                    t && W(e, this)
                }
                )
            }(e)
        }
        F.prototype.connectedCallback = function(e) {
            var t = e.__CE_definition;
            if (t.connectedCallback)
                try {
                    t.connectedCallback.call(e)
                } catch (e) {
                    K(e)
                }
        }
        ,
        F.prototype.disconnectedCallback = function(e) {
            var t = e.__CE_definition;
            if (t.disconnectedCallback)
                try {
                    t.disconnectedCallback.call(e)
                } catch (e) {
                    K(e)
                }
        }
        ,
        F.prototype.attributeChangedCallback = function(e, t, n, o, i) {
            var s = e.__CE_definition;
            if (s.attributeChangedCallback && -1 < s.observedAttributes.indexOf(t))
                try {
                    s.attributeChangedCallback.call(e, t, n, o, i)
                } catch (e) {
                    K(e)
                }
        }
        ,
        X.prototype.resolve = function(e) {
            if (this.g)
                throw Error("Already resolved.");
            this.g = e,
            this.l(e)
        }
        ,
        Q.prototype.G = function(e) {
            var t = this.g.readyState;
            for ("interactive" !== t && "complete" !== t || Y(this),
            t = 0; t < e.length; t++)
                for (var n = e[t].addedNodes, o = 0; o < n.length; o++)
                    G(this.h, n[o])
        }
        ,
        J.prototype.H = function(e, t) {
            var n = this;
            if (!(t instanceof Function))
                throw new TypeError("Custom element constructor getters must be functions.");
            ee(this, e),
            this.s.set(e, t),
            this.v.push(e),
            this.i || (this.i = !0,
            this.o((function() {
                return ne(n)
            }
            )))
        }
        ,
        J.prototype.define = function(e, t) {
            var n = this;
            if (!(t instanceof Function))
                throw new TypeError("Custom element constructors must be functions.");
            ee(this, e),
            te(this, e, t),
            this.v.push(e),
            this.i || (this.i = !0,
            this.o((function() {
                return ne(n)
            }
            )))
        }
        ,
        J.prototype.upgrade = function(e) {
            G(this.h, e)
        }
        ,
        J.prototype.get = function(e) {
            if (e = oe(this, e))
                return e.constructorFunction
        }
        ,
        J.prototype.whenDefined = function(e) {
            if (!N(e))
                return Promise.reject(new SyntaxError("'" + e + "' is not a valid custom element name."));
            var t = this.B.get(e);
            if (t)
                return t.F;
            t = new X,
            this.B.set(e, t);
            var n = this.u.has(e) || this.s.has(e);
            return e = -1 === this.v.indexOf(e),
            n && e && t.resolve(void 0),
            t.F
        }
        ,
        J.prototype.polyfillWrapFlushCallback = function(e) {
            this.D && Y(this.D);
            var t = this.o;
            this.o = function(n) {
                return e((function() {
                    return t(n)
                }
                ))
            }
        }
        ,
        J.prototype.define = J.prototype.define,
        J.prototype.upgrade = J.prototype.upgrade,
        J.prototype.get = J.prototype.get,
        J.prototype.whenDefined = J.prototype.whenDefined,
        J.prototype.polyfillDefineLazy = J.prototype.H,
        J.prototype.polyfillWrapFlushCallback = J.prototype.polyfillWrapFlushCallback;
        var ae = {};
        var re = window.customElements;
        function le() {
            var t = new F;
            !function(t) {
                function n() {
                    var n = this.constructor
                      , o = document.__CE_registry.C.get(n);
                    if (!o)
                        throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                    var i = o.constructionStack;
                    if (0 === i.length)
                        return i = e.call(document, o.localName),
                        Object.setPrototypeOf(i, n.prototype),
                        i.__CE_state = 1,
                        i.__CE_definition = o,
                        q(t, i),
                        i;
                    var s = i.length - 1
                      , a = i[s];
                    if (a === ae)
                        throw Error("Failed to construct '" + o.localName + "': This element was already constructed.");
                    return i[s] = ae,
                    Object.setPrototypeOf(a, n.prototype),
                    q(t, a),
                    a
                }
                n.prototype = S.prototype,
                Object.defineProperty(HTMLElement.prototype, "constructor", {
                    writable: !0,
                    configurable: !0,
                    enumerable: !1,
                    value: n
                }),
                window.HTMLElement = n
            }(t),
            function(e) {
                Document.prototype.createElement = function(t) {
                    return Z(e, this, t, null)
                }
                ,
                Document.prototype.importNode = function(t, o) {
                    return t = n.call(this, t, !!o),
                    this.__CE_registry ? G(e, t) : U(e, t),
                    t
                }
                ,
                Document.prototype.createElementNS = function(t, n) {
                    return Z(e, this, n, t)
                }
                ,
                ie(e, Document.prototype, {
                    prepend: o,
                    append: i
                })
            }(t),
            ie(t, DocumentFragment.prototype, {
                prepend: s,
                append: a
            }),
            function(e) {
                function t(t, n) {
                    Object.defineProperty(t, "textContent", {
                        enumerable: n.enumerable,
                        configurable: !0,
                        get: n.get,
                        set: function(t) {
                            if (this.nodeType === Node.TEXT_NODE)
                                n.set.call(this, t);
                            else {
                                var o = void 0;
                                if (this.firstChild) {
                                    var i = this.childNodes
                                      , s = i.length;
                                    if (0 < s && R(this)) {
                                        o = Array(s);
                                        for (var a = 0; a < s; a++)
                                            o[a] = i[a]
                                    }
                                }
                                if (n.set.call(this, t),
                                o)
                                    for (t = 0; t < o.length; t++)
                                        W(e, o[t])
                            }
                        }
                    })
                }
                Node.prototype.insertBefore = function(t, n) {
                    if (t instanceof DocumentFragment) {
                        var o = P(t);
                        if (t = c.call(this, t, n),
                        R(this))
                            for (n = 0; n < o.length; n++)
                                j(e, o[n]);
                        return t
                    }
                    return o = t instanceof Element && R(t),
                    n = c.call(this, t, n),
                    o && W(e, t),
                    R(this) && j(e, t),
                    n
                }
                ,
                Node.prototype.appendChild = function(t) {
                    if (t instanceof DocumentFragment) {
                        var n = P(t);
                        if (t = l.call(this, t),
                        R(this))
                            for (var o = 0; o < n.length; o++)
                                j(e, n[o]);
                        return t
                    }
                    return n = t instanceof Element && R(t),
                    o = l.call(this, t),
                    n && W(e, t),
                    R(this) && j(e, t),
                    o
                }
                ,
                Node.prototype.cloneNode = function(t) {
                    return t = r.call(this, !!t),
                    this.ownerDocument.__CE_registry ? G(e, t) : U(e, t),
                    t
                }
                ,
                Node.prototype.removeChild = function(t) {
                    var n = t instanceof Element && R(t)
                      , o = d.call(this, t);
                    return n && W(e, t),
                    o
                }
                ,
                Node.prototype.replaceChild = function(t, n) {
                    if (t instanceof DocumentFragment) {
                        var o = P(t);
                        if (t = u.call(this, t, n),
                        R(this))
                            for (W(e, n),
                            n = 0; n < o.length; n++)
                                j(e, o[n]);
                        return t
                    }
                    o = t instanceof Element && R(t);
                    var i = u.call(this, t, n)
                      , s = R(this);
                    return s && W(e, n),
                    o && W(e, t),
                    s && j(e, t),
                    i
                }
                ,
                p && p.get ? t(Node.prototype, p) : function(e, t) {
                    e.j = !0,
                    e.m.push(t)
                }(e, (function(e) {
                    t(e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            for (var e = [], t = this.firstChild; t; t = t.nextSibling)
                                t.nodeType !== Node.COMMENT_NODE && e.push(t.textContent);
                            return e.join("")
                        },
                        set: function(e) {
                            for (; this.firstChild; )
                                d.call(this, this.firstChild);
                            null != e && "" !== e && l.call(this, document.createTextNode(e))
                        }
                    })
                }
                ))
            }(t),
            se(t),
            window.CustomElementRegistry = J,
            t = new J(t),
            document.__CE_registry = t,
            Object.defineProperty(window, "customElements", {
                configurable: !0,
                enumerable: !0,
                value: t
            })
        }
        re && !re.forcePolyfill && "function" == typeof re.define && "function" == typeof re.get || le(),
        window.__CE_installPolyfill = le
    }
    ).call(self);
    const dr = "ACCESS_DENIED"
      , ur = "INVALID_REQUEST"
      , pr = "INVALID_GRANT"
      , gr = "INVALID_NONCE";
    function mr() {
        return !!chrome && !!chrome.tabs
    }
    function hr(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                Lo(t, "class", "dl-close-icon svelte-qdqw71")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", (function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )),
                n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function fr(e) {
        let t, n, o, i, s, a;
        const r = e[2].default
          , l = Qn(r, e, e[1], null);
        let c = e[0] && hr(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                n.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L10 10M10 10L12 8M10 10L8 8M10 10L12 12M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                o = bo(),
                i = wo("div"),
                l && l.c(),
                s = bo(),
                c && c.c(),
                Lo(n, "class", "icon-container svelte-qdqw71"),
                Lo(i, "class", "message svelte-qdqw71"),
                Lo(t, "class", "error-msg svelte-qdqw71")
            },
            m(e, r) {
                ho(e, t, r),
                po(t, n),
                po(t, o),
                po(t, i),
                l && l.m(i, null),
                po(t, s),
                c && c.m(t, null),
                a = !0
            },
            p(e, [n]) {
                l && l.p && (!a || 2 & n) && eo(l, r, e, e[1], a ? Jn(r, e[1], n, null) : to(e[1]), null),
                e[0] ? c ? c.p(e, n) : (c = hr(e),
                c.c(),
                c.m(t, null)) : c && (c.d(1),
                c = null)
            },
            i(e) {
                a || (fi(l, e),
                a = !0)
            },
            o(e) {
                _i(l, e),
                a = !1
            },
            d(e) {
                e && fo(t),
                l && l.d(e),
                c && c.d()
            }
        }
    }
    function _r(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {close: s} = t;
        return e.$$set = e=>{
            "close"in e && n(0, s = e.close),
            "$$scope"in e && n(1, i = e.$$scope)
        }
        ,
        [s, i, o]
    }
    class wr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, _r, fr, Zn, {
                close: 0
            })
        }
    }
    function vr(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                Lo(t, "class", "dl-close-icon svelte-1jf0jj0")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", (function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )),
                n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function $r(e) {
        let t, n, o, i, s, a;
        const r = e[2].default
          , l = Qn(r, e, e[1], null);
        let c = e[0] && vr(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                n.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                o = bo(),
                i = wo("div"),
                l && l.c(),
                s = bo(),
                c && c.c(),
                Lo(n, "class", "icon-container svelte-1jf0jj0"),
                Lo(i, "class", "message svelte-1jf0jj0"),
                Lo(t, "class", "warn-msg svelte-1jf0jj0")
            },
            m(e, r) {
                ho(e, t, r),
                po(t, n),
                po(t, o),
                po(t, i),
                l && l.m(i, null),
                po(t, s),
                c && c.m(t, null),
                a = !0
            },
            p(e, [n]) {
                l && l.p && (!a || 2 & n) && eo(l, r, e, e[1], a ? Jn(r, e[1], n, null) : to(e[1]), null),
                e[0] ? c ? c.p(e, n) : (c = vr(e),
                c.c(),
                c.m(t, null)) : c && (c.d(1),
                c = null)
            },
            i(e) {
                a || (fi(l, e),
                a = !0)
            },
            o(e) {
                _i(l, e),
                a = !1
            },
            d(e) {
                e && fo(t),
                l && l.d(e),
                c && c.d()
            }
        }
    }
    function br(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {close: s} = t;
        return e.$$set = e=>{
            "close"in e && n(0, s = e.close),
            "$$scope"in e && n(1, i = e.$$scope)
        }
        ,
        [s, i, o]
    }
    class yr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, br, $r, Zn, {
                close: 0
            })
        }
    }
    function Cr(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_generic_error")}`,
                Lo(t, "data-qa", "error-message-generic")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    class xr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, null, Cr, Zn, {})
        }
    }
    function Tr(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_internet_connection")}`
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    class Lr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, null, Tr, Zn, {})
        }
    }
    function Er(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_error_service_not_available")}`
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    class kr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, null, Er, Zn, {})
        }
    }
    function Sr(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                n.textContent = `${chrome.i18n.getMessage("warning_message_different_subscription_needed")}`,
                o = bo(),
                i = wo("div"),
                i.textContent = `${chrome.i18n.getMessage("link_get_pro_license")}`,
                Lo(i, "class", "link svelte-1mpkjv7"),
                Lo(t, "class", "container svelte-1mpkjv7")
            },
            m(r, l) {
                ho(r, t, l),
                po(t, n),
                po(t, o),
                po(t, i),
                s || (a = Co(i, "click", e[0]),
                s = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                s = !1,
                a()
            }
        }
    }
    function Mr(e) {
        return [function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ki,
                    utmContent: "warning_user_unauthorised"
                }
            })
        }
        ]
    }
    class Ir extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Mr, Sr, Zn, {})
        }
    }
    function Dr(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                n.textContent = `${chrome.i18n.getMessage("warning_message_free_usage_limit_reached")}`,
                o = bo(),
                i = wo("div"),
                i.textContent = `${chrome.i18n.getMessage("link_try_deepl")}`,
                Lo(i, "class", "link svelte-1mpkjv7"),
                Lo(t, "class", "container svelte-1mpkjv7")
            },
            m(r, l) {
                ho(r, t, l),
                po(t, n),
                po(t, o),
                po(t, i),
                s || (a = Co(i, "click", e[0]),
                s = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                s = !1,
                a()
            }
        }
    }
    function Or(e) {
        return [function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ki,
                    utmContent: "warning_user_blocked"
                }
            })
        }
        ]
    }
    class Nr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Or, Dr, Zn, {})
        }
    }
    function Ar(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_please_login")}`
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    class Rr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, null, Ar, Zn, {})
        }
    }
    function Pr(e, t) {
        if (!e || !t)
            return !1;
        const n = /[\n\r\s]+/gm
          , o = e.replace(n, "")
          , i = t.replace(n, "");
        return o.includes(i)
    }
    function zr(e, t, n) {
        let o = {
            block: "end",
            position: e.length
        };
        return t.forEach((t=>{
            const i = e.indexOf(`<${t}>`, n);
            i > -1 && i < o.position && (o = {
                block: t,
                position: i
            })
        }
        )),
        [o.block, o.position]
    }
    function Hr(e, t=[]) {
        const n = [];
        let o = 0
          , i = !1;
        for (; !i; ) {
            const [s,a] = zr(e, t, o);
            if ("end" === s && (i = !0),
            o < a && n.push({
                block: "main",
                text: e.substring(o, a)
            }),
            i)
                break;
            const r = e.indexOf(`</${s}>`, a);
            -1 === r ? (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length)
            }),
            i = !0) : (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length, r)
            }),
            o = r + `</${s}>`.length)
        }
        return n
    }
    function Fr(e, t, n) {
        const o = e.slice();
        return o[1] = t[n],
        o
    }
    function Br(e) {
        let t, n = e[1].text + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Ur(e) {
        let t, n, o, i, s, a = e[1].text + "";
        return {
            c() {
                t = wo("span"),
                n = $o(a),
                o = bo(),
                Lo(t, "class", "link svelte-1mpkjv7")
            },
            m(a, r) {
                ho(a, t, r),
                po(t, n),
                po(t, o),
                i || (s = Co(t, "click", e[0]),
                i = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                i = !1,
                s()
            }
        }
    }
    function qr(e) {
        let t;
        let n = function(e, t) {
            return "deeplSupportLink" === e[1].block ? Ur : Br
        }(e)
          , o = n(e);
        return {
            c() {
                o.c(),
                t = yo()
            },
            m(e, n) {
                o.m(e, n),
                ho(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e),
                e && fo(t)
            }
        }
    }
    function jr(e) {
        let t, n = Hr(chrome.i18n.getMessage("warning_message_account_limit_reached"), ["deeplSupportLink"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = qr(Fr(e, n, t));
        return {
            c() {
                t = wo("div");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                Lo(t, "class", "container svelte-1mpkjv7")
            },
            m(e, n) {
                ho(e, t, n);
                for (let e = 0; e < o.length; e += 1)
                    o[e].m(t, null)
            },
            p(e, [i]) {
                if (1 & i) {
                    let s;
                    for (n = Hr(chrome.i18n.getMessage("warning_message_account_limit_reached"), ["deeplSupportLink"]),
                    s = 0; s < n.length; s += 1) {
                        const a = Fr(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = qr(a),
                        o[s].c(),
                        o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                _o(o, e)
            }
        }
    }
    function Wr(e) {
        return [function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: ns
                }
            })
        }
        ]
    }
    class Gr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Wr, jr, Zn, {})
        }
    }
    function Vr(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_technical_issue")}`
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    class Zr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, null, Vr, Zn, {})
        }
    }
    function Kr(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_session_expired")}`
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    class Xr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, null, Kr, Zn, {})
        }
    }
    function Qr(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_error_exceeds_char_limit")}`
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    class Yr extends Ti {
        constructor(e) {
            super(),
            xi(this, e, null, Qr, Zn, {})
        }
    }
    function Jr(e) {
        let t, n, o;
        var i = e[1];
        return i && (t = Po(i, {})),
        {
            c() {
                t && bi(t.$$.fragment),
                n = yo()
            },
            m(e, i) {
                t && yi(t, e, i),
                ho(e, n, i),
                o = !0
            },
            p(e, o) {
                if (i !== (i = e[1])) {
                    if (t) {
                        mi();
                        const e = t;
                        _i(e.$$.fragment, 1, 0, (()=>{
                            Ci(e, 1)
                        }
                        )),
                        hi()
                    }
                    i ? (t = Po(i, {}),
                    bi(t.$$.fragment),
                    fi(t.$$.fragment, 1),
                    yi(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && fi(t.$$.fragment, e),
                o = !0)
            },
            o(e) {
                t && _i(t.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(n),
                t && Ci(t, e)
            }
        }
    }
    function el(e) {
        let t, n;
        return t = new yr({
            props: {
                close: e[0],
                $$slots: {
                    default: [nl]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.close = e[0]),
                130 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function tl(e) {
        let t, n;
        return t = new wr({
            props: {
                close: e[0],
                $$slots: {
                    default: [ol]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.close = e[0]),
                130 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function nl(e) {
        let t, n, o;
        var i = e[1];
        return i && (t = Po(i, {})),
        {
            c() {
                t && bi(t.$$.fragment),
                n = yo()
            },
            m(e, i) {
                t && yi(t, e, i),
                ho(e, n, i),
                o = !0
            },
            p(e, o) {
                if (i !== (i = e[1])) {
                    if (t) {
                        mi();
                        const e = t;
                        _i(e.$$.fragment, 1, 0, (()=>{
                            Ci(e, 1)
                        }
                        )),
                        hi()
                    }
                    i ? (t = Po(i, {}),
                    bi(t.$$.fragment),
                    fi(t.$$.fragment, 1),
                    yi(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && fi(t.$$.fragment, e),
                o = !0)
            },
            o(e) {
                t && _i(t.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(n),
                t && Ci(t, e)
            }
        }
    }
    function ol(e) {
        let t, n, o;
        var i = e[1];
        return i && (t = Po(i, {})),
        {
            c() {
                t && bi(t.$$.fragment),
                n = yo()
            },
            m(e, i) {
                t && yi(t, e, i),
                ho(e, n, i),
                o = !0
            },
            p(e, o) {
                if (i !== (i = e[1])) {
                    if (t) {
                        mi();
                        const e = t;
                        _i(e.$$.fragment, 1, 0, (()=>{
                            Ci(e, 1)
                        }
                        )),
                        hi()
                    }
                    i ? (t = Po(i, {}),
                    bi(t.$$.fragment),
                    fi(t.$$.fragment, 1),
                    yi(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && fi(t.$$.fragment, e),
                o = !0)
            },
            o(e) {
                t && _i(t.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(n),
                t && Ci(t, e)
            }
        }
    }
    function il(e) {
        let t, n, o, i;
        const s = [tl, el, Jr]
          , a = [];
        function r(e, t) {
            return e[2] === e[3].SERIOUS || e[2] === e[3].UNKNOWN ? 0 : e[2] === e[3].WARNING ? 1 : e[2] === e[3].CUSTOM ? 2 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)),
        {
            c() {
                n && n.c(),
                o = yo()
            },
            m(e, n) {
                ~t && a[t].m(e, n),
                ho(e, o, n),
                i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e),
                t === l ? ~t && a[t].p(e, i) : (n && (mi(),
                _i(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                hi()),
                ~t ? (n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                fi(n, 1),
                n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || (fi(n),
                i = !0)
            },
            o(e) {
                _i(n),
                i = !1
            },
            d(e) {
                ~t && a[t].d(e),
                e && fo(o)
            }
        }
    }
    function sl(e, t, n) {
        let o, i, {error: s} = t, {close: a} = t;
        const r = {
            UNKNOWN: 1,
            WARNING: 2,
            SERIOUS: 3,
            CUSTOM: 4
        }
          , l = {
            [At]: xr,
            [Rt]: Lr,
            [Pt]: kr,
            [Ft]: Rr,
            [dr]: Xr,
            [pr]: Xr,
            [ur]: Xr,
            [gr]: Xr,
            [Ht]: Nr,
            [Ut]: Nr,
            [Gt]: Yr,
            [zt]: Ir,
            [Bt]: Gr,
            [Wt]: Zr
        };
        return Wo((()=>{
            mr() ? Sn({
                action: "dlErrorVisibility",
                payload: {
                    state: !0
                }
            }) : Pi.set(!0)
        }
        )),
        Go((()=>{
            mr() ? Sn({
                action: "dlErrorVisibility",
                payload: {
                    state: !1
                }
            }) : Pi.set(!1)
        }
        )),
        e.$$set = e=>{
            "error"in e && n(4, s = e.error),
            "close"in e && n(0, a = e.close)
        }
        ,
        e.$$.update = ()=>{
            16 & e.$$.dirty && n(2, o = function(e) {
                switch (e) {
                case At:
                case Rt:
                case Pt:
                case Ft:
                case dr:
                case pr:
                case ur:
                case gr:
                case Wt:
                    return r.SERIOUS;
                case Ht:
                case Ut:
                case Gt:
                case zt:
                case Bt:
                    return r.WARNING;
                default:
                    return r.UNKNOWN
                }
            }(s ? s.error : "")),
            16 & e.$$.dirty && n(1, i = s && l[s.error] || xr)
        }
        ,
        [a, i, o, r, s]
    }
    class al extends Ti {
        constructor(e) {
            super(),
            xi(this, e, sl, il, Zn, {
                error: 4,
                close: 0
            })
        }
    }
    function rl(e) {
        let t, n, o, i, s;
        return n = new al({
            props: {
                error: e[1],
                close: e[2]
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "container svelte-1wstx56")
            },
            m(e, o) {
                ho(e, t, o),
                yi(n, t, null),
                s = !0
            },
            p(e, t) {
                const o = {};
                2 & t && (o.error = e[1]),
                4 & t && (o.close = e[2]),
                n.$set(o)
            },
            i(e) {
                s || (fi(n.$$.fragment, e),
                ii((()=>{
                    i && i.end(1),
                    o = vi(t, cr, {
                        x: 100,
                        duration: 1e3
                    }),
                    o.start()
                }
                )),
                s = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o && o.invalidate(),
                i = $i(t, cr, {
                    x: 100,
                    duration: 1e3
                }),
                s = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                e && i && i.end()
            }
        }
    }
    function ll(e) {
        let t, n, o = e[3] && !1 === e[0] && rl(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[3] && !1 === e[0] ? o ? (o.p(e, n),
                9 & n && fi(o, 1)) : (o = rl(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function cl(e, t, n) {
        let o;
        Xn(e, Pi, (e=>n(4, o = e)));
        let {error: i} = t
          , {close: s} = t
          , {errorAlreadyShown: a} = t
          , r = !1;
        return Wo((()=>{
            setTimeout((()=>{
                n(3, r = !0),
                n(0, a = o)
            }
            ), 100)
        }
        )),
        e.$$set = e=>{
            "error"in e && n(1, i = e.error),
            "close"in e && n(2, s = e.close),
            "errorAlreadyShown"in e && n(0, a = e.errorAlreadyShown)
        }
        ,
        [a, i, s, r]
    }
    class dl extends Ti {
        constructor(e) {
            super(),
            xi(this, e, cl, ll, Zn, {
                error: 1,
                close: 2,
                errorAlreadyShown: 0
            })
        }
    }
    class ul extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent = void 0;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM(e) {
            this.shadowContainer.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: ${S.deepl_inline_ui.z_index}`,
            this.mainComponent = new dl({
                target: this.shadowContainer,
                props: {
                    error: e,
                    close: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy(),
            this.remove()
        }
    }
    function pl(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "container svelte-1dicgbw")
            },
            m(i, s) {
                ho(i, t, s),
                t.innerHTML = e[1],
                n || (o = Co(t, "click", e[0]),
                n = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function gl(e) {
        return [function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ji
                }
            }),
            En({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: ae
                }
            })
        }
        , chrome.i18n.getMessage("notification_keyboard_shortcut_hint", `<span style="color: #006494; text-decoration: underline;">${chrome.i18n.getMessage("notification_keyboard_shortcut_hint_placeholder")}</span>`)]
    }
    window.customElements.define("deepl-alert", ul);
    class ml extends Ti {
        constructor(e) {
            super(),
            xi(this, e, gl, pl, Zn, {})
        }
    }
    const hl = {
        developer_tools: "DEVELOPER_TOOLS",
        settings_page: "SETTINGS_PAGE",
        settings_writing: "SETTINGS_WRITING",
        settings_reading: "SETTINGS_READING",
        onboarding: "ONBOARDING"
    };
    function fl(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "container svelte-1dicgbw"),
                Lo(t, "data-qa", "deepl-notification-open-settings-page-writing-link")
            },
            m(i, s) {
                ho(i, t, s),
                t.innerHTML = e[0],
                n || (o = Co(t, "click", e[1]),
                n = !0)
            },
            p(e, [n]) {
                1 & n && (t.innerHTML = e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function _l(e, t, n) {
        let {options: o} = t
          , i = o?.settingsPageURL ? o?.settingsPageURL : hl.settings_page;
        let s = ""
          , a = o?.currentDomain ? o.currentDomain : "";
        switch (o.saveAction) {
        case ue:
            s = chrome.i18n.getMessage("notification_input_translation_disabled_everywhere", `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_input_translation_link_to_settings_placeholder")}</span>`);
            break;
        case de:
            s = chrome.i18n.getMessage("notification_input_translation_disabled_per_site", [a, `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_input_translation_link_to_settings_placeholder")}</span>`])
        }
        return e.$$set = e=>{
            "options"in e && n(2, o = e.options)
        }
        ,
        [s, function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: i
                }
            })
        }
        , o]
    }
    class wl extends Ti {
        constructor(e) {
            super(),
            xi(this, e, _l, fl, Zn, {
                options: 2
            })
        }
    }
    function vl(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "container svelte-1dicgbw"),
                Lo(t, "data-qa", "deepl-notification-open-settings-page-reading-link")
            },
            m(i, s) {
                ho(i, t, s),
                t.innerHTML = e[0],
                n || (o = Co(t, "click", e[1]),
                n = !0)
            },
            p(e, [n]) {
                1 & n && (t.innerHTML = e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function $l(e, t, n) {
        let {options: o} = t
          , i = o?.settingsPageURL ? o?.settingsPageURL : hl.settings_page;
        let s = ""
          , a = o?.currentDomain ? o.currentDomain : "";
        switch (o.saveAction) {
        case ue:
            s = chrome.i18n.getMessage("notification_inline_translation_disabled_everywhere", `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_inline_translation_link_to_settings_placeholder")}</span>`);
            break;
        case de:
            s = chrome.i18n.getMessage("notification_inline_translation_disabled_per_site", [a, `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_inline_translation_link_to_settings_placeholder")}</span>`])
        }
        return e.$$set = e=>{
            "options"in e && n(2, o = e.options)
        }
        ,
        [s, function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: i
                }
            })
        }
        , o]
    }
    class bl extends Ti {
        constructor(e) {
            super(),
            xi(this, e, $l, vl, Zn, {
                options: 2
            })
        }
    }
    function yl(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_notification_fpt_hide")}`,
                Lo(t, "class", "container svelte-1uziz8q"),
                Lo(t, "data-qa", "deepl-notification-open-settings-page-reading-link")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", e[0]),
                n = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Cl(e) {
        return [function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: hl.settings_page
                }
            })
        }
        ]
    }
    class xl extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Cl, yl, Zn, {})
        }
    }
    function Tl(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        var h = e[5];
        function f(e) {
            return {
                props: {
                    options: e[1]
                }
            }
        }
        return h && (r = Po(h, f(e))),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("button"),
                s = bo(),
                a = wo("div"),
                r && bi(r.$$.fragment),
                Lo(o, "class", i = "dl-close-icon " + e[4] + " svelte-7jgk9y"),
                Lo(n, "class", "header"),
                Lo(n, "notificationtheme", e[4]),
                Lo(a, "class", l = "body " + e[4] + " svelte-7jgk9y"),
                Lo(t, "class", c = "container " + e[4] + " svelte-7jgk9y"),
                No(t, "contrast", e[0] === O)
            },
            m(i, l) {
                ho(i, t, l),
                po(t, n),
                po(n, o),
                po(t, s),
                po(t, a),
                r && yi(r, a, null),
                p = !0,
                g || (m = Co(o, "click", (function() {
                    Vn(e[2]) && e[2].apply(this, arguments)
                }
                )),
                g = !0)
            },
            p(s, d) {
                e = s,
                (!p || 16 & d && i !== (i = "dl-close-icon " + e[4] + " svelte-7jgk9y")) && Lo(o, "class", i),
                (!p || 16 & d) && Lo(n, "notificationtheme", e[4]);
                const u = {};
                if (2 & d && (u.options = e[1]),
                h !== (h = e[5])) {
                    if (r) {
                        mi();
                        const e = r;
                        _i(e.$$.fragment, 1, 0, (()=>{
                            Ci(e, 1)
                        }
                        )),
                        hi()
                    }
                    h ? (r = Po(h, f(e)),
                    bi(r.$$.fragment),
                    fi(r.$$.fragment, 1),
                    yi(r, a, null)) : r = null
                } else
                    h && r.$set(u);
                (!p || 16 & d && l !== (l = "body " + e[4] + " svelte-7jgk9y")) && Lo(a, "class", l),
                (!p || 16 & d && c !== (c = "container " + e[4] + " svelte-7jgk9y")) && Lo(t, "class", c),
                (!p || 17 & d) && No(t, "contrast", e[0] === O)
            },
            i(e) {
                p || (r && fi(r.$$.fragment, e),
                ii((()=>{
                    u && u.end(1),
                    d = vi(t, cr, {
                        x: 100,
                        duration: 1e3
                    }),
                    d.start()
                }
                )),
                p = !0)
            },
            o(e) {
                r && _i(r.$$.fragment, e),
                d && d.invalidate(),
                u = $i(t, cr, {
                    x: 100,
                    duration: 1e3
                }),
                p = !1
            },
            d(e) {
                e && fo(t),
                r && Ci(r),
                e && u && u.end(),
                g = !1,
                m()
            }
        }
    }
    function Ll(e) {
        let t, n, o = e[3] && Tl(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[3] ? o ? (o.p(e, n),
                8 & n && fi(o, 1)) : (o = Tl(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function El(e, t, n) {
        let o, i, {type: s} = t, {options: a} = t, {close: r} = t, l = !1;
        const c = {
            [M]: ml,
            [I]: wl,
            [D]: bl,
            [O]: xl
        };
        return Wo((()=>{
            setTimeout((()=>n(3, l = !0)), 100),
            setTimeout((()=>n(3, l = !1)), 10100),
            setTimeout((()=>r()), 11100)
        }
        )),
        e.$$set = e=>{
            "type"in e && n(0, s = e.type),
            "options"in e && n(1, a = e.options),
            "close"in e && n(2, r = e.close)
        }
        ,
        e.$$.update = ()=>{
            1 & e.$$.dirty && n(5, o = c[s]),
            2 & e.$$.dirty && n(4, i = N[a?.theme] ? N[a?.theme] : "")
        }
        ,
        [s, a, r, l, i, o]
    }
    class kl extends Ti {
        constructor(e) {
            super(),
            xi(this, e, El, Ll, Zn, {
                type: 0,
                options: 1,
                close: 2
            })
        }
    }
    class Sl extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM(e, t) {
            this.shadowContainer.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: ${S.deepl_inline_ui.z_index}`,
            this.mainComponent = new kl({
                target: this.shadowContainer,
                props: {
                    type: e,
                    options: t,
                    close: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy(),
            this.remove()
        }
    }
    function Ml(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                Lo(n, "class", "close-button svelte-b85ux9"),
                Lo(t, "class", "close-button-container svelte-b85ux9")
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                o || (i = Co(n, "click", (function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )),
                o = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && fo(t),
                o = !1,
                i()
            }
        }
    }
    function Il(e) {
        let t, n, o, i, s, a = e[0] && Ml(e);
        const r = e[2].default
          , l = Qn(r, e, e[1], null);
        return {
            c() {
                a && a.c(),
                t = bo(),
                n = wo("div"),
                o = wo("div"),
                i = bo(),
                l && l.c(),
                Lo(o, "class", "logo svelte-b85ux9"),
                Lo(n, "class", "body svelte-b85ux9")
            },
            m(e, r) {
                a && a.m(e, r),
                ho(e, t, r),
                ho(e, n, r),
                po(n, o),
                po(n, i),
                l && l.m(n, null),
                s = !0
            },
            p(e, [n]) {
                e[0] ? a ? a.p(e, n) : (a = Ml(e),
                a.c(),
                a.m(t.parentNode, t)) : a && (a.d(1),
                a = null),
                l && l.p && (!s || 2 & n) && eo(l, r, e, e[1], s ? Jn(r, e[1], n, null) : to(e[1]), null)
            },
            i(e) {
                s || (fi(l, e),
                s = !0)
            },
            o(e) {
                _i(l, e),
                s = !1
            },
            d(e) {
                a && a.d(e),
                e && fo(t),
                e && fo(n),
                l && l.d(e)
            }
        }
    }
    function Dl(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {onClose: s} = t;
        return e.$$set = e=>{
            "onClose"in e && n(0, s = e.onClose),
            "$$scope"in e && n(1, i = e.$$scope)
        }
        ,
        [s, i, o]
    }
    window.customElements.define("deepl-notification", Sl);
    class Ol extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Dl, Il, Zn, {
                onClose: 0
            })
        }
    }
    function Nl(e, t, n) {
        const o = e.slice();
        return o[35] = t[n],
        o
    }
    function Al(e) {
        let t, n, o, i = e[3], s = [];
        for (let t = 0; t < i.length; t += 1)
            s[t] = Rl(Nl(e, i, t));
        return {
            c() {
                t = wo("ul");
                for (let e = 0; e < s.length; e += 1)
                    s[e].c();
                Lo(t, "id", "dropdown_list"),
                Lo(t, "class", "dropdown__list svelte-2296ww"),
                Lo(t, "role", "listbox"),
                Lo(t, "aria-labelledby", "dropdown_option"),
                Lo(t, "tabindex", "-1"),
                Lo(t, "style", n = "up" === e[12] ? "bottom: 30px" : `height: ${e[15].height}; top: ${e[15].top};`),
                Lo(t, "data-qa", e[6]),
                No(t, "alternate-dropdown-list", "sm" === e[8]),
                No(t, "align-right", e[9])
            },
            m(e, n) {
                ho(e, t, n);
                for (let e = 0; e < s.length; e += 1)
                    s[e].m(t, null)
            },
            p(e, o) {
                if (262155 & o[0]) {
                    let n;
                    for (i = e[3],
                    n = 0; n < i.length; n += 1) {
                        const a = Nl(e, i, n);
                        s[n] ? s[n].p(a, o) : (s[n] = Rl(a),
                        s[n].c(),
                        s[n].m(t, null))
                    }
                    for (; n < s.length; n += 1)
                        s[n].d(1);
                    s.length = i.length
                }
                36864 & o[0] && n !== (n = "up" === e[12] ? "bottom: 30px" : `height: ${e[15].height}; top: ${e[15].top};`) && Lo(t, "style", n),
                64 & o[0] && Lo(t, "data-qa", e[6]),
                256 & o[0] && No(t, "alternate-dropdown-list", "sm" === e[8]),
                512 & o[0] && No(t, "align-right", e[9])
            },
            i(e) {
                o || ii((()=>{
                    o = vi(t, cr, {
                        y: -5,
                        duration: 500
                    }),
                    o.start()
                }
                ))
            },
            o: Un,
            d(e) {
                e && fo(t),
                _o(s, e)
            }
        }
    }
    function Rl(e) {
        let t, n, o, i, s, a, r, l, c = e[35].label + "";
        function d() {
            return e[27](e[35])
        }
        return {
            c() {
                t = wo("li"),
                n = $o(c),
                o = bo(),
                Lo(t, "role", "option"),
                Lo(t, "data-option-value", i = e[35].value),
                Lo(t, "data-option-regionalvariant", s = e[35].regionalVariant),
                Lo(t, "aria-selected", a = e[0] === e[35]),
                Lo(t, "class", "svelte-2296ww"),
                No(t, "selected", e[0] === e[35])
            },
            m(i, s) {
                ho(i, t, s),
                po(t, n),
                po(t, o),
                r || (l = [Co(t, "click", d), Co(t, "mousedown", To(xo(e[24])))],
                r = !0)
            },
            p(o, r) {
                e = o,
                8 & r[0] && c !== (c = e[35].label + "") && Eo(n, c),
                8 & r[0] && i !== (i = e[35].value) && Lo(t, "data-option-value", i),
                8 & r[0] && s !== (s = e[35].regionalVariant) && Lo(t, "data-option-regionalvariant", s),
                9 & r[0] && a !== (a = e[0] === e[35]) && Lo(t, "aria-selected", a),
                9 & r[0] && No(t, "selected", e[0] === e[35])
            },
            d(e) {
                e && fo(t),
                r = !1,
                Gn(l)
            }
        }
    }
    function Pl(e) {
        let t, n, o, i, s, a, r, l, c = e[1] && Al(e);
        return {
            c() {
                t = wo("div"),
                n = wo("button"),
                o = $o(e[17]),
                i = bo(),
                c && c.c(),
                Lo(n, "aria-haspopup", "listbox"),
                Lo(n, "id", "dropdown_button"),
                Lo(n, "aria-labelledby", "dropdown_option dropdown_button"),
                Lo(n, "aria-expanded", e[1]),
                Lo(n, "data-qa", e[5]),
                Lo(n, "class", "svelte-2296ww"),
                No(n, "dropdown-label", "original" === e[7]),
                No(n, "dropdown-label-alternate", "alternate" === e[7]),
                No(n, "dropdown-label-zendesk", "zendesk" === e[7]),
                No(n, "dropdown-label-full-width", e[10]),
                No(n, "dropdown-label-borderless", e[11]),
                No(n, "dropup", "up" === e[12]),
                Lo(t, "class", s = no(`dropdown__wrapper ${e[4]}`) + " svelte-2296ww"),
                Lo(t, "style", e[16]),
                ii((()=>e[29].call(t))),
                No(t, "disabled", e[2])
            },
            m(s, d) {
                ho(s, t, d),
                po(t, n),
                po(n, o),
                e[26](n),
                po(t, i),
                c && c.m(t, null),
                a = Oo(t, e[29].bind(t)),
                r || (l = [Co(n, "click", e[19]), Co(n, "mousedown", To(xo(e[25]))), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[28])],
                r = !0)
            },
            p(e, i) {
                131072 & i[0] && Eo(o, e[17]),
                2 & i[0] && Lo(n, "aria-expanded", e[1]),
                32 & i[0] && Lo(n, "data-qa", e[5]),
                128 & i[0] && No(n, "dropdown-label", "original" === e[7]),
                128 & i[0] && No(n, "dropdown-label-alternate", "alternate" === e[7]),
                128 & i[0] && No(n, "dropdown-label-zendesk", "zendesk" === e[7]),
                1024 & i[0] && No(n, "dropdown-label-full-width", e[10]),
                2048 & i[0] && No(n, "dropdown-label-borderless", e[11]),
                4096 & i[0] && No(n, "dropup", "up" === e[12]),
                e[1] ? c ? (c.p(e, i),
                2 & i[0] && fi(c, 1)) : (c = Al(e),
                c.c(),
                fi(c, 1),
                c.m(t, null)) : c && (c.d(1),
                c = null),
                16 & i[0] && s !== (s = no(`dropdown__wrapper ${e[4]}`) + " svelte-2296ww") && Lo(t, "class", s),
                65536 & i[0] && Lo(t, "style", e[16]),
                20 & i[0] && No(t, "disabled", e[2])
            },
            i(e) {
                fi(c)
            },
            o: Un,
            d(n) {
                n && fo(t),
                e[26](null),
                c && c.d(),
                a(),
                r = !1,
                Gn(l)
            }
        }
    }
    const zl = 300;
    function Hl(e, t, n) {
        let o, {isOpen: i=!1} = t, {disabled: s=!1} = t, {items: a=[]} = t, {placeholder: r=""} = t, {customClass: l=""} = t, {selectedOption: c} = t, {defaultOption: d} = t, {dataQaButton: u="dl-dropdown-button"} = t, {dataQaList: p="dl-dropdown-list"} = t, {variant: g="original"} = t, {fontSize: m="default"} = t, {alignRight: h=!0} = t, {extraText: f=""} = t, {isFullWidth: _=!1} = t, {isBorderless: w=!1} = t, {direction: v="down"} = t;
        const $ = Ko("deepl_settings");
        let b, y = 0, C = {}, x = {}, T = {}, L = "visibility: hidden; opacity:0; height:0;";
        const E = Vo();
        function k() {
            C.spaceAbove = Math.abs(b.getBoundingClientRect().top),
            C.spaceBelow = Math.abs(window.innerHeight - b.getBoundingClientRect().bottom)
        }
        d && (c = d),
        Wo((()=>{
            setTimeout((()=>{
                n(16, L = "")
            }
            ), 100)
        }
        ));
        return e.$$set = e=>{
            "isOpen"in e && n(1, i = e.isOpen),
            "disabled"in e && n(2, s = e.disabled),
            "items"in e && n(3, a = e.items),
            "placeholder"in e && n(20, r = e.placeholder),
            "customClass"in e && n(4, l = e.customClass),
            "selectedOption"in e && n(0, c = e.selectedOption),
            "defaultOption"in e && n(21, d = e.defaultOption),
            "dataQaButton"in e && n(5, u = e.dataQaButton),
            "dataQaList"in e && n(6, p = e.dataQaList),
            "variant"in e && n(7, g = e.variant),
            "fontSize"in e && n(8, m = e.fontSize),
            "alignRight"in e && n(9, h = e.alignRight),
            "extraText"in e && n(22, f = e.extraText),
            "isFullWidth"in e && n(10, _ = e.isFullWidth),
            "isBorderless"in e && n(11, w = e.isBorderless),
            "direction"in e && n(12, v = e.direction)
        }
        ,
        e.$$.update = ()=>{
            8396801 & e.$$.dirty[0] && (c && (T?.value === c?.value && T?.regionalVariant === c?.regionalVariant || (n(23, T = c),
            E("valueselected", {
                selectedOption: c
            }))),
            y && k()),
            5242881 & e.$$.dirty[0] && n(17, o = `${c ? c.selectedOptionLabel : r}${f ? ` ${f}` : ""}`)
        }
        ,
        [c, i, s, a, l, u, p, g, m, h, _, w, v, y, b, x, L, o, $, function() {
            "down" === v && function() {
                if (k(),
                n(15, x.top = "auto", x),
                n(15, x.height = "300px", x),
                C.spaceBelow > C.spaceAbove)
                    C.spaceBelow <= zl && n(15, x.height = Math.ceil(.8 * C.spaceBelow) + "px", x);
                else {
                    let e = zl;
                    C.spaceAbove <= zl && (e = Math.ceil(.8 * C.spaceAbove)),
                    n(15, x.height = `${e}px`, x),
                    n(15, x.top = "-" + (e + 2) + "px", x)
                }
            }(),
            n(1, i = !i),
            function() {
                let e = b.getRootNode().querySelector("ul li[aria-selected=true]");
                setTimeout((()=>{
                    e?.scrollIntoView({
                        block: "nearest"
                    })
                }
                ), 0)
            }()
        }
        , r, d, f, T, function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(e) {
            Yo[e ? "unshift" : "push"]((()=>{
                b = e,
                n(14, b)
            }
            ))
        }
        , e=>{
            n(1, i = !1),
            n(0, c = e),
            $.set({
                regionalVariant: e.regionalVariant || ""
            })
        }
        , ()=>n(1, i = !1), function() {
            y = this.clientWidth,
            n(13, y)
        }
        ]
    }
    class Fl extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Hl, Pl, Zn, {
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
    function Bl(e, t, n) {
        const o = e.slice();
        return o[17] = t[n],
        o
    }
    function Ul(e) {
        let t, n, o, i, s;
        return n = new Fl({
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
        }),
        n.$on("valueselected", e[11]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment)
            },
            m(a, r) {
                ho(a, t, r),
                yi(n, t, null),
                o = !0,
                i || (s = Co(t, "mousedown", To(xo(e[15]))),
                i = !0)
            },
            p(e, t) {
                const o = {};
                1 & t && (o.disabled = e[0]),
                8 & t && (o.customClass = e[3]),
                32 & t && (o.variant = e[5]),
                64 & t && (o.fontSize = e[6]),
                128 & t && (o.alignRight = e[7]),
                256 & t && (o.isBorderless = e[8]),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                i = !1,
                s()
            }
        }
    }
    function ql(e) {
        let t, n, o, i, s, a, r, l = e[2] && jl(), c = e[12], d = [];
        for (let t = 0; t < c.length; t += 1)
            d[t] = Wl(Bl(e, c, t));
        return {
            c() {
                t = wo("div"),
                n = wo("select"),
                l && l.c(),
                o = yo();
                for (let e = 0; e < d.length; e += 1)
                    d[e].c();
                i = $o(">"),
                Lo(n, "data-qa", "deepl-language-selection"),
                Lo(n, "class", "svelte-f4rh0n"),
                Lo(t, "class", s = no("alternate" === e[5] ? "language-selector-alternate" : "language-selector") + " svelte-f4rh0n")
            },
            m(s, c) {
                ho(s, t, c),
                po(t, n),
                l && l.m(n, null),
                po(n, o);
                for (let e = 0; e < d.length; e += 1)
                    d[e].m(n, null);
                po(n, i),
                Mo(n, e[1]),
                a || (r = Co(n, "change", xo(e[16])),
                a = !0)
            },
            p(e, a) {
                if (e[2] ? l ? l.p(e, a) : (l = jl(),
                l.c(),
                l.m(n, o)) : l && (l.d(1),
                l = null),
                4096 & a) {
                    let t;
                    for (c = e[12],
                    t = 0; t < c.length; t += 1) {
                        const o = Bl(e, c, t);
                        d[t] ? d[t].p(o, a) : (d[t] = Wl(o),
                        d[t].c(),
                        d[t].m(n, i))
                    }
                    for (; t < d.length; t += 1)
                        d[t].d(1);
                    d.length = c.length
                }
                4098 & a && Mo(n, e[1]),
                32 & a && s !== (s = no("alternate" === e[5] ? "language-selector-alternate" : "language-selector") + " svelte-f4rh0n") && Lo(t, "class", s)
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                l && l.d(),
                _o(d, e),
                a = !1,
                r()
            }
        }
    }
    function jl(e) {
        let t, n, o, i = chrome.i18n.getMessage("supported_languages_undefined") + "";
        return {
            c() {
                t = wo("option"),
                n = $o(i),
                o = bo(),
                t.__value = void 0,
                t.value = t.__value,
                Lo(t, "data-option-regionalvariant", void 0)
            },
            m(e, i) {
                ho(e, t, i),
                po(t, n),
                po(t, o)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Wl(e) {
        let t, n, o, i = e[17].label + "";
        return {
            c() {
                t = wo("option"),
                n = $o(i),
                o = bo(),
                t.__value = e[17].value,
                t.value = t.__value,
                Lo(t, "data-option-regionalvariant", e[17].regionalVariant)
            },
            m(e, i) {
                ho(e, t, i),
                po(t, n),
                po(t, o)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Gl(e) {
        let t, n, o, i;
        const s = [ql, Ul]
          , a = [];
        return t = mr() ? 0 : 1,
        n = a[t] = s[t](e),
        {
            c() {
                n.c(),
                o = yo()
            },
            m(e, n) {
                a[t].m(e, n),
                ho(e, o, n),
                i = !0
            },
            p(e, [t]) {
                n.p(e, t)
            },
            i(e) {
                i || (fi(n),
                i = !0)
            },
            o(e) {
                _i(n),
                i = !1
            },
            d(e) {
                a[t].d(e),
                e && fo(o)
            }
        }
    }
    function Vl(e, t, n) {
        let o, a = Un, r = ()=>(a(),
        a = Kn(p, (e=>n(14, o = e))),
        p);
        e.$$.on_destroy.push((()=>a()));
        const l = Vo();
        let {value: c} = t
          , {showChooseLanguageOption: d=!1} = t
          , {customClass: u=""} = t
          , {websiteSettings: p} = t;
        r();
        let {disabled: g=!1} = t
          , {variant: m="original"} = t
          , {fontSize: h="default"} = t
          , {alignRight: f=!1} = t
          , {isBorderless: _=!1} = t
          , w = d ? chrome.i18n.getMessage("supported_languages_undefined") : void 0;
        const v = kt();
        let $ = c ? v.find((e=>e.value === c)) : void 0;
        return e.$$set = e=>{
            "value"in e && n(1, c = e.value),
            "showChooseLanguageOption"in e && n(2, d = e.showChooseLanguageOption),
            "customClass"in e && n(3, u = e.customClass),
            "websiteSettings"in e && r(n(4, p = e.websiteSettings)),
            "disabled"in e && n(0, g = e.disabled),
            "variant"in e && n(5, m = e.variant),
            "fontSize"in e && n(6, h = e.fontSize),
            "alignRight"in e && n(7, f = e.alignRight),
            "isBorderless"in e && n(8, _ = e.isBorderless)
        }
        ,
        e.$$.update = ()=>{
            16384 & e.$$.dirty && (o && o.translationState === s ? n(0, g = !0) : o && o.translationState === i && n(0, g = !1))
        }
        ,
        [g, c, d, u, p, m, h, f, _, l, w, function(e) {
            g || l("selection", e.detail)
        }
        , v, $, o, function(t) {
            Xo.call(this, e, t)
        }
        , e=>{
            if (g)
                return;
            const t = e.target.options[e.target.selectedIndex].getAttribute("data-option-regionalVariant") || void 0;
            l("selection", {
                selectedOption: {
                    value: e.target.value,
                    regionalVariant: t
                }
            })
        }
        ]
    }
    class Zl extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Vl, Gl, Zn, {
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
    function Kl(e) {
        let t;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "loader svelte-c65fyl"),
                No(t, "small", e[0])
            },
            m(e, n) {
                ho(e, t, n)
            },
            p(e, [n]) {
                1 & n && No(t, "small", e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Xl(e, t, n) {
        let {small: o=!1} = t;
        return e.$$set = e=>{
            "small"in e && n(0, o = e.small)
        }
        ,
        [o]
    }
    class Ql extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Xl, Kl, Zn, {
                small: 0
            })
        }
    }
    function Yl(e) {
        let t, n;
        return {
            c() {
                t = wo("div"),
                n = $o(e[0]),
                Lo(t, "class", "info-msg svelte-17qaccl")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, [t]) {
                1 & t && Eo(n, e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Jl(e, t, n) {
        let {message: o} = t;
        return e.$$set = e=>{
            "message"in e && n(0, o = e.message)
        }
        ,
        [o]
    }
    class ec extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Jl, Yl, Zn, {
                message: 0
            })
        }
    }
    function tc(e) {
        let t, n, o, i, s;
        const a = e[7].default
          , r = Qn(a, e, e[6], null);
        return {
            c() {
                t = wo("button"),
                r && r.c(),
                Lo(t, "type", "button"),
                Lo(t, "class", n = no(e[0]) + " svelte-1b6vay0"),
                t.disabled = e[1],
                Lo(t, "id", e[5]),
                Lo(t, "data-qa", e[4]),
                No(t, "disabled", e[1]),
                No(t, "font-size-sm", "sm" === e[2]),
                No(t, "padding-x-md", "md" === e[3]),
                No(t, "padding-x-none", "none" === e[3])
            },
            m(n, a) {
                ho(n, t, a),
                r && r.m(t, null),
                o = !0,
                i || (s = [Co(t, "click", e[8]), Co(t, "mousedown", To(xo(e[9])))],
                i = !0)
            },
            p(e, [i]) {
                r && r.p && (!o || 64 & i) && eo(r, a, e, e[6], o ? Jn(a, e[6], i, null) : to(e[6]), null),
                (!o || 1 & i && n !== (n = no(e[0]) + " svelte-1b6vay0")) && Lo(t, "class", n),
                (!o || 2 & i) && (t.disabled = e[1]),
                (!o || 32 & i) && Lo(t, "id", e[5]),
                (!o || 16 & i) && Lo(t, "data-qa", e[4]),
                (!o || 3 & i) && No(t, "disabled", e[1]),
                (!o || 5 & i) && No(t, "font-size-sm", "sm" === e[2]),
                (!o || 9 & i) && No(t, "padding-x-md", "md" === e[3]),
                (!o || 9 & i) && No(t, "padding-x-none", "none" === e[3])
            },
            i(e) {
                o || (fi(r, e),
                o = !0)
            },
            o(e) {
                _i(r, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                r && r.d(e),
                i = !1,
                Gn(s)
            }
        }
    }
    function nc(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {className: s="button-primary"} = t
          , {disabled: a=!1} = t
          , {fontSize: r="default"} = t
          , {paddingX: l} = t
          , {dataQa: c="dl-button"} = t
          , {id: d=""} = t;
        return e.$$set = e=>{
            "className"in e && n(0, s = e.className),
            "disabled"in e && n(1, a = e.disabled),
            "fontSize"in e && n(2, r = e.fontSize),
            "paddingX"in e && n(3, l = e.paddingX),
            "dataQa"in e && n(4, c = e.dataQa),
            "id"in e && n(5, d = e.id),
            "$$scope"in e && n(6, i = e.$$scope)
        }
        ,
        [s, a, r, l, c, d, i, o, function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        ]
    }
    class oc extends Ti {
        constructor(e) {
            super(),
            xi(this, e, nc, tc, Zn, {
                className: 0,
                disabled: 1,
                fontSize: 2,
                paddingX: 3,
                dataQa: 4,
                id: 5
            })
        }
    }
    function ic(e) {
        let t, n = chrome.i18n.getMessage("ui_fpt_hide_cancel") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function sc(e) {
        let t, n = chrome.i18n.getMessage("ui_fpt_hide_confirm") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function ac(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y, C, x, T, L, E, k, S, M, I, D;
        return E = new oc({
            props: {
                className: "button-link",
                paddingX: "none",
                $$slots: {
                    default: [ic]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        E.$on("click", (function() {
            Vn(e[0]) && e[0].apply(this, arguments)
        }
        )),
        S = new oc({
            props: {
                className: "button-primary",
                $$slots: {
                    default: [sc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        S.$on("click", e[4]),
        {
            c() {
                t = wo("div"),
                n = wo("p"),
                n.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_heading")}`,
                o = bo(),
                i = wo("div"),
                s = wo("div"),
                a = wo("label"),
                r = wo("span"),
                l = wo("input"),
                c = bo(),
                d = wo("span"),
                d.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_domain")}`,
                u = bo(),
                p = wo("div"),
                g = wo("label"),
                m = wo("span"),
                h = wo("input"),
                f = bo(),
                _ = wo("span"),
                _.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_lang")}`,
                w = bo(),
                v = wo("div"),
                $ = wo("label"),
                b = wo("span"),
                y = wo("input"),
                C = bo(),
                x = wo("span"),
                x.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_fpt")}`,
                T = bo(),
                L = wo("div"),
                bi(E.$$.fragment),
                k = bo(),
                bi(S.$$.fragment),
                Lo(n, "class", "font-bold svelte-8fn8ut"),
                Lo(l, "id", "option-website"),
                Lo(l, "name", "option"),
                Lo(l, "type", "radio"),
                l.__value = "website",
                l.value = l.__value,
                Lo(l, "class", "svelte-8fn8ut"),
                e[7][0].push(l),
                Lo(d, "class", "label svelte-8fn8ut"),
                Lo(a, "for", "option-website"),
                Lo(a, "class", "svelte-8fn8ut"),
                Lo(s, "class", "option svelte-8fn8ut"),
                Lo(h, "id", "option-lang"),
                Lo(h, "type", "radio"),
                Lo(h, "name", "option"),
                h.__value = "lang",
                h.value = h.__value,
                Lo(h, "class", "svelte-8fn8ut"),
                e[7][0].push(h),
                Lo(_, "class", "label svelte-8fn8ut"),
                Lo(g, "for", "option-lang"),
                Lo(g, "class", "svelte-8fn8ut"),
                Lo(p, "class", "option svelte-8fn8ut"),
                Lo(y, "id", "option-fpt"),
                Lo(y, "type", "radio"),
                Lo(y, "name", "option"),
                y.__value = "fpt",
                y.value = y.__value,
                Lo(y, "class", "svelte-8fn8ut"),
                e[7][0].push(y),
                Lo(x, "class", "label svelte-8fn8ut"),
                Lo($, "for", "option-fpt"),
                Lo($, "class", "svelte-8fn8ut"),
                Lo(v, "class", "option svelte-8fn8ut"),
                Lo(i, "class", "cancel-container svelte-8fn8ut"),
                Lo(t, "class", "cancel-translation-body svelte-8fn8ut"),
                Lo(L, "class", "cancel-translation-footer svelte-8fn8ut")
            },
            m(O, N) {
                ho(O, t, N),
                po(t, n),
                po(t, o),
                po(t, i),
                po(i, s),
                po(s, a),
                po(a, r),
                po(r, l),
                l.checked = l.__value === e[1],
                po(a, c),
                po(a, d),
                po(i, u),
                po(i, p),
                po(p, g),
                po(g, m),
                po(m, h),
                h.checked = h.__value === e[1],
                po(g, f),
                po(g, _),
                po(i, w),
                po(i, v),
                po(v, $),
                po($, b),
                po(b, y),
                y.checked = y.__value === e[1],
                po($, C),
                po($, x),
                ho(O, T, N),
                ho(O, L, N),
                yi(E, L, null),
                po(L, k),
                yi(S, L, null),
                M = !0,
                I || (D = [Co(l, "change", e[6]), Co(h, "change", e[8]), Co(y, "change", e[9])],
                I = !0)
            },
            p(t, [n]) {
                e = t,
                2 & n && (l.checked = l.__value === e[1]),
                2 & n && (h.checked = h.__value === e[1]),
                2 & n && (y.checked = y.__value === e[1]);
                const o = {};
                65536 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                E.$set(o);
                const i = {};
                65536 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                S.$set(i)
            },
            i(e) {
                M || (fi(E.$$.fragment, e),
                fi(S.$$.fragment, e),
                M = !0)
            },
            o(e) {
                _i(E.$$.fragment, e),
                _i(S.$$.fragment, e),
                M = !1
            },
            d(n) {
                n && fo(t),
                e[7][0].splice(e[7][0].indexOf(l), 1),
                e[7][0].splice(e[7][0].indexOf(h), 1),
                e[7][0].splice(e[7][0].indexOf(y), 1),
                n && fo(T),
                n && fo(L),
                Ci(E),
                Ci(S),
                I = !1,
                Gn(D)
            }
        }
    }
    function rc(e, t, n) {
        let i, s;
        const a = Ko("deepl_settings");
        Xn(e, a, (e=>n(11, s = e)));
        const r = Ko("deepl_website_settings");
        Xn(e, r, (e=>n(10, i = e)));
        let {onClose: l} = t
          , {onCancel: c} = t
          , d = "fpt";
        return e.$$set = e=>{
            "onClose"in e && n(5, l = e.onClose),
            "onCancel"in e && n(0, c = e.onCancel)
        }
        ,
        [c, d, a, r, ()=>{
            const e = {
                hideOption: void 0,
                sourceLang: i.websiteLanguage,
                domainName: i.hostname,
                uiLocation: os(j)
            };
            switch (d) {
            case "website":
                oo(a, s.blacklistDomains = [...s.blacklistDomains, i.hostname], s),
                e.hideOption = v;
                break;
            case "lang":
                t = i.websiteLanguage,
                n = o,
                "EN" === t ? (oo(a, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "EN-GB": n
                }, s),
                oo(a, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "EN-US": n
                }, s)) : "PT" === t ? (oo(a, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "PT-PT": n
                }, s),
                oo(a, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "PT-BR": n
                }, s)) : oo(a, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    [t]: n
                }, s),
                e.hideOption = $;
                break;
            default:
                e.hideOption = b,
                a.set({
                    enableFullPageTranslation: !1
                })
            }
            var t, n;
            (()=>{
                const e = s.notificationsViewed;
                e && e.fullPageTranslation || (ca(O),
                a.set({
                    notificationsViewed: {
                        ...e,
                        fullPageTranslation: !0
                    }
                }))
            }
            )(),
            En({
                action: "dlTrackFptHide",
                payload: e
            }),
            l()
        }
        , l, function() {
            d = this.__value,
            n(1, d)
        }
        , [[]], function() {
            d = this.__value,
            n(1, d)
        }
        , function() {
            d = this.__value,
            n(1, d)
        }
        ]
    }
    class lc extends Ti {
        constructor(e) {
            super(),
            xi(this, e, rc, ac, Zn, {
                onClose: 5,
                onCancel: 0
            })
        }
    }
    function cc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function dc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function uc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function pc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function gc(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function mc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p = chrome.i18n.getMessage("ui_fpt_hide_checkbox") + "";
        t = new Ol({
            props: {
                onClose: e[0],
                $$slots: {
                    default: [xc]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let g = e[6] && Tc(e);
        return {
            c() {
                bi(t.$$.fragment),
                n = bo(),
                g && g.c(),
                o = bo(),
                i = wo("div"),
                s = wo("label"),
                a = wo("input"),
                r = bo(),
                l = $o(p),
                Lo(a, "type", "checkbox"),
                a.disabled = e[6],
                Lo(a, "class", "svelte-yijazm"),
                Lo(s, "class", "svelte-yijazm"),
                Lo(i, "class", "footer svelte-yijazm"),
                No(i, "hasError", e[6])
            },
            m(p, m) {
                yi(t, p, m),
                ho(p, n, m),
                g && g.m(p, m),
                ho(p, o, m),
                ho(p, i, m),
                po(i, s),
                po(s, a),
                po(s, r),
                po(s, l),
                c = !0,
                d || (u = Co(s, "click", e[15]),
                d = !0)
            },
            p(e, n) {
                const s = {};
                1 & n && (s.onClose = e[0]),
                536870932 & n && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(s),
                e[6] ? g ? (g.p(e, n),
                64 & n && fi(g, 1)) : (g = Tc(e),
                g.c(),
                fi(g, 1),
                g.m(o.parentNode, o)) : g && (mi(),
                _i(g, 1, 1, (()=>{
                    g = null
                }
                )),
                hi()),
                (!c || 64 & n) && (a.disabled = e[6]),
                (!c || 64 & n) && No(i, "hasError", e[6])
            },
            i(e) {
                c || (fi(t.$$.fragment, e),
                fi(g),
                c = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                _i(g),
                c = !1
            },
            d(e) {
                Ci(t, e),
                e && fo(n),
                g && g.d(e),
                e && fo(o),
                e && fo(i),
                d = !1,
                u()
            }
        }
    }
    function hc(e) {
        let t, n, o, i;
        return t = new Ol({
            props: {
                onClose: e[0]
            }
        }),
        o = new lc({
            props: {
                onClose: e[0],
                onCancel: e[13]
            }
        }),
        {
            c() {
                bi(t.$$.fragment),
                n = bo(),
                bi(o.$$.fragment)
            },
            m(e, s) {
                yi(t, e, s),
                ho(e, n, s),
                yi(o, e, s),
                i = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.onClose = e[0]),
                t.$set(i);
                const s = {};
                1 & n && (s.onClose = e[0]),
                8 & n && (s.onCancel = e[13]),
                o.$set(s)
            },
            i(e) {
                i || (fi(t.$$.fragment, e),
                fi(o.$$.fragment, e),
                i = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                _i(o.$$.fragment, e),
                i = !1
            },
            d(e) {
                Ci(t, e),
                e && fo(n),
                Ci(o, e)
            }
        }
    }
    function fc(e) {
        let t, n;
        return t = new Ol({
            props: {
                $$slots: {
                    default: [Uc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870966 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function _c(e) {
        let t, n;
        return t = new Ol({
            props: {
                $$slots: {
                    default: [Vc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870928 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function wc(e) {
        let t, n;
        return t = new Ol({
            props: {
                $$slots: {
                    default: [Zc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function vc(e) {
        let t, n;
        return t = new Ol({
            props: {
                $$slots: {
                    default: [Kc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function $c(e) {
        let t, n;
        return t = new Ol({
            props: {
                $$slots: {
                    default: [Xc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function bc(e) {
        let t, n;
        return t = new Ol({
            props: {
                $$slots: {
                    default: [Qc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function yc(e) {
        let t, n;
        return t = new Ol({
            props: {
                $$slots: {
                    default: [Yc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Cc(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("ui_fpt_translate_button")}`,
                Lo(t, "class", "svelte-yijazm")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function xc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p;
        return l = new Zl({
            props: {
                value: e[2].selectedTargetLanguage,
                variant: "alternate",
                alignRight: !1
            }
        }),
        l.$on("selection", e[14]),
        u = new oc({
            props: {
                className: "btn-primary",
                paddingX: "md",
                dataQa: "dl-button-translate-page",
                $$slots: {
                    default: [Cc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        u.$on("click", e[10]),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = $o(e[4]),
                i = bo(),
                s = wo("div"),
                a = bo(),
                r = wo("div"),
                bi(l.$$.fragment),
                c = bo(),
                d = wo("div"),
                bi(u.$$.fragment),
                Lo(n, "class", "website-lang svelte-yijazm"),
                Lo(s, "class", "translate-to-arrow svelte-yijazm"),
                Lo(r, "class", "language-switch svelte-yijazm"),
                Lo(t, "class", "language-selection svelte-yijazm"),
                Lo(d, "class", "translate-button svelte-yijazm")
            },
            m(e, g) {
                ho(e, t, g),
                po(t, n),
                po(n, o),
                po(t, i),
                po(t, s),
                po(t, a),
                po(t, r),
                yi(l, r, null),
                ho(e, c, g),
                ho(e, d, g),
                yi(u, d, null),
                p = !0
            },
            p(e, t) {
                (!p || 16 & t) && Eo(o, e[4]);
                const n = {};
                4 & t && (n.value = e[2].selectedTargetLanguage),
                l.$set(n);
                const i = {};
                536870912 & t && (i.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                u.$set(i)
            },
            i(e) {
                p || (fi(l.$$.fragment, e),
                fi(u.$$.fragment, e),
                p = !0)
            },
            o(e) {
                _i(l.$$.fragment, e),
                _i(u.$$.fragment, e),
                p = !1
            },
            d(e) {
                e && fo(t),
                Ci(l),
                e && fo(c),
                e && fo(d),
                Ci(u)
            }
        }
    }
    function Tc(e) {
        let t, n, o;
        return n = new al({
            props: {
                error: e[1].error
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "error-container svelte-yijazm")
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                2 & t && (o.error = e[1].error),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function Lc(e) {
        let t, n = Hr(chrome.i18n.getMessage("ui_notice_no_translate_language", e[4]), ["strong"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = Mc(dc(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                t = yo()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1)
                    o[t].m(e, n);
                ho(e, t, n)
            },
            p(e, i) {
                if (16 & i) {
                    let s;
                    for (n = Hr(chrome.i18n.getMessage("ui_notice_no_translate_language", e[4]), ["strong"]),
                    s = 0; s < n.length; s += 1) {
                        const a = dc(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = Mc(a),
                        o[s].c(),
                        o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                _o(o, e),
                e && fo(t)
            }
        }
    }
    function Ec(e) {
        let t;
        function n(e, t) {
            return e[5] ? Dc : Ic
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = yo()
            },
            m(e, n) {
                i.m(e, n),
                ho(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && fo(t)
            }
        }
    }
    function kc(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p(e, o) {
                16 & o && n !== (n = e[18].text + "") && Eo(t, n)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function Sc(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = wo("strong"),
                n = $o(o),
                Lo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, t) {
                16 & t && o !== (o = e[18].text + "") && Eo(n, o)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function Mc(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? Sc : kc
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = yo()
            },
            m(e, n) {
                i.m(e, n),
                ho(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && fo(t)
            }
        }
    }
    function Ic(e) {
        let t, n = Hr(chrome.i18n.getMessage("ui_notice_no_translate_website", e[1].hostname), ["strong"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = Ac(uc(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                t = yo()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1)
                    o[t].m(e, n);
                ho(e, t, n)
            },
            p(e, i) {
                if (2 & i) {
                    let s;
                    for (n = Hr(chrome.i18n.getMessage("ui_notice_no_translate_website", e[1].hostname), ["strong"]),
                    s = 0; s < n.length; s += 1) {
                        const a = uc(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = Ac(a),
                        o[s].c(),
                        o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                _o(o, e),
                e && fo(t)
            }
        }
    }
    function Dc(e) {
        let t, n = Hr(chrome.i18n.getMessage("ui_notice_no_translate_website_and_language", [e[1].hostname, e[4]]), ["strong"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = zc(pc(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                t = yo()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1)
                    o[t].m(e, n);
                ho(e, t, n)
            },
            p(e, i) {
                if (18 & i) {
                    let s;
                    for (n = Hr(chrome.i18n.getMessage("ui_notice_no_translate_website_and_language", [e[1].hostname, e[4]]), ["strong"]),
                    s = 0; s < n.length; s += 1) {
                        const a = pc(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = zc(a),
                        o[s].c(),
                        o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                _o(o, e),
                e && fo(t)
            }
        }
    }
    function Oc(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p(e, o) {
                2 & o && n !== (n = e[18].text + "") && Eo(t, n)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function Nc(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = wo("strong"),
                n = $o(o),
                Lo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, t) {
                2 & t && o !== (o = e[18].text + "") && Eo(n, o)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function Ac(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? Nc : Oc
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = yo()
            },
            m(e, n) {
                i.m(e, n),
                ho(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && fo(t)
            }
        }
    }
    function Rc(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p(e, o) {
                18 & o && n !== (n = e[18].text + "") && Eo(t, n)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function Pc(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = wo("strong"),
                n = $o(o),
                Lo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, t) {
                18 & t && o !== (o = e[18].text + "") && Eo(n, o)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function zc(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? Pc : Rc
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = yo()
            },
            m(e, n) {
                i.m(e, n),
                ho(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && fo(t)
            }
        }
    }
    function Hc(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Fc(e) {
        let t, n, o, i, s = e[18].text + "";
        return {
            c() {
                t = wo("span"),
                n = $o(s),
                Lo(t, "class", "link svelte-yijazm")
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                o || (i = Co(t, "click", e[9]),
                o = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                o = !1,
                i()
            }
        }
    }
    function Bc(e) {
        let t;
        let n = function(e, t) {
            return "settingsLink" === e[18].block ? Fc : Hc
        }(e)
          , o = n(e);
        return {
            c() {
                o.c(),
                t = yo()
            },
            m(e, n) {
                o.m(e, n),
                ho(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e),
                e && fo(t)
            }
        }
    }
    function Uc(e) {
        let t, n, o, i, s;
        function a(e, t) {
            return 6 & t && (o = null),
            null == o && (o = !!e[2].blacklistDomains.includes(e[1].hostname)),
            o ? Ec : e[5] ? Lc : void 0
        }
        let r = a(e, -1)
          , l = r && r(e)
          , c = Hr(chrome.i18n.getMessage("ui_notice_no_translate_change_option"), ["settingsLink"])
          , d = [];
        for (let t = 0; t < c.length; t += 1)
            d[t] = Bc(cc(e, c, t));
        return {
            c() {
                t = wo("div"),
                n = wo("p"),
                l && l.c(),
                i = bo(),
                s = wo("p");
                for (let e = 0; e < d.length; e += 1)
                    d[e].c();
                Lo(n, "class", "svelte-yijazm"),
                Lo(s, "class", "svelte-yijazm")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n),
                l && l.m(n, null),
                po(t, i),
                po(t, s);
                for (let e = 0; e < d.length; e += 1)
                    d[e].m(s, null)
            },
            p(e, t) {
                if (r === (r = a(e, t)) && l ? l.p(e, t) : (l && l.d(1),
                l = r && r(e),
                l && (l.c(),
                l.m(n, null))),
                512 & t) {
                    let n;
                    for (c = Hr(chrome.i18n.getMessage("ui_notice_no_translate_change_option"), ["settingsLink"]),
                    n = 0; n < c.length; n += 1) {
                        const o = cc(e, c, n);
                        d[n] ? d[n].p(o, t) : (d[n] = Bc(o),
                        d[n].c(),
                        d[n].m(s, null))
                    }
                    for (; n < d.length; n += 1)
                        d[n].d(1);
                    d.length = c.length
                }
            },
            d(e) {
                e && fo(t),
                l && l.d(),
                _o(d, e)
            }
        }
    }
    function qc(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p(e, o) {
                16 & o && n !== (n = e[18].text + "") && Eo(t, n)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function jc(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = wo("strong"),
                n = $o(o),
                Lo(t, "class", "svelte-yijazm")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, t) {
                16 & t && o !== (o = e[18].text + "") && Eo(n, o)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function Wc(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? jc : qc
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = yo()
            },
            m(e, n) {
                i.m(e, n),
                ho(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && fo(t)
            }
        }
    }
    function Gc(e) {
        let t, n = chrome.i18n.getMessage("full_page_translation_show_original") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Vc(e) {
        let t, n, o, i, s, a, r = Hr(chrome.i18n.getMessage("ui_translated_automatically", e[4]), ["strong"]), l = [];
        for (let t = 0; t < r.length; t += 1)
            l[t] = Wc(gc(e, r, t));
        return s = new oc({
            props: {
                className: "button-reload",
                $$slots: {
                    default: [Gc]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        s.$on("click", e[11]),
        {
            c() {
                t = wo("div"),
                n = wo("p");
                for (let e = 0; e < l.length; e += 1)
                    l[e].c();
                o = bo(),
                i = wo("p"),
                bi(s.$$.fragment),
                Lo(n, "class", "mb-none svelte-yijazm"),
                Lo(i, "class", "svelte-yijazm")
            },
            m(e, r) {
                ho(e, t, r),
                po(t, n);
                for (let e = 0; e < l.length; e += 1)
                    l[e].m(n, null);
                po(t, o),
                po(t, i),
                yi(s, i, null),
                a = !0
            },
            p(e, t) {
                if (16 & t) {
                    let o;
                    for (r = Hr(chrome.i18n.getMessage("ui_translated_automatically", e[4]), ["strong"]),
                    o = 0; o < r.length; o += 1) {
                        const i = gc(e, r, o);
                        l[o] ? l[o].p(i, t) : (l[o] = Wc(i),
                        l[o].c(),
                        l[o].m(n, null))
                    }
                    for (; o < l.length; o += 1)
                        l[o].d(1);
                    l.length = r.length
                }
                const o = {};
                536870912 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                s.$set(o)
            },
            i(e) {
                a || (fi(s.$$.fragment, e),
                a = !0)
            },
            o(e) {
                _i(s.$$.fragment, e),
                a = !1
            },
            d(e) {
                e && fo(t),
                _o(l, e),
                Ci(s)
            }
        }
    }
    function Zc(e) {
        let t;
        return {
            c() {
                t = wo("p"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_ongoing_translation")}`,
                Lo(t, "class", "translation-in-progress svelte-yijazm")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Kc(e) {
        let t;
        return {
            c() {
                t = wo("p"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_auto_detect_lang")}`,
                Lo(t, "class", "translation-in-progress svelte-yijazm")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Xc(e) {
        let t, n;
        return t = new ec({
            props: {
                message: chrome.i18n.getMessage("full_page_translation_info_google_translate")
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p: Un,
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Qc(e) {
        let t, n;
        return t = new ec({
            props: {
                message: chrome.i18n.getMessage("full_page_translation_no_website_data")
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p: Un,
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Yc(e) {
        let t, n, o;
        return n = new Ql({}),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "translation-in-progress svelte-yijazm")
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p: Un,
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function Jc(e) {
        let t, n, o, i, r, c;
        const d = [yc, bc, $c, vc, wc, _c, fc, hc, mc]
          , u = [];
        function p(e, t) {
            return 2 & t && (n = null),
            38 & t && (o = null),
            null == e[1] ? 0 : (null == n && (n = !(0 !== Object.keys(e[1]).length)),
            n ? 1 : e[1].isGoogleTranslatedActive ? 2 : e[1].translationState === l ? 3 : e[1].translationState === s ? 4 : e[1].translationState === a ? 5 : (null == o && (o = !(!e[2].blacklistDomains.includes(e[1].hostname) && !e[5])),
            o ? 6 : e[3] ? 7 : e[1].websiteLanguage ? 8 : -1))
        }
        return ~(i = p(e, -1)) && (r = u[i] = d[i](e)),
        {
            c() {
                t = wo("div"),
                r && r.c(),
                Lo(t, "class", "full-page-translation svelte-yijazm")
            },
            m(e, n) {
                ho(e, t, n),
                ~i && u[i].m(t, null),
                c = !0
            },
            p(e, [n]) {
                let o = i;
                i = p(e, n),
                i === o ? ~i && u[i].p(e, n) : (r && (mi(),
                _i(u[o], 1, 1, (()=>{
                    u[o] = null
                }
                )),
                hi()),
                ~i ? (r = u[i],
                r ? r.p(e, n) : (r = u[i] = d[i](e),
                r.c()),
                fi(r, 1),
                r.m(t, null)) : r = null)
            },
            i(e) {
                c || (fi(r),
                c = !0)
            },
            o(e) {
                _i(r),
                c = !1
            },
            d(e) {
                e && fo(t),
                ~i && u[i].d()
            }
        }
    }
    function ed(e, t, n) {
        let i, s, a, l;
        const c = Ko("deepl_settings");
        Xn(e, c, (e=>n(2, l = e)));
        const d = Ko("deepl_website_settings");
        Xn(e, d, (e=>n(1, a = e)));
        let u = _
          , {onClose: p} = t;
        let g, h, f = !1;
        return e.$$set = e=>{
            "onClose"in e && n(0, p = e.onClose)
        }
        ,
        e.$$.update = ()=>{
            2 & e.$$.dirty && n(6, i = a && a.error),
            6 & e.$$.dirty && n(5, s = Mt(a.websiteLanguage, l.languagesForTranslation, o)),
            6 & e.$$.dirty && a && l && xt(l.selectedTargetLanguage, a.websiteLanguage),
            2 & e.$$.dirty && a && (a.isSupportedLanguage ? n(4, g = chrome.i18n.getMessage(`supported_languages_ ${a.websiteLanguage}`)) : n(4, g = chrome.i18n.getMessage("supported_languages_EN"))),
            4098 & e.$$.dirty && a && a.hostname && a.hostname !== h && (n(12, h = a.hostname),
            En({
                action: "dlTrackExtensionOpenedEvent",
                payload: {
                    domainName: h,
                    extensionContext: u
                }
            }))
        }
        ,
        [p, a, l, f, g, s, i, c, d, function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: hl.settings_page
                }
            })
        }
        , function() {
            0 == l.isTargetLanguageConfirmed && c.set({
                isTargetLanguageConfirmed: !0
            }),
            ja(a.websiteLanguage, m)
        }
        , ()=>{
            d.update({
                translationState: r
            })
        }
        , h, ()=>{
            n(3, f = !1)
        }
        , e=>c.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0,
            regionalVariant: e.detail.selectedOption.regionalVariant
        }), ()=>{
            i || n(3, f = !f)
        }
        ]
    }
    class td extends Ti {
        constructor(e) {
            super(),
            xi(this, e, ed, Jc, Zn, {
                onClose: 0
            })
        }
    }
    function nd(e) {
        let t, n, o;
        return n = new td({
            props: {
                onClose: e[0]
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "app-popup svelte-1u84xsz"),
                Lo(t, "style", `z-index: ${e[3].z_index}`)
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                1 & t && (o.onClose = e[0]),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function od(e) {
        let t, n, o = !0 === e[1].isLoggedIn && !0 === e[1].isProUser && e[2] && e[2].isValidUrlForPopup && nd(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                !0 === e[1].isLoggedIn && !0 === e[1].isProUser && e[2] && e[2].isValidUrlForPopup ? o ? (o.p(e, n),
                6 & n && fi(o, 1)) : (o = nd(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function id(e, t, n) {
        let o, i;
        Xn(e, us, (e=>n(1, o = e))),
        Xn(e, zi, (e=>n(2, i = e))),
        Zo("deepl_settings", us),
        Zo("deepl_website_settings", zi);
        let {onClose: s} = t;
        const {deepl_inline_ui: a} = S;
        return e.$$set = e=>{
            "onClose"in e && n(0, s = e.onClose)
        }
        ,
        [s, o, i, a]
    }
    class sd extends Ti {
        constructor(e) {
            super(),
            xi(this, e, id, od, Zn, {
                onClose: 0
            })
        }
    }
    class ad extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new sd({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function rd(e) {
        let t, n;
        const o = e[8].default
          , i = Qn(o, e, e[7], null);
        return {
            c() {
                t = wo("div"),
                i && i.c()
            },
            m(e, o) {
                ho(e, t, o),
                i && i.m(t, null),
                n = !0
            },
            p(e, t) {
                i && i.p && (!n || 128 & t) && eo(i, o, e, e[7], n ? Jn(o, e[7], t, null) : to(e[7]), null)
            },
            i(e) {
                n || (fi(i, e),
                n = !0)
            },
            o(e) {
                _i(i, e),
                n = !1
            },
            d(e) {
                e && fo(t),
                i && i.d(e)
            }
        }
    }
    function ld(e) {
        let t, n, o;
        const i = e[8].default
          , s = Qn(i, e, e[7], null);
        return {
            c() {
                t = wo("div"),
                s && s.c(),
                Lo(t, "data-tooltip", e[0]),
                Lo(t, "style", n = `z-index: ${e[2]}; ${e[5]}`),
                Lo(t, "class", "svelte-dzoyw0"),
                No(t, "multiline", e[1]),
                No(t, "isFlexItem", e[4])
            },
            m(e, n) {
                ho(e, t, n),
                s && s.m(t, null),
                o = !0
            },
            p(e, a) {
                s && s.p && (!o || 128 & a) && eo(s, i, e, e[7], o ? Jn(i, e[7], a, null) : to(e[7]), null),
                (!o || 1 & a) && Lo(t, "data-tooltip", e[0]),
                (!o || 36 & a && n !== (n = `z-index: ${e[2]}; ${e[5]}`)) && Lo(t, "style", n),
                (!o || 2 & a) && No(t, "multiline", e[1]),
                (!o || 16 & a) && No(t, "isFlexItem", e[4])
            },
            i(e) {
                o || (fi(s, e),
                o = !0)
            },
            o(e) {
                _i(s, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                s && s.d(e)
            }
        }
    }
    function cd(e) {
        let t, n, o, i;
        const s = [ld, rd]
          , a = [];
        function r(e, t) {
            return e[3] ? 0 : 1
        }
        return t = r(e),
        n = a[t] = s[t](e),
        {
            c() {
                n.c(),
                o = yo()
            },
            m(e, n) {
                a[t].m(e, n),
                ho(e, o, n),
                i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e),
                t === l ? a[t].p(e, i) : (mi(),
                _i(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                hi(),
                n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                fi(n, 1),
                n.m(o.parentNode, o))
            },
            i(e) {
                i || (fi(n),
                i = !0)
            },
            o(e) {
                _i(n),
                i = !1
            },
            d(e) {
                a[t].d(e),
                e && fo(o)
            }
        }
    }
    function dd(e, t, n) {
        let o, {$$slots: i={}, $$scope: s} = t;
        const {deepl_inline_ui: a} = S;
        let {tooltip: r=!1} = t
          , {multiline: l=!1} = t
          , {zIndex: c=a.z_index} = t
          , {isEnabled: d=!0} = t
          , {isFlexItem: u=!1} = t
          , {width: p} = t;
        return e.$$set = e=>{
            "tooltip"in e && n(0, r = e.tooltip),
            "multiline"in e && n(1, l = e.multiline),
            "zIndex"in e && n(2, c = e.zIndex),
            "isEnabled"in e && n(3, d = e.isEnabled),
            "isFlexItem"in e && n(4, u = e.isFlexItem),
            "width"in e && n(6, p = e.width),
            "$$scope"in e && n(7, s = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && n(5, o = p ? `width: ${p}px` : "")
        }
        ,
        [r, l, c, d, u, o, p, s, i]
    }
    window.customElements.define("deepl-page-load-popup", ad);
    class ud extends Ti {
        constructor(e) {
            super(),
            xi(this, e, dd, cd, Zn, {
                tooltip: 0,
                multiline: 1,
                zIndex: 2,
                isEnabled: 3,
                isFlexItem: 4,
                width: 6
            })
        }
    }
    function pd(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                i = wo("div"),
                s = bo(),
                a = wo("div"),
                r = wo("div"),
                r.textContent = `${chrome.i18n.getMessage("inline_translation_highlighter_tooltip_headline")}`,
                l = bo(),
                c = wo("div"),
                c.textContent = `${chrome.i18n.getMessage("inline_translation_highlighter_tooltip_text")}`,
                d = bo(),
                u = wo("button"),
                Lo(i, "class", "logo svelte-143q1m8"),
                Lo(r, "class", "headline svelte-143q1m8"),
                Lo(c, "class", "text svelte-143q1m8"),
                Lo(a, "class", "text-wrapper svelte-143q1m8"),
                Lo(o, "class", "content svelte-143q1m8"),
                Lo(u, "class", "close-icon svelte-143q1m8"),
                Lo(n, "class", p = no(`body body__ ${e[1]}`) + " svelte-143q1m8"),
                Lo(t, "class", g = no(`container container__ ${e[1]}`) + " svelte-143q1m8")
            },
            m(p, g) {
                ho(p, t, g),
                po(t, n),
                po(n, o),
                po(o, i),
                po(o, s),
                po(o, a),
                po(a, r),
                po(a, l),
                po(a, c),
                po(n, d),
                po(n, u),
                f = !0,
                _ || (w = Co(u, "click", e[3]),
                _ = !0)
            },
            p(e, [o]) {
                (!f || 2 & o && p !== (p = no(`body body__ ${e[1]}`) + " svelte-143q1m8")) && Lo(n, "class", p),
                (!f || 2 & o && g !== (g = no(`container container__ ${e[1]}`) + " svelte-143q1m8")) && Lo(t, "class", g)
            },
            i(e) {
                f || (ii((()=>{
                    h && h.end(1),
                    m = vi(t, cr, {
                        x: 100,
                        duration: 1e3
                    }),
                    m.start()
                }
                )),
                f = !0)
            },
            o(e) {
                m && m.invalidate(),
                h = $i(t, cr, {
                    x: 100,
                    duration: 1e3
                }),
                f = !1
            },
            d(e) {
                e && fo(t),
                e && h && h.end(),
                _ = !1,
                w()
            }
        }
    }
    function gd(t, n, o) {
        let {closeInlineHighlighter: i=(()=>{}
        )} = n
          , {el: s} = n
          , a = "topLeft";
        Wo((async()=>{
            try {
                En({
                    action: "dltrackOpenInlineHighlighter",
                    payload: {
                        domainName: e.websiteData.hostname
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }
        ));
        return t.$$set = e=>{
            "closeInlineHighlighter"in e && o(0, i = e.closeInlineHighlighter),
            "el"in e && o(2, s = e.el)
        }
        ,
        t.$$.update = ()=>{
            if (4 & t.$$.dirty && s) {
                const e = s.getBoundingClientRect();
                let t = e.x > 387
                  , n = window.innerWidth - e.right > 387
                  , i = window.innerHeight - e.bottom > 150
                  , r = e.y > 150;
                r && t ? o(1, a = "topLeft") : r && n ? o(1, a = "topRight") : i && t ? o(1, a = "bottomLeft") : i && n && o(1, a = "bottomRight")
            }
        }
        ,
        [i, a, s, ()=>i(Ee)]
    }
    class md extends Ti {
        constructor(e) {
            super(),
            xi(this, e, gd, pd, Zn, {
                closeInlineHighlighter: 0,
                el: 2
            })
        }
    }
    function hd(e) {
        let t, n, o, i, s, a, r, l, c, d = e[3] && !e[1].isInlineHighlighterShown && fd(e);
        return o = new ud({
            props: {
                tooltip: e[2],
                $$slots: {
                    default: [_d]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        s = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("inline_translation_tooltip_turnoff"),
                $$slots: {
                    default: [wd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                d && d.c(),
                t = bo(),
                n = wo("div"),
                bi(o.$$.fragment),
                i = bo(),
                bi(s.$$.fragment),
                Lo(n, "class", "icon-container svelte-l3ooav"),
                Lo(n, "data-qa", "deepl-inline-translate-icon-container")
            },
            m(a, u) {
                d && d.m(a, u),
                ho(a, t, u),
                ho(a, n, u),
                yi(o, n, null),
                po(n, i),
                yi(s, n, null),
                e[24](n),
                r = !0,
                l || (c = [Co(n, "blur", e[15]), Co(n, "mouseenter", e[7]), Co(n, "mouseleave", e[8])],
                l = !0)
            },
            p(e, n) {
                e[3] && !e[1].isInlineHighlighterShown ? d ? (d.p(e, n),
                10 & n && fi(d, 1)) : (d = fd(e),
                d.c(),
                fi(d, 1),
                d.m(t.parentNode, t)) : d && (mi(),
                _i(d, 1, 1, (()=>{
                    d = null
                }
                )),
                hi());
                const i = {};
                4 & n && (i.tooltip = e[2]),
                67108864 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                o.$set(i);
                const a = {};
                67108880 & n && (a.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                s.$set(a)
            },
            i(e) {
                r || (fi(d),
                fi(o.$$.fragment, e),
                fi(s.$$.fragment, e),
                a || ii((()=>{
                    a = vi(n, cr, {
                        x: -5,
                        duration: 300
                    }),
                    a.start()
                }
                )),
                r = !0)
            },
            o(e) {
                _i(d),
                _i(o.$$.fragment, e),
                _i(s.$$.fragment, e),
                r = !1
            },
            d(i) {
                d && d.d(i),
                i && fo(t),
                i && fo(n),
                Ci(o),
                Ci(s),
                e[24](null),
                l = !1,
                Gn(c)
            }
        }
    }
    function fd(e) {
        let t, n;
        return t = new md({
            props: {
                closeInlineHighlighter: e[11],
                el: e[3]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                8 & n && (o.el = e[3]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function _d(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "dl-logo svelte-l3ooav"),
                Lo(t, "data-qa", "deepl-inline-translate-menu-icon")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = [Co(t, "click", To(xo(e[6]))), Co(t, "focus", e[19]), Co(t, "mouseup", To(xo(e[20]))), Co(t, "mousedown", To(xo(e[21]))), Co(t, "mouseenter", e[22])],
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                Gn(o)
            }
        }
    }
    function wd(e) {
        let t, n, o, i, s;
        return {
            c() {
                t = wo("div"),
                Lo(t, "data-qa", "deepl-inline-translate-turnoff-icon"),
                Lo(t, "class", n = no(`dl-turnoff-inline-icon ${e[4] ? "" : "hidden"} `) + " svelte-l3ooav")
            },
            m(n, o) {
                ho(n, t, o),
                i || (s = [Co(t, "click", To(xo(e[9]))), Co(t, "focus", e[16]), Co(t, "mousedown", To(xo(e[17]))), Co(t, "mouseup", To(xo(e[18]))), Co(t, "mouseenter", e[23])],
                i = !0)
            },
            p(e, o) {
                16 & o && n !== (n = no(`dl-turnoff-inline-icon ${e[4] ? "" : "hidden"} `) + " svelte-l3ooav") && Lo(t, "class", n)
            },
            i(e) {
                o || ii((()=>{
                    o = vi(t, cr, {
                        x: -5,
                        duration: 300
                    }),
                    o.start()
                }
                ))
            },
            o: Un,
            d(e) {
                e && fo(t),
                i = !1,
                Gn(s)
            }
        }
    }
    function vd(e) {
        let t, n, o = !e[5] && hd(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[5] ? o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi()) : o ? (o.p(e, n),
                32 & n && fi(o, 1)) : (o = hd(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t))
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function $d(e, t, n) {
        let o, i, s, a = Un, r = ()=>(a(),
        a = Kn(l, (e=>n(14, s = e))),
        l);
        Xn(e, us, (e=>n(1, i = e))),
        e.$$.on_destroy.push((()=>a())),
        Zo("deepl_settings", us);
        let {websiteSettings: l} = t;
        r();
        let c, d, {platformBehaviour: u=Me.default} = t, p = "", g = !1;
        function m() {
            Ks(),
            f(),
            En({
                action: "dlTriggerTranslateInline"
            }),
            p || kn(M),
            w(ke)
        }
        async function h(e, t, n) {
            if ("dlTriggerTranslationShortcut" === e.action)
                m(),
                En({
                    action: "dlTrackUseOfShortcut",
                    payload: {
                        shortcutType: se,
                        location: A,
                        nicheIntegration: u
                    }
                }),
                n()
        }
        function f() {
            s && s.isInlineTranslateSettingsTooltipInjected || n(4, g = !1)
        }
        function _(e) {
            En({
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
                us.set({
                    isInlineHighlighterShown: !0
                });
                try {
                    En({
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
        En({
            action: "dlCheckCommandShortcuts"
        }).then((e=>n(13, p = e ? e.filter((e=>e.name == se))[0].shortcut : ""))),
        chrome.runtime.onMessage.addListener(h),
        Go((()=>{
            chrome.runtime.onMessage.removeListener(h)
        }
        ));
        return e.$$set = e=>{
            "websiteSettings"in e && r(n(0, l = e.websiteSettings)),
            "platformBehaviour"in e && n(12, u = e.platformBehaviour)
        }
        ,
        e.$$.update = ()=>{
            if (2 & e.$$.dirty && n(5, o = i.blacklistDomainsForReading && i.blacklistDomainsForReading.includes(window.location.hostname) || !i.enableInlineTranslation),
            24576 & e.$$.dirty) {
                let e;
                e = chrome.i18n.getMessage("context_menus_translate_section"),
                n(2, c = p ? `${e} (${p})` : e),
                !1 === s.isInlineTranslateSettingsTooltipInjected && n(4, g = !1)
            }
        }
        ,
        [l, i, c, d, g, o, m, function() {
            n(4, g = !0)
        }
        , f, function() {
            s && !s.isInlineTranslateSettingsTooltipInjected && (n(4, g = !0),
            Zs(u),
            En({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: ge,
                    uiLocation: A,
                    nicheIntegration: u
                }
            })),
            w(ke)
        }
        , _, w, u, p, s, function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , ()=>_(A), ()=>_(R), function(e) {
            Yo[e ? "unshift" : "push"]((()=>{
                d = e,
                n(3, d)
            }
            ))
        }
        ]
    }
    class bd extends Ti {
        constructor(e) {
            super(),
            xi(this, e, $d, vd, Zn, {
                websiteSettings: 0,
                platformBehaviour: 12
            })
        }
    }
    class yd extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.container = document.createElement("div"),
            this.mainComponent,
            this.cachedMouseEvent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.addChangeEvents = this.addChangeEvents.bind(this),
            this.removeChangeEvents = this.removeChangeEvents.bind(this),
            this.repositionContainer = this.repositionContainer.bind(this),
            this.cachedReposition = this.cachedReposition.bind(this),
            this.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM(e, t) {
            this.shadowContainer && this.shadowContainer.childElementCount > 0 && this.cleanupDOM(),
            this.shadowContainer.appendChild(this.container),
            this.repositionContainer(t),
            this.mainComponent = new bd({
                target: this.container,
                props: {
                    websiteSettings: e
                }
            }),
            this.addChangeEvents(),
            this.cachedMouseEvent = t
        }
        repositionContainer(e) {
            if (window.getSelection() && !window.getSelection().toString())
                return void this.cleanupDOM();
            const {deepl_inline_ui: t} = S
              , n = On();
            let o = `position: absolute; top: 0px; left: 0px; width: 100%; z-index: ${t.z_index}`
              , i = `position: absolute; z-index: ${t.z_index};`;
            this.shadowContainer.style.cssText = o,
            this.container.style.cssText = i;
            const s = function(e, t) {
                let n = {
                    containerStyleTop: t.y > 0 ? t.y : 0,
                    containerStyleLeft: t.x > 0 ? t.x : 0
                };
                if (!e || !t)
                    return n;
                const {TRIGGER_EXPENDED_WIDTH: o, TRIGGER_WIDTH: i, TRIGGER_HEIGHT: s} = gs
                  , a = e?.detail;
                if (1 === a) {
                    if (e.isOutsideOfView)
                        return n;
                    let a = parseInt(window.getComputedStyle(window.getSelection().anchorNode.parentElement, null).getPropertyValue("font-size"));
                    const r = document.body.parentNode.getBoundingClientRect();
                    let l = e.pageY + .5 * a
                      , c = t.selectedTop + t.height - a - r.y;
                    if (t.height < 1.5 * a) {
                        n.containerStyleLeft = e.clientX;
                        const s = t.x + t.selectedWidth;
                        e.clientX > s ? n.containerStyleLeft = t.selectedRight > o ? s : s - o : e.clientX - t.x < i && e.clientX < t.x && (n.containerStyleLeft = t.selectedLeft > o ? t.x : t.x + o)
                    } else
                        l > c ? n.containerStyleLeft = e.clientX : l < c && (n.containerStyleTop = t.y - t.height - s - 5,
                        n.containerStyleLeft = e.clientX)
                } else if (2 === a) {
                    n.containerStyleLeft = t.x + t.selectedWidth - i;
                    let e = parseInt(window.getComputedStyle(window.getSelection().anchorNode.parentElement, null).getPropertyValue("font-size"));
                    parseInt(t.height / 2) > e && (n.containerStyleTop = t.y - t.height + e + 2)
                }
                const r = window.innerWidth || document.documentElement.innerWidth
                  , l = window.scrollHeight || document.documentElement.scrollHeight;
                return n.containerStyleLeft + o > r && (n.containerStyleLeft = n.containerStyleLeft - o),
                (n.containerStyleTop + s > l || n.containerStyleTop < 0) && (n.containerStyleTop = t.y - s),
                n
            }(e, n);
            this.container.style.top = `${parseInt(s.containerStyleTop)}px`,
            this.container.style.left = `${parseInt(s.containerStyleLeft)}px`
        }
        cachedReposition() {
            return this.repositionContainer(this.cachedMouseEvent)
        }
        addChangeEvents() {
            window.addEventListener("scroll", this.cachedReposition),
            window.addEventListener("resize", this.cachedReposition)
        }
        removeChangeEvents() {
            window.removeEventListener("scroll", this.cachedReposition),
            window.removeEventListener("resize", this.cachedReposition)
        }
        cleanupDOM() {
            this.container.remove(),
            this.shadowContainer.remove(),
            this.shadowContainer = document.createElement("div"),
            this.container = document.createElement("div"),
            this.shadow.appendChild(this.shadowContainer),
            this.mainComponent && this.mainComponent.$destroy(),
            this.removeChangeEvents()
        }
    }
    function Cd(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                Lo(t, "type", "button"),
                Lo(t, "class", "dl-menu-icon dl-menu-icon--user svelte-feu83h")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "mousedown", xo(e[13])),
                n = !0)
            },
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function xd(e) {
        let t, n, o, i, s, a, r, l, c, d = Ot();
        function u(e, t) {
            return !0 === e[1].isLoggedIn ? Ld : Td
        }
        let p = u(e)
          , g = p && p(e)
          , m = d && function(e) {
            let t, n, o;
            return {
                c() {
                    t = wo("div"),
                    t.textContent = "DEV_TOOLS",
                    Lo(t, "class", "dl-menu-item svelte-feu83h")
                },
                m(i, s) {
                    ho(i, t, s),
                    n || (o = Co(t, "click", e[8]),
                    n = !0)
                },
                p: Un,
                d(e) {
                    e && fo(t),
                    n = !1,
                    o()
                }
            }
        }(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                n.innerHTML = '<span class="dl-menu-link dl-feedback-link svelte-feu83h"><div>Share feedback</div> \n          \n          \n          <div class="dl-feedback-icon svelte-feu83h"></div></span>',
                o = bo(),
                i = wo("div"),
                i.textContent = `${chrome.i18n.getMessage("menu_settings_label")}`,
                s = bo(),
                g && g.c(),
                a = bo(),
                m && m.c(),
                Lo(n, "class", "dl-menu-item svelte-feu83h"),
                Lo(i, "class", "dl-menu-item svelte-feu83h"),
                Lo(t, "class", "dl-menu-list svelte-feu83h")
            },
            m(r, d) {
                ho(r, t, d),
                po(t, n),
                po(t, o),
                po(t, i),
                po(t, s),
                g && g.m(t, null),
                po(t, a),
                m && m.m(t, null),
                l || (c = [Co(n, "click", e[6]), Co(i, "click", e[9])],
                l = !0)
            },
            p(e, n) {
                p === (p = u(e)) && g ? g.p(e, n) : (g && g.d(1),
                g = p && p(e),
                g && (g.c(),
                g.m(t, a))),
                d && m.p(e, n)
            },
            i(e) {
                r || ii((()=>{
                    r = vi(t, cr, {
                        y: -5,
                        duration: 500
                    }),
                    r.start()
                }
                ))
            },
            o: Un,
            d(e) {
                e && fo(t),
                g && g.d(),
                m && m.d(),
                l = !1,
                Gn(c)
            }
        }
    }
    function Td(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = wo("div"),
                t.innerHTML = '<div class="divider svelte-feu83h"></div>',
                n = bo(),
                o = wo("div"),
                i = wo("span"),
                i.textContent = `${chrome.i18n.getMessage("menu_login_label")}`,
                s = bo(),
                a = wo("div"),
                r = wo("span"),
                r.textContent = `${chrome.i18n.getMessage("menu_trial_label")}`,
                Lo(t, "class", "dl-menu-item dl-menu-item--divider svelte-feu83h"),
                Lo(o, "class", "dl-menu-item svelte-feu83h"),
                Lo(r, "class", "dl-menu-link link svelte-feu83h"),
                Lo(a, "class", "dl-menu-item svelte-feu83h")
            },
            m(d, u) {
                ho(d, t, u),
                ho(d, n, u),
                ho(d, o, u),
                po(o, i),
                ho(d, s, u),
                ho(d, a, u),
                po(a, r),
                l || (c = [Co(o, "click", e[4]), Co(a, "click", e[5])],
                l = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                e && fo(n),
                e && fo(o),
                e && fo(s),
                e && fo(a),
                l = !1,
                Gn(c)
            }
        }
    }
    function Ld(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = wo("div"),
                t.innerHTML = '<div class="divider svelte-feu83h"></div>',
                n = bo(),
                o = wo("div"),
                i = wo("span"),
                i.textContent = `${chrome.i18n.getMessage("menu_logout_label")}`,
                Lo(t, "class", "dl-menu-item dl-menu-item--divider svelte-feu83h"),
                Lo(o, "class", "dl-menu-item svelte-feu83h")
            },
            m(r, l) {
                ho(r, t, l),
                ho(r, n, l),
                ho(r, o, l),
                po(o, i),
                s || (a = Co(o, "click", e[3]),
                s = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                e && fo(n),
                e && fo(o),
                s = !1,
                a()
            }
        }
    }
    function Ed(e) {
        let t, n, o, i, s, a, r, l = !0 === e[1].isLoggedIn && Cd(e), c = e[0] && xd(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                l && l.c(),
                o = bo(),
                i = wo("button"),
                s = bo(),
                c && c.c(),
                Lo(i, "type", "button"),
                Lo(i, "class", "dl-menu-icon dl-menu-icon--hamburger svelte-feu83h"),
                No(i, "isOpen", e[0]),
                Lo(n, "class", "dl-menu-icon-wrapper svelte-feu83h"),
                Lo(t, "class", "dl-container-menu svelte-feu83h")
            },
            m(d, u) {
                ho(d, t, u),
                po(t, n),
                l && l.m(n, null),
                po(n, o),
                po(n, i),
                po(t, s),
                c && c.m(t, null),
                a || (r = [Co(i, "mousedown", xo(e[12])), Co(n, "click", e[14]), Co(n, "mousedown", To(xo(e[11]))), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[7]), Co(t, "mousedown", To(xo(e[10])))],
                a = !0)
            },
            p(e, [s]) {
                !0 === e[1].isLoggedIn ? l || (l = Cd(e),
                l.c(),
                l.m(n, o)) : l && (l.d(1),
                l = null),
                1 & s && No(i, "isOpen", e[0]),
                e[0] ? c ? (c.p(e, s),
                1 & s && fi(c, 1)) : (c = xd(e),
                c.c(),
                fi(c, 1),
                c.m(t, null)) : c && (c.d(1),
                c = null)
            },
            i(e) {
                fi(c)
            },
            o: Un,
            d(e) {
                e && fo(t),
                l && l.d(),
                c && c.d(),
                a = !1,
                Gn(r)
            }
        }
    }
    function kd(e, t, n) {
        let o;
        const i = Ko("deepl_settings");
        Xn(e, i, (e=>n(1, o = e)));
        let s = !1;
        function a() {
            n(0, s = !1)
        }
        return [s, o, i, function() {
            En({
                action: "dlRequestLogout"
            }),
            En({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: ce
                }
            }),
            a()
        }
        , function() {
            En({
                action: "dlRequestLogin"
            }),
            a()
        }
        , function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ki,
                    utmContent: "menu"
                }
            }),
            a()
        }
        , function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Zi
                }
            }),
            a()
        }
        , a, function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: hl.developer_tools
                }
            }),
            a()
        }
        , function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: hl.settings_page
                }
            }),
            a()
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , ()=>{
            n(0, s = !s)
        }
        ]
    }
    window.customElements.define("deepl-inline-trigger", yd);
    class Sd extends Ti {
        constructor(e) {
            super(),
            xi(this, e, kd, Ed, Zn, {})
        }
    }
    function Md(e) {
        let t;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "dl-logo svelte-1k53si1")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Id(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "dl-logo dl-logo--clickable svelte-1k53si1")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", e[12]),
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Dd(e) {
        let t, n, o, i, s, a;
        return s = new Zl({
            props: {
                value: e[9].selectedTargetLanguage,
                websiteSettings: e[4],
                customClass: "dropdown__wrapper--header",
                fontSize: "sm"
            }
        }),
        s.$on("selection", e[16]),
        {
            c() {
                t = wo("div"),
                n = wo("span"),
                n.textContent = `${chrome.i18n.getMessage("layout_header_label_language_switch_v2")}`,
                o = bo(),
                i = wo("div"),
                bi(s.$$.fragment),
                Lo(n, "class", "dl-actions-language-selector__label svelte-1k53si1"),
                Lo(i, "class", "dl-actions-language-selector__dropdown svelte-1k53si1"),
                Lo(t, "class", "dl-actions-language-selector svelte-1k53si1")
            },
            m(e, r) {
                ho(e, t, r),
                po(t, n),
                po(t, o),
                po(t, i),
                yi(s, i, null),
                a = !0
            },
            p(e, t) {
                const n = {};
                512 & t && (n.value = e[9].selectedTargetLanguage),
                16 & t && (n.websiteSettings = e[4]),
                s.$set(n)
            },
            i(e) {
                a || (fi(s.$$.fragment, e),
                a = !0)
            },
            o(e) {
                _i(s.$$.fragment, e),
                a = !1
            },
            d(e) {
                e && fo(t),
                Ci(s)
            }
        }
    }
    function Od(e) {
        let t;
        function n(e, t) {
            return null == e[8] || e[8].translationState === s ? Ad : Nd
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = yo()
            },
            m(e, n) {
                i.m(e, n),
                ho(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && fo(t)
            }
        }
    }
    function Nd(e) {
        let t;
        return {
            c() {
                t = wo("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_done")}`,
                Lo(t, "class", "dl-write-heading svelte-1k53si1")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Ad(e) {
        let t;
        return {
            c() {
                t = wo("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_loading")}`,
                Lo(t, "class", "dl-write-heading svelte-1k53si1")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Rd(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                Lo(t, "class", "dl-settings-icon svelte-1k53si1"),
                Lo(t, "data-qa", "deepl-layour-header-settings-link")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", e[13]),
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Pd(e) {
        let t, n;
        return t = new Sd({}),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function zd(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                Lo(t, "type", "button"),
                Lo(t, "class", "dl-close-icon svelte-1k53si1")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", (function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )),
                n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Hd(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        let p = function(e, t) {
            return e[12] ? Id : Md
        }(e)
          , g = p(e)
          , m = e[6] === Ie.translate && e[2] && e[9] && e[4] && Dd(e)
          , h = e[6] === Ie.write && Od(e)
          , f = e[7] && Rd(e)
          , _ = e[1] && Pd()
          , w = e[0] && zd(e);
        return {
            c() {
                t = wo("div"),
                g.c(),
                n = bo(),
                o = wo("div"),
                m && m.c(),
                i = bo(),
                h && h.c(),
                s = bo(),
                f && f.c(),
                a = bo(),
                _ && _.c(),
                r = bo(),
                w && w.c(),
                Lo(o, "class", "dl-actions svelte-1k53si1"),
                Lo(t, "class", l = no("dl-header " + (e[2] ? "dl-header--with-lang-selector" : "")) + " svelte-1k53si1")
            },
            m(l, p) {
                ho(l, t, p),
                g.m(t, null),
                po(t, n),
                po(t, o),
                m && m.m(o, null),
                po(o, i),
                h && h.m(o, null),
                po(o, s),
                f && f.m(o, null),
                po(o, a),
                _ && _.m(o, null),
                po(o, r),
                w && w.m(o, null),
                c = !0,
                d || (u = Co(t, "mousedown", To(xo(e[15]))),
                d = !0)
            },
            p(e, [n]) {
                g.p(e, n),
                e[6] === Ie.translate && e[2] && e[9] && e[4] ? m ? (m.p(e, n),
                596 & n && fi(m, 1)) : (m = Dd(e),
                m.c(),
                fi(m, 1),
                m.m(o, i)) : m && (mi(),
                _i(m, 1, 1, (()=>{
                    m = null
                }
                )),
                hi()),
                e[6] === Ie.write ? h ? h.p(e, n) : (h = Od(e),
                h.c(),
                h.m(o, s)) : h && (h.d(1),
                h = null),
                e[7] ? f ? f.p(e, n) : (f = Rd(e),
                f.c(),
                f.m(o, a)) : f && (f.d(1),
                f = null),
                e[1] ? _ ? 2 & n && fi(_, 1) : (_ = Pd(),
                _.c(),
                fi(_, 1),
                _.m(o, r)) : _ && (mi(),
                _i(_, 1, 1, (()=>{
                    _ = null
                }
                )),
                hi()),
                e[0] ? w ? w.p(e, n) : (w = zd(e),
                w.c(),
                w.m(o, null)) : w && (w.d(1),
                w = null),
                (!c || 4 & n && l !== (l = no("dl-header " + (e[2] ? "dl-header--with-lang-selector" : "")) + " svelte-1k53si1")) && Lo(t, "class", l)
            },
            i(e) {
                c || (fi(m),
                fi(_),
                c = !0)
            },
            o(e) {
                _i(m),
                _i(_),
                c = !1
            },
            d(e) {
                e && fo(t),
                g.d(),
                m && m.d(),
                h && h.d(),
                f && f.d(),
                _ && _.d(),
                w && w.d(),
                d = !1,
                u()
            }
        }
    }
    function Fd(e, t, n) {
        let o, a, r = Un, l = ()=>(r(),
        r = Kn(f, (e=>n(8, o = e))),
        f), c = Un, d = ()=>(c(),
        c = Kn(h, (e=>n(9, a = e))),
        h);
        e.$$.on_destroy.push((()=>r())),
        e.$$.on_destroy.push((()=>c()));
        let {closeWindow: u} = t
          , {showMenu: g=!1} = t
          , {showLangSelect: m=!1} = t
          , {settings: h} = t;
        d();
        let {websiteSettings: f} = t;
        l();
        let {extensionContext: _=0} = t
          , {platformBehaviour: w=Me.default} = t
          , {textProcessingMode: v=Ie.translate} = t
          , {showSettingsIcon: $=!0} = t;
        async function b(e) {
            await h.set({
                selectedTargetLanguage: e.value,
                isTargetLanguageConfirmed: !0,
                regionalVariant: e.regionalVariant || ""
            }),
            f.update({
                translationState: s
            }),
            En({
                action: "dlRequestInlineTranslation",
                payload: {
                    requests: [{
                        text: o.originalSnippet
                    }],
                    domainName: window.location.hostname,
                    trigger: p,
                    sourceLang: o.websiteLanguage
                }
            }).then((e=>{
                f.update({
                    translationState: i,
                    translatedSnippet: e[0].text,
                    snippetDetectedSourceLang: e[0].detected_source_language,
                    websiteLanguage: e[0].detected_source_language
                })
            }
            )).catch((e=>{
                f.update({
                    translationState: i,
                    translatedSnippet: "",
                    snippetDetectedSourceLang: "",
                    error: e.message ? e.message : e
                })
            }
            ))
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
        return e.$$set = e=>{
            "closeWindow"in e && n(0, u = e.closeWindow),
            "showMenu"in e && n(1, g = e.showMenu),
            "showLangSelect"in e && n(2, m = e.showLangSelect),
            "settings"in e && d(n(3, h = e.settings)),
            "websiteSettings"in e && l(n(4, f = e.websiteSettings)),
            "extensionContext"in e && n(14, _ = e.extensionContext),
            "platformBehaviour"in e && n(5, w = e.platformBehaviour),
            "textProcessingMode"in e && n(6, v = e.textProcessingMode),
            "showSettingsIcon"in e && n(7, $ = e.showSettingsIcon)
        }
        ,
        [u, g, m, h, f, w, v, $, o, a, b, y, function() {
            let e = Qi;
            En({
                action: "dlTrackLogoClickedEvent",
                payload: {
                    extensionContext: _
                }
            }),
            v === Ie.write && (e = Yi),
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: e,
                    utmContent: "home"
                }
            })
        }
        , function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: hl.settings_page
                }
            })
        }
        , _, function(t) {
            Xo.call(this, e, t)
        }
        , e=>{
            switch (w) {
            case Me.gdocs:
                y(e.detail.selectedOption);
                break;
            case Me.default:
            default:
                b(e.detail.selectedOption)
            }
        }
        ]
    }
    class Bd extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Fd, Hd, Zn, {
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
    function Ud(e) {
        let t, n;
        return t = new Bd({
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
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                32 & n && (o.websiteSettings = e[5]),
                16 & n && (o.settings = e[4]),
                4 & n && (o.showLangSelect = e[2]),
                2 & n && (o.showMenu = e[1]),
                1 & n && (o.closeWindow = e[0]),
                64 & n && (o.extensionContext = e[6]),
                128 & n && (o.platformBehaviour = e[7]),
                256 & n && (o.textProcessingMode = e[8]),
                512 & n && (o.showSettingsIcon = e[9]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function qd(e) {
        let t, n, o, i, s, a = e[3] && Ud(e);
        const r = e[11].default
          , l = Qn(r, e, e[10], null);
        return {
            c() {
                t = wo("div"),
                a && a.c(),
                n = bo(),
                o = wo("div"),
                l && l.c(),
                Lo(o, "class", "dl-content svelte-1dtlgso"),
                Lo(t, "class", i = no(`dl-layout ${e[2] && "dl-layout--with-lang-selector"}`) + " svelte-1dtlgso"),
                Lo(t, "translate", "no")
            },
            m(e, i) {
                ho(e, t, i),
                a && a.m(t, null),
                po(t, n),
                po(t, o),
                l && l.m(o, null),
                s = !0
            },
            p(e, [o]) {
                e[3] ? a ? (a.p(e, o),
                8 & o && fi(a, 1)) : (a = Ud(e),
                a.c(),
                fi(a, 1),
                a.m(t, n)) : a && (mi(),
                _i(a, 1, 1, (()=>{
                    a = null
                }
                )),
                hi()),
                l && l.p && (!s || 1024 & o) && eo(l, r, e, e[10], s ? Jn(r, e[10], o, null) : to(e[10]), null),
                (!s || 4 & o && i !== (i = no(`dl-layout ${e[2] && "dl-layout--with-lang-selector"}`) + " svelte-1dtlgso")) && Lo(t, "class", i)
            },
            i(e) {
                s || (fi(a),
                fi(l, e),
                s = !0)
            },
            o(e) {
                _i(a),
                _i(l, e),
                s = !1
            },
            d(e) {
                e && fo(t),
                a && a.d(),
                l && l.d(e)
            }
        }
    }
    function jd(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {closeWindow: s} = t
          , {showMenu: a=!1} = t
          , {showLangSelect: r=!1} = t
          , {withHeader: l=!0} = t
          , {settings: c} = t
          , {websiteSettings: d} = t
          , {extensionContext: u} = t
          , {platformBehaviour: p=Me.default} = t
          , {textProcessingMode: g=Ie.translate} = t
          , {showSettingsIcon: m=!0} = t;
        return e.$$set = e=>{
            "closeWindow"in e && n(0, s = e.closeWindow),
            "showMenu"in e && n(1, a = e.showMenu),
            "showLangSelect"in e && n(2, r = e.showLangSelect),
            "withHeader"in e && n(3, l = e.withHeader),
            "settings"in e && n(4, c = e.settings),
            "websiteSettings"in e && n(5, d = e.websiteSettings),
            "extensionContext"in e && n(6, u = e.extensionContext),
            "platformBehaviour"in e && n(7, p = e.platformBehaviour),
            "textProcessingMode"in e && n(8, g = e.textProcessingMode),
            "showSettingsIcon"in e && n(9, m = e.showSettingsIcon),
            "$$scope"in e && n(10, i = e.$$scope)
        }
        ,
        [s, a, r, l, c, d, u, p, g, m, i, o]
    }
    class Wd extends Ti {
        constructor(e) {
            super(),
            xi(this, e, jd, qd, Zn, {
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
    function Gd(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return {
            c() {
                t = wo("div"),
                n = wo("input"),
                o = bo(),
                i = wo("div"),
                s = bo(),
                a = wo("label"),
                r = $o(e[3]),
                Lo(n, "id", e[1]),
                Lo(n, "name", e[4]),
                Lo(n, "type", "radio"),
                n.checked = e[2],
                Lo(n, "data-qa", e[6]),
                Lo(n, "class", "svelte-12100kl"),
                Lo(i, "class", "radio-icon svelte-12100kl"),
                Lo(a, "for", e[1]),
                Lo(a, "class", "svelte-12100kl"),
                Lo(t, "class", l = no(`radio ${e[5]} ${e[2] ? "radio--checked" : ""}`) + " svelte-12100kl")
            },
            m(l, u) {
                ho(l, t, u),
                po(t, n),
                ko(n, e[0]),
                po(t, o),
                po(t, i),
                po(t, s),
                po(t, a),
                po(a, r),
                c || (d = [Co(n, "change", e[10]), Co(n, "change", e[8]), Co(n, "mousedown", To(xo(e[9]))), Co(t, "click", e[7])],
                c = !0)
            },
            p(e, [o]) {
                2 & o && Lo(n, "id", e[1]),
                16 & o && Lo(n, "name", e[4]),
                4 & o && (n.checked = e[2]),
                64 & o && Lo(n, "data-qa", e[6]),
                1 & o && ko(n, e[0]),
                8 & o && Eo(r, e[3]),
                2 & o && Lo(a, "for", e[1]),
                36 & o && l !== (l = no(`radio ${e[5]} ${e[2] ? "radio--checked" : ""}`) + " svelte-12100kl") && Lo(t, "class", l)
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                c = !1,
                Gn(d)
            }
        }
    }
    function Vd(e, t, n) {
        let {id: o} = t
          , {checked: i=!1} = t
          , {label: s=""} = t
          , {value: a=""} = t
          , {name: r=""} = t
          , {cssClassName: l=""} = t
          , {dataQa: c="deepl-radio-button"} = t;
        return e.$$set = e=>{
            "id"in e && n(1, o = e.id),
            "checked"in e && n(2, i = e.checked),
            "label"in e && n(3, s = e.label),
            "value"in e && n(0, a = e.value),
            "name"in e && n(4, r = e.name),
            "cssClassName"in e && n(5, l = e.cssClassName),
            "dataQa"in e && n(6, c = e.dataQa)
        }
        ,
        [a, o, i, s, r, l, c, function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function() {
            a = this.value,
            n(0, a)
        }
        ]
    }
    class Zd extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Vd, Gd, Zn, {
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
    function Kd(e) {
        let t, n, o;
        return n = new Wd({
            props: {
                withHeader: !1,
                $$slots: {
                    default: [Xd]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment)
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                131081 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function Xd(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b = chrome.i18n.getMessage("inline_translation_setting_button_ok") + "";
        return l = new Zd({
            props: {
                name: "disable_inline_translation",
                id: de,
                value: de,
                cssClassName: "radio--with-border",
                checked: e[3] === de,
                label: chrome.i18n.getMessage("inline_translation_setting_radio_disable_per_site"),
                dataQa: "disable-per-site-radio-button"
            }
        }),
        l.$on("change", e[7]),
        l.$on("click", e[11]),
        d = new Zd({
            props: {
                name: "disable_inline_translation",
                id: ue,
                value: ue,
                cssClassName: "radio--with-border",
                checked: e[3] === ue,
                label: chrome.i18n.getMessage("inline_translation_setting_radio_disable_everywhere"),
                dataQa: "disable-everywhere-radio-button"
            }
        }),
        d.$on("change", e[7]),
        d.$on("click", e[12]),
        {
            c() {
                t = wo("div"),
                n = wo("button"),
                o = bo(),
                i = wo("div"),
                s = wo("p"),
                s.textContent = `${chrome.i18n.getMessage("inline_translation_setting_label_title_v2")}`,
                a = bo(),
                r = wo("div"),
                bi(l.$$.fragment),
                c = bo(),
                bi(d.$$.fragment),
                u = bo(),
                p = wo("div"),
                g = wo("span"),
                g.textContent = `${chrome.i18n.getMessage("inline_translation_setting_link_cancel")}`,
                m = bo(),
                h = wo("button"),
                f = $o(b),
                Lo(n, "type", "button"),
                Lo(n, "class", "close-icon svelte-1frab6c"),
                Lo(t, "class", "header svelte-1frab6c"),
                Lo(s, "class", "font-bold svelte-1frab6c"),
                Lo(r, "class", "option-container svelte-1frab6c"),
                Lo(g, "class", "link svelte-1frab6c"),
                Lo(g, "data-qa", "close-settings-popup-link"),
                Lo(h, "class", _ = no("btn btn-primary " + (e[3] ? "" : "disabled")) + " svelte-1frab6c"),
                Lo(h, "data-qa", "save-settings-change-button"),
                Lo(p, "class", "action-container svelte-1frab6c"),
                Lo(i, "class", "dl-widget svelte-1frab6c")
            },
            m(_, b) {
                ho(_, t, b),
                po(t, n),
                ho(_, o, b),
                ho(_, i, b),
                po(i, s),
                po(i, a),
                po(i, r),
                yi(l, r, null),
                po(r, c),
                yi(d, r, null),
                po(i, u),
                po(i, p),
                po(p, g),
                po(p, m),
                po(p, h),
                po(h, f),
                w = !0,
                v || ($ = [Co(n, "click", To(xo((function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )))), Co(t, "mousedown", To(xo(e[10]))), Co(g, "click", (function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )), Co(h, "click", To(xo(e[6]))), Co(i, "mousedown", To(xo(e[9])))],
                v = !0)
            },
            p(t, n) {
                e = t;
                const o = {};
                8 & n && (o.checked = e[3] === de),
                l.$set(o);
                const i = {};
                8 & n && (i.checked = e[3] === ue),
                d.$set(i),
                (!w || 8 & n && _ !== (_ = no("btn btn-primary " + (e[3] ? "" : "disabled")) + " svelte-1frab6c")) && Lo(h, "class", _)
            },
            i(e) {
                w || (fi(l.$$.fragment, e),
                fi(d.$$.fragment, e),
                w = !0)
            },
            o(e) {
                _i(l.$$.fragment, e),
                _i(d.$$.fragment, e),
                w = !1
            },
            d(e) {
                e && fo(t),
                e && fo(o),
                e && fo(i),
                Ci(l),
                Ci(d),
                v = !1,
                Gn($)
            }
        }
    }
    function Qd(e) {
        let t, n, o, i, s, a = e[4].enableInlineTranslation && Kd(e);
        return {
            c() {
                t = wo("div"),
                a && a.c(),
                Lo(t, "class", "tooltip-wrapper tooltip-wrapper--settings svelte-1frab6c"),
                Lo(t, "data-qa", "deepl-inline-settings-tooltip"),
                Lo(t, "style", e[2]),
                ii((()=>e[13].call(t)))
            },
            m(r, l) {
                ho(r, t, l),
                a && a.m(t, null),
                n = Oo(t, e[13].bind(t)),
                o = !0,
                i || (s = [io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[14])],
                i = !0)
            },
            p(e, [n]) {
                e[4].enableInlineTranslation ? a ? (a.p(e, n),
                16 & n && fi(a, 1)) : (a = Kd(e),
                a.c(),
                fi(a, 1),
                a.m(t, null)) : a && (mi(),
                _i(a, 1, 1, (()=>{
                    a = null
                }
                )),
                hi()),
                (!o || 4 & n) && Lo(t, "style", e[2])
            },
            i(e) {
                o || (fi(a),
                o = !0)
            },
            o(e) {
                _i(a),
                o = !1
            },
            d(e) {
                e && fo(t),
                a && a.d(),
                n(),
                i = !1,
                Gn(s)
            }
        }
    }
    function Yd(e, t, n) {
        let o;
        Xn(e, us, (e=>n(4, o = e)));
        let i, {closeTooltip: s} = t, {replaceElement: a} = t, r = "visibility: hidden; opacity:0; height:0;", l = "";
        function c(e) {
            n(3, l = e)
        }
        Wo((()=>{
            setTimeout((()=>{
                n(2, r = "")
            }
            ), 100)
        }
        ));
        return e.$$set = e=>{
            "closeTooltip"in e && n(0, s = e.closeTooltip),
            "replaceElement"in e && n(8, a = e.replaceElement)
        }
        ,
        e.$$.update = ()=>{
            258 & e.$$.dirty && a(i)
        }
        ,
        [s, i, r, l, o, c, function() {
            if (!l)
                return;
            switch (l) {
            case ue:
                us.set({
                    enableInlineTranslation: !1
                }),
                En({
                    action: "dlTrackSettingChanged",
                    payload: {
                        settingType: ue,
                        domainName: window.location.hostname,
                        uiFunction: ge,
                        uiLocation: P
                    }
                });
                break;
            case de:
                !function() {
                    let e = o.blacklistDomainsForReading;
                    e && !e.includes(window.location.hostname) && (e.push(window.location.hostname),
                    us.set({
                        blacklistDomainsForReading: e
                    }),
                    En({
                        action: "dlTrackSettingChanged",
                        payload: {
                            settingType: de,
                            domainName: window.location.hostname,
                            uiFunction: ge,
                            uiLocation: P
                        }
                    }))
                }()
            }
            let e = Ui(window.location.hostname, ["www."]);
            s(),
            En({
                action: "dlSendNotification",
                payload: {
                    type: D,
                    options: {
                        theme: N.green_theme,
                        currentDomain: e,
                        saveAction: l,
                        settingsPageURL: hl.settings_reading
                    }
                }
            })
        }
        , function(e) {
            n(3, l = e.currentTarget.value)
        }
        , a, function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , ()=>c(de), ()=>c(ue), function() {
            i = this.clientHeight,
            n(1, i)
        }
        , ()=>s()]
    }
    class Jd extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Yd, Qd, Zn, {
                closeTooltip: 0,
                replaceElement: 8
            })
        }
    }
    class eu extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.container = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t) {
            const {deepl_inline_ui: n} = S;
            this.shadowContainer && this.shadowContainer.childElementCount > 0 && this.cleanupDOM();
            const o = 300;
            this.shadowContainer.appendChild(this.container);
            const i = e?.top
              , s = window.innerHeight - (e?.bottom || 0);
            let a = "position: absolute; top: 0px; left: 0px; width: 100%; z-index: " + (n.z_index - 100)
              , r = `position: absolute; top: 0px; left: 0px; z-index: ${n.z_index - 100};`
              , l = e.y
              , c = e.x;
            this.shadowContainer.style.cssText = a,
            this.container.style.cssText = r,
            this.mainComponent = new Jd({
                target: this.container,
                props: {
                    closeTooltip: t,
                    replaceElement: t=>{
                        const d = i > o;
                        s > o ? l = e.y + 8 : d && (l = e.y - 30 - t - 4),
                        s < o && i < o && (a = `position: fixed; top:50%; left:50%; transform:translate(-50%,-50%); z-index: ${n.z_index - 100}; max-height:90vh;`,
                        r = `z-index: ${n.z_index - 100};`,
                        c = 0,
                        l = 0),
                        e.right < 260 ? c = e.left - 260 + 60 : e.left < 260 && (c = e.left),
                        this.container.style.top = `${parseInt(l)}px`,
                        this.container.style.left = `${parseInt(c)}px`
                    }
                }
            })
        }
        cleanupDOM() {
            this.container.remove(),
            this.shadowContainer.remove(),
            this.shadowContainer = document.createElement("div"),
            this.container = document.createElement("div"),
            this.shadow.appendChild(this.shadowContainer),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    window.customElements.define("deepl-inline-translate-settings-tooltip", eu);
    const tu = e=>({
        top: e?.selectedTop,
        bottom: window.innerHeight - e?.selectedBottom,
        right: e?.selectedRight,
        left: e?.selectedLeft
    })
      , nu = e=>{
        const {coords: t, clientHeight: n} = e
          , o = tu(t)
          , i = {
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
            if (e.isPossible)
                return e.position
    }
      , ou = ({coords: e, TOOLTIP_WIDTH: t})=>{
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
            if (e.isPossible)
                return e.position
    }
      , iu = (e,t)=>{
        const {coords: n, clientHeight: o, style: i, TOOLTIP_WIDTH: s, TRIGGER_MENU_ICON_HEIGHT: a} = t;
        switch (e) {
        case "top":
            i.top = n.y - n.height - o - 2 - a + "px",
            i.left = `${ou(t)}px`;
            break;
        case "bottom":
            i.top = `${n.y + 2 + a}px`,
            i.left = `${ou(t)}px`;
            break;
        case "left":
            i.top = `${nu(t)}px`,
            i.left = n.x - s - 2 + "px";
            break;
        case "right":
            i.top = `${nu(t)}px`,
            i.left = `${n.x + n.selectedWidth + 2}px`;
            break;
        default:
            i.top = window.pageYOffset + window.innerHeight / 2 - o / 2 + "px",
            i.left = window.innerWidth / 2 - s / 2 + "px"
        }
    }
      , su = (e,t)=>{
        const {coords: n, clientHeight: o, TOOLTIP_WIDTH: i, style: s} = t;
        switch (s.left = n.x - i - 10 + "px",
        e) {
        case "top":
            s.top = n.y - o + "px";
            break;
        case "bottom":
            s.top = n.y - n.height + "px";
            break;
        default:
            s.top = window.pageYOffset + window.innerHeight / 2 - o / 2 + "px"
        }
    }
      , au = (e,t)=>{
        const n = ru(t);
        switch (e) {
        case "top":
        case "bottom":
        case "left":
        case "right":
            return n[e];
        default:
            return !0
        }
    }
      , ru = e=>{
        const {TOOLTIP_WIDTH: t, clientHeight: n, coords: o} = e
          , i = tu(o);
        return {
            left: i.left > t,
            right: i.right > t,
            bottom: i.bottom > n,
            top: i.top > n
        }
    }
    ;
    function lu(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                n.textContent = `${chrome.i18n.getMessage("ui_inline_translation_listen_to_translation")}`,
                o = bo(),
                i = wo("button"),
                i.textContent = `${chrome.i18n.getMessage("ui_inline_translation_listen_to_original")}`,
                Lo(n, "class", "list-entry svelte-12gdpba"),
                Lo(n, "data-qa", "dl-toolbar-listener-button-target-lang"),
                No(n, "dl-entry-notAvaiable", !e[0]),
                Lo(i, "class", "list-entry svelte-12gdpba"),
                Lo(i, "data-qa", "dl-toolbar-listener-button-source-lang"),
                No(i, "dl-entry-notAvaiable", !e[1]),
                Lo(t, "class", "listen-list svelte-12gdpba"),
                Lo(t, "data-qa", "dl-toolbar-listener-element-langs")
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                po(t, o),
                po(t, i),
                r = !0,
                l || (c = [Co(n, "click", (function() {
                    Vn(e[3](e[4].translatedSnippet, e[5].selectedTargetLanguage)) && e[3](e[4].translatedSnippet, e[5].selectedTargetLanguage).apply(this, arguments)
                }
                )), Co(i, "click", (function() {
                    Vn(e[3](e[4].originalSnippet, e[4].websiteLanguage)) && e[3](e[4].originalSnippet, e[4].websiteLanguage).apply(this, arguments)
                }
                ))],
                l = !0)
            },
            p(t, [o]) {
                e = t,
                (!r || 1 & o) && No(n, "dl-entry-notAvaiable", !e[0]),
                (!r || 2 & o) && No(i, "dl-entry-notAvaiable", !e[1])
            },
            i(e) {
                r || (ii((()=>{
                    a && a.end(1),
                    s = vi(t, cr, {
                        y: -5,
                        duration: 500
                    }),
                    s.start()
                }
                )),
                r = !0)
            },
            o(e) {
                s && s.invalidate(),
                a = $i(t, cr, {
                    y: -5,
                    duration: 500
                }),
                r = !1
            },
            d(e) {
                e && fo(t),
                e && a && a.end(),
                l = !1,
                Gn(c)
            }
        }
    }
    function cu(e, t, n) {
        let o, i, s = Un, a = ()=>(s(),
        s = Kn(c, (e=>n(4, o = e))),
        c);
        Xn(e, us, (e=>n(5, i = e))),
        e.$$.on_destroy.push((()=>s()));
        let {isAvailableSelectedTargetLang: r} = t
          , {isAvailableSourceLang: l} = t
          , {websiteSettings: c} = t;
        a();
        let {listen: d=(()=>{}
        )} = t;
        return e.$$set = e=>{
            "isAvailableSelectedTargetLang"in e && n(0, r = e.isAvailableSelectedTargetLang),
            "isAvailableSourceLang"in e && n(1, l = e.isAvailableSourceLang),
            "websiteSettings"in e && a(n(2, c = e.websiteSettings)),
            "listen"in e && n(3, d = e.listen)
        }
        ,
        [r, l, c, d, o, i]
    }
    class du extends Ti {
        constructor(e) {
            super(),
            xi(this, e, cu, lu, Zn, {
                isAvailableSelectedTargetLang: 0,
                isAvailableSourceLang: 1,
                websiteSettings: 2,
                listen: 3
            })
        }
    }
    function uu(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("button"),
                Lo(t, "type", "button"),
                Lo(t, "class", "dl-replace-button svelte-37z2qn"),
                t.disabled = n = e[3] || !e[2] || e[4]
            },
            m(n, s) {
                ho(n, t, s),
                o || (i = Co(t, "click", e[5]),
                o = !0)
            },
            p(e, o) {
                12 & o && n !== (n = e[3] || !e[2] || e[4]) && (t.disabled = n)
            },
            d(e) {
                e && fo(t),
                o = !1,
                i()
            }
        }
    }
    function pu(e) {
        let t, n;
        return t = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_replace_cta"),
                multiline: !0,
                zIndex: "0",
                isEnabled: !e[3] && e[2] && !e[4],
                $$slots: {
                    default: [uu]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, [n]) {
                const o = {};
                12 & n && (o.isEnabled = !e[3] && e[2] && !e[4]),
                268 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function gu(e, t, n) {
        let o, i, s = Un, a = ()=>(s(),
        s = Kn(d, (e=>n(6, o = e))),
        d), r = Un, l = ()=>(r(),
        r = Kn(p, (e=>n(7, i = e))),
        p);
        e.$$.on_destroy.push((()=>s())),
        e.$$.on_destroy.push((()=>r()));
        let {websiteSettings: d} = t;
        a();
        let u, {settings: p} = t;
        l();
        let g = !1
          , m = o.translationState === c;
        return Wo((()=>{
            n(2, u = gt())
        }
        )),
        e.$$set = e=>{
            "websiteSettings"in e && a(n(0, d = e.websiteSettings)),
            "settings"in e && l(n(1, p = e.settings))
        }
        ,
        [d, p, u, g, m, function() {
            const e = dt().text;
            n(3, g = !0);
            const t = document.getElementsByTagName("deepl-gdocs-icon")[0];
            t && (t.applyReplacement(),
            En({
                action: "dlTrackGDocsReplaceText",
                payload: {
                    sourceLang: o.websiteLanguage,
                    targetLang: i.selectedTargetLanguage,
                    sourceLength: e.length,
                    targetLength: o.translatedSnippet.length
                }
            }))
        }
        ]
    }
    class mu extends Ti {
        constructor(e) {
            super(),
            xi(this, e, gu, pu, Zn, {
                websiteSettings: 0,
                settings: 1
            })
        }
    }
    function hu(e) {
        let t, n;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                Lo(t, "class", "tooltip-linguee svelte-f3wkxu"),
                Lo(t, "style", `z-index: ${e[15].z_index}`)
            },
            m(o, i) {
                ho(o, t, i),
                po(t, n),
                n.innerHTML = e[13]
            },
            p(e, t) {
                8192 & t[0] && (n.innerHTML = e[13])
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function fu(e) {
        let t, n, o, i, s;
        return n = new ud({
            props: {
                tooltip: e[12],
                $$slots: {
                    default: [wu]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("fragment"),
                bi(n.$$.fragment)
            },
            m(a, r) {
                ho(a, t, r),
                yi(n, t, null),
                o = !0,
                i || (s = [Co(t, "mouseover", e[21]), Co(t, "mouseleave", e[25])],
                i = !0)
            },
            p(e, t) {
                const o = {};
                4096 & t[0] && (o.tooltip = e[12]),
                3841 & t[0] | 1 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                i = !1,
                Gn(s)
            }
        }
    }
    function _u(e) {
        let t, n;
        return t = new du({
            props: {
                websiteSettings: e[0],
                isAvailableSelectedTargetLang: e[10],
                isAvailableSourceLang: e[11],
                listen: e[17]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n[0] && (o.websiteSettings = e[0]),
                1024 & n[0] && (o.isAvailableSelectedTargetLang = e[10]),
                2048 & n[0] && (o.isAvailableSourceLang = e[11]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function wu(e) {
        let t, n, o, i, s, a, r = e[9] && _u(e);
        return {
            c() {
                t = wo("button"),
                t.innerHTML = '<span class="dl-icon dl-icon-listen svelte-f3wkxu"></span>',
                n = bo(),
                r && r.c(),
                o = yo(),
                Lo(t, "type", "button"),
                Lo(t, "class", "dl-btn svelte-f3wkxu"),
                Lo(t, "data-qa", "dl-toolbar-listener-button"),
                No(t, "dl-btn-active", e[8]),
                No(t, "dl-btn-hovered", e[9])
            },
            m(l, c) {
                ho(l, t, c),
                ho(l, n, c),
                r && r.m(l, c),
                ho(l, o, c),
                i = !0,
                s || (a = Co(t, "click", e[18]),
                s = !0)
            },
            p(e, n) {
                (!i || 256 & n[0]) && No(t, "dl-btn-active", e[8]),
                (!i || 512 & n[0]) && No(t, "dl-btn-hovered", e[9]),
                e[9] ? r ? (r.p(e, n),
                512 & n[0] && fi(r, 1)) : (r = _u(e),
                r.c(),
                fi(r, 1),
                r.m(o.parentNode, o)) : r && (mi(),
                _i(r, 1, 1, (()=>{
                    r = null
                }
                )),
                hi())
            },
            i(e) {
                i || (fi(r),
                i = !0)
            },
            o(e) {
                _i(r),
                i = !1
            },
            d(e) {
                e && fo(t),
                e && fo(n),
                r && r.d(e),
                e && fo(o),
                s = !1,
                a()
            }
        }
    }
    function vu(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                t.innerHTML = '<span class="dl-icon dl-icon-copy svelte-f3wkxu"></span>',
                Lo(t, "type", "button"),
                Lo(t, "class", "dl-btn svelte-f3wkxu"),
                Lo(t, "data-qa", "dl-toolbar-copy-button"),
                No(t, "dl-btn-active", e[14])
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = [Co(t, "click", e[19]), Co(t, "mouseleave", e[20])],
                n = !0)
            },
            p(e, n) {
                16384 & n[0] && No(t, "dl-btn-active", e[14])
            },
            d(e) {
                e && fo(t),
                n = !1,
                Gn(o)
            }
        }
    }
    function $u(e) {
        let t, n;
        return t = new mu({
            props: {
                websiteSettings: e[0],
                settings: us
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n[0] && (o.websiteSettings = e[0]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function bu(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y, C, x, T = !e[3] || !e[2]() || !e[5] || e[6], L = T && hu(e), E = (e[10] || e[11]) && fu(e);
        $ = new ud({
            props: {
                tooltip: chrome.i18n.getMessage(e[14] ? "ui_inline_translation_copied" : "ui_inline_translation_copy"),
                $$slots: {
                    default: [vu]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let k = e[7] === Me.gdocs && $u(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("button"),
                i = wo("span"),
                i.textContent = `${chrome.i18n.getMessage("ui_inline_translation_see_alternatives_v2")}`,
                s = bo(),
                a = wo("span"),
                r = bo(),
                l = wo("fragment"),
                c = wo("div"),
                d = wo("div"),
                d.textContent = `${chrome.i18n.getMessage("ui_inline_translation_dictionary")}`,
                u = bo(),
                p = wo("div"),
                g = bo(),
                m = wo("div"),
                f = bo(),
                L && L.c(),
                _ = bo(),
                w = wo("div"),
                E && E.c(),
                v = bo(),
                bi($.$$.fragment),
                b = bo(),
                k && k.c(),
                Lo(a, "class", "icon icon-external-link svelte-f3wkxu"),
                Lo(o, "type", "button"),
                Lo(o, "class", "link svelte-f3wkxu"),
                Lo(n, "class", "dl-link-container"),
                Lo(d, "class", "dict-text svelte-f3wkxu"),
                Lo(p, "class", "img_book svelte-f3wkxu"),
                No(p, "shown-dict", e[4] && e[3] && e[5]),
                Lo(m, "class", "img_arrow svelte-f3wkxu"),
                No(m, "shown-dict", e[4] && e[3] && e[5]),
                Lo(c, "class", h = "dl-dictionary " + (e[3] && e[2]() && e[5] && !e[6] ? "" : "disable") + " " + (e[4] && e[3] ? "shown-dict" : "") + " svelte-f3wkxu"),
                Lo(c, "data-qa", "dl-toolbar-dictionary-button"),
                So(l, "position", "relative"),
                Lo(w, "class", "dl-btn-group svelte-f3wkxu"),
                Lo(t, "class", "dl-toolbar svelte-f3wkxu")
            },
            m(h, T) {
                ho(h, t, T),
                po(t, n),
                po(n, o),
                po(o, i),
                po(o, s),
                po(o, a),
                po(t, r),
                po(t, l),
                po(l, c),
                po(c, d),
                po(c, u),
                po(c, p),
                po(c, g),
                po(c, m),
                po(l, f),
                L && L.m(l, null),
                po(t, _),
                po(t, w),
                E && E.m(w, null),
                po(w, v),
                yi($, w, null),
                po(w, b),
                k && k.m(w, null),
                y = !0,
                C || (x = [Co(o, "click", e[16]), Co(c, "click", (function() {
                    Vn(e[1]) && e[1].apply(this, arguments)
                }
                )), Co(c, "mouseenter", e[22])],
                C = !0)
            },
            p(t, n) {
                e = t,
                (!y || 56 & n[0]) && No(p, "shown-dict", e[4] && e[3] && e[5]),
                (!y || 56 & n[0]) && No(m, "shown-dict", e[4] && e[3] && e[5]),
                (!y || 124 & n[0] && h !== (h = "dl-dictionary " + (e[3] && e[2]() && e[5] && !e[6] ? "" : "disable") + " " + (e[4] && e[3] ? "shown-dict" : "") + " svelte-f3wkxu")) && Lo(c, "class", h),
                108 & n[0] && (T = !e[3] || !e[2]() || !e[5] || e[6]),
                T ? L ? L.p(e, n) : (L = hu(e),
                L.c(),
                L.m(l, null)) : L && (L.d(1),
                L = null),
                e[10] || e[11] ? E ? (E.p(e, n),
                3072 & n[0] && fi(E, 1)) : (E = fu(e),
                E.c(),
                fi(E, 1),
                E.m(w, v)) : E && (mi(),
                _i(E, 1, 1, (()=>{
                    E = null
                }
                )),
                hi());
                const o = {};
                16384 & n[0] && (o.tooltip = chrome.i18n.getMessage(e[14] ? "ui_inline_translation_copied" : "ui_inline_translation_copy")),
                16384 & n[0] | 1 & n[1] && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                $.$set(o),
                e[7] === Me.gdocs ? k ? (k.p(e, n),
                128 & n[0] && fi(k, 1)) : (k = $u(e),
                k.c(),
                fi(k, 1),
                k.m(w, null)) : k && (mi(),
                _i(k, 1, 1, (()=>{
                    k = null
                }
                )),
                hi())
            },
            i(e) {
                y || (fi(E),
                fi($.$$.fragment, e),
                fi(k),
                y = !0)
            },
            o(e) {
                _i(E),
                _i($.$$.fragment, e),
                _i(k),
                y = !1
            },
            d(e) {
                e && fo(t),
                L && L.d(),
                E && E.d(),
                Ci($),
                k && k.d(),
                C = !1,
                Gn(x)
            }
        }
    }
    function yu(e, t, n) {
        let o, i, s = Un, a = ()=>(s(),
        s = Kn(r, (e=>n(23, o = e))),
        r);
        Xn(e, us, (e=>n(24, i = e))),
        e.$$.on_destroy.push((()=>s()));
        let {websiteSettings: r} = t;
        a();
        let l, c, d, u, {switchVisibilityDictionary: p} = t, {isSingleWord: g} = t, {dictionaryHTML: m} = t, {showDictionary: h=!1} = t, {langPair: f} = t, {errorMessageDict: _} = t, {platformBehaviour: w=Me.default} = t, v = !1, $ = !1;
        const {deepl_inline_ui: b} = S;
        let x = !1;
        function T() {
            En({
                action: "dlStopSpeech"
            }),
            n(8, d = !1)
        }
        function L(e) {
            try {
                En({
                    action: "dlTrackInlineListen",
                    payload: e
                })
            } catch (e) {
                console.error(e)
            }
        }
        async function E(e, t, o) {
            if ("dlVoiceOverStopped" === e.action)
                n(8, d = !1),
                o()
        }
        function k(e) {
            try {
                En({
                    action: "dlTrackVoiceOverStops",
                    payload: e
                })
            } catch (e) {
                console.error(e)
            }
        }
        chrome.runtime.onMessage.addListener(E),
        Go((()=>{
            d && k({
                targetLang: i.selectedTargetLanguage,
                targetLength: o.translatedSnippet.length,
                triggerType: C,
                nicheIntegration: w
            }),
            T(),
            chrome.runtime.onMessage.removeListener(E)
        }
        ));
        return e.$$set = e=>{
            "websiteSettings"in e && a(n(0, r = e.websiteSettings)),
            "switchVisibilityDictionary"in e && n(1, p = e.switchVisibilityDictionary),
            "isSingleWord"in e && n(2, g = e.isSingleWord),
            "dictionaryHTML"in e && n(3, m = e.dictionaryHTML),
            "showDictionary"in e && n(4, h = e.showDictionary),
            "langPair"in e && n(5, f = e.langPair),
            "errorMessageDict"in e && n(6, _ = e.errorMessageDict),
            "platformBehaviour"in e && n(7, w = e.platformBehaviour)
        }
        ,
        e.$$.update = ()=>{
            if (25166592 & e.$$.dirty[0] && (i.selectedTargetLanguage && En({
                action: "dlGetSupportedVoices"
            }).then((e=>{
                n(10, l = e.includes(["EN-US", "EN-GB"].includes(i.selectedTargetLanguage) ? "EN" : ["PT-PT", "PT-BR"].includes(i.selectedTargetLanguage) ? "PT" : i.selectedTargetLanguage)),
                n(11, c = e.includes(o.websiteLanguage))
            }
            )),
            !v && d ? setTimeout((()=>{
                n(12, $ = chrome.i18n.getMessage("ui_inline_translation_listen_stop"))
            }
            ), 1e3) : n(12, $ = !1)),
            100 & e.$$.dirty[0] && (_ ? n(13, u = _) : g() ? n(13, u = f ? chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary") : chrome.i18n.getMessage("ui_inline_translation_unavailable_lang_pair")) : n(13, u = chrome.i18n.getMessage("ui_inline_translation_translate_only_one_word"))),
            16 & e.$$.dirty[0] && h)
                try {
                    En({
                        action: "dlTrackOpenDictionarySection",
                        payload: {}
                    })
                } catch (e) {
                    console.log(e)
                }
        }
        ,
        [r, p, g, m, h, f, _, w, d, v, l, c, $, u, x, b, function() {
            const e = {};
            o && i && (e.sourceLang = o.websiteLanguage,
            e.targetLang = i.selectedTargetLanguage,
            e.textToShare = o.originalSnippet),
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Xi,
                    ...e
                }
            });
            try {
                En({
                    action: "dlTrackUiAction",
                    payload: {
                        uiAction: re,
                        nicheIntegration: w
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }
        , async function(e, t) {
            d || (En({
                action: "dlTextToSpeech",
                payload: {
                    text: e,
                    lang: t
                }
            }),
            n(8, d = !0),
            L({
                targetLang: i.selectedTargetLanguage,
                targetLength: o.translatedSnippet.length,
                actionType: me,
                nicheIntegration: w
            }),
            n(9, v = !1))
        }
        , function() {
            d ? (T(),
            n(8, d = !1),
            k({
                targetLang: i.selectedTargetLanguage,
                targetLength: o.translatedSnippet.length,
                triggerType: y,
                nicheIntegration: w
            }),
            L({
                targetLang: i.selectedTargetLanguage,
                targetLength: o.translatedSnippet.length,
                actionType: he,
                nicheIntegration: w
            })) : n(9, v = !0)
        }
        , function() {
            navigator.clipboard.writeText(o.translatedSnippet).then((function() {
                n(14, x = !0)
            }
            ), (function(e) {
                console.error(e)
            }
            )),
            function(e) {
                try {
                    En({
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
        }
        , function() {
            setTimeout((()=>{
                n(14, x = !1)
            }
            ), 300)
        }
        , function() {
            d || n(9, v = !0)
        }
        , function() {
            if (!m || !g())
                try {
                    En({
                        action: "dlTrackDisabledDictionaryHover",
                        payload: {}
                    })
                } catch (e) {
                    console.log(e)
                }
        }
        , o, i, ()=>n(9, v = !1)]
    }
    class Cu extends Ti {
        constructor(e) {
            super(),
            xi(this, e, yu, bu, Zn, {
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
    function xu(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = wo("div"),
                n = wo("button"),
                n.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_cancel")}`,
                o = bo(),
                i = wo("button"),
                i.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_accept")}`,
                Lo(n, "class", "btn-secondary svelte-asbnol"),
                Lo(i, "class", "btn-primary svelte-asbnol"),
                Lo(t, "class", "dl-toolbar svelte-asbnol")
            },
            m(r, l) {
                ho(r, t, l),
                po(t, n),
                po(t, o),
                po(t, i),
                s || (a = [Co(n, "click", e[1]), Co(i, "click", e[0])],
                s = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                s = !1,
                Gn(a)
            }
        }
    }
    function Tu(e, t, n) {
        let {onClose: o} = t;
        return e.$$set = e=>{
            "onClose"in e && n(2, o = e.onClose)
        }
        ,
        [()=>{
            const e = document.getElementsByTagName("deepl-gdocs-icon")[0];
            e && (e.applyReplacement(),
            e.trackDeeplWriteInsertCopy()),
            o()
        }
        , ()=>{
            const e = document.getElementsByTagName("deepl-gdocs-icon")[0];
            e && e.trackDeeplWriteDiscardCopy(),
            o()
        }
        , o]
    }
    class Lu extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Tu, xu, Zn, {
                onClose: 2
            })
        }
    }
    function Eu(e) {
        let t, n, o, i, s, a = JSON.stringify(e[1](), void 0, 2) + "";
        return {
            c() {
                t = wo("p"),
                n = $o(e[0]),
                o = bo(),
                i = wo("pre"),
                s = $o(a),
                Lo(i, "class", "debug-settings svelte-mu7va1")
            },
            m(e, a) {
                ho(e, t, a),
                po(t, n),
                ho(e, o, a),
                ho(e, i, a),
                po(i, s)
            },
            p(e, [t]) {
                1 & t && Eo(n, e[0]),
                2 & t && a !== (a = JSON.stringify(e[1](), void 0, 2) + "") && Eo(s, a)
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                e && fo(o),
                e && fo(i)
            }
        }
    }
    function ku(e, t, n) {
        let {headline: o="JSON block"} = t
          , {jsonData: i=(()=>{}
        )} = t;
        return e.$$set = e=>{
            "headline"in e && n(0, o = e.headline),
            "jsonData"in e && n(1, i = e.jsonData)
        }
        ,
        [o, i]
    }
    class Su extends Ti {
        constructor(e) {
            super(),
            xi(this, e, ku, Eu, Zn, {
                headline: 0,
                jsonData: 1
            })
        }
    }
    function Mu(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("div"),
                n = wo("style"),
                n.textContent = '.lmt__dict {\n  background-color: white;\n  text-align: left;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  position: relative;\n  font-weight: 400;\n  font-family: "Open Sans", sans-serif;\n  padding: 0 24px;\n  border: 0;\n  width: 100%;\n  font-size: 14px;\n}\n.lmt__dict #dictionary .dict_headline_for_0 {\n  display: none;\n}\n.lmt__dict #dictionary .dict_headline_for_1 {\n  display: none;\n}\n.lmt__dict h1 {\n  font-family: "Open Sans", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.1;\n  font-size: 15px;\n}\n.lmt__dict h1.didyoumean {\n  display: none;\n}\n.lmt__dict #spelling_message_pane {\n  display: none;\n}\n.lmt__dict a {\n  text-decoration: none;\n  pointer-events: none;\n  font-family: "Open Sans", sans-serif;\n  color: #333;\n}\n.lmt__dict.lmt--hidden {\n  display: none;\n}\n.lmt__dict .semantic_field,\n.lmt__dict .sem,\n.lmt__dict .othertempora {\n  font-style: italic;\n  color: #999;\n  position: relative;\n  font-size: 12px;\n}\n.lmt__dict noindex:-o-prefocus,\n.lmt__dict .semantic_field,\n.lmt__dict .sem {\n  position: static;\n  z-index: 1;\n}\n.lmt__dict .placeholder {\n  font-size: smaller;\n}\n.lmt__dict #dictionary,\n.lmt__dict .dictionary {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 15px;\n  color: #999;\n  line-height: 1.35em;\n  position: relative;\n}\n.lmt__dict #dictionary .inexact {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 13px;\n  color: #999;\n  margin-top: 18px;\n}\n.lmt__dict .lemma {\n  vertical-align: top;\n  margin: 10px 0 25px 0;\n}\n.lmt__dict .lemma.last {\n  background: none;\n}\n.lmt__dict .lemma_desc {\n  padding: 0 0 10px 0;\n}\n.lmt__dict #dictionary h2.lemma_desc {\n  margin: 0px;\n}\n.lmt__dict .lemma_content {\n  padding: 0 0 0 0;\n  position: relative;\n  margin-bottom: 8px;\n}\n.lmt__dict .translation_group {\n  position: relative;\n  padding-top: 8px;\n}\n.lmt__dict .lemma_content .translation_group_line.with_pie {\n  padding-left: 18px;\n  text-indent: -18px;\n}\n.lmt__dict .exact .translation.featured {\n  margin-bottom: 8px;\n  clear: both;\n}\n.lmt__dict .translation_desc {\n  padding: 2px 0 0 0;\n  display: inline-block;\n}\n.lmt__dict h3.translation_desc {\n  margin: 0;\n  font-weight: 400;\n}\n.lmt__dict #dictionary h3.translation_desc {\n  margin-bottom: 0;\n}\n.lmt__dict .group_line .translation_desc {\n  text-indent: 0;\n  display: inline;\n  padding: 2px 10px 1px 0;\n  padding-left: 0;\n}\n.lmt__dict .comment {\n  margin: 15px 0 15px 0;\n  padding: 0 0 0 10px;\n}\n.lmt__dict .lemma_content {\n  padding-left: 40px;\n}\n.lmt__dict .meaninggroup_description_inner {\n  margin-left: -20px;\n  width: 20px;\n  display: inline-block;\n}\n.lmt__dict .meaninggroup_descriptions {\n  margin-left: -20px;\n  display: inline-block;\n}\n.lmt__dict .tag_t {\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .tag_s {\n  color: #006494;\n  font-style: normal;\n}\n.lmt__dict .tag_lemma {\n  font-size: 16px;\n  font-weight: 400;\n  color: #006494;\n  font-style: normal;\n}\n.lmt__dict .tag_lemma a {\n  color: #006494;\n}\n.lmt__dict .inexact .tag_lemma {\n  font-size: 14px;\n}\n.lmt__dict .tag_type,\n.lmt__dict .tag_wordtype {\n  font-style: italic;\n  font-size: 14px;\n  margin-right: 2px;\n  color: #999;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_type,\n.lmt__dict .inexact .tag_wordtype,\n.lmt__dict .example_lines .tag_type,\n.lmt__dict .example_lines .tag_wordtype,\n.lmt__dict .tag_forms .tag_wordtype {\n  font-size: 14px;\n}\n.lmt__dict .tag_wordtype {\n  font-size: 14px;\n  margin-left: 0;\n}\n.lmt__dict .tag_area,\n.lmt__dict .tag_usage {\n  color: #999;\n  font-style: italic;\n  font-size: 14px;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_area,\n.lmt__dict .inexact .tag_usage,\n.lmt__dict .inexact .tag_forms {\n  font-size: 10px;\n}\n.lmt__dict .tag_c {\n  color: #999;\n  font-size: 15px;\n  font-style: italic;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_c {\n  font-size: 13px;\n}\n.lmt__dict .tag_forms {\n  font-size: 13px;\n  color: #999;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_forms {\n  display: none;\n}\n.lmt__dict .lemma_desc .tag_forms {\n  display: none;\n  padding-left: 3px;\n}\n.lmt__dict .tag_trans_src_context {\n  color: #006494;\n  font-style: normal;\n  padding-right: 10px;\n  font-size: 14px;\n}\n.lmt__dict .tag_trans_src_context:before {\n  content: "(";\n}\n.lmt__dict .tag_trans_src_context:after {\n  content: ")";\n}\n.lmt__dict .tag_lemma_context {\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 14px;\n}\n.lmt__dict .inexact .tag_lemma_context {\n  padding-left: 5px;\n  font-size: 13px;\n}\n.lmt__dict .tag_lemma_context .placeholder {\n  font-size: inherit;\n}\n.lmt__dict #dictionary .tag_forms h3 {\n  display: inline;\n  padding-right: 10px;\n  font-size: 12px;\n  margin: 0 0 0 0;\n  color: #999;\n}\n.lmt__dict .tag_formname {\n  color: #999;\n}\n.lmt__dict .tag_c,\n.lmt__dict .tag_t,\n.lmt__dict .tag_s,\n.lmt__dict .tag_area,\n.lmt__dict .tag_usage {\n  font-size: 14px;\n}\n.lmt__dict .tag_trans {\n  font-size: 14px;\n  color: #333;\n  font-style: normal;\n  display: inline-block;\n  min-height: 20px;\n}\n.lmt__dict .inexact .tag_trans {\n  font-size: 14px;\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .inexact .tag_trans a {\n  color: #333;\n}\n.lmt__dict .exact .tag_trans a.featured {\n  line-height: 24px;\n}\n.lmt__dict .meaninggroup_notfirst {\n  padding-top: 8px;\n}\n.lmt__dict .meaninggroup_editing.meaninggroup_notfirst {\n  padding-top: 20px;\n}\n.lmt__dict .meaning_class_header {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n.lmt__dict .meaninggroup_outer_list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: inline;\n}\n.lmt__dict .meaninggroup_inner_list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.lmt__dict .meaninggroup_inner_list li {\n  display: inline;\n}\n.lmt__dict .meaninggroup_problematic .meaninggroup_description {\n  color: #e00;\n}\n.lmt__dict .meaninggroup_problematic .meaninggroup_description_index {\n  color: #e00;\n}\n.lmt__dict .isForeignTerm .meaninggroup_synonym,\n.lmt__dict .isForeignTerm .meaninggroup_valency,\n.lmt__dict .isForeignTerm .meaninggroup_valency,\n.lmt__dict .meaninggroup_descriptions {\n  color: #333;\n}\n.lmt__dict .isMainTerm .meaninggroup_synonym,\n.lmt__dict .isMainTerm .meaninggroup_valency,\n.lmt__dict .isMainTerm .meaninggroup_valency,\n.lmt__dict .meaninggroup_descriptions {\n  color: #265182;\n}\n.lmt__dict .meaninggroup_synonym {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_preliminary {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n  color: green;\n}\n.lmt__dict .meaninggroup_descriptions {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_valency {\n  font-size: 15px;\n  font-weight: 400;\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_usage {\n  color: #999;\n}\n.lmt__dict .meaninggroup_areas {\n  color: #999;\n  font-style: italic;\n}\n.lmt__dict .meaninggroup_editing .meaninggroup_descriptions,\n.lmt__dict .meaninggroup_editing .meaninggroup_synonym,\n.lmt__dict .meaninggroup_editing .meaninggroup_usage,\n.lmt__dict .meaninggroup_editing .meaninggroup_synonym,\n.lmt__dict .meaninggroup_editing .meaninggroup_description_index,\n.lmt__dict .meaninggroup_editing .meaninggroup_preliminary {\n  font-weight: 600;\n}\n.lmt__dict .meaninggroups_remark {\n  margin-left: -20px;\n}\n.lmt__dict .inflectioninfo,\n.lmt__dict .inflectioninfo .tag_c {\n  color: #006494;\n  font-style: normal;\n  font-size: 13px;\n}\n.lmt__dict .isForeignTerm .inflectioninfo {\n  color: #333;\n}\n.lmt__dict .isForeignTerm .tag_lemma,\n.lmt__dict .isForeignTerm .tag_lemma a,\n.lmt__dict .isForeignTerm .tag_s,\n.lmt__dict .isForeignTerm .tag_s a,\n.lmt__dict .isForeignTerm .tag_trans_src_context {\n  color: #333;\n}\n.lmt__dict .isForeignTerm .tag_trans,\n.lmt__dict .isForeignTerm .tag_trans a,\n.lmt__dict .isForeignTerm .tag_t,\n.lmt__dict .isForeignTerm .tag_t a,\n.lmt__dict .isForeignTerm .tag_trans {\n  color: #006494;\n}\n.lmt__dict .spell_suggestion.isForeignTerm,\n.lmt__dict .spell_suggestion.isForeignTerm .corrected {\n  color: #333;\n}\n.lmt__dict .spell_suggestion,\n.lmt__dict .spell_suggestion .corrected {\n  color: #006494;\n}\n.lmt__dict .line .translation {\n  display: inline-block;\n  line-height: 1em;\n  text-indent: 0;\n}\n.lmt__dict .line.inflectioninfo {\n  display: none;\n}\n.lmt__dict .sep {\n  font-size: 12px;\n  padding-right: 10px;\n  color: #6e6e6e;\n}\n.lmt__dict .tag_forms .sep {\n  padding-left: 5px;\n}\n.lmt__dict .inexact .sep {\n  font-size: 9px;\n}\n.lmt__dict .dash {\n  padding-right: 10px;\n}\n.lmt__dict .exact .lemma_desc .dash {\n  display: none;\n}\n.lmt__dict .lemma_desc .dash {\n  font-size: 14px;\n  font-style: normal;\n  color: #999;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.lmt__dict .inexact .lemma_desc {\n  padding: 0 0 0 0;\n}\n.lmt__dict .inexact .translation_lines,\n.lmt__dict .inexact .translation_group,\n.lmt__dict .inexact .line {\n  display: inline;\n}\n.lmt__dict .inexact .lemma_content {\n  display: inline;\n}\n.lmt__dict .inexact .lemma_desc,\n.lmt__dict #dictionary .inexact h2.lemma_desc {\n  display: inline-block;\n  padding-right: 0;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n}\n.lmt__dict .inexact .lemma_content {\n  padding-left: 0;\n}\n.lmt__dict .inexact .lemma {\n  margin: 1px 0 0 0;\n  text-indent: -10px;\n  padding-left: 20px;\n}\n.lmt__dict .inexact div.singleline {\n  text-indent: 0;\n  padding-left: 0;\n}\n.lmt__dict #dictionary > .expandable > .versionShort > .example_lines {\n  padding-bottom: 15px;\n}\n.lmt__dict #dictionary h3 {\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.lmt__dict a.audio {\n  display: none;\n  position: relative;\n  cursor: pointer;\n  top: 3px;\n  width: 19px;\n  height: 17px;\n  background-position: -40px -38px;\n  opacity: 0.5;\n}\n.lmt__dict .ie7 a.audio,\n.lmt__dict .ie8 a.audio {\n  filter: alpha(opacity=50);\n  background-position: -120px -92px;\n}\n.lmt__dict .inexact a.audio {\n  display: none;\n}\n.lmt__dict .inexact .lemma_desc a.audio,\n.lmt__dict .inexact .translation.expanded a.audio,\n.lmt__dict .inexact .translation.contracting a.audio {\n  display: inline-block;\n}\n.lmt__dict .exact .tag_lemma a.audio {\n  top: 2px;\n}\n.lmt__dict .mouse_device a.audio {\n  opacity: 0.45;\n}\n.lmt__dict .mouse_device a.audio:hover,\n.lmt__dict .mouse_device a.expand_i:hover {\n  opacity: 1;\n}\n.lmt__dict .grammar_info {\n  position: relative;\n  top: -4px;\n  vertical-align: middle;\n  font-size: 0.7em;\n  color: #999;\n  font-style: italic;\n  margin-left: 1px;\n  display: inline-block;\n  text-indent: 0;\n}\n.lmt__dict .exact .grammar_info {\n  top: -5px;\n  margin-left: 2px;\n}\n.lmt__dict #dictionary h2,\n.lmt__dict #dictionary h3 {\n  color: #333;\n  font-weight: 400;\n}\n.lmt__dict #dictionary h2 {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.lmt__dict #dictionary .tag_forms h2 {\n  font-size: 14px;\n}\n.lmt__dict .translation_row.singleline {\n  height: 20px;\n}\n.lmt__dict .singleline {\n  position: relative;\n  padding-right: 20px;\n  height: 20px;\n  overflow: hidden;\n}\n.lmt__dict .singleline > * {\n  line-height: 50px;\n  position: relative;\n  top: -15px;\n}\n.lmt__dict .ie8 .singleline > * {\n  top: -13px;\n  height: 22px;\n}\n.lmt__dict .singleline .tag_s {\n  white-space: nowrap;\n}\n.lmt__dict .expandable {\n  position: relative;\n}\n.lmt__dict .example_lines .expandM,\n.lmt__dict .inexact .expandM {\n  display: block;\n  height: 15px;\n  padding-left: 0px;\n  opacity: 0.7;\n}\n.lmt__dict a.expand_i {\n  width: 17px;\n  height: 17px;\n  position: relative;\n  top: 4px;\n  display: inline-block;\n  background-position: -20px -36px;\n  cursor: pointer;\n  opacity: 0.55;\n  filter: alpha(opacity=55);\n}\n.lmt__dict .translation a.expand_i {\n  background-color: white;\n}\n.lmt__dict .example {\n  padding-left: 45px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n.lmt__dict .expertmode .example {\n  padding-left: 50px;\n}\n.lmt__dict .example .tag_e {\n  display: block;\n  position: relative;\n  max-width: 700px;\n  line-height: 1.1em;\n}\n.lmt__dict .example .tag_s {\n  width: 47%;\n  float: left;\n}\n.lmt__dict .example .tag_t {\n  width: 50%;\n  float: right;\n}\n.lmt__dict .example .tag_e_end {\n  display: block;\n  clear: both;\n}\n.lmt__dict .example .dash {\n  display: none;\n}\n.lmt__dict #soundFlags {\n  display: none;\n}\n.lmt__dict .hidden,\n.lmt__dict #lingueecontent .hidden,\n.lmt__dict #attribution.hidden {\n  display: none;\n}\n.lmt__dict .notascommon {\n  display: block;\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 1.4em;\n}\n.lmt__dict .tag_wordtype {\n  display: inline-block;\n}\n.lmt__dict .tag_forms {\n  display: inline-block;\n}\n.lmt__dict .inexact .lemma {\n  padding-left: 20px;\n}\n.lmt__dict .example_lines > .expandable > .versionshort > .expandM {\n  margin-left: 0;\n}\n.lmt__dict .source_url_spacer {\n  margin-left: 0;\n}\n.lmt__dict .example {\n  padding-left: 30px;\n}\n.lmt__dict .translation_desc {\n  padding-bottom: 0;\n}\n.lmt__dict .translation a.expand_i,\n.lmt__dict .translation a.audio,\n.lmt__dict .inexact .lemma_desc a.audio,\n.lmt__dict .inexact .translation.expanded a.audio {\n  display: none;\n}\n.lmt__dict .inexact .lemma {\n  padding-left: 20px;\n}\n.lmt__dict .example_lines > .expandable > .versionshort > .expandM {\n  margin-left: 0;\n}\n.lmt__dict .source_url_spacer {\n  margin-left: 0;\n}\n.lmt__dict .example {\n  padding-left: 24px;\n}\n.lmt__dict .lemma_desc {\n  margin: 0;\n}\n.lmt__dict .lemma {\n  margin-top: 0;\n}\n.lmt__dict .source {\n  font-size: 24px;\n  color: #d0d0d0;\n}\n.lmt__dict .source .tag_lemma {\n  font-size: 20px;\n  font-weight: 400;\n}\n.lmt__dict .lemma_content {\n  padding-left: 20px;\n  padding-right: 0px;\n}\n.lmt__dict .source .tag_s,\n.lmt__dict .source .tag_usage,\n.lmt__dict .source .tag_formname,\n.lmt__dict .source .formlink,\n.lmt__dict .source .tag_forms,\n.lmt__dict .source .grammar_info {\n  color: #999 !important;\n}\n.lmt__dict .translation:first-of-type h3 {\n  line-height: 1;\n}\n.lmt__dict .translation:first-of-type h3 .dictlink {\n  font-size: 20px;\n}\n.lmt__dict .source {\n  position: relative;\n}\n.lmt__dict .sourceHint {\n  display: none;\n}\n.lmt__dict .notascommon {\n  color: #aaa;\n}\n.lmt__dict .tag_type,\n.lmt__dict .tag_wordtype,\n.lmt__dict .source .tag_s,\n.lmt__dict .source .tag_usage,\n.lmt__dict .source .tag_formname,\n.lmt__dict .source .tag_wordtype,\n.lmt__dict .source .formlink,\n.lmt__dict .source .tag_forms,\n.lmt__dict .source .grammar_info,\n.lmt__dict .tag_c {\n  font-style: normal;\n}\n.lmt__dict .tag_forms {\n  font-style: normal;\n}\n.lmt__dict .tag_forms .tag_s {\n  padding-left: 0px;\n  margin-right: -19px;\n}\n\n#LMT__dict_right {\n  margin-left: 59px;\n}\n\n@keyframes lmt__dict__appear_animation {\n  0% {\n    transform: scale(0.99) translateY(-5px);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.lmt__dict.lmt--is-dict-ready {\n  display: block;\n}\n.lmt__dict .lmt__dict__empty_state {\n  display: none;\n  padding: 16px 24px;\n  color: #6e6e6e;\n  font-size: 16px;\n}\n.lmt__dict #result_container,\n.lmt__dict #wikipedia-body,\n.lmt__dict #wikipedia-header,\n.lmt__dict .copyrightLineOuter,\n.lmt__dict .openTriangle,\n.lmt__dict .expandM {\n  display: none !important;\n}',
                o = bo(),
                i = new Ro(!1),
                Lo(n, "lang", "scss"),
                i.a = null
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                po(t, o),
                i.m(e[0], t)
            },
            p(e, [t]) {
                1 & t && i.p(e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Iu(e, t, n) {
        let {html: o} = t;
        return e.$$set = e=>{
            "html"in e && n(0, o = e.html)
        }
        ,
        [o]
    }
    class Du extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Iu, Mu, Zn, {
                html: 0
            })
        }
    }
    function Ou(e) {
        return e && function(e) {
            return e.replace(/./gm, (function(e) {
                return e.match(/[a-z0-9\s]+/i) ? e : "&#" + e.charCodeAt(0) + ";"
            }
            ))
        }(e).replaceAll("\n", "<br />")
    }
    const Nu = new Set(["BG", "CS", "DA", "DE", "EL", "EN", "ES", "ET", "FI", "FR", "FR_CA", "HU", "IT", "JA", "KO", "LT", "LV", "MT", "NL", "PL", "PT", "PT_BR", "PT_PT", "RO", "RU", "SK", "SL", "SV", "ZH"])
      , Au = new Map([["ZH_EN", "chinese-english"], ["EN_ZH", "english-chinese"], ["NL_EN", "dutch-english"], ["EN_NL", "english-dutch"], ["FR_EN", "french-english"], ["EN_FR", "english-french"], ["FR_DE", "french-german"], ["DE_FR", "german-french"], ["FR_PT", "french-portuguese"], ["PT_FR", "portuguese-french"], ["FR_ES", "french-spanish"], ["ES_FR", "spanish-french"], ["DE_EN", "german-english"], ["EN_DE", "english-german"], ["DE_PT", "german-portuguese"], ["PT_DE", "portuguese-german"], ["DE_ES", "german-spanish"], ["ES_DE", "spanish-german"], ["IT_EN", "italian-english"], ["EN_IT", "english-italian"], ["JA_EN", "japanese-english"], ["EN_JA", "english-japanese"], ["PL_EN", "polish-english"], ["EN_PL", "english-polish"], ["PT_EN", "portuguese-english"], ["EN_PT", "english-portuguese"], ["PT_ES", "portuguese-spanish"], ["ES_PT", "spanish-portuguese"], ["RU_EN", "russian-english"], ["EN_RU", "english-russian"], ["ES_EN", "spanish-english"], ["EN_ES", "english-spanish"]]);
    function Ru(e) {
        let t, n, o, i;
        return t = new Su({
            props: {
                headline: "Response - Translated DOM",
                jsonData: e[18]
            }
        }),
        o = new Su({
            props: {
                headline: "Request - Original DOM",
                jsonData: e[19]
            }
        }),
        {
            c() {
                bi(t.$$.fragment),
                n = bo(),
                bi(o.$$.fragment)
            },
            m(e, s) {
                yi(t, e, s),
                ho(e, n, s),
                yi(o, e, s),
                i = !0
            },
            p(e, n) {
                const i = {};
                32 & n && (i.jsonData = e[18]),
                t.$set(i);
                const s = {};
                32 & n && (s.jsonData = e[19]),
                o.$set(s)
            },
            i(e) {
                i || (fi(t.$$.fragment, e),
                fi(o.$$.fragment, e),
                i = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                _i(o.$$.fragment, e),
                i = !1
            },
            d(e) {
                Ci(t, e),
                e && fo(n),
                Ci(o, e)
            }
        }
    }
    function Pu(e) {
        let t, n, o, i, s, a = Ou(e[5].translatedSnippet) + "", r = e[3] === Ie.translate && Bu(e), l = e[3] === Ie.write && Uu(e);
        return {
            c() {
                t = wo("div"),
                n = bo(),
                r && r.c(),
                o = bo(),
                l && l.c(),
                i = yo(),
                Lo(t, "class", "result-frame svelte-1rmo0hh")
            },
            m(e, c) {
                ho(e, t, c),
                t.innerHTML = a,
                ho(e, n, c),
                r && r.m(e, c),
                ho(e, o, c),
                l && l.m(e, c),
                ho(e, i, c),
                s = !0
            },
            p(e, n) {
                (!s || 32 & n) && a !== (a = Ou(e[5].translatedSnippet) + "") && (t.innerHTML = a),
                e[3] === Ie.translate ? r ? (r.p(e, n),
                8 & n && fi(r, 1)) : (r = Bu(e),
                r.c(),
                fi(r, 1),
                r.m(o.parentNode, o)) : r && (mi(),
                _i(r, 1, 1, (()=>{
                    r = null
                }
                )),
                hi()),
                e[3] === Ie.write ? l ? (l.p(e, n),
                8 & n && fi(l, 1)) : (l = Uu(e),
                l.c(),
                fi(l, 1),
                l.m(i.parentNode, i)) : l && (mi(),
                _i(l, 1, 1, (()=>{
                    l = null
                }
                )),
                hi())
            },
            i(e) {
                s || (fi(r),
                fi(l),
                s = !0)
            },
            o(e) {
                _i(r),
                _i(l),
                s = !1
            },
            d(e) {
                e && fo(t),
                e && fo(n),
                r && r.d(e),
                e && fo(o),
                l && l.d(e),
                e && fo(i)
            }
        }
    }
    function zu(e) {
        let t, n;
        return t = new al({
            props: {
                error: e[5].error
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                32 & n && (o.error = e[5].error),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Hu(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h = e[5].originalSnippet.length + "";
        return {
            c() {
                t = wo("div"),
                n = wo("p"),
                o = $o(h),
                i = $o("/5000"),
                s = bo(),
                a = wo("div"),
                r = wo("h2"),
                r.textContent = `${chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_title")}`,
                l = bo(),
                c = wo("p"),
                c.textContent = `${chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_body")}`,
                d = bo(),
                u = wo("div"),
                p = wo("button"),
                p.textContent = `${chrome.i18n.getMessage("link_try_deepl")}`,
                Lo(n, "class", "counter svelte-1rmo0hh"),
                Lo(r, "class", "svelte-1rmo0hh"),
                Lo(p, "class", "svelte-1rmo0hh"),
                Lo(u, "class", "button-row svelte-1rmo0hh"),
                Lo(a, "class", "box svelte-1rmo0hh"),
                Lo(t, "class", "anonymous-user-max-char-exceeded svelte-1rmo0hh")
            },
            m(h, f) {
                ho(h, t, f),
                po(t, n),
                po(n, o),
                po(n, i),
                po(t, s),
                po(t, a),
                po(a, r),
                po(a, l),
                po(a, c),
                po(a, d),
                po(a, u),
                po(u, p),
                g || (m = Co(p, "click", e[13]),
                g = !0)
            },
            p(e, t) {
                32 & t && h !== (h = e[5].originalSnippet.length + "") && Eo(o, h)
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                g = !1,
                m()
            }
        }
    }
    function Fu(e) {
        let t, n, o;
        return n = new Ql({}),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "loading-spinner-container svelte-1rmo0hh")
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p: Un,
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function Bu(e) {
        let t, n;
        return t = new Cu({
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
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.platformBehaviour = e[2]),
                2 & n && (o.websiteSettings = e[1]),
                64 & n && (o.showDictionary = e[6]),
                256 & n && (o.errorMessageDict = e[8]),
                128 & n && (o.dictionaryHTML = e[7]),
                16 & n && (o.langPair = e[4]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Uu(e) {
        let t, n;
        return t = new Lu({
            props: {
                onClose: e[0]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.onClose = e[0]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function qu(e) {
        let t, n, o, i;
        return n = new Du({
            props: {
                html: e[7]
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "dl__dictionary svelte-1rmo0hh")
            },
            m(e, o) {
                ho(e, t, o),
                yi(n, t, null),
                i = !0
            },
            p(e, t) {
                const o = {};
                128 & t && (o.html = e[7]),
                n.$set(o)
            },
            i(e) {
                i || (fi(n.$$.fragment, e),
                o || ii((()=>{
                    o = vi(t, cr, {
                        y: -50,
                        duration: 700
                    }),
                    o.start()
                }
                )),
                i = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function ju(e) {
        let t, n, o, i, a, r, l;
        const d = [Fu, Hu, zu, Pu, Ru]
          , u = [];
        function p(e, t) {
            return 32 & t && (n = null),
            null == e[5] || e[5].translationState === s ? 0 : e[5].translationState === c ? 1 : e[5].error ? 2 : e[5].translatedSnippet ? 3 : (null == n && (n = !(!Ot() || !e[5].translatedDOMSnippet)),
            n ? 4 : -1)
        }
        ~(o = p(e, -1)) && (i = u[o] = d[o](e));
        let g = e[6] && e[7] && qu(e);
        return {
            c() {
                t = wo("div"),
                i && i.c(),
                a = bo(),
                g && g.c(),
                r = yo(),
                Lo(t, "class", "tooltip-container svelte-1rmo0hh"),
                Lo(t, "data-qa", "deepl-inline-translation-result-container")
            },
            m(e, n) {
                ho(e, t, n),
                ~o && u[o].m(t, null),
                ho(e, a, n),
                g && g.m(e, n),
                ho(e, r, n),
                l = !0
            },
            p(e, n) {
                let s = o;
                o = p(e, n),
                o === s ? ~o && u[o].p(e, n) : (i && (mi(),
                _i(u[s], 1, 1, (()=>{
                    u[s] = null
                }
                )),
                hi()),
                ~o ? (i = u[o],
                i ? i.p(e, n) : (i = u[o] = d[o](e),
                i.c()),
                fi(i, 1),
                i.m(t, null)) : i = null),
                e[6] && e[7] ? g ? (g.p(e, n),
                192 & n && fi(g, 1)) : (g = qu(e),
                g.c(),
                fi(g, 1),
                g.m(r.parentNode, r)) : g && (mi(),
                _i(g, 1, 1, (()=>{
                    g = null
                }
                )),
                hi())
            },
            i(e) {
                l || (fi(i),
                fi(g),
                l = !0)
            },
            o(e) {
                _i(i),
                _i(g),
                l = !1
            },
            d(e) {
                e && fo(t),
                ~o && u[o].d(),
                e && fo(a),
                g && g.d(e),
                e && fo(r)
            }
        }
    }
    function Wu(e) {
        let t, n, o;
        return n = new Wd({
            props: {
                closeWindow: e[11],
                showLangSelect: !0,
                settings: us,
                websiteSettings: e[1],
                extensionContext: e[9],
                platformBehaviour: e[2],
                textProcessingMode: e[3],
                showSettingsIcon: !0,
                $$slots: {
                    default: [ju]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment)
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p(e, [t]) {
                const o = {};
                2 & t && (o.websiteSettings = e[1]),
                4 & t && (o.platformBehaviour = e[2]),
                8 & t && (o.textProcessingMode = e[3]),
                33554943 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function Gu(e, t, n) {
        let o, s, a = Un, r = ()=>(a(),
        a = Kn(d, (e=>n(5, o = e))),
        d);
        Xn(e, us, (e=>n(17, s = e))),
        e.$$.on_destroy.push((()=>a()));
        let {closeTooltip: l} = t
          , {websiteSettings: d} = t;
        r();
        let u, p, g, m, {platformBehaviour: h=Me.default} = t, {textProcessingMode: f=Ie.translate} = t, {setPositioningStatus: _} = t, v = "", $ = "", b = "", y = w;
        function C() {
            return !!m && 1 === m.trim().split(" ").length
        }
        function L() {
            const e = v && g && C() ? x : T;
            if (o.originalSnippet && o.originalSnippet !== b) {
                b = o.originalSnippet;
                try {
                    En({
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
            e && (t = e,
            Nu.has(t.toUpperCase())) || (e = "EN"),
            e = e.substring(0, 2).toUpperCase(),
            n(8, $ = ""),
            await (oi(),
            ti),
            En({
                action: "dlGetDictionary",
                payload: {
                    interfaceLang: e,
                    sourceLang: o.websiteLanguage,
                    targetLang: s.selectedTargetLanguage,
                    text: m
                }
            }).then((e=>{
                n(7, v = e)
            }
            )).catch((e=>{
                switch (En({
                    action: "dlTrackLingueeErrorData",
                    payload: {
                        lingueeError: e.error
                    }
                }),
                e.error) {
                case jt:
                    n(8, $ = chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary"));
                    break;
                case qt:
                    n(8, $ = chrome.i18n.getMessage("ui_inline_translation_no_entry_dictionary", m));
                    break;
                default:
                    n(8, $ = chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary"))
                }
            }
            )).finally((()=>{
                L(),
                n(6, u = !1)
            }
            ))
        }
        async function k(e) {
            switch (f) {
            case Ie.translate:
                {
                    const t = await Et(o.originalSnippet);
                    let n;
                    e === nt && (n = "dlTrackGdocsMaxCharExceededShown"),
                    e === ot && (n = "dlTrackGDocsMaxCharExceededTryProClicked"),
                    En({
                        action: n,
                        payload: {
                            sourceLang: t,
                            targetLang: s.selectedTargetLanguage,
                            sourceLength: o.originalSnippet.length
                        }
                    })
                }
                break;
            case Ie.write:
                {
                    const t = document.getElementsByTagName("deepl-gdocs-icon")[0];
                    t && t.trackMaxCharExceeded(e)
                }
            }
        }
        return e.$$set = e=>{
            "closeTooltip"in e && n(0, l = e.closeTooltip),
            "websiteSettings"in e && r(n(1, d = e.websiteSettings)),
            "platformBehaviour"in e && n(2, h = e.platformBehaviour),
            "textProcessingMode"in e && n(3, f = e.textProcessingMode),
            "setPositioningStatus"in e && n(14, _ = e.setPositioningStatus)
        }
        ,
        e.$$.update = ()=>{
            if (36 & e.$$.dirty && h === Me.gdocs && o.translationState === c && o.originalSnippet.length > 0 && k(nt),
            131104 & e.$$.dirty && o && s && (o.websiteLanguage,
            s.selectedTargetLanguage,
            o.originalSnippet),
            33 & e.$$.dirty && o && (!o.isTranslationTooltipInjected || o.translationState !== i || o.translatedSnippet || o.error || o.translatedDOMSnippet || l()),
            16420 & e.$$.dirty && !o.translationState && h === Me.default && _ && (_(!0),
            setTimeout((()=>{
                _(!1)
            }
            ), 600)),
            196656 & e.$$.dirty) {
                if (s.selectedTargetLanguage !== o.snippetDetectedSourceLang && o.snippetDetectedSourceLang) {
                    let e = o.snippetDetectedSourceLang
                      , t = s.selectedTargetLanguage;
                    ["EN-GB", "EN-US"].includes(e) && (e = "EN"),
                    ["EN-GB", "EN-US"].includes(t) && (t = "EN"),
                    ["PT-PT", "PT-BR"].includes(e) && (e = "PT"),
                    ["PT-PT", "PT-BR"].includes(t) && (t = "PT"),
                    n(4, g = function(e, t) {
                        const n = `${e.toUpperCase()}_ ${t.toUpperCase()}`;
                        return Au.get(n)
                    }(e, t))
                } else
                    n(4, g = "");
                o.originalSnippet && o.originalSnippet.trim() !== m ? (n(16, m = o.originalSnippet.trim()),
                n(8, $ = ""),
                g && C() ? (n(15, p = g),
                E()) : (n(7, v = ""),
                L(),
                n(6, u = !1))) : n(6, u = !1)
            }
            32784 & e.$$.dirty && g != p && g && C() && E()
        }
        ,
        [l, d, h, f, g, o, u, v, $, y, C, function() {
            En({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: le,
                    nicheIntegration: h
                }
            }),
            l()
        }
        , function() {
            g && C() && v && !$ && n(6, u = !u)
        }
        , function() {
            k(ot),
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ki,
                    utmContent: "gdocs_customization"
                }
            })
        }
        , _, p, m, s, ()=>o.translatedDOMSnippet, ()=>o.originalSnippet]
    }
    class Vu extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Gu, Wu, Zn, {
                closeTooltip: 0,
                websiteSettings: 1,
                platformBehaviour: 2,
                textProcessingMode: 3,
                setPositioningStatus: 14
            })
        }
    }
    function Zu(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return a = new Vu({
            props: {
                closeTooltip: e[0],
                websiteSettings: e[1],
                platformBehaviour: e[2],
                textProcessingMode: e[3],
                setPositioningStatus: e[7]
            }
        }),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                i = bo(),
                s = wo("div"),
                bi(a.$$.fragment),
                Lo(n, "class", "tooltip-drag-handle svelte-1ur3i4z"),
                Lo(n, "style", o = `max-height: ${e[4]}px`),
                Lo(s, "class", "tooltip-body svelte-1ur3i4z"),
                Lo(t, "class", "tooltip-wrapper svelte-1ur3i4z"),
                Lo(t, "style", e[6]),
                Lo(t, "draggable", e[5]),
                ii((()=>e[16].call(t)))
            },
            m(o, u) {
                ho(o, t, u),
                po(t, n),
                po(t, i),
                po(t, s),
                yi(a, s, null),
                r = Oo(t, e[16].bind(t)),
                l = !0,
                c || (d = [Co(n, "mouseover", e[10]), Co(n, "mouseout", e[11]), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[17]), Co(t, "drag", e[9]), Co(t, "dragstart", e[8])],
                c = !0)
            },
            p(e, [i]) {
                (!l || 16 & i && o !== (o = `max-height: ${e[4]}px`)) && Lo(n, "style", o);
                const s = {};
                1 & i && (s.closeTooltip = e[0]),
                2 & i && (s.websiteSettings = e[1]),
                4 & i && (s.platformBehaviour = e[2]),
                8 & i && (s.textProcessingMode = e[3]),
                a.$set(s),
                (!l || 64 & i) && Lo(t, "style", e[6]),
                (!l || 32 & i) && Lo(t, "draggable", e[5])
            },
            i(e) {
                l || (fi(a.$$.fragment, e),
                l = !0)
            },
            o(e) {
                _i(a.$$.fragment, e),
                l = !1
            },
            d(e) {
                e && fo(t),
                Ci(a),
                r(),
                c = !1,
                Gn(d)
            }
        }
    }
    function Ku(e, t, n) {
        let o;
        Xn(e, us, (e=>n(15, o = e))),
        Zo("deepl_settings", us);
        let i, {closeTooltip: s} = t, {websiteSettings: a} = t, {replaceElement: r} = t, {actualPosition: l} = t, {dragContainerTo: c} = t, {platformBehaviour: d=Me.default} = t, {textProcessingMode: u=Ie.translate} = t, p = !1, g = !1, m = "visibility: hidden; opacity:0; height:0;";
        let h = {
            x: 0,
            y: 0
        };
        Wo((()=>{
            setTimeout((()=>{
                n(6, m = "")
            }
            ), 100)
        }
        ));
        return e.$$set = e=>{
            "closeTooltip"in e && n(0, s = e.closeTooltip),
            "websiteSettings"in e && n(1, a = e.websiteSettings),
            "replaceElement"in e && n(13, r = e.replaceElement),
            "actualPosition"in e && n(12, l = e.actualPosition),
            "dragContainerTo"in e && n(14, c = e.dragContainerTo),
            "platformBehaviour"in e && n(2, d = e.platformBehaviour),
            "textProcessingMode"in e && n(3, u = e.textProcessingMode)
        }
        ,
        e.$$.update = ()=>{
            var t, s;
            32768 & e.$$.dirty && n(12, (t = o.inlineTranslateTooltipPosition,
            l = r(i, t))),
            16 & e.$$.dirty && n(12, (s = i,
            l = g || d === Me.gdocs ? r(s, o.inlineTranslateTooltipPosition) : l))
        }
        ,
        [s, a, d, u, i, p, m, e=>{
            g = e
        }
        , function(e) {
            const t = e.target.getBoundingClientRect();
            h.x = e.clientX - t.left,
            h.y = e.clientY - t.top;
            const n = document.createElement("img");
            n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            e.dataTransfer.setDragImage(n, 0, 0),
            function() {
                try {
                    En({
                        action: "dlTrackInlineDragStart",
                        payload: {
                            nicheIntegration: d
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }()
        }
        , function(e) {
            0 !== e.y && 0 !== e.x && c({
                x: e.pageX - h.x,
                y: e.pageY - h.y
            })
        }
        , function() {
            n(5, p = !0)
        }
        , function() {
            n(5, p = !1)
        }
        , l, r, c, o, function() {
            i = this.clientHeight,
            n(4, i)
        }
        , ()=>s()]
    }
    class Xu extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Ku, Zu, Zn, {
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
    class Qu extends HTMLElement {
        constructor() {
            super(),
            this.platformBehaviour = Me.default,
            this.textProcessingMode = Ie.translate,
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.container = document.createElement("div"),
            this.mainComponent,
            this.selectionRange;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.dragContainerTo = this.dragContainerTo.bind(this)
        }
        createDOM(e, t, n) {
            const {deepl_inline_ui: o} = S;
            this.shadowContainer && this.shadowContainer.childElementCount > 0 && this.cleanupDOM(),
            this.platformBehaviour === Me.default && (this.selectionRange = window.getSelection().getRangeAt(0));
            let i = e(this.selectionRange);
            this.shadowContainer.appendChild(this.container);
            let s = "position: absolute; top: 0px; left: 0px; width: 100%; z-index: " + (o.z_index - 100)
              , a = `position: absolute; top: ${i.y}px; left: ${i.x - 200}px; z-index: ${o.z_index - 100};`;
            switch (this.platformBehaviour) {
            case Me.gdocs:
                a += "top: 600px; left: 10px;";
                break;
            case Me.default:
            default:
                a += ""
            }
            this.shadowContainer.style.cssText = s,
            this.container.style.cssText = a,
            this.mainComponent = new Xu({
                target: this.container,
                props: {
                    closeTooltip: t,
                    websiteSettings: n,
                    replaceElement: (t,n)=>{
                        i = e(this.selectionRange);
                        const o = {
                            coords: i,
                            clientHeight: t,
                            TOOLTIP_WIDTH: 550,
                            TRIGGER_MENU_ICON_HEIGHT: 30,
                            style: this.container.style
                        };
                        let s = n;
                        const a = ru(o)
                          , [r,l] = (e=>{
                            const t = ["bottom", "top", "left", "right", "middle"];
                            return t.sort(((t,n)=>t === e ? -1 : n === e ? 1 : 0)),
                            [t, ["bottom", "top", "middle"]]
                        }
                        )(n);
                        if (this.platformBehaviour === Me.gdocs) {
                            for (const e of l)
                                if (au(e, o)) {
                                    su(e, o);
                                    break
                                }
                        } else
                            for (const e of r)
                                if (au(e, o)) {
                                    s = "middle" !== e ? e : void 0,
                                    iu(e, o);
                                    break
                                }
                        return {
                            ...a,
                            current: s
                        }
                    }
                    ,
                    platformBehaviour: this.platformBehaviour,
                    textProcessingMode: this.textProcessingMode,
                    dragContainerTo: this.dragContainerTo
                }
            })
        }
        dragContainerTo(e) {
            this.container.style.top = `${e.y}px`,
            this.container.style.left = `${e.x}px`
        }
        cleanupDOM() {
            this.container.remove(),
            this.shadowContainer.remove(),
            this.shadowContainer = document.createElement("div"),
            this.container = document.createElement("div"),
            this.shadow.appendChild(this.shadowContainer),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Yu(e) {
        return "IFRAME" === e.nodeName.toUpperCase() ? tp(e) : e.ownerDocument === document ? window : e.ownerDocument
    }
    function Ju(e) {
        return e.ownerDocument === document ? document : e.ownerDocument
    }
    function ep(e) {
        return "IFRAME" !== e.nodeName.toUpperCase() ? e : tp(e).body
    }
    function tp(e) {
        return e.contentDocument || e.contentWindow.document
    }
    function np(e) {
        if ("IFRAME" === e.nodeName.toUpperCase())
            return window;
        if (e.ownerDocument !== document) {
            const t = e?.ownerDocument?.defaultView?.frameElement?.contentWindow;
            if (t)
                return t
        }
        return window
    }
    function op(e) {
        return "IFRAME" === e.nodeName.toUpperCase() ? tp(e) : e.ownerDocument === document ? document : e.ownerDocument
    }
    function ip(e) {
        return new Promise(((t,n)=>{
            requestAnimationFrame((()=>{
                const n = Ju(e).createRange();
                n.selectNodeContents(ep(e));
                const o = Yu(e).getSelection();
                o.removeAllRanges(),
                o.addRange(n),
                t(o)
            }
            ))
        }
        ))
    }
    window.customElements.define("deepl-inline-translate-tooltip", Qu);
    const sp = async(e,t)=>{
        const n = np(e);
        await Ct(10);
        const o = new DataTransfer;
        o.setData("text/html", t.html),
        o.setData("text/plain", t.text),
        e.dispatchEvent(new n.ClipboardEvent("paste",{
            clipboardData: o,
            bubbles: !0,
            cancelable: !0
        })),
        o.clearData(),
        await Ct(10)
    }
      , ap = async(e,t)=>{
        const n = op(e)
          , o = np(e)
          , i = n.createEvent("TextEvent");
        i.initTextEvent("textInput", !0, !0, o, t.text),
        e.dispatchEvent(i),
        await Ct(10)
    }
      , rp = async(e,t)=>{
        const n = op(e);
        e.value && e.select(),
        n.execCommand("insertHTML", !1, t.html),
        await Ct(20),
        (e.value || "" === e.value) && (e.value = t.text)
    }
      , lp = (e,t,n)=>{
        let o = !0;
        return (e && !t || !Pr(e, n) && e === t || !Pr(t, n)) && (o = !1),
        o
    }
      , cp = (e,t)=>{
        const n = new (np(t).KeyboardEvent)(e,{
            bubbles: !0,
            cancelable: !0,
            keyCode: 8,
            which: 8,
            location: 0,
            key: "Backspace"
        });
        return t.dispatchEvent(n)
    }
      , dp = (e,t)=>{
        const n = new MouseEvent(e,{
            bubbles: !0,
            cancelable: !1
        });
        return t.dispatchEvent(n)
    }
      , up = e=>e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement && ["text", "search"].includes(e.type)
      , pp = e=>e.selectionStart < e.selectionEnd
      , gp = async(e,t,n)=>{
        if (!up(e))
            return n || (e=>{
                dp("mousedown", e);
                const t = window.getSelection();
                t.removeAllRanges();
                const n = new Range;
                n.setStart(e, 0),
                n.collapse(!1),
                t.addRange(n),
                dp("mouseup", e)
            }
            )(e),
            await (async(e,t,n)=>{
                n || e.focus();
                const o = ep(e).innerText
                  , i = ep(e).value
                  , s = [{
                    method: sp,
                    isSuccessful: ()=>lp(o, ep(e).innerText, t.text)
                }, {
                    method: ap,
                    isSuccessful: ()=>lp(o, ep(e).innerText, t.text)
                }, {
                    method: rp,
                    isSuccessful: ()=>lp(o, ep(e).innerText, t.text) || lp(i, ep(e).value, t.text)
                }];
                for (const n of s)
                    if (await n.method(e, t),
                    n.isSuccessful())
                        return;
                throw await Ct(1e3),
                En({
                    action: "dlTranslatedInputTextNotSet",
                    payload: window.location.hostname
                }),
                new Error({
                    error: Wt
                })
            }
            )(e, t, !0);
        if (pp(e) || ((e,{start: t, end: n})=>{
            e.selectionStart = t,
            e.selectionEnd = n
        }
        )(e, {
            start: 0,
            end: e.value.length
        }),
        !document.execCommand("insertText", !1, t.text)) {
            const n = e.value.substring(0, e.selectionStart) + t.text + e.value.substring(e.selectionEnd);
            e.value = n
        }
    }
    ;
    function mp(e, t) {
        if (!t)
            return !1;
        const n = t.getBoundingClientRect();
        if (up(e))
            return function(e, t) {
                const n = function(e) {
                    const t = document.createElement("div");
                    document.body.appendChild(t);
                    var n = window.getComputedStyle(e);
                    t.style.whiteSpace = "pre-wrap",
                    t.style.wordWrap = "break-word",
                    t.style.position = "fixed",
                    t.style.overflow = "hidden",
                    ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"].forEach((function(e) {
                        t.style[e] = n[e]
                    }
                    ));
                    const o = e.getBoundingClientRect();
                    return t.style.top = Math.round(o.top) + "px",
                    t.style.left = Math.round(o.left) + "px",
                    t.innerText = e.value,
                    t
                }(e);
                let o = !1;
                try {
                    o = hp(n, t)
                } catch (e) {}
                return n.remove(),
                o
            }(e, n);
        {
            const t = Yu(e).getSelection()
              , o = function(e) {
                return "IFRAME" === e.nodeName.toUpperCase() ? e.getBoundingClientRect() : {
                    top: 0,
                    left: 0
                }
            }(e);
            if (t.rangeCount)
                return hp(ep(e), n, o)
        }
        return !1
    }
    function hp(e, t, n={
        top: 0,
        left: 0
    }) {
        const o = Yu(e).getSelection();
        for (const a of e.childNodes)
            if ("#text" === a.nodeName.toLowerCase()) {
                const e = o.getRangeAt(0).cloneRange();
                e.setStart(a, 0),
                e.setEnd(a, a.textContent.length);
                const r = e.getClientRects();
                if (!r.length)
                    continue;
                for (const e of r) {
                    const o = {
                        left: e.left + n.left,
                        right: e.right + n.left,
                        top: e.top + n.top,
                        bottom: e.bottom + n.top
                    };
                    if (s = t,
                    (i = o).left <= s.right && i.right >= s.left && i.top <= s.bottom && i.bottom >= s.top)
                        return !0
                }
            } else if (e.childNodes.length && hp(a, t, n))
                return !0;
        var i, s;
        return !1
    }
    const fp = [];
    window.onerror = function(e) {
        /ResizeObserver/gm.test(e) && fp.forEach((e=>e.resize.disconnect()))
    }
    ;
    const _p = e=>"true" === e.contentEditable || "TEXTAREA" === e.nodeName && e.rows > 1;
    const wp = ({inputArea: e})=>{
        const t = yp(e);
        return {
            position: "absolute",
            top: t.top,
            left: t.left,
            width: t.width,
            height: t.height,
            isLanguageToolsPresent: !!document.querySelector("lt-toolbar"),
            isGrammarlyPresent: !!document.querySelector("grammarly-extension")
        }
    }
      , vp = ({inputArea: e})=>{
        const t = [];
        if (e)
            for (let n = e.parentElement; null !== n; n = n.parentElement)
                $p(n) && t.push(n);
        return t
    }
      , $p = e=>{
        const t = window.getComputedStyle(e)
          , n = t.getPropertyValue("overflow-y")
          , o = t.getPropertyValue("overflow-x")
          , i = ["hidden", "scroll", "auto"];
        return i.includes(n) || i.includes(o)
    }
      , bp = (e,t)=>{
        let n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return n.left >= n.right || n.top >= n.bottom ? null : n
    }
      , yp = e=>{
        let t = e.getBoundingClientRect()
          , n = {
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
        }
          , i = {
            top: 0,
            left: 0,
            right: window.innerWidth,
            bottom: window.innerHeight
        };
        for (let t = e.parentElement; null !== t && t !== e.ownerDocument.body; t = t.parentElement) {
            let e = t.getBoundingClientRect();
            const i = bp(n, e);
            if (i)
                n = i;
            else if ($p(t))
                return o
        }
        return n = bp(n, i),
        n ? {
            top: n.top,
            bottom: n.bottom,
            left: n.left,
            right: n.right,
            width: n.right - n.left,
            height: n.bottom - n.top
        } : o
    }
      , Cp = "GENERAL_SETTINGS"
      , xp = "INPUT_SETTINGS"
      , Tp = async e=>{
        let t = e.ownerDocument
          , n = Yu(e).getSelection();
        const o = n && n.baseNode && "#text" == n.baseNode.nodeName && "Range" == n.type && (e.contains(n.baseNode) || function(e, t) {
            return "IFRAME" === e.nodeName.toUpperCase() && tp(e) === t.ownerDocument
        }(e, n.baseNode));
        o || (e.focus(),
        await ip(e)),
        n = Yu(e).getSelection();
        const {domElements: i, strings: s, container: a} = function({thisDocument: e, selection: t}) {
            let n;
            t.getRangeAt ? n = t.getRangeAt(0) : (n = e.createRange(),
            n.setStart(t.anchorNode, t.anchorOffset),
            n.setEnd(t.focusNode, t.focusOffset));
            const o = n.cloneContents()
              , i = document.createElement("div");
            i.appendChild(o),
            i.style.display = "none",
            document.body.appendChild(i);
            const {domElements: s, strings: a} = An(i);
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
    }
    ;
    const Lp = e=>{
        const {domElements: t, strings: n, cloneContainer: o} = function(e) {
            const t = e.cloneNode(!0)
              , n = document.createElement("div");
            n.appendChild(t),
            n.style.display = "none",
            document.body.appendChild(n);
            const {domElements: o, strings: i} = An(n);
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
    }
    ;
    async function Ep(e, t=!1, n=null) {
        let o, i = {}, s = [];
        const a = !up(e);
        if (a)
            i = await Tp(e),
            s = i.strings.map((e=>({
                text: e
            })));
        else {
            const t = e.value;
            pp(e) && (i.isSubtextSelected = !0),
            o = i.isSubtextSelected ? t.substring(e.selectionStart, e.selectionEnd) : t,
            s.push({
                text: o
            })
        }
        if (0 === s.length)
            return;
        let r, l;
        try {
            r = document.documentElement.lang
        } catch (e) {
            console.error(e)
        }
        l = t ? await En({
            action: "dlRequestImproveWriting",
            payload: {
                requests: s,
                domainName: window.location.hostname,
                websiteLanguage: r
            }
        }) : await En({
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
        a ? (Pn({
            strings: l[0]?.texts,
            domElements: i.domElements
        }),
        c.text = i.container.innerText,
        c.html = i.container.innerHTML,
        i.container.remove()) : (c.text = l[0].text,
        c.html = l[0].text),
        a && !i.isSubtextSelected && (e=>{
            const t = np(e)
              , n = Ju(e);
            if (cp("keydown", e)) {
                const o = new t.InputEvent("beforeinput",{
                    bubbles: !0,
                    cancelable: !0,
                    inputType: "deleteContent"
                });
                e.dispatchEvent(o) && n.execCommand("delete", !1)
            }
            cp("keyup", e)
        }
        )(e),
        await gp(e, c, i.isSubtextSelected)
    }
    function kp(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                Lo(t, "class", "svelte-rj6qvq")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Sp(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                Lo(t, "class", "svelte-rj6qvq")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Mp(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                Lo(t, "class", "svelte-rj6qvq")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Ip(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        return o = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("input_translation_tooltip_turnoff"),
                $$slots: {
                    default: [kp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        a = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("input_translation_tooltip_settings"),
                $$slots: {
                    default: [Sp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        c = new ud({
            props: {
                tooltip: e[4],
                $$slots: {
                    default: [Mp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                bi(o.$$.fragment),
                i = bo(),
                s = wo("div"),
                bi(a.$$.fragment),
                r = bo(),
                l = wo("div"),
                bi(c.$$.fragment),
                d = bo(),
                u = wo("div"),
                Lo(n, "class", "dl-icon-circle dl-on-off svelte-rj6qvq"),
                Lo(s, "class", "dl-icon-circle dl-settings svelte-rj6qvq"),
                Lo(l, "class", "dl-icon-circle dl-icon svelte-rj6qvq"),
                Lo(u, "class", "dl-icon-circle dl-loading svelte-rj6qvq"),
                Lo(t, "class", "dl-input-icon svelte-rj6qvq"),
                No(t, "is-input-translation-disabled", e[5]),
                No(t, "is-loading", e[3]),
                No(t, "is-minimized", e[2])
            },
            m(h, f) {
                ho(h, t, f),
                po(t, n),
                yi(o, n, null),
                po(t, i),
                po(t, s),
                yi(a, s, null),
                po(t, r),
                po(t, l),
                yi(c, l, null),
                e[24](l),
                po(t, d),
                po(t, u),
                p = !0,
                g || (m = [Co(n, "mouseenter", e[19]), Co(n, "click", e[20]), Co(s, "mouseenter", e[21]), Co(s, "click", e[22]), Co(l, "click", e[8]), Co(l, "mouseenter", e[23])],
                g = !0)
            },
            p(e, n) {
                const i = {};
                1 & n[1] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                o.$set(i);
                const s = {};
                1 & n[1] && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                a.$set(s);
                const r = {};
                16 & n[0] && (r.tooltip = e[4]),
                1 & n[1] && (r.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                c.$set(r),
                (!p || 32 & n[0]) && No(t, "is-input-translation-disabled", e[5]),
                (!p || 8 & n[0]) && No(t, "is-loading", e[3]),
                (!p || 4 & n[0]) && No(t, "is-minimized", e[2])
            },
            i(e) {
                p || (fi(o.$$.fragment, e),
                fi(a.$$.fragment, e),
                fi(c.$$.fragment, e),
                p = !0)
            },
            o(e) {
                _i(o.$$.fragment, e),
                _i(a.$$.fragment, e),
                _i(c.$$.fragment, e),
                p = !1
            },
            d(n) {
                n && fo(t),
                Ci(o),
                Ci(a),
                Ci(c),
                e[24](null),
                g = !1,
                Gn(m)
            }
        }
    }
    function Dp(e, t, n) {
        let o, i;
        const s = Ko("deepl_settings");
        Xn(e, s, (e=>n(18, i = e)));
        let a, r, {inputArea: l} = t, {lockActiveElement: c} = t, {openSettings: d} = t, {closeSettings: u} = t, {hideOnboardingHighlighter: p} = t, {registerIconCallbacks: g} = t, {unregisterIconCallbacks: m} = t, {getActiveElement: h} = t, {setErrorMessage: f} = t, _ = !1, w = !1, v = "";
        const $ = ()=>{
            b()
        }
          , b = ()=>{
            n(2, _ = mp(l, a))
        }
        ;
        async function y(e) {
            await s.set({
                targetLanguageUserInput: e.value,
                regionalVariant: e.regionalVariant
            }),
            x()
        }
        const C = async(e,t,o)=>{
            const s = h();
            switch (e.action) {
            case "dlTriggerTranslationShortcut":
                if (f(void 0),
                s !== l)
                    return;
                try {
                    En({
                        action: "dlTrackUseOfShortcut",
                        payload: {
                            shortcutType: se,
                            location: z
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                if (i && i.targetLanguageUserInput) {
                    n(3, w = !0);
                    try {
                        await Ep(l)
                    } catch (e) {
                        f(e)
                    }
                    n(3, w = !1)
                } else
                    d({
                        fromShortcut: !0
                    });
                o();
                break;
            case "dlChangeLanguageShortcut":
                if (s !== l)
                    return;
                n(3, w = !0);
                try {
                    d({
                        fromShortcut: !0
                    })
                } catch (e) {
                    f(e)
                }
                n(3, w = !1),
                o()
            }
        }
        ;
        async function x() {
            if (f(void 0),
            p(),
            i.targetLanguageUserInput && "undefined" != i.targetLanguageUserInput) {
                u(),
                n(3, w = !0);
                try {
                    await Ep(l),
                    r || kn(M)
                } catch (e) {
                    f(e)
                }
                n(3, w = !1)
            } else
                d()
        }
        function T(e) {
            En({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host
                }
            })
        }
        Wo((()=>{
            chrome.runtime.onMessage.addListener(C),
            g({
                processRefreshCycle: $,
                languageChanged: y,
                triggerTranslation: x
            })
        }
        )),
        Go((()=>{
            chrome.runtime.onMessage.removeListener(C),
            m()
        }
        ));
        return e.$$set = e=>{
            "inputArea"in e && n(9, l = e.inputArea),
            "lockActiveElement"in e && n(10, c = e.lockActiveElement),
            "openSettings"in e && n(0, d = e.openSettings),
            "closeSettings"in e && n(11, u = e.closeSettings),
            "hideOnboardingHighlighter"in e && n(12, p = e.hideOnboardingHighlighter),
            "registerIconCallbacks"in e && n(13, g = e.registerIconCallbacks),
            "unregisterIconCallbacks"in e && n(14, m = e.unregisterIconCallbacks),
            "getActiveElement"in e && n(15, h = e.getActiveElement),
            "setErrorMessage"in e && n(16, f = e.setErrorMessage)
        }
        ,
        e.$$.update = ()=>{
            if (262144 & e.$$.dirty[0])
                if (i.targetLanguageUserInput && "undefined" != i.targetLanguageUserInput) {
                    let e;
                    En({
                        action: "dlCheckCommandShortcuts"
                    }).then((t=>{
                        e = t ? t.filter((e=>e.name == se))[0].shortcut : "",
                        e ? (e = `(${e})`,
                        r = !0) : r = !1,
                        n(4, v = `${chrome.i18n.getMessage("input_translation_tooltip_translate")} ${e}`)
                    }
                    ))
                } else
                    n(4, v = chrome.i18n.getMessage("input_translation_tooltip_translate_to_unknown"));
            var t, s;
            262144 & e.$$.dirty[0] && n(5, o = !i.enableInputTranslation || (t = window.location.host,
            s = window.location.href,
            Fi(t, L) || Fi(s, E)) || i.blacklistDomainsForWriting.includes(window.location.host) || i.isGmailEnabled && Mn())
        }
        ,
        [d, a, _, w, v, o, s, T, ()=>{
            c(),
            i.targetLanguageUserInput ? x() : d()
        }
        , l, c, u, p, g, m, h, f, y, i, ()=>T(H), ()=>d({
            page: xp
        }), ()=>T(H), ()=>d({
            page: Cp
        }), ()=>T(z), function(e) {
            Yo[e ? "unshift" : "push"]((()=>{
                a = e,
                n(1, a)
            }
            ))
        }
        ]
    }
    class Op extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Dp, Ip, Zn, {
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
    function Np(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                i = wo("div"),
                s = bo(),
                a = wo("div"),
                r = wo("div"),
                r.textContent = `${chrome.i18n.getMessage("input_translation_highlighter_tooltip_headline")}`,
                l = bo(),
                c = wo("div"),
                c.textContent = `${chrome.i18n.getMessage("input_translation_highlighter_tooltip_text")}`,
                d = bo(),
                u = wo("div"),
                p = bo(),
                g = wo("button"),
                Lo(i, "class", "logo svelte-1pcvyio"),
                Lo(r, "class", "headline svelte-1pcvyio"),
                Lo(a, "class", "text-wrapper svelte-1pcvyio"),
                Lo(o, "class", "content svelte-1pcvyio"),
                Lo(u, "class", "logo-picture svelte-1pcvyio"),
                Lo(g, "class", "close-icon svelte-1pcvyio"),
                Lo(n, "class", m = no(`body body__ ${e[0]}`) + " svelte-1pcvyio"),
                Lo(t, "class", h = "container container__" + e[0] + " svelte-1pcvyio"),
                ii((()=>e[11].call(t)))
            },
            m(m, h) {
                ho(m, t, h),
                po(t, n),
                po(n, o),
                po(o, i),
                po(o, s),
                po(o, a),
                po(a, r),
                po(a, l),
                po(a, c),
                po(n, d),
                po(n, u),
                po(n, p),
                po(n, g),
                f = Oo(t, e[11].bind(t)),
                v = !0,
                $ || (b = Co(g, "click", e[10]),
                $ = !0)
            },
            p(e, o) {
                (!v || 1 & o && m !== (m = no(`body body__ ${e[0]}`) + " svelte-1pcvyio")) && Lo(n, "class", m),
                (!v || 1 & o && h !== (h = "container container__" + e[0] + " svelte-1pcvyio")) && Lo(t, "class", h)
            },
            i(e) {
                v || (ii((()=>{
                    w && w.end(1),
                    _ = vi(t, cr, {
                        x: 100,
                        duration: 1e3
                    }),
                    _.start()
                }
                )),
                v = !0)
            },
            o(e) {
                _ && _.invalidate(),
                w = $i(t, cr, {
                    x: 100,
                    duration: 1e3
                }),
                v = !1
            },
            d(e) {
                e && fo(t),
                f(),
                e && w && w.end(),
                $ = !1,
                b()
            }
        }
    }
    function Ap(e) {
        let t, n, o = e[1] && Np(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[1] ? o ? (o.p(e, n),
                2 & n && fi(o, 1)) : (o = Np(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function Rp(t, n, o) {
        let {onClose: i} = n
          , {icon: s} = n
          , {position: a="top"} = n
          , {registerHighlighterCallbacks: r} = n
          , {unregisterHighlighterCallbacks: l} = n
          , c = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
          , d = {
            height: 0,
            width: 0
        }
          , u = 140
          , p = 387;
        const g = ()=>{
            if (s) {
                const e = s.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"])
                    e[n] !== c[n] && (t[n] = e[n]);
                Object.keys(t).length && o(8, c = {
                    ...c,
                    ...t
                });
                let n = {};
                window.innerHeight !== d.height && (n.height = window.innerHeight),
                window.innerWidth !== d.width && (n.width = window.innerWidth),
                Object.keys(n).length && o(9, d = {
                    ...d,
                    ...n
                })
            } else
                o(8, c = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
        }
        ;
        function m() {
            i(Ee)
        }
        Wo((async()=>{
            r({
                recalculateHighlighterCoords: g
            });
            try {
                En({
                    action: "dltrackOpenInputHighlighter",
                    payload: {
                        domainName: e.websiteData.hostname
                    }
                }),
                g()
            } catch (e) {
                console.error(e)
            }
        }
        )),
        Go((()=>{
            l()
        }
        ));
        return t.$$set = e=>{
            "onClose"in e && o(5, i = e.onClose),
            "icon"in e && o(1, s = e.icon),
            "position"in e && o(0, a = e.position),
            "registerHighlighterCallbacks"in e && o(6, r = e.registerHighlighterCallbacks),
            "unregisterHighlighterCallbacks"in e && o(7, l = e.unregisterHighlighterCallbacks)
        }
        ,
        t.$$.update = ()=>{
            780 & t.$$.dirty && o(0, a = (({iconCoordinates: e, viewportSize: t, highlighterHeight: n, highlighterWidth: o})=>{
                if (!s)
                    return "top";
                const i = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e,t] of Object.entries(i))
                    if (t)
                        return e;
                return "top"
            }
            )({
                iconCoordinates: c,
                viewportSize: d,
                highlighterHeight: u,
                highlighterWidth: p
            }))
        }
        ,
        [a, s, u, p, m, i, r, l, c, d, ()=>m(), function() {
            u = this.clientHeight,
            p = this.clientWidth,
            o(2, u),
            o(3, p)
        }
        ]
    }
    class Pp extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Rp, Ap, Zn, {
                onClose: 5,
                icon: 1,
                position: 0,
                registerHighlighterCallbacks: 6,
                unregisterHighlighterCallbacks: 7
            })
        }
    }
    function zp(e) {
        let t, n, o, i, s;
        return i = new Zl({
            props: {
                value: e[2].targetLanguageUserInput,
                showChooseLanguageOption: !0,
                fontSize: "sm"
            }
        }),
        i.$on("selection", e[5]),
        {
            c() {
                t = wo("p"),
                n = $o(e[0]),
                o = bo(),
                bi(i.$$.fragment),
                Lo(t, "class", "font-bold svelte-1bwyi2r")
            },
            m(e, a) {
                ho(e, t, a),
                po(t, n),
                ho(e, o, a),
                yi(i, e, a),
                s = !0
            },
            p(e, t) {
                (!s || 1 & t) && Eo(n, e[0]);
                const o = {};
                4 & t && (o.value = e[2].targetLanguageUserInput),
                i.$set(o)
            },
            i(e) {
                s || (fi(i.$$.fragment, e),
                s = !0)
            },
            o(e) {
                _i(i.$$.fragment, e),
                s = !1
            },
            d(e) {
                e && fo(t),
                e && fo(o),
                Ci(i, e)
            }
        }
    }
    function Hp(e) {
        let t, n, o = (e[2].enableInputTranslation || e[1]) && zp(e);
        return {
            c() {
                t = wo("div"),
                o && o.c()
            },
            m(e, i) {
                ho(e, t, i),
                o && o.m(t, null),
                n = !0
            },
            p(e, [n]) {
                e[2].enableInputTranslation || e[1] ? o ? (o.p(e, n),
                6 & n && fi(o, 1)) : (o = zp(e),
                o.c(),
                fi(o, 1),
                o.m(t, null)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                e && fo(t),
                o && o.d()
            }
        }
    }
    function Fp(e, t, n) {
        let o;
        const i = Ko("deepl_settings");
        Xn(e, i, (e=>n(2, o = e)));
        const s = Vo();
        let {subHeaderText: a=chrome.i18n.getMessage("input_translation_settings_target_language")} = t
          , {fromShortcut: r} = t;
        function l(e) {
            s("languageChanged", {
                lang: e
            })
        }
        return e.$$set = e=>{
            "subHeaderText"in e && n(0, a = e.subHeaderText),
            "fromShortcut"in e && n(1, r = e.fromShortcut)
        }
        ,
        [a, r, o, i, l, e=>l(e.detail.selectedOption)]
    }
    class Bp extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Fp, Hp, Zn, {
                subHeaderText: 0,
                fromShortcut: 1
            })
        }
    }
    function Up(e) {
        let t, n, o, i, s, a, r, l, c;
        const d = e[4].default
          , u = Qn(d, e, e[3], null);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("button"),
                i = bo(),
                s = wo("div"),
                u && u.c(),
                Lo(o, "type", "button"),
                Lo(o, "class", "close-icon svelte-1ux16nh"),
                Lo(n, "class", "header svelte-1ux16nh"),
                Lo(s, "class", "content"),
                Lo(t, "class", "container svelte-1ux16nh"),
                ii((()=>e[6].call(t)))
            },
            m(d, p) {
                ho(d, t, p),
                po(t, n),
                po(n, o),
                po(t, i),
                po(t, s),
                u && u.m(s, null),
                a = Oo(t, e[6].bind(t)),
                r = !0,
                l || (c = Co(o, "click", e[5]),
                l = !0)
            },
            p(e, [t]) {
                u && u.p && (!r || 8 & t) && eo(u, d, e, e[3], r ? Jn(d, e[3], t, null) : to(e[3]), null)
            },
            i(e) {
                r || (fi(u, e),
                r = !0)
            },
            o(e) {
                _i(u, e),
                r = !1
            },
            d(e) {
                e && fo(t),
                u && u.d(e),
                a(),
                l = !1,
                c()
            }
        }
    }
    function qp(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t;
        const s = Vo();
        let a, r;
        return e.$$set = e=>{
            "$$scope"in e && n(3, i = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            3 & e.$$.dirty && s("resize", {
                offsetHeight: a,
                offsetWidth: r
            })
        }
        ,
        [a, r, s, i, o, ()=>s("close"), function() {
            a = this.offsetHeight,
            r = this.offsetWidth,
            n(0, a),
            n(1, r)
        }
        ]
    }
    class jp extends Ti {
        constructor(e) {
            super(),
            xi(this, e, qp, Up, Zn, {})
        }
    }
    function Wp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w = chrome.i18n.getMessage("input_translation_setting_button_ok") + "";
        return s = new Zd({
            props: {
                name: "disable_input_translation",
                id: de,
                value: de,
                cssClassName: "radio--with-border",
                checked: e[6] === de,
                label: chrome.i18n.getMessage("input_translation_setting_radio_disable_per_site"),
                dataQa: "input-translation_hide-icon_disable-per-site"
            }
        }),
        s.$on("change", e[14]),
        r = new Zd({
            props: {
                name: "disable_input_translation",
                id: ue,
                value: ue,
                cssClassName: "radio--with-border",
                checked: e[6] === ue,
                label: chrome.i18n.getMessage("input_translation_setting_radio_disable_everywhere"),
                dataQa: "input-translation_hide-icon_disable-always"
            }
        }),
        r.$on("change", e[14]),
        {
            c() {
                t = wo("div"),
                n = wo("p"),
                n.textContent = `${chrome.i18n.getMessage("input_translation_setting_label_title_v2")}`,
                o = bo(),
                i = wo("div"),
                bi(s.$$.fragment),
                a = bo(),
                bi(r.$$.fragment),
                l = bo(),
                c = wo("div"),
                d = wo("span"),
                d.textContent = `${chrome.i18n.getMessage("input_translation_setting_link_cancel")}`,
                u = bo(),
                p = wo("button"),
                g = $o(w),
                Lo(n, "class", "font-bold svelte-1ogsz17"),
                Lo(i, "class", "option-container svelte-1ogsz17"),
                Lo(d, "class", "link svelte-1ogsz17"),
                Lo(p, "class", m = no("btn btn-primary " + (e[6] ? "" : "disabled")) + " svelte-1ogsz17"),
                Lo(p, "data-qa", "input-translation_hide-icon_accept"),
                Lo(c, "class", "action-container svelte-1ogsz17"),
                Lo(t, "class", "dl-widget svelte-1ogsz17"),
                Lo(t, "data-qa", "dl-input-translate-turnoff-settings")
            },
            m(m, w) {
                ho(m, t, w),
                po(t, n),
                po(t, o),
                po(t, i),
                yi(s, i, null),
                po(i, a),
                yi(r, i, null),
                po(t, l),
                po(t, c),
                po(c, d),
                po(c, u),
                po(c, p),
                po(p, g),
                h = !0,
                f || (_ = [Co(d, "click", (function() {
                    Vn(e[1] === xp ? e[9] : e[11]) && (e[1] === xp ? e[9] : e[11]).apply(this, arguments)
                }
                )), Co(p, "click", e[13])],
                f = !0)
            },
            p(t, n) {
                e = t;
                const o = {};
                64 & n && (o.checked = e[6] === de),
                s.$set(o);
                const i = {};
                64 & n && (i.checked = e[6] === ue),
                r.$set(i),
                (!h || 64 & n && m !== (m = no("btn btn-primary " + (e[6] ? "" : "disabled")) + " svelte-1ogsz17")) && Lo(p, "class", m)
            },
            i(e) {
                h || (fi(s.$$.fragment, e),
                fi(r.$$.fragment, e),
                h = !0)
            },
            o(e) {
                _i(s.$$.fragment, e),
                _i(r.$$.fragment, e),
                h = !1
            },
            d(e) {
                e && fo(t),
                Ci(s),
                Ci(r),
                f = !1,
                Gn(_)
            }
        }
    }
    function Gp(e) {
        let t, n, o, i, s;
        n = new Bp({
            props: {
                fromShortcut: e[2]
            }
        }),
        n.$on("languageChanged", e[22]);
        let a = e[7] && e[7].targetLanguageUserInput && Vp(e);
        return {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                o = bo(),
                a && a.c(),
                i = yo(),
                Lo(t, "class", "dl-widget svelte-1ogsz17")
            },
            m(e, r) {
                ho(e, t, r),
                yi(n, t, null),
                ho(e, o, r),
                a && a.m(e, r),
                ho(e, i, r),
                s = !0
            },
            p(e, t) {
                const o = {};
                4 & t && (o.fromShortcut = e[2]),
                n.$set(o),
                e[7] && e[7].targetLanguageUserInput ? a ? a.p(e, t) : (a = Vp(e),
                a.c(),
                a.m(i.parentNode, i)) : a && (a.d(1),
                a = null)
            },
            i(e) {
                s || (fi(n.$$.fragment, e),
                s = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                s = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                e && fo(o),
                a && a.d(e),
                e && fo(i)
            }
        }
    }
    function Vp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("p"),
                o.textContent = `${chrome.i18n.getMessage("input_translation_label_show_icon_switch")}`,
                i = bo(),
                s = wo("span"),
                a = bo(),
                r = wo("div"),
                l = wo("div"),
                c = wo("div"),
                d = wo("span"),
                d.textContent = `${chrome.i18n.getMessage("input_translation_link_more_settings")}`,
                u = bo(),
                p = wo("span"),
                Lo(o, "class", "svelte-1ogsz17"),
                Lo(s, "class", "icon icon-toggle-on svelte-1ogsz17"),
                Lo(n, "class", "link-input-settings svelte-1ogsz17"),
                Lo(n, "data-qa", "deepl-input-translate-hide-extension"),
                Lo(t, "class", "dl-widget svelte-1ogsz17"),
                Lo(p, "class", "icon icon-external-link  svelte-1ogsz17"),
                Lo(c, "class", "link link-settings svelte-1ogsz17"),
                Lo(c, "data-qa", "dl-input-translate-open-settings-page"),
                Lo(l, "class", "action-container svelte-1ogsz17"),
                Lo(r, "class", "dl-widget svelte-1ogsz17")
            },
            m(h, f) {
                ho(h, t, f),
                po(t, n),
                po(n, o),
                po(n, i),
                po(n, s),
                ho(h, a, f),
                ho(h, r, f),
                po(r, l),
                po(l, c),
                po(c, d),
                po(c, u),
                po(c, p),
                g || (m = [Co(n, "click", e[10]), Co(c, "click", e[12])],
                g = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                e && fo(a),
                e && fo(r),
                g = !1,
                Gn(m)
            }
        }
    }
    function Zp(e) {
        let t, n, o, i;
        const s = [Gp, Wp]
          , a = [];
        function r(e, t) {
            return e[5] === Cp ? 0 : e[5] === xp ? 1 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)),
        {
            c() {
                n && n.c(),
                o = yo()
            },
            m(e, n) {
                ~t && a[t].m(e, n),
                ho(e, o, n),
                i = !0
            },
            p(e, i) {
                let l = t;
                t = r(e),
                t === l ? ~t && a[t].p(e, i) : (n && (mi(),
                _i(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                hi()),
                ~t ? (n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                fi(n, 1),
                n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || (fi(n),
                i = !0)
            },
            o(e) {
                _i(n),
                i = !1
            },
            d(e) {
                ~t && a[t].d(e),
                e && fo(o)
            }
        }
    }
    function Kp(e) {
        let t, n, o, i, s;
        return n = new jp({
            props: {
                $$slots: {
                    default: [Zp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        n.$on("close", e[23]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", o = "settings-container settings-container__" + e[0] + " svelte-1ogsz17"),
                ii((()=>e[24].call(t)))
            },
            m(o, a) {
                ho(o, t, a),
                yi(n, t, null),
                i = Oo(t, e[24].bind(t)),
                s = !0
            },
            p(e, [i]) {
                const a = {};
                1073742054 & i && (a.$$scope = {
                    dirty: i,
                    ctx: e
                }),
                n.$set(a),
                (!s || 1 & i && o !== (o = "settings-container settings-container__" + e[0] + " svelte-1ogsz17")) && Lo(t, "class", o)
            },
            i(e) {
                s || (fi(n.$$.fragment, e),
                s = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                s = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                i()
            }
        }
    }
    function Xp(e, t, n) {
        let o;
        const i = Vo();
        let s = Cp;
        const a = Ko("deepl_settings");
        Xn(e, a, (e=>n(7, o = e)));
        let {startPage: r} = t
          , {fromShortcut: l=!1} = t
          , {icon: c} = t
          , {position: d="top"} = t
          , {registerSettingsCallbacks: u} = t
          , {unregisterSettingsCallbacks: p} = t
          , {closeSettings: g} = t
          , m = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
          , h = {
            height: 0,
            width: 0
        }
          , f = 140
          , _ = 387
          , w = "";
        const v = ()=>{
            if (c) {
                const e = c.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"])
                    e[n] !== m[n] && (t[n] = e[n]);
                Object.keys(t).length && n(20, m = {
                    ...m,
                    ...t
                });
                let o = {};
                window.innerHeight !== h.height && (o.height = window.innerHeight),
                window.innerWidth !== h.width && (o.width = window.innerWidth),
                Object.keys(o).length && n(21, h = {
                    ...h,
                    ...o
                })
            } else
                n(20, m = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
        }
        ;
        function $(e) {
            n(5, s = e)
        }
        return Wo((()=>{
            v(),
            u({
                recalculateSettingsCoords: v
            })
        }
        )),
        Go((()=>{
            p()
        }
        )),
        e.$$set = e=>{
            "startPage"in e && n(1, r = e.startPage),
            "fromShortcut"in e && n(2, l = e.fromShortcut),
            "icon"in e && n(15, c = e.icon),
            "position"in e && n(0, d = e.position),
            "registerSettingsCallbacks"in e && n(16, u = e.registerSettingsCallbacks),
            "unregisterSettingsCallbacks"in e && n(17, p = e.unregisterSettingsCallbacks),
            "closeSettings"in e && n(18, g = e.closeSettings)
        }
        ,
        e.$$.update = ()=>{
            3145752 & e.$$.dirty && n(0, d = (({iconCoordinates: e, viewportSize: t, popupHeight: n, popupWidth: o})=>{
                if (!c)
                    return "top";
                const i = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e,t] of Object.entries(i))
                    if (t)
                        return e;
                return "top"
            }
            )({
                iconCoordinates: m,
                viewportSize: h,
                popupHeight: f,
                popupWidth: _
            })),
            2 & e.$$.dirty && r && n(5, s = r)
        }
        ,
        [d, r, l, f, _, s, w, o, a, function() {
            i("close")
        }
        , function() {
            $(xp)
        }
        , function() {
            n(6, w = ""),
            $(Cp)
        }
        , function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: hl.settings_writing
                }
            })
        }
        , function() {
            if (!w)
                return;
            switch (w) {
            case ue:
                a.set({
                    enableInputTranslation: !1
                }),
                En({
                    action: "dlTrackSettingChanged",
                    payload: {
                        settingType: ue,
                        domainName: window.location.hostname,
                        uiFunction: pe,
                        uiLocation: F
                    }
                }),
                g();
                break;
            case de:
                !function() {
                    let e = o.blacklistDomainsForWriting;
                    e && !e.includes(window.location.hostname) && (e.push(window.location.hostname),
                    a.set({
                        blacklistDomainsForWriting: e
                    }),
                    En({
                        action: "dlTrackSettingChanged",
                        payload: {
                            settingType: de,
                            domainName: window.location.hostname,
                            uiFunction: pe,
                            uiLocation: F
                        }
                    }));
                    g()
                }()
            }
            let e = Ui(window.location.hostname, ["www."]);
            En({
                action: "dlSendNotification",
                payload: {
                    type: I,
                    options: {
                        theme: N.green_theme,
                        currentDomain: e,
                        saveAction: w,
                        settingsPageURL: hl.settings_writing
                    }
                }
            })
        }
        , function(e) {
            n(6, w = e.currentTarget.value)
        }
        , c, u, p, g, v, m, h, function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , function() {
            f = this.clientHeight,
            _ = this.clientWidth,
            n(3, f),
            n(4, _)
        }
        ]
    }
    class Qp extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Xp, Kp, Zn, {
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
    function Yp(e) {
        let t, n;
        return t = new al({
            props: {
                errorMessage: e[1]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                2 & n && (o.errorMessage = e[1]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Jp(e) {
        let t, n, o, i, s;
        return n = new jp({
            props: {
                $$slots: {
                    default: [Yp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        n.$on("close", e[10]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", o = "error-container error-container__" + e[0] + " svelte-1h56a6t"),
                ii((()=>e[11].call(t)))
            },
            m(o, a) {
                ho(o, t, a),
                yi(n, t, null),
                i = Oo(t, e[11].bind(t)),
                s = !0
            },
            p(e, [i]) {
                const a = {};
                8194 & i && (a.$$scope = {
                    dirty: i,
                    ctx: e
                }),
                n.$set(a),
                (!s || 1 & i && o !== (o = "error-container error-container__" + e[0] + " svelte-1h56a6t")) && Lo(t, "class", o)
            },
            i(e) {
                s || (fi(n.$$.fragment, e),
                s = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                s = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                i()
            }
        }
    }
    function eg(e, t, n) {
        let {errorMessage: o} = t
          , {icon: i} = t
          , {position: s="top"} = t
          , {registerErrorCallbacks: a} = t
          , {unregisterErrorCallbacks: r} = t
          , l = 140
          , c = 387
          , d = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
          , u = {
            height: 0,
            width: 0
        };
        const p = ()=>{
            if (i) {
                const e = i.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"])
                    e[n] !== d[n] && (t[n] = e[n]);
                Object.keys(t).length && n(8, d = {
                    ...d,
                    ...t
                });
                let o = {};
                window.innerHeight !== u.height && (o.height = window.innerHeight),
                window.innerWidth !== u.width && (o.width = window.innerWidth),
                Object.keys(o).length && n(9, u = {
                    ...u,
                    ...o
                })
            } else
                n(8, d = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
        }
        ;
        return Wo((()=>{
            p(),
            a({
                recalculateErrorCoords: p
            })
        }
        )),
        Go((()=>{
            r()
        }
        )),
        e.$$set = e=>{
            "errorMessage"in e && n(1, o = e.errorMessage),
            "icon"in e && n(4, i = e.icon),
            "position"in e && n(0, s = e.position),
            "registerErrorCallbacks"in e && n(5, a = e.registerErrorCallbacks),
            "unregisterErrorCallbacks"in e && n(6, r = e.unregisterErrorCallbacks)
        }
        ,
        e.$$.update = ()=>{
            780 & e.$$.dirty && n(0, s = (({iconCoordinates: e, viewportSize: t, highlighterHeight: n, highlighterWidth: o})=>{
                if (!i)
                    return "top";
                const s = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e,t] of Object.entries(s))
                    if (t)
                        return e;
                return "top"
            }
            )({
                iconCoordinates: d,
                viewportSize: u,
                popupHeight: l,
                popupWidth: c
            }))
        }
        ,
        [s, o, l, c, i, a, r, p, d, u, function(t) {
            Xo.call(this, e, t)
        }
        , function() {
            l = this.clientHeight,
            c = this.clientWidth,
            n(2, l),
            n(3, c)
        }
        ]
    }
    class tg extends Ti {
        constructor(e) {
            super(),
            xi(this, e, eg, Jp, Zn, {
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
    function ng(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = [Co(t, "click_outside", e[13]), io(In.call(null, t, {
                    isShadow: !0
                }))],
                n = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                n = !1,
                Gn(o)
            }
        }
    }
    function og(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p;
        o = new Op({
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
        let g = e[3] && ig(e)
          , m = e[4] && sg(e)
          , h = e[7] && ag(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                bi(o.$$.fragment),
                i = bo(),
                g && g.c(),
                s = bo(),
                m && m.c(),
                a = bo(),
                h && h.c(),
                Lo(n, "class", "dl-input-placeholder svelte-16rwmnb"),
                No(n, "reduced-space", !e[10]),
                No(n, "other-extension-present", e[0].isLanguageToolsPresent || e[0].isGrammarlyPresent),
                Lo(t, "class", "dl-input-positioner svelte-16rwmnb"),
                Lo(t, "style", c = [`top: ${e[0].top}px;`, `left: ${e[0].left}px;`, `height: ${e[0].height}px;`, `width: ${e[0].width}px;`, `position: ${e[0].position};`].join(" ")),
                No(t, "debug-mode", lg)
            },
            m(r, l) {
                ho(r, t, l),
                po(t, n),
                yi(o, n, null),
                po(n, i),
                g && g.m(n, null),
                po(n, s),
                m && m.m(n, null),
                po(n, a),
                h && h.m(n, null),
                e[34](n),
                d = !0,
                u || (p = [io(In.call(null, n, {
                    isShadow: !0
                })), Co(n, "click_outside", e[33]), Co(n, "click", e[14])],
                u = !0)
            },
            p(e, i) {
                const r = {};
                2 & i[0] && (r.inputArea = e[1]),
                128 & i[0] && (r.setErrorMessage = e[30]),
                o.$set(r),
                e[3] ? g ? (g.p(e, i),
                8 & i[0] && fi(g, 1)) : (g = ig(e),
                g.c(),
                fi(g, 1),
                g.m(n, s)) : g && (mi(),
                _i(g, 1, 1, (()=>{
                    g = null
                }
                )),
                hi()),
                e[4] ? m ? (m.p(e, i),
                16 & i[0] && fi(m, 1)) : (m = sg(e),
                m.c(),
                fi(m, 1),
                m.m(n, a)) : m && (mi(),
                _i(m, 1, 1, (()=>{
                    m = null
                }
                )),
                hi()),
                e[7] ? h ? (h.p(e, i),
                128 & i[0] && fi(h, 1)) : (h = ag(e),
                h.c(),
                fi(h, 1),
                h.m(n, null)) : h && (mi(),
                _i(h, 1, 1, (()=>{
                    h = null
                }
                )),
                hi()),
                (!d || 1024 & i[0]) && No(n, "reduced-space", !e[10]),
                (!d || 1 & i[0]) && No(n, "other-extension-present", e[0].isLanguageToolsPresent || e[0].isGrammarlyPresent),
                (!d || 1 & i[0] && c !== (c = [`top: ${e[0].top}px;`, `left: ${e[0].left}px;`, `height: ${e[0].height}px;`, `width: ${e[0].width}px;`, `position: ${e[0].position};`].join(" "))) && Lo(t, "style", c)
            },
            i(e) {
                d || (fi(o.$$.fragment, e),
                fi(g),
                fi(m),
                fi(h),
                ii((()=>{
                    l && l.end(1),
                    r = vi(n, lr, {
                        duration: 100
                    }),
                    r.start()
                }
                )),
                d = !0)
            },
            o(e) {
                _i(o.$$.fragment, e),
                _i(g),
                _i(m),
                _i(h),
                r && r.invalidate(),
                l = $i(n, lr, {
                    duration: 150
                }),
                d = !1
            },
            d(n) {
                n && fo(t),
                Ci(o),
                g && g.d(),
                m && m.d(),
                h && h.d(),
                e[34](null),
                n && l && l.end(),
                u = !1,
                Gn(p)
            }
        }
    }
    function ig(e) {
        let t, n, o;
        return n = new Pp({
            props: {
                onClose: e[15],
                position: "top",
                registerHighlighterCallbacks: e[25],
                unregisterHighlighterCallbacks: e[26],
                icon: e[2]
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "dl-onboarding-highlighter svelte-16rwmnb")
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                4 & t[0] && (o.icon = e[2]),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function sg(e) {
        let t, n;
        return t = new Qp({
            props: {
                icon: e[2],
                startPage: e[5],
                fromShortcut: e[6],
                position: "top",
                registerSettingsCallbacks: e[21],
                unregisterSettingsCallbacks: e[22],
                closeSettings: e[18]
            }
        }),
        t.$on("languageChanged", e[31]),
        t.$on("close", e[18]),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n[0] && (o.icon = e[2]),
                32 & n[0] && (o.startPage = e[5]),
                64 & n[0] && (o.fromShortcut = e[6]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function ag(e) {
        let t, n;
        return t = new tg({
            props: {
                errorMessage: e[7],
                icon: e[2],
                position: "top",
                registerErrorCallbacks: e[23],
                unregisterErrorCallbacks: e[24]
            }
        }),
        t.$on("close", e[32]),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                128 & n[0] && (o.errorMessage = e[7]),
                4 & n[0] && (o.icon = e[2]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function rg(e) {
        let t, n, o, i;
        const s = [og, ng]
          , a = [];
        function r(e, t) {
            return e[9] && e[0] && e[11] ? 0 : 1
        }
        return t = r(e),
        n = a[t] = s[t](e),
        {
            c() {
                n.c(),
                o = yo()
            },
            m(e, n) {
                a[t].m(e, n),
                ho(e, o, n),
                i = !0
            },
            p(e, i) {
                let l = t;
                t = r(e),
                t === l ? a[t].p(e, i) : (mi(),
                _i(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                hi(),
                n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                fi(n, 1),
                n.m(o.parentNode, o))
            },
            i(e) {
                i || (fi(n),
                i = !0)
            },
            o(e) {
                _i(n),
                i = !1
            },
            d(e) {
                a[t].d(e),
                e && fo(o)
            }
        }
    }
    const lg = !1;
    function cg(t, n, o) {
        let i, s, a;
        const r = Ko("deepl_settings");
        Xn(t, r, (e=>o(43, a = e)));
        const l = 20
          , c = 40;
        let d, u, p, g, m, h, f, _, w, v, $ = !1, b = !1, y = !1, C = !1, x = !1, {trackInputInjectionIfNecessary: T} = n, {registerPositionerCallbacks: L} = n, {unregisterPositionerCallbacks: E} = n, k = [], S = {
            top: 0,
            left: 0,
            height: 0,
            width: 0,
            position: "absolute",
            isLanguageToolsPresent: !1,
            isGrammarlyPresent: !1
        }, M = !1;
        const I = ()=>{
            N(),
            o(7, g = void 0),
            U(),
            k = [],
            o(1, d = void 0)
        }
          , D = ()=>{
            $ = !1
        }
          , O = ()=>{
            if (!a.isInputHighlighterShown) {
                oo(r, a.isInputHighlighterShown = !0, a),
                o(3, b = !0);
                try {
                    En({
                        action: "dltrackOpenInputHighlighter",
                        payload: {
                            domainName: e.websiteData.hostname
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }
        }
          , N = (e=Se)=>{
            o(3, b = !1);
            try {
                En({
                    action: "dltrackCloseInputHighlighter",
                    payload: {
                        event: e
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }
          , A = ()=>{
            P(),
            M && (H(),
            v && v(),
            b && h && h(),
            y && f && f(),
            _ && _())
        }
          , R = (e=document.activeElement)=>{
            const t = e.contentDocument;
            return t && t.activeElement ? R(t.activeElement) : e
        }
          , P = ()=>{
            const e = R()
              , t = !$ && e !== d
              , n = e && _p(e)
              , i = d && !d.isConnected;
            !t || n || x ? (x = !1,
            t ? (I(),
            n && (o(1, d = document.activeElement),
            k = vp({
                inputArea: d
            }),
            B(),
            T(),
            O())) : i && I()) : x = !0
        }
          , H = ()=>{
            o(0, S = wp({
                inputArea: d
            }))
        }
          , F = ()=>{
            H()
        }
          , B = ()=>{
            o(9, M = !0),
            H();
            for (const e of k)
                e.addEventListener("scroll", F);
            window.addEventListener("scroll", F)
        }
          , U = ()=>{
            o(9, M = !1);
            for (const e of k)
                e.removeEventListener("scroll", F);
            window.removeEventListener("scroll", F),
            W()
        }
          , q = ()=>{
            m && m()
        }
          , j = ({page: e, fromShortcut: t=!1}={})=>{
            o(5, p = e),
            o(6, C = t),
            y || (o(4, y = !0),
            En({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: pe,
                    uiLocation: z
                }
            }))
        }
          , W = ()=>{
            y && o(4, y = !1)
        }
        ;
        Wo((()=>{
            k = vp({
                inputArea: d
            }),
            L({
                processRefreshCycle: A,
                triggerTranslation: q,
                openSettings: j
            })
        }
        )),
        Go((()=>{
            for (const e of k)
                e.removeEventListener("scroll", F);
            E()
        }
        ));
        return t.$$set = e=>{
            "trackInputInjectionIfNecessary"in e && o(27, T = e.trackInputInjectionIfNecessary),
            "registerPositionerCallbacks"in e && o(28, L = e.registerPositionerCallbacks),
            "unregisterPositionerCallbacks"in e && o(29, E = e.unregisterPositionerCallbacks)
        }
        ,
        t.$$.update = ()=>{
            1 & t.$$.dirty[0] && o(11, i = S.height >= l),
            1 & t.$$.dirty[0] && o(10, s = S.height >= c)
        }
        ,
        [S, d, u, b, y, p, C, g, w, M, s, i, r, D, ()=>{
            $ = !0
        }
        , N, R, j, W, ({processRefreshCycle: e, languageChanged: t, triggerTranslation: n})=>{
            v = e,
            o(8, w = t),
            m = n
        }
        , ()=>{
            v = void 0,
            o(8, w = void 0),
            m = void 0
        }
        , ({recalculateSettingsCoords: e})=>{
            f = e
        }
        , ()=>{
            f = void 0
        }
        , ({recalculateErrorCoords: e})=>{
            _ = e
        }
        , ()=>{
            _ = void 0
        }
        , ({recalculateHighlighterCoords: e})=>{
            h = e
        }
        , ()=>{
            h = void 0
        }
        , T, L, E, e=>{
            o(7, g = e)
        }
        , e=>w && w(e.detail.lang), ()=>{
            o(7, g = void 0)
        }
        , ()=>{
            D(),
            W()
        }
        , function(e) {
            Yo[e ? "unshift" : "push"]((()=>{
                u = e,
                o(2, u)
            }
            ))
        }
        ]
    }
    class dg extends Ti {
        constructor(e) {
            super(),
            xi(this, e, cg, rg, Zn, {
                trackInputInjectionIfNecessary: 27,
                registerPositionerCallbacks: 28,
                unregisterPositionerCallbacks: 29
            }, null, [-1, -1])
        }
    }
    function ug(e) {
        let t, n, o;
        return n = new dg({
            props: {
                trackInputInjectionIfNecessary: e[0],
                registerPositionerCallbacks: e[1],
                unregisterPositionerCallbacks: e[2]
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "dl-input-translation-container svelte-ju4595")
            },
            m(e, i) {
                ho(e, t, i),
                yi(n, t, null),
                o = !0
            },
            p: Un,
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function pg(e, t, n) {
        let o, i, s, a;
        Zo("deepl_settings", us),
        Zo("deepl_website_settings", zi);
        let r = !0
          , l = !1;
        const c = ()=>{
            o && o()
        }
          , d = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                n(5, r = e.payload.isActive)
        }
          , u = ()=>{
            a && clearInterval(a),
            a = setInterval(c, 300)
        }
          , p = ()=>{
            clearInterval(a)
        }
        ;
        return Wo((()=>{
            u(),
            chrome.runtime.onMessage.addListener(d)
        }
        )),
        Go((()=>{
            a && p(),
            chrome.runtime.onMessage.removeListener(d)
        }
        )),
        e.$$.update = ()=>{
            32 & e.$$.dirty && (r ? u() : p())
        }
        ,
        [()=>{
            l || (l = !0,
            En({
                action: "dlTrackInputTranslationInjection",
                payload: window.location.host
            }))
        }
        , ({processRefreshCycle: e, triggerTranslation: t, openSettings: n})=>{
            o = e,
            i = t,
            s = n
        }
        , ()=>{
            o = void 0,
            i = void 0,
            s = void 0
        }
        , ()=>{
            i && i()
        }
        , ()=>{
            s && s({
                fromShortcut: !1
            })
        }
        , r]
    }
    class gg extends Ti {
        constructor(e) {
            super(),
            xi(this, e, pg, ug, Zn, {
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
    class mg extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this),
            this.triggerTranslation = this.triggerTranslation.bind(this),
            this.openSettingsFromShortcut = this.openSettingsFromShortcut.bind(this)
        }
        createDOM() {
            this.mainComponent = new gg({
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
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function hg(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("p"),
                n = wo("strong"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_feedback_form_line_1")}`,
                o = bo(),
                i = wo("p"),
                i.textContent = `${chrome.i18n.getMessage("ui_toaster_feedback_form_line_2")}`,
                Lo(n, "class", "svelte-rl2s44"),
                Lo(t, "class", "svelte-rl2s44"),
                Lo(i, "class", "svelte-rl2s44")
            },
            m(e, s) {
                ho(e, t, s),
                po(t, n),
                ho(e, o, s),
                ho(e, i, s)
            },
            p: Un,
            d(e) {
                e && fo(t),
                e && fo(o),
                e && fo(i)
            }
        }
    }
    function fg(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("p"),
                n = wo("strong"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_line_1")}`,
                o = bo(),
                i = wo("p"),
                i.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_line_2")}`,
                Lo(n, "class", "svelte-rl2s44"),
                Lo(t, "class", "svelte-rl2s44"),
                Lo(i, "class", "svelte-rl2s44")
            },
            m(e, s) {
                ho(e, t, s),
                po(t, n),
                ho(e, o, s),
                ho(e, i, s)
            },
            p: Un,
            d(e) {
                e && fo(t),
                e && fo(o),
                e && fo(i)
            }
        }
    }
    function _g(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("p"),
                t.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_1")}`,
                n = bo(),
                o = wo("p"),
                i = wo("strong"),
                i.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_2")}`,
                Lo(t, "class", "svelte-rl2s44"),
                Lo(i, "class", "svelte-rl2s44"),
                Lo(o, "class", "svelte-rl2s44")
            },
            m(e, s) {
                ho(e, t, s),
                ho(e, n, s),
                ho(e, o, s),
                po(o, i)
            },
            p: Un,
            d(e) {
                e && fo(t),
                e && fo(n),
                e && fo(o)
            }
        }
    }
    function wg(e) {
        let t;
        function n(e, t) {
            return e[0] === Le.initial ? $g : e[0] === Le.review ? vg : void 0
        }
        let o = n(e)
          , i = o && o(e);
        return {
            c() {
                t = wo("div"),
                i && i.c(),
                Lo(t, "class", "buttons svelte-rl2s44")
            },
            m(e, n) {
                ho(e, t, n),
                i && i.m(t, null)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i && i.d(1),
                i = o && o(e),
                i && (i.c(),
                i.m(t, null)))
            },
            d(e) {
                e && fo(t),
                i && i.d()
            }
        }
    }
    function vg(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("button"),
                n = wo("span"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_cta")}`,
                Lo(t, "class", "svelte-rl2s44")
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                o || (i = Co(t, "click", e[4]),
                o = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                o = !1,
                i()
            }
        }
    }
    function $g(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        return {
            c() {
                t = wo("button"),
                n = wo("i"),
                o = bo(),
                i = wo("span"),
                i.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_bad")}`,
                s = bo(),
                a = wo("button"),
                r = wo("i"),
                l = bo(),
                c = wo("span"),
                c.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_good")}`,
                Lo(n, "class", "icon-bad svelte-rl2s44"),
                Lo(t, "class", "svelte-rl2s44"),
                Lo(r, "class", "icon-good svelte-rl2s44"),
                Lo(a, "class", "svelte-rl2s44")
            },
            m(p, g) {
                ho(p, t, g),
                po(t, n),
                po(t, o),
                po(t, i),
                ho(p, s, g),
                ho(p, a, g),
                po(a, r),
                po(a, l),
                po(a, c),
                d || (u = [Co(t, "click", e[2]), Co(a, "click", e[3])],
                d = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                e && fo(s),
                e && fo(a),
                d = !1,
                Gn(u)
            }
        }
    }
    function bg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m = [Le.initial, Le.review].includes(e[0]);
        function h(e, t) {
            return e[0] === Le.initial ? _g : e[0] === Le.review ? fg : e[0] === Le.feedback ? hg : void 0
        }
        let f = h(e)
          , _ = f && f(e)
          , w = m && wg(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                i = bo(),
                s = wo("div"),
                a = wo("button"),
                r = bo(),
                _ && _.c(),
                l = bo(),
                w && w.c(),
                Lo(o, "class", "logo svelte-rl2s44"),
                Lo(a, "class", "close-icon svelte-rl2s44"),
                Lo(s, "class", "content svelte-rl2s44"),
                Lo(n, "class", "body svelte-rl2s44"),
                Lo(t, "class", "container svelte-rl2s44")
            },
            m(c, d) {
                ho(c, t, d),
                po(t, n),
                po(n, o),
                po(n, i),
                po(n, s),
                po(s, a),
                po(s, r),
                _ && _.m(s, null),
                po(t, l),
                w && w.m(t, null),
                u = !0,
                p || (g = Co(a, "click", (function() {
                    Vn(e[1]) && e[1].apply(this, arguments)
                }
                )),
                p = !0)
            },
            p(n, [o]) {
                f === (f = h(e = n)) && _ ? _.p(e, o) : (_ && _.d(1),
                _ = f && f(e),
                _ && (_.c(),
                _.m(s, null))),
                1 & o && (m = [Le.initial, Le.review].includes(e[0])),
                m ? w ? w.p(e, o) : (w = wg(e),
                w.c(),
                w.m(t, null)) : w && (w.d(1),
                w = null)
            },
            i(e) {
                u || (ii((()=>{
                    d && d.end(1),
                    c = vi(t, fly, {
                        x: 100,
                        duration: 1e3
                    }),
                    c.start()
                }
                )),
                u = !0)
            },
            o(e) {
                c && c.invalidate(),
                d = $i(t, fly, {
                    x: 100,
                    duration: 1e3
                }),
                u = !1
            },
            d(e) {
                e && fo(t),
                _ && _.d(),
                w && w.d(),
                e && d && d.end(),
                p = !1,
                g()
            }
        }
    }
    function yg(e, t, n) {
        Zo("deepl_settings", us),
        Zo("deepl_website_settings", zi);
        let {onClose: o} = t
          , {reviewStage: i=Le.initial} = t;
        return e.$$set = e=>{
            "onClose"in e && n(1, o = e.onClose),
            "reviewStage"in e && n(0, i = e.reviewStage)
        }
        ,
        [i, o, function() {
            us.set({
                shouldDisplayFeedbackPopup: !0
            }),
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Zi
                }
            }),
            o()
        }
        , function() {
            n(0, i = Le.review)
        }
        , function() {
            let e = es;
            chrome.runtime.id === be && (e = ts),
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: e
                }
            }),
            o()
        }
        ]
    }
    window.customElements.define("deepl-input-controller", mg);
    class Cg extends Ti {
        constructor(e) {
            super(),
            xi(this, e, yg, bg, Zn, {
                onClose: 1,
                reviewStage: 0
            })
        }
    }
    class xg extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({reviewStage: e}) {
            this.shadowContainer.style.cssText = `position: fixed; bottom: 32px; right: 32px; z-index: ${S.deepl_inline_ui.z_index}`,
            this.mainComponent = new Cg({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    reviewStage: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Tg(t, n, o) {
        switch (t.action) {
        case "dlTranslate":
            t.sourceLang && ja(t.sourceLang, m),
            o();
            break;
        case "dlShowOriginal":
            zi.update({
                translationState: r
            }),
            o();
            break;
        case "dlDefaultPopUpMounting":
            e.websiteData.translationState === i && Vs(),
            Qs(),
            o();
            break;
        case "dlTabChanged":
            setTimeout(Qa, 500),
            o();
            break;
        case "dlTranslateInline":
            Qa().then((()=>Ua(t))),
            o();
            break;
        case "dlTranslateSelectionRightClick":
            Qa().then((()=>qa(t.payload))),
            o();
            break;
        case "dlGetWebsiteData":
            Qa().then((()=>o(e.websiteData)));
            break;
        case "dlShowNotification":
            ca(t.payload.type, t.payload.options),
            o();
            break;
        case "dlErrorVisibility":
            console.log("content listener", t),
            or(t.payload.state),
            o();
            break;
        case "dlShowAskForAReviewPopup":
            da(Le.initial),
            o()
        }
        return !0
    }
    window.customElements.define("deepl-ask-for-review-popup", xg);
    const Lg = ()=>{
        const e = window.location.hostname.split(".");
        if (e.length < 2)
            return !1;
        return "deepl.com" === `${e.at(-2)}.${e.at(-1)}`
    }
      , Eg = ()=>!Vt() && !Lg();
    document.dispatchEvent(new CustomEvent("deepl-reset-event"));
    try {
        chrome.runtime.onMessage.addListener(Tg),
        Dn((()=>{
            zi.update({
                translationState: r
            }),
            Hi(),
            chrome.runtime.onMessage.removeListener(Tg)
        }
        ))
    } catch (e) {
        console.error(e),
        Nt(e.message)
    }
    try {
        ga(window.location.host),
        ir(window.location.host),
        ma(window.location.href),
        window.addEventListener("load", Ja),
        Eg() && er(),
        tr(),
        pa(window.location.host)
    } catch (e) {
        console.error(e),
        Nt(e.message)
    }
    const kg = e=>({})
      , Sg = e=>({})
      , Mg = e=>({})
      , Ig = e=>({})
      , Dg = e=>({})
      , Og = e=>({})
      , Ng = e=>({})
      , Ag = e=>({})
      , Rg = e=>({})
      , Pg = e=>({})
      , zg = e=>({})
      , Hg = e=>({});
    function Fg(e) {
        let t, n;
        const o = e[3].warning
          , i = Qn(o, e, e[2], Hg);
        return {
            c() {
                t = wo("div"),
                i && i.c(),
                Lo(t, "class", "alert-warning svelte-febp1q")
            },
            m(e, o) {
                ho(e, t, o),
                i && i.m(t, null),
                n = !0
            },
            p(e, t) {
                i && i.p && (!n || 4 & t) && eo(i, o, e, e[2], n ? Jn(o, e[2], t, zg) : to(e[2]), Hg)
            },
            i(e) {
                n || (fi(i, e),
                n = !0)
            },
            o(e) {
                _i(i, e),
                n = !1
            },
            d(e) {
                e && fo(t),
                i && i.d(e)
            }
        }
    }
    function Bg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y = e[1] && Fg(e);
        const C = e[3].header
          , x = Qn(C, e, e[2], Pg)
          , T = e[3].usp1
          , L = Qn(T, e, e[2], Ag)
          , E = e[3].usp2
          , k = Qn(E, e, e[2], Og)
          , S = e[3].usp3
          , M = Qn(S, e, e[2], Ig)
          , I = e[3].graphics
          , D = Qn(I, e, e[2], Sg);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("span"),
                i = bo(),
                s = wo("button"),
                a = bo(),
                y && y.c(),
                r = bo(),
                l = wo("h2"),
                x && x.c(),
                c = bo(),
                d = wo("ul"),
                u = wo("li"),
                L && L.c(),
                p = bo(),
                g = wo("li"),
                k && k.c(),
                m = bo(),
                h = wo("li"),
                M && M.c(),
                f = bo(),
                _ = wo("div"),
                D && D.c(),
                Lo(o, "class", "logo svelte-febp1q"),
                Lo(s, "class", "close-button svelte-febp1q"),
                Lo(n, "class", "header svelte-febp1q"),
                Lo(l, "class", "header svelte-febp1q"),
                Lo(u, "class", "svelte-febp1q"),
                Lo(g, "class", "svelte-febp1q"),
                Lo(h, "class", "svelte-febp1q"),
                Lo(d, "class", "ups svelte-febp1q"),
                Lo(_, "class", "graphics"),
                Lo(t, "class", "dl-onboarding-container svelte-febp1q")
            },
            m(w, C) {
                ho(w, t, C),
                po(t, n),
                po(n, o),
                po(n, i),
                po(n, s),
                po(t, a),
                y && y.m(t, null),
                po(t, r),
                po(t, l),
                x && x.m(l, null),
                po(t, c),
                po(t, d),
                po(d, u),
                L && L.m(u, null),
                po(d, p),
                po(d, g),
                k && k.m(g, null),
                po(d, m),
                po(d, h),
                M && M.m(h, null),
                po(t, f),
                po(t, _),
                D && D.m(_, null),
                v = !0,
                $ || (b = Co(s, "click", (function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )),
                $ = !0)
            },
            p(n, [o]) {
                (e = n)[1] ? y ? (y.p(e, o),
                2 & o && fi(y, 1)) : (y = Fg(e),
                y.c(),
                fi(y, 1),
                y.m(t, r)) : y && (mi(),
                _i(y, 1, 1, (()=>{
                    y = null
                }
                )),
                hi()),
                x && x.p && (!v || 4 & o) && eo(x, C, e, e[2], v ? Jn(C, e[2], o, Rg) : to(e[2]), Pg),
                L && L.p && (!v || 4 & o) && eo(L, T, e, e[2], v ? Jn(T, e[2], o, Ng) : to(e[2]), Ag),
                k && k.p && (!v || 4 & o) && eo(k, E, e, e[2], v ? Jn(E, e[2], o, Dg) : to(e[2]), Og),
                M && M.p && (!v || 4 & o) && eo(M, S, e, e[2], v ? Jn(S, e[2], o, Mg) : to(e[2]), Ig),
                D && D.p && (!v || 4 & o) && eo(D, I, e, e[2], v ? Jn(I, e[2], o, kg) : to(e[2]), Sg)
            },
            i(e) {
                v || (fi(y),
                fi(x, e),
                fi(L, e),
                fi(k, e),
                fi(M, e),
                fi(D, e),
                w || ii((()=>{
                    w = vi(t, cr, {
                        y: -5,
                        duration: 500
                    }),
                    w.start()
                }
                )),
                v = !0)
            },
            o(e) {
                _i(y),
                _i(x, e),
                _i(L, e),
                _i(k, e),
                _i(M, e),
                _i(D, e),
                v = !1
            },
            d(e) {
                e && fo(t),
                y && y.d(),
                x && x.d(e),
                L && L.d(e),
                k && k.d(e),
                M && M.d(e),
                D && D.d(e),
                $ = !1,
                b()
            }
        }
    }
    function Ug(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {onClose: s} = t
          , {hasWarning: a} = t;
        return e.$$set = e=>{
            "onClose"in e && n(0, s = e.onClose),
            "hasWarning"in e && n(1, a = e.hasWarning),
            "$$scope"in e && n(2, i = e.$$scope)
        }
        ,
        [s, a, i, o]
    }
    class qg extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Ug, Bg, Zn, {
                onClose: 0,
                hasWarning: 1
            })
        }
    }
    function jg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_title") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "header")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Wg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_1") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "usp1")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Gg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_2") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "usp2")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Vg(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_3") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "usp3")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Zg(e) {
        let t, n, o = chrome.i18n.getMessage("ui_gdocs_onboarding_image_text") + "";
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                Lo(n, "class", "text-box svelte-6bb15d"),
                Lo(t, "slot", "graphics"),
                Lo(t, "class", "onboarding-graphics svelte-6bb15d")
            },
            m(e, i) {
                ho(e, t, i),
                po(t, n),
                n.innerHTML = o
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Kg(e) {
        let t, n;
        return t = new qg({
            props: {
                onClose: e[0],
                $$slots: {
                    graphics: [Zg],
                    usp3: [Vg],
                    usp2: [Gg],
                    usp1: [Wg],
                    header: [jg]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.onClose = e[0]),
                4 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Xg(e, t, n) {
        let {onClose: o} = t;
        return Wo((()=>{
            En({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: Me.gdocs
                }
            })
        }
        )),
        e.$$set = e=>{
            "onClose"in e && n(0, o = e.onClose)
        }
        ,
        [o]
    }
    class Qg extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Xg, Kg, Zn, {
                onClose: 0
            })
        }
    }
    function Yg(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        o = new ud({
            props: {
                tooltip: e[4],
                zIndex: "10000000000",
                $$slots: {
                    default: [Jg]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let p = e[3] && em(e);
        return r = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_turn_off"),
                zIndex: "10000000000",
                $$slots: {
                    default: [nm]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("div"),
                n = wo("button"),
                bi(o.$$.fragment),
                i = bo(),
                p && p.c(),
                s = bo(),
                a = wo("button"),
                bi(r.$$.fragment),
                Lo(n, "class", "dl-icon-circle dl-icon svelte-1lzcuuj"),
                Lo(a, "class", "dl-icon-circle dl-on-off-icon svelte-1lzcuuj"),
                Lo(a, "data-qa", "deepl-inline-translate-menu-icon"),
                Lo(t, "class", "dl-gdocs-icon svelte-1lzcuuj"),
                So(t, "top", e[5].top),
                So(t, "left", e[5].left),
                No(t, "has-deepl-write", e[3])
            },
            m(l, g) {
                ho(l, t, g),
                po(t, n),
                yi(o, n, null),
                po(t, i),
                p && p.m(t, null),
                po(t, s),
                po(t, a),
                yi(r, a, null),
                c = !0,
                d || (u = [Co(n, "click", e[7]), Co(n, "mouseenter", e[21]), Co(a, "click", e[10]), Co(a, "mouseenter", e[24])],
                d = !0)
            },
            p(e, n) {
                const i = {};
                16 & n[0] && (i.tooltip = e[4]),
                2097152 & n[1] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                o.$set(i),
                e[3] ? p ? (p.p(e, n),
                8 & n[0] && fi(p, 1)) : (p = em(e),
                p.c(),
                fi(p, 1),
                p.m(t, s)) : p && (mi(),
                _i(p, 1, 1, (()=>{
                    p = null
                }
                )),
                hi());
                const a = {};
                2097152 & n[1] && (a.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                r.$set(a),
                (!c || 32 & n[0]) && So(t, "top", e[5].top),
                (!c || 32 & n[0]) && So(t, "left", e[5].left),
                (!c || 8 & n[0]) && No(t, "has-deepl-write", e[3])
            },
            i(e) {
                c || (fi(o.$$.fragment, e),
                fi(p),
                fi(r.$$.fragment, e),
                l || ii((()=>{
                    l = vi(t, lr, {
                        x: -5,
                        duration: 300
                    }),
                    l.start()
                }
                )),
                c = !0)
            },
            o(e) {
                _i(o.$$.fragment, e),
                _i(p),
                _i(r.$$.fragment, e),
                c = !1
            },
            d(e) {
                e && fo(t),
                Ci(o),
                p && p.d(),
                Ci(r),
                d = !1,
                Gn(u)
            }
        }
    }
    function Jg(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                Lo(t, "class", "svelte-1lzcuuj")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function em(e) {
        let t, n, o, i, s;
        return n = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_deepl_write"),
                zIndex: "10000000000",
                $$slots: {
                    default: [tm]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("button"),
                bi(n.$$.fragment),
                Lo(t, "class", "dl-icon-circle dl-write-icon svelte-1lzcuuj")
            },
            m(a, r) {
                ho(a, t, r),
                yi(n, t, null),
                o = !0,
                i || (s = [Co(t, "click", e[22]), Co(t, "mouseenter", e[23])],
                i = !0)
            },
            p(e, t) {
                const o = {};
                2097152 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                i = !1,
                Gn(s)
            }
        }
    }
    function tm(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                Lo(t, "class", "svelte-1lzcuuj")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function nm(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                Lo(t, "class", "svelte-1lzcuuj")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function om(e) {
        let t, n;
        return t = new Qg({
            props: {
                onClose: e[25]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n[0] && (o.onClose = e[25]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function im(e) {
        let t, n, o, i = e[6] && !e[0] && !e[1] && Yg(e), s = e[2] && om(e);
        return {
            c() {
                i && i.c(),
                t = bo(),
                s && s.c(),
                n = yo()
            },
            m(e, a) {
                i && i.m(e, a),
                ho(e, t, a),
                s && s.m(e, a),
                ho(e, n, a),
                o = !0
            },
            p(e, o) {
                !e[6] || e[0] || e[1] ? i && (mi(),
                _i(i, 1, 1, (()=>{
                    i = null
                }
                )),
                hi()) : i ? (i.p(e, o),
                67 & o[0] && fi(i, 1)) : (i = Yg(e),
                i.c(),
                fi(i, 1),
                i.m(t.parentNode, t)),
                e[2] ? s ? (s.p(e, o),
                4 & o[0] && fi(s, 1)) : (s = om(e),
                s.c(),
                fi(s, 1),
                s.m(n.parentNode, n)) : s && (mi(),
                _i(s, 1, 1, (()=>{
                    s = null
                }
                )),
                hi())
            },
            i(e) {
                o || (fi(i),
                fi(s),
                o = !0)
            },
            o(e) {
                _i(i),
                _i(s),
                o = !1
            },
            d(e) {
                i && i.d(e),
                e && fo(t),
                s && s.d(e),
                e && fo(n)
            }
        }
    }
    function sm(e, t, n) {
        let o, i;
        Xn(e, us, (e=>n(20, i = e))),
        Zo("deepl_settings", us),
        Zo("deepl_website_settings", zi);
        let s, a, r, l, c, d, {replaceData: u} = t, {deeplWriteTrackingData: p={
            lang: "",
            sourceLength: 0,
            targetLength: 0,
            nicheIntegration: Me.gdocs,
            error: ""
        }} = t, g = !0, m = !1, h = !1, f = "", _ = "", w = !1, v = "", $ = {
            top: 0,
            left: 0
        };
        async function b(e, t, n) {
            if ("dlTriggerTranslationShortcut" === e.action)
                C(),
                En({
                    action: "dlTrackUseOfShortcut",
                    payload: {
                        shortcutType: se,
                        location: A,
                        nicheIntegration: Me.gdocs
                    }
                }),
                n()
        }
        const y = e=>{
            l = Ie.translate,
            e && (c = e),
            ct()
        }
          , C = ()=>{
            y(i.selectedTargetLanguage)
        }
          , x = ()=>{
            l = Ie.write,
            ct()
        }
          , T = ()=>{
            const {shouldBeOutOfViewport: e, newPosition: {left: t, top: o}} = pt();
            e !== m && n(1, m = e),
            n(5, $.left = `${Math.round(t)}px`, $),
            n(5, $.top = `${Math.round(o)}px`, $)
        }
        ;
        function L(e) {
            En({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host,
                    nicheIntegration: Me.gdocs
                }
            })
        }
        const E = ()=>{
            s = setInterval((()=>{
                const e = dt()
                  , t = !e.text;
                !t && g && T(),
                t && !g && (()=>{
                    if (!i.isInlineHighlighterShown) {
                        us.set({
                            isInlineHighlighterShown: !0
                        });
                        try {
                            En({
                                action: "dltrackCloseInlineHighlighter",
                                payload: {
                                    trigger: Se
                                }
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
                )(),
                n(0, g = t),
                f !== e.text && n(18, f = e.text)
            }
            ), 300)
        }
          , k = ()=>{
            const e = document.querySelector("#docs-instant-bubble");
            r = new MutationObserver((()=>{
                T()
            }
            ));
            return r.observe(e, {
                attributes: !0,
                childList: !1,
                characterData: !1
            }),
            ()=>r.unobserve()
        }
          , S = async e=>{
            if (l && "ClipboardEvent" === e.constructor.name) {
                switch (l) {
                case Ie.translate:
                    Ga({
                        event: e,
                        targetLang: c
                    });
                    break;
                case Ie.write:
                    Va({
                        event: e,
                        lang: _
                    })
                }
                l = void 0
            }
        }
          , M = ()=>{
            E(),
            (()=>{
                const e = document.querySelector("#kix-appview");
                a = new MutationObserver((()=>{
                    document.querySelector("#docs-instant-bubble") && (T(),
                    k())
                }
                )),
                a.observe(e, {
                    attributes: !1,
                    childList: !0,
                    characterData: !1
                })
            }
            )(),
            (()=>{
                const e = new ResizeObserver((()=>{
                    T()
                }
                ));
                e.observe(document.body)
            }
            )(),
            document.querySelector("#kix-appview .kix-appview-editor").addEventListener("scroll", T),
            (()=>{
                const {editable: e} = lt();
                e.addEventListener("copy", S)
            }
            )()
        }
          , I = ()=>{
            a && a.disconnect(),
            r && r.disconnect(),
            s && clearInterval(s),
            document.querySelector("#kix-appview .kix-appview-editor").removeEventListener("scroll", T),
            (()=>{
                const {editable: e} = lt();
                e.removeEventListener("copy", S)
            }
            )()
        }
        ;
        Wo((()=>{
            M(),
            i.isGDocsOnboardingShown || (n(2, h = !0),
            oo(us, i.isGDocsOnboardingShown = !0, i)),
            chrome.runtime.onMessage.addListener(b),
            En({
                action: "dlCheckCommandShortcuts"
            }).then((e=>n(19, v = e ? e.filter((e=>e.name == se))[0].shortcut : "")))
        }
        )),
        Go((()=>{
            I()
        }
        ));
        return e.$$set = e=>{
            "replaceData"in e && n(11, u = e.replaceData),
            "deeplWriteTrackingData"in e && n(12, p = e.deeplWriteTrackingData)
        }
        ,
        e.$$.update = ()=>{
            if (1048576 & e.$$.dirty[0] && n(6, o = !i.blacklistDomainsForReading.includes("docs.google.com") && i.enableInlineTranslation),
            262144 & e.$$.dirty[0] && (async e=>{
                const t = await Et(e);
                _ = t,
                n(3, w = ["DE", "EN"].includes(_?.toUpperCase()))
            }
            )(f),
            524288 & e.$$.dirty[0]) {
                let e = chrome.i18n.getMessage("ui_gdocs_translate_tooltip_2");
                n(4, d = v ? `${e} (${v})` : e)
            }
        }
        ,
        [g, m, h, w, d, $, o, C, x, L, ()=>{
            Zs(Me.gdocs),
            En({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: ge,
                    uiLocation: A,
                    nicheIntegration: Me.gdocs
                }
            })
        }
        , u, p, ()=>{
            u && $t(u)
        }
        , y, ()=>{
            ar({
                eventType: Ze,
                ...p
            })
        }
        , ()=>{
            ar({
                eventType: Ke,
                ...p
            })
        }
        , e=>{
            switch (e) {
            case nt:
                ar({
                    eventType: Xe,
                    ...p
                });
                break;
            case ot:
                En({
                    action: "dlTrackGDocsMaxCharExceededTryProClicked",
                    payload: {
                        sourceLang: p.lang,
                        targetLang: p.lang,
                        sourceLength: p.sourceLength
                    }
                })
            }
        }
        , f, v, i, ()=>L(A), ()=>x(), ()=>L(ne), ()=>L(R), ()=>n(2, h = !1)]
    }
    class am extends Ti {
        constructor(e) {
            super(),
            xi(this, e, sm, im, Zn, {
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
    class rm extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this),
            this.setReplaceData = this.setReplaceData.bind(this),
            this.applyReplacement = this.applyReplacement.bind(this),
            this.requestNewTranslation = this.requestNewTranslation.bind(this),
            this.setDeeplWriteTrackingData = this.setDeeplWriteTrackingData.bind(this),
            this.trackDeeplWriteInsertCopy = this.trackDeeplWriteInsertCopy.bind(this),
            this.trackDeeplWriteDiscardCopy = this.trackDeeplWriteDiscardCopy.bind(this),
            this.trackMaxCharExceeded = this.trackMaxCharExceeded.bind(this)
        }
        createDOM() {
            this.mainComponent = new am({
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
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    window.customElements.define("deepl-gdocs-icon", rm);
    function lm(e) {
        return "rgb(0, 0, 0)" === e || "rgb(21, 32, 43)" === e
    }
    const cm = function() {
        let e = {
            isDarkMode: lm(document.body.style.backgroundColor)
        };
        const {subscribe: t, update: n} = Ei(e);
        let o = new MutationObserver((e=>{
            e.forEach((e=>{
                "attributes" === e.type && "style" === e.attributeName && n((e=>({
                    ...e,
                    isDarkMode: lm(document.body.style.backgroundColor)
                })))
            }
            ))
        }
        ));
        return o.observe(document.body, {
            attributes: !0
        }),
        Dn((()=>{
            o.disconnect()
        }
        )),
        {
            subscribe: t
        }
    }();
    function dm(e) {
        let t, n;
        return {
            c() {
                t = wo("span"),
                n = $o(e[0]),
                Lo(t, "class", "translatedText svelte-1dl3vos")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, t) {
                1 & t && Eo(n, e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function um(e) {
        let t, n;
        return t = new al({
            props: {
                error: e[2]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.error = e[2]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function pm(e) {
        let t, n, o = function(e) {
            let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h;
            const f = [um, dm]
              , _ = [];
            function w(e, t) {
                return e[2] ? 0 : 1
            }
            return o = w(e),
            i = _[o] = f[o](e),
            {
                c() {
                    t = wo("div"),
                    n = wo("div"),
                    i.c(),
                    s = bo(),
                    a = wo("div"),
                    a.textContent = `${chrome.i18n.getMessage("twitter_web_alternatives_link")}`,
                    r = bo(),
                    l = wo("button"),
                    c = vo("svg"),
                    d = vo("path"),
                    Lo(a, "class", "show-alternatives svelte-1dl3vos"),
                    No(a, "dark", e[3]),
                    Lo(d, "d", "M3 9L9 3M3 3L9 9"),
                    Lo(d, "stroke", u = e[3] ? "white" : "#037171"),
                    Lo(d, "stroke-width", "1.5"),
                    Lo(d, "stroke-linecap", "round"),
                    Lo(d, "stroke-linejoin", "round"),
                    Lo(c, "width", "12"),
                    Lo(c, "height", "12"),
                    Lo(c, "viewBox", "0 0 12 12"),
                    Lo(c, "fill", "none"),
                    Lo(c, "xmlns", "http://www.w3.org/2000/svg"),
                    Lo(l, "class", "svelte-1dl3vos"),
                    Lo(t, "class", "container svelte-1dl3vos"),
                    No(t, "dark", e[3])
                },
                m(i, u) {
                    ho(i, t, u),
                    po(t, n),
                    _[o].m(n, null),
                    po(n, s),
                    po(n, a),
                    po(t, r),
                    po(t, l),
                    po(l, c),
                    po(c, d),
                    g = !0,
                    m || (h = [Co(a, "click", e[4]), Co(l, "click", (function() {
                        Vn(e[1]) && e[1].apply(this, arguments)
                    }
                    ))],
                    m = !0)
                },
                p(r, l) {
                    let c = o;
                    o = w(e = r),
                    o === c ? _[o].p(e, l) : (mi(),
                    _i(_[c], 1, 1, (()=>{
                        _[c] = null
                    }
                    )),
                    hi(),
                    i = _[o],
                    i ? i.p(e, l) : (i = _[o] = f[o](e),
                    i.c()),
                    fi(i, 1),
                    i.m(n, s)),
                    (!g || 8 & l) && No(a, "dark", e[3]),
                    (!g || 8 & l && u !== (u = e[3] ? "white" : "#037171")) && Lo(d, "stroke", u),
                    (!g || 8 & l) && No(t, "dark", e[3])
                },
                i(e) {
                    g || (fi(i),
                    p || ii((()=>{
                        p = vi(t, cr, {
                            y: -10,
                            duration: 200
                        }),
                        p.start()
                    }
                    )),
                    g = !0)
                },
                o(e) {
                    _i(i),
                    g = !1
                },
                d(e) {
                    e && fo(t),
                    _[o].d(),
                    m = !1,
                    Gn(h)
                }
            }
        }(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [t]) {
                o.p(e, t)
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function gm(e, t, n) {
        let o, i, s;
        Xn(e, us, (e=>n(6, i = e))),
        Xn(e, cm, (e=>n(7, s = e)));
        let a, r, {translatedText: l} = t, {sourceText: c} = t, {onClose: d} = t, {error: u} = t;
        return e.$$set = e=>{
            "translatedText"in e && n(0, l = e.translatedText),
            "sourceText"in e && n(5, c = e.sourceText),
            "onClose"in e && n(1, d = e.onClose),
            "error"in e && n(2, u = e.error)
        }
        ,
        e.$$.update = ()=>{
            128 & e.$$.dirty && n(3, o = s && s.isDarkMode),
            32 & e.$$.dirty && Et(c).then((e=>{
                a = e
            }
            )),
            64 & e.$$.dirty && (r = i.selectedTargetLanguage)
        }
        ,
        [l, d, u, o, function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Xi,
                    sourceLang: a,
                    targetLang: r,
                    textToShare: c
                }
            })
        }
        , c, i, s]
    }
    class mm extends Ti {
        constructor(e) {
            super(),
            xi(this, e, gm, pm, Zn, {
                translatedText: 0,
                sourceText: 5,
                onClose: 1,
                error: 2
            })
        }
    }
    class hm extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent = null;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t, n, o) {
            this.mainComponent = new mm({
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
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function fm(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = wo("div"),
                n = wo("span"),
                n.textContent = `${chrome.i18n.getMessage("inline_translation_link_more_settings")}`,
                o = bo(),
                i = wo("span"),
                Lo(i, "class", "icon icon-external-link  svelte-zb9mtj"),
                Lo(t, "class", "settings-link svelte-zb9mtj")
            },
            m(r, l) {
                ho(r, t, l),
                po(t, n),
                po(t, o),
                po(t, i),
                s || (a = Co(t, "click", To(xo(e[0]))),
                s = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                s = !1,
                a()
            }
        }
    }
    function _m(e, t, n) {
        let {page: o=hl.settings_page} = t;
        return e.$$set = e=>{
            "page"in e && n(1, o = e.page)
        }
        ,
        [function() {
            En({
                action: "dlOpenInternalPage",
                payload: {
                    destination: o
                }
            })
        }
        , o]
    }
    window.customElements.define("deepl-twitter-translated-tweet", hm);
    class wm extends Ti {
        constructor(e) {
            super(),
            xi(this, e, _m, fm, Zn, {
                page: 1
            })
        }
    }
    function vm(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                Lo(t, "type", "button"),
                Lo(t, "class", "close-icon svelte-90kudc")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", e[0]),
                n = !0)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function $m(e) {
        return [function(t) {
            Xo.call(this, e, t)
        }
        ]
    }
    class bm extends Ti {
        constructor(e) {
            super(),
            xi(this, e, $m, vm, Zn, {})
        }
    }
    function ym(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g;
        return i = new bm({}),
        i.$on("click", e[2]),
        c = new Zl({
            props: {
                value: e[0].selectedTargetLanguage
            }
        }),
        c.$on("selection", e[3]),
        p = new wm({}),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                bi(i.$$.fragment),
                s = bo(),
                a = wo("div"),
                r = wo("p"),
                r.textContent = `${chrome.i18n.getMessage("whatsapp_web_settings_languageswitch_label")}`,
                l = bo(),
                bi(c.$$.fragment),
                d = bo(),
                u = wo("div"),
                bi(p.$$.fragment),
                Lo(o, "class", "close-icon-container svelte-1xs7ag1"),
                Lo(n, "class", "header"),
                Lo(r, "class", "label-language-switch svelte-1xs7ag1"),
                Lo(a, "class", "body svelte-1xs7ag1"),
                Lo(u, "class", "footer svelte-1xs7ag1"),
                Lo(t, "class", "container svelte-1xs7ag1")
            },
            m(e, m) {
                ho(e, t, m),
                po(t, n),
                po(n, o),
                yi(i, o, null),
                po(t, s),
                po(t, a),
                po(a, r),
                po(a, l),
                yi(c, a, null),
                po(t, d),
                po(t, u),
                yi(p, u, null),
                g = !0
            },
            p(e, [t]) {
                const n = {};
                1 & t && (n.value = e[0].selectedTargetLanguage),
                c.$set(n)
            },
            i(e) {
                g || (fi(i.$$.fragment, e),
                fi(c.$$.fragment, e),
                fi(p.$$.fragment, e),
                g = !0)
            },
            o(e) {
                _i(i.$$.fragment, e),
                _i(c.$$.fragment, e),
                _i(p.$$.fragment, e),
                g = !1
            },
            d(e) {
                e && fo(t),
                Ci(i),
                Ci(c),
                Ci(p)
            }
        }
    }
    function Cm(e, t, n) {
        let o;
        const i = Ko("deepl_settings");
        Xn(e, i, (e=>n(0, o = e)));
        const s = Vo();
        return [o, i, function() {
            s("close")
        }
        , e=>i.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0,
            regionalVariant: e.detail.selectedOption.regionalVariant || ""
        })]
    }
    class xm extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Cm, ym, Zn, {})
        }
    }
    function Tm(e) {
        return /\bdark\b/gm.test(e)
    }
    const Lm = function() {
        let e = {
            isDarkMode: Tm(document.body.className)
        };
        const {subscribe: t, update: n} = Ei(e);
        let o = new MutationObserver((e=>{
            e.forEach((e=>{
                "attributes" === e.type && "class" === e.attributeName && n((e=>({
                    ...e,
                    isDarkMode: Tm(document.body.className)
                })))
            }
            ))
        }
        ));
        return o.observe(document.body, {
            attributes: !0
        }),
        Dn((()=>{
            o.disconnect()
        }
        )),
        {
            subscribe: t
        }
    }();
    function Em(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        const h = [Sm, km]
          , f = [];
        function _(e, t) {
            return e[2] ? 0 : 1
        }
        return n = _(e),
        o = f[n] = h[n](e),
        {
            c() {
                t = wo("div"),
                o.c(),
                i = bo(),
                s = wo("div"),
                s.textContent = `${chrome.i18n.getMessage("whatsapp_web_show_alternatives_link")}`,
                a = bo(),
                r = wo("button"),
                l = vo("svg"),
                c = vo("path"),
                Lo(s, "class", "show-alternatives svelte-1csju44"),
                No(s, "dark", e[5]),
                Lo(c, "d", "M3 9L9 3M3 3L9 9"),
                Lo(c, "stroke", d = e[3] && e[3].isDarkMode ? "#F2F4F7" : "#037171"),
                Lo(c, "stroke-width", "1.5"),
                Lo(c, "stroke-linecap", "round"),
                Lo(c, "stroke-linejoin", "round"),
                Lo(l, "width", "12"),
                Lo(l, "height", "12"),
                Lo(l, "viewBox", "0 0 12 12"),
                Lo(l, "fill", "none"),
                Lo(l, "xmlns", "http://www.w3.org/2000/svg"),
                Lo(r, "class", "svelte-1csju44"),
                Lo(t, "class", "container svelte-1csju44"),
                No(t, "dark", e[5])
            },
            m(o, d) {
                ho(o, t, d),
                f[n].m(t, null),
                po(t, i),
                po(t, s),
                po(t, a),
                po(t, r),
                po(r, l),
                po(l, c),
                p = !0,
                g || (m = [Co(s, "click", e[6]), Co(r, "click", (function() {
                    Vn(e[1]) && e[1].apply(this, arguments)
                }
                ))],
                g = !0)
            },
            p(a, r) {
                let l = n;
                n = _(e = a),
                n === l ? f[n].p(e, r) : (mi(),
                _i(f[l], 1, 1, (()=>{
                    f[l] = null
                }
                )),
                hi(),
                o = f[n],
                o ? o.p(e, r) : (o = f[n] = h[n](e),
                o.c()),
                fi(o, 1),
                o.m(t, i)),
                (!p || 32 & r) && No(s, "dark", e[5]),
                (!p || 8 & r && d !== (d = e[3] && e[3].isDarkMode ? "#F2F4F7" : "#037171")) && Lo(c, "stroke", d),
                (!p || 32 & r) && No(t, "dark", e[5])
            },
            i(e) {
                p || (fi(o),
                u || ii((()=>{
                    u = vi(t, cr, {
                        y: -10,
                        duration: 200
                    }),
                    u.start()
                }
                )),
                p = !0)
            },
            o(e) {
                _i(o),
                p = !1
            },
            d(e) {
                e && fo(t),
                f[n].d(),
                g = !1,
                Gn(m)
            }
        }
    }
    function km(e) {
        let t, n;
        return {
            c() {
                t = wo("span"),
                n = $o(e[0]),
                Lo(t, "class", "translatedText svelte-1csju44")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, t) {
                1 & t && Eo(n, e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Sm(e) {
        let t, n;
        return t = new al({
            props: {
                error: e[2]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.error = e[2]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Mm(e) {
        let t, n, o = e[4] && Em(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[4] ? o ? (o.p(e, n),
                16 & n && fi(o, 1)) : (o = Em(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function Im(e, t, n) {
        let o, i, s;
        Xn(e, us, (e=>n(8, i = e))),
        Xn(e, Lm, (e=>n(3, s = e)));
        let a, r, {translatedText: l} = t, {sourceText: c} = t, {onClose: d} = t, {error: u} = t, p = !1;
        return setTimeout((()=>n(4, p = !0)), 50),
        e.$$set = e=>{
            "translatedText"in e && n(0, l = e.translatedText),
            "sourceText"in e && n(7, c = e.sourceText),
            "onClose"in e && n(1, d = e.onClose),
            "error"in e && n(2, u = e.error)
        }
        ,
        e.$$.update = ()=>{
            8 & e.$$.dirty && n(5, o = s && s.isDarkMode),
            128 & e.$$.dirty && Et(c).then((e=>{
                a = e
            }
            )),
            256 & e.$$.dirty && (r = i.selectedTargetLanguage)
        }
        ,
        [l, d, u, s, p, o, function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Xi,
                    sourceLang: a,
                    targetLang: r,
                    textToShare: c
                }
            })
        }
        , c, i]
    }
    class Dm extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Im, Mm, Zn, {
                translatedText: 0,
                sourceText: 7,
                onClose: 1,
                error: 2
            })
        }
    }
    class Om extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t, n, o) {
            this.mainComponent = new Dm({
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
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Nm(e) {
        let t, n, o, i;
        t = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_tooltip_translate_button"),
                multiline: !0,
                zIndex: "0",
                $$slots: {
                    default: [Rm]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let s = e[7] && Pm(e);
        return {
            c() {
                bi(t.$$.fragment),
                n = bo(),
                s && s.c(),
                o = yo()
            },
            m(e, a) {
                yi(t, e, a),
                ho(e, n, a),
                s && s.m(e, a),
                ho(e, o, a),
                i = !0
            },
            p(e, n) {
                const i = {};
                134217856 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(i),
                e[7] ? s ? (s.p(e, n),
                128 & n && fi(s, 1)) : (s = Pm(e),
                s.c(),
                fi(s, 1),
                s.m(o.parentNode, o)) : s && (mi(),
                _i(s, 1, 1, (()=>{
                    s = null
                }
                )),
                hi())
            },
            i(e) {
                i || (fi(t.$$.fragment, e),
                fi(s),
                i = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                _i(s),
                i = !1
            },
            d(e) {
                Ci(t, e),
                e && fo(n),
                s && s.d(e),
                e && fo(o)
            }
        }
    }
    function Am(e) {
        let t, n;
        return t = new Ql({
            props: {
                small: !0
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p: Un,
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Rm(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                t.innerHTML = '<svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ptnx4w"><g clip-path="url(#clip0)"><path d="M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z" fill="#0F2B46"></path><path d="M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z" fill="white"></path><path d="M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="18.5294" height="19" fill="white" transform="matrix(-1 0 0 1 18.5294 0)"></rect></clipPath></defs></svg>',
                Lo(t, "class", "translateTrigger svelte-ptnx4w")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = [Co(t, "mouseover", e[20]), Co(t, "click", e[13])],
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                Gn(o)
            }
        }
    }
    function Pm(e) {
        let t, n;
        return t = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_tooltip_settings_button"),
                multiline: !0,
                zIndex: "0",
                $$slots: {
                    default: [zm]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                134217792 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function zm(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("div"),
                t.innerHTML = '<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ptnx4w"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.11001 16.2439H10.71L11.025 14.0488C11.565 13.8732 12.015 13.6098 12.465 13.2585L14.58 14.0488L16.38 10.9756L14.625 9.57073C14.67 9.30732 14.67 9.0439 14.67 8.78049C14.67 8.51707 14.67 8.25366 14.625 7.99024L16.38 6.58537L14.58 3.5122L12.465 4.30244C12.015 3.99512 11.52 3.73171 11.025 3.5122L10.665 1.31707H7.06501L6.70501 3.5122C6.16501 3.68781 5.71501 3.95122 5.26501 4.30244L3.15001 3.5122L1.35001 6.58537L3.10501 7.99024C3.06001 8.25366 3.06001 8.51707 3.06001 8.78049C3.06001 9.0439 3.06001 9.30732 3.10501 9.57073L1.35001 10.9756L3.15001 14.0488L5.31001 13.2585C5.76001 13.5659 6.25501 13.8293 6.75001 14.0488L7.11001 16.2439ZM9.94501 15.3659H7.83001L7.51501 13.3463L7.24501 13.2585C6.66001 13.0829 6.12001 12.7756 5.67001 12.3805L5.44501 12.2049L3.55501 12.9073L2.52001 11.1512L4.09501 9.87805L4.05001 9.61463C4.00501 9.30732 3.96001 9 3.96001 8.73659C3.96001 8.47317 4.00501 8.16585 4.05001 7.85854L4.09501 7.63902L2.52001 6.36585L3.55501 4.60976L5.44501 5.3122L5.67001 5.09268C6.12001 4.69756 6.66001 4.43415 7.24501 4.21463L7.51501 4.12683L7.83001 2.19512H9.94501L10.26 4.21463L10.53 4.30244C11.115 4.47805 11.655 4.78537 12.105 5.18049L12.285 5.3561L14.175 4.65366L15.21 6.40976L13.635 7.68293L13.68 7.94634C13.725 8.25366 13.77 8.56098 13.77 8.82439C13.77 9.08781 13.725 9.39512 13.68 9.70244L13.635 9.96585L15.21 11.239L14.175 12.9951L12.285 12.2927L12.105 12.4683C11.655 12.8634 11.115 13.1268 10.53 13.3463L10.26 13.4341L9.94501 15.3659ZM6.03018 8.78047C6.03018 10.3171 7.29018 11.5463 8.86518 11.5463C10.4402 11.5463 11.7002 10.3171 11.7002 8.78047C11.7002 7.24388 10.4402 6.01461 8.86518 6.01461C7.29018 6.01461 6.03018 7.24388 6.03018 8.78047ZM6.93018 8.78047C6.93018 7.72681 7.78518 6.89266 8.86518 6.89266C9.94518 6.89266 10.8002 7.72681 10.8002 8.78047C10.8002 9.83413 9.94518 10.6683 8.86518 10.6683C7.78518 10.6683 6.93018 9.83413 6.93018 8.78047Z" fill="#0F2B46"></path></svg>',
                Lo(t, "class", "settingsTrigger svelte-ptnx4w")
            },
            m(n, s) {
                ho(n, t, s),
                o || (i = [Co(t, "click", e[21]), Co(t, "mousedown", To(xo(e[19])))],
                o = !0)
            },
            p: Un,
            i(e) {
                n || ii((()=>{
                    n = vi(t, cr, {
                        x: -8,
                        duration: 600
                    }),
                    n.start()
                }
                ))
            },
            o: Un,
            d(e) {
                e && fo(t),
                o = !1,
                Gn(i)
            }
        }
    }
    function Hm(e) {
        let t, n, o, i, s;
        return n = new xm({}),
        n.$on("close", e[22]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "settingsContainer svelte-ptnx4w"),
                No(t, "isTop", !e[9]),
                No(t, "isLeft", !e[10])
            },
            m(e, o) {
                ho(e, t, o),
                yi(n, t, null),
                s = !0
            },
            p(e, n) {
                (!s || 512 & n) && No(t, "isTop", !e[9]),
                (!s || 1024 & n) && No(t, "isLeft", !e[10])
            },
            i(e) {
                s || (fi(n.$$.fragment, e),
                ii((()=>{
                    i && i.end(1),
                    o = vi(t, cr, {
                        y: -10,
                        duration: 600
                    }),
                    o.start()
                }
                )),
                s = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o && o.invalidate(),
                i = $i(t, cr, {
                    y: -10,
                    duration: 600
                }),
                s = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                e && i && i.end()
            }
        }
    }
    function Fm(e) {
        let t, n, o, i, s, a, r, l;
        const c = [Am, Nm]
          , d = [];
        function u(e, t) {
            return e[3] ? 0 : 1
        }
        n = u(e),
        o = d[n] = c[n](e);
        let p = e[6] && Hm(e);
        return {
            c() {
                t = wo("div"),
                o.c(),
                i = bo(),
                p && p.c(),
                Lo(t, "class", "container svelte-ptnx4w"),
                Lo(t, "style", s = `top: ${e[5]}px; left: ${e[4]}px; z-index: ${e[12]}; opacity: ${e[11]};`),
                No(t, "isTranslated", e[2]),
                No(t, "isHidden", e[0]),
                No(t, "messageHasReactionIcon", e[8]),
                No(t, "isExpanded", e[7])
            },
            m(o, s) {
                ho(o, t, s),
                d[n].m(t, null),
                po(t, i),
                p && p.m(t, null),
                e[23](t),
                a = !0,
                r || (l = [Co(t, "mouseleave", e[24]), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[14]), Co(t, "mousedown", To(xo(e[18])))],
                r = !0)
            },
            p(e, [r]) {
                let l = n;
                n = u(e),
                n === l ? d[n].p(e, r) : (mi(),
                _i(d[l], 1, 1, (()=>{
                    d[l] = null
                }
                )),
                hi(),
                o = d[n],
                o ? o.p(e, r) : (o = d[n] = c[n](e),
                o.c()),
                fi(o, 1),
                o.m(t, i)),
                e[6] ? p ? (p.p(e, r),
                64 & r && fi(p, 1)) : (p = Hm(e),
                p.c(),
                fi(p, 1),
                p.m(t, null)) : p && (mi(),
                _i(p, 1, 1, (()=>{
                    p = null
                }
                )),
                hi()),
                (!a || 2096 & r && s !== (s = `top: ${e[5]}px; left: ${e[4]}px; z-index: ${e[12]}; opacity: ${e[11]};`)) && Lo(t, "style", s),
                (!a || 4 & r) && No(t, "isTranslated", e[2]),
                (!a || 1 & r) && No(t, "isHidden", e[0]),
                (!a || 256 & r) && No(t, "messageHasReactionIcon", e[8]),
                (!a || 128 & r) && No(t, "isExpanded", e[7])
            },
            i(e) {
                a || (fi(o),
                fi(p),
                a = !0)
            },
            o(e) {
                _i(o),
                _i(p),
                a = !1
            },
            d(o) {
                o && fo(t),
                d[n].d(),
                p && p.d(),
                e[23](null),
                r = !1,
                Gn(l)
            }
        }
    }
    function Bm(e, t, n) {
        Zo("deepl_settings", us),
        Zo("deepl_website_settings", zi);
        let {textElement: o} = t
          , {messageContainer: i} = t;
        const s = 265
          , a = 150
          , r = 220;
        let l, c, d, u = !1, p = !0, g = 0, m = 0, h = !1, f = !1, _ = !1, w = S.deepl_inline_ui.z_index, v = !0, $ = !0, b = 0;
        function y() {
            const e = l.parentNode.getBoundingClientRect()
              , t = Nn(i);
            n(5, m = i.getBoundingClientRect().height / 2),
            n(4, g = t.getBoundingClientRect().right - e.left),
            setTimeout((()=>{
                const t = i.querySelector('[data-icon="react"]');
                t && (n(4, g = t.getBoundingClientRect().right - e.left),
                n(17, d = !0)),
                n(11, b = 1)
            }
            ), a);
            const o = i.querySelector('[data-a8n="reaction-bubble"]')
              , c = i.querySelector('[data-testid="reaction-bubble"]');
            n(8, _ = !(!o && !c)),
            window.innerHeight - e.bottom < r + m ? n(9, v = !1) : n(9, v = !0),
            i.getBoundingClientRect().right - t.getBoundingClientRect().right < s ? n(10, $ = !1) : n(10, $ = !0)
        }
        i.addEventListener("mouseover", (()=>{
            n(0, p = !1)
        }
        ), !1),
        i.addEventListener("mouseout", (()=>{
            h || n(0, p = !0)
        }
        ), !1);
        return e.$$set = e=>{
            "textElement"in e && n(16, o = e.textElement),
            "messageContainer"in e && n(15, i = e.messageContainer)
        }
        ,
        e.$$.update = ()=>{
            131073 & e.$$.dirty && (p || d || y())
        }
        ,
        [p, l, c, u, g, m, h, f, _, v, $, b, w, async function() {
            if (c)
                return;
            n(3, u = !0),
            n(6, h = !1);
            let e, t, s = "";
            try {
                s = await Et(o.innerText)
            } catch (e) {
                console.log(e)
            }
            try {
                t = await En({
                    action: "dlRequestWhatsAppMessageTranslation",
                    payload: {
                        message: o.innerText,
                        messageLang: s,
                        domainName: window.location.hostname
                    }
                })
            } catch (t) {
                e = t,
                console.error(e)
            }
            n(2, c = e ? "" : t[0].text),
            n(3, u = !1);
            const a = document.createElement("deepl-whatsapp-translated-message");
            a.createDOM(c, o.innerText, (()=>{
                n(15, i.dataset.dlIsTranslated = "false", i),
                setTimeout((()=>n(2, c = "")), 600),
                a.cleanupDOM(),
                a.remove()
            }
            ), e),
            o.appendChild(a),
            n(15, i.dataset.dlIsTranslated = "true", i)
        }
        , function() {
            n(6, h = !1)
        }
        , i, o, d, function(t) {
            Xo.call(this, e, t)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , ()=>n(7, f = !0), ()=>n(6, h = !h), ()=>n(6, h = !1), function(e) {
            Yo[e ? "unshift" : "push"]((()=>{
                l = e,
                n(1, l)
            }
            ))
        }
        , ()=>{
            h || n(7, f = !1)
        }
        ]
    }
    window.customElements.define("deepl-whatsapp-translated-message", Om);
    class Um extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Bm, Fm, Zn, {
                textElement: 16,
                messageContainer: 15
            })
        }
    }
    class qm extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e, t) {
            this.mainComponent = new Um({
                target: this.shadowContainer,
                props: {
                    textElement: e,
                    messageContainer: t
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function jm(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m;
        return {
            c() {
                t = wo("button"),
                n = wo("span"),
                n.textContent = `${chrome.i18n.getMessage("twitter_web_translate_tweet_link")}`,
                o = bo(),
                i = vo("svg"),
                s = vo("g"),
                a = vo("path"),
                r = vo("path"),
                l = vo("path"),
                c = vo("defs"),
                d = vo("clipPath"),
                u = vo("rect"),
                Lo(a, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"),
                Lo(a, "class", "deepl-icon svelte-1uv8rvf"),
                Lo(r, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"),
                Lo(r, "fill", "white"),
                Lo(l, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"),
                Lo(l, "fill", "white"),
                Lo(s, "clip-path", "url(#clip0)"),
                Lo(u, "width", "18.5294"),
                Lo(u, "height", "19"),
                Lo(u, "fill", "white"),
                Lo(u, "transform", "matrix(-1 0 0 1 18.5294 0)"),
                Lo(d, "id", "clip0"),
                Lo(i, "width", "15"),
                Lo(i, "height", "15"),
                Lo(i, "viewBox", "0 0 19 19"),
                Lo(i, "fill", "none"),
                Lo(i, "xmlns", "http://www.w3.org/2000/svg"),
                Lo(t, "class", "tweetLink svelte-1uv8rvf"),
                t.disabled = p = !!e[0],
                No(t, "dark", e[3])
            },
            m(p, h) {
                ho(p, t, h),
                po(t, n),
                po(t, o),
                po(t, i),
                po(i, s),
                po(s, a),
                po(s, r),
                po(s, l),
                po(i, c),
                po(c, d),
                po(d, u),
                g || (m = [Co(t, "keydown", e[4]), Co(t, "click", e[4])],
                g = !0)
            },
            p(e, n) {
                1 & n && p !== (p = !!e[0]) && (t.disabled = p),
                8 & n && No(t, "dark", e[3])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                g = !1,
                Gn(m)
            }
        }
    }
    function Wm(e) {
        let t, n;
        return t = new Ql({
            props: {
                small: !0
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p: Un,
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Gm(e) {
        let t, n, o, i;
        const s = [Wm, jm]
          , a = [];
        function r(e, t) {
            return e[1] ? 0 : e[2] ? 1 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)),
        {
            c() {
                n && n.c(),
                o = yo()
            },
            m(e, n) {
                ~t && a[t].m(e, n),
                ho(e, o, n),
                i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e),
                t === l ? ~t && a[t].p(e, i) : (n && (mi(),
                _i(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                hi()),
                ~t ? (n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                fi(n, 1),
                n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || (fi(n),
                i = !0)
            },
            o(e) {
                _i(n),
                i = !1
            },
            d(e) {
                ~t && a[t].d(e),
                e && fo(o)
            }
        }
    }
    function Vm(e, t, n) {
        let o, i, s;
        Xn(e, us, (e=>n(6, i = e))),
        Xn(e, cm, (e=>n(7, s = e))),
        Zo("deepl_settings", us),
        Zo("deepl_website_settings", zi);
        let a, r, {tweetTextNode: l} = t, c = !1;
        return e.$$set = e=>{
            "tweetTextNode"in e && n(5, l = e.tweetTextNode)
        }
        ,
        e.$$.update = ()=>{
            if (128 & e.$$.dirty && n(3, o = s && s.isDarkMode),
            64 & e.$$.dirty) {
                const e = i.blacklistDomainsForReading.includes(window.location.hostname);
                !i.enableInlineTranslation || e ? n(2, r = !1) : i.selectedTargetLanguage && async function() {
                    const e = l.innerText;
                    if (e.length < 20)
                        return !1;
                    const t = await Et(e);
                    return Lt(chrome.i18n.getUILanguage()) !== t && Lt(i.selectedTargetLanguage) !== t
                }().then((e=>n(2, r = e))).catch((()=>n(2, r = !1)))
            }
        }
        ,
        [a, c, r, o, async function() {
            if (a)
                return;
            n(1, c = !0);
            let e, t, o = "";
            try {
                o = await Et(l.innerText),
                o = St(o)
            } catch (e) {
                console.log(e)
            }
            try {
                t = await En({
                    action: "dlRequestTwitterTweetTranslation",
                    payload: {
                        message: l.innerText,
                        messageLang: o,
                        domainName: window.location.hostname
                    }
                })
            } catch (t) {
                e = t,
                console.error(e)
            }
            n(0, a = e ? "" : t[0].text),
            n(1, c = !1);
            const i = document.createElement("deepl-twitter-translated-tweet");
            i.createDOM(a, l.innerText, (()=>{
                n(0, a = ""),
                i.cleanupDOM(),
                i.remove()
            }
            ), e),
            l.appendChild(i)
        }
        , l, i, s]
    }
    window.customElements.define("deepl-whatsapp-message-in-translator", qm);
    class Zm extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Vm, Gm, Zn, {
                tweetTextNode: 5
            })
        }
    }
    class Km extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent = null;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this)
        }
        createDOM(e) {
            this.mainComponent = new Zm({
                target: this.shadowContainer,
                props: {
                    tweetTextNode: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Xm(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return i = new bm({}),
        i.$on("click", e[2]),
        c = new Zl({
            props: {
                value: e[0].selectedTargetLanguage
            }
        }),
        c.$on("selection", e[3]),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                bi(i.$$.fragment),
                s = bo(),
                a = wo("div"),
                r = wo("p"),
                r.textContent = `${chrome.i18n.getMessage("whatsapp_web_chat_settings_languageswitch_label")}`,
                l = bo(),
                bi(c.$$.fragment),
                Lo(o, "class", "close-icon-container svelte-1vsdnvs"),
                Lo(n, "class", "header"),
                Lo(r, "class", "label-language-switch svelte-1vsdnvs"),
                Lo(a, "class", "body svelte-1vsdnvs"),
                Lo(t, "class", "container svelte-1vsdnvs")
            },
            m(e, u) {
                ho(e, t, u),
                po(t, n),
                po(n, o),
                yi(i, o, null),
                po(t, s),
                po(t, a),
                po(a, r),
                po(a, l),
                yi(c, a, null),
                d = !0
            },
            p(e, [t]) {
                const n = {};
                1 & t && (n.value = e[0].selectedTargetLanguage),
                c.$set(n)
            },
            i(e) {
                d || (fi(i.$$.fragment, e),
                fi(c.$$.fragment, e),
                d = !0)
            },
            o(e) {
                _i(i.$$.fragment, e),
                _i(c.$$.fragment, e),
                d = !1
            },
            d(e) {
                e && fo(t),
                Ci(i),
                Ci(c)
            }
        }
    }
    function Qm(e, t, n) {
        let o;
        const i = Ko("deepl_settings");
        Xn(e, i, (e=>n(0, o = e)));
        const s = Vo();
        return [o, i, function() {
            s("close")
        }
        , e=>i.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0
        })]
    }
    window.customElements.define("deepl-twitter-tweet-link", Km);
    class Ym extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Qm, Xm, Zn, {})
        }
    }
    function Jm(e) {
        let t, n, o, i, s, a, r, l;
        return i = new bm({}),
        i.$on("click", e[1]),
        r = new al({
            props: {
                error: e[0]
            }
        }),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                bi(i.$$.fragment),
                s = bo(),
                a = wo("div"),
                bi(r.$$.fragment),
                Lo(o, "class", "close-icon-container svelte-1l2i3ip"),
                Lo(n, "class", "header"),
                Lo(a, "class", "body svelte-1l2i3ip"),
                Lo(t, "class", "container svelte-1l2i3ip")
            },
            m(e, c) {
                ho(e, t, c),
                po(t, n),
                po(n, o),
                yi(i, o, null),
                po(t, s),
                po(t, a),
                yi(r, a, null),
                l = !0
            },
            p: Un,
            i(e) {
                l || (fi(i.$$.fragment, e),
                fi(r.$$.fragment, e),
                l = !0)
            },
            o(e) {
                _i(i.$$.fragment, e),
                _i(r.$$.fragment, e),
                l = !1
            },
            d(e) {
                e && fo(t),
                Ci(i),
                Ci(r)
            }
        }
    }
    function eh(e) {
        const t = Vo();
        return [undefined, function() {
            t("close")
        }
        ]
    }
    class th extends Ti {
        constructor(e) {
            super(),
            xi(this, e, eh, Jm, Zn, {})
        }
    }
    function nh(e) {
        let t, n, o, i, s;
        return n = new th({
            props: {
                error: e[3]
            }
        }),
        n.$on("close", e[6]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "errorContainer svelte-j6tuh")
            },
            m(e, o) {
                ho(e, t, o),
                yi(n, t, null),
                s = !0
            },
            p(e, t) {
                const o = {};
                8 & t && (o.error = e[3]),
                n.$set(o)
            },
            i(e) {
                s || (fi(n.$$.fragment, e),
                ii((()=>{
                    i && i.end(1),
                    o = vi(t, cr, {
                        y: 30,
                        duration: 600
                    }),
                    o.start()
                }
                )),
                s = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o && o.invalidate(),
                i = $i(t, cr, {
                    y: 30,
                    duration: 600
                }),
                s = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                e && i && i.end()
            }
        }
    }
    function oh(e) {
        let t, n, o, i, s;
        return n = new Ym({}),
        n.$on("close", e[7]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "settingsContainer svelte-j6tuh")
            },
            m(e, o) {
                ho(e, t, o),
                yi(n, t, null),
                s = !0
            },
            p: Un,
            i(e) {
                s || (fi(n.$$.fragment, e),
                ii((()=>{
                    i && i.end(1),
                    o = vi(t, cr, {
                        y: 30,
                        duration: 600
                    }),
                    o.start()
                }
                )),
                s = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o && o.invalidate(),
                i = $i(t, cr, {
                    y: 30,
                    duration: 600
                }),
                s = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                e && i && i.end()
            }
        }
    }
    function ih(e) {
        let t, n, o, i;
        return n = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_chat_translator_tooltip_settings_button"),
                multiline: !0,
                width: 34,
                $$slots: {
                    default: [sh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                Lo(t, "class", "expanded-background svelte-j6tuh")
            },
            m(e, o) {
                ho(e, t, o),
                yi(n, t, null),
                i = !0
            },
            p(e, t) {
                const o = {};
                16386 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                i || (fi(n.$$.fragment, e),
                o || ii((()=>{
                    o = vi(t, cr, {
                        x: 9,
                        duration: 600
                    }),
                    o.start()
                }
                )),
                i = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && fo(t),
                Ci(n)
            }
        }
    }
    function sh(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                t.innerHTML = '<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.11001 16.2439H10.71L11.025 14.0488C11.565 13.8732 12.015 13.6098 12.465 13.2585L14.58 14.0488L16.38 10.9756L14.625 9.57073C14.67 9.30732 14.67 9.0439 14.67 8.78049C14.67 8.51707 14.67 8.25366 14.625 7.99024L16.38 6.58537L14.58 3.5122L12.465 4.30244C12.015 3.99512 11.52 3.73171 11.025 3.5122L10.665 1.31707H7.06501L6.70501 3.5122C6.16501 3.68781 5.71501 3.95122 5.26501 4.30244L3.15001 3.5122L1.35001 6.58537L3.10501 7.99024C3.06001 8.25366 3.06001 8.51707 3.06001 8.78049C3.06001 9.0439 3.06001 9.30732 3.10501 9.57073L1.35001 10.9756L3.15001 14.0488L5.31001 13.2585C5.76001 13.5659 6.25501 13.8293 6.75001 14.0488L7.11001 16.2439ZM9.94501 15.3659H7.83001L7.51501 13.3463L7.24501 13.2585C6.66001 13.0829 6.12001 12.7756 5.67001 12.3805L5.44501 12.2049L3.55501 12.9073L2.52001 11.1512L4.09501 9.87805L4.05001 9.61463C4.00501 9.30732 3.96001 9 3.96001 8.73659C3.96001 8.47317 4.00501 8.16585 4.05001 7.85854L4.09501 7.63902L2.52001 6.36585L3.55501 4.60976L5.44501 5.3122L5.67001 5.09268C6.12001 4.69756 6.66001 4.43415 7.24501 4.21463L7.51501 4.12683L7.83001 2.19512H9.94501L10.26 4.21463L10.53 4.30244C11.115 4.47805 11.655 4.78537 12.105 5.18049L12.285 5.3561L14.175 4.65366L15.21 6.40976L13.635 7.68293L13.68 7.94634C13.725 8.25366 13.77 8.56098 13.77 8.82439C13.77 9.08781 13.725 9.39512 13.68 9.70244L13.635 9.96585L15.21 11.239L14.175 12.9951L12.285 12.2927L12.105 12.4683C11.655 12.8634 11.115 13.1268 10.53 13.3463L10.26 13.4341L9.94501 15.3659ZM6.03018 8.78047C6.03018 10.3171 7.29018 11.5463 8.86518 11.5463C10.4402 11.5463 11.7002 10.3171 11.7002 8.78047C11.7002 7.24388 10.4402 6.01461 8.86518 6.01461C7.29018 6.01461 6.03018 7.24388 6.03018 8.78047ZM6.93018 8.78047C6.93018 7.72681 7.78518 6.89266 8.86518 6.89266C9.94518 6.89266 10.8002 7.72681 10.8002 8.78047C10.8002 9.83413 9.94518 10.6683 8.86518 10.6683C7.78518 10.6683 6.93018 9.83413 6.93018 8.78047Z" fill="#0F2B46"></path></svg>',
                Lo(t, "class", "icon-container svelte-j6tuh")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = [Co(t, "click", e[8]), Co(t, "mousedown", To(xo(e[5])))],
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                Gn(o)
            }
        }
    }
    function ah(e) {
        let t, n, o, i, s, a, r, l;
        return {
            c() {
                t = vo("svg"),
                n = vo("g"),
                o = vo("path"),
                i = vo("path"),
                s = vo("path"),
                a = vo("defs"),
                r = vo("clipPath"),
                l = vo("rect"),
                Lo(o, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"),
                Lo(o, "fill", "#0F2B46"),
                Lo(i, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"),
                Lo(i, "fill", "white"),
                Lo(s, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"),
                Lo(s, "fill", "white"),
                Lo(n, "clip-path", "url(#clip0)"),
                Lo(l, "width", "18.5294"),
                Lo(l, "height", "19"),
                Lo(l, "fill", "white"),
                Lo(l, "transform", "matrix(-1 0 0 1 18.5294 0)"),
                Lo(r, "id", "clip0"),
                Lo(t, "width", "22"),
                Lo(t, "height", "22"),
                Lo(t, "viewBox", "0 0 19 19"),
                Lo(t, "fill", "none"),
                Lo(t, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, c) {
                ho(e, t, c),
                po(t, n),
                po(n, o),
                po(n, i),
                po(n, s),
                po(t, a),
                po(a, r),
                po(r, l)
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function rh(e) {
        let t, n;
        return t = new Ql({}),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function lh(e) {
        let t, n, o, i, s, a;
        const r = [rh, ah]
          , l = [];
        function c(e, t) {
            return e[2] ? 0 : 1
        }
        return n = c(e),
        o = l[n] = r[n](e),
        {
            c() {
                t = wo("div"),
                o.c(),
                Lo(t, "class", "icon-container svelte-j6tuh")
            },
            m(o, r) {
                ho(o, t, r),
                l[n].m(t, null),
                i = !0,
                s || (a = [Co(t, "click", e[4]), Co(t, "mouseover", e[9])],
                s = !0)
            },
            p(e, i) {
                let s = n;
                n = c(e),
                n !== s && (mi(),
                _i(l[s], 1, 1, (()=>{
                    l[s] = null
                }
                )),
                hi(),
                o = l[n],
                o || (o = l[n] = r[n](e),
                o.c()),
                fi(o, 1),
                o.m(t, null))
            },
            i(e) {
                i || (fi(o),
                i = !0)
            },
            o(e) {
                _i(o),
                i = !1
            },
            d(e) {
                e && fo(t),
                l[n].d(),
                s = !1,
                Gn(a)
            }
        }
    }
    function ch(e) {
        let t, n, o, i, s, a, r, l, c = e[3] && nh(e), d = e[1] && oh(e), u = e[0] && ih(e);
        return s = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_chat_translator_tooltip_translate_button"),
                multiline: !0,
                $$slots: {
                    default: [lh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                c && c.c(),
                t = bo(),
                d && d.c(),
                n = bo(),
                o = wo("div"),
                u && u.c(),
                i = bo(),
                bi(s.$$.fragment),
                Lo(o, "class", "container svelte-j6tuh")
            },
            m(p, g) {
                c && c.m(p, g),
                ho(p, t, g),
                d && d.m(p, g),
                ho(p, n, g),
                ho(p, o, g),
                u && u.m(o, null),
                po(o, i),
                yi(s, o, null),
                a = !0,
                r || (l = Co(o, "mouseleave", e[10]),
                r = !0)
            },
            p(e, [a]) {
                e[3] ? c ? (c.p(e, a),
                8 & a && fi(c, 1)) : (c = nh(e),
                c.c(),
                fi(c, 1),
                c.m(t.parentNode, t)) : c && (mi(),
                _i(c, 1, 1, (()=>{
                    c = null
                }
                )),
                hi()),
                e[1] ? d ? (d.p(e, a),
                2 & a && fi(d, 1)) : (d = oh(e),
                d.c(),
                fi(d, 1),
                d.m(n.parentNode, n)) : d && (mi(),
                _i(d, 1, 1, (()=>{
                    d = null
                }
                )),
                hi()),
                e[0] ? u ? (u.p(e, a),
                1 & a && fi(u, 1)) : (u = ih(e),
                u.c(),
                fi(u, 1),
                u.m(o, i)) : u && (mi(),
                _i(u, 1, 1, (()=>{
                    u = null
                }
                )),
                hi());
                const r = {};
                16389 & a && (r.$$scope = {
                    dirty: a,
                    ctx: e
                }),
                s.$set(r)
            },
            i(e) {
                a || (fi(c),
                fi(d),
                fi(u),
                fi(s.$$.fragment, e),
                a = !0)
            },
            o(e) {
                _i(c),
                _i(d),
                _i(u),
                _i(s.$$.fragment, e),
                a = !1
            },
            d(e) {
                c && c.d(e),
                e && fo(t),
                d && d.d(e),
                e && fo(n),
                e && fo(o),
                u && u.d(),
                Ci(s),
                r = !1,
                l()
            }
        }
    }
    function dh(e, t, n) {
        let o, i, s, a, r, l;
        function c() {
            l !== o.selectedTargetLanguage && function() {
                const e = document.body.querySelectorAll(".message-in");
                if (e)
                    for (let t of e) {
                        const e = t.querySelector("deepl-whatsapp-translated-message");
                        e && (t.dataset.dlIsTranslated = "false",
                        e.remove())
                    }
            }();
            const e = []
              , t = document.body.querySelectorAll(".message-in")
              , n = Array.prototype.slice.call(t).reverse();
            let i = 0;
            for (let t of n) {
                const n = t.querySelector(".selectable-text.copyable-text");
                n && n.innerText && !qi(n.innerText) && i < 1e3 - n.innerText.length && "true" !== t.dataset.dlIsTranslated && (i += n.innerText.length,
                e.push([t, n]))
            }
            return e
        }
        Xn(e, us, (e=>n(12, o = e))),
        Zo("deepl_settings", us),
        Zo("deepl_website_settings", zi);
        return [i, s, a, r, async function() {
            const e = c();
            let t;
            n(3, r = void 0),
            n(2, a = !0);
            let i, s = [];
            try {
                let t = new Map;
                for (let n of e) {
                    const e = await Et(n[1].innerText);
                    s.includes(e) ? t.set(e, t.get(e) + 1) : (s.push(e),
                    t.set(e, 1))
                }
                i = [...t.entries()].reduce(((e,t)=>t[1] > e[1] ? t : e))[0]
            } catch (e) {
                console.error(e)
            }
            try {
                t = await En({
                    action: "dlRequestWhatsAppMessagesTranslation",
                    payload: {
                        messages: e.map((e=>e[1].innerText)),
                        messageLang: i,
                        detectedLanguages: s,
                        domainName: window.location.hostname
                    }
                }),
                l = o.selectedTargetLanguage;
                const n = t[0].texts;
                for (let[t,o] of e.entries()) {
                    const e = document.createElement("deepl-whatsapp-translated-message")
                      , i = o[0].querySelector("deepl-whatsapp-message-in-translator");
                    i && (i.remove(),
                    o[0].dataset.dlHasMessageTranslator = "false");
                    const s = ()=>{
                        o[0].dataset.dlIsTranslated = "false",
                        setTimeout((()=>{}
                        ), 600),
                        e.cleanupDOM(),
                        e.remove()
                    }
                    ;
                    e.createDOM(n[t], o[1].innerText, s, void 0),
                    o[1].appendChild(e),
                    o[0].dataset.dlIsTranslated = "true"
                }
            } catch (e) {
                n(3, r = e),
                console.error(r)
            }
            n(2, a = !1)
        }
        , function(t) {
            Xo.call(this, e, t)
        }
        , ()=>n(3, r = void 0), ()=>n(1, s = !1), ()=>n(1, s = !s), ()=>n(0, i = !0), ()=>{
            s || n(0, i = !1)
        }
        ]
    }
    class uh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, dh, ch, Zn, {})
        }
    }
    class ph extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.createDOM = this.createDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new uh({
                target: this.shadowContainer
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function gh(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                n.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_title")}`,
                o = bo(),
                i = wo("div"),
                i.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_body")}`,
                s = bo(),
                a = wo("div"),
                r = wo("button"),
                r.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_not_now_button")}`,
                l = bo(),
                c = wo("button"),
                c.textContent = `${chrome.i18n.getMessage("gmail_char_limit_popup_try_pro_button")}`,
                Lo(n, "class", "title svelte-1okvtgy"),
                Lo(i, "class", "body svelte-1okvtgy"),
                Lo(r, "class", "svelte-1okvtgy"),
                Lo(c, "class", "svelte-1okvtgy"),
                Lo(a, "class", "footer svelte-1okvtgy"),
                Lo(t, "class", "dl-gmail-character-limit-popup svelte-1okvtgy")
            },
            m(p, g) {
                ho(p, t, g),
                po(t, n),
                po(t, o),
                po(t, i),
                po(t, s),
                po(t, a),
                po(a, r),
                po(a, l),
                po(a, c),
                d || (u = [Co(r, "click", (function() {
                    Vn(e[0]) && e[0].apply(this, arguments)
                }
                )), Co(c, "click", e[1]), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[2])],
                d = !0)
            },
            p(t, [n]) {
                e = t
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                d = !1,
                Gn(u)
            }
        }
    }
    function mh(e, t, n) {
        let {onCloseCharLimitPopup: o} = t;
        return e.$$set = e=>{
            "onCloseCharLimitPopup"in e && n(0, o = e.onCloseCharLimitPopup)
        }
        ,
        [o, ()=>{
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ki,
                    utmContent: "header_home"
                }
            }),
            o && o()
        }
        , ()=>o()]
    }
    window.customElements.define("deepl-whatsapp-messages-in-translator", ph);
    class hh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, mh, gh, Zn, {
                onCloseCharLimitPopup: 0
            })
        }
    }
    class fh extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({onCloseCharLimitPopup: e}) {
            this.mainComponent = new hh({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    onCloseCharLimitPopup: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function _h(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $, b, y, C, x, T, L, E, k, S, M, I, D, O, N, A, R, P = chrome.i18n.getMessage("gmail_reading_translate_button") + "", z = chrome.i18n.getMessage("gmail_reading_forward_button") + "", H = null != e[4] && wh(e);
        return l = new Zl({
            props: {
                disabled: e[0],
                websiteSettings: zi,
                value: e[1].selectedTargetLanguage
            }
        }),
        l.$on("selection", e[14]),
        x = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_reading_view_original_button"),
                multiline: !1,
                zIndex: 2,
                $$slots: {
                    default: [vh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                i = bo(),
                s = wo("div"),
                H && H.c(),
                a = bo(),
                r = wo("div"),
                bi(l.$$.fragment),
                c = bo(),
                d = wo("div"),
                u = wo("button"),
                p = vo("svg"),
                g = vo("g"),
                m = vo("path"),
                h = vo("path"),
                f = vo("path"),
                _ = vo("defs"),
                w = vo("clipPath"),
                v = vo("rect"),
                $ = bo(),
                b = $o(P),
                y = bo(),
                C = wo("div"),
                bi(x.$$.fragment),
                T = bo(),
                L = wo("div"),
                E = wo("button"),
                k = vo("svg"),
                S = vo("path"),
                I = bo(),
                D = $o(z),
                Lo(o, "class", "language-icon svelte-1plsg6e"),
                Lo(s, "class", "language-selection-wrapper svelte-1plsg6e"),
                Lo(r, "class", "language-selection-wrapper svelte-1plsg6e"),
                Lo(m, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"),
                Lo(m, "class", "deepl-icon"),
                Lo(h, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"),
                Lo(h, "fill", "#0f2b46"),
                Lo(f, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"),
                Lo(f, "fill", "#0f2b46"),
                Lo(g, "clip-path", "url(#clip0)"),
                Lo(v, "width", "18.5294"),
                Lo(v, "height", "19"),
                Lo(v, "fill", "white"),
                Lo(v, "transform", "matrix(-1 0 0 1 18.5294 0)"),
                Lo(w, "id", "clip0"),
                Lo(p, "width", "15"),
                Lo(p, "height", "15"),
                Lo(p, "viewBox", "0 0 19 19"),
                Lo(p, "fill", "white"),
                Lo(p, "xmlns", "http://www.w3.org/2000/svg"),
                Lo(p, "class", "deepl-logo-svg svelte-1plsg6e"),
                Lo(u, "class", "translate-button svelte-1plsg6e"),
                u.disabled = e[0],
                Lo(u, "paddingx", "none"),
                Lo(n, "class", "left-side svelte-1plsg6e"),
                Lo(S, "d", "M15 1L19 5M19 5L15 9M19 5L1 5"),
                Lo(S, "stroke", M = e[2] ? "#0F2B46" : "#848F9B"),
                Lo(S, "stroke-width", "1.5"),
                Lo(S, "stroke-linecap", "round"),
                Lo(S, "stroke-linejoin", "round"),
                Lo(k, "width", "20"),
                Lo(k, "height", "10"),
                Lo(k, "viewBox", "0 0 20 10"),
                Lo(k, "fill", "none"),
                Lo(k, "xmlns", "http://www.w3.org/2000/svg"),
                Lo(k, "class", "svelte-1plsg6e"),
                E.disabled = O = !e[2],
                Lo(E, "class", "forward-button svelte-1plsg6e"),
                Lo(E, "paddingx", "none"),
                Lo(L, "class", "right-side svelte-1plsg6e"),
                Lo(t, "class", "dl-gmail-email-toolbar svelte-1plsg6e")
            },
            m(M, O) {
                ho(M, t, O),
                po(t, n),
                po(n, o),
                po(n, i),
                po(n, s),
                H && H.m(s, null),
                po(n, a),
                po(n, r),
                yi(l, r, null),
                po(n, c),
                po(n, d),
                po(d, u),
                po(u, p),
                po(p, g),
                po(g, m),
                po(g, h),
                po(g, f),
                po(p, _),
                po(_, w),
                po(w, v),
                po(u, $),
                po(u, b),
                po(n, y),
                po(n, C),
                yi(x, C, null),
                po(t, T),
                po(t, L),
                po(L, E),
                po(E, k),
                po(k, S),
                po(E, I),
                po(E, D),
                N = !0,
                A || (R = [Co(u, "click", To(xo(e[8]))), Co(E, "click", e[9])],
                A = !0)
            },
            p(e, t) {
                null != e[4] ? H ? (H.p(e, t),
                16 & t && fi(H, 1)) : (H = wh(e),
                H.c(),
                fi(H, 1),
                H.m(s, null)) : H && (mi(),
                _i(H, 1, 1, (()=>{
                    H = null
                }
                )),
                hi());
                const n = {};
                1 & t && (n.disabled = e[0]),
                2 & t && (n.value = e[1].selectedTargetLanguage),
                l.$set(n),
                (!N || 1 & t) && (u.disabled = e[0]);
                const o = {};
                268435460 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                x.$set(o),
                (!N || 4 & t && M !== (M = e[2] ? "#0F2B46" : "#848F9B")) && Lo(S, "stroke", M),
                (!N || 4 & t && O !== (O = !e[2])) && (E.disabled = O)
            },
            i(e) {
                N || (fi(H),
                fi(l.$$.fragment, e),
                fi(x.$$.fragment, e),
                N = !0)
            },
            o(e) {
                _i(H),
                _i(l.$$.fragment, e),
                _i(x.$$.fragment, e),
                N = !1
            },
            d(e) {
                e && fo(t),
                H && H.d(),
                Ci(l),
                Ci(x),
                A = !1,
                Gn(R)
            }
        }
    }
    function wh(e) {
        let t, n;
        return t = new Zl({
            props: {
                disabled: e[0],
                value: e[4],
                websiteSettings: zi,
                customClass: "borderless",
                fontSize: "sm"
            }
        }),
        t.$on("selection", e[13]),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.disabled = e[0]),
                16 & n && (o.value = e[4]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function vh(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = wo("button"),
                n = vo("svg"),
                o = vo("path"),
                Lo(o, "d", "M7 16L3 12M3 12L7 8M3 12L21 12"),
                Lo(o, "stroke", i = e[2] ? "#000" : "#848F9B"),
                Lo(o, "stroke-width", "2"),
                Lo(o, "stroke-linecap", "round"),
                Lo(o, "stroke-linejoin", "round"),
                Lo(n, "height", "20px"),
                Lo(n, "width", "20px"),
                Lo(n, "viewBox", "0 0 24 24"),
                Lo(n, "fill", "none"),
                Lo(n, "xmlns", "http://www.w3.org/2000/svg"),
                Lo(t, "class", "show-original-button svelte-1plsg6e"),
                Lo(t, "paddingx", "none"),
                No(t, "enabled", e[2])
            },
            m(i, r) {
                ho(i, t, r),
                po(t, n),
                po(n, o),
                s || (a = Co(t, "click", To(xo(e[7]))),
                s = !0)
            },
            p(e, n) {
                4 & n && i !== (i = e[2] ? "#000" : "#848F9B") && Lo(o, "stroke", i),
                4 & n && No(t, "enabled", e[2])
            },
            d(e) {
                e && fo(t),
                s = !1,
                a()
            }
        }
    }
    function $h(e) {
        let t, n, o = e[5] && e[6] && _h(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[5] && e[6] ? o ? (o.p(e, n),
                96 & n && fi(o, 1)) : (o = _h(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function bh(e, t, n) {
        let o, i, s, a, r, l;
        Xn(e, us, (e=>n(1, o = e)));
        let c, d, u, p, g = !1, m = !1, h = !1, f = !1, _ = !1, {container: w} = t;
        Wo((async()=>{
            C(),
            await b(),
            n(3, c = o.selectedTargetLanguage),
            setTimeout((()=>{
                n(6, _ = !0)
            }
            ), 250),
            window.addEventListener("popstate", $)
        }
        )),
        Go((()=>{
            window.removeEventListener("popstate", $)
        }
        ));
        const v = ()=>{
            i.innerText = s.innerText,
            i.innerHTML = s.innerHTML,
            n(11, m = !1)
        }
          , $ = ()=>{
            document.querySelectorAll("deepl-gmail-character-limit-popup").forEach((e=>{
                e.cleanupDOM,
                e.remove()
            }
            ))
        }
          , b = async()=>{
            if (!r)
                return;
            if (a = await Et(r),
            n(5, p = Tt(a)),
            !p)
                return;
            const e = St(Lt(a));
            n(4, u = e)
        }
          , y = async()=>{
            const e = `<a href="https://www.deepl.com/pro" target="_blank">${chrome.i18n.getMessage("gmail_forwarding_link")}</a>`;
            let t;
            if (g)
                t = i.getInnerHTML();
            else {
                const n = `<p style="text-align: center;">${chrome.i18n.getMessage("gmail_forwarding_title")} ${e}</p>`;
                t = `${i.getInnerHTML()}<br>${n}`
            }
            const o = {
                html: t,
                text: (new DOMParser).parseFromString(t, "text/html").body.textContent
            }
              , s = document.querySelector("[contenteditable='true']");
            s.focus(),
            setTimeout((()=>{
                s.focus(),
                sp(s, o),
                n(12, f = !1)
            }
            ), 300)
        }
          , C = ()=>{
            const e = Array.from(w.children).filter((e=>"div" === e.tagName.toLowerCase()));
            if (3 !== e.length)
                return;
            const t = e[1];
            if (!t)
                return;
            const n = Array.from(t.children).filter((e=>"div" === e.tagName.toLowerCase()));
            if (!n || !n.length)
                return;
            const o = n[2];
            o && (s = o.cloneNode(!0),
            i = o,
            o.innerHTML,
            r = o.innerText)
        }
        ;
        return e.$$set = e=>{
            "container"in e && n(10, w = e.container)
        }
        ,
        e.$$.update = ()=>{
            6145 & e.$$.dirty && n(2, l = m && !h && !f),
            2 & e.$$.dirty && (g = !0 === o.isLoggedIn && !0 === o.isProUser)
        }
        ,
        [h, o, l, c, u, p, _, v, async()=>{
            if (!i)
                return;
            let e = [];
            const {domElements: t, strings: o, cloneContainer: s} = Lp(i)
              , a = o.reduce(((e,t)=>e + t.length), 0);
            if (!g && a > $s)
                return En({
                    action: "dlTrackGmailCharLimitReached",
                    payload: {
                        gmailActionType: as(it)
                    }
                }),
                d = document.createElement("deepl-gmail-character-limit-popup"),
                d.createDOM({
                    onCloseCharLimitPopup: $
                }),
                void document.body.appendChild(d);
            n(0, h = !0),
            e = o.map((e=>({
                text: e
            }))),
            (e=>{
                if (!e)
                    return;
                const {height: t} = e.getBoundingClientRect()
                  , n = Math.floor(t / 20)
                  , o = [];
                for (let e = 0; e < n; e++)
                    o.push(`<div style="width: ${i = 35,
                    s = 99,
                    Math.floor(Math.random() * (s - i + 1)) + i}%" class="deepl-gmail-loading-skeleton">line</div>`);
                var i, s;
                e.innerHTML = o.join("")
            }
            )(i);
            try {
                const o = await En({
                    action: "dlRequestGmailReceivedEmailTranslation",
                    payload: {
                        targetLang: c,
                        sourceLang: u,
                        requests: e,
                        domainName: window.location.hostname
                    }
                });
                Pn({
                    strings: o[0]?.texts,
                    domElements: t
                }),
                i.innerText = s.innerText,
                i.innerHTML = s.innerHTML,
                n(0, h = !1),
                n(11, m = !0)
            } catch (e) {
                (e=>{
                    zi.update({
                        error: e.message ? e.message : e
                    })
                }
                )(e),
                n(0, h = !1),
                v()
            }
        }
        , ()=>{
            n(12, f = !0);
            if (!Ns())
                return void n(12, f = !1);
            const e = As();
            e ? (e.scrollIntoView(),
            setTimeout((()=>{
                Ds(e),
                Os("[contenteditable='true']", y)
            }
            ), 300)) : n(12, f = !1)
        }
        , w, m, f, e=>{
            n(4, u = e.detail.selectedOption.value)
        }
        , e=>{
            n(3, c = e.detail.selectedOption.value)
        }
        ]
    }
    window.customElements.define(ws, fh);
    class yh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, bh, $h, Zn, {
                container: 10
            })
        }
    }
    class Ch extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({container: e}) {
            this.mainComponent = new yh({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    container: e
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function xh(e) {
        let t, n, o, i, s, a, r, l;
        return {
            c() {
                t = vo("svg"),
                n = vo("g"),
                o = vo("path"),
                i = vo("path"),
                s = vo("path"),
                a = vo("defs"),
                r = vo("clipPath"),
                l = vo("rect"),
                Lo(o, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"),
                Lo(o, "fill", "#0F2B46"),
                Lo(i, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"),
                Lo(i, "fill", "white"),
                Lo(s, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"),
                Lo(s, "fill", "white"),
                Lo(n, "clip-path", "url(#clip0)"),
                Lo(l, "width", "18.5294"),
                Lo(l, "height", "19"),
                Lo(l, "fill", "white"),
                Lo(l, "transform", "matrix(-1 0 0 1 18.5294 0)"),
                Lo(r, "id", "clip0"),
                Lo(t, "width", e[1]),
                Lo(t, "height", e[0]),
                Lo(t, "class", "deepl-logo-icon"),
                Lo(t, "viewBox", "0 0 24 24"),
                Lo(t, "fill", "none"),
                Lo(t, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, c) {
                ho(e, t, c),
                po(t, n),
                po(n, o),
                po(n, i),
                po(n, s),
                po(t, a),
                po(a, r),
                po(r, l)
            },
            p(e, [n]) {
                2 & n && Lo(t, "width", e[1]),
                1 & n && Lo(t, "height", e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Th(e, t, n) {
        let {height: o="16px"} = t
          , {width: i="16px"} = t;
        return e.$$set = e=>{
            "height"in e && n(0, o = e.height),
            "width"in e && n(1, i = e.width)
        }
        ,
        [o, i]
    }
    window.customElements.define(ms, Ch);
    class Lh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Th, xh, Zn, {
                height: 0,
                width: 1
            })
        }
    }
    function Eh(e) {
        let t, n, o;
        return {
            c() {
                t = vo("svg"),
                n = vo("path"),
                Lo(n, "d", "M12.8332 5.83334H6.99984C5.71117 5.83334 4.6665 6.87801 4.6665 8.16667V21C4.6665 22.2887 5.71117 23.3333 6.99984 23.3333H19.8332C21.1218 23.3333 22.1665 22.2887 22.1665 21V15.1667M20.5166 4.18342C21.4278 3.27219 22.9052 3.27219 23.8164 4.18342C24.7276 5.09464 24.7276 6.57203 23.8164 7.48325L13.7997 17.5H10.4998L10.4998 14.2002L20.5166 4.18342Z"),
                Lo(n, "stroke", o = e[0] ? e[3] : e[4]),
                Lo(n, "stroke-width", "1.5"),
                Lo(n, "stroke-linecap", "round"),
                Lo(n, "stroke-linejoin", "round"),
                Lo(t, "width", e[2]),
                Lo(t, "height", e[1]),
                Lo(t, "class", "checkmark"),
                Lo(t, "viewBox", "0 0 26 26"),
                Lo(t, "fill", "none"),
                Lo(t, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, [i]) {
                25 & i && o !== (o = e[0] ? e[3] : e[4]) && Lo(n, "stroke", o),
                4 & i && Lo(t, "width", e[2]),
                2 & i && Lo(t, "height", e[1])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function kh(e, t, n) {
        let {disabled: o=!1} = t
          , {height: i="16px"} = t
          , {width: s="16px"} = t
          , {disabledColor: a="#f1f1f1"} = t
          , {enabledColor: r="#000"} = t;
        return e.$$set = e=>{
            "disabled"in e && n(0, o = e.disabled),
            "height"in e && n(1, i = e.height),
            "width"in e && n(2, s = e.width),
            "disabledColor"in e && n(3, a = e.disabledColor),
            "enabledColor"in e && n(4, r = e.enabledColor)
        }
        ,
        [o, i, s, a, r]
    }
    class Sh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, kh, Eh, Zn, {
                disabled: 0,
                height: 1,
                width: 2,
                disabledColor: 3,
                enabledColor: 4
            })
        }
    }
    function Mh(e) {
        let t, n, o, i, s, a, r;
        const l = [Dh, Ih]
          , c = [];
        function d(e, t) {
            return e[3] ? 0 : 1
        }
        return n = d(e),
        o = c[n] = l[n](e),
        {
            c() {
                t = wo("div"),
                o.c(),
                Lo(t, "class", "deepl-gmail-write-toolbar svelte-2n4lw0"),
                Lo(t, "style", i = `top: ${e[9]}px; left: ${e[10]}px`)
            },
            m(o, i) {
                ho(o, t, i),
                c[n].m(t, null),
                s = !0,
                a || (r = [Co(t, "click", To(xo(e[25]))), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[26])],
                a = !0)
            },
            p(e, a) {
                let r = n;
                n = d(e),
                n === r ? c[n].p(e, a) : (mi(),
                _i(c[r], 1, 1, (()=>{
                    c[r] = null
                }
                )),
                hi(),
                o = c[n],
                o ? o.p(e, a) : (o = c[n] = l[n](e),
                o.c()),
                fi(o, 1),
                o.m(t, null)),
                (!s || 1536 & a[0] && i !== (i = `top: ${e[9]}px; left: ${e[10]}px`)) && Lo(t, "style", i)
            },
            i(e) {
                s || (fi(o),
                s = !0)
            },
            o(e) {
                _i(o),
                s = !1
            },
            d(e) {
                e && fo(t),
                c[n].d(),
                a = !1,
                Gn(r)
            }
        }
    }
    function Ih(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _, w, v, $;
        return i = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_improve_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Oh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        r = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_translate_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Nh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        u = new Zl({
            props: {
                value: e[12] || e[2].targetLanguageUserInput,
                disabled: !1,
                isBorderless: !0,
                fontSize: "sm"
            }
        }),
        u.$on("selection", e[22]),
        m = new Fl({
            props: {
                selectedOption: e[1],
                items: e[7],
                placeholder: "...",
                dataQaButton: "deepl-language-selection-button",
                dataQaList: "deepl-language-selection-list",
                isBorderless: !0
            }
        }),
        m.$on("valueselected", e[23]),
        _ = new Lh({
            props: {
                height: "24px",
                width: "24px"
            }
        }),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                bi(i.$$.fragment),
                s = bo(),
                a = wo("div"),
                bi(r.$$.fragment),
                l = bo(),
                c = wo("div"),
                d = wo("div"),
                bi(u.$$.fragment),
                p = bo(),
                g = wo("div"),
                bi(m.$$.fragment),
                h = bo(),
                f = wo("div"),
                bi(_.$$.fragment),
                Lo(o, "class", "wrapper write-icon-wrapper svelte-2n4lw0"),
                Lo(a, "class", "wrapper translate-icon-wrapper svelte-2n4lw0"),
                Lo(d, "class", "dropdown"),
                Lo(c, "class", "wrapper language-wrapper svelte-2n4lw0"),
                Lo(g, "class", "wrapper shortcode-wrapper svelte-2n4lw0"),
                Lo(f, "class", "wrapper icon-wrapper svelte-2n4lw0"),
                Lo(n, "class", "dl-toolbar svelte-2n4lw0"),
                No(n, "expanded", e[4]),
                Lo(t, "class", "dl-toolbar-positioner svelte-2n4lw0")
            },
            m(b, y) {
                ho(b, t, y),
                po(t, n),
                po(n, o),
                yi(i, o, null),
                po(n, s),
                po(n, a),
                yi(r, a, null),
                po(n, l),
                po(n, c),
                po(c, d),
                yi(u, d, null),
                po(n, p),
                po(n, g),
                yi(m, g, null),
                po(n, h),
                po(n, f),
                yi(_, f, null),
                w = !0,
                v || ($ = Co(f, "click", e[24]),
                v = !0)
            },
            p(e, t) {
                const o = {};
                96 & t[0] | 1048576 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                i.$set(o);
                const s = {};
                4128 & t[0] | 1048576 & t[1] && (s.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                r.$set(s);
                const a = {};
                4100 & t[0] && (a.value = e[12] || e[2].targetLanguageUserInput),
                u.$set(a);
                const l = {};
                2 & t[0] && (l.selectedOption = e[1]),
                128 & t[0] && (l.items = e[7]),
                m.$set(l),
                (!w || 16 & t[0]) && No(n, "expanded", e[4])
            },
            i(e) {
                w || (fi(i.$$.fragment, e),
                fi(r.$$.fragment, e),
                fi(u.$$.fragment, e),
                fi(m.$$.fragment, e),
                fi(_.$$.fragment, e),
                w = !0)
            },
            o(e) {
                _i(i.$$.fragment, e),
                _i(r.$$.fragment, e),
                _i(u.$$.fragment, e),
                _i(m.$$.fragment, e),
                _i(_.$$.fragment, e),
                w = !1
            },
            d(e) {
                e && fo(t),
                Ci(i),
                Ci(r),
                Ci(u),
                Ci(m),
                Ci(_),
                v = !1,
                $()
            }
        }
    }
    function Dh(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return i = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_undo_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Ah]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        r = new ud({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_accept_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Rh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                bi(i.$$.fragment),
                s = bo(),
                a = wo("div"),
                bi(r.$$.fragment),
                Lo(o, "class", "wrapper undo-wrapper svelte-2n4lw0"),
                Lo(a, "class", "wrapper accept-wrapper svelte-2n4lw0"),
                Lo(n, "class", "dl-toolbar expanded accept-changes svelte-2n4lw0"),
                Lo(t, "class", "dl-toolbar-positioner svelte-2n4lw0")
            },
            m(u, p) {
                ho(u, t, p),
                po(t, n),
                po(n, o),
                yi(i, o, null),
                po(n, s),
                po(n, a),
                yi(r, a, null),
                l = !0,
                c || (d = [io(In.call(null, n, {
                    isShadow: !0
                })), Co(n, "click_outside", e[20])],
                c = !0)
            },
            p(e, t) {
                const n = {};
                1048576 & t[1] && (n.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                i.$set(n);
                const o = {};
                1048576 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                r.$set(o)
            },
            i(e) {
                l || (fi(i.$$.fragment, e),
                fi(r.$$.fragment, e),
                l = !0)
            },
            o(e) {
                _i(i.$$.fragment, e),
                _i(r.$$.fragment, e),
                l = !1
            },
            d(e) {
                e && fo(t),
                Ci(i),
                Ci(r),
                c = !1,
                Gn(d)
            }
        }
    }
    function Oh(e) {
        let t, n, o, i, s, a;
        return n = new Sh({
            props: {
                height: "24px",
                width: "24px",
                disabled: !e[6]
            }
        }),
        {
            c() {
                t = wo("button"),
                bi(n.$$.fragment),
                Lo(t, "class", "icon-button svelte-2n4lw0"),
                t.disabled = o = e[5] || !e[6],
                No(t, "isTranslating", e[5])
            },
            m(o, r) {
                ho(o, t, r),
                yi(n, t, null),
                i = !0,
                s || (a = Co(t, "click", To(xo(e[21]))),
                s = !0)
            },
            p(e, s) {
                const a = {};
                64 & s[0] && (a.disabled = !e[6]),
                n.$set(a),
                (!i || 96 & s[0] && o !== (o = e[5] || !e[6])) && (t.disabled = o),
                (!i || 32 & s[0]) && No(t, "isTranslating", e[5])
            },
            i(e) {
                i || (fi(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                s = !1,
                a()
            }
        }
    }
    function Nh(e) {
        let t, n, o, i, s, a, r;
        return {
            c() {
                t = wo("button"),
                n = vo("svg"),
                o = vo("path"),
                Lo(o, "d", "M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129"),
                Lo(o, "stroke", i = e[5] || !e[12] ? "gray" : "#0F2B46"),
                Lo(o, "stroke-width", "1.5"),
                Lo(o, "stroke-linecap", "round"),
                Lo(o, "stroke-linejoin", "round"),
                Lo(n, "class", "translate-icon svelte-2n4lw0"),
                Lo(n, "width", "24"),
                Lo(n, "height", "24"),
                Lo(n, "viewBox", "0 0 24 24"),
                Lo(n, "fill", "none"),
                Lo(n, "xmlns", "http://www.w3.org/2000/svg"),
                t.disabled = s = e[5] || !e[12],
                Lo(t, "class", "icon-button svelte-2n4lw0"),
                No(t, "isTranslating", e[5])
            },
            m(i, s) {
                ho(i, t, s),
                po(t, n),
                po(n, o),
                a || (r = Co(t, "click", To(xo(e[14]))),
                a = !0)
            },
            p(e, n) {
                4128 & n[0] && i !== (i = e[5] || !e[12] ? "gray" : "#0F2B46") && Lo(o, "stroke", i),
                4128 & n[0] && s !== (s = e[5] || !e[12]) && (t.disabled = s),
                32 & n[0] && No(t, "isTranslating", e[5])
            },
            d(e) {
                e && fo(t),
                a = !1,
                r()
            }
        }
    }
    function Ah(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                t.innerHTML = '<svg height="32px" width="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 8.33398H10.8333C14.5152 8.33398 17.5 11.3188 17.5 15.0007V16.6673M2.5 8.33398L7.5 13.334M2.5 8.33398L7.5 3.33398" stroke="#727A83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-2n4lw0"></path></svg>',
                Lo(t, "class", "confirm-button svelte-2n4lw0")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", To(xo(e[17]))),
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Rh(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                t.innerHTML = '<svg width="24px" height="24px" class="checkmark" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L5 11L15 1" stroke="#727A83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-2n4lw0"></path></svg>',
                Lo(t, "class", "confirm-button svelte-2n4lw0")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", To(xo(e[16]))),
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Ph(e) {
        let t, n, o = e[8] && Mh(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, n) {
                e[8] ? o ? (o.p(e, n),
                256 & n[0] && fi(o, 1)) : (o = Mh(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function zh(e, t, n) {
        let o;
        Xn(e, us, (e=>n(2, o = e)));
        const {deepl_inline_ui: i} = S;
        let {messageContainer: s} = t
          , {updateLockStatus: a} = t;
        const r = "WRITE"
          , l = "TRANSLATE";
        let c, d, u, p, g, m, h, f, _, w, v, $, b, y, C = null, x = !1, T = !1, L = !1;
        Zo("deepl_settings", us),
        Wo((async()=>{
            s && s && (s.addEventListener("input", M),
            s.addEventListener("paste", M),
            k()),
            n(7, p = Ss()),
            n(12, b = o.targetLanguageUserInput),
            z(),
            F(),
            H(),
            window.addEventListener("popstate", O)
        }
        )),
        Go((()=>{
            window.removeEventListener("popstate", O),
            s.removeEventListener("input", M),
            s.removeEventListener("paste", M)
        }
        ));
        const E = async()=>{
            if (!s)
                return;
            m = s.getInnerHTML();
            const e = s.innerText
              , t = e.length > $s;
            if (!c && t)
                return N(),
                void j(at);
            n(5, u = !0),
            A(s);
            try {
                ar({
                    eventType: Ve,
                    lang: C.value,
                    sourceLength: e.length,
                    nicheIntegration: Me.gmail
                }),
                await Ep(s, !0),
                B({
                    lang: C.value,
                    sourceLength: e.length,
                    targetLength: s.innerText.length
                }),
                R(s),
                n(5, u = !1),
                I(!0, r)
            } catch (e) {
                P(e),
                R(s),
                n(5, u = !1),
                I(!1)
            }
        }
          , k = async()=>{
            const e = s.getInnerHTML()
              , t = e.replace(/<[^>]+>/g, "");
            const o = await Et(t);
            o.length && (e=>{
                const t = p.find((t=>t.value === e));
                t && n(1, C = t)
            }
            )(o)
        }
          , M = ()=>{
            s && n(19, _ = s.innerText.length > 20),
            k()
        }
          , I = (e,t)=>{
            if (!e)
                return n(3, x = !1),
                d = null,
                void (h = null);
            n(3, x = !0),
            d = t
        }
          , D = ()=>{
            d === l ? q(!0) : ar({
                eventType: Qe,
                ...h
            }),
            I(!1),
            m = null,
            n(4, T = !1)
        }
          , O = ()=>{
            document.querySelectorAll("deepl-gmail-character-limit-popup").forEach((e=>{
                e.cleanupDOM,
                e.remove()
            }
            ))
        }
          , N = ()=>{
            const e = (e=>{
                for (; null !== e; ) {
                    const t = e.getAttribute("role");
                    if ("TABLE" === e.tagName && ("dialog" === t || "presentation" === t))
                        return e.parentElement;
                    e = e.parentElement
                }
                return null
            }
            )(s);
            e && (g = document.createElement("deepl-gmail-character-limit-popup"),
            g.createDOM({
                onCloseCharLimitPopup: O
            }),
            e.appendChild(g))
        }
          , A = e=>{
            e && e.classList.add("deepl-selection-loading-skeleton")
        }
          , R = e=>{
            e && e.classList.remove("deepl-selection-loading-skeleton")
        }
          , P = e=>{
            zi.update({
                error: e.message ? e.message : e
            })
        }
          , z = ()=>{
            const e = s;
            if (!e)
                return;
            y = new MutationObserver((()=>{
                e && F()
            }
            ));
            y.observe(e, {
                attributes: !1,
                childList: !0,
                characterData: !1
            })
        }
          , H = ()=>{
            window.addEventListener("scroll", (()=>{
                F()
            }
            ))
        }
          , F = ()=>{
            const e = s.getBoundingClientRect();
            e && (n(9, w = e.bottom - 30),
            n(10, v = e.right - 30))
        }
          , B = ({lang: e, sourceLength: t, targetLang: n, targetLength: o})=>{
            h = {
                lang: e,
                sourceLength: t,
                targetLang: n,
                targetLength: o,
                nicheIntegration: Me.gmail
            }
        }
          , U = ({sourceLang: e, sourceLength: t, targetLang: n, targetLength: o})=>{
            h = {
                sourceLang: e,
                sourceLength: t,
                targetLang: n,
                targetLength: o,
                nicheIntegration: Me.gmail
            }
        }
          , q = e=>{
            En({
                action: "dlTrackTranslateAcceptOrRevertEvent",
                payload: {
                    eventType: e ? et : tt,
                    acceptOrRevertMetadata: h
                }
            })
        }
          , j = e=>{
            En({
                action: "dlTrackGmailCharLimitReached",
                payload: {
                    gmailActionType: as(e)
                }
            })
        }
        ;
        return e.$$set = e=>{
            "messageContainer"in e && n(18, s = e.messageContainer),
            "updateLockStatus"in e && n(0, a = e.updateLockStatus)
        }
        ,
        e.$$.update = ()=>{
            2 & e.$$.dirty[0] && n(7, p = Ss(C)),
            4 & e.$$.dirty[0] && (c = !0 === o.isLoggedIn && !0 === o.isProUser),
            524290 & e.$$.dirty[0] && n(8, f = !!C && _),
            2 & e.$$.dirty[0] && C && C.value && n(6, L = ["EN", "DE"].includes(C.value))
        }
        ,
        [a, C, o, x, T, u, L, p, f, w, v, $, b, i, async()=>{
            if (!s)
                return;
            m = s.getInnerHTML();
            const e = s.innerText
              , t = e.length > $s;
            if (!c && t)
                return N(),
                void j(st);
            A(s);
            try {
                await Ep(s, !1, b),
                R(s),
                n(5, u = !1),
                I(!0, l),
                U({
                    sourceLang: $.value,
                    targetLang: b,
                    sourceLength: e.length,
                    targetLength: s.innerText.length
                })
            } catch (e) {
                P(e),
                R(s),
                n(5, u = !1),
                I(!1)
            }
        }
        , E, D, ()=>{
            d === l ? q(!1) : ar({
                eventType: Ye,
                ...h
            }),
            I(!1),
            n(18, s.innerHTML = m, s)
        }
        , s, _, ()=>{
            D()
        }
        , ()=>{
            E()
        }
        , async e=>{
            n(12, b = e.detail.selectedOption.value)
        }
        , e=>{
            n(11, $ = e.detail.selectedOption)
        }
        , ()=>{
            a(!0),
            n(4, T = !T)
        }
        , ()=>{
            a(!0)
        }
        , ()=>{
            a(!1),
            n(4, T = !1)
        }
        ]
    }
    class Hh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, zh, Ph, Zn, {
                messageContainer: 18,
                updateLockStatus: 0
            }, null, [-1, -1])
        }
    }
    class Fh extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({container: e, updateLockStatus: t}) {
            this.mainComponent = new Hh({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    messageContainer: e,
                    updateLockStatus: t
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Bh(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("button"),
                n = wo("span"),
                Lo(n, "class", "svelte-1mtvz9f"),
                Lo(t, "class", "switch svelte-1mtvz9f"),
                Lo(t, "data-qa", e[1]),
                No(t, "checked", e[0])
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                o || (i = Co(t, "click", e[2]),
                o = !0)
            },
            p(e, [n]) {
                2 & n && Lo(t, "data-qa", e[1]),
                1 & n && No(t, "checked", e[0])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                o = !1,
                i()
            }
        }
    }
    function Uh(e, t, n) {
        let {checked: o=!1} = t
          , {qaRoot: i="dl-switch"} = t;
        const s = Vo();
        return e.$$set = e=>{
            "checked"in e && n(0, o = e.checked),
            "qaRoot"in e && n(1, i = e.qaRoot)
        }
        ,
        [o, i, function() {
            s("change", {
                checked: !o
            })
        }
        ]
    }
    window.customElements.define(_s, Fh);
    class qh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Uh, Bh, Zn, {
                checked: 0,
                qaRoot: 1
            })
        }
    }
    function jh(e) {
        let t, n, o, i;
        return {
            c() {
                t = vo("svg"),
                n = vo("path"),
                Lo(n, "d", "M1 7L5 11L15 1"),
                Lo(n, "stroke", o = e[0] ? e[3] : e[4]),
                Lo(n, "stroke-width", "2"),
                Lo(n, "stroke-linecap", "round"),
                Lo(n, "stroke-linejoin", "round"),
                Lo(n, "class", "svelte-mrm8jk"),
                Lo(t, "width", e[2]),
                Lo(t, "height", e[1]),
                Lo(t, "class", "checkmark svelte-mrm8jk"),
                Lo(t, "viewBox", "0 0 16 12"),
                Lo(t, "fill", "none"),
                Lo(t, "xmlns", "http://www.w3.org/2000/svg"),
                Lo(t, "style", i = `padding: ${e[6]};`),
                No(t, "enableHover", e[5])
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, [s]) {
                25 & s && o !== (o = e[0] ? e[3] : e[4]) && Lo(n, "stroke", o),
                4 & s && Lo(t, "width", e[2]),
                2 & s && Lo(t, "height", e[1]),
                64 & s && i !== (i = `padding: ${e[6]};`) && Lo(t, "style", i),
                32 & s && No(t, "enableHover", e[5])
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Wh(e, t, n) {
        let {disabled: o=!1} = t
          , {height: i="16px"} = t
          , {width: s="16px"} = t
          , {disabledColor: a="#727A83"} = t
          , {enabledColor: r="#007E5E"} = t
          , {enableHover: l=!1} = t
          , {padding: c} = t;
        return e.$$set = e=>{
            "disabled"in e && n(0, o = e.disabled),
            "height"in e && n(1, i = e.height),
            "width"in e && n(2, s = e.width),
            "disabledColor"in e && n(3, a = e.disabledColor),
            "enabledColor"in e && n(4, r = e.enabledColor),
            "enableHover"in e && n(5, l = e.enableHover),
            "padding"in e && n(6, c = e.padding)
        }
        ,
        [o, i, s, a, r, l, c]
    }
    class Gh extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Wh, jh, Zn, {
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
    function Vh(e) {
        let t, n, o, i, s, a, r, l, c, d = !e[2] && Zh(e);
        const u = [Jh, Yh]
          , p = [];
        return s = 1,
        a = p[1] = u[1](e),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                d && d.c(),
                o = bo(),
                i = wo("div"),
                a.c(),
                Lo(i, "class", "footer"),
                Lo(n, "class", "content svelte-9wl7eu"),
                Lo(t, "class", "onboarding-popup svelte-9wl7eu"),
                No(t, "hasBackgroundImage", !e[2])
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                d && d.m(n, null),
                po(n, o),
                po(n, i),
                p[1].m(i, null),
                r = !0,
                l || (c = [io(In.call(null, t, {
                    isShadow: !0,
                    exceptions: ["#dl-gmail-settings-icon"]
                })), Co(t, "click_outside", e[7])],
                l = !0)
            },
            p(e, i) {
                e[2] ? d && (mi(),
                _i(d, 1, 1, (()=>{
                    d = null
                }
                )),
                hi()) : d ? (d.p(e, i),
                4 & i && fi(d, 1)) : (d = Zh(e),
                d.c(),
                fi(d, 1),
                d.m(n, o)),
                a.p(e, i),
                (!r || 4 & i) && No(t, "hasBackgroundImage", !e[2])
            },
            i(e) {
                r || (fi(d),
                fi(a),
                r = !0)
            },
            o(e) {
                _i(d),
                _i(a),
                r = !1
            },
            d(e) {
                e && fo(t),
                d && d.d(),
                p[1].d(),
                l = !1,
                Gn(c)
            }
        }
    }
    function Zh(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p;
        let g = Kh(e);
        const m = [Qh, Xh]
          , h = [];
        return d = 1,
        u = h[1] = m[1](e),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("div"),
                g.c(),
                i = bo(),
                s = wo("div"),
                s.textContent = "BETA",
                a = bo(),
                r = wo("div"),
                l = bo(),
                c = wo("div"),
                u.c(),
                Lo(s, "class", "beta svelte-9wl7eu"),
                Lo(n, "class", "left svelte-9wl7eu"),
                Lo(r, "class", "right"),
                Lo(t, "class", "title svelte-9wl7eu"),
                Lo(c, "class", "body svelte-9wl7eu")
            },
            m(e, d) {
                ho(e, t, d),
                po(t, n),
                po(n, o),
                g.m(o, null),
                po(n, i),
                po(n, s),
                po(t, a),
                po(t, r),
                ho(e, l, d),
                ho(e, c, d),
                h[1].m(c, null),
                p = !0
            },
            p(e, t) {
                g.p(e, t),
                u.p(e, t)
            },
            i(e) {
                p || (fi(u),
                p = !0)
            },
            o(e) {
                _i(u),
                p = !1
            },
            d(e) {
                e && fo(t),
                g.d(),
                e && fo(l),
                e && fo(c),
                h[1].d()
            }
        }
    }
    function Kh(e) {
        let t, n = chrome.i18n.getMessage("gmail_onboarding_title") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Xh(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h;
        return n = new Gh({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        r = new Gh({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        p = new Gh({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment),
                o = bo(),
                i = wo("div"),
                i.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_1")}`,
                s = bo(),
                a = wo("div"),
                bi(r.$$.fragment),
                l = bo(),
                c = wo("div"),
                c.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_2")}`,
                d = bo(),
                u = wo("div"),
                bi(p.$$.fragment),
                g = bo(),
                m = wo("div"),
                m.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_3")}`,
                Lo(i, "class", "copy-text svelte-9wl7eu"),
                Lo(t, "class", "copy svelte-9wl7eu"),
                Lo(c, "class", "copy-text svelte-9wl7eu"),
                Lo(a, "class", "copy svelte-9wl7eu"),
                Lo(m, "class", "copy-text svelte-9wl7eu"),
                Lo(u, "class", "copy svelte-9wl7eu")
            },
            m(e, f) {
                ho(e, t, f),
                yi(n, t, null),
                po(t, o),
                po(t, i),
                ho(e, s, f),
                ho(e, a, f),
                yi(r, a, null),
                po(a, l),
                po(a, c),
                ho(e, d, f),
                ho(e, u, f),
                yi(p, u, null),
                po(u, g),
                po(u, m),
                h = !0
            },
            p: Un,
            i(e) {
                h || (fi(n.$$.fragment, e),
                fi(r.$$.fragment, e),
                fi(p.$$.fragment, e),
                h = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                _i(r.$$.fragment, e),
                _i(p.$$.fragment, e),
                h = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                e && fo(s),
                e && fo(a),
                Ci(r),
                e && fo(d),
                e && fo(u),
                Ci(p)
            }
        }
    }
    function Qh(e) {
        let t;
        return {
            c() {
                t = wo("span"),
                t.textContent = `${chrome.i18n.getMessage("gmail_onboarding_char_limit_reached_body")}`
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Yh(e) {
        let t, n, o, i, s, a, r;
        return a = new qh({
            props: {
                checked: e[0].isGmailEnabled
            }
        }),
        a.$on("change", e[6]),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("p"),
                o.textContent = `${chrome.i18n.getMessage("gmail_onboarding_toggle")}`,
                i = bo(),
                s = wo("div"),
                bi(a.$$.fragment),
                Lo(n, "class", "switch-content svelte-9wl7eu"),
                Lo(s, "class", "switch"),
                Lo(t, "class", "switch-container svelte-9wl7eu")
            },
            m(e, l) {
                ho(e, t, l),
                po(t, n),
                po(n, o),
                po(t, i),
                po(t, s),
                yi(a, s, null),
                r = !0
            },
            p(e, t) {
                const n = {};
                1 & t && (n.checked = e[0].isGmailEnabled),
                a.$set(n)
            },
            i(e) {
                r || (fi(a.$$.fragment, e),
                r = !0)
            },
            o(e) {
                _i(a.$$.fragment, e),
                r = !1
            },
            d(e) {
                e && fo(t),
                Ci(a)
            }
        }
    }
    function Jh(e) {
        let t;
        return {
            c() {
                t = wo("button"),
                t.textContent = `${chrome.i18n.getMessage("gmail_onboarding_char_limit_reached_button")}`,
                Lo(t, "class", "pro-button svelte-9wl7eu")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function ef(e) {
        let t, n, o, i, s, a, r = e[1] && Vh(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = bo(),
                r && r.c(),
                Lo(n, "class", "icon svelte-9wl7eu"),
                Lo(n, "id", "dl-gmail-settings-icon"),
                No(n, "isOnboardingPopupOpen", e[1]),
                Lo(t, "class", "deepl-gmail-header-toolbar svelte-9wl7eu")
            },
            m(l, c) {
                ho(l, t, c),
                po(t, n),
                po(t, o),
                r && r.m(t, null),
                i = !0,
                s || (a = Co(n, "click", To(xo(e[5]))),
                s = !0)
            },
            p(e, [o]) {
                (!i || 2 & o) && No(n, "isOnboardingPopupOpen", e[1]),
                e[1] ? r ? (r.p(e, o),
                2 & o && fi(r, 1)) : (r = Vh(e),
                r.c(),
                fi(r, 1),
                r.m(t, null)) : r && (mi(),
                _i(r, 1, 1, (()=>{
                    r = null
                }
                )),
                hi())
            },
            i(e) {
                i || (fi(r),
                i = !0)
            },
            o(e) {
                _i(r),
                i = !1
            },
            d(e) {
                e && fo(t),
                r && r.d(),
                s = !1,
                a()
            }
        }
    }
    function tf(e, t, n) {
        let o;
        Xn(e, us, (e=>n(0, o = e)));
        let i = !1
          , s = !1;
        const a = ()=>{
            En({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: Me.gdocs
                }
            })
        }
          , r = async e=>{
            n(1, i = e),
            En({
                action: "dlTrackUILocationClicked",
                payload: ie
            }),
            e && a()
        }
          , l = async e=>{
            await us.set({
                isGmailEnabled: e
            }),
            En({
                action: "dlTrackCustomizationEnabledEvent",
                payload: {
                    nicheIntegration: Me.gmail,
                    uiLocation: oe,
                    customizationEnabled: e
                }
            })
        }
        ;
        Wo((async()=>{
            o.wasGmailOnboardingShown || (n(1, i = !0),
            a(),
            await us.set({
                wasGmailOnboardingShown: !0
            }))
        }
        ));
        return e.$$.update = ()=>{
            1 & e.$$.dirty && n(2, s = !0 === o.isLoggedIn && !0 === o.isProUser)
        }
        ,
        [o, i, s, r, l, ()=>{
            r(!i)
        }
        , e=>l(e.detail.checked), ()=>{
            r(!1)
        }
        ]
    }
    class nf extends Ti {
        constructor(e) {
            super(),
            xi(this, e, tf, ef, Zn, {})
        }
    }
    class of extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new nf({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function sf(e) {
        let t, n, o, i, s;
        return n = new Fl({
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
        }),
        n.$on("valueselected", e[3]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment)
            },
            m(a, r) {
                ho(a, t, r),
                yi(n, t, null),
                o = !0,
                i || (s = Co(t, "mousedown", To(xo(e[5]))),
                i = !0)
            },
            p(e, [t]) {
                const o = {};
                2 & t && (o.items = e[1]),
                4 & t && (o.selectedOption = e[2]),
                1 & t && (o.isFullWidth = e[0]),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                i = !1,
                s()
            }
        }
    }
    function af(e, t, n) {
        let o, i;
        const s = Vo();
        let {value: a} = t
          , {isFullWidth: r=!1} = t;
        return e.$$set = e=>{
            "value"in e && n(4, a = e.value),
            "isFullWidth"in e && n(0, r = e.isFullWidth)
        }
        ,
        e.$$.update = ()=>{
            18 & e.$$.dirty && n(2, i = a ? o.find((e=>e.value === a)) : o.find((e=>"auto" === e.value)))
        }
        ,
        n(1, o = [{
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
        }]),
        [r, o, i, function(e) {
            e.detail.selectedOption.value !== a && s("selection", e.detail)
        }
        , a, function(t) {
            Xo.call(this, e, t)
        }
        ]
    }
    window.customElements.define(hs, of);
    class rf extends Ti {
        constructor(e) {
            super(),
            xi(this, e, af, sf, Zn, {
                value: 4,
                isFullWidth: 0
            })
        }
    }
    function lf(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = wo("div"),
                n = wo("button"),
                o = bo(),
                i = $o(e[3]),
                Lo(n, "class", "close-button svelte-13n3z3n"),
                Lo(t, "class", "dl-zendesk-error-message svelte-13n3z3n")
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                po(t, o),
                po(t, i),
                r = !0,
                l || (c = [Co(n, "click", e[8]), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[8])],
                l = !0)
            },
            p(e, t) {
                (!r || 8 & t[0]) && Eo(i, e[3])
            },
            i(e) {
                r || (ii((()=>{
                    a && a.end(1),
                    s = vi(t, cr, {
                        y: -5,
                        duration: 300
                    }),
                    s.start()
                }
                )),
                r = !0)
            },
            o(e) {
                s && s.invalidate(),
                a = $i(t, cr, {
                    y: -5,
                    duration: 300
                }),
                r = !1
            },
            d(e) {
                e && fo(t),
                e && a && a.end(),
                l = !1,
                Gn(c)
            }
        }
    }
    function cf(e) {
        let t, n;
        return t = new rf({
            props: {
                value: e[6].zendeskFormality
            }
        }),
        t.$on("selection", e[9]),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                64 & n[0] && (o.value = e[6].zendeskFormality),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function df(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                t.innerHTML = '<span class="svelte-13n3z3n"></span>',
                Lo(t, "class", "dl-zendesk-input-icon svelte-13n3z3n"),
                No(t, "is-active", e[1]),
                No(t, "is-loading", e[2]),
                No(t, "is-language-mismatching", e[0])
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", e[7]),
                n = !0)
            },
            p(e, n) {
                2 & n[0] && No(t, "is-active", e[1]),
                4 & n[0] && No(t, "is-loading", e[2]),
                1 & n[0] && No(t, "is-language-mismatching", e[0])
            },
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function uf(e) {
        let t, n, o, i, s, a = e[3] && lf(e), r = e[4] && cf(e);
        return i = new ud({
            props: {
                tooltip: e[5],
                zIndex: "0",
                $$slots: {
                    default: [df]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                a && a.c(),
                t = bo(),
                n = wo("div"),
                r && r.c(),
                o = bo(),
                bi(i.$$.fragment),
                Lo(n, "class", "dl-icons-holder svelte-13n3z3n"),
                No(n, "has-formality", e[4])
            },
            m(e, l) {
                a && a.m(e, l),
                ho(e, t, l),
                ho(e, n, l),
                r && r.m(n, null),
                po(n, o),
                yi(i, n, null),
                s = !0
            },
            p(e, l) {
                e[3] ? a ? (a.p(e, l),
                8 & l[0] && fi(a, 1)) : (a = lf(e),
                a.c(),
                fi(a, 1),
                a.m(t.parentNode, t)) : a && (mi(),
                _i(a, 1, 1, (()=>{
                    a = null
                }
                )),
                hi()),
                e[4] ? r ? (r.p(e, l),
                16 & l[0] && fi(r, 1)) : (r = cf(e),
                r.c(),
                fi(r, 1),
                r.m(n, o)) : r && (mi(),
                _i(r, 1, 1, (()=>{
                    r = null
                }
                )),
                hi());
                const c = {};
                32 & l[0] && (c.tooltip = e[5]),
                7 & l[0] | 2 & l[1] && (c.$$scope = {
                    dirty: l,
                    ctx: e
                }),
                i.$set(c),
                (!s || 16 & l[0]) && No(n, "has-formality", e[4])
            },
            i(e) {
                s || (fi(a),
                fi(r),
                fi(i.$$.fragment, e),
                s = !0)
            },
            o(e) {
                _i(a),
                _i(r),
                _i(i.$$.fragment, e),
                s = !1
            },
            d(e) {
                a && a.d(e),
                e && fo(t),
                e && fo(n),
                r && r.d(),
                Ci(i)
            }
        }
    }
    function pf(e, n, o) {
        let i, s, a;
        Xn(e, us, (e=>o(6, a = e)));
        let r, l, c, d, {controller: u} = n, {editable: p} = n, g = !1, m = !1, h = !1, f = !1, _ = "", w = "", v = !1;
        const $ = ()=>{
            o(1, g = !0)
        }
          , b = ()=>{
            o(1, g = !1)
        }
        ;
        async function y(e, t, n) {
            if ("dlTriggerTranslationShortcut" === e.action) {
                if (document.activeElement !== p)
                    return;
                try {
                    En({
                        action: "dlTrackUseOfShortcut",
                        payload: {
                            shortcutType: se,
                            location: z
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                await C(),
                n()
            }
        }
        const C = async()=>{
            if (f)
                return;
            const e = ()=>{
                const e = new ClipboardEvent("copy",{
                    bubbles: !0,
                    clipboardData: new DataTransfer
                });
                m = !0,
                p.dispatchEvent(e)
            }
              , t = window.getSelection()
              , n = t && t.baseNode && "#text" == t.baseNode.nodeName && "Range" == t.type && p.contains(t.baseNode);
            0 !== p.innerText.trim().length && (n ? e() : (await ip(p),
            setTimeout(e, 300)))
        }
          , x = async e=>{
            if (!m)
                return;
            m = !1,
            o(2, f = !0),
            o(0, v = !1);
            const t = u.getTicketLanguageInformation()?.language
              , n = e.clipboardData.getData("text/html")
              , s = u.getInputWorkingArea();
            s.innerHTML = n;
            const [r,l] = await Za({
                element: s,
                targetLang: t,
                ...i && ["formal", "informal"].includes(a.zendeskFormality) && {
                    formality: a.zendeskFormality
                }
            });
            l ? (console.error({
                e: l
            }),
            o(3, c = l),
            sr({
                eventType: Be,
                controller: u,
                error: l
            })) : r && L(r, n),
            o(2, f = !1)
        }
          , T = ()=>{
            if (!h)
                return;
            h = !1;
            window.getSelection().collapse(null)
        }
          , L = (e,t)=>{
            const n = new DataTransfer;
            n.setData("text/html", e);
            const o = new ClipboardEvent("paste",{
                bubbles: !0,
                clipboardData: n
            });
            h = !0,
            p.dispatchEvent(o),
            sr({
                eventType: Fe,
                controller: u,
                sourceTextLength: t.length,
                targetTextLength: e.length
            })
        }
          , E = ()=>{
            const e = p.innerText;
            e !== w && (w = e,
            d && (clearTimeout(d),
            d = void 0),
            d = setTimeout(k, 400))
        }
          , k = async()=>{
            const e = u.getTicketLanguageInformation();
            if (!e || !e.isSupported || !e.isDetected)
                return;
            const t = p.innerText;
            if (t.trim()) {
                console.log("There has content: ", `${t.trim()}`);
                let n = await Et(t)
                  , i = e.language;
                n = St(n),
                i = St(i);
                let s = !1;
                n && i && n !== i && (s = !0),
                v !== s && o(0, v = s)
            } else
                console.log("There is no content"),
                o(0, v = !1),
                S()
        }
          , S = ()=>{
            r && r.resetTooltip()
        }
        ;
        return Wo((()=>{
            chrome.runtime.onMessage.addListener(y),
            En({
                action: "dlCheckCommandShortcuts"
            }).then((e=>{
                o(14, _ = e ? e.filter((e=>e.name == se))[0].shortcut : "")
            }
            )),
            p.addEventListener("focus", $),
            p.addEventListener("blur", b),
            p.addEventListener("copy", x),
            p.addEventListener("paste", T),
            p.addEventListener("keydown", E),
            r = xn(u),
            document.activeElement === p && $()
        }
        )),
        Go((()=>{
            chrome.runtime.onMessage.removeListener(y),
            p && (p.removeEventListener("focus", $),
            p.removeEventListener("blur", b),
            p.removeEventListener("copy", x),
            p.removeEventListener("paste", T),
            p.removeEventListener("keydown", E),
            r && (r.cleanupDOM(),
            r.remove()))
        }
        )),
        e.$$set = e=>{
            "controller"in e && o(10, u = e.controller),
            "editable"in e && o(11, p = e.editable)
        }
        ,
        e.$$.update = ()=>{
            32768 & e.$$.dirty[0] && o(4, i = (e=>{
                const n = t.find((t=>t.langCode === e));
                return n && n.supportsFormality
            }
            )(l)),
            49152 & e.$$.dirty[0] && o(5, s = t.find((e=>e.langCode === l)) ? chrome.i18n.getMessage("ui_zendesk_input_tooltip") + (_ ? ` (${_})` : "") : ""),
            1 & e.$$.dirty[0] && r && r.setIsLanguageMismatching(v)
        }
        ,
        [v, g, f, c, i, s, a, C, ()=>{
            o(3, c = void 0)
        }
        , e=>{
            const t = e.detail.selectedOption.value;
            oo(us, a.zendeskFormality = t, a)
        }
        , u, p, e=>{
            o(15, l = e)
        }
        , ()=>{
            const e = window.getSelection();
            return e && e.baseNode && "#text" == e.baseNode.nodeName && "Range" == e.type && p.contains(e.baseNode)
        }
        , _, l]
    }
    class gf extends Ti {
        constructor(e) {
            super(),
            xi(this, e, pf, uf, Zn, {
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
    class mf extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this),
            this.getInputHasSelection = this.getInputHasSelection.bind(this),
            this.updateTargetLanguage = this.updateTargetLanguage.bind(this)
        }
        createDOM({controller: e, editable: t}) {
            this.mainComponent = new gf({
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
            this.mainComponent?.updateTargetLanguage(e)
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function hf(e) {
        let t;
        return {
            c() {
                t = wo("div"),
                Lo(t, "class", "dl-gmail")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    window.customElements.define("deepl-zendesk-input-icon", mf);
    function ff(e, t, n) {
        let o, i, s, a, r;
        Xn(e, us, (e=>n(5, o = e)));
        let l = !1;
        const c = ()=>{
            p(),
            o.isGmailEnabled ? d() : u()
        }
          , d = ()=>{
            g(),
            m()
        }
          , u = ()=>{
            Cs([ws, ms, _s])
        }
          , p = ()=>{
            const e = "data-has-dl-icon"
              , t = document.querySelector("header");
            if (!t || "banner" !== t.getAttribute("role") || t.hasAttribute(e))
                return;
            const n = t.querySelector("[role='search']");
            if (!n)
                return;
            const o = n.parentNode;
            if (!o)
                return;
            const i = document.createElement(hs);
            o.insertAdjacentElement("afterend", i),
            i.createDOM(),
            t.setAttribute(e, !0)
        }
          , g = ()=>{
            if (xs()) {
                const e = Ts();
                if (!e)
                    return;
                e.forEach((e=>{
                    const t = ks(e);
                    if (!t || Ls(e))
                        return;
                    const n = t.parentNode;
                    if (!n)
                        return;
                    const o = document.createElement(ms);
                    n.after(o),
                    o.createDOM({
                        container: e
                    })
                }
                ))
            }
        }
          , m = ()=>{
            const e = document.activeElement;
            if (!e)
                return;
            const t = e.hasAttribute("contenteditable")
              , n = Es(e)
              , o = e.hasAttribute(vs)
              , i = e !== a
              , s = !r && (!t || n || i)
              , c = t && (!o || i) && !n;
            !s || c || l ? (l = !1,
            s && f(),
            c && (f(),
            h(e))) : l = !0
        }
          , h = e=>{
            const t = document.createElement(_s);
            s = t,
            a = e,
            e.setAttribute(vs, "true"),
            document.body.appendChild(t),
            t.createDOM({
                container: e,
                updateLockStatus: _
            })
        }
          , f = ()=>{
            s && s.cleanupDOM();
            const e = Array.from(document.querySelectorAll(_s));
            for (const t of e)
                t.remove();
            document.querySelectorAll('[contenteditable][deepl-writing-ui-added="true"]').forEach((e=>e.removeAttribute(vs))),
            s = null
        }
          , _ = e=>{
            r = e
        }
          , w = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                e.payload.isActive ? v() : $()
        }
          , v = ()=>{
            i && clearInterval(i),
            i = setInterval(c, 200)
        }
          , $ = ()=>{
            clearInterval(i)
        }
        ;
        return Wo((()=>{
            v(),
            chrome.runtime.onMessage.addListener(w)
        }
        )),
        Go((()=>{
            u(),
            i && $(),
            chrome.runtime.onMessage.removeListener(w)
        }
        )),
        []
    }
    class _f extends Ti {
        constructor(e) {
            super(),
            xi(this, e, ff, hf, Zn, {})
        }
    }
    class wf extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM() {
            this.mainComponent = new _f({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
        showOnboarding() {
            this.mainComponent.showOnboarding()
        }
    }
    function vf(e, t, n) {
        const o = e.slice();
        return o[16] = t[n],
        o[18] = n,
        o
    }
    function $f(e) {
        let t, n, o = !e[0] && yf(e), i = e[3], s = [];
        for (let t = 0; t < i.length; t += 1)
            s[t] = Tf(vf(e, i, t));
        return {
            c() {
                t = wo("div"),
                o && o.c(),
                n = bo();
                for (let e = 0; e < s.length; e += 1)
                    s[e].c();
                Lo(t, "class", "dl-zendesk-translation-placeholder svelte-qb7u0e"),
                No(t, "loading-skeleton", e[0])
            },
            m(e, i) {
                ho(e, t, i),
                o && o.m(t, null),
                po(t, n);
                for (let e = 0; e < s.length; e += 1)
                    s[e].m(t, null)
            },
            p(e, a) {
                if (e[0] ? o && (o.d(1),
                o = null) : o ? o.p(e, a) : (o = yf(e),
                o.c(),
                o.m(t, n)),
                8 & a) {
                    let n;
                    for (i = e[3],
                    n = 0; n < i.length; n += 1) {
                        const o = vf(e, i, n);
                        s[n] ? s[n].p(o, a) : (s[n] = Tf(o),
                        s[n].c(),
                        s[n].m(t, null))
                    }
                    for (; n < s.length; n += 1)
                        s[n].d(1);
                    s.length = i.length
                }
                1 & a && No(t, "loading-skeleton", e[0])
            },
            d(e) {
                e && fo(t),
                o && o.d(),
                _o(s, e)
            }
        }
    }
    function bf(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = wo("div"),
                n = wo("button"),
                o = bo(),
                i = $o(e[2]),
                Lo(n, "class", "close-button svelte-qb7u0e"),
                Lo(t, "class", "dl-zendesk-translation-placeholder has-error svelte-qb7u0e")
            },
            m(r, l) {
                ho(r, t, l),
                po(t, n),
                po(t, o),
                po(t, i),
                s || (a = Co(n, "click", e[6]),
                s = !0)
            },
            p(e, t) {
                4 & t && Eo(i, e[2])
            },
            d(e) {
                e && fo(t),
                s = !1,
                a()
            }
        }
    }
    function yf(e) {
        let t, n, o;
        return {
            c() {
                t = wo("button"),
                Lo(t, "class", "close-button svelte-qb7u0e")
            },
            m(i, s) {
                ho(i, t, s),
                n || (o = Co(t, "click", e[5]),
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Cf(e) {
        let t, n, o = e[16] + "";
        return {
            c() {
                t = wo("span"),
                n = $o(o),
                Lo(t, "class", "svelte-qb7u0e")
            },
            m(e, o) {
                ho(e, t, o),
                po(t, n)
            },
            p(e, t) {
                8 & t && o !== (o = e[16] + "") && Eo(n, o)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function xf(e) {
        let t;
        return {
            c() {
                t = wo("br")
            },
            m(e, n) {
                ho(e, t, n)
            },
            d(e) {
                e && fo(t)
            }
        }
    }
    function Tf(e) {
        let t, n, o = e[16] && Cf(e), i = e[18] < e[3].length - 1 && xf();
        return {
            c() {
                o && o.c(),
                t = bo(),
                i && i.c(),
                n = yo()
            },
            m(e, s) {
                o && o.m(e, s),
                ho(e, t, s),
                i && i.m(e, s),
                ho(e, n, s)
            },
            p(e, s) {
                e[16] ? o ? o.p(e, s) : (o = Cf(e),
                o.c(),
                o.m(t.parentNode, t)) : o && (o.d(1),
                o = null),
                e[18] < e[3].length - 1 ? i || (i = xf(),
                i.c(),
                i.m(n.parentNode, n)) : i && (i.d(1),
                i = null)
            },
            d(e) {
                o && o.d(e),
                e && fo(t),
                i && i.d(e),
                e && fo(n)
            }
        }
    }
    function Lf(e) {
        let t, n, o, i, s, a;
        function r(e, t) {
            return e[2] ? bf : e[1] || e[0] ? $f : void 0
        }
        let l = r(e)
          , c = l && l(e);
        return {
            c() {
                t = wo("div"),
                n = wo("button"),
                n.textContent = `${chrome.i18n.getMessage("ui_zendesk_message_translate")}`,
                o = bo(),
                c && c.c(),
                i = yo(),
                Lo(n, "class", "dl-zendesk-translate-this-ticket svelte-qb7u0e")
            },
            m(r, l) {
                ho(r, t, l),
                po(t, n),
                ho(r, o, l),
                c && c.m(r, l),
                ho(r, i, l),
                s || (a = Co(n, "click", e[4]),
                s = !0)
            },
            p(e, [t]) {
                l === (l = r(e)) && c ? c.p(e, t) : (c && c.d(1),
                c = l && l(e),
                c && (c.c(),
                c.m(i.parentNode, i)))
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                e && fo(o),
                c && c.d(e),
                e && fo(i),
                s = !1,
                a()
            }
        }
    }
    function Ef(e, t, n) {
        let o, i;
        Xn(e, us, (e=>n(14, i = e)));
        let s, {controller: a} = t, {message: r} = t, l = !1, c = !1, d = !1, u = "", p = !1;
        const h = async({trigger: e})=>{
            n(1, d = !1),
            n(0, l = !0),
            n(2, s = void 0);
            let t = un(r).innerText;
            n(11, u = t);
            const [o,c] = await Ka({
                targetLang: i.selectedTargetLanguage,
                sourceLang: a.getTicketLanguageInformation()?.language,
                text: t,
                trigger: e
            });
            if (c)
                n(11, u = ""),
                n(1, d = !1),
                n(2, s = c),
                p = !0,
                sr({
                    eventType: Be,
                    controller: a,
                    error: c
                });
            else if (o) {
                n(11, u = o),
                n(1, d = !0),
                sr({
                    eventType: He,
                    controller: a,
                    sourceTextLength: t.length,
                    targetTextLength: u.length
                })
            } else
                n(1, d = !0);
            n(0, l = !1)
        }
        ;
        return e.$$set = e=>{
            "controller"in e && n(7, a = e.controller),
            "message"in e && n(8, r = e.message)
        }
        ,
        e.$$.update = ()=>{
            2048 & e.$$.dirty && n(3, o = u.split("\n"))
        }
        ,
        [l, d, s, o, ()=>{
            l || h({
                trigger: m
            })
        }
        , ()=>{
            n(1, d = !1),
            n(0, l = !1),
            n(11, u = ""),
            a.getIsAutoTranslatedEnabled() && (c = !0)
        }
        , ()=>{
            n(2, s = void 0)
        }
        , a, r, ()=>{
            !a.getIsAutoTranslatedEnabled() || d || l || c || p || h({
                trigger: g
            })
        }
        , ()=>{
            !d || l || c || h({
                trigger: m
            })
        }
        , u]
    }
    window.customElements.define(fs, wf);
    class kf extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Ef, Lf, Zn, {
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
    class Sf extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this),
            this.processRefreshUI = this.processRefreshUI.bind(this),
            this.triggerTranslateAgain = this.triggerTranslateAgain.bind(this)
        }
        createDOM({controller: e, message: t}) {
            this.mainComponent = new kf({
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
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Mf(e, t, n) {
        const o = e.slice();
        return o[3] = t[n],
        o
    }
    function If(e) {
        let t, n, o = e[3].text + "";
        return {
            c() {
                t = new Ro(!1),
                n = yo(),
                t.a = n
            },
            m(e, i) {
                t.m(o, e, i),
                ho(e, n, i)
            },
            p: Un,
            d(e) {
                e && fo(n),
                e && t.d()
            }
        }
    }
    function Df(e) {
        let t, n, o, i = e[3].text + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "class", "dl-link svelte-pwdshq")
            },
            m(s, a) {
                ho(s, t, a),
                t.innerHTML = i,
                n || (o = Co(t, "click", e[1]),
                n = !0)
            },
            p: Un,
            d(e) {
                e && fo(t),
                n = !1,
                o()
            }
        }
    }
    function Of(e) {
        let t;
        let n = function(e, t) {
            return "loginLink" === e[3].block ? Df : If
        }(e)
          , o = n(e);
        return {
            c() {
                o.c(),
                t = yo()
            },
            m(e, n) {
                o.m(e, n),
                ho(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e),
                e && fo(t)
            }
        }
    }
    function Nf(e) {
        let t, n = Hr(chrome.i18n.getMessage("ui_zendesk_onboarding_free_trial_notice"), ["loginLink"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = Of(Mf(e, n, t));
        return {
            c() {
                t = wo("span");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                Lo(t, "slot", "warning")
            },
            m(e, n) {
                ho(e, t, n);
                for (let e = 0; e < o.length; e += 1)
                    o[e].m(t, null)
            },
            p(e, i) {
                if (2 & i) {
                    let s;
                    for (n = Hr(chrome.i18n.getMessage("ui_zendesk_onboarding_free_trial_notice"), ["loginLink"]),
                    s = 0; s < n.length; s += 1) {
                        const a = Mf(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = Of(a),
                        o[s].c(),
                        o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                e && fo(t),
                _o(o, e)
            }
        }
    }
    function Af(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_title") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "header")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Rf(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_usp_1") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "usp1")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Pf(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_usp_2") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "usp2")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function zf(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_onboarding_usp_3") + "";
        return {
            c() {
                t = wo("span"),
                Lo(t, "slot", "usp3")
            },
            m(e, o) {
                ho(e, t, o),
                t.innerHTML = n
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Hf(e) {
        let t;
        return {
            c() {
                t = wo("div"),
                Lo(t, "slot", "graphics"),
                Lo(t, "class", "onboarding-graphics svelte-pwdshq")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function Ff(e) {
        let t, n;
        return t = new qg({
            props: {
                onClose: e[0],
                hasWarning: !0,
                $$slots: {
                    graphics: [Hf],
                    usp3: [zf],
                    usp2: [Pf],
                    usp1: [Rf],
                    header: [Af],
                    warning: [Nf]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.onClose = e[0]),
                64 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function Bf(e, t, n) {
        let {onClose: o} = t;
        return Wo((()=>{
            En({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: Me.zendesk
                }
            })
        }
        )),
        e.$$set = e=>{
            "onClose"in e && n(0, o = e.onClose)
        }
        ,
        [o, function() {
            En({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Zi
                }
            })
        }
        ]
    }
    window.customElements.define("deepl-zendesk-message-controller", Sf);
    class Uf extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Bf, Ff, Zn, {
                onClose: 0
            })
        }
    }
    function qf(e) {
        let t, n;
        return t = new Uf({
            props: {
                onClose: e[3]
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.onClose = e[3]),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function jf(e) {
        let t, n, o, i, s = e[0] && qf(e);
        return {
            c() {
                t = wo("div"),
                n = bo(),
                s && s.c(),
                o = yo(),
                Lo(t, "class", "dl-zendesk-icon svelte-1tytp0d")
            },
            m(e, a) {
                ho(e, t, a),
                ho(e, n, a),
                s && s.m(e, a),
                ho(e, o, a),
                i = !0
            },
            p(e, [t]) {
                e[0] ? s ? (s.p(e, t),
                1 & t && fi(s, 1)) : (s = qf(e),
                s.c(),
                fi(s, 1),
                s.m(o.parentNode, o)) : s && (mi(),
                _i(s, 1, 1, (()=>{
                    s = null
                }
                )),
                hi())
            },
            i(e) {
                i || (fi(s),
                i = !0)
            },
            o(e) {
                _i(s),
                i = !1
            },
            d(e) {
                e && fo(t),
                e && fo(n),
                s && s.d(e),
                e && fo(o)
            }
        }
    }
    function Wf(e, t, n) {
        let o, i;
        Xn(e, us, (e=>n(2, o = e)));
        let s = !1;
        const a = ()=>{
            const e = window.location.pathname
              , t = Kt(e);
            if (t) {
                const e = Xt();
                if (!e)
                    return;
                const n = Qt(e) || Yt(e, t);
                n && n.processRefreshUI()
            }
        }
          , r = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                e.payload.isActive ? l() : c()
        }
          , l = ()=>{
            i && clearInterval(i),
            i = setInterval(a, 800)
        }
          , c = ()=>{
            clearInterval(i)
        }
        ;
        Wo((()=>{
            l(),
            chrome.runtime.onMessage.addListener(r)
        }
        )),
        Go((()=>{
            i && c(),
            chrome.runtime.onMessage.removeListener(r),
            en()
        }
        ));
        return e.$$.update = ()=>{
            4 & e.$$.dirty && (o.isZendeskEnabled || tn())
        }
        ,
        [s, ()=>{
            n(0, s = !0)
        }
        , o, ()=>n(0, s = !1)]
    }
    class Gf extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Wf, jf, Zn, {
                showOnboarding: 1
            })
        }
        get showOnboarding() {
            return this.$$.ctx[1]
        }
    }
    class Vf extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this),
            this.showOnboarding = this.showOnboarding.bind(this)
        }
        createDOM() {
            this.mainComponent = new Gf({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this
                }
            })
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
        showOnboarding() {
            this.mainComponent.showOnboarding()
        }
    }
    function Zf(e) {
        let t, n, o, i, s, a, r, l, c, d = chrome.i18n.getMessage("ui_zendesk_input_language_mismatch") + "";
        return {
            c() {
                t = wo("div"),
                n = wo("button"),
                o = bo(),
                i = $o(d),
                Lo(n, "class", "dismiss-tooltip svelte-1h7bxtg"),
                Lo(t, "class", "dl-zendesk-submit-button-tooltip svelte-1h7bxtg"),
                So(t, "max-width", (e[1].width || 0) + "px"),
                So(t, "bottom", e[0].height + 12 + "px")
            },
            m(s, a) {
                ho(s, t, a),
                po(t, n),
                po(t, o),
                po(t, i),
                r = !0,
                l || (c = Co(n, "click", e[4]),
                l = !0)
            },
            p(e, n) {
                (!r || 2 & n) && So(t, "max-width", (e[1].width || 0) + "px"),
                (!r || 1 & n) && So(t, "bottom", e[0].height + 12 + "px")
            },
            i(e) {
                r || (ii((()=>{
                    a && a.end(1),
                    s = vi(t, cr, {
                        y: -5,
                        duration: 500
                    }),
                    s.start()
                }
                )),
                r = !0)
            },
            o(e) {
                s && s.invalidate(),
                a = $i(t, cr, {
                    y: -5,
                    duration: 500
                }),
                r = !1
            },
            d(e) {
                e && fo(t),
                e && a && a.end(),
                l = !1,
                c()
            }
        }
    }
    function Kf(e) {
        let t, n, o = e[2] && !e[3] && Zf(e);
        return {
            c() {
                o && o.c(),
                t = yo()
            },
            m(e, i) {
                o && o.m(e, i),
                ho(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[2] && !e[3] ? o ? (o.p(e, n),
                12 & n && fi(o, 1)) : (o = Zf(e),
                o.c(),
                fi(o, 1),
                o.m(t.parentNode, t)) : o && (mi(),
                _i(o, 1, 1, (()=>{
                    o = null
                }
                )),
                hi())
            },
            i(e) {
                n || (fi(o),
                n = !0)
            },
            o(e) {
                _i(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && fo(t)
            }
        }
    }
    function Xf(e, t, n) {
        let {coords: o} = t
          , {containerCoords: i} = t
          , s = !1
          , a = !1;
        return e.$$set = e=>{
            "coords"in e && n(0, o = e.coords),
            "containerCoords"in e && n(1, i = e.containerCoords)
        }
        ,
        [o, i, s, a, ()=>{
            n(3, a = !0)
        }
        , e=>{
            n(2, s = e)
        }
        , ()=>{
            console.log("Resetting tooltip..."),
            n(2, s = !1),
            n(3, a = !1)
        }
        ]
    }
    window.customElements.define("deepl-zendesk-controller", Vf);
    class Qf extends Ti {
        constructor(e) {
            super(),
            xi(this, e, Xf, Kf, Zn, {
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
    class Yf extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.setIsLanguageMismatching = this.setIsLanguageMismatching.bind(this),
            this.resetTooltip = this.resetTooltip.bind(this),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({coords: e, containerCoords: t}) {
            this.mainComponent = new Qf({
                target: this.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    coords: e,
                    containerCoords: t
                }
            })
        }
        setIsLanguageMismatching(e) {
            this.mainComponent?.setIsLanguageMismatching(e)
        }
        resetTooltip() {
            this.mainComponent?.resetTooltip()
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Jf(e) {
        let t, n, o, i, s;
        return n = new Fl({
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
        }),
        n.$on("valueselected", e[4]),
        {
            c() {
                t = wo("div"),
                bi(n.$$.fragment)
            },
            m(a, r) {
                ho(a, t, r),
                yi(n, t, null),
                o = !0,
                i || (s = Co(t, "mousedown", To(xo(e[7]))),
                i = !0)
            },
            p(e, [t]) {
                const o = {};
                8 & t && (o.items = e[3]),
                4 & t && (o.selectedOption = e[2]),
                2 & t && (o.isFullWidth = e[1]),
                1 & t && (o.extraText = e[0] ? chrome.i18n.getMessage("ui_zendesk_language_detected") : ""),
                n.$set(o)
            },
            i(e) {
                o || (fi(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                _i(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && fo(t),
                Ci(n),
                i = !1,
                s()
            }
        }
    }
    function e_(e, t, n) {
        let o, i;
        const s = Vo()
          , a = kt();
        let {value: r} = t
          , {isDetected: l=!1} = t
          , {isSupported: c=!0} = t
          , {isFullWidth: d=!1} = t;
        const u = {
            label: chrome.i18n.getMessage("writing_config_tab_language_selector_empty"),
            selectedOptionLabel: chrome.i18n.getMessage("writing_config_tab_language_selector_empty"),
            value: "NOT_SUPPORTED"
        };
        return e.$$set = e=>{
            "value"in e && n(5, r = e.value),
            "isDetected"in e && n(0, l = e.isDetected),
            "isSupported"in e && n(6, c = e.isSupported),
            "isFullWidth"in e && n(1, d = e.isFullWidth)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && n(3, o = [...c ? [] : [u], ...a]),
            96 & e.$$.dirty && n(2, i = c ? r ? a.find((e=>e.value === r)) : void 0 : u)
        }
        ,
        [l, d, i, o, function(e) {
            e.detail.selectedOption.value !== r && s("selection", e.detail)
        }
        , r, c, function(t) {
            Xo.call(this, e, t)
        }
        ]
    }
    window.customElements.define("deepl-zendesk-submit-button-tooltip", Yf);
    class t_ extends Ti {
        constructor(e) {
            super(),
            xi(this, e, e_, Jf, Zn, {
                value: 5,
                isDetected: 0,
                isSupported: 6,
                isFullWidth: 1
            })
        }
    }
    function n_(e) {
        let t, n, o, i;
        function s(e, t) {
            return e[2] ? s_ : i_
        }
        let a = s(e)
          , r = a(e);
        return {
            c() {
                t = wo("button"),
                r.c(),
                Lo(t, "class", "translate-all svelte-1uw1ok2"),
                t.disabled = n = !e[1].isSupported
            },
            m(n, s) {
                ho(n, t, s),
                r.m(t, null),
                o || (i = Co(t, "click", e[6]),
                o = !0)
            },
            p(e, o) {
                a === (a = s(e)) && r ? r.p(e, o) : (r.d(1),
                r = a(e),
                r && (r.c(),
                r.m(t, null))),
                2 & o && n !== (n = !e[1].isSupported) && (t.disabled = n)
            },
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                r.d(),
                o = !1,
                i()
            }
        }
    }
    function o_(e) {
        let t, n;
        return t = new ud({
            props: {
                tooltip: chrome.i18n.getMessage(e[2] ? "ui_zendesk_autotranslate_stop" : "ui_zendesk_autotranslate_start"),
                $$slots: {
                    default: [a_]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                bi(t.$$.fragment)
            },
            m(e, o) {
                yi(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.tooltip = chrome.i18n.getMessage(e[2] ? "ui_zendesk_autotranslate_stop" : "ui_zendesk_autotranslate_start")),
                32770 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (fi(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                _i(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ci(t, e)
            }
        }
    }
    function i_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_autotranslate_start") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function s_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_autotranslate_stop") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function a_(e) {
        let t, n, o, i;
        return {
            c() {
                t = wo("button"),
                Lo(t, "class", "translate-all btn-icon svelte-1uw1ok2"),
                t.disabled = n = !e[1].isSupported
            },
            m(n, s) {
                ho(n, t, s),
                o || (i = Co(t, "click", e[6]),
                o = !0)
            },
            p(e, o) {
                2 & o && n !== (n = !e[1].isSupported) && (t.disabled = n)
            },
            d(e) {
                e && fo(t),
                o = !1,
                i()
            }
        }
    }
    function r_(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m, h, f, _;
        c = new t_({
            props: {
                value: e[1].language,
                isDetected: e[1].isDetected,
                isSupported: e[1].isSupported,
                isFullWidth: "lg" !== e[4]
            }
        }),
        c.$on("selection", e[5]);
        const w = [o_, n_]
          , v = [];
        function $(e, t) {
            return "sm" === e[4] ? 0 : 1
        }
        return p = $(e),
        g = v[p] = w[p](e),
        {
            c() {
                t = wo("div"),
                n = wo("div"),
                o = wo("button"),
                i = bo(),
                s = wo("div"),
                a = wo("div"),
                a.textContent = `${chrome.i18n.getMessage("ui_zendesk_senders_language")}`,
                r = bo(),
                l = wo("div"),
                bi(c.$$.fragment),
                d = bo(),
                u = wo("div"),
                g.c(),
                Lo(o, "class", "senders-language-toggle svelte-1uw1ok2"),
                Lo(a, "class", "label svelte-1uw1ok2"),
                Lo(l, "class", "dropdown-container svelte-1uw1ok2"),
                Lo(s, "class", "container svelte-1uw1ok2"),
                No(s, "show", e[3]),
                Lo(n, "class", "senders-language svelte-1uw1ok2"),
                Lo(u, "class", "translate-all-container"),
                Lo(t, "class", "dl-zendesk-toolbar svelte-1uw1ok2"),
                ii((()=>e[12].call(t))),
                No(t, "toolbar-sm", "sm" === e[4]),
                No(t, "toolbar-md", "md" === e[4]),
                No(t, "toolbar-lg", "lg" === e[4])
            },
            m(g, w) {
                ho(g, t, w),
                po(t, n),
                po(n, o),
                po(n, i),
                po(n, s),
                po(s, a),
                po(s, r),
                po(s, l),
                yi(c, l, null),
                po(t, d),
                po(t, u),
                v[p].m(u, null),
                m = Oo(t, e[12].bind(t)),
                h = !0,
                f || (_ = [Co(o, "click", e[7]), io(In.call(null, n, {
                    isShadow: !0
                })), Co(n, "click_outside", e[11])],
                f = !0)
            },
            p(e, [n]) {
                const o = {};
                2 & n && (o.value = e[1].language),
                2 & n && (o.isDetected = e[1].isDetected),
                2 & n && (o.isSupported = e[1].isSupported),
                16 & n && (o.isFullWidth = "lg" !== e[4]),
                c.$set(o),
                (!h || 8 & n) && No(s, "show", e[3]);
                let i = p;
                p = $(e),
                p === i ? v[p].p(e, n) : (mi(),
                _i(v[i], 1, 1, (()=>{
                    v[i] = null
                }
                )),
                hi(),
                g = v[p],
                g ? g.p(e, n) : (g = v[p] = w[p](e),
                g.c()),
                fi(g, 1),
                g.m(u, null)),
                (!h || 16 & n) && No(t, "toolbar-sm", "sm" === e[4]),
                (!h || 16 & n) && No(t, "toolbar-md", "md" === e[4]),
                (!h || 16 & n) && No(t, "toolbar-lg", "lg" === e[4])
            },
            i(e) {
                h || (fi(c.$$.fragment, e),
                fi(g),
                h = !0)
            },
            o(e) {
                _i(c.$$.fragment, e),
                _i(g),
                h = !1
            },
            d(e) {
                e && fo(t),
                Ci(c),
                v[p].d(),
                m(),
                f = !1,
                Gn(_)
            }
        }
    }
    function l_(e, t, n) {
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
        let {controller: s} = t;
        const a = {
            language: "",
            isDetected: !1,
            isSupported: !1
        };
        let r, l = !1, c = !1;
        return e.$$set = e=>{
            "controller"in e && n(8, s = e.controller)
        }
        ,
        e.$$.update = ()=>{
            1 & e.$$.dirty && n(4, o = (e=>{
                const t = i.find((e=>e.isDefault));
                for (const t of i)
                    if (!(t.min && t.min > e || t.max && t.max < e))
                        return t.key;
                return t.key
            }
            )(r))
        }
        ,
        [r, a, l, c, o, e=>{
            const t = e.detail.selectedOption.value;
            s.setLanguageInformation({
                language: t,
                isDetected: !1,
                isSupported: !0
            }),
            sr({
                eventType: Re,
                controller: s,
                metaDataOverride: {
                    ticketLanguage: t,
                    isTicketLanguageAutodetected: !1
                }
            })
        }
        , ()=>{
            const e = !l;
            s.setIsAutoTranslateEnabled(e),
            sr({
                eventType: e ? Pe : ze,
                controller: s,
                metaDataOverride: {
                    isAutoTranslateEnabled: e
                }
            })
        }
        , ()=>{
            n(3, c = !c)
        }
        , s, ({language: e, isDetected: t, isSupported: o})=>{
            n(1, a.language = e, a),
            n(1, a.isDetected = t, a),
            n(1, a.isSupported = o, a)
        }
        , e=>{
            n(2, l = e)
        }
        , ()=>n(3, c = !1), function() {
            r = this.clientWidth,
            n(0, r)
        }
        ]
    }
    class c_ extends Ti {
        constructor(e) {
            super(),
            xi(this, e, l_, r_, Zn, {
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
    class d_ extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this),
            this.updateLanguageInformation = this.updateLanguageInformation.bind(this),
            this.updateAutoTranslateStatus = this.updateAutoTranslateStatus.bind(this)
        }
        createDOM({controller: e}) {
            this.mainComponent = new c_({
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
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function u_(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                n = bo(),
                o = wo("div"),
                Lo(t, "class", "dl-zendesk-icon svelte-i3vxpb"),
                Lo(o, "class", "dl-zendesk-working-area svelte-i3vxpb")
            },
            m(e, i) {
                ho(e, t, i),
                ho(e, n, i),
                ho(e, o, i)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                e && fo(n),
                e && fo(o)
            }
        }
    }
    function p_(e, n, o) {
        let i;
        Xn(e, us, (e=>o(17, i = e)));
        let {pane: s} = n
          , {ticketId: a} = n
          , {controller: r} = n;
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
        }
          , p = (e,t)=>{
            u[e] = t
        }
          , g = ()=>{
            for (const e of Object.keys(u))
                if (u[e]) {
                    u[e]() && (u[e] = void 0)
                }
        }
          , m = async()=>{
            if (!c)
                return;
            let e;
            switch (c) {
            case Ue:
                e = await pn(s);
                break;
            case qe:
                e = await gn(s)
            }
            e && (e = St(e),
            o(13, l.hasAttemptedLanguageDetection = !0, l),
            o(13, l.language = e, l),
            o(13, l.isDetected = !0, l),
            o(13, l.isSupported = !!t.find((t=>t.langCode === e)), l),
            sr({
                eventType: Ae,
                controller: r
            }),
            Tn(s))
        }
        ;
        return Wo((()=>{
            sr({
                eventType: Ne,
                controller: r
            }),
            p("ticketTypeDetection", (()=>{
                const e = rn(s);
                return !!e && (c = e,
                m(),
                !0)
            }
            ))
        }
        )),
        e.$$set = e=>{
            "pane"in e && o(0, s = e.pane),
            "ticketId"in e && o(1, a = e.ticketId),
            "controller"in e && o(2, r = e.controller)
        }
        ,
        e.$$.update = ()=>{
            8193 & e.$$.dirty && p("toolbarLanguageUpdate", (()=>mn(s, {
                language: l.language,
                isDetected: l.isDetected,
                isSupported: l.isSupported
            }))),
            8193 & e.$$.dirty && (p("inputIconLanguageUpdate", (()=>_n(s, l.language))),
            p("topIconLanguageUpdate", (()=>fn(s)))),
            16385 & e.$$.dirty && p("toolbarAutoTranslateStatus", (()=>{
                hn(s, {
                    isEnabled: d
                })
            }
            ))
        }
        ,
        [s, a, r, ()=>s, ()=>a, ()=>l, ()=>d, e=>{
            o(13, l.language = e.language, l),
            o(13, l.isDetected = e.isDetected, l),
            o(13, l.isSupported = e.isSupported, l)
        }
        , e=>{
            o(14, d = e)
        }
        , ()=>c, e=>{
            c = e
        }
        , async()=>{
            if (l.hasAttemptedLanguageDetection || await m(),
            (l.language || i.isZendeskEnabled) && Jt(r, i.isZendeskEnabled),
            l.isSupported && i.isZendeskEnabled) {
                wn(r);
                for (const e of ln(s)) {
                    const t = vn(e);
                    t && t.processRefreshUI()
                }
            }
            yn(s),
            g()
        }
        , ()=>{
            Cn(s)
        }
        , l, d]
    }
    window.customElements.define("deepl-zendesk-toolbar", d_);
    class g_ extends Ti {
        constructor(e) {
            super(),
            xi(this, e, p_, u_, Zn, {
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
    class m_ extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this),
            this.getTicketId = this.getTicketId.bind(this),
            this.getPane = this.getPane.bind(this),
            this.getTicketLanguageInformation = this.getTicketLanguageInformation.bind(this),
            this.getIsAutoTranslatedEnabled = this.getIsAutoTranslatedEnabled.bind(this),
            this.setIsAutoTranslateEnabled = this.setIsAutoTranslateEnabled.bind(this),
            this.getInputWorkingArea = this.getInputWorkingArea.bind(this),
            this.setLanguageInformation = this.setLanguageInformation.bind(this),
            this.processRefreshUI = this.processRefreshUI.bind(this),
            this.getInputHasSelection = this.getInputHasSelection.bind(this)
        }
        createDOM({ticketId: e, pane: t}) {
            this.mainComponent = new g_({
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
            return this.mainComponent?.getTicketId()
        }
        getPane() {
            return this.mainComponent?.getPane()
        }
        getTicketLanguageInformation() {
            return this.mainComponent?.getTicketLanguageInformation()
        }
        getIsAutoTranslatedEnabled() {
            return this.mainComponent?.getIsAutoTranslatedEnabled()
        }
        setIsAutoTranslateEnabled(e) {
            this.mainComponent?.setIsAutoTranslateEnabled(e)
        }
        getInputWorkingArea() {
            return this.shadowContainer.querySelector(".dl-zendesk-working-area")
        }
        setLanguageInformation(e) {
            this.mainComponent?.setLanguageInformation(e)
        }
        getTicketType() {
            return this.mainComponent?.getTicketType()
        }
        setTicketType(e) {
            this.mainComponent?.setTicketType(e)
        }
        processRefreshUI() {
            this.mainComponent.processRefreshUI()
        }
        getInputHasSelection() {
            return this.mainComponent?.getInputHasSelection()
        }
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function h_(e) {
        let t, n, o, i, s;
        const a = [__, f_]
          , r = [];
        function l(e, t) {
            return "language_not_supported" === e[2] ? 0 : 1
        }
        n = l(e),
        o = r[n] = a[n](e);
        let c = (!e[3].isZendeskEnabled || "default" === e[2]) && b_(e);
        return {
            c() {
                t = wo("div"),
                o.c(),
                i = bo(),
                c && c.c(),
                Lo(t, "class", "dl-zendesk-modal svelte-lmvrdu")
            },
            m(e, o) {
                ho(e, t, o),
                r[n].m(t, null),
                po(t, i),
                c && c.m(t, null),
                s = !0
            },
            p(e, s) {
                let d = n;
                n = l(e),
                n === d ? r[n].p(e, s) : (mi(),
                _i(r[d], 1, 1, (()=>{
                    r[d] = null
                }
                )),
                hi(),
                o = r[n],
                o ? o.p(e, s) : (o = r[n] = a[n](e),
                o.c()),
                fi(o, 1),
                o.m(t, i)),
                e[3].isZendeskEnabled && "default" !== e[2] ? c && (c.d(1),
                c = null) : c ? c.p(e, s) : (c = b_(e),
                c.c(),
                c.m(t, null))
            },
            i(e) {
                s || (fi(o),
                s = !0)
            },
            o(e) {
                _i(o),
                s = !1
            },
            d(e) {
                e && fo(t),
                r[n].d(),
                c && c.d()
            }
        }
    }
    function f_(e) {
        let t, n, o, i, s, a, r, l, c, d, u, p, g, m = chrome.i18n.getMessage("ui_zendesk_modal_ok") + "", h = "welcome" === e[2] && w_();
        function f(e, t) {
            return "welcome" === e[2] ? $_ : v_
        }
        let _ = f(e)
          , w = _(e);
        return s = new Zl({
            props: {
                value: e[3].selectedTargetLanguage,
                websiteSettings: zi,
                disabled: !e[3].isZendeskEnabled,
                customClass: "dropdown__zendesk-top-icon",
                fontSize: "md"
            }
        }),
        s.$on("selection", e[8]),
        {
            c() {
                h && h.c(),
                t = bo(),
                n = wo("div"),
                w.c(),
                o = bo(),
                i = wo("div"),
                bi(s.$$.fragment),
                a = bo(),
                r = wo("div"),
                l = wo("button"),
                c = $o(m),
                Lo(i, "class", "dropdown svelte-lmvrdu"),
                Lo(l, "class", "btn-primary svelte-lmvrdu"),
                l.disabled = d = !e[3].isZendeskEnabled,
                Lo(r, "class", "right svelte-lmvrdu"),
                Lo(n, "class", "modal-section language-selector svelte-lmvrdu")
            },
            m(d, m) {
                h && h.m(d, m),
                ho(d, t, m),
                ho(d, n, m),
                w.m(n, null),
                po(n, o),
                po(n, i),
                yi(s, i, null),
                po(n, a),
                po(n, r),
                po(r, l),
                po(l, c),
                u = !0,
                p || (g = Co(l, "click", e[9]),
                p = !0)
            },
            p(e, i) {
                "welcome" === e[2] ? h ? h.p(e, i) : (h = w_(),
                h.c(),
                h.m(t.parentNode, t)) : h && (h.d(1),
                h = null),
                _ === (_ = f(e)) && w ? w.p(e, i) : (w.d(1),
                w = _(e),
                w && (w.c(),
                w.m(n, o)));
                const a = {};
                8 & i && (a.value = e[3].selectedTargetLanguage),
                8 & i && (a.disabled = !e[3].isZendeskEnabled),
                s.$set(a),
                (!u || 8 & i && d !== (d = !e[3].isZendeskEnabled)) && (l.disabled = d)
            },
            i(e) {
                u || (fi(s.$$.fragment, e),
                u = !0)
            },
            o(e) {
                _i(s.$$.fragment, e),
                u = !1
            },
            d(e) {
                h && h.d(e),
                e && fo(t),
                e && fo(n),
                w.d(),
                Ci(s),
                p = !1,
                g()
            }
        }
    }
    function __(e) {
        let t, n, o;
        return {
            c() {
                t = wo("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_language_not_supported_line_1")}`,
                n = bo(),
                o = wo("div"),
                o.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_language_not_supported_line_2")}`,
                Lo(t, "class", "modal-section language-not-supported svelte-lmvrdu"),
                Lo(o, "class", "modal-section secondary-text svelte-lmvrdu")
            },
            m(e, i) {
                ho(e, t, i),
                ho(e, n, i),
                ho(e, o, i)
            },
            p: Un,
            i: Un,
            o: Un,
            d(e) {
                e && fo(t),
                e && fo(n),
                e && fo(o)
            }
        }
    }
    function w_(e) {
        let t;
        return {
            c() {
                t = wo("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_welcome")}`,
                Lo(t, "class", "modal-section welcome svelte-lmvrdu")
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function v_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_deepl_translate_into") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function $_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_what_is_your_primary_language") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function b_(e) {
        let t, n, o, i, s, a, r;
        function l(e, t) {
            return e[3].isZendeskEnabled ? C_ : y_
        }
        let c = l(e)
          , d = c(e);
        return {
            c() {
                t = wo("div"),
                n = wo("div"),
                d.c(),
                o = bo(),
                i = wo("div"),
                s = wo("span"),
                s.innerHTML = '<span class="svelte-lmvrdu"></span>',
                Lo(n, "class", "text"),
                Lo(s, "class", "on-off-switch svelte-lmvrdu"),
                No(s, "on", e[3].isZendeskEnabled),
                Lo(i, "class", "switch"),
                Lo(t, "class", "modal-section switch-container svelte-lmvrdu")
            },
            m(l, c) {
                ho(l, t, c),
                po(t, n),
                d.m(n, null),
                po(t, o),
                po(t, i),
                po(i, s),
                a || (r = Co(s, "click", e[5]),
                a = !0)
            },
            p(e, t) {
                c === (c = l(e)) && d ? d.p(e, t) : (d.d(1),
                d = c(e),
                d && (d.c(),
                d.m(n, null))),
                8 & t && No(s, "on", e[3].isZendeskEnabled)
            },
            d(e) {
                e && fo(t),
                d.d(),
                a = !1,
                r()
            }
        }
    }
    function y_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_turn_deepl_on") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function C_(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_modal_turn_deepl_off") + "";
        return {
            c() {
                t = $o(n)
            },
            m(e, n) {
                ho(e, t, n)
            },
            p: Un,
            d(e) {
                e && fo(t)
            }
        }
    }
    function x_(e) {
        let t, n, o, i, s, a, r = e[1] && h_(e);
        return {
            c() {
                t = wo("div"),
                n = wo("button"),
                o = bo(),
                r && r.c(),
                Lo(n, "class", "dl-zendesk-top-icon svelte-lmvrdu")
            },
            m(l, c) {
                ho(l, t, c),
                po(t, n),
                po(t, o),
                r && r.m(t, null),
                i = !0,
                s || (a = [Co(n, "click", e[7]), io(In.call(null, t, {
                    isShadow: !0
                })), Co(t, "click_outside", e[4])],
                s = !0)
            },
            p(e, [n]) {
                e[1] ? r ? (r.p(e, n),
                2 & n && fi(r, 1)) : (r = h_(e),
                r.c(),
                fi(r, 1),
                r.m(t, null)) : r && (mi(),
                _i(r, 1, 1, (()=>{
                    r = null
                }
                )),
                hi())
            },
            i(e) {
                i || (fi(r),
                i = !0)
            },
            o(e) {
                _i(r),
                i = !1
            },
            d(e) {
                e && fo(t),
                r && r.d(),
                s = !1,
                Gn(a)
            }
        }
    }
    function T_(e, t, n) {
        let o;
        Xn(e, us, (e=>n(3, o = e)));
        let {controller: i} = t
          , s = !1
          , a = "default";
        const r = ()=>{
            i.getTicketLanguageInformation().isSupported ? o.isZendeskOnboarded ? (n(1, s = !1),
            n(2, a = "default")) : (oo(us, o.isZendeskOnboarded = !0, o),
            n(2, a = "welcome"),
            n(1, s = !0)) : (n(2, a = "language_not_supported"),
            n(1, s = o.isZendeskEnabled && i.getTicketLanguageInformation().hasAttemptedLanguageDetection))
        }
          , l = ()=>{
            "welcome" === a && n(2, a = "default"),
            n(1, s = !1)
        }
        ;
        Wo((()=>{
            r(),
            o.isZendeskOnboardingShown || (Ln(),
            oo(us, o.isZendeskOnboardingShown = !0, o))
        }
        ));
        return e.$$set = e=>{
            "controller"in e && n(0, i = e.controller)
        }
        ,
        [i, s, a, o, l, ()=>{
            oo(us, o.isZendeskEnabled = !o.isZendeskEnabled, o)
        }
        , r, ()=>{
            s ? l() : n(1, s = !0)
        }
        , e=>{
            oo(us, o.selectedTargetLanguage = e.detail.selectedOption.value, o),
            bn(i)
        }
        , ()=>{
            o.isZendeskEnabled && l()
        }
        ]
    }
    window.customElements.define("deepl-zendesk-ticket-controller", m_);
    class L_ extends Ti {
        constructor(e) {
            super(),
            xi(this, e, T_, x_, Zn, {
                controller: 0,
                updateIconSettings: 6
            })
        }
        get updateIconSettings() {
            return this.$$.ctx[6]
        }
    }
    class E_ extends HTMLElement {
        constructor() {
            super(),
            this.shadow = this.attachShadow({
                mode: "open"
            }),
            this.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const e = document.createElement("link");
            e.setAttribute("rel", "stylesheet"),
            e.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.shadow.appendChild(e),
            this.shadow.appendChild(this.shadowContainer),
            this.createDOM = this.createDOM.bind(this),
            this.cleanupDOM = this.cleanupDOM.bind(this)
        }
        createDOM({controller: e}) {
            this.mainComponent = new L_({
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
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    return window.customElements.define("deepl-zendesk-top-icon", E_),
    e.GMAIL_CHAR_LIMIT = $s,
    e.GMAIL_CHAR_LIMIT_POPUP = ws,
    e.GMAIL_CONTROLLER_UI = fs,
    e.GMAIL_ONBOARDING = hs,
    e.GMAIL_TRANSLATE_EMAIL_TOOLBAR = ms,
    e.GMAIL_UI_ADDED_ATTRIBUTE = vs,
    e.GMAIL_WRITE_MESSAGE_UI = _s,
    e.autodetectLanguage = Xa,
    e.calculateNewIconPosition = pt,
    e.canInjectInputTranslation = Eg,
    e.canTranslateElementForDomain = fa,
    e.checkForIntersectionWithOpenDialogs = Es,
    e.checkIfInputHasSelection = Cn,
    e.clearMessageControllers = bn,
    e.clickAtCoordinates = Is,
    e.clickOnElement = Ds,
    e.createGmailController = oa,
    e.createGmailControllerUtil = ys,
    e.createGoogleDocsIcon = Ys,
    e.createInlineTranslateSettingsTooltip = Zs,
    e.createInlineTranslateTooltip = Gs,
    e.createInlineTranslationTrigger = ra,
    e.createInlineTranslationTriggerListener = la,
    e.createInputTranslationController = na,
    e.createNotification = ca,
    e.createPageLoadPopup = Xs,
    e.createSubmitButtonTooltip = xn,
    e.createTicketController = Yt,
    e.customizePage = pa,
    e.detectTicketLanguageInLiveChat = gn,
    e.detectTicketLanguageInTicket = pn,
    e.detectTicketType = rn,
    e.disableExtension = tn,
    e.elementHasTranslateToolbar = Ls,
    e.enableZendeskOnboarding = Ln,
    e.findEditableContent = async function t(n, o) {
        try {
            if (o.dataset && "true" === o.dataset.dlInputTranslation || o.dataset && "true" === o.dataset.dlNoInputTranslation)
                return;
            if ("true" === o.contentEditable || "TEXTAREA" === o.nodeName && o.rows > 1) {
                if ("none" === window.getComputedStyle(o).display)
                    return;
                if (!function(e) {
                    return e.getBoundingClientRect().width > 0 && e.getBoundingClientRect().height > 0
                }(o))
                    return;
                if (!ha(o, e.websiteData.hostname))
                    return;
                o.dataset.dlInputTranslation = "true",
                n.push(o)
            }
            for (const e of o.childNodes)
                t(n, e)
        } catch (e) {
            Ot() && console.error(e),
            Nt(e.message)
        }
    }
    ,
    e.findEmailToAndFromAddressTable = ks,
    e.findForwardButtonInDocument = As,
    e.findSiblingDivWithAnyMessageId = Ns,
    e.generateLanguagesWithShortcodeForDropdown = Ss,
    e.getActivePane = Xt,
    e.getContextMessages = e=>{
        const t = []
          , n = ln(e).map(un).map((e=>e.innerText))
          , o = []
          , i = [];
        for (let e = 0; e < n.length; e++) {
            const s = e % 2 == 0 ? "start" : "end";
            let a = Math.floor(e / 2);
            if ("end" === s && (a = n.length - 1 - a),
            t.includes(a))
                break;
            if ([...o, ...i].reduce(((e,t)=>e + t.length), 0) + n[a].length > 3e3)
                break;
            "end" === s ? i.unshift(n[a]) : o.push(n[a]),
            t.push(a)
        }
        return [...o, ...i]
    }
    ,
    e.getControllerFromMessage = vn,
    e.getElementCenterCoordinates = Ms,
    e.getGDocsisEditMode = gt,
    e.getGmailControllerUtil = bs,
    e.getIFrameAndEditable = lt,
    e.getIconCoordinates = ut,
    e.getMessageContent = un,
    e.getMessageViewContainers = Ts,
    e.getMessageWriteContainers = ()=>{
        const e = Array.from(document.querySelectorAll('[role="textbox"]')).filter((e=>"true" === e.getAttribute("contenteditable")));
        return e
    }
    ,
    e.getMessagesFromTicket = ln,
    e.getScrollableElements = vp,
    e.getSelectionContent = dt,
    e.getTicketController = Qt,
    e.getTicketId = Kt,
    e.getTicketStartingMessage = cn,
    e.getTicketStartingMessages = dn,
    e.getUserState = Ya,
    e.getWebsiteSettings = Qa,
    e.getZendeskController = Zt,
    e.improveGDocsSelectionContent = Va,
    e.injectAskAReviewPopup = da,
    e.injectControllerInMessage = $n,
    e.injectInlineTranslation = tr,
    e.injectInputTranslation = er,
    e.injectMissingMessageControllers = wn,
    e.injectMissingUIElements = Jt,
    e.isDeepLCom = Lg,
    e.isGDocs = rt,
    e.isGmail = Mn,
    e.isInputArea = _p,
    e.isOnMessageViewScreen = xs,
    e.isZendesk = Vt,
    e.onOpenPage = Ja,
    e.pageListener = Tg,
    e.processGDocsCopyEvent = mt,
    e.reassembleGDocsTranslatedResult = vt,
    e.removeAllDeeplElements = function() {
        !function(e) {
            const t = document.getElementsByTagName(e);
            if (!t.length)
                return;
            for (let e = t.length - 1; e >= 0; --e)
                t[e].cleanupDOM(),
                t[e].remove()
        }("deepl-input-controller")
    }
    ,
    e.removeGmailController = ia,
    e.removeGoogleDocsIcon = Js,
    e.removeInlineTranslateSettingsTooltip = Ks,
    e.removeInlineTranslateTooltip = Vs,
    e.removeInlineTranslateTrigger = aa,
    e.removeInputTranslationController = sa,
    e.removePageLoadPopup = Qs,
    e.removeUIElementsFromList = Cs,
    e.removeZendeskController = ta,
    e.removeZendeskToolbar = Tn,
    e.removeZendeskUIElements = en,
    e.replaceTranslatedGDocsContent = $t,
    e.runCustomScriptsForDomain = ga,
    e.runCustomScriptsForSpecificUrl = ma,
    e.scanForTranslatables = Ba,
    e.setErrorVisibility = or,
    e.shouldBeTranslated = Pa,
    e.shouldInjectInputIcon = ha,
    e.trackDeeplWriteEvent = ar,
    e.trackPageLandingIfNeeded = ir,
    e.trackZendeskCustomizationEvent = sr,
    e.translateGDocsSelectionContent = Ga,
    e.translateInlineText = Ua,
    e.translateSelectionRightClick = qa,
    e.translateWebsite = ja,
    e.translateZendeskMessage = Ka,
    e.translateZendeskSelectionContent = Za,
    e.triggerCopyEvent = ct,
    e.twitterState = cm,
    e.unsubscribeToWebsiteState = Hi,
    e.updateInputIconLanguageInformation = _n,
    e.updateInputPositionerCoords = wp,
    e.updateIntegrationPanelIfExists = yn,
    e.updateToolbarAutoTranslateStatus = hn,
    e.updateToolbarLanguageInformation = mn,
    e.updateTopIconLanguageInformation = fn,
    e.waitForElement = Os,
    e.websiteState = zi,
    e.whatsAppState = Lm,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});
//# sourceMappingURL=content.js.map
