var background = function(e) {
    "use strict";
    function t() {
        let e = new Uint32Array(1);
        return crypto.getRandomValues(e),
        e[0]
    }
    function n() {
        return crypto.randomUUID()
    }
    function a() {
        const e = new Uint32Array(28);
        return crypto.getRandomValues(e),
        Array.from(e, (e=>("0" + e.toString(16)).slice(-2))).join("")
    }
    function r(e) {
        try {
            return JSON.parse(atob(e.split(".")[1]))
        } catch (e) {
            return null
        }
    }
    const o = [{
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
      , s = 0
      , c = "inline"
      , i = "automatic"
      , l = "manual"
      , g = "input"
      , d = 1
      , u = 2
      , h = 1
      , p = 2
      , m = 3
      , T = 1
      , y = 2
      , f = 1
      , L = 2
      , E = 3
      , w = "HINT_KEYBOARD_SHORTCUT"
      , _ = "INLINE_TRANSLATION_TRIGGER_ICON"
      , I = "INLINE_TRANSLATION_SETTINGS_ICON"
      , S = "INLINE_TRANSLATION_SETTING_POPUP"
      , C = "INPUT_TRANSLATION_TRIGGER_ICON"
      , A = "INPUT_TRANSLATION_SETTINGS_ICON"
      , R = "INPUT_TRANSLATION_SETTING_POPUP"
      , D = "SETTINGS_PAGE_FPT"
      , N = "SETTINGS_PAGE_READING"
      , b = "SETTINGS_PAGE_WRITING"
      , k = "FPT_HIDE_MODAL"
      , O = "INPUT_TRANSLATION_READ_MORE_LINK"
      , P = "INLINE_TRANSLATION_READ_MORE_LINK"
      , v = "FPT_TRANSLATION_READ_MORE_LINK"
      , x = "EXTENSION_HUB_TOGGLE_SWITCH"
      , U = "HUB_CUSTOMIZE_SHORTCUT"
      , F = "HUB_LOGIN_BUTTON"
      , M = "HUB_UPGRADE_TO_PRO_LINK"
      , G = "HUB_TRY_PRO_LINK"
      , H = "SETTINGS_PAGE_CUSTOMIZE_SHORTCUT_BUTTON"
      , V = "HUB_FPT_ENABLE_CHECKBOX"
      , W = "HUB_FPT_DISABLE_CHECKBOX"
      , B = "DEEPL_WRITE_ICON"
      , j = "gmailOnboardingPopup"
      , q = "gmailOnboardingIcon"
      , $ = "trigger-translation"
      , K = "change-language"
      , X = "CLICK_ON_SHORTCUT_NOTIFICATION"
      , J = "CLICK_ON_INLINE_TRANSLATION_SHOW_ALTERNATIVES"
      , z = "CLICK_ON_INLINE_TRANSLATION_CLOSE_ICON"
      , Y = "CLICK_ON_LOGOUT_MENU_ENTRY"
      , Z = "DISABLE_PER_SITE"
      , Q = "DISABLE_EVERYWHERE"
      , ee = "ENABLE_EVERYWHERE"
      , te = "ENABLE_PER_SITE"
      , ne = "INPUT_TRANSLATION"
      , ae = "INLINE_TRANSLATION"
      , re = "FULL_PAGE_TRANSLATION"
      , oe = 1
      , se = 2
      , ce = 3
      , ie = 4
      , le = "OPEN_PAGE"
      , ge = "BACK_BUTTON"
      , de = "NEXT_BUTTON"
      , ue = "NAVIGATION"
      , he = 0
      , pe = 1
      , me = 2
      , Te = 3
      , ye = "cofdbpoegempjloogbagkncekinflcnj"
      , fe = "fancfknaplihpclbhbpclnmmjcjanbaf"
      , Le = "ocpdpnakdghopjcifldjidbdmfobmmoi"
      , Ee = {
        deepl: 1,
        linguee: 2,
        google_translate: 3,
        word_365: 4,
        power_point_365: 5,
        jira: 6,
        confluence: 7,
        gmail: 8
    }
      , we = "DEFAULT"
      , _e = "GDOCS"
      , Ie = "ZENDESK"
      , Se = "WHATSAPP_WEB"
      , Ce = "TWITTER"
      , Ae = "GMAIL"
      , Re = "USER"
      , De = "EXTENSION"
      , Ne = "OPEN_TICKET"
      , be = "DETECT_TICKET_LANGUAGE"
      , ke = "SWITCH_TICKET_LANGUAGE"
      , Oe = "ENABLE_AUTOTRANSLATE"
      , Pe = "DISABLE_AUTOTRANSLATE"
      , ve = "TRANSLATE_MESSAGE"
      , xe = "TRANSLATE_INPUT"
      , Ue = "ERROR"
      , Fe = "TRANSLATION"
      , Me = "LOGIN"
      , Ge = "CHAT"
      , He = "MESSAGE"
      , Ve = "free"
      , We = "pro"
      , Be = "none"
      , je = "TEXT_REFINEMENT_REQUEST"
      , qe = "GDOCS_INSERT_COPY"
      , $e = "GDOCS_DISCARD_COPY"
      , Ke = "GDOCS_CHAR_LIMIT_REACHED"
      , Xe = "RESULT_ACCEPTED"
      , Je = "RESULT_REVERTED"
      , ze = "ERROR"
      , Ye = "RESULT_ACCEPTED"
      , Ze = "RESULT_REVERTED"
      , Qe = "READING_VIEW_TRANSLATE"
      , et = "COMPOSE_VIEW_TRANSLATE"
      , tt = "COMPOSE_VIEW_IMPROVE"
      , nt = {
        share_feedback_survey: "DOCS_GOOGLE_COM_FEEDBACK_FORM",
        try_DeepL_Pro: "DEEPL_COM_PRO",
        show_more_translation: "DEEPL_COM_TRANSLATOR",
        deepl_translator_home: "DEEPL_COM_HOMEPAGE",
        deepl_write_home: "DEEPL_COM_WRITE",
        deepl_translator_docs: "DEEPL_COM_DOCTRANS",
        shortcut_settings: "SHORTCUT_SETTINGS",
        support_article: "SUPPORT_ARTICLE",
        chrome_write_a_review: "CHROME_WRITE_A_REVIEW",
        edge_write_a_review: "EDGE_WRITE_A_REVIEW",
        external: {
            whatsapp: "EXTERNAL_WHATSAPP",
            twitter: "EXTERNAL_TWITTER",
            youtube: "EXTERNAL_YOUTUBE",
            facebook: "EXTERNAL_FACEBOOK",
            github: "EXTERNAL_GITHUB",
            discord: "EXTERNAL_DISCORD",
            telegram: "EXTERNAL_TELEGRAM",
            reddit: "EXTERNAL_REDDIT"
        },
        deepl_support: "DEEPL_SUPPORT"
    }
      , at = {
        DOCS_GOOGLE_COM_FEEDBACK_FORM: "https://deepl.typeform.com/to/MkMfP2Y6",
        DEEPL_COM_PRO: "https://www.deepl.com/pro",
        DEEPL_COM_TRANSLATOR: "https://www.deepl.com/translator",
        DEEPL_COM_WRITE: {
            dapApi: "https://s.deepl.com/chrome/statistics",
            toolingApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
            toolingApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
            toolingWriteApiPro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
            toolingWriteApi: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
            login: "https://www.deepl.com/auth/login",
            token: "https://w.deepl.com/oidc/token",
            logout: "https://www.deepl.com/auth/logout",
            feedbackSurvey: "https://deepl.typeform.com/to/MkMfP2Y6",
            uninstallSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eJxAD8c7J5hqSRU",
            deeplPro: "https://www.deepl.com/pro",
            deeplTranslator: "https://www.deepl.com/translator",
            deeplDoctrans: "https://www.deepl.com/translator/files",
            extensionStorePage: "https://bit.ly/DeepL-Chrome",
            supportArticle: "https://support.deepl.com/hc/articles/4407580229522",
            deeplSupport: "https://support.deepl.com/hc",
            chromeWebstore: "https://chrome.google.com/webstore/detail/deepl-translate-reading-w/cofdbpoegempjloogbagkncekinflcnj",
            edgeWebstore: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-reading-/fancfknaplihpclbhbpclnmmjcjanbaf",
            clientStateApi: "https://w.deepl.com/web"
        }.deeplWrite,
        DEEPL_COM_DOCTRANS: "https://www.deepl.com/translator/files",
        SHORTCUT_SETTINGS: "chrome://extensions/shortcuts",
        SUPPORT_ARTICLE: "https://support.deepl.com/hc/articles/4407580229522",
        CHROME_WEBSTORE: "https://chrome.google.com/webstore/detail/deepl-translate-reading-w/cofdbpoegempjloogbagkncekinflcnj",
        EDGE_WEBSTORE: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-reading-/fancfknaplihpclbhbpclnmmjcjanbaf",
        EXTERNAL: {
            WHATSAPP: "https://web.whatsapp.com",
            TWITTER: "https://www.twitter.com",
            YOUTUBE: "https://www.youtube.com",
            FACEBOOK: "https://www.facebook.com",
            GITHUB: "https://www.github.com",
            DISCORD: "https://www.discord.com",
            TELEGRAM: "https://web.telegram.org",
            REDDIT: "https://www.reddit.com"
        },
        DEEPL_SUPPORT: "https://support.deepl.com/hc"
    };
    function rt(e) {
        const {destination: t, ...n} = e;
        if (void 0 !== t)
            switch (t) {
            case nt.share_feedback_survey:
                return at.DOCS_GOOGLE_COM_FEEDBACK_FORM;
            case nt.try_DeepL_Pro:
                return n?.utmContent ? ct(at.DEEPL_COM_PRO, [["utm_source", "browser_extension"], ["utm_medium", "chrome"], ["utm_content", n?.utmContent]]) : at.DEEPL_COM_PRO;
            case nt.show_more_translation:
                return n ? function({sourceLang: e, targetLang: t, textToShare: n}) {
                    if (!e || !t || !n)
                        return "";
                    const a = new URL(at.DEEPL_COM_TRANSLATOR);
                    let r = `${e.toLowerCase()}/${t.toLowerCase()}/${encodeURIComponent(n)}`;
                    return a.hash = r,
                    a.href
                }(n) : void console.error("Invalid action.");
            case nt.deepl_translator_home:
                return n?.utmContent ? ct(at.DEEPL_COM_TRANSLATOR, [["utm_source", "browser_extension"], ["utm_medium", "chrome"], ["utm_content", n?.utmContent]]) : at.DEEPL_COM_TRANSLATOR;
            case nt.deepl_write_home:
                return n?.utmContent ? ct(at.DEEPL_COM_WRITE, [["utm_source", "browser_extension"], ["utm_medium", "chrome"], ["utm_content", n?.utmContent]]) : at.DEEPL_COM_WRITE;
            case nt.deepl_translator_docs:
                return n?.utmContent ? ct(at.DEEPL_COM_DOCTRANS, [["utm_source", "browser_extension"], ["utm_medium", "chrome"], ["utm_content", n?.utmContent]]) : at.DEEPL_COM_DOCTRANS;
            case nt.shortcut_settings:
                return at.SHORTCUT_SETTINGS;
            case nt.support_article:
                return at.SUPPORT_ARTICLE;
            case nt.external.whatsapp:
                return at.EXTERNAL.WHATSAPP;
            case nt.external.twitter:
                return at.EXTERNAL.TWITTER;
            case nt.external.youtube:
                return at.EXTERNAL.YOUTUBE;
            case nt.external.facebook:
                return at.EXTERNAL.FACEBOOK;
            case nt.external.github:
                return at.EXTERNAL.GITHUB;
            case nt.external.discord:
                return at.EXTERNAL.DISCORD;
            case nt.external.telegram:
                return at.EXTERNAL.TELEGRAM;
            case nt.external.reddit:
                return at.EXTERNAL.REDDIT;
            case nt.deepl_support:
                return at.DEEPL_SUPPORT;
            case nt.chrome_write_a_review:
                return at.CHROME_WEBSTORE;
            case nt.edge_write_a_review:
                return at.EDGE_WEBSTORE;
            default:
                return
            }
    }
    function ot(e) {
        const t = rt(e);
        console.log("redirectURL", t),
        t && chrome.tabs.create({
            url: st(t),
            active: !0
        })
    }
    function st(e) {
        return new URL(e).href
    }
    function ct(e, t) {
        if (0 === t.length || !e)
            return;
        const n = new URL(e);
        return t.forEach((e=>{
            2 === e.length && n.searchParams.append(e[0], e[1])
        }
        )),
        n.href
    }
    const it = ()=>{
        let e = navigator.languages ? navigator.languages[0].substr(0, 2).toUpperCase() : "EN";
        var t;
        e = "EN" === (t = e) ? "EN-GB" : "PT" === t ? "PT-PT" : t;
        return o.map((e=>e.langCode)).includes(e) ? e : "EN"
    }
      , lt = ()=>{
        const e = {};
        return o.forEach((t=>{
            let n = t.langCode;
            ["EN-GB", "EN-US"].includes(n) && (n = "EN"),
            ["PT-PT", "PT-BR"].includes(n) && (n = "PT"),
            e[n] = 0
        }
        )),
        e
    }
    ;
    const gt = "production"
      , dt = "development";
    function ut() {
        return gt === dt
    }
    function ht(e) {
        chrome.runtime.sendMessage({
            action: "dlTrackError",
            errorMessage: e
        })
    }
    const pt = "PROTOCOL_ERROR"
      , mt = "FULL_PAGE_SERVER_ERROR"
      , Tt = "-32003"
      , yt = "403"
      , ft = "1045601"
      , Lt = "ENTRY_NOT_FOUND"
      , Et = "SERVER_ERROR"
      , wt = "INSTALLATION_ERROR"
      , _t = "TRANSLATED_INPUT_NOT_SET";
    class It extends Error {
        constructor(e) {
            super(e),
            this.name = pt,
            this.message = e
        }
    }
    class St extends Error {
        constructor(e) {
            super(e),
            this.name = mt,
            this.message = e
        }
    }
    class Ct extends Error {
        constructor(e, t) {
            super(t),
            this.name = e,
            this.message = t
        }
    }
    class At extends Error {
        constructor(e, t) {
            super(t),
            this.name = e,
            this.message = t
        }
    }
    function Rt(e) {
        try {
            ht(`${e.name} ${e.message}`),
            console.error(e.name, e.message)
        } catch (e) {
            console.error(e)
        }
        return {
            error: e.name
        }
    }
    function Dt() {
        return {
            url: "https://s.deepl.com/chrome/statistics"
        }
    }
    function Nt(e) {
        switch (e) {
        case l:
            return 1;
        case i:
            return 2;
        case c:
            return 3;
        case g:
            return 4;
        default:
            return 0
        }
    }
    function bt(e) {
        switch (e) {
        case Lt:
            return 1;
        case Et:
            return 2
        }
    }
    function kt(e) {
        switch (e) {
        case h:
            return T;
        case p:
            return y;
        default:
            return 0
        }
    }
    function Ot(e) {
        switch (e) {
        case h:
            return f;
        case p:
            return L;
        case m:
            return E;
        default:
            return 0
        }
    }
    function Pt(e) {
        return e === w ? 1 : 0
    }
    function vt(e) {
        switch (e) {
        case C:
            return 1;
        case _:
            return 2;
        case S:
            return 3;
        case R:
            return 4;
        case D:
            return 5;
        case N:
            return 6;
        case b:
            return 7;
        case k:
            return 8;
        case A:
            return 9;
        case I:
            return 10;
        case O:
            return 11;
        case P:
            return 12;
        case v:
            return 13;
        case x:
            return 14;
        case U:
            return 15;
        case F:
            return 16;
        case M:
            return 17;
        case G:
            return 18;
        case H:
            return 19;
        case V:
            return 20;
        case W:
            return 21;
        case B:
            return 22;
        case j:
            return 25;
        case q:
            return 26;
        default:
            return 0
        }
    }
    function xt(e) {
        return e === $ ? 1 : 0
    }
    function Ut(e) {
        switch (e) {
        case X:
            return 60011;
        case J:
            return 60026;
        case z:
            return 60027;
        case Y:
            return 60028;
        default:
            return 0
        }
    }
    function Ft(e) {
        switch (e) {
        case ne:
            return 1;
        case ae:
            return 2;
        case re:
            return 3;
        default:
            return 0
        }
    }
    function Mt(e) {
        switch (e) {
        case Q:
            return 1;
        case Z:
            return 2;
        case ee:
            return 3;
        case te:
            return 4;
        default:
            return 0
        }
    }
    function Gt(e) {
        switch (e) {
        case "top":
            return oe;
        case "right":
            return se;
        case "bottom":
            return ce;
        case "left":
            return ie;
        default:
            return 0
        }
    }
    function Ht(e) {
        switch (e) {
        case nt.shortcut_settings:
            return at.SHORTCUT_SETTINGS;
        case nt.support_article:
            return at.SUPPORT_ARTICLE;
        case nt.external.whatsapp:
            return at.EXTERNAL.WHATSAPP;
        case nt.external.twitter:
            return at.EXTERNAL.TWITTER;
        case nt.external.youtube:
            return at.EXTERNAL.YOUTUBE;
        case nt.external.facebook:
            return at.EXTERNAL.FACEBOOK;
        case nt.external.github:
            return at.EXTERNAL.GITHUB;
        case nt.external.discord:
            return at.EXTERNAL.DISCORD;
        case nt.external.telegram:
            return at.EXTERNAL.TELEGRAM;
        case nt.external.reddit:
            return at.EXTERNAL.REDDIT;
        default:
            return ""
        }
    }
    function Vt(e) {
        switch (e) {
        case le:
            return 1;
        case ge:
            return 2;
        case de:
            return 3;
        case ue:
            return 4;
        default:
            return 0
        }
    }
    function Wt(e) {
        switch (e) {
        case ye:
            return pe;
        case fe:
            return me;
        case Le:
            return Te;
        default:
            return he
        }
    }
    function Bt(e) {
        return Ee[e] || 0
    }
    function jt(e) {
        switch (e) {
        case we:
            return 1;
        case _e:
            return 2;
        case Se:
            return 3;
        case Ce:
            return 4;
        case Ie:
            return 5;
        case Ae:
            return 6;
        default:
            return 0
        }
    }
    function qt(e) {
        switch (e) {
        case 60026:
        case 60027:
            return !0;
        default:
            return !1
        }
    }
    function $t(e) {
        switch (e) {
        case Re:
            return 1;
        case De:
            return 2;
        default:
            return 0
        }
    }
    function Kt(e) {
        switch (e) {
        case Fe:
            return 1;
        case Me:
            return 2;
        default:
            return 0
        }
    }
    function Xt(e) {
        switch (e) {
        case He:
            return 1;
        case Ge:
            return 2;
        default:
            return 0
        }
    }
    function Jt(e) {
        switch (e) {
        case Ve:
            return 1;
        case We:
            return 2;
        case Be:
            return 3;
        default:
            return 0
        }
    }
    function zt(e) {
        switch (e) {
        case Qe:
            return 1;
        case et:
            return 2;
        case tt:
            return 3;
        default:
            return 0
        }
    }
    const Yt = "Chrome"
      , Zt = "Edge"
      , Qt = "Brave"
      , en = "Firefox"
      , tn = "Opera"
      , nn = "Safari";
    function an(e, t) {
        let n;
        try {
            switch (e) {
            case Yt:
            case Qt:
                n = t.split("Chrome/")[1].split(" ")[0];
                break;
            case Zt:
                n = t.split("Edg/")[1].split(" ")[0];
                break;
            case en:
                n = t.split("Firefox/")[1].split(" ")[0];
                break;
            case tn:
                n = t.split("OPR/")[1].split(" ")[0];
                break;
            case nn:
                n = t.split("Version/")[1].split(" ")[0]
            }
        } catch (t) {
            console.error(`Could not get the browsers (${e}) version from user agent`, t)
        }
        try {
            !n && navigator?.userAgentData && function(e) {
                return e === Yt || e === Zt || e === Qt || e === tn
            }(e) && (n = rn(e).version)
        } catch (t) {
            console.error(`Could not get the chromium browsers (${e}) version`, t)
        }
        return n && "string" == typeof n ? n : "unknown_browser_version"
    }
    function rn(e) {
        if (!navigator.userAgentData || !e)
            return;
        const t = new RegExp(`${e}`,"i");
        return navigator.userAgentData.brands.filter((e=>t.test(e.brand)))[0]
    }
    async function on(e) {
        let t, n, a, r, o, s, c = !1;
        try {
            c = await Ta()
        } catch (e) {
            console.error(`DAP: Failed to fetch logged in status. Error: ${e.message}`)
        }
        try {
            const e = await ga(["session", "installationId"]);
            n = e.session.id,
            t = e.installationId
        } catch (e) {
            console.error(`DAP: Failed to fetch settings. Error: ${e.message}`)
        }
        try {
            const e = await Ia();
            a = Jt(e.translatorServiceType),
            r = Jt(e.apiServiceType),
            o = Jt(e.docTranslatorServiceType)
        } catch (e) {
            console.error(`DAP: Failed to fetch user information. Error: ${e.message}`)
        }
        try {
            s = await Ca()
        } catch (e) {
            console.error(e)
        }
        const i = function() {
            const e = navigator?.userAgent || "unknown_user_agent"
              , t = navigator?.userAgentData?.platform || navigator?.platform || "unknown_platform";
            let n = "unknown_browser"
              , a = "unknown_browser_version";
            const r = navigator?.language || "unknown_browser_language";
            try {
                const t = e.match(/chrome|chromium|crios/i)
                  , r = e.match(/edg/i) || rn(Zt)
                  , o = e.match(/firefox|fxios/i)
                  , s = e.match(/opr\//i) || rn(tn)
                  , c = e.match(/safari/i)
                  , i = rn(Qt);
                t ? (n = Yt,
                r && (n = Zt),
                s && (n = tn),
                i && (n = Qt)) : r ? n = Zt : o ? n = en : s ? n = tn : c && (n = nn),
                a = an(n, e)
            } catch (e) {
                console.error("Could not get the name of the brower", e)
            }
            return {
                userAgent: e,
                platform: t,
                browser: n,
                browserVersion: a,
                browserLang: r
            }
        }()
          , l = {
            eventId: void 0,
            extensionVersion: "1.7.0",
            sessionId: n,
            installationId: t,
            browserInstanceId: s,
            originStore: Wt(chrome.runtime.id),
            userInfos: {
                userType: c ? u : d,
                translatorServiceType: a,
                apiServiceType: r,
                docTranslatorServiceType: o
            },
            userAgent: i.userAgent,
            platform: i.platform,
            browser: i.browser,
            browserVersion: i.browserVersion,
            browserLang: i.browserLang
        }
          , g = e ? e(l) : l;
        return fetch("https://s.deepl.com/chrome/statistics", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(g)
        }).then((e=>{
            e.ok || console.log(`DAP ${g.eventId} request failed: ${e}`)
        }
        ))
    }
    async function sn(e) {
        return on((t=>({
            ...t,
            eventId: 60001,
            translationRequestData: {
                extensionVersion: "1.7.0",
                domainName: e.domainName,
                userId: e.installationId,
                translationTrigger: Nt(e.trigger),
                translationData: {
                    sourceLang: e.websiteLanguage,
                    targetLang: e.targetLanguage,
                    sourceLength: e.characterCount
                },
                ...e.translationPerformance && {
                    translationPerformance: e.translationPerformance
                },
                nicheIntegration: jt(e.nicheIntegration || we)
            }
        })))
    }
    async function cn(e) {
        return on((t=>({
            ...t,
            eventId: 60002,
            errorData: {
                extensionVersion: "1.7.0",
                errorCode: e.errorCode,
                errorMessage: e.errorMessage
            }
        })))
    }
    async function ln(e) {
        return on((t=>({
            ...t,
            eventId: 60003,
            translationErrorData: {
                errorData: {
                    extensionVersion: "1.7.0",
                    errorCode: e.errorCode,
                    errorMessage: e.errorMessage
                },
                targetLang: e.targetLang,
                domainName: e.domainName,
                websiteLanguage: e.websiteLanguage,
                sourceLength: e.characterCount,
                translationTrigger: Nt(e.trigger)
            }
        })))
    }
    async function gn(e) {
        return on((t=>({
            ...t,
            eventId: 60004,
            contentScriptErrorData: {
                errorData: {
                    extensionVersion: "1.7.0",
                    errorCode: e.errorCode,
                    errorMessage: e.errorMessage
                },
                domainName: e.domainName
            }
        })))
    }
    async function dn(e) {
        return on((t=>({
            ...t,
            eventId: 60005,
            inputInjectionData: {
                extensionVersion: "1.7.0",
                domainName: e.domainName
            }
        })))
    }
    async function un(e) {
        return on((t=>({
            ...t,
            eventId: 60007,
            extensionOpenedData: {
                extensionVersion: "1.7.0",
                domainName: e.domainName,
                extensionOpenedFrom: e.extensionOpenedFrom
            }
        })))
    }
    async function hn(e) {
        return on((t=>({
            ...t,
            eventId: 60008,
            logoClickedData: {
                extensionVersion: "1.7.0",
                logoClickedFrom: e.logoClickedFrom
            }
        })))
    }
    async function pn(e) {
        return on((t=>({
            ...t,
            eventId: 60009,
            notificationViewedData: {
                extensionVersion: "1.7.0",
                notificationType: Pt(e.notificationType)
            }
        })))
    }
    async function mn(e) {
        return on((t=>({
            ...t,
            eventId: 60010,
            shortcutUsedData: {
                shortcutType: xt(e.shortcutType),
                uiLocation: vt(e.location),
                shortcut: e.shortcut,
                nicheIntegration: jt(e.nicheIntegration || we)
            }
        })))
    }
    async function Tn(e) {
        const t = {
            eventId: Ut(e.uiAction)
        };
        return qt(t.eventId) && (t.payload = {
            nicheIntegration: jt(e.nicheIntegration || we)
        }),
        on((e=>({
            ...e,
            ...t
        })))
    }
    async function yn() {
        return on((e=>({
            ...e,
            eventId: 60012
        })))
    }
    async function fn() {
        return on((e=>({
            ...e,
            eventId: 60013
        })))
    }
    async function Ln(e) {
        return on((t=>({
            ...t,
            eventId: 60014,
            inlineSettingOpenedData: {
                uiFunction: Ft(e.uiFunction),
                uiLocation: vt(e.uiLocation),
                nicheIntegration: jt(e.nicheIntegration)
            }
        })))
    }
    async function En(e) {
        return on((t=>({
            ...t,
            eventId: 60015,
            settingChangedData: {
                settingType: Mt(e.settingType),
                uiFunction: Ft(e.uiFunction),
                uiLocation: vt(e.uiLocation),
                domainName: e.domainName
            }
        })))
    }
    async function wn(e) {
        return on((t=>({
            ...t,
            eventId: 60016,
            detectLanguageData: {
                domainName: e.domainName,
                language: e.language
            }
        })))
    }
    async function _n(e) {
        return on((t=>({
            ...t,
            eventId: 60017,
            rightClickData: {
                domainName: e.domainName,
                translationType: e.translationType
            }
        })))
    }
    async function In(e) {
        return on((t=>({
            ...t,
            eventId: 60018,
            inlinePositionChangeData: {
                newPosition: Gt(e.newPosition)
            }
        })))
    }
    async function Sn(e) {
        return on((t=>({
            ...t,
            eventId: 60019,
            inlineDragStartData: {
                nicheIntegration: jt(e?.nicheIntegration || we)
            }
        })))
    }
    async function Cn(e) {
        return on((t=>({
            ...t,
            eventId: 60020,
            whatsAppMessageTranslatedData: {
                messageLang: e.messageLang,
                targetLang: e.targetLang,
                messageLength: e.messageLength,
                translator: Xt(e.translator),
                numberOfLanguages: e.numberOfLanguages,
                numberOfMessages: e.numberOfMessages
            }
        })))
    }
    async function An(e) {
        return on((t=>({
            ...t,
            eventId: 60021,
            whatsAppMessageTranslationFailedData: {
                errorCode: e.errorCode,
                domainName: e.domainName,
                translationConfig: {
                    messageLength: e.messageLength,
                    targetLang: e.targetLang,
                    messageLang: e.messageLang,
                    translator: Xt(e.translator),
                    numberOfLanguages: e.numberOfLanguages,
                    numberOfMessages: e.numberOfMessages
                }
            }
        })))
    }
    async function Rn(e) {
        return on((t=>({
            ...t,
            eventId: 60057,
            twitterTweetTranslationFailedData: {
                errorCode: e.errorCode,
                domainName: e.domainName,
                translationConfig: {
                    messageLength: e.messageLength,
                    targetLang: e.targetLang,
                    messageLang: e.messageLang
                }
            }
        })))
    }
    async function Dn(e) {
        return on((t=>({
            ...t,
            eventId: 60022,
            fptHideData: {
                hideOption: e.hideOption,
                sourceLang: e.sourceLang,
                domainName: e.domainName,
                uiLocation: vt(e.uiLocation)
            }
        })))
    }
    async function Nn(e) {
        return on((t=>({
            ...t,
            eventId: 60023,
            inlineCopyData: {
                targetLang: e.targetLang,
                targetLength: e.targetLength,
                nicheIntegration: jt(e.nicheIntegration || we)
            }
        })))
    }
    async function bn(e) {
        return on((t=>({
            ...t,
            eventId: 60024,
            inlineListenData: {
                targetLang: e.targetLang,
                targetLength: e.targetLength,
                actionType: e.actionType,
                nicheIntegration: jt(e.nicheIntegration || we)
            }
        })))
    }
    async function kn(e) {
        return on((t=>({
            ...t,
            eventId: 60025,
            iconHoverData: {
                uiLocation: vt(e.uiLocation),
                domainName: e.domainName,
                nicheIntegration: jt(e.nicheIntegration || we)
            }
        })))
    }
    async function On(e) {
        return on((t=>({
            ...t,
            eventId: 60029,
            onboardingStepChangeData: {
                previousStep: e.previousStep,
                newStep: e.newStep,
                trigger: Vt(e.trigger),
                secondsOnOnboarding: e.secondsOnOnboarding,
                secondsOnPreviousStep: e.secondsOnPreviousStep
            }
        })))
    }
    async function Pn(e) {
        return on((t=>({
            ...t,
            eventId: 60030,
            onboardingOpenExternalPageData: {
                url: Ht(e.url)
            }
        })))
    }
    async function vn(e) {
        return on((t=>({
            ...t,
            eventId: 60031,
            readMoreClickedData: {
                uiLocation: vt(e.uiLocation)
            }
        })))
    }
    async function xn(e) {
        return on((t=>({
            ...t,
            eventId: 60032,
            landOnWebsiteData: {
                website: Bt(e.website)
            }
        })))
    }
    async function Un(e) {
        return on((t=>({
            ...t,
            eventId: 60033,
            inlineListenData: {
                targetLang: e.targetLang,
                targetLength: e.targetLength,
                triggerType: e.triggerType,
                nicheIntegration: jt(e.nicheIntegration || we)
            }
        })))
    }
    async function Fn(e) {
        return on((t=>({
            ...t,
            eventId: 60034,
            openInputHighlighterData: {
                domainName: e.domainName
            }
        })))
    }
    async function Mn(e) {
        return on((t=>({
            ...t,
            eventId: 60035,
            closeInputHighlighterData: {
                trigger: e.trigger
            }
        })))
    }
    async function Gn(e) {
        return on((t=>({
            ...t,
            eventId: 60036,
            gdocsReplaceTextData: {
                sourceLang: e.sourceLang,
                targetLang: e.targetLang,
                sourceLength: e.sourceLength,
                targetLength: e.targetLength
            }
        })))
    }
    async function Hn() {
        return on((e=>({
            ...e,
            eventId: 60037
        })))
    }
    async function Vn(e) {
        return on((t=>({
            ...t,
            eventId: 60038,
            openInputHighlighterData: {
                domainName: e.domainName
            }
        })))
    }
    async function Wn(e) {
        return on((t=>({
            ...t,
            eventId: 60039,
            closeInputHighlighterData: {
                trigger: e.trigger
            }
        })))
    }
    async function Bn(e) {
        return on((t=>({
            ...t,
            eventId: 60040,
            dictionaryStatus: {
                status: e.status,
                langPair: e.langPair
            }
        })))
    }
    async function jn() {
        return on((e=>({
            ...e,
            eventId: 60041
        })))
    }
    async function qn() {
        return on((e=>({
            ...e,
            eventId: 60042
        })))
    }
    async function $n(e) {
        return on((t=>({
            ...t,
            eventId: 60043,
            errorData: {
                lingueeError: bt(e.error)
            }
        })))
    }
    async function Kn(e, t) {
        let n;
        switch (e) {
        case Ne:
            n = 60044;
            break;
        case be:
            n = 60045;
            break;
        case ke:
            n = 60046;
            break;
        case Oe:
            n = 60047;
            break;
        case Pe:
            n = 60048;
            break;
        case ve:
            n = 60049;
            break;
        case xe:
            n = 60050;
            break;
        case Ue:
            n = 60051;
            break;
        default:
            return
        }
        return on((e=>({
            ...e,
            eventId: n,
            zendeskMetaData: {
                agentLanguage: t.agentLanguage,
                ticketLanguage: t.ticketLanguage,
                isTicketLanguageAutodetected: t.isTicketLanguageAutodetected,
                isTicketLanguageSupported: t.isTicketLanguageSupported,
                isAutoTranslateEnabled: t.isAutoTranslateEnabled,
                sourceTextLength: t.sourceTextLength,
                targetTextLength: t.targetTextLength,
                inputHasSelection: t.inputHasSelection,
                error: t.error
            }
        })))
    }
    async function Xn() {
        return on((e=>({
            ...e,
            eventId: 60054
        })))
    }
    async function Jn(e) {
        const t = Math.round(await wa() / 60);
        return on((n=>({
            ...n,
            eventId: 60055,
            logoutData: {
                trigger: $t(e.trigger),
                minutesSinceLastLogin: t,
                reason: e.reason
            }
        })))
    }
    async function zn(e) {
        return on((t=>({
            ...t,
            eventId: 60052,
            gdocsMaxCharExceededData: {
                sourceLang: e.sourceLang,
                targetLang: e.targetLang,
                sourceLength: e.sourceLength
            }
        })))
    }
    async function Yn(e) {
        return on((t=>({
            ...t,
            eventId: 60053,
            gdocsMaxCharExceededData: {
                sourceLang: e.sourceLang,
                targetLang: e.targetLang,
                sourceLength: e.sourceLength
            }
        })))
    }
    async function Zn(e) {
        return on((t=>({
            ...t,
            eventId: 60056,
            sessionTypeData: {
                sessionType: e.sessionType,
                trigger: Kt(e.trigger)
            }
        })))
    }
    async function Qn(e) {
        let t = "";
        try {
            t = await fa()
        } catch (e) {
            console.log(`DAP: Failed to fetch session type. Error: ${e.message}`)
        }
        return on((n=>({
            ...n,
            eventId: 60058,
            onboardingModalShownData: {
                nicheIntegration: jt(e.nicheIntegration || we),
                sessionType: t
            }
        })))
    }
    async function ea(e) {
        return on((t=>({
            ...t,
            eventId: 60059,
            UILocationClickedData: {
                target: vt(e)
            }
        })))
    }
    async function ta() {
        return on((e=>({
            ...e,
            eventId: 60060
        })))
    }
    async function na() {
        return on((e=>({
            ...e,
            eventId: 60061
        })))
    }
    async function aa(e, t) {
        let n;
        switch (e) {
        case je:
            n = 60062;
            break;
        case qe:
            n = 60063;
            break;
        case $e:
            n = 60064;
            break;
        case Ke:
            n = 60065;
            break;
        case ze:
            n = 60066;
            break;
        case Xe:
            n = 60071;
            break;
        case Je:
            n = 60072;
            break;
        default:
            return
        }
        return on((e=>({
            ...e,
            eventId: n,
            deeplWriteMetaData: {
                lang: t.lang,
                sourceLength: t.sourceLength,
                targetLength: t.targetLength,
                nicheIntegration: jt(t.nicheIntegration || we),
                error: t.error
            }
        })))
    }
    async function ra() {
        if (!await Ta())
            return;
        const e = await Aa();
        return on((t=>({
            ...t,
            eventId: 60067,
            accountData: {
                accountUuid: e
            }
        })))
    }
    async function oa() {
        const e = await Aa();
        return on((t=>({
            ...t,
            eventId: 60068,
            accountData: {
                accountUuid: e
            }
        })))
    }
    async function sa() {
        const e = await Aa();
        return on((t=>({
            ...t,
            eventId: 60069,
            accountData: {
                accountUuid: e
            }
        })))
    }
    async function ca(e, t) {
        let n;
        switch (e) {
        case Ye:
            n = 60073;
            break;
        case Ze:
            n = 60074;
            break;
        default:
            return
        }
        return on((e=>({
            ...e,
            eventId: n,
            translationResultActionData: {
                sourceLang: t.sourceLang,
                sourceLength: t.sourceLength,
                targetLength: t.targetLength,
                nicheIntegration: jt(t.nicheIntegration || we),
                error: t.error
            }
        })))
    }
    async function ia(e) {
        return on((t=>({
            ...t,
            eventId: 60070,
            customizationOnOffData: {
                nicheIntegration: jt(e.nicheIntegration || we),
                uiLocation: vt(e.location),
                customizationEnabled: e.customizationEnabled
            }
        })))
    }
    async function la(e) {
        return on((t=>({
            ...t,
            eventId: 60075,
            gmailCharLimitReachedData: {
                gmailActionType: zt(e.type)
            }
        })))
    }
    async function ga(e) {
        if (e.includes("session")) {
            const e = await chrome.storage.sync.get(["session"]);
            e && !e.session && await da()
        }
        return new Promise(((t,n)=>{
            chrome.storage.sync.get(e, (a=>{
                a ? t(a) : n(`Can not get ${e}`)
            }
            ))
        }
        ))
    }
    async function da() {
        const e = n();
        await chrome.storage.sync.set({
            session: {
                id: e,
                timestamp: Date.now()
            }
        });
        try {
            await ra()
        } catch (e) {
            console.error(e)
        }
    }
    async function ua() {
        const {session: e} = await ga(["session"]);
        !e || (Date.now() - e.timestamp) / 6e4 > 30 ? await da() : await chrome.storage.sync.set({
            session: {
                ...e,
                timestamp: Date.now()
            }
        })
    }
    async function ha(e, t, n) {
        const a = r(e);
        return await chrome.storage.local.set({
            a_t: e,
            r_t: t,
            i_t: n,
            isLoggedIn: !(!e || !t),
            isProUser: !(!a || "Pro" !== a.sessionType),
            sessionType: a?.sessionType
        }),
        a?.sessionType
    }
    async function pa() {
        await chrome.storage.local.remove(["a_t", "r_t", "i_t"]),
        await chrome.storage.local.set({
            isLoggedIn: !1,
            isProUser: !1
        })
    }
    async function ma() {
        const e = await chrome.storage.local.get(["a_t", "r_t", "i_t"]);
        return {
            access_token: e ? e.a_t : void 0,
            refresh_token: e ? e.r_t : void 0,
            id_token: e ? e.i_t : void 0
        }
    }
    async function Ta() {
        const e = await chrome.storage.local.get(["isLoggedIn"]);
        return !(!e || !e.isLoggedIn)
    }
    async function ya() {
        const e = await chrome.storage.local.get(["isProUser"]);
        return !(!e || !e.isProUser)
    }
    async function fa() {
        return (await chrome.storage.local.get(["sessionType"]))?.sessionType
    }
    async function La() {
        await chrome.storage.local.set({
            last_login: Date.now()
        })
    }
    async function Ea() {
        await chrome.storage.local.remove(["last_login"])
    }
    async function wa() {
        const e = await chrome.storage.local.get(["last_login"]);
        return e && e.last_login ? (Date.now() - e.last_login) / 1e3 : 0
    }
    async function _a(e) {
        const t = e.featureSet.translator.service
          , n = e.featureSet.api.service
          , a = e.featureSet.documentTranslation.service;
        let r;
        e.loginState?.accountId && (r = e.loginState.accountId),
        await chrome.storage.local.set({
            translatorServiceType: t,
            apiServiceType: n,
            docTranslatorServiceType: a,
            accountId: r || ""
        })
    }
    async function Ia() {
        return await chrome.storage.local.get(["isLoggedIn", "isProUser", "sessionType", "translatorServiceType", "apiServiceType", "docTranslatorServiceType", "accountId"])
    }
    async function Sa() {
        await chrome.storage.local.set({
            browserInstanceId: n()
        })
    }
    async function Ca() {
        return (await chrome.storage.local.get(["browserInstanceId"])).browserInstanceId
    }
    async function Aa() {
        const e = await chrome.storage.local.get(["accountId", "a_t", "i_t"]);
        if (e && e.accountId)
            return e.accountId;
        if (e && e.a_t) {
            const t = r(e.a_t)
              , n = r(e.i_t);
            return t.sub || n.sub
        }
    }
    const Ra = "ACCESS_DENIED"
      , Da = "INVALID_REQUEST"
      , Na = "INVALID_GRANT"
      , ba = "GET_TOKEN_ERROR"
      , ka = "INVALID_NONCE";
    class Oa extends Error {
        constructor(e, t) {
            super(e),
            this.name = Ra,
            this.message = e,
            this.httpStatusCode = t
        }
    }
    class Pa extends Error {
        constructor(e, t) {
            super(e),
            this.name = Da,
            this.message = e,
            this.httpStatusCode = t
        }
    }
    class va extends Error {
        constructor(e, t) {
            super(e),
            this.name = Na,
            this.message = e,
            this.httpStatusCode = t
        }
    }
    class xa extends Error {
        constructor(e, t) {
            super(e),
            this.name = ba,
            this.message = e,
            this.httpStatusCode = t
        }
    }
    class Ua extends Error {
        constructor(e) {
            super(e),
            this.name = ka,
            this.message = e
        }
    }
    function Fa(e, t) {
        const n = e.split("?")[1];
        if (n) {
            var a = n.split("&");
            for (let e = 0; e < a.length; e++) {
                const n = a[e].split("=");
                if (decodeURIComponent(n[0]) === t)
                    return decodeURIComponent(n[1])
            }
        }
    }
    async function Ma(e, t, n="https://test.deepl.com/oidc-login") {
        const r = a()
          , o = a()
          , s = await async function(e) {
            const t = await crypto.subtle.digest("SHA-256", (new TextEncoder).encode(e));
            return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }(o);
        return {
            url: n + "?" + new URLSearchParams([["client_id", e], ["redirect_uri", t], ["code_challenge", s], ["code_challenge_method", "S256"], ["nonce", r]]),
            nonce: r,
            codeVerifier: o
        }
    }
    function Ga(e, t) {
        if (200 !== e) {
            if ("invalid_request" === t.error)
                throw new Pa(`dl-oidc (get tokens): invalid request - http status: ${e}`,e);
            if ("invalid_grant" === t.error)
                throw new va(`dl-oidc (get tokens): invalid grant - http status: ${e}`,e);
            throw new xa(`dl-oidc (get tokens): http status: ${e}`,e)
        }
    }
    async function Ha(e, t) {
        let n = t.access_token;
        async function a() {
            return await fetch(e, {
                ...t,
                headers: {
                    ...t.headers,
                    Authorization: n ? `Bearer ${n}` : "None"
                }
            })
        }
        let r = await a();
        return 401 !== r.status && 403 !== r.status || (n = await async function(e, t="https://deepl.com/oidc/token") {
            const n = await fetch(t, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    grant_type: "refresh_token",
                    refresh_token: e
                })
            })
              , a = await n.json();
            return Ga(n.status, a),
            a.access_token
        }(t.refresh_token, t.token_url),
        r = await a()),
        {
            response: r,
            accessToken: n
        }
    }
    function Va(e, t, n) {
        return {
            jsonrpc: "2.0",
            method: e,
            params: t,
            id: n
        }
    }
    let Wa;
    const Ba = "dlCache";
    function ja() {
        return new Promise(((e,t)=>{
            let n = indexedDB.open("dlBrowserExtension", 1);
            n.onerror = function() {
                t("Error creating database.")
            }
            ,
            n.onsuccess = function(t) {
                Wa = t.target.result,
                e()
            }
            ,
            n.onupgradeneeded = function(t) {
                Wa = t.target.result,
                Wa.objectStoreNames.contains(Ba) || Wa.createObjectStore(Ba, {
                    keyPath: "id"
                }),
                e()
            }
        }
        ))
    }
    async function qa(e, t, n) {
        return Wa || await ja(),
        new Promise(((a,r)=>{
            let o = Wa.transaction(n, "readwrite").objectStore(n).put({
                id: e,
                data: t,
                meta: {
                    createdAt: Date.now()
                }
            });
            o.onsuccess = function() {
                a()
            }
            ,
            o.onerror = function(e) {
                r(e)
            }
        }
        ))
    }
    async function $a(e, t) {
        return Wa || await ja(),
        new Promise(((n,a)=>{
            let r = Wa.transaction(t, "readonly").objectStore(t).get(e);
            r.onerror = function(e) {
                a(e)
            }
            ,
            r.onsuccess = function() {
                r.result ? n(r.result) : n(null)
            }
        }
        ))
    }
    function Ka(e) {
        return qa("dlclientstate", e, Ba)
    }
    async function Xa() {
        const e = await $a("dlclientstate", Ba);
        if (!e || !e.meta)
            return;
        return (Date.now() - e.meta.createdAt) / 6e4 > 20 ? void 0 : e.data
    }
    async function Ja(e=!1) {
        if (!e) {
            const e = await Xa();
            if (e)
                return e
        }
        const n = Va("getClientState", {
            v: "20180814"
        }, t())
          , a = await ma()
          , {response: r, accessToken: o} = await Ha("https://w.deepl.com/web", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(n),
            access_token: a.access_token,
            refresh_token: a.refresh_token,
            token_url: "https://w.deepl.com/oidc/token"
        });
        await ha(o, a.refresh_token, a.id_token);
        const s = (await r.json()).result;
        return s && (Ka(s),
        _a(s)),
        s
    }
    async function za(e=!1) {
        const t = async()=>{
            const t = await Ma("chromeExtension", chrome.identity.getRedirectURL(), "https://www.deepl.com/auth/login");
            return new Promise(((n,a)=>{
                chrome.identity.launchWebAuthFlow({
                    interactive: !0,
                    url: e ? `${t.url}#error_loginfailed` : t.url
                }, (async e=>{
                    if (!e) {
                        const e = chrome.runtime.lastError.message;
                        return console.error("response url undefined", e),
                        ht(`login - response url undefined. ${e}`),
                        /The user did not approve access/gm.test(e) ? n() : a()
                    }
                    try {
                        const a = await async function(e, t, n, a, o, s="https://deepl.com/oidc/token") {
                            const c = Fa(n, "code");
                            if (!c) {
                                const e = Fa(n, "error");
                                if ("access_denied" === e)
                                    throw new Oa("dl-oidc (get tokens): access denied - undefined code");
                                if ("invalid_request" === e)
                                    throw new Pa("dl-oidc (get tokens): invalid request - undefined code")
                            }
                            const i = await fetch(`${s}`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: new URLSearchParams({
                                    client_id: e,
                                    code_verifier: o,
                                    code: c,
                                    grant_type: "authorization_code",
                                    redirect_uri: t
                                })
                            })
                              , l = await i.json();
                            if (Ga(i.status, l),
                            r(l.id_token).nonce !== a)
                                throw new Ua("dl-oidc (get tokens): invalid nonce");
                            return l
                        }("chromeExtension", chrome.identity.getRedirectURL(), e, t.nonce, t.codeVerifier, "https://w.deepl.com/oidc/token")
                          , o = await ha(a.access_token, a.refresh_token, a.id_token);
                        try {
                            await Ja(!0),
                            Xn(),
                            oa(),
                            o && await Zn({
                                sessionType: o,
                                trigger: "LOGIN"
                            })
                        } catch (e) {
                            console.error(e)
                        }
                        await La(),
                        n()
                    } catch (e) {
                        console.error(e);
                        try {
                            cn({
                                errorCode: e.name,
                                errorMessage: e.message
                            })
                        } catch (e) {
                            console.error(e)
                        }
                        a(e)
                    }
                }
                ))
            }
            ))
        }
        ;
        try {
            await t()
        } catch (e) {
            za(!0)
        }
    }
    async function Ya(e) {
        const t = await ma()
          , n = `https://www.deepl.com/auth/logout?${new URLSearchParams([["id_token_hint", t.id_token], ["post_logout_redirect_uri", chrome.identity.getRedirectURL()]])}`;
        chrome.identity.launchWebAuthFlow({
            url: n,
            interactive: !0
        }, (async()=>{
            await Ea(),
            await sa(),
            await pa(),
            await Jn({
                trigger: e.trigger,
                reason: e.reason
            }),
            await Ja(!0)
        }
        ))
    }
    async function Za(e, t, n, a) {
        const r = await ma()
          , o = await ya();
        let s = r && r.access_token && o ? "https://api.deepl.com/jsonrpc?client=chrome-extension,1.7.0" : "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.7.0";
        a && (s = r && r.access_token && o ? "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.7.0" : "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.7.0");
        try {
            const {response: a, accessToken: o} = await Ha(s, {
                method: "POST",
                headers: {
                    "Content-Type": t
                },
                body: e,
                access_token: r.access_token,
                refresh_token: r.refresh_token,
                token_url: "https://w.deepl.com/oidc/token"
            })
              , c = await ha(o, r.refresh_token, r.id_token);
            if (c)
                try {
                    await Zn({
                        sessionType: c,
                        trigger: "TRANSLATION"
                    })
                } catch (e) {
                    console.log(e)
                }
            try {
                await Ja()
            } catch (e) {
                console.error(`Failed to get the client state ${e.message}`)
            }
            let i = function(e, t, n) {
                let a;
                try {
                    a = JSON.parse(e)
                } catch (e) {
                    throw 200 === t ? new It("JSON_RPC: Parsing of response object failed") : t >= 500 && n ? new St(`FPT failed: Http status code ${t}`) : new Ct(t.toString(),403 === t ? `Translation failed: Http status code ${t} forbidden request. re-authenticating makes no difference.` : `Translation failed: Http status code ${t}`)
                }
                if ("2.0" !== a.jsonrpc || void 0 !== a.result && 200 !== t || void 0 === a.result && void 0 === a.error)
                    throw new It("JSON_RPC: missing field, wrong id, proper result without 200 status, or missing data");
                if (a.error) {
                    const e = a.error;
                    if (void 0 === e.code)
                        throw new It('JSON_RPC: Missing field "code" in error response');
                    throw new Ct(e.code.toString(),e.message)
                }
                if (200 !== t)
                    throw new Ct(t.toString(),`Http status code ${t}`);
                return a
            }(await a.text(), a.status, n);
            return {
                data: i,
                status: a.status
            }
        } catch (e) {
            throw e.name !== Ra && e.name !== Da && e.name !== Na && e.name !== ba && e.name !== ka && e.name !== Tt && e.name !== yt && e.name !== ft || setTimeout((()=>{
                Ya({
                    trigger: De,
                    reason: e.name
                })
            }
            ), 5e3),
            e
        }
    }
    async function Qa(e, t, n=(e=>e), a, r, o) {
        const s = function(e, t, n) {
            return {
                jsonrpc: "2.0",
                method: e,
                params: t,
                id: n
            }
        }(e, t, a)
          , c = n(JSON.stringify(s), s);
        return (await Za(c, "application/json; charset=utf-8", r, o)).data.result
    }
    async function er(e) {
        let t, n = {};
        for (const t in e.weights)
            e.weights[t] > 0 && (n[t] = e.weights[t]);
        t = e.isHtml ? e.sourceTexts : e.sourceTexts.map((e=>e.slice(0, 4999)));
        const a = ["EN-US", "EN-GB", "PT-PT", "PT-BR"].includes(e.targetLangCode?.toUpperCase());
        let r = e.targetLangCode?.toUpperCase();
        a && (r = e.targetLangCode?.toUpperCase().slice(0, 2));
        const o = {
            texts: e.isWriteRequest ? e.sourceTexts.map((e=>({
                text: e,
                requestAlternatives: 4
            }))) : t.map((e=>({
                text: e
            }))),
            ...e.isHtml && {
                html: "enabled"
            },
            ...!e.isHtml && {
                splitting: e.splitting ? e.splitting : "paragraphs"
            },
            lang: {
                target_lang: r,
                source_lang_user_selected: "auto" === e.sourceLang ? "auto" : e.sourceLang.toUpperCase(),
                preference: {
                    weight: n
                }
            },
            commonJobParams: {
                regionalVariant: e.regionalVariant && a ? e.regionalVariant : void 0,
                ...e.isWriteRequest && {
                    mode: "write"
                },
                ...e.formality && {
                    formality: e.formality
                }
            }
        };
        let s = 1;
        const c = Date.now();
        t.forEach((e=>s += (e.match(/[i]/g) || []).length)),
        o.timestamp = c - c % s + s;
        const i = await Qa("LMT_handle_texts", o, ((e,t)=>e = (t.id + 3) % 13 == 0 || (t.id + 5) % 29 == 0 ? e.replace('"method":"', '"method" : "') : e.replace('"method":"', '"method": "')), e.id, e.isHtml, e.isWriteRequest);
        return {
            texts: i.texts.map((e=>e.text)),
            sourceLang: i.lang.toUpperCase(),
            detectedLanguages: i.detectedLanguages
        }
    }
    const tr = new Map([["ZH_EN", "chinese-english"], ["EN_ZH", "english-chinese"], ["NL_EN", "dutch-english"], ["EN_NL", "english-dutch"], ["FR_EN", "french-english"], ["EN_FR", "english-french"], ["FR_DE", "french-german"], ["DE_FR", "german-french"], ["FR_PT", "french-portuguese"], ["PT_FR", "portuguese-french"], ["FR_ES", "french-spanish"], ["ES_FR", "spanish-french"], ["DE_EN", "german-english"], ["EN_DE", "english-german"], ["DE_PT", "german-portuguese"], ["PT_DE", "portuguese-german"], ["DE_ES", "german-spanish"], ["ES_DE", "spanish-german"], ["IT_EN", "italian-english"], ["EN_IT", "english-italian"], ["JA_EN", "japanese-english"], ["EN_JA", "english-japanese"], ["PL_EN", "polish-english"], ["EN_PL", "english-polish"], ["PT_EN", "portuguese-english"], ["EN_PT", "english-portuguese"], ["PT_ES", "portuguese-spanish"], ["ES_PT", "spanish-portuguese"], ["RU_EN", "russian-english"], ["EN_RU", "english-russian"], ["ES_EN", "spanish-english"], ["EN_ES", "english-spanish"]]);
    async function nr(e) {
        const t = function(e, t) {
            const n = `${e.toUpperCase()}_ ${t.toUpperCase()}`;
            return tr.get(n)
        }(ar(e.sourceLang), ar(e.targetLang))
          , n = encodeURIComponent(e.text)
          , a = `https://www-app.linguee.com/${t}/search?dlApp=BrowserExtension&il=${e.interfaceLang}&query=${n}`;
        let r = async function(e) {
            let t;
            if (200 !== e.status)
                throw 404 === e.status ? (console.error("Dictionary Entry not found: 404"),
                new At(Lt)) : (console.error("Dictionary Server Error"),
                new At(Et));
            {
                try {
                    t = await e.text()
                } catch (e) {
                    throw new At(Et)
                }
                const n = /href=["']([^"']*)["']/g;
                t = t.replace(n, "")
            }
            return t
        }(await fetch(a));
        return r
    }
    function ar(e) {
        return ["EN-US", "EN-GB", "PT-PT", "PT-BR"].includes(e) ? ["EN-US", "EN-GB"].includes(e) ? "EN" : ["PT-PT", "PT-BR"].includes(e) ? "PT" : e : e
    }
    function rr(e, t) {
        const n = 1e-5;
        return n * Math.floor((.97 * e + t) / n)
    }
    async function or(e) {
        const t = await ga(["selectedTargetLanguage"]);
        chrome.tabs.sendMessage(e, {
            action: "dlTranslateInline",
            targetLang: t.selectedTargetLanguage
        })
    }
    async function sr(e) {
        await ua();
        const n = await ga(["selectedTargetLanguage", "session", "installationId", "regionalVariant"])
          , a = new Date
          , r = {
            sourceLang: "auto",
            targetLangCode: n.selectedTargetLanguage,
            sessionId: n.session.id,
            id: t(),
            isHtml: !0,
            sourceTexts: e.payload.texts,
            regionalVariant: n.regionalVariant
        };
        let o;
        try {
            o = await er(r)
        } catch (t) {
            try {
                ln({
                    errorCode: t.name,
                    errorMessage: t.message,
                    domainName: e.payload.domainName,
                    targetLang: n.selectedTargetLanguage,
                    websiteLanguage: e.payload.sourceLang,
                    trigger: e.payload.trigger,
                    characterCount: e.payload.texts.reduce(((e,t)=>e + t.length), 0)
                })
            } catch (e) {
                console.log(e)
            }
            throw t
        }
        Br();
        const s = {
            isFirstTime: e.payload.isFirstTime,
            processingTimeInMs: new Date - a
        };
        try {
            sn({
                installationId: n.installationId,
                trigger: e.payload.trigger,
                websiteLanguage: e.payload.sourceLang,
                targetLanguage: n.selectedTargetLanguage,
                characterCount: e.payload.texts.reduce(((e,t)=>e + t.length), 0),
                translationPerformance: s,
                domainName: e.payload.domainName
            })
        } catch (e) {
            console.error(e)
        }
        return o.texts
    }
    async function cr(e) {
        await ua();
        const n = await ga(["selectedTargetLanguage", "session", "installationId", "languagePreferenceForReading", "regionalVariant"])
          , a = e.payload.nicheIntegration || we
          , r = {
            sourceLang: "auto",
            targetLangCode: n.selectedTargetLanguage,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: e.payload.requests.map((e=>e.text)),
            weights: n.languagePreferenceForReading,
            splitting: "newlines",
            regionalVariant: n.regionalVariant
        };
        let o;
        try {
            o = await er(r)
        } catch (t) {
            try {
                ln({
                    errorCode: t.name,
                    errorMessage: t.message,
                    domainName: e.payload.domainName,
                    targetLang: n.selectedTargetLanguage,
                    websiteLanguage: e.payload.sourceLang,
                    trigger: e.payload.trigger,
                    characterCount: e.payload.requests.reduce(((e,t)=>e + t.text.length), 0)
                })
            } catch (e) {
                console.log(e)
            }
            throw t
        }
        Br();
        try {
            if (o.detectedLanguages) {
                for (const e in o.detectedLanguages)
                    (n.languagePreferenceForReading[e] || 0 === n.languagePreferenceForReading[e]) && (n.languagePreferenceForReading[e] = rr(n.languagePreferenceForReading[e], o.detectedLanguages[e]));
                chrome.storage.sync.set({
                    languagePreferenceForReading: n.languagePreferenceForReading
                })
            }
        } catch (e) {
            console.error(e)
        }
        try {
            sn({
                installationId: n.installationId,
                trigger: e.payload.trigger,
                websiteLanguage: e.payload.sourceLang,
                targetLanguage: n.selectedTargetLanguage,
                characterCount: e.payload.requests.reduce(((e,t)=>e + t.text.length), 0),
                domainName: e.payload.domainName,
                nicheIntegration: a
            })
        } catch (e) {
            console.error(e)
        }
        return o.texts.map((e=>({
            text: e,
            detected_source_language: o.sourceLang
        })))
    }
    async function ir(e) {
        await ua();
        const n = await ga(["targetLanguageUserInput", "session", "installationId", "languagePreferenceForWriting", "regionalVariant"])
          , a = e.payload.requests
          , r = e.payload.targetLang || n.targetLanguageUserInput
          , o = e.payload.platformBehavior || we
          , s = {
            sourceLang: "auto",
            targetLangCode: r,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: a.map((e=>e.text)) || [],
            weights: n.languagePreferenceForWriting,
            splitting: "paragraphs",
            regionalVariant: n.regionalVariant,
            ...e.payload.isHtml && {
                isHtml: e.payload.isHtml
            },
            ...e.payload.formality && {
                formality: e.payload.formality
            }
        };
        let c;
        try {
            c = await er(s)
        } catch (t) {
            try {
                ln({
                    errorCode: t.name,
                    errorMessage: t.message,
                    domainName: e.payload.domainName,
                    targetLang: r,
                    websiteLanguage: e.payload.websiteLanguage,
                    trigger: g,
                    characterCount: a.reduce(((e,t)=>e + t.text.length), 0)
                })
            } catch (e) {
                console.log(e)
            }
            throw t
        }
        if (Br(),
        c.sourceLang === n.targetLanguageUserInput && a[0].text.length > 15) {
            let e;
            if ("EN" === r)
                e = "DE";
            else
                e = "EN";
            let n = await er({
                ...s,
                targetLangCode: e,
                id: t()
            });
            const a = await er({
                ...s,
                sourceTexts: n.texts,
                id: t()
            });
            c.texts = a.texts
        }
        try {
            if (c.detectedLanguages) {
                for (const e in c.detectedLanguages)
                    (n.languagePreferenceForWriting[e] || 0 === n.languagePreferenceForWriting[e]) && (n.languagePreferenceForWriting[e] = rr(n.languagePreferenceForWriting[e], c.detectedLanguages[e]));
                chrome.storage.sync.set({
                    languagePreferenceForWriting: n.languagePreferenceForWriting
                })
            }
        } catch (e) {
            console.error(e)
        }
        try {
            sn({
                installationId: n.installationId,
                trigger: g,
                websiteLanguage: c.sourceLang,
                targetLanguage: r,
                characterCount: a.reduce(((e,t)=>e + t.text.length), 0),
                domainName: e.payload.domainName,
                nicheIntegration: o
            })
        } catch (e) {
            console.error(e)
        }
        return [{
            detected_source_language: c.sourceLang,
            text: c.texts[0],
            texts: c.texts
        }]
    }
    async function lr(e) {
        await ua();
        const n = await ga(["targetLanguage", "session", "installationId", "regionalVariant"])
          , a = e.payload.requests
          , r = e.payload.sourceLang
          , o = e.payload.targetLang || n.targetLanguage
          , s = Ae
          , c = {
            sourceLang: r || "auto",
            targetLangCode: o,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: a.map((e=>e.text)) || [],
            splitting: "newlines",
            regionalVariant: n.regionalVariant
        };
        let i;
        try {
            i = await er(c)
        } catch (t) {
            try {
                ln({
                    errorCode: t.name,
                    errorMessage: t.message,
                    domainName: e.payload.domainName,
                    targetLang: o,
                    trigger: g,
                    characterCount: a.reduce(((e,t)=>e + t.text.length), 0)
                })
            } catch (e) {
                console.log(e)
            }
            throw t
        }
        Br();
        try {
            sn({
                installationId: n.installationId,
                trigger: l,
                websiteLanguage: i.sourceLang,
                targetLanguage: o,
                characterCount: a.reduce(((e,t)=>e + t.text.length), 0),
                domainName: e.payload.domainName,
                nicheIntegration: s
            })
        } catch (e) {
            console.error(e)
        }
        return [{
            detected_source_language: i.sourceLang,
            text: i.texts[0],
            texts: i.texts
        }]
    }
    async function gr(e) {
        await ua();
        const n = await ga(["selectedTargetLanguage", "session", "installationId", "regionalVariant"])
          , a = e.payload.message
          , r = {
            sourceLang: "auto",
            targetLangCode: n.selectedTargetLanguage,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: [a],
            splitting: "paragraphs",
            regionalVariant: n.regionalVariant
        };
        let o;
        try {
            o = await er(r)
        } catch (t) {
            try {
                Rn({
                    errorCode: t.name,
                    errorMessage: t.message,
                    domainName: e.payload.domainName,
                    targetLang: n.selectedTargetLanguage,
                    messageLang: e.payload.messageLang,
                    messageLength: a.length
                })
            } catch (e) {
                console.log(e)
            }
            throw t
        }
        Br();
        try {
            sn({
                installationId: n.installationId,
                trigger: e.payload.trigger,
                websiteLanguage: e.payload.messageLang,
                targetLanguage: n.selectedTargetLanguage,
                characterCount: a.length,
                domainName: e.payload.domainName,
                nicheIntegration: Ce
            })
        } catch (e) {
            console.error(e)
        }
        return [{
            detected_source_language: o.sourceLang,
            text: o.texts[0]
        }]
    }
    async function dr(e) {
        await ua();
        const n = await ga(["selectedTargetLanguage", "session", "installationId", "regionalVariant"])
          , a = e.payload.message
          , r = {
            sourceLang: "auto",
            targetLangCode: n.selectedTargetLanguage,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: [a],
            splitting: "paragraphs",
            regionalVariant: n.regionalVariant
        };
        let o;
        try {
            o = await er(r)
        } catch (t) {
            try {
                An({
                    errorCode: t.name,
                    errorMessage: t.message,
                    domainName: e.payload.domainName,
                    targetLang: n.selectedTargetLanguage,
                    messageLang: e.payload.messageLang,
                    messageLength: a.length,
                    numberOfLanguages: 1,
                    numberOfMessages: 1,
                    translator: He
                })
            } catch (e) {
                console.log(e)
            }
            throw t
        }
        Br();
        try {
            Cn({
                messageLang: e.payload.messageLang,
                targetLang: n.selectedTargetLanguage,
                messageLength: a.length,
                numberOfLanguages: 1,
                numberOfMessages: 1,
                translator: He
            }),
            sn({
                installationId: n.installationId,
                trigger: e.payload.trigger,
                websiteLanguage: e.payload.messageLang,
                targetLanguage: n.selectedTargetLanguage,
                characterCount: a.length,
                domainName: e.payload.domainName,
                nicheIntegration: Se
            })
        } catch (e) {
            console.error(e)
        }
        return [{
            detected_source_language: o.sourceLang,
            text: o.texts[0]
        }]
    }
    async function ur(e) {
        await ua();
        const n = await ga(["selectedTargetLanguage", "session", "installationId", "regionalVariant"])
          , a = e.payload.messages
          , r = {
            sourceLang: "auto",
            targetLangCode: n.selectedTargetLanguage,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: a,
            splitting: "paragraphs",
            regionalVariant: n.regionalVariant
        };
        let o;
        try {
            o = await er(r)
        } catch (t) {
            try {
                An({
                    errorCode: t.name,
                    errorMessage: t.message,
                    domainName: e.payload.domainName,
                    targetLang: n.selectedTargetLanguage,
                    messageLang: e.payload.messageLang,
                    messageLength: a.reduce(((e,t)=>e + t.length), 0),
                    numberOfLanguages: e.payload.detectedLanguages?.length,
                    numberOfMessages: a.length,
                    translator: Ge
                })
            } catch (e) {
                console.log(e)
            }
            throw t
        }
        Br();
        try {
            Cn({
                messageLang: e.payload.messageLang,
                targetLang: n.selectedTargetLanguage,
                messageLength: a.reduce(((e,t)=>e + t.length), 0),
                numberOfLanguages: e.payload.detectedLanguages?.length,
                numberOfMessages: a.length,
                translator: Ge
            }),
            sn({
                installationId: n.installationId,
                trigger: e.payload.trigger,
                websiteLanguage: e.payload.messageLang,
                targetLanguage: n.selectedTargetLanguage,
                characterCount: a.reduce(((e,t)=>e + t.length), 0),
                domainName: e.payload.domainName,
                nicheIntegration: Se
            })
        } catch (e) {
            console.error(e)
        }
        return [{
            detected_source_language: o.sourceLang,
            texts: o.texts
        }]
    }
    async function hr(e) {
        await ua();
        const n = await ga(["session", "installationId", "regionalVariant"])
          , {sourceLang: a, targetLang: r, text: o, trigger: s} = e.payload;
        let c, i = "";
        const l = {
            sourceLang: a,
            targetLangCode: r,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: [o],
            splitting: "paragraphs",
            regionalVariant: n.regionalVariant
        };
        let g;
        try {
            g = await er(l),
            i = g.texts?.[0] || ""
        } catch (e) {
            c = e.message
        }
        Br();
        try {
            sn({
                installationId: n.installationId,
                trigger: s,
                websiteLanguage: a,
                targetLanguage: r,
                characterCount: o.length,
                nicheIntegration: Ie
            })
        } catch (c) {
            console.error(c)
        }
        return [i, c]
    }
    async function pr(e) {
        try {
            wn({
                language: e.payload.language,
                domainName: e.payload.domainName
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function mr(e) {
        try {
            dn({
                domainName: e
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function Tr(e) {
        try {
            un({
                domainName: e.domainName,
                extensionOpenedFrom: kt(e.extensionContext)
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function yr(e) {
        try {
            hn({
                logoClickedFrom: Ot(e.extensionContext)
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function fr() {
        try {
            yn()
        } catch (e) {
            console.error(e)
        }
    }
    async function Lr() {
        try {
            fn()
        } catch (e) {
            console.error(e)
        }
    }
    async function Er(e) {
        try {
            Ln({
                uiFunction: e.uiFunction,
                uiLocation: e.uiLocation,
                nicheIntegration: e.nicheIntegration || we
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function wr(e) {
        try {
            En({
                settingType: e.settingType,
                newValue: e.newValue,
                uiFunction: e.uiFunction,
                uiLocation: e.uiLocation,
                domainName: e.domainName
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function _r(e) {
        try {
            _n({
                translationType: e.translationType,
                domainName: e.domainName
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function Ir(e) {
        try {
            In({
                newPosition: e.newPosition
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function Sr(e) {
        try {
            Sn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Cr(e) {
        try {
            Dn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Ar(e) {
        try {
            kn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Rr(e) {
        try {
            Nn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Dr(e) {
        try {
            On(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Nr(e) {
        try {
            bn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function br(e) {
        try {
            Un(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function kr(e) {
        try {
            Pn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Or(e) {
        try {
            vn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Pr(e) {
        try {
            Gn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function vr() {
        za()
    }
    async function xr() {
        Ya({
            trigger: Re
        })
    }
    async function Ur() {
        return {
            isLoggedIn: await Ta(),
            isProUser: await ya()
        }
    }
    async function Fr(e) {
        switch (e.type) {
        case w:
            {
                const e = await chrome.storage.sync.get(["notificationsViewed"]);
                if (e.notificationsViewed && e.notificationsViewed.hintKeyboardShortcut)
                    return;
                await chrome.storage.sync.set({
                    notificationsViewed: {
                        ...e.notificationsViewed,
                        hintKeyboardShortcut: !0
                    }
                });
                break
            }
        }
        try {
            pn({
                notificationType: e.type
            })
        } catch (e) {
            console.error(e)
        }
        const t = await chrome.tabs.query({
            active: !0,
            currentWindow: !0
        });
        chrome.tabs.sendMessage(t[0].id, {
            action: "dlShowNotification",
            payload: e
        })
    }
    async function Mr() {
        return await chrome.commands.getAll()
    }
    async function Gr(e) {
        const t = await Mr();
        try {
            mn({
                shortcutType: e.shortcutType,
                location: e.location,
                shortcut: t.filter((t=>t.name === e.shortcutType))[0].shortcut,
                nicheIntegration: e.nicheIntegration || we
            })
        } catch (e) {
            console.error(e)
        }
    }
    async function Hr(e) {
        Tn({
            uiAction: e.uiAction,
            nicheIntegration: e.nicheIntegration || we
        })
    }
    function Vr(e) {
        chrome.tabs.query({
            active: !0,
            currentWindow: !0
        }, (function(t) {
            chrome.tabs.sendMessage(t[0].id, {
                action: "dlTranslateSelectionRightClick",
                payload: e
            })
        }
        ))
    }
    async function Wr(e) {
        try {
            xn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Br() {
        const e = await chrome.storage.sync.get(["isReviewPopupShown", "successfulTranslations"])
          , t = e.successfulTranslations + 1;
        let n = e.isReviewPopupShown;
        if (!n && t >= 5) {
            const e = await chrome.tabs.query({
                active: !0,
                currentWindow: !0
            });
            chrome.tabs.sendMessage(e[0].id, {
                action: "dlShowAskForAReviewPopup"
            }),
            n = !0
        }
        await chrome.storage.sync.set({
            isReviewPopupShown: n,
            successfulTranslations: t
        })
    }
    async function jr(e, t) {
        let n = (e=>{
            let t = o.find((t=>t.langCode.toUpperCase() === e.toUpperCase()));
            return t || (t = o.find((t=>t.langCode.substring(0, 2).toUpperCase() === e.substring(0, 2).toUpperCase())),
            t)
        }
        )(e.lang);
        const a = {
            lang: n.langCodeForSpeech,
            onEvent: function(e) {
                "end" === e.type && chrome.tabs.sendMessage(t, {
                    action: "dlVoiceOverStopped"
                }),
                "error" == e.type && chrome.tabs.sendMessage(t, {
                    action: "dlVoiceOverErrorOccurred"
                })
            }
        };
        (function() {
            const e = navigator?.userAgentData?.platform || navigator?.platform || void 0;
            return e && -1 !== e?.toUpperCase().indexOf("MAC")
        }
        )() && (a.rate = .9,
        n.voice && ye === chrome.runtime.id && (a.voiceName = n.voice)),
        await chrome.tts.speak(e.text, a)
    }
    async function qr() {
        return (await chrome.tts.getVoices()).map((e=>e.lang.substring(0, 2).toUpperCase()))
    }
    async function $r() {
        return chrome.tts.stop()
    }
    async function Kr(e) {
        try {
            Fn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Xr(e) {
        try {
            Vn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Jr(e) {
        try {
            Mn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function zr(e) {
        try {
            Wn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Yr(e) {
        return await nr(e)
    }
    async function Zr(e) {
        try {
            Bn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function Qr(e) {
        try {
            jn()
        } catch (e) {
            console.error(e)
        }
    }
    async function eo(e) {
        try {
            qn()
        } catch (e) {
            console.error(e)
        }
    }
    async function to({eventType: e, zendeskMetaData: t}) {
        try {
            Kn(e, t)
        } catch (e) {
            console.error(e)
        }
    }
    async function no(e) {
        try {
            $n(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function ao(e) {
        try {
            zn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function ro(e) {
        try {
            Yn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function oo(e) {
        try {
            Qn(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function so(e) {
        try {
            ea(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function co({eventType: e, deeplWriteMetaData: t}) {
        try {
            aa(e, t)
        } catch (e) {
            console.error(e)
        }
    }
    async function io(e) {
        await ua();
        const n = await ga(["selectedTargetLanguage", "session"])
          , a = e.payload.requests
          , r = {
            sourceLang: "auto",
            targetLangCode: n.selectedTargetLanguage,
            sessionId: n.session.id,
            id: t(),
            sourceTexts: a.map((e=>e.text)) || [],
            isWriteRequest: !0
        };
        let o;
        return o = await er(r),
        [{
            detected_source_language: o.sourceLang,
            text: o.texts[0],
            texts: o.texts
        }]
    }
    async function lo({eventType: e, acceptOrRevertMetadata: t}) {
        try {
            ca(e, t)
        } catch (e) {
            console.error(e)
        }
    }
    async function go(e) {
        try {
            ia(e)
        } catch (e) {
            console.error(e)
        }
    }
    async function uo(e) {
        try {
            la(e)
        } catch (e) {
            console.error(e)
        }
    }
    function ho(e) {
        let t;
        try {
            t = new URL(e)
        } catch (e) {
            return !1
        }
        return "http:" === t.protocol || "https:" === t.protocol
    }
    const po = {
        developer_tools: "DEVELOPER_TOOLS",
        settings_page: "SETTINGS_PAGE",
        settings_writing: "SETTINGS_WRITING",
        settings_reading: "SETTINGS_READING",
        onboarding: "ONBOARDING"
    }
      , mo = "dev-page.html"
      , To = "settings.html"
      , yo = "settings.html#inline-translation"
      , fo = "settings.html#input-translation"
      , Lo = "onboarding.html";
    function Eo({payload: e}) {
        const {destination: t} = e;
        if (void 0 === t)
            return;
        let n = "";
        switch (t) {
        case po.developer_tools:
            n = wo(mo);
            break;
        case po.settings_page:
            n = wo(To);
            break;
        case po.settings_writing:
            n = wo(fo);
            break;
        case po.settings_reading:
            n = wo(yo);
            break;
        case po.onboarding:
            n = wo(Lo)
        }
        n && chrome.tabs.create({
            url: n,
            active: !0
        })
    }
    function wo(e) {
        return chrome.runtime.getURL(e)
    }
    function _o(e, t, n) {
        switch (ut() && console.log(t.tab ? `message from a content script: ${t.tab.url} with tab id: ${t.tab.id}. action: ${e.action}` : `message from the extension with action: ${e.action}`),
        e.action) {
        case "dlRequestHtmlTranslation":
            sr(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestInlineTranslation":
            cr(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTriggerTranslateInline":
            or(t.tab.id);
            break;
        case "dlRequestInputTranslation":
            ir(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestGmailReceivedEmailTranslation":
            lr(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestWhatsAppMessageTranslation":
            dr(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestTwitterTweetTranslation":
            gr(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestZendeskMessageTranslation":
            hr(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestWhatsAppMessagesTranslation":
            ur(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackDetectLanguage":
            pr(e),
            n();
            break;
        case "dlRequestLogin":
            vr().then((()=>n(!0))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestLogout":
            xr().then((()=>n(!0))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlGetAppSettings":
            chrome.storage.sync.get(null, (function(e) {
                n(e)
            }
            ));
            break;
        case "dlUpdateAppSettings":
            chrome.storage.sync.set(e.payload, (function() {
                n(e.payload)
            }
            ));
            break;
        case "dlTranslatedInputTextNotSet":
            gn({
                errorCode: _t,
                errorMessage: "The translated text could not be set",
                domainName: e.payload
            }),
            n();
            break;
        case "dlGetUserState":
            Ur().then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlExternalURLRedirect":
            ot(e.payload),
            n();
            break;
        case "dlOpenInternalPage":
            Eo(e),
            n();
            break;
        case "dlTrackInputTranslationInjection":
            mr(e.payload),
            n();
            break;
        case "dlTrackExtensionOpenedEvent":
            Tr(e.payload),
            n();
            break;
        case "dlTrackLogoClickedEvent":
            yr(e.payload),
            n();
            break;
        case "dlTrackDocTransClick":
            fr(),
            n();
            break;
        case "dlTrackRecommendToAFriendClick":
            Lr(),
            n();
            break;
        case "dlSendNotification":
            Fr(e.payload),
            n();
            break;
        case "dlCheckCommandShortcuts":
            Mr().then((e=>n(e)));
            break;
        case "dlTrackUseOfShortcut":
            Gr(e.payload),
            n();
            break;
        case "dlTrackUiAction":
            Hr(e.payload),
            n();
            break;
        case "dlTrackInlineSettingOpened":
            Er(e.payload),
            n();
            break;
        case "dlTrackSettingChanged":
            wr(e.payload),
            n();
            break;
        case "dlTrackUILocationClicked":
            so(e.payload),
            n();
            break;
        case "dlTrackRightClick":
            _r(e.payload),
            n();
            break;
        case "dlTrackInlinePositionChange":
            Ir(e.payload),
            n();
            break;
        case "dlTrackInlineDragStart":
            Sr(),
            n();
            break;
        case "dlTrackFptHide":
            Cr(e.payload);
            break;
        case "dlTrackInlineCopy":
            Rr(e.payload),
            n();
            break;
        case "dlTrackInlineListen":
            Nr(e.payload),
            n();
            break;
        case "dlTrackIconHover":
            Ar(e.payload),
            n();
            break;
        case "dlTrackVoiceOverStops":
            br(e.payload),
            n();
            break;
        case "dlTrackOnboardingStepChange":
            Dr(e.payload),
            n();
            break;
        case "dlTrackOnboardingOpenExternalLink":
            kr(e.payload),
            n();
            break;
        case "dlTrackReadMore":
            Or(e.payload),
            n();
            break;
        case "dlTrackLandingOnWebsite":
            Wr(e.payload),
            n();
            break;
        case "dlTrackGDocsReplaceText":
            Pr(e.payload),
            n();
            break;
        case "dlTextToSpeech":
            jr(e.payload, t.tab.id).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlGetDictionary":
            Yr(e.payload).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlGetSupportedVoices":
            qr(e.payload).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlStopSpeech":
            $r(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackOpenInputHighlighter":
            Kr(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackOpenInlineHighlighter":
            Xr(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackCloseInputHighlighter":
            Jr(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackCloseInlineHighlighter":
            zr(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackDictionaryStatus":
            Zr(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackOpenDictionarySection":
            Qr(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackDisabledDictionaryHover":
            eo(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackZendeskCustomizationEvent":
            to(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackDeeplWriteEvent":
            co(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackLingueeErrorData":
            no(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackGdocsMaxCharExceededShown":
            ao(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackGDocsMaxCharExceededTryProClicked":
            ro(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackOnboardingModalShown":
            oo(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlRequestImproveWriting":
            io(e).then((e=>n(e))).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackTranslateAcceptOrRevertEvent":
            lo(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackCustomizationEnabledEvent":
            go(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ));
            break;
        case "dlTrackGmailCharLimitReached":
            uo(e.payload).then((()=>n())).catch((e=>{
                n(Rt(e))
            }
            ))
        }
        return !0
    }
    function Io(e) {
        switch (console.log(`Command "${e}" triggered`),
        e) {
        case $:
            chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, (function(e) {
                chrome.tabs.sendMessage(e[0].id, {
                    action: "dlTriggerTranslationShortcut"
                })
            }
            ));
            break;
        case K:
            chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, (function(e) {
                chrome.tabs.sendMessage(e[0].id, {
                    action: "dlChangeLanguageShortcut"
                })
            }
            ))
        }
    }
    function So(e) {
        try {
            Ja(!0),
            chrome.runtime.setUninstallURL("https://deepl.qualtrics.com/jfe/form/SV_eJxAD8c7J5hqSRU"),
            e.reason === chrome.runtime.OnInstalledReason.UPDATE && console.log(`Update from version ${e.previousVersion} to ${chrome.runtime.getManifest().version} was completed`),
            async function() {
                let e = !1;
                const t = await chrome.storage.sync.get(null)
                  , a = {
                    settingSchemeVersion: 2.4,
                    blacklistDomains: [],
                    blacklistDomainsForReading: [],
                    blacklistDomainsForWriting: [],
                    languagesForTranslation: o.reduce(((e,t)=>({
                        ...e,
                        [t.langCode]: s
                    })), {}),
                    selectedTargetLanguage: it(),
                    isTargetLanguageConfirmed: !1,
                    deepLProApiKey: {
                        IS_PROD: !0,
                        BASE_URLS: {
                            dapApi: "https://s.deepl.com/chrome/statistics",
                            toolingApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
                            toolingApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
                            toolingWriteApiPro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
                            toolingWriteApi: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.7.0",
                            login: "https://www.deepl.com/auth/login",
                            token: "https://w.deepl.com/oidc/token",
                            logout: "https://www.deepl.com/auth/logout",
                            feedbackSurvey: "https://deepl.typeform.com/to/MkMfP2Y6",
                            uninstallSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eJxAD8c7J5hqSRU",
                            deeplPro: "https://www.deepl.com/pro",
                            deeplTranslator: "https://www.deepl.com/translator",
                            deeplDoctrans: "https://www.deepl.com/translator/files",
                            extensionStorePage: "https://bit.ly/DeepL-Chrome",
                            supportArticle: "https://support.deepl.com/hc/articles/4407580229522",
                            deeplSupport: "https://support.deepl.com/hc",
                            chromeWebstore: "https://chrome.google.com/webstore/detail/deepl-translate-reading-w/cofdbpoegempjloogbagkncekinflcnj",
                            edgeWebstore: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-reading-/fancfknaplihpclbhbpclnmmjcjanbaf",
                            clientStateApi: "https://w.deepl.com/web"
                        },
                        APP_VERSION: "1.7.0",
                        FEATURE_FLAGS: {
                            TRANSLATE_INPUT: !0,
                            PAGE_TRANSLATION: !0,
                            IMPROVE_WRITING: !0,
                            DOCUMENT_TRANSLATION: !0,
                            RECOMMEND_TO_A_FRIEND: !0,
                            PRO_LOGIN: !0,
                            WEBPAGE_CUSTOMIZER: !0,
                            GDOCS_INTEGRATION: !0,
                            ZENDESK_INTEGRATION: !0,
                            GMAIL_INTEGRATION: !0,
                            ON_INSTALL_ONBOARDING: !0,
                            WHATSAPP_TRANSLATE_ALL_CHAT: !1,
                            DEEPL_WRITE_GENERAL: !1,
                            DEEPL_WRITE_GDOCS: !0
                        }
                    }.DEEPL_PRO_API_KEY,
                    installationId: n(),
                    enableFullPageTranslation: !0,
                    enableInputTranslation: !0,
                    enableInlineTranslation: !0,
                    languagePreferenceForWriting: lt(),
                    languagePreferenceForReading: lt(),
                    blacklistedPopupWidgets: [],
                    successfulTranslations: 0,
                    isReviewPopupShown: !1,
                    shouldDisplayFeedbackPopup: !1,
                    isInputHighlighterShown: !1,
                    isInlineHighlighterShown: !1,
                    regionalVariant: void 0,
                    isZendeskOnboarded: !1,
                    isZendeskEnabled: !0,
                    isZendeskOnboardingShown: !1,
                    zendeskFormality: "auto",
                    isGDocsOnboardingShown: !1,
                    isGmailOnboarded: !1,
                    isGmailEnabled: null,
                    wasGmailOnboardingShown: !1
                };
                if (!t || !t.settingSchemeVersion || t.settingSchemeVersion < a.settingSchemeVersion) {
                    let n = {};
                    for (const [r,o] of Object.entries(a))
                        r in t && "settingSchemeVersion" !== r ? n[r] = t[r] : ("installationId" === r && (e = !0),
                        n[r] = o);
                    await chrome.storage.sync.clear(),
                    await chrome.storage.sync.set(n),
                    console.log("settings set: ", n)
                }
                return {
                    installationIdWasSet: e
                }
            }().then((t=>{
                !async function(e, t) {
                    const n = await Ca();
                    n || e !== chrome.runtime.OnInstalledReason.INSTALL ? n || await Sa() : (await Sa(),
                    Hn(),
                    na());
                    t && ta()
                }(e.reason, t.installationIdWasSet)
            }
            )),
            e.reason === chrome.runtime.OnInstalledReason.INSTALL && Eo({
                payload: {
                    destination: po.onboarding
                }
            }),
            chrome.contextMenus.removeAll((function() {
                chrome.contextMenus.create({
                    type: "normal",
                    id: "dlChangeLanguageShortcut",
                    title: chrome.i18n.getMessage("extension_settings_keyboard_shortcut_change_language"),
                    checked: !1,
                    contexts: ["all"]
                }, (function() {}
                )),
                chrome.contextMenus.create({
                    type: "normal",
                    id: "dlTranslateInline",
                    title: chrome.i18n.getMessage("context_menus_translate_section"),
                    checked: !1,
                    contexts: ["all"]
                })
            }
            )),
            chrome.tabs.query({}, (function(e) {
                for (const t of e)
                    ho(t) && chrome.scripting.executeScript({
                        target: {
                            tabId: t
                        },
                        files: ["build/content.js"]
                    })
            }
            ))
        } catch (e) {
            cn({
                errorCode: wt,
                errorMessage: e.message
            })
        }
    }
    function Co(e) {
        switch (e.menuItemId) {
        case "dlTranslateInline":
            Vr(!1);
            break;
        case "dlChangeLanguageShortcut":
            Vr(!0)
        }
    }
    function Ao() {}
    const Ro = {
        setBrowserExtensionUserAgent: {
            type: "modifyHeaders",
            requestHeaders: [{
                header: "user-agent",
                operation: "set",
                value: `DeepLBrowserExtension/1.7.0 ${navigator.userAgent} `
            }]
        }
    }
      , Do = {
        lingueeDomainFilter: {
            excludedDomains: ["linguee.com"],
            urlFilter: "*://www-app.linguee.com*",
            resourceTypes: ["xmlhttprequest"]
        },
        deeplToolingApiDomainFilter: {
            excludedDomains: ["deepl.com"],
            urlFilter: "*://*.deepl.com/jsonrpc?client=chrome-extension,*",
            resourceTypes: ["xmlhttprequest"]
        },
        deeplStatisticsDomainFilter: {
            excludedDomains: ["deepl.com"],
            urlFilter: "*://s.deepl.*/chrome/statistics*",
            resourceTypes: ["xmlhttprequest"]
        }
    };
    function No() {
        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [2, 3, 4],
            addRules: [{
                id: 2,
                priority: 1,
                action: Ro.setBrowserExtensionUserAgent,
                condition: Do.lingueeDomainFilter
            }, {
                id: 3,
                priority: 1,
                action: Ro.setBrowserExtensionUserAgent,
                condition: Do.deeplToolingApiDomainFilter
            }, {
                id: 4,
                priority: 1,
                action: Ro.setBrowserExtensionUserAgent,
                condition: Do.deeplStatisticsDomainFilter
            }]
        }, (async e=>{
            await console.log("created", e)
        }
        ))
    }
    return No(),
    chrome.runtime.onInstalled.addListener(So),
    chrome.contextMenus.onClicked.addListener(Co),
    chrome.tabs.onActivated.addListener((async function(e) {
        ho((await chrome.tabs.get(e.tabId)).url) && chrome.tabs.sendMessage(e.tabId, {
            action: "dlTabChanged"
        }),
        chrome.tabs.query({}, (function(t) {
            for (var n = 0; n < t.length; ++n)
                chrome.tabs.sendMessage(t[n].id, {
                    action: "dlChangeActiveTabStatus",
                    payload: {
                        isActive: t[n].id === e.tabId
                    }
                })
        }
        )),
        Ja()
    }
    )),
    chrome.runtime.onConnect.addListener((e=>{
        ut() && console.log(`port connected to tab with id: ${e.sender.tab.id}`)
    }
    )),
    chrome.runtime.onMessage.addListener(_o),
    chrome.storage.onChanged.addListener(Ao),
    chrome.commands.onCommand.addListener(Io),
    self.addEventListener("error", (function(e) {
        ht(e.message)
    }
    )),
    e.INTERNAL_PAGE_KEYS = po,
    e.URL_ACTIONS = nt,
    e.URL_LIST = at,
    e.cacheClientState = Ka,
    e.checkCommandShortcuts = Mr,
    e.clearLoginTimestamp = Ea,
    e.commandListener = Io,
    e.connectDatabase = ja,
    e.deleteAuthTokens = pa,
    e.getAccountID = Aa,
    e.getAuthTokens = ma,
    e.getBrowserInstanceId = Ca,
    e.getCachedClientState = Xa,
    e.getClientState = Ja,
    e.getDapApiConfig = Dt,
    e.getDapApiExtensionOpenedFromId = kt,
    e.getDapApiInlinePositionType = Gt,
    e.getDapApiLingueeError = bt,
    e.getDapApiLogoClickedFromId = Ot,
    e.getDapApiNotificationType = Pt,
    e.getDapApiSettingType = Mt,
    e.getDapApiShortcutTypes = xt,
    e.getDapApiTranslationTriggerId = Nt,
    e.getDapApiUiActionEventId = Ut,
    e.getDapApiUiFunctionality = Ft,
    e.getDapApiUiLocation = vt,
    e.getDapGmailActionType = zt,
    e.getDapLogoutTrigger = $t,
    e.getDapNicheIntegration = jt,
    e.getDapOnboardingExternalLink = Ht,
    e.getDapOnboardingStepChangeTrigger = Vt,
    e.getDapOriginStore = Wt,
    e.getDapServiceLevel = Jt,
    e.getDapSessionTypeTrigger = Kt,
    e.getDapWhatsAppTranslator = Xt,
    e.getDictionary = Yr,
    e.getExternalUrl = rt,
    e.getInstallationId = async function() {
        return (await chrome.storage.sync.get(["installationId"])).installationId
    }
    ,
    e.getSecondsSinceLastLogin = wa,
    e.getSessionType = fa,
    e.getSettings = ga,
    e.getSupportedVoices = qr,
    e.getUserInfo = Ia,
    e.getUserState = Ur,
    e.getWebsiteIdFromWebsite = Bt,
    e.improveWriting = io,
    e.isPayloadNecessaryForUIEvent = qt,
    e.isProUser = ya,
    e.isUserLoggedIn = Ta,
    e.jsonrpc_callFunction = Qa,
    e.jsonrpc_composeMethodCallDict = Va,
    e.login = za,
    e.loginRequest = vr,
    e.logout = Ya,
    e.logoutRequest = xr,
    e.markLoginTimestamp = La,
    e.messageListener = _o,
    e.onContextMenuClicked = Co,
    e.onInstalled = So,
    e.onStorageChanged = Ao,
    e.openInternalPage = Eo,
    e.readData = $a,
    e.redirectToExternalURL = ot,
    e.requestDictionary = nr,
    e.sendDAPBrowserInstanceIdCreated = na,
    e.sendDAPCloseInlineHighlighter = Wn,
    e.sendDAPCloseInputHighlighter = Mn,
    e.sendDAPContentScriptErrorData = gn,
    e.sendDAPCustomizationEnabled = ia,
    e.sendDAPDeeplWriteEvent = aa,
    e.sendDAPDetectLanguage = wn,
    e.sendDAPDictionaryStatus = Bn,
    e.sendDAPDisabledDictionaryHover = qn,
    e.sendDAPDocTransClick = yn,
    e.sendDAPErrorData = cn,
    e.sendDAPExtensionOpened = un,
    e.sendDAPFPTHide = Dn,
    e.sendDAPFTPBlockSizeExceeded = async function(e) {
        return on((t=>({
            ...t,
            eventId: 60006,
            fptBlockSizeExceededData: {
                translationData: {
                    sourceLang: e.websiteLanguage,
                    targetLang: e.targetLanguage,
                    sourceLength: e.characterCount
                },
                domainName: e.domainName
            }
        })))
    }
    ,
    e.sendDAPGDocsMaxCharExceededShown = zn,
    e.sendDAPGDocsMaxCharExceededTryProClicked = Yn,
    e.sendDAPGDocsReplaceText = Gn,
    e.sendDAPGmailCharLimitReached = la,
    e.sendDAPIconHover = kn,
    e.sendDAPInlineCopy = Nn,
    e.sendDAPInlineDragStart = Sn,
    e.sendDAPInlineListen = bn,
    e.sendDAPInlinePositionChange = In,
    e.sendDAPInlineSettingOpened = Ln,
    e.sendDAPInputTranslationInjection = dn,
    e.sendDAPInstallSuccess = Hn,
    e.sendDAPInstallationIdCreated = ta,
    e.sendDAPLandingOnSpecificWebsite = xn,
    e.sendDAPLingueeErrorData = $n,
    e.sendDAPLoggedIn = oa,
    e.sendDAPLoggedOut = sa,
    e.sendDAPLogin = Xn,
    e.sendDAPLogoClicked = hn,
    e.sendDAPLogout = Jn,
    e.sendDAPNotificationViewed = pn,
    e.sendDAPOnboardingModalShown = Qn,
    e.sendDAPOnboardingOpenExternalPage = Pn,
    e.sendDAPOnboardingStepChange = On,
    e.sendDAPOpenDictionarySection = jn,
    e.sendDAPOpenInlineHighlighter = Vn,
    e.sendDAPOpenInputHighlighter = Fn,
    e.sendDAPReadMoreClicked = vn,
    e.sendDAPRecommendToAFriendClick = fn,
    e.sendDAPRightClick = _n,
    e.sendDAPSessionStarted = ra,
    e.sendDAPSettingsChanged = En,
    e.sendDAPShortcutUsed = mn,
    e.sendDAPTranslateAcceptOrUndoEvent = ca,
    e.sendDAPTranslationErrorData = ln,
    e.sendDAPTranslationRequest = sn,
    e.sendDAPTwitterTweetTranslationFailed = Rn,
    e.sendDAPUILocationClicked = ea,
    e.sendDAPUiAction = Tn,
    e.sendDAPVoiceOverStops = Un,
    e.sendDAPWhatsAppMessageTranslated = Cn,
    e.sendDAPWhatsAppMessageTranslationFailed = An,
    e.sendDAPZendeskCustomizationEvent = Kn,
    e.sendDAPtrackSessionType = Zn,
    e.sendNotification = Fr,
    e.setAuthTokens = ha,
    e.setBrowserInstanceId = Sa,
    e.setUserInfoFromClientState = _a,
    e.stopSpeech = $r,
    e.textToSpeech = jr,
    e.trackCloseInlineHighlighter = zr,
    e.trackCloseInputHighlighter = Jr,
    e.trackCustomizationEnabled = go,
    e.trackDeeplWriteEvent = co,
    e.trackDetectLanguage = pr,
    e.trackDictionaryStatus = Zr,
    e.trackDisabledDictionaryHover = eo,
    e.trackDocTransClick = fr,
    e.trackExtensionOpenedEvent = Tr,
    e.trackFptHide = Cr,
    e.trackGDocsMaxCharExceededTryProClicked = ro,
    e.trackGDocsReplaceText = Pr,
    e.trackGdocsMaxCharExceededShown = ao,
    e.trackGmailCharLimitReached = uo,
    e.trackIconHover = Ar,
    e.trackInlineCopy = Rr,
    e.trackInlineDragStart = Sr,
    e.trackInlineListen = Nr,
    e.trackInlinePositionChange = Ir,
    e.trackInlineSettingsOpened = Er,
    e.trackInputTranslationInjection = mr,
    e.trackLandingOnWebsite = Wr,
    e.trackLingueeErrorData = no,
    e.trackLogoClickedEvent = yr,
    e.trackOnboardingModalShown = oo,
    e.trackOnboardingOpenExternalLink = kr,
    e.trackOnboardingStepChange = Dr,
    e.trackOpenDictionarySection = Qr,
    e.trackOpenInlineHighlighter = Xr,
    e.trackOpenInputHighlighter = Kr,
    e.trackReadMoreClick = Or,
    e.trackRecommendToAFriendClick = Lr,
    e.trackRightClick = _r,
    e.trackSettingChanged = wr,
    e.trackTranslateAcceptOrUndoEvent = lo,
    e.trackUILocationClicked = so,
    e.trackUiAction = Hr,
    e.trackUseOfShortcut = Gr,
    e.trackVoiceOverStops = br,
    e.trackZendeskCustomizationEvent = to,
    e.translate = er,
    e.translateGmailReceivedEmail = lr,
    e.translateHtmlRequest = sr,
    e.translateInlineRequest = cr,
    e.translateInputRequest = ir,
    e.translateSelection = Vr,
    e.translateTwitterTweetRequest = gr,
    e.translateWhatsAppMessageRequest = dr,
    e.translateWhatsAppMessagesRequest = ur,
    e.translateZendeskMessageRequest = hr,
    e.triggerTranslateInline = or,
    e.updateDynamicRules = No,
    e.updateSession = ua,
    e.writeData = qa,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});
//# sourceMappingURL=background.js.map
