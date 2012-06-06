define("dojox/form/RadioStack", [
	"./CheckedMultiSelect",
	"./_SelectStackMixin",
	"dojo/_base/declare"
], function(CheckedMultiSelect, _SelectStackMixin, declare){

	// module:
	//		dojox/form/RadioStack
	// summary:
	//		A radio-based select stack.

	return declare("dojox.form.RadioStack", [ CheckedMultiSelect, _SelectStackMixin ]);
});