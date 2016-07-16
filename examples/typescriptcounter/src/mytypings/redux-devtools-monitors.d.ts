declare namespace __Redux {
    namespace __DevTools {
        var DockMonitor: any;
        var LogMonitor: any;
        var SliderMonitor: any;
        var Inspector: any;
        var DiffMonitor: any;
        var FilterableLogMonitor: any;
        var ChartMonitor: any;
    }
}
declare module "redux-devtools-dock-monitor" {
    import  DockMonitor = __Redux.__DevTools.DockMonitor;
    export default DockMonitor;
}

declare module "redux-devtools-log-monitor" {
    import  LogMonitor = __Redux.__DevTools.LogMonitor;
    export default LogMonitor;
}

declare module "redux-slider-monitor" {
    import  SliderMonitor = __Redux.__DevTools.SliderMonitor;
    export default SliderMonitor;
}
declare module "redux-devtools-inspector" {
    import  Inspector = __Redux.__DevTools.Inspector;
    export default Inspector;
}
declare module "redux-devtools-diff-monitor" {
    import  DiffMonitor = __Redux.__DevTools.DiffMonitor;
    export default DiffMonitor;
}
declare module "redux-devtools-filterable-log-monitor" {
    import  FilterableLogMonitor = __Redux.__DevTools.FilterableLogMonitor;
    export default FilterableLogMonitor;
}
declare module "redux-devtools-chart-monitor" {
    import  ChartMonitor = __Redux.__DevTools.ChartMonitor;
    export default ChartMonitor;
}
