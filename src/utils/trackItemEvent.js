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

// Amount stays 0 on every step but "purchase". The backend sums
// event_metrics.conversion_value across all conversion events without
// filtering on the tag, so billing a view or a cart add as revenue would
// inflate total_conversion_value, ROAS and the user's spend tier — and
// "item added" fires on every quantity bump. The price travels as item
// metadata instead, where reading it implies nothing about revenue.
export const trackItemEvent = (eventTag, product) => {
    lucia.trackConversion(eventTag, 0, { items: [toItemPayload(product)] });
};
