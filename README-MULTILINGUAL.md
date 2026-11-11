# Full Downloader App — multilingual phase 1

This package preserves the six existing English pages and adds six localized pages for each of eight languages: Indonesian (`id`), Brazilian Portuguese (`pt-br`), Spanish (`es`), Arabic (`ar`), French (`fr`), Hindi (`hi`), Bengali (`bn`), and Turkish (`tr`).

The first phase contains 54 canonical URLs in total: 6 English + 48 localized. Each locale folder contains six static HTML pages and local copies of the required CSS, images, and downloader scripts. The `sitemap.xml` contains all 54 page URLs, and every equivalent page has reciprocal `hreflang` links plus `x-default` to English. Arabic pages use RTL direction.

The translations are localized drafts prepared for review before public indexing. Have a fluent reviewer check wording, especially legal/privacy text and region-specific terminology, before deployment.
