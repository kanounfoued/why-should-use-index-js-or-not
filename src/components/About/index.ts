export { default as Button } from "./button";
export { default as AboutHeader } from "./AboutHeader";
export { default as AboutComplexComponent } from "./AboutComplexComponent";

/**
 *
 *
 * Trade off
 *
 * if you try to import only one component from the index file:
 *  - all the imported exported components within it will shipped into the bundle.
 *      - slower loading time.
 *
 * Solution:
 *  - Need to lazy load the components in index. (not well written file)
 *  - Put only the expected components to be used as a collection, all at once. (need to overthink which component need to go with another.)
 *
 *
 *
 * Modules become tightly coupled: Changes in index js can cause cascading effects on other modules.
 *  - Makes the code harder to maintain.
 *
 */

/**
 *
 * Pros:
 *
 *  * Provide kind of structure: you can specify what should go in public and what is not,
 *  it provides something like public and private modules.
 *
 *
 */

/**
 *
 * CONCLUSION:
 *
 * AFTER DOING SOME RESEARCH ABOUT THE TOPIC, IT TURNS OUT THAT THE TREE SHAKING FEATURE ALLOWS TO REMOVE THE DEAD CODE WHICH WAS EXPORTED THROUGH THE INDEX JS FILE, AND NOT IMPORTED IN OTHER FILES.
 *
 * IT MEANS:
 *
 * THE INDEX EXPORTED IS NOT SUITABLE FOR Common JS MODULES  IN NODE JS.
 * WHAREAS FOR BROWSERS IT IS OK BECAUSE OF THE TREE SHAKING FEATURE.
 *
 */
