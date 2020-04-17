import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '@/containers/Layout'

import Spiner from '@/components/Utils/Spiner'
import Backdrop from '@/components/Utils/Backdrop'

const ErrorBoundary = lazy(() => import('@/components/Utils/Error'))
const Main = lazy(() => import('@/components/Content/Main'))

export default (
    <Switch>
        <Route path='/' exact>
            <Layout>
                <Suspense fallback={
                    <Backdrop>
                        <Spiner />
                    </Backdrop>
                }>
                    <ErrorBoundary>
                        <Main />
                    </ErrorBoundary>
                </Suspense >
            </Layout>
        </Route>
    </Switch>
)