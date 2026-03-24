const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src/app');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/canonical:\s*"(https:\/\/watcon\.co\.in[^"]*)"/g, (match, url) => {
    // Only append if it doesn't already end with a slash and is not exactly the root.
    if (url === 'https://watcon.co.in') return `canonical: "https://watcon.co.in/"`;
    if (!url.endsWith('/')) {
      return `canonical: "${url}/"`;
    }
    return match;
  });
  
  newContent = newContent.replace(/canonical:\s*`(https:\/\/watcon\.co\.in[^`]*)`/g, (match, url) => {
    if (!url.endsWith('/')) {
      return `canonical: \`${url}/\``;
    }
    return match;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
