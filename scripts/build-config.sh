#!/bin/sh
set -eu

if [ -z "${AMAP_KEY:-}" ] || [ -z "${AMAP_SECURITY_CODE:-}" ]; then
  echo "AMAP_KEY and AMAP_SECURITY_CODE must be set in Netlify environment variables."
  exit 1
fi

cat > amap.config.js <<EOF
window.AMAP_CONFIG = {
  key: '${AMAP_KEY}',
  securityJsCode: '${AMAP_SECURITY_CODE}'
};
window._AMapSecurityConfig = { securityJsCode: window.AMAP_CONFIG.securityJsCode };
EOF

echo "Generated amap.config.js"
