import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/_index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      style: {
        fontFamily: "system-ui, sans-serif",
        fontSize: "10px",
        lineHeight: "1.8",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
        height: "100vh"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "HELLO FROM REMIX APP" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-EY5NOYUW.js.map
