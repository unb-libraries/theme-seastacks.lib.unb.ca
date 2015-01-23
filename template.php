<?php
/**
 * @file
 * template.php
 *
 * This file should only contain light helper functions and stubs pointing to
 * other files containing more complex functions.
 *
 */
 
/** configure biblio module's book-list page search form fieldset collapse behaviour
 * 0 == expanded; 1 == collapsed
 */ 
function seastacks_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'biblio_search_form') {
    $form['search_form']['#collapsed'] = 0;
  }
  if ($form_id == 'search_block_form') {
    // Override HTML5 placeholder attribute (display text within input)
    $form['search_block_form']['#attributes']['placeholder'] = t('Search Sea Stacks...');
  } 
  if ($form_id == 'views_exposed_form' && $form['#action'] == '/advanced-search') {
    // remove Regular expression from exposed operators for Advanced Search | Year of publication 
    unset($form['biblio_year_op']['#options']['regular_expression']);
  }
}

