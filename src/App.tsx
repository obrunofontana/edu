import { ApolloProvider } from '@apollo/client'

import { Training } from "./pages/Training"
import { Router } from "./Router"
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
