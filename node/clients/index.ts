import { IOClients } from '@vtex/api'

import { SearchClient } from './search'
// import { SearchClient } from './searchV1'

export class Clients extends IOClients {
  get search() {
    return this.getOrSet('search', SearchClient)
  }
}
