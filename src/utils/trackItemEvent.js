import lucia from "lucia-sdk";

// Maps a fakestoreapi-shaped product/cart item onto the sku/name/price/link
// payload shape used for item-level SDK tracking, so each event can be
// deep-linked back to the item's product page.
export const toItemPayload = (product) => ({
    sku: product.id,
    name: product.title,
    price: product.price,
    link: `/product/${product.id}`,
});

export const trackItemEvent = (eventTag, product) => {
    lucia.trackConversion(eventTag, 0, toItemPayload(product));
};
