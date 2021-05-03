import type { InstanceOptions, IOContext } from "@vtex/api";
import { AppGraphQLClient } from "@vtex/api";

export class SearchClient extends AppGraphQLClient {
  constructor(ctx: IOContext, opts?: InstanceOptions) {
    super("vtex.store-graphql@2.x", ctx, opts);
  }

  productsByCollection(collection: string) {
    const { tenant } = this.context;

    return this.graphql
      .query<any, any>(
        {
          query: `query GetProducts ($collection: String) {
        products(collection: $collection) {
          brand
          items {
            nameComplete
          }
        }
      }`,
          variables: {
            collection,
          },
        },
        {
          headers: {
            ...this.options?.headers,
            "Proxy-Authorization": this.context.authToken,
            VtexIdclientAutCookie: this.context.authToken,
            "x-vtex-tenant": tenant,
          },
        }
      )
      .then(({ data: { products } }: any) => {
        return products;
      });
  }
}
