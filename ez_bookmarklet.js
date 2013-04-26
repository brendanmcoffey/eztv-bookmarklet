var shows=[
"Modern Family",
"Sons of Anarchy",
"Office",
"New Girl",
"Dexter",
"How I Met Your Mother",
"Breaking Bad",
"Walking Dead",
"Community",
"Parks and Recreation",
"Homeland"
];

jQuery.expr[':'].containsCI = function(a,i,m){
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};

jQuery('table.forum_header_border tbody tr').hide();

jQuery.each(shows, function(){
	jQuery('td:containsCI(\'' + this + '\')').parents('tr').show();
});