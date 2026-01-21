// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/vite@5.4.21_@types+node@25.0.7_terser@5.44.1/node_modules/vite/dist/node/index.js";
import Vue from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.21_@types+node@25.0.7_terser@5.44.1__vue@3.5.26_typescript@5.9.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.4.21_@types+node@25.0.7_terser@5.44.1__vue-router@4.6.4_gr73s46vnrrvbm4kalsidhii6e/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.28.6_rollup@4.55.1_vue@3.5.26_typescript@5.9.3_/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.1_vue@3.5.26_typescript@5.9.3___rollup@4.55.1/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/unplugin-vue-markdown@0.26.3_rollup@4.55.1_vite@5.4.21_@types+node@25.0.7_terser@5.44.1_/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueMacros from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/unplugin-vue-macros@2.14.5_@vueuse+core@10.11.1_vue@3.5.26_typescript@5.9.3___esbuild@0.20.2__mrjf5kjptufi5ihj5ud74u4omy/node_modules/unplugin-vue-macros/dist/vite.js";
import VueI18n from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/@intlify+unplugin-vue-i18n@3.0.1_rollup@4.55.1_vue-i18n@9.14.5_vue@3.5.26_typescript@5.9.3__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.4.21_@types+node@25.0.7_terser@5.44.1__workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import VueDevTools from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/vite-plugin-vue-devtools@7.7.9_rollup@4.55.1_vite@5.4.21_@types+node@25.0.7_terser@5.44.1__vue@3.5.26_typescript@5.9.3_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import LinkAttributes from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Shiki from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/@shikijs+markdown-it@1.29.2/node_modules/@shikijs/markdown-it/dist/index.mjs";
import WebfontDownload from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/vite-plugin-webfont-dl@3.11.1_vite@5.4.21_@types+node@25.0.7_terser@5.44.1_/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.55.1_vue-router@4.6.4_vue@3.5.26_typescript@5.9.3___vue@3.5.26_typescript@5.9.3_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///C:/Users/User/OneDrive/Desktop/Todo-Finish/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.55.1_vue-router@4.6.4_vue@3.5.26_typescript@5.9.3___vue@3.5.26_typescript@5.9.3_/node_modules/unplugin-vue-router/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\User\\OneDrive\\Desktop\\Todo-Finish";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/]
        })
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue", ".md"],
      dts: "src/typed-router.d.ts"
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    // https://github.com/unplugin/unplugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(await Shiki({
          defaultColor: false,
          themes: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        }));
      }
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom"
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcVG9kby1GaW5pc2hcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxUb2RvLUZpbmlzaFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVXNlci9PbmVEcml2ZS9EZXNrdG9wL1RvZG8tRmluaXNoL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgVnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuaW1wb3J0IGdlbmVyYXRlU2l0ZW1hcCBmcm9tIFwidml0ZS1zc2ctc2l0ZW1hcFwiXG5pbXBvcnQgTGF5b3V0cyBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWxheW91dHNcIlxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIlxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIlxuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJ1bnBsdWdpbi12dWUtbWFya2Rvd24vdml0ZVwiXG5pbXBvcnQgVnVlTWFjcm9zIGZyb20gXCJ1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGVcIlxuaW1wb3J0IFZ1ZUkxOG4gZnJvbSBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGVcIlxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIlxuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIlxuaW1wb3J0IExpbmtBdHRyaWJ1dGVzIGZyb20gXCJtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXNcIlxuaW1wb3J0IFNoaWtpIGZyb20gXCJAc2hpa2lqcy9tYXJrZG93bi1pdFwiXG5pbXBvcnQgV2ViZm9udERvd25sb2FkIGZyb20gXCJ2aXRlLXBsdWdpbi13ZWJmb250LWRsXCJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInVucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZVwiXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gXCJ1bnBsdWdpbi12dWUtcm91dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkAvXCI6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpfS9gLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIFZ1ZU1hY3Jvcyh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogVnVlKHtcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIGV4dGVuc2lvbnM6IFtcIi52dWVcIiwgXCIubWRcIl0sXG4gICAgICBkdHM6IFwic3JjL3R5cGVkLXJvdXRlci5kLnRzXCIsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICBcInZ1ZVwiLFxuICAgICAgICBcInZ1ZS1pMThuXCIsXG4gICAgICAgIFwiQHZ1ZXVzZS9oZWFkXCIsXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCIsXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICB7XG4gICAgICAgICAgLy8gYWRkIGFueSBvdGhlciBpbXBvcnRzIHlvdSB3ZXJlIHJlbHlpbmcgb25cbiAgICAgICAgICBcInZ1ZS1yb3V0ZXIvYXV0b1wiOiBbXCJ1c2VMaW5rXCJdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogXCJzcmMvYXV0by1pbXBvcnRzLmQudHNcIixcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgXCJzcmMvY29tcG9zYWJsZXNcIixcbiAgICAgICAgXCJzcmMvc3RvcmVzXCIsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiLCBcIm1kXCJdLFxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGR0czogXCJzcmMvY29tcG9uZW50cy5kLnRzXCIsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5wbHVnaW4vdW5wbHVnaW4tdnVlLW1hcmtkb3duXG4gICAgLy8gRG9uJ3QgbmVlZCB0aGlzPyBUcnkgdml0ZXNzZS1saXRlOiBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZXNzZS1saXRlXG4gICAgTWFya2Rvd24oe1xuICAgICAgd3JhcHBlckNsYXNzZXM6IFwicHJvc2UgcHJvc2Utc20gbS1hdXRvIHRleHQtbGVmdFwiLFxuICAgICAgaGVhZEVuYWJsZWQ6IHRydWUsXG4gICAgICBhc3luYyBtYXJrZG93bkl0U2V0dXAobWQpIHtcbiAgICAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICByZWw6IFwibm9vcGVuZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBtZC51c2UoYXdhaXQgU2hpa2koe1xuICAgICAgICAgIGRlZmF1bHRDb2xvcjogZmFsc2UsXG4gICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICBsaWdodDogXCJ2aXRlc3NlLWxpZ2h0XCIsXG4gICAgICAgICAgICBkYXJrOiBcInZpdGVzc2UtZGFya1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pKVxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXCJmYXZpY29uLnN2Z1wiLCBcInNhZmFyaS1waW5uZWQtdGFiLnN2Z1wiXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6IFwiVml0ZXNzZVwiLFxuICAgICAgICBzaG9ydF9uYW1lOiBcIlZpdGVzc2VcIixcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvcHdhLTE5MngxOTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9wd2EtNTEyeDUxMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL3B3YS01MTJ4NTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1hc2thYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibG9jYWxlcy8qKlwiKV0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmVhdC1hZ2VuY3kvdml0ZS1wbHVnaW4td2ViZm9udC1kbFxuICAgIFdlYmZvbnREb3dubG9hZCgpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYmZhbnNwbHovdml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXG4gICAgVnVlRGV2VG9vbHMoKSxcbiAgXSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3RcbiAgdGVzdDoge1xuICAgIGluY2x1ZGU6IFtcInRlc3QvKiovKi50ZXN0LnRzXCJdLFxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gIH0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtc3NnXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6IFwiYXN5bmNcIixcbiAgICBmb3JtYXR0aW5nOiBcIm1pbmlmeVwiLFxuICAgIGNyaXR0ZXJzT3B0aW9uczoge1xuICAgICAgcmVkdWNlSW5saW5lU3R5bGVzOiBmYWxzZSxcbiAgICB9LFxuICAgIG9uRmluaXNoZWQoKSB7XG4gICAgICBnZW5lcmF0ZVNpdGVtYXAoKVxuICAgIH0sXG4gIH0sXG5cbiAgc3NyOiB7XG4gICAgLy8gVE9ETzogd29ya2Fyb3VuZCB1bnRpbCB0aGV5IHN1cHBvcnQgbmF0aXZlIEVTTVxuICAgIG5vRXh0ZXJuYWw6IFtcIndvcmtib3gtd2luZG93XCIsIC92dWUtaTE4bi9dLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsT0FBTyxVQUFVO0FBQzdVLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sZUFBZTtBQUN0QixPQUFPLGFBQWE7QUFDcEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGVBQWU7QUFDdEIsU0FBUyw0QkFBNEI7QUFoQnJDLElBQU0sbUNBQW1DO0FBa0J6QyxJQUFPLHNCQUFR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
