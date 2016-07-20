declare namespace __Redux {
    namespace __DevTools {
        function createDevTools(p: any): any;
        function persistState(p:any): any;
    }
}
declare module "redux-devtools" {
    import DevTools = __Redux.__DevTools;
    export = DevTools;
}