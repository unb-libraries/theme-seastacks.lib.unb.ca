/*
  Sea Stacks subtheme jQuery enhancements
  Relies on Drupal jQuery 1.4.4 library
  jeremy.mcdermott@unb.com | January 2015
*/

// toggle fade back to top button when page is scrolled down past main heading
jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop()>325) {
    jQuery('#toTop').fadeIn();
  } else {
    jQuery('#toTop').fadeOut();
  }
});

jQuery(document).ready(function() {
  // scroll up fast when back to top button clicked
  jQuery(".backtotop").click(function(){
    jQuery("html, body").animate({scrollTop:0}, "fast");
    return false; 
  });
  
  // alter openframework theme responsive menu button: set text & make visible
  jQuery("span.hide").replaceWith("<span>Menu</span>");
  
  // fix Biblio 7.x-1.0-rc7 display order: move biblio-node tabular data BELOW book cover
  jQuery(".node-biblio .field-name-field-author").after(jQuery("#biblio-node"));
  jQuery(".node-biblio .field-name-field-book-cover").after(jQuery("#biblio-node"));

  // fix Biblio 7.x-1.0-rc7 keyword sort | letter filter button links (missing 's' parameter)
  jQuery(".biblio-alpha-line a").each(function() {
    jQuery(this).attr("href", function(index, badurl) {
      return badurl.replace("?f[keyword]", "?s=keyword&f[keyword]");
    });
  });
});                         
                            
            