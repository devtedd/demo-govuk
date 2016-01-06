#!/bin/bash

cp node_modules/govuk_template_mustache/views/layouts/govuk_template.html views/layout/layout.html
sed -i 's/{{{ afterHeader }}}/{{> afterHeader }}/g' views/layout/layout.html
sed -i 's/{{{ bodyEnd }}}/{{> bodyEnd }}/g' views/layout/layout.html
sed -i 's/{{{ bodyStart }}}/{{> bodyStart }}/g' views/layout/layout.html
sed -i 's/{{{ cookieMessage }}}/{{> cookieMessage }}/g' views/layout/layout.html
sed -i 's/{{{ footerSupportLinks }}}/{{> footerSupportLinks }}/g' views/layout/layout.html
sed -i 's/{{{ footerTop }}}/{{> footerTop }}/g' views/layout/layout.html
sed -i 's/{{{ head }}}/{{> head }}/g' views/layout/layout.html
sed -i 's/{{{ insideHeader }}}/{{> insideHeader }}/g' views/layout/layout.html
sed -i 's/{{{ licenceMessage }}}/{{> licenceMessage }}/g' views/layout/layout.html
sed -i 's/{{{ propositionHeader }}}/{{> propositionHeader }}/g' views/layout/layout.html
sed -i 's/{{{ topOfPage }}}/{{> topOfPage }}/g' views/layout/layout.html
mainContent='<main id=\"content\" role=\"main\"> \n\t\t {{> beforeContent }} \n\t\t\t {{{ content }}} \n\t\t {{> afterContent }} \n\t\t\t </main>'
sed -i 's,{{{ content }}},'"${mainContent}"',g' views/layout/layout.html
