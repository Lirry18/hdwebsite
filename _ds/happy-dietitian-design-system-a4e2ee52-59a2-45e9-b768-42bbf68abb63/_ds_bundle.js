/* @ds-bundle: {"format":3,"namespace":"HappyDietitianDesignSystem_a4e2ee","components":[{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/Avatar.jsx":"8a03ae0f6757","components/content/Card.jsx":"8206e73f3b08","components/content/Stat.jsx":"95df15895088","components/core/Badge.jsx":"9d9b3761220c","components/core/Button.jsx":"43b4ee25da70","components/core/IconButton.jsx":"d6a7a161fcb6","components/core/Pill.jsx":"990d29c9410c","components/forms/Checkbox.jsx":"cde7af7d5cc9","components/forms/Input.jsx":"585f4fa1880d","components/forms/Switch.jsx":"dff2663d797f","components/navigation/Tabs.jsx":"9d9dd868a718","ui_kits/website/parts/CTA.jsx":"6557ae3b76e0","ui_kits/website/parts/Hero.jsx":"a35c508cc228","ui_kits/website/parts/HowItWorks.jsx":"eb84b2970891","ui_kits/website/parts/Pillars.jsx":"4e03593620f9","ui_kits/website/parts/Proof.jsx":"627050f205ad","ui_kits/website/parts/SiteHeader.jsx":"c556369f781b","ui_kits/website/parts/StartFlow.jsx":"563e0477b484","ui_kits/website/parts/Voices.jsx":"8d47239a4cba","ui_kits/website/parts/icons.jsx":"500af810f93c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HappyDietitianDesignSystem_a4e2ee = window.HappyDietitianDesignSystem_a4e2ee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Avatar
 * Round avatar for dietitians, coaches and clients. Shows an image when
 * given, otherwise initials on a soft brand tone.
 */
function Avatar({
  src = null,
  name = "",
  size = "md",
  tone = "lime",
  ring = false,
  style = {},
  ...rest
}) {
  const dims = {
    xs: 28,
    sm: 36,
    md: 44,
    lg: 56,
    xl: 72
  }[size];
  const fontSize = {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 24
  }[size];
  const tones = {
    lime: {
      background: "var(--hd-lime-300)",
      color: "var(--hd-forest-800)"
    },
    sky: {
      background: "var(--hd-sky-300)",
      color: "var(--hd-forest-800)"
    },
    sage: {
      background: "var(--hd-sage-300)",
      color: "var(--hd-forest-800)"
    },
    forest: {
      background: "var(--hd-forest-800)",
      color: "var(--hd-paper-50)"
    }
  };
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(p => p[0]?.toUpperCase()).join("");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: dims,
      height: dims,
      borderRadius: "var(--radius-circle)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flex: "none",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: `${fontSize}px`,
      letterSpacing: "0.01em",
      boxShadow: ring ? "0 0 0 2px var(--bg-page), 0 0 0 3.5px var(--hd-sage)" : "none",
      ...tones[tone],
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Card
 * The brand's surface: white on paper, generous rounding, a soft warm
 * shadow OR a hairline border (not both). Optional accent grounds (lime,
 * sky, forest) for feature tiles.
 */
function Card({
  children,
  ground = "paper",
  elevation = "border",
  padding = "lg",
  interactive = false,
  style = {},
  ...rest
}) {
  const grounds = {
    paper: {
      background: "var(--surface-card)",
      color: "var(--text-body)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)"
    },
    lime: {
      background: "var(--hd-lime-400)",
      color: "var(--hd-forest-800)"
    },
    sky: {
      background: "var(--hd-sky-500)",
      color: "var(--hd-forest-800)"
    },
    forest: {
      background: "var(--hd-forest-800)",
      color: "var(--text-on-forest)"
    }
  };
  const pads = {
    sm: "18px",
    md: "24px",
    lg: "32px",
    xl: "40px"
  }[padding];
  const elevations = {
    border: {
      border: ground === "forest" ? "1px solid var(--border-on-forest)" : ground === "lime" || ground === "sky" ? "1px solid transparent" : "1px solid var(--border-subtle)",
      boxShadow: "none"
    },
    soft: {
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    raised: {
      border: "1px solid transparent",
      boxShadow: "var(--shadow-md)"
    },
    flat: {
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = interactive && hover ? {
    transform: "translateY(-3px)",
    boxShadow: "var(--shadow-md)"
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pads,
      transition: "var(--transition-base)",
      cursor: interactive ? "pointer" : "default",
      ...grounds[ground],
      ...elevations[elevation],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Stat
 * Impact-first metric. A big Poppins number with an optional italic
 * Playfair highlight fragment, a label, and an optional caption.
 */
function Stat({
  value,
  highlight = null,
  label,
  caption = null,
  onForest = false,
  align = "left",
  style = {},
  ...rest
}) {
  const strong = onForest ? "var(--text-on-forest)" : "var(--text-strong)";
  const muted = onForest ? "var(--text-on-forest-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-display-lg)",
      lineHeight: 1,
      letterSpacing: "var(--ls-display)",
      color: strong
    }
  }, value, highlight ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: "var(--fw-medium)",
      color: "var(--hd-sage)",
      marginLeft: "0.12em"
    }
  }, highlight) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-body)",
      color: strong
    }
  }, label), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "4px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: muted,
      lineHeight: 1.5
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Badge
 * Small status / category chip. Soft, rounded, low-contrast fills drawn
 * from the brand accents. Mixed-case Poppins (not the uppercase Pill).
 */
function Badge({
  children,
  tone = "lime",
  style = {},
  ...rest
}) {
  const tones = {
    lime: {
      background: "var(--hd-lime-300)",
      color: "var(--hd-forest-800)"
    },
    sky: {
      background: "var(--hd-sky-300)",
      color: "var(--hd-forest-800)"
    },
    sage: {
      background: "var(--hd-sage-300)",
      color: "var(--hd-forest-800)"
    },
    forest: {
      background: "var(--hd-forest-800)",
      color: "var(--hd-paper-50)"
    },
    neutral: {
      background: "var(--hd-paper-100)",
      color: "var(--hd-stone-600)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "0.01em",
      lineHeight: 1.3,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Button
 * Pill-shaped action. Primary = soft lime on forest text; the brand's
 * default call to action. Poppins, semibold.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "13px",
      gap: "7px",
      minHeight: "36px"
    },
    md: {
      padding: "11px 22px",
      fontSize: "15px",
      gap: "9px",
      minHeight: "44px"
    },
    lg: {
      padding: "15px 30px",
      fontSize: "16px",
      gap: "10px",
      minHeight: "54px"
    }
  };
  const variants = {
    primary: {
      background: "var(--hd-lime-400)",
      color: "var(--text-on-accent)",
      border: "1.5px solid var(--hd-lime-400)"
    },
    secondary: {
      background: "var(--hd-forest-800)",
      color: "var(--hd-paper-50)",
      border: "1.5px solid var(--hd-forest-800)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1.5px solid transparent"
    },
    "on-forest": {
      background: "var(--hd-lime-400)",
      color: "var(--text-on-accent)",
      border: "1.5px solid var(--hd-lime-400)"
    }
  };
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "var(--transition-base)",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? hoverFor(variant) : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...hoverStyle
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}
function hoverFor(variant) {
  switch (variant) {
    case "primary":
    case "on-forest":
      return {
        background: "var(--hd-lime-600)",
        border: "1.5px solid var(--hd-lime-600)"
      };
    case "secondary":
      return {
        background: "var(--hd-forest-700)",
        border: "1.5px solid var(--hd-forest-700)"
      };
    case "outline":
      return {
        background: "var(--hd-forest-800)",
        color: "var(--hd-paper-50)"
      };
    case "ghost":
      return {
        background: "var(--hd-paper-100)"
      };
    default:
      return null;
  }
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — IconButton
 * The circular control from the brand book (e.g. the ↘ scroll cue).
 * A round, hairline-bordered button holding a single icon.
 */
function IconButton({
  children,
  size = "md",
  variant = "outline",
  onForest = false,
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 46,
    lg: 56
  }[size];
  const palettes = {
    outline: onForest ? {
      background: "transparent",
      color: "var(--text-on-forest)",
      border: "1.5px solid var(--border-on-forest)"
    } : {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-strong)"
    },
    solid: {
      background: "var(--hd-lime-400)",
      color: "var(--text-on-accent)",
      border: "1.5px solid var(--hd-lime-400)"
    },
    ghost: onForest ? {
      background: "rgba(250,247,242,0.08)",
      color: "var(--text-on-forest)",
      border: "1.5px solid transparent"
    } : {
      background: "var(--hd-paper-100)",
      color: "var(--text-strong)",
      border: "1.5px solid transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === "solid" ? {
    background: "var(--hd-lime-600)"
  } : onForest ? {
    background: "rgba(250,247,242,0.12)"
  } : {
    background: "var(--hd-paper-100)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-circle)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "var(--transition-base)",
      ...palettes[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Pill
 * The wide-tracked uppercase label in a hairline capsule, straight from
 * the brand book section markers (e.g. "THE MISSION").
 */
function Pill({
  children,
  onForest = false,
  dot = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      border: onForest ? "1.5px solid var(--border-on-forest)" : "1.5px solid var(--border-strong)",
      color: onForest ? "var(--text-on-forest)" : "var(--text-strong)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-overline)",
      letterSpacing: "var(--ls-overline)",
      textTransform: "uppercase",
      lineHeight: 1,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: "var(--hd-sage)",
      flex: "none"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Checkbox
 * Rounded-square checkbox; lime fill with forest check when on.
 */
function Checkbox({
  checked = false,
  onChange,
  label = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const cbId = id || reactId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "11px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: "22px",
      height: "22px",
      flex: "none",
      borderRadius: "7px",
      background: checked ? "var(--hd-lime-400)" : "var(--surface-card)",
      border: checked ? "1.5px solid var(--hd-lime-400)" : "1.5px solid var(--border-strong)",
      transition: "var(--transition-base)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange?.(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), checked ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 8.5L6.5 11.5L12.5 5",
    stroke: "var(--hd-forest-800)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Input
 * Text field with optional label, helper and error. Rounded, hairline
 * border, warm paper fill; sage focus ring. Poppins throughout.
 */
function Input({
  label = null,
  helper = null,
  error = null,
  leadingIcon = null,
  id,
  size = "md",
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const sizes = {
    md: {
      padding: "12px 16px",
      fontSize: "15px",
      minHeight: "46px"
    },
    lg: {
      padding: "15px 18px",
      fontSize: "16px",
      minHeight: "54px"
    }
  };
  const borderColor = error ? "#B4533E" : focus ? "var(--hd-sage-500)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      ...containerStyle
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-strong)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "var(--surface-card)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus && !error ? "var(--shadow-focus)" : "none",
      transition: "var(--transition-base)",
      padding: sizes[size].padding,
      minHeight: sizes[size].minHeight
    }
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)",
      flex: "none"
    }
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontSize: sizes[size].fontSize,
      color: "var(--text-strong)",
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "#B4533E"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Switch
 * Pill toggle. Forest track with paper knob when on; the brand stays
 * calm, so no colour explosion — a quiet, confident state change.
 */
function Switch({
  checked = false,
  onChange,
  label = null,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const swId = id || reactId;
  const W = 46,
    H = 26,
    KNOB = 20;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: W,
      height: H,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--hd-forest-800)" : "var(--hd-paper-200)",
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange?.(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (H - KNOB) / 2,
      left: checked ? W - KNOB - 3 : 3,
      width: KNOB,
      height: KNOB,
      borderRadius: "50%",
      background: checked ? "var(--hd-lime-400)" : "var(--surface-card)",
      boxShadow: "var(--shadow-xs)",
      transition: "var(--transition-base)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Happy Dietitian — Tabs
 * Pill-style segmented tabs. The active tab gets a lime (or forest) pill;
 * the rest stay quiet text. Calm, no underline animations.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  activeTone = "lime",
  onForest = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(tabs[0]?.value);
  const active = value !== undefined ? value : internal;
  const activePalette = {
    lime: {
      background: "var(--hd-lime-400)",
      color: "var(--hd-forest-800)"
    },
    forest: {
      background: "var(--hd-forest-800)",
      color: "var(--hd-paper-50)"
    }
  }[activeTone];
  const idleColor = onForest ? "var(--text-on-forest-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: "4px",
      padding: "5px",
      borderRadius: "var(--radius-pill)",
      background: onForest ? "rgba(250,247,242,0.07)" : "var(--surface-sunken)",
      border: onForest ? "1px solid var(--border-on-forest)" : "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const isActive = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => {
        if (value === undefined) setInternal(t.value);
        onChange?.(t.value);
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        border: "none",
        cursor: "pointer",
        padding: "9px 18px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-medium)",
        fontSize: "var(--fs-body-sm)",
        transition: "var(--transition-base)",
        background: isActive ? activePalette.background : "transparent",
        color: isActive ? activePalette.color : idleColor
      }
    }, t.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex"
      }
    }, t.icon) : null, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/CTA.jsx
try { (() => {
/* Happy Dietitian website — closing CTA band + footer. */
function CTA({
  onStart
}) {
  const {
    Button
  } = window.HD;
  const {
    Dots
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-forest)",
      color: "var(--text-on-forest)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MARK + "mark-lime.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: -100,
      bottom: -120,
      height: 480,
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "104px 40px",
      position: "relative",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Dots, null)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 56,
      lineHeight: 1.06,
      letterSpacing: "-0.02em",
      color: "var(--hd-paper-50)",
      maxWidth: 760,
      margin: "0 auto"
    }
  }, "The brand system behind feeling ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 500,
      color: "var(--hd-lime-400)"
    }
  }, "happy"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 18,
      color: "var(--text-on-forest-muted)",
      maxWidth: 520,
      margin: "22px auto 0"
    }
  }, "Match with a dietitian this week. Cancel anytime \u2014 most members feel the difference in the first fortnight."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      justifyContent: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-forest",
    size: "lg",
    onClick: onStart
  }, "Start your plan"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: "var(--hd-paper-50)",
      borderColor: "var(--border-on-forest)"
    }
  }, "Talk to our team"))));
}
function SiteFooter() {
  const cols = [{
    h: "Product",
    links: ["How it works", "For clinics", "For employers", "Pricing"]
  }, {
    h: "Company",
    links: ["About", "Our dietitians", "Careers", "Press"]
  }, {
    h: "Resources",
    links: ["Blog", "Outcomes", "Help centre", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--hd-forest-900)",
      color: "var(--text-on-forest-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "64px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr repeat(3, 1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MARK + "mark-lime.png",
    alt: "",
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--hd-lime-400)"
    }
  }, "Happy", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--hd-paper-50)",
      fontWeight: 400
    }
  }, " Dietitian"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 280
    }
  }, "Personal, evidence-based, warm nutrition support \u2014 for people, clinics and teams.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--hd-paper-50)"
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: "var(--text-on-forest-muted)"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid var(--border-on-forest)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontSize: 12.5,
      letterSpacing: ".02em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Happy Dietitian. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Clinical governance"))));
}
window.CTA = CTA;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/CTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/Hero.jsx
try { (() => {
/* Happy Dietitian website — hero. Forest ground, typographic, the mark as
   a large quiet graphic. The line lands on one italic highlight word. */
function Hero({
  onStart
}) {
  const {
    Button,
    Pill
  } = window.HD;
  const {
    ArrowDR,
    Dots
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-forest)",
      color: "var(--text-on-forest)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MARK + "mark-lime.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -120,
      top: 40,
      height: 620,
      opacity: 0.07,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "92px 40px 104px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    onForest: true,
    dot: true
  }, "Personal \xB7 Evidence-based \xB7 Warm"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 28,
      fontSize: 76,
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      fontWeight: 600,
      color: "var(--hd-paper-50)",
      maxWidth: 980
    }
  }, "The accountability most health", /*#__PURE__*/React.createElement("br", null), "programmes ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 500,
      color: "var(--hd-lime-400)"
    }
  }, "miss"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 20,
      lineHeight: 1.6,
      maxWidth: 620,
      color: "var(--text-on-forest-muted)",
      fontWeight: 400
    }
  }, "Happy Dietitian pairs every member with a registered dietitian and the day-to-day support other tools leave behind. Guidance shaped around a real life \u2014 not a generic plan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-forest",
    size: "lg",
    onClick: onStart
  }, "Start your plan"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "var(--hd-paper-50)"
    }
  }, "Watch the 2-min tour")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "flex",
      alignItems: "center",
      gap: 16,
      color: "var(--text-on-forest-muted)"
    }
  }, /*#__PURE__*/React.createElement(Dots, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      letterSpacing: ".02em"
    }
  }, "Trusted by 40+ clinics & employer health teams"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/HowItWorks.jsx
try { (() => {
/* Happy Dietitian website — how it works, 3 numbered steps + accent tile. */
function HowItWorks() {
  const {
    Card,
    Pill,
    Badge
  } = window.HD;
  const {
    Calendar,
    Check
  } = window;
  const steps = [{
    n: "01",
    title: "Match with your dietitian",
    body: "A short intake matches you to a registered dietitian who fits your goals, schedule and food culture."
  }, {
    n: "02",
    title: "Get a plan built around your week",
    body: "Not a meal-by-meal script — a flexible framework that bends around real life, work and family."
  }, {
    n: "03",
    title: "Stay accountable, every day",
    body: "Daily check-ins, quick messages and gentle nudges. The support that keeps small changes going."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "96px 40px"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    dot: true
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 22,
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      maxWidth: 620
    }
  }, "A coach in your corner, from day ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 500
    }
  }, "one"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 40,
      color: "var(--hd-sage)",
      letterSpacing: "-0.02em"
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 14,
      fontSize: 21
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, s.body)))), /*#__PURE__*/React.createElement(Card, {
    ground: "forest",
    elevation: "raised",
    padding: "lg",
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Calendar, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-on-forest-muted)",
      letterSpacing: ".02em"
    }
  }, "Today \xB7 Tuesday")), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 12,
      fontSize: 26,
      color: "var(--hd-paper-50)"
    }
  }, "3 small wins, checked off")), /*#__PURE__*/React.createElement(Badge, {
    tone: "lime"
  }, "On track this week")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14
    }
  }, ["Protein at breakfast", "10-min walk after lunch", "Lights out by 11pm"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--hd-forest-700)",
      border: "1px solid var(--border-on-forest)",
      borderRadius: "var(--radius-md)",
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "50%",
      flex: "none",
      background: "var(--hd-lime-400)",
      color: "var(--hd-forest-800)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: "var(--hd-paper-50)"
    }
  }, t)))))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/Pillars.jsx
try { (() => {
/* Happy Dietitian website — the three brand pillars as feature cards. */
function Pillars() {
  const {
    Card,
    Pill
  } = window.HD;
  const {
    Heart,
    Beaker,
    Chat
  } = window;
  const items = [{
    icon: /*#__PURE__*/React.createElement(Heart, {
      size: 26
    }),
    title: "Personal",
    body: "Guidance shaped around a real life, not a generic plan. Your dietitian knows your week, not just your weight."
  }, {
    icon: /*#__PURE__*/React.createElement(Beaker, {
      size: 26
    }),
    title: "Evidence-based",
    body: "Every recommendation is rooted in dietetics, never fads. Clinical rigour, translated into something you can actually do."
  }, {
    icon: /*#__PURE__*/React.createElement(Chat, {
      size: 26
    }),
    title: "Warm",
    body: "A tone that feels like a coach in your corner. Direct when it helps, never clinical, always human."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "96px 40px"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    dot: true
  }, "The approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 22,
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      maxWidth: 640
    }
  }, "The human support other tools ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 500
    }
  }, "leave behind"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 52,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    ground: "paper",
    elevation: "border",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--radius-md)",
      background: "var(--hd-lime-300)",
      color: "var(--hd-forest-800)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, it.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 24,
      fontSize: 22
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.body))))));
}
window.Pillars = Pillars;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/Pillars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/Proof.jsx
try { (() => {
/* Happy Dietitian website — impact-first proof band on forest. */
function Proof() {
  const {
    Stat
  } = window.HD;
  const stats = [{
    value: "92%",
    label: "stay on plan past 90 days",
    caption: "vs. 31% for self-guided apps"
  }, {
    value: "3.2x",
    highlight: "more",
    label: "likely to hit their goal",
    caption: "with a named dietitian"
  }, {
    value: "< 4h",
    label: "median reply from your coach",
    caption: "every day of the week"
  }, {
    value: "40+",
    label: "clinics & employer teams",
    caption: "onboarded in 2025"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-forest)",
      color: "var(--text-on-forest)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "84px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      color: "var(--hd-paper-50)",
      letterSpacing: "-0.015em",
      maxWidth: 520
    }
  }, "Small changes that actually ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 500,
      color: "var(--hd-lime-400)"
    }
  }, "stick"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-on-forest-muted)",
      maxWidth: 320
    }
  }, "Outcomes measured across 6,400 members enrolled for 90 days or more.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28,
      borderTop: "1px solid var(--border-on-forest)",
      paddingTop: 48
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(Stat, {
    key: i,
    value: s.value,
    highlight: s.highlight,
    label: s.label,
    caption: s.caption,
    onForest: true
  })))));
}
window.Proof = Proof;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/SiteHeader.jsx
try { (() => {
/* Happy Dietitian website — sticky site header. */
function SiteHeader({
  onStart
}) {
  const {
    Button
  } = window.HD;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector("[data-scroll]") || window;
    const target = document.querySelector("[data-scroll]");
    const onScroll = () => setScrolled((target ? target.scrollTop : window.scrollY) > 8);
    (target || window).addEventListener("scroll", onScroll);
    return () => (target || window).removeEventListener("scroll", onScroll);
  }, []);
  const nav = ["How it works", "Approach", "Results", "Pricing"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(14,46,40,0.92)" : "transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-on-forest)" : "1px solid transparent",
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "18px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MARK + "mark-lime.png",
    alt: "",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--hd-lime-400)",
      letterSpacing: ".01em",
      lineHeight: 1
    }
  }, "Happy", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--hd-paper-50)",
      fontWeight: 400
    }
  }, " Dietitian"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      fontWeight: 500,
      color: "var(--text-on-forest-muted)",
      transition: "var(--transition-base)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--hd-paper-50)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-on-forest-muted)"
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      fontWeight: 500,
      color: "var(--hd-paper-50)"
    }
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-forest",
    size: "sm",
    onClick: onStart
  }, "Start your plan"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/StartFlow.jsx
try { (() => {
/* Happy Dietitian website — "Start your plan" modal flow.
   A small 2-step interactive signup demonstrating form components. Fake. */
function StartFlow({
  open,
  onClose
}) {
  const {
    Card,
    Input,
    Button,
    Checkbox,
    Pill,
    Avatar
  } = window.HD;
  const {
    Check
  } = window;
  const [step, setStep] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [goal, setGoal] = React.useState(null);
  const [consent, setConsent] = React.useState(true);
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setEmail("");
      setGoal(null);
    }
  }, [open]);
  if (!open) return null;
  const goals = ["Lose weight sustainably", "Manage a health condition", "Build better habits", "Sports & performance"];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(8,28,24,0.55)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      animation: "hdFade 200ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Card, {
    ground: "paper",
    elevation: "raised",
    padding: "xl"
  }, step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Pill, {
    dot: true
  }, "Start your plan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 18,
      fontSize: 28,
      letterSpacing: "-0.015em"
    }
  }, "Match with a dietitian who ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 500
    }
  }, "gets"), " you."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 15,
      color: "var(--text-muted)",
      lineHeight: 1.6
    }
  }, "Two quick questions and we'll line up your first call."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work or personal email",
    type: "email",
    placeholder: "you@email.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-strong)",
      marginBottom: 10
    }
  }, "What's your main goal?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, goals.map(g => {
    const active = goal === g;
    return /*#__PURE__*/React.createElement("button", {
      key: g,
      onClick: () => setGoal(g),
      style: {
        textAlign: "left",
        cursor: "pointer",
        padding: "12px 14px",
        borderRadius: "var(--radius-md)",
        fontSize: 13.5,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        transition: "var(--transition-base)",
        background: active ? "var(--hd-lime-300)" : "var(--surface-card)",
        color: "var(--text-strong)",
        border: active ? "1.5px solid var(--hd-lime-600)" : "1.5px solid var(--border-subtle)"
      }
    }, g);
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    checked: consent,
    onChange: setConsent,
    label: "Email me weekly check-ins and tips"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !email || !goal,
    onClick: () => setStep(1)
  }, "Find my dietitian"))), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      margin: "0 auto",
      background: "var(--hd-lime-400)",
      color: "var(--hd-forest-800)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 30,
    sw: 2.2
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 22,
      fontSize: 26,
      letterSpacing: "-0.015em"
    }
  }, "You're ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 500
    }
  }, "matched"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 15,
      color: "var(--text-muted)",
      lineHeight: 1.6,
      maxWidth: 320,
      margin: "10px auto 0"
    }
  }, "We've found a dietitian for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, goal?.toLowerCase()), ". Check ", email || "your inbox", " to book your first call."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      padding: "16px",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Okafor",
    tone: "sage",
    size: "md",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, "Dr. Maya Okafor, RD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "Replies within 4 hours"))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    style: {
      marginTop: 22
    },
    onClick: onClose
  }, "Back to site")))));
}
window.StartFlow = StartFlow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/StartFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/Voices.jsx
try { (() => {
/* Happy Dietitian website — a member voice + the dietitian who supports them. */
function Voices() {
  const {
    Card,
    Avatar,
    Pill,
    Badge
  } = window.HD;
  const {
    Star
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "96px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 28,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    ground: "lime",
    padding: "xl",
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      color: "var(--hd-forest-800)"
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: 20,
    sw: 1.6
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 28,
      lineHeight: 1.4,
      fontWeight: 500,
      color: "var(--hd-forest-800)",
      letterSpacing: "-0.01em"
    }
  }, "\"For the first time the plan bent around my life instead of breaking it. Having someone who actually", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-highlight)",
      fontStyle: "italic",
      fontWeight: 600
    }
  }, " remembers"), " me changed everything.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Priya N",
    tone: "forest",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "var(--hd-forest-800)"
    }
  }, "Priya N."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--hd-forest-700)",
      opacity: .8
    }
  }, "Member \xB7 8 months")))), /*#__PURE__*/React.createElement(Card, {
    ground: "paper",
    elevation: "soft",
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    dot: true
  }, "Her dietitian"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Okafor",
    tone: "sage",
    size: "xl",
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 18,
      color: "var(--text-strong)"
    }
  }, "Dr. Maya Okafor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "Registered Dietitian, RD"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, "Specialises in metabolic health and sustainable habit change. 11 years in clinical practice."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 20,
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage"
  }, "Metabolic health"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Habit change"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Plant-forward"))))));
}
window.Voices = Voices;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/Voices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Happy Dietitian — shared icons & namespace helper for the website UI kit.
   Thin 1.8px line icons matching the brand's light, geometric mark.
   Exposes everything on window for the other babel surface files. */
const HD = window.HappyDietitianDesignSystem_a4e2ee;
const Ico = ({
  d,
  size = 20,
  sw = 1.8,
  ...p
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none"
}, p), Array.isArray(d) ? d.map((path, i) => /*#__PURE__*/React.createElement("path", {
  key: i,
  d: path,
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})) : /*#__PURE__*/React.createElement("path", {
  d: d,
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ArrowUR = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: "M7 17L17 7M17 7H9M17 7V15"
}, p));
const ArrowDR = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: "M7 7l10 10M17 17V9M17 17H9"
}, p));
const ArrowRight = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: ["M5 12h14", "M13 6l6 6-6 6"]
}, p));
const Leaf = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: ["M11 20C6 20 4 15 4 11C9 11 13 13 13 20", "M13 20C13 12 16 7 21 6C21 12 19 18 13 20"]
}, p));
const Heart = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: "M12 20s-7-4.5-9.5-9C1 8 3 4.5 6.5 4.5C9 4.5 10.5 6 12 8c1.5-2 3-3.5 5.5-3.5C21 4.5 23 8 21.5 11C19 15.5 12 20 12 20Z"
}, p));
const Beaker = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: ["M9 3h6", "M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3", "M7.5 14h9"]
}, p));
const Chat = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: "M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-5.4A8 8 0 1 1 21 11.5Z"
}, p));
const Check = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: "M5 12.5l4.5 4.5L19 7"
}, p));
const Calendar = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: ["M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z", "M4 10h16", "M8 3v4", "M16 3v4"]
}, p));
const Star = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: "M12 4l2.3 5.2 5.7.5-4.3 3.7 1.3 5.6L12 16.8 7 19.3l1.3-5.6L4 10l5.7-.5L12 4Z"
}, p));
const Menu = p => /*#__PURE__*/React.createElement(Ico, _extends({
  d: ["M4 7h16", "M4 12h16", "M4 17h16"]
}, p));
const Dots = ({
  onForest
} = {}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8
  }
}, [12, 7, 4].map((s, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    width: s,
    height: s,
    borderRadius: "50%",
    background: "var(--hd-sage)"
  }
})));
const MARK = "../../assets/logos/";
Object.assign(window, {
  HD,
  Ico,
  ArrowUR,
  ArrowDR,
  ArrowRight,
  Leaf,
  Heart,
  Beaker,
  Chat,
  Check,
  Calendar,
  Star,
  Menu,
  Dots,
  MARK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
