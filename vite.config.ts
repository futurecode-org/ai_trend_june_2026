import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  server: {
    fs: {
      allow: [
        // 1. Search up to the workspace root (recommended for monorepos)
        searchForWorkspaceRoot(process.cwd()),
        
        // 2. Custom relative path (e.g., one level up)
        '..',
        
        // 3. Specific absolute path (e.g., global node_modules or shared asset folder)
        '/videos'
      ]
    },
    allowedHosts: [
      'localhost',
      'pre.anka1.top',       // 允许精确匹配特定域名
      '.anka1.top',          // 以点开头的字符串允许该主机名下的所有子域名
      '.anka2.top'
    ]
  }
})
