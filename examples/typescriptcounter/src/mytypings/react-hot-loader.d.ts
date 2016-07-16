declare namespace __React {
    namespace __HotLoader {
        var AppContainer: any;
    }
}
declare module "react-hot-loader" {
    import ReactHotLoader = __React.__HotLoader;
    export = ReactHotLoader;
}