#!/bin/sh
set -eu

# Netlify에 securityJsCode라는 이름으로 등록된 경우도 허용한다.
AMAP_SECURITY_CODE="${AMAP_SECURITY_CODE:-${securityJsCode:-}}"

# 값은 로그에 남기지 않고, 어떤 변수가 비어 있는지만 알려준다.
echo "AMAP_KEY: $([ -n "${AMAP_KEY:-}" ] && echo set || echo MISSING) / AMAP_SECURITY_CODE: $([ -n "${AMAP_SECURITY_CODE:-}" ] && echo set || echo MISSING)"

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
