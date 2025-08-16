"use strict";

var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
// const nodemailer = require("nodemailer");
var sendSimpleEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dataSend) {
    var transporter, info;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          transporter = _nodemailer["default"].createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: process.env.EMAIL_APP,
              // generated ethereal user
              pass: process.env.EMAIL_APP_PASSWORD // generated ethereal password
            }
          });
          _context.n = 1;
          return transporter.sendMail({
            from: '"Trí bùi 👻" <huutri91thcslvm@gmail.com>',
            // sender address
            to: dataSend.recieverEmail,
            // list of receivers
            subject: "Thông tin đặt lịch khám bệnh",
            // Subject line
            html: getBodyHTMLEmail(dataSend)
          });
        case 1:
          info = _context.v;
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function sendSimpleEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getBodyHTMLEmail = function getBodyHTMLEmail(dataSend) {
  var result = "";
  if (dataSend.language === "vi") {
    result = "\n<h3>Xin ch\xE0o ".concat(dataSend.patientName, " !</h3>\n<p>B\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c email n\xE0y v\xEC \u0111\xE3 \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh online tr\xEAn booking care</p>\n<p>Th\xF4ng tin \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh</p>\n<div><b>Th\u1EDDi gian: ").concat(dataSend.time, "</b></div>\n<div><b>B\xE1c s\u0129: ").concat(dataSend.doctorName, "</b></div>\n<p>Click v\xE0o link b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 x\xE1c nh\u1EADn th\xF4ng tin \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh</p>\n<div><a href=").concat(dataSend.redirectLink, " target=\"_blank\">Click me</a></div>\n<div>Th\xE2n g\u1EEDi \u0111\u1EBFn b\u1EA1n ").concat(dataSend.patientName, "</div>\n\n");
  }
  if (dataSend.language === "en") {
    result = "\n<h3>Dear ".concat(dataSend.patientName, " !</h3>\n<pYou received this email because you booked an online medical appointment on booking care</p>\n<p>Information on scheduling medical examinations</p>\n<div><b>Schedule time: ").concat(dataSend.time, "</b></div>\n<div><b>Doctor: ").concat(dataSend.doctorName, "</b></div>\n<p>Click on the link below to confirm medical appointment information</p>\n<div><a href=").concat(dataSend.redirectLink, " target=\"_blank\">Click me</a></div>Th\xF4ng tin \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh\n<div>For you ").concat(dataSend.patientName, "</div>\n\n");
  }
  return result;
};
var getBodyHTMLEmailRemedy = function getBodyHTMLEmailRemedy(dataSend) {
  var result = "";
  if (dataSend.language === "vi") {
    result = "\n<h3>Xin ch\xE0o ".concat(dataSend.patientName, " !</h3>\n<p>B\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c email n\xE0y v\xEC \u0111\xE3 \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh online tr\xEAn booking care th\xE0nh c\xF4ng </p>\n<p>Th\xF4ng tin \u0111\u01A1n thu\u1ED1c / h\xF3a \u0111\u01A1n \u0111\u01B0\u1EE3c g\u1EEDi trong file \u0111\xEDnh k\xE8m</p>\n<div>Xin ch\xE2n th\xE0nh c\u1EA3m \u01A1n</div>\n\n");
  }
  if (dataSend.language === "en") {
    result = "\n<h3>Dear ".concat(dataSend.patientName, " !</h3>\n<pYou received this email because you booked an online medical appointment on booking care susceed</p>\n<p>Information on scheduling medical examinations in attach ment</p>\n<p>Sincely thanks</p>\n");
  }
  return result;
};
var sendAttachment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dataSend) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          return _context3.a(2, new Promise(/*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(resolve, reject) {
              var transporter, info, _t;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    _context2.p = 0;
                    transporter = _nodemailer["default"].createTransport({
                      service: "gmail",
                      host: "smtp.gmail.com",
                      port: 465,
                      secure: true,
                      auth: {
                        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                        user: process.env.EMAIL_APP,
                        // generated ethereal user
                        pass: process.env.EMAIL_APP_PASSWORD // generated ethereal password
                      }
                    });
                    _context2.n = 1;
                    return transporter.sendMail({
                      from: '"Trí bùi 👻" <huutri91thcslvm@gmail.com>',
                      // sender address
                      to: dataSend.email,
                      // list of receivers
                      subject: "Kết quả đặt lịch khám bệnh",
                      // Subject line
                      html: getBodyHTMLEmailRemedy(dataSend),
                      attachments: [{
                        // encoded string as an attachment
                        filename: "remedy - ".concat(dataSend.patientId, " - ").concat(dataSend.patientName, " - ").concat(new Date().getTime(), ".png"),
                        content: dataSend.imgBase64.split("base64,")[1],
                        encoding: "base64"
                      }]
                    });
                  case 1:
                    info = _context2.v;
                    // console.log(info);
                    resolve(true);
                    _context2.n = 3;
                    break;
                  case 2:
                    _context2.p = 2;
                    _t = _context2.v;
                    reject(_t);
                  case 3:
                    return _context2.a(2);
                }
              }, _callee2, null, [[0, 2]]);
            }));
            return function (_x3, _x4) {
              return _ref3.apply(this, arguments);
            };
          }()));
      }
    }, _callee3);
  }));
  return function sendAttachment(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//  ;

// //   console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
// //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
// //       <https://github.com/forwardemail/preview-email>

// }

// main().catch(console.error);
module.exports = {
  sendSimpleEmail: sendSimpleEmail,
  sendAttachment: sendAttachment
};