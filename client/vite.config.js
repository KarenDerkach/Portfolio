import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            // Optimize React builds
            babel: {
                plugins: [
                    // Only add babel plugins that are actually installed
                ]
            }
        })
    ],
    server: {
        port: 3000,
        open: true,
        hmr: {
            overlay: false
        }
    },
    build: {
        outDir: 'build',
        minify: 'esbuild',
        cssMinify: true,
        cssCodeSplit: true,
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    // More granular chunking to reduce unused code
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'react-vendor';
                        }
                        if (id.includes('@mui/material')) {
                            return 'mui-core';
                        }
                        if (id.includes('@mui/icons-material')) {
                            return 'mui-icons';
                        }
                        if (id.includes('bootstrap')) {
                            return 'bootstrap';
                        }
                        if (id.includes('@emotion')) {
                            return 'emotion';
                        }
                        if (id.includes('react-vertical-timeline')) {
                            return 'timeline';
                        }
                        if (id.includes('react-router')) {
                            return 'router';
                        }
                        if (id.includes('redux')) {
                            return 'state';
                        }
                        return 'vendor';
                    }
                },
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.')
                    const extType = info[info.length - 1]
                    
                    if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
                        return `assets/images/[name]-[hash].${extType}`
                    }
                    if (/\.(css)$/i.test(assetInfo.name)) {
                        return `assets/css/[name]-[hash].${extType}`
                    }
                    if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
                        return `assets/fonts/[name]-[hash].${extType}`
                    }
                    return `assets/[name]-[hash].${extType}`
                }
            },
            treeshake: {
                moduleSideEffects: false,
                propertyReadSideEffects: false,
                preset: 'recommended'
            }
        },
        chunkSizeWarningLimit: 500, // Reduced from 800 to catch large chunks
        assetsInlineLimit: 4096
    },
    publicDir: 'public',
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.[jt]sx?$/,
        exclude: [],
        drop: ['console', 'debugger'], // Elimina console.log en producción
        legalComments: 'none',
        treeShaking: true,
        minifyIdentifiers: true,
        minifySyntax: true,
        minifyWhitespace: true,
        target: 'es2020'
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
            target: 'es2020'
        },
        include: [
            'react', 
            'react-dom', 
            'react/jsx-runtime',
            'framer-motion',
            '@mui/material',
            '@mui/material/styles',
            '@mui/material/Box',
            '@mui/material/Modal',
            '@mui/material/Backdrop',
            '@mui/material/Fade',
            '@emotion/react',
            '@emotion/styled',
            'bootstrap/dist/css/bootstrap.min.css'
        ]
    },
    css: {
        devSourcemap: false,
        preprocessorOptions: {
            css: {
                charset: false
            }
        },
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === 'charset') {
                                atRule.remove();
                            }
                        }
                    }
                }
            ]
        }
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    },
    // Performance optimizations
    resolve: {
        alias: {
            '@': '/src'
        }
    }
})
