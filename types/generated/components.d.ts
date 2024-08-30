import type { Struct, Schema } from '@strapi/strapi';

export interface ProductSize extends Struct.ComponentSchema {
  collectionName: 'components_product_sizes';
  info: {
    displayName: 'size';
    icon: 'apps';
  };
  attributes: {
    label: Schema.Attribute.String;
    priceChange: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.size': ProductSize;
    }
  }
}
