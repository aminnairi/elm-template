
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function () {
    'use strict';

    let output = {}; (function () { (function(scope){

    function F(arity, fun, wrapper) {
      wrapper.a = arity;
      wrapper.f = fun;
      return wrapper;
    }

    function F2(fun) {
      return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
    }
    function F3(fun) {
      return F(3, fun, function(a) {
        return function(b) { return function(c) { return fun(a, b, c); }; };
      });
    }
    function F4(fun) {
      return F(4, fun, function(a) { return function(b) { return function(c) {
        return function(d) { return fun(a, b, c, d); }; }; };
      });
    }
    function F5(fun) {
      return F(5, fun, function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
      });
    }
    function F6(fun) {
      return F(6, fun, function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
        return fun(a, b, c, d, e, f); }; }; }; }; };
      });
    }
    function F7(fun) {
      return F(7, fun, function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
        return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
      });
    }
    function F8(fun) {
      return F(8, fun, function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
        return function(g) { return function(h) {
        return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
      });
    }
    function F9(fun) {
      return F(9, fun, function(a) { return function(b) { return function(c) {
        return function(d) { return function(e) { return function(f) {
        return function(g) { return function(h) { return function(i) {
        return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
      });
    }

    function A2(fun, a, b) {
      return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
      return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
      return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
      return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
      return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
      return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
      return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }

    console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


    // EQUALITY

    function _Utils_eq(x, y)
    {
    	for (
    		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
    		isEqual && (pair = stack.pop());
    		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
    		)
    	{}

    	return isEqual;
    }

    function _Utils_eqHelp(x, y, depth, stack)
    {
    	if (depth > 100)
    	{
    		stack.push(_Utils_Tuple2(x,y));
    		return true;
    	}

    	if (x === y)
    	{
    		return true;
    	}

    	if (typeof x !== 'object' || x === null || y === null)
    	{
    		typeof x === 'function' && _Debug_crash(5);
    		return false;
    	}

    	/**/
    	if (x.$ === 'Set_elm_builtin')
    	{
    		x = $elm$core$Set$toList(x);
    		y = $elm$core$Set$toList(y);
    	}
    	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
    	{
    		x = $elm$core$Dict$toList(x);
    		y = $elm$core$Dict$toList(y);
    	}
    	//*/

    	/**_UNUSED/
    	if (x.$ < 0)
    	{
    		x = $elm$core$Dict$toList(x);
    		y = $elm$core$Dict$toList(y);
    	}
    	//*/

    	for (var key in x)
    	{
    		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
    		{
    			return false;
    		}
    	}
    	return true;
    }

    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



    // COMPARISONS

    // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
    // the particular integer values assigned to LT, EQ, and GT.

    function _Utils_cmp(x, y, ord)
    {
    	if (typeof x !== 'object')
    	{
    		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
    	}

    	/**/
    	if (x instanceof String)
    	{
    		var a = x.valueOf();
    		var b = y.valueOf();
    		return a === b ? 0 : a < b ? -1 : 1;
    	}
    	//*/

    	/**_UNUSED/
    	if (typeof x.$ === 'undefined')
    	//*/
    	/**/
    	if (x.$[0] === '#')
    	//*/
    	{
    		return (ord = _Utils_cmp(x.a, y.a))
    			? ord
    			: (ord = _Utils_cmp(x.b, y.b))
    				? ord
    				: _Utils_cmp(x.c, y.c);
    	}

    	// traverse conses until end of a list or a mismatch
    	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
    	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
    }

    var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
    var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
    var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
    var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

    var _Utils_compare = F2(function(x, y)
    {
    	var n = _Utils_cmp(x, y);
    	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    });
    var _Utils_Tuple0 = { $: '#0' };
    function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }
    function _Utils_chr(c) { return new String(c); }


    // APPEND

    var _Utils_append = F2(_Utils_ap);

    function _Utils_ap(xs, ys)
    {
    	// append Strings
    	if (typeof xs === 'string')
    	{
    		return xs + ys;
    	}

    	// append Lists
    	if (!xs.b)
    	{
    		return ys;
    	}
    	var root = _List_Cons(xs.a, ys);
    	xs = xs.b;
    	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
    	{
    		curr = curr.b = _List_Cons(xs.a, ys);
    	}
    	return root;
    }
    var _List_Nil = { $: '[]' };
    function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


    var _List_cons = F2(_List_Cons);

    function _List_fromArray(arr)
    {
    	var out = _List_Nil;
    	for (var i = arr.length; i--; )
    	{
    		out = _List_Cons(arr[i], out);
    	}
    	return out;
    }

    function _List_toArray(xs)
    {
    	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
    	{
    		out.push(xs.a);
    	}
    	return out;
    }

    var _List_map2 = F3(function(f, xs, ys)
    {
    	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
    	{
    		arr.push(A2(f, xs.a, ys.a));
    	}
    	return _List_fromArray(arr);
    });

    var _List_map3 = F4(function(f, xs, ys, zs)
    {
    	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
    	{
    		arr.push(A3(f, xs.a, ys.a, zs.a));
    	}
    	return _List_fromArray(arr);
    });

    var _List_map4 = F5(function(f, ws, xs, ys, zs)
    {
    	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
    	{
    		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
    	}
    	return _List_fromArray(arr);
    });

    var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
    {
    	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
    	{
    		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
    	}
    	return _List_fromArray(arr);
    });

    var _List_sortBy = F2(function(f, xs)
    {
    	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
    		return _Utils_cmp(f(a), f(b));
    	}));
    });

    var _List_sortWith = F2(function(f, xs)
    {
    	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
    		var ord = A2(f, a, b);
    		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
    	}));
    });



    var _JsArray_empty = [];

    function _JsArray_length(array)
    {
        return array.length;
    }

    var _JsArray_initialize = F3(function(size, offset, func)
    {
        var result = new Array(size);

        for (var i = 0; i < size; i++)
        {
            result[i] = func(offset + i);
        }

        return result;
    });

    var _JsArray_initializeFromList = F2(function (max, ls)
    {
        var result = new Array(max);

        for (var i = 0; i < max && ls.b; i++)
        {
            result[i] = ls.a;
            ls = ls.b;
        }

        result.length = i;
        return _Utils_Tuple2(result, ls);
    });

    var _JsArray_unsafeGet = F2(function(index, array)
    {
        return array[index];
    });

    var _JsArray_unsafeSet = F3(function(index, value, array)
    {
        var length = array.length;
        var result = new Array(length);

        for (var i = 0; i < length; i++)
        {
            result[i] = array[i];
        }

        result[index] = value;
        return result;
    });

    var _JsArray_push = F2(function(value, array)
    {
        var length = array.length;
        var result = new Array(length + 1);

        for (var i = 0; i < length; i++)
        {
            result[i] = array[i];
        }

        result[length] = value;
        return result;
    });

    var _JsArray_foldl = F3(function(func, acc, array)
    {
        var length = array.length;

        for (var i = 0; i < length; i++)
        {
            acc = A2(func, array[i], acc);
        }

        return acc;
    });

    var _JsArray_foldr = F3(function(func, acc, array)
    {
        for (var i = array.length - 1; i >= 0; i--)
        {
            acc = A2(func, array[i], acc);
        }

        return acc;
    });

    var _JsArray_map = F2(function(func, array)
    {
        var length = array.length;
        var result = new Array(length);

        for (var i = 0; i < length; i++)
        {
            result[i] = func(array[i]);
        }

        return result;
    });

    var _JsArray_indexedMap = F3(function(func, offset, array)
    {
        var length = array.length;
        var result = new Array(length);

        for (var i = 0; i < length; i++)
        {
            result[i] = A2(func, offset + i, array[i]);
        }

        return result;
    });

    var _JsArray_slice = F3(function(from, to, array)
    {
        return array.slice(from, to);
    });

    var _JsArray_appendN = F3(function(n, dest, source)
    {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;

        if (itemsToCopy > source.length)
        {
            itemsToCopy = source.length;
        }

        var size = destLen + itemsToCopy;
        var result = new Array(size);

        for (var i = 0; i < destLen; i++)
        {
            result[i] = dest[i];
        }

        for (var i = 0; i < itemsToCopy; i++)
        {
            result[i + destLen] = source[i];
        }

        return result;
    });



    // LOG

    var _Debug_log_UNUSED = F2(function(tag, value)
    {
    	return value;
    });

    var _Debug_log = F2(function(tag, value)
    {
    	console.log(tag + ': ' + _Debug_toString(value));
    	return value;
    });

    function _Debug_toString(value)
    {
    	return _Debug_toAnsiString(false, value);
    }

    function _Debug_toAnsiString(ansi, value)
    {
    	if (typeof value === 'function')
    	{
    		return _Debug_internalColor(ansi, '<function>');
    	}

    	if (typeof value === 'boolean')
    	{
    		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
    	}

    	if (typeof value === 'number')
    	{
    		return _Debug_numberColor(ansi, value + '');
    	}

    	if (value instanceof String)
    	{
    		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
    	}

    	if (typeof value === 'string')
    	{
    		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
    	}

    	if (typeof value === 'object' && '$' in value)
    	{
    		var tag = value.$;

    		if (typeof tag === 'number')
    		{
    			return _Debug_internalColor(ansi, '<internals>');
    		}

    		if (tag[0] === '#')
    		{
    			var output = [];
    			for (var k in value)
    			{
    				if (k === '$') continue;
    				output.push(_Debug_toAnsiString(ansi, value[k]));
    			}
    			return '(' + output.join(',') + ')';
    		}

    		if (tag === 'Set_elm_builtin')
    		{
    			return _Debug_ctorColor(ansi, 'Set')
    				+ _Debug_fadeColor(ansi, '.fromList') + ' '
    				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
    		}

    		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
    		{
    			return _Debug_ctorColor(ansi, 'Dict')
    				+ _Debug_fadeColor(ansi, '.fromList') + ' '
    				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
    		}

    		if (tag === 'Array_elm_builtin')
    		{
    			return _Debug_ctorColor(ansi, 'Array')
    				+ _Debug_fadeColor(ansi, '.fromList') + ' '
    				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
    		}

    		if (tag === '::' || tag === '[]')
    		{
    			var output = '[';

    			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);

    			for (; value.b; value = value.b) // WHILE_CONS
    			{
    				output += ',' + _Debug_toAnsiString(ansi, value.a);
    			}
    			return output + ']';
    		}

    		var output = '';
    		for (var i in value)
    		{
    			if (i === '$') continue;
    			var str = _Debug_toAnsiString(ansi, value[i]);
    			var c0 = str[0];
    			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
    			output += ' ' + (parenless ? str : '(' + str + ')');
    		}
    		return _Debug_ctorColor(ansi, tag) + output;
    	}

    	if (typeof DataView === 'function' && value instanceof DataView)
    	{
    		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
    	}

    	if (typeof File === 'function' && value instanceof File)
    	{
    		return _Debug_internalColor(ansi, '<' + value.name + '>');
    	}

    	if (typeof value === 'object')
    	{
    		var output = [];
    		for (var key in value)
    		{
    			var field = key[0] === '_' ? key.slice(1) : key;
    			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
    		}
    		if (output.length === 0)
    		{
    			return '{}';
    		}
    		return '{ ' + output.join(', ') + ' }';
    	}

    	return _Debug_internalColor(ansi, '<internals>');
    }

    function _Debug_addSlashes(str, isChar)
    {
    	var s = str
    		.replace(/\\/g, '\\\\')
    		.replace(/\n/g, '\\n')
    		.replace(/\t/g, '\\t')
    		.replace(/\r/g, '\\r')
    		.replace(/\v/g, '\\v')
    		.replace(/\0/g, '\\0');

    	if (isChar)
    	{
    		return s.replace(/\'/g, '\\\'');
    	}
    	else
    	{
    		return s.replace(/\"/g, '\\"');
    	}
    }

    function _Debug_ctorColor(ansi, string)
    {
    	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
    }

    function _Debug_numberColor(ansi, string)
    {
    	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
    }

    function _Debug_stringColor(ansi, string)
    {
    	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
    }

    function _Debug_charColor(ansi, string)
    {
    	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
    }

    function _Debug_fadeColor(ansi, string)
    {
    	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
    }

    function _Debug_internalColor(ansi, string)
    {
    	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
    }


    function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
    {
    	switch(identifier)
    	{
    		case 0:
    			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

    		case 1:
    			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

    		case 2:
    			var jsonErrorString = fact1;
    			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

    		case 3:
    			var portName = fact1;
    			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

    		case 4:
    			var portName = fact1;
    			var problem = fact2;
    			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

    		case 5:
    			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

    		case 6:
    			var moduleName = fact1;
    			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

    		case 8:
    			var moduleName = fact1;
    			var region = fact2;
    			var message = fact3;
    			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

    		case 9:
    			var moduleName = fact1;
    			var region = fact2;
    			var value = fact3;
    			var message = fact4;
    			throw new Error(
    				'TODO in module `' + moduleName + '` from the `case` expression '
    				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
    				+ _Debug_toString(value).replace('\n', '\n    ')
    				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
    			);

    		case 10:
    			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

    		case 11:
    			throw new Error('Cannot perform mod 0. Division by zero error.');
    	}
    }

    function _Debug_regionToString(region)
    {
    	if (region.start.line === region.end.line)
    	{
    		return 'on line ' + region.start.line;
    	}
    	return 'on lines ' + region.start.line + ' through ' + region.end.line;
    }



    // MATH

    var _Basics_add = F2(function(a, b) { return a + b; });
    var _Basics_sub = F2(function(a, b) { return a - b; });
    var _Basics_mul = F2(function(a, b) { return a * b; });
    var _Basics_fdiv = F2(function(a, b) { return a / b; });
    var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
    var _Basics_pow = F2(Math.pow);

    var _Basics_remainderBy = F2(function(b, a) { return a % b; });

    // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
    var _Basics_modBy = F2(function(modulus, x)
    {
    	var answer = x % modulus;
    	return modulus === 0
    		? _Debug_crash(11)
    		:
    	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
    		? answer + modulus
    		: answer;
    });
    var _Basics_atan2 = F2(Math.atan2);

    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_log = Math.log;
    var _Basics_and = F2(function(a, b) { return a && b; });
    var _Basics_or  = F2(function(a, b) { return a || b; });
    var _Basics_xor = F2(function(a, b) { return a !== b; });



    var _String_cons = F2(function(chr, str)
    {
    	return chr + str;
    });

    function _String_uncons(string)
    {
    	var word = string.charCodeAt(0);
    	return word
    		? $elm$core$Maybe$Just(
    			0xD800 <= word && word <= 0xDBFF
    				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
    				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
    		)
    		: $elm$core$Maybe$Nothing;
    }

    var _String_append = F2(function(a, b)
    {
    	return a + b;
    });

    var _String_map = F2(function(func, string)
    {
    	var len = string.length;
    	var array = new Array(len);
    	var i = 0;
    	while (i < len)
    	{
    		var word = string.charCodeAt(i);
    		if (0xD800 <= word && word <= 0xDBFF)
    		{
    			array[i] = func(_Utils_chr(string[i] + string[i+1]));
    			i += 2;
    			continue;
    		}
    		array[i] = func(_Utils_chr(string[i]));
    		i++;
    	}
    	return array.join('');
    });

    var _String_filter = F2(function(isGood, str)
    {
    	var arr = [];
    	var len = str.length;
    	var i = 0;
    	while (i < len)
    	{
    		var char = str[i];
    		var word = str.charCodeAt(i);
    		i++;
    		if (0xD800 <= word && word <= 0xDBFF)
    		{
    			char += str[i];
    			i++;
    		}

    		if (isGood(_Utils_chr(char)))
    		{
    			arr.push(char);
    		}
    	}
    	return arr.join('');
    });

    var _String_foldl = F3(function(func, state, string)
    {
    	var len = string.length;
    	var i = 0;
    	while (i < len)
    	{
    		var char = string[i];
    		var word = string.charCodeAt(i);
    		i++;
    		if (0xD800 <= word && word <= 0xDBFF)
    		{
    			char += string[i];
    			i++;
    		}
    		state = A2(func, _Utils_chr(char), state);
    	}
    	return state;
    });

    var _String_foldr = F3(function(func, state, string)
    {
    	var i = string.length;
    	while (i--)
    	{
    		var char = string[i];
    		var word = string.charCodeAt(i);
    		if (0xDC00 <= word && word <= 0xDFFF)
    		{
    			i--;
    			char = string[i] + char;
    		}
    		state = A2(func, _Utils_chr(char), state);
    	}
    	return state;
    });

    var _String_split = F2(function(sep, str)
    {
    	return str.split(sep);
    });

    var _String_join = F2(function(sep, strs)
    {
    	return strs.join(sep);
    });

    var _String_slice = F3(function(start, end, str) {
    	return str.slice(start, end);
    });

    var _String_any = F2(function(isGood, string)
    {
    	var i = string.length;
    	while (i--)
    	{
    		var char = string[i];
    		var word = string.charCodeAt(i);
    		if (0xDC00 <= word && word <= 0xDFFF)
    		{
    			i--;
    			char = string[i] + char;
    		}
    		if (isGood(_Utils_chr(char)))
    		{
    			return true;
    		}
    	}
    	return false;
    });

    var _String_all = F2(function(isGood, string)
    {
    	var i = string.length;
    	while (i--)
    	{
    		var char = string[i];
    		var word = string.charCodeAt(i);
    		if (0xDC00 <= word && word <= 0xDFFF)
    		{
    			i--;
    			char = string[i] + char;
    		}
    		if (!isGood(_Utils_chr(char)))
    		{
    			return false;
    		}
    	}
    	return true;
    });

    var _String_contains = F2(function(sub, str)
    {
    	return str.indexOf(sub) > -1;
    });

    var _String_startsWith = F2(function(sub, str)
    {
    	return str.indexOf(sub) === 0;
    });

    var _String_endsWith = F2(function(sub, str)
    {
    	return str.length >= sub.length &&
    		str.lastIndexOf(sub) === str.length - sub.length;
    });

    var _String_indexes = F2(function(sub, str)
    {
    	var subLen = sub.length;

    	if (subLen < 1)
    	{
    		return _List_Nil;
    	}

    	var i = 0;
    	var is = [];

    	while ((i = str.indexOf(sub, i)) > -1)
    	{
    		is.push(i);
    		i = i + subLen;
    	}

    	return _List_fromArray(is);
    });


    // TO STRING

    function _String_fromNumber(number)
    {
    	return number + '';
    }




    function _Char_toCode(char)
    {
    	var code = char.charCodeAt(0);
    	if (0xD800 <= code && code <= 0xDBFF)
    	{
    		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
    	}
    	return code;
    }



    /**/
    function _Json_errorToString(error)
    {
    	return $elm$json$Json$Decode$errorToString(error);
    }
    //*/


    // CORE DECODERS

    function _Json_succeed(msg)
    {
    	return {
    		$: 0,
    		a: msg
    	};
    }

    var _Json_decodeField = F2(function(field, decoder)
    {
    	return {
    		$: 6,
    		d: field,
    		b: decoder
    	};
    });

    var _Json_decodeIndex = F2(function(index, decoder)
    {
    	return {
    		$: 7,
    		e: index,
    		b: decoder
    	};
    });

    function _Json_mapMany(f, decoders)
    {
    	return {
    		$: 9,
    		f: f,
    		g: decoders
    	};
    }

    var _Json_andThen = F2(function(callback, decoder)
    {
    	return {
    		$: 10,
    		b: decoder,
    		h: callback
    	};
    });


    // DECODING OBJECTS

    var _Json_map1 = F2(function(f, d1)
    {
    	return _Json_mapMany(f, [d1]);
    });

    var _Json_map2 = F3(function(f, d1, d2)
    {
    	return _Json_mapMany(f, [d1, d2]);
    });

    var _Json_map3 = F4(function(f, d1, d2, d3)
    {
    	return _Json_mapMany(f, [d1, d2, d3]);
    });

    var _Json_map4 = F5(function(f, d1, d2, d3, d4)
    {
    	return _Json_mapMany(f, [d1, d2, d3, d4]);
    });

    var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
    {
    	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
    });

    var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
    {
    	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
    });

    var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
    {
    	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
    });

    var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
    {
    	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
    });


    // DECODE

    var _Json_runOnString = F2(function(decoder, string)
    {
    	try
    	{
    		var value = JSON.parse(string);
    		return _Json_runHelp(decoder, value);
    	}
    	catch (e)
    	{
    		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
    	}
    });

    var _Json_run = F2(function(decoder, value)
    {
    	return _Json_runHelp(decoder, _Json_unwrap(value));
    });

    function _Json_runHelp(decoder, value)
    {
    	switch (decoder.$)
    	{
    		case 2:
    			return decoder.b(value);

    		case 5:
    			return (value === null)
    				? $elm$core$Result$Ok(decoder.c)
    				: _Json_expecting('null', value);

    		case 3:
    			if (!_Json_isArray(value))
    			{
    				return _Json_expecting('a LIST', value);
    			}
    			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

    		case 4:
    			if (!_Json_isArray(value))
    			{
    				return _Json_expecting('an ARRAY', value);
    			}
    			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

    		case 6:
    			var field = decoder.d;
    			if (typeof value !== 'object' || value === null || !(field in value))
    			{
    				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
    			}
    			var result = _Json_runHelp(decoder.b, value[field]);
    			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

    		case 7:
    			var index = decoder.e;
    			if (!_Json_isArray(value))
    			{
    				return _Json_expecting('an ARRAY', value);
    			}
    			if (index >= value.length)
    			{
    				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
    			}
    			var result = _Json_runHelp(decoder.b, value[index]);
    			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

    		case 8:
    			if (typeof value !== 'object' || value === null || _Json_isArray(value))
    			{
    				return _Json_expecting('an OBJECT', value);
    			}

    			var keyValuePairs = _List_Nil;
    			// TODO test perf of Object.keys and switch when support is good enough
    			for (var key in value)
    			{
    				if (value.hasOwnProperty(key))
    				{
    					var result = _Json_runHelp(decoder.b, value[key]);
    					if (!$elm$core$Result$isOk(result))
    					{
    						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
    					}
    					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
    				}
    			}
    			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

    		case 9:
    			var answer = decoder.f;
    			var decoders = decoder.g;
    			for (var i = 0; i < decoders.length; i++)
    			{
    				var result = _Json_runHelp(decoders[i], value);
    				if (!$elm$core$Result$isOk(result))
    				{
    					return result;
    				}
    				answer = answer(result.a);
    			}
    			return $elm$core$Result$Ok(answer);

    		case 10:
    			var result = _Json_runHelp(decoder.b, value);
    			return (!$elm$core$Result$isOk(result))
    				? result
    				: _Json_runHelp(decoder.h(result.a), value);

    		case 11:
    			var errors = _List_Nil;
    			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
    			{
    				var result = _Json_runHelp(temp.a, value);
    				if ($elm$core$Result$isOk(result))
    				{
    					return result;
    				}
    				errors = _List_Cons(result.a, errors);
    			}
    			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

    		case 1:
    			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

    		case 0:
    			return $elm$core$Result$Ok(decoder.a);
    	}
    }

    function _Json_runArrayDecoder(decoder, value, toElmValue)
    {
    	var len = value.length;
    	var array = new Array(len);
    	for (var i = 0; i < len; i++)
    	{
    		var result = _Json_runHelp(decoder, value[i]);
    		if (!$elm$core$Result$isOk(result))
    		{
    			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
    		}
    		array[i] = result.a;
    	}
    	return $elm$core$Result$Ok(toElmValue(array));
    }

    function _Json_isArray(value)
    {
    	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
    }

    function _Json_toElmArray(array)
    {
    	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
    }

    function _Json_expecting(type, value)
    {
    	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
    }


    // ENCODE

    var _Json_encode = F2(function(indentLevel, value)
    {
    	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
    });

    function _Json_wrap(value) { return { $: 0, a: value }; }
    function _Json_unwrap(value) { return value.a; }

    var _Json_addField = F3(function(key, value, object)
    {
    	object[key] = _Json_unwrap(value);
    	return object;
    });



    // TASKS

    function _Scheduler_succeed(value)
    {
    	return {
    		$: 0,
    		a: value
    	};
    }

    function _Scheduler_binding(callback)
    {
    	return {
    		$: 2,
    		b: callback,
    		c: null
    	};
    }

    var _Scheduler_andThen = F2(function(callback, task)
    {
    	return {
    		$: 3,
    		b: callback,
    		d: task
    	};
    });

    var _Scheduler_onError = F2(function(callback, task)
    {
    	return {
    		$: 4,
    		b: callback,
    		d: task
    	};
    });

    function _Scheduler_receive(callback)
    {
    	return {
    		$: 5,
    		b: callback
    	};
    }


    // PROCESSES

    var _Scheduler_guid = 0;

    function _Scheduler_rawSpawn(task)
    {
    	var proc = {
    		$: 0,
    		e: _Scheduler_guid++,
    		f: task,
    		g: null,
    		h: []
    	};

    	_Scheduler_enqueue(proc);

    	return proc;
    }

    function _Scheduler_rawSend(proc, msg)
    {
    	proc.h.push(msg);
    	_Scheduler_enqueue(proc);
    }

    var _Scheduler_send = F2(function(proc, msg)
    {
    	return _Scheduler_binding(function(callback) {
    		_Scheduler_rawSend(proc, msg);
    		callback(_Scheduler_succeed(_Utils_Tuple0));
    	});
    });


    /* STEP PROCESSES

    type alias Process =
      { $ : tag
      , id : unique_id
      , root : Task
      , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
      , mailbox : [msg]
      }

    */


    var _Scheduler_working = false;
    var _Scheduler_queue = [];


    function _Scheduler_enqueue(proc)
    {
    	_Scheduler_queue.push(proc);
    	if (_Scheduler_working)
    	{
    		return;
    	}
    	_Scheduler_working = true;
    	while (proc = _Scheduler_queue.shift())
    	{
    		_Scheduler_step(proc);
    	}
    	_Scheduler_working = false;
    }


    function _Scheduler_step(proc)
    {
    	while (proc.f)
    	{
    		var rootTag = proc.f.$;
    		if (rootTag === 0 || rootTag === 1)
    		{
    			while (proc.g && proc.g.$ !== rootTag)
    			{
    				proc.g = proc.g.i;
    			}
    			if (!proc.g)
    			{
    				return;
    			}
    			proc.f = proc.g.b(proc.f.a);
    			proc.g = proc.g.i;
    		}
    		else if (rootTag === 2)
    		{
    			proc.f.c = proc.f.b(function(newRoot) {
    				proc.f = newRoot;
    				_Scheduler_enqueue(proc);
    			});
    			return;
    		}
    		else if (rootTag === 5)
    		{
    			if (proc.h.length === 0)
    			{
    				return;
    			}
    			proc.f = proc.f.b(proc.h.shift());
    		}
    		else // if (rootTag === 3 || rootTag === 4)
    		{
    			proc.g = {
    				$: rootTag === 3 ? 0 : 1,
    				b: proc.f.b,
    				i: proc.g
    			};
    			proc.f = proc.f.d;
    		}
    	}
    }




    // PROGRAMS


    var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
    {
    	return _Platform_initialize(
    		flagDecoder,
    		args,
    		impl.init,
    		impl.update,
    		impl.subscriptions,
    		function() { return function() {} }
    	);
    });



    // INITIALIZE A PROGRAM


    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
    {
    	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
    	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
    	var managers = {};
    	result = init(result.a);
    	var model = result.a;
    	var stepper = stepperBuilder(sendToApp, model);
    	var ports = _Platform_setupEffects(managers, sendToApp);

    	function sendToApp(msg, viewMetadata)
    	{
    		result = A2(update, msg, model);
    		stepper(model = result.a, viewMetadata);
    		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
    	}

    	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

    	return ports ? { ports: ports } : {};
    }



    // EFFECT MANAGERS


    var _Platform_effectManagers = {};


    function _Platform_setupEffects(managers, sendToApp)
    {
    	var ports;

    	// setup all necessary effect managers
    	for (var key in _Platform_effectManagers)
    	{
    		var manager = _Platform_effectManagers[key];

    		if (manager.a)
    		{
    			ports = ports || {};
    			ports[key] = manager.a(key, sendToApp);
    		}

    		managers[key] = _Platform_instantiateManager(manager, sendToApp);
    	}

    	return ports;
    }


    function _Platform_instantiateManager(info, sendToApp)
    {
    	var router = {
    		g: sendToApp,
    		h: undefined
    	};

    	var onEffects = info.c;
    	var onSelfMsg = info.d;
    	var cmdMap = info.e;
    	var subMap = info.f;

    	function loop(state)
    	{
    		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
    		{
    			var value = msg.a;

    			if (msg.$ === 0)
    			{
    				return A3(onSelfMsg, router, value, state);
    			}

    			return cmdMap && subMap
    				? A4(onEffects, router, value.i, value.j, state)
    				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
    		}));
    	}

    	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
    }



    // ROUTING


    var _Platform_sendToApp = F2(function(router, msg)
    {
    	return _Scheduler_binding(function(callback)
    	{
    		router.g(msg);
    		callback(_Scheduler_succeed(_Utils_Tuple0));
    	});
    });


    var _Platform_sendToSelf = F2(function(router, msg)
    {
    	return A2(_Scheduler_send, router.h, {
    		$: 0,
    		a: msg
    	});
    });


    var _Platform_map = F2(function(tagger, bag)
    {
    	return {
    		$: 3,
    		n: tagger,
    		o: bag
    	}
    });



    // PIPE BAGS INTO EFFECT MANAGERS


    function _Platform_dispatchEffects(managers, cmdBag, subBag)
    {
    	var effectsDict = {};
    	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
    	_Platform_gatherEffects(false, subBag, effectsDict, null);

    	for (var home in managers)
    	{
    		_Scheduler_rawSend(managers[home], {
    			$: 'fx',
    			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
    		});
    	}
    }


    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
    {
    	switch (bag.$)
    	{
    		case 1:
    			var home = bag.k;
    			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
    			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
    			return;

    		case 2:
    			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
    			{
    				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
    			}
    			return;

    		case 3:
    			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
    				p: bag.n,
    				q: taggers
    			});
    			return;
    	}
    }


    function _Platform_toEffect(isCmd, home, taggers, value)
    {
    	function applyTaggers(x)
    	{
    		for (var temp = taggers; temp; temp = temp.q)
    		{
    			x = temp.p(x);
    		}
    		return x;
    	}

    	var map = isCmd
    		? _Platform_effectManagers[home].e
    		: _Platform_effectManagers[home].f;

    	return A2(map, applyTaggers, value)
    }


    function _Platform_insert(isCmd, newEffect, effects)
    {
    	effects = effects || { i: _List_Nil, j: _List_Nil };

    	isCmd
    		? (effects.i = _List_Cons(newEffect, effects.i))
    		: (effects.j = _List_Cons(newEffect, effects.j));

    	return effects;
    }


    var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


    var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
    {
    	return function(value)
    	{
    		return tagger(finalTagger(value));
    	};
    });


    function _Platform_export(exports)
    {
    	scope['Elm']
    		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
    		: scope['Elm'] = exports;
    }


    function _Platform_mergeExportsDebug(moduleName, obj, exports)
    {
    	for (var name in exports)
    	{
    		(name in obj)
    			? (name == 'init')
    				? _Debug_crash(6, moduleName)
    				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
    			: (obj[name] = exports[name]);
    	}
    }

    var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


    function _VirtualDom_appendChild(parent, child)
    {
    	parent.appendChild(child);
    }

    var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
    {
    	// NOTE: this function needs _Platform_export available to work

    	/**_UNUSED/
    	var node = args['node'];
    	//*/
    	/**/
    	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
    	//*/

    	node.parentNode.replaceChild(
    		_VirtualDom_render(virtualNode, function() {}),
    		node
    	);

    	return {};
    });



    // TEXT


    function _VirtualDom_text(string)
    {
    	return {
    		$: 0,
    		a: string
    	};
    }



    // NODE


    var _VirtualDom_nodeNS = F2(function(namespace, tag)
    {
    	return F2(function(factList, kidList)
    	{
    		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
    		{
    			var kid = kidList.a;
    			descendantsCount += (kid.b || 0);
    			kids.push(kid);
    		}
    		descendantsCount += kids.length;

    		return {
    			$: 1,
    			c: tag,
    			d: _VirtualDom_organizeFacts(factList),
    			e: kids,
    			f: namespace,
    			b: descendantsCount
    		};
    	});
    });


    var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



    // KEYED NODE


    var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
    {
    	return F2(function(factList, kidList)
    	{
    		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
    		{
    			var kid = kidList.a;
    			descendantsCount += (kid.b.b || 0);
    			kids.push(kid);
    		}
    		descendantsCount += kids.length;

    		return {
    			$: 2,
    			c: tag,
    			d: _VirtualDom_organizeFacts(factList),
    			e: kids,
    			f: namespace,
    			b: descendantsCount
    		};
    	});
    });


    var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



    // MAP


    var _VirtualDom_map = F2(function(tagger, node)
    {
    	return {
    		$: 4,
    		j: tagger,
    		k: node,
    		b: 1 + (node.b || 0)
    	};
    });



    // LAZY


    function _VirtualDom_thunk(refs, thunk)
    {
    	return {
    		$: 5,
    		l: refs,
    		m: thunk,
    		k: undefined
    	};
    }

    var _VirtualDom_lazy = F2(function(func, a)
    {
    	return _VirtualDom_thunk([func, a], function() {
    		return func(a);
    	});
    });

    var _VirtualDom_lazy2 = F3(function(func, a, b)
    {
    	return _VirtualDom_thunk([func, a, b], function() {
    		return A2(func, a, b);
    	});
    });

    var _VirtualDom_lazy3 = F4(function(func, a, b, c)
    {
    	return _VirtualDom_thunk([func, a, b, c], function() {
    		return A3(func, a, b, c);
    	});
    });

    var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
    {
    	return _VirtualDom_thunk([func, a, b, c, d], function() {
    		return A4(func, a, b, c, d);
    	});
    });

    var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
    {
    	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
    		return A5(func, a, b, c, d, e);
    	});
    });

    var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
    {
    	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
    		return A6(func, a, b, c, d, e, f);
    	});
    });

    var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
    {
    	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
    		return A7(func, a, b, c, d, e, f, g);
    	});
    });

    var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
    {
    	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
    		return A8(func, a, b, c, d, e, f, g, h);
    	});
    });



    // FACTS


    var _VirtualDom_on = F2(function(key, handler)
    {
    	return {
    		$: 'a0',
    		n: key,
    		o: handler
    	};
    });
    var _VirtualDom_style = F2(function(key, value)
    {
    	return {
    		$: 'a1',
    		n: key,
    		o: value
    	};
    });
    var _VirtualDom_property = F2(function(key, value)
    {
    	return {
    		$: 'a2',
    		n: key,
    		o: value
    	};
    });
    var _VirtualDom_attribute = F2(function(key, value)
    {
    	return {
    		$: 'a3',
    		n: key,
    		o: value
    	};
    });
    var _VirtualDom_attributeNS = F3(function(namespace, key, value)
    {
    	return {
    		$: 'a4',
    		n: key,
    		o: { f: namespace, o: value }
    	};
    });



    // MAP FACTS


    var _VirtualDom_mapAttribute = F2(function(func, attr)
    {
    	return (attr.$ === 'a0')
    		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
    		: attr;
    });

    function _VirtualDom_mapHandler(func, handler)
    {
    	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

    	// 0 = Normal
    	// 1 = MayStopPropagation
    	// 2 = MayPreventDefault
    	// 3 = Custom

    	return {
    		$: handler.$,
    		a:
    			!tag
    				? A2($elm$json$Json$Decode$map, func, handler.a)
    				:
    			A3($elm$json$Json$Decode$map2,
    				tag < 3
    					? _VirtualDom_mapEventTuple
    					: _VirtualDom_mapEventRecord,
    				$elm$json$Json$Decode$succeed(func),
    				handler.a
    			)
    	};
    }

    var _VirtualDom_mapEventTuple = F2(function(func, tuple)
    {
    	return _Utils_Tuple2(func(tuple.a), tuple.b);
    });

    var _VirtualDom_mapEventRecord = F2(function(func, record)
    {
    	return {
    		message: func(record.message),
    		stopPropagation: record.stopPropagation,
    		preventDefault: record.preventDefault
    	}
    });



    // ORGANIZE FACTS


    function _VirtualDom_organizeFacts(factList)
    {
    	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
    	{
    		var entry = factList.a;

    		var tag = entry.$;
    		var key = entry.n;
    		var value = entry.o;

    		if (tag === 'a2')
    		{
    			(key === 'className')
    				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
    				: facts[key] = _Json_unwrap(value);

    			continue;
    		}

    		var subFacts = facts[tag] || (facts[tag] = {});
    		(tag === 'a3' && key === 'class')
    			? _VirtualDom_addClass(subFacts, key, value)
    			: subFacts[key] = value;
    	}

    	return facts;
    }

    function _VirtualDom_addClass(object, key, newClass)
    {
    	var classes = object[key];
    	object[key] = classes ? classes + ' ' + newClass : newClass;
    }



    // RENDER


    function _VirtualDom_render(vNode, eventNode)
    {
    	var tag = vNode.$;

    	if (tag === 5)
    	{
    		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
    	}

    	if (tag === 0)
    	{
    		return _VirtualDom_doc.createTextNode(vNode.a);
    	}

    	if (tag === 4)
    	{
    		var subNode = vNode.k;
    		var tagger = vNode.j;

    		while (subNode.$ === 4)
    		{
    			typeof tagger !== 'object'
    				? tagger = [tagger, subNode.j]
    				: tagger.push(subNode.j);

    			subNode = subNode.k;
    		}

    		var subEventRoot = { j: tagger, p: eventNode };
    		var domNode = _VirtualDom_render(subNode, subEventRoot);
    		domNode.elm_event_node_ref = subEventRoot;
    		return domNode;
    	}

    	if (tag === 3)
    	{
    		var domNode = vNode.h(vNode.g);
    		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
    		return domNode;
    	}

    	// at this point `tag` must be 1 or 2

    	var domNode = vNode.f
    		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
    		: _VirtualDom_doc.createElement(vNode.c);

    	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

    	for (var kids = vNode.e, i = 0; i < kids.length; i++)
    	{
    		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
    	}

    	return domNode;
    }



    // APPLY FACTS


    function _VirtualDom_applyFacts(domNode, eventNode, facts)
    {
    	for (var key in facts)
    	{
    		var value = facts[key];

    		key === 'a1'
    			? _VirtualDom_applyStyles(domNode, value)
    			:
    		key === 'a0'
    			? _VirtualDom_applyEvents(domNode, eventNode, value)
    			:
    		key === 'a3'
    			? _VirtualDom_applyAttrs(domNode, value)
    			:
    		key === 'a4'
    			? _VirtualDom_applyAttrsNS(domNode, value)
    			:
    		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
    	}
    }



    // APPLY STYLES


    function _VirtualDom_applyStyles(domNode, styles)
    {
    	var domNodeStyle = domNode.style;

    	for (var key in styles)
    	{
    		domNodeStyle[key] = styles[key];
    	}
    }



    // APPLY ATTRS


    function _VirtualDom_applyAttrs(domNode, attrs)
    {
    	for (var key in attrs)
    	{
    		var value = attrs[key];
    		typeof value !== 'undefined'
    			? domNode.setAttribute(key, value)
    			: domNode.removeAttribute(key);
    	}
    }



    // APPLY NAMESPACED ATTRS


    function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
    {
    	for (var key in nsAttrs)
    	{
    		var pair = nsAttrs[key];
    		var namespace = pair.f;
    		var value = pair.o;

    		typeof value !== 'undefined'
    			? domNode.setAttributeNS(namespace, key, value)
    			: domNode.removeAttributeNS(namespace, key);
    	}
    }



    // APPLY EVENTS


    function _VirtualDom_applyEvents(domNode, eventNode, events)
    {
    	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

    	for (var key in events)
    	{
    		var newHandler = events[key];
    		var oldCallback = allCallbacks[key];

    		if (!newHandler)
    		{
    			domNode.removeEventListener(key, oldCallback);
    			allCallbacks[key] = undefined;
    			continue;
    		}

    		if (oldCallback)
    		{
    			var oldHandler = oldCallback.q;
    			if (oldHandler.$ === newHandler.$)
    			{
    				oldCallback.q = newHandler;
    				continue;
    			}
    			domNode.removeEventListener(key, oldCallback);
    		}

    		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
    		domNode.addEventListener(key, oldCallback,
    			_VirtualDom_passiveSupported
    			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
    		);
    		allCallbacks[key] = oldCallback;
    	}
    }



    // PASSIVE EVENTS


    var _VirtualDom_passiveSupported;

    try
    {
    	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
    		get: function() { _VirtualDom_passiveSupported = true; }
    	}));
    }
    catch(e) {}



    // EVENT HANDLERS


    function _VirtualDom_makeCallback(eventNode, initialHandler)
    {
    	function callback(event)
    	{
    		var handler = callback.q;
    		var result = _Json_runHelp(handler.a, event);

    		if (!$elm$core$Result$isOk(result))
    		{
    			return;
    		}

    		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

    		// 0 = Normal
    		// 1 = MayStopPropagation
    		// 2 = MayPreventDefault
    		// 3 = Custom

    		var value = result.a;
    		var message = !tag ? value : tag < 3 ? value.a : value.message;
    		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
    		var currentEventNode = (
    			stopPropagation && event.stopPropagation(),
    			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
    			eventNode
    		);
    		var tagger;
    		var i;
    		while (tagger = currentEventNode.j)
    		{
    			if (typeof tagger == 'function')
    			{
    				message = tagger(message);
    			}
    			else
    			{
    				for (var i = tagger.length; i--; )
    				{
    					message = tagger[i](message);
    				}
    			}
    			currentEventNode = currentEventNode.p;
    		}
    		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
    	}

    	callback.q = initialHandler;

    	return callback;
    }
    var $elm$core$Basics$EQ = {$: 'EQ'};
    var $elm$core$Basics$GT = {$: 'GT'};
    var $elm$core$Basics$LT = {$: 'LT'};
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Dict$foldr = F3(
    	function (func, acc, t) {
    		foldr:
    		while (true) {
    			if (t.$ === 'RBEmpty_elm_builtin') {
    				return acc;
    			} else {
    				var key = t.b;
    				var value = t.c;
    				var left = t.d;
    				var right = t.e;
    				var $temp$func = func,
    					$temp$acc = A3(
    					func,
    					key,
    					value,
    					A3($elm$core$Dict$foldr, func, acc, right)),
    					$temp$t = left;
    				func = $temp$func;
    				acc = $temp$acc;
    				t = $temp$t;
    				continue foldr;
    			}
    		}
    	});
    var $elm$core$Dict$toList = function (dict) {
    	return A3(
    		$elm$core$Dict$foldr,
    		F3(
    			function (key, value, list) {
    				return A2(
    					$elm$core$List$cons,
    					_Utils_Tuple2(key, value),
    					list);
    			}),
    		_List_Nil,
    		dict);
    };
    var $elm$core$Dict$keys = function (dict) {
    	return A3(
    		$elm$core$Dict$foldr,
    		F3(
    			function (key, value, keyList) {
    				return A2($elm$core$List$cons, key, keyList);
    			}),
    		_List_Nil,
    		dict);
    };
    var $elm$core$Set$toList = function (_v0) {
    	var dict = _v0.a;
    	return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr = F3(
    	function (func, baseCase, _v0) {
    		var tree = _v0.c;
    		var tail = _v0.d;
    		var helper = F2(
    			function (node, acc) {
    				if (node.$ === 'SubTree') {
    					var subTree = node.a;
    					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
    				} else {
    					var values = node.a;
    					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
    				}
    			});
    		return A3(
    			$elm$core$Elm$JsArray$foldr,
    			helper,
    			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
    			tree);
    	});
    var $elm$core$Array$toList = function (array) {
    	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Result$Err = function (a) {
    	return {$: 'Err', a: a};
    };
    var $elm$json$Json$Decode$Failure = F2(
    	function (a, b) {
    		return {$: 'Failure', a: a, b: b};
    	});
    var $elm$json$Json$Decode$Field = F2(
    	function (a, b) {
    		return {$: 'Field', a: a, b: b};
    	});
    var $elm$json$Json$Decode$Index = F2(
    	function (a, b) {
    		return {$: 'Index', a: a, b: b};
    	});
    var $elm$core$Result$Ok = function (a) {
    	return {$: 'Ok', a: a};
    };
    var $elm$json$Json$Decode$OneOf = function (a) {
    	return {$: 'OneOf', a: a};
    };
    var $elm$core$Maybe$Just = function (a) {
    	return {$: 'Just', a: a};
    };
    var $elm$core$Maybe$Nothing = {$: 'Nothing'};
    var $elm$core$String$all = _String_all;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join = F2(
    	function (sep, chunks) {
    		return A2(
    			_String_join,
    			sep,
    			_List_toArray(chunks));
    	});
    var $elm$core$String$split = F2(
    	function (sep, string) {
    		return _List_fromArray(
    			A2(_String_split, sep, string));
    	});
    var $elm$json$Json$Decode$indent = function (str) {
    	return A2(
    		$elm$core$String$join,
    		'\n    ',
    		A2($elm$core$String$split, '\n', str));
    };
    var $elm$core$List$foldl = F3(
    	function (func, acc, list) {
    		foldl:
    		while (true) {
    			if (!list.b) {
    				return acc;
    			} else {
    				var x = list.a;
    				var xs = list.b;
    				var $temp$func = func,
    					$temp$acc = A2(func, x, acc),
    					$temp$list = xs;
    				func = $temp$func;
    				acc = $temp$acc;
    				list = $temp$list;
    				continue foldl;
    			}
    		}
    	});
    var $elm$core$List$length = function (xs) {
    	return A3(
    		$elm$core$List$foldl,
    		F2(
    			function (_v0, i) {
    				return i + 1;
    			}),
    		0,
    		xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$List$rangeHelp = F3(
    	function (lo, hi, list) {
    		rangeHelp:
    		while (true) {
    			if (_Utils_cmp(lo, hi) < 1) {
    				var $temp$lo = lo,
    					$temp$hi = hi - 1,
    					$temp$list = A2($elm$core$List$cons, hi, list);
    				lo = $temp$lo;
    				hi = $temp$hi;
    				list = $temp$list;
    				continue rangeHelp;
    			} else {
    				return list;
    			}
    		}
    	});
    var $elm$core$List$range = F2(
    	function (lo, hi) {
    		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
    	});
    var $elm$core$List$indexedMap = F2(
    	function (f, xs) {
    		return A3(
    			$elm$core$List$map2,
    			f,
    			A2(
    				$elm$core$List$range,
    				0,
    				$elm$core$List$length(xs) - 1),
    			xs);
    	});
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function (_char) {
    	var code = $elm$core$Char$toCode(_char);
    	return (97 <= code) && (code <= 122);
    };
    var $elm$core$Char$isUpper = function (_char) {
    	var code = $elm$core$Char$toCode(_char);
    	return (code <= 90) && (65 <= code);
    };
    var $elm$core$Char$isAlpha = function (_char) {
    	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function (_char) {
    	var code = $elm$core$Char$toCode(_char);
    	return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = function (_char) {
    	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$List$reverse = function (list) {
    	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf = F2(
    	function (i, error) {
    		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
    			$elm$json$Json$Decode$errorToString(error))));
    	});
    var $elm$json$Json$Decode$errorToString = function (error) {
    	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp = F2(
    	function (error, context) {
    		errorToStringHelp:
    		while (true) {
    			switch (error.$) {
    				case 'Field':
    					var f = error.a;
    					var err = error.b;
    					var isSimple = function () {
    						var _v1 = $elm$core$String$uncons(f);
    						if (_v1.$ === 'Nothing') {
    							return false;
    						} else {
    							var _v2 = _v1.a;
    							var _char = _v2.a;
    							var rest = _v2.b;
    							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
    						}
    					}();
    					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
    					var $temp$error = err,
    						$temp$context = A2($elm$core$List$cons, fieldName, context);
    					error = $temp$error;
    					context = $temp$context;
    					continue errorToStringHelp;
    				case 'Index':
    					var i = error.a;
    					var err = error.b;
    					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
    					var $temp$error = err,
    						$temp$context = A2($elm$core$List$cons, indexName, context);
    					error = $temp$error;
    					context = $temp$context;
    					continue errorToStringHelp;
    				case 'OneOf':
    					var errors = error.a;
    					if (!errors.b) {
    						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
    							if (!context.b) {
    								return '!';
    							} else {
    								return ' at json' + A2(
    									$elm$core$String$join,
    									'',
    									$elm$core$List$reverse(context));
    							}
    						}();
    					} else {
    						if (!errors.b.b) {
    							var err = errors.a;
    							var $temp$error = err,
    								$temp$context = context;
    							error = $temp$error;
    							context = $temp$context;
    							continue errorToStringHelp;
    						} else {
    							var starter = function () {
    								if (!context.b) {
    									return 'Json.Decode.oneOf';
    								} else {
    									return 'The Json.Decode.oneOf at json' + A2(
    										$elm$core$String$join,
    										'',
    										$elm$core$List$reverse(context));
    								}
    							}();
    							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
    								$elm$core$List$length(errors)) + ' ways:'));
    							return A2(
    								$elm$core$String$join,
    								'\n\n',
    								A2(
    									$elm$core$List$cons,
    									introduction,
    									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
    						}
    					}
    				default:
    					var msg = error.a;
    					var json = error.b;
    					var introduction = function () {
    						if (!context.b) {
    							return 'Problem with the given value:\n\n';
    						} else {
    							return 'Problem with the value at json' + (A2(
    								$elm$core$String$join,
    								'',
    								$elm$core$List$reverse(context)) + ':\n\n    ');
    						}
    					}();
    					return introduction + ($elm$json$Json$Decode$indent(
    						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
    			}
    		}
    	});
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin = F4(
    	function (a, b, c, d) {
    		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
    	});
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$logBase = F2(
    	function (base, number) {
    		return _Basics_log(number) / _Basics_log(base);
    	});
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
    	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function (a) {
    	return {$: 'Leaf', a: a};
    };
    var $elm$core$Basics$apL = F2(
    	function (f, x) {
    		return f(x);
    	});
    var $elm$core$Basics$apR = F2(
    	function (x, f) {
    		return f(x);
    	});
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$max = F2(
    	function (x, y) {
    		return (_Utils_cmp(x, y) > 0) ? x : y;
    	});
    var $elm$core$Array$SubTree = function (a) {
    	return {$: 'SubTree', a: a};
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes = F2(
    	function (nodes, acc) {
    		compressNodes:
    		while (true) {
    			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
    			var node = _v0.a;
    			var remainingNodes = _v0.b;
    			var newAcc = A2(
    				$elm$core$List$cons,
    				$elm$core$Array$SubTree(node),
    				acc);
    			if (!remainingNodes.b) {
    				return $elm$core$List$reverse(newAcc);
    			} else {
    				var $temp$nodes = remainingNodes,
    					$temp$acc = newAcc;
    				nodes = $temp$nodes;
    				acc = $temp$acc;
    				continue compressNodes;
    			}
    		}
    	});
    var $elm$core$Array$treeFromBuilder = F2(
    	function (nodeList, nodeListSize) {
    		treeFromBuilder:
    		while (true) {
    			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
    			if (newNodeSize === 1) {
    				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
    			} else {
    				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
    					$temp$nodeListSize = newNodeSize;
    				nodeList = $temp$nodeList;
    				nodeListSize = $temp$nodeListSize;
    				continue treeFromBuilder;
    			}
    		}
    	});
    var $elm$core$Array$builderToArray = F2(
    	function (reverseNodeList, builder) {
    		if (!builder.nodeListSize) {
    			return A4(
    				$elm$core$Array$Array_elm_builtin,
    				$elm$core$Elm$JsArray$length(builder.tail),
    				$elm$core$Array$shiftStep,
    				$elm$core$Elm$JsArray$empty,
    				builder.tail);
    		} else {
    			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
    			var depth = $elm$core$Basics$floor(
    				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
    			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
    			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
    			return A4(
    				$elm$core$Array$Array_elm_builtin,
    				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
    				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
    				tree,
    				builder.tail);
    		}
    	});
    var $elm$core$Array$initializeHelp = F5(
    	function (fn, fromIndex, len, nodeList, tail) {
    		initializeHelp:
    		while (true) {
    			if (fromIndex < 0) {
    				return A2(
    					$elm$core$Array$builderToArray,
    					false,
    					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
    			} else {
    				var leaf = $elm$core$Array$Leaf(
    					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
    				var $temp$fn = fn,
    					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
    					$temp$len = len,
    					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
    					$temp$tail = tail;
    				fn = $temp$fn;
    				fromIndex = $temp$fromIndex;
    				len = $temp$len;
    				nodeList = $temp$nodeList;
    				tail = $temp$tail;
    				continue initializeHelp;
    			}
    		}
    	});
    var $elm$core$Array$initialize = F2(
    	function (len, fn) {
    		if (len <= 0) {
    			return $elm$core$Array$empty;
    		} else {
    			var tailLen = len % $elm$core$Array$branchFactor;
    			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
    			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
    			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
    		}
    	});
    var $elm$core$Result$isOk = function (result) {
    	if (result.$ === 'Ok') {
    		return true;
    	} else {
    		return false;
    	}
    };
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
    	switch (handler.$) {
    		case 'Normal':
    			return 0;
    		case 'MayStopPropagation':
    			return 1;
    		case 'MayPreventDefault':
    			return 2;
    		default:
    			return 3;
    	}
    };
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $author$project$Main$main = $elm$html$Html$text('Hello world!');
    _Platform_export({'Main':{'init':_VirtualDom_init($author$project$Main$main)(0)(0)}});}(this)); }).call(output); var Elm = output.Elm;

    // Wait until the window has loaded
    window.addEventListener("load", function() {
        // The HTML element where to put our Elm application's view
        const node = document.getElementById("elm");

        // If the div with id "elm" does not exist in the current DOM
        if (!node) {
            throw new ReferenceError("unable to find an element with an id of elm in the current DOM")
        }

        // Initialize our Elm application
        Elm.Main.init({ node });
    });

}());
