import lucia from "lucia-sdk";

// Maps a fakestoreapi-shaped product/cart item onto the sku/name/price/link
// payload shape used for item-level SDK tracking, so each event can be
// deep-linked back to the item's product page. `qty` only exists on cart
// items (viewItem/buy-now call this with the raw product, which has none) —
// omitted rather than sent as 1, so the backend can tell "no quantity data"
// apart from "quantity of one".
export const toItemPayload = (product) => ({
    sku: product.id,
    name: product.title,
    price: product.price,
    link: `/product/${product.id}`,
    ...(product.qty !== undefined && { quantity: product.qty }),
});

export const trackItemEvent = (eventTag, product) => {
    lucia.trackConversion(eventTag, 0, toItemPayload(product));
};
