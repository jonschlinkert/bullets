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
 * Pass an array of list-item objects to generate a formatted list
 * or table of contents. Uses [list-item] for generating the actual
 * items.
 *
 *
 * ```js
 * var list = [
 *   {text: 'This is item 1', lvl: 0},
 *   {text: 'This is item 2', lvl: 0},
 *   {text: 'This is item 3', lvl: 0},
 *   {text: 'This is sub-item A', lvl: 2},
 *   {text: 'This is sub-item B', lvl: 2},
 *   {text: 'This is sub-item C', lvl: 2},
 * ];
 * bullets([{text: 'This is a list item', lvl: 0}]);
 *
 * // Results in
 * // '- This is item 1'
 * // '- This is item 2'
 * // '- This is item 3'
 * // '  * This is sub-item A'
 * // '  * This is sub-item B'
 * // '  * This is sub-item C'
 * ```
 *
 * @name bullets
 * @param {Array} `list` Array of item objects with `text` and `lvl` properties
 * @param {String} `text` [list] The text for the list item.
 * @param {Number} `lvl` [list] The level of the list item to be used for indenting the list.
 * @param {Object} `opts` Options to pass to [list-item].
 * @param {Function} `fn` pass a function [expand-range] to modify the bullet for an item as it's generated.
 * @api public
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
