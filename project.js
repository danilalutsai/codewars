
// Paste this in your browser console to see your color palette
(function() {
  const palette = document.createElement('div');
  palette.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;overflow:auto;z-index:99999;background:#1a1a1a;padding:20px;font-family:monospace';
  palette.innerHTML = '<h2 style="color:#fff;margin:0 0 12px">🎨 Color Palette</h2>';

  const colors = [];

  // 1. CSS custom properties (variables)
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText === ':root') {
          for (const prop of rule.style) {
            if (prop.startsWith('--') && rule.style.getPropertyValue(prop).match(/^(#|rgb|hsl|lab|oklch)/i)) {
              colors.push({ name: prop, value: rule.style.getPropertyValue(prop).trim() });
            }
          }
        }
      }
    } catch(e) {}
  }

  // 2. computed style on body (any --color-* or color-like vars)
  const computed = getComputedStyle(document.documentElement);
  for (let i = 0; i < computed.length; i++) {
    const prop = computed[i];
    if (prop.startsWith('--') && computed.getPropertyValue(prop).match(/^(#|rgb|hsl|lab|oklch)/i)) {
      if (!colors.find(c => c.name === prop)) {
        colors.push({ name: prop, value: computed.getPropertyValue(prop).trim() });
      }
    }
  }

  // 3. tailwind / utility classes on elements
  const used = new Set();
  document.querySelectorAll('*').forEach(el => {
    for (const cls of el.classList) {
      const m = cls.match(/^(bg|text|border|ring|outline|from|via|to|accent|caret|decoration|shadow)-(color-)?(.+)/);
      if (m) used.add(cls);
    }
  });

  let html = '';
  if (colors.length) {
    html += '<h3 style="color:#888;margin:0 0 8px">CSS Custom Properties (' + colors.length + ')</h3>';
    html += '<table style="border-collapse:collapse;width:100%;margin-bottom:16px">';
    colors.forEach(({name, value}) => {
      html += `<tr><td style="padding:4px 8px;border:1px solid #333;color:#fff;font-size:13px">${name}</td>`;
      html += `<td style="padding:4px 8px;border:1px solid #333;color:#aaa;font-size:13px">${value}</td>`;
      html += `<td style="padding:0;border:1px solid #333;width:60px"><div style="width:40px;height:24px;background:${value};border-radius:4px"></div></td></tr>`;
    });
    html += '</table>';
  } else {
    html += '<p style="color:#888">No CSS custom property colors found on :root</p>';
  }

  if (used.size) {
    html += '<h3 style="color:#888;margin:0 0 8px">Utility Classes Found</h3><div style="color:#aaa;font-size:13px">' + [...used].sort().join(', ') + '</div>';
  }

  palette.innerHTML += html;
  document.body.appendChild(palette);
  palette.onclick = () => palette.remove();
})();
