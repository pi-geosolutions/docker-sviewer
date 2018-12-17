#!/bin/bash

set -euo pipefail

# Apply configuration using env. vars
sed -i "s|DOCKERCONF_DNAME|${DOMAIN_NAME}|" /usr/local/apache2/htdocs/etc/customConfig.js
sed -i "s|DOCKERCONF_INITIALEXTENT|${INITIAL_EXTENT}|" /usr/local/apache2/htdocs/etc/customConfig.js
sed -i "s|DOCKERCONF_MAXEXTENT|${MAX_EXTENT}|" /usr/local/apache2/htdocs/etc/customConfig.js
sed -i "s|DOCKERCONF_RESTRICTEDEXTENT|${RESTRICTED_EXTENT}|" /usr/local/apache2/htdocs/etc/customConfig.js
sed -i "s|DOCKERCONF_MAXFEATURES|${MAX_FEATURES}|" /usr/local/apache2/htdocs/etc/customConfig.js


exec "$@"
