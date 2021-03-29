import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AlbumList from './pages/AlbumList'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <AlbumList />
          </Route>
        </Switch>
      </BrowserRouter>
      Find me in src/app.js!
    </div>
  )
}
