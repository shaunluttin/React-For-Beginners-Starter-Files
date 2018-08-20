import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StoreSelector from "./StoreSelector";
import NotFound from "./NotFound";
import App from "./App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StoreSelector} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch> 
    </BrowserRouter>
);

export default Router;