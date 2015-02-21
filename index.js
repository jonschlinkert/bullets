/*!
 * bullets <https://github.com/jonschlinkert/bullets>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var pad = require('pad-left');
var expand = require('expand-range');
var listitem = require('list-item');

/**
 * Expose `bullets`
 */

module.exports = bullets;

/**
 * Create a markdown-formatted heading. (WIP - not sure what I want yet, open to ideas)
 *
 * ```js
 * utils.heading('This is a heading', 1);
 * //=> '# This is a heading'
 * ```
 *
 * @name list
 * @param  {String} `str`
 * @param  {Number} `level`
 * @api private
 */

function bullets(list, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts; opts = {};
  }

  var len = list.length, i = 0;
  var li = listitem(opts, fn);
  var res = '';

  while (len--) {
    var item = list[i++];
    var lvl = item.lvl;
    var str = item.text;

    res += li(lvl, str);
    res += '\n';
  }
  return res;
};


bullets.flat = function (list, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts; opts = {};
  }

  var len = list.length, i = 0;
  var lvl = opts && opts.lvl || 0;
  var li = listitem(opts, fn);
  var res = '';

  while (len--) {
    var item = list[i++];

    res += li(lvl, item);
    res += '\n';
  }
  return res;
};
