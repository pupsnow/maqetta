dojo.provide("davinci.ui.about");
dojo.require("davinci.version");
dojo.require("davinci.repositoryinfo");
dojo.require("dijit.Dialog");
dojo.require("dijit.form.Button");

dojo.require("dojo.i18n");  
dojo.requireLocalization("davinci.ui", "ui");

dojo.require("dojo.date.locale");
dojo.require("dojo.date.stamp");

// Shows "About daVinci" dialog
davinci.ui.about=function(){
	var langObj = dojo.i18n.getLocalization("davinci.ui", "ui");
	var	dialog = new dijit.Dialog({
		id: "aboutMaqetta",
		title:langObj.aboutMaqetta,
		onCancel:function(){
			this.destroyRecursive(false);
		}
	});
	var formHTML="<div class='about_container'>"
		+ "<div class='about_version'>"+dojo.string.substitute(langObj.productVersion,[davinci.version])+"</div>";
	var ri = davinci.repositoryinfo,
		revision = ri.revision;
	var bd = ri.buildtime;
	var date = dojo.date.stamp.fromISOString(bd);
	if(date){
		bd = dojo.date.locale.format(date, {formatLength: 'medium'});
	}
    if(bd){
        formHTML += "<div class='about_date'>Date: "+bd+"</div>";
    }
	if(revision){
		formHTML += "<div class='about_build'>"+dojo.string.substitute(langObj.build, [revision, revision.substr(0,15)])+"...</a></div>";
	}
	formHTML += "</div>";
	dialog.setContent(formHTML);
	dialog.show();
}
