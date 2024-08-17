import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { handlePosts } from "../handler/handlePosts.mjs";
import { postWrapper } from "../data/constants.mjs";

// toggling mobile nav
toggleMobileNav();
// fetching and displaying posts
handlePosts(postWrapper);
