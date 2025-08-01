import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __privateWrapper,
  __publicField
} from "./chunk-KPM4MXSK.js";

// node_modules/pdfjs-dist/build/pdf.mjs
var __webpack_require__ = {};
(() => {
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();
(() => {
  __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();
var __webpack_exports__ = globalThis.pdfjsLib = {};
__webpack_require__.d(__webpack_exports__, {
  AbortException: () => (
    /* reexport */
    AbortException
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    AnnotationEditorLayer
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    AnnotationEditorParamsType
  ),
  AnnotationEditorType: () => (
    /* reexport */
    AnnotationEditorType
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    AnnotationEditorUIManager
  ),
  AnnotationLayer: () => (
    /* reexport */
    AnnotationLayer
  ),
  AnnotationMode: () => (
    /* reexport */
    AnnotationMode
  ),
  ColorPicker: () => (
    /* reexport */
    ColorPicker
  ),
  DOMSVGFactory: () => (
    /* reexport */
    DOMSVGFactory
  ),
  DrawLayer: () => (
    /* reexport */
    DrawLayer
  ),
  FeatureTest: () => (
    /* reexport */
    util_FeatureTest
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    GlobalWorkerOptions
  ),
  ImageKind: () => (
    /* reexport */
    util_ImageKind
  ),
  InvalidPDFException: () => (
    /* reexport */
    InvalidPDFException
  ),
  MissingPDFException: () => (
    /* reexport */
    MissingPDFException
  ),
  OPS: () => (
    /* reexport */
    OPS
  ),
  OutputScale: () => (
    /* reexport */
    OutputScale
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    PDFDataRangeTransport
  ),
  PDFDateString: () => (
    /* reexport */
    PDFDateString
  ),
  PDFWorker: () => (
    /* reexport */
    PDFWorker
  ),
  PasswordResponses: () => (
    /* reexport */
    PasswordResponses
  ),
  PermissionFlag: () => (
    /* reexport */
    PermissionFlag
  ),
  PixelsPerInch: () => (
    /* reexport */
    PixelsPerInch
  ),
  RenderingCancelledException: () => (
    /* reexport */
    RenderingCancelledException
  ),
  TextLayer: () => (
    /* reexport */
    TextLayer
  ),
  TouchManager: () => (
    /* reexport */
    TouchManager
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    UnexpectedResponseException
  ),
  Util: () => (
    /* reexport */
    Util
  ),
  VerbosityLevel: () => (
    /* reexport */
    VerbosityLevel
  ),
  XfaLayer: () => (
    /* reexport */
    XfaLayer
  ),
  build: () => (
    /* reexport */
    build
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    createValidAbsoluteUrl
  ),
  fetchData: () => (
    /* reexport */
    fetchData
  ),
  getDocument: () => (
    /* reexport */
    getDocument
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    getFilenameFromUrl
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    getPdfFilenameFromUrl
  ),
  getXfaPageViewport: () => (
    /* reexport */
    getXfaPageViewport
  ),
  isDataScheme: () => (
    /* reexport */
    isDataScheme
  ),
  isPdfFile: () => (
    /* reexport */
    isPdfFile
  ),
  noContextMenu: () => (
    /* reexport */
    noContextMenu
  ),
  normalizeUnicode: () => (
    /* reexport */
    normalizeUnicode
  ),
  setLayerDimensions: () => (
    /* reexport */
    setLayerDimensions
  ),
  shadow: () => (
    /* reexport */
    shadow
  ),
  stopEvent: () => (
    /* reexport */
    stopEvent
  ),
  version: () => (
    /* reexport */
    version
  )
});
var isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0];
var MAX_IMAGE_SIZE_TO_CACHE = 1e7;
var LINE_FACTOR = 1.35;
var LINE_DESCENT_FACTOR = 0.35;
var BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
var RenderingIntentFlag = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
};
var AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
var AnnotationEditorPrefix = "pdfjs_internal_editor_";
var AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
};
var AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35,
  DRAW_STEP: 41
};
var PermissionFlag = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
};
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
var util_ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93
};
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
var verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log(`Info: ${msg}`);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log(`Warning: ${msg}`);
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url == null ? void 0 : url.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  try {
    if (options && typeof url === "string") {
      if (options.addDefaultProtocol && url.startsWith("www.")) {
        const dots = url.match(/\./g);
        if ((dots == null ? void 0 : dots.length) >= 2) {
          url = `http://${url}`;
        }
      }
      if (options.tryConvertEncoding) {
        try {
          url = stringToUTF8String(url);
        } catch {
        }
      }
    }
    const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch {
  }
  return null;
}
function shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
var BaseException = function BaseExceptionClosure() {
  function BaseException2(message, name) {
    this.message = message;
    this.name = name;
  }
  BaseException2.prototype = new Error();
  BaseException2.constructor = BaseException2;
  return BaseException2;
}();
var PasswordException = class extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
};
var UnknownErrorException = class extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
};
var InvalidPDFException = class extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
};
var MissingPDFException = class extends BaseException {
  constructor(msg) {
    super(msg, "MissingPDFException");
  }
};
var UnexpectedResponseException = class extends BaseException {
  constructor(msg, status) {
    super(msg, "UnexpectedResponseException");
    this.status = status;
  }
};
var FormatError = class extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
};
var AbortException = class extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
};
function bytesToString(bytes) {
  if (typeof bytes !== "object" || (bytes == null ? void 0 : bytes.length) === void 0) {
    unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 255;
  }
  return bytes;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 255, value >> 16 & 255, value >> 8 & 255, value & 255);
}
function objectFromMap(map) {
  const obj = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}
function isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
var util_FeatureTest = class {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
  }
  static get platform() {
    if (typeof navigator !== "undefined" && typeof (navigator == null ? void 0 : navigator.platform) === "string") {
      return shadow(this, "platform", {
        isMac: navigator.platform.includes("Mac"),
        isWindows: navigator.platform.includes("Win"),
        isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) === "string" && navigator.userAgent.includes("Firefox")
      });
    }
    return shadow(this, "platform", {
      isMac: false,
      isWindows: false,
      isFirefox: false
    });
  }
  static get isCSSRoundSupported() {
    var _a2, _b;
    return shadow(this, "isCSSRoundSupported", (_b = (_a2 = globalThis.CSS) == null ? void 0 : _a2.supports) == null ? void 0 : _b.call(_a2, "width: round(1.5px, 1px)"));
  }
};
var hexNumbers = Array.from(Array(256).keys(), (n) => n.toString(16).padStart(2, "0"));
var _Util_static, getExtremumOnCurve_fn, getExtremum_fn;
var Util = class {
  static makeHexColor(r, g, b) {
    return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  static scaleMinMax(transform, minMax) {
    let temp;
    if (transform[0]) {
      if (transform[0] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[0];
      minMax[2] *= transform[0];
      if (transform[3] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[3];
      minMax[3] *= transform[3];
    } else {
      temp = minMax[0];
      minMax[0] = minMax[1];
      minMax[1] = temp;
      temp = minMax[2];
      minMax[2] = minMax[3];
      minMax[3] = temp;
      if (transform[1] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[1];
      minMax[3] *= transform[1];
      if (transform[2] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[2];
      minMax[2] *= transform[2];
    }
    minMax[0] += transform[4];
    minMax[1] += transform[5];
    minMax[2] += transform[4];
    minMax[3] += transform[5];
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static applyTransform(p, m) {
    const xt = p[0] * m[0] + p[1] * m[2] + m[4];
    const yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  }
  static applyInverseTransform(p, m) {
    const d = m[0] * m[3] - m[1] * m[2];
    const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  }
  static getAxialAlignedBoundingBox(r, m) {
    const p1 = this.applyTransform(r, m);
    const p2 = this.applyTransform(r.slice(2, 4), m);
    const p3 = this.applyTransform([r[0], r[3]], m);
    const p4 = this.applyTransform([r[2], r[1]], m);
    return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(m) {
    const transpose = [m[0], m[2], m[1], m[3]];
    const a = m[0] * transpose[0] + m[1] * transpose[2];
    const b = m[0] * transpose[1] + m[1] * transpose[3];
    const c = m[2] * transpose[0] + m[3] * transpose[2];
    const d = m[2] * transpose[1] + m[3] * transpose[3];
    const first = (a + d) / 2;
    const second = Math.sqrt((a + d) ** 2 - 4 * (a * d - c * b)) / 2;
    const sx = first + second || 1;
    const sy = first - second || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    if (minMax) {
      minMax[0] = Math.min(minMax[0], x0, x3);
      minMax[1] = Math.min(minMax[1], y0, y3);
      minMax[2] = Math.max(minMax[2], x0, x3);
      minMax[3] = Math.max(minMax[3], y0, y3);
    } else {
      minMax = [Math.min(x0, x3), Math.min(y0, y3), Math.max(x0, x3), Math.max(y0, y3)];
    }
    __privateMethod(this, _Util_static, getExtremum_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    __privateMethod(this, _Util_static, getExtremum_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
    return minMax;
  }
};
_Util_static = new WeakSet();
getExtremumOnCurve_fn = function(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
  if (t <= 0 || t >= 1) {
    return;
  }
  const mt = 1 - t;
  const tt = t * t;
  const ttt = tt * t;
  const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
  const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
  minMax[0] = Math.min(minMax[0], x);
  minMax[1] = Math.min(minMax[1], y);
  minMax[2] = Math.max(minMax[2], x);
  minMax[3] = Math.max(minMax[3], y);
};
getExtremum_fn = function(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
  if (Math.abs(a) < 1e-12) {
    if (Math.abs(b) >= 1e-12) {
      __privateMethod(this, _Util_static, getExtremumOnCurve_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
    }
    return;
  }
  const delta = b ** 2 - 4 * c * a;
  if (delta < 0) {
    return;
  }
  const sqrtDelta = Math.sqrt(delta);
  const a2 = 2 * a;
  __privateMethod(this, _Util_static, getExtremumOnCurve_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
  __privateMethod(this, _Util_static, getExtremumOnCurve_fn).call(this, x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
};
__privateAdd(Util, _Util_static);
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
var NormalizeRegex = null;
var NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = /* @__PURE__ */ new Map([["ﬅ", "ſt"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return bytesToString(buf);
}
var AnnotationPrefix = "pdfjs_internal_id_";
function toBase64Util(arr) {
  if (Uint8Array.prototype.toBase64) {
    return arr.toBase64();
  }
  return btoa(bytesToString(arr));
}
if (typeof Promise.try !== "function") {
  Promise.try = function(fn, ...args) {
    return new Promise((resolve) => {
      resolve(fn(...args));
    });
  };
}
var SVG_NS = "http://www.w3.org/2000/svg";
var _PixelsPerInch = class _PixelsPerInch {
};
__publicField(_PixelsPerInch, "CSS", 96);
__publicField(_PixelsPerInch, "PDF", 72);
__publicField(_PixelsPerInch, "PDF_TO_CSS_UNITS", _PixelsPerInch.CSS / _PixelsPerInch.PDF);
var PixelsPerInch = _PixelsPerInch;
async function fetchData(url, type = "text") {
  if (isValidFetchUrl(url, document.baseURI)) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    switch (type) {
      case "arraybuffer":
        return response.arrayBuffer();
      case "blob":
        return response.blob();
      case "json":
        return response.json();
    }
    return response.text();
  }
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = type;
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      if (request.status === 200 || request.status === 0) {
        switch (type) {
          case "arraybuffer":
          case "blob":
          case "json":
            resolve(request.response);
            return;
        }
        resolve(request.responseText);
        return;
      }
      reject(new Error(request.statusText));
    };
    request.send(null);
  });
}
var PageViewport = class _PageViewport {
  constructor({
    viewBox,
    userUnit,
    scale,
    rotation,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  }) {
    this.viewBox = viewBox;
    this.userUnit = userUnit;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    scale *= userUnit;
    const centerX = (viewBox[2] + viewBox[0]) / 2;
    const centerY = (viewBox[3] + viewBox[1]) / 2;
    let rotateA, rotateB, rotateC, rotateD;
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      case 0:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    let offsetCanvasX, offsetCanvasY;
    let width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = (viewBox[3] - viewBox[1]) * scale;
      height = (viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = (viewBox[2] - viewBox[0]) * scale;
      height = (viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }
  get rawDims() {
    const {
      userUnit,
      viewBox
    } = this;
    const dims = viewBox.map((x) => x * userUnit);
    return shadow(this, "rawDims", {
      pageWidth: dims[2] - dims[0],
      pageHeight: dims[3] - dims[1],
      pageX: dims[0],
      pageY: dims[1]
    });
  }
  clone({
    scale = this.scale,
    rotation = this.rotation,
    offsetX = this.offsetX,
    offsetY = this.offsetY,
    dontFlip = false
  } = {}) {
    return new _PageViewport({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  convertToViewportPoint(x, y) {
    return Util.applyTransform([x, y], this.transform);
  }
  convertToViewportRectangle(rect) {
    const topLeft = Util.applyTransform([rect[0], rect[1]], this.transform);
    const bottomRight = Util.applyTransform([rect[2], rect[3]], this.transform);
    return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
  }
  convertToPdfPoint(x, y) {
    return Util.applyInverseTransform([x, y], this.transform);
  }
};
var RenderingCancelledException = class extends BaseException {
  constructor(msg, extraDelay = 0) {
    super(msg, "RenderingCancelledException");
    this.extraDelay = extraDelay;
  }
};
function isDataScheme(url) {
  const ii = url.length;
  let i = 0;
  while (i < ii && url[i].trim() === "") {
    i++;
  }
  return url.substring(i, i + 5).toLowerCase() === "data:";
}
function isPdfFile(filename) {
  return typeof filename === "string" && /\.pdf$/i.test(filename);
}
function getFilenameFromUrl(url) {
  [url] = url.split(/[#?]/, 1);
  return url.substring(url.lastIndexOf("/") + 1);
}
function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
  if (typeof url !== "string") {
    return defaultFilename;
  }
  if (isDataScheme(url)) {
    warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return defaultFilename;
  }
  const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  const splitURI = reURI.exec(url);
  let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
  if (suggestedFilename) {
    suggestedFilename = suggestedFilename[0];
    if (suggestedFilename.includes("%")) {
      try {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } catch {
      }
    }
  }
  return suggestedFilename || defaultFilename;
}
var StatTimer = class {
  constructor() {
    __publicField(this, "started", /* @__PURE__ */ Object.create(null));
    __publicField(this, "times", []);
  }
  time(name) {
    if (name in this.started) {
      warn(`Timer is already running for ${name}`);
    }
    this.started[name] = Date.now();
  }
  timeEnd(name) {
    if (!(name in this.started)) {
      warn(`Timer has not been started for ${name}`);
    }
    this.times.push({
      name,
      start: this.started[name],
      end: Date.now()
    });
    delete this.started[name];
  }
  toString() {
    const outBuf = [];
    let longest = 0;
    for (const {
      name
    } of this.times) {
      longest = Math.max(name.length, longest);
    }
    for (const {
      name,
      start,
      end
    } of this.times) {
      outBuf.push(`${name.padEnd(longest)} ${end - start}ms
`);
    }
    return outBuf.join("");
  }
};
function isValidFetchUrl(url, baseUrl) {
  try {
    const {
      protocol
    } = baseUrl ? new URL(url, baseUrl) : new URL(url);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
function noContextMenu(e) {
  e.preventDefault();
}
function stopEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}
var _regex;
var PDFDateString = class {
  static toDateObject(input) {
    if (!input || typeof input !== "string") {
      return null;
    }
    __privateGet(this, _regex) || __privateSet(this, _regex, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const matches = __privateGet(this, _regex).exec(input);
    if (!matches) {
      return null;
    }
    const year = parseInt(matches[1], 10);
    let month = parseInt(matches[2], 10);
    month = month >= 1 && month <= 12 ? month - 1 : 0;
    let day = parseInt(matches[3], 10);
    day = day >= 1 && day <= 31 ? day : 1;
    let hour = parseInt(matches[4], 10);
    hour = hour >= 0 && hour <= 23 ? hour : 0;
    let minute = parseInt(matches[5], 10);
    minute = minute >= 0 && minute <= 59 ? minute : 0;
    let second = parseInt(matches[6], 10);
    second = second >= 0 && second <= 59 ? second : 0;
    const universalTimeRelation = matches[7] || "Z";
    let offsetHour = parseInt(matches[8], 10);
    offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
    let offsetMinute = parseInt(matches[9], 10) || 0;
    offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
    if (universalTimeRelation === "-") {
      hour += offsetHour;
      minute += offsetMinute;
    } else if (universalTimeRelation === "+") {
      hour -= offsetHour;
      minute -= offsetMinute;
    }
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
};
_regex = new WeakMap();
__privateAdd(PDFDateString, _regex);
function getXfaPageViewport(xfaPage, {
  scale = 1,
  rotation = 0
}) {
  const {
    width,
    height
  } = xfaPage.attributes.style;
  const viewBox = [0, 0, parseInt(width), parseInt(height)];
  return new PageViewport({
    viewBox,
    userUnit: 1,
    scale,
    rotation
  });
}
function getRGB(color) {
  if (color.startsWith("#")) {
    const colorRGB = parseInt(color.slice(1), 16);
    return [(colorRGB & 16711680) >> 16, (colorRGB & 65280) >> 8, colorRGB & 255];
  }
  if (color.startsWith("rgb(")) {
    return color.slice(4, -1).split(",").map((x) => parseInt(x));
  }
  if (color.startsWith("rgba(")) {
    return color.slice(5, -1).split(",").map((x) => parseInt(x)).slice(0, 3);
  }
  warn(`Not a valid color format: "${color}"`);
  return [0, 0, 0];
}
function getColorValues(colors) {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  document.body.append(span);
  for (const name of colors.keys()) {
    span.style.color = name;
    const computedColor = window.getComputedStyle(span).color;
    colors.set(name, getRGB(computedColor));
  }
  span.remove();
}
function getCurrentTransform(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform();
  return [a, b, c, d, e, f];
}
function getCurrentTransformInverse(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform().invertSelf();
  return [a, b, c, d, e, f];
}
function setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
  if (viewport instanceof PageViewport) {
    const {
      pageWidth,
      pageHeight
    } = viewport.rawDims;
    const {
      style
    } = div;
    const useRound = util_FeatureTest.isCSSRoundSupported;
    const w = `var(--scale-factor) * ${pageWidth}px`, h = `var(--scale-factor) * ${pageHeight}px`;
    const widthStr = useRound ? `round(down, ${w}, var(--scale-round-x, 1px))` : `calc(${w})`, heightStr = useRound ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    if (!mustFlip || viewport.rotation % 180 === 0) {
      style.width = widthStr;
      style.height = heightStr;
    } else {
      style.width = heightStr;
      style.height = widthStr;
    }
  }
  if (mustRotate) {
    div.setAttribute("data-main-rotation", viewport.rotation);
  }
}
var OutputScale = class {
  constructor() {
    const pixelRatio = window.devicePixelRatio || 1;
    this.sx = pixelRatio;
    this.sy = pixelRatio;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
};
var _toolbar, _colorPicker, _editor, _buttons, _altText, _l10nRemove, _EditorToolbar_static, pointerDown_fn, _EditorToolbar_instances, focusIn_fn, focusOut_fn, addListenersToElement_fn, addDeleteButton_fn, divider_get;
var _EditorToolbar = class _EditorToolbar {
  constructor(editor) {
    __privateAdd(this, _EditorToolbar_instances);
    __privateAdd(this, _toolbar, null);
    __privateAdd(this, _colorPicker, null);
    __privateAdd(this, _editor);
    __privateAdd(this, _buttons, null);
    __privateAdd(this, _altText, null);
    __privateSet(this, _editor, editor);
    __privateGet(_EditorToolbar, _l10nRemove) || __privateSet(_EditorToolbar, _l10nRemove, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button"
    }));
  }
  render() {
    const editToolbar = __privateSet(this, _toolbar, document.createElement("div"));
    editToolbar.classList.add("editToolbar", "hidden");
    editToolbar.setAttribute("role", "toolbar");
    const signal = __privateGet(this, _editor)._uiManager._signal;
    editToolbar.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    editToolbar.addEventListener("pointerdown", __privateMethod(_EditorToolbar, _EditorToolbar_static, pointerDown_fn), {
      signal
    });
    const buttons = __privateSet(this, _buttons, document.createElement("div"));
    buttons.className = "buttons";
    editToolbar.append(buttons);
    const position = __privateGet(this, _editor).toolbarPosition;
    if (position) {
      const {
        style
      } = editToolbar;
      const x = __privateGet(this, _editor)._uiManager.direction === "ltr" ? 1 - position[0] : position[0];
      style.insetInlineEnd = `${100 * x}%`;
      style.top = `calc(${100 * position[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    __privateMethod(this, _EditorToolbar_instances, addDeleteButton_fn).call(this);
    return editToolbar;
  }
  get div() {
    return __privateGet(this, _toolbar);
  }
  hide() {
    var _a2;
    __privateGet(this, _toolbar).classList.add("hidden");
    (_a2 = __privateGet(this, _colorPicker)) == null ? void 0 : _a2.hideDropdown();
  }
  show() {
    var _a2;
    __privateGet(this, _toolbar).classList.remove("hidden");
    (_a2 = __privateGet(this, _altText)) == null ? void 0 : _a2.shown();
  }
  async addAltText(altText) {
    const button = await altText.render();
    __privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button);
    __privateGet(this, _buttons).prepend(button, __privateGet(this, _EditorToolbar_instances, divider_get));
    __privateSet(this, _altText, altText);
  }
  addColorPicker(colorPicker) {
    __privateSet(this, _colorPicker, colorPicker);
    const button = colorPicker.renderButton();
    __privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button);
    __privateGet(this, _buttons).prepend(button, __privateGet(this, _EditorToolbar_instances, divider_get));
  }
  remove() {
    var _a2;
    __privateGet(this, _toolbar).remove();
    (_a2 = __privateGet(this, _colorPicker)) == null ? void 0 : _a2.destroy();
    __privateSet(this, _colorPicker, null);
  }
};
_toolbar = new WeakMap();
_colorPicker = new WeakMap();
_editor = new WeakMap();
_buttons = new WeakMap();
_altText = new WeakMap();
_l10nRemove = new WeakMap();
_EditorToolbar_static = new WeakSet();
pointerDown_fn = function(e) {
  e.stopPropagation();
};
_EditorToolbar_instances = new WeakSet();
focusIn_fn = function(e) {
  __privateGet(this, _editor)._focusEventsAllowed = false;
  stopEvent(e);
};
focusOut_fn = function(e) {
  __privateGet(this, _editor)._focusEventsAllowed = true;
  stopEvent(e);
};
addListenersToElement_fn = function(element) {
  const signal = __privateGet(this, _editor)._uiManager._signal;
  element.addEventListener("focusin", __privateMethod(this, _EditorToolbar_instances, focusIn_fn).bind(this), {
    capture: true,
    signal
  });
  element.addEventListener("focusout", __privateMethod(this, _EditorToolbar_instances, focusOut_fn).bind(this), {
    capture: true,
    signal
  });
  element.addEventListener("contextmenu", noContextMenu, {
    signal
  });
};
addDeleteButton_fn = function() {
  const {
    editorType,
    _uiManager: _uiManager4
  } = __privateGet(this, _editor);
  const button = document.createElement("button");
  button.className = "delete";
  button.tabIndex = 0;
  button.setAttribute("data-l10n-id", __privateGet(_EditorToolbar, _l10nRemove)[editorType]);
  __privateMethod(this, _EditorToolbar_instances, addListenersToElement_fn).call(this, button);
  button.addEventListener("click", (e) => {
    _uiManager4.delete();
  }, {
    signal: _uiManager4._signal
  });
  __privateGet(this, _buttons).append(button);
};
divider_get = function() {
  const divider = document.createElement("div");
  divider.className = "divider";
  return divider;
};
__privateAdd(_EditorToolbar, _EditorToolbar_static);
__privateAdd(_EditorToolbar, _l10nRemove, null);
var EditorToolbar = _EditorToolbar;
var _buttons2, _toolbar2, _uiManager, _HighlightToolbar_instances, render_fn, getLastPoint_fn, addHighlightButton_fn;
var HighlightToolbar = class {
  constructor(uiManager) {
    __privateAdd(this, _HighlightToolbar_instances);
    __privateAdd(this, _buttons2, null);
    __privateAdd(this, _toolbar2, null);
    __privateAdd(this, _uiManager);
    __privateSet(this, _uiManager, uiManager);
  }
  show(parent, boxes, isLTR) {
    const [x, y] = __privateMethod(this, _HighlightToolbar_instances, getLastPoint_fn).call(this, boxes, isLTR);
    const {
      style
    } = __privateGet(this, _toolbar2) || __privateSet(this, _toolbar2, __privateMethod(this, _HighlightToolbar_instances, render_fn).call(this));
    parent.append(__privateGet(this, _toolbar2));
    style.insetInlineEnd = `${100 * x}%`;
    style.top = `calc(${100 * y}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    __privateGet(this, _toolbar2).remove();
  }
};
_buttons2 = new WeakMap();
_toolbar2 = new WeakMap();
_uiManager = new WeakMap();
_HighlightToolbar_instances = new WeakSet();
render_fn = function() {
  const editToolbar = __privateSet(this, _toolbar2, document.createElement("div"));
  editToolbar.className = "editToolbar";
  editToolbar.setAttribute("role", "toolbar");
  editToolbar.addEventListener("contextmenu", noContextMenu, {
    signal: __privateGet(this, _uiManager)._signal
  });
  const buttons = __privateSet(this, _buttons2, document.createElement("div"));
  buttons.className = "buttons";
  editToolbar.append(buttons);
  __privateMethod(this, _HighlightToolbar_instances, addHighlightButton_fn).call(this);
  return editToolbar;
};
getLastPoint_fn = function(boxes, isLTR) {
  let lastY = 0;
  let lastX = 0;
  for (const box of boxes) {
    const y = box.y + box.height;
    if (y < lastY) {
      continue;
    }
    const x = box.x + (isLTR ? box.width : 0);
    if (y > lastY) {
      lastX = x;
      lastY = y;
      continue;
    }
    if (isLTR) {
      if (x > lastX) {
        lastX = x;
      }
    } else if (x < lastX) {
      lastX = x;
    }
  }
  return [isLTR ? 1 - lastX : lastX, lastY];
};
addHighlightButton_fn = function() {
  const button = document.createElement("button");
  button.className = "highlightButton";
  button.tabIndex = 0;
  button.setAttribute("data-l10n-id", `pdfjs-highlight-floating-button1`);
  const span = document.createElement("span");
  button.append(span);
  span.className = "visuallyHidden";
  span.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const signal = __privateGet(this, _uiManager)._signal;
  button.addEventListener("contextmenu", noContextMenu, {
    signal
  });
  button.addEventListener("click", () => {
    __privateGet(this, _uiManager).highlightSelection("floating_button");
  }, {
    signal
  });
  __privateGet(this, _buttons2).append(button);
};
function bindEvents(obj, element, names) {
  for (const name of names) {
    element.addEventListener(name, obj[name].bind(obj));
  }
}
var _id;
var IdManager = class {
  constructor() {
    __privateAdd(this, _id, 0);
  }
  get id() {
    return `${AnnotationEditorPrefix}${__privateWrapper(this, _id)._++}`;
  }
};
_id = new WeakMap();
var _baseId, _id2, _cache, _ImageManager_instances, get_fn;
var _ImageManager = class _ImageManager {
  constructor() {
    __privateAdd(this, _ImageManager_instances);
    __privateAdd(this, _baseId, getUuid());
    __privateAdd(this, _id2, 0);
    __privateAdd(this, _cache, null);
  }
  static get _isSVGFittingCanvas() {
    const svg = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>`;
    const canvas = new OffscreenCanvas(1, 3);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });
    const image = new Image();
    image.src = svg;
    const promise = image.decode().then(() => {
      ctx.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 3);
      return new Uint32Array(ctx.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
    });
    return shadow(this, "_isSVGFittingCanvas", promise);
  }
  async getFromFile(file) {
    const {
      lastModified,
      name,
      size,
      type
    } = file;
    return __privateMethod(this, _ImageManager_instances, get_fn).call(this, `${lastModified}_${name}_${size}_${type}`, file);
  }
  async getFromUrl(url) {
    return __privateMethod(this, _ImageManager_instances, get_fn).call(this, url, url);
  }
  async getFromBlob(id, blobPromise) {
    const blob = await blobPromise;
    return __privateMethod(this, _ImageManager_instances, get_fn).call(this, id, blob);
  }
  async getFromId(id) {
    __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
    const data = __privateGet(this, _cache).get(id);
    if (!data) {
      return null;
    }
    if (data.bitmap) {
      data.refCounter += 1;
      return data;
    }
    if (data.file) {
      return this.getFromFile(data.file);
    }
    if (data.blobPromise) {
      const {
        blobPromise
      } = data;
      delete data.blobPromise;
      return this.getFromBlob(data.id, blobPromise);
    }
    return this.getFromUrl(data.url);
  }
  getFromCanvas(id, canvas) {
    __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
    let data = __privateGet(this, _cache).get(id);
    if (data == null ? void 0 : data.bitmap) {
      data.refCounter += 1;
      return data;
    }
    const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
    data = {
      bitmap: offscreen.transferToImageBitmap(),
      id: `image_${__privateGet(this, _baseId)}_${__privateWrapper(this, _id2)._++}`,
      refCounter: 1,
      isSvg: false
    };
    __privateGet(this, _cache).set(id, data);
    __privateGet(this, _cache).set(data.id, data);
    return data;
  }
  getSvgUrl(id) {
    const data = __privateGet(this, _cache).get(id);
    if (!(data == null ? void 0 : data.isSvg)) {
      return null;
    }
    return data.svgUrl;
  }
  deleteId(id) {
    var _a2;
    __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
    const data = __privateGet(this, _cache).get(id);
    if (!data) {
      return;
    }
    data.refCounter -= 1;
    if (data.refCounter !== 0) {
      return;
    }
    const {
      bitmap
    } = data;
    if (!data.url && !data.file) {
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      const ctx = canvas.getContext("bitmaprenderer");
      ctx.transferFromImageBitmap(bitmap);
      data.blobPromise = canvas.convertToBlob();
    }
    (_a2 = bitmap.close) == null ? void 0 : _a2.call(bitmap);
    data.bitmap = null;
  }
  isValidId(id) {
    return id.startsWith(`image_${__privateGet(this, _baseId)}_`);
  }
};
_baseId = new WeakMap();
_id2 = new WeakMap();
_cache = new WeakMap();
_ImageManager_instances = new WeakSet();
get_fn = async function(key, rawData) {
  __privateGet(this, _cache) || __privateSet(this, _cache, /* @__PURE__ */ new Map());
  let data = __privateGet(this, _cache).get(key);
  if (data === null) {
    return null;
  }
  if (data == null ? void 0 : data.bitmap) {
    data.refCounter += 1;
    return data;
  }
  try {
    data || (data = {
      bitmap: null,
      id: `image_${__privateGet(this, _baseId)}_${__privateWrapper(this, _id2)._++}`,
      refCounter: 0,
      isSvg: false
    });
    let image;
    if (typeof rawData === "string") {
      data.url = rawData;
      image = await fetchData(rawData, "blob");
    } else if (rawData instanceof File) {
      image = data.file = rawData;
    } else if (rawData instanceof Blob) {
      image = rawData;
    }
    if (image.type === "image/svg+xml") {
      const mustRemoveAspectRatioPromise = _ImageManager._isSVGFittingCanvas;
      const fileReader = new FileReader();
      const imageElement = new Image();
      const imagePromise = new Promise((resolve, reject) => {
        imageElement.onload = () => {
          data.bitmap = imageElement;
          data.isSvg = true;
          resolve();
        };
        fileReader.onload = async () => {
          const url = data.svgUrl = fileReader.result;
          imageElement.src = await mustRemoveAspectRatioPromise ? `${url}#svgView(preserveAspectRatio(none))` : url;
        };
        imageElement.onerror = fileReader.onerror = reject;
      });
      fileReader.readAsDataURL(image);
      await imagePromise;
    } else {
      data.bitmap = await createImageBitmap(image);
    }
    data.refCounter = 1;
  } catch (e) {
    warn(e);
    data = null;
  }
  __privateGet(this, _cache).set(key, data);
  if (data) {
    __privateGet(this, _cache).set(data.id, data);
  }
  return data;
};
var ImageManager = _ImageManager;
var _commands, _locked, _maxSize, _position;
var CommandManager = class {
  constructor(maxSize = 128) {
    __privateAdd(this, _commands, []);
    __privateAdd(this, _locked, false);
    __privateAdd(this, _maxSize);
    __privateAdd(this, _position, -1);
    __privateSet(this, _maxSize, maxSize);
  }
  add({
    cmd,
    undo,
    post,
    mustExec,
    type = NaN,
    overwriteIfSameType = false,
    keepUndo = false
  }) {
    if (mustExec) {
      cmd();
    }
    if (__privateGet(this, _locked)) {
      return;
    }
    const save = {
      cmd,
      undo,
      post,
      type
    };
    if (__privateGet(this, _position) === -1) {
      if (__privateGet(this, _commands).length > 0) {
        __privateGet(this, _commands).length = 0;
      }
      __privateSet(this, _position, 0);
      __privateGet(this, _commands).push(save);
      return;
    }
    if (overwriteIfSameType && __privateGet(this, _commands)[__privateGet(this, _position)].type === type) {
      if (keepUndo) {
        save.undo = __privateGet(this, _commands)[__privateGet(this, _position)].undo;
      }
      __privateGet(this, _commands)[__privateGet(this, _position)] = save;
      return;
    }
    const next = __privateGet(this, _position) + 1;
    if (next === __privateGet(this, _maxSize)) {
      __privateGet(this, _commands).splice(0, 1);
    } else {
      __privateSet(this, _position, next);
      if (next < __privateGet(this, _commands).length) {
        __privateGet(this, _commands).splice(next);
      }
    }
    __privateGet(this, _commands).push(save);
  }
  undo() {
    if (__privateGet(this, _position) === -1) {
      return;
    }
    __privateSet(this, _locked, true);
    const {
      undo,
      post
    } = __privateGet(this, _commands)[__privateGet(this, _position)];
    undo();
    post == null ? void 0 : post();
    __privateSet(this, _locked, false);
    __privateSet(this, _position, __privateGet(this, _position) - 1);
  }
  redo() {
    if (__privateGet(this, _position) < __privateGet(this, _commands).length - 1) {
      __privateSet(this, _position, __privateGet(this, _position) + 1);
      __privateSet(this, _locked, true);
      const {
        cmd,
        post
      } = __privateGet(this, _commands)[__privateGet(this, _position)];
      cmd();
      post == null ? void 0 : post();
      __privateSet(this, _locked, false);
    }
  }
  hasSomethingToUndo() {
    return __privateGet(this, _position) !== -1;
  }
  hasSomethingToRedo() {
    return __privateGet(this, _position) < __privateGet(this, _commands).length - 1;
  }
  cleanType(type) {
    if (__privateGet(this, _position) === -1) {
      return;
    }
    for (let i = __privateGet(this, _position); i >= 0; i--) {
      if (__privateGet(this, _commands)[i].type !== type) {
        __privateGet(this, _commands).splice(i + 1, __privateGet(this, _position) - i);
        __privateSet(this, _position, i);
        return;
      }
    }
    __privateGet(this, _commands).length = 0;
    __privateSet(this, _position, -1);
  }
  destroy() {
    __privateSet(this, _commands, null);
  }
};
_commands = new WeakMap();
_locked = new WeakMap();
_maxSize = new WeakMap();
_position = new WeakMap();
var _KeyboardManager_instances, serialize_fn;
var KeyboardManager = class {
  constructor(callbacks) {
    __privateAdd(this, _KeyboardManager_instances);
    this.buffer = [];
    this.callbacks = /* @__PURE__ */ new Map();
    this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac
    } = util_FeatureTest.platform;
    for (const [keys, callback, options = {}] of callbacks) {
      for (const key of keys) {
        const isMacKey = key.startsWith("mac+");
        if (isMac && isMacKey) {
          this.callbacks.set(key.slice(4), {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        } else if (!isMac && !isMacKey) {
          this.callbacks.set(key, {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        }
      }
    }
  }
  exec(self, event) {
    if (!this.allKeys.has(event.key)) {
      return;
    }
    const info2 = this.callbacks.get(__privateMethod(this, _KeyboardManager_instances, serialize_fn).call(this, event));
    if (!info2) {
      return;
    }
    const {
      callback,
      options: {
        bubbles = false,
        args = [],
        checker = null
      }
    } = info2;
    if (checker && !checker(self, event)) {
      return;
    }
    callback.bind(self, ...args, event)();
    if (!bubbles) {
      stopEvent(event);
    }
  }
};
_KeyboardManager_instances = new WeakSet();
serialize_fn = function(event) {
  if (event.altKey) {
    this.buffer.push("alt");
  }
  if (event.ctrlKey) {
    this.buffer.push("ctrl");
  }
  if (event.metaKey) {
    this.buffer.push("meta");
  }
  if (event.shiftKey) {
    this.buffer.push("shift");
  }
  this.buffer.push(event.key);
  const str = this.buffer.join("+");
  this.buffer.length = 0;
  return str;
};
var _ColorManager = class _ColorManager {
  get _colors() {
    const colors = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    getColorValues(colors);
    return shadow(this, "_colors", colors);
  }
  convert(color) {
    const rgb = getRGB(color);
    if (!window.matchMedia("(forced-colors: active)").matches) {
      return rgb;
    }
    for (const [name, RGB] of this._colors) {
      if (RGB.every((x, i) => x === rgb[i])) {
        return _ColorManager._colorsMapping.get(name);
      }
    }
    return rgb;
  }
  getHexCode(name) {
    const rgb = this._colors.get(name);
    if (!rgb) {
      return name;
    }
    return Util.makeHexColor(...rgb);
  }
};
__publicField(_ColorManager, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
var ColorManager = _ColorManager;
var _abortController, _activeEditor, _allEditors, _allLayers, _altTextManager, _annotationStorage, _changedExistingAnnotations, _commandManager, _copyPasteAC, _currentDrawingSession, _currentPageIndex, _deletedAnnotationsElementIds, _draggingEditors, _editorTypes, _editorsToRescale, _enableHighlightFloatingButton, _enableUpdatedAddImage, _enableNewAltTextWhenAddingImage, _filterFactory, _focusMainContainerTimeoutId, _focusManagerAC, _highlightColors, _highlightWhenShiftUp, _highlightToolbar, _idManager, _isEnabled, _isWaiting, _keyboardManagerAC, _lastActiveElement, _mainHighlightColorPicker, _mlManager, _mode, _selectedEditors, _selectedTextNode, _pageColors, _showAllStates, _previousStates, _translation, _translationTimeoutId, _container, _viewer, _updateModeCapability, _AnnotationEditorUIManager_instances, getAnchorElementForSelection_fn, getLayerForTextLayer_fn, displayHighlightToolbar_fn, selectionChange_fn, onSelectEnd_fn, addSelectionListener_fn, addFocusManager_fn, removeFocusManager_fn, addKeyboardManager_fn, removeKeyboardManager_fn, addCopyPasteListeners_fn, removeCopyPasteListeners_fn, addDragAndDropListeners_fn, dispatchUpdateStates_fn, dispatchUpdateUI_fn, enableAll_fn, disableAll_fn, addEditorToLayer_fn, lastSelectedEditor_get, isEmpty_fn, selectEditors_fn;
var _AnnotationEditorUIManager = class _AnnotationEditorUIManager {
  constructor(container, viewer, altTextManager, eventBus, pdfDocument, pageColors, highlightColors, enableHighlightFloatingButton, enableUpdatedAddImage, enableNewAltTextWhenAddingImage, mlManager, editorUndoBar, supportsPinchToZoom) {
    __privateAdd(this, _AnnotationEditorUIManager_instances);
    __privateAdd(this, _abortController, new AbortController());
    __privateAdd(this, _activeEditor, null);
    __privateAdd(this, _allEditors, /* @__PURE__ */ new Map());
    __privateAdd(this, _allLayers, /* @__PURE__ */ new Map());
    __privateAdd(this, _altTextManager, null);
    __privateAdd(this, _annotationStorage, null);
    __privateAdd(this, _changedExistingAnnotations, null);
    __privateAdd(this, _commandManager, new CommandManager());
    __privateAdd(this, _copyPasteAC, null);
    __privateAdd(this, _currentDrawingSession, null);
    __privateAdd(this, _currentPageIndex, 0);
    __privateAdd(this, _deletedAnnotationsElementIds, /* @__PURE__ */ new Set());
    __privateAdd(this, _draggingEditors, null);
    __privateAdd(this, _editorTypes, null);
    __privateAdd(this, _editorsToRescale, /* @__PURE__ */ new Set());
    __publicField(this, "_editorUndoBar", null);
    __privateAdd(this, _enableHighlightFloatingButton, false);
    __privateAdd(this, _enableUpdatedAddImage, false);
    __privateAdd(this, _enableNewAltTextWhenAddingImage, false);
    __privateAdd(this, _filterFactory, null);
    __privateAdd(this, _focusMainContainerTimeoutId, null);
    __privateAdd(this, _focusManagerAC, null);
    __privateAdd(this, _highlightColors, null);
    __privateAdd(this, _highlightWhenShiftUp, false);
    __privateAdd(this, _highlightToolbar, null);
    __privateAdd(this, _idManager, new IdManager());
    __privateAdd(this, _isEnabled, false);
    __privateAdd(this, _isWaiting, false);
    __privateAdd(this, _keyboardManagerAC, null);
    __privateAdd(this, _lastActiveElement, null);
    __privateAdd(this, _mainHighlightColorPicker, null);
    __privateAdd(this, _mlManager, null);
    __privateAdd(this, _mode, AnnotationEditorType.NONE);
    __privateAdd(this, _selectedEditors, /* @__PURE__ */ new Set());
    __privateAdd(this, _selectedTextNode, null);
    __privateAdd(this, _pageColors, null);
    __privateAdd(this, _showAllStates, null);
    __privateAdd(this, _previousStates, {
      isEditing: false,
      isEmpty: true,
      hasSomethingToUndo: false,
      hasSomethingToRedo: false,
      hasSelectedEditor: false,
      hasSelectedText: false
    });
    __privateAdd(this, _translation, [0, 0]);
    __privateAdd(this, _translationTimeoutId, null);
    __privateAdd(this, _container, null);
    __privateAdd(this, _viewer, null);
    __privateAdd(this, _updateModeCapability, null);
    const signal = this._signal = __privateGet(this, _abortController).signal;
    __privateSet(this, _container, container);
    __privateSet(this, _viewer, viewer);
    __privateSet(this, _altTextManager, altTextManager);
    this._eventBus = eventBus;
    eventBus._on("editingaction", this.onEditingAction.bind(this), {
      signal
    });
    eventBus._on("pagechanging", this.onPageChanging.bind(this), {
      signal
    });
    eventBus._on("scalechanging", this.onScaleChanging.bind(this), {
      signal
    });
    eventBus._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal
    });
    eventBus._on("setpreference", this.onSetPreference.bind(this), {
      signal
    });
    eventBus._on("switchannotationeditorparams", (evt) => this.updateParams(evt.type, evt.value), {
      signal
    });
    __privateMethod(this, _AnnotationEditorUIManager_instances, addSelectionListener_fn).call(this);
    __privateMethod(this, _AnnotationEditorUIManager_instances, addDragAndDropListeners_fn).call(this);
    __privateMethod(this, _AnnotationEditorUIManager_instances, addKeyboardManager_fn).call(this);
    __privateSet(this, _annotationStorage, pdfDocument.annotationStorage);
    __privateSet(this, _filterFactory, pdfDocument.filterFactory);
    __privateSet(this, _pageColors, pageColors);
    __privateSet(this, _highlightColors, highlightColors || null);
    __privateSet(this, _enableHighlightFloatingButton, enableHighlightFloatingButton);
    __privateSet(this, _enableUpdatedAddImage, enableUpdatedAddImage);
    __privateSet(this, _enableNewAltTextWhenAddingImage, enableNewAltTextWhenAddingImage);
    __privateSet(this, _mlManager, mlManager || null);
    this.viewParameters = {
      realScale: PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: 0
    };
    this.isShiftKeyDown = false;
    this._editorUndoBar = editorUndoBar || null;
    this._supportsPinchToZoom = supportsPinchToZoom !== false;
  }
  static get _keyboardManager() {
    const proto = _AnnotationEditorUIManager.prototype;
    const arrowChecker = (self) => __privateGet(self, _container).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && self.hasSomethingToControl();
    const textInputChecker = (_self, {
      target: el
    }) => {
      if (el instanceof HTMLInputElement) {
        const {
          type
        } = el;
        return type !== "text" && type !== "number";
      }
      return true;
    };
    const small = this.TRANSLATE_SMALL;
    const big = this.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], proto.selectAll, {
      checker: textInputChecker
    }], [["ctrl+z", "mac+meta+z"], proto.undo, {
      checker: textInputChecker
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], proto.redo, {
      checker: textInputChecker
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], proto.delete, {
      checker: textInputChecker
    }], [["Enter", "mac+Enter"], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && __privateGet(self, _container).contains(el) && !self.isEnterHandled
    }], [[" ", "mac+ "], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && __privateGet(self, _container).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], proto.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto.translateSelectedEditors, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto.translateSelectedEditors, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  destroy() {
    var _a2, _b, _c, _d, _e;
    (_a2 = __privateGet(this, _updateModeCapability)) == null ? void 0 : _a2.resolve();
    __privateSet(this, _updateModeCapability, null);
    (_b = __privateGet(this, _abortController)) == null ? void 0 : _b.abort();
    __privateSet(this, _abortController, null);
    this._signal = null;
    for (const layer of __privateGet(this, _allLayers).values()) {
      layer.destroy();
    }
    __privateGet(this, _allLayers).clear();
    __privateGet(this, _allEditors).clear();
    __privateGet(this, _editorsToRescale).clear();
    __privateSet(this, _activeEditor, null);
    __privateGet(this, _selectedEditors).clear();
    __privateGet(this, _commandManager).destroy();
    (_c = __privateGet(this, _altTextManager)) == null ? void 0 : _c.destroy();
    (_d = __privateGet(this, _highlightToolbar)) == null ? void 0 : _d.hide();
    __privateSet(this, _highlightToolbar, null);
    if (__privateGet(this, _focusMainContainerTimeoutId)) {
      clearTimeout(__privateGet(this, _focusMainContainerTimeoutId));
      __privateSet(this, _focusMainContainerTimeoutId, null);
    }
    if (__privateGet(this, _translationTimeoutId)) {
      clearTimeout(__privateGet(this, _translationTimeoutId));
      __privateSet(this, _translationTimeoutId, null);
    }
    (_e = this._editorUndoBar) == null ? void 0 : _e.destroy();
  }
  combinedSignal(ac) {
    return AbortSignal.any([this._signal, ac.signal]);
  }
  get mlManager() {
    return __privateGet(this, _mlManager);
  }
  get useNewAltTextFlow() {
    return __privateGet(this, _enableUpdatedAddImage);
  }
  get useNewAltTextWhenAddingImage() {
    return __privateGet(this, _enableNewAltTextWhenAddingImage);
  }
  get hcmFilter() {
    return shadow(this, "hcmFilter", __privateGet(this, _pageColors) ? __privateGet(this, _filterFactory).addHCMFilter(__privateGet(this, _pageColors).foreground, __privateGet(this, _pageColors).background) : "none");
  }
  get direction() {
    return shadow(this, "direction", getComputedStyle(__privateGet(this, _container)).direction);
  }
  get highlightColors() {
    return shadow(this, "highlightColors", __privateGet(this, _highlightColors) ? new Map(__privateGet(this, _highlightColors).split(",").map((pair) => pair.split("=").map((x) => x.trim()))) : null);
  }
  get highlightColorNames() {
    return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (e) => e.reverse())) : null);
  }
  setCurrentDrawingSession(layer) {
    if (layer) {
      this.unselectAll();
      this.disableUserSelect(true);
    } else {
      this.disableUserSelect(false);
    }
    __privateSet(this, _currentDrawingSession, layer);
  }
  setMainHighlightColorPicker(colorPicker) {
    __privateSet(this, _mainHighlightColorPicker, colorPicker);
  }
  editAltText(editor, firstTime = false) {
    var _a2;
    (_a2 = __privateGet(this, _altTextManager)) == null ? void 0 : _a2.editAltText(this, editor, firstTime);
  }
  switchToMode(mode, callback) {
    this._eventBus.on("annotationeditormodechanged", callback, {
      once: true,
      signal: this._signal
    });
    this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode
    });
  }
  setPreference(name, value) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name,
      value
    });
  }
  onSetPreference({
    name,
    value
  }) {
    switch (name) {
      case "enableNewAltTextWhenAddingImage":
        __privateSet(this, _enableNewAltTextWhenAddingImage, value);
        break;
    }
  }
  onPageChanging({
    pageNumber
  }) {
    __privateSet(this, _currentPageIndex, pageNumber - 1);
  }
  focusMainContainer() {
    __privateGet(this, _container).focus();
  }
  findParent(x, y) {
    for (const layer of __privateGet(this, _allLayers).values()) {
      const {
        x: layerX,
        y: layerY,
        width,
        height
      } = layer.div.getBoundingClientRect();
      if (x >= layerX && x <= layerX + width && y >= layerY && y <= layerY + height) {
        return layer;
      }
    }
    return null;
  }
  disableUserSelect(value = false) {
    __privateGet(this, _viewer).classList.toggle("noUserSelect", value);
  }
  addShouldRescale(editor) {
    __privateGet(this, _editorsToRescale).add(editor);
  }
  removeShouldRescale(editor) {
    __privateGet(this, _editorsToRescale).delete(editor);
  }
  onScaleChanging({
    scale
  }) {
    var _a2;
    this.commitOrRemove();
    this.viewParameters.realScale = scale * PixelsPerInch.PDF_TO_CSS_UNITS;
    for (const editor of __privateGet(this, _editorsToRescale)) {
      editor.onScaleChanging();
    }
    (_a2 = __privateGet(this, _currentDrawingSession)) == null ? void 0 : _a2.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation
  }) {
    this.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  highlightSelection(methodOfCreation = "") {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    } = selection;
    const text = selection.toString();
    const anchorElement = __privateMethod(this, _AnnotationEditorUIManager_instances, getAnchorElementForSelection_fn).call(this, selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    selection.empty();
    const layer = __privateMethod(this, _AnnotationEditorUIManager_instances, getLayerForTextLayer_fn).call(this, textLayer);
    const isNoneMode = __privateGet(this, _mode) === AnnotationEditorType.NONE;
    const callback = () => {
      layer == null ? void 0 : layer.createAndAddNewEditor({
        x: 0,
        y: 0
      }, false, {
        methodOfCreation,
        boxes,
        anchorNode,
        anchorOffset,
        focusNode,
        focusOffset,
        text
      });
      if (isNoneMode) {
        this.showAllEditors("highlight", true, true);
      }
    };
    if (isNoneMode) {
      this.switchToMode(AnnotationEditorType.HIGHLIGHT, callback);
      return;
    }
    callback();
  }
  addToAnnotationStorage(editor) {
    if (!editor.isEmpty() && __privateGet(this, _annotationStorage) && !__privateGet(this, _annotationStorage).has(editor.id)) {
      __privateGet(this, _annotationStorage).setValue(editor.id, editor);
    }
  }
  blur() {
    this.isShiftKeyDown = false;
    if (__privateGet(this, _highlightWhenShiftUp)) {
      __privateSet(this, _highlightWhenShiftUp, false);
      __privateMethod(this, _AnnotationEditorUIManager_instances, onSelectEnd_fn).call(this, "main_toolbar");
    }
    if (!this.hasSelection) {
      return;
    }
    const {
      activeElement
    } = document;
    for (const editor of __privateGet(this, _selectedEditors)) {
      if (editor.div.contains(activeElement)) {
        __privateSet(this, _lastActiveElement, [editor, activeElement]);
        editor._focusEventsAllowed = false;
        break;
      }
    }
  }
  focus() {
    if (!__privateGet(this, _lastActiveElement)) {
      return;
    }
    const [lastEditor, lastActiveElement] = __privateGet(this, _lastActiveElement);
    __privateSet(this, _lastActiveElement, null);
    lastActiveElement.addEventListener("focusin", () => {
      lastEditor._focusEventsAllowed = true;
    }, {
      once: true,
      signal: this._signal
    });
    lastActiveElement.focus();
  }
  addEditListeners() {
    __privateMethod(this, _AnnotationEditorUIManager_instances, addKeyboardManager_fn).call(this);
    __privateMethod(this, _AnnotationEditorUIManager_instances, addCopyPasteListeners_fn).call(this);
  }
  removeEditListeners() {
    __privateMethod(this, _AnnotationEditorUIManager_instances, removeKeyboardManager_fn).call(this);
    __privateMethod(this, _AnnotationEditorUIManager_instances, removeCopyPasteListeners_fn).call(this);
  }
  dragOver(event) {
    for (const {
      type
    } of event.dataTransfer.items) {
      for (const editorType of __privateGet(this, _editorTypes)) {
        if (editorType.isHandlingMimeForPasting(type)) {
          event.dataTransfer.dropEffect = "copy";
          event.preventDefault();
          return;
        }
      }
    }
  }
  drop(event) {
    for (const item of event.dataTransfer.items) {
      for (const editorType of __privateGet(this, _editorTypes)) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          event.preventDefault();
          return;
        }
      }
    }
  }
  copy(event) {
    var _a2;
    event.preventDefault();
    (_a2 = __privateGet(this, _activeEditor)) == null ? void 0 : _a2.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    const editors = [];
    for (const editor of __privateGet(this, _selectedEditors)) {
      const serialized = editor.serialize(true);
      if (serialized) {
        editors.push(serialized);
      }
    }
    if (editors.length === 0) {
      return;
    }
    event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
  }
  cut(event) {
    this.copy(event);
    this.delete();
  }
  async paste(event) {
    event.preventDefault();
    const {
      clipboardData
    } = event;
    for (const item of clipboardData.items) {
      for (const editorType of __privateGet(this, _editorTypes)) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          return;
        }
      }
    }
    let data = clipboardData.getData("application/pdfjs");
    if (!data) {
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
      return;
    }
    if (!Array.isArray(data)) {
      return;
    }
    this.unselectAll();
    const layer = this.currentLayer;
    try {
      const newEditors = [];
      for (const editor of data) {
        const deserializedEditor = await layer.deserialize(editor);
        if (!deserializedEditor) {
          return;
        }
        newEditors.push(deserializedEditor);
      }
      const cmd = () => {
        for (const editor of newEditors) {
          __privateMethod(this, _AnnotationEditorUIManager_instances, addEditorToLayer_fn).call(this, editor);
        }
        __privateMethod(this, _AnnotationEditorUIManager_instances, selectEditors_fn).call(this, newEditors);
      };
      const undo = () => {
        for (const editor of newEditors) {
          editor.remove();
        }
      };
      this.addCommands({
        cmd,
        undo,
        mustExec: true
      });
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
    }
  }
  keydown(event) {
    if (!this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = true;
    }
    if (__privateGet(this, _mode) !== AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard) {
      _AnnotationEditorUIManager._keyboardManager.exec(this, event);
    }
  }
  keyup(event) {
    if (this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = false;
      if (__privateGet(this, _highlightWhenShiftUp)) {
        __privateSet(this, _highlightWhenShiftUp, false);
        __privateMethod(this, _AnnotationEditorUIManager_instances, onSelectEnd_fn).call(this, "main_toolbar");
      }
    }
  }
  onEditingAction({
    name
  }) {
    switch (name) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[name]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(isEditing) {
    if (isEditing) {
      __privateMethod(this, _AnnotationEditorUIManager_instances, addFocusManager_fn).call(this);
      __privateMethod(this, _AnnotationEditorUIManager_instances, addCopyPasteListeners_fn).call(this);
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
        isEditing: __privateGet(this, _mode) !== AnnotationEditorType.NONE,
        isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this),
        hasSomethingToUndo: __privateGet(this, _commandManager).hasSomethingToUndo(),
        hasSomethingToRedo: __privateGet(this, _commandManager).hasSomethingToRedo(),
        hasSelectedEditor: false
      });
    } else {
      __privateMethod(this, _AnnotationEditorUIManager_instances, removeFocusManager_fn).call(this);
      __privateMethod(this, _AnnotationEditorUIManager_instances, removeCopyPasteListeners_fn).call(this);
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
        isEditing: false
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(types) {
    if (__privateGet(this, _editorTypes)) {
      return;
    }
    __privateSet(this, _editorTypes, types);
    for (const editorType of __privateGet(this, _editorTypes)) {
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editorType.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return __privateGet(this, _idManager).id;
  }
  get currentLayer() {
    return __privateGet(this, _allLayers).get(__privateGet(this, _currentPageIndex));
  }
  getLayer(pageIndex) {
    return __privateGet(this, _allLayers).get(pageIndex);
  }
  get currentPageIndex() {
    return __privateGet(this, _currentPageIndex);
  }
  addLayer(layer) {
    __privateGet(this, _allLayers).set(layer.pageIndex, layer);
    if (__privateGet(this, _isEnabled)) {
      layer.enable();
    } else {
      layer.disable();
    }
  }
  removeLayer(layer) {
    __privateGet(this, _allLayers).delete(layer.pageIndex);
  }
  async updateMode(mode, editId = null, isFromKeyboard = false) {
    var _a2;
    if (__privateGet(this, _mode) === mode) {
      return;
    }
    if (__privateGet(this, _updateModeCapability)) {
      await __privateGet(this, _updateModeCapability).promise;
      if (!__privateGet(this, _updateModeCapability)) {
        return;
      }
    }
    __privateSet(this, _updateModeCapability, Promise.withResolvers());
    __privateSet(this, _mode, mode);
    if (mode === AnnotationEditorType.NONE) {
      this.setEditingState(false);
      __privateMethod(this, _AnnotationEditorUIManager_instances, disableAll_fn).call(this);
      (_a2 = this._editorUndoBar) == null ? void 0 : _a2.hide();
      __privateGet(this, _updateModeCapability).resolve();
      return;
    }
    this.setEditingState(true);
    await __privateMethod(this, _AnnotationEditorUIManager_instances, enableAll_fn).call(this);
    this.unselectAll();
    for (const layer of __privateGet(this, _allLayers).values()) {
      layer.updateMode(mode);
    }
    if (!editId) {
      if (isFromKeyboard) {
        this.addNewEditorFromKeyboard();
      }
      __privateGet(this, _updateModeCapability).resolve();
      return;
    }
    for (const editor of __privateGet(this, _allEditors).values()) {
      if (editor.annotationElementId === editId) {
        this.setSelected(editor);
        editor.enterInEditMode();
      } else {
        editor.unselect();
      }
    }
    __privateGet(this, _updateModeCapability).resolve();
  }
  addNewEditorFromKeyboard() {
    if (this.currentLayer.canCreateNewEmptyEditor()) {
      this.currentLayer.addNewEditor();
    }
  }
  updateToolbar(mode) {
    if (mode === __privateGet(this, _mode)) {
      return;
    }
    this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode
    });
  }
  updateParams(type, value) {
    var _a2;
    if (!__privateGet(this, _editorTypes)) {
      return;
    }
    switch (type) {
      case AnnotationEditorParamsType.CREATE:
        this.currentLayer.addNewEditor();
        return;
      case AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
        (_a2 = __privateGet(this, _mainHighlightColorPicker)) == null ? void 0 : _a2.updateColor(value);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
        this._eventBus.dispatch("reporttelemetry", {
          source: this,
          details: {
            type: "editing",
            data: {
              type: "highlight",
              action: "toggle_visibility"
            }
          }
        });
        (__privateGet(this, _showAllStates) || __privateSet(this, _showAllStates, /* @__PURE__ */ new Map())).set(type, value);
        this.showAllEditors("highlight", value);
        break;
    }
    for (const editor of __privateGet(this, _selectedEditors)) {
      editor.updateParams(type, value);
    }
    for (const editorType of __privateGet(this, _editorTypes)) {
      editorType.updateDefaultParams(type, value);
    }
  }
  showAllEditors(type, visible, updateButton = false) {
    var _a2;
    for (const editor of __privateGet(this, _allEditors).values()) {
      if (editor.editorType === type) {
        editor.show(visible);
      }
    }
    const state = ((_a2 = __privateGet(this, _showAllStates)) == null ? void 0 : _a2.get(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL)) ?? true;
    if (state !== visible) {
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, [[AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, visible]]);
    }
  }
  enableWaiting(mustWait = false) {
    if (__privateGet(this, _isWaiting) === mustWait) {
      return;
    }
    __privateSet(this, _isWaiting, mustWait);
    for (const layer of __privateGet(this, _allLayers).values()) {
      if (mustWait) {
        layer.disableClick();
      } else {
        layer.enableClick();
      }
      layer.div.classList.toggle("waiting", mustWait);
    }
  }
  getEditors(pageIndex) {
    const editors = [];
    for (const editor of __privateGet(this, _allEditors).values()) {
      if (editor.pageIndex === pageIndex) {
        editors.push(editor);
      }
    }
    return editors;
  }
  getEditor(id) {
    return __privateGet(this, _allEditors).get(id);
  }
  addEditor(editor) {
    __privateGet(this, _allEditors).set(editor.id, editor);
  }
  removeEditor(editor) {
    var _a2;
    if (editor.div.contains(document.activeElement)) {
      if (__privateGet(this, _focusMainContainerTimeoutId)) {
        clearTimeout(__privateGet(this, _focusMainContainerTimeoutId));
      }
      __privateSet(this, _focusMainContainerTimeoutId, setTimeout(() => {
        this.focusMainContainer();
        __privateSet(this, _focusMainContainerTimeoutId, null);
      }, 0));
    }
    __privateGet(this, _allEditors).delete(editor.id);
    this.unselect(editor);
    if (!editor.annotationElementId || !__privateGet(this, _deletedAnnotationsElementIds).has(editor.annotationElementId)) {
      (_a2 = __privateGet(this, _annotationStorage)) == null ? void 0 : _a2.remove(editor.id);
    }
  }
  addDeletedAnnotationElement(editor) {
    __privateGet(this, _deletedAnnotationsElementIds).add(editor.annotationElementId);
    this.addChangedExistingAnnotation(editor);
    editor.deleted = true;
  }
  isDeletedAnnotationElement(annotationElementId) {
    return __privateGet(this, _deletedAnnotationsElementIds).has(annotationElementId);
  }
  removeDeletedAnnotationElement(editor) {
    __privateGet(this, _deletedAnnotationsElementIds).delete(editor.annotationElementId);
    this.removeChangedExistingAnnotation(editor);
    editor.deleted = false;
  }
  setActiveEditor(editor) {
    if (__privateGet(this, _activeEditor) === editor) {
      return;
    }
    __privateSet(this, _activeEditor, editor);
    if (editor) {
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editor.propertiesToUpdate);
    }
  }
  updateUI(editor) {
    if (__privateGet(this, _AnnotationEditorUIManager_instances, lastSelectedEditor_get) === editor) {
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editor.propertiesToUpdate);
    }
  }
  updateUIForDefaultProperties(editorType) {
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editorType.defaultPropertiesToUpdate);
  }
  toggleSelected(editor) {
    if (__privateGet(this, _selectedEditors).has(editor)) {
      __privateGet(this, _selectedEditors).delete(editor);
      editor.unselect();
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    __privateGet(this, _selectedEditors).add(editor);
    editor.select();
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editor.propertiesToUpdate);
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
      hasSelectedEditor: true
    });
  }
  setSelected(editor) {
    var _a2;
    (_a2 = __privateGet(this, _currentDrawingSession)) == null ? void 0 : _a2.commitOrRemove();
    for (const ed of __privateGet(this, _selectedEditors)) {
      if (ed !== editor) {
        ed.unselect();
      }
    }
    __privateGet(this, _selectedEditors).clear();
    __privateGet(this, _selectedEditors).add(editor);
    editor.select();
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, editor.propertiesToUpdate);
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
      hasSelectedEditor: true
    });
  }
  isSelected(editor) {
    return __privateGet(this, _selectedEditors).has(editor);
  }
  get firstSelectedEditor() {
    return __privateGet(this, _selectedEditors).values().next().value;
  }
  unselect(editor) {
    editor.unselect();
    __privateGet(this, _selectedEditors).delete(editor);
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return __privateGet(this, _selectedEditors).size !== 0;
  }
  get isEnterHandled() {
    return __privateGet(this, _selectedEditors).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var _a2;
    __privateGet(this, _commandManager).undo();
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
      hasSomethingToUndo: __privateGet(this, _commandManager).hasSomethingToUndo(),
      hasSomethingToRedo: true,
      isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this)
    });
    (_a2 = this._editorUndoBar) == null ? void 0 : _a2.hide();
  }
  redo() {
    __privateGet(this, _commandManager).redo();
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
      hasSomethingToUndo: true,
      hasSomethingToRedo: __privateGet(this, _commandManager).hasSomethingToRedo(),
      isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this)
    });
  }
  addCommands(params) {
    __privateGet(this, _commandManager).add(params);
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
      hasSomethingToUndo: true,
      hasSomethingToRedo: false,
      isEmpty: __privateMethod(this, _AnnotationEditorUIManager_instances, isEmpty_fn).call(this)
    });
  }
  cleanUndoStack(type) {
    __privateGet(this, _commandManager).cleanType(type);
  }
  delete() {
    var _a2;
    this.commitOrRemove();
    const drawingEditor = (_a2 = this.currentLayer) == null ? void 0 : _a2.endDrawingSession(true);
    if (!this.hasSelection && !drawingEditor) {
      return;
    }
    const editors = drawingEditor ? [drawingEditor] : [...__privateGet(this, _selectedEditors)];
    const cmd = () => {
      var _a3;
      (_a3 = this._editorUndoBar) == null ? void 0 : _a3.show(undo, editors.length === 1 ? editors[0].editorType : editors.length);
      for (const editor of editors) {
        editor.remove();
      }
    };
    const undo = () => {
      for (const editor of editors) {
        __privateMethod(this, _AnnotationEditorUIManager_instances, addEditorToLayer_fn).call(this, editor);
      }
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  commitOrRemove() {
    var _a2;
    (_a2 = __privateGet(this, _activeEditor)) == null ? void 0 : _a2.commitOrRemove();
  }
  hasSomethingToControl() {
    return __privateGet(this, _activeEditor) || this.hasSelection;
  }
  selectAll() {
    for (const editor of __privateGet(this, _selectedEditors)) {
      editor.commit();
    }
    __privateMethod(this, _AnnotationEditorUIManager_instances, selectEditors_fn).call(this, __privateGet(this, _allEditors).values());
  }
  unselectAll() {
    var _a2;
    if (__privateGet(this, _activeEditor)) {
      __privateGet(this, _activeEditor).commitOrRemove();
      if (__privateGet(this, _mode) !== AnnotationEditorType.NONE) {
        return;
      }
    }
    if ((_a2 = __privateGet(this, _currentDrawingSession)) == null ? void 0 : _a2.commitOrRemove()) {
      return;
    }
    if (!this.hasSelection) {
      return;
    }
    for (const editor of __privateGet(this, _selectedEditors)) {
      editor.unselect();
    }
    __privateGet(this, _selectedEditors).clear();
    __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
      hasSelectedEditor: false
    });
  }
  translateSelectedEditors(x, y, noCommit = false) {
    if (!noCommit) {
      this.commitOrRemove();
    }
    if (!this.hasSelection) {
      return;
    }
    __privateGet(this, _translation)[0] += x;
    __privateGet(this, _translation)[1] += y;
    const [totalX, totalY] = __privateGet(this, _translation);
    const editors = [...__privateGet(this, _selectedEditors)];
    const TIME_TO_WAIT = 1e3;
    if (__privateGet(this, _translationTimeoutId)) {
      clearTimeout(__privateGet(this, _translationTimeoutId));
    }
    __privateSet(this, _translationTimeoutId, setTimeout(() => {
      __privateSet(this, _translationTimeoutId, null);
      __privateGet(this, _translation)[0] = __privateGet(this, _translation)[1] = 0;
      this.addCommands({
        cmd: () => {
          for (const editor of editors) {
            if (__privateGet(this, _allEditors).has(editor.id)) {
              editor.translateInPage(totalX, totalY);
            }
          }
        },
        undo: () => {
          for (const editor of editors) {
            if (__privateGet(this, _allEditors).has(editor.id)) {
              editor.translateInPage(-totalX, -totalY);
            }
          }
        },
        mustExec: false
      });
    }, TIME_TO_WAIT));
    for (const editor of editors) {
      editor.translateInPage(x, y);
    }
  }
  setUpDragSession() {
    if (!this.hasSelection) {
      return;
    }
    this.disableUserSelect(true);
    __privateSet(this, _draggingEditors, /* @__PURE__ */ new Map());
    for (const editor of __privateGet(this, _selectedEditors)) {
      __privateGet(this, _draggingEditors).set(editor, {
        savedX: editor.x,
        savedY: editor.y,
        savedPageIndex: editor.pageIndex,
        newX: 0,
        newY: 0,
        newPageIndex: -1
      });
    }
  }
  endDragSession() {
    if (!__privateGet(this, _draggingEditors)) {
      return false;
    }
    this.disableUserSelect(false);
    const map = __privateGet(this, _draggingEditors);
    __privateSet(this, _draggingEditors, null);
    let mustBeAddedInUndoStack = false;
    for (const [{
      x,
      y,
      pageIndex
    }, value] of map) {
      value.newX = x;
      value.newY = y;
      value.newPageIndex = pageIndex;
      mustBeAddedInUndoStack || (mustBeAddedInUndoStack = x !== value.savedX || y !== value.savedY || pageIndex !== value.savedPageIndex);
    }
    if (!mustBeAddedInUndoStack) {
      return false;
    }
    const move = (editor, x, y, pageIndex) => {
      if (__privateGet(this, _allEditors).has(editor.id)) {
        const parent = __privateGet(this, _allLayers).get(pageIndex);
        if (parent) {
          editor._setParentAndPosition(parent, x, y);
        } else {
          editor.pageIndex = pageIndex;
          editor.x = x;
          editor.y = y;
        }
      }
    };
    this.addCommands({
      cmd: () => {
        for (const [editor, {
          newX,
          newY,
          newPageIndex
        }] of map) {
          move(editor, newX, newY, newPageIndex);
        }
      },
      undo: () => {
        for (const [editor, {
          savedX,
          savedY,
          savedPageIndex
        }] of map) {
          move(editor, savedX, savedY, savedPageIndex);
        }
      },
      mustExec: true
    });
    return true;
  }
  dragSelectedEditors(tx, ty) {
    if (!__privateGet(this, _draggingEditors)) {
      return;
    }
    for (const editor of __privateGet(this, _draggingEditors).keys()) {
      editor.drag(tx, ty);
    }
  }
  rebuild(editor) {
    if (editor.parent === null) {
      const parent = this.getLayer(editor.pageIndex);
      if (parent) {
        parent.changeParent(editor);
        parent.addOrRebuild(editor);
      } else {
        this.addEditor(editor);
        this.addToAnnotationStorage(editor);
        editor.rebuild();
      }
    } else {
      editor.parent.addOrRebuild(editor);
    }
  }
  get isEditorHandlingKeyboard() {
    var _a2;
    return ((_a2 = this.getActive()) == null ? void 0 : _a2.shouldGetKeyboardEvents()) || __privateGet(this, _selectedEditors).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(editor) {
    return __privateGet(this, _activeEditor) === editor;
  }
  getActive() {
    return __privateGet(this, _activeEditor);
  }
  getMode() {
    return __privateGet(this, _mode);
  }
  get imageManager() {
    return shadow(this, "imageManager", new ImageManager());
  }
  getSelectionBoxes(textLayer) {
    if (!textLayer) {
      return null;
    }
    const selection = document.getSelection();
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      if (!textLayer.contains(selection.getRangeAt(i).commonAncestorContainer)) {
        return null;
      }
    }
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    let rotator;
    switch (textLayer.getAttribute("data-main-rotation")) {
      case "90":
        rotator = (x, y, w, h) => ({
          x: (y - layerY) / parentHeight,
          y: 1 - (x + w - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      case "180":
        rotator = (x, y, w, h) => ({
          x: 1 - (x + w - layerX) / parentWidth,
          y: 1 - (y + h - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
      case "270":
        rotator = (x, y, w, h) => ({
          x: 1 - (y + h - layerY) / parentHeight,
          y: (x - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      default:
        rotator = (x, y, w, h) => ({
          x: (x - layerX) / parentWidth,
          y: (y - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
    }
    const boxes = [];
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      const range = selection.getRangeAt(i);
      if (range.collapsed) {
        continue;
      }
      for (const {
        x,
        y,
        width,
        height
      } of range.getClientRects()) {
        if (width === 0 || height === 0) {
          continue;
        }
        boxes.push(rotator(x, y, width, height));
      }
    }
    return boxes.length === 0 ? null : boxes;
  }
  addChangedExistingAnnotation({
    annotationElementId,
    id
  }) {
    (__privateGet(this, _changedExistingAnnotations) || __privateSet(this, _changedExistingAnnotations, /* @__PURE__ */ new Map())).set(annotationElementId, id);
  }
  removeChangedExistingAnnotation({
    annotationElementId
  }) {
    var _a2;
    (_a2 = __privateGet(this, _changedExistingAnnotations)) == null ? void 0 : _a2.delete(annotationElementId);
  }
  renderAnnotationElement(annotation) {
    var _a2;
    const editorId = (_a2 = __privateGet(this, _changedExistingAnnotations)) == null ? void 0 : _a2.get(annotation.data.id);
    if (!editorId) {
      return;
    }
    const editor = __privateGet(this, _annotationStorage).getRawValue(editorId);
    if (!editor) {
      return;
    }
    if (__privateGet(this, _mode) === AnnotationEditorType.NONE && !editor.hasBeenModified) {
      return;
    }
    editor.renderAnnotationElement(annotation);
  }
};
_abortController = new WeakMap();
_activeEditor = new WeakMap();
_allEditors = new WeakMap();
_allLayers = new WeakMap();
_altTextManager = new WeakMap();
_annotationStorage = new WeakMap();
_changedExistingAnnotations = new WeakMap();
_commandManager = new WeakMap();
_copyPasteAC = new WeakMap();
_currentDrawingSession = new WeakMap();
_currentPageIndex = new WeakMap();
_deletedAnnotationsElementIds = new WeakMap();
_draggingEditors = new WeakMap();
_editorTypes = new WeakMap();
_editorsToRescale = new WeakMap();
_enableHighlightFloatingButton = new WeakMap();
_enableUpdatedAddImage = new WeakMap();
_enableNewAltTextWhenAddingImage = new WeakMap();
_filterFactory = new WeakMap();
_focusMainContainerTimeoutId = new WeakMap();
_focusManagerAC = new WeakMap();
_highlightColors = new WeakMap();
_highlightWhenShiftUp = new WeakMap();
_highlightToolbar = new WeakMap();
_idManager = new WeakMap();
_isEnabled = new WeakMap();
_isWaiting = new WeakMap();
_keyboardManagerAC = new WeakMap();
_lastActiveElement = new WeakMap();
_mainHighlightColorPicker = new WeakMap();
_mlManager = new WeakMap();
_mode = new WeakMap();
_selectedEditors = new WeakMap();
_selectedTextNode = new WeakMap();
_pageColors = new WeakMap();
_showAllStates = new WeakMap();
_previousStates = new WeakMap();
_translation = new WeakMap();
_translationTimeoutId = new WeakMap();
_container = new WeakMap();
_viewer = new WeakMap();
_updateModeCapability = new WeakMap();
_AnnotationEditorUIManager_instances = new WeakSet();
getAnchorElementForSelection_fn = function({
  anchorNode
}) {
  return anchorNode.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
};
getLayerForTextLayer_fn = function(textLayer) {
  const {
    currentLayer
  } = this;
  if (currentLayer.hasTextLayer(textLayer)) {
    return currentLayer;
  }
  for (const layer of __privateGet(this, _allLayers).values()) {
    if (layer.hasTextLayer(textLayer)) {
      return layer;
    }
  }
  return null;
};
displayHighlightToolbar_fn = function() {
  const selection = document.getSelection();
  if (!selection || selection.isCollapsed) {
    return;
  }
  const anchorElement = __privateMethod(this, _AnnotationEditorUIManager_instances, getAnchorElementForSelection_fn).call(this, selection);
  const textLayer = anchorElement.closest(".textLayer");
  const boxes = this.getSelectionBoxes(textLayer);
  if (!boxes) {
    return;
  }
  __privateGet(this, _highlightToolbar) || __privateSet(this, _highlightToolbar, new HighlightToolbar(this));
  __privateGet(this, _highlightToolbar).show(textLayer, boxes, this.direction === "ltr");
};
selectionChange_fn = function() {
  var _a2, _b, _c;
  const selection = document.getSelection();
  if (!selection || selection.isCollapsed) {
    if (__privateGet(this, _selectedTextNode)) {
      (_a2 = __privateGet(this, _highlightToolbar)) == null ? void 0 : _a2.hide();
      __privateSet(this, _selectedTextNode, null);
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
        hasSelectedText: false
      });
    }
    return;
  }
  const {
    anchorNode
  } = selection;
  if (anchorNode === __privateGet(this, _selectedTextNode)) {
    return;
  }
  const anchorElement = __privateMethod(this, _AnnotationEditorUIManager_instances, getAnchorElementForSelection_fn).call(this, selection);
  const textLayer = anchorElement.closest(".textLayer");
  if (!textLayer) {
    if (__privateGet(this, _selectedTextNode)) {
      (_b = __privateGet(this, _highlightToolbar)) == null ? void 0 : _b.hide();
      __privateSet(this, _selectedTextNode, null);
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
        hasSelectedText: false
      });
    }
    return;
  }
  (_c = __privateGet(this, _highlightToolbar)) == null ? void 0 : _c.hide();
  __privateSet(this, _selectedTextNode, anchorNode);
  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
    hasSelectedText: true
  });
  if (__privateGet(this, _mode) !== AnnotationEditorType.HIGHLIGHT && __privateGet(this, _mode) !== AnnotationEditorType.NONE) {
    return;
  }
  if (__privateGet(this, _mode) === AnnotationEditorType.HIGHLIGHT) {
    this.showAllEditors("highlight", true, true);
  }
  __privateSet(this, _highlightWhenShiftUp, this.isShiftKeyDown);
  if (!this.isShiftKeyDown) {
    const activeLayer = __privateGet(this, _mode) === AnnotationEditorType.HIGHLIGHT ? __privateMethod(this, _AnnotationEditorUIManager_instances, getLayerForTextLayer_fn).call(this, textLayer) : null;
    activeLayer == null ? void 0 : activeLayer.toggleDrawing();
    const ac = new AbortController();
    const signal = this.combinedSignal(ac);
    const pointerup = (e) => {
      if (e.type === "pointerup" && e.button !== 0) {
        return;
      }
      ac.abort();
      activeLayer == null ? void 0 : activeLayer.toggleDrawing(true);
      if (e.type === "pointerup") {
        __privateMethod(this, _AnnotationEditorUIManager_instances, onSelectEnd_fn).call(this, "main_toolbar");
      }
    };
    window.addEventListener("pointerup", pointerup, {
      signal
    });
    window.addEventListener("blur", pointerup, {
      signal
    });
  }
};
onSelectEnd_fn = function(methodOfCreation = "") {
  if (__privateGet(this, _mode) === AnnotationEditorType.HIGHLIGHT) {
    this.highlightSelection(methodOfCreation);
  } else if (__privateGet(this, _enableHighlightFloatingButton)) {
    __privateMethod(this, _AnnotationEditorUIManager_instances, displayHighlightToolbar_fn).call(this);
  }
};
addSelectionListener_fn = function() {
  document.addEventListener("selectionchange", __privateMethod(this, _AnnotationEditorUIManager_instances, selectionChange_fn).bind(this), {
    signal: this._signal
  });
};
addFocusManager_fn = function() {
  if (__privateGet(this, _focusManagerAC)) {
    return;
  }
  __privateSet(this, _focusManagerAC, new AbortController());
  const signal = this.combinedSignal(__privateGet(this, _focusManagerAC));
  window.addEventListener("focus", this.focus.bind(this), {
    signal
  });
  window.addEventListener("blur", this.blur.bind(this), {
    signal
  });
};
removeFocusManager_fn = function() {
  var _a2;
  (_a2 = __privateGet(this, _focusManagerAC)) == null ? void 0 : _a2.abort();
  __privateSet(this, _focusManagerAC, null);
};
addKeyboardManager_fn = function() {
  if (__privateGet(this, _keyboardManagerAC)) {
    return;
  }
  __privateSet(this, _keyboardManagerAC, new AbortController());
  const signal = this.combinedSignal(__privateGet(this, _keyboardManagerAC));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal
  });
  window.addEventListener("keyup", this.keyup.bind(this), {
    signal
  });
};
removeKeyboardManager_fn = function() {
  var _a2;
  (_a2 = __privateGet(this, _keyboardManagerAC)) == null ? void 0 : _a2.abort();
  __privateSet(this, _keyboardManagerAC, null);
};
addCopyPasteListeners_fn = function() {
  if (__privateGet(this, _copyPasteAC)) {
    return;
  }
  __privateSet(this, _copyPasteAC, new AbortController());
  const signal = this.combinedSignal(__privateGet(this, _copyPasteAC));
  document.addEventListener("copy", this.copy.bind(this), {
    signal
  });
  document.addEventListener("cut", this.cut.bind(this), {
    signal
  });
  document.addEventListener("paste", this.paste.bind(this), {
    signal
  });
};
removeCopyPasteListeners_fn = function() {
  var _a2;
  (_a2 = __privateGet(this, _copyPasteAC)) == null ? void 0 : _a2.abort();
  __privateSet(this, _copyPasteAC, null);
};
addDragAndDropListeners_fn = function() {
  const signal = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal
  });
  document.addEventListener("drop", this.drop.bind(this), {
    signal
  });
};
dispatchUpdateStates_fn = function(details) {
  const hasChanged = Object.entries(details).some(([key, value]) => __privateGet(this, _previousStates)[key] !== value);
  if (hasChanged) {
    this._eventBus.dispatch("annotationeditorstateschanged", {
      source: this,
      details: Object.assign(__privateGet(this, _previousStates), details)
    });
    if (__privateGet(this, _mode) === AnnotationEditorType.HIGHLIGHT && details.hasSelectedEditor === false) {
      __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateUI_fn).call(this, [[AnnotationEditorParamsType.HIGHLIGHT_FREE, true]]);
    }
  }
};
dispatchUpdateUI_fn = function(details) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details
  });
};
enableAll_fn = async function() {
  if (!__privateGet(this, _isEnabled)) {
    __privateSet(this, _isEnabled, true);
    const promises = [];
    for (const layer of __privateGet(this, _allLayers).values()) {
      promises.push(layer.enable());
    }
    await Promise.all(promises);
    for (const editor of __privateGet(this, _allEditors).values()) {
      editor.enable();
    }
  }
};
disableAll_fn = function() {
  this.unselectAll();
  if (__privateGet(this, _isEnabled)) {
    __privateSet(this, _isEnabled, false);
    for (const layer of __privateGet(this, _allLayers).values()) {
      layer.disable();
    }
    for (const editor of __privateGet(this, _allEditors).values()) {
      editor.disable();
    }
  }
};
addEditorToLayer_fn = function(editor) {
  const layer = __privateGet(this, _allLayers).get(editor.pageIndex);
  if (layer) {
    layer.addOrRebuild(editor);
  } else {
    this.addEditor(editor);
    this.addToAnnotationStorage(editor);
  }
};
lastSelectedEditor_get = function() {
  let ed = null;
  for (ed of __privateGet(this, _selectedEditors)) {
  }
  return ed;
};
isEmpty_fn = function() {
  if (__privateGet(this, _allEditors).size === 0) {
    return true;
  }
  if (__privateGet(this, _allEditors).size === 1) {
    for (const editor of __privateGet(this, _allEditors).values()) {
      return editor.isEmpty();
    }
  }
  return false;
};
selectEditors_fn = function(editors) {
  for (const editor of __privateGet(this, _selectedEditors)) {
    editor.unselect();
  }
  __privateGet(this, _selectedEditors).clear();
  for (const editor of editors) {
    if (editor.isEmpty()) {
      continue;
    }
    __privateGet(this, _selectedEditors).add(editor);
    editor.select();
  }
  __privateMethod(this, _AnnotationEditorUIManager_instances, dispatchUpdateStates_fn).call(this, {
    hasSelectedEditor: this.hasSelection
  });
};
__publicField(_AnnotationEditorUIManager, "TRANSLATE_SMALL", 1);
__publicField(_AnnotationEditorUIManager, "TRANSLATE_BIG", 10);
var AnnotationEditorUIManager = _AnnotationEditorUIManager;
var _altText2, _altTextDecorative, _altTextButton, _altTextButtonLabel, _altTextTooltip, _altTextTooltipTimeout, _altTextWasFromKeyBoard, _badge, _editor2, _guessedText, _textWithDisclaimer, _useNewAltTextFlow, _l10nNewButton, _AltText_instances, label_get, setState_fn;
var _AltText = class _AltText {
  constructor(editor) {
    __privateAdd(this, _AltText_instances);
    __privateAdd(this, _altText2, null);
    __privateAdd(this, _altTextDecorative, false);
    __privateAdd(this, _altTextButton, null);
    __privateAdd(this, _altTextButtonLabel, null);
    __privateAdd(this, _altTextTooltip, null);
    __privateAdd(this, _altTextTooltipTimeout, null);
    __privateAdd(this, _altTextWasFromKeyBoard, false);
    __privateAdd(this, _badge, null);
    __privateAdd(this, _editor2, null);
    __privateAdd(this, _guessedText, null);
    __privateAdd(this, _textWithDisclaimer, null);
    __privateAdd(this, _useNewAltTextFlow, false);
    __privateSet(this, _editor2, editor);
    __privateSet(this, _useNewAltTextFlow, editor._uiManager.useNewAltTextFlow);
    __privateGet(_AltText, _l10nNewButton) || __privateSet(_AltText, _l10nNewButton, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(l10n) {
    _AltText._l10n ?? (_AltText._l10n = l10n);
  }
  async render() {
    const altText = __privateSet(this, _altTextButton, document.createElement("button"));
    altText.className = "altText";
    altText.tabIndex = "0";
    const label = __privateSet(this, _altTextButtonLabel, document.createElement("span"));
    altText.append(label);
    if (__privateGet(this, _useNewAltTextFlow)) {
      altText.classList.add("new");
      altText.setAttribute("data-l10n-id", __privateGet(_AltText, _l10nNewButton).missing);
      label.setAttribute("data-l10n-id", __privateGet(_AltText, _l10nNewButton)["missing-label"]);
    } else {
      altText.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
      label.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
    }
    const signal = __privateGet(this, _editor2)._uiManager._signal;
    altText.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    altText.addEventListener("pointerdown", (event) => event.stopPropagation(), {
      signal
    });
    const onClick = (event) => {
      event.preventDefault();
      __privateGet(this, _editor2)._uiManager.editAltText(__privateGet(this, _editor2));
      if (__privateGet(this, _useNewAltTextFlow)) {
        __privateGet(this, _editor2)._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: __privateGet(this, _AltText_instances, label_get)
          }
        });
      }
    };
    altText.addEventListener("click", onClick, {
      capture: true,
      signal
    });
    altText.addEventListener("keydown", (event) => {
      if (event.target === altText && event.key === "Enter") {
        __privateSet(this, _altTextWasFromKeyBoard, true);
        onClick(event);
      }
    }, {
      signal
    });
    await __privateMethod(this, _AltText_instances, setState_fn).call(this);
    return altText;
  }
  finish() {
    if (!__privateGet(this, _altTextButton)) {
      return;
    }
    __privateGet(this, _altTextButton).focus({
      focusVisible: __privateGet(this, _altTextWasFromKeyBoard)
    });
    __privateSet(this, _altTextWasFromKeyBoard, false);
  }
  isEmpty() {
    if (__privateGet(this, _useNewAltTextFlow)) {
      return __privateGet(this, _altText2) === null;
    }
    return !__privateGet(this, _altText2) && !__privateGet(this, _altTextDecorative);
  }
  hasData() {
    if (__privateGet(this, _useNewAltTextFlow)) {
      return __privateGet(this, _altText2) !== null || !!__privateGet(this, _guessedText);
    }
    return this.isEmpty();
  }
  get guessedText() {
    return __privateGet(this, _guessedText);
  }
  async setGuessedText(guessedText) {
    if (__privateGet(this, _altText2) !== null) {
      return;
    }
    __privateSet(this, _guessedText, guessedText);
    __privateSet(this, _textWithDisclaimer, await _AltText._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: guessedText
    }));
    __privateMethod(this, _AltText_instances, setState_fn).call(this);
  }
  toggleAltTextBadge(visibility = false) {
    var _a2;
    if (!__privateGet(this, _useNewAltTextFlow) || __privateGet(this, _altText2)) {
      (_a2 = __privateGet(this, _badge)) == null ? void 0 : _a2.remove();
      __privateSet(this, _badge, null);
      return;
    }
    if (!__privateGet(this, _badge)) {
      const badge = __privateSet(this, _badge, document.createElement("div"));
      badge.className = "noAltTextBadge";
      __privateGet(this, _editor2).div.append(badge);
    }
    __privateGet(this, _badge).classList.toggle("hidden", !visibility);
  }
  serialize(isForCopying) {
    let altText = __privateGet(this, _altText2);
    if (!isForCopying && __privateGet(this, _guessedText) === altText) {
      altText = __privateGet(this, _textWithDisclaimer);
    }
    return {
      altText,
      decorative: __privateGet(this, _altTextDecorative),
      guessedText: __privateGet(this, _guessedText),
      textWithDisclaimer: __privateGet(this, _textWithDisclaimer)
    };
  }
  get data() {
    return {
      altText: __privateGet(this, _altText2),
      decorative: __privateGet(this, _altTextDecorative)
    };
  }
  set data({
    altText,
    decorative,
    guessedText,
    textWithDisclaimer,
    cancel = false
  }) {
    if (guessedText) {
      __privateSet(this, _guessedText, guessedText);
      __privateSet(this, _textWithDisclaimer, textWithDisclaimer);
    }
    if (__privateGet(this, _altText2) === altText && __privateGet(this, _altTextDecorative) === decorative) {
      return;
    }
    if (!cancel) {
      __privateSet(this, _altText2, altText);
      __privateSet(this, _altTextDecorative, decorative);
    }
    __privateMethod(this, _AltText_instances, setState_fn).call(this);
  }
  toggle(enabled = false) {
    if (!__privateGet(this, _altTextButton)) {
      return;
    }
    if (!enabled && __privateGet(this, _altTextTooltipTimeout)) {
      clearTimeout(__privateGet(this, _altTextTooltipTimeout));
      __privateSet(this, _altTextTooltipTimeout, null);
    }
    __privateGet(this, _altTextButton).disabled = !enabled;
  }
  shown() {
    __privateGet(this, _editor2)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: __privateGet(this, _AltText_instances, label_get)
      }
    });
  }
  destroy() {
    var _a2, _b;
    (_a2 = __privateGet(this, _altTextButton)) == null ? void 0 : _a2.remove();
    __privateSet(this, _altTextButton, null);
    __privateSet(this, _altTextButtonLabel, null);
    __privateSet(this, _altTextTooltip, null);
    (_b = __privateGet(this, _badge)) == null ? void 0 : _b.remove();
    __privateSet(this, _badge, null);
  }
};
_altText2 = new WeakMap();
_altTextDecorative = new WeakMap();
_altTextButton = new WeakMap();
_altTextButtonLabel = new WeakMap();
_altTextTooltip = new WeakMap();
_altTextTooltipTimeout = new WeakMap();
_altTextWasFromKeyBoard = new WeakMap();
_badge = new WeakMap();
_editor2 = new WeakMap();
_guessedText = new WeakMap();
_textWithDisclaimer = new WeakMap();
_useNewAltTextFlow = new WeakMap();
_l10nNewButton = new WeakMap();
_AltText_instances = new WeakSet();
label_get = function() {
  return __privateGet(this, _altText2) && "added" || __privateGet(this, _altText2) === null && this.guessedText && "review" || "missing";
};
setState_fn = async function() {
  var _a2, _b, _c;
  const button = __privateGet(this, _altTextButton);
  if (!button) {
    return;
  }
  if (__privateGet(this, _useNewAltTextFlow)) {
    button.classList.toggle("done", !!__privateGet(this, _altText2));
    button.setAttribute("data-l10n-id", __privateGet(_AltText, _l10nNewButton)[__privateGet(this, _AltText_instances, label_get)]);
    (_a2 = __privateGet(this, _altTextButtonLabel)) == null ? void 0 : _a2.setAttribute("data-l10n-id", __privateGet(_AltText, _l10nNewButton)[`${__privateGet(this, _AltText_instances, label_get)}-label`]);
    if (!__privateGet(this, _altText2)) {
      (_b = __privateGet(this, _altTextTooltip)) == null ? void 0 : _b.remove();
      return;
    }
  } else {
    if (!__privateGet(this, _altText2) && !__privateGet(this, _altTextDecorative)) {
      button.classList.remove("done");
      (_c = __privateGet(this, _altTextTooltip)) == null ? void 0 : _c.remove();
      return;
    }
    button.classList.add("done");
    button.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let tooltip = __privateGet(this, _altTextTooltip);
  if (!tooltip) {
    __privateSet(this, _altTextTooltip, tooltip = document.createElement("span"));
    tooltip.className = "tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.id = `alt-text-tooltip-${__privateGet(this, _editor2).id}`;
    const DELAY_TO_SHOW_TOOLTIP = 100;
    const signal = __privateGet(this, _editor2)._uiManager._signal;
    signal.addEventListener("abort", () => {
      clearTimeout(__privateGet(this, _altTextTooltipTimeout));
      __privateSet(this, _altTextTooltipTimeout, null);
    }, {
      once: true
    });
    button.addEventListener("mouseenter", () => {
      __privateSet(this, _altTextTooltipTimeout, setTimeout(() => {
        __privateSet(this, _altTextTooltipTimeout, null);
        __privateGet(this, _altTextTooltip).classList.add("show");
        __privateGet(this, _editor2)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, DELAY_TO_SHOW_TOOLTIP));
    }, {
      signal
    });
    button.addEventListener("mouseleave", () => {
      var _a3;
      if (__privateGet(this, _altTextTooltipTimeout)) {
        clearTimeout(__privateGet(this, _altTextTooltipTimeout));
        __privateSet(this, _altTextTooltipTimeout, null);
      }
      (_a3 = __privateGet(this, _altTextTooltip)) == null ? void 0 : _a3.classList.remove("show");
    }, {
      signal
    });
  }
  if (__privateGet(this, _altTextDecorative)) {
    tooltip.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
  } else {
    tooltip.removeAttribute("data-l10n-id");
    tooltip.textContent = __privateGet(this, _altText2);
  }
  if (!tooltip.parentNode) {
    button.append(tooltip);
  }
  const element = __privateGet(this, _editor2).getImageForAltText();
  element == null ? void 0 : element.setAttribute("aria-describedby", tooltip.id);
};
__privateAdd(_AltText, _l10nNewButton, null);
__publicField(_AltText, "_l10n", null);
var AltText = _AltText;
var _container2, _isPinching, _isPinchingStopped, _isPinchingDisabled, _onPinchStart, _onPinching, _onPinchEnd, _signal, _touchInfo, _touchManagerAC, _touchMoveAC, _TouchManager_instances, onTouchStart_fn, onTouchMove_fn, onTouchEnd_fn;
var _TouchManager = class _TouchManager {
  constructor({
    container,
    isPinchingDisabled = null,
    isPinchingStopped = null,
    onPinchStart = null,
    onPinching = null,
    onPinchEnd = null,
    signal
  }) {
    __privateAdd(this, _TouchManager_instances);
    __privateAdd(this, _container2);
    __privateAdd(this, _isPinching, false);
    __privateAdd(this, _isPinchingStopped, null);
    __privateAdd(this, _isPinchingDisabled);
    __privateAdd(this, _onPinchStart);
    __privateAdd(this, _onPinching);
    __privateAdd(this, _onPinchEnd);
    __privateAdd(this, _signal);
    __privateAdd(this, _touchInfo, null);
    __privateAdd(this, _touchManagerAC);
    __privateAdd(this, _touchMoveAC, null);
    __privateSet(this, _container2, container);
    __privateSet(this, _isPinchingStopped, isPinchingStopped);
    __privateSet(this, _isPinchingDisabled, isPinchingDisabled);
    __privateSet(this, _onPinchStart, onPinchStart);
    __privateSet(this, _onPinching, onPinching);
    __privateSet(this, _onPinchEnd, onPinchEnd);
    __privateSet(this, _touchManagerAC, new AbortController());
    __privateSet(this, _signal, AbortSignal.any([signal, __privateGet(this, _touchManagerAC).signal]));
    container.addEventListener("touchstart", __privateMethod(this, _TouchManager_instances, onTouchStart_fn).bind(this), {
      passive: false,
      signal: __privateGet(this, _signal)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return shadow(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
  }
  destroy() {
    var _a2;
    (_a2 = __privateGet(this, _touchManagerAC)) == null ? void 0 : _a2.abort();
    __privateSet(this, _touchManagerAC, null);
  }
};
_container2 = new WeakMap();
_isPinching = new WeakMap();
_isPinchingStopped = new WeakMap();
_isPinchingDisabled = new WeakMap();
_onPinchStart = new WeakMap();
_onPinching = new WeakMap();
_onPinchEnd = new WeakMap();
_signal = new WeakMap();
_touchInfo = new WeakMap();
_touchManagerAC = new WeakMap();
_touchMoveAC = new WeakMap();
_TouchManager_instances = new WeakSet();
onTouchStart_fn = function(evt) {
  var _a2, _b, _c;
  if (((_a2 = __privateGet(this, _isPinchingDisabled)) == null ? void 0 : _a2.call(this)) || evt.touches.length < 2) {
    return;
  }
  if (!__privateGet(this, _touchMoveAC)) {
    __privateSet(this, _touchMoveAC, new AbortController());
    const signal = AbortSignal.any([__privateGet(this, _signal), __privateGet(this, _touchMoveAC).signal]);
    const container = __privateGet(this, _container2);
    const opt = {
      signal,
      passive: false
    };
    container.addEventListener("touchmove", __privateMethod(this, _TouchManager_instances, onTouchMove_fn).bind(this), opt);
    container.addEventListener("touchend", __privateMethod(this, _TouchManager_instances, onTouchEnd_fn).bind(this), opt);
    container.addEventListener("touchcancel", __privateMethod(this, _TouchManager_instances, onTouchEnd_fn).bind(this), opt);
    (_b = __privateGet(this, _onPinchStart)) == null ? void 0 : _b.call(this);
  }
  stopEvent(evt);
  if (evt.touches.length !== 2 || ((_c = __privateGet(this, _isPinchingStopped)) == null ? void 0 : _c.call(this))) {
    __privateSet(this, _touchInfo, null);
    return;
  }
  let [touch0, touch1] = evt.touches;
  if (touch0.identifier > touch1.identifier) {
    [touch0, touch1] = [touch1, touch0];
  }
  __privateSet(this, _touchInfo, {
    touch0X: touch0.screenX,
    touch0Y: touch0.screenY,
    touch1X: touch1.screenX,
    touch1Y: touch1.screenY
  });
};
onTouchMove_fn = function(evt) {
  var _a2;
  if (!__privateGet(this, _touchInfo) || evt.touches.length !== 2) {
    return;
  }
  let [touch0, touch1] = evt.touches;
  if (touch0.identifier > touch1.identifier) {
    [touch0, touch1] = [touch1, touch0];
  }
  const {
    screenX: screen0X,
    screenY: screen0Y
  } = touch0;
  const {
    screenX: screen1X,
    screenY: screen1Y
  } = touch1;
  const touchInfo = __privateGet(this, _touchInfo);
  const {
    touch0X: pTouch0X,
    touch0Y: pTouch0Y,
    touch1X: pTouch1X,
    touch1Y: pTouch1Y
  } = touchInfo;
  const prevGapX = pTouch1X - pTouch0X;
  const prevGapY = pTouch1Y - pTouch0Y;
  const currGapX = screen1X - screen0X;
  const currGapY = screen1Y - screen0Y;
  const distance = Math.hypot(currGapX, currGapY) || 1;
  const pDistance = Math.hypot(prevGapX, prevGapY) || 1;
  if (!__privateGet(this, _isPinching) && Math.abs(pDistance - distance) <= _TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) {
    return;
  }
  touchInfo.touch0X = screen0X;
  touchInfo.touch0Y = screen0Y;
  touchInfo.touch1X = screen1X;
  touchInfo.touch1Y = screen1Y;
  evt.preventDefault();
  if (!__privateGet(this, _isPinching)) {
    __privateSet(this, _isPinching, true);
    return;
  }
  const origin = [(screen0X + screen1X) / 2, (screen0Y + screen1Y) / 2];
  (_a2 = __privateGet(this, _onPinching)) == null ? void 0 : _a2.call(this, origin, pDistance, distance);
};
onTouchEnd_fn = function(evt) {
  var _a2;
  __privateGet(this, _touchMoveAC).abort();
  __privateSet(this, _touchMoveAC, null);
  (_a2 = __privateGet(this, _onPinchEnd)) == null ? void 0 : _a2.call(this);
  if (!__privateGet(this, _touchInfo)) {
    return;
  }
  evt.preventDefault();
  __privateSet(this, _touchInfo, null);
  __privateSet(this, _isPinching, false);
};
var TouchManager = _TouchManager;
var _accessibilityData, _allResizerDivs, _altText3, _disabled, _dragPointerId, _dragPointerType, _keepAspectRatio, _resizersDiv, _lastPointerCoords, _savedDimensions, _focusAC, _focusedResizerName, _hasBeenClicked, _initialRect, _isEditing, _isInEditMode, _isResizerEnabledForKeyboard, _moveInDOMTimeout, _prevDragX, _prevDragY, _telemetryTimeouts, _touchManager, _isDraggable, _zIndex, _AnnotationEditor_instances, translate_fn, _AnnotationEditor_static, rotatePoint_fn, getRotationMatrix_fn, createResizers_fn, resizerPointerdown_fn, resize_fn, addResizeToUndoStack_fn, resizerPointermove_fn, touchPinchStartCallback_fn, touchPinchCallback_fn, touchPinchEndCallback_fn, selectOnPointerEvent_fn, setUpDragSession_fn, addFocusListeners_fn, resizerKeydown_fn, resizerBlur_fn, resizerFocus_fn, setResizerTabIndex_fn, stopResizing_fn;
var _AnnotationEditor = class _AnnotationEditor {
  constructor(parameters) {
    __privateAdd(this, _AnnotationEditor_instances);
    __privateAdd(this, _accessibilityData, null);
    __privateAdd(this, _allResizerDivs, null);
    __privateAdd(this, _altText3, null);
    __privateAdd(this, _disabled, false);
    __privateAdd(this, _dragPointerId, null);
    __privateAdd(this, _dragPointerType, "");
    __privateAdd(this, _keepAspectRatio, false);
    __privateAdd(this, _resizersDiv, null);
    __privateAdd(this, _lastPointerCoords, null);
    __privateAdd(this, _savedDimensions, null);
    __privateAdd(this, _focusAC, null);
    __privateAdd(this, _focusedResizerName, "");
    __privateAdd(this, _hasBeenClicked, false);
    __privateAdd(this, _initialRect, null);
    __privateAdd(this, _isEditing, false);
    __privateAdd(this, _isInEditMode, false);
    __privateAdd(this, _isResizerEnabledForKeyboard, false);
    __privateAdd(this, _moveInDOMTimeout, null);
    __privateAdd(this, _prevDragX, 0);
    __privateAdd(this, _prevDragY, 0);
    __privateAdd(this, _telemetryTimeouts, null);
    __privateAdd(this, _touchManager, null);
    __publicField(this, "_editToolbar", null);
    __publicField(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    __publicField(this, "_initialData", null);
    __publicField(this, "_isVisible", true);
    __publicField(this, "_uiManager", null);
    __publicField(this, "_focusEventsAllowed", true);
    __privateAdd(this, _isDraggable, false);
    __privateAdd(this, _zIndex, _AnnotationEditor._zIndex++);
    this.parent = parameters.parent;
    this.id = parameters.id;
    this.width = this.height = null;
    this.pageIndex = parameters.parent.pageIndex;
    this.name = parameters.name;
    this.div = null;
    this._uiManager = parameters.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = parameters.isCentered;
    this._structTreeParentId = null;
    const {
      rotation,
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = this.parent.viewport;
    this.rotation = rotation;
    this.pageRotation = (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [pageWidth, pageHeight];
    this.pageTranslation = [pageX, pageY];
    const [width, height] = this.parentDimensions;
    this.x = parameters.x / width;
    this.y = parameters.y / height;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  static get _resizerKeyboardManager() {
    const resize = _AnnotationEditor.prototype._resizeWithKeyboard;
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], resize, {
      args: [-small, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], resize, {
      args: [-big, 0]
    }], [["ArrowRight", "mac+ArrowRight"], resize, {
      args: [small, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], resize, {
      args: [big, 0]
    }], [["ArrowUp", "mac+ArrowUp"], resize, {
      args: [0, -small]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], resize, {
      args: [0, -big]
    }], [["ArrowDown", "mac+ArrowDown"], resize, {
      args: [0, small]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], resize, {
      args: [0, big]
    }], [["Escape", "mac+Escape"], _AnnotationEditor.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get isDrawer() {
    return false;
  }
  static get _defaultLineColor() {
    return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(editor) {
    const fakeEditor = new FakeEditor({
      id: editor.parent.getNextId(),
      parent: editor.parent,
      uiManager: editor._uiManager
    });
    fakeEditor.annotationElementId = editor.annotationElementId;
    fakeEditor.deleted = true;
    fakeEditor._uiManager.addToAnnotationStorage(fakeEditor);
  }
  static initialize(l10n, _uiManager4) {
    _AnnotationEditor._l10n ?? (_AnnotationEditor._l10n = l10n);
    _AnnotationEditor._l10nResizer || (_AnnotationEditor._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    }));
    if (_AnnotationEditor._borderLineWidth !== -1) {
      return;
    }
    const style = getComputedStyle(document.documentElement);
    _AnnotationEditor._borderLineWidth = parseFloat(style.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(_type2, _value) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(mime) {
    return false;
  }
  static paste(item, parent) {
    unreachable("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return __privateGet(this, _isDraggable);
  }
  set _isDraggable(value) {
    var _a2;
    __privateSet(this, _isDraggable, value);
    (_a2 = this.div) == null ? void 0 : _a2.classList.toggle("draggable", value);
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [pageWidth, pageHeight] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * pageHeight / (pageWidth * 2);
        this.y += this.width * pageWidth / (pageHeight * 2);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * pageHeight / (pageWidth * 2);
        this.y -= this.width * pageWidth / (pageHeight * 2);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(params) {
    this._uiManager.addCommands(params);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = __privateGet(this, _zIndex);
  }
  setParent(parent) {
    if (parent !== null) {
      this.pageIndex = parent.pageIndex;
      this.pageDimensions = parent.pageDimensions;
    } else {
      __privateMethod(this, _AnnotationEditor_instances, stopResizing_fn).call(this);
    }
    this.parent = parent;
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!__privateGet(this, _hasBeenClicked)) {
      this.parent.setSelected(this);
    } else {
      __privateSet(this, _hasBeenClicked, false);
    }
  }
  focusout(event) {
    var _a2;
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.isAttachedToDOM) {
      return;
    }
    const target = event.relatedTarget;
    if (target == null ? void 0 : target.closest(`#${this.id}`)) {
      return;
    }
    event.preventDefault();
    if (!((_a2 = this.parent) == null ? void 0 : _a2.isMultipleSelection)) {
      this.commitOrRemove();
    }
  }
  commitOrRemove() {
    if (this.isEmpty()) {
      this.remove();
    } else {
      this.commit();
    }
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(x, y, tx, ty) {
    const [width, height] = this.parentDimensions;
    [tx, ty] = this.screenToPageTranslation(tx, ty);
    this.x = (x + tx) / width;
    this.y = (y + ty) / height;
    this.fixAndSetPosition();
  }
  translate(x, y) {
    __privateMethod(this, _AnnotationEditor_instances, translate_fn).call(this, this.parentDimensions, x, y);
  }
  translateInPage(x, y) {
    __privateGet(this, _initialRect) || __privateSet(this, _initialRect, [this.x, this.y, this.width, this.height]);
    __privateMethod(this, _AnnotationEditor_instances, translate_fn).call(this, this.pageDimensions, x, y);
    this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(tx, ty) {
    __privateGet(this, _initialRect) || __privateSet(this, _initialRect, [this.x, this.y, this.width, this.height]);
    const {
      div,
      parentDimensions: [parentWidth, parentHeight]
    } = this;
    this.x += tx / parentWidth;
    this.y += ty / parentHeight;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: x2,
        y: y2
      } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, x2, y2)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let {
      x,
      y
    } = this;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    const {
      style
    } = div;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this._onTranslating(x, y);
    div.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(x, y) {
  }
  _onTranslated(x, y) {
  }
  get _hasBeenMoved() {
    return !!__privateGet(this, _initialRect) && (__privateGet(this, _initialRect)[0] !== this.x || __privateGet(this, _initialRect)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!__privateGet(this, _initialRect) && (__privateGet(this, _initialRect)[2] !== this.width || __privateGet(this, _initialRect)[3] !== this.height);
  }
  getBaseTranslation() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      _borderLineWidth
    } = _AnnotationEditor;
    const x = _borderLineWidth / parentWidth;
    const y = _borderLineWidth / parentHeight;
    switch (this.rotation) {
      case 90:
        return [-x, y];
      case 180:
        return [x, y];
      case 270:
        return [x, -y];
      default:
        return [-x, -y];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(rotation = this.rotation) {
    const {
      div: {
        style
      },
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    let {
      x,
      y,
      width,
      height
    } = this;
    width *= pageWidth;
    height *= pageHeight;
    x *= pageWidth;
    y *= pageHeight;
    if (this._mustFixPosition) {
      switch (rotation) {
        case 0:
          x = Math.max(0, Math.min(pageWidth - width, x));
          y = Math.max(0, Math.min(pageHeight - height, y));
          break;
        case 90:
          x = Math.max(0, Math.min(pageWidth - height, x));
          y = Math.min(pageHeight, Math.max(width, y));
          break;
        case 180:
          x = Math.min(pageWidth, Math.max(width, x));
          y = Math.min(pageHeight, Math.max(height, y));
          break;
        case 270:
          x = Math.min(pageWidth, Math.max(height, x));
          y = Math.max(0, Math.min(pageHeight - width, y));
          break;
      }
    }
    this.x = x /= pageWidth;
    this.y = y /= pageHeight;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this.moveInDOM();
  }
  screenToPageTranslation(x, y) {
    var _a2;
    return __privateMethod(_a2 = _AnnotationEditor, _AnnotationEditor_static, rotatePoint_fn).call(_a2, x, y, this.parentRotation);
  }
  pageTranslationToScreen(x, y) {
    var _a2;
    return __privateMethod(_a2 = _AnnotationEditor, _AnnotationEditor_static, rotatePoint_fn).call(_a2, x, y, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale,
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    return [pageWidth * parentScale, pageHeight * parentScale];
  }
  setDims(width, height) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      style
    } = this.div;
    style.width = `${(100 * width / parentWidth).toFixed(2)}%`;
    if (!__privateGet(this, _keepAspectRatio)) {
      style.height = `${(100 * height / parentHeight).toFixed(2)}%`;
    }
  }
  fixDims() {
    const {
      style
    } = this.div;
    const {
      height,
      width
    } = style;
    const widthPercent = width.endsWith("%");
    const heightPercent = !__privateGet(this, _keepAspectRatio) && height.endsWith("%");
    if (widthPercent && heightPercent) {
      return;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (!widthPercent) {
      style.width = `${(100 * parseFloat(width) / parentWidth).toFixed(2)}%`;
    }
    if (!__privateGet(this, _keepAspectRatio) && !heightPercent) {
      style.height = `${(100 * parseFloat(height) / parentHeight).toFixed(2)}%`;
    }
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(x) {
    return Math.round(x * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var _a2;
    (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.finish();
  }
  async addEditToolbar() {
    if (this._editToolbar || __privateGet(this, _isInEditMode)) {
      return this._editToolbar;
    }
    this._editToolbar = new EditorToolbar(this);
    this.div.append(this._editToolbar.render());
    if (__privateGet(this, _altText3)) {
      await this._editToolbar.addAltText(__privateGet(this, _altText3));
    }
    return this._editToolbar;
  }
  removeEditToolbar() {
    var _a2;
    if (!this._editToolbar) {
      return;
    }
    this._editToolbar.remove();
    this._editToolbar = null;
    (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.destroy();
  }
  addContainer(container) {
    var _a2;
    const editToolbarDiv = (_a2 = this._editToolbar) == null ? void 0 : _a2.div;
    if (editToolbarDiv) {
      editToolbarDiv.before(container);
    } else {
      this.div.append(container);
    }
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    if (__privateGet(this, _altText3)) {
      return;
    }
    AltText.initialize(_AnnotationEditor._l10n);
    __privateSet(this, _altText3, new AltText(this));
    if (__privateGet(this, _accessibilityData)) {
      __privateGet(this, _altText3).data = __privateGet(this, _accessibilityData);
      __privateSet(this, _accessibilityData, null);
    }
    await this.addEditToolbar();
  }
  get altTextData() {
    var _a2;
    return (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.data;
  }
  set altTextData(data) {
    if (!__privateGet(this, _altText3)) {
      return;
    }
    __privateGet(this, _altText3).data = data;
  }
  get guessedAltText() {
    var _a2;
    return (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.guessedText;
  }
  async setGuessedAltText(text) {
    var _a2;
    await ((_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.setGuessedText(text));
  }
  serializeAltText(isForCopying) {
    var _a2;
    return (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.serialize(isForCopying);
  }
  hasAltText() {
    return !!__privateGet(this, _altText3) && !__privateGet(this, _altText3).isEmpty();
  }
  hasAltTextData() {
    var _a2;
    return ((_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.hasData()) ?? false;
  }
  render() {
    var _a2;
    this.div = document.createElement("div");
    this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    this.div.className = this.name;
    this.div.setAttribute("id", this.id);
    this.div.tabIndex = __privateGet(this, _disabled) ? -1 : 0;
    if (!this._isVisible) {
      this.div.classList.add("hidden");
    }
    this.setInForeground();
    __privateMethod(this, _AnnotationEditor_instances, addFocusListeners_fn).call(this);
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (this.parentRotation % 180 !== 0) {
      this.div.style.maxWidth = `${(100 * parentHeight / parentWidth).toFixed(2)}%`;
      this.div.style.maxHeight = `${(100 * parentWidth / parentHeight).toFixed(2)}%`;
    }
    const [tx, ty] = this.getInitialTranslation();
    this.translate(tx, ty);
    bindEvents(this, this.div, ["pointerdown"]);
    if (this.isResizable && this._uiManager._supportsPinchToZoom) {
      __privateGet(this, _touchManager) || __privateSet(this, _touchManager, new TouchManager({
        container: this.div,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: __privateMethod(this, _AnnotationEditor_instances, touchPinchStartCallback_fn).bind(this),
        onPinching: __privateMethod(this, _AnnotationEditor_instances, touchPinchCallback_fn).bind(this),
        onPinchEnd: __privateMethod(this, _AnnotationEditor_instances, touchPinchEndCallback_fn).bind(this),
        signal: this._uiManager._signal
      }));
    }
    (_a2 = this._uiManager._editorUndoBar) == null ? void 0 : _a2.hide();
    return this.div;
  }
  pointerdown(event) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      event.preventDefault();
      return;
    }
    __privateSet(this, _hasBeenClicked, true);
    if (this._isDraggable) {
      __privateMethod(this, _AnnotationEditor_instances, setUpDragSession_fn).call(this, event);
      return;
    }
    __privateMethod(this, _AnnotationEditor_instances, selectOnPointerEvent_fn).call(this, event);
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    if (__privateGet(this, _moveInDOMTimeout)) {
      clearTimeout(__privateGet(this, _moveInDOMTimeout));
    }
    __privateSet(this, _moveInDOMTimeout, setTimeout(() => {
      var _a2;
      __privateSet(this, _moveInDOMTimeout, null);
      (_a2 = this.parent) == null ? void 0 : _a2.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(parent, x, y) {
    parent.changeParent(this);
    this.x = x;
    this.y = y;
    this.fixAndSetPosition();
    this._onTranslated();
  }
  getRect(tx, ty, rotation = this.rotation) {
    const scale = this.parentScale;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const shiftX = tx / scale;
    const shiftY = ty / scale;
    const x = this.x * pageWidth;
    const y = this.y * pageHeight;
    const width = this.width * pageWidth;
    const height = this.height * pageHeight;
    switch (rotation) {
      case 0:
        return [x + shiftX + pageX, pageHeight - y - shiftY - height + pageY, x + shiftX + width + pageX, pageHeight - y - shiftY + pageY];
      case 90:
        return [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + height + pageX, pageHeight - y + shiftX + width + pageY];
      case 180:
        return [x - shiftX - width + pageX, pageHeight - y + shiftY + pageY, x - shiftX + pageX, pageHeight - y + shiftY + height + pageY];
      case 270:
        return [x - shiftY - height + pageX, pageHeight - y - shiftX - width + pageY, x - shiftY + pageX, pageHeight - y - shiftX + pageY];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(rect, pageHeight) {
    const [x1, y1, x2, y2] = rect;
    const width = x2 - x1;
    const height = y2 - y1;
    switch (this.rotation) {
      case 0:
        return [x1, pageHeight - y2, width, height];
      case 90:
        return [x1, pageHeight - y1, height, width];
      case 180:
        return [x2, pageHeight - y1, width, height];
      case 270:
        return [x2, pageHeight - y2, height, width];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded(focus) {
  }
  isEmpty() {
    return false;
  }
  enableEditMode() {
    __privateSet(this, _isInEditMode, true);
  }
  disableEditMode() {
    __privateSet(this, _isInEditMode, false);
  }
  isInEditMode() {
    return __privateGet(this, _isInEditMode);
  }
  shouldGetKeyboardEvents() {
    return __privateGet(this, _isResizerEnabledForKeyboard);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top,
      left,
      bottom,
      right
    } = this.getClientDimensions();
    const {
      innerHeight,
      innerWidth
    } = window;
    return left < innerWidth && right > 0 && top < innerHeight && bottom > 0;
  }
  rebuild() {
    __privateMethod(this, _AnnotationEditor_instances, addFocusListeners_fn).call(this);
  }
  rotate(_angle) {
  }
  resize() {
  }
  serializeDeleted() {
    var _a2;
    return {
      id: this.annotationElementId,
      deleted: true,
      pageIndex: this.pageIndex,
      popupRef: ((_a2 = this._initialData) == null ? void 0 : _a2.popupRef) || ""
    };
  }
  serialize(isForCopying = false, context = null) {
    unreachable("An editor must be serializable");
  }
  static async deserialize(data, parent, uiManager) {
    const editor = new this.prototype.constructor({
      parent,
      id: parent.getNextId(),
      uiManager
    });
    editor.rotation = data.rotation;
    __privateSet(editor, _accessibilityData, data.accessibilityData);
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [x, y, width, height] = editor.getRectInCurrentCoords(data.rect, pageHeight);
    editor.x = x / pageWidth;
    editor.y = y / pageHeight;
    editor.width = width / pageWidth;
    editor.height = height / pageHeight;
    return editor;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var _a2, _b;
    (_a2 = __privateGet(this, _focusAC)) == null ? void 0 : _a2.abort();
    __privateSet(this, _focusAC, null);
    if (!this.isEmpty()) {
      this.commit();
    }
    if (this.parent) {
      this.parent.remove(this);
    } else {
      this._uiManager.removeEditor(this);
    }
    if (__privateGet(this, _moveInDOMTimeout)) {
      clearTimeout(__privateGet(this, _moveInDOMTimeout));
      __privateSet(this, _moveInDOMTimeout, null);
    }
    __privateMethod(this, _AnnotationEditor_instances, stopResizing_fn).call(this);
    this.removeEditToolbar();
    if (__privateGet(this, _telemetryTimeouts)) {
      for (const timeout of __privateGet(this, _telemetryTimeouts).values()) {
        clearTimeout(timeout);
      }
      __privateSet(this, _telemetryTimeouts, null);
    }
    this.parent = null;
    (_b = __privateGet(this, _touchManager)) == null ? void 0 : _b.destroy();
    __privateSet(this, _touchManager, null);
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      __privateMethod(this, _AnnotationEditor_instances, createResizers_fn).call(this);
      __privateGet(this, _resizersDiv).classList.remove("hidden");
      bindEvents(this, this.div, ["keydown"]);
    }
  }
  get toolbarPosition() {
    return null;
  }
  keydown(event) {
    if (!this.isResizable || event.target !== this.div || event.key !== "Enter") {
      return;
    }
    this._uiManager.setSelected(this);
    __privateSet(this, _savedDimensions, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const children = __privateGet(this, _resizersDiv).children;
    if (!__privateGet(this, _allResizerDivs)) {
      __privateSet(this, _allResizerDivs, Array.from(children));
      const boundResizerKeydown = __privateMethod(this, _AnnotationEditor_instances, resizerKeydown_fn).bind(this);
      const boundResizerBlur = __privateMethod(this, _AnnotationEditor_instances, resizerBlur_fn).bind(this);
      const signal = this._uiManager._signal;
      for (const div of __privateGet(this, _allResizerDivs)) {
        const name = div.getAttribute("data-resizer-name");
        div.setAttribute("role", "spinbutton");
        div.addEventListener("keydown", boundResizerKeydown, {
          signal
        });
        div.addEventListener("blur", boundResizerBlur, {
          signal
        });
        div.addEventListener("focus", __privateMethod(this, _AnnotationEditor_instances, resizerFocus_fn).bind(this, name), {
          signal
        });
        div.setAttribute("data-l10n-id", _AnnotationEditor._l10nResizer[name]);
      }
    }
    const first = __privateGet(this, _allResizerDivs)[0];
    let firstPosition = 0;
    for (const div of children) {
      if (div === first) {
        break;
      }
      firstPosition++;
    }
    const nextFirstPosition = (360 - this.rotation + this.parentRotation) % 360 / 90 * (__privateGet(this, _allResizerDivs).length / 4);
    if (nextFirstPosition !== firstPosition) {
      if (nextFirstPosition < firstPosition) {
        for (let i2 = 0; i2 < firstPosition - nextFirstPosition; i2++) {
          __privateGet(this, _resizersDiv).append(__privateGet(this, _resizersDiv).firstChild);
        }
      } else if (nextFirstPosition > firstPosition) {
        for (let i2 = 0; i2 < nextFirstPosition - firstPosition; i2++) {
          __privateGet(this, _resizersDiv).firstChild.before(__privateGet(this, _resizersDiv).lastChild);
        }
      }
      let i = 0;
      for (const child of children) {
        const div = __privateGet(this, _allResizerDivs)[i++];
        const name = div.getAttribute("data-resizer-name");
        child.setAttribute("data-l10n-id", _AnnotationEditor._l10nResizer[name]);
      }
    }
    __privateMethod(this, _AnnotationEditor_instances, setResizerTabIndex_fn).call(this, 0);
    __privateSet(this, _isResizerEnabledForKeyboard, true);
    __privateGet(this, _resizersDiv).firstChild.focus({
      focusVisible: true
    });
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  _resizeWithKeyboard(x, y) {
    if (!__privateGet(this, _isResizerEnabledForKeyboard)) {
      return;
    }
    __privateMethod(this, _AnnotationEditor_instances, resizerPointermove_fn).call(this, __privateGet(this, _focusedResizerName), {
      deltaX: x,
      deltaY: y,
      fromKeyboard: true
    });
  }
  _stopResizingWithKeyboard() {
    __privateMethod(this, _AnnotationEditor_instances, stopResizing_fn).call(this);
    this.div.focus();
  }
  select() {
    var _a2, _b, _c;
    this.makeResizable();
    (_a2 = this.div) == null ? void 0 : _a2.classList.add("selectedEditor");
    if (!this._editToolbar) {
      this.addEditToolbar().then(() => {
        var _a3, _b2;
        if ((_a3 = this.div) == null ? void 0 : _a3.classList.contains("selectedEditor")) {
          (_b2 = this._editToolbar) == null ? void 0 : _b2.show();
        }
      });
      return;
    }
    (_b = this._editToolbar) == null ? void 0 : _b.show();
    (_c = __privateGet(this, _altText3)) == null ? void 0 : _c.toggleAltTextBadge(false);
  }
  unselect() {
    var _a2, _b, _c, _d, _e;
    (_a2 = __privateGet(this, _resizersDiv)) == null ? void 0 : _a2.classList.add("hidden");
    (_b = this.div) == null ? void 0 : _b.classList.remove("selectedEditor");
    if ((_c = this.div) == null ? void 0 : _c.contains(document.activeElement)) {
      this._uiManager.currentLayer.div.focus({
        preventScroll: true
      });
    }
    (_d = this._editToolbar) == null ? void 0 : _d.hide();
    (_e = __privateGet(this, _altText3)) == null ? void 0 : _e.toggleAltTextBadge(true);
  }
  updateParams(type, value) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return __privateGet(this, _isEditing);
  }
  set isEditing(value) {
    __privateSet(this, _isEditing, value);
    if (!this.parent) {
      return;
    }
    if (value) {
      this.parent.setSelected(this);
      this.parent.setActiveEditor(this);
    } else {
      this.parent.setActiveEditor(null);
    }
  }
  setAspectRatio(width, height) {
    __privateSet(this, _keepAspectRatio, true);
    const aspectRatio = width / height;
    const {
      style
    } = this.div;
    style.aspectRatio = aspectRatio;
    style.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(data, mustWait = false) {
    if (mustWait) {
      __privateGet(this, _telemetryTimeouts) || __privateSet(this, _telemetryTimeouts, /* @__PURE__ */ new Map());
      const {
        action
      } = data;
      let timeout = __privateGet(this, _telemetryTimeouts).get(action);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        this._reportTelemetry(data);
        __privateGet(this, _telemetryTimeouts).delete(action);
        if (__privateGet(this, _telemetryTimeouts).size === 0) {
          __privateSet(this, _telemetryTimeouts, null);
        }
      }, _AnnotationEditor._telemetryTimeout);
      __privateGet(this, _telemetryTimeouts).set(action, timeout);
      return;
    }
    data.type || (data.type = this.editorType);
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data
      }
    });
  }
  show(visible = this._isVisible) {
    this.div.classList.toggle("hidden", !visible);
    this._isVisible = visible;
  }
  enable() {
    if (this.div) {
      this.div.tabIndex = 0;
    }
    __privateSet(this, _disabled, false);
  }
  disable() {
    if (this.div) {
      this.div.tabIndex = -1;
    }
    __privateSet(this, _disabled, true);
  }
  renderAnnotationElement(annotation) {
    let content = annotation.container.querySelector(".annotationContent");
    if (!content) {
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      annotation.container.prepend(content);
    } else if (content.nodeName === "CANVAS") {
      const canvas = content;
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      canvas.before(content);
    }
    return content;
  }
  resetAnnotationElement(annotation) {
    const {
      firstChild
    } = annotation.container;
    if ((firstChild == null ? void 0 : firstChild.nodeName) === "DIV" && firstChild.classList.contains("annotationContent")) {
      firstChild.remove();
    }
  }
};
_accessibilityData = new WeakMap();
_allResizerDivs = new WeakMap();
_altText3 = new WeakMap();
_disabled = new WeakMap();
_dragPointerId = new WeakMap();
_dragPointerType = new WeakMap();
_keepAspectRatio = new WeakMap();
_resizersDiv = new WeakMap();
_lastPointerCoords = new WeakMap();
_savedDimensions = new WeakMap();
_focusAC = new WeakMap();
_focusedResizerName = new WeakMap();
_hasBeenClicked = new WeakMap();
_initialRect = new WeakMap();
_isEditing = new WeakMap();
_isInEditMode = new WeakMap();
_isResizerEnabledForKeyboard = new WeakMap();
_moveInDOMTimeout = new WeakMap();
_prevDragX = new WeakMap();
_prevDragY = new WeakMap();
_telemetryTimeouts = new WeakMap();
_touchManager = new WeakMap();
_isDraggable = new WeakMap();
_zIndex = new WeakMap();
_AnnotationEditor_instances = new WeakSet();
translate_fn = function([width, height], x, y) {
  [x, y] = this.screenToPageTranslation(x, y);
  this.x += x / width;
  this.y += y / height;
  this._onTranslating(this.x, this.y);
  this.fixAndSetPosition();
};
_AnnotationEditor_static = new WeakSet();
rotatePoint_fn = function(x, y, angle) {
  switch (angle) {
    case 90:
      return [y, -x];
    case 180:
      return [-x, -y];
    case 270:
      return [-y, x];
    default:
      return [x, y];
  }
};
getRotationMatrix_fn = function(rotation) {
  switch (rotation) {
    case 90: {
      const [pageWidth, pageHeight] = this.pageDimensions;
      return [0, -pageWidth / pageHeight, pageHeight / pageWidth, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [pageWidth, pageHeight] = this.pageDimensions;
      return [0, pageWidth / pageHeight, -pageHeight / pageWidth, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
};
createResizers_fn = function() {
  if (__privateGet(this, _resizersDiv)) {
    return;
  }
  __privateSet(this, _resizersDiv, document.createElement("div"));
  __privateGet(this, _resizersDiv).classList.add("resizers");
  const classes = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
  const signal = this._uiManager._signal;
  for (const name of classes) {
    const div = document.createElement("div");
    __privateGet(this, _resizersDiv).append(div);
    div.classList.add("resizer", name);
    div.setAttribute("data-resizer-name", name);
    div.addEventListener("pointerdown", __privateMethod(this, _AnnotationEditor_instances, resizerPointerdown_fn).bind(this, name), {
      signal
    });
    div.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    div.tabIndex = -1;
  }
  this.div.prepend(__privateGet(this, _resizersDiv));
};
resizerPointerdown_fn = function(name, event) {
  var _a2;
  event.preventDefault();
  const {
    isMac
  } = util_FeatureTest.platform;
  if (event.button !== 0 || event.ctrlKey && isMac) {
    return;
  }
  (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.toggle(false);
  const savedDraggable = this._isDraggable;
  this._isDraggable = false;
  __privateSet(this, _lastPointerCoords, [event.screenX, event.screenY]);
  const ac = new AbortController();
  const signal = this._uiManager.combinedSignal(ac);
  this.parent.togglePointerEvents(false);
  window.addEventListener("pointermove", __privateMethod(this, _AnnotationEditor_instances, resizerPointermove_fn).bind(this, name), {
    passive: true,
    capture: true,
    signal
  });
  window.addEventListener("touchmove", stopEvent, {
    passive: false,
    signal
  });
  window.addEventListener("contextmenu", noContextMenu, {
    signal
  });
  __privateSet(this, _savedDimensions, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const savedParentCursor = this.parent.div.style.cursor;
  const savedCursor = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(event.target).cursor;
  const pointerUpCallback = () => {
    var _a3;
    ac.abort();
    this.parent.togglePointerEvents(true);
    (_a3 = __privateGet(this, _altText3)) == null ? void 0 : _a3.toggle(true);
    this._isDraggable = savedDraggable;
    this.parent.div.style.cursor = savedParentCursor;
    this.div.style.cursor = savedCursor;
    __privateMethod(this, _AnnotationEditor_instances, addResizeToUndoStack_fn).call(this);
  };
  window.addEventListener("pointerup", pointerUpCallback, {
    signal
  });
  window.addEventListener("blur", pointerUpCallback, {
    signal
  });
};
resize_fn = function(x, y, width, height) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  const [parentWidth, parentHeight] = this.parentDimensions;
  this.setDims(parentWidth * width, parentHeight * height);
  this.fixAndSetPosition();
  this._onResized();
};
addResizeToUndoStack_fn = function() {
  if (!__privateGet(this, _savedDimensions)) {
    return;
  }
  const {
    savedX,
    savedY,
    savedWidth,
    savedHeight
  } = __privateGet(this, _savedDimensions);
  __privateSet(this, _savedDimensions, null);
  const newX = this.x;
  const newY = this.y;
  const newWidth = this.width;
  const newHeight = this.height;
  if (newX === savedX && newY === savedY && newWidth === savedWidth && newHeight === savedHeight) {
    return;
  }
  this.addCommands({
    cmd: __privateMethod(this, _AnnotationEditor_instances, resize_fn).bind(this, newX, newY, newWidth, newHeight),
    undo: __privateMethod(this, _AnnotationEditor_instances, resize_fn).bind(this, savedX, savedY, savedWidth, savedHeight),
    mustExec: true
  });
};
resizerPointermove_fn = function(name, event) {
  const [parentWidth, parentHeight] = this.parentDimensions;
  const savedX = this.x;
  const savedY = this.y;
  const savedWidth = this.width;
  const savedHeight = this.height;
  const minWidth = _AnnotationEditor.MIN_SIZE / parentWidth;
  const minHeight = _AnnotationEditor.MIN_SIZE / parentHeight;
  const rotationMatrix = __privateMethod(this, _AnnotationEditor_instances, getRotationMatrix_fn).call(this, this.rotation);
  const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
  const invRotationMatrix = __privateMethod(this, _AnnotationEditor_instances, getRotationMatrix_fn).call(this, 360 - this.rotation);
  const invTransf = (x, y) => [invRotationMatrix[0] * x + invRotationMatrix[2] * y, invRotationMatrix[1] * x + invRotationMatrix[3] * y];
  let getPoint;
  let getOpposite;
  let isDiagonal = false;
  let isHorizontal = false;
  switch (name) {
    case "topLeft":
      isDiagonal = true;
      getPoint = (w, h) => [0, 0];
      getOpposite = (w, h) => [w, h];
      break;
    case "topMiddle":
      getPoint = (w, h) => [w / 2, 0];
      getOpposite = (w, h) => [w / 2, h];
      break;
    case "topRight":
      isDiagonal = true;
      getPoint = (w, h) => [w, 0];
      getOpposite = (w, h) => [0, h];
      break;
    case "middleRight":
      isHorizontal = true;
      getPoint = (w, h) => [w, h / 2];
      getOpposite = (w, h) => [0, h / 2];
      break;
    case "bottomRight":
      isDiagonal = true;
      getPoint = (w, h) => [w, h];
      getOpposite = (w, h) => [0, 0];
      break;
    case "bottomMiddle":
      getPoint = (w, h) => [w / 2, h];
      getOpposite = (w, h) => [w / 2, 0];
      break;
    case "bottomLeft":
      isDiagonal = true;
      getPoint = (w, h) => [0, h];
      getOpposite = (w, h) => [w, 0];
      break;
    case "middleLeft":
      isHorizontal = true;
      getPoint = (w, h) => [0, h / 2];
      getOpposite = (w, h) => [w, h / 2];
      break;
  }
  const point = getPoint(savedWidth, savedHeight);
  const oppositePoint = getOpposite(savedWidth, savedHeight);
  let transfOppositePoint = transf(...oppositePoint);
  const oppositeX = _AnnotationEditor._round(savedX + transfOppositePoint[0]);
  const oppositeY = _AnnotationEditor._round(savedY + transfOppositePoint[1]);
  let ratioX = 1;
  let ratioY = 1;
  let deltaX, deltaY;
  if (!event.fromKeyboard) {
    const {
      screenX,
      screenY
    } = event;
    const [lastScreenX, lastScreenY] = __privateGet(this, _lastPointerCoords);
    [deltaX, deltaY] = this.screenToPageTranslation(screenX - lastScreenX, screenY - lastScreenY);
    __privateGet(this, _lastPointerCoords)[0] = screenX;
    __privateGet(this, _lastPointerCoords)[1] = screenY;
  } else {
    ({
      deltaX,
      deltaY
    } = event);
  }
  [deltaX, deltaY] = invTransf(deltaX / parentWidth, deltaY / parentHeight);
  if (isDiagonal) {
    const oldDiag = Math.hypot(savedWidth, savedHeight);
    ratioX = ratioY = Math.max(Math.min(Math.hypot(oppositePoint[0] - point[0] - deltaX, oppositePoint[1] - point[1] - deltaY) / oldDiag, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
  } else if (isHorizontal) {
    ratioX = Math.max(minWidth, Math.min(1, Math.abs(oppositePoint[0] - point[0] - deltaX))) / savedWidth;
  } else {
    ratioY = Math.max(minHeight, Math.min(1, Math.abs(oppositePoint[1] - point[1] - deltaY))) / savedHeight;
  }
  const newWidth = _AnnotationEditor._round(savedWidth * ratioX);
  const newHeight = _AnnotationEditor._round(savedHeight * ratioY);
  transfOppositePoint = transf(...getOpposite(newWidth, newHeight));
  const newX = oppositeX - transfOppositePoint[0];
  const newY = oppositeY - transfOppositePoint[1];
  __privateGet(this, _initialRect) || __privateSet(this, _initialRect, [this.x, this.y, this.width, this.height]);
  this.width = newWidth;
  this.height = newHeight;
  this.x = newX;
  this.y = newY;
  this.setDims(parentWidth * newWidth, parentHeight * newHeight);
  this.fixAndSetPosition();
  this._onResizing();
};
touchPinchStartCallback_fn = function() {
  var _a2;
  __privateSet(this, _savedDimensions, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.toggle(false);
  this.parent.togglePointerEvents(false);
};
touchPinchCallback_fn = function(_origin, prevDistance, distance) {
  const slowDownFactor = 0.7;
  let factor = slowDownFactor * (distance / prevDistance) + 1 - slowDownFactor;
  if (factor === 1) {
    return;
  }
  const rotationMatrix = __privateMethod(this, _AnnotationEditor_instances, getRotationMatrix_fn).call(this, this.rotation);
  const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
  const [parentWidth, parentHeight] = this.parentDimensions;
  const savedX = this.x;
  const savedY = this.y;
  const savedWidth = this.width;
  const savedHeight = this.height;
  const minWidth = _AnnotationEditor.MIN_SIZE / parentWidth;
  const minHeight = _AnnotationEditor.MIN_SIZE / parentHeight;
  factor = Math.max(Math.min(factor, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
  const newWidth = _AnnotationEditor._round(savedWidth * factor);
  const newHeight = _AnnotationEditor._round(savedHeight * factor);
  if (newWidth === savedWidth && newHeight === savedHeight) {
    return;
  }
  __privateGet(this, _initialRect) || __privateSet(this, _initialRect, [savedX, savedY, savedWidth, savedHeight]);
  const transfCenterPoint = transf(savedWidth / 2, savedHeight / 2);
  const centerX = _AnnotationEditor._round(savedX + transfCenterPoint[0]);
  const centerY = _AnnotationEditor._round(savedY + transfCenterPoint[1]);
  const newTransfCenterPoint = transf(newWidth / 2, newHeight / 2);
  this.x = centerX - newTransfCenterPoint[0];
  this.y = centerY - newTransfCenterPoint[1];
  this.width = newWidth;
  this.height = newHeight;
  this.setDims(parentWidth * newWidth, parentHeight * newHeight);
  this.fixAndSetPosition();
  this._onResizing();
};
touchPinchEndCallback_fn = function() {
  var _a2;
  (_a2 = __privateGet(this, _altText3)) == null ? void 0 : _a2.toggle(true);
  this.parent.togglePointerEvents(true);
  __privateMethod(this, _AnnotationEditor_instances, addResizeToUndoStack_fn).call(this);
};
selectOnPointerEvent_fn = function(event) {
  const {
    isMac
  } = util_FeatureTest.platform;
  if (event.ctrlKey && !isMac || event.shiftKey || event.metaKey && isMac) {
    this.parent.toggleSelected(this);
  } else {
    this.parent.setSelected(this);
  }
};
setUpDragSession_fn = function(event) {
  const {
    isSelected
  } = this;
  this._uiManager.setUpDragSession();
  let hasDraggingStarted = false;
  const ac = new AbortController();
  const signal = this._uiManager.combinedSignal(ac);
  const opts = {
    capture: true,
    passive: false,
    signal
  };
  const cancelDrag = (e) => {
    ac.abort();
    __privateSet(this, _dragPointerId, null);
    __privateSet(this, _hasBeenClicked, false);
    if (!this._uiManager.endDragSession()) {
      __privateMethod(this, _AnnotationEditor_instances, selectOnPointerEvent_fn).call(this, e);
    }
    if (hasDraggingStarted) {
      this._onStopDragging();
    }
  };
  if (isSelected) {
    __privateSet(this, _prevDragX, event.clientX);
    __privateSet(this, _prevDragY, event.clientY);
    __privateSet(this, _dragPointerId, event.pointerId);
    __privateSet(this, _dragPointerType, event.pointerType);
    window.addEventListener("pointermove", (e) => {
      if (!hasDraggingStarted) {
        hasDraggingStarted = true;
        this._onStartDragging();
      }
      const {
        clientX: x,
        clientY: y,
        pointerId
      } = e;
      if (pointerId !== __privateGet(this, _dragPointerId)) {
        stopEvent(e);
        return;
      }
      const [tx, ty] = this.screenToPageTranslation(x - __privateGet(this, _prevDragX), y - __privateGet(this, _prevDragY));
      __privateSet(this, _prevDragX, x);
      __privateSet(this, _prevDragY, y);
      this._uiManager.dragSelectedEditors(tx, ty);
    }, opts);
    window.addEventListener("touchmove", stopEvent, opts);
    window.addEventListener("pointerdown", (e) => {
      if (e.pointerType === __privateGet(this, _dragPointerType)) {
        if (__privateGet(this, _touchManager) || e.isPrimary) {
          cancelDrag(e);
        }
      }
      stopEvent(e);
    }, opts);
  }
  const pointerUpCallback = (e) => {
    if (!__privateGet(this, _dragPointerId) || __privateGet(this, _dragPointerId) === e.pointerId) {
      cancelDrag(e);
      return;
    }
    stopEvent(e);
  };
  window.addEventListener("pointerup", pointerUpCallback, {
    signal
  });
  window.addEventListener("blur", pointerUpCallback, {
    signal
  });
};
addFocusListeners_fn = function() {
  if (__privateGet(this, _focusAC) || !this.div) {
    return;
  }
  __privateSet(this, _focusAC, new AbortController());
  const signal = this._uiManager.combinedSignal(__privateGet(this, _focusAC));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal
  });
  this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal
  });
};
resizerKeydown_fn = function(event) {
  _AnnotationEditor._resizerKeyboardManager.exec(this, event);
};
resizerBlur_fn = function(event) {
  var _a2;
  if (__privateGet(this, _isResizerEnabledForKeyboard) && ((_a2 = event.relatedTarget) == null ? void 0 : _a2.parentNode) !== __privateGet(this, _resizersDiv)) {
    __privateMethod(this, _AnnotationEditor_instances, stopResizing_fn).call(this);
  }
};
resizerFocus_fn = function(name) {
  __privateSet(this, _focusedResizerName, __privateGet(this, _isResizerEnabledForKeyboard) ? name : "");
};
setResizerTabIndex_fn = function(value) {
  if (!__privateGet(this, _allResizerDivs)) {
    return;
  }
  for (const div of __privateGet(this, _allResizerDivs)) {
    div.tabIndex = value;
  }
};
stopResizing_fn = function() {
  __privateSet(this, _isResizerEnabledForKeyboard, false);
  __privateMethod(this, _AnnotationEditor_instances, setResizerTabIndex_fn).call(this, -1);
  __privateMethod(this, _AnnotationEditor_instances, addResizeToUndoStack_fn).call(this);
};
__privateAdd(_AnnotationEditor, _AnnotationEditor_static);
__publicField(_AnnotationEditor, "_l10n", null);
__publicField(_AnnotationEditor, "_l10nResizer", null);
__publicField(_AnnotationEditor, "_borderLineWidth", -1);
__publicField(_AnnotationEditor, "_colorManager", new ColorManager());
__publicField(_AnnotationEditor, "_zIndex", 1);
__publicField(_AnnotationEditor, "_telemetryTimeout", 1e3);
var AnnotationEditor = _AnnotationEditor;
var FakeEditor = class extends AnnotationEditor {
  constructor(params) {
    super(params);
    this.annotationElementId = params.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
};
var SEED = 3285377520;
var MASK_HIGH = 4294901760;
var MASK_LOW = 65535;
var MurmurHash3_64 = class {
  constructor(seed) {
    this.h1 = seed ? seed & 4294967295 : SEED;
    this.h2 = seed ? seed & 4294967295 : SEED;
  }
  update(input) {
    let data, length;
    if (typeof input === "string") {
      data = new Uint8Array(input.length * 2);
      length = 0;
      for (let i = 0, ii = input.length; i < ii; i++) {
        const code = input.charCodeAt(i);
        if (code <= 255) {
          data[length++] = code;
        } else {
          data[length++] = code >>> 8;
          data[length++] = code & 255;
        }
      }
    } else if (ArrayBuffer.isView(input)) {
      data = input.slice();
      length = data.byteLength;
    } else {
      throw new Error("Invalid data format, must be a string or TypedArray.");
    }
    const blockCounts = length >> 2;
    const tailLength = length - blockCounts * 4;
    const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
    let k1 = 0, k2 = 0;
    let h1 = this.h1, h2 = this.h2;
    const C1 = 3432918353, C2 = 461845907;
    const C1_LOW = C1 & MASK_LOW, C2_LOW = C2 & MASK_LOW;
    for (let i = 0; i < blockCounts; i++) {
      if (i & 1) {
        k1 = dataUint32[i];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = h1 * 5 + 3864292196;
      } else {
        k2 = dataUint32[i];
        k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
        k2 = k2 << 15 | k2 >>> 17;
        k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
        h2 ^= k2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = h2 * 5 + 3864292196;
      }
    }
    k1 = 0;
    switch (tailLength) {
      case 3:
        k1 ^= data[blockCounts * 4 + 2] << 16;
      case 2:
        k1 ^= data[blockCounts * 4 + 1] << 8;
      case 1:
        k1 ^= data[blockCounts * 4];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        if (blockCounts & 1) {
          h1 ^= k1;
        } else {
          h2 ^= k1;
        }
    }
    this.h1 = h1;
    this.h2 = h2;
  }
  hexdigest() {
    let h1 = this.h1, h2 = this.h2;
    h1 ^= h2 >>> 1;
    h1 = h1 * 3981806797 & MASK_HIGH | h1 * 36045 & MASK_LOW;
    h2 = h2 * 4283543511 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 2950163797 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    h1 = h1 * 444984403 & MASK_HIGH | h1 * 60499 & MASK_LOW;
    h2 = h2 * 3301882366 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 3120437893 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
  }
};
var SerializableEmpty = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var _modified, _modifiedIds, _storage, _AnnotationStorage_instances, setModified_fn;
var AnnotationStorage = class {
  constructor() {
    __privateAdd(this, _AnnotationStorage_instances);
    __privateAdd(this, _modified, false);
    __privateAdd(this, _modifiedIds, null);
    __privateAdd(this, _storage, /* @__PURE__ */ new Map());
    this.onSetModified = null;
    this.onResetModified = null;
    this.onAnnotationEditor = null;
  }
  getValue(key, defaultValue) {
    const value = __privateGet(this, _storage).get(key);
    if (value === void 0) {
      return defaultValue;
    }
    return Object.assign(defaultValue, value);
  }
  getRawValue(key) {
    return __privateGet(this, _storage).get(key);
  }
  remove(key) {
    __privateGet(this, _storage).delete(key);
    if (__privateGet(this, _storage).size === 0) {
      this.resetModified();
    }
    if (typeof this.onAnnotationEditor === "function") {
      for (const value of __privateGet(this, _storage).values()) {
        if (value instanceof AnnotationEditor) {
          return;
        }
      }
      this.onAnnotationEditor(null);
    }
  }
  setValue(key, value) {
    const obj = __privateGet(this, _storage).get(key);
    let modified = false;
    if (obj !== void 0) {
      for (const [entry, val] of Object.entries(value)) {
        if (obj[entry] !== val) {
          modified = true;
          obj[entry] = val;
        }
      }
    } else {
      modified = true;
      __privateGet(this, _storage).set(key, value);
    }
    if (modified) {
      __privateMethod(this, _AnnotationStorage_instances, setModified_fn).call(this);
    }
    if (value instanceof AnnotationEditor && typeof this.onAnnotationEditor === "function") {
      this.onAnnotationEditor(value.constructor._type);
    }
  }
  has(key) {
    return __privateGet(this, _storage).has(key);
  }
  getAll() {
    return __privateGet(this, _storage).size > 0 ? objectFromMap(__privateGet(this, _storage)) : null;
  }
  setAll(obj) {
    for (const [key, val] of Object.entries(obj)) {
      this.setValue(key, val);
    }
  }
  get size() {
    return __privateGet(this, _storage).size;
  }
  resetModified() {
    if (__privateGet(this, _modified)) {
      __privateSet(this, _modified, false);
      if (typeof this.onResetModified === "function") {
        this.onResetModified();
      }
    }
  }
  get print() {
    return new PrintAnnotationStorage(this);
  }
  get serializable() {
    if (__privateGet(this, _storage).size === 0) {
      return SerializableEmpty;
    }
    const map = /* @__PURE__ */ new Map(), hash = new MurmurHash3_64(), transfer = [];
    const context = /* @__PURE__ */ Object.create(null);
    let hasBitmap = false;
    for (const [key, val] of __privateGet(this, _storage)) {
      const serialized = val instanceof AnnotationEditor ? val.serialize(false, context) : val;
      if (serialized) {
        map.set(key, serialized);
        hash.update(`${key}:${JSON.stringify(serialized)}`);
        hasBitmap || (hasBitmap = !!serialized.bitmap);
      }
    }
    if (hasBitmap) {
      for (const value of map.values()) {
        if (value.bitmap) {
          transfer.push(value.bitmap);
        }
      }
    }
    return map.size > 0 ? {
      map,
      hash: hash.hexdigest(),
      transfer
    } : SerializableEmpty;
  }
  get editorStats() {
    let stats = null;
    const typeToEditor = /* @__PURE__ */ new Map();
    for (const value of __privateGet(this, _storage).values()) {
      if (!(value instanceof AnnotationEditor)) {
        continue;
      }
      const editorStats = value.telemetryFinalData;
      if (!editorStats) {
        continue;
      }
      const {
        type
      } = editorStats;
      if (!typeToEditor.has(type)) {
        typeToEditor.set(type, Object.getPrototypeOf(value).constructor);
      }
      stats || (stats = /* @__PURE__ */ Object.create(null));
      const map = stats[type] || (stats[type] = /* @__PURE__ */ new Map());
      for (const [key, val] of Object.entries(editorStats)) {
        if (key === "type") {
          continue;
        }
        let counters = map.get(key);
        if (!counters) {
          counters = /* @__PURE__ */ new Map();
          map.set(key, counters);
        }
        const count = counters.get(val) ?? 0;
        counters.set(val, count + 1);
      }
    }
    for (const [type, editor] of typeToEditor) {
      stats[type] = editor.computeTelemetryFinalData(stats[type]);
    }
    return stats;
  }
  resetModifiedIds() {
    __privateSet(this, _modifiedIds, null);
  }
  get modifiedIds() {
    if (__privateGet(this, _modifiedIds)) {
      return __privateGet(this, _modifiedIds);
    }
    const ids = [];
    for (const value of __privateGet(this, _storage).values()) {
      if (!(value instanceof AnnotationEditor) || !value.annotationElementId || !value.serialize()) {
        continue;
      }
      ids.push(value.annotationElementId);
    }
    return __privateSet(this, _modifiedIds, {
      ids: new Set(ids),
      hash: ids.join(",")
    });
  }
};
_modified = new WeakMap();
_modifiedIds = new WeakMap();
_storage = new WeakMap();
_AnnotationStorage_instances = new WeakSet();
setModified_fn = function() {
  if (!__privateGet(this, _modified)) {
    __privateSet(this, _modified, true);
    if (typeof this.onSetModified === "function") {
      this.onSetModified();
    }
  }
};
var _serializable;
var PrintAnnotationStorage = class extends AnnotationStorage {
  constructor(parent) {
    super();
    __privateAdd(this, _serializable);
    const {
      map,
      hash,
      transfer
    } = parent.serializable;
    const clone = structuredClone(map, transfer ? {
      transfer
    } : null);
    __privateSet(this, _serializable, {
      map: clone,
      hash,
      transfer
    });
  }
  get print() {
    unreachable("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return __privateGet(this, _serializable);
  }
  get modifiedIds() {
    return shadow(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
};
_serializable = new WeakMap();
var _systemFonts;
var FontLoader = class {
  constructor({
    ownerDocument = globalThis.document,
    styleElement = null
  }) {
    __privateAdd(this, _systemFonts, /* @__PURE__ */ new Set());
    this._document = ownerDocument;
    this.nativeFontFaces = /* @__PURE__ */ new Set();
    this.styleElement = null;
    this.loadingRequests = [];
    this.loadTestFontId = 0;
  }
  addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.add(nativeFontFace);
    this._document.fonts.add(nativeFontFace);
  }
  removeNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.delete(nativeFontFace);
    this._document.fonts.delete(nativeFontFace);
  }
  insertRule(rule) {
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    const styleSheet = this.styleElement.sheet;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }
  clear() {
    for (const nativeFontFace of this.nativeFontFaces) {
      this._document.fonts.delete(nativeFontFace);
    }
    this.nativeFontFaces.clear();
    __privateGet(this, _systemFonts).clear();
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
  async loadSystemFont({
    systemFontInfo: info2,
    _inspectFont
  }) {
    if (!info2 || __privateGet(this, _systemFonts).has(info2.loadedName)) {
      return;
    }
    assert(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
    if (this.isFontLoadingAPISupported) {
      const {
        loadedName,
        src,
        style
      } = info2;
      const fontFace = new FontFace(loadedName, src, style);
      this.addNativeFontFace(fontFace);
      try {
        await fontFace.load();
        __privateGet(this, _systemFonts).add(loadedName);
        _inspectFont == null ? void 0 : _inspectFont(info2);
      } catch {
        warn(`Cannot load system font: ${info2.baseFontName}, installing it could help to improve PDF rendering.`);
        this.removeNativeFontFace(fontFace);
      }
      return;
    }
    unreachable("Not implemented: loadSystemFont without the Font Loading API.");
  }
  async bind(font) {
    if (font.attached || font.missingFile && !font.systemFontInfo) {
      return;
    }
    font.attached = true;
    if (font.systemFontInfo) {
      await this.loadSystemFont(font);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const nativeFontFace = font.createNativeFontFace();
      if (nativeFontFace) {
        this.addNativeFontFace(nativeFontFace);
        try {
          await nativeFontFace.loaded;
        } catch (ex) {
          warn(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
          font.disableFontFace = true;
          throw ex;
        }
      }
      return;
    }
    const rule = font.createFontFaceRule();
    if (rule) {
      this.insertRule(rule);
      if (this.isSyncFontLoadingSupported) {
        return;
      }
      await new Promise((resolve) => {
        const request = this._queueLoadingCallback(resolve);
        this._prepareFontLoadEvent(font, request);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var _a2;
    const hasFonts = !!((_a2 = this._document) == null ? void 0 : _a2.fonts);
    return shadow(this, "isFontLoadingAPISupported", hasFonts);
  }
  get isSyncFontLoadingSupported() {
    let supported = false;
    if (isNodeJS) {
      supported = true;
    } else if (typeof navigator !== "undefined" && typeof (navigator == null ? void 0 : navigator.userAgent) === "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) {
      supported = true;
    }
    return shadow(this, "isSyncFontLoadingSupported", supported);
  }
  _queueLoadingCallback(callback) {
    function completeRequest() {
      assert(!request.done, "completeRequest() cannot be called twice.");
      request.done = true;
      while (loadingRequests.length > 0 && loadingRequests[0].done) {
        const otherRequest = loadingRequests.shift();
        setTimeout(otherRequest.callback, 0);
      }
    }
    const {
      loadingRequests
    } = this;
    const request = {
      done: false,
      complete: completeRequest,
      callback
    };
    loadingRequests.push(request);
    return request;
  }
  get _loadTestFont() {
    const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return shadow(this, "_loadTestFont", testFont);
  }
  _prepareFontLoadEvent(font, request) {
    function int32(data2, offset) {
      return data2.charCodeAt(offset) << 24 | data2.charCodeAt(offset + 1) << 16 | data2.charCodeAt(offset + 2) << 8 | data2.charCodeAt(offset + 3) & 255;
    }
    function spliceString(s, offset, remove, insert) {
      const chunk1 = s.substring(0, offset);
      const chunk2 = s.substring(offset + remove);
      return chunk1 + insert + chunk2;
    }
    let i, ii;
    const canvas = this._document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    let called = 0;
    function isFontReady(name, callback) {
      if (++called > 30) {
        warn("Load test font never loaded.");
        callback();
        return;
      }
      ctx.font = "30px " + name;
      ctx.fillText(".", 0, 20);
      const imageData = ctx.getImageData(0, 0, 1, 1);
      if (imageData.data[3] > 0) {
        callback();
        return;
      }
      setTimeout(isFontReady.bind(null, name, callback));
    }
    const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
    let data = this._loadTestFont;
    const COMMENT_OFFSET = 976;
    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
    const CFF_CHECKSUM_OFFSET = 16;
    const XXXX_VALUE = 1482184792;
    let checksum = int32(data, CFF_CHECKSUM_OFFSET);
    for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
    }
    if (i < loadTestFontId.length) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
    }
    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
    const url = `url(data:font/opentype;base64,${btoa(data)});`;
    const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
    this.insertRule(rule);
    const div = this._document.createElement("div");
    div.style.visibility = "hidden";
    div.style.width = div.style.height = "10px";
    div.style.position = "absolute";
    div.style.top = div.style.left = "0px";
    for (const name of [font.loadedName, loadTestFontId]) {
      const span = this._document.createElement("span");
      span.textContent = "Hi";
      span.style.fontFamily = name;
      div.append(span);
    }
    this._document.body.append(div);
    isFontReady(loadTestFontId, () => {
      div.remove();
      request.complete();
    });
  }
};
_systemFonts = new WeakMap();
var FontFaceObject = class {
  constructor(translatedData, {
    disableFontFace = false,
    fontExtraProperties = false,
    inspectFont = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in translatedData) {
      this[i] = translatedData[i];
    }
    this.disableFontFace = disableFontFace === true;
    this.fontExtraProperties = fontExtraProperties === true;
    this._inspectFont = inspectFont;
  }
  createNativeFontFace() {
    var _a2;
    if (!this.data || this.disableFontFace) {
      return null;
    }
    let nativeFontFace;
    if (!this.cssFontInfo) {
      nativeFontFace = new FontFace(this.loadedName, this.data, {});
    } else {
      const css = {
        weight: this.cssFontInfo.fontWeight
      };
      if (this.cssFontInfo.italicAngle) {
        css.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
      }
      nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
    }
    (_a2 = this._inspectFont) == null ? void 0 : _a2.call(this, this);
    return nativeFontFace;
  }
  createFontFaceRule() {
    var _a2;
    if (!this.data || this.disableFontFace) {
      return null;
    }
    const url = `url(data:${this.mimetype};base64,${toBase64Util(this.data)});`;
    let rule;
    if (!this.cssFontInfo) {
      rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
    } else {
      let css = `font-weight: ${this.cssFontInfo.fontWeight};`;
      if (this.cssFontInfo.italicAngle) {
        css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
      }
      rule = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
    }
    (_a2 = this._inspectFont) == null ? void 0 : _a2.call(this, this, url);
    return rule;
  }
  getPathGenerator(objs, character) {
    if (this.compiledGlyphs[character] !== void 0) {
      return this.compiledGlyphs[character];
    }
    const objId = this.loadedName + "_path_" + character;
    let cmds;
    try {
      cmds = objs.get(objId);
    } catch (ex) {
      warn(`getPathGenerator - ignoring character: "${ex}".`);
    }
    const path = new Path2D(cmds || "");
    if (!this.fontExtraProperties) {
      objs.delete(objId);
    }
    return this.compiledGlyphs[character] = path;
  }
};
var CallbackKind = {
  DATA: 1,
  ERROR: 2
};
var StreamKind = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function onFn() {
}
function wrapReason(ex) {
  if (ex instanceof AbortException || ex instanceof InvalidPDFException || ex instanceof MissingPDFException || ex instanceof PasswordException || ex instanceof UnexpectedResponseException || ex instanceof UnknownErrorException) {
    return ex;
  }
  if (!(ex instanceof Error || typeof ex === "object" && ex !== null)) {
    unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
  }
  switch (ex.name) {
    case "AbortException":
      return new AbortException(ex.message);
    case "InvalidPDFException":
      return new InvalidPDFException(ex.message);
    case "MissingPDFException":
      return new MissingPDFException(ex.message);
    case "PasswordException":
      return new PasswordException(ex.message, ex.code);
    case "UnexpectedResponseException":
      return new UnexpectedResponseException(ex.message, ex.status);
    case "UnknownErrorException":
      return new UnknownErrorException(ex.message, ex.details);
  }
  return new UnknownErrorException(ex.message, ex.toString());
}
var _messageAC, _MessageHandler_instances, onMessage_fn, createStreamSink_fn, processStreamMessage_fn, deleteStreamController_fn;
var MessageHandler = class {
  constructor(sourceName, targetName, comObj) {
    __privateAdd(this, _MessageHandler_instances);
    __privateAdd(this, _messageAC, new AbortController());
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.comObj = comObj;
    this.callbackId = 1;
    this.streamId = 1;
    this.streamSinks = /* @__PURE__ */ Object.create(null);
    this.streamControllers = /* @__PURE__ */ Object.create(null);
    this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
    this.actionHandler = /* @__PURE__ */ Object.create(null);
    comObj.addEventListener("message", __privateMethod(this, _MessageHandler_instances, onMessage_fn).bind(this), {
      signal: __privateGet(this, _messageAC).signal
    });
  }
  on(actionName, handler) {
    const ah = this.actionHandler;
    if (ah[actionName]) {
      throw new Error(`There is already an actionName called "${actionName}"`);
    }
    ah[actionName] = handler;
  }
  send(actionName, data, transfers) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data
    }, transfers);
  }
  sendWithPromise(actionName, data, transfers) {
    const callbackId = this.callbackId++;
    const capability = Promise.withResolvers();
    this.callbackCapabilities[callbackId] = capability;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: actionName,
        callbackId,
        data
      }, transfers);
    } catch (ex) {
      capability.reject(ex);
    }
    return capability.promise;
  }
  sendWithStream(actionName, data, queueingStrategy, transfers) {
    const streamId = this.streamId++, sourceName = this.sourceName, targetName = this.targetName, comObj = this.comObj;
    return new ReadableStream({
      start: (controller) => {
        const startCapability = Promise.withResolvers();
        this.streamControllers[streamId] = {
          controller,
          startCall: startCapability,
          pullCall: null,
          cancelCall: null,
          isClosed: false
        };
        comObj.postMessage({
          sourceName,
          targetName,
          action: actionName,
          streamId,
          data,
          desiredSize: controller.desiredSize
        }, transfers);
        return startCapability.promise;
      },
      pull: (controller) => {
        const pullCapability = Promise.withResolvers();
        this.streamControllers[streamId].pullCall = pullCapability;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.PULL,
          streamId,
          desiredSize: controller.desiredSize
        });
        return pullCapability.promise;
      },
      cancel: (reason) => {
        assert(reason instanceof Error, "cancel must have a valid reason");
        const cancelCapability = Promise.withResolvers();
        this.streamControllers[streamId].cancelCall = cancelCapability;
        this.streamControllers[streamId].isClosed = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CANCEL,
          streamId,
          reason: wrapReason(reason)
        });
        return cancelCapability.promise;
      }
    }, queueingStrategy);
  }
  destroy() {
    var _a2;
    (_a2 = __privateGet(this, _messageAC)) == null ? void 0 : _a2.abort();
    __privateSet(this, _messageAC, null);
  }
};
_messageAC = new WeakMap();
_MessageHandler_instances = new WeakSet();
onMessage_fn = function({
  data
}) {
  if (data.targetName !== this.sourceName) {
    return;
  }
  if (data.stream) {
    __privateMethod(this, _MessageHandler_instances, processStreamMessage_fn).call(this, data);
    return;
  }
  if (data.callback) {
    const callbackId = data.callbackId;
    const capability = this.callbackCapabilities[callbackId];
    if (!capability) {
      throw new Error(`Cannot resolve callback ${callbackId}`);
    }
    delete this.callbackCapabilities[callbackId];
    if (data.callback === CallbackKind.DATA) {
      capability.resolve(data.data);
    } else if (data.callback === CallbackKind.ERROR) {
      capability.reject(wrapReason(data.reason));
    } else {
      throw new Error("Unexpected callback case");
    }
    return;
  }
  const action = this.actionHandler[data.action];
  if (!action) {
    throw new Error(`Unknown action from worker: ${data.action}`);
  }
  if (data.callbackId) {
    const sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
    Promise.try(action, data.data).then(function(result) {
      comObj.postMessage({
        sourceName,
        targetName,
        callback: CallbackKind.DATA,
        callbackId: data.callbackId,
        data: result
      });
    }, function(reason) {
      comObj.postMessage({
        sourceName,
        targetName,
        callback: CallbackKind.ERROR,
        callbackId: data.callbackId,
        reason: wrapReason(reason)
      });
    });
    return;
  }
  if (data.streamId) {
    __privateMethod(this, _MessageHandler_instances, createStreamSink_fn).call(this, data);
    return;
  }
  action(data.data);
};
createStreamSink_fn = function(data) {
  const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
  const self = this, action = this.actionHandler[data.action];
  const streamSink = {
    enqueue(chunk, size = 1, transfers) {
      if (this.isCancelled) {
        return;
      }
      const lastDesiredSize = this.desiredSize;
      this.desiredSize -= size;
      if (lastDesiredSize > 0 && this.desiredSize <= 0) {
        this.sinkCapability = Promise.withResolvers();
        this.ready = this.sinkCapability.promise;
      }
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.ENQUEUE,
        streamId,
        chunk
      }, transfers);
    },
    close() {
      if (this.isCancelled) {
        return;
      }
      this.isCancelled = true;
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.CLOSE,
        streamId
      });
      delete self.streamSinks[streamId];
    },
    error(reason) {
      assert(reason instanceof Error, "error must have a valid reason");
      if (this.isCancelled) {
        return;
      }
      this.isCancelled = true;
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.ERROR,
        streamId,
        reason: wrapReason(reason)
      });
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: false,
    desiredSize: data.desiredSize,
    ready: null
  };
  streamSink.sinkCapability.resolve();
  streamSink.ready = streamSink.sinkCapability.promise;
  this.streamSinks[streamId] = streamSink;
  Promise.try(action, data.data, streamSink).then(function() {
    comObj.postMessage({
      sourceName,
      targetName,
      stream: StreamKind.START_COMPLETE,
      streamId,
      success: true
    });
  }, function(reason) {
    comObj.postMessage({
      sourceName,
      targetName,
      stream: StreamKind.START_COMPLETE,
      streamId,
      reason: wrapReason(reason)
    });
  });
};
processStreamMessage_fn = function(data) {
  const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
  const streamController = this.streamControllers[streamId], streamSink = this.streamSinks[streamId];
  switch (data.stream) {
    case StreamKind.START_COMPLETE:
      if (data.success) {
        streamController.startCall.resolve();
      } else {
        streamController.startCall.reject(wrapReason(data.reason));
      }
      break;
    case StreamKind.PULL_COMPLETE:
      if (data.success) {
        streamController.pullCall.resolve();
      } else {
        streamController.pullCall.reject(wrapReason(data.reason));
      }
      break;
    case StreamKind.PULL:
      if (!streamSink) {
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.PULL_COMPLETE,
          streamId,
          success: true
        });
        break;
      }
      if (streamSink.desiredSize <= 0 && data.desiredSize > 0) {
        streamSink.sinkCapability.resolve();
      }
      streamSink.desiredSize = data.desiredSize;
      Promise.try(streamSink.onPull || onFn).then(function() {
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.PULL_COMPLETE,
          streamId,
          success: true
        });
      }, function(reason) {
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.PULL_COMPLETE,
          streamId,
          reason: wrapReason(reason)
        });
      });
      break;
    case StreamKind.ENQUEUE:
      assert(streamController, "enqueue should have stream controller");
      if (streamController.isClosed) {
        break;
      }
      streamController.controller.enqueue(data.chunk);
      break;
    case StreamKind.CLOSE:
      assert(streamController, "close should have stream controller");
      if (streamController.isClosed) {
        break;
      }
      streamController.isClosed = true;
      streamController.controller.close();
      __privateMethod(this, _MessageHandler_instances, deleteStreamController_fn).call(this, streamController, streamId);
      break;
    case StreamKind.ERROR:
      assert(streamController, "error should have stream controller");
      streamController.controller.error(wrapReason(data.reason));
      __privateMethod(this, _MessageHandler_instances, deleteStreamController_fn).call(this, streamController, streamId);
      break;
    case StreamKind.CANCEL_COMPLETE:
      if (data.success) {
        streamController.cancelCall.resolve();
      } else {
        streamController.cancelCall.reject(wrapReason(data.reason));
      }
      __privateMethod(this, _MessageHandler_instances, deleteStreamController_fn).call(this, streamController, streamId);
      break;
    case StreamKind.CANCEL:
      if (!streamSink) {
        break;
      }
      const dataReason = wrapReason(data.reason);
      Promise.try(streamSink.onCancel || onFn, dataReason).then(function() {
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CANCEL_COMPLETE,
          streamId,
          success: true
        });
      }, function(reason) {
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CANCEL_COMPLETE,
          streamId,
          reason: wrapReason(reason)
        });
      });
      streamSink.sinkCapability.reject(dataReason);
      streamSink.isCancelled = true;
      delete this.streamSinks[streamId];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
};
deleteStreamController_fn = async function(streamController, streamId) {
  var _a2, _b, _c;
  await Promise.allSettled([(_a2 = streamController.startCall) == null ? void 0 : _a2.promise, (_b = streamController.pullCall) == null ? void 0 : _b.promise, (_c = streamController.cancelCall) == null ? void 0 : _c.promise]);
  delete this.streamControllers[streamId];
};
var _enableHWA;
var BaseCanvasFactory = class {
  constructor({
    enableHWA = false
  }) {
    __privateAdd(this, _enableHWA, false);
    __privateSet(this, _enableHWA, enableHWA);
  }
  create(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    const canvas = this._createCanvas(width, height);
    return {
      canvas,
      context: canvas.getContext("2d", {
        willReadFrequently: !__privateGet(this, _enableHWA)
      })
    };
  }
  reset(canvasAndContext, width, height) {
    if (!canvasAndContext.canvas) {
      throw new Error("Canvas is not specified");
    }
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }
  destroy(canvasAndContext) {
    if (!canvasAndContext.canvas) {
      throw new Error("Canvas is not specified");
    }
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
  _createCanvas(width, height) {
    unreachable("Abstract method `_createCanvas` called.");
  }
};
_enableHWA = new WeakMap();
var DOMCanvasFactory = class extends BaseCanvasFactory {
  constructor({
    ownerDocument = globalThis.document,
    enableHWA = false
  }) {
    super({
      enableHWA
    });
    this._document = ownerDocument;
  }
  _createCanvas(width, height) {
    const canvas = this._document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
};
var BaseCMapReaderFactory = class {
  constructor({
    baseUrl = null,
    isCompressed = true
  }) {
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }
  async fetch({
    name
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    }
    if (!name) {
      throw new Error("CMap name must be specified.");
    }
    const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(url).then((cMapData) => ({
      cMapData,
      isCompressed: this.isCompressed
    })).catch((reason) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${url}`);
    });
  }
  async _fetch(url) {
    unreachable("Abstract method `_fetch` called.");
  }
};
var DOMCMapReaderFactory = class extends BaseCMapReaderFactory {
  async _fetch(url) {
    const data = await fetchData(url, this.isCompressed ? "arraybuffer" : "text");
    return data instanceof ArrayBuffer ? new Uint8Array(data) : stringToBytes(data);
  }
};
var BaseFilterFactory = class {
  addFilter(maps) {
    return "none";
  }
  addHCMFilter(fgColor, bgColor) {
    return "none";
  }
  addAlphaFilter(map) {
    return "none";
  }
  addLuminosityFilter(map) {
    return "none";
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    return "none";
  }
  destroy(keepHCM = false) {
  }
};
var _baseUrl, __cache, __defs, _docId, _document, __hcmCache, _id3, _DOMFilterFactory_instances, cache_get, hcmCache_get, defs_get, createTables_fn, createUrl_fn, addLuminosityConversion_fn, addGrayConversion_fn, createFilter_fn, appendFeFunc_fn, addTransferMapConversion_fn, addTransferMapAlphaConversion_fn, getRGB_fn;
var DOMFilterFactory = class extends BaseFilterFactory {
  constructor({
    docId,
    ownerDocument = globalThis.document
  }) {
    super();
    __privateAdd(this, _DOMFilterFactory_instances);
    __privateAdd(this, _baseUrl);
    __privateAdd(this, __cache);
    __privateAdd(this, __defs);
    __privateAdd(this, _docId);
    __privateAdd(this, _document);
    __privateAdd(this, __hcmCache);
    __privateAdd(this, _id3, 0);
    __privateSet(this, _docId, docId);
    __privateSet(this, _document, ownerDocument);
  }
  addFilter(maps) {
    if (!maps) {
      return "none";
    }
    let value = __privateGet(this, _DOMFilterFactory_instances, cache_get).get(maps);
    if (value) {
      return value;
    }
    const [tableR, tableG, tableB] = __privateMethod(this, _DOMFilterFactory_instances, createTables_fn).call(this, maps);
    const key = maps.length === 1 ? tableR : `${tableR}${tableG}${tableB}`;
    value = __privateGet(this, _DOMFilterFactory_instances, cache_get).get(key);
    if (value) {
      __privateGet(this, _DOMFilterFactory_instances, cache_get).set(maps, value);
      return value;
    }
    const id = `g_${__privateGet(this, _docId)}_transfer_map_${__privateWrapper(this, _id3)._++}`;
    const url = __privateMethod(this, _DOMFilterFactory_instances, createUrl_fn).call(this, id);
    __privateGet(this, _DOMFilterFactory_instances, cache_get).set(maps, url);
    __privateGet(this, _DOMFilterFactory_instances, cache_get).set(key, url);
    const filter = __privateMethod(this, _DOMFilterFactory_instances, createFilter_fn).call(this, id);
    __privateMethod(this, _DOMFilterFactory_instances, addTransferMapConversion_fn).call(this, tableR, tableG, tableB, filter);
    return url;
  }
  addHCMFilter(fgColor, bgColor) {
    var _a2;
    const key = `${fgColor}-${bgColor}`;
    const filterName = "base";
    let info2 = __privateGet(this, _DOMFilterFactory_instances, hcmCache_get).get(filterName);
    if ((info2 == null ? void 0 : info2.key) === key) {
      return info2.url;
    }
    if (info2) {
      (_a2 = info2.filter) == null ? void 0 : _a2.remove();
      info2.key = key;
      info2.url = "none";
      info2.filter = null;
    } else {
      info2 = {
        key,
        url: "none",
        filter: null
      };
      __privateGet(this, _DOMFilterFactory_instances, hcmCache_get).set(filterName, info2);
    }
    if (!fgColor || !bgColor) {
      return info2.url;
    }
    const fgRGB = __privateMethod(this, _DOMFilterFactory_instances, getRGB_fn).call(this, fgColor);
    fgColor = Util.makeHexColor(...fgRGB);
    const bgRGB = __privateMethod(this, _DOMFilterFactory_instances, getRGB_fn).call(this, bgColor);
    bgColor = Util.makeHexColor(...bgRGB);
    __privateGet(this, _DOMFilterFactory_instances, defs_get).style.color = "";
    if (fgColor === "#000000" && bgColor === "#ffffff" || fgColor === bgColor) {
      return info2.url;
    }
    const map = new Array(256);
    for (let i = 0; i <= 255; i++) {
      const x = i / 255;
      map[i] = x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    }
    const table = map.join(",");
    const id = `g_${__privateGet(this, _docId)}_hcm_filter`;
    const filter = info2.filter = __privateMethod(this, _DOMFilterFactory_instances, createFilter_fn).call(this, id);
    __privateMethod(this, _DOMFilterFactory_instances, addTransferMapConversion_fn).call(this, table, table, table, filter);
    __privateMethod(this, _DOMFilterFactory_instances, addGrayConversion_fn).call(this, filter);
    const getSteps = (c, n) => {
      const start = fgRGB[c] / 255;
      const end = bgRGB[c] / 255;
      const arr = new Array(n + 1);
      for (let i = 0; i <= n; i++) {
        arr[i] = start + i / n * (end - start);
      }
      return arr.join(",");
    };
    __privateMethod(this, _DOMFilterFactory_instances, addTransferMapConversion_fn).call(this, getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), filter);
    info2.url = __privateMethod(this, _DOMFilterFactory_instances, createUrl_fn).call(this, id);
    return info2.url;
  }
  addAlphaFilter(map) {
    let value = __privateGet(this, _DOMFilterFactory_instances, cache_get).get(map);
    if (value) {
      return value;
    }
    const [tableA] = __privateMethod(this, _DOMFilterFactory_instances, createTables_fn).call(this, [map]);
    const key = `alpha_${tableA}`;
    value = __privateGet(this, _DOMFilterFactory_instances, cache_get).get(key);
    if (value) {
      __privateGet(this, _DOMFilterFactory_instances, cache_get).set(map, value);
      return value;
    }
    const id = `g_${__privateGet(this, _docId)}_alpha_map_${__privateWrapper(this, _id3)._++}`;
    const url = __privateMethod(this, _DOMFilterFactory_instances, createUrl_fn).call(this, id);
    __privateGet(this, _DOMFilterFactory_instances, cache_get).set(map, url);
    __privateGet(this, _DOMFilterFactory_instances, cache_get).set(key, url);
    const filter = __privateMethod(this, _DOMFilterFactory_instances, createFilter_fn).call(this, id);
    __privateMethod(this, _DOMFilterFactory_instances, addTransferMapAlphaConversion_fn).call(this, tableA, filter);
    return url;
  }
  addLuminosityFilter(map) {
    let value = __privateGet(this, _DOMFilterFactory_instances, cache_get).get(map || "luminosity");
    if (value) {
      return value;
    }
    let tableA, key;
    if (map) {
      [tableA] = __privateMethod(this, _DOMFilterFactory_instances, createTables_fn).call(this, [map]);
      key = `luminosity_${tableA}`;
    } else {
      key = "luminosity";
    }
    value = __privateGet(this, _DOMFilterFactory_instances, cache_get).get(key);
    if (value) {
      __privateGet(this, _DOMFilterFactory_instances, cache_get).set(map, value);
      return value;
    }
    const id = `g_${__privateGet(this, _docId)}_luminosity_map_${__privateWrapper(this, _id3)._++}`;
    const url = __privateMethod(this, _DOMFilterFactory_instances, createUrl_fn).call(this, id);
    __privateGet(this, _DOMFilterFactory_instances, cache_get).set(map, url);
    __privateGet(this, _DOMFilterFactory_instances, cache_get).set(key, url);
    const filter = __privateMethod(this, _DOMFilterFactory_instances, createFilter_fn).call(this, id);
    __privateMethod(this, _DOMFilterFactory_instances, addLuminosityConversion_fn).call(this, filter);
    if (map) {
      __privateMethod(this, _DOMFilterFactory_instances, addTransferMapAlphaConversion_fn).call(this, tableA, filter);
    }
    return url;
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    var _a2;
    const key = `${fgColor}-${bgColor}-${newFgColor}-${newBgColor}`;
    let info2 = __privateGet(this, _DOMFilterFactory_instances, hcmCache_get).get(filterName);
    if ((info2 == null ? void 0 : info2.key) === key) {
      return info2.url;
    }
    if (info2) {
      (_a2 = info2.filter) == null ? void 0 : _a2.remove();
      info2.key = key;
      info2.url = "none";
      info2.filter = null;
    } else {
      info2 = {
        key,
        url: "none",
        filter: null
      };
      __privateGet(this, _DOMFilterFactory_instances, hcmCache_get).set(filterName, info2);
    }
    if (!fgColor || !bgColor) {
      return info2.url;
    }
    const [fgRGB, bgRGB] = [fgColor, bgColor].map(__privateMethod(this, _DOMFilterFactory_instances, getRGB_fn).bind(this));
    let fgGray = Math.round(0.2126 * fgRGB[0] + 0.7152 * fgRGB[1] + 0.0722 * fgRGB[2]);
    let bgGray = Math.round(0.2126 * bgRGB[0] + 0.7152 * bgRGB[1] + 0.0722 * bgRGB[2]);
    let [newFgRGB, newBgRGB] = [newFgColor, newBgColor].map(__privateMethod(this, _DOMFilterFactory_instances, getRGB_fn).bind(this));
    if (bgGray < fgGray) {
      [fgGray, bgGray, newFgRGB, newBgRGB] = [bgGray, fgGray, newBgRGB, newFgRGB];
    }
    __privateGet(this, _DOMFilterFactory_instances, defs_get).style.color = "";
    const getSteps = (fg, bg, n) => {
      const arr = new Array(256);
      const step = (bgGray - fgGray) / n;
      const newStart = fg / 255;
      const newStep = (bg - fg) / (255 * n);
      let prev = 0;
      for (let i = 0; i <= n; i++) {
        const k = Math.round(fgGray + i * step);
        const value = newStart + i * newStep;
        for (let j = prev; j <= k; j++) {
          arr[j] = value;
        }
        prev = k + 1;
      }
      for (let i = prev; i < 256; i++) {
        arr[i] = arr[prev - 1];
      }
      return arr.join(",");
    };
    const id = `g_${__privateGet(this, _docId)}_hcm_${filterName}_filter`;
    const filter = info2.filter = __privateMethod(this, _DOMFilterFactory_instances, createFilter_fn).call(this, id);
    __privateMethod(this, _DOMFilterFactory_instances, addGrayConversion_fn).call(this, filter);
    __privateMethod(this, _DOMFilterFactory_instances, addTransferMapConversion_fn).call(this, getSteps(newFgRGB[0], newBgRGB[0], 5), getSteps(newFgRGB[1], newBgRGB[1], 5), getSteps(newFgRGB[2], newBgRGB[2], 5), filter);
    info2.url = __privateMethod(this, _DOMFilterFactory_instances, createUrl_fn).call(this, id);
    return info2.url;
  }
  destroy(keepHCM = false) {
    var _a2, _b, _c, _d;
    if (keepHCM && ((_a2 = __privateGet(this, __hcmCache)) == null ? void 0 : _a2.size)) {
      return;
    }
    (_b = __privateGet(this, __defs)) == null ? void 0 : _b.parentNode.parentNode.remove();
    __privateSet(this, __defs, null);
    (_c = __privateGet(this, __cache)) == null ? void 0 : _c.clear();
    __privateSet(this, __cache, null);
    (_d = __privateGet(this, __hcmCache)) == null ? void 0 : _d.clear();
    __privateSet(this, __hcmCache, null);
    __privateSet(this, _id3, 0);
  }
};
_baseUrl = new WeakMap();
__cache = new WeakMap();
__defs = new WeakMap();
_docId = new WeakMap();
_document = new WeakMap();
__hcmCache = new WeakMap();
_id3 = new WeakMap();
_DOMFilterFactory_instances = new WeakSet();
cache_get = function() {
  return __privateGet(this, __cache) || __privateSet(this, __cache, /* @__PURE__ */ new Map());
};
hcmCache_get = function() {
  return __privateGet(this, __hcmCache) || __privateSet(this, __hcmCache, /* @__PURE__ */ new Map());
};
defs_get = function() {
  if (!__privateGet(this, __defs)) {
    const div = __privateGet(this, _document).createElement("div");
    const {
      style
    } = div;
    style.visibility = "hidden";
    style.contain = "strict";
    style.width = style.height = 0;
    style.position = "absolute";
    style.top = style.left = 0;
    style.zIndex = -1;
    const svg = __privateGet(this, _document).createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", 0);
    svg.setAttribute("height", 0);
    __privateSet(this, __defs, __privateGet(this, _document).createElementNS(SVG_NS, "defs"));
    div.append(svg);
    svg.append(__privateGet(this, __defs));
    __privateGet(this, _document).body.append(div);
  }
  return __privateGet(this, __defs);
};
createTables_fn = function(maps) {
  if (maps.length === 1) {
    const mapR2 = maps[0];
    const buffer = new Array(256);
    for (let i = 0; i < 256; i++) {
      buffer[i] = mapR2[i] / 255;
    }
    const table = buffer.join(",");
    return [table, table, table];
  }
  const [mapR, mapG, mapB] = maps;
  const bufferR = new Array(256);
  const bufferG = new Array(256);
  const bufferB = new Array(256);
  for (let i = 0; i < 256; i++) {
    bufferR[i] = mapR[i] / 255;
    bufferG[i] = mapG[i] / 255;
    bufferB[i] = mapB[i] / 255;
  }
  return [bufferR.join(","), bufferG.join(","), bufferB.join(",")];
};
createUrl_fn = function(id) {
  if (__privateGet(this, _baseUrl) === void 0) {
    __privateSet(this, _baseUrl, "");
    const url = __privateGet(this, _document).URL;
    if (url !== __privateGet(this, _document).baseURI) {
      if (isDataScheme(url)) {
        warn('#createUrl: ignore "data:"-URL for performance reasons.');
      } else {
        __privateSet(this, _baseUrl, url.split("#", 1)[0]);
      }
    }
  }
  return `url(${__privateGet(this, _baseUrl)}#${id})`;
};
addLuminosityConversion_fn = function(filter) {
  const feColorMatrix = __privateGet(this, _document).createElementNS(SVG_NS, "feColorMatrix");
  feColorMatrix.setAttribute("type", "matrix");
  feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
  filter.append(feColorMatrix);
};
addGrayConversion_fn = function(filter) {
  const feColorMatrix = __privateGet(this, _document).createElementNS(SVG_NS, "feColorMatrix");
  feColorMatrix.setAttribute("type", "matrix");
  feColorMatrix.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
  filter.append(feColorMatrix);
};
createFilter_fn = function(id) {
  const filter = __privateGet(this, _document).createElementNS(SVG_NS, "filter");
  filter.setAttribute("color-interpolation-filters", "sRGB");
  filter.setAttribute("id", id);
  __privateGet(this, _DOMFilterFactory_instances, defs_get).append(filter);
  return filter;
};
appendFeFunc_fn = function(feComponentTransfer, func, table) {
  const feFunc = __privateGet(this, _document).createElementNS(SVG_NS, func);
  feFunc.setAttribute("type", "discrete");
  feFunc.setAttribute("tableValues", table);
  feComponentTransfer.append(feFunc);
};
addTransferMapConversion_fn = function(rTable, gTable, bTable, filter) {
  const feComponentTransfer = __privateGet(this, _document).createElementNS(SVG_NS, "feComponentTransfer");
  filter.append(feComponentTransfer);
  __privateMethod(this, _DOMFilterFactory_instances, appendFeFunc_fn).call(this, feComponentTransfer, "feFuncR", rTable);
  __privateMethod(this, _DOMFilterFactory_instances, appendFeFunc_fn).call(this, feComponentTransfer, "feFuncG", gTable);
  __privateMethod(this, _DOMFilterFactory_instances, appendFeFunc_fn).call(this, feComponentTransfer, "feFuncB", bTable);
};
addTransferMapAlphaConversion_fn = function(aTable, filter) {
  const feComponentTransfer = __privateGet(this, _document).createElementNS(SVG_NS, "feComponentTransfer");
  filter.append(feComponentTransfer);
  __privateMethod(this, _DOMFilterFactory_instances, appendFeFunc_fn).call(this, feComponentTransfer, "feFuncA", aTable);
};
getRGB_fn = function(color) {
  __privateGet(this, _DOMFilterFactory_instances, defs_get).style.color = color;
  return getRGB(getComputedStyle(__privateGet(this, _DOMFilterFactory_instances, defs_get)).getPropertyValue("color"));
};
var BaseStandardFontDataFactory = class {
  constructor({
    baseUrl = null
  }) {
    this.baseUrl = baseUrl;
  }
  async fetch({
    filename
  }) {
    if (!this.baseUrl) {
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    }
    if (!filename) {
      throw new Error("Font filename must be specified.");
    }
    const url = `${this.baseUrl}${filename}`;
    return this._fetch(url).catch((reason) => {
      throw new Error(`Unable to load font data at: ${url}`);
    });
  }
  async _fetch(url) {
    unreachable("Abstract method `_fetch` called.");
  }
};
var DOMStandardFontDataFactory = class extends BaseStandardFontDataFactory {
  async _fetch(url) {
    const data = await fetchData(url, "arraybuffer");
    return new Uint8Array(data);
  }
};
if (isNodeJS) {
  warn("Please use the `legacy` build in Node.js environments.");
}
async function node_utils_fetchData(url) {
  const fs = process.getBuiltinModule("fs");
  const data = await fs.promises.readFile(url);
  return new Uint8Array(data);
}
var NodeFilterFactory = class extends BaseFilterFactory {
};
var NodeCanvasFactory = class extends BaseCanvasFactory {
  _createCanvas(width, height) {
    const require2 = process.getBuiltinModule("module").createRequire(import.meta.url);
    const canvas = require2("@napi-rs/canvas");
    return canvas.createCanvas(width, height);
  }
};
var NodeCMapReaderFactory = class extends BaseCMapReaderFactory {
  async _fetch(url) {
    return node_utils_fetchData(url);
  }
};
var NodeStandardFontDataFactory = class extends BaseStandardFontDataFactory {
  async _fetch(url) {
    return node_utils_fetchData(url);
  }
};
var PathType = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function applyBoundingBox(ctx, bbox) {
  if (!bbox) {
    return;
  }
  const width = bbox[2] - bbox[0];
  const height = bbox[3] - bbox[1];
  const region = new Path2D();
  region.rect(bbox[0], bbox[1], width, height);
  ctx.clip(region);
}
var BaseShadingPattern = class {
  getPattern() {
    unreachable("Abstract method `getPattern` called.");
  }
};
var RadialAxialShadingPattern = class extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._type = IR[1];
    this._bbox = IR[2];
    this._colorStops = IR[3];
    this._p0 = IR[4];
    this._p1 = IR[5];
    this._r0 = IR[6];
    this._r1 = IR[7];
    this.matrix = null;
  }
  _createGradient(ctx) {
    let grad;
    if (this._type === "axial") {
      grad = ctx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
    } else if (this._type === "radial") {
      grad = ctx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
    }
    for (const colorStop of this._colorStops) {
      grad.addColorStop(colorStop[0], colorStop[1]);
    }
    return grad;
  }
  getPattern(ctx, owner, inverse, pathType) {
    let pattern;
    if (pathType === PathType.STROKE || pathType === PathType.FILL) {
      const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, getCurrentTransform(ctx)) || [0, 0, 0, 0];
      const width = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
      const height = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
      const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", width, height);
      const tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.beginPath();
      tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
      inverse = Util.transform(inverse, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
      tmpCtx.transform(...owner.baseTransform);
      if (this.matrix) {
        tmpCtx.transform(...this.matrix);
      }
      applyBoundingBox(tmpCtx, this._bbox);
      tmpCtx.fillStyle = this._createGradient(tmpCtx);
      tmpCtx.fill();
      pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
      const domMatrix = new DOMMatrix(inverse);
      pattern.setTransform(domMatrix);
    } else {
      applyBoundingBox(ctx, this._bbox);
      pattern = this._createGradient(ctx);
    }
    return pattern;
  }
};
function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
  const coords = context.coords, colors = context.colors;
  const bytes = data.data, rowSize = data.width * 4;
  let tmp;
  if (coords[p1 + 1] > coords[p2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  if (coords[p2 + 1] > coords[p3 + 1]) {
    tmp = p2;
    p2 = p3;
    p3 = tmp;
    tmp = c2;
    c2 = c3;
    c3 = tmp;
  }
  if (coords[p1 + 1] > coords[p2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  const x1 = (coords[p1] + context.offsetX) * context.scaleX;
  const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
  const x2 = (coords[p2] + context.offsetX) * context.scaleX;
  const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
  const x3 = (coords[p3] + context.offsetX) * context.scaleX;
  const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
  if (y1 >= y3) {
    return;
  }
  const c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
  const c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
  const c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
  const minY = Math.round(y1), maxY = Math.round(y3);
  let xa, car, cag, cab;
  let xb, cbr, cbg, cbb;
  for (let y = minY; y <= maxY; y++) {
    if (y < y2) {
      const k2 = y < y1 ? 0 : (y1 - y) / (y1 - y2);
      xa = x1 - (x1 - x2) * k2;
      car = c1r - (c1r - c2r) * k2;
      cag = c1g - (c1g - c2g) * k2;
      cab = c1b - (c1b - c2b) * k2;
    } else {
      let k2;
      if (y > y3) {
        k2 = 1;
      } else if (y2 === y3) {
        k2 = 0;
      } else {
        k2 = (y2 - y) / (y2 - y3);
      }
      xa = x2 - (x2 - x3) * k2;
      car = c2r - (c2r - c3r) * k2;
      cag = c2g - (c2g - c3g) * k2;
      cab = c2b - (c2b - c3b) * k2;
    }
    let k;
    if (y < y1) {
      k = 0;
    } else if (y > y3) {
      k = 1;
    } else {
      k = (y1 - y) / (y1 - y3);
    }
    xb = x1 - (x1 - x3) * k;
    cbr = c1r - (c1r - c3r) * k;
    cbg = c1g - (c1g - c3g) * k;
    cbb = c1b - (c1b - c3b) * k;
    const x1_ = Math.round(Math.min(xa, xb));
    const x2_ = Math.round(Math.max(xa, xb));
    let j = rowSize * y + x1_ * 4;
    for (let x = x1_; x <= x2_; x++) {
      k = (xa - x) / (xa - xb);
      if (k < 0) {
        k = 0;
      } else if (k > 1) {
        k = 1;
      }
      bytes[j++] = car - (car - cbr) * k | 0;
      bytes[j++] = cag - (cag - cbg) * k | 0;
      bytes[j++] = cab - (cab - cbb) * k | 0;
      bytes[j++] = 255;
    }
  }
}
function drawFigure(data, figure, context) {
  const ps = figure.coords;
  const cs = figure.colors;
  let i, ii;
  switch (figure.type) {
    case "lattice":
      const verticesPerRow = figure.verticesPerRow;
      const rows = Math.floor(ps.length / verticesPerRow) - 1;
      const cols = verticesPerRow - 1;
      for (i = 0; i < rows; i++) {
        let q = i * verticesPerRow;
        for (let j = 0; j < cols; j++, q++) {
          drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
          drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
        }
      }
      break;
    case "triangles":
      for (i = 0, ii = ps.length; i < ii; i += 3) {
        drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
      }
      break;
    default:
      throw new Error("illegal figure");
  }
}
var MeshShadingPattern = class extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._coords = IR[2];
    this._colors = IR[3];
    this._figures = IR[4];
    this._bounds = IR[5];
    this._bbox = IR[7];
    this._background = IR[8];
    this.matrix = null;
  }
  _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
    const EXPECTED_SCALE = 1.1;
    const MAX_PATTERN_SIZE = 3e3;
    const BORDER_SIZE = 2;
    const offsetX = Math.floor(this._bounds[0]);
    const offsetY = Math.floor(this._bounds[1]);
    const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
    const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
    const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    const scaleX = boundsWidth / width;
    const scaleY = boundsHeight / height;
    const context = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    const paddedWidth = width + BORDER_SIZE * 2;
    const paddedHeight = height + BORDER_SIZE * 2;
    const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight);
    const tmpCtx = tmpCanvas.context;
    const data = tmpCtx.createImageData(width, height);
    if (backgroundColor) {
      const bytes = data.data;
      for (let i = 0, ii = bytes.length; i < ii; i += 4) {
        bytes[i] = backgroundColor[0];
        bytes[i + 1] = backgroundColor[1];
        bytes[i + 2] = backgroundColor[2];
        bytes[i + 3] = 255;
      }
    }
    for (const figure of this._figures) {
      drawFigure(data, figure, context);
    }
    tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
    const canvas = tmpCanvas.canvas;
    return {
      canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX,
      scaleY
    };
  }
  getPattern(ctx, owner, inverse, pathType) {
    applyBoundingBox(ctx, this._bbox);
    let scale;
    if (pathType === PathType.SHADING) {
      scale = Util.singularValueDecompose2dScale(getCurrentTransform(ctx));
    } else {
      scale = Util.singularValueDecompose2dScale(owner.baseTransform);
      if (this.matrix) {
        const matrixScale = Util.singularValueDecompose2dScale(this.matrix);
        scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
      }
    }
    const temporaryPatternCanvas = this._createMeshCanvas(scale, pathType === PathType.SHADING ? null : this._background, owner.cachedCanvases);
    if (pathType !== PathType.SHADING) {
      ctx.setTransform(...owner.baseTransform);
      if (this.matrix) {
        ctx.transform(...this.matrix);
      }
    }
    ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
    return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
  }
};
var DummyShadingPattern = class extends BaseShadingPattern {
  getPattern() {
    return "hotpink";
  }
};
function getShadingPattern(IR) {
  switch (IR[0]) {
    case "RadialAxial":
      return new RadialAxialShadingPattern(IR);
    case "Mesh":
      return new MeshShadingPattern(IR);
    case "Dummy":
      return new DummyShadingPattern();
  }
  throw new Error(`Unknown IR type: ${IR[0]}`);
}
var PaintType = {
  COLORED: 1,
  UNCOLORED: 2
};
var _TilingPattern = class _TilingPattern {
  constructor(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
    this.operatorList = IR[2];
    this.matrix = IR[3];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.color = color;
    this.ctx = ctx;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
  }
  createPatternCanvas(owner) {
    const {
      bbox,
      operatorList,
      paintType,
      tilingType,
      color,
      canvasGraphicsFactory
    } = this;
    let {
      xstep,
      ystep
    } = this;
    xstep = Math.abs(xstep);
    ystep = Math.abs(ystep);
    info("TilingType: " + tilingType);
    const x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
    const width = x1 - x0;
    const height = y1 - y0;
    const matrixScale = Util.singularValueDecompose2dScale(this.matrix);
    const curMatrixScale = Util.singularValueDecompose2dScale(this.baseTransform);
    const combinedScaleX = matrixScale[0] * curMatrixScale[0];
    const combinedScaleY = matrixScale[1] * curMatrixScale[1];
    let canvasWidth = width, canvasHeight = height, redrawHorizontally = false, redrawVertically = false;
    const xScaledStep = Math.ceil(xstep * combinedScaleX);
    const yScaledStep = Math.ceil(ystep * combinedScaleY);
    const xScaledWidth = Math.ceil(width * combinedScaleX);
    const yScaledHeight = Math.ceil(height * combinedScaleY);
    if (xScaledStep >= xScaledWidth) {
      canvasWidth = xstep;
    } else {
      redrawHorizontally = true;
    }
    if (yScaledStep >= yScaledHeight) {
      canvasHeight = ystep;
    } else {
      redrawVertically = true;
    }
    const dimx = this.getSizeAndScale(canvasWidth, this.ctx.canvas.width, combinedScaleX);
    const dimy = this.getSizeAndScale(canvasHeight, this.ctx.canvas.height, combinedScaleY);
    const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size);
    const tmpCtx = tmpCanvas.context;
    const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
    graphics.groupLevel = owner.groupLevel;
    this.setFillAndStrokeStyleToContext(graphics, paintType, color);
    tmpCtx.translate(-dimx.scale * x0, -dimy.scale * y0);
    graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
    tmpCtx.save();
    this.clipBbox(graphics, x0, y0, x1, y1);
    graphics.baseTransform = getCurrentTransform(graphics.ctx);
    graphics.executeOperatorList(operatorList);
    graphics.endDrawing();
    tmpCtx.restore();
    if (redrawHorizontally || redrawVertically) {
      const image = tmpCanvas.canvas;
      if (redrawHorizontally) {
        canvasWidth = xstep;
      }
      if (redrawVertically) {
        canvasHeight = ystep;
      }
      const dimx2 = this.getSizeAndScale(canvasWidth, this.ctx.canvas.width, combinedScaleX);
      const dimy2 = this.getSizeAndScale(canvasHeight, this.ctx.canvas.height, combinedScaleY);
      const xSize = dimx2.size;
      const ySize = dimy2.size;
      const tmpCanvas2 = owner.cachedCanvases.getCanvas("pattern-workaround", xSize, ySize);
      const tmpCtx2 = tmpCanvas2.context;
      const ii = redrawHorizontally ? Math.floor(width / xstep) : 0;
      const jj = redrawVertically ? Math.floor(height / ystep) : 0;
      for (let i = 0; i <= ii; i++) {
        for (let j = 0; j <= jj; j++) {
          tmpCtx2.drawImage(image, xSize * i, ySize * j, xSize, ySize, 0, 0, xSize, ySize);
        }
      }
      return {
        canvas: tmpCanvas2.canvas,
        scaleX: dimx2.scale,
        scaleY: dimy2.scale,
        offsetX: x0,
        offsetY: y0
      };
    }
    return {
      canvas: tmpCanvas.canvas,
      scaleX: dimx.scale,
      scaleY: dimy.scale,
      offsetX: x0,
      offsetY: y0
    };
  }
  getSizeAndScale(step, realOutputSize, scale) {
    const maxSize = Math.max(_TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
    let size = Math.ceil(step * scale);
    if (size >= maxSize) {
      size = maxSize;
    } else {
      scale = size / step;
    }
    return {
      scale,
      size
    };
  }
  clipBbox(graphics, x0, y0, x1, y1) {
    const bboxWidth = x1 - x0;
    const bboxHeight = y1 - y0;
    graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
    graphics.current.updateRectMinMax(getCurrentTransform(graphics.ctx), [x0, y0, x1, y1]);
    graphics.clip();
    graphics.endPath();
  }
  setFillAndStrokeStyleToContext(graphics, paintType, color) {
    const context = graphics.ctx, current = graphics.current;
    switch (paintType) {
      case PaintType.COLORED:
        const ctx = this.ctx;
        context.fillStyle = ctx.fillStyle;
        context.strokeStyle = ctx.strokeStyle;
        current.fillColor = ctx.fillStyle;
        current.strokeColor = ctx.strokeStyle;
        break;
      case PaintType.UNCOLORED:
        const cssColor = Util.makeHexColor(color[0], color[1], color[2]);
        context.fillStyle = cssColor;
        context.strokeStyle = cssColor;
        current.fillColor = cssColor;
        current.strokeColor = cssColor;
        break;
      default:
        throw new FormatError(`Unsupported paint type: ${paintType}`);
    }
  }
  getPattern(ctx, owner, inverse, pathType) {
    let matrix = inverse;
    if (pathType !== PathType.SHADING) {
      matrix = Util.transform(matrix, owner.baseTransform);
      if (this.matrix) {
        matrix = Util.transform(matrix, this.matrix);
      }
    }
    const temporaryPatternCanvas = this.createPatternCanvas(owner);
    let domMatrix = new DOMMatrix(matrix);
    domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
    const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
    pattern.setTransform(domMatrix);
    return pattern;
  }
};
__publicField(_TilingPattern, "MAX_PATTERN_SIZE", 3e3);
var TilingPattern = _TilingPattern;
function convertBlackAndWhiteToRGBA({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 4294967295,
  inverseDecode = false
}) {
  const black = util_FeatureTest.isLittleEndian ? 4278190080 : 255;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
  const widthInSource = width >> 3;
  const widthRemainder = width & 7;
  const srcLength = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let i = 0; i < height; i++) {
    for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
      const elem2 = srcPos < srcLength ? src[srcPos] : 255;
      dest[destPos++] = elem2 & 128 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 64 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 32 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 16 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 8 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 4 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 2 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 1 ? oneMapping : zeroMapping;
    }
    if (widthRemainder === 0) {
      continue;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    for (let j = 0; j < widthRemainder; j++) {
      dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
    }
  }
  return {
    srcPos,
    destPos
  };
}
var MIN_FONT_SIZE = 16;
var MAX_FONT_SIZE = 100;
var EXECUTION_TIME = 15;
var EXECUTION_STEPS = 10;
var MAX_SIZE_TO_COMPILE = 1e3;
var FULL_CHUNK_HEIGHT = 16;
function mirrorContextOperations(ctx, destCtx) {
  if (ctx._removeMirroring) {
    throw new Error("Context is already forwarding operations.");
  }
  ctx.__originalSave = ctx.save;
  ctx.__originalRestore = ctx.restore;
  ctx.__originalRotate = ctx.rotate;
  ctx.__originalScale = ctx.scale;
  ctx.__originalTranslate = ctx.translate;
  ctx.__originalTransform = ctx.transform;
  ctx.__originalSetTransform = ctx.setTransform;
  ctx.__originalResetTransform = ctx.resetTransform;
  ctx.__originalClip = ctx.clip;
  ctx.__originalMoveTo = ctx.moveTo;
  ctx.__originalLineTo = ctx.lineTo;
  ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
  ctx.__originalRect = ctx.rect;
  ctx.__originalClosePath = ctx.closePath;
  ctx.__originalBeginPath = ctx.beginPath;
  ctx._removeMirroring = () => {
    ctx.save = ctx.__originalSave;
    ctx.restore = ctx.__originalRestore;
    ctx.rotate = ctx.__originalRotate;
    ctx.scale = ctx.__originalScale;
    ctx.translate = ctx.__originalTranslate;
    ctx.transform = ctx.__originalTransform;
    ctx.setTransform = ctx.__originalSetTransform;
    ctx.resetTransform = ctx.__originalResetTransform;
    ctx.clip = ctx.__originalClip;
    ctx.moveTo = ctx.__originalMoveTo;
    ctx.lineTo = ctx.__originalLineTo;
    ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
    ctx.rect = ctx.__originalRect;
    ctx.closePath = ctx.__originalClosePath;
    ctx.beginPath = ctx.__originalBeginPath;
    delete ctx._removeMirroring;
  };
  ctx.save = function ctxSave() {
    destCtx.save();
    this.__originalSave();
  };
  ctx.restore = function ctxRestore() {
    destCtx.restore();
    this.__originalRestore();
  };
  ctx.translate = function ctxTranslate(x, y) {
    destCtx.translate(x, y);
    this.__originalTranslate(x, y);
  };
  ctx.scale = function ctxScale(x, y) {
    destCtx.scale(x, y);
    this.__originalScale(x, y);
  };
  ctx.transform = function ctxTransform(a, b, c, d, e, f) {
    destCtx.transform(a, b, c, d, e, f);
    this.__originalTransform(a, b, c, d, e, f);
  };
  ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
    destCtx.setTransform(a, b, c, d, e, f);
    this.__originalSetTransform(a, b, c, d, e, f);
  };
  ctx.resetTransform = function ctxResetTransform() {
    destCtx.resetTransform();
    this.__originalResetTransform();
  };
  ctx.rotate = function ctxRotate(angle) {
    destCtx.rotate(angle);
    this.__originalRotate(angle);
  };
  ctx.clip = function ctxRotate(rule) {
    destCtx.clip(rule);
    this.__originalClip(rule);
  };
  ctx.moveTo = function(x, y) {
    destCtx.moveTo(x, y);
    this.__originalMoveTo(x, y);
  };
  ctx.lineTo = function(x, y) {
    destCtx.lineTo(x, y);
    this.__originalLineTo(x, y);
  };
  ctx.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
    destCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    this.__originalBezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };
  ctx.rect = function(x, y, width, height) {
    destCtx.rect(x, y, width, height);
    this.__originalRect(x, y, width, height);
  };
  ctx.closePath = function() {
    destCtx.closePath();
    this.__originalClosePath();
  };
  ctx.beginPath = function() {
    destCtx.beginPath();
    this.__originalBeginPath();
  };
}
var CachedCanvases = class {
  constructor(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(id, width, height) {
    let canvasEntry;
    if (this.cache[id] !== void 0) {
      canvasEntry = this.cache[id];
      this.canvasFactory.reset(canvasEntry, width, height);
    } else {
      canvasEntry = this.canvasFactory.create(width, height);
      this.cache[id] = canvasEntry;
    }
    return canvasEntry;
  }
  delete(id) {
    delete this.cache[id];
  }
  clear() {
    for (const id in this.cache) {
      const canvasEntry = this.cache[id];
      this.canvasFactory.destroy(canvasEntry);
      delete this.cache[id];
    }
  }
};
function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
  const [a, b, c, d, tx, ty] = getCurrentTransform(ctx);
  if (b === 0 && c === 0) {
    const tlX = destX * a + tx;
    const rTlX = Math.round(tlX);
    const tlY = destY * d + ty;
    const rTlY = Math.round(tlY);
    const brX = (destX + destW) * a + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destY + destH) * d + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rWidth, rHeight];
  }
  if (a === 0 && d === 0) {
    const tlX = destY * c + tx;
    const rTlX = Math.round(tlX);
    const tlY = destX * b + ty;
    const rTlY = Math.round(tlY);
    const brX = (destY + destH) * c + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destX + destW) * b + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rHeight, rWidth];
  }
  ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
  const scaleX = Math.hypot(a, b);
  const scaleY = Math.hypot(c, d);
  return [scaleX * destW, scaleY * destH];
}
function compileType3Glyph(imgData) {
  const {
    width,
    height
  } = imgData;
  if (width > MAX_SIZE_TO_COMPILE || height > MAX_SIZE_TO_COMPILE) {
    return null;
  }
  const POINT_TO_PROCESS_LIMIT = 1e3;
  const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
  const width1 = width + 1;
  let points = new Uint8Array(width1 * (height + 1));
  let i, j, j0;
  const lineSize = width + 7 & ~7;
  let data = new Uint8Array(lineSize * height), pos = 0;
  for (const elem of imgData.data) {
    let mask = 128;
    while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
    }
  }
  let count = 0;
  pos = 0;
  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }
  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;
    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }
    let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }
      pos++;
    }
    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }
    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }
  pos = lineSize * (height - 1);
  j0 = i * width1;
  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }
  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }
  const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  const path = new Path2D();
  for (i = 0; count && i <= height; i++) {
    let p = i * width1;
    const end = p + width;
    while (p < end && !points[p]) {
      p++;
    }
    if (p === end) {
      continue;
    }
    path.moveTo(p % width1, i);
    const p0 = p;
    let type = points[p];
    do {
      const step = steps[type];
      do {
        p += step;
      } while (!points[p]);
      const pp = points[p];
      if (pp !== 5 && pp !== 10) {
        type = pp;
        points[p] = 0;
      } else {
        type = pp & 51 * type >> 4;
        points[p] &= type >> 2 | type << 2;
      }
      path.lineTo(p % width1, p / width1 | 0);
      if (!points[p]) {
        --count;
      }
    } while (p0 !== p);
    --i;
  }
  data = null;
  points = null;
  const drawOutline = function(c) {
    c.save();
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.fill(path);
    c.beginPath();
    c.restore();
  };
  return drawOutline;
}
var CanvasExtraState = class {
  constructor(width, height) {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = FONT_IDENTITY_MATRIX;
    this.leading = 0;
    this.x = 0;
    this.y = 0;
    this.lineX = 0;
    this.lineY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = TextRenderingMode.FILL;
    this.textRise = 0;
    this.fillColor = "#000000";
    this.strokeColor = "#000000";
    this.patternFill = false;
    this.patternStroke = false;
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.transferMaps = "none";
    this.startNewPathAndClipBox([0, 0, width, height]);
  }
  clone() {
    const clone = Object.create(this);
    clone.clipBox = this.clipBox.slice();
    return clone;
  }
  setCurrentPoint(x, y) {
    this.x = x;
    this.y = y;
  }
  updatePathMinMax(transform, x, y) {
    [x, y] = Util.applyTransform([x, y], transform);
    this.minX = Math.min(this.minX, x);
    this.minY = Math.min(this.minY, y);
    this.maxX = Math.max(this.maxX, x);
    this.maxY = Math.max(this.maxY, y);
  }
  updateRectMinMax(transform, rect) {
    const p1 = Util.applyTransform(rect, transform);
    const p2 = Util.applyTransform(rect.slice(2), transform);
    const p3 = Util.applyTransform([rect[0], rect[3]], transform);
    const p4 = Util.applyTransform([rect[2], rect[1]], transform);
    this.minX = Math.min(this.minX, p1[0], p2[0], p3[0], p4[0]);
    this.minY = Math.min(this.minY, p1[1], p2[1], p3[1], p4[1]);
    this.maxX = Math.max(this.maxX, p1[0], p2[0], p3[0], p4[0]);
    this.maxY = Math.max(this.maxY, p1[1], p2[1], p3[1], p4[1]);
  }
  updateScalingPathMinMax(transform, minMax) {
    Util.scaleMinMax(transform, minMax);
    this.minX = Math.min(this.minX, minMax[0]);
    this.minY = Math.min(this.minY, minMax[1]);
    this.maxX = Math.max(this.maxX, minMax[2]);
    this.maxY = Math.max(this.maxY, minMax[3]);
  }
  updateCurvePathMinMax(transform, x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    const box = Util.bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax);
    if (minMax) {
      return;
    }
    this.updateRectMinMax(transform, box);
  }
  getPathBoundingBox(pathType = PathType.FILL, transform = null) {
    const box = [this.minX, this.minY, this.maxX, this.maxY];
    if (pathType === PathType.STROKE) {
      if (!transform) {
        unreachable("Stroke bounding box must include transform.");
      }
      const scale = Util.singularValueDecompose2dScale(transform);
      const xStrokePad = scale[0] * this.lineWidth / 2;
      const yStrokePad = scale[1] * this.lineWidth / 2;
      box[0] -= xStrokePad;
      box[1] -= yStrokePad;
      box[2] += xStrokePad;
      box[3] += yStrokePad;
    }
    return box;
  }
  updateClipFromPath() {
    const intersect = Util.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === Infinity;
  }
  startNewPathAndClipBox(box) {
    this.clipBox = box;
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = 0;
    this.maxY = 0;
  }
  getClippedPathBoundingBox(pathType = PathType.FILL, transform = null) {
    return Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
  }
};
function putBinaryImageData(ctx, imgData) {
  if (imgData instanceof ImageData) {
    ctx.putImageData(imgData, 0, 0);
    return;
  }
  const height = imgData.height, width = imgData.width;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0, destPos;
  const src = imgData.data;
  const dest = chunkImgData.data;
  let i, j, thisChunkHeight, elemsInThisChunk;
  if (imgData.kind === util_ImageKind.GRAYSCALE_1BPP) {
    const srcLength = src.byteLength;
    const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
    const dest32DataLength = dest32.length;
    const fullSrcDiff = width + 7 >> 3;
    const white = 4294967295;
    const black = util_FeatureTest.isLittleEndian ? 4278190080 : 255;
    for (i = 0; i < totalChunks; i++) {
      thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      destPos = 0;
      for (j = 0; j < thisChunkHeight; j++) {
        const srcDiff = srcLength - srcPos;
        let k = 0;
        const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
        const kEndUnrolled = kEnd & ~7;
        let mask = 0;
        let srcByte = 0;
        for (; k < kEndUnrolled; k += 8) {
          srcByte = src[srcPos++];
          dest32[destPos++] = srcByte & 128 ? white : black;
          dest32[destPos++] = srcByte & 64 ? white : black;
          dest32[destPos++] = srcByte & 32 ? white : black;
          dest32[destPos++] = srcByte & 16 ? white : black;
          dest32[destPos++] = srcByte & 8 ? white : black;
          dest32[destPos++] = srcByte & 4 ? white : black;
          dest32[destPos++] = srcByte & 2 ? white : black;
          dest32[destPos++] = srcByte & 1 ? white : black;
        }
        for (; k < kEnd; k++) {
          if (mask === 0) {
            srcByte = src[srcPos++];
            mask = 128;
          }
          dest32[destPos++] = srcByte & mask ? white : black;
          mask >>= 1;
        }
      }
      while (destPos < dest32DataLength) {
        dest32[destPos++] = 0;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else if (imgData.kind === util_ImageKind.RGBA_32BPP) {
    j = 0;
    elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
    for (i = 0; i < fullChunks; i++) {
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      srcPos += elemsInThisChunk;
      ctx.putImageData(chunkImgData, 0, j);
      j += FULL_CHUNK_HEIGHT;
    }
    if (i < totalChunks) {
      elemsInThisChunk = width * partialChunkHeight * 4;
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      ctx.putImageData(chunkImgData, 0, j);
    }
  } else if (imgData.kind === util_ImageKind.RGB_24BPP) {
    thisChunkHeight = FULL_CHUNK_HEIGHT;
    elemsInThisChunk = width * thisChunkHeight;
    for (i = 0; i < totalChunks; i++) {
      if (i >= fullChunks) {
        thisChunkHeight = partialChunkHeight;
        elemsInThisChunk = width * thisChunkHeight;
      }
      destPos = 0;
      for (j = elemsInThisChunk; j--; ) {
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = 255;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else {
    throw new Error(`bad image kind: ${imgData.kind}`);
  }
}
function putBinaryImageMask(ctx, imgData) {
  if (imgData.bitmap) {
    ctx.drawImage(imgData.bitmap, 0, 0);
    return;
  }
  const height = imgData.height, width = imgData.width;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0;
  const src = imgData.data;
  const dest = chunkImgData.data;
  for (let i = 0; i < totalChunks; i++) {
    const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
    ({
      srcPos
    } = convertBlackAndWhiteToRGBA({
      src,
      srcPos,
      dest,
      width,
      height: thisChunkHeight,
      nonBlackColor: 0
    }));
    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
  }
}
function copyCtxState(sourceCtx, destCtx) {
  const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const property of properties) {
    if (sourceCtx[property] !== void 0) {
      destCtx[property] = sourceCtx[property];
    }
  }
  if (sourceCtx.setLineDash !== void 0) {
    destCtx.setLineDash(sourceCtx.getLineDash());
    destCtx.lineDashOffset = sourceCtx.lineDashOffset;
  }
}
function resetCtxToDefault(ctx) {
  ctx.strokeStyle = ctx.fillStyle = "#000000";
  ctx.fillRule = "nonzero";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.globalCompositeOperation = "source-over";
  ctx.font = "10px sans-serif";
  if (ctx.setLineDash !== void 0) {
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  }
  if (!isNodeJS) {
    const {
      filter
    } = ctx;
    if (filter !== "none" && filter !== "") {
      ctx.filter = "none";
    }
  }
}
function getImageSmoothingEnabled(transform, interpolate) {
  if (interpolate) {
    return true;
  }
  const scale = Util.singularValueDecompose2dScale(transform);
  scale[0] = Math.fround(scale[0]);
  scale[1] = Math.fround(scale[1]);
  const actualScale = Math.fround((globalThis.devicePixelRatio || 1) * PixelsPerInch.PDF_TO_CSS_UNITS);
  return scale[0] <= actualScale && scale[1] <= actualScale;
}
var LINE_CAP_STYLES = ["butt", "round", "square"];
var LINE_JOIN_STYLES = ["miter", "round", "bevel"];
var NORMAL_CLIP = {};
var EO_CLIP = {};
var _CanvasGraphics_instances, restoreInitialState_fn, drawFilter_fn, getScaledPath_fn;
var _CanvasGraphics = class _CanvasGraphics {
  constructor(canvasCtx, commonObjs, objs, canvasFactory, filterFactory, {
    optionalContentConfig,
    markedContentStack = null
  }, annotationCanvasMap, pageColors) {
    __privateAdd(this, _CanvasGraphics_instances);
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this.groupStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = markedContentStack || [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    this.cachedPatterns = /* @__PURE__ */ new Map();
    this.annotationCanvasMap = annotationCanvasMap;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = pageColors;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(data, fallback = null) {
    if (typeof data === "string") {
      return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
    }
    return fallback;
  }
  beginDrawing({
    transform,
    viewport,
    transparency = false,
    background = null
  }) {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    const savedFillStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = background || "#ffffff";
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.fillStyle = savedFillStyle;
    if (transparency) {
      const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height);
      this.compositeCtx = this.ctx;
      this.transparentCanvas = transparentCanvas.canvas;
      this.ctx = transparentCanvas.context;
      this.ctx.save();
      this.ctx.transform(...getCurrentTransform(this.compositeCtx));
    }
    this.ctx.save();
    resetCtxToDefault(this.ctx);
    if (transform) {
      this.ctx.transform(...transform);
      this.outputScaleX = transform[0];
      this.outputScaleY = transform[0];
    }
    this.ctx.transform(...viewport.transform);
    this.viewportScale = viewport.scale;
    this.baseTransform = getCurrentTransform(this.ctx);
  }
  executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
    const argsArray = operatorList.argsArray;
    const fnArray = operatorList.fnArray;
    let i = executionStartIdx || 0;
    const argsArrayLen = argsArray.length;
    if (argsArrayLen === i) {
      return i;
    }
    const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
    const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
    let steps = 0;
    const commonObjs = this.commonObjs;
    const objs = this.objs;
    let fnId;
    while (true) {
      if (stepper !== void 0 && i === stepper.nextBreakPoint) {
        stepper.breakIt(i, continueCallback);
        return i;
      }
      fnId = fnArray[i];
      if (fnId !== OPS.dependency) {
        this[fnId].apply(this, argsArray[i]);
      } else {
        for (const depObjId of argsArray[i]) {
          const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
          if (!objsPool.has(depObjId)) {
            objsPool.get(depObjId, continueCallback);
            return i;
          }
        }
      }
      i++;
      if (i === argsArrayLen) {
        return i;
      }
      if (chunkOperations && ++steps > EXECUTION_STEPS) {
        if (Date.now() > endTime) {
          continueCallback();
          return i;
        }
        steps = 0;
      }
    }
  }
  endDrawing() {
    __privateMethod(this, _CanvasGraphics_instances, restoreInitialState_fn).call(this);
    this.cachedCanvases.clear();
    this.cachedPatterns.clear();
    for (const cache of this._cachedBitmapsMap.values()) {
      for (const canvas of cache.values()) {
        if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
          canvas.width = canvas.height = 0;
        }
      }
      cache.clear();
    }
    this._cachedBitmapsMap.clear();
    __privateMethod(this, _CanvasGraphics_instances, drawFilter_fn).call(this);
  }
  _scaleImage(img, inverseTransform) {
    const width = img.width ?? img.displayWidth;
    const height = img.height ?? img.displayHeight;
    let widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
    let heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
    let paintWidth = width, paintHeight = height;
    let tmpCanvasId = "prescale1";
    let tmpCanvas, tmpCtx;
    while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
      let newWidth = paintWidth, newHeight = paintHeight;
      if (widthScale > 2 && paintWidth > 1) {
        newWidth = paintWidth >= 16384 ? Math.floor(paintWidth / 2) - 1 || 1 : Math.ceil(paintWidth / 2);
        widthScale /= paintWidth / newWidth;
      }
      if (heightScale > 2 && paintHeight > 1) {
        newHeight = paintHeight >= 16384 ? Math.floor(paintHeight / 2) - 1 || 1 : Math.ceil(paintHeight) / 2;
        heightScale /= paintHeight / newHeight;
      }
      tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
      tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, newWidth, newHeight);
      tmpCtx.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
      img = tmpCanvas.canvas;
      paintWidth = newWidth;
      paintHeight = newHeight;
      tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img,
      paintWidth,
      paintHeight
    };
  }
  _createMaskCanvas(img) {
    const ctx = this.ctx;
    const {
      width,
      height
    } = img;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    const currentTransform = getCurrentTransform(ctx);
    let cache, cacheKey, scaled, maskCanvas;
    if ((img.bitmap || img.data) && img.count > 1) {
      const mainKey = img.bitmap || img.data.buffer;
      cacheKey = JSON.stringify(isPatternFill ? currentTransform : [currentTransform.slice(0, 4), fillColor]);
      cache = this._cachedBitmapsMap.get(mainKey);
      if (!cache) {
        cache = /* @__PURE__ */ new Map();
        this._cachedBitmapsMap.set(mainKey, cache);
      }
      const cachedImage = cache.get(cacheKey);
      if (cachedImage && !isPatternFill) {
        const offsetX2 = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
        const offsetY2 = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
        return {
          canvas: cachedImage,
          offsetX: offsetX2,
          offsetY: offsetY2
        };
      }
      scaled = cachedImage;
    }
    if (!scaled) {
      maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      putBinaryImageMask(maskCanvas.context, img);
    }
    let maskToCanvas = Util.transform(currentTransform, [1 / width, 0, 0, -1 / height, 0, 0]);
    maskToCanvas = Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
    const [minX, minY, maxX, maxY] = Util.getAxialAlignedBoundingBox([0, 0, width, height], maskToCanvas);
    const drawnWidth = Math.round(maxX - minX) || 1;
    const drawnHeight = Math.round(maxY - minY) || 1;
    const fillCanvas = this.cachedCanvases.getCanvas("fillCanvas", drawnWidth, drawnHeight);
    const fillCtx = fillCanvas.context;
    const offsetX = minX;
    const offsetY = minY;
    fillCtx.translate(-offsetX, -offsetY);
    fillCtx.transform(...maskToCanvas);
    if (!scaled) {
      scaled = this._scaleImage(maskCanvas.canvas, getCurrentTransformInverse(fillCtx));
      scaled = scaled.img;
      if (cache && isPatternFill) {
        cache.set(cacheKey, scaled);
      }
    }
    fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(fillCtx), img.interpolate);
    drawImageAtIntegerCoords(fillCtx, scaled, 0, 0, scaled.width, scaled.height, 0, 0, width, height);
    fillCtx.globalCompositeOperation = "source-in";
    const inverse = Util.transform(getCurrentTransformInverse(fillCtx), [1, 0, 0, 1, -offsetX, -offsetY]);
    fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, PathType.FILL) : fillColor;
    fillCtx.fillRect(0, 0, width, height);
    if (cache && !isPatternFill) {
      this.cachedCanvases.delete("fillCanvas");
      cache.set(cacheKey, fillCanvas.canvas);
    }
    return {
      canvas: fillCanvas.canvas,
      offsetX: Math.round(offsetX),
      offsetY: Math.round(offsetY)
    };
  }
  setLineWidth(width) {
    if (width !== this.current.lineWidth) {
      this._cachedScaleForStroking[0] = -1;
    }
    this.current.lineWidth = width;
    this.ctx.lineWidth = width;
  }
  setLineCap(style) {
    this.ctx.lineCap = LINE_CAP_STYLES[style];
  }
  setLineJoin(style) {
    this.ctx.lineJoin = LINE_JOIN_STYLES[style];
  }
  setMiterLimit(limit) {
    this.ctx.miterLimit = limit;
  }
  setDash(dashArray, dashPhase) {
    const ctx = this.ctx;
    if (ctx.setLineDash !== void 0) {
      ctx.setLineDash(dashArray);
      ctx.lineDashOffset = dashPhase;
    }
  }
  setRenderingIntent(intent) {
  }
  setFlatness(flatness) {
  }
  setGState(states) {
    for (const [key, value] of states) {
      switch (key) {
        case "LW":
          this.setLineWidth(value);
          break;
        case "LC":
          this.setLineCap(value);
          break;
        case "LJ":
          this.setLineJoin(value);
          break;
        case "ML":
          this.setMiterLimit(value);
          break;
        case "D":
          this.setDash(value[0], value[1]);
          break;
        case "RI":
          this.setRenderingIntent(value);
          break;
        case "FL":
          this.setFlatness(value);
          break;
        case "Font":
          this.setFont(value[0], value[1]);
          break;
        case "CA":
          this.current.strokeAlpha = value;
          break;
        case "ca":
          this.current.fillAlpha = value;
          this.ctx.globalAlpha = value;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = value;
          break;
        case "SMask":
          this.current.activeSMask = value ? this.tempSMask : null;
          this.tempSMask = null;
          this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(value);
          break;
      }
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const inSMaskMode = this.inSMaskMode;
    if (this.current.activeSMask && !inSMaskMode) {
      this.beginSMaskMode();
    } else if (!this.current.activeSMask && inSMaskMode) {
      this.endSMaskMode();
    }
  }
  beginSMaskMode() {
    if (this.inSMaskMode) {
      throw new Error("beginSMaskMode called while already in smask mode");
    }
    const drawnWidth = this.ctx.canvas.width;
    const drawnHeight = this.ctx.canvas.height;
    const cacheId = "smaskGroupAt" + this.groupLevel;
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    this.suspendedCtx = this.ctx;
    this.ctx = scratchCanvas.context;
    const ctx = this.ctx;
    ctx.setTransform(...getCurrentTransform(this.suspendedCtx));
    copyCtxState(this.suspendedCtx, ctx);
    mirrorContextOperations(ctx, this.suspendedCtx);
    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) {
      throw new Error("endSMaskMode called while not in smask mode");
    }
    this.ctx._removeMirroring();
    copyCtxState(this.ctx, this.suspendedCtx);
    this.ctx = this.suspendedCtx;
    this.suspendedCtx = null;
  }
  compose(dirtyBox) {
    if (!this.current.activeSMask) {
      return;
    }
    if (!dirtyBox) {
      dirtyBox = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    } else {
      dirtyBox[0] = Math.floor(dirtyBox[0]);
      dirtyBox[1] = Math.floor(dirtyBox[1]);
      dirtyBox[2] = Math.ceil(dirtyBox[2]);
      dirtyBox[3] = Math.ceil(dirtyBox[3]);
    }
    const smask = this.current.activeSMask;
    const suspendedCtx = this.suspendedCtx;
    this.composeSMask(suspendedCtx, smask, this.ctx, dirtyBox);
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();
  }
  composeSMask(ctx, smask, layerCtx, layerBox) {
    const layerOffsetX = layerBox[0];
    const layerOffsetY = layerBox[1];
    const layerWidth = layerBox[2] - layerOffsetX;
    const layerHeight = layerBox[3] - layerOffsetY;
    if (layerWidth === 0 || layerHeight === 0) {
      return;
    }
    this.genericComposeSMask(smask.context, layerCtx, layerWidth, layerHeight, smask.subtype, smask.backdrop, smask.transferMap, layerOffsetX, layerOffsetY, smask.offsetX, smask.offsetY);
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(layerCtx.canvas, 0, 0);
    ctx.restore();
  }
  genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap, layerOffsetX, layerOffsetY, maskOffsetX, maskOffsetY) {
    let maskCanvas = maskCtx.canvas;
    let maskX = layerOffsetX - maskOffsetX;
    let maskY = layerOffsetY - maskOffsetY;
    if (backdrop) {
      const backdropRGB = Util.makeHexColor(...backdrop);
      if (maskX < 0 || maskY < 0 || maskX + width > maskCanvas.width || maskY + height > maskCanvas.height) {
        const canvas = this.cachedCanvases.getCanvas("maskExtension", width, height);
        const ctx = canvas.context;
        ctx.drawImage(maskCanvas, -maskX, -maskY);
        ctx.globalCompositeOperation = "destination-atop";
        ctx.fillStyle = backdropRGB;
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = "source-over";
        maskCanvas = canvas.canvas;
        maskX = maskY = 0;
      } else {
        maskCtx.save();
        maskCtx.globalAlpha = 1;
        maskCtx.setTransform(1, 0, 0, 1, 0, 0);
        const clip2 = new Path2D();
        clip2.rect(maskX, maskY, width, height);
        maskCtx.clip(clip2);
        maskCtx.globalCompositeOperation = "destination-atop";
        maskCtx.fillStyle = backdropRGB;
        maskCtx.fillRect(maskX, maskY, width, height);
        maskCtx.restore();
      }
    }
    layerCtx.save();
    layerCtx.globalAlpha = 1;
    layerCtx.setTransform(1, 0, 0, 1, 0, 0);
    if (subtype === "Alpha" && transferMap) {
      layerCtx.filter = this.filterFactory.addAlphaFilter(transferMap);
    } else if (subtype === "Luminosity") {
      layerCtx.filter = this.filterFactory.addLuminosityFilter(transferMap);
    }
    const clip = new Path2D();
    clip.rect(layerOffsetX, layerOffsetY, width, height);
    layerCtx.clip(clip);
    layerCtx.globalCompositeOperation = "destination-in";
    layerCtx.drawImage(maskCanvas, maskX, maskY, width, height, layerOffsetX, layerOffsetY, width, height);
    layerCtx.restore();
  }
  save() {
    if (this.inSMaskMode) {
      copyCtxState(this.ctx, this.suspendedCtx);
      this.suspendedCtx.save();
    } else {
      this.ctx.save();
    }
    const old = this.current;
    this.stateStack.push(old);
    this.current = old.clone();
  }
  restore() {
    if (this.stateStack.length === 0 && this.inSMaskMode) {
      this.endSMaskMode();
    }
    if (this.stateStack.length !== 0) {
      this.current = this.stateStack.pop();
      if (this.inSMaskMode) {
        this.suspendedCtx.restore();
        copyCtxState(this.suspendedCtx, this.ctx);
      } else {
        this.ctx.restore();
      }
      this.checkSMaskState();
      this.pendingClip = null;
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
    }
  }
  transform(a, b, c, d, e, f) {
    this.ctx.transform(a, b, c, d, e, f);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(ops, args, minMax) {
    const ctx = this.ctx;
    const current = this.current;
    let x = current.x, y = current.y;
    let startX, startY;
    const currentTransform = getCurrentTransform(ctx);
    const isScalingMatrix = currentTransform[0] === 0 && currentTransform[3] === 0 || currentTransform[1] === 0 && currentTransform[2] === 0;
    const minMaxForBezier = isScalingMatrix ? minMax.slice(0) : null;
    for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
      switch (ops[i] | 0) {
        case OPS.rectangle:
          x = args[j++];
          y = args[j++];
          const width = args[j++];
          const height = args[j++];
          const xw = x + width;
          const yh = y + height;
          ctx.moveTo(x, y);
          if (width === 0 || height === 0) {
            ctx.lineTo(xw, yh);
          } else {
            ctx.lineTo(xw, y);
            ctx.lineTo(xw, yh);
            ctx.lineTo(x, yh);
          }
          if (!isScalingMatrix) {
            current.updateRectMinMax(currentTransform, [x, y, xw, yh]);
          }
          ctx.closePath();
          break;
        case OPS.moveTo:
          x = args[j++];
          y = args[j++];
          ctx.moveTo(x, y);
          if (!isScalingMatrix) {
            current.updatePathMinMax(currentTransform, x, y);
          }
          break;
        case OPS.lineTo:
          x = args[j++];
          y = args[j++];
          ctx.lineTo(x, y);
          if (!isScalingMatrix) {
            current.updatePathMinMax(currentTransform, x, y);
          }
          break;
        case OPS.curveTo:
          startX = x;
          startY = y;
          x = args[j + 4];
          y = args[j + 5];
          ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
          current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], args[j + 2], args[j + 3], x, y, minMaxForBezier);
          j += 6;
          break;
        case OPS.curveTo2:
          startX = x;
          startY = y;
          ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
          current.updateCurvePathMinMax(currentTransform, startX, startY, x, y, args[j], args[j + 1], args[j + 2], args[j + 3], minMaxForBezier);
          x = args[j + 2];
          y = args[j + 3];
          j += 4;
          break;
        case OPS.curveTo3:
          startX = x;
          startY = y;
          x = args[j + 2];
          y = args[j + 3];
          ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
          current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], x, y, x, y, minMaxForBezier);
          j += 4;
          break;
        case OPS.closePath:
          ctx.closePath();
          break;
      }
    }
    if (isScalingMatrix) {
      current.updateScalingPathMinMax(currentTransform, minMaxForBezier);
    }
    current.setCurrentPoint(x, y);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(consumePath = true) {
    const ctx = this.ctx;
    const strokeColor = this.current.strokeColor;
    ctx.globalAlpha = this.current.strokeAlpha;
    if (this.contentVisible) {
      if (typeof strokeColor === "object" && (strokeColor == null ? void 0 : strokeColor.getPattern)) {
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.STROKE);
        this.rescaleAndStroke(false);
        ctx.restore();
      } else {
        this.rescaleAndStroke(true);
      }
    }
    if (consumePath) {
      this.consumePath(this.current.getClippedPathBoundingBox());
    }
    ctx.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath();
    this.stroke();
  }
  fill(consumePath = true) {
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    let needRestore = false;
    if (isPatternFill) {
      ctx.save();
      ctx.fillStyle = fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL);
      needRestore = true;
    }
    const intersect = this.current.getClippedPathBoundingBox();
    if (this.contentVisible && intersect !== null) {
      if (this.pendingEOFill) {
        ctx.fill("evenodd");
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }
    }
    if (needRestore) {
      ctx.restore();
    }
    if (consumePath) {
      this.consumePath(intersect);
    }
  }
  eoFill() {
    this.pendingEOFill = true;
    this.fill();
  }
  fillStroke() {
    this.fill(false);
    this.stroke(false);
    this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = true;
    this.fillStroke();
  }
  closeFillStroke() {
    this.closePath();
    this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = true;
    this.closePath();
    this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = NORMAL_CLIP;
  }
  eoClip() {
    this.pendingClip = EO_CLIP;
  }
  beginText() {
    this.current.textMatrix = IDENTITY_MATRIX;
    this.current.textMatrixScale = 1;
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
  }
  endText() {
    const paths = this.pendingTextPaths;
    const ctx = this.ctx;
    if (paths === void 0) {
      ctx.beginPath();
      return;
    }
    const newPath = new Path2D();
    const invTransf = ctx.getTransform().invertSelf();
    for (const {
      transform,
      x,
      y,
      fontSize,
      path
    } of paths) {
      newPath.addPath(path, new DOMMatrix(transform).preMultiplySelf(invTransf).translate(x, y).scale(fontSize, -fontSize));
    }
    ctx.clip(newPath);
    ctx.beginPath();
    delete this.pendingTextPaths;
  }
  setCharSpacing(spacing) {
    this.current.charSpacing = spacing;
  }
  setWordSpacing(spacing) {
    this.current.wordSpacing = spacing;
  }
  setHScale(scale) {
    this.current.textHScale = scale / 100;
  }
  setLeading(leading) {
    this.current.leading = -leading;
  }
  setFont(fontRefName, size) {
    var _a2;
    const fontObj = this.commonObjs.get(fontRefName);
    const current = this.current;
    if (!fontObj) {
      throw new Error(`Can't find font for ${fontRefName}`);
    }
    current.fontMatrix = fontObj.fontMatrix || FONT_IDENTITY_MATRIX;
    if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
      warn("Invalid font matrix for font " + fontRefName);
    }
    if (size < 0) {
      size = -size;
      current.fontDirection = -1;
    } else {
      current.fontDirection = 1;
    }
    this.current.font = fontObj;
    this.current.fontSize = size;
    if (fontObj.isType3Font) {
      return;
    }
    const name = fontObj.loadedName || "sans-serif";
    const typeface = ((_a2 = fontObj.systemFontInfo) == null ? void 0 : _a2.css) || `"${name}", ${fontObj.fallbackName}`;
    let bold = "normal";
    if (fontObj.black) {
      bold = "900";
    } else if (fontObj.bold) {
      bold = "bold";
    }
    const italic = fontObj.italic ? "italic" : "normal";
    let browserFontSize = size;
    if (size < MIN_FONT_SIZE) {
      browserFontSize = MIN_FONT_SIZE;
    } else if (size > MAX_FONT_SIZE) {
      browserFontSize = MAX_FONT_SIZE;
    }
    this.current.fontSizeScale = size / browserFontSize;
    this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
  }
  setTextRenderingMode(mode) {
    this.current.textRenderingMode = mode;
  }
  setTextRise(rise) {
    this.current.textRise = rise;
  }
  moveText(x, y) {
    this.current.x = this.current.lineX += x;
    this.current.y = this.current.lineY += y;
  }
  setLeadingMoveText(x, y) {
    this.setLeading(-y);
    this.moveText(x, y);
  }
  setTextMatrix(a, b, c, d, e, f) {
    this.current.textMatrix = [a, b, c, d, e, f];
    this.current.textMatrixScale = Math.hypot(a, b);
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(character, x, y, patternFillTransform, patternStrokeTransform) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const textRenderingMode = current.textRenderingMode;
    const fontSize = current.fontSize / current.fontSizeScale;
    const fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
    const isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
    const patternFill = current.patternFill && !font.missingFile;
    const patternStroke = current.patternStroke && !font.missingFile;
    let path;
    if (font.disableFontFace || isAddToPathSet || patternFill || patternStroke) {
      path = font.getPathGenerator(this.commonObjs, character);
    }
    if (font.disableFontFace || patternFill || patternStroke) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(fontSize, -fontSize);
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (patternFillTransform) {
          const currentTransform = ctx.getTransform();
          ctx.setTransform(...patternFillTransform);
          ctx.fill(__privateMethod(this, _CanvasGraphics_instances, getScaledPath_fn).call(this, path, currentTransform, patternFillTransform));
        } else {
          ctx.fill(path);
        }
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (patternStrokeTransform) {
          const currentTransform = ctx.getTransform();
          ctx.setTransform(...patternStrokeTransform);
          ctx.stroke(__privateMethod(this, _CanvasGraphics_instances, getScaledPath_fn).call(this, path, currentTransform, patternStrokeTransform));
        } else {
          ctx.lineWidth /= fontSize;
          ctx.stroke(path);
        }
      }
      ctx.restore();
    } else {
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fillText(character, x, y);
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.strokeText(character, x, y);
      }
    }
    if (isAddToPathSet) {
      const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
      paths.push({
        transform: getCurrentTransform(ctx),
        x,
        y,
        fontSize,
        path
      });
    }
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: ctx
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    ctx.scale(1.5, 1);
    ctx.fillText("I", 0, 10);
    const data = ctx.getImageData(0, 0, 10, 10).data;
    let enabled = false;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0 && data[i] < 255) {
        enabled = true;
        break;
      }
    }
    return shadow(this, "isFontSubpixelAAEnabled", enabled);
  }
  showText(glyphs) {
    const current = this.current;
    const font = current.font;
    if (font.isType3Font) {
      return this.showType3Text(glyphs);
    }
    const fontSize = current.fontSize;
    if (fontSize === 0) {
      return void 0;
    }
    const ctx = this.ctx;
    const fontSizeScale = current.fontSizeScale;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const fontDirection = current.fontDirection;
    const textHScale = current.textHScale * fontDirection;
    const glyphsLength = glyphs.length;
    const vertical = font.vertical;
    const spacingDir = vertical ? 1 : -1;
    const defaultVMetrics = font.defaultVMetrics;
    const widthAdvanceScale = fontSize * current.fontMatrix[0];
    const simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
    ctx.save();
    ctx.transform(...current.textMatrix);
    ctx.translate(current.x, current.y + current.textRise);
    if (fontDirection > 0) {
      ctx.scale(textHScale, -1);
    } else {
      ctx.scale(textHScale, 1);
    }
    let patternFillTransform, patternStrokeTransform;
    if (current.patternFill) {
      ctx.save();
      const pattern = current.fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL);
      patternFillTransform = getCurrentTransform(ctx);
      ctx.restore();
      ctx.fillStyle = pattern;
    }
    if (current.patternStroke) {
      ctx.save();
      const pattern = current.strokeColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.STROKE);
      patternStrokeTransform = getCurrentTransform(ctx);
      ctx.restore();
      ctx.strokeStyle = pattern;
    }
    let lineWidth = current.lineWidth;
    const scale = current.textMatrixScale;
    if (scale === 0 || lineWidth === 0) {
      const fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        lineWidth = this.getSinglePixelWidth();
      }
    } else {
      lineWidth /= scale;
    }
    if (fontSizeScale !== 1) {
      ctx.scale(fontSizeScale, fontSizeScale);
      lineWidth /= fontSizeScale;
    }
    ctx.lineWidth = lineWidth;
    if (font.isInvalidPDFjsFont) {
      const chars = [];
      let width = 0;
      for (const glyph of glyphs) {
        chars.push(glyph.unicode);
        width += glyph.width;
      }
      ctx.fillText(chars.join(""), 0, 0);
      current.x += width * widthAdvanceScale * textHScale;
      ctx.restore();
      this.compose();
      return void 0;
    }
    let x = 0, i;
    for (i = 0; i < glyphsLength; ++i) {
      const glyph = glyphs[i];
      if (typeof glyph === "number") {
        x += spacingDir * glyph * fontSize / 1e3;
        continue;
      }
      let restoreNeeded = false;
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const character = glyph.fontChar;
      const accent = glyph.accent;
      let scaledX, scaledY;
      let width = glyph.width;
      if (vertical) {
        const vmetric = glyph.vmetric || defaultVMetrics;
        const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
        const vy = vmetric[2] * widthAdvanceScale;
        width = vmetric ? -vmetric[0] : width;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
      } else {
        scaledX = x / fontSizeScale;
        scaledY = 0;
      }
      if (font.remeasure && width > 0) {
        const measuredWidth = ctx.measureText(character).width * 1e3 / fontSize * fontSizeScale;
        if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
          const characterScaleX = width / measuredWidth;
          restoreNeeded = true;
          ctx.save();
          ctx.scale(characterScaleX, 1);
          scaledX /= characterScaleX;
        } else if (width !== measuredWidth) {
          scaledX += (width - measuredWidth) / 2e3 * fontSize / fontSizeScale;
        }
      }
      if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
        if (simpleFillText && !accent) {
          ctx.fillText(character, scaledX, scaledY);
        } else {
          this.paintChar(character, scaledX, scaledY, patternFillTransform, patternStrokeTransform);
          if (accent) {
            const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
            const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
            this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternFillTransform, patternStrokeTransform);
          }
        }
      }
      const charWidth = vertical ? width * widthAdvanceScale - spacing * fontDirection : width * widthAdvanceScale + spacing * fontDirection;
      x += charWidth;
      if (restoreNeeded) {
        ctx.restore();
      }
    }
    if (vertical) {
      current.y -= x;
    } else {
      current.x += x * textHScale;
    }
    ctx.restore();
    this.compose();
    return void 0;
  }
  showType3Text(glyphs) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const fontSize = current.fontSize;
    const fontDirection = current.fontDirection;
    const spacingDir = font.vertical ? 1 : -1;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const textHScale = current.textHScale * fontDirection;
    const fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
    const glyphsLength = glyphs.length;
    const isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
    let i, glyph, width, spacingLength;
    if (isTextInvisible || fontSize === 0) {
      return;
    }
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
    ctx.save();
    ctx.transform(...current.textMatrix);
    ctx.translate(current.x, current.y);
    ctx.scale(textHScale, fontDirection);
    for (i = 0; i < glyphsLength; ++i) {
      glyph = glyphs[i];
      if (typeof glyph === "number") {
        spacingLength = spacingDir * glyph * fontSize / 1e3;
        this.ctx.translate(spacingLength, 0);
        current.x += spacingLength * textHScale;
        continue;
      }
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const operatorList = font.charProcOperatorList[glyph.operatorListId];
      if (!operatorList) {
        warn(`Type3 character "${glyph.operatorListId}" is not available.`);
        continue;
      }
      if (this.contentVisible) {
        this.processingType3 = glyph;
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform(...fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();
      }
      const transformed = Util.applyTransform([glyph.width, 0], fontMatrix);
      width = transformed[0] * fontSize + spacing;
      ctx.translate(width, 0);
      current.x += width * textHScale;
    }
    ctx.restore();
    this.processingType3 = null;
  }
  setCharWidth(xWidth, yWidth) {
  }
  setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
    this.ctx.rect(llx, lly, urx - llx, ury - lly);
    this.ctx.clip();
    this.endPath();
  }
  getColorN_Pattern(IR) {
    let pattern;
    if (IR[0] === "TilingPattern") {
      const color = IR[1];
      const baseTransform = this.baseTransform || getCurrentTransform(this.ctx);
      const canvasGraphicsFactory = {
        createCanvasGraphics: (ctx) => new _CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
    } else {
      pattern = this._getPattern(IR[1], IR[2]);
    }
    return pattern;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
    this.current.patternStroke = true;
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments);
    this.current.patternFill = true;
  }
  setStrokeRGBColor(r, g, b) {
    this.ctx.strokeStyle = this.current.strokeColor = Util.makeHexColor(r, g, b);
    this.current.patternStroke = false;
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
    this.current.patternStroke = false;
  }
  setFillRGBColor(r, g, b) {
    this.ctx.fillStyle = this.current.fillColor = Util.makeHexColor(r, g, b);
    this.current.patternFill = false;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent";
    this.current.patternFill = false;
  }
  _getPattern(objId, matrix = null) {
    let pattern;
    if (this.cachedPatterns.has(objId)) {
      pattern = this.cachedPatterns.get(objId);
    } else {
      pattern = getShadingPattern(this.getObject(objId));
      this.cachedPatterns.set(objId, pattern);
    }
    if (matrix) {
      pattern.matrix = matrix;
    }
    return pattern;
  }
  shadingFill(objId) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    this.save();
    const pattern = this._getPattern(objId);
    ctx.fillStyle = pattern.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.SHADING);
    const inv = getCurrentTransformInverse(ctx);
    if (inv) {
      const {
        width,
        height
      } = ctx.canvas;
      const [x0, y0, x1, y1] = Util.getAxialAlignedBoundingBox([0, 0, width, height], inv);
      this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    } else {
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    }
    this.compose(this.current.getClippedPathBoundingBox());
    this.restore();
  }
  beginInlineImage() {
    unreachable("Should not call beginInlineImage");
  }
  beginImageData() {
    unreachable("Should not call beginImageData");
  }
  paintFormXObjectBegin(matrix, bbox) {
    if (!this.contentVisible) {
      return;
    }
    this.save();
    this.baseTransformStack.push(this.baseTransform);
    if (matrix) {
      this.transform(...matrix);
    }
    this.baseTransform = getCurrentTransform(this.ctx);
    if (bbox) {
      const width = bbox[2] - bbox[0];
      const height = bbox[3] - bbox[1];
      this.ctx.rect(bbox[0], bbox[1], width, height);
      this.current.updateRectMinMax(getCurrentTransform(this.ctx), bbox);
      this.clip();
      this.endPath();
    }
  }
  paintFormXObjectEnd() {
    if (!this.contentVisible) {
      return;
    }
    this.restore();
    this.baseTransform = this.baseTransformStack.pop();
  }
  beginGroup(group) {
    if (!this.contentVisible) {
      return;
    }
    this.save();
    if (this.inSMaskMode) {
      this.endSMaskMode();
      this.current.activeSMask = null;
    }
    const currentCtx = this.ctx;
    if (!group.isolated) {
      info("TODO: Support non-isolated groups.");
    }
    if (group.knockout) {
      warn("Knockout groups not supported.");
    }
    const currentTransform = getCurrentTransform(currentCtx);
    if (group.matrix) {
      currentCtx.transform(...group.matrix);
    }
    if (!group.bbox) {
      throw new Error("Bounding box is required.");
    }
    let bounds = Util.getAxialAlignedBoundingBox(group.bbox, getCurrentTransform(currentCtx));
    const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
    bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
    const offsetX = Math.floor(bounds[0]);
    const offsetY = Math.floor(bounds[1]);
    const drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
    const drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
    this.current.startNewPathAndClipBox([0, 0, drawnWidth, drawnHeight]);
    let cacheId = "groupAt" + this.groupLevel;
    if (group.smask) {
      cacheId += "_smask_" + this.smaskCounter++ % 2;
    }
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    const groupCtx = scratchCanvas.context;
    groupCtx.translate(-offsetX, -offsetY);
    groupCtx.transform(...currentTransform);
    if (group.smask) {
      this.smaskStack.push({
        canvas: scratchCanvas.canvas,
        context: groupCtx,
        offsetX,
        offsetY,
        subtype: group.smask.subtype,
        backdrop: group.smask.backdrop,
        transferMap: group.smask.transferMap || null,
        startTransformInverse: null
      });
    } else {
      currentCtx.setTransform(1, 0, 0, 1, 0, 0);
      currentCtx.translate(offsetX, offsetY);
      currentCtx.save();
    }
    copyCtxState(currentCtx, groupCtx);
    this.ctx = groupCtx;
    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
    this.groupStack.push(currentCtx);
    this.groupLevel++;
  }
  endGroup(group) {
    if (!this.contentVisible) {
      return;
    }
    this.groupLevel--;
    const groupCtx = this.ctx;
    const ctx = this.groupStack.pop();
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    if (group.smask) {
      this.tempSMask = this.smaskStack.pop();
      this.restore();
    } else {
      this.ctx.restore();
      const currentMtx = getCurrentTransform(this.ctx);
      this.restore();
      this.ctx.save();
      this.ctx.setTransform(...currentMtx);
      const dirtyBox = Util.getAxialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx);
      this.ctx.drawImage(groupCtx.canvas, 0, 0);
      this.ctx.restore();
      this.compose(dirtyBox);
    }
  }
  beginAnnotation(id, rect, transform, matrix, hasOwnCanvas) {
    __privateMethod(this, _CanvasGraphics_instances, restoreInitialState_fn).call(this);
    resetCtxToDefault(this.ctx);
    this.ctx.save();
    this.save();
    if (this.baseTransform) {
      this.ctx.setTransform(...this.baseTransform);
    }
    if (rect) {
      const width = rect[2] - rect[0];
      const height = rect[3] - rect[1];
      if (hasOwnCanvas && this.annotationCanvasMap) {
        transform = transform.slice();
        transform[4] -= rect[0];
        transform[5] -= rect[1];
        rect = rect.slice();
        rect[0] = rect[1] = 0;
        rect[2] = width;
        rect[3] = height;
        const [scaleX, scaleY] = Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx));
        const {
          viewportScale
        } = this;
        const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
        const canvasHeight = Math.ceil(height * this.outputScaleY * viewportScale);
        this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
        const {
          canvas,
          context
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(id, canvas);
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = context;
        this.ctx.save();
        this.ctx.setTransform(scaleX, 0, 0, -scaleY, 0, height * scaleY);
        resetCtxToDefault(this.ctx);
      } else {
        resetCtxToDefault(this.ctx);
        this.endPath();
        this.ctx.rect(rect[0], rect[1], width, height);
        this.ctx.clip();
        this.ctx.beginPath();
      }
    }
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.transform(...transform);
    this.transform(...matrix);
  }
  endAnnotation() {
    if (this.annotationCanvas) {
      this.ctx.restore();
      __privateMethod(this, _CanvasGraphics_instances, drawFilter_fn).call(this);
      this.ctx = this.annotationCanvas.savedCtx;
      delete this.annotationCanvas.savedCtx;
      delete this.annotationCanvas;
    }
  }
  paintImageMaskXObject(img) {
    if (!this.contentVisible) {
      return;
    }
    const count = img.count;
    img = this.getObject(img.data, img);
    img.count = count;
    const ctx = this.ctx;
    const glyph = this.processingType3;
    if (glyph) {
      if (glyph.compiled === void 0) {
        glyph.compiled = compileType3Glyph(img);
      }
      if (glyph.compiled) {
        glyph.compiled(ctx);
        return;
      }
    }
    const mask = this._createMaskCanvas(img);
    const maskCanvas = mask.canvas;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectRepeat(img, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    img = this.getObject(img.data, img);
    const ctx = this.ctx;
    ctx.save();
    const currentTransform = getCurrentTransform(ctx);
    ctx.transform(scaleX, skewX, skewY, scaleY, 0, 0);
    const mask = this._createMaskCanvas(img);
    ctx.setTransform(1, 0, 0, 1, mask.offsetX - currentTransform[4], mask.offsetY - currentTransform[5]);
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      const trans = Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
      const [x, y] = Util.applyTransform([0, 0], trans);
      ctx.drawImage(mask.canvas, x, y);
    }
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectGroup(images) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    for (const image of images) {
      const {
        data,
        width,
        height,
        transform
      } = image;
      const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      const maskCtx = maskCanvas.context;
      maskCtx.save();
      const img = this.getObject(data, image);
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = "source-in";
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, getCurrentTransformInverse(ctx), PathType.FILL) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      ctx.save();
      ctx.transform(...transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintImageXObject(objId) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(imgData);
  }
  paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const map = [];
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      map.push({
        transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
        x: 0,
        y: 0,
        w: width,
        h: height
      });
    }
    this.paintInlineImageXObjectGroup(imgData, map);
  }
  applyTransferMapsToCanvas(ctx) {
    if (this.current.transferMaps !== "none") {
      ctx.filter = this.current.transferMaps;
      ctx.drawImage(ctx.canvas, 0, 0);
      ctx.filter = "none";
    }
    return ctx.canvas;
  }
  applyTransferMapsToBitmap(imgData) {
    if (this.current.transferMaps === "none") {
      return imgData.bitmap;
    }
    const {
      bitmap,
      width,
      height
    } = imgData;
    const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
    const tmpCtx = tmpCanvas.context;
    tmpCtx.filter = this.current.transferMaps;
    tmpCtx.drawImage(bitmap, 0, 0);
    tmpCtx.filter = "none";
    return tmpCanvas.canvas;
  }
  paintInlineImageXObject(imgData) {
    if (!this.contentVisible) {
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const ctx = this.ctx;
    this.save();
    if (!isNodeJS) {
      const {
        filter
      } = ctx;
      if (filter !== "none" && filter !== "") {
        ctx.filter = "none";
      }
    }
    ctx.scale(1 / width, -1 / height);
    let imgToPaint;
    if (imgData.bitmap) {
      imgToPaint = this.applyTransferMapsToBitmap(imgData);
    } else if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
      imgToPaint = imgData;
    } else {
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    const scaled = this._scaleImage(imgToPaint, getCurrentTransformInverse(ctx));
    ctx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(ctx), imgData.interpolate);
    drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -height, width, height);
    this.compose();
    this.restore();
  }
  paintInlineImageXObjectGroup(imgData, map) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    let imgToPaint;
    if (imgData.bitmap) {
      imgToPaint = imgData.bitmap;
    } else {
      const w = imgData.width;
      const h = imgData.height;
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    for (const entry of map) {
      ctx.save();
      ctx.transform(...entry.transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, imgToPaint, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintSolidColorImageMask() {
    if (!this.contentVisible) {
      return;
    }
    this.ctx.fillRect(0, 0, 1, 1);
    this.compose();
  }
  markPoint(tag) {
  }
  markPointProps(tag, properties) {
  }
  beginMarkedContent(tag) {
    this.markedContentStack.push({
      visible: true
    });
  }
  beginMarkedContentProps(tag, properties) {
    if (tag === "OC") {
      this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(properties)
      });
    } else {
      this.markedContentStack.push({
        visible: true
      });
    }
    this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop();
    this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(clipBox) {
    const isEmpty = this.current.isEmptyClip();
    if (this.pendingClip) {
      this.current.updateClipFromPath();
    }
    if (!this.pendingClip) {
      this.compose(clipBox);
    }
    const ctx = this.ctx;
    if (this.pendingClip) {
      if (!isEmpty) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip("evenodd");
        } else {
          ctx.clip();
        }
      }
      this.pendingClip = null;
    }
    this.current.startNewPathAndClipBox(this.current.clipBox);
    ctx.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const m = getCurrentTransform(this.ctx);
      if (m[1] === 0 && m[2] === 0) {
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
      } else {
        const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
        const normX = Math.hypot(m[0], m[2]);
        const normY = Math.hypot(m[1], m[3]);
        this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth
      } = this.current;
      const {
        a,
        b,
        c,
        d
      } = this.ctx.getTransform();
      let scaleX, scaleY;
      if (b === 0 && c === 0) {
        const normX = Math.abs(a);
        const normY = Math.abs(d);
        if (normX === normY) {
          if (lineWidth === 0) {
            scaleX = scaleY = 1 / normX;
          } else {
            const scaledLineWidth = normX * lineWidth;
            scaleX = scaleY = scaledLineWidth < 1 ? 1 / scaledLineWidth : 1;
          }
        } else if (lineWidth === 0) {
          scaleX = 1 / normX;
          scaleY = 1 / normY;
        } else {
          const scaledXLineWidth = normX * lineWidth;
          const scaledYLineWidth = normY * lineWidth;
          scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
          scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
        }
      } else {
        const absDet = Math.abs(a * d - b * c);
        const normX = Math.hypot(a, b);
        const normY = Math.hypot(c, d);
        if (lineWidth === 0) {
          scaleX = normY / absDet;
          scaleY = normX / absDet;
        } else {
          const baseArea = lineWidth * absDet;
          scaleX = normY > baseArea ? normY / baseArea : 1;
          scaleY = normX > baseArea ? normX / baseArea : 1;
        }
      }
      this._cachedScaleForStroking[0] = scaleX;
      this._cachedScaleForStroking[1] = scaleY;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(saveRestore) {
    const {
      ctx
    } = this;
    const {
      lineWidth
    } = this.current;
    const [scaleX, scaleY] = this.getScaleForStroking();
    ctx.lineWidth = lineWidth || 1;
    if (scaleX === 1 && scaleY === 1) {
      ctx.stroke();
      return;
    }
    const dashes = ctx.getLineDash();
    if (saveRestore) {
      ctx.save();
    }
    ctx.scale(scaleX, scaleY);
    if (dashes.length > 0) {
      const scale = Math.max(scaleX, scaleY);
      ctx.setLineDash(dashes.map((x) => x / scale));
      ctx.lineDashOffset /= scale;
    }
    ctx.stroke();
    if (saveRestore) {
      ctx.restore();
    }
  }
  isContentVisible() {
    for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
      if (!this.markedContentStack[i].visible) {
        return false;
      }
    }
    return true;
  }
};
_CanvasGraphics_instances = new WeakSet();
restoreInitialState_fn = function() {
  while (this.stateStack.length || this.inSMaskMode) {
    this.restore();
  }
  this.current.activeSMask = null;
  this.ctx.restore();
  if (this.transparentCanvas) {
    this.ctx = this.compositeCtx;
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.drawImage(this.transparentCanvas, 0, 0);
    this.ctx.restore();
    this.transparentCanvas = null;
  }
};
drawFilter_fn = function() {
  if (this.pageColors) {
    const hcmFilterId = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (hcmFilterId !== "none") {
      const savedFilter = this.ctx.filter;
      this.ctx.filter = hcmFilterId;
      this.ctx.drawImage(this.ctx.canvas, 0, 0);
      this.ctx.filter = savedFilter;
    }
  }
};
getScaledPath_fn = function(path, currentTransform, transform) {
  const newPath = new Path2D();
  newPath.addPath(path, new DOMMatrix(transform).invertSelf().multiplySelf(currentTransform));
  return newPath;
};
var CanvasGraphics = _CanvasGraphics;
for (const op in OPS) {
  if (CanvasGraphics.prototype[op] !== void 0) {
    CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
  }
}
var _port, _src;
var GlobalWorkerOptions = class {
  static get workerPort() {
    return __privateGet(this, _port);
  }
  static set workerPort(val) {
    if (!(typeof Worker !== "undefined" && val instanceof Worker) && val !== null) {
      throw new Error("Invalid `workerPort` type.");
    }
    __privateSet(this, _port, val);
  }
  static get workerSrc() {
    return __privateGet(this, _src);
  }
  static set workerSrc(val) {
    if (typeof val !== "string") {
      throw new Error("Invalid `workerSrc` type.");
    }
    __privateSet(this, _src, val);
  }
};
_port = new WeakMap();
_src = new WeakMap();
__privateAdd(GlobalWorkerOptions, _port, null);
__privateAdd(GlobalWorkerOptions, _src, "");
var _metadataMap, _data;
var Metadata = class {
  constructor({
    parsedData,
    rawData
  }) {
    __privateAdd(this, _metadataMap);
    __privateAdd(this, _data);
    __privateSet(this, _metadataMap, parsedData);
    __privateSet(this, _data, rawData);
  }
  getRaw() {
    return __privateGet(this, _data);
  }
  get(name) {
    return __privateGet(this, _metadataMap).get(name) ?? null;
  }
  getAll() {
    return objectFromMap(__privateGet(this, _metadataMap));
  }
  has(name) {
    return __privateGet(this, _metadataMap).has(name);
  }
};
_metadataMap = new WeakMap();
_data = new WeakMap();
var INTERNAL = Symbol("INTERNAL");
var _isDisplay, _isPrint, _userSet, _visible;
var OptionalContentGroup = class {
  constructor(renderingIntent, {
    name,
    intent,
    usage,
    rbGroups
  }) {
    __privateAdd(this, _isDisplay, false);
    __privateAdd(this, _isPrint, false);
    __privateAdd(this, _userSet, false);
    __privateAdd(this, _visible, true);
    __privateSet(this, _isDisplay, !!(renderingIntent & RenderingIntentFlag.DISPLAY));
    __privateSet(this, _isPrint, !!(renderingIntent & RenderingIntentFlag.PRINT));
    this.name = name;
    this.intent = intent;
    this.usage = usage;
    this.rbGroups = rbGroups;
  }
  get visible() {
    if (__privateGet(this, _userSet)) {
      return __privateGet(this, _visible);
    }
    if (!__privateGet(this, _visible)) {
      return false;
    }
    const {
      print,
      view
    } = this.usage;
    if (__privateGet(this, _isDisplay)) {
      return (view == null ? void 0 : view.viewState) !== "OFF";
    } else if (__privateGet(this, _isPrint)) {
      return (print == null ? void 0 : print.printState) !== "OFF";
    }
    return true;
  }
  _setVisible(internal, visible, userSet = false) {
    if (internal !== INTERNAL) {
      unreachable("Internal method `_setVisible` called.");
    }
    __privateSet(this, _userSet, userSet);
    __privateSet(this, _visible, visible);
  }
};
_isDisplay = new WeakMap();
_isPrint = new WeakMap();
_userSet = new WeakMap();
_visible = new WeakMap();
var _cachedGetHash, _groups, _initialHash, _order, _OptionalContentConfig_instances, evaluateVisibilityExpression_fn;
var OptionalContentConfig = class {
  constructor(data, renderingIntent = RenderingIntentFlag.DISPLAY) {
    __privateAdd(this, _OptionalContentConfig_instances);
    __privateAdd(this, _cachedGetHash, null);
    __privateAdd(this, _groups, /* @__PURE__ */ new Map());
    __privateAdd(this, _initialHash, null);
    __privateAdd(this, _order, null);
    this.renderingIntent = renderingIntent;
    this.name = null;
    this.creator = null;
    if (data === null) {
      return;
    }
    this.name = data.name;
    this.creator = data.creator;
    __privateSet(this, _order, data.order);
    for (const group of data.groups) {
      __privateGet(this, _groups).set(group.id, new OptionalContentGroup(renderingIntent, group));
    }
    if (data.baseState === "OFF") {
      for (const group of __privateGet(this, _groups).values()) {
        group._setVisible(INTERNAL, false);
      }
    }
    for (const on of data.on) {
      __privateGet(this, _groups).get(on)._setVisible(INTERNAL, true);
    }
    for (const off of data.off) {
      __privateGet(this, _groups).get(off)._setVisible(INTERNAL, false);
    }
    __privateSet(this, _initialHash, this.getHash());
  }
  isVisible(group) {
    if (__privateGet(this, _groups).size === 0) {
      return true;
    }
    if (!group) {
      info("Optional content group not defined.");
      return true;
    }
    if (group.type === "OCG") {
      if (!__privateGet(this, _groups).has(group.id)) {
        warn(`Optional content group not found: ${group.id}`);
        return true;
      }
      return __privateGet(this, _groups).get(group.id).visible;
    } else if (group.type === "OCMD") {
      if (group.expression) {
        return __privateMethod(this, _OptionalContentConfig_instances, evaluateVisibilityExpression_fn).call(this, group.expression);
      }
      if (!group.policy || group.policy === "AnyOn") {
        for (const id of group.ids) {
          if (!__privateGet(this, _groups).has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (__privateGet(this, _groups).get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOn") {
        for (const id of group.ids) {
          if (!__privateGet(this, _groups).has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!__privateGet(this, _groups).get(id).visible) {
            return false;
          }
        }
        return true;
      } else if (group.policy === "AnyOff") {
        for (const id of group.ids) {
          if (!__privateGet(this, _groups).has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!__privateGet(this, _groups).get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOff") {
        for (const id of group.ids) {
          if (!__privateGet(this, _groups).has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (__privateGet(this, _groups).get(id).visible) {
            return false;
          }
        }
        return true;
      }
      warn(`Unknown optional content policy ${group.policy}.`);
      return true;
    }
    warn(`Unknown group type ${group.type}.`);
    return true;
  }
  setVisibility(id, visible = true, preserveRB = true) {
    var _a2;
    const group = __privateGet(this, _groups).get(id);
    if (!group) {
      warn(`Optional content group not found: ${id}`);
      return;
    }
    if (preserveRB && visible && group.rbGroups.length) {
      for (const rbGroup of group.rbGroups) {
        for (const otherId of rbGroup) {
          if (otherId !== id) {
            (_a2 = __privateGet(this, _groups).get(otherId)) == null ? void 0 : _a2._setVisible(INTERNAL, false, true);
          }
        }
      }
    }
    group._setVisible(INTERNAL, !!visible, true);
    __privateSet(this, _cachedGetHash, null);
  }
  setOCGState({
    state,
    preserveRB
  }) {
    let operator;
    for (const elem of state) {
      switch (elem) {
        case "ON":
        case "OFF":
        case "Toggle":
          operator = elem;
          continue;
      }
      const group = __privateGet(this, _groups).get(elem);
      if (!group) {
        continue;
      }
      switch (operator) {
        case "ON":
          this.setVisibility(elem, true, preserveRB);
          break;
        case "OFF":
          this.setVisibility(elem, false, preserveRB);
          break;
        case "Toggle":
          this.setVisibility(elem, !group.visible, preserveRB);
          break;
      }
    }
    __privateSet(this, _cachedGetHash, null);
  }
  get hasInitialVisibility() {
    return __privateGet(this, _initialHash) === null || this.getHash() === __privateGet(this, _initialHash);
  }
  getOrder() {
    if (!__privateGet(this, _groups).size) {
      return null;
    }
    if (__privateGet(this, _order)) {
      return __privateGet(this, _order).slice();
    }
    return [...__privateGet(this, _groups).keys()];
  }
  getGroups() {
    return __privateGet(this, _groups).size > 0 ? objectFromMap(__privateGet(this, _groups)) : null;
  }
  getGroup(id) {
    return __privateGet(this, _groups).get(id) || null;
  }
  getHash() {
    if (__privateGet(this, _cachedGetHash) !== null) {
      return __privateGet(this, _cachedGetHash);
    }
    const hash = new MurmurHash3_64();
    for (const [id, group] of __privateGet(this, _groups)) {
      hash.update(`${id}:${group.visible}`);
    }
    return __privateSet(this, _cachedGetHash, hash.hexdigest());
  }
};
_cachedGetHash = new WeakMap();
_groups = new WeakMap();
_initialHash = new WeakMap();
_order = new WeakMap();
_OptionalContentConfig_instances = new WeakSet();
evaluateVisibilityExpression_fn = function(array) {
  const length = array.length;
  if (length < 2) {
    return true;
  }
  const operator = array[0];
  for (let i = 1; i < length; i++) {
    const element = array[i];
    let state;
    if (Array.isArray(element)) {
      state = __privateMethod(this, _OptionalContentConfig_instances, evaluateVisibilityExpression_fn).call(this, element);
    } else if (__privateGet(this, _groups).has(element)) {
      state = __privateGet(this, _groups).get(element).visible;
    } else {
      warn(`Optional content group not found: ${element}`);
      return true;
    }
    switch (operator) {
      case "And":
        if (!state) {
          return false;
        }
        break;
      case "Or":
        if (state) {
          return true;
        }
        break;
      case "Not":
        return !state;
      default:
        return true;
    }
  }
  return operator === "And";
};
var PDFDataTransportStream = class {
  constructor(pdfDataRangeTransport, {
    disableRange = false,
    disableStream = false
  }) {
    assert(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length,
      initialData,
      progressiveDone,
      contentDispositionFilename
    } = pdfDataRangeTransport;
    this._queuedChunks = [];
    this._progressiveDone = progressiveDone;
    this._contentDispositionFilename = contentDispositionFilename;
    if ((initialData == null ? void 0 : initialData.length) > 0) {
      const buffer = initialData instanceof Uint8Array && initialData.byteLength === initialData.buffer.byteLength ? initialData.buffer : new Uint8Array(initialData).buffer;
      this._queuedChunks.push(buffer);
    }
    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !disableStream;
    this._isRangeSupported = !disableRange;
    this._contentLength = length;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    pdfDataRangeTransport.addRangeListener((begin, chunk) => {
      this._onReceiveData({
        begin,
        chunk
      });
    });
    pdfDataRangeTransport.addProgressListener((loaded, total) => {
      this._onProgress({
        loaded,
        total
      });
    });
    pdfDataRangeTransport.addProgressiveReadListener((chunk) => {
      this._onReceiveData({
        chunk
      });
    });
    pdfDataRangeTransport.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    });
    pdfDataRangeTransport.transportReady();
  }
  _onReceiveData({
    begin,
    chunk
  }) {
    const buffer = chunk instanceof Uint8Array && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : new Uint8Array(chunk).buffer;
    if (begin === void 0) {
      if (this._fullRequestReader) {
        this._fullRequestReader._enqueue(buffer);
      } else {
        this._queuedChunks.push(buffer);
      }
    } else {
      const found = this._rangeReaders.some(function(rangeReader) {
        if (rangeReader._begin !== begin) {
          return false;
        }
        rangeReader._enqueue(buffer);
        return true;
      });
      assert(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var _a2;
    return ((_a2 = this._fullRequestReader) == null ? void 0 : _a2._loaded) ?? 0;
  }
  _onProgress(evt) {
    var _a2, _b, _c, _d;
    if (evt.total === void 0) {
      (_b = (_a2 = this._rangeReaders[0]) == null ? void 0 : _a2.onProgress) == null ? void 0 : _b.call(_a2, {
        loaded: evt.loaded
      });
    } else {
      (_d = (_c = this._fullRequestReader) == null ? void 0 : _c.onProgress) == null ? void 0 : _d.call(_c, {
        loaded: evt.loaded,
        total: evt.total
      });
    }
  }
  _onProgressiveDone() {
    var _a2;
    (_a2 = this._fullRequestReader) == null ? void 0 : _a2.progressiveDone();
    this._progressiveDone = true;
  }
  _removeRangeReader(reader) {
    const i = this._rangeReaders.indexOf(reader);
    if (i >= 0) {
      this._rangeReaders.splice(i, 1);
    }
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const queuedChunks = this._queuedChunks;
    this._queuedChunks = null;
    return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(begin, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
    this._pdfDataRangeTransport.requestDataRange(begin, end);
    this._rangeReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    var _a2;
    (_a2 = this._fullRequestReader) == null ? void 0 : _a2.cancel(reason);
    for (const reader of this._rangeReaders.slice(0)) {
      reader.cancel(reason);
    }
    this._pdfDataRangeTransport.abort();
  }
};
var PDFDataTransportStreamReader = class {
  constructor(stream, queuedChunks, progressiveDone = false, contentDispositionFilename = null) {
    this._stream = stream;
    this._done = progressiveDone || false;
    this._filename = isPdfFile(contentDispositionFilename) ? contentDispositionFilename : null;
    this._queuedChunks = queuedChunks || [];
    this._loaded = 0;
    for (const chunk of this._queuedChunks) {
      this._loaded += chunk.byteLength;
    }
    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;
    this.onProgress = null;
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunks.push(chunk);
    }
    this._loaded += chunk.byteLength;
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      const chunk = this._queuedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
  }
  progressiveDone() {
    if (this._done) {
      return;
    }
    this._done = true;
  }
};
var PDFDataTransportStreamRangeReader = class {
  constructor(stream, begin, end) {
    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length === 0) {
      this._queuedChunk = chunk;
    } else {
      const requestsCapability = this._requests.shift();
      requestsCapability.resolve({
        value: chunk,
        done: false
      });
      for (const requestCapability of this._requests) {
        requestCapability.resolve({
          value: void 0,
          done: true
        });
      }
      this._requests.length = 0;
    }
    this._done = true;
    this._stream._removeRangeReader(this);
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._queuedChunk) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    this._stream._removeRangeReader(this);
  }
};
function getFilenameFromContentDispositionHeader(contentDisposition) {
  let needsEncodingFixup = true;
  let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  tmp = rfc2231getparam(contentDisposition);
  if (tmp) {
    const filename = rfc2047decode(tmp);
    return fixupEncoding(filename);
  }
  tmp = toParamRegExp("filename", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  function toParamRegExp(attributePattern, flags) {
    return new RegExp("(?:^|;)\\s*" + attributePattern + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', flags);
  }
  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(value);
        value = decoder.decode(buffer);
        needsEncodingFixup = false;
      } catch {
      }
    }
    return value;
  }
  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode("utf-8", value);
      if (needsEncodingFixup) {
        value = textdecode("iso-8859-1", value);
      }
    }
    return value;
  }
  function rfc2231getparam(contentDispositionStr) {
    const matches = [];
    let match;
    const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    while ((match = iter.exec(contentDispositionStr)) !== null) {
      let [, n, quot, part] = match;
      n = parseInt(n, 10);
      if (n in matches) {
        if (n === 0) {
          break;
        }
        continue;
      }
      matches[n] = [quot, part];
    }
    const parts = [];
    for (let n = 0; n < matches.length; ++n) {
      if (!(n in matches)) {
        break;
      }
      let [quot, part] = matches[n];
      part = rfc2616unquote(part);
      if (quot) {
        part = unescape(part);
        if (n === 0) {
          part = rfc5987decode(part);
        }
      }
      parts.push(part);
    }
    return parts.join("");
  }
  function rfc2616unquote(value) {
    if (value.startsWith('"')) {
      const parts = value.slice(1).split('\\"');
      for (let i = 0; i < parts.length; ++i) {
        const quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }
        parts[i] = parts[i].replaceAll(/\\(.)/g, "$1");
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extvalue) {
    const encodingend = extvalue.indexOf("'");
    if (encodingend === -1) {
      return extvalue;
    }
    const encoding = extvalue.slice(0, encodingend);
    const langvalue = extvalue.slice(encodingend + 1);
    const value = langvalue.replace(/^[^']*'/, "");
    return textdecode(encoding, value);
  }
  function rfc2047decode(value) {
    if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    return value.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(matches, charset, encoding, text) {
      if (encoding === "q" || encoding === "Q") {
        text = text.replaceAll("_", " ");
        text = text.replaceAll(/=([0-9a-fA-F]{2})/g, function(match, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        });
        return textdecode(charset, text);
      }
      try {
        text = atob(text);
      } catch {
      }
      return textdecode(charset, text);
    });
  }
  return "";
}
function createHeaders(isHttp, httpHeaders) {
  const headers = new Headers();
  if (!isHttp || !httpHeaders || typeof httpHeaders !== "object") {
    return headers;
  }
  for (const key in httpHeaders) {
    const val = httpHeaders[key];
    if (val !== void 0) {
      headers.append(key, val);
    }
  }
  return headers;
}
function getResponseOrigin(url) {
  try {
    return new URL(url).origin;
  } catch {
  }
  return null;
}
function validateRangeRequestCapabilities({
  responseHeaders,
  isHttp,
  rangeChunkSize,
  disableRange
}) {
  const returnValues = {
    allowRangeRequests: false,
    suggestedLength: void 0
  };
  const length = parseInt(responseHeaders.get("Content-Length"), 10);
  if (!Number.isInteger(length)) {
    return returnValues;
  }
  returnValues.suggestedLength = length;
  if (length <= 2 * rangeChunkSize) {
    return returnValues;
  }
  if (disableRange || !isHttp) {
    return returnValues;
  }
  if (responseHeaders.get("Accept-Ranges") !== "bytes") {
    return returnValues;
  }
  const contentEncoding = responseHeaders.get("Content-Encoding") || "identity";
  if (contentEncoding !== "identity") {
    return returnValues;
  }
  returnValues.allowRangeRequests = true;
  return returnValues;
}
function extractFilenameFromHeader(responseHeaders) {
  const contentDisposition = responseHeaders.get("Content-Disposition");
  if (contentDisposition) {
    let filename = getFilenameFromContentDispositionHeader(contentDisposition);
    if (filename.includes("%")) {
      try {
        filename = decodeURIComponent(filename);
      } catch {
      }
    }
    if (isPdfFile(filename)) {
      return filename;
    }
  }
  return null;
}
function createResponseStatusError(status, url) {
  if (status === 404 || status === 0 && url.startsWith("file:")) {
    return new MissingPDFException('Missing PDF "' + url + '".');
  }
  return new UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`, status);
}
function validateResponseStatus(status) {
  return status === 200 || status === 206;
}
function createFetchOptions(headers, withCredentials, abortController) {
  return {
    method: "GET",
    headers,
    signal: abortController.signal,
    mode: "cors",
    credentials: withCredentials ? "include" : "same-origin",
    redirect: "follow"
  };
}
function getArrayBuffer(val) {
  if (val instanceof Uint8Array) {
    return val.buffer;
  }
  if (val instanceof ArrayBuffer) {
    return val;
  }
  warn(`getArrayBuffer - unexpected data format: ${val}`);
  return new Uint8Array(val).buffer;
}
var PDFFetchStream = class {
  constructor(source) {
    __publicField(this, "_responseOrigin", null);
    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.headers = createHeaders(this.isHttp, source.httpHeaders);
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var _a2;
    return ((_a2 = this._fullRequestReader) == null ? void 0 : _a2._loaded) ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFFetchStreamReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(begin, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const reader = new PDFFetchStreamRangeReader(this, begin, end);
    this._rangeRequestReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    var _a2;
    (_a2 = this._fullRequestReader) == null ? void 0 : _a2.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
};
var PDFFetchStreamReader = class {
  constructor(stream) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    const source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._contentLength = source.length;
    this._headersCapability = Promise.withResolvers();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._abortController = new AbortController();
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    const headers = new Headers(stream.headers);
    const url = source.url;
    fetch(url, createFetchOptions(headers, this._withCredentials, this._abortController)).then((response) => {
      stream._responseOrigin = getResponseOrigin(response.url);
      if (!validateResponseStatus(response.status)) {
        throw createResponseStatusError(response.status, url);
      }
      this._reader = response.body.getReader();
      this._headersCapability.resolve();
      const responseHeaders = response.headers;
      const {
        allowRangeRequests,
        suggestedLength
      } = validateRangeRequestCapabilities({
        responseHeaders,
        isHttp: stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = extractFilenameFromHeader(responseHeaders);
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new AbortException("Streaming is disabled."));
      }
    }).catch(this._headersCapability.reject);
    this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var _a2;
    await this._headersCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    (_a2 = this.onProgress) == null ? void 0 : _a2.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    });
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    var _a2;
    (_a2 = this._reader) == null ? void 0 : _a2.cancel(reason);
    this._abortController.abort();
  }
};
var PDFFetchStreamRangeReader = class {
  constructor(stream, begin, end) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    const source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._readCapability = Promise.withResolvers();
    this._isStreamingSupported = !source.disableStream;
    this._abortController = new AbortController();
    const headers = new Headers(stream.headers);
    headers.append("Range", `bytes=${begin}-${end - 1}`);
    const url = source.url;
    fetch(url, createFetchOptions(headers, this._withCredentials, this._abortController)).then((response) => {
      const responseOrigin = getResponseOrigin(response.url);
      if (responseOrigin !== stream._responseOrigin) {
        throw new Error(`Expected range response-origin "${responseOrigin}" to match "${stream._responseOrigin}".`);
      }
      if (!validateResponseStatus(response.status)) {
        throw createResponseStatusError(response.status, url);
      }
      this._readCapability.resolve();
      this._reader = response.body.getReader();
    }).catch(this._readCapability.reject);
    this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var _a2;
    await this._readCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    (_a2 = this.onProgress) == null ? void 0 : _a2.call(this, {
      loaded: this._loaded
    });
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    var _a2;
    (_a2 = this._reader) == null ? void 0 : _a2.cancel(reason);
    this._abortController.abort();
  }
};
var OK_RESPONSE = 200;
var PARTIAL_CONTENT_RESPONSE = 206;
function network_getArrayBuffer(xhr) {
  const data = xhr.response;
  if (typeof data !== "string") {
    return data;
  }
  return stringToBytes(data).buffer;
}
var NetworkManager = class {
  constructor({
    url,
    httpHeaders,
    withCredentials
  }) {
    __publicField(this, "_responseOrigin", null);
    this.url = url;
    this.isHttp = /^https?:/i.test(url);
    this.headers = createHeaders(this.isHttp, httpHeaders);
    this.withCredentials = withCredentials || false;
    this.currXhrId = 0;
    this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(args) {
    const xhr = new XMLHttpRequest();
    const xhrId = this.currXhrId++;
    const pendingRequest = this.pendingRequests[xhrId] = {
      xhr
    };
    xhr.open("GET", this.url);
    xhr.withCredentials = this.withCredentials;
    for (const [key, val] of this.headers) {
      xhr.setRequestHeader(key, val);
    }
    if (this.isHttp && "begin" in args && "end" in args) {
      xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
      pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
    } else {
      pendingRequest.expectedStatus = OK_RESPONSE;
    }
    xhr.responseType = "arraybuffer";
    assert(args.onError, "Expected `onError` callback to be provided.");
    xhr.onerror = () => {
      args.onError(xhr.status);
    };
    xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
    xhr.onprogress = this.onProgress.bind(this, xhrId);
    pendingRequest.onHeadersReceived = args.onHeadersReceived;
    pendingRequest.onDone = args.onDone;
    pendingRequest.onError = args.onError;
    pendingRequest.onProgress = args.onProgress;
    xhr.send(null);
    return xhrId;
  }
  onProgress(xhrId, evt) {
    var _a2;
    const pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    (_a2 = pendingRequest.onProgress) == null ? void 0 : _a2.call(pendingRequest, evt);
  }
  onStateChange(xhrId, evt) {
    const pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    const xhr = pendingRequest.xhr;
    if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
      pendingRequest.onHeadersReceived();
      delete pendingRequest.onHeadersReceived;
    }
    if (xhr.readyState !== 4) {
      return;
    }
    if (!(xhrId in this.pendingRequests)) {
      return;
    }
    delete this.pendingRequests[xhrId];
    if (xhr.status === 0 && this.isHttp) {
      pendingRequest.onError(xhr.status);
      return;
    }
    const xhrStatus = xhr.status || OK_RESPONSE;
    const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
    if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
      pendingRequest.onError(xhr.status);
      return;
    }
    const chunk = network_getArrayBuffer(xhr);
    if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
      const rangeHeader = xhr.getResponseHeader("Content-Range");
      const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
      if (matches) {
        pendingRequest.onDone({
          begin: parseInt(matches[1], 10),
          chunk
        });
      } else {
        warn(`Missing or invalid "Content-Range" header.`);
        pendingRequest.onError(0);
      }
    } else if (chunk) {
      pendingRequest.onDone({
        begin: 0,
        chunk
      });
    } else {
      pendingRequest.onError(xhr.status);
    }
  }
  getRequestXhr(xhrId) {
    return this.pendingRequests[xhrId].xhr;
  }
  isPendingRequest(xhrId) {
    return xhrId in this.pendingRequests;
  }
  abortRequest(xhrId) {
    const xhr = this.pendingRequests[xhrId].xhr;
    delete this.pendingRequests[xhrId];
    xhr.abort();
  }
};
var PDFNetworkStream = class {
  constructor(source) {
    this._source = source;
    this._manager = new NetworkManager(source);
    this._rangeChunkSize = source.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(reader) {
    const i = this._rangeRequestReaders.indexOf(reader);
    if (i >= 0) {
      this._rangeRequestReaders.splice(i, 1);
    }
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
    return this._fullRequestReader;
  }
  getRangeReader(begin, end) {
    const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
    reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    var _a2;
    (_a2 = this._fullRequestReader) == null ? void 0 : _a2.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
};
var PDFNetworkStreamFullRequestReader = class {
  constructor(manager, source) {
    this._manager = manager;
    this._url = source.url;
    this._fullRequestId = manager.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    });
    this._headersCapability = Promise.withResolvers();
    this._disableRange = source.disableRange || false;
    this._contentLength = source.length;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = void 0;
    this._filename = null;
    this.onProgress = null;
  }
  _onHeadersReceived() {
    const fullRequestXhrId = this._fullRequestId;
    const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
    this._manager._responseOrigin = getResponseOrigin(fullRequestXhr.responseURL);
    const rawResponseHeaders = fullRequestXhr.getAllResponseHeaders();
    const responseHeaders = new Headers(rawResponseHeaders ? rawResponseHeaders.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((x) => {
      const [key, ...val] = x.split(": ");
      return [key, val.join(": ")];
    }) : []);
    const {
      allowRangeRequests,
      suggestedLength
    } = validateRangeRequestCapabilities({
      responseHeaders,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    if (allowRangeRequests) {
      this._isRangeSupported = true;
    }
    this._contentLength = suggestedLength || this._contentLength;
    this._filename = extractFilenameFromHeader(responseHeaders);
    if (this._isRangeSupported) {
      this._manager.abortRequest(fullRequestXhrId);
    }
    this._headersCapability.resolve();
  }
  _onDone(data) {
    if (data) {
      if (this._requests.length > 0) {
        const requestCapability = this._requests.shift();
        requestCapability.resolve({
          value: data.chunk,
          done: false
        });
      } else {
        this._cachedChunks.push(data.chunk);
      }
    }
    this._done = true;
    if (this._cachedChunks.length > 0) {
      return;
    }
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
  }
  _onError(status) {
    this._storedError = createResponseStatusError(status, this._url);
    this._headersCapability.reject(this._storedError);
    for (const requestCapability of this._requests) {
      requestCapability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  }
  _onProgress(evt) {
    var _a2;
    (_a2 = this.onProgress) == null ? void 0 : _a2.call(this, {
      loaded: evt.loaded,
      total: evt.lengthComputable ? evt.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    await this._headersCapability.promise;
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._cachedChunks.length > 0) {
      const chunk = this._cachedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    this._headersCapability.reject(reason);
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._fullRequestId)) {
      this._manager.abortRequest(this._fullRequestId);
    }
    this._fullRequestReader = null;
  }
};
var PDFNetworkStreamRangeRequestReader = class {
  constructor(manager, begin, end) {
    this._manager = manager;
    this._url = manager.url;
    this._requestId = manager.request({
      begin,
      end,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    });
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this._storedError = void 0;
    this.onProgress = null;
    this.onClosed = null;
  }
  _onHeadersReceived() {
    var _a2;
    const responseOrigin = getResponseOrigin((_a2 = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : _a2.responseURL);
    if (responseOrigin !== this._manager._responseOrigin) {
      this._storedError = new Error(`Expected range response-origin "${responseOrigin}" to match "${this._manager._responseOrigin}".`);
      this._onError(0);
    }
  }
  _close() {
    var _a2;
    (_a2 = this.onClosed) == null ? void 0 : _a2.call(this, this);
  }
  _onDone(data) {
    const chunk = data.chunk;
    if (this._requests.length > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunk = chunk;
    }
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    this._close();
  }
  _onError(status) {
    this._storedError ?? (this._storedError = createResponseStatusError(status, this._url));
    for (const requestCapability of this._requests) {
      requestCapability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._queuedChunk = null;
  }
  _onProgress(evt) {
    var _a2;
    if (!this.isStreamingSupported) {
      (_a2 = this.onProgress) == null ? void 0 : _a2.call(this, {
        loaded: evt.loaded
      });
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._queuedChunk !== null) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._requestId)) {
      this._manager.abortRequest(this._requestId);
    }
    this._close();
  }
};
var urlRegex = /^[a-z][a-z0-9\-+.]+:/i;
function parseUrlOrPath(sourceUrl) {
  if (urlRegex.test(sourceUrl)) {
    return new URL(sourceUrl);
  }
  const url = process.getBuiltinModule("url");
  return new URL(url.pathToFileURL(sourceUrl));
}
var PDFNodeStream = class {
  constructor(source) {
    this.source = source;
    this.url = parseUrlOrPath(source.url);
    assert(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var _a2;
    return ((_a2 = this._fullRequestReader) == null ? void 0 : _a2._loaded) ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFNodeStreamFsFullReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(start, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const rangeReader = new PDFNodeStreamFsRangeReader(this, start, end);
    this._rangeRequestReaders.push(rangeReader);
    return rangeReader;
  }
  cancelAllRequests(reason) {
    var _a2;
    (_a2 = this._fullRequestReader) == null ? void 0 : _a2.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
};
var PDFNodeStreamFsFullReader = class {
  constructor(stream) {
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    const source = stream.source;
    this._contentLength = source.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    this._headersCapability = Promise.withResolvers();
    const fs = process.getBuiltinModule("fs");
    fs.promises.lstat(this._url).then((stat) => {
      this._contentLength = stat.size;
      this._setReadableStream(fs.createReadStream(this._url));
      this._headersCapability.resolve();
    }, (error) => {
      if (error.code === "ENOENT") {
        error = new MissingPDFException(`Missing PDF "${this._url}".`);
      }
      this._storedError = error;
      this._headersCapability.reject(error);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var _a2;
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const chunk = this._readableStream.read();
    if (chunk === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += chunk.length;
    (_a2 = this.onProgress) == null ? void 0 : _a2.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    });
    const buffer = new Uint8Array(chunk).buffer;
    return {
      value: buffer,
      done: false
    };
  }
  cancel(reason) {
    if (!this._readableStream) {
      this._error(reason);
      return;
    }
    this._readableStream.destroy(reason);
  }
  _error(reason) {
    this._storedError = reason;
    this._readCapability.resolve();
  }
  _setReadableStream(readableStream) {
    this._readableStream = readableStream;
    readableStream.on("readable", () => {
      this._readCapability.resolve();
    });
    readableStream.on("end", () => {
      readableStream.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    readableStream.on("error", (reason) => {
      this._error(reason);
    });
    if (!this._isStreamingSupported && this._isRangeSupported) {
      this._error(new AbortException("streaming is disabled"));
    }
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
};
var PDFNodeStreamFsRangeReader = class {
  constructor(stream, start, end) {
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    const source = stream.source;
    this._isStreamingSupported = !source.disableStream;
    const fs = process.getBuiltinModule("fs");
    this._setReadableStream(fs.createReadStream(this._url, {
      start,
      end: end - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var _a2;
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const chunk = this._readableStream.read();
    if (chunk === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += chunk.length;
    (_a2 = this.onProgress) == null ? void 0 : _a2.call(this, {
      loaded: this._loaded
    });
    const buffer = new Uint8Array(chunk).buffer;
    return {
      value: buffer,
      done: false
    };
  }
  cancel(reason) {
    if (!this._readableStream) {
      this._error(reason);
      return;
    }
    this._readableStream.destroy(reason);
  }
  _error(reason) {
    this._storedError = reason;
    this._readCapability.resolve();
  }
  _setReadableStream(readableStream) {
    this._readableStream = readableStream;
    readableStream.on("readable", () => {
      this._readCapability.resolve();
    });
    readableStream.on("end", () => {
      readableStream.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    readableStream.on("error", (reason) => {
      this._error(reason);
    });
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
};
var MAX_TEXT_DIVS_TO_RENDER = 1e5;
var DEFAULT_FONT_SIZE = 30;
var DEFAULT_FONT_ASCENT = 0.8;
var _a, _capability, _container3, _disableProcessItems, _fontInspectorEnabled, _lang, _layoutTextParams, _pageHeight, _pageWidth, _reader, _rootContainer, _rotation, _scale, _styleCache, _textContentItemsStr, _textContentSource, _textDivs, _textDivProperties, _transform, _ascentCache, _canvasContexts, _canvasCtxFonts, _minFontSize, _pendingTextLayers, _TextLayer_instances, processItems_fn, appendText_fn, layout_fn, _TextLayer_static, getCtx_fn, ensureCtxFont_fn, ensureMinFontSizeComputed_fn, getAscent_fn;
var _TextLayer = class _TextLayer {
  constructor({
    textContentSource,
    container,
    viewport
  }) {
    __privateAdd(this, _TextLayer_instances);
    __privateAdd(this, _capability, Promise.withResolvers());
    __privateAdd(this, _container3, null);
    __privateAdd(this, _disableProcessItems, false);
    __privateAdd(this, _fontInspectorEnabled, !!((_a = globalThis.FontInspector) == null ? void 0 : _a.enabled));
    __privateAdd(this, _lang, null);
    __privateAdd(this, _layoutTextParams, null);
    __privateAdd(this, _pageHeight, 0);
    __privateAdd(this, _pageWidth, 0);
    __privateAdd(this, _reader, null);
    __privateAdd(this, _rootContainer, null);
    __privateAdd(this, _rotation, 0);
    __privateAdd(this, _scale, 0);
    __privateAdd(this, _styleCache, /* @__PURE__ */ Object.create(null));
    __privateAdd(this, _textContentItemsStr, []);
    __privateAdd(this, _textContentSource, null);
    __privateAdd(this, _textDivs, []);
    __privateAdd(this, _textDivProperties, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _transform, null);
    var _a2;
    if (textContentSource instanceof ReadableStream) {
      __privateSet(this, _textContentSource, textContentSource);
    } else if (typeof textContentSource === "object") {
      __privateSet(this, _textContentSource, new ReadableStream({
        start(controller) {
          controller.enqueue(textContentSource);
          controller.close();
        }
      }));
    } else {
      throw new Error('No "textContentSource" parameter specified.');
    }
    __privateSet(this, _container3, __privateSet(this, _rootContainer, container));
    __privateSet(this, _scale, viewport.scale * (globalThis.devicePixelRatio || 1));
    __privateSet(this, _rotation, viewport.rotation);
    __privateSet(this, _layoutTextParams, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    __privateSet(this, _transform, [1, 0, 0, -1, -pageX, pageY + pageHeight]);
    __privateSet(this, _pageWidth, pageWidth);
    __privateSet(this, _pageHeight, pageHeight);
    __privateMethod(_a2 = _TextLayer, _TextLayer_static, ensureMinFontSizeComputed_fn).call(_a2);
    setLayerDimensions(container, viewport);
    __privateGet(this, _capability).promise.finally(() => {
      __privateGet(_TextLayer, _pendingTextLayers).delete(this);
      __privateSet(this, _layoutTextParams, null);
      __privateSet(this, _styleCache, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows,
      isFirefox
    } = util_FeatureTest.platform;
    return shadow(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${isWindows && isFirefox ? "Calibri, " : ""}sans-serif`], ["monospace", `${isWindows && isFirefox ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const pump = () => {
      __privateGet(this, _reader).read().then(({
        value,
        done
      }) => {
        if (done) {
          __privateGet(this, _capability).resolve();
          return;
        }
        __privateGet(this, _lang) ?? __privateSet(this, _lang, value.lang);
        Object.assign(__privateGet(this, _styleCache), value.styles);
        __privateMethod(this, _TextLayer_instances, processItems_fn).call(this, value.items);
        pump();
      }, __privateGet(this, _capability).reject);
    };
    __privateSet(this, _reader, __privateGet(this, _textContentSource).getReader());
    __privateGet(_TextLayer, _pendingTextLayers).add(this);
    pump();
    return __privateGet(this, _capability).promise;
  }
  update({
    viewport,
    onBefore = null
  }) {
    var _a2;
    const scale = viewport.scale * (globalThis.devicePixelRatio || 1);
    const rotation = viewport.rotation;
    if (rotation !== __privateGet(this, _rotation)) {
      onBefore == null ? void 0 : onBefore();
      __privateSet(this, _rotation, rotation);
      setLayerDimensions(__privateGet(this, _rootContainer), {
        rotation
      });
    }
    if (scale !== __privateGet(this, _scale)) {
      onBefore == null ? void 0 : onBefore();
      __privateSet(this, _scale, scale);
      const params = {
        div: null,
        properties: null,
        ctx: __privateMethod(_a2 = _TextLayer, _TextLayer_static, getCtx_fn).call(_a2, __privateGet(this, _lang))
      };
      for (const div of __privateGet(this, _textDivs)) {
        params.properties = __privateGet(this, _textDivProperties).get(div);
        params.div = div;
        __privateMethod(this, _TextLayer_instances, layout_fn).call(this, params);
      }
    }
  }
  cancel() {
    var _a2;
    const abortEx = new AbortException("TextLayer task cancelled.");
    (_a2 = __privateGet(this, _reader)) == null ? void 0 : _a2.cancel(abortEx).catch(() => {
    });
    __privateSet(this, _reader, null);
    __privateGet(this, _capability).reject(abortEx);
  }
  get textDivs() {
    return __privateGet(this, _textDivs);
  }
  get textContentItemsStr() {
    return __privateGet(this, _textContentItemsStr);
  }
  static cleanup() {
    if (__privateGet(this, _pendingTextLayers).size > 0) {
      return;
    }
    __privateGet(this, _ascentCache).clear();
    for (const {
      canvas
    } of __privateGet(this, _canvasContexts).values()) {
      canvas.remove();
    }
    __privateGet(this, _canvasContexts).clear();
  }
};
_capability = new WeakMap();
_container3 = new WeakMap();
_disableProcessItems = new WeakMap();
_fontInspectorEnabled = new WeakMap();
_lang = new WeakMap();
_layoutTextParams = new WeakMap();
_pageHeight = new WeakMap();
_pageWidth = new WeakMap();
_reader = new WeakMap();
_rootContainer = new WeakMap();
_rotation = new WeakMap();
_scale = new WeakMap();
_styleCache = new WeakMap();
_textContentItemsStr = new WeakMap();
_textContentSource = new WeakMap();
_textDivs = new WeakMap();
_textDivProperties = new WeakMap();
_transform = new WeakMap();
_ascentCache = new WeakMap();
_canvasContexts = new WeakMap();
_canvasCtxFonts = new WeakMap();
_minFontSize = new WeakMap();
_pendingTextLayers = new WeakMap();
_TextLayer_instances = new WeakSet();
processItems_fn = function(items) {
  var _a2, _b;
  if (__privateGet(this, _disableProcessItems)) {
    return;
  }
  (_b = __privateGet(this, _layoutTextParams)).ctx ?? (_b.ctx = __privateMethod(_a2 = _TextLayer, _TextLayer_static, getCtx_fn).call(_a2, __privateGet(this, _lang)));
  const textDivs = __privateGet(this, _textDivs), textContentItemsStr = __privateGet(this, _textContentItemsStr);
  for (const item of items) {
    if (textDivs.length > MAX_TEXT_DIVS_TO_RENDER) {
      warn("Ignoring additional textDivs for performance reasons.");
      __privateSet(this, _disableProcessItems, true);
      return;
    }
    if (item.str === void 0) {
      if (item.type === "beginMarkedContentProps" || item.type === "beginMarkedContent") {
        const parent = __privateGet(this, _container3);
        __privateSet(this, _container3, document.createElement("span"));
        __privateGet(this, _container3).classList.add("markedContent");
        if (item.id !== null) {
          __privateGet(this, _container3).setAttribute("id", `${item.id}`);
        }
        parent.append(__privateGet(this, _container3));
      } else if (item.type === "endMarkedContent") {
        __privateSet(this, _container3, __privateGet(this, _container3).parentNode);
      }
      continue;
    }
    textContentItemsStr.push(item.str);
    __privateMethod(this, _TextLayer_instances, appendText_fn).call(this, item);
  }
};
appendText_fn = function(geom) {
  var _a2;
  const textDiv = document.createElement("span");
  const textDivProperties = {
    angle: 0,
    canvasWidth: 0,
    hasText: geom.str !== "",
    hasEOL: geom.hasEOL,
    fontSize: 0
  };
  __privateGet(this, _textDivs).push(textDiv);
  const tx = Util.transform(__privateGet(this, _transform), geom.transform);
  let angle = Math.atan2(tx[1], tx[0]);
  const style = __privateGet(this, _styleCache)[geom.fontName];
  if (style.vertical) {
    angle += Math.PI / 2;
  }
  let fontFamily = __privateGet(this, _fontInspectorEnabled) && style.fontSubstitution || style.fontFamily;
  fontFamily = _TextLayer.fontFamilyMap.get(fontFamily) || fontFamily;
  const fontHeight = Math.hypot(tx[2], tx[3]);
  const fontAscent = fontHeight * __privateMethod(_a2 = _TextLayer, _TextLayer_static, getAscent_fn).call(_a2, fontFamily, __privateGet(this, _lang));
  let left, top;
  if (angle === 0) {
    left = tx[4];
    top = tx[5] - fontAscent;
  } else {
    left = tx[4] + fontAscent * Math.sin(angle);
    top = tx[5] - fontAscent * Math.cos(angle);
  }
  const scaleFactorStr = "calc(var(--scale-factor)*";
  const divStyle = textDiv.style;
  if (__privateGet(this, _container3) === __privateGet(this, _rootContainer)) {
    divStyle.left = `${(100 * left / __privateGet(this, _pageWidth)).toFixed(2)}%`;
    divStyle.top = `${(100 * top / __privateGet(this, _pageHeight)).toFixed(2)}%`;
  } else {
    divStyle.left = `${scaleFactorStr}${left.toFixed(2)}px)`;
    divStyle.top = `${scaleFactorStr}${top.toFixed(2)}px)`;
  }
  divStyle.fontSize = `${scaleFactorStr}${(__privateGet(_TextLayer, _minFontSize) * fontHeight).toFixed(2)}px)`;
  divStyle.fontFamily = fontFamily;
  textDivProperties.fontSize = fontHeight;
  textDiv.setAttribute("role", "presentation");
  textDiv.textContent = geom.str;
  textDiv.dir = geom.dir;
  if (__privateGet(this, _fontInspectorEnabled)) {
    textDiv.dataset.fontName = style.fontSubstitutionLoadedName || geom.fontName;
  }
  if (angle !== 0) {
    textDivProperties.angle = angle * (180 / Math.PI);
  }
  let shouldScaleText = false;
  if (geom.str.length > 1) {
    shouldScaleText = true;
  } else if (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
    const absScaleX = Math.abs(geom.transform[0]), absScaleY = Math.abs(geom.transform[3]);
    if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
      shouldScaleText = true;
    }
  }
  if (shouldScaleText) {
    textDivProperties.canvasWidth = style.vertical ? geom.height : geom.width;
  }
  __privateGet(this, _textDivProperties).set(textDiv, textDivProperties);
  __privateGet(this, _layoutTextParams).div = textDiv;
  __privateGet(this, _layoutTextParams).properties = textDivProperties;
  __privateMethod(this, _TextLayer_instances, layout_fn).call(this, __privateGet(this, _layoutTextParams));
  if (textDivProperties.hasText) {
    __privateGet(this, _container3).append(textDiv);
  }
  if (textDivProperties.hasEOL) {
    const br = document.createElement("br");
    br.setAttribute("role", "presentation");
    __privateGet(this, _container3).append(br);
  }
};
layout_fn = function(params) {
  var _a2;
  const {
    div,
    properties,
    ctx
  } = params;
  const {
    style
  } = div;
  let transform = "";
  if (__privateGet(_TextLayer, _minFontSize) > 1) {
    transform = `scale(${1 / __privateGet(_TextLayer, _minFontSize)})`;
  }
  if (properties.canvasWidth !== 0 && properties.hasText) {
    const {
      fontFamily
    } = style;
    const {
      canvasWidth,
      fontSize
    } = properties;
    __privateMethod(_a2 = _TextLayer, _TextLayer_static, ensureCtxFont_fn).call(_a2, ctx, fontSize * __privateGet(this, _scale), fontFamily);
    const {
      width
    } = ctx.measureText(div.textContent);
    if (width > 0) {
      transform = `scaleX(${canvasWidth * __privateGet(this, _scale) / width}) ${transform}`;
    }
  }
  if (properties.angle !== 0) {
    transform = `rotate(${properties.angle}deg) ${transform}`;
  }
  if (transform.length > 0) {
    style.transform = transform;
  }
};
_TextLayer_static = new WeakSet();
getCtx_fn = function(lang = null) {
  let ctx = __privateGet(this, _canvasContexts).get(lang || (lang = ""));
  if (!ctx) {
    const canvas = document.createElement("canvas");
    canvas.className = "hiddenCanvasElement";
    canvas.lang = lang;
    document.body.append(canvas);
    ctx = canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: true
    });
    __privateGet(this, _canvasContexts).set(lang, ctx);
    __privateGet(this, _canvasCtxFonts).set(ctx, {
      size: 0,
      family: ""
    });
  }
  return ctx;
};
ensureCtxFont_fn = function(ctx, size, family) {
  const cached = __privateGet(this, _canvasCtxFonts).get(ctx);
  if (size === cached.size && family === cached.family) {
    return;
  }
  ctx.font = `${size}px ${family}`;
  cached.size = size;
  cached.family = family;
};
ensureMinFontSizeComputed_fn = function() {
  if (__privateGet(this, _minFontSize) !== null) {
    return;
  }
  const div = document.createElement("div");
  div.style.opacity = 0;
  div.style.lineHeight = 1;
  div.style.fontSize = "1px";
  div.style.position = "absolute";
  div.textContent = "X";
  document.body.append(div);
  __privateSet(this, _minFontSize, div.getBoundingClientRect().height);
  div.remove();
};
getAscent_fn = function(fontFamily, lang) {
  const cachedAscent = __privateGet(this, _ascentCache).get(fontFamily);
  if (cachedAscent) {
    return cachedAscent;
  }
  const ctx = __privateMethod(this, _TextLayer_static, getCtx_fn).call(this, lang);
  ctx.canvas.width = ctx.canvas.height = DEFAULT_FONT_SIZE;
  __privateMethod(this, _TextLayer_static, ensureCtxFont_fn).call(this, ctx, DEFAULT_FONT_SIZE, fontFamily);
  const metrics = ctx.measureText("");
  let ascent = metrics.fontBoundingBoxAscent;
  let descent = Math.abs(metrics.fontBoundingBoxDescent);
  if (ascent) {
    const ratio2 = ascent / (ascent + descent);
    __privateGet(this, _ascentCache).set(fontFamily, ratio2);
    ctx.canvas.width = ctx.canvas.height = 0;
    return ratio2;
  }
  ctx.strokeStyle = "red";
  ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
  ctx.strokeText("g", 0, 0);
  let pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
  descent = 0;
  for (let i = pixels.length - 1 - 3; i >= 0; i -= 4) {
    if (pixels[i] > 0) {
      descent = Math.ceil(i / 4 / DEFAULT_FONT_SIZE);
      break;
    }
  }
  ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
  ctx.strokeText("A", 0, DEFAULT_FONT_SIZE);
  pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
  ascent = 0;
  for (let i = 0, ii = pixels.length; i < ii; i += 4) {
    if (pixels[i] > 0) {
      ascent = DEFAULT_FONT_SIZE - Math.floor(i / 4 / DEFAULT_FONT_SIZE);
      break;
    }
  }
  ctx.canvas.width = ctx.canvas.height = 0;
  const ratio = ascent ? ascent / (ascent + descent) : DEFAULT_FONT_ASCENT;
  __privateGet(this, _ascentCache).set(fontFamily, ratio);
  return ratio;
};
__privateAdd(_TextLayer, _TextLayer_static);
__privateAdd(_TextLayer, _ascentCache, /* @__PURE__ */ new Map());
__privateAdd(_TextLayer, _canvasContexts, /* @__PURE__ */ new Map());
__privateAdd(_TextLayer, _canvasCtxFonts, /* @__PURE__ */ new WeakMap());
__privateAdd(_TextLayer, _minFontSize, null);
__privateAdd(_TextLayer, _pendingTextLayers, /* @__PURE__ */ new Set());
var TextLayer = _TextLayer;
var XfaText = class _XfaText {
  static textContent(xfa) {
    const items = [];
    const output = {
      items,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function walk(node) {
      var _a2;
      if (!node) {
        return;
      }
      let str = null;
      const name = node.name;
      if (name === "#text") {
        str = node.value;
      } else if (!_XfaText.shouldBuildText(name)) {
        return;
      } else if ((_a2 = node == null ? void 0 : node.attributes) == null ? void 0 : _a2.textContent) {
        str = node.attributes.textContent;
      } else if (node.value) {
        str = node.value;
      }
      if (str !== null) {
        items.push({
          str
        });
      }
      if (!node.children) {
        return;
      }
      for (const child of node.children) {
        walk(child);
      }
    }
    walk(xfa);
    return output;
  }
  static shouldBuildText(name) {
    return !(name === "textarea" || name === "input" || name === "option" || name === "select");
  }
};
var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var RENDERING_CANCELLED_TIMEOUT = 100;
var DELAYED_CLEANUP_TIMEOUT = 5e3;
var DefaultCanvasFactory = isNodeJS ? NodeCanvasFactory : DOMCanvasFactory;
var DefaultCMapReaderFactory = isNodeJS ? NodeCMapReaderFactory : DOMCMapReaderFactory;
var DefaultFilterFactory = isNodeJS ? NodeFilterFactory : DOMFilterFactory;
var DefaultStandardFontDataFactory = isNodeJS ? NodeStandardFontDataFactory : DOMStandardFontDataFactory;
function getDocument(src = {}) {
  if (typeof src === "string" || src instanceof URL) {
    src = {
      url: src
    };
  } else if (src instanceof ArrayBuffer || ArrayBuffer.isView(src)) {
    src = {
      data: src
    };
  }
  const task = new PDFDocumentLoadingTask();
  const {
    docId
  } = task;
  const url = src.url ? getUrlProp(src.url) : null;
  const data = src.data ? getDataProp(src.data) : null;
  const httpHeaders = src.httpHeaders || null;
  const withCredentials = src.withCredentials === true;
  const password = src.password ?? null;
  const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
  const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
  let worker = src.worker instanceof PDFWorker ? src.worker : null;
  const verbosity2 = src.verbosity;
  const docBaseUrl = typeof src.docBaseUrl === "string" && !isDataScheme(src.docBaseUrl) ? src.docBaseUrl : null;
  const cMapUrl = typeof src.cMapUrl === "string" ? src.cMapUrl : null;
  const cMapPacked = src.cMapPacked !== false;
  const CMapReaderFactory = src.CMapReaderFactory || DefaultCMapReaderFactory;
  const standardFontDataUrl = typeof src.standardFontDataUrl === "string" ? src.standardFontDataUrl : null;
  const StandardFontDataFactory = src.StandardFontDataFactory || DefaultStandardFontDataFactory;
  const ignoreErrors = src.stopAtErrors !== true;
  const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
  const isEvalSupported2 = src.isEvalSupported !== false;
  const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "boolean" ? src.isOffscreenCanvasSupported : !isNodeJS;
  const isImageDecoderSupported = typeof src.isImageDecoderSupported === "boolean" ? src.isImageDecoderSupported : !isNodeJS && (util_FeatureTest.platform.isFirefox || !globalThis.chrome);
  const canvasMaxAreaInBytes = Number.isInteger(src.canvasMaxAreaInBytes) ? src.canvasMaxAreaInBytes : -1;
  const disableFontFace = typeof src.disableFontFace === "boolean" ? src.disableFontFace : isNodeJS;
  const fontExtraProperties = src.fontExtraProperties === true;
  const enableXfa = src.enableXfa === true;
  const ownerDocument = src.ownerDocument || globalThis.document;
  const disableRange = src.disableRange === true;
  const disableStream = src.disableStream === true;
  const disableAutoFetch = src.disableAutoFetch === true;
  const pdfBug = src.pdfBug === true;
  const CanvasFactory = src.CanvasFactory || DefaultCanvasFactory;
  const FilterFactory = src.FilterFactory || DefaultFilterFactory;
  const enableHWA = src.enableHWA === true;
  const length = rangeTransport ? rangeTransport.length : src.length ?? NaN;
  const useSystemFonts = typeof src.useSystemFonts === "boolean" ? src.useSystemFonts : !isNodeJS && !disableFontFace;
  const useWorkerFetch = typeof src.useWorkerFetch === "boolean" ? src.useWorkerFetch : CMapReaderFactory === DOMCMapReaderFactory && StandardFontDataFactory === DOMStandardFontDataFactory && cMapUrl && standardFontDataUrl && isValidFetchUrl(cMapUrl, document.baseURI) && isValidFetchUrl(standardFontDataUrl, document.baseURI);
  const styleElement = null;
  setVerbosityLevel(verbosity2);
  const transportFactory = {
    canvasFactory: new CanvasFactory({
      ownerDocument,
      enableHWA
    }),
    filterFactory: new FilterFactory({
      docId,
      ownerDocument
    }),
    cMapReaderFactory: useWorkerFetch ? null : new CMapReaderFactory({
      baseUrl: cMapUrl,
      isCompressed: cMapPacked
    }),
    standardFontDataFactory: useWorkerFetch ? null : new StandardFontDataFactory({
      baseUrl: standardFontDataUrl
    })
  };
  if (!worker) {
    const workerParams = {
      verbosity: verbosity2,
      port: GlobalWorkerOptions.workerPort
    };
    worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
    task._worker = worker;
  }
  const docParams = {
    docId,
    apiVersion: "4.10.38",
    data,
    password,
    disableAutoFetch,
    rangeChunkSize,
    length,
    docBaseUrl,
    enableXfa,
    evaluatorOptions: {
      maxImageSize,
      disableFontFace,
      ignoreErrors,
      isEvalSupported: isEvalSupported2,
      isOffscreenCanvasSupported,
      isImageDecoderSupported,
      canvasMaxAreaInBytes,
      fontExtraProperties,
      useSystemFonts,
      cMapUrl: useWorkerFetch ? cMapUrl : null,
      standardFontDataUrl: useWorkerFetch ? standardFontDataUrl : null
    }
  };
  const transportParams = {
    disableFontFace,
    fontExtraProperties,
    ownerDocument,
    pdfBug,
    styleElement,
    loadingParams: {
      disableAutoFetch,
      enableXfa
    }
  };
  worker.promise.then(function() {
    if (task.destroyed) {
      throw new Error("Loading aborted");
    }
    if (worker.destroyed) {
      throw new Error("Worker was destroyed");
    }
    const workerIdPromise = worker.messageHandler.sendWithPromise("GetDocRequest", docParams, data ? [data.buffer] : null);
    let networkStream;
    if (rangeTransport) {
      networkStream = new PDFDataTransportStream(rangeTransport, {
        disableRange,
        disableStream
      });
    } else if (!data) {
      if (!url) {
        throw new Error("getDocument - no `url` parameter provided.");
      }
      let NetworkStream;
      if (isNodeJS) {
        if (isValidFetchUrl(url)) {
          if (typeof fetch === "undefined" || typeof Response === "undefined" || !("body" in Response.prototype)) {
            throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          }
          NetworkStream = PDFFetchStream;
        } else {
          NetworkStream = PDFNodeStream;
        }
      } else {
        NetworkStream = isValidFetchUrl(url) ? PDFFetchStream : PDFNetworkStream;
      }
      networkStream = new NetworkStream({
        url,
        length,
        httpHeaders,
        withCredentials,
        rangeChunkSize,
        disableRange,
        disableStream
      });
    }
    return workerIdPromise.then((workerId) => {
      if (task.destroyed) {
        throw new Error("Loading aborted");
      }
      if (worker.destroyed) {
        throw new Error("Worker was destroyed");
      }
      const messageHandler = new MessageHandler(docId, workerId, worker.port);
      const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory);
      task._transport = transport;
      messageHandler.send("Ready", null);
    });
  }).catch(task._capability.reject);
  return task;
}
function getUrlProp(val) {
  if (val instanceof URL) {
    return val.href;
  }
  try {
    return new URL(val, window.location).href;
  } catch {
    if (isNodeJS && typeof val === "string") {
      return val;
    }
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function getDataProp(val) {
  if (isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  }
  if (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
    return val;
  }
  if (typeof val === "string") {
    return stringToBytes(val);
  }
  if (val instanceof ArrayBuffer || ArrayBuffer.isView(val) || typeof val === "object" && !isNaN(val == null ? void 0 : val.length)) {
    return new Uint8Array(val);
  }
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function isRefProxy(ref) {
  return typeof ref === "object" && Number.isInteger(ref == null ? void 0 : ref.num) && ref.num >= 0 && Number.isInteger(ref == null ? void 0 : ref.gen) && ref.gen >= 0;
}
var _docId2;
var _PDFDocumentLoadingTask = class _PDFDocumentLoadingTask {
  constructor() {
    this._capability = Promise.withResolvers();
    this._transport = null;
    this._worker = null;
    this.docId = `d${__privateWrapper(_PDFDocumentLoadingTask, _docId2)._++}`;
    this.destroyed = false;
    this.onPassword = null;
    this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var _a2, _b, _c, _d;
    this.destroyed = true;
    try {
      if ((_a2 = this._worker) == null ? void 0 : _a2.port) {
        this._worker._pendingDestroy = true;
      }
      await ((_b = this._transport) == null ? void 0 : _b.destroy());
    } catch (ex) {
      if ((_c = this._worker) == null ? void 0 : _c.port) {
        delete this._worker._pendingDestroy;
      }
      throw ex;
    }
    this._transport = null;
    (_d = this._worker) == null ? void 0 : _d.destroy();
    this._worker = null;
  }
};
_docId2 = new WeakMap();
__privateAdd(_PDFDocumentLoadingTask, _docId2, 0);
var PDFDocumentLoadingTask = _PDFDocumentLoadingTask;
var PDFDataRangeTransport = class {
  constructor(length, initialData, progressiveDone = false, contentDispositionFilename = null) {
    this.length = length;
    this.initialData = initialData;
    this.progressiveDone = progressiveDone;
    this.contentDispositionFilename = contentDispositionFilename;
    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._progressiveDoneListeners = [];
    this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(listener) {
    this._rangeListeners.push(listener);
  }
  addProgressListener(listener) {
    this._progressListeners.push(listener);
  }
  addProgressiveReadListener(listener) {
    this._progressiveReadListeners.push(listener);
  }
  addProgressiveDoneListener(listener) {
    this._progressiveDoneListeners.push(listener);
  }
  onDataRange(begin, chunk) {
    for (const listener of this._rangeListeners) {
      listener(begin, chunk);
    }
  }
  onDataProgress(loaded, total) {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressListeners) {
        listener(loaded, total);
      }
    });
  }
  onDataProgressiveRead(chunk) {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressiveReadListeners) {
        listener(chunk);
      }
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressiveDoneListeners) {
        listener();
      }
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(begin, end) {
    unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
var PDFDocumentProxy = class {
  constructor(pdfInfo, transport) {
    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(pageNumber) {
    return this._transport.getPage(pageNumber);
  }
  getPageIndex(ref) {
    return this._transport.getPageIndex(ref);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(id) {
    return this._transport.getDestination(id);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getOptionalContentConfig(renderingIntent);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(keepLoadedFonts = false) {
    return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(ref) {
    return this._transport.cachedPageNumber(ref);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
};
var _delayedCleanupTimeout, _pendingCleanup, _PDFPageProxy_instances, tryCleanup_fn, abortDelayedCleanup_fn;
var PDFPageProxy = class {
  constructor(pageIndex, pageInfo, transport, pdfBug = false) {
    __privateAdd(this, _PDFPageProxy_instances);
    __privateAdd(this, _delayedCleanupTimeout, null);
    __privateAdd(this, _pendingCleanup, false);
    this._pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = transport;
    this._stats = pdfBug ? new StatTimer() : null;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this._maybeCleanupAfterRender = false;
    this._intentStates = /* @__PURE__ */ new Map();
    this.destroyed = false;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale,
    rotation = this.rotate,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  } = {}) {
    return new PageViewport({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  getAnnotations({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getAnnotations(this._pageIndex, renderingIntent);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var _a2;
    return ((_a2 = this._transport._htmlForXfa) == null ? void 0 : _a2.children[this._pageIndex]) || null;
  }
  render({
    canvasContext,
    viewport,
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    transform = null,
    background = null,
    optionalContentConfigPromise = null,
    annotationCanvasMap = null,
    pageColors = null,
    printAnnotationStorage = null,
    isEditing = false
  }) {
    var _a2, _b;
    (_a2 = this._stats) == null ? void 0 : _a2.time("Overall");
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing);
    const {
      renderingIntent,
      cacheKey
    } = intentArgs;
    __privateSet(this, _pendingCleanup, false);
    __privateMethod(this, _PDFPageProxy_instances, abortDelayedCleanup_fn).call(this);
    optionalContentConfigPromise || (optionalContentConfigPromise = this._transport.getOptionalContentConfig(renderingIntent));
    let intentState = this._intentStates.get(cacheKey);
    if (!intentState) {
      intentState = /* @__PURE__ */ Object.create(null);
      this._intentStates.set(cacheKey, intentState);
    }
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    const intentPrint = !!(renderingIntent & RenderingIntentFlag.PRINT);
    if (!intentState.displayReadyCapability) {
      intentState.displayReadyCapability = Promise.withResolvers();
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      (_b = this._stats) == null ? void 0 : _b.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    const complete = (error) => {
      var _a3;
      intentState.renderTasks.delete(internalRenderTask);
      if (this._maybeCleanupAfterRender || intentPrint) {
        __privateSet(this, _pendingCleanup, true);
      }
      __privateMethod(this, _PDFPageProxy_instances, tryCleanup_fn).call(this, !intentPrint);
      if (error) {
        internalRenderTask.capability.reject(error);
        this._abortOperatorList({
          intentState,
          reason: error instanceof Error ? error : new Error(error)
        });
      } else {
        internalRenderTask.capability.resolve();
      }
      if (this._stats) {
        this._stats.timeEnd("Rendering");
        this._stats.timeEnd("Overall");
        if ((_a3 = globalThis.Stats) == null ? void 0 : _a3.enabled) {
          globalThis.Stats.add(this.pageNumber, this._stats);
        }
      }
    };
    const internalRenderTask = new InternalRenderTask({
      callback: complete,
      params: {
        canvasContext,
        viewport,
        transform,
        background
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap,
      operatorList: intentState.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !intentPrint,
      pdfBug: this._pdfBug,
      pageColors
    });
    (intentState.renderTasks || (intentState.renderTasks = /* @__PURE__ */ new Set())).add(internalRenderTask);
    const renderTask = internalRenderTask.task;
    Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
      var _a3;
      if (this.destroyed) {
        complete();
        return;
      }
      (_a3 = this._stats) == null ? void 0 : _a3.time("Rendering");
      if (!(optionalContentConfig.renderingIntent & renderingIntent)) {
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      }
      internalRenderTask.initializeGraphics({
        transparency,
        optionalContentConfig
      });
      internalRenderTask.operatorListChanged();
    }).catch(complete);
    return renderTask;
  }
  getOperatorList({
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    printAnnotationStorage = null,
    isEditing = false
  } = {}) {
    var _a2;
    function operatorListChanged() {
      if (intentState.operatorList.lastChunk) {
        intentState.opListReadCapability.resolve(intentState.operatorList);
        intentState.renderTasks.delete(opListTask);
      }
    }
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing, true);
    let intentState = this._intentStates.get(intentArgs.cacheKey);
    if (!intentState) {
      intentState = /* @__PURE__ */ Object.create(null);
      this._intentStates.set(intentArgs.cacheKey, intentState);
    }
    let opListTask;
    if (!intentState.opListReadCapability) {
      opListTask = /* @__PURE__ */ Object.create(null);
      opListTask.operatorListChanged = operatorListChanged;
      intentState.opListReadCapability = Promise.withResolvers();
      (intentState.renderTasks || (intentState.renderTasks = /* @__PURE__ */ new Set())).add(opListTask);
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      (_a2 = this._stats) == null ? void 0 : _a2.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    return intentState.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent = false,
    disableNormalization = false
  } = {}) {
    const TEXT_CONTENT_CHUNK_SIZE = 100;
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: includeMarkedContent === true,
      disableNormalization: disableNormalization === true
    }, {
      highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
      size(textContent) {
        return textContent.items.length;
      }
    });
  }
  getTextContent(params = {}) {
    if (this._transport._htmlForXfa) {
      return this.getXfa().then((xfa) => XfaText.textContent(xfa));
    }
    const readableStream = this.streamTextContent(params);
    return new Promise(function(resolve, reject) {
      function pump() {
        reader.read().then(function({
          value,
          done
        }) {
          if (done) {
            resolve(textContent);
            return;
          }
          textContent.lang ?? (textContent.lang = value.lang);
          Object.assign(textContent.styles, value.styles);
          textContent.items.push(...value.items);
          pump();
        }, reject);
      }
      const reader = readableStream.getReader();
      const textContent = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      pump();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    const waitOn = [];
    for (const intentState of this._intentStates.values()) {
      this._abortOperatorList({
        intentState,
        reason: new Error("Page was destroyed."),
        force: true
      });
      if (intentState.opListReadCapability) {
        continue;
      }
      for (const internalRenderTask of intentState.renderTasks) {
        waitOn.push(internalRenderTask.completed);
        internalRenderTask.cancel();
      }
    }
    this.objs.clear();
    __privateSet(this, _pendingCleanup, false);
    __privateMethod(this, _PDFPageProxy_instances, abortDelayedCleanup_fn).call(this);
    return Promise.all(waitOn);
  }
  cleanup(resetStats = false) {
    __privateSet(this, _pendingCleanup, true);
    const success = __privateMethod(this, _PDFPageProxy_instances, tryCleanup_fn).call(this, false);
    if (resetStats && success) {
      this._stats && (this._stats = new StatTimer());
    }
    return success;
  }
  _startRenderPage(transparency, cacheKey) {
    var _a2, _b;
    const intentState = this._intentStates.get(cacheKey);
    if (!intentState) {
      return;
    }
    (_a2 = this._stats) == null ? void 0 : _a2.timeEnd("Page Request");
    (_b = intentState.displayReadyCapability) == null ? void 0 : _b.resolve(transparency);
  }
  _renderPageChunk(operatorListChunk, intentState) {
    for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
      intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
      intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
    }
    intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
    intentState.operatorList.separateAnnots = operatorListChunk.separateAnnots;
    for (const internalRenderTask of intentState.renderTasks) {
      internalRenderTask.operatorListChanged();
    }
    if (operatorListChunk.lastChunk) {
      __privateMethod(this, _PDFPageProxy_instances, tryCleanup_fn).call(this, true);
    }
  }
  _pumpOperatorList({
    renderingIntent,
    cacheKey,
    annotationStorageSerializable,
    modifiedIds
  }) {
    const {
      map,
      transfer
    } = annotationStorageSerializable;
    const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: renderingIntent,
      cacheKey,
      annotationStorage: map,
      modifiedIds
    }, transfer);
    const reader = readableStream.getReader();
    const intentState = this._intentStates.get(cacheKey);
    intentState.streamReader = reader;
    const pump = () => {
      reader.read().then(({
        value,
        done
      }) => {
        if (done) {
          intentState.streamReader = null;
          return;
        }
        if (this._transport.destroyed) {
          return;
        }
        this._renderPageChunk(value, intentState);
        pump();
      }, (reason) => {
        intentState.streamReader = null;
        if (this._transport.destroyed) {
          return;
        }
        if (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;
          for (const internalRenderTask of intentState.renderTasks) {
            internalRenderTask.operatorListChanged();
          }
          __privateMethod(this, _PDFPageProxy_instances, tryCleanup_fn).call(this, true);
        }
        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(reason);
        } else if (intentState.opListReadCapability) {
          intentState.opListReadCapability.reject(reason);
        } else {
          throw reason;
        }
      });
    };
    pump();
  }
  _abortOperatorList({
    intentState,
    reason,
    force = false
  }) {
    if (!intentState.streamReader) {
      return;
    }
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    if (!force) {
      if (intentState.renderTasks.size > 0) {
        return;
      }
      if (reason instanceof RenderingCancelledException) {
        let delay = RENDERING_CANCELLED_TIMEOUT;
        if (reason.extraDelay > 0 && reason.extraDelay < 1e3) {
          delay += reason.extraDelay;
        }
        intentState.streamReaderCancelTimeout = setTimeout(() => {
          intentState.streamReaderCancelTimeout = null;
          this._abortOperatorList({
            intentState,
            reason,
            force: true
          });
        }, delay);
        return;
      }
    }
    intentState.streamReader.cancel(new AbortException(reason.message)).catch(() => {
    });
    intentState.streamReader = null;
    if (this._transport.destroyed) {
      return;
    }
    for (const [curCacheKey, curIntentState] of this._intentStates) {
      if (curIntentState === intentState) {
        this._intentStates.delete(curCacheKey);
        break;
      }
    }
    this.cleanup();
  }
  get stats() {
    return this._stats;
  }
};
_delayedCleanupTimeout = new WeakMap();
_pendingCleanup = new WeakMap();
_PDFPageProxy_instances = new WeakSet();
tryCleanup_fn = function(delayed = false) {
  __privateMethod(this, _PDFPageProxy_instances, abortDelayedCleanup_fn).call(this);
  if (!__privateGet(this, _pendingCleanup) || this.destroyed) {
    return false;
  }
  if (delayed) {
    __privateSet(this, _delayedCleanupTimeout, setTimeout(() => {
      __privateSet(this, _delayedCleanupTimeout, null);
      __privateMethod(this, _PDFPageProxy_instances, tryCleanup_fn).call(this, false);
    }, DELAYED_CLEANUP_TIMEOUT));
    return false;
  }
  for (const {
    renderTasks,
    operatorList
  } of this._intentStates.values()) {
    if (renderTasks.size > 0 || !operatorList.lastChunk) {
      return false;
    }
  }
  this._intentStates.clear();
  this.objs.clear();
  __privateSet(this, _pendingCleanup, false);
  return true;
};
abortDelayedCleanup_fn = function() {
  if (__privateGet(this, _delayedCleanupTimeout)) {
    clearTimeout(__privateGet(this, _delayedCleanupTimeout));
    __privateSet(this, _delayedCleanupTimeout, null);
  }
};
var _listeners, _deferred;
var LoopbackPort = class {
  constructor() {
    __privateAdd(this, _listeners, /* @__PURE__ */ new Map());
    __privateAdd(this, _deferred, Promise.resolve());
  }
  postMessage(obj, transfer) {
    const event = {
      data: structuredClone(obj, transfer ? {
        transfer
      } : null)
    };
    __privateGet(this, _deferred).then(() => {
      for (const [listener] of __privateGet(this, _listeners)) {
        listener.call(this, event);
      }
    });
  }
  addEventListener(name, listener, options = null) {
    let rmAbort = null;
    if ((options == null ? void 0 : options.signal) instanceof AbortSignal) {
      const {
        signal
      } = options;
      if (signal.aborted) {
        warn("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const onAbort = () => this.removeEventListener(name, listener);
      rmAbort = () => signal.removeEventListener("abort", onAbort);
      signal.addEventListener("abort", onAbort);
    }
    __privateGet(this, _listeners).set(listener, rmAbort);
  }
  removeEventListener(name, listener) {
    const rmAbort = __privateGet(this, _listeners).get(listener);
    rmAbort == null ? void 0 : rmAbort();
    __privateGet(this, _listeners).delete(listener);
  }
  terminate() {
    for (const [, rmAbort] of __privateGet(this, _listeners)) {
      rmAbort == null ? void 0 : rmAbort();
    }
    __privateGet(this, _listeners).clear();
  }
};
_listeners = new WeakMap();
_deferred = new WeakMap();
var _fakeWorkerId, _isWorkerDisabled, _workerPorts, _PDFWorker_instances, resolve_fn, _PDFWorker_static, mainThreadWorkerMessageHandler_get;
var _PDFWorker = class _PDFWorker {
  constructor({
    name = null,
    port = null,
    verbosity: verbosity2 = getVerbosityLevel()
  } = {}) {
    __privateAdd(this, _PDFWorker_instances);
    var _a2;
    this.name = name;
    this.destroyed = false;
    this.verbosity = verbosity2;
    this._readyCapability = Promise.withResolvers();
    this._port = null;
    this._webWorker = null;
    this._messageHandler = null;
    if (port) {
      if ((_a2 = __privateGet(_PDFWorker, _workerPorts)) == null ? void 0 : _a2.has(port)) {
        throw new Error("Cannot use more than one PDFWorker per port.");
      }
      (__privateGet(_PDFWorker, _workerPorts) || __privateSet(_PDFWorker, _workerPorts, /* @__PURE__ */ new WeakMap())).set(port, this);
      this._initializeFromPort(port);
      return;
    }
    this._initialize();
  }
  get promise() {
    return this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(port) {
    this._port = port;
    this._messageHandler = new MessageHandler("main", "worker", port);
    this._messageHandler.on("ready", function() {
    });
    __privateMethod(this, _PDFWorker_instances, resolve_fn).call(this);
  }
  _initialize() {
    if (__privateGet(_PDFWorker, _isWorkerDisabled) || __privateGet(_PDFWorker, _PDFWorker_static, mainThreadWorkerMessageHandler_get)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc
    } = _PDFWorker;
    try {
      if (!_PDFWorker._isSameOrigin(window.location.href, workerSrc)) {
        workerSrc = _PDFWorker._createCDNWrapper(new URL(workerSrc, window.location).href);
      }
      const worker = new Worker(workerSrc, {
        type: "module"
      });
      const messageHandler = new MessageHandler("main", "worker", worker);
      const terminateEarly = () => {
        ac.abort();
        messageHandler.destroy();
        worker.terminate();
        if (this.destroyed) {
          this._readyCapability.reject(new Error("Worker was destroyed"));
        } else {
          this._setupFakeWorker();
        }
      };
      const ac = new AbortController();
      worker.addEventListener("error", () => {
        if (!this._webWorker) {
          terminateEarly();
        }
      }, {
        signal: ac.signal
      });
      messageHandler.on("test", (data) => {
        ac.abort();
        if (this.destroyed || !data) {
          terminateEarly();
          return;
        }
        this._messageHandler = messageHandler;
        this._port = worker;
        this._webWorker = worker;
        __privateMethod(this, _PDFWorker_instances, resolve_fn).call(this);
      });
      messageHandler.on("ready", (data) => {
        ac.abort();
        if (this.destroyed) {
          terminateEarly();
          return;
        }
        try {
          sendTest();
        } catch {
          this._setupFakeWorker();
        }
      });
      const sendTest = () => {
        const testObj = new Uint8Array();
        messageHandler.send("test", testObj, [testObj.buffer]);
      };
      sendTest();
      return;
    } catch {
      info("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    if (!__privateGet(_PDFWorker, _isWorkerDisabled)) {
      warn("Setting up fake worker.");
      __privateSet(_PDFWorker, _isWorkerDisabled, true);
    }
    _PDFWorker._setupFakeWorkerGlobal.then((WorkerMessageHandler) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const port = new LoopbackPort();
      this._port = port;
      const id = `fake${__privateWrapper(_PDFWorker, _fakeWorkerId)._++}`;
      const workerHandler = new MessageHandler(id + "_worker", id, port);
      WorkerMessageHandler.setup(workerHandler, port);
      this._messageHandler = new MessageHandler(id, id + "_worker", port);
      __privateMethod(this, _PDFWorker_instances, resolve_fn).call(this);
    }).catch((reason) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
    });
  }
  destroy() {
    var _a2, _b, _c;
    this.destroyed = true;
    (_a2 = this._webWorker) == null ? void 0 : _a2.terminate();
    this._webWorker = null;
    (_b = __privateGet(_PDFWorker, _workerPorts)) == null ? void 0 : _b.delete(this._port);
    this._port = null;
    (_c = this._messageHandler) == null ? void 0 : _c.destroy();
    this._messageHandler = null;
  }
  static fromPort(params) {
    var _a2;
    if (!(params == null ? void 0 : params.port)) {
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    }
    const cachedPort = (_a2 = __privateGet(this, _workerPorts)) == null ? void 0 : _a2.get(params.port);
    if (cachedPort) {
      if (cachedPort._pendingDestroy) {
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      }
      return cachedPort;
    }
    return new _PDFWorker(params);
  }
  static get workerSrc() {
    if (GlobalWorkerOptions.workerSrc) {
      return GlobalWorkerOptions.workerSrc;
    }
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    const loader = async () => {
      if (__privateGet(this, _PDFWorker_static, mainThreadWorkerMessageHandler_get)) {
        return __privateGet(this, _PDFWorker_static, mainThreadWorkerMessageHandler_get);
      }
      const worker = await import(
        /*webpackIgnore: true*/
        this.workerSrc
      );
      return worker.WorkerMessageHandler;
    };
    return shadow(this, "_setupFakeWorkerGlobal", loader());
  }
};
_fakeWorkerId = new WeakMap();
_isWorkerDisabled = new WeakMap();
_workerPorts = new WeakMap();
_PDFWorker_instances = new WeakSet();
resolve_fn = function() {
  this._readyCapability.resolve();
  this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
};
_PDFWorker_static = new WeakSet();
mainThreadWorkerMessageHandler_get = function() {
  var _a2;
  try {
    return ((_a2 = globalThis.pdfjsWorker) == null ? void 0 : _a2.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
};
__privateAdd(_PDFWorker, _PDFWorker_static);
__privateAdd(_PDFWorker, _fakeWorkerId, 0);
__privateAdd(_PDFWorker, _isWorkerDisabled, false);
__privateAdd(_PDFWorker, _workerPorts);
(() => {
  if (isNodeJS) {
    __privateSet(_PDFWorker, _isWorkerDisabled, true);
    GlobalWorkerOptions.workerSrc || (GlobalWorkerOptions.workerSrc = "./pdf.worker.mjs");
  }
  _PDFWorker._isSameOrigin = (baseUrl, otherUrl) => {
    let base;
    try {
      base = new URL(baseUrl);
      if (!base.origin || base.origin === "null") {
        return false;
      }
    } catch {
      return false;
    }
    const other = new URL(otherUrl, base);
    return base.origin === other.origin;
  };
  _PDFWorker._createCDNWrapper = (url) => {
    const wrapper = `await import("${url}");`;
    return URL.createObjectURL(new Blob([wrapper], {
      type: "text/javascript"
    }));
  };
})();
var PDFWorker = _PDFWorker;
var _methodPromises, _pageCache, _pagePromises, _pageRefCache, _passwordCapability, _WorkerTransport_instances, cacheSimpleMethod_fn;
var WorkerTransport = class {
  constructor(messageHandler, loadingTask, networkStream, params, factory) {
    __privateAdd(this, _WorkerTransport_instances);
    __privateAdd(this, _methodPromises, /* @__PURE__ */ new Map());
    __privateAdd(this, _pageCache, /* @__PURE__ */ new Map());
    __privateAdd(this, _pagePromises, /* @__PURE__ */ new Map());
    __privateAdd(this, _pageRefCache, /* @__PURE__ */ new Map());
    __privateAdd(this, _passwordCapability, null);
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new FontLoader({
      ownerDocument: params.ownerDocument,
      styleElement: params.styleElement
    });
    this.loadingParams = params.loadingParams;
    this._params = params;
    this.canvasFactory = factory.canvasFactory;
    this.filterFactory = factory.filterFactory;
    this.cMapReaderFactory = factory.cMapReaderFactory;
    this.standardFontDataFactory = factory.standardFontDataFactory;
    this.destroyed = false;
    this.destroyCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.downloadInfoCapability = Promise.withResolvers();
    this.setupMessageHandler();
  }
  get annotationStorage() {
    return shadow(this, "annotationStorage", new AnnotationStorage());
  }
  getRenderingIntent(intent, annotationMode = AnnotationMode.ENABLE, printAnnotationStorage = null, isEditing = false, isOpList = false) {
    let renderingIntent = RenderingIntentFlag.DISPLAY;
    let annotationStorageSerializable = SerializableEmpty;
    switch (intent) {
      case "any":
        renderingIntent = RenderingIntentFlag.ANY;
        break;
      case "display":
        break;
      case "print":
        renderingIntent = RenderingIntentFlag.PRINT;
        break;
      default:
        warn(`getRenderingIntent - invalid intent: ${intent}`);
    }
    const annotationStorage = renderingIntent & RenderingIntentFlag.PRINT && printAnnotationStorage instanceof PrintAnnotationStorage ? printAnnotationStorage : this.annotationStorage;
    switch (annotationMode) {
      case AnnotationMode.DISABLE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_DISABLE;
        break;
      case AnnotationMode.ENABLE:
        break;
      case AnnotationMode.ENABLE_FORMS:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_FORMS;
        break;
      case AnnotationMode.ENABLE_STORAGE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_STORAGE;
        annotationStorageSerializable = annotationStorage.serializable;
        break;
      default:
        warn(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);
    }
    if (isEditing) {
      renderingIntent += RenderingIntentFlag.IS_EDITING;
    }
    if (isOpList) {
      renderingIntent += RenderingIntentFlag.OPLIST;
    }
    const {
      ids: modifiedIds,
      hash: modifiedIdsHash
    } = annotationStorage.modifiedIds;
    const cacheKeyBuf = [renderingIntent, annotationStorageSerializable.hash, modifiedIdsHash];
    return {
      renderingIntent,
      cacheKey: cacheKeyBuf.join("_"),
      annotationStorageSerializable,
      modifiedIds
    };
  }
  destroy() {
    var _a2;
    if (this.destroyCapability) {
      return this.destroyCapability.promise;
    }
    this.destroyed = true;
    this.destroyCapability = Promise.withResolvers();
    (_a2 = __privateGet(this, _passwordCapability)) == null ? void 0 : _a2.reject(new Error("Worker was destroyed during onPassword callback"));
    const waitOn = [];
    for (const page of __privateGet(this, _pageCache).values()) {
      waitOn.push(page._destroy());
    }
    __privateGet(this, _pageCache).clear();
    __privateGet(this, _pagePromises).clear();
    __privateGet(this, _pageRefCache).clear();
    if (this.hasOwnProperty("annotationStorage")) {
      this.annotationStorage.resetModified();
    }
    const terminated = this.messageHandler.sendWithPromise("Terminate", null);
    waitOn.push(terminated);
    Promise.all(waitOn).then(() => {
      var _a3, _b;
      this.commonObjs.clear();
      this.fontLoader.clear();
      __privateGet(this, _methodPromises).clear();
      this.filterFactory.destroy();
      TextLayer.cleanup();
      (_a3 = this._networkStream) == null ? void 0 : _a3.cancelAllRequests(new AbortException("Worker was terminated."));
      (_b = this.messageHandler) == null ? void 0 : _b.destroy();
      this.messageHandler = null;
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler,
      loadingTask
    } = this;
    messageHandler.on("GetReader", (data, sink) => {
      assert(this._networkStream, "GetReader - no `IPDFStream` instance available.");
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = (evt) => {
        this._lastProgress = {
          loaded: evt.loaded,
          total: evt.total
        };
      };
      sink.onPull = () => {
        this._fullReader.read().then(function({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch((reason) => {
          sink.error(reason);
        });
      };
      sink.onCancel = (reason) => {
        this._fullReader.cancel(reason);
        sink.ready.catch((readyReason) => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("ReaderHeadersReady", async (data) => {
      var _a2;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      } = this._fullReader;
      if (!isStreamingSupported || !isRangeSupported) {
        if (this._lastProgress) {
          (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, this._lastProgress);
        }
        this._fullReader.onProgress = (evt) => {
          var _a3;
          (_a3 = loadingTask.onProgress) == null ? void 0 : _a3.call(loadingTask, {
            loaded: evt.loaded,
            total: evt.total
          });
        };
      }
      return {
        isStreamingSupported,
        isRangeSupported,
        contentLength
      };
    });
    messageHandler.on("GetRangeReader", (data, sink) => {
      assert(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
      if (!rangeReader) {
        sink.close();
        return;
      }
      sink.onPull = () => {
        rangeReader.read().then(function({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch((reason) => {
          sink.error(reason);
        });
      };
      sink.onCancel = (reason) => {
        rangeReader.cancel(reason);
        sink.ready.catch((readyReason) => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("GetDoc", ({
      pdfInfo
    }) => {
      this._numPages = pdfInfo.numPages;
      this._htmlForXfa = pdfInfo.htmlForXfa;
      delete pdfInfo.htmlForXfa;
      loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
    });
    messageHandler.on("DocException", (ex) => {
      loadingTask._capability.reject(wrapReason(ex));
    });
    messageHandler.on("PasswordRequest", (ex) => {
      __privateSet(this, _passwordCapability, Promise.withResolvers());
      try {
        if (!loadingTask.onPassword) {
          throw wrapReason(ex);
        }
        const updatePassword = (password) => {
          if (password instanceof Error) {
            __privateGet(this, _passwordCapability).reject(password);
          } else {
            __privateGet(this, _passwordCapability).resolve({
              password
            });
          }
        };
        loadingTask.onPassword(updatePassword, ex.code);
      } catch (err) {
        __privateGet(this, _passwordCapability).reject(err);
      }
      return __privateGet(this, _passwordCapability).promise;
    });
    messageHandler.on("DataLoaded", (data) => {
      var _a2;
      (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, {
        loaded: data.length,
        total: data.length
      });
      this.downloadInfoCapability.resolve(data);
    });
    messageHandler.on("StartRenderPage", (data) => {
      if (this.destroyed) {
        return;
      }
      const page = __privateGet(this, _pageCache).get(data.pageIndex);
      page._startRenderPage(data.transparency, data.cacheKey);
    });
    messageHandler.on("commonobj", ([id, type, exportedData]) => {
      var _a2;
      if (this.destroyed) {
        return null;
      }
      if (this.commonObjs.has(id)) {
        return null;
      }
      switch (type) {
        case "Font":
          const {
            disableFontFace,
            fontExtraProperties,
            pdfBug
          } = this._params;
          if ("error" in exportedData) {
            const exportedError = exportedData.error;
            warn(`Error during font loading: ${exportedError}`);
            this.commonObjs.resolve(id, exportedError);
            break;
          }
          const inspectFont = pdfBug && ((_a2 = globalThis.FontInspector) == null ? void 0 : _a2.enabled) ? (font2, url) => globalThis.FontInspector.fontAdded(font2, url) : null;
          const font = new FontFaceObject(exportedData, {
            disableFontFace,
            fontExtraProperties,
            inspectFont
          });
          this.fontLoader.bind(font).catch(() => messageHandler.sendWithPromise("FontFallback", {
            id
          })).finally(() => {
            if (!fontExtraProperties && font.data) {
              font.data = null;
            }
            this.commonObjs.resolve(id, font);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef
          } = exportedData;
          assert(imageRef, "The imageRef must be defined.");
          for (const pageProxy of __privateGet(this, _pageCache).values()) {
            for (const [, data] of pageProxy.objs) {
              if ((data == null ? void 0 : data.ref) !== imageRef) {
                continue;
              }
              if (!data.dataLen) {
                return null;
              }
              this.commonObjs.resolve(id, structuredClone(data));
              return data.dataLen;
            }
          }
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(id, exportedData);
          break;
        default:
          throw new Error(`Got unknown common object type ${type}`);
      }
      return null;
    });
    messageHandler.on("obj", ([id, pageIndex, type, imageData]) => {
      var _a2;
      if (this.destroyed) {
        return;
      }
      const pageProxy = __privateGet(this, _pageCache).get(pageIndex);
      if (pageProxy.objs.has(id)) {
        return;
      }
      if (pageProxy._intentStates.size === 0) {
        (_a2 = imageData == null ? void 0 : imageData.bitmap) == null ? void 0 : _a2.close();
        return;
      }
      switch (type) {
        case "Image":
          pageProxy.objs.resolve(id, imageData);
          if ((imageData == null ? void 0 : imageData.dataLen) > MAX_IMAGE_SIZE_TO_CACHE) {
            pageProxy._maybeCleanupAfterRender = true;
          }
          break;
        case "Pattern":
          pageProxy.objs.resolve(id, imageData);
          break;
        default:
          throw new Error(`Got unknown object type ${type}`);
      }
    });
    messageHandler.on("DocProgress", (data) => {
      var _a2;
      if (this.destroyed) {
        return;
      }
      (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, {
        loaded: data.loaded,
        total: data.total
      });
    });
    messageHandler.on("FetchBuiltInCMap", async (data) => {
      if (this.destroyed) {
        throw new Error("Worker was destroyed.");
      }
      if (!this.cMapReaderFactory) {
        throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
      }
      return this.cMapReaderFactory.fetch(data);
    });
    messageHandler.on("FetchStandardFontData", async (data) => {
      if (this.destroyed) {
        throw new Error("Worker was destroyed.");
      }
      if (!this.standardFontDataFactory) {
        throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
      }
      return this.standardFontDataFactory.fetch(data);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var _a2;
    if (this.annotationStorage.size <= 0) {
      warn("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    }
    const {
      map,
      transfer
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: map,
      filename: ((_a2 = this._fullReader) == null ? void 0 : _a2.filename) ?? null
    }, transfer).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(pageNumber) {
    if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
      return Promise.reject(new Error("Invalid page request."));
    }
    const pageIndex = pageNumber - 1, cachedPromise = __privateGet(this, _pagePromises).get(pageIndex);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex
    }).then((pageInfo) => {
      if (this.destroyed) {
        throw new Error("Transport destroyed");
      }
      if (pageInfo.refStr) {
        __privateGet(this, _pageRefCache).set(pageInfo.refStr, pageNumber);
      }
      const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.pdfBug);
      __privateGet(this, _pageCache).set(pageIndex, page);
      return page;
    });
    __privateGet(this, _pagePromises).set(pageIndex, promise);
    return promise;
  }
  getPageIndex(ref) {
    if (!isRefProxy(ref)) {
      return Promise.reject(new Error("Invalid pageIndex request."));
    }
    return this.messageHandler.sendWithPromise("GetPageIndex", {
      num: ref.num,
      gen: ref.gen
    });
  }
  getAnnotations(pageIndex, intent) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex,
      intent
    });
  }
  getFieldObjects() {
    return __privateMethod(this, _WorkerTransport_instances, cacheSimpleMethod_fn).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return __privateMethod(this, _WorkerTransport_instances, cacheSimpleMethod_fn).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(id) {
    if (typeof id !== "string") {
      return Promise.reject(new Error("Invalid destination request."));
    }
    return this.messageHandler.sendWithPromise("GetDestination", {
      id
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return __privateMethod(this, _WorkerTransport_instances, cacheSimpleMethod_fn).call(this, "GetDocJSActions");
  }
  getPageJSActions(pageIndex) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex
    });
  }
  getStructTree(pageIndex) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(renderingIntent) {
    return __privateMethod(this, _WorkerTransport_instances, cacheSimpleMethod_fn).call(this, "GetOptionalContentConfig").then((data) => new OptionalContentConfig(data, renderingIntent));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const name = "GetMetadata", cachedPromise = __privateGet(this, _methodPromises).get(name);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise(name, null).then((results) => {
      var _a2, _b;
      return {
        info: results[0],
        metadata: results[1] ? new Metadata(results[1]) : null,
        contentDispositionFilename: ((_a2 = this._fullReader) == null ? void 0 : _a2.filename) ?? null,
        contentLength: ((_b = this._fullReader) == null ? void 0 : _b.contentLength) ?? null
      };
    });
    __privateGet(this, _methodPromises).set(name, promise);
    return promise;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(keepLoadedFonts = false) {
    if (this.destroyed) {
      return;
    }
    await this.messageHandler.sendWithPromise("Cleanup", null);
    for (const page of __privateGet(this, _pageCache).values()) {
      const cleanupSuccessful = page.cleanup();
      if (!cleanupSuccessful) {
        throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);
      }
    }
    this.commonObjs.clear();
    if (!keepLoadedFonts) {
      this.fontLoader.clear();
    }
    __privateGet(this, _methodPromises).clear();
    this.filterFactory.destroy(true);
    TextLayer.cleanup();
  }
  cachedPageNumber(ref) {
    if (!isRefProxy(ref)) {
      return null;
    }
    const refStr = ref.gen === 0 ? `${ref.num}R` : `${ref.num}R${ref.gen}`;
    return __privateGet(this, _pageRefCache).get(refStr) ?? null;
  }
};
_methodPromises = new WeakMap();
_pageCache = new WeakMap();
_pagePromises = new WeakMap();
_pageRefCache = new WeakMap();
_passwordCapability = new WeakMap();
_WorkerTransport_instances = new WeakSet();
cacheSimpleMethod_fn = function(name, data = null) {
  const cachedPromise = __privateGet(this, _methodPromises).get(name);
  if (cachedPromise) {
    return cachedPromise;
  }
  const promise = this.messageHandler.sendWithPromise(name, data);
  __privateGet(this, _methodPromises).set(name, promise);
  return promise;
};
var INITIAL_DATA = Symbol("INITIAL_DATA");
var _objs, _PDFObjects_instances, ensureObj_fn;
var PDFObjects = class {
  constructor() {
    __privateAdd(this, _PDFObjects_instances);
    __privateAdd(this, _objs, /* @__PURE__ */ Object.create(null));
  }
  get(objId, callback = null) {
    if (callback) {
      const obj2 = __privateMethod(this, _PDFObjects_instances, ensureObj_fn).call(this, objId);
      obj2.promise.then(() => callback(obj2.data));
      return null;
    }
    const obj = __privateGet(this, _objs)[objId];
    if (!obj || obj.data === INITIAL_DATA) {
      throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
    }
    return obj.data;
  }
  has(objId) {
    const obj = __privateGet(this, _objs)[objId];
    return !!obj && obj.data !== INITIAL_DATA;
  }
  delete(objId) {
    const obj = __privateGet(this, _objs)[objId];
    if (!obj || obj.data === INITIAL_DATA) {
      return false;
    }
    delete __privateGet(this, _objs)[objId];
    return true;
  }
  resolve(objId, data = null) {
    const obj = __privateMethod(this, _PDFObjects_instances, ensureObj_fn).call(this, objId);
    obj.data = data;
    obj.resolve();
  }
  clear() {
    var _a2;
    for (const objId in __privateGet(this, _objs)) {
      const {
        data
      } = __privateGet(this, _objs)[objId];
      (_a2 = data == null ? void 0 : data.bitmap) == null ? void 0 : _a2.close();
    }
    __privateSet(this, _objs, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const objId in __privateGet(this, _objs)) {
      const {
        data
      } = __privateGet(this, _objs)[objId];
      if (data === INITIAL_DATA) {
        continue;
      }
      yield [objId, data];
    }
  }
};
_objs = new WeakMap();
_PDFObjects_instances = new WeakSet();
ensureObj_fn = function(objId) {
  var _a2;
  return (_a2 = __privateGet(this, _objs))[objId] || (_a2[objId] = {
    ...Promise.withResolvers(),
    data: INITIAL_DATA
  });
};
var _internalRenderTask;
var RenderTask = class {
  constructor(internalRenderTask) {
    __privateAdd(this, _internalRenderTask, null);
    __privateSet(this, _internalRenderTask, internalRenderTask);
    this.onContinue = null;
  }
  get promise() {
    return __privateGet(this, _internalRenderTask).capability.promise;
  }
  cancel(extraDelay = 0) {
    __privateGet(this, _internalRenderTask).cancel(null, extraDelay);
  }
  get separateAnnots() {
    const {
      separateAnnots
    } = __privateGet(this, _internalRenderTask).operatorList;
    if (!separateAnnots) {
      return false;
    }
    const {
      annotationCanvasMap
    } = __privateGet(this, _internalRenderTask);
    return separateAnnots.form || separateAnnots.canvas && (annotationCanvasMap == null ? void 0 : annotationCanvasMap.size) > 0;
  }
};
_internalRenderTask = new WeakMap();
var _rAF, _canvasInUse;
var _InternalRenderTask = class _InternalRenderTask {
  constructor({
    callback,
    params,
    objs,
    commonObjs,
    annotationCanvasMap,
    operatorList,
    pageIndex,
    canvasFactory,
    filterFactory,
    useRequestAnimationFrame = false,
    pdfBug = false,
    pageColors = null
  }) {
    __privateAdd(this, _rAF, null);
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.annotationCanvasMap = annotationCanvasMap;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this._pageIndex = pageIndex;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this._pdfBug = pdfBug;
    this.pageColors = pageColors;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
    this.cancelled = false;
    this.capability = Promise.withResolvers();
    this.task = new RenderTask(this);
    this._cancelBound = this.cancel.bind(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency = false,
    optionalContentConfig
  }) {
    var _a2, _b;
    if (this.cancelled) {
      return;
    }
    if (this._canvas) {
      if (__privateGet(_InternalRenderTask, _canvasInUse).has(this._canvas)) {
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      }
      __privateGet(_InternalRenderTask, _canvasInUse).add(this._canvas);
    }
    if (this._pdfBug && ((_a2 = globalThis.StepperManager) == null ? void 0 : _a2.enabled)) {
      this.stepper = globalThis.StepperManager.create(this._pageIndex);
      this.stepper.init(this.operatorList);
      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
    }
    const {
      canvasContext,
      viewport,
      transform,
      background
    } = this.params;
    this.gfx = new CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig
    }, this.annotationCanvasMap, this.pageColors);
    this.gfx.beginDrawing({
      transform,
      viewport,
      transparency,
      background
    });
    this.operatorListIdx = 0;
    this.graphicsReady = true;
    (_b = this.graphicsReadyCallback) == null ? void 0 : _b.call(this);
  }
  cancel(error = null, extraDelay = 0) {
    var _a2;
    this.running = false;
    this.cancelled = true;
    (_a2 = this.gfx) == null ? void 0 : _a2.endDrawing();
    if (__privateGet(this, _rAF)) {
      window.cancelAnimationFrame(__privateGet(this, _rAF));
      __privateSet(this, _rAF, null);
    }
    __privateGet(_InternalRenderTask, _canvasInUse).delete(this._canvas);
    this.callback(error || new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, extraDelay));
  }
  operatorListChanged() {
    var _a2;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (_a2 = this.stepper) == null ? void 0 : _a2.updateOperatorList(this.operatorList);
    if (this.running) {
      return;
    }
    this._continue();
  }
  _continue() {
    this.running = true;
    if (this.cancelled) {
      return;
    }
    if (this.task.onContinue) {
      this.task.onContinue(this._scheduleNextBound);
    } else {
      this._scheduleNext();
    }
  }
  _scheduleNext() {
    if (this._useRequestAnimationFrame) {
      __privateSet(this, _rAF, window.requestAnimationFrame(() => {
        __privateSet(this, _rAF, null);
        this._nextBound().catch(this._cancelBound);
      }));
    } else {
      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
  }
  async _next() {
    if (this.cancelled) {
      return;
    }
    this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
    if (this.operatorListIdx === this.operatorList.argsArray.length) {
      this.running = false;
      if (this.operatorList.lastChunk) {
        this.gfx.endDrawing();
        __privateGet(_InternalRenderTask, _canvasInUse).delete(this._canvas);
        this.callback();
      }
    }
  }
};
_rAF = new WeakMap();
_canvasInUse = new WeakMap();
__privateAdd(_InternalRenderTask, _canvasInUse, /* @__PURE__ */ new WeakSet());
var InternalRenderTask = _InternalRenderTask;
var version = "4.10.38";
var build = "f9bea397f";
function makeColorComp(n) {
  return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
}
function scaleAndClamp(x) {
  return Math.max(0, Math.min(255, 255 * x));
}
var ColorConverters = class {
  static CMYK_G([c, y, m, k]) {
    return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
  }
  static G_CMYK([g]) {
    return ["CMYK", 0, 0, 0, 1 - g];
  }
  static G_RGB([g]) {
    return ["RGB", g, g, g];
  }
  static G_rgb([g]) {
    g = scaleAndClamp(g);
    return [g, g, g];
  }
  static G_HTML([g]) {
    const G = makeColorComp(g);
    return `#${G}${G}${G}`;
  }
  static RGB_G([r, g, b]) {
    return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
  }
  static RGB_rgb(color) {
    return color.map(scaleAndClamp);
  }
  static RGB_HTML(color) {
    return `#${color.map(makeColorComp).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([c, y, m, k]) {
    return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
  }
  static CMYK_rgb([c, y, m, k]) {
    return [scaleAndClamp(1 - Math.min(1, c + k)), scaleAndClamp(1 - Math.min(1, m + k)), scaleAndClamp(1 - Math.min(1, y + k))];
  }
  static CMYK_HTML(components) {
    const rgb = this.CMYK_RGB(components).slice(1);
    return this.RGB_HTML(rgb);
  }
  static RGB_CMYK([r, g, b]) {
    const c = 1 - r;
    const m = 1 - g;
    const y = 1 - b;
    const k = Math.min(c, m, y);
    return ["CMYK", c, m, y, k];
  }
};
var BaseSVGFactory = class {
  create(width, height, skipDimensions = false) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid SVG dimensions");
    }
    const svg = this._createSVG("svg:svg");
    svg.setAttribute("version", "1.1");
    if (!skipDimensions) {
      svg.setAttribute("width", `${width}px`);
      svg.setAttribute("height", `${height}px`);
    }
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    return svg;
  }
  createElement(type) {
    if (typeof type !== "string") {
      throw new Error("Invalid SVG element type");
    }
    return this._createSVG(type);
  }
  _createSVG(type) {
    unreachable("Abstract method `_createSVG` called.");
  }
};
var DOMSVGFactory = class extends BaseSVGFactory {
  _createSVG(type) {
    return document.createElementNS(SVG_NS, type);
  }
};
var XfaLayer = class {
  static setupStorage(html, id, element, storage, intent) {
    const storedData = storage.getValue(id, {
      value: null
    });
    switch (element.name) {
      case "textarea":
        if (storedData.value !== null) {
          html.textContent = storedData.value;
        }
        if (intent === "print") {
          break;
        }
        html.addEventListener("input", (event) => {
          storage.setValue(id, {
            value: event.target.value
          });
        });
        break;
      case "input":
        if (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
          if (storedData.value === element.attributes.xfaOn) {
            html.setAttribute("checked", true);
          } else if (storedData.value === element.attributes.xfaOff) {
            html.removeAttribute("checked");
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("change", (event) => {
            storage.setValue(id, {
              value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (storedData.value !== null) {
            html.setAttribute("value", storedData.value);
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("input", (event) => {
            storage.setValue(id, {
              value: event.target.value
            });
          });
        }
        break;
      case "select":
        if (storedData.value !== null) {
          html.setAttribute("value", storedData.value);
          for (const option of element.children) {
            if (option.attributes.value === storedData.value) {
              option.attributes.selected = true;
            } else if (option.attributes.hasOwnProperty("selected")) {
              delete option.attributes.selected;
            }
          }
        }
        html.addEventListener("input", (event) => {
          const options = event.target.options;
          const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
          storage.setValue(id, {
            value
          });
        });
        break;
    }
  }
  static setAttributes({
    html,
    element,
    storage = null,
    intent,
    linkService
  }) {
    const {
      attributes
    } = element;
    const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
    if (attributes.type === "radio") {
      attributes.name = `${attributes.name}-${intent}`;
    }
    for (const [key, value] of Object.entries(attributes)) {
      if (value === null || value === void 0) {
        continue;
      }
      switch (key) {
        case "class":
          if (value.length) {
            html.setAttribute(key, value.join(" "));
          }
          break;
        case "dataId":
          break;
        case "id":
          html.setAttribute("data-element-id", value);
          break;
        case "style":
          Object.assign(html.style, value);
          break;
        case "textContent":
          html.textContent = value;
          break;
        default:
          if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
            html.setAttribute(key, value);
          }
      }
    }
    if (isHTMLAnchorElement) {
      linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
    }
    if (storage && attributes.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  static render(parameters) {
    var _a2, _b;
    const storage = parameters.annotationStorage;
    const linkService = parameters.linkService;
    const root = parameters.xfaHtml;
    const intent = parameters.intent || "display";
    const rootHtml = document.createElement(root.name);
    if (root.attributes) {
      this.setAttributes({
        html: rootHtml,
        element: root,
        intent,
        linkService
      });
    }
    const isNotForRichText = intent !== "richText";
    const rootDiv = parameters.div;
    rootDiv.append(rootHtml);
    if (parameters.viewport) {
      const transform = `matrix(${parameters.viewport.transform.join(",")})`;
      rootDiv.style.transform = transform;
    }
    if (isNotForRichText) {
      rootDiv.setAttribute("class", "xfaLayer xfaFont");
    }
    const textDivs = [];
    if (root.children.length === 0) {
      if (root.value) {
        const node = document.createTextNode(root.value);
        rootHtml.append(node);
        if (isNotForRichText && XfaText.shouldBuildText(root.name)) {
          textDivs.push(node);
        }
      }
      return {
        textDivs
      };
    }
    const stack = [[root, -1, rootHtml]];
    while (stack.length > 0) {
      const [parent, i, html] = stack.at(-1);
      if (i + 1 === parent.children.length) {
        stack.pop();
        continue;
      }
      const child = parent.children[++stack.at(-1)[1]];
      if (child === null) {
        continue;
      }
      const {
        name
      } = child;
      if (name === "#text") {
        const node = document.createTextNode(child.value);
        textDivs.push(node);
        html.append(node);
        continue;
      }
      const childHtml = ((_a2 = child == null ? void 0 : child.attributes) == null ? void 0 : _a2.xmlns) ? document.createElementNS(child.attributes.xmlns, name) : document.createElement(name);
      html.append(childHtml);
      if (child.attributes) {
        this.setAttributes({
          html: childHtml,
          element: child,
          storage,
          intent,
          linkService
        });
      }
      if (((_b = child.children) == null ? void 0 : _b.length) > 0) {
        stack.push([child, -1, childHtml]);
      } else if (child.value) {
        const node = document.createTextNode(child.value);
        if (isNotForRichText && XfaText.shouldBuildText(name)) {
          textDivs.push(node);
        }
        childHtml.append(node);
      }
    }
    for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
      el.setAttribute("readOnly", true);
    }
    return {
      textDivs
    };
  }
  static update(parameters) {
    const transform = `matrix(${parameters.viewport.transform.join(",")})`;
    parameters.div.style.transform = transform;
    parameters.div.hidden = false;
  }
};
var DEFAULT_TAB_INDEX = 1e3;
var annotation_layer_DEFAULT_FONT_SIZE = 9;
var GetElementsByNameSet = /* @__PURE__ */ new WeakSet();
function getRectDims(rect) {
  return {
    width: rect[2] - rect[0],
    height: rect[3] - rect[1]
  };
}
var AnnotationElementFactory = class {
  static create(parameters) {
    const subtype = parameters.data.annotationType;
    switch (subtype) {
      case AnnotationType.LINK:
        return new LinkAnnotationElement(parameters);
      case AnnotationType.TEXT:
        return new TextAnnotationElement(parameters);
      case AnnotationType.WIDGET:
        const fieldType = parameters.data.fieldType;
        switch (fieldType) {
          case "Tx":
            return new TextWidgetAnnotationElement(parameters);
          case "Btn":
            if (parameters.data.radioButton) {
              return new RadioButtonWidgetAnnotationElement(parameters);
            } else if (parameters.data.checkBox) {
              return new CheckboxWidgetAnnotationElement(parameters);
            }
            return new PushButtonWidgetAnnotationElement(parameters);
          case "Ch":
            return new ChoiceWidgetAnnotationElement(parameters);
          case "Sig":
            return new SignatureWidgetAnnotationElement(parameters);
        }
        return new WidgetAnnotationElement(parameters);
      case AnnotationType.POPUP:
        return new PopupAnnotationElement(parameters);
      case AnnotationType.FREETEXT:
        return new FreeTextAnnotationElement(parameters);
      case AnnotationType.LINE:
        return new LineAnnotationElement(parameters);
      case AnnotationType.SQUARE:
        return new SquareAnnotationElement(parameters);
      case AnnotationType.CIRCLE:
        return new CircleAnnotationElement(parameters);
      case AnnotationType.POLYLINE:
        return new PolylineAnnotationElement(parameters);
      case AnnotationType.CARET:
        return new CaretAnnotationElement(parameters);
      case AnnotationType.INK:
        return new InkAnnotationElement(parameters);
      case AnnotationType.POLYGON:
        return new PolygonAnnotationElement(parameters);
      case AnnotationType.HIGHLIGHT:
        return new HighlightAnnotationElement(parameters);
      case AnnotationType.UNDERLINE:
        return new UnderlineAnnotationElement(parameters);
      case AnnotationType.SQUIGGLY:
        return new SquigglyAnnotationElement(parameters);
      case AnnotationType.STRIKEOUT:
        return new StrikeOutAnnotationElement(parameters);
      case AnnotationType.STAMP:
        return new StampAnnotationElement(parameters);
      case AnnotationType.FILEATTACHMENT:
        return new FileAttachmentAnnotationElement(parameters);
      default:
        return new AnnotationElement(parameters);
    }
  }
};
var _updates, _hasBorder, _popupElement, _AnnotationElement_instances, setRectEdited_fn;
var _AnnotationElement = class _AnnotationElement {
  constructor(parameters, {
    isRenderable = false,
    ignoreBorder = false,
    createQuadrilaterals = false
  } = {}) {
    __privateAdd(this, _AnnotationElement_instances);
    __privateAdd(this, _updates, null);
    __privateAdd(this, _hasBorder, false);
    __privateAdd(this, _popupElement, null);
    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderForms = parameters.renderForms;
    this.svgFactory = parameters.svgFactory;
    this.annotationStorage = parameters.annotationStorage;
    this.enableScripting = parameters.enableScripting;
    this.hasJSActions = parameters.hasJSActions;
    this._fieldObjects = parameters.fieldObjects;
    this.parent = parameters.parent;
    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
    if (createQuadrilaterals) {
      this._createQuadrilaterals();
    }
  }
  static _hasPopupData({
    titleObj,
    contentsObj,
    richText
  }) {
    return !!((titleObj == null ? void 0 : titleObj.str) || (contentsObj == null ? void 0 : contentsObj.str) || (richText == null ? void 0 : richText.str));
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return _AnnotationElement._hasPopupData(this.data);
  }
  updateEdited(params) {
    var _a2;
    if (!this.container) {
      return;
    }
    __privateGet(this, _updates) || __privateSet(this, _updates, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect
    } = params;
    if (rect) {
      __privateMethod(this, _AnnotationElement_instances, setRectEdited_fn).call(this, rect);
    }
    (_a2 = __privateGet(this, _popupElement)) == null ? void 0 : _a2.popup.updateEdited(params);
  }
  resetEdited() {
    var _a2;
    if (!__privateGet(this, _updates)) {
      return;
    }
    __privateMethod(this, _AnnotationElement_instances, setRectEdited_fn).call(this, __privateGet(this, _updates).rect);
    (_a2 = __privateGet(this, _popupElement)) == null ? void 0 : _a2.popup.resetEdited();
    __privateSet(this, _updates, null);
  }
  _createContainer(ignoreBorder) {
    const {
      data,
      parent: {
        page,
        viewport
      }
    } = this;
    const container = document.createElement("section");
    container.setAttribute("data-annotation-id", data.id);
    if (!(this instanceof WidgetAnnotationElement)) {
      container.tabIndex = DEFAULT_TAB_INDEX;
    }
    const {
      style
    } = container;
    style.zIndex = this.parent.zIndex++;
    if (data.alternativeText) {
      container.title = data.alternativeText;
    }
    if (data.noRotate) {
      container.classList.add("norotate");
    }
    if (!data.rect || this instanceof PopupAnnotationElement) {
      const {
        rotation: rotation2
      } = data;
      if (!data.hasOwnCanvas && rotation2 !== 0) {
        this.setRotation(rotation2, container);
      }
      return container;
    }
    const {
      width,
      height
    } = getRectDims(data.rect);
    if (!ignoreBorder && data.borderStyle.width > 0) {
      style.borderWidth = `${data.borderStyle.width}px`;
      const horizontalRadius = data.borderStyle.horizontalCornerRadius;
      const verticalRadius = data.borderStyle.verticalCornerRadius;
      if (horizontalRadius > 0 || verticalRadius > 0) {
        const radius = `calc(${horizontalRadius}px * var(--scale-factor)) / calc(${verticalRadius}px * var(--scale-factor))`;
        style.borderRadius = radius;
      } else if (this instanceof RadioButtonWidgetAnnotationElement) {
        const radius = `calc(${width}px * var(--scale-factor)) / calc(${height}px * var(--scale-factor))`;
        style.borderRadius = radius;
      }
      switch (data.borderStyle.style) {
        case AnnotationBorderStyleType.SOLID:
          style.borderStyle = "solid";
          break;
        case AnnotationBorderStyleType.DASHED:
          style.borderStyle = "dashed";
          break;
        case AnnotationBorderStyleType.BEVELED:
          warn("Unimplemented border style: beveled");
          break;
        case AnnotationBorderStyleType.INSET:
          warn("Unimplemented border style: inset");
          break;
        case AnnotationBorderStyleType.UNDERLINE:
          style.borderBottomStyle = "solid";
          break;
        default:
          break;
      }
      const borderColor = data.borderColor || null;
      if (borderColor) {
        __privateSet(this, _hasBorder, true);
        style.borderColor = Util.makeHexColor(borderColor[0] | 0, borderColor[1] | 0, borderColor[2] | 0);
      } else {
        style.borderWidth = 0;
      }
    }
    const rect = Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (rect[1] - pageY) / pageHeight}%`;
    const {
      rotation
    } = data;
    if (data.hasOwnCanvas || rotation === 0) {
      style.width = `${100 * width / pageWidth}%`;
      style.height = `${100 * height / pageHeight}%`;
    } else {
      this.setRotation(rotation, container);
    }
    return container;
  }
  setRotation(angle, container = this.container) {
    if (!this.data.rect) {
      return;
    }
    const {
      pageWidth,
      pageHeight
    } = this.parent.viewport.rawDims;
    const {
      width,
      height
    } = getRectDims(this.data.rect);
    let elementWidth, elementHeight;
    if (angle % 180 === 0) {
      elementWidth = 100 * width / pageWidth;
      elementHeight = 100 * height / pageHeight;
    } else {
      elementWidth = 100 * height / pageWidth;
      elementHeight = 100 * width / pageHeight;
    }
    container.style.width = `${elementWidth}%`;
    container.style.height = `${elementHeight}%`;
    container.setAttribute("data-main-rotation", (360 - angle) % 360);
  }
  get _commonActions() {
    const setColor = (jsName, styleName, event) => {
      const color = event.detail[jsName];
      const colorType = color[0];
      const colorArray = color.slice(1);
      event.target.style[styleName] = ColorConverters[`${colorType}_HTML`](colorArray);
      this.annotationStorage.setValue(this.data.id, {
        [styleName]: ColorConverters[`${colorType}_rgb`](colorArray)
      });
    };
    return shadow(this, "_commonActions", {
      display: (event) => {
        const {
          display
        } = event.detail;
        const hidden = display % 2 === 1;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noView: hidden,
          noPrint: display === 1 || display === 2
        });
      },
      print: (event) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !event.detail.print
        });
      },
      hidden: (event) => {
        const {
          hidden
        } = event.detail;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noPrint: hidden,
          noView: hidden
        });
      },
      focus: (event) => {
        setTimeout(() => event.target.focus({
          preventScroll: false
        }), 0);
      },
      userName: (event) => {
        event.target.title = event.detail.userName;
      },
      readonly: (event) => {
        event.target.disabled = event.detail.readonly;
      },
      required: (event) => {
        this._setRequired(event.target, event.detail.required);
      },
      bgColor: (event) => {
        setColor("bgColor", "backgroundColor", event);
      },
      fillColor: (event) => {
        setColor("fillColor", "backgroundColor", event);
      },
      fgColor: (event) => {
        setColor("fgColor", "color", event);
      },
      textColor: (event) => {
        setColor("textColor", "color", event);
      },
      borderColor: (event) => {
        setColor("borderColor", "borderColor", event);
      },
      strokeColor: (event) => {
        setColor("strokeColor", "borderColor", event);
      },
      rotation: (event) => {
        const angle = event.detail.rotation;
        this.setRotation(angle);
        this.annotationStorage.setValue(this.data.id, {
          rotation: angle
        });
      }
    });
  }
  _dispatchEventFromSandbox(actions, jsEvent) {
    const commonActions = this._commonActions;
    for (const name of Object.keys(jsEvent.detail)) {
      const action = actions[name] || commonActions[name];
      action == null ? void 0 : action(jsEvent);
    }
  }
  _setDefaultPropertiesFromJS(element) {
    if (!this.enableScripting) {
      return;
    }
    const storedData = this.annotationStorage.getRawValue(this.data.id);
    if (!storedData) {
      return;
    }
    const commonActions = this._commonActions;
    for (const [actionName, detail] of Object.entries(storedData)) {
      const action = commonActions[actionName];
      if (action) {
        const eventProxy = {
          detail: {
            [actionName]: detail
          },
          target: element
        };
        action(eventProxy);
        delete storedData[actionName];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) {
      return;
    }
    const {
      quadPoints
    } = this.data;
    if (!quadPoints) {
      return;
    }
    const [rectBlX, rectBlY, rectTrX, rectTrY] = this.data.rect.map((x) => Math.fround(x));
    if (quadPoints.length === 8) {
      const [trX, trY, blX, blY] = quadPoints.subarray(2, 6);
      if (rectTrX === trX && rectTrY === trY && rectBlX === blX && rectBlY === blY) {
        return;
      }
    }
    const {
      style
    } = this.container;
    let svgBuffer;
    if (__privateGet(this, _hasBorder)) {
      const {
        borderColor,
        borderWidth
      } = style;
      style.borderWidth = 0;
      svgBuffer = ["url('data:image/svg+xml;utf8,", `<svg xmlns="http://www.w3.org/2000/svg"`, ` preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`];
      this.container.classList.add("hasBorder");
    }
    const width = rectTrX - rectBlX;
    const height = rectTrY - rectBlY;
    const {
      svgFactory
    } = this;
    const svg = svgFactory.createElement("svg");
    svg.classList.add("quadrilateralsContainer");
    svg.setAttribute("width", 0);
    svg.setAttribute("height", 0);
    const defs = svgFactory.createElement("defs");
    svg.append(defs);
    const clipPath = svgFactory.createElement("clipPath");
    const id = `clippath_${this.data.id}`;
    clipPath.setAttribute("id", id);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    defs.append(clipPath);
    for (let i = 2, ii = quadPoints.length; i < ii; i += 8) {
      const trX = quadPoints[i];
      const trY = quadPoints[i + 1];
      const blX = quadPoints[i + 2];
      const blY = quadPoints[i + 3];
      const rect = svgFactory.createElement("rect");
      const x = (blX - rectBlX) / width;
      const y = (rectTrY - trY) / height;
      const rectWidth = (trX - blX) / width;
      const rectHeight = (trY - blY) / height;
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", rectWidth);
      rect.setAttribute("height", rectHeight);
      clipPath.append(rect);
      svgBuffer == null ? void 0 : svgBuffer.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}"/>`);
    }
    if (__privateGet(this, _hasBorder)) {
      svgBuffer.push(`</g></svg>')`);
      style.backgroundImage = svgBuffer.join("");
    }
    this.container.append(svg);
    this.container.style.clipPath = `url(#${id})`;
  }
  _createPopup() {
    const {
      data
    } = this;
    const popup = __privateSet(this, _popupElement, new PopupAnnotationElement({
      data: {
        color: data.color,
        titleObj: data.titleObj,
        modificationDate: data.modificationDate,
        contentsObj: data.contentsObj,
        richText: data.richText,
        parentRect: data.rect,
        borderStyle: 0,
        id: `popup_${data.id}`,
        rotation: data.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(popup.render());
  }
  render() {
    unreachable("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(name, skipId = null) {
    const fields = [];
    if (this._fieldObjects) {
      const fieldObj = this._fieldObjects[name];
      if (fieldObj) {
        for (const {
          page,
          id,
          exportValues
        } of fieldObj) {
          if (page === -1) {
            continue;
          }
          if (id === skipId) {
            continue;
          }
          const exportValue = typeof exportValues === "string" ? exportValues : null;
          const domElement = document.querySelector(`[data-element-id="${id}"]`);
          if (domElement && !GetElementsByNameSet.has(domElement)) {
            warn(`_getElementsByName - element not allowed: ${id}`);
            continue;
          }
          fields.push({
            id,
            exportValue,
            domElement
          });
        }
      }
      return fields;
    }
    for (const domElement of document.getElementsByName(name)) {
      const {
        exportValue
      } = domElement;
      const id = domElement.getAttribute("data-element-id");
      if (id === skipId) {
        continue;
      }
      if (!GetElementsByNameSet.has(domElement)) {
        continue;
      }
      fields.push({
        id,
        exportValue,
        domElement
      });
    }
    return fields;
  }
  show() {
    var _a2;
    if (this.container) {
      this.container.hidden = false;
    }
    (_a2 = this.popup) == null ? void 0 : _a2.maybeShow();
  }
  hide() {
    var _a2;
    if (this.container) {
      this.container.hidden = true;
    }
    (_a2 = this.popup) == null ? void 0 : _a2.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const triggers = this.getElementsToTriggerPopup();
    if (Array.isArray(triggers)) {
      for (const element of triggers) {
        element.classList.add("highlightArea");
      }
    } else {
      triggers.classList.add("highlightArea");
    }
  }
  _editOnDoubleClick() {
    if (!this._isEditable) {
      return;
    }
    const {
      annotationEditorType: mode,
      data: {
        id: editId
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var _a2;
      (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("switchannotationeditormode", {
        source: this,
        mode,
        editId
      });
    });
  }
};
_updates = new WeakMap();
_hasBorder = new WeakMap();
_popupElement = new WeakMap();
_AnnotationElement_instances = new WeakSet();
setRectEdited_fn = function(rect) {
  const {
    container: {
      style
    },
    data: {
      rect: currentRect,
      rotation
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth,
          pageHeight,
          pageX,
          pageY
        }
      }
    }
  } = this;
  currentRect == null ? void 0 : currentRect.splice(0, 4, ...rect);
  const {
    width,
    height
  } = getRectDims(rect);
  style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
  style.top = `${100 * (pageHeight - rect[3] + pageY) / pageHeight}%`;
  if (rotation === 0) {
    style.width = `${100 * width / pageWidth}%`;
    style.height = `${100 * height / pageHeight}%`;
  } else {
    this.setRotation(rotation);
  }
};
var AnnotationElement = _AnnotationElement;
var _LinkAnnotationElement_instances, setInternalLink_fn, bindAttachment_fn, bindSetOCGState_fn;
var LinkAnnotationElement = class extends AnnotationElement {
  constructor(parameters, options = null) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: !!(options == null ? void 0 : options.ignoreBorder),
      createQuadrilaterals: true
    });
    __privateAdd(this, _LinkAnnotationElement_instances);
    this.isTooltipOnly = parameters.data.isTooltipOnly;
  }
  render() {
    const {
      data,
      linkService
    } = this;
    const link = document.createElement("a");
    link.setAttribute("data-element-id", data.id);
    let isBound = false;
    if (data.url) {
      linkService.addLinkAttributes(link, data.url, data.newWindow);
      isBound = true;
    } else if (data.action) {
      this._bindNamedAction(link, data.action);
      isBound = true;
    } else if (data.attachment) {
      __privateMethod(this, _LinkAnnotationElement_instances, bindAttachment_fn).call(this, link, data.attachment, data.attachmentDest);
      isBound = true;
    } else if (data.setOCGState) {
      __privateMethod(this, _LinkAnnotationElement_instances, bindSetOCGState_fn).call(this, link, data.setOCGState);
      isBound = true;
    } else if (data.dest) {
      this._bindLink(link, data.dest);
      isBound = true;
    } else {
      if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
        this._bindJSAction(link, data);
        isBound = true;
      }
      if (data.resetForm) {
        this._bindResetFormAction(link, data.resetForm);
        isBound = true;
      } else if (this.isTooltipOnly && !isBound) {
        this._bindLink(link, "");
        isBound = true;
      }
    }
    this.container.classList.add("linkAnnotation");
    if (isBound) {
      this.container.append(link);
    }
    return this.container;
  }
  _bindLink(link, destination) {
    link.href = this.linkService.getDestinationHash(destination);
    link.onclick = () => {
      if (destination) {
        this.linkService.goToDestination(destination);
      }
      return false;
    };
    if (destination || destination === "") {
      __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
    }
  }
  _bindNamedAction(link, action) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.linkService.executeNamedAction(action);
      return false;
    };
    __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
  }
  _bindJSAction(link, data) {
    link.href = this.linkService.getAnchorUrl("");
    const map = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const name of Object.keys(data.actions)) {
      const jsName = map.get(name);
      if (!jsName) {
        continue;
      }
      link[jsName] = () => {
        var _a2;
        (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: data.id,
            name
          }
        });
        return false;
      };
    }
    if (!link.onclick) {
      link.onclick = () => false;
    }
    __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
  }
  _bindResetFormAction(link, resetForm) {
    const otherClickAction = link.onclick;
    if (!otherClickAction) {
      link.href = this.linkService.getAnchorUrl("");
    }
    __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
    if (!this._fieldObjects) {
      warn(`_bindResetFormAction - "resetForm" action not supported, ensure that the \`fieldObjects\` parameter is provided.`);
      if (!otherClickAction) {
        link.onclick = () => false;
      }
      return;
    }
    link.onclick = () => {
      var _a2;
      otherClickAction == null ? void 0 : otherClickAction();
      const {
        fields: resetFormFields,
        refs: resetFormRefs,
        include
      } = resetForm;
      const allFields = [];
      if (resetFormFields.length !== 0 || resetFormRefs.length !== 0) {
        const fieldIds = new Set(resetFormRefs);
        for (const fieldName of resetFormFields) {
          const fields = this._fieldObjects[fieldName] || [];
          for (const {
            id
          } of fields) {
            fieldIds.add(id);
          }
        }
        for (const fields of Object.values(this._fieldObjects)) {
          for (const field of fields) {
            if (fieldIds.has(field.id) === include) {
              allFields.push(field);
            }
          }
        }
      } else {
        for (const fields of Object.values(this._fieldObjects)) {
          allFields.push(...fields);
        }
      }
      const storage = this.annotationStorage;
      const allIds = [];
      for (const field of allFields) {
        const {
          id
        } = field;
        allIds.push(id);
        switch (field.type) {
          case "text": {
            const value = field.defaultValue || "";
            storage.setValue(id, {
              value
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const value = field.defaultValue === field.exportValues;
            storage.setValue(id, {
              value
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const value = field.defaultValue || "";
            storage.setValue(id, {
              value
            });
            break;
          }
          default:
            continue;
        }
        const domElement = document.querySelector(`[data-element-id="${id}"]`);
        if (!domElement) {
          continue;
        } else if (!GetElementsByNameSet.has(domElement)) {
          warn(`_bindResetFormAction - element not allowed: ${id}`);
          continue;
        }
        domElement.dispatchEvent(new Event("resetform"));
      }
      if (this.enableScripting) {
        (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids: allIds,
            name: "ResetForm"
          }
        });
      }
      return false;
    };
  }
};
_LinkAnnotationElement_instances = new WeakSet();
setInternalLink_fn = function() {
  this.container.setAttribute("data-internal-link", "");
};
bindAttachment_fn = function(link, attachment, dest = null) {
  link.href = this.linkService.getAnchorUrl("");
  if (attachment.description) {
    link.title = attachment.description;
  }
  link.onclick = () => {
    var _a2;
    (_a2 = this.downloadManager) == null ? void 0 : _a2.openOrDownloadData(attachment.content, attachment.filename, dest);
    return false;
  };
  __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
};
bindSetOCGState_fn = function(link, action) {
  link.href = this.linkService.getAnchorUrl("");
  link.onclick = () => {
    this.linkService.executeSetOCGState(action);
    return false;
  };
  __privateMethod(this, _LinkAnnotationElement_instances, setInternalLink_fn).call(this);
};
var TextAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const image = document.createElement("img");
    image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
    image.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
    image.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    }));
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(image);
    return this.container;
  }
};
var WidgetAnnotationElement = class extends AnnotationElement {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(element) {
    var _a2;
    if (this.data.hasOwnCanvas) {
      if (((_a2 = element.previousSibling) == null ? void 0 : _a2.nodeName) === "CANVAS") {
        element.previousSibling.hidden = true;
      }
      element.hidden = false;
    }
  }
  _getKeyModifier(event) {
    return util_FeatureTest.platform.isMac ? event.metaKey : event.ctrlKey;
  }
  _setEventListener(element, elementData, baseName, eventName, valueGetter) {
    if (baseName.includes("mouse")) {
      element.addEventListener(baseName, (event) => {
        var _a2;
        (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: eventName,
            value: valueGetter(event),
            shift: event.shiftKey,
            modifier: this._getKeyModifier(event)
          }
        });
      });
    } else {
      element.addEventListener(baseName, (event) => {
        var _a2;
        if (baseName === "blur") {
          if (!elementData.focused || !event.relatedTarget) {
            return;
          }
          elementData.focused = false;
        } else if (baseName === "focus") {
          if (elementData.focused) {
            return;
          }
          elementData.focused = true;
        }
        if (!valueGetter) {
          return;
        }
        (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: eventName,
            value: valueGetter(event)
          }
        });
      });
    }
  }
  _setEventListeners(element, elementData, names, getter) {
    var _a2, _b, _c;
    for (const [baseName, eventName] of names) {
      if (eventName === "Action" || ((_a2 = this.data.actions) == null ? void 0 : _a2[eventName])) {
        if (eventName === "Focus" || eventName === "Blur") {
          elementData || (elementData = {
            focused: false
          });
        }
        this._setEventListener(element, elementData, baseName, eventName, getter);
        if (eventName === "Focus" && !((_b = this.data.actions) == null ? void 0 : _b.Blur)) {
          this._setEventListener(element, elementData, "blur", "Blur", null);
        } else if (eventName === "Blur" && !((_c = this.data.actions) == null ? void 0 : _c.Focus)) {
          this._setEventListener(element, elementData, "focus", "Focus", null);
        }
      }
    }
  }
  _setBackgroundColor(element) {
    const color = this.data.backgroundColor || null;
    element.style.backgroundColor = color === null ? "transparent" : Util.makeHexColor(color[0], color[1], color[2]);
  }
  _setTextStyle(element) {
    const TEXT_ALIGNMENT = ["left", "center", "right"];
    const {
      fontColor
    } = this.data.defaultAppearanceData;
    const fontSize = this.data.defaultAppearanceData.fontSize || annotation_layer_DEFAULT_FONT_SIZE;
    const style = element.style;
    let computedFontSize;
    const BORDER_SIZE = 2;
    const roundToOneDecimal = (x) => Math.round(10 * x) / 10;
    if (this.data.multiLine) {
      const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      const numberOfLines = Math.round(height / (LINE_FACTOR * fontSize)) || 1;
      const lineHeight = height / numberOfLines;
      computedFontSize = Math.min(fontSize, roundToOneDecimal(lineHeight / LINE_FACTOR));
    } else {
      const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      computedFontSize = Math.min(fontSize, roundToOneDecimal(height / LINE_FACTOR));
    }
    style.fontSize = `calc(${computedFontSize}px * var(--scale-factor))`;
    style.color = Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
    if (this.data.textAlignment !== null) {
      style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
    }
  }
  _setRequired(element, isRequired) {
    if (isRequired) {
      element.setAttribute("required", true);
    } else {
      element.removeAttribute("required");
    }
    element.setAttribute("aria-required", isRequired);
  }
};
var TextWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    const isRenderable = parameters.renderForms || parameters.data.hasOwnCanvas || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
    super(parameters, {
      isRenderable
    });
  }
  setPropertyOnSiblings(base, key, value, keyInStorage) {
    const storage = this.annotationStorage;
    for (const element of this._getElementsByName(base.name, base.id)) {
      if (element.domElement) {
        element.domElement[key] = value;
      }
      storage.setValue(element.id, {
        [keyInStorage]: value
      });
    }
  }
  render() {
    var _a2, _b;
    const storage = this.annotationStorage;
    const id = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let element = null;
    if (this.renderForms) {
      const storedData = storage.getValue(id, {
        value: this.data.fieldValue
      });
      let textContent = storedData.value || "";
      const maxLen = storage.getValue(id, {
        charLimit: this.data.maxLen
      }).charLimit;
      if (maxLen && textContent.length > maxLen) {
        textContent = textContent.slice(0, maxLen);
      }
      let fieldFormattedValues = storedData.formattedValue || ((_a2 = this.data.textContent) == null ? void 0 : _a2.join("\n")) || null;
      if (fieldFormattedValues && this.data.comb) {
        fieldFormattedValues = fieldFormattedValues.replaceAll(/\s+/g, "");
      }
      const elementData = {
        userValue: textContent,
        formattedValue: fieldFormattedValues,
        lastCommittedValue: null,
        commitKey: 1,
        focused: false
      };
      if (this.data.multiLine) {
        element = document.createElement("textarea");
        element.textContent = fieldFormattedValues ?? textContent;
        if (this.data.doNotScroll) {
          element.style.overflowY = "hidden";
        }
      } else {
        element = document.createElement("input");
        element.type = "text";
        element.setAttribute("value", fieldFormattedValues ?? textContent);
        if (this.data.doNotScroll) {
          element.style.overflowX = "hidden";
        }
      }
      if (this.data.hasOwnCanvas) {
        element.hidden = true;
      }
      GetElementsByNameSet.add(element);
      element.setAttribute("data-element-id", id);
      element.disabled = this.data.readOnly;
      element.name = this.data.fieldName;
      element.tabIndex = DEFAULT_TAB_INDEX;
      this._setRequired(element, this.data.required);
      if (maxLen) {
        element.maxLength = maxLen;
      }
      element.addEventListener("input", (event) => {
        storage.setValue(id, {
          value: event.target.value
        });
        this.setPropertyOnSiblings(element, "value", event.target.value, "value");
        elementData.formattedValue = null;
      });
      element.addEventListener("resetform", (event) => {
        const defaultValue = this.data.defaultFieldValue ?? "";
        element.value = elementData.userValue = defaultValue;
        elementData.formattedValue = null;
      });
      let blurListener = (event) => {
        const {
          formattedValue
        } = elementData;
        if (formattedValue !== null && formattedValue !== void 0) {
          event.target.value = formattedValue;
        }
        event.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        element.addEventListener("focus", (event) => {
          var _a3;
          if (elementData.focused) {
            return;
          }
          const {
            target
          } = event;
          if (elementData.userValue) {
            target.value = elementData.userValue;
          }
          elementData.lastCommittedValue = target.value;
          elementData.commitKey = 1;
          if (!((_a3 = this.data.actions) == null ? void 0 : _a3.Focus)) {
            elementData.focused = true;
          }
        });
        element.addEventListener("updatefromsandbox", (jsEvent) => {
          this.showElementAndHideCanvas(jsEvent.target);
          const actions = {
            value(event) {
              elementData.userValue = event.detail.value ?? "";
              storage.setValue(id, {
                value: elementData.userValue.toString()
              });
              event.target.value = elementData.userValue;
            },
            formattedValue(event) {
              const {
                formattedValue
              } = event.detail;
              elementData.formattedValue = formattedValue;
              if (formattedValue !== null && formattedValue !== void 0 && event.target !== document.activeElement) {
                event.target.value = formattedValue;
              }
              storage.setValue(id, {
                formattedValue
              });
            },
            selRange(event) {
              event.target.setSelectionRange(...event.detail.selRange);
            },
            charLimit: (event) => {
              var _a3;
              const {
                charLimit
              } = event.detail;
              const {
                target
              } = event;
              if (charLimit === 0) {
                target.removeAttribute("maxLength");
                return;
              }
              target.setAttribute("maxLength", charLimit);
              let value = elementData.userValue;
              if (!value || value.length <= charLimit) {
                return;
              }
              value = value.slice(0, charLimit);
              target.value = elementData.userValue = value;
              storage.setValue(id, {
                value
              });
              (_a3 = this.linkService.eventBus) == null ? void 0 : _a3.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id,
                  name: "Keystroke",
                  value,
                  willCommit: true,
                  commitKey: 1,
                  selStart: target.selectionStart,
                  selEnd: target.selectionEnd
                }
              });
            }
          };
          this._dispatchEventFromSandbox(actions, jsEvent);
        });
        element.addEventListener("keydown", (event) => {
          var _a3;
          elementData.commitKey = 1;
          let commitKey = -1;
          if (event.key === "Escape") {
            commitKey = 0;
          } else if (event.key === "Enter" && !this.data.multiLine) {
            commitKey = 2;
          } else if (event.key === "Tab") {
            elementData.commitKey = 3;
          }
          if (commitKey === -1) {
            return;
          }
          const {
            value
          } = event.target;
          if (elementData.lastCommittedValue === value) {
            return;
          }
          elementData.lastCommittedValue = value;
          elementData.userValue = value;
          (_a3 = this.linkService.eventBus) == null ? void 0 : _a3.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id,
              name: "Keystroke",
              value,
              willCommit: true,
              commitKey,
              selStart: event.target.selectionStart,
              selEnd: event.target.selectionEnd
            }
          });
        });
        const _blurListener = blurListener;
        blurListener = null;
        element.addEventListener("blur", (event) => {
          var _a3, _b2;
          if (!elementData.focused || !event.relatedTarget) {
            return;
          }
          if (!((_a3 = this.data.actions) == null ? void 0 : _a3.Blur)) {
            elementData.focused = false;
          }
          const {
            value
          } = event.target;
          elementData.userValue = value;
          if (elementData.lastCommittedValue !== value) {
            (_b2 = this.linkService.eventBus) == null ? void 0 : _b2.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id,
                name: "Keystroke",
                value,
                willCommit: true,
                commitKey: elementData.commitKey,
                selStart: event.target.selectionStart,
                selEnd: event.target.selectionEnd
              }
            });
          }
          _blurListener(event);
        });
        if ((_b = this.data.actions) == null ? void 0 : _b.Keystroke) {
          element.addEventListener("beforeinput", (event) => {
            var _a3;
            elementData.lastCommittedValue = null;
            const {
              data,
              target
            } = event;
            const {
              value,
              selectionStart,
              selectionEnd
            } = target;
            let selStart = selectionStart, selEnd = selectionEnd;
            switch (event.inputType) {
              case "deleteWordBackward": {
                const match = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                if (match) {
                  selStart -= match[0].length;
                }
                break;
              }
              case "deleteWordForward": {
                const match = value.substring(selectionStart).match(/^[^\w]*\w*/);
                if (match) {
                  selEnd += match[0].length;
                }
                break;
              }
              case "deleteContentBackward":
                if (selectionStart === selectionEnd) {
                  selStart -= 1;
                }
                break;
              case "deleteContentForward":
                if (selectionStart === selectionEnd) {
                  selEnd += 1;
                }
                break;
            }
            event.preventDefault();
            (_a3 = this.linkService.eventBus) == null ? void 0 : _a3.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id,
                name: "Keystroke",
                value,
                change: data || "",
                willCommit: false,
                selStart,
                selEnd
              }
            });
          });
        }
        this._setEventListeners(element, elementData, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.value);
      }
      if (blurListener) {
        element.addEventListener("blur", blurListener);
      }
      if (this.data.comb) {
        const fieldWidth = this.data.rect[2] - this.data.rect[0];
        const combWidth = fieldWidth / maxLen;
        element.classList.add("comb");
        element.style.letterSpacing = `calc(${combWidth}px * var(--scale-factor) - 1ch)`;
      }
    } else {
      element = document.createElement("div");
      element.textContent = this.data.fieldValue;
      element.style.verticalAlign = "middle";
      element.style.display = "table-cell";
      if (this.data.hasOwnCanvas) {
        element.hidden = true;
      }
    }
    this._setTextStyle(element);
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
};
var SignatureWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: !!parameters.data.hasOwnCanvas
    });
  }
};
var CheckboxWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    let value = storage.getValue(id, {
      value: data.exportValue === data.fieldValue
    }).value;
    if (typeof value === "string") {
      value = value !== "Off";
      storage.setValue(id, {
        value
      });
    }
    this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const element = document.createElement("input");
    GetElementsByNameSet.add(element);
    element.setAttribute("data-element-id", id);
    element.disabled = data.readOnly;
    this._setRequired(element, this.data.required);
    element.type = "checkbox";
    element.name = data.fieldName;
    if (value) {
      element.setAttribute("checked", true);
    }
    element.setAttribute("exportValue", data.exportValue);
    element.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("change", (event) => {
      const {
        name,
        checked
      } = event.target;
      for (const checkbox of this._getElementsByName(name, id)) {
        const curChecked = checked && checkbox.exportValue === data.exportValue;
        if (checkbox.domElement) {
          checkbox.domElement.checked = curChecked;
        }
        storage.setValue(checkbox.id, {
          value: curChecked
        });
      }
      storage.setValue(id, {
        value: checked
      });
    });
    element.addEventListener("resetform", (event) => {
      const defaultValue = data.defaultFieldValue || "Off";
      event.target.checked = defaultValue === data.exportValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      element.addEventListener("updatefromsandbox", (jsEvent) => {
        const actions = {
          value(event) {
            event.target.checked = event.detail.value !== "Off";
            storage.setValue(id, {
              value: event.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
    }
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
};
var RadioButtonWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    let value = storage.getValue(id, {
      value: data.fieldValue === data.buttonValue
    }).value;
    if (typeof value === "string") {
      value = value !== data.buttonValue;
      storage.setValue(id, {
        value
      });
    }
    if (value) {
      for (const radio of this._getElementsByName(data.fieldName, id)) {
        storage.setValue(radio.id, {
          value: false
        });
      }
    }
    const element = document.createElement("input");
    GetElementsByNameSet.add(element);
    element.setAttribute("data-element-id", id);
    element.disabled = data.readOnly;
    this._setRequired(element, this.data.required);
    element.type = "radio";
    element.name = data.fieldName;
    if (value) {
      element.setAttribute("checked", true);
    }
    element.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("change", (event) => {
      const {
        name,
        checked
      } = event.target;
      for (const radio of this._getElementsByName(name, id)) {
        storage.setValue(radio.id, {
          value: false
        });
      }
      storage.setValue(id, {
        value: checked
      });
    });
    element.addEventListener("resetform", (event) => {
      const defaultValue = data.defaultFieldValue;
      event.target.checked = defaultValue !== null && defaultValue !== void 0 && defaultValue === data.buttonValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      const pdfButtonValue = data.buttonValue;
      element.addEventListener("updatefromsandbox", (jsEvent) => {
        const actions = {
          value: (event) => {
            const checked = pdfButtonValue === event.detail.value;
            for (const radio of this._getElementsByName(event.target.name)) {
              const curChecked = checked && radio.id === id;
              if (radio.domElement) {
                radio.domElement.checked = curChecked;
              }
              storage.setValue(radio.id, {
                value: curChecked
              });
            }
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
    }
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
};
var PushButtonWidgetAnnotationElement = class extends LinkAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      ignoreBorder: parameters.data.hasAppearance
    });
  }
  render() {
    const container = super.render();
    container.classList.add("buttonWidgetAnnotation", "pushButton");
    const linkElement = container.lastChild;
    if (this.enableScripting && this.hasJSActions && linkElement) {
      this._setDefaultPropertiesFromJS(linkElement);
      linkElement.addEventListener("updatefromsandbox", (jsEvent) => {
        this._dispatchEventFromSandbox({}, jsEvent);
      });
    }
    return container;
  }
};
var ChoiceWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const storage = this.annotationStorage;
    const id = this.data.id;
    const storedData = storage.getValue(id, {
      value: this.data.fieldValue
    });
    const selectElement = document.createElement("select");
    GetElementsByNameSet.add(selectElement);
    selectElement.setAttribute("data-element-id", id);
    selectElement.disabled = this.data.readOnly;
    this._setRequired(selectElement, this.data.required);
    selectElement.name = this.data.fieldName;
    selectElement.tabIndex = DEFAULT_TAB_INDEX;
    let addAnEmptyEntry = this.data.combo && this.data.options.length > 0;
    if (!this.data.combo) {
      selectElement.size = this.data.options.length;
      if (this.data.multiSelect) {
        selectElement.multiple = true;
      }
    }
    selectElement.addEventListener("resetform", (event) => {
      const defaultValue = this.data.defaultFieldValue;
      for (const option of selectElement.options) {
        option.selected = option.value === defaultValue;
      }
    });
    for (const option of this.data.options) {
      const optionElement = document.createElement("option");
      optionElement.textContent = option.displayValue;
      optionElement.value = option.exportValue;
      if (storedData.value.includes(option.exportValue)) {
        optionElement.setAttribute("selected", true);
        addAnEmptyEntry = false;
      }
      selectElement.append(optionElement);
    }
    let removeEmptyEntry = null;
    if (addAnEmptyEntry) {
      const noneOptionElement = document.createElement("option");
      noneOptionElement.value = " ";
      noneOptionElement.setAttribute("hidden", true);
      noneOptionElement.setAttribute("selected", true);
      selectElement.prepend(noneOptionElement);
      removeEmptyEntry = () => {
        noneOptionElement.remove();
        selectElement.removeEventListener("input", removeEmptyEntry);
        removeEmptyEntry = null;
      };
      selectElement.addEventListener("input", removeEmptyEntry);
    }
    const getValue = (isExport) => {
      const name = isExport ? "value" : "textContent";
      const {
        options,
        multiple
      } = selectElement;
      if (!multiple) {
        return options.selectedIndex === -1 ? null : options[options.selectedIndex][name];
      }
      return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option[name]);
    };
    let selectedValues = getValue(false);
    const getItems = (event) => {
      const options = event.target.options;
      return Array.prototype.map.call(options, (option) => ({
        displayValue: option.textContent,
        exportValue: option.value
      }));
    };
    if (this.enableScripting && this.hasJSActions) {
      selectElement.addEventListener("updatefromsandbox", (jsEvent) => {
        const actions = {
          value(event) {
            removeEmptyEntry == null ? void 0 : removeEmptyEntry();
            const value = event.detail.value;
            const values = new Set(Array.isArray(value) ? value : [value]);
            for (const option of selectElement.options) {
              option.selected = values.has(option.value);
            }
            storage.setValue(id, {
              value: getValue(true)
            });
            selectedValues = getValue(false);
          },
          multipleSelection(event) {
            selectElement.multiple = true;
          },
          remove(event) {
            const options = selectElement.options;
            const index = event.detail.remove;
            options[index].selected = false;
            selectElement.remove(index);
            if (options.length > 0) {
              const i = Array.prototype.findIndex.call(options, (option) => option.selected);
              if (i === -1) {
                options[0].selected = true;
              }
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          clear(event) {
            while (selectElement.length !== 0) {
              selectElement.remove(0);
            }
            storage.setValue(id, {
              value: null,
              items: []
            });
            selectedValues = getValue(false);
          },
          insert(event) {
            const {
              index,
              displayValue,
              exportValue
            } = event.detail.insert;
            const selectChild = selectElement.children[index];
            const optionElement = document.createElement("option");
            optionElement.textContent = displayValue;
            optionElement.value = exportValue;
            if (selectChild) {
              selectChild.before(optionElement);
            } else {
              selectElement.append(optionElement);
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          items(event) {
            const {
              items
            } = event.detail;
            while (selectElement.length !== 0) {
              selectElement.remove(0);
            }
            for (const item of items) {
              const {
                displayValue,
                exportValue
              } = item;
              const optionElement = document.createElement("option");
              optionElement.textContent = displayValue;
              optionElement.value = exportValue;
              selectElement.append(optionElement);
            }
            if (selectElement.options.length > 0) {
              selectElement.options[0].selected = true;
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          indices(event) {
            const indices = new Set(event.detail.indices);
            for (const option of event.target.options) {
              option.selected = indices.has(option.index);
            }
            storage.setValue(id, {
              value: getValue(true)
            });
            selectedValues = getValue(false);
          },
          editable(event) {
            event.target.disabled = !event.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      selectElement.addEventListener("input", (event) => {
        var _a2;
        const exportValue = getValue(true);
        const change = getValue(false);
        storage.setValue(id, {
          value: exportValue
        });
        event.preventDefault();
        (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id,
            name: "Keystroke",
            value: selectedValues,
            change,
            changeEx: exportValue,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      });
      this._setEventListeners(selectElement, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (event) => event.target.value);
    } else {
      selectElement.addEventListener("input", function(event) {
        storage.setValue(id, {
          value: getValue(true)
        });
      });
    }
    if (this.data.combo) {
      this._setTextStyle(selectElement);
    } else {
    }
    this._setBackgroundColor(selectElement);
    this._setDefaultPropertiesFromJS(selectElement);
    this.container.append(selectElement);
    return this.container;
  }
};
var PopupAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    const {
      data,
      elements
    } = parameters;
    super(parameters, {
      isRenderable: AnnotationElement._hasPopupData(data)
    });
    this.elements = elements;
    this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const popup = this.popup = new PopupElement({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    });
    const elementIds = [];
    for (const element of this.elements) {
      element.popup = popup;
      element.container.ariaHasPopup = "dialog";
      elementIds.push(element.data.id);
      element.addHighlightArea();
    }
    this.container.setAttribute("aria-controls", elementIds.map((id) => `${AnnotationPrefix}${id}`).join(","));
    return this.container;
  }
};
var _boundKeyDown, _boundHide, _boundShow, _boundToggle, _color, _container4, _contentsObj, _dateObj, _elements, _parent, _parentRect, _pinned, _popup, _position2, _rect, _richText, _titleObj, _updates2, _wasVisible, _PopupElement_instances, html_get, fontSize_get, fontColor_get, makePopupContent_fn, keyDown_fn, setPosition_fn, toggle_fn, show_fn, hide_fn;
var PopupElement = class {
  constructor({
    container,
    color,
    elements,
    titleObj,
    modificationDate,
    contentsObj,
    richText,
    parent,
    rect,
    parentRect,
    open
  }) {
    __privateAdd(this, _PopupElement_instances);
    __privateAdd(this, _boundKeyDown, __privateMethod(this, _PopupElement_instances, keyDown_fn).bind(this));
    __privateAdd(this, _boundHide, __privateMethod(this, _PopupElement_instances, hide_fn).bind(this));
    __privateAdd(this, _boundShow, __privateMethod(this, _PopupElement_instances, show_fn).bind(this));
    __privateAdd(this, _boundToggle, __privateMethod(this, _PopupElement_instances, toggle_fn).bind(this));
    __privateAdd(this, _color, null);
    __privateAdd(this, _container4, null);
    __privateAdd(this, _contentsObj, null);
    __privateAdd(this, _dateObj, null);
    __privateAdd(this, _elements, null);
    __privateAdd(this, _parent, null);
    __privateAdd(this, _parentRect, null);
    __privateAdd(this, _pinned, false);
    __privateAdd(this, _popup, null);
    __privateAdd(this, _position2, null);
    __privateAdd(this, _rect, null);
    __privateAdd(this, _richText, null);
    __privateAdd(this, _titleObj, null);
    __privateAdd(this, _updates2, null);
    __privateAdd(this, _wasVisible, false);
    var _a2;
    __privateSet(this, _container4, container);
    __privateSet(this, _titleObj, titleObj);
    __privateSet(this, _contentsObj, contentsObj);
    __privateSet(this, _richText, richText);
    __privateSet(this, _parent, parent);
    __privateSet(this, _color, color);
    __privateSet(this, _rect, rect);
    __privateSet(this, _parentRect, parentRect);
    __privateSet(this, _elements, elements);
    __privateSet(this, _dateObj, PDFDateString.toDateObject(modificationDate));
    this.trigger = elements.flatMap((e) => e.getElementsToTriggerPopup());
    for (const element of this.trigger) {
      element.addEventListener("click", __privateGet(this, _boundToggle));
      element.addEventListener("mouseenter", __privateGet(this, _boundShow));
      element.addEventListener("mouseleave", __privateGet(this, _boundHide));
      element.classList.add("popupTriggerArea");
    }
    for (const element of elements) {
      (_a2 = element.container) == null ? void 0 : _a2.addEventListener("keydown", __privateGet(this, _boundKeyDown));
    }
    __privateGet(this, _container4).hidden = true;
    if (open) {
      __privateMethod(this, _PopupElement_instances, toggle_fn).call(this);
    }
  }
  render() {
    if (__privateGet(this, _popup)) {
      return;
    }
    const popup = __privateSet(this, _popup, document.createElement("div"));
    popup.className = "popup";
    if (__privateGet(this, _color)) {
      const baseColor = popup.style.outlineColor = Util.makeHexColor(...__privateGet(this, _color));
      if (CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")) {
        popup.style.backgroundColor = `color-mix(in srgb, ${baseColor} 30%, white)`;
      } else {
        const BACKGROUND_ENLIGHT = 0.7;
        popup.style.backgroundColor = Util.makeHexColor(...__privateGet(this, _color).map((c) => Math.floor(BACKGROUND_ENLIGHT * (255 - c) + c)));
      }
    }
    const header = document.createElement("span");
    header.className = "header";
    const title = document.createElement("h1");
    header.append(title);
    ({
      dir: title.dir,
      str: title.textContent
    } = __privateGet(this, _titleObj));
    popup.append(header);
    if (__privateGet(this, _dateObj)) {
      const modificationDate = document.createElement("span");
      modificationDate.classList.add("popupDate");
      modificationDate.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
      modificationDate.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: __privateGet(this, _dateObj).valueOf()
      }));
      header.append(modificationDate);
    }
    const html = __privateGet(this, _PopupElement_instances, html_get);
    if (html) {
      XfaLayer.render({
        xfaHtml: html,
        intent: "richText",
        div: popup
      });
      popup.lastChild.classList.add("richText", "popupContent");
    } else {
      const contents = this._formatContents(__privateGet(this, _contentsObj));
      popup.append(contents);
    }
    __privateGet(this, _container4).append(popup);
  }
  _formatContents({
    str,
    dir
  }) {
    const p = document.createElement("p");
    p.classList.add("popupContent");
    p.dir = dir;
    const lines = str.split(/(?:\r\n?|\n)/);
    for (let i = 0, ii = lines.length; i < ii; ++i) {
      const line = lines[i];
      p.append(document.createTextNode(line));
      if (i < ii - 1) {
        p.append(document.createElement("br"));
      }
    }
    return p;
  }
  updateEdited({
    rect,
    popupContent
  }) {
    var _a2;
    __privateGet(this, _updates2) || __privateSet(this, _updates2, {
      contentsObj: __privateGet(this, _contentsObj),
      richText: __privateGet(this, _richText)
    });
    if (rect) {
      __privateSet(this, _position2, null);
    }
    if (popupContent) {
      __privateSet(this, _richText, __privateMethod(this, _PopupElement_instances, makePopupContent_fn).call(this, popupContent));
      __privateSet(this, _contentsObj, null);
    }
    (_a2 = __privateGet(this, _popup)) == null ? void 0 : _a2.remove();
    __privateSet(this, _popup, null);
  }
  resetEdited() {
    var _a2;
    if (!__privateGet(this, _updates2)) {
      return;
    }
    ({
      contentsObj: __privateWrapper(this, _contentsObj)._,
      richText: __privateWrapper(this, _richText)._
    } = __privateGet(this, _updates2));
    __privateSet(this, _updates2, null);
    (_a2 = __privateGet(this, _popup)) == null ? void 0 : _a2.remove();
    __privateSet(this, _popup, null);
    __privateSet(this, _position2, null);
  }
  forceHide() {
    __privateSet(this, _wasVisible, this.isVisible);
    if (!__privateGet(this, _wasVisible)) {
      return;
    }
    __privateGet(this, _container4).hidden = true;
  }
  maybeShow() {
    if (!__privateGet(this, _wasVisible)) {
      return;
    }
    if (!__privateGet(this, _popup)) {
      __privateMethod(this, _PopupElement_instances, show_fn).call(this);
    }
    __privateSet(this, _wasVisible, false);
    __privateGet(this, _container4).hidden = false;
  }
  get isVisible() {
    return __privateGet(this, _container4).hidden === false;
  }
};
_boundKeyDown = new WeakMap();
_boundHide = new WeakMap();
_boundShow = new WeakMap();
_boundToggle = new WeakMap();
_color = new WeakMap();
_container4 = new WeakMap();
_contentsObj = new WeakMap();
_dateObj = new WeakMap();
_elements = new WeakMap();
_parent = new WeakMap();
_parentRect = new WeakMap();
_pinned = new WeakMap();
_popup = new WeakMap();
_position2 = new WeakMap();
_rect = new WeakMap();
_richText = new WeakMap();
_titleObj = new WeakMap();
_updates2 = new WeakMap();
_wasVisible = new WeakMap();
_PopupElement_instances = new WeakSet();
html_get = function() {
  const richText = __privateGet(this, _richText);
  const contentsObj = __privateGet(this, _contentsObj);
  if ((richText == null ? void 0 : richText.str) && (!(contentsObj == null ? void 0 : contentsObj.str) || contentsObj.str === richText.str)) {
    return __privateGet(this, _richText).html || null;
  }
  return null;
};
fontSize_get = function() {
  var _a2, _b, _c;
  return ((_c = (_b = (_a2 = __privateGet(this, _PopupElement_instances, html_get)) == null ? void 0 : _a2.attributes) == null ? void 0 : _b.style) == null ? void 0 : _c.fontSize) || 0;
};
fontColor_get = function() {
  var _a2, _b, _c;
  return ((_c = (_b = (_a2 = __privateGet(this, _PopupElement_instances, html_get)) == null ? void 0 : _a2.attributes) == null ? void 0 : _b.style) == null ? void 0 : _c.color) || null;
};
makePopupContent_fn = function(text) {
  const popupLines = [];
  const popupContent = {
    str: text,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: popupLines
      }]
    }
  };
  const lineAttributes = {
    style: {
      color: __privateGet(this, _PopupElement_instances, fontColor_get),
      fontSize: __privateGet(this, _PopupElement_instances, fontSize_get) ? `calc(${__privateGet(this, _PopupElement_instances, fontSize_get)}px * var(--scale-factor))` : ""
    }
  };
  for (const line of text.split("\n")) {
    popupLines.push({
      name: "span",
      value: line,
      attributes: lineAttributes
    });
  }
  return popupContent;
};
keyDown_fn = function(event) {
  if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
    return;
  }
  if (event.key === "Enter" || event.key === "Escape" && __privateGet(this, _pinned)) {
    __privateMethod(this, _PopupElement_instances, toggle_fn).call(this);
  }
};
setPosition_fn = function() {
  if (__privateGet(this, _position2) !== null) {
    return;
  }
  const {
    page: {
      view
    },
    viewport: {
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    }
  } = __privateGet(this, _parent);
  let useParentRect = !!__privateGet(this, _parentRect);
  let rect = useParentRect ? __privateGet(this, _parentRect) : __privateGet(this, _rect);
  for (const element of __privateGet(this, _elements)) {
    if (!rect || Util.intersect(element.data.rect, rect) !== null) {
      rect = element.data.rect;
      useParentRect = true;
      break;
    }
  }
  const normalizedRect = Util.normalizeRect([rect[0], view[3] - rect[1] + view[1], rect[2], view[3] - rect[3] + view[1]]);
  const HORIZONTAL_SPACE_AFTER_ANNOTATION = 5;
  const parentWidth = useParentRect ? rect[2] - rect[0] + HORIZONTAL_SPACE_AFTER_ANNOTATION : 0;
  const popupLeft = normalizedRect[0] + parentWidth;
  const popupTop = normalizedRect[1];
  __privateSet(this, _position2, [100 * (popupLeft - pageX) / pageWidth, 100 * (popupTop - pageY) / pageHeight]);
  const {
    style
  } = __privateGet(this, _container4);
  style.left = `${__privateGet(this, _position2)[0]}%`;
  style.top = `${__privateGet(this, _position2)[1]}%`;
};
toggle_fn = function() {
  __privateSet(this, _pinned, !__privateGet(this, _pinned));
  if (__privateGet(this, _pinned)) {
    __privateMethod(this, _PopupElement_instances, show_fn).call(this);
    __privateGet(this, _container4).addEventListener("click", __privateGet(this, _boundToggle));
    __privateGet(this, _container4).addEventListener("keydown", __privateGet(this, _boundKeyDown));
  } else {
    __privateMethod(this, _PopupElement_instances, hide_fn).call(this);
    __privateGet(this, _container4).removeEventListener("click", __privateGet(this, _boundToggle));
    __privateGet(this, _container4).removeEventListener("keydown", __privateGet(this, _boundKeyDown));
  }
};
show_fn = function() {
  if (!__privateGet(this, _popup)) {
    this.render();
  }
  if (!this.isVisible) {
    __privateMethod(this, _PopupElement_instances, setPosition_fn).call(this);
    __privateGet(this, _container4).hidden = false;
    __privateGet(this, _container4).style.zIndex = parseInt(__privateGet(this, _container4).style.zIndex) + 1e3;
  } else if (__privateGet(this, _pinned)) {
    __privateGet(this, _container4).classList.add("focused");
  }
};
hide_fn = function() {
  __privateGet(this, _container4).classList.remove("focused");
  if (__privateGet(this, _pinned) || !this.isVisible) {
    return;
  }
  __privateGet(this, _container4).hidden = true;
  __privateGet(this, _container4).style.zIndex = parseInt(__privateGet(this, _container4).style.zIndex) - 1e3;
};
var FreeTextAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.textContent = parameters.data.textContent;
    this.textPosition = parameters.data.textPosition;
    this.annotationEditorType = AnnotationEditorType.FREETEXT;
  }
  render() {
    this.container.classList.add("freeTextAnnotation");
    if (this.textContent) {
      const content = document.createElement("div");
      content.classList.add("annotationTextContent");
      content.setAttribute("role", "comment");
      for (const line of this.textContent) {
        const lineSpan = document.createElement("span");
        lineSpan.textContent = line;
        content.append(lineSpan);
      }
      this.container.append(content);
    }
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
};
var _line;
var LineAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    __privateAdd(this, _line, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const data = this.data;
    const {
      width,
      height
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(width, height, true);
    const line = __privateSet(this, _line, this.svgFactory.createElement("svg:line"));
    line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
    line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
    line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
    line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
    line.setAttribute("stroke-width", data.borderStyle.width || 1);
    line.setAttribute("stroke", "transparent");
    line.setAttribute("fill", "transparent");
    svg.append(line);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return __privateGet(this, _line);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
_line = new WeakMap();
var _square;
var SquareAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    __privateAdd(this, _square, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const data = this.data;
    const {
      width,
      height
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(width, height, true);
    const borderWidth = data.borderStyle.width;
    const square = __privateSet(this, _square, this.svgFactory.createElement("svg:rect"));
    square.setAttribute("x", borderWidth / 2);
    square.setAttribute("y", borderWidth / 2);
    square.setAttribute("width", width - borderWidth);
    square.setAttribute("height", height - borderWidth);
    square.setAttribute("stroke-width", borderWidth || 1);
    square.setAttribute("stroke", "transparent");
    square.setAttribute("fill", "transparent");
    svg.append(square);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return __privateGet(this, _square);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
_square = new WeakMap();
var _circle;
var CircleAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    __privateAdd(this, _circle, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const data = this.data;
    const {
      width,
      height
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(width, height, true);
    const borderWidth = data.borderStyle.width;
    const circle = __privateSet(this, _circle, this.svgFactory.createElement("svg:ellipse"));
    circle.setAttribute("cx", width / 2);
    circle.setAttribute("cy", height / 2);
    circle.setAttribute("rx", width / 2 - borderWidth / 2);
    circle.setAttribute("ry", height / 2 - borderWidth / 2);
    circle.setAttribute("stroke-width", borderWidth || 1);
    circle.setAttribute("stroke", "transparent");
    circle.setAttribute("fill", "transparent");
    svg.append(circle);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return __privateGet(this, _circle);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
_circle = new WeakMap();
var _polyline;
var PolylineAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    __privateAdd(this, _polyline, null);
    this.containerClassName = "polylineAnnotation";
    this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        vertices,
        borderStyle,
        popupRef
      }
    } = this;
    if (!vertices) {
      return this.container;
    }
    const {
      width,
      height
    } = getRectDims(rect);
    const svg = this.svgFactory.create(width, height, true);
    let points = [];
    for (let i = 0, ii = vertices.length; i < ii; i += 2) {
      const x = vertices[i] - rect[0];
      const y = rect[3] - vertices[i + 1];
      points.push(`${x},${y}`);
    }
    points = points.join(" ");
    const polyline = __privateSet(this, _polyline, this.svgFactory.createElement(this.svgElementName));
    polyline.setAttribute("points", points);
    polyline.setAttribute("stroke-width", borderStyle.width || 1);
    polyline.setAttribute("stroke", "transparent");
    polyline.setAttribute("fill", "transparent");
    svg.append(polyline);
    this.container.append(svg);
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return __privateGet(this, _polyline);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
_polyline = new WeakMap();
var PolygonAnnotationElement = class extends PolylineAnnotationElement {
  constructor(parameters) {
    super(parameters);
    this.containerClassName = "polygonAnnotation";
    this.svgElementName = "svg:polygon";
  }
};
var CaretAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("caretAnnotation");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
};
var _polylinesGroupElement, _polylines, _InkAnnotationElement_instances, getTransform_fn;
var InkAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    __privateAdd(this, _InkAnnotationElement_instances);
    __privateAdd(this, _polylinesGroupElement, null);
    __privateAdd(this, _polylines, []);
    this.containerClassName = "inkAnnotation";
    this.svgElementName = "svg:polyline";
    this.annotationEditorType = this.data.it === "InkHighlight" ? AnnotationEditorType.HIGHLIGHT : AnnotationEditorType.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        rotation,
        inkLists,
        borderStyle,
        popupRef
      }
    } = this;
    const {
      transform,
      width,
      height
    } = __privateMethod(this, _InkAnnotationElement_instances, getTransform_fn).call(this, rotation, rect);
    const svg = this.svgFactory.create(width, height, true);
    const g = __privateSet(this, _polylinesGroupElement, this.svgFactory.createElement("svg:g"));
    svg.append(g);
    g.setAttribute("stroke-width", borderStyle.width || 1);
    g.setAttribute("stroke-linecap", "round");
    g.setAttribute("stroke-linejoin", "round");
    g.setAttribute("stroke-miterlimit", 10);
    g.setAttribute("stroke", "transparent");
    g.setAttribute("fill", "transparent");
    g.setAttribute("transform", transform);
    for (let i = 0, ii = inkLists.length; i < ii; i++) {
      const polyline = this.svgFactory.createElement(this.svgElementName);
      __privateGet(this, _polylines).push(polyline);
      polyline.setAttribute("points", inkLists[i].join(","));
      g.append(polyline);
    }
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(svg);
    this._editOnDoubleClick();
    return this.container;
  }
  updateEdited(params) {
    super.updateEdited(params);
    const {
      thickness,
      points,
      rect
    } = params;
    const g = __privateGet(this, _polylinesGroupElement);
    if (thickness >= 0) {
      g.setAttribute("stroke-width", thickness || 1);
    }
    if (points) {
      for (let i = 0, ii = __privateGet(this, _polylines).length; i < ii; i++) {
        __privateGet(this, _polylines)[i].setAttribute("points", points[i].join(","));
      }
    }
    if (rect) {
      const {
        transform,
        width,
        height
      } = __privateMethod(this, _InkAnnotationElement_instances, getTransform_fn).call(this, this.data.rotation, rect);
      const root = g.parentElement;
      root.setAttribute("viewBox", `0 0 ${width} ${height}`);
      g.setAttribute("transform", transform);
    }
  }
  getElementsToTriggerPopup() {
    return __privateGet(this, _polylines);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
_polylinesGroupElement = new WeakMap();
_polylines = new WeakMap();
_InkAnnotationElement_instances = new WeakSet();
getTransform_fn = function(rotation, rect) {
  switch (rotation) {
    case 90:
      return {
        transform: `rotate(90) translate(${-rect[0]},${rect[1]}) scale(1,-1)`,
        width: rect[3] - rect[1],
        height: rect[2] - rect[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-rect[2]},${rect[1]}) scale(1,-1)`,
        width: rect[2] - rect[0],
        height: rect[3] - rect[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-rect[2]},${rect[3]}) scale(1,-1)`,
        width: rect[3] - rect[1],
        height: rect[2] - rect[0]
      };
    default:
      return {
        transform: `translate(${-rect[0]},${rect[3]}) scale(1,-1)`,
        width: rect[2] - rect[0],
        height: rect[3] - rect[1]
      };
  }
};
var HighlightAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
    this.annotationEditorType = AnnotationEditorType.HIGHLIGHT;
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("highlightAnnotation");
    this._editOnDoubleClick();
    return this.container;
  }
};
var UnderlineAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("underlineAnnotation");
    return this.container;
  }
};
var SquigglyAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("squigglyAnnotation");
    return this.container;
  }
};
var StrikeOutAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("strikeoutAnnotation");
    return this.container;
  }
};
var StampAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.annotationEditorType = AnnotationEditorType.STAMP;
  }
  render() {
    this.container.classList.add("stampAnnotation");
    this.container.setAttribute("role", "img");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
};
var _trigger, _FileAttachmentAnnotationElement_instances, download_fn;
var FileAttachmentAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    var _a2;
    super(parameters, {
      isRenderable: true
    });
    __privateAdd(this, _FileAttachmentAnnotationElement_instances);
    __privateAdd(this, _trigger, null);
    const {
      file
    } = this.data;
    this.filename = file.filename;
    this.content = file.content;
    (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("fileattachmentannotation", {
      source: this,
      ...file
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container,
      data
    } = this;
    let trigger;
    if (data.hasAppearance || data.fillAlpha === 0) {
      trigger = document.createElement("div");
    } else {
      trigger = document.createElement("img");
      trigger.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(data.name) ? "paperclip" : "pushpin"}.svg`;
      if (data.fillAlpha && data.fillAlpha < 1) {
        trigger.style = `filter: opacity(${Math.round(data.fillAlpha * 100)}%);`;
      }
    }
    trigger.addEventListener("dblclick", __privateMethod(this, _FileAttachmentAnnotationElement_instances, download_fn).bind(this));
    __privateSet(this, _trigger, trigger);
    const {
      isMac
    } = util_FeatureTest.platform;
    container.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" && (isMac ? evt.metaKey : evt.ctrlKey)) {
        __privateMethod(this, _FileAttachmentAnnotationElement_instances, download_fn).call(this);
      }
    });
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    } else {
      trigger.classList.add("popupTriggerArea");
    }
    container.append(trigger);
    return container;
  }
  getElementsToTriggerPopup() {
    return __privateGet(this, _trigger);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
_trigger = new WeakMap();
_FileAttachmentAnnotationElement_instances = new WeakSet();
download_fn = function() {
  var _a2;
  (_a2 = this.downloadManager) == null ? void 0 : _a2.openOrDownloadData(this.content, this.filename);
};
var _accessibilityManager, _annotationCanvasMap, _editableAnnotations, _structTreeLayer, _AnnotationLayer_instances, appendElement_fn, setAnnotationCanvasMap_fn;
var AnnotationLayer = class {
  constructor({
    div,
    accessibilityManager,
    annotationCanvasMap,
    annotationEditorUIManager,
    page,
    viewport,
    structTreeLayer
  }) {
    __privateAdd(this, _AnnotationLayer_instances);
    __privateAdd(this, _accessibilityManager, null);
    __privateAdd(this, _annotationCanvasMap, null);
    __privateAdd(this, _editableAnnotations, /* @__PURE__ */ new Map());
    __privateAdd(this, _structTreeLayer, null);
    this.div = div;
    __privateSet(this, _accessibilityManager, accessibilityManager);
    __privateSet(this, _annotationCanvasMap, annotationCanvasMap);
    __privateSet(this, _structTreeLayer, structTreeLayer || null);
    this.page = page;
    this.viewport = viewport;
    this.zIndex = 0;
    this._annotationEditorUIManager = annotationEditorUIManager;
  }
  hasEditableAnnotations() {
    return __privateGet(this, _editableAnnotations).size > 0;
  }
  async render(params) {
    var _a2;
    const {
      annotations
    } = params;
    const layer = this.div;
    setLayerDimensions(layer, this.viewport);
    const popupToElements = /* @__PURE__ */ new Map();
    const elementParams = {
      data: null,
      layer,
      linkService: params.linkService,
      downloadManager: params.downloadManager,
      imageResourcesPath: params.imageResourcesPath || "",
      renderForms: params.renderForms !== false,
      svgFactory: new DOMSVGFactory(),
      annotationStorage: params.annotationStorage || new AnnotationStorage(),
      enableScripting: params.enableScripting === true,
      hasJSActions: params.hasJSActions,
      fieldObjects: params.fieldObjects,
      parent: this,
      elements: null
    };
    for (const data of annotations) {
      if (data.noHTML) {
        continue;
      }
      const isPopupAnnotation = data.annotationType === AnnotationType.POPUP;
      if (!isPopupAnnotation) {
        const {
          width,
          height
        } = getRectDims(data.rect);
        if (width <= 0 || height <= 0) {
          continue;
        }
      } else {
        const elements = popupToElements.get(data.id);
        if (!elements) {
          continue;
        }
        elementParams.elements = elements;
      }
      elementParams.data = data;
      const element = AnnotationElementFactory.create(elementParams);
      if (!element.isRenderable) {
        continue;
      }
      if (!isPopupAnnotation && data.popupRef) {
        const elements = popupToElements.get(data.popupRef);
        if (!elements) {
          popupToElements.set(data.popupRef, [element]);
        } else {
          elements.push(element);
        }
      }
      const rendered = element.render();
      if (data.hidden) {
        rendered.style.visibility = "hidden";
      }
      await __privateMethod(this, _AnnotationLayer_instances, appendElement_fn).call(this, rendered, data.id);
      if (element._isEditable) {
        __privateGet(this, _editableAnnotations).set(element.data.id, element);
        (_a2 = this._annotationEditorUIManager) == null ? void 0 : _a2.renderAnnotationElement(element);
      }
    }
    __privateMethod(this, _AnnotationLayer_instances, setAnnotationCanvasMap_fn).call(this);
  }
  update({
    viewport
  }) {
    const layer = this.div;
    this.viewport = viewport;
    setLayerDimensions(layer, {
      rotation: viewport.rotation
    });
    __privateMethod(this, _AnnotationLayer_instances, setAnnotationCanvasMap_fn).call(this);
    layer.hidden = false;
  }
  getEditableAnnotations() {
    return Array.from(__privateGet(this, _editableAnnotations).values());
  }
  getEditableAnnotation(id) {
    return __privateGet(this, _editableAnnotations).get(id);
  }
};
_accessibilityManager = new WeakMap();
_annotationCanvasMap = new WeakMap();
_editableAnnotations = new WeakMap();
_structTreeLayer = new WeakMap();
_AnnotationLayer_instances = new WeakSet();
appendElement_fn = async function(element, id) {
  var _a2, _b;
  const contentElement = element.firstChild || element;
  const annotationId = contentElement.id = `${AnnotationPrefix}${id}`;
  const ariaAttributes = await ((_a2 = __privateGet(this, _structTreeLayer)) == null ? void 0 : _a2.getAriaAttributes(annotationId));
  if (ariaAttributes) {
    for (const [key, value] of ariaAttributes) {
      contentElement.setAttribute(key, value);
    }
  }
  this.div.append(element);
  (_b = __privateGet(this, _accessibilityManager)) == null ? void 0 : _b.moveElementInDOM(this.div, element, contentElement, false);
};
setAnnotationCanvasMap_fn = function() {
  if (!__privateGet(this, _annotationCanvasMap)) {
    return;
  }
  const layer = this.div;
  for (const [id, canvas] of __privateGet(this, _annotationCanvasMap)) {
    const element = layer.querySelector(`[data-annotation-id="${id}"]`);
    if (!element) {
      continue;
    }
    canvas.className = "annotationContent";
    const {
      firstChild
    } = element;
    if (!firstChild) {
      element.append(canvas);
    } else if (firstChild.nodeName === "CANVAS") {
      firstChild.replaceWith(canvas);
    } else if (!firstChild.classList.contains("annotationContent")) {
      firstChild.before(canvas);
    } else {
      firstChild.after(canvas);
    }
  }
  __privateGet(this, _annotationCanvasMap).clear();
};
var EOL_PATTERN = /\r\n?|\n/g;
var _color2, _content, _editorDivId, _editModeAC, _fontSize, _FreeTextEditor_instances, updateFontSize_fn, updateColor_fn, extractText_fn, setEditorDimensions_fn, _FreeTextEditor_static, getNodeContent_fn, setContent_fn, serializeContent_fn, deserializeContent_fn, hasElementChanged_fn;
var _FreeTextEditor = class _FreeTextEditor extends AnnotationEditor {
  constructor(params) {
    super({
      ...params,
      name: "freeTextEditor"
    });
    __privateAdd(this, _FreeTextEditor_instances);
    __privateAdd(this, _color2);
    __privateAdd(this, _content, "");
    __privateAdd(this, _editorDivId, `${this.id}-editor`);
    __privateAdd(this, _editModeAC, null);
    __privateAdd(this, _fontSize);
    __privateSet(this, _color2, params.color || _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor);
    __privateSet(this, _fontSize, params.fontSize || _FreeTextEditor._defaultFontSize);
  }
  static get _keyboardManager() {
    const proto = _FreeTextEditor.prototype;
    const arrowChecker = (self) => self.isEmpty();
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], proto.commitOrRemove, {
      bubbles: true
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], proto.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], proto._translateEmpty, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto._translateEmpty, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto._translateEmpty, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto._translateEmpty, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto._translateEmpty, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto._translateEmpty, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto._translateEmpty, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto._translateEmpty, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    const style = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(style.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        _FreeTextEditor._defaultFontSize = value;
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        _FreeTextEditor._defaultColor = value;
        break;
    }
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        __privateMethod(this, _FreeTextEditor_instances, updateFontSize_fn).call(this, value);
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        __privateMethod(this, _FreeTextEditor_instances, updateColor_fn).call(this, value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, _FreeTextEditor._defaultFontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, __privateGet(this, _fontSize)], [AnnotationEditorParamsType.FREETEXT_COLOR, __privateGet(this, _color2)]];
  }
  _translateEmpty(x, y) {
    this._uiManager.translateSelectedEditors(x, y, true);
  }
  getInitialTranslation() {
    const scale = this.parentScale;
    return [-_FreeTextEditor._internalPadding * scale, -(_FreeTextEditor._internalPadding + __privateGet(this, _fontSize)) * scale];
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  enableEditMode() {
    if (this.isInEditMode()) {
      return;
    }
    this.parent.setEditingState(false);
    this.parent.updateToolbar(AnnotationEditorType.FREETEXT);
    super.enableEditMode();
    this.overlayDiv.classList.remove("enabled");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    __privateSet(this, _editModeAC, new AbortController());
    const signal = this._uiManager.combinedSignal(__privateGet(this, _editModeAC));
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal
    });
  }
  disableEditMode() {
    var _a2;
    if (!this.isInEditMode()) {
      return;
    }
    this.parent.setEditingState(true);
    super.disableEditMode();
    this.overlayDiv.classList.add("enabled");
    this.editorDiv.contentEditable = false;
    this.div.setAttribute("aria-activedescendant", __privateGet(this, _editorDivId));
    this._isDraggable = true;
    (_a2 = __privateGet(this, _editModeAC)) == null ? void 0 : _a2.abort();
    __privateSet(this, _editModeAC, null);
    this.div.focus({
      preventScroll: true
    });
    this.isEditing = false;
    this.parent.div.classList.add("freetextEditing");
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    super.focusin(event);
    if (event.target !== this.editorDiv) {
      this.editorDiv.focus();
    }
  }
  onceAdded(focus) {
    var _a2;
    if (this.width) {
      return;
    }
    this.enableEditMode();
    if (focus) {
      this.editorDiv.focus();
    }
    if ((_a2 = this._initialOptions) == null ? void 0 : _a2.isCentered) {
      this.center();
    }
    this._initialOptions = null;
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = false;
    if (this.parent) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freetextEditing");
    }
    super.remove();
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    super.commit();
    this.disableEditMode();
    const savedText = __privateGet(this, _content);
    const newText = __privateSet(this, _content, __privateMethod(this, _FreeTextEditor_instances, extractText_fn).call(this).trimEnd());
    if (savedText === newText) {
      return;
    }
    const setText = (text) => {
      __privateSet(this, _content, text);
      if (!text) {
        this.remove();
        return;
      }
      __privateMethod(this, _FreeTextEditor_instances, setContent_fn).call(this);
      this._uiManager.rebuild(this);
      __privateMethod(this, _FreeTextEditor_instances, setEditorDimensions_fn).call(this);
    };
    this.addCommands({
      cmd: () => {
        setText(newText);
      },
      undo: () => {
        setText(savedText);
      },
      mustExec: false
    });
    __privateMethod(this, _FreeTextEditor_instances, setEditorDimensions_fn).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode();
    this.editorDiv.focus();
  }
  dblclick(event) {
    this.enterInEditMode();
  }
  keydown(event) {
    if (event.target === this.div && event.key === "Enter") {
      this.enterInEditMode();
      event.preventDefault();
    }
  }
  editorDivKeydown(event) {
    _FreeTextEditor._keyboardManager.exec(this, event);
  }
  editorDivFocus(event) {
    this.isEditing = true;
  }
  editorDivBlur(event) {
    this.isEditing = false;
  }
  editorDivInput(event) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this.width) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "internal";
    this.editorDiv.setAttribute("id", __privateGet(this, _editorDivId));
    this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
    this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
    this.enableEditing();
    this.editorDiv.contentEditable = true;
    const {
      style
    } = this.editorDiv;
    style.fontSize = `calc(${__privateGet(this, _fontSize)}px * var(--scale-factor))`;
    style.color = __privateGet(this, _color2);
    this.div.append(this.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("overlay", "enabled");
    this.div.append(this.overlayDiv);
    bindEvents(this, this.div, ["dblclick", "keydown"]);
    if (this.width) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position
        } = this._initialData;
        let [tx, ty] = this.getInitialTranslation();
        [tx, ty] = this.pageTranslationToScreen(tx, ty);
        const [pageWidth, pageHeight] = this.pageDimensions;
        const [pageX, pageY] = this.pageTranslation;
        let posX, posY;
        switch (this.rotation) {
          case 0:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY + this.height - (position[1] - pageY) / pageHeight;
            break;
          case 90:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [ty, -tx];
            break;
          case 180:
            posX = baseX - this.width + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [-tx, -ty];
            break;
          case 270:
            posX = baseX + (position[0] - pageX - this.height * pageHeight) / pageWidth;
            posY = baseY + (position[1] - pageY - this.width * pageWidth) / pageHeight;
            [tx, ty] = [-ty, tx];
            break;
        }
        this.setAt(posX * parentWidth, posY * parentHeight, tx, ty);
      } else {
        this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
      }
      __privateMethod(this, _FreeTextEditor_instances, setContent_fn).call(this);
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } else {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    return this.div;
  }
  editorDivPaste(event) {
    var _a2, _b, _c;
    const clipboardData = event.clipboardData || window.clipboardData;
    const {
      types
    } = clipboardData;
    if (types.length === 1 && types[0] === "text/plain") {
      return;
    }
    event.preventDefault();
    const paste = __privateMethod(_a2 = _FreeTextEditor, _FreeTextEditor_static, deserializeContent_fn).call(_a2, clipboardData.getData("text") || "").replaceAll(EOL_PATTERN, "\n");
    if (!paste) {
      return;
    }
    const selection = window.getSelection();
    if (!selection.rangeCount) {
      return;
    }
    this.editorDiv.normalize();
    selection.deleteFromDocument();
    const range = selection.getRangeAt(0);
    if (!paste.includes("\n")) {
      range.insertNode(document.createTextNode(paste));
      this.editorDiv.normalize();
      selection.collapseToStart();
      return;
    }
    const {
      startContainer,
      startOffset
    } = range;
    const bufferBefore = [];
    const bufferAfter = [];
    if (startContainer.nodeType === Node.TEXT_NODE) {
      const parent = startContainer.parentElement;
      bufferAfter.push(startContainer.nodeValue.slice(startOffset).replaceAll(EOL_PATTERN, ""));
      if (parent !== this.editorDiv) {
        let buffer = bufferBefore;
        for (const child of this.editorDiv.childNodes) {
          if (child === parent) {
            buffer = bufferAfter;
            continue;
          }
          buffer.push(__privateMethod(_b = _FreeTextEditor, _FreeTextEditor_static, getNodeContent_fn).call(_b, child));
        }
      }
      bufferBefore.push(startContainer.nodeValue.slice(0, startOffset).replaceAll(EOL_PATTERN, ""));
    } else if (startContainer === this.editorDiv) {
      let buffer = bufferBefore;
      let i = 0;
      for (const child of this.editorDiv.childNodes) {
        if (i++ === startOffset) {
          buffer = bufferAfter;
        }
        buffer.push(__privateMethod(_c = _FreeTextEditor, _FreeTextEditor_static, getNodeContent_fn).call(_c, child));
      }
    }
    __privateSet(this, _content, `${bufferBefore.join("\n")}${paste}${bufferAfter.join("\n")}`);
    __privateMethod(this, _FreeTextEditor_instances, setContent_fn).call(this);
    const newRange = new Range();
    let beforeLength = bufferBefore.reduce((acc, line) => acc + line.length, 0);
    for (const {
      firstChild
    } of this.editorDiv.childNodes) {
      if (firstChild.nodeType === Node.TEXT_NODE) {
        const length = firstChild.nodeValue.length;
        if (beforeLength <= length) {
          newRange.setStart(firstChild, beforeLength);
          newRange.setEnd(firstChild, beforeLength);
          break;
        }
        beforeLength -= length;
      }
    }
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(data, parent, uiManager) {
    var _a2;
    let initialData = null;
    if (data instanceof FreeTextAnnotationElement) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize,
            fontColor
          },
          rect,
          rotation,
          id,
          popupRef
        },
        textContent,
        textPosition,
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      if (!textContent || textContent.length === 0) {
        return null;
      }
      initialData = data = {
        annotationType: AnnotationEditorType.FREETEXT,
        color: Array.from(fontColor),
        fontSize,
        value: textContent.join("\n"),
        position: textPosition,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    __privateSet(editor, _fontSize, data.fontSize);
    __privateSet(editor, _color2, Util.makeHexColor(...data.color));
    __privateSet(editor, _content, __privateMethod(_a2 = _FreeTextEditor, _FreeTextEditor_static, deserializeContent_fn).call(_a2, data.value));
    editor.annotationElementId = data.id || null;
    editor._initialData = initialData;
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const padding = _FreeTextEditor._internalPadding * this.parentScale;
    const rect = this.getRect(padding, padding);
    const color = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : __privateGet(this, _color2));
    const serialized = {
      annotationType: AnnotationEditorType.FREETEXT,
      color,
      fontSize: __privateGet(this, _fontSize),
      value: __privateMethod(this, _FreeTextEditor_instances, serializeContent_fn).call(this),
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      return serialized;
    }
    if (this.annotationElementId && !__privateMethod(this, _FreeTextEditor_instances, hasElementChanged_fn).call(this, serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  renderAnnotationElement(annotation) {
    const content = super.renderAnnotationElement(annotation);
    if (this.deleted) {
      return content;
    }
    const {
      style
    } = content;
    style.fontSize = `calc(${__privateGet(this, _fontSize)}px * var(--scale-factor))`;
    style.color = __privateGet(this, _color2);
    content.replaceChildren();
    for (const line of __privateGet(this, _content).split("\n")) {
      const div = document.createElement("div");
      div.append(line ? document.createTextNode(line) : document.createElement("br"));
      content.append(div);
    }
    const padding = _FreeTextEditor._internalPadding * this.parentScale;
    annotation.updateEdited({
      rect: this.getRect(padding, padding),
      popupContent: __privateGet(this, _content)
    });
    return content;
  }
  resetAnnotationElement(annotation) {
    super.resetAnnotationElement(annotation);
    annotation.resetEdited();
  }
};
_color2 = new WeakMap();
_content = new WeakMap();
_editorDivId = new WeakMap();
_editModeAC = new WeakMap();
_fontSize = new WeakMap();
_FreeTextEditor_instances = new WeakSet();
updateFontSize_fn = function(fontSize) {
  const setFontsize = (size) => {
    this.editorDiv.style.fontSize = `calc(${size}px * var(--scale-factor))`;
    this.translate(0, -(size - __privateGet(this, _fontSize)) * this.parentScale);
    __privateSet(this, _fontSize, size);
    __privateMethod(this, _FreeTextEditor_instances, setEditorDimensions_fn).call(this);
  };
  const savedFontsize = __privateGet(this, _fontSize);
  this.addCommands({
    cmd: setFontsize.bind(this, fontSize),
    undo: setFontsize.bind(this, savedFontsize),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: true,
    type: AnnotationEditorParamsType.FREETEXT_SIZE,
    overwriteIfSameType: true,
    keepUndo: true
  });
};
updateColor_fn = function(color) {
  const setColor = (col) => {
    __privateSet(this, _color2, this.editorDiv.style.color = col);
  };
  const savedColor = __privateGet(this, _color2);
  this.addCommands({
    cmd: setColor.bind(this, color),
    undo: setColor.bind(this, savedColor),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: true,
    type: AnnotationEditorParamsType.FREETEXT_COLOR,
    overwriteIfSameType: true,
    keepUndo: true
  });
};
extractText_fn = function() {
  var _a2;
  const buffer = [];
  this.editorDiv.normalize();
  let prevChild = null;
  for (const child of this.editorDiv.childNodes) {
    if ((prevChild == null ? void 0 : prevChild.nodeType) === Node.TEXT_NODE && child.nodeName === "BR") {
      continue;
    }
    buffer.push(__privateMethod(_a2 = _FreeTextEditor, _FreeTextEditor_static, getNodeContent_fn).call(_a2, child));
    prevChild = child;
  }
  return buffer.join("\n");
};
setEditorDimensions_fn = function() {
  const [parentWidth, parentHeight] = this.parentDimensions;
  let rect;
  if (this.isAttachedToDOM) {
    rect = this.div.getBoundingClientRect();
  } else {
    const {
      currentLayer,
      div
    } = this;
    const savedDisplay = div.style.display;
    const savedVisibility = div.classList.contains("hidden");
    div.classList.remove("hidden");
    div.style.display = "hidden";
    currentLayer.div.append(this.div);
    rect = div.getBoundingClientRect();
    div.remove();
    div.style.display = savedDisplay;
    div.classList.toggle("hidden", savedVisibility);
  }
  if (this.rotation % 180 === this.parentRotation % 180) {
    this.width = rect.width / parentWidth;
    this.height = rect.height / parentHeight;
  } else {
    this.width = rect.height / parentWidth;
    this.height = rect.width / parentHeight;
  }
  this.fixAndSetPosition();
};
_FreeTextEditor_static = new WeakSet();
getNodeContent_fn = function(node) {
  return (node.nodeType === Node.TEXT_NODE ? node.nodeValue : node.innerText).replaceAll(EOL_PATTERN, "");
};
setContent_fn = function() {
  this.editorDiv.replaceChildren();
  if (!__privateGet(this, _content)) {
    return;
  }
  for (const line of __privateGet(this, _content).split("\n")) {
    const div = document.createElement("div");
    div.append(line ? document.createTextNode(line) : document.createElement("br"));
    this.editorDiv.append(div);
  }
};
serializeContent_fn = function() {
  return __privateGet(this, _content).replaceAll(" ", " ");
};
deserializeContent_fn = function(content) {
  return content.replaceAll(" ", " ");
};
hasElementChanged_fn = function(serialized) {
  const {
    value,
    fontSize,
    color,
    pageIndex
  } = this._initialData;
  return this._hasBeenMoved || serialized.value !== value || serialized.fontSize !== fontSize || serialized.color.some((c, i) => c !== color[i]) || serialized.pageIndex !== pageIndex;
};
__privateAdd(_FreeTextEditor, _FreeTextEditor_static);
__publicField(_FreeTextEditor, "_freeTextDefaultContent", "");
__publicField(_FreeTextEditor, "_internalPadding", 0);
__publicField(_FreeTextEditor, "_defaultColor", null);
__publicField(_FreeTextEditor, "_defaultFontSize", 10);
__publicField(_FreeTextEditor, "_type", "freetext");
__publicField(_FreeTextEditor, "_editorType", AnnotationEditorType.FREETEXT);
var FreeTextEditor = _FreeTextEditor;
var Outline = class {
  toSVGPath() {
    unreachable("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    unreachable("Abstract getter `box` must be implemented.");
  }
  serialize(_bbox3, _rotation4) {
    unreachable("Abstract method `serialize` must be implemented.");
  }
  static _rescale(src, tx, ty, sx, sy, dest) {
    dest || (dest = new Float32Array(src.length));
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i] * sx;
      dest[i + 1] = ty + src[i + 1] * sy;
    }
    return dest;
  }
  static _rescaleAndSwap(src, tx, ty, sx, sy, dest) {
    dest || (dest = new Float32Array(src.length));
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i + 1] * sx;
      dest[i + 1] = ty + src[i] * sy;
    }
    return dest;
  }
  static _translate(src, tx, ty, dest) {
    dest || (dest = new Float32Array(src.length));
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i];
      dest[i + 1] = ty + src[i + 1];
    }
    return dest;
  }
  static svgRound(x) {
    return Math.round(x * 1e4);
  }
  static _normalizePoint(x, y, parentWidth, parentHeight, rotation) {
    switch (rotation) {
      case 90:
        return [1 - y / parentWidth, x / parentHeight];
      case 180:
        return [1 - x / parentWidth, 1 - y / parentHeight];
      case 270:
        return [y / parentWidth, 1 - x / parentHeight];
      default:
        return [x / parentWidth, y / parentHeight];
    }
  }
  static _normalizePagePoint(x, y, rotation) {
    switch (rotation) {
      case 90:
        return [1 - y, x];
      case 180:
        return [1 - x, 1 - y];
      case 270:
        return [y, 1 - x];
      default:
        return [x, y];
    }
  }
  static createBezierPoints(x1, y1, x2, y2, x3, y3) {
    return [(x1 + 5 * x2) / 6, (y1 + 5 * y2) / 6, (5 * x2 + x3) / 6, (5 * y2 + y3) / 6, (x2 + x3) / 2, (y2 + y3) / 2];
  }
};
__publicField(Outline, "PRECISION", 1e-4);
var _box, _bottom, _innerMargin, _isLTR, _top, _last, _lastX, _lastY, _min, _min_dist, _scaleFactor, _thickness, _points, _MIN_DIST, _MIN_DIFF, _MIN, _FreeDrawOutliner_instances, getLastCoords_fn, toSVGPathTwoPoints_fn, toSVGPathStart_fn, toSVGPathEnd_fn, getOutlineTwoPoints_fn, getOutlineStart_fn, getOutlineEnd_fn;
var _FreeDrawOutliner = class _FreeDrawOutliner {
  constructor({
    x,
    y
  }, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    __privateAdd(this, _FreeDrawOutliner_instances);
    __privateAdd(this, _box);
    __privateAdd(this, _bottom, []);
    __privateAdd(this, _innerMargin);
    __privateAdd(this, _isLTR);
    __privateAdd(this, _top, []);
    __privateAdd(this, _last, new Float32Array(18));
    __privateAdd(this, _lastX);
    __privateAdd(this, _lastY);
    __privateAdd(this, _min);
    __privateAdd(this, _min_dist);
    __privateAdd(this, _scaleFactor);
    __privateAdd(this, _thickness);
    __privateAdd(this, _points, []);
    __privateSet(this, _box, box);
    __privateSet(this, _thickness, thickness * scaleFactor);
    __privateSet(this, _isLTR, isLTR);
    __privateGet(this, _last).set([NaN, NaN, NaN, NaN, x, y], 6);
    __privateSet(this, _innerMargin, innerMargin);
    __privateSet(this, _min_dist, __privateGet(_FreeDrawOutliner, _MIN_DIST) * scaleFactor);
    __privateSet(this, _min, __privateGet(_FreeDrawOutliner, _MIN) * scaleFactor);
    __privateSet(this, _scaleFactor, scaleFactor);
    __privateGet(this, _points).push(x, y);
  }
  isEmpty() {
    return isNaN(__privateGet(this, _last)[8]);
  }
  add({
    x,
    y
  }) {
    var _a2;
    __privateSet(this, _lastX, x);
    __privateSet(this, _lastY, y);
    const [layerX, layerY, layerWidth, layerHeight] = __privateGet(this, _box);
    let [x1, y1, x2, y2] = __privateGet(this, _last).subarray(8, 12);
    const diffX = x - x2;
    const diffY = y - y2;
    const d = Math.hypot(diffX, diffY);
    if (d < __privateGet(this, _min)) {
      return false;
    }
    const diffD = d - __privateGet(this, _min_dist);
    const K = diffD / d;
    const shiftX = K * diffX;
    const shiftY = K * diffY;
    let x0 = x1;
    let y0 = y1;
    x1 = x2;
    y1 = y2;
    x2 += shiftX;
    y2 += shiftY;
    (_a2 = __privateGet(this, _points)) == null ? void 0 : _a2.push(x, y);
    const nX = -shiftY / diffD;
    const nY = shiftX / diffD;
    const thX = nX * __privateGet(this, _thickness);
    const thY = nY * __privateGet(this, _thickness);
    __privateGet(this, _last).set(__privateGet(this, _last).subarray(2, 8), 0);
    __privateGet(this, _last).set([x2 + thX, y2 + thY], 4);
    __privateGet(this, _last).set(__privateGet(this, _last).subarray(14, 18), 12);
    __privateGet(this, _last).set([x2 - thX, y2 - thY], 16);
    if (isNaN(__privateGet(this, _last)[6])) {
      if (__privateGet(this, _top).length === 0) {
        __privateGet(this, _last).set([x1 + thX, y1 + thY], 2);
        __privateGet(this, _top).push(NaN, NaN, NaN, NaN, (x1 + thX - layerX) / layerWidth, (y1 + thY - layerY) / layerHeight);
        __privateGet(this, _last).set([x1 - thX, y1 - thY], 14);
        __privateGet(this, _bottom).push(NaN, NaN, NaN, NaN, (x1 - thX - layerX) / layerWidth, (y1 - thY - layerY) / layerHeight);
      }
      __privateGet(this, _last).set([x0, y0, x1, y1, x2, y2], 6);
      return !this.isEmpty();
    }
    __privateGet(this, _last).set([x0, y0, x1, y1, x2, y2], 6);
    const angle = Math.abs(Math.atan2(y0 - y1, x0 - x1) - Math.atan2(shiftY, shiftX));
    if (angle < Math.PI / 2) {
      [x1, y1, x2, y2] = __privateGet(this, _last).subarray(2, 6);
      __privateGet(this, _top).push(NaN, NaN, NaN, NaN, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
      [x1, y1, x0, y0] = __privateGet(this, _last).subarray(14, 18);
      __privateGet(this, _bottom).push(NaN, NaN, NaN, NaN, ((x0 + x1) / 2 - layerX) / layerWidth, ((y0 + y1) / 2 - layerY) / layerHeight);
      return true;
    }
    [x0, y0, x1, y1, x2, y2] = __privateGet(this, _last).subarray(0, 6);
    __privateGet(this, _top).push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    [x2, y2, x1, y1, x0, y0] = __privateGet(this, _last).subarray(12, 18);
    __privateGet(this, _bottom).push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    return true;
  }
  toSVGPath() {
    if (this.isEmpty()) {
      return "";
    }
    const top = __privateGet(this, _top);
    const bottom = __privateGet(this, _bottom);
    if (isNaN(__privateGet(this, _last)[6]) && !this.isEmpty()) {
      return __privateMethod(this, _FreeDrawOutliner_instances, toSVGPathTwoPoints_fn).call(this);
    }
    const buffer = [];
    buffer.push(`M${top[4]} ${top[5]}`);
    for (let i = 6; i < top.length; i += 6) {
      if (isNaN(top[i])) {
        buffer.push(`L${top[i + 4]} ${top[i + 5]}`);
      } else {
        buffer.push(`C${top[i]} ${top[i + 1]} ${top[i + 2]} ${top[i + 3]} ${top[i + 4]} ${top[i + 5]}`);
      }
    }
    __privateMethod(this, _FreeDrawOutliner_instances, toSVGPathEnd_fn).call(this, buffer);
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      if (isNaN(bottom[i])) {
        buffer.push(`L${bottom[i + 4]} ${bottom[i + 5]}`);
      } else {
        buffer.push(`C${bottom[i]} ${bottom[i + 1]} ${bottom[i + 2]} ${bottom[i + 3]} ${bottom[i + 4]} ${bottom[i + 5]}`);
      }
    }
    __privateMethod(this, _FreeDrawOutliner_instances, toSVGPathStart_fn).call(this, buffer);
    return buffer.join(" ");
  }
  newFreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR) {
    return new FreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR);
  }
  getOutlines() {
    var _a2;
    const top = __privateGet(this, _top);
    const bottom = __privateGet(this, _bottom);
    const last = __privateGet(this, _last);
    const [layerX, layerY, layerWidth, layerHeight] = __privateGet(this, _box);
    const points = new Float32Array((((_a2 = __privateGet(this, _points)) == null ? void 0 : _a2.length) ?? 0) + 2);
    for (let i = 0, ii = points.length - 2; i < ii; i += 2) {
      points[i] = (__privateGet(this, _points)[i] - layerX) / layerWidth;
      points[i + 1] = (__privateGet(this, _points)[i + 1] - layerY) / layerHeight;
    }
    points[points.length - 2] = (__privateGet(this, _lastX) - layerX) / layerWidth;
    points[points.length - 1] = (__privateGet(this, _lastY) - layerY) / layerHeight;
    if (isNaN(last[6]) && !this.isEmpty()) {
      return __privateMethod(this, _FreeDrawOutliner_instances, getOutlineTwoPoints_fn).call(this, points);
    }
    const outline = new Float32Array(__privateGet(this, _top).length + 24 + __privateGet(this, _bottom).length);
    let N = top.length;
    for (let i = 0; i < N; i += 2) {
      if (isNaN(top[i])) {
        outline[i] = outline[i + 1] = NaN;
        continue;
      }
      outline[i] = top[i];
      outline[i + 1] = top[i + 1];
    }
    N = __privateMethod(this, _FreeDrawOutliner_instances, getOutlineEnd_fn).call(this, outline, N);
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      for (let j = 0; j < 6; j += 2) {
        if (isNaN(bottom[i + j])) {
          outline[N] = outline[N + 1] = NaN;
          N += 2;
          continue;
        }
        outline[N] = bottom[i + j];
        outline[N + 1] = bottom[i + j + 1];
        N += 2;
      }
    }
    __privateMethod(this, _FreeDrawOutliner_instances, getOutlineStart_fn).call(this, outline, N);
    return this.newFreeDrawOutline(outline, points, __privateGet(this, _box), __privateGet(this, _scaleFactor), __privateGet(this, _innerMargin), __privateGet(this, _isLTR));
  }
};
_box = new WeakMap();
_bottom = new WeakMap();
_innerMargin = new WeakMap();
_isLTR = new WeakMap();
_top = new WeakMap();
_last = new WeakMap();
_lastX = new WeakMap();
_lastY = new WeakMap();
_min = new WeakMap();
_min_dist = new WeakMap();
_scaleFactor = new WeakMap();
_thickness = new WeakMap();
_points = new WeakMap();
_MIN_DIST = new WeakMap();
_MIN_DIFF = new WeakMap();
_MIN = new WeakMap();
_FreeDrawOutliner_instances = new WeakSet();
getLastCoords_fn = function() {
  const lastTop = __privateGet(this, _last).subarray(4, 6);
  const lastBottom = __privateGet(this, _last).subarray(16, 18);
  const [x, y, width, height] = __privateGet(this, _box);
  return [(__privateGet(this, _lastX) + (lastTop[0] - lastBottom[0]) / 2 - x) / width, (__privateGet(this, _lastY) + (lastTop[1] - lastBottom[1]) / 2 - y) / height, (__privateGet(this, _lastX) + (lastBottom[0] - lastTop[0]) / 2 - x) / width, (__privateGet(this, _lastY) + (lastBottom[1] - lastTop[1]) / 2 - y) / height];
};
toSVGPathTwoPoints_fn = function() {
  const [x, y, width, height] = __privateGet(this, _box);
  const [lastTopX, lastTopY, lastBottomX, lastBottomY] = __privateMethod(this, _FreeDrawOutliner_instances, getLastCoords_fn).call(this);
  return `M${(__privateGet(this, _last)[2] - x) / width} ${(__privateGet(this, _last)[3] - y) / height} L${(__privateGet(this, _last)[4] - x) / width} ${(__privateGet(this, _last)[5] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(__privateGet(this, _last)[16] - x) / width} ${(__privateGet(this, _last)[17] - y) / height} L${(__privateGet(this, _last)[14] - x) / width} ${(__privateGet(this, _last)[15] - y) / height} Z`;
};
toSVGPathStart_fn = function(buffer) {
  const bottom = __privateGet(this, _bottom);
  buffer.push(`L${bottom[4]} ${bottom[5]} Z`);
};
toSVGPathEnd_fn = function(buffer) {
  const [x, y, width, height] = __privateGet(this, _box);
  const lastTop = __privateGet(this, _last).subarray(4, 6);
  const lastBottom = __privateGet(this, _last).subarray(16, 18);
  const [lastTopX, lastTopY, lastBottomX, lastBottomY] = __privateMethod(this, _FreeDrawOutliner_instances, getLastCoords_fn).call(this);
  buffer.push(`L${(lastTop[0] - x) / width} ${(lastTop[1] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(lastBottom[0] - x) / width} ${(lastBottom[1] - y) / height}`);
};
getOutlineTwoPoints_fn = function(points) {
  const last = __privateGet(this, _last);
  const [layerX, layerY, layerWidth, layerHeight] = __privateGet(this, _box);
  const [lastTopX, lastTopY, lastBottomX, lastBottomY] = __privateMethod(this, _FreeDrawOutliner_instances, getLastCoords_fn).call(this);
  const outline = new Float32Array(36);
  outline.set([NaN, NaN, NaN, NaN, (last[2] - layerX) / layerWidth, (last[3] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[4] - layerX) / layerWidth, (last[5] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (last[16] - layerX) / layerWidth, (last[17] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[14] - layerX) / layerWidth, (last[15] - layerY) / layerHeight], 0);
  return this.newFreeDrawOutline(outline, points, __privateGet(this, _box), __privateGet(this, _scaleFactor), __privateGet(this, _innerMargin), __privateGet(this, _isLTR));
};
getOutlineStart_fn = function(outline, pos) {
  const bottom = __privateGet(this, _bottom);
  outline.set([NaN, NaN, NaN, NaN, bottom[4], bottom[5]], pos);
  return pos += 6;
};
getOutlineEnd_fn = function(outline, pos) {
  const lastTop = __privateGet(this, _last).subarray(4, 6);
  const lastBottom = __privateGet(this, _last).subarray(16, 18);
  const [layerX, layerY, layerWidth, layerHeight] = __privateGet(this, _box);
  const [lastTopX, lastTopY, lastBottomX, lastBottomY] = __privateMethod(this, _FreeDrawOutliner_instances, getLastCoords_fn).call(this);
  outline.set([NaN, NaN, NaN, NaN, (lastTop[0] - layerX) / layerWidth, (lastTop[1] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (lastBottom[0] - layerX) / layerWidth, (lastBottom[1] - layerY) / layerHeight], pos);
  return pos += 24;
};
__privateAdd(_FreeDrawOutliner, _MIN_DIST, 8);
__privateAdd(_FreeDrawOutliner, _MIN_DIFF, 2);
__privateAdd(_FreeDrawOutliner, _MIN, __privateGet(_FreeDrawOutliner, _MIN_DIST) + __privateGet(_FreeDrawOutliner, _MIN_DIFF));
var FreeDrawOutliner = _FreeDrawOutliner;
var _box2, _bbox, _innerMargin2, _isLTR2, _points2, _scaleFactor2, _outline, _FreeDrawOutline_instances, computeMinMax_fn;
var FreeDrawOutline = class extends Outline {
  constructor(outline, points, box, scaleFactor, innerMargin, isLTR) {
    super();
    __privateAdd(this, _FreeDrawOutline_instances);
    __privateAdd(this, _box2);
    __privateAdd(this, _bbox, new Float32Array(4));
    __privateAdd(this, _innerMargin2);
    __privateAdd(this, _isLTR2);
    __privateAdd(this, _points2);
    __privateAdd(this, _scaleFactor2);
    __privateAdd(this, _outline);
    __privateSet(this, _outline, outline);
    __privateSet(this, _points2, points);
    __privateSet(this, _box2, box);
    __privateSet(this, _scaleFactor2, scaleFactor);
    __privateSet(this, _innerMargin2, innerMargin);
    __privateSet(this, _isLTR2, isLTR);
    this.lastPoint = [NaN, NaN];
    __privateMethod(this, _FreeDrawOutline_instances, computeMinMax_fn).call(this, isLTR);
    const [x, y, width, height] = __privateGet(this, _bbox);
    for (let i = 0, ii = outline.length; i < ii; i += 2) {
      outline[i] = (outline[i] - x) / width;
      outline[i + 1] = (outline[i + 1] - y) / height;
    }
    for (let i = 0, ii = points.length; i < ii; i += 2) {
      points[i] = (points[i] - x) / width;
      points[i + 1] = (points[i + 1] - y) / height;
    }
  }
  toSVGPath() {
    const buffer = [`M${__privateGet(this, _outline)[4]} ${__privateGet(this, _outline)[5]}`];
    for (let i = 6, ii = __privateGet(this, _outline).length; i < ii; i += 6) {
      if (isNaN(__privateGet(this, _outline)[i])) {
        buffer.push(`L${__privateGet(this, _outline)[i + 4]} ${__privateGet(this, _outline)[i + 5]}`);
        continue;
      }
      buffer.push(`C${__privateGet(this, _outline)[i]} ${__privateGet(this, _outline)[i + 1]} ${__privateGet(this, _outline)[i + 2]} ${__privateGet(this, _outline)[i + 3]} ${__privateGet(this, _outline)[i + 4]} ${__privateGet(this, _outline)[i + 5]}`);
    }
    buffer.push("Z");
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], rotation) {
    const width = trX - blX;
    const height = trY - blY;
    let outline;
    let points;
    switch (rotation) {
      case 0:
        outline = Outline._rescale(__privateGet(this, _outline), blX, trY, width, -height);
        points = Outline._rescale(__privateGet(this, _points2), blX, trY, width, -height);
        break;
      case 90:
        outline = Outline._rescaleAndSwap(__privateGet(this, _outline), blX, blY, width, height);
        points = Outline._rescaleAndSwap(__privateGet(this, _points2), blX, blY, width, height);
        break;
      case 180:
        outline = Outline._rescale(__privateGet(this, _outline), trX, blY, -width, height);
        points = Outline._rescale(__privateGet(this, _points2), trX, blY, -width, height);
        break;
      case 270:
        outline = Outline._rescaleAndSwap(__privateGet(this, _outline), trX, trY, -width, -height);
        points = Outline._rescaleAndSwap(__privateGet(this, _points2), trX, trY, -width, -height);
        break;
    }
    return {
      outline: Array.from(outline),
      points: [Array.from(points)]
    };
  }
  get box() {
    return __privateGet(this, _bbox);
  }
  newOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    return new FreeDrawOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin);
  }
  getNewOutline(thickness, innerMargin) {
    const [x, y, width, height] = __privateGet(this, _bbox);
    const [layerX, layerY, layerWidth, layerHeight] = __privateGet(this, _box2);
    const sx = width * layerWidth;
    const sy = height * layerHeight;
    const tx = x * layerWidth + layerX;
    const ty = y * layerHeight + layerY;
    const outliner = this.newOutliner({
      x: __privateGet(this, _points2)[0] * sx + tx,
      y: __privateGet(this, _points2)[1] * sy + ty
    }, __privateGet(this, _box2), __privateGet(this, _scaleFactor2), thickness, __privateGet(this, _isLTR2), innerMargin ?? __privateGet(this, _innerMargin2));
    for (let i = 2; i < __privateGet(this, _points2).length; i += 2) {
      outliner.add({
        x: __privateGet(this, _points2)[i] * sx + tx,
        y: __privateGet(this, _points2)[i + 1] * sy + ty
      });
    }
    return outliner.getOutlines();
  }
};
_box2 = new WeakMap();
_bbox = new WeakMap();
_innerMargin2 = new WeakMap();
_isLTR2 = new WeakMap();
_points2 = new WeakMap();
_scaleFactor2 = new WeakMap();
_outline = new WeakMap();
_FreeDrawOutline_instances = new WeakSet();
computeMinMax_fn = function(isLTR) {
  const outline = __privateGet(this, _outline);
  let lastX = outline[4];
  let lastY = outline[5];
  let minX = lastX;
  let minY = lastY;
  let maxX = lastX;
  let maxY = lastY;
  let lastPointX = lastX;
  let lastPointY = lastY;
  const ltrCallback = isLTR ? Math.max : Math.min;
  for (let i = 6, ii = outline.length; i < ii; i += 6) {
    if (isNaN(outline[i])) {
      minX = Math.min(minX, outline[i + 4]);
      minY = Math.min(minY, outline[i + 5]);
      maxX = Math.max(maxX, outline[i + 4]);
      maxY = Math.max(maxY, outline[i + 5]);
      if (lastPointY < outline[i + 5]) {
        lastPointX = outline[i + 4];
        lastPointY = outline[i + 5];
      } else if (lastPointY === outline[i + 5]) {
        lastPointX = ltrCallback(lastPointX, outline[i + 4]);
      }
    } else {
      const bbox2 = Util.bezierBoundingBox(lastX, lastY, ...outline.slice(i, i + 6));
      minX = Math.min(minX, bbox2[0]);
      minY = Math.min(minY, bbox2[1]);
      maxX = Math.max(maxX, bbox2[2]);
      maxY = Math.max(maxY, bbox2[3]);
      if (lastPointY < bbox2[3]) {
        lastPointX = bbox2[2];
        lastPointY = bbox2[3];
      } else if (lastPointY === bbox2[3]) {
        lastPointX = ltrCallback(lastPointX, bbox2[2]);
      }
    }
    lastX = outline[i + 4];
    lastY = outline[i + 5];
  }
  const bbox = __privateGet(this, _bbox);
  bbox[0] = minX - __privateGet(this, _innerMargin2);
  bbox[1] = minY - __privateGet(this, _innerMargin2);
  bbox[2] = maxX - minX + 2 * __privateGet(this, _innerMargin2);
  bbox[3] = maxY - minY + 2 * __privateGet(this, _innerMargin2);
  this.lastPoint = [lastPointX, lastPointY];
};
var _box3, _lastPoint, _verticalEdges, _intervals, _HighlightOutliner_instances, getOutlines_fn, binarySearch_fn, insert_fn, remove_fn, breakEdge_fn;
var HighlightOutliner = class {
  constructor(boxes, borderWidth = 0, innerMargin = 0, isLTR = true) {
    __privateAdd(this, _HighlightOutliner_instances);
    __privateAdd(this, _box3);
    __privateAdd(this, _lastPoint);
    __privateAdd(this, _verticalEdges, []);
    __privateAdd(this, _intervals, []);
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const NUMBER_OF_DIGITS = 4;
    const EPSILON = 10 ** -NUMBER_OF_DIGITS;
    for (const {
      x,
      y,
      width,
      height
    } of boxes) {
      const x1 = Math.floor((x - borderWidth) / EPSILON) * EPSILON;
      const x2 = Math.ceil((x + width + borderWidth) / EPSILON) * EPSILON;
      const y1 = Math.floor((y - borderWidth) / EPSILON) * EPSILON;
      const y2 = Math.ceil((y + height + borderWidth) / EPSILON) * EPSILON;
      const left = [x1, y1, y2, true];
      const right = [x2, y1, y2, false];
      __privateGet(this, _verticalEdges).push(left, right);
      minX = Math.min(minX, x1);
      maxX = Math.max(maxX, x2);
      minY = Math.min(minY, y1);
      maxY = Math.max(maxY, y2);
    }
    const bboxWidth = maxX - minX + 2 * innerMargin;
    const bboxHeight = maxY - minY + 2 * innerMargin;
    const shiftedMinX = minX - innerMargin;
    const shiftedMinY = minY - innerMargin;
    const lastEdge = __privateGet(this, _verticalEdges).at(isLTR ? -1 : -2);
    const lastPoint = [lastEdge[0], lastEdge[2]];
    for (const edge of __privateGet(this, _verticalEdges)) {
      const [x, y1, y2] = edge;
      edge[0] = (x - shiftedMinX) / bboxWidth;
      edge[1] = (y1 - shiftedMinY) / bboxHeight;
      edge[2] = (y2 - shiftedMinY) / bboxHeight;
    }
    __privateSet(this, _box3, new Float32Array([shiftedMinX, shiftedMinY, bboxWidth, bboxHeight]));
    __privateSet(this, _lastPoint, lastPoint);
  }
  getOutlines() {
    __privateGet(this, _verticalEdges).sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    const outlineVerticalEdges = [];
    for (const edge of __privateGet(this, _verticalEdges)) {
      if (edge[3]) {
        outlineVerticalEdges.push(...__privateMethod(this, _HighlightOutliner_instances, breakEdge_fn).call(this, edge));
        __privateMethod(this, _HighlightOutliner_instances, insert_fn).call(this, edge);
      } else {
        __privateMethod(this, _HighlightOutliner_instances, remove_fn).call(this, edge);
        outlineVerticalEdges.push(...__privateMethod(this, _HighlightOutliner_instances, breakEdge_fn).call(this, edge));
      }
    }
    return __privateMethod(this, _HighlightOutliner_instances, getOutlines_fn).call(this, outlineVerticalEdges);
  }
};
_box3 = new WeakMap();
_lastPoint = new WeakMap();
_verticalEdges = new WeakMap();
_intervals = new WeakMap();
_HighlightOutliner_instances = new WeakSet();
getOutlines_fn = function(outlineVerticalEdges) {
  const edges = [];
  const allEdges = /* @__PURE__ */ new Set();
  for (const edge of outlineVerticalEdges) {
    const [x, y1, y2] = edge;
    edges.push([x, y1, edge], [x, y2, edge]);
  }
  edges.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  for (let i = 0, ii = edges.length; i < ii; i += 2) {
    const edge1 = edges[i][2];
    const edge2 = edges[i + 1][2];
    edge1.push(edge2);
    edge2.push(edge1);
    allEdges.add(edge1);
    allEdges.add(edge2);
  }
  const outlines = [];
  let outline;
  while (allEdges.size > 0) {
    const edge = allEdges.values().next().value;
    let [x, y1, y2, edge1, edge2] = edge;
    allEdges.delete(edge);
    let lastPointX = x;
    let lastPointY = y1;
    outline = [x, y2];
    outlines.push(outline);
    while (true) {
      let e;
      if (allEdges.has(edge1)) {
        e = edge1;
      } else if (allEdges.has(edge2)) {
        e = edge2;
      } else {
        break;
      }
      allEdges.delete(e);
      [x, y1, y2, edge1, edge2] = e;
      if (lastPointX !== x) {
        outline.push(lastPointX, lastPointY, x, lastPointY === y1 ? y1 : y2);
        lastPointX = x;
      }
      lastPointY = lastPointY === y1 ? y2 : y1;
    }
    outline.push(lastPointX, lastPointY);
  }
  return new HighlightOutline(outlines, __privateGet(this, _box3), __privateGet(this, _lastPoint));
};
binarySearch_fn = function(y) {
  const array = __privateGet(this, _intervals);
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const middle = start + end >> 1;
    const y1 = array[middle][0];
    if (y1 === y) {
      return middle;
    }
    if (y1 < y) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return end + 1;
};
insert_fn = function([, y1, y2]) {
  const index = __privateMethod(this, _HighlightOutliner_instances, binarySearch_fn).call(this, y1);
  __privateGet(this, _intervals).splice(index, 0, [y1, y2]);
};
remove_fn = function([, y1, y2]) {
  const index = __privateMethod(this, _HighlightOutliner_instances, binarySearch_fn).call(this, y1);
  for (let i = index; i < __privateGet(this, _intervals).length; i++) {
    const [start, end] = __privateGet(this, _intervals)[i];
    if (start !== y1) {
      break;
    }
    if (start === y1 && end === y2) {
      __privateGet(this, _intervals).splice(i, 1);
      return;
    }
  }
  for (let i = index - 1; i >= 0; i--) {
    const [start, end] = __privateGet(this, _intervals)[i];
    if (start !== y1) {
      break;
    }
    if (start === y1 && end === y2) {
      __privateGet(this, _intervals).splice(i, 1);
      return;
    }
  }
};
breakEdge_fn = function(edge) {
  const [x, y1, y2] = edge;
  const results = [[x, y1, y2]];
  const index = __privateMethod(this, _HighlightOutliner_instances, binarySearch_fn).call(this, y2);
  for (let i = 0; i < index; i++) {
    const [start, end] = __privateGet(this, _intervals)[i];
    for (let j = 0, jj = results.length; j < jj; j++) {
      const [, y3, y4] = results[j];
      if (end <= y3 || y4 <= start) {
        continue;
      }
      if (y3 >= start) {
        if (y4 > end) {
          results[j][1] = end;
        } else {
          if (jj === 1) {
            return [];
          }
          results.splice(j, 1);
          j--;
          jj--;
        }
        continue;
      }
      results[j][2] = start;
      if (y4 > end) {
        results.push([x, end, y4]);
      }
    }
  }
  return results;
};
var _box4, _outlines;
var HighlightOutline = class extends Outline {
  constructor(outlines, box, lastPoint) {
    super();
    __privateAdd(this, _box4);
    __privateAdd(this, _outlines);
    __privateSet(this, _outlines, outlines);
    __privateSet(this, _box4, box);
    this.lastPoint = lastPoint;
  }
  toSVGPath() {
    const buffer = [];
    for (const polygon of __privateGet(this, _outlines)) {
      let [prevX, prevY] = polygon;
      buffer.push(`M${prevX} ${prevY}`);
      for (let i = 2; i < polygon.length; i += 2) {
        const x = polygon[i];
        const y = polygon[i + 1];
        if (x === prevX) {
          buffer.push(`V${y}`);
          prevY = y;
        } else if (y === prevY) {
          buffer.push(`H${x}`);
          prevX = x;
        }
      }
      buffer.push("Z");
    }
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], _rotation4) {
    const outlines = [];
    const width = trX - blX;
    const height = trY - blY;
    for (const outline of __privateGet(this, _outlines)) {
      const points = new Array(outline.length);
      for (let i = 0; i < outline.length; i += 2) {
        points[i] = blX + outline[i] * width;
        points[i + 1] = trY - outline[i + 1] * height;
      }
      outlines.push(points);
    }
    return outlines;
  }
  get box() {
    return __privateGet(this, _box4);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
};
_box4 = new WeakMap();
_outlines = new WeakMap();
var FreeHighlightOutliner = class extends FreeDrawOutliner {
  newFreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR) {
    return new FreeHighlightOutline(outline, points, box, scaleFactor, innerMargin, isLTR);
  }
};
var FreeHighlightOutline = class extends FreeDrawOutline {
  newOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    return new FreeHighlightOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin);
  }
};
var _button, _buttonSwatch, _defaultColor, _dropdown, _dropdownWasFromKeyboard, _isMainColorPicker, _editor3, _eventBus, _openDropdownAC, _uiManager2, _type, _l10nColor, _ColorPicker_instances, getDropdownRoot_fn, colorSelect_fn, keyDown_fn2, openDropdown_fn, pointerDown_fn2, isDropdownVisible_get;
var _ColorPicker = class _ColorPicker {
  constructor({
    editor = null,
    uiManager = null
  }) {
    __privateAdd(this, _ColorPicker_instances);
    __privateAdd(this, _button, null);
    __privateAdd(this, _buttonSwatch, null);
    __privateAdd(this, _defaultColor);
    __privateAdd(this, _dropdown, null);
    __privateAdd(this, _dropdownWasFromKeyboard, false);
    __privateAdd(this, _isMainColorPicker, false);
    __privateAdd(this, _editor3, null);
    __privateAdd(this, _eventBus);
    __privateAdd(this, _openDropdownAC, null);
    __privateAdd(this, _uiManager2, null);
    __privateAdd(this, _type);
    var _a2;
    if (editor) {
      __privateSet(this, _isMainColorPicker, false);
      __privateSet(this, _type, AnnotationEditorParamsType.HIGHLIGHT_COLOR);
      __privateSet(this, _editor3, editor);
    } else {
      __privateSet(this, _isMainColorPicker, true);
      __privateSet(this, _type, AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR);
    }
    __privateSet(this, _uiManager2, (editor == null ? void 0 : editor._uiManager) || uiManager);
    __privateSet(this, _eventBus, __privateGet(this, _uiManager2)._eventBus);
    __privateSet(this, _defaultColor, (editor == null ? void 0 : editor.color) || ((_a2 = __privateGet(this, _uiManager2)) == null ? void 0 : _a2.highlightColors.values().next().value) || "#FFFF98");
    __privateGet(_ColorPicker, _l10nColor) || __privateSet(_ColorPicker, _l10nColor, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape", "mac+Escape"], _ColorPicker.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], _ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], _ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], _ColorPicker.prototype._moveToPrevious], [["Home", "mac+Home"], _ColorPicker.prototype._moveToBeginning], [["End", "mac+End"], _ColorPicker.prototype._moveToEnd]]));
  }
  renderButton() {
    const button = __privateSet(this, _button, document.createElement("button"));
    button.className = "colorPicker";
    button.tabIndex = "0";
    button.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
    button.setAttribute("aria-haspopup", true);
    const signal = __privateGet(this, _uiManager2)._signal;
    button.addEventListener("click", __privateMethod(this, _ColorPicker_instances, openDropdown_fn).bind(this), {
      signal
    });
    button.addEventListener("keydown", __privateMethod(this, _ColorPicker_instances, keyDown_fn2).bind(this), {
      signal
    });
    const swatch = __privateSet(this, _buttonSwatch, document.createElement("span"));
    swatch.className = "swatch";
    swatch.setAttribute("aria-hidden", true);
    swatch.style.backgroundColor = __privateGet(this, _defaultColor);
    button.append(swatch);
    return button;
  }
  renderMainDropdown() {
    const dropdown = __privateSet(this, _dropdown, __privateMethod(this, _ColorPicker_instances, getDropdownRoot_fn).call(this));
    dropdown.setAttribute("aria-orientation", "horizontal");
    dropdown.setAttribute("aria-labelledby", "highlightColorPickerLabel");
    return dropdown;
  }
  _colorSelectFromKeyboard(event) {
    if (event.target === __privateGet(this, _button)) {
      __privateMethod(this, _ColorPicker_instances, openDropdown_fn).call(this, event);
      return;
    }
    const color = event.target.getAttribute("data-color");
    if (!color) {
      return;
    }
    __privateMethod(this, _ColorPicker_instances, colorSelect_fn).call(this, color, event);
  }
  _moveToNext(event) {
    var _a2, _b;
    if (!__privateGet(this, _ColorPicker_instances, isDropdownVisible_get)) {
      __privateMethod(this, _ColorPicker_instances, openDropdown_fn).call(this, event);
      return;
    }
    if (event.target === __privateGet(this, _button)) {
      (_a2 = __privateGet(this, _dropdown).firstChild) == null ? void 0 : _a2.focus();
      return;
    }
    (_b = event.target.nextSibling) == null ? void 0 : _b.focus();
  }
  _moveToPrevious(event) {
    var _a2, _b;
    if (event.target === ((_a2 = __privateGet(this, _dropdown)) == null ? void 0 : _a2.firstChild) || event.target === __privateGet(this, _button)) {
      if (__privateGet(this, _ColorPicker_instances, isDropdownVisible_get)) {
        this._hideDropdownFromKeyboard();
      }
      return;
    }
    if (!__privateGet(this, _ColorPicker_instances, isDropdownVisible_get)) {
      __privateMethod(this, _ColorPicker_instances, openDropdown_fn).call(this, event);
    }
    (_b = event.target.previousSibling) == null ? void 0 : _b.focus();
  }
  _moveToBeginning(event) {
    var _a2;
    if (!__privateGet(this, _ColorPicker_instances, isDropdownVisible_get)) {
      __privateMethod(this, _ColorPicker_instances, openDropdown_fn).call(this, event);
      return;
    }
    (_a2 = __privateGet(this, _dropdown).firstChild) == null ? void 0 : _a2.focus();
  }
  _moveToEnd(event) {
    var _a2;
    if (!__privateGet(this, _ColorPicker_instances, isDropdownVisible_get)) {
      __privateMethod(this, _ColorPicker_instances, openDropdown_fn).call(this, event);
      return;
    }
    (_a2 = __privateGet(this, _dropdown).lastChild) == null ? void 0 : _a2.focus();
  }
  hideDropdown() {
    var _a2, _b;
    (_a2 = __privateGet(this, _dropdown)) == null ? void 0 : _a2.classList.add("hidden");
    (_b = __privateGet(this, _openDropdownAC)) == null ? void 0 : _b.abort();
    __privateSet(this, _openDropdownAC, null);
  }
  _hideDropdownFromKeyboard() {
    var _a2;
    if (__privateGet(this, _isMainColorPicker)) {
      return;
    }
    if (!__privateGet(this, _ColorPicker_instances, isDropdownVisible_get)) {
      (_a2 = __privateGet(this, _editor3)) == null ? void 0 : _a2.unselect();
      return;
    }
    this.hideDropdown();
    __privateGet(this, _button).focus({
      preventScroll: true,
      focusVisible: __privateGet(this, _dropdownWasFromKeyboard)
    });
  }
  updateColor(color) {
    if (__privateGet(this, _buttonSwatch)) {
      __privateGet(this, _buttonSwatch).style.backgroundColor = color;
    }
    if (!__privateGet(this, _dropdown)) {
      return;
    }
    const i = __privateGet(this, _uiManager2).highlightColors.values();
    for (const child of __privateGet(this, _dropdown).children) {
      child.setAttribute("aria-selected", i.next().value === color);
    }
  }
  destroy() {
    var _a2, _b;
    (_a2 = __privateGet(this, _button)) == null ? void 0 : _a2.remove();
    __privateSet(this, _button, null);
    __privateSet(this, _buttonSwatch, null);
    (_b = __privateGet(this, _dropdown)) == null ? void 0 : _b.remove();
    __privateSet(this, _dropdown, null);
  }
};
_button = new WeakMap();
_buttonSwatch = new WeakMap();
_defaultColor = new WeakMap();
_dropdown = new WeakMap();
_dropdownWasFromKeyboard = new WeakMap();
_isMainColorPicker = new WeakMap();
_editor3 = new WeakMap();
_eventBus = new WeakMap();
_openDropdownAC = new WeakMap();
_uiManager2 = new WeakMap();
_type = new WeakMap();
_l10nColor = new WeakMap();
_ColorPicker_instances = new WeakSet();
getDropdownRoot_fn = function() {
  const div = document.createElement("div");
  const signal = __privateGet(this, _uiManager2)._signal;
  div.addEventListener("contextmenu", noContextMenu, {
    signal
  });
  div.className = "dropdown";
  div.role = "listbox";
  div.setAttribute("aria-multiselectable", false);
  div.setAttribute("aria-orientation", "vertical");
  div.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
  for (const [name, color] of __privateGet(this, _uiManager2).highlightColors) {
    const button = document.createElement("button");
    button.tabIndex = "0";
    button.role = "option";
    button.setAttribute("data-color", color);
    button.title = name;
    button.setAttribute("data-l10n-id", __privateGet(_ColorPicker, _l10nColor)[name]);
    const swatch = document.createElement("span");
    button.append(swatch);
    swatch.className = "swatch";
    swatch.style.backgroundColor = color;
    button.setAttribute("aria-selected", color === __privateGet(this, _defaultColor));
    button.addEventListener("click", __privateMethod(this, _ColorPicker_instances, colorSelect_fn).bind(this, color), {
      signal
    });
    div.append(button);
  }
  div.addEventListener("keydown", __privateMethod(this, _ColorPicker_instances, keyDown_fn2).bind(this), {
    signal
  });
  return div;
};
colorSelect_fn = function(color, event) {
  event.stopPropagation();
  __privateGet(this, _eventBus).dispatch("switchannotationeditorparams", {
    source: this,
    type: __privateGet(this, _type),
    value: color
  });
};
keyDown_fn2 = function(event) {
  _ColorPicker._keyboardManager.exec(this, event);
};
openDropdown_fn = function(event) {
  if (__privateGet(this, _ColorPicker_instances, isDropdownVisible_get)) {
    this.hideDropdown();
    return;
  }
  __privateSet(this, _dropdownWasFromKeyboard, event.detail === 0);
  if (!__privateGet(this, _openDropdownAC)) {
    __privateSet(this, _openDropdownAC, new AbortController());
    window.addEventListener("pointerdown", __privateMethod(this, _ColorPicker_instances, pointerDown_fn2).bind(this), {
      signal: __privateGet(this, _uiManager2).combinedSignal(__privateGet(this, _openDropdownAC))
    });
  }
  if (__privateGet(this, _dropdown)) {
    __privateGet(this, _dropdown).classList.remove("hidden");
    return;
  }
  const root = __privateSet(this, _dropdown, __privateMethod(this, _ColorPicker_instances, getDropdownRoot_fn).call(this));
  __privateGet(this, _button).append(root);
};
pointerDown_fn2 = function(event) {
  var _a2;
  if ((_a2 = __privateGet(this, _dropdown)) == null ? void 0 : _a2.contains(event.target)) {
    return;
  }
  this.hideDropdown();
};
isDropdownVisible_get = function() {
  return __privateGet(this, _dropdown) && !__privateGet(this, _dropdown).classList.contains("hidden");
};
__privateAdd(_ColorPicker, _l10nColor, null);
var ColorPicker = _ColorPicker;
var _anchorNode, _anchorOffset, _boxes, _clipPathId, _colorPicker2, _focusOutlines, _focusNode, _focusOffset, _highlightDiv, _highlightOutlines, _id4, _isFreeHighlight, _lastPoint2, _opacity, _outlineId, _text, _thickness2, _methodOfCreation, _HighlightEditor_instances, createOutlines_fn, createFreeOutlines_fn, updateColor_fn2, updateThickness_fn, changeThickness_fn, cleanDrawLayer_fn, addToDrawLayer_fn, _HighlightEditor_static, rotateBbox_fn, keydown_fn, setCaret_fn, getRotation_fn, serializeBoxes_fn, serializeOutlines_fn, highlightMove_fn, endHighlight_fn, hasElementChanged_fn2;
var _HighlightEditor = class _HighlightEditor extends AnnotationEditor {
  constructor(params) {
    super({
      ...params,
      name: "highlightEditor"
    });
    __privateAdd(this, _HighlightEditor_instances);
    __privateAdd(this, _anchorNode, null);
    __privateAdd(this, _anchorOffset, 0);
    __privateAdd(this, _boxes);
    __privateAdd(this, _clipPathId, null);
    __privateAdd(this, _colorPicker2, null);
    __privateAdd(this, _focusOutlines, null);
    __privateAdd(this, _focusNode, null);
    __privateAdd(this, _focusOffset, 0);
    __privateAdd(this, _highlightDiv, null);
    __privateAdd(this, _highlightOutlines, null);
    __privateAdd(this, _id4, null);
    __privateAdd(this, _isFreeHighlight, false);
    __privateAdd(this, _lastPoint2, null);
    __privateAdd(this, _opacity);
    __privateAdd(this, _outlineId, null);
    __privateAdd(this, _text, "");
    __privateAdd(this, _thickness2);
    __privateAdd(this, _methodOfCreation, "");
    this.color = params.color || _HighlightEditor._defaultColor;
    __privateSet(this, _thickness2, params.thickness || _HighlightEditor._defaultThickness);
    __privateSet(this, _opacity, params.opacity || _HighlightEditor._defaultOpacity);
    __privateSet(this, _boxes, params.boxes || null);
    __privateSet(this, _methodOfCreation, params.methodOfCreation || "");
    __privateSet(this, _text, params.text || "");
    this._isDraggable = false;
    if (params.highlightId > -1) {
      __privateSet(this, _isFreeHighlight, true);
      __privateMethod(this, _HighlightEditor_instances, createFreeOutlines_fn).call(this, params);
      __privateMethod(this, _HighlightEditor_instances, addToDrawLayer_fn).call(this);
    } else if (__privateGet(this, _boxes)) {
      __privateSet(this, _anchorNode, params.anchorNode);
      __privateSet(this, _anchorOffset, params.anchorOffset);
      __privateSet(this, _focusNode, params.focusNode);
      __privateSet(this, _focusOffset, params.focusOffset);
      __privateMethod(this, _HighlightEditor_instances, createOutlines_fn).call(this);
      __privateMethod(this, _HighlightEditor_instances, addToDrawLayer_fn).call(this);
      this.rotate(this.rotation);
    }
  }
  static get _keyboardManager() {
    const proto = _HighlightEditor.prototype;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], proto._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], proto._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], proto._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], proto._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: __privateGet(this, _isFreeHighlight) ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: __privateGet(this, _thickness2),
      methodOfCreation: __privateGet(this, _methodOfCreation)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(data) {
    return {
      numberOfColors: data.get("color").size
    };
  }
  static initialize(l10n, uiManager) {
    var _a2;
    AnnotationEditor.initialize(l10n, uiManager);
    _HighlightEditor._defaultColor || (_HighlightEditor._defaultColor = ((_a2 = uiManager.highlightColors) == null ? void 0 : _a2.values().next().value) || "#fff066");
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
        _HighlightEditor._defaultColor = value;
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        _HighlightEditor._defaultThickness = value;
        break;
    }
  }
  translateInPage(x, y) {
  }
  get toolbarPosition() {
    return __privateGet(this, _lastPoint2);
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_COLOR:
        __privateMethod(this, _HighlightEditor_instances, updateColor_fn2).call(this, value);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        __privateMethod(this, _HighlightEditor_instances, updateThickness_fn).call(this, value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, _HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, _HighlightEditor._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.color || _HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, __privateGet(this, _thickness2) || _HighlightEditor._defaultThickness], [AnnotationEditorParamsType.HIGHLIGHT_FREE, __privateGet(this, _isFreeHighlight)]];
  }
  async addEditToolbar() {
    const toolbar = await super.addEditToolbar();
    if (!toolbar) {
      return null;
    }
    if (this._uiManager.highlightColors) {
      __privateSet(this, _colorPicker2, new ColorPicker({
        editor: this
      }));
      toolbar.addColorPicker(__privateGet(this, _colorPicker2));
    }
    return toolbar;
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(__privateMethod(this, _HighlightEditor_instances, getRotation_fn).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(tx, ty) {
    return super.getRect(tx, ty, __privateMethod(this, _HighlightEditor_instances, getRotation_fn).call(this));
  }
  onceAdded(focus) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    if (focus) {
      this.div.focus();
    }
  }
  remove() {
    __privateMethod(this, _HighlightEditor_instances, cleanDrawLayer_fn).call(this);
    this._reportTelemetry({
      action: "deleted"
    });
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    __privateMethod(this, _HighlightEditor_instances, addToDrawLayer_fn).call(this);
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  setParent(parent) {
    var _a2;
    let mustBeSelected = false;
    if (this.parent && !parent) {
      __privateMethod(this, _HighlightEditor_instances, cleanDrawLayer_fn).call(this);
    } else if (parent) {
      __privateMethod(this, _HighlightEditor_instances, addToDrawLayer_fn).call(this, parent);
      mustBeSelected = !this.parent && ((_a2 = this.div) == null ? void 0 : _a2.classList.contains("selectedEditor"));
    }
    super.setParent(parent);
    this.show(this._isVisible);
    if (mustBeSelected) {
      this.select();
    }
  }
  rotate(angle) {
    var _a2, _b, _c;
    const {
      drawLayer
    } = this.parent;
    let box;
    if (__privateGet(this, _isFreeHighlight)) {
      angle = (angle - this.rotation + 360) % 360;
      box = __privateMethod(_a2 = _HighlightEditor, _HighlightEditor_static, rotateBbox_fn).call(_a2, __privateGet(this, _highlightOutlines).box, angle);
    } else {
      box = __privateMethod(_b = _HighlightEditor, _HighlightEditor_static, rotateBbox_fn).call(_b, [this.x, this.y, this.width, this.height], angle);
    }
    drawLayer.updateProperties(__privateGet(this, _id4), {
      bbox: box,
      root: {
        "data-main-rotation": angle
      }
    });
    drawLayer.updateProperties(__privateGet(this, _outlineId), {
      bbox: __privateMethod(_c = _HighlightEditor, _HighlightEditor_static, rotateBbox_fn).call(_c, __privateGet(this, _focusOutlines).box, angle),
      root: {
        "data-main-rotation": angle
      }
    });
  }
  render() {
    if (this.div) {
      return this.div;
    }
    const div = super.render();
    if (__privateGet(this, _text)) {
      div.setAttribute("aria-label", __privateGet(this, _text));
      div.setAttribute("role", "mark");
    }
    if (__privateGet(this, _isFreeHighlight)) {
      div.classList.add("free");
    } else {
      this.div.addEventListener("keydown", __privateMethod(this, _HighlightEditor_instances, keydown_fn).bind(this), {
        signal: this._uiManager._signal
      });
    }
    const highlightDiv = __privateSet(this, _highlightDiv, document.createElement("div"));
    div.append(highlightDiv);
    highlightDiv.setAttribute("aria-hidden", "true");
    highlightDiv.className = "internal";
    highlightDiv.style.clipPath = __privateGet(this, _clipPathId);
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
    bindEvents(this, __privateGet(this, _highlightDiv), ["pointerover", "pointerleave"]);
    this.enableEditing();
    return div;
  }
  pointerover() {
    var _a2;
    if (!this.isSelected) {
      (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(__privateGet(this, _outlineId), {
        rootClass: {
          hovered: true
        }
      });
    }
  }
  pointerleave() {
    var _a2;
    if (!this.isSelected) {
      (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(__privateGet(this, _outlineId), {
        rootClass: {
          hovered: false
        }
      });
    }
  }
  _moveCaret(direction) {
    this.parent.unselect(this);
    switch (direction) {
      case 0:
      case 2:
        __privateMethod(this, _HighlightEditor_instances, setCaret_fn).call(this, true);
        break;
      case 1:
      case 3:
        __privateMethod(this, _HighlightEditor_instances, setCaret_fn).call(this, false);
        break;
    }
  }
  select() {
    var _a2;
    super.select();
    if (!__privateGet(this, _outlineId)) {
      return;
    }
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(__privateGet(this, _outlineId), {
      rootClass: {
        hovered: false,
        selected: true
      }
    });
  }
  unselect() {
    var _a2;
    super.unselect();
    if (!__privateGet(this, _outlineId)) {
      return;
    }
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(__privateGet(this, _outlineId), {
      rootClass: {
        selected: false
      }
    });
    if (!__privateGet(this, _isFreeHighlight)) {
      __privateMethod(this, _HighlightEditor_instances, setCaret_fn).call(this, false);
    }
  }
  get _mustFixPosition() {
    return !__privateGet(this, _isFreeHighlight);
  }
  show(visible = this._isVisible) {
    super.show(visible);
    if (this.parent) {
      this.parent.drawLayer.updateProperties(__privateGet(this, _id4), {
        rootClass: {
          hidden: !visible
        }
      });
      this.parent.drawLayer.updateProperties(__privateGet(this, _outlineId), {
        rootClass: {
          hidden: !visible
        }
      });
    }
  }
  static startHighlighting(parent, isLTR, {
    target: textLayer,
    x,
    y
  }) {
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    const ac = new AbortController();
    const signal = parent.combinedSignal(ac);
    const pointerUpCallback = (e) => {
      ac.abort();
      __privateMethod(this, _HighlightEditor_static, endHighlight_fn).call(this, parent, e);
    };
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerdown", stopEvent, {
      capture: true,
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    textLayer.addEventListener("pointermove", __privateMethod(this, _HighlightEditor_static, highlightMove_fn).bind(this, parent), {
      signal
    });
    this._freeHighlight = new FreeHighlightOutliner({
      x,
      y
    }, [layerX, layerY, parentWidth, parentHeight], parent.scale, this._defaultThickness / 2, isLTR, 1e-3);
    ({
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = parent.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: true,
        free: true
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, true, true));
  }
  static async deserialize(data, parent, uiManager) {
    var _a2, _b, _c, _d;
    let initialData = null;
    if (data instanceof HighlightAnnotationElement) {
      const {
        data: {
          quadPoints: quadPoints2,
          rect,
          rotation,
          id,
          color: color2,
          opacity: opacity2,
          popupRef
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color2),
        opacity: opacity2,
        quadPoints: quadPoints2,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    } else if (data instanceof InkAnnotationElement) {
      const {
        data: {
          inkLists: inkLists2,
          rect,
          rotation,
          id,
          color: color2,
          borderStyle: {
            rawWidth: thickness
          },
          popupRef
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color2),
        thickness,
        inkLists: inkLists2,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    }
    const {
      color,
      quadPoints,
      inkLists,
      opacity
    } = data;
    const editor = await super.deserialize(data, parent, uiManager);
    editor.color = Util.makeHexColor(...color);
    __privateSet(editor, _opacity, opacity || 1);
    if (inkLists) {
      __privateSet(editor, _thickness2, data.thickness);
    }
    editor.annotationElementId = data.id || null;
    editor._initialData = initialData;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [pageX, pageY] = editor.pageTranslation;
    if (quadPoints) {
      const boxes = __privateSet(editor, _boxes, []);
      for (let i = 0; i < quadPoints.length; i += 8) {
        boxes.push({
          x: (quadPoints[i] - pageX) / pageWidth,
          y: 1 - (quadPoints[i + 1] - pageY) / pageHeight,
          width: (quadPoints[i + 2] - quadPoints[i]) / pageWidth,
          height: (quadPoints[i + 1] - quadPoints[i + 5]) / pageHeight
        });
      }
      __privateMethod(_a2 = editor, _HighlightEditor_instances, createOutlines_fn).call(_a2);
      __privateMethod(_b = editor, _HighlightEditor_instances, addToDrawLayer_fn).call(_b);
      editor.rotate(editor.rotation);
    } else if (inkLists) {
      __privateSet(editor, _isFreeHighlight, true);
      const points = inkLists[0];
      const point = {
        x: points[0] - pageX,
        y: pageHeight - (points[1] - pageY)
      };
      const outliner = new FreeHighlightOutliner(point, [0, 0, pageWidth, pageHeight], 1, __privateGet(editor, _thickness2) / 2, true, 1e-3);
      for (let i = 0, ii = points.length; i < ii; i += 2) {
        point.x = points[i] - pageX;
        point.y = pageHeight - (points[i + 1] - pageY);
        outliner.add(point);
      }
      const {
        id,
        clipPathId
      } = parent.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: editor.color,
          "fill-opacity": editor._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: outliner.toSVGPath()
        }
      }, true, true);
      __privateMethod(_c = editor, _HighlightEditor_instances, createFreeOutlines_fn).call(_c, {
        highlightOutlines: outliner.getOutlines(),
        highlightId: id,
        clipPathId
      });
      __privateMethod(_d = editor, _HighlightEditor_instances, addToDrawLayer_fn).call(_d);
    }
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty() || isForCopying) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const rect = this.getRect(0, 0);
    const color = AnnotationEditor._colorManager.convert(this.color);
    const serialized = {
      annotationType: AnnotationEditorType.HIGHLIGHT,
      color,
      opacity: __privateGet(this, _opacity),
      thickness: __privateGet(this, _thickness2),
      quadPoints: __privateMethod(this, _HighlightEditor_instances, serializeBoxes_fn).call(this),
      outlines: __privateMethod(this, _HighlightEditor_instances, serializeOutlines_fn).call(this, rect),
      pageIndex: this.pageIndex,
      rect,
      rotation: __privateMethod(this, _HighlightEditor_instances, getRotation_fn).call(this),
      structTreeParentId: this._structTreeParentId
    };
    if (this.annotationElementId && !__privateMethod(this, _HighlightEditor_instances, hasElementChanged_fn2).call(this, serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  renderAnnotationElement(annotation) {
    annotation.updateEdited({
      rect: this.getRect(0, 0)
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
};
_anchorNode = new WeakMap();
_anchorOffset = new WeakMap();
_boxes = new WeakMap();
_clipPathId = new WeakMap();
_colorPicker2 = new WeakMap();
_focusOutlines = new WeakMap();
_focusNode = new WeakMap();
_focusOffset = new WeakMap();
_highlightDiv = new WeakMap();
_highlightOutlines = new WeakMap();
_id4 = new WeakMap();
_isFreeHighlight = new WeakMap();
_lastPoint2 = new WeakMap();
_opacity = new WeakMap();
_outlineId = new WeakMap();
_text = new WeakMap();
_thickness2 = new WeakMap();
_methodOfCreation = new WeakMap();
_HighlightEditor_instances = new WeakSet();
createOutlines_fn = function() {
  const outliner = new HighlightOutliner(__privateGet(this, _boxes), 1e-3);
  __privateSet(this, _highlightOutlines, outliner.getOutlines());
  [this.x, this.y, this.width, this.height] = __privateGet(this, _highlightOutlines).box;
  const outlinerForOutline = new HighlightOutliner(__privateGet(this, _boxes), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  __privateSet(this, _focusOutlines, outlinerForOutline.getOutlines());
  const {
    lastPoint
  } = __privateGet(this, _focusOutlines);
  __privateSet(this, _lastPoint2, [(lastPoint[0] - this.x) / this.width, (lastPoint[1] - this.y) / this.height]);
};
createFreeOutlines_fn = function({
  highlightOutlines,
  highlightId,
  clipPathId
}) {
  var _a2, _b;
  __privateSet(this, _highlightOutlines, highlightOutlines);
  const extraThickness = 1.5;
  __privateSet(this, _focusOutlines, highlightOutlines.getNewOutline(__privateGet(this, _thickness2) / 2 + extraThickness, 25e-4));
  if (highlightId >= 0) {
    __privateSet(this, _id4, highlightId);
    __privateSet(this, _clipPathId, clipPathId);
    this.parent.drawLayer.finalizeDraw(highlightId, {
      bbox: highlightOutlines.box,
      path: {
        d: highlightOutlines.toSVGPath()
      }
    });
    __privateSet(this, _outlineId, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: true
      },
      bbox: __privateGet(this, _focusOutlines).box,
      path: {
        d: __privateGet(this, _focusOutlines).toSVGPath()
      }
    }, true));
  } else if (this.parent) {
    const angle = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(__privateGet(this, _id4), {
      bbox: __privateMethod(_a2 = _HighlightEditor, _HighlightEditor_static, rotateBbox_fn).call(_a2, __privateGet(this, _highlightOutlines).box, (angle - this.rotation + 360) % 360),
      path: {
        d: highlightOutlines.toSVGPath()
      }
    });
    this.parent.drawLayer.updateProperties(__privateGet(this, _outlineId), {
      bbox: __privateMethod(_b = _HighlightEditor, _HighlightEditor_static, rotateBbox_fn).call(_b, __privateGet(this, _focusOutlines).box, angle),
      path: {
        d: __privateGet(this, _focusOutlines).toSVGPath()
      }
    });
  }
  const [x, y, width, height] = highlightOutlines.box;
  switch (this.rotation) {
    case 0:
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      break;
    case 90: {
      const [pageWidth, pageHeight] = this.parentDimensions;
      this.x = y;
      this.y = 1 - x;
      this.width = width * pageHeight / pageWidth;
      this.height = height * pageWidth / pageHeight;
      break;
    }
    case 180:
      this.x = 1 - x;
      this.y = 1 - y;
      this.width = width;
      this.height = height;
      break;
    case 270: {
      const [pageWidth, pageHeight] = this.parentDimensions;
      this.x = 1 - y;
      this.y = x;
      this.width = width * pageHeight / pageWidth;
      this.height = height * pageWidth / pageHeight;
      break;
    }
  }
  const {
    lastPoint
  } = __privateGet(this, _focusOutlines);
  __privateSet(this, _lastPoint2, [(lastPoint[0] - x) / width, (lastPoint[1] - y) / height]);
};
updateColor_fn2 = function(color) {
  const setColorAndOpacity = (col, opa) => {
    var _a2, _b;
    this.color = col;
    __privateSet(this, _opacity, opa);
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(__privateGet(this, _id4), {
      root: {
        fill: col,
        "fill-opacity": opa
      }
    });
    (_b = __privateGet(this, _colorPicker2)) == null ? void 0 : _b.updateColor(col);
  };
  const savedColor = this.color;
  const savedOpacity = __privateGet(this, _opacity);
  this.addCommands({
    cmd: setColorAndOpacity.bind(this, color, _HighlightEditor._defaultOpacity),
    undo: setColorAndOpacity.bind(this, savedColor, savedOpacity),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: true,
    type: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
    overwriteIfSameType: true,
    keepUndo: true
  });
  this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.highlightColorNames.get(color)
  }, true);
};
updateThickness_fn = function(thickness) {
  const savedThickness = __privateGet(this, _thickness2);
  const setThickness = (th) => {
    __privateSet(this, _thickness2, th);
    __privateMethod(this, _HighlightEditor_instances, changeThickness_fn).call(this, th);
  };
  this.addCommands({
    cmd: setThickness.bind(this, thickness),
    undo: setThickness.bind(this, savedThickness),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: true,
    type: AnnotationEditorParamsType.INK_THICKNESS,
    overwriteIfSameType: true,
    keepUndo: true
  });
  this._reportTelemetry({
    action: "thickness_changed",
    thickness
  }, true);
};
changeThickness_fn = function(thickness) {
  if (!__privateGet(this, _isFreeHighlight)) {
    return;
  }
  __privateMethod(this, _HighlightEditor_instances, createFreeOutlines_fn).call(this, {
    highlightOutlines: __privateGet(this, _highlightOutlines).getNewOutline(thickness / 2)
  });
  this.fixAndSetPosition();
  const [parentWidth, parentHeight] = this.parentDimensions;
  this.setDims(this.width * parentWidth, this.height * parentHeight);
};
cleanDrawLayer_fn = function() {
  if (__privateGet(this, _id4) === null || !this.parent) {
    return;
  }
  this.parent.drawLayer.remove(__privateGet(this, _id4));
  __privateSet(this, _id4, null);
  this.parent.drawLayer.remove(__privateGet(this, _outlineId));
  __privateSet(this, _outlineId, null);
};
addToDrawLayer_fn = function(parent = this.parent) {
  if (__privateGet(this, _id4) !== null) {
    return;
  }
  ({
    id: __privateWrapper(this, _id4)._,
    clipPathId: __privateWrapper(this, _clipPathId)._
  } = parent.drawLayer.draw({
    bbox: __privateGet(this, _highlightOutlines).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": __privateGet(this, _opacity)
    },
    rootClass: {
      highlight: true,
      free: __privateGet(this, _isFreeHighlight)
    },
    path: {
      d: __privateGet(this, _highlightOutlines).toSVGPath()
    }
  }, false, true));
  __privateSet(this, _outlineId, parent.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: true,
      free: __privateGet(this, _isFreeHighlight)
    },
    bbox: __privateGet(this, _focusOutlines).box,
    path: {
      d: __privateGet(this, _focusOutlines).toSVGPath()
    }
  }, __privateGet(this, _isFreeHighlight)));
  if (__privateGet(this, _highlightDiv)) {
    __privateGet(this, _highlightDiv).style.clipPath = __privateGet(this, _clipPathId);
  }
};
_HighlightEditor_static = new WeakSet();
rotateBbox_fn = function([x, y, width, height], angle) {
  switch (angle) {
    case 90:
      return [1 - y - height, x, height, width];
    case 180:
      return [1 - x - width, 1 - y - height, width, height];
    case 270:
      return [y, 1 - x - width, height, width];
  }
  return [x, y, width, height];
};
keydown_fn = function(event) {
  _HighlightEditor._keyboardManager.exec(this, event);
};
setCaret_fn = function(start) {
  if (!__privateGet(this, _anchorNode)) {
    return;
  }
  const selection = window.getSelection();
  if (start) {
    selection.setPosition(__privateGet(this, _anchorNode), __privateGet(this, _anchorOffset));
  } else {
    selection.setPosition(__privateGet(this, _focusNode), __privateGet(this, _focusOffset));
  }
};
getRotation_fn = function() {
  return __privateGet(this, _isFreeHighlight) ? this.rotation : 0;
};
serializeBoxes_fn = function() {
  if (__privateGet(this, _isFreeHighlight)) {
    return null;
  }
  const [pageWidth, pageHeight] = this.pageDimensions;
  const [pageX, pageY] = this.pageTranslation;
  const boxes = __privateGet(this, _boxes);
  const quadPoints = new Float32Array(boxes.length * 8);
  let i = 0;
  for (const {
    x,
    y,
    width,
    height
  } of boxes) {
    const sx = x * pageWidth + pageX;
    const sy = (1 - y) * pageHeight + pageY;
    quadPoints[i] = quadPoints[i + 4] = sx;
    quadPoints[i + 1] = quadPoints[i + 3] = sy;
    quadPoints[i + 2] = quadPoints[i + 6] = sx + width * pageWidth;
    quadPoints[i + 5] = quadPoints[i + 7] = sy - height * pageHeight;
    i += 8;
  }
  return quadPoints;
};
serializeOutlines_fn = function(rect) {
  return __privateGet(this, _highlightOutlines).serialize(rect, __privateMethod(this, _HighlightEditor_instances, getRotation_fn).call(this));
};
highlightMove_fn = function(parent, event) {
  if (this._freeHighlight.add(event)) {
    parent.drawLayer.updateProperties(this._freeHighlightId, {
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    });
  }
};
endHighlight_fn = function(parent, event) {
  if (!this._freeHighlight.isEmpty()) {
    parent.createAndAddNewEditor(event, false, {
      highlightId: this._freeHighlightId,
      highlightOutlines: this._freeHighlight.getOutlines(),
      clipPathId: this._freeHighlightClipId,
      methodOfCreation: "main_toolbar"
    });
  } else {
    parent.drawLayer.remove(this._freeHighlightId);
  }
  this._freeHighlightId = -1;
  this._freeHighlight = null;
  this._freeHighlightClipId = "";
};
hasElementChanged_fn2 = function(serialized) {
  const {
    color
  } = this._initialData;
  return serialized.color.some((c, i) => c !== color[i]);
};
__privateAdd(_HighlightEditor, _HighlightEditor_static);
__publicField(_HighlightEditor, "_defaultColor", null);
__publicField(_HighlightEditor, "_defaultOpacity", 1);
__publicField(_HighlightEditor, "_defaultThickness", 12);
__publicField(_HighlightEditor, "_type", "highlight");
__publicField(_HighlightEditor, "_editorType", AnnotationEditorType.HIGHLIGHT);
__publicField(_HighlightEditor, "_freeHighlightId", -1);
__publicField(_HighlightEditor, "_freeHighlight", null);
__publicField(_HighlightEditor, "_freeHighlightClipId", "");
var HighlightEditor = _HighlightEditor;
var _svgProperties;
var DrawingOptions = class {
  constructor() {
    __privateAdd(this, _svgProperties, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(name, value) {
    this[name] = value;
    this.updateSVGProperty(name, value);
  }
  updateProperties(properties) {
    if (!properties) {
      return;
    }
    for (const [name, value] of Object.entries(properties)) {
      this.updateProperty(name, value);
    }
  }
  updateSVGProperty(name, value) {
    __privateGet(this, _svgProperties)[name] = value;
  }
  toSVGProperties() {
    const root = __privateGet(this, _svgProperties);
    __privateSet(this, _svgProperties, /* @__PURE__ */ Object.create(null));
    return {
      root
    };
  }
  reset() {
    __privateSet(this, _svgProperties, /* @__PURE__ */ Object.create(null));
  }
  updateAll(options = this) {
    this.updateProperties(options);
  }
  clone() {
    unreachable("Not implemented");
  }
};
_svgProperties = new WeakMap();
var _drawOutlines, _mustBeCommitted, _currentDraw, _currentDrawingAC, _currentDrawingOptions, _currentPointerId, _currentPointerType, _currentPointerIds, _currentMoveTimestamp, _DrawingEditor_instances, createDrawOutlines_fn, createDrawing_fn, cleanDrawLayer_fn2, addToDrawLayer_fn2, convertToParentSpace_fn, convertToDrawSpace_fn, updateBbox_fn, rotateBox_fn;
var _DrawingEditor = class _DrawingEditor extends AnnotationEditor {
  constructor(params) {
    super(params);
    __privateAdd(this, _DrawingEditor_instances);
    __privateAdd(this, _drawOutlines, null);
    __privateAdd(this, _mustBeCommitted);
    __publicField(this, "_drawId", null);
    __privateSet(this, _mustBeCommitted, params.mustBeCommitted || false);
    if (params.drawOutlines) {
      __privateMethod(this, _DrawingEditor_instances, createDrawOutlines_fn).call(this, params);
      __privateMethod(this, _DrawingEditor_instances, addToDrawLayer_fn2).call(this);
    }
  }
  static _mergeSVGProperties(p1, p2) {
    const p1Keys = new Set(Object.keys(p1));
    for (const [key, value] of Object.entries(p2)) {
      if (p1Keys.has(key)) {
        Object.assign(p1[key], value);
      } else {
        p1[key] = value;
      }
    }
    return p1;
  }
  static getDefaultDrawingOptions(_options) {
    unreachable("Not implemented");
  }
  static get typesMap() {
    unreachable("Not implemented");
  }
  static get isDrawer() {
    return true;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static updateDefaultParams(type, value) {
    const propertyName = this.typesMap.get(type);
    if (propertyName) {
      this._defaultDrawingOptions.updateProperty(propertyName, value);
    }
    if (this._currentParent) {
      __privateGet(_DrawingEditor, _currentDraw).updateProperty(propertyName, value);
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
    }
  }
  updateParams(type, value) {
    const propertyName = this.constructor.typesMap.get(type);
    if (propertyName) {
      this._updateProperty(type, propertyName, value);
    }
  }
  static get defaultPropertiesToUpdate() {
    const properties = [];
    const options = this._defaultDrawingOptions;
    for (const [type, name] of this.typesMap) {
      properties.push([type, options[name]]);
    }
    return properties;
  }
  get propertiesToUpdate() {
    const properties = [];
    const {
      _drawingOptions
    } = this;
    for (const [type, name] of this.constructor.typesMap) {
      properties.push([type, _drawingOptions[name]]);
    }
    return properties;
  }
  _updateProperty(type, name, value) {
    const options = this._drawingOptions;
    const savedValue = options[name];
    const setter = (val) => {
      var _a2;
      options.updateProperty(name, val);
      const bbox = __privateGet(this, _drawOutlines).updateProperty(name, val);
      if (bbox) {
        __privateMethod(this, _DrawingEditor_instances, updateBbox_fn).call(this, bbox);
      }
      (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(this._drawId, options.toSVGProperties());
    };
    this.addCommands({
      cmd: setter.bind(this, value),
      undo: setter.bind(this, savedValue),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _onResizing() {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(__privateGet(this, _drawOutlines).getPathResizingSVGProperties(__privateMethod(this, _DrawingEditor_instances, convertToDrawSpace_fn).call(this)), {
      bbox: __privateMethod(this, _DrawingEditor_instances, rotateBox_fn).call(this)
    }));
  }
  _onResized() {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(__privateGet(this, _drawOutlines).getPathResizedSVGProperties(__privateMethod(this, _DrawingEditor_instances, convertToDrawSpace_fn).call(this)), {
      bbox: __privateMethod(this, _DrawingEditor_instances, rotateBox_fn).call(this)
    }));
  }
  _onTranslating(x, y) {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(this._drawId, {
      bbox: __privateMethod(this, _DrawingEditor_instances, rotateBox_fn).call(this, x, y)
    });
  }
  _onTranslated() {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties(__privateGet(this, _drawOutlines).getPathTranslatedSVGProperties(__privateMethod(this, _DrawingEditor_instances, convertToDrawSpace_fn).call(this), this.parentDimensions), {
      bbox: __privateMethod(this, _DrawingEditor_instances, rotateBox_fn).call(this)
    }));
  }
  _onStartDragging() {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: true
      }
    });
  }
  _onStopDragging() {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: false
      }
    });
  }
  commit() {
    super.commit();
    this.disableEditMode();
    this.disableEditing();
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return true;
  }
  onceAdded(focus) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    this._isDraggable = true;
    if (__privateGet(this, _mustBeCommitted)) {
      __privateSet(this, _mustBeCommitted, false);
      this.commit();
      this.parent.setSelected(this);
      if (focus && this.isOnScreen) {
        this.div.focus();
      }
    }
  }
  remove() {
    __privateMethod(this, _DrawingEditor_instances, cleanDrawLayer_fn2).call(this);
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    __privateMethod(this, _DrawingEditor_instances, addToDrawLayer_fn2).call(this);
    __privateMethod(this, _DrawingEditor_instances, updateBbox_fn).call(this, __privateGet(this, _drawOutlines).box);
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  setParent(parent) {
    var _a2;
    let mustBeSelected = false;
    if (this.parent && !parent) {
      this._uiManager.removeShouldRescale(this);
      __privateMethod(this, _DrawingEditor_instances, cleanDrawLayer_fn2).call(this);
    } else if (parent) {
      this._uiManager.addShouldRescale(this);
      __privateMethod(this, _DrawingEditor_instances, addToDrawLayer_fn2).call(this, parent);
      mustBeSelected = !this.parent && ((_a2 = this.div) == null ? void 0 : _a2.classList.contains("selectedEditor"));
    }
    super.setParent(parent);
    if (mustBeSelected) {
      this.select();
    }
  }
  rotate() {
    if (!this.parent) {
      return;
    }
    this.parent.drawLayer.updateProperties(this._drawId, _DrawingEditor._mergeSVGProperties({
      bbox: __privateMethod(this, _DrawingEditor_instances, rotateBox_fn).call(this)
    }, __privateGet(this, _drawOutlines).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    __privateMethod(this, _DrawingEditor_instances, updateBbox_fn).call(this, __privateGet(this, _drawOutlines).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div) {
      return this.div;
    }
    const div = super.render();
    div.classList.add("draw");
    const drawDiv = document.createElement("div");
    div.append(drawDiv);
    drawDiv.setAttribute("aria-hidden", "true");
    drawDiv.className = "internal";
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
    this._uiManager.addShouldRescale(this);
    this.disableEditing();
    return div;
  }
  static createDrawerInstance(_x, _y, _parentWidth3, _parentHeight3, _rotation4) {
    unreachable("Not implemented");
  }
  static startDrawing(parent, uiManager, _isLTR3, event) {
    var _a2;
    const {
      target,
      offsetX: x,
      offsetY: y,
      pointerId,
      pointerType
    } = event;
    if (__privateGet(_DrawingEditor, _currentPointerType) && __privateGet(_DrawingEditor, _currentPointerType) !== pointerType) {
      return;
    }
    const {
      viewport: {
        rotation
      }
    } = parent;
    const {
      width: parentWidth,
      height: parentHeight
    } = target.getBoundingClientRect();
    const ac = __privateSet(_DrawingEditor, _currentDrawingAC, new AbortController());
    const signal = parent.combinedSignal(ac);
    __privateGet(_DrawingEditor, _currentPointerId) || __privateSet(_DrawingEditor, _currentPointerId, pointerId);
    __privateGet(_DrawingEditor, _currentPointerType) ?? __privateSet(_DrawingEditor, _currentPointerType, pointerType);
    window.addEventListener("pointerup", (e) => {
      var _a3;
      if (__privateGet(_DrawingEditor, _currentPointerId) === e.pointerId) {
        this._endDraw(e);
      } else {
        (_a3 = __privateGet(_DrawingEditor, _currentPointerIds)) == null ? void 0 : _a3.delete(e.pointerId);
      }
    }, {
      signal
    });
    window.addEventListener("pointercancel", (e) => {
      var _a3;
      if (__privateGet(_DrawingEditor, _currentPointerId) === e.pointerId) {
        this._currentParent.endDrawingSession();
      } else {
        (_a3 = __privateGet(_DrawingEditor, _currentPointerIds)) == null ? void 0 : _a3.delete(e.pointerId);
      }
    }, {
      signal
    });
    window.addEventListener("pointerdown", (e) => {
      if (__privateGet(_DrawingEditor, _currentPointerType) !== e.pointerType) {
        return;
      }
      (__privateGet(_DrawingEditor, _currentPointerIds) || __privateSet(_DrawingEditor, _currentPointerIds, /* @__PURE__ */ new Set())).add(e.pointerId);
      if (__privateGet(_DrawingEditor, _currentDraw).isCancellable()) {
        __privateGet(_DrawingEditor, _currentDraw).removeLastElement();
        if (__privateGet(_DrawingEditor, _currentDraw).isEmpty()) {
          this._currentParent.endDrawingSession(true);
        } else {
          this._endDraw(null);
        }
      }
    }, {
      capture: true,
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    target.addEventListener("pointermove", this._drawMove.bind(this), {
      signal
    });
    target.addEventListener("touchmove", (e) => {
      if (e.timeStamp === __privateGet(_DrawingEditor, _currentMoveTimestamp)) {
        stopEvent(e);
      }
    }, {
      signal
    });
    parent.toggleDrawing();
    (_a2 = uiManager._editorUndoBar) == null ? void 0 : _a2.hide();
    if (__privateGet(_DrawingEditor, _currentDraw)) {
      parent.drawLayer.updateProperties(this._currentDrawId, __privateGet(_DrawingEditor, _currentDraw).startNew(x, y, parentWidth, parentHeight, rotation));
      return;
    }
    uiManager.updateUIForDefaultProperties(this);
    __privateSet(_DrawingEditor, _currentDraw, this.createDrawerInstance(x, y, parentWidth, parentHeight, rotation));
    __privateSet(_DrawingEditor, _currentDrawingOptions, this.getDefaultDrawingOptions());
    this._currentParent = parent;
    ({
      id: this._currentDrawId
    } = parent.drawLayer.draw(this._mergeSVGProperties(__privateGet(_DrawingEditor, _currentDrawingOptions).toSVGProperties(), __privateGet(_DrawingEditor, _currentDraw).defaultSVGProperties), true, false));
  }
  static _drawMove(event) {
    var _a2;
    __privateSet(_DrawingEditor, _currentMoveTimestamp, -1);
    if (!__privateGet(_DrawingEditor, _currentDraw)) {
      return;
    }
    const {
      offsetX,
      offsetY,
      pointerId
    } = event;
    if (__privateGet(_DrawingEditor, _currentPointerId) !== pointerId) {
      return;
    }
    if (((_a2 = __privateGet(_DrawingEditor, _currentPointerIds)) == null ? void 0 : _a2.size) >= 1) {
      this._endDraw(event);
      return;
    }
    this._currentParent.drawLayer.updateProperties(this._currentDrawId, __privateGet(_DrawingEditor, _currentDraw).add(offsetX, offsetY));
    __privateSet(_DrawingEditor, _currentMoveTimestamp, event.timeStamp);
    stopEvent(event);
  }
  static _cleanup(all) {
    if (all) {
      this._currentDrawId = -1;
      this._currentParent = null;
      __privateSet(_DrawingEditor, _currentDraw, null);
      __privateSet(_DrawingEditor, _currentDrawingOptions, null);
      __privateSet(_DrawingEditor, _currentPointerType, null);
      __privateSet(_DrawingEditor, _currentMoveTimestamp, NaN);
    }
    if (__privateGet(_DrawingEditor, _currentDrawingAC)) {
      __privateGet(_DrawingEditor, _currentDrawingAC).abort();
      __privateSet(_DrawingEditor, _currentDrawingAC, null);
      __privateSet(_DrawingEditor, _currentPointerId, NaN);
      __privateSet(_DrawingEditor, _currentPointerIds, null);
    }
  }
  static _endDraw(event) {
    const parent = this._currentParent;
    if (!parent) {
      return;
    }
    parent.toggleDrawing(true);
    this._cleanup(false);
    if (event) {
      parent.drawLayer.updateProperties(this._currentDrawId, __privateGet(_DrawingEditor, _currentDraw).end(event.offsetX, event.offsetY));
    }
    if (this.supportMultipleDrawings) {
      const draw = __privateGet(_DrawingEditor, _currentDraw);
      const drawId = this._currentDrawId;
      const lastElement = draw.getLastElement();
      parent.addCommands({
        cmd: () => {
          parent.drawLayer.updateProperties(drawId, draw.setLastElement(lastElement));
        },
        undo: () => {
          parent.drawLayer.updateProperties(drawId, draw.removeLastElement());
        },
        mustExec: false,
        type: AnnotationEditorParamsType.DRAW_STEP
      });
      return;
    }
    this.endDrawing(false);
  }
  static endDrawing(isAborted) {
    const parent = this._currentParent;
    if (!parent) {
      return null;
    }
    parent.toggleDrawing(true);
    parent.cleanUndoStack(AnnotationEditorParamsType.DRAW_STEP);
    if (!__privateGet(_DrawingEditor, _currentDraw).isEmpty()) {
      const {
        pageDimensions: [pageWidth, pageHeight],
        scale
      } = parent;
      const editor = parent.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, false, {
        drawId: this._currentDrawId,
        drawOutlines: __privateGet(_DrawingEditor, _currentDraw).getOutlines(pageWidth * scale, pageHeight * scale, scale, this._INNER_MARGIN),
        drawingOptions: __privateGet(_DrawingEditor, _currentDrawingOptions),
        mustBeCommitted: !isAborted
      });
      this._cleanup(true);
      return editor;
    }
    parent.drawLayer.remove(this._currentDrawId);
    this._cleanup(true);
    return null;
  }
  createDrawingOptions(_data2) {
  }
  static deserializeDraw(_pageX, _pageY, _pageWidth2, _pageHeight2, _innerWidth, _data2) {
    unreachable("Not implemented");
  }
  static async deserialize(data, parent, uiManager) {
    var _a2, _b;
    const {
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = parent.viewport;
    const drawOutlines = this.deserializeDraw(pageX, pageY, pageWidth, pageHeight, this._INNER_MARGIN, data);
    const editor = await super.deserialize(data, parent, uiManager);
    editor.createDrawingOptions(data);
    __privateMethod(_a2 = editor, _DrawingEditor_instances, createDrawOutlines_fn).call(_a2, {
      drawOutlines
    });
    __privateMethod(_b = editor, _DrawingEditor_instances, addToDrawLayer_fn2).call(_b);
    editor.onScaleChanging();
    editor.rotate();
    return editor;
  }
  serializeDraw(isForCopying) {
    const [pageX, pageY] = this.pageTranslation;
    const [pageWidth, pageHeight] = this.pageDimensions;
    return __privateGet(this, _drawOutlines).serialize([pageX, pageY, pageWidth, pageHeight], isForCopying);
  }
  renderAnnotationElement(annotation) {
    annotation.updateEdited({
      rect: this.getRect(0, 0)
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
};
_drawOutlines = new WeakMap();
_mustBeCommitted = new WeakMap();
_currentDraw = new WeakMap();
_currentDrawingAC = new WeakMap();
_currentDrawingOptions = new WeakMap();
_currentPointerId = new WeakMap();
_currentPointerType = new WeakMap();
_currentPointerIds = new WeakMap();
_currentMoveTimestamp = new WeakMap();
_DrawingEditor_instances = new WeakSet();
createDrawOutlines_fn = function({
  drawOutlines,
  drawId,
  drawingOptions
}) {
  __privateSet(this, _drawOutlines, drawOutlines);
  this._drawingOptions || (this._drawingOptions = drawingOptions);
  if (drawId >= 0) {
    this._drawId = drawId;
    this.parent.drawLayer.finalizeDraw(drawId, drawOutlines.defaultProperties);
  } else {
    this._drawId = __privateMethod(this, _DrawingEditor_instances, createDrawing_fn).call(this, drawOutlines, this.parent);
  }
  __privateMethod(this, _DrawingEditor_instances, updateBbox_fn).call(this, drawOutlines.box);
};
createDrawing_fn = function(drawOutlines, parent) {
  const {
    id
  } = parent.drawLayer.draw(_DrawingEditor._mergeSVGProperties(this._drawingOptions.toSVGProperties(), drawOutlines.defaultSVGProperties), false, false);
  return id;
};
cleanDrawLayer_fn2 = function() {
  if (this._drawId === null || !this.parent) {
    return;
  }
  this.parent.drawLayer.remove(this._drawId);
  this._drawId = null;
  this._drawingOptions.reset();
};
addToDrawLayer_fn2 = function(parent = this.parent) {
  if (this._drawId !== null && this.parent === parent) {
    return;
  }
  if (this._drawId !== null) {
    this.parent.drawLayer.updateParent(this._drawId, parent.drawLayer);
    return;
  }
  this._drawingOptions.updateAll();
  this._drawId = __privateMethod(this, _DrawingEditor_instances, createDrawing_fn).call(this, __privateGet(this, _drawOutlines), parent);
};
convertToParentSpace_fn = function([x, y, width, height]) {
  const {
    parentDimensions: [pW, pH],
    rotation
  } = this;
  switch (rotation) {
    case 90:
      return [y, 1 - x, width * (pH / pW), height * (pW / pH)];
    case 180:
      return [1 - x, 1 - y, width, height];
    case 270:
      return [1 - y, x, width * (pH / pW), height * (pW / pH)];
    default:
      return [x, y, width, height];
  }
};
convertToDrawSpace_fn = function() {
  const {
    x,
    y,
    width,
    height,
    parentDimensions: [pW, pH],
    rotation
  } = this;
  switch (rotation) {
    case 90:
      return [1 - y, x, width * (pW / pH), height * (pH / pW)];
    case 180:
      return [1 - x, 1 - y, width, height];
    case 270:
      return [y, 1 - x, width * (pW / pH), height * (pH / pW)];
    default:
      return [x, y, width, height];
  }
};
updateBbox_fn = function(bbox) {
  [this.x, this.y, this.width, this.height] = __privateMethod(this, _DrawingEditor_instances, convertToParentSpace_fn).call(this, bbox);
  if (this.div) {
    this.fixAndSetPosition();
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
  }
  this._onResized();
};
rotateBox_fn = function() {
  const {
    x,
    y,
    width,
    height,
    rotation,
    parentRotation,
    parentDimensions: [pW, pH]
  } = this;
  switch ((rotation * 4 + parentRotation) / 90) {
    case 1:
      return [1 - y - height, x, height, width];
    case 2:
      return [1 - x - width, 1 - y - height, width, height];
    case 3:
      return [y, 1 - x - width, height, width];
    case 4:
      return [x, y - width * (pW / pH), height * (pH / pW), width * (pW / pH)];
    case 5:
      return [1 - y, x, width * (pW / pH), height * (pH / pW)];
    case 6:
      return [1 - x - height * (pH / pW), 1 - y, height * (pH / pW), width * (pW / pH)];
    case 7:
      return [y - width * (pW / pH), 1 - x - height * (pH / pW), width * (pW / pH), height * (pH / pW)];
    case 8:
      return [x - width, y - height, width, height];
    case 9:
      return [1 - y, x - width, height, width];
    case 10:
      return [1 - x, 1 - y, width, height];
    case 11:
      return [y - height, 1 - x, height, width];
    case 12:
      return [x - height * (pH / pW), y, height * (pH / pW), width * (pW / pH)];
    case 13:
      return [1 - y - width * (pW / pH), x - height * (pH / pW), width * (pW / pH), height * (pH / pW)];
    case 14:
      return [1 - x, 1 - y - width * (pW / pH), height * (pH / pW), width * (pW / pH)];
    case 15:
      return [y, 1 - x, width * (pW / pH), height * (pH / pW)];
    default:
      return [x, y, width, height];
  }
};
__publicField(_DrawingEditor, "_currentDrawId", -1);
__publicField(_DrawingEditor, "_currentParent", null);
__privateAdd(_DrawingEditor, _currentDraw, null);
__privateAdd(_DrawingEditor, _currentDrawingAC, null);
__privateAdd(_DrawingEditor, _currentDrawingOptions, null);
__privateAdd(_DrawingEditor, _currentPointerId, NaN);
__privateAdd(_DrawingEditor, _currentPointerType, null);
__privateAdd(_DrawingEditor, _currentPointerIds, null);
__privateAdd(_DrawingEditor, _currentMoveTimestamp, NaN);
__publicField(_DrawingEditor, "_INNER_MARGIN", 3);
var DrawingEditor = _DrawingEditor;
var _last2, _line2, _lines, _rotation2, _thickness3, _points3, _lastSVGPath, _lastIndex, _outlines2, _parentWidth, _parentHeight, _InkDrawOutliner_instances, normalizePoint_fn;
var InkDrawOutliner = class {
  constructor(x, y, parentWidth, parentHeight, rotation, thickness) {
    __privateAdd(this, _InkDrawOutliner_instances);
    __privateAdd(this, _last2, new Float64Array(6));
    __privateAdd(this, _line2);
    __privateAdd(this, _lines);
    __privateAdd(this, _rotation2);
    __privateAdd(this, _thickness3);
    __privateAdd(this, _points3);
    __privateAdd(this, _lastSVGPath, "");
    __privateAdd(this, _lastIndex, 0);
    __privateAdd(this, _outlines2, new InkDrawOutline());
    __privateAdd(this, _parentWidth);
    __privateAdd(this, _parentHeight);
    __privateSet(this, _parentWidth, parentWidth);
    __privateSet(this, _parentHeight, parentHeight);
    __privateSet(this, _rotation2, rotation);
    __privateSet(this, _thickness3, thickness);
    [x, y] = __privateMethod(this, _InkDrawOutliner_instances, normalizePoint_fn).call(this, x, y);
    const line = __privateSet(this, _line2, [NaN, NaN, NaN, NaN, x, y]);
    __privateSet(this, _points3, [x, y]);
    __privateSet(this, _lines, [{
      line,
      points: __privateGet(this, _points3)
    }]);
    __privateGet(this, _last2).set(line, 0);
  }
  updateProperty(name, value) {
    if (name === "stroke-width") {
      __privateSet(this, _thickness3, value);
    }
  }
  isEmpty() {
    return !__privateGet(this, _lines) || __privateGet(this, _lines).length === 0;
  }
  isCancellable() {
    return __privateGet(this, _points3).length <= 10;
  }
  add(x, y) {
    [x, y] = __privateMethod(this, _InkDrawOutliner_instances, normalizePoint_fn).call(this, x, y);
    const [x1, y1, x2, y2] = __privateGet(this, _last2).subarray(2, 6);
    const diffX = x - x2;
    const diffY = y - y2;
    const d = Math.hypot(__privateGet(this, _parentWidth) * diffX, __privateGet(this, _parentHeight) * diffY);
    if (d <= 2) {
      return null;
    }
    __privateGet(this, _points3).push(x, y);
    if (isNaN(x1)) {
      __privateGet(this, _last2).set([x2, y2, x, y], 2);
      __privateGet(this, _line2).push(NaN, NaN, NaN, NaN, x, y);
      return {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    if (isNaN(__privateGet(this, _last2)[0])) {
      __privateGet(this, _line2).splice(6, 6);
    }
    __privateGet(this, _last2).set([x1, y1, x2, y2, x, y], 0);
    __privateGet(this, _line2).push(...Outline.createBezierPoints(x1, y1, x2, y2, x, y));
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  end(x, y) {
    const change = this.add(x, y);
    if (change) {
      return change;
    }
    if (__privateGet(this, _points3).length === 2) {
      return {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    return null;
  }
  startNew(x, y, parentWidth, parentHeight, rotation) {
    __privateSet(this, _parentWidth, parentWidth);
    __privateSet(this, _parentHeight, parentHeight);
    __privateSet(this, _rotation2, rotation);
    [x, y] = __privateMethod(this, _InkDrawOutliner_instances, normalizePoint_fn).call(this, x, y);
    const line = __privateSet(this, _line2, [NaN, NaN, NaN, NaN, x, y]);
    __privateSet(this, _points3, [x, y]);
    const last = __privateGet(this, _lines).at(-1);
    if (last) {
      last.line = new Float32Array(last.line);
      last.points = new Float32Array(last.points);
    }
    __privateGet(this, _lines).push({
      line,
      points: __privateGet(this, _points3)
    });
    __privateGet(this, _last2).set(line, 0);
    __privateSet(this, _lastIndex, 0);
    this.toSVGPath();
    return null;
  }
  getLastElement() {
    return __privateGet(this, _lines).at(-1);
  }
  setLastElement(element) {
    if (!__privateGet(this, _lines)) {
      return __privateGet(this, _outlines2).setLastElement(element);
    }
    __privateGet(this, _lines).push(element);
    __privateSet(this, _line2, element.line);
    __privateSet(this, _points3, element.points);
    __privateSet(this, _lastIndex, 0);
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    if (!__privateGet(this, _lines)) {
      return __privateGet(this, _outlines2).removeLastElement();
    }
    __privateGet(this, _lines).pop();
    __privateSet(this, _lastSVGPath, "");
    for (let i = 0, ii = __privateGet(this, _lines).length; i < ii; i++) {
      const {
        line,
        points
      } = __privateGet(this, _lines)[i];
      __privateSet(this, _line2, line);
      __privateSet(this, _points3, points);
      __privateSet(this, _lastIndex, 0);
      this.toSVGPath();
    }
    return {
      path: {
        d: __privateGet(this, _lastSVGPath)
      }
    };
  }
  toSVGPath() {
    const firstX = Outline.svgRound(__privateGet(this, _line2)[4]);
    const firstY = Outline.svgRound(__privateGet(this, _line2)[5]);
    if (__privateGet(this, _points3).length === 2) {
      __privateSet(this, _lastSVGPath, `${__privateGet(this, _lastSVGPath)} M ${firstX} ${firstY} Z`);
      return __privateGet(this, _lastSVGPath);
    }
    if (__privateGet(this, _points3).length <= 6) {
      const i = __privateGet(this, _lastSVGPath).lastIndexOf("M");
      __privateSet(this, _lastSVGPath, `${__privateGet(this, _lastSVGPath).slice(0, i)} M ${firstX} ${firstY}`);
      __privateSet(this, _lastIndex, 6);
    }
    if (__privateGet(this, _points3).length === 4) {
      const secondX = Outline.svgRound(__privateGet(this, _line2)[10]);
      const secondY = Outline.svgRound(__privateGet(this, _line2)[11]);
      __privateSet(this, _lastSVGPath, `${__privateGet(this, _lastSVGPath)} L ${secondX} ${secondY}`);
      __privateSet(this, _lastIndex, 12);
      return __privateGet(this, _lastSVGPath);
    }
    const buffer = [];
    if (__privateGet(this, _lastIndex) === 0) {
      buffer.push(`M ${firstX} ${firstY}`);
      __privateSet(this, _lastIndex, 6);
    }
    for (let i = __privateGet(this, _lastIndex), ii = __privateGet(this, _line2).length; i < ii; i += 6) {
      const [c1x, c1y, c2x, c2y, x, y] = __privateGet(this, _line2).slice(i, i + 6).map(Outline.svgRound);
      buffer.push(`C${c1x} ${c1y} ${c2x} ${c2y} ${x} ${y}`);
    }
    __privateSet(this, _lastSVGPath, __privateGet(this, _lastSVGPath) + buffer.join(" "));
    __privateSet(this, _lastIndex, __privateGet(this, _line2).length);
    return __privateGet(this, _lastSVGPath);
  }
  getOutlines(parentWidth, parentHeight, scale, innerMargin) {
    const last = __privateGet(this, _lines).at(-1);
    last.line = new Float32Array(last.line);
    last.points = new Float32Array(last.points);
    __privateGet(this, _outlines2).build(__privateGet(this, _lines), parentWidth, parentHeight, scale, __privateGet(this, _rotation2), __privateGet(this, _thickness3), innerMargin);
    __privateSet(this, _last2, null);
    __privateSet(this, _line2, null);
    __privateSet(this, _lines, null);
    __privateSet(this, _lastSVGPath, null);
    return __privateGet(this, _outlines2);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: true
      },
      bbox: [0, 0, 1, 1]
    };
  }
};
_last2 = new WeakMap();
_line2 = new WeakMap();
_lines = new WeakMap();
_rotation2 = new WeakMap();
_thickness3 = new WeakMap();
_points3 = new WeakMap();
_lastSVGPath = new WeakMap();
_lastIndex = new WeakMap();
_outlines2 = new WeakMap();
_parentWidth = new WeakMap();
_parentHeight = new WeakMap();
_InkDrawOutliner_instances = new WeakSet();
normalizePoint_fn = function(x, y) {
  return Outline._normalizePoint(x, y, __privateGet(this, _parentWidth), __privateGet(this, _parentHeight), __privateGet(this, _rotation2));
};
var _bbox2, _currentRotation, _innerMargin3, _lines2, _parentWidth2, _parentHeight2, _parentScale, _rotation3, _thickness4, _InkDrawOutline_instances, getMarginComponents_fn, getBBoxWithNoMargin_fn, computeBbox_fn, updateThickness_fn2;
var _InkDrawOutline = class _InkDrawOutline extends Outline {
  constructor() {
    super(...arguments);
    __privateAdd(this, _InkDrawOutline_instances);
    __privateAdd(this, _bbox2);
    __privateAdd(this, _currentRotation, 0);
    __privateAdd(this, _innerMargin3);
    __privateAdd(this, _lines2);
    __privateAdd(this, _parentWidth2);
    __privateAdd(this, _parentHeight2);
    __privateAdd(this, _parentScale);
    __privateAdd(this, _rotation3);
    __privateAdd(this, _thickness4);
  }
  build(lines, parentWidth, parentHeight, parentScale, rotation, thickness, innerMargin) {
    __privateSet(this, _parentWidth2, parentWidth);
    __privateSet(this, _parentHeight2, parentHeight);
    __privateSet(this, _parentScale, parentScale);
    __privateSet(this, _rotation3, rotation);
    __privateSet(this, _thickness4, thickness);
    __privateSet(this, _innerMargin3, innerMargin ?? 0);
    __privateSet(this, _lines2, lines);
    __privateMethod(this, _InkDrawOutline_instances, computeBbox_fn).call(this);
  }
  setLastElement(element) {
    __privateGet(this, _lines2).push(element);
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    __privateGet(this, _lines2).pop();
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const buffer = [];
    for (const {
      line
    } of __privateGet(this, _lines2)) {
      buffer.push(`M${Outline.svgRound(line[4])} ${Outline.svgRound(line[5])}`);
      if (line.length === 6) {
        buffer.push("Z");
        continue;
      }
      if (line.length === 12) {
        buffer.push(`L${Outline.svgRound(line[10])} ${Outline.svgRound(line[11])}`);
        continue;
      }
      for (let i = 6, ii = line.length; i < ii; i += 6) {
        const [c1x, c1y, c2x, c2y, x, y] = line.subarray(i, i + 6).map(Outline.svgRound);
        buffer.push(`C${c1x} ${c1y} ${c2x} ${c2y} ${x} ${y}`);
      }
    }
    return buffer.join("");
  }
  serialize([pageX, pageY, pageWidth, pageHeight], isForCopying) {
    const serializedLines = [];
    const serializedPoints = [];
    const [x, y, width, height] = __privateMethod(this, _InkDrawOutline_instances, getBBoxWithNoMargin_fn).call(this);
    let tx, ty, sx, sy, x1, y1, x2, y2, rescaleFn;
    switch (__privateGet(this, _rotation3)) {
      case 0:
        rescaleFn = Outline._rescale;
        tx = pageX;
        ty = pageY + pageHeight;
        sx = pageWidth;
        sy = -pageHeight;
        x1 = pageX + x * pageWidth;
        y1 = pageY + (1 - y - height) * pageHeight;
        x2 = pageX + (x + width) * pageWidth;
        y2 = pageY + (1 - y) * pageHeight;
        break;
      case 90:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageX;
        ty = pageY;
        sx = pageWidth;
        sy = pageHeight;
        x1 = pageX + y * pageWidth;
        y1 = pageY + x * pageHeight;
        x2 = pageX + (y + height) * pageWidth;
        y2 = pageY + (x + width) * pageHeight;
        break;
      case 180:
        rescaleFn = Outline._rescale;
        tx = pageX + pageWidth;
        ty = pageY;
        sx = -pageWidth;
        sy = pageHeight;
        x1 = pageX + (1 - x - width) * pageWidth;
        y1 = pageY + y * pageHeight;
        x2 = pageX + (1 - x) * pageWidth;
        y2 = pageY + (y + height) * pageHeight;
        break;
      case 270:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageX + pageWidth;
        ty = pageY + pageHeight;
        sx = -pageWidth;
        sy = -pageHeight;
        x1 = pageX + (1 - y - height) * pageWidth;
        y1 = pageY + (1 - x - width) * pageHeight;
        x2 = pageX + (1 - y) * pageWidth;
        y2 = pageY + (1 - x) * pageHeight;
        break;
    }
    for (const {
      line,
      points
    } of __privateGet(this, _lines2)) {
      serializedLines.push(rescaleFn(line, tx, ty, sx, sy, isForCopying ? new Array(line.length) : null));
      serializedPoints.push(rescaleFn(points, tx, ty, sx, sy, isForCopying ? new Array(points.length) : null));
    }
    return {
      lines: serializedLines,
      points: serializedPoints,
      rect: [x1, y1, x2, y2]
    };
  }
  static deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, {
    paths: {
      lines,
      points
    },
    rotation,
    thickness
  }) {
    const newLines = [];
    let tx, ty, sx, sy, rescaleFn;
    switch (rotation) {
      case 0:
        rescaleFn = Outline._rescale;
        tx = -pageX / pageWidth;
        ty = pageY / pageHeight + 1;
        sx = 1 / pageWidth;
        sy = -1 / pageHeight;
        break;
      case 90:
        rescaleFn = Outline._rescaleAndSwap;
        tx = -pageY / pageHeight;
        ty = -pageX / pageWidth;
        sx = 1 / pageHeight;
        sy = 1 / pageWidth;
        break;
      case 180:
        rescaleFn = Outline._rescale;
        tx = pageX / pageWidth + 1;
        ty = -pageY / pageHeight;
        sx = -1 / pageWidth;
        sy = 1 / pageHeight;
        break;
      case 270:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageY / pageHeight + 1;
        ty = pageX / pageWidth + 1;
        sx = -1 / pageHeight;
        sy = -1 / pageWidth;
        break;
    }
    if (!lines) {
      lines = [];
      for (const point of points) {
        const len = point.length;
        if (len === 2) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, point[0], point[1]]));
          continue;
        }
        if (len === 4) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, point[0], point[1], NaN, NaN, NaN, NaN, point[2], point[3]]));
          continue;
        }
        const line = new Float32Array(3 * (len - 2));
        lines.push(line);
        let [x1, y1, x2, y2] = point.subarray(0, 4);
        line.set([NaN, NaN, NaN, NaN, x1, y1], 0);
        for (let i = 4; i < len; i += 2) {
          const x = point[i];
          const y = point[i + 1];
          line.set(Outline.createBezierPoints(x1, y1, x2, y2, x, y), (i - 2) * 3);
          [x1, y1, x2, y2] = [x2, y2, x, y];
        }
      }
    }
    for (let i = 0, ii = lines.length; i < ii; i++) {
      newLines.push({
        line: rescaleFn(lines[i].map((x) => x ?? NaN), tx, ty, sx, sy),
        points: rescaleFn(points[i].map((x) => x ?? NaN), tx, ty, sx, sy)
      });
    }
    const outlines = new _InkDrawOutline();
    outlines.build(newLines, pageWidth, pageHeight, 1, rotation, thickness, innerMargin);
    return outlines;
  }
  get box() {
    return __privateGet(this, _bbox2);
  }
  updateProperty(name, value) {
    if (name === "stroke-width") {
      return __privateMethod(this, _InkDrawOutline_instances, updateThickness_fn2).call(this, value);
    }
    return null;
  }
  updateParentDimensions([width, height], scale) {
    const [oldMarginX, oldMarginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this);
    __privateSet(this, _parentWidth2, width);
    __privateSet(this, _parentHeight2, height);
    __privateSet(this, _parentScale, scale);
    const [newMarginX, newMarginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this);
    const diffMarginX = newMarginX - oldMarginX;
    const diffMarginY = newMarginY - oldMarginY;
    const bbox = __privateGet(this, _bbox2);
    bbox[0] -= diffMarginX;
    bbox[1] -= diffMarginY;
    bbox[2] += 2 * diffMarginX;
    bbox[3] += 2 * diffMarginY;
    return bbox;
  }
  updateRotation(rotation) {
    __privateSet(this, _currentRotation, rotation);
    return {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return __privateGet(this, _bbox2).map(Outline.svgRound).join(" ");
  }
  get defaultProperties() {
    const [x, y] = __privateGet(this, _bbox2);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Outline.svgRound(x)} ${Outline.svgRound(y)}`
      }
    };
  }
  get rotationTransform() {
    const [, , width, height] = __privateGet(this, _bbox2);
    let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
    switch (__privateGet(this, _currentRotation)) {
      case 90:
        b = height / width;
        c = -width / height;
        e = width;
        break;
      case 180:
        a = -1;
        d = -1;
        e = width;
        f = height;
        break;
      case 270:
        b = -height / width;
        c = width / height;
        f = height;
        break;
      default:
        return "";
    }
    return `matrix(${a} ${b} ${c} ${d} ${Outline.svgRound(e)} ${Outline.svgRound(f)})`;
  }
  getPathResizingSVGProperties([newX, newY, newWidth, newHeight]) {
    const [marginX, marginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this);
    const [x, y, width, height] = __privateGet(this, _bbox2);
    if (Math.abs(width - marginX) <= Outline.PRECISION || Math.abs(height - marginY) <= Outline.PRECISION) {
      const tx = newX + newWidth / 2 - (x + width / 2);
      const ty = newY + newHeight / 2 - (y + height / 2);
      return {
        path: {
          "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
          transform: `${this.rotationTransform} translate(${tx} ${ty})`
        }
      };
    }
    const s1x = (newWidth - 2 * marginX) / (width - 2 * marginX);
    const s1y = (newHeight - 2 * marginY) / (height - 2 * marginY);
    const s2x = width / newWidth;
    const s2y = height / newHeight;
    return {
      path: {
        "transform-origin": `${Outline.svgRound(x)} ${Outline.svgRound(y)}`,
        transform: `${this.rotationTransform} scale(${s2x} ${s2y}) translate(${Outline.svgRound(marginX)} ${Outline.svgRound(marginY)}) scale(${s1x} ${s1y}) translate(${Outline.svgRound(-marginX)} ${Outline.svgRound(-marginY)})`
      }
    };
  }
  getPathResizedSVGProperties([newX, newY, newWidth, newHeight]) {
    const [marginX, marginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this);
    const bbox = __privateGet(this, _bbox2);
    const [x, y, width, height] = bbox;
    bbox[0] = newX;
    bbox[1] = newY;
    bbox[2] = newWidth;
    bbox[3] = newHeight;
    if (Math.abs(width - marginX) <= Outline.PRECISION || Math.abs(height - marginY) <= Outline.PRECISION) {
      const tx2 = newX + newWidth / 2 - (x + width / 2);
      const ty2 = newY + newHeight / 2 - (y + height / 2);
      for (const {
        line,
        points
      } of __privateGet(this, _lines2)) {
        Outline._translate(line, tx2, ty2, line);
        Outline._translate(points, tx2, ty2, points);
      }
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const s1x = (newWidth - 2 * marginX) / (width - 2 * marginX);
    const s1y = (newHeight - 2 * marginY) / (height - 2 * marginY);
    const tx = -s1x * (x + marginX) + newX + marginX;
    const ty = -s1y * (y + marginY) + newY + marginY;
    if (s1x !== 1 || s1y !== 1 || tx !== 0 || ty !== 0) {
      for (const {
        line,
        points
      } of __privateGet(this, _lines2)) {
        Outline._rescale(line, tx, ty, s1x, s1y, line);
        Outline._rescale(points, tx, ty, s1x, s1y, points);
      }
    }
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([newX, newY], parentDimensions) {
    const [newParentWidth, newParentHeight] = parentDimensions;
    const bbox = __privateGet(this, _bbox2);
    const tx = newX - bbox[0];
    const ty = newY - bbox[1];
    if (__privateGet(this, _parentWidth2) === newParentWidth && __privateGet(this, _parentHeight2) === newParentHeight) {
      for (const {
        line,
        points
      } of __privateGet(this, _lines2)) {
        Outline._translate(line, tx, ty, line);
        Outline._translate(points, tx, ty, points);
      }
    } else {
      const sx = __privateGet(this, _parentWidth2) / newParentWidth;
      const sy = __privateGet(this, _parentHeight2) / newParentHeight;
      __privateSet(this, _parentWidth2, newParentWidth);
      __privateSet(this, _parentHeight2, newParentHeight);
      for (const {
        line,
        points
      } of __privateGet(this, _lines2)) {
        Outline._rescale(line, tx, ty, sx, sy, line);
        Outline._rescale(points, tx, ty, sx, sy, points);
      }
      bbox[2] *= sx;
      bbox[3] *= sy;
    }
    bbox[0] = newX;
    bbox[1] = newY;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`
      }
    };
  }
  get defaultSVGProperties() {
    const bbox = __privateGet(this, _bbox2);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: true
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Outline.svgRound(bbox[0])} ${Outline.svgRound(bbox[1])}`,
        transform: this.rotationTransform || null
      },
      bbox
    };
  }
};
_bbox2 = new WeakMap();
_currentRotation = new WeakMap();
_innerMargin3 = new WeakMap();
_lines2 = new WeakMap();
_parentWidth2 = new WeakMap();
_parentHeight2 = new WeakMap();
_parentScale = new WeakMap();
_rotation3 = new WeakMap();
_thickness4 = new WeakMap();
_InkDrawOutline_instances = new WeakSet();
getMarginComponents_fn = function(thickness = __privateGet(this, _thickness4)) {
  const margin = __privateGet(this, _innerMargin3) + thickness / 2 * __privateGet(this, _parentScale);
  return __privateGet(this, _rotation3) % 180 === 0 ? [margin / __privateGet(this, _parentWidth2), margin / __privateGet(this, _parentHeight2)] : [margin / __privateGet(this, _parentHeight2), margin / __privateGet(this, _parentWidth2)];
};
getBBoxWithNoMargin_fn = function() {
  const [x, y, width, height] = __privateGet(this, _bbox2);
  const [marginX, marginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this, 0);
  return [x + marginX, y + marginY, width - 2 * marginX, height - 2 * marginY];
};
computeBbox_fn = function() {
  const bbox = __privateSet(this, _bbox2, new Float32Array([Infinity, Infinity, -Infinity, -Infinity]));
  for (const {
    line
  } of __privateGet(this, _lines2)) {
    if (line.length <= 12) {
      for (let i = 4, ii = line.length; i < ii; i += 6) {
        const [x, y] = line.subarray(i, i + 2);
        bbox[0] = Math.min(bbox[0], x);
        bbox[1] = Math.min(bbox[1], y);
        bbox[2] = Math.max(bbox[2], x);
        bbox[3] = Math.max(bbox[3], y);
      }
      continue;
    }
    let lastX = line[4], lastY = line[5];
    for (let i = 6, ii = line.length; i < ii; i += 6) {
      const [c1x, c1y, c2x, c2y, x, y] = line.subarray(i, i + 6);
      Util.bezierBoundingBox(lastX, lastY, c1x, c1y, c2x, c2y, x, y, bbox);
      lastX = x;
      lastY = y;
    }
  }
  const [marginX, marginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this);
  bbox[0] = Math.min(1, Math.max(0, bbox[0] - marginX));
  bbox[1] = Math.min(1, Math.max(0, bbox[1] - marginY));
  bbox[2] = Math.min(1, Math.max(0, bbox[2] + marginX));
  bbox[3] = Math.min(1, Math.max(0, bbox[3] + marginY));
  bbox[2] -= bbox[0];
  bbox[3] -= bbox[1];
};
updateThickness_fn2 = function(thickness) {
  const [oldMarginX, oldMarginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this);
  __privateSet(this, _thickness4, thickness);
  const [newMarginX, newMarginY] = __privateMethod(this, _InkDrawOutline_instances, getMarginComponents_fn).call(this);
  const [diffMarginX, diffMarginY] = [newMarginX - oldMarginX, newMarginY - oldMarginY];
  const bbox = __privateGet(this, _bbox2);
  bbox[0] -= diffMarginX;
  bbox[1] -= diffMarginY;
  bbox[2] += 2 * diffMarginX;
  bbox[3] += 2 * diffMarginY;
  return bbox;
};
var InkDrawOutline = _InkDrawOutline;
var _viewParameters;
var _InkDrawingOptions = class _InkDrawingOptions extends DrawingOptions {
  constructor(viewerParameters) {
    super();
    __privateAdd(this, _viewParameters);
    __privateSet(this, _viewParameters, viewerParameters);
    super.updateProperties({
      fill: "none",
      stroke: AnnotationEditor._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(name, value) {
    if (name === "stroke-width") {
      value ?? (value = this["stroke-width"]);
      value *= __privateGet(this, _viewParameters).realScale;
    }
    super.updateSVGProperty(name, value);
  }
  clone() {
    const clone = new _InkDrawingOptions(__privateGet(this, _viewParameters));
    clone.updateAll(this);
    return clone;
  }
};
_viewParameters = new WeakMap();
var InkDrawingOptions = _InkDrawingOptions;
var _InkEditor_instances, hasElementChanged_fn3;
var _InkEditor = class _InkEditor extends DrawingEditor {
  constructor(params) {
    super({
      ...params,
      name: "inkEditor"
    });
    __privateAdd(this, _InkEditor_instances);
    this._willKeepAspectRatio = true;
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    this._defaultDrawingOptions = new InkDrawingOptions(uiManager.viewParameters);
  }
  static getDefaultDrawingOptions(options) {
    const clone = this._defaultDrawingOptions.clone();
    clone.updateProperties(options);
    return clone;
  }
  static get supportMultipleDrawings() {
    return true;
  }
  static get typesMap() {
    return shadow(this, "typesMap", /* @__PURE__ */ new Map([[AnnotationEditorParamsType.INK_THICKNESS, "stroke-width"], [AnnotationEditorParamsType.INK_COLOR, "stroke"], [AnnotationEditorParamsType.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(x, y, parentWidth, parentHeight, rotation) {
    return new InkDrawOutliner(x, y, parentWidth, parentHeight, rotation, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(pageX, pageY, pageWidth, pageHeight, innerMargin, data) {
    return InkDrawOutline.deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, data);
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof InkAnnotationElement) {
      const {
        data: {
          inkLists,
          rect,
          rotation,
          id,
          color,
          opacity,
          borderStyle: {
            rawWidth: thickness
          },
          popupRef
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.INK,
        color: Array.from(color),
        thickness,
        opacity,
        paths: {
          points: inkLists
        },
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false,
        popupRef
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    editor.annotationElementId = data.id || null;
    editor._initialData = initialData;
    return editor;
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    super.onScaleChanging();
    const {
      _drawId,
      _drawingOptions,
      parent
    } = this;
    _drawingOptions.updateSVGProperty("stroke-width");
    parent.drawLayer.updateProperties(_drawId, _drawingOptions.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const parent = this._currentParent;
    if (!parent) {
      return;
    }
    super.onScaleChangingWhenDrawing();
    this._defaultDrawingOptions.updateSVGProperty("stroke-width");
    parent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
  }
  createDrawingOptions({
    color,
    thickness,
    opacity
  }) {
    this._drawingOptions = _InkEditor.getDefaultDrawingOptions({
      stroke: Util.makeHexColor(...color),
      "stroke-width": thickness,
      "stroke-opacity": opacity
    });
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const {
      lines,
      points,
      rect
    } = this.serializeDraw(isForCopying);
    const {
      _drawingOptions: {
        stroke,
        "stroke-opacity": opacity,
        "stroke-width": thickness
      }
    } = this;
    const serialized = {
      annotationType: AnnotationEditorType.INK,
      color: AnnotationEditor._colorManager.convert(stroke),
      opacity,
      thickness,
      paths: {
        lines,
        points
      },
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      return serialized;
    }
    if (this.annotationElementId && !__privateMethod(this, _InkEditor_instances, hasElementChanged_fn3).call(this, serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  renderAnnotationElement(annotation) {
    const {
      points,
      rect
    } = this.serializeDraw(false);
    annotation.updateEdited({
      rect,
      thickness: this._drawingOptions["stroke-width"],
      points
    });
    return null;
  }
};
_InkEditor_instances = new WeakSet();
hasElementChanged_fn3 = function(serialized) {
  const {
    color,
    thickness,
    opacity,
    pageIndex
  } = this._initialData;
  return this._hasBeenMoved || this._hasBeenResized || serialized.color.some((c, i) => c !== color[i]) || serialized.thickness !== thickness || serialized.opacity !== opacity || serialized.pageIndex !== pageIndex;
};
__publicField(_InkEditor, "_type", "ink");
__publicField(_InkEditor, "_editorType", AnnotationEditorType.INK);
__publicField(_InkEditor, "_defaultDrawingOptions", null);
var InkEditor = _InkEditor;
var _bitmap, _bitmapId, _bitmapPromise, _bitmapUrl, _bitmapFile, _bitmapFileName, _canvas, _resizeTimeoutId, _isSvg, _hasBeenAddedInUndoStack, _StampEditor_instances, getBitmapFetched_fn, getBitmapDone_fn, getBitmap_fn, createCanvas_fn, scaleBitmap_fn, drawBitmap_fn, serializeBitmap_fn, hasElementChanged_fn4;
var _StampEditor = class _StampEditor extends AnnotationEditor {
  constructor(params) {
    super({
      ...params,
      name: "stampEditor"
    });
    __privateAdd(this, _StampEditor_instances);
    __privateAdd(this, _bitmap, null);
    __privateAdd(this, _bitmapId, null);
    __privateAdd(this, _bitmapPromise, null);
    __privateAdd(this, _bitmapUrl, null);
    __privateAdd(this, _bitmapFile, null);
    __privateAdd(this, _bitmapFileName, "");
    __privateAdd(this, _canvas, null);
    __privateAdd(this, _resizeTimeoutId, null);
    __privateAdd(this, _isSvg, false);
    __privateAdd(this, _hasBeenAddedInUndoStack, false);
    __privateSet(this, _bitmapUrl, params.bitmapUrl);
    __privateSet(this, _bitmapFile, params.bitmapFile);
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
  }
  static get supportedTypes() {
    const types = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
    return shadow(this, "supportedTypes", types.map((type) => `image/${type}`));
  }
  static get supportedTypesStr() {
    return shadow(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(mime) {
    return this.supportedTypes.includes(mime);
  }
  static paste(item, parent) {
    parent.pasteEditor(AnnotationEditorType.STAMP, {
      bitmapFile: item.getAsFile()
    });
  }
  altTextFinish() {
    if (this._uiManager.useNewAltTextFlow) {
      this.div.hidden = false;
    }
    super.altTextFinish();
  }
  get telemetryFinalData() {
    var _a2;
    return {
      type: "stamp",
      hasAltText: !!((_a2 = this.altTextData) == null ? void 0 : _a2.altText)
    };
  }
  static computeTelemetryFinalData(data) {
    const hasAltTextStats = data.get("hasAltText");
    return {
      hasAltText: hasAltTextStats.get(true) ?? 0,
      hasNoAltText: hasAltTextStats.get(false) ?? 0
    };
  }
  async mlGuessAltText(imageData = null, updateAltTextData = true) {
    if (this.hasAltTextData()) {
      return null;
    }
    const {
      mlManager
    } = this._uiManager;
    if (!mlManager) {
      throw new Error("No ML.");
    }
    if (!await mlManager.isEnabledFor("altText")) {
      throw new Error("ML isn't enabled for alt text.");
    }
    const {
      data,
      width,
      height
    } = imageData || this.copyCanvas(null, null, true).imageData;
    const response = await mlManager.guess({
      name: "altText",
      request: {
        data,
        width,
        height,
        channels: data.length / (width * height)
      }
    });
    if (!response) {
      throw new Error("No response from the AI service.");
    }
    if (response.error) {
      throw new Error("Error from the AI service.");
    }
    if (response.cancel) {
      return null;
    }
    if (!response.output) {
      throw new Error("No valid response from the AI service.");
    }
    const altText = response.output;
    await this.setGuessedAltText(altText);
    if (updateAltTextData && !this.hasAltTextData()) {
      this.altTextData = {
        alt: altText,
        decorative: false
      };
    }
    return altText;
  }
  remove() {
    var _a2;
    if (__privateGet(this, _bitmapId)) {
      __privateSet(this, _bitmap, null);
      this._uiManager.imageManager.deleteId(__privateGet(this, _bitmapId));
      (_a2 = __privateGet(this, _canvas)) == null ? void 0 : _a2.remove();
      __privateSet(this, _canvas, null);
      if (__privateGet(this, _resizeTimeoutId)) {
        clearTimeout(__privateGet(this, _resizeTimeoutId));
        __privateSet(this, _resizeTimeoutId, null);
      }
    }
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      if (__privateGet(this, _bitmapId)) {
        __privateMethod(this, _StampEditor_instances, getBitmap_fn).call(this);
      }
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (__privateGet(this, _bitmapId) && __privateGet(this, _canvas) === null) {
      __privateMethod(this, _StampEditor_instances, getBitmap_fn).call(this);
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  onceAdded(focus) {
    this._isDraggable = true;
    if (focus) {
      this.div.focus();
    }
  }
  isEmpty() {
    return !(__privateGet(this, _bitmapPromise) || __privateGet(this, _bitmap) || __privateGet(this, _bitmapUrl) || __privateGet(this, _bitmapFile) || __privateGet(this, _bitmapId));
  }
  get isResizable() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this.width) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.div.hidden = true;
    this.div.setAttribute("role", "figure");
    this.addAltTextButton();
    if (__privateGet(this, _bitmap)) {
      __privateMethod(this, _StampEditor_instances, createCanvas_fn).call(this);
    } else {
      __privateMethod(this, _StampEditor_instances, getBitmap_fn).call(this);
    }
    if (this.width && !this.annotationElementId) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
    }
    this._uiManager.addShouldRescale(this);
    return this.div;
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    if (__privateGet(this, _resizeTimeoutId) !== null) {
      clearTimeout(__privateGet(this, _resizeTimeoutId));
    }
    const TIME_TO_WAIT = 200;
    __privateSet(this, _resizeTimeoutId, setTimeout(() => {
      __privateSet(this, _resizeTimeoutId, null);
      __privateMethod(this, _StampEditor_instances, drawBitmap_fn).call(this);
    }, TIME_TO_WAIT));
  }
  copyCanvas(maxDataDimension, maxPreviewDimension, createImageData = false) {
    var _a2;
    if (!maxDataDimension) {
      maxDataDimension = 224;
    }
    const {
      width: bitmapWidth,
      height: bitmapHeight
    } = __privateGet(this, _bitmap);
    const outputScale = new OutputScale();
    let bitmap = __privateGet(this, _bitmap);
    let width = bitmapWidth, height = bitmapHeight;
    let canvas = null;
    if (maxPreviewDimension) {
      if (bitmapWidth > maxPreviewDimension || bitmapHeight > maxPreviewDimension) {
        const ratio = Math.min(maxPreviewDimension / bitmapWidth, maxPreviewDimension / bitmapHeight);
        width = Math.floor(bitmapWidth * ratio);
        height = Math.floor(bitmapHeight * ratio);
      }
      canvas = document.createElement("canvas");
      const scaledWidth = canvas.width = Math.ceil(width * outputScale.sx);
      const scaledHeight = canvas.height = Math.ceil(height * outputScale.sy);
      if (!__privateGet(this, _isSvg)) {
        bitmap = __privateMethod(this, _StampEditor_instances, scaleBitmap_fn).call(this, scaledWidth, scaledHeight);
      }
      const ctx = canvas.getContext("2d");
      ctx.filter = this._uiManager.hcmFilter;
      let white = "white", black = "#cfcfd8";
      if (this._uiManager.hcmFilter !== "none") {
        black = "black";
      } else if ((_a2 = window.matchMedia) == null ? void 0 : _a2.call(window, "(prefers-color-scheme: dark)").matches) {
        white = "#8f8f9d";
        black = "#42414d";
      }
      const boxDim = 15;
      const boxDimWidth = boxDim * outputScale.sx;
      const boxDimHeight = boxDim * outputScale.sy;
      const pattern = new OffscreenCanvas(boxDimWidth * 2, boxDimHeight * 2);
      const patternCtx = pattern.getContext("2d");
      patternCtx.fillStyle = white;
      patternCtx.fillRect(0, 0, boxDimWidth * 2, boxDimHeight * 2);
      patternCtx.fillStyle = black;
      patternCtx.fillRect(0, 0, boxDimWidth, boxDimHeight);
      patternCtx.fillRect(boxDimWidth, boxDimHeight, boxDimWidth, boxDimHeight);
      ctx.fillStyle = ctx.createPattern(pattern, "repeat");
      ctx.fillRect(0, 0, scaledWidth, scaledHeight);
      ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, scaledWidth, scaledHeight);
    }
    let imageData = null;
    if (createImageData) {
      let dataWidth, dataHeight;
      if (outputScale.symmetric && bitmap.width < maxDataDimension && bitmap.height < maxDataDimension) {
        dataWidth = bitmap.width;
        dataHeight = bitmap.height;
      } else {
        bitmap = __privateGet(this, _bitmap);
        if (bitmapWidth > maxDataDimension || bitmapHeight > maxDataDimension) {
          const ratio = Math.min(maxDataDimension / bitmapWidth, maxDataDimension / bitmapHeight);
          dataWidth = Math.floor(bitmapWidth * ratio);
          dataHeight = Math.floor(bitmapHeight * ratio);
          if (!__privateGet(this, _isSvg)) {
            bitmap = __privateMethod(this, _StampEditor_instances, scaleBitmap_fn).call(this, dataWidth, dataHeight);
          }
        }
      }
      const offscreen = new OffscreenCanvas(dataWidth, dataHeight);
      const offscreenCtx = offscreen.getContext("2d", {
        willReadFrequently: true
      });
      offscreenCtx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, dataWidth, dataHeight);
      imageData = {
        width: dataWidth,
        height: dataHeight,
        data: offscreenCtx.getImageData(0, 0, dataWidth, dataHeight).data
      };
    }
    return {
      canvas,
      width,
      height,
      imageData
    };
  }
  getImageForAltText() {
    return __privateGet(this, _canvas);
  }
  static async deserialize(data, parent, uiManager) {
    var _a2;
    let initialData = null;
    if (data instanceof StampAnnotationElement) {
      const {
        data: {
          rect: rect2,
          rotation,
          id,
          structParent,
          popupRef
        },
        container,
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      const canvas = container.querySelector("canvas");
      const imageData = uiManager.imageManager.getFromCanvas(container.id, canvas);
      canvas.remove();
      const altText = ((_a2 = await parent._structTree.getAriaAttributes(`${AnnotationPrefix}${id}`)) == null ? void 0 : _a2.get("aria-label")) || "";
      initialData = data = {
        annotationType: AnnotationEditorType.STAMP,
        bitmapId: imageData.id,
        bitmap: imageData.bitmap,
        pageIndex: pageNumber - 1,
        rect: rect2.slice(0),
        rotation,
        id,
        deleted: false,
        accessibilityData: {
          decorative: false,
          altText
        },
        isSvg: false,
        structParent,
        popupRef
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    const {
      rect,
      bitmap,
      bitmapUrl,
      bitmapId,
      isSvg,
      accessibilityData
    } = data;
    if (bitmapId && uiManager.imageManager.isValidId(bitmapId)) {
      __privateSet(editor, _bitmapId, bitmapId);
      if (bitmap) {
        __privateSet(editor, _bitmap, bitmap);
      }
    } else {
      __privateSet(editor, _bitmapUrl, bitmapUrl);
    }
    __privateSet(editor, _isSvg, isSvg);
    const [parentWidth, parentHeight] = editor.pageDimensions;
    editor.width = (rect[2] - rect[0]) / parentWidth;
    editor.height = (rect[3] - rect[1]) / parentHeight;
    editor.annotationElementId = data.id || null;
    if (accessibilityData) {
      editor.altTextData = accessibilityData;
    }
    editor._initialData = initialData;
    __privateSet(editor, _hasBeenAddedInUndoStack, !!initialData);
    return editor;
  }
  serialize(isForCopying = false, context = null) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const serialized = {
      annotationType: AnnotationEditorType.STAMP,
      bitmapId: __privateGet(this, _bitmapId),
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: __privateGet(this, _isSvg),
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      serialized.bitmapUrl = __privateMethod(this, _StampEditor_instances, serializeBitmap_fn).call(this, true);
      serialized.accessibilityData = this.serializeAltText(true);
      return serialized;
    }
    const {
      decorative,
      altText
    } = this.serializeAltText(false);
    if (!decorative && altText) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: altText
      };
    }
    if (this.annotationElementId) {
      const changes = __privateMethod(this, _StampEditor_instances, hasElementChanged_fn4).call(this, serialized);
      if (changes.isSame) {
        return null;
      }
      if (changes.isSameAltText) {
        delete serialized.accessibilityData;
      } else {
        serialized.accessibilityData.structParent = this._initialData.structParent ?? -1;
      }
    }
    serialized.id = this.annotationElementId;
    if (context === null) {
      return serialized;
    }
    context.stamps || (context.stamps = /* @__PURE__ */ new Map());
    const area = __privateGet(this, _isSvg) ? (serialized.rect[2] - serialized.rect[0]) * (serialized.rect[3] - serialized.rect[1]) : null;
    if (!context.stamps.has(__privateGet(this, _bitmapId))) {
      context.stamps.set(__privateGet(this, _bitmapId), {
        area,
        serialized
      });
      serialized.bitmap = __privateMethod(this, _StampEditor_instances, serializeBitmap_fn).call(this, false);
    } else if (__privateGet(this, _isSvg)) {
      const prevData = context.stamps.get(__privateGet(this, _bitmapId));
      if (area > prevData.area) {
        prevData.area = area;
        prevData.serialized.bitmap.close();
        prevData.serialized.bitmap = __privateMethod(this, _StampEditor_instances, serializeBitmap_fn).call(this, false);
      }
    }
    return serialized;
  }
  renderAnnotationElement(annotation) {
    annotation.updateEdited({
      rect: this.getRect(0, 0)
    });
    return null;
  }
};
_bitmap = new WeakMap();
_bitmapId = new WeakMap();
_bitmapPromise = new WeakMap();
_bitmapUrl = new WeakMap();
_bitmapFile = new WeakMap();
_bitmapFileName = new WeakMap();
_canvas = new WeakMap();
_resizeTimeoutId = new WeakMap();
_isSvg = new WeakMap();
_hasBeenAddedInUndoStack = new WeakMap();
_StampEditor_instances = new WeakSet();
getBitmapFetched_fn = function(data, fromId = false) {
  if (!data) {
    this.remove();
    return;
  }
  __privateSet(this, _bitmap, data.bitmap);
  if (!fromId) {
    __privateSet(this, _bitmapId, data.id);
    __privateSet(this, _isSvg, data.isSvg);
  }
  if (data.file) {
    __privateSet(this, _bitmapFileName, data.file.name);
  }
  __privateMethod(this, _StampEditor_instances, createCanvas_fn).call(this);
};
getBitmapDone_fn = function() {
  __privateSet(this, _bitmapPromise, null);
  this._uiManager.enableWaiting(false);
  if (!__privateGet(this, _canvas)) {
    return;
  }
  if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _bitmap)) {
    this._editToolbar.hide();
    this._uiManager.editAltText(this, true);
    return;
  }
  if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _bitmap)) {
    this._reportTelemetry({
      action: "pdfjs.image.image_added",
      data: {
        alt_text_modal: false,
        alt_text_type: "empty"
      }
    });
    try {
      this.mlGuessAltText();
    } catch {
    }
  }
  this.div.focus();
};
getBitmap_fn = function() {
  if (__privateGet(this, _bitmapId)) {
    this._uiManager.enableWaiting(true);
    this._uiManager.imageManager.getFromId(__privateGet(this, _bitmapId)).then((data) => __privateMethod(this, _StampEditor_instances, getBitmapFetched_fn).call(this, data, true)).finally(() => __privateMethod(this, _StampEditor_instances, getBitmapDone_fn).call(this));
    return;
  }
  if (__privateGet(this, _bitmapUrl)) {
    const url = __privateGet(this, _bitmapUrl);
    __privateSet(this, _bitmapUrl, null);
    this._uiManager.enableWaiting(true);
    __privateSet(this, _bitmapPromise, this._uiManager.imageManager.getFromUrl(url).then((data) => __privateMethod(this, _StampEditor_instances, getBitmapFetched_fn).call(this, data)).finally(() => __privateMethod(this, _StampEditor_instances, getBitmapDone_fn).call(this)));
    return;
  }
  if (__privateGet(this, _bitmapFile)) {
    const file = __privateGet(this, _bitmapFile);
    __privateSet(this, _bitmapFile, null);
    this._uiManager.enableWaiting(true);
    __privateSet(this, _bitmapPromise, this._uiManager.imageManager.getFromFile(file).then((data) => __privateMethod(this, _StampEditor_instances, getBitmapFetched_fn).call(this, data)).finally(() => __privateMethod(this, _StampEditor_instances, getBitmapDone_fn).call(this)));
    return;
  }
  const input = document.createElement("input");
  input.type = "file";
  input.accept = _StampEditor.supportedTypesStr;
  const signal = this._uiManager._signal;
  __privateSet(this, _bitmapPromise, new Promise((resolve) => {
    input.addEventListener("change", async () => {
      if (!input.files || input.files.length === 0) {
        this.remove();
      } else {
        this._uiManager.enableWaiting(true);
        const data = await this._uiManager.imageManager.getFromFile(input.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        });
        __privateMethod(this, _StampEditor_instances, getBitmapFetched_fn).call(this, data);
      }
      resolve();
    }, {
      signal
    });
    input.addEventListener("cancel", () => {
      this.remove();
      resolve();
    }, {
      signal
    });
  }).finally(() => __privateMethod(this, _StampEditor_instances, getBitmapDone_fn).call(this)));
  input.click();
};
createCanvas_fn = function() {
  var _a2;
  const {
    div
  } = this;
  let {
    width,
    height
  } = __privateGet(this, _bitmap);
  const [pageWidth, pageHeight] = this.pageDimensions;
  const MAX_RATIO = 0.75;
  if (this.width) {
    width = this.width * pageWidth;
    height = this.height * pageHeight;
  } else if (width > MAX_RATIO * pageWidth || height > MAX_RATIO * pageHeight) {
    const factor = Math.min(MAX_RATIO * pageWidth / width, MAX_RATIO * pageHeight / height);
    width *= factor;
    height *= factor;
  }
  const [parentWidth, parentHeight] = this.parentDimensions;
  this.setDims(width * parentWidth / pageWidth, height * parentHeight / pageHeight);
  this._uiManager.enableWaiting(false);
  const canvas = __privateSet(this, _canvas, document.createElement("canvas"));
  canvas.setAttribute("role", "img");
  this.addContainer(canvas);
  this.width = width / pageWidth;
  this.height = height / pageHeight;
  if ((_a2 = this._initialOptions) == null ? void 0 : _a2.isCentered) {
    this.center();
  } else {
    this.fixAndSetPosition();
  }
  this._initialOptions = null;
  if (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) {
    div.hidden = false;
  }
  __privateMethod(this, _StampEditor_instances, drawBitmap_fn).call(this);
  if (!__privateGet(this, _hasBeenAddedInUndoStack)) {
    this.parent.addUndoableEditor(this);
    __privateSet(this, _hasBeenAddedInUndoStack, true);
  }
  this._reportTelemetry({
    action: "inserted_image"
  });
  if (__privateGet(this, _bitmapFileName)) {
    canvas.setAttribute("aria-label", __privateGet(this, _bitmapFileName));
  }
};
scaleBitmap_fn = function(width, height) {
  const {
    width: bitmapWidth,
    height: bitmapHeight
  } = __privateGet(this, _bitmap);
  let newWidth = bitmapWidth;
  let newHeight = bitmapHeight;
  let bitmap = __privateGet(this, _bitmap);
  while (newWidth > 2 * width || newHeight > 2 * height) {
    const prevWidth = newWidth;
    const prevHeight = newHeight;
    if (newWidth > 2 * width) {
      newWidth = newWidth >= 16384 ? Math.floor(newWidth / 2) - 1 : Math.ceil(newWidth / 2);
    }
    if (newHeight > 2 * height) {
      newHeight = newHeight >= 16384 ? Math.floor(newHeight / 2) - 1 : Math.ceil(newHeight / 2);
    }
    const offscreen = new OffscreenCanvas(newWidth, newHeight);
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
    bitmap = offscreen.transferToImageBitmap();
  }
  return bitmap;
};
drawBitmap_fn = function() {
  const [parentWidth, parentHeight] = this.parentDimensions;
  const {
    width,
    height
  } = this;
  const outputScale = new OutputScale();
  const scaledWidth = Math.ceil(width * parentWidth * outputScale.sx);
  const scaledHeight = Math.ceil(height * parentHeight * outputScale.sy);
  const canvas = __privateGet(this, _canvas);
  if (!canvas || canvas.width === scaledWidth && canvas.height === scaledHeight) {
    return;
  }
  canvas.width = scaledWidth;
  canvas.height = scaledHeight;
  const bitmap = __privateGet(this, _isSvg) ? __privateGet(this, _bitmap) : __privateMethod(this, _StampEditor_instances, scaleBitmap_fn).call(this, scaledWidth, scaledHeight);
  const ctx = canvas.getContext("2d");
  ctx.filter = this._uiManager.hcmFilter;
  ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, scaledWidth, scaledHeight);
};
serializeBitmap_fn = function(toUrl) {
  if (toUrl) {
    if (__privateGet(this, _isSvg)) {
      const url = this._uiManager.imageManager.getSvgUrl(__privateGet(this, _bitmapId));
      if (url) {
        return url;
      }
    }
    const canvas = document.createElement("canvas");
    ({
      width: canvas.width,
      height: canvas.height
    } = __privateGet(this, _bitmap));
    const ctx = canvas.getContext("2d");
    ctx.drawImage(__privateGet(this, _bitmap), 0, 0);
    return canvas.toDataURL();
  }
  if (__privateGet(this, _isSvg)) {
    const [pageWidth, pageHeight] = this.pageDimensions;
    const width = Math.round(this.width * pageWidth * PixelsPerInch.PDF_TO_CSS_UNITS);
    const height = Math.round(this.height * pageHeight * PixelsPerInch.PDF_TO_CSS_UNITS);
    const offscreen = new OffscreenCanvas(width, height);
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(__privateGet(this, _bitmap), 0, 0, __privateGet(this, _bitmap).width, __privateGet(this, _bitmap).height, 0, 0, width, height);
    return offscreen.transferToImageBitmap();
  }
  return structuredClone(__privateGet(this, _bitmap));
};
hasElementChanged_fn4 = function(serialized) {
  var _a2;
  const {
    pageIndex,
    accessibilityData: {
      altText
    }
  } = this._initialData;
  const isSamePageIndex = serialized.pageIndex === pageIndex;
  const isSameAltText = (((_a2 = serialized.accessibilityData) == null ? void 0 : _a2.alt) || "") === altText;
  return {
    isSame: !this._hasBeenMoved && !this._hasBeenResized && isSamePageIndex && isSameAltText,
    isSameAltText
  };
};
__publicField(_StampEditor, "_type", "stamp");
__publicField(_StampEditor, "_editorType", AnnotationEditorType.STAMP);
var StampEditor = _StampEditor;
var _accessibilityManager2, _allowClick, _annotationLayer, _clickAC, _editorFocusTimeoutId, _editors, _hadPointerDown, _isDisabling, _isEnabling, _drawingAC, _focusedElement, _textLayer, _textSelectionAC, _uiManager3, _editorTypes2, _AnnotationEditorLayer_instances, textLayerPointerDown_fn, currentEditorType_get, createNewEditor_fn, getCenterPoint_fn, cleanup_fn;
var _AnnotationEditorLayer = class _AnnotationEditorLayer {
  constructor({
    uiManager,
    pageIndex,
    div,
    structTreeLayer,
    accessibilityManager,
    annotationLayer,
    drawLayer,
    textLayer,
    viewport,
    l10n
  }) {
    __privateAdd(this, _AnnotationEditorLayer_instances);
    __privateAdd(this, _accessibilityManager2);
    __privateAdd(this, _allowClick, false);
    __privateAdd(this, _annotationLayer, null);
    __privateAdd(this, _clickAC, null);
    __privateAdd(this, _editorFocusTimeoutId, null);
    __privateAdd(this, _editors, /* @__PURE__ */ new Map());
    __privateAdd(this, _hadPointerDown, false);
    __privateAdd(this, _isDisabling, false);
    __privateAdd(this, _isEnabling, false);
    __privateAdd(this, _drawingAC, null);
    __privateAdd(this, _focusedElement, null);
    __privateAdd(this, _textLayer, null);
    __privateAdd(this, _textSelectionAC, null);
    __privateAdd(this, _uiManager3);
    const editorTypes = [...__privateGet(_AnnotationEditorLayer, _editorTypes2).values()];
    if (!_AnnotationEditorLayer._initialized) {
      _AnnotationEditorLayer._initialized = true;
      for (const editorType of editorTypes) {
        editorType.initialize(l10n, uiManager);
      }
    }
    uiManager.registerEditorTypes(editorTypes);
    __privateSet(this, _uiManager3, uiManager);
    this.pageIndex = pageIndex;
    this.div = div;
    __privateSet(this, _accessibilityManager2, accessibilityManager);
    __privateSet(this, _annotationLayer, annotationLayer);
    this.viewport = viewport;
    __privateSet(this, _textLayer, textLayer);
    this.drawLayer = drawLayer;
    this._structTree = structTreeLayer;
    __privateGet(this, _uiManager3).addLayer(this);
  }
  get isEmpty() {
    return __privateGet(this, _editors).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && __privateGet(this, _uiManager3).getMode() === AnnotationEditorType.NONE;
  }
  updateToolbar(mode) {
    __privateGet(this, _uiManager3).updateToolbar(mode);
  }
  updateMode(mode = __privateGet(this, _uiManager3).getMode()) {
    __privateMethod(this, _AnnotationEditorLayer_instances, cleanup_fn).call(this);
    switch (mode) {
      case AnnotationEditorType.NONE:
        this.disableTextSelection();
        this.togglePointerEvents(false);
        this.toggleAnnotationLayerPointerEvents(true);
        this.disableClick();
        return;
      case AnnotationEditorType.INK:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
        break;
      case AnnotationEditorType.HIGHLIGHT:
        this.enableTextSelection();
        this.togglePointerEvents(false);
        this.disableClick();
        break;
      default:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    const {
      classList
    } = this.div;
    for (const editorType of __privateGet(_AnnotationEditorLayer, _editorTypes2).values()) {
      classList.toggle(`${editorType._type}Editing`, mode === editorType._editorType);
    }
    this.div.hidden = false;
  }
  hasTextLayer(textLayer) {
    var _a2;
    return textLayer === ((_a2 = __privateGet(this, _textLayer)) == null ? void 0 : _a2.div);
  }
  setEditingState(isEditing) {
    __privateGet(this, _uiManager3).setEditingState(isEditing);
  }
  addCommands(params) {
    __privateGet(this, _uiManager3).addCommands(params);
  }
  cleanUndoStack(type) {
    __privateGet(this, _uiManager3).cleanUndoStack(type);
  }
  toggleDrawing(enabled = false) {
    this.div.classList.toggle("drawing", !enabled);
  }
  togglePointerEvents(enabled = false) {
    this.div.classList.toggle("disabled", !enabled);
  }
  toggleAnnotationLayerPointerEvents(enabled = false) {
    var _a2;
    (_a2 = __privateGet(this, _annotationLayer)) == null ? void 0 : _a2.div.classList.toggle("disabled", !enabled);
  }
  async enable() {
    __privateSet(this, _isEnabling, true);
    this.div.tabIndex = 0;
    this.togglePointerEvents(true);
    const annotationElementIds = /* @__PURE__ */ new Set();
    for (const editor of __privateGet(this, _editors).values()) {
      editor.enableEditing();
      editor.show(true);
      if (editor.annotationElementId) {
        __privateGet(this, _uiManager3).removeChangedExistingAnnotation(editor);
        annotationElementIds.add(editor.annotationElementId);
      }
    }
    if (!__privateGet(this, _annotationLayer)) {
      __privateSet(this, _isEnabling, false);
      return;
    }
    const editables = __privateGet(this, _annotationLayer).getEditableAnnotations();
    for (const editable of editables) {
      editable.hide();
      if (__privateGet(this, _uiManager3).isDeletedAnnotationElement(editable.data.id)) {
        continue;
      }
      if (annotationElementIds.has(editable.data.id)) {
        continue;
      }
      const editor = await this.deserialize(editable);
      if (!editor) {
        continue;
      }
      this.addOrRebuild(editor);
      editor.enableEditing();
    }
    __privateSet(this, _isEnabling, false);
  }
  disable() {
    var _a2;
    __privateSet(this, _isDisabling, true);
    this.div.tabIndex = -1;
    this.togglePointerEvents(false);
    const changedAnnotations = /* @__PURE__ */ new Map();
    const resetAnnotations = /* @__PURE__ */ new Map();
    for (const editor of __privateGet(this, _editors).values()) {
      editor.disableEditing();
      if (!editor.annotationElementId) {
        continue;
      }
      if (editor.serialize() !== null) {
        changedAnnotations.set(editor.annotationElementId, editor);
        continue;
      } else {
        resetAnnotations.set(editor.annotationElementId, editor);
      }
      (_a2 = this.getEditableAnnotation(editor.annotationElementId)) == null ? void 0 : _a2.show();
      editor.remove();
    }
    if (__privateGet(this, _annotationLayer)) {
      const editables = __privateGet(this, _annotationLayer).getEditableAnnotations();
      for (const editable of editables) {
        const {
          id
        } = editable.data;
        if (__privateGet(this, _uiManager3).isDeletedAnnotationElement(id)) {
          continue;
        }
        let editor = resetAnnotations.get(id);
        if (editor) {
          editor.resetAnnotationElement(editable);
          editor.show(false);
          editable.show();
          continue;
        }
        editor = changedAnnotations.get(id);
        if (editor) {
          __privateGet(this, _uiManager3).addChangedExistingAnnotation(editor);
          if (editor.renderAnnotationElement(editable)) {
            editor.show(false);
          }
        }
        editable.show();
      }
    }
    __privateMethod(this, _AnnotationEditorLayer_instances, cleanup_fn).call(this);
    if (this.isEmpty) {
      this.div.hidden = true;
    }
    const {
      classList
    } = this.div;
    for (const editorType of __privateGet(_AnnotationEditorLayer, _editorTypes2).values()) {
      classList.remove(`${editorType._type}Editing`);
    }
    this.disableTextSelection();
    this.toggleAnnotationLayerPointerEvents(true);
    __privateSet(this, _isDisabling, false);
  }
  getEditableAnnotation(id) {
    var _a2;
    return ((_a2 = __privateGet(this, _annotationLayer)) == null ? void 0 : _a2.getEditableAnnotation(id)) || null;
  }
  setActiveEditor(editor) {
    const currentActive = __privateGet(this, _uiManager3).getActive();
    if (currentActive === editor) {
      return;
    }
    __privateGet(this, _uiManager3).setActiveEditor(editor);
  }
  enableTextSelection() {
    var _a2;
    this.div.tabIndex = -1;
    if (((_a2 = __privateGet(this, _textLayer)) == null ? void 0 : _a2.div) && !__privateGet(this, _textSelectionAC)) {
      __privateSet(this, _textSelectionAC, new AbortController());
      const signal = __privateGet(this, _uiManager3).combinedSignal(__privateGet(this, _textSelectionAC));
      __privateGet(this, _textLayer).div.addEventListener("pointerdown", __privateMethod(this, _AnnotationEditorLayer_instances, textLayerPointerDown_fn).bind(this), {
        signal
      });
      __privateGet(this, _textLayer).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var _a2;
    this.div.tabIndex = 0;
    if (((_a2 = __privateGet(this, _textLayer)) == null ? void 0 : _a2.div) && __privateGet(this, _textSelectionAC)) {
      __privateGet(this, _textSelectionAC).abort();
      __privateSet(this, _textSelectionAC, null);
      __privateGet(this, _textLayer).div.classList.remove("highlighting");
    }
  }
  enableClick() {
    if (__privateGet(this, _clickAC)) {
      return;
    }
    __privateSet(this, _clickAC, new AbortController());
    const signal = __privateGet(this, _uiManager3).combinedSignal(__privateGet(this, _clickAC));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal
    });
    const pointerup = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", pointerup, {
      signal
    });
    this.div.addEventListener("pointercancel", pointerup, {
      signal
    });
  }
  disableClick() {
    var _a2;
    (_a2 = __privateGet(this, _clickAC)) == null ? void 0 : _a2.abort();
    __privateSet(this, _clickAC, null);
  }
  attach(editor) {
    __privateGet(this, _editors).set(editor.id, editor);
    const {
      annotationElementId
    } = editor;
    if (annotationElementId && __privateGet(this, _uiManager3).isDeletedAnnotationElement(annotationElementId)) {
      __privateGet(this, _uiManager3).removeDeletedAnnotationElement(editor);
    }
  }
  detach(editor) {
    var _a2;
    __privateGet(this, _editors).delete(editor.id);
    (_a2 = __privateGet(this, _accessibilityManager2)) == null ? void 0 : _a2.removePointerInTextLayer(editor.contentDiv);
    if (!__privateGet(this, _isDisabling) && editor.annotationElementId) {
      __privateGet(this, _uiManager3).addDeletedAnnotationElement(editor);
    }
  }
  remove(editor) {
    this.detach(editor);
    __privateGet(this, _uiManager3).removeEditor(editor);
    editor.div.remove();
    editor.isAttachedToDOM = false;
  }
  changeParent(editor) {
    var _a2;
    if (editor.parent === this) {
      return;
    }
    if (editor.parent && editor.annotationElementId) {
      __privateGet(this, _uiManager3).addDeletedAnnotationElement(editor.annotationElementId);
      AnnotationEditor.deleteAnnotationElement(editor);
      editor.annotationElementId = null;
    }
    this.attach(editor);
    (_a2 = editor.parent) == null ? void 0 : _a2.detach(editor);
    editor.setParent(this);
    if (editor.div && editor.isAttachedToDOM) {
      editor.div.remove();
      this.div.append(editor.div);
    }
  }
  add(editor) {
    if (editor.parent === this && editor.isAttachedToDOM) {
      return;
    }
    this.changeParent(editor);
    __privateGet(this, _uiManager3).addEditor(editor);
    this.attach(editor);
    if (!editor.isAttachedToDOM) {
      const div = editor.render();
      this.div.append(div);
      editor.isAttachedToDOM = true;
    }
    editor.fixAndSetPosition();
    editor.onceAdded(!__privateGet(this, _isEnabling));
    __privateGet(this, _uiManager3).addToAnnotationStorage(editor);
    editor._reportTelemetry(editor.telemetryInitialData);
  }
  moveEditorInDOM(editor) {
    var _a2;
    if (!editor.isAttachedToDOM) {
      return;
    }
    const {
      activeElement
    } = document;
    if (editor.div.contains(activeElement) && !__privateGet(this, _editorFocusTimeoutId)) {
      editor._focusEventsAllowed = false;
      __privateSet(this, _editorFocusTimeoutId, setTimeout(() => {
        __privateSet(this, _editorFocusTimeoutId, null);
        if (!editor.div.contains(document.activeElement)) {
          editor.div.addEventListener("focusin", () => {
            editor._focusEventsAllowed = true;
          }, {
            once: true,
            signal: __privateGet(this, _uiManager3)._signal
          });
          activeElement.focus();
        } else {
          editor._focusEventsAllowed = true;
        }
      }, 0));
    }
    editor._structTreeParentId = (_a2 = __privateGet(this, _accessibilityManager2)) == null ? void 0 : _a2.moveElementInDOM(this.div, editor.div, editor.contentDiv, true);
  }
  addOrRebuild(editor) {
    if (editor.needsToBeRebuilt()) {
      editor.parent || (editor.parent = this);
      editor.rebuild();
      editor.show();
    } else {
      this.add(editor);
    }
  }
  addUndoableEditor(editor) {
    const cmd = () => editor._uiManager.rebuild(editor);
    const undo = () => {
      editor.remove();
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: false
    });
  }
  getNextId() {
    return __privateGet(this, _uiManager3).getId();
  }
  combinedSignal(ac) {
    return __privateGet(this, _uiManager3).combinedSignal(ac);
  }
  canCreateNewEmptyEditor() {
    var _a2;
    return (_a2 = __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get)) == null ? void 0 : _a2.canCreateNewEmptyEditor();
  }
  pasteEditor(mode, params) {
    __privateGet(this, _uiManager3).updateToolbar(mode);
    __privateGet(this, _uiManager3).updateMode(mode);
    const {
      offsetX,
      offsetY
    } = __privateMethod(this, _AnnotationEditorLayer_instances, getCenterPoint_fn).call(this);
    const id = this.getNextId();
    const editor = __privateMethod(this, _AnnotationEditorLayer_instances, createNewEditor_fn).call(this, {
      parent: this,
      id,
      x: offsetX,
      y: offsetY,
      uiManager: __privateGet(this, _uiManager3),
      isCentered: true,
      ...params
    });
    if (editor) {
      this.add(editor);
    }
  }
  async deserialize(data) {
    var _a2;
    return await ((_a2 = __privateGet(_AnnotationEditorLayer, _editorTypes2).get(data.annotationType ?? data.annotationEditorType)) == null ? void 0 : _a2.deserialize(data, this, __privateGet(this, _uiManager3))) || null;
  }
  createAndAddNewEditor(event, isCentered, data = {}) {
    const id = this.getNextId();
    const editor = __privateMethod(this, _AnnotationEditorLayer_instances, createNewEditor_fn).call(this, {
      parent: this,
      id,
      x: event.offsetX,
      y: event.offsetY,
      uiManager: __privateGet(this, _uiManager3),
      isCentered,
      ...data
    });
    if (editor) {
      this.add(editor);
    }
    return editor;
  }
  addNewEditor() {
    this.createAndAddNewEditor(__privateMethod(this, _AnnotationEditorLayer_instances, getCenterPoint_fn).call(this), true);
  }
  setSelected(editor) {
    __privateGet(this, _uiManager3).setSelected(editor);
  }
  toggleSelected(editor) {
    __privateGet(this, _uiManager3).toggleSelected(editor);
  }
  unselect(editor) {
    __privateGet(this, _uiManager3).unselect(editor);
  }
  pointerup(event) {
    var _a2;
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    if (!__privateGet(this, _hadPointerDown)) {
      return;
    }
    __privateSet(this, _hadPointerDown, false);
    if (((_a2 = __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get)) == null ? void 0 : _a2.isDrawer) && __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get).supportMultipleDrawings) {
      return;
    }
    if (!__privateGet(this, _allowClick)) {
      __privateSet(this, _allowClick, true);
      return;
    }
    if (__privateGet(this, _uiManager3).getMode() === AnnotationEditorType.STAMP) {
      __privateGet(this, _uiManager3).unselectAll();
      return;
    }
    this.createAndAddNewEditor(event, false);
  }
  pointerdown(event) {
    var _a2;
    if (__privateGet(this, _uiManager3).getMode() === AnnotationEditorType.HIGHLIGHT) {
      this.enableTextSelection();
    }
    if (__privateGet(this, _hadPointerDown)) {
      __privateSet(this, _hadPointerDown, false);
      return;
    }
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    __privateSet(this, _hadPointerDown, true);
    if ((_a2 = __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get)) == null ? void 0 : _a2.isDrawer) {
      this.startDrawingSession(event);
      return;
    }
    const editor = __privateGet(this, _uiManager3).getActive();
    __privateSet(this, _allowClick, !editor || editor.isEmpty());
  }
  startDrawingSession(event) {
    this.div.focus();
    if (__privateGet(this, _drawingAC)) {
      __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get).startDrawing(this, __privateGet(this, _uiManager3), false, event);
      return;
    }
    __privateGet(this, _uiManager3).setCurrentDrawingSession(this);
    __privateSet(this, _drawingAC, new AbortController());
    const signal = __privateGet(this, _uiManager3).combinedSignal(__privateGet(this, _drawingAC));
    this.div.addEventListener("blur", ({
      relatedTarget
    }) => {
      if (relatedTarget && !this.div.contains(relatedTarget)) {
        __privateSet(this, _focusedElement, null);
        this.commitOrRemove();
      }
    }, {
      signal
    });
    __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get).startDrawing(this, __privateGet(this, _uiManager3), false, event);
  }
  pause(on) {
    if (on) {
      const {
        activeElement
      } = document;
      if (this.div.contains(activeElement)) {
        __privateSet(this, _focusedElement, activeElement);
      }
      return;
    }
    if (__privateGet(this, _focusedElement)) {
      setTimeout(() => {
        var _a2;
        (_a2 = __privateGet(this, _focusedElement)) == null ? void 0 : _a2.focus();
        __privateSet(this, _focusedElement, null);
      }, 0);
    }
  }
  endDrawingSession(isAborted = false) {
    if (!__privateGet(this, _drawingAC)) {
      return null;
    }
    __privateGet(this, _uiManager3).setCurrentDrawingSession(null);
    __privateGet(this, _drawingAC).abort();
    __privateSet(this, _drawingAC, null);
    __privateSet(this, _focusedElement, null);
    return __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get).endDrawing(isAborted);
  }
  findNewParent(editor, x, y) {
    const layer = __privateGet(this, _uiManager3).findParent(x, y);
    if (layer === null || layer === this) {
      return false;
    }
    layer.changeParent(editor);
    return true;
  }
  commitOrRemove() {
    if (__privateGet(this, _drawingAC)) {
      this.endDrawingSession();
      return true;
    }
    return false;
  }
  onScaleChanging() {
    if (!__privateGet(this, _drawingAC)) {
      return;
    }
    __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var _a2, _b;
    this.commitOrRemove();
    if (((_a2 = __privateGet(this, _uiManager3).getActive()) == null ? void 0 : _a2.parent) === this) {
      __privateGet(this, _uiManager3).commitOrRemove();
      __privateGet(this, _uiManager3).setActiveEditor(null);
    }
    if (__privateGet(this, _editorFocusTimeoutId)) {
      clearTimeout(__privateGet(this, _editorFocusTimeoutId));
      __privateSet(this, _editorFocusTimeoutId, null);
    }
    for (const editor of __privateGet(this, _editors).values()) {
      (_b = __privateGet(this, _accessibilityManager2)) == null ? void 0 : _b.removePointerInTextLayer(editor.contentDiv);
      editor.setParent(null);
      editor.isAttachedToDOM = false;
      editor.div.remove();
    }
    this.div = null;
    __privateGet(this, _editors).clear();
    __privateGet(this, _uiManager3).removeLayer(this);
  }
  render({
    viewport
  }) {
    this.viewport = viewport;
    setLayerDimensions(this.div, viewport);
    for (const editor of __privateGet(this, _uiManager3).getEditors(this.pageIndex)) {
      this.add(editor);
      editor.rebuild();
    }
    this.updateMode();
  }
  update({
    viewport
  }) {
    __privateGet(this, _uiManager3).commitOrRemove();
    __privateMethod(this, _AnnotationEditorLayer_instances, cleanup_fn).call(this);
    const oldRotation = this.viewport.rotation;
    const rotation = viewport.rotation;
    this.viewport = viewport;
    setLayerDimensions(this.div, {
      rotation
    });
    if (oldRotation !== rotation) {
      for (const editor of __privateGet(this, _editors).values()) {
        editor.rotate(rotation);
      }
    }
  }
  get pageDimensions() {
    const {
      pageWidth,
      pageHeight
    } = this.viewport.rawDims;
    return [pageWidth, pageHeight];
  }
  get scale() {
    return __privateGet(this, _uiManager3).viewParameters.realScale;
  }
};
_accessibilityManager2 = new WeakMap();
_allowClick = new WeakMap();
_annotationLayer = new WeakMap();
_clickAC = new WeakMap();
_editorFocusTimeoutId = new WeakMap();
_editors = new WeakMap();
_hadPointerDown = new WeakMap();
_isDisabling = new WeakMap();
_isEnabling = new WeakMap();
_drawingAC = new WeakMap();
_focusedElement = new WeakMap();
_textLayer = new WeakMap();
_textSelectionAC = new WeakMap();
_uiManager3 = new WeakMap();
_editorTypes2 = new WeakMap();
_AnnotationEditorLayer_instances = new WeakSet();
textLayerPointerDown_fn = function(event) {
  __privateGet(this, _uiManager3).unselectAll();
  const {
    target
  } = event;
  if (target === __privateGet(this, _textLayer).div || (target.getAttribute("role") === "img" || target.classList.contains("endOfContent")) && __privateGet(this, _textLayer).div.contains(target)) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    __privateGet(this, _uiManager3).showAllEditors("highlight", true, true);
    __privateGet(this, _textLayer).div.classList.add("free");
    this.toggleDrawing();
    HighlightEditor.startHighlighting(this, __privateGet(this, _uiManager3).direction === "ltr", {
      target: __privateGet(this, _textLayer).div,
      x: event.x,
      y: event.y
    });
    __privateGet(this, _textLayer).div.addEventListener("pointerup", () => {
      __privateGet(this, _textLayer).div.classList.remove("free");
      this.toggleDrawing(true);
    }, {
      once: true,
      signal: __privateGet(this, _uiManager3)._signal
    });
    event.preventDefault();
  }
};
currentEditorType_get = function() {
  return __privateGet(_AnnotationEditorLayer, _editorTypes2).get(__privateGet(this, _uiManager3).getMode());
};
createNewEditor_fn = function(params) {
  const editorType = __privateGet(this, _AnnotationEditorLayer_instances, currentEditorType_get);
  return editorType ? new editorType.prototype.constructor(params) : null;
};
getCenterPoint_fn = function() {
  const {
    x,
    y,
    width,
    height
  } = this.div.getBoundingClientRect();
  const tlX = Math.max(0, x);
  const tlY = Math.max(0, y);
  const brX = Math.min(window.innerWidth, x + width);
  const brY = Math.min(window.innerHeight, y + height);
  const centerX = (tlX + brX) / 2 - x;
  const centerY = (tlY + brY) / 2 - y;
  const [offsetX, offsetY] = this.viewport.rotation % 180 === 0 ? [centerX, centerY] : [centerY, centerX];
  return {
    offsetX,
    offsetY
  };
};
cleanup_fn = function() {
  for (const editor of __privateGet(this, _editors).values()) {
    if (editor.isEmpty()) {
      editor.remove();
    }
  }
};
__publicField(_AnnotationEditorLayer, "_initialized", false);
__privateAdd(_AnnotationEditorLayer, _editorTypes2, new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor].map((type) => [type._editorType, type])));
var AnnotationEditorLayer = _AnnotationEditorLayer;
var _parent2, _id5, _mapping, _toUpdate, _DrawLayer_static, setBox_fn, _DrawLayer_instances, createSVG_fn, createClipPath_fn, updateProperties_fn;
var _DrawLayer = class _DrawLayer {
  constructor({
    pageIndex
  }) {
    __privateAdd(this, _DrawLayer_instances);
    __privateAdd(this, _parent2, null);
    __privateAdd(this, _id5, 0);
    __privateAdd(this, _mapping, /* @__PURE__ */ new Map());
    __privateAdd(this, _toUpdate, /* @__PURE__ */ new Map());
    this.pageIndex = pageIndex;
  }
  setParent(parent) {
    if (!__privateGet(this, _parent2)) {
      __privateSet(this, _parent2, parent);
      return;
    }
    if (__privateGet(this, _parent2) !== parent) {
      if (__privateGet(this, _mapping).size > 0) {
        for (const root of __privateGet(this, _mapping).values()) {
          root.remove();
          parent.append(root);
        }
      }
      __privateSet(this, _parent2, parent);
    }
  }
  static get _svgFactory() {
    return shadow(this, "_svgFactory", new DOMSVGFactory());
  }
  draw(properties, isPathUpdatable = false, hasClip = false) {
    const id = __privateWrapper(this, _id5)._++;
    const root = __privateMethod(this, _DrawLayer_instances, createSVG_fn).call(this);
    const defs = _DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = _DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    if (isPathUpdatable) {
      __privateGet(this, _toUpdate).set(id, path);
    }
    const clipPathId = hasClip ? __privateMethod(this, _DrawLayer_instances, createClipPath_fn).call(this, defs, pathId) : null;
    const use = _DrawLayer._svgFactory.createElement("use");
    root.append(use);
    use.setAttribute("href", `#${pathId}`);
    this.updateProperties(root, properties);
    __privateGet(this, _mapping).set(id, root);
    return {
      id,
      clipPathId: `url(#${clipPathId})`
    };
  }
  drawOutline(properties, mustRemoveSelfIntersections) {
    const id = __privateWrapper(this, _id5)._++;
    const root = __privateMethod(this, _DrawLayer_instances, createSVG_fn).call(this);
    const defs = _DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = _DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    let maskId;
    if (mustRemoveSelfIntersections) {
      const mask = _DrawLayer._svgFactory.createElement("mask");
      defs.append(mask);
      maskId = `mask_p${this.pageIndex}_${id}`;
      mask.setAttribute("id", maskId);
      mask.setAttribute("maskUnits", "objectBoundingBox");
      const rect = _DrawLayer._svgFactory.createElement("rect");
      mask.append(rect);
      rect.setAttribute("width", "1");
      rect.setAttribute("height", "1");
      rect.setAttribute("fill", "white");
      const use = _DrawLayer._svgFactory.createElement("use");
      mask.append(use);
      use.setAttribute("href", `#${pathId}`);
      use.setAttribute("stroke", "none");
      use.setAttribute("fill", "black");
      use.setAttribute("fill-rule", "nonzero");
      use.classList.add("mask");
    }
    const use1 = _DrawLayer._svgFactory.createElement("use");
    root.append(use1);
    use1.setAttribute("href", `#${pathId}`);
    if (maskId) {
      use1.setAttribute("mask", `url(#${maskId})`);
    }
    const use2 = use1.cloneNode();
    root.append(use2);
    use1.classList.add("mainOutline");
    use2.classList.add("secondaryOutline");
    this.updateProperties(root, properties);
    __privateGet(this, _mapping).set(id, root);
    return id;
  }
  finalizeDraw(id, properties) {
    __privateGet(this, _toUpdate).delete(id);
    this.updateProperties(id, properties);
  }
  updateProperties(elementOrId, properties) {
    var _a2;
    if (!properties) {
      return;
    }
    const {
      root,
      bbox,
      rootClass,
      path
    } = properties;
    const element = typeof elementOrId === "number" ? __privateGet(this, _mapping).get(elementOrId) : elementOrId;
    if (!element) {
      return;
    }
    if (root) {
      __privateMethod(this, _DrawLayer_instances, updateProperties_fn).call(this, element, root);
    }
    if (bbox) {
      __privateMethod(_a2 = _DrawLayer, _DrawLayer_static, setBox_fn).call(_a2, element, bbox);
    }
    if (rootClass) {
      const {
        classList
      } = element;
      for (const [className, value] of Object.entries(rootClass)) {
        classList.toggle(className, value);
      }
    }
    if (path) {
      const defs = element.firstChild;
      const pathElement = defs.firstChild;
      __privateMethod(this, _DrawLayer_instances, updateProperties_fn).call(this, pathElement, path);
    }
  }
  updateParent(id, layer) {
    if (layer === this) {
      return;
    }
    const root = __privateGet(this, _mapping).get(id);
    if (!root) {
      return;
    }
    __privateGet(layer, _parent2).append(root);
    __privateGet(this, _mapping).delete(id);
    __privateGet(layer, _mapping).set(id, root);
  }
  remove(id) {
    __privateGet(this, _toUpdate).delete(id);
    if (__privateGet(this, _parent2) === null) {
      return;
    }
    __privateGet(this, _mapping).get(id).remove();
    __privateGet(this, _mapping).delete(id);
  }
  destroy() {
    __privateSet(this, _parent2, null);
    for (const root of __privateGet(this, _mapping).values()) {
      root.remove();
    }
    __privateGet(this, _mapping).clear();
    __privateGet(this, _toUpdate).clear();
  }
};
_parent2 = new WeakMap();
_id5 = new WeakMap();
_mapping = new WeakMap();
_toUpdate = new WeakMap();
_DrawLayer_static = new WeakSet();
setBox_fn = function(element, [x, y, width, height]) {
  const {
    style
  } = element;
  style.top = `${100 * y}%`;
  style.left = `${100 * x}%`;
  style.width = `${100 * width}%`;
  style.height = `${100 * height}%`;
};
_DrawLayer_instances = new WeakSet();
createSVG_fn = function() {
  const svg = _DrawLayer._svgFactory.create(1, 1, true);
  __privateGet(this, _parent2).append(svg);
  svg.setAttribute("aria-hidden", true);
  return svg;
};
createClipPath_fn = function(defs, pathId) {
  const clipPath = _DrawLayer._svgFactory.createElement("clipPath");
  defs.append(clipPath);
  const clipPathId = `clip_${pathId}`;
  clipPath.setAttribute("id", clipPathId);
  clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
  const clipPathUse = _DrawLayer._svgFactory.createElement("use");
  clipPath.append(clipPathUse);
  clipPathUse.setAttribute("href", `#${pathId}`);
  clipPathUse.classList.add("clip");
  return clipPathId;
};
updateProperties_fn = function(element, properties) {
  for (const [key, value] of Object.entries(properties)) {
    if (value === null) {
      element.removeAttribute(key);
    } else {
      element.setAttribute(key, value);
    }
  }
};
__privateAdd(_DrawLayer, _DrawLayer_static);
var DrawLayer = _DrawLayer;
{
  globalThis.pdfjsTestingUtils = {
    HighlightOutliner
  };
}
var __webpack_exports__AbortException = __webpack_exports__.AbortException;
var __webpack_exports__AnnotationEditorLayer = __webpack_exports__.AnnotationEditorLayer;
var __webpack_exports__AnnotationEditorParamsType = __webpack_exports__.AnnotationEditorParamsType;
var __webpack_exports__AnnotationEditorType = __webpack_exports__.AnnotationEditorType;
var __webpack_exports__AnnotationEditorUIManager = __webpack_exports__.AnnotationEditorUIManager;
var __webpack_exports__AnnotationLayer = __webpack_exports__.AnnotationLayer;
var __webpack_exports__AnnotationMode = __webpack_exports__.AnnotationMode;
var __webpack_exports__ColorPicker = __webpack_exports__.ColorPicker;
var __webpack_exports__DOMSVGFactory = __webpack_exports__.DOMSVGFactory;
var __webpack_exports__DrawLayer = __webpack_exports__.DrawLayer;
var __webpack_exports__FeatureTest = __webpack_exports__.FeatureTest;
var __webpack_exports__GlobalWorkerOptions = __webpack_exports__.GlobalWorkerOptions;
var __webpack_exports__ImageKind = __webpack_exports__.ImageKind;
var __webpack_exports__InvalidPDFException = __webpack_exports__.InvalidPDFException;
var __webpack_exports__MissingPDFException = __webpack_exports__.MissingPDFException;
var __webpack_exports__OPS = __webpack_exports__.OPS;
var __webpack_exports__OutputScale = __webpack_exports__.OutputScale;
var __webpack_exports__PDFDataRangeTransport = __webpack_exports__.PDFDataRangeTransport;
var __webpack_exports__PDFDateString = __webpack_exports__.PDFDateString;
var __webpack_exports__PDFWorker = __webpack_exports__.PDFWorker;
var __webpack_exports__PasswordResponses = __webpack_exports__.PasswordResponses;
var __webpack_exports__PermissionFlag = __webpack_exports__.PermissionFlag;
var __webpack_exports__PixelsPerInch = __webpack_exports__.PixelsPerInch;
var __webpack_exports__RenderingCancelledException = __webpack_exports__.RenderingCancelledException;
var __webpack_exports__TextLayer = __webpack_exports__.TextLayer;
var __webpack_exports__TouchManager = __webpack_exports__.TouchManager;
var __webpack_exports__UnexpectedResponseException = __webpack_exports__.UnexpectedResponseException;
var __webpack_exports__Util = __webpack_exports__.Util;
var __webpack_exports__VerbosityLevel = __webpack_exports__.VerbosityLevel;
var __webpack_exports__XfaLayer = __webpack_exports__.XfaLayer;
var __webpack_exports__build = __webpack_exports__.build;
var __webpack_exports__createValidAbsoluteUrl = __webpack_exports__.createValidAbsoluteUrl;
var __webpack_exports__fetchData = __webpack_exports__.fetchData;
var __webpack_exports__getDocument = __webpack_exports__.getDocument;
var __webpack_exports__getFilenameFromUrl = __webpack_exports__.getFilenameFromUrl;
var __webpack_exports__getPdfFilenameFromUrl = __webpack_exports__.getPdfFilenameFromUrl;
var __webpack_exports__getXfaPageViewport = __webpack_exports__.getXfaPageViewport;
var __webpack_exports__isDataScheme = __webpack_exports__.isDataScheme;
var __webpack_exports__isPdfFile = __webpack_exports__.isPdfFile;
var __webpack_exports__noContextMenu = __webpack_exports__.noContextMenu;
var __webpack_exports__normalizeUnicode = __webpack_exports__.normalizeUnicode;
var __webpack_exports__setLayerDimensions = __webpack_exports__.setLayerDimensions;
var __webpack_exports__shadow = __webpack_exports__.shadow;
var __webpack_exports__stopEvent = __webpack_exports__.stopEvent;
var __webpack_exports__version = __webpack_exports__.version;
export {
  __webpack_exports__AbortException as AbortException,
  __webpack_exports__AnnotationEditorLayer as AnnotationEditorLayer,
  __webpack_exports__AnnotationEditorParamsType as AnnotationEditorParamsType,
  __webpack_exports__AnnotationEditorType as AnnotationEditorType,
  __webpack_exports__AnnotationEditorUIManager as AnnotationEditorUIManager,
  __webpack_exports__AnnotationLayer as AnnotationLayer,
  __webpack_exports__AnnotationMode as AnnotationMode,
  __webpack_exports__ColorPicker as ColorPicker,
  __webpack_exports__DOMSVGFactory as DOMSVGFactory,
  __webpack_exports__DrawLayer as DrawLayer,
  __webpack_exports__FeatureTest as FeatureTest,
  __webpack_exports__GlobalWorkerOptions as GlobalWorkerOptions,
  __webpack_exports__ImageKind as ImageKind,
  __webpack_exports__InvalidPDFException as InvalidPDFException,
  __webpack_exports__MissingPDFException as MissingPDFException,
  __webpack_exports__OPS as OPS,
  __webpack_exports__OutputScale as OutputScale,
  __webpack_exports__PDFDataRangeTransport as PDFDataRangeTransport,
  __webpack_exports__PDFDateString as PDFDateString,
  __webpack_exports__PDFWorker as PDFWorker,
  __webpack_exports__PasswordResponses as PasswordResponses,
  __webpack_exports__PermissionFlag as PermissionFlag,
  __webpack_exports__PixelsPerInch as PixelsPerInch,
  __webpack_exports__RenderingCancelledException as RenderingCancelledException,
  __webpack_exports__TextLayer as TextLayer,
  __webpack_exports__TouchManager as TouchManager,
  __webpack_exports__UnexpectedResponseException as UnexpectedResponseException,
  __webpack_exports__Util as Util,
  __webpack_exports__VerbosityLevel as VerbosityLevel,
  __webpack_exports__XfaLayer as XfaLayer,
  __webpack_exports__build as build,
  __webpack_exports__createValidAbsoluteUrl as createValidAbsoluteUrl,
  __webpack_exports__fetchData as fetchData,
  __webpack_exports__getDocument as getDocument,
  __webpack_exports__getFilenameFromUrl as getFilenameFromUrl,
  __webpack_exports__getPdfFilenameFromUrl as getPdfFilenameFromUrl,
  __webpack_exports__getXfaPageViewport as getXfaPageViewport,
  __webpack_exports__isDataScheme as isDataScheme,
  __webpack_exports__isPdfFile as isPdfFile,
  __webpack_exports__noContextMenu as noContextMenu,
  __webpack_exports__normalizeUnicode as normalizeUnicode,
  __webpack_exports__setLayerDimensions as setLayerDimensions,
  __webpack_exports__shadow as shadow,
  __webpack_exports__stopEvent as stopEvent,
  __webpack_exports__version as version
};
//# sourceMappingURL=pdfjs-dist.js.map
