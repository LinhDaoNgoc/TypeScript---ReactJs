import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
          <menu>
            <ul>
              <li><a href="/">Tin tức</a></li>
              <li><a href="/">tức</a></li>
              <li><a href="/admin/products/add">add</a></li>
              <li><a href="">tức</a></li>
            </ul>
          </menu>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default WebsiteLayout