function parseURL(url) {
    const u = new URL(url);
    const params = {};
    for (const [key, value] of u.searchParams) {
      params[key] = value;
    }
  
    return {
      source: url,
      protocol: u.protocol.replace(':', ''),
      host: u.hostname,
      port: u.port,
      path: u.pathname,
      file: u.pathname.split('/').pop(),
      query: u.search,
      params: params,
      hash: u.hash.replace('#', ''),
      relative: u.pathname + u.search + u.hash,
      segments: u.pathname.split('/').filter(s => s)
    };
  }
  
  // Test
  console.log(parseURL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));
  