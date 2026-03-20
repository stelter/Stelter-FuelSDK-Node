var util = require('util');
var helpers = require('../helpers');
        
    
var ImportResultsSummary = function (parent, options) {
    
    this.parent = parent;
    this.objName = 'ImportResultsSummary';
    
    this.config = options;
    options = options || {};
    this.options = options.options || {};
    this.props = options.props || {}; //props corresponds to the Objects attribute in the SOAP envelope.
    this.def = options.def || {};

};

ImportResultsSummary.prototype.post = function(cb) {
    this.parent.SoapClient.create(
        this.objName,
        this.props,
        this.options,
        cb
    );
};

ImportResultsSummary.prototype.get = function(cb) {
    var filter = {filter: this.config.filter} || null;

    if (!this.props || helpers.isEmpty(this.props)) {
        cb({error: 'A property list is required for DE retrieval.', documentation: 'https://developer.salesforce.com/docs/atlas.en-us.mc-sdks.meta/mc-sdks/data-extension-retrieve.htm'});
    } else {
        this.parent.SoapClient.retrieve(
            this.objName,
            this.props,
            filter,
            cb
        );
    }		
};

ImportResultsSummary.prototype.delete = function(cb) {
    this.parent.SoapClient.delete(
        this.objName,
        this.props,
        this.options,
        cb
    );
};

ImportResultsSummary.prototype.perform = function(cb) {
    this.parent.SoapClient.perform(
        this.objName,
        this.def,
        cb
    );
};

module.exports = ImportResultsSummary;