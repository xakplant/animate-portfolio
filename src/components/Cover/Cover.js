import React, { Component, Suspense, lazy } from 'react';
import Preloader from '../Preloader/Preloader';
const MainArea = lazy(() => import('../MainArea/MainArea'));


export default class Cover extends Component{
    render(){
        return(
            <Suspense fallback={<Preloader/>}>
                <MainArea />
            </Suspense>
        );
    }
}