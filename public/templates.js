this["JST"] = this["JST"] || {};

this["JST"]["book_tr.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<script type="text/html" id="asdasdasd">\r\n    <td>' +
__e( title ) +
'</td>\r\n    <td>' +
__e( author ) +
'</td>\r\n    <td>' +
__e( genre ) +
'</td>\r\n    <td>' +
__e( year ) +
'</td>\r\n    <td> ';
 if(user.firstname) { ;
__p += ' <a class="btn btn-primary btn-xs js-show-user">' +
__e( user.firstname ) +
' ' +
__e(
            user.lastname ) +
' <a style="cursor:pointer;" class="btn btn-primary btn-xs js-return-book">Return</a> ';
 } ;
__p += '</a>\r\n    </td>\r\n    <td>\r\n        <button class="btn btn-small btn-success js-show">Show</button>\r\n        <button class="btn btn-small btn-warning js-edit">Edit</button>\r\n\r\n        <button class="btn btn-small btn-danger pull-right js-delete">Delete</button>\r\n    </td>\r\n</script>';

}
return __p
};

this["JST"]["books_table_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\r\n<tr>\r\n    <th>Title:</th>\r\n    <th>Author:</th>\r\n    <th>Genre:</th>\r\n    <th>Year:</th>\r\n    <th>Owner:</th>\r\n    <th>Action:</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n</tbody>';

}
return __p
};

this["JST"]["edit_book_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="messages2" style="min-height: 40px;">\r\n\r\n</div>\r\n<form>\r\n    <input class="form-control" name="id" type="hidden" value="' +
__e( id ) +
'">\r\n    <div class="form-group">\r\n        <label for="">Title</label>\r\n        <input class="form-control" name="title" type="text" value="' +
__e( title ) +
'">\r\n    </div>\r\n    <div class="form-group">\r\n        <label for="">Author</label>\r\n        <input class="form-control" name="author" type="text" value="' +
__e( author ) +
'">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="">Genre</label>\r\n        <input class="form-control" name="genre" type="text" value="' +
__e( genre ) +
'">\r\n    </div>\r\n    <div class="form-group">\r\n        <label for="">Year</label>\r\n        <input class="form-control" name="year" type="text" value="' +
__e( year ) +
'">\r\n    </div>\r\n    <input class="btn btn-primary js-save" type="submit" value="Save">\r\n</form>';

}
return __p
};

this["JST"]["show_book_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\r\n    <label for="">Title</label>\r\n    <input class="form-control" readonly="readonly" name="title" type="text" value="' +
__e( title ) +
'">\r\n</div>\r\n<div class="form-group">\r\n    <label for="">Author</label>\r\n    <input class="form-control" readonly="readonly" name="author" type="text" value="' +
__e( author ) +
'">\r\n</div>\r\n\r\n<div class="form-group">\r\n    <label for="">Genre</label>\r\n    <input class="form-control" readonly="readonly" name="genre" type="text" value="' +
__e( genre ) +
'">\r\n</div>\r\n<div class="form-group">\r\n    <label for="">Year</label>\r\n    <input class="form-control" readonly="readonly" name="year" type="text" value="' +
__e( year ) +
'">\r\n</div>\r\n<button class="btn btn-primary js-edit">Edit</button>\r\n';
 if(user_id != 0)  { ;
__p += '<button class="btn btn-primary js-return">Return book</button> ';
 } ;


}
return __p
};

this["JST"]["give_book_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form>\r\n    <div class="form-group">\r\n        <label for="">Info</label>\r\n        <input class="form-control" readonly="readonly" name="info" type="text" value="' +
__e( user.firstname ) +
' ' +
__e( user.lastname ) +
', ' +
__e( user.email ) +
'">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <select class="form-control" name="select" id="select">\r\n            <option value="0"></option>\r\n            ';

            _.each(books, function(book, key){ ;
__p += '\r\n            <option value="' +
__e( book.id ) +
'">' +
__e( book.title ) +
' ' +
__e( book.author ) +
' ' +
__e( book.genre ) +
' ' +
__e( book.year ) +
'</option>\r\n            ';

            ;
            });
            ;
__p += '\r\n        </select>\r\n    </div>\r\n    <input class="btn btn-primary js-submit" type="submit" value="Save">\r\n</form>';

}
return __p
};

this["JST"]["header.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<ul class="nav navbar-nav">\r\n    <li><a style="cursor: pointer;" class="js-view-users">View all users</a></li>\r\n    <li><a style="cursor: pointer;" class="js-create-user">Add new user</a></li>\r\n    <li><a style="cursor: pointer;" class="js-view-books">View all books</a></li>\r\n    <li><a style="cursor: pointer;" class="js-create-book">Add new book</a></li>\r\n</ul>';

}
return __p
};

this["JST"]["loading.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Here can be custom loading template -->\r\n<div style="display:flex;justify-content:center;align-items:center;">Please, wait. We are loading data from\r\n    server.\r\n</div>';

}
return __p
};

this["JST"]["not_exists.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-dismissible alert-warning">' +
__e( item ) +
'</div>';

}
return __p
};

this["JST"]["edit_user_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="messages" style="min-height: 40px;">\r\n\r\n</div>\r\n<form>\r\n    <input class="form-control" name="id" type="hidden" value="' +
__e( id ) +
'">\r\n    <div class="form-group">\r\n        <label for="">First Name</label>\r\n        <input class="form-control" id="firstname" name="firstname" type="text" value="' +
__e( firstname ) +
'">\r\n    </div>\r\n    <div class="form-group">\r\n        <label for="">Last Name</label>\r\n        <input class="form-control" name="lastname" type="text" value="' +
__e( lastname ) +
'">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label for="">Email</label>\r\n        <input class="form-control" name="email" type="text" value="' +
__e( email ) +
'">\r\n    </div>\r\n    <input class="btn btn-primary js-save" type="submit" value="Save">\r\n</form>';

}
return __p
};

this["JST"]["show_user_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\r\n    <label for="">First Name</label>\r\n    <input class="form-control" readonly="readonly" name="firstname" type="text" value="' +
__e( firstname ) +
'">\r\n</div>\r\n<div class="form-group">\r\n    <label for="">Last Name</label>\r\n    <input class="form-control" readonly="readonly" name="lastname" type="text" value="' +
__e( lastname ) +
'">\r\n</div>\r\n\r\n<div class="form-group">\r\n    <label for="">Email</label>\r\n    <input class="form-control" readonly="readonly" name="email" type="text" value="' +
__e( email ) +
'">\r\n</div>\r\n<button class="btn btn-primary js-edit">Edit</button>\r\n\r\n<table class="table table-striped table-hover table-bordered"><br><br>\r\n    <thead>\r\n    <td>Book info:</td>\r\n    </thead>\r\n    <tbody>\r\n    ';
 _.each(books, function(book, key) { ;
__p += '\r\n    <tr><td>' +
__e( book.title ) +
' - ' +
__e( book.author ) +
' - ' +
__e( book.genre ) +
' - ' +
__e( book.year ) +
'</td>\r\n\r\n    </tr>\r\n    ';
 }); ;
__p += '\r\n    </tbody>\r\n</table>';

}
return __p
};

this["JST"]["user_tr.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
__e( firstname ) +
'</td>\r\n<td>' +
__e( lastname ) +
'</td>\r\n<td>' +
__e( email ) +
'</td>\r\n<td>' +
__e( bookscount ) +
'</td>\r\n<td>\r\n    <button class="btn btn-small btn-success js-show">Show</button>\r\n    <button class="btn btn-small btn-warning js-edit">Edit</button>\r\n    <button class="btn btn-small btn-default js-give">Give a free book</button>\r\n    <button class="btn btn-small btn-danger pull-right js-delete">Delete</button>\r\n\r\n</td>';

}
return __p
};

this["JST"]["users_table_template.tpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\r\n<tr>\r\n    <th>FirstName:</th>\r\n    <th>LastName:</th>\r\n    <th>Email:</th>\r\n    <th>Books:</th>\r\n    <th>Action:</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n</tbody>';

}
return __p
};