var util = require('util');
var helpers = require('../helpers');
	
/*
https://developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/email-create.html
*/	
	
var AccountUser = function (parent, options) {
	
	this.parent = parent;
	this.objName = 'AccountUser';
	
	this.config = options;
	options = options || {};
	this.options = options.options || {};
	this.props = options.props || {};   //props corresponds to the Objects attribute in the SOAP envelope.

};

AccountUser.prototype.post = function(cb) {
	this.parent.SoapClient.create(
		this.objName,
		this.props,
		this.options,
		cb
	);
};

AccountUser.prototype.get = function(cb) {
	var filter = {filter: this.config.filter} || null;

	if (!this.props || helpers.isEmpty(this.props)) {
		cb({error: 'A property list is required for Email retrieval.', documentation: 'https://developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/email-create.html'});
	} else {
		this.parent.SoapClient.retrieve(
			this.objName,
			this.props,
			filter,
			cb
		);
	}		
};

AccountUser.prototype.patch = function(cb) {
	this.parent.SoapClient.update(
		this.objName,
		this.props,
		this.options,
		cb
	);
};

AccountUser.prototype.delete = function(cb) {
	this.parent.SoapClient.delete(
		this.objName,
		this.props,
		this.options,
		cb
	);
};

AccountUser.prototype.configure = function(cb) {
	this.parent.SoapClient.configure(
		this.objName,
		this.props,
		this.options,
		cb
	);
};



module.exports = AccountUser;