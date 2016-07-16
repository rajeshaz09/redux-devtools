declare namespace __Redux {
    namespace __DevTools {
        namespace __Dock {
            var monitor: any;
        }
    }
}
declare module "redux-devtools-dock-monitor" {
    import  DockMonitor = __Redux.__DevTools.__Dock.monitor;
    export default DockMonitor;
}