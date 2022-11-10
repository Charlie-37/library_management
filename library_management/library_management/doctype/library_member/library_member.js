// Copyright (c) 2022, Sunil BHave and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Member', {

	// To Add a custom button from membership and transaction in a library member form
	refresh: function(frm) {
		frm.add_custom_button('Create Membership',()=>{
			frappe.new_doc('Library Membership',{
				library_member : frm.doc.name
			})
		})

		frm.add_custom_button('Create Transaction',()=>{
			frappe.new_doc('Library Transaction',{
				library_member : frm.doc.name
			})
		})

	}
});
